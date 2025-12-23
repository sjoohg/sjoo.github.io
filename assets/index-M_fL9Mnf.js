(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var tc={exports:{}},Mo={},nc={exports:{}},mt={};var Lh;function L_(){if(Lh)return mt;Lh=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function y(A,F,W){this.props=A,this.context=F,this.refs=T,this.updater=W||S}y.prototype.isReactComponent={},y.prototype.setState=function(A,F){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,F,"setState")},y.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function g(){}g.prototype=y.prototype;function O(A,F,W){this.props=A,this.context=F,this.refs=T,this.updater=W||S}var C=O.prototype=new g;C.constructor=O,w(C,y.prototype),C.isPureReactComponent=!0;var b=Array.isArray,N=Object.prototype.hasOwnProperty,k={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function ne(A,F,W){var _e,ge={},Se=null,Re=null;if(F!=null)for(_e in F.ref!==void 0&&(Re=F.ref),F.key!==void 0&&(Se=""+F.key),F)N.call(F,_e)&&!I.hasOwnProperty(_e)&&(ge[_e]=F[_e]);var Ue=arguments.length-2;if(Ue===1)ge.children=W;else if(1<Ue){for(var Ae=Array(Ue),Ze=0;Ze<Ue;Ze++)Ae[Ze]=arguments[Ze+2];ge.children=Ae}if(A&&A.defaultProps)for(_e in Ue=A.defaultProps,Ue)ge[_e]===void 0&&(ge[_e]=Ue[_e]);return{$$typeof:o,type:A,key:Se,ref:Re,props:ge,_owner:k.current}}function R(A,F){return{$$typeof:o,type:A.type,key:F,ref:A.ref,props:A.props,_owner:A._owner}}function D(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function me(A){var F={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(W){return F[W]})}var ce=/\/+/g;function Y(A,F){return typeof A=="object"&&A!==null&&A.key!=null?me(""+A.key):F.toString(36)}function te(A,F,W,_e,ge){var Se=typeof A;(Se==="undefined"||Se==="boolean")&&(A=null);var Re=!1;if(A===null)Re=!0;else switch(Se){case"string":case"number":Re=!0;break;case"object":switch(A.$$typeof){case o:case e:Re=!0}}if(Re)return Re=A,ge=ge(Re),A=_e===""?"."+Y(Re,0):_e,b(ge)?(W="",A!=null&&(W=A.replace(ce,"$&/")+"/"),te(ge,F,W,"",function(Ze){return Ze})):ge!=null&&(D(ge)&&(ge=R(ge,W+(!ge.key||Re&&Re.key===ge.key?"":(""+ge.key).replace(ce,"$&/")+"/")+A)),F.push(ge)),1;if(Re=0,_e=_e===""?".":_e+":",b(A))for(var Ue=0;Ue<A.length;Ue++){Se=A[Ue];var Ae=_e+Y(Se,Ue);Re+=te(Se,F,W,Ae,ge)}else if(Ae=v(A),typeof Ae=="function")for(A=Ae.call(A),Ue=0;!(Se=A.next()).done;)Se=Se.value,Ae=_e+Y(Se,Ue++),Re+=te(Se,F,W,Ae,ge);else if(Se==="object")throw F=String(A),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Re}function ie(A,F,W){if(A==null)return A;var _e=[],ge=0;return te(A,_e,"","",function(Se){return F.call(W,Se,ge++)}),_e}function he(A){if(A._status===-1){var F=A._result;F=F(),F.then(function(W){(A._status===0||A._status===-1)&&(A._status=1,A._result=W)},function(W){(A._status===0||A._status===-1)&&(A._status=2,A._result=W)}),A._status===-1&&(A._status=0,A._result=F)}if(A._status===1)return A._result.default;throw A._result}var oe={current:null},V={transition:null},se={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:V,ReactCurrentOwner:k};return mt.Children={map:ie,forEach:function(A,F,W){ie(A,function(){F.apply(this,arguments)},W)},count:function(A){var F=0;return ie(A,function(){F++}),F},toArray:function(A){return ie(A,function(F){return F})||[]},only:function(A){if(!D(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},mt.Component=y,mt.Fragment=n,mt.Profiler=a,mt.PureComponent=O,mt.StrictMode=r,mt.Suspense=p,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,mt.cloneElement=function(A,F,W){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var _e=w({},A.props),ge=A.key,Se=A.ref,Re=A._owner;if(F!=null){if(F.ref!==void 0&&(Se=F.ref,Re=k.current),F.key!==void 0&&(ge=""+F.key),A.type&&A.type.defaultProps)var Ue=A.type.defaultProps;for(Ae in F)N.call(F,Ae)&&!I.hasOwnProperty(Ae)&&(_e[Ae]=F[Ae]===void 0&&Ue!==void 0?Ue[Ae]:F[Ae])}var Ae=arguments.length-2;if(Ae===1)_e.children=W;else if(1<Ae){Ue=Array(Ae);for(var Ze=0;Ze<Ae;Ze++)Ue[Ze]=arguments[Ze+2];_e.children=Ue}return{$$typeof:o,type:A.type,key:ge,ref:Se,props:_e,_owner:Re}},mt.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:u,_context:A},A.Consumer=A},mt.createElement=ne,mt.createFactory=function(A){var F=ne.bind(null,A);return F.type=A,F},mt.createRef=function(){return{current:null}},mt.forwardRef=function(A){return{$$typeof:c,render:A}},mt.isValidElement=D,mt.lazy=function(A){return{$$typeof:_,_payload:{_status:-1,_result:A},_init:he}},mt.memo=function(A,F){return{$$typeof:m,type:A,compare:F===void 0?null:F}},mt.startTransition=function(A){var F=V.transition;V.transition={};try{A()}finally{V.transition=F}},mt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},mt.useCallback=function(A,F){return oe.current.useCallback(A,F)},mt.useContext=function(A){return oe.current.useContext(A)},mt.useDebugValue=function(){},mt.useDeferredValue=function(A){return oe.current.useDeferredValue(A)},mt.useEffect=function(A,F){return oe.current.useEffect(A,F)},mt.useId=function(){return oe.current.useId()},mt.useImperativeHandle=function(A,F,W){return oe.current.useImperativeHandle(A,F,W)},mt.useInsertionEffect=function(A,F){return oe.current.useInsertionEffect(A,F)},mt.useLayoutEffect=function(A,F){return oe.current.useLayoutEffect(A,F)},mt.useMemo=function(A,F){return oe.current.useMemo(A,F)},mt.useReducer=function(A,F,W){return oe.current.useReducer(A,F,W)},mt.useRef=function(A){return oe.current.useRef(A)},mt.useState=function(A){return oe.current.useState(A)},mt.useSyncExternalStore=function(A,F,W){return oe.current.useSyncExternalStore(A,F,W)},mt.useTransition=function(){return oe.current.useTransition()},mt.version="18.2.0",mt}var Ph;function qc(){return Ph||(Ph=1,nc.exports=L_()),nc.exports}var bh;function P_(){if(bh)return Mo;bh=1;var o=qc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(c,p,m){var _,x={},v=null,S=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(x[_]=p[_]);if(c&&c.defaultProps)for(_ in p=c.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:c,key:v,ref:S,props:x,_owner:a.current}}return Mo.Fragment=n,Mo.jsx=d,Mo.jsxs=d,Mo}var Dh;function b_(){return Dh||(Dh=1,tc.exports=P_()),tc.exports}var Po=b_(),ot=qc(),za={},ic={exports:{}},En={},rc={exports:{}},sc={};var Uh;function D_(){return Uh||(Uh=1,(function(o){function e(V,se){var A=V.length;V.push(se);e:for(;0<A;){var F=A-1>>>1,W=V[F];if(0<a(W,se))V[F]=se,V[A]=W,A=F;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var se=V[0],A=V.pop();if(A!==se){V[0]=A;e:for(var F=0,W=V.length,_e=W>>>1;F<_e;){var ge=2*(F+1)-1,Se=V[ge],Re=ge+1,Ue=V[Re];if(0>a(Se,A))Re<W&&0>a(Ue,Se)?(V[F]=Ue,V[Re]=A,F=Re):(V[F]=Se,V[ge]=A,F=ge);else if(Re<W&&0>a(Ue,A))V[F]=Ue,V[Re]=A,F=Re;else break e}}return se}function a(V,se){var A=V.sortIndex-se.sortIndex;return A!==0?A:V.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,c=d.now();o.unstable_now=function(){return d.now()-c}}var p=[],m=[],_=1,x=null,v=3,S=!1,w=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(V){for(var se=n(m);se!==null;){if(se.callback===null)r(m);else if(se.startTime<=V)r(m),se.sortIndex=se.expirationTime,e(p,se);else break;se=n(m)}}function b(V){if(T=!1,C(V),!w)if(n(p)!==null)w=!0,he(N);else{var se=n(m);se!==null&&oe(b,se.startTime-V)}}function N(V,se){w=!1,T&&(T=!1,g(ne),ne=-1),S=!0;var A=v;try{for(C(se),x=n(p);x!==null&&(!(x.expirationTime>se)||V&&!me());){var F=x.callback;if(typeof F=="function"){x.callback=null,v=x.priorityLevel;var W=F(x.expirationTime<=se);se=o.unstable_now(),typeof W=="function"?x.callback=W:x===n(p)&&r(p),C(se)}else r(p);x=n(p)}if(x!==null)var _e=!0;else{var ge=n(m);ge!==null&&oe(b,ge.startTime-se),_e=!1}return _e}finally{x=null,v=A,S=!1}}var k=!1,I=null,ne=-1,R=5,D=-1;function me(){return!(o.unstable_now()-D<R)}function ce(){if(I!==null){var V=o.unstable_now();D=V;var se=!0;try{se=I(!0,V)}finally{se?Y():(k=!1,I=null)}}else k=!1}var Y;if(typeof O=="function")Y=function(){O(ce)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ie=te.port2;te.port1.onmessage=ce,Y=function(){ie.postMessage(null)}}else Y=function(){y(ce,0)};function he(V){I=V,k||(k=!0,Y())}function oe(V,se){ne=y(function(){V(o.unstable_now())},se)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){w||S||(w=!0,he(N))},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(V){switch(v){case 1:case 2:case 3:var se=3;break;default:se=v}var A=v;v=se;try{return V()}finally{v=A}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,se){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var A=v;v=V;try{return se()}finally{v=A}},o.unstable_scheduleCallback=function(V,se,A){var F=o.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?F+A:F):A=F,V){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=A+W,V={id:_++,callback:se,priorityLevel:V,startTime:A,expirationTime:W,sortIndex:-1},A>F?(V.sortIndex=A,e(m,V),n(p)===null&&V===n(m)&&(T?(g(ne),ne=-1):T=!0,oe(b,A-F))):(V.sortIndex=W,e(p,V),w||S||(w=!0,he(N))),V},o.unstable_shouldYield=me,o.unstable_wrapCallback=function(V){var se=v;return function(){var A=v;v=se;try{return V.apply(this,arguments)}finally{v=A}}}})(sc)),sc}var Ih;function U_(){return Ih||(Ih=1,rc.exports=D_()),rc.exports}var Nh;function I_(){if(Nh)return En;Nh=1;var o=qc(),e=U_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function v(t){return p.call(x,t)?!0:p.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,s,l,f,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function O(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,O);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,O);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,O);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function C(t,i,s,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,f,l)&&(s=null),l||f===null?v(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(i=f.attributeName,l=f.attributeNamespace,s===null?t.removeAttribute(i):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var b=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),k=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),me=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),V=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var A=Object.assign,F;function W(t){if(F===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var _e=!1;function ge(t,i){if(!t||_e)return"";_e=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var l=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){l=re}t.call(i.prototype)}else{try{throw Error()}catch(re){l=re}t()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var f=re.stack.split(`
`),h=l.stack.split(`
`),M=f.length-1,U=h.length-1;1<=M&&0<=U&&f[M]!==h[U];)U--;for(;1<=M&&0<=U;M--,U--)if(f[M]!==h[U]){if(M!==1||U!==1)do if(M--,U--,0>U||f[M]!==h[U]){var B=`
`+f[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=U);break}}}finally{_e=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?W(t):""}function Se(t){switch(t.tag){case 5:return W(t.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return t=ge(t.type,!1),t;case 11:return t=ge(t.type.render,!1),t;case 1:return t=ge(t.type,!0),t;default:return""}}function Re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case k:return"Portal";case R:return"Profiler";case ne:return"StrictMode";case Y:return"Suspense";case te:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case me:return(t.displayName||"Context")+".Consumer";case D:return(t._context.displayName||"Context")+".Provider";case ce:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ie:return i=t.displayName||null,i!==null?i:Re(t.type)||"Memo";case he:i=t._payload,t=t._init;try{return Re(t(i))}catch{}}return null}function Ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(i);case 8:return i===ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ze(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ot(t){var i=Ze(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function nt(t){t._valueTracker||(t._valueTracker=Ot(t))}function Z(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ze(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xe(t,i){var s=i.checked;return A({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Je(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Ae(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function je(t,i){i=i.checked,i!=null&&C(t,"checked",i,!1)}function _t(t,i){je(t,i);var s=Ae(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ve(t,i.type,s):i.hasOwnProperty("defaultValue")&&Ve(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Fe(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Ve(t,i,s){(i!=="number"||Et(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Ne=Array.isArray;function Ye(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ae(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function et(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return A({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function P(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Ne(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Ae(s)}}function E(t,i){var s=Ae(i.value),l=Ae(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function j(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function pe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ae(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?pe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fe,Pe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ve(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var J={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z=["Webkit","ms","Moz","O"];Object.keys(J).forEach(function(t){z.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),J[i]=J[t]})});function de(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||J.hasOwnProperty(t)&&J[t]?(""+i).trim():i+"px"}function Ce(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,f=de(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,f):t[s]=f}}var Te=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Le(t,i){if(i){if(Te[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Qe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dt=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var be=null,ee=null,Me=null;function De(t){if(t=oo(t)){if(typeof be!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Jo(i),be(t.stateNode,t.type,i))}}function lt(t){ee?Me?Me.push(t):Me=[t]:ee=t}function xt(){if(ee){var t=ee,i=Me;if(Me=ee=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function Tt(t,i){return t(i)}function Xn(){}var St=!1;function An(t,i,s){if(St)return t(i,s);St=!0;try{return Tt(t,i,s)}finally{St=!1,(ee!==null||Me!==null)&&(Xn(),xt())}}function zt(t,i){var s=t.stateNode;if(s===null)return null;var l=Jo(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Hr=!1;if(c)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Hr=!1}function vl(t,i,s,l,f,h,M,U,B){var re=Array.prototype.slice.call(arguments,3);try{i.apply(s,re)}catch(ye){this.onError(ye)}}var li=!1,hr=null,gi=!1,Gr=null,xl={onError:function(t){li=!0,hr=t}};function yl(t,i,s,l,f,h,M,U,B){li=!1,hr=null,vl.apply(xl,arguments)}function Sl(t,i,s,l,f,h,M,U,B){if(yl.apply(this,arguments),li){if(li){var re=hr;li=!1,hr=null}else throw Error(n(198));gi||(gi=!0,Gr=re)}}function L(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Q(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ue(t){if(L(t)!==t)throw Error(n(188))}function K(t){var i=t.alternate;if(!i){if(i=L(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return ue(f),t;if(h===l)return ue(f),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=f,l=h;else{for(var M=!1,U=f.child;U;){if(U===s){M=!0,s=f,l=h;break}if(U===l){M=!0,l=f,s=h;break}U=U.sibling}if(!M){for(U=h.child;U;){if(U===s){M=!0,s=h,l=f;break}if(U===l){M=!0,l=h,s=f;break}U=U.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function le(t){return t=K(t),t!==null?ke(t):null}function ke(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ke(t);if(i!==null)return i;t=t.sibling}return null}var qe=e.unstable_scheduleCallback,tt=e.unstable_cancelCallback,it=e.unstable_shouldYield,ht=e.unstable_requestPaint,ze=e.unstable_now,st=e.unstable_getCurrentPriorityLevel,wt=e.unstable_ImmediatePriority,Lt=e.unstable_UserBlockingPriority,nn=e.unstable_NormalPriority,jn=e.unstable_LowPriority,bt=e.unstable_IdlePriority,ut=null,_n=null;function Nt(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(ut,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:Hs,Oo=Math.log,pr=Math.LN2;function Hs(t){return t>>>=0,t===0?32:31-(Oo(t)/pr|0)|0}var Bt=64,In=4194304;function _i(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $t(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var U=M&~f;U!==0?l=_i(U):(h&=M,h!==0&&(l=_i(h)))}else M=s&~f,M!==0?l=_i(M):h!==0&&(l=_i(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-Vt(i),f=1<<s,l|=t[s],i&=~f;return l}function Gs(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ml(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-Vt(h),U=1<<M,B=f[M];B===-1?((U&s)===0||(U&l)!==0)&&(f[M]=Gs(U,i)):B<=i&&(t.expiredLanes|=U),h&=~U}}function Vr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sf(){var t=Bt;return Bt<<=1,(Bt&4194240)===0&&(Bt=64),t}function El(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Vs(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Vt(i),t[i]=s}function $m(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-Vt(s),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,s&=~h}}function Tl(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Vt(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}var Mt=0;function of(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var af,wl,lf,uf,cf,Al=!1,zo=[],Ni=null,Fi=null,Oi=null,Ws=new Map,Xs=new Map,zi=[],Zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(t,i){switch(t){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":Ws.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(i.pointerId)}}function js(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=oo(i),i!==null&&wl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Qm(t,i,s,l,f){switch(i){case"focusin":return Ni=js(Ni,t,i,s,l,f),!0;case"dragenter":return Fi=js(Fi,t,i,s,l,f),!0;case"mouseover":return Oi=js(Oi,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return Ws.set(h,js(Ws.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Xs.set(h,js(Xs.get(h)||null,t,i,s,l,f)),!0}return!1}function df(t){var i=mr(t.target);if(i!==null){var s=L(i);if(s!==null){if(i=s.tag,i===13){if(i=Q(s),i!==null){t.blockedOn=i,cf(t.priority,function(){lf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ko(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Cl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);dt=l,s.target.dispatchEvent(l),dt=null}else return i=oo(s),i!==null&&wl(i),t.blockedOn=s,!1;i.shift()}return!0}function hf(t,i,s){ko(t)&&s.delete(i)}function Jm(){Al=!1,Ni!==null&&ko(Ni)&&(Ni=null),Fi!==null&&ko(Fi)&&(Fi=null),Oi!==null&&ko(Oi)&&(Oi=null),Ws.forEach(hf),Xs.forEach(hf)}function Ys(t,i){t.blockedOn===i&&(t.blockedOn=null,Al||(Al=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jm)))}function qs(t){function i(f){return Ys(f,t)}if(0<zo.length){Ys(zo[0],t);for(var s=1;s<zo.length;s++){var l=zo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Ni!==null&&Ys(Ni,t),Fi!==null&&Ys(Fi,t),Oi!==null&&Ys(Oi,t),Ws.forEach(i),Xs.forEach(i),s=0;s<zi.length;s++)l=zi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<zi.length&&(s=zi[0],s.blockedOn===null);)df(s),s.blockedOn===null&&zi.shift()}var Wr=b.ReactCurrentBatchConfig,Bo=!0;function eg(t,i,s,l){var f=Mt,h=Wr.transition;Wr.transition=null;try{Mt=1,Rl(t,i,s,l)}finally{Mt=f,Wr.transition=h}}function tg(t,i,s,l){var f=Mt,h=Wr.transition;Wr.transition=null;try{Mt=4,Rl(t,i,s,l)}finally{Mt=f,Wr.transition=h}}function Rl(t,i,s,l){if(Bo){var f=Cl(t,i,s,l);if(f===null)Xl(t,i,l,Ho,s),ff(t,l);else if(Qm(f,t,i,s,l))l.stopPropagation();else if(ff(t,l),i&4&&-1<Zm.indexOf(t)){for(;f!==null;){var h=oo(f);if(h!==null&&af(h),h=Cl(t,i,s,l),h===null&&Xl(t,i,l,Ho,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else Xl(t,i,l,null,s)}}var Ho=null;function Cl(t,i,s,l){if(Ho=null,t=H(l),t=mr(t),t!==null)if(i=L(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Q(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Ho=t,null}function pf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(st()){case wt:return 1;case Lt:return 4;case nn:case jn:return 16;case bt:return 536870912;default:return 16}default:return 16}}var ki=null,Ll=null,Go=null;function mf(){if(Go)return Go;var t,i=Ll,s=i.length,l,f="value"in ki?ki.value:ki.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===f[h-l];l++);return Go=f.slice(t,1<l?1-l:void 0)}function Vo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function gf(){return!1}function Rn(t){function i(s,l,f,h,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(s=t[U],this[U]=s?s(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Wo:gf,this.isPropagationStopped=gf,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),i}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Rn(Xr),Ks=A({},Xr,{view:0,detail:0}),ng=Rn(Ks),bl,Dl,$s,Xo=A({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(bl=t.screenX-$s.screenX,Dl=t.screenY-$s.screenY):Dl=bl=0,$s=t),bl)},movementY:function(t){return"movementY"in t?t.movementY:Dl}}),_f=Rn(Xo),ig=A({},Xo,{dataTransfer:0}),rg=Rn(ig),sg=A({},Ks,{relatedTarget:0}),Ul=Rn(sg),og=A({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),ag=Rn(og),lg=A({},Xr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ug=Rn(lg),cg=A({},Xr,{data:0}),vf=Rn(cg),fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=hg[t])?!!i[t]:!1}function Il(){return pg}var mg=A({},Ks,{key:function(t){if(t.key){var i=fg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gg=Rn(mg),_g=A({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=Rn(_g),vg=A({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),xg=Rn(vg),yg=A({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sg=Rn(yg),Mg=A({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Eg=Rn(Mg),Tg=[9,13,27,32],Nl=c&&"CompositionEvent"in window,Zs=null;c&&"documentMode"in document&&(Zs=document.documentMode);var wg=c&&"TextEvent"in window&&!Zs,yf=c&&(!Nl||Zs&&8<Zs&&11>=Zs),Sf=" ",Mf=!1;function Ef(t,i){switch(t){case"keyup":return Tg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function Ag(t,i){switch(t){case"compositionend":return Tf(i);case"keypress":return i.which!==32?null:(Mf=!0,Sf);case"textInput":return t=i.data,t===Sf&&Mf?null:t;default:return null}}function Rg(t,i){if(jr)return t==="compositionend"||!Nl&&Ef(t,i)?(t=mf(),Go=Ll=ki=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return yf&&i.locale!=="ko"?null:i.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Cg[t.type]:i==="textarea"}function Af(t,i,s,l){lt(l),i=$o(i,"onChange"),0<i.length&&(s=new Pl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Qs=null,Js=null;function Lg(t){Wf(t,0)}function jo(t){var i=Zr(t);if(Z(i))return t}function Pg(t,i){if(t==="change")return i}var Rf=!1;if(c){var Fl;if(c){var Ol="oninput"in document;if(!Ol){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),Ol=typeof Cf.oninput=="function"}Fl=Ol}else Fl=!1;Rf=Fl&&(!document.documentMode||9<document.documentMode)}function Lf(){Qs&&(Qs.detachEvent("onpropertychange",Pf),Js=Qs=null)}function Pf(t){if(t.propertyName==="value"&&jo(Js)){var i=[];Af(i,Js,t,H(t)),An(Lg,i)}}function bg(t,i,s){t==="focusin"?(Lf(),Qs=i,Js=s,Qs.attachEvent("onpropertychange",Pf)):t==="focusout"&&Lf()}function Dg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(Js)}function Ug(t,i){if(t==="click")return jo(i)}function Ig(t,i){if(t==="input"||t==="change")return jo(i)}function Ng(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Yn=typeof Object.is=="function"?Object.is:Ng;function eo(t,i){if(Yn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!p.call(i,f)||!Yn(t[f],i[f]))return!1}return!0}function bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Df(t,i){var s=bf(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=bf(s)}}function Uf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Uf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function If(){for(var t=window,i=Et();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Et(t.document)}return i}function zl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Fg(t){var i=If(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Uf(s.ownerDocument.documentElement,s)){if(l!==null&&zl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=Df(s,h);var M=Df(s,l);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Og=c&&"documentMode"in document&&11>=document.documentMode,Yr=null,kl=null,to=null,Bl=!1;function Nf(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Bl||Yr==null||Yr!==Et(l)||(l=Yr,"selectionStart"in l&&zl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),to&&eo(to,l)||(to=l,l=$o(kl,"onSelect"),0<l.length&&(i=new Pl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Yr)))}function Yo(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var qr={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},Hl={},Ff={};c&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function qo(t){if(Hl[t])return Hl[t];if(!qr[t])return t;var i=qr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Ff)return Hl[t]=i[s];return t}var Of=qo("animationend"),zf=qo("animationiteration"),kf=qo("animationstart"),Bf=qo("transitionend"),Hf=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(t,i){Hf.set(t,i),u(i,[t])}for(var Gl=0;Gl<Gf.length;Gl++){var Vl=Gf[Gl],zg=Vl.toLowerCase(),kg=Vl[0].toUpperCase()+Vl.slice(1);Bi(zg,"on"+kg)}Bi(Of,"onAnimationEnd"),Bi(zf,"onAnimationIteration"),Bi(kf,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(Bf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function Vf(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Sl(l,i,void 0,t),t.currentTarget=null}function Wf(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var U=l[M],B=U.instance,re=U.currentTarget;if(U=U.listener,B!==h&&f.isPropagationStopped())break e;Vf(f,U,re),h=B}else for(M=0;M<l.length;M++){if(U=l[M],B=U.instance,re=U.currentTarget,U=U.listener,B!==h&&f.isPropagationStopped())break e;Vf(f,U,re),h=B}}}if(gi)throw t=Gr,gi=!1,Gr=null,t}function Rt(t,i){var s=i[Zl];s===void 0&&(s=i[Zl]=new Set);var l=t+"__bubble";s.has(l)||(Xf(i,t,2,!1),s.add(l))}function Wl(t,i,s){var l=0;i&&(l|=4),Xf(s,t,l,i)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[Ko]){t[Ko]=!0,r.forEach(function(s){s!=="selectionchange"&&(Bg.has(s)||Wl(s,!1,t),Wl(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ko]||(i[Ko]=!0,Wl("selectionchange",!1,i))}}function Xf(t,i,s,l){switch(pf(i)){case 1:var f=eg;break;case 4:f=tg;break;default:f=Rl}s=f.bind(null,i,s,t),f=void 0,!Hr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Xl(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var U=l.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(M===4)for(M=l.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;M=M.return}for(;U!==null;){if(M=mr(U),M===null)return;if(B=M.tag,B===5||B===6){l=h=M;continue e}U=U.parentNode}}l=l.return}An(function(){var re=h,ye=H(s),Ee=[];e:{var xe=Hf.get(t);if(xe!==void 0){var Oe=Pl,He=t;switch(t){case"keypress":if(Vo(s)===0)break e;case"keydown":case"keyup":Oe=gg;break;case"focusin":He="focus",Oe=Ul;break;case"focusout":He="blur",Oe=Ul;break;case"beforeblur":case"afterblur":Oe=Ul;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=xg;break;case Of:case zf:case kf:Oe=ag;break;case Bf:Oe=Sg;break;case"scroll":Oe=ng;break;case"wheel":Oe=Eg;break;case"copy":case"cut":case"paste":Oe=ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=xf}var Ge=(i&4)!==0,kt=!Ge&&t==="scroll",q=Ge?xe!==null?xe+"Capture":null:xe;Ge=[];for(var G=re,$;G!==null;){$=G;var we=$.stateNode;if($.tag===5&&we!==null&&($=we,q!==null&&(we=zt(G,q),we!=null&&Ge.push(ro(G,we,$)))),kt)break;G=G.return}0<Ge.length&&(xe=new Oe(xe,He,null,s,ye),Ee.push({event:xe,listeners:Ge}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",xe&&s!==dt&&(He=s.relatedTarget||s.fromElement)&&(mr(He)||He[vi]))break e;if((Oe||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,Oe?(He=s.relatedTarget||s.toElement,Oe=re,He=He?mr(He):null,He!==null&&(kt=L(He),He!==kt||He.tag!==5&&He.tag!==6)&&(He=null)):(Oe=null,He=re),Oe!==He)){if(Ge=_f,we="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ge=xf,we="onPointerLeave",q="onPointerEnter",G="pointer"),kt=Oe==null?xe:Zr(Oe),$=He==null?xe:Zr(He),xe=new Ge(we,G+"leave",Oe,s,ye),xe.target=kt,xe.relatedTarget=$,we=null,mr(ye)===re&&(Ge=new Ge(q,G+"enter",He,s,ye),Ge.target=$,Ge.relatedTarget=kt,we=Ge),kt=we,Oe&&He)t:{for(Ge=Oe,q=He,G=0,$=Ge;$;$=Kr($))G++;for($=0,we=q;we;we=Kr(we))$++;for(;0<G-$;)Ge=Kr(Ge),G--;for(;0<$-G;)q=Kr(q),$--;for(;G--;){if(Ge===q||q!==null&&Ge===q.alternate)break t;Ge=Kr(Ge),q=Kr(q)}Ge=null}else Ge=null;Oe!==null&&jf(Ee,xe,Oe,Ge,!1),He!==null&&kt!==null&&jf(Ee,kt,He,Ge,!0)}}e:{if(xe=re?Zr(re):window,Oe=xe.nodeName&&xe.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&xe.type==="file")var We=Pg;else if(wf(xe))if(Rf)We=Ig;else{We=Dg;var Ke=bg}else(Oe=xe.nodeName)&&Oe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(We=Ug);if(We&&(We=We(t,re))){Af(Ee,We,s,ye);break e}Ke&&Ke(t,xe,re),t==="focusout"&&(Ke=xe._wrapperState)&&Ke.controlled&&xe.type==="number"&&Ve(xe,"number",xe.value)}switch(Ke=re?Zr(re):window,t){case"focusin":(wf(Ke)||Ke.contentEditable==="true")&&(Yr=Ke,kl=re,to=null);break;case"focusout":to=kl=Yr=null;break;case"mousedown":Bl=!0;break;case"contextmenu":case"mouseup":case"dragend":Bl=!1,Nf(Ee,s,ye);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":Nf(Ee,s,ye)}var $e;if(Nl)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else jr?Ef(t,s)&&(rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(rt="onCompositionStart");rt&&(yf&&s.locale!=="ko"&&(jr||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&jr&&($e=mf()):(ki=ye,Ll="value"in ki?ki.value:ki.textContent,jr=!0)),Ke=$o(re,rt),0<Ke.length&&(rt=new vf(rt,t,null,s,ye),Ee.push({event:rt,listeners:Ke}),$e?rt.data=$e:($e=Tf(s),$e!==null&&(rt.data=$e)))),($e=wg?Ag(t,s):Rg(t,s))&&(re=$o(re,"onBeforeInput"),0<re.length&&(ye=new vf("onBeforeInput","beforeinput",null,s,ye),Ee.push({event:ye,listeners:re}),ye.data=$e))}Wf(Ee,i)})}function ro(t,i,s){return{instance:t,listener:i,currentTarget:s}}function $o(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=zt(t,s),h!=null&&l.unshift(ro(t,h,f)),h=zt(t,i),h!=null&&l.push(ro(t,h,f))),t=t.return}return l}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jf(t,i,s,l,f){for(var h=i._reactName,M=[];s!==null&&s!==l;){var U=s,B=U.alternate,re=U.stateNode;if(B!==null&&B===l)break;U.tag===5&&re!==null&&(U=re,f?(B=zt(s,h),B!=null&&M.unshift(ro(s,B,U))):f||(B=zt(s,h),B!=null&&M.push(ro(s,B,U)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Hg=/\r\n?/g,Gg=/\u0000|\uFFFD/g;function Yf(t){return(typeof t=="string"?t:""+t).replace(Hg,`
`).replace(Gg,"")}function Zo(t,i,s){if(i=Yf(i),Yf(t)!==i&&s)throw Error(n(425))}function Qo(){}var jl=null,Yl=null;function ql(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,Vg=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,Wg=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(t){return qf.resolve(null).then(t).catch(Xg)}:Kl;function Xg(t){setTimeout(function(){throw t})}function $l(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(l===0){t.removeChild(f),qs(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=f}while(s);qs(i)}function Hi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Kf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var $r=Math.random().toString(36).slice(2),ui="__reactFiber$"+$r,so="__reactProps$"+$r,vi="__reactContainer$"+$r,Zl="__reactEvents$"+$r,jg="__reactListeners$"+$r,Yg="__reactHandles$"+$r;function mr(t){var i=t[ui];if(i)return i;for(var s=t.parentNode;s;){if(i=s[vi]||s[ui]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Kf(t);t!==null;){if(s=t[ui])return s;t=Kf(t)}return i}t=s,s=t.parentNode}return null}function oo(t){return t=t[ui]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Jo(t){return t[so]||null}var Ql=[],Qr=-1;function Gi(t){return{current:t}}function Ct(t){0>Qr||(t.current=Ql[Qr],Ql[Qr]=null,Qr--)}function At(t,i){Qr++,Ql[Qr]=t.current,t.current=i}var Vi={},on=Gi(Vi),vn=Gi(!1),gr=Vi;function Jr(t,i){var s=t.type.contextTypes;if(!s)return Vi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in s)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function xn(t){return t=t.childContextTypes,t!=null}function ea(){Ct(vn),Ct(on)}function $f(t,i,s){if(on.current!==Vi)throw Error(n(168));At(on,i),At(vn,s)}function Zf(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,Ue(t)||"Unknown",f));return A({},s,l)}function ta(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,gr=on.current,At(on,t),At(vn,vn.current),!0}function Qf(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Zf(t,i,gr),l.__reactInternalMemoizedMergedChildContext=t,Ct(vn),Ct(on),At(on,t)):Ct(vn),At(vn,s)}var xi=null,na=!1,Jl=!1;function Jf(t){xi===null?xi=[t]:xi.push(t)}function qg(t){na=!0,Jf(t)}function Wi(){if(!Jl&&xi!==null){Jl=!0;var t=0,i=Mt;try{var s=xi;for(Mt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}xi=null,na=!1}catch(f){throw xi!==null&&(xi=xi.slice(t+1)),qe(wt,Wi),f}finally{Mt=i,Jl=!1}}return null}var es=[],ts=0,ia=null,ra=0,Nn=[],Fn=0,_r=null,yi=1,Si="";function vr(t,i){es[ts++]=ra,es[ts++]=ia,ia=t,ra=i}function ed(t,i,s){Nn[Fn++]=yi,Nn[Fn++]=Si,Nn[Fn++]=_r,_r=t;var l=yi;t=Si;var f=32-Vt(l)-1;l&=~(1<<f),s+=1;var h=32-Vt(i)+f;if(30<h){var M=f-f%5;h=(l&(1<<M)-1).toString(32),l>>=M,f-=M,yi=1<<32-Vt(i)+f|s<<f|l,Si=h+t}else yi=1<<h|s<<f|l,Si=t}function eu(t){t.return!==null&&(vr(t,1),ed(t,1,0))}function tu(t){for(;t===ia;)ia=es[--ts],es[ts]=null,ra=es[--ts],es[ts]=null;for(;t===_r;)_r=Nn[--Fn],Nn[Fn]=null,Si=Nn[--Fn],Nn[Fn]=null,yi=Nn[--Fn],Nn[Fn]=null}var Cn=null,Ln=null,Pt=!1,qn=null;function td(t,i){var s=Bn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function nd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Cn=t,Ln=Hi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Cn=t,Ln=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=_r!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Bn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Cn=t,Ln=null,!0):!1;default:return!1}}function nu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function iu(t){if(Pt){var i=Ln;if(i){var s=i;if(!nd(t,i)){if(nu(t))throw Error(n(418));i=Hi(s.nextSibling);var l=Cn;i&&nd(t,i)?td(l,s):(t.flags=t.flags&-4097|2,Pt=!1,Cn=t)}}else{if(nu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Pt=!1,Cn=t}}}function id(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function sa(t){if(t!==Cn)return!1;if(!Pt)return id(t),Pt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ql(t.type,t.memoizedProps)),i&&(i=Ln)){if(nu(t))throw rd(),Error(n(418));for(;i;)td(t,i),i=Hi(i.nextSibling)}if(id(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Ln=Hi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Ln=null}}else Ln=Cn?Hi(t.stateNode.nextSibling):null;return!0}function rd(){for(var t=Ln;t;)t=Hi(t.nextSibling)}function ns(){Ln=Cn=null,Pt=!1}function ru(t){qn===null?qn=[t]:qn.push(t)}var Kg=b.ReactCurrentBatchConfig;function Kn(t,i){if(t&&t.defaultProps){i=A({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}var oa=Gi(null),aa=null,is=null,su=null;function ou(){su=is=aa=null}function au(t){var i=oa.current;Ct(oa),t._currentValue=i}function lu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function rs(t,i){aa=t,su=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(yn=!0),t.firstContext=null)}function On(t){var i=t._currentValue;if(su!==t)if(t={context:t,memoizedValue:i,next:null},is===null){if(aa===null)throw Error(n(308));is=t,aa.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return i}var xr=null;function uu(t){xr===null?xr=[t]:xr.push(t)}function sd(t,i,s,l){var f=i.interleaved;return f===null?(s.next=s,uu(i)):(s.next=f.next,f.next=s),i.interleaved=s,Mi(t,l)}function Mi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Xi=!1;function cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function od(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ji(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(vt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Mi(t,s)}return f=l.interleaved,f===null?(i.next=i,uu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Mi(t,s)}function la(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Tl(t,s)}}function ad(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?f=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function ua(t,i,s,l){var f=t.updateQueue;Xi=!1;var h=f.firstBaseUpdate,M=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var B=U,re=B.next;B.next=null,M===null?h=re:M.next=re,M=B;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,U=ye.lastBaseUpdate,U!==M&&(U===null?ye.firstBaseUpdate=re:U.next=re,ye.lastBaseUpdate=B))}if(h!==null){var Ee=f.baseState;M=0,ye=re=B=null,U=h;do{var xe=U.lane,Oe=U.eventTime;if((l&xe)===xe){ye!==null&&(ye=ye.next={eventTime:Oe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=t,Ge=U;switch(xe=i,Oe=s,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){Ee=He.call(Oe,Ee,xe);break e}Ee=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,xe=typeof He=="function"?He.call(Oe,Ee,xe):He,xe==null)break e;Ee=A({},Ee,xe);break e;case 2:Xi=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,xe=f.effects,xe===null?f.effects=[U]:xe.push(U))}else Oe={eventTime:Oe,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ye===null?(re=ye=Oe,B=Ee):ye=ye.next=Oe,M|=xe;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(ye===null&&(B=Ee),f.baseState=B,f.firstBaseUpdate=re,f.lastBaseUpdate=ye,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Mr|=M,t.lanes=M,t.memoizedState=Ee}}function ld(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=s,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var ud=new o.Component().refs;function fu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:A({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ca={isMounted:function(t){return(t=t._reactInternals)?L(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=hn(),f=$i(t),h=Ei(l,f);h.payload=i,s!=null&&(h.callback=s),i=ji(t,h,f),i!==null&&(Qn(i,t,f,l),la(i,t,f))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=hn(),f=$i(t),h=Ei(l,f);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=ji(t,h,f),i!==null&&(Qn(i,t,f,l),la(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=hn(),l=$i(t),f=Ei(s,l);f.tag=2,i!=null&&(f.callback=i),i=ji(t,f,l),i!==null&&(Qn(i,t,l,s),la(i,t,l))}};function cd(t,i,s,l,f,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!eo(s,l)||!eo(f,h):!0}function fd(t,i,s){var l=!1,f=Vi,h=i.contextType;return typeof h=="object"&&h!==null?h=On(h):(f=xn(i)?gr:on.current,l=i.contextTypes,h=(l=l!=null)?Jr(t,f):Vi),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ca,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function dd(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&ca.enqueueReplaceState(i,i.state,null)}function du(t,i,s,l){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs=ud,cu(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=On(h):(h=xn(i)?gr:on.current,f.context=Jr(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(fu(t,i,h,s),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&ca.enqueueReplaceState(f,f.state,null),ua(t,s,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var U=f.refs;U===ud&&(U=f.refs={}),M===null?delete U[h]:U[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function fa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function hd(t){var i=t._init;return i(t._payload)}function pd(t){function i(q,G){if(t){var $=q.deletions;$===null?(q.deletions=[G],q.flags|=16):$.push(G)}}function s(q,G){if(!t)return null;for(;G!==null;)i(q,G),G=G.sibling;return null}function l(q,G){for(q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function f(q,G){return q=Qi(q,G),q.index=0,q.sibling=null,q}function h(q,G,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<G?(q.flags|=2,G):$):(q.flags|=2,G)):(q.flags|=1048576,G)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function U(q,G,$,we){return G===null||G.tag!==6?(G=Ku($,q.mode,we),G.return=q,G):(G=f(G,$),G.return=q,G)}function B(q,G,$,we){var We=$.type;return We===I?ye(q,G,$.props.children,we,$.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===he&&hd(We)===G.type)?(we=f(G,$.props),we.ref=ao(q,G,$),we.return=q,we):(we=Pa($.type,$.key,$.props,null,q.mode,we),we.ref=ao(q,G,$),we.return=q,we)}function re(q,G,$,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=$u($,q.mode,we),G.return=q,G):(G=f(G,$.children||[]),G.return=q,G)}function ye(q,G,$,we,We){return G===null||G.tag!==7?(G=Ar($,q.mode,we,We),G.return=q,G):(G=f(G,$),G.return=q,G)}function Ee(q,G,$){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Ku(""+G,q.mode,$),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case N:return $=Pa(G.type,G.key,G.props,null,q.mode,$),$.ref=ao(q,null,G),$.return=q,$;case k:return G=$u(G,q.mode,$),G.return=q,G;case he:var we=G._init;return Ee(q,we(G._payload),$)}if(Ne(G)||se(G))return G=Ar(G,q.mode,$,null),G.return=q,G;fa(q,G)}return null}function xe(q,G,$,we){var We=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return We!==null?null:U(q,G,""+$,we);if(typeof $=="object"&&$!==null){switch($.$$typeof){case N:return $.key===We?B(q,G,$,we):null;case k:return $.key===We?re(q,G,$,we):null;case he:return We=$._init,xe(q,G,We($._payload),we)}if(Ne($)||se($))return We!==null?null:ye(q,G,$,we,null);fa(q,$)}return null}function Oe(q,G,$,we,We){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get($)||null,U(G,q,""+we,We);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case N:return q=q.get(we.key===null?$:we.key)||null,B(G,q,we,We);case k:return q=q.get(we.key===null?$:we.key)||null,re(G,q,we,We);case he:var Ke=we._init;return Oe(q,G,$,Ke(we._payload),We)}if(Ne(we)||se(we))return q=q.get($)||null,ye(G,q,we,We,null);fa(G,we)}return null}function He(q,G,$,we){for(var We=null,Ke=null,$e=G,rt=G=0,Jt=null;$e!==null&&rt<$.length;rt++){$e.index>rt?(Jt=$e,$e=null):Jt=$e.sibling;var yt=xe(q,$e,$[rt],we);if(yt===null){$e===null&&($e=Jt);break}t&&$e&&yt.alternate===null&&i(q,$e),G=h(yt,G,rt),Ke===null?We=yt:Ke.sibling=yt,Ke=yt,$e=Jt}if(rt===$.length)return s(q,$e),Pt&&vr(q,rt),We;if($e===null){for(;rt<$.length;rt++)$e=Ee(q,$[rt],we),$e!==null&&(G=h($e,G,rt),Ke===null?We=$e:Ke.sibling=$e,Ke=$e);return Pt&&vr(q,rt),We}for($e=l(q,$e);rt<$.length;rt++)Jt=Oe($e,q,rt,$[rt],we),Jt!==null&&(t&&Jt.alternate!==null&&$e.delete(Jt.key===null?rt:Jt.key),G=h(Jt,G,rt),Ke===null?We=Jt:Ke.sibling=Jt,Ke=Jt);return t&&$e.forEach(function(Ji){return i(q,Ji)}),Pt&&vr(q,rt),We}function Ge(q,G,$,we){var We=se($);if(typeof We!="function")throw Error(n(150));if($=We.call($),$==null)throw Error(n(151));for(var Ke=We=null,$e=G,rt=G=0,Jt=null,yt=$.next();$e!==null&&!yt.done;rt++,yt=$.next()){$e.index>rt?(Jt=$e,$e=null):Jt=$e.sibling;var Ji=xe(q,$e,yt.value,we);if(Ji===null){$e===null&&($e=Jt);break}t&&$e&&Ji.alternate===null&&i(q,$e),G=h(Ji,G,rt),Ke===null?We=Ji:Ke.sibling=Ji,Ke=Ji,$e=Jt}if(yt.done)return s(q,$e),Pt&&vr(q,rt),We;if($e===null){for(;!yt.done;rt++,yt=$.next())yt=Ee(q,yt.value,we),yt!==null&&(G=h(yt,G,rt),Ke===null?We=yt:Ke.sibling=yt,Ke=yt);return Pt&&vr(q,rt),We}for($e=l(q,$e);!yt.done;rt++,yt=$.next())yt=Oe($e,q,rt,yt.value,we),yt!==null&&(t&&yt.alternate!==null&&$e.delete(yt.key===null?rt:yt.key),G=h(yt,G,rt),Ke===null?We=yt:Ke.sibling=yt,Ke=yt);return t&&$e.forEach(function(C_){return i(q,C_)}),Pt&&vr(q,rt),We}function kt(q,G,$,we){if(typeof $=="object"&&$!==null&&$.type===I&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case N:e:{for(var We=$.key,Ke=G;Ke!==null;){if(Ke.key===We){if(We=$.type,We===I){if(Ke.tag===7){s(q,Ke.sibling),G=f(Ke,$.props.children),G.return=q,q=G;break e}}else if(Ke.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===he&&hd(We)===Ke.type){s(q,Ke.sibling),G=f(Ke,$.props),G.ref=ao(q,Ke,$),G.return=q,q=G;break e}s(q,Ke);break}else i(q,Ke);Ke=Ke.sibling}$.type===I?(G=Ar($.props.children,q.mode,we,$.key),G.return=q,q=G):(we=Pa($.type,$.key,$.props,null,q.mode,we),we.ref=ao(q,G,$),we.return=q,q=we)}return M(q);case k:e:{for(Ke=$.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){s(q,G.sibling),G=f(G,$.children||[]),G.return=q,q=G;break e}else{s(q,G);break}else i(q,G);G=G.sibling}G=$u($,q.mode,we),G.return=q,q=G}return M(q);case he:return Ke=$._init,kt(q,G,Ke($._payload),we)}if(Ne($))return He(q,G,$,we);if(se($))return Ge(q,G,$,we);fa(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,G!==null&&G.tag===6?(s(q,G.sibling),G=f(G,$),G.return=q,q=G):(s(q,G),G=Ku($,q.mode,we),G.return=q,q=G),M(q)):s(q,G)}return kt}var ss=pd(!0),md=pd(!1),lo={},ci=Gi(lo),uo=Gi(lo),co=Gi(lo);function yr(t){if(t===lo)throw Error(n(174));return t}function hu(t,i){switch(At(co,i),At(uo,t),At(ci,lo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ae(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ae(i,t)}Ct(ci),At(ci,i)}function os(){Ct(ci),Ct(uo),Ct(co)}function gd(t){yr(co.current);var i=yr(ci.current),s=ae(i,t.type);i!==s&&(At(uo,t),At(ci,s))}function pu(t){uo.current===t&&(Ct(ci),Ct(uo))}var Dt=Gi(0);function da(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var mu=[];function gu(){for(var t=0;t<mu.length;t++)mu[t]._workInProgressVersionPrimary=null;mu.length=0}var ha=b.ReactCurrentDispatcher,_u=b.ReactCurrentBatchConfig,Sr=0,Ut=null,Wt=null,Zt=null,pa=!1,fo=!1,ho=0,$g=0;function an(){throw Error(n(321))}function vu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Yn(t[s],i[s]))return!1;return!0}function xu(t,i,s,l,f,h){if(Sr=h,Ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ha.current=t===null||t.memoizedState===null?e_:t_,t=s(l,f),fo){h=0;do{if(fo=!1,ho=0,25<=h)throw Error(n(301));h+=1,Zt=Wt=null,i.updateQueue=null,ha.current=n_,t=s(l,f)}while(fo)}if(ha.current=_a,i=Wt!==null&&Wt.next!==null,Sr=0,Zt=Wt=Ut=null,pa=!1,i)throw Error(n(300));return t}function yu(){var t=ho!==0;return ho=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ut.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function zn(){if(Wt===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var i=Zt===null?Ut.memoizedState:Zt.next;if(i!==null)Zt=i,Wt=t;else{if(t===null)throw Error(n(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Zt===null?Ut.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function po(t,i){return typeof i=="function"?i(t):i}function Su(t){var i=zn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Wt,f=l.baseQueue,h=s.pending;if(h!==null){if(f!==null){var M=f.next;f.next=h.next,h.next=M}l.baseQueue=f=h,s.pending=null}if(f!==null){h=f.next,l=l.baseState;var U=M=null,B=null,re=h;do{var ye=re.lane;if((Sr&ye)===ye)B!==null&&(B=B.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:t(l,re.action);else{var Ee={lane:ye,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};B===null?(U=B=Ee,M=l):B=B.next=Ee,Ut.lanes|=ye,Mr|=ye}re=re.next}while(re!==null&&re!==h);B===null?M=l:B.next=U,Yn(l,i.memoizedState)||(yn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=B,s.lastRenderedState=l}if(t=s.interleaved,t!==null){f=t;do h=f.lane,Ut.lanes|=h,Mr|=h,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Mu(t){var i=zn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do h=t(h,M.action),M=M.next;while(M!==f);Yn(h,i.memoizedState)||(yn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function _d(){}function vd(t,i){var s=Ut,l=zn(),f=i(),h=!Yn(l.memoizedState,f);if(h&&(l.memoizedState=f,yn=!0),l=l.queue,Eu(Sd.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(s.flags|=2048,mo(9,yd.bind(null,s,l,f,i),void 0,null),Qt===null)throw Error(n(349));(Sr&30)!==0||xd(s,i,f)}return f}function xd(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ut.updateQueue,i===null?(i={lastEffect:null,stores:null},Ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function yd(t,i,s,l){i.value=s,i.getSnapshot=l,Md(i)&&Ed(t)}function Sd(t,i,s){return s(function(){Md(i)&&Ed(t)})}function Md(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Yn(t,s)}catch{return!0}}function Ed(t){var i=Mi(t,1);i!==null&&Qn(i,t,1,-1)}function Td(t){var i=fi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:t},i.queue=t,t=t.dispatch=Jg.bind(null,Ut,t),[i.memoizedState,t]}function mo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ut.updateQueue,i===null?(i={lastEffect:null,stores:null},Ut.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function wd(){return zn().memoizedState}function ma(t,i,s,l){var f=fi();Ut.flags|=t,f.memoizedState=mo(1|i,s,void 0,l===void 0?null:l)}function ga(t,i,s,l){var f=zn();l=l===void 0?null:l;var h=void 0;if(Wt!==null){var M=Wt.memoizedState;if(h=M.destroy,l!==null&&vu(l,M.deps)){f.memoizedState=mo(i,s,h,l);return}}Ut.flags|=t,f.memoizedState=mo(1|i,s,h,l)}function Ad(t,i){return ma(8390656,8,t,i)}function Eu(t,i){return ga(2048,8,t,i)}function Rd(t,i){return ga(4,2,t,i)}function Cd(t,i){return ga(4,4,t,i)}function Ld(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Pd(t,i,s){return s=s!=null?s.concat([t]):null,ga(4,4,Ld.bind(null,i,t),s)}function Tu(){}function bd(t,i){var s=zn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&vu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Dd(t,i){var s=zn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&vu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Ud(t,i,s){return(Sr&21)===0?(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=s):(Yn(s,i)||(s=sf(),Ut.lanes|=s,Mr|=s,t.baseState=!0),i)}function Zg(t,i){var s=Mt;Mt=s!==0&&4>s?s:4,t(!0);var l=_u.transition;_u.transition={};try{t(!1),i()}finally{Mt=s,_u.transition=l}}function Id(){return zn().memoizedState}function Qg(t,i,s){var l=$i(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Nd(t))Fd(i,s);else if(s=sd(t,i,s,l),s!==null){var f=hn();Qn(s,t,l,f),Od(s,i,l)}}function Jg(t,i,s){var l=$i(t),f={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Nd(t))Fd(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,U=h(M,s);if(f.hasEagerState=!0,f.eagerState=U,Yn(U,M)){var B=i.interleaved;B===null?(f.next=f,uu(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}s=sd(t,i,f,l),s!==null&&(f=hn(),Qn(s,t,l,f),Od(s,i,l))}}function Nd(t){var i=t.alternate;return t===Ut||i!==null&&i===Ut}function Fd(t,i){fo=pa=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Od(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Tl(t,s)}}var _a={readContext:On,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},e_={readContext:On,useCallback:function(t,i){return fi().memoizedState=[t,i===void 0?null:i],t},useContext:On,useEffect:Ad,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,ma(4194308,4,Ld.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ma(4194308,4,t,i)},useInsertionEffect:function(t,i){return ma(4,2,t,i)},useMemo:function(t,i){var s=fi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=fi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Qg.bind(null,Ut,t),[l.memoizedState,t]},useRef:function(t){var i=fi();return t={current:t},i.memoizedState=t},useState:Td,useDebugValue:Tu,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=Td(!1),i=t[0];return t=Zg.bind(null,t[1]),fi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ut,f=fi();if(Pt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),Qt===null)throw Error(n(349));(Sr&30)!==0||xd(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,Ad(Sd.bind(null,l,h,t),[t]),l.flags|=2048,mo(9,yd.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=fi(),i=Qt.identifierPrefix;if(Pt){var s=Si,l=yi;s=(l&~(1<<32-Vt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=ho++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=$g++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},t_={readContext:On,useCallback:bd,useContext:On,useEffect:Eu,useImperativeHandle:Pd,useInsertionEffect:Rd,useLayoutEffect:Cd,useMemo:Dd,useReducer:Su,useRef:wd,useState:function(){return Su(po)},useDebugValue:Tu,useDeferredValue:function(t){var i=zn();return Ud(i,Wt.memoizedState,t)},useTransition:function(){var t=Su(po)[0],i=zn().memoizedState;return[t,i]},useMutableSource:_d,useSyncExternalStore:vd,useId:Id,unstable_isNewReconciler:!1},n_={readContext:On,useCallback:bd,useContext:On,useEffect:Eu,useImperativeHandle:Pd,useInsertionEffect:Rd,useLayoutEffect:Cd,useMemo:Dd,useReducer:Mu,useRef:wd,useState:function(){return Mu(po)},useDebugValue:Tu,useDeferredValue:function(t){var i=zn();return Wt===null?i.memoizedState=t:Ud(i,Wt.memoizedState,t)},useTransition:function(){var t=Mu(po)[0],i=zn().memoizedState;return[t,i]},useMutableSource:_d,useSyncExternalStore:vd,useId:Id,unstable_isNewReconciler:!1};function as(t,i){try{var s="",l=i;do s+=Se(l),l=l.return;while(l);var f=s}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function wu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Au(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var i_=typeof WeakMap=="function"?WeakMap:Map;function zd(t,i,s){s=Ei(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ta||(Ta=!0,Hu=l),Au(t,i)},s}function kd(t,i,s){s=Ei(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;s.payload=function(){return l(f)},s.callback=function(){Au(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Au(t,i),typeof l!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Bd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new i_;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(f.add(s),t=__.bind(null,t,i,s),i.then(t,t))}function Hd(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Gd(t,i,s,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ei(-1,1),i.tag=2,ji(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var r_=b.ReactCurrentOwner,yn=!1;function dn(t,i,s,l){i.child=t===null?md(i,null,s,l):ss(i,t.child,s,l)}function Vd(t,i,s,l,f){s=s.render;var h=i.ref;return rs(i,f),l=xu(t,i,s,l,h,f),s=yu(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ti(t,i,f)):(Pt&&s&&eu(i),i.flags|=1,dn(t,i,l,f),i.child)}function Wd(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!qu(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Xd(t,i,h,l,f)):(t=Pa(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:eo,s(M,l)&&t.ref===i.ref)return Ti(t,i,f)}return i.flags|=1,t=Qi(h,l),t.ref=i.ref,t.return=i,i.child=t}function Xd(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(eo(h,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,Ti(t,i,f)}return Ru(t,i,s,l,f)}function jd(t,i,s){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},At(us,Pn),Pn|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,At(us,Pn),Pn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,At(us,Pn),Pn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,At(us,Pn),Pn|=l;return dn(t,i,f,s),i.child}function Yd(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Ru(t,i,s,l,f){var h=xn(s)?gr:on.current;return h=Jr(i,h),rs(i,f),s=xu(t,i,s,l,h,f),l=yu(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ti(t,i,f)):(Pt&&l&&eu(i),i.flags|=1,dn(t,i,s,f),i.child)}function qd(t,i,s,l,f){if(xn(s)){var h=!0;ta(i)}else h=!1;if(rs(i,f),i.stateNode===null)xa(t,i),fd(i,s,l),du(i,s,l,f),l=!0;else if(t===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var B=M.context,re=s.contextType;typeof re=="object"&&re!==null?re=On(re):(re=xn(s)?gr:on.current,re=Jr(i,re));var ye=s.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof M.getSnapshotBeforeUpdate=="function";Ee||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==l||B!==re)&&dd(i,M,l,re),Xi=!1;var xe=i.memoizedState;M.state=xe,ua(i,l,M,f),B=i.memoizedState,U!==l||xe!==B||vn.current||Xi?(typeof ye=="function"&&(fu(i,s,ye,l),B=i.memoizedState),(U=Xi||cd(i,s,U,l,xe,B,re))?(Ee||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),M.props=l,M.state=B,M.context=re,l=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,od(t,i),U=i.memoizedProps,re=i.type===i.elementType?U:Kn(i.type,U),M.props=re,Ee=i.pendingProps,xe=M.context,B=s.contextType,typeof B=="object"&&B!==null?B=On(B):(B=xn(s)?gr:on.current,B=Jr(i,B));var Oe=s.getDerivedStateFromProps;(ye=typeof Oe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Ee||xe!==B)&&dd(i,M,l,B),Xi=!1,xe=i.memoizedState,M.state=xe,ua(i,l,M,f);var He=i.memoizedState;U!==Ee||xe!==He||vn.current||Xi?(typeof Oe=="function"&&(fu(i,s,Oe,l),He=i.memoizedState),(re=Xi||cd(i,s,re,l,xe,He,B)||!1)?(ye||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,He,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,He,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),M.props=l,M.state=He,M.context=B,l=re):(typeof M.componentDidUpdate!="function"||U===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),l=!1)}return Cu(t,i,s,l,h,f)}function Cu(t,i,s,l,f,h){Yd(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return f&&Qf(i,s,!1),Ti(t,i,h);l=i.stateNode,r_.current=i;var U=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ss(i,t.child,null,h),i.child=ss(i,null,U,h)):dn(t,i,U,h),i.memoizedState=l.state,f&&Qf(i,s,!0),i.child}function Kd(t){var i=t.stateNode;i.pendingContext?$f(t,i.pendingContext,i.pendingContext!==i.context):i.context&&$f(t,i.context,!1),hu(t,i.containerInfo)}function $d(t,i,s,l,f){return ns(),ru(f),i.flags|=256,dn(t,i,s,l),i.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Pu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zd(t,i,s){var l=i.pendingProps,f=Dt.current,h=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),At(Dt,f&1),t===null)return iu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ba(M,l,0,null),t=Ar(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Pu(s),i.memoizedState=Lu,t):bu(i,M));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return s_(t,i,M,l,U,f,s);if(h){h=l.fallback,M=i.mode,f=t.child,U=f.sibling;var B={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=Qi(f,B),l.subtreeFlags=f.subtreeFlags&14680064),U!==null?h=Qi(U,h):(h=Ar(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Pu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Lu,l}return h=t.child,t=h.sibling,l=Qi(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function bu(t,i){return i=ba({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function va(t,i,s,l){return l!==null&&ru(l),ss(i,t.child,null,s),t=bu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function s_(t,i,s,l,f,h,M){if(s)return i.flags&256?(i.flags&=-257,l=wu(Error(n(422))),va(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=ba({mode:"visible",children:l.children},f,0,null),h=Ar(h,f,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ss(i,t.child,null,M),i.child.memoizedState=Pu(M),i.memoizedState=Lu,h);if((i.mode&1)===0)return va(t,i,M,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=wu(h,l,void 0),va(t,i,M,l)}if(U=(M&t.childLanes)!==0,yn||U){if(l=Qt,l!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|M))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Mi(t,f),Qn(l,t,f,-1))}return Yu(),l=wu(Error(n(421))),va(t,i,M,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=v_.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Ln=Hi(f.nextSibling),Cn=i,Pt=!0,qn=null,t!==null&&(Nn[Fn++]=yi,Nn[Fn++]=Si,Nn[Fn++]=_r,yi=t.id,Si=t.overflow,_r=i),i=bu(i,l.children),i.flags|=4096,i)}function Qd(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),lu(t.return,i,s)}function Du(t,i,s,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=f)}function Jd(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(dn(t,i,l.children,s),l=Dt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qd(t,s,i);else if(t.tag===19)Qd(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(At(Dt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&da(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Du(i,!1,f,s,h);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&da(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Du(i,!0,s,null,h);break;case"together":Du(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function xa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ti(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Mr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=Qi(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Qi(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function o_(t,i,s){switch(i.tag){case 3:Kd(i),ns();break;case 5:gd(i);break;case 1:xn(i.type)&&ta(i);break;case 4:hu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;At(oa,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(At(Dt,Dt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Zd(t,i,s):(At(Dt,Dt.current&1),t=Ti(t,i,s),t!==null?t.sibling:null);At(Dt,Dt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Jd(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),At(Dt,Dt.current),l)break;return null;case 22:case 23:return i.lanes=0,jd(t,i,s)}return Ti(t,i,s)}var eh,Uu,th,nh;eh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Uu=function(){},th=function(t,i,s,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,yr(ci.current);var h=null;switch(s){case"input":f=Xe(t,f),l=Xe(t,l),h=[];break;case"select":f=A({},f,{value:void 0}),l=A({},l,{value:void 0}),h=[];break;case"textarea":f=et(t,f),l=et(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Qo)}Le(s,l);var M;s=null;for(re in f)if(!l.hasOwnProperty(re)&&f.hasOwnProperty(re)&&f[re]!=null)if(re==="style"){var U=f[re];for(M in U)U.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?h||(h=[]):(h=h||[]).push(re,null));for(re in l){var B=l[re];if(U=f?.[re],l.hasOwnProperty(re)&&B!==U&&(B!=null||U!=null))if(re==="style")if(U){for(M in U)!U.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in B)B.hasOwnProperty(M)&&U[M]!==B[M]&&(s||(s={}),s[M]=B[M])}else s||(h||(h=[]),h.push(re,s)),s=B;else re==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(h=h||[]).push(re,B)):re==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(re,""+B):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(B!=null&&re==="onScroll"&&Rt("scroll",t),h||U===B||(h=[])):(h=h||[]).push(re,B))}s&&(h=h||[]).push("style",s);var re=h;(i.updateQueue=re)&&(i.flags|=4)}},nh=function(t,i,s,l){s!==l&&(i.flags|=4)};function go(t,i){if(!Pt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ln(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function a_(t,i,s){var l=i.pendingProps;switch(tu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return xn(i.type)&&ea(),ln(i),null;case 3:return l=i.stateNode,os(),Ct(vn),Ct(on),gu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(sa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qn!==null&&(Wu(qn),qn=null))),Uu(t,i),ln(i),null;case 5:pu(i);var f=yr(co.current);if(s=i.type,t!==null&&i.stateNode!=null)th(t,i,s,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return ln(i),null}if(t=yr(ci.current),sa(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[ui]=i,l[so]=h,t=(i.mode&1)!==0,s){case"dialog":Rt("cancel",l),Rt("close",l);break;case"iframe":case"object":case"embed":Rt("load",l);break;case"video":case"audio":for(f=0;f<no.length;f++)Rt(no[f],l);break;case"source":Rt("error",l);break;case"img":case"image":case"link":Rt("error",l),Rt("load",l);break;case"details":Rt("toggle",l);break;case"input":Je(l,h),Rt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Rt("invalid",l);break;case"textarea":P(l,h),Rt("invalid",l)}Le(s,h),f=null;for(var M in h)if(h.hasOwnProperty(M)){var U=h[M];M==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&Zo(l.textContent,U,t),f=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&Zo(l.textContent,U,t),f=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Rt("scroll",l)}switch(s){case"input":nt(l),Fe(l,h,!0);break;case"textarea":nt(l),j(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Qo)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pe(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[ui]=i,t[so]=l,eh(t,i,!1,!1),i.stateNode=t;e:{switch(M=Qe(s,l),s){case"dialog":Rt("cancel",t),Rt("close",t),f=l;break;case"iframe":case"object":case"embed":Rt("load",t),f=l;break;case"video":case"audio":for(f=0;f<no.length;f++)Rt(no[f],t);f=l;break;case"source":Rt("error",t),f=l;break;case"img":case"image":case"link":Rt("error",t),Rt("load",t),f=l;break;case"details":Rt("toggle",t),f=l;break;case"input":Je(t,l),f=Xe(t,l),Rt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=A({},l,{value:void 0}),Rt("invalid",t);break;case"textarea":P(t,l),f=et(t,l),Rt("invalid",t);break;default:f=l}Le(s,f),U=f;for(h in U)if(U.hasOwnProperty(h)){var B=U[h];h==="style"?Ce(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Pe(t,B)):h==="children"?typeof B=="string"?(s!=="textarea"||B!=="")&&ve(t,B):typeof B=="number"&&ve(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Rt("scroll",t):B!=null&&C(t,h,B,M))}switch(s){case"input":nt(t),Fe(t,l,!1);break;case"textarea":nt(t),j(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Ye(t,!!l.multiple,h,!1):l.defaultValue!=null&&Ye(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Qo)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ln(i),null;case 6:if(t&&i.stateNode!=null)nh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=yr(co.current),yr(ci.current),sa(i)){if(l=i.stateNode,s=i.memoizedProps,l[ui]=i,(h=l.nodeValue!==s)&&(t=Cn,t!==null))switch(t.tag){case 3:Zo(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zo(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ui]=i,i.stateNode=l}return ln(i),null;case 13:if(Ct(Dt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pt&&Ln!==null&&(i.mode&1)!==0&&(i.flags&128)===0)rd(),ns(),i.flags|=98560,h=!1;else if(h=sa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ui]=i}else ns(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),h=!1}else qn!==null&&(Wu(qn),qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Dt.current&1)!==0?Xt===0&&(Xt=3):Yu())),i.updateQueue!==null&&(i.flags|=4),ln(i),null);case 4:return os(),Uu(t,i),t===null&&io(i.stateNode.containerInfo),ln(i),null;case 10:return au(i.type._context),ln(i),null;case 17:return xn(i.type)&&ea(),ln(i),null;case 19:if(Ct(Dt),h=i.memoizedState,h===null)return ln(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)go(h,!1);else{if(Xt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=da(t),M!==null){for(i.flags|=128,go(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return At(Dt,Dt.current&1|2),i.child}t=t.sibling}h.tail!==null&&ze()>cs&&(i.flags|=128,l=!0,go(h,!1),i.lanes=4194304)}else{if(!l)if(t=da(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),go(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Pt)return ln(i),null}else 2*ze()-h.renderingStartTime>cs&&s!==1073741824&&(i.flags|=128,l=!0,go(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=ze(),i.sibling=null,s=Dt.current,At(Dt,l?s&1|2:s&1),i):(ln(i),null);case 22:case 23:return ju(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Pn&1073741824)!==0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function l_(t,i){switch(tu(i),i.tag){case 1:return xn(i.type)&&ea(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return os(),Ct(vn),Ct(on),gu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return pu(i),null;case 13:if(Ct(Dt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ns()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ct(Dt),null;case 4:return os(),null;case 10:return au(i.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var ya=!1,un=!1,u_=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ls(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Ft(t,i,l)}else s.current=null}function Iu(t,i,s){try{s()}catch(l){Ft(t,i,l)}}var ih=!1;function c_(t,i){if(jl=Bo,t=If(),zl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,U=-1,B=-1,re=0,ye=0,Ee=t,xe=null;t:for(;;){for(var Oe;Ee!==s||f!==0&&Ee.nodeType!==3||(U=M+f),Ee!==h||l!==0&&Ee.nodeType!==3||(B=M+l),Ee.nodeType===3&&(M+=Ee.nodeValue.length),(Oe=Ee.firstChild)!==null;)xe=Ee,Ee=Oe;for(;;){if(Ee===t)break t;if(xe===s&&++re===f&&(U=M),xe===h&&++ye===l&&(B=M),(Oe=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=Oe}s=U===-1||B===-1?null:{start:U,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(Yl={focusedElem:t,selectionRange:s},Bo=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,kt=He.memoizedState,q=i.stateNode,G=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:Kn(i.type,Ge),kt);q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Ft(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return He=ih,ih=!1,He}function _o(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&Iu(i,s,h)}f=f.next}while(f!==l)}}function Sa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Nu(t){var i=t.ref;if(i!==null){var s=t.stateNode;t.tag,t=s,typeof i=="function"?i(t):i.current=t}}function rh(t){var i=t.alternate;i!==null&&(t.alternate=null,rh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ui],delete i[so],delete i[Zl],delete i[jg],delete i[Yg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sh(t){return t.tag===5||t.tag===3||t.tag===4}function oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Qo));else if(l!==4&&(t=t.child,t!==null))for(Fu(t,i,s),t=t.sibling;t!==null;)Fu(t,i,s),t=t.sibling}function Ou(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ou(t,i,s),t=t.sibling;t!==null;)Ou(t,i,s),t=t.sibling}var rn=null,$n=!1;function Yi(t,i,s){for(s=s.child;s!==null;)ah(t,i,s),s=s.sibling}function ah(t,i,s){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(ut,s)}catch{}switch(s.tag){case 5:un||ls(s,i);case 6:var l=rn,f=$n;rn=null,Yi(t,i,s),rn=l,$n=f,rn!==null&&($n?(t=rn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):rn.removeChild(s.stateNode));break;case 18:rn!==null&&($n?(t=rn,s=s.stateNode,t.nodeType===8?$l(t.parentNode,s):t.nodeType===1&&$l(t,s),qs(t)):$l(rn,s.stateNode));break;case 4:l=rn,f=$n,rn=s.stateNode.containerInfo,$n=!0,Yi(t,i,s),rn=l,$n=f;break;case 0:case 11:case 14:case 15:if(!un&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Iu(s,i,M),f=f.next}while(f!==l)}Yi(t,i,s);break;case 1:if(!un&&(ls(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(U){Ft(s,i,U)}Yi(t,i,s);break;case 21:Yi(t,i,s);break;case 22:s.mode&1?(un=(l=un)||s.memoizedState!==null,Yi(t,i,s),un=l):Yi(t,i,s);break;default:Yi(t,i,s)}}function lh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new u_),i.forEach(function(l){var f=x_.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}}function Zn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l];try{var h=t,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:rn=U.stateNode,$n=!1;break e;case 3:rn=U.stateNode.containerInfo,$n=!0;break e;case 4:rn=U.stateNode.containerInfo,$n=!0;break e}U=U.return}if(rn===null)throw Error(n(160));ah(h,M,f),rn=null,$n=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(re){Ft(f,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)uh(i,t),i=i.sibling}function uh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(i,t),di(t),l&4){try{_o(3,t,t.return),Sa(3,t)}catch(Ge){Ft(t,t.return,Ge)}try{_o(5,t,t.return)}catch(Ge){Ft(t,t.return,Ge)}}break;case 1:Zn(i,t),di(t),l&512&&s!==null&&ls(s,s.return);break;case 5:if(Zn(i,t),di(t),l&512&&s!==null&&ls(s,s.return),t.flags&32){var f=t.stateNode;try{ve(f,"")}catch(Ge){Ft(t,t.return,Ge)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,U=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&je(f,h),Qe(U,M);var re=Qe(U,h);for(M=0;M<B.length;M+=2){var ye=B[M],Ee=B[M+1];ye==="style"?Ce(f,Ee):ye==="dangerouslySetInnerHTML"?Pe(f,Ee):ye==="children"?ve(f,Ee):C(f,ye,Ee,re)}switch(U){case"input":_t(f,h);break;case"textarea":E(f,h);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Oe=h.value;Oe!=null?Ye(f,!!h.multiple,Oe,!1):xe!==!!h.multiple&&(h.defaultValue!=null?Ye(f,!!h.multiple,h.defaultValue,!0):Ye(f,!!h.multiple,h.multiple?[]:"",!1))}f[so]=h}catch(Ge){Ft(t,t.return,Ge)}}break;case 6:if(Zn(i,t),di(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Ge){Ft(t,t.return,Ge)}}break;case 3:if(Zn(i,t),di(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{qs(i.containerInfo)}catch(Ge){Ft(t,t.return,Ge)}break;case 4:Zn(i,t),di(t);break;case 13:Zn(i,t),di(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(Bu=ze())),l&4&&lh(t);break;case 22:if(ye=s!==null&&s.memoizedState!==null,t.mode&1?(un=(re=un)||ye,Zn(i,t),un=re):Zn(i,t),di(t),l&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!ye&&(t.mode&1)!==0)for(Be=t,ye=t.child;ye!==null;){for(Ee=Be=ye;Be!==null;){switch(xe=Be,Oe=xe.child,xe.tag){case 0:case 11:case 14:case 15:_o(4,xe,xe.return);break;case 1:ls(xe,xe.return);var He=xe.stateNode;if(typeof He.componentWillUnmount=="function"){l=xe,s=xe.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Ft(l,s,Ge)}}break;case 5:ls(xe,xe.return);break;case 22:if(xe.memoizedState!==null){dh(Ee);continue}}Oe!==null?(Oe.return=xe,Be=Oe):dh(Ee)}ye=ye.sibling}e:for(ye=null,Ee=t;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{f=Ee.stateNode,re?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Ee.stateNode,B=Ee.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=de("display",M))}catch(Ge){Ft(t,t.return,Ge)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=re?"":Ee.memoizedProps}catch(Ge){Ft(t,t.return,Ge)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Zn(i,t),di(t),l&4&&lh(t);break;case 21:break;default:Zn(i,t),di(t)}}function di(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(sh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ve(f,""),l.flags&=-33);var h=oh(t);Ou(t,h,f);break;case 3:case 4:var M=l.stateNode.containerInfo,U=oh(t);Fu(t,U,M);break;default:throw Error(n(161))}}catch(B){Ft(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function f_(t,i,s){Be=t,ch(t)}function ch(t,i,s){for(var l=(t.mode&1)!==0;Be!==null;){var f=Be,h=f.child;if(f.tag===22&&l){var M=f.memoizedState!==null||ya;if(!M){var U=f.alternate,B=U!==null&&U.memoizedState!==null||un;U=ya;var re=un;if(ya=M,(un=B)&&!re)for(Be=f;Be!==null;)M=Be,B=M.child,M.tag===22&&M.memoizedState!==null?hh(f):B!==null?(B.return=M,Be=B):hh(f);for(;h!==null;)Be=h,ch(h),h=h.sibling;Be=f,ya=U,un=re}fh(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Be=h):fh(t)}}function fh(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Sa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(s===null)l.componentDidMount();else{var f=i.elementType===i.type?s.memoizedProps:Kn(i.type,s.memoizedProps);l.componentDidUpdate(f,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&ld(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}ld(i,M,s)}break;case 5:var U=i.stateNode;if(s===null&&i.flags&4){s=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&s.focus();break;case"img":B.src&&(s.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var ye=re.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&qs(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&Nu(i)}catch(xe){Ft(i,i.return,xe)}}if(i===t){Be=null;break}if(s=i.sibling,s!==null){s.return=i.return,Be=s;break}Be=i.return}}function dh(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Be=s;break}Be=i.return}}function hh(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Sa(4,i)}catch(B){Ft(i,s,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(B){Ft(i,f,B)}}var h=i.return;try{Nu(i)}catch(B){Ft(i,h,B)}break;case 5:var M=i.return;try{Nu(i)}catch(B){Ft(i,M,B)}}}catch(B){Ft(i,i.return,B)}if(i===t){Be=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Be=U;break}Be=i.return}}var d_=Math.ceil,Ma=b.ReactCurrentDispatcher,zu=b.ReactCurrentOwner,kn=b.ReactCurrentBatchConfig,vt=0,Qt=null,Ht=null,sn=0,Pn=0,us=Gi(0),Xt=0,vo=null,Mr=0,Ea=0,ku=0,xo=null,Sn=null,Bu=0,cs=1/0,wi=null,Ta=!1,Hu=null,qi=null,wa=!1,Ki=null,Aa=0,yo=0,Gu=null,Ra=-1,Ca=0;function hn(){return(vt&6)!==0?ze():Ra!==-1?Ra:Ra=ze()}function $i(t){return(t.mode&1)===0?1:(vt&2)!==0&&sn!==0?sn&-sn:Kg.transition!==null?(Ca===0&&(Ca=sf()),Ca):(t=Mt,t!==0||(t=window.event,t=t===void 0?16:pf(t.type)),t)}function Qn(t,i,s,l){if(50<yo)throw yo=0,Gu=null,Error(n(185));Vs(t,s,l),((vt&2)===0||t!==Qt)&&(t===Qt&&((vt&2)===0&&(Ea|=s),Xt===4&&Zi(t,sn)),Mn(t,l),s===1&&vt===0&&(i.mode&1)===0&&(cs=ze()+500,na&&Wi()))}function Mn(t,i){var s=t.callbackNode;Ml(t,i);var l=$t(t,t===Qt?sn:0);if(l===0)s!==null&&tt(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&tt(s),i===1)t.tag===0?qg(mh.bind(null,t)):Jf(mh.bind(null,t)),Wg(function(){(vt&6)===0&&Wi()}),s=null;else{switch(of(l)){case 1:s=wt;break;case 4:s=Lt;break;case 16:s=nn;break;case 536870912:s=bt;break;default:s=nn}s=Eh(s,ph.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function ph(t,i){if(Ra=-1,Ca=0,(vt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(fs()&&t.callbackNode!==s)return null;var l=$t(t,t===Qt?sn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=La(t,l);else{i=l;var f=vt;vt|=2;var h=_h();(Qt!==t||sn!==i)&&(wi=null,cs=ze()+500,Tr(t,i));do try{m_();break}catch(U){gh(t,U)}while(!0);ou(),Ma.current=h,vt=f,Ht!==null?i=0:(Qt=null,sn=0,i=Xt)}if(i!==0){if(i===2&&(f=Vr(t),f!==0&&(l=f,i=Vu(t,f))),i===1)throw s=vo,Tr(t,0),Zi(t,l),Mn(t,ze()),s;if(i===6)Zi(t,l);else{if(f=t.current.alternate,(l&30)===0&&!h_(f)&&(i=La(t,l),i===2&&(h=Vr(t),h!==0&&(l=h,i=Vu(t,h))),i===1))throw s=vo,Tr(t,0),Zi(t,l),Mn(t,ze()),s;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:wr(t,Sn,wi);break;case 3:if(Zi(t,l),(l&130023424)===l&&(i=Bu+500-ze(),10<i)){if($t(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){hn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Kl(wr.bind(null,t,Sn,wi),i);break}wr(t,Sn,wi);break;case 4:if(Zi(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var M=31-Vt(l);h=1<<M,M=i[M],M>f&&(f=M),l&=~h}if(l=f,l=ze()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*d_(l/1960))-l,10<l){t.timeoutHandle=Kl(wr.bind(null,t,Sn,wi),l);break}wr(t,Sn,wi);break;case 5:wr(t,Sn,wi);break;default:throw Error(n(329))}}}return Mn(t,ze()),t.callbackNode===s?ph.bind(null,t):null}function Vu(t,i){var s=xo;return t.current.memoizedState.isDehydrated&&(Tr(t,i).flags|=256),t=La(t,i),t!==2&&(i=Sn,Sn=s,i!==null&&Wu(i)),t}function Wu(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function h_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!Yn(h(),f))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Zi(t,i){for(i&=~ku,i&=~Ea,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-Vt(i),l=1<<s;t[s]=-1,i&=~l}}function mh(t){if((vt&6)!==0)throw Error(n(327));fs();var i=$t(t,0);if((i&1)===0)return Mn(t,ze()),null;var s=La(t,i);if(t.tag!==0&&s===2){var l=Vr(t);l!==0&&(i=l,s=Vu(t,l))}if(s===1)throw s=vo,Tr(t,0),Zi(t,i),Mn(t,ze()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,wr(t,Sn,wi),Mn(t,ze()),null}function Xu(t,i){var s=vt;vt|=1;try{return t(i)}finally{vt=s,vt===0&&(cs=ze()+500,na&&Wi())}}function Er(t){Ki!==null&&Ki.tag===0&&(vt&6)===0&&fs();var i=vt;vt|=1;var s=kn.transition,l=Mt;try{if(kn.transition=null,Mt=1,t)return t()}finally{Mt=l,kn.transition=s,vt=i,(vt&6)===0&&Wi()}}function ju(){Pn=us.current,Ct(us)}function Tr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Vg(s)),Ht!==null)for(s=Ht.return;s!==null;){var l=s;switch(tu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ea();break;case 3:os(),Ct(vn),Ct(on),gu();break;case 5:pu(l);break;case 4:os();break;case 13:Ct(Dt);break;case 19:Ct(Dt);break;case 10:au(l.type._context);break;case 22:case 23:ju()}s=s.return}if(Qt=t,Ht=t=Qi(t.current,null),sn=Pn=i,Xt=0,vo=null,ku=Ea=Mr=0,Sn=xo=null,xr!==null){for(i=0;i<xr.length;i++)if(s=xr[i],l=s.interleaved,l!==null){s.interleaved=null;var f=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=f,l.next=M}s.pending=l}xr=null}return t}function gh(t,i){do{var s=Ht;try{if(ou(),ha.current=_a,pa){for(var l=Ut.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}pa=!1}if(Sr=0,Zt=Wt=Ut=null,fo=!1,ho=0,zu.current=null,s===null||s.return===null){Xt=1,vo=i,Ht=null;break}e:{var h=t,M=s.return,U=s,B=i;if(i=sn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=B,ye=U,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Oe=Hd(M);if(Oe!==null){Oe.flags&=-257,Gd(Oe,M,U,h,i),Oe.mode&1&&Bd(h,re,i),i=Oe,B=re;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(B),i.updateQueue=Ge}else He.add(B);break e}else{if((i&1)===0){Bd(h,re,i),Yu();break e}B=Error(n(426))}}else if(Pt&&U.mode&1){var kt=Hd(M);if(kt!==null){(kt.flags&65536)===0&&(kt.flags|=256),Gd(kt,M,U,h,i),ru(as(B,U));break e}}h=B=as(B,U),Xt!==4&&(Xt=2),xo===null?xo=[h]:xo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=zd(h,B,i);ad(h,q);break e;case 1:U=B;var G=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(qi===null||!qi.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=kd(h,U,i);ad(h,we);break e}}h=h.return}while(h!==null)}xh(s)}catch(We){i=We,Ht===s&&s!==null&&(Ht=s=s.return);continue}break}while(!0)}function _h(){var t=Ma.current;return Ma.current=_a,t===null?_a:t}function Yu(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Qt===null||(Mr&268435455)===0&&(Ea&268435455)===0||Zi(Qt,sn)}function La(t,i){var s=vt;vt|=2;var l=_h();(Qt!==t||sn!==i)&&(wi=null,Tr(t,i));do try{p_();break}catch(f){gh(t,f)}while(!0);if(ou(),vt=s,Ma.current=l,Ht!==null)throw Error(n(261));return Qt=null,sn=0,Xt}function p_(){for(;Ht!==null;)vh(Ht)}function m_(){for(;Ht!==null&&!it();)vh(Ht)}function vh(t){var i=Mh(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,i===null?xh(t):Ht=i,zu.current=null}function xh(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=a_(s,i,Pn),s!==null){Ht=s;return}}else{if(s=l_(s,i),s!==null){s.flags&=32767,Ht=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xt=6,Ht=null;return}}if(i=i.sibling,i!==null){Ht=i;return}Ht=i=t}while(i!==null);Xt===0&&(Xt=5)}function wr(t,i,s){var l=Mt,f=kn.transition;try{kn.transition=null,Mt=1,g_(t,i,s,l)}finally{kn.transition=f,Mt=l}return null}function g_(t,i,s,l){do fs();while(Ki!==null);if((vt&6)!==0)throw Error(n(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if($m(t,h),t===Qt&&(Ht=Qt=null,sn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||wa||(wa=!0,Eh(nn,function(){return fs(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=kn.transition,kn.transition=null;var M=Mt;Mt=1;var U=vt;vt|=4,zu.current=null,c_(t,s),uh(s,t),Fg(Yl),Bo=!!jl,Yl=jl=null,t.current=s,f_(s),ht(),vt=U,Mt=M,kn.transition=h}else t.current=s;if(wa&&(wa=!1,Ki=t,Aa=f),h=t.pendingLanes,h===0&&(qi=null),Nt(s.stateNode),Mn(t,ze()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)f=i[s],l(f.value,{componentStack:f.stack,digest:f.digest});if(Ta)throw Ta=!1,t=Hu,Hu=null,t;return(Aa&1)!==0&&t.tag!==0&&fs(),h=t.pendingLanes,(h&1)!==0?t===Gu?yo++:(yo=0,Gu=t):yo=0,Wi(),null}function fs(){if(Ki!==null){var t=of(Aa),i=kn.transition,s=Mt;try{if(kn.transition=null,Mt=16>t?16:t,Ki===null)var l=!1;else{if(t=Ki,Ki=null,Aa=0,(vt&6)!==0)throw Error(n(331));var f=vt;for(vt|=4,Be=t.current;Be!==null;){var h=Be,M=h.child;if((Be.flags&16)!==0){var U=h.deletions;if(U!==null){for(var B=0;B<U.length;B++){var re=U[B];for(Be=re;Be!==null;){var ye=Be;switch(ye.tag){case 0:case 11:case 15:_o(8,ye,h)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,Be=Ee;else for(;Be!==null;){ye=Be;var xe=ye.sibling,Oe=ye.return;if(rh(ye),ye===re){Be=null;break}if(xe!==null){xe.return=Oe,Be=xe;break}Be=Oe}}}var He=h.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var kt=Ge.sibling;Ge.sibling=null,Ge=kt}while(Ge!==null)}}Be=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Be=M;else e:for(;Be!==null;){if(h=Be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:_o(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Be=q;break e}Be=h.return}}var G=t.current;for(Be=G;Be!==null;){M=Be;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,Be=$;else e:for(M=G;Be!==null;){if(U=Be,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Sa(9,U)}}catch(We){Ft(U,U.return,We)}if(U===M){Be=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Be=we;break e}Be=U.return}}if(vt=f,Wi(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(ut,t)}catch{}l=!0}return l}finally{Mt=s,kn.transition=i}}return!1}function yh(t,i,s){i=as(s,i),i=zd(t,i,1),t=ji(t,i,1),i=hn(),t!==null&&(Vs(t,1,i),Mn(t,i))}function Ft(t,i,s){if(t.tag===3)yh(t,t,s);else for(;i!==null;){if(i.tag===3){yh(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qi===null||!qi.has(l))){t=as(s,t),t=kd(i,t,1),i=ji(i,t,1),t=hn(),i!==null&&(Vs(i,1,t),Mn(i,t));break}}i=i.return}}function __(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=hn(),t.pingedLanes|=t.suspendedLanes&s,Qt===t&&(sn&s)===s&&(Xt===4||Xt===3&&(sn&130023424)===sn&&500>ze()-Bu?Tr(t,0):ku|=s),Mn(t,i)}function Sh(t,i){i===0&&((t.mode&1)===0?i=1:(i=In,In<<=1,(In&130023424)===0&&(In=4194304)));var s=hn();t=Mi(t,i),t!==null&&(Vs(t,i,s),Mn(t,s))}function v_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Sh(t,s)}function x_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Sh(t,s)}var Mh;Mh=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||vn.current)yn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return yn=!1,o_(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,Pt&&(i.flags&1048576)!==0&&ed(i,ra,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;xa(t,i),t=i.pendingProps;var f=Jr(i,on.current);rs(i,s),f=xu(null,i,l,t,f,s);var h=yu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,xn(l)?(h=!0,ta(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,cu(i),f.updater=ca,i.stateNode=f,f._reactInternals=i,du(i,l,t,s),i=Cu(null,i,l,!0,h,s)):(i.tag=0,Pt&&h&&eu(i),dn(null,i,f,s),i=i.child),i;case 16:l=i.elementType;e:{switch(xa(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=S_(l),t=Kn(l,t),f){case 0:i=Ru(null,i,l,t,s);break e;case 1:i=qd(null,i,l,t,s);break e;case 11:i=Vd(null,i,l,t,s);break e;case 14:i=Wd(null,i,l,Kn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Kn(l,f),Ru(t,i,l,f,s);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Kn(l,f),qd(t,i,l,f,s);case 3:e:{if(Kd(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,od(t,i),ua(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=as(Error(n(423)),i),i=$d(t,i,l,s,f);break e}else if(l!==f){f=as(Error(n(424)),i),i=$d(t,i,l,s,f);break e}else for(Ln=Hi(i.stateNode.containerInfo.firstChild),Cn=i,Pt=!0,qn=null,s=md(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ns(),l===f){i=Ti(t,i,s);break e}dn(t,i,l,s)}i=i.child}return i;case 5:return gd(i),t===null&&iu(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,M=f.children,ql(l,f)?M=null:h!==null&&ql(l,h)&&(i.flags|=32),Yd(t,i),dn(t,i,M,s),i.child;case 6:return t===null&&iu(i),null;case 13:return Zd(t,i,s);case 4:return hu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ss(i,null,l,s):dn(t,i,l,s),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Kn(l,f),Vd(t,i,l,f,s);case 7:return dn(t,i,i.pendingProps,s),i.child;case 8:return dn(t,i,i.pendingProps.children,s),i.child;case 12:return dn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,M=f.value,At(oa,l._currentValue),l._currentValue=M,h!==null)if(Yn(h.value,M)){if(h.children===f.children&&!vn.current){i=Ti(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){M=h.child;for(var B=U.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=Ei(-1,s&-s),B.tag=2;var re=h.updateQueue;if(re!==null){re=re.shared;var ye=re.pending;ye===null?B.next=B:(B.next=ye.next,ye.next=B),re.pending=B}}h.lanes|=s,B=h.alternate,B!==null&&(B.lanes|=s),lu(h.return,s,i),U.lanes|=s;break}B=B.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,U=M.alternate,U!==null&&(U.lanes|=s),lu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}dn(t,i,f.children,s),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,rs(i,s),f=On(f),l=l(f),i.flags|=1,dn(t,i,l,s),i.child;case 14:return l=i.type,f=Kn(l,i.pendingProps),f=Kn(l.type,f),Wd(t,i,l,f,s);case 15:return Xd(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Kn(l,f),xa(t,i),i.tag=1,xn(l)?(t=!0,ta(i)):t=!1,rs(i,s),fd(i,l,f),du(i,l,f,s),Cu(null,i,l,!0,t,s);case 19:return Jd(t,i,s);case 22:return jd(t,i,s)}throw Error(n(156,i.tag))};function Eh(t,i){return qe(t,i)}function y_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,i,s,l){return new y_(t,i,s,l)}function qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S_(t){if(typeof t=="function")return qu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ce)return 11;if(t===ie)return 14}return 2}function Qi(t,i){var s=t.alternate;return s===null?(s=Bn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Pa(t,i,s,l,f,h){var M=2;if(l=t,typeof t=="function")qu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Ar(s.children,f,h,i);case ne:M=8,f|=8;break;case R:return t=Bn(12,s,i,f|2),t.elementType=R,t.lanes=h,t;case Y:return t=Bn(13,s,i,f),t.elementType=Y,t.lanes=h,t;case te:return t=Bn(19,s,i,f),t.elementType=te,t.lanes=h,t;case oe:return ba(s,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:M=10;break e;case me:M=9;break e;case ce:M=11;break e;case ie:M=14;break e;case he:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Bn(M,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Ar(t,i,s,l){return t=Bn(7,t,l,i),t.lanes=s,t}function ba(t,i,s,l){return t=Bn(22,t,l,i),t.elementType=oe,t.lanes=s,t.stateNode={isHidden:!1},t}function Ku(t,i,s){return t=Bn(6,t,null,i),t.lanes=s,t}function $u(t,i,s){return i=Bn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function M_(t,i,s,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Zu(t,i,s,l,f,h,M,U,B){return t=new M_(t,i,s,U,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Bn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(h),t}function E_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function Th(t){if(!t)return Vi;t=t._reactInternals;e:{if(L(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(xn(s))return Zf(t,s,i)}return i}function wh(t,i,s,l,f,h,M,U,B){return t=Zu(s,l,!0,t,f,h,M,U,B),t.context=Th(null),s=t.current,l=hn(),f=$i(s),h=Ei(l,f),h.callback=i??null,ji(s,h,f),t.current.lanes=f,Vs(t,f,l),Mn(t,l),t}function Da(t,i,s,l){var f=i.current,h=hn(),M=$i(f);return s=Th(s),i.context===null?i.context=s:i.pendingContext=s,i=Ei(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ji(f,i,M),t!==null&&(Qn(t,f,M,h),la(t,f,M)),M}function Ua(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function Ah(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Qu(t,i){Ah(t,i),(t=t.alternate)&&Ah(t,i)}function T_(){return null}var Rh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ju(t){this._internalRoot=t}Ia.prototype.render=Ju.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Da(t,i,null,null)},Ia.prototype.unmount=Ju.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Er(function(){Da(null,t,null,null)}),i[vi]=null}};function Ia(t){this._internalRoot=t}Ia.prototype.unstable_scheduleHydration=function(t){if(t){var i=uf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<zi.length&&i!==0&&i<zi[s].priority;s++);zi.splice(s,0,t),s===0&&df(t)}};function ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Na(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ch(){}function w_(t,i,s,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var re=Ua(M);h.call(re)}}var M=wh(i,l,t,0,null,!1,!1,"",Ch);return t._reactRootContainer=M,t[vi]=M.current,io(t.nodeType===8?t.parentNode:t),Er(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var U=l;l=function(){var re=Ua(B);U.call(re)}}var B=Zu(t,0,!1,null,null,!1,!1,"",Ch);return t._reactRootContainer=B,t[vi]=B.current,io(t.nodeType===8?t.parentNode:t),Er(function(){Da(i,B,s,l)}),B}function Fa(t,i,s,l,f){var h=s._reactRootContainer;if(h){var M=h;if(typeof f=="function"){var U=f;f=function(){var B=Ua(M);U.call(B)}}Da(i,M,t,f)}else M=w_(s,i,t,f,l);return Ua(M)}af=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=_i(i.pendingLanes);s!==0&&(Tl(i,s|1),Mn(i,ze()),(vt&6)===0&&(cs=ze()+500,Wi()))}break;case 13:Er(function(){var l=Mi(t,1);if(l!==null){var f=hn();Qn(l,t,1,f)}}),Qu(t,1)}},wl=function(t){if(t.tag===13){var i=Mi(t,134217728);if(i!==null){var s=hn();Qn(i,t,134217728,s)}Qu(t,134217728)}},lf=function(t){if(t.tag===13){var i=$i(t),s=Mi(t,i);if(s!==null){var l=hn();Qn(s,t,i,l)}Qu(t,i)}},uf=function(){return Mt},cf=function(t,i){var s=Mt;try{return Mt=t,i()}finally{Mt=s}},be=function(t,i,s){switch(i){case"input":if(_t(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=Jo(l);if(!f)throw Error(n(90));Z(l),_t(l,f)}}}break;case"textarea":E(t,s);break;case"select":i=s.value,i!=null&&Ye(t,!!s.multiple,i,!1)}},Tt=Xu,Xn=Er;var A_={usingClientEntryPoint:!1,Events:[oo,Zr,Jo,lt,xt,Xu]},So={findFiberByHostInstance:mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},R_={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=le(t),t===null?null:t.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{ut=Oa.inject(R_),_n=Oa}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A_,En.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ec(i))throw Error(n(200));return E_(t,i,null,s)},En.createRoot=function(t,i){if(!ec(t))throw Error(n(299));var s=!1,l="",f=Rh;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Zu(t,1,!1,null,null,s,!1,l,f),t[vi]=i.current,io(t.nodeType===8?t.parentNode:t),new Ju(i)},En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=le(i),t=t===null?null:t.stateNode,t},En.flushSync=function(t){return Er(t)},En.hydrate=function(t,i,s){if(!Na(i))throw Error(n(200));return Fa(null,t,i,!0,s)},En.hydrateRoot=function(t,i,s){if(!ec(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,f=!1,h="",M=Rh;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=wh(i,null,t,1,s??null,f,!1,h,M),t[vi]=i.current,io(t),l)for(t=0;t<l.length;t++)s=l[t],f=s._getVersion,f=f(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,f]:i.mutableSourceEagerHydrationData.push(s,f);return new Ia(i)},En.render=function(t,i,s){if(!Na(i))throw Error(n(200));return Fa(null,t,i,!1,s)},En.unmountComponentAtNode=function(t){if(!Na(t))throw Error(n(40));return t._reactRootContainer?(Er(function(){Fa(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1},En.unstable_batchedUpdates=Xu,En.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Na(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Fa(t,i,s,!1,l)},En.version="18.2.0-next-9e3b772b8-20220608",En}var Fh;function N_(){if(Fh)return ic.exports;Fh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ic.exports=I_(),ic.exports}var Oh;function F_(){if(Oh)return za;Oh=1;var o=N_();return za.createRoot=o.createRoot,za.hydrateRoot=o.hydrateRoot,za}var O_=F_();const Kc="155",ds={ROTATE:0,DOLLY:1,PAN:2},rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},z_=0,zh=1,k_=2,gm=1,B_=2,Di=3,fr=0,wn=1,pi=2,lr=0,Ds=1,kh=2,Bh=3,Hh=4,H_=5,Ps=100,G_=101,V_=102,Gh=103,Vh=104,W_=200,X_=201,j_=202,Y_=203,_m=204,vm=205,q_=206,K_=207,$_=208,Z_=209,Q_=210,J_=0,ev=1,tv=2,kc=3,nv=4,iv=5,rv=6,sv=7,$c=0,ov=1,av=2,ur=0,lv=1,uv=2,cv=3,fv=4,dv=5,xm=300,Is=301,Ns=302,Bc=303,Hc=304,pl=306,Gc=1e3,ri=1001,Vc=1002,mn=1003,Wh=1004,oc=1005,Gn=1006,hv=1007,Uo=1008,cr=1009,pv=1010,mv=1011,Zc=1012,ym=1013,or=1014,ar=1015,Io=1016,Sm=1017,Mm=1018,Ur=1020,gv=1021,si=1023,_v=1024,vv=1025,Ir=1026,Fs=1027,xv=1028,Em=1029,yv=1030,Tm=1031,wm=1033,ac=33776,lc=33777,uc=33778,cc=33779,Xh=35840,jh=35841,Yh=35842,qh=35843,Sv=36196,Kh=37492,$h=37496,Zh=37808,Qh=37809,Jh=37810,ep=37811,tp=37812,np=37813,ip=37814,rp=37815,sp=37816,op=37817,ap=37818,lp=37819,up=37820,cp=37821,fc=36492,Mv=36283,fp=36284,dp=36285,hp=36286,Am=3e3,Nr=3001,Ev=3200,Tv=3201,Rm=0,wv=1,Fr="",ft="srgb",mi="srgb-linear",Cm="display-p3",dc=7680,Av=519,Rv=512,Cv=513,Lv=514,Pv=515,bv=516,Dv=517,Uv=518,Iv=519,pp=35044,mp="300 es",Wc=1035,Ui=2e3,dl=2001;class kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,d=a.length;u<d;u++)a[u].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cl=Math.PI/180,Xc=180/Math.PI;function No(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(cn[o&255]+cn[o>>8&255]+cn[o>>16&255]+cn[o>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]).toLowerCase()}function gn(o,e,n){return Math.max(e,Math.min(n,o))}function Nv(o,e){return(o%e+e)%e}function hc(o,e,n){return(1-n)*o+n*e}function gp(o){return(o&o-1)===0&&o!==0}function jc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Eo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Tn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Fv={DEG2RAD:cl};class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*a+e.x,this.y=u*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,n,r,a,u,d,c,p,m){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,c,p,m)}set(e,n,r,a,u,d,c,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=c,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],c=r[3],p=r[6],m=r[1],_=r[4],x=r[7],v=r[2],S=r[5],w=r[8],T=a[0],y=a[3],g=a[6],O=a[1],C=a[4],b=a[7],N=a[2],k=a[5],I=a[8];return u[0]=d*T+c*O+p*N,u[3]=d*y+c*C+p*k,u[6]=d*g+c*b+p*I,u[1]=m*T+_*O+x*N,u[4]=m*y+_*C+x*k,u[7]=m*g+_*b+x*I,u[2]=v*T+S*O+w*N,u[5]=v*y+S*C+w*k,u[8]=v*g+S*b+w*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],c=e[5],p=e[6],m=e[7],_=e[8];return n*d*_-n*c*m-r*u*_+r*c*p+a*u*m-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],c=e[5],p=e[6],m=e[7],_=e[8],x=_*d-c*m,v=c*p-_*u,S=m*u-d*p,w=n*x+r*v+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=x*T,e[1]=(a*m-_*r)*T,e[2]=(c*r-a*d)*T,e[3]=v*T,e[4]=(_*n-a*p)*T,e[5]=(a*u-c*n)*T,e[6]=S*T,e[7]=(r*p-m*n)*T,e[8]=(d*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,d,c){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*c)+d+e,-a*m,a*p,-a*(-m*d+p*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(pc.makeScale(e,n)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new pt;function Lm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function hl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}const _p={};function Do(o){o in _p||(_p[o]=!0,console.warn(o))}function Us(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ov=new pt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),zv=new pt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function kv(o){return o.convertSRGBToLinear().applyMatrix3(zv)}function Bv(o){return o.applyMatrix3(Ov).convertLinearToSRGB()}const Hv={[mi]:o=>o,[ft]:o=>o.convertSRGBToLinear(),[Cm]:kv},Gv={[mi]:o=>o,[ft]:o=>o.convertLinearToSRGB(),[Cm]:Bv},Jn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return mi},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=Hv[e],a=Gv[n];if(r===void 0||a===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let hs;class Pm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=hl("canvas")),hs.width=e.width,hs.height=e.height;const r=hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=hs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let d=0;d<u.length;d++)u[d]=Us(u[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Us(n[r]/255)*255):n[r]=Us(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vv=0;class bm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=No(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let d=0,c=a.length;d<c;d++)a[d].isDataTexture?u.push(gc(a[d].image)):u.push(gc(a[d]))}else u=gc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function gc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Pm.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wv=0;class Un extends kr{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,r=ri,a=ri,u=Gn,d=Uo,c=si,p=cr,m=Un.DEFAULT_ANISOTROPY,_=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=No(),this.name="",this.source=new bm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=p,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===Nr?ft:Fr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gc:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gc:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ft?Nr:Am}set encoding(e){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Nr?ft:Fr}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=xm;Un.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,n=0,r=0,a=1){tn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*u,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*u,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*u,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],x=p[8],v=p[1],S=p[5],w=p[9],T=p[2],y=p[6],g=p[10];if(Math.abs(_-v)<.01&&Math.abs(x-T)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+T)<.1&&Math.abs(w+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(m+1)/2,b=(S+1)/2,N=(g+1)/2,k=(_+v)/4,I=(x+T)/4,ne=(w+y)/4;return C>b&&C>N?C<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(C),a=k/r,u=I/r):b>N?b<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(b),r=k/a,u=ne/a):N<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(N),r=I/u,a=ne/u),this.set(r,a,u,n),this}let O=Math.sqrt((y-w)*(y-w)+(x-T)*(x-T)+(v-_)*(v-_));return Math.abs(O)<.001&&(O=1),this.x=(y-w)/O,this.y=(x-T)/O,this.z=(v-_)/O,this.w=Math.acos((m+S+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xv extends kr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new tn(0,0,e,n),this.scissorTest=!1,this.viewport=new tn(0,0,e,n);const a={width:e,height:n,depth:1};r.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Nr?ft:Fr),this.texture=new Un(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Gn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new bm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends Xv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Dm extends Un{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=mn,this.minFilter=mn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jv extends Un{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=mn,this.minFilter=mn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,d,c){let p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const v=u[d+0],S=u[d+1],w=u[d+2],T=u[d+3];if(c===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(c===1){e[n+0]=v,e[n+1]=S,e[n+2]=w,e[n+3]=T;return}if(x!==T||p!==v||m!==S||_!==w){let y=1-c;const g=p*v+m*S+_*w+x*T,O=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const N=Math.sqrt(C),k=Math.atan2(N,g*O);y=Math.sin(y*k)/N,c=Math.sin(c*k)/N}const b=c*O;if(p=p*y+v*b,m=m*y+S*b,_=_*y+w*b,x=x*y+T*b,y===1-c){const N=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=N,m*=N,_*=N,x*=N}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,d){const c=r[a],p=r[a+1],m=r[a+2],_=r[a+3],x=u[d],v=u[d+1],S=u[d+2],w=u[d+3];return e[n]=c*w+_*x+p*S-m*v,e[n+1]=p*w+_*v+m*x-c*S,e[n+2]=m*w+_*S+c*v-p*x,e[n+3]=_*w-c*x-p*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const r=e._x,a=e._y,u=e._z,d=e._order,c=Math.cos,p=Math.sin,m=c(r/2),_=c(a/2),x=c(u/2),v=p(r/2),S=p(a/2),w=p(u/2);switch(d){case"XYZ":this._x=v*_*x+m*S*w,this._y=m*S*x-v*_*w,this._z=m*_*w+v*S*x,this._w=m*_*x-v*S*w;break;case"YXZ":this._x=v*_*x+m*S*w,this._y=m*S*x-v*_*w,this._z=m*_*w-v*S*x,this._w=m*_*x+v*S*w;break;case"ZXY":this._x=v*_*x-m*S*w,this._y=m*S*x+v*_*w,this._z=m*_*w+v*S*x,this._w=m*_*x-v*S*w;break;case"ZYX":this._x=v*_*x-m*S*w,this._y=m*S*x+v*_*w,this._z=m*_*w-v*S*x,this._w=m*_*x+v*S*w;break;case"YZX":this._x=v*_*x+m*S*w,this._y=m*S*x+v*_*w,this._z=m*_*w-v*S*x,this._w=m*_*x-v*S*w;break;case"XZY":this._x=v*_*x-m*S*w,this._y=m*S*x-v*_*w,this._z=m*_*w+v*S*x,this._w=m*_*x+v*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],d=n[1],c=n[5],p=n[9],m=n[2],_=n[6],x=n[10],v=r+c+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(d-a)*S}else if(r>c&&r>x){const S=2*Math.sqrt(1+r-c-x);this._w=(_-p)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(u+m)/S}else if(c>x){const S=2*Math.sqrt(1+c-r-x);this._w=(u-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+x-r-c);this._w=(d-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,d=e._w,c=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+d*c+a*m-u*p,this._y=a*_+d*p+u*c-r*m,this._z=u*_+d*m+r*p-a*c,this._w=d*_-r*c-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,d=this._w;let c=d*e._w+r*e._x+a*e._y+u*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=d,this._x=r,this._y=a,this._z=u,this;const p=1-c*c;if(p<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this._onChangeCallback(),this}const m=Math.sqrt(p),_=Math.atan2(m,c),x=Math.sin((1-n)*_)/m,v=Math.sin(n*_)/m;return this._w=d*x+this._w*v,this._x=r*x+this._x*v,this._y=a*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(n*Math.cos(a),r*Math.sin(u),r*Math.cos(u),n*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,d=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*d,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*d,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,d=e.y,c=e.z,p=e.w,m=p*n+d*a-c*r,_=p*r+c*n-u*a,x=p*a+u*r-d*n,v=-u*n-d*r-c*a;return this.x=m*p+v*-u+_*-c-x*-d,this.y=_*p+v*-d+x*-u-m*-c,this.z=x*p+v*-c+m*-d-_*-u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,d=n.x,c=n.y,p=n.z;return this.x=a*p-u*c,this.y=u*d-r*p,this.z=r*c-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new X,vp=new dr;class Br{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox),ps.applyMatrix4(e.matrixWorld),this.union(ps);else{const a=e.geometry;if(a!==void 0)if(n&&a.attributes!==void 0&&a.attributes.position!==void 0){const u=a.attributes.position;for(let d=0,c=u.count;d<c;d++)Ri.fromBufferAttribute(u,d).applyMatrix4(e.matrixWorld),this.expandByPoint(Ri)}else a.boundingBox===null&&a.computeBoundingBox(),ps.copy(a.boundingBox),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const r=e.children;for(let a=0,u=r.length;a<u;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),ka.subVectors(this.max,To),ms.subVectors(e.a,To),gs.subVectors(e.b,To),_s.subVectors(e.c,To),er.subVectors(gs,ms),tr.subVectors(_s,gs),Rr.subVectors(ms,_s);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Rr.z,Rr.y,er.z,0,-er.x,tr.z,0,-tr.x,Rr.z,0,-Rr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Rr.y,Rr.x,0];return!vc(n,ms,gs,_s,ka)||(n=[1,0,0,0,1,0,0,0,1],!vc(n,ms,gs,_s,ka))?!1:(Ba.crossVectors(er,tr),n=[Ba.x,Ba.y,Ba.z],vc(n,ms,gs,_s,ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new X,new X,new X,new X,new X,new X,new X,new X],Ri=new X,ps=new Br,ms=new X,gs=new X,_s=new X,er=new X,tr=new X,Rr=new X,To=new X,ka=new X,Ba=new X,Cr=new X;function vc(o,e,n,r,a){for(let u=0,d=o.length-3;u<=d;u+=3){Cr.fromArray(o,u);const c=a.x*Math.abs(Cr.x)+a.y*Math.abs(Cr.y)+a.z*Math.abs(Cr.z),p=e.dot(Cr),m=n.dot(Cr),_=r.dot(Cr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>c)return!1}return!0}const Yv=new Br,wo=new X,xc=new X;class zs{constructor(e=new X,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Yv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,d=e.length;u<d;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const n=wo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(wo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(xc)),this.expandByPoint(wo.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new X,yc=new X,Ha=new X,nr=new X,Sc=new X,Ga=new X,Mc=new X;class Qc{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){yc.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(yc);const u=e.distanceTo(n)*.5,d=-this.direction.dot(Ha),c=nr.dot(this.direction),p=-nr.dot(Ha),m=nr.lengthSq(),_=Math.abs(1-d*d);let x,v,S,w;if(_>0)if(x=d*p-c,v=d*c-p,w=u*_,x>=0)if(v>=-w)if(v<=w){const T=1/_;x*=T,v*=T,S=x*(x+d*v+2*c)+v*(d*x+v+2*p)+m}else v=u,x=Math.max(0,-(d*v+c)),S=-x*x+v*(v+2*p)+m;else v=-u,x=Math.max(0,-(d*v+c)),S=-x*x+v*(v+2*p)+m;else v<=-w?(x=Math.max(0,-(-d*u+c)),v=x>0?-u:Math.min(Math.max(-u,-p),u),S=-x*x+v*(v+2*p)+m):v<=w?(x=0,v=Math.min(Math.max(-u,-p),u),S=v*(v+2*p)+m):(x=Math.max(0,-(d*u+c)),v=x>0?u:Math.min(Math.max(-u,-p),u),S=-x*x+v*(v+2*p)+m);else v=d>0?-u:u,x=Math.max(0,-(d*v+c)),S=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(yc).addScaledVector(Ha,v),S}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const r=Ci.dot(this.direction),a=Ci.dot(Ci)-r*r,u=e.radius*e.radius;if(a>u)return null;const d=Math.sqrt(u-a),c=r-d,p=r+d;return p<0?null:c<0?this.at(p,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,d,c,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),_>=0?(u=(e.min.y-v.y)*_,d=(e.max.y-v.y)*_):(u=(e.max.y-v.y)*_,d=(e.min.y-v.y)*_),r>d||u>a||((u>r||isNaN(r))&&(r=u),(d<a||isNaN(a))&&(a=d),x>=0?(c=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(c=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),r>p||c>a)||((c>r||r!==r)&&(r=c),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,r,a,u){Sc.subVectors(n,e),Ga.subVectors(r,e),Mc.crossVectors(Sc,Ga);let d=this.direction.dot(Mc),c;if(d>0){if(a)return null;c=1}else if(d<0)c=-1,d=-d;else return null;nr.subVectors(this.origin,e);const p=c*this.direction.dot(Ga.crossVectors(nr,Ga));if(p<0)return null;const m=c*this.direction.dot(Sc.cross(nr));if(m<0||p+m>d)return null;const _=-c*nr.dot(Mc);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,n,r,a,u,d,c,p,m,_,x,v,S,w,T,y){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,c,p,m,_,x,v,S,w,T,y)}set(e,n,r,a,u,d,c,p,m,_,x,v,S,w,T,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=d,g[9]=c,g[13]=p,g[2]=m,g[6]=_,g[10]=x,g[14]=v,g[3]=S,g[7]=w,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/vs.setFromMatrixColumn(e,0).length(),u=1/vs.setFromMatrixColumn(e,1).length(),d=1/vs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,d=Math.cos(r),c=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=d*_,S=d*x,w=c*_,T=c*x;n[0]=p*_,n[4]=-p*x,n[8]=m,n[1]=S+w*m,n[5]=v-T*m,n[9]=-c*p,n[2]=T-v*m,n[6]=w+S*m,n[10]=d*p}else if(e.order==="YXZ"){const v=p*_,S=p*x,w=m*_,T=m*x;n[0]=v+T*c,n[4]=w*c-S,n[8]=d*m,n[1]=d*x,n[5]=d*_,n[9]=-c,n[2]=S*c-w,n[6]=T+v*c,n[10]=d*p}else if(e.order==="ZXY"){const v=p*_,S=p*x,w=m*_,T=m*x;n[0]=v-T*c,n[4]=-d*x,n[8]=w+S*c,n[1]=S+w*c,n[5]=d*_,n[9]=T-v*c,n[2]=-d*m,n[6]=c,n[10]=d*p}else if(e.order==="ZYX"){const v=d*_,S=d*x,w=c*_,T=c*x;n[0]=p*_,n[4]=w*m-S,n[8]=v*m+T,n[1]=p*x,n[5]=T*m+v,n[9]=S*m-w,n[2]=-m,n[6]=c*p,n[10]=d*p}else if(e.order==="YZX"){const v=d*p,S=d*m,w=c*p,T=c*m;n[0]=p*_,n[4]=T-v*x,n[8]=w*x+S,n[1]=x,n[5]=d*_,n[9]=-c*_,n[2]=-m*_,n[6]=S*x+w,n[10]=v-T*x}else if(e.order==="XZY"){const v=d*p,S=d*m,w=c*p,T=c*m;n[0]=p*_,n[4]=-x,n[8]=m*_,n[1]=v*x+T,n[5]=d*_,n[9]=S*x-w,n[2]=w*x-S,n[6]=c*_,n[10]=T*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qv,e,Kv)}lookAt(e,n,r){const a=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),ir.crossVectors(r,bn),ir.lengthSq()===0&&(Math.abs(r.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),ir.crossVectors(r,bn)),ir.normalize(),Va.crossVectors(bn,ir),a[0]=ir.x,a[4]=Va.x,a[8]=bn.x,a[1]=ir.y,a[5]=Va.y,a[9]=bn.y,a[2]=ir.z,a[6]=Va.z,a[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],c=r[4],p=r[8],m=r[12],_=r[1],x=r[5],v=r[9],S=r[13],w=r[2],T=r[6],y=r[10],g=r[14],O=r[3],C=r[7],b=r[11],N=r[15],k=a[0],I=a[4],ne=a[8],R=a[12],D=a[1],me=a[5],ce=a[9],Y=a[13],te=a[2],ie=a[6],he=a[10],oe=a[14],V=a[3],se=a[7],A=a[11],F=a[15];return u[0]=d*k+c*D+p*te+m*V,u[4]=d*I+c*me+p*ie+m*se,u[8]=d*ne+c*ce+p*he+m*A,u[12]=d*R+c*Y+p*oe+m*F,u[1]=_*k+x*D+v*te+S*V,u[5]=_*I+x*me+v*ie+S*se,u[9]=_*ne+x*ce+v*he+S*A,u[13]=_*R+x*Y+v*oe+S*F,u[2]=w*k+T*D+y*te+g*V,u[6]=w*I+T*me+y*ie+g*se,u[10]=w*ne+T*ce+y*he+g*A,u[14]=w*R+T*Y+y*oe+g*F,u[3]=O*k+C*D+b*te+N*V,u[7]=O*I+C*me+b*ie+N*se,u[11]=O*ne+C*ce+b*he+N*A,u[15]=O*R+C*Y+b*oe+N*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],d=e[1],c=e[5],p=e[9],m=e[13],_=e[2],x=e[6],v=e[10],S=e[14],w=e[3],T=e[7],y=e[11],g=e[15];return w*(+u*p*x-a*m*x-u*c*v+r*m*v+a*c*S-r*p*S)+T*(+n*p*S-n*m*v+u*d*v-a*d*S+a*m*_-u*p*_)+y*(+n*m*x-n*c*S-u*d*x+r*d*S+u*c*_-r*m*_)+g*(-a*c*_-n*p*x+n*c*v+a*d*x-r*d*v+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],c=e[5],p=e[6],m=e[7],_=e[8],x=e[9],v=e[10],S=e[11],w=e[12],T=e[13],y=e[14],g=e[15],O=x*y*m-T*v*m+T*p*S-c*y*S-x*p*g+c*v*g,C=w*v*m-_*y*m-w*p*S+d*y*S+_*p*g-d*v*g,b=_*T*m-w*x*m+w*c*S-d*T*S-_*c*g+d*x*g,N=w*x*p-_*T*p-w*c*v+d*T*v+_*c*y-d*x*y,k=n*O+r*C+a*b+u*N;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return e[0]=O*I,e[1]=(T*v*u-x*y*u-T*a*S+r*y*S+x*a*g-r*v*g)*I,e[2]=(c*y*u-T*p*u+T*a*m-r*y*m-c*a*g+r*p*g)*I,e[3]=(x*p*u-c*v*u-x*a*m+r*v*m+c*a*S-r*p*S)*I,e[4]=C*I,e[5]=(_*y*u-w*v*u+w*a*S-n*y*S-_*a*g+n*v*g)*I,e[6]=(w*p*u-d*y*u-w*a*m+n*y*m+d*a*g-n*p*g)*I,e[7]=(d*v*u-_*p*u+_*a*m-n*v*m-d*a*S+n*p*S)*I,e[8]=b*I,e[9]=(w*x*u-_*T*u-w*r*S+n*T*S+_*r*g-n*x*g)*I,e[10]=(d*T*u-w*c*u+w*r*m-n*T*m-d*r*g+n*c*g)*I,e[11]=(_*c*u-d*x*u-_*r*m+n*x*m+d*r*S-n*c*S)*I,e[12]=N*I,e[13]=(_*T*a-w*x*a+w*r*v-n*T*v-_*r*y+n*x*y)*I,e[14]=(w*c*a-d*T*a-w*r*p+n*T*p+d*r*y-n*c*y)*I,e[15]=(d*x*a-_*c*a+_*r*p-n*x*p-d*r*v+n*c*v)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,d=e.x,c=e.y,p=e.z,m=u*d,_=u*c;return this.set(m*d+r,m*c-a*p,m*p+a*c,0,m*c+a*p,_*c+r,_*p-a*d,0,m*p-a*c,_*p+a*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,d){return this.set(1,r,u,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,d=n._y,c=n._z,p=n._w,m=u+u,_=d+d,x=c+c,v=u*m,S=u*_,w=u*x,T=d*_,y=d*x,g=c*x,O=p*m,C=p*_,b=p*x,N=r.x,k=r.y,I=r.z;return a[0]=(1-(T+g))*N,a[1]=(S+b)*N,a[2]=(w-C)*N,a[3]=0,a[4]=(S-b)*k,a[5]=(1-(v+g))*k,a[6]=(y+O)*k,a[7]=0,a[8]=(w+C)*I,a[9]=(y-O)*I,a[10]=(1-(v+T))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=vs.set(a[0],a[1],a[2]).length();const d=vs.set(a[4],a[5],a[6]).length(),c=vs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ei.copy(this);const m=1/u,_=1/d,x=1/c;return ei.elements[0]*=m,ei.elements[1]*=m,ei.elements[2]*=m,ei.elements[4]*=_,ei.elements[5]*=_,ei.elements[6]*=_,ei.elements[8]*=x,ei.elements[9]*=x,ei.elements[10]*=x,n.setFromRotationMatrix(ei),r.x=u,r.y=d,r.z=c,this}makePerspective(e,n,r,a,u,d,c=Ui){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),x=(n+e)/(n-e),v=(r+a)/(r-a);let S,w;if(c===Ui)S=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(c===dl)S=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,d,c=Ui){const p=this.elements,m=1/(n-e),_=1/(r-a),x=1/(d-u),v=(n+e)*m,S=(r+a)*_;let w,T;if(c===Ui)w=(d+u)*x,T=-2*x;else if(c===dl)w=u*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const vs=new X,ei=new It,qv=new X(0,0,0),Kv=new X(1,1,1),ir=new X,Va=new X,bn=new X,xp=new It,yp=new dr;class ml{constructor(e=0,n=0,r=0,a=ml.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],d=a[4],c=a[8],p=a[1],m=a[5],_=a[9],x=a[2],v=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(gn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-gn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(gn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(c,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return yp.setFromEuler(this),this.setFromQuaternion(yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ml.DEFAULT_ORDER="XYZ";class Um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $v=0;const Sp=new X,xs=new dr,Li=new It,Wa=new X,Ao=new X,Zv=new X,Qv=new dr,Mp=new X(1,0,0),Ep=new X(0,1,0),Tp=new X(0,0,1),Jv={type:"added"},wp={type:"removed"};class jt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new X,n=new ml,r=new dr,a=new X(1,1,1);function u(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new It},normalMatrix:{value:new pt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Mp,e)}rotateY(e){return this.rotateOnAxis(Ep,e)}rotateZ(e){return this.rotateOnAxis(Tp,e)}translateOnAxis(e,n){return Sp.copy(e).applyQuaternion(this.quaternion),this.position.add(Sp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mp,e)}translateY(e){return this.translateOnAxis(Ep,e)}translateZ(e){return this.translateOnAxis(Tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Wa.copy(e):Wa.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ao,Wa,this.up):Li.lookAt(Wa,Ao,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),xs.setFromRotationMatrix(Li),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(wp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n){let r=[];this[e]===n&&r.push(this);for(let a=0,u=this.children.length;a<u;a++){const d=this.children[a].getObjectsByProperty(e,n);d.length>0&&(r=r.concat(d))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,Zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Qv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const u=n[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let u=0,d=a.length;u<d;u++){const c=a[u];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function u(c,p){return c[p.uuid]===void 0&&(c[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const p=c.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let p=0,m=this.material.length;p<m;p++)c.push(u(e.materials,this.material[p]));a.material=c}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const p=this.animations[c];a.animations.push(u(e.animations,p))}}if(n){const c=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),x=d(e.shapes),v=d(e.skeletons),S=d(e.animations),w=d(e.nodes);c.length>0&&(r.geometries=c),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function d(c){const p=[];for(const m in c){const _=c[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}jt.DEFAULT_UP=new X(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new X,Pi=new X,Ec=new X,bi=new X,ys=new X,Ss=new X,Ap=new X,Tc=new X,wc=new X,Ac=new X;let Xa=!1;class ii{constructor(e=new X,n=new X,r=new X){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ti.subVectors(e,n),a.cross(ti);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ti.subVectors(a,n),Pi.subVectors(r,n),Ec.subVectors(e,n);const d=ti.dot(ti),c=ti.dot(Pi),p=ti.dot(Ec),m=Pi.dot(Pi),_=Pi.dot(Ec),x=d*m-c*c;if(x===0)return u.set(-2,-1,-1);const v=1/x,S=(m*p-c*_)*v,w=(d*_-c*p)*v;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,bi),bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,n,r,a,u,d,c,p){return Xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xa=!0),this.getInterpolation(e,n,r,a,u,d,c,p)}static getInterpolation(e,n,r,a,u,d,c,p){return this.getBarycoord(e,n,r,a,bi),p.setScalar(0),p.addScaledVector(u,bi.x),p.addScaledVector(d,bi.y),p.addScaledVector(c,bi.z),p}static isFrontFacing(e,n,r,a){return ti.subVectors(r,n),Pi.subVectors(e,n),ti.cross(Pi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ti.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,a,u){return Xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xa=!0),ii.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}getInterpolation(e,n,r,a,u){return ii.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let d,c;ys.subVectors(a,r),Ss.subVectors(u,r),Tc.subVectors(e,r);const p=ys.dot(Tc),m=Ss.dot(Tc);if(p<=0&&m<=0)return n.copy(r);wc.subVectors(e,a);const _=ys.dot(wc),x=Ss.dot(wc);if(_>=0&&x<=_)return n.copy(a);const v=p*x-_*m;if(v<=0&&p>=0&&_<=0)return d=p/(p-_),n.copy(r).addScaledVector(ys,d);Ac.subVectors(e,u);const S=ys.dot(Ac),w=Ss.dot(Ac);if(w>=0&&S<=w)return n.copy(u);const T=S*m-p*w;if(T<=0&&m>=0&&w<=0)return c=m/(m-w),n.copy(r).addScaledVector(Ss,c);const y=_*w-S*x;if(y<=0&&x-_>=0&&S-w>=0)return Ap.subVectors(u,a),c=(x-_)/(x-_+(S-w)),n.copy(a).addScaledVector(Ap,c);const g=1/(y+T+v);return d=T*g,c=v*g,n.copy(r).addScaledVector(ys,d).addScaledVector(Ss,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let e0=0;class ks extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=No(),this.name="",this.type="Material",this.blending=Ds,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_m,this.blendDst=vm,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=kc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dc,this.stencilZFail=dc,this.stencilZPass=dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const d=[];for(const c in u){const p=u[c];delete p.metadata,d.push(p)}return d}if(n){const u=a(e.textures),d=a(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Rc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class gt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jn.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Jn.workingColorSpace){return this.r=e,this.g=n,this.b=r,Jn.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Jn.workingColorSpace){if(e=Nv(e,1),n=gn(n,0,1),r=gn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,d=2*r-u;this.r=Rc(d,u,e+1/3),this.g=Rc(d,u,e),this.b=Rc(d,u,e-1/3)}return Jn.toWorkingColorSpace(this,a),this}setStyle(e,n=ft){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=a[1],c=a[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ft){const r=Im[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Jn.fromWorkingColorSpace(fn.copy(this),e),Math.round(gn(fn.r*255,0,255))*65536+Math.round(gn(fn.g*255,0,255))*256+Math.round(gn(fn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Jn.workingColorSpace){Jn.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,a=fn.g,u=fn.b,d=Math.max(r,a,u),c=Math.min(r,a,u);let p,m;const _=(c+d)/2;if(c===d)p=0,m=0;else{const x=d-c;switch(m=_<=.5?x/(d+c):x/(2-d-c),d){case r:p=(a-u)/x+(a<u?6:0);break;case a:p=(u-r)/x+2;break;case u:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Jn.workingColorSpace){return Jn.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=ft){Jn.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,a=fn.b;return e!==ft?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(ni),ni.h+=e,ni.s+=n,ni.l+=r,this.setHSL(ni.h,ni.s,ni.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ni),e.getHSL(ja);const r=hc(ni.h,ja.h,n),a=hc(ni.s,ja.s,n),u=hc(ni.l,ja.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new gt;gt.NAMES=Im;class Nm extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new X,Ya=new at;class ai{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=pp,this.updateRange={offset:0,count:-1},this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Ya.fromBufferAttribute(this,n),Ya.applyMatrix3(e),this.setXY(n,Ya.x,Ya.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array),u=Tn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Fm extends ai{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Om extends ai{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Yt extends ai{constructor(e,n,r){super(new Float32Array(e),n,r)}}let t0=0;const Hn=new It,Cc=new jt,Ms=new X,Dn=new Br,Ro=new Br,en=new X;class Wn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lm(e)?Om:Fm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,r){return Hn.makeTranslation(e,n,r),this.applyMatrix4(Hn),this}scale(e,n,r){return Hn.makeScale(e,n,r),this.applyMatrix4(Hn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Yt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Dn.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let u=0,d=n.length;u<d;u++){const c=n[u];Ro.setFromBufferAttribute(c),this.morphTargetsRelative?(en.addVectors(Dn.min,Ro.min),Dn.expandByPoint(en),en.addVectors(Dn.max,Ro.max),Dn.expandByPoint(en)):(Dn.expandByPoint(Ro.min),Dn.expandByPoint(Ro.max))}Dn.getCenter(r);let a=0;for(let u=0,d=e.count;u<d;u++)en.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(en));if(n)for(let u=0,d=n.length;u<d;u++){const c=n[u],p=this.morphTargetsRelative;for(let m=0,_=c.count;m<_;m++)en.fromBufferAttribute(c,m),p&&(Ms.fromBufferAttribute(e,m),en.add(Ms)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=n.position.array,u=n.normal.array,d=n.uv.array,c=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*c),4));const p=this.getAttribute("tangent").array,m=[],_=[];for(let D=0;D<c;D++)m[D]=new X,_[D]=new X;const x=new X,v=new X,S=new X,w=new at,T=new at,y=new at,g=new X,O=new X;function C(D,me,ce){x.fromArray(a,D*3),v.fromArray(a,me*3),S.fromArray(a,ce*3),w.fromArray(d,D*2),T.fromArray(d,me*2),y.fromArray(d,ce*2),v.sub(x),S.sub(x),T.sub(w),y.sub(w);const Y=1/(T.x*y.y-y.x*T.y);isFinite(Y)&&(g.copy(v).multiplyScalar(y.y).addScaledVector(S,-T.y).multiplyScalar(Y),O.copy(S).multiplyScalar(T.x).addScaledVector(v,-y.x).multiplyScalar(Y),m[D].add(g),m[me].add(g),m[ce].add(g),_[D].add(O),_[me].add(O),_[ce].add(O))}let b=this.groups;b.length===0&&(b=[{start:0,count:r.length}]);for(let D=0,me=b.length;D<me;++D){const ce=b[D],Y=ce.start,te=ce.count;for(let ie=Y,he=Y+te;ie<he;ie+=3)C(r[ie+0],r[ie+1],r[ie+2])}const N=new X,k=new X,I=new X,ne=new X;function R(D){I.fromArray(u,D*3),ne.copy(I);const me=m[D];N.copy(me),N.sub(I.multiplyScalar(I.dot(me))).normalize(),k.crossVectors(ne,me);const Y=k.dot(_[D])<0?-1:1;p[D*4]=N.x,p[D*4+1]=N.y,p[D*4+2]=N.z,p[D*4+3]=Y}for(let D=0,me=b.length;D<me;++D){const ce=b[D],Y=ce.start,te=ce.count;for(let ie=Y,he=Y+te;ie<he;ie+=3)R(r[ie+0]),R(r[ie+1]),R(r[ie+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new X,u=new X,d=new X,c=new X,p=new X,m=new X,_=new X,x=new X;if(e)for(let v=0,S=e.count;v<S;v+=3){const w=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,y),_.subVectors(d,u),x.subVectors(a,u),_.cross(x),c.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),c.add(_),p.add(_),m.add(_),r.setXYZ(w,c.x,c.y,c.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)a.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),d.fromBufferAttribute(n,v+2),_.subVectors(d,u),x.subVectors(a,u),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(c,p){const m=c.array,_=c.itemSize,x=c.normalized,v=new m.constructor(p.length*_);let S=0,w=0;for(let T=0,y=p.length;T<y;T++){c.isInterleavedBufferAttribute?S=p[T]*c.data.stride+c.offset:S=p[T]*_;for(let g=0;g<_;g++)v[w++]=m[S++]}return new ai(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wn,r=this.index.array,a=this.attributes;for(const c in a){const p=a[c],m=e(p,r);n.setAttribute(c,m)}const u=this.morphAttributes;for(const c in u){const p=[],m=u[c];for(let _=0,x=m.length;_<x;_++){const v=m[_],S=e(v,r);p.push(S)}n.morphAttributes[c]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let c=0,p=d.length;c<p;c++){const m=d[c];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,v=m.length;x<v;x++){const S=m[x];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],x=u[m];for(let v=0,S=x.length;v<S;v++)_.push(x[v].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rp=new It,Lr=new Qc,qa=new zs,Cp=new X,Es=new X,Ts=new X,ws=new X,Lc=new X,Ka=new X,$a=new at,Za=new at,Qa=new at,Lp=new X,Pp=new X,bp=new X,Ja=new X,el=new X;class oi extends jt{constructor(e=new Wn,n=new Nm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const c=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(u&&c){Ka.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=c[p],x=u[p];_!==0&&(Lc.fromBufferAttribute(x,e),d?Ka.addScaledVector(Lc,_):Ka.addScaledVector(Lc.sub(n),_))}n.add(Ka)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),qa.copy(r.boundingSphere),qa.applyMatrix4(u),Lr.copy(e.ray).recast(e.near),!(qa.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(qa,Cp)===null||Lr.origin.distanceToSquared(Cp)>(e.far-e.near)**2))&&(Rp.copy(u).invert(),Lr.copy(e.ray).applyMatrix4(Rp),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,d=this.material,c=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,v=u.groups,S=u.drawRange;if(c!==null)if(Array.isArray(d))for(let w=0,T=v.length;w<T;w++){const y=v[w],g=d[y.materialIndex],O=Math.max(y.start,S.start),C=Math.min(c.count,Math.min(y.start+y.count,S.start+S.count));for(let b=O,N=C;b<N;b+=3){const k=c.getX(b),I=c.getX(b+1),ne=c.getX(b+2);a=tl(this,g,e,r,m,_,x,k,I,ne),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),T=Math.min(c.count,S.start+S.count);for(let y=w,g=T;y<g;y+=3){const O=c.getX(y),C=c.getX(y+1),b=c.getX(y+2);a=tl(this,d,e,r,m,_,x,O,C,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,T=v.length;w<T;w++){const y=v[w],g=d[y.materialIndex],O=Math.max(y.start,S.start),C=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let b=O,N=C;b<N;b+=3){const k=b,I=b+1,ne=b+2;a=tl(this,g,e,r,m,_,x,k,I,ne),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let y=w,g=T;y<g;y+=3){const O=y,C=y+1,b=y+2;a=tl(this,d,e,r,m,_,x,O,C,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function n0(o,e,n,r,a,u,d,c){let p;if(e.side===wn?p=r.intersectTriangle(d,u,a,!0,c):p=r.intersectTriangle(a,u,d,e.side===fr,c),p===null)return null;el.copy(c),el.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(el);return m<n.near||m>n.far?null:{distance:m,point:el.clone(),object:o}}function tl(o,e,n,r,a,u,d,c,p,m){o.getVertexPosition(c,Es),o.getVertexPosition(p,Ts),o.getVertexPosition(m,ws);const _=n0(o,e,n,r,Es,Ts,ws,Ja);if(_){a&&($a.fromBufferAttribute(a,c),Za.fromBufferAttribute(a,p),Qa.fromBufferAttribute(a,m),_.uv=ii.getInterpolation(Ja,Es,Ts,ws,$a,Za,Qa,new at)),u&&($a.fromBufferAttribute(u,c),Za.fromBufferAttribute(u,p),Qa.fromBufferAttribute(u,m),_.uv1=ii.getInterpolation(Ja,Es,Ts,ws,$a,Za,Qa,new at),_.uv2=_.uv1),d&&(Lp.fromBufferAttribute(d,c),Pp.fromBufferAttribute(d,p),bp.fromBufferAttribute(d,m),_.normal=ii.getInterpolation(Ja,Es,Ts,ws,Lp,Pp,bp,new X),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:c,b:p,c:m,normal:new X,materialIndex:0};ii.getNormal(Es,Ts,ws,x.normal),_.face=x}return _}class Fo extends Wn{constructor(e=1,n=1,r=1,a=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:d};const c=this;a=Math.floor(a),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],_=[],x=[];let v=0,S=0;w("z","y","x",-1,-1,r,n,e,d,u,0),w("z","y","x",1,-1,r,n,-e,d,u,1),w("x","z","y",1,1,e,r,n,a,d,2),w("x","z","y",1,-1,e,r,-n,a,d,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(x,2));function w(T,y,g,O,C,b,N,k,I,ne,R){const D=b/I,me=N/ne,ce=b/2,Y=N/2,te=k/2,ie=I+1,he=ne+1;let oe=0,V=0;const se=new X;for(let A=0;A<he;A++){const F=A*me-Y;for(let W=0;W<ie;W++){const _e=W*D-ce;se[T]=_e*O,se[y]=F*C,se[g]=te,m.push(se.x,se.y,se.z),se[T]=0,se[y]=0,se[g]=k>0?1:-1,_.push(se.x,se.y,se.z),x.push(W/I),x.push(1-A/ne),oe+=1}}for(let A=0;A<ne;A++)for(let F=0;F<I;F++){const W=v+F+ie*A,_e=v+F+ie*(A+1),ge=v+(F+1)+ie*(A+1),Se=v+(F+1)+ie*A;p.push(W,_e,Se),p.push(_e,ge,Se),V+=6}c.addGroup(S,V,R),S+=V,v+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function pn(o){const e={};for(let n=0;n<o.length;n++){const r=Os(o[n]);for(const a in r)e[a]=r[a]}return e}function i0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function zm(o){return o.getRenderTarget()===null?o.outputColorSpace:mi}const r0={clone:Os,merge:pn};var s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=i0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class km extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vn extends km{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xc*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,a,u,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*a/p,n-=d.offsetY*r/m,a*=d.width/p,r*=d.height/m}const c=this.filmOffset;c!==0&&(u+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,Rs=1;class a0 extends jt{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const a=new Vn(As,Rs,e,n);a.layers=this.layers,this.add(a);const u=new Vn(As,Rs,e,n);u.layers=this.layers,this.add(u);const d=new Vn(As,Rs,e,n);d.layers=this.layers,this.add(d);const c=new Vn(As,Rs,e,n);c.layers=this.layers,this.add(c);const p=new Vn(As,Rs,e,n);p.layers=this.layers,this.add(p);const m=new Vn(As,Rs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,d,c,p]=n;for(const m of n)this.remove(m);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,d,c,p,m]=this.children,_=e.getRenderTarget(),x=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(n,a),e.setRenderTarget(r,1),e.render(n,u),e.setRenderTarget(r,2),e.render(n,d),e.setRenderTarget(r,3),e.render(n,c),e.setRenderTarget(r,4),e.render(n,p),r.texture.generateMipmaps=v,e.setRenderTarget(r,5),e.render(n,m),e.setRenderTarget(_),e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class Bm extends Un{constructor(e,n,r,a,u,d,c,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Is,super(e,n,r,a,u,d,c,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l0 extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];n.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nr?ft:Fr),this.texture=new Bm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Fo(5,5,5),u=new zr({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:wn,blending:lr});u.uniforms.tEquirect.value=n;const d=new oi(a,u),c=n.minFilter;return n.minFilter===Uo&&(n.minFilter=Gn),new a0(1,10,this).update(e,d),n.minFilter=c,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(u)}}const Pc=new X,u0=new X,c0=new pt;class sr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Pc.subVectors(r,n).cross(u0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Pc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||c0.getNormalMatrix(e),a=this.coplanarPoint(Pc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new zs,nl=new X;class Jc{constructor(e=new sr,n=new sr,r=new sr,a=new sr,u=new sr,d=new sr){this.planes=[e,n,r,a,u,d]}set(e,n,r,a,u,d){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(r),c[3].copy(a),c[4].copy(u),c[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ui){const r=this.planes,a=e.elements,u=a[0],d=a[1],c=a[2],p=a[3],m=a[4],_=a[5],x=a[6],v=a[7],S=a[8],w=a[9],T=a[10],y=a[11],g=a[12],O=a[13],C=a[14],b=a[15];if(r[0].setComponents(p-u,v-m,y-S,b-g).normalize(),r[1].setComponents(p+u,v+m,y+S,b+g).normalize(),r[2].setComponents(p+d,v+_,y+w,b+O).normalize(),r[3].setComponents(p-d,v-_,y-w,b-O).normalize(),r[4].setComponents(p-c,v-x,y-T,b-C).normalize(),n===Ui)r[5].setComponents(p+c,v+x,y+T,b+C).normalize();else if(n===dl)r[5].setComponents(c,x,T,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(nl.x=a.normal.x>0?e.max.x:e.min.x,nl.y=a.normal.y>0?e.max.y:e.min.y,nl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hm(){let o=null,e=!1,n=null,r=null;function a(u,d){n(u,d),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function f0(o,e){const n=e.isWebGL2,r=new WeakMap;function a(m,_){const x=m.array,v=m.usage,S=o.createBuffer();o.bindBuffer(_,S),o.bufferData(_,x,v),m.onUploadCallback();let w;if(x instanceof Float32Array)w=o.FLOAT;else if(x instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(n)w=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)w=o.SHORT;else if(x instanceof Uint32Array)w=o.UNSIGNED_INT;else if(x instanceof Int32Array)w=o.INT;else if(x instanceof Int8Array)w=o.BYTE;else if(x instanceof Uint8Array)w=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)w=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:S,type:w,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version}}function u(m,_,x){const v=_.array,S=_.updateRange;o.bindBuffer(x,m),S.count===-1?o.bufferSubData(x,0,v):(n?o.bufferSubData(x,S.offset*v.BYTES_PER_ELEMENT,v,S.offset,S.count):o.bufferSubData(x,S.offset*v.BYTES_PER_ELEMENT,v.subarray(S.offset,S.offset+S.count)),S.count=-1),_.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const _=r.get(m);_&&(o.deleteBuffer(_.buffer),r.delete(m))}function p(m,_){if(m.isGLBufferAttribute){const v=r.get(m);(!v||v.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const x=r.get(m);x===void 0?r.set(m,a(m,_)):x.version<m.version&&(u(x.buffer,m,_),x.version=m.version)}return{get:d,remove:c,update:p}}class gl extends Wn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,d=n/2,c=Math.floor(r),p=Math.floor(a),m=c+1,_=p+1,x=e/c,v=n/p,S=[],w=[],T=[],y=[];for(let g=0;g<_;g++){const O=g*v-d;for(let C=0;C<m;C++){const b=C*x-u;w.push(b,-O,0),T.push(0,0,1),y.push(C/c),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let O=0;O<c;O++){const C=O+m*g,b=O+m*(g+1),N=O+1+m*(g+1),k=O+1+m*g;S.push(C,b,k),S.push(b,N,k)}this.setIndex(S),this.setAttribute("position",new Yt(w,3)),this.setAttribute("normal",new Yt(T,3)),this.setAttribute("uv",new Yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,U0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ix=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,ux=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_x=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ry=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_y=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,My=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ay=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Py=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,by=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ky=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:d0,alphahash_pars_fragment:h0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:_0,aomap_fragment:v0,aomap_pars_fragment:x0,begin_vertex:y0,beginnormal_vertex:S0,bsdfs:M0,iridescence_fragment:E0,bumpmap_pars_fragment:T0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:L0,color_pars_fragment:P0,color_pars_vertex:b0,color_vertex:D0,common:U0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:N0,displacementmap_pars_vertex:F0,displacementmap_vertex:O0,emissivemap_fragment:z0,emissivemap_pars_fragment:k0,colorspace_fragment:B0,colorspace_pars_fragment:H0,envmap_fragment:G0,envmap_common_pars_fragment:V0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:ix,envmap_vertex:j0,fog_vertex:Y0,fog_pars_vertex:q0,fog_fragment:K0,fog_pars_fragment:$0,gradientmap_pars_fragment:Z0,lightmap_fragment:Q0,lightmap_pars_fragment:J0,lights_lambert_fragment:ex,lights_lambert_pars_fragment:tx,lights_pars_begin:nx,lights_toon_fragment:rx,lights_toon_pars_fragment:sx,lights_phong_fragment:ox,lights_phong_pars_fragment:ax,lights_physical_fragment:lx,lights_physical_pars_fragment:ux,lights_fragment_begin:cx,lights_fragment_maps:fx,lights_fragment_end:dx,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:_x,map_pars_fragment:vx,map_particle_fragment:xx,map_particle_pars_fragment:yx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:Mx,morphcolor_vertex:Ex,morphnormal_vertex:Tx,morphtarget_pars_vertex:wx,morphtarget_vertex:Ax,normal_fragment_begin:Rx,normal_fragment_maps:Cx,normal_pars_fragment:Lx,normal_pars_vertex:Px,normal_vertex:bx,normalmap_pars_fragment:Dx,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Fx,opaque_fragment:Ox,packing:zx,premultiplied_alpha_fragment:kx,project_vertex:Bx,dithering_fragment:Hx,dithering_pars_fragment:Gx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:jx,shadowmap_vertex:Yx,shadowmask_pars_fragment:qx,skinbase_vertex:Kx,skinning_pars_vertex:$x,skinning_vertex:Zx,skinnormal_vertex:Qx,specularmap_fragment:Jx,specularmap_pars_fragment:ey,tonemapping_fragment:ty,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:ry,uv_pars_fragment:sy,uv_pars_vertex:oy,uv_vertex:ay,worldpos_vertex:ly,background_vert:uy,background_frag:cy,backgroundCube_vert:fy,backgroundCube_frag:dy,cube_vert:hy,cube_frag:py,depth_vert:my,depth_frag:gy,distanceRGBA_vert:_y,distanceRGBA_frag:vy,equirect_vert:xy,equirect_frag:yy,linedashed_vert:Sy,linedashed_frag:My,meshbasic_vert:Ey,meshbasic_frag:Ty,meshlambert_vert:wy,meshlambert_frag:Ay,meshmatcap_vert:Ry,meshmatcap_frag:Cy,meshnormal_vert:Ly,meshnormal_frag:Py,meshphong_vert:by,meshphong_frag:Dy,meshphysical_vert:Uy,meshphysical_frag:Iy,meshtoon_vert:Ny,meshtoon_frag:Fy,points_vert:Oy,points_frag:zy,shadow_vert:ky,shadow_frag:By,sprite_vert:Hy,sprite_frag:Gy},Ie={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},hi={basic:{uniforms:pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:pn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:pn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new gt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:pn([Ie.points,Ie.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:pn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:pn([Ie.common,Ie.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:pn([Ie.sprite,Ie.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:pn([Ie.common,Ie.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:pn([Ie.lights,Ie.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};hi.physical={uniforms:pn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const il={r:0,b:0,g:0};function Vy(o,e,n,r,a,u,d){const c=new gt(0);let p=u===!0?0:1,m,_,x=null,v=0,S=null;function w(y,g){let O=!1,C=g.isScene===!0?g.background:null;switch(C&&C.isTexture&&(C=(g.backgroundBlurriness>0?n:e).get(C)),C===null?T(c,p):C&&C.isColor&&(T(C,1),O=!0),o.xr.getEnvironmentBlendMode()){case"opaque":O=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,d),O=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,d),O=!0;break}(o.autoClear||O)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),C&&(C.isCubeTexture||C.mapping===pl)?(_===void 0&&(_=new oi(new Fo(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Os(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,I,ne){this.matrixWorld.copyPosition(ne.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,_.material.toneMapped=C.colorSpace!==ft,(x!==C||v!==C.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,x=C,v=C.version,S=o.toneMapping),_.layers.enableAll(),y.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new oi(new gl(2,2),new zr({name:"BackgroundMaterial",uniforms:Os(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,m.material.toneMapped=C.colorSpace!==ft,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||v!==C.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,x=C,v=C.version,S=o.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null))}function T(y,g){y.getRGB(il,zm(o)),r.buffers.color.setClear(il.r,il.g,il.b,g,d)}return{getClearColor:function(){return c},setClearColor:function(y,g=1){c.set(y),p=g,T(c,p)},getClearAlpha:function(){return p},setClearAlpha:function(y){p=y,T(c,p)},render:w}}function Wy(o,e,n,r){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||u!==null,c={},p=y(null);let m=p,_=!1;function x(te,ie,he,oe,V){let se=!1;if(d){const A=T(oe,he,ie);m!==A&&(m=A,S(m.object)),se=g(te,oe,he,V),se&&O(te,oe,he,V)}else{const A=ie.wireframe===!0;(m.geometry!==oe.id||m.program!==he.id||m.wireframe!==A)&&(m.geometry=oe.id,m.program=he.id,m.wireframe=A,se=!0)}V!==null&&n.update(V,o.ELEMENT_ARRAY_BUFFER),(se||_)&&(_=!1,ne(te,ie,he,oe),V!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(V).buffer))}function v(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function S(te){return r.isWebGL2?o.bindVertexArray(te):u.bindVertexArrayOES(te)}function w(te){return r.isWebGL2?o.deleteVertexArray(te):u.deleteVertexArrayOES(te)}function T(te,ie,he){const oe=he.wireframe===!0;let V=c[te.id];V===void 0&&(V={},c[te.id]=V);let se=V[ie.id];se===void 0&&(se={},V[ie.id]=se);let A=se[oe];return A===void 0&&(A=y(v()),se[oe]=A),A}function y(te){const ie=[],he=[],oe=[];for(let V=0;V<a;V++)ie[V]=0,he[V]=0,oe[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:he,attributeDivisors:oe,object:te,attributes:{},index:null}}function g(te,ie,he,oe){const V=m.attributes,se=ie.attributes;let A=0;const F=he.getAttributes();for(const W in F)if(F[W].location>=0){const ge=V[W];let Se=se[W];if(Se===void 0&&(W==="instanceMatrix"&&te.instanceMatrix&&(Se=te.instanceMatrix),W==="instanceColor"&&te.instanceColor&&(Se=te.instanceColor)),ge===void 0||ge.attribute!==Se||Se&&ge.data!==Se.data)return!0;A++}return m.attributesNum!==A||m.index!==oe}function O(te,ie,he,oe){const V={},se=ie.attributes;let A=0;const F=he.getAttributes();for(const W in F)if(F[W].location>=0){let ge=se[W];ge===void 0&&(W==="instanceMatrix"&&te.instanceMatrix&&(ge=te.instanceMatrix),W==="instanceColor"&&te.instanceColor&&(ge=te.instanceColor));const Se={};Se.attribute=ge,ge&&ge.data&&(Se.data=ge.data),V[W]=Se,A++}m.attributes=V,m.attributesNum=A,m.index=oe}function C(){const te=m.newAttributes;for(let ie=0,he=te.length;ie<he;ie++)te[ie]=0}function b(te){N(te,0)}function N(te,ie){const he=m.newAttributes,oe=m.enabledAttributes,V=m.attributeDivisors;he[te]=1,oe[te]===0&&(o.enableVertexAttribArray(te),oe[te]=1),V[te]!==ie&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](te,ie),V[te]=ie)}function k(){const te=m.newAttributes,ie=m.enabledAttributes;for(let he=0,oe=ie.length;he<oe;he++)ie[he]!==te[he]&&(o.disableVertexAttribArray(he),ie[he]=0)}function I(te,ie,he,oe,V,se,A){A===!0?o.vertexAttribIPointer(te,ie,he,V,se):o.vertexAttribPointer(te,ie,he,oe,V,se)}function ne(te,ie,he,oe){if(r.isWebGL2===!1&&(te.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const V=oe.attributes,se=he.getAttributes(),A=ie.defaultAttributeValues;for(const F in se){const W=se[F];if(W.location>=0){let _e=V[F];if(_e===void 0&&(F==="instanceMatrix"&&te.instanceMatrix&&(_e=te.instanceMatrix),F==="instanceColor"&&te.instanceColor&&(_e=te.instanceColor)),_e!==void 0){const ge=_e.normalized,Se=_e.itemSize,Re=n.get(_e);if(Re===void 0)continue;const Ue=Re.buffer,Ae=Re.type,Ze=Re.bytesPerElement,Ot=r.isWebGL2===!0&&(Ae===o.INT||Ae===o.UNSIGNED_INT||_e.gpuType===ym);if(_e.isInterleavedBufferAttribute){const nt=_e.data,Z=nt.stride,Et=_e.offset;if(nt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<W.locationSize;Xe++)N(W.location+Xe,nt.meshPerAttribute);te.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Xe=0;Xe<W.locationSize;Xe++)b(W.location+Xe);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let Xe=0;Xe<W.locationSize;Xe++)I(W.location+Xe,Se/W.locationSize,Ae,ge,Z*Ze,(Et+Se/W.locationSize*Xe)*Ze,Ot)}else{if(_e.isInstancedBufferAttribute){for(let nt=0;nt<W.locationSize;nt++)N(W.location+nt,_e.meshPerAttribute);te.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let nt=0;nt<W.locationSize;nt++)b(W.location+nt);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let nt=0;nt<W.locationSize;nt++)I(W.location+nt,Se/W.locationSize,Ae,ge,Se*Ze,Se/W.locationSize*nt*Ze,Ot)}}else if(A!==void 0){const ge=A[F];if(ge!==void 0)switch(ge.length){case 2:o.vertexAttrib2fv(W.location,ge);break;case 3:o.vertexAttrib3fv(W.location,ge);break;case 4:o.vertexAttrib4fv(W.location,ge);break;default:o.vertexAttrib1fv(W.location,ge)}}}}k()}function R(){ce();for(const te in c){const ie=c[te];for(const he in ie){const oe=ie[he];for(const V in oe)w(oe[V].object),delete oe[V];delete ie[he]}delete c[te]}}function D(te){if(c[te.id]===void 0)return;const ie=c[te.id];for(const he in ie){const oe=ie[he];for(const V in oe)w(oe[V].object),delete oe[V];delete ie[he]}delete c[te.id]}function me(te){for(const ie in c){const he=c[ie];if(he[te.id]===void 0)continue;const oe=he[te.id];for(const V in oe)w(oe[V].object),delete oe[V];delete he[te.id]}}function ce(){Y(),_=!0,m!==p&&(m=p,S(m.object))}function Y(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:ce,resetDefaultState:Y,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:me,initAttributes:C,enableAttribute:b,disableUnusedAttributes:k}}function Xy(o,e,n,r){const a=r.isWebGL2;let u;function d(m){u=m}function c(m,_){o.drawArrays(u,m,_),n.update(_,u,1)}function p(m,_,x){if(x===0)return;let v,S;if(a)v=o,S="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[S](u,m,_,x),n.update(_,u,x)}this.setMode=d,this.render=c,this.renderInstances=p}function jy(o,e,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const p=u(c);p!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const m=d||e.has("WEBGL_draw_buffers"),_=n.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_TEXTURE_SIZE),w=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),T=o.getParameter(o.MAX_VERTEX_ATTRIBS),y=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),g=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,b=d||e.has("OES_texture_float"),N=C&&b,k=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:a,getMaxPrecision:u,precision:c,logarithmicDepthBuffer:_,maxTextures:x,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:w,maxAttributes:T,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:O,vertexTextures:C,floatFragmentTextures:b,floatVertexTextures:N,maxSamples:k}}function Yy(o){const e=this;let n=null,r=0,a=!1,u=!1;const d=new sr,c=new pt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||r!==0||a;return a=v,r=x.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){n=_(x,v,0)},this.setState=function(x,v,S){const w=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,g=o.get(x);if(!a||w===null||w.length===0||u&&!y)u?_(null):m();else{const O=u?0:r,C=O*4;let b=g.clippingState||null;p.value=b,b=_(w,v,C,S);for(let N=0;N!==C;++N)b[N]=n[N];g.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,v,S,w){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=p.value,w!==!0||y===null){const g=S+T*4,O=v.matrixWorldInverse;c.getNormalMatrix(O),(y===null||y.length<g)&&(y=new Float32Array(g));for(let C=0,b=S;C!==T;++C,b+=4)d.copy(x[C]).applyMatrix4(O,c),d.normal.toArray(y,b),y[b+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function qy(o){let e=new WeakMap;function n(d,c){return c===Bc?d.mapping=Is:c===Hc&&(d.mapping=Ns),d}function r(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const c=d.mapping;if(c===Bc||c===Hc)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new l0(p.height/2);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const c=d.target;c.removeEventListener("dispose",a);const p=e.get(c);p!==void 0&&(e.delete(c),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Gm extends km{constructor(e=-1,n=1,r=1,a=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,d=r+e,c=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,c-=_*this.view.offsetY,p=c-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,c,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bs=4,Dp=[.125,.215,.35,.446,.526,.582],Dr=20,bc=new Gm,Up=new gt;let Dc=null;const br=(1+Math.sqrt(5))/2,Cs=1/br,Ip=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,br,Cs),new X(0,br,-Cs),new X(Cs,0,br),new X(-Cs,0,br),new X(br,Cs,0),new X(-br,Cs,0)];class Np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Dc=this._renderer.getRenderTarget(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc),e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Is||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Io,format:si,colorSpace:mi,depthBuffer:!1},a=Fp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ky(u)),this._blurMaterial=$y(u,e,n)}return a}_compileMaterial(e){const n=new oi(this._lodPlanes[0],e);this._renderer.compile(n,bc)}_sceneToCubeUV(e,n,r,a){const c=new Vn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(Up),_.toneMapping=ur,_.autoClear=!1;const S=new Nm({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),w=new oi(new Fo,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(Up),T=!0);for(let g=0;g<6;g++){const O=g%3;O===0?(c.up.set(0,p[g],0),c.lookAt(m[g],0,0)):O===1?(c.up.set(0,0,p[g]),c.lookAt(0,m[g],0)):(c.up.set(0,p[g],0),c.lookAt(0,0,m[g]));const C=this._cubeSize;rl(a,O*C,g>2?C:0,C,C),_.setRenderTarget(a),T&&_.render(w,c),_.render(e,c)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Is||e.mapping===Ns;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());const u=a?this._cubemapMaterial:this._equirectMaterial,d=new oi(this._lodPlanes[0],u),c=u.uniforms;c.envMap.value=e;const p=this._cubeSize;rl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,bc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=Ip[(a-1)%Ip.length];this._blur(e,a-1,a,u,d)}n.autoClear=r}_blur(e,n,r,a,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",u),this._halfBlur(d,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,d,c){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new oi(this._lodPlanes[a],m),v=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Dr-1),T=u/w,y=isFinite(u)?1+Math.floor(_*T):Dr;y>Dr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Dr}`);const g=[];let O=0;for(let I=0;I<Dr;++I){const ne=I/T,R=Math.exp(-ne*ne/2);g.push(R),I===0?O+=R:I<y&&(O+=2*R)}for(let I=0;I<g.length;I++)g[I]=g[I]/O;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=d==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:C}=this;v.dTheta.value=w,v.mipInt.value=C-r;const b=this._sizeLods[a],N=3*b*(a>C-bs?a-C+bs:0),k=4*(this._cubeSize-b);rl(n,N,k,3*b,2*b),p.setRenderTarget(n),p.render(x,bc)}}function Ky(o){const e=[],n=[],r=[];let a=o;const u=o-bs+1+Dp.length;for(let d=0;d<u;d++){const c=Math.pow(2,a);n.push(c);let p=1/c;d>o-bs?p=Dp[d-o+bs-1]:d===0&&(p=0),r.push(p);const m=1/(c-2),_=-m,x=1+m,v=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,w=6,T=3,y=2,g=1,O=new Float32Array(T*w*S),C=new Float32Array(y*w*S),b=new Float32Array(g*w*S);for(let k=0;k<S;k++){const I=k%3*2/3-1,ne=k>2?0:-1,R=[I,ne,0,I+2/3,ne,0,I+2/3,ne+1,0,I,ne,0,I+2/3,ne+1,0,I,ne+1,0];O.set(R,T*w*k),C.set(v,y*w*k);const D=[k,k,k,k,k,k];b.set(D,g*w*k)}const N=new Wn;N.setAttribute("position",new ai(O,T)),N.setAttribute("uv",new ai(C,y)),N.setAttribute("faceIndex",new ai(b,g)),e.push(N),a>bs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Fp(o,e,n){const r=new Or(o,e,n);return r.texture.mapping=pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function rl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function $y(o,e,n){const r=new Float32Array(Dr),a=new X(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Op(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function zp(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function ef(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zy(o){let e=new WeakMap,n=null;function r(c){if(c&&c.isTexture){const p=c.mapping,m=p===Bc||p===Hc,_=p===Is||p===Ns;if(m||_)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let x=e.get(c);return n===null&&(n=new Np(o)),x=m?n.fromEquirectangular(c,x):n.fromCubemap(c,x),e.set(c,x),x.texture}else{if(e.has(c))return e.get(c).texture;{const x=c.image;if(m&&x&&x.height>0||_&&x&&a(x)){n===null&&(n=new Np(o));const v=m?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",u),v.texture}else return null}}}return c}function a(c){let p=0;const m=6;for(let _=0;_<m;_++)c[_]!==void 0&&p++;return p===m}function u(c){const p=c.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Qy(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Jy(o,e,n,r){const a={},u=new WeakMap;function d(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);for(const w in v.morphAttributes){const T=v.morphAttributes[w];for(let y=0,g=T.length;y<g;y++)e.remove(T[y])}v.removeEventListener("dispose",d),delete a[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(x,v){return a[v.id]===!0||(v.addEventListener("dispose",d),a[v.id]=!0,n.memory.geometries++),v}function p(x){const v=x.attributes;for(const w in v)e.update(v[w],o.ARRAY_BUFFER);const S=x.morphAttributes;for(const w in S){const T=S[w];for(let y=0,g=T.length;y<g;y++)e.update(T[y],o.ARRAY_BUFFER)}}function m(x){const v=[],S=x.index,w=x.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let C=0,b=O.length;C<b;C+=3){const N=O[C+0],k=O[C+1],I=O[C+2];v.push(N,k,k,I,I,N)}}else if(w!==void 0){const O=w.array;T=w.version;for(let C=0,b=O.length/3-1;C<b;C+=3){const N=C+0,k=C+1,I=C+2;v.push(N,k,k,I,I,N)}}else return;const y=new(Lm(v)?Om:Fm)(v,1);y.version=T;const g=u.get(x);g&&e.remove(g),u.set(x,y)}function _(x){const v=u.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&m(x)}else m(x);return u.get(x)}return{get:c,update:p,getWireframeAttribute:_}}function eS(o,e,n,r){const a=r.isWebGL2;let u;function d(v){u=v}let c,p;function m(v){c=v.type,p=v.bytesPerElement}function _(v,S){o.drawElements(u,S,c,v*p),n.update(S,u,1)}function x(v,S,w){if(w===0)return;let T,y;if(a)T=o,y="drawElementsInstanced";else if(T=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",T===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}T[y](u,S,c,v*p,w),n.update(S,u,w)}this.setMode=d,this.setIndex=m,this.render=_,this.renderInstances=x}function tS(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,c){switch(n.calls++,d){case o.TRIANGLES:n.triangles+=c*(u/3);break;case o.LINES:n.lines+=c*(u/2);break;case o.LINE_STRIP:n.lines+=c*(u-1);break;case o.LINE_LOOP:n.lines+=c*u;break;case o.POINTS:n.points+=c*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function nS(o,e){return o[0]-e[0]}function iS(o,e){return Math.abs(e[1])-Math.abs(o[1])}function rS(o,e,n){const r={},a=new Float32Array(8),u=new WeakMap,d=new tn,c=[];for(let m=0;m<8;m++)c[m]=[m,0];function p(m,_,x){const v=m.morphTargetInfluences;if(e.isWebGL2===!0){const w=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,T=w!==void 0?w.length:0;let y=u.get(_);if(y===void 0||y.count!==T){let ie=function(){Y.dispose(),u.delete(_),_.removeEventListener("dispose",ie)};var S=ie;y!==void 0&&y.texture.dispose();const C=_.morphAttributes.position!==void 0,b=_.morphAttributes.normal!==void 0,N=_.morphAttributes.color!==void 0,k=_.morphAttributes.position||[],I=_.morphAttributes.normal||[],ne=_.morphAttributes.color||[];let R=0;C===!0&&(R=1),b===!0&&(R=2),N===!0&&(R=3);let D=_.attributes.position.count*R,me=1;D>e.maxTextureSize&&(me=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const ce=new Float32Array(D*me*4*T),Y=new Dm(ce,D,me,T);Y.type=ar,Y.needsUpdate=!0;const te=R*4;for(let he=0;he<T;he++){const oe=k[he],V=I[he],se=ne[he],A=D*me*4*he;for(let F=0;F<oe.count;F++){const W=F*te;C===!0&&(d.fromBufferAttribute(oe,F),ce[A+W+0]=d.x,ce[A+W+1]=d.y,ce[A+W+2]=d.z,ce[A+W+3]=0),b===!0&&(d.fromBufferAttribute(V,F),ce[A+W+4]=d.x,ce[A+W+5]=d.y,ce[A+W+6]=d.z,ce[A+W+7]=0),N===!0&&(d.fromBufferAttribute(se,F),ce[A+W+8]=d.x,ce[A+W+9]=d.y,ce[A+W+10]=d.z,ce[A+W+11]=se.itemSize===4?d.w:1)}}y={count:T,texture:Y,size:new at(D,me)},u.set(_,y),_.addEventListener("dispose",ie)}let g=0;for(let C=0;C<v.length;C++)g+=v[C];const O=_.morphTargetsRelative?1:1-g;x.getUniforms().setValue(o,"morphTargetBaseInfluence",O),x.getUniforms().setValue(o,"morphTargetInfluences",v),x.getUniforms().setValue(o,"morphTargetsTexture",y.texture,n),x.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}else{const w=v===void 0?0:v.length;let T=r[_.id];if(T===void 0||T.length!==w){T=[];for(let b=0;b<w;b++)T[b]=[b,0];r[_.id]=T}for(let b=0;b<w;b++){const N=T[b];N[0]=b,N[1]=v[b]}T.sort(iS);for(let b=0;b<8;b++)b<w&&T[b][1]?(c[b][0]=T[b][0],c[b][1]=T[b][1]):(c[b][0]=Number.MAX_SAFE_INTEGER,c[b][1]=0);c.sort(nS);const y=_.morphAttributes.position,g=_.morphAttributes.normal;let O=0;for(let b=0;b<8;b++){const N=c[b],k=N[0],I=N[1];k!==Number.MAX_SAFE_INTEGER&&I?(y&&_.getAttribute("morphTarget"+b)!==y[k]&&_.setAttribute("morphTarget"+b,y[k]),g&&_.getAttribute("morphNormal"+b)!==g[k]&&_.setAttribute("morphNormal"+b,g[k]),a[b]=I,O+=I):(y&&_.hasAttribute("morphTarget"+b)===!0&&_.deleteAttribute("morphTarget"+b),g&&_.hasAttribute("morphNormal"+b)===!0&&_.deleteAttribute("morphNormal"+b),a[b]=0)}const C=_.morphTargetsRelative?1:1-O;x.getUniforms().setValue(o,"morphTargetBaseInfluence",C),x.getUniforms().setValue(o,"morphTargetInfluences",a)}}return{update:p}}function sS(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,x=e.get(p,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",c)===!1&&p.addEventListener("dispose",c),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return x}function d(){a=new WeakMap}function c(p){const m=p.target;m.removeEventListener("dispose",c),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:d}}const Vm=new Un,Wm=new Dm,Xm=new jv,jm=new Bm,kp=[],Bp=[],Hp=new Float32Array(16),Gp=new Float32Array(9),Vp=new Float32Array(4);function Bs(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=kp[a];if(u===void 0&&(u=new Float32Array(a),kp[a]=u),e!==0){r.toArray(u,0);for(let d=1,c=0;d!==e;++d)c+=n,o[d].toArray(u,c)}return u}function qt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Kt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function _l(o,e){let n=Bp[e];n===void 0&&(n=new Int32Array(e),Bp[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function oS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function aS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;o.uniform2fv(this.addr,e),Kt(n,e)}}function lS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;o.uniform3fv(this.addr,e),Kt(n,e)}}function uS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;o.uniform4fv(this.addr,e),Kt(n,e)}}function cS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,r))return;Vp.set(r),o.uniformMatrix2fv(this.addr,!1,Vp),Kt(n,r)}}function fS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,r))return;Gp.set(r),o.uniformMatrix3fv(this.addr,!1,Gp),Kt(n,r)}}function dS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,r))return;Hp.set(r),o.uniformMatrix4fv(this.addr,!1,Hp),Kt(n,r)}}function hS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function pS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;o.uniform2iv(this.addr,e),Kt(n,e)}}function mS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;o.uniform3iv(this.addr,e),Kt(n,e)}}function gS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;o.uniform4iv(this.addr,e),Kt(n,e)}}function _S(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function vS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;o.uniform2uiv(this.addr,e),Kt(n,e)}}function xS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;o.uniform3uiv(this.addr,e),Kt(n,e)}}function yS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;o.uniform4uiv(this.addr,e),Kt(n,e)}}function SS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2D(e||Vm,a)}function MS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Xm,a)}function ES(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||jm,a)}function TS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Wm,a)}function wS(o){switch(o){case 5126:return oS;case 35664:return aS;case 35665:return lS;case 35666:return uS;case 35674:return cS;case 35675:return fS;case 35676:return dS;case 5124:case 35670:return hS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return _S;case 36294:return vS;case 36295:return xS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return TS}}function AS(o,e){o.uniform1fv(this.addr,e)}function RS(o,e){const n=Bs(e,this.size,2);o.uniform2fv(this.addr,n)}function CS(o,e){const n=Bs(e,this.size,3);o.uniform3fv(this.addr,n)}function LS(o,e){const n=Bs(e,this.size,4);o.uniform4fv(this.addr,n)}function PS(o,e){const n=Bs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function bS(o,e){const n=Bs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function DS(o,e){const n=Bs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function US(o,e){o.uniform1iv(this.addr,e)}function IS(o,e){o.uniform2iv(this.addr,e)}function NS(o,e){o.uniform3iv(this.addr,e)}function FS(o,e){o.uniform4iv(this.addr,e)}function OS(o,e){o.uniform1uiv(this.addr,e)}function zS(o,e){o.uniform2uiv(this.addr,e)}function kS(o,e){o.uniform3uiv(this.addr,e)}function BS(o,e){o.uniform4uiv(this.addr,e)}function HS(o,e,n){const r=this.cache,a=e.length,u=_l(n,a);qt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Vm,u[d])}function GS(o,e,n){const r=this.cache,a=e.length,u=_l(n,a);qt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||Xm,u[d])}function VS(o,e,n){const r=this.cache,a=e.length,u=_l(n,a);qt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||jm,u[d])}function WS(o,e,n){const r=this.cache,a=e.length,u=_l(n,a);qt(r,u)||(o.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Wm,u[d])}function XS(o){switch(o){case 5126:return AS;case 35664:return RS;case 35665:return CS;case 35666:return LS;case 35674:return PS;case 35675:return bS;case 35676:return DS;case 5124:case 35670:return US;case 35667:case 35671:return IS;case 35668:case 35672:return NS;case 35669:case 35673:return FS;case 5125:return OS;case 36294:return zS;case 36295:return kS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return HS;case 35679:case 36299:case 36307:return GS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return WS}}class jS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.setValue=wS(n.type)}}class YS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.size=n.size,this.setValue=XS(n.type)}}class qS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,d=a.length;u!==d;++u){const c=a[u];c.setValue(e,n[c.id],r)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function Wp(o,e){o.seq.push(e),o.map[e.id]=e}function KS(o,e,n){const r=o.name,a=r.length;for(Uc.lastIndex=0;;){const u=Uc.exec(r),d=Uc.lastIndex;let c=u[1];const p=u[2]==="]",m=u[3];if(p&&(c=c|0),m===void 0||m==="["&&d+2===a){Wp(n,m===void 0?new jS(c,o,e):new YS(c,o,e));break}else{let x=n.map[c];x===void 0&&(x=new qS(c),Wp(n,x)),n=x}}}class fl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),d=e.getUniformLocation(n,u.name);KS(u,d,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,d=n.length;u!==d;++u){const c=n[u],p=r[c.id];p.needsUpdate!==!1&&c.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Xp(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}let $S=0;function ZS(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let d=a;d<u;d++){const c=d+1;r.push(`${c===e?">":" "} ${c}: ${n[d]}`)}return r.join(`
`)}function QS(o){switch(o){case mi:return["Linear","( value )"];case ft:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),["Linear","( value )"]}}function jp(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+ZS(o.getShaderSource(e),d)}else return a}function JS(o,e){const n=QS(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function eM(o,e){let n;switch(e){case lv:n="Linear";break;case uv:n="Reinhard";break;case cv:n="OptimizedCineon";break;case fv:n="ACESFilmic";break;case dv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function tM(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bo).join(`
`)}function nM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function iM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),d=u.name;let c=1;u.type===o.FLOAT_MAT2&&(c=2),u.type===o.FLOAT_MAT3&&(c=3),u.type===o.FLOAT_MAT4&&(c=4),n[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:c}}return n}function bo(o){return o!==""}function Yp(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qp(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(o){return o.replace(rM,oM)}const sM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function oM(o,e){let n=ct[e];if(n===void 0){const r=sM.get(e);if(r!==void 0)n=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Yc(n)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(o){return o.replace(aM,lM)}function lM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function $p(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===gm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===B_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function cM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Is:case Ns:e="ENVMAP_TYPE_CUBE";break;case pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fM(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Ns&&(e="ENVMAP_MODE_REFRACTION"),e}function dM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $c:e="ENVMAP_BLENDING_MULTIPLY";break;case ov:e="ENVMAP_BLENDING_MIX";break;case av:e="ENVMAP_BLENDING_ADD";break}return e}function hM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function pM(o,e,n,r){const a=o.getContext(),u=n.defines;let d=n.vertexShader,c=n.fragmentShader;const p=uM(n),m=cM(n),_=fM(n),x=dM(n),v=hM(n),S=n.isWebGL2?"":tM(n),w=nM(u),T=a.createProgram();let y,g,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(bo).join(`
`),y.length>0&&(y+=`
`),g=[S,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(bo).join(`
`),g.length>0&&(g+=`
`)):(y=[$p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),g=[S,$p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ur?"#define TONE_MAPPING":"",n.toneMapping!==ur?ct.tonemapping_pars_fragment:"",n.toneMapping!==ur?eM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,JS("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bo).join(`
`)),d=Yc(d),d=Yp(d,n),d=qp(d,n),c=Yc(c),c=Yp(c,n),c=qp(c,n),d=Kp(d),c=Kp(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=O+y+d,b=O+g+c,N=Xp(a,a.VERTEX_SHADER,C),k=Xp(a,a.FRAGMENT_SHADER,b);if(a.attachShader(T,N),a.attachShader(T,k),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T),o.debug.checkShaderErrors){const R=a.getProgramInfoLog(T).trim(),D=a.getShaderInfoLog(N).trim(),me=a.getShaderInfoLog(k).trim();let ce=!0,Y=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ce=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,T,N,k);else{const te=jp(a,N,"vertex"),ie=jp(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+te+`
`+ie)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(D===""||me==="")&&(Y=!1);Y&&(this.diagnostics={runnable:ce,programLog:R,vertexShader:{log:D,prefix:y},fragmentShader:{log:me,prefix:g}})}a.deleteShader(N),a.deleteShader(k);let I;this.getUniforms=function(){return I===void 0&&(I=new fl(a,T)),I};let ne;return this.getAttributes=function(){return ne===void 0&&(ne=iM(a,T)),ne},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$S++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=k,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new _M(e),n.set(e,r)),r}}class _M{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}}function vM(o,e,n,r,a,u,d){const c=new Um,p=new gM,m=[],_=a.isWebGL2,x=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return R===0?"uv":`uv${R}`}function y(R,D,me,ce,Y){const te=ce.fog,ie=Y.geometry,he=R.isMeshStandardMaterial?ce.environment:null,oe=(R.isMeshStandardMaterial?n:e).get(R.envMap||he),V=oe&&oe.mapping===pl?oe.image.height:null,se=w[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const A=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,F=A!==void 0?A.length:0;let W=0;ie.morphAttributes.position!==void 0&&(W=1),ie.morphAttributes.normal!==void 0&&(W=2),ie.morphAttributes.color!==void 0&&(W=3);let _e,ge,Se,Re;if(se){const St=hi[se];_e=St.vertexShader,ge=St.fragmentShader}else _e=R.vertexShader,ge=R.fragmentShader,p.update(R),Se=p.getVertexShaderID(R),Re=p.getFragmentShaderID(R);const Ue=o.getRenderTarget(),Ae=Y.isInstancedMesh===!0,Ze=!!R.map,Ot=!!R.matcap,nt=!!oe,Z=!!R.aoMap,Et=!!R.lightMap,Xe=!!R.bumpMap,Je=!!R.normalMap,je=!!R.displacementMap,_t=!!R.emissiveMap,Fe=!!R.metalnessMap,Ve=!!R.roughnessMap,Ne=R.anisotropy>0,Ye=R.clearcoat>0,et=R.iridescence>0,P=R.sheen>0,E=R.transmission>0,j=Ne&&!!R.anisotropyMap,pe=Ye&&!!R.clearcoatMap,ae=Ye&&!!R.clearcoatNormalMap,fe=Ye&&!!R.clearcoatRoughnessMap,Pe=et&&!!R.iridescenceMap,ve=et&&!!R.iridescenceThicknessMap,J=P&&!!R.sheenColorMap,z=P&&!!R.sheenRoughnessMap,de=!!R.specularMap,Ce=!!R.specularColorMap,Te=!!R.specularIntensityMap,Le=E&&!!R.transmissionMap,Qe=E&&!!R.thicknessMap,dt=!!R.gradientMap,H=!!R.alphaMap,be=R.alphaTest>0,ee=!!R.alphaHash,Me=!!R.extensions,De=!!ie.attributes.uv1,lt=!!ie.attributes.uv2,xt=!!ie.attributes.uv3;let Tt=ur;return R.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Tt=o.toneMapping),{isWebGL2:_,shaderID:se,shaderType:R.type,shaderName:R.name,vertexShader:_e,fragmentShader:ge,defines:R.defines,customVertexShaderID:Se,customFragmentShaderID:Re,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,instancing:Ae,instancingColor:Ae&&Y.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Ue===null?o.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:mi,map:Ze,matcap:Ot,envMap:nt,envMapMode:nt&&oe.mapping,envMapCubeUVHeight:V,aoMap:Z,lightMap:Et,bumpMap:Xe,normalMap:Je,displacementMap:v&&je,emissiveMap:_t,normalMapObjectSpace:Je&&R.normalMapType===wv,normalMapTangentSpace:Je&&R.normalMapType===Rm,metalnessMap:Fe,roughnessMap:Ve,anisotropy:Ne,anisotropyMap:j,clearcoat:Ye,clearcoatMap:pe,clearcoatNormalMap:ae,clearcoatRoughnessMap:fe,iridescence:et,iridescenceMap:Pe,iridescenceThicknessMap:ve,sheen:P,sheenColorMap:J,sheenRoughnessMap:z,specularMap:de,specularColorMap:Ce,specularIntensityMap:Te,transmission:E,transmissionMap:Le,thicknessMap:Qe,gradientMap:dt,opaque:R.transparent===!1&&R.blending===Ds,alphaMap:H,alphaTest:be,alphaHash:ee,combine:R.combine,mapUv:Ze&&T(R.map.channel),aoMapUv:Z&&T(R.aoMap.channel),lightMapUv:Et&&T(R.lightMap.channel),bumpMapUv:Xe&&T(R.bumpMap.channel),normalMapUv:Je&&T(R.normalMap.channel),displacementMapUv:je&&T(R.displacementMap.channel),emissiveMapUv:_t&&T(R.emissiveMap.channel),metalnessMapUv:Fe&&T(R.metalnessMap.channel),roughnessMapUv:Ve&&T(R.roughnessMap.channel),anisotropyMapUv:j&&T(R.anisotropyMap.channel),clearcoatMapUv:pe&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:ae&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:J&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:z&&T(R.sheenRoughnessMap.channel),specularMapUv:de&&T(R.specularMap.channel),specularColorMapUv:Ce&&T(R.specularColorMap.channel),specularIntensityMapUv:Te&&T(R.specularIntensityMap.channel),transmissionMapUv:Le&&T(R.transmissionMap.channel),thicknessMapUv:Qe&&T(R.thicknessMap.channel),alphaMapUv:H&&T(R.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Je||Ne),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:lt,vertexUv3s:xt,pointsUvs:Y.isPoints===!0&&!!ie.attributes.uv&&(Ze||H),fog:!!te,useFog:R.fog===!0,fogExp2:te&&te.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:Y.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:W,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&me.length>0,shadowMapType:o.shadowMap.type,toneMapping:Tt,useLegacyLights:o._useLegacyLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===pi,flipSided:R.side===wn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Me&&R.extensions.derivatives===!0,extensionFragDepth:Me&&R.extensions.fragDepth===!0,extensionDrawBuffers:Me&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:_||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||r.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function g(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const me in R.defines)D.push(me),D.push(R.defines[me]);return R.isRawShaderMaterial===!1&&(O(D,R),C(D,R),D.push(o.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function O(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function C(R,D){c.disableAll(),D.isWebGL2&&c.enable(0),D.supportsVertexTextures&&c.enable(1),D.instancing&&c.enable(2),D.instancingColor&&c.enable(3),D.matcap&&c.enable(4),D.envMap&&c.enable(5),D.normalMapObjectSpace&&c.enable(6),D.normalMapTangentSpace&&c.enable(7),D.clearcoat&&c.enable(8),D.iridescence&&c.enable(9),D.alphaTest&&c.enable(10),D.vertexColors&&c.enable(11),D.vertexAlphas&&c.enable(12),D.vertexUv1s&&c.enable(13),D.vertexUv2s&&c.enable(14),D.vertexUv3s&&c.enable(15),D.vertexTangents&&c.enable(16),D.anisotropy&&c.enable(17),R.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.skinning&&c.enable(4),D.morphTargets&&c.enable(5),D.morphNormals&&c.enable(6),D.morphColors&&c.enable(7),D.premultipliedAlpha&&c.enable(8),D.shadowMapEnabled&&c.enable(9),D.useLegacyLights&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),R.push(c.mask)}function b(R){const D=w[R.type];let me;if(D){const ce=hi[D];me=r0.clone(ce.uniforms)}else me=R.uniforms;return me}function N(R,D){let me;for(let ce=0,Y=m.length;ce<Y;ce++){const te=m[ce];if(te.cacheKey===D){me=te,++me.usedTimes;break}}return me===void 0&&(me=new pM(o,D,R,u),m.push(me)),me}function k(R){if(--R.usedTimes===0){const D=m.indexOf(R);m[D]=m[m.length-1],m.pop(),R.destroy()}}function I(R){p.remove(R)}function ne(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:b,acquireProgram:N,releaseProgram:k,releaseShaderCache:I,programs:m,dispose:ne}}function xM(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function n(u){o.delete(u)}function r(u,d,c){o.get(u)[d]=c}function a(){o=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function yM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Zp(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Qp(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function d(x,v,S,w,T,y){let g=o[e];return g===void 0?(g={id:x.id,object:x,geometry:v,material:S,groupOrder:w,renderOrder:x.renderOrder,z:T,group:y},o[e]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=S,g.groupOrder=w,g.renderOrder=x.renderOrder,g.z=T,g.group=y),e++,g}function c(x,v,S,w,T,y){const g=d(x,v,S,w,T,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(x,v,S,w,T,y){const g=d(x,v,S,w,T,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,v){n.length>1&&n.sort(x||yM),r.length>1&&r.sort(v||Zp),a.length>1&&a.sort(v||Zp)}function _(){for(let x=e,v=o.length;x<v;x++){const S=o[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:c,unshift:p,finish:_,sort:m}}function SM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let d;return u===void 0?(d=new Qp,o.set(r,[d])):a>=u.length?(d=new Qp,u.push(d)):d=u[a],d}function n(){o=new WeakMap}return{get:e,dispose:n}}function MM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new gt};break;case"SpotLight":n={position:new X,direction:new X,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":n={color:new gt,position:new X,halfWidth:new X,halfHeight:new X};break}return o[e.id]=n,n}}}function EM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let TM=0;function wM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function AM(o,e){const n=new MM,r=EM(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let _=0;_<9;_++)a.probe.push(new X);const u=new X,d=new It,c=new It;function p(_,x){let v=0,S=0,w=0;for(let me=0;me<9;me++)a.probe[me].set(0,0,0);let T=0,y=0,g=0,O=0,C=0,b=0,N=0,k=0,I=0,ne=0;_.sort(wM);const R=x===!0?Math.PI:1;for(let me=0,ce=_.length;me<ce;me++){const Y=_[me],te=Y.color,ie=Y.intensity,he=Y.distance,oe=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)v+=te.r*ie*R,S+=te.g*ie*R,w+=te.b*ie*R;else if(Y.isLightProbe)for(let V=0;V<9;V++)a.probe[V].addScaledVector(Y.sh.coefficients[V],ie);else if(Y.isDirectionalLight){const V=n.get(Y);if(V.color.copy(Y.color).multiplyScalar(Y.intensity*R),Y.castShadow){const se=Y.shadow,A=r.get(Y);A.shadowBias=se.bias,A.shadowNormalBias=se.normalBias,A.shadowRadius=se.radius,A.shadowMapSize=se.mapSize,a.directionalShadow[T]=A,a.directionalShadowMap[T]=oe,a.directionalShadowMatrix[T]=Y.shadow.matrix,b++}a.directional[T]=V,T++}else if(Y.isSpotLight){const V=n.get(Y);V.position.setFromMatrixPosition(Y.matrixWorld),V.color.copy(te).multiplyScalar(ie*R),V.distance=he,V.coneCos=Math.cos(Y.angle),V.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),V.decay=Y.decay,a.spot[g]=V;const se=Y.shadow;if(Y.map&&(a.spotLightMap[I]=Y.map,I++,se.updateMatrices(Y),Y.castShadow&&ne++),a.spotLightMatrix[g]=se.matrix,Y.castShadow){const A=r.get(Y);A.shadowBias=se.bias,A.shadowNormalBias=se.normalBias,A.shadowRadius=se.radius,A.shadowMapSize=se.mapSize,a.spotShadow[g]=A,a.spotShadowMap[g]=oe,k++}g++}else if(Y.isRectAreaLight){const V=n.get(Y);V.color.copy(te).multiplyScalar(ie),V.halfWidth.set(Y.width*.5,0,0),V.halfHeight.set(0,Y.height*.5,0),a.rectArea[O]=V,O++}else if(Y.isPointLight){const V=n.get(Y);if(V.color.copy(Y.color).multiplyScalar(Y.intensity*R),V.distance=Y.distance,V.decay=Y.decay,Y.castShadow){const se=Y.shadow,A=r.get(Y);A.shadowBias=se.bias,A.shadowNormalBias=se.normalBias,A.shadowRadius=se.radius,A.shadowMapSize=se.mapSize,A.shadowCameraNear=se.camera.near,A.shadowCameraFar=se.camera.far,a.pointShadow[y]=A,a.pointShadowMap[y]=oe,a.pointShadowMatrix[y]=Y.shadow.matrix,N++}a.point[y]=V,y++}else if(Y.isHemisphereLight){const V=n.get(Y);V.skyColor.copy(Y.color).multiplyScalar(ie*R),V.groundColor.copy(Y.groundColor).multiplyScalar(ie*R),a.hemi[C]=V,C++}}O>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ie.LTC_FLOAT_1,a.rectAreaLTC2=Ie.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ie.LTC_HALF_1,a.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=v,a.ambient[1]=S,a.ambient[2]=w;const D=a.hash;(D.directionalLength!==T||D.pointLength!==y||D.spotLength!==g||D.rectAreaLength!==O||D.hemiLength!==C||D.numDirectionalShadows!==b||D.numPointShadows!==N||D.numSpotShadows!==k||D.numSpotMaps!==I)&&(a.directional.length=T,a.spot.length=g,a.rectArea.length=O,a.point.length=y,a.hemi.length=C,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=N,a.pointShadowMap.length=N,a.spotShadow.length=k,a.spotShadowMap.length=k,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=N,a.spotLightMatrix.length=k+I-ne,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=ne,D.directionalLength=T,D.pointLength=y,D.spotLength=g,D.rectAreaLength=O,D.hemiLength=C,D.numDirectionalShadows=b,D.numPointShadows=N,D.numSpotShadows=k,D.numSpotMaps=I,a.version=TM++)}function m(_,x){let v=0,S=0,w=0,T=0,y=0;const g=x.matrixWorldInverse;for(let O=0,C=_.length;O<C;O++){const b=_[O];if(b.isDirectionalLight){const N=a.directional[v];N.direction.setFromMatrixPosition(b.matrixWorld),u.setFromMatrixPosition(b.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(g),v++}else if(b.isSpotLight){const N=a.spot[w];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(g),N.direction.setFromMatrixPosition(b.matrixWorld),u.setFromMatrixPosition(b.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(g),w++}else if(b.isRectAreaLight){const N=a.rectArea[T];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(g),c.identity(),d.copy(b.matrixWorld),d.premultiply(g),c.extractRotation(d),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),T++}else if(b.isPointLight){const N=a.point[S];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(g),S++}else if(b.isHemisphereLight){const N=a.hemi[y];N.direction.setFromMatrixPosition(b.matrixWorld),N.direction.transformDirection(g),y++}}}return{setup:p,setupView:m,state:a}}function Jp(o,e){const n=new AM(o,e),r=[],a=[];function u(){r.length=0,a.length=0}function d(x){r.push(x)}function c(x){a.push(x)}function p(x){n.setup(r,x)}function m(x){n.setupView(r,x)}return{init:u,state:{lightsArray:r,shadowsArray:a,lights:n},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:c}}function RM(o,e){let n=new WeakMap;function r(u,d=0){const c=n.get(u);let p;return c===void 0?(p=new Jp(o,e),n.set(u,[p])):d>=c.length?(p=new Jp(o,e),c.push(p)):p=c[d],p}function a(){n=new WeakMap}return{get:r,dispose:a}}class CM extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LM extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DM(o,e,n){let r=new Jc;const a=new at,u=new at,d=new tn,c=new CM({depthPacking:Tv}),p=new LM,m={},_=n.maxTextureSize,x={[fr]:wn,[wn]:fr,[pi]:pi},v=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:PM,fragmentShader:bM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const w=new Wn;w.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new oi(w,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gm;let g=this.type;this.render=function(N,k,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const ne=o.getRenderTarget(),R=o.getActiveCubeFace(),D=o.getActiveMipmapLevel(),me=o.state;me.setBlending(lr),me.buffers.color.setClear(1,1,1,1),me.buffers.depth.setTest(!0),me.setScissorTest(!1);const ce=g!==Di&&this.type===Di,Y=g===Di&&this.type!==Di;for(let te=0,ie=N.length;te<ie;te++){const he=N[te],oe=he.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;a.copy(oe.mapSize);const V=oe.getFrameExtents();if(a.multiply(V),u.copy(oe.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/V.x),a.x=u.x*V.x,oe.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/V.y),a.y=u.y*V.y,oe.mapSize.y=u.y)),oe.map===null||ce===!0||Y===!0){const A=this.type!==Di?{minFilter:mn,magFilter:mn}:{};oe.map!==null&&oe.map.dispose(),oe.map=new Or(a.x,a.y,A),oe.map.texture.name=he.name+".shadowMap",oe.camera.updateProjectionMatrix()}o.setRenderTarget(oe.map),o.clear();const se=oe.getViewportCount();for(let A=0;A<se;A++){const F=oe.getViewport(A);d.set(u.x*F.x,u.y*F.y,u.x*F.z,u.y*F.w),me.viewport(d),oe.updateMatrices(he,A),r=oe.getFrustum(),b(k,I,oe.camera,he,this.type)}oe.isPointLightShadow!==!0&&this.type===Di&&O(oe,I),oe.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(ne,R,D)};function O(N,k){const I=e.update(T);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Or(a.x,a.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(k,null,I,v,T,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(k,null,I,S,T,null)}function C(N,k,I,ne){let R=null;const D=I.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(D!==void 0)R=D;else if(R=I.isPointLight===!0?p:c,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const me=R.uuid,ce=k.uuid;let Y=m[me];Y===void 0&&(Y={},m[me]=Y);let te=Y[ce];te===void 0&&(te=R.clone(),Y[ce]=te),R=te}if(R.visible=k.visible,R.wireframe=k.wireframe,ne===Di?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:x[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,I.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const me=o.properties.get(R);me.light=I}return R}function b(N,k,I,ne,R){if(N.visible===!1)return;if(N.layers.test(k.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===Di)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,N.matrixWorld);const ce=e.update(N),Y=N.material;if(Array.isArray(Y)){const te=ce.groups;for(let ie=0,he=te.length;ie<he;ie++){const oe=te[ie],V=Y[oe.materialIndex];if(V&&V.visible){const se=C(N,V,ne,R);o.renderBufferDirect(I,null,ce,se,N,oe)}}}else if(Y.visible){const te=C(N,Y,ne,R);o.renderBufferDirect(I,null,ce,te,N,null)}}const me=N.children;for(let ce=0,Y=me.length;ce<Y;ce++)b(me[ce],k,I,ne,R)}}function UM(o,e,n){const r=n.isWebGL2;function a(){let H=!1;const be=new tn;let ee=null;const Me=new tn(0,0,0,0);return{setMask:function(De){ee!==De&&!H&&(o.colorMask(De,De,De,De),ee=De)},setLocked:function(De){H=De},setClear:function(De,lt,xt,Tt,Xn){Xn===!0&&(De*=Tt,lt*=Tt,xt*=Tt),be.set(De,lt,xt,Tt),Me.equals(be)===!1&&(o.clearColor(De,lt,xt,Tt),Me.copy(be))},reset:function(){H=!1,ee=null,Me.set(-1,0,0,0)}}}function u(){let H=!1,be=null,ee=null,Me=null;return{setTest:function(De){De?Ue(o.DEPTH_TEST):Ae(o.DEPTH_TEST)},setMask:function(De){be!==De&&!H&&(o.depthMask(De),be=De)},setFunc:function(De){if(ee!==De){switch(De){case J_:o.depthFunc(o.NEVER);break;case ev:o.depthFunc(o.ALWAYS);break;case tv:o.depthFunc(o.LESS);break;case kc:o.depthFunc(o.LEQUAL);break;case nv:o.depthFunc(o.EQUAL);break;case iv:o.depthFunc(o.GEQUAL);break;case rv:o.depthFunc(o.GREATER);break;case sv:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ee=De}},setLocked:function(De){H=De},setClear:function(De){Me!==De&&(o.clearDepth(De),Me=De)},reset:function(){H=!1,be=null,ee=null,Me=null}}}function d(){let H=!1,be=null,ee=null,Me=null,De=null,lt=null,xt=null,Tt=null,Xn=null;return{setTest:function(St){H||(St?Ue(o.STENCIL_TEST):Ae(o.STENCIL_TEST))},setMask:function(St){be!==St&&!H&&(o.stencilMask(St),be=St)},setFunc:function(St,An,zt){(ee!==St||Me!==An||De!==zt)&&(o.stencilFunc(St,An,zt),ee=St,Me=An,De=zt)},setOp:function(St,An,zt){(lt!==St||xt!==An||Tt!==zt)&&(o.stencilOp(St,An,zt),lt=St,xt=An,Tt=zt)},setLocked:function(St){H=St},setClear:function(St){Xn!==St&&(o.clearStencil(St),Xn=St)},reset:function(){H=!1,be=null,ee=null,Me=null,De=null,lt=null,xt=null,Tt=null,Xn=null}}}const c=new a,p=new u,m=new d,_=new WeakMap,x=new WeakMap;let v={},S={},w=new WeakMap,T=[],y=null,g=!1,O=null,C=null,b=null,N=null,k=null,I=null,ne=null,R=!1,D=null,me=null,ce=null,Y=null,te=null;const ie=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,oe=0;const V=o.getParameter(o.VERSION);V.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(V)[1]),he=oe>=1):V.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),he=oe>=2);let se=null,A={};const F=o.getParameter(o.SCISSOR_BOX),W=o.getParameter(o.VIEWPORT),_e=new tn().fromArray(F),ge=new tn().fromArray(W);function Se(H,be,ee,Me){const De=new Uint8Array(4),lt=o.createTexture();o.bindTexture(H,lt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let xt=0;xt<ee;xt++)r&&(H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY)?o.texImage3D(be,0,o.RGBA,1,1,Me,0,o.RGBA,o.UNSIGNED_BYTE,De):o.texImage2D(be+xt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,De);return lt}const Re={};Re[o.TEXTURE_2D]=Se(o.TEXTURE_2D,o.TEXTURE_2D,1),Re[o.TEXTURE_CUBE_MAP]=Se(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Re[o.TEXTURE_2D_ARRAY]=Se(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Re[o.TEXTURE_3D]=Se(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Ue(o.DEPTH_TEST),p.setFunc(kc),je(!1),_t(zh),Ue(o.CULL_FACE),Xe(lr);function Ue(H){v[H]!==!0&&(o.enable(H),v[H]=!0)}function Ae(H){v[H]!==!1&&(o.disable(H),v[H]=!1)}function Ze(H,be){return S[H]!==be?(o.bindFramebuffer(H,be),S[H]=be,r&&(H===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=be),H===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=be)),!0):!1}function Ot(H,be){let ee=T,Me=!1;if(H)if(ee=w.get(be),ee===void 0&&(ee=[],w.set(be,ee)),H.isWebGLMultipleRenderTargets){const De=H.texture;if(ee.length!==De.length||ee[0]!==o.COLOR_ATTACHMENT0){for(let lt=0,xt=De.length;lt<xt;lt++)ee[lt]=o.COLOR_ATTACHMENT0+lt;ee.length=De.length,Me=!0}}else ee[0]!==o.COLOR_ATTACHMENT0&&(ee[0]=o.COLOR_ATTACHMENT0,Me=!0);else ee[0]!==o.BACK&&(ee[0]=o.BACK,Me=!0);Me&&(n.isWebGL2?o.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function nt(H){return y!==H?(o.useProgram(H),y=H,!0):!1}const Z={[Ps]:o.FUNC_ADD,[G_]:o.FUNC_SUBTRACT,[V_]:o.FUNC_REVERSE_SUBTRACT};if(r)Z[Gh]=o.MIN,Z[Vh]=o.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(Z[Gh]=H.MIN_EXT,Z[Vh]=H.MAX_EXT)}const Et={[W_]:o.ZERO,[X_]:o.ONE,[j_]:o.SRC_COLOR,[_m]:o.SRC_ALPHA,[Q_]:o.SRC_ALPHA_SATURATE,[$_]:o.DST_COLOR,[q_]:o.DST_ALPHA,[Y_]:o.ONE_MINUS_SRC_COLOR,[vm]:o.ONE_MINUS_SRC_ALPHA,[Z_]:o.ONE_MINUS_DST_COLOR,[K_]:o.ONE_MINUS_DST_ALPHA};function Xe(H,be,ee,Me,De,lt,xt,Tt){if(H===lr){g===!0&&(Ae(o.BLEND),g=!1);return}if(g===!1&&(Ue(o.BLEND),g=!0),H!==H_){if(H!==O||Tt!==R){if((C!==Ps||k!==Ps)&&(o.blendEquation(o.FUNC_ADD),C=Ps,k=Ps),Tt)switch(H){case Ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case kh:o.blendFunc(o.ONE,o.ONE);break;case Bh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hh:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case kh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Bh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hh:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,N=null,I=null,ne=null,O=H,R=Tt}return}De=De||be,lt=lt||ee,xt=xt||Me,(be!==C||De!==k)&&(o.blendEquationSeparate(Z[be],Z[De]),C=be,k=De),(ee!==b||Me!==N||lt!==I||xt!==ne)&&(o.blendFuncSeparate(Et[ee],Et[Me],Et[lt],Et[xt]),b=ee,N=Me,I=lt,ne=xt),O=H,R=!1}function Je(H,be){H.side===pi?Ae(o.CULL_FACE):Ue(o.CULL_FACE);let ee=H.side===wn;be&&(ee=!ee),je(ee),H.blending===Ds&&H.transparent===!1?Xe(lr):Xe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),p.setFunc(H.depthFunc),p.setTest(H.depthTest),p.setMask(H.depthWrite),c.setMask(H.colorWrite);const Me=H.stencilWrite;m.setTest(Me),Me&&(m.setMask(H.stencilWriteMask),m.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),m.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ve(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ue(o.SAMPLE_ALPHA_TO_COVERAGE):Ae(o.SAMPLE_ALPHA_TO_COVERAGE)}function je(H){D!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),D=H)}function _t(H){H!==z_?(Ue(o.CULL_FACE),H!==me&&(H===zh?o.cullFace(o.BACK):H===k_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ae(o.CULL_FACE),me=H}function Fe(H){H!==ce&&(he&&o.lineWidth(H),ce=H)}function Ve(H,be,ee){H?(Ue(o.POLYGON_OFFSET_FILL),(Y!==be||te!==ee)&&(o.polygonOffset(be,ee),Y=be,te=ee)):Ae(o.POLYGON_OFFSET_FILL)}function Ne(H){H?Ue(o.SCISSOR_TEST):Ae(o.SCISSOR_TEST)}function Ye(H){H===void 0&&(H=o.TEXTURE0+ie-1),se!==H&&(o.activeTexture(H),se=H)}function et(H,be,ee){ee===void 0&&(se===null?ee=o.TEXTURE0+ie-1:ee=se);let Me=A[ee];Me===void 0&&(Me={type:void 0,texture:void 0},A[ee]=Me),(Me.type!==H||Me.texture!==be)&&(se!==ee&&(o.activeTexture(ee),se=ee),o.bindTexture(H,be||Re[H]),Me.type=H,Me.texture=be)}function P(){const H=A[se];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function z(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(H){_e.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),_e.copy(H))}function Te(H){ge.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),ge.copy(H))}function Le(H,be){let ee=x.get(be);ee===void 0&&(ee=new WeakMap,x.set(be,ee));let Me=ee.get(H);Me===void 0&&(Me=o.getUniformBlockIndex(be,H.name),ee.set(H,Me))}function Qe(H,be){const Me=x.get(be).get(H);_.get(be)!==Me&&(o.uniformBlockBinding(be,Me,H.__bindingPointIndex),_.set(be,Me))}function dt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},se=null,A={},S={},w=new WeakMap,T=[],y=null,g=!1,O=null,C=null,b=null,N=null,k=null,I=null,ne=null,R=!1,D=null,me=null,ce=null,Y=null,te=null,_e.set(0,0,o.canvas.width,o.canvas.height),ge.set(0,0,o.canvas.width,o.canvas.height),c.reset(),p.reset(),m.reset()}return{buffers:{color:c,depth:p,stencil:m},enable:Ue,disable:Ae,bindFramebuffer:Ze,drawBuffers:Ot,useProgram:nt,setBlending:Xe,setMaterial:Je,setFlipSided:je,setCullFace:_t,setLineWidth:Fe,setPolygonOffset:Ve,setScissorTest:Ne,activeTexture:Ye,bindTexture:et,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:z,texImage3D:de,updateUBOMapping:Le,uniformBlockBinding:Qe,texStorage2D:ve,texStorage3D:J,texSubImage2D:pe,texSubImage3D:ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:Pe,scissor:Ce,viewport:Te,reset:dt}}function IM(o,e,n,r,a,u,d){const c=a.isWebGL2,p=a.maxTextures,m=a.maxCubemapSize,_=a.maxTextureSize,x=a.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let T;const y=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(P,E){return g?new OffscreenCanvas(P,E):hl("canvas")}function C(P,E,j,pe){let ae=1;if((P.width>pe||P.height>pe)&&(ae=pe/Math.max(P.width,P.height)),ae<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const fe=E?jc:Math.floor,Pe=fe(ae*P.width),ve=fe(ae*P.height);T===void 0&&(T=O(Pe,ve));const J=j?O(Pe,ve):T;return J.width=Pe,J.height=ve,J.getContext("2d").drawImage(P,0,0,Pe,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Pe+"x"+ve+")."),J}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function b(P){return gp(P.width)&&gp(P.height)}function N(P){return c?!1:P.wrapS!==ri||P.wrapT!==ri||P.minFilter!==mn&&P.minFilter!==Gn}function k(P,E){return P.generateMipmaps&&E&&P.minFilter!==mn&&P.minFilter!==Gn}function I(P){o.generateMipmap(P)}function ne(P,E,j,pe,ae=!1){if(c===!1)return E;if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=E;return E===o.RED&&(j===o.FLOAT&&(fe=o.R32F),j===o.HALF_FLOAT&&(fe=o.R16F),j===o.UNSIGNED_BYTE&&(fe=o.R8)),E===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(fe=o.R8UI),j===o.UNSIGNED_SHORT&&(fe=o.R16UI),j===o.UNSIGNED_INT&&(fe=o.R32UI),j===o.BYTE&&(fe=o.R8I),j===o.SHORT&&(fe=o.R16I),j===o.INT&&(fe=o.R32I)),E===o.RG&&(j===o.FLOAT&&(fe=o.RG32F),j===o.HALF_FLOAT&&(fe=o.RG16F),j===o.UNSIGNED_BYTE&&(fe=o.RG8)),E===o.RGBA&&(j===o.FLOAT&&(fe=o.RGBA32F),j===o.HALF_FLOAT&&(fe=o.RGBA16F),j===o.UNSIGNED_BYTE&&(fe=pe===ft&&ae===!1?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)),(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(P,E,j){return k(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==mn&&P.minFilter!==Gn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function D(P){return P===mn||P===Wh||P===oc?o.NEAREST:o.LINEAR}function me(P){const E=P.target;E.removeEventListener("dispose",me),Y(E),E.isVideoTexture&&w.delete(E)}function ce(P){const E=P.target;E.removeEventListener("dispose",ce),ie(E)}function Y(P){const E=r.get(P);if(E.__webglInit===void 0)return;const j=P.source,pe=y.get(j);if(pe){const ae=pe[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&te(P),Object.keys(pe).length===0&&y.delete(j)}r.remove(P)}function te(P){const E=r.get(P);o.deleteTexture(E.__webglTexture);const j=P.source,pe=y.get(j);delete pe[E.__cacheKey],d.memory.textures--}function ie(P){const E=P.texture,j=r.get(P),pe=r.get(E);if(pe.__webglTexture!==void 0&&(o.deleteTexture(pe.__webglTexture),d.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(j.__webglFramebuffer[ae]))for(let fe=0;fe<j.__webglFramebuffer[ae].length;fe++)o.deleteFramebuffer(j.__webglFramebuffer[ae][fe]);else o.deleteFramebuffer(j.__webglFramebuffer[ae]);j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer[ae])}else{if(Array.isArray(j.__webglFramebuffer))for(let ae=0;ae<j.__webglFramebuffer.length;ae++)o.deleteFramebuffer(j.__webglFramebuffer[ae]);else o.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&o.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ae=0;ae<j.__webglColorRenderbuffer.length;ae++)j.__webglColorRenderbuffer[ae]&&o.deleteRenderbuffer(j.__webglColorRenderbuffer[ae]);j.__webglDepthRenderbuffer&&o.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ae=0,fe=E.length;ae<fe;ae++){const Pe=r.get(E[ae]);Pe.__webglTexture&&(o.deleteTexture(Pe.__webglTexture),d.memory.textures--),r.remove(E[ae])}r.remove(E),r.remove(P)}let he=0;function oe(){he=0}function V(){const P=he;return P>=p&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+p),he+=1,P}function se(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function A(P,E){const j=r.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(j,P,E);return}}n.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+E)}function F(P,E){const j=r.get(P);if(P.version>0&&j.__version!==P.version){Ze(j,P,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+E)}function W(P,E){const j=r.get(P);if(P.version>0&&j.__version!==P.version){Ze(j,P,E);return}n.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+E)}function _e(P,E){const j=r.get(P);if(P.version>0&&j.__version!==P.version){Ot(j,P,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+E)}const ge={[Gc]:o.REPEAT,[ri]:o.CLAMP_TO_EDGE,[Vc]:o.MIRRORED_REPEAT},Se={[mn]:o.NEAREST,[Wh]:o.NEAREST_MIPMAP_NEAREST,[oc]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[hv]:o.LINEAR_MIPMAP_NEAREST,[Uo]:o.LINEAR_MIPMAP_LINEAR},Re={[Rv]:o.NEVER,[Iv]:o.ALWAYS,[Cv]:o.LESS,[Pv]:o.LEQUAL,[Lv]:o.EQUAL,[Uv]:o.GEQUAL,[bv]:o.GREATER,[Dv]:o.NOTEQUAL};function Ue(P,E,j){if(j?(o.texParameteri(P,o.TEXTURE_WRAP_S,ge[E.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,ge[E.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,ge[E.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,Se[E.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,Se[E.minFilter])):(o.texParameteri(P,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(P,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(E.wrapS!==ri||E.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(P,o.TEXTURE_MAG_FILTER,D(E.magFilter)),o.texParameteri(P,o.TEXTURE_MIN_FILTER,D(E.minFilter)),E.minFilter!==mn&&E.minFilter!==Gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,Re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===mn||E.minFilter!==oc&&E.minFilter!==Uo||E.type===ar&&e.has("OES_texture_float_linear")===!1||c===!1&&E.type===Io&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(o.texParameterf(P,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function Ae(P,E){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",me));const pe=E.source;let ae=y.get(pe);ae===void 0&&(ae={},y.set(pe,ae));const fe=se(E);if(fe!==P.__cacheKey){ae[fe]===void 0&&(ae[fe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,j=!0),ae[fe].usedTimes++;const Pe=ae[P.__cacheKey];Pe!==void 0&&(ae[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&te(E)),P.__cacheKey=fe,P.__webglTexture=ae[fe].texture}return j}function Ze(P,E,j){let pe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=o.TEXTURE_3D);const ae=Ae(P,E),fe=E.source;n.bindTexture(pe,P.__webglTexture,o.TEXTURE0+j);const Pe=r.get(fe);if(fe.version!==Pe.__version||ae===!0){n.activeTexture(o.TEXTURE0+j),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const ve=N(E)&&b(E.image)===!1;let J=C(E.image,ve,!1,_);J=et(E,J);const z=b(J)||c,de=u.convert(E.format,E.colorSpace);let Ce=u.convert(E.type),Te=ne(E.internalFormat,de,Ce,E.colorSpace);Ue(pe,E,z);let Le;const Qe=E.mipmaps,dt=c&&E.isVideoTexture!==!0,H=Pe.__version===void 0||ae===!0,be=R(E,J,z);if(E.isDepthTexture)Te=o.DEPTH_COMPONENT,c?E.type===ar?Te=o.DEPTH_COMPONENT32F:E.type===or?Te=o.DEPTH_COMPONENT24:E.type===Ur?Te=o.DEPTH24_STENCIL8:Te=o.DEPTH_COMPONENT16:E.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ir&&Te===o.DEPTH_COMPONENT&&E.type!==Zc&&E.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=or,Ce=u.convert(E.type)),E.format===Fs&&Te===o.DEPTH_COMPONENT&&(Te=o.DEPTH_STENCIL,E.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ur,Ce=u.convert(E.type))),H&&(dt?n.texStorage2D(o.TEXTURE_2D,1,Te,J.width,J.height):n.texImage2D(o.TEXTURE_2D,0,Te,J.width,J.height,0,de,Ce,null));else if(E.isDataTexture)if(Qe.length>0&&z){dt&&H&&n.texStorage2D(o.TEXTURE_2D,be,Te,Qe[0].width,Qe[0].height);for(let ee=0,Me=Qe.length;ee<Me;ee++)Le=Qe[ee],dt?n.texSubImage2D(o.TEXTURE_2D,ee,0,0,Le.width,Le.height,de,Ce,Le.data):n.texImage2D(o.TEXTURE_2D,ee,Te,Le.width,Le.height,0,de,Ce,Le.data);E.generateMipmaps=!1}else dt?(H&&n.texStorage2D(o.TEXTURE_2D,be,Te,J.width,J.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,J.width,J.height,de,Ce,J.data)):n.texImage2D(o.TEXTURE_2D,0,Te,J.width,J.height,0,de,Ce,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){dt&&H&&n.texStorage3D(o.TEXTURE_2D_ARRAY,be,Te,Qe[0].width,Qe[0].height,J.depth);for(let ee=0,Me=Qe.length;ee<Me;ee++)Le=Qe[ee],E.format!==si?de!==null?dt?n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ee,0,0,0,Le.width,Le.height,J.depth,de,Le.data,0,0):n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ee,Te,Le.width,Le.height,J.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?n.texSubImage3D(o.TEXTURE_2D_ARRAY,ee,0,0,0,Le.width,Le.height,J.depth,de,Ce,Le.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ee,Te,Le.width,Le.height,J.depth,0,de,Ce,Le.data)}else{dt&&H&&n.texStorage2D(o.TEXTURE_2D,be,Te,Qe[0].width,Qe[0].height);for(let ee=0,Me=Qe.length;ee<Me;ee++)Le=Qe[ee],E.format!==si?de!==null?dt?n.compressedTexSubImage2D(o.TEXTURE_2D,ee,0,0,Le.width,Le.height,de,Le.data):n.compressedTexImage2D(o.TEXTURE_2D,ee,Te,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?n.texSubImage2D(o.TEXTURE_2D,ee,0,0,Le.width,Le.height,de,Ce,Le.data):n.texImage2D(o.TEXTURE_2D,ee,Te,Le.width,Le.height,0,de,Ce,Le.data)}else if(E.isDataArrayTexture)dt?(H&&n.texStorage3D(o.TEXTURE_2D_ARRAY,be,Te,J.width,J.height,J.depth),n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,Ce,J.data)):n.texImage3D(o.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,de,Ce,J.data);else if(E.isData3DTexture)dt?(H&&n.texStorage3D(o.TEXTURE_3D,be,Te,J.width,J.height,J.depth),n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,Ce,J.data)):n.texImage3D(o.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,de,Ce,J.data);else if(E.isFramebufferTexture){if(H)if(dt)n.texStorage2D(o.TEXTURE_2D,be,Te,J.width,J.height);else{let ee=J.width,Me=J.height;for(let De=0;De<be;De++)n.texImage2D(o.TEXTURE_2D,De,Te,ee,Me,0,de,Ce,null),ee>>=1,Me>>=1}}else if(Qe.length>0&&z){dt&&H&&n.texStorage2D(o.TEXTURE_2D,be,Te,Qe[0].width,Qe[0].height);for(let ee=0,Me=Qe.length;ee<Me;ee++)Le=Qe[ee],dt?n.texSubImage2D(o.TEXTURE_2D,ee,0,0,de,Ce,Le):n.texImage2D(o.TEXTURE_2D,ee,Te,de,Ce,Le);E.generateMipmaps=!1}else dt?(H&&n.texStorage2D(o.TEXTURE_2D,be,Te,J.width,J.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,de,Ce,J)):n.texImage2D(o.TEXTURE_2D,0,Te,de,Ce,J);k(E,z)&&I(pe),Pe.__version=fe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ot(P,E,j){if(E.image.length!==6)return;const pe=Ae(P,E),ae=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+j);const fe=r.get(ae);if(ae.version!==fe.__version||pe===!0){n.activeTexture(o.TEXTURE0+j),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,ve=E.image[0]&&E.image[0].isDataTexture,J=[];for(let ee=0;ee<6;ee++)!Pe&&!ve?J[ee]=C(E.image[ee],!1,!0,m):J[ee]=ve?E.image[ee].image:E.image[ee],J[ee]=et(E,J[ee]);const z=J[0],de=b(z)||c,Ce=u.convert(E.format,E.colorSpace),Te=u.convert(E.type),Le=ne(E.internalFormat,Ce,Te,E.colorSpace),Qe=c&&E.isVideoTexture!==!0,dt=fe.__version===void 0||pe===!0;let H=R(E,z,de);Ue(o.TEXTURE_CUBE_MAP,E,de);let be;if(Pe){Qe&&dt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,H,Le,z.width,z.height);for(let ee=0;ee<6;ee++){be=J[ee].mipmaps;for(let Me=0;Me<be.length;Me++){const De=be[Me];E.format!==si?Ce!==null?Qe?n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,0,0,De.width,De.height,Ce,De.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,Le,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,0,0,De.width,De.height,Ce,Te,De.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,Le,De.width,De.height,0,Ce,Te,De.data)}}}else{be=E.mipmaps,Qe&&dt&&(be.length>0&&H++,n.texStorage2D(o.TEXTURE_CUBE_MAP,H,Le,J[0].width,J[0].height));for(let ee=0;ee<6;ee++)if(ve){Qe?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,J[ee].width,J[ee].height,Ce,Te,J[ee].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Le,J[ee].width,J[ee].height,0,Ce,Te,J[ee].data);for(let Me=0;Me<be.length;Me++){const lt=be[Me].image[ee].image;Qe?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,0,0,lt.width,lt.height,Ce,Te,lt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,Le,lt.width,lt.height,0,Ce,Te,lt.data)}}else{Qe?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,Te,J[ee]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Le,Ce,Te,J[ee]);for(let Me=0;Me<be.length;Me++){const De=be[Me];Qe?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,0,0,Ce,Te,De.image[ee]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,Le,Ce,Te,De.image[ee])}}}k(E,de)&&I(o.TEXTURE_CUBE_MAP),fe.__version=ae.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function nt(P,E,j,pe,ae,fe){const Pe=u.convert(j.format,j.colorSpace),ve=u.convert(j.type),J=ne(j.internalFormat,Pe,ve,j.colorSpace);if(!r.get(E).__hasExternalTextures){const de=Math.max(1,E.width>>fe),Ce=Math.max(1,E.height>>fe);ae===o.TEXTURE_3D||ae===o.TEXTURE_2D_ARRAY?n.texImage3D(ae,fe,J,de,Ce,E.depth,0,Pe,ve,null):n.texImage2D(ae,fe,J,de,Ce,0,Pe,ve,null)}n.bindFramebuffer(o.FRAMEBUFFER,P),Ne(E)?v.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ae,r.get(j).__webglTexture,0,Ve(E)):(ae===o.TEXTURE_2D||ae>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ae,r.get(j).__webglTexture,fe),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Z(P,E,j){if(o.bindRenderbuffer(o.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let pe=o.DEPTH_COMPONENT16;if(j||Ne(E)){const ae=E.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ar?pe=o.DEPTH_COMPONENT32F:ae.type===or&&(pe=o.DEPTH_COMPONENT24));const fe=Ve(E);Ne(E)?v.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,fe,pe,E.width,E.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,fe,pe,E.width,E.height)}else o.renderbufferStorage(o.RENDERBUFFER,pe,E.width,E.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const pe=Ve(E);j&&Ne(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,o.DEPTH24_STENCIL8,E.width,E.height):Ne(E)?v.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,o.DEPTH24_STENCIL8,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,P)}else{const pe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ae=0;ae<pe.length;ae++){const fe=pe[ae],Pe=u.convert(fe.format,fe.colorSpace),ve=u.convert(fe.type),J=ne(fe.internalFormat,Pe,ve,fe.colorSpace),z=Ve(E);j&&Ne(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,z,J,E.width,E.height):Ne(E)?v.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,z,J,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,J,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Et(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),A(E.depthTexture,0);const pe=r.get(E.depthTexture).__webglTexture,ae=Ve(E);if(E.depthTexture.format===Ir)Ne(E)?v.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pe,0,ae):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pe,0);else if(E.depthTexture.format===Fs)Ne(E)?v.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pe,0,ae):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Xe(P){const E=r.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Et(E.__webglFramebuffer,P)}else if(j){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]=o.createRenderbuffer(),Z(E.__webglDepthbuffer[pe],P,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),Z(E.__webglDepthbuffer,P,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(P,E,j){const pe=r.get(P);E!==void 0&&nt(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&Xe(P)}function je(P){const E=P.texture,j=r.get(P),pe=r.get(E);P.addEventListener("dispose",ce),P.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=E.version,d.memory.textures++);const ae=P.isWebGLCubeRenderTarget===!0,fe=P.isWebGLMultipleRenderTargets===!0,Pe=b(P)||c;if(ae){j.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(c&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[ve]=[];for(let J=0;J<E.mipmaps.length;J++)j.__webglFramebuffer[ve][J]=o.createFramebuffer()}else j.__webglFramebuffer[ve]=o.createFramebuffer()}else{if(c&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)j.__webglFramebuffer[ve]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(fe)if(a.drawBuffers){const ve=P.texture;for(let J=0,z=ve.length;J<z;J++){const de=r.get(ve[J]);de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&P.samples>0&&Ne(P)===!1){const ve=fe?E:[E];j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let J=0;J<ve.length;J++){const z=ve[J];j.__webglColorRenderbuffer[J]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[J]);const de=u.convert(z.format,z.colorSpace),Ce=u.convert(z.type),Te=ne(z.internalFormat,de,Ce,z.colorSpace,P.isXRRenderTarget===!0),Le=Ve(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Le,Te,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+J,o.RENDERBUFFER,j.__webglColorRenderbuffer[J])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),Z(j.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ae){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),Ue(o.TEXTURE_CUBE_MAP,E,Pe);for(let ve=0;ve<6;ve++)if(c&&E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)nt(j.__webglFramebuffer[ve][J],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,J);else nt(j.__webglFramebuffer[ve],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);k(E,Pe)&&I(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){const ve=P.texture;for(let J=0,z=ve.length;J<z;J++){const de=ve[J],Ce=r.get(de);n.bindTexture(o.TEXTURE_2D,Ce.__webglTexture),Ue(o.TEXTURE_2D,de,Pe),nt(j.__webglFramebuffer,P,de,o.COLOR_ATTACHMENT0+J,o.TEXTURE_2D,0),k(de,Pe)&&I(o.TEXTURE_2D)}n.unbindTexture()}else{let ve=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(c?ve=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ve,pe.__webglTexture),Ue(ve,E,Pe),c&&E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)nt(j.__webglFramebuffer[J],P,E,o.COLOR_ATTACHMENT0,ve,J);else nt(j.__webglFramebuffer,P,E,o.COLOR_ATTACHMENT0,ve,0);k(E,Pe)&&I(ve),n.unbindTexture()}P.depthBuffer&&Xe(P)}function _t(P){const E=b(P)||c,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let pe=0,ae=j.length;pe<ae;pe++){const fe=j[pe];if(k(fe,E)){const Pe=P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,ve=r.get(fe).__webglTexture;n.bindTexture(Pe,ve),I(Pe),n.unbindTexture()}}}function Fe(P){if(c&&P.samples>0&&Ne(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,pe=P.height;let ae=o.COLOR_BUFFER_BIT;const fe=[],Pe=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ve=r.get(P),J=P.isWebGLMultipleRenderTargets===!0;if(J)for(let z=0;z<E.length;z++)n.bindFramebuffer(o.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+z,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+z,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let z=0;z<E.length;z++){fe.push(o.COLOR_ATTACHMENT0+z),P.depthBuffer&&fe.push(Pe);const de=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(de===!1&&(P.depthBuffer&&(ae|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ae|=o.STENCIL_BUFFER_BIT)),J&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ve.__webglColorRenderbuffer[z]),de===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Pe]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Pe])),J){const Ce=r.get(E[z]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ce,0)}o.blitFramebuffer(0,0,j,pe,0,0,j,pe,ae,o.NEAREST),S&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,fe)}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),J)for(let z=0;z<E.length;z++){n.bindFramebuffer(o.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+z,o.RENDERBUFFER,ve.__webglColorRenderbuffer[z]);const de=r.get(E[z]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+z,o.TEXTURE_2D,de,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function Ve(P){return Math.min(x,P.samples)}function Ne(P){const E=r.get(P);return c&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(P){const E=d.render.frame;w.get(P)!==E&&(w.set(P,E),P.update())}function et(P,E){const j=P.colorSpace,pe=P.format,ae=P.type;return P.isCompressedTexture===!0||P.format===Wc||j!==mi&&j!==Fr&&(j===ft?c===!1?e.has("EXT_sRGB")===!0&&pe===si?(P.format=Wc,P.minFilter=Gn,P.generateMipmaps=!1):E=Pm.sRGBToLinear(E):(pe!==si||ae!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}this.allocateTextureUnit=V,this.resetTextureUnits=oe,this.setTexture2D=A,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=_e,this.rebindTextures=Je,this.setupRenderTarget=je,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Ne}function NM(o,e,n){const r=n.isWebGL2;function a(u,d=Fr){let c;if(u===cr)return o.UNSIGNED_BYTE;if(u===Sm)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Mm)return o.UNSIGNED_SHORT_5_5_5_1;if(u===pv)return o.BYTE;if(u===mv)return o.SHORT;if(u===Zc)return o.UNSIGNED_SHORT;if(u===ym)return o.INT;if(u===or)return o.UNSIGNED_INT;if(u===ar)return o.FLOAT;if(u===Io)return r?o.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(u===gv)return o.ALPHA;if(u===si)return o.RGBA;if(u===_v)return o.LUMINANCE;if(u===vv)return o.LUMINANCE_ALPHA;if(u===Ir)return o.DEPTH_COMPONENT;if(u===Fs)return o.DEPTH_STENCIL;if(u===Wc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(u===xv)return o.RED;if(u===Em)return o.RED_INTEGER;if(u===yv)return o.RG;if(u===Tm)return o.RG_INTEGER;if(u===wm)return o.RGBA_INTEGER;if(u===ac||u===lc||u===uc||u===cc)if(d===ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(u===ac)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(u===ac)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===lc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===uc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===cc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===Xh||u===jh||u===Yh||u===qh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(u===Xh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===jh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===qh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===Sv)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Kh||u===$h)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(u===Kh)return d===ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(u===$h)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Zh||u===Qh||u===Jh||u===ep||u===tp||u===np||u===ip||u===rp||u===sp||u===op||u===ap||u===lp||u===up||u===cp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(u===Zh)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Qh)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Jh)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===ep)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===tp)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===np)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===ip)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===rp)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===sp)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===op)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===ap)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===lp)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===up)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===cp)return d===ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===fc)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(u===fc)return d===ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(u===Mv||u===fp||u===dp||u===hp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(u===fc)return c.COMPRESSED_RED_RGTC1_EXT;if(u===fp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===dp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===hp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===Ur?r?o.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:a}}class FM extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sl extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OM={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,d=null;const c=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=_.position.distanceTo(x.position),S=.02,w=.005;m.inputState.pinching&&v>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));c!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(OM)))}return c!==null&&(c.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class zM extends Un{constructor(e,n,r,a,u,d,c,p,m,_){if(_=_!==void 0?_:Ir,_!==Ir&&_!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Ir&&(r=or),r===void 0&&_===Fs&&(r=Ur),super(null,a,u,d,c,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:mn,this.minFilter=p!==void 0?p:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class kM extends kr{constructor(e,n){super();const r=this;let a=null,u=1,d=null,c="local-floor",p=1,m=null,_=null,x=null,v=null,S=null,w=null;const T=n.getContextAttributes();let y=null,g=null;const O=[],C=[],b=new Vn;b.layers.enable(1),b.viewport=new tn;const N=new Vn;N.layers.enable(2),N.viewport=new tn;const k=[b,N],I=new FM;I.layers.enable(1),I.layers.enable(2);let ne=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let W=O[F];return W===void 0&&(W=new Ic,O[F]=W),W.getTargetRaySpace()},this.getControllerGrip=function(F){let W=O[F];return W===void 0&&(W=new Ic,O[F]=W),W.getGripSpace()},this.getHand=function(F){let W=O[F];return W===void 0&&(W=new Ic,O[F]=W),W.getHandSpace()};function D(F){const W=C.indexOf(F.inputSource);if(W===-1)return;const _e=O[W];_e!==void 0&&(_e.update(F.inputSource,F.frame,m||d),_e.dispatchEvent({type:F.type,data:F.inputSource}))}function me(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",me),a.removeEventListener("inputsourceschange",ce);for(let F=0;F<O.length;F++){const W=C[F];W!==null&&(C[F]=null,O[F].disconnect(W))}ne=null,R=null,e.setRenderTarget(y),S=null,v=null,x=null,a=null,g=null,A.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){u=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){c=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(F){m=F},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(F){if(a=F,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",me),a.addEventListener("inputsourceschange",ce),T.xrCompatible!==!0&&await n.makeXRCompatible(),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:a.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,W),a.updateRenderState({baseLayer:S}),g=new Or(S.framebufferWidth,S.framebufferHeight,{format:si,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let W=null,_e=null,ge=null;T.depth&&(ge=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=T.stencil?Fs:Ir,_e=T.stencil?Ur:or);const Se={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:u};x=new XRWebGLBinding(a,n),v=x.createProjectionLayer(Se),a.updateRenderState({layers:[v]}),g=new Or(v.textureWidth,v.textureHeight,{format:si,type:cr,depthTexture:new zM(v.textureWidth,v.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const Re=e.properties.get(g);Re.__ignoreDepthValues=v.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await a.requestReferenceSpace(c),A.setContext(a),A.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ce(F){for(let W=0;W<F.removed.length;W++){const _e=F.removed[W],ge=C.indexOf(_e);ge>=0&&(C[ge]=null,O[ge].disconnect(_e))}for(let W=0;W<F.added.length;W++){const _e=F.added[W];let ge=C.indexOf(_e);if(ge===-1){for(let Re=0;Re<O.length;Re++)if(Re>=C.length){C.push(_e),ge=Re;break}else if(C[Re]===null){C[Re]=_e,ge=Re;break}if(ge===-1)break}const Se=O[ge];Se&&Se.connect(_e)}}const Y=new X,te=new X;function ie(F,W,_e){Y.setFromMatrixPosition(W.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);const ge=Y.distanceTo(te),Se=W.projectionMatrix.elements,Re=_e.projectionMatrix.elements,Ue=Se[14]/(Se[10]-1),Ae=Se[14]/(Se[10]+1),Ze=(Se[9]+1)/Se[5],Ot=(Se[9]-1)/Se[5],nt=(Se[8]-1)/Se[0],Z=(Re[8]+1)/Re[0],Et=Ue*nt,Xe=Ue*Z,Je=ge/(-nt+Z),je=Je*-nt;W.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(je),F.translateZ(Je),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const _t=Ue+Je,Fe=Ae+Je,Ve=Et-je,Ne=Xe+(ge-je),Ye=Ze*Ae/Fe*_t,et=Ot*Ae/Fe*_t;F.projectionMatrix.makePerspective(Ve,Ne,Ye,et,_t,Fe),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function he(F,W){W===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(W.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(a===null)return;I.near=N.near=b.near=F.near,I.far=N.far=b.far=F.far,(ne!==I.near||R!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),ne=I.near,R=I.far);const W=F.parent,_e=I.cameras;he(I,W);for(let ge=0;ge<_e.length;ge++)he(_e[ge],W);_e.length===2?ie(I,b,N):I.projectionMatrix.copy(b.projectionMatrix),oe(F,I,W)};function oe(F,W,_e){_e===null?F.matrix.copy(W.matrixWorld):(F.matrix.copy(_e.matrixWorld),F.matrix.invert(),F.matrix.multiply(W.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0);const ge=F.children;for(let Se=0,Re=ge.length;Se<Re;Se++)ge[Se].updateMatrixWorld(!0);F.projectionMatrix.copy(W.projectionMatrix),F.projectionMatrixInverse.copy(W.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Xc*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(F){p=F,v!==null&&(v.fixedFoveation=F),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=F)};let V=null;function se(F,W){if(_=W.getViewerPose(m||d),w=W,_!==null){const _e=_.views;S!==null&&(e.setRenderTargetFramebuffer(g,S.framebuffer),e.setRenderTarget(g));let ge=!1;_e.length!==I.cameras.length&&(I.cameras.length=0,ge=!0);for(let Se=0;Se<_e.length;Se++){const Re=_e[Se];let Ue=null;if(S!==null)Ue=S.getViewport(Re);else{const Ze=x.getViewSubImage(v,Re);Ue=Ze.viewport,Se===0&&(e.setRenderTargetTextures(g,Ze.colorTexture,v.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(g))}let Ae=k[Se];Ae===void 0&&(Ae=new Vn,Ae.layers.enable(Se),Ae.viewport=new tn,k[Se]=Ae),Ae.matrix.fromArray(Re.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Re.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Se===0&&(I.matrix.copy(Ae.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ge===!0&&I.cameras.push(Ae)}}for(let _e=0;_e<O.length;_e++){const ge=C[_e],Se=O[_e];ge!==null&&Se!==void 0&&Se.update(ge,W,m||d)}V&&V(F,W),W.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:W}),w=null}const A=new Hm;A.setAnimationLoop(se),this.setAnimationLoop=function(F){V=F},this.dispose=function(){}}}function BM(o,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,zm(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,O,C,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),x(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),v(y,g),g.isMeshPhysicalMaterial&&S(y,g,b)):g.isMeshMatcapMaterial?(u(y,g),w(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),T(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(d(y,g),g.isLineDashedMaterial&&c(y,g)):g.isPointsMaterial?p(y,g,O,C):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===wn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===wn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const O=e.get(g).envMap;if(O&&(y.envMap.value=O,y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;const C=o._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*C,n(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function c(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,O,C){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*O,y.scale.value=C*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,O){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wn&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const O=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function HM(o,e,n,r){let a={},u={},d=[];const c=n.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(O,C){const b=C.program;r.uniformBlockBinding(O,b)}function m(O,C){let b=a[O.id];b===void 0&&(w(O),b=_(O),a[O.id]=b,O.addEventListener("dispose",y));const N=C.program;r.updateUBOMapping(O,N);const k=e.render.frame;u[O.id]!==k&&(v(O),u[O.id]=k)}function _(O){const C=x();O.__bindingPointIndex=C;const b=o.createBuffer(),N=O.__size,k=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,N,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,b),b}function x(){for(let O=0;O<c;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const C=a[O.id],b=O.uniforms,N=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let k=0,I=b.length;k<I;k++){const ne=b[k];if(S(ne,k,N)===!0){const R=ne.__offset,D=Array.isArray(ne.value)?ne.value:[ne.value];let me=0;for(let ce=0;ce<D.length;ce++){const Y=D[ce],te=T(Y);typeof Y=="number"?(ne.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,R+me,ne.__data)):Y.isMatrix3?(ne.__data[0]=Y.elements[0],ne.__data[1]=Y.elements[1],ne.__data[2]=Y.elements[2],ne.__data[3]=Y.elements[0],ne.__data[4]=Y.elements[3],ne.__data[5]=Y.elements[4],ne.__data[6]=Y.elements[5],ne.__data[7]=Y.elements[0],ne.__data[8]=Y.elements[6],ne.__data[9]=Y.elements[7],ne.__data[10]=Y.elements[8],ne.__data[11]=Y.elements[0]):(Y.toArray(ne.__data,me),me+=te.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,R,ne.__data)}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(O,C,b){const N=O.value;if(b[C]===void 0){if(typeof N=="number")b[C]=N;else{const k=Array.isArray(N)?N:[N],I=[];for(let ne=0;ne<k.length;ne++)I.push(k[ne].clone());b[C]=I}return!0}else if(typeof N=="number"){if(b[C]!==N)return b[C]=N,!0}else{const k=Array.isArray(b[C])?b[C]:[b[C]],I=Array.isArray(N)?N:[N];for(let ne=0;ne<k.length;ne++){const R=k[ne];if(R.equals(I[ne])===!1)return R.copy(I[ne]),!0}}return!1}function w(O){const C=O.uniforms;let b=0;const N=16;let k=0;for(let I=0,ne=C.length;I<ne;I++){const R=C[I],D={boundary:0,storage:0},me=Array.isArray(R.value)?R.value:[R.value];for(let ce=0,Y=me.length;ce<Y;ce++){const te=me[ce],ie=T(te);D.boundary+=ie.boundary,D.storage+=ie.storage}if(R.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,I>0){k=b%N;const ce=N-k;k!==0&&ce-D.boundary<0&&(b+=N-k,R.__offset=b)}b+=D.storage}return k=b%N,k>0&&(b+=N-k),O.__size=b,O.__cache={},this}function T(O){const C={boundary:0,storage:0};return typeof O=="number"?(C.boundary=4,C.storage=4):O.isVector2?(C.boundary=8,C.storage=8):O.isVector3||O.isColor?(C.boundary=16,C.storage=12):O.isVector4?(C.boundary=16,C.storage=16):O.isMatrix3?(C.boundary=48,C.storage=48):O.isMatrix4?(C.boundary=64,C.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),C}function y(O){const C=O.target;C.removeEventListener("dispose",y);const b=d.indexOf(C.__bindingPointIndex);d.splice(b,1),o.deleteBuffer(a[C.id]),delete a[C.id],delete u[C.id]}function g(){for(const O in a)o.deleteBuffer(a[O]);d=[],a={},u={}}return{bind:p,update:m,dispose:g}}function GM(){const o=hl("canvas");return o.style.display="block",o}class Ym{constructor(e={}){const{canvas:n=GM(),context:r=null,depth:a=!0,stencil:u=!0,alpha:d=!1,antialias:c=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let v;r!==null?v=r.getContextAttributes().alpha:v=d;const S=new Uint32Array(4),w=new Int32Array(4);let T=null,y=null;const g=[],O=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ft,this._useLegacyLights=!1,this.toneMapping=ur,this.toneMappingExposure=1;const C=this;let b=!1,N=0,k=0,I=null,ne=-1,R=null;const D=new tn,me=new tn;let ce=null;const Y=new gt(0);let te=0,ie=n.width,he=n.height,oe=1,V=null,se=null;const A=new tn(0,0,ie,he),F=new tn(0,0,ie,he);let W=!1;const _e=new Jc;let ge=!1,Se=!1,Re=null;const Ue=new It,Ae=new at,Ze=new X,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return I===null?oe:1}let Z=r;function Et(L,Q){for(let ue=0;ue<L.length;ue++){const K=L[ue],le=n.getContext(K,Q);if(le!==null)return le}return null}try{const L={alpha:!0,depth:a,stencil:u,antialias:c,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kc}`),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",ee,!1),n.addEventListener("webglcontextcreationerror",Me,!1),Z===null){const Q=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&Q.shift(),Z=Et(Q,L),Z===null)throw Et(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Xe,Je,je,_t,Fe,Ve,Ne,Ye,et,P,E,j,pe,ae,fe,Pe,ve,J,z,de,Ce,Te,Le,Qe;function dt(){Xe=new Qy(Z),Je=new jy(Z,Xe,e),Xe.init(Je),Te=new NM(Z,Xe,Je),je=new UM(Z,Xe,Je),_t=new tS(Z),Fe=new xM,Ve=new IM(Z,Xe,je,Fe,Je,Te,_t),Ne=new qy(C),Ye=new Zy(C),et=new f0(Z,Je),Le=new Wy(Z,Xe,et,Je),P=new Jy(Z,et,_t,Le),E=new sS(Z,P,et,_t),z=new rS(Z,Je,Ve),Pe=new Yy(Fe),j=new vM(C,Ne,Ye,Xe,Je,Le,Pe),pe=new BM(C,Fe),ae=new SM,fe=new RM(Xe,Je),J=new Vy(C,Ne,Ye,je,E,v,p),ve=new DM(C,E,Je),Qe=new HM(Z,_t,Je,je),de=new Xy(Z,Xe,_t,Je),Ce=new eS(Z,Xe,_t,Je),_t.programs=j.programs,C.capabilities=Je,C.extensions=Xe,C.properties=Fe,C.renderLists=ae,C.shadowMap=ve,C.state=je,C.info=_t}dt();const H=new kM(C,Z);this.xr=H,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const L=Xe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Xe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(L){L!==void 0&&(oe=L,this.setSize(ie,he,!1))},this.getSize=function(L){return L.set(ie,he)},this.setSize=function(L,Q,ue=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=L,he=Q,n.width=Math.floor(L*oe),n.height=Math.floor(Q*oe),ue===!0&&(n.style.width=L+"px",n.style.height=Q+"px"),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(ie*oe,he*oe).floor()},this.setDrawingBufferSize=function(L,Q,ue){ie=L,he=Q,oe=ue,n.width=Math.floor(L*ue),n.height=Math.floor(Q*ue),this.setViewport(0,0,L,Q)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(A)},this.setViewport=function(L,Q,ue,K){L.isVector4?A.set(L.x,L.y,L.z,L.w):A.set(L,Q,ue,K),je.viewport(D.copy(A).multiplyScalar(oe).floor())},this.getScissor=function(L){return L.copy(F)},this.setScissor=function(L,Q,ue,K){L.isVector4?F.set(L.x,L.y,L.z,L.w):F.set(L,Q,ue,K),je.scissor(me.copy(F).multiplyScalar(oe).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(L){je.setScissorTest(W=L)},this.setOpaqueSort=function(L){V=L},this.setTransparentSort=function(L){se=L},this.getClearColor=function(L){return L.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(L=!0,Q=!0,ue=!0){let K=0;if(L){let le=!1;if(I!==null){const ke=I.texture.format;le=ke===wm||ke===Tm||ke===Em}if(le){const ke=I.texture.type,qe=ke===cr||ke===or||ke===Zc||ke===Ur||ke===Sm||ke===Mm,tt=J.getClearColor(),it=J.getClearAlpha(),ht=tt.r,ze=tt.g,st=tt.b;qe?(S[0]=ht,S[1]=ze,S[2]=st,S[3]=it,Z.clearBufferuiv(Z.COLOR,0,S)):(w[0]=ht,w[1]=ze,w[2]=st,w[3]=it,Z.clearBufferiv(Z.COLOR,0,w))}else K|=Z.COLOR_BUFFER_BIT}Q&&(K|=Z.DEPTH_BUFFER_BIT),ue&&(K|=Z.STENCIL_BUFFER_BIT),Z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",ee,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),ae.dispose(),fe.dispose(),Fe.dispose(),Ne.dispose(),Ye.dispose(),E.dispose(),Le.dispose(),Qe.dispose(),j.dispose(),H.dispose(),H.removeEventListener("sessionstart",St),H.removeEventListener("sessionend",An),Re&&(Re.dispose(),Re=null),zt.stop()};function be(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const L=_t.autoReset,Q=ve.enabled,ue=ve.autoUpdate,K=ve.needsUpdate,le=ve.type;dt(),_t.autoReset=L,ve.enabled=Q,ve.autoUpdate=ue,ve.needsUpdate=K,ve.type=le}function Me(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function De(L){const Q=L.target;Q.removeEventListener("dispose",De),lt(Q)}function lt(L){xt(L),Fe.remove(L)}function xt(L){const Q=Fe.get(L).programs;Q!==void 0&&(Q.forEach(function(ue){j.releaseProgram(ue)}),L.isShaderMaterial&&j.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,ue,K,le,ke){Q===null&&(Q=Ot);const qe=le.isMesh&&le.matrixWorld.determinant()<0,tt=xl(L,Q,ue,K,le);je.setMaterial(K,qe);let it=ue.index,ht=1;if(K.wireframe===!0){if(it=P.getWireframeAttribute(ue),it===void 0)return;ht=2}const ze=ue.drawRange,st=ue.attributes.position;let wt=ze.start*ht,Lt=(ze.start+ze.count)*ht;ke!==null&&(wt=Math.max(wt,ke.start*ht),Lt=Math.min(Lt,(ke.start+ke.count)*ht)),it!==null?(wt=Math.max(wt,0),Lt=Math.min(Lt,it.count)):st!=null&&(wt=Math.max(wt,0),Lt=Math.min(Lt,st.count));const nn=Lt-wt;if(nn<0||nn===1/0)return;Le.setup(le,K,tt,ue,it);let jn,bt=de;if(it!==null&&(jn=et.get(it),bt=Ce,bt.setIndex(jn)),le.isMesh)K.wireframe===!0?(je.setLineWidth(K.wireframeLinewidth*nt()),bt.setMode(Z.LINES)):bt.setMode(Z.TRIANGLES);else if(le.isLine){let ut=K.linewidth;ut===void 0&&(ut=1),je.setLineWidth(ut*nt()),le.isLineSegments?bt.setMode(Z.LINES):le.isLineLoop?bt.setMode(Z.LINE_LOOP):bt.setMode(Z.LINE_STRIP)}else le.isPoints?bt.setMode(Z.POINTS):le.isSprite&&bt.setMode(Z.TRIANGLES);if(le.isInstancedMesh)bt.renderInstances(wt,nn,le.count);else if(ue.isInstancedBufferGeometry){const ut=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,_n=Math.min(ue.instanceCount,ut);bt.renderInstances(wt,nn,_n)}else bt.render(wt,nn)},this.compile=function(L,Q){function ue(K,le,ke){K.transparent===!0&&K.side===pi&&K.forceSinglePass===!1?(K.side=wn,K.needsUpdate=!0,gi(K,le,ke),K.side=fr,K.needsUpdate=!0,gi(K,le,ke),K.side=pi):gi(K,le,ke)}y=fe.get(L),y.init(),O.push(y),L.traverseVisible(function(K){K.isLight&&K.layers.test(Q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights(C._useLegacyLights),L.traverse(function(K){const le=K.material;if(le)if(Array.isArray(le))for(let ke=0;ke<le.length;ke++){const qe=le[ke];ue(qe,L,K)}else ue(le,L,K)}),O.pop(),y=null};let Tt=null;function Xn(L){Tt&&Tt(L)}function St(){zt.stop()}function An(){zt.start()}const zt=new Hm;zt.setAnimationLoop(Xn),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(L){Tt=L,H.setAnimationLoop(L),L===null?zt.stop():zt.start()},H.addEventListener("sessionstart",St),H.addEventListener("sessionend",An),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(Q),Q=H.getCamera()),L.isScene===!0&&L.onBeforeRender(C,L,Q,I),y=fe.get(L,O.length),y.init(),O.push(y),Ue.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),_e.setFromProjectionMatrix(Ue),Se=this.localClippingEnabled,ge=Pe.init(this.clippingPlanes,Se),T=ae.get(L,g.length),T.init(),g.push(T),Hr(L,Q,0,C.sortObjects),T.finish(),C.sortObjects===!0&&T.sort(V,se),this.info.render.frame++,ge===!0&&Pe.beginShadows();const ue=y.state.shadowsArray;if(ve.render(ue,L,Q),ge===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(T,L),y.setupLights(C._useLegacyLights),Q.isArrayCamera){const K=Q.cameras;for(let le=0,ke=K.length;le<ke;le++){const qe=K[le];Ii(T,L,qe,qe.viewport)}}else Ii(T,L,Q);I!==null&&(Ve.updateMultisampleRenderTarget(I),Ve.updateRenderTargetMipmap(I)),L.isScene===!0&&L.onAfterRender(C,L,Q),Le.resetDefaultState(),ne=-1,R=null,O.pop(),O.length>0?y=O[O.length-1]:y=null,g.pop(),g.length>0?T=g[g.length-1]:T=null};function Hr(L,Q,ue,K){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)ue=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLight)y.pushLight(L),L.castShadow&&y.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||_e.intersectsSprite(L)){K&&Ze.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ue);const qe=E.update(L),tt=L.material;tt.visible&&T.push(L,qe,tt,ue,Ze.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||_e.intersectsObject(L))){const qe=E.update(L),tt=L.material;if(K&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ze.copy(L.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Ze.copy(qe.boundingSphere.center)),Ze.applyMatrix4(L.matrixWorld).applyMatrix4(Ue)),Array.isArray(tt)){const it=qe.groups;for(let ht=0,ze=it.length;ht<ze;ht++){const st=it[ht],wt=tt[st.materialIndex];wt&&wt.visible&&T.push(L,qe,wt,ue,Ze.z,st)}}else tt.visible&&T.push(L,qe,tt,ue,Ze.z,null)}}const ke=L.children;for(let qe=0,tt=ke.length;qe<tt;qe++)Hr(ke[qe],Q,ue,K)}function Ii(L,Q,ue,K){const le=L.opaque,ke=L.transmissive,qe=L.transparent;y.setupLightsView(ue),ge===!0&&Pe.setGlobalState(C.clippingPlanes,ue),ke.length>0&&vl(le,ke,Q,ue),K&&je.viewport(D.copy(K)),le.length>0&&li(le,Q,ue),ke.length>0&&li(ke,Q,ue),qe.length>0&&li(qe,Q,ue),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function vl(L,Q,ue,K){const le=Je.isWebGL2;Re===null&&(Re=new Or(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?Io:cr,minFilter:Uo,samples:le?4:0})),C.getDrawingBufferSize(Ae),le?Re.setSize(Ae.x,Ae.y):Re.setSize(jc(Ae.x),jc(Ae.y));const ke=C.getRenderTarget();C.setRenderTarget(Re),C.getClearColor(Y),te=C.getClearAlpha(),te<1&&C.setClearColor(16777215,.5),C.clear();const qe=C.toneMapping;C.toneMapping=ur,li(L,ue,K),Ve.updateMultisampleRenderTarget(Re),Ve.updateRenderTargetMipmap(Re);let tt=!1;for(let it=0,ht=Q.length;it<ht;it++){const ze=Q[it],st=ze.object,wt=ze.geometry,Lt=ze.material,nn=ze.group;if(Lt.side===pi&&st.layers.test(K.layers)){const jn=Lt.side;Lt.side=wn,Lt.needsUpdate=!0,hr(st,ue,K,wt,Lt,nn),Lt.side=jn,Lt.needsUpdate=!0,tt=!0}}tt===!0&&(Ve.updateMultisampleRenderTarget(Re),Ve.updateRenderTargetMipmap(Re)),C.setRenderTarget(ke),C.setClearColor(Y,te),C.toneMapping=qe}function li(L,Q,ue){const K=Q.isScene===!0?Q.overrideMaterial:null;for(let le=0,ke=L.length;le<ke;le++){const qe=L[le],tt=qe.object,it=qe.geometry,ht=K===null?qe.material:K,ze=qe.group;tt.layers.test(ue.layers)&&hr(tt,Q,ue,it,ht,ze)}}function hr(L,Q,ue,K,le,ke){L.onBeforeRender(C,Q,ue,K,le,ke),L.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),le.onBeforeRender(C,Q,ue,K,L,ke),le.transparent===!0&&le.side===pi&&le.forceSinglePass===!1?(le.side=wn,le.needsUpdate=!0,C.renderBufferDirect(ue,Q,K,le,L,ke),le.side=fr,le.needsUpdate=!0,C.renderBufferDirect(ue,Q,K,le,L,ke),le.side=pi):C.renderBufferDirect(ue,Q,K,le,L,ke),L.onAfterRender(C,Q,ue,K,le,ke)}function gi(L,Q,ue){Q.isScene!==!0&&(Q=Ot);const K=Fe.get(L),le=y.state.lights,ke=y.state.shadowsArray,qe=le.state.version,tt=j.getParameters(L,le.state,ke,Q,ue),it=j.getProgramCacheKey(tt);let ht=K.programs;K.environment=L.isMeshStandardMaterial?Q.environment:null,K.fog=Q.fog,K.envMap=(L.isMeshStandardMaterial?Ye:Ne).get(L.envMap||K.environment),ht===void 0&&(L.addEventListener("dispose",De),ht=new Map,K.programs=ht);let ze=ht.get(it);if(ze!==void 0){if(K.currentProgram===ze&&K.lightsStateVersion===qe)return Gr(L,tt),ze}else tt.uniforms=j.getUniforms(L),L.onBuild(ue,tt,C),L.onBeforeCompile(tt,C),ze=j.acquireProgram(tt,it),ht.set(it,ze),K.uniforms=tt.uniforms;const st=K.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(st.clippingPlanes=Pe.uniform),Gr(L,tt),K.needsLights=Sl(L),K.lightsStateVersion=qe,K.needsLights&&(st.ambientLightColor.value=le.state.ambient,st.lightProbe.value=le.state.probe,st.directionalLights.value=le.state.directional,st.directionalLightShadows.value=le.state.directionalShadow,st.spotLights.value=le.state.spot,st.spotLightShadows.value=le.state.spotShadow,st.rectAreaLights.value=le.state.rectArea,st.ltc_1.value=le.state.rectAreaLTC1,st.ltc_2.value=le.state.rectAreaLTC2,st.pointLights.value=le.state.point,st.pointLightShadows.value=le.state.pointShadow,st.hemisphereLights.value=le.state.hemi,st.directionalShadowMap.value=le.state.directionalShadowMap,st.directionalShadowMatrix.value=le.state.directionalShadowMatrix,st.spotShadowMap.value=le.state.spotShadowMap,st.spotLightMatrix.value=le.state.spotLightMatrix,st.spotLightMap.value=le.state.spotLightMap,st.pointShadowMap.value=le.state.pointShadowMap,st.pointShadowMatrix.value=le.state.pointShadowMatrix);const wt=ze.getUniforms(),Lt=fl.seqWithValue(wt.seq,st);return K.currentProgram=ze,K.uniformsList=Lt,ze}function Gr(L,Q){const ue=Fe.get(L);ue.outputColorSpace=Q.outputColorSpace,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function xl(L,Q,ue,K,le){Q.isScene!==!0&&(Q=Ot),Ve.resetTextureUnits();const ke=Q.fog,qe=K.isMeshStandardMaterial?Q.environment:null,tt=I===null?C.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:mi,it=(K.isMeshStandardMaterial?Ye:Ne).get(K.envMap||qe),ht=K.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ze=!!ue.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),st=!!ue.morphAttributes.position,wt=!!ue.morphAttributes.normal,Lt=!!ue.morphAttributes.color;let nn=ur;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(nn=C.toneMapping);const jn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,bt=jn!==void 0?jn.length:0,ut=Fe.get(K),_n=y.state.lights;if(ge===!0&&(Se===!0||L!==R)){const $t=L===R&&K.id===ne;Pe.setState(K,L,$t)}let Nt=!1;K.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==_n.state.version||ut.outputColorSpace!==tt||le.isInstancedMesh&&ut.instancing===!1||!le.isInstancedMesh&&ut.instancing===!0||le.isSkinnedMesh&&ut.skinning===!1||!le.isSkinnedMesh&&ut.skinning===!0||le.isInstancedMesh&&ut.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&ut.instancingColor===!1&&le.instanceColor!==null||ut.envMap!==it||K.fog===!0&&ut.fog!==ke||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==Pe.numPlanes||ut.numIntersection!==Pe.numIntersection)||ut.vertexAlphas!==ht||ut.vertexTangents!==ze||ut.morphTargets!==st||ut.morphNormals!==wt||ut.morphColors!==Lt||ut.toneMapping!==nn||Je.isWebGL2===!0&&ut.morphTargetsCount!==bt)&&(Nt=!0):(Nt=!0,ut.__version=K.version);let Vt=ut.currentProgram;Nt===!0&&(Vt=gi(K,Q,le));let Oo=!1,pr=!1,Hs=!1;const Bt=Vt.getUniforms(),In=ut.uniforms;if(je.useProgram(Vt.program)&&(Oo=!0,pr=!0,Hs=!0),K.id!==ne&&(ne=K.id,pr=!0),Oo||R!==L){if(Bt.setValue(Z,"projectionMatrix",L.projectionMatrix),Je.logarithmicDepthBuffer&&Bt.setValue(Z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),R!==L&&(R=L,pr=!0,Hs=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const $t=Bt.map.cameraPosition;$t!==void 0&&$t.setValue(Z,Ze.setFromMatrixPosition(L.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Bt.setValue(Z,"isOrthographic",L.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||le.isSkinnedMesh)&&Bt.setValue(Z,"viewMatrix",L.matrixWorldInverse)}if(le.isSkinnedMesh){Bt.setOptional(Z,le,"bindMatrix"),Bt.setOptional(Z,le,"bindMatrixInverse");const $t=le.skeleton;$t&&(Je.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Bt.setValue(Z,"boneTexture",$t.boneTexture,Ve),Bt.setValue(Z,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _i=ue.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0&&Je.isWebGL2===!0)&&z.update(le,ue,Vt),(pr||ut.receiveShadow!==le.receiveShadow)&&(ut.receiveShadow=le.receiveShadow,Bt.setValue(Z,"receiveShadow",le.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(In.envMap.value=it,In.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),pr&&(Bt.setValue(Z,"toneMappingExposure",C.toneMappingExposure),ut.needsLights&&yl(In,Hs),ke&&K.fog===!0&&pe.refreshFogUniforms(In,ke),pe.refreshMaterialUniforms(In,K,oe,he,Re),fl.upload(Z,ut.uniformsList,In,Ve)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(fl.upload(Z,ut.uniformsList,In,Ve),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Bt.setValue(Z,"center",le.center),Bt.setValue(Z,"modelViewMatrix",le.modelViewMatrix),Bt.setValue(Z,"normalMatrix",le.normalMatrix),Bt.setValue(Z,"modelMatrix",le.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const $t=K.uniformsGroups;for(let Gs=0,Ml=$t.length;Gs<Ml;Gs++)if(Je.isWebGL2){const Vr=$t[Gs];Qe.update(Vr,Vt),Qe.bind(Vr,Vt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vt}function yl(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function Sl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(L,Q,ue){Fe.get(L.texture).__webglTexture=Q,Fe.get(L.depthTexture).__webglTexture=ue;const K=Fe.get(L);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=ue===void 0,K.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,Q){const ue=Fe.get(L);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(L,Q=0,ue=0){I=L,N=Q,k=ue;let K=!0,le=null,ke=!1,qe=!1;if(L){const it=Fe.get(L);it.__useDefaultFramebuffer!==void 0?(je.bindFramebuffer(Z.FRAMEBUFFER,null),K=!1):it.__webglFramebuffer===void 0?Ve.setupRenderTarget(L):it.__hasExternalTextures&&Ve.rebindTextures(L,Fe.get(L.texture).__webglTexture,Fe.get(L.depthTexture).__webglTexture);const ht=L.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(qe=!0);const ze=Fe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ze[Q])?le=ze[Q][ue]:le=ze[Q],ke=!0):Je.isWebGL2&&L.samples>0&&Ve.useMultisampledRTT(L)===!1?le=Fe.get(L).__webglMultisampledFramebuffer:Array.isArray(ze)?le=ze[ue]:le=ze,D.copy(L.viewport),me.copy(L.scissor),ce=L.scissorTest}else D.copy(A).multiplyScalar(oe).floor(),me.copy(F).multiplyScalar(oe).floor(),ce=W;if(je.bindFramebuffer(Z.FRAMEBUFFER,le)&&Je.drawBuffers&&K&&je.drawBuffers(L,le),je.viewport(D),je.scissor(me),je.setScissorTest(ce),ke){const it=Fe.get(L.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Q,it.__webglTexture,ue)}else if(qe){const it=Fe.get(L.texture),ht=Q||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,it.__webglTexture,ue||0,ht)}ne=-1},this.readRenderTargetPixels=function(L,Q,ue,K,le,ke,qe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Fe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qe!==void 0&&(tt=tt[qe]),tt){je.bindFramebuffer(Z.FRAMEBUFFER,tt);try{const it=L.texture,ht=it.format,ze=it.type;if(ht!==si&&Te.convert(ht)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=ze===Io&&(Xe.has("EXT_color_buffer_half_float")||Je.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(ze!==cr&&Te.convert(ze)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===ar&&(Je.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-K&&ue>=0&&ue<=L.height-le&&Z.readPixels(Q,ue,K,le,Te.convert(ht),Te.convert(ze),ke)}finally{const it=I!==null?Fe.get(I).__webglFramebuffer:null;je.bindFramebuffer(Z.FRAMEBUFFER,it)}}},this.copyFramebufferToTexture=function(L,Q,ue=0){const K=Math.pow(2,-ue),le=Math.floor(Q.image.width*K),ke=Math.floor(Q.image.height*K);Ve.setTexture2D(Q,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ue,0,0,L.x,L.y,le,ke),je.unbindTexture()},this.copyTextureToTexture=function(L,Q,ue,K=0){const le=Q.image.width,ke=Q.image.height,qe=Te.convert(ue.format),tt=Te.convert(ue.type);Ve.setTexture2D(ue,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ue.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ue.unpackAlignment),Q.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,K,L.x,L.y,le,ke,qe,tt,Q.image.data):Q.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,K,L.x,L.y,Q.mipmaps[0].width,Q.mipmaps[0].height,qe,Q.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,K,L.x,L.y,qe,tt,Q.image),K===0&&ue.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),je.unbindTexture()},this.copyTextureToTexture3D=function(L,Q,ue,K,le=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ke=L.max.x-L.min.x+1,qe=L.max.y-L.min.y+1,tt=L.max.z-L.min.z+1,it=Te.convert(K.format),ht=Te.convert(K.type);let ze;if(K.isData3DTexture)Ve.setTexture3D(K,0),ze=Z.TEXTURE_3D;else if(K.isDataArrayTexture)Ve.setTexture2DArray(K,0),ze=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment);const st=Z.getParameter(Z.UNPACK_ROW_LENGTH),wt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Lt=Z.getParameter(Z.UNPACK_SKIP_PIXELS),nn=Z.getParameter(Z.UNPACK_SKIP_ROWS),jn=Z.getParameter(Z.UNPACK_SKIP_IMAGES),bt=ue.isCompressedTexture?ue.mipmaps[0]:ue.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,bt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,bt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,L.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,L.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,L.min.z),ue.isDataTexture||ue.isData3DTexture?Z.texSubImage3D(ze,le,Q.x,Q.y,Q.z,ke,qe,tt,it,ht,bt.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(ze,le,Q.x,Q.y,Q.z,ke,qe,tt,it,bt.data)):Z.texSubImage3D(ze,le,Q.x,Q.y,Q.z,ke,qe,tt,it,ht,bt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,st),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,wt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Lt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,nn),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,jn),le===0&&K.generateMipmaps&&Z.generateMipmap(ze),je.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Ve.setTextureCube(L,0):L.isData3DTexture?Ve.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ve.setTexture2DArray(L,0):Ve.setTexture2D(L,0),je.unbindTexture()},this.resetState=function(){N=0,k=0,I=null,je.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ft?Nr:Am}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Nr?ft:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class VM extends Ym{}VM.prototype.isWebGL1Renderer=!0;class WM extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class em extends ai{constructor(e,n,r,a=1){super(e,n,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ls=new It,tm=new It,ol=[],nm=new Br,XM=new It,Co=new oi,Lo=new zs;class im extends oi{constructor(e,n,r){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new em(new Float32Array(r*16),16),this.instanceColor=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,XM)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,Ls),nm.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(nm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new zs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,Ls),Lo.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Lo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const r=this.matrixWorld,a=this.count;if(Co.geometry=this.geometry,Co.material=this.material,Co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lo.copy(this.boundingSphere),Lo.applyMatrix4(r),e.ray.intersectsSphere(Lo)!==!1))for(let u=0;u<a;u++){this.getMatrixAt(u,Ls),tm.multiplyMatrices(r,Ls),Co.matrixWorld=tm,Co.raycast(e,ol);for(let d=0,c=ol.length;d<c;d++){const p=ol[d];p.instanceId=u,p.object=this,n.push(p)}ol.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new em(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class tf extends ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rm=new X,sm=new X,om=new It,Nc=new Qc,al=new zs;class jM extends jt{constructor(e=new Wn,n=new tf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)rm.fromBufferAttribute(n,a-1),sm.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=rm.distanceTo(sm);e.setAttribute("lineDistance",new Yt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),al.copy(r.boundingSphere),al.applyMatrix4(a),al.radius+=u,e.ray.intersectsSphere(al)===!1)return;om.copy(a).invert(),Nc.copy(e.ray).applyMatrix4(om);const c=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=c*c,m=new X,_=new X,x=new X,v=new X,S=this.isLineSegments?2:1,w=r.index,y=r.attributes.position;if(w!==null){const g=Math.max(0,d.start),O=Math.min(w.count,d.start+d.count);for(let C=g,b=O-1;C<b;C+=S){const N=w.getX(C),k=w.getX(C+1);if(m.fromBufferAttribute(y,N),_.fromBufferAttribute(y,k),Nc.distanceSqToSegment(m,_,v,x)>p)continue;v.applyMatrix4(this.matrixWorld);const ne=e.ray.origin.distanceTo(v);ne<e.near||ne>e.far||n.push({distance:ne,point:x.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,d.start),O=Math.min(y.count,d.start+d.count);for(let C=g,b=O-1;C<b;C+=S){if(m.fromBufferAttribute(y,C),_.fromBufferAttribute(y,C+1),Nc.distanceSqToSegment(m,_,v,x)>p)continue;v.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(v);k<e.near||k>e.far||n.push({distance:k,point:x.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const c=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=u}}}}}const am=new X,lm=new X;class qm extends jM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)am.fromBufferAttribute(n,a),lm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+am.distanceTo(lm);e.setAttribute("lineDistance",new Yt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nf extends Wn{constructor(e=1,n=1,r=1,a=32,u=1,d=!1,c=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:d,thetaStart:c,thetaLength:p};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],x=[],v=[],S=[];let w=0;const T=[],y=r/2;let g=0;O(),d===!1&&(e>0&&C(!0),n>0&&C(!1)),this.setIndex(_),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(S,2));function O(){const b=new X,N=new X;let k=0;const I=(n-e)/r;for(let ne=0;ne<=u;ne++){const R=[],D=ne/u,me=D*(n-e)+e;for(let ce=0;ce<=a;ce++){const Y=ce/a,te=Y*p+c,ie=Math.sin(te),he=Math.cos(te);N.x=me*ie,N.y=-D*r+y,N.z=me*he,x.push(N.x,N.y,N.z),b.set(ie,I,he).normalize(),v.push(b.x,b.y,b.z),S.push(Y,1-D),R.push(w++)}T.push(R)}for(let ne=0;ne<a;ne++)for(let R=0;R<u;R++){const D=T[R][ne],me=T[R+1][ne],ce=T[R+1][ne+1],Y=T[R][ne+1];_.push(D,me,Y),_.push(me,ce,Y),k+=6}m.addGroup(g,k,0),g+=k}function C(b){const N=w,k=new at,I=new X;let ne=0;const R=b===!0?e:n,D=b===!0?1:-1;for(let ce=1;ce<=a;ce++)x.push(0,y*D,0),v.push(0,D,0),S.push(.5,.5),w++;const me=w;for(let ce=0;ce<=a;ce++){const te=ce/a*p+c,ie=Math.cos(te),he=Math.sin(te);I.x=R*he,I.y=y*D,I.z=R*ie,x.push(I.x,I.y,I.z),v.push(0,D,0),k.x=ie*.5+.5,k.y=he*.5*D+.5,S.push(k.x,k.y),w++}for(let ce=0;ce<a;ce++){const Y=N+ce,te=me+ce;b===!0?_.push(te,te+1,Y):_.push(te+1,te,Y),ne+=3}m.addGroup(g,ne,b===!0?1:2),g+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rf extends Wn{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,d=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:d,thetaLength:c},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(d+c,Math.PI);let m=0;const _=[],x=new X,v=new X,S=[],w=[],T=[],y=[];for(let g=0;g<=r;g++){const O=[],C=g/r;let b=0;g===0&&d===0?b=.5/n:g===r&&p===Math.PI&&(b=-.5/n);for(let N=0;N<=n;N++){const k=N/n;x.x=-e*Math.cos(a+k*u)*Math.sin(d+C*c),x.y=e*Math.cos(d+C*c),x.z=e*Math.sin(a+k*u)*Math.sin(d+C*c),w.push(x.x,x.y,x.z),v.copy(x).normalize(),T.push(v.x,v.y,v.z),y.push(k+b,1-C),O.push(m++)}_.push(O)}for(let g=0;g<r;g++)for(let O=0;O<n;O++){const C=_[g][O+1],b=_[g][O],N=_[g+1][O],k=_[g+1][O+1];(g!==0||d>0)&&S.push(C,b,k),(g!==r-1||p<Math.PI)&&S.push(b,N,k)}this.setIndex(S),this.setAttribute("position",new Yt(w,3)),this.setAttribute("normal",new Yt(T,3)),this.setAttribute("uv",new Yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fc extends ks{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new gt(16777215),this.specular=new gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rm,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Km extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Oc=new It,um=new X,cm=new X;class YM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;um.setFromMatrixPosition(e.matrixWorld),n.position.copy(um),cm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(cm),n.updateMatrixWorld(),Oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qM extends YM{constructor(){super(new Gm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fm extends Km{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new qM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class KM extends Km{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class dm{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(gn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $M extends qm{constructor(e=10,n=10,r=4473924,a=8947848){r=new gt(r),a=new gt(a);const u=n/2,d=e/n,c=e/2,p=[],m=[];for(let v=0,S=0,w=-c;v<=n;v++,w+=d){p.push(-c,0,w,c,0,w),p.push(w,0,-c,w,0,c);const T=v===u?r:a;T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3}const _=new Wn;_.setAttribute("position",new Yt(p,3)),_.setAttribute("color",new Yt(m,3));const x=new tf({vertexColors:!0,toneMapped:!1});super(_,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ZM extends qm{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new Wn;a.setAttribute("position",new Yt(n,3)),a.setAttribute("color",new Yt(r,3));const u=new tf({vertexColors:!0,toneMapped:!1});super(a,u),this.type="AxesHelper"}setColors(e,n,r){const a=new gt,u=this.geometry.attributes.color.array;return a.set(e),a.toArray(u,0),a.toArray(u,3),a.set(n),a.toArray(u,6),a.toArray(u,9),a.set(r),a.toArray(u,12),a.toArray(u,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);const hm={type:"change"},zc={type:"start"},pm={type:"end"},ll=new Qc,mm=new sr,QM=Math.cos(70*Fv.DEG2RAD);class JM extends kr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:rr.ROTATE,TWO:rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",E),this._domElementKeyEvents=z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(hm),r.update(),u=a.NONE},this.update=(function(){const z=new X,de=new dr().setFromUnitVectors(e.up,new X(0,1,0)),Ce=de.clone().invert(),Te=new X,Le=new dr,Qe=new X,dt=2*Math.PI;return function(){const be=r.object.position;z.copy(be).sub(r.target),z.applyQuaternion(de),c.setFromVector3(z),r.autoRotate&&u===a.NONE&&me(R()),r.enableDamping?(c.theta+=p.theta*r.dampingFactor,c.phi+=p.phi*r.dampingFactor):(c.theta+=p.theta,c.phi+=p.phi);let ee=r.minAzimuthAngle,Me=r.maxAzimuthAngle;isFinite(ee)&&isFinite(Me)&&(ee<-Math.PI?ee+=dt:ee>Math.PI&&(ee-=dt),Me<-Math.PI?Me+=dt:Me>Math.PI&&(Me-=dt),ee<=Me?c.theta=Math.max(ee,Math.min(Me,c.theta)):c.theta=c.theta>(ee+Me)/2?Math.max(ee,c.theta):Math.min(Me,c.theta)),c.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,c.phi)),c.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(_,r.dampingFactor):r.target.add(_),r.zoomToCursor&&k||r.object.isOrthographicCamera?c.radius=se(c.radius):c.radius=se(c.radius*m),z.setFromSpherical(c),z.applyQuaternion(Ce),be.copy(r.target).add(z),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,_.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),_.set(0,0,0));let De=!1;if(r.zoomToCursor&&k){let lt=null;if(r.object.isPerspectiveCamera){const xt=z.length();lt=se(xt*m);const Tt=xt-lt;r.object.position.addScaledVector(b,Tt),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const xt=new X(N.x,N.y,0);xt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),De=!0;const Tt=new X(N.x,N.y,0);Tt.unproject(r.object),r.object.position.sub(Tt).add(xt),r.object.updateMatrixWorld(),lt=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(lt).add(r.object.position):(ll.origin.copy(r.object.position),ll.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(ll.direction))<QM?e.lookAt(r.target):(mm.setFromNormalAndCoplanarPoint(r.object.up,r.target),ll.intersectPlane(mm,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),De=!0);return m=1,k=!1,De||Te.distanceToSquared(r.object.position)>d||8*(1-Le.dot(r.object.quaternion))>d||Qe.distanceToSquared(r.target)>0?(r.dispatchEvent(hm),Te.copy(r.object.position),Le.copy(r.object.quaternion),Qe.copy(r.target),De=!1,!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",ae),r.domElement.removeEventListener("pointerdown",Fe),r.domElement.removeEventListener("pointercancel",Ne),r.domElement.removeEventListener("wheel",P),r.domElement.removeEventListener("pointermove",Ve),r.domElement.removeEventListener("pointerup",Ne),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",E),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=a.NONE;const d=1e-6,c=new dm,p=new dm;let m=1;const _=new X,x=new at,v=new at,S=new at,w=new at,T=new at,y=new at,g=new at,O=new at,C=new at,b=new X,N=new at;let k=!1;const I=[],ne={};function R(){return 2*Math.PI/60/60*r.autoRotateSpeed}function D(){return Math.pow(.95,r.zoomSpeed)}function me(z){p.theta-=z}function ce(z){p.phi-=z}const Y=(function(){const z=new X;return function(Ce,Te){z.setFromMatrixColumn(Te,0),z.multiplyScalar(-Ce),_.add(z)}})(),te=(function(){const z=new X;return function(Ce,Te){r.screenSpacePanning===!0?z.setFromMatrixColumn(Te,1):(z.setFromMatrixColumn(Te,0),z.crossVectors(r.object.up,z)),z.multiplyScalar(Ce),_.add(z)}})(),ie=(function(){const z=new X;return function(Ce,Te){const Le=r.domElement;if(r.object.isPerspectiveCamera){const Qe=r.object.position;z.copy(Qe).sub(r.target);let dt=z.length();dt*=Math.tan(r.object.fov/2*Math.PI/180),Y(2*Ce*dt/Le.clientHeight,r.object.matrix),te(2*Te*dt/Le.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(Y(Ce*(r.object.right-r.object.left)/r.object.zoom/Le.clientWidth,r.object.matrix),te(Te*(r.object.top-r.object.bottom)/r.object.zoom/Le.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function he(z){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function oe(z){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function V(z){if(!r.zoomToCursor)return;k=!0;const de=r.domElement.getBoundingClientRect(),Ce=z.clientX-de.left,Te=z.clientY-de.top,Le=de.width,Qe=de.height;N.x=Ce/Le*2-1,N.y=-(Te/Qe)*2+1,b.set(N.x,N.y,1).unproject(e).sub(e.position).normalize()}function se(z){return Math.max(r.minDistance,Math.min(r.maxDistance,z))}function A(z){x.set(z.clientX,z.clientY)}function F(z){V(z),g.set(z.clientX,z.clientY)}function W(z){w.set(z.clientX,z.clientY)}function _e(z){v.set(z.clientX,z.clientY),S.subVectors(v,x).multiplyScalar(r.rotateSpeed);const de=r.domElement;me(2*Math.PI*S.x/de.clientHeight),ce(2*Math.PI*S.y/de.clientHeight),x.copy(v),r.update()}function ge(z){O.set(z.clientX,z.clientY),C.subVectors(O,g),C.y>0?he(D()):C.y<0&&oe(D()),g.copy(O),r.update()}function Se(z){T.set(z.clientX,z.clientY),y.subVectors(T,w).multiplyScalar(r.panSpeed),ie(y.x,y.y),w.copy(T),r.update()}function Re(z){V(z),z.deltaY<0?oe(D()):z.deltaY>0&&he(D()),r.update()}function Ue(z){let de=!1;switch(z.code){case r.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?ce(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ie(0,r.keyPanSpeed),de=!0;break;case r.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?ce(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ie(0,-r.keyPanSpeed),de=!0;break;case r.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?me(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ie(r.keyPanSpeed,0),de=!0;break;case r.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?me(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ie(-r.keyPanSpeed,0),de=!0;break}de&&(z.preventDefault(),r.update())}function Ae(){if(I.length===1)x.set(I[0].pageX,I[0].pageY);else{const z=.5*(I[0].pageX+I[1].pageX),de=.5*(I[0].pageY+I[1].pageY);x.set(z,de)}}function Ze(){if(I.length===1)w.set(I[0].pageX,I[0].pageY);else{const z=.5*(I[0].pageX+I[1].pageX),de=.5*(I[0].pageY+I[1].pageY);w.set(z,de)}}function Ot(){const z=I[0].pageX-I[1].pageX,de=I[0].pageY-I[1].pageY,Ce=Math.sqrt(z*z+de*de);g.set(0,Ce)}function nt(){r.enableZoom&&Ot(),r.enablePan&&Ze()}function Z(){r.enableZoom&&Ot(),r.enableRotate&&Ae()}function Et(z){if(I.length==1)v.set(z.pageX,z.pageY);else{const Ce=J(z),Te=.5*(z.pageX+Ce.x),Le=.5*(z.pageY+Ce.y);v.set(Te,Le)}S.subVectors(v,x).multiplyScalar(r.rotateSpeed);const de=r.domElement;me(2*Math.PI*S.x/de.clientHeight),ce(2*Math.PI*S.y/de.clientHeight),x.copy(v)}function Xe(z){if(I.length===1)T.set(z.pageX,z.pageY);else{const de=J(z),Ce=.5*(z.pageX+de.x),Te=.5*(z.pageY+de.y);T.set(Ce,Te)}y.subVectors(T,w).multiplyScalar(r.panSpeed),ie(y.x,y.y),w.copy(T)}function Je(z){const de=J(z),Ce=z.pageX-de.x,Te=z.pageY-de.y,Le=Math.sqrt(Ce*Ce+Te*Te);O.set(0,Le),C.set(0,Math.pow(O.y/g.y,r.zoomSpeed)),he(C.y),g.copy(O)}function je(z){r.enableZoom&&Je(z),r.enablePan&&Xe(z)}function _t(z){r.enableZoom&&Je(z),r.enableRotate&&Et(z)}function Fe(z){r.enabled!==!1&&(I.length===0&&(r.domElement.setPointerCapture(z.pointerId),r.domElement.addEventListener("pointermove",Ve),r.domElement.addEventListener("pointerup",Ne)),fe(z),z.pointerType==="touch"?j(z):Ye(z))}function Ve(z){r.enabled!==!1&&(z.pointerType==="touch"?pe(z):et(z))}function Ne(z){Pe(z),I.length===0&&(r.domElement.releasePointerCapture(z.pointerId),r.domElement.removeEventListener("pointermove",Ve),r.domElement.removeEventListener("pointerup",Ne)),r.dispatchEvent(pm),u=a.NONE}function Ye(z){let de;switch(z.button){case 0:de=r.mouseButtons.LEFT;break;case 1:de=r.mouseButtons.MIDDLE;break;case 2:de=r.mouseButtons.RIGHT;break;default:de=-1}switch(de){case ds.DOLLY:if(r.enableZoom===!1)return;F(z),u=a.DOLLY;break;case ds.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(r.enablePan===!1)return;W(z),u=a.PAN}else{if(r.enableRotate===!1)return;A(z),u=a.ROTATE}break;case ds.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(r.enableRotate===!1)return;A(z),u=a.ROTATE}else{if(r.enablePan===!1)return;W(z),u=a.PAN}break;default:u=a.NONE}u!==a.NONE&&r.dispatchEvent(zc)}function et(z){switch(u){case a.ROTATE:if(r.enableRotate===!1)return;_e(z);break;case a.DOLLY:if(r.enableZoom===!1)return;ge(z);break;case a.PAN:if(r.enablePan===!1)return;Se(z);break}}function P(z){r.enabled===!1||r.enableZoom===!1||u!==a.NONE||(z.preventDefault(),r.dispatchEvent(zc),Re(z),r.dispatchEvent(pm))}function E(z){r.enabled===!1||r.enablePan===!1||Ue(z)}function j(z){switch(ve(z),I.length){case 1:switch(r.touches.ONE){case rr.ROTATE:if(r.enableRotate===!1)return;Ae(),u=a.TOUCH_ROTATE;break;case rr.PAN:if(r.enablePan===!1)return;Ze(),u=a.TOUCH_PAN;break;default:u=a.NONE}break;case 2:switch(r.touches.TWO){case rr.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;nt(),u=a.TOUCH_DOLLY_PAN;break;case rr.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Z(),u=a.TOUCH_DOLLY_ROTATE;break;default:u=a.NONE}break;default:u=a.NONE}u!==a.NONE&&r.dispatchEvent(zc)}function pe(z){switch(ve(z),u){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;Et(z),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;Xe(z),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;je(z),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;_t(z),r.update();break;default:u=a.NONE}}function ae(z){r.enabled!==!1&&z.preventDefault()}function fe(z){I.push(z)}function Pe(z){delete ne[z.pointerId];for(let de=0;de<I.length;de++)if(I[de].pointerId==z.pointerId){I.splice(de,1);return}}function ve(z){let de=ne[z.pointerId];de===void 0&&(de=new at,ne[z.pointerId]=de),de.set(z.pageX,z.pageY)}function J(z){const de=z.pointerId===I[0].pointerId?I[1]:I[0];return ne[de.pointerId]}r.domElement.addEventListener("contextmenu",ae),r.domElement.addEventListener("pointerdown",Fe),r.domElement.addEventListener("pointercancel",Ne),r.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const ul=[{name:"Dark",hex:"#111827"},{name:"Gray",hex:"#6b7280"},{name:"White",hex:"#ffffff"},{name:"Red",hex:"#ef4444"},{name:"Orange",hex:"#f97316"},{name:"Yellow",hex:"#eab308"},{name:"Green",hex:"#22c55e"},{name:"Blue",hex:"#3b82f6"}];function eE(){const o=ot.useRef(null);ot.useRef(null);const[e,n]=ot.useState(1),[r,a]=ot.useState(1),[u,d]=ot.useState(1),[c,p]=ot.useState(0),[m,_]=ot.useState(.5),[x,v]=ot.useState(!0),[S,w]=ot.useState(!0),[T,y]=ot.useState(!0),[g,O]=ot.useState(!0),[C,b]=ot.useState(!1),[N,k]=ot.useState(4),[I,ne]=ot.useState(5),[R,D]=ot.useState(!0),[me,ce]=ot.useState(null),[Y,te]=ot.useState(ul[0].hex),[ie,he]=ot.useState(ul[2].hex),[oe,V]=ot.useState(ul[1].hex),[se,A]=ot.useState(ul[7].hex),[F,W]=ot.useState(null),[_e,ge]=ot.useState({x:20,y:20}),[Se,Re]=ot.useState(!1),Ue=ot.useRef({x:0,y:0}),Ae=ot.useRef(null),Ze=ot.useRef(null),Ot=ot.useRef(null),nt=ot.useRef(null),Z=ot.useRef(null),Et=ot.useRef(null),Xe=ot.useRef(null),Je=ot.useRef(null);ot.useEffect(()=>{if(me){const Fe=setTimeout(()=>ce(null),3e3);return()=>clearTimeout(Fe)}},[me]),ot.useEffect(()=>{const Fe=Ye=>{Se&&ge({x:Ye.clientX-Ue.current.x,y:Ye.clientY-Ue.current.y})},Ve=Ye=>{if(!Se)return;const et=Ye.touches[0];ge({x:et.clientX-Ue.current.x,y:et.clientY-Ue.current.y})},Ne=()=>{Re(!1)};return Se&&(window.addEventListener("mousemove",Fe),window.addEventListener("mouseup",Ne),window.addEventListener("touchmove",Ve),window.addEventListener("touchend",Ne)),()=>{window.removeEventListener("mousemove",Fe),window.removeEventListener("mouseup",Ne),window.removeEventListener("touchmove",Ve),window.removeEventListener("touchend",Ne)}},[Se]);const je=ot.useMemo(()=>{const Fe=[],Ne=[[0,0,0],[.5,.5,0],[.5,0,.5],[0,.5,.5],[.25,.25,.25],[.75,.75,.25],[.75,.25,.75],[.25,.75,.75]];for(let P=0;P<N;P++)for(let E=0;E<N;E++)for(let j=0;j<N;j++)Ne.forEach(pe=>{Fe.push({x:(P+pe[0])*40,y:(E+pe[1])*40,z:(j+pe[2])*40})});const Ye=N*40/2,et=new X(Ye,Ye,Ye);return{atoms:Fe,center:et,latticeConstant:40}},[N]),_t=ot.useMemo(()=>{if(e===0&&r===0&&u===0)return null;const Fe=new X(e,r,u),Ve=Fe.clone().normalize();let Ne=new X(0,1,0);Math.abs(Ve.dot(Ne))>.99&&Ne.set(1,0,0);const Ye=new X().crossVectors(Ne,Fe),et=new X().crossVectors(Fe,Ye),P=new X().addVectors(Ye,et),E=(ae,fe)=>fe===0?ae:E(fe,ae%fe),j=(ae,fe,Pe)=>E(Math.abs(ae),E(Math.abs(fe),Math.abs(Pe))),pe=ae=>{const fe=j(Math.round(ae.x),Math.round(ae.y),Math.round(ae.z))||1;return`[${Math.round(ae.x/fe)} ${Math.round(ae.y/fe)} ${Math.round(ae.z/fe)}]`};return{uDir:Ye.clone().normalize(),vDir:et.clone().normalize(),uLabel:pe(Ye),vLabel:pe(et),diagLabel:pe(P)}},[e,r,u]);return ot.useMemo(()=>{if(!_t)return[];const{uDir:Fe,vDir:Ve}=_t,Ne=new X(e,r,u).normalize(),Ye=je.center.clone().add(Ne.clone().multiplyScalar(c*10)),et=[],P=I;return je.atoms.forEach(E=>{const j=new X(E.x,E.y,E.z),pe=new X().subVectors(j,Ye),ae=pe.dot(Ne);if(Math.abs(ae)<P){const fe=pe.dot(Fe),Pe=pe.dot(Ve),ve=Math.sqrt(Math.pow(I,2)-Math.pow(ae,2)),z=.5+.4*(ve/I);et.push({u:fe,v:Pe,r:ve,opacity:z,id:`${E.x}-${E.y}-${E.z}`})}}),et},[e,r,u,c,je,_t,I]),ot.useEffect(()=>{if(!o.current)return;const Fe=o.current.clientWidth,Ve=o.current.clientHeight,Ne=new WM;Ne.background=new gt(Y),Ae.current=Ne;const Ye=new Vn(45,Fe/Ve,1,5e3);Ye.position.set(300,300,400),nt.current=Ye;const et=new Ym({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});et.setSize(Fe,Ve),et.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current.appendChild(et.domElement),Ot.current=et;const P=new JM(Ye,et.domElement);P.enableDamping=!0,P.dampingFactor=.05,P.touches={ONE:rr.ROTATE,TWO:rr.DOLLY_PAN},Z.current=P;const E=new KM(16777215,.6);Ne.add(E);const j=new fm(16777215,.8);j.position.set(100,200,100),Ne.add(j);const pe=new fm(16764074,.5);pe.position.set(-100,-200,-100),Ne.add(pe);const ae=300,fe=new $M(ae,10,4473924,2236962);fe.position.set(ae/2,0,ae/2),Ne.add(fe),Et.current=fe;const Pe=new ZM(60);Ne.add(Pe),Xe.current=Pe;const ve=new gl(800,800),J=new Fc({color:se,side:pi,transparent:!0,opacity:.5,depthWrite:!1,shininess:90}),z=new oi(ve,J);Ne.add(z),Ze.current=z;const de=()=>{Je.current=requestAnimationFrame(de),P.update(),et.render(Ne,Ye)};de();const Ce=()=>{if(!o.current)return;const Te=o.current.clientWidth,Le=o.current.clientHeight;Ye.aspect=Te/Le,Ye.updateProjectionMatrix(),et.setSize(Te,Le)};return window.addEventListener("resize",Ce),()=>{window.removeEventListener("resize",Ce),cancelAnimationFrame(Je.current),o.current&&et.domElement&&o.current.removeChild(et.domElement),et.dispose()}},[]),ot.useEffect(()=>{Ae.current&&(Ae.current.background=new gt(Y))},[Y]),ot.useEffect(()=>{Et.current&&(Et.current.visible=S),Xe.current&&(Xe.current.visible=T)},[S,T]),ot.useEffect(()=>{const Fe=Ae.current;if(!Fe)return;Fe.children.filter(j=>j.name==="atoms"||j.name==="bonds").forEach(j=>Fe.remove(j));const{atoms:Ne}=je,Ye=new X(e,r,u).normalize(),et=je.center.clone().add(Ye.clone().multiplyScalar(c*10));let P=Ne;const E=j=>!C||e===0&&r===0&&u===0?!0:new X().subVectors(j,et).dot(Ye)<=I;if(C&&(e!==0||r!==0||u!==0)&&(P=Ne.filter(j=>E(new X(j.x,j.y,j.z)))),P.length>0){const j=new rf(I,16,16),pe=new Fc({color:ie,shininess:50}),ae=new im(j,pe,P.length);ae.name="atoms";const fe=new jt;P.forEach((Pe,ve)=>{fe.position.set(Pe.x,Pe.y,Pe.z),fe.updateMatrix(),ae.setMatrixAt(ve,fe.matrix)}),ae.instanceMatrix.needsUpdate=!0,Fe.add(ae)}if(x){const j=[];for(let pe=0;pe<Ne.length;pe++)for(let ae=pe+1;ae<Ne.length;ae++){const fe=new X(Ne[pe].x,Ne[pe].y,Ne[pe].z),Pe=new X(Ne[ae].x,Ne[ae].y,Ne[ae].z),ve=fe.x-Pe.x,J=fe.y-Pe.y,z=fe.z-Pe.z,de=ve*ve+J*J+z*z;de>290&&de<310&&E(fe)&&E(Pe)&&j.push({start:fe,end:Pe})}if(j.length>0){const pe=new nf(1.5,1.5,1,8),ae=new Fc({color:oe}),fe=new im(pe,ae,j.length);fe.name="bonds";const Pe=new jt,ve=new X,J=new X(0,1,0);j.forEach((z,de)=>{const Ce=z.start,Te=z.end,Le=Ce.distanceTo(Te),Qe=Ce.clone().add(Te).multiplyScalar(.5);Pe.position.copy(Qe),Pe.scale.set(1,Le,1),ve.subVectors(Te,Ce).normalize(),Pe.quaternion.setFromUnitVectors(J,ve),Pe.updateMatrix(),fe.setMatrixAt(de,Pe.matrix)}),fe.instanceMatrix.needsUpdate=!0,Fe.add(fe)}}},[je,x,ie,oe,I,C,e,r,u,c]),ot.useEffect(()=>{if(!Ze.current)return;const Fe=Ze.current;if(e===0&&r===0&&u===0){Fe.visible=!1;return}Fe.visible=!0;const Ve=new X(e,r,u).normalize(),Ne=new X(0,0,1),Ye=new dr;Ye.setFromUnitVectors(Ne,Ve),Fe.quaternion.copy(Ye);const et=je.center.clone().add(Ve.multiplyScalar(c*10));Fe.position.copy(et),Fe.material.opacity=m,Fe.material.color.set(se)},[e,r,u,c,m,se,je.center]),Po.jsxs("div",{className:"relative w-full h-screen flex flex-col md:flex-row bg-gray-900 text-white overflow-hidden",children:[Po.jsx("style",{children:"..."}),Po.jsx("div",{className:"relative flex-grow h-full",style:{touchAction:"none"},children:Po.jsx("div",{ref:o,className:"w-full h-full cursor-move"})})]})}const tE=O_.createRoot(document.getElementById("root"));tE.render(Po.jsx(eE,{}));
