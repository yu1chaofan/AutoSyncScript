/*
京东到家果园任务脚本,支持qx,loon,shadowrocket,surge,nodejs
用抓包抓 https://daojia.jd.com/html/index.html 页面cookie填写到下面,暂时不知cookie有效期
抓多账号直接清除浏览器缓存再登录新账号,千万别点退出登录,否则cookie失效
cookie只要里面的deviceid_pdj_jd=xxx-xxx-xxx;o2o_m_h5_sid=xxx-xxx-xxx关键信息,填写整个cookie也是可以的
手机设备在boxjs里填写cookie,nodejs在jddj_cookie.js文件里填写cookie
boxjs订阅地址:https://gitee.com/passerby-b/javascript/raw/master/JD/passerby-b.boxjs.json

[task_local]
10 0,8,11,17 * * * https://raw.githubusercontent.com/passerby-b/JDDJ/main/jddj_fruit.js
*/

let isNotify = true;//是否通知,仅限nodejs,手机用boxjs设置

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';21 $=k 2M("2N");g 1J=\'\',4=\'\',1a=\'\';g 1g=\'30.\'+l.v(l.1U()*(2e-1V)+1V);g 1h=\'2O.\'+l.v(l.1U()*(2e-1V)+1V);g 1K=l.v(l.1U()*(2P-G)+G);g 1i=[],1j=\'\';1b=0,1t=0;!(w()=>{h(1i.1u==0){h($.1z.1A){2Q 23.2R[\'./2f.24\'];1i=23(\'./2f.24\')}1k{g 1L=$.2g(\'#2S\');h(!!1L){h(1L.25(\',\')<0){1i.2T(1L)}1k{1i=1L.1v(\',\')}}}}h(1i.1u==0){q.s(\'\\r\\n请先填写1M\');1c}h(!$.1z.1A){1N=$.2g(\'#2U\')}1k{1j=23(\'./1O\')}1P(g i=0;i<1i.1u;i++){q.s(\'\\r\\n★★★★★开始执行第\'+(i+1)+\'个账号,共\'+1i.1u+\'个账号★★★★★\');1J=1i[i];1b=0,1t=0;h(!1J.26())2h;1n 27={};1n 2i=1J.1v(\';\');2i.2V(c=>{h(c.25(\'=\')>-1)27[c.1v(\'=\')[0].26()]=c.1v(\'=\')[1].26()});4=27.2W;f 2j();f $.K(G);f 1W(0);f $.K(G);g 1X=f 2k();h(1X.11==1){$.1j(\'第\'+(i+1)+\'个账号1M过期\',\'请访问A://B.C.z/1B/12.1B抓取1M\',{28:\'A://B.C.z/1B/12.1B\'});h($.1z.1A&&\'\'+1N+\'\'==\'D\'){f 1j.1O(\'第\'+(i+1)+\'个账号1M过期\',\'请访问A://B.C.z/1B/12.1B抓取1M\')}2h}f 2l();f $.K(G);f 2m(1X);f $.K(G);f 2n();f $.K(G);f 1W(1);f $.K(G);f 2o();f $.K(G);f 2p(1X);f $.K(G);f 1W(2);f $.K(G)}})().1d(w(e)=>{q.s(\'\',\'❌失败! 原因:\'+e+\'!\',\'\');h($.1z.1A&&\'\'+1N+\'\'==\'D\'){1j.1O(\'京东到家果园\',\'❌失败! 原因:\'+e+\'!\')}}).2q(()=>{$.2X()});w 1l 2j(){1c k 1o(w u=>{1m{g m=H(\'A://B.C.z/L?13=\'+l.v(k y())+\'&M=2Y&N=O&P=&Q=8.7.6&2Z=&R=31%32&o=%S%33%22:%22%22,%34%22:2,%35%22:%2r%22,%36%22:%22%22,%37%22:%2r%22%T&38=&14=\'+4+l.v(k y())+\'&U=\'+4+\'&V=\'+4,\'\');$.I.16(m).J(p=>{g d=W.Y(p.o);h(d.11==0){1m{1a=d.j.39.3a.3b;q.s("●●●"+1a+"●●●")}1d(E){1a=\'昵称获取失败\'}}});u()}1d(E){q.s(\'\\n【个人信息】:\'+E);u()}})}w 1l 2k(){1c k 1o(w u=>{1m{g m=H(\'A://B.C.z/L?13=\'+l.v(k y())+\'&R=1p%3c&17=D&o=%S%1q%22%3A%2s%22%2C%1r%22%1s%T&P=1e&Z=6.6.0&M=1f&Q=6.6.0&N=O&18=19&14=\'+4+\'&U=\'+4+\'&V=\'+4,\'\');$.I.16(m).J(p=>{g d=W.Y(p.o);u(d)})}1d(E){q.s(\'\\n【任务列表】:\'+E);u({})}})}w 1l 2o(){1c k 1o(w u=>{1m{g m=H(\'A://B.C.z/L?13=\'+l.v(k y()),\'R=2t%3d&17=D&2u=2v&o=%S%3e%22%1s%T&P=1e&Z=6.6.0&M=1f&Q=6.6.0&N=O&18=19&14=\'+4+\'&U=\'+4+\'&V=\'+4);g 29=1,2a=0;3f{2a++;q.s(\'\\n**********开始执行第\'+2a+\'次浇水**********\');$.I.2w(m).J(p=>{g d=W.Y(p.o);q.s(\'\\n【浇水】:\'+d.3);29=d.11;h(d.11==0)1t++});f $.K(G)}3g(29==0);u()}1d(E){q.s(\'\\n【浇水】:\'+E);u()}})}w 1l 2l(){1c k 1o(w u=>{1m{g m=H(\'A://B.C.z/L?13=\'+l.v(k y())+\'&R=3h%3i&17=D&o=%S%3j%22%3A%3k%22%2C%2x%22%3A\'+1K+\'%2C%2y%22%3A\'+1h+\'%2C%2z%22%3A\'+1g+\'%2C%3l%22%3m%T&P=1e&Z=6.6.0&M=1f&Q=6.6.0&N=O&18=19&14=\'+4+\'&U=\'+4+\'&V=\'+4,\'\');$.I.16(m).J(p=>{g d=W.Y(p.o);q.s(\'\\n【到家签到】:\'+d.3);u()})}1d(E){q.s(\'\\n【到家签到领水滴】:\'+E);u()}})}w 1l 2n(){1c k 1o(w u=>{1m{g 1Y=[];f $.I.16({28:\'A://3n.z/3o-b/3p/3q/3r/3s/3t.24\'}).J(p=>{1Y=p.o.1v(\',\')});g 2b=1Y[l.v(l.1U()*(1Y.1u-1)+0)];g m=H(\'A://B.C.z/L?1g=\'+1g+\'&1h=\'+1h+\'&2A=\'+1g+\'&2B=\'+1h+\'&2D=\'+1K+\'&U=\'+4+\'&V=\'+4+\'&P=2E&3u=2E&Z=5.0.0&M=3v&Q=5.0.0&N=O&18=19&3w=9.2.0&17=D&3x=3y&R=1p%2c&o=%S%1q%22%3A%2s%22%2C%1w%22%3z%2C%1x%22%3A%3B%22%2C%1r%22%3C%2C%3D%22%3A%22\'+2b.1v(\'@\')[0]+\'%22%2C%3E%22%3A%22\'+2b.1v(\'@\')[1]+\'%22%T\',\'\');$.I.16(m).J(p=>{g d=W.Y(p.o);u()})}1d(E){u()}})}w 1l 2m(a){1c k 1o(w u=>{1m{1P(g 12=0;12<a.j.1Z.1u;12++){21 c=a.j.1Z[12];g m=H(\'A://B.C.z/L?13=\'+l.v(k y())+\'&R=1p%2F&17=D&o=%S%1q%22%3A%22\'+c.1C+\'%22%2C%1x%22%3A%22\'+c.1D+\'%22%2C%1w%22%3A\'+c.1E+\'%2C%1r%22%1s%2C%1F%22%1G%T&P=1e&Z=6.6.0&M=1f&Q=6.6.0&N=O&18=19&14=\'+4+l.v(k y())+\'&U=\'+4+\'&V=\'+4,\'\');f $.I.16(m).J(p=>{1n b=W.Y(p.o),3=\'\';h(b.11==0){3=b.3+\',奖励:\'+b.j.1H}1k{3=b.3}q.s(\'\\n领取任务【\'+c.1y+\'】:\'+3)});h(c.20>-1){1P(g t=0;t<2G(c.20);t++){f $.K(G);q.s(\'计时:\'+(t+1)+\'秒...\')}};m=H(\'A://B.C.z/L?13=\'+l.v(k y())+\'&R=1p%2c&17=D&o=%S%1q%22%3A%22\'+c.1C+\'%22%2C%1x%22%3A%22\'+c.1D+\'%22%2C%1w%22%3A\'+c.1E+\'%2C%1r%22%1s%2C%1F%22%1G%T&P=1e&Z=6.6.0&M=1f&Q=6.6.0&N=O&18=19&14=\'+4+l.v(k y())+\'&U=\'+4+\'&V=\'+4,\'\');f $.I.16(m).J(p=>{1n b=W.Y(p.o),3=\'\';h(b.11==0){3=b.3+\',奖励:\'+b.j.1H}1k{3=b.3}q.s(\'\\n任务完成【\'+c.1y+\'】:\'+3)});m=H(\'A://B.C.z/L?13=\'+l.v(k y())+\'&R=1p%2H&17=D&o=%S%1q%22%3A%22\'+c.1C+\'%22%2C%1x%22%3A%22\'+c.1D+\'%22%2C%1w%22%3A\'+c.1E+\'%2C%1r%22%1s%2C%1F%22%1G%T&P=1e&Z=6.6.0&M=1f&Q=6.6.0&N=O&18=19&14=\'+4+l.v(k y())+\'&U=\'+4+\'&V=\'+4,\'\');f $.I.16(m).J(p=>{1n b=W.Y(p.o),3=\'\';h(b.11==0){3=b.3+\',奖励:\'+b.j.1H}1k{3=b.3}q.s(\'\\n领取奖励【\'+c.1y+\'】:\'+3)})}u()}1d(E){q.s(\'\\n【执行任务】:\'+E);u()}})}w 1l 2p(a){1c k 1o(w u=>{1m{1P(g 12=0;12<a.j.1Z.1u;12++){21 c=a.j.1Z[12];h(c.1y.25(\'限时\')>-1){g m=H(\'A://B.C.z/L?13=\'+l.v(k y())+\'&R=1p%2F&17=D&o=%S%1q%22%3A%22\'+c.1C+\'%22%2C%1x%22%3A%22\'+c.1D+\'%22%2C%1w%22%3A\'+c.1E+\'%2C%1r%22%1s%2C%1F%22%1G%T&P=1e&Z=6.6.0&M=1f&Q=6.6.0&N=O&18=19&14=\'+4+l.v(k y())+\'&U=\'+4+\'&V=\'+4,\'\');f $.I.16(m).J(p=>{1n b=W.Y(p.o),3=\'\';h(b.11==0){3=b.3+\',奖励:\'+b.j.1H}1k{3=b.3}q.s(\'\\n领取任务【\'+c.1y+\'】:\'+3)});h(c.20>-1){1P(g t=0;t<2G(c.20);t++){f $.K(G);q.s(\'计时:\'+(t+1)+\'秒...\')}};m=H(\'A://B.C.z/L?13=\'+l.v(k y())+\'&R=1p%2c&17=D&o=%S%1q%22%3A%22\'+c.1C+\'%22%2C%1x%22%3A%22\'+c.1D+\'%22%2C%1w%22%3A\'+c.1E+\'%2C%1r%22%1s%2C%1F%22%1G%T&P=1e&Z=6.6.0&M=1f&Q=6.6.0&N=O&18=19&14=\'+4+l.v(k y())+\'&U=\'+4+\'&V=\'+4,\'\');f $.I.16(m).J(p=>{1n b=W.Y(p.o),3=\'\';h(b.11==0){3=b.3+\',奖励:\'+b.j.1H}1k{3=b.3}q.s(\'\\n任务完成【\'+c.1y+\'】:\'+3)});m=H(\'A://B.C.z/L?13=\'+l.v(k y())+\'&R=1p%2H&17=D&o=%S%1q%22%3A%22\'+c.1C+\'%22%2C%1x%22%3A%22\'+c.1D+\'%22%2C%1w%22%3A\'+c.1E+\'%2C%1r%22%1s%2C%1F%22%1G%T&P=1e&Z=6.6.0&M=1f&Q=6.6.0&N=O&18=19&14=\'+4+l.v(k y())+\'&U=\'+4+\'&V=\'+4,\'\');f $.I.16(m).J(p=>{1n b=W.Y(p.o),3=\'\';h(b.11==0){3=b.3+\',奖励:\'+b.j.1H}1k{3=b.3}q.s(\'\\n领取奖励【\'+c.1y+\'】:\'+3)})}}u()}1d(E){q.s(\'\\n【执行任务】:\'+E);u()}})}w 1l 1W(a){1c k 1o(w u=>{1m{g m=H(\'A://B.C.z:3F/L?13=\'+l.v(k y()),\'R=2t%3G&17=D&2u=2v&o=%S%2x%22%3A\'+1K+\'%2C%2y%22%3A\'+1h+\'%2C%2z%22%3A\'+1g+\'%T&1g=\'+1g+\'&1h=\'+1h+\'&2A=\'+1g+\'&2B=\'+1h+\'&2D=\'+1K+\'&P=1e&Z=6.6.0&M=1f&Q=6.6.0&N=O&18=19&14=\'+4+l.v(k y())+\'&U=\'+4+\'&V=\'+4);f $.I.2w(m).J(w p=>{g d=W.Y(p.o);h(d.11==0){h(a==0){1b=d.j.1Q.1R}h(a==2){1b=(1t*10)+d.j.1Q.1R-1b;h(1b<0)1b=0;h(d.j.F.1S==0){q.s(\'\\n京东到家果园【\'+1a+\'】:\'+d.j.F.1I+\'已成熟,快去收取!\');$.1j(\'京东到家果园\',\'【\'+1a+\'】\',\'京东到家果园\'+d.j.F.1I+\'已成熟,快去收取!\');h($.1z.1A&&\'\'+1N+\'\'==\'D\'){f 1j.1O(\'京东到家果园【\'+1a+\'】\',\'京东到家果园\'+d.j.F.1I+\'已成熟,快去收取!\')}}h(d.j.F.1S>0){g 1T=\'次\';h(d.j.F.3H==5)1T=\'%\';q.s(\'\\n京东到家果园【\'+1a+\'】:\'+d.j.F.1I+\',本次领取\'+1b+\'滴水,浇水\'+1t+\'次,还需浇水\'+d.j.F.1S+1T+d.j.F.2d+\',还剩\'+d.j.1Q.1R+\'滴水\');$.1j(\'京东到家果园\',\'【\'+1a+\'】\',\'【果树信息】:\'+d.j.F.1I+\',本次领取\'+1b+\'滴水,浇水\'+1t+\'次,还需浇水\'+d.j.F.1S+1T+d.j.F.2d+\',还剩\'+d.j.1Q.1R+\'滴水\');h($.1z.1A&&\'\'+1N+\'\'==\'D\'){f 1j.1O(\'京东到家果园【\'+1a+\'】\',\'【果树信息】:\'+d.j.F.1I+\',本次领取\'+1b+\'滴水,浇水\'+1t+\'次,还需浇水\'+d.j.F.1S+1T+d.j.F.2d+\',还剩\'+d.j.1Q.1R+\'滴水\')}}}}u()})}1d(E){q.s(\'\\n【果树信息】:\'+E);u()}2q{3I=D}})}1l H(a,b){g m={28:a,3J:{\'3K\':\'B.C.z\',\'3L-3M\':\'3N/x-3O-3P-3Q;\',\'3R\':\'A://B.C.z\',\'3S\':1J,\'3T\':\'3U-3V\',\'2I\':\'*/*\',\'3W-3X\':\'3Y/5.0 (2J; 3Z 2J 2K 40 2L 41 2K X) 42/43.1.15 (44, 2L 45) 46/47=48&Z=49&4a={"4b":"2"}&4c=8.7.5&4d\',\'2I-4e\':\'4f-4g\'},o:b};1c m};',62,265,'|||msg|deviceid||||||||item|data||await|let|if||result|new|Math|option||body|response|console||log||resolve|round|async||Date|com|https|daojia|jd|true|error|activityInfoResponse|1000|urlTask|http|then|wait|client|platCode|appName|paidaojia|channel|appVersion|functionId|7B|7D|deviceToken|deviceId|JSON||parse|platform||code|index|_jdrandom|traceId||get|isNeedDealError|deviceModel|appmodel|nickname|waterNum|return|catch|ios|h5|lat|lng|cookies|notify|else|function|try|var|Promise|task|22modelId|22plateCode|3A1|waterTimes|length|split|22taskType|22taskId|taskTitle|env|isNode|html|modelId|taskId|taskType|22subNode|3Anull|awardValue|fruitName|thiscookie|cityid|ckstr|cookie|isNotify|sendNotify|for|userResponse|waterBalance|curStageLeftProcess|unit|random|10000|treeInfo|tslist|scodes|taskInfoList|browseTime|const||require|js|indexOf|trim|jsonlist|url|waterStatus|waterCount|scode|2Ffinished|stageName|99999|jddj_cookie|read|continue|params|userinfo|taskList|sign|runTask|zhuLi|water|runTask2|finally|22myinfo|22M10007|fruit|method|POST|post|22cityId|22longitude|22latitude|lat_pos|lng_pos||city_id|wx_xcx|2Freceived|parseInt|2FsendPrize|Accept|iPhone|OS|like|API|jddj_fruit|114|1500|delete|cache|jddj_cookies|push|jddj_isNotify|forEach|deviceid_pdj_jd|done|H5|jdDevice||mine|2FgetUserAccountInfo|22refPageSource|22fromSource|22pageSource|22ref|22ctp|jda|userInfo|userBaseInfo|nickName|2Flist|2Fwatering|22waterTime|do|while|signin|2FuserSigninNew|22channel|22daojiaguoyuan|22ifCic|3A0|gitee|passerby|javascript|raw|master|test|sharecode|mpChannel|mini|xcxVersion|business|djgyzhuli|3A1201||2223eee1c043c01bc|3A5|22assistTargetPin|22uniqueId|443|2FinitFruit|growingStage|treeInfoTimes|headers|Host|Content|Type|application|www|form|urlencoded|Origin|Cookie|Connection|keep|alive|User|Agent|Mozilla|CPU|14_1|Mac|AppleWebKit|605|KHTML|Gecko|Mobile|15E148________appName|jdLocal|iOS|commonParams|sharePackageVersion|djAppVersion|supportDJSHWK|Language|zh|cn'.split('|'),0,{}))

/*********************************** API *************************************/
function ENV() { const e = "undefined" != typeof $task, t = "undefined" != typeof $loon, s = "undefined" != typeof $httpClient && !t, i = "function" == typeof require && "undefined" != typeof $jsbox; return { isQX: e, isLoon: t, isSurge: s, isNode: "function" == typeof require && !i, isJSBox: i, isRequest: "undefined" != typeof $request, isScriptable: "undefined" != typeof importModule } } function HTTP(e = { baseURL: "" }) { const { isQX: t, isLoon: s, isSurge: i, isScriptable: n, isNode: o } = ENV(), r = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/; const u = {}; return ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"].forEach(l => u[l.toLowerCase()] = (u => (function (u, l) { l = "string" == typeof l ? { url: l } : l; const h = e.baseURL; h && !r.test(l.url || "") && (l.url = h ? h + l.url : l.url); const a = (l = { ...e, ...l }).timeout, c = { onRequest: () => { }, onResponse: e => e, onTimeout: () => { }, ...l.events }; let f, d; if (c.onRequest(u, l), t) f = $task.fetch({ method: u, ...l }); else if (s || i || o) f = new Promise((e, t) => { (o ? require("request") : $httpClient)[u.toLowerCase()](l, (s, i, n) => { s ? t(s) : e({ statusCode: i.status || i.statusCode, headers: i.headers, body: n }) }) }); else if (n) { const e = new Request(l.url); e.method = u, e.headers = l.headers, e.body = l.body, f = new Promise((t, s) => { e.loadString().then(s => { t({ statusCode: e.response.statusCode, headers: e.response.headers, body: s }) }).catch(e => s(e)) }) } const p = a ? new Promise((e, t) => { d = setTimeout(() => (c.onTimeout(), t(`${u} URL: ${l.url} exceeds the timeout ${a} ms`)), a) }) : null; return (p ? Promise.race([p, f]).then(e => (clearTimeout(d), e)) : f).then(e => c.onResponse(e)) })(l, u))), u } function API(e = "untitled", t = !1) { const { isQX: s, isLoon: i, isSurge: n, isNode: o, isJSBox: r, isScriptable: u } = ENV(); return new class { constructor(e, t) { this.name = e, this.debug = t, this.http = HTTP(), this.env = ENV(), this.node = (() => { if (o) { return { fs: require("fs") } } return null })(), this.initCache(); Promise.prototype.delay = function (e) { return this.then(function (t) { return ((e, t) => new Promise(function (s) { setTimeout(s.bind(null, t), e) }))(e, t) }) } } initCache() { if (s && (this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}")), (i || n) && (this.cache = JSON.parse($persistentStore.read(this.name) || "{}")), o) { let e = "root.json"; this.node.fs.existsSync(e) || this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.root = {}, e = `${this.name}.json`, this.node.fs.existsSync(e) ? this.cache = JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)) : (this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.cache = {}) } } persistCache() { const e = JSON.stringify(this.cache, null, 2); s && $prefs.setValueForKey(e, this.name), (i || n) && $persistentStore.write(e, this.name), o && (this.node.fs.writeFileSync(`${this.name}.json`, e, { flag: "w" }, e => console.log(e)), this.node.fs.writeFileSync("root.json", JSON.stringify(this.root, null, 2), { flag: "w" }, e => console.log(e))) } write(e, t) { if (this.log(`SET ${t}`), -1 !== t.indexOf("#")) { if (t = t.substr(1), n || i) return $persistentStore.write(e, t); if (s) return $prefs.setValueForKey(e, t); o && (this.root[t] = e) } else this.cache[t] = e; this.persistCache() } read(e) { return this.log(`READ ${e}`), -1 === e.indexOf("#") ? this.cache[e] : (e = e.substr(1), n || i ? $persistentStore.read(e) : s ? $prefs.valueForKey(e) : o ? this.root[e] : void 0) } delete(e) { if (this.log(`DELETE ${e}`), -1 !== e.indexOf("#")) { if (e = e.substr(1), n || i) return $persistentStore.write(null, e); if (s) return $prefs.removeValueForKey(e); o && delete this.root[e] } else delete this.cache[e]; this.persistCache() } notify(e, t = "", l = "", h = {}) { const a = h["open-url"], c = h["media-url"]; if (s && $notify(e, t, l, h), n && $notification.post(e, t, l + `${c ? "\n多媒体:" + c : ""}`, { url: a }), i) { let s = {}; a && (s.openUrl = a), c && (s.mediaUrl = c), "{}" === JSON.stringify(s) ? $notification.post(e, t, l) : $notification.post(e, t, l, s) } if (o || u) { const s = l + (a ? `\n点击跳转: ${a}` : "") + (c ? `\n多媒体: ${c}` : ""); if (r) { require("push").schedule({ title: e, body: (t ? t + "\n" : "") + s }) } else console.log(`${e}\n${t}\n${s}\n\n`) } } log(e) { this.debug && console.log(`[${this.name}]LOG: ${this.stringify(e)}`) } info(e) { console.log(`[${this.name}]INFO: ${this.stringify(e)}`) } error(e) { console.log(`[${this.name}]ERROR: ${this.stringify(e)}`) } wait(e) { return new Promise(t => setTimeout(t, e)) } done(e = {}) { console.log('done!'); s || i || n ? $done(e) : o && !r && "undefined" != typeof $context && ($context.headers = e.headers, $context.statusCode = e.statusCode, $context.body = e.body) } stringify(e) { if ("string" == typeof e || e instanceof String) return e; try { return JSON.stringify(e, null, 2) } catch (e) { return "[object Object]" } } }(e, t) }
/*****************************************************************************/
