import{c as a}from"./mobile.097a66df.js";import{m as l,B as e,C as n,r as t,o as u,e as d,j as s,k as o,g as r,l as m}from"./vendor.f7062dc0.js";import"./index.e71f5246.js";const{createDemo:i}=a("barrage");var c=i({props:{},setup(){const a=l(""),e=l(null);let n=l(["画美不看","不明觉厉","喜大普奔","男默女泪","累觉不爱","爷青结"]);return{inputVal:a,danmu:e,list:n,addDanmu:function(){e.value.add(a.value)}}}});e("data-v-4d7973fc");const p={class:"demo"},f=r("h2",null,"基础用法",-1),v={class:"test"},V=m("添加");n(),c.render=function(a,l,e,n,m,i){const c=t("nut-barrage"),b=t("nut-cell"),j=t("nut-input"),_=t("nut-button");return u(),d("div",p,[f,s(b,null,{default:o((()=>[s(c,{ref:"danmu",danmu:a.list},null,8,["danmu"])])),_:1}),r("div",v,[s(j,{label:"文本",modelValue:a.inputVal,"onUpdate:modelValue":l[0]||(l[0]=l=>a.inputVal=l)},null,8,["modelValue"]),s(_,{type:"primary",onClick:a.addDanmu},{default:o((()=>[V])),_:1},8,["onClick"])])])},c.__scopeId="data-v-4d7973fc";export{c as default};
