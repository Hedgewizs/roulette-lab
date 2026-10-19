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
body:{en:`<table class="data"><tr><th></th><th>European</th><th>American</th><th>Triple Zero</th></tr>
<tr><td>Pockets</td><td class="num">37 (single 0)</td><td class="num">38 (0 + 00)</td><td class="num">39 (0 + 00 + 000)</td></tr>
<tr><td>Edge, all bets</td><td class="num"><b>2.70%</b></td><td class="num"><b>5.26%</b></td><td class="num"><b>7.69%</b></td></tr>
<tr><td>Edge, even-money + la partage</td><td class="num"><b>1.35%</b></td><td class="num">n/a</td><td class="num">n/a</td></tr>
<tr><td>"Basket" bet (0,00,1,2,3)</td><td class="num">n/a</td><td class="num"><b>7.89%</b> — worst bet on the layout</td><td class="num">n/a</td></tr>
<tr><td>$10/spin, 50 spins/hr, cost/hr</td><td class="num">−$13.50</td><td class="num">−$26.30</td><td class="num"><b>−$38.46</b></td></tr></table>
<p>The American wheel costs you roughly <b>twice as much per hour</b> for the identical experience. Triple zero? <b>Nearly triple</b> — some Vegas casinos installed these wheels hoping nobody would notice the third green pocket. Now you've noticed.</p>`,
zh:`<table class="data"><tr><th></th><th>歐式</th><th>美式</th><th>三零</th></tr>
<tr><td>格數</td><td class="num">37（單 0）</td><td class="num">38（0 + 00）</td><td class="num">39（0 + 00 + 000）</td></tr>
<tr><td>所有注優勢</td><td class="num"><b>2.70%</b></td><td class="num"><b>5.26%</b></td><td class="num"><b>7.69%</b></td></tr>
<tr><td>均等注 + la partage</td><td class="num"><b>1.35%</b></td><td class="num">無</td><td class="num">無</td></tr>
<tr><td>「籃子注」(0,00,1,2,3)</td><td class="num">無</td><td class="num"><b>7.89%</b>——全桌最爛的注</td><td class="num">無</td></tr>
<tr><td>$10/轉、50 轉/小時，每小時成本</td><td class="num">−$13.50</td><td class="num">−$26.30</td><td class="num"><b>−$38.46</b></td></tr></table>
<p>美式輪盤每小時貴你<b>將近一倍</b>，體驗完全一樣。三零？<b>將近三倍</b>——有些 Vegas 賭場裝了這種輪盤，指望沒人發現第三格綠色。現在你發現了。</p>`}},
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
<tr><td>$10 even-money, American wheel, 50 spins/hr</td><td class="num">−$26.30</td></tr>
<tr><td>$10 even-money, triple-zero wheel, 50 spins/hr</td><td class="num">−$38.46</td></tr></table>
<p>That's the <i>average</i>. Any single hour can swing hundreds either way — the edge only shows up over thousands of spins. Try the Cost Calculator to price your own game.</p>`,
zh:`<p>預期每小時成本 = <b>注碼 × 優勢 × 每小時轉數</b>。</p><table class="data"><tr><th>你的玩法</th><th class="num">每小時成本</th></tr>
<tr><td>$10 均等注、la partage 桌、50 轉/小時</td><td class="num">−$6.75</td></tr>
<tr><td>$10 均等注、標準歐式、50 轉/小時</td><td class="num">−$13.50</td></tr>
<tr><td>$25 內圍注混合、歐式、50 轉/小時</td><td class="num">−$33.75</td></tr>
<tr><td>$10 均等注、美式輪盤、50 轉/小時</td><td class="num">−$26.30</td></tr>
<tr><td>$10 均等注、三零輪盤、50 轉/小時</td><td class="num">−$38.46</td></tr></table>
<p>這是<i>平均值</i>。單一小時上下幾百塊都很正常——優勢要幾千轉才會現形。用成本計算機算你自己的玩法。</p>`}},
],
mathBox:{en:`Cost/hr = bet × edge × spins/hr. Single zero 0.0270, la partage 0.0135, American 0.0526, triple zero 0.0769.`,
zh:`每小時成本 = 注碼 × 優勢 × 每小時轉數。單零 0.0270，la partage 0.0135，美式 0.0526，三零 0.0769。`},
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
{
id:"methods", icon:"🎲",
title:{en:"Betting methods: coverage & progressions", zh:"投注方法：覆蓋與級數"},
intro:{en:"Beyond the classic progressions: the coverage systems people actually play — what they cover, what they cost, and the honest math on each. None of them changes the edge. All of them change the ride.",
zh:"經典級數之外：人們實際在玩的覆蓋系統——覆蓋什麼、花多少、每個的誠實數學。沒有一個能改變優勢，每一個都改變體驗。"},
sections:[
{h:{en:"Paroli / Reverse Martingale (ride the wins)", zh:"Paroli / 反 Martingale（乘勝追擊）"},
body:{en:`<p>Bet $10 on red. <b>Win → double to $20. Win → $40.</b> After 3 wins in a row (or any loss), bank the profit and restart at $10.</p><p>The appeal: your big bets are funded by the casino's money, so losing streaks cost little — the worst case is bleeding $10 at a time. The catch: 3-in-a-row on even-money happens only ~11% of the time, so most sequences end with a small loss or breakeven. Over time: still −2.70% of everything wagered.</p><p><b>Risk:</b> low. <b>Bankroll:</b> any — this is the cheapest progression to run.</p>`,
zh:`<p>$10 押紅。<b>贏 → 加倍到 $20。贏 → $40。</b>連贏 3 次（或任何一次輸）後，把利潤收起來，從 $10 重新開始。</p><p>吸引力：大注用賭場的錢付，連敗時虧得少——最慘就是一次 $10 慢慢流。代價：均等注連贏 3 次只有約 11% 機率，所以多數序列以小虧或打平收場。長期：還是總投注的 −2.70%。</p><p><b>風險：</b>低。<b>賭本：</b>隨意——這是最便宜的級數。</p>`}},
{h:{en:"Labouchere (the cancellation system)", zh:"Labouchere（消除系統）"},
body:{en:`<p>Write a sequence, e.g. <b>1-2-3-4</b>. Each bet = first + last numbers (1+4 = <b>5 units</b>). Win → cross off both ends. Lose → append the loss to the end (1-2-3-4-5). When the list is empty, you've won the sum of the original sequence (10 units).</p><p>It feels clever — wins erase two numbers, losses add only one, so you "only" need a ~33% win rate to clear the list. The trap: the list grows during losing streaks, and bets balloon exactly when you're coldest. A bad run turns 1-2-3-4 into 1-2-3-4-5-6-7-8 with 9-unit bets. Same 2.70% per dollar, concentrated into the worst moments.</p><p><b>Risk:</b> medium-high (escalates when losing). <b>Bankroll:</b> at least 50× your unit.</p>`,
zh:`<p>寫一串數字，例如 <b>1-2-3-4</b>。每次下注 = 首 + 尾（1+4 = <b>5 單位</b>）。贏 → 劃掉兩端。輸 → 把輸的加到尾巴（1-2-3-4-5）。整串劃完，你贏了原始總和（10 單位）。</p><p>感覺很聰明——贏一次消兩個數、輸一次只加一個，「只要」33% 勝率就能清單。陷阱：連敗時清單變長，注碼在你最冷的時候膨脹。一次壞運氣把 1-2-3-4 變成 1-2-3-4-5-6-7-8，下 9 單位。每塊錢還是 2.70%，集中在最慘的時刻付。</p><p><b>風險：</b>中高（輸時加碼）。<b>賭本：</b>至少 50 倍單位。</p>`}},
{h:{en:"James Bond strategy (the $200 flat coverage)", zh:"James Bond 策略（$200 固定覆蓋）"},
body:{en:`<p>The famous flat system: with $200 total — <b>$140 on High (19–36), $50 on the six-line 13–18, $10 on zero</b>. Every spin covers 25 of 37 numbers (67.6%).</p><p>Outcomes: 19–36 (except when… it always wins there) → +$80. 13–18 → +$100. Zero → +$160. Anything 1–12 → <b>−$200</b>.</p><p>It wins almost 7 times in 10 — which is exactly why it's dangerous. The 32.4% of spins that hit 1–12 erase two and a half wins each. Expected value per spin: −$200 × 2.70% = <b>−$5.40</b>, same as any $200 of roulette bets. The glamour is the hit rate; the price is identical.</p><p><b>Risk:</b> medium (feels safe, isn't). <b>Bankroll:</b> $200 units — bring several.</p>`,
zh:`<p>著名的固定系統：$200 總額——<b>$140 押大（19–36）、$50 押六線 13–18、$10 押 0</b>。每轉覆蓋 37 格中的 25 格（67.6%）。</p><p>結果：19–36 → +$80。13–18 → +$100。0 → +$160。1–12 → <b>−$200</b>。</p><p>10 次贏將近 7 次——這正是它危險的原因。32.4% 開出 1–12 的轉數，一次吃掉兩個半勝場。每轉期望值：−$200 × 2.70% = <b>−$5.40</b>，跟任何 $200 的輪盤注一模一樣。魅力是中獎率，價格完全相同。</p><p><b>風險：</b>中（感覺安全，其實不然）。<b>賭本：</b>$200 為一組——多帶幾組。</p>`}},
{h:{en:"Two-column coverage", zh:"雙列覆蓋"},
body:{en:`<p>Bet equal amounts on <b>two of the three columns</b> (24 numbers, 64.9% coverage). A hit pays 2:1 — you profit one unit. A miss (the third column or zero) loses two units.</p><p>This is a popular beginner framework because it "covers most of the board" and a single hit recovers a miss. The math: 24/37 win one unit, 13/37 lose two → expected −2/37 per unit = <b>−5.41%… on a 2-unit total it's the same 2.70% per dollar</b>. The coverage feels like defense; it's just volatility shaping.</p><p><b>Risk:</b> low-medium. <b>Bankroll:</b> 30× your per-column unit.</p>`,
zh:`<p>在<b>三列中的兩列</b>押等額（24 個號碼，64.9% 覆蓋）。中了賠 2:1——賺一單位。沒中（第三列或 0）輸兩單位。</p><p>這是熱門的新手框架，因為「覆蓋大半版面」，一次中就回本。數學：24/37 贏一單位、13/37 輸兩單位 → 期望 −2/37 每單位 = <b>每塊錢還是 2.70%</b>。覆蓋感覺像防守，其實只是波動整形。</p><p><b>風險：</b>中低。<b>賭本：</b>每列單位的 30 倍。</p>`}},
{h:{en:"Street-block coverage (six streets)", zh:"街注區塊（六條街）"},
body:{en:`<p>Bet one unit on <b>six consecutive streets</b> (18 numbers, 48.6% coverage — e.g. 13-14-15 through 28-29-30). A hit pays 11:1: you collect 12 units on 6 wagered = <b>+6 net</b>. A miss loses 6.</p><p>Variants add a Martingale kicker: double all six street bets after a miss. That turns a 48.6% hit rate into frequent small wins punctuated by −$60+ wipeouts.</p><p>On the "13 street" question I get asked: <b>13-14-15 is just one of the 12 streets</b> — it has no special properties. 8.11% hit rate, 11:1, 2.70% edge, exactly like the other eleven. If someone sells you a system "built around 13," they're selling numerology, not math.</p><p><b>Risk:</b> medium (high with the Martingale kicker). <b>Bankroll:</b> 20× the six-street total without progression; 100×+ with it.</p>`,
zh:`<p>在<b>六條連續的街注</b>各押一單位（18 個號碼，48.6% 覆蓋——例如 13-14-15 到 28-29-30）。中了賠 11:1：押 6 拿回 12 = <b>淨賺 6</b>。沒中輸 6。</p><p>變體加 Martingale：沒中就把六條街注全加倍。把 48.6% 中獎率變成頻繁小贏，夾雜 −$60 起跳的清倉。</p><p>關於常被問的「13 街」：<b>13-14-15 只是 12 條街之一</b>——沒有任何特殊之處。8.11% 中獎率、11:1、2.70% 優勢，跟另外十一條一模一樣。有人賣你「圍繞 13 打造」的系統，他賣的是數字命理，不是數學。</p><p><b>風險：</b>中（加 Martingale 變高）。<b>賭本：</b>六街總額的 20 倍（無級數）；100 倍以上（有級數）。</p>`}},
{h:{en:"1-3-2-5 progression (even-money)", zh:"1-3-2-5 級數（均等注）"},
body:{en:`<p>Positive progression on red/black etc.: bet <b>1 unit, then 3, then 2, then 5</b>. Any loss → back to 1. Complete the sequence → bank it, back to 1.</p><p>Best case (four straight wins): +12 units. The design goal is modest: turn short winning streaks into something, while a loss never costs more than the current step. It's the calmer cousin of Paroli — smaller peaks, smaller valleys. Edge per dollar: unchanged, 2.70%.</p><p><b>Risk:</b> low. <b>Bankroll:</b> 20× your unit is plenty.</p>`,
zh:`<p>均等注的正級數：<b>1 單位、3、2、5</b>。任何一次輸 → 回到 1。走完序列 → 收起來，回到 1。</p><p>最佳情況（連贏四次）：+12 單位。設計目標很克制：把短連贏變成實質獲利，而一次輸最多只賠當前級別。它是 Paroli 的冷靜表親——高峰小、低谷也小。每塊錢優勢：不變，2.70%。</p><p><b>風險：</b>低。<b>賭本：</b>單位的 20 倍綽綽有餘。</p>`}},
{h:{en:"The 15-spin challenge format", zh:"15 轉挑戰賽制"},
body:{en:`<p>A popular session format (some Vegas schools run it as a paid challenge): <b>fixed 15 spins, fixed buy-in, win-big-or-bust</b>. You pick any methods above, but the frame is fixed — no rebuys, no "one more spin."</p><p>Why it works as entertainment: the fixed frame kills the two biggest bankroll murderers — chasing losses and playing too long. The math per spin doesn't change, but <i>fewer spins at fixed stakes = less total expected loss</i>, which is the only lever that actually works. Set the frame before you sit down, win or lose.</p><p><b>Risk:</b> whatever methods you bring. <b>Bankroll:</b> the buy-in, and not a dollar more.</p>`,
zh:`<p>熱門的 session 格式（有些 Vegas 學校做成付費挑戰）：<b>固定 15 轉、固定買入、要嘛大贏要嘛歸零</b>。方法隨你選，但框架固定——不補碼、不「再轉一次」。</p><p>它作為娛樂有效的原因：固定框架殺死了兩大資金殺手——追輸和玩太久。每轉數學不變，但<i>固定注碼下轉數越少 = 總預期虧損越少</i>，這是唯一真正有效的槓桿。坐下前先定框架，贏輸都認。</p><p><b>風險：</b>看你帶什麼方法。<b>賭本：</b>買入額，一毛不多。</p>`}},
],
mathBox:{en:`Coverage systems: expected loss = total wagered × 2.70% regardless of how the chips are arranged. Progressions: E = Σ E(each bet) — rearranging never reduces. The 15-spin frame works because it caps <i>spins</i>, the only variable that matters.`,
zh:`覆蓋系統：預期虧損 = 總投注 × 2.70%，籌碼怎麼擺都一樣。級數：E = Σ E（每注）——重排永遠不能減少。15 轉框架有效是因為它限制了<i>轉數</i>，這是唯一重要的變數。`},
verdict:{en:"Every method here is a volatility dial, not an edge. Turn it toward whatever makes the game fun for you — Paroli for cheap thrills, James Bond for hit-rate theater, the 15-spin frame for discipline. Just know the price per spin never moves.",
zh:"這裡每個方法都是波動旋鈕，不是優勢。轉向你覺得好玩的方向——Paroli 求便宜刺激、James Bond 求中獎率秀、15 轉框架求紀律。只要知道每轉價格永遠不動。"}
},
{
id:"advantage", icon:"🔬",
title:{en:"Advantage play: the honest truth", zh:"優勢打法：誠實真相"},
intro:{en:"Can roulette actually be beaten? Three theories have real history behind them. Here's what each one is, why it worked once, and why it almost certainly won't work for you.",
zh:"輪盤真的能被打敗嗎？三個理論都有真實歷史。這裡說每個是什麼、為什麼曾經有效、為什麼幾乎肯定對你無效。"},
sections:[
{h:{en:"Wheel bias: the one that actually worked", zh:"輪盤偏差：唯一真正成功過的"},
body:{en:`<p>In the 1970s–90s, a few players beat roulette by finding <b>physically imperfect wheels</b> — a slightly tilted wheel, worn frets between pockets, a loose ball track. These defects made some numbers hit more often than 1/37. The famous cases (a team that took Monte Carlo for millions, others in Vegas) all came down to hardware, not math.</p><p>Why it's dead now: modern wheels are <b>engineered to eliminate bias</b> — machined to micron tolerances, leveled with instruments, rotated between tables, and monitored by software that flags any number hitting above expectation. Casinos learned the lesson decades ago.</p><p>What "looking for bias" would actually require: clocking <b>thousands of spins</b> on one specific wheel (5,000+ to separate signal from noise), finding a statistically significant skew, then betting it before the casino notices and swaps the wheel. You'd need a team, months, and a casino that somehow missed what their own software catches.</p><div class="callout">Verdict: historically real, practically extinct. If someone sells you a "bias detection system," they're selling you the 1980s.</div>`,
zh:`<p>1970–90 年代，少數玩家靠找到<b>物理有缺陷的輪盤</b>打敗輪盤——輕微傾斜、格間擋板磨損、球道鬆動。這些缺陷讓某些號碼出現率高於 1/37。著名案例（蒙地卡羅被贏走數百萬、Vegas 也有）全都是硬體問題，不是數學。</p><p>為什麼現在沒了：現代輪盤<b>為消除偏差而設計</b>——微米級加工、儀器校平、定期換桌、軟體監控任何高於期望的號碼。賭場幾十年前就學乖了。</p><p>「找偏差」實際需要：對<b>同一台</b>輪盤記錄<b>數千轉</b>（5000+ 才能分辨訊號和雜訊）、找到統計顯著的偏移、在賭場發現並換輪盤之前下注。你需要一個團隊、幾個月，和一家連自家軟體都沒發現的賭場。</p><div class="callout">結論：歷史上真實存在，現實中已經絕跡。有人賣你「偏差偵測系統」，他賣的是 1980 年代。</div>`}},
{h:{en:"Dealer signature: the theory that won't die", zh:"荷官簽名：陰魂不散的理論"},
body:{en:`<p>The theory: dealers develop a <b>consistent throwing motion</b> — same spin speed, same release point — so the ball lands in predictable <i>sectors</i> of the wheel. If you can map a dealer's signature, you bet the sector.</p><p>The math problem: even a "consistent" dealer has enormous variance. Ball bounce off the frets is chaotic — a 1mm difference in release becomes a random pocket after 8–10 bounces. To get a real edge you'd need the dealer's landing distribution to cluster tightly enough that a sector bet overcomes 2.70%. In controlled tests, no dealer has ever demonstrated this reliably.</p><p>The practical problem: casinos <b>rotate dealers every 20–30 minutes</b> and require varied ball speeds ("no more bets" timing changes, spin direction alternates). The signature, if it ever existed, gets shuffled away before you can exploit it.</p><div class="callout">Verdict: a fun theory to argue about, not a way to make money. The bounce is chaos, and the casino shuffles the thrower.</div>`,
zh:`<p>理論：荷官會形成<b>固定的丟球動作</b>——同樣轉速、同樣出手點——球落在可預測的<i>扇區</i>。如果你能描繪出荷官的簽名，就押那個扇區。</p><p>數學問題：再「穩定」的荷官變異也巨大。球撞擋板的彈跳是混沌的——出手差 1mm，經過 8–10 次彈跳就變成隨機格。要真正有優勢，荷官的落點分布得集中到扇區注能打敗 2.70%。受控測試中，沒有任何荷官可靠地做到過。</p><p>現實問題：賭場<b>每 20–30 分鐘換荷官</b>，還要求球速變化（喊停時機不同、轉向交替）。簽名就算存在，也在你能利用之前就被洗掉了。</p><div class="callout">結論：適合拿來辯論的有趣理論，不是賺錢方法。彈跳是混沌，賭場還一直換發球的人。</div>`}},
{h:{en:"Visual ballistics: the hardest skill in gambling", zh:"視覺彈道：賭博中最難的技術"},
body:{en:`<p>The claim: by <b>watching the ball and timing its orbit</b>, a trained observer can predict roughly where it will fall off the ball track — narrowing the outcome from 37 pockets to a sector of 5–9. Combined with late betting (some casinos allow bets after the ball is spun), this was the basis of famous computer-assisted wins in the 1970s–80s.</p><p>What it actually takes: the original teams used <b>concealed computers</b> in shoes to time the ball and wheel — that's now explicitly illegal everywhere (devices = cheating, not advantage play). Doing it by eye alone requires superhuman timing consistency, and modern casinos call "no more bets" <b>before</b> the ball slows enough to read.</p><p>The honest bottom line: the physics is real but the window is closed. Early no-more-bets, device laws, and dealer training killed it.</p><div class="callout">Verdict: real physics, closed window. The casinos moved "no more bets" earlier specifically to kill this.</div>`,
zh:`<p>宣稱：<b>觀察球並計算它的公轉</b>，受訓的觀察者能預測球大概在哪裡掉出球道——把結果從 37 格縮小到 5–9 格的扇區。配合晚下注（有些賭場開球後還能押），這是 1970–80 年代著名電腦輔助勝利的基礎。</p><p>實際需要：當年的團隊用<b>藏在鞋裡的電腦</b>計時球和輪盤——現在各地都明定違法（用設備 = 作弊，不是優勢打法）。只靠肉眼需要超人的計時穩定度，而現代賭場在球慢到能判讀<b>之前</b>就喊停了。</p><p>誠實的底線：物理是真的，但窗口關了。提早喊停、設備法規、荷官訓練，三重封殺。</p><div class="callout">結論：物理真實，窗口已關。賭場提早喊停就是專門為了殺這個。</div>`}},
{h:{en:"The bottom line on beating roulette", zh:"打敗輪盤的底線"},
body:{en:`<p>Blackjack can be counted. Baccarat has no practical edge. <b>Roulette sits at the far end: the game is specifically engineered to be unexploitable.</b> Every historical beat came from hardware flaws or timing windows the casinos have since closed.</p><p>Anyone selling you a roulette-beating method today is selling one of three things: a betting system (volatility shaping, covered in the last chapter), a dead hardware exploit, or fantasy. The price per spin — 2.70%, 5.26%, 7.69% — is the whole story.</p><p>Play it for fun, at the cheapest wheel you can find, with a fixed frame. That's the entire winning strategy: <b>lose less per hour</b>.</p>`,
zh:`<p>21 點可以算牌。百家樂沒有實用優勢。<b>輪盤在最遠端：這遊戲從設計上就是不可攻破的。</b>歷史上每次被打敗都是硬體缺陷或時機窗口，賭場都已經補上了。</p><p>今天賣你打敗輪盤方法的人，賣的是三種東西之一：投注系統（波動整形，上一章講過）、已死的硬體漏洞，或幻想。每轉價格——2.70%、5.26%、7.69%——就是全部故事。</p><p>為了樂趣玩，找最便宜的輪盤，設固定框架。整個致勝策略就是：<b>每小時少輸一點</b>。</p>`}},
],
mathBox:{en:`To beat 2.70%, a bias hunter needs a number hitting at 1/35.5 instead of 1/37 — a 4%+ deviation sustained over thousands of spins. Modern wheels are spec'd tighter than that by design.`,
zh:`要打敗 2.70%，找偏差的人需要某號碼以 1/35.5 而非 1/37 出現——持續數千轉的 4%+ 偏移。現代輪盤的規格設計得比這更嚴。`},
verdict:{en:"Roulette is the least beatable game in the casino, and that's by design. Enjoy it as entertainment at the best price you can find — that's the whole game.",
zh:"輪盤是賭場最難打敗的遊戲，而且是故意設計成這樣的。用你能找到的最好價格享受它當娛樂——這就是全部。"}
},
{
id:"callbets", icon:"🇫🇷",
title:{en:"French call bets: voisins, tiers, orphelins", zh:"法式喊注：voisins、tiers、orphelins"},
intro:{en:"On European tables you can bet wheel <i>sectors</i> by name — the dealer places the chips for you. These are just convenient packages of splits, corners, and straight-ups: same 2.70%, prettier packaging.",
zh:"歐式桌可以用名字押輪盤<i>扇區</i>——荷官幫你放籌碼。這些只是分注、角注、單號的方便包裝：同樣 2.70%，包裝比較漂亮。"},
sections:[
{h:{en:"Voisins du Zéro (neighbors of zero)", zh:"Voisins du Zéro（0 的鄰居）"},
body:{en:`<p><b>17 numbers</b> around zero on the wheel: 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25. <b>9 chips</b> placed as: 2 on the 0-2-3 trio (or 0-2-3 street), 1 each on splits 4-7, 12-15, 18-21, 19-22, 32-35, and 2 on the 25-26-28-29 corner.</p><p>Covers 45.9% of the wheel. Edge: <b>2.70%</b> — it's just splits and corners wearing a French name.</p>`,
zh:`<p>輪盤上 0 附近的 <b>17 個號碼</b>：22、18、29、7、28、12、35、3、26、0、32、15、19、4、21、2、25。<b>9 個籌碼</b>：0-2-3 三號 2 個，分注 4-7、12-15、18-21、19-22、32-35 各 1 個，角注 25-26-28-29 放 2 個。</p><p>覆蓋 45.9% 輪盤。優勢：<b>2.70%</b>——只是穿了法國名字的分注和角注。</p>`}},
{h:{en:"Tiers du Cylindre (third of the wheel)", zh:"Tiers du Cylindre（輪盤三分之一）"},
body:{en:`<p><b>12 numbers</b> opposite zero: 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33. <b>6 chips</b>, one on each split: 5-8, 10-11, 13-16, 23-24, 27-30, 33-36.</p><p>Covers 32.4%. Edge: <b>2.70%</b>.</p>`,
zh:`<p>0 對面的 <b>12 個號碼</b>：27、13、36、11、30、8、23、10、5、24、16、33。<b>6 個籌碼</b>，每個分注各一：5-8、10-11、13-16、23-24、27-30、33-36。</p><p>覆蓋 32.4%。優勢：<b>2.70%</b>。</p>`}},
{h:{en:"Orphelins (orphans)", zh:"Orphelins（孤兒）"},
body:{en:`<p>The <b>8 numbers</b> left over between voisins and tiers: 1, 20, 14, 31, 9, 17, 34, 6. <b>5 chips</b>: 1 straight-up on 1, plus splits 6-9, 14-17, 17-20, 31-34.</p><p>Covers 21.6%. Edge: <b>2.70%</b>.</p>`,
zh:`<p>Voisins 和 tiers 之間剩下的 <b>8 個號碼</b>：1、20、14、31、9、17、34、6。<b>5 個籌碼</b>：1 押單號 1 個，分注 6-9、14-17、17-20、31-34。</p><p>覆蓋 21.6%。優勢：<b>2.70%</b>。</p>`}},
{h:{en:"Jeu Zéro (zero game)", zh:"Jeu Zéro（零遊戲）"},
body:{en:`<p>A smaller zero-sector bet: <b>7 numbers</b> — 12, 35, 3, 26, 0, 32, 15. <b>4 chips</b>: straight-up on 26, plus splits 0-3, 12-15, 32-35.</p><p>Covers 18.9%. Edge: <b>2.70%</b>.</p>`,
zh:`<p>小一點的零扇區：<b>7 個號碼</b>——12、35、3、26、0、32、15。<b>4 個籌碼</b>：26 押單號，分注 0-3、12-15、32-35。</p><p>覆蓋 18.9%。優勢：<b>2.70%</b>。</p>`}},
{h:{en:"Neighbors bets (à cheval)", zh:"鄰居注"},
body:{en:`<p>Pick any number, bet it <b>plus N numbers on each side</b> as they sit on the <i>wheel</i> (not the layout). "5 and neighbors" (1 each side) = 17, 34, 6, <b>5</b>, 22 — five straight-up bets.</p><p>It's just 2N+1 straight-ups. Edge per chip: <b>2.70%</b>. Useful when you believe a wheel sector is warm — which, per the advantage-play chapter, it isn't.</p>`,
zh:`<p>選任意號碼，押它<b>加上輪盤上左右各 N 個</b>（按<i>輪盤</i>順序，不是版面）。「5 加鄰居」（各一邊）= 17、34、6、<b>5</b>、22——五個單號注。</p><p>就是 2N+1 個單號注。每個籌碼優勢：<b>2.70%</b>。適合你覺得某扇區正熱的時候——根據優勢打法那章，它並沒有。</p>`}},
],
mathBox:{en:`Call bets are chip-placement shortcuts. Voisins = 9 chips of splits/corners → 9 × 2.70% blended = <b>2.70%</b>. The French names change nothing except the romance.`,
zh:`喊注是放籌碼的快捷方式。Voisins = 9 個分注/角注籌碼 → 9 × 2.70% 混合 = <b>2.70%</b>。法國名字除了浪漫什麼都沒改變。`},
verdict:{en:"Use call bets for speed and style on European tables — saying 'voisins' to a dealer is genuinely fun. Just know you're buying the same 2.70% in a fancier box.",
zh:"在歐式桌用喊注求快求帥——對荷官喊 'voisins' 真的很有趣。只要知道你用比較漂亮的盒子買同樣的 2.70%。"}
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
