_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{H0SL:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("cMU6")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cMU6:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return l}));var r=t("q1tI"),o=t.n(r),a=t("YFqc"),c=t.n(a),u=o.a.createElement,l=!0;n.default=function(e){var n=e.examples;return u(o.a.Fragment,null,u("h1",null,"Examples"),u("ul",null,n.map((function(e){return u("li",{key:e},u(c.a,{href:"./".concat(e)},e))}))))}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),c=t("elyg"),u=t("nOHt"),l=t("vNVm"),i={};function f(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",s=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,h=e.replace,_=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),E=g&&"object"===typeof g&&g.ref,w=(0,l.useIntersection)({rootMargin:"200px"}),b=r(w,2),L=b[0],M=b[1],k=a.default.useCallback((function(e){L(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,L]);(0,a.useEffect)((function(){var e=M&&n&&(0,c.isLocalURL)(p),r="undefined"!==typeof y?y:t&&t.locale,o=i[p+"%"+d+(r?"%"+r:"")];e&&!o&&f(t,p,d,{locale:r})}),[d,p,M,y,n,t]);var I={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:u}))}(e,t,p,d,h,_,m,y)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(t,p,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var N="undefined"!==typeof y?y:t&&t.locale,C=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(d,N,t&&t.locales,t&&t.domainLocales);I.href=C||(0,c.addBasePath)((0,c.addLocale)(d,N,t&&t.defaultLocale))}return a.default.cloneElement(g,I)};n.default=s},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,l=(0,o.useRef)(),i=(0,o.useState)(!1),f=r(i,2),s=f[0],p=f[1],d=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||s||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!c&&!s){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[d,s]};var o=t("q1tI"),a=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var u=new Map}},[["H0SL",0,1,2]]]);