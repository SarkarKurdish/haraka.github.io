import{a as y,r as l,C as k,o as s,i as p,k as m,m as C,w,c as _,u as f,T as x,j as v,L as S,s as $,v as b,x as h,t as I,l as P,K as z}from"./entry.00cd9eb4.js";import{u as N,o as T}from"./index.b2d6803f.js";const V=e=>($("data-v-4a003820"),e=e(),b(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=l(),{copy:t}=N();T(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=k(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(r=>{console.warn("Couldn't copy to clipboard!",r)})};return(B,r)=>{const u=S;return s(),p("button",{ref_key:"copyButtonRef",ref:a,class:v([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[C(x,{name:"fade"},{default:w(()=>{var d,i;return[o.value==="copied"?(s(),_(u,{key:0,name:(d=f(c).copyButton)==null?void 0:d.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),_(u,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const j=h(R,[["__scopeId","data-v-4a003820"]]),D={key:0,class:"filename"},E=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(a,t)=>{const c=j;return s(),p("div",{class:v([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),p("span",D,I(e.filename),1)):P("",!0),z(a.$slots,"default",{},void 0,!0),C(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const O=h(E,[["__scopeId","data-v-c164ce0a"]]);export{O as default};
