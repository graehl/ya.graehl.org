import{r as t}from"./main-D5BntdIj.js";function a(e=30*1e3){const[o,n]=t.useState(()=>Date.now());return t.useEffect(()=>{const r=window.setInterval(()=>{n(Date.now())},e);return()=>window.clearInterval(r)},[e]),o}export{a as u};
//# sourceMappingURL=useRelativeNow-CtD9u6c1.js.map
