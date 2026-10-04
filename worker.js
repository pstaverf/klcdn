const INDEX = String.raw`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>KLCDN — бесплатный CDN для сайтов через Telegram</title>
<meta name="description" content="KLCDN — бесплатный CDN для сайтов и проектов. Загружайте файлы через Telegram и подключайте по прямой ссылке.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="KLCDN">
<meta property="og:title" content="KLCDN — бесплатный CDN для сайтов через Telegram">
<meta property="og:description" content="Статика для сайта прямо из Telegram: отправьте файл боту и подключайте по прямой ссылке.">
<meta property="og:url" content="https://cdn.kleymorf.xyz/">
<meta property="og:image" content="https://cdn.kleymorf.xyz/klcdn.webp">
<meta name="twitter:card" content="summary">
<link rel="apple-touch-icon" href="https://cdn.kleymorf.xyz/klcdn.webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&family=Unbounded:wght@500;700;800&display=swap" rel="stylesheet">
<link rel="icon" href="https://cdn.kleymorf.xyz/klcdn.webp">
<script type="module" src="https://unpkg.com/@lottiefiles/dotlottie-wc@latest/dist/dotlottie-wc.js"></script>
<style>
:root{--bg:#fff;--ink:#12141c;--muted:#686d7e;--line:#e8ebf3;--blue:#2b6bff;--blue2:#6aa0ff;--sky:#eaf1ff;--sky2:#f6f9ff}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--ink);font-family:'Onest',system-ui,sans-serif;font-size:18px;line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3,.brand{font-family:'Unbounded','Onest',system-ui,sans-serif}
h1,h2,h3{letter-spacing:-.035em;line-height:1.12}

.bar{position:fixed;inset:0 0 auto 0;z-index:20;display:flex;align-items:center;justify-content:space-between;padding:12px clamp(16px,4vw,40px);background:rgba(255,255,255,.72);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(232,235,243,.8)}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:var(--ink);font-weight:800;font-size:1.15rem;letter-spacing:-.02em}
.brand .lg{width:48px;height:48px;border-radius:14px;background:#fff;box-shadow:0 4px 18px rgba(43,107,255,.2);overflow:hidden;transition:transform .25s}
.brand:hover .lg{transform:rotate(-6deg) scale(1.08)}
.lg img{width:100%;height:100%;object-fit:cover;display:block}
.mini{font-size:.95rem;font-weight:600;color:var(--blue);text-decoration:none;padding:10px 20px;border-radius:999px;background:var(--sky);transition:background .2s,color .2s}
.mini:hover{background:var(--blue);color:#fff}

.hero{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:130px 6vw 70px;overflow:hidden}
.hero::before,.hero::after{content:"";position:absolute;border-radius:50%;filter:blur(70px);z-index:-1}
.hero::before{width:min(60vw,560px);height:min(60vw,560px);background:#cfe0ff;top:6%;left:-10%;animation:float 14s ease-in-out infinite}
.hero::after{width:min(50vw,460px);height:min(50vw,460px);background:#e3ecff;bottom:2%;right:-8%;animation:float 17s ease-in-out infinite reverse}
@keyframes float{50%{transform:translate(40px,-30px) scale(1.1)}}
.pill{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:999px;background:#fff;border:1px solid var(--line);box-shadow:0 4px 16px rgba(20,30,70,.06);font-size:.92rem;font-weight:500;margin-bottom:30px}
.pill b{position:relative;width:9px;height:9px;border-radius:50%;background:#22c55e;animation:beat 1.8s ease-in-out infinite}
.pill b::before,.pill b::after{content:"";position:absolute;inset:0;border-radius:50%;background:#22c55e;animation:ring 1.8s ease-out infinite}
.pill b::after{animation-delay:.6s}
@keyframes ring{0%{transform:scale(1);opacity:.55}100%{transform:scale(3.4);opacity:0}}
@keyframes beat{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}
.hero h1{font-size:clamp(2rem,5.2vw,4.4rem);font-weight:800;max-width:20ch;line-height:1.12;text-wrap:balance}
.grad{display:block}
.grad .w{background:linear-gradient(100deg,var(--blue),var(--blue2) 60%,#8ec1ff);-webkit-background-clip:text;background-clip:text;color:transparent;padding-bottom:.08em}
.hero p{font-size:clamp(1.1rem,2.2vw,1.4rem);color:var(--muted);max-width:34ch;margin-top:26px}
.hero .btn{margin-top:40px}
.chips{list-style:none;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:34px;padding:0}
.chips li{padding:9px 18px;border-radius:999px;background:rgba(255,255,255,.85);border:1px solid var(--line);font-size:.92rem;font-weight:500;opacity:0;transform:translateY(12px);transition:opacity .7s ease,transform .7s ease}
.in .chips li{opacity:1;transform:none}
.in .chips li:nth-child(1){transition-delay:.9s}.in .chips li:nth-child(2){transition-delay:1.05s}.in .chips li:nth-child(3){transition-delay:1.2s}
.hint{position:absolute;bottom:28px;left:50%;transform:translateX(-50%);width:1px;height:46px;background:linear-gradient(var(--blue),transparent);animation:drop 1.9s infinite}
@keyframes drop{0%{transform:translateX(-50%) scaleY(0);transform-origin:top}50%{transform:translateX(-50%) scaleY(1);transform-origin:top}51%{transform:translateX(-50%) scaleY(1);transform-origin:bottom}100%{transform:translateX(-50%) scaleY(0);transform-origin:bottom}}

.sec{max-width:1120px;margin:0 auto;padding:11vh 6vw;display:grid;grid-template-columns:1fr 1fr;gap:6vw;align-items:center}
.sec.flip .anim{order:2}
.anim{position:relative;aspect-ratio:1;border-radius:44px;display:grid;place-items:center;background:linear-gradient(145deg,var(--sky) 0,#fff 70%);border:1px solid var(--line);box-shadow:0 30px 70px -30px rgba(43,107,255,.35)}
.anim dotlottie-wc{width:84%;height:84%}
.sec h2{font-size:clamp(1.65rem,3.5vw,2.65rem);font-weight:700;margin-bottom:22px}
.sec p{color:var(--muted);max-width:42ch}
.sec p+p{margin-top:14px}

.final{max-width:900px;margin:6vh auto 14vh;padding:9vh 6vw;text-align:center;border-radius:48px;background:linear-gradient(160deg,var(--sky) 0,#fff 75%);border:1px solid var(--line);box-shadow:0 40px 90px -40px rgba(43,107,255,.4)}
.final .a2{width:200px;height:200px;margin:0 auto 10px}
.final dotlottie-wc{width:100%;height:100%}
.final h2{font-size:clamp(1.7rem,4.2vw,3rem);font-weight:700;margin-bottom:16px}
.final p{color:var(--muted);margin-bottom:34px}
.btn{display:inline-block;background:linear-gradient(135deg,var(--blue),#4d86ff);color:#fff;text-decoration:none;font-weight:600;font-size:1.1rem;padding:18px 42px;border-radius:999px;box-shadow:0 14px 34px rgba(43,107,255,.38);transition:transform .2s,box-shadow .2s}
.btn:hover{transform:translateY(-3px);box-shadow:0 20px 44px rgba(43,107,255,.5)}
.btn:focus-visible,.brand:focus-visible,.mini:focus-visible{outline:3px solid var(--ink);outline-offset:4px}


.steps{max-width:1120px;margin:0 auto;padding:6vh 6vw 10vh;text-align:center}
.steps h2{font-size:clamp(1.65rem,3.5vw,2.65rem);font-weight:700;margin-bottom:48px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;text-align:left}
.card{padding:32px 28px;border-radius:30px;background:#fff;border:1px solid var(--line);box-shadow:0 20px 50px -28px rgba(43,107,255,.35);transition:transform .3s,box-shadow .3s}
.card:hover{transform:translateY(-6px);box-shadow:0 28px 60px -26px rgba(43,107,255,.5)}
.card .n{display:grid;place-items:center;width:46px;height:46px;border-radius:14px;background:var(--sky);color:var(--blue);font-family:'Unbounded',sans-serif;font-weight:700;margin-bottom:20px}
.card h3{font-size:1.15rem;font-weight:700;margin-bottom:10px}
.card p{color:var(--muted);font-size:1rem}
.card.fade{transform:translateY(34px)}
.in .card.fade{transform:none}
.foot{border-top:1px solid var(--line);background:linear-gradient(#fff,var(--sky2));padding:48px clamp(20px,6vw,80px) 34px}
.fin{max-width:1120px;margin:0 auto;display:flex;justify-content:space-between;align-items:flex-start;gap:30px;flex-wrap:wrap}
.foot .brand{font-size:1.1rem}
.foot .brand .lg{width:42px;height:42px}
.legal{display:flex;flex-direction:column;gap:6px;font-size:.95rem}
.legal b{font-family:'Unbounded',sans-serif;font-weight:700;color:var(--ink);font-size:.95rem;margin-bottom:2px}
.legal a{color:var(--muted);text-decoration:none;transition:color .2s}
.legal a:hover{color:var(--blue)}
.contact{font-size:.95rem;color:var(--muted)}
.contact b{display:block;font-family:'Unbounded',sans-serif;font-weight:700;color:var(--ink);font-size:.95rem;margin-bottom:4px}
.contact a{color:var(--blue);text-decoration:none;font-weight:600;font-size:1.05rem}
.contact a:hover{text-decoration:underline}
.copy{max-width:1120px;margin:34px auto 0;padding-top:22px;border-top:1px solid var(--line);color:var(--muted);font-size:.88rem}
@media(max-width:760px){.grid{grid-template-columns:1fr}.fin{flex-direction:column}}

.w{display:inline-block;opacity:0;transform:translateY(.5em);filter:blur(10px);transition:opacity 1.2s ease,transform 1.2s cubic-bezier(.22,1,.36,1),filter 1.2s ease;transition-delay:calc(var(--i)*38ms)}
.t.in .w{opacity:1;transform:none;filter:none}
.fade{opacity:0;transform:translateX(-36px) scale(.94);transition:opacity .9s ease,transform .9s cubic-bezier(.2,.8,.2,1)}
.flip .fade{transform:translateX(36px) scale(.94)}
.in .fade{opacity:1;transform:none}
.pill,.hero .btn{opacity:0;transform:translateY(12px);transition:opacity .8s ease .5s,transform .8s ease .5s}
.in .pill,.in .btn{opacity:1;transform:none}
.in .btn:hover{transform:translateY(-3px)}

@media(max-width:760px){
  .sec{grid-template-columns:1fr;text-align:center;padding:8vh 7vw}
  .sec.flip .anim{order:0}
  .sec p{margin-inline:auto}
  .anim{max-width:340px;margin:0 auto;width:100%;border-radius:36px}
  .brand .lg{width:42px;height:42px}
  .brand span{font-size:1.1rem}
  .final{margin-inline:4vw;border-radius:34px}
}
@media(prefers-reduced-motion:reduce){
  .w,.fade,.pill,.btn,.chips li{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}
  .hint,.hero::before,.hero::after,.pill b,.pill b::before,.pill b::after{animation:none}
}
</style>
</head>
<body>

<nav class="bar">
  <a class="brand" href="/" aria-label="KLCDN — на главную">
    <div class="lg"><img src="https://cdn.kleymorf.xyz/klcdn.webp" alt="KLCDN"></div>
    <span>KLCDN</span>
  </a>
  <a class="mini" href="http://t.me/kcdnbot" target="_blank" rel="noopener">В бота</a>
</nav>

<header class="hero reveal">
  <div class="pill"><b></b>Бесплатно · работает через Telegram</div>
  <h1>Статика для сайта<span class="grad">прямо из Telegram</span></h1>
  <p>Бесплатный CDN для разработчиков: отправьте боту картинку, скрипт или стиль и подключайте к сайту по прямой ссылке.</p>
  <a class="btn" href="http://t.me/kcdnbot" target="_blank" rel="noopener">Перейти в бота</a>
  <ul class="chips"><li>Серверы по всему миру</li><li>Защита от атак</li><li>Старт за 2 минуты</li></ul>
  <div class="hint"></div>
</header>

<section class="sec reveal">
  <div class="anim fade"><dotlottie-wc src="https://cdn.kleymorf.xyz/bearocket.lottie" autoplay loop></dotlottie-wc></div>
  <div>
    <h2>Скорость, которую чувствуешь</h2>
    <p>Наши серверы расположены по всему миру, поэтому файлы мгновенно уходят на ваш сайт или в любой другой проект.</p>
    <p>Ближайший сервер отвечает первым — страницы открываются без задержек, где бы ни находился посетитель.</p>
  </div>
</section>

<section class="sec flip reveal">
  <div class="anim fade"><dotlottie-wc src="https://cdn.kleymorf.xyz/detect.lottie" autoplay loop></dotlottie-wc></div>
  <div>
    <h2>Надёжная защита от атак</h2>
    <p>KLCDN отсекает вредоносный трафик ещё до того, как он доходит до ваших файлов.</p>
    <p>Ваш проект остаётся доступным, даже когда кто-то пытается его уронить.</p>
  </div>
</section>

<section class="sec reveal">
  <div class="anim fade"><dotlottie-wc src="https://cdn.kleymorf.xyz/gear.lottie" autoplay loop></dotlottie-wc></div>
  <div>
    <h2>Настройка за пару минут</h2>
    <p>Откройте бота, отправьте файл и получите готовую ссылку. Никаких панелей, ключей и сложных конфигов.</p>
    <p>Вставьте ссылку в код — и всё работает.</p>
  </div>
</section>

<section class="steps reveal">
  <h2>Как это работает</h2>
  <div class="grid">
    <div class="card fade"><div class="n">1</div><h3>Откройте бота</h3><p>Запустите @kcdnbot в Telegram — регистрация не нужна.</p></div>
    <div class="card fade" style="transition-delay:.15s"><div class="n">2</div><h3>Отправьте файл</h3><p>Картинка, видео, скрипт или любой другой файл для вашего проекта.</p></div>
    <div class="card fade" style="transition-delay:.3s"><div class="n">3</div><h3>Получите ссылку</h3><p>Вставьте её на сайт — файл отдаётся с ближайшего сервера.</p></div>
  </div>
</section>

<section class="final reveal">
  <div class="a2 fade"><dotlottie-wc src="https://cdn.kleymorf.xyz/load.lottie" autoplay loop></dotlottie-wc></div>
  <h2>Не ждите — переходите в наш CDN</h2>
  <p>Это бесплатно и занимает меньше минуты.</p>
  <a class="btn" href="http://t.me/kcdnbot" target="_blank" rel="noopener">Перейти в бота</a>
</section>

<footer class="foot">
  <div class="fin">
    <a class="brand" href="/" aria-label="KLCDN — на главную"><div class="lg"><img src="https://cdn.kleymorf.xyz/klcdn.webp" alt="KLCDN"></div><span>KLCDN</span></a>
    <div class="legal"><b>Документы</b><a href="/terms">Условия пользования</a><a href="/privacy">Политика конфиденциальности</a><a href="/abuse">Допустимое использование и жалобы</a></div>
    <div class="contact"><b>Связь</b><a href="mailto:help@kleymorf.xyz">help@kleymorf.xyz</a></div>
  </div>
  <div class="copy">© 2026 KLCDN. Все права защищены.</div>
</footer>

<script>
const split=(el,start)=>{
  let i=start;
  const walk=root=>[...root.childNodes].forEach(n=>{
    if(n.nodeType===3){
      const f=document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(t=>{
        if(!t) return;
        if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(' '));return}
        const w=document.createElement('span');
        w.className='w';w.style.setProperty('--i',i++);w.textContent=t;f.appendChild(w);
      });
      n.replaceWith(f);
    }else if(n.nodeType===1) walk(n);
  });
  walk(el);
  el.classList.add('t');
};
const texts=[...document.querySelectorAll('h1,h2,p')];
texts.forEach(el=>split(el,el.matches('.hero p')?9:0));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.35,rootMargin:'0px 0px -6% 0px'});
texts.forEach(el=>io.observe(el));
document.querySelectorAll('.reveal').forEach(el=>{
  const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){el.classList.add('in');o.disconnect()}}),{threshold:.2});
  o.observe(el);
});
</script>
</body>
</html>
`;

const TERMS = String.raw`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Условия пользования — KLCDN</title>
<link rel="icon" href="https://cdn.kleymorf.xyz/klcdn.webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&family=Unbounded:wght@500;700;800&display=swap" rel="stylesheet">
<script type="module" src="https://unpkg.com/@lottiefiles/dotlottie-wc@latest/dist/dotlottie-wc.js"></script>
<style>
:root{--ink:#12141c;--muted:#686d7e;--line:#e8ebf3;--blue:#2b6bff;--blue2:#6aa0ff;--sky:#eaf1ff;--sky2:#f6f9ff}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{background:#fff;color:var(--ink);font-family:'Onest',system-ui,sans-serif;font-size:17px;line-height:1.7;-webkit-font-smoothing:antialiased;overflow-x:hidden}
body::before,body::after{content:"";position:fixed;border-radius:50%;filter:blur(90px);z-index:-1}
body::before{width:min(60vw,560px);height:min(60vw,560px);background:#d3e3ff;top:-8%;right:-10%}
body::after{width:min(50vw,460px);height:min(50vw,460px);background:#e6eeff;bottom:5%;left:-12%}
.bar{display:flex;align-items:center;justify-content:space-between;padding:12px clamp(16px,4vw,40px);background:rgba(255,255,255,.72);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:5}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:var(--ink);font-family:'Unbounded',sans-serif;font-weight:800;font-size:1.1rem;letter-spacing:-.02em}
.lg{width:44px;height:44px;border-radius:14px;background:#fff;box-shadow:0 4px 18px rgba(43,107,255,.2);overflow:hidden}
.lg img{width:100%;height:100%;object-fit:cover;display:block}
.mini{font-size:.95rem;font-weight:600;color:var(--blue);text-decoration:none;padding:10px 20px;border-radius:999px;background:var(--sky);transition:background .2s,color .2s}
.mini:hover{background:var(--blue);color:#fff}
.wrap{max-width:900px;margin:0 auto;padding:0 6vw}
.tabs{display:flex;gap:8px;flex-wrap:wrap;padding-top:5vh}
.tabs a{padding:9px 18px;border-radius:999px;border:1px solid var(--line);color:var(--muted);text-decoration:none;font-size:.92rem;font-weight:500;background:#fff;transition:all .2s}
.tabs a:hover{color:var(--blue);border-color:var(--blue)}
.tabs a.on{background:var(--blue);border-color:var(--blue);color:#fff}
.top{display:grid;grid-template-columns:1.25fr .75fr;gap:4vw;align-items:center;padding:7vh 0 6vh}
h1{font-family:'Unbounded',sans-serif;font-weight:800;font-size:clamp(1.9rem,5vw,3.4rem);letter-spacing:-.04em;line-height:1.12;margin-bottom:22px;text-wrap:balance}
.date{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:999px;background:#fff;border:1px solid var(--line);box-shadow:0 4px 16px rgba(20,30,70,.06);font-size:.92rem;font-weight:500}
.date::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--blue)}
.art{aspect-ratio:1;border-radius:40px;display:grid;place-items:center;background:linear-gradient(145deg,var(--sky),#fff 70%);border:1px solid var(--line);box-shadow:0 30px 70px -30px rgba(43,107,255,.35)}
.art dotlottie-wc{width:86%;height:86%}
.card{background:#fff;border:1px solid var(--line);border-radius:30px;padding:clamp(22px,4vw,38px);margin-bottom:22px;box-shadow:0 22px 56px -34px rgba(43,107,255,.4)}
h2{display:flex;align-items:center;gap:14px;font-family:'Unbounded',sans-serif;font-weight:700;font-size:clamp(1.05rem,2.4vw,1.35rem);letter-spacing:-.025em;line-height:1.25;margin-bottom:18px}
h2 b{flex:none;display:grid;place-items:center;width:42px;height:42px;border-radius:13px;background:linear-gradient(135deg,var(--blue),#4d86ff);color:#fff;font-size:.95rem;box-shadow:0 8px 20px rgba(43,107,255,.3)}
.c{display:grid;grid-template-columns:3.3rem 1fr;gap:6px;padding:13px 0;color:#2b2f40}
.c+.c,.t+.c{border-top:1px solid var(--line)}
.c i{font-style:normal;color:var(--blue);font-weight:600;font-size:.95rem;padding-top:1px}
.t{padding:4px 0 12px;color:var(--ink);font-weight:500}
.card a{color:var(--blue);font-weight:600;text-decoration:none;border-bottom:1px solid rgba(43,107,255,.3)}
.card a:hover{border-color:var(--blue)}
.foot{margin-top:6vh;border-top:1px solid var(--line);background:linear-gradient(#fff,var(--sky2));padding:36px clamp(20px,6vw,80px);text-align:center;color:var(--muted);font-size:.9rem}
.foot a{color:var(--muted);text-decoration:none;margin:0 10px;transition:color .2s}
.foot a:hover{color:var(--blue)}
.foot p{margin-top:10px}
a:focus-visible{outline:3px solid var(--ink);outline-offset:3px}
.w{display:inline-block;opacity:0;transform:translateY(.5em);filter:blur(10px);transition:opacity 1.2s ease,transform 1.2s cubic-bezier(.22,1,.36,1),filter 1.2s ease;transition-delay:calc(var(--i)*38ms)}
.t0.in .w{opacity:1;transform:none;filter:none}
.rv{opacity:0;transform:translateY(24px);transition:opacity .9s ease,transform .9s cubic-bezier(.22,1,.36,1)}
.c.rv,.t.rv,.date.rv{filter:blur(5px);transition:opacity .9s ease,transform .9s cubic-bezier(.22,1,.36,1),filter .9s ease}
.rv.in{opacity:1;transform:none;filter:none}
@media(max-width:700px){.top{grid-template-columns:1fr;text-align:center}.art{max-width:260px;margin:0 auto;order:-1;width:100%}.c{grid-template-columns:2.9rem 1fr}.card{border-radius:24px}}
@media(prefers-reduced-motion:reduce){.w,.rv{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}}
</style>
</head>
<body>
<nav class="bar">
  <a class="brand" href="/" aria-label="KLCDN — на главную"><div class="lg"><img src="https://cdn.kleymorf.xyz/klcdn.webp" alt="KLCDN"></div><span>KLCDN</span></a>
  <a class="mini" href="/">На главную</a>
</nav>
<div class="wrap">
  <div class="tabs"><a href="/terms" class="on">Условия</a><a href="/privacy">Конфиденциальность</a><a href="/abuse">Жалобы</a></div>
  <header class="top">
    <div>
      <h1>Условия пользования</h1>
      <div class="date rv">Дата вступления в силу: 04.10.2026</div>
    </div>
    <div class="art rv"><dotlottie-wc src="https://cdn.kleymorf.xyz/documents.lottie" autoplay loop></dotlottie-wc></div>
  </header>
  <main>
<section class="card rv"><h2><b>1</b><span>Термины</span></h2>
<p class="c rv"><i>1.1.</i><span>KLCDN — сервис раздачи статических файлов через CDN, управляемый через Telegram-бот @kcdnbot.</span></p>
<p class="c rv"><i>1.2.</i><span>Администрация — физическое лицо, владелец KLCDN.</span></p>
<p class="c rv"><i>1.3.</i><span>Пользователь — любое лицо, использующее Сервис.</span></p>
<p class="c rv"><i>1.4.</i><span>Контент — файлы, загруженные Пользователем через бота.</span></p>
</section>
<section class="card rv"><h2><b>2</b><span>Принятие условий</span></h2>
<p class="c rv"><i>2.1.</i><span>Использование Сервиса означает полное согласие с настоящими Условиями.</span></p>
<p class="c rv"><i>2.2.</i><span>Минимальный возраст Пользователя — 13 лет.</span></p>
<p class="c rv"><i>2.3.</i><span>Администрация вправе изменять Условия. Актуальная версия публикуется на этой странице.</span></p>
</section>
<section class="card rv"><h2><b>3</b><span>Предмет</span></h2>
<p class="c rv"><i>3.1.</i><span>Сервис предоставляется бесплатно на условиях «как есть».</span></p>
<p class="c rv"><i>3.2.</i><span>Администрация не гарантирует бесперебойную работу, сохранность файлов, скорость и доступность.</span></p>
<p class="c rv"><i>3.3.</i><span>Сервис не является резервным хранилищем. Единственная копия файлов не должна храниться в Сервисе.</span></p>
</section>
<section class="card rv"><h2><b>4</b><span>Запрещённый контент</span></h2>
<p class="t rv">Запрещается загружать, хранить и распространять:</p>
<p class="c rv"><i>4.1.</i><span>Материалы сексуального характера с участием несовершеннолетних.</span></p>
<p class="c rv"><i>4.2.</i><span>Порнографию и любой NSFW-контент.</span></p>
<p class="c rv"><i>4.3.</i><span>Вредоносное ПО: вирусы, трояны, эксплойты, стилеры, майнеры, фишинговые страницы.</span></p>
<p class="c rv"><i>4.4.</i><span>Материалы, разжигающие ненависть, вражду, экстремизм, терроризм.</span></p>
<p class="c rv"><i>4.5.</i><span>Пиратский контент: фильмы, музыка, софт, книги, игры без прав.</span></p>
<p class="c rv"><i>4.6.</i><span>Спам, скам, мошеннические схемы, DDoS-инструменты.</span></p>
<p class="c rv"><i>4.7.</i><span>Персональные данные третьих лиц без согласия, доксинг.</span></p>
<p class="c rv"><i>4.8.</i><span>Материалы, нарушающие законодательство Республики Казахстан или страны Пользователя.</span></p>
<p class="c rv"><i>4.9.</i><span>Автоматизированный флуд и чрезмерную нагрузку на инфраструктуру.</span></p>
</section>
<section class="card rv"><h2><b>5</b><span>Ответственность Пользователя</span></h2>
<p class="c rv"><i>5.1.</i><span>Пользователь несёт полную ответственность за загруженный Контент.</span></p>
<p class="c rv"><i>5.2.</i><span>Пользователь подтверждает наличие прав на загружаемые файлы.</span></p>
<p class="c rv"><i>5.3.</i><span>Пользователь обязуется не использовать Сервис для нарушения закона.</span></p>
</section>
<section class="card rv"><h2><b>6</b><span>Права Администрации</span></h2>
<p class="c rv"><i>6.1.</i><span>Администрация вправе без предупреждения удалять файлы, блокировать доступ, ограничивать работу Сервиса, прекратить работу Сервиса.</span></p>
<p class="c rv"><i>6.2.</i><span>Администрация не обязана объяснять причины удаления или блокировки.</span></p>
</section>
<section class="card rv"><h2><b>7</b><span>Ограничение ответственности</span></h2>
<p class="c rv"><i>7.1.</i><span>Администрация не несёт ответственности за Контент Пользователей, убытки, утрату файлов, действия третьих лиц.</span></p>
<p class="c rv"><i>7.2.</i><span>Сервис предоставляется бесплатно. Ответственность Администрации ограничена нулём.</span></p>
</section>
<section class="card rv"><h2><b>8</b><span>Ссылки</span></h2>
<p class="c rv"><i>8.1.</i><span>Ссылки на файлы не защищены паролем. Любое лицо со ссылкой может скачать файл.</span></p>
<p class="c rv"><i>8.2.</i><span>Запрещается загружать конфиденциальные, секретные и личные документы.</span></p>
</section>
<section class="card rv"><h2><b>9</b><span>Прекращение</span></h2>
<p class="c rv"><i>9.1.</i><span>Администрация вправе прекратить работу Сервиса без уведомления.</span></p>
<p class="c rv"><i>9.2.</i><span>Пользователь вправе прекратить использование в любой момент.</span></p>
</section>
<section class="card rv"><h2><b>10</b><span>Контакты</span></h2>
<p class="t rv"><a href="mailto:help@kleymorf.xyz">help@kleymorf.xyz</a></p>
</section>
  </main>
</div>
<footer class="foot">
  <a href="/terms">Условия пользования</a><a href="/privacy">Политика конфиденциальности</a><a href="/abuse">Жалобы</a>
  <p>© 2026 KLCDN. Все права защищены.</p>
</footer>
<script>
const split=(el)=>{
  let i=0;
  const f=document.createDocumentFragment();
  el.textContent.split(/(\s+)/).forEach(t=>{
    if(!t) return;
    if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(' '));return}
    const w=document.createElement('span');
    w.className='w';w.style.setProperty('--i',i++);w.textContent=t;f.appendChild(w);
  });
  el.textContent='';el.appendChild(f);
  el.classList.add('t0');
};
const words=[...document.querySelectorAll('h1,h2 span')];
words.forEach(split);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});
[...words,...document.querySelectorAll('.rv')].forEach(el=>io.observe(el));
</script>
</body>
</html>
`;

const PRIVACY = String.raw`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Политика конфиденциальности — KLCDN</title>
<link rel="icon" href="https://cdn.kleymorf.xyz/klcdn.webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&family=Unbounded:wght@500;700;800&display=swap" rel="stylesheet">
<script type="module" src="https://unpkg.com/@lottiefiles/dotlottie-wc@latest/dist/dotlottie-wc.js"></script>
<style>
:root{--ink:#12141c;--muted:#686d7e;--line:#e8ebf3;--blue:#2b6bff;--blue2:#6aa0ff;--sky:#eaf1ff;--sky2:#f6f9ff}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{background:#fff;color:var(--ink);font-family:'Onest',system-ui,sans-serif;font-size:17px;line-height:1.7;-webkit-font-smoothing:antialiased;overflow-x:hidden}
body::before,body::after{content:"";position:fixed;border-radius:50%;filter:blur(90px);z-index:-1}
body::before{width:min(60vw,560px);height:min(60vw,560px);background:#d3e3ff;top:-8%;right:-10%}
body::after{width:min(50vw,460px);height:min(50vw,460px);background:#e6eeff;bottom:5%;left:-12%}
.bar{display:flex;align-items:center;justify-content:space-between;padding:12px clamp(16px,4vw,40px);background:rgba(255,255,255,.72);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:5}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:var(--ink);font-family:'Unbounded',sans-serif;font-weight:800;font-size:1.1rem;letter-spacing:-.02em}
.lg{width:44px;height:44px;border-radius:14px;background:#fff;box-shadow:0 4px 18px rgba(43,107,255,.2);overflow:hidden}
.lg img{width:100%;height:100%;object-fit:cover;display:block}
.mini{font-size:.95rem;font-weight:600;color:var(--blue);text-decoration:none;padding:10px 20px;border-radius:999px;background:var(--sky);transition:background .2s,color .2s}
.mini:hover{background:var(--blue);color:#fff}
.wrap{max-width:900px;margin:0 auto;padding:0 6vw}
.tabs{display:flex;gap:8px;flex-wrap:wrap;padding-top:5vh}
.tabs a{padding:9px 18px;border-radius:999px;border:1px solid var(--line);color:var(--muted);text-decoration:none;font-size:.92rem;font-weight:500;background:#fff;transition:all .2s}
.tabs a:hover{color:var(--blue);border-color:var(--blue)}
.tabs a.on{background:var(--blue);border-color:var(--blue);color:#fff}
.top{display:grid;grid-template-columns:1.25fr .75fr;gap:4vw;align-items:center;padding:7vh 0 6vh}
h1{font-family:'Unbounded',sans-serif;font-weight:800;font-size:clamp(1.9rem,5vw,3.4rem);letter-spacing:-.04em;line-height:1.12;margin-bottom:22px;text-wrap:balance}
.date{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:999px;background:#fff;border:1px solid var(--line);box-shadow:0 4px 16px rgba(20,30,70,.06);font-size:.92rem;font-weight:500}
.date::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--blue)}
.art{aspect-ratio:1;border-radius:40px;display:grid;place-items:center;background:linear-gradient(145deg,var(--sky),#fff 70%);border:1px solid var(--line);box-shadow:0 30px 70px -30px rgba(43,107,255,.35)}
.art dotlottie-wc{width:86%;height:86%}
.card{background:#fff;border:1px solid var(--line);border-radius:30px;padding:clamp(22px,4vw,38px);margin-bottom:22px;box-shadow:0 22px 56px -34px rgba(43,107,255,.4)}
h2{display:flex;align-items:center;gap:14px;font-family:'Unbounded',sans-serif;font-weight:700;font-size:clamp(1.05rem,2.4vw,1.35rem);letter-spacing:-.025em;line-height:1.25;margin-bottom:18px}
h2 b{flex:none;display:grid;place-items:center;width:42px;height:42px;border-radius:13px;background:linear-gradient(135deg,var(--blue),#4d86ff);color:#fff;font-size:.95rem;box-shadow:0 8px 20px rgba(43,107,255,.3)}
.c{display:grid;grid-template-columns:3.3rem 1fr;gap:6px;padding:13px 0;color:#2b2f40}
.c+.c,.t+.c{border-top:1px solid var(--line)}
.c i{font-style:normal;color:var(--blue);font-weight:600;font-size:.95rem;padding-top:1px}
.t{padding:4px 0 12px;color:var(--ink);font-weight:500}
.card a{color:var(--blue);font-weight:600;text-decoration:none;border-bottom:1px solid rgba(43,107,255,.3)}
.card a:hover{border-color:var(--blue)}
.foot{margin-top:6vh;border-top:1px solid var(--line);background:linear-gradient(#fff,var(--sky2));padding:36px clamp(20px,6vw,80px);text-align:center;color:var(--muted);font-size:.9rem}
.foot a{color:var(--muted);text-decoration:none;margin:0 10px;transition:color .2s}
.foot a:hover{color:var(--blue)}
.foot p{margin-top:10px}
a:focus-visible{outline:3px solid var(--ink);outline-offset:3px}
.w{display:inline-block;opacity:0;transform:translateY(.5em);filter:blur(10px);transition:opacity 1.2s ease,transform 1.2s cubic-bezier(.22,1,.36,1),filter 1.2s ease;transition-delay:calc(var(--i)*38ms)}
.t0.in .w{opacity:1;transform:none;filter:none}
.rv{opacity:0;transform:translateY(24px);transition:opacity .9s ease,transform .9s cubic-bezier(.22,1,.36,1)}
.c.rv,.t.rv,.date.rv{filter:blur(5px);transition:opacity .9s ease,transform .9s cubic-bezier(.22,1,.36,1),filter .9s ease}
.rv.in{opacity:1;transform:none;filter:none}
@media(max-width:700px){.top{grid-template-columns:1fr;text-align:center}.art{max-width:260px;margin:0 auto;order:-1;width:100%}.c{grid-template-columns:2.9rem 1fr}.card{border-radius:24px}}
@media(prefers-reduced-motion:reduce){.w,.rv{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}}
</style>
</head>
<body>
<nav class="bar">
  <a class="brand" href="/" aria-label="KLCDN — на главную"><div class="lg"><img src="https://cdn.kleymorf.xyz/klcdn.webp" alt="KLCDN"></div><span>KLCDN</span></a>
  <a class="mini" href="/">На главную</a>
</nav>
<div class="wrap">
  <div class="tabs"><a href="/terms">Условия</a><a href="/privacy" class="on">Конфиденциальность</a><a href="/abuse">Жалобы</a></div>
  <header class="top">
    <div>
      <h1>Политика конфиденциальности</h1>
      <div class="date rv">Дата вступления в силу: 04.10.2026</div>
    </div>
    <div class="art rv"><dotlottie-wc src="https://cdn.kleymorf.xyz/documents.lottie" autoplay loop></dotlottie-wc></div>
  </header>
  <main>
<section class="card rv"><h2><b>1</b><span>Оператор данных</span></h2>
<p class="c rv"><i>1.1.</i><span>Оператор — физическое лицо, владелец KLCDN.</span></p>
<p class="c rv"><i>1.2.</i><span>Контакт: <a href="mailto:help@kleymorf.xyz">help@kleymorf.xyz</a></span></p>
</section>
<section class="card rv"><h2><b>2</b><span>Состав данных</span></h2>
<p class="c rv"><i>2.1.</i><span>Данные Telegram: user ID, username, имя, язык.</span></p>
<p class="c rv"><i>2.2.</i><span>Загруженные файлы: содержимое, тип, размер, дата загрузки.</span></p>
<p class="c rv"><i>2.3.</i><span>Технические логи CDN: IP-адрес, user-agent, referer, время запроса, объём трафика.</span></p>
<p class="c rv"><i>2.4.</i><span>Cookies на сайте не используются. Трекеры не устанавливаются.</span></p>
</section>
<section class="card rv"><h2><b>3</b><span>Цели обработки</span></h2>
<p class="c rv"><i>3.1.</i><span>Telegram-данные — для работы бота и связи Пользователя с его файлами.</span></p>
<p class="c rv"><i>3.2.</i><span>Файлы — для предоставления услуги раздачи.</span></p>
<p class="c rv"><i>3.3.</i><span>Логи — для защиты от атак, разбора жалоб, статистики.</span></p>
</section>
<section class="card rv"><h2><b>4</b><span>Передача данных</span></h2>
<p class="c rv"><i>4.1.</i><span>Telegram — как платформа работы бота.</span></p>
<p class="c rv"><i>4.2.</i><span>Хостинг-провайдеры и CDN-инфраструктура — для хранения и раздачи файлов.</span></p>
<p class="c rv"><i>4.3.</i><span>Правоохранительные органы — по официальному запросу в рамках закона.</span></p>
<p class="c rv"><i>4.4.</i><span>Данные не продаются третьим лицам.</span></p>
</section>
<section class="card rv"><h2><b>5</b><span>Сроки хранения</span></h2>
<p class="c rv"><i>5.1.</i><span>Файлы — до удаления Пользователем, Администрацией или до прекращения работы Сервиса.</span></p>
<p class="c rv"><i>5.2.</i><span>Технические логи — до 90 дней.</span></p>
<p class="c rv"><i>5.3.</i><span>Telegram-данные — на время использования бота.</span></p>
</section>
<section class="card rv"><h2><b>6</b><span>Права Пользователя</span></h2>
<p class="c rv"><i>6.1.</i><span>Пользователь вправе запросить удаление своих файлов и связанных данных по адресу <a href="mailto:help@kleymorf.xyz">help@kleymorf.xyz</a>.</span></p>
<p class="c rv"><i>6.2.</i><span>Удаление производится в течение 30 дней, кроме случаев, когда хранение обязательно по закону.</span></p>
</section>
<section class="card rv"><h2><b>7</b><span>Безопасность</span></h2>
<p class="c rv"><i>7.1.</i><span>Принимаются разумные меры защиты. Абсолютная безопасность не гарантируется.</span></p>
<p class="c rv"><i>7.2.</i><span>Ссылки на файлы публичны. Конфиденциальные данные загружать запрещено.</span></p>
</section>
<section class="card rv"><h2><b>8</b><span>Дети</span></h2>
<p class="c rv"><i>8.1.</i><span>Сервис не предназначен для лиц младше 13 лет.</span></p>
<p class="c rv"><i>8.2.</i><span>При выявлении данных лица младше 13 лет они удаляются.</span></p>
</section>
<section class="card rv"><h2><b>9</b><span>Изменения</span></h2>
<p class="c rv"><i>9.1.</i><span>Политика может обновляться. Актуальная версия публикуется на этой странице.</span></p>
</section>
<section class="card rv"><h2><b>10</b><span>Контакты</span></h2>
<p class="t rv"><a href="mailto:help@kleymorf.xyz">help@kleymorf.xyz</a></p>
</section>
  </main>
</div>
<footer class="foot">
  <a href="/terms">Условия пользования</a><a href="/privacy">Политика конфиденциальности</a><a href="/abuse">Жалобы</a>
  <p>© 2026 KLCDN. Все права защищены.</p>
</footer>
<script>
const split=(el)=>{
  let i=0;
  const f=document.createDocumentFragment();
  el.textContent.split(/(\s+)/).forEach(t=>{
    if(!t) return;
    if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(' '));return}
    const w=document.createElement('span');
    w.className='w';w.style.setProperty('--i',i++);w.textContent=t;f.appendChild(w);
  });
  el.textContent='';el.appendChild(f);
  el.classList.add('t0');
};
const words=[...document.querySelectorAll('h1,h2 span')];
words.forEach(split);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});
[...words,...document.querySelectorAll('.rv')].forEach(el=>io.observe(el));
</script>
</body>
</html>
`;

const ABUSE = String.raw`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Допустимое использование и порядок жалоб — KLCDN</title>
<link rel="icon" href="https://cdn.kleymorf.xyz/klcdn.webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&family=Unbounded:wght@500;700;800&display=swap" rel="stylesheet">
<script type="module" src="https://unpkg.com/@lottiefiles/dotlottie-wc@latest/dist/dotlottie-wc.js"></script>
<style>
:root{--ink:#12141c;--muted:#686d7e;--line:#e8ebf3;--blue:#2b6bff;--blue2:#6aa0ff;--sky:#eaf1ff;--sky2:#f6f9ff}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{background:#fff;color:var(--ink);font-family:'Onest',system-ui,sans-serif;font-size:17px;line-height:1.7;-webkit-font-smoothing:antialiased;overflow-x:hidden}
body::before,body::after{content:"";position:fixed;border-radius:50%;filter:blur(90px);z-index:-1}
body::before{width:min(60vw,560px);height:min(60vw,560px);background:#d3e3ff;top:-8%;right:-10%}
body::after{width:min(50vw,460px);height:min(50vw,460px);background:#e6eeff;bottom:5%;left:-12%}
.bar{display:flex;align-items:center;justify-content:space-between;padding:12px clamp(16px,4vw,40px);background:rgba(255,255,255,.72);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:5}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:var(--ink);font-family:'Unbounded',sans-serif;font-weight:800;font-size:1.1rem;letter-spacing:-.02em}
.lg{width:44px;height:44px;border-radius:14px;background:#fff;box-shadow:0 4px 18px rgba(43,107,255,.2);overflow:hidden}
.lg img{width:100%;height:100%;object-fit:cover;display:block}
.mini{font-size:.95rem;font-weight:600;color:var(--blue);text-decoration:none;padding:10px 20px;border-radius:999px;background:var(--sky);transition:background .2s,color .2s}
.mini:hover{background:var(--blue);color:#fff}
.wrap{max-width:900px;margin:0 auto;padding:0 6vw}
.tabs{display:flex;gap:8px;flex-wrap:wrap;padding-top:5vh}
.tabs a{padding:9px 18px;border-radius:999px;border:1px solid var(--line);color:var(--muted);text-decoration:none;font-size:.92rem;font-weight:500;background:#fff;transition:all .2s}
.tabs a:hover{color:var(--blue);border-color:var(--blue)}
.tabs a.on{background:var(--blue);border-color:var(--blue);color:#fff}
.top{display:grid;grid-template-columns:1.25fr .75fr;gap:4vw;align-items:center;padding:7vh 0 6vh}
h1{font-family:'Unbounded',sans-serif;font-weight:800;font-size:clamp(1.9rem,5vw,3.4rem);letter-spacing:-.04em;line-height:1.12;margin-bottom:22px;text-wrap:balance}
.date{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:999px;background:#fff;border:1px solid var(--line);box-shadow:0 4px 16px rgba(20,30,70,.06);font-size:.92rem;font-weight:500}
.date::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--blue)}
.art{aspect-ratio:1;border-radius:40px;display:grid;place-items:center;background:linear-gradient(145deg,var(--sky),#fff 70%);border:1px solid var(--line);box-shadow:0 30px 70px -30px rgba(43,107,255,.35)}
.art dotlottie-wc{width:86%;height:86%}
.card{background:#fff;border:1px solid var(--line);border-radius:30px;padding:clamp(22px,4vw,38px);margin-bottom:22px;box-shadow:0 22px 56px -34px rgba(43,107,255,.4)}
h2{display:flex;align-items:center;gap:14px;font-family:'Unbounded',sans-serif;font-weight:700;font-size:clamp(1.05rem,2.4vw,1.35rem);letter-spacing:-.025em;line-height:1.25;margin-bottom:18px}
h2 b{flex:none;display:grid;place-items:center;width:42px;height:42px;border-radius:13px;background:linear-gradient(135deg,var(--blue),#4d86ff);color:#fff;font-size:.95rem;box-shadow:0 8px 20px rgba(43,107,255,.3)}
.c{display:grid;grid-template-columns:3.3rem 1fr;gap:6px;padding:13px 0;color:#2b2f40}
.c+.c,.t+.c{border-top:1px solid var(--line)}
.c i{font-style:normal;color:var(--blue);font-weight:600;font-size:.95rem;padding-top:1px}
.t{padding:4px 0 12px;color:var(--ink);font-weight:500}
.card a{color:var(--blue);font-weight:600;text-decoration:none;border-bottom:1px solid rgba(43,107,255,.3)}
.card a:hover{border-color:var(--blue)}
.foot{margin-top:6vh;border-top:1px solid var(--line);background:linear-gradient(#fff,var(--sky2));padding:36px clamp(20px,6vw,80px);text-align:center;color:var(--muted);font-size:.9rem}
.foot a{color:var(--muted);text-decoration:none;margin:0 10px;transition:color .2s}
.foot a:hover{color:var(--blue)}
.foot p{margin-top:10px}
a:focus-visible{outline:3px solid var(--ink);outline-offset:3px}
.w{display:inline-block;opacity:0;transform:translateY(.5em);filter:blur(10px);transition:opacity 1.2s ease,transform 1.2s cubic-bezier(.22,1,.36,1),filter 1.2s ease;transition-delay:calc(var(--i)*38ms)}
.t0.in .w{opacity:1;transform:none;filter:none}
.rv{opacity:0;transform:translateY(24px);transition:opacity .9s ease,transform .9s cubic-bezier(.22,1,.36,1)}
.c.rv,.t.rv,.date.rv{filter:blur(5px);transition:opacity .9s ease,transform .9s cubic-bezier(.22,1,.36,1),filter .9s ease}
.rv.in{opacity:1;transform:none;filter:none}
@media(max-width:700px){.top{grid-template-columns:1fr;text-align:center}.art{max-width:260px;margin:0 auto;order:-1;width:100%}.c{grid-template-columns:2.9rem 1fr}.card{border-radius:24px}}
@media(prefers-reduced-motion:reduce){.w,.rv{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}}
</style>
</head>
<body>
<nav class="bar">
  <a class="brand" href="/" aria-label="KLCDN — на главную"><div class="lg"><img src="https://cdn.kleymorf.xyz/klcdn.webp" alt="KLCDN"></div><span>KLCDN</span></a>
  <a class="mini" href="/">На главную</a>
</nav>
<div class="wrap">
  <div class="tabs"><a href="/terms">Условия</a><a href="/privacy">Конфиденциальность</a><a href="/abuse" class="on">Жалобы</a></div>
  <header class="top">
    <div>
      <h1>Допустимое использование и порядок жалоб</h1>
      <div class="date rv">Дата вступления в силу: 04.10.2026</div>
    </div>
    <div class="art rv"><dotlottie-wc src="https://cdn.kleymorf.xyz/documents.lottie" autoplay loop></dotlottie-wc></div>
  </header>
  <main>
<section class="card rv"><h2><b>1</b><span>Запрещённый контент</span></h2>
<p class="c rv"><i>1.1.</i><span>Материалы сексуального характера с участием несовершеннолетних.</span></p>
<p class="c rv"><i>1.2.</i><span>Порнография и NSFW-контент.</span></p>
<p class="c rv"><i>1.3.</i><span>Вредоносное ПО: вирусы, трояны, эксплойты, стилеры, майнеры, фишинг.</span></p>
<p class="c rv"><i>1.4.</i><span>Экстремизм, разжигание ненависти и вражды.</span></p>
<p class="c rv"><i>1.5.</i><span>Пиратский контент.</span></p>
<p class="c rv"><i>1.6.</i><span>Спам, скам, DDoS-инструменты.</span></p>
<p class="c rv"><i>1.7.</i><span>Персональные данные третьих лиц без согласия, доксинг.</span></p>
<p class="c rv"><i>1.8.</i><span>Материалы, нарушающие законодательство Республики Казахстан.</span></p>
</section>
<section class="card rv"><h2><b>2</b><span>Порядок подачи жалобы</span></h2>
<p class="c rv"><i>2.1.</i><span>Жалобы принимаются на <a href="mailto:abuse@kleymorf.xyz">abuse@kleymorf.xyz</a>.</span></p>
<p class="c rv"><i>2.2.</i><span>В жалобе указываются: прямая ссылка на файл, суть нарушения, подтверждение прав (при жалобе по авторским правам), контакты заявителя.</span></p>
<p class="c rv"><i>2.3.</i><span>Анонимные жалобы рассматриваются. Приоритет — у жалоб с контактами.</span></p>
</section>
<section class="card rv"><h2><b>3</b><span>Сроки рассмотрения</span></h2>
<p class="c rv"><i>3.1.</i><span>Стандартный срок — 72 часа с момента получения.</span></p>
<p class="c rv"><i>3.2.</i><span>Жалобы на CSAM и угрозы жизни — 24 часа.</span></p>
<p class="c rv"><i>3.3.</i><span>При подтверждении нарушения файл удаляется, доступ Пользователя может быть заблокирован без предупреждения.</span></p>
</section>
<section class="card rv"><h2><b>4</b><span>Возражение на удаление</span></h2>
<p class="c rv"><i>4.1.</i><span>Возражение направляется на <a href="mailto:abuse@kleymorf.xyz">abuse@kleymorf.xyz</a> с объяснением и доказательствами.</span></p>
<p class="c rv"><i>4.2.</i><span>Срок рассмотрения — 7 дней.</span></p>
</section>
<section class="card rv"><h2><b>5</b><span>Повторные нарушения</span></h2>
<p class="c rv"><i>5.1.</i><span>Повторная загрузка запрещённого контента влечёт постоянную блокировку без восстановления.</span></p>
</section>
<section class="card rv"><h2><b>6</b><span>Контакты</span></h2>
<p class="t rv">Жалобы: <a href="mailto:abuse@kleymorf.xyz">abuse@kleymorf.xyz</a></p>
<p class="t rv">Общие вопросы: <a href="mailto:help@kleymorf.xyz">help@kleymorf.xyz</a></p>
</section>
  </main>
</div>
<footer class="foot">
  <a href="/terms">Условия пользования</a><a href="/privacy">Политика конфиденциальности</a><a href="/abuse">Жалобы</a>
  <p>© 2026 KLCDN. Все права защищены.</p>
</footer>
<script>
const split=(el)=>{
  let i=0;
  const f=document.createDocumentFragment();
  el.textContent.split(/(\s+)/).forEach(t=>{
    if(!t) return;
    if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(' '));return}
    const w=document.createElement('span');
    w.className='w';w.style.setProperty('--i',i++);w.textContent=t;f.appendChild(w);
  });
  el.textContent='';el.appendChild(f);
  el.classList.add('t0');
};
const words=[...document.querySelectorAll('h1,h2 span')];
words.forEach(split);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});
[...words,...document.querySelectorAll('.rv')].forEach(el=>io.observe(el));
</script>
</body>
</html>
`;

const NOT_FOUND = String.raw`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>404 — страница не найдена · KLCDN</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&family=Unbounded:wght@500;700;800&display=swap" rel="stylesheet">
<link rel="icon" href="https://cdn.kleymorf.xyz/klcdn.webp">
<script type="module" src="https://unpkg.com/@lottiefiles/dotlottie-wc@latest/dist/dotlottie-wc.js"></script>
<style>
:root{--ink:#12141c;--muted:#686d7e;--line:#e8ebf3;--blue:#2b6bff;--sky:#eaf1ff}
*{box-sizing:border-box;margin:0}
body{background:#fff;color:var(--ink);font-family:'Onest',system-ui,sans-serif;font-size:18px;line-height:1.65;-webkit-font-smoothing:antialiased;min-height:100vh;display:flex;flex-direction:column;overflow-x:hidden}
body::before{content:"";position:fixed;width:min(70vw,620px);height:min(70vw,620px);border-radius:50%;background:#d6e5ff;filter:blur(90px);top:15%;left:50%;transform:translateX(-50%);z-index:-1}
.bar{padding:14px clamp(16px,4vw,40px)}
.brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none;color:var(--ink);font-weight:800;font-size:1.1rem}
.lg{width:46px;height:46px;border-radius:14px;background:#fff;box-shadow:0 4px 18px rgba(43,107,255,.2);overflow:hidden}
.lg img{width:100%;height:100%;object-fit:cover;display:block}
main{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px 6vw 60px}
.a{width:min(80vw,380px);aspect-ratio:1}
.a dotlottie-wc{width:100%;height:100%}
h1,.brand{font-family:'Unbounded','Onest',sans-serif}
h1{font-weight:700;font-size:clamp(1.7rem,4.8vw,3rem);letter-spacing:-.035em;line-height:1.15;margin-top:6px}
p{color:var(--muted);max-width:36ch;margin:16px auto 34px}
.btn{display:inline-block;background:linear-gradient(135deg,var(--blue),#4d86ff);color:#fff;text-decoration:none;font-weight:600;font-size:1.1rem;padding:17px 40px;border-radius:999px;box-shadow:0 14px 34px rgba(43,107,255,.38);transition:transform .2s}
.btn:hover{transform:translateY(-3px)}
.btn:focus-visible,.brand:focus-visible{outline:3px solid var(--ink);outline-offset:4px}
.wm{display:inline-block}
.wm .w{display:inline-block;opacity:0;transform:translateY(.5em);filter:blur(10px);animation:soft 1.2s cubic-bezier(.22,1,.36,1) forwards;animation-delay:calc(var(--i)*40ms + .3s)}
.btn{opacity:0;animation:in .7s ease 1s forwards}
.cp{text-align:center;color:var(--muted);font-size:.88rem;padding:0 20px 28px}.cp a{color:var(--blue);text-decoration:none;font-weight:600}
@keyframes soft{to{opacity:1;transform:none;filter:none}}
@keyframes in{to{opacity:1;transform:none;filter:none}}
@media(prefers-reduced-motion:reduce){.wm .w{opacity:1;transform:none;filter:none;animation:none}.btn{opacity:1;animation:none}}
</style>
</head>
<body>
<div class="bar"><a class="brand" href="/" aria-label="KLCDN — на главную"><div class="lg"><img src="https://cdn.kleymorf.xyz/klcdn.webp" alt="KLCDN"></div>KLCDN</a></div>
<main>
  <div class="a"><dotlottie-wc src="https://cdn.kleymorf.xyz/404.lottie" autoplay loop></dotlottie-wc></div>
  <h1>Страница не найдена</h1>
  <p>Такой страницы нет или файл был удалён. Проверьте ссылку или вернитесь на главную.</p>
  <a class="btn" href="/">На главную</a>
</main>
<div class="cp">© 2026 KLCDN. Все права защищены. · <a href="mailto:help@kleymorf.xyz">help@kleymorf.xyz</a><br><a href="/terms">Условия</a> · <a href="/privacy">Конфиденциальность</a> · <a href="/abuse">Жалобы</a></div>
<script>
document.querySelectorAll('h1,p').forEach(el=>{
  let i=0;
  const f=document.createDocumentFragment();
  el.textContent.split(/\s+/).forEach(t=>{
    const m=document.createElement('span');m.className='wm';
    const w=document.createElement('span');w.className='w';w.style.setProperty('--i',i++);w.textContent=t;
    m.appendChild(w);f.appendChild(m);f.appendChild(document.createTextNode(' '));
  });
  el.textContent='';el.appendChild(f);
});
</script>
</body>
</html>
`;

const PAGES = { "/": INDEX, "/terms": TERMS, "/privacy": PRIVACY, "/abuse": ABUSE };
const ALIASES = { "/index.html": "/", "/terms.html": "/terms", "/privacy.html": "/privacy", "/abuse.html": "/abuse" };

const ROBOTS = `User-agent: *
Allow: /
Disallow: /other/

Sitemap: https://cdn.kleymorf.xyz/sitemap.xml
`;

const SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://cdn.kleymorf.xyz/</loc><lastmod>2026-10-04</lastmod></url>
  <url><loc>https://cdn.kleymorf.xyz/terms</loc><lastmod>2026-10-04</lastmod></url>
  <url><loc>https://cdn.kleymorf.xyz/privacy</loc><lastmod>2026-10-04</lastmod></url>
  <url><loc>https://cdn.kleymorf.xyz/abuse</loc><lastmod>2026-10-04</lastmod></url>
</urlset>
`;

const headers = { "content-type": "text/html;charset=utf-8", "cache-control": "public, max-age=300" };

export default {
  async fetch(request) {
    let { pathname } = new URL(request.url);
    if (pathname === "/other" || pathname.startsWith("/other/")) {
      return fetch(request);
    }
    if (pathname === "/favicon.ico") {
      const icon = await fetch(new URL("/klcdn.webp", request.url));
      return new Response(icon.body, { status: icon.status, headers: { "content-type": "image/webp", "cache-control": "public, max-age=86400" } });
    }
    if (pathname === "/robots.txt") {
      return new Response(ROBOTS, { headers: { "content-type": "text/plain;charset=utf-8", "cache-control": "public, max-age=3600" } });
    }
    if (pathname === "/sitemap.xml") {
      return new Response(SITEMAP, { headers: { "content-type": "application/xml;charset=utf-8", "cache-control": "public, max-age=3600" } });
    }
    if (pathname.length > 1 && pathname.endsWith("/")) pathname = pathname.slice(0, -1);
    pathname = ALIASES[pathname] || pathname;
    if (Object.hasOwn(PAGES, pathname)) {
      return new Response(PAGES[pathname], { headers });
    }
    const origin = await fetch(request);
    if (origin.status !== 404) return origin;
    return new Response(NOT_FOUND, { status: 404, headers });
  },
};
