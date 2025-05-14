import re, { useState as te } from "react";
var p = { exports: {} }, v = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ne() {
  if (F) return v;
  F = 1;
  var l = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function f(m, o, s) {
    var u = null;
    if (s !== void 0 && (u = "" + s), o.key !== void 0 && (u = "" + o.key), "key" in o) {
      s = {};
      for (var b in o)
        b !== "key" && (s[b] = o[b]);
    } else s = o;
    return o = s.ref, {
      $$typeof: l,
      type: m,
      key: u,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return v.Fragment = c, v.jsx = f, v.jsxs = f, v;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ae() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case g:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function f(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), c(e);
      }
    }
    function m(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === g)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = S.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, r) {
      function t() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function L() {
      var e = l(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, d, i, j, h) {
      return t = i.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: i,
        _owner: d
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: L
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, r, t, n, d, i, j, h) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (K(a)) {
            for (n = 0; n < a.length; n++)
              x(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(a);
      if (N.call(r, "key")) {
        a = l(e);
        var E = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          E,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (f(t), a = "" + t), u(r) && (f(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var A in r)
          A !== "key" && (t[A] = r[A]);
      } else t = r;
      return a && b(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        a,
        i,
        d,
        o(),
        t,
        j,
        h
      );
    }
    function x(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var T = re, P = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), S = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, K = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var y, C = {}, Y = T["react-stack-bottom-frame"].bind(
      T,
      s
    )(), $ = O(m(s)), I = {};
    _.Fragment = k, _.jsx = function(e, r, t, n, d) {
      var i = 1e4 > S.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !1,
        n,
        d,
        i ? Error("react-stack-top-frame") : Y,
        i ? O(m(e)) : $
      );
    }, _.jsxs = function(e, r, t, n, d) {
      var i = 1e4 > S.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !0,
        n,
        d,
        i ? Error("react-stack-top-frame") : Y,
        i ? O(m(e)) : $
      );
    };
  }()), _;
}
var M;
function oe() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? p.exports = ne() : p.exports = ae()), p.exports;
}
var R = oe();
const le = ({ images: l }) => {
  const [c, f] = te(0), m = () => {
    f(c === l.length - 1 ? 0 : c + 1);
  }, o = () => {
    f(c === 0 ? l.length - 1 : c - 1);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: "slider-container", children: [
    /* @__PURE__ */ R.jsx("button", { className: "arrow left", onClick: o, children: "‹" }),
    /* @__PURE__ */ R.jsx("div", { className: "slider-wrapper", children: l.map((s, u) => /* @__PURE__ */ R.jsx(
      "div",
      {
        className: `slide ${u === c ? "active" : ""}`,
        children: u === c && /* @__PURE__ */ R.jsx("img", { src: s, alt: `Slide ${u}` })
      },
      u
    )) }),
    /* @__PURE__ */ R.jsx("button", { className: "arrow right", onClick: m, children: "›" })
  ] });
};
export {
  le as default
};
