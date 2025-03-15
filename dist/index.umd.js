(function(ne,pe){typeof exports=="object"&&typeof module<"u"?module.exports=pe(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],pe):(ne=typeof globalThis<"u"?globalThis:ne||self,ne.ModalPlugin=pe(ne.React,ne.ReactDOM))})(this,function(ne,pe){"use strict";function yr(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Te={exports:{}},ye={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We;function br(){if(We)return ye;We=1;var u=ne,D=Symbol.for("react.element"),I=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,j=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function C(l,b,P){var f,E={},k=null,F=null;P!==void 0&&(k=""+P),b.key!==void 0&&(k=""+b.key),b.ref!==void 0&&(F=b.ref);for(f in b)p.call(b,f)&&!c.hasOwnProperty(f)&&(E[f]=b[f]);if(l&&l.defaultProps)for(f in b=l.defaultProps,b)E[f]===void 0&&(E[f]=b[f]);return{$$typeof:D,type:l,key:k,ref:F,props:E,_owner:j.current}}return ye.Fragment=I,ye.jsx=C,ye.jsxs=C,ye}var be={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe;function hr(){return qe||(qe=1,process.env.NODE_ENV!=="production"&&function(){var u=ne,D=Symbol.for("react.element"),I=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),l=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),z=Symbol.iterator,M="@@iterator";function N(e){if(e===null||typeof e!="object")return null;var r=z&&e[z]||e[M];return typeof r=="function"?r:null}var U=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function Y(e){{for(var r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];V("error",e,a)}}function V(e,r,a){{var s=U.ReactDebugCurrentFrame,A=s.getStackAddendum();A!==""&&(r+="%s",a=a.concat([A]));var $=a.map(function(O){return String(O)});$.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,$)}}var q=!1,o=!1,re=!1,he=!1,me=!1,ue;ue=Symbol.for("react.module.reference");function Ee(e){return!!(typeof e=="string"||typeof e=="function"||e===p||e===c||me||e===j||e===P||e===f||he||e===F||q||o||re||typeof e=="object"&&e!==null&&(e.$$typeof===k||e.$$typeof===E||e.$$typeof===C||e.$$typeof===l||e.$$typeof===b||e.$$typeof===ue||e.getModuleId!==void 0))}function se(e,r,a){var s=e.displayName;if(s)return s;var A=r.displayName||r.name||"";return A!==""?a+"("+A+")":a}function fe(e){return e.displayName||"Context"}function H(e){if(e==null)return null;if(typeof e.tag=="number"&&Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case I:return"Portal";case c:return"Profiler";case j:return"StrictMode";case P:return"Suspense";case f:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l:var r=e;return fe(r)+".Consumer";case C:var a=e;return fe(a._context)+".Provider";case b:return se(e,e.render,"ForwardRef");case E:var s=e.displayName||null;return s!==null?s:H(e.type)||"Memo";case k:{var A=e,$=A._payload,O=A._init;try{return H(O($))}catch{return null}}}return null}var K=Object.assign,te=0,X,ee,ae,ce,t,i,m;function h(){}h.__reactDisabledLog=!0;function d(){{if(te===0){X=console.log,ee=console.info,ae=console.warn,ce=console.error,t=console.group,i=console.groupCollapsed,m=console.groupEnd;var e={configurable:!0,enumerable:!0,value:h,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}te++}}function _(){{if(te--,te===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:K({},e,{value:X}),info:K({},e,{value:ee}),warn:K({},e,{value:ae}),error:K({},e,{value:ce}),group:K({},e,{value:t}),groupCollapsed:K({},e,{value:i}),groupEnd:K({},e,{value:m})})}te<0&&Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var v=U.ReactCurrentDispatcher,y;function g(e,r,a){{if(y===void 0)try{throw Error()}catch(A){var s=A.stack.trim().match(/\n( *(at )?)/);y=s&&s[1]||""}return`
`+y+e}}var S=!1,T;{var B=typeof WeakMap=="function"?WeakMap:Map;T=new B}function n(e,r){if(!e||S)return"";{var a=T.get(e);if(a!==void 0)return a}var s;S=!0;var A=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var $;$=v.current,v.current=null,d();try{if(r){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(G){s=G}Reflect.construct(e,[],O)}else{try{O.call()}catch(G){s=G}e.call(O.prototype)}}else{try{throw Error()}catch(G){s=G}e()}}catch(G){if(G&&s&&typeof G.stack=="string"){for(var R=G.stack.split(`
`),J=s.stack.split(`
`),W=R.length-1,L=J.length-1;W>=1&&L>=0&&R[W]!==J[L];)L--;for(;W>=1&&L>=0;W--,L--)if(R[W]!==J[L]){if(W!==1||L!==1)do if(W--,L--,L<0||R[W]!==J[L]){var Q=`
`+R[W].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),typeof e=="function"&&T.set(e,Q),Q}while(W>=1&&L>=0);break}}}finally{S=!1,v.current=$,_(),Error.prepareStackTrace=A}var ve=e?e.displayName||e.name:"",ie=ve?g(ve):"";return typeof e=="function"&&T.set(e,ie),ie}function Z(e,r,a){return n(e,!1)}function le(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function oe(e,r,a){if(e==null)return"";if(typeof e=="function")return n(e,le(e));if(typeof e=="string")return g(e);switch(e){case P:return g("Suspense");case f:return g("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case b:return Z(e.render);case E:return oe(e.type,r,a);case k:{var s=e,A=s._payload,$=s._init;try{return oe($(A),r,a)}catch{}}}return""}var ge=Object.prototype.hasOwnProperty,rr={},tr=U.ReactDebugCurrentFrame;function Oe(e){if(e){var r=e._owner,a=oe(e.type,e._source,r?r.type:null);tr.setExtraStackFrame(a)}else tr.setExtraStackFrame(null)}function Cr(e,r,a,s,A){{var $=Function.call.bind(ge);for(var O in e)if($(e,O)){var R=void 0;try{if(typeof e[O]!="function"){var J=Error((s||"React class")+": "+a+" type `"+O+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[O]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw J.name="Invariant Violation",J}R=e[O](r,O,s,a,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(W){R=W}R&&!(R instanceof Error)&&(Oe(A),Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",a,O,typeof R),Oe(null)),R instanceof Error&&!(R.message in rr)&&(rr[R.message]=!0,Oe(A),Y("Failed %s type: %s",a,R.message),Oe(null))}}}var wr=Array.isArray;function $e(e){return wr(e)}function xr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,a=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return a}}function jr(e){try{return nr(e),!1}catch{return!0}}function nr(e){return""+e}function ar(e){if(jr(e))return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",xr(e)),nr(e)}var or=U.ReactCurrentOwner,Ar={key:!0,ref:!0,__self:!0,__source:!0},ir,ur;function Ir(e){if(ge.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function kr(e){if(ge.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function $r(e,r){typeof e.ref=="string"&&or.current}function Dr(e,r){{var a=function(){ir||(ir=!0,Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};a.isReactWarning=!0,Object.defineProperty(e,"key",{get:a,configurable:!0})}}function Mr(e,r){{var a=function(){ur||(ur=!0,Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};a.isReactWarning=!0,Object.defineProperty(e,"ref",{get:a,configurable:!0})}}var Fr=function(e,r,a,s,A,$,O){var R={$$typeof:D,type:e,key:r,ref:a,props:O,_owner:$};return R._store={},Object.defineProperty(R._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(R,"_self",{configurable:!1,enumerable:!1,writable:!1,value:s}),Object.defineProperty(R,"_source",{configurable:!1,enumerable:!1,writable:!1,value:A}),Object.freeze&&(Object.freeze(R.props),Object.freeze(R)),R};function Yr(e,r,a,s,A){{var $,O={},R=null,J=null;a!==void 0&&(ar(a),R=""+a),kr(r)&&(ar(r.key),R=""+r.key),Ir(r)&&(J=r.ref,$r(r,A));for($ in r)ge.call(r,$)&&!Ar.hasOwnProperty($)&&(O[$]=r[$]);if(e&&e.defaultProps){var W=e.defaultProps;for($ in W)O[$]===void 0&&(O[$]=W[$])}if(R||J){var L=typeof e=="function"?e.displayName||e.name||"Unknown":e;R&&Dr(O,L),J&&Mr(O,L)}return Fr(e,R,J,A,s,or.current,O)}}var De=U.ReactCurrentOwner,sr=U.ReactDebugCurrentFrame;function de(e){if(e){var r=e._owner,a=oe(e.type,e._source,r?r.type:null);sr.setExtraStackFrame(a)}else sr.setExtraStackFrame(null)}var Me;Me=!1;function Fe(e){return typeof e=="object"&&e!==null&&e.$$typeof===D}function fr(){{if(De.current){var e=H(De.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Wr(e){return""}var cr={};function qr(e){{var r=fr();if(!r){var a=typeof e=="string"?e:e.displayName||e.name;a&&(r=`

Check the top-level render call using <`+a+">.")}return r}}function lr(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var a=qr(r);if(cr[a])return;cr[a]=!0;var s="";e&&e._owner&&e._owner!==De.current&&(s=" It was passed a child from "+H(e._owner.type)+"."),de(e),Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',a,s),de(null)}}function dr(e,r){{if(typeof e!="object")return;if($e(e))for(var a=0;a<e.length;a++){var s=e[a];Fe(s)&&lr(s,r)}else if(Fe(e))e._store&&(e._store.validated=!0);else if(e){var A=N(e);if(typeof A=="function"&&A!==e.entries)for(var $=A.call(e),O;!(O=$.next()).done;)Fe(O.value)&&lr(O.value,r)}}}function Lr(e){{var r=e.type;if(r==null||typeof r=="string")return;var a;if(typeof r=="function")a=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===b||r.$$typeof===E))a=r.propTypes;else return;if(a){var s=H(r);Cr(a,e.props,"prop",s,e)}else if(r.PropTypes!==void 0&&!Me){Me=!0;var A=H(r);Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",A||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ur(e){{for(var r=Object.keys(e.props),a=0;a<r.length;a++){var s=r[a];if(s!=="children"&&s!=="key"){de(e),Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",s),de(null);break}}e.ref!==null&&(de(e),Y("Invalid attribute `ref` supplied to `React.Fragment`."),de(null))}}var vr={};function pr(e,r,a,s,A,$){{var O=Ee(e);if(!O){var R="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(R+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var J=Wr();J?R+=J:R+=fr();var W;e===null?W="null":$e(e)?W="array":e!==void 0&&e.$$typeof===D?(W="<"+(H(e.type)||"Unknown")+" />",R=" Did you accidentally export a JSX literal instead of a component?"):W=typeof e,Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",W,R)}var L=Yr(e,r,a,A,$);if(L==null)return L;if(O){var Q=r.children;if(Q!==void 0)if(s)if($e(Q)){for(var ve=0;ve<Q.length;ve++)dr(Q[ve],e);Object.freeze&&Object.freeze(Q)}else Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else dr(Q,e)}if(ge.call(r,"key")){var ie=H(e),G=Object.keys(r).filter(function(Kr){return Kr!=="key"}),Ye=G.length>0?"{key: someKey, "+G.join(": ..., ")+": ...}":"{key: someKey}";if(!vr[ie+Ye]){var Jr=G.length>0?"{"+G.join(": ..., ")+": ...}":"{}";Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ye,ie,Jr,ie),vr[ie+Ye]=!0}}return e===p?Ur(L):Lr(L),L}}function Vr(e,r,a){return pr(e,r,a,!0)}function Nr(e,r,a){return pr(e,r,a,!1)}var zr=Nr,Br=Vr;be.Fragment=p,be.jsx=zr,be.jsxs=Br}()),be}var Le;function mr(){return Le||(Le=1,process.env.NODE_ENV==="production"?Te.exports=br():Te.exports=hr()),Te.exports}var Pe=mr(),Re={exports:{}},_e={exports:{}},w={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue;function Er(){if(Ue)return w;Ue=1;var u=typeof Symbol=="function"&&Symbol.for,D=u?Symbol.for("react.element"):60103,I=u?Symbol.for("react.portal"):60106,p=u?Symbol.for("react.fragment"):60107,j=u?Symbol.for("react.strict_mode"):60108,c=u?Symbol.for("react.profiler"):60114,C=u?Symbol.for("react.provider"):60109,l=u?Symbol.for("react.context"):60110,b=u?Symbol.for("react.async_mode"):60111,P=u?Symbol.for("react.concurrent_mode"):60111,f=u?Symbol.for("react.forward_ref"):60112,E=u?Symbol.for("react.suspense"):60113,k=u?Symbol.for("react.suspense_list"):60120,F=u?Symbol.for("react.memo"):60115,z=u?Symbol.for("react.lazy"):60116,M=u?Symbol.for("react.block"):60121,N=u?Symbol.for("react.fundamental"):60117,U=u?Symbol.for("react.responder"):60118,Y=u?Symbol.for("react.scope"):60119;function V(o){if(typeof o=="object"&&o!==null){var re=o.$$typeof;switch(re){case D:switch(o=o.type,o){case b:case P:case p:case c:case j:case E:return o;default:switch(o=o&&o.$$typeof,o){case l:case f:case z:case F:case C:return o;default:return re}}case I:return re}}}function q(o){return V(o)===P}return w.AsyncMode=b,w.ConcurrentMode=P,w.ContextConsumer=l,w.ContextProvider=C,w.Element=D,w.ForwardRef=f,w.Fragment=p,w.Lazy=z,w.Memo=F,w.Portal=I,w.Profiler=c,w.StrictMode=j,w.Suspense=E,w.isAsyncMode=function(o){return q(o)||V(o)===b},w.isConcurrentMode=q,w.isContextConsumer=function(o){return V(o)===l},w.isContextProvider=function(o){return V(o)===C},w.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===D},w.isForwardRef=function(o){return V(o)===f},w.isFragment=function(o){return V(o)===p},w.isLazy=function(o){return V(o)===z},w.isMemo=function(o){return V(o)===F},w.isPortal=function(o){return V(o)===I},w.isProfiler=function(o){return V(o)===c},w.isStrictMode=function(o){return V(o)===j},w.isSuspense=function(o){return V(o)===E},w.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===p||o===P||o===c||o===j||o===E||o===k||typeof o=="object"&&o!==null&&(o.$$typeof===z||o.$$typeof===F||o.$$typeof===C||o.$$typeof===l||o.$$typeof===f||o.$$typeof===N||o.$$typeof===U||o.$$typeof===Y||o.$$typeof===M)},w.typeOf=V,w}var x={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve;function gr(){return Ve||(Ve=1,process.env.NODE_ENV!=="production"&&function(){var u=typeof Symbol=="function"&&Symbol.for,D=u?Symbol.for("react.element"):60103,I=u?Symbol.for("react.portal"):60106,p=u?Symbol.for("react.fragment"):60107,j=u?Symbol.for("react.strict_mode"):60108,c=u?Symbol.for("react.profiler"):60114,C=u?Symbol.for("react.provider"):60109,l=u?Symbol.for("react.context"):60110,b=u?Symbol.for("react.async_mode"):60111,P=u?Symbol.for("react.concurrent_mode"):60111,f=u?Symbol.for("react.forward_ref"):60112,E=u?Symbol.for("react.suspense"):60113,k=u?Symbol.for("react.suspense_list"):60120,F=u?Symbol.for("react.memo"):60115,z=u?Symbol.for("react.lazy"):60116,M=u?Symbol.for("react.block"):60121,N=u?Symbol.for("react.fundamental"):60117,U=u?Symbol.for("react.responder"):60118,Y=u?Symbol.for("react.scope"):60119;function V(n){return typeof n=="string"||typeof n=="function"||n===p||n===P||n===c||n===j||n===E||n===k||typeof n=="object"&&n!==null&&(n.$$typeof===z||n.$$typeof===F||n.$$typeof===C||n.$$typeof===l||n.$$typeof===f||n.$$typeof===N||n.$$typeof===U||n.$$typeof===Y||n.$$typeof===M)}function q(n){if(typeof n=="object"&&n!==null){var Z=n.$$typeof;switch(Z){case D:var le=n.type;switch(le){case b:case P:case p:case c:case j:case E:return le;default:var oe=le&&le.$$typeof;switch(oe){case l:case f:case z:case F:case C:return oe;default:return Z}}case I:return Z}}}var o=b,re=P,he=l,me=C,ue=D,Ee=f,se=p,fe=z,H=F,K=I,te=c,X=j,ee=E,ae=!1;function ce(n){return ae||(ae=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),t(n)||q(n)===b}function t(n){return q(n)===P}function i(n){return q(n)===l}function m(n){return q(n)===C}function h(n){return typeof n=="object"&&n!==null&&n.$$typeof===D}function d(n){return q(n)===f}function _(n){return q(n)===p}function v(n){return q(n)===z}function y(n){return q(n)===F}function g(n){return q(n)===I}function S(n){return q(n)===c}function T(n){return q(n)===j}function B(n){return q(n)===E}x.AsyncMode=o,x.ConcurrentMode=re,x.ContextConsumer=he,x.ContextProvider=me,x.Element=ue,x.ForwardRef=Ee,x.Fragment=se,x.Lazy=fe,x.Memo=H,x.Portal=K,x.Profiler=te,x.StrictMode=X,x.Suspense=ee,x.isAsyncMode=ce,x.isConcurrentMode=t,x.isContextConsumer=i,x.isContextProvider=m,x.isElement=h,x.isForwardRef=d,x.isFragment=_,x.isLazy=v,x.isMemo=y,x.isPortal=g,x.isProfiler=S,x.isStrictMode=T,x.isSuspense=B,x.isValidElementType=V,x.typeOf=q}()),x}var Ne;function ze(){return Ne||(Ne=1,process.env.NODE_ENV==="production"?_e.exports=Er():_e.exports=gr()),_e.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Se,Be;function Tr(){if(Be)return Se;Be=1;var u=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;function p(c){if(c==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(c)}function j(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var C={},l=0;l<10;l++)C["_"+String.fromCharCode(l)]=l;var b=Object.getOwnPropertyNames(C).map(function(f){return C[f]});if(b.join("")!=="0123456789")return!1;var P={};return"abcdefghijklmnopqrst".split("").forEach(function(f){P[f]=f}),Object.keys(Object.assign({},P)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Se=j()?Object.assign:function(c,C){for(var l,b=p(c),P,f=1;f<arguments.length;f++){l=Object(arguments[f]);for(var E in l)D.call(l,E)&&(b[E]=l[E]);if(u){P=u(l);for(var k=0;k<P.length;k++)I.call(l,P[k])&&(b[P[k]]=l[P[k]])}}return b},Se}var Ce,Je;function we(){if(Je)return Ce;Je=1;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ce=u,Ce}var xe,Ke;function Ge(){return Ke||(Ke=1,xe=Function.call.bind(Object.prototype.hasOwnProperty)),xe}var je,Xe;function Rr(){if(Xe)return je;Xe=1;var u=function(){};if(process.env.NODE_ENV!=="production"){var D=we(),I={},p=Ge();u=function(c){var C="Warning: "+c;typeof console<"u"&&console.error(C);try{throw new Error(C)}catch{}}}function j(c,C,l,b,P){if(process.env.NODE_ENV!=="production"){for(var f in c)if(p(c,f)){var E;try{if(typeof c[f]!="function"){var k=Error((b||"React class")+": "+l+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof c[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw k.name="Invariant Violation",k}E=c[f](C,f,b,l,null,D)}catch(z){E=z}if(E&&!(E instanceof Error)&&u((b||"React class")+": type specification of "+l+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof E+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),E instanceof Error&&!(E.message in I)){I[E.message]=!0;var F=P?P():"";u("Failed "+l+" type: "+E.message+(F??""))}}}}return j.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(I={})},je=j,je}var Ae,He;function _r(){if(He)return Ae;He=1;var u=ze(),D=Tr(),I=we(),p=Ge(),j=Rr(),c=function(){};process.env.NODE_ENV!=="production"&&(c=function(l){var b="Warning: "+l;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}});function C(){return null}return Ae=function(l,b){var P=typeof Symbol=="function"&&Symbol.iterator,f="@@iterator";function E(t){var i=t&&(P&&t[P]||t[f]);if(typeof i=="function")return i}var k="<<anonymous>>",F={array:U("array"),bigint:U("bigint"),bool:U("boolean"),func:U("function"),number:U("number"),object:U("object"),string:U("string"),symbol:U("symbol"),any:Y(),arrayOf:V,element:q(),elementType:o(),instanceOf:re,node:Ee(),objectOf:me,oneOf:he,oneOfType:ue,shape:fe,exact:H};function z(t,i){return t===i?t!==0||1/t===1/i:t!==t&&i!==i}function M(t,i){this.message=t,this.data=i&&typeof i=="object"?i:{},this.stack=""}M.prototype=Error.prototype;function N(t){if(process.env.NODE_ENV!=="production")var i={},m=0;function h(_,v,y,g,S,T,B){if(g=g||k,T=T||y,B!==I){if(b){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var Z=g+":"+y;!i[Z]&&m<3&&(c("You are manually calling a React.PropTypes validation function for the `"+T+"` prop on `"+g+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),i[Z]=!0,m++)}}return v[y]==null?_?v[y]===null?new M("The "+S+" `"+T+"` is marked as required "+("in `"+g+"`, but its value is `null`.")):new M("The "+S+" `"+T+"` is marked as required in "+("`"+g+"`, but its value is `undefined`.")):null:t(v,y,g,S,T)}var d=h.bind(null,!1);return d.isRequired=h.bind(null,!0),d}function U(t){function i(m,h,d,_,v,y){var g=m[h],S=X(g);if(S!==t){var T=ee(g);return new M("Invalid "+_+" `"+v+"` of type "+("`"+T+"` supplied to `"+d+"`, expected ")+("`"+t+"`."),{expectedType:t})}return null}return N(i)}function Y(){return N(C)}function V(t){function i(m,h,d,_,v){if(typeof t!="function")return new M("Property `"+v+"` of component `"+d+"` has invalid PropType notation inside arrayOf.");var y=m[h];if(!Array.isArray(y)){var g=X(y);return new M("Invalid "+_+" `"+v+"` of type "+("`"+g+"` supplied to `"+d+"`, expected an array."))}for(var S=0;S<y.length;S++){var T=t(y,S,d,_,v+"["+S+"]",I);if(T instanceof Error)return T}return null}return N(i)}function q(){function t(i,m,h,d,_){var v=i[m];if(!l(v)){var y=X(v);return new M("Invalid "+d+" `"+_+"` of type "+("`"+y+"` supplied to `"+h+"`, expected a single ReactElement."))}return null}return N(t)}function o(){function t(i,m,h,d,_){var v=i[m];if(!u.isValidElementType(v)){var y=X(v);return new M("Invalid "+d+" `"+_+"` of type "+("`"+y+"` supplied to `"+h+"`, expected a single ReactElement type."))}return null}return N(t)}function re(t){function i(m,h,d,_,v){if(!(m[h]instanceof t)){var y=t.name||k,g=ce(m[h]);return new M("Invalid "+_+" `"+v+"` of type "+("`"+g+"` supplied to `"+d+"`, expected ")+("instance of `"+y+"`."))}return null}return N(i)}function he(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&(arguments.length>1?c("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):c("Invalid argument supplied to oneOf, expected an array.")),C;function i(m,h,d,_,v){for(var y=m[h],g=0;g<t.length;g++)if(z(y,t[g]))return null;var S=JSON.stringify(t,function(B,n){var Z=ee(n);return Z==="symbol"?String(n):n});return new M("Invalid "+_+" `"+v+"` of value `"+String(y)+"` "+("supplied to `"+d+"`, expected one of "+S+"."))}return N(i)}function me(t){function i(m,h,d,_,v){if(typeof t!="function")return new M("Property `"+v+"` of component `"+d+"` has invalid PropType notation inside objectOf.");var y=m[h],g=X(y);if(g!=="object")return new M("Invalid "+_+" `"+v+"` of type "+("`"+g+"` supplied to `"+d+"`, expected an object."));for(var S in y)if(p(y,S)){var T=t(y,S,d,_,v+"."+S,I);if(T instanceof Error)return T}return null}return N(i)}function ue(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&c("Invalid argument supplied to oneOfType, expected an instance of array."),C;for(var i=0;i<t.length;i++){var m=t[i];if(typeof m!="function")return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ae(m)+" at index "+i+"."),C}function h(d,_,v,y,g){for(var S=[],T=0;T<t.length;T++){var B=t[T],n=B(d,_,v,y,g,I);if(n==null)return null;n.data&&p(n.data,"expectedType")&&S.push(n.data.expectedType)}var Z=S.length>0?", expected one of type ["+S.join(", ")+"]":"";return new M("Invalid "+y+" `"+g+"` supplied to "+("`"+v+"`"+Z+"."))}return N(h)}function Ee(){function t(i,m,h,d,_){return K(i[m])?null:new M("Invalid "+d+" `"+_+"` supplied to "+("`"+h+"`, expected a ReactNode."))}return N(t)}function se(t,i,m,h,d){return new M((t||"React class")+": "+i+" type `"+m+"."+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+d+"`.")}function fe(t){function i(m,h,d,_,v){var y=m[h],g=X(y);if(g!=="object")return new M("Invalid "+_+" `"+v+"` of type `"+g+"` "+("supplied to `"+d+"`, expected `object`."));for(var S in t){var T=t[S];if(typeof T!="function")return se(d,_,v,S,ee(T));var B=T(y,S,d,_,v+"."+S,I);if(B)return B}return null}return N(i)}function H(t){function i(m,h,d,_,v){var y=m[h],g=X(y);if(g!=="object")return new M("Invalid "+_+" `"+v+"` of type `"+g+"` "+("supplied to `"+d+"`, expected `object`."));var S=D({},m[h],t);for(var T in S){var B=t[T];if(p(t,T)&&typeof B!="function")return se(d,_,v,T,ee(B));if(!B)return new M("Invalid "+_+" `"+v+"` key `"+T+"` supplied to `"+d+"`.\nBad object: "+JSON.stringify(m[h],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(t),null,"  "));var n=B(y,T,d,_,v+"."+T,I);if(n)return n}return null}return N(i)}function K(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(K);if(t===null||l(t))return!0;var i=E(t);if(i){var m=i.call(t),h;if(i!==t.entries){for(;!(h=m.next()).done;)if(!K(h.value))return!1}else for(;!(h=m.next()).done;){var d=h.value;if(d&&!K(d[1]))return!1}}else return!1;return!0;default:return!1}}function te(t,i){return t==="symbol"?!0:i?i["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&i instanceof Symbol:!1}function X(t){var i=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":te(i,t)?"symbol":i}function ee(t){if(typeof t>"u"||t===null)return""+t;var i=X(t);if(i==="object"){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return i}function ae(t){var i=ee(t);switch(i){case"array":case"object":return"an "+i;case"boolean":case"date":case"regexp":return"a "+i;default:return i}}function ce(t){return!t.constructor||!t.constructor.name?k:t.constructor.name}return F.checkPropTypes=j,F.resetWarningCache=j.resetWarningCache,F.PropTypes=F,F},Ae}var Ie,Ze;function Or(){if(Ze)return Ie;Ze=1;var u=we();function D(){}function I(){}return I.resetWarningCache=D,Ie=function(){function p(C,l,b,P,f,E){if(E!==u){var k=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw k.name="Invariant Violation",k}}p.isRequired=p;function j(){return p}var c={array:p,bigint:p,bool:p,func:p,number:p,object:p,string:p,symbol:p,any:p,arrayOf:j,element:p,elementType:p,instanceOf:j,node:p,objectOf:j,oneOf:j,oneOfType:j,shape:j,exact:j,checkPropTypes:I,resetWarningCache:D};return c.PropTypes=c,c},Ie}var Qe;function Pr(){if(Qe)return Re.exports;if(Qe=1,process.env.NODE_ENV!=="production"){var u=ze(),D=!0;Re.exports=_r()(u.isElement,D)}else Re.exports=Or()();return Re.exports}var Sr=Pr();const ke=yr(Sr),er=({isOpen:u,onClose:D,children:I})=>u?pe.createPortal(Pe.jsx("div",{className:"modal-overlay",children:Pe.jsxs("div",{className:"modal-content",children:[Pe.jsx("button",{className:"close-btn",onClick:D,children:"×"}),I]})}),document.body):null;return er.propTypes={isOpen:ke.bool.isRequired,onClose:ke.func.isRequired,children:ke.node.isRequired},er});
