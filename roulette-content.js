/* Roulette Lab guide content — {en,zh} fields. Verified European single-zero math. */
const GUIDES = [
{
id:"basics", icon:"🎡",
title:{en:"How to play: the 60-second version", zh:"玩法：60 秒版本"},
intro:{en:"The dealer spins the wheel one way, tosses the ball the other way, and physics picks a number. You bet on where it lands. That's the whole game — everything else is packaging.",
zh:"荷官朝一個方向轉輪盤、朝反方向丟球，物理決定號碼。你賭球落在哪。這就是整個遊戲——其餘都是包裝。"},
sections:[
{h:{en:"The flow of a spin", zh:"一轉的流程"},
body:{en:`<p>1. <b>Place your bets</b> — put chips on the layout before the dealer waves off betting ("no more bets").<br>2. <b>The ball drops</b> — it rattles around and settles into a numbered pocket.<br>3. <b>The dealer marks it</b> — a marker (dolly) goes on the winning number, losers get swept, winners get paid.</p><p>Online and in the simulator here, it's instant. In a real casino, a spin takes about a minute — roughly 40–60 spins per hour at a full table.</p>`,
zh:`<p>1. <b>下注</b>——荷官喊停（"no more bets"）之前把籌碼放上版面。<br>2. <b>球落下</b>——球彈跳後掉進某個號碼格。<br>3. <b>荷官標記</b>——標記物（dolly）放在中獎號碼上，輸的收走，贏的賠付。</p><p>線上和本站模擬器是即時的。真實賭場一轉約一分鐘——滿桌每小時約 40–60 轉。</p>`}},
{h:{en:"The wheel", zh:"輪盤"},
body:{en:`<p>A European wheel has <b>37 pockets</b>: numbers 1–36 plus a single green <b>0</b>. The numbers aren't in order — they're arranged so red/black, high/low, and odd/even alternate as evenly as physics allows. The sequence starting at zero: 0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26.</p><p>That green zero is the entire business model. Every payout on the layout is priced as if it didn't exist — and it hits 1 time in 37.</p>`,
zh:`<p>歐式輪盤有 <b>37 格</b>：1–36 加上一格綠色 <b>0</b>。數字不是照順序排的——紅黑、大小、單雙盡可能交錯。從 0 開始的順序：0、32、15、19、4、21、2、25、17、34、6、27、13、36、11、30、8、23、10、5、24、16、33、1、20、14、31、9、22、18、29、7、28、12、35、3、26。</p><p>那格綠色 0 就是整個商業模式。版面上所有賠付都假裝它不存在——但它每 37 轉會出現 1 次。</p>`}},
],
mathBox:{en:`37 pockets, payouts priced for 36. The missing 1/37 is the house edge: <b>2.70%</b> on every bet.`,
zh:`37 格，賠付按 36 格定價。少的那 1/37 就是莊家優勢：每種注都是 <b>2.70%</b>。`},
verdict:{en:"Roulette is the simplest game in the casino to understand and one of the hardest to misunderstand — the price is printed on every bet. Play the European wheel, never the American one.",
zh:"輪盤是賭場裡最容易懂、也最難誤解的遊戲——每種注的價格都印在上面。玩歐式輪盤，永遠別碰美式。"}
},
{
id:"inside", icon:"🎯",
title:{en:"Inside bets: payouts & edges", zh:"內圍注：賠付與優勢"},
intro:{en:"Inside bets cover specific numbers or small groups. Bigger payouts, lower hit rates — but the edge never changes. It's 2.70% on all of them.",
zh:"內圍注押特定號碼或小組合。賠付高、中獎率低——但優勢永遠不變，全部都是 2.70%。"},
sections:[
{h:{en:"The six inside bets", zh:"六種內圍注"},
body:{en:`<table class="data"><tr><th>Bet</th><th>Covers</th><th>Pays</th><th>Hit rate</th><th>Edge</th></tr>
<tr><td><b>Straight up</b></td><td>1 number</td><td class="num">35:1</td><td class="num">1/37 (2.70%)</td><td class="num">2.70%</td></tr>
<tr><td><b>Split</b></td><td>2 adjacent numbers</td><td class="num">17:1</td><td class="num">2/37 (5.41%)</td><td class="num">2.70%</td></tr>
<tr><td><b>Street</b></td><td>3 numbers (a row)</td><td class="num">11:1</td><td class="num">3/37 (8.11%)</td><td class="num">2.70%</td></tr>
<tr><td><b>Corner</b></td><td>4 numbers (a block)</td><td class="num">8:1</td><td class="num">4/37 (10.81%)</td><td class="num">2.70%</td></tr>
<tr><td><b>Six line</b></td><td>6 numbers (two rows)</td><td class="num">5:1</td><td class="num">6/37 (16.22%)</td><td class="num">2.70%</td></tr>
<tr><td><b>Trio (0-1-2 or 0-2-3)</b></td><td>3 incl. zero</td><td class="num">11:1</td><td class="num">3/37 (8.11%)</td><td class="num">2.70%</td></tr></table>
<p>Notice the pattern: payout = (36 ÷ numbers covered) − 1. A fair payout on 1 number would be 36:1. You get 35:1. That missing unit, spread over 37 spins, is the 2.70%.</p>`,
zh:`<table class="data"><tr><th>注種</th><th>覆蓋</th><th>賠付</th><th>中獎率</th><th>優勢</th></tr>
<tr><td><b>單號</b></td><td>1 個號碼</td><td class="num">35:1</td><td class="num">1/37 (2.70%)</td><td class="num">2.70%</td></tr>
<tr><td><b>分注</b></td><td>2 個相鄰號碼</td><td class="num">17:1</td><td class="num">2/37 (5.41%)</td><td class="num">2.70%</td></tr>
<tr><td><b>街注</b></td><td>3 個號碼（一列）</td><td class="num">11:1</td><td class="num">3/37 (8.11%)</td><td class="num">2.70%</td></tr>
<tr><td><b>角注</b></td><td>4 個號碼（一格）</td><td class="num">8:1</td><td class="num">4/37 (10.81%)</td><td class="num">2.70%</td></tr>
<tr><td><b>六線注</b></td><td>6 個號碼（兩列）</td><td class="num">5:1</td><td class="num">6/37 (16.22%)</td><td class="num">2.70%</td></tr>
<tr><td><b>三號（含 0）</b></td><td>3 個含 0</td><td class="num">11:1</td><td class="num">3/37 (8.11%)</td><td class="num">2.70%</td></tr></table>
<p>看出規律了嗎：賠付 =（36 ÷ 覆蓋號碼數）− 1。公平賠付單號應該是 36:1，你拿到 35:1。少的那一份，分攤到 37 轉，就是那 2.70%。</p>`}},
],
mathBox:{en:`Every inside bet: edge = 1 − (payout+1) × (numbers/37) = <b>2.70%</b>. No exceptions on a European wheel.`,
zh:`每種內圍注：優勢 = 1 −（賠付+1）×（號碼數/37）= <b>2.70%</b>。歐式輪盤無例外。`},
verdict:{en:"Pick inside bets for volatility and fun, not for value — the price is identical across all of them. A straight-up and a six-line cost you exactly the same per dollar bet.",
zh:"選內圍注是為了波動和刺激，不是為了價值——所有注的價格一模一樣。單號和六線注，每賭一塊錢花掉的成本完全相同。"}
},
{
id:"outside", icon:"📊",
title:{en:"Outside bets: payouts & edges", zh:"外圍注：賠付與優勢"},
intro:{en:"Outside bets cover big groups — dozens, columns, and the even-money bets. They hit often and pay small. Same 2.70% edge, with one famous exception.",
zh:"外圍注押大組——打數、列、均等注。中獎頻繁、賠付小。同樣 2.70% 優勢，但有一個著名例外。"},
sections:[
{h:{en:"Dozens & columns", zh:"打數與列"},
body:{en:`<table class="data"><tr><th>Bet</th><th>Covers</th><th>Pays</th><th>Hit rate</th><th>Edge</th></tr>
<tr><td><b>1st/2nd/3rd dozen</b></td><td>12 numbers</td><td class="num">2:1</td><td class="num">12/37 (32.43%)</td><td class="num">2.70%</td></tr>
<tr><td><b>Column</b></td><td>12 numbers (a column)</td><td class="num">2:1</td><td class="num">12/37 (32.43%)</td><td class="num">2.70%</td></tr></table>`,
zh:`<table class="data"><tr><th>注種</th><th>覆蓋</th><th>賠付</th><th>中獎率</th><th>優勢</th></tr>
<tr><td><b>第一/二/三打</b></td><td>12 個號碼</td><td class="num">2:1</td><td class="num">12/37 (32.43%)</td><td class="num">2.70%</td></tr>
<tr><td><b>列注</b></td><td>12 個號碼（一列）</td><td class="num">2:1</td><td class="num">12/37 (32.43%)</td><td class="num">2.70%</td></tr></table>`}},
{h:{en:"Even-money bets & la partage", zh:"均等注與 la partage"},
body:{en:`<p><b>Red/Black, Odd/Even, 1–18/19–36</b> all pay 1:1 and hit 18/37 (48.65%). Standard edge: 2.70%.</p><p>But many European tables offer <b>la partage</b> ("sharing"): when zero hits, you lose only <i>half</i> your even-money bet instead of all of it. That cuts the edge on those bets to <b>1.35%</b> — the best deal in roulette, and one of the best even-money bets in the casino.</p><p>A rarer cousin, <b>en prison</b>, "imprisons" your bet for the next spin instead of taking half. Mathematically equivalent to la partage (1.35%).</p><div class="callout">If a table offers la partage, play your even-money bets there. It's the only rule variation in roulette that genuinely changes the price.</div>`,
zh:`<p><b>紅/黑、單/雙、小/大</b>都賠 1:1，中獎率 18/37（48.65%）。標準優勢 2.70%。</p><p>但許多歐式桌提供 <b>la partage</b>（「分享」）：開出 0 時，均等注只輸<i>一半</i>而非全輸。這把這些注的優勢砍到 <b>1.35%</b>——輪盤裡最划算的交易，也是賭場最好的均等注之一。</p><p>較少見的 <b>en prison</b> 則是把你的注「關起來」留到下一轉。數學上等同 la partage（1.35%）。</p><div class="callout">有 la partage 的桌，就在那裡玩均等注。這是輪盤裡唯一真正改變價格的規則變化。</div>`}},
],
mathBox:{en:`Even-money + la partage: you lose half on zero → edge = (1/37) × 0.5 = <b>1.35%</b>. Everything else: <b>2.70%</b>.`,
zh:`均等注 + la partage：開 0 只輸一半 → 優勢 =（1/37）× 0.5 = <b>1.35%</b>。其餘全部 <b>2.70%</b>。`},
verdict:{en:"If you want the cheapest roulette that exists: European wheel, la partage table, even-money bets only. 1.35% is as good as this game gets.",
zh:"想要最便宜的輪盤：歐式輪盤、la partage 桌、只玩均等注。1.35% 是這遊戲能給的最好價格。"}
},
{
id:"euro", icon:"🇪🇺",
title:{en:"European vs American: never play double-zero", zh:"歐式 vs 美式：永遠別碰雙零"},
intro:{en:"The American wheel adds a second green pocket (00). That one pocket nearly doubles the house edge on every bet. This is the easiest decision in the casino.",
zh:"美式輪盤多了一格綠色（00）。就這一格，讓每種注的莊家優勢幾乎翻倍。這是賭場裡最簡單的決定。"},
sections:[
{h:{en:"Side by side", zh:"並排比較"},
body:{en:`<table class="data"><tr><th></th><th>European</th><th>American</th></tr>
<tr><td>Pockets</td><td class="num">37 (single 0)</td><td class="num">38 (0 + 00)</td></tr>
<tr><td>Edge, all bets</td><td class="num"><b>2.70%</b></td><td class="num"><b>5.26%</b></td></tr>
<tr><td>Edge, even-money + la partage</td><td class="num"><b>1.35%</b></td><td class="num">n/a</td></tr>
<tr><td>"Basket" bet (0,00,1,2,3)</td><td class="num">n/a</td><td class="num"><b>7.89%</b> — worst bet on the layout</td></tr>
<tr><td>$10/spin, 50 spins/hr, cost/hr</td><td class="num">−$13.50</td><td class="num">−$26.30</td></tr></table>
<p>The American wheel costs you roughly <b>twice as much per hour</b> for the identical experience. Same ball, same wheel feel, same payouts — double the price.</p>`,
zh:`<table class="data"><tr><th></th><th>歐式</th><th>美式</th></tr>
<tr><td>格數</td><td class="num">37（單 0）</td><td class="num">38（0 + 00）</td></tr>
<tr><td>所有注優勢</td><td class="num"><b>2.70%</b></td><td class="num"><b>5.26%</b></td></tr>
<tr><td>均等注 + la partage</td><td class="num"><b>1.35%</b></td><td class="num">無</td></tr>
<tr><td>「籃子注」(0,00,1,2,3)</td><td class="num">無</td><td class="num"><b>7.89%</b>——全桌最爛的注</td></tr>
<tr><td>$10/轉、50 轉/小時，每小時成本</td><td class="num">−$13.50</td><td class="num">−$26.30</td></tr></table>
<p>美式輪盤每小時貴你<b>將近一倍</b>，體驗完全一樣。同樣的球、同樣的輪盤手感、同樣的賠付——雙倍價格。</p>`}},
{h:{en:"How to spot the wheels", zh:"怎麼分辨"},
body:{en:`<p><b>European:</b> one green pocket (0). Often says "European Roulette" on the felt. Common in Europe, Asia, and higher-limit rooms in Vegas.<br><b>American:</b> two green pockets (0 and 00). The default on the Vegas Strip and most US regional casinos.</p><p>If you're in the US and can't find single-zero, ask the pit — some houses keep one tucked away at higher minimums. It's worth the walk.</p>`,
zh:`<p><b>歐式：</b>一格綠色（0）。桌布常寫 "European Roulette"。歐洲、亞洲常見，Vegas 高額區也有。<br><b>美式：</b>兩格綠色（0 和 00）。Vegas 大道和多數美國地方賭場的預設。</p><p>在美國找不到單零？問 pit——有些賭場在高額區藏了一桌。值得走過去。</p>`}},
],
mathBox:{en:`American edge = 2/38 = <b>5.26%</b>. Basket bet = 1 − 6/5 × 5/38 = <b>7.89%</b>. The extra zero is never "just one more number".`,
zh:`美式優勢 = 2/38 = <b>5.26%</b>。籃子注 = 1 − 6/5 × 5/38 = <b>7.89%</b>。多那格零永遠不只是「多一個號碼」。`},
verdict:{en:"Never play American roulette if a European wheel exists in the building. This isn't strategy — it's shopping.",
zh:"同一棟樓有歐式輪盤，就永遠別碰美式。這不是策略，是比價。"}
},
{
id:"math", icon:"📐",
title:{en:"The math, plainly", zh:"數學，直白版"},
intro:{en:"Why 2.70%, where your money actually goes, and what an hour of roulette really costs. No formulas you can't do on a napkin.",
zh:"為什麼是 2.70%、你的錢實際去哪了、一小時輪盤的真實代價。不需要餐巾紙算不出來的公式。"},
sections:[
{h:{en:"Where the 2.70% comes from", zh:"2.70% 從哪來"},
body:{en:`<p>Take red: 18 red pockets out of 37. Fair payout would be 37/18 = 2.056 to 1. You get 2 to 1 (1:1 plus your stake back). The shortfall:</p><p class="big">Edge = 1 − (2 × 18/37) = 1 − 36/37 = <b>1/37 = 2.70%</b></p><p>Same arithmetic for every bet on the layout. The zero is the only reason the casino wins — remove it and every bet would be exactly fair.</p>`,
zh:`<p>拿紅色來說：37 格裡 18 格紅。公平賠付應是 37/18 = 2.056 比 1。你拿到 2 比 1（1:1 加本金退回）。差額：</p><p class="big">優勢 = 1 −（2 × 18/37）= 1 − 36/37 = <b>1/37 = 2.70%</b></p><p>版面上每種注都是同一套算術。0 是賭場贏錢的唯一原因——拿掉它，每種注都完全公平。</p>`}},
{h:{en:"What it costs per hour", zh:"每小時花多少"},
body:{en:`<p>Expected hourly cost = <b>bet size × edge × spins per hour</b>.</p><table class="data"><tr><th>Your game</th><th class="num">Cost / hour</th></tr>
<tr><td>$10 even-money, la partage table, 50 spins/hr</td><td class="num">−$6.75</td></tr>
<tr><td>$10 even-money, standard Euro, 50 spins/hr</td><td class="num">−$13.50</td></tr>
<tr><td>$25 mix of inside bets, Euro, 50 spins/hr</td><td class="num">−$33.75</td></tr>
<tr><td>$10 even-money, American wheel, 50 spins/hr</td><td class="num">−$26.30</td></tr></table>
<p>That's the <i>average</i>. Any single hour can swing hundreds either way — the edge only shows up over thousands of spins. Try the Cost Calculator to price your own game.</p>`,
zh:`<p>預期每小時成本 = <b>注碼 × 優勢 × 每小時轉數</b>。</p><table class="data"><tr><th>你的玩法</th><th class="num">每小時成本</th></tr>
<tr><td>$10 均等注、la partage 桌、50 轉/小時</td><td class="num">−$6.75</td></tr>
<tr><td>$10 均等注、標準歐式、50 轉/小時</td><td class="num">−$13.50</td></tr>
<tr><td>$25 內圍注混合、歐式、50 轉/小時</td><td class="num">−$33.75</td></tr>
<tr><td>$10 均等注、美式輪盤、50 轉/小時</td><td class="num">−$26.30</td></tr></table>
<p>這是<i>平均值</i>。單一小時上下幾百塊都很正常——優勢要幾千轉才會現形。用成本計算機算你自己的玩法。</p>`}},
],
mathBox:{en:`Cost/hr = bet × 0.0270 × spins/hr. Halve it with la partage (0.0135). Double it on American (0.0526).`,
zh:`每小時成本 = 注碼 × 0.0270 × 每小時轉數。la partage 減半（0.0135）。美式加倍（0.0526）。`},
verdict:{en:"Roulette is priced by the spin. Fewer spins per hour and smaller bets are the only real 'strategy' for stretching entertainment dollars.",
zh:"輪盤按轉收費。減少每小時轉數、縮小注碼，是拉長娛樂時間唯一真正的「策略」。"}
},
{
id:"systems", icon:"🧠",
title:{en:"Betting systems: the honest verdict", zh:"投注系統：誠實判決"},
intro:{en:"Martingale, Fibonacci, D'Alembert — I've run the math on all of them. Here's what they actually do, and the one thing none of them can do.",
zh:"Martingale、費波納契、D'Alembert——我都算過。它們實際做了什麼、有什麼做不到，一次說清楚。"},
sections:[
{h:{en:"Martingale (double after every loss)", zh:"Martingale（輸了加倍）"},
body:{en:`<p>Bet $10 on red. Lose → $20. Lose → $40. Keep doubling until red hits, then you're up $10. Feels bulletproof — until the losing streak meets the table limit or your bankroll.</p><p>8 losses in a row happens about once every 200 sequences. When it does, you've bet $10+$20+…+$1280 = <b>$2,550 to win $10</b>. The edge didn't move; the system just concentrated your risk into rare catastrophes.</p>`,
zh:`<p>$10 押紅。輸 → $20。輸 → $40。一直加倍直到開紅，你贏 $10。感覺無懈可擊——直到連敗撞上桌檯上限或你的賭本。</p><p>連輸 8 次約每 200 組出現一次。發生時你押了 $10+$20+…+$1280 = <b>$2,550 只為贏 $10</b>。優勢沒動；系統只是把風險濃縮成罕見的災難。</p>`}},
{h:{en:"Fibonacci & D'Alembert", zh:"費波納契與 D'Alembert"},
body:{en:`<p><b>Fibonacci</b> (1,1,2,3,5,8… after losses) and <b>D'Alembert</b> (+1 unit after a loss, −1 after a win) are gentler progressions — smaller bets, slower bleed. They feel safer because the catastrophes are smaller.</p><p>But "gentler" only changes the <i>shape</i> of the losses, not the total. Every spin still costs 2.70% of what's wagered. No progression can change the price per spin — it can only rearrange when you pay it.</p>`,
zh:`<p><b>費波納契</b>（輸後按 1,1,2,3,5,8…加注）和 <b>D'Alembert</b>（輸+1 單位、贏−1 單位）是溫和版——注小、失血慢。感覺安全是因為災難比較小。</p><p>但「溫和」只改變虧損的<i>形狀</i>，不改變總額。每一轉還是收走注碼的 2.70%。沒有任何級數能改變每轉價格——只能重新安排你什麼時候付。</p>`}},
{h:{en:"What systems actually do", zh:"系統實際做了什麼"},
body:{en:`<p>Every betting system does exactly two things:</p><p>1. <b>Changes volatility</b> — Martingale gives many small wins and rare huge losses; flat betting gives a smooth slow drain.<br>2. <b>Changes nothing about expectation</b> — total wagered × 2.70% is gone regardless.</p><p>That's it. A system can pick <i>how</i> you lose, never <i>whether</i>. If someone sells you a system that claims otherwise, they're selling the packaging, not the math.</p>`,
zh:`<p>每個投注系統只做兩件事：</p><p>1. <b>改變波動</b>——Martingale 給你很多小贏和罕見巨虧；平注給你平滑的慢失血。<br>2. <b>期望值完全不變</b>——總投注 × 2.70% 照樣不見。</p><p>就這樣。系統能選<i>怎麼</i>輸，永遠不能選<i>輸不輸</i>。有人賣你號稱能改變這點的系統，他賣的是包裝，不是數學。</p>`}},
],
mathBox:{en:`Expectation is linear: E(system) = Σ E(each bet) = −2.70% × total wagered. Progressions rearrange; they never reduce.`,
zh:`期望值是線性的：E（系統）= Σ E（每注）= −2.70% × 總投注。級數只能重排，永遠不能減少。`},
verdict:{en:"Use a system if you enjoy the ride — flat betting is boring and there's nothing wrong with entertainment. Just never confuse a betting pattern with an edge.",
zh:"喜歡刺激就用系統——平注很無聊，娛樂沒有錯。只是永遠別把投注模式誤認成優勢。"}
},
];
const GLOSSARY = [
{en:"La partage", zh:"La Partage（分享）", def:{en:"Rule on some European tables: even-money bets lose only half when zero hits. Cuts the edge to 1.35%.", zh:"部分歐式桌的規則：開 0 時均等注只輸一半。優勢降到 1.35%。"}},
{en:"En prison", zh:"En Prison（入獄）", def:{en:"Alternative to la partage: the bet is held for the next spin instead of losing half. Same 1.35% edge.", zh:"la partage 的替代：注碼留到下一轉而非輸一半。同樣 1.35% 優勢。"}},
{en:"Dolly", zh:"Dolly（標記物）", def:{en:"The marker the dealer places on the winning number before paying out.", zh:"賠付前荷官放在中獎號碼上的標記物。"}},
{en:"Inside bets", zh:"內圍注", def:{en:"Bets on specific numbers (straight, split, street, corner, six-line).", zh:"押特定號碼的注（單號、分注、街注、角注、六線）。"}},
{en:"Outside bets", zh:"外圍注", def:{en:"Bets on large groups: dozens, columns, red/black, odd/even, high/low.", zh:"押大組的注：打數、列、紅黑、單雙、大小。"}},
{en:"Even-money", zh:"均等注", def:{en:"Red/black, odd/even, 1–18/19–36. Pays 1:1.", zh:"紅/黑、單/雙、1–18/19–36。賠 1:1。"}},
{en:"Straight up", zh:"單號", def:{en:"A bet on one number. Pays 35:1.", zh:"押一個號碼。賠 35:1。"}},
{en:"Basket bet", zh:"籃子注", def:{en:"American-wheel bet on 0, 00, 1, 2, 3. 7.89% edge — the worst bet in roulette.", zh:"美式輪盤押 0、00、1、2、3。7.89% 優勢——輪盤最爛的注。"}},
{en:"House edge", zh:"莊家優勢", def:{en:"The casino's average cut per dollar bet: 2.70% European, 5.26% American.", zh:"賭場每賭一塊的平均抽成：歐式 2.70%，美式 5.26%。"}},
{en:"No more bets", zh:"停止下注", def:{en:"The dealer's call closing betting before the ball drops.", zh:"球落下前荷官喊停下注。"}},
];
