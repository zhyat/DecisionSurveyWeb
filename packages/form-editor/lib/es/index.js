import u from "react";
var i = { exports: {} }, n = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = u, m = Symbol.for("react.element"), x = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
function _(o, r, s) {
  var e, t = {}, p = null, f = null;
  s !== void 0 && (p = "" + s), r.key !== void 0 && (p = "" + r.key), r.ref !== void 0 && (f = r.ref);
  for (e in r)
    y.call(r, e) && !v.hasOwnProperty(e) && (t[e] = r[e]);
  if (o && o.defaultProps)
    for (e in r = o.defaultProps, r)
      t[e] === void 0 && (t[e] = r[e]);
  return { $$typeof: m, type: o, key: p, ref: f, props: t, _owner: d.current };
}
n.Fragment = x;
n.jsx = _;
n.jsxs = _;
i.exports = n;
var c = i.exports;
function O(o) {
  return /* @__PURE__ */ c.jsx("div", { children: "测试一下" });
}
export {
  O as Panel
};
