import{k as l,z as u,m as p,A as n,v as m,B as _}from"./entry.4dab792c.js";import f from"./ContentSlot.59933c3c.js";const d={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},g=l({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const t=u(),{flatUnwrap:a,unwrap:i}=_(),c=p(()=>e.icon||d[e.type]);return()=>{var s;const r=a((s=t.default&&t.default())!=null?s:[],["ul"]).map(o=>i(o,["li"]));return n("ul",r.map(o=>n("li",[n("span",{class:`list-icon ${e.type}`},n(m,{name:c.value,class:"icon"})),n("span",n(f,{use:()=>o}))])))}}});export{g as _};
