/* Roulette Lab — wheel engine. European, American (double-zero) & Triple-zero.
   Correct number order & colors for each variant. */
const WHEEL_ORDER_EU = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];
const WHEEL_ORDER_US = [0,28,9,26,30,11,7,20,32,17,5,22,34,15,3,24,36,13,1,'00',27,10,25,29,12,8,19,31,18,6,21,33,16,4,23,35,14,2];
const WHEEL_ORDER_3Z = [0,28,9,26,30,11,7,20,32,17,5,22,34,15,3,24,36,13,1,'00',27,10,25,29,12,8,19,31,18,6,21,33,16,4,23,35,14,2,'000'];
const REDS = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);

const VARIANTS = {
  eu: { pockets:37, zeros:1, edge:1/37,   en:"Single Zero (European)", zh:"單零（歐式）" },
  us: { pockets:38, zeros:2, edge:2/38,   en:"Double Zero (American)", zh:"雙零（美式）" },
  z3: { pockets:39, zeros:3, edge:3/39,   en:"Triple Zero",            zh:"三零" },
};
function wheelOrder(v){ return v==='us'?WHEEL_ORDER_US : v==='z3'?WHEEL_ORDER_3Z : WHEEL_ORDER_EU; }
function isZero(v){ return v===0 || v==='00' || v==='000'; }
function numColor(n){ return isZero(n) ? '#1e7a46' : (REDS.has(n) ? '#b03a2e' : '#1c1c1c'); }
function isRed(n){ return REDS.has(n); }
function variantEdge(v){ return VARIANTS[v||'eu'].edge; }
function variantPockets(v){ return VARIANTS[v||'eu'].pockets; }

/* Draw the wheel into an <svg viewBox="0 0 200 200">.
   highlight: winning number to glow, or -1 for none. rot: degrees rotation. */
function drawWheel(svg, rot, highlight, variant){
  if(!svg) return;
  const ORDER = wheelOrder(variant);
  const cx=100, cy=100, R=96, rIn=62;
  let s = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#2a2118"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="${rIn}" fill="#101418"/>`;
  const n = ORDER.length, arc = 360/n;
  for(let i=0;i<n;i++){
    const num = ORDER[i];
    const a0 = (rot||0) + i*arc, a1 = a0 + arc;
    const p = a => { const r=a*Math.PI/180; return [cx+R*Math.cos(r), cy+R*Math.sin(r)]; };
    const q = a => { const r=a*Math.PI/180; return [cx+rIn*Math.cos(r), cy+rIn*Math.sin(r)]; };
    const [x0,y0]=p(a0),[x1,y1]=p(a1),[x2,y2]=q(a1),[x3,y3]=q(a0);
    const large = arc>180?1:0;
    const hot = (highlight!==-1 && String(highlight)===String(num));
    s += `<path d="M${x0.toFixed(1)},${y0.toFixed(1)} A${R},${R} 0 ${large} 1 ${x1.toFixed(1)},${y1.toFixed(1)} L${x2.toFixed(1)},${y2.toFixed(1)} A${rIn},${rIn} 0 ${large} 0 ${x3.toFixed(1)},${y3.toFixed(1)} Z" fill="${numColor(num)}" stroke="#c9a227" stroke-width="${hot?2.5:0.6}"/>`;
    const mid=(a0+a1)/2*Math.PI/180, rr=(R+rIn)/2;
    const tx=cx+rr*Math.cos(mid), ty=cy+rr*Math.sin(mid);
    s += `<text x="${tx.toFixed(1)}" y="${(ty+3).toFixed(1)}" text-anchor="middle" font-size="${n>37?7.5:8.5}" font-weight="700" fill="#fff" transform="rotate(${(mid*180/Math.PI+90).toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)})">${num}</text>`;
  }
  // center cap
  s += `<circle cx="${cx}" cy="${cy}" r="30" fill="#1a1a1a" stroke="#c9a227" stroke-width="2"/>`;
  s += `<text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="11" font-weight="800" fill="#d4af37">${(variant||'eu')==='eu'?'0':(variant==='us'?'0/00':'0/00/000')}</text>`;
  svg.innerHTML = s;
}
function spinWheel(variant){
  const ORDER = wheelOrder(variant);
  return ORDER[Math.floor(Math.random()*ORDER.length)];
}
