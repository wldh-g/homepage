(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7Yeg":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return a("BdxU")}])},BdxU:function(e,t,a){"use strict";a.r(t),a.d(t,"config",(function(){return d}));var n=a("hDBU"),r=a("mXGw"),i=a.n(r),o=a("CE6G"),s=a("bBV7"),u=a("ZQo5"),l=a("KZRx"),c=i.a.createElement;t.default=function(){var e=Object(r.useState)(c(i.a.Fragment,null)),t=e[0],a=e[1],d=Object(s.useRouter)(),f=Object(o.b)(),g=Object(n.a)(f,2),m=g[0],h=g[1];return h.addResources("en","404",{title:"Huh... I don't know.",detail:"The page that you're looking for does not exist.",message:"I've never done this before...How about typing whole the URL again?",requrl:"Requested URL:"}),h.addResources("ko","404",{title:"\uc5b4... \ubaa8\ub974\uaca0\uc5b4\uc694.",detail:"\ucc3e\uc73c\uc2dc\ub294 \ud398\uc774\uc9c0\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc544\uc694.",message:"\uc804\uc5d0\ub294 \uc774\ub7f0 \uc801\uc774 \uc5c6\uc5c8\ub294\ub370... \ub2e4\uc2dc \ud55c \ubc88 \uc2dc\ub3c4\ud574\ubcf4\uc2dc\uaca0\uc5b4\uc694?",requrl:"\uac00\ub824\ub358 \ud398\uc774\uc9c0:"}),Object(r.useEffect)((function(){var e=d.query.link||"",t="",n="";e&&e.length>0?(t="go.wldh.org/".concat(e),n="https://go.wldh.org/".concat(e)):(t="www.wldh.org".concat(window.location.pathname),n="https://www.wldh.org".concat(window.location.pathname)),a(c("a",{href:n},t)),document.querySelector('[data-visible="transparent"]').dataset.visible="opaque"}),[d]),c(u.a,{title:m("404:title"),detailedTitle:m("404:detail"),message:m("404:message"),image:l.a.gIsland,metaImage:"/images/banner-404.png",favicoff:!0},c("span",{"data-visible":"transparent"},m("404:requrl"),c("br",null),"\u2002\u2002\u2002",t))};var d={amp:"true"}},KZRx:function(e,t,a){"use strict";t.a={gIsland:{path:"/images/cryingIsland.gif",alt:"Crying Long Island from Azur Lane"},gShiratsuyu:{path:"/images/sleepingShiratsuyu.gif",alt:"Sleeping Shiratsuyu from Azur Lane"},gEnterprise:{path:"/images/thinkingEnterprise.gif",alt:"Thinking Enterprise sitting on a box from Azur Lane"}}},ZQo5:function(e,t,a){"use strict";var n=a("mXGw"),r=a.n(n),i=a("WLOD"),o=a("mfKp"),s=a.n(o),u=r.a.createElement;t.a=function(e){var t=e.title,a=e.detailedTitle,r=e.message,o=e.image,l=e.children,c=e.metaImage,d=e.favicoff,f=e.requiredFeatures,g=Object(n.useState)("translucent"),m=g[0],h=g[1],p=Object(n.useRef)(!1);return Object(n.useEffect)((function(){var e=document.querySelector("header h2"),t=document.querySelector("footer img"),a=function(){e.offsetTop>t.offsetTop&&e.offsetLeft+e.offsetWidth-50>t.offsetLeft?p.current&&(h("translucent"),p.current=!1):p.current||(h("opaque"),p.current=!0)};window.addEventListener("resize",a),a()}),[p]),u(i.a,{title:t,description:a,image:c,favicoff:d,className:s.a.wrapper,requiredFeatures:f},u("header",{className:s.a.header},u("h1",{dangerouslySetInnerHTML:{__html:t}}),u("h2",{dangerouslySetInnerHTML:{__html:a}}),u("span",{dangerouslySetInnerHTML:{__html:r}})),u("main",{className:s.a.main},l),u("footer",{className:s.a.footer},u("img",{className:s.a.blhx,src:o.path,alt:o.alt,"data-visible":m})))}}},[["7Yeg",0,1,2]]]);