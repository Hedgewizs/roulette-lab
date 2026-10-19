/* Roulette Lab — European single-zero wheel. Correct number order & colors. */
const WHEEL_ORDER = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];
const REDS = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);
function numColor(n){ return n===0 ? '#1e7a46' : (REDS.has(n) ? '#b03a2e' : '#1c1c1c'); }
function isRed(n){ return REDS.has(n); }

/* Draw the wheel into an <svg viewBox="0 0 200 200">.
   highlight: winning number to glow, or -1 for none. rot: degrees rotation. */
function drawWheel(svg, rot, highlight){
  if(!svg) return;
  const cx=100, cy=100, R=96, rIn=62;
  let s = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#2a2118"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="${rIn}" fill="#101418"/>`;
  const n = WHEEL_ORDER.length, arc = 360/n;
  for(let i=0;i<n;i++){
    const num = WHEEL_ORDER[i];
    const a0 = (rot||0) + i*arc, a1 = a0 + arc;
    const p = a => { const r=a*Math.PI/180; return [cx+R*Math.cos(r), cy+R*Math.sin(r)]; };
    const q = a => { const r=a*Math.PI/180; return [cx+rIn*Math.cos(r), cy+rIn*Math.sin(r)]; };
    const [x0,y0]=p(a0),[x1,y1]=p(a1),[x2,y2]=q(a1),[x3,y3]=q(a0);
    const large = arc>180?1:0;
    const hot = (highlight===num);
    s += `<path d="M${x0.toFixed(1)},${y0.toFixed(1)} A${R},${R} 0 ${large} 1 ${x1.toFixed(1)},${y1.toFixed(1)} L${x2.toFixed(1)},${y2.toFixed(1)} A${rIn},${rIn} 0 ${large} 0 ${x3.toFixed(1)},${y3.toFixed(1)} Z" fill="${numColor(num)}" stroke="#c9a227" stroke-width="${hot?2.5:0.6}"/>`;
    const mid=(a0+a1)/2*Math.PI/180, rr=(R+rIn)/2;
    const tx=cx+rr*Math.cos(mid), ty=cy+rr*Math.sin(mid);
    s += `<text x="${tx.toFixed(1)}" y="${(ty+3).toFixed(1)}" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fff" transform="rotate(${(mid*180/Math.PI+90).toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)})">${num}</text>`;
  }
  // center cap
  s += `<circle cx="${cx}" cy="${cy}" r="30" fill="#1a1a1a" stroke="#c9a227" stroke-width="2"/>`;
  s += `<text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="11" font-weight="800" fill="#d4af37">0</text>`;
  svg.innerHTML = s;
}
function spinWheel(){ return Math.floor(Math.random()*37); }
