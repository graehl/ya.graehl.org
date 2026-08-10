function n(r){return r.replace(/\/+$/,"")}function o(r,t="/"){const e=r.startsWith("/")?r:`/${r}`;return`${n(t)}${e}`}function a(r,t="/"){return`${n(t)}/${r.replace(/^\/+/,"")}`}function c(r,t,e="/"){const s=o(t,e);return r===s||r.startsWith(`${s}/`)}export{o as a,c as i,a as t};
//# sourceMappingURL=appHref-ByaEnJGJ.js.map
