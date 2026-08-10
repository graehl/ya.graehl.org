const t="new-session-prefill:";function i(e){return encodeURIComponent(e)}function n(e){return`${t}${i(e)}`}function s(e){return typeof window>"u"?null:sessionStorage.getItem(n(e))}function r(e){typeof window>"u"||sessionStorage.removeItem(n(e))}function f(e,o){typeof window>"u"||sessionStorage.setItem(n(e),o)}export{r as c,s as g,f as s};
//# sourceMappingURL=newSessionPrefill-B03klTbN.js.map
