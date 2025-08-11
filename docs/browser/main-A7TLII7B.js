import{a as te}from"./chunk-VXLL5PJD.js";import{J as qt,Oa as Zt,j,pa as Kt,qa as Qt,ua as Jt,v as mt,w as W,ya as B}from"./chunk-ALOFA76G.js";var Z=class t{title="Academy";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=mt({type:t,selectors:[["app-root"]],standalone:!1,decls:1,vars:0,template:function(n,a){n&1&&qt(0,"router-outlet")},dependencies:[Jt],encapsulation:2})};var ht=[{path:"",loadChildren:()=>import("./chunk-4FOP3DCP.js").then(t=>t.PublicModule)},{path:"admin",loadChildren:()=>import("./chunk-Y5O52EYR.js").then(t=>t.AdminModule)}],ee=class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=j({imports:[B.forRoot(ht),B]})};function dn(t,e,n){return(e=pn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ne(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ne(Object(n),!0).forEach(function(a){dn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function mn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pn(t){var e=mn(t,"string");return typeof e=="symbol"?e:e+""}var ae=()=>{},Rt={},Oe={},Ne=null,Me={mark:ae,measure:ae};try{typeof window<"u"&&(Rt=window),typeof document<"u"&&(Oe=document),typeof MutationObserver<"u"&&(Ne=MutationObserver),typeof performance<"u"&&(Me=performance)}catch{}var{userAgent:ie=""}=Rt.navigator||{},N=Rt,h=Oe,re=Ne,tt=Me,Ci=!!N.document,S=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Fe=~ie.indexOf("MSIE")||~ie.indexOf("Trident/"),hn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,gn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Te={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},yn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},De=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],g="classic",ot="duotone",bn="sharp",vn="sharp-duotone",ze=[g,ot,bn,vn],xn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},An={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},kn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),wn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Cn=["fak","fa-kit","fakd","fa-kit-duotone"],oe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},In=["kit"],Pn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Sn=["fak","fakd"],En={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},se={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},On=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Nn=["fak","fa-kit","fakd","fa-kit-duotone"],Mn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Fn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Tn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},At={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Dn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],kt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...On,...Dn],zn=["solid","regular","light","thin","duotone","brands"],_e=[1,2,3,4,5,6,7,8,9,10],_n=_e.concat([11,12,13,14,15,16,17,18,19,20]),Ln=[...Object.keys(Tn),...zn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY].concat(_e.map(t=>"".concat(t,"x"))).concat(_n.map(t=>"w-".concat(t))),Rn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},I="___FONT_AWESOME___",wt=16,Le="fa",Re="svg-inline--fa",z="data-fa-i2svg",Ct="data-fa-pseudo-element",jn="data-fa-pseudo-element-pending",jt="data-prefix",Wt="data-icon",le="fontawesome-i2svg",Wn="async",Hn=["HTML","HEAD","STYLE","SCRIPT"],je=(()=>{try{return!0}catch{return!1}})();function Q(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[g]}})}var We=s({},Te);We[g]=s(s(s(s({},{"fa-duotone":"duotone"}),Te[g]),oe.kit),oe["kit-duotone"]);var Yn=Q(We),It=s({},wn);It[g]=s(s(s(s({},{duotone:"fad"}),It[g]),se.kit),se["kit-duotone"]);var ce=Q(It),Pt=s({},At);Pt[g]=s(s({},Pt[g]),En.kit);var Ht=Q(Pt),St=s({},Fn);St[g]=s(s({},St[g]),Pn.kit);var Ii=Q(St),Un=hn,He="fa-layers-text",$n=gn,Bn=s({},xn),Pi=Q(Bn),Vn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt=yn,Gn=[...In,...Ln],G=N.FontAwesomeConfig||{};function Xn(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function qn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e,i=qn(Xn(n));i!=null&&(G[a]=i)});var Ye={styleDefault:"solid",familyDefault:g,cssPrefix:Le,replacementClass:Re,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};G.familyPrefix&&(G.cssPrefix=G.familyPrefix);var U=s(s({},Ye),G);U.autoReplaceSvg||(U.observeMutations=!1);var c={};Object.keys(Ye).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){U[t]=e,X.forEach(n=>n(c))},get:function(){return U[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){U.cssPrefix=t,X.forEach(e=>e(c))},get:function(){return U.cssPrefix}});N.FontAwesomeConfig=c;var X=[];function Kn(t){return X.push(t),()=>{X.splice(X.indexOf(t),1)}}var O=wt,k={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qn(t){if(!t||!S)return;let e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;let n=h.head.childNodes,a=null;for(let i=n.length-1;i>-1;i--){let r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=r)}return h.head.insertBefore(e,a),t}var Jn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q(){let t=12,e="";for(;t-- >0;)e+=Jn[Math.random()*62|0];return e}function $(t){let e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Yt(t){return t.classList?$(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ue(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ue(t[n]),'" '),"").trim()}function st(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ut(t){return t.size!==k.size||t.x!==k.x||t.y!==k.y||t.rotate!==k.rotate||t.flipX||t.flipY}function ta(t){let{transform:e,containerWidth:n,iconWidth:a}=t,i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(r," ").concat(o," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:u,path:f}}function ea(t){let{transform:e,width:n=wt,height:a=wt,startCentered:i=!1}=t,r="";return i&&Fe?r+="translate(".concat(e.x/O-n/2,"em, ").concat(e.y/O-a/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/O,"em), calc(-50% + ").concat(e.y/O,"em)) "):r+="translate(".concat(e.x/O,"em, ").concat(e.y/O,"em) "),r+="scale(".concat(e.size/O*(e.flipX?-1:1),", ").concat(e.size/O*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var na=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function $e(){let t=Le,e=Re,n=c.cssPrefix,a=c.replacementClass,i=na;if(n!==t||a!==e){let r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return i}var fe=!1;function yt(){c.autoAddCss&&!fe&&(Qn($e()),fe=!0)}var aa={mixout(){return{dom:{css:$e,insertCss:yt}}},hooks(){return{beforeDOMElementCreation(){yt()},beforeI2svg(){yt()}}}},P=N||{};P[I]||(P[I]={});P[I].styles||(P[I].styles={});P[I].hooks||(P[I].hooks={});P[I].shims||(P[I].shims=[]);var w=P[I],Be=[],Ve=function(){h.removeEventListener("DOMContentLoaded",Ve),it=1,Be.map(t=>t())},it=!1;S&&(it=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),it||h.addEventListener("DOMContentLoaded",Ve));function ia(t){S&&(it?setTimeout(t,0):Be.push(t))}function J(t){let{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ue(t):"<".concat(e," ").concat(Zn(n),">").concat(a.map(J).join(""),"</").concat(e,">")}function ue(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ra=function(e,n){return function(a,i,r,o){return e.call(n,a,i,r,o)}},bt=function(e,n,a,i){var r=Object.keys(e),o=r.length,l=i!==void 0?ra(n,i):n,u,f,d;for(a===void 0?(u=1,d=e[r[0]]):(u=0,d=a);u<o;u++)f=r[u],d=l(d,e[f],f,e);return d};function oa(t){let e=[],n=0,a=t.length;for(;n<a;){let i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<a){let r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Et(t){let e=oa(t);return e.length===1?e[0].toString(16):null}function sa(t,e){let n=t.length,a=t.charCodeAt(e),i;return a>=55296&&a<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function de(t){return Object.keys(t).reduce((e,n)=>{let a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ot(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=n,i=de(e);typeof w.hooks.addPack=="function"&&!a?w.hooks.addPack(t,de(e)):w.styles[t]=s(s({},w.styles[t]||{}),i),t==="fas"&&Ot("fa",e)}var{styles:K,shims:la}=w,Ge=Object.keys(Ht),ca=Ge.reduce((t,e)=>(t[e]=Object.keys(Ht[e]),t),{}),$t=null,Xe={},qe={},Ke={},Qe={},Je={};function fa(t){return~Gn.indexOf(t)}function ua(t,e){let n=e.split("-"),a=n[0],i=n.slice(1).join("-");return a===t&&i!==""&&!fa(i)?i:null}var Ze=()=>{let t=a=>bt(K,(i,r,o)=>(i[o]=bt(r,a,{}),i),{});Xe=t((a,i,r)=>(i[3]&&(a[i[3]]=r),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=r}),a)),qe=t((a,i,r)=>(a[r]=r,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=r}),a)),Je=t((a,i,r)=>{let o=i[2];return a[r]=r,o.forEach(l=>{a[l]=r}),a});let e="far"in K||c.autoFetchSvg,n=bt(la,(a,i)=>{let r=i[0],o=i[1],l=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(a.names[r]={prefix:o,iconName:l}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Ke=n.names,Qe=n.unicodes,$t=lt(c.styleDefault,{family:c.familyDefault})};Kn(t=>{$t=lt(t.styleDefault,{family:c.familyDefault})});Ze();function Bt(t,e){return(Xe[t]||{})[e]}function da(t,e){return(qe[t]||{})[e]}function D(t,e){return(Je[t]||{})[e]}function tn(t){return Ke[t]||{prefix:null,iconName:null}}function ma(t){let e=Qe[t],n=Bt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function M(){return $t}var en=()=>({prefix:null,iconName:null,rest:[]});function pa(t){let e=g,n=Ge.reduce((a,i)=>(a[i]="".concat(c.cssPrefix,"-").concat(i),a),{});return ze.forEach(a=>{(t.includes(n[a])||t.some(i=>ca[a].includes(i)))&&(e=a)}),e}function lt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=g}=e,a=Yn[n][t];if(n===ot&&!t)return"fad";let i=ce[n][t]||ce[n][a],r=t in w.styles?t:null;return i||r||null}function ha(t){let e=[],n=null;return t.forEach(a=>{let i=ua(c.cssPrefix,a);i?n=i:a&&e.push(a)}),{iconName:n,rest:e}}function me(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ct(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,a=null,i=kt.concat(Nn),r=me(t.filter(p=>i.includes(p))),o=me(t.filter(p=>!kt.includes(p))),l=r.filter(p=>(a=p,!De.includes(p))),[u=null]=l,f=pa(r),d=s(s({},ha(o)),{},{prefix:lt(u,{family:f})});return s(s(s({},d),va({values:t,family:f,styles:K,config:c,canonical:d,givenPrefix:a})),ga(n,a,d))}function ga(t,e,n){let{prefix:a,iconName:i}=n;if(t||!a||!i)return{prefix:a,iconName:i};let r=e==="fa"?tn(i):{},o=D(a,i);return i=r.iconName||o||i,a=r.prefix||a,a==="far"&&!K.far&&K.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}var ya=ze.filter(t=>t!==g||t!==ot),ba=Object.keys(At).filter(t=>t!==g).map(t=>Object.keys(At[t])).flat();function va(t){let{values:e,family:n,canonical:a,givenPrefix:i="",styles:r={},config:o={}}=t,l=n===ot,u=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ya.includes(n)&&(Object.keys(r).find(m=>ba.includes(m))||o.autoFetchSvg)){let m=kn.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=D(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||i==="fa")&&(a.prefix=M()||"fas"),a}var Nt=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];let i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=s(s({},this.definitions[r]||{}),i[r]),Ot(r,i[r]);let o=Ht[g][r];o&&Ot(o,i[r]),Ze()})}reset(){this.definitions={}}_pullDefinitions(e,n){let a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(i=>{let{prefix:r,iconName:o,icon:l}=a[i],u=l[2];e[r]||(e[r]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[r][f]=l)}),e[r][o]=l}),e}},pe=[],H={},Y={},xa=Object.keys(Y);function Aa(t,e){let{mixoutsTo:n}=e;return pe=t,H={},Object.keys(Y).forEach(a=>{xa.indexOf(a)===-1&&delete Y[a]}),pe.forEach(a=>{let i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),a.hooks){let r=a.hooks();Object.keys(r).forEach(o=>{H[o]||(H[o]=[]),H[o].push(r[o])})}a.provides&&a.provides(Y)}),n}function Mt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return(H[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function _(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(H[t]||[]).forEach(r=>{r.apply(null,n)})}function F(){let t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Y[t]?Y[t].apply(null,e):void 0}function Ft(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t,n=t.prefix||M();if(e)return e=D(n,e)||e,ue(nn.definitions,n,e)||ue(w.styles,n,e)}var nn=new Nt,ka=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,_("noAuto")},wa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return S?(_("beforeI2svg",t),F("pseudoElements2svg",t),F("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,ia(()=>{Ia({autoReplaceSvgRoot:e}),_("watch",t)})}},Ca={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:D(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=lt(t[0]);return{prefix:n,iconName:D(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(Un))){let e=ct(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||M(),iconName:D(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){let e=M();return{prefix:e,iconName:D(e,t)||t}}}},v={noAuto:ka,config:c,dom:wa,parse:Ca,library:nn,findIconDefinition:Ft,toHtml:J},Ia=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=h}=t;(Object.keys(w.styles).length>0||c.autoFetchSvg)&&S&&c.autoReplaceSvg&&v.dom.i2svg({node:e})};function ft(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>J(n))}}),Object.defineProperty(t,"node",{get:function(){if(!S)return;let n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Pa(t){let{children:e,main:n,mask:a,attributes:i,styles:r,transform:o}=t;if(Ut(o)&&n.found&&!a.found){let{width:l,height:u}=n,f={x:l/u/2,y:.5};i.style=st(s(s({},r),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Sa(t){let{prefix:e,iconName:n,children:a,attributes:i,symbol:r}=t,o=r===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},i),{},{id:o}),children:a}]}]}function Vt(t){let{icons:{main:e,mask:n},prefix:a,iconName:i,transform:r,symbol:o,title:l,maskId:u,titleId:f,extra:d,watchable:p=!1}=t,{width:m,height:y}=n.found?n:e,E=Sn.includes(a),T=[c.replacementClass,i?"".concat(c.cssPrefix,"-").concat(i):""].filter(R=>d.classes.indexOf(R)===-1).filter(R=>R!==""||!!R).concat(d.classes).join(" "),x={children:[],attributes:s(s({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:T,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})},C=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};p&&(x.attributes[z]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||q())},children:[l]}),delete x.attributes.title);let b=s(s({},x),{},{prefix:a,iconName:i,main:e,mask:n,maskId:u,transform:r,symbol:o,styles:s(s({},C),d.styles)}),{children:A,attributes:L}=n.found&&e.found?F("generateAbstractMask",b)||{children:[],attributes:{}}:F("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=A,b.attributes=L,o?Sa(b):Pa(b)}function he(t){let{content:e,width:n,height:a,transform:i,title:r,extra:o,watchable:l=!1}=t,u=s(s(s({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(u[z]="");let f=s({},o.styles);Ut(i)&&(f.transform=ea({transform:i,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);let d=st(f);d.length>0&&(u.style=d);let p=[];return p.push({tag:"span",attributes:u,children:[e]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function Ea(t){let{content:e,title:n,extra:a}=t,i=s(s(s({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),r=st(a.styles);r.length>0&&(i.style=r);let o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:vt}=w;function Tt(t){let e=t[0],n=t[1],[a]=t.slice(4),i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:i}}var Oa={found:!1,width:512,height:512};function Na(t,e){!je&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Dt(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=M()),new Promise((a,i)=>{if(n==="fa"){let r=tn(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&vt[e]&&vt[e][t]){let r=vt[e][t];return a(Tt(r))}Na(t,e),a(s(s({},Oa),{},{icon:c.showMissingIcons&&t?F("missingIconAbstract")||{}:{}}))})}var ge=()=>{},zt=c.measurePerformance&&tt&&tt.mark&&tt.measure?tt:{mark:ge,measure:ge},V='FA "6.7.2"',Ma=t=>(zt.mark("".concat(V," ").concat(t," begins")),()=>an(t)),an=t=>{zt.mark("".concat(V," ").concat(t," ends")),zt.measure("".concat(V," ").concat(t),"".concat(V," ").concat(t," begins"),"".concat(V," ").concat(t," ends"))},Gt={begin:Ma,end:an},nt=()=>{};function ye(t){return typeof(t.getAttribute?t.getAttribute(z):null)=="string"}function Fa(t){let e=t.getAttribute?t.getAttribute(jt):null,n=t.getAttribute?t.getAttribute(Wt):null;return e&&n}function Ta(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function Da(){return c.autoReplaceSvg===!0?at.replace:at[c.autoReplaceSvg]||at.replace}function za(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function _a(t){return h.createElement(t)}function rn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=t.tag==="svg"?za:_a}=e;if(typeof t=="string")return h.createTextNode(t);let a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){a.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){a.appendChild(rn(r,{ceFn:n}))}),a}function La(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var at={replace:function(t){let e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(rn(n),e)}),e.getAttribute(z)===null&&c.keepOriginalSource){let n=h.createComment(La(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){let e=t[0],n=t[1];if(~Yt(e).indexOf(c.replacementClass))return at.replace(t);let a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let r=n[0].attributes.class.split(" ").reduce((o,l)=>(l===c.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}let i=n.map(r=>J(r)).join(`
`);e.setAttribute(z,""),e.innerHTML=i}};function be(t){t()}function on(t,e){let n=typeof e=="function"?e:nt;if(t.length===0)n();else{let a=be;c.mutateApproach===Wn&&(a=N.requestAnimationFrame||be),a(()=>{let i=Da(),r=Gt.begin("mutate");t.map(i),r(),n()})}}var Xt=!1;function sn(){Xt=!0}function _t(){Xt=!1}var rt=null;function ve(t){if(!re||!c.observeMutations)return;let{treeCallback:e=nt,nodeCallback:n=nt,pseudoElementsCallback:a=nt,observeMutationsRoot:i=h}=t;rt=new re(r=>{if(Xt)return;let o=M();$(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!ye(l.addedNodes[0])&&(c.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&c.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&ye(l.target)&&~Vn.indexOf(l.attributeName))if(l.attributeName==="class"&&Fa(l.target)){let{prefix:u,iconName:f}=ct(Yt(l.target));l.target.setAttribute(jt,u||o),f&&l.target.setAttribute(Wt,f)}else Ta(l.target)&&n(l.target)})}),S&&rt.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ra(){rt&&rt.disconnect()}function ja(t){let e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((a,i)=>{let r=i.split(":"),o=r[0],l=r.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function Wa(t){let e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",i=ct(Yt(t));return i.prefix||(i.prefix=M()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=da(i.prefix,t.innerText)||Bt(i.prefix,Et(t.innerText))),!i.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ha(t){let e=$(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||q()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ya(){return{iconName:null,title:null,titleId:null,prefix:null,transform:k,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:a,rest:i}=Wa(t),r=Ha(t),o=Mt("parseNodeAttributes",{},t),l=e.styleParser?ja(t):[];return s({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:k,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:r}},o)}var{styles:Ua}=w;function ln(t){let e=c.autoReplaceSvg==="nest"?xe(t,{styleParser:!1}):xe(t);return~e.extra.classes.indexOf(He)?F("generateLayersText",t,e):F("generateSvgReplacementMutation",t,e)}function $a(){return[...Cn,...kt]}function Ae(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!S)return Promise.resolve();let n=h.documentElement.classList,a=d=>n.add("".concat(le,"-").concat(d)),i=d=>n.remove("".concat(le,"-").concat(d)),r=c.autoFetchSvg?$a():De.concat(Object.keys(Ua));r.includes("fa")||r.push("fa");let o=[".".concat(He,":not([").concat(z,"])")].concat(r.map(d=>".".concat(d,":not([").concat(z,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=$(t.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),i("complete");else return Promise.resolve();let u=Gt.begin("onTree"),f=l.reduce((d,p)=>{try{let m=ln(p);m&&d.push(m)}catch(m){je||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(f).then(m=>{on(m,()=>{a("active"),a("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),p(m)})})}function Ba(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ln(t).then(n=>{n&&on([n],e)})}function Va(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Ft(e||{}),{mask:i}=n;return i&&(i=(i||{}).icon?i:Ft(i||{})),t(a,s(s({},n),{},{mask:i}))}}var Ga=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=k,symbol:a=!1,mask:i=null,maskId:r=null,title:o=null,titleId:l=null,classes:u=[],attributes:f={},styles:d={}}=e;if(!t)return;let{prefix:p,iconName:m,icon:y}=t;return ft(s({type:"icon"},t),()=>(_("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(o?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(l||q()):(f["aria-hidden"]="true",f.focusable="false")),Vt({icons:{main:Tt(y),mask:i?Tt(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:s(s({},k),n),symbol:a,title:o,maskId:r,titleId:l,extra:{attributes:f,styles:d,classes:u}})))},Xa={mixout(){return{icon:Va(Ga)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ae,t.nodeCallback=Ba,t}}},provides(t){t.i2svg=function(e){let{node:n=h,callback:a=()=>{}}=e;return Ae(n,a)},t.generateSvgReplacementMutation=function(e,n){let{iconName:a,title:i,titleId:r,prefix:o,transform:l,symbol:u,mask:f,maskId:d,extra:p}=n;return new Promise((m,y)=>{Promise.all([Dt(a,o),f.iconName?Dt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[T,x]=E;m([e,Vt({icons:{main:T,mask:x},prefix:o,iconName:a,transform:l,symbol:u,maskId:d,title:i,titleId:r,extra:p,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:i,transform:r,styles:o}=e,l=st(o);l.length>0&&(a.style=l);let u;return Ut(r)&&(u=F("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:a}}}},qa={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return ft({type:"layer"},()=>{_("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(i=>{Array.isArray(i)?i.map(r=>{a=a.concat(r.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ka={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:a=[],attributes:i={},styles:r={}}=e;return ft({type:"counter",content:t},()=>(_("beforeDOMElementCreation",{content:t,params:e}),Ea({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},Qa={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=k,title:a=null,classes:i=[],attributes:r={},styles:o={}}=e;return ft({type:"text",content:t},()=>(_("beforeDOMElementCreation",{content:t,params:e}),he({content:t,transform:s(s({},k),n),title:a,extra:{attributes:r,styles:o,classes:["".concat(c.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){let{title:a,transform:i,extra:r}=n,o=null,l=null;if(Fe){let u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/u,l=f.height/u}return c.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,he({content:e.innerHTML,width:o,height:l,transform:i,title:a,extra:r,watchable:!0})])}}},Ja=new RegExp('"',"ug"),ke=[1105920,1112319],we=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),An),Rn),Mn),Lt=Object.keys(we).reduce((t,e)=>(t[e.toLowerCase()]=we[e],t),{}),Za=Object.keys(Lt).reduce((t,e)=>{let n=Lt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ti(t){let e=t.replace(Ja,""),n=sa(e,0),a=n>=ke[0]&&n<=ke[1],i=e.length===2?e[0]===e[1]:!1;return{value:Et(i?e[0]:e),isSecondary:a||i}}function ei(t,e){let n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),i=isNaN(a)?"normal":a;return(Lt[n]||{})[i]||Za[n]}function Ce(t,e){let n="".concat(jn).concat(e.replace(":","-"));return new Promise((a,i)=>{if(t.getAttribute(n)!==null)return a();let o=$(t.children).filter(m=>m.getAttribute(Ct)===e)[0],l=N.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),f=u.match($n),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&p!=="none"&&p!==""){let m=l.getPropertyValue("content"),y=ei(u,d),{value:E,isSecondary:T}=ti(m),x=f[0].startsWith("FontAwesome"),C=Bt(y,E),b=C;if(x){let A=ma(E);A.iconName&&A.prefix&&(C=A.iconName,y=A.prefix)}if(C&&!T&&(!o||o.getAttribute(jt)!==y||o.getAttribute(Wt)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);let A=Ya(),{extra:L}=A;L.attributes[Ct]=e,Dt(C,y).then(R=>{let fn=Vt(s(s({},A),{},{icons:{main:R,mask:en()},prefix:y,iconName:b,extra:L,watchable:!0})),dt=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(dt,t.firstChild):t.appendChild(dt),dt.outerHTML=fn.map(un=>J(un)).join(`
`),t.removeAttribute(n),a()}).catch(i)}else a()}else a()})}function ni(t){return Promise.all([Ce(t,"::before"),Ce(t,"::after")])}function ai(t){return t.parentNode!==document.head&&!~Hn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ct)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ie(t){if(S)return new Promise((e,n)=>{let a=$(t.querySelectorAll("*")).filter(ai).map(ni),i=Gt.begin("searchPseudoElements");sn(),Promise.all(a).then(()=>{i(),_t(),e()}).catch(()=>{i(),_t(),n()})})}var ii={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ie,t}}},provides(t){t.pseudoElements2svg=function(e){let{node:n=h}=e;c.searchPseudoElements&&Ie(n)}}},Pe=!1,ri={mixout(){return{dom:{unwatch(){sn(),Pe=!0}}}},hooks(){return{bootstrap(){ve(Mt("mutationObserverCallbacks",{}))},noAuto(){Ra()},watch(t){let{observeMutationsRoot:e}=t;Pe?_t():ve(Mt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Se=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{let i=a.toLowerCase().split("-"),r=i[0],o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},oi={mixout(){return{parse:{transform:t=>Se(t)}}},hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-transform");return n&&(t.transform=Se(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:i,iconWidth:r}=e,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(r/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:s({},m.outer),children:[{tag:"g",attributes:s({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),m.path)}]}]}}}},xt={x:0,y:0,width:"100%",height:"100%"};function Ee(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function si(t){return t.tag==="g"?t.children:[t]}var li={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-mask"),a=n?ct(n.split(" ").map(i=>i.trim())):en();return a.prefix||(a.prefix=M()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:i,mask:r,maskId:o,transform:l}=e,{width:u,icon:f}=i,{width:d,icon:p}=r,m=ta({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:s(s({},xt),{},{fill:"white"})},E=f.children?{children:f.children.map(Ee)}:{},T={tag:"g",attributes:s({},m.inner),children:[Ee(s({tag:f.tag,attributes:s(s({},f.attributes),m.path)},E))]},x={tag:"g",attributes:s({},m.outer),children:[T]},C="mask-".concat(o||q()),b="clip-".concat(o||q()),A={tag:"mask",attributes:s(s({},xt),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:si(p)},A]};return n.push(L,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(C,")")},xt)}),{children:n,attributes:a}}}},ci={provides(t){let e=!1;N.matchMedia&&(e=N.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=s(s({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:s(s({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:s(s({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:s(s({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:s(s({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:s(s({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},fi={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},ui=[aa,Xa,qa,Ka,Qa,ii,ri,oi,li,ci,fi];Aa(ui,{mixoutsTo:v});var Si=v.noAuto,di=v.config,Ei=v.library,mi=v.dom,pi=v.parse,Oi=v.findIconDefinition,Ni=v.toHtml,hi=v.icon,Mi=v.layer,gi=v.text,yi=v.counter;var cn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=W({type:e}),e.\u0275inj=j({});let t=e;return t})();var ut=class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t,bootstrap:[Z]});static \u0275inj=j({imports:[Qt,B.forRoot(ht),Zt,cn,te]})};Kt().bootstrapModule(ut).catch(t=>console.error(t));
