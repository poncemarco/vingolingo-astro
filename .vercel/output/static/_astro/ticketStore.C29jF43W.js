var c={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function E(){if(d)return f;d=1;var u=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(n,r,l){var o=null;if(l!==void 0&&(o=""+l),r.key!==void 0&&(o=""+r.key),"key"in r){l={};for(var a in r)a!=="key"&&(l[a]=r[a])}else l=r;return r=l.ref,{$$typeof:u,type:n,key:o,ref:r!==void 0?r:null,props:l}}return f.Fragment=t,f.jsx=e,f.jsxs=e,f}var p;function R(){return p||(p=1,c.exports=E()),c.exports}var h=R();let s=[],i=0;const v=4;let m=u=>{let t=[],e={get(){return e.lc||e.listen(()=>{})(),e.value},lc:0,listen(n){return e.lc=t.push(n),()=>{for(let l=i+v;l<s.length;)s[l]===n?s.splice(l,v):l+=v;let r=t.indexOf(n);~r&&(t.splice(r,1),--e.lc||e.off())}},notify(n,r){let l=!s.length;for(let o of t)s.push(o,e.value,n,r);if(l){for(i=0;i<s.length;i+=v)s[i](s[i+1],s[i+2],s[i+3]);s.length=0}},off(){},set(n){let r=e.value;r!==n&&(e.value=n,e.notify(r))},subscribe(n){let r=e.listen(n);return n(e.value),r},value:u};return e},T=(u={})=>{let t=m(u);return t.setKey=function(e,n){let r=t.value;typeof n>"u"&&e in t.value?(t.value={...t.value},delete t.value[e],t.notify(r,e)):t.value[e]!==n&&(t.value={...t.value,[e]:n},t.notify(r,e))},t};const x=T({});function _(u){const t=x.get()[u];return t||null}function I({id:u,name:t,quantity:e,price:n,imageUrl:r,thumbnail:l,unit:o}){const a=_(u);a?x.setKey(u,{...a,quantity:e}):x.setKey(u,{id:u,name:t,price:n,quantity:e,imageUrl:r,thumbnail:l,unit:o})}export{m as a,I as b,_ as g,h as j,x as t};
