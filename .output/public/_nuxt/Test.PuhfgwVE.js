import{t as s,v as u,F as A,y as c,r as m,x as r,z as o,Q as f}from"./entry.qQIk2RqJ.js";const d={__name:"Child",setup(n){return(e,a)=>(s(),u("span",null,"My input"))}},i={__name:"ChildWatchEffect",setup(n){return A(()=>{cart.value?render.value=!0:render.value=!1}),(e,a)=>c(e.FF)}},k={__name:"Test",setup(n){const e=m("Hello World!");function a(){alert("ere"),e.value="kaka"}return(v,t)=>{const _=d,p=i;return s(),u(f,null,[r("button",{onClick:t[0]||(t[0]=l=>a())},"AaAAAAAAAAAAAAAAA "),r("h1",null,c(e.value),1),o(_,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value=l)},null,8,["modelValue"]),o(p)],64)}}};export{k as default};