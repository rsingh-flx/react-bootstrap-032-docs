webpackJsonp([5771335670015],{186:function(e,t){e.exports={layoutContext:{}}},380:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),o=r(u),l=n(503),f=r(l),c=n(186),i=r(c);t.default=function(e){return o.default.createElement(f.default,a({},e,i.default))},e.exports=t.default},46:function(e,t){},26:function(e,t,n){var r=n(75),a=r.Symbol;e.exports=a},59:function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}e.exports=n},60:function(e,t){function n(e,t,n,r){var a=-1,u=null==e?0:e.length;for(r&&u&&(n=e[++a]);++a<u;)n=t(n,e[a],a,e);return n}e.exports=n},61:function(e,t){function n(e){return e.split("")}e.exports=n},62:function(e,t){function n(e){return e.match(r)||[]}var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=n},63:function(e,t,n){function r(e){return null==e?void 0===e?f:l:c&&c in Object(e)?u(e):o(e)}var a=n(26),u=n(72),o=n(74),l="[object Null]",f="[object Undefined]",c=a?a.toStringTag:void 0;e.exports=r},64:function(e,t){function n(e){return function(t){return null==e?void 0:e[t]}}e.exports=n},65:function(e,t){function n(e,t,n){var r=-1,a=e.length;t<0&&(t=-t>a?0:a+t),n=n>a?a:n,n<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var u=Array(a);++r<a;)u[r]=e[r+t];return u}e.exports=n},66:function(e,t,n){function r(e){if("string"==typeof e)return e;if(o(e))return u(e,r)+"";if(l(e))return i?i.call(e):"";var t=e+"";return"0"==t&&1/e==-f?"-0":t}var a=n(26),u=n(59),o=n(80),l=n(82),f=1/0,c=a?a.prototype:void 0,i=c?c.toString:void 0;e.exports=r},67:function(e,t,n){function r(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:a(e,t,n)}var a=n(65);e.exports=r},68:function(e,t,n){function r(e){return function(t){t=l(t);var n=u(t)?o(t):void 0,r=n?n[0]:t.charAt(0),f=n?a(n,1).join(""):t.slice(1);return r[e]()+f}}var a=n(67),u=n(35),o=n(76),l=n(27);e.exports=r},69:function(e,t,n){function r(e){return function(t){return a(o(u(t).replace(f,"")),e,"")}}var a=n(60),u=n(79),o=n(85),l="['’]",f=RegExp(l,"g");e.exports=r},70:function(e,t,n){var r=n(64),a={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},u=r(a);e.exports=u},71:function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},72:function(e,t,n){function r(e){var t=o.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var a=l.call(e);return r&&(t?e[f]=n:delete e[f]),a}var a=n(26),u=Object.prototype,o=u.hasOwnProperty,l=u.toString,f=a?a.toStringTag:void 0;e.exports=r},35:function(e,t){function n(e){return i.test(e)}var r="\\ud800-\\udfff",a="\\u0300-\\u036f",u="\\ufe20-\\ufe2f",o="\\u20d0-\\u20ff",l=a+u+o,f="\\ufe0e\\ufe0f",c="\\u200d",i=RegExp("["+c+r+l+f+"]");e.exports=n},73:function(e,t){function n(e){return r.test(e)}var r=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=n},74:function(e,t){function n(e){return a.call(e)}var r=Object.prototype,a=r.toString;e.exports=n},75:function(e,t,n){var r=n(71),a="object"==typeof self&&self&&self.Object===Object&&self,u=r||a||Function("return this")();e.exports=u},76:function(e,t,n){function r(e){return u(e)?o(e):a(e)}var a=n(61),u=n(35),o=n(77);e.exports=r},77:function(e,t){function n(e){return e.match(_)||[]}var r="\\ud800-\\udfff",a="\\u0300-\\u036f",u="\\ufe20-\\ufe2f",o="\\u20d0-\\u20ff",l=a+u+o,f="\\ufe0e\\ufe0f",c="["+r+"]",i="["+l+"]",s="\\ud83c[\\udffb-\\udfff]",d="(?:"+i+"|"+s+")",p="[^"+r+"]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",h="\\u200d",v=d+"?",x="["+f+"]?",E="(?:"+h+"(?:"+[p,m,b].join("|")+")"+x+v+")*",g=x+v+E,y="(?:"+[p+i+"?",i,m,b,c].join("|")+")",_=RegExp(s+"(?="+s+")|"+y+g,"g");e.exports=n},78:function(e,t){function n(e){return e.match(D)||[]}var r="\\ud800-\\udfff",a="\\u0300-\\u036f",u="\\ufe20-\\ufe2f",o="\\u20d0-\\u20ff",l=a+u+o,f="\\u2700-\\u27bf",c="a-z\\xdf-\\xf6\\xf8-\\xff",i="\\xac\\xb1\\xd7\\xf7",s="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",d="\\u2000-\\u206f",p=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",m="A-Z\\xc0-\\xd6\\xd8-\\xde",b="\\ufe0e\\ufe0f",h=i+s+d+p,v="['’]",x="["+h+"]",E="["+l+"]",g="\\d+",y="["+f+"]",_="["+c+"]",j="[^"+r+h+g+f+c+m+"]",O="\\ud83c[\\udffb-\\udfff]",w="(?:"+E+"|"+O+")",N="[^"+r+"]",A="(?:\\ud83c[\\udde6-\\uddff]){2}",T="[\\ud800-\\udbff][\\udc00-\\udfff]",M="["+m+"]",C="\\u200d",R="(?:"+_+"|"+j+")",S="(?:"+M+"|"+j+")",I="(?:"+v+"(?:d|ll|m|re|s|t|ve))?",U="(?:"+v+"(?:D|LL|M|RE|S|T|VE))?",k=w+"?",L="["+b+"]?",z="(?:"+C+"(?:"+[N,A,T].join("|")+")"+L+k+")*",G="\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",H="\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",P=L+k+z,Z="(?:"+[y,A,T].join("|")+")"+P,D=RegExp([M+"?"+_+"+"+I+"(?="+[x,M,"$"].join("|")+")",S+"+"+U+"(?="+[x,M+R,"$"].join("|")+")",M+"?"+R+"+"+I,M+"+"+U,H,G,g,Z].join("|"),"g");e.exports=n},79:function(e,t,n){function r(e){return e=u(e),e&&e.replace(o,a).replace(d,"")}var a=n(70),u=n(27),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l="\\u0300-\\u036f",f="\\ufe20-\\ufe2f",c="\\u20d0-\\u20ff",i=l+f+c,s="["+i+"]",d=RegExp(s,"g");e.exports=r},80:function(e,t){var n=Array.isArray;e.exports=n},81:function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},82:function(e,t,n){function r(e){return"symbol"==typeof e||u(e)&&a(e)==o}var a=n(63),u=n(81),o="[object Symbol]";e.exports=r},83:function(e,t,n){var r=n(69),a=n(84),u=r(function(e,t,n){return e+(n?" ":"")+a(t)});e.exports=u},27:function(e,t,n){function r(e){return null==e?"":a(e)}var a=n(66);e.exports=r},84:function(e,t,n){var r=n(68),a=r("toUpperCase");e.exports=a},85:function(e,t,n){function r(e,t,n){return e=o(e),t=n?void 0:t,void 0===t?u(e)?l(e):a(e):e.match(t)||[]}var a=n(62),u=n(73),o=n(27),l=n(78);e.exports=r},53:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e){var t=e.children,n=a(e,["children"]);return c.default.createElement(s.default,null,c.default.createElement(p.default,null,c.default.createElement(b.default,{md:3,className:"bs-docs-sidebar-holder"},c.default.createElement(v.default,{location:n.location})),c.default.createElement(b.default,{md:9},t)))}t.__esModule=!0;var o=n(2),l=r(o),f=n(1),c=r(f),i=n(52),s=r(i),d=n(91),p=r(d),m=n(88),b=r(m),h=n(55),v=r(h),x={location:l.default.object.isRequired};u.propTypes=x,t.default=u,e.exports=t.default},40:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.children;return t}function u(e){var t=e.activePage;return c.default.createElement(p.default,{staticTop:!0,componentClass:"header",className:"bs-docs-nav",role:"banner"},c.default.createElement(p.default.Header,null,c.default.createElement(p.default.Brand,null,c.default.createElement(s.default,{to:"/"},"React-Bootstrap")),c.default.createElement(p.default.Toggle,null)),c.default.createElement(p.default.Collapse,{className:"bs-navbar-collapse"},c.default.createElement(b.default,{role:"navigation",id:"top"},Object.values(h).map(function(e){var n=e.link,r=e.title;return c.default.createElement(a,{key:n},c.default.createElement("li",{className:t.startsWith(n)?"active":null},c.default.createElement(s.default,{to:n},r)))}),c.default.createElement(a,null,c.default.createElement("li",null,c.default.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap",target:"_blank",rel:"noopener noreferrer"},"GitHub"))))))}t.__esModule=!0;var o=n(2),l=r(o),f=n(1),c=r(f),i=n(101),s=r(i),d=n(90),p=r(d),m=n(33),b=r(m),h={documentation:{link:"/getting-started/introduction",title:"Documentation"}},v={activePage:l.default.string};u.propTypes=v,t.default=u,e.exports=t.default},41:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),f=r(l),c=n(103),i=r(c),s=i.default.version;/docs/.test(s)&&(s=s.split("-")[0]);var d=function(e){function t(){return a(this,t),u(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return f.default.createElement("footer",{className:"bs-docs-footer",role:"contentinfo"},f.default.createElement("div",{className:"container"},f.default.createElement("div",{className:"bs-docs-social"},f.default.createElement("ul",{className:"bs-docs-social-buttons"},f.default.createElement("li",null,f.default.createElement("iframe",{className:"github-btn",src:"https://ghbtns.com/github-btn.html?user=react-bootstrap&repo=react-bootstrap&type=watch&count=true",width:95,height:20,title:"Star on GitHub"})),f.default.createElement("li",null,f.default.createElement("iframe",{className:"github-btn",src:"https://ghbtns.com/github-btn.html?user=react-bootstrap&repo=react-bootstrap&type=fork&count=true",width:92,height:20,title:"Fork on GitHub"})),f.default.createElement("li",null,f.default.createElement("iframe",{src:"https://platform.twitter.com/widgets/follow_button.html?screen_name=react_bootstrap&show_screen_name=true",width:230,height:20,title:"twitter",allowTransparency:"true",frameBorder:"0",scrolling:"no"})))),f.default.createElement("p",null,"Code licensed under"," ",f.default.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/blob/master/LICENSE",rel:"noopener noreferrer",target:"_blank"},"MIT"),"."),f.default.createElement("ul",{className:"bs-docs-footer-links muted"},f.default.createElement("li",null,"Currently v",s),f.default.createElement("li",null,"·"),f.default.createElement("li",null,f.default.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/"},"GitHub")),f.default.createElement("li",null,"·"),f.default.createElement("li",null,f.default.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/issues?state=open"},"Issues")),f.default.createElement("li",null,"·"),f.default.createElement("li",null,f.default.createElement("a",{href:"https://github.com/react-bootstrap/react-bootstrap/releases"},"Releases")))))},t}(f.default.Component);t.default=d,e.exports=t.default},54:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.title,n=e.subTitle;return o.default.createElement("div",{className:"bs-docs-header",id:"content"},o.default.createElement("div",{className:"container"},o.default.createElement("h1",null,t),o.default.createElement("p",null,n)))}t.__esModule=!0;var u=n(1),o=r(u);t.default=a,e.exports=t.default},55:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.heading,n=e.location,r=e.items,a=e.path,u=n.pathname.startsWith(a);return s.default.createElement("div",{className:(0,l.default)(u&&"bs-sidebar-section-active")},s.default.createElement("div",{className:"bs-sidebar-section-heading"},s.default.createElement("a",{href:a+"/"+r[0]+"/"},t)),u&&s.default.createElement(p.default,{className:"bs-docs-sidenav",activeHref:n.pathname},r.map(function(e){return s.default.createElement(b.default,{key:a+"/"+e+"/",href:a+"/"+e+"/"},(0,c.default)(e.toLowerCase()))})))}function u(e){var t=e.location;return s.default.createElement("div",{className:"bs-docs-sidebar",role:"complementary"},s.default.createElement(a,{heading:"Getting started",path:"/getting-started",location:t,items:h}),s.default.createElement(a,{heading:"Layout",location:t,items:v,path:"/layout"}),s.default.createElement(a,{heading:"Components",location:t,items:x,path:"/components"}),s.default.createElement(a,{heading:"Utilities",location:t,items:E,path:"/utilities"}))}t.__esModule=!0;var o=n(8),l=r(o),f=n(83),c=r(f),i=n(1),s=r(i),d=n(33),p=r(d),m=n(89),b=r(m),h=["introduction","support"],v=["grid","media"],x=["alerts","badge","breadcrumb","buttons","button-group","carousel","dropdowns","forms","glyphicons","images","jumbotron","label","list-group","modal","navs","navbar","overlays","page-header","pagination","panel","popovers","progress","table","tabs","tooltips","well"],E=["custom-styles","transitions","responsive-embed"];t.default=u,e.exports=t.default},45:function(e,t){},47:function(e,t){},503:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e){var t=e.children,n=a(e,["children"]);return c.default.createElement(b.default,n,c.default.createElement(s.default,{title:"Components"}),c.default.createElement(p.default,{location:n.location},t()))}t.__esModule=!0;var o=n(2),l=r(o),f=n(1),c=r(f),i=n(54),s=r(i),d=n(53),p=r(d),m=n(42),b=r(m),h={location:l.default.object.isRequired};u.propTypes=h,t.default=u,e.exports=t.default},42:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.children,n=e.location;return f.default.createElement("div",null,f.default.createElement(i.default,{activePage:n.pathname}),"function"==typeof t?t():t,f.default.createElement(d.default,null))}t.__esModule=!0;var u=n(2),o=r(u),l=n(1),f=r(l);n(46);var c=n(40),i=r(c),s=n(41),d=r(s);n(45),n(47);var p={location:o.default.object.isRequired};a.propTypes=p,t.default=a,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-components-js-ad8952c86a032f43c389.js.map