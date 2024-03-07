(function(t,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],n):(t=typeof globalThis<"u"?globalThis:t||self,n(t.DecisionSurveyLayout={},t.React))})(this,function(t,n){"use strict";var u={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=n,c=Symbol.for("react.element"),y=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,m=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function p(o,e,d){var r,f={},s=null,l=null;d!==void 0&&(s=""+d),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)a.call(e,r)&&!v.hasOwnProperty(r)&&(f[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)f[r]===void 0&&(f[r]=e[r]);return{$$typeof:c,type:o,key:s,ref:l,props:f,_owner:m.current}}i.Fragment=y,i.jsx=p,i.jsxs=p,u.exports=i;var x=u.exports;function O(o){return x.jsx("div",{children:"测试一下"})}t.Panel=O,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
