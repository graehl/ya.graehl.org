function s(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u(o){const r=[];for(const e of document.styleSheets)try{for(const t of e.cssRules)r.push(t.cssText)}catch{}const a=document.querySelector("main.session-messages");if(!a)throw new Error("Session messages not found");const n=a.cloneNode(!0),c=["button","input","textarea","[contenteditable]","script",".session-menu-wrapper",".load-older-messages",".pending-message",".deferred-message",".processing-indicator"];for(const e of n.querySelectorAll(c.join(", ")))e.remove();for(const e of n.querySelectorAll("*"))for(const t of Array.from(e.attributes))t.name.startsWith("on")&&e.removeAttribute(t.name);const i=document.documentElement.className,m=document.body.className,l=document.documentElement.getAttribute("data-theme"),d=o||"Shared Session";return`<!DOCTYPE html>
<html class="${s(i)}"${l?` data-theme="${s(l)}"`:""} lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${s(d)}</title>
<style>
${r.join(`
`)}
/* Snapshot overrides */
*, *::before, *::after {
  pointer-events: none !important;
  user-select: text !important;
}
a[href] {
  pointer-events: auto !important;
}
body {
  margin: 0;
  padding: 1rem;
  overflow-y: auto;
}
main.session-messages {
  overflow: visible;
  height: auto;
}
</style>
</head>
<body class="${s(m)}">
${n.outerHTML}
<footer style="text-align:center;padding:2rem 0 1rem;opacity:0.5;font-size:12px;pointer-events:auto;user-select:auto;">
Shared from <a href="https://yepanywhere.com" style="pointer-events:auto">Yep Anywhere</a>
</footer>
</body>
</html>`}export{u as snapshotSession};
