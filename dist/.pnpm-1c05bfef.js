import re, { createContext as il, useState as cs, useEffect as sl, useContext as ol } from "react";
import ll, { flushSync as al } from "react-dom";
var ii = {}, cl = {
  get exports() {
    return ii;
  },
  set exports(r) {
    ii = r;
  }
}, Mt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si;
function fl() {
  if (si)
    return Mt;
  si = 1;
  var r = re, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, a, c) {
    var f, u = {}, d = null, h = null;
    c !== void 0 && (d = "" + c), a.key !== void 0 && (d = "" + a.key), a.ref !== void 0 && (h = a.ref);
    for (f in a)
      n.call(a, f) && !s.hasOwnProperty(f) && (u[f] = a[f]);
    if (l && l.defaultProps)
      for (f in a = l.defaultProps, a)
        u[f] === void 0 && (u[f] = a[f]);
    return { $$typeof: e, type: l, key: d, ref: h, props: u, _owner: i.current };
  }
  return Mt.Fragment = t, Mt.jsx = o, Mt.jsxs = o, Mt;
}
var Ct = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oi;
function ul() {
  return oi || (oi = 1, process.env.NODE_ENV !== "production" && function() {
    var r = re, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function y(p) {
      if (p === null || typeof p != "object")
        return null;
      var k = m && p[m] || p[g];
      return typeof k == "function" ? k : null;
    }
    var S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(p) {
      {
        for (var k = arguments.length, x = new Array(k > 1 ? k - 1 : 0), T = 1; T < k; T++)
          x[T - 1] = arguments[T];
        P("error", p, x);
      }
    }
    function P(p, k, x) {
      {
        var T = S.ReactDebugCurrentFrame, I = T.getStackAddendum();
        I !== "" && (k += "%s", x = x.concat([I]));
        var F = x.map(function(A) {
          return String(A);
        });
        F.unshift("Warning: " + k), Function.prototype.apply.call(console[p], console, F);
      }
    }
    var V = !1, z = !1, se = !1, Y = !1, E = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function bt(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === n || p === s || E || p === i || p === c || p === f || Y || p === h || V || z || se || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === u || p.$$typeof === o || p.$$typeof === l || p.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === Ce || p.getModuleId !== void 0));
    }
    function Cn(p, k, x) {
      var T = p.displayName;
      if (T)
        return T;
      var I = k.displayName || k.name || "";
      return I !== "" ? x + "(" + I + ")" : x;
    }
    function Br(p) {
      return p.displayName || "Context";
    }
    function ke(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            var k = p;
            return Br(k) + ".Consumer";
          case o:
            var x = p;
            return Br(x._context) + ".Provider";
          case a:
            return Cn(p, p.render, "ForwardRef");
          case u:
            var T = p.displayName || null;
            return T !== null ? T : ke(p.type) || "Memo";
          case d: {
            var I = p, F = I._payload, A = I._init;
            try {
              return ke(A(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ve = Object.assign, St = 0, Fr, zr, Vr, Lr, $r, jr, Wr;
    function Jr() {
    }
    Jr.__reactDisabledLog = !0;
    function Io() {
      {
        if (St === 0) {
          Fr = console.log, zr = console.info, Vr = console.warn, Lr = console.error, $r = console.group, jr = console.groupCollapsed, Wr = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: Jr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        St++;
      }
    }
    function Po() {
      {
        if (St--, St === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ve({}, p, {
              value: Fr
            }),
            info: Ve({}, p, {
              value: zr
            }),
            warn: Ve({}, p, {
              value: Vr
            }),
            error: Ve({}, p, {
              value: Lr
            }),
            group: Ve({}, p, {
              value: $r
            }),
            groupCollapsed: Ve({}, p, {
              value: jr
            }),
            groupEnd: Ve({}, p, {
              value: Wr
            })
          });
        }
        St < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wn = S.ReactCurrentDispatcher, On;
    function Wt(p, k, x) {
      {
        if (On === void 0)
          try {
            throw Error();
          } catch (I) {
            var T = I.stack.trim().match(/\n( *(at )?)/);
            On = T && T[1] || "";
          }
        return `
` + On + p;
      }
    }
    var Tn = !1, Jt;
    {
      var Bo = typeof WeakMap == "function" ? WeakMap : Map;
      Jt = new Bo();
    }
    function Hr(p, k) {
      if (!p || Tn)
        return "";
      {
        var x = Jt.get(p);
        if (x !== void 0)
          return x;
      }
      var T;
      Tn = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = wn.current, wn.current = null, Io();
      try {
        if (k) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (be) {
              T = be;
            }
            Reflect.construct(p, [], A);
          } else {
            try {
              A.call();
            } catch (be) {
              T = be;
            }
            p.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            T = be;
          }
          p();
        }
      } catch (be) {
        if (be && T && typeof be.stack == "string") {
          for (var N = be.stack.split(`
`), G = T.stack.split(`
`), L = N.length - 1, $ = G.length - 1; L >= 1 && $ >= 0 && N[L] !== G[$]; )
            $--;
          for (; L >= 1 && $ >= 0; L--, $--)
            if (N[L] !== G[$]) {
              if (L !== 1 || $ !== 1)
                do
                  if (L--, $--, $ < 0 || N[L] !== G[$]) {
                    var oe = `
` + N[L].replace(" at new ", " at ");
                    return p.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", p.displayName)), typeof p == "function" && Jt.set(p, oe), oe;
                  }
                while (L >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        Tn = !1, wn.current = F, Po(), Error.prepareStackTrace = I;
      }
      var tt = p ? p.displayName || p.name : "", ri = tt ? Wt(tt) : "";
      return typeof p == "function" && Jt.set(p, ri), ri;
    }
    function Fo(p, k, x) {
      return Hr(p, !1);
    }
    function zo(p) {
      var k = p.prototype;
      return !!(k && k.isReactComponent);
    }
    function Ht(p, k, x) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return Hr(p, zo(p));
      if (typeof p == "string")
        return Wt(p);
      switch (p) {
        case c:
          return Wt("Suspense");
        case f:
          return Wt("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            return Fo(p.render);
          case u:
            return Ht(p.type, k, x);
          case d: {
            var T = p, I = T._payload, F = T._init;
            try {
              return Ht(F(I), k, x);
            } catch {
            }
          }
        }
      return "";
    }
    var _t = Object.prototype.hasOwnProperty, _r = {}, qr = S.ReactDebugCurrentFrame;
    function qt(p) {
      if (p) {
        var k = p._owner, x = Ht(p.type, p._source, k ? k.type : null);
        qr.setExtraStackFrame(x);
      } else
        qr.setExtraStackFrame(null);
    }
    function Vo(p, k, x, T, I) {
      {
        var F = Function.call.bind(_t);
        for (var A in p)
          if (F(p, A)) {
            var N = void 0;
            try {
              if (typeof p[A] != "function") {
                var G = Error((T || "React class") + ": " + x + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              N = p[A](k, A, T, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              N = L;
            }
            N && !(N instanceof Error) && (qt(I), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", x, A, typeof N), qt(null)), N instanceof Error && !(N.message in _r) && (_r[N.message] = !0, qt(I), w("Failed %s type: %s", x, N.message), qt(null));
          }
      }
    }
    var Lo = Array.isArray;
    function En(p) {
      return Lo(p);
    }
    function $o(p) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, x = k && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return x;
      }
    }
    function jo(p) {
      try {
        return Kr(p), !1;
      } catch {
        return !0;
      }
    }
    function Kr(p) {
      return "" + p;
    }
    function Ur(p) {
      if (jo(p))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $o(p)), Kr(p);
    }
    var xt = S.ReactCurrentOwner, Wo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yr, Gr, Nn;
    Nn = {};
    function Jo(p) {
      if (_t.call(p, "ref")) {
        var k = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Ho(p) {
      if (_t.call(p, "key")) {
        var k = Object.getOwnPropertyDescriptor(p, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function _o(p, k) {
      if (typeof p.ref == "string" && xt.current && k && xt.current.stateNode !== k) {
        var x = ke(xt.current.type);
        Nn[x] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ke(xt.current.type), p.ref), Nn[x] = !0);
      }
    }
    function qo(p, k) {
      {
        var x = function() {
          Yr || (Yr = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        x.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Ko(p, k) {
      {
        var x = function() {
          Gr || (Gr = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        x.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Uo = function(p, k, x, T, I, F, A) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: p,
        key: k,
        ref: x,
        props: A,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function Yo(p, k, x, T, I) {
      {
        var F, A = {}, N = null, G = null;
        x !== void 0 && (Ur(x), N = "" + x), Ho(k) && (Ur(k.key), N = "" + k.key), Jo(k) && (G = k.ref, _o(k, I));
        for (F in k)
          _t.call(k, F) && !Wo.hasOwnProperty(F) && (A[F] = k[F]);
        if (p && p.defaultProps) {
          var L = p.defaultProps;
          for (F in L)
            A[F] === void 0 && (A[F] = L[F]);
        }
        if (N || G) {
          var $ = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          N && qo(A, $), G && Ko(A, $);
        }
        return Uo(p, N, G, I, T, xt.current, A);
      }
    }
    var Dn = S.ReactCurrentOwner, Xr = S.ReactDebugCurrentFrame;
    function et(p) {
      if (p) {
        var k = p._owner, x = Ht(p.type, p._source, k ? k.type : null);
        Xr.setExtraStackFrame(x);
      } else
        Xr.setExtraStackFrame(null);
    }
    var vn;
    vn = !1;
    function An(p) {
      return typeof p == "object" && p !== null && p.$$typeof === e;
    }
    function Zr() {
      {
        if (Dn.current) {
          var p = ke(Dn.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function Go(p) {
      {
        if (p !== void 0) {
          var k = p.fileName.replace(/^.*[\\\/]/, ""), x = p.lineNumber;
          return `

Check your code at ` + k + ":" + x + ".";
        }
        return "";
      }
    }
    var Qr = {};
    function Xo(p) {
      {
        var k = Zr();
        if (!k) {
          var x = typeof p == "string" ? p : p.displayName || p.name;
          x && (k = `

Check the top-level render call using <` + x + ">.");
        }
        return k;
      }
    }
    function ei(p, k) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var x = Xo(k);
        if (Qr[x])
          return;
        Qr[x] = !0;
        var T = "";
        p && p._owner && p._owner !== Dn.current && (T = " It was passed a child from " + ke(p._owner.type) + "."), et(p), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, T), et(null);
      }
    }
    function ti(p, k) {
      {
        if (typeof p != "object")
          return;
        if (En(p))
          for (var x = 0; x < p.length; x++) {
            var T = p[x];
            An(T) && ei(T, k);
          }
        else if (An(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var I = y(p);
          if (typeof I == "function" && I !== p.entries)
            for (var F = I.call(p), A; !(A = F.next()).done; )
              An(A.value) && ei(A.value, k);
        }
      }
    }
    function Zo(p) {
      {
        var k = p.type;
        if (k == null || typeof k == "string")
          return;
        var x;
        if (typeof k == "function")
          x = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === u))
          x = k.propTypes;
        else
          return;
        if (x) {
          var T = ke(k);
          Vo(x, p.props, "prop", T, p);
        } else if (k.PropTypes !== void 0 && !vn) {
          vn = !0;
          var I = ke(k);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qo(p) {
      {
        for (var k = Object.keys(p.props), x = 0; x < k.length; x++) {
          var T = k[x];
          if (T !== "children" && T !== "key") {
            et(p), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), et(null);
            break;
          }
        }
        p.ref !== null && (et(p), w("Invalid attribute `ref` supplied to `React.Fragment`."), et(null));
      }
    }
    function ni(p, k, x, T, I, F) {
      {
        var A = bt(p);
        if (!A) {
          var N = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = Go(I);
          G ? N += G : N += Zr();
          var L;
          p === null ? L = "null" : En(p) ? L = "array" : p !== void 0 && p.$$typeof === e ? (L = "<" + (ke(p.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : L = typeof p, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, N);
        }
        var $ = Yo(p, k, x, I, F);
        if ($ == null)
          return $;
        if (A) {
          var oe = k.children;
          if (oe !== void 0)
            if (T)
              if (En(oe)) {
                for (var tt = 0; tt < oe.length; tt++)
                  ti(oe[tt], p);
                Object.freeze && Object.freeze(oe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ti(oe, p);
        }
        return p === n ? Qo($) : Zo($), $;
      }
    }
    function el(p, k, x) {
      return ni(p, k, x, !0);
    }
    function tl(p, k, x) {
      return ni(p, k, x, !1);
    }
    var nl = tl, rl = el;
    Ct.Fragment = n, Ct.jsx = nl, Ct.jsxs = rl;
  }()), Ct;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = fl() : r.exports = ul();
})(cl);
function _(r) {
  this.content = r;
}
_.prototype = {
  constructor: _,
  find: function(r) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === r)
        return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(r) {
    var e = this.find(r);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(r, e, t) {
    var n = t && t != r ? this.remove(t) : this, i = n.find(r), s = n.content.slice();
    return i == -1 ? s.push(t || r, e) : (s[i + 1] = e, t && (s[i] = t)), new _(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(r) {
    var e = this.find(r);
    if (e == -1)
      return this;
    var t = this.content.slice();
    return t.splice(e, 2), new _(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(r, e) {
    return new _([r, e].concat(this.remove(r).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(r, e) {
    var t = this.remove(r).content.slice();
    return t.push(r, e), new _(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(r, e, t) {
    var n = this.remove(e), i = n.content.slice(), s = n.find(r);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new _(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(r) {
    for (var e = 0; e < this.content.length; e += 2)
      r(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(r) {
    return r = _.from(r), r.size ? new _(r.content.concat(this.subtract(r).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(r) {
    return r = _.from(r), r.size ? new _(this.subtract(r).content.concat(r.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(r) {
    var e = this;
    r = _.from(r);
    for (var t = 0; t < r.content.length; t += 2)
      e = e.remove(r.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var r = {};
    return this.forEach(function(e, t) {
      r[e] = t;
    }), r;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
_.from = function(r) {
  if (r instanceof _)
    return r;
  var e = [];
  if (r)
    for (var t in r)
      e.push(t, r[t]);
  return new _(e);
};
function fs(r, e, t) {
  for (let n = 0; ; n++) {
    if (n == r.childCount || n == e.childCount)
      return r.childCount == e.childCount ? null : t;
    let i = r.child(n), s = e.child(n);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = fs(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function us(r, e, t, n) {
  for (let i = r.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: n };
    let o = r.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, n -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: n };
    if (o.isText && o.text != l.text) {
      let c = 0, f = Math.min(o.text.length, l.text.length);
      for (; c < f && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, n--;
      return { a: t, b: n };
    }
    if (o.content.size || l.content.size) {
      let c = us(o.content, l.content, t - 1, n - 1);
      if (c)
        return c;
    }
    t -= a, n -= a;
  }
}
class b {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let n = 0; n < e.length; n++)
        this.size += e[n].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, n, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && n(a, i + l, s || null, o) !== !1 && a.content.size) {
        let f = l + 1;
        a.nodesBetween(Math.max(0, e - f), Math.min(a.content.size, t - f), n, i + f);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, n, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      l.isText ? (s += l.text.slice(Math.max(e, a) - a, t - a), o = !n) : l.isLeaf ? (i ? s += typeof i == "function" ? i(l) : i : l.type.spec.leafText && (s += l.type.spec.leafText(l)), o = !n) : !o && l.isBlock && (s += n, o = !0);
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, n = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(n) && (i[i.length - 1] = t.withText(t.text + n.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new b(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let n = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), n.push(l), i += l.nodeSize), o = a;
      }
    return new b(n, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? b.empty : e == 0 && t == this.content.length ? this : new b(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let n = this.content[e];
    if (n == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - n.nodeSize;
    return i[e] = t, new b(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new b([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new b(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, n = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, n, t), n += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return fs(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, n = e.size) {
    return us(this, e, t, n);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return Kt(0, e);
    if (e == this.size)
      return Kt(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, i = 0; ; n++) {
      let s = this.child(n), o = i + s.nodeSize;
      if (o >= e)
        return o == e || t > 0 ? Kt(n + 1, o) : Kt(n, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return b.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new b(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return b.empty;
    let t, n = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      n += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new b(t || e, n);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return b.empty;
    if (e instanceof b)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new b([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
b.empty = new b([], 0);
const Rn = { index: 0, offset: 0 };
function Kt(r, e) {
  return Rn.index = r, Rn.offset = e, Rn;
}
function Zt(r, e) {
  if (r === e)
    return !0;
  if (!(r && typeof r == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(r);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (r.length != e.length)
      return !1;
    for (let n = 0; n < r.length; n++)
      if (!Zt(r[n], e[n]))
        return !1;
  } else {
    for (let n in r)
      if (!(n in e) || !Zt(r[n], e[n]))
        return !1;
    for (let n in e)
      if (!(n in r))
        return !1;
  }
  return !0;
}
let B = class tr {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, n = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !n && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), n = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), n || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Zt(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let n = e.marks[t.type];
    if (!n)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    return n.create(t.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (!e[n].eq(t[n]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return tr.none;
    if (e instanceof tr)
      return [e];
    let t = e.slice();
    return t.sort((n, i) => n.type.rank - i.type.rank), t;
  }
};
B.none = [];
class Qt extends Error {
}
class M {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, n) {
    this.content = e, this.openStart = t, this.openEnd = n;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let n = hs(this.content, e + this.openStart, t);
    return n && new M(n, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new M(ds(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return M.empty;
    let n = t.openStart || 0, i = t.openEnd || 0;
    if (typeof n != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new M(b.fromJSON(e, t.content), n, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let n = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      n++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new M(e, n, i);
  }
}
M.empty = new M(b.empty, 0, 0);
function ds(r, e, t) {
  let { index: n, offset: i } = r.findIndex(e), s = r.maybeChild(n), { index: o, offset: l } = r.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !r.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return r.cut(0, e).append(r.cut(t));
  }
  if (n != o)
    throw new RangeError("Removing non-flat range");
  return r.replaceChild(n, s.copy(ds(s.content, e - i - 1, t - i - 1)));
}
function hs(r, e, t, n) {
  let { index: i, offset: s } = r.findIndex(e), o = r.maybeChild(i);
  if (s == e || o.isText)
    return n && !n.canReplace(i, i, t) ? null : r.cut(0, e).append(t).append(r.cut(e));
  let l = hs(o.content, e - s - 1, t);
  return l && r.replaceChild(i, o.copy(l));
}
function dl(r, e, t) {
  if (t.openStart > r.depth)
    throw new Qt("Inserted content deeper than insertion position");
  if (r.depth - t.openStart != e.depth - t.openEnd)
    throw new Qt("Inconsistent open depths");
  return ps(r, e, t, 0);
}
function ps(r, e, t, n) {
  let i = r.index(n), s = r.node(n);
  if (i == e.index(n) && n < r.depth - t.openStart) {
    let o = ps(r, e, t, n + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && r.depth == n && e.depth == n) {
      let o = r.parent, l = o.content;
      return He(o, l.cut(0, r.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = hl(t, r);
      return He(s, gs(r, o, l, e, n));
    }
  else
    return He(s, en(r, e, n));
}
function ms(r, e) {
  if (!e.type.compatibleContent(r.type))
    throw new Qt("Cannot join " + e.type.name + " onto " + r.type.name);
}
function nr(r, e, t) {
  let n = r.node(t);
  return ms(n, e.node(t)), n;
}
function Je(r, e) {
  let t = e.length - 1;
  t >= 0 && r.isText && r.sameMarkup(e[t]) ? e[t] = r.withText(e[t].text + r.text) : e.push(r);
}
function Nt(r, e, t, n) {
  let i = (e || r).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  r && (s = r.index(t), r.depth > t ? s++ : r.textOffset && (Je(r.nodeAfter, n), s++));
  for (let l = s; l < o; l++)
    Je(i.child(l), n);
  e && e.depth == t && e.textOffset && Je(e.nodeBefore, n);
}
function He(r, e) {
  return r.type.checkContent(e), r.copy(e);
}
function gs(r, e, t, n, i) {
  let s = r.depth > i && nr(r, e, i + 1), o = n.depth > i && nr(t, n, i + 1), l = [];
  return Nt(null, r, i, l), s && o && e.index(i) == t.index(i) ? (ms(s, o), Je(He(s, gs(r, e, t, n, i + 1)), l)) : (s && Je(He(s, en(r, e, i + 1)), l), Nt(e, t, i, l), o && Je(He(o, en(t, n, i + 1)), l)), Nt(n, null, i, l), new b(l);
}
function en(r, e, t) {
  let n = [];
  if (Nt(null, r, t, n), r.depth > t) {
    let i = nr(r, e, t + 1);
    Je(He(i, en(r, e, t + 1)), n);
  }
  return Nt(e, null, t, n), new b(n);
}
function hl(r, e) {
  let t = e.depth - r.openStart, i = e.node(t).copy(r.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(b.from(i));
  return {
    start: i.resolveNoCache(r.openStart + t),
    end: i.resolveNoCache(i.content.size - r.openEnd - t)
  };
}
class It {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.pos = e, this.path = t, this.parentOffset = n, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let n = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return n ? e.child(t).cut(n) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let n = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += n.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return B.none;
    if (this.textOffset)
      return e.child(t).marks;
    let n = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!n) {
      let l = n;
      n = i, i = l;
    }
    let s = n.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let n = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < n.length; s++)
      n[s].type.spec.inclusive === !1 && (!i || !n[s].isInSet(i.marks)) && (n = n[s--].removeFromSet(n));
    return n;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--)
      if (e.pos <= this.end(n) && (!t || t(this.node(n))))
        return new tn(this, e, n);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let n = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (n.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new It(t, n, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    for (let i = 0; i < In.length; i++) {
      let s = In[i];
      if (s.pos == t && s.doc == e)
        return s;
    }
    let n = In[Pn] = It.resolve(e, t);
    return Pn = (Pn + 1) % pl, n;
  }
}
let In = [], Pn = 0, pl = 12;
class tn {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, n) {
    this.$from = e, this.$to = t, this.depth = n;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const ml = /* @__PURE__ */ Object.create(null);
let _e = class rr {
  /**
  @internal
  */
  constructor(e, t, n, i = B.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = n || b.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  parent-relative position, its parent node, and its child index.
  When the callback returns false for a given node, that node's
  children will not be recursed over. The last parameter can be
  used to specify a starting position to count from.
  */
  nodesBetween(e, t, n, i = 0) {
    this.content.nodesBetween(e, t, n, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, t, n, i) {
    return this.content.textBetween(e, t, n, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, n) {
    return this.type == e && Zt(this.attrs, t || e.defaultAttrs || ml) && B.sameSet(this.marks, n || B.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new rr(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new rr(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, n = !1) {
    if (e == t)
      return M.empty;
    let i = this.resolve(e), s = this.resolve(t), o = n ? 0 : i.sharedDepth(t), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new M(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, n) {
    return dl(this.resolve(e), this.resolve(t), n);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: n, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(n), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: n } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: n };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: n } = this.content.findIndex(e);
    if (n < e)
      return { node: this.content.child(t), index: t, offset: n };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: n - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return It.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return It.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, n) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (n.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), ys(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, n = b.empty, i = 0, s = n.childCount) {
    let o = this.contentMatchAt(e).matchFragment(n, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(n.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, n, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(n), o = s && s.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise error when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    let e = B.none;
    for (let t = 0; t < this.marks.length; t++)
      e = this.marks[t].addToSet(e);
    if (!B.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let n = null;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      n = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, n);
    }
    let i = b.fromJSON(e, t.content);
    return e.nodeType(t.type).create(t.attrs, i, n);
  }
};
_e.prototype.text = void 0;
class nn extends _e {
  /**
  @internal
  */
  constructor(e, t, n, i) {
    if (super(e, t, null, i), !n)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = n;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : ys(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new nn(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new nn(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function ys(r, e) {
  for (let t = r.length - 1; t >= 0; t--)
    e = r[t].type.name + "(" + e + ")";
  return e;
}
class Ue {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let n = new gl(e, t);
    if (n.next == null)
      return Ue.empty;
    let i = ks(n);
    n.next && n.err("Unexpected trailing text");
    let s = Cl(Ml(i));
    return wl(s, n), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, n = e.childCount) {
    let i = this;
    for (let s = t; i && s < n; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let n = 0; n < e.next.length; n++)
        if (this.next[t].type == e.next[n].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, n = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(e, n);
      if (a && (!t || a.validEnd))
        return b.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: f, next: u } = o.next[c];
        if (!(f.isText || f.hasRequiredAttrs()) && i.indexOf(u) == -1) {
          i.push(u);
          let d = s(u, l.concat(f));
          if (d)
            return d;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let n = 0; n < this.wrapCache.length; n += 2)
      if (this.wrapCache[n] == e)
        return this.wrapCache[n + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), n = [{ match: this, type: null, via: null }];
    for (; n.length; ) {
      let i = n.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (n.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(n) {
      e.push(n);
      for (let i = 0; i < n.next.length; i++)
        e.indexOf(n.next[i].next) == -1 && t(n.next[i].next);
    }
    return t(this), e.map((n, i) => {
      let s = i + (n.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < n.next.length; o++)
        s += (o ? ", " : "") + n.next[o].type.name + "->" + e.indexOf(n.next[o].next);
      return s;
    }).join(`
`);
  }
}
Ue.empty = new Ue(!0);
class gl {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function ks(r) {
  let e = [];
  do
    e.push(yl(r));
  while (r.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function yl(r) {
  let e = [];
  do
    e.push(kl(r));
  while (r.next && r.next != ")" && r.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function kl(r) {
  let e = xl(r);
  for (; ; )
    if (r.eat("+"))
      e = { type: "plus", expr: e };
    else if (r.eat("*"))
      e = { type: "star", expr: e };
    else if (r.eat("?"))
      e = { type: "opt", expr: e };
    else if (r.eat("{"))
      e = bl(r, e);
    else
      break;
  return e;
}
function li(r) {
  /\D/.test(r.next) && r.err("Expected number, got '" + r.next + "'");
  let e = Number(r.next);
  return r.pos++, e;
}
function bl(r, e) {
  let t = li(r), n = t;
  return r.eat(",") && (r.next != "}" ? n = li(r) : n = -1), r.eat("}") || r.err("Unclosed braced range"), { type: "range", min: t, max: n, expr: e };
}
function Sl(r, e) {
  let t = r.nodeTypes, n = t[e];
  if (n)
    return [n];
  let i = [];
  for (let s in t) {
    let o = t[s];
    o.groups.indexOf(e) > -1 && i.push(o);
  }
  return i.length == 0 && r.err("No node type or group '" + e + "' found"), i;
}
function xl(r) {
  if (r.eat("(")) {
    let e = ks(r);
    return r.eat(")") || r.err("Missing closing paren"), e;
  } else if (/\W/.test(r.next))
    r.err("Unexpected token '" + r.next + "'");
  else {
    let e = Sl(r, r.next).map((t) => (r.inline == null ? r.inline = t.isInline : r.inline != t.isInline && r.err("Mixing inline and block content"), { type: "name", value: t }));
    return r.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Ml(r) {
  let e = [[]];
  return i(s(r, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function n(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function i(o, l) {
    o.forEach((a) => a.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = s(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (o.type == "star") {
      let a = t();
      return n(l, a), i(s(o.expr, a), a), [n(a)];
    } else if (o.type == "plus") {
      let a = t();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [n(a)];
    } else {
      if (o.type == "opt")
        return [n(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let f = t();
          i(s(o.expr, a), f), a = f;
        }
        if (o.max == -1)
          i(s(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let f = t();
            n(a, f), i(s(o.expr, a), f), a = f;
          }
        return [n(a)];
      } else {
        if (o.type == "name")
          return [n(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function bs(r, e) {
  return e - r;
}
function ai(r, e) {
  let t = [];
  return n(e), t.sort(bs);
  function n(i) {
    let s = r[i];
    if (s.length == 1 && !s[0].term)
      return n(s[0].to);
    t.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && t.indexOf(a) == -1 && n(a);
    }
  }
}
function Cl(r) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(ai(r, 0));
  function t(n) {
    let i = [];
    n.forEach((o) => {
      r[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let f = 0; f < i.length; f++)
          i[f][0] == l && (c = i[f][1]);
        ai(r, a).forEach((f) => {
          c || i.push([l, c = []]), c.indexOf(f) == -1 && c.push(f);
        });
      });
    });
    let s = e[n.join(",")] = new Ue(n.indexOf(r.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(bs);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) });
    }
    return s;
  }
}
function wl(r, e) {
  for (let t = 0, n = [r]; t < n.length; t++) {
    let i = n[t], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), n.indexOf(c) == -1 && n.push(c);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Ss(r) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in r) {
    let n = r[t];
    if (!n.hasDefault)
      return null;
    e[t] = n.default;
  }
  return e;
}
function xs(r, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n in r) {
    let i = e && e[n];
    if (i === void 0) {
      let s = r[n];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + n);
    }
    t[n] = i;
  }
  return t;
}
function Ms(r) {
  let e = /* @__PURE__ */ Object.create(null);
  if (r)
    for (let t in r)
      e[t] = new Ol(r[t]);
  return e;
}
let ci = class Cs {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = Ms(n.attrs), this.defaultAttrs = Ss(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == Ue.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : xs(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, n) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new _e(this, this.computeAttrs(e), b.from(t), B.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, n) {
    return t = b.from(t), this.checkContent(t), new _e(this, this.computeAttrs(e), t, B.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, n) {
    if (e = this.computeAttrs(e), t = b.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(b.empty, !0);
    return s ? new _e(this, e, t.append(s), B.setFrom(n)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type with the given attributes.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let n = 0; n < e.childCount; n++)
      if (!this.allowsMarks(e.child(n).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let n = 0; n < e.length; n++)
      this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t || (t = e.slice(0, n));
    return t ? t.length ? t : B.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let n = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => n[s] = new Cs(s, t, o));
    let i = t.spec.topNode || "doc";
    if (!n[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!n.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in n.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return n;
  }
};
class Ol {
  constructor(e) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default"), this.default = e.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class dn {
  /**
  @internal
  */
  constructor(e, t, n, i) {
    this.name = e, this.rank = t, this.schema = n, this.spec = i, this.attrs = Ms(i.attrs), this.excluded = null;
    let s = Ss(this.attrs);
    this.instance = s ? new B(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new B(this, xs(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let n = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => n[s] = new dn(s, i++, t, o)), n;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Tl {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = _.from(e.nodes), t.marks = _.from(e.marks || {}), this.nodes = ci.compile(this.spec.nodes, this), this.marks = dn.compile(this.spec.marks, this);
    let n = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      s.contentMatch = n[o] || (n[o] = Ue.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.markSet = l == "_" ? null : l ? fi(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : fi(this, o.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, n, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof ci) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, n, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let n = this.nodes.text;
    return new nn(n, n.defaultAttrs, e, B.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return _e.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return B.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function fi(r, e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let i = e[n], s = r.marks[i], o = s;
    if (s)
      t.push(s);
    else
      for (let l in r.marks) {
        let a = r.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[n] + "'");
  }
  return t;
}
class ut {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [], t.forEach((n) => {
      n.tag ? this.tags.push(n) : n.style && this.styles.push(n);
    }), this.normalizeLists = !this.tags.some((n) => {
      if (!/^(ul|ol)\b/.test(n.tag) || !n.node)
        return !1;
      let i = e.nodes[n.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let n = new di(this, t, !1);
    return n.addAll(e, t.from, t.to), n.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let n = new di(this, t, !0);
    return n.addAll(e, t.from, t.to), M.maxOpen(n.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, n) {
    for (let i = n ? this.tags.indexOf(n) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (Dl(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, n, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !n.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function n(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      t.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        n(o = hi(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        n(o = hi(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new ut(e, ut.schemaRules(e)));
  }
}
const ws = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, El = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Os = { ol: !0, ul: !0 }, rn = 1, sn = 2, Dt = 4;
function ui(r, e, t) {
  return e != null ? (e ? rn : 0) | (e === "full" ? sn : 0) : r && r.whitespace == "pre" ? rn | sn : t & ~Dt;
}
class Ut {
  constructor(e, t, n, i, s, o, l) {
    this.type = e, this.attrs = t, this.marks = n, this.pendingMarks = i, this.solid = s, this.options = l, this.content = [], this.activeMarks = B.none, this.stashMarks = [], this.match = o || (l & Dt ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(b.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let n = this.type.contentMatch, i;
        return (i = n.findWrapping(e.type)) ? (this.match = n, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & rn)) {
      let n = this.content[this.content.length - 1], i;
      if (n && n.isText && (i = /[ \t\r\n\u000c]+$/.exec(n.text))) {
        let s = n;
        n.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = b.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(b.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  popFromStashMark(e) {
    for (let t = this.stashMarks.length - 1; t >= 0; t--)
      if (e.eq(this.stashMarks[t]))
        return this.stashMarks.splice(t, 1)[0];
  }
  applyPending(e) {
    for (let t = 0, n = this.pendingMarks; t < n.length; t++) {
      let i = n[t];
      (this.type ? this.type.allowsMarkType(i.type) : Al(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !ws.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class di {
  constructor(e, t, n) {
    this.parser = e, this.options = t, this.isOpen = n, this.open = 0;
    let i = t.topNode, s, o = ui(null, t.preserveWhitespace, 0) | (n ? Dt : 0);
    i ? s = new Ut(i.type, i.attrs, B.none, B.none, !0, t.topMatch || i.type.contentMatch, o) : n ? s = new Ut(null, null, B.none, B.none, !0, null, o) : s = new Ut(e.schema.topNodeType, null, B.none, B.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e) {
    if (e.nodeType == 3)
      this.addTextNode(e);
    else if (e.nodeType == 1) {
      let t = e.getAttribute("style");
      if (!t)
        this.addElement(e);
      else {
        let n = this.readStyles(vl(t));
        if (!n)
          return;
        let [i, s] = n, o = this.top;
        for (let l = 0; l < s.length; l++)
          this.removePendingMark(s[l], o);
        for (let l = 0; l < i.length; l++)
          this.addPendingMark(i[l]);
        this.addElement(e);
        for (let l = 0; l < i.length; l++)
          this.removePendingMark(i[l], o);
        for (let l = 0; l < s.length; l++)
          this.addPendingMark(s[l]);
      }
    }
  }
  addTextNode(e) {
    let t = e.nodeValue, n = this.top;
    if (n.options & sn || n.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
      if (n.options & rn)
        n.options & sn ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
      else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
        let i = n.content[n.content.length - 1], s = e.previousSibling;
        (!i || s && s.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (t = t.slice(1));
      }
      t && this.insertNode(this.parser.schema.text(t)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t) {
    let n = e.nodeName.toLowerCase(), i;
    Os.hasOwnProperty(n) && this.parser.normalizeLists && Nl(e);
    let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
    if (s ? s.ignore : El.hasOwnProperty(n))
      this.findInside(e), this.ignoreFallback(e);
    else if (!s || s.skip || s.closeParent) {
      s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
      let o, l = this.top, a = this.needsBlock;
      if (ws.hasOwnProperty(n))
        l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), o = !0, l.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e);
        return;
      }
      this.addAll(e), o && this.sync(l), this.needsBlock = a;
    } else
      this.addElementByRule(e, s, s.consuming === !1 ? i : void 0);
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`));
  }
  // Called for ignored nodes
  ignoreFallback(e) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"));
  }
  // Run any style parser associated with the node's styles. Either
  // return an array of marks, or null to indicate some of the styles
  // had a rule with `ignore` set.
  readStyles(e) {
    let t = B.none, n = B.none;
    e:
      for (let i = 0; i < e.length; i += 2)
        for (let s = void 0; ; ) {
          let o = this.parser.matchStyle(e[i], e[i + 1], this, s);
          if (!o)
            continue e;
          if (o.ignore)
            return null;
          if (o.clearMark ? this.top.pendingMarks.forEach((l) => {
            o.clearMark(l) && (n = l.addToSet(n));
          }) : t = this.parser.schema.marks[o.mark].create(o.attrs).addToSet(t), o.consuming === !1)
            s = o;
          else
            break;
        }
    return [t, n];
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, n) {
    let i, s, o;
    t.node ? (s = this.parser.schema.nodes[t.node], s.isLeaf ? this.insertNode(s.create(t.attrs)) || this.leafFallback(e) : i = this.enter(s, t.attrs || null, t.preserveWhitespace)) : (o = this.parser.schema.marks[t.mark].create(t.attrs), this.addPendingMark(o));
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (n)
      this.addElement(e, n);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a);
    }
    i && this.sync(l) && this.open--, o && this.removePendingMark(o, l);
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, n) {
    let i = t || 0;
    for (let s = t ? e.childNodes[t] : e.firstChild, o = n == null ? null : e.childNodes[n]; s != o; s = s.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(s);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e) {
    let t, n;
    for (let i = this.open; i >= 0; i--) {
      let s = this.nodes[i], o = s.findWrapping(e);
      if (o && (!t || t.length > o.length) && (t = o, n = s, !o.length) || s.solid)
        break;
    }
    if (!t)
      return !1;
    this.sync(n);
    for (let i = 0; i < t.length; i++)
      this.enterInner(t[i], null, !1);
    return !0;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let t = this.textblockFromContext();
      t && this.enterInner(t);
    }
    if (this.findPlace(e)) {
      this.closeExtra();
      let t = this.top;
      t.applyPending(e.type), t.match && (t.match = t.match.matchType(e.type));
      let n = t.activeMarks;
      for (let i = 0; i < e.marks.length; i++)
        (!t.type || t.type.allowsMarkType(e.marks[i].type)) && (n = e.marks[i].addToSet(n));
      return t.content.push(e.mark(n)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, n) {
    let i = this.findPlace(e.create(t));
    return i && this.enterInner(e, t, !0, n), i;
  }
  // Open a node of the given type
  enterInner(e, t = null, n = !1, i) {
    this.closeExtra();
    let s = this.top;
    s.applyPending(e), s.match = s.match && s.match.matchType(e);
    let o = ui(e, i, s.options);
    s.options & Dt && s.content.length == 0 && (o |= Dt), this.nodes.push(new Ut(e, t, s.activeMarks, s.pendingMarks, n, null, o)), this.open++;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--)
      if (this.nodes[t] == e)
        return this.open = t, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let n = this.nodes[t].content;
      for (let i = n.length - 1; i >= 0; i--)
        e += n[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, n) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (n ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), n = this.options.context, i = !this.isOpen && (!n || n.parent.type == this.nodes[0].type), s = -(n ? n.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let f = a > 0 || a == 0 && i ? this.nodes[a].type : n && a >= s ? n.node(a - s).type : null;
          if (!f || f.name != c && f.groups.indexOf(c) == -1)
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (n && n.isTextblock && n.defaultAttrs)
          return n;
      }
    for (let t in this.parser.schema.nodes) {
      let n = this.parser.schema.nodes[t];
      if (n.isTextblock && n.defaultAttrs)
        return n;
    }
  }
  addPendingMark(e) {
    let t = Rl(e, this.top.pendingMarks);
    t && this.top.stashMarks.push(t), this.top.pendingMarks = e.addToSet(this.top.pendingMarks);
  }
  removePendingMark(e, t) {
    for (let n = this.open; n >= 0; n--) {
      let i = this.nodes[n];
      if (i.pendingMarks.lastIndexOf(e) > -1)
        i.pendingMarks = e.removeFromSet(i.pendingMarks);
      else {
        i.activeMarks = e.removeFromSet(i.activeMarks);
        let o = i.popFromStashMark(e);
        o && i.type && i.type.allowsMarkType(o.type) && (i.activeMarks = o.addToSet(i.activeMarks));
      }
      if (i == t)
        break;
    }
  }
}
function Nl(r) {
  for (let e = r.firstChild, t = null; e; e = e.nextSibling) {
    let n = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    n && Os.hasOwnProperty(n) && t ? (t.appendChild(e), e = t) : n == "li" ? t = e : n && (t = null);
  }
}
function Dl(r, e) {
  return (r.matches || r.msMatchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector).call(r, e);
}
function vl(r) {
  let e = /\s*([\w-]+)\s*:\s*([^;]+)/g, t, n = [];
  for (; t = e.exec(r); )
    n.push(t[1], t[2].trim());
  return n;
}
function hi(r) {
  let e = {};
  for (let t in r)
    e[t] = r[t];
  return e;
}
function Al(r, e) {
  let t = e.schema.nodes;
  for (let n in t) {
    let i = t[n];
    if (!i.allowsMarkType(r))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: f } = l.edge(a);
        if (c == e || s.indexOf(f) < 0 && o(f))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
function Rl(r, e) {
  for (let t = 0; t < e.length; t++)
    if (r.eq(e[t]))
      return e[t];
}
class me {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, n) {
    n || (n = Bn(t).createDocumentFragment());
    let i = n, s = [];
    return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < s.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], f = this.serializeMark(c, o.isInline, t);
          f && (s.push([c, i]), i.appendChild(f.dom), i = f.contentDOM || f.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, t));
    }), n;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: n, contentDOM: i } = me.renderSpec(Bn(t), this.nodes[e.type.name](e));
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return n;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let n = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(n), n = s.dom);
    }
    return n;
  }
  /**
  @internal
  */
  serializeMark(e, t, n = {}) {
    let i = this.marks[e.type.name];
    return i && me.renderSpec(Bn(n), i(e, t));
  }
  /**
  Render an [output spec](https://prosemirror.net/docs/ref/#model.DOMOutputSpec) to a DOM node. If
  the spec has a hole (zero) in it, `contentDOM` will point at the
  node with the hole.
  */
  static renderSpec(e, t, n = null) {
    if (typeof t == "string")
      return { dom: e.createTextNode(t) };
    if (t.nodeType != null)
      return { dom: t };
    if (t.dom && t.dom.nodeType != null)
      return t;
    let i = t[0], s = i.indexOf(" ");
    s > 0 && (n = i.slice(0, s), i = i.slice(s + 1));
    let o, l = n ? e.createElementNS(n, i) : e.createElement(i), a = t[1], c = 1;
    if (a && typeof a == "object" && a.nodeType == null && !Array.isArray(a)) {
      c = 2;
      for (let f in a)
        if (a[f] != null) {
          let u = f.indexOf(" ");
          u > 0 ? l.setAttributeNS(f.slice(0, u), f.slice(u + 1), a[f]) : l.setAttribute(f, a[f]);
        }
    }
    for (let f = c; f < t.length; f++) {
      let u = t[f];
      if (u === 0) {
        if (f < t.length - 1 || f > c)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom: l, contentDOM: l };
      } else {
        let { dom: d, contentDOM: h } = me.renderSpec(e, u, n);
        if (l.appendChild(d), h) {
          if (o)
            throw new RangeError("Multiple content holes");
          o = h;
        }
      }
    }
    return { dom: l, contentDOM: o };
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new me(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = pi(e.nodes);
    return t.text || (t.text = (n) => n.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return pi(e.marks);
  }
}
function pi(r) {
  let e = {};
  for (let t in r) {
    let n = r[t].spec.toDOM;
    n && (e[t] = n);
  }
  return e;
}
function Bn(r) {
  return r.document || window.document;
}
const Ts = 65535, Es = Math.pow(2, 16);
function Il(r, e) {
  return r + e * Es;
}
function mi(r) {
  return r & Ts;
}
function Pl(r) {
  return (r - (r & Ts)) / Es;
}
const Ns = 1, Ds = 2, Gt = 4, vs = 8;
class ir {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.pos = e, this.delInfo = t, this.recover = n;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & vs) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Ns | Gt)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Ds | Gt)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Gt) > 0;
  }
}
class ae {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && ae.empty)
      return ae.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, n = mi(e);
    if (!this.inverted)
      for (let i = 0; i < n; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[n * 3] + t + Pl(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, n) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], f = this.ranges[l + o], u = a + c;
      if (e <= u) {
        let d = c ? e == a ? -1 : e == u ? 1 : t : t, h = a + i + (d < 0 ? 0 : f);
        if (n)
          return h;
        let m = e == (t < 0 ? a : u) ? null : Il(l / 3, e - a), g = e == a ? Ds : e == u ? Ns : Gt;
        return (t < 0 ? e != a : e != u) && (g |= vs), new ir(h, g, m);
      }
      i += f - c;
    }
    return n ? e + i : new ir(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let n = 0, i = mi(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? n : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], f = a + c;
      if (e <= f && l == i * 3)
        return !0;
      n += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], f = this.ranges[i + n];
      e(l, l + c, a, a + f), s += f - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new ae(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? ae.empty : new ae(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
ae.empty = new ae([]);
class vt {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], t, n = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = n, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new vt(this.maps, this.mirror, e, t);
  }
  /**
  @internal
  */
  copy() {
    return new vt(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, n = this.maps.length; t < e.maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t], i != null && i < t ? n + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, n = this.maps.length + e.maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), i != null && i > t ? n - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new vt();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let n = this.from; n < this.to; n++)
      e = this.maps[n].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, n) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this.maps[s], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(s);
        if (a != null && a > s && a < this.to) {
          s = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return n ? e : new ir(e, i, null);
  }
}
const Fn = /* @__PURE__ */ Object.create(null);
class ne {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return ae.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let n = Fn[t.stepType];
    if (!n)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return n.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in Fn)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Fn[e] = t, t.prototype.jsonID = e, t;
  }
}
class j {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new j(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new j(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, n, i) {
    try {
      return j.ok(e.replace(t, n, i));
    } catch (s) {
      if (s instanceof Qt)
        return j.fail(s.message);
      throw s;
    }
  }
}
function br(r, e, t) {
  let n = [];
  for (let i = 0; i < r.childCount; i++) {
    let s = r.child(i);
    s.content.size && (s = s.copy(br(s.content, e, s))), s.isInline && (s = e(s, t, i)), n.push(s);
  }
  return b.fromArray(n);
}
class Ee extends ne {
  /**
  Create a mark step.
  */
  constructor(e, t, n) {
    super(), this.from = e, this.to = t, this.mark = n;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), n = e.resolve(this.from), i = n.node(n.sharedDepth(this.to)), s = new M(br(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return j.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new ge(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1);
    return t.deleted && n.deleted || t.pos >= n.pos ? null : new Ee(t.pos, n.pos, this.mark);
  }
  merge(e) {
    return e instanceof Ee && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ee(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Ee(t.from, t.to, e.markFromJSON(t.mark));
  }
}
ne.jsonID("addMark", Ee);
class ge extends ne {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, n) {
    super(), this.from = e, this.to = t, this.mark = n;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), n = new M(br(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return j.fromReplace(e, this.from, this.to, n);
  }
  invert() {
    return new Ee(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1);
    return t.deleted && n.deleted || t.pos >= n.pos ? null : new ge(t.pos, n.pos, this.mark);
  }
  merge(e) {
    return e instanceof ge && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ge(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new ge(t.from, t.to, e.markFromJSON(t.mark));
  }
}
ne.jsonID("removeMark", ge);
class Ne extends ne {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return j.fail("No node at mark step's position");
    let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return j.fromReplace(e, this.pos, this.pos + 1, new M(b.from(n), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let n = this.mark.addToSet(t.marks);
      if (n.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(n))
            return new Ne(this.pos, t.marks[i]);
        return new Ne(this.pos, this.mark);
      }
    }
    return new dt(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Ne(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Ne(t.pos, e.markFromJSON(t.mark));
  }
}
ne.jsonID("addNodeMark", Ne);
class dt extends ne {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return j.fail("No node at mark step's position");
    let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return j.fromReplace(e, this.pos, this.pos + 1, new M(b.from(n), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new Ne(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new dt(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new dt(t.pos, e.markFromJSON(t.mark));
  }
}
ne.jsonID("removeNodeMark", dt);
class U extends ne {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, n, i = !1) {
    super(), this.from = e, this.to = t, this.slice = n, this.structure = i;
  }
  apply(e) {
    return this.structure && sr(e, this.from, this.to) ? j.fail("Structure replace would overwrite content") : j.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new ae([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new U(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1);
    return t.deletedAcross && n.deletedAcross ? null : new U(t.pos, Math.max(t.pos, n.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof U) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? M.empty : new M(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new U(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? M.empty : new M(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new U(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new U(t.from, t.to, M.fromJSON(e, t.slice), !!t.structure);
  }
}
ne.jsonID("replace", U);
class J extends ne {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, n, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (sr(e, this.from, this.gapFrom) || sr(e, this.gapTo, this.to)))
      return j.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return j.fail("Gap is not a flat range");
    let n = this.slice.insertAt(this.insert, t.content);
    return n ? j.fromReplace(e, this.from, this.to, n) : j.fail("Content does not fit in gap");
  }
  getMap() {
    return new ae([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new J(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1), i = e.map(this.gapFrom, -1), s = e.map(this.gapTo, 1);
    return t.deletedAcross && n.deletedAcross || i < t.pos || s > n.pos ? null : new J(t.pos, n.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new J(t.from, t.to, t.gapFrom, t.gapTo, M.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
ne.jsonID("replaceAround", J);
function sr(r, e, t) {
  let n = r.resolve(e), i = t - e, s = n.depth;
  for (; i > 0 && s > 0 && n.indexAfter(s) == n.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = n.node(s).maybeChild(n.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function Bl(r, e, t, n) {
  let i = [], s = [], o, l;
  r.doc.nodesBetween(e, t, (a, c, f) => {
    if (!a.isInline)
      return;
    let u = a.marks;
    if (!n.isInSet(u) && f.type.allowsMarkType(n.type)) {
      let d = Math.max(c, e), h = Math.min(c + a.nodeSize, t), m = n.addToSet(u);
      for (let g = 0; g < u.length; g++)
        u[g].isInSet(m) || (o && o.to == d && o.mark.eq(u[g]) ? o.to = h : i.push(o = new ge(d, h, u[g])));
      l && l.to == d ? l.to = h : s.push(l = new Ee(d, h, n));
    }
  }), i.forEach((a) => r.step(a)), s.forEach((a) => r.step(a));
}
function Fl(r, e, t, n) {
  let i = [], s = 0;
  r.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (n instanceof dn) {
      let c = o.marks, f;
      for (; f = n.isInSet(c); )
        (a || (a = [])).push(f), c = f.removeFromSet(c);
    } else
      n ? n.isInSet(o.marks) && (a = [n]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let f = 0; f < a.length; f++) {
        let u = a[f], d;
        for (let h = 0; h < i.length; h++) {
          let m = i[h];
          m.step == s - 1 && u.eq(i[h].style) && (d = m);
        }
        d ? (d.to = c, d.step = s) : i.push({ style: u, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => r.step(new ge(o.from, o.to, o.style)));
}
function zl(r, e, t, n = t.contentMatch) {
  let i = r.doc.nodeAt(e), s = [], o = e + 1;
  for (let l = 0; l < i.childCount; l++) {
    let a = i.child(l), c = o + a.nodeSize, f = n.matchType(a.type);
    if (!f)
      s.push(new U(o, c, M.empty));
    else {
      n = f;
      for (let u = 0; u < a.marks.length; u++)
        t.allowsMarkType(a.marks[u].type) || r.step(new ge(o, c, a.marks[u]));
    }
    o = c;
  }
  if (!n.validEnd) {
    let l = n.fillBefore(b.empty, !0);
    r.replace(o, o, new M(l, 0, 0));
  }
  for (let l = s.length - 1; l >= 0; l--)
    r.step(s[l]);
}
function Vl(r, e, t) {
  return (e == 0 || r.canReplace(e, r.childCount)) && (t == r.childCount || r.canReplace(0, t));
}
function kt(r) {
  let t = r.parent.content.cutByIndex(r.startIndex, r.endIndex);
  for (let n = r.depth; ; --n) {
    let i = r.$from.node(n), s = r.$from.index(n), o = r.$to.indexAfter(n);
    if (n < r.depth && i.canReplace(s, o, t))
      return n;
    if (n == 0 || i.type.spec.isolating || !Vl(i, s, o))
      break;
  }
  return null;
}
function Ll(r, e, t) {
  let { $from: n, $to: i, depth: s } = e, o = n.before(s + 1), l = i.after(s + 1), a = o, c = l, f = b.empty, u = 0;
  for (let m = s, g = !1; m > t; m--)
    g || n.index(m) > 0 ? (g = !0, f = b.from(n.node(m).copy(f)), u++) : a--;
  let d = b.empty, h = 0;
  for (let m = s, g = !1; m > t; m--)
    g || i.after(m + 1) < i.end(m) ? (g = !0, d = b.from(i.node(m).copy(d)), h++) : c++;
  r.step(new J(a, c, o, l, new M(f.append(d), u, h), f.size - u, !0));
}
function As(r, e, t = null, n = r) {
  let i = $l(r, e), s = i && jl(n, e);
  return s ? i.map(gi).concat({ type: e, attrs: t }).concat(s.map(gi)) : null;
}
function gi(r) {
  return { type: r, attrs: null };
}
function $l(r, e) {
  let { parent: t, startIndex: n, endIndex: i } = r, s = t.contentMatchAt(n).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(n, i, o) ? s : null;
}
function jl(r, e) {
  let { parent: t, startIndex: n, endIndex: i } = r, s = t.child(n), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = n; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function Wl(r, e, t) {
  let n = b.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (n.size) {
      let l = t[o].type.contentMatch.matchFragment(n);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    n = b.from(t[o].type.create(t[o].attrs, n));
  }
  let i = e.start, s = e.end;
  r.step(new J(i, s, i, s, new M(n, 0, 0), t.length, !0));
}
function Jl(r, e, t, n, i) {
  if (!n.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = r.steps.length;
  r.doc.nodesBetween(e, t, (o, l) => {
    if (o.isTextblock && !o.hasMarkup(n, i) && Hl(r.doc, r.mapping.slice(s).map(l), n)) {
      r.clearIncompatible(r.mapping.slice(s).map(l, 1), n);
      let a = r.mapping.slice(s), c = a.map(l, 1), f = a.map(l + o.nodeSize, 1);
      return r.step(new J(c, f, c + 1, f - 1, new M(b.from(n.create(i, null, o.marks)), 0, 0), 1, !0)), !1;
    }
  });
}
function Hl(r, e, t) {
  let n = r.resolve(e), i = n.index();
  return n.parent.canReplaceWith(i, i + 1, t);
}
function _l(r, e, t, n, i) {
  let s = r.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(n, null, i || s.marks);
  if (s.isLeaf)
    return r.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  r.step(new J(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new M(b.from(o), 0, 0), 1, !0));
}
function at(r, e, t = 1, n) {
  let i = r.resolve(e), s = i.depth - t, o = n && n[n.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, f = t - 2; c > s; c--, f--) {
    let u = i.node(c), d = i.index(c);
    if (u.type.spec.isolating)
      return !1;
    let h = u.content.cutByIndex(d, u.childCount), m = n && n[f] || u;
    if (m != u && (h = h.replaceChild(0, m.type.create(m.attrs))), !u.canReplace(d + 1, u.childCount) || !m.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(s), a = n && n[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function ql(r, e, t = 1, n) {
  let i = r.doc.resolve(e), s = b.empty, o = b.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    s = b.from(i.node(l).copy(s));
    let f = n && n[c];
    o = b.from(f ? f.type.create(f.attrs, o) : i.node(l).copy(o));
  }
  r.step(new U(e, e, new M(s.append(o), t, t), !0));
}
function Ze(r, e) {
  let t = r.resolve(e), n = t.index();
  return Rs(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(n, n + 1);
}
function Rs(r, e) {
  return !!(r && e && !r.isLeaf && r.canAppend(e));
}
function Is(r, e, t = -1) {
  let n = r.resolve(e);
  for (let i = n.depth; ; i--) {
    let s, o, l = n.index(i);
    if (i == n.depth ? (s = n.nodeBefore, o = n.nodeAfter) : t > 0 ? (s = n.node(i + 1), l++, o = n.node(i).maybeChild(l)) : (s = n.node(i).maybeChild(l - 1), o = n.node(i + 1)), s && !s.isTextblock && Rs(s, o) && n.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? n.before(i) : n.after(i);
  }
}
function Kl(r, e, t) {
  let n = new U(e - t, e + t, M.empty, !0);
  r.step(n);
}
function Ul(r, e, t) {
  let n = r.resolve(e);
  if (n.parent.canReplaceWith(n.index(), n.index(), t))
    return e;
  if (n.parentOffset == 0)
    for (let i = n.depth - 1; i >= 0; i--) {
      let s = n.index(i);
      if (n.node(i).canReplaceWith(s, s, t))
        return n.before(i + 1);
      if (s > 0)
        return null;
    }
  if (n.parentOffset == n.parent.content.size)
    for (let i = n.depth - 1; i >= 0; i--) {
      let s = n.indexAfter(i);
      if (n.node(i).canReplaceWith(s, s, t))
        return n.after(i + 1);
      if (s < n.node(i).childCount)
        return null;
    }
  return null;
}
function Yl(r, e, t) {
  let n = r.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let s = 0; s < t.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
    for (let o = n.depth; o >= 0; o--) {
      let l = o == n.depth ? 0 : n.pos <= (n.start(o + 1) + n.end(o + 1)) / 2 ? -1 : 1, a = n.index(o) + (l > 0 ? 1 : 0), c = n.node(o), f = !1;
      if (s == 1)
        f = c.canReplace(a, a, i);
      else {
        let u = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        f = u && c.canReplaceWith(a, a, u[0]);
      }
      if (f)
        return l == 0 ? n.pos : l < 0 ? n.before(o + 1) : n.after(o + 1);
    }
  return null;
}
function Sr(r, e, t = e, n = M.empty) {
  if (e == t && !n.size)
    return null;
  let i = r.resolve(e), s = r.resolve(t);
  return Ps(i, s, n) ? new U(e, t, n) : new Gl(i, s, n).fit();
}
function Ps(r, e, t) {
  return !t.openStart && !t.openEnd && r.start() == e.start() && r.parent.canReplace(r.index(), e.index(), t.content);
}
class Gl {
  constructor(e, t, n) {
    this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = b.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = b.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, n = this.$from, i = this.close(e < 0 ? this.$to : n.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = n.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new M(s, o, l);
    return e > -1 ? new J(n.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || n.pos != this.$to.pos ? new U(n.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, n = 0, i = this.unplaced.openEnd; n < e; n++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= n) {
        e = n;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
        let i, s = null;
        n ? (s = zn(this.unplaced.content, n - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], f, u = null;
          if (t == 1 && (o ? c.matchType(o.type) || (u = c.fillBefore(b.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: n, frontierDepth: l, parent: s, inject: u };
          if (t == 2 && o && (f = c.findWrapping(o.type)))
            return { sliceDepth: n, frontierDepth: l, parent: s, wrap: f };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced, i = zn(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new M(e, t + 1, Math.max(n, i.size + t >= e.size - n ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced, i = zn(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new M(Ot(e, t - 1, 1), t - 1, s ? t - 1 : n);
    } else
      this.unplaced = new M(Ot(e, t, 1), t, n);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: n, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let g = 0; g < s.length; g++)
        this.openFrontierNode(s[g]);
    let o = this.unplaced, l = n ? n.content : o.content, a = o.openStart - e, c = 0, f = [], { match: u, type: d } = this.frontier[t];
    if (i) {
      for (let g = 0; g < i.childCount; g++)
        f.push(i.child(g));
      u = u.matchFragment(i);
    }
    let h = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let g = l.child(c), y = u.matchType(g.type);
      if (!y)
        break;
      c++, (c > 1 || a == 0 || g.content.size) && (u = y, f.push(Bs(g.mark(d.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let m = c == l.childCount;
    m || (h = -1), this.placed = Tt(this.placed, t, b.from(f)), this.frontier[t].match = u, m && h < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, y = l; g < h; g++) {
      let S = y.lastChild;
      this.frontier.push({ type: S.type, match: S.contentMatchAt(S.childCount) }), y = S.content;
    }
    this.unplaced = m ? e == 0 ? M.empty : new M(Ot(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new M(Ot(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !Vn(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: n } = this.$to, i = this.$to.after(n);
    for (; n > 1 && i == this.$to.end(--n); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: n, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = Vn(e, t, i, n, s);
        if (o) {
          for (let l = t - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], f = Vn(e, l, c, a, !0);
            if (!f || f.childCount)
              continue e;
          }
          return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Tt(this.placed, t.depth, t.fit)), e = t.move;
    for (let n = t.depth + 1; n <= e.depth; n++) {
      let i = e.node(n), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(n));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, n) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Tt(this.placed, this.depth, b.from(e.create(t, n))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(b.empty, !0);
    t.childCount && (this.placed = Tt(this.placed, this.frontier.length, t));
  }
}
function Ot(r, e, t) {
  return e == 0 ? r.cutByIndex(t, r.childCount) : r.replaceChild(0, r.firstChild.copy(Ot(r.firstChild.content, e - 1, t)));
}
function Tt(r, e, t) {
  return e == 0 ? r.append(t) : r.replaceChild(r.childCount - 1, r.lastChild.copy(Tt(r.lastChild.content, e - 1, t)));
}
function zn(r, e) {
  for (let t = 0; t < e; t++)
    r = r.firstChild.content;
  return r;
}
function Bs(r, e, t) {
  if (e <= 0)
    return r;
  let n = r.content;
  return e > 1 && (n = n.replaceChild(0, Bs(n.firstChild, e - 1, n.childCount == 1 ? t - 1 : 0))), e > 0 && (n = r.type.contentMatch.fillBefore(n).append(n), t <= 0 && (n = n.append(r.type.contentMatch.matchFragment(n).fillBefore(b.empty, !0)))), r.copy(n);
}
function Vn(r, e, t, n, i) {
  let s = r.node(e), o = i ? r.indexAfter(e) : r.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = n.fillBefore(s.content, !0, o);
  return l && !Xl(t, s.content, o) ? l : null;
}
function Xl(r, e, t) {
  for (let n = t; n < e.childCount; n++)
    if (!r.allowsMarks(e.child(n).marks))
      return !0;
  return !1;
}
function Zl(r) {
  return r.spec.defining || r.spec.definingForContent;
}
function Ql(r, e, t, n) {
  if (!n.size)
    return r.deleteRange(e, t);
  let i = r.doc.resolve(e), s = r.doc.resolve(t);
  if (Ps(i, s, n))
    return r.step(new U(e, t, n));
  let o = zs(i, r.doc.resolve(t));
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let d = i.depth, h = i.pos - 1; d > 0; d--, h--) {
    let m = i.node(d).type.spec;
    if (m.defining || m.definingAsContext || m.isolating)
      break;
    o.indexOf(d) > -1 ? l = d : i.before(d) == h && o.splice(1, 0, -d);
  }
  let a = o.indexOf(l), c = [], f = n.openStart;
  for (let d = n.content, h = 0; ; h++) {
    let m = d.firstChild;
    if (c.push(m), h == n.openStart)
      break;
    d = m.content;
  }
  for (let d = f - 1; d >= 0; d--) {
    let h = c[d].type, m = Zl(h);
    if (m && i.node(a).type != h)
      f = d;
    else if (m || !h.isTextblock)
      break;
  }
  for (let d = n.openStart; d >= 0; d--) {
    let h = (d + f + 1) % (n.openStart + 1), m = c[h];
    if (m)
      for (let g = 0; g < o.length; g++) {
        let y = o[(g + a) % o.length], S = !0;
        y < 0 && (S = !1, y = -y);
        let w = i.node(y - 1), P = i.index(y - 1);
        if (w.canReplaceWith(P, P, m.type, m.marks))
          return r.replace(i.before(y), S ? s.after(y) : t, new M(Fs(n.content, 0, n.openStart, h), h, n.openEnd));
      }
  }
  let u = r.steps.length;
  for (let d = o.length - 1; d >= 0 && (r.replace(e, t, n), !(r.steps.length > u)); d--) {
    let h = o[d];
    h < 0 || (e = i.before(h), t = s.after(h));
  }
}
function Fs(r, e, t, n, i) {
  if (e < t) {
    let s = r.firstChild;
    r = r.replaceChild(0, s.copy(Fs(s.content, e + 1, t, n, s)));
  }
  if (e > n) {
    let s = i.contentMatchAt(0), o = s.fillBefore(r).append(r);
    r = o.append(s.matchFragment(o).fillBefore(b.empty, !0));
  }
  return r;
}
function ea(r, e, t, n) {
  if (!n.isInline && e == t && r.doc.resolve(e).parent.content.size) {
    let i = Ul(r.doc, e, n.type);
    i != null && (e = t = i);
  }
  r.replaceRange(e, t, new M(b.from(n), 0, 0));
}
function ta(r, e, t) {
  let n = r.doc.resolve(e), i = r.doc.resolve(t), s = zs(n, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || n.node(l).type.contentMatch.validEnd)
      return r.delete(n.start(l), i.end(l));
    if (l > 0 && (a || n.node(l - 1).canReplace(n.index(l - 1), i.indexAfter(l - 1))))
      return r.delete(n.before(l), i.after(l));
  }
  for (let o = 1; o <= n.depth && o <= i.depth; o++)
    if (e - n.start(o) == n.depth - o && t > n.end(o) && i.end(o) - t != i.depth - o)
      return r.delete(n.before(o), t);
  r.delete(e, t);
}
function zs(r, e) {
  let t = [], n = Math.min(r.depth, e.depth);
  for (let i = n; i >= 0; i--) {
    let s = r.start(i);
    if (s < r.pos - (r.depth - i) || e.end(i) > e.pos + (e.depth - i) || r.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == r.depth && i == e.depth && r.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
class ct extends ne {
  /**
  Construct an attribute step.
  */
  constructor(e, t, n) {
    super(), this.pos = e, this.attr = t, this.value = n;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return j.fail("No node at attribute step's position");
    let n = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      n[s] = t.attrs[s];
    n[this.attr] = this.value;
    let i = t.type.create(n, null, t.marks);
    return j.fromReplace(e, this.pos, this.pos + 1, new M(b.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return ae.empty;
  }
  invert(e) {
    return new ct(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new ct(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new ct(t.pos, t.attr, t.value);
  }
}
ne.jsonID("attr", ct);
let ht = class extends Error {
};
ht = function r(e) {
  let t = Error.call(this, e);
  return t.__proto__ = r.prototype, t;
};
ht.prototype = Object.create(Error.prototype);
ht.prototype.constructor = ht;
ht.prototype.name = "TransformError";
class na {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new vt();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new ht(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, n = M.empty) {
    let i = Sr(this.doc, e, t, n);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, n) {
    return this.replace(e, t, new M(b.from(n), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, M.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, n) {
    return Ql(this, e, t, n), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, n) {
    return ea(this, e, t, n), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return ta(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Ll(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return Kl(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return Wl(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, n, i = null) {
    return Jl(this, e, t, n, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, n = null, i) {
    return _l(this, e, t, n, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  */
  setNodeAttribute(e, t, n) {
    return this.step(new ct(e, t, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new Ne(e, t)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    if (!(t instanceof B)) {
      let n = this.doc.nodeAt(e);
      if (!n)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(n.marks), !t)
        return this;
    }
    return this.step(new dt(e, t)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, t = 1, n) {
    return ql(this, e, t, n), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, n) {
    return Bl(this, e, t, n), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, n) {
    return Fl(this, e, t, n), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, n) {
    return zl(this, e, t, n), this;
  }
}
const Ln = /* @__PURE__ */ Object.create(null);
class v {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, n) {
    this.$anchor = e, this.$head = t, this.ranges = n || [new ra(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = M.empty) {
    let n = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = n, n = n.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], f = e.mapping.slice(s);
      e.replaceRange(f.map(a.pos), f.map(c.pos), l ? M.empty : t), l == 0 && bi(e, s, (n ? n.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let n = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = e.mapping.slice(n), c = a.map(o.pos), f = a.map(l.pos);
      s ? e.deleteRange(c, f) : (e.replaceRangeWith(c, f, t), bi(e, n, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, n = !1) {
    let i = e.parent.inlineContent ? new R(e) : rt(e.node(0), e.parent, e.pos, e.index(), t, n);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? rt(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, n) : rt(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, n);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new ue(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return rt(e, e, 0, 0, 1) || new ue(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return rt(e, e, e.content.size, e.childCount, -1) || new ue(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let n = Ln[t.type];
    if (!n)
      throw new RangeError(`No selection type ${t.type} defined`);
    return n.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in Ln)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Ln[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return R.between(this.$anchor, this.$head).getBookmark();
  }
}
v.prototype.visible = !0;
class ra {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let yi = !1;
function ki(r) {
  !yi && !r.parent.inlineContent && (yi = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + r.parent.type.name + ")"));
}
class R extends v {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    ki(e), ki(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let n = e.resolve(t.map(this.head));
    if (!n.parent.inlineContent)
      return v.near(n);
    let i = e.resolve(t.map(this.anchor));
    return new R(i.parent.inlineContent ? i : n, n);
  }
  replace(e, t = M.empty) {
    if (super.replace(e, t), t == M.empty) {
      let n = this.$from.marksAcross(this.$to);
      n && e.ensureMarks(n);
    }
  }
  eq(e) {
    return e instanceof R && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new hn(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new R(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, n = t) {
    let i = e.resolve(t);
    return new this(i, n == t ? i : e.resolve(n));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, n) {
    let i = e.pos - t.pos;
    if ((!n || i) && (n = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = v.findFrom(t, n, !0) || v.findFrom(t, -n, !0);
      if (s)
        t = s.$head;
      else
        return v.near(t, n);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (v.findFrom(e, -n, !0) || v.findFrom(e, n, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new R(e, t);
  }
}
v.jsonID("text", R);
class hn {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new hn(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return R.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class O extends v {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, n = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, n), this.node = t;
  }
  map(e, t) {
    let { deleted: n, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return n ? v.near(s) : new O(s);
  }
  content() {
    return new M(b.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof O && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new xr(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new O(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new O(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
O.prototype.visible = !1;
v.jsonID("node", O);
class xr {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: n } = e.mapResult(this.anchor);
    return t ? new hn(n, n) : new xr(n);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), n = t.nodeAfter;
    return n && O.isSelectable(n) ? new O(t) : v.near(t);
  }
}
class ue extends v {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = M.empty) {
    if (t == M.empty) {
      e.delete(0, e.doc.content.size);
      let n = v.atStart(e.doc);
      n.eq(e.selection) || e.setSelection(n);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new ue(e);
  }
  map(e) {
    return new ue(e);
  }
  eq(e) {
    return e instanceof ue;
  }
  getBookmark() {
    return ia;
  }
}
v.jsonID("all", ue);
const ia = {
  map() {
    return this;
  },
  resolve(r) {
    return new ue(r);
  }
};
function rt(r, e, t, n, i, s = !1) {
  if (e.inlineContent)
    return R.create(r, t);
  for (let o = n - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && O.isSelectable(l))
        return O.create(r, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = rt(r, l, t + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function bi(r, e, t) {
  let n = r.steps.length - 1;
  if (n < e)
    return;
  let i = r.steps[n];
  if (!(i instanceof U || i instanceof J))
    return;
  let s = r.mapping.maps[n], o;
  s.forEach((l, a, c, f) => {
    o == null && (o = f);
  }), r.setSelection(v.near(r.doc.resolve(o), t));
}
const Si = 1, Yt = 2, xi = 4;
class sa extends na {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Si) & ~Yt, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & Si) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= Yt, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return B.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & Yt) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~Yt, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let n = this.selection;
    return t && (e = e.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || B.none))), n.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, n) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (n == null && (n = t), n = n ?? t, !e)
        return this.deleteRange(t, n);
      let s = this.storedMarks;
      if (!s) {
        let o = this.doc.resolve(t);
        s = n == t ? o.marks() : o.marksAcross(this.doc.resolve(n));
      }
      return this.replaceRangeWith(t, n, i.text(e, s)), this.selection.empty || this.setSelection(v.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= xi, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & xi) > 0;
  }
}
function Mi(r, e) {
  return !e || !r ? r : r.bind(e);
}
class Et {
  constructor(e, t, n) {
    this.name = e, this.init = Mi(t.init, n), this.apply = Mi(t.apply, n);
  }
}
const oa = [
  new Et("doc", {
    init(r) {
      return r.doc || r.schema.topNodeType.createAndFill();
    },
    apply(r) {
      return r.doc;
    }
  }),
  new Et("selection", {
    init(r, e) {
      return r.selection || v.atStart(e.doc);
    },
    apply(r) {
      return r.selection;
    }
  }),
  new Et("storedMarks", {
    init(r) {
      return r.storedMarks || null;
    },
    apply(r, e, t, n) {
      return n.selection.$cursor ? r.storedMarks : null;
    }
  }),
  new Et("scrollToSelection", {
    init() {
      return 0;
    },
    apply(r, e) {
      return r.scrolledIntoView ? e + 1 : e;
    }
  })
];
class $n {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = oa.slice(), t && t.forEach((n) => {
      if (this.pluginsByKey[n.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + n.key + ")");
      this.plugins.push(n), this.pluginsByKey[n.key] = n, n.spec.state && this.fields.push(new Et(n.key, n.spec.state, n));
    });
  }
}
class st {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let n = 0; n < this.config.plugins.length; n++)
      if (n != t) {
        let i = this.config.plugins[n];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], n = this.applyInner(e), i = null;
    for (; ; ) {
      let s = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let a = i ? i[o].n : 0, c = i ? i[o].state : this, f = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, n);
          if (f && n.filterTransaction(f, o)) {
            if (f.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let u = 0; u < this.config.plugins.length; u++)
                i.push(u < o ? { state: n, n: t.length } : { state: this, n: 0 });
            }
            t.push(f), n = n.applyInner(f), s = !0;
          }
          i && (i[o] = { state: n, n: t.length });
        }
      }
      if (!s)
        return { state: n, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new st(this.config), n = this.config.fields;
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      t[s.name] = s.apply(e, this[s.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new sa(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new $n(e.doc ? e.doc.type.schema : e.schema, e.plugins), n = new st(t);
    for (let i = 0; i < t.fields.length; i++)
      n[t.fields[i].name] = t.fields[i].init(e, n);
    return n;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new $n(this.schema, e.plugins), n = t.fields, i = new st(t);
    for (let s = 0; s < n.length; s++) {
      let o = n[s].name;
      i[o] = this.hasOwnProperty(o) ? this[o] : n[s].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((n) => n.toJSON())), e && typeof e == "object")
      for (let n in e) {
        if (n == "doc" || n == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[n], s = i.spec.state;
        s && s.toJSON && (t[n] = s.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, n) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new $n(e.schema, e.plugins), s = new st(i);
    return i.fields.forEach((o) => {
      if (o.name == "doc")
        s.doc = _e.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        s.selection = v.fromJSON(s.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (n)
          for (let l in n) {
            let a = n[l], c = a.spec.state;
            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              s[o.name] = c.fromJSON.call(a, e, t[l], s);
              return;
            }
          }
        s[o.name] = o.init(e, s);
      }
    }), s;
  }
}
function Vs(r, e, t) {
  for (let n in r) {
    let i = r[n];
    i instanceof Function ? i = i.bind(e) : n == "handleDOMEvents" && (i = Vs(i, e, {})), t[n] = i;
  }
  return t;
}
class Be {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Vs(e.props, this, this.props), this.key = e.key ? e.key.key : Ls("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const jn = /* @__PURE__ */ Object.create(null);
function Ls(r) {
  return r in jn ? r + "$" + ++jn[r] : (jn[r] = 0, r + "$");
}
class $t {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Ls(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ie = function(r) {
  for (var e = 0; ; e++)
    if (r = r.previousSibling, !r)
      return e;
}, Pt = function(r) {
  let e = r.assignedSlot || r.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Ci = null;
const Se = function(r, e, t) {
  let n = Ci || (Ci = document.createRange());
  return n.setEnd(r, t ?? r.nodeValue.length), n.setStart(r, e || 0), n;
}, Ye = function(r, e, t, n) {
  return t && (wi(r, e, t, n, -1) || wi(r, e, t, n, 1));
}, la = /^(img|br|input|textarea|hr)$/i;
function wi(r, e, t, n, i) {
  for (; ; ) {
    if (r == t && e == n)
      return !0;
    if (e == (i < 0 ? 0 : pe(r))) {
      let s = r.parentNode;
      if (!s || s.nodeType != 1 || ca(r) || la.test(r.nodeName) || r.contentEditable == "false")
        return !1;
      e = ie(r) + (i < 0 ? 0 : 1), r = s;
    } else if (r.nodeType == 1) {
      if (r = r.childNodes[e + (i < 0 ? -1 : 0)], r.contentEditable == "false")
        return !1;
      e = i < 0 ? pe(r) : 0;
    } else
      return !1;
  }
}
function pe(r) {
  return r.nodeType == 3 ? r.nodeValue.length : r.childNodes.length;
}
function aa(r, e, t) {
  for (let n = e == 0, i = e == pe(r); n || i; ) {
    if (r == t)
      return !0;
    let s = ie(r);
    if (r = r.parentNode, !r)
      return !1;
    n = n && s == 0, i = i && s == pe(r);
  }
}
function ca(r) {
  let e;
  for (let t = r; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == r || e.contentDOM == r);
}
const pn = function(r) {
  return r.focusNode && Ye(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset);
};
function Le(r, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = r, t.key = t.code = e, t;
}
function fa(r) {
  let e = r.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Re = typeof navigator < "u" ? navigator : null, Oi = typeof document < "u" ? document : null, Fe = Re && Re.userAgent || "", or = /Edge\/(\d+)/.exec(Fe), $s = /MSIE \d/.exec(Fe), lr = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Fe), te = !!($s || lr || or), ve = $s ? document.documentMode : lr ? +lr[1] : or ? +or[1] : 0, he = !te && /gecko\/(\d+)/i.test(Fe);
he && +(/Firefox\/(\d+)/.exec(Fe) || [0, 0])[1];
const ar = !te && /Chrome\/(\d+)/.exec(Fe), X = !!ar, ua = ar ? +ar[1] : 0, Z = !te && !!Re && /Apple Computer/.test(Re.vendor), pt = Z && (/Mobile\/\w+/.test(Fe) || !!Re && Re.maxTouchPoints > 2), le = pt || (Re ? /Mac/.test(Re.platform) : !1), ce = /Android \d/.test(Fe), mn = !!Oi && "webkitFontSmoothing" in Oi.documentElement.style, da = mn ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function ha(r) {
  return {
    left: 0,
    right: r.documentElement.clientWidth,
    top: 0,
    bottom: r.documentElement.clientHeight
  };
}
function we(r, e) {
  return typeof r == "number" ? r : r[e];
}
function pa(r) {
  let e = r.getBoundingClientRect(), t = e.width / r.offsetWidth || 1, n = e.height / r.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + r.clientWidth * t,
    top: e.top,
    bottom: e.top + r.clientHeight * n
  };
}
function Ti(r, e, t) {
  let n = r.someProp("scrollThreshold") || 0, i = r.someProp("scrollMargin") || 5, s = r.dom.ownerDocument;
  for (let o = t || r.dom; o; o = Pt(o)) {
    if (o.nodeType != 1)
      continue;
    let l = o, a = l == s.body, c = a ? ha(s) : pa(l), f = 0, u = 0;
    if (e.top < c.top + we(n, "top") ? u = -(c.top - e.top + we(i, "top")) : e.bottom > c.bottom - we(n, "bottom") && (u = e.bottom - c.bottom + we(i, "bottom")), e.left < c.left + we(n, "left") ? f = -(c.left - e.left + we(i, "left")) : e.right > c.right - we(n, "right") && (f = e.right - c.right + we(i, "right")), f || u)
      if (a)
        s.defaultView.scrollBy(f, u);
      else {
        let d = l.scrollLeft, h = l.scrollTop;
        u && (l.scrollTop += u), f && (l.scrollLeft += f);
        let m = l.scrollLeft - d, g = l.scrollTop - h;
        e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g };
      }
    if (a)
      break;
  }
}
function ma(r) {
  let e = r.dom.getBoundingClientRect(), t = Math.max(0, e.top), n, i;
  for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = r.root.elementFromPoint(s, o);
    if (!l || l == r.dom || !r.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      n = l, i = a.top;
      break;
    }
  }
  return { refDOM: n, refTop: i, stack: js(r.dom) };
}
function js(r) {
  let e = [], t = r.ownerDocument;
  for (let n = r; n && (e.push({ dom: n, top: n.scrollTop, left: n.scrollLeft }), r != t); n = Pt(n))
    ;
  return e;
}
function ga({ refDOM: r, refTop: e, stack: t }) {
  let n = r ? r.getBoundingClientRect().top : 0;
  Ws(t, n == 0 ? 0 : n - e);
}
function Ws(r, e) {
  for (let t = 0; t < r.length; t++) {
    let { dom: n, top: i, left: s } = r[t];
    n.scrollTop != i + e && (n.scrollTop = i + e), n.scrollLeft != s && (n.scrollLeft = s);
  }
}
let nt = null;
function ya(r) {
  if (r.setActive)
    return r.setActive();
  if (nt)
    return r.focus(nt);
  let e = js(r);
  r.focus(nt == null ? {
    get preventScroll() {
      return nt = { preventScroll: !0 }, !0;
    }
  } : void 0), nt || (nt = !1, Ws(e, 0));
}
function Js(r, e) {
  let t, n = 2e8, i, s = 0, o = e.top, l = e.top;
  for (let a = r.firstChild, c = 0; a; a = a.nextSibling, c++) {
    let f;
    if (a.nodeType == 1)
      f = a.getClientRects();
    else if (a.nodeType == 3)
      f = Se(a).getClientRects();
    else
      continue;
    for (let u = 0; u < f.length; u++) {
      let d = f[u];
      if (d.top <= o && d.bottom >= l) {
        o = Math.max(d.bottom, o), l = Math.min(d.top, l);
        let h = d.left > e.left ? d.left - e.left : d.right < e.left ? e.left - d.right : 0;
        if (h < n) {
          t = a, n = h, i = h && t.nodeType == 3 ? {
            left: d.right < e.left ? d.right : d.left,
            top: e.top
          } : e, a.nodeType == 1 && h && (s = c + (e.left >= (d.left + d.right) / 2 ? 1 : 0));
          continue;
        }
      }
      !t && (e.left >= d.right && e.top >= d.top || e.left >= d.left && e.top >= d.bottom) && (s = c + 1);
    }
  }
  return t && t.nodeType == 3 ? ka(t, i) : !t || n && t.nodeType == 1 ? { node: r, offset: s } : Js(t, i);
}
function ka(r, e) {
  let t = r.nodeValue.length, n = document.createRange();
  for (let i = 0; i < t; i++) {
    n.setEnd(r, i + 1), n.setStart(r, i);
    let s = Oe(n, 1);
    if (s.top != s.bottom && Mr(e, s))
      return { node: r, offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
  }
  return { node: r, offset: 0 };
}
function Mr(r, e) {
  return r.left >= e.left - 1 && r.left <= e.right + 1 && r.top >= e.top - 1 && r.top <= e.bottom + 1;
}
function ba(r, e) {
  let t = r.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < r.getBoundingClientRect().left ? t : r;
}
function Sa(r, e, t) {
  let { node: n, offset: i } = Js(e, t), s = -1;
  if (n.nodeType == 1 && !n.firstChild) {
    let o = n.getBoundingClientRect();
    s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return r.docView.posFromDOM(n, i, s);
}
function xa(r, e, t, n) {
  let i = -1;
  for (let s = e, o = !1; s != r.dom; ) {
    let l = r.docView.nearestDesc(s, !0);
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent && !o || !l.contentDOM)) {
      let a = l.dom.getBoundingClientRect();
      if (l.node.isBlock && l.parent && !o && (o = !0, a.left > n.left || a.top > n.top ? i = l.posBefore : (a.right < n.left || a.bottom < n.top) && (i = l.posAfter)), !l.contentDOM && i < 0)
        return (l.node.isBlock ? n.top < (a.top + a.bottom) / 2 : n.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    }
    s = l.dom.parentNode;
  }
  return i > -1 ? i : r.docView.posFromDOM(e, t, -1);
}
function Hs(r, e, t) {
  let n = r.childNodes.length;
  if (n && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(n - 1, Math.floor(n * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ; ) {
      let o = r.childNodes[s];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (Mr(e, c))
            return Hs(o, e, c);
        }
      }
      if ((s = (s + 1) % n) == i)
        break;
    }
  return r;
}
function Ma(r, e) {
  let t = r.dom.ownerDocument, n, i = 0;
  if (t.caretPositionFromPoint)
    try {
      let a = t.caretPositionFromPoint(e.left, e.top);
      a && ({ offsetNode: n, offset: i } = a);
    } catch {
    }
  if (!n && t.caretRangeFromPoint) {
    let a = t.caretRangeFromPoint(e.left, e.top);
    a && ({ startContainer: n, startOffset: i } = a);
  }
  let s = (r.root.elementFromPoint ? r.root : t).elementFromPoint(e.left, e.top), o;
  if (!s || !r.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let a = r.dom.getBoundingClientRect();
    if (!Mr(e, a) || (s = Hs(r.dom, e, a), !s))
      return null;
  }
  if (Z)
    for (let a = s; n && a; a = Pt(a))
      a.draggable && (n = void 0);
  if (s = ba(s, e), n) {
    if (he && n.nodeType == 1 && (i = Math.min(i, n.childNodes.length), i < n.childNodes.length)) {
      let a = n.childNodes[i], c;
      a.nodeName == "IMG" && (c = a.getBoundingClientRect()).right <= e.left && c.bottom > e.top && i++;
    }
    n == r.dom && i == n.childNodes.length - 1 && n.lastChild.nodeType == 1 && e.top > n.lastChild.getBoundingClientRect().bottom ? o = r.state.doc.content.size : (i == 0 || n.nodeType != 1 || n.childNodes[i - 1].nodeName != "BR") && (o = xa(r, n, i, e));
  }
  o == null && (o = Sa(r, s, e));
  let l = r.docView.nearestDesc(s, !0);
  return { pos: o, inside: l ? l.posAtStart - l.border : -1 };
}
function Oe(r, e) {
  let t = r.getClientRects();
  return t.length ? t[e < 0 ? 0 : t.length - 1] : r.getBoundingClientRect();
}
const Ca = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function _s(r, e, t) {
  let { node: n, offset: i, atom: s } = r.docView.domFromPos(e, t < 0 ? -1 : 1), o = mn || he;
  if (n.nodeType == 3)
    if (o && (Ca.test(n.nodeValue) || (t < 0 ? !i : i == n.nodeValue.length))) {
      let a = Oe(Se(n, i, i), t);
      if (he && i && /\s/.test(n.nodeValue[i - 1]) && i < n.nodeValue.length) {
        let c = Oe(Se(n, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let f = Oe(Se(n, i, i + 1), -1);
          if (f.top != a.top)
            return wt(f, f.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, f = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, f = -1) : t >= 0 && i == n.nodeValue.length ? (a--, f = 1) : t < 0 ? a-- : c++, wt(Oe(Se(n, a, c), 1), f < 0);
    }
  if (!r.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (t < 0 || i == pe(n))) {
      let a = n.childNodes[i - 1];
      if (a.nodeType == 1)
        return Wn(a.getBoundingClientRect(), !1);
    }
    if (s == null && i < pe(n)) {
      let a = n.childNodes[i];
      if (a.nodeType == 1)
        return Wn(a.getBoundingClientRect(), !0);
    }
    return Wn(n.getBoundingClientRect(), t >= 0);
  }
  if (s == null && i && (t < 0 || i == pe(n))) {
    let a = n.childNodes[i - 1], c = a.nodeType == 3 ? Se(a, pe(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return wt(Oe(c, 1), !1);
  }
  if (s == null && i < pe(n)) {
    let a = n.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? Se(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return wt(Oe(c, -1), !0);
  }
  return wt(Oe(n.nodeType == 3 ? Se(n) : n, -t), t >= 0);
}
function wt(r, e) {
  if (r.width == 0)
    return r;
  let t = e ? r.left : r.right;
  return { top: r.top, bottom: r.bottom, left: t, right: t };
}
function Wn(r, e) {
  if (r.height == 0)
    return r;
  let t = e ? r.top : r.bottom;
  return { top: t, bottom: t, left: r.left, right: r.right };
}
function qs(r, e, t) {
  let n = r.state, i = r.root.activeElement;
  n != e && r.updateState(e), i != r.dom && r.focus();
  try {
    return t();
  } finally {
    n != e && r.updateState(n), i != r.dom && i && i.focus();
  }
}
function wa(r, e, t) {
  let n = e.selection, i = t == "up" ? n.$from : n.$to;
  return qs(r, e, () => {
    let { node: s } = r.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = r.docView.nearestDesc(s, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        s = l.contentDOM || l.dom;
        break;
      }
      s = l.dom.parentNode;
    }
    let o = _s(r, i.pos, 1);
    for (let l = s.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = Se(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let f = a[c];
        if (f.bottom > f.top + 1 && (t == "up" ? o.top - f.top > (f.bottom - o.top) * 2 : f.bottom - o.bottom > (o.bottom - f.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const Oa = /[\u0590-\u08ac]/;
function Ta(r, e, t) {
  let { $head: n } = e.selection;
  if (!n.parent.isTextblock)
    return !1;
  let i = n.parentOffset, s = !i, o = i == n.parent.content.size, l = r.domSelection();
  return !Oa.test(n.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : qs(r, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: f, anchorOffset: u } = r.domSelectionRange(), d = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = n.depth ? r.docView.domAfterPos(n.before()) : r.dom, { focusNode: m, focusOffset: g } = r.domSelectionRange(), y = m && !h.contains(m.nodeType == 1 ? m : m.parentNode) || a == m && c == g;
    try {
      l.collapse(f, u), a && (a != f || c != u) && l.extend && l.extend(a, c);
    } catch {
    }
    return d != null && (l.caretBidiLevel = d), y;
  });
}
let Ei = null, Ni = null, Di = !1;
function Ea(r, e, t) {
  return Ei == e && Ni == t ? Di : (Ei = e, Ni = t, Di = t == "up" || t == "down" ? wa(r, e, t) : Ta(r, e, t));
}
const de = 0, vi = 1, ot = 2, ye = 3;
class jt {
  constructor(e, t, n, i) {
    this.parent = e, this.children = t, this.dom = n, this.contentDOM = i, this.dirty = de, n.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, n) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, n = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return n;
      n += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, n) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (n < 0) {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.previousSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.previousSibling;
        return s ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.nextSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.nextSibling;
        return s ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > ie(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !1;
            break;
          }
          if (s.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !0;
            break;
          }
          if (s.nextSibling)
            break;
        }
    }
    return i ?? n > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let n = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i), o;
      if (s && (!t || s.node))
        if (n && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          n = !1;
        else
          return s;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let n = t; n; n = n.parent)
      if (n == this)
        return t;
  }
  posFromDOM(e, t, n) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i);
      if (s)
        return s.localPosFromDOM(e, t, n);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, n = 0; t < this.children.length; t++) {
      let i = this.children[t], s = n + i.size;
      if (n == e && s != n) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < s)
        return i.descAt(e - n - i.border);
      n = s;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let n = 0, i = 0;
    for (let s = 0; n < this.children.length; n++) {
      let o = this.children[n], l = s + o.size;
      if (l > e || o instanceof Us) {
        i = e - s;
        break;
      }
      s = l;
    }
    if (i)
      return this.children[n].domFromPos(i - this.children[n].border, t);
    for (let s; n && !(s = this.children[n - 1]).size && s instanceof Ks && s.side >= 0; n--)
      ;
    if (t <= 0) {
      let s, o = !0;
      for (; s = n ? this.children[n - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); n--, o = !1)
        ;
      return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : { node: this.contentDOM, offset: s ? ie(s.dom) + 1 : 0 };
    } else {
      let s, o = !0;
      for (; s = n < this.children.length ? this.children[n] : null, !(!s || s.dom.parentNode == this.contentDOM); n++, o = !1)
        ;
      return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : { node: this.contentDOM, offset: s ? ie(s.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, n = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, s = -1;
    for (let o = n, l = 0; ; l++) {
      let a = this.children[l], c = o + a.size;
      if (i == -1 && e <= c) {
        let f = o + a.border;
        if (e >= f && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, f);
        e = o;
        for (let u = l; u > 0; u--) {
          let d = this.children[u - 1];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(1)) {
            i = ie(d.dom) + 1;
            break;
          }
          e -= d.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let f = l + 1; f < this.children.length; f++) {
          let u = this.children[f];
          if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
            s = ie(u.dom);
            break;
          }
          t += u.size;
        }
        s == -1 && (s = this.contentDOM.childNodes.length);
        break;
      }
      o = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: s };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: n } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || n == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[n];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, n, i = !1) {
    let s = Math.min(e, t), o = Math.max(e, t);
    for (let d = 0, h = 0; d < this.children.length; d++) {
      let m = this.children[d], g = h + m.size;
      if (s > h && o < g)
        return m.setSelection(e - h - m.border, t - h - m.border, n, i);
      h = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = n.getSelection(), f = !1;
    if ((he || Z) && e == t) {
      let { node: d, offset: h } = l;
      if (d.nodeType == 3) {
        if (f = !!(h && d.nodeValue[h - 1] == `
`), f && h == d.nodeValue.length)
          for (let m = d, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: ie(g) + 1 });
              break;
            }
            let y = m.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let m = d.childNodes[h - 1];
        f = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (he && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
      let d = c.focusNode.childNodes[c.focusOffset];
      d && d.contentEditable == "false" && (i = !0);
    }
    if (!(i || f && Z) && Ye(l.node, l.offset, c.anchorNode, c.anchorOffset) && Ye(a.node, a.offset, c.focusNode, c.focusOffset))
      return;
    let u = !1;
    if ((c.extend || e == t) && !f) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), u = !0;
      } catch {
      }
    }
    if (!u) {
      if (e > t) {
        let h = l;
        l = a, a = h;
      }
      let d = document.createRange();
      d.setEnd(a.node, a.offset), d.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(d);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let n = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i], o = n + s.size;
      if (n == o ? e <= o && t >= n : e < o && t > n) {
        let l = n + s.border, a = o - s.border;
        if (e >= l && t <= a) {
          this.dirty = e == n || t == o ? ot : vi, e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = ye : s.markDirty(e - l, t - l);
          return;
        } else
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? ot : ye;
      }
      n = o;
    }
    this.dirty = ot;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let n = e == 1 ? ot : vi;
      t.dirty < n && (t.dirty = n);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
}
class Ks extends jt {
  constructor(e, t, n, i) {
    let s, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(n, () => {
      if (!s)
        return i;
      if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, s = this;
  }
  matchesWidget(e) {
    return this.dirty == de && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Na extends jt {
  constructor(e, t, n, i) {
    super(e, [], t, null), this.textDOM = n, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Ge extends jt {
  constructor(e, t, n, i) {
    super(e, [], n, i), this.mark = t;
  }
  static create(e, t, n, i) {
    let s = i.nodeViews[t.type.name], o = s && s(t, i, n);
    return (!o || !o.dom) && (o = me.renderSpec(document, t.type.spec.toDOM(t, n))), new Ge(e, t, o.dom, o.contentDOM || o.dom);
  }
  parseRule() {
    return this.dirty & ye || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM || void 0 };
  }
  matchesMark(e) {
    return this.dirty != ye && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != de) {
      let n = this.parent;
      for (; !n.node; )
        n = n.parent;
      n.dirty < this.dirty && (n.dirty = this.dirty), this.dirty = de;
    }
  }
  slice(e, t, n) {
    let i = Ge.create(this.parent, this.mark, !0, n), s = this.children, o = this.size;
    t < o && (s = ur(s, t, o, n)), e > 0 && (s = ur(s, 0, e, n));
    for (let l = 0; l < s.length; l++)
      s[l].parent = i;
    return i.children = s, i;
  }
}
class Xe extends jt {
  constructor(e, t, n, i, s, o, l, a, c) {
    super(e, [], s, o), this.node = t, this.outerDeco = n, this.innerDeco = i, this.nodeDOM = l, o && this.updateChildren(a, c);
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, n, i, s, o) {
    let l = s.nodeViews[t.type.name], a, c = l && l(t, s, () => {
      if (!a)
        return o;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, n, i), f = c && c.dom, u = c && c.contentDOM;
    if (t.isText) {
      if (!f)
        f = document.createTextNode(t.text);
      else if (f.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      f || ({ dom: f, contentDOM: u } = me.renderSpec(document, t.type.spec.toDOM(t)));
    !u && !t.isText && f.nodeName != "BR" && (f.hasAttribute("contenteditable") || (f.contentEditable = "false"), t.type.spec.draggable && (f.draggable = !0));
    let d = f;
    return f = Xs(f, n, t), c ? a = new Da(e, t, n, i, f, u || null, d, c, s, o + 1) : t.isText ? new gn(e, t, n, i, f, d, s) : new Xe(e, t, n, i, f, u || null, d, s, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let n = this.children[t];
        if (this.dom.contains(n.dom.parentNode)) {
          e.contentElement = n.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => b.empty);
    }
    return e;
  }
  matchesNode(e, t, n) {
    return this.dirty == de && e.eq(this.node) && fr(t, this.outerDeco) && n.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let n = this.node.inlineContent, i = t, s = e.composing ? this.localCompositionInfo(e, t) : null, o = s && s.pos > -1 ? s : null, l = s && s.pos < 0, a = new Aa(this, o && o.node, e);
    Pa(this.node, this.innerDeco, (c, f, u) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, n, e) : c.type.side >= 0 && !u && a.syncToMarks(f == this.node.childCount ? B.none : this.node.child(f).marks, n, e), a.placeWidget(c, e, i);
    }, (c, f, u, d) => {
      a.syncToMarks(c.marks, n, e);
      let h;
      a.findNodeMatch(c, f, u, d) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, f, u, h, e) || a.updateNextNode(c, f, u, e, d) || a.addNode(c, f, u, e, i), i += c.nodeSize;
    }), a.syncToMarks([], n, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == ot) && (o && this.protectLocalComposition(e, o), Ys(this.contentDOM, this.children, e), pt && Ba(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: n, to: i } = e.state.selection;
    if (!(e.state.selection instanceof R) || n < t || i > t + this.node.content.size)
      return null;
    let s = e.domSelectionRange(), o = Fa(s.focusNode, s.focusOffset);
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let l = o.nodeValue, a = za(this.node.content, l, n - t, i - t);
      return a < 0 ? null : { node: o, pos: a, text: l };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: n, text: i }) {
    if (this.getDesc(t))
      return;
    let s = t;
    for (; s.parentNode != this.contentDOM; s = s.parentNode) {
      for (; s.previousSibling; )
        s.parentNode.removeChild(s.previousSibling);
      for (; s.nextSibling; )
        s.parentNode.removeChild(s.nextSibling);
      s.pmViewDesc && (s.pmViewDesc = void 0);
    }
    let o = new Na(this, s, t, i);
    e.input.compositionNodes.push(o), this.children = ur(this.children, n, n + i.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, n, i) {
    return this.dirty == ye || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, n, i), !0);
  }
  updateInner(e, t, n, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = de;
  }
  updateOuterDeco(e) {
    if (fr(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, n = this.dom;
    this.dom = Gs(this.dom, this.nodeDOM, cr(this.outerDeco, this.node, t), cr(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable");
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function Ai(r, e, t, n, i) {
  return Xs(n, e, r), new Xe(void 0, r, e, t, n, n, n, i, 0);
}
class gn extends Xe {
  constructor(e, t, n, i, s, o, l) {
    super(e, t, n, i, s, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, n, i) {
    return this.dirty == ye || this.dirty != de && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != de || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = de, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, n) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, n);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, n) {
    let i = this.node.cut(e, t), s = document.createTextNode(i.text);
    return new gn(this.parent, i, this.outerDeco, this.innerDeco, s, s, n);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = ye);
  }
  get domAtom() {
    return !1;
  }
}
class Us extends jt {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == de && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Da extends Xe {
  constructor(e, t, n, i, s, o, l, a, c, f) {
    super(e, t, n, i, s, o, l, c, f), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, n, i) {
    if (this.dirty == ye)
      return !1;
    if (this.spec.update) {
      let s = this.spec.update(e, t, n);
      return s && this.updateInner(e, t, n, i), s;
    } else
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, n, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, n, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, n) : super.setSelection(e, t, n, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function Ys(r, e, t) {
  let n = r.firstChild, i = !1;
  for (let s = 0; s < e.length; s++) {
    let o = e[s], l = o.dom;
    if (l.parentNode == r) {
      for (; l != n; )
        n = Ri(n), i = !0;
      n = n.nextSibling;
    } else
      i = !0, r.insertBefore(l, n);
    if (o instanceof Ge) {
      let a = n ? n.previousSibling : r.lastChild;
      Ys(o.contentDOM, o.children, t), n = a ? a.nextSibling : r.firstChild;
    }
  }
  for (; n; )
    n = Ri(n), i = !0;
  i && t.trackWrites == r && (t.trackWrites = null);
}
const At = function(r) {
  r && (this.nodeName = r);
};
At.prototype = /* @__PURE__ */ Object.create(null);
const je = [new At()];
function cr(r, e, t) {
  if (r.length == 0)
    return je;
  let n = t ? je[0] : new At(), i = [n];
  for (let s = 0; s < r.length; s++) {
    let o = r[s].type.attrs;
    if (o) {
      o.nodeName && i.push(n = new At(o.nodeName));
      for (let l in o) {
        let a = o[l];
        a != null && (t && i.length == 1 && i.push(n = new At(e.isInline ? "span" : "div")), l == "class" ? n.class = (n.class ? n.class + " " : "") + a : l == "style" ? n.style = (n.style ? n.style + ";" : "") + a : l != "nodeName" && (n[l] = a));
      }
    }
  }
  return i;
}
function Gs(r, e, t, n) {
  if (t == je && n == je)
    return e;
  let i = e;
  for (let s = 0; s < n.length; s++) {
    let o = n[s], l = t[s];
    if (s) {
      let a;
      l && l.nodeName == o.nodeName && i != r && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = je[0]), i = a;
    }
    va(i, l || je[0], o);
  }
  return i;
}
function va(r, e, t) {
  for (let n in e)
    n != "class" && n != "style" && n != "nodeName" && !(n in t) && r.removeAttribute(n);
  for (let n in t)
    n != "class" && n != "style" && n != "nodeName" && t[n] != e[n] && r.setAttribute(n, t[n]);
  if (e.class != t.class) {
    let n = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let s = 0; s < n.length; s++)
      i.indexOf(n[s]) == -1 && r.classList.remove(n[s]);
    for (let s = 0; s < i.length; s++)
      n.indexOf(i[s]) == -1 && r.classList.add(i[s]);
    r.classList.length == 0 && r.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let n = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = n.exec(e.style); )
        r.style.removeProperty(i[1]);
    }
    t.style && (r.style.cssText += t.style);
  }
}
function Xs(r, e, t) {
  return Gs(r, r, je, cr(e, t, r.nodeType != 1));
}
function fr(r, e) {
  if (r.length != e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (!r[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Ri(r) {
  let e = r.nextSibling;
  return r.parentNode.removeChild(r), e;
}
class Aa {
  constructor(e, t, n) {
    this.lock = t, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Ra(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let n = e; n < t; n++)
        this.top.children[n].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, n) {
    let i = 0, s = this.stack.length >> 1, o = Math.min(s, e.length);
    for (; i < o && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < s; )
      this.destroyRest(), this.top.dirty = de, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
    for (; s < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[s]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = Ge.create(this.top, e[s], t, n);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, s++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, n, i) {
    let s = -1, o;
    if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, n))
      s = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, n) && !this.preMatch.matched.has(c)) {
          s = l;
          break;
        }
      }
    return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }
  updateNodeAt(e, t, n, i, s) {
    let o = this.top.children[i];
    return o.dirty == ye && o.dom == o.contentDOM && (o.dirty = ot), o.update(e, t, n, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let n = e.pmViewDesc;
        if (n) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == n)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, n, i, s) {
    for (let o = this.index; o < this.top.children.length; o++) {
      let l = this.top.children[o];
      if (l instanceof Xe) {
        let a = this.preMatch.matched.get(l);
        if (a != null && a != s)
          return !1;
        let c = l.dom;
        if (!(this.isLocked(c) && !(e.isText && l.node && l.node.isText && l.nodeDOM.nodeValue == e.text && l.dirty != ye && fr(t, l.outerDeco))) && l.update(e, t, n, i))
          return this.destroyBetween(this.index, o), l.dom != c && (this.changed = !0), this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, n, i, s) {
    this.top.children.splice(this.index++, 0, Xe.create(this.top, e, t, n, i, s)), this.changed = !0;
  }
  placeWidget(e, t, n) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let s = new Ks(this.top, e, t, n);
      this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Ge; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof gn) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Z || X) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let n = document.createElement(e);
      e == "IMG" && (n.className = "ProseMirror-separator", n.alt = ""), e == "BR" && (n.className = "ProseMirror-trailingBreak");
      let i = new Us(this.top, [], n, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Ra(r, e) {
  let t = e, n = t.children.length, i = r.childCount, s = /* @__PURE__ */ new Map(), o = [];
  e:
    for (; i > 0; ) {
      let l;
      for (; ; )
        if (n) {
          let c = t.children[n - 1];
          if (c instanceof Ge)
            t = c, n = c.children.length;
          else {
            l = c, n--;
            break;
          }
        } else {
          if (t == e)
            break e;
          n = t.parent.children.indexOf(t), t = t.parent;
        }
      let a = l.node;
      if (a) {
        if (a != r.child(i - 1))
          break;
        --i, s.set(l, i), o.push(l);
      }
    }
  return { index: i, matched: s, matches: o.reverse() };
}
function Ia(r, e) {
  return r.type.side - e.type.side;
}
function Pa(r, e, t, n) {
  let i = e.locals(r), s = 0;
  if (i.length == 0) {
    for (let c = 0; c < r.childCount; c++) {
      let f = r.child(c);
      n(f, i, e.forChild(s, f), c), s += f.nodeSize;
    }
    return;
  }
  let o = 0, l = [], a = null;
  for (let c = 0; ; ) {
    if (o < i.length && i[o].to == s) {
      let m = i[o++], g;
      for (; o < i.length && i[o].to == s; )
        (g || (g = [m])).push(i[o++]);
      if (g) {
        g.sort(Ia);
        for (let y = 0; y < g.length; y++)
          t(g[y], c, !!a);
      } else
        t(m, c, !!a);
    }
    let f, u;
    if (a)
      u = -1, f = a, a = null;
    else if (c < r.childCount)
      u = c, f = r.child(c++);
    else
      break;
    for (let m = 0; m < l.length; m++)
      l[m].to <= s && l.splice(m--, 1);
    for (; o < i.length && i[o].from <= s && i[o].to > s; )
      l.push(i[o++]);
    let d = s + f.nodeSize;
    if (f.isText) {
      let m = d;
      o < i.length && i[o].from < m && (m = i[o].from);
      for (let g = 0; g < l.length; g++)
        l[g].to < m && (m = l[g].to);
      m < d && (a = f.cut(m - s), f = f.cut(0, m - s), d = m, u = -1);
    }
    let h = f.isInline && !f.isLeaf ? l.filter((m) => !m.inline) : l.slice();
    n(f, h, e.forChild(s, f), u), s = d;
  }
}
function Ba(r) {
  if (r.nodeName == "UL" || r.nodeName == "OL") {
    let e = r.style.cssText;
    r.style.cssText = e + "; list-style: square !important", window.getComputedStyle(r).listStyle, r.style.cssText = e;
  }
}
function Fa(r, e) {
  for (; ; ) {
    if (r.nodeType == 3)
      return r;
    if (r.nodeType == 1 && e > 0) {
      if (r.childNodes.length > e && r.childNodes[e].nodeType == 3)
        return r.childNodes[e];
      r = r.childNodes[e - 1], e = pe(r);
    } else if (r.nodeType == 1 && e < r.childNodes.length)
      r = r.childNodes[e], e = 0;
    else
      return null;
  }
}
function za(r, e, t, n) {
  for (let i = 0, s = 0; i < r.childCount && s <= n; ) {
    let o = r.child(i++), l = s;
    if (s += o.nodeSize, !o.isText)
      continue;
    let a = o.text;
    for (; i < r.childCount; ) {
      let c = r.child(i++);
      if (s += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (s >= t) {
      let c = l < n ? a.lastIndexOf(e, n - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == n && a.length >= n + e.length - l && a.slice(n - l, n - l + e.length) == e)
        return n;
    }
  }
  return -1;
}
function ur(r, e, t, n, i) {
  let s = [];
  for (let o = 0, l = 0; o < r.length; o++) {
    let a = r[o], c = l, f = l += a.size;
    c >= t || f <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, n)), i && (s.push(i), i = void 0), f > t && s.push(a.slice(t - c, a.size, n)));
  }
  return s;
}
function Cr(r, e = null) {
  let t = r.domSelectionRange(), n = r.state.doc;
  if (!t.focusNode)
    return null;
  let i = r.docView.nearestDesc(t.focusNode), s = i && i.size == 0, o = r.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = n.resolve(o), a, c;
  if (pn(t)) {
    for (a = l; i && !i.node; )
      i = i.parent;
    let f = i.node;
    if (i && f.isAtom && O.isSelectable(f) && i.parent && !(f.isInline && aa(t.focusNode, t.focusOffset, i.dom))) {
      let u = i.posBefore;
      c = new O(o == u ? l : n.resolve(u));
    }
  } else {
    let f = r.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (f < 0)
      return null;
    a = n.resolve(f);
  }
  if (!c) {
    let f = e == "pointer" || r.state.selection.head < l.pos && !s ? 1 : -1;
    c = wr(r, a, l, f);
  }
  return c;
}
function Zs(r) {
  return r.editable ? r.hasFocus() : eo(r) && document.activeElement && document.activeElement.contains(r.dom);
}
function xe(r, e = !1) {
  let t = r.state.selection;
  if (Qs(r, t), !!Zs(r)) {
    if (!e && r.input.mouseDown && r.input.mouseDown.allowDefault && X) {
      let n = r.domSelectionRange(), i = r.domObserver.currentSelection;
      if (n.anchorNode && i.anchorNode && Ye(n.anchorNode, n.anchorOffset, i.anchorNode, i.anchorOffset)) {
        r.input.mouseDown.delayedSelectionSync = !0, r.domObserver.setCurSelection();
        return;
      }
    }
    if (r.domObserver.disconnectSelection(), r.cursorWrapper)
      La(r);
    else {
      let { anchor: n, head: i } = t, s, o;
      Ii && !(t instanceof R) && (t.$from.parent.inlineContent || (s = Pi(r, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = Pi(r, t.to))), r.docView.setSelection(n, i, r.root, e), Ii && (s && Bi(s), o && Bi(o)), t.visible ? r.dom.classList.remove("ProseMirror-hideselection") : (r.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Va(r));
    }
    r.domObserver.setCurSelection(), r.domObserver.connectSelection();
  }
}
const Ii = Z || X && ua < 63;
function Pi(r, e) {
  let { node: t, offset: n } = r.docView.domFromPos(e, 0), i = n < t.childNodes.length ? t.childNodes[n] : null, s = n ? t.childNodes[n - 1] : null;
  if (Z && i && i.contentEditable == "false")
    return Jn(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return Jn(i);
    if (s)
      return Jn(s);
  }
}
function Jn(r) {
  return r.contentEditable = "true", Z && r.draggable && (r.draggable = !1, r.wasDraggable = !0), r;
}
function Bi(r) {
  r.contentEditable = "false", r.wasDraggable && (r.draggable = !0, r.wasDraggable = null);
}
function Va(r) {
  let e = r.dom.ownerDocument;
  e.removeEventListener("selectionchange", r.input.hideSelectionGuard);
  let t = r.domSelectionRange(), n = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", r.input.hideSelectionGuard = () => {
    (t.anchorNode != n || t.anchorOffset != i) && (e.removeEventListener("selectionchange", r.input.hideSelectionGuard), setTimeout(() => {
      (!Zs(r) || r.state.selection.visible) && r.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function La(r) {
  let e = r.domSelection(), t = document.createRange(), n = r.cursorWrapper.dom, i = n.nodeName == "IMG";
  i ? t.setEnd(n.parentNode, ie(n) + 1) : t.setEnd(n, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !i && !r.state.selection.visible && te && ve <= 11 && (n.disabled = !0, n.disabled = !1);
}
function Qs(r, e) {
  if (e instanceof O) {
    let t = r.docView.descAt(e.from);
    t != r.lastSelectedViewDesc && (Fi(r), t && t.selectNode(), r.lastSelectedViewDesc = t);
  } else
    Fi(r);
}
function Fi(r) {
  r.lastSelectedViewDesc && (r.lastSelectedViewDesc.parent && r.lastSelectedViewDesc.deselectNode(), r.lastSelectedViewDesc = void 0);
}
function wr(r, e, t, n) {
  return r.someProp("createSelectionBetween", (i) => i(r, e, t)) || R.between(e, t, n);
}
function zi(r) {
  return r.editable && !r.hasFocus() ? !1 : eo(r);
}
function eo(r) {
  let e = r.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return r.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (r.editable || r.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function $a(r) {
  let e = r.docView.domFromPos(r.state.selection.anchor, 0), t = r.domSelectionRange();
  return Ye(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function dr(r, e) {
  let { $anchor: t, $head: n } = r.selection, i = e > 0 ? t.max(n) : t.min(n), s = i.parent.inlineContent ? i.depth ? r.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && v.findFrom(s, e);
}
function $e(r, e) {
  return r.dispatch(r.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Vi(r, e, t) {
  let n = r.state.selection;
  if (n instanceof R) {
    if (!n.empty || t.indexOf("s") > -1)
      return !1;
    if (r.endOfTextblock(e > 0 ? "right" : "left")) {
      let i = dr(r.state, e);
      return i && i instanceof O ? $e(r, i) : !1;
    } else if (!(le && t.indexOf("m") > -1)) {
      let i = n.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
      if (!s || s.isText)
        return !1;
      let l = e < 0 ? i.pos - s.nodeSize : i.pos;
      return s.isAtom || (o = r.docView.descAt(l)) && !o.contentDOM ? O.isSelectable(s) ? $e(r, new O(e < 0 ? r.state.doc.resolve(i.pos - s.nodeSize) : i)) : mn ? $e(r, new R(r.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
    }
  } else {
    if (n instanceof O && n.node.isInline)
      return $e(r, new R(e > 0 ? n.$to : n.$from));
    {
      let i = dr(r.state, e);
      return i ? $e(r, i) : !1;
    }
  }
}
function on(r) {
  return r.nodeType == 3 ? r.nodeValue.length : r.childNodes.length;
}
function Rt(r) {
  let e = r.pmViewDesc;
  return e && e.size == 0 && (r.nextSibling || r.nodeName != "BR");
}
function Hn(r) {
  let e = r.domSelectionRange(), t = e.focusNode, n = e.focusOffset;
  if (!t)
    return;
  let i, s, o = !1;
  for (he && t.nodeType == 1 && n < on(t) && Rt(t.childNodes[n]) && (o = !0); ; )
    if (n > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[n - 1];
        if (Rt(l))
          i = t, s = --n;
        else if (l.nodeType == 3)
          t = l, n = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (to(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && Rt(l); )
          i = t.parentNode, s = ie(l), l = l.previousSibling;
        if (l)
          t = l, n = on(t);
        else {
          if (t = t.parentNode, t == r.dom)
            break;
          n = 0;
        }
      }
    }
  o ? hr(r, t, n) : i && hr(r, i, s);
}
function _n(r) {
  let e = r.domSelectionRange(), t = e.focusNode, n = e.focusOffset;
  if (!t)
    return;
  let i = on(t), s, o;
  for (; ; )
    if (n < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[n];
      if (Rt(l))
        s = t, o = ++n;
      else
        break;
    } else {
      if (to(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && Rt(l); )
          s = l.parentNode, o = ie(l) + 1, l = l.nextSibling;
        if (l)
          t = l, n = 0, i = on(t);
        else {
          if (t = t.parentNode, t == r.dom)
            break;
          n = i = 0;
        }
      }
    }
  s && hr(r, s, o);
}
function to(r) {
  let e = r.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function hr(r, e, t) {
  let n = r.domSelection();
  if (pn(n)) {
    let s = document.createRange();
    s.setEnd(e, t), s.setStart(e, t), n.removeAllRanges(), n.addRange(s);
  } else
    n.extend && n.extend(e, t);
  r.domObserver.setCurSelection();
  let { state: i } = r;
  setTimeout(() => {
    r.state == i && xe(r);
  }, 50);
}
function Li(r, e, t) {
  let n = r.state.selection;
  if (n instanceof R && !n.empty || t.indexOf("s") > -1 || le && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = n;
  if (!i.parent.inlineContent || r.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = dr(r.state, e);
    if (o && o instanceof O)
      return $e(r, o);
  }
  if (!i.parent.inlineContent) {
    let o = e < 0 ? i : s, l = n instanceof ue ? v.near(o, e) : v.findFrom(o, e);
    return l ? $e(r, l) : !1;
  }
  return !1;
}
function $i(r, e) {
  if (!(r.state.selection instanceof R))
    return !0;
  let { $head: t, $anchor: n, empty: i } = r.state.selection;
  if (!t.sameParent(n))
    return !0;
  if (!i)
    return !1;
  if (r.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (s && !s.isText) {
    let o = r.state.tr;
    return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), r.dispatch(o), !0;
  }
  return !1;
}
function ji(r, e, t) {
  r.domObserver.stop(), e.contentEditable = t, r.domObserver.start();
}
function ja(r) {
  if (!Z || r.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = r.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let n = e.firstChild;
    ji(r, n, "true"), setTimeout(() => ji(r, n, "false"), 20);
  }
  return !1;
}
function Wa(r) {
  let e = "";
  return r.ctrlKey && (e += "c"), r.metaKey && (e += "m"), r.altKey && (e += "a"), r.shiftKey && (e += "s"), e;
}
function Ja(r, e) {
  let t = e.keyCode, n = Wa(e);
  return t == 8 || le && t == 72 && n == "c" ? $i(r, -1) || Hn(r) : t == 46 || le && t == 68 && n == "c" ? $i(r, 1) || _n(r) : t == 13 || t == 27 ? !0 : t == 37 || le && t == 66 && n == "c" ? Vi(r, -1, n) || Hn(r) : t == 39 || le && t == 70 && n == "c" ? Vi(r, 1, n) || _n(r) : t == 38 || le && t == 80 && n == "c" ? Li(r, -1, n) || Hn(r) : t == 40 || le && t == 78 && n == "c" ? ja(r) || Li(r, 1, n) || _n(r) : n == (le ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90);
}
function no(r, e) {
  r.someProp("transformCopied", (h) => {
    e = h(e, r);
  });
  let t = [], { content: n, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && n.childCount == 1 && n.firstChild.childCount == 1; ) {
    i--, s--;
    let h = n.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), n = h.content;
  }
  let o = r.someProp("clipboardSerializer") || me.fromSchema(r.state.schema), l = ao(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(n, { document: l }));
  let c = a.firstChild, f, u = 0;
  for (; c && c.nodeType == 1 && (f = lo[c.nodeName.toLowerCase()]); ) {
    for (let h = f.length - 1; h >= 0; h--) {
      let m = l.createElement(f[h]);
      for (; a.firstChild; )
        m.appendChild(a.firstChild);
      a.appendChild(m), u++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${u ? ` -${u}` : ""} ${JSON.stringify(t)}`);
  let d = r.someProp("clipboardTextSerializer", (h) => h(e, r)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: d };
}
function ro(r, e, t, n, i) {
  let s = i.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let a = e && (n || s || !t);
  if (a) {
    if (r.someProp("transformPastedText", (d) => {
      e = d(e, s || n, r);
    }), s)
      return e ? new M(b.from(r.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : M.empty;
    let u = r.someProp("clipboardTextParser", (d) => d(e, i, n, r));
    if (u)
      l = u;
    else {
      let d = i.marks(), { schema: h } = r.state, m = me.fromSchema(h);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let y = o.appendChild(document.createElement("p"));
        g && y.appendChild(m.serializeNode(h.text(g, d)));
      });
    }
  } else
    r.someProp("transformPastedHTML", (u) => {
      t = u(t, r);
    }), o = qa(t), mn && Ka(o);
  let c = o && o.querySelector("[data-pm-slice]"), f = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (f && f[3])
    for (let u = +f[3]; u > 0; u--) {
      let d = o.firstChild;
      for (; d && d.nodeType != 1; )
        d = d.nextSibling;
      if (!d)
        break;
      o = d;
    }
  if (l || (l = (r.someProp("clipboardParser") || r.someProp("domParser") || ut.fromSchema(r.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || f),
    context: i,
    ruleFromNode(d) {
      return d.nodeName == "BR" && !d.nextSibling && d.parentNode && !Ha.test(d.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), f)
    l = Ua(Wi(l, +f[1], +f[2]), f[4]);
  else if (l = M.maxOpen(_a(l.content, i), !0), l.openStart || l.openEnd) {
    let u = 0, d = 0;
    for (let h = l.content.firstChild; u < l.openStart && !h.type.spec.isolating; u++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; d < l.openEnd && !h.type.spec.isolating; d++, h = h.lastChild)
      ;
    l = Wi(l, u, d);
  }
  return r.someProp("transformPasted", (u) => {
    l = u(l, r);
  }), l;
}
const Ha = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function _a(r, e) {
  if (r.childCount < 2)
    return r;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), s, o = [];
    if (r.forEach((l) => {
      if (!o)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && s.length && so(a, s, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = oo(o[o.length - 1], s.length));
        let f = io(l, a);
        o.push(f), i = i.matchType(f.type), s = a;
      }
    }), o)
      return b.from(o);
  }
  return r;
}
function io(r, e, t = 0) {
  for (let n = e.length - 1; n >= t; n--)
    r = e[n].create(null, b.from(r));
  return r;
}
function so(r, e, t, n, i) {
  if (i < r.length && i < e.length && r[i] == e[i]) {
    let s = so(r, e, t, n.lastChild, i + 1);
    if (s)
      return n.copy(n.content.replaceChild(n.childCount - 1, s));
    if (n.contentMatchAt(n.childCount).matchType(i == r.length - 1 ? t.type : r[i + 1]))
      return n.copy(n.content.append(b.from(io(t, r, i + 1))));
  }
}
function oo(r, e) {
  if (e == 0)
    return r;
  let t = r.content.replaceChild(r.childCount - 1, oo(r.lastChild, e - 1)), n = r.contentMatchAt(r.childCount).fillBefore(b.empty, !0);
  return r.copy(t.append(n));
}
function pr(r, e, t, n, i, s) {
  let o = e < 0 ? r.firstChild : r.lastChild, l = o.content;
  return i < n - 1 && (l = pr(l, e, t, n, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, r.childCount > 1 || s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(b.empty, !0))), r.replaceChild(e < 0 ? 0 : r.childCount - 1, o.copy(l));
}
function Wi(r, e, t) {
  return e < r.openStart && (r = new M(pr(r.content, -1, e, r.openStart, 0, r.openEnd), e, r.openEnd)), t < r.openEnd && (r = new M(pr(r.content, 1, t, r.openEnd, 0, 0), r.openStart, t)), r;
}
const lo = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Ji = null;
function ao() {
  return Ji || (Ji = document.implementation.createHTMLDocument("title"));
}
function qa(r) {
  let e = /^(\s*<meta [^>]*>)*/.exec(r);
  e && (r = r.slice(e[0].length));
  let t = ao().createElement("div"), n = /<([a-z][^>\s]+)/i.exec(r), i;
  if ((i = n && lo[n[1].toLowerCase()]) && (r = i.map((s) => "<" + s + ">").join("") + r + i.map((s) => "</" + s + ">").reverse().join("")), t.innerHTML = r, i)
    for (let s = 0; s < i.length; s++)
      t = t.querySelector(i[s]) || t;
  return t;
}
function Ka(r) {
  let e = r.querySelectorAll(X ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    n.childNodes.length == 1 && n.textContent == " " && n.parentNode && n.parentNode.replaceChild(r.ownerDocument.createTextNode(" "), n);
  }
}
function Ua(r, e) {
  if (!r.size)
    return r;
  let t = r.content.firstChild.type.schema, n;
  try {
    n = JSON.parse(e);
  } catch {
    return r;
  }
  let { content: i, openStart: s, openEnd: o } = r;
  for (let l = n.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[n[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = b.from(a.create(n[l + 1], i)), s++, o++;
  }
  return new M(i, s, o);
}
const Q = {}, ee = {}, Ya = { touchstart: !0, touchmove: !0 };
class Ga {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Xa(r) {
  for (let e in Q) {
    let t = Q[e];
    r.dom.addEventListener(e, r.input.eventHandlers[e] = (n) => {
      Qa(r, n) && !Or(r, n) && (r.editable || !(n.type in ee)) && t(r, n);
    }, Ya[e] ? { passive: !0 } : void 0);
  }
  Z && r.dom.addEventListener("input", () => null), mr(r);
}
function De(r, e) {
  r.input.lastSelectionOrigin = e, r.input.lastSelectionTime = Date.now();
}
function Za(r) {
  r.domObserver.stop();
  for (let e in r.input.eventHandlers)
    r.dom.removeEventListener(e, r.input.eventHandlers[e]);
  clearTimeout(r.input.composingTimeout), clearTimeout(r.input.lastIOSEnterFallbackTimeout);
}
function mr(r) {
  r.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      r.input.eventHandlers[t] || r.dom.addEventListener(t, r.input.eventHandlers[t] = (n) => Or(r, n));
  });
}
function Or(r, e) {
  return r.someProp("handleDOMEvents", (t) => {
    let n = t[e.type];
    return n ? n(r, e) || e.defaultPrevented : !1;
  });
}
function Qa(r, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != r.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function ec(r, e) {
  !Or(r, e) && Q[e.type] && (r.editable || !(e.type in ee)) && Q[e.type](r, e);
}
ee.keydown = (r, e) => {
  let t = e;
  if (r.input.shiftKey = t.keyCode == 16 || t.shiftKey, !fo(r, t) && (r.input.lastKeyCode = t.keyCode, r.input.lastKeyCodeTime = Date.now(), !(ce && X && t.keyCode == 13)))
    if (t.keyCode != 229 && r.domObserver.forceFlush(), pt && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let n = Date.now();
      r.input.lastIOSEnter = n, r.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        r.input.lastIOSEnter == n && (r.someProp("handleKeyDown", (i) => i(r, Le(13, "Enter"))), r.input.lastIOSEnter = 0);
      }, 200);
    } else
      r.someProp("handleKeyDown", (n) => n(r, t)) || Ja(r, t) ? t.preventDefault() : De(r, "key");
};
ee.keyup = (r, e) => {
  e.keyCode == 16 && (r.input.shiftKey = !1);
};
ee.keypress = (r, e) => {
  let t = e;
  if (fo(r, t) || !t.charCode || t.ctrlKey && !t.altKey || le && t.metaKey)
    return;
  if (r.someProp("handleKeyPress", (i) => i(r, t))) {
    t.preventDefault();
    return;
  }
  let n = r.state.selection;
  if (!(n instanceof R) || !n.$from.sameParent(n.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !r.someProp("handleTextInput", (s) => s(r, n.$from.pos, n.$to.pos, i)) && r.dispatch(r.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function yn(r) {
  return { left: r.clientX, top: r.clientY };
}
function tc(r, e) {
  let t = e.x - r.clientX, n = e.y - r.clientY;
  return t * t + n * n < 100;
}
function Tr(r, e, t, n, i) {
  if (n == -1)
    return !1;
  let s = r.state.doc.resolve(n);
  for (let o = s.depth + 1; o > 0; o--)
    if (r.someProp(e, (l) => o > s.depth ? l(r, t, s.nodeAfter, s.before(o), i, !0) : l(r, t, s.node(o), s.before(o), i, !1)))
      return !0;
  return !1;
}
function ft(r, e, t) {
  r.focused || r.focus();
  let n = r.state.tr.setSelection(e);
  t == "pointer" && n.setMeta("pointer", !0), r.dispatch(n);
}
function nc(r, e) {
  if (e == -1)
    return !1;
  let t = r.state.doc.resolve(e), n = t.nodeAfter;
  return n && n.isAtom && O.isSelectable(n) ? (ft(r, new O(t), "pointer"), !0) : !1;
}
function rc(r, e) {
  if (e == -1)
    return !1;
  let t = r.state.selection, n, i;
  t instanceof O && (n = t.node);
  let s = r.state.doc.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let l = o > s.depth ? s.nodeAfter : s.node(o);
    if (O.isSelectable(l)) {
      n && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
      break;
    }
  }
  return i != null ? (ft(r, O.create(r.state.doc, i), "pointer"), !0) : !1;
}
function ic(r, e, t, n, i) {
  return Tr(r, "handleClickOn", e, t, n) || r.someProp("handleClick", (s) => s(r, e, n)) || (i ? rc(r, t) : nc(r, t));
}
function sc(r, e, t, n) {
  return Tr(r, "handleDoubleClickOn", e, t, n) || r.someProp("handleDoubleClick", (i) => i(r, e, n));
}
function oc(r, e, t, n) {
  return Tr(r, "handleTripleClickOn", e, t, n) || r.someProp("handleTripleClick", (i) => i(r, e, n)) || lc(r, t, n);
}
function lc(r, e, t) {
  if (t.button != 0)
    return !1;
  let n = r.state.doc;
  if (e == -1)
    return n.inlineContent ? (ft(r, R.create(n, 0, n.content.size), "pointer"), !0) : !1;
  let i = n.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s), l = i.before(s);
    if (o.inlineContent)
      ft(r, R.create(n, l + 1, l + 1 + o.content.size), "pointer");
    else if (O.isSelectable(o))
      ft(r, O.create(n, l), "pointer");
    else
      continue;
    return !0;
  }
}
function Er(r) {
  return ln(r);
}
const co = le ? "metaKey" : "ctrlKey";
Q.mousedown = (r, e) => {
  let t = e;
  r.input.shiftKey = t.shiftKey;
  let n = Er(r), i = Date.now(), s = "singleClick";
  i - r.input.lastClick.time < 500 && tc(t, r.input.lastClick) && !t[co] && (r.input.lastClick.type == "singleClick" ? s = "doubleClick" : r.input.lastClick.type == "doubleClick" && (s = "tripleClick")), r.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s };
  let o = r.posAtCoords(yn(t));
  o && (s == "singleClick" ? (r.input.mouseDown && r.input.mouseDown.done(), r.input.mouseDown = new ac(r, o, t, !!n)) : (s == "doubleClick" ? sc : oc)(r, o.pos, o.inside, t) ? t.preventDefault() : De(r, "pointer"));
};
class ac {
  constructor(e, t, n, i) {
    this.view = e, this.pos = t, this.event = n, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!n[co], this.allowDefault = n.shiftKey;
    let s, o;
    if (t.inside > -1)
      s = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let f = e.state.doc.resolve(t.pos);
      s = f.parent, o = f.depth ? f.before() : 0;
    }
    const l = i ? null : n.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a ? a.dom : null;
    let { selection: c } = e.state;
    (n.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof O && c.from <= o && c.to > o) && (this.mightDrag = {
      node: s,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && he && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), De(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => xe(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(yn(e))), this.updateAllowDefault(e), this.allowDefault || !t ? De(this.view, "pointer") : ic(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Z && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    X && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (ft(this.view, v.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : De(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), De(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Q.touchstart = (r) => {
  r.input.lastTouch = Date.now(), Er(r), De(r, "pointer");
};
Q.touchmove = (r) => {
  r.input.lastTouch = Date.now(), De(r, "pointer");
};
Q.contextmenu = (r) => Er(r);
function fo(r, e) {
  return r.composing ? !0 : Z && Math.abs(e.timeStamp - r.input.compositionEndedAt) < 500 ? (r.input.compositionEndedAt = -2e8, !0) : !1;
}
const cc = ce ? 5e3 : -1;
ee.compositionstart = ee.compositionupdate = (r) => {
  if (!r.composing) {
    r.domObserver.flush();
    let { state: e } = r, t = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((n) => n.type.spec.inclusive === !1)))
      r.markCursor = r.state.storedMarks || t.marks(), ln(r, !0), r.markCursor = null;
    else if (ln(r), he && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let n = r.domSelectionRange();
      for (let i = n.focusNode, s = n.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          r.domSelection().collapse(o, o.nodeValue.length);
          break;
        } else
          i = o, s = -1;
      }
    }
    r.input.composing = !0;
  }
  uo(r, cc);
};
ee.compositionend = (r, e) => {
  r.composing && (r.input.composing = !1, r.input.compositionEndedAt = e.timeStamp, uo(r, 20));
};
function uo(r, e) {
  clearTimeout(r.input.composingTimeout), e > -1 && (r.input.composingTimeout = setTimeout(() => ln(r), e));
}
function ho(r) {
  for (r.composing && (r.input.composing = !1, r.input.compositionEndedAt = fc()); r.input.compositionNodes.length > 0; )
    r.input.compositionNodes.pop().markParentsDirty();
}
function fc() {
  let r = document.createEvent("Event");
  return r.initEvent("event", !0, !0), r.timeStamp;
}
function ln(r, e = !1) {
  if (!(ce && r.domObserver.flushingSoon >= 0)) {
    if (r.domObserver.forceFlush(), ho(r), e || r.docView && r.docView.dirty) {
      let t = Cr(r);
      return t && !t.eq(r.state.selection) ? r.dispatch(r.state.tr.setSelection(t)) : r.updateState(r.state), !0;
    }
    return !1;
  }
}
function uc(r, e) {
  if (!r.dom.parentNode)
    return;
  let t = r.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let n = getSelection(), i = document.createRange();
  i.selectNodeContents(e), r.dom.blur(), n.removeAllRanges(), n.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), r.focus();
  }, 50);
}
const mt = te && ve < 15 || pt && da < 604;
Q.copy = ee.cut = (r, e) => {
  let t = e, n = r.state.selection, i = t.type == "cut";
  if (n.empty)
    return;
  let s = mt ? null : t.clipboardData, o = n.content(), { dom: l, text: a } = no(r, o);
  s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : uc(r, l), i && r.dispatch(r.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function dc(r) {
  return r.openStart == 0 && r.openEnd == 0 && r.content.childCount == 1 ? r.content.firstChild : null;
}
function hc(r, e) {
  if (!r.dom.parentNode)
    return;
  let t = r.input.shiftKey || r.state.selection.$from.parent.type.spec.code, n = r.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (n.contentEditable = "true"), n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus(), setTimeout(() => {
    r.focus(), n.parentNode && n.parentNode.removeChild(n), t ? Bt(r, n.value, null, r.input.shiftKey, e) : Bt(r, n.textContent, n.innerHTML, r.input.shiftKey, e);
  }, 50);
}
function Bt(r, e, t, n, i) {
  let s = ro(r, e, t, n, r.state.selection.$from);
  if (r.someProp("handlePaste", (a) => a(r, i, s || M.empty)))
    return !0;
  if (!s)
    return !1;
  let o = dc(s), l = o ? r.state.tr.replaceSelectionWith(o, r.input.shiftKey) : r.state.tr.replaceSelection(s);
  return r.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
ee.paste = (r, e) => {
  let t = e;
  if (r.composing && !ce)
    return;
  let n = mt ? null : t.clipboardData;
  n && Bt(r, n.getData("text/plain"), n.getData("text/html"), r.input.shiftKey, t) ? t.preventDefault() : hc(r, t);
};
class pc {
  constructor(e, t) {
    this.slice = e, this.move = t;
  }
}
const po = le ? "altKey" : "ctrlKey";
Q.dragstart = (r, e) => {
  let t = e, n = r.input.mouseDown;
  if (n && n.done(), !t.dataTransfer)
    return;
  let i = r.state.selection, s = i.empty ? null : r.posAtCoords(yn(t));
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof O ? i.to - 1 : i.to))) {
    if (n && n.mightDrag)
      r.dispatch(r.state.tr.setSelection(O.create(r.state.doc, n.mightDrag.pos)));
    else if (t.target && t.target.nodeType == 1) {
      let c = r.docView.nearestDesc(t.target, !0);
      c && c.node.type.spec.draggable && c != r.docView && r.dispatch(r.state.tr.setSelection(O.create(r.state.doc, c.posBefore)));
    }
  }
  let o = r.state.selection.content(), { dom: l, text: a } = no(r, o);
  t.dataTransfer.clearData(), t.dataTransfer.setData(mt ? "Text" : "text/html", l.innerHTML), t.dataTransfer.effectAllowed = "copyMove", mt || t.dataTransfer.setData("text/plain", a), r.dragging = new pc(o, !t[po]);
};
Q.dragend = (r) => {
  let e = r.dragging;
  window.setTimeout(() => {
    r.dragging == e && (r.dragging = null);
  }, 50);
};
ee.dragover = ee.dragenter = (r, e) => e.preventDefault();
ee.drop = (r, e) => {
  let t = e, n = r.dragging;
  if (r.dragging = null, !t.dataTransfer)
    return;
  let i = r.posAtCoords(yn(t));
  if (!i)
    return;
  let s = r.state.doc.resolve(i.pos), o = n && n.slice;
  o ? r.someProp("transformPasted", (m) => {
    o = m(o, r);
  }) : o = ro(r, t.dataTransfer.getData(mt ? "Text" : "text/plain"), mt ? null : t.dataTransfer.getData("text/html"), !1, s);
  let l = !!(n && !t[po]);
  if (r.someProp("handleDrop", (m) => m(r, t, o || M.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!o)
    return;
  t.preventDefault();
  let a = o ? Yl(r.state.doc, s.pos, o) : s.pos;
  a == null && (a = s.pos);
  let c = r.state.tr;
  l && c.deleteSelection();
  let f = c.mapping.map(a), u = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, d = c.doc;
  if (u ? c.replaceRangeWith(f, f, o.content.firstChild) : c.replaceRange(f, f, o), c.doc.eq(d))
    return;
  let h = c.doc.resolve(f);
  if (u && O.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild))
    c.setSelection(new O(h));
  else {
    let m = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((g, y, S, w) => m = w), c.setSelection(wr(r, h, c.doc.resolve(m)));
  }
  r.focus(), r.dispatch(c.setMeta("uiEvent", "drop"));
};
Q.focus = (r) => {
  r.input.lastFocus = Date.now(), r.focused || (r.domObserver.stop(), r.dom.classList.add("ProseMirror-focused"), r.domObserver.start(), r.focused = !0, setTimeout(() => {
    r.docView && r.hasFocus() && !r.domObserver.currentSelection.eq(r.domSelectionRange()) && xe(r);
  }, 20));
};
Q.blur = (r, e) => {
  let t = e;
  r.focused && (r.domObserver.stop(), r.dom.classList.remove("ProseMirror-focused"), r.domObserver.start(), t.relatedTarget && r.dom.contains(t.relatedTarget) && r.domObserver.currentSelection.clear(), r.focused = !1);
};
Q.beforeinput = (r, e) => {
  if (X && ce && e.inputType == "deleteContentBackward") {
    r.domObserver.flushSoon();
    let { domChangeCount: n } = r.input;
    setTimeout(() => {
      if (r.input.domChangeCount != n || (r.dom.blur(), r.focus(), r.someProp("handleKeyDown", (s) => s(r, Le(8, "Backspace")))))
        return;
      let { $cursor: i } = r.state.selection;
      i && i.pos > 0 && r.dispatch(r.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let r in ee)
  Q[r] = ee[r];
function Ft(r, e) {
  if (r == e)
    return !0;
  for (let t in r)
    if (r[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in r))
      return !1;
  return !0;
}
class Nr {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || qe, this.side = this.spec.side || 0;
  }
  map(e, t, n, i) {
    let { pos: s, deleted: o } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return o ? null : new fe(s - n, s - n, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Nr && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Ft(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Ae {
  constructor(e, t) {
    this.attrs = e, this.spec = t || qe;
  }
  map(e, t, n, i) {
    let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - n, o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - n;
    return s >= o ? null : new fe(s, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Ae && Ft(this.attrs, e.attrs) && Ft(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Ae;
  }
  destroy() {
  }
}
class Dr {
  constructor(e, t) {
    this.attrs = e, this.spec = t || qe;
  }
  map(e, t, n, i) {
    let s = e.mapResult(t.from + i, 1);
    if (s.deleted)
      return null;
    let o = e.mapResult(t.to + i, -1);
    return o.deleted || o.pos <= s.pos ? null : new fe(s.pos - n, o.pos - n, this);
  }
  valid(e, t) {
    let { index: n, offset: i } = e.content.findIndex(t.from), s;
    return i == t.from && !(s = e.child(n)).isText && i + s.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Dr && Ft(this.attrs, e.attrs) && Ft(this.spec, e.spec);
  }
  destroy() {
  }
}
class fe {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.from = e, this.to = t, this.type = n;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new fe(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, n) {
    return this.type.map(e, this, t, n);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, n) {
    return new fe(e, e, new Nr(t, n));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, n, i) {
    return new fe(e, t, new Ae(n, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, n, i) {
    return new fe(e, t, new Dr(n, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Ae;
  }
}
const it = [], qe = {};
class W {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : it, this.children = t.length ? t : it;
  }
  /**
  Create a set of decorations, using the structure of the given
  document.
  */
  static create(e, t) {
    return t.length ? an(t, e, 0, qe) : K;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, n) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, n), i;
  }
  findInner(e, t, n, i, s) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!s || s(l.spec)) && n.push(l.copy(l.from + i, l.to + i));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, n, i + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, n) {
    return this == K || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, n || qe);
  }
  /**
  @internal
  */
  mapInner(e, t, n, i, s) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, n, i);
      a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? mc(this.children, o || [], e, t, n, i, s) : o ? new W(o.sort(Ke), it) : K;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Needs access to the current document to
  create the appropriate tree structure.
  */
  add(e, t) {
    return t.length ? this == K ? W.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, n) {
    let i, s = 0;
    e.forEach((l, a) => {
      let c = a + n, f;
      if (f = go(t, l, c)) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < a; )
          s += 3;
        i[s] == a ? i[s + 2] = i[s + 2].addInner(l, f, c + 1) : i.splice(s, 0, a, a + l.nodeSize, an(f, l, c + 1, qe)), s += 3;
      }
    });
    let o = mo(s ? yo(t) : t, -n);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new W(o.length ? this.local.concat(o).sort(Ke) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == K ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let n = this.children, i = this.local;
    for (let s = 0; s < n.length; s += 3) {
      let o, l = n[s] + t, a = n[s + 1] + t;
      for (let f = 0, u; f < e.length; f++)
        (u = e[f]) && u.from > l && u.to < a && (e[f] = null, (o || (o = [])).push(u));
      if (!o)
        continue;
      n == this.children && (n = this.children.slice());
      let c = n[s + 2].removeInner(o, l + 1);
      c != K ? n[s + 2] = c : (n.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, o; s < e.length; s++)
        if (o = e[s])
          for (let l = 0; l < i.length; l++)
            i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return n == this.children && i == this.local ? this : i.length || n.length ? new W(i, n) : K;
  }
  /**
  @internal
  */
  forChild(e, t) {
    if (this == K)
      return this;
    if (t.isLeaf)
      return W.empty;
    let n, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (n = this.children[l + 2]);
        break;
      }
    let s = e + 1, o = s + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > s && a.type instanceof Ae) {
        let c = Math.max(s, a.from) - s, f = Math.min(o, a.to) - s;
        c < f && (i || (i = [])).push(a.copy(c, f));
      }
    }
    if (i) {
      let l = new W(i.sort(Ke), it);
      return n ? new Te([l, n]) : l;
    }
    return n || K;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof W) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return vr(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == K)
      return it;
    if (e.inlineContent || !this.local.some(Ae.is))
      return this.local;
    let t = [];
    for (let n = 0; n < this.local.length; n++)
      this.local[n].type instanceof Ae || t.push(this.local[n]);
    return t;
  }
}
W.empty = new W([], []);
W.removeOverlap = vr;
const K = W.empty;
class Te {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const n = this.members.map((i) => i.map(e, t, qe));
    return Te.from(n);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return W.empty;
    let n = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, t);
      s != K && (s instanceof Te ? n = n.concat(s.members) : n.push(s));
    }
    return Te.from(n);
  }
  eq(e) {
    if (!(e instanceof Te) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, n = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (s.length)
        if (!t)
          t = s;
        else {
          n && (t = t.slice(), n = !1);
          for (let o = 0; o < s.length; o++)
            t.push(s[o]);
        }
    }
    return t ? vr(n ? t : t.sort(Ke)) : it;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return K;
      case 1:
        return e[0];
      default:
        return new Te(e.every((t) => t instanceof W) ? e : e.reduce((t, n) => t.concat(n instanceof W ? n : n.members), []));
    }
  }
}
function mc(r, e, t, n, i, s, o) {
  let l = r.slice();
  for (let c = 0, f = s; c < t.maps.length; c++) {
    let u = 0;
    t.maps[c].forEach((d, h, m, g) => {
      let y = g - m - (h - d);
      for (let S = 0; S < l.length; S += 3) {
        let w = l[S + 1];
        if (w < 0 || d > w + f - u)
          continue;
        let P = l[S] + f - u;
        h >= P ? l[S + 1] = d <= P ? -2 : -1 : m >= i && y && (l[S] += y, l[S + 1] += y);
      }
      u += y;
    }), f = t.maps[c].map(f, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let f = t.map(r[c] + s), u = f - i;
      if (u < 0 || u >= n.content.size) {
        a = !0;
        continue;
      }
      let d = t.map(r[c + 1] + s, -1), h = d - i, { index: m, offset: g } = n.content.findIndex(u), y = n.maybeChild(m);
      if (y && g == u && g + y.nodeSize == h) {
        let S = l[c + 2].mapInner(t, y, f + 1, r[c] + s + 1, o);
        S != K ? (l[c] = u, l[c + 1] = h, l[c + 2] = S) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = gc(l, r, e, t, i, s, o), f = an(c, n, 0, o);
    e = f.local;
    for (let u = 0; u < l.length; u += 3)
      l[u + 1] < 0 && (l.splice(u, 3), u -= 3);
    for (let u = 0, d = 0; u < f.children.length; u += 3) {
      let h = f.children[u];
      for (; d < l.length && l[d] < h; )
        d += 3;
      l.splice(d, 0, f.children[u], f.children[u + 1], f.children[u + 2]);
    }
  }
  return new W(e.sort(Ke), l);
}
function mo(r, e) {
  if (!e || !r.length)
    return r;
  let t = [];
  for (let n = 0; n < r.length; n++) {
    let i = r[n];
    t.push(new fe(i.from + e, i.to + e, i.type));
  }
  return t;
}
function gc(r, e, t, n, i, s, o) {
  function l(a, c) {
    for (let f = 0; f < a.local.length; f++) {
      let u = a.local[f].map(n, i, c);
      u ? t.push(u) : o.onRemove && o.onRemove(a.local[f].spec);
    }
    for (let f = 0; f < a.children.length; f += 3)
      l(a.children[f + 2], a.children[f] + c + 1);
  }
  for (let a = 0; a < r.length; a += 3)
    r[a + 1] == -1 && l(r[a + 2], e[a] + s + 1);
  return t;
}
function go(r, e, t) {
  if (e.isLeaf)
    return null;
  let n = t + e.nodeSize, i = null;
  for (let s = 0, o; s < r.length; s++)
    (o = r[s]) && o.from > t && o.to < n && ((i || (i = [])).push(o), r[s] = null);
  return i;
}
function yo(r) {
  let e = [];
  for (let t = 0; t < r.length; t++)
    r[t] != null && e.push(r[t]);
  return e;
}
function an(r, e, t, n) {
  let i = [], s = !1;
  e.forEach((l, a) => {
    let c = go(r, l, a + t);
    if (c) {
      s = !0;
      let f = an(c, l, t + a + 1, n);
      f != K && i.push(a, a + l.nodeSize, f);
    }
  });
  let o = mo(s ? yo(r) : r, -t).sort(Ke);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (n.onRemove && n.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || i.length ? new W(o, i) : K;
}
function Ke(r, e) {
  return r.from - e.from || r.to - e.to;
}
function vr(r) {
  let e = r;
  for (let t = 0; t < e.length - 1; t++) {
    let n = e[t];
    if (n.from != n.to)
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == n.from) {
          s.to != n.to && (e == r && (e = r.slice()), e[i] = s.copy(s.from, n.to), Hi(e, i + 1, s.copy(n.to, s.to)));
          continue;
        } else {
          s.from < n.to && (e == r && (e = r.slice()), e[t] = n.copy(n.from, s.from), Hi(e, i, n.copy(s.from, n.to)));
          break;
        }
      }
  }
  return e;
}
function Hi(r, e, t) {
  for (; e < r.length && Ke(t, r[e]) > 0; )
    e++;
  r.splice(e, 0, t);
}
function qn(r) {
  let e = [];
  return r.someProp("decorations", (t) => {
    let n = t(r.state);
    n && n != K && e.push(n);
  }), r.cursorWrapper && e.push(W.create(r.state.doc, [r.cursorWrapper.deco])), Te.from(e);
}
const yc = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, kc = te && ve <= 11;
class bc {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class Sc {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new bc(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = window.MutationObserver && new window.MutationObserver((n) => {
      for (let i = 0; i < n.length; i++)
        this.queue.push(n[i]);
      te && ve <= 11 && n.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), kc && (this.onCharData = (n) => {
      this.queue.push({ target: n.target, type: "characterData", oldValue: n.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, yc)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (zi(this.view)) {
      if (this.suppressingSelectionUpdates)
        return xe(this.view);
      if (te && ve <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Ye(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), n;
    for (let s = e.focusNode; s; s = Pt(s))
      t.add(s);
    for (let s = e.anchorNode; s; s = Pt(s))
      if (t.has(s)) {
        n = s;
        break;
      }
    let i = n && this.view.docView.nearestDesc(n);
    if (i && i.ignoreMutation({
      type: "selection",
      target: n.nodeType == 3 ? n.parentNode : n
    }))
      return this.setCurSelection(), !0;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.observer ? this.observer.takeRecords() : [];
    this.queue.length && (t = this.queue.concat(t), this.queue.length = 0);
    let n = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && zi(e) && !this.ignoreSelectionChange(n), s = -1, o = -1, l = !1, a = [];
    if (e.editable)
      for (let f = 0; f < t.length; f++) {
        let u = this.registerMutation(t[f], a);
        u && (s = s < 0 ? u.from : Math.min(u.from, s), o = o < 0 ? u.to : Math.max(u.to, o), u.typeOver && (l = !0));
      }
    if (he && a.length > 1) {
      let f = a.filter((u) => u.nodeName == "BR");
      if (f.length == 2) {
        let u = f[0], d = f[1];
        u.parentNode && u.parentNode.parentNode == d.parentNode ? d.remove() : u.remove();
      }
    }
    let c = null;
    s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && pn(n) && (c = Cr(e)) && c.eq(v.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, xe(e), this.currentSelection.set(n), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), xc(e)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || xe(e), this.currentSelection.set(n));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let n = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (n == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !n || n.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let f = 0; f < e.addedNodes.length; f++)
        t.push(e.addedNodes[f]);
      if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target))
        return { from: n.posBefore, to: n.posAfter };
      let i = e.previousSibling, s = e.nextSibling;
      if (te && ve <= 11 && e.addedNodes.length)
        for (let f = 0; f < e.addedNodes.length; f++) {
          let { previousSibling: u, nextSibling: d } = e.addedNodes[f];
          (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (i = u), (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (s = d);
        }
      let o = i && i.parentNode == e.target ? ie(i) + 1 : 0, l = n.localPosFromDOM(e.target, o, -1), a = s && s.parentNode == e.target ? ie(s) : e.target.childNodes.length, c = n.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else
      return e.type == "attributes" ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border } : {
        from: n.posAtStart,
        to: n.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: e.target.nodeValue == e.oldValue
      };
  }
}
let _i = /* @__PURE__ */ new WeakMap(), qi = !1;
function xc(r) {
  if (!_i.has(r) && (_i.set(r, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(r.dom).whiteSpace) !== -1)) {
    if (r.requiresGeckoHackNode = he, qi)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), qi = !0;
  }
}
function Mc(r) {
  let e;
  function t(a) {
    a.preventDefault(), a.stopImmediatePropagation(), e = a.getTargetRanges()[0];
  }
  r.dom.addEventListener("beforeinput", t, !0), document.execCommand("indent"), r.dom.removeEventListener("beforeinput", t, !0);
  let n = e.startContainer, i = e.startOffset, s = e.endContainer, o = e.endOffset, l = r.domAtPos(r.state.selection.anchor);
  return Ye(l.node, l.offset, s, o) && ([n, i, s, o] = [s, o, n, i]), { anchorNode: n, anchorOffset: i, focusNode: s, focusOffset: o };
}
function Cc(r, e, t) {
  let { node: n, fromOffset: i, toOffset: s, from: o, to: l } = r.docView.parseRange(e, t), a = r.domSelectionRange(), c, f = a.anchorNode;
  if (f && r.dom.contains(f.nodeType == 1 ? f : f.parentNode) && (c = [{ node: f, offset: a.anchorOffset }], pn(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), X && r.input.lastKeyCode === 8)
    for (let y = s; y > i; y--) {
      let S = n.childNodes[y - 1], w = S.pmViewDesc;
      if (S.nodeName == "BR" && !w) {
        s = y;
        break;
      }
      if (!w || w.size)
        break;
    }
  let u = r.state.doc, d = r.someProp("domParser") || ut.fromSchema(r.state.schema), h = u.resolve(o), m = null, g = d.parse(n, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: s,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: wc,
    context: h
  });
  if (c && c[0].pos != null) {
    let y = c[0].pos, S = c[1] && c[1].pos;
    S == null && (S = y), m = { anchor: y + o, head: S + o };
  }
  return { doc: g, sel: m, from: o, to: l };
}
function wc(r) {
  let e = r.pmViewDesc;
  if (e)
    return e.parseRule();
  if (r.nodeName == "BR" && r.parentNode) {
    if (Z && /^(ul|ol)$/i.test(r.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (r.parentNode.lastChild == r || Z && /^(tr|table)$/i.test(r.parentNode.nodeName))
      return { ignore: !0 };
  } else if (r.nodeName == "IMG" && r.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Oc = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Tc(r, e, t, n, i) {
  if (e < 0) {
    let E = r.input.lastSelectionTime > Date.now() - 50 ? r.input.lastSelectionOrigin : null, Ce = Cr(r, E);
    if (Ce && !r.state.selection.eq(Ce)) {
      if (X && ce && r.input.lastKeyCode === 13 && Date.now() - 100 < r.input.lastKeyCodeTime && r.someProp("handleKeyDown", (Cn) => Cn(r, Le(13, "Enter"))))
        return;
      let bt = r.state.tr.setSelection(Ce);
      E == "pointer" ? bt.setMeta("pointer", !0) : E == "key" && bt.scrollIntoView(), r.dispatch(bt);
    }
    return;
  }
  let s = r.state.doc.resolve(e), o = s.sharedDepth(t);
  e = s.before(o + 1), t = r.state.doc.resolve(t).after(o + 1);
  let l = r.state.selection, a = Cc(r, e, t), c = r.state.doc, f = c.slice(a.from, a.to), u, d;
  r.input.lastKeyCode === 8 && Date.now() - 100 < r.input.lastKeyCodeTime ? (u = r.state.selection.to, d = "end") : (u = r.state.selection.from, d = "start"), r.input.lastKeyCode = null;
  let h = Dc(f.content, a.doc.content, a.from, u, d);
  if ((pt && r.input.lastIOSEnter > Date.now() - 225 || ce) && i.some((E) => E.nodeType == 1 && !Oc.test(E.nodeName)) && (!h || h.endA >= h.endB) && r.someProp("handleKeyDown", (E) => E(r, Le(13, "Enter")))) {
    r.input.lastIOSEnter = 0;
    return;
  }
  if (!h)
    if (n && l instanceof R && !l.empty && l.$head.sameParent(l.$anchor) && !r.composing && !(a.sel && a.sel.anchor != a.sel.head))
      h = { start: l.from, endA: l.to, endB: l.to };
    else {
      if (a.sel) {
        let E = Ki(r, r.state.doc, a.sel);
        E && !E.eq(r.state.selection) && r.dispatch(r.state.tr.setSelection(E));
      }
      return;
    }
  if (X && r.cursorWrapper && a.sel && a.sel.anchor == r.cursorWrapper.deco.from && a.sel.head == a.sel.anchor) {
    let E = h.endB - h.start;
    a.sel = { anchor: a.sel.anchor + E, head: a.sel.anchor + E };
  }
  r.input.domChangeCount++, r.state.selection.from < r.state.selection.to && h.start == h.endB && r.state.selection instanceof R && (h.start > r.state.selection.from && h.start <= r.state.selection.from + 2 && r.state.selection.from >= a.from ? h.start = r.state.selection.from : h.endA < r.state.selection.to && h.endA >= r.state.selection.to - 2 && r.state.selection.to <= a.to && (h.endB += r.state.selection.to - h.endA, h.endA = r.state.selection.to)), te && ve <= 11 && h.endB == h.start + 1 && h.endA == h.start && h.start > a.from && a.doc.textBetween(h.start - a.from - 1, h.start - a.from + 1) == "  " && (h.start--, h.endA--, h.endB--);
  let m = a.doc.resolveNoCache(h.start - a.from), g = a.doc.resolveNoCache(h.endB - a.from), y = c.resolve(h.start), S = m.sameParent(g) && m.parent.inlineContent && y.end() >= h.endA, w;
  if ((pt && r.input.lastIOSEnter > Date.now() - 225 && (!S || i.some((E) => E.nodeName == "DIV" || E.nodeName == "P")) || !S && m.pos < a.doc.content.size && (w = v.findFrom(a.doc.resolve(m.pos + 1), 1, !0)) && w.head == g.pos) && r.someProp("handleKeyDown", (E) => E(r, Le(13, "Enter")))) {
    r.input.lastIOSEnter = 0;
    return;
  }
  if (r.state.selection.anchor > h.start && Nc(c, h.start, h.endA, m, g) && r.someProp("handleKeyDown", (E) => E(r, Le(8, "Backspace")))) {
    ce && X && r.domObserver.suppressSelectionUpdates();
    return;
  }
  X && ce && h.endB == h.start && (r.input.lastAndroidDelete = Date.now()), ce && !S && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && a.sel && a.sel.anchor == a.sel.head && a.sel.head == h.endA && (h.endB -= 2, g = a.doc.resolveNoCache(h.endB - a.from), setTimeout(() => {
    r.someProp("handleKeyDown", function(E) {
      return E(r, Le(13, "Enter"));
    });
  }, 20));
  let P = h.start, V = h.endA, z, se, Y;
  if (S) {
    if (m.pos == g.pos)
      te && ve <= 11 && m.parentOffset == 0 && (r.domObserver.suppressSelectionUpdates(), setTimeout(() => xe(r), 20)), z = r.state.tr.delete(P, V), se = c.resolve(h.start).marksAcross(c.resolve(h.endA));
    else if (
      // Adding or removing a mark
      h.endA == h.endB && (Y = Ec(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, h.endA - y.start())))
    )
      z = r.state.tr, Y.type == "add" ? z.addMark(P, V, Y.mark) : z.removeMark(P, V, Y.mark);
    else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let E = m.parent.textBetween(m.parentOffset, g.parentOffset);
      if (r.someProp("handleTextInput", (Ce) => Ce(r, P, V, E)))
        return;
      z = r.state.tr.insertText(E, P, V);
    }
  }
  if (z || (z = r.state.tr.replace(P, V, a.doc.slice(h.start - a.from, h.endB - a.from))), a.sel) {
    let E = Ki(r, z.doc, a.sel);
    E && !(X && ce && r.composing && E.empty && (h.start != h.endB || r.input.lastAndroidDelete < Date.now() - 100) && (E.head == P || E.head == z.mapping.map(V) - 1) || te && E.empty && E.head == P) && z.setSelection(E);
  }
  se && z.ensureMarks(se), r.dispatch(z.scrollIntoView());
}
function Ki(r, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : wr(r, e.resolve(t.anchor), e.resolve(t.head));
}
function Ec(r, e) {
  let t = r.firstChild.marks, n = e.firstChild.marks, i = t, s = n, o, l, a;
  for (let f = 0; f < n.length; f++)
    i = n[f].removeFromSet(i);
  for (let f = 0; f < t.length; f++)
    s = t[f].removeFromSet(s);
  if (i.length == 1 && s.length == 0)
    l = i[0], o = "add", a = (f) => f.mark(l.addToSet(f.marks));
  else if (i.length == 0 && s.length == 1)
    l = s[0], o = "remove", a = (f) => f.mark(l.removeFromSet(f.marks));
  else
    return null;
  let c = [];
  for (let f = 0; f < e.childCount; f++)
    c.push(a(e.child(f)));
  if (b.from(c).eq(r))
    return { mark: l, type: o };
}
function Nc(r, e, t, n, i) {
  if (!n.parent.isTextblock || // The content must have shrunk
  t - e <= i.pos - n.pos || // newEnd must point directly at or after the end of the block that newStart points into
  Kn(n, !0, !1) < i.pos)
    return !1;
  let s = r.resolve(e);
  if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1;
  let o = r.resolve(Kn(s, !0, !0));
  return !o.parent.isTextblock || o.pos > t || Kn(o, !0, !1) < t ? !1 : n.parent.content.cut(n.parentOffset).eq(o.parent.content);
}
function Kn(r, e, t) {
  let n = r.depth, i = e ? r.end() : r.pos;
  for (; n > 0 && (e || r.indexAfter(n) == r.node(n).childCount); )
    n--, i++, e = !1;
  if (t) {
    let s = r.node(n).maybeChild(r.indexAfter(n));
    for (; s && !s.isLeaf; )
      s = s.firstChild, i++;
  }
  return i;
}
function Dc(r, e, t, n, i) {
  let s = r.findDiffStart(e, t);
  if (s == null)
    return null;
  let { a: o, b: l } = r.findDiffEnd(e, t + r.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    n -= o + a - s;
  }
  if (o < s && r.size < e.size) {
    let a = n <= s && n >= o ? s - n : 0;
    s -= a, l = s + (l - o), o = s;
  } else if (l < s) {
    let a = n <= s && n >= l ? s - n : 0;
    s -= a, o = s + (o - l), l = s;
  }
  return { start: s, endA: o, endB: l };
}
class vc {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Ga(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Zi), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Gi(this), Yi(this), this.nodeViews = Xi(this), this.docView = Ai(this.state.doc, Ui(this), qn(this), this.dom, this), this.domObserver = new Sc(this, (n, i, s, o) => Tc(this, n, i, s, o)), this.domObserver.start(), Xa(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && mr(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Zi), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let n in this._props)
      t[n] = this._props[n];
    t.state = this.state;
    for (let n in e)
      t[n] = e[n];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    let n = this.state, i = !1, s = !1;
    e.storedMarks && this.composing && (ho(this), s = !0), this.state = e;
    let o = n.plugins != e.plugins || this._props.plugins != t.plugins;
    if (o || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let d = Xi(this);
      Rc(d, this.nodeViews) && (this.nodeViews = d, i = !0);
    }
    (o || t.handleDOMEvents != this._props.handleDOMEvents) && mr(this), this.editable = Gi(this), Yi(this);
    let l = qn(this), a = Ui(this), c = n.plugins != e.plugins && !n.doc.eq(e.doc) ? "reset" : e.scrollToSelection > n.scrollToSelection ? "to selection" : "preserve", f = i || !this.docView.matchesNode(e.doc, a, l);
    (f || !e.selection.eq(n.selection)) && (s = !0);
    let u = c == "preserve" && s && this.dom.style.overflowAnchor == null && ma(this);
    if (s) {
      this.domObserver.stop();
      let d = f && (te || X) && !this.composing && !n.selection.empty && !e.selection.empty && Ac(n.selection, e.selection);
      if (f) {
        let h = X ? this.trackWrites = this.domSelectionRange().focusNode : null;
        (i || !this.docView.update(e.doc, a, l, this)) && (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = Ai(e.doc, a, l, this.dom, this)), h && !this.trackWrites && (d = !0);
      }
      d || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && $a(this)) ? xe(this, d) : (Qs(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(n), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : u && ga(u);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this)))
      if (this.state.selection instanceof O) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && Ti(this, t.getBoundingClientRect(), e);
      } else
        Ti(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let n = this.directPlugins[t];
        n.spec.view && this.pluginViews.push(n.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let n = this.state.plugins[t];
        n.spec.view && this.pluginViews.push(n.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let n = this.pluginViews[t];
        n.update && n.update(this, e);
      }
  }
  someProp(e, t) {
    let n = this._props && this._props[e], i;
    if (n != null && (i = t ? t(n) : n))
      return i;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let s = this.state.plugins;
    if (s)
      for (let o = 0; o < s.length; o++) {
        let l = s[o].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (te) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && ya(this.dom), xe(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return Ma(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return _s(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, n = -1) {
    let i = this.docView.posFromDOM(e, t, n);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return Ea(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return Bt(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return Bt(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (Za(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], qn(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null);
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return ec(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    return Z && this.root.nodeType === 11 && fa(this.dom.ownerDocument) == this.dom ? Mc(this) : this.domSelection();
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function Ui(r) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(r.editable), e.translate = "no", r.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(r.state)), t)
      for (let n in t)
        n == "class" && (e.class += " " + t[n]), n == "style" ? e.style = (e.style ? e.style + ";" : "") + t[n] : !e[n] && n != "contenteditable" && n != "nodeName" && (e[n] = String(t[n]));
  }), [fe.node(0, r.state.doc.content.size, e)];
}
function Yi(r) {
  if (r.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), r.cursorWrapper = { dom: e, deco: fe.widget(r.state.selection.head, e, { raw: !0, marks: r.markCursor }) };
  } else
    r.cursorWrapper = null;
}
function Gi(r) {
  return !r.someProp("editable", (e) => e(r.state) === !1);
}
function Ac(r, e) {
  let t = Math.min(r.$anchor.sharedDepth(r.head), e.$anchor.sharedDepth(e.head));
  return r.$anchor.start(t) != e.$anchor.start(t);
}
function Xi(r) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(n) {
    for (let i in n)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = n[i]);
  }
  return r.someProp("nodeViews", t), r.someProp("markViews", t), e;
}
function Rc(r, e) {
  let t = 0, n = 0;
  for (let i in r) {
    if (r[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    n++;
  return t != n;
}
function Zi(r) {
  if (r.spec.state || r.spec.filterTransaction || r.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Ie = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, cn = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Qi = typeof navigator < "u" && /Chrome\/(\d+)/.exec(navigator.userAgent), Ic = typeof navigator < "u" && /Mac/.test(navigator.platform), Pc = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Bc = Ic || Qi && +Qi[1] < 57;
for (var q = 0; q < 10; q++)
  Ie[48 + q] = Ie[96 + q] = String(q);
for (var q = 1; q <= 24; q++)
  Ie[q + 111] = "F" + q;
for (var q = 65; q <= 90; q++)
  Ie[q] = String.fromCharCode(q + 32), cn[q] = String.fromCharCode(q);
for (var Un in Ie)
  cn.hasOwnProperty(Un) || (cn[Un] = Ie[Un]);
function Fc(r) {
  var e = Bc && (r.ctrlKey || r.altKey || r.metaKey) || Pc && r.shiftKey && r.key && r.key.length == 1 || r.key == "Unidentified", t = !e && r.key || (r.shiftKey ? cn : Ie)[r.keyCode] || r.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const zc = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function Vc(r) {
  let e = r.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let n, i, s, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      zc ? o = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return n && (t = "Alt-" + t), i && (t = "Ctrl-" + t), o && (t = "Meta-" + t), s && (t = "Shift-" + t), t;
}
function Lc(r) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in r)
    e[Vc(t)] = r[t];
  return e;
}
function Yn(r, e, t = !0) {
  return e.altKey && (r = "Alt-" + r), e.ctrlKey && (r = "Ctrl-" + r), e.metaKey && (r = "Meta-" + r), t && e.shiftKey && (r = "Shift-" + r), r;
}
function $c(r) {
  return new Be({ props: { handleKeyDown: jc(r) } });
}
function jc(r) {
  let e = Lc(r);
  return function(t, n) {
    let i = Fc(n), s, o = e[Yn(i, n)];
    if (o && o(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (n.shiftKey) {
        let l = e[Yn(i, n, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((n.shiftKey || n.altKey || n.metaKey || i.charCodeAt(0) > 127) && (s = Ie[n.keyCode]) && s != i) {
        let l = e[Yn(s, n)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const Wc = (r, e) => r.selection.empty ? !1 : (e && e(r.tr.deleteSelection().scrollIntoView()), !0);
function Jc(r, e) {
  let { $cursor: t } = r.selection;
  return !t || (e ? !e.endOfTextblock("backward", r) : t.parentOffset > 0) ? null : t;
}
const Hc = (r, e, t) => {
  let n = Jc(r, t);
  if (!n)
    return !1;
  let i = ko(n);
  if (!i) {
    let o = n.blockRange(), l = o && kt(o);
    return l == null ? !1 : (e && e(r.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (!s.type.spec.isolating && xo(r, i, e))
    return !0;
  if (n.parent.content.size == 0 && (gt(s, "end") || O.isSelectable(s))) {
    let o = Sr(r.doc, n.before(), n.after(), M.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = r.tr.step(o);
        l.setSelection(gt(s, "end") ? v.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : O.create(l.doc, i.pos - s.nodeSize)), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == n.depth - 1 ? (e && e(r.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
};
function gt(r, e, t = !1) {
  for (let n = r; n; n = e == "start" ? n.firstChild : n.lastChild) {
    if (n.isTextblock)
      return !0;
    if (t && n.childCount != 1)
      return !1;
  }
  return !1;
}
const _c = (r, e, t) => {
  let { $head: n, empty: i } = r.selection, s = n;
  if (!i)
    return !1;
  if (n.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", r) : n.parentOffset > 0)
      return !1;
    s = ko(n);
  }
  let o = s && s.nodeBefore;
  return !o || !O.isSelectable(o) ? !1 : (e && e(r.tr.setSelection(O.create(r.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function ko(r) {
  if (!r.parent.type.spec.isolating)
    for (let e = r.depth - 1; e >= 0; e--) {
      if (r.index(e) > 0)
        return r.doc.resolve(r.before(e + 1));
      if (r.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function qc(r, e) {
  let { $cursor: t } = r.selection;
  return !t || (e ? !e.endOfTextblock("forward", r) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Kc = (r, e, t) => {
  let n = qc(r, t);
  if (!n)
    return !1;
  let i = bo(n);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (xo(r, i, e))
    return !0;
  if (n.parent.content.size == 0 && (gt(s, "start") || O.isSelectable(s))) {
    let o = Sr(r.doc, n.before(), n.after(), M.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = r.tr.step(o);
        l.setSelection(gt(s, "start") ? v.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : O.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == n.depth - 1 ? (e && e(r.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, Uc = (r, e, t) => {
  let { $head: n, empty: i } = r.selection, s = n;
  if (!i)
    return !1;
  if (n.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", r) : n.parentOffset < n.parent.content.size)
      return !1;
    s = bo(n);
  }
  let o = s && s.nodeAfter;
  return !o || !O.isSelectable(o) ? !1 : (e && e(r.tr.setSelection(O.create(r.doc, s.pos)).scrollIntoView()), !0);
};
function bo(r) {
  if (!r.parent.type.spec.isolating)
    for (let e = r.depth - 1; e >= 0; e--) {
      let t = r.node(e);
      if (r.index(e) + 1 < t.childCount)
        return r.doc.resolve(r.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Yc = (r, e) => {
  let t = r.selection, n = t instanceof O, i;
  if (n) {
    if (t.node.isTextblock || !Ze(r.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Is(r.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let s = r.tr.join(i);
    n && s.setSelection(O.create(s.doc, i - r.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, Gc = (r, e) => {
  let t = r.selection, n;
  if (t instanceof O) {
    if (t.node.isTextblock || !Ze(r.doc, t.to))
      return !1;
    n = t.to;
  } else if (n = Is(r.doc, t.to, 1), n == null)
    return !1;
  return e && e(r.tr.join(n).scrollIntoView()), !0;
}, Xc = (r, e) => {
  let { $from: t, $to: n } = r.selection, i = t.blockRange(n), s = i && kt(i);
  return s == null ? !1 : (e && e(r.tr.lift(i, s).scrollIntoView()), !0);
}, Zc = (r, e) => {
  let { $head: t, $anchor: n } = r.selection;
  return !t.parent.type.spec.code || !t.sameParent(n) ? !1 : (e && e(r.tr.insertText(`
`).scrollIntoView()), !0);
};
function So(r) {
  for (let e = 0; e < r.edgeCount; e++) {
    let { type: t } = r.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const Qc = (r, e) => {
  let { $head: t, $anchor: n } = r.selection;
  if (!t.parent.type.spec.code || !t.sameParent(n))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), o = So(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = t.after(), a = r.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(v.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, ef = (r, e) => {
  let t = r.selection, { $from: n, $to: i } = t;
  if (t instanceof ue || n.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = So(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!n.parentOffset && i.index() < i.parent.childCount ? n : i).pos, l = r.tr.insert(o, s.createAndFill());
    l.setSelection(R.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, tf = (r, e) => {
  let { $cursor: t } = r.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (at(r.doc, s))
      return e && e(r.tr.split(s).scrollIntoView()), !0;
  }
  let n = t.blockRange(), i = n && kt(n);
  return i == null ? !1 : (e && e(r.tr.lift(n, i).scrollIntoView()), !0);
}, nf = (r, e) => {
  let { $from: t, to: n } = r.selection, i, s = t.sharedDepth(n);
  return s == 0 ? !1 : (i = t.before(s), e && e(r.tr.setSelection(O.create(r.doc, i))), !0);
};
function rf(r, e, t) {
  let n = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !n || !i || !n.type.compatibleContent(i.type) ? !1 : !n.content.size && e.parent.canReplace(s - 1, s) ? (t && t(r.tr.delete(e.pos - n.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || Ze(r.doc, e.pos)) ? !1 : (t && t(r.tr.clearIncompatible(e.pos, n.type, n.contentMatchAt(n.childCount)).join(e.pos).scrollIntoView()), !0);
}
function xo(r, e, t) {
  let n = e.nodeBefore, i = e.nodeAfter, s, o;
  if (n.type.spec.isolating || i.type.spec.isolating)
    return !1;
  if (rf(r, e, t))
    return !0;
  let l = e.parent.canReplace(e.index(), e.index() + 1);
  if (l && (s = (o = n.contentMatchAt(n.childCount)).findWrapping(i.type)) && o.matchType(s[0] || i.type).validEnd) {
    if (t) {
      let u = e.pos + i.nodeSize, d = b.empty;
      for (let g = s.length - 1; g >= 0; g--)
        d = b.from(s[g].create(null, d));
      d = b.from(n.copy(d));
      let h = r.tr.step(new J(e.pos - 1, u, e.pos, u, new M(d, 1, 0), s.length, !0)), m = u + 2 * s.length;
      Ze(h.doc, m) && h.join(m), t(h.scrollIntoView());
    }
    return !0;
  }
  let a = v.findFrom(e, 1), c = a && a.$from.blockRange(a.$to), f = c && kt(c);
  if (f != null && f >= e.depth)
    return t && t(r.tr.lift(c, f).scrollIntoView()), !0;
  if (l && gt(i, "start", !0) && gt(n, "end")) {
    let u = n, d = [];
    for (; d.push(u), !u.isTextblock; )
      u = u.lastChild;
    let h = i, m = 1;
    for (; !h.isTextblock; h = h.firstChild)
      m++;
    if (u.canReplace(u.childCount, u.childCount, h.content)) {
      if (t) {
        let g = b.empty;
        for (let S = d.length - 1; S >= 0; S--)
          g = b.from(d[S].copy(g));
        let y = r.tr.step(new J(e.pos - d.length, e.pos + i.nodeSize, e.pos + m, e.pos + i.nodeSize - m, new M(g, d.length, 0), 0, !0));
        t(y.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Mo(r) {
  return function(e, t) {
    let n = e.selection, i = r < 0 ? n.$from : n.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(R.create(e.doc, r < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const sf = Mo(-1), of = Mo(1);
function lf(r, e = null) {
  return function(t, n) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = o && As(o, r, e);
    return l ? (n && n(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function es(r, e = null) {
  return function(t, n) {
    let i = !1;
    for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s];
      t.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(r, e)))
          if (a.type == r)
            i = !0;
          else {
            let f = t.doc.resolve(c), u = f.index();
            i = f.parent.canReplaceWith(u, u + 1, r);
          }
      });
    }
    if (!i)
      return !1;
    if (n) {
      let s = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        s.setBlockType(l, a, r, e);
      }
      n(s.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function af(r, e = null) {
  return function(t, n) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = !1, a = o;
    if (!o)
      return !1;
    if (o.depth >= 2 && i.node(o.depth - 1).type.compatibleContent(r) && o.startIndex == 0) {
      if (i.index(o.depth - 1) == 0)
        return !1;
      let f = t.doc.resolve(o.start - 2);
      a = new tn(f, f, o.depth), o.endIndex < o.parent.childCount && (o = new tn(i, t.doc.resolve(s.end(o.depth)), o.depth)), l = !0;
    }
    let c = As(a, r, e, o);
    return c ? (n && n(cf(t.tr, o, c, l, r).scrollIntoView()), !0) : !1;
  };
}
function cf(r, e, t, n, i) {
  let s = b.empty;
  for (let f = t.length - 1; f >= 0; f--)
    s = b.from(t[f].type.create(t[f].attrs, s));
  r.step(new J(e.start - (n ? 2 : 0), e.end, e.start, e.end, new M(s, 0, 0), t.length, !0));
  let o = 0;
  for (let f = 0; f < t.length; f++)
    t[f].type == i && (o = f + 1);
  let l = t.length - o, a = e.start + t.length - (n ? 2 : 0), c = e.parent;
  for (let f = e.startIndex, u = e.endIndex, d = !0; f < u; f++, d = !1)
    !d && at(r.doc, a, l) && (r.split(a, l), a += 2 * l), a += c.child(f).nodeSize;
  return r;
}
function ff(r) {
  return function(e, t) {
    let { $from: n, $to: i } = e.selection, s = n.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == r);
    return s ? t ? n.node(s.depth - 1).type == r ? uf(e, t, r, s) : df(e, t, s) : !0 : !1;
  };
}
function uf(r, e, t, n) {
  let i = r.tr, s = n.end, o = n.$to.end(n.depth);
  s < o && (i.step(new J(s - 1, o, s, o, new M(b.from(t.create(null, n.parent.copy())), 1, 0), 1, !0)), n = new tn(i.doc.resolve(n.$from.pos), i.doc.resolve(o), n.depth));
  const l = kt(n);
  if (l == null)
    return !1;
  i.lift(n, l);
  let a = i.mapping.map(s, -1) - 1;
  return Ze(i.doc, a) && i.join(a), e(i.scrollIntoView()), !0;
}
function df(r, e, t) {
  let n = r.tr, i = t.parent;
  for (let h = t.end, m = t.endIndex - 1, g = t.startIndex; m > g; m--)
    h -= i.child(m).nodeSize, n.delete(h - 1, h + 1);
  let s = n.doc.resolve(t.start), o = s.nodeAfter;
  if (n.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = s.node(-1), f = s.index(-1);
  if (!c.canReplace(f + (l ? 0 : 1), f + 1, o.content.append(a ? b.empty : b.from(i))))
    return !1;
  let u = s.pos, d = u + o.nodeSize;
  return n.step(new J(u - (l ? 1 : 0), d + (a ? 1 : 0), u + 1, d - 1, new M((l ? b.empty : b.from(i.copy(b.empty))).append(a ? b.empty : b.from(i.copy(b.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(n.scrollIntoView()), !0;
}
function hf(r) {
  return function(e, t) {
    let { $from: n, $to: i } = e.selection, s = n.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == r);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != r)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, f = b.from(c ? r.create() : null), u = new M(b.from(r.create(null, b.from(l.type.create(null, f)))), c ? 3 : 1, 0), d = s.start, h = s.end;
      t(e.tr.step(new J(d - (c ? 3 : 1), h, d, h, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function kn(r) {
  const { state: e, transaction: t } = r;
  let { selection: n } = t, { doc: i } = t, { storedMarks: s } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    filterTransaction: e.filterTransaction,
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return n;
    },
    get doc() {
      return i;
    },
    get tr() {
      return n = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
class bn {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: n } = this, { view: i } = t, { tr: s } = n, o = this.buildProps(s);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...f) => {
      const u = a(...f)(o);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s), u;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: n, editor: i, state: s } = this, { view: o } = i, l = [], a = !!e, c = e || s.tr, f = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c), l.every((d) => d === !0)), u = {
      ...Object.fromEntries(Object.entries(n).map(([d, h]) => [d, (...g) => {
        const y = this.buildProps(c, t), S = h(...g)(y);
        return l.push(S), u;
      }])),
      run: f
    };
    return u;
  }
  createCan(e) {
    const { rawCommands: t, state: n } = this, i = !1, s = e || n.tr, o = this.buildProps(s, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...f) => c(...f)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(s, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: n, editor: i, state: s } = this, { view: o } = i;
    s.storedMarks && e.setStoredMarks(s.storedMarks);
    const l = {
      tr: e,
      editor: i,
      view: o,
      state: kn({
        state: s,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(n).map(([a, c]) => [a, (...f) => c(...f)(l)]));
      }
    };
    return l;
  }
}
class pf {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const n = this.callbacks[e];
    return n && n.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const n = this.callbacks[e];
    return n && (t ? this.callbacks[e] = n.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function C(r, e, t) {
  return r.config[e] === void 0 && r.parent ? C(r.parent, e, t) : typeof r.config[e] == "function" ? r.config[e].bind({
    ...t,
    parent: r.parent ? C(r.parent, e, t) : null
  }) : r.config[e];
}
function Sn(r) {
  const e = r.filter((i) => i.type === "extension"), t = r.filter((i) => i.type === "node"), n = r.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: n
  };
}
function Co(r) {
  const e = [], { nodeExtensions: t, markExtensions: n } = Sn(r), i = [...t, ...n], s = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return r.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = C(o, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((f) => {
      f.types.forEach((u) => {
        Object.entries(f.attributes).forEach(([d, h]) => {
          e.push({
            type: u,
            name: d,
            attribute: {
              ...s,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = C(o, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([f, u]) => {
      const d = {
        ...s,
        ...u
      };
      u != null && u.isRequired && (u == null ? void 0 : u.default) === void 0 && delete d.default, e.push({
        type: o.name,
        name: f,
        attribute: d
      });
    });
  }), e;
}
function H(r, e) {
  if (typeof r == "string") {
    if (!e.nodes[r])
      throw Error(`There is no node type named '${r}'. Maybe you forgot to add the extension?`);
    return e.nodes[r];
  }
  return r;
}
function Qe(...r) {
  return r.filter((e) => !!e).reduce((e, t) => {
    const n = { ...e };
    return Object.entries(t).forEach(([i, s]) => {
      if (!n[i]) {
        n[i] = s;
        return;
      }
      i === "class" ? n[i] = [n[i], s].join(" ") : i === "style" ? n[i] = [n[i], s].join("; ") : n[i] = s;
    }), n;
  }, {});
}
function gr(r, e) {
  return e.filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(r.attrs) || {} : {
    [t.name]: r.attrs[t.name]
  }).reduce((t, n) => Qe(t, n), {});
}
function wo(r) {
  return typeof r == "function";
}
function D(r, e = void 0, ...t) {
  return wo(r) ? e ? r.bind(e)(...t) : r(...t) : r;
}
function mf(r = {}) {
  return Object.keys(r).length === 0 && r.constructor === Object;
}
function gf(r) {
  return typeof r != "string" ? r : r.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(r) : r === "true" ? !0 : r === "false" ? !1 : r;
}
function ts(r, e) {
  return r.style ? r : {
    ...r,
    getAttrs: (t) => {
      const n = r.getAttrs ? r.getAttrs(t) : r.attrs;
      if (n === !1)
        return !1;
      const i = e.reduce((s, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : gf(t.getAttribute(o.name));
        return l == null ? s : {
          ...s,
          [o.name]: l
        };
      }, {});
      return { ...n, ...i };
    }
  };
}
function ns(r) {
  return Object.fromEntries(Object.entries(r).filter(([e, t]) => e === "attrs" && mf(t) ? !1 : t != null));
}
function yf(r) {
  var e;
  const t = Co(r), { nodeExtensions: n, markExtensions: i } = Sn(r), s = (e = n.find((a) => C(a, "topNode"))) === null || e === void 0 ? void 0 : e.name, o = Object.fromEntries(n.map((a) => {
    const c = t.filter((y) => y.type === a.name), f = {
      name: a.name,
      options: a.options,
      storage: a.storage
    }, u = r.reduce((y, S) => {
      const w = C(S, "extendNodeSchema", f);
      return {
        ...y,
        ...w ? w(a) : {}
      };
    }, {}), d = ns({
      ...u,
      content: D(C(a, "content", f)),
      marks: D(C(a, "marks", f)),
      group: D(C(a, "group", f)),
      inline: D(C(a, "inline", f)),
      atom: D(C(a, "atom", f)),
      selectable: D(C(a, "selectable", f)),
      draggable: D(C(a, "draggable", f)),
      code: D(C(a, "code", f)),
      defining: D(C(a, "defining", f)),
      isolating: D(C(a, "isolating", f)),
      attrs: Object.fromEntries(c.map((y) => {
        var S;
        return [y.name, { default: (S = y == null ? void 0 : y.attribute) === null || S === void 0 ? void 0 : S.default }];
      }))
    }), h = D(C(a, "parseHTML", f));
    h && (d.parseDOM = h.map((y) => ts(y, c)));
    const m = C(a, "renderHTML", f);
    m && (d.toDOM = (y) => m({
      node: y,
      HTMLAttributes: gr(y, c)
    }));
    const g = C(a, "renderText", f);
    return g && (d.toText = g), [a.name, d];
  })), l = Object.fromEntries(i.map((a) => {
    const c = t.filter((g) => g.type === a.name), f = {
      name: a.name,
      options: a.options,
      storage: a.storage
    }, u = r.reduce((g, y) => {
      const S = C(y, "extendMarkSchema", f);
      return {
        ...g,
        ...S ? S(a) : {}
      };
    }, {}), d = ns({
      ...u,
      inclusive: D(C(a, "inclusive", f)),
      excludes: D(C(a, "excludes", f)),
      group: D(C(a, "group", f)),
      spanning: D(C(a, "spanning", f)),
      code: D(C(a, "code", f)),
      attrs: Object.fromEntries(c.map((g) => {
        var y;
        return [g.name, { default: (y = g == null ? void 0 : g.attribute) === null || y === void 0 ? void 0 : y.default }];
      }))
    }), h = D(C(a, "parseHTML", f));
    h && (d.parseDOM = h.map((g) => ts(g, c)));
    const m = C(a, "renderHTML", f);
    return m && (d.toDOM = (g) => m({
      mark: g,
      HTMLAttributes: gr(g, c)
    })), [a.name, d];
  }));
  return new Tl({
    topNode: s,
    nodes: o,
    marks: l
  });
}
function Gn(r, e) {
  return e.nodes[r] || e.marks[r] || null;
}
function rs(r, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === r.name) : e;
}
const kf = (r, e = 500) => {
  let t = "";
  const n = r.parentOffset;
  return r.parent.nodesBetween(Math.max(0, n - e), n, (i, s, o, l) => {
    var a, c;
    const f = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: s,
      parent: o,
      index: l
    })) || i.textContent || "%leaf%";
    t += f.slice(0, Math.max(0, n - s));
  }), t;
};
function Ar(r) {
  return Object.prototype.toString.call(r) === "[object RegExp]";
}
class bf {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const Sf = (r, e) => {
  if (Ar(e))
    return e.exec(r);
  const t = e(r);
  if (!t)
    return null;
  const n = [t.text];
  return n.index = t.index, n.input = r, n.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), n.push(t.replaceWith)), n;
};
function Xn(r) {
  var e;
  const { editor: t, from: n, to: i, text: s, rules: o, plugin: l } = r, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(n);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((d) => d.type.spec.code)
  )
    return !1;
  let f = !1;
  const u = kf(c) + s;
  return o.forEach((d) => {
    if (f)
      return;
    const h = Sf(u, d.find);
    if (!h)
      return;
    const m = a.state.tr, g = kn({
      state: a.state,
      transaction: m
    }), y = {
      from: n - (h[0].length - s.length),
      to: i
    }, { commands: S, chain: w, can: P } = new bn({
      editor: t,
      state: g
    });
    d.handler({
      state: g,
      range: y,
      match: h,
      commands: S,
      chain: w,
      can: P
    }) === null || !m.steps.length || (m.setMeta(l, {
      transform: m,
      from: n,
      to: i,
      text: s
    }), a.dispatch(m), f = !0);
  }), f;
}
function xf(r) {
  const { editor: e, rules: t } = r, n = new Be({
    state: {
      init() {
        return null;
      },
      apply(i, s) {
        const o = i.getMeta(n);
        return o || (i.selectionSet || i.docChanged ? null : s);
      }
    },
    props: {
      handleTextInput(i, s, o, l) {
        return Xn({
          editor: e,
          from: s,
          to: o,
          text: l,
          rules: t,
          plugin: n
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && Xn({
            editor: e,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: t,
            plugin: n
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: o } = i.state.selection;
        return o ? Xn({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: t,
          plugin: n
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return n;
}
function Mf(r) {
  return typeof r == "number";
}
class Cf {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const wf = (r, e) => {
  if (Ar(e))
    return [...r.matchAll(e)];
  const t = e(r);
  return t ? t.map((n) => {
    const i = [n.text];
    return i.index = n.index, i.input = r, i.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(n.replaceWith)), i;
  }) : [];
};
function Of(r) {
  const { editor: e, state: t, from: n, to: i, rule: s } = r, { commands: o, chain: l, can: a } = new bn({
    editor: e,
    state: t
  }), c = [];
  return t.doc.nodesBetween(n, i, (u, d) => {
    if (!u.isTextblock || u.type.spec.code)
      return;
    const h = Math.max(n, d), m = Math.min(i, d + u.content.size), g = u.textBetween(h - d, m - d, void 0, "￼");
    wf(g, s.find).forEach((S) => {
      if (S.index === void 0)
        return;
      const w = h + S.index + 1, P = w + S[0].length, V = {
        from: t.tr.mapping.map(w),
        to: t.tr.mapping.map(P)
      }, z = s.handler({
        state: t,
        range: V,
        match: S,
        commands: o,
        chain: l,
        can: a
      });
      c.push(z);
    });
  }), c.every((u) => u !== null);
}
function Tf(r) {
  const { editor: e, rules: t } = r;
  let n = null, i = !1, s = !1;
  return t.map((l) => new Be({
    // we register a global drag handler to track the current drag source element
    view(a) {
      const c = (f) => {
        var u;
        n = !((u = a.dom.parentElement) === null || u === void 0) && u.contains(f.target) ? a.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", c), {
        destroy() {
          window.removeEventListener("dragstart", c);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (a) => (s = n === a.dom.parentElement, !1),
        paste: (a, c) => {
          var f;
          const u = (f = c.clipboardData) === null || f === void 0 ? void 0 : f.getData("text/html");
          return i = !!(u != null && u.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (a, c, f) => {
      const u = a[0], d = u.getMeta("uiEvent") === "paste" && !i, h = u.getMeta("uiEvent") === "drop" && !s;
      if (!d && !h)
        return;
      const m = c.doc.content.findDiffStart(f.doc.content), g = c.doc.content.findDiffEnd(f.doc.content);
      if (!Mf(m) || !g || m === g.b)
        return;
      const y = f.tr, S = kn({
        state: f,
        transaction: y
      });
      if (!(!Of({
        editor: e,
        state: S,
        from: Math.max(m - 1, 0),
        to: g.b - 1,
        rule: l
      }) || !y.steps.length))
        return y;
    }
  }));
}
function Ef(r) {
  const e = r.filter((t, n) => r.indexOf(t) !== n);
  return [...new Set(e)];
}
class lt {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = lt.resolve(e), this.schema = yf(this.extensions), this.extensions.forEach((n) => {
      var i;
      this.editor.extensionStorage[n.name] = n.storage;
      const s = {
        name: n.name,
        options: n.options,
        storage: n.storage,
        editor: this.editor,
        type: Gn(n.name, this.schema)
      };
      n.type === "mark" && (!((i = D(C(n, "keepOnSplit", s))) !== null && i !== void 0) || i) && this.splittableMarks.push(n.name);
      const o = C(n, "onBeforeCreate", s);
      o && this.editor.on("beforeCreate", o);
      const l = C(n, "onCreate", s);
      l && this.editor.on("create", l);
      const a = C(n, "onUpdate", s);
      a && this.editor.on("update", a);
      const c = C(n, "onSelectionUpdate", s);
      c && this.editor.on("selectionUpdate", c);
      const f = C(n, "onTransaction", s);
      f && this.editor.on("transaction", f);
      const u = C(n, "onFocus", s);
      u && this.editor.on("focus", u);
      const d = C(n, "onBlur", s);
      d && this.editor.on("blur", d);
      const h = C(n, "onDestroy", s);
      h && this.editor.on("destroy", h);
    });
  }
  static resolve(e) {
    const t = lt.sort(lt.flatten(e)), n = Ef(t.map((i) => i.name));
    return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  static flatten(e) {
    return e.map((t) => {
      const n = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = C(t, "addExtensions", n);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  static sort(e) {
    return e.sort((n, i) => {
      const s = C(n, "priority") || 100, o = C(i, "priority") || 100;
      return s > o ? -1 : s < o ? 1 : 0;
    });
  }
  get commands() {
    return this.extensions.reduce((e, t) => {
      const n = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: Gn(t.name, this.schema)
      }, i = C(t, "addCommands", n);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  get plugins() {
    const { editor: e } = this, t = lt.sort([...this.extensions].reverse()), n = [], i = [], s = t.map((o) => {
      const l = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: e,
        type: Gn(o.name, this.schema)
      }, a = [], c = C(o, "addKeyboardShortcuts", l);
      let f = {};
      if (o.type === "mark" && o.config.exitable && (f.ArrowRight = () => Pe.handleExit({ editor: e, mark: o })), c) {
        const g = Object.fromEntries(Object.entries(c()).map(([y, S]) => [y, () => S({ editor: e })]));
        f = { ...f, ...g };
      }
      const u = $c(f);
      a.push(u);
      const d = C(o, "addInputRules", l);
      rs(o, e.options.enableInputRules) && d && n.push(...d());
      const h = C(o, "addPasteRules", l);
      rs(o, e.options.enablePasteRules) && h && i.push(...h());
      const m = C(o, "addProseMirrorPlugins", l);
      if (m) {
        const g = m();
        a.push(...g);
      }
      return a;
    }).flat();
    return [
      xf({
        editor: e,
        rules: n
      }),
      ...Tf({
        editor: e,
        rules: i
      }),
      ...s
    ];
  }
  get attributes() {
    return Co(this.extensions);
  }
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = Sn(this.extensions);
    return Object.fromEntries(t.filter((n) => !!C(n, "addNodeView")).map((n) => {
      const i = this.attributes.filter((a) => a.type === n.name), s = {
        name: n.name,
        options: n.options,
        storage: n.storage,
        editor: e,
        type: H(n.name, this.schema)
      }, o = C(n, "addNodeView", s);
      if (!o)
        return [];
      const l = (a, c, f, u) => {
        const d = gr(a, i);
        return o()({
          editor: e,
          node: a,
          getPos: f,
          decorations: u,
          HTMLAttributes: d,
          extension: n
        });
      };
      return [n.name, l];
    }));
  }
}
function Nf(r) {
  return Object.prototype.toString.call(r).slice(8, -1);
}
function Zn(r) {
  return Nf(r) !== "Object" ? !1 : r.constructor === Object && Object.getPrototypeOf(r) === Object.prototype;
}
function xn(r, e) {
  const t = { ...r };
  return Zn(r) && Zn(e) && Object.keys(e).forEach((n) => {
    Zn(e[n]) ? n in r ? t[n] = xn(r[n], e[n]) : Object.assign(t, { [n]: e[n] }) : Object.assign(t, { [n]: e[n] });
  }), t;
}
class Me {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = D(C(this, "addOptions", {
      name: this.name
    }))), this.storage = D(C(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Me(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = xn(this.options, e), t.storage = D(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Me(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = D(C(t, "addOptions", {
      name: t.name
    })), t.storage = D(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Oo(r, e, t) {
  const { from: n, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = t || {};
  let l = "", a = !0;
  return r.nodesBetween(n, i, (c, f, u, d) => {
    var h;
    const m = o == null ? void 0 : o[c.type.name];
    m ? (c.isBlock && !a && (l += s, a = !0), u && (l += m({
      node: c,
      pos: f,
      parent: u,
      index: d,
      range: e
    }))) : c.isText ? (l += (h = c == null ? void 0 : c.text) === null || h === void 0 ? void 0 : h.slice(Math.max(n, f) - f, i - f), a = !1) : c.isBlock && !a && (l += s, a = !0);
  }), l;
}
function To(r) {
  return Object.fromEntries(Object.entries(r.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const Df = Me.create({
  name: "clipboardTextSerializer",
  addProseMirrorPlugins() {
    return [
      new Be({
        key: new $t("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: r } = this, { state: e, schema: t } = r, { doc: n, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((f) => f.$from.pos)), l = Math.max(...s.map((f) => f.$to.pos)), a = To(t);
            return Oo(n, { from: o, to: l }, {
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), vf = () => ({ editor: r, view: e }) => (requestAnimationFrame(() => {
  var t;
  r.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), Af = (r = !1) => ({ commands: e }) => e.setContent("", r), Rf = () => ({ state: r, tr: e, dispatch: t }) => {
  const { selection: n } = e, { ranges: i } = n;
  return t && i.forEach(({ $from: s, $to: o }) => {
    r.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: f } = e, u = c.resolve(f.map(a)), d = c.resolve(f.map(a + l.nodeSize)), h = u.blockRange(d);
      if (!h)
        return;
      const m = kt(h);
      if (l.type.isTextblock) {
        const { defaultType: g } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(h.start, g);
      }
      (m || m === 0) && e.lift(h, m);
    });
  }), !0;
}, If = (r) => (e) => r(e), Pf = () => ({ state: r, dispatch: e }) => ef(r, e), Bf = () => ({ tr: r, dispatch: e }) => {
  const { selection: t } = r, n = t.$anchor.node();
  if (n.content.size > 0)
    return !1;
  const i = r.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === n.type) {
      if (e) {
        const l = i.before(s), a = i.after(s);
        r.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Ff = (r) => ({ tr: e, state: t, dispatch: n }) => {
  const i = H(r, t.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (n) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, zf = (r) => ({ tr: e, dispatch: t }) => {
  const { from: n, to: i } = r;
  return t && e.delete(n, i), !0;
}, Vf = () => ({ state: r, dispatch: e }) => Wc(r, e), Lf = () => ({ commands: r }) => r.keyboardShortcut("Enter"), $f = () => ({ state: r, dispatch: e }) => Qc(r, e);
function fn(r, e, t = { strict: !0 }) {
  const n = Object.keys(e);
  return n.length ? n.every((i) => t.strict ? e[i] === r[i] : Ar(e[i]) ? e[i].test(r[i]) : e[i] === r[i]) : !0;
}
function yr(r, e, t = {}) {
  return r.find((n) => n.type === e && fn(n.attrs, t));
}
function jf(r, e, t = {}) {
  return !!yr(r, e, t);
}
function Rr(r, e, t = {}) {
  if (!r || !e)
    return;
  let n = r.parent.childAfter(r.parentOffset);
  if (r.parentOffset === n.offset && n.offset !== 0 && (n = r.parent.childBefore(r.parentOffset)), !n.node)
    return;
  const i = yr([...n.node.marks], e, t);
  if (!i)
    return;
  let s = n.index, o = r.start() + n.offset, l = s + 1, a = o + n.node.nodeSize;
  for (yr([...n.node.marks], e, t); s > 0 && i.isInSet(r.parent.child(s - 1).marks); )
    s -= 1, o -= r.parent.child(s).nodeSize;
  for (; l < r.parent.childCount && jf([...r.parent.child(l).marks], e, t); )
    a += r.parent.child(l).nodeSize, l += 1;
  return {
    from: o,
    to: a
  };
}
function ze(r, e) {
  if (typeof r == "string") {
    if (!e.marks[r])
      throw Error(`There is no mark type named '${r}'. Maybe you forgot to add the extension?`);
    return e.marks[r];
  }
  return r;
}
const Wf = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  const s = ze(r, n.schema), { doc: o, selection: l } = t, { $from: a, from: c, to: f } = l;
  if (i) {
    const u = Rr(a, s, e);
    if (u && u.from <= c && u.to >= f) {
      const d = R.create(o, u.from, u.to);
      t.setSelection(d);
    }
  }
  return !0;
}, Jf = (r) => (e) => {
  const t = typeof r == "function" ? r(e) : r;
  for (let n = 0; n < t.length; n += 1)
    if (t[n](e))
      return !0;
  return !1;
};
function Eo(r) {
  return r instanceof R;
}
function We(r = 0, e = 0, t = 0) {
  return Math.min(Math.max(r, e), t);
}
function No(r, e = null) {
  if (!e)
    return null;
  const t = v.atStart(r), n = v.atEnd(r);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return n;
  const i = t.from, s = n.to;
  return e === "all" ? R.create(r, We(0, i, s), We(r.content.size, i, s)) : R.create(r, We(e, i, s), We(e, i, s));
}
function Ir() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Hf = (r = null, e = {}) => ({ editor: t, view: n, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    Ir() && n.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (n.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (n.hasFocus() && r === null || r === !1)
    return !0;
  if (s && r === null && !Eo(t.state.selection))
    return o(), !0;
  const l = No(i.doc, r) || t.state.selection, a = t.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, _f = (r, e) => (t) => r.every((n, i) => e(n, { ...t, index: i })), qf = (r, e) => ({ tr: t, commands: n }) => n.insertContentAt({ from: t.selection.from, to: t.selection.to }, r, e);
function is(r) {
  const e = `<body>${r}</body>`;
  return new window.DOMParser().parseFromString(e, "text/html").body;
}
function un(r, e, t) {
  if (t = {
    slice: !0,
    parseOptions: {},
    ...t
  }, typeof r == "object" && r !== null)
    try {
      return Array.isArray(r) && r.length > 0 ? b.fromArray(r.map((n) => e.nodeFromJSON(n))) : e.nodeFromJSON(r);
    } catch (n) {
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", r, "Error:", n), un("", e, t);
    }
  if (typeof r == "string") {
    const n = ut.fromSchema(e);
    return t.slice ? n.parseSlice(is(r), t.parseOptions).content : n.parse(is(r), t.parseOptions);
  }
  return un("", e, t);
}
function Kf(r, e, t) {
  const n = r.steps.length - 1;
  if (n < e)
    return;
  const i = r.steps[n];
  if (!(i instanceof U || i instanceof J))
    return;
  const s = r.mapping.maps[n];
  let o = 0;
  s.forEach((l, a, c, f) => {
    o === 0 && (o = f);
  }), r.setSelection(v.near(r.doc.resolve(o), t));
}
const Uf = (r) => r.toString().startsWith("<"), Yf = (r, e, t) => ({ tr: n, dispatch: i, editor: s }) => {
  if (i) {
    t = {
      parseOptions: {},
      updateSelection: !0,
      ...t
    };
    const o = un(e, s.schema, {
      parseOptions: {
        preserveWhitespace: "full",
        ...t.parseOptions
      }
    });
    if (o.toString() === "<>")
      return !0;
    let { from: l, to: a } = typeof r == "number" ? { from: r, to: r } : r, c = !0, f = !0;
    if ((Uf(o) ? o : [o]).forEach((d) => {
      d.check(), c = c ? d.isText && d.marks.length === 0 : !1, f = f ? d.isBlock : !1;
    }), l === a && f) {
      const { parent: d } = n.doc.resolve(l);
      d.isTextblock && !d.type.spec.code && !d.childCount && (l -= 1, a += 1);
    }
    c ? Array.isArray(e) ? n.insertText(e.map((d) => d.text || "").join(""), l, a) : typeof e == "object" && e && e.text ? n.insertText(e.text, l, a) : n.insertText(e, l, a) : n.replaceWith(l, a, o), t.updateSelection && Kf(n, n.steps.length - 1, -1);
  }
  return !0;
}, Gf = () => ({ state: r, dispatch: e }) => Yc(r, e), Xf = () => ({ state: r, dispatch: e }) => Gc(r, e), Zf = () => ({ state: r, dispatch: e }) => Hc(r, e), Qf = () => ({ state: r, dispatch: e }) => Kc(r, e);
function Do() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function eu(r) {
  const e = r.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let n, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      Ir() || Do() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return n && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
const tu = (r) => ({ editor: e, view: t, tr: n, dispatch: i }) => {
  const s = eu(r).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a == null || a.steps.forEach((c) => {
    const f = c.map(n.mapping);
    f && i && n.maybeStep(f);
  }), !0;
};
function zt(r, e, t = {}) {
  const { from: n, to: i, empty: s } = r.selection, o = e ? H(e, r.schema) : null, l = [];
  r.doc.nodesBetween(n, i, (u, d) => {
    if (u.isText)
      return;
    const h = Math.max(n, d), m = Math.min(i, d + u.nodeSize);
    l.push({
      node: u,
      from: h,
      to: m
    });
  });
  const a = i - n, c = l.filter((u) => o ? o.name === u.node.type.name : !0).filter((u) => fn(u.node.attrs, t, { strict: !1 }));
  return s ? !!c.length : c.reduce((u, d) => u + d.to - d.from, 0) >= a;
}
const nu = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = H(r, t.schema);
  return zt(t, i, e) ? Xc(t, n) : !1;
}, ru = () => ({ state: r, dispatch: e }) => tf(r, e), iu = (r) => ({ state: e, dispatch: t }) => {
  const n = H(r, e.schema);
  return ff(n)(e, t);
}, su = () => ({ state: r, dispatch: e }) => Zc(r, e);
function Mn(r, e) {
  return e.nodes[r] ? "node" : e.marks[r] ? "mark" : null;
}
function ss(r, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(r).reduce((n, i) => (t.includes(i) || (n[i] = r[i]), n), {});
}
const ou = (r, e) => ({ tr: t, state: n, dispatch: i }) => {
  let s = null, o = null;
  const l = Mn(typeof r == "string" ? r : r.name, n.schema);
  return l ? (l === "node" && (s = H(r, n.schema)), l === "mark" && (o = ze(r, n.schema)), i && t.selection.ranges.forEach((a) => {
    n.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, f) => {
      s && s === c.type && t.setNodeMarkup(f, void 0, ss(c.attrs, e)), o && c.marks.length && c.marks.forEach((u) => {
        o === u.type && t.addMark(f, f + c.nodeSize, o.create(ss(u.attrs, e)));
      });
    });
  }), !0) : !1;
}, lu = () => ({ tr: r, dispatch: e }) => (e && r.scrollIntoView(), !0), au = () => ({ tr: r, commands: e }) => e.setTextSelection({
  from: 0,
  to: r.doc.content.size
}), cu = () => ({ state: r, dispatch: e }) => _c(r, e), fu = () => ({ state: r, dispatch: e }) => Uc(r, e), uu = () => ({ state: r, dispatch: e }) => nf(r, e), du = () => ({ state: r, dispatch: e }) => of(r, e), hu = () => ({ state: r, dispatch: e }) => sf(r, e);
function vo(r, e, t = {}) {
  return un(r, e, { slice: !1, parseOptions: t });
}
const pu = (r, e = !1, t = {}) => ({ tr: n, editor: i, dispatch: s }) => {
  const { doc: o } = n, l = vo(r, i.schema, t);
  return s && n.replaceWith(0, o.content.size, l).setMeta("preventUpdate", !e), !0;
};
function mu(r) {
  for (let e = 0; e < r.edgeCount; e += 1) {
    const { type: t } = r.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function gu(r, e) {
  for (let t = r.depth; t > 0; t -= 1) {
    const n = r.node(t);
    if (e(n))
      return {
        pos: t > 0 ? r.before(t) : 0,
        start: r.start(t),
        depth: t,
        node: n
      };
  }
}
function Pr(r) {
  return (e) => gu(e.$from, r);
}
function yu(r, e) {
  const t = me.fromSchema(e).serializeFragment(r), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function ku(r, e) {
  const t = {
    from: 0,
    to: r.content.size
  };
  return Oo(r, t, e);
}
function Ao(r, e) {
  const t = ze(e, r.schema), { from: n, to: i, empty: s } = r.selection, o = [];
  s ? (r.storedMarks && o.push(...r.storedMarks), o.push(...r.selection.$head.marks())) : r.doc.nodesBetween(n, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function bu(r, e) {
  const t = H(e, r.schema), { from: n, to: i } = r.selection, s = [];
  r.doc.nodesBetween(n, i, (l) => {
    s.push(l);
  });
  const o = s.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function Su(r, e) {
  const t = Mn(typeof e == "string" ? e : e.name, r.schema);
  return t === "node" ? bu(r, e) : t === "mark" ? Ao(r, e) : {};
}
function Ro(r, e, t) {
  const n = [];
  return r === e ? t.resolve(r).marks().forEach((i) => {
    const s = t.resolve(r - 1), o = Rr(s, i.type);
    o && n.push({
      mark: i,
      ...o
    });
  }) : t.nodesBetween(r, e, (i, s) => {
    n.push(...i.marks.map((o) => ({
      from: s,
      to: s + i.nodeSize,
      mark: o
    })));
  }), n;
}
function Xt(r, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => {
    const i = r.find((s) => s.type === e && s.name === n);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function kr(r, e, t = {}) {
  const { empty: n, ranges: i } = r.selection, s = e ? ze(e, r.schema) : null;
  if (n)
    return !!(r.storedMarks || r.selection.$from.marks()).filter((u) => s ? s.name === u.type.name : !0).find((u) => fn(u.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: u, $to: d }) => {
    const h = u.pos, m = d.pos;
    r.doc.nodesBetween(h, m, (g, y) => {
      if (!g.isText && !g.marks.length)
        return;
      const S = Math.max(h, y), w = Math.min(m, y + g.nodeSize), P = w - S;
      o += P, l.push(...g.marks.map((V) => ({
        mark: V,
        from: S,
        to: w
      })));
    });
  }), o === 0)
    return !1;
  const a = l.filter((u) => s ? s.name === u.mark.type.name : !0).filter((u) => fn(u.mark.attrs, t, { strict: !1 })).reduce((u, d) => u + d.to - d.from, 0), c = l.filter((u) => s ? u.mark.type !== s && u.mark.type.excludes(s) : !0).reduce((u, d) => u + d.to - d.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function xu(r, e, t = {}) {
  if (!e)
    return zt(r, null, t) || kr(r, null, t);
  const n = Mn(e, r.schema);
  return n === "node" ? zt(r, e, t) : n === "mark" ? kr(r, e, t) : !1;
}
function ls(r, e) {
  const { nodeExtensions: t } = Sn(e), n = t.find((o) => o.name === r);
  if (!n)
    return !1;
  const i = {
    name: n.name,
    options: n.options,
    storage: n.storage
  }, s = D(C(n, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function Mu(r) {
  var e;
  const t = (e = r.type.createAndFill()) === null || e === void 0 ? void 0 : e.toJSON(), n = r.toJSON();
  return JSON.stringify(t) === JSON.stringify(n);
}
function Cu(r, e, t) {
  var n;
  const { selection: i } = e;
  let s = null;
  if (Eo(i) && (s = i.$cursor), s) {
    const l = (n = r.storedMarks) !== null && n !== void 0 ? n : s.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? r.doc.inlineContent && r.doc.type.allowsMarkType(t) : !1;
    return r.doc.nodesBetween(l.pos, a.pos, (f, u, d) => {
      if (c)
        return !1;
      if (f.isInline) {
        const h = !d || d.type.allowsMarkType(t), m = !!t.isInSet(f.marks) || !f.marks.some((g) => g.type.excludes(t));
        c = h && m;
      }
      return !c;
    }), c;
  });
}
const wu = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  const { selection: s } = t, { empty: o, ranges: l } = s, a = ze(r, n.schema);
  if (i)
    if (o) {
      const c = Ao(n, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const f = c.$from.pos, u = c.$to.pos;
        n.doc.nodesBetween(f, u, (d, h) => {
          const m = Math.max(h, f), g = Math.min(h + d.nodeSize, u);
          d.marks.find((S) => S.type === a) ? d.marks.forEach((S) => {
            a === S.type && t.addMark(m, g, a.create({
              ...S.attrs,
              ...e
            }));
          }) : t.addMark(m, g, a.create(e));
        });
      });
  return Cu(n, t, a);
}, Ou = (r, e) => ({ tr: t }) => (t.setMeta(r, e), !0), Tu = (r, e = {}) => ({ state: t, dispatch: n, chain: i }) => {
  const s = H(r, t.schema);
  return s.isTextblock ? i().command(({ commands: o }) => es(s, e)(t) ? !0 : o.clearNodes()).command(({ state: o }) => es(s, e)(o, n)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Eu = (r) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: n } = e, i = We(r, 0, n.content.size), s = O.create(n, i);
    e.setSelection(s);
  }
  return !0;
}, Nu = (r) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: n } = e, { from: i, to: s } = typeof r == "number" ? { from: r, to: r } : r, o = R.atStart(n).from, l = R.atEnd(n).to, a = We(i, o, l), c = We(s, o, l), f = R.create(n, a, c);
    e.setSelection(f);
  }
  return !0;
}, Du = (r) => ({ state: e, dispatch: t }) => {
  const n = H(r, e.schema);
  return hf(n)(e, t);
};
function as(r, e) {
  const t = r.storedMarks || r.selection.$to.parentOffset && r.selection.$from.marks();
  if (t) {
    const n = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    r.tr.ensureMarks(n);
  }
}
const vu = ({ keepMarks: r = !0 } = {}) => ({ tr: e, state: t, dispatch: n, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: a } = s, c = i.extensionManager.attributes, f = Xt(c, l.node().type.name, l.node().attrs);
  if (s instanceof O && s.node.isBlock)
    return !l.parentOffset || !at(o, l.pos) ? !1 : (n && (r && as(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  if (n) {
    const u = a.parentOffset === a.parent.content.size;
    s instanceof R && e.deleteSelection();
    const d = l.depth === 0 ? void 0 : mu(l.node(-1).contentMatchAt(l.indexAfter(-1)));
    let h = u && d ? [
      {
        type: d,
        attrs: f
      }
    ] : void 0, m = at(e.doc, e.mapping.map(l.pos), 1, h);
    if (!h && !m && at(e.doc, e.mapping.map(l.pos), 1, d ? [{ type: d }] : void 0) && (m = !0, h = d ? [
      {
        type: d,
        attrs: f
      }
    ] : void 0), m && (e.split(e.mapping.map(l.pos), 1, h), d && !u && !l.parentOffset && l.parent.type !== d)) {
      const g = e.mapping.map(l.before()), y = e.doc.resolve(g);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, d) && e.setNodeMarkup(e.mapping.map(l.before()), d);
    }
    r && as(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return !0;
}, Au = (r) => ({ tr: e, state: t, dispatch: n, editor: i }) => {
  var s;
  const o = H(r, t.schema), { $from: l, $to: a } = t.selection, c = t.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(a))
    return !1;
  const f = l.node(-1);
  if (f.type !== o)
    return !1;
  const u = i.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== o || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (n) {
      let y = b.empty;
      const S = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let Y = l.depth - S; Y >= l.depth - 3; Y -= 1)
        y = b.from(l.node(Y).copy(y));
      const w = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, P = Xt(u, l.node().type.name, l.node().attrs), V = ((s = o.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(P)) || void 0;
      y = y.append(b.from(o.createAndFill(null, V) || void 0));
      const z = l.before(l.depth - (S - 1));
      e.replace(z, l.after(-w), new M(y, 4 - S, 0));
      let se = -1;
      e.doc.nodesBetween(z, e.doc.content.size, (Y, E) => {
        if (se > -1)
          return !1;
        Y.isTextblock && Y.content.size === 0 && (se = E + 1);
      }), se > -1 && e.setSelection(R.near(e.doc.resolve(se))), e.scrollIntoView();
    }
    return !0;
  }
  const d = a.pos === l.end() ? f.contentMatchAt(0).defaultType : null, h = Xt(u, f.type.name, f.attrs), m = Xt(u, l.node().type.name, l.node().attrs);
  e.delete(l.pos, a.pos);
  const g = d ? [
    { type: o, attrs: h },
    { type: d, attrs: m }
  ] : [{ type: o, attrs: h }];
  if (!at(e.doc, l.pos, 2))
    return !1;
  if (n) {
    const { selection: y, storedMarks: S } = t, { splittableMarks: w } = i.extensionManager, P = S || y.$to.parentOffset && y.$from.marks();
    if (e.split(l.pos, 2, g).scrollIntoView(), !P || !n)
      return !0;
    const V = P.filter((z) => w.includes(z.type.name));
    e.ensureMarks(V);
  }
  return !0;
}, Qn = (r, e) => {
  const t = Pr((o) => o.type === e)(r.selection);
  if (!t)
    return !0;
  const n = r.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (n === void 0)
    return !0;
  const i = r.doc.nodeAt(n);
  return t.node.type === (i == null ? void 0 : i.type) && Ze(r.doc, t.pos) && r.join(t.pos), !0;
}, er = (r, e) => {
  const t = Pr((o) => o.type === e)(r.selection);
  if (!t)
    return !0;
  const n = r.doc.resolve(t.start).after(t.depth);
  if (n === void 0)
    return !0;
  const i = r.doc.nodeAt(n);
  return t.node.type === (i == null ? void 0 : i.type) && Ze(r.doc, n) && r.join(n), !0;
}, Ru = (r, e, t) => ({ editor: n, tr: i, state: s, dispatch: o, chain: l, commands: a, can: c }) => {
  const { extensions: f, splittableMarks: u } = n.extensionManager, d = H(r, s.schema), h = H(e, s.schema), { selection: m, storedMarks: g } = s, { $from: y, $to: S } = m, w = y.blockRange(S), P = g || m.$to.parentOffset && m.$from.marks();
  if (!w)
    return !1;
  const V = Pr((z) => ls(z.type.name, f))(m);
  if (w.depth >= 1 && V && w.depth - V.depth <= 1) {
    if (V.node.type === d)
      return a.liftListItem(h);
    if (ls(V.node.type.name, f) && d.validContent(V.node.content) && o)
      return l().command(() => (i.setNodeMarkup(V.pos, d), !0)).command(() => Qn(i, d)).command(() => er(i, d)).run();
  }
  return !t || !P || !o ? l().command(() => c().wrapInList(d) ? !0 : a.clearNodes()).wrapInList(d).command(() => Qn(i, d)).command(() => er(i, d)).run() : l().command(() => {
    const z = c().wrapInList(d), se = P.filter((Y) => u.includes(Y.type.name));
    return i.ensureMarks(se), z ? !0 : a.clearNodes();
  }).wrapInList(d).command(() => Qn(i, d)).command(() => er(i, d)).run();
}, Iu = (r, e = {}, t = {}) => ({ state: n, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, o = ze(r, n.schema);
  return kr(n, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, Pu = (r, e, t = {}) => ({ state: n, commands: i }) => {
  const s = H(r, n.schema), o = H(e, n.schema);
  return zt(n, s, t) ? i.setNode(o) : i.setNode(s, t);
}, Bu = (r, e = {}) => ({ state: t, commands: n }) => {
  const i = H(r, t.schema);
  return zt(t, i, e) ? n.lift(i) : n.wrapIn(i, e);
}, Fu = () => ({ state: r, dispatch: e }) => {
  const t = r.plugins;
  for (let n = 0; n < t.length; n += 1) {
    const i = t[n];
    let s;
    if (i.spec.isInputRules && (s = i.getState(r))) {
      if (e) {
        const o = r.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, r.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, zu = () => ({ tr: r, dispatch: e }) => {
  const { selection: t } = r, { empty: n, ranges: i } = t;
  return n || e && i.forEach((s) => {
    r.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, Vu = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = ze(r, n.schema), { $from: c, empty: f, ranges: u } = l;
  if (!i)
    return !0;
  if (f && o) {
    let { from: d, to: h } = l;
    const m = (s = c.marks().find((y) => y.type === a)) === null || s === void 0 ? void 0 : s.attrs, g = Rr(c, a, m);
    g && (d = g.from, h = g.to), t.removeMark(d, h, a);
  } else
    u.forEach((d) => {
      t.removeMark(d.$from.pos, d.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, Lu = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  let s = null, o = null;
  const l = Mn(typeof r == "string" ? r : r.name, n.schema);
  return l ? (l === "node" && (s = H(r, n.schema)), l === "mark" && (o = ze(r, n.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, f = a.$to.pos;
    n.doc.nodesBetween(c, f, (u, d) => {
      s && s === u.type && t.setNodeMarkup(d, void 0, {
        ...u.attrs,
        ...e
      }), o && u.marks.length && u.marks.forEach((h) => {
        if (o === h.type) {
          const m = Math.max(d, c), g = Math.min(d + u.nodeSize, f);
          t.addMark(m, g, o.create({
            ...h.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, $u = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = H(r, t.schema);
  return lf(i, e)(t, n);
}, ju = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = H(r, t.schema);
  return af(i, e)(t, n);
};
var Wu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: vf,
  clearContent: Af,
  clearNodes: Rf,
  command: If,
  createParagraphNear: Pf,
  deleteCurrentNode: Bf,
  deleteNode: Ff,
  deleteRange: zf,
  deleteSelection: Vf,
  enter: Lf,
  exitCode: $f,
  extendMarkRange: Wf,
  first: Jf,
  focus: Hf,
  forEach: _f,
  insertContent: qf,
  insertContentAt: Yf,
  joinUp: Gf,
  joinDown: Xf,
  joinBackward: Zf,
  joinForward: Qf,
  keyboardShortcut: tu,
  lift: nu,
  liftEmptyBlock: ru,
  liftListItem: iu,
  newlineInCode: su,
  resetAttributes: ou,
  scrollIntoView: lu,
  selectAll: au,
  selectNodeBackward: cu,
  selectNodeForward: fu,
  selectParentNode: uu,
  selectTextblockEnd: du,
  selectTextblockStart: hu,
  setContent: pu,
  setMark: wu,
  setMeta: Ou,
  setNode: Tu,
  setNodeSelection: Eu,
  setTextSelection: Nu,
  sinkListItem: Du,
  splitBlock: vu,
  splitListItem: Au,
  toggleList: Ru,
  toggleMark: Iu,
  toggleNode: Pu,
  toggleWrap: Bu,
  undoInputRule: Fu,
  unsetAllMarks: zu,
  unsetMark: Vu,
  updateAttributes: Lu,
  wrapIn: $u,
  wrapInList: ju
});
const Ju = Me.create({
  name: "commands",
  addCommands() {
    return {
      ...Wu
    };
  }
}), Hu = Me.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Be({
        key: new $t("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), _u = Me.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: r } = this;
    return [
      new Be({
        key: new $t("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              r.isFocused = !0;
              const n = r.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(n), !1;
            },
            blur: (e, t) => {
              r.isFocused = !1;
              const n = r.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(n), !1;
            }
          }
        }
      })
    ];
  }
}), qu = Me.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const r = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: f, $anchor: u } = a, { pos: d, parent: h } = u, m = v.atStart(c).from === d;
        return !f || !m || !h.type.isTextblock || h.textContent.length ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), n = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: r,
      "Mod-Backspace": r,
      "Shift-Backspace": r,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...n
    }, s = {
      ...n,
      "Ctrl-h": r,
      "Alt-Backspace": r,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Ir() || Do() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new Be({
        key: new $t("clearDocument"),
        appendTransaction: (r, e, t) => {
          if (!(r.some((m) => m.docChanged) && !e.doc.eq(t.doc)))
            return;
          const { empty: i, from: s, to: o } = e.selection, l = v.atStart(e.doc).from, a = v.atEnd(e.doc).to, c = s === l && o === a, f = t.doc.textBetween(0, t.doc.content.size, " ", " ").length === 0;
          if (i || !c || !f)
            return;
          const u = t.tr, d = kn({
            state: t,
            transaction: u
          }), { commands: h } = new bn({
            editor: this.editor,
            state: d
          });
          if (h.clearNodes(), !!u.steps.length)
            return u;
        }
      })
    ];
  }
}), Ku = Me.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Be({
        key: new $t("tabindex"),
        props: {
          attributes: this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var Uu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer: Df,
  Commands: Ju,
  Editable: Hu,
  FocusEvents: _u,
  Keymap: qu,
  Tabindex: Ku
});
const Yu = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function Gu(r, e) {
  const t = document.querySelector("style[data-tiptap-style]");
  if (t !== null)
    return t;
  const n = document.createElement("style");
  return e && n.setAttribute("nonce", e), n.setAttribute("data-tiptap-style", ""), n.innerHTML = r, document.getElementsByTagName("head")[0].appendChild(n), n;
}
let Xu = class extends pf {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }));
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = Gu(Yu, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   */
  registerPlugin(e, t) {
    const n = wo(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: n });
    this.view.updateState(i);
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKey The plugins name
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = typeof e == "string" ? `${e}$` : e.key, n = this.state.reconfigure({
      // @ts-ignore
      plugins: this.state.plugins.filter((i) => !i.key.startsWith(t))
    });
    this.view.updateState(n);
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    const t = [...this.options.enableCoreExtensions ? Object.values(Uu) : [], ...this.options.extensions].filter((n) => ["extension", "node", "mark"].includes(n == null ? void 0 : n.type));
    this.extensionManager = new lt(t, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new bn({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    const e = vo(this.options.content, this.schema, this.options.parseOptions), t = No(e, this.options.autofocus);
    this.view = new vc(this.options.element, {
      ...this.options.editorProps,
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: st.create({
        doc: e,
        selection: t || void 0
      })
    });
    const n = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(n), this.createNodeViews();
    const i = this.view.dom;
    i.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((o) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(o);
      });
      return;
    }
    const t = this.state.apply(e), n = !this.state.selection.eq(t.selection);
    this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), n && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), s = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), s && this.emit("blur", {
      editor: this,
      event: s.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return Su(this.state, e);
  }
  isActive(e, t) {
    const n = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return xu(this.state, n, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return yu(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: n = {} } = e || {};
    return ku(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...To(this.schema),
        ...n
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Mu(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
};
function Vt(r) {
  return new bf({
    find: r.find,
    handler: ({ state: e, range: t, match: n }) => {
      const i = D(r.getAttributes, void 0, n);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = n[n.length - 1], l = n[0];
      let a = t.to;
      if (o) {
        const c = l.search(/\S/), f = t.from + l.indexOf(o), u = f + o.length;
        if (Ro(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((g) => g === r.type && g !== h.mark.type)).filter((h) => h.to > f).length)
          return null;
        u < t.to && s.delete(u, t.to), f > t.from && s.delete(t.from + c, f), a = t.from + c + o.length, s.addMark(t.from + c, a, r.type.create(i || {})), s.removeStoredMark(r.type);
      }
    }
  });
}
class Pe {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = D(C(this, "addOptions", {
      name: this.name
    }))), this.storage = D(C(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Pe(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = xn(this.options, e), t.storage = D(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Pe(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = D(C(t, "addOptions", {
      name: t.name
    })), t.storage = D(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: n } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const a = o.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return a && n.removeStoredMark(a), n.insertText(" ", i.pos), e.view.dispatch(n), !0;
    }
    return !1;
  }
}
class yt {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = D(C(this, "addOptions", {
      name: this.name
    }))), this.storage = D(C(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new yt(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = xn(this.options, e), t.storage = D(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new yt(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = D(C(t, "addOptions", {
      name: t.name
    })), t.storage = D(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Lt(r) {
  return new Cf({
    find: r.find,
    handler: ({ state: e, range: t, match: n }) => {
      const i = D(r.getAttributes, void 0, n);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = n[n.length - 1], l = n[0];
      let a = t.to;
      if (o) {
        const c = l.search(/\S/), f = t.from + l.indexOf(o), u = f + o.length;
        if (Ro(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((g) => g === r.type && g !== h.mark.type)).filter((h) => h.to > f).length)
          return null;
        u < t.to && s.delete(u, t.to), f > t.from && s.delete(t.from + c, f), a = t.from + c + o.length, s.addMark(t.from + c, a, r.type.create(i || {})), s.removeStoredMark(r.type);
      }
    }
  });
}
class Zu extends Xu {
  constructor() {
    super(...arguments), this.contentComponent = null;
  }
}
const Qu = ({ renderers: r }) => re.createElement(re.Fragment, null, Object.entries(r).map(([e, t]) => ll.createPortal(t.reactElement, t.element, e)));
class ed extends re.Component {
  constructor(e) {
    super(e), this.editorContentRef = re.createRef(), this.initialized = !1, this.state = {
      renderers: {}
    };
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.init();
  }
  init() {
    const { editor: e } = this.props;
    if (e && e.options.element) {
      if (e.contentComponent)
        return;
      const t = this.editorContentRef.current;
      t.append(...e.options.element.childNodes), e.setOptions({
        element: t
      }), e.contentComponent = this, e.createNodeViews(), this.initialized = !0;
    }
  }
  maybeFlushSync(e) {
    this.initialized ? queueMicrotask(() => {
      al(e);
    }) : e();
  }
  setRenderer(e, t) {
    this.maybeFlushSync(() => {
      this.setState(({ renderers: n }) => ({
        renderers: {
          ...n,
          [e]: t
        }
      }));
    });
  }
  removeRenderer(e) {
    this.maybeFlushSync(() => {
      this.setState(({ renderers: t }) => {
        const n = { ...t };
        return delete n[e], { renderers: n };
      });
    });
  }
  componentWillUnmount() {
    const { editor: e } = this.props;
    if (!e || (this.initialized = !1, e.isDestroyed || e.view.setProps({
      nodeViews: {}
    }), e.contentComponent = null, !e.options.element.firstChild))
      return;
    const t = document.createElement("div");
    t.append(...e.options.element.childNodes), e.setOptions({
      element: t
    });
  }
  render() {
    const { editor: e, ...t } = this.props;
    return re.createElement(
      re.Fragment,
      null,
      re.createElement("div", { ref: this.editorContentRef, ...t }),
      re.createElement(Qu, { renderers: this.state.renderers })
    );
  }
}
const yd = re.memo(ed), td = il({
  onDragStart: void 0
}), nd = () => ol(td);
re.forwardRef((r, e) => {
  const { onDragStart: t } = nd(), n = r.as || "div";
  return re.createElement(n, { ...r, ref: e, "data-node-view-wrapper": "", onDragStart: t, style: {
    whiteSpace: "normal",
    ...r.style
  } });
});
function rd() {
  const [, r] = cs(0);
  return () => r((e) => e + 1);
}
const kd = (r = {}, e = []) => {
  const [t, n] = cs(null), i = rd();
  return sl(() => {
    let s = !0;
    const o = new Zu(r);
    return n(o), o.on("transaction", () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          s && i();
        });
      });
    }), () => {
      o.destroy(), s = !1;
    };
  }, e), t;
}, bd = yt.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["br", Qe(this.options.HTMLAttributes, r)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: r, chain: e, state: t, editor: n }) => r.first([
        () => r.exitCode(),
        () => r.command(() => {
          const { selection: i, storedMarks: s } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: o } = this.options, { splittableMarks: l } = n.extensionManager, a = s || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: f }) => {
            if (f && a && o) {
              const u = a.filter((d) => l.includes(d.type.name));
              c.ensureMarks(u);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), Sd = yt.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["p", Qe(this.options.HTMLAttributes, r), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: r }) => r.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), xd = yt.create({
  name: "text",
  group: "inline"
}), id = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/, sd = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g, od = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/, ld = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g, Md = Pe.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (r) => r.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (r) => /^(bold(er)?|[5-9]\d{2,})$/.test(r) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["strong", Qe(this.options.HTMLAttributes, r), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: r }) => r.setMark(this.name),
      toggleBold: () => ({ commands: r }) => r.toggleMark(this.name),
      unsetBold: () => ({ commands: r }) => r.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      Vt({
        find: id,
        type: this.type
      }),
      Vt({
        find: od,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Lt({
        find: sd,
        type: this.type
      }),
      Lt({
        find: ld,
        type: this.type
      })
    ];
  }
}), ad = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/, cd = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g, fd = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/, ud = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g, Cd = Pe.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (r) => r.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["em", Qe(this.options.HTMLAttributes, r), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: r }) => r.setMark(this.name),
      toggleItalic: () => ({ commands: r }) => r.toggleMark(this.name),
      unsetItalic: () => ({ commands: r }) => r.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      Vt({
        find: ad,
        type: this.type
      }),
      Vt({
        find: fd,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Lt({
        find: cd,
        type: this.type
      }),
      Lt({
        find: ud,
        type: this.type
      })
    ];
  }
}), wd = Pe.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (r) => r.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["u", Qe(this.options.HTMLAttributes, r), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: r }) => r.setMark(this.name),
      toggleUnderline: () => ({ commands: r }) => r.toggleMark(this.name),
      unsetUnderline: () => ({ commands: r }) => r.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), dd = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/, hd = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g, Od = Pe.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (r) => r.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: r }) {
    return ["s", Qe(this.options.HTMLAttributes, r), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: r }) => r.setMark(this.name),
      toggleStrike: () => ({ commands: r }) => r.toggleMark(this.name),
      unsetStrike: () => ({ commands: r }) => r.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-x": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      Vt({
        find: dd,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Lt({
        find: hd,
        type: this.type
      })
    ];
  }
});
export {
  Md as B,
  W as D,
  Me as E,
  bd as H,
  Cd as I,
  yt as N,
  Be as P,
  U as R,
  ne as S,
  xd as T,
  wd as U,
  $t as a,
  fe as b,
  Sd as c,
  j as d,
  ae as e,
  M as f,
  yd as g,
  Od as h,
  ii as j,
  kd as u
};
