(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2c6D":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/moved",function(){return a("SeFm")}])},"77iF":function(e,t,a){"use strict";t.a={gIsland:{path:"/images/cryingIsland.gif",alt:"Crying Long Island from Azur Lane"},gShiratsuyu:{path:"/images/sleepingShiratsuyu.gif",alt:"Sleeping Shiratsuyu from Azur Lane"},gEnterprise:{path:"/images/thinkingEnterprise.gif",alt:"Thinking Enterprise sitting on a box from Azur Lane"}}},SeFm:function(e,t,a){"use strict";a.r(t);var n=a("mXGw"),i=a.n(n),r=a("ZQo5"),o=a("77iF"),s=i.a.createElement;t.default=function(){var e=Object(n.useState)(0),t=e[0],a=e[1],i='If the page does not change automatically, press <a href="https://www.wldh.org/">here</a> to go to the new URL.';if(t<=5)if(5===t)window.location.replace("https://www.wldh.org/");else{var u=4===t?"a second":"".concat(5-t," seconds");i="You'll be taken to the new URL in ".concat(u),setTimeout((function(){a(t+1)}),1e3)}return s(r.a,{title:"Moved!",detailedTitle:"<a href='https://www.wldh.org/'><b>wldh.org</b></a> is my new homepage.",message:i,image:o.a.gShiratsuyu})}},ZQo5:function(e,t,a){"use strict";var n=a("mXGw"),i=a.n(n),r=a("WLOD"),o=a("mfKp"),s=a.n(o),u=i.a.createElement;t.a=function(e){var t=e.title,a=e.detailedTitle,i=e.message,o=e.image,c=e.children,l=e.metaImage,f=e.favicoff,d=e.requiredFeatures,h=Object(n.useState)("translucent"),m=h[0],g=h[1];return Object(n.useEffect)((function(){var e=document.querySelector("header h2"),t=document.querySelector("footer img"),a=function(){e.offsetTop>t.offsetTop&&e.offsetLeft+e.offsetWidth-50>t.offsetLeft?"translucent"!==m&&g("translucent"):"opaque"!==m&&g("opaque")};window.addEventListener("resize",a),a()}),[m]),u(r.a,{title:t,description:a,image:l,favicoff:f,className:s.a.wrapper,requiredFeatures:d},u("header",{className:s.a.header},u("h1",{dangerouslySetInnerHTML:{__html:t}}),u("h2",{dangerouslySetInnerHTML:{__html:a}}),u("span",{dangerouslySetInnerHTML:{__html:i}})),u("main",{className:s.a.main},c),u("footer",{className:s.a.footer},u("img",{className:s.a.blhx,src:o.path,alt:o.alt,"data-visible":m})))}}},[["2c6D",0,1,2]]]);