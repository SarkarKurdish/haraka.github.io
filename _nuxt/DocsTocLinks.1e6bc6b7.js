/* empty css                                                                                      */import{r as d,S as h,T as v,N as f,k as _,F as g,U as k,o as a,e as p,P as y,V as b,t as m,f as S,I as x,u as B,W as C,c as H,s as A,b as T}from"./entry.4dab792c.js";const q=()=>{const n=d(),o=d([]),c=d([]),r=e=>e.forEach(t=>{const l=t.target.id;t.isIntersecting?o.value.push(l):o.value=o.value.filter(i=>i!==l)}),u=e=>e.forEach(t=>{n.value.observe(t)});return h(o,(e,t)=>{e.length===0?c.value=t:c.value=e},{deep:!0}),v(()=>n.value=new IntersectionObserver(r)),f(()=>{var e;return(e=n.value)==null?void 0:e.disconnect()}),{visibleHeadings:o,activeHeadings:c,updateHeadings:u}},I={class:"docs-toc-links"},$=["href","onClick"],w=_({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(n,{emit:o}){g();const c=k(),{activeHeadings:r,updateHeadings:u}=q();setTimeout(()=>{u([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function e(t){c.push(`#${t}`),o("move",t)}return(t,l)=>{const i=D;return a(),p("ul",I,[(a(!0),p(y,null,b(n.links,s=>(a(),p("li",{key:s.text,class:m([`depth-${s.depth}`])},[S("a",{href:`#${s.id}`,class:m([B(r).includes(s.id)&&"active"]),onClick:C(E=>e(s.id),["prevent"])},x(s.text),11,$),s.children?(a(),H(i,{key:0,links:s.children},null,8,["links"])):A("",!0)],2))),128))])}}}),D=T(w,[["__scopeId","data-v-293614b3"]]);export{D as default};
