"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const f=require("react");var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=f,y=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,i){var r,o={},s=null,u=null;i!==void 0&&(s=""+i),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)d.call(e,r)&&!m.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:y,type:t,key:s,ref:u,props:o,_owner:a.current}}n.Fragment=c;n.jsx=p;n.jsxs=p;l.exports=n;var v=l.exports;function x(t){return v.jsx("div",{children:"测试一下"})}exports.Panel=x;
