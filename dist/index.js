(()=>{var t={307:(t,e,r)=>{t=r.nmd(t);var n="__lodash_hash_undefined__",i=9007199254740991,o="[object Arguments]",u="[object Array]",a="[object Boolean]",c="[object Date]",s="[object Error]",f="[object Function]",l="[object Map]",d="[object Number]",v="[object Object]",_="[object Promise]",h="[object RegExp]",p="[object Set]",b="[object String]",y="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",O=/^\[object .+?Constructor\]$/,m=/^(?:0|[1-9]\d*)$/,w={};w["[object Float32Array]"]=w["[object Float64Array]"]=w["[object Int8Array]"]=w["[object Int16Array]"]=w["[object Int32Array]"]=w["[object Uint8Array]"]=w["[object Uint8ClampedArray]"]=w["[object Uint16Array]"]=w["[object Uint32Array]"]=!0,w[o]=w[u]=w[g]=w[a]=w[j]=w[c]=w[s]=w[f]=w[l]=w[d]=w[v]=w[h]=w[p]=w[b]=w[y]=!1;var P="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,F="object"==typeof self&&self&&self.Object===Object&&self,x=P||F||Function("return this")(),S=e&&!e.nodeType&&e,M=S&&t&&!t.nodeType&&t,z=M&&M.exports===S,A=z&&P.process,C=function(){try{return A&&A.binding&&A.binding("util")}catch(t){}}(),k=C&&C.isTypedArray;function E(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function B(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function D(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var U,I,T,$=Array.prototype,V=Function.prototype,L=Object.prototype,R=x["__core-js_shared__"],q=V.toString,N=L.hasOwnProperty,W=(U=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",G=L.toString,H=RegExp("^"+q.call(N).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=z?x.Buffer:void 0,K=x.Symbol,Q=x.Uint8Array,X=L.propertyIsEnumerable,Y=$.splice,Z=K?K.toStringTag:void 0,tt=Object.getOwnPropertySymbols,et=J?J.isBuffer:void 0,rt=(I=Object.keys,T=Object,function(t){return I(T(t))}),nt=Mt(x,"DataView"),it=Mt(x,"Map"),ot=Mt(x,"Promise"),ut=Mt(x,"Set"),at=Mt(x,"WeakMap"),ct=Mt(Object,"create"),st=kt(nt),ft=kt(it),lt=kt(ot),dt=kt(ut),vt=kt(at),_t=K?K.prototype:void 0,ht=_t?_t.valueOf:void 0;function pt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function bt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function yt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function gt(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new yt;++e<r;)this.add(t[e])}function jt(t){var e=this.__data__=new bt(t);this.size=e.size}function Ot(t,e){for(var r=t.length;r--;)if(Et(t[r][0],e))return r;return-1}function mt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Z&&Z in Object(t)?function(t){var e=N.call(t,Z),r=t[Z];try{t[Z]=void 0;var n=!0}catch(t){}var i=G.call(t);return n&&(e?t[Z]=r:delete t[Z]),i}(t):function(t){return G.call(t)}(t)}function wt(t){return Vt(t)&&mt(t)==o}function Pt(t,e,r,n,i){return t===e||(null==t||null==e||!Vt(t)&&!Vt(e)?t!=t&&e!=e:function(t,e,r,n,i,f){var _=Dt(t),y=Dt(e),O=_?u:At(t),m=y?u:At(e),w=(O=O==o?v:O)==v,P=(m=m==o?v:m)==v,F=O==m;if(F&&Ut(t)){if(!Ut(e))return!1;_=!0,w=!1}if(F&&!w)return f||(f=new jt),_||Lt(t)?Ft(t,e,r,n,i,f):function(t,e,r,n,i,o,u){switch(r){case j:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case g:return!(t.byteLength!=e.byteLength||!o(new Q(t),new Q(e)));case a:case c:case d:return Et(+t,+e);case s:return t.name==e.name&&t.message==e.message;case h:case b:return t==e+"";case l:var f=B;case p:var v=1&n;if(f||(f=D),t.size!=e.size&&!v)return!1;var _=u.get(t);if(_)return _==e;n|=2,u.set(t,e);var y=Ft(f(t),f(e),n,i,o,u);return u.delete(t),y;case"[object Symbol]":if(ht)return ht.call(t)==ht.call(e)}return!1}(t,e,O,r,n,i,f);if(!(1&r)){var x=w&&N.call(t,"__wrapped__"),S=P&&N.call(e,"__wrapped__");if(x||S){var M=x?t.value():t,z=S?e.value():e;return f||(f=new jt),i(M,z,r,n,f)}}return!!F&&(f||(f=new jt),function(t,e,r,n,i,o){var u=1&r,a=xt(t),c=a.length;if(c!=xt(e).length&&!u)return!1;for(var s=c;s--;){var f=a[s];if(!(u?f in e:N.call(e,f)))return!1}var l=o.get(t);if(l&&o.get(e))return l==e;var d=!0;o.set(t,e),o.set(e,t);for(var v=u;++s<c;){var _=t[f=a[s]],h=e[f];if(n)var p=u?n(h,_,f,e,t,o):n(_,h,f,t,e,o);if(!(void 0===p?_===h||i(_,h,r,n,o):p)){d=!1;break}v||(v="constructor"==f)}if(d&&!v){var b=t.constructor,y=e.constructor;b==y||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof y&&y instanceof y||(d=!1)}return o.delete(t),o.delete(e),d}(t,e,r,n,i,f))}(t,e,r,n,Pt,i))}function Ft(t,e,r,n,i,o){var u=1&r,a=t.length,c=e.length;if(a!=c&&!(u&&c>a))return!1;var s=o.get(t);if(s&&o.get(e))return s==e;var f=-1,l=!0,d=2&r?new gt:void 0;for(o.set(t,e),o.set(e,t);++f<a;){var v=t[f],_=e[f];if(n)var h=u?n(_,v,f,e,t,o):n(v,_,f,t,e,o);if(void 0!==h){if(h)continue;l=!1;break}if(d){if(!E(e,(function(t,e){if(u=e,!d.has(u)&&(v===t||i(v,t,r,n,o)))return d.push(e);var u}))){l=!1;break}}else if(v!==_&&!i(v,_,r,n,o)){l=!1;break}}return o.delete(t),o.delete(e),l}function xt(t){return function(t,e,r){var n=e(t);return Dt(t)?n:function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}(n,r(t))}(t,Rt,zt)}function St(t,e){var r,n,i=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function Mt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!$t(t)||function(t){return!!W&&W in t}(t))&&(It(t)?H:O).test(kt(t))}(r)?r:void 0}pt.prototype.clear=function(){this.__data__=ct?ct(null):{},this.size=0},pt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},pt.prototype.get=function(t){var e=this.__data__;if(ct){var r=e[t];return r===n?void 0:r}return N.call(e,t)?e[t]:void 0},pt.prototype.has=function(t){var e=this.__data__;return ct?void 0!==e[t]:N.call(e,t)},pt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=ct&&void 0===e?n:e,this},bt.prototype.clear=function(){this.__data__=[],this.size=0},bt.prototype.delete=function(t){var e=this.__data__,r=Ot(e,t);return!(r<0||(r==e.length-1?e.pop():Y.call(e,r,1),--this.size,0))},bt.prototype.get=function(t){var e=this.__data__,r=Ot(e,t);return r<0?void 0:e[r][1]},bt.prototype.has=function(t){return Ot(this.__data__,t)>-1},bt.prototype.set=function(t,e){var r=this.__data__,n=Ot(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},yt.prototype.clear=function(){this.size=0,this.__data__={hash:new pt,map:new(it||bt),string:new pt}},yt.prototype.delete=function(t){var e=St(this,t).delete(t);return this.size-=e?1:0,e},yt.prototype.get=function(t){return St(this,t).get(t)},yt.prototype.has=function(t){return St(this,t).has(t)},yt.prototype.set=function(t,e){var r=St(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},gt.prototype.add=gt.prototype.push=function(t){return this.__data__.set(t,n),this},gt.prototype.has=function(t){return this.__data__.has(t)},jt.prototype.clear=function(){this.__data__=new bt,this.size=0},jt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},jt.prototype.get=function(t){return this.__data__.get(t)},jt.prototype.has=function(t){return this.__data__.has(t)},jt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof bt){var n=r.__data__;if(!it||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new yt(n)}return r.set(t,e),this.size=r.size,this};var zt=tt?function(t){return null==t?[]:(t=Object(t),function(e,r){for(var n=-1,i=null==e?0:e.length,o=0,u=[];++n<i;){var a=e[n];c=a,X.call(t,c)&&(u[o++]=a)}var c;return u}(tt(t)))}:function(){return[]},At=mt;function Ct(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||m.test(t))&&t>-1&&t%1==0&&t<e}function kt(t){if(null!=t){try{return q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Et(t,e){return t===e||t!=t&&e!=e}(nt&&At(new nt(new ArrayBuffer(1)))!=j||it&&At(new it)!=l||ot&&At(ot.resolve())!=_||ut&&At(new ut)!=p||at&&At(new at)!=y)&&(At=function(t){var e=mt(t),r=e==v?t.constructor:void 0,n=r?kt(r):"";if(n)switch(n){case st:return j;case ft:return l;case lt:return _;case dt:return p;case vt:return y}return e});var Bt=wt(function(){return arguments}())?wt:function(t){return Vt(t)&&N.call(t,"callee")&&!X.call(t,"callee")},Dt=Array.isArray,Ut=et||function(){return!1};function It(t){if(!$t(t))return!1;var e=mt(t);return e==f||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Tt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}function $t(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Vt(t){return null!=t&&"object"==typeof t}var Lt=k?function(t){return function(e){return t(e)}}(k):function(t){return Vt(t)&&Tt(t.length)&&!!w[mt(t)]};function Rt(t){return null!=(e=t)&&Tt(e.length)&&!It(e)?function(t,e){var r=Dt(t),n=!r&&Bt(t),i=!r&&!n&&Ut(t),o=!r&&!n&&!i&&Lt(t),u=r||n||i||o,a=u?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=a.length;for(var s in t)!e&&!N.call(t,s)||u&&("length"==s||i&&("offset"==s||"parent"==s)||o&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Ct(s,c))||a.push(s);return a}(t):function(t){if(r=(e=t)&&e.constructor,e!==("function"==typeof r&&r.prototype||L))return rt(t);var e,r,n=[];for(var i in Object(t))N.call(t,i)&&"constructor"!=i&&n.push(i);return n}(t);var e}t.exports=function(t,e){return Pt(t,e)}},647:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&i(e,t,r);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.Field=void 0;var a=u(r(297)),c=r(40);e.Field=function(t){var e=t.name,r=t.input,i=t.label,o=t.error,u=t.required,s=t.inputProps,f=t.validator,l=a.useContext(c.FormContext),d=l.value,v=l.errors,_=l.onChange,h=l.UIField,p=l.registeredFields,b=r,y=v||{};if(a.useEffect((function(){return p.current&&(p.current[e]||(p.current[e]={validator:f})),function(){p.current&&delete p.current[e]}}),[e,f]),-1===Object.keys(d).indexOf(String(e)))throw new Error('Field name "'+String(e)+"\" doesn't present in form value object.");if(!b)throw new Error('Cannot instantiate form input component for field "'+String(e)+'"');var g=a.useCallback((function(t,r){var i,o,u=(f?f(t,d):void 0)||r||"",a=n(n({},y),((i={})[e]=u,i));u||delete a[e],_(n(n({},d),((o={})[e]=t,o)),a)}),[f,d,e]);return a.default.createElement(h,{error:o||v[e],required:u,label:i,name:String(e)},a.default.createElement(b,n({},s,{value:d[e],error:y[e],onChange:g})))}},385:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},210:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),i(r(647),e),i(r(385),e)},305:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Form=void 0;var i=n(r(297)),o=r(40);e.Form=function(t){var e=t.config,r=e.value,n=e.errors,u=e.registeredFields,a=e.onChange,c=t.children,s=t.UIField;return i.default.createElement(o.FormContext.Provider,{value:{value:r,errors:n,onChange:a,UIField:s,registeredFields:u}},c)}},632:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),i(r(305),e)},740:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),i(r(632),e),i(r(210),e)},427:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FormContext=void 0;var n=r(297);e.FormContext=n.createContext({value:{},errors:{},UIField:function(){return null},onChange:function(){},registeredFields:n.createRef()})},40:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),i(r(427),e)},554:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),i(r(585),e)},517:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&i(e,t,r);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.useFieldComponent=void 0;var a=u(r(297)),c=r(740);e.useFieldComponent=function(){return{Field:a.useCallback((function(t){return a.default.createElement(c.Field,n({},t))}),[])}}},585:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.useFormData=void 0;var o=r(297),u=i(r(307)),a=r(791),c=r(517);e.useFormData=function(t,e){var r=c.useFieldComponent().Field,i=o.useState(t),s=i[0],f=i[1],l=o.useState(e||Object.keys(s).reduce((function(t,e){var r;return n(n({},s),((r={})[e]=void 0,r))}),s)),d=l[0],v=l[1],_=o.useState(!1),h=_[0],p=_[1],b=o.useRef(Object.keys(s).reduce((function(t,e){var r;return n(n({},s),((r={})[e]={},r))}),s)),y=a.useValidate(b,s,d,v).validate,g=o.useCallback((function(e,r){f(e),v(r),p(!u.default(t,e))}),[f,v,p,t]);return{isDirty:h,isValid:!Object.keys(y()).length,validate:y,Field:r,config:{value:s,errors:d,onChange:g,registeredFields:b}}}},791:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.useValidate=void 0;var i=r(297);e.useValidate=function(t,e,r,o){return{validate:i.useCallback((function(i){var u=Object.keys(e).reduce((function(t,e){var r;return n(n({},t),((r={})[e]="",r))}),e);return t.current&&Object.keys(t.current).forEach((function(n){var i=t.current?t.current[n]:null,o=e[n],a=((null==i?void 0:i.validator)?i.validator(o,e):void 0)||r[n];a?u[n]=a:delete u[n]})),i&&o(n(n({},r),u)),u}),[t,e,o,r])}}},607:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),i(r(740),e),i(r(554),e),i(r(40),e)},297:t=>{"use strict";t.exports=require("react")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var n=r(607),i=exports;for(var o in n)i[o]=n[o];n.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();
//# sourceMappingURL=index.js.map