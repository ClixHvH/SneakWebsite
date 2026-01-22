var ap = (e) => {
  throw TypeError(e);
};
var gu = (e, t, n) => t.has(e) || ap("Cannot " + n);
var E = (e, t, n) => (
    gu(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  U = (e, t, n) =>
    t.has(e)
      ? ap("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  _ = (e, t, n, r) => (
    gu(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  te = (e, t, n) => (gu(e, t, "access private method"), n);
var Zo = (e, t, n, r) => ({
  set _(s) {
    _(e, t, s, n);
  },
  get _() {
    return E(e, t, r);
  },
});
function O2(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function $g(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Bg = { exports: {} },
  Ll = {},
  Ug = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Do = Symbol.for("react.element"),
  I2 = Symbol.for("react.portal"),
  V2 = Symbol.for("react.fragment"),
  F2 = Symbol.for("react.strict_mode"),
  _2 = Symbol.for("react.profiler"),
  z2 = Symbol.for("react.provider"),
  $2 = Symbol.for("react.context"),
  B2 = Symbol.for("react.forward_ref"),
  U2 = Symbol.for("react.suspense"),
  W2 = Symbol.for("react.memo"),
  H2 = Symbol.for("react.lazy"),
  lp = Symbol.iterator;
function K2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lp && e[lp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hg = Object.assign,
  Kg = {};
function hi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Kg),
    (this.updater = n || Wg));
}
hi.prototype.isReactComponent = {};
hi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
hi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yg() {}
Yg.prototype = hi.prototype;
function sf(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Kg),
    (this.updater = n || Wg));
}
var of = (sf.prototype = new Yg());
of.constructor = sf;
Hg(of, hi.prototype);
of.isPureReactComponent = !0;
var up = Array.isArray,
  Qg = Object.prototype.hasOwnProperty,
  af = { current: null },
  Gg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xg(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Qg.call(t, r) && !Gg.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: Do,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: af.current,
  };
}
function Y2(e, t) {
  return {
    $$typeof: Do,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function lf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Do;
}
function Q2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cp = /\/+/g;
function yu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Q2("" + e.key)
    : t.toString(36);
}
function Na(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Do:
          case I2:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + yu(o, 0) : r),
      up(s)
        ? ((n = ""),
          e != null && (n = e.replace(cp, "$&/") + "/"),
          Na(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (lf(s) &&
            (s = Y2(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(cp, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), up(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + yu(i, a);
      o += Na(i, t, n, l, s);
    }
  else if (((l = K2(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (l = r + yu(i, a++)), (o += Na(i, t, n, l, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function Jo(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Na(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function G2(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Xe = { current: null },
  ja = { transition: null },
  X2 = {
    ReactCurrentDispatcher: Xe,
    ReactCurrentBatchConfig: ja,
    ReactCurrentOwner: af,
  };
function qg() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
  map: Jo,
  forEach: function (e, t, n) {
    Jo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Jo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Jo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!lf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
J.Component = hi;
J.Fragment = V2;
J.Profiler = _2;
J.PureComponent = sf;
J.StrictMode = F2;
J.Suspense = U2;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X2;
J.act = qg;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Hg({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = af.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Qg.call(t, l) &&
        !Gg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Do, type: e.type, key: s, ref: i, props: r, _owner: o };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: $2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: z2, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = Xg;
J.createFactory = function (e) {
  var t = Xg.bind(null, e);
  return ((t.type = e), t);
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: B2, render: e };
};
J.isValidElement = lf;
J.lazy = function (e) {
  return { $$typeof: H2, _payload: { _status: -1, _result: e }, _init: G2 };
};
J.memo = function (e, t) {
  return { $$typeof: W2, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = ja.transition;
  ja.transition = {};
  try {
    e();
  } finally {
    ja.transition = t;
  }
};
J.unstable_act = qg;
J.useCallback = function (e, t) {
  return Xe.current.useCallback(e, t);
};
J.useContext = function (e) {
  return Xe.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return Xe.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return Xe.current.useEffect(e, t);
};
J.useId = function () {
  return Xe.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return Xe.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return Xe.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return Xe.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return Xe.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return Xe.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return Xe.current.useRef(e);
};
J.useState = function (e) {
  return Xe.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return Xe.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return Xe.current.useTransition();
};
J.version = "18.3.1";
Ug.exports = J;
var x = Ug.exports;
const D = $g(x),
  Zg = O2({ __proto__: null, default: D }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var q2 = x,
  Z2 = Symbol.for("react.element"),
  J2 = Symbol.for("react.fragment"),
  eb = Object.prototype.hasOwnProperty,
  tb = q2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  nb = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jg(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) eb.call(t, r) && !nb.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: Z2,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: tb.current,
  };
}
Ll.Fragment = J2;
Ll.jsx = Jg;
Ll.jsxs = Jg;
Bg.exports = Ll;
var d = Bg.exports,
  ey = { exports: {} },
  vt = {},
  ty = { exports: {} },
  ny = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, R) {
    var I = j.length;
    j.push(R);
    e: for (; 0 < I; ) {
      var Y = (I - 1) >>> 1,
        B = j[Y];
      if (0 < s(B, R)) ((j[Y] = R), (j[I] = B), (I = Y));
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var R = j[0],
      I = j.pop();
    if (I !== R) {
      j[0] = I;
      e: for (var Y = 0, B = j.length, Z = B >>> 1; Y < Z; ) {
        var ee = 2 * (Y + 1) - 1,
          Ee = j[ee],
          _e = ee + 1,
          se = j[_e];
        if (0 > s(Ee, I))
          _e < B && 0 > s(se, Ee)
            ? ((j[Y] = se), (j[_e] = I), (Y = _e))
            : ((j[Y] = Ee), (j[ee] = I), (Y = ee));
        else if (_e < B && 0 > s(se, I)) ((j[Y] = se), (j[_e] = I), (Y = _e));
        else break e;
      }
    }
    return R;
  }
  function s(j, R) {
    var I = j.sortIndex - R.sortIndex;
    return I !== 0 ? I : j.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    h = 3,
    p = !1,
    b = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(j) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= j)
        (r(u), (R.sortIndex = R.expirationTime), t(l, R));
      else break;
      R = n(u);
    }
  }
  function S(j) {
    if (((y = !1), v(j), !b))
      if (n(l) !== null) ((b = !0), H(C));
      else {
        var R = n(u);
        R !== null && $(S, R.startTime - j);
      }
  }
  function C(j, R) {
    ((b = !1), y && ((y = !1), g(P), (P = -1)), (p = !0));
    var I = h;
    try {
      for (
        v(R), f = n(l);
        f !== null && (!(f.expirationTime > R) || (j && !z()));
      ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          ((f.callback = null), (h = f.priorityLevel));
          var B = Y(f.expirationTime <= R);
          ((R = e.unstable_now()),
            typeof B == "function" ? (f.callback = B) : f === n(l) && r(l),
            v(R));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Z = !0;
      else {
        var ee = n(u);
        (ee !== null && $(S, ee.startTime - R), (Z = !1));
      }
      return Z;
    } finally {
      ((f = null), (h = I), (p = !1));
    }
  }
  var T = !1,
    k = null,
    P = -1,
    A = 5,
    M = -1;
  function z() {
    return !(e.unstable_now() - M < A);
  }
  function V() {
    if (k !== null) {
      var j = e.unstable_now();
      M = j;
      var R = !0;
      try {
        R = k(!0, j);
      } finally {
        R ? K() : ((T = !1), (k = null));
      }
    } else T = !1;
  }
  var K;
  if (typeof m == "function")
    K = function () {
      m(V);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      q = O.port2;
    ((O.port1.onmessage = V),
      (K = function () {
        q.postMessage(null);
      }));
  } else
    K = function () {
      w(V, 0);
    };
  function H(j) {
    ((k = j), T || ((T = !0), K()));
  }
  function $(j, R) {
    P = w(function () {
      j(e.unstable_now());
    }, R);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || p || ((b = !0), H(C));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (A = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (j) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = h;
      }
      var I = h;
      h = R;
      try {
        return j();
      } finally {
        h = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, R) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var I = h;
      h = j;
      try {
        return R();
      } finally {
        h = I;
      }
    }),
    (e.unstable_scheduleCallback = function (j, R, I) {
      var Y = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? Y + I : Y))
          : (I = Y),
        j)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = I + B),
        (j = {
          id: c++,
          callback: R,
          priorityLevel: j,
          startTime: I,
          expirationTime: B,
          sortIndex: -1,
        }),
        I > Y
          ? ((j.sortIndex = I),
            t(u, j),
            n(l) === null &&
              j === n(u) &&
              (y ? (g(P), (P = -1)) : (y = !0), $(S, I - Y)))
          : ((j.sortIndex = B), t(l, j), b || p || ((b = !0), H(C))),
        j
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (j) {
      var R = h;
      return function () {
        var I = h;
        h = R;
        try {
          return j.apply(this, arguments);
        } finally {
          h = I;
        }
      };
    }));
})(ny);
ty.exports = ny;
var rb = ty.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sb = x,
  yt = rb;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ry = new Set(),
  so = {};
function rs(e, t) {
  (ti(e, t), ti(e + "Capture", t));
}
function ti(e, t) {
  for (so[e] = t, e = 0; e < t.length; e++) ry.add(t[e]);
}
var Sn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pc = Object.prototype.hasOwnProperty,
  ib =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  dp = {},
  fp = {};
function ob(e) {
  return pc.call(fp, e)
    ? !0
    : pc.call(dp, e)
      ? !1
      : ib.test(e)
        ? (fp[e] = !0)
        : ((dp[e] = !0), !1);
}
function ab(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function lb(e, t, n, r) {
  if (t === null || typeof t > "u" || ab(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function qe(e, t, n, r, s, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new qe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uf = /[\-:]([a-z])/g;
function cf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(uf, cf);
    Fe[t] = new qe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(uf, cf);
    Fe[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(uf, cf);
  Fe[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new qe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function df(e, t, n, r) {
  var s = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (lb(t, n, s, r) && (n = null),
    r || s === null
      ? ob(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jn = sb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ea = Symbol.for("react.element"),
  ms = Symbol.for("react.portal"),
  gs = Symbol.for("react.fragment"),
  ff = Symbol.for("react.strict_mode"),
  mc = Symbol.for("react.profiler"),
  sy = Symbol.for("react.provider"),
  iy = Symbol.for("react.context"),
  hf = Symbol.for("react.forward_ref"),
  gc = Symbol.for("react.suspense"),
  yc = Symbol.for("react.suspense_list"),
  pf = Symbol.for("react.memo"),
  Bn = Symbol.for("react.lazy"),
  oy = Symbol.for("react.offscreen"),
  hp = Symbol.iterator;
function Ti(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hp && e[hp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xe = Object.assign,
  vu;
function Vi(e) {
  if (vu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      vu = (t && t[1]) || "";
    }
  return (
    `
` +
    vu +
    e
  );
}
var xu = !1;
function wu(e, t) {
  if (!e || xu) return "";
  xu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((xu = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Vi(e) : "";
}
function ub(e) {
  switch (e.tag) {
    case 5:
      return Vi(e.type);
    case 16:
      return Vi("Lazy");
    case 13:
      return Vi("Suspense");
    case 19:
      return Vi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = wu(e.type, !1)), e);
    case 11:
      return ((e = wu(e.type.render, !1)), e);
    case 1:
      return ((e = wu(e.type, !0)), e);
    default:
      return "";
  }
}
function vc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gs:
      return "Fragment";
    case ms:
      return "Portal";
    case mc:
      return "Profiler";
    case ff:
      return "StrictMode";
    case gc:
      return "Suspense";
    case yc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case iy:
        return (e.displayName || "Context") + ".Consumer";
      case sy:
        return (e._context.displayName || "Context") + ".Provider";
      case hf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pf:
        return (
          (t = e.displayName || null),
          t !== null ? t : vc(e.type) || "Memo"
        );
      case Bn:
        ((t = e._payload), (e = e._init));
        try {
          return vc(e(t));
        } catch {}
    }
  return null;
}
function cb(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return vc(t);
    case 8:
      return t === ff ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function fr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ay(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function db(e) {
  var t = ay(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          ((r = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function ta(e) {
  e._valueTracker || (e._valueTracker = db(e));
}
function ly(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ay(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ga(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xc(e, t) {
  var n = t.checked;
  return xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function pp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = fr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function uy(e, t) {
  ((t = t.checked), t != null && df(e, "checked", t, !1));
}
function wc(e, t) {
  uy(e, t);
  var n = fr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? bc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bc(e, t.type, fr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function mp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function bc(e, t, n) {
  (t !== "number" || Ga(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fi = Array.isArray;
function Ls(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + fr(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Fi(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: fr(n) };
}
function cy(e, t) {
  var n = fr(t.value),
    r = fr(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function yp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function dy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Cc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? dy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var na,
  fy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        na = na || document.createElement("div"),
          na.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = na.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function io(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ui = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  fb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ui).forEach(function (e) {
  fb.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ui[t] = Ui[e]));
  });
});
function hy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ui.hasOwnProperty(e) && Ui[e])
      ? ("" + t).trim()
      : t + "px";
}
function py(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = hy(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var hb = xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Ec(e, t) {
  if (t) {
    if (hb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Tc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var kc = null;
function mf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pc = null,
  Ds = null,
  Os = null;
function vp(e) {
  if ((e = Vo(e))) {
    if (typeof Pc != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Fl(t)), Pc(e.stateNode, e.type, t));
  }
}
function my(e) {
  Ds ? (Os ? Os.push(e) : (Os = [e])) : (Ds = e);
}
function gy() {
  if (Ds) {
    var e = Ds,
      t = Os;
    if (((Os = Ds = null), vp(e), t)) for (e = 0; e < t.length; e++) vp(t[e]);
  }
}
function yy(e, t) {
  return e(t);
}
function vy() {}
var bu = !1;
function xy(e, t, n) {
  if (bu) return e(t, n);
  bu = !0;
  try {
    return yy(e, t, n);
  } finally {
    ((bu = !1), (Ds !== null || Os !== null) && (vy(), gy()));
  }
}
function oo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Nc = !1;
if (Sn)
  try {
    var ki = {};
    (Object.defineProperty(ki, "passive", {
      get: function () {
        Nc = !0;
      },
    }),
      window.addEventListener("test", ki, ki),
      window.removeEventListener("test", ki, ki));
  } catch {
    Nc = !1;
  }
function pb(e, t, n, r, s, i, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Wi = !1,
  Xa = null,
  qa = !1,
  jc = null,
  mb = {
    onError: function (e) {
      ((Wi = !0), (Xa = e));
    },
  };
function gb(e, t, n, r, s, i, o, a, l) {
  ((Wi = !1), (Xa = null), pb.apply(mb, arguments));
}
function yb(e, t, n, r, s, i, o, a, l) {
  if ((gb.apply(this, arguments), Wi)) {
    if (Wi) {
      var u = Xa;
      ((Wi = !1), (Xa = null));
    } else throw Error(L(198));
    qa || ((qa = !0), (jc = u));
  }
}
function ss(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function wy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function xp(e) {
  if (ss(e) !== e) throw Error(L(188));
}
function vb(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ss(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return (xp(s), e);
        if (i === r) return (xp(s), t);
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          ((o = !0), (n = s), (r = i));
          break;
        }
        if (a === r) {
          ((o = !0), (r = s), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((o = !0), (n = i), (r = s));
            break;
          }
          if (a === r) {
            ((o = !0), (r = i), (n = s));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function by(e) {
  return ((e = vb(e)), e !== null ? Sy(e) : null);
}
function Sy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Sy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cy = yt.unstable_scheduleCallback,
  wp = yt.unstable_cancelCallback,
  xb = yt.unstable_shouldYield,
  wb = yt.unstable_requestPaint,
  Ce = yt.unstable_now,
  bb = yt.unstable_getCurrentPriorityLevel,
  gf = yt.unstable_ImmediatePriority,
  Ey = yt.unstable_UserBlockingPriority,
  Za = yt.unstable_NormalPriority,
  Sb = yt.unstable_LowPriority,
  Ty = yt.unstable_IdlePriority,
  Dl = null,
  on = null;
function Cb(e) {
  if (on && typeof on.onCommitFiberRoot == "function")
    try {
      on.onCommitFiberRoot(Dl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Wt = Math.clz32 ? Math.clz32 : kb,
  Eb = Math.log,
  Tb = Math.LN2;
function kb(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Eb(e) / Tb) | 0)) | 0);
}
var ra = 64,
  sa = 4194304;
function _i(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ja(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = _i(a)) : ((i &= o), i !== 0 && (r = _i(i)));
  } else ((o = n & ~s), o !== 0 ? (r = _i(o)) : i !== 0 && (r = _i(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Wt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function Pb(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Nb(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var o = 31 - Wt(i),
      a = 1 << o,
      l = s[o];
    (l === -1
      ? (!(a & n) || a & r) && (s[o] = Pb(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function Rc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ky() {
  var e = ra;
  return ((ra <<= 1), !(ra & 4194240) && (ra = 64), e);
}
function Su(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Oo(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Wt(t)),
    (e[t] = n));
}
function jb(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Wt(n),
      i = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
  }
}
function yf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Wt(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var ae = 0;
function Py(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Ny,
  vf,
  jy,
  Ry,
  My,
  Mc = !1,
  ia = [],
  rr = null,
  sr = null,
  ir = null,
  ao = new Map(),
  lo = new Map(),
  Wn = [],
  Rb =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function bp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rr = null;
      break;
    case "dragenter":
    case "dragleave":
      sr = null;
      break;
    case "mouseover":
    case "mouseout":
      ir = null;
      break;
    case "pointerover":
    case "pointerout":
      ao.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      lo.delete(t.pointerId);
  }
}
function Pi(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = Vo(t)), t !== null && vf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Mb(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((rr = Pi(rr, e, t, n, r, s)), !0);
    case "dragenter":
      return ((sr = Pi(sr, e, t, n, r, s)), !0);
    case "mouseover":
      return ((ir = Pi(ir, e, t, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (ao.set(i, Pi(ao.get(i) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        lo.set(i, Pi(lo.get(i) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function Ay(e) {
  var t = Ar(e.target);
  if (t !== null) {
    var n = ss(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = wy(n)), t !== null)) {
          ((e.blockedOn = t),
            My(e.priority, function () {
              jy(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ra(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ac(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((kc = r), n.target.dispatchEvent(r), (kc = null));
    } else return ((t = Vo(n)), t !== null && vf(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Sp(e, t, n) {
  Ra(e) && n.delete(t);
}
function Ab() {
  ((Mc = !1),
    rr !== null && Ra(rr) && (rr = null),
    sr !== null && Ra(sr) && (sr = null),
    ir !== null && Ra(ir) && (ir = null),
    ao.forEach(Sp),
    lo.forEach(Sp));
}
function Ni(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Mc ||
      ((Mc = !0),
      yt.unstable_scheduleCallback(yt.unstable_NormalPriority, Ab)));
}
function uo(e) {
  function t(s) {
    return Ni(s, e);
  }
  if (0 < ia.length) {
    Ni(ia[0], e);
    for (var n = 1; n < ia.length; n++) {
      var r = ia[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rr !== null && Ni(rr, e),
      sr !== null && Ni(sr, e),
      ir !== null && Ni(ir, e),
      ao.forEach(t),
      lo.forEach(t),
      n = 0;
    n < Wn.length;
    n++
  )
    ((r = Wn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Wn.length && ((n = Wn[0]), n.blockedOn === null); )
    (Ay(n), n.blockedOn === null && Wn.shift());
}
var Is = jn.ReactCurrentBatchConfig,
  el = !0;
function Lb(e, t, n, r) {
  var s = ae,
    i = Is.transition;
  Is.transition = null;
  try {
    ((ae = 1), xf(e, t, n, r));
  } finally {
    ((ae = s), (Is.transition = i));
  }
}
function Db(e, t, n, r) {
  var s = ae,
    i = Is.transition;
  Is.transition = null;
  try {
    ((ae = 4), xf(e, t, n, r));
  } finally {
    ((ae = s), (Is.transition = i));
  }
}
function xf(e, t, n, r) {
  if (el) {
    var s = Ac(e, t, n, r);
    if (s === null) (Au(e, t, r, tl, n), bp(e, r));
    else if (Mb(s, e, t, n, r)) r.stopPropagation();
    else if ((bp(e, r), t & 4 && -1 < Rb.indexOf(e))) {
      for (; s !== null; ) {
        var i = Vo(s);
        if (
          (i !== null && Ny(i),
          (i = Ac(e, t, n, r)),
          i === null && Au(e, t, r, tl, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else Au(e, t, r, null, n);
  }
}
var tl = null;
function Ac(e, t, n, r) {
  if (((tl = null), (e = mf(r)), (e = Ar(e)), e !== null))
    if (((t = ss(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = wy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((tl = e), null);
}
function Ly(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (bb()) {
        case gf:
          return 1;
        case Ey:
          return 4;
        case Za:
        case Sb:
          return 16;
        case Ty:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var er = null,
  wf = null,
  Ma = null;
function Dy() {
  if (Ma) return Ma;
  var e,
    t = wf,
    n = t.length,
    r,
    s = "value" in er ? er.value : er.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (Ma = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Aa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function oa() {
  return !0;
}
function Cp() {
  return !1;
}
function xt(e) {
  function t(n, r, s, i, o) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? oa
        : Cp),
      (this.isPropagationStopped = Cp),
      this
    );
  }
  return (
    xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = oa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = oa));
      },
      persist: function () {},
      isPersistent: oa,
    }),
    t
  );
}
var pi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  bf = xt(pi),
  Io = xe({}, pi, { view: 0, detail: 0 }),
  Ob = xt(Io),
  Cu,
  Eu,
  ji,
  Ol = xe({}, Io, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Sf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ji &&
            (ji && e.type === "mousemove"
              ? ((Cu = e.screenX - ji.screenX), (Eu = e.screenY - ji.screenY))
              : (Eu = Cu = 0),
            (ji = e)),
          Cu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Eu;
    },
  }),
  Ep = xt(Ol),
  Ib = xe({}, Ol, { dataTransfer: 0 }),
  Vb = xt(Ib),
  Fb = xe({}, Io, { relatedTarget: 0 }),
  Tu = xt(Fb),
  _b = xe({}, pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zb = xt(_b),
  $b = xe({}, pi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Bb = xt($b),
  Ub = xe({}, pi, { data: 0 }),
  Tp = xt(Ub),
  Wb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Hb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
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
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Kb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Yb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kb[e]) ? !!t[e] : !1;
}
function Sf() {
  return Yb;
}
var Qb = xe({}, Io, {
    key: function (e) {
      if (e.key) {
        var t = Wb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Aa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Hb[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sf,
    charCode: function (e) {
      return e.type === "keypress" ? Aa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Aa(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Gb = xt(Qb),
  Xb = xe({}, Ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  kp = xt(Xb),
  qb = xe({}, Io, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sf,
  }),
  Zb = xt(qb),
  Jb = xe({}, pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  e5 = xt(Jb),
  t5 = xe({}, Ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  n5 = xt(t5),
  r5 = [9, 13, 27, 32],
  Cf = Sn && "CompositionEvent" in window,
  Hi = null;
Sn && "documentMode" in document && (Hi = document.documentMode);
var s5 = Sn && "TextEvent" in window && !Hi,
  Oy = Sn && (!Cf || (Hi && 8 < Hi && 11 >= Hi)),
  Pp = " ",
  Np = !1;
function Iy(e, t) {
  switch (e) {
    case "keyup":
      return r5.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vy(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var ys = !1;
function i5(e, t) {
  switch (e) {
    case "compositionend":
      return Vy(t);
    case "keypress":
      return t.which !== 32 ? null : ((Np = !0), Pp);
    case "textInput":
      return ((e = t.data), e === Pp && Np ? null : e);
    default:
      return null;
  }
}
function o5(e, t) {
  if (ys)
    return e === "compositionend" || (!Cf && Iy(e, t))
      ? ((e = Dy()), (Ma = wf = er = null), (ys = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Oy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var a5 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function jp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!a5[e.type] : t === "textarea";
}
function Fy(e, t, n, r) {
  (my(r),
    (t = nl(t, "onChange")),
    0 < t.length &&
      ((n = new bf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Ki = null,
  co = null;
function l5(e) {
  Gy(e, 0);
}
function Il(e) {
  var t = ws(e);
  if (ly(t)) return e;
}
function u5(e, t) {
  if (e === "change") return t;
}
var _y = !1;
if (Sn) {
  var ku;
  if (Sn) {
    var Pu = "oninput" in document;
    if (!Pu) {
      var Rp = document.createElement("div");
      (Rp.setAttribute("oninput", "return;"),
        (Pu = typeof Rp.oninput == "function"));
    }
    ku = Pu;
  } else ku = !1;
  _y = ku && (!document.documentMode || 9 < document.documentMode);
}
function Mp() {
  Ki && (Ki.detachEvent("onpropertychange", zy), (co = Ki = null));
}
function zy(e) {
  if (e.propertyName === "value" && Il(co)) {
    var t = [];
    (Fy(t, co, e, mf(e)), xy(l5, t));
  }
}
function c5(e, t, n) {
  e === "focusin"
    ? (Mp(), (Ki = t), (co = n), Ki.attachEvent("onpropertychange", zy))
    : e === "focusout" && Mp();
}
function d5(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Il(co);
}
function f5(e, t) {
  if (e === "click") return Il(t);
}
function h5(e, t) {
  if (e === "input" || e === "change") return Il(t);
}
function p5(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Kt = typeof Object.is == "function" ? Object.is : p5;
function fo(e, t) {
  if (Kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!pc.call(t, s) || !Kt(e[s], t[s])) return !1;
  }
  return !0;
}
function Ap(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lp(e, t) {
  var n = Ap(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ap(n);
  }
}
function $y(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? $y(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function By() {
  for (var e = window, t = Ga(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ga(e.document);
  }
  return t;
}
function Ef(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function m5(e) {
  var t = By(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    $y(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ef(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Lp(n, i)));
        var o = Lp(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var g5 = Sn && "documentMode" in document && 11 >= document.documentMode,
  vs = null,
  Lc = null,
  Yi = null,
  Dc = !1;
function Dp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Dc ||
    vs == null ||
    vs !== Ga(r) ||
    ((r = vs),
    "selectionStart" in r && Ef(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Yi && fo(Yi, r)) ||
      ((Yi = r),
      (r = nl(Lc, "onSelect")),
      0 < r.length &&
        ((t = new bf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = vs))));
}
function aa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var xs = {
    animationend: aa("Animation", "AnimationEnd"),
    animationiteration: aa("Animation", "AnimationIteration"),
    animationstart: aa("Animation", "AnimationStart"),
    transitionend: aa("Transition", "TransitionEnd"),
  },
  Nu = {},
  Uy = {};
Sn &&
  ((Uy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete xs.animationend.animation,
    delete xs.animationiteration.animation,
    delete xs.animationstart.animation),
  "TransitionEvent" in window || delete xs.transitionend.transition);
function Vl(e) {
  if (Nu[e]) return Nu[e];
  if (!xs[e]) return e;
  var t = xs[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Uy) return (Nu[e] = t[n]);
  return e;
}
var Wy = Vl("animationend"),
  Hy = Vl("animationiteration"),
  Ky = Vl("animationstart"),
  Yy = Vl("transitionend"),
  Qy = new Map(),
  Op =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function xr(e, t) {
  (Qy.set(e, t), rs(t, [e]));
}
for (var ju = 0; ju < Op.length; ju++) {
  var Ru = Op[ju],
    y5 = Ru.toLowerCase(),
    v5 = Ru[0].toUpperCase() + Ru.slice(1);
  xr(y5, "on" + v5);
}
xr(Wy, "onAnimationEnd");
xr(Hy, "onAnimationIteration");
xr(Ky, "onAnimationStart");
xr("dblclick", "onDoubleClick");
xr("focusin", "onFocus");
xr("focusout", "onBlur");
xr(Yy, "onTransitionEnd");
ti("onMouseEnter", ["mouseout", "mouseover"]);
ti("onMouseLeave", ["mouseout", "mouseover"]);
ti("onPointerEnter", ["pointerout", "pointerover"]);
ti("onPointerLeave", ["pointerout", "pointerover"]);
rs(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
rs(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
rs("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rs(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
rs(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
rs(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var zi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  x5 = new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));
function Ip(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), yb(r, t, void 0, e), (e.currentTarget = null));
}
function Gy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          (Ip(s, a, u), (i = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          (Ip(s, a, u), (i = l));
        }
    }
  }
  if (qa) throw ((e = jc), (qa = !1), (jc = null), e);
}
function de(e, t) {
  var n = t[_c];
  n === void 0 && (n = t[_c] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Xy(t, e, 2, !1), n.add(r));
}
function Mu(e, t, n) {
  var r = 0;
  (t && (r |= 4), Xy(n, e, r, t));
}
var la = "_reactListening" + Math.random().toString(36).slice(2);
function ho(e) {
  if (!e[la]) {
    ((e[la] = !0),
      ry.forEach(function (n) {
        n !== "selectionchange" && (x5.has(n) || Mu(n, !1, e), Mu(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[la] || ((t[la] = !0), Mu("selectionchange", !1, t));
  }
}
function Xy(e, t, n, r) {
  switch (Ly(t)) {
    case 1:
      var s = Lb;
      break;
    case 4:
      s = Db;
      break;
    default:
      s = xf;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !Nc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function Au(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Ar(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  xy(function () {
    var u = i,
      c = mf(n),
      f = [];
    e: {
      var h = Qy.get(e);
      if (h !== void 0) {
        var p = bf,
          b = e;
        switch (e) {
          case "keypress":
            if (Aa(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = Gb;
            break;
          case "focusin":
            ((b = "focus"), (p = Tu));
            break;
          case "focusout":
            ((b = "blur"), (p = Tu));
            break;
          case "beforeblur":
          case "afterblur":
            p = Tu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Ep;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Vb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Zb;
            break;
          case Wy:
          case Hy:
          case Ky:
            p = zb;
            break;
          case Yy:
            p = e5;
            break;
          case "scroll":
            p = Ob;
            break;
          case "wheel":
            p = n5;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Bb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = kp;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          g = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              g !== null && ((S = oo(m, g)), S != null && y.push(po(m, S, v)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < y.length &&
          ((h = new p(h, b, null, n, c)), f.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          h &&
            n !== kc &&
            (b = n.relatedTarget || n.fromElement) &&
            (Ar(b) || b[Cn]))
        )
          break e;
        if (
          (p || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          p
            ? ((b = n.relatedTarget || n.toElement),
              (p = u),
              (b = b ? Ar(b) : null),
              b !== null &&
                ((w = ss(b)), b !== w || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((p = null), (b = u)),
          p !== b)
        ) {
          if (
            ((y = Ep),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = kp),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (w = p == null ? h : ws(p)),
            (v = b == null ? h : ws(b)),
            (h = new y(S, m + "leave", p, n, c)),
            (h.target = w),
            (h.relatedTarget = v),
            (S = null),
            Ar(c) === u &&
              ((y = new y(g, m + "enter", b, n, c)),
              (y.target = v),
              (y.relatedTarget = w),
              (S = y)),
            (w = S),
            p && b)
          )
            t: {
              for (y = p, g = b, m = 0, v = y; v; v = fs(v)) m++;
              for (v = 0, S = g; S; S = fs(S)) v++;
              for (; 0 < m - v; ) ((y = fs(y)), m--);
              for (; 0 < v - m; ) ((g = fs(g)), v--);
              for (; m--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                ((y = fs(y)), (g = fs(g)));
              }
              y = null;
            }
          else y = null;
          (p !== null && Vp(f, h, p, y, !1),
            b !== null && w !== null && Vp(f, w, b, y, !0));
        }
      }
      e: {
        if (
          ((h = u ? ws(u) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var C = u5;
        else if (jp(h))
          if (_y) C = h5;
          else {
            C = d5;
            var T = c5;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = f5);
        if (C && (C = C(e, u))) {
          Fy(f, C, n, c);
          break e;
        }
        (T && T(e, h, u),
          e === "focusout" &&
            (T = h._wrapperState) &&
            T.controlled &&
            h.type === "number" &&
            bc(h, "number", h.value));
      }
      switch (((T = u ? ws(u) : window), e)) {
        case "focusin":
          (jp(T) || T.contentEditable === "true") &&
            ((vs = T), (Lc = u), (Yi = null));
          break;
        case "focusout":
          Yi = Lc = vs = null;
          break;
        case "mousedown":
          Dc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Dc = !1), Dp(f, n, c));
          break;
        case "selectionchange":
          if (g5) break;
        case "keydown":
        case "keyup":
          Dp(f, n, c);
      }
      var k;
      if (Cf)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        ys
          ? Iy(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      (P &&
        (Oy &&
          n.locale !== "ko" &&
          (ys || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && ys && (k = Dy())
            : ((er = c),
              (wf = "value" in er ? er.value : er.textContent),
              (ys = !0))),
        (T = nl(u, P)),
        0 < T.length &&
          ((P = new Tp(P, e, null, n, c)),
          f.push({ event: P, listeners: T }),
          k ? (P.data = k) : ((k = Vy(n)), k !== null && (P.data = k)))),
        (k = s5 ? i5(e, n) : o5(e, n)) &&
          ((u = nl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Tp("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = k))));
    }
    Gy(f, t);
  });
}
function po(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = oo(e, n)),
      i != null && r.unshift(po(e, i, s)),
      (i = oo(e, t)),
      i != null && r.push(po(e, i, s))),
      (e = e.return));
  }
  return r;
}
function fs(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vp(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      s
        ? ((l = oo(n, i)), l != null && o.unshift(po(n, l, a)))
        : s || ((l = oo(n, i)), l != null && o.push(po(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var w5 = /\r\n?/g,
  b5 = /\u0000|\uFFFD/g;
function Fp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      w5,
      `
`,
    )
    .replace(b5, "");
}
function ua(e, t, n) {
  if (((t = Fp(t)), Fp(e) !== t && n)) throw Error(L(425));
}
function rl() {}
var Oc = null,
  Ic = null;
function Vc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fc = typeof setTimeout == "function" ? setTimeout : void 0,
  S5 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  _p = typeof Promise == "function" ? Promise : void 0,
  C5 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof _p < "u"
        ? function (e) {
            return _p.resolve(null).then(e).catch(E5);
          }
        : Fc;
function E5(e) {
  setTimeout(function () {
    throw e;
  });
}
function Lu(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), uo(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  uo(t);
}
function or(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var mi = Math.random().toString(36).slice(2),
  rn = "__reactFiber$" + mi,
  mo = "__reactProps$" + mi,
  Cn = "__reactContainer$" + mi,
  _c = "__reactEvents$" + mi,
  T5 = "__reactListeners$" + mi,
  k5 = "__reactHandles$" + mi;
function Ar(e) {
  var t = e[rn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Cn] || n[rn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zp(e); e !== null; ) {
          if ((n = e[rn])) return n;
          e = zp(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Vo(e) {
  return (
    (e = e[rn] || e[Cn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ws(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Fl(e) {
  return e[mo] || null;
}
var zc = [],
  bs = -1;
function wr(e) {
  return { current: e };
}
function fe(e) {
  0 > bs || ((e.current = zc[bs]), (zc[bs] = null), bs--);
}
function ue(e, t) {
  (bs++, (zc[bs] = e.current), (e.current = t));
}
var hr = {},
  We = wr(hr),
  st = wr(!1),
  Xr = hr;
function ni(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function it(e) {
  return ((e = e.childContextTypes), e != null);
}
function sl() {
  (fe(st), fe(We));
}
function $p(e, t, n) {
  if (We.current !== hr) throw Error(L(168));
  (ue(We, t), ue(st, n));
}
function qy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(L(108, cb(e) || "Unknown", s));
  return xe({}, n, r);
}
function il(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hr),
    (Xr = We.current),
    ue(We, e),
    ue(st, st.current),
    !0
  );
}
function Bp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  (n
    ? ((e = qy(e, t, Xr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      fe(st),
      fe(We),
      ue(We, e))
    : fe(st),
    ue(st, n));
}
var yn = null,
  _l = !1,
  Du = !1;
function Zy(e) {
  yn === null ? (yn = [e]) : yn.push(e);
}
function P5(e) {
  ((_l = !0), Zy(e));
}
function br() {
  if (!Du && yn !== null) {
    Du = !0;
    var e = 0,
      t = ae;
    try {
      var n = yn;
      for (ae = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((yn = null), (_l = !1));
    } catch (s) {
      throw (yn !== null && (yn = yn.slice(e + 1)), Cy(gf, br), s);
    } finally {
      ((ae = t), (Du = !1));
    }
  }
  return null;
}
var Ss = [],
  Cs = 0,
  ol = null,
  al = 0,
  Et = [],
  Tt = 0,
  qr = null,
  xn = 1,
  wn = "";
function jr(e, t) {
  ((Ss[Cs++] = al), (Ss[Cs++] = ol), (ol = e), (al = t));
}
function Jy(e, t, n) {
  ((Et[Tt++] = xn), (Et[Tt++] = wn), (Et[Tt++] = qr), (qr = e));
  var r = xn;
  e = wn;
  var s = 32 - Wt(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - Wt(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (xn = (1 << (32 - Wt(t) + s)) | (n << s) | r),
      (wn = i + e));
  } else ((xn = (1 << i) | (n << s) | r), (wn = e));
}
function Tf(e) {
  e.return !== null && (jr(e, 1), Jy(e, 1, 0));
}
function kf(e) {
  for (; e === ol; )
    ((ol = Ss[--Cs]), (Ss[Cs] = null), (al = Ss[--Cs]), (Ss[Cs] = null));
  for (; e === qr; )
    ((qr = Et[--Tt]),
      (Et[Tt] = null),
      (wn = Et[--Tt]),
      (Et[Tt] = null),
      (xn = Et[--Tt]),
      (Et[Tt] = null));
}
var mt = null,
  pt = null,
  pe = !1,
  Bt = null;
function ev(e, t) {
  var n = kt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Up(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (mt = e), (pt = or(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (mt = e), (pt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qr !== null ? { id: xn, overflow: wn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = kt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (mt = e),
            (pt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function $c(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bc(e) {
  if (pe) {
    var t = pt;
    if (t) {
      var n = t;
      if (!Up(e, t)) {
        if ($c(e)) throw Error(L(418));
        t = or(n.nextSibling);
        var r = mt;
        t && Up(e, t)
          ? ev(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (mt = e));
      }
    } else {
      if ($c(e)) throw Error(L(418));
      ((e.flags = (e.flags & -4097) | 2), (pe = !1), (mt = e));
    }
  }
}
function Wp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  mt = e;
}
function ca(e) {
  if (e !== mt) return !1;
  if (!pe) return (Wp(e), (pe = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vc(e.type, e.memoizedProps))),
    t && (t = pt))
  ) {
    if ($c(e)) throw (tv(), Error(L(418)));
    for (; t; ) (ev(e, t), (t = or(t.nextSibling)));
  }
  if ((Wp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              pt = or(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      pt = null;
    }
  } else pt = mt ? or(e.stateNode.nextSibling) : null;
  return !0;
}
function tv() {
  for (var e = pt; e; ) e = or(e.nextSibling);
}
function ri() {
  ((pt = mt = null), (pe = !1));
}
function Pf(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
var N5 = jn.ReactCurrentBatchConfig;
function Ri(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function da(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Hp(e) {
  var t = e._init;
  return t(e._payload);
}
function nv(e) {
  function t(g, m) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [m]), (g.flags |= 16)) : v.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) (t(g, m), (m = m.sibling));
    return null;
  }
  function r(g, m) {
    for (g = new Map(); m !== null; )
      (m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling));
    return g;
  }
  function s(g, m) {
    return ((g = cr(g, m)), (g.index = 0), (g.sibling = null), g);
  }
  function i(g, m, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((g.flags |= 2), m) : v)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function o(g) {
    return (e && g.alternate === null && (g.flags |= 2), g);
  }
  function a(g, m, v, S) {
    return m === null || m.tag !== 6
      ? ((m = $u(v, g.mode, S)), (m.return = g), m)
      : ((m = s(m, v)), (m.return = g), m);
  }
  function l(g, m, v, S) {
    var C = v.type;
    return C === gs
      ? c(g, m, v.props.children, S, v.key)
      : m !== null &&
          (m.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Bn &&
              Hp(C) === m.type))
        ? ((S = s(m, v.props)), (S.ref = Ri(g, m, v)), (S.return = g), S)
        : ((S = _a(v.type, v.key, v.props, null, g.mode, S)),
          (S.ref = Ri(g, m, v)),
          (S.return = g),
          S);
  }
  function u(g, m, v, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = Bu(v, g.mode, S)), (m.return = g), m)
      : ((m = s(m, v.children || [])), (m.return = g), m);
  }
  function c(g, m, v, S, C) {
    return m === null || m.tag !== 7
      ? ((m = Yr(v, g.mode, S, C)), (m.return = g), m)
      : ((m = s(m, v)), (m.return = g), m);
  }
  function f(g, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = $u("" + m, g.mode, v)), (m.return = g), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ea:
          return (
            (v = _a(m.type, m.key, m.props, null, g.mode, v)),
            (v.ref = Ri(g, null, m)),
            (v.return = g),
            v
          );
        case ms:
          return ((m = Bu(m, g.mode, v)), (m.return = g), m);
        case Bn:
          var S = m._init;
          return f(g, S(m._payload), v);
      }
      if (Fi(m) || Ti(m))
        return ((m = Yr(m, g.mode, v, null)), (m.return = g), m);
      da(g, m);
    }
    return null;
  }
  function h(g, m, v, S) {
    var C = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : a(g, m, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ea:
          return v.key === C ? l(g, m, v, S) : null;
        case ms:
          return v.key === C ? u(g, m, v, S) : null;
        case Bn:
          return ((C = v._init), h(g, m, C(v._payload), S));
      }
      if (Fi(v) || Ti(v)) return C !== null ? null : c(g, m, v, S, null);
      da(g, v);
    }
    return null;
  }
  function p(g, m, v, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((g = g.get(v) || null), a(m, g, "" + S, C));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ea:
          return (
            (g = g.get(S.key === null ? v : S.key) || null),
            l(m, g, S, C)
          );
        case ms:
          return (
            (g = g.get(S.key === null ? v : S.key) || null),
            u(m, g, S, C)
          );
        case Bn:
          var T = S._init;
          return p(g, m, v, T(S._payload), C);
      }
      if (Fi(S) || Ti(S)) return ((g = g.get(v) || null), c(m, g, S, C, null));
      da(m, S);
    }
    return null;
  }
  function b(g, m, v, S) {
    for (
      var C = null, T = null, k = m, P = (m = 0), A = null;
      k !== null && P < v.length;
      P++
    ) {
      k.index > P ? ((A = k), (k = null)) : (A = k.sibling);
      var M = h(g, k, v[P], S);
      if (M === null) {
        k === null && (k = A);
        break;
      }
      (e && k && M.alternate === null && t(g, k),
        (m = i(M, m, P)),
        T === null ? (C = M) : (T.sibling = M),
        (T = M),
        (k = A));
    }
    if (P === v.length) return (n(g, k), pe && jr(g, P), C);
    if (k === null) {
      for (; P < v.length; P++)
        ((k = f(g, v[P], S)),
          k !== null &&
            ((m = i(k, m, P)),
            T === null ? (C = k) : (T.sibling = k),
            (T = k)));
      return (pe && jr(g, P), C);
    }
    for (k = r(g, k); P < v.length; P++)
      ((A = p(k, g, P, v[P], S)),
        A !== null &&
          (e && A.alternate !== null && k.delete(A.key === null ? P : A.key),
          (m = i(A, m, P)),
          T === null ? (C = A) : (T.sibling = A),
          (T = A)));
    return (
      e &&
        k.forEach(function (z) {
          return t(g, z);
        }),
      pe && jr(g, P),
      C
    );
  }
  function y(g, m, v, S) {
    var C = Ti(v);
    if (typeof C != "function") throw Error(L(150));
    if (((v = C.call(v)), v == null)) throw Error(L(151));
    for (
      var T = (C = null), k = m, P = (m = 0), A = null, M = v.next();
      k !== null && !M.done;
      P++, M = v.next()
    ) {
      k.index > P ? ((A = k), (k = null)) : (A = k.sibling);
      var z = h(g, k, M.value, S);
      if (z === null) {
        k === null && (k = A);
        break;
      }
      (e && k && z.alternate === null && t(g, k),
        (m = i(z, m, P)),
        T === null ? (C = z) : (T.sibling = z),
        (T = z),
        (k = A));
    }
    if (M.done) return (n(g, k), pe && jr(g, P), C);
    if (k === null) {
      for (; !M.done; P++, M = v.next())
        ((M = f(g, M.value, S)),
          M !== null &&
            ((m = i(M, m, P)),
            T === null ? (C = M) : (T.sibling = M),
            (T = M)));
      return (pe && jr(g, P), C);
    }
    for (k = r(g, k); !M.done; P++, M = v.next())
      ((M = p(k, g, P, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && k.delete(M.key === null ? P : M.key),
          (m = i(M, m, P)),
          T === null ? (C = M) : (T.sibling = M),
          (T = M)));
    return (
      e &&
        k.forEach(function (V) {
          return t(g, V);
        }),
      pe && jr(g, P),
      C
    );
  }
  function w(g, m, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === gs &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case ea:
          e: {
            for (var C = v.key, T = m; T !== null; ) {
              if (T.key === C) {
                if (((C = v.type), C === gs)) {
                  if (T.tag === 7) {
                    (n(g, T.sibling),
                      (m = s(T, v.props.children)),
                      (m.return = g),
                      (g = m));
                    break e;
                  }
                } else if (
                  T.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Bn &&
                    Hp(C) === T.type)
                ) {
                  (n(g, T.sibling),
                    (m = s(T, v.props)),
                    (m.ref = Ri(g, T, v)),
                    (m.return = g),
                    (g = m));
                  break e;
                }
                n(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            v.type === gs
              ? ((m = Yr(v.props.children, g.mode, S, v.key)),
                (m.return = g),
                (g = m))
              : ((S = _a(v.type, v.key, v.props, null, g.mode, S)),
                (S.ref = Ri(g, m, v)),
                (S.return = g),
                (g = S));
          }
          return o(g);
        case ms:
          e: {
            for (T = v.key; m !== null; ) {
              if (m.key === T)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  (n(g, m.sibling),
                    (m = s(m, v.children || [])),
                    (m.return = g),
                    (g = m));
                  break e;
                } else {
                  n(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            ((m = Bu(v, g.mode, S)), (m.return = g), (g = m));
          }
          return o(g);
        case Bn:
          return ((T = v._init), w(g, m, T(v._payload), S));
      }
      if (Fi(v)) return b(g, m, v, S);
      if (Ti(v)) return y(g, m, v, S);
      da(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = s(m, v)), (m.return = g), (g = m))
          : (n(g, m), (m = $u(v, g.mode, S)), (m.return = g), (g = m)),
        o(g))
      : n(g, m);
  }
  return w;
}
var si = nv(!0),
  rv = nv(!1),
  ll = wr(null),
  ul = null,
  Es = null,
  Nf = null;
function jf() {
  Nf = Es = ul = null;
}
function Rf(e) {
  var t = ll.current;
  (fe(ll), (e._currentValue = t));
}
function Uc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Vs(e, t) {
  ((ul = e),
    (Nf = Es = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (nt = !0), (e.firstContext = null)));
}
function jt(e) {
  var t = e._currentValue;
  if (Nf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Es === null)) {
      if (ul === null) throw Error(L(308));
      ((Es = e), (ul.dependencies = { lanes: 0, firstContext: e }));
    } else Es = Es.next = e;
  return t;
}
var Lr = null;
function Mf(e) {
  Lr === null ? (Lr = [e]) : Lr.push(e);
}
function sv(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Mf(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    En(e, r)
  );
}
function En(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Un = !1;
function Af(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function iv(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function bn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ar(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), re & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      En(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Mf(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    En(e, n)
  );
}
function La(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), yf(e, n));
  }
}
function Kp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function cl(e, t, n, r) {
  var s = e.updateQueue;
  Un = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), o === null ? (i = u) : (o.next = u), (o = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = s.baseState;
    ((o = 0), (c = u = l = null), (a = i));
    do {
      var h = a.lane,
        p = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var b = e,
            y = a;
          switch (((h = t), (p = n), y.tag)) {
            case 1:
              if (((b = y.payload), typeof b == "function")) {
                f = b.call(p, f, h);
                break e;
              }
              f = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = y.payload),
                (h = typeof b == "function" ? b.call(p, f, h) : b),
                h == null)
              )
                break e;
              f = xe({}, f, h);
              break e;
            case 2:
              Un = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [a]) : h.push(a));
      } else
        ((p = {
          eventTime: p,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = f)) : (c = c.next = p),
          (o |= h));
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        ((h = a),
          (a = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = c),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((o |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((Jr |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function Yp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(L(191, s));
        s.call(r);
      }
    }
}
var Fo = {},
  an = wr(Fo),
  go = wr(Fo),
  yo = wr(Fo);
function Dr(e) {
  if (e === Fo) throw Error(L(174));
  return e;
}
function Lf(e, t) {
  switch ((ue(yo, t), ue(go, e), ue(an, Fo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Cc(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Cc(t, e)));
  }
  (fe(an), ue(an, t));
}
function ii() {
  (fe(an), fe(go), fe(yo));
}
function ov(e) {
  Dr(yo.current);
  var t = Dr(an.current),
    n = Cc(t, e.type);
  t !== n && (ue(go, e), ue(an, n));
}
function Df(e) {
  go.current === e && (fe(an), fe(go));
}
var ge = wr(0);
function dl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Ou = [];
function Of() {
  for (var e = 0; e < Ou.length; e++)
    Ou[e]._workInProgressVersionPrimary = null;
  Ou.length = 0;
}
var Da = jn.ReactCurrentDispatcher,
  Iu = jn.ReactCurrentBatchConfig,
  Zr = 0,
  ve = null,
  je = null,
  Le = null,
  fl = !1,
  Qi = !1,
  vo = 0,
  j5 = 0;
function ze() {
  throw Error(L(321));
}
function If(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Kt(e[n], t[n])) return !1;
  return !0;
}
function Vf(e, t, n, r, s, i) {
  if (
    ((Zr = i),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Da.current = e === null || e.memoizedState === null ? L5 : D5),
    (e = n(r, s)),
    Qi)
  ) {
    i = 0;
    do {
      if (((Qi = !1), (vo = 0), 25 <= i)) throw Error(L(301));
      ((i += 1),
        (Le = je = null),
        (t.updateQueue = null),
        (Da.current = O5),
        (e = n(r, s)));
    } while (Qi);
  }
  if (
    ((Da.current = hl),
    (t = je !== null && je.next !== null),
    (Zr = 0),
    (Le = je = ve = null),
    (fl = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Ff() {
  var e = vo !== 0;
  return ((vo = 0), e);
}
function Jt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Le === null ? (ve.memoizedState = Le = e) : (Le = Le.next = e), Le);
}
function Rt() {
  if (je === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = je.next;
  var t = Le === null ? ve.memoizedState : Le.next;
  if (t !== null) ((Le = t), (je = e));
  else {
    if (e === null) throw Error(L(310));
    ((je = e),
      (e = {
        memoizedState: je.memoizedState,
        baseState: je.baseState,
        baseQueue: je.baseQueue,
        queue: je.queue,
        next: null,
      }),
      Le === null ? (ve.memoizedState = Le = e) : (Le = Le.next = e));
  }
  return Le;
}
function xo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vu(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = je,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      ((s.next = i.next), (i.next = o));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Zr & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (ve.lanes |= c),
          (Jr |= c));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (l === null ? (o = r) : (l.next = a),
      Kt(r, t.memoizedState) || (nt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (ve.lanes |= i), (Jr |= i), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fu(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== s);
    (Kt(i, t.memoizedState) || (nt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function av() {}
function lv(e, t) {
  var n = ve,
    r = Rt(),
    s = t(),
    i = !Kt(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (nt = !0)),
    (r = r.queue),
    _f(dv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wo(9, cv.bind(null, n, r, s, t), void 0, null),
      De === null)
    )
      throw Error(L(349));
    Zr & 30 || uv(n, t, s);
  }
  return s;
}
function uv(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function cv(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), fv(t) && hv(e));
}
function dv(e, t, n) {
  return n(function () {
    fv(t) && hv(e);
  });
}
function fv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Kt(e, n);
  } catch {
    return !0;
  }
}
function hv(e) {
  var t = En(e, 1);
  t !== null && Ht(t, e, 1, -1);
}
function Qp(e) {
  var t = Jt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = A5.bind(null, ve, e)),
    [t.memoizedState, e]
  );
}
function wo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function pv() {
  return Rt().memoizedState;
}
function Oa(e, t, n, r) {
  var s = Jt();
  ((ve.flags |= e),
    (s.memoizedState = wo(1 | t, n, void 0, r === void 0 ? null : r)));
}
function zl(e, t, n, r) {
  var s = Rt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (je !== null) {
    var o = je.memoizedState;
    if (((i = o.destroy), r !== null && If(r, o.deps))) {
      s.memoizedState = wo(t, n, i, r);
      return;
    }
  }
  ((ve.flags |= e), (s.memoizedState = wo(1 | t, n, i, r)));
}
function Gp(e, t) {
  return Oa(8390656, 8, e, t);
}
function _f(e, t) {
  return zl(2048, 8, e, t);
}
function mv(e, t) {
  return zl(4, 2, e, t);
}
function gv(e, t) {
  return zl(4, 4, e, t);
}
function yv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function vv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    zl(4, 4, yv.bind(null, t, e), n)
  );
}
function zf() {}
function xv(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && If(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wv(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && If(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function bv(e, t, n) {
  return Zr & 21
    ? (Kt(n, t) || ((n = ky()), (ve.lanes |= n), (Jr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (nt = !0)), (e.memoizedState = n));
}
function R5(e, t) {
  var n = ae;
  ((ae = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Iu.transition;
  Iu.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ae = n), (Iu.transition = r));
  }
}
function Sv() {
  return Rt().memoizedState;
}
function M5(e, t, n) {
  var r = ur(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cv(e))
  )
    Ev(t, n);
  else if (((n = sv(e, t, n, r)), n !== null)) {
    var s = Ge();
    (Ht(n, e, r, s), Tv(n, t, r));
  }
}
function A5(e, t, n) {
  var r = ur(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cv(e)) Ev(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), Kt(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((s.next = s), Mf(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = sv(e, t, s, r)),
      n !== null && ((s = Ge()), Ht(n, e, r, s), Tv(n, t, r)));
  }
}
function Cv(e) {
  var t = e.alternate;
  return e === ve || (t !== null && t === ve);
}
function Ev(e, t) {
  Qi = fl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Tv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), yf(e, n));
  }
}
var hl = {
    readContext: jt,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1,
  },
  L5 = {
    readContext: jt,
    useCallback: function (e, t) {
      return ((Jt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: jt,
    useEffect: Gp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Oa(4194308, 4, yv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Oa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Oa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Jt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Jt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = M5.bind(null, ve, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Jt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Qp,
    useDebugValue: zf,
    useDeferredValue: function (e) {
      return (Jt().memoizedState = e);
    },
    useTransition: function () {
      var e = Qp(!1),
        t = e[0];
      return ((e = R5.bind(null, e[1])), (Jt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ve,
        s = Jt();
      if (pe) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error(L(349));
        Zr & 30 || uv(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        Gp(dv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        wo(9, cv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Jt(),
        t = De.identifierPrefix;
      if (pe) {
        var n = wn,
          r = xn;
        ((n = (r & ~(1 << (32 - Wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = j5++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  D5 = {
    readContext: jt,
    useCallback: xv,
    useContext: jt,
    useEffect: _f,
    useImperativeHandle: vv,
    useInsertionEffect: mv,
    useLayoutEffect: gv,
    useMemo: wv,
    useReducer: Vu,
    useRef: pv,
    useState: function () {
      return Vu(xo);
    },
    useDebugValue: zf,
    useDeferredValue: function (e) {
      var t = Rt();
      return bv(t, je.memoizedState, e);
    },
    useTransition: function () {
      var e = Vu(xo)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: av,
    useSyncExternalStore: lv,
    useId: Sv,
    unstable_isNewReconciler: !1,
  },
  O5 = {
    readContext: jt,
    useCallback: xv,
    useContext: jt,
    useEffect: _f,
    useImperativeHandle: vv,
    useInsertionEffect: mv,
    useLayoutEffect: gv,
    useMemo: wv,
    useReducer: Fu,
    useRef: pv,
    useState: function () {
      return Fu(xo);
    },
    useDebugValue: zf,
    useDeferredValue: function (e) {
      var t = Rt();
      return je === null ? (t.memoizedState = e) : bv(t, je.memoizedState, e);
    },
    useTransition: function () {
      var e = Fu(xo)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: av,
    useSyncExternalStore: lv,
    useId: Sv,
    unstable_isNewReconciler: !1,
  };
function Ft(e, t) {
  if (e && e.defaultProps) {
    ((t = xe({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wc(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : xe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var $l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ss(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      s = ur(e),
      i = bn(r, s);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = ar(e, i, s)),
      t !== null && (Ht(t, e, s, r), La(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      s = ur(e),
      i = bn(r, s);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ar(e, i, s)),
      t !== null && (Ht(t, e, s, r), La(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ge(),
      r = ur(e),
      s = bn(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = ar(e, s, r)),
      t !== null && (Ht(t, e, r, n), La(t, e, r)));
  },
};
function Xp(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !fo(n, r) || !fo(s, i)
        : !0
  );
}
function kv(e, t, n) {
  var r = !1,
    s = hr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = jt(i))
      : ((s = it(t) ? Xr : We.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ni(e, s) : hr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function qp(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $l.enqueueReplaceState(t, t.state, null));
}
function Hc(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), Af(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = jt(i))
    : ((i = it(t) ? Xr : We.current), (s.context = ni(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Wc(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && $l.enqueueReplaceState(s, s.state, null),
      cl(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function oi(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += ub(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function _u(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Kc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var I5 = typeof WeakMap == "function" ? WeakMap : Map;
function Pv(e, t, n) {
  ((n = bn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (ml || ((ml = !0), (nd = r)), Kc(e, t));
    }),
    n
  );
}
function Nv(e, t, n) {
  ((n = bn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Kc(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Kc(e, t),
          typeof r != "function" &&
            (lr === null ? (lr = new Set([this])) : lr.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Zp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new I5();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = X5.bind(null, e, t, n)), t.then(e, e));
}
function Jp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function em(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = bn(-1, 1)), (t.tag = 2), ar(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var V5 = jn.ReactCurrentOwner,
  nt = !1;
function Ye(e, t, n, r) {
  t.child = e === null ? rv(t, null, n, r) : si(t, e.child, n, r);
}
function tm(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    Vs(t, s),
    (r = Vf(e, t, n, r, i, s)),
    (n = Ff()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Tn(e, t, s))
      : (pe && n && Tf(t), (t.flags |= 1), Ye(e, t, r, s), t.child)
  );
}
function nm(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Qf(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), jv(e, t, i, r, s))
      : ((e = _a(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fo), n(o, r) && e.ref === t.ref)
    )
      return Tn(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = cr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jv(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (fo(i, r) && e.ref === t.ref)
      if (((nt = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (nt = !0);
      else return ((t.lanes = e.lanes), Tn(e, t, s));
  }
  return Yc(e, t, n, r, s);
}
function Rv(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(ks, ft),
        (ft |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(ks, ft),
          (ft |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ue(ks, ft),
        (ft |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(ks, ft),
      (ft |= r));
  return (Ye(e, t, s, n), t.child);
}
function Mv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yc(e, t, n, r, s) {
  var i = it(n) ? Xr : We.current;
  return (
    (i = ni(t, i)),
    Vs(t, s),
    (n = Vf(e, t, n, r, i, s)),
    (r = Ff()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Tn(e, t, s))
      : (pe && r && Tf(t), (t.flags |= 1), Ye(e, t, n, s), t.child)
  );
}
function rm(e, t, n, r, s) {
  if (it(n)) {
    var i = !0;
    il(t);
  } else i = !1;
  if ((Vs(t, s), t.stateNode === null))
    (Ia(e, t), kv(t, n, r), Hc(t, n, r, s), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = jt(u))
      : ((u = it(n) ? Xr : We.current), (u = ni(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && qp(t, o, r, u)),
      (Un = !1));
    var h = t.memoizedState;
    ((o.state = h),
      cl(t, r, o, s),
      (l = t.memoizedState),
      a !== r || h !== l || st.current || Un
        ? (typeof c == "function" && (Wc(t, n, c, r), (l = t.memoizedState)),
          (a = Un || Xp(t, n, a, r, h, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      iv(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ft(t.type, a)),
      (o.props = u),
      (f = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = jt(l))
        : ((l = it(n) ? Xr : We.current), (l = ni(t, l))));
    var p = n.getDerivedStateFromProps;
    ((c =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || h !== l) && qp(t, o, r, l)),
      (Un = !1),
      (h = t.memoizedState),
      (o.state = h),
      cl(t, r, o, s));
    var b = t.memoizedState;
    a !== f || h !== b || st.current || Un
      ? (typeof p == "function" && (Wc(t, n, p, r), (b = t.memoizedState)),
        (u = Un || Xp(t, n, u, r, h, b, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, b, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, b, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (o.props = r),
        (o.state = b),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Qc(e, t, n, r, i, s);
}
function Qc(e, t, n, r, s, i) {
  Mv(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (s && Bp(t, n, !1), Tn(e, t, i));
  ((r = t.stateNode), (V5.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = si(t, e.child, null, i)), (t.child = si(t, null, a, i)))
      : Ye(e, t, a, i),
    (t.memoizedState = r.state),
    s && Bp(t, n, !0),
    t.child
  );
}
function Av(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? $p(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $p(e, t.context, !1),
    Lf(e, t.containerInfo));
}
function sm(e, t, n, r, s) {
  return (ri(), Pf(s), (t.flags |= 256), Ye(e, t, n, r), t.child);
}
var Gc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lv(e, t, n) {
  var r = t.pendingProps,
    s = ge.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    ue(ge, s & 1),
    e === null)
  )
    return (
      Bc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Wl(o, r, 0, null)),
              (e = Yr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Xc(n)),
              (t.memoizedState = Gc),
              e)
            : $f(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return F5(e, t, o, r, a, s, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = cr(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = cr(a, i)) : ((i = Yr(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Xc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Gc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = cr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function $f(e, t) {
  return (
    (t = Wl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function fa(e, t, n, r) {
  return (
    r !== null && Pf(r),
    si(t, e.child, null, n),
    (e = $f(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function F5(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _u(Error(L(422)))), fa(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = Wl({ mode: "visible", children: r.children }, s, 0, null)),
          (i = Yr(i, s, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && si(t, e.child, null, o),
          (t.child.memoizedState = Xc(o)),
          (t.memoizedState = Gc),
          i);
  if (!(t.mode & 1)) return fa(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(L(419))),
      (r = _u(i, r, void 0)),
      fa(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), nt || a)) {
    if (((r = De), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), En(e, s), Ht(r, e, s, -1)));
    }
    return (Yf(), (r = _u(Error(L(421)))), fa(e, t, o, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = q5.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (pt = or(s.nextSibling)),
      (mt = t),
      (pe = !0),
      (Bt = null),
      e !== null &&
        ((Et[Tt++] = xn),
        (Et[Tt++] = wn),
        (Et[Tt++] = qr),
        (xn = e.id),
        (wn = e.overflow),
        (qr = t)),
      (t = $f(t, r.children)),
      (t.flags |= 4096),
      t);
}
function im(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Uc(e.return, t, n));
}
function zu(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function Dv(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((Ye(e, t, r.children, n), (r = ge.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && im(e, n, t);
        else if (e.tag === 19) im(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((ue(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && dl(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          zu(t, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && dl(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        zu(t, !0, n, null, i);
        break;
      case "together":
        zu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ia(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Jr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = cr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = cr(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function _5(e, t, n) {
  switch (t.tag) {
    case 3:
      (Av(t), ri());
      break;
    case 5:
      ov(t);
      break;
    case 1:
      it(t.type) && il(t);
      break;
    case 4:
      Lf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (ue(ll, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Lv(e, t, n)
            : (ue(ge, ge.current & 1),
              (e = Tn(e, t, n)),
              e !== null ? e.sibling : null);
      ue(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Dv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ue(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Rv(e, t, n));
  }
  return Tn(e, t, n);
}
var Ov, qc, Iv, Vv;
Ov = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
qc = function () {};
Iv = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), Dr(an.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = xc(e, s)), (r = xc(e, r)), (i = []));
        break;
      case "select":
        ((s = xe({}, s, { value: void 0 })),
          (r = xe({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = Sc(e, s)), (r = Sc(e, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = rl);
    }
    Ec(n, r);
    var o;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (so.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (i || (i = []), i.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (so.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && de("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Vv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mi(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function z5(e, t, n) {
  var r = t.pendingProps;
  switch ((kf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ($e(t), null);
    case 1:
      return (it(t.type) && sl(), $e(t), null);
    case 3:
      return (
        (r = t.stateNode),
        ii(),
        fe(st),
        fe(We),
        Of(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ca(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Bt !== null && (id(Bt), (Bt = null)))),
        qc(e, t),
        $e(t),
        null
      );
    case 5:
      Df(t);
      var s = Dr(yo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Iv(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return ($e(t), null);
        }
        if (((e = Dr(an.current)), ca(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[rn] = t), (r[mo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (de("cancel", r), de("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              de("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < zi.length; s++) de(zi[s], r);
              break;
            case "source":
              de("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (de("error", r), de("load", r));
              break;
            case "details":
              de("toggle", r);
              break;
            case "input":
              (pp(r, i), de("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                de("invalid", r));
              break;
            case "textarea":
              (gp(r, i), de("invalid", r));
          }
          (Ec(n, i), (s = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ua(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ua(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : so.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  de("scroll", r);
            }
          switch (n) {
            case "input":
              (ta(r), mp(r, i, !0));
              break;
            case "textarea":
              (ta(r), yp(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = rl);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = dy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[rn] = t),
            (e[mo] = r),
            Ov(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Tc(n, r)), n)) {
              case "dialog":
                (de("cancel", e), de("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (de("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < zi.length; s++) de(zi[s], e);
                s = r;
                break;
              case "source":
                (de("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (de("error", e), de("load", e), (s = r));
                break;
              case "details":
                (de("toggle", e), (s = r));
                break;
              case "input":
                (pp(e, r), (s = xc(e, r)), de("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = xe({}, r, { value: void 0 })),
                  de("invalid", e));
                break;
              case "textarea":
                (gp(e, r), (s = Sc(e, r)), de("invalid", e));
                break;
              default:
                s = r;
            }
            (Ec(n, s), (a = s));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? py(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && fy(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && io(e, l)
                        : typeof l == "number" && io(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (so.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && de("scroll", e)
                          : l != null && df(e, i, l, o));
              }
            switch (n) {
              case "input":
                (ta(e), mp(e, r, !1));
                break;
              case "textarea":
                (ta(e), yp(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fr(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ls(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ls(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = rl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ($e(t), null);
    case 6:
      if (e && t.stateNode != null) Vv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Dr(yo.current)), Dr(an.current), ca(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rn] = t),
            (i = r.nodeValue !== n) && ((e = mt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ua(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ua(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rn] = t),
            (t.stateNode = r));
      }
      return ($e(t), null);
    case 13:
      if (
        (fe(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && pt !== null && t.mode & 1 && !(t.flags & 128))
          (tv(), ri(), (t.flags |= 98560), (i = !1));
        else if (((i = ca(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(L(317));
            i[rn] = t;
          } else
            (ri(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          ($e(t), (i = !1));
        } else (Bt !== null && (id(Bt), (Bt = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Me === 0 && (Me = 3) : Yf())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null);
    case 4:
      return (
        ii(),
        qc(e, t),
        e === null && ho(t.stateNode.containerInfo),
        $e(t),
        null
      );
    case 10:
      return (Rf(t.type._context), $e(t), null);
    case 17:
      return (it(t.type) && sl(), $e(t), null);
    case 19:
      if ((fe(ge), (i = t.memoizedState), i === null)) return ($e(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Mi(i, !1);
        else {
          if (Me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = dl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Mi(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (ue(ge, (ge.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ce() > ai &&
            ((t.flags |= 128), (r = !0), Mi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = dl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !pe)
            )
              return ($e(t), null);
          } else
            2 * Ce() - i.renderingStartTime > ai &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = ge.current),
          ue(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : ($e(t), null);
    case 22:
    case 23:
      return (
        Kf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ft & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function $5(e, t) {
  switch ((kf(t), t.tag)) {
    case 1:
      return (
        it(t.type) && sl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ii(),
        fe(st),
        fe(We),
        Of(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Df(t), null);
    case 13:
      if (
        (fe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        ri();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (fe(ge), null);
    case 4:
      return (ii(), null);
    case 10:
      return (Rf(t.type._context), null);
    case 22:
    case 23:
      return (Kf(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var ha = !1,
  Ue = !1,
  B5 = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function Ts(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else n.current = null;
}
function Zc(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var om = !1;
function U5(e, t) {
  if (((Oc = el), (e = By()), Ef(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (s !== 0 && f.nodeType !== 3) || (a = o + s),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (p = f.firstChild) !== null;
            )
              ((h = f), (f = p));
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++u === s && (a = o),
                h === i && ++c === r && (l = o),
                (p = f.nextSibling) !== null)
              )
                break;
              ((f = h), (h = f.parentNode));
            }
            f = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ic = { focusedElem: e, selectionRange: n }, el = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (F = e));
    else
      for (; F !== null; ) {
        t = F;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var y = b.memoizedProps,
                    w = b.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ft(t.type, y),
                      w,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (S) {
          Se(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (F = e));
          break;
        }
        F = t.return;
      }
  return ((b = om), (om = !1), b);
}
function Gi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && Zc(t, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function Bl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Jc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Fv(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Fv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rn], delete t[mo], delete t[_c], delete t[T5], delete t[k5])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function _v(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function am(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _v(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ed(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = rl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ed(e, t, n), e = e.sibling; e !== null; )
      (ed(e, t, n), (e = e.sibling));
}
function td(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (td(e, t, n), e = e.sibling; e !== null; )
      (td(e, t, n), (e = e.sibling));
}
var Oe = null,
  $t = !1;
function In(e, t, n) {
  for (n = n.child; n !== null; ) (zv(e, t, n), (n = n.sibling));
}
function zv(e, t, n) {
  if (on && typeof on.onCommitFiberUnmount == "function")
    try {
      on.onCommitFiberUnmount(Dl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ue || Ts(n, t);
    case 6:
      var r = Oe,
        s = $t;
      ((Oe = null),
        In(e, t, n),
        (Oe = r),
        ($t = s),
        Oe !== null &&
          ($t
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Oe.removeChild(n.stateNode)));
      break;
    case 18:
      Oe !== null &&
        ($t
          ? ((e = Oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Lu(e.parentNode, n)
              : e.nodeType === 1 && Lu(e, n),
            uo(e))
          : Lu(Oe, n.stateNode));
      break;
    case 4:
      ((r = Oe),
        (s = $t),
        (Oe = n.stateNode.containerInfo),
        ($t = !0),
        In(e, t, n),
        (Oe = r),
        ($t = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Zc(n, t, o),
            (s = s.next));
        } while (s !== r);
      }
      In(e, t, n);
      break;
    case 1:
      if (
        !Ue &&
        (Ts(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          Se(n, t, a);
        }
      In(e, t, n);
      break;
    case 21:
      In(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ue = (r = Ue) || n.memoizedState !== null), In(e, t, n), (Ue = r))
        : In(e, t, n);
      break;
    default:
      In(e, t, n);
  }
}
function lm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new B5()),
      t.forEach(function (r) {
        var s = Z5.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function Dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((Oe = a.stateNode), ($t = !1));
              break e;
            case 3:
              ((Oe = a.stateNode.containerInfo), ($t = !0));
              break e;
            case 4:
              ((Oe = a.stateNode.containerInfo), ($t = !0));
              break e;
          }
          a = a.return;
        }
        if (Oe === null) throw Error(L(160));
        (zv(i, o, s), (Oe = null), ($t = !1));
        var l = s.alternate;
        (l !== null && (l.return = null), (s.return = null));
      } catch (u) {
        Se(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ($v(t, e), (t = t.sibling));
}
function $v(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Dt(t, e), Zt(e), r & 4)) {
        try {
          (Gi(3, e, e.return), Bl(3, e));
        } catch (y) {
          Se(e, e.return, y);
        }
        try {
          Gi(5, e, e.return);
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      break;
    case 1:
      (Dt(t, e), Zt(e), r & 512 && n !== null && Ts(n, n.return));
      break;
    case 5:
      if (
        (Dt(t, e),
        Zt(e),
        r & 512 && n !== null && Ts(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          io(s, "");
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && uy(s, i),
              Tc(a, o));
            var u = Tc(a, i);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              c === "style"
                ? py(s, f)
                : c === "dangerouslySetInnerHTML"
                  ? fy(s, f)
                  : c === "children"
                    ? io(s, f)
                    : df(s, c, f, u);
            }
            switch (a) {
              case "input":
                wc(s, i);
                break;
              case "textarea":
                cy(s, i);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Ls(s, !!i.multiple, p, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ls(s, !!i.multiple, i.defaultValue, !0)
                      : Ls(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[mo] = i;
          } catch (y) {
            Se(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Dt(t, e), Zt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Dt(t, e), Zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          uo(t.containerInfo);
        } catch (y) {
          Se(e, e.return, y);
        }
      break;
    case 4:
      (Dt(t, e), Zt(e));
      break;
    case 13:
      (Dt(t, e),
        Zt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Wf = Ce())),
        r & 4 && lm(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ue = (u = Ue) || c), Dt(t, e), (Ue = u)) : Dt(t, e),
        Zt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (F = e, c = e.child; c !== null; ) {
            for (f = F = c; F !== null; ) {
              switch (((h = F), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gi(4, h, h.return);
                  break;
                case 1:
                  Ts(h, h.return);
                  var b = h.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount());
                    } catch (y) {
                      Se(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Ts(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    cm(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (F = p)) : cm(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((s = f.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = hy("display", o))));
              } catch (y) {
                Se(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                Se(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Dt(t, e), Zt(e), r & 4 && lm(e));
      break;
    case 21:
      break;
    default:
      (Dt(t, e), Zt(e));
  }
}
function Zt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_v(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (io(s, ""), (r.flags &= -33));
          var i = am(e);
          td(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = am(e);
          ed(e, a, o);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      Se(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function W5(e, t, n) {
  ((F = e), Bv(e));
}
function Bv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var s = F,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || ha;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Ue;
        a = ha;
        var u = Ue;
        if (((ha = o), (Ue = l) && !u))
          for (F = s; F !== null; )
            ((o = F),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? dm(s)
                : l !== null
                  ? ((l.return = o), (F = l))
                  : dm(s));
        for (; i !== null; ) ((F = i), Bv(i), (i = i.sibling));
        ((F = s), (ha = a), (Ue = u));
      }
      um(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (F = i)) : um(e);
  }
}
function um(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || Bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ue)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Yp(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Yp(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && uo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Ue || (t.flags & 512 && Jc(t));
      } catch (h) {
        Se(t, t.return, h);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (F = n));
      break;
    }
    F = t.return;
  }
}
function cm(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (F = n));
      break;
    }
    F = t.return;
  }
}
function dm(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bl(4, t);
          } catch (l) {
            Se(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Se(t, s, l);
            }
          }
          var i = t.return;
          try {
            Jc(t);
          } catch (l) {
            Se(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Jc(t);
          } catch (l) {
            Se(t, o, l);
          }
      }
    } catch (l) {
      Se(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (F = a));
      break;
    }
    F = t.return;
  }
}
var H5 = Math.ceil,
  pl = jn.ReactCurrentDispatcher,
  Bf = jn.ReactCurrentOwner,
  Nt = jn.ReactCurrentBatchConfig,
  re = 0,
  De = null,
  ke = null,
  Ve = 0,
  ft = 0,
  ks = wr(0),
  Me = 0,
  bo = null,
  Jr = 0,
  Ul = 0,
  Uf = 0,
  Xi = null,
  tt = null,
  Wf = 0,
  ai = 1 / 0,
  gn = null,
  ml = !1,
  nd = null,
  lr = null,
  pa = !1,
  tr = null,
  gl = 0,
  qi = 0,
  rd = null,
  Va = -1,
  Fa = 0;
function Ge() {
  return re & 6 ? Ce() : Va !== -1 ? Va : (Va = Ce());
}
function ur(e) {
  return e.mode & 1
    ? re & 2 && Ve !== 0
      ? Ve & -Ve
      : N5.transition !== null
        ? (Fa === 0 && (Fa = ky()), Fa)
        : ((e = ae),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ly(e.type))),
          e)
    : 1;
}
function Ht(e, t, n, r) {
  if (50 < qi) throw ((qi = 0), (rd = null), Error(L(185)));
  (Oo(e, n, r),
    (!(re & 2) || e !== De) &&
      (e === De && (!(re & 2) && (Ul |= n), Me === 4 && Hn(e, Ve)),
      ot(e, r),
      n === 1 && re === 0 && !(t.mode & 1) && ((ai = Ce() + 500), _l && br())));
}
function ot(e, t) {
  var n = e.callbackNode;
  Nb(e, t);
  var r = Ja(e, e === De ? Ve : 0);
  if (r === 0)
    (n !== null && wp(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wp(n), t === 1))
      (e.tag === 0 ? P5(fm.bind(null, e)) : Zy(fm.bind(null, e)),
        C5(function () {
          !(re & 6) && br();
        }),
        (n = null));
    else {
      switch (Py(r)) {
        case 1:
          n = gf;
          break;
        case 4:
          n = Ey;
          break;
        case 16:
          n = Za;
          break;
        case 536870912:
          n = Ty;
          break;
        default:
          n = Za;
      }
      n = Xv(n, Uv.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Uv(e, t) {
  if (((Va = -1), (Fa = 0), re & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (Fs() && e.callbackNode !== n) return null;
  var r = Ja(e, e === De ? Ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
  else {
    t = r;
    var s = re;
    re |= 2;
    var i = Hv();
    (De !== e || Ve !== t) && ((gn = null), (ai = Ce() + 500), Kr(e, t));
    do
      try {
        Q5();
        break;
      } catch (a) {
        Wv(e, a);
      }
    while (!0);
    (jf(),
      (pl.current = i),
      (re = s),
      ke !== null ? (t = 0) : ((De = null), (Ve = 0), (t = Me)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Rc(e)), s !== 0 && ((r = s), (t = sd(e, s)))), t === 1)
    )
      throw ((n = bo), Kr(e, 0), Hn(e, r), ot(e, Ce()), n);
    if (t === 6) Hn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !K5(s) &&
          ((t = yl(e, r)),
          t === 2 && ((i = Rc(e)), i !== 0 && ((r = i), (t = sd(e, i)))),
          t === 1))
      )
        throw ((n = bo), Kr(e, 0), Hn(e, r), ot(e, Ce()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Rr(e, tt, gn);
          break;
        case 3:
          if (
            (Hn(e, r), (r & 130023424) === r && ((t = Wf + 500 - Ce()), 10 < t))
          ) {
            if (Ja(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (Ge(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = Fc(Rr.bind(null, e, tt, gn), t);
            break;
          }
          Rr(e, tt, gn);
          break;
        case 4:
          if ((Hn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - Wt(r);
            ((i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i));
          }
          if (
            ((r = s),
            (r = Ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * H5(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fc(Rr.bind(null, e, tt, gn), r);
            break;
          }
          Rr(e, tt, gn);
          break;
        case 5:
          Rr(e, tt, gn);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return (ot(e, Ce()), e.callbackNode === n ? Uv.bind(null, e) : null);
}
function sd(e, t) {
  var n = Xi;
  return (
    e.current.memoizedState.isDehydrated && (Kr(e, t).flags |= 256),
    (e = yl(e, t)),
    e !== 2 && ((t = tt), (tt = n), t !== null && id(t)),
    e
  );
}
function id(e) {
  tt === null ? (tt = e) : tt.push.apply(tt, e);
}
function K5(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!Kt(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Hn(e, t) {
  for (
    t &= ~Uf,
      t &= ~Ul,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Wt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function fm(e) {
  if (re & 6) throw Error(L(327));
  Fs();
  var t = Ja(e, 0);
  if (!(t & 1)) return (ot(e, Ce()), null);
  var n = yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Rc(e);
    r !== 0 && ((t = r), (n = sd(e, r)));
  }
  if (n === 1) throw ((n = bo), Kr(e, 0), Hn(e, t), ot(e, Ce()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rr(e, tt, gn),
    ot(e, Ce()),
    null
  );
}
function Hf(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    ((re = n), re === 0 && ((ai = Ce() + 500), _l && br()));
  }
}
function es(e) {
  tr !== null && tr.tag === 0 && !(re & 6) && Fs();
  var t = re;
  re |= 1;
  var n = Nt.transition,
    r = ae;
  try {
    if (((Nt.transition = null), (ae = 1), e)) return e();
  } finally {
    ((ae = r), (Nt.transition = n), (re = t), !(re & 6) && br());
  }
}
function Kf() {
  ((ft = ks.current), fe(ks));
}
function Kr(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), S5(n)), ke !== null))
    for (n = ke.return; n !== null; ) {
      var r = n;
      switch ((kf(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && sl());
          break;
        case 3:
          (ii(), fe(st), fe(We), Of());
          break;
        case 5:
          Df(r);
          break;
        case 4:
          ii();
          break;
        case 13:
          fe(ge);
          break;
        case 19:
          fe(ge);
          break;
        case 10:
          Rf(r.type._context);
          break;
        case 22:
        case 23:
          Kf();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (ke = e = cr(e.current, null)),
    (Ve = ft = t),
    (Me = 0),
    (bo = null),
    (Uf = Ul = Jr = 0),
    (tt = Xi = null),
    Lr !== null)
  ) {
    for (t = 0; t < Lr.length; t++)
      if (((n = Lr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = s), (r.next = o));
        }
        n.pending = r;
      }
    Lr = null;
  }
  return e;
}
function Wv(e, t) {
  do {
    var n = ke;
    try {
      if ((jf(), (Da.current = hl), fl)) {
        for (var r = ve.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        fl = !1;
      }
      if (
        ((Zr = 0),
        (Le = je = ve = null),
        (Qi = !1),
        (vo = 0),
        (Bf.current = null),
        n === null || n.return === null)
      ) {
        ((Me = 1), (bo = t), (ke = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Ve),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Jp(o);
          if (p !== null) {
            ((p.flags &= -257),
              em(p, o, a, i, t),
              p.mode & 1 && Zp(i, u, t),
              (t = p),
              (l = u));
            var b = t.updateQueue;
            if (b === null) {
              var y = new Set();
              (y.add(l), (t.updateQueue = y));
            } else b.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Zp(i, u, t), Yf());
              break e;
            }
            l = Error(L(426));
          }
        } else if (pe && a.mode & 1) {
          var w = Jp(o);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              em(w, o, a, i, t),
              Pf(oi(l, a)));
            break e;
          }
        }
        ((i = l = oi(l, a)),
          Me !== 4 && (Me = 2),
          Xi === null ? (Xi = [i]) : Xi.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var g = Pv(i, l, t);
              Kp(i, g);
              break e;
            case 1:
              a = l;
              var m = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (lr === null || !lr.has(v))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var S = Nv(i, a, t);
                Kp(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Yv(n);
    } catch (C) {
      ((t = C), ke === n && n !== null && (ke = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Hv() {
  var e = pl.current;
  return ((pl.current = hl), e === null ? hl : e);
}
function Yf() {
  ((Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    De === null || (!(Jr & 268435455) && !(Ul & 268435455)) || Hn(De, Ve));
}
function yl(e, t) {
  var n = re;
  re |= 2;
  var r = Hv();
  (De !== e || Ve !== t) && ((gn = null), Kr(e, t));
  do
    try {
      Y5();
      break;
    } catch (s) {
      Wv(e, s);
    }
  while (!0);
  if ((jf(), (re = n), (pl.current = r), ke !== null)) throw Error(L(261));
  return ((De = null), (Ve = 0), Me);
}
function Y5() {
  for (; ke !== null; ) Kv(ke);
}
function Q5() {
  for (; ke !== null && !xb(); ) Kv(ke);
}
function Kv(e) {
  var t = Gv(e.alternate, e, ft);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Yv(e) : (ke = t),
    (Bf.current = null));
}
function Yv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $5(n, t)), n !== null)) {
        ((n.flags &= 32767), (ke = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Me = 6), (ke = null));
        return;
      }
    } else if (((n = z5(n, t, ft)), n !== null)) {
      ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Me === 0 && (Me = 5);
}
function Rr(e, t, n) {
  var r = ae,
    s = Nt.transition;
  try {
    ((Nt.transition = null), (ae = 1), G5(e, t, n, r));
  } finally {
    ((Nt.transition = s), (ae = r));
  }
  return null;
}
function G5(e, t, n, r) {
  do Fs();
  while (tr !== null);
  if (re & 6) throw Error(L(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (jb(e, i),
    e === De && ((ke = De = null), (Ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      pa ||
      ((pa = !0),
      Xv(Za, function () {
        return (Fs(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = Nt.transition), (Nt.transition = null));
    var o = ae;
    ae = 1;
    var a = re;
    ((re |= 4),
      (Bf.current = null),
      U5(e, n),
      $v(n, e),
      m5(Ic),
      (el = !!Oc),
      (Ic = Oc = null),
      (e.current = n),
      W5(n),
      wb(),
      (re = a),
      (ae = o),
      (Nt.transition = i));
  } else e.current = n;
  if (
    (pa && ((pa = !1), (tr = e), (gl = s)),
    (i = e.pendingLanes),
    i === 0 && (lr = null),
    Cb(n.stateNode),
    ot(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (ml) throw ((ml = !1), (e = nd), (nd = null), e);
  return (
    gl & 1 && e.tag !== 0 && Fs(),
    (i = e.pendingLanes),
    i & 1 ? (e === rd ? qi++ : ((qi = 0), (rd = e))) : (qi = 0),
    br(),
    null
  );
}
function Fs() {
  if (tr !== null) {
    var e = Py(gl),
      t = Nt.transition,
      n = ae;
    try {
      if (((Nt.transition = null), (ae = 16 > e ? 16 : e), tr === null))
        var r = !1;
      else {
        if (((e = tr), (tr = null), (gl = 0), re & 6)) throw Error(L(331));
        var s = re;
        for (re |= 4, F = e.current; F !== null; ) {
          var i = F,
            o = i.child;
          if (F.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gi(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), (F = f));
                  else
                    for (; F !== null; ) {
                      c = F;
                      var h = c.sibling,
                        p = c.return;
                      if ((Fv(c), c === u)) {
                        F = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = p), (F = h));
                        break;
                      }
                      F = p;
                    }
                }
              }
              var b = i.alternate;
              if (b !== null) {
                var y = b.child;
                if (y !== null) {
                  b.child = null;
                  do {
                    var w = y.sibling;
                    ((y.sibling = null), (y = w));
                  } while (y !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (F = o));
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gi(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                ((g.return = i.return), (F = g));
                break e;
              }
              F = i.return;
            }
        }
        var m = e.current;
        for (F = m; F !== null; ) {
          o = F;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) ((v.return = o), (F = v));
          else
            e: for (o = m; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bl(9, a);
                  }
                } catch (C) {
                  Se(a, a.return, C);
                }
              if (a === o) {
                F = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                ((S.return = a.return), (F = S));
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((re = s), br(), on && typeof on.onPostCommitFiberRoot == "function")
        )
          try {
            on.onPostCommitFiberRoot(Dl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((ae = n), (Nt.transition = t));
    }
  }
  return !1;
}
function hm(e, t, n) {
  ((t = oi(n, t)),
    (t = Pv(e, t, 1)),
    (e = ar(e, t, 1)),
    (t = Ge()),
    e !== null && (Oo(e, 1, t), ot(e, t)));
}
function Se(e, t, n) {
  if (e.tag === 3) hm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (lr === null || !lr.has(r)))
        ) {
          ((e = oi(n, e)),
            (e = Nv(t, e, 1)),
            (t = ar(t, e, 1)),
            (e = Ge()),
            t !== null && (Oo(t, 1, e), ot(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function X5(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (Ve & n) === n &&
      (Me === 4 || (Me === 3 && (Ve & 130023424) === Ve && 500 > Ce() - Wf)
        ? Kr(e, 0)
        : (Uf |= n)),
    ot(e, t));
}
function Qv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = sa), (sa <<= 1), !(sa & 130023424) && (sa = 4194304))
      : (t = 1));
  var n = Ge();
  ((e = En(e, t)), e !== null && (Oo(e, t, n), ot(e, n)));
}
function q5(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Qv(e, n));
}
function Z5(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  (r !== null && r.delete(t), Qv(e, n));
}
var Gv;
Gv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || st.current) nt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((nt = !1), _5(e, t, n));
      nt = !!(e.flags & 131072);
    }
  else ((nt = !1), pe && t.flags & 1048576 && Jy(t, al, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Ia(e, t), (e = t.pendingProps));
      var s = ni(t, We.current);
      (Vs(t, n), (s = Vf(null, t, r, e, s, n)));
      var i = Ff();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            it(r) ? ((i = !0), il(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Af(t),
            (s.updater = $l),
            (t.stateNode = s),
            (s._reactInternals = t),
            Hc(t, r, e, n),
            (t = Qc(null, t, r, !0, i, n)))
          : ((t.tag = 0), pe && i && Tf(t), Ye(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ia(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = eS(r)),
          (e = Ft(r, e)),
          s)
        ) {
          case 0:
            t = Yc(null, t, r, e, n);
            break e;
          case 1:
            t = rm(null, t, r, e, n);
            break e;
          case 11:
            t = tm(null, t, r, e, n);
            break e;
          case 14:
            t = nm(null, t, r, Ft(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ft(r, s)),
        Yc(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ft(r, s)),
        rm(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Av(t), e === null)) throw Error(L(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          iv(e, t),
          cl(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = oi(Error(L(423)), t)), (t = sm(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = oi(Error(L(424)), t)), (t = sm(e, t, r, n, s)));
            break e;
          } else
            for (
              pt = or(t.stateNode.containerInfo.firstChild),
                mt = t,
                pe = !0,
                Bt = null,
                n = rv(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((ri(), r === s)) {
            t = Tn(e, t, n);
            break e;
          }
          Ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ov(t),
        e === null && Bc(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        Vc(r, s) ? (o = null) : i !== null && Vc(r, i) && (t.flags |= 32),
        Mv(e, t),
        Ye(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Bc(t), null);
    case 13:
      return Lv(e, t, n);
    case 4:
      return (
        Lf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = si(t, null, r, n)) : Ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ft(r, s)),
        tm(e, t, r, s, n)
      );
    case 7:
      return (Ye(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ye(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ye(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          ue(ll, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Kt(i.value, o)) {
            if (i.children === s.children && !st.current) {
              t = Tn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      ((l = bn(-1, n & -n)), (l.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Uc(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(L(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Uc(o, n, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (Ye(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Vs(t, n),
        (s = jt(s)),
        (r = r(s)),
        (t.flags |= 1),
        Ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Ft(r, t.pendingProps)),
        (s = Ft(r.type, s)),
        nm(e, t, r, s, n)
      );
    case 15:
      return jv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Ft(r, s)),
        Ia(e, t),
        (t.tag = 1),
        it(r) ? ((e = !0), il(t)) : (e = !1),
        Vs(t, n),
        kv(t, r, s),
        Hc(t, r, s, n),
        Qc(null, t, r, !0, e, n)
      );
    case 19:
      return Dv(e, t, n);
    case 22:
      return Rv(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Xv(e, t) {
  return Cy(e, t);
}
function J5(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function kt(e, t, n, r) {
  return new J5(e, t, n, r);
}
function Qf(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function eS(e) {
  if (typeof e == "function") return Qf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hf)) return 11;
    if (e === pf) return 14;
  }
  return 2;
}
function cr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = kt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _a(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Qf(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case gs:
        return Yr(n.children, s, i, t);
      case ff:
        ((o = 8), (s |= 8));
        break;
      case mc:
        return (
          (e = kt(12, n, t, s | 2)),
          (e.elementType = mc),
          (e.lanes = i),
          e
        );
      case gc:
        return ((e = kt(13, n, t, s)), (e.elementType = gc), (e.lanes = i), e);
      case yc:
        return ((e = kt(19, n, t, s)), (e.elementType = yc), (e.lanes = i), e);
      case oy:
        return Wl(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case sy:
              o = 10;
              break e;
            case iy:
              o = 9;
              break e;
            case hf:
              o = 11;
              break e;
            case pf:
              o = 14;
              break e;
            case Bn:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = kt(o, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Yr(e, t, n, r) {
  return ((e = kt(7, e, r, t)), (e.lanes = n), e);
}
function Wl(e, t, n, r) {
  return (
    (e = kt(22, e, r, t)),
    (e.elementType = oy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $u(e, t, n) {
  return ((e = kt(6, e, null, t)), (e.lanes = n), e);
}
function Bu(e, t, n) {
  return (
    (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function tS(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Su(0)),
    (this.expirationTimes = Su(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Su(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function Gf(e, t, n, r, s, i, o, a, l) {
  return (
    (e = new tS(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = kt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Af(i),
    e
  );
}
function nS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ms,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qv(e) {
  if (!e) return hr;
  e = e._reactInternals;
  e: {
    if (ss(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (it(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (it(n)) return qy(e, n, t);
  }
  return t;
}
function Zv(e, t, n, r, s, i, o, a, l) {
  return (
    (e = Gf(n, r, !0, e, s, i, o, a, l)),
    (e.context = qv(null)),
    (n = e.current),
    (r = Ge()),
    (s = ur(n)),
    (i = bn(r, s)),
    (i.callback = t ?? null),
    ar(n, i, s),
    (e.current.lanes = s),
    Oo(e, s, r),
    ot(e, r),
    e
  );
}
function Hl(e, t, n, r) {
  var s = t.current,
    i = Ge(),
    o = ur(s);
  return (
    (n = qv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bn(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ar(s, t, o)),
    e !== null && (Ht(e, s, o, i), La(e, s, o)),
    o
  );
}
function vl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xf(e, t) {
  (pm(e, t), (e = e.alternate) && pm(e, t));
}
function rS() {
  return null;
}
var Jv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function qf(e) {
  this._internalRoot = e;
}
Kl.prototype.render = qf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Hl(e, t, null, null);
};
Kl.prototype.unmount = qf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (es(function () {
      Hl(null, e, null, null);
    }),
      (t[Cn] = null));
  }
};
function Kl(e) {
  this._internalRoot = e;
}
Kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ry();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++);
    (Wn.splice(n, 0, e), n === 0 && Ay(e));
  }
};
function Zf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function mm() {}
function sS(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = vl(o);
        i.call(u);
      };
    }
    var o = Zv(t, r, e, 0, null, !1, !1, "", mm);
    return (
      (e._reactRootContainer = o),
      (e[Cn] = o.current),
      ho(e.nodeType === 8 ? e.parentNode : e),
      es(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = vl(l);
      a.call(u);
    };
  }
  var l = Gf(e, 0, !1, null, null, !1, !1, "", mm);
  return (
    (e._reactRootContainer = l),
    (e[Cn] = l.current),
    ho(e.nodeType === 8 ? e.parentNode : e),
    es(function () {
      Hl(t, l, n, r);
    }),
    l
  );
}
function Ql(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = vl(o);
        a.call(l);
      };
    }
    Hl(t, o, e, s);
  } else o = sS(n, t, e, s, r);
  return vl(o);
}
Ny = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _i(t.pendingLanes);
        n !== 0 &&
          (yf(t, n | 1), ot(t, Ce()), !(re & 6) && ((ai = Ce() + 500), br()));
      }
      break;
    case 13:
      (es(function () {
        var r = En(e, 1);
        if (r !== null) {
          var s = Ge();
          Ht(r, e, 1, s);
        }
      }),
        Xf(e, 1));
  }
};
vf = function (e) {
  if (e.tag === 13) {
    var t = En(e, 134217728);
    if (t !== null) {
      var n = Ge();
      Ht(t, e, 134217728, n);
    }
    Xf(e, 134217728);
  }
};
jy = function (e) {
  if (e.tag === 13) {
    var t = ur(e),
      n = En(e, t);
    if (n !== null) {
      var r = Ge();
      Ht(n, e, t, r);
    }
    Xf(e, t);
  }
};
Ry = function () {
  return ae;
};
My = function (e, t) {
  var n = ae;
  try {
    return ((ae = e), t());
  } finally {
    ae = n;
  }
};
Pc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((wc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Fl(r);
            if (!s) throw Error(L(90));
            (ly(r), wc(r, s));
          }
        }
      }
      break;
    case "textarea":
      cy(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Ls(e, !!n.multiple, t, !1));
  }
};
yy = Hf;
vy = es;
var iS = { usingClientEntryPoint: !1, Events: [Vo, ws, Fl, my, gy, Hf] },
  Ai = {
    findFiberByHostInstance: Ar,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  oS = {
    bundleType: Ai.bundleType,
    version: Ai.version,
    rendererPackageName: Ai.rendererPackageName,
    rendererConfig: Ai.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = by(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Ai.findFiberByHostInstance || rS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ma.isDisabled && ma.supportsFiber)
    try {
      ((Dl = ma.inject(oS)), (on = ma));
    } catch {}
}
vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iS;
vt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zf(t)) throw Error(L(200));
  return nS(e, t, null, n);
};
vt.createRoot = function (e, t) {
  if (!Zf(e)) throw Error(L(299));
  var n = !1,
    r = "",
    s = Jv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Gf(e, 1, !1, null, null, n, !1, r, s)),
    (e[Cn] = t.current),
    ho(e.nodeType === 8 ? e.parentNode : e),
    new qf(t)
  );
};
vt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return ((e = by(t)), (e = e === null ? null : e.stateNode), e);
};
vt.flushSync = function (e) {
  return es(e);
};
vt.hydrate = function (e, t, n) {
  if (!Yl(t)) throw Error(L(200));
  return Ql(null, e, t, !0, n);
};
vt.hydrateRoot = function (e, t, n) {
  if (!Zf(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = Jv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Zv(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[Cn] = t.current),
    ho(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new Kl(t);
};
vt.render = function (e, t, n) {
  if (!Yl(t)) throw Error(L(200));
  return Ql(null, e, t, !1, n);
};
vt.unmountComponentAtNode = function (e) {
  if (!Yl(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (es(function () {
        Ql(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Cn] = null));
        });
      }),
      !0)
    : !1;
};
vt.unstable_batchedUpdates = Hf;
vt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yl(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Ql(e, t, n, !1, r);
};
vt.version = "18.3.1-next-f1338f8080-20240426";
function e1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e1);
    } catch (e) {
      console.error(e);
    }
}
(e1(), (ey.exports = vt));
var _o = ey.exports;
const t1 = $g(_o);
var n1,
  gm = _o;
((n1 = gm.createRoot), gm.hydrateRoot);
const aS = 1,
  lS = 1e6;
let Uu = 0;
function uS() {
  return ((Uu = (Uu + 1) % Number.MAX_SAFE_INTEGER), Uu.toString());
}
const Wu = new Map(),
  ym = (e) => {
    if (Wu.has(e)) return;
    const t = setTimeout(() => {
      (Wu.delete(e), Zi({ type: "REMOVE_TOAST", toastId: e }));
    }, lS);
    Wu.set(e, t);
  },
  cS = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, aS) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? ym(n)
            : e.toasts.forEach((r) => {
                ym(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  za = [];
let $a = { toasts: [] };
function Zi(e) {
  (($a = cS($a, e)),
    za.forEach((t) => {
      t($a);
    }));
}
function dS({ ...e }) {
  const t = uS(),
    n = (s) => Zi({ type: "UPDATE_TOAST", toast: { ...s, id: t } }),
    r = () => Zi({ type: "DISMISS_TOAST", toastId: t });
  return (
    Zi({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (s) => {
          s || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function fS() {
  const [e, t] = x.useState($a);
  return (
    x.useEffect(
      () => (
        za.push(t),
        () => {
          const n = za.indexOf(t);
          n > -1 && za.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: dS,
      dismiss: (n) => Zi({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function Re(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function vm(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function r1(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = vm(s, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : vm(e[s], null);
        }
      };
  };
}
function Yt(...e) {
  return x.useCallback(r1(...e), e);
}
function Gl(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = x.createContext(o),
      l = n.length;
    n = [...n, o];
    const u = (f) => {
      var g;
      const { scope: h, children: p, ...b } = f,
        y = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[l]) || a,
        w = x.useMemo(() => b, Object.values(b));
      return d.jsx(y.Provider, { value: w, children: p });
    };
    u.displayName = i + "Provider";
    function c(f, h) {
      var y;
      const p = ((y = h == null ? void 0 : h[e]) == null ? void 0 : y[l]) || a,
        b = x.useContext(p);
      if (b) return b;
      if (o !== void 0) return o;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const s = () => {
    const i = n.map((o) => x.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((s.scopeName = e), [r, hS(s, ...t)]);
}
function hS(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function od(e) {
  const t = pS(e),
    n = x.forwardRef((r, s) => {
      const { children: i, ...o } = r,
        a = x.Children.toArray(i),
        l = a.find(gS);
      if (l) {
        const u = l.props.children,
          c = a.map((f) =>
            f === l
              ? x.Children.count(u) > 1
                ? x.Children.only(null)
                : x.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return d.jsx(t, {
          ...o,
          ref: s,
          children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null,
        });
      }
      return d.jsx(t, { ...o, ref: s, children: i });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function pS(e) {
  const t = x.forwardRef((n, r) => {
    const { children: s, ...i } = n;
    if (x.isValidElement(s)) {
      const o = vS(s),
        a = yS(i, s.props);
      return (
        s.type !== x.Fragment && (a.ref = r ? r1(r, o) : o),
        x.cloneElement(s, a)
      );
    }
    return x.Children.count(s) > 1 ? x.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var s1 = Symbol("radix.slottable");
function mS(e) {
  const t = ({ children: n }) => d.jsx(d.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = s1), t);
}
function gS(e) {
  return (
    x.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === s1
  );
}
function yS(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? s && i
        ? (n[r] = (...a) => {
            const l = i(...a);
            return (s(...a), l);
          })
        : s && (n[r] = s)
      : r === "style"
        ? (n[r] = { ...s, ...i })
        : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vS(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function xS(e) {
  const t = e + "CollectionProvider",
    [n, r] = Gl(t),
    [s, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (y) => {
      const { scope: w, children: g } = y,
        m = D.useRef(null),
        v = D.useRef(new Map()).current;
      return d.jsx(s, { scope: w, itemMap: v, collectionRef: m, children: g });
    };
  o.displayName = t;
  const a = e + "CollectionSlot",
    l = od(a),
    u = D.forwardRef((y, w) => {
      const { scope: g, children: m } = y,
        v = i(a, g),
        S = Yt(w, v.collectionRef);
      return d.jsx(l, { ref: S, children: m });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    h = od(c),
    p = D.forwardRef((y, w) => {
      const { scope: g, children: m, ...v } = y,
        S = D.useRef(null),
        C = Yt(w, S),
        T = i(c, g);
      return (
        D.useEffect(
          () => (
            T.itemMap.set(S, { ref: S, ...v }),
            () => void T.itemMap.delete(S)
          ),
        ),
        d.jsx(h, { [f]: "", ref: C, children: m })
      );
    });
  p.displayName = c;
  function b(y) {
    const w = i(e + "CollectionConsumer", y);
    return D.useCallback(() => {
      const m = w.collectionRef.current;
      if (!m) return [];
      const v = Array.from(m.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (T, k) => v.indexOf(T.ref.current) - v.indexOf(k.ref.current),
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: o, Slot: u, ItemSlot: p }, b, r];
}
var wS = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ut = wS.reduce((e, t) => {
    const n = od(`Primitive.${t}`),
      r = x.forwardRef((s, i) => {
        const { asChild: o, ...a } = s,
          l = o ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          d.jsx(l, { ...a, ref: i })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function i1(e, t) {
  e && _o.flushSync(() => e.dispatchEvent(t));
}
function pr(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function bS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = pr(e);
  x.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var SS = "DismissableLayer",
  ad = "dismissableLayer.update",
  CS = "dismissableLayer.pointerDownOutside",
  ES = "dismissableLayer.focusOutside",
  xm,
  o1 = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Jf = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = e,
      u = x.useContext(o1),
      [c, f] = x.useState(null),
      h =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = x.useState({}),
      b = Yt(t, (k) => f(k)),
      y = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = y.indexOf(w),
      m = c ? y.indexOf(c) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = m >= g,
      C = kS((k) => {
        const P = k.target,
          A = [...u.branches].some((M) => M.contains(P));
        !S ||
          A ||
          (s == null || s(k),
          o == null || o(k),
          k.defaultPrevented || a == null || a());
      }, h),
      T = PS((k) => {
        const P = k.target;
        [...u.branches].some((M) => M.contains(P)) ||
          (i == null || i(k),
          o == null || o(k),
          k.defaultPrevented || a == null || a());
      }, h);
    return (
      bS((k) => {
        m === u.layers.size - 1 &&
          (r == null || r(k),
          !k.defaultPrevented && a && (k.preventDefault(), a()));
      }, h),
      x.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((xm = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            wm(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = xm);
            }
          );
      }, [c, h, n, u]),
      x.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            wm());
        },
        [c, u],
      ),
      x.useEffect(() => {
        const k = () => p({});
        return (
          document.addEventListener(ad, k),
          () => document.removeEventListener(ad, k)
        );
      }, []),
      d.jsx(ut.div, {
        ...l,
        ref: b,
        style: {
          pointerEvents: v ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Re(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Re(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Re(
          e.onPointerDownCapture,
          C.onPointerDownCapture,
        ),
      })
    );
  });
Jf.displayName = SS;
var TS = "DismissableLayerBranch",
  a1 = x.forwardRef((e, t) => {
    const n = x.useContext(o1),
      r = x.useRef(null),
      s = Yt(t, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      d.jsx(ut.div, { ...e, ref: s })
    );
  });
a1.displayName = TS;
function kS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = pr(e),
    r = x.useRef(!1),
    s = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              l1(CS, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = l),
                t.addEventListener("click", s.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", s.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(o),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", s.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function PS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = pr(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          l1(ES, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function wm() {
  const e = new CustomEvent(ad);
  document.dispatchEvent(e);
}
function l1(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && s.addEventListener(e, t, { once: !0 }),
    r ? i1(s, i) : s.dispatchEvent(i));
}
var NS = Jf,
  jS = a1,
  mr = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  RS = "Portal",
  u1 = x.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [s, i] = x.useState(!1);
    mr(() => i(!0), []);
    const o =
      n ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? t1.createPortal(d.jsx(ut.div, { ...r, ref: t }), o) : null;
  });
u1.displayName = RS;
function MS(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var eh = (e) => {
  const { present: t, children: n } = e,
    r = AS(t),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    i = Yt(r.ref, LS(s));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(s, { ref: i })
    : null;
};
eh.displayName = "Presence";
function AS(e) {
  const [t, n] = x.useState(),
    r = x.useRef(null),
    s = x.useRef(e),
    i = x.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, l] = MS(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = ga(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    mr(() => {
      const u = r.current,
        c = s.current;
      if (c !== e) {
        const h = i.current,
          p = ga(u);
        (e
          ? l("MOUNT")
          : p === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(c && h !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e));
      }
    }, [e, l]),
    mr(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          f = (p) => {
            const y = ga(r.current).includes(p.animationName);
            if (p.target === t && y && (l("ANIMATION_END"), !s.current)) {
              const w = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                })));
            }
          },
          h = (p) => {
            p.target === t && (i.current = ga(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            (c.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: x.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function ga(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function LS(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var DS = Zg[" useInsertionEffect ".trim().toString()] || mr;
function OS({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [s, i, o] = IS({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : s;
  {
    const c = x.useRef(e !== void 0);
    x.useEffect(() => {
      const f = c.current;
      (f !== a &&
        console.warn(
          `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (c.current = a));
    }, [a, r]);
  }
  const u = x.useCallback(
    (c) => {
      var f;
      if (a) {
        const h = VS(c) ? c(e) : c;
        h !== e && ((f = o.current) == null || f.call(o, h));
      } else i(c);
    },
    [a, e, i, o],
  );
  return [l, u];
}
function IS({ defaultProp: e, onChange: t }) {
  const [n, r] = x.useState(e),
    s = x.useRef(n),
    i = x.useRef(t);
  return (
    DS(() => {
      i.current = t;
    }, [t]),
    x.useEffect(() => {
      var o;
      s.current !== n &&
        ((o = i.current) == null || o.call(i, n), (s.current = n));
    }, [n, s]),
    [n, r, i]
  );
}
function VS(e) {
  return typeof e == "function";
}
var FS = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  _S = "VisuallyHidden",
  Xl = x.forwardRef((e, t) =>
    d.jsx(ut.span, { ...e, ref: t, style: { ...FS, ...e.style } }),
  );
Xl.displayName = _S;
var zS = Xl,
  th = "ToastProvider",
  [nh, $S, BS] = xS("Toast"),
  [c1, rA] = Gl("Toast", [BS]),
  [US, ql] = c1(th),
  d1 = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: s = "right",
        swipeThreshold: i = 50,
        children: o,
      } = e,
      [a, l] = x.useState(null),
      [u, c] = x.useState(0),
      f = x.useRef(!1),
      h = x.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${th}\`. Expected non-empty \`string\`.`,
        ),
      d.jsx(nh.Provider, {
        scope: t,
        children: d.jsx(US, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: s,
          swipeThreshold: i,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: x.useCallback(() => c((p) => p + 1), []),
          onToastRemove: x.useCallback(() => c((p) => p - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: h,
          children: o,
        }),
      })
    );
  };
d1.displayName = th;
var f1 = "ToastViewport",
  WS = ["F8"],
  ld = "toast.viewportPause",
  ud = "toast.viewportResume",
  h1 = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = WS,
        label: s = "Notifications ({hotkey})",
        ...i
      } = e,
      o = ql(f1, n),
      a = $S(n),
      l = x.useRef(null),
      u = x.useRef(null),
      c = x.useRef(null),
      f = x.useRef(null),
      h = Yt(t, f, o.onViewportChange),
      p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      b = o.toastCount > 0;
    (x.useEffect(() => {
      const w = (g) => {
        var v;
        r.length !== 0 &&
          r.every((S) => g[S] || g.code === S) &&
          ((v = f.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      x.useEffect(() => {
        const w = l.current,
          g = f.current;
        if (b && w && g) {
          const m = () => {
              if (!o.isClosePausedRef.current) {
                const T = new CustomEvent(ld);
                (g.dispatchEvent(T), (o.isClosePausedRef.current = !0));
              }
            },
            v = () => {
              if (o.isClosePausedRef.current) {
                const T = new CustomEvent(ud);
                (g.dispatchEvent(T), (o.isClosePausedRef.current = !1));
              }
            },
            S = (T) => {
              !w.contains(T.relatedTarget) && v();
            },
            C = () => {
              w.contains(document.activeElement) || v();
            };
          return (
            w.addEventListener("focusin", m),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", m),
            window.addEventListener("focus", v),
            () => {
              (w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", v));
            }
          );
        }
      }, [b, o.isClosePausedRef]));
    const y = x.useCallback(
      ({ tabbingDirection: w }) => {
        const m = a().map((v) => {
          const S = v.ref.current,
            C = [S, ...rC(S)];
          return w === "forwards" ? C : C.reverse();
        });
        return (w === "forwards" ? m.reverse() : m).flat();
      },
      [a],
    );
    return (
      x.useEffect(() => {
        const w = f.current;
        if (w) {
          const g = (m) => {
            var C, T, k;
            const v = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !v) {
              const P = document.activeElement,
                A = m.shiftKey;
              if (m.target === w && A) {
                (C = u.current) == null || C.focus();
                return;
              }
              const V = y({ tabbingDirection: A ? "backwards" : "forwards" }),
                K = V.findIndex((O) => O === P);
              Hu(V.slice(K + 1))
                ? m.preventDefault()
                : A
                  ? (T = u.current) == null || T.focus()
                  : (k = c.current) == null || k.focus();
            }
          };
          return (
            w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
          );
        }
      }, [a, y]),
      d.jsxs(jS, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: b ? void 0 : "none" },
        children: [
          b &&
            d.jsx(cd, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "forwards" });
                Hu(w);
              },
            }),
          d.jsx(nh.Slot, {
            scope: n,
            children: d.jsx(ut.ol, { tabIndex: -1, ...i, ref: h }),
          }),
          b &&
            d.jsx(cd, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "backwards" });
                Hu(w);
              },
            }),
        ],
      })
    );
  });
h1.displayName = f1;
var p1 = "ToastFocusProxy",
  cd = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...s } = e,
      i = ql(p1, n);
    return d.jsx(Xl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: t,
      style: { position: "fixed" },
      onFocus: (o) => {
        var u;
        const a = o.relatedTarget;
        !((u = i.viewport) != null && u.contains(a)) && r();
      },
    });
  });
cd.displayName = p1;
var zo = "Toast",
  HS = "toast.swipeStart",
  KS = "toast.swipeMove",
  YS = "toast.swipeCancel",
  QS = "toast.swipeEnd",
  m1 = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: s, onOpenChange: i, ...o } = e,
      [a, l] = OS({ prop: r, defaultProp: s ?? !0, onChange: i, caller: zo });
    return d.jsx(eh, {
      present: n || a,
      children: d.jsx(qS, {
        open: a,
        ...o,
        ref: t,
        onClose: () => l(!1),
        onPause: pr(e.onPause),
        onResume: pr(e.onResume),
        onSwipeStart: Re(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Re(e.onSwipeMove, (u) => {
          const { x: c, y: f } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`,
            ));
        }),
        onSwipeCancel: Re(e.onSwipeCancel, (u) => {
          (u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: Re(e.onSwipeEnd, (u) => {
          const { x: c, y: f } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
m1.displayName = zo;
var [GS, XS] = c1(zo, { onClose() {} }),
  qS = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: s,
        open: i,
        onClose: o,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: f,
        onSwipeCancel: h,
        onSwipeEnd: p,
        ...b
      } = e,
      y = ql(zo, n),
      [w, g] = x.useState(null),
      m = Yt(t, (O) => g(O)),
      v = x.useRef(null),
      S = x.useRef(null),
      C = s || y.duration,
      T = x.useRef(0),
      k = x.useRef(C),
      P = x.useRef(0),
      { onToastAdd: A, onToastRemove: M } = y,
      z = pr(() => {
        var q;
        ((w == null ? void 0 : w.contains(document.activeElement)) &&
          ((q = y.viewport) == null || q.focus()),
          o());
      }),
      V = x.useCallback(
        (O) => {
          !O ||
            O === 1 / 0 ||
            (window.clearTimeout(P.current),
            (T.current = new Date().getTime()),
            (P.current = window.setTimeout(z, O)));
        },
        [z],
      );
    (x.useEffect(() => {
      const O = y.viewport;
      if (O) {
        const q = () => {
            (V(k.current), u == null || u());
          },
          H = () => {
            const $ = new Date().getTime() - T.current;
            ((k.current = k.current - $),
              window.clearTimeout(P.current),
              l == null || l());
          };
        return (
          O.addEventListener(ld, H),
          O.addEventListener(ud, q),
          () => {
            (O.removeEventListener(ld, H), O.removeEventListener(ud, q));
          }
        );
      }
    }, [y.viewport, C, l, u, V]),
      x.useEffect(() => {
        i && !y.isClosePausedRef.current && V(C);
      }, [i, C, y.isClosePausedRef, V]),
      x.useEffect(() => (A(), () => M()), [A, M]));
    const K = x.useMemo(() => (w ? S1(w) : null), [w]);
    return y.viewport
      ? d.jsxs(d.Fragment, {
          children: [
            K &&
              d.jsx(ZS, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: K,
              }),
            d.jsx(GS, {
              scope: n,
              onClose: z,
              children: _o.createPortal(
                d.jsx(nh.ItemSlot, {
                  scope: n,
                  children: d.jsx(NS, {
                    asChild: !0,
                    onEscapeKeyDown: Re(a, () => {
                      (y.isFocusedToastEscapeKeyDownRef.current || z(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: d.jsx(ut.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...b,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Re(e.onKeyDown, (O) => {
                        O.key === "Escape" &&
                          (a == null || a(O.nativeEvent),
                          O.nativeEvent.defaultPrevented ||
                            ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: Re(e.onPointerDown, (O) => {
                        O.button === 0 &&
                          (v.current = { x: O.clientX, y: O.clientY });
                      }),
                      onPointerMove: Re(e.onPointerMove, (O) => {
                        if (!v.current) return;
                        const q = O.clientX - v.current.x,
                          H = O.clientY - v.current.y,
                          $ = !!S.current,
                          j = ["left", "right"].includes(y.swipeDirection),
                          R = ["left", "up"].includes(y.swipeDirection)
                            ? Math.min
                            : Math.max,
                          I = j ? R(0, q) : 0,
                          Y = j ? 0 : R(0, H),
                          B = O.pointerType === "touch" ? 10 : 2,
                          Z = { x: I, y: Y },
                          ee = { originalEvent: O, delta: Z };
                        $
                          ? ((S.current = Z), ya(KS, f, ee, { discrete: !1 }))
                          : bm(Z, y.swipeDirection, B)
                            ? ((S.current = Z),
                              ya(HS, c, ee, { discrete: !1 }),
                              O.target.setPointerCapture(O.pointerId))
                            : (Math.abs(q) > B || Math.abs(H) > B) &&
                              (v.current = null);
                      }),
                      onPointerUp: Re(e.onPointerUp, (O) => {
                        const q = S.current,
                          H = O.target;
                        if (
                          (H.hasPointerCapture(O.pointerId) &&
                            H.releasePointerCapture(O.pointerId),
                          (S.current = null),
                          (v.current = null),
                          q)
                        ) {
                          const $ = O.currentTarget,
                            j = { originalEvent: O, delta: q };
                          (bm(q, y.swipeDirection, y.swipeThreshold)
                            ? ya(QS, p, j, { discrete: !0 })
                            : ya(YS, h, j, { discrete: !0 }),
                            $.addEventListener(
                              "click",
                              (R) => R.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  ZS = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      s = ql(zo, t),
      [i, o] = x.useState(!1),
      [a, l] = x.useState(!1);
    return (
      tC(() => o(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : d.jsx(u1, {
            asChild: !0,
            children: d.jsx(Xl, {
              ...r,
              children:
                i && d.jsxs(d.Fragment, { children: [s.label, " ", n] }),
            }),
          })
    );
  },
  JS = "ToastTitle",
  g1 = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return d.jsx(ut.div, { ...r, ref: t });
  });
g1.displayName = JS;
var eC = "ToastDescription",
  y1 = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return d.jsx(ut.div, { ...r, ref: t });
  });
y1.displayName = eC;
var v1 = "ToastAction",
  x1 = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? d.jsx(b1, {
          altText: n,
          asChild: !0,
          children: d.jsx(rh, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${v1}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
x1.displayName = v1;
var w1 = "ToastClose",
  rh = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      s = XS(w1, n);
    return d.jsx(b1, {
      asChild: !0,
      children: d.jsx(ut.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Re(e.onClick, s.onClose),
      }),
    });
  });
rh.displayName = w1;
var b1 = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...s } = e;
  return d.jsx(ut.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...s,
    ref: t,
  });
});
function S1(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        nC(r))
      ) {
        const s = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!s)
          if (i) {
            const o = r.dataset.radixToastAnnounceAlt;
            o && t.push(o);
          } else t.push(...S1(r));
      }
    }),
    t
  );
}
function ya(e, t, n, { discrete: r }) {
  const s = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && s.addEventListener(e, t, { once: !0 }),
    r ? i1(s, i) : s.dispatchEvent(i));
}
var bm = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    s = Math.abs(e.y),
    i = r > s;
  return t === "left" || t === "right" ? i && r > n : !i && s > n;
};
function tC(e = () => {}) {
  const t = pr(e);
  mr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function nC(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function rC(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Hu(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var sC = d1,
  C1 = h1,
  E1 = m1,
  T1 = g1,
  k1 = y1,
  P1 = x1,
  N1 = rh;
function j1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = j1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function R1() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = j1(e)) && (r && (r += " "), (r += t));
  return r;
}
const Sm = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Cm = R1,
  iC = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Cm(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((u) => {
        const c = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (c === null) return null;
        const h = Sm(c) || Sm(f);
        return s[u][h];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [f, h] = c;
          return (h === void 0 || (u[f] = h), u);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: f, className: h, ...p } = c;
              return Object.entries(p).every((b) => {
                let [y, w] = b;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...a }[y])
                  : { ...i, ...a }[y] === w;
              })
                ? [...u, f, h]
                : u;
            }, []);
    return Cm(
      e,
      o,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  M1 = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var aC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lC = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    l,
  ) =>
    x.createElement(
      "svg",
      {
        ref: l,
        ...aC,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: M1("lucide", s),
        ...a,
      },
      [
        ...o.map(([u, c]) => x.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const me = (e, t) => {
  const n = x.forwardRef(({ className: r, ...s }, i) =>
    x.createElement(lC, {
      ref: i,
      iconNode: t,
      className: M1(`lucide-${oC(e)}`, r),
      ...s,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uC = me("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cC = me("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A1 = me("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dC = me("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L1 = me("CreditCard", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fC = me("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D1 = me("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hC = me("Flame", [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pC = me("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mC = me("Handshake", [
  ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
  [
    "path",
    {
      d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
      key: "9pr0kb",
    },
  ],
  ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
  ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
  ["path", { d: "M3 4h8", key: "1ep09j" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gC = me("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yC = me("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw",
    },
  ],
  [
    "path",
    { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" },
  ],
  [
    "path",
    { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vC = me("Link2", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xC = me("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sh = me("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wC = me("Monitor", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" },
  ],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bC = me("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SC = me("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const CC = me("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const EC = me("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TC = me("Terminal", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = me("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I1 = me("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V1 = me("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  ih = "-",
  kC = (e) => {
    const t = NC(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(ih);
        return (a[0] === "" && a.length !== 1 && a.shift(), F1(a, t) || PC(o));
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = n[o] || [];
        return a && r[o] ? [...l, ...r[o]] : l;
      },
    };
  },
  F1 = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? F1(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(ih);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  Em = /^\[(.+)\]$/,
  PC = (e) => {
    if (Em.test(e)) {
      const t = Em.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  NC = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      RC(Object.entries(e.classGroups), n).forEach(([i, o]) => {
        dd(o, r, i, t);
      }),
      r
    );
  },
  dd = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : Tm(t, s);
        i.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (jC(s)) {
          dd(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        dd(o, Tm(t, i), n, r);
      });
    });
  },
  Tm = (e, t) => {
    let n = e;
    return (
      t.split(ih).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  jC = (e) => e.isThemeGetter,
  RC = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const s = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([o, a]) => [t + o, a]),
                  )
                : i,
          );
          return [n, s];
        })
      : e,
  MC = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const s = (i, o) => {
      (n.set(i, o), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(i) {
        let o = n.get(i);
        if (o !== void 0) return o;
        if ((o = r.get(i)) !== void 0) return (s(i, o), o);
      },
      set(i, o) {
        n.has(i) ? n.set(i, o) : s(i, o);
      },
    };
  },
  _1 = "!",
  AC = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      s = t[0],
      i = t.length,
      o = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          f;
        for (let w = 0; w < a.length; w++) {
          let g = a[w];
          if (u === 0) {
            if (g === s && (r || a.slice(w, w + i) === t)) {
              (l.push(a.slice(c, w)), (c = w + i));
              continue;
            }
            if (g === "/") {
              f = w;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const h = l.length === 0 ? a : a.substring(c),
          p = h.startsWith(_1),
          b = p ? h.substring(1) : h,
          y = f && f > c ? f - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: p,
          baseClassName: b,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: o }) : o;
  },
  LC = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  DC = (e) => ({ cache: MC(e.cacheSize), parseClassName: AC(e), ...kC(e) }),
  OC = /\s+/,
  IC = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(OC);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const u = o[l],
        {
          modifiers: c,
          hasImportantModifier: f,
          baseClassName: h,
          maybePostfixModifierPosition: p,
        } = n(u);
      let b = !!p,
        y = r(b ? h.substring(0, p) : h);
      if (!y) {
        if (!b) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((y = r(h)), !y)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        b = !1;
      }
      const w = LC(c).join(":"),
        g = f ? w + _1 : w,
        m = g + y;
      if (i.includes(m)) continue;
      i.push(m);
      const v = s(y, b);
      for (let S = 0; S < v.length; ++S) {
        const C = v[S];
        i.push(g + C);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function VC() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = z1(t)) && (r && (r += " "), (r += n));
  return r;
}
const z1 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = z1(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function FC(e, ...t) {
  let n,
    r,
    s,
    i = o;
  function o(l) {
    const u = t.reduce((c, f) => f(c), e());
    return ((n = DC(u)), (r = n.cache.get), (s = n.cache.set), (i = a), a(l));
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = IC(l, n);
    return (s(l, c), c);
  }
  return function () {
    return i(VC.apply(null, arguments));
  };
}
const ce = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  $1 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  _C = /^\d+\/\d+$/,
  zC = new Set(["px", "full", "screen"]),
  $C = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  BC =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  UC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  WC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  HC =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  pn = (e) => _s(e) || zC.has(e) || _C.test(e),
  Vn = (e) => gi(e, "length", JC),
  _s = (e) => !!e && !Number.isNaN(Number(e)),
  Ku = (e) => gi(e, "number", _s),
  Li = (e) => !!e && Number.isInteger(Number(e)),
  KC = (e) => e.endsWith("%") && _s(e.slice(0, -1)),
  X = (e) => $1.test(e),
  Fn = (e) => $C.test(e),
  YC = new Set(["length", "size", "percentage"]),
  QC = (e) => gi(e, YC, B1),
  GC = (e) => gi(e, "position", B1),
  XC = new Set(["image", "url"]),
  qC = (e) => gi(e, XC, t3),
  ZC = (e) => gi(e, "", e3),
  Di = () => !0,
  gi = (e, t, n) => {
    const r = $1.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  JC = (e) => BC.test(e) && !UC.test(e),
  B1 = () => !1,
  e3 = (e) => WC.test(e),
  t3 = (e) => HC.test(e),
  n3 = () => {
    const e = ce("colors"),
      t = ce("spacing"),
      n = ce("blur"),
      r = ce("brightness"),
      s = ce("borderColor"),
      i = ce("borderRadius"),
      o = ce("borderSpacing"),
      a = ce("borderWidth"),
      l = ce("contrast"),
      u = ce("grayscale"),
      c = ce("hueRotate"),
      f = ce("invert"),
      h = ce("gap"),
      p = ce("gradientColorStops"),
      b = ce("gradientColorStopPositions"),
      y = ce("inset"),
      w = ce("margin"),
      g = ce("opacity"),
      m = ce("padding"),
      v = ce("saturate"),
      S = ce("scale"),
      C = ce("sepia"),
      T = ce("skew"),
      k = ce("space"),
      P = ce("translate"),
      A = () => ["auto", "contain", "none"],
      M = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", X, t],
      V = () => [X, t],
      K = () => ["", pn, Vn],
      O = () => ["auto", _s, X],
      q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      H = () => ["solid", "dashed", "dotted", "double", "none"],
      $ = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      j = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      R = () => ["", "0", X],
      I = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Y = () => [_s, X];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Di],
        spacing: [pn, Vn],
        blur: ["none", "", Fn, X],
        brightness: Y(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Fn, X],
        borderSpacing: V(),
        borderWidth: K(),
        contrast: Y(),
        grayscale: R(),
        hueRotate: Y(),
        invert: R(),
        gap: V(),
        gradientColorStops: [e],
        gradientColorStopPositions: [KC, Vn],
        inset: z(),
        margin: z(),
        opacity: Y(),
        padding: V(),
        saturate: Y(),
        scale: Y(),
        sepia: R(),
        skew: Y(),
        space: V(),
        translate: V(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", X] }],
        container: ["container"],
        columns: [{ columns: [Fn] }],
        "break-after": [{ "break-after": I() }],
        "break-before": [{ "break-before": I() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...q(), X] }],
        overflow: [{ overflow: M() }],
        "overflow-x": [{ "overflow-x": M() }],
        "overflow-y": [{ "overflow-y": M() }],
        overscroll: [{ overscroll: A() }],
        "overscroll-x": [{ "overscroll-x": A() }],
        "overscroll-y": [{ "overscroll-y": A() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Li, X] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", X] }],
        grow: [{ grow: R() }],
        shrink: [{ shrink: R() }],
        order: [{ order: ["first", "last", "none", Li, X] }],
        "grid-cols": [{ "grid-cols": [Di] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Li, X] }, X] }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": [Di] }],
        "row-start-end": [{ row: ["auto", { span: [Li, X] }, X] }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", X] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", X] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...j()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...j(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...j(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t] }],
        "min-w": [{ "min-w": [X, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              X,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Fn] },
              Fn,
            ],
          },
        ],
        h: [{ h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [X, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Fn, Vn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ku,
            ],
          },
        ],
        "font-family": [{ font: [Di] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              X,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", _s, Ku] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              pn,
              X,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", X] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", X] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", pn, Vn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", pn, X] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: V() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              X,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", X] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...q(), GC] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", QC] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              qC,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [b] }],
        "gradient-via-pos": [{ via: [b] }],
        "gradient-to-pos": [{ to: [b] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...H(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: H() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...H()] }],
        "outline-offset": [{ "outline-offset": [pn, X] }],
        "outline-w": [{ outline: [pn, Vn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: K() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [pn, Vn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Fn, ZC] }],
        "shadow-color": [{ shadow: [Di] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...$(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": $() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Fn, X] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              X,
            ],
          },
        ],
        duration: [{ duration: Y() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", X] }],
        delay: [{ delay: Y() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", X] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [Li, X] }],
        "translate-x": [{ "translate-x": [P] }],
        "translate-y": [{ "translate-y": [P] }],
        "skew-x": [{ "skew-x": [T] }],
        "skew-y": [{ "skew-y": [T] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              X,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              X,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": V() }],
        "scroll-mx": [{ "scroll-mx": V() }],
        "scroll-my": [{ "scroll-my": V() }],
        "scroll-ms": [{ "scroll-ms": V() }],
        "scroll-me": [{ "scroll-me": V() }],
        "scroll-mt": [{ "scroll-mt": V() }],
        "scroll-mr": [{ "scroll-mr": V() }],
        "scroll-mb": [{ "scroll-mb": V() }],
        "scroll-ml": [{ "scroll-ml": V() }],
        "scroll-p": [{ "scroll-p": V() }],
        "scroll-px": [{ "scroll-px": V() }],
        "scroll-py": [{ "scroll-py": V() }],
        "scroll-ps": [{ "scroll-ps": V() }],
        "scroll-pe": [{ "scroll-pe": V() }],
        "scroll-pt": [{ "scroll-pt": V() }],
        "scroll-pr": [{ "scroll-pr": V() }],
        "scroll-pb": [{ "scroll-pb": V() }],
        "scroll-pl": [{ "scroll-pl": V() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", X] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [pn, Vn, Ku] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  r3 = FC(n3);
function is(...e) {
  return r3(R1(e));
}
const s3 = sC,
  U1 = x.forwardRef(({ className: e, ...t }, n) =>
    d.jsx(C1, {
      ref: n,
      className: is(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
U1.displayName = C1.displayName;
const i3 = iC(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  W1 = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    d.jsx(E1, { ref: r, className: is(i3({ variant: t }), e), ...n }),
  );
W1.displayName = E1.displayName;
const o3 = x.forwardRef(({ className: e, ...t }, n) =>
  d.jsx(P1, {
    ref: n,
    className: is(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
o3.displayName = P1.displayName;
const H1 = x.forwardRef(({ className: e, ...t }, n) =>
  d.jsx(N1, {
    ref: n,
    className: is(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: d.jsx(I1, { className: "h-4 w-4" }),
  }),
);
H1.displayName = N1.displayName;
const K1 = x.forwardRef(({ className: e, ...t }, n) =>
  d.jsx(T1, { ref: n, className: is("text-sm font-semibold", e), ...t }),
);
K1.displayName = T1.displayName;
const Y1 = x.forwardRef(({ className: e, ...t }, n) =>
  d.jsx(k1, { ref: n, className: is("text-sm opacity-90", e), ...t }),
);
Y1.displayName = k1.displayName;
function a3() {
  const { toasts: e } = fS();
  return d.jsxs(s3, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: s, ...i }) {
        return d.jsxs(
          W1,
          {
            ...i,
            children: [
              d.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && d.jsx(K1, { children: n }),
                  r && d.jsx(Y1, { children: r }),
                ],
              }),
              s,
              d.jsx(H1, {}),
            ],
          },
          t,
        );
      }),
      d.jsx(U1, {}),
    ],
  });
}
var km = ["light", "dark"],
  l3 = "(prefers-color-scheme: dark)",
  u3 = x.createContext(void 0),
  c3 = { setTheme: (e) => {}, themes: [] },
  d3 = () => {
    var e;
    return (e = x.useContext(u3)) != null ? e : c3;
  };
x.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: s,
    defaultTheme: i,
    value: o,
    attrs: a,
    nonce: l,
  }) => {
    let u = i === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((b) => `'${b}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = s
        ? km.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      h = (b, y = !1, w = !0) => {
        let g = o ? o[b] : b,
          m = y ? b + "|| ''" : `'${g}'`,
          v = "";
        return (
          s &&
            w &&
            !y &&
            km.includes(b) &&
            (v += `d.style.colorScheme = '${b}';`),
          n === "class"
            ? y || g
              ? (v += `c.add(${m})`)
              : (v += "null")
            : g && (v += `d[s](n,${m})`),
          v
        );
      },
      p = e
        ? `!function(){${c}${h(e)}}()`
        : r
          ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${l3}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + h(i, !1, !1) + "}"}${f}}catch(e){}}()`
          : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", !0)}}else{${h(i, !1, !1)};}${f}}catch(t){}}();`;
    return x.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: p },
    });
  },
);
var f3 = (e) => {
    switch (e) {
      case "success":
        return m3;
      case "info":
        return y3;
      case "warning":
        return g3;
      case "error":
        return v3;
      default:
        return null;
    }
  },
  h3 = Array(12).fill(0),
  p3 = ({ visible: e, className: t }) =>
    D.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      D.createElement(
        "div",
        { className: "sonner-spinner" },
        h3.map((n, r) =>
          D.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  m3 = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  g3 = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  y3 = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  v3 = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  x3 = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    D.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    D.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  w3 = () => {
    let [e, t] = D.useState(document.hidden);
    return (
      D.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  fd = 1,
  b3 = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            s =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : fd++,
            i = this.toasts.find((a) => a.id === s),
            o = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === s
                    ? (this.publish({ ...a, ...e, id: s, title: n }),
                      { ...a, ...e, id: s, dismissible: o, title: n })
                    : a,
                ))
              : this.addToast({ title: n, ...r, dismissible: o, id: s }),
            s
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            s = n !== void 0,
            i,
            o = r
              .then(async (l) => {
                if (((i = ["resolve", l]), D.isValidElement(l)))
                  ((s = !1),
                    this.create({ id: n, type: "default", message: l }));
                else if (C3(l) && !l.ok) {
                  s = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  s = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((i = ["reject", l]), t.error !== void 0)) {
                  s = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                (s && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, u) =>
                o.then(() => (i[0] === "reject" ? u(i[1]) : l(i[1]))).catch(u),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || fd++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  Je = new b3(),
  S3 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || fd++;
    return (Je.addToast({ title: e, ...t, id: n }), n);
  },
  C3 = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  E3 = S3,
  T3 = () => Je.toasts,
  k3 = () => Je.getActiveToasts();
Object.assign(
  E3,
  {
    success: Je.success,
    info: Je.info,
    warning: Je.warning,
    error: Je.error,
    custom: Je.custom,
    message: Je.message,
    promise: Je.promise,
    dismiss: Je.dismiss,
    loading: Je.loading,
  },
  { getHistory: T3, getToasts: k3 },
);
function P3(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
P3(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function va(e) {
  return e.label !== void 0;
}
var N3 = 3,
  j3 = "32px",
  R3 = "16px",
  Pm = 4e3,
  M3 = 356,
  A3 = 14,
  L3 = 20,
  D3 = 200;
function Ot(...e) {
  return e.filter(Boolean).join(" ");
}
function O3(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var I3 = (e) => {
  var t, n, r, s, i, o, a, l, u, c, f;
  let {
      invert: h,
      toast: p,
      unstyled: b,
      interacting: y,
      setHeights: w,
      visibleToasts: g,
      heights: m,
      index: v,
      toasts: S,
      expanded: C,
      removeToast: T,
      defaultRichColors: k,
      closeButton: P,
      style: A,
      cancelButtonStyle: M,
      actionButtonStyle: z,
      className: V = "",
      descriptionClassName: K = "",
      duration: O,
      position: q,
      gap: H,
      loadingIcon: $,
      expandByDefault: j,
      classNames: R,
      icons: I,
      closeButtonAriaLabel: Y = "Close toast",
      pauseWhenPageIsHidden: B,
    } = e,
    [Z, ee] = D.useState(null),
    [Ee, _e] = D.useState(null),
    [se, os] = D.useState(!1),
    [Rn, Cr] = D.useState(!1),
    [Mn, as] = D.useState(!1),
    [An, Go] = D.useState(!1),
    [fu, Xo] = D.useState(!1),
    [hu, Ci] = D.useState(0),
    [ls, tp] = D.useState(0),
    Ei = D.useRef(p.duration || O || Pm),
    np = D.useRef(null),
    Er = D.useRef(null),
    k2 = v === 0,
    P2 = v + 1 <= g,
    wt = p.type,
    us = p.dismissible !== !1,
    N2 = p.className || "",
    j2 = p.descriptionClassName || "",
    qo = D.useMemo(
      () => m.findIndex((G) => G.toastId === p.id) || 0,
      [m, p.id],
    ),
    R2 = D.useMemo(() => {
      var G;
      return (G = p.closeButton) != null ? G : P;
    }, [p.closeButton, P]),
    rp = D.useMemo(() => p.duration || O || Pm, [p.duration, O]),
    pu = D.useRef(0),
    cs = D.useRef(0),
    sp = D.useRef(0),
    ds = D.useRef(null),
    [M2, A2] = q.split("-"),
    ip = D.useMemo(
      () => m.reduce((G, le, he) => (he >= qo ? G : G + le.height), 0),
      [m, qo],
    ),
    op = w3(),
    L2 = p.invert || h,
    mu = wt === "loading";
  ((cs.current = D.useMemo(() => qo * H + ip, [qo, ip])),
    D.useEffect(() => {
      Ei.current = rp;
    }, [rp]),
    D.useEffect(() => {
      os(!0);
    }, []),
    D.useEffect(() => {
      let G = Er.current;
      if (G) {
        let le = G.getBoundingClientRect().height;
        return (
          tp(le),
          w((he) => [
            { toastId: p.id, height: le, position: p.position },
            ...he,
          ]),
          () => w((he) => he.filter((Mt) => Mt.toastId !== p.id))
        );
      }
    }, [w, p.id]),
    D.useLayoutEffect(() => {
      if (!se) return;
      let G = Er.current,
        le = G.style.height;
      G.style.height = "auto";
      let he = G.getBoundingClientRect().height;
      ((G.style.height = le),
        tp(he),
        w((Mt) =>
          Mt.find((At) => At.toastId === p.id)
            ? Mt.map((At) => (At.toastId === p.id ? { ...At, height: he } : At))
            : [{ toastId: p.id, height: he, position: p.position }, ...Mt],
        ));
    }, [se, p.title, p.description, w, p.id]));
  let Ln = D.useCallback(() => {
    (Cr(!0),
      Ci(cs.current),
      w((G) => G.filter((le) => le.toastId !== p.id)),
      setTimeout(() => {
        T(p);
      }, D3));
  }, [p, T, w, cs]);
  (D.useEffect(() => {
    if (
      (p.promise && wt === "loading") ||
      p.duration === 1 / 0 ||
      p.type === "loading"
    )
      return;
    let G;
    return (
      C || y || (B && op)
        ? (() => {
            if (sp.current < pu.current) {
              let le = new Date().getTime() - pu.current;
              Ei.current = Ei.current - le;
            }
            sp.current = new Date().getTime();
          })()
        : Ei.current !== 1 / 0 &&
          ((pu.current = new Date().getTime()),
          (G = setTimeout(() => {
            var le;
            ((le = p.onAutoClose) == null || le.call(p, p), Ln());
          }, Ei.current))),
      () => clearTimeout(G)
    );
  }, [C, y, p, wt, B, op, Ln]),
    D.useEffect(() => {
      p.delete && Ln();
    }, [Ln, p.delete]));
  function D2() {
    var G, le, he;
    return I != null && I.loading
      ? D.createElement(
          "div",
          {
            className: Ot(
              R == null ? void 0 : R.loader,
              (G = p == null ? void 0 : p.classNames) == null
                ? void 0
                : G.loader,
              "sonner-loader",
            ),
            "data-visible": wt === "loading",
          },
          I.loading,
        )
      : $
        ? D.createElement(
            "div",
            {
              className: Ot(
                R == null ? void 0 : R.loader,
                (le = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : le.loader,
                "sonner-loader",
              ),
              "data-visible": wt === "loading",
            },
            $,
          )
        : D.createElement(p3, {
            className: Ot(
              R == null ? void 0 : R.loader,
              (he = p == null ? void 0 : p.classNames) == null
                ? void 0
                : he.loader,
            ),
            visible: wt === "loading",
          });
  }
  return D.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Er,
      className: Ot(
        V,
        N2,
        R == null ? void 0 : R.toast,
        (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast,
        R == null ? void 0 : R.default,
        R == null ? void 0 : R[wt],
        (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[wt],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = p.richColors) != null ? r : k,
      "data-styled": !(p.jsx || p.unstyled || b),
      "data-mounted": se,
      "data-promise": !!p.promise,
      "data-swiped": fu,
      "data-removed": Rn,
      "data-visible": P2,
      "data-y-position": M2,
      "data-x-position": A2,
      "data-index": v,
      "data-front": k2,
      "data-swiping": Mn,
      "data-dismissible": us,
      "data-type": wt,
      "data-invert": L2,
      "data-swipe-out": An,
      "data-swipe-direction": Ee,
      "data-expanded": !!(C || (j && se)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": S.length - v,
        "--offset": `${Rn ? hu : cs.current}px`,
        "--initial-height": j ? "auto" : `${ls}px`,
        ...A,
        ...p.style,
      },
      onDragEnd: () => {
        (as(!1), ee(null), (ds.current = null));
      },
      onPointerDown: (G) => {
        mu ||
          !us ||
          ((np.current = new Date()),
          Ci(cs.current),
          G.target.setPointerCapture(G.pointerId),
          G.target.tagName !== "BUTTON" &&
            (as(!0), (ds.current = { x: G.clientX, y: G.clientY })));
      },
      onPointerUp: () => {
        var G, le, he, Mt;
        if (An || !us) return;
        ds.current = null;
        let At = Number(
            ((G = Er.current) == null
              ? void 0
              : G.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          Dn = Number(
            ((le = Er.current) == null
              ? void 0
              : le.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          Tr =
            new Date().getTime() -
            ((he = np.current) == null ? void 0 : he.getTime()),
          Lt = Z === "x" ? At : Dn,
          On = Math.abs(Lt) / Tr;
        if (Math.abs(Lt) >= L3 || On > 0.11) {
          (Ci(cs.current),
            (Mt = p.onDismiss) == null || Mt.call(p, p),
            _e(
              Z === "x" ? (At > 0 ? "right" : "left") : Dn > 0 ? "down" : "up",
            ),
            Ln(),
            Go(!0),
            Xo(!1));
          return;
        }
        (as(!1), ee(null));
      },
      onPointerMove: (G) => {
        var le, he, Mt, At;
        if (
          !ds.current ||
          !us ||
          ((le = window.getSelection()) == null
            ? void 0
            : le.toString().length) > 0
        )
          return;
        let Dn = G.clientY - ds.current.y,
          Tr = G.clientX - ds.current.x,
          Lt = (he = e.swipeDirections) != null ? he : O3(q);
        !Z &&
          (Math.abs(Tr) > 1 || Math.abs(Dn) > 1) &&
          ee(Math.abs(Tr) > Math.abs(Dn) ? "x" : "y");
        let On = { x: 0, y: 0 };
        (Z === "y"
          ? (Lt.includes("top") || Lt.includes("bottom")) &&
            ((Lt.includes("top") && Dn < 0) ||
              (Lt.includes("bottom") && Dn > 0)) &&
            (On.y = Dn)
          : Z === "x" &&
            (Lt.includes("left") || Lt.includes("right")) &&
            ((Lt.includes("left") && Tr < 0) ||
              (Lt.includes("right") && Tr > 0)) &&
            (On.x = Tr),
          (Math.abs(On.x) > 0 || Math.abs(On.y) > 0) && Xo(!0),
          (Mt = Er.current) == null ||
            Mt.style.setProperty("--swipe-amount-x", `${On.x}px`),
          (At = Er.current) == null ||
            At.style.setProperty("--swipe-amount-y", `${On.y}px`));
      },
    },
    R2 && !p.jsx
      ? D.createElement(
          "button",
          {
            "aria-label": Y,
            "data-disabled": mu,
            "data-close-button": !0,
            onClick:
              mu || !us
                ? () => {}
                : () => {
                    var G;
                    (Ln(), (G = p.onDismiss) == null || G.call(p, p));
                  },
            className: Ot(
              R == null ? void 0 : R.closeButton,
              (s = p == null ? void 0 : p.classNames) == null
                ? void 0
                : s.closeButton,
            ),
          },
          (i = I == null ? void 0 : I.close) != null ? i : x3,
        )
      : null,
    p.jsx || x.isValidElement(p.title)
      ? p.jsx
        ? p.jsx
        : typeof p.title == "function"
          ? p.title()
          : p.title
      : D.createElement(
          D.Fragment,
          null,
          wt || p.icon || p.promise
            ? D.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Ot(
                    R == null ? void 0 : R.icon,
                    (o = p == null ? void 0 : p.classNames) == null
                      ? void 0
                      : o.icon,
                  ),
                },
                p.promise || (p.type === "loading" && !p.icon)
                  ? p.icon || D2()
                  : null,
                p.type !== "loading"
                  ? p.icon || (I == null ? void 0 : I[wt]) || f3(wt)
                  : null,
              )
            : null,
          D.createElement(
            "div",
            {
              "data-content": "",
              className: Ot(
                R == null ? void 0 : R.content,
                (a = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            D.createElement(
              "div",
              {
                "data-title": "",
                className: Ot(
                  R == null ? void 0 : R.title,
                  (l = p == null ? void 0 : p.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof p.title == "function" ? p.title() : p.title,
            ),
            p.description
              ? D.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Ot(
                      K,
                      j2,
                      R == null ? void 0 : R.description,
                      (u = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : u.description,
                    ),
                  },
                  typeof p.description == "function"
                    ? p.description()
                    : p.description,
                )
              : null,
          ),
          x.isValidElement(p.cancel)
            ? p.cancel
            : p.cancel && va(p.cancel)
              ? D.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: p.cancelButtonStyle || M,
                    onClick: (G) => {
                      var le, he;
                      va(p.cancel) &&
                        us &&
                        ((he = (le = p.cancel).onClick) == null ||
                          he.call(le, G),
                        Ln());
                    },
                    className: Ot(
                      R == null ? void 0 : R.cancelButton,
                      (c = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : c.cancelButton,
                    ),
                  },
                  p.cancel.label,
                )
              : null,
          x.isValidElement(p.action)
            ? p.action
            : p.action && va(p.action)
              ? D.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: p.actionButtonStyle || z,
                    onClick: (G) => {
                      var le, he;
                      va(p.action) &&
                        ((he = (le = p.action).onClick) == null ||
                          he.call(le, G),
                        !G.defaultPrevented && Ln());
                    },
                    className: Ot(
                      R == null ? void 0 : R.actionButton,
                      (f = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : f.actionButton,
                    ),
                  },
                  p.action.label,
                )
              : null,
        ),
  );
};
function Nm() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function V3(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, s) => {
      let i = s === 1,
        o = i ? "--mobile-offset" : "--offset",
        a = i ? R3 : j3;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((u) => {
              r[u] === void 0
                ? (n[`${o}-${u}`] = a)
                : (n[`${o}-${u}`] =
                    typeof r[u] == "number" ? `${r[u]}px` : r[u]);
            })
          : l(a);
    }),
    n
  );
}
var F3 = x.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: s = ["altKey", "KeyT"],
      expand: i,
      closeButton: o,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: f,
      duration: h,
      style: p,
      visibleToasts: b = N3,
      toastOptions: y,
      dir: w = Nm(),
      gap: g = A3,
      loadingIcon: m,
      icons: v,
      containerAriaLabel: S = "Notifications",
      pauseWhenPageIsHidden: C,
    } = e,
    [T, k] = D.useState([]),
    P = D.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(T.filter((B) => B.position).map((B) => B.position)),
          ),
        ),
      [T, r],
    ),
    [A, M] = D.useState([]),
    [z, V] = D.useState(!1),
    [K, O] = D.useState(!1),
    [q, H] = D.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    $ = D.useRef(null),
    j = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    R = D.useRef(null),
    I = D.useRef(!1),
    Y = D.useCallback((B) => {
      k((Z) => {
        var ee;
        return (
          ((ee = Z.find((Ee) => Ee.id === B.id)) != null && ee.delete) ||
            Je.dismiss(B.id),
          Z.filter(({ id: Ee }) => Ee !== B.id)
        );
      });
    }, []);
  return (
    D.useEffect(
      () =>
        Je.subscribe((B) => {
          if (B.dismiss) {
            k((Z) =>
              Z.map((ee) => (ee.id === B.id ? { ...ee, delete: !0 } : ee)),
            );
            return;
          }
          setTimeout(() => {
            t1.flushSync(() => {
              k((Z) => {
                let ee = Z.findIndex((Ee) => Ee.id === B.id);
                return ee !== -1
                  ? [...Z.slice(0, ee), { ...Z[ee], ...B }, ...Z.slice(ee + 1)]
                  : [B, ...Z];
              });
            });
          });
        }),
      [],
    ),
    D.useEffect(() => {
      if (c !== "system") {
        H(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? H("dark")
            : H("light")),
        typeof window > "u")
      )
        return;
      let B = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        B.addEventListener("change", ({ matches: Z }) => {
          H(Z ? "dark" : "light");
        });
      } catch {
        B.addListener(({ matches: ee }) => {
          try {
            H(ee ? "dark" : "light");
          } catch (Ee) {
            console.error(Ee);
          }
        });
      }
    }, [c]),
    D.useEffect(() => {
      T.length <= 1 && V(!1);
    }, [T]),
    D.useEffect(() => {
      let B = (Z) => {
        var ee, Ee;
        (s.every((_e) => Z[_e] || Z.code === _e) &&
          (V(!0), (ee = $.current) == null || ee.focus()),
          Z.code === "Escape" &&
            (document.activeElement === $.current ||
              ((Ee = $.current) != null &&
                Ee.contains(document.activeElement))) &&
            V(!1));
      };
      return (
        document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
      );
    }, [s]),
    D.useEffect(() => {
      if ($.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
            (R.current = null),
            (I.current = !1));
        };
    }, [$.current]),
    D.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${S} ${j}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      P.map((B, Z) => {
        var ee;
        let [Ee, _e] = B.split("-");
        return T.length
          ? D.createElement(
              "ol",
              {
                key: B,
                dir: w === "auto" ? Nm() : w,
                tabIndex: -1,
                ref: $,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": q,
                "data-y-position": Ee,
                "data-lifted": z && T.length > 1 && !i,
                "data-x-position": _e,
                style: {
                  "--front-toast-height": `${((ee = A[0]) == null ? void 0 : ee.height) || 0}px`,
                  "--width": `${M3}px`,
                  "--gap": `${g}px`,
                  ...p,
                  ...V3(l, u),
                },
                onBlur: (se) => {
                  I.current &&
                    !se.currentTarget.contains(se.relatedTarget) &&
                    ((I.current = !1),
                    R.current &&
                      (R.current.focus({ preventScroll: !0 }),
                      (R.current = null)));
                },
                onFocus: (se) => {
                  (se.target instanceof HTMLElement &&
                    se.target.dataset.dismissible === "false") ||
                    I.current ||
                    ((I.current = !0), (R.current = se.relatedTarget));
                },
                onMouseEnter: () => V(!0),
                onMouseMove: () => V(!0),
                onMouseLeave: () => {
                  K || V(!1);
                },
                onDragEnd: () => V(!1),
                onPointerDown: (se) => {
                  (se.target instanceof HTMLElement &&
                    se.target.dataset.dismissible === "false") ||
                    O(!0);
                },
                onPointerUp: () => O(!1),
              },
              T.filter(
                (se) => (!se.position && Z === 0) || se.position === B,
              ).map((se, os) => {
                var Rn, Cr;
                return D.createElement(I3, {
                  key: se.id,
                  icons: v,
                  index: os,
                  toast: se,
                  defaultRichColors: f,
                  duration:
                    (Rn = y == null ? void 0 : y.duration) != null ? Rn : h,
                  className: y == null ? void 0 : y.className,
                  descriptionClassName:
                    y == null ? void 0 : y.descriptionClassName,
                  invert: n,
                  visibleToasts: b,
                  closeButton:
                    (Cr = y == null ? void 0 : y.closeButton) != null ? Cr : o,
                  interacting: K,
                  position: B,
                  style: y == null ? void 0 : y.style,
                  unstyled: y == null ? void 0 : y.unstyled,
                  classNames: y == null ? void 0 : y.classNames,
                  cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                  actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                  removeToast: Y,
                  toasts: T.filter((Mn) => Mn.position == se.position),
                  heights: A.filter((Mn) => Mn.position == se.position),
                  setHeights: M,
                  expandByDefault: i,
                  gap: g,
                  loadingIcon: m,
                  expanded: z,
                  pauseWhenPageIsHidden: C,
                  swipeDirections: e.swipeDirections,
                });
              }),
            )
          : null;
      }),
    )
  );
});
const _3 = ({ ...e }) => {
    const { theme: t = "system" } = d3();
    return d.jsx(F3, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  z3 = ["top", "right", "bottom", "left"],
  gr = Math.min,
  ht = Math.max,
  xl = Math.round,
  xa = Math.floor,
  ln = (e) => ({ x: e, y: e }),
  $3 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  B3 = { start: "end", end: "start" };
function hd(e, t, n) {
  return ht(e, gr(t, n));
}
function kn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pn(e) {
  return e.split("-")[0];
}
function yi(e) {
  return e.split("-")[1];
}
function oh(e) {
  return e === "x" ? "y" : "x";
}
function ah(e) {
  return e === "y" ? "height" : "width";
}
const U3 = new Set(["top", "bottom"]);
function sn(e) {
  return U3.has(Pn(e)) ? "y" : "x";
}
function lh(e) {
  return oh(sn(e));
}
function W3(e, t, n) {
  n === void 0 && (n = !1);
  const r = yi(e),
    s = lh(e),
    i = ah(s);
  let o =
    s === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[i] > t.floating[i] && (o = wl(o)), [o, wl(o)]);
}
function H3(e) {
  const t = wl(e);
  return [pd(e), t, pd(t)];
}
function pd(e) {
  return e.replace(/start|end/g, (t) => B3[t]);
}
const jm = ["left", "right"],
  Rm = ["right", "left"],
  K3 = ["top", "bottom"],
  Y3 = ["bottom", "top"];
function Q3(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Rm : jm) : t ? jm : Rm;
    case "left":
    case "right":
      return t ? K3 : Y3;
    default:
      return [];
  }
}
function G3(e, t, n, r) {
  const s = yi(e);
  let i = Q3(Pn(e), n === "start", r);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(pd)))),
    i
  );
}
function wl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $3[t]);
}
function X3(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Q1(e) {
  return typeof e != "number"
    ? X3(e)
    : { top: e, right: e, bottom: e, left: e };
}
function bl(e) {
  const { x: t, y: n, width: r, height: s } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n,
  };
}
function Mm(e, t, n) {
  let { reference: r, floating: s } = e;
  const i = sn(t),
    o = lh(t),
    a = ah(o),
    l = Pn(t),
    u = i === "y",
    c = r.x + r.width / 2 - s.width / 2,
    f = r.y + r.height / 2 - s.height / 2,
    h = r[a] / 2 - s[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = { x: c, y: r.y - s.height };
      break;
    case "bottom":
      p = { x: c, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: f };
      break;
    case "left":
      p = { x: r.x - s.width, y: f };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (yi(t)) {
    case "start":
      p[o] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      p[o] += h * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const q3 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    a = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: c, y: f } = Mm(u, r, l),
    h = r,
    p = {},
    b = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: w, fn: g } = a[y],
      {
        x: m,
        y: v,
        data: S,
        reset: C,
      } = await g({
        x: c,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: s,
        middlewareData: p,
        rects: u,
        platform: o,
        elements: { reference: e, floating: t },
      });
    ((c = m ?? c),
      (f = v ?? f),
      (p = { ...p, [w]: { ...p[w], ...S } }),
      C &&
        b <= 50 &&
        (b++,
        typeof C == "object" &&
          (C.placement && (h = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : C.rects),
          ({ x: c, y: f } = Mm(u, h, l))),
        (y = -1)));
  }
  return { x: c, y: f, placement: h, strategy: s, middlewareData: p };
};
async function So(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: s, platform: i, rects: o, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: p = 0,
    } = kn(t, e),
    b = Q1(p),
    w = a[h ? (f === "floating" ? "reference" : "floating") : f],
    g = bl(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      }),
    ),
    m =
      f === "floating"
        ? { x: r, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    v = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(v)))
      ? (await (i.getScale == null ? void 0 : i.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = bl(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: v,
            strategy: l,
          })
        : m,
    );
  return {
    top: (g.top - C.top + b.top) / S.y,
    bottom: (C.bottom - g.bottom + b.bottom) / S.y,
    left: (g.left - C.left + b.left) / S.x,
    right: (C.right - g.right + b.right) / S.x,
  };
}
const Z3 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: s,
          rects: i,
          platform: o,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = kn(e, t) || {};
      if (u == null) return {};
      const f = Q1(c),
        h = { x: n, y: r },
        p = lh(s),
        b = ah(p),
        y = await o.getDimensions(u),
        w = p === "y",
        g = w ? "top" : "left",
        m = w ? "bottom" : "right",
        v = w ? "clientHeight" : "clientWidth",
        S = i.reference[b] + i.reference[p] - h[p] - i.floating[b],
        C = h[p] - i.reference[p],
        T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let k = T ? T[v] : 0;
      (!k || !(await (o.isElement == null ? void 0 : o.isElement(T)))) &&
        (k = a.floating[v] || i.floating[b]);
      const P = S / 2 - C / 2,
        A = k / 2 - y[b] / 2 - 1,
        M = gr(f[g], A),
        z = gr(f[m], A),
        V = M,
        K = k - y[b] - z,
        O = k / 2 - y[b] / 2 + P,
        q = hd(V, O, K),
        H =
          !l.arrow &&
          yi(s) != null &&
          O !== q &&
          i.reference[b] / 2 - (O < V ? M : z) - y[b] / 2 < 0,
        $ = H ? (O < V ? O - V : O - K) : 0;
      return {
        [p]: h[p] + $,
        data: {
          [p]: q,
          centerOffset: O - q - $,
          ...(H && { alignmentOffset: $ }),
        },
        reset: H,
      };
    },
  }),
  J3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: s,
              middlewareData: i,
              rects: o,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: b = "none",
              flipAlignment: y = !0,
              ...w
            } = kn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const g = Pn(s),
            m = sn(a),
            v = Pn(a) === a,
            S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            C = h || (v || !y ? [wl(a)] : H3(a)),
            T = b !== "none";
          !h && T && C.push(...G3(a, y, b, S));
          const k = [a, ...C],
            P = await So(t, w),
            A = [];
          let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && A.push(P[g]), f)) {
            const O = W3(s, o, S);
            A.push(P[O[0]], P[O[1]]);
          }
          if (
            ((M = [...M, { placement: s, overflows: A }]),
            !A.every((O) => O <= 0))
          ) {
            var z, V;
            const O = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
              q = k[O];
            if (
              q &&
              (!(f === "alignment" ? m !== sn(q) : !1) ||
                M.every((j) => j.overflows[0] > 0 && sn(j.placement) === m))
            )
              return {
                data: { index: O, overflows: M },
                reset: { placement: q },
              };
            let H =
              (V = M.filter(($) => $.overflows[0] <= 0).sort(
                ($, j) => $.overflows[1] - j.overflows[1],
              )[0]) == null
                ? void 0
                : V.placement;
            if (!H)
              switch (p) {
                case "bestFit": {
                  var K;
                  const $ =
                    (K = M.filter((j) => {
                      if (T) {
                        const R = sn(j.placement);
                        return R === m || R === "y";
                      }
                      return !0;
                    })
                      .map((j) => [
                        j.placement,
                        j.overflows
                          .filter((R) => R > 0)
                          .reduce((R, I) => R + I, 0),
                      ])
                      .sort((j, R) => j[1] - R[1])[0]) == null
                      ? void 0
                      : K[0];
                  $ && (H = $);
                  break;
                }
                case "initialPlacement":
                  H = a;
                  break;
              }
            if (s !== H) return { reset: { placement: H } };
          }
          return {};
        },
      }
    );
  };
function Am(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Lm(e) {
  return z3.some((t) => e[t] >= 0);
}
const eE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...s } = kn(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await So(t, { ...s, elementContext: "reference" }),
                o = Am(i, n.reference);
              return {
                data: { referenceHiddenOffsets: o, referenceHidden: Lm(o) },
              };
            }
            case "escaped": {
              const i = await So(t, { ...s, altBoundary: !0 }),
                o = Am(i, n.floating);
              return { data: { escapedOffsets: o, escaped: Lm(o) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  G1 = new Set(["left", "top"]);
async function tE(e, t) {
  const { placement: n, platform: r, elements: s } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    o = Pn(n),
    a = yi(n),
    l = sn(n) === "y",
    u = G1.has(o) ? -1 : 1,
    c = i && l ? -1 : 1,
    f = kn(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: b,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    a && typeof b == "number" && (p = a === "end" ? b * -1 : b),
    l ? { x: p * c, y: h * u } : { x: h * u, y: p * c }
  );
}
const nE = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            l = await tE(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  rE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: s } = t,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (w) => {
                  let { x: g, y: m } = w;
                  return { x: g, y: m };
                },
              },
              ...l
            } = kn(e, t),
            u = { x: n, y: r },
            c = await So(t, l),
            f = sn(Pn(s)),
            h = oh(f);
          let p = u[h],
            b = u[f];
          if (i) {
            const w = h === "y" ? "top" : "left",
              g = h === "y" ? "bottom" : "right",
              m = p + c[w],
              v = p - c[g];
            p = hd(m, p, v);
          }
          if (o) {
            const w = f === "y" ? "top" : "left",
              g = f === "y" ? "bottom" : "right",
              m = b + c[w],
              v = b - c[g];
            b = hd(m, b, v);
          }
          const y = a.fn({ ...t, [h]: p, [f]: b });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [h]: i, [f]: o } },
          };
        },
      }
    );
  },
  sE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = kn(e, t),
            c = { x: n, y: r },
            f = sn(s),
            h = oh(f);
          let p = c[h],
            b = c[f];
          const y = kn(a, t),
            w =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (l) {
            const v = h === "y" ? "height" : "width",
              S = i.reference[h] - i.floating[v] + w.mainAxis,
              C = i.reference[h] + i.reference[v] - w.mainAxis;
            p < S ? (p = S) : p > C && (p = C);
          }
          if (u) {
            var g, m;
            const v = h === "y" ? "width" : "height",
              S = G1.has(Pn(s)),
              C =
                i.reference[f] -
                i.floating[v] +
                ((S && ((g = o.offset) == null ? void 0 : g[f])) || 0) +
                (S ? 0 : w.crossAxis),
              T =
                i.reference[f] +
                i.reference[v] +
                (S ? 0 : ((m = o.offset) == null ? void 0 : m[f]) || 0) -
                (S ? w.crossAxis : 0);
            b < C ? (b = C) : b > T && (b = T);
          }
          return { [h]: p, [f]: b };
        },
      }
    );
  },
  iE = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: l = () => {}, ...u } = kn(e, t),
            c = await So(t, u),
            f = Pn(s),
            h = yi(s),
            p = sn(s) === "y",
            { width: b, height: y } = i.floating;
          let w, g;
          f === "top" || f === "bottom"
            ? ((w = f),
              (g =
                h ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = f), (w = h === "end" ? "top" : "bottom"));
          const m = y - c.top - c.bottom,
            v = b - c.left - c.right,
            S = gr(y - c[w], m),
            C = gr(b - c[g], v),
            T = !t.middlewareData.shift;
          let k = S,
            P = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (P = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = m),
            T && !h)
          ) {
            const M = ht(c.left, 0),
              z = ht(c.right, 0),
              V = ht(c.top, 0),
              K = ht(c.bottom, 0);
            p
              ? (P = b - 2 * (M !== 0 || z !== 0 ? M + z : ht(c.left, c.right)))
              : (k =
                  y - 2 * (V !== 0 || K !== 0 ? V + K : ht(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: P, availableHeight: k });
          const A = await o.getDimensions(a.floating);
          return b !== A.width || y !== A.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Zl() {
  return typeof window < "u";
}
function vi(e) {
  return X1(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function gt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function hn(e) {
  var t;
  return (t = (X1(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function X1(e) {
  return Zl() ? e instanceof Node || e instanceof gt(e).Node : !1;
}
function Qt(e) {
  return Zl() ? e instanceof Element || e instanceof gt(e).Element : !1;
}
function dn(e) {
  return Zl() ? e instanceof HTMLElement || e instanceof gt(e).HTMLElement : !1;
}
function Dm(e) {
  return !Zl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof gt(e).ShadowRoot;
}
const oE = new Set(["inline", "contents"]);
function $o(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: s } = Gt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !oE.has(s);
}
const aE = new Set(["table", "td", "th"]);
function lE(e) {
  return aE.has(vi(e));
}
const uE = [":popover-open", ":modal"];
function Jl(e) {
  return uE.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const cE = ["transform", "translate", "scale", "rotate", "perspective"],
  dE = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  fE = ["paint", "layout", "strict", "content"];
function uh(e) {
  const t = ch(),
    n = Qt(e) ? Gt(e) : e;
  return (
    cE.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    dE.some((r) => (n.willChange || "").includes(r)) ||
    fE.some((r) => (n.contain || "").includes(r))
  );
}
function hE(e) {
  let t = yr(e);
  for (; dn(t) && !li(t); ) {
    if (uh(t)) return t;
    if (Jl(t)) return null;
    t = yr(t);
  }
  return null;
}
function ch() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const pE = new Set(["html", "body", "#document"]);
function li(e) {
  return pE.has(vi(e));
}
function Gt(e) {
  return gt(e).getComputedStyle(e);
}
function eu(e) {
  return Qt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function yr(e) {
  if (vi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Dm(e) && e.host) || hn(e);
  return Dm(t) ? t.host : t;
}
function q1(e) {
  const t = yr(e);
  return li(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : dn(t) && $o(t)
      ? t
      : q1(t);
}
function Co(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const s = q1(e),
    i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = gt(s);
  if (i) {
    const a = md(o);
    return t.concat(
      o,
      o.visualViewport || [],
      $o(s) ? s : [],
      a && n ? Co(a) : [],
    );
  }
  return t.concat(s, Co(s, [], n));
}
function md(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Z1(e) {
  const t = Gt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const s = dn(e),
    i = s ? e.offsetWidth : n,
    o = s ? e.offsetHeight : r,
    a = xl(n) !== i || xl(r) !== o;
  return (a && ((n = i), (r = o)), { width: n, height: r, $: a });
}
function dh(e) {
  return Qt(e) ? e : e.contextElement;
}
function zs(e) {
  const t = dh(e);
  if (!dn(t)) return ln(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: s, $: i } = Z1(t);
  let o = (i ? xl(n.width) : n.width) / r,
    a = (i ? xl(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const mE = ln(0);
function J1(e) {
  const t = gt(e);
  return !ch() || !t.visualViewport
    ? mE
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function gE(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== gt(e)) ? !1 : t);
}
function ts(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const s = e.getBoundingClientRect(),
    i = dh(e);
  let o = ln(1);
  t && (r ? Qt(r) && (o = zs(r)) : (o = zs(e)));
  const a = gE(i, n, r) ? J1(i) : ln(0);
  let l = (s.left + a.x) / o.x,
    u = (s.top + a.y) / o.y,
    c = s.width / o.x,
    f = s.height / o.y;
  if (i) {
    const h = gt(i),
      p = r && Qt(r) ? gt(r) : r;
    let b = h,
      y = md(b);
    for (; y && r && p !== b; ) {
      const w = zs(y),
        g = y.getBoundingClientRect(),
        m = Gt(y),
        v = g.left + (y.clientLeft + parseFloat(m.paddingLeft)) * w.x,
        S = g.top + (y.clientTop + parseFloat(m.paddingTop)) * w.y;
      ((l *= w.x),
        (u *= w.y),
        (c *= w.x),
        (f *= w.y),
        (l += v),
        (u += S),
        (b = gt(y)),
        (y = md(b)));
    }
  }
  return bl({ width: c, height: f, x: l, y: u });
}
function fh(e, t) {
  const n = eu(e).scrollLeft;
  return t ? t.left + n : ts(hn(e)).left + n;
}
function ex(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    s = r.left + t.scrollLeft - (n ? 0 : fh(e, r)),
    i = r.top + t.scrollTop;
  return { x: s, y: i };
}
function yE(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
  const i = s === "fixed",
    o = hn(r),
    a = t ? Jl(t.floating) : !1;
  if (r === o || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = ln(1);
  const c = ln(0),
    f = dn(r);
  if (
    (f || (!f && !i)) &&
    ((vi(r) !== "body" || $o(o)) && (l = eu(r)), dn(r))
  ) {
    const p = ts(r);
    ((u = zs(r)), (c.x = p.x + r.clientLeft), (c.y = p.y + r.clientTop));
  }
  const h = o && !f && !i ? ex(o, l, !0) : ln(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + h.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + h.y,
  };
}
function vE(e) {
  return Array.from(e.getClientRects());
}
function xE(e) {
  const t = hn(e),
    n = eu(e),
    r = e.ownerDocument.body,
    s = ht(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = ht(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + fh(e);
  const a = -n.scrollTop;
  return (
    Gt(r).direction === "rtl" && (o += ht(t.clientWidth, r.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function wE(e, t) {
  const n = gt(e),
    r = hn(e),
    s = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    ((i = s.width), (o = s.height));
    const u = ch();
    (!u || (u && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: l };
}
const bE = new Set(["absolute", "fixed"]);
function SE(e, t) {
  const n = ts(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    i = dn(e) ? zs(e) : ln(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = s * i.x,
    u = r * i.y;
  return { width: o, height: a, x: l, y: u };
}
function Om(e, t, n) {
  let r;
  if (t === "viewport") r = wE(e, n);
  else if (t === "document") r = xE(hn(e));
  else if (Qt(t)) r = SE(t, n);
  else {
    const s = J1(e);
    r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return bl(r);
}
function tx(e, t) {
  const n = yr(e);
  return n === t || !Qt(n) || li(n)
    ? !1
    : Gt(n).position === "fixed" || tx(n, t);
}
function CE(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Co(e, [], !1).filter((a) => Qt(a) && vi(a) !== "body"),
    s = null;
  const i = Gt(e).position === "fixed";
  let o = i ? yr(e) : e;
  for (; Qt(o) && !li(o); ) {
    const a = Gt(o),
      l = uh(o);
    (!l && a.position === "fixed" && (s = null),
      (
        i
          ? !l && !s
          : (!l && a.position === "static" && !!s && bE.has(s.position)) ||
            ($o(o) && !l && tx(e, o))
      )
        ? (r = r.filter((c) => c !== o))
        : (s = a),
      (o = yr(o)));
  }
  return (t.set(e, r), r);
}
function EE(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? Jl(t)
          ? []
          : CE(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    l = o.reduce(
      (u, c) => {
        const f = Om(t, c, s);
        return (
          (u.top = ht(f.top, u.top)),
          (u.right = gr(f.right, u.right)),
          (u.bottom = gr(f.bottom, u.bottom)),
          (u.left = ht(f.left, u.left)),
          u
        );
      },
      Om(t, a, s),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function TE(e) {
  const { width: t, height: n } = Z1(e);
  return { width: t, height: n };
}
function kE(e, t, n) {
  const r = dn(t),
    s = hn(t),
    i = n === "fixed",
    o = ts(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = ln(0);
  function u() {
    l.x = fh(s);
  }
  if (r || (!r && !i))
    if (((vi(t) !== "body" || $o(s)) && (a = eu(t)), r)) {
      const p = ts(t, !0, i, t);
      ((l.x = p.x + t.clientLeft), (l.y = p.y + t.clientTop));
    } else s && u();
  i && !r && s && u();
  const c = s && !r && !i ? ex(s, a) : ln(0),
    f = o.left + a.scrollLeft - l.x - c.x,
    h = o.top + a.scrollTop - l.y - c.y;
  return { x: f, y: h, width: o.width, height: o.height };
}
function Yu(e) {
  return Gt(e).position === "static";
}
function Im(e, t) {
  if (!dn(e) || Gt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (hn(e) === n && (n = n.ownerDocument.body), n);
}
function nx(e, t) {
  const n = gt(e);
  if (Jl(e)) return n;
  if (!dn(e)) {
    let s = yr(e);
    for (; s && !li(s); ) {
      if (Qt(s) && !Yu(s)) return s;
      s = yr(s);
    }
    return n;
  }
  let r = Im(e, t);
  for (; r && lE(r) && Yu(r); ) r = Im(r, t);
  return r && li(r) && Yu(r) && !uh(r) ? n : r || hE(e) || n;
}
const PE = async function (e) {
  const t = this.getOffsetParent || nx,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: kE(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function NE(e) {
  return Gt(e).direction === "rtl";
}
const jE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: yE,
  getDocumentElement: hn,
  getClippingRect: EE,
  getOffsetParent: nx,
  getElementRects: PE,
  getClientRects: vE,
  getDimensions: TE,
  getScale: zs,
  isElement: Qt,
  isRTL: NE,
};
function rx(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function RE(e, t) {
  let n = null,
    r;
  const s = hn(e);
  function i() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function o(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), i());
    const u = e.getBoundingClientRect(),
      { left: c, top: f, width: h, height: p } = u;
    if ((a || t(), !h || !p)) return;
    const b = xa(f),
      y = xa(s.clientWidth - (c + h)),
      w = xa(s.clientHeight - (f + p)),
      g = xa(c),
      v = {
        rootMargin: -b + "px " + -y + "px " + -w + "px " + -g + "px",
        threshold: ht(0, gr(1, l)) || 1,
      };
    let S = !0;
    function C(T) {
      const k = T[0].intersectionRatio;
      if (k !== l) {
        if (!S) return o();
        k
          ? o(!1, k)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (k === 1 && !rx(u, e.getBoundingClientRect()) && o(), (S = !1));
    }
    try {
      n = new IntersectionObserver(C, { ...v, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, v);
    }
    n.observe(e);
  }
  return (o(!0), i);
}
function ME(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = dh(e),
    c = s || i ? [...(u ? Co(u) : []), ...Co(t)] : [];
  c.forEach((g) => {
    (s && g.addEventListener("scroll", n, { passive: !0 }),
      i && g.addEventListener("resize", n));
  });
  const f = u && a ? RE(u, n) : null;
  let h = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((g) => {
      let [m] = g;
      (m &&
        m.target === u &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var v;
          (v = p) == null || v.observe(t);
        }))),
        n());
    })),
    u && !l && p.observe(u),
    p.observe(t));
  let b,
    y = l ? ts(e) : null;
  l && w();
  function w() {
    const g = ts(e);
    (y && !rx(y, g) && n(), (y = g), (b = requestAnimationFrame(w)));
  }
  return (
    n(),
    () => {
      var g;
      (c.forEach((m) => {
        (s && m.removeEventListener("scroll", n),
          i && m.removeEventListener("resize", n));
      }),
        f == null || f(),
        (g = p) == null || g.disconnect(),
        (p = null),
        l && cancelAnimationFrame(b));
    }
  );
}
const AE = nE,
  LE = rE,
  DE = J3,
  OE = iE,
  IE = eE,
  Vm = Z3,
  VE = sE,
  FE = (e, t, n) => {
    const r = new Map(),
      s = { platform: jE, ...n },
      i = { ...s.platform, _c: r };
    return q3(e, t, { ...s, platform: i });
  };
var _E = typeof document < "u",
  zE = function () {},
  Ba = _E ? x.useLayoutEffect : zE;
function Sl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Sl(e[r], t[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !Sl(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function sx(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fm(e, t) {
  const n = sx(e);
  return Math.round(t * n) / n;
}
function Qu(e) {
  const t = x.useRef(e);
  return (
    Ba(() => {
      t.current = e;
    }),
    t
  );
}
function $E(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, f] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, p] = x.useState(r);
  Sl(h, r) || p(r);
  const [b, y] = x.useState(null),
    [w, g] = x.useState(null),
    m = x.useCallback((j) => {
      j !== T.current && ((T.current = j), y(j));
    }, []),
    v = x.useCallback((j) => {
      j !== k.current && ((k.current = j), g(j));
    }, []),
    S = i || b,
    C = o || w,
    T = x.useRef(null),
    k = x.useRef(null),
    P = x.useRef(c),
    A = l != null,
    M = Qu(l),
    z = Qu(s),
    V = Qu(u),
    K = x.useCallback(() => {
      if (!T.current || !k.current) return;
      const j = { placement: t, strategy: n, middleware: h };
      (z.current && (j.platform = z.current),
        FE(T.current, k.current, j).then((R) => {
          const I = { ...R, isPositioned: V.current !== !1 };
          O.current &&
            !Sl(P.current, I) &&
            ((P.current = I),
            _o.flushSync(() => {
              f(I);
            }));
        }));
    }, [h, t, n, z, V]);
  Ba(() => {
    u === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), f((j) => ({ ...j, isPositioned: !1 })));
  }, [u]);
  const O = x.useRef(!1);
  (Ba(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    [],
  ),
    Ba(() => {
      if ((S && (T.current = S), C && (k.current = C), S && C)) {
        if (M.current) return M.current(S, C, K);
        K();
      }
    }, [S, C, K, M, A]));
  const q = x.useMemo(
      () => ({ reference: T, floating: k, setReference: m, setFloating: v }),
      [m, v],
    ),
    H = x.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    $ = x.useMemo(() => {
      const j = { position: n, left: 0, top: 0 };
      if (!H.floating) return j;
      const R = Fm(H.floating, c.x),
        I = Fm(H.floating, c.y);
      return a
        ? {
            ...j,
            transform: "translate(" + R + "px, " + I + "px)",
            ...(sx(H.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: R, top: I };
    }, [n, a, H.floating, c.x, c.y]);
  return x.useMemo(
    () => ({ ...c, update: K, refs: q, elements: H, floatingStyles: $ }),
    [c, K, q, H, $],
  );
}
const BE = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: s } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Vm({ element: r.current, padding: s }).fn(n)
            : {}
          : r
            ? Vm({ element: r, padding: s }).fn(n)
            : {};
      },
    };
  },
  UE = (e, t) => ({ ...AE(e), options: [e, t] }),
  WE = (e, t) => ({ ...LE(e), options: [e, t] }),
  HE = (e, t) => ({ ...VE(e), options: [e, t] }),
  KE = (e, t) => ({ ...DE(e), options: [e, t] }),
  YE = (e, t) => ({ ...OE(e), options: [e, t] }),
  QE = (e, t) => ({ ...IE(e), options: [e, t] }),
  GE = (e, t) => ({ ...BE(e), options: [e, t] });
var XE = "Arrow",
  ix = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: s = 5, ...i } = e;
    return d.jsx(ut.svg, {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : d.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
ix.displayName = XE;
var qE = ix;
function ZE(e) {
  const [t, n] = x.useState(void 0);
  return (
    mr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            ((o = u.inlineSize), (a = u.blockSize));
          } else ((o = e.offsetWidth), (a = e.offsetHeight));
          n({ width: o, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var ox = "Popper",
  [ax, lx] = Gl(ox),
  [sA, ux] = ax(ox),
  cx = "PopperAnchor",
  dx = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e,
      i = ux(cx, n),
      o = x.useRef(null),
      a = Yt(t, o);
    return (
      x.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : d.jsx(ut.div, { ...s, ref: a })
    );
  });
dx.displayName = cx;
var hh = "PopperContent",
  [JE, eT] = ax(hh),
  fx = x.forwardRef((e, t) => {
    var se, os, Rn, Cr, Mn, as;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: f = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: p = "optimized",
        onPlaced: b,
        ...y
      } = e,
      w = ux(hh, n),
      [g, m] = x.useState(null),
      v = Yt(t, (An) => m(An)),
      [S, C] = x.useState(null),
      T = ZE(S),
      k = (T == null ? void 0 : T.width) ?? 0,
      P = (T == null ? void 0 : T.height) ?? 0,
      A = r + (i !== "center" ? "-" + i : ""),
      M =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      z = Array.isArray(u) ? u : [u],
      V = z.length > 0,
      K = { padding: M, boundary: z.filter(nT), altBoundary: V },
      {
        refs: O,
        floatingStyles: q,
        placement: H,
        isPositioned: $,
        middlewareData: j,
      } = $E({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...An) =>
          ME(...An, { animationFrame: p === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          UE({ mainAxis: s + P, alignmentAxis: o }),
          l &&
            WE({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? HE() : void 0,
              ...K,
            }),
          l && KE({ ...K }),
          YE({
            ...K,
            apply: ({
              elements: An,
              rects: Go,
              availableWidth: fu,
              availableHeight: Xo,
            }) => {
              const { width: hu, height: Ci } = Go.reference,
                ls = An.floating.style;
              (ls.setProperty("--radix-popper-available-width", `${fu}px`),
                ls.setProperty("--radix-popper-available-height", `${Xo}px`),
                ls.setProperty("--radix-popper-anchor-width", `${hu}px`),
                ls.setProperty("--radix-popper-anchor-height", `${Ci}px`));
            },
          }),
          S && GE({ element: S, padding: a }),
          rT({ arrowWidth: k, arrowHeight: P }),
          h && QE({ strategy: "referenceHidden", ...K }),
        ],
      }),
      [R, I] = mx(H),
      Y = pr(b);
    mr(() => {
      $ && (Y == null || Y());
    }, [$, Y]);
    const B = (se = j.arrow) == null ? void 0 : se.x,
      Z = (os = j.arrow) == null ? void 0 : os.y,
      ee = ((Rn = j.arrow) == null ? void 0 : Rn.centerOffset) !== 0,
      [Ee, _e] = x.useState();
    return (
      mr(() => {
        g && _e(window.getComputedStyle(g).zIndex);
      }, [g]),
      d.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...q,
          transform: $ ? q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ee,
          "--radix-popper-transform-origin": [
            (Cr = j.transformOrigin) == null ? void 0 : Cr.x,
            (Mn = j.transformOrigin) == null ? void 0 : Mn.y,
          ].join(" "),
          ...(((as = j.hide) == null ? void 0 : as.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: d.jsx(JE, {
          scope: n,
          placedSide: R,
          onArrowChange: C,
          arrowX: B,
          arrowY: Z,
          shouldHideArrow: ee,
          children: d.jsx(ut.div, {
            "data-side": R,
            "data-align": I,
            ...y,
            ref: v,
            style: { ...y.style, animation: $ ? void 0 : "none" },
          }),
        }),
      })
    );
  });
fx.displayName = hh;
var hx = "PopperArrow",
  tT = { top: "bottom", right: "left", bottom: "top", left: "right" },
  px = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...s } = t,
      i = eT(hx, r),
      o = tT[i.placedSide];
    return d.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: d.jsx(qE, {
        ...s,
        ref: n,
        style: { ...s.style, display: "block" },
      }),
    });
  });
px.displayName = hx;
function nT(e) {
  return e !== null;
}
var rT = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, g, m;
    const { placement: n, rects: r, middlewareData: s } = t,
      o = ((w = s.arrow) == null ? void 0 : w.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      l = o ? 0 : e.arrowHeight,
      [u, c] = mx(n),
      f = { start: "0%", center: "50%", end: "100%" }[c],
      h = (((g = s.arrow) == null ? void 0 : g.x) ?? 0) + a / 2,
      p = (((m = s.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
    let b = "",
      y = "";
    return (
      u === "bottom"
        ? ((b = o ? f : `${h}px`), (y = `${-l}px`))
        : u === "top"
          ? ((b = o ? f : `${h}px`), (y = `${r.floating.height + l}px`))
          : u === "right"
            ? ((b = `${-l}px`), (y = o ? f : `${p}px`))
            : u === "left" &&
              ((b = `${r.floating.width + l}px`), (y = o ? f : `${p}px`)),
      { data: { x: b, y } }
    );
  },
});
function mx(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var sT = dx,
  iT = fx,
  oT = px,
  [tu, iA] = Gl("Tooltip", [lx]),
  ph = lx(),
  gx = "TooltipProvider",
  aT = 700,
  _m = "tooltip.open",
  [lT, yx] = tu(gx),
  vx = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = aT,
        skipDelayDuration: r = 300,
        disableHoverableContent: s = !1,
        children: i,
      } = e,
      o = x.useRef(!0),
      a = x.useRef(!1),
      l = x.useRef(0);
    return (
      x.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      d.jsx(lT, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          (window.clearTimeout(l.current), (o.current = !1));
        }, []),
        onClose: x.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (o.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: x.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: s,
        children: i,
      })
    );
  };
vx.displayName = gx;
var xx = "Tooltip",
  [oA, nu] = tu(xx),
  gd = "TooltipTrigger",
  uT = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      s = nu(gd, n),
      i = yx(gd, n),
      o = ph(n),
      a = x.useRef(null),
      l = Yt(t, a, s.onTriggerChange),
      u = x.useRef(!1),
      c = x.useRef(!1),
      f = x.useCallback(() => (u.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f],
      ),
      d.jsx(sT, {
        asChild: !0,
        ...o,
        children: d.jsx(ut.button, {
          "aria-describedby": s.open ? s.contentId : void 0,
          "data-state": s.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: Re(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (s.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: Re(e.onPointerLeave, () => {
            (s.onTriggerLeave(), (c.current = !1));
          }),
          onPointerDown: Re(e.onPointerDown, () => {
            (s.open && s.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 }));
          }),
          onFocus: Re(e.onFocus, () => {
            u.current || s.onOpen();
          }),
          onBlur: Re(e.onBlur, s.onClose),
          onClick: Re(e.onClick, s.onClose),
        }),
      })
    );
  });
uT.displayName = gd;
var cT = "TooltipPortal",
  [aA, dT] = tu(cT, { forceMount: void 0 }),
  ui = "TooltipContent",
  wx = x.forwardRef((e, t) => {
    const n = dT(ui, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: s = "top", ...i } = e,
      o = nu(ui, e.__scopeTooltip);
    return d.jsx(eh, {
      present: r || o.open,
      children: o.disableHoverableContent
        ? d.jsx(bx, { side: s, ...i, ref: t })
        : d.jsx(fT, { side: s, ...i, ref: t }),
    });
  }),
  fT = x.forwardRef((e, t) => {
    const n = nu(ui, e.__scopeTooltip),
      r = yx(ui, e.__scopeTooltip),
      s = x.useRef(null),
      i = Yt(t, s),
      [o, a] = x.useState(null),
      { trigger: l, onClose: u } = n,
      c = s.current,
      { onPointerInTransitChange: f } = r,
      h = x.useCallback(() => {
        (a(null), f(!1));
      }, [f]),
      p = x.useCallback(
        (b, y) => {
          const w = b.currentTarget,
            g = { x: b.clientX, y: b.clientY },
            m = yT(g, w.getBoundingClientRect()),
            v = vT(g, m),
            S = xT(y.getBoundingClientRect()),
            C = bT([...v, ...S]);
          (a(C), f(!0));
        },
        [f],
      );
    return (
      x.useEffect(() => () => h(), [h]),
      x.useEffect(() => {
        if (l && c) {
          const b = (w) => p(w, c),
            y = (w) => p(w, l);
          return (
            l.addEventListener("pointerleave", b),
            c.addEventListener("pointerleave", y),
            () => {
              (l.removeEventListener("pointerleave", b),
                c.removeEventListener("pointerleave", y));
            }
          );
        }
      }, [l, c, p, h]),
      x.useEffect(() => {
        if (o) {
          const b = (y) => {
            const w = y.target,
              g = { x: y.clientX, y: y.clientY },
              m =
                (l == null ? void 0 : l.contains(w)) ||
                (c == null ? void 0 : c.contains(w)),
              v = !wT(g, o);
            m ? h() : v && (h(), u());
          };
          return (
            document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
          );
        }
      }, [l, c, o, u, h]),
      d.jsx(bx, { ...e, ref: i })
    );
  }),
  [hT, pT] = tu(xx, { isInside: !1 }),
  mT = mS("TooltipContent"),
  bx = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": s,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        ...a
      } = e,
      l = nu(ui, n),
      u = ph(n),
      { onClose: c } = l;
    return (
      x.useEffect(
        () => (
          document.addEventListener(_m, c),
          () => document.removeEventListener(_m, c)
        ),
        [c],
      ),
      x.useEffect(() => {
        if (l.trigger) {
          const f = (h) => {
            const p = h.target;
            p != null && p.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      d.jsx(Jf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: c,
        children: d.jsxs(iT, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            d.jsx(mT, { children: r }),
            d.jsx(hT, {
              scope: n,
              isInside: !0,
              children: d.jsx(zS, {
                id: l.contentId,
                role: "tooltip",
                children: s || r,
              }),
            }),
          ],
        }),
      })
    );
  });
wx.displayName = ui;
var Sx = "TooltipArrow",
  gT = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      s = ph(n);
    return pT(Sx, n).isInside ? null : d.jsx(oT, { ...s, ...r, ref: t });
  });
gT.displayName = Sx;
function yT(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    s = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, s, i)) {
    case i:
      return "left";
    case s:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function vT(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function xT(e) {
  const { top: t, right: n, bottom: r, left: s } = e;
  return [
    { x: s, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: s, y: r },
  ];
}
function wT(e, t) {
  const { x: n, y: r } = e;
  let s = !1;
  for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
    const a = t[i],
      l = t[o],
      u = a.x,
      c = a.y,
      f = l.x,
      h = l.y;
    c > r != h > r && n < ((f - u) * (r - c)) / (h - c) + u && (s = !s);
  }
  return s;
}
function bT(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    ST(t)
  );
}
function ST(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        o = t[t.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) t.pop();
      else break;
    }
    t.push(s);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const s = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        o = n[n.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) n.pop();
      else break;
    }
    n.push(s);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var CT = vx,
  Cx = wx;
const ET = CT,
  TT = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    d.jsx(Cx, {
      ref: r,
      sideOffset: t,
      className: is(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
TT.displayName = Cx.displayName;
var Bo = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ns = typeof window > "u" || "Deno" in globalThis;
function et() {}
function kT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yd(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Ex(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function dr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zm(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== mh(o, t.options)) return !1;
    } else if (!To(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function $m(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Eo(t.options.mutationKey) !== Eo(i)) return !1;
    } else if (!To(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function mh(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Eo)(e);
}
function Eo(e) {
  return JSON.stringify(e, (t, n) =>
    xd(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n,
  );
}
function To(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => To(e[n], t[n]))
        : !1;
}
function Tx(e, t) {
  if (e === t) return e;
  const n = Bm(e) && Bm(t);
  if (n || (xd(e) && xd(t))) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      i = n ? t : Object.keys(t),
      o = i.length,
      a = n ? [] : {},
      l = new Set(r);
    let u = 0;
    for (let c = 0; c < o; c++) {
      const f = n ? c : i[c];
      ((!n && l.has(f)) || n) && e[f] === void 0 && t[f] === void 0
        ? ((a[f] = void 0), u++)
        : ((a[f] = Tx(e[f], t[f])), a[f] === e[f] && e[f] !== void 0 && u++);
    }
    return s === o && u === s ? e : a;
  }
  return t;
}
function vd(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Bm(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function xd(e) {
  if (!Um(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Um(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Um(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function PT(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function wd(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Tx(e, t)
      : t;
}
function NT(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function jT(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var gh = Symbol();
function kx(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === gh
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function RT(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var Vr,
  Kn,
  Us,
  Ag,
  MT =
    ((Ag = class extends Bo {
      constructor() {
        super();
        U(this, Vr);
        U(this, Kn);
        U(this, Us);
        _(this, Us, (t) => {
          if (!ns && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        E(this, Kn) || this.setEventListener(E(this, Us));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, Kn)) == null || t.call(this), _(this, Kn, void 0));
      }
      setEventListener(t) {
        var n;
        (_(this, Us, t),
          (n = E(this, Kn)) == null || n.call(this),
          _(
            this,
            Kn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        E(this, Vr) !== t && (_(this, Vr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof E(this, Vr) == "boolean"
          ? E(this, Vr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Vr = new WeakMap()),
    (Kn = new WeakMap()),
    (Us = new WeakMap()),
    Ag),
  yh = new MT(),
  Ws,
  Yn,
  Hs,
  Lg,
  AT =
    ((Lg = class extends Bo {
      constructor() {
        super();
        U(this, Ws, !0);
        U(this, Yn);
        U(this, Hs);
        _(this, Hs, (t) => {
          if (!ns && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        E(this, Yn) || this.setEventListener(E(this, Hs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, Yn)) == null || t.call(this), _(this, Yn, void 0));
      }
      setEventListener(t) {
        var n;
        (_(this, Hs, t),
          (n = E(this, Yn)) == null || n.call(this),
          _(this, Yn, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        E(this, Ws) !== t &&
          (_(this, Ws, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return E(this, Ws);
      }
    }),
    (Ws = new WeakMap()),
    (Yn = new WeakMap()),
    (Hs = new WeakMap()),
    Lg),
  Cl = new AT();
function bd() {
  let e, t;
  const n = new Promise((s, i) => {
    ((e = s), (t = i));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(s) {
    (Object.assign(n, s), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (s) => {
      (r({ status: "fulfilled", value: s }), e(s));
    }),
    (n.reject = (s) => {
      (r({ status: "rejected", reason: s }), t(s));
    }),
    n
  );
}
function LT(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Px(e) {
  return (e ?? "online") === "online" ? Cl.isOnline() : !0;
}
var Nx = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function Gu(e) {
  return e instanceof Nx;
}
function jx(e) {
  let t = !1,
    n = 0,
    r = !1,
    s;
  const i = bd(),
    o = (y) => {
      var w;
      r || (h(new Nx(y)), (w = e.abort) == null || w.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      yh.isFocused() &&
      (e.networkMode === "always" || Cl.isOnline()) &&
      e.canRun(),
    c = () => Px(e.networkMode) && e.canRun(),
    f = (y) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, y),
        s == null || s(),
        i.resolve(y));
    },
    h = (y) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, y),
        s == null || s(),
        i.reject(y));
    },
    p = () =>
      new Promise((y) => {
        var w;
        ((s = (g) => {
          (r || u()) && y(g);
        }),
          (w = e.onPause) == null || w.call(e));
      }).then(() => {
        var y;
        ((s = void 0), r || (y = e.onContinue) == null || y.call(e));
      }),
    b = () => {
      if (r) return;
      let y;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        y = w ?? e.fn();
      } catch (g) {
        y = Promise.reject(g);
      }
      Promise.resolve(y)
        .then(f)
        .catch((g) => {
          var T;
          if (r) return;
          const m = e.retry ?? (ns ? 0 : 3),
            v = e.retryDelay ?? LT,
            S = typeof v == "function" ? v(n, g) : v,
            C =
              m === !0 ||
              (typeof m == "number" && n < m) ||
              (typeof m == "function" && m(n, g));
          if (t || !C) {
            h(g);
            return;
          }
          (n++,
            (T = e.onFail) == null || T.call(e, n, g),
            PT(S)
              .then(() => (u() ? void 0 : p()))
              .then(() => {
                t ? h(g) : b();
              }));
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? b() : p().then(b), i),
  };
}
var DT = (e) => setTimeout(e, 0);
function OT() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    s = DT;
  const i = (a) => {
      t
        ? e.push(a)
        : s(() => {
            n(a);
          });
    },
    o = () => {
      const a = e;
      ((e = []),
        a.length &&
          s(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || o());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var Ie = OT(),
  Fr,
  Dg,
  Rx =
    ((Dg = class {
      constructor() {
        U(this, Fr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          yd(this.gcTime) &&
            _(
              this,
              Fr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (ns ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        E(this, Fr) && (clearTimeout(E(this, Fr)), _(this, Fr, void 0));
      }
    }),
    (Fr = new WeakMap()),
    Dg),
  Ks,
  _r,
  St,
  zr,
  Be,
  Ro,
  $r,
  _t,
  mn,
  Og,
  IT =
    ((Og = class extends Rx {
      constructor(t) {
        super();
        U(this, _t);
        U(this, Ks);
        U(this, _r);
        U(this, St);
        U(this, zr);
        U(this, Be);
        U(this, Ro);
        U(this, $r);
        (_(this, $r, !1),
          _(this, Ro, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          _(this, zr, t.client),
          _(this, St, E(this, zr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          _(this, Ks, VT(this.options)),
          (this.state = t.state ?? E(this, Ks)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = E(this, Be)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...E(this, Ro), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          E(this, St).remove(this);
      }
      setData(t, n) {
        const r = wd(this.state.data, t, this.options);
        return (
          te(this, _t, mn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        te(this, _t, mn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, s;
        const n = (r = E(this, Be)) == null ? void 0 : r.promise;
        return (
          (s = E(this, Be)) == null || s.cancel(t),
          n ? n.then(et).catch(et) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(E(this, Ks)));
      }
      isActive() {
        return this.observers.some((t) => Ct(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === gh ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => dr(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !Ex(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = E(this, Be)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = E(this, Be)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          E(this, St).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (E(this, Be) &&
              (E(this, $r)
                ? E(this, Be).cancel({ revert: !0 })
                : E(this, Be).cancelRetry()),
            this.scheduleGc()),
          E(this, St).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          te(this, _t, mn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, f;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (E(this, Be))
            return (E(this, Be).continueRetry(), E(this, Be).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const h = this.observers.find((p) => p.options.queryFn);
          h && this.setOptions(h.options);
        }
        const r = new AbortController(),
          s = (h) => {
            Object.defineProperty(h, "signal", {
              enumerable: !0,
              get: () => (_(this, $r, !0), r.signal),
            });
          },
          i = () => {
            const h = kx(this.options, n),
              b = (() => {
                const y = {
                  client: E(this, zr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (s(y), y);
              })();
            return (
              _(this, $r, !1),
              this.options.persister ? this.options.persister(h, b, this) : h(b)
            );
          },
          a = (() => {
            const h = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: E(this, zr),
              state: this.state,
              fetchFn: i,
            };
            return (s(h), h);
          })();
        ((u = this.options.behavior) == null || u.onFetch(a, this),
          _(this, _r, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            te(this, _t, mn).call(this, {
              type: "fetch",
              meta: (f = a.fetchOptions) == null ? void 0 : f.meta,
            }));
        const l = (h) => {
          var p, b, y, w;
          ((Gu(h) && h.silent) ||
            te(this, _t, mn).call(this, { type: "error", error: h }),
            Gu(h) ||
              ((b = (p = E(this, St).config).onError) == null ||
                b.call(p, h, this),
              (w = (y = E(this, St).config).onSettled) == null ||
                w.call(y, this.state.data, h, this)),
            this.scheduleGc());
        };
        return (
          _(
            this,
            Be,
            jx({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (h) => {
                var p, b, y, w;
                if (h === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(h);
                } catch (g) {
                  l(g);
                  return;
                }
                ((b = (p = E(this, St).config).onSuccess) == null ||
                  b.call(p, h, this),
                  (w = (y = E(this, St).config).onSettled) == null ||
                    w.call(y, h, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (h, p) => {
                te(this, _t, mn).call(this, {
                  type: "failed",
                  failureCount: h,
                  error: p,
                });
              },
              onPause: () => {
                te(this, _t, mn).call(this, { type: "pause" });
              },
              onContinue: () => {
                te(this, _t, mn).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          E(this, Be).start()
        );
      }
    }),
    (Ks = new WeakMap()),
    (_r = new WeakMap()),
    (St = new WeakMap()),
    (zr = new WeakMap()),
    (Be = new WeakMap()),
    (Ro = new WeakMap()),
    ($r = new WeakMap()),
    (_t = new WeakSet()),
    (mn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Mx(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              _(this, _r, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const s = t.error;
            return Gu(s) && s.revert && E(this, _r)
              ? { ...E(this, _r), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        Ie.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            E(this, St).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    Og);
function Mx(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Px(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function VT(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var en,
  Ig,
  FT =
    ((Ig = class extends Bo {
      constructor(t = {}) {
        super();
        U(this, en);
        ((this.config = t), _(this, en, new Map()));
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? mh(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new IT({
              client: t,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        E(this, en).has(t.queryHash) ||
          (E(this, en).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = E(this, en).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && E(this, en).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ie.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return E(this, en).get(t);
      }
      getAll() {
        return [...E(this, en).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => zm(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => zm(t, r)) : n;
      }
      notify(t) {
        Ie.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ie.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ie.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (en = new WeakMap()),
    Ig),
  tn,
  He,
  Br,
  nn,
  _n,
  Vg,
  _T =
    ((Vg = class extends Rx {
      constructor(t) {
        super();
        U(this, nn);
        U(this, tn);
        U(this, He);
        U(this, Br);
        ((this.mutationId = t.mutationId),
          _(this, He, t.mutationCache),
          _(this, tn, []),
          (this.state = t.state || zT()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        E(this, tn).includes(t) ||
          (E(this, tn).push(t),
          this.clearGcTimeout(),
          E(this, He).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (_(
          this,
          tn,
          E(this, tn).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          E(this, He).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        E(this, tn).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : E(this, He).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = E(this, Br)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, o, a, l, u, c, f, h, p, b, y, w, g, m, v, S, C, T, k, P;
        const n = () => {
          te(this, nn, _n).call(this, { type: "continue" });
        };
        _(
          this,
          Br,
          jx({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, M) => {
              te(this, nn, _n).call(this, {
                type: "failed",
                failureCount: A,
                error: M,
              });
            },
            onPause: () => {
              te(this, nn, _n).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => E(this, He).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          s = !E(this, Br).canStart();
        try {
          if (r) n();
          else {
            (te(this, nn, _n).call(this, {
              type: "pending",
              variables: t,
              isPaused: s,
            }),
              await ((o = (i = E(this, He).config).onMutate) == null
                ? void 0
                : o.call(i, t, this)));
            const M = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            M !== this.state.context &&
              te(this, nn, _n).call(this, {
                type: "pending",
                context: M,
                variables: t,
                isPaused: s,
              });
          }
          const A = await E(this, Br).start();
          return (
            await ((c = (u = E(this, He).config).onSuccess) == null
              ? void 0
              : c.call(u, A, t, this.state.context, this)),
            await ((h = (f = this.options).onSuccess) == null
              ? void 0
              : h.call(f, A, t, this.state.context)),
            await ((b = (p = E(this, He).config).onSettled) == null
              ? void 0
              : b.call(
                  p,
                  A,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((w = (y = this.options).onSettled) == null
              ? void 0
              : w.call(y, A, null, t, this.state.context)),
            te(this, nn, _n).call(this, { type: "success", data: A }),
            A
          );
        } catch (A) {
          try {
            throw (
              await ((m = (g = E(this, He).config).onError) == null
                ? void 0
                : m.call(g, A, t, this.state.context, this)),
              await ((S = (v = this.options).onError) == null
                ? void 0
                : S.call(v, A, t, this.state.context)),
              await ((T = (C = E(this, He).config).onSettled) == null
                ? void 0
                : T.call(
                    C,
                    void 0,
                    A,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((P = (k = this.options).onSettled) == null
                ? void 0
                : P.call(k, void 0, A, t, this.state.context)),
              A
            );
          } finally {
            te(this, nn, _n).call(this, { type: "error", error: A });
          }
        } finally {
          E(this, He).runNext(this);
        }
      }
    }),
    (tn = new WeakMap()),
    (He = new WeakMap()),
    (Br = new WeakMap()),
    (nn = new WeakSet()),
    (_n = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        Ie.batch(() => {
          (E(this, tn).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            E(this, He).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    Vg);
function zT() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var vn,
  zt,
  Mo,
  Fg,
  $T =
    ((Fg = class extends Bo {
      constructor(t = {}) {
        super();
        U(this, vn);
        U(this, zt);
        U(this, Mo);
        ((this.config = t),
          _(this, vn, new Set()),
          _(this, zt, new Map()),
          _(this, Mo, 0));
      }
      build(t, n, r) {
        const s = new _T({
          mutationCache: this,
          mutationId: ++Zo(this, Mo)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(s), s);
      }
      add(t) {
        E(this, vn).add(t);
        const n = wa(t);
        if (typeof n == "string") {
          const r = E(this, zt).get(n);
          r ? r.push(t) : E(this, zt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (E(this, vn).delete(t)) {
          const n = wa(t);
          if (typeof n == "string") {
            const r = E(this, zt).get(n);
            if (r)
              if (r.length > 1) {
                const s = r.indexOf(t);
                s !== -1 && r.splice(s, 1);
              } else r[0] === t && E(this, zt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = wa(t);
        if (typeof n == "string") {
          const r = E(this, zt).get(n),
            s =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = wa(t);
        if (typeof n == "string") {
          const s =
            (r = E(this, zt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ie.batch(() => {
          (E(this, vn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            E(this, vn).clear(),
            E(this, zt).clear());
        });
      }
      getAll() {
        return Array.from(E(this, vn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => $m(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => $m(t, n));
      }
      notify(t) {
        Ie.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ie.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(et))),
        );
      }
    }),
    (vn = new WeakMap()),
    (zt = new WeakMap()),
    (Mo = new WeakMap()),
    Fg);
function wa(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Wm(e) {
  return {
    onFetch: (t, n) => {
      var c, f, h, p, b;
      const r = t.options,
        s =
          (h =
            (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : h.direction,
        i = ((p = t.state.data) == null ? void 0 : p.pages) || [],
        o = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let y = !1;
        const w = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          g = kx(t.options, t.fetchOptions),
          m = async (v, S, C) => {
            if (y) return Promise.reject();
            if (S == null && v.pages.length) return Promise.resolve(v);
            const k = (() => {
                const z = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: S,
                  direction: C ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (w(z), z);
              })(),
              P = await g(k),
              { maxPages: A } = t.options,
              M = C ? jT : NT;
            return {
              pages: M(v.pages, P, A),
              pageParams: M(v.pageParams, S, A),
            };
          };
        if (s && i.length) {
          const v = s === "backward",
            S = v ? BT : Hm,
            C = { pages: i, pageParams: o },
            T = S(r, C);
          a = await m(C, T, v);
        } else {
          const v = e ?? i.length;
          do {
            const S = l === 0 ? (o[0] ?? r.initialPageParam) : Hm(r, a);
            if (l > 0 && S == null) break;
            ((a = await m(a, S)), l++);
          } while (l < v);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, w;
            return (w = (y = t.options).persister) == null
              ? void 0
              : w.call(
                  y,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Hm(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function BT(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var we,
  Qn,
  Gn,
  Ys,
  Qs,
  Xn,
  Gs,
  Xs,
  _g,
  UT =
    ((_g = class {
      constructor(e = {}) {
        U(this, we);
        U(this, Qn);
        U(this, Gn);
        U(this, Ys);
        U(this, Qs);
        U(this, Xn);
        U(this, Gs);
        U(this, Xs);
        (_(this, we, e.queryCache || new FT()),
          _(this, Qn, e.mutationCache || new $T()),
          _(this, Gn, e.defaultOptions || {}),
          _(this, Ys, new Map()),
          _(this, Qs, new Map()),
          _(this, Xn, 0));
      }
      mount() {
        (Zo(this, Xn)._++,
          E(this, Xn) === 1 &&
            (_(
              this,
              Gs,
              yh.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), E(this, we).onFocus());
              }),
            ),
            _(
              this,
              Xs,
              Cl.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), E(this, we).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (Zo(this, Xn)._--,
          E(this, Xn) === 0 &&
            ((e = E(this, Gs)) == null || e.call(this),
            _(this, Gs, void 0),
            (t = E(this, Xs)) == null || t.call(this),
            _(this, Xs, void 0)));
      }
      isFetching(e) {
        return E(this, we).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return E(this, Qn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = E(this, we).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = E(this, we).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(dr(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return E(this, we)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = E(this, we).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = kT(t, i);
        if (o !== void 0)
          return E(this, we)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ie.batch(() =>
          E(this, we)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = E(this, we).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = E(this, we);
        Ie.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = E(this, we);
        return Ie.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Ie.batch(() =>
            E(this, we)
              .findAll(e)
              .map((s) => s.cancel(n)),
          );
        return Promise.all(r).then(et).catch(et);
      }
      invalidateQueries(e, t = {}) {
        return Ie.batch(
          () => (
            E(this, we)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Ie.batch(() =>
            E(this, we)
              .findAll(e)
              .filter((s) => !s.isDisabled() && !s.isStatic())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(et)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(r).then(et);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = E(this, we).build(this, t);
        return n.isStaleByTime(dr(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(et).catch(et);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = Wm(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(et).catch(et);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = Wm(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Cl.isOnline()
          ? E(this, Qn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return E(this, we);
      }
      getMutationCache() {
        return E(this, Qn);
      }
      getDefaultOptions() {
        return E(this, Gn);
      }
      setDefaultOptions(e) {
        _(this, Gn, e);
      }
      setQueryDefaults(e, t) {
        E(this, Ys).set(Eo(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...E(this, Ys).values()],
          n = {};
        return (
          t.forEach((r) => {
            To(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        E(this, Qs).set(Eo(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...E(this, Qs).values()],
          n = {};
        return (
          t.forEach((r) => {
            To(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...E(this, Gn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = mh(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === gh && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...E(this, Gn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (E(this, we).clear(), E(this, Qn).clear());
      }
    }),
    (we = new WeakMap()),
    (Qn = new WeakMap()),
    (Gn = new WeakMap()),
    (Ys = new WeakMap()),
    (Qs = new WeakMap()),
    (Xn = new WeakMap()),
    (Gs = new WeakMap()),
    (Xs = new WeakMap()),
    _g),
  Ze,
  ne,
  Ao,
  Ke,
  Ur,
  qs,
  qn,
  Zn,
  Lo,
  Zs,
  Js,
  Wr,
  Hr,
  Jn,
  ei,
  oe,
  $i,
  Sd,
  Cd,
  Ed,
  Td,
  kd,
  Pd,
  Nd,
  Ax,
  zg,
  WT =
    ((zg = class extends Bo {
      constructor(t, n) {
        super();
        U(this, oe);
        U(this, Ze);
        U(this, ne);
        U(this, Ao);
        U(this, Ke);
        U(this, Ur);
        U(this, qs);
        U(this, qn);
        U(this, Zn);
        U(this, Lo);
        U(this, Zs);
        U(this, Js);
        U(this, Wr);
        U(this, Hr);
        U(this, Jn);
        U(this, ei, new Set());
        ((this.options = n),
          _(this, Ze, t),
          _(this, Zn, null),
          _(this, qn, bd()),
          this.options.experimental_prefetchInRender ||
            E(this, qn).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled",
              ),
            ),
          this.bindMethods(),
          this.setOptions(n));
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (E(this, ne).addObserver(this),
          Km(E(this, ne), this.options)
            ? te(this, oe, $i).call(this)
            : this.updateResult(),
          te(this, oe, Td).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return jd(E(this, ne), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return jd(E(this, ne), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        ((this.listeners = new Set()),
          te(this, oe, kd).call(this),
          te(this, oe, Pd).call(this),
          E(this, ne).removeObserver(this));
      }
      setOptions(t) {
        const n = this.options,
          r = E(this, ne);
        if (
          ((this.options = E(this, Ze).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof Ct(this.options.enabled, E(this, ne)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean",
          );
        (te(this, oe, Nd).call(this),
          E(this, ne).setOptions(this.options),
          n._defaulted &&
            !vd(this.options, n) &&
            E(this, Ze)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: E(this, ne),
                observer: this,
              }));
        const s = this.hasListeners();
        (s &&
          Ym(E(this, ne), r, this.options, n) &&
          te(this, oe, $i).call(this),
          this.updateResult(),
          s &&
            (E(this, ne) !== r ||
              Ct(this.options.enabled, E(this, ne)) !==
                Ct(n.enabled, E(this, ne)) ||
              dr(this.options.staleTime, E(this, ne)) !==
                dr(n.staleTime, E(this, ne))) &&
            te(this, oe, Sd).call(this));
        const i = te(this, oe, Cd).call(this);
        s &&
          (E(this, ne) !== r ||
            Ct(this.options.enabled, E(this, ne)) !==
              Ct(n.enabled, E(this, ne)) ||
            i !== E(this, Jn)) &&
          te(this, oe, Ed).call(this, i);
      }
      getOptimisticResult(t) {
        const n = E(this, Ze).getQueryCache().build(E(this, Ze), t),
          r = this.createResult(n, t);
        return (
          KT(this, r) &&
            (_(this, Ke, r),
            _(this, qs, this.options),
            _(this, Ur, E(this, ne).state)),
          r
        );
      }
      getCurrentResult() {
        return E(this, Ke);
      }
      trackResult(t, n) {
        return new Proxy(t, {
          get: (r, s) => (
            this.trackProp(s),
            n == null || n(s),
            Reflect.get(r, s)
          ),
        });
      }
      trackProp(t) {
        E(this, ei).add(t);
      }
      getCurrentQuery() {
        return E(this, ne);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = E(this, Ze).defaultQueryOptions(t),
          r = E(this, Ze).getQueryCache().build(E(this, Ze), n);
        return r.fetch().then(() => this.createResult(r, n));
      }
      fetch(t) {
        return te(this, oe, $i)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), E(this, Ke)));
      }
      createResult(t, n) {
        var A;
        const r = E(this, ne),
          s = this.options,
          i = E(this, Ke),
          o = E(this, Ur),
          a = E(this, qs),
          u = t !== r ? t.state : E(this, Ao),
          { state: c } = t;
        let f = { ...c },
          h = !1,
          p;
        if (n._optimisticResults) {
          const M = this.hasListeners(),
            z = !M && Km(t, n),
            V = M && Ym(t, r, n, s);
          ((z || V) && (f = { ...f, ...Mx(c.data, t.options) }),
            n._optimisticResults === "isRestoring" && (f.fetchStatus = "idle"));
        }
        let { error: b, errorUpdatedAt: y, status: w } = f;
        p = f.data;
        let g = !1;
        if (n.placeholderData !== void 0 && p === void 0 && w === "pending") {
          let M;
          (i != null &&
          i.isPlaceholderData &&
          n.placeholderData === (a == null ? void 0 : a.placeholderData)
            ? ((M = i.data), (g = !0))
            : (M =
                typeof n.placeholderData == "function"
                  ? n.placeholderData(
                      (A = E(this, Js)) == null ? void 0 : A.state.data,
                      E(this, Js),
                    )
                  : n.placeholderData),
            M !== void 0 &&
              ((w = "success"),
              (p = wd(i == null ? void 0 : i.data, M, n)),
              (h = !0)));
        }
        if (n.select && p !== void 0 && !g)
          if (
            i &&
            p === (o == null ? void 0 : o.data) &&
            n.select === E(this, Lo)
          )
            p = E(this, Zs);
          else
            try {
              (_(this, Lo, n.select),
                (p = n.select(p)),
                (p = wd(i == null ? void 0 : i.data, p, n)),
                _(this, Zs, p),
                _(this, Zn, null));
            } catch (M) {
              _(this, Zn, M);
            }
        E(this, Zn) &&
          ((b = E(this, Zn)),
          (p = E(this, Zs)),
          (y = Date.now()),
          (w = "error"));
        const m = f.fetchStatus === "fetching",
          v = w === "pending",
          S = w === "error",
          C = v && m,
          T = p !== void 0,
          P = {
            status: w,
            fetchStatus: f.fetchStatus,
            isPending: v,
            isSuccess: w === "success",
            isError: S,
            isInitialLoading: C,
            isLoading: C,
            data: p,
            dataUpdatedAt: f.dataUpdatedAt,
            error: b,
            errorUpdatedAt: y,
            failureCount: f.fetchFailureCount,
            failureReason: f.fetchFailureReason,
            errorUpdateCount: f.errorUpdateCount,
            isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
            isFetchedAfterMount:
              f.dataUpdateCount > u.dataUpdateCount ||
              f.errorUpdateCount > u.errorUpdateCount,
            isFetching: m,
            isRefetching: m && !v,
            isLoadingError: S && !T,
            isPaused: f.fetchStatus === "paused",
            isPlaceholderData: h,
            isRefetchError: S && T,
            isStale: vh(t, n),
            refetch: this.refetch,
            promise: E(this, qn),
            isEnabled: Ct(n.enabled, t) !== !1,
          };
        if (this.options.experimental_prefetchInRender) {
          const M = (K) => {
              P.status === "error"
                ? K.reject(P.error)
                : P.data !== void 0 && K.resolve(P.data);
            },
            z = () => {
              const K = _(this, qn, (P.promise = bd()));
              M(K);
            },
            V = E(this, qn);
          switch (V.status) {
            case "pending":
              t.queryHash === r.queryHash && M(V);
              break;
            case "fulfilled":
              (P.status === "error" || P.data !== V.value) && z();
              break;
            case "rejected":
              (P.status !== "error" || P.error !== V.reason) && z();
              break;
          }
        }
        return P;
      }
      updateResult() {
        const t = E(this, Ke),
          n = this.createResult(E(this, ne), this.options);
        if (
          (_(this, Ur, E(this, ne).state),
          _(this, qs, this.options),
          E(this, Ur).data !== void 0 && _(this, Js, E(this, ne)),
          vd(n, t))
        )
          return;
        _(this, Ke, n);
        const r = () => {
          if (!t) return !0;
          const { notifyOnChangeProps: s } = this.options,
            i = typeof s == "function" ? s() : s;
          if (i === "all" || (!i && !E(this, ei).size)) return !0;
          const o = new Set(i ?? E(this, ei));
          return (
            this.options.throwOnError && o.add("error"),
            Object.keys(E(this, Ke)).some((a) => {
              const l = a;
              return E(this, Ke)[l] !== t[l] && o.has(l);
            })
          );
        };
        te(this, oe, Ax).call(this, { listeners: r() });
      }
      onQueryUpdate() {
        (this.updateResult(),
          this.hasListeners() && te(this, oe, Td).call(this));
      }
    }),
    (Ze = new WeakMap()),
    (ne = new WeakMap()),
    (Ao = new WeakMap()),
    (Ke = new WeakMap()),
    (Ur = new WeakMap()),
    (qs = new WeakMap()),
    (qn = new WeakMap()),
    (Zn = new WeakMap()),
    (Lo = new WeakMap()),
    (Zs = new WeakMap()),
    (Js = new WeakMap()),
    (Wr = new WeakMap()),
    (Hr = new WeakMap()),
    (Jn = new WeakMap()),
    (ei = new WeakMap()),
    (oe = new WeakSet()),
    ($i = function (t) {
      te(this, oe, Nd).call(this);
      let n = E(this, ne).fetch(this.options, t);
      return ((t != null && t.throwOnError) || (n = n.catch(et)), n);
    }),
    (Sd = function () {
      te(this, oe, kd).call(this);
      const t = dr(this.options.staleTime, E(this, ne));
      if (ns || E(this, Ke).isStale || !yd(t)) return;
      const r = Ex(E(this, Ke).dataUpdatedAt, t) + 1;
      _(
        this,
        Wr,
        setTimeout(() => {
          E(this, Ke).isStale || this.updateResult();
        }, r),
      );
    }),
    (Cd = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(E(this, ne))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Ed = function (t) {
      (te(this, oe, Pd).call(this),
        _(this, Jn, t),
        !(
          ns ||
          Ct(this.options.enabled, E(this, ne)) === !1 ||
          !yd(E(this, Jn)) ||
          E(this, Jn) === 0
        ) &&
          _(
            this,
            Hr,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || yh.isFocused()) &&
                  te(this, oe, $i).call(this);
              },
              E(this, Jn),
            ),
          ));
    }),
    (Td = function () {
      (te(this, oe, Sd).call(this),
        te(this, oe, Ed).call(this, te(this, oe, Cd).call(this)));
    }),
    (kd = function () {
      E(this, Wr) && (clearTimeout(E(this, Wr)), _(this, Wr, void 0));
    }),
    (Pd = function () {
      E(this, Hr) && (clearInterval(E(this, Hr)), _(this, Hr, void 0));
    }),
    (Nd = function () {
      const t = E(this, Ze).getQueryCache().build(E(this, Ze), this.options);
      if (t === E(this, ne)) return;
      const n = E(this, ne);
      (_(this, ne, t),
        _(this, Ao, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this)));
    }),
    (Ax = function (t) {
      Ie.batch(() => {
        (t.listeners &&
          this.listeners.forEach((n) => {
            n(E(this, Ke));
          }),
          E(this, Ze)
            .getQueryCache()
            .notify({ query: E(this, ne), type: "observerResultsUpdated" }));
      });
    }),
    zg);
function HT(e, t) {
  return (
    Ct(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Km(e, t) {
  return HT(e, t) || (e.state.data !== void 0 && jd(e, t, t.refetchOnMount));
}
function jd(e, t, n) {
  if (Ct(t.enabled, e) !== !1 && dr(t.staleTime, e) !== "static") {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && vh(e, t));
  }
  return !1;
}
function Ym(e, t, n, r) {
  return (
    (e !== t || Ct(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    vh(e, n)
  );
}
function vh(e, t) {
  return Ct(t.enabled, e) !== !1 && e.isStaleByTime(dr(t.staleTime, e));
}
function KT(e, t) {
  return !vd(e.getCurrentResult(), t);
}
var Lx = x.createContext(void 0),
  YT = (e) => {
    const t = x.useContext(Lx);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  QT = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    d.jsx(Lx.Provider, { value: e, children: t })
  ),
  Dx = x.createContext(!1),
  GT = () => x.useContext(Dx);
Dx.Provider;
function XT() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var qT = x.createContext(XT()),
  ZT = () => x.useContext(qT),
  JT = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  ek = (e) => {
    x.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  tk = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: s,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((s && e.data === void 0) || RT(n, [e.error, r])),
  nk = (e) => {
    if (e.suspense) {
      const t = (r) => (r === "static" ? r : Math.max(r ?? 1e3, 1e3)),
        n = e.staleTime;
      ((e.staleTime = typeof n == "function" ? (...r) => t(n(...r)) : t(n)),
        typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
    }
  },
  rk = (e, t) => e.isLoading && e.isFetching && !t,
  sk = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  Qm = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function ik(e, t, n) {
  var f, h, p, b, y;
  const r = GT(),
    s = ZT(),
    i = YT(),
    o = i.defaultQueryOptions(e);
  ((h =
    (f = i.getDefaultOptions().queries) == null
      ? void 0
      : f._experimental_beforeQuery) == null || h.call(f, o),
    (o._optimisticResults = r ? "isRestoring" : "optimistic"),
    nk(o),
    JT(o, s),
    ek(s));
  const a = !i.getQueryCache().get(o.queryHash),
    [l] = x.useState(() => new t(i, o)),
    u = l.getOptimisticResult(o),
    c = !r && e.subscribed !== !1;
  if (
    (x.useSyncExternalStore(
      x.useCallback(
        (w) => {
          const g = c ? l.subscribe(Ie.batchCalls(w)) : et;
          return (l.updateResult(), g);
        },
        [l, c],
      ),
      () => l.getCurrentResult(),
      () => l.getCurrentResult(),
    ),
    x.useEffect(() => {
      l.setOptions(o);
    }, [o, l]),
    sk(o, u))
  )
    throw Qm(o, l, s);
  if (
    tk({
      result: u,
      errorResetBoundary: s,
      throwOnError: o.throwOnError,
      query: i.getQueryCache().get(o.queryHash),
      suspense: o.suspense,
    })
  )
    throw u.error;
  if (
    ((b =
      (p = i.getDefaultOptions().queries) == null
        ? void 0
        : p._experimental_afterQuery) == null || b.call(p, o, u),
    o.experimental_prefetchInRender && !ns && rk(u, r))
  ) {
    const w = a
      ? Qm(o, l, s)
      : (y = i.getQueryCache().get(o.queryHash)) == null
        ? void 0
        : y.promise;
    w == null ||
      w.catch(et).finally(() => {
        l.updateResult();
      });
  }
  return o.notifyOnChangeProps ? u : l.trackResult(u);
}
function ok(e, t) {
  return ik(e, WT);
}
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function El() {
  return (
    (El = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    El.apply(this, arguments)
  );
}
var nr;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(nr || (nr = {}));
const Gm = "popstate";
function ak(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: i, search: o, hash: a } = r.location;
    return Rd(
      "",
      { pathname: i, search: o, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : Ix(s);
  }
  return uk(t, n, null, e);
}
function lt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ox(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function lk() {
  return Math.random().toString(36).substr(2, 8);
}
function Xm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Rd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    El(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ru(t) : t,
      { state: n, key: (t && t.key) || r || lk() },
    )
  );
}
function Ix(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ru(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function uk(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = r,
    o = s.history,
    a = nr.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(El({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = nr.Pop;
    let w = c(),
      g = w == null ? null : w - u;
    ((u = w), l && l({ action: a, location: y.location, delta: g }));
  }
  function h(w, g) {
    a = nr.Push;
    let m = Rd(y.location, w, g);
    u = c() + 1;
    let v = Xm(m, u),
      S = y.createHref(m);
    try {
      o.pushState(v, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      s.location.assign(S);
    }
    i && l && l({ action: a, location: y.location, delta: 1 });
  }
  function p(w, g) {
    a = nr.Replace;
    let m = Rd(y.location, w, g);
    u = c();
    let v = Xm(m, u),
      S = y.createHref(m);
    (o.replaceState(v, "", S),
      i && l && l({ action: a, location: y.location, delta: 0 }));
  }
  function b(w) {
    let g = s.location.origin !== "null" ? s.location.origin : s.location.href,
      m = typeof w == "string" ? w : Ix(w);
    return (
      (m = m.replace(/ $/, "%20")),
      lt(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          m,
      ),
      new URL(m, g)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(s, o);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Gm, f),
        (l = w),
        () => {
          (s.removeEventListener(Gm, f), (l = null));
        }
      );
    },
    createHref(w) {
      return t(s, w);
    },
    createURL: b,
    encodeLocation(w) {
      let g = b(w);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: h,
    replace: p,
    go(w) {
      return o.go(w);
    },
  };
  return y;
}
var qm;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(qm || (qm = {}));
function ck(e, t, n) {
  return (n === void 0 && (n = "/"), dk(e, t, n, !1));
}
function dk(e, t, n, r) {
  let s = typeof t == "string" ? ru(t) : t,
    i = _x(s.pathname || "/", n);
  if (i == null) return null;
  let o = Vx(e);
  fk(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let u = Ck(i);
    a = bk(o[l], u, r);
  }
  return a;
}
function Vx(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let s = (i, o, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (lt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = $s([r, l.relativePath]),
      c = n.concat(l);
    (i.children &&
      i.children.length > 0 &&
      (lt(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Vx(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: xk(u, i.index), routesMeta: c }));
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) s(i, o);
      else for (let l of Fx(i.path)) s(i, o, l);
    }),
    t
  );
}
function Fx(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [i, ""] : [i];
  let o = Fx(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
    s && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function fk(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : wk(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const hk = /^:[\w-]+$/,
  pk = 3,
  mk = 2,
  gk = 1,
  yk = 10,
  vk = -2,
  Zm = (e) => e === "*";
function xk(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Zm) && (r += vk),
    t && (r += mk),
    n
      .filter((s) => !Zm(s))
      .reduce((s, i) => s + (hk.test(i) ? pk : i === "" ? gk : yk), r)
  );
}
function wk(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function bk(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    i = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      f = Jm(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      h = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Jm(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !f)
    )
      return null;
    (Object.assign(s, f.params),
      o.push({
        params: s,
        pathname: $s([i, f.pathname]),
        pathnameBase: Ek($s([i, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (i = $s([i, f.pathnameBase])));
  }
  return o;
}
function Jm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Sk(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: h, isOptional: p } = c;
      if (h === "*") {
        let y = a[f] || "";
        o = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const b = a[f];
      return (
        p && !b ? (u[h] = void 0) : (u[h] = (b || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Sk(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ox(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function Ck(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Ox(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function _x(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const $s = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ek = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Tk(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const zx = ["post", "put", "patch", "delete"];
new Set(zx);
const kk = ["get", ...zx];
new Set(kk);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Tl() {
  return (
    (Tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tl.apply(this, arguments)
  );
}
const Pk = x.createContext(null),
  Nk = x.createContext(null),
  $x = x.createContext(null),
  su = x.createContext(null),
  iu = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Bx = x.createContext(null);
function xh() {
  return x.useContext(su) != null;
}
function Ux() {
  return (xh() || lt(!1), x.useContext(su).location);
}
function jk(e, t) {
  return Rk(e, t);
}
function Rk(e, t, n, r) {
  xh() || lt(!1);
  let { navigator: s } = x.useContext($x),
    { matches: i } = x.useContext(iu),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Ux(),
    c;
  if (t) {
    var f;
    let w = typeof t == "string" ? ru(t) : t;
    (l === "/" || ((f = w.pathname) != null && f.startsWith(l)) || lt(!1),
      (c = w));
  } else c = u;
  let h = c.pathname || "/",
    p = h;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    p = "/" + h.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let b = ck(e, { pathname: p }),
    y = Ok(
      b &&
        b.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: $s([
              l,
              s.encodeLocation
                ? s.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : $s([
                    l,
                    s.encodeLocation
                      ? s.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && y
    ? x.createElement(
        su.Provider,
        {
          value: {
            location: Tl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: nr.Pop,
          },
        },
        y,
      )
    : y;
}
function Mk() {
  let e = _k(),
    t = Tk(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: s }, n) : null,
    null,
  );
}
const Ak = x.createElement(Mk, null);
class Lk extends x.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          iu.Provider,
          { value: this.props.routeContext },
          x.createElement(Bx.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Dk(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = x.useContext(Pk);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(iu.Provider, { value: t }, r)
  );
}
function Ok(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (s = n) == null ? void 0 : s.errors;
  if (a != null) {
    let c = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    (c >= 0 || lt(!1), (o = o.slice(0, Math.min(o.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let f = o[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: h, errors: p } = n,
          b =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!p || p[f.route.id] === void 0);
        if (f.route.lazy || b) {
          ((l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((c, f, h) => {
    let p,
      b = !1,
      y = null,
      w = null;
    n &&
      ((p = a && f.route.id ? a[f.route.id] : void 0),
      (y = f.route.errorElement || Ak),
      l &&
        (u < 0 && h === 0
          ? ((b = !0), (w = null))
          : u === h &&
            ((b = !0), (w = f.route.hydrateFallbackElement || null))));
    let g = t.concat(o.slice(0, h + 1)),
      m = () => {
        let v;
        return (
          p
            ? (v = y)
            : b
              ? (v = w)
              : f.route.Component
                ? (v = x.createElement(f.route.Component, null))
                : f.route.element
                  ? (v = f.route.element)
                  : (v = c),
          x.createElement(Dk, {
            match: f,
            routeContext: { outlet: c, matches: g, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? x.createElement(Lk, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: p,
          children: m(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Md = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Md || {});
function Ik(e) {
  let t = x.useContext(Nk);
  return (t || lt(!1), t);
}
function Vk(e) {
  let t = x.useContext(iu);
  return (t || lt(!1), t);
}
function Fk(e) {
  let t = Vk(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || lt(!1), n.route.id);
}
function _k() {
  var e;
  let t = x.useContext(Bx),
    n = Ik(Md.UseRouteError),
    r = Fk(Md.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function zk(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Ad(e) {
  lt(!1);
}
function $k(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = nr.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  xh() && lt(!1);
  let l = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: o,
        future: Tl({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, o],
    );
  typeof r == "string" && (r = ru(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: h = "",
      state: p = null,
      key: b = "default",
    } = r,
    y = x.useMemo(() => {
      let w = _x(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: h, state: p, key: b },
            navigationType: s,
          };
    }, [l, c, f, h, p, b, s]);
  return y == null
    ? null
    : x.createElement(
        $x.Provider,
        { value: u },
        x.createElement(su.Provider, { children: n, value: y }),
      );
}
function Bk(e) {
  let { children: t, location: n } = e;
  return jk(Ld(t), n);
}
new Promise(() => {});
function Ld(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, s) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, s];
      if (r.type === x.Fragment) {
        n.push.apply(n, Ld(r.props.children, i));
        return;
      }
      (r.type !== Ad && lt(!1), !r.props.index || !r.props.children || lt(!1));
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (o.children = Ld(r.props.children, i)), n.push(o));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Uk = "6";
try {
  window.__reactRouterVersion = Uk;
} catch {}
const Wk = "startTransition",
  e0 = Zg[Wk];
function Hk(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    i = x.useRef();
  i.current == null && (i.current = ak({ window: s, v5Compat: !0 }));
  let o = i.current,
    [a, l] = x.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = x.useCallback(
      (f) => {
        u && e0 ? e0(() => l(f)) : l(f);
      },
      [l, u],
    );
  return (
    x.useLayoutEffect(() => o.listen(c), [o, c]),
    x.useEffect(() => zk(r), [r]),
    x.createElement($k, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
var t0;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(t0 || (t0 = {}));
var n0;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(n0 || (n0 = {}));
const wh = x.createContext({});
function xi(e) {
  const t = x.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const bh = typeof window < "u",
  ou = bh ? x.useLayoutEffect : x.useEffect,
  au = x.createContext(null);
function Sh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ch(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const fn = (e, t, n) => (n > t ? t : n < e ? e : n);
let ci = () => {};
const Nn = {},
  Wx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Hx(e) {
  return typeof e == "object" && e !== null;
}
const Kx = (e) => /^0[^.\s]+$/u.test(e);
function Eh(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const at = (e) => e,
  Kk = (e, t) => (n) => t(e(n)),
  Uo = (...e) => e.reduce(Kk),
  di = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class Th {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Sh(this.subscriptions, t), () => Ch(this.subscriptions, t));
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const un = (e) => e * 1e3,
  Pt = (e) => e / 1e3;
function kh(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Yx = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Yk = 1e-7,
  Qk = 12;
function Gk(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (i = Yx(o, r, s) - e), i > 0 ? (n = o) : (t = o));
  while (Math.abs(i) > Yk && ++a < Qk);
  return o;
}
function Wo(e, t, n, r) {
  if (e === t && n === r) return at;
  const s = (i) => Gk(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Yx(s(i), t, r));
}
const Qx = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Gx = (e) => (t) => 1 - e(1 - t),
  Xx = Wo(0.33, 1.53, 0.69, 0.99),
  Ph = Gx(Xx),
  qx = Qx(Ph),
  Zx = (e) =>
    (e *= 2) < 1 ? 0.5 * Ph(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Nh = (e) => 1 - Math.sin(Math.acos(e)),
  Jx = Gx(Nh),
  ew = Qx(Nh),
  Xk = Wo(0.42, 0, 1, 1),
  qk = Wo(0, 0, 0.58, 1),
  tw = Wo(0.42, 0, 0.58, 1),
  Zk = (e) => Array.isArray(e) && typeof e[0] != "number",
  nw = (e) => Array.isArray(e) && typeof e[0] == "number",
  r0 = {
    linear: at,
    easeIn: Xk,
    easeInOut: tw,
    easeOut: qk,
    circIn: Nh,
    circInOut: ew,
    circOut: Jx,
    backIn: Ph,
    backInOut: qx,
    backOut: Xx,
    anticipate: Zx,
  },
  Jk = (e) => typeof e == "string",
  s0 = (e) => {
    if (nw(e)) {
      ci(e.length === 4);
      const [t, n, r, s] = e;
      return Wo(t, n, r, s);
    } else if (Jk(e)) return (ci(r0[e] !== void 0), r0[e]);
    return e;
  },
  ba = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  i0 = { value: null, addProjectionMetrics: null };
function eP(e, t) {
  let n = new Set(),
    r = new Set(),
    s = !1,
    i = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(f) {
    (o.has(f) && (c.schedule(f), e()), l++, f(a));
  }
  const c = {
    schedule: (f, h = !1, p = !1) => {
      const y = p && s ? n : r;
      return (h && o.add(f), y.has(f) || y.add(f), f);
    },
    cancel: (f) => {
      (r.delete(f), o.delete(f));
    },
    process: (f) => {
      if (((a = f), s)) {
        i = !0;
        return;
      }
      ((s = !0),
        ([n, r] = [r, n]),
        n.forEach(u),
        t && i0.value && i0.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (s = !1),
        i && ((i = !1), c.process(f)));
    },
  };
  return c;
}
const tP = 40;
function rw(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = ba.reduce((v, S) => ((v[S] = eP(i, t ? S : void 0)), v), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: f,
      preRender: h,
      render: p,
      postRender: b,
    } = o,
    y = () => {
      const v = Nn.useManualTiming ? s.timestamp : performance.now();
      ((n = !1),
        Nn.useManualTiming ||
          (s.delta = r ? 1e3 / 60 : Math.max(Math.min(v - s.timestamp, tP), 1)),
        (s.timestamp = v),
        (s.isProcessing = !0),
        a.process(s),
        l.process(s),
        u.process(s),
        c.process(s),
        f.process(s),
        h.process(s),
        p.process(s),
        b.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(y)));
    },
    w = () => {
      ((n = !0), (r = !0), s.isProcessing || e(y));
    };
  return {
    schedule: ba.reduce((v, S) => {
      const C = o[S];
      return (
        (v[S] = (T, k = !1, P = !1) => (n || w(), C.schedule(T, k, P))),
        v
      );
    }, {}),
    cancel: (v) => {
      for (let S = 0; S < ba.length; S++) o[ba[S]].cancel(v);
    },
    state: s,
    steps: o,
  };
}
const {
  schedule: ie,
  cancel: Xt,
  state: Ae,
  steps: Xu,
} = rw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : at, !0);
let Ua;
function nP() {
  Ua = void 0;
}
const rt = {
    now: () => (
      Ua === void 0 &&
        rt.set(
          Ae.isProcessing || Nn.useManualTiming
            ? Ae.timestamp
            : performance.now(),
        ),
      Ua
    ),
    set: (e) => {
      ((Ua = e), queueMicrotask(nP));
    },
  },
  sw = (e) => (t) => typeof t == "string" && t.startsWith(e),
  iw = sw("--"),
  rP = sw("var(--"),
  jh = (e) => (rP(e) ? sP.test(e.split("/*")[0].trim()) : !1),
  sP =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  wi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ko = { ...wi, transform: (e) => fn(0, 1, e) },
  Sa = { ...wi, default: 1 },
  Ji = (e) => Math.round(e * 1e5) / 1e5,
  Rh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function iP(e) {
  return e == null;
}
const oP =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Mh = (e, t) => (n) =>
    !!(
      (typeof n == "string" && oP.test(n) && n.startsWith(e)) ||
      (t && !iP(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ow = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(Rh);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  aP = (e) => fn(0, 255, e),
  qu = { ...wi, transform: (e) => Math.round(aP(e)) },
  Or = {
    test: Mh("rgb", "red"),
    parse: ow("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      qu.transform(e) +
      ", " +
      qu.transform(t) +
      ", " +
      qu.transform(n) +
      ", " +
      Ji(ko.transform(r)) +
      ")",
  };
function lP(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const Dd = { test: Mh("#"), parse: lP, transform: Or.transform },
  Ho = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  zn = Ho("deg"),
  cn = Ho("%"),
  W = Ho("px"),
  uP = Ho("vh"),
  cP = Ho("vw"),
  o0 = {
    ...cn,
    parse: (e) => cn.parse(e) / 100,
    transform: (e) => cn.transform(e * 100),
  },
  Ps = {
    test: Mh("hsl", "hue"),
    parse: ow("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      cn.transform(Ji(t)) +
      ", " +
      cn.transform(Ji(n)) +
      ", " +
      Ji(ko.transform(r)) +
      ")",
  },
  Te = {
    test: (e) => Or.test(e) || Dd.test(e) || Ps.test(e),
    parse: (e) =>
      Or.test(e) ? Or.parse(e) : Ps.test(e) ? Ps.parse(e) : Dd.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Or.transform(e)
          : Ps.transform(e),
    getAnimatableNone: (e) => {
      const t = Te.parse(e);
      return ((t.alpha = 0), Te.transform(t));
    },
  },
  dP =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function fP(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Rh)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(dP)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const aw = "number",
  lw = "color",
  hP = "var",
  pP = "var(",
  a0 = "${}",
  mP =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Po(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      mP,
      (l) => (
        Te.test(l)
          ? (r.color.push(i), s.push(lw), n.push(Te.parse(l)))
          : l.startsWith(pP)
            ? (r.var.push(i), s.push(hP), n.push(l))
            : (r.number.push(i), s.push(aw), n.push(parseFloat(l))),
        ++i,
        a0
      ),
    )
    .split(a0);
  return { values: n, split: a, indexes: r, types: s };
}
function uw(e) {
  return Po(e).values;
}
function cw(e) {
  const { split: t, types: n } = Po(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === aw
          ? (i += Ji(s[o]))
          : a === lw
            ? (i += Te.transform(s[o]))
            : (i += s[o]);
      }
    return i;
  };
}
const gP = (e) =>
  typeof e == "number" ? 0 : Te.test(e) ? Te.getAnimatableNone(e) : e;
function yP(e) {
  const t = uw(e);
  return cw(e)(t.map(gP));
}
const vr = {
  test: fP,
  parse: uw,
  createTransformer: cw,
  getAnimatableNone: yP,
};
function Zu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function vP({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((s = Zu(l, a, e + 1 / 3)), (i = Zu(l, a, e)), (o = Zu(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function kl(e, t) {
  return (n) => (n > 0 ? t : e);
}
const ye = (e, t, n) => e + (t - e) * n,
  Ju = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  xP = [Dd, Or, Ps],
  wP = (e) => xP.find((t) => t.test(e));
function l0(e) {
  const t = wP(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === Ps && (n = vP(n)), n);
}
const u0 = (e, t) => {
    const n = l0(e),
      r = l0(t);
    if (!n || !r) return kl(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = Ju(n.red, r.red, i)),
      (s.green = Ju(n.green, r.green, i)),
      (s.blue = Ju(n.blue, r.blue, i)),
      (s.alpha = ye(n.alpha, r.alpha, i)),
      Or.transform(s)
    );
  },
  Od = new Set(["none", "hidden"]);
function bP(e, t) {
  return Od.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function SP(e, t) {
  return (n) => ye(e, t, n);
}
function Ah(e) {
  return typeof e == "number"
    ? SP
    : typeof e == "string"
      ? jh(e)
        ? kl
        : Te.test(e)
          ? u0
          : TP
      : Array.isArray(e)
        ? dw
        : typeof e == "object"
          ? Te.test(e)
            ? u0
            : CP
          : kl;
}
function dw(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => Ah(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function CP(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = Ah(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function EP(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s],
      o = e.indexes[i][r[i]],
      a = e.values[o] ?? 0;
    ((n[s] = a), r[i]++);
  }
  return n;
}
const TP = (e, t) => {
  const n = vr.createTransformer(t),
    r = Po(e),
    s = Po(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (Od.has(e) && !s.values.length) || (Od.has(t) && !r.values.length)
      ? bP(e, t)
      : Uo(dw(EP(r, s), s.values), n)
    : kl(e, t);
};
function fw(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ye(e, t, n)
    : Ah(e)(e, t);
}
const kP = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => ie.update(t, n),
      stop: () => Xt(t),
      now: () => (Ae.isProcessing ? Ae.timestamp : rt.now()),
    };
  },
  hw = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++)
      r += Math.round(e(i / (s - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Pl = 2e4;
function Lh(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Pl; ) ((t += n), (r = e.next(t)));
  return t >= Pl ? 1 / 0 : t;
}
function PP(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    s = Math.min(Lh(r), Pl);
  return {
    type: "keyframes",
    ease: (i) => r.next(s * i).value / t,
    duration: Pt(s),
  };
}
const NP = 5;
function pw(e, t, n) {
  const r = Math.max(t - NP, 0);
  return kh(n - e(r), t - r);
}
const be = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  ec = 0.001;
function jP({
  duration: e = be.duration,
  bounce: t = be.bounce,
  velocity: n = be.velocity,
  mass: r = be.mass,
}) {
  let s,
    i,
    o = 1 - t;
  ((o = fn(be.minDamping, be.maxDamping, o)),
    (e = fn(be.minDuration, be.maxDuration, Pt(e))),
    o < 1
      ? ((s = (u) => {
          const c = u * o,
            f = c * e,
            h = c - n,
            p = Id(u, o),
            b = Math.exp(-f);
          return ec - (h / p) * b;
        }),
        (i = (u) => {
          const f = u * o * e,
            h = f * n + n,
            p = Math.pow(o, 2) * Math.pow(u, 2) * e,
            b = Math.exp(-f),
            y = Id(Math.pow(u, 2), o);
          return ((-s(u) + ec > 0 ? -1 : 1) * ((h - p) * b)) / y;
        }))
      : ((s = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -ec + c * f;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        })));
  const a = 5 / e,
    l = MP(s, i, a);
  if (((e = un(e)), isNaN(l)))
    return { stiffness: be.stiffness, damping: be.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const RP = 12;
function MP(e, t, n) {
  let r = n;
  for (let s = 1; s < RP; s++) r = r - e(r) / t(r);
  return r;
}
function Id(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const AP = ["duration", "bounce"],
  LP = ["stiffness", "damping", "mass"];
function c0(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function DP(e) {
  let t = {
    velocity: be.velocity,
    stiffness: be.stiffness,
    damping: be.damping,
    mass: be.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!c0(e, LP) && c0(e, AP))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * fn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: be.mass, stiffness: s, damping: i };
    } else {
      const n = jP(e);
      ((t = { ...t, ...n, mass: be.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Nl(e = be.visualDuration, t = be.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: h,
      isResolvedFromDuration: p,
    } = DP({ ...n, velocity: -Pt(n.velocity || 0) }),
    b = h || 0,
    y = u / (2 * Math.sqrt(l * c)),
    w = o - i,
    g = Pt(Math.sqrt(l / c)),
    m = Math.abs(w) < 5;
  (r || (r = m ? be.restSpeed.granular : be.restSpeed.default),
    s || (s = m ? be.restDelta.granular : be.restDelta.default));
  let v;
  if (y < 1) {
    const C = Id(g, y);
    v = (T) => {
      const k = Math.exp(-y * g * T);
      return (
        o - k * (((b + y * g * w) / C) * Math.sin(C * T) + w * Math.cos(C * T))
      );
    };
  } else if (y === 1) v = (C) => o - Math.exp(-g * C) * (w + (b + g * w) * C);
  else {
    const C = g * Math.sqrt(y * y - 1);
    v = (T) => {
      const k = Math.exp(-y * g * T),
        P = Math.min(C * T, 300);
      return (
        o - (k * ((b + y * g * w) * Math.sinh(P) + C * w * Math.cosh(P))) / C
      );
    };
  }
  const S = {
    calculatedDuration: (p && f) || null,
    next: (C) => {
      const T = v(C);
      if (p) a.done = C >= f;
      else {
        let k = C === 0 ? b : 0;
        y < 1 && (k = C === 0 ? un(b) : pw(v, C, T));
        const P = Math.abs(k) <= r,
          A = Math.abs(o - T) <= s;
        a.done = P && A;
      }
      return ((a.value = a.done ? o : T), a);
    },
    toString: () => {
      const C = Math.min(Lh(S), Pl),
        T = hw((k) => S.next(C * k).value, C, 30);
      return C + "ms " + T;
    },
    toTransition: () => {},
  };
  return S;
}
Nl.applyToOptions = (e) => {
  const t = PP(e, 100, Nl);
  return (
    (e.ease = t.ease),
    (e.duration = un(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
function Vd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    p = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    b = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
          ? a
          : l;
  let y = n * t;
  const w = f + y,
    g = o === void 0 ? w : o(w);
  g !== w && (y = g - f);
  const m = (P) => -y * Math.exp(-P / r),
    v = (P) => g + m(P),
    S = (P) => {
      const A = m(P),
        M = v(P);
      ((h.done = Math.abs(A) <= u), (h.value = h.done ? g : M));
    };
  let C, T;
  const k = (P) => {
    p(h.value) &&
      ((C = P),
      (T = Nl({
        keyframes: [h.value, b(h.value)],
        velocity: pw(v, P, h.value),
        damping: s,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    k(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let A = !1;
        return (
          !T && C === void 0 && ((A = !0), S(P), k(P)),
          C !== void 0 && P >= C ? T.next(P - C) : (!A && S(P), h)
        );
      },
    }
  );
}
function OP(e, t, n) {
  const r = [],
    s = n || Nn.mix || fw,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || at : t;
      a = Uo(l, a);
    }
    r.push(a);
  }
  return r;
}
function Dh(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((ci(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = OP(t, r, s),
    l = a.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const h = di(e[f], e[f + 1], c);
      return a[f](h);
    };
  return n ? (c) => u(fn(e[0], e[i - 1], c)) : u;
}
function IP(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = di(0, t, r);
    e.push(ye(n, 1, s));
  }
}
function mw(e) {
  const t = [0];
  return (IP(t, e.length - 1), t);
}
function VP(e, t) {
  return e.map((n) => n * t);
}
function FP(e, t) {
  return e.map(() => t || tw).splice(0, e.length - 1);
}
function eo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = Zk(r) ? r.map(s0) : s0(r),
    i = { done: !1, value: t[0] },
    o = VP(n && n.length === t.length ? n : mw(t), e),
    a = Dh(o, t, { ease: Array.isArray(s) ? s : FP(t, s) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const _P = (e) => e !== null;
function Oh(e, { repeat: t, repeatType: n = "loop" }, r, s = 1) {
  const i = e.filter(_P),
    a = s < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
const zP = { decay: Vd, inertia: Vd, tween: eo, keyframes: eo, spring: Nl };
function gw(e) {
  typeof e.type == "string" && (e.type = zP[e.type]);
}
class Ih {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const $P = (e) => e / 100;
class lu extends Ih {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, s;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== rt.now() && this.tick(rt.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (s = (r = this.options).onStop) == null || s.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    gw(t);
    const {
      type: n = eo,
      repeat: r = 0,
      repeatDelay: s = 0,
      repeatType: i,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || eo;
    l !== eo &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = Uo($P, fw(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    (i === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = Lh(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + s),
      (this.totalDuration = this.resolvedDuration * (r + 1) - s),
      (this.generator = u));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: s,
      mixKeyframes: i,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: f,
      repeatType: h,
      repeatDelay: p,
      type: b,
      onUpdate: y,
      finalKeyframe: w,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - s / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      m = this.playbackSpeed >= 0 ? g < 0 : g > s;
    ((this.currentTime = Math.max(g, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = s));
    let v = this.currentTime,
      S = r;
    if (f) {
      const P = Math.min(this.currentTime, s) / a;
      let A = Math.floor(P),
        M = P % 1;
      (!M && P >= 1 && (M = 1),
        M === 1 && A--,
        (A = Math.min(A, f + 1)),
        !!(A % 2) &&
          (h === "reverse"
            ? ((M = 1 - M), p && (M -= p / a))
            : h === "mirror" && (S = o)),
        (v = fn(0, 1, M) * a));
    }
    const C = m ? { done: !1, value: c[0] } : S.next(v);
    i && (C.value = i(C.value));
    let { done: T } = C;
    !m &&
      l !== null &&
      (T =
        this.playbackSpeed >= 0
          ? this.currentTime >= s
          : this.currentTime <= 0);
    const k =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      k && b !== Vd && (C.value = Oh(c, this.options, w, this.speed)),
      y && y(C.value),
      k && this.finish(),
      C
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return Pt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Pt(t);
  }
  get time() {
    return Pt(this.currentTime);
  }
  set time(t) {
    var n;
    ((t = un(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(rt.now());
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = Pt(this.currentTime)));
  }
  play() {
    var s, i;
    if (this.isStopped) return;
    const { driver: t = kP, startTime: n } = this.options;
    (this.driver || (this.driver = t((o) => this.tick(o))),
      (i = (s = this.options).onPlay) == null || i.call(s));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(rt.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function BP(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Ir = (e) => (e * 180) / Math.PI,
  Fd = (e) => {
    const t = Ir(Math.atan2(e[1], e[0]));
    return _d(t);
  },
  UP = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Fd,
    rotateZ: Fd,
    skewX: (e) => Ir(Math.atan(e[1])),
    skewY: (e) => Ir(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  _d = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  d0 = Fd,
  f0 = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  h0 = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  WP = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: f0,
    scaleY: h0,
    scale: (e) => (f0(e) + h0(e)) / 2,
    rotateX: (e) => _d(Ir(Math.atan2(e[6], e[5]))),
    rotateY: (e) => _d(Ir(Math.atan2(-e[2], e[0]))),
    rotateZ: d0,
    rotate: d0,
    skewX: (e) => Ir(Math.atan(e[4])),
    skewY: (e) => Ir(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function zd(e) {
  return e.includes("scale") ? 1 : 0;
}
function $d(e, t) {
  if (!e || e === "none") return zd(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, s;
  if (n) ((r = WP), (s = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = UP), (s = a));
  }
  if (!s) return zd(t);
  const i = r[t],
    o = s[1].split(",").map(KP);
  return typeof i == "function" ? i(o) : o[i];
}
const HP = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return $d(n, t);
};
function KP(e) {
  return parseFloat(e.trim());
}
const bi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Si = new Set(bi),
  p0 = (e) => e === wi || e === W,
  YP = new Set(["x", "y", "z"]),
  QP = bi.filter((e) => !YP.has(e));
function GP(e) {
  const t = [];
  return (
    QP.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Qr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => $d(t, "x"),
  y: (e, { transform: t }) => $d(t, "y"),
};
Qr.translateX = Qr.x;
Qr.translateY = Qr.y;
const Gr = new Set();
let Bd = !1,
  Ud = !1,
  Wd = !1;
function yw() {
  if (Ud) {
    const e = Array.from(Gr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const s = GP(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var a;
            (a = r.getValue(i)) == null || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Ud = !1), (Bd = !1), Gr.forEach((e) => e.complete(Wd)), Gr.clear());
}
function vw() {
  Gr.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Ud = !0));
  });
}
function XP() {
  ((Wd = !0), vw(), yw(), (Wd = !1));
}
class Vh {
  constructor(t, n, r, s, i, o = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Gr.add(this),
          Bd || ((Bd = !0), ie.read(vw), ie.resolveKeyframes(yw)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    if (t[0] === null) {
      const i = s == null ? void 0 : s.get(),
        o = t[t.length - 1];
      if (i !== void 0) t[0] = i;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = o), s && i === void 0 && s.set(t[0]));
    }
    BP(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Gr.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Gr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const qP = (e) => e.startsWith("--");
function ZP(e, t, n) {
  qP(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const xw = Eh(() => window.ScrollTimeline !== void 0),
  JP = {};
function e4(e, t) {
  const n = Eh(e);
  return () => JP[t] ?? n();
}
const ww = e4(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Bi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  m0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Bi([0, 0.65, 0.55, 1]),
    circOut: Bi([0.55, 0, 1, 0.45]),
    backIn: Bi([0.31, 0.01, 0.66, -0.59]),
    backOut: Bi([0.33, 1.53, 0.69, 0.99]),
  };
function bw(e, t) {
  if (e)
    return typeof e == "function"
      ? ww()
        ? hw(e, t)
        : "ease-out"
      : nw(e)
        ? Bi(e)
        : Array.isArray(e)
          ? e.map((n) => bw(n, t) || m0.easeOut)
          : m0[e];
}
function t4(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const f = bw(a, s);
  Array.isArray(f) && (c.easing = f);
  const h = {
    delay: r,
    duration: s,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: i + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return (u && (h.pseudoElement = u), e.animate(c, h));
}
function Sw(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function n4({ type: e, ...t }) {
  return Sw(e) && ww()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class r4 extends Ih {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: n,
      name: r,
      keyframes: s,
      pseudoElement: i,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!i),
      (this.allowFlatten = o),
      (this.options = t),
      ci(typeof t.type != "string"));
    const u = n4(t);
    ((this.animation = t4(n, r, s, u, i)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !i)) {
          const c = Oh(s, this.options, a, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(c) : ZP(n, r, c),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement ||
      (n = (t = this.animation).commitStyles) == null ||
      n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return Pt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Pt(t);
  }
  get time() {
    return Pt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    ((this.finishedTime = null), (this.animation.currentTime = un(t)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && xw() ? ((this.animation.timeline = t), at) : n(this)
    );
  }
}
const Cw = { anticipate: Zx, backInOut: qx, circInOut: ew };
function s4(e) {
  return e in Cw;
}
function i4(e) {
  typeof e.ease == "string" && s4(e.ease) && (e.ease = Cw[e.ease]);
}
const g0 = 10;
class o4 extends r4 {
  constructor(t) {
    (i4(t),
      gw(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: s,
      element: i,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new lu({ ...o, autoplay: !1 }),
      l = un(this.finishedTime ?? this.time);
    (n.setWithVelocity(a.sample(l - g0).value, a.sample(l).value, g0),
      a.stop());
  }
}
const y0 = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (vr.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function a4(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function l4(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = y0(s, t),
    a = y0(i, t);
  return !o || !a ? !1 : a4(e) || ((n === "spring" || Sw(n)) && r);
}
function Hd(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const u4 = new Set(["opacity", "clipPath", "filter", "transform"]),
  c4 = Eh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function d4(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: s,
    damping: i,
    type: o,
  } = e;
  if (
    !(
      ((c = t == null ? void 0 : t.owner) == null
        ? void 0
        : c.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    c4() &&
    n &&
    u4.has(n) &&
    (n !== "transform" || !u) &&
    !l &&
    !r &&
    s !== "mirror" &&
    i !== 0 &&
    o !== "inertia"
  );
}
const f4 = 40;
class h4 extends Ih {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...f
  }) {
    var b;
    (super(),
      (this.stop = () => {
        var y, w;
        (this._animation &&
          (this._animation.stop(),
          (y = this.stopTimeline) == null || y.call(this)),
          (w = this.keyframeResolver) == null || w.cancel());
      }),
      (this.createdAt = rt.now()));
    const h = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        name: l,
        motionValue: u,
        element: c,
        ...f,
      },
      p = (c == null ? void 0 : c.KeyframeResolver) || Vh;
    ((this.keyframeResolver = new p(
      a,
      (y, w, g) => this.onKeyframesResolved(y, w, h, !g),
      l,
      u,
      c,
    )),
      (b = this.keyframeResolver) == null || b.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, s) {
    this.keyframeResolver = void 0;
    const {
      name: i,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    ((this.resolvedAt = rt.now()),
      l4(t, i, o, a) ||
        ((Nn.instantAnimations || !l) && (c == null || c(Oh(t, r, n))),
        (t[0] = t[t.length - 1]),
        Hd(r),
        (r.repeat = 0)));
    const h = {
        startTime: s
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > f4
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      p =
        !u && d4(h)
          ? new o4({ ...h, element: h.motionValue.owner.current })
          : new lu(h);
    (p.finished.then(() => this.notifyFinished()).catch(at),
      this.pendingTimeline &&
        ((this.stopTimeline = p.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = p));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), XP()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
const p4 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function m4(e) {
  const t = p4.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function Ew(e, t, n = 1) {
  const [r, s] = m4(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return Wx(o) ? parseFloat(o) : o;
  }
  return jh(s) ? Ew(s, t, n + 1) : s;
}
function Fh(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Tw = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...bi,
  ]),
  g4 = { test: (e) => e === "auto", parse: (e) => e },
  kw = (e) => (t) => t.test(e),
  Pw = [wi, W, cn, zn, cP, uP, g4],
  v0 = (e) => Pw.find(kw(e));
function y4(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Kx(e)
      : !0;
}
const v4 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function x4(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Rh) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = v4.has(t) ? 1 : 0;
  return (r !== n && (i *= 100), t + "(" + i + s + ")");
}
const w4 = /\b([a-z-]*)\(.*?\)/gu,
  Kd = {
    ...vr,
    getAnimatableNone: (e) => {
      const t = e.match(w4);
      return t ? t.map(x4).join(" ") : e;
    },
  },
  x0 = { ...wi, transform: Math.round },
  b4 = {
    rotate: zn,
    rotateX: zn,
    rotateY: zn,
    rotateZ: zn,
    scale: Sa,
    scaleX: Sa,
    scaleY: Sa,
    scaleZ: Sa,
    skew: zn,
    skewX: zn,
    skewY: zn,
    distance: W,
    translateX: W,
    translateY: W,
    translateZ: W,
    x: W,
    y: W,
    z: W,
    perspective: W,
    transformPerspective: W,
    opacity: ko,
    originX: o0,
    originY: o0,
    originZ: W,
  },
  _h = {
    borderWidth: W,
    borderTopWidth: W,
    borderRightWidth: W,
    borderBottomWidth: W,
    borderLeftWidth: W,
    borderRadius: W,
    radius: W,
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomRightRadius: W,
    borderBottomLeftRadius: W,
    width: W,
    maxWidth: W,
    height: W,
    maxHeight: W,
    top: W,
    right: W,
    bottom: W,
    left: W,
    padding: W,
    paddingTop: W,
    paddingRight: W,
    paddingBottom: W,
    paddingLeft: W,
    margin: W,
    marginTop: W,
    marginRight: W,
    marginBottom: W,
    marginLeft: W,
    backgroundPositionX: W,
    backgroundPositionY: W,
    ...b4,
    zIndex: x0,
    fillOpacity: ko,
    strokeOpacity: ko,
    numOctaves: x0,
  },
  S4 = {
    ..._h,
    color: Te,
    backgroundColor: Te,
    outlineColor: Te,
    fill: Te,
    stroke: Te,
    borderColor: Te,
    borderTopColor: Te,
    borderRightColor: Te,
    borderBottomColor: Te,
    borderLeftColor: Te,
    filter: Kd,
    WebkitFilter: Kd,
  },
  Nw = (e) => S4[e];
function jw(e, t) {
  let n = Nw(e);
  return (
    n !== Kd && (n = vr),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const C4 = new Set(["auto", "none", "0"]);
function E4(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    (typeof i == "string" && !C4.has(i) && Po(i).values.length && (s = e[r]),
      r++);
  }
  if (s && n) for (const i of t) e[i] = jw(n, s);
}
class T4 extends Vh {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), jh(u))) {
        const c = Ew(u, n.current);
        (c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u));
      }
    }
    if ((this.resolveNoneKeyframes(), !Tw.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = v0(s),
      a = v0(i);
    if (o !== a)
      if (p0(o) && p0(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else Qr[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) (t[s] === null || y4(t[s])) && r.push(s);
    r.length && E4(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Qr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const s = t.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const i = r.length - 1,
      o = r[i];
    ((r[i] = Qr[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
function zh(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const s = document.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
const Rw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function $h(e) {
  return Hx(e) && "offsetHeight" in e;
}
const w0 = 30,
  k4 = (e) => !isNaN(parseFloat(e)),
  to = { current: void 0 };
class P4 {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var i;
        const s = rt.now();
        if (
          (this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((i = this.events.change) == null || i.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = rt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = k4(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Th());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            ie.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return (to.current && to.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = rt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > w0
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, w0);
    return kh(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Ut(e, t) {
  return new P4(e, t);
}
const { schedule: Bh, cancel: lA } = rw(queueMicrotask, !1),
  Vt = { x: !1, y: !1 };
function Mw() {
  return Vt.x || Vt.y;
}
function N4(e) {
  return e === "x" || e === "y"
    ? Vt[e]
      ? null
      : ((Vt[e] = !0),
        () => {
          Vt[e] = !1;
        })
    : Vt.x || Vt.y
      ? null
      : ((Vt.x = Vt.y = !0),
        () => {
          Vt.x = Vt.y = !1;
        });
}
function Aw(e, t) {
  const n = zh(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function b0(e) {
  return !(e.pointerType === "touch" || Mw());
}
function j4(e, t, n = {}) {
  const [r, s, i] = Aw(e, n),
    o = (a) => {
      if (!b0(a)) return;
      const { target: l } = a,
        u = t(l, a);
      if (typeof u != "function" || !l) return;
      const c = (f) => {
        b0(f) && (u(f), l.removeEventListener("pointerleave", c));
      };
      l.addEventListener("pointerleave", c, s);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, s);
    }),
    i
  );
}
const Lw = (e, t) => (t ? (e === t ? !0 : Lw(e, t.parentElement)) : !1),
  Uh = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  R4 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function M4(e) {
  return R4.has(e.tagName) || e.tabIndex !== -1;
}
const Wa = new WeakSet();
function S0(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function tc(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const A4 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = S0(() => {
    if (Wa.has(n)) return;
    tc(n, "down");
    const s = S0(() => {
        tc(n, "up");
      }),
      i = () => tc(n, "cancel");
    (n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function C0(e) {
  return Uh(e) && !Mw();
}
function L4(e, t, n = {}) {
  const [r, s, i] = Aw(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!C0(a)) return;
      Wa.add(l);
      const u = t(l, a),
        c = (p, b) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            Wa.has(l) && Wa.delete(l),
            C0(p) && typeof u == "function" && u(p, { success: b }));
        },
        f = (p) => {
          c(
            p,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              Lw(l, p.target),
          );
        },
        h = (p) => {
          c(p, !1);
        };
      (window.addEventListener("pointerup", f, s),
        window.addEventListener("pointercancel", h, s));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        $h(a) &&
          (a.addEventListener("focus", (u) => A4(u, s)),
          !M4(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    i
  );
}
function Wh(e) {
  return Hx(e) && "ownerSVGElement" in e;
}
const Ha = new WeakMap();
let $n;
const Dw = (e, t, n) => (r, s) =>
    s && s[0]
      ? s[0][e + "Size"]
      : Wh(r) && "getBBox" in r
        ? r.getBBox()[t]
        : r[n],
  D4 = Dw("inline", "width", "offsetWidth"),
  O4 = Dw("block", "height", "offsetHeight");
function I4({ target: e, borderBoxSize: t }) {
  var n;
  (n = Ha.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return D4(e, t);
        },
        get height() {
          return O4(e, t);
        },
      });
    });
}
function V4(e) {
  e.forEach(I4);
}
function F4() {
  typeof ResizeObserver > "u" || ($n = new ResizeObserver(V4));
}
function _4(e, t) {
  $n || F4();
  const n = zh(e);
  return (
    n.forEach((r) => {
      let s = Ha.get(r);
      (s || ((s = new Set()), Ha.set(r, s)),
        s.add(t),
        $n == null || $n.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const s = Ha.get(r);
        (s == null || s.delete(t),
          (s != null && s.size) || $n == null || $n.unobserve(r));
      });
    }
  );
}
const Ka = new Set();
let Ns;
function z4() {
  ((Ns = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Ka.forEach((t) => t(e));
  }),
    window.addEventListener("resize", Ns));
}
function $4(e) {
  return (
    Ka.add(e),
    Ns || z4(),
    () => {
      (Ka.delete(e),
        !Ka.size &&
          typeof Ns == "function" &&
          (window.removeEventListener("resize", Ns), (Ns = void 0)));
    }
  );
}
function B4(e, t) {
  return typeof e == "function" ? $4(e) : _4(e, t);
}
function Ow(e, t) {
  let n;
  const r = () => {
    const { currentTime: s } = t,
      o = (s === null ? 0 : s.value) / 100;
    (n !== o && e(o), (n = o));
  };
  return (ie.preUpdate(r, !0), () => Xt(r));
}
function U4(e) {
  return Wh(e) && e.tagName === "svg";
}
function W4(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    s = e[1 + n],
    i = e[2 + n],
    o = e[3 + n],
    a = Dh(s, i, o);
  return t ? a(r) : a;
}
const Pe = (e) => !!(e && e.getVelocity);
function H4(e, t, n) {
  const r = e.get();
  let s = null,
    i = r,
    o;
  const a = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0,
    l = () => {
      s && (s.stop(), (s = null));
    },
    u = () => {
      (l(),
        (s = new lu({
          keyframes: [T0(e.get()), T0(i)],
          velocity: e.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...n,
          onUpdate: o,
        })));
    };
  if (
    (e.attach((c, f) => {
      ((i = c), (o = (h) => f(E0(h, a))), ie.postRender(u));
    }, l),
    Pe(t))
  ) {
    const c = t.on("change", (h) => e.set(E0(h, a))),
      f = e.on("destroy", c);
    return () => {
      (c(), f());
    };
  }
  return l;
}
function E0(e, t) {
  return t ? e + t : e;
}
function T0(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
const K4 = [...Pw, Te, vr],
  Y4 = (e) => K4.find(kw(e)),
  Ko = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function k0(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Q4(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = k0(s, t);
      return (!n && typeof i == "function" && (n = !0), i);
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : k0(e[s], null);
        }
      };
  };
}
function G4(...e) {
  return x.useCallback(Q4(...e), e);
}
class X4 extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        s = ($h(r) && r.offsetWidth) || 0,
        i = this.props.sizeRef.current;
      ((i.height = n.offsetHeight || 0),
        (i.width = n.offsetWidth || 0),
        (i.top = n.offsetTop),
        (i.left = n.offsetLeft),
        (i.right = s - i.width - i.left));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function q4({ children: e, isPresent: t, anchorX: n, root: r }) {
  const s = x.useId(),
    i = x.useRef(null),
    o = x.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = x.useContext(Ko),
    l = G4(i, e == null ? void 0 : e.ref);
  return (
    x.useInsertionEffect(() => {
      const { width: u, height: c, top: f, left: h, right: p } = o.current;
      if (t || !i.current || !u || !c) return;
      const b = n === "left" ? `left: ${h}` : `right: ${p}`;
      i.current.dataset.motionPopId = s;
      const y = document.createElement("style");
      a && (y.nonce = a);
      const w = r ?? document.head;
      return (
        w.appendChild(y),
        y.sheet &&
          y.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${b}px !important;
            top: ${f}px !important;
          }
        `),
        () => {
          w.contains(y) && w.removeChild(y);
        }
      );
    }, [t]),
    d.jsx(X4, {
      isPresent: t,
      childRef: i,
      sizeRef: o,
      children: x.cloneElement(e, { ref: l }),
    })
  );
}
const Z4 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
  anchorX: a,
  root: l,
}) => {
  const u = xi(J4),
    c = x.useId();
  let f = !0,
    h = x.useMemo(
      () => (
        (f = !1),
        {
          id: c,
          initial: t,
          isPresent: n,
          custom: s,
          onExitComplete: (p) => {
            u.set(p, !0);
            for (const b of u.values()) if (!b) return;
            r && r();
          },
          register: (p) => (u.set(p, !1), () => u.delete(p)),
        }
      ),
      [n, u, r],
    );
  return (
    i && f && (h = { ...h }),
    x.useMemo(() => {
      u.forEach((p, b) => u.set(b, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !u.size && r && r();
    }, [n]),
    o === "popLayout" &&
      (e = d.jsx(q4, { isPresent: n, anchorX: a, root: l, children: e })),
    d.jsx(au.Provider, { value: h, children: e })
  );
};
function J4() {
  return new Map();
}
function Iw(e = !0) {
  const t = x.useContext(au);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = x.useId();
  x.useEffect(() => {
    if (e) return s(i);
  }, [e]);
  const o = x.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Ca = (e) => e.key || "";
function P0(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Yo = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: s = !0,
    mode: i = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    root: l,
  }) => {
    const [u, c] = Iw(o),
      f = x.useMemo(() => P0(e), [e]),
      h = o && !u ? [] : f.map(Ca),
      p = x.useRef(!0),
      b = x.useRef(f),
      y = xi(() => new Map()),
      [w, g] = x.useState(f),
      [m, v] = x.useState(f);
    ou(() => {
      ((p.current = !1), (b.current = f));
      for (let T = 0; T < m.length; T++) {
        const k = Ca(m[T]);
        h.includes(k) ? y.delete(k) : y.get(k) !== !0 && y.set(k, !1);
      }
    }, [m, h.length, h.join("-")]);
    const S = [];
    if (f !== w) {
      let T = [...f];
      for (let k = 0; k < m.length; k++) {
        const P = m[k],
          A = Ca(P);
        h.includes(A) || (T.splice(k, 0, P), S.push(P));
      }
      return (i === "wait" && S.length && (T = S), v(P0(T)), g(f), null);
    }
    const { forceRender: C } = x.useContext(wh);
    return d.jsx(d.Fragment, {
      children: m.map((T) => {
        const k = Ca(T),
          P = o && !u ? !1 : f === m || h.includes(k),
          A = () => {
            if (y.has(k)) y.set(k, !0);
            else return;
            let M = !0;
            (y.forEach((z) => {
              z || (M = !1);
            }),
              M &&
                (C == null || C(),
                v(b.current),
                o && (c == null || c()),
                r && r()));
          };
        return d.jsx(
          Z4,
          {
            isPresent: P,
            initial: !p.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: s,
            mode: i,
            root: l,
            onExitComplete: P ? void 0 : A,
            anchorX: a,
            children: T,
          },
          k,
        );
      }),
    });
  },
  Vw = x.createContext({ strict: !1 }),
  N0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  fi = {};
for (const e in N0) fi[e] = { isEnabled: (t) => N0[e].some((n) => !!t[n]) };
function eN(e) {
  for (const t in e) fi[t] = { ...fi[t], ...e[t] };
}
const tN = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function jl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    tN.has(e)
  );
}
let Fw = (e) => !jl(e);
function nN(e) {
  typeof e == "function" && (Fw = (t) => (t.startsWith("on") ? !jl(t) : e(t)));
}
try {
  nN(require("@emotion/is-prop-valid").default);
} catch {}
function rN(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((Fw(s) ||
        (n === !0 && jl(s)) ||
        (!t && !jl(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
const uu = x.createContext({});
function cu(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function No(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Hh = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Kh = ["initial", ...Hh];
function du(e) {
  return cu(e.animate) || Kh.some((t) => No(e[t]));
}
function _w(e) {
  return !!(du(e) || e.variants);
}
function sN(e, t) {
  if (du(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || No(n) ? n : void 0,
      animate: No(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function iN(e) {
  const { initial: t, animate: n } = sN(e, x.useContext(uu));
  return x.useMemo(() => ({ initial: t, animate: n }), [j0(t), j0(n)]);
}
function j0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
function R0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Oi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (W.test(e)) e = parseFloat(e);
        else return e;
      const n = R0(e, t.target.x),
        r = R0(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  oN = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = vr.parse(e);
      if (s.length > 5) return r;
      const i = vr.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((s[0 + o] /= a), (s[1 + o] /= l));
      const u = ye(a, l, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= u),
        typeof s[3 + o] == "number" && (s[3 + o] /= u),
        i(s)
      );
    },
  },
  Yd = {
    borderRadius: {
      ...Oi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Oi,
    borderTopRightRadius: Oi,
    borderBottomLeftRadius: Oi,
    borderBottomRightRadius: Oi,
    boxShadow: oN,
  };
function zw(e, { layout: t, layoutId: n }) {
  return (
    Si.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Yd[e] || e === "opacity"))
  );
}
const aN = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  lN = bi.length;
function uN(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < lN; i++) {
    const o = bi[i],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = Rw(a, _h[o]);
      if (!l) {
        s = !1;
        const c = aN[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r);
}
function Yh(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Si.has(l)) {
      o = !0;
      continue;
    } else if (iw(l)) {
      s[l] = u;
      continue;
    } else {
      const c = Rw(u, _h[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = uN(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Qh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function $w(e, t, n) {
  for (const r in t) !Pe(t[r]) && !zw(r, n) && (e[r] = t[r]);
}
function cN({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Qh();
    return (Yh(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function dN(e, t) {
  const n = e.style || {},
    r = {};
  return ($w(r, n, e), Object.assign(r, cN(e, t)), r);
}
function fN(e, t) {
  const n = {},
    r = dN(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const hN = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  pN = { offset: "strokeDashoffset", array: "strokeDasharray" };
function mN(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? hN : pN;
  e[i.offset] = W.transform(-r);
  const o = W.transform(t),
    a = W.transform(n);
  e[i.array] = `${o} ${a}`;
}
function Bw(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: s,
    pathSpacing: i = 1,
    pathOffset: o = 0,
    ...a
  },
  l,
  u,
  c,
) {
  if ((Yh(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: f, style: h } = e;
  (f.transform && ((h.transform = f.transform), delete f.transform),
    (h.transform || f.transformOrigin) &&
      ((h.transformOrigin = f.transformOrigin ?? "50% 50%"),
      delete f.transformOrigin),
    h.transform &&
      ((h.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete f.transformBox),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    s !== void 0 && mN(f, s, i, o, !1));
}
const Uw = () => ({ ...Qh(), attrs: {} }),
  Ww = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function gN(e, t, n, r) {
  const s = x.useMemo(() => {
    const i = Uw();
    return (
      Bw(i, t, Ww(r), e.transformTemplate, e.style),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    ($w(i, e.style, e), (s.style = { ...i, ...s.style }));
  }
  return s;
}
const yN = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Gh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(yN.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function vN(e, t, n, { latestValues: r }, s, i = !1) {
  const a = (Gh(e) ? gN : fN)(t, r, s, e),
    l = rN(t, typeof e == "string", i),
    u = e !== x.Fragment ? { ...l, ...a, ref: n } : {},
    { children: c } = t,
    f = x.useMemo(() => (Pe(c) ? c.get() : c), [c]);
  return x.createElement(e, { ...u, children: f });
}
function M0(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Xh(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = M0(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = M0(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
function Ya(e) {
  return Pe(e) ? e.get() : e;
}
function xN({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, s) {
  return { latestValues: wN(n, r, s, e), renderState: t() };
}
function wN(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const h in i) s[h] = Ya(i[h]);
  let { initial: o, animate: a } = e;
  const l = du(e),
    u = _w(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? a : o;
  if (f && typeof f != "boolean" && !cu(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let p = 0; p < h.length; p++) {
      const b = Xh(e, h[p]);
      if (b) {
        const { transitionEnd: y, transition: w, ...g } = b;
        for (const m in g) {
          let v = g[m];
          if (Array.isArray(v)) {
            const S = c ? v.length - 1 : 0;
            v = v[S];
          }
          v !== null && (s[m] = v);
        }
        for (const m in y) s[m] = y[m];
      }
    }
  }
  return s;
}
const Hw = (e) => (t, n) => {
  const r = x.useContext(uu),
    s = x.useContext(au),
    i = () => xN(e, t, r, s);
  return n ? i() : xi(i);
};
function qh(e, t, n) {
  var i;
  const { style: r } = e,
    s = {};
  for (const o in r)
    (Pe(r[o]) ||
      (t.style && Pe(t.style[o])) ||
      zw(o, e) ||
      ((i = n == null ? void 0 : n.getValue(o)) == null
        ? void 0
        : i.liveStyle) !== void 0) &&
      (s[o] = r[o]);
  return s;
}
const bN = Hw({ scrapeMotionValuesFromProps: qh, createRenderState: Qh });
function Kw(e, t, n) {
  const r = qh(e, t, n);
  for (const s in e)
    if (Pe(e[s]) || Pe(t[s])) {
      const i =
        bi.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
const SN = Hw({ scrapeMotionValuesFromProps: Kw, createRenderState: Uw }),
  CN = Symbol.for("motionComponentSymbol");
function js(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function EN(e, t, n) {
  return x.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : js(n) && (n.current = r)));
    },
    [t],
  );
}
const Zh = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  TN = "framerAppearId",
  Yw = "data-" + Zh(TN),
  Qw = x.createContext({});
function kN(e, t, n, r, s) {
  var y, w;
  const { visualElement: i } = x.useContext(uu),
    o = x.useContext(Vw),
    a = x.useContext(au),
    l = x.useContext(Ko).reducedMotion,
    u = x.useRef(null);
  ((r = r || o.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      })));
  const c = u.current,
    f = x.useContext(Qw);
  c &&
    !c.projection &&
    s &&
    (c.type === "html" || c.type === "svg") &&
    PN(u.current, n, s, f);
  const h = x.useRef(!1);
  x.useInsertionEffect(() => {
    c && h.current && c.update(n, a);
  });
  const p = n[Yw],
    b = x.useRef(
      !!p &&
        !((y = window.MotionHandoffIsComplete) != null && y.call(window, p)) &&
        ((w = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : w.call(window, p)),
    );
  return (
    ou(() => {
      c &&
        ((h.current = !0),
        (window.MotionIsMounted = !0),
        c.updateFeatures(),
        c.scheduleRenderMicrotask(),
        b.current && c.animationState && c.animationState.animateChanges());
    }),
    x.useEffect(() => {
      c &&
        (!b.current && c.animationState && c.animationState.animateChanges(),
        b.current &&
          (queueMicrotask(() => {
            var g;
            (g = window.MotionHandoffMarkAsComplete) == null ||
              g.call(window, p);
          }),
          (b.current = !1)),
        (c.enteringChildren = void 0));
    }),
    c
  );
}
function PN(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Gw(e.parent),
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && js(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function Gw(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Gw(e.parent);
}
function nc(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && eN(n);
  const s = Gh(e) ? SN : bN;
  function i(a, l) {
    let u;
    const c = { ...x.useContext(Ko), ...a, layoutId: NN(a) },
      { isStatic: f } = c,
      h = iN(a),
      p = s(a, f);
    if (!f && bh) {
      jN();
      const b = RN(c);
      ((u = b.MeasureLayout),
        (h.visualElement = kN(e, p, c, r, b.ProjectionNode)));
    }
    return d.jsxs(uu.Provider, {
      value: h,
      children: [
        u && h.visualElement
          ? d.jsx(u, { visualElement: h.visualElement, ...c })
          : null,
        vN(e, a, EN(p, h.visualElement, l), p, f, t),
      ],
    });
  }
  i.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const o = x.forwardRef(i);
  return ((o[CN] = e), o);
}
function NN({ layoutId: e }) {
  const t = x.useContext(wh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function jN(e, t) {
  x.useContext(Vw).strict;
}
function RN(e) {
  const { drag: t, layout: n } = fi;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function MN(e, t) {
  if (typeof Proxy > "u") return nc;
  const n = new Map(),
    r = (i, o) => nc(i, o, e, t),
    s = (i, o) => r(i, o);
  return new Proxy(s, {
    get: (i, o) =>
      o === "create"
        ? r
        : (n.has(o) || n.set(o, nc(o, void 0, e, t)), n.get(o)),
  });
}
function Xw({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function AN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function LN(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function rc(e) {
  return e === void 0 || e === 1;
}
function Qd({ scale: e, scaleX: t, scaleY: n }) {
  return !rc(e) || !rc(t) || !rc(n);
}
function Mr(e) {
  return (
    Qd(e) ||
    qw(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function qw(e) {
  return A0(e.x) || A0(e.y);
}
function A0(e) {
  return e && e !== "0%";
}
function Rl(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function L0(e, t, n, r, s) {
  return (s !== void 0 && (e = Rl(e, s, r)), Rl(e, n, r) + t);
}
function Gd(e, t = 0, n = 1, r, s) {
  ((e.min = L0(e.min, t, n, r, s)), (e.max = L0(e.max, t, n, r, s)));
}
function Zw(e, { x: t, y: n }) {
  (Gd(e.x, t.translate, t.scale, t.originPoint),
    Gd(e.y, n.translate, n.scale, n.originPoint));
}
const D0 = 0.999999999999,
  O0 = 1.0000000000001;
function DN(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    ((i = n[a]), (o = i.projectionDelta));
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Ms(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Zw(e, o)),
      r && Mr(i.latestValues) && Ms(e, i.latestValues));
  }
  (t.x < O0 && t.x > D0 && (t.x = 1), t.y < O0 && t.y > D0 && (t.y = 1));
}
function Rs(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function I0(e, t, n, r, s = 0.5) {
  const i = ye(e.min, e.max, s);
  Gd(e, t, n, i, r);
}
function Ms(e, t) {
  (I0(e.x, t.x, t.scaleX, t.scale, t.originX),
    I0(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Jw(e, t) {
  return Xw(LN(e.getBoundingClientRect(), t));
}
function ON(e, t, n) {
  const r = Jw(e, n),
    { scroll: s } = t;
  return (s && (Rs(r.x, s.offset.x), Rs(r.y, s.offset.y)), r);
}
const V0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  As = () => ({ x: V0(), y: V0() }),
  F0 = () => ({ min: 0, max: 0 }),
  Ne = () => ({ x: F0(), y: F0() }),
  Xd = { current: null },
  e2 = { current: !1 };
function IN() {
  if (((e2.current = !0), !!bh))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Xd.current = e.matches);
      (e.addEventListener("change", t), t());
    } else Xd.current = !1;
}
const VN = new WeakMap();
function FN(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (Pe(s)) e.addValue(r, s);
    else if (Pe(i)) e.addValue(r, Ut(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Ut(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const _0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class _N {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      blockInitialAnimation: i,
      visualState: o,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Vh),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = rt.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), ie.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: u } = o;
    ((this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = du(n)),
      (this.isVariantNode = _w(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const h in f) {
      const p = f[h];
      l[h] !== void 0 && Pe(p) && p.set(l[h]);
    }
  }
  mount(t) {
    var n;
    ((this.current = t),
      VN.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, s) => this.bindToMotionValue(s, r)),
      e2.current || IN(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Xd.current),
      (n = this.parent) == null || n.addChild(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      Xt(this.notifyUpdate),
      Xt(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Si.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (o) => {
      ((this.latestValues[t] = o),
        this.props.onUpdate && ie.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let i;
    (window.MotionCheckAppearSync &&
      (i = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (s(), i && i(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in fi) {
      const n = fi[t];
      if (!n) continue;
      const { isEnabled: r, Feature: s } = n;
      if (
        (!this.features[t] &&
          s &&
          r(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ne();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < _0.length; r++) {
      const s = _0[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    ((this.prevMotionValues = FN(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ut(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == "string" && (Wx(r) || Kx(r))
          ? (r = parseFloat(r))
          : !Y4(r) && vr.test(n) && (r = jw(t, n)),
        this.setBaseTarget(t, Pe(r) ? r.get() : r)),
      Pe(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var i;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = Xh(
        this.props,
        n,
        (i = this.presenceContext) == null ? void 0 : i.custom,
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Pe(s)
      ? s
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Th()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Bh.render(this.render);
  }
}
class t2 extends _N {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = T4));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Pe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function n2(e, { style: t, vars: n }, r, s) {
  const i = e.style;
  let o;
  for (o in t) i[o] = t[o];
  s == null || s.applyProjectionStyles(i, r);
  for (o in n) i.setProperty(o, n[o]);
}
function zN(e) {
  return window.getComputedStyle(e);
}
class $N extends t2 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = n2));
  }
  readValueFromInstance(t, n) {
    var r;
    if (Si.has(n))
      return (r = this.projection) != null && r.isProjecting ? zd(n) : HP(t, n);
    {
      const s = zN(t),
        i = (iw(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Jw(t, n);
  }
  build(t, n, r) {
    Yh(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return qh(t, n, r);
  }
}
const r2 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function BN(e, t, n, r) {
  n2(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(r2.has(s) ? s : Zh(s), t.attrs[s]);
}
class UN extends t2 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ne));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Si.has(n)) {
      const r = Nw(n);
      return (r && r.default) || 0;
    }
    return ((n = r2.has(n) ? n : Zh(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Kw(t, n, r);
  }
  build(t, n, r) {
    Bw(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, s) {
    BN(t, n, r, s);
  }
  mount(t) {
    ((this.isSVGTag = Ww(t.tagName)), super.mount(t));
  }
}
const WN = (e, t) =>
  Gh(e) ? new UN(t) : new $N(t, { allowProjection: e !== x.Fragment });
function Bs(e, t, n) {
  const r = e.getProps();
  return Xh(r, t, n !== void 0 ? n : r.custom, e);
}
const qd = (e) => Array.isArray(e);
function HN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ut(n));
}
function KN(e) {
  return qd(e) ? e[e.length - 1] || 0 : e;
}
function YN(e, t) {
  const n = Bs(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = KN(i[o]);
    HN(e, o, a);
  }
}
function QN(e) {
  return !!(Pe(e) && e.add);
}
function Zd(e, t) {
  const n = e.getValue("willChange");
  if (QN(n)) return n.add(t);
  if (!n && Nn.WillChange) {
    const r = new Nn.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function s2(e) {
  return e.props[Yw];
}
const GN = (e) => e !== null;
function XN(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(GN),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const qN = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  ZN = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  JN = { type: "keyframes", duration: 0.8 },
  ej = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  tj = (e, { keyframes: t }) =>
    t.length > 2
      ? JN
      : Si.has(e)
        ? e.startsWith("scale")
          ? ZN(t[1])
          : qN
        : ej;
function nj({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Jh =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const a = Fh(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - un(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (h) => {
        (t.set(h), a.onUpdate && a.onUpdate(h));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : s,
    };
    (nj(a) || Object.assign(c, tj(e, c)),
      c.duration && (c.duration = un(c.duration)),
      c.repeatDelay && (c.repeatDelay = un(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (Hd(c), c.delay === 0 && (f = !0)),
      (Nn.instantAnimations || Nn.skipAnimations) &&
        ((f = !0), Hd(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      f && !i && t.get() !== void 0)
    ) {
      const h = XN(c.keyframes, a);
      if (h !== void 0) {
        ie.update(() => {
          (c.onUpdate(h), c.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new lu(c) : new h4(c);
  };
function rj({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function i2(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: o, ...a } = t;
  r && (i = r);
  const l = [],
    u = s && e.animationState && e.animationState.getState()[s];
  for (const c in a) {
    const f = e.getValue(c, e.latestValues[c] ?? null),
      h = a[c];
    if (h === void 0 || (u && rj(u, c))) continue;
    const p = { delay: n, ...Fh(i || {}, c) },
      b = f.get();
    if (
      b !== void 0 &&
      !f.isAnimating &&
      !Array.isArray(h) &&
      h === b &&
      !p.velocity
    )
      continue;
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const g = s2(e);
      if (g) {
        const m = window.MotionHandoffAnimation(g, c, ie);
        m !== null && ((p.startTime = m), (y = !0));
      }
    }
    (Zd(e, c),
      f.start(
        Jh(c, f, h, e.shouldReduceMotion && Tw.has(c) ? { type: !1 } : p, e, y),
      ));
    const w = f.animation;
    w && l.push(w);
  }
  return (
    o &&
      Promise.all(l).then(() => {
        ie.update(() => {
          o && YN(e, o);
        });
      }),
    l
  );
}
function o2(e, t, n, r = 0, s = 1) {
  const i = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    o = e.size,
    a = (o - 1) * r;
  return typeof n == "function" ? n(i, o) : s === 1 ? i * r : a - i * r;
}
function Jd(e, t, n = {}) {
  var l;
  const r = Bs(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: s = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = r ? () => Promise.all(i2(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = s;
            return sj(e, t, u, c, f, h, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [i, o] : [o, i];
    return u().then(() => c());
  } else return Promise.all([i(), o(n.delay)]);
}
function sj(e, t, n = 0, r = 0, s = 0, i = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    (l.notify("AnimationStart", t),
      a.push(
        Jd(l, t, {
          ...o,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            o2(e.variantChildren, l, r, s, i),
        }).then(() => l.notify("AnimationComplete", t)),
      ));
  return Promise.all(a);
}
function ij(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => Jd(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = Jd(e, t, n);
  else {
    const s = typeof t == "function" ? Bs(e, t, n.custom) : t;
    r = Promise.all(i2(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function a2(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const oj = Kh.length;
function l2(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? l2(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < oj; n++) {
    const r = Kh[n],
      s = e.props[r];
    (No(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const aj = [...Hh].reverse(),
  lj = Hh.length;
function uj(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => ij(e, n, r)));
}
function cj(e) {
  let t = uj(e),
    n = z0(),
    r = !0;
  const s = (l) => (u, c) => {
    var h;
    const f = Bs(
      e,
      c,
      l === "exit"
        ? (h = e.presenceContext) == null
          ? void 0
          : h.custom
        : void 0,
    );
    if (f) {
      const { transition: p, transitionEnd: b, ...y } = f;
      u = { ...u, ...y, ...b };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = l2(e.parent) || {},
      f = [],
      h = new Set();
    let p = {},
      b = 1 / 0;
    for (let w = 0; w < lj; w++) {
      const g = aj[w],
        m = n[g],
        v = u[g] !== void 0 ? u[g] : c[g],
        S = No(v),
        C = g === l ? m.isActive : null;
      C === !1 && (b = w);
      let T = v === c[g] && v !== u[g] && S;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (m.protectedKeys = { ...p }),
        (!m.isActive && C === null) ||
          (!v && !m.prevProp) ||
          cu(v) ||
          typeof v == "boolean")
      )
        continue;
      const k = dj(m.prevProp, v);
      let P = k || (g === l && m.isActive && !T && S) || (w > b && S),
        A = !1;
      const M = Array.isArray(v) ? v : [v];
      let z = M.reduce(s(g), {});
      C === !1 && (z = {});
      const { prevResolvedValues: V = {} } = m,
        K = { ...V, ...z },
        O = ($) => {
          ((P = !0),
            h.has($) && ((A = !0), h.delete($)),
            (m.needsAnimating[$] = !0));
          const j = e.getValue($);
          j && (j.liveStyle = !1);
        };
      for (const $ in K) {
        const j = z[$],
          R = V[$];
        if (p.hasOwnProperty($)) continue;
        let I = !1;
        (qd(j) && qd(R) ? (I = !a2(j, R)) : (I = j !== R),
          I
            ? j != null
              ? O($)
              : h.add($)
            : j !== void 0 && h.has($)
              ? O($)
              : (m.protectedKeys[$] = !0));
      }
      ((m.prevProp = v),
        (m.prevResolvedValues = z),
        m.isActive && (p = { ...p, ...z }),
        r && e.blockInitialAnimation && (P = !1));
      const q = T && k;
      P &&
        (!q || A) &&
        f.push(
          ...M.map(($) => {
            const j = { type: g };
            if (
              typeof $ == "string" &&
              r &&
              !q &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: R } = e,
                I = Bs(R, $);
              if (R.enteringChildren && I) {
                const { delayChildren: Y } = I.transition || {};
                j.delay = o2(R.enteringChildren, e, Y);
              }
            }
            return { animation: $, options: j };
          }),
        );
    }
    if (h.size) {
      const w = {};
      if (typeof u.initial != "boolean") {
        const g = Bs(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (w.transition = g.transition);
      }
      (h.forEach((g) => {
        const m = e.getBaseTarget(g),
          v = e.getValue(g);
        (v && (v.liveStyle = !0), (w[g] = m ?? null));
      }),
        f.push({ animation: w }));
    }
    let y = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (y = !1),
      (r = !1),
      y ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    ((f = e.variantChildren) == null ||
      f.forEach((h) => {
        var p;
        return (p = h.animationState) == null ? void 0 : p.setActive(l, u);
      }),
      (n[l].isActive = u));
    const c = o(l);
    for (const h in n) n[h].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = z0();
    },
  };
}
function dj(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !a2(t, e) : !1;
}
function kr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function z0() {
  return {
    animate: kr(!0),
    whileInView: kr(),
    whileHover: kr(),
    whileTap: kr(),
    whileDrag: kr(),
    whileFocus: kr(),
    exit: kr(),
  };
}
class Sr {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class fj extends Sr {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = cj(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    cu(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let hj = 0;
class pj extends Sr {
  constructor() {
    (super(...arguments), (this.id = hj++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      s.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const mj = { animation: { Feature: fj }, exit: { Feature: pj } };
function jo(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Qo(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const gj = (e) => (t) => Uh(t) && e(t, Qo(t));
function no(e, t, n, r) {
  return jo(e, t, gj(n), r);
}
const u2 = 1e-4,
  yj = 1 - u2,
  vj = 1 + u2,
  c2 = 0.01,
  xj = 0 - c2,
  wj = 0 + c2;
function Qe(e) {
  return e.max - e.min;
}
function bj(e, t, n) {
  return Math.abs(e - t) <= n;
}
function $0(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = ye(t.min, t.max, e.origin)),
    (e.scale = Qe(n) / Qe(t)),
    (e.translate = ye(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= yj && e.scale <= vj) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= xj && e.translate <= wj) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function ro(e, t, n, r) {
  ($0(e.x, t.x, n.x, r ? r.originX : void 0),
    $0(e.y, t.y, n.y, r ? r.originY : void 0));
}
function B0(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Qe(t)));
}
function Sj(e, t, n) {
  (B0(e.x, t.x, n.x), B0(e.y, t.y, n.y));
}
function U0(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Qe(t)));
}
function Ml(e, t, n) {
  (U0(e.x, t.x, n.x), U0(e.y, t.y, n.y));
}
function bt(e) {
  return [e("x"), e("y")];
}
const d2 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  W0 = (e, t) => Math.abs(e - t);
function Cj(e, t) {
  const n = W0(e.x, t.x),
    r = W0(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class f2 {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: s = window,
      dragSnapToOrigin: i = !1,
      distanceThreshold: o = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = ic(this.lastMoveEventInfo, this.history),
          p = this.startEvent !== null,
          b = Cj(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!p && !b) return;
        const { point: y } = h,
          { timestamp: w } = Ae;
        this.history.push({ ...y, timestamp: w });
        const { onStart: g, onMove: m } = this.handlers;
        (p ||
          (g && g(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, h));
      }),
      (this.handlePointerMove = (h, p) => {
        ((this.lastMoveEvent = h),
          (this.lastMoveEventInfo = sc(p, this.transformPagePoint)),
          ie.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (h, p) => {
        this.end();
        const { onEnd: b, onSessionEnd: y, resumeAnimation: w } = this.handlers;
        if (
          (this.dragSnapToOrigin && w && w(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const g = ic(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : sc(p, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && b && b(h, g), y && y(h, g));
      }),
      !Uh(t))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = o),
      (this.contextWindow = s || window));
    const a = Qo(t),
      l = sc(a, this.transformPagePoint),
      { point: u } = l,
      { timestamp: c } = Ae;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: f } = n;
    (f && f(t, ic(l, this.history)),
      (this.removeListeners = Uo(
        no(this.contextWindow, "pointermove", this.handlePointerMove),
        no(this.contextWindow, "pointerup", this.handlePointerUp),
        no(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Xt(this.updatePoint));
  }
}
function sc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function H0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ic({ point: e }, t) {
  return {
    point: e,
    delta: H0(e, h2(t)),
    offset: H0(e, Ej(t)),
    velocity: Tj(t, 0.1),
  };
}
function Ej(e) {
  return e[0];
}
function h2(e) {
  return e[e.length - 1];
}
function Tj(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = h2(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > un(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Pt(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function kj(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ye(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ye(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function K0(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Pj(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: K0(e.x, n, s), y: K0(e.y, t, r) };
}
function Y0(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function Nj(e, t) {
  return { x: Y0(e.x, t.x), y: Y0(e.y, t.y) };
}
function jj(e, t) {
  let n = 0.5;
  const r = Qe(e),
    s = Qe(t);
  return (
    s > r
      ? (n = di(t.min, t.max - r, e.min))
      : r > s && (n = di(e.min, e.max - s, t.min)),
    fn(0, 1, n)
  );
}
function Rj(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const ef = 0.35;
function Mj(e = ef) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = ef),
    { x: Q0(e, "left", "right"), y: Q0(e, "top", "bottom") }
  );
}
function Q0(e, t, n) {
  return { min: G0(e, t), max: G0(e, n) };
}
function G0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Aj = new WeakMap();
class Lj {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ne()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const i = (f) => {
        const { dragSnapToOrigin: h } = this.getProps();
        (h ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Qo(f).point));
      },
      o = (f, h) => {
        const { drag: p, dragPropagation: b, onDragStart: y } = this.getProps();
        if (
          p &&
          !b &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = N4(p)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          bt((g) => {
            let m = this.getAxisMotionValue(g).get() || 0;
            if (cn.test(m)) {
              const { projection: v } = this.visualElement;
              if (v && v.layout) {
                const S = v.layout.layoutBox[g];
                S && (m = Qe(S) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[g] = m;
          }),
          y && ie.postRender(() => y(f, h)),
          Zd(this.visualElement, "transform"));
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      a = (f, h) => {
        ((this.latestPointerEvent = f), (this.latestPanInfo = h));
        const {
          dragPropagation: p,
          dragDirectionLock: b,
          onDirectionLock: y,
          onDrag: w,
        } = this.getProps();
        if (!p && !this.openDragLock) return;
        const { offset: g } = h;
        if (b && this.currentDirection === null) {
          ((this.currentDirection = Dj(g)),
            this.currentDirection !== null && y && y(this.currentDirection));
          return;
        }
        (this.updateAxis("x", h.point, g),
          this.updateAxis("y", h.point, g),
          this.visualElement.render(),
          w && w(f, h));
      },
      l = (f, h) => {
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          this.stop(f, h),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () =>
        bt((f) => {
          var h;
          return (
            this.getAnimationState(f) === "paused" &&
            ((h = this.getAxisMotionValue(f).animation) == null
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new f2(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: d2(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      s = n || this.latestPanInfo,
      i = this.isDragging;
    if ((this.cancel(), !i || !s || !r)) return;
    const { velocity: o } = s;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && ie.postRender(() => a(r, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !Ea(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = kj(o, this.constraints[t], this.elastic[t])),
      i.set(o));
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (i = this.visualElement.projection) == null
            ? void 0
            : i.layout,
      s = this.constraints;
    (t && js(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = Pj(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = Mj(n)),
      s !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        bt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = Rj(r.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !js(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = ON(r, s.root, this.visualElement.getTransformPagePoint());
    let o = Nj(s.layout.layoutBox, i);
    if (n) {
      const a = n(AN(o));
      ((this.hasMutatedConstraints = !!a), a && (o = Xw(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = bt((c) => {
        if (!Ea(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        o && (f = { min: 0, max: 0 });
        const h = s ? 200 : 1e6,
          p = s ? 40 : 1e7,
          b = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: h,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(c, b);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Zd(this.visualElement, t),
      r.start(Jh(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    bt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    bt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    bt((n) => {
      const { drag: r } = this.getProps();
      if (!Ea(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - ye(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!js(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    bt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = jj({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      bt((o) => {
        if (!Ea(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(ye(l, u, s[o]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Aj.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = no(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        js(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      ie.read(r));
    const o = jo(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (bt((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (o(), n(), i(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = ef,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Ea(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Dj(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class Oj extends Sr {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = at),
      (this.removeListeners = at),
      (this.controls = new Lj(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || at));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const X0 = (e) => (t, n) => {
  e && ie.postRender(() => e(t, n));
};
class Ij extends Sr {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = at));
  }
  onPointerDown(t) {
    this.session = new f2(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: d2(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: X0(t),
      onStart: X0(n),
      onMove: r,
      onEnd: (i, o) => {
        (delete this.session, s && ie.postRender(() => s(i, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = no(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const Qa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let oc = !1;
class Vj extends x.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    (i &&
      (n.group && n.group.add(i),
      r && r.register && s && r.register(i),
      oc && i.root.didUpdate(),
      i.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      i.setOptions({
        ...i.options,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Qa.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = i),
        (oc = !0),
        s || t.layoutDependency !== n || n === void 0 || t.isPresent !== i
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              ie.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Bh.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    ((oc = !0),
      s &&
        (s.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(s),
        r && r.deregister && r.deregister(s)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function p2(e) {
  const [t, n] = Iw(),
    r = x.useContext(wh);
  return d.jsx(Vj, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(Qw),
    isPresent: t,
    safeToRemove: n,
  });
}
function Fj(e, t, n) {
  const r = Pe(e) ? e : Ut(e);
  return (r.start(Jh("", r, t, n)), r.animation);
}
const _j = (e, t) => e.depth - t.depth;
class zj {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Sh(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Ch(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(_j),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function $j(e, t) {
  const n = rt.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (Xt(r), e(i - t));
    };
  return (ie.setup(r, !0), () => Xt(r));
}
const m2 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Bj = m2.length,
  q0 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Z0 = (e) => typeof e == "number" || W.test(e);
function Uj(e, t, n, r, s, i) {
  s
    ? ((e.opacity = ye(0, n.opacity ?? 1, Wj(r))),
      (e.opacityExit = ye(t.opacity ?? 1, 0, Hj(r))))
    : i && (e.opacity = ye(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < Bj; o++) {
    const a = `border${m2[o]}Radius`;
    let l = J0(t, a),
      u = J0(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Z0(l) === Z0(u)
        ? ((e[a] = Math.max(ye(q0(l), q0(u), r), 0)),
          (cn.test(u) || cn.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = ye(t.rotate || 0, n.rotate || 0, r));
}
function J0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Wj = g2(0, 0.5, Jx),
  Hj = g2(0.5, 0.95, at);
function g2(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(di(e, t, r)));
}
function eg(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function It(e, t) {
  (eg(e.x, t.x), eg(e.y, t.y));
}
function tg(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function ng(e, t, n, r, s) {
  return (
    (e -= t),
    (e = Rl(e, 1 / n, r)),
    s !== void 0 && (e = Rl(e, 1 / s, r)),
    e
  );
}
function Kj(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (cn.test(t) &&
      ((t = parseFloat(t)), (t = ye(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = ye(i.min, i.max, r);
  (e === i && (a -= t),
    (e.min = ng(e.min, t, n, a, s)),
    (e.max = ng(e.max, t, n, a, s)));
}
function rg(e, t, [n, r, s], i, o) {
  Kj(e, t[n], t[r], t[s], t.scale, i, o);
}
const Yj = ["x", "scaleX", "originX"],
  Qj = ["y", "scaleY", "originY"];
function sg(e, t, n, r) {
  (rg(e.x, t, Yj, n ? n.x : void 0, r ? r.x : void 0),
    rg(e.y, t, Qj, n ? n.y : void 0, r ? r.y : void 0));
}
function ig(e) {
  return e.translate === 0 && e.scale === 1;
}
function y2(e) {
  return ig(e.x) && ig(e.y);
}
function og(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Gj(e, t) {
  return og(e.x, t.x) && og(e.y, t.y);
}
function ag(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function v2(e, t) {
  return ag(e.x, t.x) && ag(e.y, t.y);
}
function lg(e) {
  return Qe(e.x) / Qe(e.y);
}
function ug(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class Xj {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Sh(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Ch(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function qj(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: h,
      skewX: p,
      skewY: b,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      p && (r += `skewX(${p}deg) `),
      b && (r += `skewY(${b}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const ac = ["", "X", "Y", "Z"],
  Zj = 1e3;
let Jj = 0;
function lc(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function x2(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = s2(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ie, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && x2(r);
}
function w2({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = Jj++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(nR),
            this.nodes.forEach(oR),
            this.nodes.forEach(aR),
            this.nodes.forEach(rR));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new zj());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Th()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      ((this.isSVG = Wh(o) && !U4(o)), (this.instance = o));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          f = 0;
        const h = () => (this.root.updateBlockedByResize = !1);
        (ie.read(() => {
          f = window.innerWidth;
        }),
          e(o, () => {
            const p = window.innerWidth;
            p !== f &&
              ((f = p),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = $j(h, 250)),
              Qa.hasAnimatedSinceResize &&
                ((Qa.hasAnimatedSinceResize = !1), this.nodes.forEach(fg)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: h,
              layout: p,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const b =
                  this.options.transition || u.getDefaultTransition() || fR,
                { onLayoutAnimationStart: y, onLayoutAnimationComplete: w } =
                  u.getProps(),
                g = !this.targetLayout || !v2(this.targetLayout, p),
                m = !f && h;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                m ||
                (f && (g || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const v = { ...Fh(b, "layout"), onPlay: y, onComplete: w };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((v.delay = 0), (v.type = !1)),
                  this.startAnimation(v),
                  this.setAnimationOrigin(c, m));
              } else
                (f || fg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = p;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Xt(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(lR),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          x2(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        ((f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(cg));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(dg);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(iR),
            this.nodes.forEach(eR),
            this.nodes.forEach(tR))
          : this.nodes.forEach(dg),
        this.clearAllSnapshots());
      const a = rt.now();
      ((Ae.delta = fn(0, 1e3 / 60, a - Ae.timestamp)),
        (Ae.timestamp = a),
        (Ae.isProcessing = !0),
        Xu.update.process(Ae),
        Xu.preRender.process(Ae),
        Xu.render.process(Ae),
        (Ae.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Bh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(sR), this.sharedNodes.forEach(uR));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ie.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Qe(this.snapshot.measuredBox.x) &&
          !Qe(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = Ne()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !y2(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || Mr(this.latestValues) || c) &&
        (s(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        hR(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: o } = this.options;
      if (!o) return Ne();
      const a = o.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(pR)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Rs(a.x, c.offset.x), Rs(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Ne();
      if ((It(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: h } = c;
        c !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && It(a, o), Rs(a.x, f.offset.x), Rs(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = Ne();
      It(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Ms(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Mr(c.latestValues) && Ms(l, c.latestValues));
      }
      return (Mr(this.latestValues) && Ms(l, this.latestValues), l);
    }
    removeTransform(o) {
      const a = Ne();
      It(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Mr(u.latestValues)) continue;
        Qd(u.latestValues) && u.updateSnapshot();
        const c = Ne(),
          f = u.measurePageBox();
        (It(c, f),
          sg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (Mr(this.latestValues) && sg(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ae.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var p;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((p = this.parent) != null && p.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!this.layout || !(c || f)) return;
      this.resolvedRelativeTargetAt = Ae.timestamp;
      const h = this.getClosestProjectingParent();
      (h &&
        this.linkedParentVersion !== h.layoutVersion &&
        !h.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (h && h.layout
            ? this.createRelativeTarget(
                h,
                this.layout.layoutBox,
                h.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ne()), (this.targetWithTransforms = Ne())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Sj(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : It(this.target, this.layout.layoutBox),
                Zw(this.target, this.targetDelta))
              : It(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(h, this.target, h.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Qd(this.parent.latestValues) ||
          qw(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(o, a, l) {
      ((this.relativeParent = o),
        (this.linkedParentVersion = o.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Ne()),
        (this.relativeTargetOrigin = Ne()),
        Ml(this.relativeTargetOrigin, a, l),
        It(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var b;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((b = this.parent) != null && b.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Ae.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      It(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      (DN(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = Ne())));
      const { target: p } = o;
      if (!p) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (tg(this.prevProjectionDelta.x, this.projectionDelta.x),
          tg(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ro(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== h ||
          !ug(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !ug(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = As()),
        (this.projectionDelta = As()),
        (this.projectionDeltaWithTransform = As()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = As();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const h = Ne(),
        p = l ? l.source : void 0,
        b = this.layout ? this.layout.source : void 0,
        y = p !== b,
        w = this.getStack(),
        g = !w || w.members.length <= 1,
        m = !!(y && !g && this.options.crossfade === !0 && !this.path.some(dR));
      this.animationProgress = 0;
      let v;
      ((this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        (hg(f.x, o.x, C),
          hg(f.y, o.y, C),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ml(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            cR(this.relativeTarget, this.relativeTargetOrigin, h, C),
            v && Gj(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = Ne()),
            It(v, this.relativeTarget)),
          y &&
            ((this.animationValues = c), Uj(c, u, this.latestValues, C, m, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      var a, l, u;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (Xt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ie.update(() => {
          ((Qa.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Ut(0)),
            (this.currentAnimation = Fj(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Zj),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          b2(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ne();
          const f = Qe(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + f));
          const h = Qe(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + h));
        }
        (It(a, l),
          Ms(a, c),
          ro(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new Xj()),
        this.sharedNodes.get(o).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && lc("z", o, u, this.animationValues);
      for (let c = 0; c < ac.length; c++)
        (lc(`rotate${ac[c]}`, o, u, this.animationValues),
          lc(`skew${ac[c]}`, o, u, this.animationValues));
      o.render();
      for (const c in u)
        (o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = Ya(a == null ? void 0 : a.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = Ya(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !Mr(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let f = qj(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (f = l(c, f)), (o.transform = f));
      const { x: h, y: p } = this.projectionDelta;
      ((o.transformOrigin = `${h.origin * 100}% ${p.origin * 100}% 0`),
        u.animationValues
          ? (o.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (o.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const b in Yd) {
        if (c[b] === void 0) continue;
        const { correct: y, applyTo: w, isCSSVariable: g } = Yd[b],
          m = f === "none" ? c[b] : y(c[b], u);
        if (w) {
          const v = w.length;
          for (let S = 0; S < v; S++) o[w[S]] = m;
        } else
          g ? (this.options.visualElement.renderState.vars[b] = m) : (o[b] = m);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          u === this ? Ya(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(cg),
        this.root.sharedNodes.clear());
    }
  };
}
function eR(e) {
  e.updateLayout();
}
function tR(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = t.source !== e.layout.source;
    i === "size"
      ? bt((f) => {
          const h = o ? t.measuredBox[f] : t.layoutBox[f],
            p = Qe(h);
          ((h.min = r[f].min), (h.max = h.min + p));
        })
      : b2(i, t.layoutBox, r) &&
        bt((f) => {
          const h = o ? t.measuredBox[f] : t.layoutBox[f],
            p = Qe(r[f]);
          ((h.max = h.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + p)));
        });
    const a = As();
    ro(a, r, t.layoutBox);
    const l = As();
    o ? ro(l, e.applyTransform(s, !0), t.measuredBox) : ro(l, r, t.layoutBox);
    const u = !y2(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: p } = f;
        if (h && p) {
          const b = Ne();
          Ml(b, t.layoutBox, h.layoutBox);
          const y = Ne();
          (Ml(y, r, p.layoutBox),
            v2(b, y) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = b),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function nR(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function rR(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function sR(e) {
  e.clearSnapshot();
}
function cg(e) {
  e.clearMeasurements();
}
function dg(e) {
  e.isLayoutDirty = !1;
}
function iR(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function fg(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function oR(e) {
  e.resolveTargetDelta();
}
function aR(e) {
  e.calcProjection();
}
function lR(e) {
  e.resetSkewAndRotation();
}
function uR(e) {
  e.removeLeadSnapshot();
}
function hg(e, t, n) {
  ((e.translate = ye(t.translate, 0, n)),
    (e.scale = ye(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function pg(e, t, n, r) {
  ((e.min = ye(t.min, n.min, r)), (e.max = ye(t.max, n.max, r)));
}
function cR(e, t, n, r) {
  (pg(e.x, t.x, n.x, r), pg(e.y, t.y, n.y, r));
}
function dR(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const fR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  mg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  gg = mg("applewebkit/") && !mg("chrome/") ? Math.round : at;
function yg(e) {
  ((e.min = gg(e.min)), (e.max = gg(e.max)));
}
function hR(e) {
  (yg(e.x), yg(e.y));
}
function b2(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !bj(lg(t), lg(n), 0.2))
  );
}
function pR(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const mR = w2({
    attachResizeListener: (e, t) => jo(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  uc = { current: void 0 },
  S2 = w2({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!uc.current) {
        const e = new mR({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (uc.current = e));
      }
      return uc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  gR = {
    pan: { Feature: Ij },
    drag: { Feature: Oj, ProjectionNode: S2, MeasureLayout: p2 },
  };
function vg(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && ie.postRender(() => i(t, Qo(t)));
}
class yR extends Sr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = j4(
        t,
        (n, r) => (vg(this.node, r, "Start"), (s) => vg(this.node, s, "End")),
      ));
  }
  unmount() {}
}
class vR extends Sr {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Uo(
      jo(this.node.current, "focus", () => this.onFocus()),
      jo(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function xg(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && ie.postRender(() => i(t, Qo(t)));
}
class xR extends Sr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = L4(
        t,
        (n, r) => (
          xg(this.node, r, "Start"),
          (s, { success: i }) => xg(this.node, s, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const tf = new WeakMap(),
  cc = new WeakMap(),
  wR = (e) => {
    const t = tf.get(e.target);
    t && t(e);
  },
  bR = (e) => {
    e.forEach(wR);
  };
function SR({ root: e, ...t }) {
  const n = e || document;
  cc.has(n) || cc.set(n, {});
  const r = cc.get(n),
    s = JSON.stringify(t);
  return (
    r[s] || (r[s] = new IntersectionObserver(bR, { root: e, ...t })),
    r[s]
  );
}
function CR(e, t, n) {
  const r = SR(t);
  return (
    tf.set(e, n),
    r.observe(e),
    () => {
      (tf.delete(e), r.unobserve(e));
    }
  );
}
const ER = { some: 0, all: 1 };
class TR extends Sr {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : ER[s],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          h = u ? c : f;
        h && h(l);
      };
    return CR(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(kR(t, n)) && this.startObserver();
  }
  unmount() {}
}
function kR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const PR = {
    inView: { Feature: TR },
    tap: { Feature: xR },
    focus: { Feature: vR },
    hover: { Feature: yR },
  },
  NR = { layout: { ProjectionNode: S2, MeasureLayout: p2 } },
  jR = { ...mj, ...PR, ...gR, ...NR },
  N = MN(jR, WN),
  RR = 50,
  wg = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  MR = () => ({ time: 0, x: wg(), y: wg() }),
  AR = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function bg(e, t, n, r) {
  const s = n[t],
    { length: i, position: o } = AR[t],
    a = s.current,
    l = n.time;
  ((s.current = e[`scroll${o}`]),
    (s.scrollLength = e[`scroll${i}`] - e[`client${i}`]),
    (s.offset.length = 0),
    (s.offset[0] = 0),
    (s.offset[1] = s.scrollLength),
    (s.progress = di(0, s.scrollLength, s.current)));
  const u = r - l;
  s.velocity = u > RR ? 0 : kh(s.current - a, u);
}
function LR(e, t, n) {
  (bg(e, "x", t, n), bg(e, "y", t, n), (t.time = n));
}
function DR(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if ($h(r))
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === "svg") {
      const s = r.getBoundingClientRect();
      r = r.parentElement;
      const i = r.getBoundingClientRect();
      ((n.x += s.left - i.left), (n.y += s.top - i.top));
    } else if (r instanceof SVGGraphicsElement) {
      const { x: s, y: i } = r.getBBox();
      ((n.x += s), (n.y += i));
      let o = null,
        a = r.parentNode;
      for (; !o; ) (a.tagName === "svg" && (o = a), (a = r.parentNode));
      r = o;
    } else break;
  return n;
}
const nf = { start: 0, center: 0.5, end: 1 };
function Sg(e, t, n = 0) {
  let r = 0;
  if ((e in nf && (e = nf[e]), typeof e == "string")) {
    const s = parseFloat(e);
    e.endsWith("px")
      ? (r = s)
      : e.endsWith("%")
        ? (e = s / 100)
        : e.endsWith("vw")
          ? (r = (s / 100) * document.documentElement.clientWidth)
          : e.endsWith("vh")
            ? (r = (s / 100) * document.documentElement.clientHeight)
            : (e = s);
  }
  return (typeof e == "number" && (r = t * e), n + r);
}
const OR = [0, 0];
function IR(e, t, n, r) {
  let s = Array.isArray(e) ? e : OR,
    i = 0,
    o = 0;
  return (
    typeof e == "number"
      ? (s = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (s = e.split(" ")) : (s = [e, nf[e] ? e : "0"])),
    (i = Sg(s[0], n, r)),
    (o = Sg(s[1], t)),
    i - o
  );
}
const VR = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  FR = { x: 0, y: 0 };
function _R(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function zR(e, t, n) {
  const { offset: r = VR.All } = n,
    { target: s = e, axis: i = "y" } = n,
    o = i === "y" ? "height" : "width",
    a = s !== e ? DR(s, e) : FR,
    l = s === e ? { width: e.scrollWidth, height: e.scrollHeight } : _R(s),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[i].offset.length = 0;
  let c = !t[i].interpolate;
  const f = r.length;
  for (let h = 0; h < f; h++) {
    const p = IR(r[h], u[o], l[o], a[i]);
    (!c && p !== t[i].interpolatorOffsets[h] && (c = !0), (t[i].offset[h] = p));
  }
  (c &&
    ((t[i].interpolate = Dh(t[i].offset, mw(r), { clamp: !1 })),
    (t[i].interpolatorOffsets = [...t[i].offset])),
    (t[i].progress = fn(0, 1, t[i].interpolate(t[i].current))));
}
function $R(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      ((n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function BR(e, t, n, r = {}) {
  return {
    measure: (s) => {
      ($R(e, r.target, n), LR(e, n, s), (r.offset || r.target) && zR(e, n, r));
    },
    notify: () => t(n),
  };
}
const Ii = new WeakMap(),
  Cg = new WeakMap(),
  dc = new WeakMap(),
  Eg = (e) => (e === document.scrollingElement ? window : e);
function C2(e, { container: t = document.scrollingElement, ...n } = {}) {
  if (!t) return at;
  let r = dc.get(t);
  r || ((r = new Set()), dc.set(t, r));
  const s = MR(),
    i = BR(t, e, s, n);
  if ((r.add(i), !Ii.has(t))) {
    const a = () => {
        for (const f of r) f.measure(Ae.timestamp);
        ie.preUpdate(l);
      },
      l = () => {
        for (const f of r) f.notify();
      },
      u = () => ie.read(a);
    Ii.set(t, u);
    const c = Eg(t);
    (window.addEventListener("resize", u, { passive: !0 }),
      t !== document.documentElement && Cg.set(t, B4(t, u)),
      c.addEventListener("scroll", u, { passive: !0 }),
      u());
  }
  const o = Ii.get(t);
  return (
    ie.read(o, !1, !0),
    () => {
      var u;
      Xt(o);
      const a = dc.get(t);
      if (!a || (a.delete(i), a.size)) return;
      const l = Ii.get(t);
      (Ii.delete(t),
        l &&
          (Eg(t).removeEventListener("scroll", l),
          (u = Cg.get(t)) == null || u(),
          window.removeEventListener("resize", l)));
    }
  );
}
const Tg = new Map();
function UR(e) {
  const t = { value: 0 },
    n = C2((r) => {
      t.value = r[e.axis].progress * 100;
    }, e);
  return { currentTime: t, cancel: n };
}
function E2({ source: e, container: t, ...n }) {
  const { axis: r } = n;
  e && (t = e);
  const s = Tg.get(t) ?? new Map();
  Tg.set(t, s);
  const i = n.target ?? "self",
    o = s.get(i) ?? {},
    a = r + (n.offset ?? []).join(",");
  return (
    o[a] ||
      (o[a] =
        !n.target && xw()
          ? new ScrollTimeline({ source: t, axis: r })
          : UR({ container: t, ...n })),
    o[a]
  );
}
function WR(e, t) {
  const n = E2(t);
  return e.attachTimeline({
    timeline: t.target ? void 0 : n,
    observe: (r) => (
      r.pause(),
      Ow((s) => {
        r.time = r.iterationDuration * s;
      }, n)
    ),
  });
}
function HR(e) {
  return e.length === 2;
}
function KR(e, t) {
  return HR(e)
    ? C2((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : Ow(e, E2(t));
}
function YR(
  e,
  { axis: t = "y", container: n = document.scrollingElement, ...r } = {},
) {
  if (!n) return at;
  const s = { axis: t, container: n, ...r };
  return typeof e == "function" ? KR(e, s) : WR(e, s);
}
const QR = () => ({
    scrollX: Ut(0),
    scrollY: Ut(0),
    scrollXProgress: Ut(0),
    scrollYProgress: Ut(0),
  }),
  Ta = (e) => (e ? !e.current : !1);
function ct({ container: e, target: t, ...n } = {}) {
  const r = xi(QR),
    s = x.useRef(null),
    i = x.useRef(!1),
    o = x.useCallback(
      () => (
        (s.current = YR(
          (a, { x: l, y: u }) => {
            (r.scrollX.set(l.current),
              r.scrollXProgress.set(l.progress),
              r.scrollY.set(u.current),
              r.scrollYProgress.set(u.progress));
          },
          {
            ...n,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          },
        )),
        () => {
          var a;
          (a = s.current) == null || a.call(s);
        }
      ),
      [e, t, JSON.stringify(n.offset)],
    );
  return (
    ou(() => {
      if (((i.current = !1), Ta(e) || Ta(t))) {
        i.current = !0;
        return;
      } else return o();
    }, [o]),
    x.useEffect(() => {
      if (i.current) return (ci(!Ta(e)), ci(!Ta(t)), o());
    }, [o]),
    r
  );
}
function Al(e) {
  const t = xi(() => Ut(e)),
    { isStatic: n } = x.useContext(Ko);
  if (n) {
    const [, r] = x.useState(e);
    x.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function ep(e, t) {
  const n = Al(t()),
    r = () => n.set(t());
  return (
    r(),
    ou(() => {
      const s = () => ie.preRender(r, !1, !0),
        i = e.map((o) => o.on("change", s));
      return () => {
        (i.forEach((o) => o()), Xt(r));
      };
    }),
    n
  );
}
function kg(e, ...t) {
  const n = e.length;
  function r() {
    let s = "";
    for (let i = 0; i < n; i++) {
      s += e[i];
      const o = t[i];
      o && (s += Pe(o) ? o.get() : o);
    }
    return s;
  }
  return ep(t.filter(Pe), r);
}
function GR(e) {
  ((to.current = []), e());
  const t = ep(to.current, e);
  return ((to.current = void 0), t);
}
function Q(e, t, n, r) {
  if (typeof e == "function") return GR(e);
  const s = typeof t == "function" ? t : W4(t, n, r);
  return Array.isArray(e) ? Pg(e, s) : Pg([e], ([i]) => s(i));
}
function Pg(e, t) {
  const n = xi(() => []);
  return ep(e, () => {
    n.length = 0;
    const r = e.length;
    for (let s = 0; s < r; s++) n[s] = e[s].get();
    return t(n);
  });
}
function XR(e, t = {}) {
  const { isStatic: n } = x.useContext(Ko),
    r = () => (Pe(e) ? e.get() : e);
  if (n) return Q(r);
  const s = Al(r());
  return (x.useInsertionEffect(() => H4(s, e, t), [s, JSON.stringify(t)]), s);
}
const qR = { some: 0, all: 1 };
function ZR(e, t, { root: n, margin: r, amount: s = "some" } = {}) {
  const i = zh(e),
    o = new WeakMap(),
    a = (u) => {
      u.forEach((c) => {
        const f = o.get(c.target);
        if (c.isIntersecting !== !!f)
          if (c.isIntersecting) {
            const h = t(c.target, c);
            typeof h == "function" ? o.set(c.target, h) : l.unobserve(c.target);
          } else typeof f == "function" && (f(c), o.delete(c.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof s == "number" ? s : qR[s],
    });
  return (i.forEach((u) => l.observe(u)), () => l.disconnect());
}
function JR(
  e,
  { root: t, margin: n, amount: r, once: s = !1, initial: i = !1 } = {},
) {
  const [o, a] = x.useState(i);
  return (
    x.useEffect(() => {
      if (!e.current || (s && o)) return;
      const l = () => (a(!0), s ? void 0 : () => a(!1)),
        u = { root: (t && t.current) || void 0, margin: n, amount: r };
      return ZR(e.current, l, u);
    }, [t, e, n, s, r]),
    o
  );
}
const eM = "/assets/logo.ico",
  T2 = x.createContext(void 0),
  tM = ({ children: e }) => {
    const [t, n] = x.useState(!1),
      [r, s] = x.useState(!1),
      [i, o] = x.useState(null),
      [a, l] = x.useState(!1);
    x.useEffect(() => {
      const c = (f) => {
        f.key === "Escape" &&
          t &&
          (n(!1), document.body.classList.remove("sneak-mode-active"));
      };
      return (
        window.addEventListener("keydown", c),
        () => window.removeEventListener("keydown", c)
      );
    }, [t]);
    const u = () => {
      t
        ? (n(!1), l(!1), document.body.classList.remove("sneak-mode-active"))
        : r ||
          (s(!0),
          o(3),
          setTimeout(() => o(2), 1e3),
          setTimeout(() => o(1), 2e3),
          setTimeout(() => {
            (o(null),
              s(!1),
              l(!0),
              document.body.classList.add("sneak-mode-active"),
              setTimeout(() => {
                (n(!0), l(!1));
              }, 1e3));
          }, 3e3));
    };
    return d.jsx(T2.Provider, {
      value: {
        isRaveMode: t,
        isCountingDown: r,
        countdownNumber: i,
        isBassDrop: a,
        toggleRaveMode: u,
      },
      children: e,
    });
  },
  qt = () => {
    const e = x.useContext(T2);
    if (e === void 0)
      throw new Error("useRaveMode must be used within a RaveModeProvider");
    return e;
  },
  Ng = () =>
    d.jsx("svg", {
      className: "w-5 h-5",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: d.jsx("path", {
        d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
      }),
    }),
  nM = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(!1),
      { isRaveMode: s } = qt();
    x.useEffect(() => {
      const a = () => {
        t(window.scrollY > 20);
      };
      return (
        window.addEventListener("scroll", a),
        () => window.removeEventListener("scroll", a)
      );
    }, []);
    const i = [
        { label: "Inventory", href: "#inventory" },
        { label: "Vouches", href: "#vouches" },
      ],
      o = [
        { label: "Shop Dashboard", comingSoon: !0 },
        { label: "Tokenizer Dashboard", comingSoon: !0 },
      ];
    return d.jsx("div", {
      className: "fixed top-6 left-0 right-0 z-50 flex justify-center px-4",
      children: d.jsxs(N.nav, {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        children: [
          d.jsx("div", {
            className: `glass-navbar-enhanced rounded-full px-2 py-2 transition-all duration-500 ${e ? "shadow-2xl shadow-primary/10 border-primary/20" : ""} ${s ? "sneak-navbar" : ""}`,
            children: d.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                d.jsxs("a", {
                  href: "#",
                  className:
                    "flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-muted/30 transition-colors",
                  children: [
                    d.jsx("div", {
                      className:
                        "relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0",
                      children: d.jsx("img", {
                        src: eM,
                        alt: "SneakSolutions",
                        className: `w-full h-full object-cover ${s ? "sneak-logo" : ""}`,
                        style: { objectFit: "cover", objectPosition: "center" },
                      }),
                    }),
                    d.jsx("span", {
                      className: `text-sm font-semibold ${s ? "sneak-text" : ""}`,
                      children: "SneaK",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "hidden md:flex items-center",
                  children: [
                    i.map((a) =>
                      d.jsx(
                        N.a,
                        {
                          href: a.href,
                          className:
                            "nav-link-glow px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-primary/10",
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          children: a.label,
                        },
                        a.label,
                      ),
                    ),

                  ],
                }),
                d.jsx(N.a, {
                  href: "https://discord.gg/UBkCsCMZCk",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: `hidden md:flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ml-4 ${s ? "sneak-btn" : "bg-[#5865F2] hover:bg-[#4752C4]"}`,
                  whileHover: { scale: 1.05, y: -1 },
                  whileTap: { scale: 0.95 },
                  children: d.jsx(Ng, {}),
                }),

                d.jsxs(N.a, {
                  href: "#inventory",
                  className: `hidden md:flex items-center gap-2 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 relative overflow-hidden group ml-2 ${s ? "sneak-btn" : "bg-secondary hover:bg-secondary/80 border border-border"}`,
                  whileHover: { scale: 1.05, y: -1 },
                  whileTap: { scale: 0.95 },
                  children: [
                    d.jsx("span", {
                      className: "relative z-10 font-bold",
                      children: "Browse Shop",
                    }),
                    d.jsx(N.div, {
                      className:
                        "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500",
                    }),
                  ],
                }),
                d.jsx("button", {
                  onClick: () => r(!n),
                  className:
                    "md:hidden p-2 text-foreground rounded-full hover:bg-muted/30 transition-colors",
                  children: n
                    ? d.jsx(I1, { className: "w-5 h-5", strokeWidth: 1.5 })
                    : d.jsx(xC, { className: "w-5 h-5", strokeWidth: 1.5 }),
                }),
              ],
            }),
          }),
          d.jsx(Yo, {
            children:
              n &&
              d.jsx(N.div, {
                initial: { opacity: 0, y: -10, scale: 0.95 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, y: -10, scale: 0.95 },
                transition: { duration: 0.2 },
                className: "md:hidden mt-2 glass-card p-4 rounded-2xl",
                children: d.jsxs("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    i.map((a) =>
                      d.jsx(
                        "a",
                        {
                          href: a.href,
                          onClick: () => r(!1),
                          className:
                            "px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/30",
                          children: a.label,
                        },
                        a.label,
                      ),
                    ),

                    d.jsxs("a", {
                      href: "https://discord.gg/UBkCsCMZCk",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      onClick: () => r(!1),
                      className:
                        "mt-2 bg-[#5865F2] text-white text-sm font-medium text-center py-3 rounded-xl flex items-center justify-center gap-2",
                      children: [d.jsx(Ng, {}), "Join Discord"],
                    }),
                    d.jsx("a", {
                      href: "#inventory",
                      onClick: () => r(!1),
                      className:
                        "mt-2 bg-primary text-primary-foreground text-sm font-medium text-center py-3 rounded-xl",
                      children: "Browse Shop",
                    }),
                  ],
                }),
              }),
          }),
        ],
      }),
    });
  },
  rM = () => {
    const e = x.useRef(null),
      { isRaveMode: t } = qt(),
      { scrollYProgress: n } = ct({
        target: e,
        offset: ["start start", "end start"],
      }),
      r = Q(n, [0, 1], [0, -150]),
      s = Q(n, [0, 0.6], [1, 0]);
    return d.jsxs("section", {
      ref: e,
      className: `relative min-h-screen flex items-center justify-center overflow-hidden ${t ? "sneak-scanlines" : ""}`,
      children: [
        d.jsx(N.div, {
          style: { y: Q(n, [0, 1], [0, 100]) },
          className: "absolute inset-0 bg-obsidian-radial",
        }),
        d.jsx("div", {
          className: `absolute inset-0 ${t ? "sneak-bg-glow" : ""}`,
        }),
        d.jsxs("div", {
          className: "absolute inset-0 overflow-hidden pointer-events-none",
          children: [
            d.jsx(N.div, {
              style: {
                y: Q(n, [0, 1], [0, -80]),
                scale: Q(n, [0, 0.5], [1, 1.2]),
              },
              className: `absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] ${t ? "sneak-bg-glow" : "bg-primary/10"}`,
            }),
            d.jsx(N.div, {
              style: { y: Q(n, [0, 1], [0, -120]), x: Q(n, [0, 1], [0, 50]) },
              className:
                "absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] bg-violet-500/5",
            }),
            d.jsx(N.div, {
              style: { y: Q(n, [0, 1], [0, -60]), x: Q(n, [0, 1], [0, -30]) },
              className:
                "absolute bottom-1/3 left-1/4 w-[250px] h-[250px] rounded-full blur-[80px] bg-blue-500/5",
            }),
          ],
        }),
        d.jsxs(N.div, {
          style: { y: r, opacity: s },
          className: "relative z-10 text-center px-4 max-w-4xl mx-auto",
          children: [
            d.jsx("div", {
              className: "overflow-hidden mb-6",
              children: d.jsx("h1", {
                className:
                  "text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight",
                children: d.jsx("span", {
                  className: "text-reveal",
                  children: d.jsx(N.span, {
                    className: `text-reveal-inner block ${t ? "sneak-text" : "text-gradient-animate"}`,
                    initial: { y: "100%" },
                    animate: { y: 0 },
                    transition: {
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    children: "SneaK.",
                  }),
                }),
              }),
            }),
            d.jsx("div", {
              className: "overflow-hidden mb-8",
              children: d.jsx(N.p, {
                initial: { y: 40, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: {
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                },
                className:
                  "text-lg sm:text-xl md:text-2xl text-muted-foreground",
                children: "Elevate Your Gaming Experience.",
              }),
            }),
            d.jsxs(N.div, {
              initial: { y: 30, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] },
              className:
                "flex flex-col sm:flex-row gap-3 justify-center items-center",
              children: [
                d.jsx("a", {
                  href: "#inventory",
                  className: `inline-flex items-center justify-center text-sm px-8 py-3.5 rounded-xl font-bold text-white transition-all duration-200 ${t ? "sneak-btn" : "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"}`,
                  children: "Browse Shop",
                }),
                d.jsx("a", {
                  href: "https://discord.gg/UBkCsCMZCk",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: `inline-flex items-center justify-center text-sm px-8 py-3.5 rounded-xl font-bold transition-all duration-200 ${t ? "sneak-btn text-white" : "border border-border bg-card/50 backdrop-blur-sm text-foreground hover:bg-card hover:border-primary/30 hover:-translate-y-0.5"}`,
                  children: "Join Discord",
                }),
              ],
            }),
            d.jsx(N.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.8 },
              className: "absolute -bottom-24 left-1/2 -translate-x-1/2",
              children: d.jsx(N.div, {
                animate: { y: [0, 8, 0] },
                transition: { repeat: 1 / 0, duration: 2, ease: "easeInOut" },
                className:
                  "w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1.5",
                children: d.jsx(N.div, {
                  className: "w-0.5 h-1.5 rounded-full bg-muted-foreground/50",
                }),
              }),
            }),
          ],
        }),
      ],
    });
  },
  sM = () =>
    ok({
      queryKey: ["stock"],
      queryFn: async () => {
        const e = await fetch("https://api.SneakSolutions.com/stock");
        if (!e.ok) throw new Error("Failed to fetch stock");
        return e.json();
      },
      refetchInterval: 3e4,
      staleTime: 1e4,
    }),
  iM = {
    "Hypixel Accounts": ["hypixel_unban", "hypixel_banned"],
    "Cookie Logs": ["unban_cookies"],
    "Donut SMP": ["donutsmp_unbanned", "donutsmp_1m", "donutsmp_50m"],
    "Microsoft / Xbox": [],
    "Premium Packages": [],
    "And more...": [],
  },
  oM = (e, t) => {
    if (!e) return null;
    const n = iM[t];
    return !n || n.length === 0 ? null : n.reduce((r, s) => r + (e[s] || 0), 0);
  },
  aM = ({ count: e, isLoading: t }) =>
    e === null && !t
      ? null
      : d.jsx(N.div, {
          className: "absolute top-3 right-3 z-20",
          animate: { y: [0, -3, 0] },
          transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
          children: d.jsxs("div", {
            className:
              "flex items-center gap-2 glass px-2.5 py-1 rounded-full border border-border/30 hover:border-primary/30 transition-colors duration-300",
            children: [
              d.jsxs("span", {
                className: "relative flex h-2 w-2",
                children: [

                ],
              }),
              t
                ? d.jsx("div", {
                    className: "h-3 w-8 bg-muted/50 rounded skeleton-shimmer",
                  })
                : d.jsxs(N.span, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    className: "text-xs font-mono text-muted-foreground",
                    children: [e, " in stock"],
                  }),
            ],
          }),
        }),
  lM = "/assets/ai-ui.png",
  vL = "/assets/script-ui.png",
  uM = "/assets/donut-logo-RG51LI-f.webp",
  cM = "/assets/xbox-logo-DK8u6rfo.png",
  dM = "/assets/cookie-icon-90XLl4J0.png",
  fM = "/assets/gift-icon-BI1A_Gh6.png",
  hM = [0.25, 0.1, 0.25, 1],
  jg = [
    {
      gradient: "from-blue-500/20 to-cyan-600/10",
      accent: "blue",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      gradient: "from-blue-500/20 to-cyan-600/10",
      accent: "blue",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      gradient: "from-yellow-500/20 to-amber-600/10",
      accent: "yellow",
      iconBg: "bg-yellow-500/20",
      iconColor: "text-yellow-400",
    },
    {
      gradient: "from-blue-500/20 to-cyan-600/10",
      accent: "blue",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      gradient: "from-emerald-500/20 to-green-600/10",
      accent: "emerald",
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-400",
    },
    {
      gradient: "from-pink-500/20 to-rose-600/10",
      accent: "pink",
      iconBg: "bg-pink-500/20",
      iconColor: "text-pink-400",
    },
  ],
  pM = ({
    title: e,
    items: t,
    icon: n,
    image: r,
    index: s,
    stockCount: i,
    isLoadingStock: o,
    featured: a,
  }) => {
    const l = x.useRef(null),
      { isRaveMode: u } = qt(),
      c = Al(50),
      f = Al(50),
      h = kg`${c}%`,
      p = kg`${f}%`,
      b = jg[s % jg.length],
      y = (v) => {
        if (!l.current) return;
        const S = l.current.getBoundingClientRect(),
          C = ((v.clientX - S.left) / S.width) * 100,
          T = ((v.clientY - S.top) / S.height) * 100;
        (c.set(C), f.set(T));
      },
      { scrollYProgress: w } = ct({
        target: l,
        offset: ["start end", "end start"],
      }),
      g = Q(w, [0, 0.18], [0, 1]),
      m = Q(w, [0, 1], [70, -40]);
    return d.jsxs(N.a, {
      ref: l,
      href: "https://discord.gg/UBkCsCMZCk",
      target: "_blank",
      rel: "noopener noreferrer",
      onMouseMove: y,
      style: { opacity: g, y: m, "--mouse-x": h, "--mouse-y": p },
      whileHover: { scale: 1.02, transition: { duration: 0.25 } },
      className: `group relative will-change-transform h-full cursor-pointer block ${u ? "sneak-card sneak-wobble" : ""}`,
      children: [
        d.jsx("div", {
          className: `absolute inset-0 rounded-xl bg-gradient-to-br ${b.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`,
        }),
        d.jsxs("div", {
          className:
            "relative h-full rounded-xl border border-border/40 bg-card/70 backdrop-blur-xl p-5 overflow-hidden transition-all duration-300 group-hover:border-primary/25 group-hover:shadow-xl group-hover:shadow-primary/5",
          children: [
            d.jsx("div", {
              className:
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none",
              style: {
                background:
                  "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), hsl(var(--primary) / 0.08), transparent 40%)",
              },
            }),
            d.jsx("div", {
              className:
                "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400",
            }),

            a &&
              d.jsxs("div", {
                className:
                  "absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/15 border border-primary/25",
                children: [
                  d.jsx("span", {
                    className:
                      "text-[9px] font-semibold text-primary uppercase tracking-wider",
                    children: "Popular",
                  }),
                ],
              }),
            d.jsxs("div", {
              className: "relative z-10 flex flex-col items-center text-center",
              children: [
                d.jsxs(N.div, {
                  className: "relative inline-block mb-6",
                  whileHover: { y: -4, scale: 1.08, rotate: 2 },
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                  children: [
                    d.jsx("div", {
                      className: "relative p-6 transition-all duration-250",
                      children: r
                        ? d.jsx(N.img, {
                            src: r,
                            alt: e,
                            className: "w-32 h-32 object-contain",
                            whileHover: { scale: 1.15 },
                            transition: { type: "spring", stiffness: 400 },
                          })
                        : n
                          ? d.jsx(n, {
                              className: `w-24 h-24 ${u ? "sneak-text" : b.iconColor}`,
                              strokeWidth: 1.5,
                            })
                          : null,
                    }),
                  ],
                }),
                d.jsx("h3", {
                  className: `text-xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors ${u ? "sneak-text" : ""}`,
                  children: e,
                }),
                d.jsx("ul", {
                  className: "space-y-3 mb-6 w-full",
                  children: t.map((v, S) =>
                    d.jsxs(
                      "li",
                      {
                        className:
                          "flex items-center justify-center gap-2.5 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors",
                        children: [
                          d.jsx("span", {
                            className: `flex-shrink-0 w-1.5 h-1.5 rounded-full ${u ? "sneak-glow w-2 h-2" : `${b.iconBg.replace("/20", "/50")}`} transition-all group-hover:scale-110`,
                          }),
                          d.jsx("span", {
                            className: "font-medium text-xs",
                            children: v,
                          }),
                        ],
                      },
                      S,
                    ),
                  ),
                }),
                d.jsxs("div", {
                  className:
                    "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground group-hover:text-primary transition-all",
                  children: [
                    d.jsx("span", { children: "View Products" }),
                    d.jsx(A1, {
                      className:
                        "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5",
                    }),
                  ],
                }),
              ],
            }),
            d.jsx("div", {
              className:
                "absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-400",
            }),
          ],
        }),
      ],
    });
  },
  mM = () => {
    const e = x.useRef(null),
      { isRaveMode: t } = qt(),
      { data: n, isLoading: r } = sM(),
      { scrollYProgress: s } = ct({
        target: e,
        offset: ["start end", "end start"],
      }),
      i = Q(s, [0, 1], [0, -100]),
      o = [
        {
          title: "SneaK Advanced",
          items: ["Humanized Aimbot", "Adaptive Smoothing", "Regular Undetected Updates"],
          image: lM,
          featured: !0,
        },
        {
          title: "SneaK Aegis",
          items: ["Low CPU Footprint", "Easy Config", "Good Price-Quality"],
          image: vL,
          featured: !0,
        }
      ];
    return d.jsxs("section", {
      ref: e,
      id: "inventory",
      className: `relative py-24 px-4 overflow-hidden ${t ? "sneak-section" : ""}`,
      children: [
        d.jsxs(N.div, {
          style: { y: i },
          className: "absolute inset-0 pointer-events-none",
          children: [
            d.jsx("div", {
              className: `absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] ${t ? "sneak-bg-glow" : "bg-violet-500/6"}`,
            }),
            d.jsx("div", {
              className: `absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] ${t ? "sneak-bg-glow" : "bg-blue-500/4"}`,
            }),
            d.jsx("div", {
              className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[180px] ${t ? "sneak-bg-glow" : "bg-primary/4"}`,
            }),
          ],
        }),
        d.jsxs("div", {
          className: "max-w-6xl mx-auto relative z-10",
          children: [
            d.jsxs("div", {
              className: "text-center mb-12",
              children: [
                d.jsx("div", {
                  className:
                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5",
                  children: d.jsx("span", {
                    className:
                      "text-xs font-semibold text-primary uppercase tracking-wider",
                  children: "OUR PRODUCTS"                  }),
                }),
                d.jsx("h2", {
                  className: `text-3xl md:text-5xl font-bold mb-4 tracking-tight ${t ? "sneak-text sneak-bounce" : ""}`,
                  children: "Premium Modules",
                }),
                d.jsxs("p", {
                  className:
                    "text-muted-foreground text-base max-w-lg mx-auto leading-relaxed",
                  children: [
                    "Premium software engineered for peak performance.",
                    d.jsx("span", {
                      className: "text-foreground font-medium",
                      children: " Instant delivery.",
                    }),
                  ],
                }),
              ],
            }),
            d.jsx("div", {
              className: "flex flex-wrap justify-center gap-8",
              children: o.map((a, l) =>
                d.jsx(
                  "div",
                  {
                    className: "w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm",
                    children: d.jsx(
                      pM,
                      {
                        ...a,
                        index: l,
                        stockCount: oM(n == null ? void 0 : n.stock, a.title),
                        isLoadingStock: r,
                      },
                      a.title,
                    ),
                  }
                ),
              ),
            }),
            d.jsx(N.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.8, delay: 0.3, ease: hM },
              className: "text-center mt-12",
              children: d.jsxs("a", {
                href: "https://discord.gg/UBkCsCMZCk",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "btn-primary inline-flex items-center gap-2 text-sm",
                children: [
                  d.jsx("span", { children: "Browse Full Shop" }),
                  d.jsx(A1, { className: "w-4 h-4" }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  rf = [0.25, 0.1, 0.25, 1],
  gM = ({ name: e, thumbnail: t, videoUrl: n, index: r }) => {
    const [s, i] = x.useState(!1),
      [o, a] = x.useState(!1),
      u = Math.floor(r / 3) % 2 === 0 ? -80 : 80,
      c = () => {
        window.open(n, "_blank", "noopener,noreferrer");
      };
    return d.jsxs(N.div, {
      initial: { opacity: 0, x: u },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: !0, margin: "-100px" },
      transition: { duration: 0.8, delay: (r % 3) * 0.1, ease: rf },
      className: "group relative cursor-pointer",
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      onClick: c,
      children: [
        d.jsxs("div", {
          className:
            "relative aspect-video rounded-xl overflow-hidden bg-muted/30",
          children: [
            !o &&
              d.jsx("div", {
                className: "absolute inset-0 bg-muted/30 animate-pulse",
                children: d.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-r from-transparent via-muted/50 to-transparent skeleton-shimmer",
                }),
              }),
            d.jsx("img", {
              src: t,
              alt: e,
              onLoad: () => a(!0),
              className: `w-full h-full object-cover transition-all duration-500 ${s ? "scale-105" : "scale-100"} ${o ? "opacity-100" : "opacity-0"}`,
            }),
            d.jsx("div", {
              className: `absolute inset-0 bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${s ? "opacity-100" : "opacity-0"}`,
            }),
            d.jsx(N.div, {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: s ? 1 : 0, scale: s ? 1 : 0.8 },
              transition: { duration: 0.2 },
              className: "absolute inset-0 flex items-center justify-center",
              children: d.jsx("div", {
                className:
                  "glass p-4 rounded-full cursor-pointer hover:bg-muted/60 transition-colors",
                children: d.jsx(bC, {
                  className: "w-6 h-6 text-foreground",
                  strokeWidth: 1.5,
                  fill: "currentColor",
                }),
              }),
            }),
            d.jsx("div", {
              className: `absolute inset-0 rounded-xl border transition-all duration-300 ${s ? "border-border/60 shadow-lg shadow-black/20" : "border-border/30"}`,
            }),
          ],
        }),
        d.jsx("p", {
          className: "mt-3 text-sm font-mono text-muted-foreground text-center",
          children: e,
        }),
      ],
    });
  },
  yM = () => {
    const e = x.useRef(null),
      { scrollYProgress: t } = ct({
        target: e,
        offset: ["start end", "end start"],
      }),
      n = Q(t, [0, 1], [0, -80]),
      r = [
        {
          name: "raindots",
          thumbnail: "https://img.youtube.com/vi/HRbvbHNES6E/maxresdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=HRbvbHNES6E",
        },
        {
          name: "authie",
          thumbnail: "https://img.youtube.com/vi/vRaKz0oVFn8/maxresdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=vRaKz0oVFn8",
        },
        {
          name: "purrorcode",
          thumbnail: "https://img.youtube.com/vi/APMkF25npoA/maxresdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=APMkF25npoA",
        },
        {
          name: "michaelstetson",
          thumbnail: "https://img.youtube.com/vi/ghUk-9KP1vY/maxresdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=ghUk-9KP1vY",
        },
        {
          name: "mega",
          thumbnail: "https://img.youtube.com/vi/MYRJ6u01FNc/maxresdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=MYRJ6u01FNc",
        },
        {
          name: "moschi",
          thumbnail: "https://img.youtube.com/vi/n1E6ldbyDzQ/maxresdefault.jpg",
          videoUrl: "https://www.youtube.com/watch?v=n1E6ldbyDzQ",
        },
      ];
    return d.jsxs("section", {
      ref: e,
      id: "media",
      className: "relative py-32 px-4 bg-obsidian-radial overflow-hidden",
      children: [
        d.jsx(N.div, {
          style: { y: n },
          className: "absolute inset-0 pointer-events-none",
          children: d.jsx("div", {
            className:
              "absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]",
          }),
        }),
        d.jsxs("div", {
          className: "max-w-6xl mx-auto relative z-10",
          children: [
            d.jsxs(N.div, {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.8, ease: rf },
              className: "text-center mb-20",
              children: [
                d.jsxs(N.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.8, delay: 0.1, ease: rf },
                  className:
                    "inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6",
                  children: [
                    d.jsx(O1, {
                      className: "w-4 h-4 text-primary",
                      strokeWidth: 1.5,
                    }),
                    d.jsx("span", {
                      className: "text-sm font-mono",
                      children: "Creators",
                    }),
                  ],
                }),
                d.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                  children: "Trusted by Creators",
                }),
                d.jsx("p", {
                  className: "text-muted-foreground text-base max-w-lg mx-auto",
                  children:
                    "Leading content creators trust SneakSolutions for their gaming needs.",
                }),
              ],
            }),
            d.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
              children: r.map((s, i) => d.jsx(gM, { ...s, index: i }, s.name)),
            }),
          ],
        }),
      ],
    });
  },
  ps = [0.25, 0.1, 0.25, 1],
  vM = ({ name: e, price: t, features: n, popular: r, index: s }) =>
    d.jsxs(N.div, {
      initial: { opacity: 0, x: s === 0 ? -80 : 80 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: !0, margin: "-100px" },
      transition: { duration: 0.8, delay: s * 0.15, ease: ps },
      className: `glass-card p-6 relative ${r ? "border-primary/30" : ""}`,
      children: [
        r &&
          d.jsx("div", {
            className: "absolute -top-3 left-1/2 -translate-x-1/2",
            children: d.jsx("span", {
              className: "badge-sale",
              children: "Popular",
            }),
          }),
        d.jsxs("div", {
          className: "text-center mb-6 pt-2",
          children: [
            d.jsx("h3", {
              className: "text-lg font-semibold mb-2",
              children: e,
            }),
            d.jsxs("div", {
              className: "flex items-baseline justify-center gap-1",
              children: [
                d.jsx("span", {
                  className: "text-4xl font-bold font-mono",
                  children: t,
                }),
                t !== "Free" &&
                  d.jsx("span", {
                    className: "text-muted-foreground text-sm",
                    children: "/mo",
                  }),
              ],
            }),
          ],
        }),
        d.jsx("ul", {
          className: "space-y-3 mb-6",
          children: n.map((i, o) =>
            d.jsxs(
              "li",
              {
                className: "flex items-start gap-3 text-sm",
                children: [
                  d.jsx(cC, {
                    className: "w-4 h-4 text-primary mt-0.5 flex-shrink-0",
                    strokeWidth: 1.5,
                  }),
                  d.jsx("span", {
                    className: "text-muted-foreground",
                    children: i,
                  }),
                ],
              },
              o,
            ),
          ),
        }),
        d.jsx("a", {
          href:
            e === "Lite"
              ? "https://SneakSolutions.com/download/rtl"
              : "https://sneak.mysellauth.com/product/sneak-tokenizer-pro-1-month-key",
          target: "_blank",
          rel: "noopener noreferrer",
          className: `block w-full py-3 rounded-lg font-medium transition-all duration-300 text-center ${r ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] shadow-lg shadow-primary/25" : "bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 hover:scale-[1.02]"}`,
          children: e === "Lite" ? "Download Now" : "Buy Now",
        }),
      ],
    }),
  xM = [
    "Rise Client",
    "Lunar Client",
    "Badlion Client",
    "LabyMod",
    "Modrinth",
    "Vanilla",
    "Fabric",
    "Forge",
  ],
  wM = () => {
    const e = x.useRef(null),
      { scrollYProgress: t } = ct({
        target: e,
        offset: ["start end", "end start"],
      }),
      n = Q(t, [0, 1], [0, -100]),
      r = [
        {
          name: "Lite",
          price: "Free",
          features: [
            "Up to 3 accounts",
            "Requires game restart",
            "Basic clients supported",
            "Community support",
          ],
        },
        {
          name: "Pro",
          price: "$10",
          popular: !0,
          features: [
            "Unlimited accounts",
            "Instant switching (no restart)",
            "All clients supported",
            "Priority support",
            "Auto-login profiles",
          ],
        },
      ];
    return d.jsxs("section", {
      ref: e,
      id: "tokenizer",
      className: "relative py-32 px-4 overflow-hidden",
      children: [
        d.jsx(N.div, {
          style: { y: n },
          className: "absolute inset-0 pointer-events-none",
          children: d.jsx("div", {
            className:
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[200px]",
          }),
        }),
        d.jsxs("div", {
          className: "max-w-6xl mx-auto relative z-10",
          children: [
            d.jsxs(N.div, {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.8, ease: ps },
              className: "text-center mb-16",
              children: [
                d.jsxs(N.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.8, delay: 0.1, ease: ps },
                  className:
                    "inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6",
                  children: [
                    d.jsx(TC, {
                      className: "w-4 h-4 text-primary",
                      strokeWidth: 1.5,
                    }),
                    d.jsx("span", {
                      className: "text-sm font-mono",
                      children: "Account Switcher",
                    }),
                  ],
                }),
                d.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                  children: "Rave Tokenizer",
                }),
                d.jsx("p", {
                  className:
                    "text-muted-foreground text-base max-w-xl mx-auto mb-6",
                  children:
                    "Switch Minecraft accounts instantly without restarting your game. Works with almost every client.",
                }),
                d.jsxs(N.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.8, delay: 0.2, ease: ps },
                  className: "flex flex-wrap justify-center gap-3",
                  children: [
                    d.jsx("span", {
                      className: "badge-sale",
                      children: "Release Sale: 10% Off",
                    }),
                    d.jsx("span", {
                      className:
                        "text-xs font-mono text-muted-foreground px-3 py-1 rounded-full border border-border/30",
                      children: "Partner Codes: Up to 25% Off",
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs("div", {
              className: "grid lg:grid-cols-2 gap-12 items-start",
              children: [
                d.jsx("div", {
                  className: "grid sm:grid-cols-2 gap-4",
                  children: r.map((s, i) =>
                    d.jsx(vM, { ...s, index: i }, s.name),
                  ),
                }),
                d.jsxs(N.div, {
                  initial: { opacity: 0, x: 80 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.8, delay: 0.2, ease: ps },
                  className: "glass-card p-6",
                  children: [
                    d.jsxs("div", {
                      className: "flex items-center gap-3 mb-6",
                      children: [
                        d.jsx("div", {
                          className: "p-2 rounded-lg bg-muted/50",
                          children: d.jsx(SC, {
                            className: "w-5 h-5 text-primary",
                            strokeWidth: 1.5,
                          }),
                        }),
                        d.jsxs("div", {
                          children: [
                            d.jsx("h3", {
                              className: "font-semibold",
                              children: "Supported Clients",
                            }),
                            d.jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children:
                                "Works seamlessly with your favorite client",
                            }),
                          ],
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "grid grid-cols-2 gap-3",
                      children: xM.map((s, i) =>
                        d.jsxs(
                          N.div,
                          {
                            initial: { opacity: 0, y: 30 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: !0, margin: "-100px" },
                            transition: {
                              duration: 0.8,
                              delay: 0.3 + i * 0.1,
                              ease: ps,
                            },
                            className:
                              "flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/20 border border-border/20",
                            children: [
                              d.jsx("span", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-primary/60",
                              }),
                              d.jsx("span", {
                                className: "text-sm font-mono",
                                children: s,
                              }),
                            ],
                          },
                          s,
                        ),
                      ),
                    }),
                    d.jsx("p", {
                      className:
                        "text-xs text-muted-foreground mt-4 text-center",
                      children: "+ many more clients supported",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  ka = [0.25, 0.1, 0.25, 1],
  bM = () => {
    const [e, t] = x.useState(!1),
      n = x.useRef(null),
      { scrollYProgress: r } = ct({
        target: n,
        offset: ["start end", "end start"],
      }),
      s = Q(r, [0, 1], [0, -100]);
    return d.jsxs("section", {
      ref: n,
      id: "rise-client",
      className: "relative py-32 px-4 overflow-hidden bg-obsidian-radial",
      children: [
        d.jsx(N.div, {
          style: { y: s },
          className: "absolute inset-0 pointer-events-none",
          children: d.jsx("div", {
            className:
              "absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]",
          }),
        }),
        d.jsxs("div", {
          className: "max-w-5xl mx-auto relative z-10",
          children: [
            d.jsxs(N.div, {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.8, ease: ka },
              className: "text-center mb-12",
              children: [
                d.jsxs(N.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.8, delay: 0.1, ease: ka },
                  className:
                    "inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6",
                  children: [
                    d.jsx(wC, {
                      className: "w-4 h-4 text-primary",
                      strokeWidth: 1.5,
                    }),
                    d.jsx("span", {
                      className: "text-sm font-mono",
                      children: "Integration",
                    }),
                  ],
                }),
                d.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                  children: "Rise Client",
                }),
                d.jsx("p", {
                  className: "text-muted-foreground text-base max-w-lg mx-auto",
                  children: "Buy SneakSolutions directly inside the Rise Client.",
                }),
              ],
            }),
            d.jsxs(N.div, {
              initial: { opacity: 0, x: -100 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.8, delay: 0.15, ease: ka },
              className: "relative",
              children: [
                d.jsx("div", {
                  className: "glass-card p-1 rounded-2xl",
                  children: d.jsxs("div", {
                    className:
                      "relative bg-background rounded-xl overflow-hidden aspect-video",
                    children: [
                      d.jsxs("div", {
                        className:
                          "absolute top-0 left-0 right-0 h-8 bg-muted/20 flex items-center px-3 gap-2 z-10",
                        children: [
                          d.jsxs("div", {
                            className: "flex gap-1",
                            children: [
                              d.jsx("div", {
                                className:
                                  "w-2 h-2 rounded-full bg-muted-foreground/30",
                              }),
                              d.jsx("div", {
                                className:
                                  "w-2 h-2 rounded-full bg-muted-foreground/30",
                              }),
                              d.jsx("div", {
                                className:
                                  "w-2 h-2 rounded-full bg-muted-foreground/30",
                              }),
                            ],
                          }),
                          d.jsx("div", {
                            className: "flex-1 flex justify-center",
                            children: d.jsx("span", {
                              className:
                                "text-xs font-mono text-muted-foreground",
                              children: "riseclient.com",
                            }),
                          }),
                        ],
                      }),
                      !e &&
                        d.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center bg-muted/10 z-20",
                          children: d.jsx(N.div, {
                            animate: { rotate: 360 },
                            transition: {
                              repeat: 1 / 0,
                              duration: 1.5,
                              ease: "linear",
                            },
                            className:
                              "w-6 h-6 border border-primary/30 border-t-primary rounded-full",
                          }),
                        }),
                      d.jsx("iframe", {
                        src: "https://riseclient.com",
                        className: "w-full h-full pt-8",
                        title: "Rise Client",
                        onLoad: () => t(!0),
                        style: { minHeight: "450px" },
                      }),
                    ],
                  }),
                }),
                d.jsx("div", {
                  className: "flex justify-center mt-1",
                  children: d.jsx("div", {
                    className:
                      "w-24 h-6 bg-gradient-to-b from-muted/30 to-transparent rounded-b-lg",
                  }),
                }),
                d.jsx("div", {
                  className: "flex justify-center",
                  children: d.jsx("div", {
                    className: "w-40 h-1 bg-muted/20 rounded-full",
                  }),
                }),
              ],
            }),
            d.jsx(N.div, {
              initial: { opacity: 0, x: 60 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.8, delay: 0.25, ease: ka },
              className: "text-center mt-10",
              children: d.jsxs("a", {
                href: "https://riseclient.com",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
                children: [
                  "Visit Rise Client",
                  d.jsx(D1, { className: "w-4 h-4", strokeWidth: 1.5 }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  SM = [
    {
      icon: sh,
      title: "Discord Bot Purchasing",
      description: "Easy purchases directly from our Discord bot.",
    },
    {
      icon: CC,
      title: "Advanced Bypass",
      description:
        "Never get caught. We have the best bypass method on the market.",
    },
    {
      icon: V1,
      title: "Fast Delivery",
      description: "After purchase, get your bypass quickly installed. No waiting.",
    },
    {
      icon: dC,
      title: "Responsive Support",
      description: "Fast ticket responses. Our team is always ready to help.",
    },
  ],
  CM = ({ feature: e, index: t, isRaveMode: n }) => {
    const r = x.useRef(null),
      { scrollYProgress: s } = ct({
        target: r,
        offset: ["start end", "end start"],
      }),
      i = Q(s, [0, 0.2], [0, 1]),
      o = Q(s, [0, 1], [40, -20]);
    return d.jsxs(N.div, {
      ref: r,
      style: { opacity: i, y: o },
      className: `glass-card p-4 text-center ${n ? "sneak-card sneak-bounce" : ""}`,
      children: [
        d.jsx("div", {
          className: `inline-flex p-2.5 rounded-lg bg-muted/50 mb-3 ${n ? "sneak-spin-slow" : ""}`,
          children: d.jsx(e.icon, {
            className: `w-4 h-4 ${n ? "sneak-text" : "text-primary"}`,
            strokeWidth: 1.5,
          }),
        }),
        d.jsx("h3", {
          className: `text-xs font-semibold mb-1.5 ${n ? "sneak-text" : ""}`,
          children: e.title,
        }),
        d.jsx("p", {
          className: "text-[11px] text-muted-foreground leading-relaxed",
          children: e.description,
        }),
      ],
    });
  },
  EM = [
    {
      name: "Vortex_FX",
      rating: 5,
      country: "US",
      text: "The FiveM bypass is absolutely insane. I've been using it for 2 weeks on multiple servers and haven't caught a single ban. Best investment for serious players.",
    },
    {
      name: "ShadowPlayer",
      rating: 5,
      country: "DE",
      text: "Finally a bypass that actually works. The setup was super easy and the support team helped me with my specific global ban issue. 10/10 service!",
    },
    {
      name: "Kev_FiveM",
      rating: 5,
      country: "UK",
      text: "Best bypass in the market. I was skeptical at first but after trying it, I can say it's worth every penny. No more worrying about server-side detections.",
    },
    {
      name: "Xenon_RP",
      rating: 5,
      country: "FR",
      text: "Incredible performance. It doesn't affect my FPS at all and stays completely hidden. If you're looking for a reliable FiveM bypass, this is it.",
    },
    {
      name: "Ghost_User",
      rating: 5,
      country: "CA",
      text: "Super fast delivery and the bypass is flawless. I've tried others before but SneaK is on another level. Highly recommended for anyone in the RP scene.",
    },
    {
      name: "Arctic_Bypass",
      rating: 5,
      country: "SE",
      text: "The most stable bypass I've ever used. Updates are frequent and the community is very helpful. Worth every cent.",
    },
  ],
  TM = ({ name: e, rating: t, text: n, country: r, index: s }) => {
    const { isRaveMode: i } = qt(),
      o = x.useRef(null),
      { scrollYProgress: a } = ct({
        target: o,
        offset: ["start end", "end start"],
      }),
      l = Q(a, [0, 0.18], [0, 1]),
      u = Q(a, [0, 1], [60, -30]);
    return d.jsxs(N.div, {
      ref: o,
      style: { opacity: l, y: u },
      className: `glass-card p-5 ${i ? "sneak-card sneak-fly" : ""}`,
      children: [
        d.jsxs("div", {
          className: "flex items-center justify-between mb-3",
          children: [
            d.jsx("div", {
              className: "flex items-center gap-0.5",
              children: Array.from({ length: t }).map((c, f) =>
                d.jsx(
                  EC,
                  {
                    className: `w-3.5 h-3.5 fill-[#00B67A] ${i ? "sneak-text sneak-spin-fast" : "text-[#00B67A]"}`,
                    strokeWidth: 0,
                    style: { animationDelay: `${f * 0.1}s` },
                  },
                  f,
                ),
              ),
            }),
            r &&
              d.jsx("span", {
                className:
                  "text-[10px] text-muted-foreground font-mono bg-muted/50 px-1.5 py-0.5 rounded",
                children: r,
              }),
          ],
        }),
        d.jsxs("p", {
          className: "text-sm text-foreground/90 mb-4 leading-relaxed",
          children: ['"', n, '"'],
        }),
        d.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            d.jsx("div", {
              className:
                "w-7 h-7 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-xs font-semibold text-primary",
              children: e.charAt(0).toUpperCase(),
            }),
            d.jsx("p", {
              className: `text-xs font-medium ${i ? "sneak-text" : "text-foreground"}`,
              children: e,
            }),
          ],
        }),
      ],
    });
  },
  kM = () => {
    const e = x.useRef(null),
      { isRaveMode: t } = qt(),
      { scrollYProgress: n } = ct({
        target: e,
        offset: ["start end", "end start"],
      }),
      r = Q(n, [0, 1], [0, -80]);
    return d.jsxs("section", {
      ref: e,
      id: "vouches",
      className: `relative py-24 px-4 bg-obsidian-radial overflow-hidden ${t ? "sneak-section" : ""}`,
      children: [
        d.jsx(N.div, {
          style: { y: r },
          className: "absolute inset-0 pointer-events-none",
          children: d.jsx("div", {
            className: `absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] ${t ? "sneak-bg-glow" : "bg-primary/4"}`,
          }),
        }),
        d.jsxs("div", {
          className: "max-w-6xl mx-auto relative z-10",
          children: [
            d.jsxs("div", {
              className: "text-center mb-12",
              children: [
                d.jsx("h2", {
                  className: `text-3xl md:text-4xl font-bold mb-3 tracking-tight ${t ? "sneak-text sneak-bounce" : ""}`,
                  children: "Why SneaK",
                }),
                d.jsx("p", {
                  className: "text-muted-foreground text-sm max-w-md mx-auto",
                  children:
                    "Trusted by thousands. Here's what makes us different.",
                }),
              ],
            }),
            d.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16",
              children: SM.map((s, i) =>
                d.jsx(CM, { feature: s, index: i, isRaveMode: t }, s.title),
              ),
            }),
            d.jsxs("div", {
              className: "text-center mb-10",
              children: [
                d.jsx("div", {
                  className: "flex items-center justify-center gap-2 mb-3",
                  children: d.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00B67A]/10 border border-[#00B67A]/25",
                    children: [
                      d.jsx("svg", {
                        viewBox: "0 0 24 24",
                        className: "w-3.5 h-3.5 text-[#00B67A]",
                        fill: "currentColor",
                        children: d.jsx("path", {
                          d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
                        }),
                      }),
                      d.jsx("span", {
                        className: "text-xs font-semibold text-foreground",
                        children: "5.0",
                      }),
                      d.jsx("span", {
                        className: "text-[10px] text-muted-foreground",
                        children: "on",
                      }),
                      d.jsx("span", {
                        className: "text-xs font-semibold text-[#00B67A]",
                        children: "Trustpilot",
                      }),
                    ],
                  }),
                }),
                d.jsx("h3", {
                  className:
                    "text-xl md:text-2xl font-bold mb-1.5 tracking-tight",
                  children: "Community Vouches",
                }),
                d.jsx("p", {
                  className: "text-muted-foreground text-xs",
                  children: "Real feedback from Trustpilot & Discord.",
                }),
              ],
            }),
            d.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: EM.map((s, i) =>
                d.jsx(
                  TM,
                  {
                    name: s.name,
                    rating: s.rating,
                    text: s.text,
                    country: s.country,
                    index: i,
                  },
                  s.name,
                ),
              ),
            }),
            d.jsx("div", {
              className: "text-center mt-10",
              children: d.jsxs("a", {
                href: "https://discord.gg/UBkCsCMZCk",
                target: "_blank",
                rel: "noopener noreferrer",
                className: `inline-flex items-center gap-2 text-sm ${t ? "sneak-btn px-5 py-2.5 rounded-lg font-semibold text-white" : "btn-primary"}`,
                children: [
                  d.jsx(sh, {
                    className: `w-3.5 h-3.5 ${t ? "sneak-spin-fast" : ""}`,
                    strokeWidth: 1.5,
                  }),
                  "Join Our Discord",
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  PM = () =>
    d.jsx("svg", {
      className: "w-3.5 h-3.5",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: d.jsx("path", {
        d: "M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.7-.169-1.053-.25l.53-2.12-1.32-.33-.54 2.16c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.238c.535.136.63.486.615.766l-.62 2.487c.038.01.085.025.138.045l-.14-.035-.87 3.48c-.067.166-.237.415-.62.32.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426c.324.08.64.17.95.25l-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.254 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.52 2.75 2.084v.006z",
      }),
    }),
  NM = () =>
    d.jsx("svg", {
      className: "w-3.5 h-3.5",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: d.jsx("path", {
        d: "M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-.262 3.678h2.584a.343.343 0 0 1 .33.435l-2.03 6.918 1.905-.582-.329 1.134-1.98.603-1.076 3.658h6.058a.343.343 0 0 1 .33.436l-.353 1.2a.343.343 0 0 1-.33.25H5.742l1.329-4.527-1.878.573.34-1.146 1.94-.593L9.67 4.113a.343.343 0 0 1 .33-.251h1.74z",
      }),
    }),
  jM = () =>
    d.jsx("svg", {
      className: "w-3.5 h-3.5",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: d.jsx("path", {
        d: "M4.592 2H0v20h4.592V2zm17.753 0h-4.436c0 4.56-2.016 8.762-5.536 11.63l-1.8 1.47L16.468 22h5.49l-5.436-6.88C19.963 11.856 22.345 7.03 22.345 2zM19.847 22a2.122 2.122 0 1 1 0-4.244 2.122 2.122 0 0 1 0 4.244z",
      }),
    }),
  RM = () =>
    d.jsx("svg", {
      className: "w-3.5 h-3.5",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: d.jsx("path", {
        d: "M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.493.124.108.178.05.354-.17.525-.107.085-.222.17-.345.254-.456.313-.97.628-1.545.942-1.372.753-2.862 1.36-4.47 1.82-1.61.459-3.26.689-4.95.689-2.248 0-4.373-.387-6.375-1.161-2.003-.775-3.773-1.825-5.31-3.152-.168-.144-.223-.292-.165-.445.036-.094.108-.184.216-.27l.18-.127zm7.233-5.391c-.143-.032-.186-.104-.128-.214l.044-.082c.15-.279.303-.54.456-.782a11.9 11.9 0 0 1 2.147-2.593c.772-.731 1.625-1.318 2.56-1.761.935-.443 1.917-.755 2.946-.936.42-.073.84-.127 1.26-.163.42-.037.84-.055 1.26-.055l.24.002c.186.001.371.007.555.018.185.012.369.028.552.05.184.022.366.05.549.082.182.033.36.072.536.117.175.046.35.095.524.148a9.387 9.387 0 0 1 2.36 1.024c.318.194.619.405.902.634.283.228.55.475.8.74.249.266.478.552.686.859.209.306.395.632.559.975.165.344.305.707.422 1.087l.03.103c.029.1.047.191.053.273.007.082.004.159-.008.232a.507.507 0 0 1-.07.177.318.318 0 0 1-.122.12.527.527 0 0 1-.167.07c-.066.015-.136.025-.212.03l-.109.003h-4.36c-.16 0-.283-.04-.369-.12a.475.475 0 0 1-.159-.302c-.017-.101-.026-.21-.026-.328v-.408c0-.144-.008-.296-.024-.456a2.21 2.21 0 0 0-.106-.483 2.087 2.087 0 0 0-.215-.452c-.09-.141-.199-.269-.328-.384a1.95 1.95 0 0 0-.42-.299 2.37 2.37 0 0 0-.508-.204 2.95 2.95 0 0 0-.58-.104 4.5 4.5 0 0 0-.632-.01c-.217.01-.433.033-.648.07a3.9 3.9 0 0 0-.635.167c-.209.074-.41.163-.605.267-.194.104-.375.22-.544.348a4.53 4.53 0 0 0-.955.98c-.26.35-.483.727-.668 1.13a7.48 7.48 0 0 0-.455 1.245 8.29 8.29 0 0 0-.267 1.33l-.058.497a9.93 9.93 0 0 0-.037.496c-.007.161-.01.318-.01.472 0 .153.002.3.006.44.004.14.012.273.024.4.012.126.027.248.046.367.018.118.04.232.066.342.024.11.054.216.087.318.034.102.071.2.113.295.042.094.088.183.138.267.05.084.103.162.16.235.058.072.118.138.18.197.063.059.128.11.195.154.067.043.136.08.208.107l.007.002.023.006.027.006.006.001c.096.019.174-.007.235-.077l.044-.061c.04-.06.09-.145.146-.256l.063-.13c.228-.474.523-.935.885-1.383.362-.448.768-.85 1.218-1.207.45-.358.936-.67 1.46-.937.523-.268 1.067-.48 1.63-.639.564-.158 1.138-.263 1.722-.314.585-.052 1.169-.047 1.753.014.584.06 1.151.175 1.701.345.55.17 1.074.392 1.572.666.497.274.963.596 1.396.967.433.37.823.788 1.17 1.253.347.464.647.972.9 1.522.253.55.454 1.138.605 1.765.15.627.244 1.284.283 1.972.038.687.013 1.393-.076 2.117a10.5 10.5 0 0 1-.398 2.02c-.184.65-.415 1.272-.693 1.867a10.25 10.25 0 0 1-.993 1.69 9.52 9.52 0 0 1-1.273 1.466c-.471.435-.98.82-1.527 1.152a9.08 9.08 0 0 1-1.743.846 9.24 9.24 0 0 1-1.923.488 9.87 9.87 0 0 1-2.055.1 10.22 10.22 0 0 1-2.05-.3 10.48 10.48 0 0 1-1.956-.684",
      }),
    }),
  MM = () =>
    d.jsx("svg", {
      className: "w-3.5 h-3.5",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: d.jsx("path", {
        d: "M23.59 3.47A5.1 5.1 0 0 0 20.53.41C19.37 0 18.07 0 15.48 0H8.52C5.93 0 4.63 0 3.47.41A5.1 5.1 0 0 0 .41 3.47C0 4.63 0 5.93 0 8.52v6.96c0 2.59 0 3.89.41 5.05a5.1 5.1 0 0 0 3.06 3.06c1.16.41 2.46.41 5.05.41h6.96c2.59 0 3.89 0 5.05-.41a5.1 5.1 0 0 0 3.06-3.06c.41-1.16.41-2.46.41-5.05V8.52c0-2.59 0-3.89-.41-5.05zM17.19 15.4l-.96.27c-.53.15-.97.12-1.33-.04-.36-.16-.64-.43-.84-.81l-.29-.54c-.2-.37-.43-.65-.7-.85-.27-.2-.6-.3-.97-.3h-1.08c-.38 0-.7.1-.97.3-.27.2-.5.48-.7.85l-.29.54c-.2.38-.48.65-.84.81-.36.16-.8.19-1.33.04l-.96-.27c-.44-.13-.76-.35-.97-.66-.21-.31-.27-.69-.18-1.14l.12-.6c.09-.45.08-.85-.04-1.2-.12-.35-.35-.65-.69-.9l-.48-.35c-.34-.25-.55-.53-.63-.85-.08-.32-.02-.66.18-.99l.52-.85c.2-.33.46-.54.78-.63.32-.09.68-.05 1.08.12l.56.24c.4.17.78.23 1.14.18.36-.05.69-.22 1-.51l.42-.4c.31-.29.67-.44 1.1-.44h1.1c.42 0 .78.15 1.09.44l.43.4c.3.29.64.46 1 .51.36.05.74-.01 1.14-.18l.56-.24c.4-.17.76-.21 1.08-.12.32.09.58.3.78.63l.52.85c.2.33.26.67.18.99-.08.32-.29.6-.63.85l-.48.35c-.34.25-.57.55-.69.9-.12.35-.13.75-.04 1.2l.12.6c.09.45.03.83-.18 1.14-.21.31-.53.53-.97.66z",
      }),
    }),
  fc = [0.25, 0.1, 0.25, 1],
  AM = [
    { name: "Bitcoin", icon: PM },
    { name: "Litecoin", icon: NM },
    { name: "Card", icon: L1 },
    { name: "Link", icon: vC },
    { name: "Klarna", icon: jM },
    { name: "Amazon Pay", icon: RM },
    { name: "Cash App", icon: MM },
    { name: "Bank Transfer", icon: gC },
  ],
  LM = () => {
    const e = x.useRef(null),
      { scrollYProgress: t } = ct({
        target: e,
        offset: ["start end", "end start"],
      }),
      n = Q(t, [0, 1], [0, -80]),
      r = [
        {
          name: "MySellAuth",
          url: "https://sneak.mysellauth.com",
          label: "sneak.mysellauth.com",
        },
        {
          name: "SellHub",
          url: "https://sneak.sellhub.cx",
          label: "sneak.sellhub.cx",
        },
      ];
    return d.jsxs("section", {
      ref: e,
      id: "credits",
      className: "relative py-32 px-4 overflow-hidden",
      children: [
        d.jsx(N.div, {
          style: { y: n },
          className: "absolute inset-0 pointer-events-none",
          children: d.jsx("div", {
            className:
              "absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]",
          }),
        }),
        d.jsxs("div", {
          className: "max-w-4xl mx-auto relative z-10",
          children: [
            d.jsxs(N.div, {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.8, ease: fc },
              className: "text-center mb-16",
              children: [
                d.jsxs(N.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.8, delay: 0.1, ease: fc },
                  className:
                    "inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6",
                  children: [
                    d.jsx(L1, {
                      className: "w-4 h-4 text-primary",
                      strokeWidth: 1.5,
                    }),
                    d.jsx("span", {
                      className: "text-sm font-mono",
                      children: "Payment",
                    }),
                  ],
                }),
                d.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                  children: "Purchase Credits",
                }),
                d.jsx("p", {
                  className:
                    "text-muted-foreground text-base max-w-lg mx-auto mb-6",
                  children: "Choose your preferred payment method.",
                }),
                d.jsx("div", {
                  className:
                    "flex flex-wrap justify-center gap-2 text-xs text-muted-foreground",
                  children: AM.map((s) =>
                    d.jsxs(
                      "span",
                      {
                        className:
                          "glass px-3 py-1.5 rounded-full inline-flex items-center gap-1.5",
                        children: [d.jsx(s.icon, {}), s.name],
                      },
                      s.name,
                    ),
                  ),
                }),
              ],
            }),
            d.jsx("div", {
              className: "grid sm:grid-cols-2 gap-6",
              children: r.map((s, i) =>
                d.jsxs(
                  N.a,
                  {
                    href: s.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    initial: { opacity: 0, x: i === 0 ? -80 : 80 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0, margin: "-100px" },
                    transition: { duration: 0.8, delay: i * 0.15, ease: fc },
                    className:
                      "block w-full glass-card p-8 text-center hover:border-primary/30 transition-all duration-300",
                    children: [
                      d.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: s.name,
                      }),
                      d.jsxs("p", {
                        className:
                          "text-sm font-mono text-muted-foreground flex items-center justify-center gap-2",
                        children: [
                          s.label,
                          d.jsx(D1, { className: "w-3 h-3", strokeWidth: 1.5 }),
                        ],
                      }),
                    ],
                  },
                  s.name,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  },
  DM = "/assets/automint-1x1LPuid.png",
  OM = "/assets/rise-wGVgy-H6.png",
  IM = ({
    end: e,
    duration: t = 2e3,
    delay: n = 0,
    prefix: r = "",
    suffix: s = "",
  }) => {
    const [i, o] = x.useState(0),
      [a, l] = x.useState(!1),
      u = x.useRef(null),
      c = JR(u, { once: !0, margin: "-100px" });
    x.useEffect(() => {
      if (!c || a) return;
      const h = Date.now() + n,
        p = () => {
          const b = Date.now();
          if (b < h) {
            requestAnimationFrame(p);
            return;
          }
          const y = Math.min((b - h) / t, 1),
            w = 1 - Math.pow(1 - y, 3);
          (o(Math.floor(w * e)),
            y < 1 ? requestAnimationFrame(p) : (o(e), l(!0)));
        };
      requestAnimationFrame(p);
    }, [c, e, t, n, a]);
    const f = `${r}${i.toLocaleString()}${s}`;
    return { ref: u, displayValue: f, count: i };
  },
  hc = ({
    end: e,
    duration: t = 2e3,
    delay: n = 0,
    prefix: r = "",
    suffix: s = "",
    className: i = "",
  }) => {
    const { ref: o, displayValue: a } = IM({
      end: e,
      duration: t,
      delay: n,
      prefix: r,
      suffix: s,
    });
    return d.jsx("span", { ref: o, className: i, children: a });
  },
  Rg = ({ children: e, className: t = "", glowOnHover: n = !0 }) => {
    const r = x.useRef(null),
      [s, i] = x.useState(0),
      [o, a] = x.useState(0),
      [l, u] = x.useState(!1),
      c = (h) => {
        if (!r.current) return;
        const p = r.current.getBoundingClientRect(),
          b = p.left + p.width / 2,
          y = p.top + p.height / 2,
          w = h.clientX - b,
          m = ((h.clientY - y) / (p.height / 2)) * -3,
          v = (w / (p.width / 2)) * 3;
        (i(m), a(v));
      },
      f = () => {
        (i(0), a(0), u(!1));
      };
    return d.jsx(N.div, {
      ref: r,
      onMouseMove: c,
      onMouseEnter: () => u(!0),
      onMouseLeave: f,
      animate: { rotateX: s, rotateY: o },
      transition: { type: "spring", stiffness: 300, damping: 30 },
      style: { transformStyle: "preserve-3d", perspective: 1e3 },
      className: `${t} ${n && l ? "card-glow" : ""}`,
      children: e,
    });
  },
  Pa = [0.25, 0.1, 0.25, 1],
  VM = () =>
    d.jsx("svg", {
      className: "w-4 h-4",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: d.jsx("path", {
        d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
      }),
    }),
  FM = () => {
    const e = x.useRef(null),
      { scrollYProgress: t } = ct({
        target: e,
        offset: ["start end", "end start"],
      }),
      n = Q(t, [0, 1], [0, -80]);
    return d.jsxs("section", {
      ref: e,
      id: "partners",
      className: "relative py-32 px-4 overflow-hidden",
      children: [
        d.jsxs(N.div, {
          style: { y: n },
          className: "absolute inset-0 pointer-events-none",
          children: [
            d.jsx(N.div, {
              style: { scale: Q(t, [0, 1], [1, 1.3]) },
              className:
                "absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]",
            }),
            d.jsx(N.div, {
              style: { y: Q(t, [0, 1], [0, 40]), x: Q(t, [0, 1], [0, -20]) },
              className:
                "absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[120px]",
            }),
          ],
        }),
        d.jsxs("div", {
          className: "max-w-6xl mx-auto relative z-10",
          children: [
            d.jsxs(N.div, {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.8, ease: Pa },
              className: "text-center mb-16",
              children: [
                d.jsxs(N.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.8, delay: 0.1, ease: Pa },
                  className:
                    "inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6",
                  children: [
                    d.jsx(mC, {
                      className: "w-4 h-4 text-primary",
                      strokeWidth: 1.5,
                    }),
                    d.jsx("span", {
                      className: "text-sm font-mono",
                      children: "Partners",
                    }),
                  ],
                }),
                d.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                  children: "Trusted Partners",
                }),
                d.jsx("p", {
                  className: "text-muted-foreground text-base max-w-lg mx-auto",
                  children: "Working with the best in the industry.",
                }),
              ],
            }),
            d.jsxs("div", {
              className: "grid md:grid-cols-2 gap-8",
              children: [
                d.jsx(N.div, {
                  initial: { opacity: 0, x: -60 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.8, ease: Pa },
                  children: d.jsxs(Rg, {
                    className: "glass-card p-8 h-full flex flex-col",
                    children: [
                      d.jsx("div", {
                        className: "flex items-start justify-between mb-6",
                        children: d.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            d.jsx(N.img, {
                              src: DM,
                              alt: "AutoMint",
                              className: "w-12 h-12 rounded-xl",
                              whileHover: { scale: 1.05, rotate: 3 },
                              transition: { type: "spring", stiffness: 300 },
                            }),
                            d.jsxs("div", {
                              children: [
                                d.jsx("h3", {
                                  className: "text-2xl font-bold mb-1",
                                  children: "AutoMint MM",
                                }),
                                d.jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Official Middleman Partner",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      d.jsx("p", {
                        className: "text-muted-foreground mb-6",
                        children:
                          "Securing transactions and preventing scams for 2+ years. Your safety is their priority.",
                      }),
                      d.jsxs("div", {
                        className: "grid grid-cols-2 gap-4 mb-6",
                        children: [
                          d.jsxs("div", {
                            className:
                              "glass px-4 py-3 rounded-xl text-center hover:border-primary/20 transition-colors",
                            children: [
                              d.jsxs("p", {
                                className: "text-2xl font-bold text-primary",
                                children: [
                                  "$",
                                  d.jsx(hc, {
                                    end: 243e4,
                                    duration: 2500,
                                    suffix: "",
                                    className: "",
                                  }),
                                ],
                              }),
                              d.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Total Dealt",
                              }),
                            ],
                          }),
                          d.jsxs("div", {
                            className:
                              "glass px-4 py-3 rounded-xl text-center hover:border-primary/20 transition-colors",
                            children: [
                              d.jsx("p", {
                                className: "text-2xl font-bold text-primary",
                                children: d.jsx(hc, {
                                  end: 16915,
                                  duration: 2e3,
                                }),
                              }),
                              d.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Deals Completed",
                              }),
                            ],
                          }),
                        ],
                      }),
                      d.jsx("div", {
                        className: "flex flex-wrap gap-2 mb-6",
                        children: [
                          "Exchanges",
                          "C2C",
                          "Escrow",
                          "Account Marketplace",
                          "Middleman Services",
                          "Skyblock Marketplace",
                          "Discord Services",
                        ].map((r, s) =>
                          d.jsx(
                            N.span,
                            {
                              initial: { opacity: 0, scale: 0.8 },
                              whileInView: { opacity: 1, scale: 1 },
                              viewport: { once: !0 },
                              transition: { delay: s * 0.05 },
                              className:
                                "text-xs glass px-2.5 py-1 rounded-full hover:border-primary/30 transition-colors cursor-default",
                              children: r,
                            },
                            r,
                          ),
                        ),
                      }),
                      d.jsxs("div", {
                        className: "flex items-center gap-3 mt-auto",
                        children: [
                          d.jsxs(N.a, {
                            whileHover: { scale: 1.02 },
                            whileTap: { scale: 0.98 },
                            href: "https://discord.gg/UBkCsCMZCk",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "inline-flex items-center gap-2 bg-[#5865F2] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-[#4752C4] hover:shadow-lg hover:shadow-[#5865F2]/30",
                            children: [d.jsx(VM, {}), "Join Discord"],
                          }),
                          d.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Safe & secure transactions",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                d.jsx(N.div, {
                  initial: { opacity: 0, x: 60 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.8, delay: 0.15, ease: Pa },
                  children: d.jsxs(Rg, {
                    className: "glass-card p-8 h-full flex flex-col",
                    children: [
                      d.jsx("div", {
                        className: "flex items-start justify-between mb-6",
                        children: d.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            d.jsx(N.img, {
                              src: OM,
                              alt: "Rise Client",
                              className: "w-12 h-12 rounded-xl",
                              whileHover: { scale: 1.05, rotate: -3 },
                              transition: { type: "spring", stiffness: 300 },
                            }),
                            d.jsxs("div", {
                              children: [
                                d.jsx("h3", {
                                  className: "text-2xl font-bold mb-1",
                                  children: "Rise Client",
                                }),
                                d.jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Official Client Partner",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      d.jsx("p", {
                        className: "text-muted-foreground mb-6",
                        children:
                          "Bypass popular servers like Hypixel, Cubecraft, BlocksMC and more with the most trusted client.",
                      }),
                      d.jsxs("div", {
                        className: "grid grid-cols-3 gap-3 mb-6",
                        children: [
                          d.jsxs("div", {
                            className:
                              "glass px-3 py-3 rounded-xl text-center hover:border-primary/20 transition-colors",
                            children: [
                              d.jsx("p", {
                                className: "text-xl font-bold text-primary",
                                children: d.jsx(hc, {
                                  end: 20,
                                  duration: 1500,
                                  suffix: "K+",
                                }),
                              }),
                              d.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Active Users",
                              }),
                            ],
                          }),
                          d.jsxs("div", {
                            className:
                              "glass px-3 py-3 rounded-xl text-center hover:border-primary/20 transition-colors",
                            children: [
                              d.jsx(N.div, {
                                animate: { rotate: [0, 10, -10, 0] },
                                transition: {
                                  duration: 4,
                                  repeat: 1 / 0,
                                  ease: "easeInOut",
                                },
                                children: d.jsx(pC, {
                                  className:
                                    "w-5 h-5 text-primary mx-auto mb-1",
                                  strokeWidth: 1.5,
                                }),
                              }),
                              d.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "8+ Languages",
                              }),
                            ],
                          }),
                          d.jsxs("div", {
                            className:
                              "glass px-3 py-3 rounded-xl text-center hover:border-primary/20 transition-colors",
                            children: [
                              d.jsx(N.div, {
                                animate: { scale: [1, 1.1, 1] },
                                transition: {
                                  duration: 2,
                                  repeat: 1 / 0,
                                  ease: "easeInOut",
                                },
                                children: d.jsx(yC, {
                                  className:
                                    "w-5 h-5 text-primary mx-auto mb-1",
                                  strokeWidth: 1.5,
                                }),
                              }),
                              d.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "1.8 - 1.21.4",
                              }),
                            ],
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "flex flex-wrap gap-2 mb-6",
                        children: [
                          [
                            "Lunar",
                            "Feather",
                            "Badlion",
                            "Labymod",
                            "Salwyrr",
                            "CheatBreaker",
                          ].map((r, s) =>
                            d.jsx(
                              N.span,
                              {
                                initial: { opacity: 0, scale: 0.8 },
                                whileInView: { opacity: 1, scale: 1 },
                                viewport: { once: !0 },
                                transition: { delay: s * 0.05 },
                                className:
                                  "text-xs glass px-2.5 py-1 rounded-full hover:border-primary/30 transition-colors cursor-default",
                                children: r,
                              },
                              r,
                            ),
                          ),
                          d.jsx(N.span, {
                            initial: { opacity: 0, scale: 0.8 },
                            whileInView: { opacity: 1, scale: 1 },
                            viewport: { once: !0 },
                            transition: { delay: 0.3 },
                            className:
                              "text-xs glass px-2.5 py-1 rounded-full hover:border-primary/30 transition-colors cursor-default",
                            children: "+ More",
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "flex items-center gap-3 mt-auto",
                        children: [
                          d.jsxs(N.a, {
                            whileHover: { scale: 1.02 },
                            whileTap: { scale: 0.98 },
                            href: "#rise",
                            className:
                              "inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20",
                            children: [
                              d.jsx(O1, {
                                className: "w-4 h-4",
                                strokeWidth: 1.5,
                              }),
                              "Learn More",
                            ],
                          }),
                          d.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children:
                              "Import & purchase solutions directly in-client",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  hs = [0.25, 0.1, 0.25, 1],
  _M = () => {
    const e = new Date().getFullYear(),
      { isRaveMode: t, toggleRaveMode: n } = qt();
    return d.jsx(N.footer, {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: !0, margin: "-100px" },
      transition: { duration: 0.7, ease: hs },
      className: "relative py-16 px-4 border-t border-border/15",
      children: d.jsx("div", {
        className: "max-w-5xl mx-auto",
        children: d.jsxs("div", {
          className: "flex flex-col items-center text-center",
          children: [
            d.jsxs(N.a, {
              href: "#",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.6, delay: 0.1, ease: hs },
              className: "flex items-center gap-2 mb-5",
              children: [
                d.jsx(V1, {
                  className: `w-4 h-4 ${t ? "sneak-text" : "text-primary"}`,
                  strokeWidth: 1.5,
                }),
                d.jsx("span", {
                  className: `text-xl font-bold ${t ? "sneak-text" : ""}`,
                  children: "SneaK",
                }),
              ],
            }),
            d.jsx(N.p, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.6, delay: 0.12, ease: hs },
              className: "text-muted-foreground text-xs mb-6 max-w-sm",
              children: "Premium software engineered for peak performance.",
            }),
            d.jsxs(N.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.6, delay: 0.14, ease: hs },
              className: "flex flex-wrap justify-center gap-6 mb-6 text-xs",
              children: [
                d.jsx("a", {
                  href: "#inventory",
                  className:
                    "text-muted-foreground hover:text-foreground transition-colors",
                  children: "Shop",
                }),
                d.jsx("a", {
                  href: "#vouches",
                  className:
                    "text-muted-foreground hover:text-foreground transition-colors",
                  children: "Vouches",
                }),
              ],
            }),
            d.jsxs(N.a, {
              href: "https://discord.gg/UBkCsCMZCk",
              target: "_blank",
              rel: "noopener noreferrer",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.6, delay: 0.16, ease: hs },
              className:
                "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8",
              children: [
                d.jsx(sh, { className: "w-3.5 h-3.5", strokeWidth: 1.5 }),
                "discord.gg/AYCfPYxQwm",
              ],
            }),
            d.jsxs(N.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 0.6, delay: 0.18, ease: hs },
              className: "text-[10px] text-muted-foreground/40",
              children: [
                d.jsxs("p", {
                  children: ["© ", e, " SneakSolutions. All rights reserved."],
                }),
                d.jsx("p", {
                  className: "mt-0.5",
                  children: "",
                }),
              ],
            }),
            d.jsx(N.button, {
              onClick: n,
              whileHover: { scale: 1.15 },
              whileTap: { scale: 0.95 },
              className: `mt-6 w-4 h-4 rounded-full cursor-pointer transition-all duration-250 relative ${t ? "sneak-glow animate-pulse" : ""}`,
              style: {
                background: t
                  ? "linear-gradient(135deg, #ff0000, #ff00ff, #00ffff)"
                  : "linear-gradient(180deg, hsl(263 70% 55%), hsl(263 70% 40%))",
                boxShadow: t
                  ? "0 0 15px rgba(255, 0, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)"
                  : "0 2px 6px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
              },
              title: "???",
              "aria-label": "Toggle secret mode",
              children: d.jsx("span", {
                className: "absolute inset-[1px] rounded-full opacity-50",
                style: {
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 60%)",
                },
              }),
            }),
          ],
        }),
      }),
    });
  },
  zM = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(0);
    x.useEffect(() => {
      const i = () => {
        const o = window.scrollY,
          a = document.documentElement.scrollHeight - window.innerHeight,
          l = (o / a) * 100;
        (r(l), t(o > 400));
      };
      return (
        window.addEventListener("scroll", i),
        () => window.removeEventListener("scroll", i)
      );
    }, []);
    const s = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return d.jsx(Yo, {
      children:
        e &&
        d.jsxs(N.button, {
          initial: { opacity: 0, scale: 0.8, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.8, y: 20 },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.95 },
          onClick: s,
          className:
            "fixed bottom-8 right-8 z-50 p-3 rounded-full glass border border-border/30 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group",
          "aria-label": "Scroll to top",
          children: [
            d.jsxs("svg", {
              className: "absolute inset-0 w-full h-full -rotate-90",
              viewBox: "0 0 48 48",
              children: [
                d.jsx("circle", {
                  cx: "24",
                  cy: "24",
                  r: "22",
                  fill: "none",
                  stroke: "hsl(var(--border))",
                  strokeWidth: "1",
                  opacity: "0.3",
                }),
                d.jsx(N.circle, {
                  cx: "24",
                  cy: "24",
                  r: "22",
                  fill: "none",
                  stroke: "hsl(var(--primary))",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeDasharray: 138,
                  strokeDashoffset: 138 - (138 * n) / 100,
                  style: { transition: "stroke-dashoffset 0.1s ease" },
                }),
              ],
            }),
            d.jsx(uC, {
              className:
                "w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10",
              strokeWidth: 1.5,
            }),
          ],
        }),
    });
  },
  Pr = ({ variant: e = "gradient", className: t = "" }) =>
    e === "wave"
      ? d.jsx("div", {
          className: `relative h-20 overflow-hidden ${t}`,
          children: d.jsx("svg", {
            className: "absolute bottom-0 w-full h-20",
            viewBox: "0 0 1440 80",
            preserveAspectRatio: "none",
            children: d.jsx(N.path, {
              initial: { pathLength: 0, opacity: 0 },
              whileInView: { pathLength: 1, opacity: 1 },
              viewport: { once: !0 },
              transition: { duration: 1.5, ease: "easeOut" },
              fill: "none",
              stroke: "hsl(263 70% 50% / 0.2)",
              strokeWidth: "1",
              d: "M0,40 C360,80 720,0 1080,40 C1260,60 1380,60 1440,40",
            }),
          }),
        })
      : e === "dots"
        ? d.jsx("div", {
            className: `flex justify-center gap-2 py-8 ${t}`,
            children: [0, 1, 2].map((n) =>
              d.jsx(
                N.div,
                {
                  initial: { scale: 0, opacity: 0 },
                  whileInView: { scale: 1, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { delay: n * 0.1, duration: 0.3 },
                  className: "w-1.5 h-1.5 rounded-full bg-primary/30",
                },
                n,
              ),
            ),
          })
        : d.jsx(N.div, {
            initial: { scaleX: 0, opacity: 0 },
            whileInView: { scaleX: 1, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.8, ease: "easeOut" },
            className: `gradient-divider mx-auto max-w-md ${t}`,
          }),
  $M = ({ onLoadingComplete: e }) => {
    const [t, n] = x.useState(!0),
      [r, s] = x.useState(!1);
    return (
      x.useEffect(() => {
        setTimeout(() => s(!0), 100);
        const i = setTimeout(() => {
          (n(!1), setTimeout(e, 800));
        }, 2200);
        return () => clearTimeout(i);
      }, [e]),
      d.jsx(Yo, {
        children:
          t &&
          d.jsxs(N.div, {
            initial: { opacity: 1 },
            exit: {
              opacity: 0,
              transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
            },
            className:
              "fixed inset-0 z-[10000] bg-background flex items-center justify-center overflow-hidden",
            children: [
              d.jsx(N.div, {
                className:
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full",
                style: {
                  background:
                    "radial-gradient(circle, hsl(217 91% 60% / 0.08) 0%, transparent 60%)",
                },
                initial: { scale: 0.8, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { duration: 1.5, ease: "easeOut" },
              }),
              d.jsxs("div", {
                className: "relative z-10 flex flex-col items-center",
                children: [
                  d.jsx("div", {
                    className: "overflow-hidden",
                    children: d.jsx(N.div, {
                      initial: { y: 80 },
                      animate: r ? { y: 0 } : { y: 80 },
                      transition: {
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1,
                      },
                      children: d.jsxs("h1", {
                        className:
                          "text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight",
                        children: [
                          d.jsx(N.span, {
                            className: "inline-block text-gradient-animate",
                            initial: { opacity: 0 },
                            animate: r ? { opacity: 1 } : { opacity: 0 },
                            transition: { duration: 0.4, delay: 0.3 },
                            children: "sneak",
                          }),
                          d.jsx(N.span, {
                            className: "inline-block text-gradient-animate",
                            initial: { opacity: 0 },
                            animate: r ? { opacity: 1 } : { opacity: 0 },
                            transition: { duration: 0.4, delay: 0.5 },
                            children: "solutions",
                          }),
                          d.jsx(N.span, {
                            className: "inline-block text-primary",
                            initial: { opacity: 0, scale: 0 },
                            animate: r
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0 },
                            transition: {
                              duration: 0.4,
                              delay: 0.7,
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                            },
                            children: ".",
                          }),
                        ],
                      }),
                    }),
                  }),
                  d.jsx(N.div, {
                    initial: { opacity: 0, width: 0 },
                    animate: r
                      ? { opacity: 1, width: 120 }
                      : { opacity: 0, width: 0 },
                    transition: {
                      duration: 0.6,
                      delay: 0.9,
                      ease: [0.4, 0, 0.2, 1],
                    },
                    className:
                      "mt-8 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent overflow-hidden",
                    children: d.jsx(N.div, {
                      className: "h-full w-full bg-primary",
                      initial: { x: "-100%" },
                      animate: { x: "100%" },
                      transition: {
                        duration: 1,
                        repeat: 1 / 0,
                        ease: "linear",
                        delay: 1,
                      },
                    }),
                  }),
                ],
              }),
              d.jsxs(N.div, {
                initial: { opacity: 0, x: -20, y: -20 },
                animate: r ? { opacity: 0.4, x: 0, y: 0 } : {},
                transition: { duration: 0.6, delay: 0.8 },
                className: "absolute top-6 left-6 w-12 h-12",
                children: [
                  d.jsx("div", {
                    className:
                      "absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-foreground/30 to-transparent",
                  }),
                  d.jsx("div", {
                    className:
                      "absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-foreground/30 to-transparent",
                  }),
                ],
              }),
              d.jsxs(N.div, {
                initial: { opacity: 0, x: 20, y: 20 },
                animate: r ? { opacity: 0.4, x: 0, y: 0 } : {},
                transition: { duration: 0.6, delay: 0.8 },
                className: "absolute bottom-6 right-6 w-12 h-12",
                children: [
                  d.jsx("div", {
                    className:
                      "absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-foreground/30 to-transparent",
                  }),
                  d.jsx("div", {
                    className:
                      "absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-foreground/30 to-transparent",
                  }),
                ],
              }),
            ],
          }),
      })
    );
  },
  Nr = ({
    children: e,
    className: t = "",
    animation: n = "slideUp",
    intensity: r = 1,
  }) => {
    const s = x.useRef(null),
      { scrollYProgress: i } = ct({
        target: s,
        offset: ["start end", "end start"],
      }),
      o = Q(i, [0, 0.18], [0, 1]),
      a = Q(i, [0, 1], [70 * r, -50 * r]),
      l = Q(i, [0, 1], [-70 * r, 50 * r]),
      u = Q(i, [0, 1], [70 * r, -50 * r]),
      c = Q(i, [0, 0.5, 1], [0.96, 1.02, 0.98]),
      f = Q(i, [0, 1], [110 * r, -110 * r]),
      h = () => {
        switch (n) {
          case "fade":
            return { opacity: o };
          case "slideUp":
            return { opacity: o, y: a };
          case "slideLeft":
            return { opacity: o, x: l };
          case "slideRight":
            return { opacity: o, x: u };
          case "scale":
            return { opacity: o, scale: c };
          case "parallax":
            return { y: f };
          default:
            return { opacity: o, y: a };
        }
      };
    return d.jsx(N.div, { ref: s, className: t, style: h(), children: e });
  },
  BM = () => {
    const { isBassDrop: e } = qt();
    return e
      ? d.jsxs(N.div, {
          className: "fixed inset-0 z-[101] pointer-events-none",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          children: [
            d.jsx(N.div, {
              className: "absolute inset-0 bg-white",
              initial: { opacity: 1 },
              animate: { opacity: [1, 0, 0.5, 0, 0.3, 0] },
              transition: { duration: 1, times: [0, 0.1, 0.2, 0.4, 0.5, 1] },
            }),
            d.jsx(N.div, {
              className: "absolute inset-0",
              initial: { scale: 1.3 },
              animate: { scale: 1 },
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            }),
            [...Array(5)].map((t, n) =>
              d.jsx(
                N.div,
                {
                  className:
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4",
                  style: {
                    borderColor: [
                      "#ff0000",
                      "#00ff00",
                      "#0000ff",
                      "#ff00ff",
                      "#ffff00",
                    ][n],
                  },
                  initial: { width: 0, height: 0, opacity: 1 },
                  animate: {
                    width: ["0vw", "200vw"],
                    height: ["0vw", "200vw"],
                    opacity: [1, 0],
                  },
                  transition: { duration: 1, delay: n * 0.1, ease: "easeOut" },
                },
                n,
              ),
            ),
            d.jsx(N.div, {
              className: "absolute inset-0 flex items-center justify-center",
              initial: { scale: 0, opacity: 0 },
              animate: { scale: [0, 2, 1.5], opacity: [0, 1, 0] },
              transition: { duration: 0.8, times: [0, 0.3, 1] },
              children: d.jsx("span", {
                className: "text-[100px] md:text-[200px] font-black text-white",
                style: {
                  textShadow:
                    "0 0 60px #ff0000, 0 0 120px #ff00ff, 0 0 180px #00ffff",
                },
                children: "DROP",
              }),
            }),
            d.jsx(N.div, {
              className: "absolute inset-0",
              animate: {
                x: [0, -20, 20, -15, 15, -10, 10, -5, 5, 0],
                y: [0, 15, -15, 10, -10, 5, -5, 2, -2, 0],
              },
              transition: { duration: 0.5 },
            }),
          ],
        })
      : null;
  },
  UM = () => {
    const { isCountingDown: e, countdownNumber: t } = qt();
    return e
      ? d.jsxs(N.div, {
          className:
            "fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          children: [
            d.jsxs(N.div, {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              className: "text-center mb-8",
              children: [
                d.jsxs("p", {
                  className:
                    "text-red-500 text-xl md:text-2xl font-bold mb-2 flex items-center justify-center gap-2",
                  children: [
                    d.jsx("svg", {
                      className: "w-6 h-6",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: d.jsx("path", {
                        fillRule: "evenodd",
                        d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                        clipRule: "evenodd",
                      }),
                    }),
                    "EPILEPSY WARNING",
                  ],
                }),
                d.jsx("p", {
                  className: "text-white/60 text-sm md:text-base",
                  children: "Flashing lights and rapid visual effects ahead",
                }),
                d.jsx("p", {
                  className: "text-white/40 text-xs mt-2",
                  children: "Press ESC anytime to exit",
                }),
              ],
            }),
            d.jsx(Yo, {
              mode: "wait",
              children:
                t &&
                d.jsxs(
                  N.div,
                  {
                    initial: { scale: 0.5, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 2, opacity: 0 },
                    transition: { duration: 0.3 },
                    className: "relative",
                    children: [
                      d.jsx("span", {
                        className:
                          "text-[150px] md:text-[200px] font-black text-white",
                        style: {
                          textShadow:
                            "0 0 40px #ff0000, 0 0 80px #ff00ff, 0 0 120px #00ffff",
                        },
                        children: t,
                      }),
                      d.jsx(N.div, {
                        className:
                          "absolute inset-0 rounded-full border-4 border-white/30",
                        initial: { scale: 0.8, opacity: 1 },
                        animate: { scale: 2, opacity: 0 },
                        transition: { duration: 0.8, repeat: 1 / 0 },
                        style: {
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          width: 200,
                          height: 200,
                          marginLeft: -100,
                          marginTop: -100,
                        },
                      }),
                    ],
                  },
                  t,
                ),
            }),
            d.jsx(N.p, {
              initial: { opacity: 0 },
              animate: { opacity: [0.5, 1, 0.5] },
              transition: { duration: 1, repeat: 1 / 0 },
              className: "text-white/80 text-lg md:text-xl mt-8 font-medium",
              children: "GET READY",
            }),
          ],
        })
      : null;
  },
  WM = ({ variant: e = 0 }) => {
    const t = [
      d.jsxs(
        "svg",
        {
          viewBox: "0 0 40 80",
          fill: "currentColor",
          className: "w-full h-full",
          children: [
            d.jsx("circle", { cx: "20", cy: "8", r: "6" }),
            d.jsx("path", {
              d: "M20 14 L20 35 M10 22 L20 18 L30 22 M15 55 L20 35 L25 55 M15 55 L12 75 M25 55 L28 75",
              stroke: "currentColor",
              strokeWidth: "3",
              fill: "none",
              strokeLinecap: "round",
            }),
          ],
        },
        "0",
      ),
      d.jsxs(
        "svg",
        {
          viewBox: "0 0 40 80",
          fill: "currentColor",
          className: "w-full h-full",
          children: [
            d.jsx("circle", { cx: "20", cy: "8", r: "6" }),
            d.jsx("path", {
              d: "M20 14 L20 35 M8 35 L20 25 L28 15 M15 55 L20 35 L25 55 M15 55 L10 75 M25 55 L30 75",
              stroke: "currentColor",
              strokeWidth: "3",
              fill: "none",
              strokeLinecap: "round",
            }),
          ],
        },
        "1",
      ),
      d.jsxs(
        "svg",
        {
          viewBox: "0 0 40 80",
          fill: "currentColor",
          className: "w-full h-full",
          children: [
            d.jsx("circle", { cx: "20", cy: "8", r: "6" }),
            d.jsx("path", {
              d: "M20 14 L20 35 M5 30 L20 25 L35 30 M15 55 L20 35 L25 55 M15 55 L8 72 M25 55 L32 72",
              stroke: "currentColor",
              strokeWidth: "3",
              fill: "none",
              strokeLinecap: "round",
            }),
          ],
        },
        "2",
      ),
      d.jsxs(
        "svg",
        {
          viewBox: "0 0 40 80",
          fill: "currentColor",
          className: "w-full h-full",
          children: [
            d.jsx("circle", { cx: "20", cy: "8", r: "6" }),
            d.jsx("path", {
              d: "M20 14 L20 35 M8 18 L20 22 L32 18 M12 60 L20 35 L28 60 M12 60 L5 75 M28 60 L35 75",
              stroke: "currentColor",
              strokeWidth: "3",
              fill: "none",
              strokeLinecap: "round",
            }),
          ],
        },
        "3",
      ),
    ];
    return t[e % t.length];
  },
  HM = ({ color: e }) =>
    d.jsx("div", {
      className: "w-3 h-3 rounded-sm",
      style: { backgroundColor: e, boxShadow: `0 0 10px ${e}` },
    }),
  KM = ({ type: e, color: t }) => {
    const n = [
      d.jsx(
        "div",
        {
          className: "w-6 h-6 border-2 rotate-45",
          style: { borderColor: t, boxShadow: `0 0 8px ${t}` },
        },
        "0",
      ),
      d.jsx(
        "div",
        {
          className: "w-6 h-6 border-2 rounded-full",
          style: { borderColor: t, boxShadow: `0 0 8px ${t}` },
        },
        "1",
      ),
      d.jsx(
        "div",
        {
          className:
            "w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent",
          style: { borderBottomColor: t, filter: `drop-shadow(0 0 8px ${t})` },
        },
        "2",
      ),
      d.jsx(
        "div",
        {
          className: "w-6 h-6 border-2",
          style: {
            borderColor: t,
            boxShadow: `0 0 8px ${t}`,
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          },
        },
        "3",
      ),
      d.jsx(
        "div",
        {
          className: "w-6 h-6 flex items-center justify-center",
          style: { color: t, filter: `drop-shadow(0 0 8px ${t})` },
          children: d.jsx("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-full h-full",
            children: d.jsx("path", {
              d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
            }),
          }),
        },
        "4",
      ),
      d.jsx(
        "div",
        {
          className: "w-6 h-8 flex items-center justify-center",
          style: { color: t, filter: `drop-shadow(0 0 8px ${t})` },
          children: d.jsx("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-full h-full",
            children: d.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" }),
          }),
        },
        "5",
      ),
    ];
    return n[e % n.length];
  },
  YM = ({ color: e, size: t }) =>
    d.jsx("div", {
      className: "rounded-full",
      style: {
        width: t,
        height: t,
        backgroundColor: e,
        boxShadow: `0 0 ${t}px ${e}, 0 0 ${t * 2}px ${e}`,
      },
    }),
  dt = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ff00ff",
    "#ffff00",
    "#00ffff",
    "#ff6600",
    "#9900ff",
  ],
  Mg = ["SNEAK", "GO", "PARTY", "WOW", "HYPE", "DROP", "BASS", "BOOM"],
  QM = () => {
    const { isRaveMode: e } = qt(),
      [t, n] = x.useState([]),
      [r, s] = x.useState([]);
    return (
      x.useEffect(() => {
        if (e) {
          const i = Array.from({ length: 60 }, (u, c) => ({
            id: c,
            type: ["confetti", "confetti", "shape", "shape", "orb", "text"][
              Math.floor(Math.random() * 6)
            ],
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 8 + Math.random() * 20,
            delay: Math.random() * 3,
            duration: 2 + Math.random() * 4,
            variant: Math.floor(Math.random() * 6),
            color: dt[Math.floor(Math.random() * dt.length)],
          }));
          n(i);
          const o = [];
          for (let u = 0; u < 30; u++)
            o.push({
              id: u,
              x: Math.random() * 100,
              y: 0,
              variant: Math.floor(Math.random() * 4),
              jumpPhase: Math.random() * Math.PI * 2,
              scale: 0.4 + Math.random() * 0.2,
              brightness: 0.3,
            });
          for (let u = 30; u < 70; u++)
            o.push({
              id: u,
              x: Math.random() * 100,
              y: 20,
              variant: Math.floor(Math.random() * 4),
              jumpPhase: Math.random() * Math.PI * 2,
              scale: 0.5 + Math.random() * 0.2,
              brightness: 0.5,
            });
          for (let u = 70; u < 120; u++)
            o.push({
              id: u,
              x: Math.random() * 100,
              y: 40,
              variant: Math.floor(Math.random() * 4),
              jumpPhase: Math.random() * Math.PI * 2,
              scale: 0.7 + Math.random() * 0.3,
              brightness: 0.8,
            });
          for (let u = 120; u < 150; u++)
            o.push({
              id: u,
              x: Math.random() * 100,
              y: 60,
              variant: Math.floor(Math.random() * 4),
              jumpPhase: Math.random() * Math.PI * 2,
              scale: 0.9 + Math.random() * 0.3,
              brightness: 1,
            });
          s(o);
          const a = setInterval(() => {
              n((u) => {
                const c = [...u];
                return (
                  Array.from({ length: 5 }, () =>
                    Math.floor(Math.random() * c.length),
                  ).forEach((h) => {
                    c[h] = {
                      ...c[h],
                      id: Date.now() + h,
                      x: Math.random() * 100,
                      y: -10,
                      color: dt[Math.floor(Math.random() * dt.length)],
                    };
                  }),
                  c
                );
              });
            }, 300),
            l = setInterval(() => {
              s((u) => u.map((c) => ({ ...c, variant: (c.variant + 1) % 4 })));
            }, 250);
          return () => {
            (clearInterval(a), clearInterval(l));
          };
        } else (n([]), s([]));
      }, [e]),
      d.jsxs(d.Fragment, {
        children: [
          d.jsx(UM, {}),
          d.jsx(BM, {}),
          e
            ? d.jsxs(d.Fragment, {
                children: [
                  d.jsx("div", {
                    className:
                      "fixed inset-0 pointer-events-none z-50 overflow-hidden",
                    children: d.jsx(Yo, {
                      children: t.map((i) =>
                        d.jsxs(
                          N.div,
                          {
                            initial: {
                              opacity: 0,
                              scale: 0,
                              x: `${i.x}vw`,
                              y: `${i.y}vh`,
                              rotate: 0,
                            },
                            animate: {
                              opacity: [0, 1, 1, 0.5, 0],
                              scale: [0, 1.5, 1, 1.2, 0.5],
                              x: [
                                `${i.x}vw`,
                                `${i.x + (Math.random() - 0.5) * 30}vw`,
                                `${i.x + (Math.random() - 0.5) * 50}vw`,
                              ],
                              y: [`${i.y}vh`, `${i.y + 30}vh`, `${i.y + 80}vh`],
                              rotate: [0, 360, 720],
                            },
                            transition: {
                              duration: i.duration,
                              delay: i.delay,
                              repeat: 1 / 0,
                              ease: "linear",
                            },
                            className: "absolute",
                            style: { fontSize: i.size, color: i.color },
                            children: [
                              i.type === "confetti" &&
                                d.jsx(HM, { color: i.color }),
                              i.type === "shape" &&
                                d.jsx(KM, { type: i.variant, color: i.color }),
                              i.type === "orb" &&
                                d.jsx(YM, { color: i.color, size: i.size }),
                              i.type === "text" &&
                                d.jsx("span", {
                                  className: "font-black",
                                  style: {
                                    color: i.color,
                                    fontSize: i.size * 1.2,
                                    textShadow: `0 0 10px ${i.color}`,
                                  },
                                  children: Mg[i.variant % Mg.length],
                                }),
                            ],
                          },
                          i.id,
                        ),
                      ),
                    }),
                  }),
                  d.jsxs("div", {
                    className:
                      "fixed bottom-0 left-0 right-0 pointer-events-none z-40 h-48",
                    children: [
                      r.map((i) =>
                        d.jsx(
                          N.div,
                          {
                            className: "absolute",
                            style: {
                              left: `${i.x}%`,
                              bottom: i.y,
                              width: 30 * i.scale,
                              height: 60 * i.scale,
                              opacity: i.brightness,
                              zIndex: Math.floor(i.y),
                            },
                            animate: {
                              y: [0, -20 * i.scale, 0, -15 * i.scale, 0],
                              scaleY: [1, 1.1, 0.95, 1.05, 1],
                              rotate: [-3, 3, -2, 2, 0],
                            },
                            transition: {
                              duration: 0.4 + Math.random() * 0.2,
                              repeat: 1 / 0,
                              delay: i.jumpPhase * 0.05,
                              ease: "easeInOut",
                            },
                            children: d.jsx(N.div, {
                              className: "text-white",
                              animate: {
                                filter: [
                                  `drop-shadow(0 0 ${8 * i.scale}px #ff0000)`,
                                  `drop-shadow(0 0 ${8 * i.scale}px #00ff00)`,
                                  `drop-shadow(0 0 ${8 * i.scale}px #0000ff)`,
                                  `drop-shadow(0 0 ${8 * i.scale}px #ff00ff)`,
                                ],
                              },
                              transition: { duration: 0.3, repeat: 1 / 0 },
                              children: d.jsx(WM, { variant: i.variant }),
                            }),
                          },
                          i.id,
                        ),
                      ),
                      d.jsx("div", {
                        className:
                          "absolute bottom-0 left-0 right-0 h-20 pointer-events-none",
                        style: {
                          background:
                            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)",
                        },
                      }),
                    ],
                  }),
                  d.jsx("div", {
                    className:
                      "fixed bottom-36 left-0 right-0 pointer-events-none z-41 flex justify-around",
                    children: Array.from({ length: 25 }).map((i, o) =>
                      d.jsx(
                        N.div,
                        {
                          className: "text-white/60",
                          style: { width: 12, height: 35 },
                          animate: {
                            y: [0, -25, 0],
                            rotate: [-10, 10, -10],
                            opacity: [0.3, 0.7, 0.3],
                          },
                          transition: {
                            duration: 0.4,
                            repeat: 1 / 0,
                            delay: o * 0.08,
                          },
                          children: d.jsx("svg", {
                            viewBox: "0 0 20 50",
                            fill: "currentColor",
                            children: d.jsx("path", {
                              d: "M10 50 L10 20 M10 20 L5 10 M10 20 L10 5 M10 20 L15 10",
                              stroke: "currentColor",
                              strokeWidth: "3",
                              fill: "none",
                              strokeLinecap: "round",
                            }),
                          }),
                        },
                        `hand-${o}`,
                      ),
                    ),
                  }),
                  d.jsxs("div", {
                    className: "fixed inset-0 pointer-events-none z-30",
                    children: [
                      d.jsx(N.div, {
                        className: "absolute top-0 left-0 w-1/2 h-1/2 blur-3xl",
                        animate: {
                          backgroundColor: [
                            "rgba(255,0,0,0.3)",
                            "rgba(0,255,0,0.3)",
                            "rgba(0,0,255,0.3)",
                            "rgba(255,0,255,0.3)",
                          ],
                          scale: [1, 1.5, 1],
                        },
                        transition: { duration: 0.8, repeat: 1 / 0 },
                      }),
                      d.jsx(N.div, {
                        className:
                          "absolute top-0 right-0 w-1/2 h-1/2 blur-3xl",
                        animate: {
                          backgroundColor: [
                            "rgba(0,255,0,0.3)",
                            "rgba(0,0,255,0.3)",
                            "rgba(255,0,255,0.3)",
                            "rgba(255,0,0,0.3)",
                          ],
                          scale: [1, 1.5, 1],
                        },
                        transition: {
                          duration: 0.8,
                          repeat: 1 / 0,
                          delay: 0.2,
                        },
                      }),
                      d.jsx(N.div, {
                        className:
                          "absolute bottom-48 left-0 w-1/2 h-1/3 blur-3xl",
                        animate: {
                          backgroundColor: [
                            "rgba(0,0,255,0.3)",
                            "rgba(255,0,255,0.3)",
                            "rgba(255,0,0,0.3)",
                            "rgba(0,255,0,0.3)",
                          ],
                          scale: [1, 1.5, 1],
                        },
                        transition: {
                          duration: 0.8,
                          repeat: 1 / 0,
                          delay: 0.4,
                        },
                      }),
                      d.jsx(N.div, {
                        className:
                          "absolute bottom-48 right-0 w-1/2 h-1/3 blur-3xl",
                        animate: {
                          backgroundColor: [
                            "rgba(255,0,255,0.3)",
                            "rgba(255,0,0,0.3)",
                            "rgba(0,255,0,0.3)",
                            "rgba(0,0,255,0.3)",
                          ],
                          scale: [1, 1.5, 1],
                        },
                        transition: {
                          duration: 0.8,
                          repeat: 1 / 0,
                          delay: 0.1,
                        },
                      }),
                    ],
                  }),
                  d.jsx("div", {
                    className:
                      "fixed inset-0 pointer-events-none z-20 overflow-hidden",
                    children: [...Array(6)].map((i, o) =>
                      d.jsx(
                        N.div,
                        {
                          className: "absolute origin-top",
                          style: {
                            left: `${10 + o * 18}%`,
                            top: 0,
                            width: "60px",
                            height: "70vh",
                            background: `linear-gradient(to bottom, ${dt[o % dt.length]} 0%, ${dt[o % dt.length]}88 30%, transparent 100%)`,
                            opacity: 0.4,
                            filter: "blur(2px)",
                          },
                          animate: {
                            rotate: [-25, 25, -25],
                            opacity: [0.2, 0.5, 0.2],
                          },
                          transition: {
                            duration: 1.5 + o * 0.3,
                            repeat: 1 / 0,
                            delay: o * 0.2,
                            ease: "easeInOut",
                          },
                        },
                        o,
                      ),
                    ),
                  }),
                  d.jsxs("div", {
                    className:
                      "fixed inset-0 pointer-events-none z-25 overflow-hidden",
                    children: [
                      [...Array(5)].map((i, o) =>
                        d.jsx(
                          N.div,
                          {
                            className: "absolute h-[2px]",
                            style: {
                              width: "200%",
                              left: "-50%",
                              top: `${10 + o * 12}%`,
                              background: `linear-gradient(to right, transparent, ${dt[o % dt.length]}, transparent)`,
                            },
                            animate: { x: ["-50%", "50%"], opacity: [0, 1, 0] },
                            transition: {
                              duration: 0.6 + o * 0.1,
                              repeat: 1 / 0,
                              delay: o * 0.12,
                              ease: "linear",
                            },
                          },
                          `h-${o}`,
                        ),
                      ),
                      [...Array(6)].map((i, o) =>
                        d.jsx(
                          N.div,
                          {
                            className: "absolute w-[2px]",
                            style: {
                              height: "60vh",
                              top: "0",
                              left: `${12 + o * 15}%`,
                              background: `linear-gradient(to bottom, transparent, ${dt[(o + 3) % dt.length]}, transparent)`,
                            },
                            animate: {
                              y: ["-20%", "40%"],
                              opacity: [0, 0.8, 0],
                            },
                            transition: {
                              duration: 0.8 + o * 0.1,
                              repeat: 1 / 0,
                              delay: o * 0.1,
                              ease: "linear",
                            },
                          },
                          `v-${o}`,
                        ),
                      ),
                    ],
                  }),
                  d.jsx(N.div, {
                    className:
                      "fixed inset-0 pointer-events-none z-60 bg-white",
                    animate: { opacity: [0, 0, 0, 0.25, 0, 0, 0, 0.15, 0] },
                    transition: { duration: 1, repeat: 1 / 0 },
                  }),
                  d.jsx(N.div, {
                    className:
                      "fixed top-1/4 left-0 right-0 pointer-events-none z-55 text-center",
                    animate: {
                      opacity: [0, 0, 1, 0, 0],
                      scale: [0.8, 0.8, 1.2, 1.2, 0.8],
                    },
                    transition: {
                      duration: 4,
                      repeat: 1 / 0,
                      times: [0, 0.4, 0.5, 0.6, 1],
                    },
                    children: d.jsx(N.span, {
                      className: "text-6xl md:text-8xl font-black inline-block",
                      animate: {
                        color: [
                          "#ff0000",
                          "#00ff00",
                          "#0000ff",
                          "#ff00ff",
                          "#ffff00",
                          "#00ffff",
                        ],
                      },
                      transition: { duration: 0.5, repeat: 1 / 0 },
                      style: { WebkitTextStroke: "2px rgba(255,255,255,0.3)" },
                      children: "SNEAK MODE",
                    }),
                  }),
                  d.jsx("div", {
                    className:
                      "fixed bottom-48 left-1/2 -translate-x-1/2 pointer-events-none z-35",
                    children: [...Array(3)].map((i, o) =>
                      d.jsx(
                        N.div,
                        {
                          className: "absolute rounded-full border-2",
                          style: {
                            width: 100,
                            height: 100,
                            left: -50,
                            top: -50,
                          },
                          animate: {
                            scale: [1, 4, 6],
                            opacity: [0.6, 0.3, 0],
                            borderColor: dt,
                          },
                          transition: {
                            duration: 1.5,
                            repeat: 1 / 0,
                            delay: o * 0.5,
                            ease: "easeOut",
                          },
                        },
                        `ring-${o}`,
                      ),
                    ),
                  }),
                ],
              })
            : null,
        ],
      })
    );
  },
  GM = () => {
    const { scrollYProgress: e } = ct(),
      t = XR(e, { stiffness: 100, damping: 30, restDelta: 0.001 });
    return d.jsx(N.div, {
      className:
        "fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-violet-400 to-primary origin-left z-[100]",
      style: { scaleX: t },
    });
  },
  XM = () => {
    const { scrollYProgress: e } = ct(),
      t = Q(e, [0, 1], [0, -320]),
      n = Q(e, [0, 1], [0, -220]),
      r = Q(e, [0, 1], [0, -480]),
      s = Q(e, [0, 1], [0, -280]),
      i = Q(e, [0, 1], [0, -160]),
      o = Q(e, [0, 1], [0, 90]),
      a = Q(e, [0, 1], [0, -60]),
      l = Q(e, [0, 1], [45, 120]),
      u = Q(e, [0, 0.5, 1], [1, 1.15, 1]),
      c = Q(e, [0, 0.5, 1], [1, 0.9, 1.1]),
      f = Q(e, [0, 0.3, 0.7, 1], [0.35, 0.65, 0.45, 0.25]),
      h = Q(e, [0, 0.5, 1], [0.25, 0.55, 0.35]);
    return d.jsxs("div", {
      className:
        "fixed inset-0 pointer-events-none overflow-hidden z-[9] mix-blend-screen",
      children: [
        d.jsx(N.div, {
          style: {
            y: t,
            scale: u,
            opacity: f,
            background:
              "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.12) 0%, transparent 62%)",
          },
          className:
            "absolute top-[15%] left-[5%] w-[420px] h-[420px] rounded-full blur-[120px]",
        }),
        d.jsx(N.div, {
          style: {
            y: n,
            rotate: o,
            opacity: h,
            background:
              "radial-gradient(ellipse at 60% 40%, hsl(var(--primary) / 0.09) 0%, transparent 66%)",
          },
          className:
            "absolute top-[35%] right-[10%] w-[340px] h-[240px] rounded-[40%_60%_70%_30%] blur-[110px]",
        }),
        d.jsx(N.div, {
          style: {
            y: r,
            scale: c,
            background:
              "radial-gradient(ellipse at 40% 60%, hsl(var(--primary) / 0.07) 0%, transparent 64%)",
          },
          className:
            "absolute top-[55%] left-[15%] w-[240px] h-[280px] rounded-[60%_40%_30%_70%] blur-[90px]",
        }),
        d.jsx(N.div, {
          style: {
            y: s,
            rotate: a,
            opacity: 0.45,
            background:
              "radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
          },
          className:
            "absolute top-[75%] right-[20%] w-[380px] h-[220px] rounded-[30%_70%_60%_40%] blur-[120px]",
        }),
        d.jsx(N.div, {
          style: { y: n, rotate: l, opacity: 0.14 },
          className:
            "absolute top-[25%] right-[5%] w-20 h-20 border border-primary/20 rounded-2xl",
        }),
        d.jsx(N.div, {
          style: { y: i, opacity: 0.1 },
          className:
            "absolute top-[65%] left-[3%] w-16 h-16 border border-primary/15 rounded-full",
        }),
        d.jsx(N.div, {
          style: { y: r, rotate: o, opacity: 0.12 },
          className:
            "absolute top-[45%] right-[3%] w-24 h-24 border border-primary/10 rounded-3xl",
        }),
        d.jsx(N.div, {
          style: { y: t, opacity: 0.03 },
          className:
            "absolute top-[20%] left-[30%] w-[520px] h-[520px] rounded-full border border-primary/30",
        }),
        d.jsx(N.div, {
          style: { y: n, opacity: 0.025 },
          className:
            "absolute top-[22%] left-[32%] w-[470px] h-[470px] rounded-full border border-primary/25",
        }),
        d.jsx(N.div, {
          style: { y: s, opacity: 0.02 },
          className:
            "absolute top-[24%] left-[34%] w-[420px] h-[420px] rounded-full border border-primary/20",
        }),
      ],
    });
  },
  qM = () => {
    const [e, t] = x.useState(!1),
      { isRaveMode: n } = qt();
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx($M, { onLoadingComplete: () => t(!0) }),
        d.jsx(QM, {}),
        d.jsxs("div", {
          className: `relative min-h-screen bg-background noise-bg gradient-mesh transition-opacity duration-500 ${e ? "opacity-100" : "opacity-0"} ${n ? "sneak-screen-shake" : ""}`,
          children: [
            d.jsx(GM, {}),
            d.jsx(XM, {}),
            d.jsx(nM, {}),
            d.jsxs("main", {
              className: "relative z-10",
              children: [
                d.jsx(rM, {}),
                d.jsx(Nr, { animation: "slideUp", children: d.jsx(mM, {}) }),
                d.jsx(Pr, { variant: "gradient", className: "my-8" }),
                d.jsx(Nr, { animation: "slideUp", children: d.jsx(kM, {}) }),
              ],
            }),
            d.jsx(_M, {}),
            d.jsx(zM, {}),
          ],
        }),
      ],
    });
  },
  ZM = () => d.jsx(tM, { children: d.jsx(qM, {}) }),
  JM = () => {
    const e = Ux();
    return (
      x.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      d.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: d.jsxs("div", {
          className: "text-center",
          children: [
            d.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            d.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            d.jsx("a", {
              href: "index.html",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  eA = new UT(),
  tA = () =>
    d.jsx(QT, {
      client: eA,
      children: d.jsxs(ET, {
        children: [
          d.jsx(a3, {}),
          d.jsx(_3, {}),
          d.jsx(Hk, {
            children: d.jsxs(Bk, {
              children: [
                d.jsx(Ad, { path: "/", element: d.jsx(ZM, {}) }),
                d.jsx(Ad, { path: "*", element: d.jsx(ZM, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
n1(document.getElementById("root")).render(d.jsx(tA, {}));
