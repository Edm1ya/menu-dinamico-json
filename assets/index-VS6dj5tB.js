(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const a=document.createElement("button"),d=document.createElement("button"),l=document.createElement("button"),s=document.createElement("div"),m=o=>{const n=document.querySelector(o);return a.innerText="Agregar",d.innerText="Editar",l.innerText="Borrar",s.className="buttons",s.append(a,d,l),n.append(s),s},p=`<form action="">
  <div>
    <label for="name">Nombre</label>
    <input type="text" id="name" />
  </div>
  <div>
    <label for="link">Enlace</label>
    <input type="text" id="link" />
  </div>
  <div style="display: flex; justify-content: center;">
    <input type="button" value="Enviar" id="send" />
    <input type="button" value="Cerrar" id="cancel"/>
  </div>
</form>
`,f=[{id:1,nombre:"Inicio",enlace:"/inicio"},{id:2,nombre:"Sobre Nosotros",enlace:"/sobre-nosotros"},{id:3,nombre:"Servicios",enlace:"/servicios"},{id:4,nombre:"Contacto",enlace:"/contacto"}],b=o=>{const n=document.querySelector(o),t=document.createElement("nav");f.forEach(({id:i,nombre:e,enlace:r})=>{const c=document.createElement("a");c.innerText=e,c.id=i,c.href=r,c.className="item",t.append(c)}),n.append(t)},v=o=>{const n=document.querySelector(o),t=document.createElement("div");t.innerHTML=p,n.append(t);const i=t.querySelector("#send"),e=t.querySelector("#cancel");return i.addEventListener("click",()=>{}),e.addEventListener("click",()=>{n.removeChild(t)}),t};let u;const y=o=>{b(o);let n=m(o);n&&n.addEventListener("click",t=>{console.log(t.target.textContent),t.target.textContent!=="Borrar"&&(u||(u=v(o)))})};y("#app");
