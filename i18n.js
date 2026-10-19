/* Roulette Lab i18n — full-site EN / 繁中 (Taiwan) toggle.
   Chrome strings (nav, buttons, labels) live here.
   Content strings (guides, glossary) live in roulette-content.js with {en,zh} fields. */
const I18N = {
en:{
  nav_home:"Home", nav_guide:"Guide", nav_sim:"Simulator",
  nav_calc:"Calculators", nav_gear:"Gear", nav_about:"About",
  hero_tag:"The honest roulette lab. Single-zero math. No real money.",
  hero_sub:"Learn every bet, spin a true European wheel, and see exactly what each spin costs you — free, no signup.",
  cta_sim:"Open the simulator", cta_guide:"Read the guide",
  feat_sim_t:"European wheel simulator", feat_sim_d:"A true single-zero wheel with the correct number order. Click the layout to place inside and outside bets, spin, and watch your bankroll move.",
  feat_guide_t:"Complete guide", feat_guide_d:"How to play, every bet with true payouts and edges, European vs American, and why betting systems can't beat 2.70%.",
  feat_calc_t:"Payout & cost calculators", feat_calc_d:"Look up any payout instantly, and find out what your session really costs per hour.",
  feat_gear_t:"Gear", feat_gear_d:"Honest gambling-math books and practice gear I actually recommend — plus Roulette Lab merch.",
  roll:"Spin", clear_bets:"Clear bets",
  bankroll:"Bankroll", win_goal:"Win goal", stop_loss:"Stop loss",
  ad_label:"ADVERTISEMENT",
  house_ad_label:"Our sites",
  house_ad_text:"🎲 Labs hub — craps, baccarat & roulette",
  disclosure:"Roulette Lab is a free educational simulator. No real money is wagered here. Every bet on a European wheel loses 2.70% in the long run (1.35% on even-money bets with la partage) — the math is shown honestly so you can see it for yourself.",
  footer_by:"Built for players who want the truth about the math.",
  nl_title:"\U0001F4EC iamthecasino.com \u2014 the letter",
  nl_desc:"Weekly: one options trade idea with the math, one casino truth, one comp-cruise deal. Free forever. Unsubscribe anytime.",
  footer_labs:"More from the Labs: ",
  start:"Start", stop:"Stop", reset:"Reset",
},
zh:{
  nav_home:"首頁", nav_guide:"指南", nav_sim:"模擬器",
  nav_calc:"計算機", nav_gear:"裝備", nav_about:"關於",
  hero_tag:"誠實的輪盤實驗室。單零數學。不賭真錢。",
  hero_sub:"學會每種注、轉動真正的歐式輪盤，看清每一轉的真實代價——免費，免註冊。",
  cta_sim:"開啟模擬器", cta_guide:"閱讀指南",
  feat_sim_t:"歐式輪盤模擬器", feat_sim_d:"真正的單零輪盤，數字順序正確。點擊版面下內外圍注，轉動，看賭本變化。",
  feat_guide_t:"完整指南", feat_guide_d:"玩法、每種注的真實賠付與優勢、歐式 vs 美式，以及為什麼投注系統贏不了 2.70%。",
  feat_calc_t:"賠付與成本計算機", feat_calc_d:"即時查詢任何賠付，算出你的玩法每小時真實花費。",
  feat_gear_t:"裝備", feat_gear_d:"我真心推薦的誠實賭博數學書與練習裝備——外加 Roulette Lab 周邊。",
  roll:"轉動", clear_bets:"清除注碼",
  bankroll:"賭本", win_goal:"停利目標", stop_loss:"停損",
  ad_label:"廣告",
  house_ad_label:"我們的網站",
  house_ad_text:"🎲 Labs 總覽——花旗骰、百家樂與輪盤",
  disclosure:"Roulette Lab 是免費教育模擬器，不涉及真錢投注。歐式輪盤每種注長期輸 2.70%（均等注在 la partage 規則下為 1.35%）——數學誠實呈現，讓你自己看見。",
  footer_by:"為想看清數學真相的玩家而建。",
  nl_title:"\U0001F4EC 成為莊家——電子報",
  nl_desc:"每週：一筆附數學的交易想法、一個賭場真相、一個郵輪優惠。永久免費，隨時退訂。",
  footer_labs:"Labs 系列：",
  start:"開始", stop:"停止", reset:"重設",
}};
let LANG = localStorage.getItem('roulettelab_lang') || 'en';
function t(key){ return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key; }
function setLang(l){
  LANG = (l==='zh') ? 'zh' : 'en';
  localStorage.setItem('roulettelab_lang', LANG);
  document.documentElement.lang = LANG==='zh' ? 'zh-Hant' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ el.placeholder = t(el.dataset.i18nPh); });
  const b = document.getElementById('langbtn'); if(b) b.textContent = LANG==='zh' ? 'EN' : '中';
  if (typeof onLangChange === 'function') onLangChange();
  if (typeof renderDynamic === 'function') renderDynamic();
}
function adSlot(){
  return `<div class="house-ad"><span class="house-ad-label" data-i18n="house_ad_label">${t('house_ad_label')}</span><a class="house-ad-link" href="https://hedgewizs.github.io/thecasinocruiser/labs.html" target="_blank" rel="noopener" data-i18n="house_ad_text">${t('house_ad_text')}</a></div>
  <!-- AdSense: paste responsive ad unit code inside .house-ad above; keep the label -->`;
}
function disclosure(){
  return `<div class="disclosure">⚠️ ${t('disclosure')}</div>`;
}
function navHTML(active){
  const L = [
    ['index.html','nav_home'],['guide.html','nav_guide'],['simulator.html','nav_sim'],
    ['calculators.html','nav_calc'],['gear.html','nav_gear'],['about.html','nav_about']
  ];
  return `<header class="site"><nav class="nav">
    <a class="brand" href="index.html">🔴 Roulette Lab <small>single-zero math, honestly</small></a>
    ${L.map(([h,k])=>`<a class="nl${active===h?' active':''}" href="${h}" data-i18n="${k}">${t(k)}</a>`).join('')}
    <button class="langbtn" id="langbtn" onclick="setLang(LANG==='zh'?'en':'zh')">${LANG==='zh'?'EN':'中'}</button>
  </nav></header>`;
}
function newsletterHTML(){
  return `<div class="wrap"><section class="block" style="margin-bottom:8px"><div class="card" style="text-align:center;border:1px solid var(--gold)">
    <h3 style="color:var(--gold);margin-top:0">${t('nl_title')}</h3>
    <p class="muted">${t('nl_desc')}</p>
    <div style="max-width:480px;margin:0 auto"><iframe src="https://iamthecasinocombethehouse.substack.com/embed" width="480" height="320" style="border:1px solid #EEE;background:#fff;max-width:100%;border-radius:8px" frameborder="0" scrolling="no" title="Subscribe"></iframe></div>
  </div></section></div>`;
}
function footerHTML(){
  return newsletterHTML()+`<footer class="site"><div class="wrap">
    <p>${t('footer_labs')}<a href="https://hedgewizs.github.io/thecasinocruiser/labs.html">🎲 Labs hub</a> · <a href="https://hedgewizs.github.io/craps-lab/">Craps Lab</a> · <a href="https://hedgewizs.github.io/baccarat-lab/">Baccarat Lab</a></p>
    <p data-i18n="footer_by">${t('footer_by')}</p>
    <p class="muted" style="font-size:.78rem">Roulette Lab · ${t('disclosure')}</p>
  </div></footer>
  <script>setLang(LANG);<\/script>`;
}
