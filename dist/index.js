(()=>{"use strict";var e={367:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.BriefForm=void 0;var u=i(r(297)),a=r(40);t.BriefForm=u.memo((function(e){var t=e.value,r=e.errors,n=e.children,o=e.onChange,i=e.components,c=e.field,f=e.registeredFields;return u.createElement(a.BriefFormContext.Provider,{value:{value:t,errors:r,onChange:o,components:i,field:c,registeredFields:f}},n)}))},41:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(367),t)},647:function(e,t,r){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Field=void 0;var a=u(r(297)),c=r(40);t.Field=a.memo((function(e){var t=e.name,r=e.type,o=e.component,i=e.debounced,u=e.required,f=e.label,l=e.inputProps,d=e.validator,s=a.useContext(c.BriefFormContext),p=s.value,v=s.errors,_=s.onChange,h=s.components,b=s.field,O=s.registeredFields,j=o||h[r||""],y=v||{};if(a.useEffect((function(){return(null==O?void 0:O.current)&&(O.current[t]||(O.current[t]={name:t,required:u,validator:d})),function(){(null==O?void 0:O.current)&&delete O.current[t]}}),[t,d,u,j]),-1===Object.keys(p).indexOf(t))throw new Error('Field name "'+t+"\" doesn't present in form value object.");if(!r&&!o)throw new Error('Either "type" or "component" props should be passed to render proper form input control.');if(!j)throw new Error('Cannot instantiate form input component for field "'+t+'"');return a.createElement(b,{required:u,error:y[t],label:f},a.createElement(j,n({},l,{value:p[t],error:y[t],onChange:function(e,r){var o,i,a=!u||""!==e&&null!=e?void 0:"Required",c=d?d(e,p):void 0;_(n(n({},p),((o={})[t]=e,o)),n(n({},y),((i={})[t]=a||c||r,i)))},debounced:i,required:u})))}))},210:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(647),t)},740:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(41),t),o(r(210),t)},427:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.BriefFormContext=void 0;var u=i(r(297));t.BriefFormContext=u.createContext({value:{},errors:{},components:{},field:function(){return null},onChange:function(){},registeredFields:u.createRef()})},40:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(427),t)},554:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(585),t)},585:function(e,t,r){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.useFormData=void 0;var a=u(r(297));t.useFormData=function(e,t){var r=a.useState(e),o=r[0],i=r[1],u=a.useState(t||{}),c=u[0],f=u[1],l=a.useState(!1),d=l[0],s=l[1],p=a.useRef({}),v=a.useCallback((function(e,t){i(e),f(t),s(!0)}),[i,f,s,o,c]),_=a.useCallback((function(e){var t={};return p.current&&Object.keys(p.current).forEach((function(e){var r=p.current[e],n=o[e],i=!r.required||""!==n&&null!=n?void 0:"Required",u=(r.validator?r.validator(n,o):void 0)||i;u&&(t[e]=u)})),e&&f(n(n({},c),t)),t}),[p,o,f,c]),h=!Object.keys(_()).length;return{formValue:o,formErrors:c,onChange:v,isDirty:d,isValid:h,registeredFields:p,validate:_}}},607:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(740),t),o(r(554),t)},297:e=>{e.exports=require("react")}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(607),n=exports;for(var o in r)n[o]=r[o];r.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();
//# sourceMappingURL=index.js.map