/* Load the final site-wide typography/alignment layer after page-specific CSS. */
if(!document.querySelector('link[href="/assets/css/site-alignment.css"]')){
  const alignmentStylesheet=document.createElement('link');
  alignmentStylesheet.rel='stylesheet';
  alignmentStylesheet.href='/assets/css/site-alignment.css';
  document.head.appendChild(alignmentStylesheet);
}

/* Load the selected MB human-intelligence brand mark globally. */
if(!document.querySelector('link[href="/assets/css/brand-logo.css"]')){
  const brandStylesheet=document.createElement('link');
  brandStylesheet.rel='stylesheet';
  brandStylesheet.href='/assets/css/brand-logo.css';
  document.head.appendChild(brandStylesheet);
}

/* Add modern icon metadata without requiring every static HTML page to be edited. */
const ensureIcon=(rel,href,sizes,type)=>{
  if(!document.querySelector(`link[rel="${rel}"][href="${href}"]`)){
    const link=document.createElement('link');
    link.rel=rel;
    link.href=href;
    if(sizes) link.sizes=sizes;
    if(type) link.type=type;
    document.head.appendChild(link);
  }
};
ensureIcon('icon','/assets/images/favicon-48.png','48x48','image/png');
ensureIcon('apple-touch-icon','/assets/images/apple-touch-icon.png','180x180','image/png');

document.querySelectorAll('.brand-mark').forEach(mark=>{
  mark.textContent='';
  mark.setAttribute('aria-hidden','true');
});

const root=document.documentElement;
const themeButton=document.querySelector('.theme-toggle');
themeButton?.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;localStorage.setItem('theme',next)});

const navToggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-nav');
navToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open))});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');navToggle?.setAttribute('aria-expanded','false')}));

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('pre').forEach(pre=>{
  const btn=document.createElement('button');
  btn.className='code-copy';
  btn.type='button';
  btn.textContent='Copy';
  btn.addEventListener('click',async()=>{
    await navigator.clipboard.writeText(pre.innerText);
    btn.textContent='Copied';
    setTimeout(()=>btn.textContent='Copy',1400)
  });
  pre.style.position='relative';
  btn.style.cssText='position:absolute;right:10px;top:10px;border:1px solid #445;background:#1b272b;color:#fff;border-radius:8px;padding:5px 9px;cursor:pointer';
  pre.appendChild(btn)
});

/* Site-wide navigation migrations. */
document.querySelectorAll('a[href="/learning-r/"]').forEach(link=>{
  link.setAttribute('href','/teaching/');
  if(link.textContent.trim()==='Learning R') link.textContent='Teaching';
});

document.querySelectorAll('a[href="/about/"]').forEach(link=>{
  if(link.textContent.trim()==='Background') link.textContent='Profile';
});

document.querySelectorAll('.site-nav a[href="/cv/"], .footer-links a[href="/cv/"]').forEach(link=>link.remove());
