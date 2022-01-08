var A=Object.defineProperty,O=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var x=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&x(e,r,t[r]);if(T)for(var r of T(t))j.call(t,r)&&x(e,r,t[r]);return e},I=(e,t)=>O(e,N(t));import{n as B,d as F,a as u,c as D,o as i,b as d,e as c,t as y,u as k,F as b,r as G,w as g,f as v,g as L,h as E,i as J,j as z}from"./vendor.f47f9cee.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}};P();function V({taskId:e,row:t}){this.timesGrid[t]=e}function q({row:e}){return this.timesGrid[e]}function H({row:e,taskId:t}){this.timesGrid[e]=t}function K({row:e}){this.timesGrid[e]=void 0}function R(e){const t=B();this.taskMap.set(t,I(m({},e),{id:t}))}var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",addTaskToGrid:V,getTaskAtGridCell:q,setGridCell:H,unsetGridCell:K,addTask:R});function Q(){return[...this.taskMap.keys()].sort()}var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",taskIds:Q});function X(){return{timesGrid:Array.from({length:24}),taskMap:new Map}}const p=F({id:"app",state:X,actions:m({},W),getters:m({},U)});function S(e){return p().taskMap.get(e)}const Y={class:"mt-1"},Z=u({props:{taskId:null},setup(e){const t=e,r=D(()=>S(t.taskId)),a=p();function s(o){var n;(n=o.dataTransfer)==null||n.setData("data",JSON.stringify({type:"task-drop",payload:{source:{type:"dock",row:a.taskIds.indexOf(t.taskId)},taskId:t.taskId}}))}return(o,n)=>{var l;return i(),d("div",{draggable:"true",class:"rounded-md w-52 h-10 m-2 center border-2 bg-white border-black column text-center text-xs cursor-grab",onDragstart:s},[c("span",Y,y((l=k(r))==null?void 0:l.name),1)],32)}}});function $(e){return e!==null&&typeof e=="object"?e.type==="task-drop":!1}const tt=["onDrop"],et=c("span",{class:"font-bold text-3xl text-center"},"Tasks",-1),rt={class:"column flex-grow z-1"},st=u({setup(e){const t=p();function r(s){var n,l;const o=(l=(n=s.dataTransfer)==null?void 0:n.getData("data"))!=null?l:"";if(o!==""){const f=JSON.parse(o);if($(f)){const{source:_}=f.payload;_.type==="grid"&&t.unsetGridCell({row:_.row})}}}function a(){const s=prompt("What is the name of this task?");s!==null&&t.addTask({name:s,description:""})}return(s,o)=>(i(),d("div",{class:"column items-center px-2 overflow-x-clip pb-5 pt-3 bg-white border-r-2 border-gray-200 overflow-y-auto",onDrop:g(r,["prevent"]),onDragover:o[0]||(o[0]=g(()=>{},["prevent"]))},[et,c("div",rt,[c("div",{class:"bg-green-500 rounded-md hover:bg-green-600 text-center font-bold text-white px-5 mt-2 mb-1 cursor-pointer py-2 self-center",onClick:a}," Add Task "),(i(!0),d(b,null,G(k(t).taskIds,n=>(i(),d("div",{key:n},[v(Z,{"task-id":n},null,8,["task-id"])]))),128))])],40,tt))}});var ot=(e,t)=>{const r=e.__vccOpts||e;for(const[a,s]of t)r[a]=s;return r};const nt={class:"w-full h-full row center bg-red-200 font-bold"},at=u({props:{taskId:null},setup(e){const t=e,r=D(()=>S(t.taskId));return(a,s)=>{var o;return i(),d("div",nt,[c("div",null,y((o=k(r))==null?void 0:o.name),1)])}}});var it=ot(at,[["__scopeId","data-v-173b8252"]]);const dt=["draggable","onDrop"],ct={class:"rounded-md h-10 border-2 border-red-50 row justify-between bg-red-50 cursor-pointer"},lt=u({props:{currentTaskId:null,row:null},setup(e){const t=e,r=p();function a(o){var f,_;const n=(_=(f=o.dataTransfer)==null?void 0:f.getData("data"))!=null?_:"";if(n==="")return;const l=JSON.parse(n);if($(l)){const{payload:w}=l;if(w.source.type==="grid"){const{row:h}=w.source;r.getTaskAtGridCell({row:h})!==void 0&&(t.currentTaskId===void 0?r.unsetGridCell({row:h}):r.setGridCell({taskId:t.currentTaskId,row:h}))}r.setGridCell({taskId:l.payload.taskId,row:t.row})}}function s(o){var n;t.currentTaskId!==void 0&&((n=o.dataTransfer)==null||n.setData("data",JSON.stringify({type:"task-drop",payload:{taskId:t.currentTaskId,source:{type:"grid",row:t.row}}})))}return(o,n)=>(i(),d("div",{class:"p-2 flex-grow",draggable:e.currentTaskId!==void 0,onDragstart:s,onDrop:g(a,["prevent"]),onDragover:n[0]||(n[0]=g(()=>{},["prevent"]))},[c("div",ct,[e.currentTaskId!==void 0?(i(),L(it,{key:0,class:"self-center","task-id":e.currentTaskId},null,8,["task-id"])):E("",!0)])],40,dt))}}),ut={class:"overflow-y-auto overflow-x-auto column w-full"},pt={class:"grid grid-cols-[max-content,auto] p-2 w-full mx-auto items-center"},ft={style:{"grid-column-start":"1"},class:"text-center"},_t=u({setup(e){const t=p(),r=[...Array.from({length:24}).keys()].map(a=>`${a}:00 - ${a+1}:00`);return(a,s)=>(i(),d("div",ut,[c("div",pt,[(i(!0),d(b,null,G(k(t).timesGrid,(o,n)=>(i(),d(b,{key:n},[c("div",ft,y(k(r)[n]),1),v(lt,{style:{"grid-column-start":"2"},"current-task-id":o,row:n},null,8,["current-task-id","row"])],64))),128))])]))}});const kt={class:"row h-full"},mt={class:"flex-grow"},gt=c("div",{class:"font-bold text-6xl text-center mt-2"},"Schedule",-1),vt=u({setup(e){const t=p(),r=[{name:"Finish ICS IA",description:""},{name:"Finish English Homework",description:""},{name:"Finish Extended Essay",description:""}];for(const a of r)t.addTask(a);return(a,s)=>(i(),d("div",kt,[v(st),c("div",mt,[gt,v(_t,{class:"m-auto"})])]))}});const C=J(vt);C.use(z());C.mount("#app");