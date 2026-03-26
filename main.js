/* ─── LOADER ─── */
(function(){
  const pc = document.getElementById('l-particles');
  if(!pc) return;
  const sh = ['◆','✦','✧','☽','⬡','✶','⬟'];
  for(let i=0;i<20;i++){
    const el = document.createElement('div');
    el.className = 'l-particle';
    const s = 9 + Math.random()*14;
    el.style.cssText =
      'left:'+(Math.random()*100)+'%;bottom:'+(Math.random()*15)+'%;font-size:'+s+'px;'+
      'color:'+(i%2===0?'rgba(240,192,64,.65)':'rgba(61,214,140,.55)')+';'+
      'animation-duration:'+(4+Math.random()*7)+'s;animation-delay:'+(Math.random()*4)+'s;';
    el.textContent = sh[i%sh.length];
    pc.appendChild(el);
  }
  function hideLoader(){
    const l = document.getElementById('loader');
    if(!l) return;
    l.classList.add('out');
    setTimeout(()=>{ l.style.display='none'; }, 900);
  }
  window.addEventListener('load', ()=>setTimeout(hideLoader, 1900));
  setTimeout(hideLoader, 4200);
})();

/* ─── POPUP (30s) ─── */
let popupShown = false, timerSecs = 600;
function showPopup(){
  if(popupShown) return;
  popupShown = true;
  const ov = document.getElementById('popup-ov');
  if(!ov) return;
  ov.classList.add('show');
  const el = document.getElementById('timerTxt');
  if(!el) return;
  const iv = setInterval(()=>{
    if(timerSecs<=0){ clearInterval(iv); el.textContent='Expired!'; return; }
    timerSecs--;
    el.textContent = String(Math.floor(timerSecs/60)).padStart(2,'0')+':'+String(timerSecs%60).padStart(2,'0');
  },1000);
}
function closePopup(){
  const ov = document.getElementById('popup-ov');
  if(ov) ov.classList.remove('show');
}
const popupOv = document.getElementById('popup-ov');
if(popupOv) popupOv.addEventListener('click',e=>{ if(e.target===e.currentTarget) closePopup(); });
setTimeout(showPopup, 30000);

/* ─── NAV SCROLL ─── */
const nav = document.getElementById('nav');
if(nav){
  window.addEventListener('scroll', ()=>{ nav.classList.toggle('solid', window.scrollY > 50); }, {passive:true});
}

/* ─── SCROLL REVEAL ─── */
const revObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('vis'); });
},{threshold:.08, rootMargin:'0px 0px -28px 0px'});
document.querySelectorAll('.sr').forEach(el=>revObs.observe(el));

/* ─── FORM SUBMIT ─── */
const enrollForm = document.getElementById('enrollForm');
if(enrollForm){
  enrollForm.addEventListener('submit', e=>{
    e.preventDefault();
    const btn = document.getElementById('enrollBtn');
    if(!btn) return;
    btn.textContent = 'Processing…'; btn.disabled = true;
    setTimeout(()=>{
      enrollForm.style.display = 'none';
      const s = document.getElementById('formSuccess');
      if(s) s.style.display = 'block';
    }, 1600);
  });
}

/* ─── STICKY CTA BAR: hide when enroll form is in view ─── */
const enrollSec = document.getElementById('enroll');
const stickyCta = document.getElementById('stickyCta');
if(enrollSec && stickyCta){
  const stObs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ stickyCta.style.display = e.isIntersecting ? 'none' : ''; });
  },{threshold:.1});
  stObs.observe(enrollSec);
}

/* ─── LAZY LOAD IMAGES (fallback for older browsers) ─── */
if('loading' in HTMLImageElement.prototype === false){
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  const imgObs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const img = e.target;
        if(img.dataset.src){ img.src = img.dataset.src; }
        imgObs.unobserve(img);
      }
    });
  },{rootMargin:'200px'});
  imgs.forEach(img=>imgObs.observe(img));
}
