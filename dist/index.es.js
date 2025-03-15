import cr from "react";
import Dr from "react-dom";
function Mr(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var ge = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Fr() {
  if (He) return he;
  He = 1;
  var u = cr, D = Symbol.for("react.element"), I = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, w = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(l, b, S) {
    var f, m = {}, k = null, F = null;
    S !== void 0 && (k = "" + S), b.key !== void 0 && (k = "" + b.key), b.ref !== void 0 && (F = b.ref);
    for (f in b) p.call(b, f) && !c.hasOwnProperty(f) && (m[f] = b[f]);
    if (l && l.defaultProps) for (f in b = l.defaultProps, b) m[f] === void 0 && (m[f] = b[f]);
    return { $$typeof: D, type: l, key: k, ref: F, props: m, _owner: w.current };
  }
  return he.Fragment = I, he.jsx = C, he.jsxs = C, he;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Yr() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var u = cr, D = Symbol.for("react.element"), I = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), l = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), z = Symbol.iterator, M = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[M];
      return typeof r == "function" ? r : null;
    }
    var U = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          a[s - 1] = arguments[s];
        V("error", e, a);
      }
    }
    function V(e, r, a) {
      {
        var s = U.ReactDebugCurrentFrame, x = s.getStackAddendum();
        x !== "" && (r += "%s", a = a.concat([x]));
        var $ = a.map(function(O) {
          return String(O);
        });
        $.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, $);
      }
    }
    var q = !1, o = !1, re = !1, ve = !1, pe = !1, ie;
    ie = Symbol.for("react.module.reference");
    function ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === c || pe || e === w || e === S || e === f || ve || e === F || q || o || re || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === m || e.$$typeof === C || e.$$typeof === l || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function ue(e, r, a) {
      var s = e.displayName;
      if (s)
        return s;
      var x = r.displayName || r.name || "";
      return x !== "" ? a + "(" + x + ")" : a;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function H(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case I:
          return "Portal";
        case c:
          return "Profiler";
        case w:
          return "StrictMode";
        case S:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var r = e;
            return se(r) + ".Consumer";
          case C:
            var a = e;
            return se(a._context) + ".Provider";
          case b:
            return ue(e, e.render, "ForwardRef");
          case m:
            var s = e.displayName || null;
            return s !== null ? s : H(e.type) || "Memo";
          case k: {
            var x = e, $ = x._payload, O = x._init;
            try {
              return H(O($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, te = 0, X, ee, ne, fe, t, i, E;
    function h() {
    }
    h.__reactDisabledLog = !0;
    function d() {
      {
        if (te === 0) {
          X = console.log, ee = console.info, ne = console.warn, fe = console.error, t = console.group, i = console.groupCollapsed, E = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        te++;
      }
    }
    function _() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, e, {
              value: X
            }),
            info: K({}, e, {
              value: ee
            }),
            warn: K({}, e, {
              value: ne
            }),
            error: K({}, e, {
              value: fe
            }),
            group: K({}, e, {
              value: t
            }),
            groupCollapsed: K({}, e, {
              value: i
            }),
            groupEnd: K({}, e, {
              value: E
            })
          });
        }
        te < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var v = U.ReactCurrentDispatcher, y;
    function g(e, r, a) {
      {
        if (y === void 0)
          try {
            throw Error();
          } catch (x) {
            var s = x.stack.trim().match(/\n( *(at )?)/);
            y = s && s[1] || "";
          }
        return `
` + y + e;
      }
    }
    var P = !1, T;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      T = new B();
    }
    function n(e, r) {
      if (!e || P)
        return "";
      {
        var a = T.get(e);
        if (a !== void 0)
          return a;
      }
      var s;
      P = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = v.current, v.current = null, d();
      try {
        if (r) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (G) {
              s = G;
            }
            Reflect.construct(e, [], O);
          } else {
            try {
              O.call();
            } catch (G) {
              s = G;
            }
            e.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            s = G;
          }
          e();
        }
      } catch (G) {
        if (G && s && typeof G.stack == "string") {
          for (var R = G.stack.split(`
`), J = s.stack.split(`
`), W = R.length - 1, L = J.length - 1; W >= 1 && L >= 0 && R[W] !== J[L]; )
            L--;
          for (; W >= 1 && L >= 0; W--, L--)
            if (R[W] !== J[L]) {
              if (W !== 1 || L !== 1)
                do
                  if (W--, L--, L < 0 || R[W] !== J[L]) {
                    var Q = `
` + R[W].replace(" at new ", " at ");
                    return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), typeof e == "function" && T.set(e, Q), Q;
                  }
                while (W >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        P = !1, v.current = $, _(), Error.prepareStackTrace = x;
      }
      var de = e ? e.displayName || e.name : "", oe = de ? g(de) : "";
      return typeof e == "function" && T.set(e, oe), oe;
    }
    function Z(e, r, a) {
      return n(e, !1);
    }
    function ce(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return n(e, ce(e));
      if (typeof e == "string")
        return g(e);
      switch (e) {
        case S:
          return g("Suspense");
        case f:
          return g("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Z(e.render);
          case m:
            return ae(e.type, r, a);
          case k: {
            var s = e, x = s._payload, $ = s._init;
            try {
              return ae($(x), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Fe = {}, Ye = U.ReactDebugCurrentFrame;
    function me(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        Ye.setExtraStackFrame(a);
      } else
        Ye.setExtraStackFrame(null);
    }
    function vr(e, r, a, s, x) {
      {
        var $ = Function.call.bind(be);
        for (var O in e)
          if ($(e, O)) {
            var R = void 0;
            try {
              if (typeof e[O] != "function") {
                var J = Error((s || "React class") + ": " + a + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              R = e[O](r, O, s, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              R = W;
            }
            R && !(R instanceof Error) && (me(x), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", a, O, typeof R), me(null)), R instanceof Error && !(R.message in Fe) && (Fe[R.message] = !0, me(x), Y("Failed %s type: %s", a, R.message), me(null));
          }
      }
    }
    var pr = Array.isArray;
    function _e(e) {
      return pr(e);
    }
    function yr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function br(e) {
      try {
        return We(e), !1;
      } catch {
        return !0;
      }
    }
    function We(e) {
      return "" + e;
    }
    function qe(e) {
      if (br(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(e)), We(e);
    }
    var Le = U.ReactCurrentOwner, hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, Ve;
    function Er(e) {
      if (be.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function mr(e) {
      if (be.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function gr(e, r) {
      typeof e.ref == "string" && Le.current;
    }
    function Tr(e, r) {
      {
        var a = function() {
          Ue || (Ue = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Rr(e, r) {
      {
        var a = function() {
          Ve || (Ve = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var _r = function(e, r, a, s, x, $, O) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: O,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function Or(e, r, a, s, x) {
      {
        var $, O = {}, R = null, J = null;
        a !== void 0 && (qe(a), R = "" + a), mr(r) && (qe(r.key), R = "" + r.key), Er(r) && (J = r.ref, gr(r, x));
        for ($ in r)
          be.call(r, $) && !hr.hasOwnProperty($) && (O[$] = r[$]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for ($ in W)
            O[$] === void 0 && (O[$] = W[$]);
        }
        if (R || J) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          R && Tr(O, L), J && Rr(O, L);
        }
        return _r(e, R, J, x, s, Le.current, O);
      }
    }
    var Oe = U.ReactCurrentOwner, Ne = U.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(a);
      } else
        Ne.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function ze() {
      {
        if (Oe.current) {
          var e = H(Oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Sr(e) {
      return "";
    }
    var Be = {};
    function Pr(e) {
      {
        var r = ze();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Pr(r);
        if (Be[a])
          return;
        Be[a] = !0;
        var s = "";
        e && e._owner && e._owner !== Oe.current && (s = " It was passed a child from " + H(e._owner.type) + "."), le(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, s), le(null);
      }
    }
    function Ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var a = 0; a < e.length; a++) {
            var s = e[a];
            Pe(s) && Je(s, r);
          }
        else if (Pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = N(e);
          if (typeof x == "function" && x !== e.entries)
            for (var $ = x.call(e), O; !(O = $.next()).done; )
              Pe(O.value) && Je(O.value, r);
        }
      }
    }
    function Cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          a = r.propTypes;
        else
          return;
        if (a) {
          var s = H(r);
          vr(a, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !Se) {
          Se = !0;
          var x = H(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var s = r[a];
          if (s !== "children" && s !== "key") {
            le(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), le(null);
            break;
          }
        }
        e.ref !== null && (le(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), le(null));
      }
    }
    var Ge = {};
    function Xe(e, r, a, s, x, $) {
      {
        var O = ye(e);
        if (!O) {
          var R = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Sr();
          J ? R += J : R += ze();
          var W;
          e === null ? W = "null" : _e(e) ? W = "array" : e !== void 0 && e.$$typeof === D ? (W = "<" + (H(e.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, R);
        }
        var L = Or(e, r, a, x, $);
        if (L == null)
          return L;
        if (O) {
          var Q = r.children;
          if (Q !== void 0)
            if (s)
              if (_e(Q)) {
                for (var de = 0; de < Q.length; de++)
                  Ke(Q[de], e);
                Object.freeze && Object.freeze(Q);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(Q, e);
        }
        if (be.call(r, "key")) {
          var oe = H(e), G = Object.keys(r).filter(function($r) {
            return $r !== "key";
          }), Ce = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ge[oe + Ce]) {
            var kr = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ce, oe, kr, oe), Ge[oe + Ce] = !0;
          }
        }
        return e === p ? wr(L) : Cr(L), L;
      }
    }
    function xr(e, r, a) {
      return Xe(e, r, a, !0);
    }
    function jr(e, r, a) {
      return Xe(e, r, a, !1);
    }
    var Ar = jr, Ir = xr;
    Ee.Fragment = p, Ee.jsx = Ar, Ee.jsxs = Ir;
  }()), Ee;
}
var Qe;
function Wr() {
  return Qe || (Qe = 1, process.env.NODE_ENV === "production" ? ge.exports = Fr() : ge.exports = Yr()), ge.exports;
}
var we = Wr(), Te = { exports: {} }, Re = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function qr() {
  if (er) return j;
  er = 1;
  var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, I = u ? Symbol.for("react.portal") : 60106, p = u ? Symbol.for("react.fragment") : 60107, w = u ? Symbol.for("react.strict_mode") : 60108, c = u ? Symbol.for("react.profiler") : 60114, C = u ? Symbol.for("react.provider") : 60109, l = u ? Symbol.for("react.context") : 60110, b = u ? Symbol.for("react.async_mode") : 60111, S = u ? Symbol.for("react.concurrent_mode") : 60111, f = u ? Symbol.for("react.forward_ref") : 60112, m = u ? Symbol.for("react.suspense") : 60113, k = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, z = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, N = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
  function V(o) {
    if (typeof o == "object" && o !== null) {
      var re = o.$$typeof;
      switch (re) {
        case D:
          switch (o = o.type, o) {
            case b:
            case S:
            case p:
            case c:
            case w:
            case m:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case l:
                case f:
                case z:
                case F:
                case C:
                  return o;
                default:
                  return re;
              }
          }
        case I:
          return re;
      }
    }
  }
  function q(o) {
    return V(o) === S;
  }
  return j.AsyncMode = b, j.ConcurrentMode = S, j.ContextConsumer = l, j.ContextProvider = C, j.Element = D, j.ForwardRef = f, j.Fragment = p, j.Lazy = z, j.Memo = F, j.Portal = I, j.Profiler = c, j.StrictMode = w, j.Suspense = m, j.isAsyncMode = function(o) {
    return q(o) || V(o) === b;
  }, j.isConcurrentMode = q, j.isContextConsumer = function(o) {
    return V(o) === l;
  }, j.isContextProvider = function(o) {
    return V(o) === C;
  }, j.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === D;
  }, j.isForwardRef = function(o) {
    return V(o) === f;
  }, j.isFragment = function(o) {
    return V(o) === p;
  }, j.isLazy = function(o) {
    return V(o) === z;
  }, j.isMemo = function(o) {
    return V(o) === F;
  }, j.isPortal = function(o) {
    return V(o) === I;
  }, j.isProfiler = function(o) {
    return V(o) === c;
  }, j.isStrictMode = function(o) {
    return V(o) === w;
  }, j.isSuspense = function(o) {
    return V(o) === m;
  }, j.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === p || o === S || o === c || o === w || o === m || o === k || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === F || o.$$typeof === C || o.$$typeof === l || o.$$typeof === f || o.$$typeof === N || o.$$typeof === U || o.$$typeof === Y || o.$$typeof === M);
  }, j.typeOf = V, j;
}
var A = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function Lr() {
  return rr || (rr = 1, process.env.NODE_ENV !== "production" && function() {
    var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, I = u ? Symbol.for("react.portal") : 60106, p = u ? Symbol.for("react.fragment") : 60107, w = u ? Symbol.for("react.strict_mode") : 60108, c = u ? Symbol.for("react.profiler") : 60114, C = u ? Symbol.for("react.provider") : 60109, l = u ? Symbol.for("react.context") : 60110, b = u ? Symbol.for("react.async_mode") : 60111, S = u ? Symbol.for("react.concurrent_mode") : 60111, f = u ? Symbol.for("react.forward_ref") : 60112, m = u ? Symbol.for("react.suspense") : 60113, k = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, z = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, N = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
    function V(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === p || n === S || n === c || n === w || n === m || n === k || typeof n == "object" && n !== null && (n.$$typeof === z || n.$$typeof === F || n.$$typeof === C || n.$$typeof === l || n.$$typeof === f || n.$$typeof === N || n.$$typeof === U || n.$$typeof === Y || n.$$typeof === M);
    }
    function q(n) {
      if (typeof n == "object" && n !== null) {
        var Z = n.$$typeof;
        switch (Z) {
          case D:
            var ce = n.type;
            switch (ce) {
              case b:
              case S:
              case p:
              case c:
              case w:
              case m:
                return ce;
              default:
                var ae = ce && ce.$$typeof;
                switch (ae) {
                  case l:
                  case f:
                  case z:
                  case F:
                  case C:
                    return ae;
                  default:
                    return Z;
                }
            }
          case I:
            return Z;
        }
      }
    }
    var o = b, re = S, ve = l, pe = C, ie = D, ye = f, ue = p, se = z, H = F, K = I, te = c, X = w, ee = m, ne = !1;
    function fe(n) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(n) || q(n) === b;
    }
    function t(n) {
      return q(n) === S;
    }
    function i(n) {
      return q(n) === l;
    }
    function E(n) {
      return q(n) === C;
    }
    function h(n) {
      return typeof n == "object" && n !== null && n.$$typeof === D;
    }
    function d(n) {
      return q(n) === f;
    }
    function _(n) {
      return q(n) === p;
    }
    function v(n) {
      return q(n) === z;
    }
    function y(n) {
      return q(n) === F;
    }
    function g(n) {
      return q(n) === I;
    }
    function P(n) {
      return q(n) === c;
    }
    function T(n) {
      return q(n) === w;
    }
    function B(n) {
      return q(n) === m;
    }
    A.AsyncMode = o, A.ConcurrentMode = re, A.ContextConsumer = ve, A.ContextProvider = pe, A.Element = ie, A.ForwardRef = ye, A.Fragment = ue, A.Lazy = se, A.Memo = H, A.Portal = K, A.Profiler = te, A.StrictMode = X, A.Suspense = ee, A.isAsyncMode = fe, A.isConcurrentMode = t, A.isContextConsumer = i, A.isContextProvider = E, A.isElement = h, A.isForwardRef = d, A.isFragment = _, A.isLazy = v, A.isMemo = y, A.isPortal = g, A.isProfiler = P, A.isStrictMode = T, A.isSuspense = B, A.isValidElementType = V, A.typeOf = q;
  }()), A;
}
var tr;
function lr() {
  return tr || (tr = 1, process.env.NODE_ENV === "production" ? Re.exports = qr() : Re.exports = Lr()), Re.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xe, nr;
function Ur() {
  if (nr) return xe;
  nr = 1;
  var u = Object.getOwnPropertySymbols, D = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
  function p(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function w() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var C = {}, l = 0; l < 10; l++)
        C["_" + String.fromCharCode(l)] = l;
      var b = Object.getOwnPropertyNames(C).map(function(f) {
        return C[f];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        S[f] = f;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xe = w() ? Object.assign : function(c, C) {
    for (var l, b = p(c), S, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var m in l)
        D.call(l, m) && (b[m] = l[m]);
      if (u) {
        S = u(l);
        for (var k = 0; k < S.length; k++)
          I.call(l, S[k]) && (b[S[k]] = l[S[k]]);
      }
    }
    return b;
  }, xe;
}
var je, ar;
function Me() {
  if (ar) return je;
  ar = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return je = u, je;
}
var Ae, or;
function dr() {
  return or || (or = 1, Ae = Function.call.bind(Object.prototype.hasOwnProperty)), Ae;
}
var Ie, ir;
function Vr() {
  if (ir) return Ie;
  ir = 1;
  var u = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var D = /* @__PURE__ */ Me(), I = {}, p = /* @__PURE__ */ dr();
    u = function(c) {
      var C = "Warning: " + c;
      typeof console < "u" && console.error(C);
      try {
        throw new Error(C);
      } catch {
      }
    };
  }
  function w(c, C, l, b, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in c)
        if (p(c, f)) {
          var m;
          try {
            if (typeof c[f] != "function") {
              var k = Error(
                (b || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw k.name = "Invariant Violation", k;
            }
            m = c[f](C, f, b, l, null, D);
          } catch (z) {
            m = z;
          }
          if (m && !(m instanceof Error) && u(
            (b || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in I)) {
            I[m.message] = !0;
            var F = S ? S() : "";
            u(
              "Failed " + l + " type: " + m.message + (F ?? "")
            );
          }
        }
    }
  }
  return w.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (I = {});
  }, Ie = w, Ie;
}
var ke, ur;
function Nr() {
  if (ur) return ke;
  ur = 1;
  var u = lr(), D = Ur(), I = /* @__PURE__ */ Me(), p = /* @__PURE__ */ dr(), w = /* @__PURE__ */ Vr(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(l) {
    var b = "Warning: " + l;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function C() {
    return null;
  }
  return ke = function(l, b) {
    var S = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(t) {
      var i = t && (S && t[S] || t[f]);
      if (typeof i == "function")
        return i;
    }
    var k = "<<anonymous>>", F = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: Y(),
      arrayOf: V,
      element: q(),
      elementType: o(),
      instanceOf: re,
      node: ye(),
      objectOf: pe,
      oneOf: ve,
      oneOfType: ie,
      shape: se,
      exact: H
    };
    function z(t, i) {
      return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
    }
    function M(t, i) {
      this.message = t, this.data = i && typeof i == "object" ? i : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function N(t) {
      if (process.env.NODE_ENV !== "production")
        var i = {}, E = 0;
      function h(_, v, y, g, P, T, B) {
        if (g = g || k, T = T || y, B !== I) {
          if (b) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = g + ":" + y;
            !i[Z] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + g + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), i[Z] = !0, E++);
          }
        }
        return v[y] == null ? _ ? v[y] === null ? new M("The " + P + " `" + T + "` is marked as required " + ("in `" + g + "`, but its value is `null`.")) : new M("The " + P + " `" + T + "` is marked as required in " + ("`" + g + "`, but its value is `undefined`.")) : null : t(v, y, g, P, T);
      }
      var d = h.bind(null, !1);
      return d.isRequired = h.bind(null, !0), d;
    }
    function U(t) {
      function i(E, h, d, _, v, y) {
        var g = E[h], P = X(g);
        if (P !== t) {
          var T = ee(g);
          return new M(
            "Invalid " + _ + " `" + v + "` of type " + ("`" + T + "` supplied to `" + d + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return N(i);
    }
    function Y() {
      return N(C);
    }
    function V(t) {
      function i(E, h, d, _, v) {
        if (typeof t != "function")
          return new M("Property `" + v + "` of component `" + d + "` has invalid PropType notation inside arrayOf.");
        var y = E[h];
        if (!Array.isArray(y)) {
          var g = X(y);
          return new M("Invalid " + _ + " `" + v + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected an array."));
        }
        for (var P = 0; P < y.length; P++) {
          var T = t(y, P, d, _, v + "[" + P + "]", I);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return N(i);
    }
    function q() {
      function t(i, E, h, d, _) {
        var v = i[E];
        if (!l(v)) {
          var y = X(v);
          return new M("Invalid " + d + " `" + _ + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement."));
        }
        return null;
      }
      return N(t);
    }
    function o() {
      function t(i, E, h, d, _) {
        var v = i[E];
        if (!u.isValidElementType(v)) {
          var y = X(v);
          return new M("Invalid " + d + " `" + _ + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return N(t);
    }
    function re(t) {
      function i(E, h, d, _, v) {
        if (!(E[h] instanceof t)) {
          var y = t.name || k, g = fe(E[h]);
          return new M("Invalid " + _ + " `" + v + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return N(i);
    }
    function ve(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), C;
      function i(E, h, d, _, v) {
        for (var y = E[h], g = 0; g < t.length; g++)
          if (z(y, t[g]))
            return null;
        var P = JSON.stringify(t, function(B, n) {
          var Z = ee(n);
          return Z === "symbol" ? String(n) : n;
        });
        return new M("Invalid " + _ + " `" + v + "` of value `" + String(y) + "` " + ("supplied to `" + d + "`, expected one of " + P + "."));
      }
      return N(i);
    }
    function pe(t) {
      function i(E, h, d, _, v) {
        if (typeof t != "function")
          return new M("Property `" + v + "` of component `" + d + "` has invalid PropType notation inside objectOf.");
        var y = E[h], g = X(y);
        if (g !== "object")
          return new M("Invalid " + _ + " `" + v + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected an object."));
        for (var P in y)
          if (p(y, P)) {
            var T = t(y, P, d, _, v + "." + P, I);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return N(i);
    }
    function ie(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), C;
      for (var i = 0; i < t.length; i++) {
        var E = t[i];
        if (typeof E != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(E) + " at index " + i + "."
          ), C;
      }
      function h(d, _, v, y, g) {
        for (var P = [], T = 0; T < t.length; T++) {
          var B = t[T], n = B(d, _, v, y, g, I);
          if (n == null)
            return null;
          n.data && p(n.data, "expectedType") && P.push(n.data.expectedType);
        }
        var Z = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new M("Invalid " + y + " `" + g + "` supplied to " + ("`" + v + "`" + Z + "."));
      }
      return N(h);
    }
    function ye() {
      function t(i, E, h, d, _) {
        return K(i[E]) ? null : new M("Invalid " + d + " `" + _ + "` supplied to " + ("`" + h + "`, expected a ReactNode."));
      }
      return N(t);
    }
    function ue(t, i, E, h, d) {
      return new M(
        (t || "React class") + ": " + i + " type `" + E + "." + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + d + "`."
      );
    }
    function se(t) {
      function i(E, h, d, _, v) {
        var y = E[h], g = X(y);
        if (g !== "object")
          return new M("Invalid " + _ + " `" + v + "` of type `" + g + "` " + ("supplied to `" + d + "`, expected `object`."));
        for (var P in t) {
          var T = t[P];
          if (typeof T != "function")
            return ue(d, _, v, P, ee(T));
          var B = T(y, P, d, _, v + "." + P, I);
          if (B)
            return B;
        }
        return null;
      }
      return N(i);
    }
    function H(t) {
      function i(E, h, d, _, v) {
        var y = E[h], g = X(y);
        if (g !== "object")
          return new M("Invalid " + _ + " `" + v + "` of type `" + g + "` " + ("supplied to `" + d + "`, expected `object`."));
        var P = D({}, E[h], t);
        for (var T in P) {
          var B = t[T];
          if (p(t, T) && typeof B != "function")
            return ue(d, _, v, T, ee(B));
          if (!B)
            return new M(
              "Invalid " + _ + " `" + v + "` key `" + T + "` supplied to `" + d + "`.\nBad object: " + JSON.stringify(E[h], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var n = B(y, T, d, _, v + "." + T, I);
          if (n)
            return n;
        }
        return null;
      }
      return N(i);
    }
    function K(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(K);
          if (t === null || l(t))
            return !0;
          var i = m(t);
          if (i) {
            var E = i.call(t), h;
            if (i !== t.entries) {
              for (; !(h = E.next()).done; )
                if (!K(h.value))
                  return !1;
            } else
              for (; !(h = E.next()).done; ) {
                var d = h.value;
                if (d && !K(d[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(t, i) {
      return t === "symbol" ? !0 : i ? i["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && i instanceof Symbol : !1;
    }
    function X(t) {
      var i = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : te(i, t) ? "symbol" : i;
    }
    function ee(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var i = X(t);
      if (i === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return i;
    }
    function ne(t) {
      var i = ee(t);
      switch (i) {
        case "array":
        case "object":
          return "an " + i;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + i;
        default:
          return i;
      }
    }
    function fe(t) {
      return !t.constructor || !t.constructor.name ? k : t.constructor.name;
    }
    return F.checkPropTypes = w, F.resetWarningCache = w.resetWarningCache, F.PropTypes = F, F;
  }, ke;
}
var $e, sr;
function zr() {
  if (sr) return $e;
  sr = 1;
  var u = /* @__PURE__ */ Me();
  function D() {
  }
  function I() {
  }
  return I.resetWarningCache = D, $e = function() {
    function p(C, l, b, S, f, m) {
      if (m !== u) {
        var k = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw k.name = "Invariant Violation", k;
      }
    }
    p.isRequired = p;
    function w() {
      return p;
    }
    var c = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: w,
      element: p,
      elementType: p,
      instanceOf: w,
      node: p,
      objectOf: w,
      oneOf: w,
      oneOfType: w,
      shape: w,
      exact: w,
      checkPropTypes: I,
      resetWarningCache: D
    };
    return c.PropTypes = c, c;
  }, $e;
}
var fr;
function Br() {
  if (fr) return Te.exports;
  if (fr = 1, process.env.NODE_ENV !== "production") {
    var u = lr(), D = !0;
    Te.exports = /* @__PURE__ */ Nr()(u.isElement, D);
  } else
    Te.exports = /* @__PURE__ */ zr()();
  return Te.exports;
}
var Jr = /* @__PURE__ */ Br();
const De = /* @__PURE__ */ Mr(Jr), Kr = ({ isOpen: u, onClose: D, children: I }) => u ? Dr.createPortal(
  /* @__PURE__ */ we.jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ we.jsxs("div", { className: "modal-content", children: [
    /* @__PURE__ */ we.jsx("button", { className: "close-btn", onClick: D, children: "×" }),
    I
  ] }) }),
  document.body
) : null;
Kr.propTypes = {
  isOpen: De.bool.isRequired,
  // Determines whether the modal is open or closed
  onClose: De.func.isRequired,
  // Function to call once the modal is closed
  children: De.node.isRequired
  // React element which will be inserted into the modal
};
export {
  Kr as default
};
