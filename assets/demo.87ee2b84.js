var t=Object.defineProperty,a=Object.prototype.hasOwnProperty,e=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,c=(a,e,s)=>e in a?t(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,l=(t,l)=>{for(var o in l||(l={}))a.call(l,o)&&c(t,o,l[o]);if(e)for(var o of e(l))s.call(l,o)&&c(t,o,l[o]);return t};import{c as o}from"./mobile.2e14fad0.js";import{a as n,z as r,s as i,x as h,r as u,o as d,c as f,f as w,j as b,t as p,q as j}from"./vendor.80bf15c7.js";import"./index.77feaf28.js";const{createDemo:g}=o("switch");var m=g({props:{},setup(){const t=n({text:"开"});return l(l({},r(t)),{switchChange:(a,e)=>{t.text=e?"开":"关"},change:(t,a)=>{alert(`触发了change事件,开关状态：${a}`)}})}});const v=j("data-v-7bf1ebc0");i("data-v-7bf1ebc0");const x={class:"demo"},y=w("h2",null,"基础用法",-1),_=w("h2",null,"禁用状态",-1),C=w("h2",null,"change事件",-1),O=b(" chane "),S=w("h2",null,"自定义颜色",-1),P=b(" color "),I=w("h2",null,"支持文字",-1),q=b(" text ");h();const z=v(((t,a,e,s,c,l)=>{const o=u("nut-switch"),n=u("nut-cell");return d(),f("div",x,[y,w(n,{class:"switch-adjust"},{default:v((()=>[b(p(t.text)+" ",1),w(o,{onSwitchChange:t.switchChange,class:"switch-decoration"},null,8,["onSwitchChange"])])),_:1}),_,w(n,{class:"switch-adjust"},{default:v((()=>[b(p(t.text)+" ",1),w(o,{class:"switch-decoration",disable:""})])),_:1}),C,w(n,{class:"switch-adjust"},{default:v((()=>[O,w(o,{onSwitchChange:t.change,class:"switch-decoration"},null,8,["onSwitchChange"])])),_:1}),S,w(n,{class:"switch-adjust"},{default:v((()=>[P,w(o,{"active-color":"blue",class:"switch-decoration"})])),_:1}),I,w(n,{class:"switch-adjust"},{default:v((()=>[q,w(o,{class:"switch-decoration",label:"开    关"})])),_:1})])}));m.render=z,m.__scopeId="data-v-7bf1ebc0";export default m;
