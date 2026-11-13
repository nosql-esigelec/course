import{C as e,L as t,b as n,g as r,h as i,mt as a,p as o,v as s,vt as c,x as l,y as u,z as d}from"../modules/shiki-B3iYF0Pt.js";import{y as f,yt as p}from"../index-DwVI9PM4.js";import{S as m}from"../modules/vue-Cli5dpPO.js";import{u as h}from"./utils-D1C0rJ1D.js";import{t as g}from"./NoteDisplay-Rcl4WKHf.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=e({__name:`print`,setup(e){let{slides:E,total:D}=f();m(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${h.title}`});let O=i(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(e,i)=>(t(),u(`div`,_,[r(`div`,v,[r(`div`,y,[r(`h1`,b,c(a(h).title),1),r(`div`,x,c(new Date().toLocaleString()),1)]),(t(!0),u(o,null,d(O.value,(e,o)=>(t(),u(`div`,{key:o,class:`flex flex-col gap-4 break-inside-avoid-page`},[r(`div`,null,[r(`h2`,S,[r(`div`,C,[r(`div`,w,c(e?.no)+`/`+c(a(D)),1),n(` `+c(e?.title)+` `,1),i[0]||=r(`div`,{class:`flex-auto`},null,-1)])]),l(g,{"note-html":e.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),o<O.value.length-1?(t(),u(`hr`,T)):s(`v-if`,!0)]))),128))])]))}});export{E as default};