!(function (V) {
  "use strict";
  var r = function (e) {
      if (null === e) return "null";
      if (e === undefined) return "undefined";
      var t = typeof e;
      return "object" == t &&
        (Array.prototype.isPrototypeOf(e) ||
          (e.constructor && "Array" === e.constructor.name))
        ? "array"
        : "object" == t &&
          (String.prototype.isPrototypeOf(e) ||
            (e.constructor && "String" === e.constructor.name))
        ? "string"
        : t;
    },
    t = function (e) {
      return { eq: e };
    },
    s = t(function (e, t) {
      return e === t;
    }),
    i = function (o) {
      return t(function (e, t) {
        if (e.length !== t.length) return !1;
        for (var n = e.length, r = 0; r < n; r++)
          if (!o.eq(e[r], t[r])) return !1;
        return !0;
      });
    },
    c = function (e, r) {
      return (
        (n = i(e)),
        (o = function (e) {
          return (t = e), (n = r), Array.prototype.slice.call(t).sort(n);
          var t, n;
        }),
        t(function (e, t) {
          return n.eq(o(e), o(t));
        })
      );
      var n, o;
    },
    u = function (u) {
      return t(function (e, t) {
        var n = Object.keys(e),
          r = Object.keys(t);
        if (!c(s).eq(n, r)) return !1;
        for (var o = n.length, i = 0; i < o; i++) {
          var a = n[i];
          if (!u.eq(e[a], t[a])) return !1;
        }
        return !0;
      });
    },
    l = t(function (e, t) {
      if (e === t) return !0;
      var n = r(e);
      return (
        n === r(t) &&
        (-1 !==
        [
          "undefined",
          "boolean",
          "number",
          "string",
          "function",
          "xml",
          "null",
        ].indexOf(n)
          ? e === t
          : "array" === n
          ? i(l).eq(e, t)
          : "object" === n && u(l).eq(e, t))
      );
    }),
    f = function () {},
    a = function (n, r) {
      return function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return n(r.apply(null, e));
      };
    },
    x = function (e) {
      return function () {
        return e;
      };
    },
    o = function (e) {
      return e;
    };
  function N(r) {
    for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
    return function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = o.concat(e);
      return r.apply(null, n);
    };
  }
  var e,
    n,
    d,
    m = function (t) {
      return function (e) {
        return !t(e);
      };
    },
    p = function (e) {
      return function () {
        throw new Error(e);
      };
    },
    g = x(!1),
    h = x(!0),
    v = function () {
      return y;
    },
    y =
      ((e = function (e) {
        return e.isNone();
      }),
      {
        fold: function (e, t) {
          return e();
        },
        is: g,
        isSome: g,
        isNone: h,
        getOr: (d = function (e) {
          return e;
        }),
        getOrThunk: (n = function (e) {
          return e();
        }),
        getOrDie: function (e) {
          throw new Error(e || "error: getOrDie called on none.");
        },
        getOrNull: x(null),
        getOrUndefined: x(undefined),
        or: d,
        orThunk: n,
        map: v,
        each: f,
        bind: v,
        exists: g,
        forall: h,
        filter: v,
        equals: e,
        equals_: e,
        toArray: function () {
          return [];
        },
        toString: x("none()"),
      }),
    b = function (n) {
      var e = x(n),
        t = function () {
          return o;
        },
        r = function (e) {
          return e(n);
        },
        o = {
          fold: function (e, t) {
            return t(n);
          },
          is: function (e) {
            return n === e;
          },
          isSome: h,
          isNone: g,
          getOr: e,
          getOrThunk: e,
          getOrDie: e,
          getOrNull: e,
          getOrUndefined: e,
          or: t,
          orThunk: t,
          map: function (e) {
            return b(e(n));
          },
          each: function (e) {
            e(n);
          },
          bind: r,
          exists: r,
          forall: r,
          filter: function (e) {
            return e(n) ? o : y;
          },
          toArray: function () {
            return [n];
          },
          toString: function () {
            return "some(" + n + ")";
          },
          equals: function (e) {
            return e.is(n);
          },
          equals_: function (e, t) {
            return e.fold(g, function (e) {
              return t(n, e);
            });
          },
        };
      return o;
    },
    B = {
      some: b,
      none: v,
      from: function (e) {
        return null === e || e === undefined ? y : b(e);
      },
    },
    C = function (r) {
      return function (e) {
        return (
          (n = typeof (t = e)),
          (null === t
            ? "null"
            : "object" == n &&
              (Array.prototype.isPrototypeOf(t) ||
                (t.constructor && "Array" === t.constructor.name))
            ? "array"
            : "object" == n &&
              (String.prototype.isPrototypeOf(t) ||
                (t.constructor && "String" === t.constructor.name))
            ? "string"
            : n) === r
        );
        var t, n;
      };
    },
    w = function (t) {
      return function (e) {
        return typeof e === t;
      };
    },
    S = function (t) {
      return function (e) {
        return t === e;
      };
    },
    q = C("string"),
    E = C("object"),
    k = C("array"),
    _ = S(null),
    T = w("boolean"),
    R = S(undefined),
    A = w("function"),
    D = w("number"),
    O = Array.prototype.slice,
    P = Array.prototype.indexOf,
    L = Array.prototype.push,
    I = function (e, t) {
      return P.call(e, t);
    },
    M = function (e, t) {
      return -1 < I(e, t);
    },
    F = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (t(e[n], n)) return !0;
      }
      return !1;
    },
    U = function (e, t) {
      for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
        var i = e[o];
        r[o] = t(i, o);
      }
      return r;
    },
    z = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        t(e[n], n);
      }
    },
    j = function (e, t) {
      for (var n = e.length - 1; 0 <= n; n--) {
        t(e[n], n);
      }
    },
    H = function (e, t) {
      for (var n = [], r = 0, o = e.length; r < o; r++) {
        var i = e[r];
        t(i, r) && n.push(i);
      }
      return n;
    },
    $ = function (e, t, n) {
      return (
        j(e, function (e) {
          n = t(n, e);
        }),
        n
      );
    },
    W = function (e, t, n) {
      return (
        z(e, function (e) {
          n = t(n, e);
        }),
        n
      );
    },
    K = function (e, t) {
      return (function (e, t, n) {
        for (var r = 0, o = e.length; r < o; r++) {
          var i = e[r];
          if (t(i, r)) return B.some(i);
          if (n(i, r)) break;
        }
        return B.none();
      })(e, t, g);
    },
    X = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (t(e[n], n)) return B.some(n);
      }
      return B.none();
    },
    Y = function (e, t) {
      return (function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ++n) {
          if (!k(e[n]))
            throw new Error(
              "Arr.flatten item " + n + " was not an array, input: " + e
            );
          L.apply(t, e[n]);
        }
        return t;
      })(U(e, t));
    },
    G = function (e, t) {
      for (var n = 0, r = e.length; n < r; ++n) {
        if (!0 !== t(e[n], n)) return !1;
      }
      return !0;
    },
    J = function (e) {
      var t = O.call(e, 0);
      return t.reverse(), t;
    },
    Q = function (e, t) {
      return H(e, function (e) {
        return !M(t, e);
      });
    },
    Z = function (e) {
      return 0 === e.length ? B.none() : B.some(e[0]);
    },
    ee = function (e) {
      return 0 === e.length ? B.none() : B.some(e[e.length - 1]);
    },
    te = A(Array.from)
      ? Array.from
      : function (e) {
          return O.call(e);
        },
    ne = Object.keys,
    re = Object.hasOwnProperty,
    oe = function (e, t) {
      for (var n = ne(e), r = 0, o = n.length; r < o; r++) {
        var i = n[r];
        t(e[i], i);
      }
    },
    ie = function (e, n) {
      return ae(e, function (e, t) {
        return { k: t, v: n(e, t) };
      });
    },
    ae = function (e, r) {
      var o = {};
      return (
        oe(e, function (e, t) {
          var n = r(e, t);
          o[n.k] = n.v;
        }),
        o
      );
    },
    ue = function (n) {
      return function (e, t) {
        n[t] = e;
      };
    },
    se = function (e, n, r, o) {
      return (
        oe(e, function (e, t) {
          (n(e, t) ? r : o)(e, t);
        }),
        {}
      );
    },
    ce = function (e, t) {
      var n = {},
        r = {};
      return se(e, t, ue(n), ue(r)), { t: n, f: r };
    },
    le = function (e, t) {
      var n = {};
      return se(e, t, ue(n), f), n;
    },
    fe = function (e) {
      return (
        (n = function (e) {
          return e;
        }),
        (r = []),
        oe(e, function (e, t) {
          r.push(n(e, t));
        }),
        r
      );
      var n, r;
    },
    de = function (e, t) {
      return me(e, t) ? B.from(e[t]) : B.none();
    },
    me = function (e, t) {
      return re.call(e, t);
    },
    pe = Array.isArray,
    ge = function (e, t, n) {
      var r, o;
      if (!e) return 0;
      if (((n = n || e), e.length !== undefined)) {
        for (r = 0, o = e.length; r < o; r++)
          if (!1 === t.call(n, e[r], r, e)) return 0;
      } else
        for (r in e)
          if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return 0;
      return 1;
    },
    he = function (n, r) {
      var o = [];
      return (
        ge(n, function (e, t) {
          o.push(r(e, t, n));
        }),
        o
      );
    },
    ve = function (n, r) {
      var o = [];
      return (
        ge(n, function (e, t) {
          (r && !r(e, t, n)) || o.push(e);
        }),
        o
      );
    },
    ye = function (e, t) {
      var n, r;
      if (e) for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
      return -1;
    },
    be = function (e, t, n, r) {
      var o = 0;
      for (arguments.length < 3 && (n = e[0]); o < e.length; o++)
        n = t.call(r, n, e[o], o);
      return n;
    },
    Ce = function (e, t, n) {
      var r, o;
      for (r = 0, o = e.length; r < o; r++) if (t.call(n, e[r], r, e)) return r;
      return -1;
    },
    we = function (e) {
      return e[e.length - 1];
    },
    xe = function () {
      return (xe =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
  function Se() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
      e += arguments[t].length;
    var r = Array(e),
      o = 0;
    for (t = 0; t < n; t++)
      for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++)
        r[o] = i[a];
    return r;
  }
  var Ne,
    Ee,
    ke,
    _e = function (e, t) {
      var n = (function (e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if (r.test(t)) return r;
        }
        return undefined;
      })(e, t);
      if (!n) return { major: 0, minor: 0 };
      var r = function (e) {
        return Number(t.replace(n, "$" + e));
      };
      return Re(r(1), r(2));
    },
    Te = function () {
      return Re(0, 0);
    },
    Re = function (e, t) {
      return { major: e, minor: t };
    },
    Ae = {
      nu: Re,
      detect: function (e, t) {
        var n = String(t).toLowerCase();
        return 0 === e.length ? Te() : _e(e, n);
      },
      unknown: Te,
    },
    De = "Firefox",
    Oe = function (e) {
      var t = e.current,
        n = e.version,
        r = function (e) {
          return function () {
            return t === e;
          };
        };
      return {
        current: t,
        version: n,
        isEdge: r("Edge"),
        isChrome: r("Chrome"),
        isIE: r("IE"),
        isOpera: r("Opera"),
        isFirefox: r(De),
        isSafari: r("Safari"),
      };
    },
    Be = {
      unknown: function () {
        return Oe({ current: undefined, version: Ae.unknown() });
      },
      nu: Oe,
      edge: x("Edge"),
      chrome: x("Chrome"),
      ie: x("IE"),
      opera: x("Opera"),
      firefox: x(De),
      safari: x("Safari"),
    },
    Pe = "Windows",
    Le = "Android",
    Ie = "Solaris",
    Me = "FreeBSD",
    Fe = "ChromeOS",
    Ue = function (e) {
      var t = e.current,
        n = e.version,
        r = function (e) {
          return function () {
            return t === e;
          };
        };
      return {
        current: t,
        version: n,
        isWindows: r(Pe),
        isiOS: r("iOS"),
        isAndroid: r(Le),
        isOSX: r("OSX"),
        isLinux: r("Linux"),
        isSolaris: r(Ie),
        isFreeBSD: r(Me),
        isChromeOS: r(Fe),
      };
    },
    ze = {
      unknown: function () {
        return Ue({ current: undefined, version: Ae.unknown() });
      },
      nu: Ue,
      windows: x(Pe),
      ios: x("iOS"),
      android: x(Le),
      linux: x("Linux"),
      osx: x("OSX"),
      solaris: x(Ie),
      freebsd: x(Me),
      chromeos: x(Fe),
    },
    je = function (e, t) {
      var n = String(t).toLowerCase();
      return K(e, function (e) {
        return e.search(n);
      });
    },
    He = function (e, n) {
      return je(e, n).map(function (e) {
        var t = Ae.detect(e.versionRegexes, n);
        return { current: e.name, version: t };
      });
    },
    Ve = function (e, n) {
      return je(e, n).map(function (e) {
        var t = Ae.detect(e.versionRegexes, n);
        return { current: e.name, version: t };
      });
    },
    qe = function (e, t) {
      return -1 !== e.indexOf(t);
    },
    $e = function (e, t) {
      return (
        (n = e),
        (o = 0),
        "" === (r = t) ||
          (n.length >= r.length && n.substr(o, o + r.length) === r)
      );
      var n, r, o;
    },
    We = function (t) {
      return function (e) {
        return e.replace(t, "");
      };
    },
    Ke = We(/^\s+|\s+$/g),
    Xe = We(/^\s+/g),
    Ye = We(/\s+$/g),
    Ge = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
    Je = function (t) {
      return function (e) {
        return qe(e, t);
      };
    },
    Qe = [
      {
        name: "Edge",
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: function (e) {
          return (
            qe(e, "edge/") &&
            qe(e, "chrome") &&
            qe(e, "safari") &&
            qe(e, "applewebkit")
          );
        },
      },
      {
        name: "Chrome",
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Ge],
        search: function (e) {
          return qe(e, "chrome") && !qe(e, "chromeframe");
        },
      },
      {
        name: "IE",
        versionRegexes: [
          /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
          /.*?rv:([0-9]+)\.([0-9]+).*/,
        ],
        search: function (e) {
          return qe(e, "msie") || qe(e, "trident");
        },
      },
      {
        name: "Opera",
        versionRegexes: [Ge, /.*?opera\/([0-9]+)\.([0-9]+).*/],
        search: Je("opera"),
      },
      {
        name: "Firefox",
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: Je("firefox"),
      },
      {
        name: "Safari",
        versionRegexes: [Ge, /.*?cpu os ([0-9]+)_([0-9]+).*/],
        search: function (e) {
          return (qe(e, "safari") || qe(e, "mobile/")) && qe(e, "applewebkit");
        },
      },
    ],
    Ze = [
      {
        name: "Windows",
        search: Je("win"),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/],
      },
      {
        name: "iOS",
        search: function (e) {
          return qe(e, "iphone") || qe(e, "ipad");
        },
        versionRegexes: [
          /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
          /.*cpu os ([0-9]+)_([0-9]+).*/,
          /.*cpu iphone os ([0-9]+)_([0-9]+).*/,
        ],
      },
      {
        name: "Android",
        search: Je("android"),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/],
      },
      {
        name: "OSX",
        search: Je("mac os x"),
        versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/],
      },
      { name: "Linux", search: Je("linux"), versionRegexes: [] },
      { name: "Solaris", search: Je("sunos"), versionRegexes: [] },
      { name: "FreeBSD", search: Je("freebsd"), versionRegexes: [] },
      {
        name: "ChromeOS",
        search: Je("cros"),
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/],
      },
    ],
    et = { browsers: x(Qe), oses: x(Ze) },
    tt = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        p = et.browsers(),
        g = et.oses(),
        h = He(p, e).fold(Be.unknown, Be.nu),
        v = Ve(g, e).fold(ze.unknown, ze.nu);
      return {
        browser: h,
        os: v,
        deviceType:
          ((r = h),
          (o = e),
          (i = t),
          (a = (n = v).isiOS() && !0 === /ipad/i.test(o)),
          (u = n.isiOS() && !a),
          (s = n.isiOS() || n.isAndroid()),
          (c = s || i("(pointer:coarse)")),
          (l = a || (!u && s && i("(min-device-width:768px)"))),
          (f = u || (s && !l)),
          (d = r.isSafari() && n.isiOS() && !1 === /safari/i.test(o)),
          (m = !f && !l && !d),
          {
            isiPad: x(a),
            isiPhone: x(u),
            isTablet: x(l),
            isPhone: x(f),
            isTouch: x(c),
            isAndroid: n.isAndroid,
            isiOS: n.isiOS,
            isWebView: x(d),
            isDesktop: x(m),
          }),
      };
    },
    nt = function (e) {
      return V.window.matchMedia(e).matches;
    },
    rt =
      ((ke = !(Ne = function () {
        return tt(V.navigator.userAgent, nt);
      })),
      function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return ke || ((ke = !0), (Ee = Ne.apply(null, e))), Ee;
      }),
    ot = function () {
      return rt();
    },
    it = V.navigator.userAgent,
    at = ot(),
    ut = at.browser,
    st = at.os,
    ct = at.deviceType,
    lt = /WebKit/.test(it) && !ut.isEdge(),
    ft =
      "FormData" in V.window &&
      "FileReader" in V.window &&
      "URL" in V.window &&
      !!V.URL.createObjectURL,
    dt = -1 !== it.indexOf("Windows Phone"),
    mt = {
      opera: ut.isOpera(),
      webkit: lt,
      ie: !(!ut.isIE() && !ut.isEdge()) && ut.version.major,
      gecko: ut.isFirefox(),
      mac: st.isOSX() || st.isiOS(),
      iOS: ct.isiPad() || ct.isiPhone(),
      android: st.isAndroid(),
      contentEditable: !0,
      transparentSrc:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      caretAfter: !0,
      range: V.window.getSelection && "Range" in V.window,
      documentMode: ut.isIE() ? V.document.documentMode || 7 : 10,
      fileApi: ft,
      ceFalse: !0,
      cacheSuffix: null,
      container: null,
      experimentalShadowDom: !1,
      canHaveCSP: !ut.isIE(),
      desktop: ct.isDesktop(),
      windowsPhone: dt,
      browser: {
        current: ut.current,
        version: ut.version,
        isChrome: ut.isChrome,
        isEdge: ut.isEdge,
        isFirefox: ut.isFirefox,
        isIE: ut.isIE,
        isOpera: ut.isOpera,
        isSafari: ut.isSafari,
      },
      os: {
        current: st.current,
        version: st.version,
        isAndroid: st.isAndroid,
        isChromeOS: st.isChromeOS,
        isFreeBSD: st.isFreeBSD,
        isiOS: st.isiOS,
        isLinux: st.isLinux,
        isOSX: st.isOSX,
        isSolaris: st.isSolaris,
        isWindows: st.isWindows,
      },
      deviceType: {
        isDesktop: ct.isDesktop,
        isiPad: ct.isiPad,
        isiPhone: ct.isiPhone,
        isPhone: ct.isPhone,
        isTablet: ct.isTablet,
        isTouch: ct.isTouch,
        isWebView: ct.isWebView,
      },
    },
    pt = /^\s*|\s*$/g,
    gt = function (e) {
      return null === e || e === undefined ? "" : ("" + e).replace(pt, "");
    },
    ht = function (e, t) {
      return t ? !("array" !== t || !pe(e)) || typeof e === t : e !== undefined;
    },
    vt = function (e, n, r, o) {
      (o = o || this),
        e &&
          (r && (e = e[r]),
          ge(e, function (e, t) {
            if (!1 === n.call(o, e, t, r)) return !1;
            vt(e, n, r, o);
          }));
    },
    yt = {
      trim: gt,
      isArray: pe,
      is: ht,
      toArray: function (e) {
        var t,
          n,
          r = e;
        if (!pe(e)) for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
        return r;
      },
      makeMap: function (e, t, n) {
        var r;
        for (
          t = t || ",",
            "string" == typeof (e = e || []) && (e = e.split(t)),
            n = n || {},
            r = e.length;
          r--;

        )
          n[e[r]] = {};
        return n;
      },
      each: ge,
      map: he,
      grep: ve,
      inArray: ye,
      hasOwn: function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      },
      extend: function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              a !== undefined && (e[i] = a);
            }
        }
        return e;
      },
      create: function (e, t, n) {
        var r,
          o,
          i,
          a = this,
          u = 0,
          s = (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(
            /(^|\.)(\w+)$/i
          )[2],
          c = a.createNS(e[3].replace(/\.\w+$/, ""), n);
        if (!c[s]) {
          if ("static" === e[2])
            return (
              (c[s] = t),
              void (this.onCreate && this.onCreate(e[2], e[3], c[s]))
            );
          t[s] || ((t[s] = function () {}), (u = 1)),
            (c[s] = t[s]),
            a.extend(c[s].prototype, t),
            e[5] &&
              ((r = a.resolve(e[5]).prototype),
              (o = e[5].match(/\.(\w+)$/i)[1]),
              (i = c[s]),
              (c[s] = u
                ? function () {
                    return r[o].apply(this, arguments);
                  }
                : function () {
                    return (this.parent = r[o]), i.apply(this, arguments);
                  }),
              (c[s].prototype[s] = c[s]),
              a.each(r, function (e, t) {
                c[s].prototype[t] = r[t];
              }),
              a.each(t, function (e, t) {
                r[t]
                  ? (c[s].prototype[t] = function () {
                      return (this.parent = r[t]), e.apply(this, arguments);
                    })
                  : t !== s && (c[s].prototype[t] = e);
              })),
            a.each(t["static"], function (e, t) {
              c[s][t] = e;
            });
        }
      },
      walk: vt,
      createNS: function (e, t) {
        var n, r;
        for (t = t || V.window, e = e.split("."), n = 0; n < e.length; n++)
          t[(r = e[n])] || (t[r] = {}), (t = t[r]);
        return t;
      },
      resolve: function (e, t) {
        var n, r;
        for (
          t = t || V.window, n = 0, r = (e = e.split(".")).length;
          n < r && (t = t[e[n]]);
          n++
        );
        return t;
      },
      explode: function (e, t) {
        return !e || ht(e, "array") ? e : he(e.split(t || ","), gt);
      },
      _addCacheSuffix: function (e) {
        var t = mt.cacheSuffix;
        return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
      },
    },
    bt = function (e) {
      if (null === e || e === undefined)
        throw new Error("Node cannot be null or undefined");
      return { dom: x(e) };
    },
    Ct = {
      fromHtml: function (e, t) {
        var n = (t || V.document).createElement("div");
        if (((n.innerHTML = e), !n.hasChildNodes() || 1 < n.childNodes.length))
          throw (
            (V.console.error("HTML does not have a single root node", e),
            new Error("HTML must have a single root node"))
          );
        return bt(n.childNodes[0]);
      },
      fromTag: function (e, t) {
        var n = (t || V.document).createElement(e);
        return bt(n);
      },
      fromText: function (e, t) {
        var n = (t || V.document).createTextNode(e);
        return bt(n);
      },
      fromDom: bt,
      fromPoint: function (e, t, n) {
        var r = e.dom();
        return B.from(r.elementFromPoint(t, n)).map(bt);
      },
    },
    wt =
      ("undefined" != typeof V.window ? V.window : Function("return this;")(),
      function (e) {
        return e.dom().nodeName.toLowerCase();
      }),
    xt = function (e) {
      return e.dom().nodeType;
    },
    St = function (t) {
      return function (e) {
        return xt(e) === t;
      };
    },
    Nt = St(1),
    Et = St(3),
    kt = St(9),
    _t = St(11),
    Tt = function (e, t) {
      for (
        var n = [],
          r = function (e) {
            return n.push(e), t(e);
          },
          o = t(e);
        (o = o.bind(r)).isSome();

      );
      return n;
    },
    Rt = function (e, t) {
      var n = e.dom();
      if (1 !== n.nodeType) return !1;
      var r = n;
      if (r.matches !== undefined) return r.matches(t);
      if (r.msMatchesSelector !== undefined) return r.msMatchesSelector(t);
      if (r.webkitMatchesSelector !== undefined)
        return r.webkitMatchesSelector(t);
      if (r.mozMatchesSelector !== undefined) return r.mozMatchesSelector(t);
      throw new Error("Browser lacks native selectors");
    },
    At = function (e) {
      return (
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) ||
        0 === e.childElementCount
      );
    },
    Dt = function (e, t) {
      return e.dom() === t.dom();
    },
    Ot = function (e, t) {
      return (
        (n = e.dom()),
        (r = t.dom()),
        (o = n),
        (i = r),
        (a = V.Node.DOCUMENT_POSITION_CONTAINED_BY),
        0 != (o.compareDocumentPosition(i) & a)
      );
      var n, r, o, i, a;
    },
    Bt = function (e, t) {
      return ot().browser.isIE()
        ? Ot(e, t)
        : ((n = t), (r = e.dom()), (o = n.dom()), r !== o && r.contains(o));
      var n, r, o;
    },
    Pt = function (e) {
      return Ct.fromDom(e.dom().ownerDocument);
    },
    Lt = function (e) {
      return kt(e) ? e : Pt(e);
    },
    It = function (e) {
      return Ct.fromDom(e.dom().ownerDocument.defaultView);
    },
    Mt = function (e) {
      return B.from(e.dom().parentNode).map(Ct.fromDom);
    },
    Ft = function (e) {
      return B.from(e.dom().previousSibling).map(Ct.fromDom);
    },
    Ut = function (e) {
      return B.from(e.dom().nextSibling).map(Ct.fromDom);
    },
    zt = function (e) {
      return J(Tt(e, Ft));
    },
    jt = function (e) {
      return Tt(e, Ut);
    },
    Ht = function (e) {
      return U(e.dom().childNodes, Ct.fromDom);
    },
    Vt = function (e, t) {
      var n = e.dom().childNodes;
      return B.from(n[t]).map(Ct.fromDom);
    },
    qt = function (e) {
      return Vt(e, 0);
    },
    $t = function (e) {
      return Vt(e, e.dom().childNodes.length - 1);
    },
    Wt = function (e) {
      return _t(e);
    },
    Kt =
      A(V.Element.prototype.attachShadow) && A(V.Node.prototype.getRootNode)
        ? function (e) {
            return Ct.fromDom(e.dom().getRootNode());
          }
        : Lt,
    Xt = function (e) {
      return Wt(e)
        ? e
        : (function (e) {
            var t = e.dom().head;
            if (null === t || t === undefined)
              throw new Error("Head is not available yet");
            return Ct.fromDom(t);
          })(Lt(e));
    },
    Yt = function (e) {
      return Ct.fromDom(e.dom().host);
    },
    Gt = function (t, n) {
      Mt(t).each(function (e) {
        e.dom().insertBefore(n.dom(), t.dom());
      });
    },
    Jt = function (e, t) {
      Ut(e).fold(
        function () {
          Mt(e).each(function (e) {
            Zt(e, t);
          });
        },
        function (e) {
          Gt(e, t);
        }
      );
    },
    Qt = function (t, n) {
      qt(t).fold(
        function () {
          Zt(t, n);
        },
        function (e) {
          t.dom().insertBefore(n.dom(), e.dom());
        }
      );
    },
    Zt = function (e, t) {
      e.dom().appendChild(t.dom());
    },
    en = function (t, e) {
      z(e, function (e) {
        Zt(t, e);
      });
    },
    tn = function (e) {
      (e.dom().textContent = ""),
        z(Ht(e), function (e) {
          nn(e);
        });
    },
    nn = function (e) {
      var t = e.dom();
      null !== t.parentNode && t.parentNode.removeChild(t);
    },
    rn = function (e) {
      var t,
        n = Ht(e);
      0 < n.length &&
        ((t = e),
        z(n, function (e) {
          Gt(t, e);
        })),
        nn(e);
    },
    on = function (e) {
      var t,
        n,
        r,
        o,
        i = Et(e) ? e.dom().parentNode : e.dom();
      return (
        i !== undefined &&
        null !== i &&
        null !== i.ownerDocument &&
        ((r = Ct.fromDom(i)),
        (o = Kt(r)),
        (Wt(o) ? B.some(o) : B.none()).fold(
          function () {
            return i.ownerDocument.body.contains(i);
          },
          ((t = on),
          (n = Yt),
          function (e) {
            return t(n(e));
          })
        ))
      );
    },
    an = function (n, r) {
      return {
        left: x(n),
        top: x(r),
        translate: function (e, t) {
          return an(n + e, r + t);
        },
      };
    },
    un = an,
    sn = function (e, t) {
      return e !== undefined ? e : t !== undefined ? t : 0;
    },
    cn = function (e) {
      var t,
        n = e.dom(),
        r = n.ownerDocument.body;
      return r === n
        ? un(r.offsetLeft, r.offsetTop)
        : on(e)
        ? ((t = n.getBoundingClientRect()), un(t.left, t.top))
        : un(0, 0);
    },
    ln = function (e) {
      var t = e !== undefined ? e.dom() : V.document,
        n = t.body.scrollLeft || t.documentElement.scrollLeft,
        r = t.body.scrollTop || t.documentElement.scrollTop;
      return un(n, r);
    },
    fn = function (e, t, n) {
      (n !== undefined ? n.dom() : V.document).defaultView.scrollTo(e, t);
    },
    dn = function (e, t) {
      ot().browser.isSafari() && A(e.dom().scrollIntoViewIfNeeded)
        ? e.dom().scrollIntoViewIfNeeded(!1)
        : e.dom().scrollIntoView(t);
    },
    mn = function (e, t, n, r) {
      return { x: e, y: t, width: n, height: r, right: e + n, bottom: t + r };
    },
    pn = function (e) {
      var t,
        n,
        r = e === undefined ? V.window : e,
        o = r.document,
        i = ln(Ct.fromDom(o));
      return (
        (n = (t = r) === undefined ? V.window : t),
        B.from(n.visualViewport).fold(
          function () {
            var e = r.document.documentElement,
              t = e.clientWidth,
              n = e.clientHeight;
            return mn(i.left(), i.top(), t, n);
          },
          function (e) {
            return mn(
              Math.max(e.pageLeft, i.left()),
              Math.max(e.pageTop, i.top()),
              e.width,
              e.height
            );
          }
        )
      );
    },
    gn = function (t) {
      return function (e) {
        return !!e && e.nodeType === t;
      };
    },
    hn = function (e) {
      return !!e && !Object.getPrototypeOf(e);
    },
    vn = gn(1),
    yn = function (e) {
      var n = e.map(function (e) {
        return e.toLowerCase();
      });
      return function (e) {
        if (e && e.nodeName) {
          var t = e.nodeName.toLowerCase();
          return M(n, t);
        }
        return !1;
      };
    },
    bn = function (r, e) {
      var o = e.toLowerCase().split(" ");
      return function (e) {
        var t;
        if (vn(e))
          for (t = 0; t < o.length; t++) {
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0;
          }
        return !1;
      };
    },
    Cn = function (t) {
      return function (e) {
        return vn(e) && e.hasAttribute(t);
      };
    },
    wn = function (e) {
      return vn(e) && e.hasAttribute("data-mce-bogus");
    },
    xn = function (e) {
      return vn(e) && "TABLE" === e.tagName;
    },
    Sn = function (t) {
      return function (e) {
        if (vn(e)) {
          if (e.contentEditable === t) return !0;
          if (e.getAttribute("data-mce-contenteditable") === t) return !0;
        }
        return !1;
      };
    },
    Nn = yn(["textarea", "input"]),
    En = gn(3),
    kn = gn(8),
    _n = gn(9),
    Tn = gn(11),
    Rn = yn(["br"]),
    An = Sn("true"),
    Dn = Sn("false"),
    On = function (e) {
      return e.style !== undefined && A(e.style.getPropertyValue);
    },
    Bn = function (e, t, n) {
      if (!(q(n) || T(n) || D(n)))
        throw (
          (V.console.error(
            "Invalid call to Attr.set. Key ",
            t,
            ":: Value ",
            n,
            ":: Element ",
            e
          ),
          new Error("Attribute value was not simple"))
        );
      e.setAttribute(t, n + "");
    },
    Pn = function (e, t, n) {
      Bn(e.dom(), t, n);
    },
    Ln = function (e, t) {
      var n = e.dom();
      oe(t, function (e, t) {
        Bn(n, t, e);
      });
    },
    In = function (e, t) {
      var n = e.dom().getAttribute(t);
      return null === n ? undefined : n;
    },
    Mn = function (e, t) {
      e.dom().removeAttribute(t);
    },
    Fn = function (e, t) {
      var n = e.dom(),
        r = V.window.getComputedStyle(n).getPropertyValue(t);
      return "" !== r || on(e) ? r : Un(n, t);
    },
    Un = function (e, t) {
      return On(e) ? e.style.getPropertyValue(t) : "";
    },
    zn = function (e, t) {
      var n = e.dom(),
        r = Un(n, t);
      return B.from(r).filter(function (e) {
        return 0 < e.length;
      });
    },
    jn = ot().browser,
    Hn = function (e) {
      return K(e, Nt);
    },
    Vn = function (e, t) {
      return e.children && M(e.children, t);
    },
    qn = function (e, t, n) {
      var r,
        o,
        i,
        a = 0,
        u = 0,
        s = e.ownerDocument;
      if (((n = n || e), t)) {
        if (
          n === e &&
          t.getBoundingClientRect &&
          "static" === Fn(Ct.fromDom(e), "position")
        )
          return {
            x: (a =
              (o = t.getBoundingClientRect()).left +
              (s.documentElement.scrollLeft || e.scrollLeft) -
              s.documentElement.clientLeft),
            y: (u =
              o.top +
              (s.documentElement.scrollTop || e.scrollTop) -
              s.documentElement.clientTop),
          };
        for (r = t; r && r !== n && r.nodeType && !Vn(r, n); )
          (a += r.offsetLeft || 0),
            (u += r.offsetTop || 0),
            (r = r.offsetParent);
        for (r = t.parentNode; r && r !== n && r.nodeType && !Vn(r, n); )
          (a -= r.scrollLeft || 0), (u -= r.scrollTop || 0), (r = r.parentNode);
        u +=
          ((i = Ct.fromDom(t)),
          jn.isFirefox() && "table" === wt(i)
            ? Hn(Ht(i))
                .filter(function (e) {
                  return "caption" === wt(e);
                })
                .bind(function (o) {
                  return Hn(jt(o)).map(function (e) {
                    var t = e.dom().offsetTop,
                      n = o.dom().offsetTop,
                      r = o.dom().offsetHeight;
                    return t <= n ? -r : 0;
                  });
                })
                .getOr(0)
            : 0);
      }
      return { x: a, y: u };
    },
    $n = function (t) {
      var n;
      return function (e) {
        return (n =
          n ||
          (function (e, t) {
            for (var n = {}, r = 0, o = e.length; r < o; r++) {
              var i = e[r];
              n[String(i)] = t(i, r);
            }
            return n;
          })(t, x(!0))).hasOwnProperty(wt(e));
      };
    },
    Wn = $n(["h1", "h2", "h3", "h4", "h5", "h6"]),
    Kn = $n([
      "article",
      "aside",
      "details",
      "div",
      "dt",
      "figcaption",
      "footer",
      "form",
      "fieldset",
      "header",
      "hgroup",
      "html",
      "main",
      "nav",
      "section",
      "summary",
      "body",
      "p",
      "dl",
      "multicol",
      "dd",
      "figure",
      "address",
      "center",
      "blockquote",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "listing",
      "xmp",
      "pre",
      "plaintext",
      "menu",
      "dir",
      "ul",
      "ol",
      "li",
      "hr",
      "table",
      "tbody",
      "thead",
      "tfoot",
      "th",
      "tr",
      "td",
      "caption",
    ]),
    Xn = function (e) {
      return Nt(e) && !Kn(e);
    },
    Yn = function (e) {
      return Nt(e) && "br" === wt(e);
    },
    Gn = $n([
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "div",
      "address",
      "pre",
      "form",
      "blockquote",
      "center",
      "dir",
      "fieldset",
      "header",
      "footer",
      "article",
      "section",
      "hgroup",
      "aside",
      "nav",
      "figure",
    ]),
    Jn = $n(["ul", "ol", "dl"]),
    Qn = $n(["li", "dd", "dt"]),
    Zn = $n([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "link",
      "meta",
      "param",
      "embed",
      "source",
      "wbr",
      "track",
    ]),
    er = $n(["thead", "tbody", "tfoot"]),
    tr = $n(["td", "th"]),
    nr = $n(["pre", "script", "textarea", "style"]),
    rr = function (e) {
      return (
        e &&
        "SPAN" === e.tagName &&
        "bookmark" === e.getAttribute("data-mce-type")
      );
    },
    or = function (e, t) {
      var n,
        r = t.childNodes;
      if (!vn(t) || !rr(t)) {
        for (n = r.length - 1; 0 <= n; n--) or(e, r[n]);
        if (!1 === _n(t)) {
          if (En(t) && 0 < t.nodeValue.length) {
            var o = yt.trim(t.nodeValue).length;
            if (e.isBlock(t.parentNode) || 0 < o) return;
            if (
              0 === o &&
              ((a =
                (i = t).previousSibling &&
                "SPAN" === i.previousSibling.nodeName),
              (u = i.nextSibling && "SPAN" === i.nextSibling.nodeName),
              a && u)
            )
              return;
          } else if (
            vn(t) &&
            (1 === (r = t.childNodes).length &&
              rr(r[0]) &&
              t.parentNode.insertBefore(r[0], t),
            r.length || Zn(Ct.fromDom(t)))
          )
            return;
          e.remove(t);
        }
        var i, a, u;
        return t;
      }
    },
    ir = yt.makeMap,
    ar = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    ur = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    sr = /[<>&\"\']/g,
    cr = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
    lr = {
      128: "\u20ac",
      130: "\u201a",
      131: "\u0192",
      132: "\u201e",
      133: "\u2026",
      134: "\u2020",
      135: "\u2021",
      136: "\u02c6",
      137: "\u2030",
      138: "\u0160",
      139: "\u2039",
      140: "\u0152",
      142: "\u017d",
      145: "\u2018",
      146: "\u2019",
      147: "\u201c",
      148: "\u201d",
      149: "\u2022",
      150: "\u2013",
      151: "\u2014",
      152: "\u02dc",
      153: "\u2122",
      154: "\u0161",
      155: "\u203a",
      156: "\u0153",
      158: "\u017e",
      159: "\u0178",
    },
    fr = {
      '"': "&quot;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "`": "&#96;",
    },
    dr = {
      "&lt;": "<",
      "&gt;": ">",
      "&amp;": "&",
      "&quot;": '"',
      "&apos;": "'",
    },
    mr = function (e, t) {
      var n,
        r,
        o,
        i = {};
      if (e) {
        for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2)
          (r = String.fromCharCode(parseInt(e[n], t))),
            fr[r] || ((o = "&" + e[n + 1] + ";"), (i[r] = o), (i[o] = r));
        return i;
      }
    },
    pr = mr(
      "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
      32
    ),
    gr = function (e, t) {
      return e.replace(t ? ar : ur, function (e) {
        return fr[e] || e;
      });
    },
    hr = function (e, t) {
      return e.replace(t ? ar : ur, function (e) {
        return 1 < e.length
          ? "&#" +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ";"
          : fr[e] || "&#" + e.charCodeAt(0) + ";";
      });
    },
    vr = function (e, t, n) {
      return (
        (n = n || pr),
        e.replace(t ? ar : ur, function (e) {
          return fr[e] || n[e] || e;
        })
      );
    },
    yr = {
      encodeRaw: gr,
      encodeAllRaw: function (e) {
        return ("" + e).replace(sr, function (e) {
          return fr[e] || e;
        });
      },
      encodeNumeric: hr,
      encodeNamed: vr,
      getEncodeFunc: function (e, t) {
        var n = mr(t) || pr,
          r = ir(e.replace(/\+/g, ","));
        return r.named && r.numeric
          ? function (e, t) {
              return e.replace(t ? ar : ur, function (e) {
                return fr[e] !== undefined
                  ? fr[e]
                  : n[e] !== undefined
                  ? n[e]
                  : 1 < e.length
                  ? "&#" +
                    (1024 * (e.charCodeAt(0) - 55296) +
                      (e.charCodeAt(1) - 56320) +
                      65536) +
                    ";"
                  : "&#" + e.charCodeAt(0) + ";";
              });
            }
          : r.named
          ? t
            ? function (e, t) {
                return vr(e, t, n);
              }
            : vr
          : r.numeric
          ? hr
          : gr;
      },
      decode: function (e) {
        return e.replace(cr, function (e, t) {
          return t
            ? 65535 <
              (t =
                "x" === t.charAt(0).toLowerCase()
                  ? parseInt(t.substr(1), 16)
                  : parseInt(t, 10))
              ? ((t -= 65536),
                String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
              : lr[t] || String.fromCharCode(t)
            : dr[e] ||
                pr[e] ||
                ((n = e),
                ((r = Ct.fromTag("div").dom()).innerHTML = n),
                r.textContent || r.innerText || n);
          var n, r;
        });
      },
    },
    br = {},
    Cr = {},
    wr = yt.makeMap,
    xr = yt.each,
    Sr = yt.extend,
    Nr = yt.explode,
    Er = yt.inArray,
    kr = function (e, t) {
      return (e = yt.trim(e)) ? e.split(t || " ") : [];
    },
    _r = function (e) {
      var u,
        t,
        n,
        r,
        o,
        i,
        s = {},
        a = function (e, t, n) {
          var r,
            o,
            i,
            a = function (e, t) {
              var n,
                r,
                o = {};
              for (n = 0, r = e.length; n < r; n++) o[e[n]] = t || {};
              return o;
            };
          for (
            t = t || "",
              "string" == typeof (n = n || []) && (n = kr(n)),
              r = (e = kr(e)).length;
            r--;

          )
            (i = {
              attributes: a((o = kr([u, t].join(" ")))),
              attributesOrder: o,
              children: a(n, Cr),
            }),
              (s[e[r]] = i);
        },
        c = function (e, t) {
          var n, r, o, i;
          for (n = (e = kr(e)).length, t = kr(t); n--; )
            for (r = s[e[n]], o = 0, i = t.length; o < i; o++)
              (r.attributes[t[o]] = {}), r.attributesOrder.push(t[o]);
        };
      return br[e]
        ? br[e]
        : ((u = "id accesskey class dir lang style tabindex title role"),
          (t =
            "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),
          (n =
            "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),
          "html4" !== e &&
            ((u +=
              " contenteditable contextmenu draggable dropzone hidden spellcheck translate"),
            (t +=
              " article aside details dialog figure main header footer hgroup section nav"),
            (n +=
              " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen")),
          "html5-strict" !== e &&
            ((u += " xml:lang"),
            (n = [n, (i = "acronym applet basefont big font strike tt")].join(
              " "
            )),
            xr(kr(i), function (e) {
              a(e, "", n);
            }),
            (t = [t, (o = "center dir isindex noframes")].join(" ")),
            (r = [t, n].join(" ")),
            xr(kr(o), function (e) {
              a(e, "", r);
            })),
          (r = r || [t, n].join(" ")),
          a("html", "manifest", "head body"),
          a("head", "", "base command link meta noscript script style title"),
          a("title hr noscript br"),
          a("base", "href target"),
          a("link", "href rel media hreflang type sizes hreflang"),
          a("meta", "name http-equiv content charset"),
          a("style", "media type scoped"),
          a("script", "src async defer type charset"),
          a(
            "body",
            "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",
            r
          ),
          a("address dt dd div caption", "", r),
          a(
            "h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn",
            "",
            n
          ),
          a("blockquote", "cite", r),
          a("ol", "reversed start type", "li"),
          a("ul", "", "li"),
          a("li", "value", r),
          a("dl", "", "dt dd"),
          a("a", "href target rel media hreflang type", n),
          a("q", "cite", n),
          a("ins del", "cite datetime", r),
          a("img", "src sizes srcset alt usemap ismap width height"),
          a("iframe", "src name width height", r),
          a("embed", "src type width height"),
          a(
            "object",
            "data type typemustmatch name usemap form width height",
            [r, "param"].join(" ")
          ),
          a("param", "name value"),
          a("map", "name", [r, "area"].join(" ")),
          a("area", "alt coords shape href target rel media hreflang type"),
          a(
            "table",
            "border",
            "caption colgroup thead tfoot tbody tr" +
              ("html4" === e ? " col" : "")
          ),
          a("colgroup", "span", "col"),
          a("col", "span"),
          a("tbody thead tfoot", "", "tr"),
          a("tr", "", "td th"),
          a("td", "colspan rowspan headers", r),
          a("th", "colspan rowspan headers scope abbr", r),
          a(
            "form",
            "accept-charset action autocomplete enctype method name novalidate target",
            r
          ),
          a("fieldset", "disabled form name", [r, "legend"].join(" ")),
          a("label", "form for", n),
          a(
            "input",
            "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"
          ),
          a(
            "button",
            "disabled form formaction formenctype formmethod formnovalidate formtarget name type value",
            "html4" === e ? r : n
          ),
          a(
            "select",
            "disabled form multiple name required size",
            "option optgroup"
          ),
          a("optgroup", "disabled label", "option"),
          a("option", "disabled label selected value"),
          a(
            "textarea",
            "cols dirname disabled form maxlength name readonly required rows wrap"
          ),
          a("menu", "type label", [r, "li"].join(" ")),
          a("noscript", "", r),
          "html4" !== e &&
            (a("wbr"),
            a("ruby", "", [n, "rt rp"].join(" ")),
            a("figcaption", "", r),
            a("mark rt rp summary bdi", "", n),
            a("canvas", "width height", r),
            a(
              "video",
              "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",
              [r, "track source"].join(" ")
            ),
            a(
              "audio",
              "src crossorigin preload autoplay mediagroup loop muted controls buffered volume",
              [r, "track source"].join(" ")
            ),
            a("picture", "", "img source"),
            a("source", "src srcset type media sizes"),
            a("track", "kind src srclang label default"),
            a("datalist", "", [n, "option"].join(" ")),
            a("article section nav aside main header footer", "", r),
            a("hgroup", "", "h1 h2 h3 h4 h5 h6"),
            a("figure", "", [r, "figcaption"].join(" ")),
            a("time", "datetime", n),
            a("dialog", "open", r),
            a("command", "type label icon disabled checked radiogroup command"),
            a("output", "for form name", n),
            a("progress", "value max", n),
            a("meter", "value min max low high optimum", n),
            a("details", "open", [r, "summary"].join(" ")),
            a("keygen", "autofocus challenge disabled form keytype name")),
          "html5-strict" !== e &&
            (c("script", "language xml:space"),
            c("style", "xml:space"),
            c(
              "object",
              "declare classid code codebase codetype archive standby align border hspace vspace"
            ),
            c("embed", "align name hspace vspace"),
            c("param", "valuetype type"),
            c("a", "charset name rev shape coords"),
            c("br", "clear"),
            c(
              "applet",
              "codebase archive code object alt name width height align hspace vspace"
            ),
            c("img", "name longdesc align border hspace vspace"),
            c(
              "iframe",
              "longdesc frameborder marginwidth marginheight scrolling align"
            ),
            c("font basefont", "size color face"),
            c("input", "usemap align"),
            c("select"),
            c("textarea"),
            c("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
            c("ul", "type compact"),
            c("li", "type"),
            c("ol dl menu dir", "compact"),
            c("pre", "width xml:space"),
            c("hr", "align noshade size width"),
            c("isindex", "prompt"),
            c(
              "table",
              "summary width frame rules cellspacing cellpadding align bgcolor"
            ),
            c("col", "width align char charoff valign"),
            c("colgroup", "width align char charoff valign"),
            c("thead", "align char charoff valign"),
            c("tr", "align char charoff valign bgcolor"),
            c(
              "th",
              "axis align char charoff valign nowrap bgcolor width height"
            ),
            c("form", "accept"),
            c(
              "td",
              "abbr axis scope align char charoff valign nowrap bgcolor width height"
            ),
            c("tfoot", "align char charoff valign"),
            c("tbody", "align char charoff valign"),
            c("area", "nohref"),
            c("body", "background bgcolor text link vlink alink")),
          "html4" !== e &&
            (c("input button select textarea", "autofocus"),
            c("input textarea", "placeholder"),
            c("a", "download"),
            c("link script img", "crossorigin"),
            c("img", "loading"),
            c("iframe", "sandbox seamless allowfullscreen loading")),
          xr(kr("a form meter progress dfn"), function (e) {
            s[e] && delete s[e].children[e];
          }),
          delete s.caption.children.table,
          delete s.script,
          (br[e] = s));
    },
    Tr = function (e, n) {
      var r;
      return (
        e &&
          ((r = {}),
          "string" == typeof e && (e = { "*": e }),
          xr(e, function (e, t) {
            r[t] = r[t.toUpperCase()] = ("map" === n ? wr : Nr)(e, /[, ]/);
          })),
        r
      );
    };
  function Rr(i) {
    var x = {},
      u = {},
      S = [],
      s = {},
      t = {},
      e = function (e, t, n) {
        var r = i[e];
        return (
          r
            ? (r = wr(r, /[, ]/, wr(r.toUpperCase(), /[, ]/)))
            : (r = br[e]) ||
              ((r = wr(t, " ", wr(t.toUpperCase(), " "))),
              (r = Sr(r, n)),
              (br[e] = r)),
          r
        );
      },
      n = _r((i = i || {}).schema);
    !1 === i.verify_html && (i.valid_elements = "*[*]");
    var r = Tr(i.valid_styles),
      o = Tr(i.invalid_styles, "map"),
      a = Tr(i.valid_classes, "map"),
      c = e(
        "whitespace_elements",
        "pre script noscript style textarea video audio iframe object code"
      ),
      l = e(
        "self_closing_elements",
        "colgroup dd dt li option p td tfoot th thead tr"
      ),
      f = e(
        "short_ended_elements",
        "area base basefont br col frame hr img input isindex link meta param embed source wbr track"
      ),
      d = e(
        "boolean_attributes",
        "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"
      ),
      m = e(
        "non_empty_elements",
        "td th iframe video audio object script pre code",
        f
      ),
      p = e("move_caret_before_on_enter_elements", "table", m),
      g = e(
        "text_block_elements",
        "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"
      ),
      h = e(
        "block_elements",
        "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",
        g
      ),
      v = e(
        "text_inline_elements",
        "span strong b em i font strike u var cite dfn code mark q sup sub samp"
      );
    xr(
      (
        i.special ||
        "script noscript iframe noframes noembed title style textarea xmp"
      ).split(" "),
      function (e) {
        t[e] = new RegExp("</" + e + "[^>]*>", "gi");
      }
    );
    var N = function (e) {
        return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
      },
      y = function (e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          u,
          s,
          c,
          l,
          f,
          d,
          m,
          p,
          g,
          h,
          v,
          y,
          b = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
          C = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
          w = /[*?+]/;
        if (e)
          for (
            e = kr(e, ","),
              x["@"] && ((h = x["@"].attributes), (v = x["@"].attributesOrder)),
              t = 0,
              n = e.length;
            t < n;
            t++
          )
            if ((i = b.exec(e[t]))) {
              if (
                ((p = i[1]),
                (c = i[2]),
                (g = i[3]),
                (s = i[5]),
                (a = { attributes: (d = {}), attributesOrder: (m = []) }),
                "#" === p && (a.paddEmpty = !0),
                "-" === p && (a.removeEmpty = !0),
                "!" === i[4] && (a.removeEmptyAttrs = !0),
                h &&
                  (oe(h, function (e, t) {
                    d[t] = e;
                  }),
                  m.push.apply(m, v)),
                s)
              )
                for (r = 0, o = (s = kr(s, "|")).length; r < o; r++)
                  if ((i = C.exec(s[r]))) {
                    if (
                      ((u = {}),
                      (f = i[1]),
                      (l = i[2].replace(/[\\:]:/g, ":")),
                      (p = i[3]),
                      (y = i[4]),
                      "!" === f &&
                        ((a.attributesRequired = a.attributesRequired || []),
                        a.attributesRequired.push(l),
                        (u.required = !0)),
                      "-" === f)
                    ) {
                      delete d[l], m.splice(Er(m, l), 1);
                      continue;
                    }
                    p &&
                      ("=" === p &&
                        ((a.attributesDefault = a.attributesDefault || []),
                        a.attributesDefault.push({ name: l, value: y }),
                        (u.defaultValue = y)),
                      ":" === p &&
                        ((a.attributesForced = a.attributesForced || []),
                        a.attributesForced.push({ name: l, value: y }),
                        (u.forcedValue = y)),
                      "<" === p && (u.validValues = wr(y, "?"))),
                      w.test(l)
                        ? ((a.attributePatterns = a.attributePatterns || []),
                          (u.pattern = N(l)),
                          a.attributePatterns.push(u))
                        : (d[l] || m.push(l), (d[l] = u));
                  }
              h || "@" !== c || ((h = d), (v = m)),
                g && ((a.outputName = c), (x[g] = a)),
                w.test(c) ? ((a.pattern = N(c)), S.push(a)) : (x[c] = a);
            }
      },
      b = function (e) {
        (x = {}),
          (S = []),
          y(e),
          xr(n, function (e, t) {
            u[t] = e.children;
          });
      },
      C = function (e) {
        var a = /^(~)?(.+)$/;
        e &&
          ((br.text_block_elements = br.block_elements = null),
          xr(kr(e, ","), function (e) {
            var t = a.exec(e),
              n = "~" === t[1],
              r = n ? "span" : "div",
              o = t[2];
            if (
              ((u[o] = u[r]),
              (s[o] = r),
              n || ((h[o.toUpperCase()] = {}), (h[o] = {})),
              !x[o])
            ) {
              var i = x[r];
              delete (i = Sr({}, i)).removeEmptyAttrs,
                delete i.removeEmpty,
                (x[o] = i);
            }
            xr(u, function (e, t) {
              e[r] && ((u[t] = e = Sr({}, u[t])), (e[o] = e[r]));
            });
          }));
      },
      w = function (e) {
        var o = /^([+\-]?)([A-Za-z0-9_\-\.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)\]$/;
        (br[i.schema] = null),
          e &&
            xr(kr(e, ","), function (e) {
              var t,
                n,
                r = o.exec(e);
              r &&
                ((n = r[1]),
                (t = n ? u[r[2]] : (u[r[2]] = { "#comment": {} })),
                (t = u[r[2]]),
                xr(kr(r[3], "|"), function (e) {
                  "-" === n ? delete t[e] : (t[e] = {});
                }));
            });
      },
      E = function (e) {
        var t,
          n = x[e];
        if (n) return n;
        for (t = S.length; t--; ) if ((n = S[t]).pattern.test(e)) return n;
      };
    i.valid_elements
      ? b(i.valid_elements)
      : (xr(n, function (e, t) {
          (x[t] = {
            attributes: e.attributes,
            attributesOrder: e.attributesOrder,
          }),
            (u[t] = e.children);
        }),
        "html5" !== i.schema &&
          xr(kr("strong/b em/i"), function (e) {
            (e = kr(e, "/")), (x[e[1]].outputName = e[0]);
          }),
        xr(
          kr(
            "ol ul sub sup blockquote span font a table tbody tr strong em b i"
          ),
          function (e) {
            x[e] && (x[e].removeEmpty = !0);
          }
        ),
        xr(
          kr("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),
          function (e) {
            x[e].paddEmpty = !0;
          }
        ),
        xr(kr("span"), function (e) {
          x[e].removeEmptyAttrs = !0;
        })),
      C(i.custom_elements),
      w(i.valid_children),
      y(i.extended_valid_elements),
      w("+ol[ul|ol],+ul[ul|ol]"),
      xr(
        {
          dd: "dl",
          dt: "dl",
          li: "ul ol",
          td: "tr",
          th: "tr",
          tr: "tbody thead tfoot",
          tbody: "table",
          thead: "table",
          tfoot: "table",
          legend: "fieldset",
          area: "map",
          param: "video audio object",
        },
        function (e, t) {
          x[t] && (x[t].parentsRequired = kr(e));
        }
      ),
      i.invalid_elements &&
        xr(Nr(i.invalid_elements), function (e) {
          x[e] && delete x[e];
        }),
      E("span") || y("span[!data-mce-type|*]");
    return {
      children: u,
      elements: x,
      getValidStyles: function () {
        return r;
      },
      getValidClasses: function () {
        return a;
      },
      getBlockElements: function () {
        return h;
      },
      getInvalidStyles: function () {
        return o;
      },
      getShortEndedElements: function () {
        return f;
      },
      getTextBlockElements: function () {
        return g;
      },
      getTextInlineElements: function () {
        return v;
      },
      getBoolAttrs: function () {
        return d;
      },
      getElementRule: E,
      getSelfClosingElements: function () {
        return l;
      },
      getNonEmptyElements: function () {
        return m;
      },
      getMoveCaretBeforeOnEnterElements: function () {
        return p;
      },
      getWhiteSpaceElements: function () {
        return c;
      },
      getSpecialElements: function () {
        return t;
      },
      isValidChild: function (e, t) {
        var n = u[e.toLowerCase()];
        return !(!n || !n[t.toLowerCase()]);
      },
      isValid: function (e, t) {
        var n,
          r,
          o = E(e);
        if (o) {
          if (!t) return !0;
          if (o.attributes[t]) return !0;
          if ((n = o.attributePatterns))
            for (r = n.length; r--; ) if (n[r].pattern.test(e)) return !0;
        }
        return !1;
      },
      getCustomElements: function () {
        return s;
      },
      addValidElements: y,
      setValidElements: b,
      addCustomElements: C,
      addValidChildren: w,
    };
  }
  var Ar = "\ufeff",
    Dr = "\xa0",
    Or = function (e, t, n, r) {
      var o = function (e) {
        return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e;
      };
      return "#" + o(t) + o(n) + o(r);
    },
    Br = function (b, e) {
      var C,
        s,
        c,
        w = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
        x = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
        S = /\s*([^:]+):\s*([^;]+);?/g,
        N = /\s+$/,
        E = {},
        k = Ar;
      (b = b || {}),
        e && ((s = e.getValidStyles()), (c = e.getInvalidStyles()));
      var t = ("\\\" \\' \\; \\: ; : " + k).split(" ");
      for (C = 0; C < t.length; C++) (E[t[C]] = k + C), (E[k + C] = t[C]);
      return {
        toHex: function (e) {
          return e.replace(w, Or);
        },
        parse: function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            u,
            s,
            c = {},
            l = b.url_converter,
            f = b.url_converter_scope || this,
            d = function (e, t, n) {
              var r = c[e + "-top" + t];
              if (r) {
                var o = c[e + "-right" + t];
                if (o) {
                  var i = c[e + "-bottom" + t];
                  if (i) {
                    var a = c[e + "-left" + t];
                    if (a) {
                      var u = [r, o, i, a];
                      for (C = u.length - 1; C-- && u[C] === u[C + 1]; );
                      (-1 < C && n) ||
                        ((c[e + t] = -1 === C ? u[0] : u.join(" ")),
                        delete c[e + "-top" + t],
                        delete c[e + "-right" + t],
                        delete c[e + "-bottom" + t],
                        delete c[e + "-left" + t]);
                    }
                  }
                }
              }
            },
            m = function (e) {
              var t,
                n = c[e];
              if (n) {
                for (t = (n = n.split(" ")).length; t--; )
                  if (n[t] !== n[0]) return !1;
                return (c[e] = n[0]), !0;
              }
            },
            p = function (e) {
              return (o = !0), E[e];
            },
            g = function (e, t) {
              return (
                o &&
                  (e = e.replace(/\uFEFF[0-9]/g, function (e) {
                    return E[e];
                  })),
                t || (e = e.replace(/\\([\'\";:])/g, "$1")),
                e
              );
            },
            h = function (e) {
              return String.fromCharCode(parseInt(e.slice(1), 16));
            },
            v = function (e) {
              return e.replace(/\\[0-9a-f]+/gi, h);
            },
            y = function (e, t, n, r, o, i) {
              if ((o = o || i))
                return "'" + (o = g(o)).replace(/\'/g, "\\'") + "'";
              if (((t = g(t || n || r)), !b.allow_script_urls)) {
                var a = t.replace(/[\s\r\n]+/g, "");
                if (/(java|vb)script:/i.test(a)) return "";
                if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a))
                  return "";
              }
              return (
                l && (t = l.call(f, t, "style")),
                "url('" + t.replace(/\'/g, "\\'") + "')"
              );
            };
          if (e) {
            for (
              e = (e = e.replace(/[\u0000-\u001F]/g, ""))
                .replace(/\\[\"\';:\uFEFF]/g, p)
                .replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
                  return e.replace(/[;:]/g, p);
                });
              (t = S.exec(e));

            )
              if (
                ((S.lastIndex = t.index + t[0].length),
                (n = t[1].replace(N, "").toLowerCase()),
                (r = t[2].replace(N, "")),
                n && r)
              ) {
                if (
                  ((n = v(n)),
                  (r = v(r)),
                  -1 !== n.indexOf(k) || -1 !== n.indexOf('"'))
                )
                  continue;
                if (
                  !b.allow_script_urls &&
                  ("behavior" === n || /expression\s*\(|\/\*|\*\//.test(r))
                )
                  continue;
                "font-weight" === n && "700" === r
                  ? (r = "bold")
                  : ("color" !== n && "background-color" !== n) ||
                    (r = r.toLowerCase()),
                  (r = (r = r.replace(w, Or)).replace(x, y)),
                  (c[n] = o ? g(r, !0) : r);
              }
            d("border", "", !0),
              d("border", "-width"),
              d("border", "-color"),
              d("border", "-style"),
              d("padding", ""),
              d("margin", ""),
              (i = "border"),
              (u = "border-style"),
              (s = "border-color"),
              m((a = "border-width")) &&
                m(u) &&
                m(s) &&
                ((c[i] = c[a] + " " + c[u] + " " + c[s]),
                delete c[a],
                delete c[u],
                delete c[s]),
              "medium none" === c.border && delete c.border,
              "none" === c["border-image"] && delete c["border-image"];
          }
          return c;
        },
        serialize: function (i, a) {
          var u = "",
            e = function (e) {
              var t,
                n = s[e];
              if (n)
                for (var r = 0, o = n.length; r < o; r++)
                  (e = n[r]),
                    (t = i[e]) &&
                      (u += (0 < u.length ? " " : "") + e + ": " + t + ";");
            };
          return (
            a && s
              ? (e("*"), e(a))
              : oe(i, function (e, t) {
                  var n, r, o;
                  !e ||
                    (c &&
                      ((n = t),
                      (r = a),
                      ((o = c["*"]) && o[n]) || ((o = c[r]) && o[n]))) ||
                    (u += (0 < u.length ? " " : "") + t + ": " + e + ";");
                }),
            u
          );
        },
      };
    },
    Pr = /^(?:mouse|contextmenu)|click/,
    Lr = {
      keyLocation: 1,
      layerX: 1,
      layerY: 1,
      returnValue: 1,
      webkitMovementX: 1,
      webkitMovementY: 1,
      keyIdentifier: 1,
      mozPressure: 1,
    },
    Ir = function () {
      return !1;
    },
    Mr = function () {
      return !0;
    },
    Fr = function (e, t, n, r) {
      e.addEventListener
        ? e.addEventListener(t, n, r || !1)
        : e.attachEvent && e.attachEvent("on" + t, n);
    },
    Ur = function (e, t, n, r) {
      e.removeEventListener
        ? e.removeEventListener(t, n, r || !1)
        : e.detachEvent && e.detachEvent("on" + t, n);
    },
    zr = function (e, t) {
      var n,
        r,
        o = t || {};
      for (n in e) Lr[n] || (o[n] = e[n]);
      if (
        (o.target || (o.target = o.srcElement || V.document),
        mt.experimentalShadowDom &&
          (o.target = (function (e, t) {
            if (e.composedPath) {
              var n = e.composedPath();
              if (n && 0 < n.length) return n[0];
            }
            return t;
          })(e, o.target)),
        e &&
          Pr.test(e.type) &&
          e.pageX === undefined &&
          e.clientX !== undefined)
      ) {
        var i = o.target.ownerDocument || V.document,
          a = i.documentElement,
          u = i.body;
        (o.pageX =
          e.clientX +
          ((a && a.scrollLeft) || (u && u.scrollLeft) || 0) -
          ((a && a.clientLeft) || (u && u.clientLeft) || 0)),
          (o.pageY =
            e.clientY +
            ((a && a.scrollTop) || (u && u.scrollTop) || 0) -
            ((a && a.clientTop) || (u && u.clientTop) || 0));
      }
      return (
        (o.preventDefault = function () {
          (o.isDefaultPrevented = Mr),
            e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
        }),
        (o.stopPropagation = function () {
          (o.isPropagationStopped = Mr),
            e &&
              (e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0));
        }),
        !(o.stopImmediatePropagation = function () {
          (o.isImmediatePropagationStopped = Mr), o.stopPropagation();
        }) ==
          ((r = o).isDefaultPrevented === Mr || r.isDefaultPrevented === Ir) &&
          ((o.isDefaultPrevented = Ir),
          (o.isPropagationStopped = Ir),
          (o.isImmediatePropagationStopped = Ir)),
        "undefined" == typeof o.metaKey && (o.metaKey = !1),
        o
      );
    },
    jr = function (e, t, n) {
      var r = e.document,
        o = { type: "ready" };
      if (n.domLoaded) t(o);
      else {
        var i = function () {
          Ur(e, "DOMContentLoaded", i),
            Ur(e, "load", i),
            n.domLoaded || ((n.domLoaded = !0), t(o));
        };
        "complete" === r.readyState ||
        ("interactive" === r.readyState && r.body)
          ? i()
          : Fr(e, "DOMContentLoaded", i),
          Fr(e, "load", i);
      }
    },
    Hr =
      ((Vr.prototype.bind = function (e, t, n, r) {
        var o,
          i,
          a,
          u,
          s,
          c,
          l,
          f = this,
          d = V.window,
          m = function (e) {
            f.executeHandlers(zr(e || d.event), o);
          };
        if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
          e[f.expando]
            ? (o = e[f.expando])
            : ((o = f.count++), (e[f.expando] = o), (f.events[o] = {})),
            (r = r || e);
          var p = t.split(" ");
          for (a = p.length; a--; )
            (c = m),
              (s = l = !1),
              "DOMContentLoaded" === (u = p[a]) && (u = "ready"),
              f.domLoaded && "ready" === u && "complete" === e.readyState
                ? n.call(r, zr({ type: u }))
                : (f.hasMouseEnterLeave ||
                    ((s = f.mouseEnterLeave[u]) &&
                      (c = function (e) {
                        var t = e.currentTarget,
                          n = e.relatedTarget;
                        if (n && t.contains) n = t.contains(n);
                        else for (; n && n !== t; ) n = n.parentNode;
                        n ||
                          (((e = zr(e || d.event)).type =
                            "mouseout" === e.type
                              ? "mouseleave"
                              : "mouseenter"),
                          (e.target = t),
                          f.executeHandlers(e, o));
                      })),
                  f.hasFocusIn ||
                    ("focusin" !== u && "focusout" !== u) ||
                    ((l = !0),
                    (s = "focusin" === u ? "focus" : "blur"),
                    (c = function (e) {
                      ((e = zr(e || d.event)).type =
                        "focus" === e.type ? "focusin" : "focusout"),
                        f.executeHandlers(e, o);
                    })),
                  (i = f.events[o][u])
                    ? "ready" === u && f.domLoaded
                      ? n(zr({ type: u }))
                      : i.push({ func: n, scope: r })
                    : ((f.events[o][u] = i = [{ func: n, scope: r }]),
                      (i.fakeName = s),
                      (i.capture = l),
                      (i.nativeHandler = c),
                      "ready" === u ? jr(e, c, f) : Fr(e, s || u, c, l)));
          return (e = i = 0), n;
        }
      }),
      (Vr.prototype.unbind = function (n, e, t) {
        var r, o, i, a, u;
        if (!n || 3 === n.nodeType || 8 === n.nodeType) return this;
        var s = n[this.expando];
        if (s) {
          if (((u = this.events[s]), e)) {
            var c = e.split(" ");
            for (o = c.length; o--; )
              if ((r = u[(a = c[o])])) {
                if (t)
                  for (i = r.length; i--; )
                    if (r[i].func === t) {
                      var l = r.nativeHandler,
                        f = r.fakeName,
                        d = r.capture;
                      ((r = r
                        .slice(0, i)
                        .concat(r.slice(i + 1))).nativeHandler = l),
                        (r.fakeName = f),
                        (r.capture = d),
                        (u[a] = r);
                    }
                (t && 0 !== r.length) ||
                  (delete u[a],
                  Ur(n, r.fakeName || a, r.nativeHandler, r.capture));
              }
          } else
            oe(u, function (e, t) {
              Ur(n, e.fakeName || t, e.nativeHandler, e.capture);
            }),
              (u = {});
          for (a in u) if (me(u, a)) return this;
          delete this.events[s];
          try {
            delete n[this.expando];
          } catch (m) {
            n[this.expando] = null;
          }
        }
        return this;
      }),
      (Vr.prototype.fire = function (e, t, n) {
        var r;
        if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
        var o = zr(null, n);
        for (
          o.type = t, o.target = e;
          (r = e[this.expando]) && this.executeHandlers(o, r),
            (e =
              e.parentNode ||
              e.ownerDocument ||
              e.defaultView ||
              e.parentWindow) && !o.isPropagationStopped();

        );
        return this;
      }),
      (Vr.prototype.clean = function (e) {
        var t, n;
        if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
        if (
          (e[this.expando] && this.unbind(e),
          e.getElementsByTagName || (e = e.document),
          e && e.getElementsByTagName)
        )
          for (
            this.unbind(e), t = (n = e.getElementsByTagName("*")).length;
            t--;

          )
            (e = n[t])[this.expando] && this.unbind(e);
        return this;
      }),
      (Vr.prototype.destroy = function () {
        this.events = {};
      }),
      (Vr.prototype.cancel = function (e) {
        return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
      }),
      (Vr.prototype.executeHandlers = function (e, t) {
        var n = this.events[t],
          r = n && n[e.type];
        if (r)
          for (var o = 0, i = r.length; o < i; o++) {
            var a = r[o];
            if (
              (a && !1 === a.func.call(a.scope, e) && e.preventDefault(),
              e.isImmediatePropagationStopped())
            )
              return;
          }
      }),
      (Vr.Event = new Vr()),
      Vr);
  function Vr() {
    (this.domLoaded = !1),
      (this.events = {}),
      (this.count = 1),
      (this.expando = "mce-data-" + (+new Date()).toString(32)),
      (this.hasMouseEnterLeave = "onmouseenter" in V.document.documentElement),
      (this.hasFocusIn = "onfocusin" in V.document.documentElement),
      (this.count = 1);
  }
  var qr,
    $r,
    Wr,
    Kr,
    Xr,
    Yr,
    Gr,
    Jr,
    Qr,
    Zr,
    eo,
    to,
    no,
    ro,
    oo,
    io,
    ao,
    uo = "sizzle" + -new Date(),
    so = V.window.document,
    co = 0,
    lo = 0,
    fo = qo(),
    mo = qo(),
    po = qo(),
    go = function (e, t) {
      return e === t && (Zr = !0), 0;
    },
    ho = typeof undefined,
    vo = {}.hasOwnProperty,
    yo = [],
    bo = yo.pop,
    Co = yo.push,
    wo = yo.push,
    xo = yo.slice,
    So =
      yo.indexOf ||
      function (e) {
        for (var t = 0, n = this.length; t < n; t++)
          if (this[t] === e) return t;
        return -1;
      },
    No = "[\\x20\\t\\r\\n\\f]",
    Eo = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
    ko =
      "\\[" +
      No +
      "*(" +
      Eo +
      ")(?:" +
      No +
      "*([*^$|!~]?=)" +
      No +
      "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
      Eo +
      "))|)" +
      No +
      "*\\]",
    _o =
      ":(" +
      Eo +
      ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
      ko +
      ")*)|.*)\\)|)",
    To = new RegExp("^" + No + "+|((?:^|[^\\\\])(?:\\\\.)*)" + No + "+$", "g"),
    Ro = new RegExp("^" + No + "*," + No + "*"),
    Ao = new RegExp("^" + No + "*([>+~]|" + No + ")" + No + "*"),
    Do = new RegExp("=" + No + "*([^\\]'\"]*?)" + No + "*\\]", "g"),
    Oo = new RegExp(_o),
    Bo = new RegExp("^" + Eo + "$"),
    Po = {
      ID: new RegExp("^#(" + Eo + ")"),
      CLASS: new RegExp("^\\.(" + Eo + ")"),
      TAG: new RegExp("^(" + Eo + "|[*])"),
      ATTR: new RegExp("^" + ko),
      PSEUDO: new RegExp("^" + _o),
      CHILD: new RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
          No +
          "*(even|odd|(([+-]|)(\\d*)n|)" +
          No +
          "*(?:([+-]|)" +
          No +
          "*(\\d+)|))" +
          No +
          "*\\)|)",
        "i"
      ),
      bool: new RegExp(
        "^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$",
        "i"
      ),
      needsContext: new RegExp(
        "^" +
          No +
          "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
          No +
          "*((?:-\\d)?\\d*)" +
          No +
          "*\\)|)(?=[^-]|$)",
        "i"
      ),
    },
    Lo = /^(?:input|select|textarea|button)$/i,
    Io = /^h\d$/i,
    Mo = /^[^{]+\{\s*\[native \w/,
    Fo = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    Uo = /[+~]/,
    zo = /'|\\/g,
    jo = new RegExp("\\\\([\\da-f]{1,6}" + No + "?|(" + No + ")|.)", "ig"),
    Ho = function (e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n
        ? t
        : r < 0
        ? String.fromCharCode(65536 + r)
        : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
    };
  try {
    wo.apply((yo = xo.call(so.childNodes)), so.childNodes),
      yo[so.childNodes.length].nodeType;
  } catch (LE) {
    wo = {
      apply: yo.length
        ? function (e, t) {
            Co.apply(e, xo.call(t));
          }
        : function (e, t) {
            for (var n = e.length, r = 0; (e[n++] = t[r++]); );
            e.length = n - 1;
          },
    };
  }
  var Vo = function (e, t, n, r) {
    var o, i, a, u, s, c, l, f, d, m;
    if (
      ((t ? t.ownerDocument || t : so) !== to && eo(t),
      (n = n || []),
      !e || "string" != typeof e)
    )
      return n;
    if (1 !== (u = (t = t || to).nodeType) && 9 !== u) return [];
    if (ro && !r) {
      if ((o = Fo.exec(e)))
        if ((a = o[1])) {
          if (9 === u) {
            if (!(i = t.getElementById(a)) || !i.parentNode) return n;
            if (i.id === a) return n.push(i), n;
          } else if (
            t.ownerDocument &&
            (i = t.ownerDocument.getElementById(a)) &&
            ao(t, i) &&
            i.id === a
          )
            return n.push(i), n;
        } else {
          if (o[2]) return wo.apply(n, t.getElementsByTagName(e)), n;
          if ((a = o[3]) && qr.getElementsByClassName)
            return wo.apply(n, t.getElementsByClassName(a)), n;
        }
      if (qr.qsa && (!oo || !oo.test(e))) {
        if (
          ((f = l = uo),
          (d = t),
          (m = 9 === u && e),
          1 === u && "object" !== t.nodeName.toLowerCase())
        ) {
          for (
            c = Xr(e),
              (l = t.getAttribute("id"))
                ? (f = l.replace(zo, "\\$&"))
                : t.setAttribute("id", f),
              f = "[id='" + f + "'] ",
              s = c.length;
            s--;

          )
            c[s] = f + Go(c[s]);
          (d = (Uo.test(e) && Xo(t.parentNode)) || t), (m = c.join(","));
        }
        if (m)
          try {
            return wo.apply(n, d.querySelectorAll(m)), n;
          } catch (p) {
          } finally {
            l || t.removeAttribute("id");
          }
      }
    }
    return Gr(e.replace(To, "$1"), t, n, r);
  };
  function qo() {
    var n = [];
    function r(e, t) {
      return (
        n.push(e + " ") > $r.cacheLength && delete r[n.shift()],
        (r[e + " "] = t)
      );
    }
    return r;
  }
  function $o(e) {
    return (e[uo] = !0), e;
  }
  function Wo(e, t) {
    var n = t && e,
      r =
        n &&
        1 === e.nodeType &&
        1 === t.nodeType &&
        (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
    if (r) return r;
    if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
    return e ? 1 : -1;
  }
  function Ko(a) {
    return $o(function (i) {
      return (
        (i = +i),
        $o(function (e, t) {
          for (var n, r = a([], e.length, i), o = r.length; o--; )
            e[(n = r[o])] && (e[n] = !(t[n] = e[n]));
        })
      );
    });
  }
  function Xo(e) {
    return e && typeof e.getElementsByTagName != ho && e;
  }
  function Yo() {}
  function Go(e) {
    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
    return r;
  }
  function Jo(a, e, t) {
    var u = e.dir,
      s = t && "parentNode" === u,
      c = lo++;
    return e.first
      ? function (e, t, n) {
          for (; (e = e[u]); ) if (1 === e.nodeType || s) return a(e, t, n);
        }
      : function (e, t, n) {
          var r,
            o,
            i = [co, c];
          if (n) {
            for (; (e = e[u]); )
              if ((1 === e.nodeType || s) && a(e, t, n)) return !0;
          } else
            for (; (e = e[u]); )
              if (1 === e.nodeType || s) {
                if (
                  (r = (o = e[uo] || (e[uo] = {}))[u]) &&
                  r[0] === co &&
                  r[1] === c
                )
                  return (i[2] = r[2]);
                if (((o[u] = i)[2] = a(e, t, n))) return !0;
              }
        };
  }
  function Qo(o) {
    return 1 < o.length
      ? function (e, t, n) {
          for (var r = o.length; r--; ) if (!o[r](e, t, n)) return !1;
          return !0;
        }
      : o[0];
  }
  function Zo(e, t, n, r, o) {
    for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)
      (i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(u)));
    return a;
  }
  function ei(p, g, h, v, y, e) {
    return (
      v && !v[uo] && (v = ei(v)),
      y && !y[uo] && (y = ei(y, e)),
      $o(function (e, t, n, r) {
        var o,
          i,
          a,
          u = [],
          s = [],
          c = t.length,
          l =
            e ||
            (function m(e, t, n) {
              for (var r = 0, o = t.length; r < o; r++) Vo(e, t[r], n);
              return n;
            })(g || "*", n.nodeType ? [n] : n, []),
          f = !p || (!e && g) ? l : Zo(l, u, p, n, r),
          d = h ? (y || (e ? p : c || v) ? [] : t) : f;
        if ((h && h(f, d, n, r), v))
          for (o = Zo(d, s), v(o, [], n, r), i = o.length; i--; )
            (a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
        if (e) {
          if (y || p) {
            if (y) {
              for (o = [], i = d.length; i--; )
                (a = d[i]) && o.push((f[i] = a));
              y(null, (d = []), o, r);
            }
            for (i = d.length; i--; )
              (a = d[i]) &&
                -1 < (o = y ? So.call(e, a) : u[i]) &&
                (e[o] = !(t[o] = a));
          }
        } else (d = Zo(d === t ? d.splice(c, d.length) : d)), y ? y(null, t, d, r) : wo.apply(t, d);
      })
    );
  }
  function ti(e) {
    for (
      var r,
        t,
        n,
        o = e.length,
        i = $r.relative[e[0].type],
        a = i || $r.relative[" "],
        u = i ? 1 : 0,
        s = Jo(
          function (e) {
            return e === r;
          },
          a,
          !0
        ),
        c = Jo(
          function (e) {
            return -1 < So.call(r, e);
          },
          a,
          !0
        ),
        l = [
          function (e, t, n) {
            return (
              (!i && (n || t !== Jr)) || ((r = t).nodeType ? s : c)(e, t, n)
            );
          },
        ];
      u < o;
      u++
    )
      if ((t = $r.relative[e[u].type])) l = [Jo(Qo(l), t)];
      else {
        if ((t = $r.filter[e[u].type].apply(null, e[u].matches))[uo]) {
          for (n = ++u; n < o && !$r.relative[e[n].type]; n++);
          return ei(
            1 < u && Qo(l),
            1 < u &&
              Go(
                e
                  .slice(0, u - 1)
                  .concat({ value: " " === e[u - 2].type ? "*" : "" })
              ).replace(To, "$1"),
            t,
            u < n && ti(e.slice(u, n)),
            n < o && ti((e = e.slice(n))),
            n < o && Go(e)
          );
        }
        l.push(t);
      }
    return Qo(l);
  }
  (qr = Vo.support = {}),
    (Kr = Vo.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }),
    (eo = Vo.setDocument = function (e) {
      var t,
        s = e ? e.ownerDocument || e : so,
        n = s.defaultView;
      return s !== to && 9 === s.nodeType && s.documentElement
        ? ((no = (to = s).documentElement),
          (ro = !Kr(s)),
          n &&
            n !==
              (function r(e) {
                try {
                  return e.top;
                } catch (t) {}
                return null;
              })(n) &&
            (n.addEventListener
              ? n.addEventListener(
                  "unload",
                  function () {
                    eo();
                  },
                  !1
                )
              : n.attachEvent &&
                n.attachEvent("onunload", function () {
                  eo();
                })),
          (qr.attributes = !0),
          (qr.getElementsByTagName = !0),
          (qr.getElementsByClassName = Mo.test(s.getElementsByClassName)),
          (qr.getById = !0),
          ($r.find.ID = function (e, t) {
            if (typeof t.getElementById != ho && ro) {
              var n = t.getElementById(e);
              return n && n.parentNode ? [n] : [];
            }
          }),
          ($r.filter.ID = function (e) {
            var t = e.replace(jo, Ho);
            return function (e) {
              return e.getAttribute("id") === t;
            };
          }),
          ($r.find.TAG = qr.getElementsByTagName
            ? function (e, t) {
                if (typeof t.getElementsByTagName != ho)
                  return t.getElementsByTagName(e);
              }
            : function (e, t) {
                var n,
                  r = [],
                  o = 0,
                  i = t.getElementsByTagName(e);
                if ("*" !== e) return i;
                for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                return r;
              }),
          ($r.find.CLASS =
            qr.getElementsByClassName &&
            function (e, t) {
              if (ro) return t.getElementsByClassName(e);
            }),
          (io = []),
          (oo = []),
          (qr.disconnectedMatch = !0),
          (oo = oo.length && new RegExp(oo.join("|"))),
          (io = io.length && new RegExp(io.join("|"))),
          (t = Mo.test(no.compareDocumentPosition)),
          (ao =
            t || Mo.test(no.contains)
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                  return (
                    e === r ||
                    !(
                      !r ||
                      1 !== r.nodeType ||
                      !(n.contains
                        ? n.contains(r)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(r))
                    )
                  );
                }
              : function (e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (go = t
            ? function (e, t) {
                if (e === t) return (Zr = !0), 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (e.ownerDocument || e) === (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!qr.sortDetached && t.compareDocumentPosition(e) === n)
                    ? e === s || (e.ownerDocument === so && ao(so, e))
                      ? -1
                      : t === s || (t.ownerDocument === so && ao(so, t))
                      ? 1
                      : Qr
                      ? So.call(Qr, e) - So.call(Qr, t)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function (e, t) {
                if (e === t) return (Zr = !0), 0;
                var n,
                  r = 0,
                  o = e.parentNode,
                  i = t.parentNode,
                  a = [e],
                  u = [t];
                if (!o || !i)
                  return e === s
                    ? -1
                    : t === s
                    ? 1
                    : o
                    ? -1
                    : i
                    ? 1
                    : Qr
                    ? So.call(Qr, e) - So.call(Qr, t)
                    : 0;
                if (o === i) return Wo(e, t);
                for (n = e; (n = n.parentNode); ) a.unshift(n);
                for (n = t; (n = n.parentNode); ) u.unshift(n);
                for (; a[r] === u[r]; ) r++;
                return r
                  ? Wo(a[r], u[r])
                  : a[r] === so
                  ? -1
                  : u[r] === so
                  ? 1
                  : 0;
              }),
          s)
        : to;
    }),
    (Vo.matches = function (e, t) {
      return Vo(e, null, null, t);
    }),
    (Vo.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== to && eo(e),
        (t = t.replace(Do, "='$1']")),
        qr.matchesSelector &&
          ro &&
          (!io || !io.test(t)) &&
          (!oo || !oo.test(t)))
      )
        try {
          var n = (void 0).call(e, t);
          if (
            n ||
            qr.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (LE) {}
      return 0 < Vo(t, to, null, [e]).length;
    }),
    (Vo.contains = function (e, t) {
      return (e.ownerDocument || e) !== to && eo(e), ao(e, t);
    }),
    (Vo.attr = function (e, t) {
      (e.ownerDocument || e) !== to && eo(e);
      var n = $r.attrHandle[t.toLowerCase()],
        r =
          n && vo.call($r.attrHandle, t.toLowerCase())
            ? n(e, t, !ro)
            : undefined;
      return r !== undefined
        ? r
        : qr.attributes || !ro
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (Vo.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (Vo.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        o = 0;
      if (
        ((Zr = !qr.detectDuplicates),
        (Qr = !qr.sortStable && e.slice(0)),
        e.sort(go),
        Zr)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (Qr = null), e;
    }),
    (Wr = Vo.getText = function (e) {
      var t,
        n = "",
        r = 0,
        o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += Wr(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; (t = e[r++]); ) n += Wr(t);
      return n;
    }),
    (($r = Vo.selectors = {
      cacheLength: 50,
      createPseudo: $o,
      match: Po,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" },
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(jo, Ho)),
            (e[3] = (e[3] || e[4] || e[5] || "").replace(jo, Ho)),
            "~=" === e[2] && (e[3] = " " + e[3] + " "),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            "nth" === e[1].slice(0, 3)
              ? (e[3] || Vo.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
              : e[3] && Vo.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return Po.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || "")
                : n &&
                  Oo.test(n) &&
                  (t = Xr(n, !0)) &&
                  (t = n.indexOf(")", n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(jo, Ho).toLowerCase();
          return "*" === e
            ? function () {
                return !0;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = fo[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + No + ")" + e + "(" + No + "|$)")) &&
              fo(e, function (e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    (typeof e.getAttribute != ho && e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (n, r, o) {
          return function (e) {
            var t = Vo.attr(e, n);
            return null == t
              ? "!=" === r
              : !r ||
                  ((t += ""),
                  "=" === r
                    ? t === o
                    : "!=" === r
                    ? t !== o
                    : "^=" === r
                    ? o && 0 === t.indexOf(o)
                    : "*=" === r
                    ? o && -1 < t.indexOf(o)
                    : "$=" === r
                    ? o && t.slice(-o.length) === o
                    : "~=" === r
                    ? -1 < (" " + t + " ").indexOf(o)
                    : "|=" === r &&
                      (t === o || t.slice(0, o.length + 1) === o + "-"));
          };
        },
        CHILD: function (m, e, t, p, g) {
          var h = "nth" !== m.slice(0, 3),
            v = "last" !== m.slice(-4),
            y = "of-type" === e;
          return 1 === p && 0 === g
            ? function (e) {
                return !!e.parentNode;
              }
            : function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  u,
                  s,
                  c = h != v ? "nextSibling" : "previousSibling",
                  l = e.parentNode,
                  f = y && e.nodeName.toLowerCase(),
                  d = !n && !y;
                if (l) {
                  if (h) {
                    for (; c; ) {
                      for (i = e; (i = i[c]); )
                        if (
                          y ? i.nodeName.toLowerCase() === f : 1 === i.nodeType
                        )
                          return !1;
                      s = c = "only" === m && !s && "nextSibling";
                    }
                    return !0;
                  }
                  if (((s = [v ? l.firstChild : l.lastChild]), v && d)) {
                    for (
                      u =
                        (r = (o = l[uo] || (l[uo] = {}))[m] || [])[0] === co &&
                        r[1],
                        a = r[0] === co && r[2],
                        i = u && l.childNodes[u];
                      (i = (++u && i && i[c]) || (a = u = 0) || s.pop());

                    )
                      if (1 === i.nodeType && ++a && i === e) {
                        o[m] = [co, u, a];
                        break;
                      }
                  } else if (
                    d &&
                    (r = (e[uo] || (e[uo] = {}))[m]) &&
                    r[0] === co
                  )
                    a = r[1];
                  else
                    for (
                      ;
                      (i = (++u && i && i[c]) || (a = u = 0) || s.pop()) &&
                      ((y
                        ? i.nodeName.toLowerCase() !== f
                        : 1 !== i.nodeType) ||
                        !++a ||
                        (d && ((i[uo] || (i[uo] = {}))[m] = [co, a]), i !== e));

                    );
                  return (a -= g) === p || (a % p == 0 && 0 <= a / p);
                }
              };
        },
        PSEUDO: function (e, i) {
          var t,
            a =
              $r.pseudos[e] ||
              $r.setFilters[e.toLowerCase()] ||
              Vo.error("unsupported pseudo: " + e);
          return a[uo]
            ? a(i)
            : 1 < a.length
            ? ((t = [e, e, "", i]),
              $r.setFilters.hasOwnProperty(e.toLowerCase())
                ? $o(function (e, t) {
                    for (var n, r = a(e, i), o = r.length; o--; )
                      e[(n = So.call(e, r[o]))] = !(t[n] = r[o]);
                  })
                : function (e) {
                    return a(e, 0, t);
                  })
            : a;
        },
      },
      pseudos: {
        not: $o(function (e) {
          var r = [],
            o = [],
            u = Yr(e.replace(To, "$1"));
          return u[uo]
            ? $o(function (e, t, n, r) {
                for (var o, i = u(e, null, r, []), a = e.length; a--; )
                  (o = i[a]) && (e[a] = !(t[a] = o));
              })
            : function (e, t, n) {
                return (r[0] = e), u(r, null, n, o), !o.pop();
              };
        }),
        has: $o(function (t) {
          return function (e) {
            return 0 < Vo(t, e).length;
          };
        }),
        contains: $o(function (t) {
          return (
            (t = t.replace(jo, Ho)),
            function (e) {
              return -1 < (e.textContent || e.innerText || Wr(e)).indexOf(t);
            }
          );
        }),
        lang: $o(function (n) {
          return (
            Bo.test(n || "") || Vo.error("unsupported lang: " + n),
            (n = n.replace(jo, Ho).toLowerCase()),
            function (e) {
              var t;
              do {
                if (
                  (t = ro
                    ? e.lang
                    : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                )
                  return (
                    (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                  );
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function (e) {
          var t = V.window.location && V.window.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === no;
        },
        focus: function (e) {
          return (
            e === to.activeElement &&
            (!to.hasFocus || to.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: function (e) {
          return !1 === e.disabled;
        },
        disabled: function (e) {
          return !0 === e.disabled;
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return (
            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
          );
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !$r.pseudos.empty(e);
        },
        header: function (e) {
          return Io.test(e.nodeName);
        },
        input: function (e) {
          return Lo.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function (e) {
          var t;
          return (
            "input" === e.nodeName.toLowerCase() &&
            "text" === e.type &&
            (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          );
        },
        first: Ko(function () {
          return [0];
        }),
        last: Ko(function (e, t) {
          return [t - 1];
        }),
        eq: Ko(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: Ko(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: Ko(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: Ko(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
          return e;
        }),
        gt: Ko(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e;
        }),
      },
    }).pseudos.nth = $r.pseudos.eq),
    z(["radio", "checkbox", "file", "password", "image"], function (e) {
      $r.pseudos[e] = (function n(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      })(e);
    }),
    z(["submit", "reset"], function (e) {
      $r.pseudos[e] = (function t(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      })(e);
    }),
    (Yo.prototype = $r.filters = $r.pseudos),
    ($r.setFilters = new Yo()),
    (Xr = Vo.tokenize = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        u,
        s,
        c = mo[e + " "];
      if (c) return t ? 0 : c.slice(0);
      for (a = e, u = [], s = $r.preFilter; a; ) {
        for (i in ((n && !(r = Ro.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
        (n = !1),
        (r = Ao.exec(a)) &&
          ((n = r.shift()),
          o.push({ value: n, type: r[0].replace(To, " ") }),
          (a = a.slice(n.length))),
        $r.filter))
          $r.filter.hasOwnProperty(i) &&
            (!(r = Po[i].exec(a)) ||
              (s[i] && !(r = s[i](r))) ||
              ((n = r.shift()),
              o.push({ value: n, type: i, matches: r }),
              (a = a.slice(n.length))));
        if (!n) break;
      }
      return t ? a.length : a ? Vo.error(e) : mo(e, u).slice(0);
    }),
    (Yr = Vo.compile = function (e, t) {
      var n,
        r = [],
        o = [],
        i = po[e + " "];
      if (!i) {
        for (n = (t = t || Xr(e)).length; n--; )
          (i = ti(t[n]))[uo] ? r.push(i) : o.push(i);
        (i = po(
          e,
          (function a(h, v) {
            var y = 0 < v.length,
              b = 0 < h.length,
              e = function (e, t, n, r, o) {
                var i,
                  a,
                  u,
                  s = 0,
                  c = "0",
                  l = e && [],
                  f = [],
                  d = Jr,
                  m = e || (b && $r.find.TAG("*", o)),
                  p = (co += null == d ? 1 : Math.random() || 0.1),
                  g = m.length;
                for (
                  o && (Jr = t !== to && t);
                  c !== g && null != (i = m[c]);
                  c++
                ) {
                  if (b && i) {
                    for (a = 0; (u = h[a++]); )
                      if (u(i, t, n)) {
                        r.push(i);
                        break;
                      }
                    o && (co = p);
                  }
                  y && ((i = !u && i) && s--, e && l.push(i));
                }
                if (((s += c), y && c !== s)) {
                  for (a = 0; (u = v[a++]); ) u(l, f, t, n);
                  if (e) {
                    if (0 < s)
                      for (; c--; ) l[c] || f[c] || (f[c] = bo.call(r));
                    f = Zo(f);
                  }
                  wo.apply(r, f),
                    o &&
                      !e &&
                      0 < f.length &&
                      1 < s + v.length &&
                      Vo.uniqueSort(r);
                }
                return o && ((co = p), (Jr = d)), l;
              };
            return y ? $o(e) : e;
          })(o, r)
        )).selector = e;
      }
      return i;
    }),
    (Gr = Vo.select = function (e, t, n, r) {
      var o,
        i,
        a,
        u,
        s,
        c = "function" == typeof e && e,
        l = !r && Xr((e = c.selector || e));
      if (((n = n || []), 1 === l.length)) {
        if (
          2 < (i = l[0] = l[0].slice(0)).length &&
          "ID" === (a = i[0]).type &&
          qr.getById &&
          9 === t.nodeType &&
          ro &&
          $r.relative[i[1].type]
        ) {
          if (!(t = ($r.find.ID(a.matches[0].replace(jo, Ho), t) || [])[0]))
            return n;
          c && (t = t.parentNode), (e = e.slice(i.shift().value.length));
        }
        for (
          o = Po.needsContext.test(e) ? 0 : i.length;
          o-- && ((a = i[o]), !$r.relative[(u = a.type)]);

        )
          if (
            (s = $r.find[u]) &&
            (r = s(
              a.matches[0].replace(jo, Ho),
              (Uo.test(i[0].type) && Xo(t.parentNode)) || t
            ))
          ) {
            if ((i.splice(o, 1), !(e = r.length && Go(i))))
              return wo.apply(n, r), n;
            break;
          }
      }
      return (
        (c || Yr(e, l))(r, t, !ro, n, (Uo.test(e) && Xo(t.parentNode)) || t), n
      );
    }),
    (qr.sortStable = uo.split("").sort(go).join("") === uo),
    (qr.detectDuplicates = !!Zr),
    eo(),
    (qr.sortDetached = !0);
  var ni = V.document,
    ri = Array.prototype.push,
    oi = Array.prototype.slice,
    ii = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    ai = Hr.Event,
    ui = yt.makeMap("children,contents,next,prev"),
    si = function (e) {
      return void 0 !== e;
    },
    ci = function (e) {
      return "string" == typeof e;
    },
    li = function (e, t) {
      var n,
        r = (t = t || ni).createElement("div"),
        o = t.createDocumentFragment();
      for (r.innerHTML = e; (n = r.firstChild); ) o.appendChild(n);
      return o;
    },
    fi = function (e, t, n, r) {
      var o;
      if (ci(t)) t = li(t, Ei(e[0]));
      else if (t.length && !t.nodeType) {
        if (((t = Ri.makeArray(t)), r))
          for (o = t.length - 1; 0 <= o; o--) fi(e, t[o], n, r);
        else for (o = 0; o < t.length; o++) fi(e, t[o], n, r);
        return e;
      }
      if (t.nodeType) for (o = e.length; o--; ) n.call(e[o], t);
      return e;
    },
    di = function (e, t) {
      return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ");
    },
    mi = function (e, t, n) {
      var r, o;
      return (
        (t = Ri(t)[0]),
        e.each(function () {
          (n && r === this.parentNode) ||
            ((r = this.parentNode),
            (o = t.cloneNode(!1)),
            this.parentNode.insertBefore(o, this)),
            o.appendChild(this);
        }),
        e
      );
    },
    pi = yt.makeMap(
      "fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom",
      " "
    ),
    gi = yt.makeMap(
      "checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected",
      " "
    ),
    hi = { for: "htmlFor", class: "className", readonly: "readOnly" },
    vi = { float: "cssFloat" },
    yi = {},
    bi = {},
    Ci = function (e, t) {
      return new Ri.fn.init(e, t);
    },
    wi = /^\s*|\s*$/g,
    xi = function (e) {
      return null === e || e === undefined ? "" : ("" + e).replace(wi, "");
    },
    Si = function (e, t) {
      var n, r, o, i;
      if (e)
        if ((n = e.length) === undefined) {
          for (r in e)
            if (e.hasOwnProperty(r) && ((i = e[r]), !1 === t.call(i, r, i)))
              break;
        } else for (o = 0; o < n && ((i = e[o]), !1 !== t.call(i, o, i)); o++);
      return e;
    },
    Ni = function (e, n) {
      var r = [];
      return (
        Si(e, function (e, t) {
          n(t, e) && r.push(t);
        }),
        r
      );
    },
    Ei = function (e) {
      return e ? (9 === e.nodeType ? e : e.ownerDocument) : ni;
    };
  (Ci.fn = Ci.prototype = {
    constructor: Ci,
    selector: "",
    context: null,
    length: 0,
    init: function (e, t) {
      var n,
        r,
        o = this;
      if (!e) return o;
      if (e.nodeType) return (o.context = o[0] = e), (o.length = 1), o;
      if (t && t.nodeType) o.context = t;
      else {
        if (t) return Ri(e).attr(t);
        o.context = t = V.document;
      }
      if (ci(e)) {
        if (
          !(n =
            "<" === (o.selector = e).charAt(0) &&
            ">" === e.charAt(e.length - 1) &&
            3 <= e.length
              ? [null, e, null]
              : ii.exec(e))
        )
          return Ri(t).find(e);
        if (n[1])
          for (r = li(e, Ei(t)).firstChild; r; )
            ri.call(o, r), (r = r.nextSibling);
        else {
          if (!(r = Ei(t).getElementById(n[2]))) return o;
          if (r.id !== n[2]) return o.find(e);
          (o.length = 1), (o[0] = r);
        }
      } else this.add(e, !1);
      return o;
    },
    toArray: function () {
      return yt.toArray(this);
    },
    add: function (e, t) {
      var n, r;
      if (ci(e)) return this.add(Ri(e));
      if (!1 !== t)
        for (
          n = Ri.unique(this.toArray().concat(Ri.makeArray(e))),
            this.length = n.length,
            r = 0;
          r < n.length;
          r++
        )
          this[r] = n[r];
      else ri.apply(this, Ri.makeArray(e));
      return this;
    },
    attr: function (t, n) {
      var e,
        r = this;
      if ("object" == typeof t)
        Si(t, function (e, t) {
          r.attr(e, t);
        });
      else {
        if (!si(n)) {
          if (r[0] && 1 === r[0].nodeType) {
            if ((e = yi[t]) && e.get) return e.get(r[0], t);
            if (gi[t]) return r.prop(t) ? t : undefined;
            null === (n = r[0].getAttribute(t, 2)) && (n = undefined);
          }
          return n;
        }
        this.each(function () {
          var e;
          if (1 === this.nodeType) {
            if ((e = yi[t]) && e.set) return void e.set(this, n);
            null === n
              ? this.removeAttribute(t, 2)
              : this.setAttribute(t, n, 2);
          }
        });
      }
      return r;
    },
    removeAttr: function (e) {
      return this.attr(e, null);
    },
    prop: function (e, t) {
      var n = this;
      if ("object" == typeof (e = hi[e] || e))
        Si(e, function (e, t) {
          n.prop(e, t);
        });
      else {
        if (!si(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
        this.each(function () {
          1 === this.nodeType && (this[e] = t);
        });
      }
      return n;
    },
    css: function (n, r) {
      var e,
        o,
        i = this,
        t = function (e) {
          return e.replace(/-(\D)/g, function (e, t) {
            return t.toUpperCase();
          });
        },
        a = function (e) {
          return e.replace(/[A-Z]/g, function (e) {
            return "-" + e;
          });
        };
      if ("object" == typeof n)
        Si(n, function (e, t) {
          i.css(e, t);
        });
      else if (si(r))
        (n = t(n)),
          "number" != typeof r || pi[n] || (r = r.toString() + "px"),
          i.each(function () {
            var e = this.style;
            if ((o = bi[n]) && o.set) o.set(this, r);
            else {
              try {
                this.style[vi[n] || n] = r;
              } catch (t) {}
              (null !== r && "" !== r) ||
                (e.removeProperty
                  ? e.removeProperty(a(n))
                  : e.removeAttribute(n));
            }
          });
      else {
        if (((e = i[0]), (o = bi[n]) && o.get)) return o.get(e);
        if (!e.ownerDocument.defaultView)
          return e.currentStyle ? e.currentStyle[t(n)] : "";
        try {
          return e.ownerDocument.defaultView
            .getComputedStyle(e, null)
            .getPropertyValue(a(n));
        } catch (u) {
          return undefined;
        }
      }
      return i;
    },
    remove: function () {
      for (var e, t = this.length; t--; )
        (e = this[t]), ai.clean(e), e.parentNode && e.parentNode.removeChild(e);
      return this;
    },
    empty: function () {
      for (var e, t = this.length; t--; )
        for (e = this[t]; e.firstChild; ) e.removeChild(e.firstChild);
      return this;
    },
    html: function (e) {
      var t;
      if (si(e)) {
        t = this.length;
        try {
          for (; t--; ) this[t].innerHTML = e;
        } catch (n) {
          Ri(this[t]).empty().append(e);
        }
        return this;
      }
      return this[0] ? this[0].innerHTML : "";
    },
    text: function (e) {
      var t;
      if (si(e)) {
        for (t = this.length; t--; )
          "innerText" in this[t]
            ? (this[t].innerText = e)
            : (this[0].textContent = e);
        return this;
      }
      return this[0] ? this[0].innerText || this[0].textContent : "";
    },
    append: function () {
      return fi(this, arguments, function (e) {
        (1 === this.nodeType || (this.host && 1 === this.host.nodeType)) &&
          this.appendChild(e);
      });
    },
    prepend: function () {
      return fi(
        this,
        arguments,
        function (e) {
          (1 === this.nodeType || (this.host && 1 === this.host.nodeType)) &&
            this.insertBefore(e, this.firstChild);
        },
        !0
      );
    },
    before: function () {
      return this[0] && this[0].parentNode
        ? fi(this, arguments, function (e) {
            this.parentNode.insertBefore(e, this);
          })
        : this;
    },
    after: function () {
      return this[0] && this[0].parentNode
        ? fi(
            this,
            arguments,
            function (e) {
              this.parentNode.insertBefore(e, this.nextSibling);
            },
            !0
          )
        : this;
    },
    appendTo: function (e) {
      return Ri(e).append(this), this;
    },
    prependTo: function (e) {
      return Ri(e).prepend(this), this;
    },
    replaceWith: function (e) {
      return this.before(e).remove();
    },
    wrap: function (e) {
      return mi(this, e);
    },
    wrapAll: function (e) {
      return mi(this, e, !0);
    },
    wrapInner: function (e) {
      return (
        this.each(function () {
          Ri(this).contents().wrapAll(e);
        }),
        this
      );
    },
    unwrap: function () {
      return this.parent().each(function () {
        Ri(this).replaceWith(this.childNodes);
      });
    },
    clone: function () {
      var e = [];
      return (
        this.each(function () {
          e.push(this.cloneNode(!0));
        }),
        Ri(e)
      );
    },
    addClass: function (e) {
      return this.toggleClass(e, !0);
    },
    removeClass: function (e) {
      return this.toggleClass(e, !1);
    },
    toggleClass: function (o, i) {
      var e = this;
      return (
        "string" != typeof o ||
          (-1 !== o.indexOf(" ")
            ? Si(o.split(" "), function () {
                e.toggleClass(this, i);
              })
            : e.each(function (e, t) {
                var n = di(t, o);
                if (n !== i) {
                  var r = t.className;
                  n
                    ? (t.className = xi(
                        (" " + r + " ").replace(" " + o + " ", " ")
                      ))
                    : (t.className += r ? " " + o : o);
                }
              })),
        e
      );
    },
    hasClass: function (e) {
      return di(this[0], e);
    },
    each: function (e) {
      return Si(this, e);
    },
    on: function (e, t) {
      return this.each(function () {
        ai.bind(this, e, t);
      });
    },
    off: function (e, t) {
      return this.each(function () {
        ai.unbind(this, e, t);
      });
    },
    trigger: function (e) {
      return this.each(function () {
        "object" == typeof e ? ai.fire(this, e.type, e) : ai.fire(this, e);
      });
    },
    show: function () {
      return this.css("display", "");
    },
    hide: function () {
      return this.css("display", "none");
    },
    slice: function () {
      return new Ri(oi.apply(this, arguments));
    },
    eq: function (e) {
      return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    find: function (e) {
      var t,
        n,
        r = [];
      for (t = 0, n = this.length; t < n; t++) Ri.find(e, this[t], r);
      return Ri(r);
    },
    filter: function (n) {
      return Ri(
        "function" == typeof n
          ? Ni(this.toArray(), function (e, t) {
              return n(t, e);
            })
          : Ri.filter(n, this.toArray())
      );
    },
    closest: function (n) {
      var r = [];
      return (
        n instanceof Ri && (n = n[0]),
        this.each(function (e, t) {
          for (; t; ) {
            if ("string" == typeof n && Ri(t).is(n)) {
              r.push(t);
              break;
            }
            if (t === n) {
              r.push(t);
              break;
            }
            t = t.parentNode;
          }
        }),
        Ri(r)
      );
    },
    offset: function (e) {
      var t,
        n,
        r,
        o,
        i = 0,
        a = 0;
      return e
        ? this.css(e)
        : ((t = this[0]) &&
            ((r = (n = t.ownerDocument).documentElement),
            t.getBoundingClientRect &&
              ((i =
                (o = t.getBoundingClientRect()).left +
                (r.scrollLeft || n.body.scrollLeft) -
                r.clientLeft),
              (a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop))),
          { left: i, top: a });
    },
    push: ri,
    sort: Array.prototype.sort,
    splice: Array.prototype.splice,
  }),
    yt.extend(Ci, {
      extend: yt.extend,
      makeArray: function (e) {
        return ((t = e) && t === t.window) || e.nodeType ? [e] : yt.toArray(e);
        var t;
      },
      inArray: function (e, t) {
        var n;
        if (t.indexOf) return t.indexOf(e);
        for (n = t.length; n--; ) if (t[n] === e) return n;
        return -1;
      },
      isArray: yt.isArray,
      each: Si,
      trim: xi,
      grep: Ni,
      find: Vo,
      expr: Vo.selectors,
      unique: Vo.uniqueSort,
      text: Vo.getText,
      contains: Vo.contains,
      filter: function (e, t, n) {
        var r = t.length;
        for (n && (e = ":not(" + e + ")"); r--; )
          1 !== t[r].nodeType && t.splice(r, 1);
        return (t =
          1 === t.length
            ? Ri.find.matchesSelector(t[0], e)
              ? [t[0]]
              : []
            : Ri.find.matches(e, t));
      },
    });
  var ki = function (e, t, n) {
      var r = [],
        o = e[t];
      for (
        "string" != typeof n && n instanceof Ri && (n = n[0]);
        o && 9 !== o.nodeType;

      ) {
        if (n !== undefined) {
          if (o === n) break;
          if ("string" == typeof n && Ri(o).is(n)) break;
        }
        1 === o.nodeType && r.push(o), (o = o[t]);
      }
      return r;
    },
    _i = function (e, t, n, r) {
      var o = [];
      for (r instanceof Ri && (r = r[0]); e; e = e[t])
        if (!n || e.nodeType === n) {
          if (r !== undefined) {
            if (e === r) break;
            if ("string" == typeof r && Ri(e).is(r)) break;
          }
          o.push(e);
        }
      return o;
    },
    Ti = function (e, t, n) {
      for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
      return null;
    };
  Si(
    {
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return ki(e, "parentNode");
      },
      next: function (e) {
        return Ti(e, "nextSibling", 1);
      },
      prev: function (e) {
        return Ti(e, "previousSibling", 1);
      },
      children: function (e) {
        return _i(e.firstChild, "nextSibling", 1);
      },
      contents: function (e) {
        return yt.toArray(
          ("iframe" === e.nodeName
            ? e.contentDocument || e.contentWindow.document
            : e
          ).childNodes
        );
      },
    },
    function (r, o) {
      Ci.fn[r] = function (t) {
        var n = [];
        this.each(function () {
          var e = o.call(n, this, t, n);
          e && (Ri.isArray(e) ? n.push.apply(n, e) : n.push(e));
        }),
          1 < this.length &&
            (ui[r] || (n = Ri.unique(n)),
            0 === r.indexOf("parents") && (n = n.reverse()));
        var e = Ri(n);
        return t ? e.filter(t) : e;
      };
    }
  ),
    Si(
      {
        parentsUntil: function (e, t) {
          return ki(e, "parentNode", t);
        },
        nextUntil: function (e, t) {
          return _i(e, "nextSibling", 1, t).slice(1);
        },
        prevUntil: function (e, t) {
          return _i(e, "previousSibling", 1, t).slice(1);
        },
      },
      function (o, i) {
        Ci.fn[o] = function (t, e) {
          var n = [];
          this.each(function () {
            var e = i.call(n, this, t, n);
            e && (Ri.isArray(e) ? n.push.apply(n, e) : n.push(e));
          }),
            1 < this.length &&
              ((n = Ri.unique(n)),
              (0 !== o.indexOf("parents") && "prevUntil" !== o) ||
                (n = n.reverse()));
          var r = Ri(n);
          return e ? r.filter(e) : r;
        };
      }
    ),
    (Ci.fn.is = function (e) {
      return !!e && 0 < this.filter(e).length;
    }),
    (Ci.fn.init.prototype = Ci.fn),
    (Ci.overrideDefaults = function (n) {
      var r,
        o = function (e, t) {
          return (
            (r = r || n()),
            0 === arguments.length && (e = r.element),
            (t = t || r.context),
            new o.fn.init(e, t)
          );
        };
      return Ri.extend(o, this), o;
    }),
    (Ci.attrHooks = yi),
    (Ci.cssHooks = bi);
  var Ri = Ci,
    Ai =
      ((Di.prototype.current = function () {
        return this.node;
      }),
      (Di.prototype.next = function (e) {
        return (
          (this.node = this.findSibling(
            this.node,
            "firstChild",
            "nextSibling",
            e
          )),
          this.node
        );
      }),
      (Di.prototype.prev = function (e) {
        return (
          (this.node = this.findSibling(
            this.node,
            "lastChild",
            "previousSibling",
            e
          )),
          this.node
        );
      }),
      (Di.prototype.prev2 = function (e) {
        return (
          (this.node = this.findPreviousNode(
            this.node,
            "lastChild",
            "previousSibling",
            e
          )),
          this.node
        );
      }),
      (Di.prototype.findSibling = function (e, t, n, r) {
        var o, i;
        if (e) {
          if (!r && e[t]) return e[t];
          if (e !== this.rootNode) {
            if ((o = e[n])) return o;
            for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode)
              if ((o = i[n])) return o;
          }
        }
      }),
      (Di.prototype.findPreviousNode = function (e, t, n, r) {
        var o, i, a;
        if (e) {
          if (((o = e[n]), this.rootNode && o === this.rootNode)) return;
          if (o) {
            if (!r) for (a = o[t]; a; a = a[t]) if (!a[t]) return a;
            return o;
          }
          if ((i = e.parentNode) && i !== this.rootNode) return i;
        }
      }),
      Di);
  function Di(e, t) {
    (this.node = e),
      (this.rootNode = t),
      (this.current = this.current.bind(this)),
      (this.next = this.next.bind(this)),
      (this.prev = this.prev.bind(this)),
      (this.prev2 = this.prev2.bind(this));
  }
  var Oi,
    Bi,
    Pi,
    Li,
    Ii = {},
    Mi = { exports: Ii };
  (Oi = undefined),
    (Bi = Ii),
    (Pi = Mi),
    (Li = undefined),
    (function (e) {
      if ("object" == typeof Bi && void 0 !== Pi) Pi.exports = e();
      else if ("function" == typeof Oi && Oi.amd) Oi([], e);
      else {
        ("undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : this
        ).EphoxContactWrapper = e();
      }
    })(function () {
      return (function l(i, a, u) {
        function s(t, e) {
          if (!a[t]) {
            if (!i[t]) {
              var n = "function" == typeof Li && Li;
              if (!e && n) return n(t, !0);
              if (c) return c(t, !0);
              var r = new Error("Cannot find module '" + t + "'");
              throw ((r.code = "MODULE_NOT_FOUND"), r);
            }
            var o = (a[t] = { exports: {} });
            i[t][0].call(
              o.exports,
              function (e) {
                return s(i[t][1][e] || e);
              },
              o,
              o.exports,
              l,
              i,
              a,
              u
            );
          }
          return a[t].exports;
        }
        for (var c = "function" == typeof Li && Li, e = 0; e < u.length; e++)
          s(u[e]);
        return s;
      })(
        {
          1: [
            function (e, t, n) {
              var r,
                o,
                i = (t.exports = {});
              function a() {
                throw new Error("setTimeout has not been defined");
              }
              function u() {
                throw new Error("clearTimeout has not been defined");
              }
              function s(e) {
                if (r === setTimeout) return setTimeout(e, 0);
                if ((r === a || !r) && setTimeout)
                  return (r = setTimeout), setTimeout(e, 0);
                try {
                  return r(e, 0);
                } catch (LE) {
                  try {
                    return r.call(null, e, 0);
                  } catch (LE) {
                    return r.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  r = "function" == typeof setTimeout ? setTimeout : a;
                } catch (LE) {
                  r = a;
                }
                try {
                  o = "function" == typeof clearTimeout ? clearTimeout : u;
                } catch (LE) {
                  o = u;
                }
              })();
              var c,
                l = [],
                f = !1,
                d = -1;
              function m() {
                f &&
                  c &&
                  ((f = !1),
                  c.length ? (l = c.concat(l)) : (d = -1),
                  l.length && p());
              }
              function p() {
                if (!f) {
                  var e = s(m);
                  f = !0;
                  for (var t = l.length; t; ) {
                    for (c = l, l = []; ++d < t; ) c && c[d].run();
                    (d = -1), (t = l.length);
                  }
                  (c = null),
                    (f = !1),
                    (function n(e) {
                      if (o === clearTimeout) return clearTimeout(e);
                      if ((o === u || !o) && clearTimeout)
                        return (o = clearTimeout), clearTimeout(e);
                      try {
                        return o(e);
                      } catch (LE) {
                        try {
                          return o.call(null, e);
                        } catch (LE) {
                          return o.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function g(e, t) {
                (this.fun = e), (this.array = t);
              }
              function h() {}
              (i.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (1 < arguments.length)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                l.push(new g(e, t)), 1 !== l.length || f || s(p);
              }),
                (g.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = h),
                (i.addListener = h),
                (i.once = h),
                (i.off = h),
                (i.removeListener = h),
                (i.removeAllListeners = h),
                (i.emit = h),
                (i.prependListener = h),
                (i.prependOnceListener = h),
                (i.listeners = function (e) {
                  return [];
                }),
                (i.binding = function (e) {
                  throw new Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (e) {
                  throw new Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                  return 0;
                });
            },
            {},
          ],
          2: [
            function (e, f, t) {
              (function (t) {
                function r() {}
                function i(e) {
                  if ("object" != typeof this)
                    throw new TypeError("Promises must be constructed via new");
                  if ("function" != typeof e)
                    throw new TypeError("not a function");
                  (this._state = 0),
                    (this._handled = !1),
                    (this._value = undefined),
                    (this._deferreds = []),
                    l(e, this);
                }
                function o(n, r) {
                  for (; 3 === n._state; ) n = n._value;
                  0 !== n._state
                    ? ((n._handled = !0),
                      i._immediateFn(function () {
                        var e = 1 === n._state ? r.onFulfilled : r.onRejected;
                        if (null !== e) {
                          var t;
                          try {
                            t = e(n._value);
                          } catch (LE) {
                            return void u(r.promise, LE);
                          }
                          a(r.promise, t);
                        } else (1 === n._state ? a : u)(r.promise, n._value);
                      }))
                    : n._deferreds.push(r);
                }
                function a(e, t) {
                  try {
                    if (t === e)
                      throw new TypeError(
                        "A promise cannot be resolved with itself."
                      );
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                      var n = t.then;
                      if (t instanceof i)
                        return (e._state = 3), (e._value = t), void s(e);
                      if ("function" == typeof n)
                        return void l(
                          (function r(e, t) {
                            return function () {
                              e.apply(t, arguments);
                            };
                          })(n, t),
                          e
                        );
                    }
                    (e._state = 1), (e._value = t), s(e);
                  } catch (LE) {
                    u(e, LE);
                  }
                }
                function u(e, t) {
                  (e._state = 2), (e._value = t), s(e);
                }
                function s(e) {
                  2 === e._state &&
                    0 === e._deferreds.length &&
                    i._immediateFn(function () {
                      e._handled || i._unhandledRejectionFn(e._value);
                    });
                  for (var t = 0, n = e._deferreds.length; t < n; t++)
                    o(e, e._deferreds[t]);
                  e._deferreds = null;
                }
                function c(e, t, n) {
                  (this.onFulfilled = "function" == typeof e ? e : null),
                    (this.onRejected = "function" == typeof t ? t : null),
                    (this.promise = n);
                }
                function l(e, t) {
                  var n = !1;
                  try {
                    e(
                      function (e) {
                        n || ((n = !0), a(t, e));
                      },
                      function (e) {
                        n || ((n = !0), u(t, e));
                      }
                    );
                  } catch (r) {
                    if (n) return;
                    (n = !0), u(t, r);
                  }
                }
                var e, n;
                (e = this),
                  (n = setTimeout),
                  (i.prototype["catch"] = function (e) {
                    return this.then(null, e);
                  }),
                  (i.prototype.then = function (e, t) {
                    var n = new this.constructor(r);
                    return o(this, new c(e, t, n)), n;
                  }),
                  (i.all = function (e) {
                    var s = Array.prototype.slice.call(e);
                    return new i(function (o, i) {
                      if (0 === s.length) return o([]);
                      var a = s.length;
                      function u(t, e) {
                        try {
                          if (
                            e &&
                            ("object" == typeof e || "function" == typeof e)
                          ) {
                            var n = e.then;
                            if ("function" == typeof n)
                              return void n.call(
                                e,
                                function (e) {
                                  u(t, e);
                                },
                                i
                              );
                          }
                          (s[t] = e), 0 == --a && o(s);
                        } catch (r) {
                          i(r);
                        }
                      }
                      for (var e = 0; e < s.length; e++) u(e, s[e]);
                    });
                  }),
                  (i.resolve = function (t) {
                    return t && "object" == typeof t && t.constructor === i
                      ? t
                      : new i(function (e) {
                          e(t);
                        });
                  }),
                  (i.reject = function (n) {
                    return new i(function (e, t) {
                      t(n);
                    });
                  }),
                  (i.race = function (o) {
                    return new i(function (e, t) {
                      for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t);
                    });
                  }),
                  (i._immediateFn =
                    "function" == typeof t
                      ? function (e) {
                          t(e);
                        }
                      : function (e) {
                          n(e, 0);
                        }),
                  (i._unhandledRejectionFn = function (e) {
                    "undefined" != typeof console &&
                      console &&
                      console.warn("Possible Unhandled Promise Rejection:", e);
                  }),
                  (i._setImmediateFn = function (e) {
                    i._immediateFn = e;
                  }),
                  (i._setUnhandledRejectionFn = function (e) {
                    i._unhandledRejectionFn = e;
                  }),
                  void 0 !== f && f.exports
                    ? (f.exports = i)
                    : e.Promise || (e.Promise = i);
              }.call(this, e("timers").setImmediate));
            },
            { timers: 3 },
          ],
          3: [
            function (s, e, c) {
              (function (e, t) {
                var r = s("process/browser.js").nextTick,
                  n = Function.prototype.apply,
                  o = Array.prototype.slice,
                  i = {},
                  a = 0;
                function u(e, t) {
                  (this._id = e), (this._clearFn = t);
                }
                (c.setTimeout = function () {
                  return new u(
                    n.call(setTimeout, window, arguments),
                    clearTimeout
                  );
                }),
                  (c.setInterval = function () {
                    return new u(
                      n.call(setInterval, window, arguments),
                      clearInterval
                    );
                  }),
                  (c.clearTimeout = c.clearInterval = function (e) {
                    e.close();
                  }),
                  (u.prototype.unref = u.prototype.ref = function () {}),
                  (u.prototype.close = function () {
                    this._clearFn.call(window, this._id);
                  }),
                  (c.enroll = function (e, t) {
                    clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
                  }),
                  (c.unenroll = function (e) {
                    clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                  }),
                  (c._unrefActive = c.active = function (e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    0 <= t &&
                      (e._idleTimeoutId = setTimeout(function () {
                        e._onTimeout && e._onTimeout();
                      }, t));
                  }),
                  (c.setImmediate =
                    "function" == typeof e
                      ? e
                      : function (e) {
                          var t = a++,
                            n = !(arguments.length < 2) && o.call(arguments, 1);
                          return (
                            (i[t] = !0),
                            r(function () {
                              i[t] &&
                                (n ? e.apply(null, n) : e.call(null),
                                c.clearImmediate(t));
                            }),
                            t
                          );
                        }),
                  (c.clearImmediate =
                    "function" == typeof t
                      ? t
                      : function (e) {
                          delete i[e];
                        });
              }.call(
                this,
                s("timers").setImmediate,
                s("timers").clearImmediate
              ));
            },
            { "process/browser.js": 1, timers: 3 },
          ],
          4: [
            function (e, t, n) {
              var r = e("promise-polyfill"),
                o =
                  "undefined" != typeof window
                    ? window
                    : Function("return this;")();
              t.exports = { boltExport: o.Promise || r };
            },
            { "promise-polyfill": 2 },
          ],
        },
        {},
        [4]
      )(4);
    });
  var Fi,
    Ui,
    zi,
    ji,
    Hi = Mi.exports.boltExport,
    Vi = function (e) {
      var n = B.none(),
        t = [],
        r = function (e) {
          o() ? a(e) : t.push(e);
        },
        o = function () {
          return n.isSome();
        },
        i = function (e) {
          z(e, a);
        },
        a = function (t) {
          n.each(function (e) {
            V.setTimeout(function () {
              t(e);
            }, 0);
          });
        };
      return (
        e(function (e) {
          o() || ((n = B.some(e)), i(t), (t = []));
        }),
        {
          get: r,
          map: function (n) {
            return Vi(function (t) {
              r(function (e) {
                t(n(e));
              });
            });
          },
          isReady: o,
        }
      );
    },
    qi = {
      nu: Vi,
      pure: function (t) {
        return Vi(function (e) {
          e(t);
        });
      },
    },
    $i = function (e) {
      V.setTimeout(function () {
        throw e;
      }, 0);
    },
    Wi = function (n) {
      var e = function (e) {
        n().then(e, $i);
      };
      return {
        map: function (e) {
          return Wi(function () {
            return n().then(e);
          });
        },
        bind: function (t) {
          return Wi(function () {
            return n().then(function (e) {
              return t(e).toPromise();
            });
          });
        },
        anonBind: function (e) {
          return Wi(function () {
            return n().then(function () {
              return e.toPromise();
            });
          });
        },
        toLazy: function () {
          return qi.nu(e);
        },
        toCached: function () {
          var e = null;
          return Wi(function () {
            return null === e && (e = n()), e;
          });
        },
        toPromise: n,
        get: e,
      };
    },
    Ki = function (e) {
      return Wi(function () {
        return new Hi(e);
      });
    },
    Xi = function (a, e) {
      return e(function (r) {
        var o = [],
          i = 0;
        0 === a.length
          ? r([])
          : z(a, function (e, t) {
              var n;
              e.get(
                ((n = t),
                function (e) {
                  (o[n] = e), ++i >= a.length && r(o);
                })
              );
            });
      });
    },
    Yi = function (n) {
      return {
        is: function (e) {
          return n === e;
        },
        isValue: h,
        isError: g,
        getOr: x(n),
        getOrThunk: x(n),
        getOrDie: x(n),
        or: function (e) {
          return Yi(n);
        },
        orThunk: function (e) {
          return Yi(n);
        },
        fold: function (e, t) {
          return t(n);
        },
        map: function (e) {
          return Yi(e(n));
        },
        mapError: function (e) {
          return Yi(n);
        },
        each: function (e) {
          e(n);
        },
        bind: function (e) {
          return e(n);
        },
        exists: function (e) {
          return e(n);
        },
        forall: function (e) {
          return e(n);
        },
        toOption: function () {
          return B.some(n);
        },
      };
    },
    Gi = function (n) {
      return {
        is: g,
        isValue: g,
        isError: h,
        getOr: o,
        getOrThunk: function (e) {
          return e();
        },
        getOrDie: function () {
          return p(String(n))();
        },
        or: function (e) {
          return e;
        },
        orThunk: function (e) {
          return e();
        },
        fold: function (e, t) {
          return e(n);
        },
        map: function (e) {
          return Gi(n);
        },
        mapError: function (e) {
          return Gi(e(n));
        },
        each: f,
        bind: function (e) {
          return Gi(n);
        },
        exists: g,
        forall: h,
        toOption: B.none,
      };
    },
    Ji = {
      value: Yi,
      error: Gi,
      fromOption: function (e, t) {
        return e.fold(function () {
          return Gi(t);
        }, Yi);
      },
    },
    Qi = function (a) {
      if (!k(a)) throw new Error("cases must be an array");
      if (0 === a.length) throw new Error("there must be at least one case");
      var u = [],
        n = {};
      return (
        z(a, function (e, r) {
          var t = ne(e);
          if (1 !== t.length) throw new Error("one and only one name per case");
          var o = t[0],
            i = e[o];
          if (n[o] !== undefined)
            throw new Error("duplicate key detected:" + o);
          if ("cata" === o)
            throw new Error("cannot have a case named cata (sorry)");
          if (!k(i)) throw new Error("case arguments must be an array");
          u.push(o),
            (n[o] = function () {
              var e = arguments.length;
              if (e !== i.length)
                throw new Error(
                  "Wrong number of arguments to case " +
                    o +
                    ". Expected " +
                    i.length +
                    " (" +
                    i +
                    "), got " +
                    e
                );
              for (var n = new Array(e), t = 0; t < n.length; t++)
                n[t] = arguments[t];
              return {
                fold: function () {
                  if (arguments.length !== a.length)
                    throw new Error(
                      "Wrong number of arguments to fold. Expected " +
                        a.length +
                        ", got " +
                        arguments.length
                    );
                  return arguments[r].apply(null, n);
                },
                match: function (e) {
                  var t = ne(e);
                  if (u.length !== t.length)
                    throw new Error(
                      "Wrong number of arguments to match. Expected: " +
                        u.join(",") +
                        "\nActual: " +
                        t.join(",")
                    );
                  if (
                    !G(u, function (e) {
                      return M(t, e);
                    })
                  )
                    throw new Error(
                      "Not all branches were specified when using match. Specified: " +
                        t.join(", ") +
                        "\nRequired: " +
                        u.join(", ")
                    );
                  return e[o].apply(null, n);
                },
                log: function (e) {
                  V.console.log(e, {
                    constructors: u,
                    constructor: o,
                    params: n,
                  });
                },
              };
            });
        }),
        n
      );
    },
    Zi =
      (Qi([
        { bothErrors: ["error1", "error2"] },
        { firstError: ["error1", "value2"] },
        { secondError: ["value1", "error2"] },
        { bothValues: ["value1", "value2"] },
      ]),
      function (e) {
        return e.fold(o, o);
      }),
    ea = window.Promise
      ? window.Promise
      : ((Fi =
          Array.isArray ||
          function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          }),
        (zi =
          (Ui = function (e) {
            if ("object" != typeof this)
              throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            (this._state = null),
              (this._value = null),
              (this._deferreds = []),
              ua(e, ta(ra, this), ta(oa, this));
          }).immediateFn ||
          ("function" == typeof V.setImmediate && V.setImmediate) ||
          function (e) {
            V.setTimeout(e, 1);
          }),
        (Ui.prototype["catch"] = function (e) {
          return this.then(null, e);
        }),
        (Ui.prototype.then = function (n, r) {
          var o = this;
          return new Ui(function (e, t) {
            na.call(o, new aa(n, r, e, t));
          });
        }),
        (Ui.all = function () {
          var s = Array.prototype.slice.call(
            1 === arguments.length && Fi(arguments[0])
              ? arguments[0]
              : arguments
          );
          return new Ui(function (o, i) {
            if (0 === s.length) return o([]);
            var a = s.length;
            function u(t, e) {
              try {
                if (e && ("object" == typeof e || "function" == typeof e)) {
                  var n = e.then;
                  if ("function" == typeof n)
                    return void n.call(
                      e,
                      function (e) {
                        u(t, e);
                      },
                      i
                    );
                }
                (s[t] = e), 0 == --a && o(s);
              } catch (r) {
                i(r);
              }
            }
            for (var e = 0; e < s.length; e++) u(e, s[e]);
          });
        }),
        (Ui.resolve = function (t) {
          return t && "object" == typeof t && t.constructor === Ui
            ? t
            : new Ui(function (e) {
                e(t);
              });
        }),
        (Ui.reject = function (n) {
          return new Ui(function (e, t) {
            t(n);
          });
        }),
        (Ui.race = function (o) {
          return new Ui(function (e, t) {
            for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t);
          });
        }),
        Ui);
  function ta(e, t) {
    return function () {
      e.apply(t, arguments);
    };
  }
  function na(n) {
    var r = this;
    null !== this._state
      ? zi(function () {
          var e = r._state ? n.onFulfilled : n.onRejected;
          if (null !== e) {
            var t;
            try {
              t = e(r._value);
            } catch (LE) {
              return void n.reject(LE);
            }
            n.resolve(t);
          } else (r._state ? n.resolve : n.reject)(r._value);
        })
      : this._deferreds.push(n);
  }
  function ra(e) {
    try {
      if (e === this)
        throw new TypeError("A promise cannot be resolved with itself.");
      if (e && ("object" == typeof e || "function" == typeof e)) {
        var t = e.then;
        if ("function" == typeof t)
          return void ua(ta(t, e), ta(ra, this), ta(oa, this));
      }
      (this._state = !0), (this._value = e), ia.call(this);
    } catch (LE) {
      oa.call(this, LE);
    }
  }
  function oa(e) {
    (this._state = !1), (this._value = e), ia.call(this);
  }
  function ia() {
    for (var e = 0, t = this._deferreds.length; e < t; e++)
      na.call(this, this._deferreds[e]);
    this._deferreds = null;
  }
  function aa(e, t, n, r) {
    (this.onFulfilled = "function" == typeof e ? e : null),
      (this.onRejected = "function" == typeof t ? t : null),
      (this.resolve = n),
      (this.reject = r);
  }
  function ua(e, t, n) {
    var r = !1;
    try {
      e(
        function (e) {
          r || ((r = !0), t(e));
        },
        function (e) {
          r || ((r = !0), n(e));
        }
      );
    } catch (o) {
      if (r) return;
      (r = !0), n(o);
    }
  }
  var sa = function (e, t) {
      return "number" != typeof t && (t = 0), V.setTimeout(e, t);
    },
    ca = function (e, t) {
      return "number" != typeof t && (t = 1), V.setInterval(e, t);
    },
    la = function (n, r) {
      var o,
        e = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          V.clearTimeout(o),
            (o = sa(function () {
              n.apply(this, e);
            }, r));
        };
      return (
        (e.stop = function () {
          V.clearTimeout(o);
        }),
        e
      );
    },
    fa = {
      requestAnimationFrame: function (e, t) {
        ji
          ? ji.then(e)
          : (ji = new ea(function (e) {
              !(function (e, t) {
                var n,
                  r = V.window.requestAnimationFrame,
                  o = ["ms", "moz", "webkit"];
                for (n = 0; n < o.length && !r; n++)
                  r = V.window[o[n] + "RequestAnimationFrame"];
                (r =
                  r ||
                  function (e) {
                    V.window.setTimeout(e, 0);
                  })(e, t);
              })(e, (t = t || V.document.body));
            }).then(e));
      },
      setTimeout: sa,
      setInterval: ca,
      setEditorTimeout: function (e, t, n) {
        return sa(function () {
          e.removed || t();
        }, n);
      },
      setEditorInterval: function (e, t, n) {
        var r = ca(function () {
          e.removed ? V.clearInterval(r) : t();
        }, n);
        return r;
      },
      debounce: la,
      throttle: la,
      clearInterval: function (e) {
        return V.clearInterval(e);
      },
      clearTimeout: function (e) {
        return V.clearTimeout(e);
      },
    };
  function da(p, g) {
    void 0 === g && (g = {});
    var h = 0,
      v = {},
      t = Ct.fromDom(p),
      y = Lt(t),
      b = g.maxLoadTime || 5e3,
      C = function (e) {
        Zt(Xt(t), e);
      },
      n = function (e, t, n) {
        var o,
          r,
          i,
          a = function (e) {
            (i.status = e),
              (i.passed = []),
              (i.failed = []),
              o && ((o.onload = null), (o.onerror = null), (o = null));
          },
          u = function () {
            for (var e = i.passed, t = e.length; t--; ) e[t]();
            a(2);
          },
          s = function () {
            for (var e = i.failed, t = e.length; t--; ) e[t]();
            a(3);
          },
          c = function (e, t) {
            e() || (new Date().getTime() - m < b ? fa.setTimeout(t) : s());
          },
          l = function () {
            c(function () {
              for (var e, t, n = p.styleSheets, r = n.length; r--; )
                if (
                  (t = (e = n[r]).ownerNode ? e.ownerNode : e.owningElement) &&
                  t.id === o.id
                )
                  return u(), 1;
            }, l);
          },
          f = function () {
            c(function () {
              try {
                var e = r.sheet.cssRules;
                return u(), e;
              } catch (t) {}
            }, f);
          };
        if (
          ((e = yt._addCacheSuffix(e)),
          v[e] ? (i = v[e]) : ((i = { passed: [], failed: [] }), (v[e] = i)),
          t && i.passed.push(t),
          n && i.failed.push(n),
          1 !== i.status)
        )
          if (2 !== i.status)
            if (3 !== i.status) {
              (i.status = 1),
                ((o = y.dom().createElement("link")).rel = "stylesheet"),
                (o.type = "text/css"),
                (o.id = "u" + h++),
                (o.async = !1),
                (o.defer = !1);
              var d,
                m = new Date().getTime();
              if (
                (g.contentCssCors && (o.crossOrigin = "anonymous"),
                g.referrerPolicy &&
                  Pn(Ct.fromDom(o), "referrerpolicy", g.referrerPolicy),
                "onload" in o &&
                  !(
                    (d = V.navigator.userAgent.match(/WebKit\/(\d*)/)) &&
                    parseInt(d[1], 10) < 536
                  ))
              )
                (o.onload = l), (o.onerror = s);
              else {
                if (0 < V.navigator.userAgent.indexOf("Firefox"))
                  return (
                    ((r = y.dom().createElement("style")).textContent =
                      '@import "' + e + '"'),
                    f(),
                    void C(Ct.fromDom(r))
                  );
                l();
              }
              C(Ct.fromDom(o)), (o.href = e);
            } else s();
          else u();
      },
      o = function (t) {
        return Ki(function (e) {
          n(t, a(e, x(Ji.value(t))), a(e, x(Ji.error(t))));
        });
      };
    return {
      load: n,
      loadAll: function (e, n, r) {
        var t;
        (t = U(e, o)),
          Xi(t, Ki).get(function (e) {
            var t = (function (e, t) {
              for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                var a = e[o];
                (t(a, o) ? n : r).push(a);
              }
              return { pass: n, fail: r };
            })(e, function (e) {
              return e.isValue();
            });
            0 < t.fail.length ? r(t.fail.map(Zi)) : n(t.pass.map(Zi));
          });
      },
      _setReferrerPolicy: function (e) {
        g.referrerPolicy = e;
      },
    };
  }
  var ma,
    pa,
    ga =
      ((ma = new WeakMap()),
      {
        forElement: function (e, t) {
          var n = Kt(e).dom();
          return B.from(ma.get(n)).getOrThunk(function () {
            var e = da(n, t);
            return ma.set(n, e), e;
          });
        },
      }),
    ha = yt.each,
    va = yt.grep,
    ya = mt.ie,
    ba = /^([a-z0-9],?)+$/i,
    Ca = /^[ \t\r\n]*$/,
    wa = function (n, r, o) {
      var i = r.keep_values,
        e = {
          set: function (e, t, n) {
            r.url_converter &&
              (t = r.url_converter.call(
                r.url_converter_scope || o(),
                t,
                n,
                e[0]
              )),
              e.attr("data-mce-" + n, t).attr(n, t);
          },
          get: function (e, t) {
            return e.attr("data-mce-" + t) || e.attr(t);
          },
        },
        t = {
          style: {
            set: function (e, t) {
              null === t || "object" != typeof t
                ? (i && e.attr("data-mce-style", t),
                  null !== t && "string" == typeof t
                    ? (e.removeAttr("style"), e.css(n.parse(t)))
                    : e.attr("style", t))
                : e.css(t);
            },
            get: function (e) {
              var t = e.attr("data-mce-style") || e.attr("style");
              return (t = n.serialize(n.parse(t), e[0].nodeName));
            },
          },
        };
      return i && (t.href = t.src = e), t;
    },
    xa = function (e, t) {
      var n = t.attr("style"),
        r = e.serialize(e.parse(n), t[0].nodeName);
      (r = r || null), t.attr("data-mce-style", r);
    },
    Sa = function (e, t) {
      var n,
        r,
        o = 0;
      if (e)
        for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling)
          (r = e.nodeType),
            (!t || 3 !== r || (r !== n && e.nodeValue.length)) &&
              (o++, (n = r));
      return o;
    };
  function Na(a, u) {
    var s = this;
    void 0 === u && (u = {});
    var r = {},
      c = V.window,
      o = {},
      t = 0,
      e = ga.forElement(Ct.fromDom(a), {
        contentCssCors: u.contentCssCors,
        referrerPolicy: u.referrerPolicy,
      }),
      l = [],
      f = u.schema ? u.schema : Rr({}),
      i = Br(
        {
          url_converter: u.url_converter,
          url_converter_scope: u.url_converter_scope,
        },
        u.schema
      ),
      d = u.ownEvents ? new Hr() : Hr.Event,
      n = f.getBlockElements(),
      m = Ri.overrideDefaults(function () {
        return { context: a, element: j.getRoot() };
      }),
      p = function (e) {
        return e && a && q(e) ? a.getElementById(e) : e;
      },
      g = function (e) {
        return m("string" == typeof e ? p(e) : e);
      },
      h = function (e, t, n) {
        var r,
          o,
          i = g(e);
        return (
          i.length && (o = (r = H[t]) && r.get ? r.get(i, t) : i.attr(t)),
          void 0 === o && (o = n || ""),
          o
        );
      },
      v = function (e) {
        var t = p(e);
        return t ? t.attributes : [];
      },
      y = function (e, t, n) {
        "" === n && (n = null);
        var r = g(e),
          o = r.attr(t);
        if (r.length) {
          var i = H[t];
          i && i.set ? i.set(r, n, t) : r.attr(t, n),
            o !== n &&
              u.onSetAttrib &&
              u.onSetAttrib({ attrElm: r, attrName: t, attrValue: n });
        }
      },
      b = function () {
        return u.root_element || a.body;
      },
      C = function (e, t) {
        return qn(a.body, p(e), t);
      },
      w = function (e, t, n) {
        var r = g(e);
        return n
          ? r.css(t)
          : ("float" ===
              (t = t.replace(/-(\D)/g, function (e, t) {
                return t.toUpperCase();
              })) && (t = mt.browser.isIE() ? "styleFloat" : "cssFloat"),
            r[0] && r[0].style ? r[0].style[t] : undefined);
      },
      x = function (e) {
        var t, n;
        return (
          (e = p(e)),
          (t = w(e, "width")),
          (n = w(e, "height")),
          -1 === t.indexOf("px") && (t = 0),
          -1 === n.indexOf("px") && (n = 0),
          {
            w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
            h: parseInt(n, 10) || e.offsetHeight || e.clientHeight,
          }
        );
      },
      S = function (e, t) {
        var n;
        if (!e) return !1;
        if (!Array.isArray(e)) {
          if ("*" === t) return 1 === e.nodeType;
          if (ba.test(t)) {
            var r = t.toLowerCase().split(/,/),
              o = e.nodeName.toLowerCase();
            for (n = r.length - 1; 0 <= n; n--) if (r[n] === o) return !0;
            return !1;
          }
          if (e.nodeType && 1 !== e.nodeType) return !1;
        }
        var i = Array.isArray(e) ? e : [e];
        return 0 < Vo(t, i[0].ownerDocument || i[0], null, i).length;
      },
      N = function (e, t, n, r) {
        var o,
          i = [],
          a = p(e);
        for (
          r = r === undefined,
            n = n || ("BODY" !== b().nodeName ? b().parentNode : null),
            yt.is(t, "string") &&
              (t =
                "*" === (o = t)
                  ? function (e) {
                      return 1 === e.nodeType;
                    }
                  : function (e) {
                      return S(e, o);
                    });
          a && a !== n && a.nodeType && 9 !== a.nodeType;

        ) {
          if (!t || ("function" == typeof t && t(a))) {
            if (!r) return [a];
            i.push(a);
          }
          a = a.parentNode;
        }
        return r ? i : null;
      },
      E = function (e, t, n) {
        var r = t;
        if (e)
          for (
            "string" == typeof t &&
              (r = function (e) {
                return S(e, t);
              }),
              e = e[n];
            e;
            e = e[n]
          )
            if ("function" == typeof r && r(e)) return e;
        return null;
      },
      k = function (e, n, r) {
        var o,
          t = "string" == typeof e ? p(e) : e;
        if (!t) return !1;
        if (yt.isArray(t) && (t.length || 0 === t.length))
          return (
            (o = []),
            ha(t, function (e, t) {
              e &&
                ("string" == typeof e && (e = p(e)), o.push(n.call(r, e, t)));
            }),
            o
          );
        var i = r || s;
        return n.call(i, t);
      },
      _ = function (e, t) {
        g(e).each(function (e, n) {
          ha(t, function (e, t) {
            y(n, t, e);
          });
        });
      },
      T = function (e, r) {
        var t = g(e);
        ya
          ? t.each(function (e, t) {
              if (!1 !== t.canHaveHTML) {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                try {
                  (t.innerHTML = "<br>" + r), t.removeChild(t.firstChild);
                } catch (n) {
                  Ri("<div></div>")
                    .html("<br>" + r)
                    .contents()
                    .slice(1)
                    .appendTo(t);
                }
                return r;
              }
            })
          : t.html(r);
      },
      R = function (e, n, r, o, i) {
        return k(e, function (e) {
          var t = "string" == typeof n ? a.createElement(n) : n;
          return (
            _(t, r),
            o &&
              ("string" != typeof o && o.nodeType
                ? t.appendChild(o)
                : "string" == typeof o && T(t, o)),
            i ? t : e.appendChild(t)
          );
        });
      },
      A = function (e, t, n) {
        return R(a.createElement(e), e, t, n, !0);
      },
      D = yr.decode,
      O = yr.encodeAllRaw,
      B = function (e, t) {
        var n = g(e);
        return (
          t
            ? n
                .each(function () {
                  for (var e; (e = this.firstChild); )
                    3 === e.nodeType && 0 === e.data.length
                      ? this.removeChild(e)
                      : this.parentNode.insertBefore(e, this);
                })
                .remove()
            : n.remove(),
          1 < n.length ? n.toArray() : n[0]
        );
      },
      P = function (e, t, n) {
        g(e)
          .toggleClass(t, n)
          .each(function () {
            "" === this.className && Ri(this).attr("class", null);
          });
      },
      L = function (t, e, n) {
        return k(e, function (e) {
          return (
            yt.is(e, "array") && (t = t.cloneNode(!0)),
            n &&
              ha(va(e.childNodes), function (e) {
                t.appendChild(e);
              }),
            e.parentNode.replaceChild(t, e)
          );
        });
      },
      I = function (e) {
        if (vn(e)) {
          var t =
            "a" === e.nodeName.toLowerCase() && !h(e, "href") && h(e, "id");
          if (h(e, "name") || h(e, "data-mce-bookmark") || t) return !0;
        }
        return !1;
      },
      M = function () {
        return a.createRange();
      },
      F = function (e, t, n, r) {
        if (yt.isArray(e)) {
          for (var o = e.length, i = []; o--; ) i[o] = F(e[o], t, n, r);
          return i;
        }
        return (
          !u.collect || (e !== a && e !== c) || l.push([e, t, n, r]),
          d.bind(e, t, n, r || j)
        );
      },
      U = function (e, t, n) {
        var r;
        if (yt.isArray(e)) {
          r = e.length;
          for (var o = []; r--; ) o[r] = U(e[r], t, n);
          return o;
        }
        if (0 < l.length && (e === a || e === c))
          for (r = l.length; r--; ) {
            var i = l[r];
            e !== i[0] ||
              (t && t !== i[1]) ||
              (n && n !== i[2]) ||
              d.unbind(i[0], i[1], i[2]);
          }
        return d.unbind(e, t, n);
      },
      z = function (e) {
        if (e && vn(e)) {
          var t = e.getAttribute("data-mce-contenteditable");
          return t && "inherit" !== t
            ? t
            : "inherit" !== e.contentEditable
            ? e.contentEditable
            : null;
        }
        return null;
      },
      j = {
        doc: a,
        settings: u,
        win: c,
        files: o,
        stdMode: !0,
        boxModel: !0,
        styleSheetLoader: e,
        boundEvents: l,
        styles: i,
        schema: f,
        events: d,
        isBlock: function (e) {
          if ("string" == typeof e) return !!n[e];
          if (e) {
            var t = e.nodeType;
            if (t) return !(1 !== t || !n[e.nodeName]);
          }
          return !1;
        },
        $: m,
        $$: g,
        root: null,
        clone: function (t, e) {
          if (!ya || 1 !== t.nodeType || e) return t.cloneNode(e);
          var n = a.createElement(t.nodeName);
          return (
            ha(v(t), function (e) {
              y(n, e.nodeName, h(t, e.nodeName));
            }),
            n
          );
        },
        getRoot: b,
        getViewPort: function (e) {
          var t = pn(e);
          return { x: t.x, y: t.y, w: t.width, h: t.height };
        },
        getRect: function (e) {
          e = p(e);
          var t = C(e),
            n = x(e);
          return { x: t.x, y: t.y, w: n.w, h: n.h };
        },
        getSize: x,
        getParent: function (e, t, n) {
          var r = N(e, t, n, !1);
          return r && 0 < r.length ? r[0] : null;
        },
        getParents: N,
        get: p,
        getNext: function (e, t) {
          return E(e, t, "nextSibling");
        },
        getPrev: function (e, t) {
          return E(e, t, "previousSibling");
        },
        select: function (e, t) {
          return Vo(e, p(t) || u.root_element || a, []);
        },
        is: S,
        add: R,
        create: A,
        createHTML: function (e, t, n) {
          var r,
            o = "";
          for (r in ((o += "<" + e), t))
            t.hasOwnProperty(r) &&
              null !== t[r] &&
              "undefined" != typeof t[r] &&
              (o += " " + r + '="' + O(t[r]) + '"');
          return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />";
        },
        createFragment: function (e) {
          var t,
            n = a.createElement("div"),
            r = a.createDocumentFragment();
          for (r.appendChild(n), e && (n.innerHTML = e); (t = n.firstChild); )
            r.appendChild(t);
          return r.removeChild(n), r;
        },
        remove: B,
        setStyle: function (e, t, n) {
          var r = q(t) ? g(e).css(t, n) : g(e).css(t);
          u.update_styles && xa(i, r);
        },
        getStyle: w,
        setStyles: function (e, t) {
          var n = g(e).css(t);
          u.update_styles && xa(i, n);
        },
        removeAllAttribs: function (e) {
          return k(e, function (e) {
            var t,
              n = e.attributes;
            for (t = n.length - 1; 0 <= t; t--)
              e.removeAttributeNode(n.item(t));
          });
        },
        setAttrib: y,
        setAttribs: _,
        getAttrib: h,
        getPos: C,
        parseStyle: function (e) {
          return i.parse(e);
        },
        serializeStyle: function (e, t) {
          return i.serialize(e, t);
        },
        addStyle: function (e) {
          var t, n;
          if (j !== Na.DOM && a === V.document) {
            if (r[e]) return;
            r[e] = !0;
          }
          (n = a.getElementById("mceDefaultStyles")) ||
            (((n = a.createElement("style")).id = "mceDefaultStyles"),
            (n.type = "text/css"),
            (t = a.getElementsByTagName("head")[0]).firstChild
              ? t.insertBefore(n, t.firstChild)
              : t.appendChild(n)),
            n.styleSheet
              ? (n.styleSheet.cssText += e)
              : n.appendChild(a.createTextNode(e));
        },
        loadCSS: function (e) {
          if (j === Na.DOM || a !== V.document) {
            e = e || "";
            var n = a.getElementsByTagName("head")[0];
            ha(e.split(","), function (e) {
              if (((e = yt._addCacheSuffix(e)), !o[e])) {
                o[e] = !0;
                var t = A(
                  "link",
                  xe(
                    xe(
                      { rel: "stylesheet", type: "text/css", href: e },
                      u.contentCssCors ? { crossOrigin: "anonymous" } : {}
                    ),
                    u.referrerPolicy ? { referrerPolicy: u.referrerPolicy } : {}
                  )
                );
                n.appendChild(t);
              }
            });
          } else Na.DOM.loadCSS(e);
        },
        addClass: function (e, t) {
          g(e).addClass(t);
        },
        removeClass: function (e, t) {
          P(e, t, !1);
        },
        hasClass: function (e, t) {
          return g(e).hasClass(t);
        },
        toggleClass: P,
        show: function (e) {
          g(e).show();
        },
        hide: function (e) {
          g(e).hide();
        },
        isHidden: function (e) {
          return "none" === g(e).css("display");
        },
        uniqueId: function (e) {
          return (e || "mce_") + t++;
        },
        setHTML: T,
        getOuterHTML: function (e) {
          var t = "string" == typeof e ? p(e) : e;
          return vn(t)
            ? t.outerHTML
            : Ri("<div></div>").append(Ri(t).clone()).html();
        },
        setOuterHTML: function (e, t) {
          g(e).each(function () {
            try {
              if ("outerHTML" in this) return void (this.outerHTML = t);
            } catch (e) {}
            B(Ri(this).html(t), !0);
          });
        },
        decode: D,
        encode: O,
        insertAfter: function (e, t) {
          var r = p(t);
          return k(e, function (e) {
            var t = r.parentNode,
              n = r.nextSibling;
            return n ? t.insertBefore(e, n) : t.appendChild(e), e;
          });
        },
        replace: L,
        rename: function (t, e) {
          var n;
          return (
            t.nodeName !== e.toUpperCase() &&
              ((n = A(e)),
              ha(v(t), function (e) {
                y(n, e.nodeName, h(t, e.nodeName));
              }),
              L(n, t, !0)),
            n || t
          );
        },
        findCommonAncestor: function (e, t) {
          for (var n, r = e; r; ) {
            for (n = t; n && r !== n; ) n = n.parentNode;
            if (r === n) break;
            r = r.parentNode;
          }
          return !r && e.ownerDocument ? e.ownerDocument.documentElement : r;
        },
        toHex: function (e) {
          return i.toHex(yt.trim(e));
        },
        run: k,
        getAttribs: v,
        isEmpty: function (e, t) {
          var n,
            r,
            o = 0;
          if (I(e)) return !1;
          if ((e = e.firstChild)) {
            var i = new Ai(e, e.parentNode),
              a = f ? f.getWhiteSpaceElements() : {};
            t = t || (f ? f.getNonEmptyElements() : null);
            do {
              if (((n = e.nodeType), vn(e))) {
                var u = e.getAttribute("data-mce-bogus");
                if (u) {
                  e = i.next("all" === u);
                  continue;
                }
                if (((r = e.nodeName.toLowerCase()), t && t[r])) {
                  if ("br" !== r) return !1;
                  o++, (e = i.next());
                  continue;
                }
                if (I(e)) return !1;
              }
              if (8 === n) return !1;
              if (3 === n && !Ca.test(e.nodeValue)) return !1;
              if (
                3 === n &&
                e.parentNode &&
                a[e.parentNode.nodeName] &&
                Ca.test(e.nodeValue)
              )
                return !1;
              e = i.next();
            } while (e);
          }
          return o <= 1;
        },
        createRng: M,
        nodeIndex: Sa,
        split: function (e, t, n) {
          var r,
            o,
            i,
            a = M();
          if (e && t)
            return (
              a.setStart(e.parentNode, Sa(e)),
              a.setEnd(t.parentNode, Sa(t)),
              (r = a.extractContents()),
              (a = M()).setStart(t.parentNode, Sa(t) + 1),
              a.setEnd(e.parentNode, Sa(e) + 1),
              (o = a.extractContents()),
              (i = e.parentNode).insertBefore(or(j, r), e),
              n ? i.insertBefore(n, e) : i.insertBefore(t, e),
              i.insertBefore(or(j, o), e),
              B(e),
              n || t
            );
        },
        bind: F,
        unbind: U,
        fire: function (e, t, n) {
          return d.fire(e, t, n);
        },
        getContentEditable: z,
        getContentEditableParent: function (e) {
          for (
            var t = b(), n = null;
            e && e !== t && null === (n = z(e));
            e = e.parentNode
          );
          return n;
        },
        destroy: function () {
          if (0 < l.length)
            for (var e = l.length; e--; ) {
              var t = l[e];
              d.unbind(t[0], t[1], t[2]);
            }
          Vo.setDocument && Vo.setDocument();
        },
        isChildOf: function (e, t) {
          for (; e; ) {
            if (t === e) return !0;
            e = e.parentNode;
          }
          return !1;
        },
        dumpRng: function (e) {
          return (
            "startContainer: " +
            e.startContainer.nodeName +
            ", startOffset: " +
            e.startOffset +
            ", endContainer: " +
            e.endContainer.nodeName +
            ", endOffset: " +
            e.endOffset
          );
        },
      },
      H = wa(i, u, function () {
        return j;
      });
    return j;
  }
  ((pa = Na = Na || {}).DOM = pa(V.document)), (pa.nodeIndex = Sa);
  var Ea = Na,
    ka = Ea.DOM,
    _a = yt.each,
    Ta = yt.grep,
    Ra =
      ((Aa.prototype._setReferrerPolicy = function (e) {
        this.settings.referrerPolicy = e;
      }),
      (Aa.prototype.loadScript = function (e, t, n) {
        var r,
          o = ka,
          i = o.uniqueId();
        ((r = V.document.createElement("script")).id = i),
          (r.type = "text/javascript"),
          (r.src = yt._addCacheSuffix(e)),
          this.settings.referrerPolicy &&
            o.setAttrib(r, "referrerpolicy", this.settings.referrerPolicy),
          (r.onload = function () {
            o.remove(i), r && (r.onreadystatechange = r.onload = r = null), t();
          }),
          (r.onerror = function () {
            A(n)
              ? n()
              : "undefined" != typeof V.console &&
                V.console.log &&
                V.console.log("Failed to load script: " + e);
          }),
          (
            V.document.getElementsByTagName("head")[0] || V.document.body
          ).appendChild(r);
      }),
      (Aa.prototype.isDone = function (e) {
        return 2 === this.states[e];
      }),
      (Aa.prototype.markDone = function (e) {
        this.states[e] = 2;
      }),
      (Aa.prototype.add = function (e, t, n, r) {
        this.states[e] === undefined &&
          (this.queue.push(e), (this.states[e] = 0)),
          t &&
            (this.scriptLoadedCallbacks[e] ||
              (this.scriptLoadedCallbacks[e] = []),
            this.scriptLoadedCallbacks[e].push({
              success: t,
              failure: r,
              scope: n || this,
            }));
      }),
      (Aa.prototype.load = function (e, t, n, r) {
        return this.add(e, t, n, r);
      }),
      (Aa.prototype.remove = function (e) {
        delete this.states[e], delete this.scriptLoadedCallbacks[e];
      }),
      (Aa.prototype.loadQueue = function (e, t, n) {
        this.loadScripts(this.queue, e, t, n);
      }),
      (Aa.prototype.loadScripts = function (n, e, t, r) {
        var o = this,
          i = [],
          a = function (t, e) {
            _a(o.scriptLoadedCallbacks[e], function (e) {
              A(e[t]) && e[t].call(e.scope);
            }),
              (o.scriptLoadedCallbacks[e] = undefined);
          };
        o.queueLoadedCallbacks.push({
          success: e,
          failure: r,
          scope: t || this,
        });
        var u = function () {
          var e = Ta(n);
          if (
            ((n.length = 0),
            _a(e, function (e) {
              2 !== o.states[e]
                ? 3 !== o.states[e]
                  ? 1 !== o.states[e] &&
                    ((o.states[e] = 1),
                    o.loading++,
                    o.loadScript(
                      e,
                      function () {
                        (o.states[e] = 2), o.loading--, a("success", e), u();
                      },
                      function () {
                        (o.states[e] = 3),
                          o.loading--,
                          i.push(e),
                          a("failure", e),
                          u();
                      }
                    ))
                  : a("failure", e)
                : a("success", e);
            }),
            !o.loading)
          ) {
            var t = o.queueLoadedCallbacks.slice(0);
            (o.queueLoadedCallbacks.length = 0),
              _a(t, function (e) {
                0 === i.length
                  ? A(e.success) && e.success.call(e.scope)
                  : A(e.failure) && e.failure.call(e.scope, i);
              });
          }
        };
        u();
      }),
      (Aa.ScriptLoader = new Aa()),
      Aa);
  function Aa(e) {
    void 0 === e && (e = {}),
      (this.states = {}),
      (this.queue = []),
      (this.scriptLoadedCallbacks = {}),
      (this.queueLoadedCallbacks = []),
      (this.loading = 0),
      (this.settings = e);
  }
  var Da,
    Oa = function (e) {
      var t = e;
      return {
        get: function () {
          return t;
        },
        set: function (e) {
          t = e;
        },
      };
    },
    Ba = {},
    Pa = Oa("en"),
    La = function () {
      return de(Ba, Pa.get());
    },
    Ia = {
      getData: function () {
        return ie(Ba, function (e) {
          return xe({}, e);
        });
      },
      setCode: function (e) {
        e && Pa.set(e);
      },
      getCode: function () {
        return Pa.get();
      },
      add: function (e, t) {
        var n = Ba[e];
        n || (Ba[e] = n = {}),
          oe(t, function (e, t) {
            n[t.toLowerCase()] = e;
          });
      },
      translate: function (e) {
        var t,
          n,
          r = La().getOr({}),
          o = function (e) {
            return A(e)
              ? Object.prototype.toString.call(e)
              : i(e)
              ? ""
              : "" + e;
          },
          i = function (e) {
            return "" === e || null === e || e === undefined;
          },
          a = function (e) {
            var t = o(e);
            return de(r, t.toLowerCase()).map(o).getOr(t);
          },
          u = function (e) {
            return e.replace(/{context:\w+}$/, "");
          };
        if (i(e)) return "";
        if (E((t = e)) && me(t, "raw")) return o(e.raw);
        if (k((n = e)) && 1 < n.length) {
          var s = e.slice(1);
          return u(
            a(e[0]).replace(/\{([0-9]+)\}/g, function (e, t) {
              return me(s, t) ? o(s[t]) : e;
            })
          );
        }
        return u(a(e));
      },
      isRtl: function () {
        return La()
          .bind(function (e) {
            return de(e, "_dir");
          })
          .exists(function (e) {
            return "rtl" === e;
          });
      },
      hasCode: function (e) {
        return me(Ba, e);
      },
    };
  function Ma() {
    var r = this,
      o = [],
      s = {},
      c = {},
      i = [],
      l = function (t, n) {
        var e = H(i, function (e) {
          return e.name === t && e.state === n;
        });
        z(e, function (e) {
          return e.callback();
        });
      },
      f = function (e) {
        var t;
        return c[e] && (t = c[e].dependencies), t || [];
      },
      d = function (e, t) {
        return "object" == typeof t
          ? t
          : "string" == typeof e
          ? { prefix: "", resource: t, suffix: "" }
          : { prefix: e.prefix, resource: t, suffix: e.suffix };
      },
      m = function (o, i, a, u, e) {
        if (!s[o]) {
          var t = "string" == typeof i ? i : i.prefix + i.resource + i.suffix;
          0 !== t.indexOf("/") &&
            -1 === t.indexOf("://") &&
            (t = Ma.baseURL + "/" + t),
            (s[o] = t.substring(0, t.lastIndexOf("/")));
          var n = function () {
            var n, e, t, r;
            l(o, "loaded"),
              (n = i),
              (e = a),
              (t = u),
              (r = f(o)),
              z(r, function (e) {
                var t = d(n, e);
                m(t.resource, t, undefined, undefined);
              }),
              e && (t ? e.call(t) : e.call(Ra));
          };
          c[o] ? n() : Ra.ScriptLoader.add(t, n, u, e);
        }
      },
      e = function (e, t, n) {
        void 0 === n && (n = "added"),
          (me(c, e) && "added" === n) || (me(s, e) && "loaded" === n)
            ? t()
            : i.push({ name: e, state: n, callback: t });
      };
    return {
      items: o,
      urls: s,
      lookup: c,
      _listeners: i,
      get: function (e) {
        return c[e] ? c[e].instance : undefined;
      },
      dependencies: f,
      requireLangPack: function (t, n) {
        !1 !== Ma.languageLoad &&
          e(
            t,
            function () {
              var e = Ia.getCode();
              !e ||
                (n && -1 === ("," + (n || "") + ",").indexOf("," + e + ",")) ||
                Ra.ScriptLoader.add(s[t] + "/langs/" + e + ".js");
            },
            "loaded"
          );
      },
      add: function (e, t, n) {
        var r = t;
        return (
          o.push(r), (c[e] = { instance: r, dependencies: n }), l(e, "added"), r
        );
      },
      remove: function (e) {
        delete s[e], delete c[e];
      },
      createUrl: d,
      addComponents: function (e, t) {
        var n = r.urls[e];
        z(t, function (e) {
          Ra.ScriptLoader.add(n + "/" + e);
        });
      },
      load: m,
      waitFor: e,
    };
  }
  ((Da = Ma = Ma || {}).PluginManager = Da()), (Da.ThemeManager = Da());
  var Fa = Ma,
    Ua = function (n, r) {
      var o = null;
      return {
        cancel: function () {
          null !== o && (V.clearTimeout(o), (o = null));
        },
        throttle: function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          null === o &&
            (o = V.setTimeout(function () {
              n.apply(null, e), (o = null);
            }, r));
        },
      };
    },
    za = function (n, r) {
      var o = null;
      return {
        cancel: function () {
          null !== o && (V.clearTimeout(o), (o = null));
        },
        throttle: function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          null !== o && V.clearTimeout(o),
            (o = V.setTimeout(function () {
              n.apply(null, e), (o = null);
            }, r));
        },
      };
    },
    ja = function (e, t) {
      var n = In(e, t);
      return n === undefined || "" === n ? [] : n.split(" ");
    },
    Ha = function (e) {
      return e.dom().classList !== undefined;
    },
    Va = function (e, t) {
      return (
        (o = t),
        (i = ja((n = e), (r = "class")).concat([o])),
        Pn(n, r, i.join(" ")),
        !0
      );
      var n, r, o, i;
    },
    qa = function (e, t) {
      return (
        (o = t),
        0 <
        (i = H(ja((n = e), (r = "class")), function (e) {
          return e !== o;
        })).length
          ? Pn(n, r, i.join(" "))
          : Mn(n, r),
        !1
      );
      var n, r, o, i;
    },
    $a = function (e, t) {
      Ha(e) ? e.dom().classList.add(t) : Va(e, t);
    },
    Wa = function (e) {
      0 === (Ha(e) ? e.dom().classList : ja(e, "class")).length &&
        Mn(e, "class");
    },
    Ka = function (e, t) {
      return Ha(e) && e.dom().classList.contains(t);
    },
    Xa = function (e, t) {
      var n = [];
      return (
        z(Ht(e), function (e) {
          t(e) && (n = n.concat([e])), (n = n.concat(Xa(e, t)));
        }),
        n
      );
    },
    Ya = function (e, t) {
      return (
        (n = t),
        (o = (r = e) === undefined ? V.document : r.dom()),
        At(o) ? [] : U(o.querySelectorAll(n), Ct.fromDom)
      );
      var n, r, o;
    };
  function Ga(e, t, n, r, o) {
    return e(n, r) ? B.some(n) : A(o) && o(n) ? B.none() : t(n, r, o);
  }
  var Ja,
    Qa = function (e, t, n) {
      for (var r = e.dom(), o = A(n) ? n : x(!1); r.parentNode; ) {
        r = r.parentNode;
        var i = Ct.fromDom(r);
        if (t(i)) return B.some(i);
        if (o(i)) break;
      }
      return B.none();
    },
    Za = function (e, t, n) {
      return Ga(
        function (e, t) {
          return t(e);
        },
        Qa,
        e,
        t,
        n
      );
    },
    eu = function (e, t, n) {
      return Qa(
        e,
        function (e) {
          return Rt(e, t);
        },
        n
      );
    },
    tu = function (e, t) {
      return (
        (n = t),
        (o = (r = e) === undefined ? V.document : r.dom()),
        At(o) ? B.none() : B.from(o.querySelector(n)).map(Ct.fromDom)
      );
      var n, r, o;
    },
    nu = function (e, t, n) {
      return Ga(
        function (e, t) {
          return Rt(e, t);
        },
        eu,
        e,
        t,
        n
      );
    },
    ru = x("mce-annotation"),
    ou = x("data-mce-annotation"),
    iu = x("data-mce-annotation-uid"),
    au = function (r, e) {
      var t = r.selection.getRng(),
        n = Ct.fromDom(t.startContainer),
        o = Ct.fromDom(r.getBody()),
        i = e.fold(
          function () {
            return "." + ru();
          },
          function (e) {
            return "[" + ou() + '="' + e + '"]';
          }
        ),
        a = Vt(n, t.startOffset).getOr(n),
        u = nu(a, i, function (e) {
          return Dt(e, o);
        }),
        s = function (e, t) {
          return (
            (n = t),
            (r = e.dom()) && r.hasAttribute && r.hasAttribute(n)
              ? B.some(In(e, t))
              : B.none()
          );
          var n, r;
        };
      return u.bind(function (e) {
        return s(e, "" + iu()).bind(function (n) {
          return s(e, "" + ou()).map(function (e) {
            var t = uu(r, n);
            return { uid: n, name: e, elements: t };
          });
        });
      });
    },
    uu = function (e, t) {
      var n = Ct.fromDom(e.getBody());
      return Ya(n, "[" + iu() + '="' + t + '"]');
    },
    su = function (i, e) {
      var a = Oa({}),
        c = function (e, t) {
          u(e, function (e) {
            return t(e), e;
          });
        },
        u = function (e, t) {
          var n = a.get(),
            r = t(
              n.hasOwnProperty(e)
                ? n[e]
                : { listeners: [], previous: Oa(B.none()) }
            );
          (n[e] = r), a.set(n);
        },
        t = za(function () {
          var e,
            t,
            n,
            r = a.get(),
            o = ((e = ne(r)), (n = O.call(e, 0)).sort(t), n);
          z(o, function (e) {
            u(e, function (u) {
              var s = u.previous.get();
              return (
                au(i, B.some(e)).fold(
                  function () {
                    var t;
                    s.isSome() &&
                      (c((t = e), function (e) {
                        z(e.listeners, function (e) {
                          return e(!1, t);
                        });
                      }),
                      u.previous.set(B.none()));
                  },
                  function (e) {
                    var t,
                      n,
                      r,
                      o = e.uid,
                      i = e.name,
                      a = e.elements;
                    s.is(o) ||
                      ((n = o),
                      (r = a),
                      c((t = i), function (e) {
                        z(e.listeners, function (e) {
                          return e(!0, t, {
                            uid: n,
                            nodes: U(r, function (e) {
                              return e.dom();
                            }),
                          });
                        });
                      }),
                      u.previous.set(B.some(o)));
                  }
                ),
                { previous: u.previous, listeners: u.listeners }
              );
            });
          });
        }, 30);
      i.on("remove", function () {
        t.cancel();
      }),
        i.on("NodeChange", function () {
          t.throttle();
        });
      return {
        addListener: function (e, t) {
          u(e, function (e) {
            return { previous: e.previous, listeners: e.listeners.concat([t]) };
          });
        },
      };
    },
    cu = function (e, n) {
      e.on("init", function () {
        e.serializer.addNodeFilter("span", function (e) {
          z(e, function (t) {
            var e;
            (e = t),
              B.from(e.attr(ou()))
                .bind(n.lookup)
                .each(function (e) {
                  !1 === e.persistent && t.unwrap();
                });
          });
        });
      });
    },
    lu = 0,
    fu = function (e) {
      var t = new Date().getTime();
      return e + "_" + Math.floor(1e9 * Math.random()) + ++lu + String(t);
    },
    du = function (e, t) {
      var n,
        r,
        o = Pt(e).dom(),
        i = Ct.fromDom(o.createDocumentFragment()),
        a =
          ((n = t),
          ((r = (o || V.document).createElement("div")).innerHTML = n),
          Ht(Ct.fromDom(r)));
      en(i, a), tn(e), Zt(e, i);
    },
    mu = function (e, t) {
      return Ct.fromDom(e.dom().cloneNode(t));
    },
    pu = function (e) {
      return mu(e, !1);
    },
    gu = function (e) {
      return mu(e, !0);
    },
    hu = function (e, t, n) {
      void 0 === n && (n = g);
      var r = new Ai(e, t),
        o = function (e) {
          for (var t; (t = r[e]()) && !En(t) && !n(t); );
          return B.from(t).filter(En);
        };
      return {
        current: function () {
          return B.from(r.current()).filter(En);
        },
        next: function () {
          return o("next");
        },
        prev: function () {
          return o("prev");
        },
        prev2: function () {
          return o("prev2");
        },
      };
    },
    vu = function (t, e) {
      var i =
          e ||
          function (e) {
            return t.isBlock(e) || Rn(e) || Dn(e);
          },
        a = function (e, t, n, r) {
          if (En(e)) {
            var o = r(e, t, e.data);
            if (-1 !== o) return B.some({ container: e, offset: o });
          }
          return n().bind(function (e) {
            return a(e.container, e.offset, n, r);
          });
        };
      return {
        backwards: function (e, t, n, r) {
          var o = hu(e, r, i);
          return a(
            e,
            t,
            function () {
              return o.prev().map(function (e) {
                return { container: e, offset: e.length };
              });
            },
            n
          ).getOrNull();
        },
        forwards: function (e, t, n, r) {
          var o = hu(e, r, i);
          return a(
            e,
            t,
            function () {
              return o.next().map(function (e) {
                return { container: e, offset: 0 };
              });
            },
            n
          ).getOrNull();
        },
      };
    },
    yu = Ar,
    bu = function (e) {
      return e === Ar;
    },
    Cu = function (e) {
      return e.replace(/\uFEFF/g, "");
    },
    wu = vn,
    xu = En,
    Su = function (e) {
      return (
        xu(e) && (e = e.parentNode), wu(e) && e.hasAttribute("data-mce-caret")
      );
    },
    Nu = function (e) {
      return xu(e) && bu(e.data);
    },
    Eu = function (e) {
      return Su(e) || Nu(e);
    },
    ku = function (e) {
      return e.firstChild !== e.lastChild || !Rn(e.firstChild);
    },
    _u = function (e) {
      var t = e.container();
      return (
        !(!e || !En(t)) &&
        (t.data.charAt(e.offset()) === yu ||
          (e.isAtStart() && Nu(t.previousSibling)))
      );
    },
    Tu = function (e) {
      var t = e.container();
      return (
        !(!e || !En(t)) &&
        (t.data.charAt(e.offset() - 1) === yu ||
          (e.isAtEnd() && Nu(t.nextSibling)))
      );
    },
    Ru = function (e, t, n) {
      var r,
        o = t.ownerDocument.createElement(e);
      o.setAttribute("data-mce-caret", n ? "before" : "after"),
        o.setAttribute("data-mce-bogus", "all"),
        o.appendChild(
          ((r = V.document.createElement("br")).setAttribute(
            "data-mce-bogus",
            "1"
          ),
          r)
        );
      var i = t.parentNode;
      return (
        n
          ? i.insertBefore(o, t)
          : t.nextSibling
          ? i.insertBefore(o, t.nextSibling)
          : i.appendChild(o),
        o
      );
    },
    Au = function (e) {
      return xu(e) && e.data[0] === yu;
    },
    Du = function (e) {
      return xu(e) && e.data[e.data.length - 1] === yu;
    },
    Ou = function (e) {
      return e && e.hasAttribute("data-mce-caret")
        ? ((t = e.getElementsByTagName("br")),
          (n = t[t.length - 1]),
          wn(n) && n.parentNode.removeChild(n),
          e.removeAttribute("data-mce-caret"),
          e.removeAttribute("data-mce-bogus"),
          e.removeAttribute("style"),
          e.removeAttribute("_moz_abspos"),
          e)
        : null;
      var t, n;
    },
    Bu = function (e, t, n) {
      return e.isSome() && t.isSome()
        ? B.some(n(e.getOrDie(), t.getOrDie()))
        : B.none();
    },
    Pu = Math.round,
    Lu = function (e) {
      return e
        ? {
            left: Pu(e.left),
            top: Pu(e.top),
            bottom: Pu(e.bottom),
            right: Pu(e.right),
            width: Pu(e.width),
            height: Pu(e.height),
          }
        : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
    },
    Iu = function (e, t) {
      return (
        (e = Lu(e)),
        t || (e.left = e.left + e.width),
        (e.right = e.left),
        (e.width = 0),
        e
      );
    },
    Mu = function (e, t, n) {
      return 0 <= e && e <= Math.min(t.height, n.height) / 2;
    },
    Fu = function (e, t) {
      return (
        e.bottom - e.height / 2 < t.top ||
        (!(e.top > t.bottom) && Mu(t.top - e.bottom, e, t))
      );
    },
    Uu = function (e, t) {
      return (
        e.top > t.bottom || (!(e.bottom < t.top) && Mu(t.bottom - e.top, e, t))
      );
    },
    zu = function (e, t, n) {
      return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
    },
    ju = function (e) {
      var t = e.startContainer,
        n = e.startOffset;
      return t.hasChildNodes() && e.endOffset === n + 1
        ? t.childNodes[n]
        : null;
    },
    Hu = function (e, t) {
      return (
        1 === e.nodeType &&
          e.hasChildNodes() &&
          (t >= e.childNodes.length && (t = e.childNodes.length - 1),
          (e = e.childNodes[t])),
        e
      );
    },
    Vu = new RegExp(
      "[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"
    ),
    qu = function (e) {
      return "string" == typeof e && 768 <= e.charCodeAt(0) && Vu.test(e);
    },
    $u = An,
    Wu = Dn,
    Ku = Rn,
    Xu = En,
    Yu = yn(["script", "style", "textarea"]),
    Gu = yn([
      "img",
      "input",
      "textarea",
      "hr",
      "iframe",
      "video",
      "audio",
      "object",
    ]),
    Ju = yn(["table"]),
    Qu = Eu,
    Zu = function (e) {
      return (
        !Qu(e) && (Xu(e) ? !Yu(e.parentNode) : Gu(e) || Ku(e) || Ju(e) || es(e))
      );
    },
    es = function (e) {
      return (
        !1 === (vn((t = e)) && "true" === t.getAttribute("unselectable")) &&
        Wu(e)
      );
      var t;
    },
    ts = function (e, t) {
      return (
        Zu(e) &&
        (function (e, t) {
          for (e = e.parentNode; e && e !== t; e = e.parentNode) {
            if (es(e)) return !1;
            if ($u(e)) return !0;
          }
          return !0;
        })(e, t)
      );
    },
    ns = vn,
    rs = Zu,
    os = bn("display", "block table"),
    is = bn("float", "left right"),
    as = (function () {
      for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
      return function (e) {
        for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
        return !0;
      };
    })(ns, rs, m(is)),
    us = m(bn("white-space", "pre pre-line pre-wrap")),
    ss = En,
    cs = Rn,
    ls = Ea.nodeIndex,
    fs = Hu,
    ds = function (e) {
      return "createRange" in e ? e.createRange() : Ea.DOM.createRng();
    },
    ms = function (e) {
      return e && /[\r\n\t ]/.test(e);
    },
    ps = function (e) {
      return !!e.setStart && !!e.setEnd;
    },
    gs = function (e) {
      var t,
        n = e.startContainer,
        r = e.startOffset;
      return !!(
        ms(e.toString()) &&
        us(n.parentNode) &&
        En(n) &&
        ((t = n.data), ms(t[r - 1]) || ms(t[r + 1]))
      );
    },
    hs = function (e) {
      return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom;
    },
    vs = function (e) {
      var t,
        n = e.getClientRects();
      return (
        (t = 0 < n.length ? Lu(n[0]) : Lu(e.getBoundingClientRect())),
        !ps(e) && cs(e) && hs(t)
          ? (function (e) {
              var t = e.ownerDocument,
                n = ds(t),
                r = t.createTextNode(Dr),
                o = e.parentNode;
              o.insertBefore(r, e), n.setStart(r, 0), n.setEnd(r, 1);
              var i = Lu(n.getBoundingClientRect());
              return o.removeChild(r), i;
            })(e)
          : hs(t) && ps(e)
          ? (function (e) {
              var t = e.startContainer,
                n = e.endContainer,
                r = e.startOffset,
                o = e.endOffset;
              if (t === n && En(n) && 0 === r && 1 === o) {
                var i = e.cloneRange();
                return i.setEndAfter(n), vs(i);
              }
              return null;
            })(e)
          : t
      );
    },
    ys = function (e, t) {
      var n = Iu(e, t);
      return (n.width = 1), (n.right = n.left + 1), n;
    },
    bs = function (e) {
      var t,
        n,
        r = [],
        o = function (e) {
          var t, n;
          0 !== e.height &&
            ((0 < r.length &&
              ((t = e),
              (n = r[r.length - 1]),
              t.left === n.left &&
                t.top === n.top &&
                t.bottom === n.bottom &&
                t.right === n.right)) ||
              r.push(e));
        },
        i = function (e, t) {
          var n = ds(e.ownerDocument);
          if (t < e.data.length) {
            if (qu(e.data[t])) return r;
            if (
              qu(e.data[t - 1]) &&
              (n.setStart(e, t), n.setEnd(e, t + 1), !gs(n))
            )
              return o(ys(vs(n), !1)), r;
          }
          0 < t &&
            (n.setStart(e, t - 1), n.setEnd(e, t), gs(n) || o(ys(vs(n), !1))),
            t < e.data.length &&
              (n.setStart(e, t), n.setEnd(e, t + 1), gs(n) || o(ys(vs(n), !0)));
        };
      if (ss(e.container())) return i(e.container(), e.offset()), r;
      if (ns(e.container()))
        if (e.isAtEnd())
          (n = fs(e.container(), e.offset())),
            ss(n) && i(n, n.data.length),
            as(n) && !cs(n) && o(ys(vs(n), !1));
        else {
          if (
            ((n = fs(e.container(), e.offset())),
            ss(n) && i(n, 0),
            as(n) && e.isAtEnd())
          )
            return o(ys(vs(n), !1)), r;
          (t = fs(e.container(), e.offset() - 1)),
            as(t) &&
              !cs(t) &&
              ((!os(t) && !os(n) && as(n)) || o(ys(vs(t), !1))),
            as(n) && o(ys(vs(n), !0));
        }
      return r;
    };
  function Cs(t, n, e) {
    var r = function () {
      return (e = e || bs(Cs(t, n)));
    };
    return {
      container: x(t),
      offset: x(n),
      toRange: function () {
        var e = ds(t.ownerDocument);
        return e.setStart(t, n), e.setEnd(t, n), e;
      },
      getClientRects: r,
      isVisible: function () {
        return 0 < r().length;
      },
      isAtStart: function () {
        return ss(t), 0 === n;
      },
      isAtEnd: function () {
        return ss(t) ? n >= t.data.length : n >= t.childNodes.length;
      },
      isEqual: function (e) {
        return e && t === e.container() && n === e.offset();
      },
      getNode: function (e) {
        return fs(t, e ? n - 1 : n);
      },
    };
  }
  ((Ja = Cs = Cs || {}).fromRangeStart = function (e) {
    return Ja(e.startContainer, e.startOffset);
  }),
    (Ja.fromRangeEnd = function (e) {
      return Ja(e.endContainer, e.endOffset);
    }),
    (Ja.after = function (e) {
      return Ja(e.parentNode, ls(e) + 1);
    }),
    (Ja.before = function (e) {
      return Ja(e.parentNode, ls(e));
    }),
    (Ja.isAbove = function (e, t) {
      return Bu(Z(t.getClientRects()), ee(e.getClientRects()), Fu).getOr(!1);
    }),
    (Ja.isBelow = function (e, t) {
      return Bu(ee(t.getClientRects()), Z(e.getClientRects()), Uu).getOr(!1);
    }),
    (Ja.isAtStart = function (e) {
      return !!e && e.isAtStart();
    }),
    (Ja.isAtEnd = function (e) {
      return !!e && e.isAtEnd();
    }),
    (Ja.isTextPosition = function (e) {
      return !!e && En(e.container());
    }),
    (Ja.isElementPosition = function (e) {
      return !1 === Ja.isTextPosition(e);
    });
  var ws,
    xs,
    Ss = Cs,
    Ns = function (e, t) {
      En(t) && 0 === t.data.length && e.remove(t);
    },
    Es = function (e, t, n) {
      var r, o, i, a, u, s, c;
      Tn(n)
        ? ((i = e),
          (a = t),
          (u = n),
          (s = B.from(u.firstChild)),
          (c = B.from(u.lastChild)),
          a.insertNode(u),
          s.each(function (e) {
            return Ns(i, e.previousSibling);
          }),
          c.each(function (e) {
            return Ns(i, e.nextSibling);
          }))
        : ((r = e),
          (o = n),
          t.insertNode(o),
          Ns(r, o.previousSibling),
          Ns(r, o.nextSibling));
    },
    ks = En,
    _s = wn,
    Ts = Ea.nodeIndex,
    Rs = function (e) {
      var t = e.parentNode;
      return _s(t) ? Rs(t) : t;
    },
    As = function (e) {
      return e
        ? be(
            e.childNodes,
            function (e, t) {
              return (
                _s(t) && "BR" !== t.nodeName
                  ? (e = e.concat(As(t)))
                  : e.push(t),
                e
              );
            },
            []
          )
        : [];
    },
    Ds = function (t) {
      return function (e) {
        return t === e;
      };
    },
    Os = function (e) {
      return (
        (ks(e) ? "text()" : e.nodeName.toLowerCase()) +
        "[" +
        (function (e) {
          var r, t;
          (r = As(Rs(e))), (t = Ce(r, Ds(e), e)), (r = r.slice(0, t + 1));
          var n = be(
            r,
            function (e, t, n) {
              return ks(t) && ks(r[n - 1]) && e++, e;
            },
            0
          );
          return (r = ve(r, yn([e.nodeName]))), (t = Ce(r, Ds(e), e)) - n;
        })(e) +
        "]"
      );
    },
    Bs = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        u = [];
      return (
        (n = t.container()),
        (r = t.offset()),
        ks(n)
          ? (o = (function (e, t) {
              for (; (e = e.previousSibling) && ks(e); ) t += e.data.length;
              return t;
            })(n, r))
          : (r >= (i = n.childNodes).length
              ? ((o = "after"), (r = i.length - 1))
              : (o = "before"),
            (n = i[r])),
        u.push(Os(n)),
        (a = (function (e, t, n) {
          var r = [];
          for (t = t.parentNode; t !== e && (!n || !n(t)); t = t.parentNode)
            r.push(t);
          return r;
        })(e, n)),
        (a = ve(a, m(wn))),
        (u = u.concat(
          he(a, function (e) {
            return Os(e);
          })
        ))
          .reverse()
          .join("/") +
          "," +
          o
      );
    },
    Ps = function (e, t) {
      var n;
      if (!t) return null;
      var r = t.split(","),
        o = r[0].split("/");
      n = 1 < r.length ? r[1] : "before";
      var i = be(
        o,
        function (e, t) {
          return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))
            ? ("text()" === t[1] && (t[1] = "#text"),
              (n = e),
              (r = t[1]),
              (o = parseInt(t[2], 10)),
              (i = As(n)),
              (i = ve(i, function (e, t) {
                return !ks(e) || !ks(i[t - 1]);
              })),
              (i = ve(i, yn([r])))[o])
            : null;
          var n, r, o, i;
        },
        e
      );
      return i
        ? ks(i)
          ? (function (e, t) {
              for (var n, r = e, o = 0; ks(r); ) {
                if (((n = r.data.length), o <= t && t <= o + n)) {
                  (e = r), (t -= o);
                  break;
                }
                if (!ks(r.nextSibling)) {
                  (e = r), (t = n);
                  break;
                }
                (o += n), (r = r.nextSibling);
              }
              return (
                ks(e) && t > e.data.length && (t = e.data.length), Ss(e, t)
              );
            })(i, parseInt(n, 10))
          : ((n = "after" === n ? Ts(i) + 1 : Ts(i)), Ss(i.parentNode, n))
        : null;
    },
    Ls = Dn,
    Is = function (e, t, n, r, o) {
      var i,
        a = r[o ? "startContainer" : "endContainer"],
        u = r[o ? "startOffset" : "endOffset"],
        s = [],
        c = 0,
        l = e.getRoot();
      for (
        En(a)
          ? s.push(
              n
                ? (function (e, t, n) {
                    var r, o;
                    for (
                      o = e(t.data.slice(0, n)).length, r = t.previousSibling;
                      r && En(r);
                      r = r.previousSibling
                    )
                      o += e(r.data).length;
                    return o;
                  })(t, a, u)
                : u
            )
          : (u >= (i = a.childNodes).length &&
              i.length &&
              ((c = 1), (u = Math.max(0, i.length - 1))),
            s.push(e.nodeIndex(i[u], n) + c));
        a && a !== l;
        a = a.parentNode
      )
        s.push(e.nodeIndex(a, n));
      return s;
    },
    Ms = function (e, t, n) {
      var r = 0;
      return (
        yt.each(e.select(t), function (e) {
          if ("all" !== e.getAttribute("data-mce-bogus"))
            return e !== n && void r++;
        }),
        r
      );
    },
    Fs = function (e, t) {
      var n,
        r,
        o,
        i = t ? "start" : "end";
      (n = e[i + "Container"]),
        (r = e[i + "Offset"]),
        vn(n) &&
          "TR" === n.nodeName &&
          (n = (o = n.childNodes)[Math.min(t ? r : r - 1, o.length - 1)]) &&
          ((r = t ? 0 : n.childNodes.length),
          e["set" + (t ? "Start" : "End")](n, r));
    },
    Us = function (e) {
      return Fs(e, !0), Fs(e, !1), e;
    },
    zs = function (e, t) {
      var n;
      if (vn(e) && ((e = Hu(e, t)), Ls(e))) return e;
      if (Eu(e)) {
        if (
          (En(e) && Su(e) && (e = e.parentNode), (n = e.previousSibling), Ls(n))
        )
          return n;
        if (((n = e.nextSibling), Ls(n))) return n;
      }
    },
    js = function (e, t, n) {
      var r = n.getNode(),
        o = r ? r.nodeName : null,
        i = n.getRng();
      if (Ls(r) || "IMG" === o) return { name: o, index: Ms(n.dom, o, r) };
      var a,
        u,
        s,
        c,
        l,
        f,
        d,
        m =
          zs((a = i).startContainer, a.startOffset) ||
          zs(a.endContainer, a.endOffset);
      return m
        ? { name: (o = m.tagName), index: Ms(n.dom, o, m) }
        : ((u = e),
          (c = t),
          (l = i),
          (f = (s = n).dom),
          ((d = {}).start = Is(f, u, c, l, !0)),
          s.isCollapsed() || (d.end = Is(f, u, c, l, !1)),
          d);
    },
    Hs = function (e, t, n) {
      var r = {
        "data-mce-type": "bookmark",
        id: t,
        style: "overflow:hidden;line-height:0px",
      };
      return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
    },
    Vs = function (e, t) {
      var n = e.dom,
        r = e.getRng(),
        o = n.uniqueId(),
        i = e.isCollapsed(),
        a = e.getNode(),
        u = a.nodeName;
      if ("IMG" === u) return { name: u, index: Ms(n, u, a) };
      var s = Us(r.cloneRange());
      if (!i) {
        s.collapse(!1);
        var c = Hs(n, o + "_end", t);
        Es(n, s, c);
      }
      (r = Us(r)).collapse(!0);
      var l = Hs(n, o + "_start", t);
      return Es(n, r, l), e.moveToBookmark({ id: o, keep: !0 }), { id: o };
    },
    qs = function (e, t, n) {
      return 2 === t
        ? js(Cu, n, e)
        : 3 === t
        ? ((o = (r = e).getRng()),
          {
            start: Bs(r.dom.getRoot(), Ss.fromRangeStart(o)),
            end: Bs(r.dom.getRoot(), Ss.fromRangeEnd(o)),
          })
        : t
        ? { rng: e.getRng() }
        : Vs(e, !1);
      var r, o;
    },
    $s = N(js, o, !0),
    Ws = Ea.DOM,
    Ks = function (e, t, n) {
      var r = e.getParam(t, n);
      if (-1 === r.indexOf("=")) return r;
      var o = e.getParam(t, "", "hash");
      return o.hasOwnProperty(e.id) ? o[e.id] : n;
    },
    Xs = function (e) {
      return e.getParam("content_security_policy", "");
    },
    Ys = function (e) {
      if (e.getParam("force_p_newlines", !1)) return "p";
      var t = e.getParam("forced_root_block", "p");
      return !1 === t ? "" : !0 === t ? "p" : t;
    },
    Gs = function (e) {
      return e.getParam("forced_root_block_attrs", {});
    },
    Js = function (e) {
      return e.getParam("automatic_uploads", !0, "boolean");
    },
    Qs = function (e) {
      return e.getParam("icons", "", "string");
    },
    Zs = function (e) {
      return e.getParam("referrer_policy", "", "string");
    },
    ec = function (e) {
      return e.getParam("language", "en", "string");
    },
    tc = function (e) {
      return e.getParam("indent_use_margin", !1);
    },
    nc = function (e) {
      return e.getParam("object_resizing");
    },
    rc = function (e) {
      return e.getParam("event_root");
    },
    oc = function (e) {
      return e.getParam("theme");
    },
    ic = function (e) {
      return !1 !== e.getParam("inline_boundaries");
    },
    ac = function (e) {
      return e.getParam("plugins");
    },
    uc = vn,
    sc = En,
    cc = function (e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    },
    lc = function (e, t) {
      0 === t.length ? cc(e) : (e.nodeValue = t);
    },
    fc = function (e) {
      var t = Cu(e);
      return { count: e.length - t.length, text: t };
    },
    dc = function (e, t) {
      return hc(e), t;
    },
    mc = function (e, t) {
      var n,
        r,
        o = t.container(),
        i =
          ((n = te(o.childNodes)),
          (-1 === (r = I(n, e)) ? B.none() : B.some(r))
            .map(function (e) {
              return e < t.offset() ? Ss(o, t.offset() - 1) : t;
            })
            .getOr(t));
      return hc(e), i;
    },
    pc = function (e, t) {
      return sc(e) && t.container() === e
        ? ((r = t),
          (o = fc((n = e).data.substr(0, r.offset()))),
          (i = fc(n.data.substr(r.offset()))),
          0 < (a = o.text + i.text).length
            ? (lc(n, a), Ss(n, r.offset() - o.count))
            : r)
        : dc(e, t);
      var n, r, o, i, a;
    },
    gc = function (e, t) {
      return Ss.isTextPosition(t)
        ? pc(e, t)
        : ((n = e), ((r = t).container() === n.parentNode ? mc : dc)(n, r));
      var n, r;
    },
    hc = function (e) {
      if (
        (uc(e) &&
          Eu(e) &&
          (ku(e) ? e.removeAttribute("data-mce-caret") : cc(e)),
        sc(e))
      ) {
        var t = Cu(
          (function (e) {
            try {
              return e.nodeValue;
            } catch (t) {
              return "";
            }
          })(e)
        );
        lc(e, t);
      }
    },
    vc = ot().browser,
    yc = Dn,
    bc = function (e, t, n) {
      var r,
        o,
        i,
        a,
        u,
        s = Iu(t.getBoundingClientRect(), n);
      return (
        (i =
          "BODY" === e.tagName
            ? ((r = e.ownerDocument.documentElement),
              (o = e.scrollLeft || r.scrollLeft),
              e.scrollTop || r.scrollTop)
            : ((u = e.getBoundingClientRect()),
              (o = e.scrollLeft - u.left),
              e.scrollTop - u.top)),
        (s.left += o),
        (s.right += o),
        (s.top += i),
        (s.bottom += i),
        (s.width = 1),
        0 < (a = t.offsetWidth - t.clientWidth) &&
          (n && (a *= -1), (s.left += a), (s.right += a)),
        s
      );
    },
    Cc = function (e, a, u, t) {
      var n,
        s,
        c = Oa(B.none()),
        r = Ys(e),
        l = 0 < r.length ? r : "p",
        f = function () {
          !(function (e) {
            var t,
              n,
              r,
              o,
              i = Ya(Ct.fromDom(e), "*[contentEditable=false]");
            for (r = 0; r < i.length; r++)
              (n = (t = i[r].dom()).previousSibling),
                Du(n) &&
                  (1 === (o = n.data).length
                    ? n.parentNode.removeChild(n)
                    : n.deleteData(o.length - 1, 1)),
                (n = t.nextSibling),
                Au(n) &&
                  (1 === (o = n.data).length
                    ? n.parentNode.removeChild(n)
                    : n.deleteData(0, 1));
          })(a),
            s && (hc(s), (s = null)),
            c.get().each(function (e) {
              Ri(e.caret).remove(), c.set(B.none());
            }),
            n && (fa.clearInterval(n), (n = null));
        },
        d = function () {
          n = fa.setInterval(function () {
            t()
              ? Ri("div.mce-visual-caret", a).toggleClass(
                  "mce-visual-caret-hidden"
                )
              : Ri("div.mce-visual-caret", a).addClass(
                  "mce-visual-caret-hidden"
                );
          }, 500);
        };
      return {
        show: function (t, e) {
          var n, r, o;
          if ((f(), vn((o = e)) && /^(TD|TH)$/i.test(o.tagName))) return null;
          if (!u(e))
            return (
              (s = (function (e, t) {
                var n,
                  r = e.ownerDocument.createTextNode(yu),
                  o = e.parentNode;
                if (t) {
                  if (((n = e.previousSibling), xu(n))) {
                    if (Eu(n)) return n;
                    if (Du(n)) return n.splitText(n.data.length - 1);
                  }
                  o.insertBefore(r, e);
                } else {
                  if (((n = e.nextSibling), xu(n))) {
                    if (Eu(n)) return n;
                    if (Au(n)) return n.splitText(1), n;
                  }
                  e.nextSibling
                    ? o.insertBefore(r, e.nextSibling)
                    : o.appendChild(r);
                }
                return r;
              })(e, t)),
              (r = e.ownerDocument.createRange()),
              yc(s.nextSibling)
                ? (r.setStart(s, 0), r.setEnd(s, 0))
                : (r.setStart(s, 1), r.setEnd(s, 1)),
              r
            );
          (s = Ru(l, e, t)), (n = bc(a, e, t)), Ri(s).css("top", n.top);
          var i = Ri(
            '<div class="mce-visual-caret" data-mce-bogus="all"></div>'
          )
            .css(n)
            .appendTo(a)[0];
          return (
            c.set(B.some({ caret: i, element: e, before: t })),
            c.get().each(function (e) {
              t && Ri(e.caret).addClass("mce-visual-caret-before");
            }),
            d(),
            (r = e.ownerDocument.createRange()).setStart(s, 0),
            r.setEnd(s, 0),
            r
          );
        },
        hide: f,
        getCss: function () {
          return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
        },
        reposition: function () {
          c.get().each(function (e) {
            var t = bc(a, e.element, e.before);
            Ri(e.caret).css(xe({}, t));
          });
        },
        destroy: function () {
          return fa.clearInterval(n);
        },
      };
    },
    wc = function () {
      return vc.isIE() || vc.isEdge() || vc.isFirefox();
    },
    xc = function (e) {
      return yc(e) || (xn(e) && wc());
    },
    Sc = Dn,
    Nc = bn("display", "block table table-cell table-caption list-item"),
    Ec = Eu,
    kc = Su,
    _c = vn,
    Tc = Zu,
    Rc = function (e, t) {
      for (var n; (n = e(t)); ) if (!kc(n)) return n;
      return null;
    },
    Ac = function (e, t, n, r, o) {
      var i = new Ai(e, r);
      if (t < 0) {
        if ((Sc(e) || kc(e)) && n((e = Rc(i.prev, !0)))) return e;
        for (; (e = Rc(i.prev, o)); ) if (n(e)) return e;
      }
      if (0 < t) {
        if ((Sc(e) || kc(e)) && n((e = Rc(i.next, !0)))) return e;
        for (; (e = Rc(i.next, o)); ) if (n(e)) return e;
      }
      return null;
    },
    Dc = function (e, t) {
      for (; e && e !== t; ) {
        if (Nc(e)) return e;
        e = e.parentNode;
      }
      return null;
    },
    Oc = function (e, t, n) {
      return Dc(e.container(), n) === Dc(t.container(), n);
    },
    Bc = function (e, t) {
      if (!t) return null;
      var n = t.container(),
        r = t.offset();
      return _c(n) ? n.childNodes[r + e] : null;
    },
    Pc = function (e, t) {
      var n = t.ownerDocument.createRange();
      return (
        e
          ? (n.setStartBefore(t), n.setEndBefore(t))
          : (n.setStartAfter(t), n.setEndAfter(t)),
        n
      );
    },
    Lc = function (e, t, n) {
      var r, o, i, a;
      for (o = e ? "previousSibling" : "nextSibling"; n && n !== t; ) {
        if (((r = n[o]), Ec(r) && (r = r[o]), Sc(r))) {
          if (((a = n), Dc(r, (i = t)) === Dc(a, i))) return r;
          break;
        }
        if (Tc(r)) break;
        n = n.parentNode;
      }
      return null;
    },
    Ic = N(Pc, !0),
    Mc = N(Pc, !1),
    Fc = function (e, t, n) {
      var r,
        o,
        i,
        a = N(Lc, !0, t),
        u = N(Lc, !1, t);
      o = n.startContainer;
      var s = n.startOffset;
      if (Su(o)) {
        if (
          (_c(o) || (o = o.parentNode),
          "before" === (i = o.getAttribute("data-mce-caret")) &&
            ((r = o.nextSibling), xc(r)))
        )
          return Ic(r);
        if ("after" === i && ((r = o.previousSibling), xc(r))) return Mc(r);
      }
      if (!n.collapsed) return n;
      if (En(o)) {
        if (Ec(o)) {
          if (1 === e) {
            if ((r = u(o))) return Ic(r);
            if ((r = a(o))) return Mc(r);
          }
          if (-1 === e) {
            if ((r = a(o))) return Mc(r);
            if ((r = u(o))) return Ic(r);
          }
          return n;
        }
        if (Du(o) && s >= o.data.length - 1)
          return 1 === e && (r = u(o)) ? Ic(r) : n;
        if (Au(o) && s <= 1) return -1 === e && (r = a(o)) ? Mc(r) : n;
        if (s === o.data.length) return (r = u(o)) ? Ic(r) : n;
        if (0 === s) return (r = a(o)) ? Mc(r) : n;
      }
      return n;
    },
    Uc = function (e, t) {
      return B.from(Bc(e ? 0 : -1, t)).filter(Sc);
    },
    zc = function (e, t, n) {
      var r = Fc(e, t, n);
      return -1 === e ? Cs.fromRangeStart(r) : Cs.fromRangeEnd(r);
    },
    jc = function (e) {
      return B.from(e.getNode()).map(Ct.fromDom);
    },
    Hc = function (e, t) {
      for (; (t = e(t)); ) if (t.isVisible()) return t;
      return t;
    },
    Vc = function (e, t) {
      var n = Oc(e, t);
      return !(n || !Rn(e.getNode())) || n;
    };
  ((xs = ws = ws || {})[(xs.Backwards = -1)] = "Backwards"),
    (xs[(xs.Forwards = 1)] = "Forwards");
  var qc,
    $c = Dn,
    Wc = En,
    Kc = vn,
    Xc = Rn,
    Yc = Zu,
    Gc = function (e) {
      return (
        Gu(e) ||
        (!!es((t = e)) &&
          !0 !==
            W(
              te(t.getElementsByTagName("*")),
              function (e, t) {
                return e || $u(t);
              },
              !1
            ))
      );
      var t;
    },
    Jc = ts,
    Qc = function (e, t) {
      return e.hasChildNodes() && t < e.childNodes.length
        ? e.childNodes[t]
        : null;
    },
    Zc = function (e, t) {
      if (0 < e) {
        if (Yc(t.previousSibling) && !Wc(t.previousSibling))
          return Ss.before(t);
        if (Wc(t)) return Ss(t, 0);
      }
      if (e < 0) {
        if (Yc(t.nextSibling) && !Wc(t.nextSibling)) return Ss.after(t);
        if (Wc(t)) return Ss(t, t.data.length);
      }
      return !(e < 0) || Xc(t) ? Ss.before(t) : Ss.after(t);
    },
    el = function (e, t, n) {
      var r, o, i, a;
      if (!Kc(n) || !t) return null;
      if (t.isEqual(Ss.after(n)) && n.lastChild) {
        if (
          ((a = Ss.after(n.lastChild)),
          e < 0 && Yc(n.lastChild) && Kc(n.lastChild))
        )
          return Xc(n.lastChild) ? Ss.before(n.lastChild) : a;
      } else a = t;
      var u,
        s,
        c,
        l = a.container(),
        f = a.offset();
      if (Wc(l)) {
        if (e < 0 && 0 < f) return Ss(l, --f);
        if (0 < e && f < l.length) return Ss(l, ++f);
        r = l;
      } else {
        if (e < 0 && 0 < f && ((o = Qc(l, f - 1)), Yc(o)))
          return !Gc(o) && (i = Ac(o, e, Jc, o))
            ? Wc(i)
              ? Ss(i, i.data.length)
              : Ss.after(i)
            : Wc(o)
            ? Ss(o, o.data.length)
            : Ss.before(o);
        if (0 < e && f < l.childNodes.length && ((o = Qc(l, f)), Yc(o)))
          return Xc(o)
            ? ((u = n),
              (c = (s = o).nextSibling) && Yc(c)
                ? Wc(c)
                  ? Ss(c, 0)
                  : Ss.before(c)
                : el(ws.Forwards, Ss.after(s), u))
            : !Gc(o) && (i = Ac(o, e, Jc, o))
            ? Wc(i)
              ? Ss(i, 0)
              : Ss.before(i)
            : Wc(o)
            ? Ss(o, 0)
            : Ss.after(o);
        r = o || a.getNode();
      }
      if (
        ((0 < e && a.isAtEnd()) || (e < 0 && a.isAtStart())) &&
        ((r = Ac(r, e, x(!0), n, !0)), Jc(r, n))
      )
        return Zc(e, r);
      o = Ac(r, e, Jc, n);
      var d = we(
        H(
          (function (e, t) {
            for (var n = []; e && e !== t; ) n.push(e), (e = e.parentNode);
            return n;
          })(l, n),
          $c
        )
      );
      return !d || (o && d.contains(o))
        ? o
          ? Zc(e, o)
          : null
        : (a = 0 < e ? Ss.after(d) : Ss.before(d));
    },
    tl = function (t) {
      return {
        next: function (e) {
          return el(ws.Forwards, e, t);
        },
        prev: function (e) {
          return el(ws.Backwards, e, t);
        },
      };
    },
    nl = function (e) {
      return Ss.isTextPosition(e) ? 0 === e.offset() : Zu(e.getNode());
    },
    rl = function (e) {
      if (Ss.isTextPosition(e)) {
        var t = e.container();
        return e.offset() === t.data.length;
      }
      return Zu(e.getNode(!0));
    },
    ol = function (e, t) {
      return (
        !Ss.isTextPosition(e) &&
        !Ss.isTextPosition(t) &&
        e.getNode() === t.getNode(!0)
      );
    },
    il = function (e, t, n) {
      return e
        ? !ol(t, n) &&
            ((r = t), !(!Ss.isTextPosition(r) && Rn(r.getNode()))) &&
            rl(t) &&
            nl(n)
        : !ol(n, t) && nl(t) && rl(n);
      var r;
    },
    al = function (e, t, n) {
      var r = tl(t);
      return B.from(e ? r.next(n) : r.prev(n));
    },
    ul = function (t, n, r) {
      return al(t, n, r).bind(function (e) {
        return Oc(r, e, n) && il(t, r, e) ? al(t, n, e) : B.some(e);
      });
    },
    sl = function (t, n, e, r) {
      return ul(t, n, e).bind(function (e) {
        return r(e) ? sl(t, n, e, r) : B.some(e);
      });
    },
    cl = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        u = e ? t.firstChild : t.lastChild;
      return En(u)
        ? B.some(Ss(u, e ? 0 : u.data.length))
        : u
        ? Zu(u)
          ? B.some(e ? Ss.before(u) : Rn((a = u)) ? Ss.before(a) : Ss.after(a))
          : ((r = t),
            (o = u),
            (i = (n = e) ? Ss.before(o) : Ss.after(o)),
            al(n, r, i))
        : B.none();
    },
    ll = N(al, !0),
    fl = N(al, !1),
    dl = N(cl, !0),
    ml = N(cl, !1),
    pl = "_mce_caret",
    gl = function (e) {
      return vn(e) && e.id === pl;
    },
    hl = function (e, t) {
      for (; t && t !== e; ) {
        if (t.id === pl) return t;
        t = t.parentNode;
      }
      return null;
    },
    vl = function (e, t) {
      return (
        vn(t) &&
          e.isBlock(t) &&
          !t.innerHTML &&
          !mt.ie &&
          (t.innerHTML = '<br data-mce-bogus="1" />'),
        t
      );
    },
    yl = function (e, t) {
      return ml(e).fold(
        function () {
          return !1;
        },
        function (e) {
          return (
            t.setStart(e.container(), e.offset()),
            t.setEnd(e.container(), e.offset()),
            !0
          );
        }
      );
    },
    bl = function (e, t, n) {
      return (
        !(!1 !== t.hasChildNodes() || !hl(e, t)) &&
        ((o = n),
        (i = (r = t).ownerDocument.createTextNode(yu)),
        r.appendChild(i),
        o.setStart(i, 0),
        o.setEnd(i, 0),
        !0)
      );
      var r, o, i;
    },
    Cl = function (e, t, n, r) {
      var o,
        i,
        a,
        u,
        s = n[t ? "start" : "end"],
        c = e.getRoot();
      if (s) {
        for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
          if (((u = i.childNodes), bl(c, i, r))) return !0;
          if (s[o] > u.length - 1) return !!bl(c, i, r) || yl(i, r);
          i = u[s[o]];
        }
        3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)),
          1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)),
          t ? r.setStart(i, a) : r.setEnd(i, a);
      }
      return !0;
    },
    wl = function (e) {
      return En(e) && 0 < e.data.length;
    },
    xl = function (e, t, n) {
      var r,
        o,
        i,
        a,
        u,
        s,
        c = e.get(n.id + "_" + t),
        l = n.keep;
      if (c) {
        if (
          ((r = c.parentNode),
          (s =
            ((u =
              ((o =
                "start" === t
                  ? l
                    ? c.hasChildNodes()
                      ? ((r = c.firstChild), 1)
                      : wl(c.nextSibling)
                      ? ((r = c.nextSibling), 0)
                      : wl(c.previousSibling)
                      ? ((r = c.previousSibling), c.previousSibling.data.length)
                      : ((r = c.parentNode), e.nodeIndex(c) + 1)
                    : e.nodeIndex(c)
                  : l
                  ? c.hasChildNodes()
                    ? ((r = c.firstChild), 1)
                    : wl(c.previousSibling)
                    ? ((r = c.previousSibling), c.previousSibling.data.length)
                    : ((r = c.parentNode), e.nodeIndex(c))
                  : e.nodeIndex(c)),
              r)),
            o)),
          !l)
        ) {
          for (
            a = c.previousSibling,
              i = c.nextSibling,
              yt.each(yt.grep(c.childNodes), function (e) {
                En(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
              });
            (c = e.get(n.id + "_" + t));

          )
            e.remove(c, !0);
          a &&
            i &&
            a.nodeType === i.nodeType &&
            En(a) &&
            !mt.opera &&
            ((o = a.nodeValue.length),
            a.appendData(i.nodeValue),
            e.remove(i),
            (s = ((u = a), o)));
        }
        return B.some(Ss(u, s));
      }
      return B.none();
    },
    Sl = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        p,
        g,
        h = e.dom;
      if (t) {
        if (((g = t), yt.isArray(g.start)))
          return (
            (m = t),
            (p = (d = h).createRng()),
            Cl(d, !0, m, p) && Cl(d, !1, m, p) ? B.some(p) : B.none()
          );
        if ("string" == typeof t.start)
          return B.some(
            ((c = t),
            (f = (s = h).createRng()),
            (l = Ps(s.getRoot(), c.start)),
            f.setStart(l.container(), l.offset()),
            (l = Ps(s.getRoot(), c.end)),
            f.setEnd(l.container(), l.offset()),
            f)
          );
        if (t.hasOwnProperty("id"))
          return (
            (a = xl((o = h), "start", (i = t))),
            (u = xl(o, "end", i)),
            Bu(a, u.or(a), function (e, t) {
              var n = o.createRng();
              return (
                n.setStart(vl(o, e.container()), e.offset()),
                n.setEnd(vl(o, t.container()), t.offset()),
                n
              );
            })
          );
        if (t.hasOwnProperty("name"))
          return (
            (n = h),
            (r = t),
            B.from(n.select(r.name)[r.index]).map(function (e) {
              var t = n.createRng();
              return t.selectNode(e), t;
            })
          );
        if (t.hasOwnProperty("rng")) return B.some(t.rng);
      }
      return B.none();
    },
    Nl = function (e, t, n) {
      return qs(e, t, n);
    },
    El = function (t, e) {
      Sl(t, e).each(function (e) {
        t.setRng(e);
      });
    },
    kl = function (e) {
      return (
        vn(e) &&
        "SPAN" === e.tagName &&
        "bookmark" === e.getAttribute("data-mce-type")
      );
    },
    _l =
      ((qc = Dr),
      function (e) {
        return qc === e;
      }),
    Tl = function (e) {
      return "" !== e && -1 !== " \f\n\r\t\x0B".indexOf(e);
    },
    Rl = function (e) {
      return !Tl(e) && !_l(e);
    },
    Al = function (e) {
      return !!e.nodeType;
    },
    Dl = function (e, t, n) {
      var r,
        o,
        i,
        a,
        u = n.startOffset,
        s = n.startContainer;
      if (
        (n.startContainer !== n.endContainer ||
          !(a = n.startContainer.childNodes[n.startOffset]) ||
          !/^(IMG)$/.test(a.nodeName)) &&
        1 === s.nodeType
      )
        for (
          u < (i = s.childNodes).length
            ? ((s = i[u]), (r = new Ai(s, e.getParent(s, e.isBlock))))
            : ((s = i[i.length - 1]),
              (r = new Ai(s, e.getParent(s, e.isBlock))).next(!0)),
            o = r.current();
          o;
          o = r.next()
        )
          if (3 === o.nodeType && !Ll(o))
            return n.setStart(o, 0), void t.setRng(n);
    },
    Ol = function (e, t, n) {
      if (e) {
        var r = t ? "nextSibling" : "previousSibling";
        for (e = n ? e : e[r]; e; e = e[r])
          if (1 === e.nodeType || !Ll(e)) return e;
      }
    },
    Bl = function (e, t) {
      return (
        Al(t) && (t = t.nodeName),
        !!e.schema.getTextBlockElements()[t.toLowerCase()]
      );
    },
    Pl = function (e, t, n) {
      return e.schema.isValidChild(t, n);
    },
    Ll = function (e) {
      return e && En(e) && /^([\t \r\n]+|)$/.test(e.nodeValue);
    },
    Il = function (e, n) {
      return (
        "string" != typeof e
          ? (e = e(n))
          : n &&
            (e = e.replace(/%(\w+)/g, function (e, t) {
              return n[t] || e;
            })),
        e
      );
    },
    Ml = function (e, t) {
      return (
        (e = "" + ((e = e || "").nodeName || e)),
        (t = "" + ((t = t || "").nodeName || t)),
        e.toLowerCase() === t.toLowerCase()
      );
    },
    Fl = function (e, t, n) {
      return (
        ("color" !== n && "backgroundColor" !== n) || (t = e.toHex(t)),
        "fontWeight" === n && 700 === t && (t = "bold"),
        "fontFamily" === n &&
          (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")),
        "" + t
      );
    },
    Ul = function (e, t, n) {
      return Fl(e, e.getStyle(t, n), n);
    },
    zl = function (t, e) {
      var n;
      return (
        t.getParent(e, function (e) {
          return (n = t.getStyle(e, "text-decoration")) && "none" !== n;
        }),
        n
      );
    },
    jl = function (e, t, n) {
      return e.getParents(t, n, e.getRoot());
    },
    Hl = function (t, e, n) {
      var r = [
          "inline",
          "block",
          "selector",
          "attributes",
          "styles",
          "classes",
        ],
        a = function (e) {
          return le(e, function (e, t) {
            return F(r, function (e) {
              return e === t;
            });
          });
        };
      return F(t.formatter.get(e), function (e) {
        var i = a(e);
        return F(t.formatter.get(n), function (e) {
          var t,
            n,
            r,
            o = a(e);
          return (t = i), (n = o), void 0 === r && (r = l), u(r).eq(t, n);
        });
      });
    },
    Vl = kl,
    ql = jl,
    $l = Ll,
    Wl = Bl,
    Kl = function (e, t) {
      for (var n = t; n; ) {
        if (vn(n) && e.getContentEditable(n))
          return "false" === e.getContentEditable(n) ? n : t;
        n = n.parentNode;
      }
      return t;
    },
    Xl = function (e, t, n, r) {
      for (var o = t.data, i = n; e ? 0 <= i : i < o.length; e ? i-- : i++)
        if (r(o.charAt(i))) return e ? i + 1 : i;
      return -1;
    },
    Yl = function (e, t, n) {
      return Xl(e, t, n, function (e) {
        return _l(e) || Tl(e);
      });
    },
    Gl = function (e, t, n) {
      return Xl(e, t, n, Rl);
    },
    Jl = function (i, e, t, n, a, r) {
      var u,
        s = i.getParent(t, i.isBlock) || e,
        o = function (e, t, n) {
          var r = vu(i),
            o = a ? r.backwards : r.forwards;
          return B.from(
            o(
              e,
              t,
              function (e, t) {
                return Vl(e.parentNode) ? -1 : n(a, (u = e), t);
              },
              s
            )
          );
        };
      return o(t, n, Yl)
        .bind(function (e) {
          return r ? o(e.container, e.offset + (a ? -1 : 0), Gl) : B.some(e);
        })
        .orThunk(function () {
          return u
            ? B.some({ container: u, offset: a ? 0 : u.length })
            : B.none();
        });
    },
    Ql = function (e, t, n, r, o) {
      En(r) && 0 === r.nodeValue.length && r[o] && (r = r[o]);
      for (var i = ql(e, r), a = 0; a < i.length; a++)
        for (var u = 0; u < t.length; u++) {
          var s = t[u];
          if (
            !("collapsed" in s && s.collapsed !== n.collapsed) &&
            e.is(i[a], s.selector)
          )
            return i[a];
        }
      return r;
    },
    Zl = function (t, e, n, r) {
      var o,
        i = t.dom,
        a = i.getRoot();
      if ((e[0].wrapper || (o = i.getParent(n, e[0].block, a)), !o)) {
        var u = i.getParent(n, "LI,TD,TH");
        o = i.getParent(
          En(n) ? n.parentNode : n,
          function (e) {
            return e !== a && Wl(t, e);
          },
          u
        );
      }
      if ((o && e[0].wrapper && (o = ql(i, o, "ul,ol").reverse()[0] || o), !o))
        for (o = n; o[r] && !i.isBlock(o[r]) && ((o = o[r]), !Ml(o, "br")); );
      return o || n;
    },
    ef = function (e, t, n, r, o, i, a) {
      var u, s, c;
      u = s = a ? n : o;
      var l,
        f = a ? "previousSibling" : "nextSibling",
        d = e.getRoot();
      if (En(u) && !$l(u) && (a ? 0 < r : i < u.nodeValue.length)) return u;
      for (;;) {
        if (!t[0].block_expand && e.isBlock(s)) return s;
        for (c = s[f]; c; c = c[f])
          if (
            !Vl(c) &&
            !$l(c) &&
            ("BR" !== (l = c).nodeName ||
              !l.getAttribute("data-mce-bogus") ||
              l.nextSibling)
          )
            return s;
        if (s === d || s.parentNode === d) {
          u = s;
          break;
        }
        s = s.parentNode;
      }
      return u;
    },
    tf = function (e, t, n, r) {
      void 0 === r && (r = !1);
      var o = t.startContainer,
        i = t.startOffset,
        a = t.endContainer,
        u = t.endOffset,
        s = e.dom;
      vn(o) && o.hasChildNodes() && ((o = Hu(o, i)), En(o) && (i = 0)),
        vn(a) &&
          a.hasChildNodes() &&
          ((a = Hu(a, t.collapsed ? u : u - 1)),
          En(a) && (u = a.nodeValue.length)),
        (o = Kl(s, o)),
        (a = Kl(s, a)),
        (Vl(o.parentNode) || Vl(o)) &&
          ((o = Vl(o) ? o : o.parentNode),
          (o = t.collapsed ? o.previousSibling || o : o.nextSibling || o),
          En(o) && (i = t.collapsed ? o.length : 0)),
        (Vl(a.parentNode) || Vl(a)) &&
          ((a = Vl(a) ? a : a.parentNode),
          (a = t.collapsed ? a.nextSibling || a : a.previousSibling || a),
          En(a) && (u = t.collapsed ? 0 : a.length)),
        t.collapsed &&
          (Jl(s, e.getBody(), o, i, !0, r).each(function (e) {
            var t = e.container,
              n = e.offset;
            (o = t), (i = n);
          }),
          Jl(s, e.getBody(), a, u, !1, r).each(function (e) {
            var t = e.container,
              n = e.offset;
            (a = t), (u = n);
          }));
      return (
        (n[0].inline || n[0].block_expand) &&
          ((n[0].inline && En(o) && 0 !== i) || (o = ef(s, n, o, i, a, u, !0)),
          (n[0].inline && En(a) && u !== a.nodeValue.length) ||
            (a = ef(s, n, o, i, a, u, !1))),
        n[0].selector &&
          !1 !== n[0].expand &&
          !n[0].inline &&
          ((o = Ql(s, n, t, o, "previousSibling")),
          (a = Ql(s, n, t, a, "nextSibling"))),
        (n[0].block || n[0].selector) &&
          ((o = Zl(e, n, o, "previousSibling")),
          (a = Zl(e, n, a, "nextSibling")),
          n[0].block &&
            (s.isBlock(o) || (o = ef(s, n, o, i, a, u, !0)),
            s.isBlock(a) || (a = ef(s, n, o, i, a, u, !1)))),
        vn(o) && ((i = s.nodeIndex(o)), (o = o.parentNode)),
        vn(a) && ((u = s.nodeIndex(a) + 1), (a = a.parentNode)),
        { startContainer: o, startOffset: i, endContainer: a, endOffset: u }
      );
    },
    nf = function (e, t) {
      var n = e.childNodes;
      return t >= n.length ? (t = n.length - 1) : t < 0 && (t = 0), n[t] || e;
    },
    rf = function (e, t, u) {
      var n = t.startContainer,
        r = t.startOffset,
        o = t.endContainer,
        i = t.endOffset,
        s = function (e) {
          var t;
          return (
            3 === (t = e[0]).nodeType &&
              t === n &&
              r >= t.nodeValue.length &&
              e.splice(0, 1),
            (t = e[e.length - 1]),
            0 === i &&
              0 < e.length &&
              t === o &&
              3 === t.nodeType &&
              e.splice(e.length - 1, 1),
            e
          );
        },
        c = function (e, t, n) {
          for (var r = []; e && e !== n; e = e[t]) r.push(e);
          return r;
        },
        a = function (e, t) {
          do {
            if (e.parentNode === t) return e;
            e = e.parentNode;
          } while (e);
        },
        l = function (e, t, n) {
          for (
            var r = n ? "nextSibling" : "previousSibling",
              o = e,
              i = o.parentNode;
            o && o !== t;
            o = i
          ) {
            i = o.parentNode;
            var a = c(o === e ? o : o[r], r);
            a.length && (n || a.reverse(), u(s(a)));
          }
        };
      if (
        (1 === n.nodeType && n.hasChildNodes() && (n = nf(n, r)),
        1 === o.nodeType && o.hasChildNodes() && (o = nf(o, i - 1)),
        n === o)
      )
        return u(s([n]));
      for (var f = e.findCommonAncestor(n, o), d = n; d; d = d.parentNode) {
        if (d === o) return l(n, f, !0);
        if (d === f) break;
      }
      for (d = o; d; d = d.parentNode) {
        if (d === n) return l(o, f);
        if (d === f) break;
      }
      var m = a(n, f) || n,
        p = a(o, f) || o;
      l(n, m, !0);
      var g = c(
        m === n ? m : m.nextSibling,
        "nextSibling",
        p === o ? p.nextSibling : p
      );
      g.length && u(s(g)), l(o, p);
    },
    of = function (e) {
      var t = [];
      if (e) for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
      return t;
    },
    af = function (e) {
      return H(
        Y(e, function (e) {
          var t = ju(e);
          return t ? [Ct.fromDom(t)] : [];
        }),
        tr
      );
    },
    uf = function (e, t) {
      var n = Ya(t, "td[data-mce-selected],th[data-mce-selected]");
      return 0 < n.length ? n : af(e);
    },
    sf = function (e) {
      return uf(of(e.selection.getSel()), Ct.fromDom(e.getBody()));
    },
    cf = function (t) {
      return qt(t).fold(x([t]), function (e) {
        return [t].concat(cf(e));
      });
    },
    lf = function (t) {
      return $t(t).fold(x([t]), function (e) {
        return "br" === wt(e)
          ? Ft(e)
              .map(function (e) {
                return [t].concat(lf(e));
              })
              .getOr([])
          : [t].concat(lf(e));
      });
    },
    ff = function (o, e) {
      return Bu(
        ((a = (i = e).startContainer),
        (u = i.startOffset),
        En(a)
          ? 0 === u
            ? B.some(Ct.fromDom(a))
            : B.none()
          : B.from(a.childNodes[u]).map(Ct.fromDom)),
        ((n = (t = e).endContainer),
        (r = t.endOffset),
        En(n)
          ? r === n.data.length
            ? B.some(Ct.fromDom(n))
            : B.none()
          : B.from(n.childNodes[r - 1]).map(Ct.fromDom)),
        function (e, t) {
          var n = K(cf(o), N(Dt, e)),
            r = K(lf(o), N(Dt, t));
          return n.isSome() && r.isSome();
        }
      ).getOr(!1);
      var t, n, r, i, a, u;
    },
    df = function (e, t, n, r) {
      var o = n,
        i = new Ai(n, o),
        a = e.schema.getNonEmptyElements();
      do {
        if (3 === n.nodeType && 0 !== yt.trim(n.nodeValue).length)
          return void (r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
        if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName))
          return void (r
            ? t.setStartBefore(n)
            : "BR" === n.nodeName
            ? t.setEndBefore(n)
            : t.setEndAfter(n));
      } while ((n = r ? i.next() : i.prev()));
      "BODY" === o.nodeName &&
        (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
    },
    mf = function (e) {
      var t = e.selection.getSel();
      return t && 0 < t.rangeCount;
    },
    pf = function (r, o) {
      var e = sf(r);
      0 < e.length
        ? z(e, function (e) {
            var t = e.dom(),
              n = r.dom.createRng();
            n.setStartBefore(t), n.setEndAfter(t), o(n, !0);
          })
        : o(r.selection.getRng(), !1);
    },
    gf = function (e, t, n) {
      var r = Vs(e, t);
      n(r), e.moveToBookmark(r);
    };
  var hf = (function IE(n, r) {
      var t = function (e) {
        return n(e) ? B.from(e.dom().nodeValue) : B.none();
      };
      return {
        get: function (e) {
          if (!n(e))
            throw new Error("Can only get " + r + " value of a " + r + " node");
          return t(e).getOr("");
        },
        getOption: t,
        set: function (e, t) {
          if (!n(e))
            throw new Error(
              "Can only set raw " + r + " value of a " + r + " node"
            );
          e.dom().nodeValue = t;
        },
      };
    })(Et, "text"),
    vf = function (e) {
      return hf.get(e);
    },
    yf = function (r, o, i, a) {
      return Mt(o).fold(
        function () {
          return "skipping";
        },
        function (e) {
          return "br" === a || (Et((n = o)) && vf(n) === Ar)
            ? "valid"
            : Nt((t = o)) && Ka(t, ru())
            ? "existing"
            : gl(o)
            ? "caret"
            : Pl(r, i, a) && Pl(r, wt(e), i)
            ? "valid"
            : "invalid-child";
          var t, n;
        }
      );
    },
    bf = function (e, t, n, r) {
      var o = t.uid,
        i = void 0 === o ? fu("mce-annotation") : o,
        a = (function p(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        })(t, ["uid"]),
        u = Ct.fromTag("span", e);
      $a(u, ru()), Pn(u, "" + iu(), i), Pn(u, "" + ou(), n);
      var s,
        c = r(i, a),
        l = c.attributes,
        f = void 0 === l ? {} : l,
        d = c.classes,
        m = void 0 === d ? [] : d;
      return (
        Ln(u, f),
        (s = u),
        z(m, function (e) {
          $a(s, e);
        }),
        u
      );
    },
    Cf = function (i, e, t, n, r) {
      var a = [],
        u = bf(i.getDoc(), r, t, n),
        s = Oa(B.none()),
        c = function () {
          s.set(B.none());
        },
        l = function (e) {
          z(e, o);
        },
        o = function (e) {
          var t, n;
          switch (yf(i, e, "span", wt(e))) {
            case "invalid-child":
              c();
              var r = Ht(e);
              l(r), c();
              break;
            case "valid":
              var o = s.get().getOrThunk(function () {
                var e = pu(u);
                return a.push(e), s.set(B.some(e)), e;
              });
              Gt((t = e), (n = o)), Zt(n, t);
          }
        };
      return (
        rf(i.dom, e, function (e) {
          var t;
          c(), (t = U(e, Ct.fromDom)), l(t);
        }),
        a
      );
    },
    wf = function (u, s, c, l) {
      u.undoManager.transact(function () {
        var e,
          t,
          n,
          r = u.selection,
          o = r.getRng(),
          i = 0 < sf(u).length;
        if (
          (o.collapsed &&
            !i &&
            ((n = tf((e = u), (t = o), [{ inline: !0 }])),
            t.setStart(n.startContainer, n.startOffset),
            t.setEnd(n.endContainer, n.endOffset),
            e.selection.setRng(t)),
          r.getRng().collapsed && !i)
        ) {
          var a = bf(u.getDoc(), l, s, c.decorate);
          du(a, Dr), r.getRng().insertNode(a.dom()), r.select(a.dom());
        } else
          gf(r, !1, function () {
            pf(u, function (e) {
              Cf(u, e, s, c.decorate, l);
            });
          });
      });
    },
    xf = function (u) {
      var n,
        r =
          ((n = {}),
          {
            register: function (e, t) {
              n[e] = { name: e, settings: t };
            },
            lookup: function (e) {
              return n.hasOwnProperty(e)
                ? B.from(n[e]).map(function (e) {
                    return e.settings;
                  })
                : B.none();
            },
          });
      cu(u, r);
      var o = su(u);
      return {
        register: function (e, t) {
          r.register(e, t);
        },
        annotate: function (t, n) {
          r.lookup(t).each(function (e) {
            wf(u, t, e, n);
          });
        },
        annotationChanged: function (e, t) {
          o.addListener(e, t);
        },
        remove: function (e) {
          au(u, B.some(e)).each(function (e) {
            var t = e.elements;
            z(t, rn);
          });
        },
        getAll: function (e) {
          var t,
            n,
            r,
            o,
            i,
            a =
              ((t = u),
              (n = e),
              (r = Ct.fromDom(t.getBody())),
              (o = Ya(r, "[" + ou() + '="' + n + '"]')),
              (i = {}),
              z(o, function (e) {
                var t = In(e, iu()),
                  n = i.hasOwnProperty(t) ? i[t] : [];
                i[t] = n.concat([e]);
              }),
              i);
          return ie(a, function (e) {
            return U(e, function (e) {
              return e.dom();
            });
          });
        },
      };
    },
    Sf = /^[ \t\r\n]*$/,
    Nf = {
      "#text": 3,
      "#comment": 8,
      "#cdata": 4,
      "#pi": 7,
      "#doctype": 10,
      "#document-fragment": 11,
    },
    Ef = function (e, t, n) {
      var r = n ? "lastChild" : "firstChild",
        o = n ? "prev" : "next";
      if (e[r]) return e[r];
      if (e !== t) {
        var i = e[o];
        if (i) return i;
        for (var a = e.parent; a && a !== t; a = a.parent)
          if ((i = a[o])) return i;
      }
    },
    kf = function (e) {
      if (!Sf.test(e.value)) return !1;
      var t = e.parent;
      return (
        !t || ("span" === t.name && !t.attr("style")) || !/^[ ]+$/.test(e.value)
      );
    },
    _f = function (e) {
      var t = "a" === e.name && !e.attr("href") && e.attr("id");
      return (
        e.attr("name") ||
        (e.attr("id") && !e.firstChild) ||
        e.attr("data-mce-bookmark") ||
        t
      );
    },
    Tf =
      ((Rf.create = function (e, t) {
        var n = new Rf(e, Nf[e] || 1);
        return (
          t &&
            oe(t, function (e, t) {
              n.attr(t, e);
            }),
          n
        );
      }),
      (Rf.prototype.replace = function (e) {
        return (
          e.parent && e.remove(), this.insert(e, this), this.remove(), this
        );
      }),
      (Rf.prototype.attr = function (e, t) {
        var n,
          r = this;
        if ("string" != typeof e)
          return (
            e !== undefined &&
              null !== e &&
              oe(e, function (e, t) {
                r.attr(t, e);
              }),
            r
          );
        if ((n = r.attributes)) {
          if (t === undefined) return n.map[e];
          if (null === t) {
            if (e in n.map) {
              delete n.map[e];
              for (var o = n.length; o--; )
                if (n[o].name === e) return n.splice(o, 1), r;
            }
            return r;
          }
          if (e in n.map) {
            for (o = n.length; o--; )
              if (n[o].name === e) {
                n[o].value = t;
                break;
              }
          } else n.push({ name: e, value: t });
          return (n.map[e] = t), r;
        }
      }),
      (Rf.prototype.clone = function () {
        var e,
          t = new Rf(this.name, this.type);
        if ((e = this.attributes)) {
          var n = [];
          n.map = {};
          for (var r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            "id" !== i.name &&
              ((n[n.length] = { name: i.name, value: i.value }),
              (n.map[i.name] = i.value));
          }
          t.attributes = n;
        }
        return (t.value = this.value), (t.shortEnded = this.shortEnded), t;
      }),
      (Rf.prototype.wrap = function (e) {
        return this.parent.insert(e, this), e.append(this), this;
      }),
      (Rf.prototype.unwrap = function () {
        for (var e = this.firstChild; e; ) {
          var t = e.next;
          this.insert(e, this, !0), (e = t);
        }
        this.remove();
      }),
      (Rf.prototype.remove = function () {
        var e = this.parent,
          t = this.next,
          n = this.prev;
        return (
          e &&
            (e.firstChild === this
              ? (e.firstChild = t) && (t.prev = null)
              : (n.next = t),
            e.lastChild === this
              ? (e.lastChild = n) && (n.next = null)
              : (t.prev = n),
            (this.parent = this.next = this.prev = null)),
          this
        );
      }),
      (Rf.prototype.append = function (e) {
        e.parent && e.remove();
        var t = this.lastChild;
        return (
          t
            ? (((t.next = e).prev = t), (this.lastChild = e))
            : (this.lastChild = this.firstChild = e),
          (e.parent = this),
          e
        );
      }),
      (Rf.prototype.insert = function (e, t, n) {
        e.parent && e.remove();
        var r = t.parent || this;
        return (
          n
            ? (t === r.firstChild ? (r.firstChild = e) : (t.prev.next = e),
              (e.prev = t.prev),
              ((e.next = t).prev = e))
            : (t === r.lastChild ? (r.lastChild = e) : (t.next.prev = e),
              (e.next = t.next),
              ((e.prev = t).next = e)),
          (e.parent = r),
          e
        );
      }),
      (Rf.prototype.getAll = function (e) {
        for (var t = [], n = this.firstChild; n; n = Ef(n, this))
          n.name === e && t.push(n);
        return t;
      }),
      (Rf.prototype.empty = function () {
        if (this.firstChild) {
          for (var e = [], t = this.firstChild; t; t = Ef(t, this)) e.push(t);
          for (var n = e.length; n--; )
            (t =
              e[
                n
              ]).parent = t.firstChild = t.lastChild = t.next = t.prev = null;
        }
        return (this.firstChild = this.lastChild = null), this;
      }),
      (Rf.prototype.isEmpty = function (e, t, n) {
        void 0 === t && (t = {});
        var r = this.firstChild;
        if (_f(this)) return !1;
        if (r)
          do {
            if (1 === r.type) {
              if (r.attr("data-mce-bogus")) continue;
              if (e[r.name]) return !1;
              if (_f(r)) return !1;
            }
            if (8 === r.type) return !1;
            if (3 === r.type && !kf(r)) return !1;
            if (
              3 === r.type &&
              r.parent &&
              t[r.parent.name] &&
              Sf.test(r.value)
            )
              return !1;
            if (n && n(r)) return !1;
          } while ((r = Ef(r, this)));
        return !0;
      }),
      (Rf.prototype.walk = function (e) {
        return Ef(this, null, e);
      }),
      Rf);
  function Rf(e, t) {
    (this.name = e),
      1 === (this.type = t) &&
        ((this.attributes = []), (this.attributes.map = {}));
  }
  var Af = yt.makeMap,
    Df = function (e) {
      var u = [],
        s = (e = e || {}).indent,
        c = Af(e.indent_before || ""),
        l = Af(e.indent_after || ""),
        f = yr.getEncodeFunc(e.entity_encoding || "raw", e.entities),
        d = "html" === e.element_format;
      return {
        start: function (e, t, n) {
          var r, o, i, a;
          if (
            (s &&
              c[e] &&
              0 < u.length &&
              0 < (a = u[u.length - 1]).length &&
              "\n" !== a &&
              u.push("\n"),
            u.push("<", e),
            t)
          )
            for (r = 0, o = t.length; r < o; r++)
              (i = t[r]), u.push(" ", i.name, '="', f(i.value, !0), '"');
          (u[u.length] = !n || d ? ">" : " />"),
            n &&
              s &&
              l[e] &&
              0 < u.length &&
              0 < (a = u[u.length - 1]).length &&
              "\n" !== a &&
              u.push("\n");
        },
        end: function (e) {
          var t;
          u.push("</", e, ">"),
            s &&
              l[e] &&
              0 < u.length &&
              0 < (t = u[u.length - 1]).length &&
              "\n" !== t &&
              u.push("\n");
        },
        text: function (e, t) {
          0 < e.length && (u[u.length] = t ? e : f(e));
        },
        cdata: function (e) {
          u.push("<![CDATA[", e, "]]>");
        },
        comment: function (e) {
          u.push("\x3c!--", e, "--\x3e");
        },
        pi: function (e, t) {
          t ? u.push("<?", e, " ", f(t), "?>") : u.push("<?", e, "?>"),
            s && u.push("\n");
        },
        doctype: function (e) {
          u.push("<!DOCTYPE", e, ">", s ? "\n" : "");
        },
        reset: function () {
          u.length = 0;
        },
        getContent: function () {
          return u.join("").replace(/\n$/, "");
        },
      };
    },
    Of = function (t, p) {
      void 0 === p && (p = Rr());
      var g = Df(t);
      (t = t || {}).validate = !("validate" in t) || t.validate;
      return {
        serialize: function (e) {
          var f = t.validate,
            d = {
              3: function (e) {
                g.text(e.value, e.raw);
              },
              8: function (e) {
                g.comment(e.value);
              },
              7: function (e) {
                g.pi(e.name, e.value);
              },
              10: function (e) {
                g.doctype(e.value);
              },
              4: function (e) {
                g.cdata(e.value);
              },
              11: function (e) {
                if ((e = e.firstChild)) for (; m(e), (e = e.next); );
              },
            };
          g.reset();
          var m = function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              u,
              s,
              c,
              l = d[e.type];
            if (l) l(e);
            else {
              if (
                ((t = e.name),
                (n = e.shortEnded),
                (r = e.attributes),
                f &&
                  r &&
                  1 < r.length &&
                  (((a = []).map = {}), (c = p.getElementRule(e.name))))
              ) {
                for (u = 0, s = c.attributesOrder.length; u < s; u++)
                  (o = c.attributesOrder[u]) in r.map &&
                    ((i = r.map[o]),
                    (a.map[o] = i),
                    a.push({ name: o, value: i }));
                for (u = 0, s = r.length; u < s; u++)
                  (o = r[u].name) in a.map ||
                    ((i = r.map[o]),
                    (a.map[o] = i),
                    a.push({ name: o, value: i }));
                r = a;
              }
              if ((g.start(e.name, r, n), !n)) {
                if ((e = e.firstChild)) for (; m(e), (e = e.next); );
                g.end(t);
              }
            }
          };
          return 1 !== e.type || t.inner ? d[11](e) : m(e), g.getContent();
        },
      };
    },
    Bf = function (e, t) {
      return e.replace(new RegExp(t.prefix + "_[0-9]+", "g"), function (e) {
        return de(t.uris, e).getOr(e);
      });
    },
    Pf = function (e, t, n) {
      var r,
        o,
        i = 1,
        a = e.getShortEndedElements(),
        u = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g;
      for (u.lastIndex = r = n; (o = u.exec(t)); ) {
        if (((r = u.lastIndex), "/" === o[1])) i--;
        else if (!o[1]) {
          if (o[2] in a) continue;
          i++;
        }
        if (0 === i) break;
      }
      return r;
    },
    Lf = function (e, t) {
      var n = e.exec(t);
      if (n) {
        var r = n[1],
          o = n[2];
        return "string" == typeof r && "data-mce-bogus" === r.toLowerCase()
          ? o
          : null;
      }
      return null;
    };
  function If(W, K) {
    void 0 === K && (K = Rr());
    var e = function () {};
    !1 !== (W = W || {}).fix_self_closing && (W.fix_self_closing = !0);
    var X = W.comment ? W.comment : e,
      Y = W.cdata ? W.cdata : e,
      G = W.text ? W.text : e,
      J = W.start ? W.start : e,
      Q = W.end ? W.end : e,
      Z = W.pi ? W.pi : e,
      ee = W.doctype ? W.doctype : e,
      n = function (m, e) {
        void 0 === e && (e = "html");
        for (
          var t,
            n,
            r,
            p,
            o,
            i,
            a,
            g,
            u,
            s,
            c,
            l,
            f,
            h,
            v,
            d,
            y,
            b,
            C,
            w = m.html,
            x = 0,
            S = [],
            N = 0,
            E = yr.decode,
            k = yt.makeMap(
              "src,href,data,background,formaction,poster,xlink:href"
            ),
            _ = /((java|vb)script|mhtml):/i,
            T = "html" === e ? 0 : 1,
            R = function (e) {
              var t, n;
              for (t = S.length; t-- && S[t].name !== e; );
              if (0 <= t) {
                for (n = S.length - 1; t <= n; n--)
                  (e = S[n]).valid && Q(e.name);
                S.length = t;
              }
            },
            A = function (e, t) {
              return G(Bf(e, m), t);
            },
            D = function (e) {
              "" !== e &&
                (">" === e.charAt(0) && (e = " " + e),
                W.allow_conditional_comments ||
                  "[if" !== e.substr(0, 3).toLowerCase() ||
                  (e = " " + e),
                X(Bf(e, m)));
            },
            O = function (e, t) {
              var n = e || "",
                r = !$e(n, "--"),
                o = (function (e, t, n) {
                  void 0 === n && (n = 0);
                  var r = e.toLowerCase();
                  if (
                    -1 !== r.indexOf("[if ", n) &&
                    ((u = n),
                    /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(
                      r.substr(u)
                    ))
                  ) {
                    var o = r.indexOf("[endif]", n);
                    return r.indexOf(">", o);
                  }
                  if (t) {
                    var i = r.indexOf(">", n);
                    return -1 !== i ? i : r.length;
                  }
                  var a = /--!?>/;
                  a.lastIndex = n;
                  var u,
                    s = a.exec(e);
                  return s ? s.index + s[0].length : r.length;
                })(w, r, t);
              return (e = w.substr(t, o - t)), D(r ? n + e : e), o + 1;
            },
            B = function (e, t, n, r, o) {
              var i, a, u, s, c, l;
              if (
                ((t = t.toLowerCase()),
                (u = (t in F) ? t : E(n || r || o || "")),
                (n = de(m.uris, u).getOr(u)),
                U &&
                  !g &&
                  !1 ==
                    (0 === (s = t).indexOf("data-") ||
                      0 === s.indexOf("aria-")))
              ) {
                if (!(i = h[t]) && v) {
                  for (a = v.length; a-- && !(i = v[a]).pattern.test(t); );
                  -1 === a && (i = null);
                }
                if (!i) return;
                if (i.validValues && !(n in i.validValues)) return;
              }
              if (k[t] && !W.allow_script_urls) {
                var f = n.replace(/[\s\u0000-\u001F]+/g, "");
                try {
                  f = decodeURIComponent(f);
                } catch (d) {
                  f = unescape(f);
                }
                if (_.test(f)) return;
                if (
                  ((l = f),
                  !(c = W).allow_html_data_urls &&
                    (/^data:image\//i.test(l)
                      ? !1 === c.allow_svg_data_urls &&
                        /^data:image\/svg\+xml/i.test(l)
                      : /^data:/i.test(l)))
                )
                  return;
              }
              (g && ((t in k) || 0 === t.indexOf("on"))) ||
                ((p.map[t] = n), p.push({ name: t, value: n }));
            },
            P = new RegExp(
              "<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))",
              "g"
            ),
            L = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,
            I = K.getShortEndedElements(),
            M = W.self_closing_elements || K.getSelfClosingElements(),
            F = K.getBoolAttrs(),
            U = W.validate,
            z = W.remove_internals,
            j = W.fix_self_closing,
            H = K.getSpecialElements(),
            V = w + ">";
          (t = P.exec(V));

        ) {
          var q = t[0];
          if ((x < t.index && A(E(w.substr(x, t.index - x))), (n = t[7])))
            ":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), R(n);
          else if ((n = t[8])) {
            if (t.index + q.length > w.length) {
              A(E(w.substr(t.index))), (x = t.index + q.length);
              continue;
            }
            ":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)),
              (u = n in I),
              j && M[n] && 0 < S.length && S[S.length - 1].name === n && R(n);
            var $ = Lf(L, t[9]);
            if (null !== $) {
              if ("all" === $) {
                (x = Pf(K, w, P.lastIndex)), (P.lastIndex = x);
                continue;
              }
              c = !1;
            }
            if (!U || (s = K.getElementRule(n))) {
              if (
                ((c = !0),
                U && ((h = s.attributes), (v = s.attributePatterns)),
                (f = t[9])
                  ? ((g = -1 !== f.indexOf("data-mce-type")) && z && (c = !1),
                    ((p = []).map = {}),
                    f.replace(L, B))
                  : ((p = []).map = {}),
                U && !g)
              ) {
                if (
                  ((d = s.attributesRequired),
                  (y = s.attributesDefault),
                  (b = s.attributesForced),
                  s.removeEmptyAttrs && !p.length && (c = !1),
                  b)
                )
                  for (o = b.length; o--; )
                    (a = (l = b[o]).name),
                      "{$uid}" === (C = l.value) && (C = "mce_" + N++),
                      (p.map[a] = C),
                      p.push({ name: a, value: C });
                if (y)
                  for (o = y.length; o--; )
                    (a = (l = y[o]).name) in p.map ||
                      ("{$uid}" === (C = l.value) && (C = "mce_" + N++),
                      (p.map[a] = C),
                      p.push({ name: a, value: C }));
                if (d) {
                  for (o = d.length; o-- && !(d[o] in p.map); );
                  -1 === o && (c = !1);
                }
                if ((l = p.map["data-mce-bogus"])) {
                  if ("all" === l) {
                    (x = Pf(K, w, P.lastIndex)), (P.lastIndex = x);
                    continue;
                  }
                  c = !1;
                }
              }
              c && J(n, p, u);
            } else c = !1;
            if ((r = H[n])) {
              (r.lastIndex = x = t.index + q.length),
                (x = (t = r.exec(w))
                  ? (c && (i = w.substr(x, t.index - x)), t.index + t[0].length)
                  : ((i = w.substr(x)), w.length)),
                c && (0 < i.length && A(i, !0), Q(n)),
                (P.lastIndex = x);
              continue;
            }
            u ||
              (f && f.indexOf("/") === f.length - 1
                ? c && Q(n)
                : S.push({ name: n, valid: c }));
          } else if ((n = t[1])) D(n);
          else if ((n = t[2])) {
            if (
              !(
                1 == T ||
                W.preserve_cdata ||
                (0 < S.length && K.isValidChild(S[S.length - 1].name, "#cdata"))
              )
            ) {
              (x = O("", t.index + 2)), (P.lastIndex = x);
              continue;
            }
            Y(n);
          } else if ((n = t[3])) ee(n);
          else {
            if ((n = t[4]) || "<!" === q) {
              (x = O(n, t.index + q.length)), (P.lastIndex = x);
              continue;
            }
            if ((n = t[5])) {
              if (1 != T) {
                (x = O("?", t.index + 2)), (P.lastIndex = x);
                continue;
              }
              Z(n, t[6]);
            }
          }
          x = t.index + q.length;
        }
        for (x < w.length && A(E(w.substr(x))), o = S.length - 1; 0 <= o; o--)
          (n = S[o]).valid && Q(n.name);
      };
    return {
      parse: function (e, t) {
        void 0 === t && (t = "html"),
          n(
            (function (e) {
              for (
                var t,
                  n = /data:[^;]+;base64,([a-z0-9\+\/=]+)/gi,
                  r = [],
                  o = {},
                  i = fu("img"),
                  a = 0,
                  u = 0;
                (t = n.exec(e));

              ) {
                var s = t[0],
                  c = i + "_" + u++;
                (o[c] = s),
                  a < t.index && r.push(e.substr(a, t.index - a)),
                  r.push(c),
                  (a = t.index + s.length);
              }
              return 0 === a
                ? { prefix: i, uris: o, html: e }
                : (a < e.length && r.push(e.substr(a)),
                  { prefix: i, uris: o, html: r.join("") });
            })(e),
            t
          );
      },
    };
  }
  (If = If || {}).findEndTag = Pf;
  var Mf,
    Ff,
    Uf,
    zf,
    jf,
    Hf = If,
    Vf = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        u,
        s,
        c = t,
        l = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
        f = e.schema;
      (a = e.getTempAttrs()),
        (u = c),
        (s = new RegExp(["\\s?(" + a.join("|") + ')="[^"]+"'].join("|"), "gi")),
        (c = u.replace(s, ""));
      for (var d = f.getShortEndedElements(); (i = l.exec(c)); )
        (r = l.lastIndex),
          (o = i[0].length),
          (n = d[i[1]] ? r : Hf.findEndTag(f, c, r)),
          (c = c.substring(0, r - o) + c.substring(n)),
          (l.lastIndex = r - o);
      return Cu(c);
    },
    qf = Vf,
    $f = function (e, t, n, r) {
      var o, i, a, u, s;
      if (
        ((t.format = n),
        (t.get = !0),
        (t.getInner = !0),
        t.no_events || e.fire("BeforeGetContent", t),
        "raw" === t.format)
      )
        o = yt.trim(qf(e.serializer, r.innerHTML));
      else if ("text" === t.format) o = Cu(r.innerText || r.textContent);
      else {
        if ("tree" === t.format) return e.serializer.serialize(r, t);
        (a = (i = e).serializer.serialize(r, t)),
          (u = Ys(i)),
          (s = new RegExp(
            "^(<" +
              u +
              "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" +
              u +
              ">[\r\n]*|<br \\/>[\r\n]*)$"
          )),
          (o = a.replace(s, ""));
      }
      return (
        "text" === t.format || nr(Ct.fromDom(r))
          ? (t.content = o)
          : (t.content = yt.trim(o)),
        t.no_events || e.fire("GetContent", t),
        t.content
      );
    },
    Wf = yt.each,
    Kf = function (o) {
      this.compare = function (e, t) {
        if (e.nodeName !== t.nodeName) return !1;
        var n = function (n) {
            var r = {};
            return (
              Wf(o.getAttribs(n), function (e) {
                var t = e.nodeName.toLowerCase();
                0 !== t.indexOf("_") &&
                  "style" !== t &&
                  0 !== t.indexOf("data-") &&
                  (r[t] = o.getAttrib(n, t));
              }),
              r
            );
          },
          r = function (e, t) {
            var n, r;
            for (r in e)
              if (e.hasOwnProperty(r)) {
                if (void 0 === (n = t[r])) return !1;
                if (e[r] !== n) return !1;
                delete t[r];
              }
            for (r in t) if (t.hasOwnProperty(r)) return !1;
            return !0;
          };
        return (
          !!r(n(e), n(t)) &&
          !!r(
            o.parseStyle(o.getAttrib(e, "style")),
            o.parseStyle(o.getAttrib(t, "style"))
          ) &&
          !kl(e) &&
          !kl(t)
        );
      };
    },
    Xf = function (n, r, o) {
      return B.from(o.container())
        .filter(En)
        .exists(function (e) {
          var t = n ? 0 : -1;
          return r(e.data.charAt(o.offset() + t));
        });
    },
    Yf = N(Xf, !0, Tl),
    Gf = N(Xf, !1, Tl),
    Jf = function (e) {
      var t = e.container();
      return En(t) && 0 === t.data.length;
    },
    Qf = function (t, n) {
      return function (e) {
        return B.from(Bc(t ? 0 : -1, e))
          .filter(n)
          .isSome();
      };
    },
    Zf = function (e) {
      return "IMG" === e.nodeName && "block" === Fn(Ct.fromDom(e), "display");
    },
    ed = function (e) {
      return (
        Dn(e) && !(vn((t = e)) && "all" === t.getAttribute("data-mce-bogus"))
      );
      var t;
    },
    td = Qf(!0, Zf),
    nd = Qf(!1, Zf),
    rd = Qf(!0, xn),
    od = Qf(!1, xn),
    id = Qf(!0, ed),
    ad = Qf(!1, ed),
    ud = function (e, t) {
      var n,
        r,
        o,
        i = Ct.fromDom(e),
        a = Ct.fromDom(t);
      return (n = a), (r = "pre,code"), (o = N(Dt, i)), eu(n, r, o).isSome();
    },
    sd = function (e, t) {
      return (
        (Zu(t) &&
          !1 ===
            ((r = e),
            En((o = t)) && /^[ \t\r\n]*$/.test(o.data) && !1 === ud(r, o))) ||
        (vn((n = t)) && "A" === n.nodeName && n.hasAttribute("name")) ||
        cd(t)
      );
      var n, r, o;
    },
    cd = Cn("data-mce-bookmark"),
    ld = Cn("data-mce-bogus"),
    fd =
      ((Mf = "data-mce-bogus"),
      (Ff = "all"),
      function (e) {
        return vn(e) && e.getAttribute(Mf) === Ff;
      }),
    dd = function (e, t) {
      return (
        void 0 === t && (t = !0),
        (function (e, t) {
          var n,
            r = 0;
          if (sd(e, e)) return !1;
          if (!(n = e.firstChild)) return !0;
          var o = new Ai(n, e);
          do {
            if (t) {
              if (fd(n)) {
                n = o.next(!0);
                continue;
              }
              if (ld(n)) {
                n = o.next();
                continue;
              }
            }
            if (Rn(n)) r++, (n = o.next());
            else {
              if (sd(e, n)) return !1;
              n = o.next();
            }
          } while (n);
          return r <= 1;
        })(e.dom(), t)
      );
    },
    md = function (e) {
      var t = Ya(e, "br"),
        n = H(
          (function (e) {
            for (var t = [], n = e.dom(); n; )
              t.push(Ct.fromDom(n)), (n = n.lastChild);
            return t;
          })(e).slice(-1),
          Yn
        );
      t.length === n.length && z(n, nn);
    },
    pd = function (e) {
      tn(e), Zt(e, Ct.fromHtml('<br data-mce-bogus="1">'));
    },
    gd = function (n) {
      $t(n).each(function (t) {
        Ft(t).each(function (e) {
          Kn(n) && Yn(t) && Kn(e) && nn(t);
        });
      });
    },
    hd = function (e, t, n) {
      return Bt(t, e)
        ? (function (e, t) {
            for (
              var n = A(t) ? t : g, r = e.dom(), o = [];
              null !== r.parentNode && r.parentNode !== undefined;

            ) {
              var i = r.parentNode,
                a = Ct.fromDom(i);
              if ((o.push(a), !0 === n(a))) break;
              r = i;
            }
            return o;
          })(e, function (e) {
            return n(e) || Dt(e, t);
          }).slice(0, -1)
        : [];
    },
    vd = function (e, t) {
      return hd(e, t, x(!1));
    },
    yd = function (e, t) {
      return [e].concat(vd(e, t));
    },
    bd = function (e, t, n) {
      if (0 !== n) {
        var r,
          o,
          i,
          a = e.data.slice(t, t + n),
          u = t + n >= e.data.length,
          s = 0 === t;
        e.replaceData(
          t,
          n,
          ((o = s),
          (i = u),
          W(
            (r = a),
            function (e, t) {
              return Tl(t) || _l(t)
                ? e.previousCharIsSpace ||
                  ("" === e.str && o) ||
                  (e.str.length === r.length - 1 && i)
                  ? { previousCharIsSpace: !1, str: e.str + Dr }
                  : { previousCharIsSpace: !0, str: e.str + " " }
                : { previousCharIsSpace: !1, str: e.str + t };
            },
            { previousCharIsSpace: !1, str: "" }
          ).str)
        );
      }
    },
    Cd = function (e, t) {
      var n = e.data.slice(t),
        r = n.length - Xe(n).length;
      return bd(e, t, r);
    },
    wd = function (e, t) {
      return (
        (r = e),
        (o = (n = t).container()),
        (i = n.offset()),
        !1 === Ss.isTextPosition(n) &&
        o === r.parentNode &&
        i > Ss.before(r).offset()
          ? Ss(t.container(), t.offset() - 1)
          : t
      );
      var n, r, o, i;
    },
    xd = function (e) {
      return Zu(e.previousSibling)
        ? B.some(
            ((t = e.previousSibling),
            En(t) ? Ss(t, t.data.length) : Ss.after(t))
          )
        : e.previousSibling
        ? ml(e.previousSibling)
        : B.none();
      var t;
    },
    Sd = function (e) {
      return Zu(e.nextSibling)
        ? B.some(((t = e.nextSibling), En(t) ? Ss(t, 0) : Ss.before(t)))
        : e.nextSibling
        ? dl(e.nextSibling)
        : B.none();
      var t;
    },
    Nd = function (r, o) {
      return xd(o)
        .orThunk(function () {
          return Sd(o);
        })
        .orThunk(function () {
          return (
            (e = r),
            (t = o),
            (n = Ss.before(
              t.previousSibling ? t.previousSibling : t.parentNode
            )),
            fl(e, n).fold(function () {
              return ll(e, Ss.after(t));
            }, B.some)
          );
          var e, t, n;
        });
    },
    Ed = function (n, r) {
      return Sd(r)
        .orThunk(function () {
          return xd(r);
        })
        .orThunk(function () {
          return (
            (t = r),
            ll((e = n), Ss.after(t)).fold(function () {
              return fl(e, Ss.before(t));
            }, B.some)
          );
          var e, t;
        });
    },
    kd = function (e, t, n) {
      return (e ? Ed : Nd)(t, n).map(N(wd, n));
    },
    _d = function (t, n, e) {
      e.fold(
        function () {
          t.focus();
        },
        function (e) {
          t.selection.setRng(e.toRange(), n);
        }
      );
    },
    Td = function (e, t) {
      return t && e.schema.getBlockElements().hasOwnProperty(wt(t));
    },
    Rd = function (e) {
      if (dd(e)) {
        var t = Ct.fromHtml('<br data-mce-bogus="1">');
        return tn(e), Zt(e, t), B.some(Ss.before(t.dom()));
      }
      return B.none();
    },
    Ad = function (e, t, l) {
      var n,
        r,
        o,
        i,
        a = Ft(e).filter(Et),
        u = Ut(e).filter(Et);
      return (
        nn(e),
        (r = u),
        (o = t),
        (i = function (e, t, n) {
          var r,
            o,
            i,
            a,
            u = e.dom(),
            s = t.dom(),
            c = u.data.length;
          return (
            (o = s),
            (i = l),
            (a = Ye((r = u).data).length),
            r.appendData(o.data),
            nn(Ct.fromDom(o)),
            i && Cd(r, a),
            n.container() === s ? Ss(u, c) : n
          );
        }),
        ((n = a).isSome() && r.isSome() && o.isSome()
          ? B.some(i(n.getOrDie(), r.getOrDie(), o.getOrDie()))
          : B.none()
        ).orThunk(function () {
          return (
            l &&
              (a.each(function (e) {
                return (
                  (t = e.dom()),
                  (n = e.dom().length),
                  (r = t.data.slice(0, n)),
                  (o = r.length - Ye(r).length),
                  bd(t, n - o, o)
                );
                var t, n, r, o;
              }),
              u.each(function (e) {
                return Cd(e.dom(), 0);
              })),
            t
          );
        })
      );
    },
    Dd = function (t, n, e, r) {
      void 0 === r && (r = !0);
      var o,
        i,
        a = kd(n, t.getBody(), e.dom()),
        u = Qa(
          e,
          N(Td, t),
          ((o = t.getBody()),
          function (e) {
            return e.dom() === o;
          })
        ),
        s = Ad(e, a, ((i = e), me(t.schema.getTextInlineElements(), wt(i))));
      t.dom.isEmpty(t.getBody())
        ? (t.setContent(""), t.selection.setCursorLocation())
        : u.bind(Rd).fold(
            function () {
              r && _d(t, n, s);
            },
            function (e) {
              r && _d(t, n, B.some(e));
            }
          );
    },
    Od = function (e, t) {
      return { start: e, end: t };
    },
    Bd = Qi([
      { removeTable: ["element"] },
      { emptyCells: ["cells"] },
      { deleteCellSelection: ["rng", "cell"] },
    ]),
    Pd = function (e, t) {
      return nu(Ct.fromDom(e), "td,th", t);
    },
    Ld = function (e, t) {
      return eu(e, "table", t);
    },
    Id = function (e) {
      return !Dt(e.start, e.end);
    },
    Md = function (e, t) {
      return Ld(e.start, t).bind(function (r) {
        return Ld(e.end, t).bind(function (e) {
          return (t = Dt(r, e)), (n = r), t ? B.some(n) : B.none();
          var t, n;
        });
      });
    },
    Fd = function (e) {
      return Ya(e, "td,th");
    },
    Ud = function (r, e) {
      var t = Pd(e.startContainer, r),
        n = Pd(e.endContainer, r);
      return e.collapsed
        ? B.none()
        : Bu(t, n, Od).fold(
            function () {
              return t.fold(
                function () {
                  return n.bind(function (t) {
                    return Ld(t, r).bind(function (e) {
                      return Z(Fd(e)).map(function (e) {
                        return Od(e, t);
                      });
                    });
                  });
                },
                function (t) {
                  return Ld(t, r).bind(function (e) {
                    return ee(Fd(e)).map(function (e) {
                      return Od(t, e);
                    });
                  });
                }
              );
            },
            function (e) {
              return zd(r, e)
                ? B.none()
                : ((n = r),
                  Ld((t = e).start, n).bind(function (e) {
                    return ee(Fd(e)).map(function (e) {
                      return Od(t.start, e);
                    });
                  }));
              var t, n;
            }
          );
    },
    zd = function (e, t) {
      return Md(t, e).isSome();
    },
    jd = function (e, t, n) {
      return e
        .filter(function (e) {
          return Id(e) && zd(n, e);
        })
        .orThunk(function () {
          return Ud(n, t);
        })
        .bind(function (e) {
          return Md((t = e), n).map(function (e) {
            return { rng: t, table: e, cells: Fd(e) };
          });
          var t;
        });
    },
    Hd = function (e, t) {
      return X(e, function (e) {
        return Dt(e, t);
      });
    },
    Vd = function (e, r, o) {
      return e
        .filter(function (e) {
          return (
            (n = o),
            !Id((t = e)) &&
              Md(t, n).exists(function (e) {
                var t = e.dom().rows;
                return 1 === t.length && 1 === t[0].cells.length;
              }) &&
              ff(e.start, r)
          );
          var t, n;
        })
        .map(function (e) {
          return e.start;
        });
    },
    qd = function (n) {
      return Bu(
        Hd((r = n).cells, r.rng.start),
        Hd(r.cells, r.rng.end),
        function (e, t) {
          return r.cells.slice(e, t + 1);
        }
      ).map(function (e) {
        var t = n.cells;
        return e.length === t.length
          ? Bd.removeTable(n.table)
          : Bd.emptyCells(e);
      });
      var r;
    },
    $d = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        u =
          ((n = e),
          function (e) {
            return Dt(n, e);
          }),
        s =
          ((o = u),
          (i = Pd((r = t).startContainer, o)),
          (a = Pd(r.endContainer, o)),
          Bu(i, a, Od));
      return Vd(s, t, u)
        .map(function (e) {
          return Bd.deleteCellSelection(t, e);
        })
        .orThunk(function () {
          return jd(s, t, u).bind(qd);
        });
    },
    Wd = function (e) {
      var t;
      return (8 === xt((t = e)) || "#comment" === wt(t) ? Ft : $t)(e)
        .bind(Wd)
        .orThunk(function () {
          return B.some(e);
        });
    },
    Kd = function (e, t) {
      return z(t, pd), e.selection.setCursorLocation(t[0].dom(), 0), !0;
    },
    Xd = function (e, t, n) {
      t.deleteContents();
      var r,
        o = Wd(n).getOr(n),
        i = Ct.fromDom(e.dom.getParent(o.dom(), e.dom.isBlock));
      if (
        (dd(i) && (pd(i), e.selection.setCursorLocation(i.dom(), 0)), !Dt(n, i))
      ) {
        var a = Mt(i).is(n)
          ? []
          : Mt((r = i))
              .map(Ht)
              .map(function (e) {
                return H(e, function (e) {
                  return !Dt(r, e);
                });
              })
              .getOr([]);
        z(a.concat(Ht(n)), function (e) {
          Dt(e, i) || Bt(e, i) || nn(e);
        });
      }
      return !0;
    },
    Yd = function (e, t) {
      return Dd(e, !1, t), !0;
    },
    Gd = function (n, e, r, t) {
      return Qd(e, t)
        .fold(
          function () {
            return (
              (t = n),
              $d(e, r).map(function (e) {
                return e.fold(N(Yd, t), N(Kd, t), N(Xd, t));
              })
            );
            var t;
          },
          function (e) {
            return Zd(n, e);
          }
        )
        .getOr(!1);
    },
    Jd = function (e, t) {
      return K(yd(t, e), tr);
    },
    Qd = function (e, t) {
      return K(yd(t, e), function (e) {
        return "caption" === wt(e);
      });
    },
    Zd = function (e, t) {
      return pd(t), e.selection.setCursorLocation(t.dom(), 0), B.some(!0);
    },
    em = function (u, s, c, l, f) {
      return ul(c, u.getBody(), f)
        .bind(function (e) {
          return (
            (o = c),
            (i = f),
            (a = e),
            dl((r = l).dom())
              .bind(function (t) {
                return ml(r.dom()).map(function (e) {
                  return o
                    ? i.isEqual(t) && a.isEqual(e)
                    : i.isEqual(e) && a.isEqual(t);
                });
              })
              .getOr(!0)
              ? Zd(u, l)
              : ((t = l),
                (n = e),
                Qd(s, Ct.fromDom(n.getNode())).map(function (e) {
                  return !1 === Dt(e, t);
                }))
          );
          var t, n, r, o, i, a;
        })
        .or(B.some(!0));
    },
    tm = function (o, i, a, e) {
      var u = Ss.fromRangeStart(o.selection.getRng());
      return Jd(a, e)
        .bind(function (e) {
          return dd(e)
            ? Zd(o, e)
            : ((t = a),
              (n = e),
              (r = u),
              ul(i, o.getBody(), r).bind(function (e) {
                return Jd(t, Ct.fromDom(e.getNode())).map(function (e) {
                  return !1 === Dt(e, n);
                });
              }));
          var t, n, r;
        })
        .getOr(!1);
    },
    nm = function (e, t) {
      return (e ? rd : od)(t);
    },
    rm = function (a, u, r) {
      var s = Ct.fromDom(a.getBody());
      return Qd(s, r).fold(
        function () {
          return (
            tm(a, u, s, r) ||
            ((e = a),
            (t = u),
            (n = Ss.fromRangeStart(e.selection.getRng())),
            nm(t, n) ||
              al(t, e.getBody(), n)
                .map(function (e) {
                  return nm(t, e);
                })
                .getOr(!1))
          );
          var e, t, n;
        },
        function (e) {
          return (
            (t = a),
            (n = u),
            (r = s),
            (o = e),
            (i = Ss.fromRangeStart(t.selection.getRng())),
            (dd(o) ? Zd(t, o) : em(t, r, n, o, i)).getOr(!1)
          );
          var t, n, r, o, i;
        }
      );
    },
    om = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        u = Ct.fromDom(e.selection.getStart(!0)),
        s = sf(e);
      return e.selection.isCollapsed() && 0 === s.length
        ? rm(e, t, u)
        : ((n = e),
          (r = u),
          (o = Ct.fromDom(n.getBody())),
          (i = n.selection.getRng()),
          0 !== (a = sf(n)).length ? Kd(n, a) : Gd(n, o, i, r));
    },
    im = function (a) {
      var u = Ss.fromRangeStart(a),
        s = Ss.fromRangeEnd(a),
        c = a.commonAncestorContainer;
      return al(!1, c, s)
        .map(function (e) {
          return !Oc(u, s, c) && Oc(u, e, c)
            ? ((t = u.container()),
              (n = u.offset()),
              (r = e.container()),
              (o = e.offset()),
              (i = V.document.createRange()).setStart(t, n),
              i.setEnd(r, o),
              i)
            : a;
          var t, n, r, o, i;
        })
        .getOr(a);
    },
    am = function (e) {
      return e.collapsed ? e : im(e);
    },
    um = function (e, t) {
      var n, r;
      return (
        e.getBlockElements()[t.name] &&
        (r = t).firstChild &&
        r.firstChild === r.lastChild &&
        ("br" === (n = t.firstChild).name || n.value === Dr)
      );
    },
    sm = function (e, t) {
      var n,
        r,
        o,
        i = t.firstChild,
        a = t.lastChild;
      return (
        i && "meta" === i.name && (i = i.next),
        a && "mce_marker" === a.attr("id") && (a = a.prev),
        (r = a),
        (o = (n = e).getNonEmptyElements()),
        r && (r.isEmpty(o) || um(n, r)) && (a = a.prev),
        !(!i || i !== a) && ("ul" === i.name || "ol" === i.name)
      );
    },
    cm = function (e) {
      return (
        e &&
        e.firstChild &&
        e.firstChild === e.lastChild &&
        ((t = e.firstChild).data === Dr || Rn(t))
      );
      var t;
    },
    lm = function (e) {
      return 0 < e.length && (!(t = e[e.length - 1]).firstChild || cm(t))
        ? e.slice(0, -1)
        : e;
      var t;
    },
    fm = function (e, t) {
      var n = e.getParent(t, e.isBlock);
      return n && "LI" === n.nodeName ? n : null;
    },
    dm = function (e, t) {
      var n = Ss.after(e),
        r = tl(t).prev(n);
      return r ? r.toRange() : null;
    },
    mm = function (t, e, n) {
      var r,
        o,
        i,
        a,
        u = t.parentNode;
      return (
        yt.each(e, function (e) {
          u.insertBefore(e, t);
        }),
        (r = t),
        (o = n),
        (i = Ss.before(r)),
        (a = tl(o).next(i)) ? a.toRange() : null
      );
    },
    pm = function (e, o, i, t) {
      var n,
        r,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        p,
        g,
        h,
        v,
        y,
        b,
        C,
        w,
        x,
        S,
        N =
          ((n = o),
          (r = t),
          (c = e.serialize(r)),
          (l = n.createFragment(c)),
          (u = (a = l).firstChild),
          (s = a.lastChild),
          u && "META" === u.nodeName && u.parentNode.removeChild(u),
          s && "mce_marker" === s.id && s.parentNode.removeChild(s),
          a),
        E = fm(o, i.startContainer),
        k = lm(
          ((f = N.firstChild),
          yt.grep(f.childNodes, function (e) {
            return "LI" === e.nodeName;
          }))
        ),
        _ = o.getRoot(),
        T = function (e) {
          var t = Ss.fromRangeStart(i),
            n = tl(o.getRoot()),
            r = 1 === e ? n.prev(t) : n.next(t);
          return !r || fm(o, r.getNode()) !== E;
        };
      return T(1)
        ? mm(E, k, _)
        : T(2)
        ? ((d = E),
          (m = k),
          (p = _),
          o.insertAfter(m.reverse(), d),
          dm(m[0], p))
        : ((h = k),
          (v = _),
          (y = g = E),
          (C = (b = i).cloneRange()),
          (w = b.cloneRange()),
          C.setStartBefore(y),
          w.setEndAfter(y),
          (x = [C.cloneContents(), w.cloneContents()]),
          (S = g.parentNode).insertBefore(x[0], g),
          yt.each(h, function (e) {
            S.insertBefore(e, g);
          }),
          S.insertBefore(x[1], g),
          S.removeChild(g),
          dm(h[h.length - 1], v));
    },
    gm = yn(["td", "th"]),
    hm = function (e, t) {
      var n,
        r,
        o = e.selection.getRng(),
        i = o.startContainer,
        a = o.startOffset;
      o.collapsed &&
        ((r = a), En((n = i)) && n.nodeValue[r - 1] === Dr) &&
        En(i) &&
        (i.insertData(a - 1, " "),
        i.deleteData(a, 1),
        o.setStart(i, a),
        o.setEnd(i, a),
        e.selection.setRng(o)),
        e.selection.setContent(t);
    },
    vm = function (e) {
      var t = e.dom,
        n = am(e.selection.getRng());
      e.selection.setRng(n);
      var r,
        o,
        i,
        a = t.getParent(n.startContainer, gm);
      (r = t),
        (o = n),
        null !== (i = a) &&
        i === r.getParent(o.endContainer, gm) &&
        ff(Ct.fromDom(i), o)
          ? Xd(e, n, Ct.fromDom(a))
          : e.getDoc().execCommand("Delete", !1, null);
    },
    ym = function (e, t, n) {
      var r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        p = e.selection,
        g = e.dom;
      /^ | $/.test(t) &&
        ((c = p.getRng()),
        (l = t),
        (f = c.startContainer),
        (d = c.startOffset),
        (m = function (e) {
          return f[e] && 3 === f[e].nodeType;
        }),
        En(f) &&
          (0 < d
            ? (l = l.replace(/^&nbsp;/, " "))
            : m("previousSibling") || (l = l.replace(/^ /, "&nbsp;")),
          d < f.length
            ? (l = l.replace(/&nbsp;(<br>|)$/, " "))
            : m("nextSibling") ||
              (l = l.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))),
        (t = l));
      var h = e.parser,
        v = n.merge,
        y = Of({ validate: e.getParam("validate") }, e.schema),
        b =
          '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>';
      if (
        ((i = { content: t, format: "html", selection: !0, paste: n.paste }),
        (i = e.fire("BeforeSetContent", i)).isDefaultPrevented())
      )
        e.fire("SetContent", {
          content: i.content,
          format: "html",
          selection: !0,
          paste: n.paste,
        });
      else {
        -1 === (t = i.content).indexOf("{$caret}") && (t += "{$caret}"),
          (t = t.replace(/\{\$caret\}/, b));
        var C,
          w,
          x,
          S,
          N,
          E,
          k =
            (u = p.getRng()).startContainer ||
            (u.parentElement ? u.parentElement() : null),
          _ = e.getBody();
        k === _ &&
          p.isCollapsed() &&
          g.isBlock(_.firstChild) &&
          ((C = e),
          (w = _.firstChild) &&
            !C.schema.getShortEndedElements()[w.nodeName]) &&
          g.isEmpty(_.firstChild) &&
          ((u = g.createRng()).setStart(_.firstChild, 0),
          u.setEnd(_.firstChild, 0),
          p.setRng(u)),
          p.isCollapsed() ||
            (vm(e),
            (x = e.selection.getRng()),
            (S = t),
            (N = x.startContainer),
            (E = x.startOffset),
            En(N) &&
              x.collapsed &&
              (N.data[E] === Dr
                ? (N.deleteData(E, 1), /[\u00a0| ]$/.test(S) || (S += " "))
                : N.data[E - 1] === Dr &&
                  (N.deleteData(E - 1, 1),
                  /[\u00a0| ]$/.test(S) || (S = " " + S))),
            (t = S));
        var T,
          R,
          A,
          D = {
            context: (r = p.getNode()).nodeName.toLowerCase(),
            data: n.data,
            insert: !0,
          },
          O = h.parse(t, D);
        if (!0 === n.paste && sm(e.schema, O) && fm(g, r))
          return (
            (u = pm(y, g, e.selection.getRng(), O)),
            e.selection.setRng(u),
            void e.fire("SetContent", i)
          );
        if (
          (!(function (e) {
            for (var t = e; (t = t.walk()); )
              1 === t.type && t.attr("data-mce-fragment", "1");
          })(O),
          "mce_marker" === (s = O.lastChild).attr("id"))
        )
          for (s = (a = s).prev; s; s = s.walk(!0))
            if (3 === s.type || !g.isBlock(s.name)) {
              e.schema.isValidChild(s.parent.name, "span") &&
                s.parent.insert(a, s, "br" === s.name);
              break;
            }
        if ((e._selectionOverrides.showBlockCaretContainer(r), D.invalid)) {
          for (
            hm(e, b),
              r = p.getNode(),
              o = e.getBody(),
              9 === r.nodeType ? (r = s = o) : (s = r);
            s !== o;

          )
            s = (r = s).parentNode;
          (t = r === o ? o.innerHTML : g.getOuterHTML(r)),
            (t = y.serialize(
              h.parse(
                t.replace(
                  /<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,
                  function () {
                    return y.serialize(O);
                  }
                )
              )
            )),
            r === o ? g.setHTML(o, t) : g.setOuterHTML(r, t);
        } else
          !(function (e, t, n) {
            if ("all" === n.getAttribute("data-mce-bogus"))
              n.parentNode.insertBefore(e.dom.createFragment(t), n);
            else {
              var r = n.firstChild,
                o = n.lastChild;
              !r || (r === o && "BR" === r.nodeName)
                ? e.dom.setHTML(n, t)
                : hm(e, t);
            }
          })(e, (t = y.serialize(O)), r);
        !(function (e, t) {
          var n = e.schema.getTextInlineElements(),
            r = e.dom;
          if (t) {
            var o = e.getBody(),
              i = new Kf(r);
            yt.each(r.select("*[data-mce-fragment]"), function (e) {
              for (var t = e.parentNode; t && t !== o; t = t.parentNode)
                n[e.nodeName.toLowerCase()] &&
                  i.compare(t, e) &&
                  r.remove(e, !0);
            });
          }
        })(e, v),
          (function (n, e) {
            var t,
              r,
              o = n.dom,
              i = n.selection;
            if (e) {
              n.selection.scrollIntoView(e);
              var a = (function (e) {
                for (var t = n.getBody(); e && e !== t; e = e.parentNode)
                  if ("false" === n.dom.getContentEditable(e)) return e;
                return null;
              })(e);
              if (a) return o.remove(e), i.select(a);
              var u = o.createRng(),
                s = e.previousSibling;
              s && 3 === s.nodeType
                ? (u.setStart(s, s.nodeValue.length),
                  mt.ie ||
                    ((r = e.nextSibling) &&
                      3 === r.nodeType &&
                      (s.appendData(r.data), r.parentNode.removeChild(r))))
                : (u.setStartBefore(e), u.setEndBefore(e));
              var c = o.getParent(e, o.isBlock);
              o.remove(e),
                c &&
                  o.isEmpty(c) &&
                  (n.$(c).empty(),
                  u.setStart(c, 0),
                  u.setEnd(c, 0),
                  gm(c) ||
                  c.getAttribute("data-mce-fragment") ||
                  !(t = (function (e) {
                    var t = Ss.fromRangeStart(e);
                    if ((t = tl(n.getBody()).next(t))) return t.toRange();
                  })(u))
                    ? o.add(c, o.create("br", { "data-mce-bogus": "1" }))
                    : ((u = t), o.remove(c))),
                i.setRng(u);
            }
          })(e, g.get("mce_marker")),
          (T = e.getBody()),
          yt.each(T.getElementsByTagName("*"), function (e) {
            e.removeAttribute("data-mce-fragment");
          }),
          (R = e.dom),
          (A = e.selection.getStart()),
          B.from(R.getParent(A, "td,th")).map(Ct.fromDom).each(gd),
          e.fire("SetContent", i),
          e.addVisual();
      }
    },
    bm = function (e) {
      var t = Kt(e).dom();
      return e.dom() === t.activeElement;
    },
    Cm = function (e) {
      return (
        void 0 === e && (e = Ct.fromDom(V.document)),
        B.from(e.dom().activeElement).map(Ct.fromDom)
      );
    },
    wm = function (e, t, n, r) {
      return { start: x(e), soffset: x(t), finish: x(n), foffset: x(r) };
    },
    xm = Qi([
      { before: ["element"] },
      { on: ["element", "offset"] },
      { after: ["element"] },
    ]),
    Sm =
      (xm.before,
      xm.on,
      xm.after,
      function (e) {
        return e.fold(o, o, o);
      }),
    Nm = Qi([
      { domRange: ["rng"] },
      { relative: ["startSitu", "finishSitu"] },
      { exact: ["start", "soffset", "finish", "foffset"] },
    ]),
    Em = {
      domRange: Nm.domRange,
      relative: Nm.relative,
      exact: Nm.exact,
      exactFromRange: function (e) {
        return Nm.exact(e.start(), e.soffset(), e.finish(), e.foffset());
      },
      getWin: function (e) {
        var t = e.match({
          domRange: function (e) {
            return Ct.fromDom(e.startContainer);
          },
          relative: function (e, t) {
            return Sm(e);
          },
          exact: function (e, t, n, r) {
            return e;
          },
        });
        return It(t);
      },
      range: wm,
    },
    km = ot().browser,
    _m = function (e, t) {
      var n = Et(t) ? vf(t).length : Ht(t).length + 1;
      return n < e ? n : e < 0 ? 0 : e;
    },
    Tm = function (e) {
      return Em.range(
        e.start(),
        _m(e.soffset(), e.start()),
        e.finish(),
        _m(e.foffset(), e.finish())
      );
    },
    Rm = function (e, t) {
      return !hn(t.dom()) && (Bt(e, t) || Dt(e, t));
    },
    Am = function (t) {
      return function (e) {
        return Rm(t, e.start()) && Rm(t, e.finish());
      };
    },
    Dm = function (e) {
      return !0 === e.inline || km.isIE();
    },
    Om = function (e) {
      return Em.range(
        Ct.fromDom(e.startContainer),
        e.startOffset,
        Ct.fromDom(e.endContainer),
        e.endOffset
      );
    },
    Bm = function (e) {
      var t,
        n,
        r = It(e);
      return (
        (t = r.dom()),
        ((n = t.getSelection()) && 0 !== n.rangeCount
          ? B.from(n.getRangeAt(0))
          : B.none()
        )
          .map(Om)
          .filter(Am(e))
      );
    },
    Pm = function (e) {
      var t = V.document.createRange();
      try {
        return (
          t.setStart(e.start().dom(), e.soffset()),
          t.setEnd(e.finish().dom(), e.foffset()),
          B.some(t)
        );
      } catch (n) {
        return B.none();
      }
    },
    Lm = function (e) {
      var t = Dm(e) ? Bm(Ct.fromDom(e.getBody())) : B.none();
      e.bookmark = t.isSome() ? t : e.bookmark;
    },
    Im = function (r) {
      return (r.bookmark ? r.bookmark : B.none())
        .bind(function (e) {
          return (
            (t = Ct.fromDom(r.getBody())),
            (n = e),
            B.from(n).filter(Am(t)).map(Tm)
          );
          var t, n;
        })
        .bind(Pm);
    },
    Mm = {
      isEditorUIElement: function (e) {
        var t = e.className.toString();
        return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-");
      },
    },
    Fm = function (n, e) {
      var t, r;
      ot().browser.isIE()
        ? (r = n).on("focusout", function () {
            Lm(r);
          })
        : ((t = e),
          n.on("mouseup touchend", function (e) {
            t.throttle();
          })),
        n.on("keyup NodeChange", function (e) {
          var t;
          ("nodechange" === (t = e).type && t.selectionChange) || Lm(n);
        });
    },
    Um = function (r) {
      var o = Ua(function () {
        Lm(r);
      }, 0);
      r.on("init", function () {
        var e, t, n;
        r.inline &&
          ((e = r),
          (t = o),
          (n = function () {
            t.throttle();
          }),
          Ea.DOM.bind(V.document, "mouseup", n),
          e.on("remove", function () {
            Ea.DOM.unbind(V.document, "mouseup", n);
          })),
          Fm(r, o);
      }),
        r.on("remove", function () {
          o.cancel();
        });
    },
    zm = Ea.DOM,
    jm = function (t, e) {
      var n = t.getParam("custom_ui_selector", "", "string");
      return (
        null !==
        zm.getParent(e, function (e) {
          return Mm.isEditorUIElement(e) || (!!n && t.dom.is(e, n));
        })
      );
    },
    Hm = function (r, e) {
      var t = e.editor;
      Um(t),
        t.on("focusin", function () {
          var e = r.focusedEditor;
          e !== this &&
            (e && e.fire("blur", { focusedEditor: this }),
            r.setActive(this),
            (r.focusedEditor = this).fire("focus", { blurredEditor: e }),
            this.focus(!0));
        }),
        t.on("focusout", function () {
          var t = this;
          fa.setEditorTimeout(t, function () {
            var e = r.focusedEditor;
            jm(
              t,
              (function () {
                try {
                  return V.document.activeElement;
                } catch (e) {
                  return V.document.body;
                }
              })()
            ) ||
              e !== t ||
              (t.fire("blur", { focusedEditor: null }),
              (r.focusedEditor = null));
          });
        }),
        Uf ||
          ((Uf = function (e) {
            var t = r.activeEditor,
              n = e.target;
            t &&
              n.ownerDocument === V.document &&
              (n === V.document.body ||
                jm(t, n) ||
                r.focusedEditor !== t ||
                (t.fire("blur", { focusedEditor: null }),
                (r.focusedEditor = null)));
          }),
          zm.bind(V.document, "focusin", Uf));
    },
    Vm = function (e, t) {
      e.focusedEditor === t.editor && (e.focusedEditor = null),
        e.activeEditor || (zm.unbind(V.document, "focusin", Uf), (Uf = null));
    },
    qm = function (t, e) {
      return ((n = e).collapsed
        ? B.from(Hu(n.startContainer, n.startOffset)).map(Ct.fromDom)
        : B.none()
      ).bind(function (e) {
        return er(e) ? B.some(e) : !1 === Bt(t, e) ? B.some(t) : B.none();
      });
      var n;
    },
    $m = function (t, e) {
      qm(Ct.fromDom(t.getBody()), e)
        .bind(function (e) {
          return dl(e.dom());
        })
        .fold(
          function () {
            t.selection.normalize();
          },
          function (e) {
            return t.selection.setRng(e.toRange());
          }
        );
    },
    Wm = function (e) {
      if (e.setActive)
        try {
          e.setActive();
        } catch (t) {
          e.focus();
        }
      else e.focus();
    },
    Km = function (e) {
      return (
        bm(e) ||
        Cm(Kt((t = e)))
          .filter(function (e) {
            return t.dom().contains(e.dom());
          })
          .isSome()
      );
      var t;
    },
    Xm = function (r) {
      return Cm()
        .filter(function (e) {
          return (
            (t = e.dom()),
            !(
              (n = t.classList) !== undefined &&
              (n.contains("tox-edit-area") ||
                n.contains("tox-edit-area__iframe") ||
                n.contains("mce-content-body"))
            ) && jm(r, e.dom())
          );
          var t, n;
        })
        .isSome();
    },
    Ym = function (e) {
      return e.inline
        ? (n = e.getBody()) && Km(Ct.fromDom(n))
        : (t = e).iframeElement && bm(Ct.fromDom(t.iframeElement));
      var t, n;
    },
    Gm = function (t) {
      var e = t.selection,
        n = t.getBody(),
        r = e.getRng();
      t.quirks.refreshContentEditable(),
        t.bookmark !== undefined &&
          !1 === Ym(t) &&
          Im(t).each(function (e) {
            t.selection.setRng(e), (r = e);
          });
      var o,
        i,
        a =
          ((o = t),
          (i = e.getNode()),
          o.dom.getParent(i, function (e) {
            return "true" === o.dom.getContentEditable(e);
          }));
      if (t.$.contains(n, a)) return Wm(a), $m(t, r), void Jm(t);
      t.inline || (mt.opera || Wm(n), t.getWin().focus()),
        (mt.gecko || t.inline) && (Wm(n), $m(t, r)),
        Jm(t);
    },
    Jm = function (e) {
      return e.editorManager.setActive(e);
    },
    Qm = function (e, t) {
      t(e), e.firstChild && Qm(e.firstChild, t), e.next && Qm(e.next, t);
    },
    Zm = function (e, t, n) {
      var r = (function (e, n, t) {
        var r = {},
          o = {},
          i = [];
        for (var a in (t.firstChild &&
          Qm(t.firstChild, function (t) {
            z(e, function (e) {
              e.name === t.name &&
                (r[e.name]
                  ? r[e.name].nodes.push(t)
                  : (r[e.name] = { filter: e, nodes: [t] }));
            }),
              z(n, function (e) {
                "string" == typeof t.attr(e.name) &&
                  (o[e.name]
                    ? o[e.name].nodes.push(t)
                    : (o[e.name] = { filter: e, nodes: [t] }));
              });
          }),
        r))
          r.hasOwnProperty(a) && i.push(r[a]);
        for (var u in o) o.hasOwnProperty(u) && i.push(o[u]);
        return i;
      })(e, t, n);
      z(r, function (t) {
        z(t.filter.callbacks, function (e) {
          e(t.nodes, t.filter.name, {});
        });
      });
    },
    ep = function (e) {
      return e instanceof Tf;
    },
    tp = function (e, t) {
      var r;
      e.dom.setHTML(e.getBody(), t),
        Ym((r = e)) &&
          dl(r.getBody()).each(function (e) {
            var t = e.getNode(),
              n = xn(t) ? dl(t).getOr(e) : e;
            r.selection.setRng(n.toRange());
          });
    },
    np = function (u, s, c) {
      return (
        (c.format = c.format ? c.format : "html"),
        (c.set = !0),
        (c.content = ep(s) ? "" : s),
        ep(s) ||
          c.no_events ||
          (u.fire("BeforeSetContent", c), (s = c.content)),
        B.from(u.getBody()).fold(x(s), function (e) {
          return ep(s)
            ? (function (e, t, n, r) {
                Zm(
                  e.parser.getNodeFilters(),
                  e.parser.getAttributeFilters(),
                  n
                );
                var o = Of({ validate: e.validate }, e.schema).serialize(n);
                return (
                  (r.content = nr(Ct.fromDom(t)) ? o : yt.trim(o)),
                  tp(e, r.content),
                  r.no_events || e.fire("SetContent", r),
                  n
                );
              })(u, e, s, c)
            : ((t = u),
              (n = e),
              (o = c),
              0 === (r = s).length || /^\s+$/.test(r)
                ? ((a = '<br data-mce-bogus="1">'),
                  "TABLE" === n.nodeName
                    ? (r = "<tr><td>" + a + "</td></tr>")
                    : /^(UL|OL)$/.test(n.nodeName) &&
                      (r = "<li>" + a + "</li>"),
                  (r =
                    (i = Ys(t)) &&
                    t.schema.isValidChild(
                      n.nodeName.toLowerCase(),
                      i.toLowerCase()
                    )
                      ? ((r = a), t.dom.createHTML(i, Gs(t), r))
                      : r || '<br data-mce-bogus="1">'),
                  tp(t, r),
                  t.fire("SetContent", o))
                : ("raw" !== o.format &&
                    (r = Of({ validate: t.validate }, t.schema).serialize(
                      t.parser.parse(r, { isRootContent: !0, insert: !0 })
                    )),
                  (o.content = nr(Ct.fromDom(n)) ? r : yt.trim(r)),
                  tp(t, o.content),
                  o.no_events || t.fire("SetContent", o)),
              o.content);
          var t, n, r, o, i, a;
        })
      );
    },
    rp = function (e, t) {
      return e.splitText(t);
    },
    op = function (e) {
      var t = e.startContainer,
        n = e.startOffset,
        r = e.endContainer,
        o = e.endOffset;
      return (
        t === r && En(t)
          ? 0 < n &&
            n < t.nodeValue.length &&
            ((t = (r = rp(t, n)).previousSibling),
            n < o
              ? ((t = r = rp(r, (o -= n)).previousSibling),
                (o = r.nodeValue.length),
                (n = 0))
              : (o = 0))
          : (En(t) &&
              0 < n &&
              n < t.nodeValue.length &&
              ((t = rp(t, n)), (n = 0)),
            En(r) &&
              0 < o &&
              o < r.nodeValue.length &&
              (o = (r = rp(r, o).previousSibling).nodeValue.length)),
        { startContainer: t, startOffset: n, endContainer: r, endOffset: o }
      );
    },
    ip = Ml,
    ap = function (e, t, n) {
      var r = e.formatter.get(n);
      if (r)
        for (var o = 0; o < r.length; o++)
          if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
      return !1;
    },
    up = function (t, e, n, r) {
      var o = t.dom.getRoot();
      return (
        e !== o &&
        ((e = t.dom.getParent(e, function (e) {
          return !!ap(t, e, n) || e.parentNode === o || !!lp(t, e, n, r, !0);
        })),
        lp(t, e, n, r))
      );
    },
    sp = function (e, t, n) {
      return (
        !!ip(t, n.inline) ||
        !!ip(t, n.block) ||
        (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0)
      );
    },
    cp = function (e, t, n, r, o, i) {
      var a,
        u,
        s,
        c = n[r];
      if (n.onmatch) return n.onmatch(t, n, r);
      if (c)
        if ("undefined" == typeof c.length) {
          for (a in c)
            if (c.hasOwnProperty(a)) {
              if (
                ((u = "attributes" === r ? e.getAttrib(t, a) : Ul(e, t, a)),
                o && !u && !n.exact)
              )
                return;
              if ((!o || n.exact) && !ip(u, Fl(e, Il(c[a], i), a))) return;
            }
        } else
          for (s = 0; s < c.length; s++)
            if ("attributes" === r ? e.getAttrib(t, c[s]) : Ul(e, t, c[s]))
              return n;
      return n;
    },
    lp = function (e, t, n, r, o) {
      var i,
        a,
        u,
        s,
        c = e.formatter.get(n),
        l = e.dom;
      if (c && t)
        for (a = 0; a < c.length; a++)
          if (
            ((i = c[a]),
            sp(e.dom, t, i) &&
              cp(l, t, i, "attributes", o, r) &&
              cp(l, t, i, "styles", o, r))
          ) {
            if ((s = i.classes))
              for (u = 0; u < s.length; u++)
                if (!e.dom.hasClass(t, s[u])) return;
            return i;
          }
    },
    fp = function (e, t, n, r) {
      if (r) return up(e, r, t, n);
      if (((r = e.selection.getNode()), up(e, r, t, n))) return !0;
      var o = e.selection.getStart();
      return !(o === r || !up(e, o, t, n));
    },
    dp = function (r, o, i) {
      var a = [],
        u = {},
        e = r.selection.getStart();
      return (
        r.dom.getParent(
          e,
          function (e) {
            for (var t = 0; t < o.length; t++) {
              var n = o[t];
              !u[n] && lp(r, e, n, i) && ((u[n] = !0), a.push(n));
            }
          },
          r.dom.getRoot()
        ),
        a
      );
    },
    mp = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        u = e.formatter.get(t),
        s = e.dom;
      if (u)
        for (
          n = e.selection.getStart(), r = jl(s, n), i = u.length - 1;
          0 <= i;
          i--
        ) {
          if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
          for (o = r.length - 1; 0 <= o; o--) if (s.is(r[o], a)) return !0;
        }
      return !1;
    },
    pp = function (o, i, e) {
      return W(
        e,
        function (e, t) {
          var n,
            r =
              ((n = t),
              F(o.formatter.get(n), function (t) {
                var n = function (e) {
                  return 1 < e.length && "%" === e.charAt(0);
                };
                return F(["styles", "attributes"], function (e) {
                  return de(t, e).exists(function (e) {
                    var t = k(e) ? e : fe(e);
                    return F(t, n);
                  });
                });
              }));
          return o.formatter.matchNode(i, t, {}, r) ? e.concat([t]) : e;
        },
        []
      );
    },
    gp = yu,
    hp = "_mce_caret",
    vp = function (e) {
      return (
        0 <
        (function (e) {
          for (var t = []; e; ) {
            if (
              (3 === e.nodeType && e.nodeValue !== gp) ||
              1 < e.childNodes.length
            )
              return [];
            1 === e.nodeType && t.push(e), (e = e.firstChild);
          }
          return t;
        })(e).length
      );
    },
    yp = function (e) {
      if (e) {
        var t = new Ai(e, e);
        for (e = t.current(); e; e = t.next()) if (En(e)) return e;
      }
      return null;
    },
    bp = function (e) {
      var t = Ct.fromTag("span");
      return (
        Ln(t, {
          id: hp,
          "data-mce-bogus": "1",
          "data-mce-type": "format-caret",
        }),
        e && Zt(t, Ct.fromText(gp)),
        t
      );
    },
    Cp = function (e, t, n) {
      void 0 === n && (n = !0);
      var r,
        o = e.dom,
        i = e.selection;
      if (vp(t)) Dd(e, !1, Ct.fromDom(t), n);
      else {
        var a = i.getRng(),
          u = o.getParent(t, o.isBlock),
          s = a.startContainer,
          c = a.startOffset,
          l = a.endContainer,
          f = a.endOffset,
          d =
            ((r = yp(t)) && r.nodeValue.charAt(0) === gp && r.deleteData(0, 1),
            r);
        o.remove(t, !0),
          s === d && 0 < c && a.setStart(d, c - 1),
          l === d && 0 < f && a.setEnd(d, f - 1),
          u && o.isEmpty(u) && pd(Ct.fromDom(u)),
          i.setRng(a);
      }
    },
    wp = function (e, t, n) {
      void 0 === n && (n = !0);
      var r = e.dom,
        o = e.selection;
      if (t) Cp(e, t, n);
      else if (!(t = hl(e.getBody(), o.getStart())))
        for (; (t = r.get(hp)); ) Cp(e, t, !1);
    },
    xp = function (e, t) {
      return e.appendChild(t), t;
    },
    Sp = function (e, t) {
      var n = $(
        e,
        function (e, t) {
          return xp(e, t.cloneNode(!1));
        },
        t
      );
      return xp(n, n.ownerDocument.createTextNode(gp));
    },
    Np = function (e, t, n, r) {
      var o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d = e.dom,
        m = e.selection,
        p = [],
        g = m.getRng(),
        h = g.startContainer,
        v = g.startOffset;
      for (
        3 === (i = h).nodeType &&
        (v !== h.nodeValue.length && (o = !0), (i = i.parentNode));
        i;

      ) {
        if (lp(e, i, t, n, r)) {
          a = i;
          break;
        }
        i.nextSibling && (o = !0), p.push(i), (i = i.parentNode);
      }
      if (a)
        if (o) {
          var y = m.getBookmark();
          g.collapse(!0);
          var b = tf(e, g, e.formatter.get(t), !0);
          (b = op(b)), e.formatter.remove(t, n, b, r), m.moveToBookmark(y);
        } else {
          var C = hl(e.getBody(), a),
            w = bp(!1).dom();
          (s = w),
            (c = null !== C ? C : a),
            (l = (u = e).dom),
            (f = l.getParent(c, N(Bl, u))) && l.isEmpty(f)
              ? c.parentNode.replaceChild(s, c)
              : (md(Ct.fromDom(c)),
                l.isEmpty(c)
                  ? c.parentNode.replaceChild(s, c)
                  : l.insertAfter(s, c));
          var x = (function (t, e, n, r, o, i) {
              var a = t.formatter,
                u = t.dom,
                s = H(ne(a.get()), function (e) {
                  return "removeformat" !== e && e !== r;
                }),
                c = pp(t, n, s);
              if (
                0 <
                H(c, function (e) {
                  return !Hl(t, e, r);
                }).length
              ) {
                var l = n.cloneNode(!1);
                return (
                  u.add(e, l), a.remove(r, o, l, i), u.remove(l), B.some(l)
                );
              }
              return B.none();
            })(e, w, a, t, n, r),
            S = Sp(p.concat(x.toArray()), w);
          Cp(e, C, !1), m.setCursorLocation(S, 1), d.isEmpty(a) && d.remove(a);
        }
    },
    Ep = function (i) {
      i.on("mouseup keydown", function (e) {
        var t, n, r, o;
        (t = i),
          (n = e.keyCode),
          (r = t.selection),
          (o = t.getBody()),
          wp(t, null, !1),
          (8 !== n && 46 !== n) ||
            !r.isCollapsed() ||
            r.getStart().innerHTML !== gp ||
            wp(t, hl(o, r.getStart())),
          (37 !== n && 39 !== n) || wp(t, hl(o, r.getStart()));
      });
    },
    kp = function (e, t) {
      return (
        e.schema.getTextInlineElements().hasOwnProperty(wt(t)) &&
        !gl(t.dom()) &&
        !wn(t.dom())
      );
    },
    _p = {},
    Tp = ve,
    Rp = ge;
  (jf = function (e) {
    var t,
      n = e.selection.getRng(),
      r = yn(["pre"]);
    n.collapsed ||
      ((t = e.selection.getSelectedBlocks()),
      Rp(
        Tp(Tp(t, r), function (e) {
          return r(e.previousSibling) && -1 !== ye(t, e.previousSibling);
        }),
        function (e) {
          var t, n;
          (t = e.previousSibling),
            Ri((n = e)).remove(),
            Ri(t).append("<br><br>").append(n.childNodes);
        }
      ));
  }),
    _p[(zf = "pre")] || (_p[zf] = []),
    _p[zf].push(jf);
  var Ap,
    Dp,
    Op = /^(src|href|style)$/,
    Bp = yt.each,
    Pp = Ml,
    Lp = function (e, t, n) {
      return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
    },
    Ip = function (e, t, n) {
      var r, o;
      if (
        ((r = t[n ? "startContainer" : "endContainer"]),
        (o = t[n ? "startOffset" : "endOffset"]),
        vn(r))
      ) {
        var i = r.childNodes.length - 1;
        !n && o && o--, (r = r.childNodes[i < o ? i : o]);
      }
      return (
        En(r) &&
          n &&
          o >= r.nodeValue.length &&
          (r = new Ai(r, e.getBody()).next() || r),
        En(r) && !n && 0 === o && (r = new Ai(r, e.getBody()).prev() || r),
        r
      );
    },
    Mp = function (e, t) {
      var n = t ? "firstChild" : "lastChild";
      if (/^(TR|TH|TD)$/.test(e.nodeName) && e[n]) {
        var r = e[n];
        return ("TR" === e.nodeName && r[n]) || r;
      }
      return e;
    },
    Fp = function (e, t, n, r) {
      var o = e.create(n, r);
      return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
    },
    Up = function (e, t, n, r, o) {
      var i = Ct.fromDom(t),
        a = Ct.fromDom(e.create(r, o)),
        u = (n ? jt : zt)(i);
      return en(a, u), n ? (Gt(i, a), Qt(a, i)) : (Jt(i, a), Zt(a, i)), a.dom();
    },
    zp = function (e, t, n, r) {
      return !(t = Ol(t, n, r)) || "BR" === t.nodeName || e.isBlock(t);
    },
    jp = function (e, r, o, t, i) {
      var n,
        a,
        u,
        s,
        c,
        l = e.dom;
      if (
        ((u = l),
        !(
          Pp((s = t), (c = r).inline) ||
          Pp(s, c.block) ||
          (c.selector && vn(s) && u.is(s, c.selector)) ||
          ((a = t), r.links && "A" === a.nodeName)
        ))
      )
        return !1;
      var f,
        d,
        m,
        p,
        g,
        h,
        v,
        y = t;
      if (r.inline && "all" === r.remove && k(r.preserve_attributes)) {
        var b = H(l.getAttribs(y), function (e) {
          return M(r.preserve_attributes, e.name.toLowerCase());
        });
        if (
          (l.removeAllAttribs(y),
          z(b, function (e) {
            return l.setAttrib(y, e.name, e.value);
          }),
          0 < b.length)
        )
          return e.dom.rename(t, "span"), !0;
      }
      if ("all" !== r.remove) {
        Bp(r.styles, function (e, t) {
          (e = Fl(l, Il(e, o), t)),
            "number" == typeof t && ((t = e), (i = null)),
            (!r.remove_similar && i && !Pp(Ul(l, i, t), e)) ||
              l.setStyle(y, t, ""),
            (n = !0);
        }),
          n &&
            "" === l.getAttrib(y, "style") &&
            (y.removeAttribute("style"), y.removeAttribute("data-mce-style")),
          Bp(r.attributes, function (e, t) {
            var n;
            if (
              ((e = Il(e, o)),
              "number" == typeof t && ((t = e), (i = null)),
              r.remove_similar || !i || Pp(l.getAttrib(i, t), e))
            ) {
              if (
                "class" === t &&
                (e = l.getAttrib(y, t)) &&
                ((n = ""),
                z(e.split(/\s+/), function (e) {
                  /mce\-\w+/.test(e) && (n += (n ? " " : "") + e);
                }),
                n)
              )
                return void l.setAttrib(y, t, n);
              "class" === t && y.removeAttribute("className"),
                Op.test(t) && y.removeAttribute("data-mce-" + t),
                y.removeAttribute(t);
            }
          }),
          Bp(r.classes, function (e) {
            (e = Il(e, o)), (i && !l.hasClass(i, e)) || l.removeClass(y, e);
          });
        for (var C = l.getAttribs(y), w = 0; w < C.length; w++) {
          var x = C[w].nodeName;
          if (0 !== x.indexOf("_") && 0 !== x.indexOf("data-")) return !1;
        }
      }
      return "none" !== r.remove
        ? ((f = e),
          (m = r),
          (g = (d = y).parentNode),
          (h = f.dom),
          (v = Ys(f)),
          m.block &&
            (v
              ? g === h.getRoot() &&
                ((m.list_block && Pp(d, m.list_block)) ||
                  z(te(d.childNodes), function (e) {
                    Pl(f, v, e.nodeName.toLowerCase())
                      ? p
                        ? p.appendChild(e)
                        : ((p = Fp(h, e, v)),
                          h.setAttribs(p, f.settings.forced_root_block_attrs))
                      : (p = 0);
                  }))
              : h.isBlock(d) &&
                !h.isBlock(g) &&
                (zp(h, d, !1) ||
                  zp(h, d.firstChild, !0, !0) ||
                  d.insertBefore(h.create("br"), d.firstChild),
                zp(h, d, !0) ||
                  zp(h, d.lastChild, !1, !0) ||
                  d.appendChild(h.create("br")))),
          (m.selector && m.inline && !Pp(m.inline, d)) || h.remove(d, !0),
          !0)
        : void 0;
    },
    Hp = function (s, c, l, e, f) {
      var d = s.formatter.get(c),
        m = d[0],
        i = !0,
        a = s.dom,
        t = s.selection,
        u = function (e) {
          var n,
            t,
            r,
            o,
            i,
            a,
            u =
              ((t = e),
              (r = c),
              (o = l),
              (i = f),
              z(jl((n = s).dom, t.parentNode).reverse(), function (e) {
                if (!a && "_start" !== e.id && "_end" !== e.id) {
                  var t = lp(n, e, r, o, i);
                  t && !1 !== t.split && (a = e);
                }
              }),
              a);
          return (function (e, t, n, r, o, i, a, u) {
            var s,
              c,
              l,
              f = e.dom;
            if (n) {
              for (
                var d = n.parentNode, m = r.parentNode;
                m && m !== d;
                m = m.parentNode
              ) {
                s = f.clone(m, !1);
                for (var p = 0; p < t.length; p++)
                  if (jp(e, t[p], u, s, s)) {
                    s = 0;
                    break;
                  }
                s && (c && s.appendChild(c), (l = l || s), (c = s));
              }
              !i || (a.mixed && f.isBlock(n)) || (r = f.split(n, r)),
                c && (o.parentNode.insertBefore(c, o), l.appendChild(o));
            }
            return r;
          })(s, d, u, e, e, !0, m, l);
        },
        p = function (e) {
          var t, n;
          vn(e) &&
            a.getContentEditable(e) &&
            ((t = i), (i = "true" === a.getContentEditable(e)), (n = !0));
          var r = te(e.childNodes);
          if (i && !n)
            for (var o = 0; o < d.length && !jp(s, d[o], l, e, e); o++);
          if (m.deep && r.length) {
            for (o = 0; o < r.length; o++) p(r[o]);
            n && (i = t);
          }
        },
        g = function (e) {
          var t,
            n = a.get(e ? "_start" : "_end"),
            r = n[e ? "firstChild" : "lastChild"];
          return (
            kl((t = r)) &&
              vn(t) &&
              ("_start" === t.id || "_end" === t.id) &&
              (r = r[e ? "firstChild" : "lastChild"]),
            En(r) &&
              0 === r.data.length &&
              (r = e
                ? n.previousSibling || n.nextSibling
                : n.nextSibling || n.previousSibling),
            a.remove(n, !0),
            r
          );
        },
        n = function (e) {
          var t,
            n,
            r = tf(s, e, d, !0);
          if (m.split) {
            if (((r = op(r)), (t = Ip(s, r, !0)) !== (n = Ip(s, r)))) {
              if (((t = Mp(t, !0)), (n = Mp(n, !1)), Lp(a, t, n))) {
                var o = B.from(t.firstChild).getOr(t);
                return (
                  u(
                    Up(a, o, !0, "span", {
                      id: "_start",
                      "data-mce-type": "bookmark",
                    })
                  ),
                  void g(!0)
                );
              }
              if (Lp(a, n, t)) {
                o = B.from(n.lastChild).getOr(n);
                return (
                  u(
                    Up(a, o, !1, "span", {
                      id: "_end",
                      "data-mce-type": "bookmark",
                    })
                  ),
                  void g(!1)
                );
              }
              (t = Fp(a, t, "span", {
                id: "_start",
                "data-mce-type": "bookmark",
              })),
                (n = Fp(a, n, "span", {
                  id: "_end",
                  "data-mce-type": "bookmark",
                }));
              var i = a.createRng();
              i.setStartAfter(t),
                i.setEndBefore(n),
                rf(a, i, function (e) {
                  z(e, function (e) {
                    kl(e) || kl(e.parentNode) || u(e);
                  });
                }),
                u(t),
                u(n),
                (t = g(!0)),
                (n = g());
            } else t = n = u(t);
            (r.startContainer = t.parentNode ? t.parentNode : t),
              (r.startOffset = a.nodeIndex(t)),
              (r.endContainer = n.parentNode ? n.parentNode : n),
              (r.endOffset = a.nodeIndex(n) + 1);
          }
          rf(a, r, function (e) {
            z(e, function (t) {
              p(t);
              z(["underline", "line-through", "overline"], function (e) {
                vn(t) &&
                  s.dom.getStyle(t, "text-decoration") === e &&
                  t.parentNode &&
                  zl(a, t.parentNode) === e &&
                  jp(
                    s,
                    {
                      deep: !1,
                      exact: !0,
                      inline: "span",
                      styles: { textDecoration: e },
                    },
                    null,
                    t
                  );
              });
            });
          });
        };
      if (e)
        if (Al(e)) {
          var r = a.createRng();
          r.setStartBefore(e), r.setEndAfter(e), n(r);
        } else n(e);
      else if ("false" !== a.getContentEditable(t.getNode()))
        t.isCollapsed() && m.inline && !sf(s).length
          ? Np(s, c, l, f)
          : (gf(t, !0, function () {
              pf(s, n);
            }),
            m.inline && fp(s, c, l, t.getStart()) && Dl(a, t, t.getRng()),
            s.nodeChanged());
      else {
        e = t.getNode();
        for (
          var o = 0;
          o < d.length && (!d[o].ceFalseOverride || !jp(s, d[o], l, e, e));
          o++
        );
      }
    },
    Vp = yt.each,
    qp = function (e) {
      return vn(e) && !kl(e) && !gl(e) && !wn(e);
    },
    $p = function (e, t) {
      var n;
      for (n = e; n; n = n[t]) {
        if (En(n) && 0 !== n.nodeValue.length) return e;
        if (vn(n) && !kl(n)) return n;
      }
      return e;
    },
    Wp = function (e, t, n) {
      var r,
        o,
        i = new Kf(e);
      if (
        t &&
        n &&
        ((t = $p(t, "previousSibling")),
        (n = $p(n, "nextSibling")),
        i.compare(t, n))
      ) {
        for (r = t.nextSibling; r && r !== n; )
          (r = (o = r).nextSibling), t.appendChild(o);
        return (
          e.remove(n),
          yt.each(yt.grep(n.childNodes), function (e) {
            t.appendChild(e);
          }),
          t
        );
      }
      return n;
    },
    Kp = function (e, t, n) {
      Vp(e.childNodes, function (e) {
        qp(e) && (t(e) && n(e), e.hasChildNodes() && Kp(e, t, n));
      });
    },
    Xp = function (t, n) {
      return function (e) {
        return !(!e || !Ul(t, e, n));
      };
    },
    Yp = function (t, n, r) {
      return function (e) {
        t.setStyle(e, n, r),
          "" === e.getAttribute("style") && e.removeAttribute("style"),
          Gp(t, e);
      };
    },
    Gp = function (e, t) {
      "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0);
    },
    Jp = function (n, e, r, o) {
      Vp(e, function (t) {
        Vp(n.dom.select(t.inline, o), function (e) {
          qp(e) && jp(n, t, r, e, t.exact ? e : null);
        }),
          (function (r, e, t) {
            if (e.clear_child_styles) {
              var n = e.links ? "*:not(a)" : "*";
              Vp(r.select(n, t), function (n) {
                qp(n) &&
                  Vp(e.styles, function (e, t) {
                    r.setStyle(n, t, "");
                  });
              });
            }
          })(n.dom, t, o);
      });
    },
    Qp = yt.each,
    Zp = function (T, R, A, r) {
      var e,
        D = T.formatter.get(R),
        O = D[0],
        o = !r && T.selection.isCollapsed(),
        i = T.dom,
        t = T.selection,
        B = function (n, e) {
          if (((e = e || O), n)) {
            if (
              (e.onformat && e.onformat(n, e, A, r),
              Qp(e.styles, function (e, t) {
                i.setStyle(n, t, Il(e, A));
              }),
              e.styles)
            ) {
              var t = i.getAttrib(n, "style");
              t && i.setAttrib(n, "data-mce-style", t);
            }
            Qp(e.attributes, function (e, t) {
              i.setAttrib(n, t, Il(e, A));
            }),
              Qp(e.classes, function (e) {
                (e = Il(e, A)), i.hasClass(n, e) || i.addClass(n, e);
              });
          }
        },
        d = function (e, t) {
          var n = !1;
          return (
            !!O.selector &&
            (Qp(e, function (e) {
              if (!("collapsed" in e && e.collapsed !== o))
                return i.is(t, e.selector) && !gl(t)
                  ? (B(t, e), !(n = !0))
                  : void 0;
            }),
            n)
          );
        },
        a = function (k, e, t, s) {
          var _ = [],
            c = !0,
            l = O.inline || O.block,
            f = k.create(l);
          B(f),
            rf(k, e, function (e) {
              var a,
                u = function (e) {
                  var t = !1,
                    n = c,
                    r = e.nodeName.toLowerCase(),
                    o = e.parentNode.nodeName.toLowerCase();
                  if (
                    (vn(e) &&
                      k.getContentEditable(e) &&
                      ((n = c),
                      (c = "true" === k.getContentEditable(e)),
                      (t = !0)),
                    Ml(r, "br"))
                  )
                    return (a = 0), void (O.block && k.remove(e));
                  if (O.wrapper && lp(T, e, R, A)) a = 0;
                  else {
                    if (
                      c &&
                      !t &&
                      O.block &&
                      !O.wrapper &&
                      Bl(T, r) &&
                      Pl(T, o, l)
                    )
                      return (
                        (e = k.rename(e, l)), B(e), _.push(e), void (a = 0)
                      );
                    if (O.selector) {
                      var i = d(D, e);
                      if (!O.inline || i) return void (a = 0);
                    }
                    !c ||
                    t ||
                    !Pl(T, l, r) ||
                    !Pl(T, o, l) ||
                    (!s &&
                      3 === e.nodeType &&
                      1 === e.nodeValue.length &&
                      65279 === e.nodeValue.charCodeAt(0)) ||
                    gl(e) ||
                    (O.inline && k.isBlock(e))
                      ? ((a = 0),
                        Qp(yt.grep(e.childNodes), u),
                        t && (c = n),
                        (a = 0))
                      : (a ||
                          ((a = k.clone(f, !1)),
                          e.parentNode.insertBefore(a, e),
                          _.push(a)),
                        a.appendChild(e));
                  }
                };
              Qp(e, u);
            }),
            !0 === O.links &&
              Qp(_, function (e) {
                var t = function (e) {
                  "A" === e.nodeName && B(e, O), Qp(yt.grep(e.childNodes), t);
                };
                t(e);
              }),
            Qp(_, function (e) {
              var n,
                t,
                r,
                o,
                i,
                a,
                u,
                s,
                c,
                l,
                f,
                d,
                m,
                p,
                g,
                h,
                v,
                y,
                b,
                C,
                w,
                x,
                S,
                N = function (e) {
                  var n = !1;
                  return (
                    Qp(e.childNodes, function (e) {
                      if (
                        (t = e) &&
                        1 === t.nodeType &&
                        !kl(t) &&
                        !gl(t) &&
                        !wn(t)
                      )
                        return (n = e), !1;
                      var t;
                    }),
                    n
                  );
                },
                E =
                  ((n = 0),
                  Qp(e.childNodes, function (e) {
                    var t;
                    ((t = e) && En(t) && 0 === t.length) || kl(e) || n++;
                  }),
                  n);
              (!(1 < _.length) && k.isBlock(e)) || 0 !== E
                ? (O.inline || O.wrapper) &&
                  (O.exact ||
                    1 !== E ||
                    ((S = N((w = e))) &&
                      !kl(S) &&
                      sp(k, S, O) &&
                      ((x = k.clone(S, !1)),
                      B(x),
                      k.replace(x, w, !0),
                      k.remove(S, !0)),
                    (e = x || w)),
                  Jp(T, D, A, e),
                  (v = O),
                  (y = R),
                  (b = A),
                  (lp((h = T), (C = e).parentNode, y, b) && jp(h, v, b, C)) ||
                    (v.merge_with_parents &&
                      h.dom.getParent(C.parentNode, function (e) {
                        if (lp(h, e, y, b)) return jp(h, v, b, C), !0;
                      })),
                  (d = k),
                  (p = A),
                  (g = e),
                  (m = O).styles &&
                    m.styles.backgroundColor &&
                    Kp(
                      g,
                      Xp(d, "fontSize"),
                      Yp(d, "backgroundColor", Il(m.styles.backgroundColor, p))
                    ),
                  (s = k),
                  (l = e),
                  (f = function (e) {
                    if (
                      1 === e.nodeType &&
                      e.parentNode &&
                      1 === e.parentNode.nodeType
                    ) {
                      var t = zl(s, e.parentNode);
                      s.getStyle(e, "color") && t
                        ? s.setStyle(e, "text-decoration", t)
                        : s.getStyle(e, "text-decoration") === t &&
                          s.setStyle(e, "text-decoration", null);
                    }
                  }),
                  (c = O).styles &&
                    (c.styles.color || c.styles.textDecoration) &&
                    (yt.walk(l, f, "childNodes"), f(l)),
                  (i = k),
                  (u = e),
                  ("sub" !== (a = O).inline && "sup" !== a.inline) ||
                    (Kp(u, Xp(i, "fontSize"), Yp(i, "fontSize", "")),
                    i.remove(
                      i.select("sup" === a.inline ? "sub" : "sup", u),
                      !0
                    )),
                  (t = k),
                  (r = O),
                  (o = e) &&
                    !1 !== r.merge_siblings &&
                    ((o = Wp(t, Ol(o), o)), (o = Wp(t, o, Ol(o, !0)))))
                : k.remove(e, !0);
            });
        };
      if ("false" !== i.getContentEditable(t.getNode())) {
        if (O) {
          if (r)
            Al(r)
              ? d(D, r) ||
                ((e = i.createRng()).setStartBefore(r),
                e.setEndAfter(r),
                a(i, tf(T, e, D), 0, !0))
              : a(i, r, 0, !0);
          else if (o && O.inline && !sf(T).length)
            !(function (e, t, n) {
              var r,
                o,
                i = e.selection,
                a = i.getRng(),
                u = a.startOffset,
                s = a.startContainer.nodeValue;
              (r = hl(e.getBody(), i.getStart())) && (o = yp(r));
              var c,
                l,
                f = /[^\s\u00a0\u00ad\u200b\ufeff]/;
              if (
                s &&
                0 < u &&
                u < s.length &&
                f.test(s.charAt(u)) &&
                f.test(s.charAt(u - 1))
              ) {
                var d = i.getBookmark();
                a.collapse(!0);
                var m = tf(e, a, e.formatter.get(t));
                (m = op(m)), e.formatter.apply(t, n, m), i.moveToBookmark(d);
              } else
                (r && o.nodeValue === gp) ||
                  ((c = e.getDoc()),
                  (l = bp(!0).dom()),
                  (o = (r = c.importNode(l, !0)).firstChild),
                  a.insertNode(r),
                  (u = 1)),
                  e.formatter.apply(t, n, r),
                  i.setCursorLocation(o, u);
            })(T, R, A);
          else {
            var n = t.getNode();
            T.settings.forced_root_block ||
              !D[0].defaultBlock ||
              i.getParent(n, i.isBlock) ||
              Zp(T, D[0].defaultBlock),
              t.setRng(am(t.getRng())),
              gf(t, !0, function (e) {
                pf(T, function (e, t) {
                  var n = t ? e : tf(T, e, D);
                  a(i, n);
                });
              }),
              Dl(i, t, t.getRng()),
              T.nodeChanged();
          }
          (u = T),
            Rp(_p[R], function (e) {
              e(u);
            });
        }
        var u;
      } else {
        r = t.getNode();
        for (var s = 0, c = D.length; s < c; s++)
          if (D[s].ceFalseOverride && i.is(r, D[s].selector))
            return void B(r, D[s]);
      }
    },
    eg = function (n, e) {
      return U(e, function (e) {
        var t = n.fire("GetSelectionRange", { range: e });
        return t.range !== e ? t.range : e;
      });
    },
    tg = function (e, t) {
      var n = (t || V.document).createDocumentFragment();
      return (
        z(e, function (e) {
          n.appendChild(e.dom());
        }),
        Ct.fromDom(n)
      );
    },
    ng = function (e, t, n) {
      return { element: x(e), width: x(t), rows: x(n) };
    },
    rg = function (e, t) {
      return { element: x(e), cells: x(t) };
    },
    og = function (e, t) {
      var n = parseInt(In(e, t), 10);
      return isNaN(n) ? 1 : n;
    },
    ig = function (e) {
      return W(
        e,
        function (e, t) {
          return t.cells().length > e ? t.cells().length : e;
        },
        0
      );
    },
    ag = function (e, t) {
      for (var n, r = e.rows(), o = 0; o < r.length; o++)
        for (var i = r[o].cells(), a = 0; a < i.length; a++)
          if (Dt(i[a], t)) return B.some(((n = o), { x: x(a), y: x(n) }));
      return B.none();
    },
    ug = function (e, t, n, r, o) {
      for (var i = [], a = e.rows(), u = n; u <= o; u++) {
        var s = a[u].cells(),
          c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
        i.push(rg(a[u].element(), c));
      }
      return i;
    },
    sg = function (e) {
      var o = ng(pu(e), 0, []);
      return (
        z(Ya(e, "tr"), function (n, r) {
          z(Ya(n, "td,th"), function (e, t) {
            !(function (e, t, n, r, o) {
              for (
                var i = og(o, "rowspan"),
                  a = og(o, "colspan"),
                  u = e.rows(),
                  s = n;
                s < n + i;
                s++
              ) {
                u[s] || (u[s] = rg(gu(r), []));
                for (var c = t; c < t + a; c++) {
                  u[s].cells()[c] = s === n && c === t ? o : pu(o);
                }
              }
            })(
              o,
              (function (e, t, n) {
                for (
                  ;
                  (r = t),
                    (o = n),
                    (i = void 0),
                    ((i = e.rows())[o] ? i[o].cells() : [])[r];

                )
                  t++;
                var r, o, i;
                return t;
              })(o, t, r),
              r,
              n,
              e
            );
          });
        }),
        ng(o.element(), ig(o.rows()), o.rows())
      );
    },
    cg = function (e) {
      return (
        (n = U((t = e).rows(), function (e) {
          var t = U(e.cells(), function (e) {
              var t = gu(e);
              return Mn(t, "colspan"), Mn(t, "rowspan"), t;
            }),
            n = pu(e.element());
          return en(n, t), n;
        })),
        (r = pu(t.element())),
        (o = Ct.fromTag("tbody")),
        en(o, n),
        Zt(r, o),
        r
      );
      var t, n, r, o;
    },
    lg = function (l, e, t) {
      return ag(l, e).bind(function (c) {
        return ag(l, t).map(function (e) {
          return (
            (t = l),
            (r = e),
            (o = (n = c).x()),
            (i = n.y()),
            (a = r.x()),
            (u = r.y()),
            (s = i < u ? ug(t, o, i, a, u) : ug(t, o, u, a, i)),
            ng(t.element(), ig(s), s)
          );
          var t, n, r, o, i, a, u, s;
        });
      });
    },
    fg = function (t, n) {
      return K(t, function (e) {
        return "li" === wt(e) && ff(e, n);
      }).fold(x([]), function (e) {
        return K(t, function (e) {
          return "ul" === wt(e) || "ol" === wt(e);
        })
          .map(function (e) {
            return [Ct.fromTag("li"), Ct.fromTag(wt(e))];
          })
          .getOr([]);
      });
    },
    dg = function (e, t) {
      var n,
        r = Ct.fromDom(t.commonAncestorContainer),
        o = yd(r, e),
        i = H(o, function (e) {
          return Xn(e) || Wn(e);
        }),
        a = fg(o, t),
        u = i.concat(
          a.length
            ? a
            : Qn((n = r))
            ? Mt(n)
                .filter(Jn)
                .fold(x([]), function (e) {
                  return [n, e];
                })
            : Jn(n)
            ? [n]
            : []
        );
      return U(u, pu);
    },
    mg = function () {
      return tg([]);
    },
    pg = function (e, t) {
      return (
        (n = Ct.fromDom(t.cloneContents())),
        (r = dg(e, t)),
        (o = W(
          r,
          function (e, t) {
            return Zt(t, e), t;
          },
          n
        )),
        0 < r.length ? tg([o]) : o
      );
      var n, r, o;
    },
    gg = function (e, o) {
      return (
        (t = e),
        (n = o[0]),
        eu(n, "table", N(Dt, t))
          .bind(function (e) {
            var t = o[0],
              n = o[o.length - 1],
              r = sg(e);
            return lg(r, t, n).map(function (e) {
              return tg([cg(e)]);
            });
          })
          .getOrThunk(mg)
      );
      var t, n;
    },
    hg = function (e, t) {
      var n,
        r,
        o = uf(t, e);
      return 0 < o.length
        ? gg(e, o)
        : ((n = e), 0 < (r = t).length && r[0].collapsed ? mg() : pg(n, r[0]));
    },
    vg = function (e, t) {
      return 0 <= t && t < e.length && Tl(e.charAt(t));
    },
    yg = function (e) {
      var t = Cu(e.innerText);
      return mt.browser.isIE() ? t.replace(/^[ \f\n\r\t\v]+/, "") : t;
    },
    bg = function (e, t, n) {
      if (
        (void 0 === n && (n = {}),
        (n.get = !0),
        (n.format = t),
        (n.selection = !0),
        (n = e.fire("BeforeGetContent", n)).isDefaultPrevented())
      )
        return e.fire("GetContent", n), n.content;
      if ("text" === n.format)
        return (
          (l = e),
          B.from(l.selection.getRng())
            .map(function (e) {
              var t = l.dom.add(
                  l.getBody(),
                  "div",
                  {
                    "data-mce-bogus": "all",
                    style: "overflow: hidden; opacity: 0;",
                  },
                  e.cloneContents()
                ),
                n = yg(t),
                r = Cu(t.textContent);
              if ((l.dom.remove(t), vg(r, 0) || vg(r, r.length - 1))) {
                var o = l.dom.getParent(
                    e.commonAncestorContainer,
                    l.dom.isBlock
                  ),
                  i = yg(o),
                  a = i.indexOf(n);
                return -1 === a
                  ? n
                  : (vg(i, a - 1) ? " " : "") +
                      n +
                      (vg(i, a + n.length) ? " " : "");
              }
              return n;
            })
            .getOr("")
        );
      n.getInner = !0;
      var r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f =
          ((o = n),
          (i = (r = e).selection.getRng()),
          (a = r.dom.create("body")),
          (u = r.selection.getSel()),
          (s = eg(r, of(u))),
          (c = o.contextual
            ? hg(Ct.fromDom(r.getBody()), s).dom()
            : i.cloneContents()) && a.appendChild(c),
          r.selection.serializer.serialize(a, o));
      return "tree" === n.format
        ? f
        : ((n.content = e.selection.isCollapsed() ? "" : f),
          e.fire("GetContent", n),
          n.content);
    },
    Cg = function (e) {
      return vn(e)
        ? e.outerHTML
        : En(e)
        ? yr.encodeRaw(e.data, !1)
        : kn(e)
        ? "\x3c!--" + e.data + "--\x3e"
        : "";
    },
    wg = function (e, t, n) {
      var r = (function (e) {
        var t,
          n = V.document.createElement("div"),
          r = V.document.createDocumentFragment();
        for (e && (n.innerHTML = e); (t = n.firstChild); ) r.appendChild(t);
        return r;
      })(t);
      if (e.hasChildNodes() && n < e.childNodes.length) {
        var o = e.childNodes[n];
        o.parentNode.insertBefore(r, o);
      } else e.appendChild(r);
    },
    xg = function (e, t) {
      var n,
        r,
        p,
        g,
        o,
        h,
        v,
        c,
        y,
        l,
        i,
        a = U(te(t.childNodes), Cg);
      return (
        (g = e),
        (o = (p = a).length + g.length + 2),
        (h = new Array(o)),
        (v = new Array(o)),
        (c = function (e, t, n, r, o) {
          var i = l(e, t, n, r);
          if (
            null === i ||
            (i.start === t && i.diag === t - r) ||
            (i.end === e && i.diag === e - n)
          )
            for (var a = e, u = n; a < t || u < r; )
              a < t && u < r && p[a] === g[u]
                ? (o.push([0, p[a]]), ++a, ++u)
                : r - n < t - e
                ? (o.push([2, p[a]]), ++a)
                : (o.push([1, g[u]]), ++u);
          else {
            c(e, i.start, n, i.start - i.diag, o);
            for (var s = i.start; s < i.end; ++s) o.push([0, p[s]]);
            c(i.end, t, i.end - i.diag, r, o);
          }
        }),
        (y = function (e, t, n, r) {
          for (var o = e; o - t < r && o < n && p[o] === g[o - t]; ) ++o;
          return { start: e, end: o, diag: t };
        }),
        (l = function (e, t, n, r) {
          var o = t - e,
            i = r - n;
          if (0 == o || 0 == i) return null;
          var a,
            u,
            s,
            c,
            l,
            f = o - i,
            d = i + o,
            m = (d % 2 == 0 ? d : 1 + d) / 2;
          for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
            for (u = -a; u <= a; u += 2) {
              for (
                s = u + m,
                  u === -a || (u !== a && h[s - 1] < h[s + 1])
                    ? (h[s] = h[s + 1])
                    : (h[s] = h[s - 1] + 1),
                  l = (c = h[s]) - e + n - u;
                c < t && l < r && p[c] === g[l];

              )
                (h[s] = ++c), ++l;
              if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s])
                return y(v[s - f], u + e - n, t, r);
            }
            for (u = f - a; u <= f + a; u += 2) {
              for (
                s = u + m - f,
                  u === f - a || (u !== f + a && v[s + 1] <= v[s - 1])
                    ? (v[s] = v[s + 1] - 1)
                    : (v[s] = v[s - 1]),
                  l = (c = v[s] - 1) - e + n - u;
                e <= c && n <= l && p[c] === g[l];

              )
                (v[s] = c--), l--;
              if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f])
                return y(v[s], u + e - n, t, r);
            }
          }
        }),
        (i = []),
        c(0, p.length, 0, g.length, i),
        (n = t),
        (r = 0),
        z(i, function (e) {
          0 === e[0]
            ? r++
            : 1 === e[0]
            ? (wg(n, e[1], r), r++)
            : 2 === e[0] &&
              (function (e, t) {
                if (e.hasChildNodes() && t < e.childNodes.length) {
                  var n = e.childNodes[t];
                  n.parentNode.removeChild(n);
                }
              })(n, r);
        }),
        t
      );
    },
    Sg = Oa(B.none()),
    Ng = function (n) {
      var e,
        t =
          ((e = n.getBody()),
          H(U(te(e.childNodes), Cg), function (e) {
            return 0 < e.length;
          })),
        r = Y(t, function (e) {
          var t = Vf(n.serializer, e);
          return 0 < t.length ? [t] : [];
        }),
        o = r.join("");
      return -1 !== o.indexOf("</iframe>")
        ? {
            type: "fragmented",
            fragments: r,
            content: "",
            bookmark: null,
            beforeBookmark: null,
          }
        : {
            type: "complete",
            fragments: null,
            content: o,
            bookmark: null,
            beforeBookmark: null,
          };
    },
    Eg = function (e, t, n) {
      "fragmented" === t.type
        ? xg(t.fragments, e.getBody())
        : e.setContent(t.content, { format: "raw" }),
        e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark);
    },
    kg = function (e) {
      return "fragmented" === e.type ? e.fragments.join("") : e.content;
    },
    _g = function (e) {
      var t = Ct.fromTag(
        "body",
        Sg.get().getOrThunk(function () {
          var e = V.document.implementation.createHTMLDocument("undo");
          return Sg.set(B.some(e)), e;
        })
      );
      return du(t, kg(e)), z(Ya(t, "*[data-mce-bogus]"), rn), t.dom().innerHTML;
    },
    Tg = function (e, t) {
      return (
        !(!e || !t) && ((r = t), kg(e) === kg(r) || ((n = t), _g(e) === _g(n)))
      );
      var n, r;
    },
    Rg = function (e) {
      return 0 === e.get();
    },
    Ag = function (e, t, n) {
      Rg(n) && (e.typing = t);
    },
    Dg = function (e, t) {
      e.typing && (Ag(e, !1, t), e.add());
    },
    Og = function (e) {
      return e instanceof Tf;
    },
    Bg = function (e, t) {
      Zm(e.serializer.getNodeFilters(), e.serializer.getAttributeFilters(), t);
    },
    Pg = function () {
      return {
        type: "complete",
        fragments: [],
        content: "",
        bookmark: null,
        beforeBookmark: null,
      };
    },
    Lg = function (s) {
      return {
        undoManager: {
          beforeChange: function (e, t) {
            return (
              (n = s), (r = t), void (Rg(e) && r.set(B.some($s(n.selection))))
            );
            var n, r;
          },
          addUndoLevel: function (e, t, n, r, o, i) {
            return (function (e, t, n, r, o, i, a) {
              var u = Ng(e);
              if (
                ((i = i || {}),
                (i = yt.extend(i, u)),
                !1 === Rg(r) || e.removed)
              )
                return null;
              var s = t.data[n.get()];
              if (
                e
                  .fire("BeforeAddUndo", {
                    level: i,
                    lastLevel: s,
                    originalEvent: a,
                  })
                  .isDefaultPrevented()
              )
                return null;
              if (s && Tg(s, i)) return null;
              t.data[n.get()] &&
                o.get().each(function (e) {
                  t.data[n.get()].beforeBookmark = e;
                });
              var c = e.getParam("custom_undo_redo_levels", 0, "number");
              if (c && t.data.length > c) {
                for (var l = 0; l < t.data.length - 1; l++)
                  t.data[l] = t.data[l + 1];
                t.data.length--, n.set(t.data.length);
              }
              (i.bookmark = $s(e.selection)),
                n.get() < t.data.length - 1 && (t.data.length = n.get() + 1),
                t.data.push(i),
                n.set(t.data.length - 1);
              var f = { level: i, lastLevel: s, originalEvent: a };
              return (
                e.fire("AddUndo", f),
                0 < n.get() && (e.setDirty(!0), e.fire("change", f)),
                i
              );
            })(s, e, t, n, r, o, i);
          },
          undo: function (e, t, n) {
            return (
              (r = s),
              (i = t),
              (a = n),
              (o = e).typing && (o.add(), (o.typing = !1), Ag(o, !1, i)),
              0 < a.get() &&
                (a.set(a.get() - 1),
                (u = o.data[a.get()]),
                Eg(r, u, !0),
                r.setDirty(!0),
                r.fire("Undo", { level: u })),
              u
            );
            var r, o, i, a, u;
          },
          redo: function (e, t) {
            return (
              (n = s),
              (o = t),
              (r = e).get() < o.length - 1 &&
                (r.set(r.get() + 1),
                (i = o[r.get()]),
                Eg(n, i, !1),
                n.setDirty(!0),
                n.fire("Redo", { level: i })),
              i
            );
            var n, r, o, i;
          },
          clear: function (e, t) {
            return (
              (n = s),
              (o = t),
              ((r = e).data = []),
              o.set(0),
              (r.typing = !1),
              void n.fire("ClearUndos")
            );
            var n, r, o;
          },
          reset: function (e) {
            return (t = e).clear(), void t.add();
            var t;
          },
          hasUndo: function (e, t) {
            return (
              (n = s),
              (r = e),
              0 < t.get() || (r.typing && r.data[0] && !Tg(Ng(n), r.data[0]))
            );
            var n, r;
          },
          hasRedo: function (e, t) {
            return (n = e), t.get() < n.data.length - 1 && !n.typing;
            var n;
          },
          transact: function (e, t, n) {
            return (
              (o = n), Dg((r = e), t), r.beforeChange(), r.ignore(o), r.add()
            );
            var r, o;
          },
          ignore: function (e, t) {
            return (function (e, t) {
              try {
                e.set(e.get() + 1), t();
              } finally {
                e.set(e.get() - 1);
              }
            })(e, t);
          },
          extra: function (e, t, n, r) {
            return (function (e, t, n, r, o) {
              if (t.transact(r)) {
                var i = t.data[n.get()].bookmark,
                  a = t.data[n.get() - 1];
                Eg(e, a, !0),
                  t.transact(o) && (t.data[n.get() - 1].beforeBookmark = i);
              }
            })(s, e, t, n, r);
          },
        },
        formatter: {
          apply: function (e, t, n) {
            return Zp(s, e, t, n);
          },
          remove: function (e, t, n, r) {
            return Hp(s, e, t, n, r);
          },
          toggle: function (e, t, n) {
            return (
              (o = e),
              (i = t),
              (a = n),
              (u = (r = s).formatter.get(o)),
              void (!fp(r, o, i, a) || ("toggle" in u[0] && !u[0].toggle)
                ? Zp
                : Hp)(r, o, i, a)
            );
            var r, o, i, a, u;
          },
        },
        editor: {
          getContent: function (e, t) {
            return (
              (n = s),
              (r = e),
              (o = t),
              B.from(n.getBody()).fold(
                x("tree" === r.format ? new Tf("body", 11) : ""),
                function (e) {
                  return $f(n, r, o, e);
                }
              )
            );
            var n, r, o;
          },
          setContent: function (e, t) {
            return np(s, e, t);
          },
          insertContent: function (e, t) {
            return ym(s, e, t);
          },
        },
        selection: {
          getContent: function (e, t) {
            return bg(s, e, t);
          },
        },
        raw: {
          getModel: function () {
            return B.none();
          },
        },
      };
    },
    Ig = function (e) {
      return me(e.plugins, "rtc");
    },
    Mg = function (n) {
      var r = n;
      return de(n.plugins, "rtc").fold(
        function () {
          return (r.rtcInstance = Lg(n)), B.none();
        },
        function (e) {
          return B.some(
            e.setup().then(function (e) {
              var o, i, a, t;
              return (
                (r.rtcInstance =
                  ((o = n),
                  (i = e),
                  (a = function (e) {
                    return E(e) ? e : {};
                  }),
                  (t = p("Unimplemented feature for rtc")),
                  {
                    undoManager: {
                      beforeChange: f,
                      addUndoLevel: t,
                      undo: function () {
                        return i.undo(), Pg();
                      },
                      redo: function () {
                        return i.redo(), Pg();
                      },
                      clear: t,
                      reset: t,
                      hasUndo: function () {
                        return i.hasUndo();
                      },
                      hasRedo: function () {
                        return i.hasRedo();
                      },
                      transact: function (e, t, n) {
                        return i.transact(n), Pg();
                      },
                      ignore: t,
                      extra: t,
                    },
                    formatter: {
                      apply: function (e, t, n) {
                        return i.applyFormat(e, a(t));
                      },
                      remove: function (e, t, n, r) {
                        return i.removeFormat(e, a(t));
                      },
                      toggle: function (e, t, n) {
                        return i.toggleFormat(e, a(t));
                      },
                    },
                    editor: {
                      getContent: function (e, t) {
                        if ("html" !== t && "tree" !== t)
                          return Lg(o).editor.getContent(e, t);
                        var n = i.getContent(),
                          r = Of({ inner: !0 });
                        return Bg(o, n), "tree" === t ? n : r.serialize(n);
                      },
                      setContent: function (e, t) {
                        var n = Og(e)
                          ? e
                          : o.parser.parse(e, {
                              isRootContent: !0,
                              insert: !0,
                            });
                        return i.setContent(n), e;
                      },
                      insertContent: function (e, t) {
                        var n = Og(e) ? e : o.parser.parse(e, { insert: !0 });
                        i.insertContent(n);
                      },
                    },
                    selection: {
                      getContent: function (e, t) {
                        if ("html" !== e && "tree" !== e)
                          return Lg(o).selection.getContent(e, t);
                        var n = i.getSelectedContent(),
                          r = Of({});
                        return Bg(o, n), "tree" === e ? n : r.serialize(n);
                      },
                    },
                    raw: {
                      getModel: function () {
                        return B.some(i.getRawModel());
                      },
                    },
                  })),
                e.isRemote
              );
            })
          );
        }
      );
    },
    Fg = function (e) {
      return e.rtcInstance ? e.rtcInstance : Lg(e);
    },
    Ug = function (e) {
      var t = e.rtcInstance;
      if (t) return t;
      throw new Error("Failed to get RTC instance not yet initialized.");
    },
    zg = function (e, t) {
      void 0 === t && (t = {});
      var n,
        r,
        o = t.format ? t.format : "html";
      return (n = t), (r = o), Fg(e).editor.getContent(n, r);
    },
    jg = function (e, t, n) {
      return (
        void 0 === n && (n = {}),
        (r = t),
        (o = n),
        Fg(e).editor.setContent(r, o)
      );
      var r, o;
    },
    Hg = Ea.DOM,
    Vg = function (e) {
      return B.from(e).each(function (e) {
        return e.destroy();
      });
    },
    qg = function (e) {
      if (!e.removed) {
        var t = e._selectionOverrides,
          n = e.editorUpload,
          r = e.getBody(),
          o = e.getElement();
        r && e.save({ is_removing: !0 }),
          (e.removed = !0),
          e.unbindAllNativeEvents(),
          e.hasHiddenInput && o && Hg.remove(o.nextSibling),
          e.fire("remove"),
          e.editorManager.remove(e),
          !e.inline &&
            r &&
            ((i = e), Hg.setStyle(i.id, "display", i.orgDisplay)),
          e.fire("detach"),
          Hg.remove(e.getContainer()),
          Vg(t),
          Vg(n),
          e.destroy();
      }
      var i;
    },
    $g = function (e, t) {
      var n,
        r,
        o,
        i = e.selection,
        a = e.dom;
      e.destroyed ||
        (t || e.removed
          ? (t ||
              (e.editorManager.off("beforeunload", e._beforeUnload),
              e.theme && e.theme.destroy && e.theme.destroy(),
              Vg(i),
              Vg(a)),
            (r = (n = e).formElement) &&
              (r._mceOldSubmit &&
                ((r.submit = r._mceOldSubmit), (r._mceOldSubmit = null)),
              Hg.unbind(r, "submit reset", n.formEventDelegate)),
            ((o = e).contentAreaContainer = o.formElement = o.container = o.editorContainer = null),
            (o.bodyElement = o.contentDocument = o.contentWindow = null),
            (o.iframeElement = o.targetElm = null),
            o.selection &&
              (o.selection = o.selection.win = o.selection.dom = o.selection.dom.doc = null),
            (e.destroyed = !0))
          : e.remove());
    },
    Wg = Object.prototype.hasOwnProperty,
    Kg =
      ((Ap = function (e, t) {
        return E(e) && E(t) ? Kg(e, t) : t;
      }),
      function () {
        for (var e = new Array(arguments.length), t = 0; t < e.length; t++)
          e[t] = arguments[t];
        if (0 === e.length) throw new Error("Can't merge zero objects");
        for (var n = {}, r = 0; r < e.length; r++) {
          var o = e[r];
          for (var i in o) Wg.call(o, i) && (n[i] = Ap(n[i], o[i]));
        }
        return n;
      }),
    Xg = ot().deviceType,
    Yg = Xg.isTouch(),
    Gg = Xg.isPhone(),
    Jg = Xg.isTablet(),
    Qg = ["lists", "autolink", "autosave"],
    Zg = { table_grid: !1, object_resizing: !1, resize: !1 },
    eh = function (e) {
      var t = k(e) ? e.join(" ") : e,
        n = U(q(t) ? t.split(" ") : [], Ke);
      return H(n, function (e) {
        return 0 < e.length;
      });
    },
    th = function (n, e) {
      var t,
        r,
        o = ce(e, function (e, t) {
          return M(n, t);
        });
      return (t = o.t), (r = o.f), { sections: x(t), settings: x(r) };
    },
    nh = function (e, t) {
      return e.sections().hasOwnProperty(t);
    },
    rh = function (e, t) {
      return de(e, "toolbar_mode")
        .orThunk(function () {
          return de(e, "toolbar_drawer").map(function (e) {
            return !1 === e ? "wrap" : e;
          });
        })
        .getOr(t);
    },
    oh = function (e, t, n, r) {
      var o,
        i,
        a,
        u,
        s,
        c,
        l,
        f = eh(n.forced_plugins),
        d = eh(r.plugins),
        m = nh((o = t), (i = "mobile")) ? o.sections()[i] : {},
        p = m.plugins ? eh(m.plugins) : d,
        g =
          e &&
          ((s = u = "mobile"),
          (c = (a = t).sections()),
          nh(a, u) && c[u].theme === s)
            ? H(p, N(M, Qg))
            : e && nh(t, "mobile")
            ? p
            : d,
        h = ((l = g), [].concat(eh(f)).concat(eh(l)));
      return yt.extend(r, { plugins: h.join(" ") });
    },
    ih = function (e, t, n, r, o) {
      var i,
        a,
        u,
        s,
        c,
        l,
        f,
        d = e
          ? {
              mobile:
                ((i = o.mobile || {}),
                (a = t),
                (u = {
                  resize: !1,
                  toolbar_mode: rh(i, "scrolling"),
                  toolbar_sticky: !1,
                }),
                xe(xe(xe({}, Zg), u), a ? { menubar: !1 } : {})),
            }
          : {},
        m = th(["mobile"], Kg(d, o)),
        p = yt.extend(
          n,
          r,
          m.settings(),
          ((f = m),
          e && nh(f, "mobile")
            ? (function (e, t, n) {
                void 0 === n && (n = {});
                var r = e.sections(),
                  o = r.hasOwnProperty(t) ? r[t] : {};
                return yt.extend({}, n, o);
              })(m, "mobile")
            : {}),
          {
            validate: !0,
            external_plugins:
              ((s = r),
              (c = m.settings()),
              (l = c.external_plugins ? c.external_plugins : {}),
              s && s.external_plugins
                ? yt.extend({}, s.external_plugins, l)
                : l),
          }
        );
      return oh(e, m, r, p);
    },
    ah = function (e, t, n, r, o) {
      var i,
        a,
        u,
        s,
        c =
          ((i = n),
          (a = Yg),
          (u = e),
          (s = {
            id: t,
            theme: "silver",
            toolbar_mode: rh(o, "floating"),
            plugins: "",
            document_base_url: i,
            add_form_submit_trigger: !0,
            submit_patch: !0,
            add_unload_trigger: !0,
            convert_urls: !0,
            relative_urls: !0,
            remove_script_host: !0,
            object_resizing: !0,
            doctype: "<!DOCTYPE html>",
            visual: !0,
            font_size_legacy_values:
              "xx-small,small,medium,large,x-large,xx-large,300%",
            forced_root_block: "p",
            hidden_input: !0,
            inline_styles: !0,
            convert_fonts_to_spans: !0,
            indent: !0,
            indent_before:
              "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
            indent_after:
              "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
            entity_encoding: "named",
            url_converter: u.convertURL,
            url_converter_scope: u,
          }),
          xe(xe({}, s), a ? Zg : {}));
      return ih(Gg || Jg, Gg, c, r, o);
    },
    uh = function (e, t, n) {
      return B.from(t.settings[n]).filter(e);
    },
    sh = function (e, t, n, r) {
      var o,
        i,
        a,
        u = t in e.settings ? e.settings[t] : n;
      return "hash" === r
        ? ((a = {}),
          "string" == typeof (i = u)
            ? z(
                0 < i.indexOf("=")
                  ? i.split(/[;,](?![^=;,]*(?:[;,]|$))/)
                  : i.split(","),
                function (e) {
                  var t = e.split("=");
                  1 < t.length
                    ? (a[yt.trim(t[0])] = yt.trim(t[1]))
                    : (a[yt.trim(t[0])] = yt.trim(t[0]));
                }
              )
            : (a = i),
          a)
        : "string" === r
        ? uh(q, e, t).getOr(n)
        : "number" === r
        ? uh(D, e, t).getOr(n)
        : "boolean" === r
        ? uh(T, e, t).getOr(n)
        : "object" === r
        ? uh(E, e, t).getOr(n)
        : "array" === r
        ? uh(k, e, t).getOr(n)
        : "string[]" === r
        ? uh(
            ((o = q),
            function (e) {
              return k(e) && G(e, o);
            }),
            e,
            t
          ).getOr(n)
        : "function" === r
        ? uh(A, e, t).getOr(n)
        : u;
    },
    ch =
      ((Dp = {}),
      {
        add: function (e, t) {
          Dp[e] = t;
        },
        get: function (e) {
          return Dp[e] ? Dp[e] : { icons: {} };
        },
        has: function (e) {
          return me(Dp, e);
        },
      }),
    lh = function (e, t) {
      return t.dom()[e];
    },
    fh = function (e, t) {
      return parseInt(Fn(t, e), 10);
    },
    dh = N(lh, "clientWidth"),
    mh = N(lh, "clientHeight"),
    ph = N(fh, "margin-top"),
    gh = N(fh, "margin-left"),
    hh = function (e, t, n) {
      var r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        p = Ct.fromDom(e.getBody()),
        g = e.inline
          ? p
          : ((r = p), Ct.fromDom(r.dom().ownerDocument.documentElement)),
        h =
          ((o = e.inline),
          (a = t),
          (u = n),
          (s = (i = g).dom().getBoundingClientRect()),
          {
            x: a - (o ? s.left + i.dom().clientLeft + gh(i) : 0),
            y: u - (o ? s.top + i.dom().clientTop + ph(i) : 0),
          });
      return (
        (l = h.x),
        (f = h.y),
        (d = dh((c = g))),
        (m = mh(c)),
        0 <= l && 0 <= f && l <= d && f <= m
      );
    },
    vh = function (e) {
      var t,
        n = e.inline ? e.getBody() : e.getContentAreaContainer();
      return (
        (t = n),
        B.from(t)
          .map(Ct.fromDom)
          .map(function (e) {
            return Bt(Pt(e), e);
          })
          .getOr(!1)
      );
    };
  function yh(n) {
    var t,
      o = [],
      i = function () {
        var e = n.theme;
        return e && e.getNotificationManagerImpl
          ? e.getNotificationManagerImpl()
          : (function t() {
              var e = function () {
                throw new Error(
                  "Theme did not provide a NotificationManager implementation."
                );
              };
              return { open: e, close: e, reposition: e, getArgs: e };
            })();
      },
      a = function () {
        0 < o.length && i().reposition(o);
      },
      u = function (t) {
        X(o, function (e) {
          return e === t;
        }).each(function (e) {
          o.splice(e, 1);
        });
      },
      r = function (r) {
        if (!n.removed && vh(n))
          return K(o, function (e) {
            return (
              (t = i().getArgs(e)),
              (n = r),
              !(
                t.type !== n.type ||
                t.text !== n.text ||
                t.progressBar ||
                t.timeout ||
                n.progressBar ||
                n.timeout
              )
            );
            var t, n;
          }).getOrThunk(function () {
            n.editorManager.setActive(n);
            var e,
              t = i().open(r, function () {
                u(t), a();
              });
            return (e = t), o.push(e), a(), t;
          });
      };
    return (
      (t = n).on("SkinLoaded", function () {
        var e = t.getParam("service_message");
        e && r({ text: e, type: "warning", timeout: 0 });
      }),
      t.on("ResizeEditor ResizeWindow NodeChange", function () {
        fa.requestAnimationFrame(a);
      }),
      t.on("remove", function () {
        z(o.slice(), function (e) {
          i().close(e);
        });
      }),
      {
        open: r,
        close: function () {
          B.from(o[0]).each(function (e) {
            i().close(e), u(e), a();
          });
        },
        getNotifications: function () {
          return o;
        },
      }
    );
  }
  var bh = Fa.PluginManager,
    Ch = Fa.ThemeManager;
  var wh = function (n) {
      var r = [],
        o = function () {
          var e = n.theme;
          return e && e.getWindowManagerImpl
            ? e.getWindowManagerImpl()
            : (function t() {
                var e = function () {
                  throw new Error(
                    "Theme did not provide a WindowManager implementation."
                  );
                };
                return {
                  open: e,
                  openUrl: e,
                  alert: e,
                  confirm: e,
                  close: e,
                  getParams: e,
                  setParams: e,
                };
              })();
        },
        i = function (e, t) {
          return function () {
            return t ? t.apply(e, arguments) : undefined;
          };
        },
        a = function (e) {
          var t;
          r.push(e), (t = e), n.fire("OpenWindow", { dialog: t });
        },
        u = function (t) {
          var e;
          (e = t),
            n.fire("CloseWindow", { dialog: e }),
            0 ===
              (r = H(r, function (e) {
                return e !== t;
              })).length && n.focus();
        },
        s = function (e) {
          n.editorManager.setActive(n), Lm(n);
          var t = e();
          return a(t), t;
        };
      return (
        n.on("remove", function () {
          z(r, function (e) {
            o().close(e);
          });
        }),
        {
          open: function (e, t) {
            return s(function () {
              return o().open(e, t, u);
            });
          },
          openUrl: function (e) {
            return s(function () {
              return o().openUrl(e, u);
            });
          },
          alert: function (e, t, n) {
            o().alert(e, i(n || this, t));
          },
          confirm: function (e, t, n) {
            o().confirm(e, i(n || this, t));
          },
          close: function () {
            B.from(r[r.length - 1]).each(function (e) {
              o().close(e), u(e);
            });
          },
        }
      );
    },
    xh = function (e, t) {
      e.notificationManager.open({ type: "error", text: t });
    },
    Sh = function (e, t) {
      e._skinLoaded
        ? xh(e, t)
        : e.on("SkinLoaded", function () {
            xh(e, t);
          });
    },
    Nh = function (e, t, n) {
      var r, o;
      (r = t), (o = { message: n }), e.fire(r, o), V.console.error(n);
    },
    Eh = function (e, t, n) {
      return n
        ? "Failed to load " + e + ": " + n + " from url " + t
        : "Failed to load " + e + " url: " + t;
    },
    kh = function (e, t, n) {
      Nh(e, "PluginLoadError", Eh("plugin", t, n));
    },
    _h = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = V.window.console;
      r &&
        (r.error ? r.error.apply(r, Se([e], t)) : r.log.apply(r, Se([e], t)));
    },
    Th = function (t) {
      var e,
        n,
        r =
          ((n = (e = t).getParam("content_css")),
          q(n)
            ? U(n.split(","), Ke)
            : k(n)
            ? n
            : !1 === n || e.inline
            ? []
            : ["default"]),
        o = t.editorManager.baseURL + "/skins/content",
        i = "content" + t.editorManager.suffix + ".css",
        a = !0 === t.inline;
      return U(r, function (e) {
        return /^[a-z0-9\-]+$/i.test(e) && !a
          ? o + "/" + e + "/" + i
          : t.documentBaseURI.toAbsolute(e);
      });
    };
  var Rh = (function ME(r, o) {
      var e = function (e) {
          var t = o(e);
          if (t <= 0 || null === t) {
            var n = Fn(e, r);
            return parseFloat(n) || 0;
          }
          return t;
        },
        i = function (o, e) {
          return W(
            e,
            function (e, t) {
              var n = Fn(o, t),
                r = n === undefined ? 0 : parseInt(n, 10);
              return isNaN(r) ? e : e + r;
            },
            0
          );
        };
      return {
        set: function (e, t) {
          if (!D(t) && !t.match(/^[0-9]+$/))
            throw new Error(
              r + ".set accepts only positive integer values. Value was " + t
            );
          var n = e.dom();
          On(n) && (n.style[r] = t + "px");
        },
        get: e,
        getOuter: e,
        aggregate: i,
        max: function (e, t, n) {
          var r = i(e, n);
          return r < t ? t - r : 0;
        },
      };
    })("height", function (e) {
      var t = e.dom();
      return on(e) ? t.getBoundingClientRect().height : t.offsetHeight;
    }),
    Ah = function (r, e) {
      return r.view(e).fold(x([]), function (e) {
        var t = r.owner(e),
          n = Ah(r, t);
        return [e].concat(n);
      });
    },
    Dh = /* */ Object.freeze({
      __proto__: null,
      view: function (e) {
        return (e.dom() === V.document
          ? B.none()
          : B.from(e.dom().defaultView.frameElement)
        ).map(Ct.fromDom);
      },
      owner: function (e) {
        return Pt(e);
      },
    }),
    Oh = function (e) {
      var t,
        n,
        r,
        o = Ct.fromDom(V.document),
        i = ln(o),
        a = ((t = e), (r = (n = Dh).owner(t)), Ah(n, r)),
        u = cn(e),
        s = $(
          a,
          function (e, t) {
            var n = cn(t);
            return { left: e.left + n.left(), top: e.top + n.top() };
          },
          { left: 0, top: 0 }
        );
      return un(s.left + u.left() + i.left(), s.top + u.top() + i.top());
    },
    Bh = function (e) {
      return "textarea" === wt(e);
    },
    Ph = function (e, t) {
      var n,
        r = (function (e) {
          var t = e.dom().ownerDocument,
            n = t.body,
            r = t.defaultView,
            o = t.documentElement;
          if (n === e.dom()) return un(n.offsetLeft, n.offsetTop);
          var i = sn(r.pageYOffset, o.scrollTop),
            a = sn(r.pageXOffset, o.scrollLeft),
            u = sn(o.clientTop, n.clientTop),
            s = sn(o.clientLeft, n.clientLeft);
          return cn(e).translate(a - s, i - u);
        })(e),
        o = ((n = e), Rh.get(n));
      return { element: e, bottom: r.top() + o, height: o, pos: r, cleanup: t };
    },
    Lh = function (e, t) {
      var n = (function (e, t) {
          var n = Ht(e);
          if (0 === n.length || Bh(e)) return { element: e, offset: t };
          if (t < n.length && !Bh(n[t])) return { element: n[t], offset: 0 };
          var r = n[n.length - 1];
          return Bh(r)
            ? { element: e, offset: t }
            : "img" === wt(r)
            ? { element: r, offset: 1 }
            : Et(r)
            ? { element: r, offset: vf(r).length }
            : { element: r, offset: Ht(r).length };
        })(e, t),
        r = Ct.fromHtml('<span data-mce-bogus="all">\ufeff</span>');
      return (
        Gt(n.element, r),
        Ph(r, function () {
          return nn(r);
        })
      );
    },
    Ih = function (n, r, o, i) {
      zh(
        n,
        function (e, t) {
          return Fh(n, r, o, i);
        },
        o
      );
    },
    Mh = function (e, t, n, r, o) {
      var i,
        a,
        u = { elm: r.element.dom(), alignToTop: o };
      (i = u),
        e.fire("ScrollIntoView", i).isDefaultPrevented() ||
          (n(t, ln(t).top(), r, o), (a = u), e.fire("AfterScrollIntoView", a));
    },
    Fh = function (e, t, n, r) {
      var o = Ct.fromDom(e.getBody()),
        i = Ct.fromDom(e.getDoc());
      o.dom().offsetWidth;
      var a = Lh(Ct.fromDom(n.startContainer), n.startOffset);
      Mh(e, i, t, a, r), a.cleanup();
    },
    Uh = function (e, t, n, r) {
      var o,
        i = Ct.fromDom(e.getDoc());
      Mh(e, i, n, ((o = t), Ph(Ct.fromDom(o), f)), r);
    },
    zh = function (e, t, n) {
      var r = n.startContainer,
        o = n.startOffset,
        i = n.endContainer,
        a = n.endOffset;
      t(Ct.fromDom(r), Ct.fromDom(i));
      var u = e.dom.createRng();
      u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n);
    },
    jh = function (e, t, n, r) {
      var o = e.pos;
      if (n) fn(o.left(), o.top(), r);
      else {
        var i = o.top() - t + e.height;
        fn(o.left(), i, r);
      }
    },
    Hh = function (e, t, n, r, o) {
      var i = n + t,
        a = r.pos.top(),
        u = r.bottom,
        s = n <= u - a;
      if (a < t) jh(r, n, !1 !== o, e);
      else if (i < a) {
        jh(r, n, s ? !1 !== o : !0 === o, e);
      } else i < u && !s && jh(r, n, !0 === o, e);
    },
    Vh = function (e, t, n, r) {
      var o = e.dom().defaultView.innerHeight;
      Hh(e, t, o, n, r);
    },
    qh = function (e, t, n, r) {
      var o = e.dom().defaultView.innerHeight;
      Hh(e, t, o, n, r);
      var i = Oh(n.element),
        a = pn(V.window);
      i.top() < a.y
        ? dn(n.element, !1 !== r)
        : i.top() > a.bottom && dn(n.element, !0 === r);
    },
    $h = function (e, t, n) {
      return Ih(e, Vh, t, n);
    },
    Wh = function (e, t, n) {
      return Uh(e, t, Vh, n);
    },
    Kh = function (e, t, n) {
      return Ih(e, qh, t, n);
    },
    Xh = function (e, t, n) {
      return Uh(e, t, qh, n);
    },
    Yh = function (e, t, n) {
      (e.inline ? $h : Kh)(e, t, n);
    },
    Gh = function (e) {
      return An(e) || Dn(e);
    },
    Jh = function (e, t, n) {
      var r,
        o,
        i,
        a,
        u,
        s = n;
      if (s.caretPositionFromPoint)
        (o = s.caretPositionFromPoint(e, t)) &&
          ((r = n.createRange()).setStart(o.offsetNode, o.offset),
          r.collapse(!0));
      else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
      else if (s.body.createTextRange) {
        r = s.body.createTextRange();
        try {
          r.moveToPoint(e, t), r.collapse(!0);
        } catch (c) {
          r = (function (e, n, t) {
            var r,
              o = t.elementFromPoint(e, n),
              i = t.body.createTextRange();
            if (
              ((o && "HTML" !== o.tagName) || (o = t.body),
              i.moveToElementText(o),
              0 <
                (r = (r = yt.toArray(i.getClientRects())).sort(function (e, t) {
                  return (
                    (e = Math.abs(Math.max(e.top - n, e.bottom - n))) -
                    (t = Math.abs(Math.max(t.top - n, t.bottom - n)))
                  );
                })).length)
            ) {
              n = (r[0].bottom + r[0].top) / 2;
              try {
                return i.moveToPoint(e, n), i.collapse(!0), i;
              } catch (a) {}
            }
            return null;
          })(e, t, n);
        }
        return (
          (i = r),
          (a = n.body),
          (u = i && i.parentElement ? i.parentElement() : null),
          Dn(
            (function (e, t, n) {
              for (; e && e !== t; ) {
                if (n(e)) return e;
                e = e.parentNode;
              }
              return null;
            })(u, a, Gh)
          )
            ? null
            : i
        );
      }
      return r;
    },
    Qh = function (e, t, n, r, o) {
      var i = n ? t.startContainer : t.endContainer,
        a = n ? t.startOffset : t.endOffset;
      return B.from(i)
        .map(Ct.fromDom)
        .map(function (e) {
          return r && t.collapsed ? e : Vt(e, o(e, a)).getOr(e);
        })
        .bind(function (e) {
          return Nt(e) ? B.some(e) : Mt(e).filter(Nt);
        })
        .map(function (e) {
          return e.dom();
        })
        .getOr(e);
    },
    Zh = function (e, t, n) {
      return Qh(e, t, !0, n, function (e, t) {
        return Math.min(e.dom().childNodes.length, t);
      });
    },
    ev = function (e, t, n) {
      return Qh(e, t, !1, n, function (e, t) {
        return 0 < t ? t - 1 : t;
      });
    },
    tv = function (e, t) {
      for (var n = e; e && En(e) && 0 === e.length; )
        e = t ? e.nextSibling : e.previousSibling;
      return e || n;
    },
    nv = function (e, t) {
      void 0 === t && (t = {});
      var n,
        r,
        o = t.format ? t.format : "html";
      return (n = o), (r = t), Ug(e).selection.getContent(n, r);
    },
    rv = function (e, t) {
      return (
        e &&
        t &&
        e.startContainer === t.startContainer &&
        e.startOffset === t.startOffset &&
        e.endContainer === t.endContainer &&
        e.endOffset === t.endOffset
      );
    },
    ov = function (e, t, n) {
      return (
        null !==
        (function (e, t, n) {
          for (; e && e !== t; ) {
            if (n(e)) return e;
            e = e.parentNode;
          }
          return null;
        })(e, t, n)
      );
    },
    iv = function (e, t, n) {
      return ov(e, t, function (e) {
        return e.nodeName === n;
      });
    },
    av = function (e) {
      return e && "TABLE" === e.nodeName;
    },
    uv = function (e, t, n) {
      for (
        var r = new Ai(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot());
        (t = r[n ? "prev" : "next"]());

      )
        if (Rn(t)) return !0;
    },
    sv = function (e, t, n, r, o) {
      var i,
        a,
        u = e.getRoot(),
        s = e.schema.getNonEmptyElements(),
        c = e.getParent(o.parentNode, e.isBlock) || u;
      if (r && Rn(o) && t && e.isEmpty(c))
        return B.some(Cs(o.parentNode, e.nodeIndex(o)));
      for (var l, f, d = new Ai(o, c); (a = d[r ? "prev" : "next"]()); ) {
        if (
          "false" === e.getContentEditableParent(a) ||
          ((f = u), Eu((l = a)) && !1 === ov(l, f, gl))
        )
          return B.none();
        if (En(a) && 0 < a.nodeValue.length)
          return !1 === iv(a, u, "A")
            ? B.some(Cs(a, r ? a.nodeValue.length : 0))
            : B.none();
        if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return B.none();
        i = a;
      }
      return n && i ? B.some(Cs(i, 0)) : B.none();
    },
    cv = function (e, t, n, r) {
      var o,
        i,
        a,
        u,
        s = e.getRoot(),
        c = !1;
      (o = r[(n ? "start" : "end") + "Container"]),
        (i = r[(n ? "start" : "end") + "Offset"]);
      var l,
        f,
        d,
        m = vn(o) && i === o.childNodes.length,
        p = e.schema.getNonEmptyElements();
      if (((u = n), Eu(o))) return B.none();
      if (
        (vn(o) && i > o.childNodes.length - 1 && (u = !1),
        _n(o) && ((o = s), (i = 0)),
        o === s)
      ) {
        if (u && (a = o.childNodes[0 < i ? i - 1 : 0])) {
          if (Eu(a)) return B.none();
          if (p[a.nodeName] || av(a)) return B.none();
        }
        if (o.hasChildNodes()) {
          if (
            ((i = Math.min(!u && 0 < i ? i - 1 : i, o.childNodes.length - 1)),
            (o = o.childNodes[i]),
            (i = En(o) && m ? o.data.length : 0),
            !t && o === s.lastChild && av(o))
          )
            return B.none();
          if (
            (function (e, t) {
              for (; t && t !== e; ) {
                if (Dn(t)) return !0;
                t = t.parentNode;
              }
              return !1;
            })(s, o) ||
            Eu(o)
          )
            return B.none();
          if (o.hasChildNodes() && !1 === av(o)) {
            var g = new Ai((a = o), s);
            do {
              if (Dn(a) || Eu(a)) {
                c = !1;
                break;
              }
              if (En(a) && 0 < a.nodeValue.length) {
                (i = u ? 0 : a.nodeValue.length), (o = a), (c = !0);
                break;
              }
              if (
                p[a.nodeName.toLowerCase()] &&
                (!(l = a) || !/^(TD|TH|CAPTION)$/.test(l.nodeName))
              ) {
                (i = e.nodeIndex(a)), (o = a.parentNode), u || i++, (c = !0);
                break;
              }
            } while ((a = u ? g.next() : g.prev()));
          }
        }
      }
      return (
        t &&
          (En(o) &&
            0 === i &&
            sv(e, m, t, !0, o).each(function (e) {
              (o = e.container()), (i = e.offset()), (c = !0);
            }),
          vn(o) &&
            (!(a = (a = o.childNodes[i]) || o.childNodes[i - 1]) ||
              !Rn(a) ||
              ((d = "A"),
              (f = a).previousSibling && f.previousSibling.nodeName === d) ||
              uv(e, a, !1) ||
              uv(e, a, !0) ||
              sv(e, m, t, !0, a).each(function (e) {
                (o = e.container()), (i = e.offset()), (c = !0);
              }))),
        u &&
          !t &&
          En(o) &&
          i === o.nodeValue.length &&
          sv(e, m, t, !1, o).each(function (e) {
            (o = e.container()), (i = e.offset()), (c = !0);
          }),
        c ? B.some(Cs(o, i)) : B.none()
      );
    },
    lv = function (e, t) {
      var n = t.collapsed,
        r = t.cloneRange(),
        o = Cs.fromRangeStart(t);
      return (
        cv(e, n, !0, r).each(function (e) {
          (n && Cs.isAbove(o, e)) || r.setStart(e.container(), e.offset());
        }),
        n ||
          cv(e, n, !1, r).each(function (e) {
            r.setEnd(e.container(), e.offset());
          }),
        n && r.collapse(!0),
        rv(t, r) ? B.none() : B.some(r)
      );
    },
    fv = function (e) {
      return 0 === e.dom().length ? (nn(e), B.none()) : B.some(e);
    },
    dv = function (r, e) {
      var t = B.from(e.firstChild).map(Ct.fromDom),
        n = B.from(e.lastChild).map(Ct.fromDom);
      r.deleteContents(), r.insertNode(e);
      var o = t.bind(Ft).filter(Et).bind(fv),
        i = n.bind(Ut).filter(Et).bind(fv);
      Bu(o, t.filter(Et), function (e, t) {
        var n, r;
        (n = t.dom()), (r = e.dom().data), n.insertData(0, r), nn(e);
      }),
        Bu(i, n.filter(Et), function (e, t) {
          var n = t.dom().length;
          t.dom().appendData(e.dom().data), r.setEnd(t.dom(), n), nn(e);
        }),
        r.collapse(!1);
    },
    mv = function (e, t, n) {
      void 0 === n && (n = {});
      var r,
        o =
          ((r = t),
          xe(xe({ format: "html" }, n), {
            set: !0,
            selection: !0,
            content: r,
          }));
      if (
        o.no_events ||
        !(o = e.fire("BeforeSetContent", o)).isDefaultPrevented()
      ) {
        n.content = (function (e, t) {
          if ("raw" === t.format) return t.content;
          var n = e.parser.parse(
            t.content,
            xe({ isRootContent: !0, forced_root_block: !1 }, t)
          );
          return Of({ validate: e.validate }, e.schema).serialize(n);
        })(e, o);
        var i = e.selection.getRng();
        dv(i, i.createContextualFragment(n.content)),
          e.selection.setRng(i),
          Yh(e, i),
          o.no_events || e.fire("SetContent", o);
      } else e.fire("SetContent", o);
    };
  function pv(e) {
    return { getBookmark: N(Nl, e), moveToBookmark: N(El, e) };
  }
  (pv = pv || {}).isBookmarkNode = kl;
  var gv = pv,
    hv = function (t, n, e) {
      if (e.collapsed) return !1;
      if (
        mt.browser.isIE() &&
        e.startOffset === e.endOffset - 1 &&
        e.startContainer === e.endContainer
      ) {
        var r = e.startContainer.childNodes[e.startOffset];
        if (vn(r))
          return F(r.getClientRects(), function (e) {
            return zu(e, t, n);
          });
      }
      return F(e.getClientRects(), function (e) {
        return zu(e, t, n);
      });
    },
    vv = {
      BACKSPACE: 8,
      DELETE: 46,
      DOWN: 40,
      ENTER: 13,
      LEFT: 37,
      RIGHT: 39,
      SPACEBAR: 32,
      TAB: 9,
      UP: 38,
      END: 35,
      HOME: 36,
      modifierPressed: function (e) {
        return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e);
      },
      metaKeyPressed: function (e) {
        return mt.mac ? e.metaKey : e.ctrlKey && !e.altKey;
      },
    },
    yv = Dn,
    bv = An,
    Cv = function (r, s) {
      var c,
        l,
        f,
        d,
        m,
        p,
        g,
        h,
        v,
        y,
        b,
        C,
        w,
        x,
        S = s.dom,
        N = yt.each,
        E = s.getDoc(),
        k = V.document,
        _ = Math.abs,
        T = Math.round,
        R = s.getBody(),
        A = {
          nw: [0, 0, -1, -1],
          ne: [1, 0, 1, -1],
          se: [1, 1, 1, 1],
          sw: [0, 1, -1, 1],
        },
        D = function (e) {
          return e && ("IMG" === e.nodeName || s.dom.is(e, "figure.image"));
        },
        n = function (e) {
          var t = e.target;
          !(function (e, t) {
            if ("longpress" !== e.type && 0 !== e.type.indexOf("touch"))
              return D(e.target) && !hv(e.clientX, e.clientY, t);
            var n = e.touches[0];
            return D(e.target) && !hv(n.clientX, n.clientY, t);
          })(e, s.selection.getRng()) ||
            e.isDefaultPrevented() ||
            s.selection.select(t);
        },
        O = function (e) {
          return s.dom.is(e, "figure.image") ? e.querySelector("img") : e;
        },
        B = function (e) {
          var t = nc(s);
          return (
            !1 !== t &&
            !mt.iOS &&
            ("string" != typeof t && (t = "table,img,figure.image,div"),
            "false" !== e.getAttribute("data-mce-resize") &&
              e !== s.getBody() &&
              Rt(Ct.fromDom(e), t))
          );
        },
        P = function (e, t, n) {
          S.setStyles(O(e), { width: t, height: n });
        },
        L = function (e) {
          var t, n, r, o, i, a, u;
          (t = e.screenX - m),
            (n = e.screenY - p),
            (b = t * d[2] + g),
            (C = n * d[3] + h),
            (b = b < 5 ? 5 : b),
            (C = C < 5 ? 5 : C),
            (D(c) && !1 !== s.getParam("resize_img_proportional", !0, "boolean")
              ? !vv.modifierPressed(e)
              : vv.modifierPressed(e)) &&
              (_(t) > _(n)
                ? ((C = T(b * v)), (b = T(C / v)))
                : ((b = T(C / v)), (C = T(b * v)))),
            P(l, b, C),
            (r = 0 < (r = d.startPos.x + t) ? r : 0),
            (o = 0 < (o = d.startPos.y + n) ? o : 0),
            S.setStyles(f, { left: r, top: o, display: "block" }),
            (f.innerHTML = b + " &times; " + C),
            d[2] < 0 &&
              l.clientWidth <= b &&
              S.setStyle(l, "left", void 0 + (g - b)),
            d[3] < 0 &&
              l.clientHeight <= C &&
              S.setStyle(l, "top", void 0 + (h - C)),
            (t = R.scrollWidth - w) + (n = R.scrollHeight - x) !== 0 &&
              S.setStyles(f, { left: r - t, top: o - n }),
            y ||
              ((i = c),
              (a = g),
              (u = h),
              s.fire("ObjectResizeStart", { target: i, width: a, height: u }),
              (y = !0));
        },
        I = function () {
          var e = y;
          y = !1;
          var t,
            n,
            r,
            o = function (e, t) {
              t &&
                (c.style[e] || !s.schema.isValid(c.nodeName.toLowerCase(), e)
                  ? S.setStyle(O(c), e, t)
                  : S.setAttrib(O(c), e, "" + t));
            };
          e && (o("width", b), o("height", C)),
            S.unbind(E, "mousemove", L),
            S.unbind(E, "mouseup", I),
            k !== E && (S.unbind(k, "mousemove", L), S.unbind(k, "mouseup", I)),
            S.remove(l),
            S.remove(f),
            i(c),
            e &&
              ((t = c),
              (n = b),
              (r = C),
              s.fire("ObjectResized", { target: t, width: n, height: r }),
              S.setAttrib(c, "style", S.getAttrib(c, "style"))),
            s.nodeChanged();
        },
        i = function (e) {
          M(), F();
          var t = S.getPos(e, R),
            r = t.x,
            o = t.y,
            n = e.getBoundingClientRect(),
            i = n.width || n.right - n.left,
            a = n.height || n.bottom - n.top;
          c !== e && ((c = e), (b = C = 0));
          var u = s.fire("ObjectSelected", { target: e });
          B(e) && !u.isDefaultPrevented()
            ? N(A, function (n, e) {
                var t;
                (t = S.get("mceResizeHandle" + e)) && S.remove(t),
                  (t = S.add(R, "div", {
                    id: "mceResizeHandle" + e,
                    "data-mce-bogus": "all",
                    class: "mce-resizehandle",
                    unselectable: !0,
                    style: "cursor:" + e + "-resize; margin:0; padding:0",
                  })),
                  11 === mt.ie && (t.contentEditable = !1),
                  S.bind(t, "mousedown", function (e) {
                    var t;
                    e.stopImmediatePropagation(),
                      e.preventDefault(),
                      (m = (t = e).screenX),
                      (p = t.screenY),
                      (g = O(c).clientWidth),
                      (h = O(c).clientHeight),
                      (v = h / g),
                      ((d = n).startPos = { x: i * n[0] + r, y: a * n[1] + o }),
                      (w = R.scrollWidth),
                      (x = R.scrollHeight),
                      (l = c.cloneNode(!0)),
                      S.addClass(l, "mce-clonedresizable"),
                      S.setAttrib(l, "data-mce-bogus", "all"),
                      (l.contentEditable = !1),
                      (l.unSelectabe = !0),
                      S.setStyles(l, { left: r, top: o, margin: 0 }),
                      P(l, i, a),
                      l.removeAttribute("data-mce-selected"),
                      R.appendChild(l),
                      S.bind(E, "mousemove", L),
                      S.bind(E, "mouseup", I),
                      k !== E &&
                        (S.bind(k, "mousemove", L), S.bind(k, "mouseup", I)),
                      (f = S.add(
                        R,
                        "div",
                        { class: "mce-resize-helper", "data-mce-bogus": "all" },
                        g + " &times; " + h
                      ));
                  }),
                  (n.elm = t),
                  S.setStyles(t, {
                    left: i * n[0] + r - t.offsetWidth / 2,
                    top: a * n[1] + o - t.offsetHeight / 2,
                  });
              })
            : M(),
            c.setAttribute("data-mce-selected", "1");
        },
        M = function () {
          F(),
            c && c.removeAttribute("data-mce-selected"),
            oe(A, function (e, t) {
              var n = S.get("mceResizeHandle" + t);
              n && (S.unbind(n), S.remove(n));
            });
        },
        o = function (e) {
          var t,
            n = function (e, t) {
              if (e)
                do {
                  if (e === t) return !0;
                } while ((e = e.parentNode));
            };
          y ||
            s.removed ||
            (N(
              S.select("img[data-mce-selected],hr[data-mce-selected]"),
              function (e) {
                e.removeAttribute("data-mce-selected");
              }
            ),
            (t = "mousedown" === e.type ? e.target : r.getNode()),
            n((t = S.$(t).closest("table,img,figure.image,hr")[0]), R) &&
            (u(), n(r.getStart(!0), t) && n(r.getEnd(!0), t))
              ? i(t)
              : M());
        },
        a = function (e) {
          return yv(
            (function (e, t) {
              for (; t && t !== e; ) {
                if (bv(t) || yv(t)) return t;
                t = t.parentNode;
              }
              return null;
            })(s.getBody(), e)
          );
        },
        F = function () {
          oe(A, function (e) {
            e.elm && (S.unbind(e.elm), delete e.elm);
          });
        },
        u = function () {
          try {
            s.getDoc().execCommand("enableObjectResizing", !1, !1);
          } catch (e) {}
        };
      s.on("init", function () {
        if ((u(), mt.browser.isIE() || mt.browser.isEdge())) {
          s.on("mousedown click", function (e) {
            var t = e.target,
              n = t.nodeName;
            y ||
              !/^(TABLE|IMG|HR)$/.test(n) ||
              a(t) ||
              (2 !== e.button && s.selection.select(t, "TABLE" === n),
              "mousedown" === e.type && s.nodeChanged());
          });
          var e = function (e) {
            var t = function (e) {
              fa.setEditorTimeout(s, function () {
                return s.selection.select(e);
              });
            };
            if (a(e.target)) return e.preventDefault(), void t(e.target);
            /^(TABLE|IMG|HR)$/.test(e.target.nodeName) &&
              (e.preventDefault(), "IMG" === e.target.tagName && t(e.target));
          };
          S.bind(R, "mscontrolselect", e),
            s.on("remove", function () {
              return S.unbind(R, "mscontrolselect", e);
            });
        }
        var t = fa.throttle(function (e) {
          s.composing || o(e);
        });
        s.on(
          "nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged",
          t
        ),
          s.on("keyup compositionend", function (e) {
            c && "TABLE" === c.nodeName && t(e);
          }),
          s.on("hide blur", M),
          s.on("contextmenu longpress", n, !0);
      }),
        s.on("remove", F);
      return {
        isResizable: B,
        showResizeRect: i,
        hideResizeRect: M,
        updateResizeRect: o,
        destroy: function () {
          c = l = null;
        },
      };
    },
    wv = function (e, t, n) {
      if (e && e.hasOwnProperty(t)) {
        var r = H(e[t], function (e) {
          return e !== n;
        });
        0 === r.length ? delete e[t] : (e[t] = r);
      }
    };
  var xv = function (e) {
      return !!e.select;
    },
    Sv = function (e) {
      return (
        !(!e || !e.ownerDocument) &&
        Bt(Ct.fromDom(e.ownerDocument), Ct.fromDom(e))
      );
    },
    Nv = function (u, s, e, c) {
      var l,
        f,
        n = (function h(i, n) {
          var a, u;
          return {
            selectorChangedWithUnbind: function (e, t) {
              return (
                a ||
                  ((a = {}),
                  (u = {}),
                  n.on("NodeChange", function (e) {
                    var n = e.element,
                      r = i.getParents(n, null, i.getRoot()),
                      o = {};
                    yt.each(a, function (e, n) {
                      yt.each(r, function (t) {
                        if (i.is(t, n))
                          return (
                            u[n] ||
                              (yt.each(e, function (e) {
                                e(!0, { node: t, selector: n, parents: r });
                              }),
                              (u[n] = e)),
                            (o[n] = e),
                            !1
                          );
                      });
                    }),
                      yt.each(u, function (e, t) {
                        o[t] ||
                          (delete u[t],
                          yt.each(e, function (e) {
                            e(!1, { node: n, selector: t, parents: r });
                          }));
                      });
                  })),
                a[e] || (a[e] = []),
                a[e].push(t),
                {
                  unbind: function () {
                    wv(a, e, t), wv(u, e, t);
                  },
                }
              );
            },
          };
        })(u, c).selectorChangedWithUnbind,
        t = function (e, t) {
          return mv(c, e, t);
        },
        r = function (e) {
          var t = o();
          t.collapse(!!e), i(t);
        },
        d = function () {
          return s.getSelection ? s.getSelection() : s.document.selection;
        },
        o = function () {
          var e,
            t,
            n,
            r = function (e, t, n) {
              try {
                return t.compareBoundaryPoints(e, n);
              } catch (r) {
                return -1;
              }
            };
          if (!s) return null;
          var o = s.document;
          if (null == o) return null;
          if (c.bookmark !== undefined && !1 === Ym(c)) {
            var i = Im(c);
            if (i.isSome())
              return i
                .map(function (e) {
                  return eg(c, [e])[0];
                })
                .getOr(o.createRange());
          }
          try {
            (e = d()) &&
              !hn(e.anchorNode) &&
              (t =
                0 < e.rangeCount
                  ? e.getRangeAt(0)
                  : e.createRange
                  ? e.createRange()
                  : o.createRange());
          } catch (a) {}
          return (
            (t =
              (t = eg(c, [t])[0]) ||
              (o.createRange ? o.createRange() : o.body.createTextRange()))
              .setStart &&
              9 === t.startContainer.nodeType &&
              t.collapsed &&
              ((n = u.getRoot()), t.setStart(n, 0), t.setEnd(n, 0)),
            l &&
              f &&
              (0 === r(t.START_TO_START, t, l) && 0 === r(t.END_TO_END, t, l)
                ? (t = f)
                : (f = l = null)),
            t
          );
        },
        i = function (e, t) {
          var n;
          if (
            (r = e) &&
            (xv(r) || (Sv(r.startContainer) && Sv(r.endContainer)))
          ) {
            var r,
              o = xv(e) ? e : null;
            if (o) {
              f = null;
              try {
                o.select();
              } catch (a) {}
            } else {
              var i = d();
              if (
                ((e = c.fire("SetSelectionRange", { range: e, forward: t })
                  .range),
                i)
              ) {
                f = e;
                try {
                  i.removeAllRanges(), i.addRange(e);
                } catch (a) {}
                !1 === t &&
                  i.extend &&
                  (i.collapse(e.endContainer, e.endOffset),
                  i.extend(e.startContainer, e.startOffset)),
                  (l = 0 < i.rangeCount ? i.getRangeAt(0) : null);
              }
              e.collapsed ||
                e.startContainer !== e.endContainer ||
                !i.setBaseAndExtent ||
                mt.ie ||
                (e.endOffset - e.startOffset < 2 &&
                  e.startContainer.hasChildNodes() &&
                  (n = e.startContainer.childNodes[e.startOffset]) &&
                  "IMG" === n.tagName &&
                  (i.setBaseAndExtent(
                    e.startContainer,
                    e.startOffset,
                    e.endContainer,
                    e.endOffset
                  ),
                  (i.anchorNode === e.startContainer &&
                    i.focusNode === e.endContainer) ||
                    i.setBaseAndExtent(n, 0, n, 1))),
                c.fire("AfterSetSelectionRange", { range: e, forward: t });
            }
          }
        },
        a = function () {
          var e = d();
          if (!e || !e.anchorNode || !e.focusNode) return !0;
          var t = u.createRng();
          t.setStart(e.anchorNode, e.anchorOffset), t.collapse(!0);
          var n = u.createRng();
          return (
            n.setStart(e.focusNode, e.focusOffset),
            n.collapse(!0),
            t.compareBoundaryPoints(t.START_TO_START, n) <= 0
          );
        },
        m = {
          bookmarkManager: null,
          controlSelection: null,
          dom: u,
          win: s,
          serializer: e,
          editor: c,
          collapse: r,
          setCursorLocation: function (e, t) {
            var n = u.createRng();
            e
              ? (n.setStart(e, t), n.setEnd(e, t), i(n), r(!1))
              : (df(u, n, c.getBody(), !0), i(n));
          },
          getContent: function (e) {
            return nv(c, e);
          },
          setContent: t,
          getBookmark: function (e, t) {
            return p.getBookmark(e, t);
          },
          moveToBookmark: function (e) {
            return p.moveToBookmark(e);
          },
          select: function (e, t) {
            var r, n, o;
            return (
              (r = u),
              (n = e),
              (o = t),
              B.from(n)
                .map(function (e) {
                  var t = r.nodeIndex(e),
                    n = r.createRng();
                  return (
                    n.setStart(e.parentNode, t),
                    n.setEnd(e.parentNode, t + 1),
                    o && (df(r, n, e, !0), df(r, n, e, !1)),
                    n
                  );
                })
                .each(i),
              e
            );
          },
          isCollapsed: function () {
            var e = o(),
              t = d();
            return (
              !(!e || e.item) &&
              (e.compareEndPoints
                ? 0 === e.compareEndPoints("StartToEnd", e)
                : !t || e.collapsed)
            );
          },
          isForward: a,
          setNode: function (e) {
            return t(u.getOuterHTML(e)), e;
          },
          getNode: function () {
            return (function (e, t) {
              var n, r, o;
              if (!t) return e;
              (r = t.startContainer), (o = t.endContainer);
              var i = t.startOffset,
                a = t.endOffset;
              return (
                (n = t.commonAncestorContainer),
                !t.collapsed &&
                (r === o &&
                  a - i < 2 &&
                  r.hasChildNodes() &&
                  (n = r.childNodes[i]),
                3 === r.nodeType &&
                  3 === o.nodeType &&
                  ((r = r.length === i ? tv(r.nextSibling, !0) : r.parentNode),
                  (o = 0 === a ? tv(o.previousSibling, !1) : o.parentNode),
                  r && r === o))
                  ? r
                  : n && 3 === n.nodeType
                  ? n.parentNode
                  : n
              );
            })(c.getBody(), o());
          },
          getSel: d,
          setRng: i,
          getRng: o,
          getStart: function (e) {
            return Zh(c.getBody(), o(), e);
          },
          getEnd: function (e) {
            return ev(c.getBody(), o(), e);
          },
          getSelectedBlocks: function (e, t) {
            return (function (e, t, n, r) {
              var o,
                i = [],
                a = e.getRoot();
              if (
                ((n = e.getParent(n || Zh(a, t, t.collapsed), e.isBlock)),
                (r = e.getParent(r || ev(a, t, t.collapsed), e.isBlock)),
                n && n !== a && i.push(n),
                n && r && n !== r)
              )
                for (var u = new Ai((o = n), a); (o = u.next()) && o !== r; )
                  e.isBlock(o) && i.push(o);
              return r && n !== r && r !== a && i.push(r), i;
            })(u, o(), e, t);
          },
          normalize: function () {
            var e = o(),
              t = d();
            if (1 < of(t).length || !mf(c)) return e;
            var n = lv(u, e);
            return (
              n.each(function (e) {
                i(e, a());
              }),
              n.getOr(e)
            );
          },
          selectorChanged: function (e, t) {
            return n(e, t), m;
          },
          selectorChangedWithUnbind: n,
          getScrollContainer: function () {
            for (var e, t = u.getRoot(); t && "BODY" !== t.nodeName; ) {
              if (t.scrollHeight > t.clientHeight) {
                e = t;
                break;
              }
              t = t.parentNode;
            }
            return e;
          },
          scrollIntoView: function (e, t) {
            return (r = e), (o = t), void ((n = c).inline ? Wh : Xh)(n, r, o);
            var n, r, o;
          },
          placeCaretAt: function (e, t) {
            return i(Jh(e, t, c.getDoc()));
          },
          getBoundingClientRect: function () {
            var e = o();
            return e.collapsed
              ? Ss.fromRangeStart(e).getClientRects()[0]
              : e.getBoundingClientRect();
          },
          destroy: function () {
            (s = l = f = null), g.destroy();
          },
        },
        p = gv(m),
        g = Cv(m, c);
      return (m.bookmarkManager = p), (m.controlSelection = g), m;
    },
    Ev = function (e, a, u) {
      e.addNodeFilter("font", function (e) {
        z(e, function (e) {
          var t,
            n = a.parse(e.attr("style")),
            r = e.attr("color"),
            o = e.attr("face"),
            i = e.attr("size");
          r && (n.color = r),
            o && (n["font-family"] = o),
            i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]),
            (e.name = "span"),
            e.attr("style", a.serialize(n)),
            (t = e),
            z(["color", "face", "size"], function (e) {
              t.attr(e, null);
            });
        });
      });
    },
    kv = function (e, t) {
      var n,
        r = Br();
      t.convert_fonts_to_spans &&
        Ev(e, r, yt.explode(t.font_size_legacy_values)),
        (n = r),
        e.addNodeFilter("strike", function (e) {
          z(e, function (e) {
            var t = n.parse(e.attr("style"));
            (t["text-decoration"] = "line-through"),
              (e.name = "span"),
              e.attr("style", n.serialize(t));
          });
        });
    },
    _v = function (e) {
      var t,
        n = decodeURIComponent(e).split(","),
        r = /data:([^;]+)/.exec(n[0]);
      return r && (t = r[1]), { type: t, data: n[1] };
    },
    Tv = function (e, t) {
      var n;
      try {
        n = V.atob(t);
      } catch (LE) {
        return B.none();
      }
      for (var r = new Uint8Array(n.length), o = 0; o < r.length; o++)
        r[o] = n.charCodeAt(o);
      return B.some(new V.Blob([r], { type: e }));
    },
    Rv = function (e) {
      return 0 === e.indexOf("blob:")
        ? ((i = e),
          new ea(function (e, t) {
            var n = function () {
              t(
                "Cannot convert " +
                  i +
                  " to Blob. Resource might not exist or is inaccessible."
              );
            };
            try {
              var r = new V.XMLHttpRequest();
              r.open("GET", i, !0),
                (r.responseType = "blob"),
                (r.onload = function () {
                  200 === this.status ? e(this.response) : n();
                }),
                (r.onerror = n),
                r.send();
            } catch (o) {
              n();
            }
          }))
        : 0 === e.indexOf("data:")
        ? ((o = e),
          new ea(function (e) {
            var t = _v(o),
              n = t.type,
              r = t.data;
            Tv(n, r).fold(function () {
              return e(new V.Blob([]));
            }, e);
          }))
        : null;
      var i, o;
    },
    Av = 0,
    Dv = function (e) {
      return (e || "blobid") + Av++;
    },
    Ov = function (r, o, i, t) {
      var a, u;
      if (0 !== o.src.indexOf("blob:")) {
        var e = _v(o.src),
          n = e.data,
          s = e.type;
        (a = n),
          (u = r.getByData(a, s))
            ? i({ image: o, blobInfo: u })
            : Rv(o.src).then(
                function (e) {
                  (u = r.create(Dv(), e, a)),
                    r.add(u),
                    i({ image: o, blobInfo: u });
                },
                function (e) {
                  t(e);
                }
              );
      } else
        (u = r.getByUri(o.src))
          ? i({ image: o, blobInfo: u })
          : Rv(o.src).then(
              function (t) {
                var n;
                (n = t),
                  new ea(function (e) {
                    var t = new V.FileReader();
                    (t.onloadend = function () {
                      e(t.result);
                    }),
                      t.readAsDataURL(n);
                  }).then(function (e) {
                    (a = _v(e).data),
                      (u = r.create(Dv(), t, a)),
                      r.add(u),
                      i({ image: o, blobInfo: u });
                  });
              },
              function (e) {
                t(e);
              }
            );
    };
  function Bv(i, a) {
    var u = {};
    return {
      findAll: function (e, n) {
        n = n || x(!0);
        var t,
          r = H((t = e) ? te(t.getElementsByTagName("img")) : [], function (e) {
            var t = e.src;
            return (
              !!mt.fileApi &&
              !e.hasAttribute("data-mce-bogus") &&
              !e.hasAttribute("data-mce-placeholder") &&
              !(!t || t === mt.transparentSrc) &&
              (0 === t.indexOf("blob:")
                ? !i.isUploaded(t) && n(e)
                : 0 === t.indexOf("data:") && n(e))
            );
          }),
          o = U(r, function (n) {
            if (u[n.src] !== undefined)
              return new ea(function (t) {
                u[n.src].then(function (e) {
                  if ("string" == typeof e) return e;
                  t({ image: n, blobInfo: e.blobInfo });
                });
              });
            var e = new ea(function (e, t) {
              Ov(a, n, e, t);
            })
              .then(function (e) {
                return delete u[e.image.src], e;
              })
              ["catch"](function (e) {
                return delete u[n.src], e;
              });
            return (u[n.src] = e);
          });
        return ea.all(o);
      },
    };
  }
  var Pv = function (e, t, n, r) {
      (e.padd_empty_with_br || t.insert) && n[r.name]
        ? (r.empty().append(new Tf("br", 1)).shortEnded = !0)
        : (r.empty().append(new Tf("#text", 3)).value = Dr);
    },
    Lv = function (e, t) {
      return (
        e &&
        e.firstChild &&
        e.firstChild === e.lastChild &&
        e.firstChild.name === t
      );
    },
    Iv = function (r, e, t, n) {
      return n.isEmpty(e, t, function (e) {
        return (t = e), (n = r.getElementRule(t.name)) && n.paddEmpty;
        var t, n;
      });
    },
    Mv = function (e, o) {
      var i = o.blob_cache,
        t = function (t) {
          var e,
            n,
            r = t.attr("src");
          (e = t).attr("src") === mt.transparentSrc ||
            e.attr("data-mce-placeholder") ||
            t.attr("data-mce-bogus") ||
            ((n = /data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(r))
              ? B.some({ type: n[1], data: decodeURIComponent(n[2]) })
              : B.none()
            )
              .filter(function () {
                return (function (e, t) {
                  if (t.images_dataimg_filter) {
                    var n = new V.Image();
                    return (
                      (n.src = e.attr("src")),
                      oe(e.attributes.map, function (e, t) {
                        n.setAttribute(t, e);
                      }),
                      t.images_dataimg_filter(n)
                    );
                  }
                  return !0;
                })(t, o);
              })
              .bind(function (e) {
                var t = e.type,
                  n = e.data;
                return B.from(i.getByData(n, t)).orThunk(function () {
                  return Tv(t, n).map(function (e) {
                    var t = i.create(Dv(), e, n);
                    return i.add(t), t;
                  });
                });
              })
              .each(function (e) {
                t.attr("src", e.blobUri());
              });
        };
      i &&
        e.addAttributeFilter("src", function (e) {
          return z(e, t);
        });
    },
    Fv = function (e, g) {
      var h = e.schema;
      g.remove_trailing_brs &&
        e.addNodeFilter("br", function (e, t, n) {
          var r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f = e.length,
            d = yt.extend({}, h.getBlockElements()),
            m = h.getNonEmptyElements(),
            p = h.getWhiteSpaceElements();
          for (d.body = 1, r = 0; r < f; r++)
            if (
              ((i = (o = e[r]).parent), d[o.parent.name] && o === i.lastChild)
            ) {
              for (u = o.prev; u; ) {
                if (
                  "span" !== (s = u.name) ||
                  "bookmark" !== u.attr("data-mce-type")
                ) {
                  if ("br" !== s) break;
                  if ("br" === s) {
                    o = null;
                    break;
                  }
                }
                u = u.prev;
              }
              o &&
                (o.remove(),
                Iv(h, m, p, i) &&
                  (c = h.getElementRule(i.name)) &&
                  (c.removeEmpty ? i.remove() : c.paddEmpty && Pv(g, n, d, i)));
            } else {
              for (
                a = o;
                i &&
                i.firstChild === a &&
                i.lastChild === a &&
                !d[(a = i).name];

              )
                i = i.parent;
              a === i &&
                !0 !== g.padd_empty_with_br &&
                (((l = new Tf("#text", 3)).value = Dr), o.replace(l));
            }
        }),
        e.addAttributeFilter("href", function (e) {
          var t = e.length,
            n = function (e) {
              var t = e ? yt.trim(e) : "";
              return /\b(noopener)\b/g.test(t)
                ? t
                : t
                    .split(" ")
                    .filter(function (e) {
                      return 0 < e.length;
                    })
                    .concat(["noopener"])
                    .sort()
                    .join(" ");
            };
          if (!g.allow_unsafe_link_target)
            for (; t--; ) {
              var r = e[t];
              "a" === r.name &&
                "_blank" === r.attr("target") &&
                r.attr("rel", n(r.attr("rel")));
            }
        }),
        g.allow_html_in_named_anchor ||
          e.addAttributeFilter("id,name", function (e) {
            for (var t, n, r, o, i = e.length; i--; )
              if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href"))
                for (
                  r = o.parent, t = o.lastChild;
                  (n = t.prev), r.insert(t, o), (t = n);

                );
          }),
        g.fix_list_elements &&
          e.addNodeFilter("ul,ol", function (e) {
            for (var t, n, r = e.length; r--; )
              if ("ul" === (n = (t = e[r]).parent).name || "ol" === n.name)
                if (t.prev && "li" === t.prev.name) t.prev.append(t);
                else {
                  var o = new Tf("li", 1);
                  o.attr("style", "list-style-type: none"), t.wrap(o);
                }
          }),
        g.validate &&
          h.getValidClasses() &&
          e.addAttributeFilter("class", function (e) {
            for (
              var t, n, r, o, i, a, u, s = e.length, c = h.getValidClasses();
              s--;

            ) {
              for (
                n = (t = e[s]).attr("class").split(" "), i = "", r = 0;
                r < n.length;
                r++
              )
                (o = n[r]),
                  (u = !1),
                  (a = c["*"]) && a[o] && (u = !0),
                  (a = c[t.name]),
                  !u && a && a[o] && (u = !0),
                  u && (i && (i += " "), (i += o));
              i.length || (i = null), t.attr("class", i);
            }
          }),
        Mv(e, g);
    },
    Uv = yt.makeMap,
    zv = yt.each,
    jv = yt.explode,
    Hv = yt.extend,
    Vv = function (T, R) {
      void 0 === R && (R = Rr());
      var A = {},
        D = [],
        O = {},
        B = {};
      ((T = T || {}).validate = !("validate" in T) || T.validate),
        (T.root_name = T.root_name || "body");
      var e,
        t,
        P = function (e) {
          var t, n, r;
          (n = e.name) in A && ((r = O[n]) ? r.push(e) : (O[n] = [e])),
            (t = D.length);
          for (; t--; )
            (n = D[t].name) in e.attributes.map &&
              ((r = B[n]) ? r.push(e) : (B[n] = [e]));
          return e;
        },
        n = {
          schema: R,
          addAttributeFilter: function (e, n) {
            zv(jv(e), function (e) {
              var t;
              for (t = 0; t < D.length; t++)
                if (D[t].name === e) return void D[t].callbacks.push(n);
              D.push({ name: e, callbacks: [n] });
            });
          },
          getAttributeFilters: function () {
            return [].concat(D);
          },
          addNodeFilter: function (e, n) {
            zv(jv(e), function (e) {
              var t = A[e];
              t || (A[e] = t = []), t.push(n);
            });
          },
          getNodeFilters: function () {
            var e = [];
            for (var t in A)
              A.hasOwnProperty(t) && e.push({ name: t, callbacks: A[t] });
            return e;
          },
          filterNode: P,
          parse: function (e, u) {
            var t,
              n,
              r,
              o,
              i,
              s,
              a,
              c,
              l,
              f = [];
            (u = u || {}), (O = {}), (B = {});
            var d,
              m = Hv(
                Uv("script,style,head,html,body,title,meta,param"),
                R.getBlockElements()
              ),
              p = R.getNonEmptyElements(),
              g = R.children,
              h = T.validate,
              v =
                "forced_root_block" in u
                  ? u.forced_root_block
                  : T.forced_root_block,
              y = !1 === (d = v) ? "" : !0 === d ? "p" : d,
              b = R.getWhiteSpaceElements(),
              C = /^[ \t\r\n]+/,
              w = /[ \t\r\n]+$/,
              x = /[ \t\r\n]+/g,
              S = /^[ \t\r\n]+$/;
            c = b.hasOwnProperty(u.context) || b.hasOwnProperty(T.root_name);
            var N = function (e, t) {
                var n,
                  r = new Tf(e, t);
                return e in A && ((n = O[e]) ? n.push(r) : (O[e] = [r])), r;
              },
              E = function (e) {
                var t,
                  n,
                  r,
                  o,
                  i = R.getBlockElements();
                for (t = e.prev; t && 3 === t.type; ) {
                  if (0 < (r = t.value.replace(w, "")).length)
                    return void (t.value = r);
                  if ((n = t.next)) {
                    if (3 === n.type && n.value.length) {
                      t = t.prev;
                      continue;
                    }
                    if (
                      !i[n.name] &&
                      "script" !== n.name &&
                      "style" !== n.name
                    ) {
                      t = t.prev;
                      continue;
                    }
                  }
                  (o = t.prev), t.remove(), (t = o);
                }
              },
              k = Hf(
                {
                  validate: h,
                  allow_html_data_urls: T.allow_html_data_urls,
                  allow_script_urls: T.allow_script_urls,
                  allow_conditional_comments: T.allow_conditional_comments,
                  preserve_cdata: T.preserve_cdata,
                  self_closing_elements: (function (e) {
                    var t,
                      n = {};
                    for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                    return n;
                  })(R.getSelfClosingElements()),
                  cdata: function (e) {
                    l.append(N("#cdata", 4)).value = e;
                  },
                  text: function (e, t) {
                    var n, r, o;
                    c ||
                      ((e = e.replace(x, " ")),
                      (r = l.lastChild),
                      (o = m),
                      r &&
                        (o[r.name] || "br" === r.name) &&
                        (e = e.replace(C, ""))),
                      0 !== e.length &&
                        (((n = N("#text", 3)).raw = !!t),
                        (l.append(n).value = e));
                  },
                  comment: function (e) {
                    l.append(N("#comment", 8)).value = e;
                  },
                  pi: function (e, t) {
                    (l.append(N(e, 7)).value = t), E(l);
                  },
                  doctype: function (e) {
                    (l.append(N("#doctype", 10)).value = e), E(l);
                  },
                  start: function (e, t, n) {
                    var r,
                      o,
                      i,
                      a,
                      u = h ? R.getElementRule(e) : {};
                    if (u) {
                      for (
                        (r = N(u.outputName || e, 1)).attributes = t,
                          r.shortEnded = n,
                          l.append(r),
                          (a = g[l.name]) &&
                            g[r.name] &&
                            !a[r.name] &&
                            f.push(r),
                          o = D.length;
                        o--;

                      )
                        (i = D[o].name) in t.map &&
                          ((s = B[i]) ? s.push(r) : (B[i] = [r]));
                      m[e] && E(r), n || (l = r), !c && b[e] && (c = !0);
                    }
                  },
                  end: function (e) {
                    var t,
                      n,
                      r,
                      o,
                      i,
                      a = h ? R.getElementRule(e) : {};
                    if (a) {
                      if (m[e] && !c) {
                        if ((t = l.firstChild) && 3 === t.type)
                          if (0 < (n = t.value.replace(C, "")).length)
                            (t.value = n), (t = t.next);
                          else
                            for (
                              r = t.next, t.remove(), t = r;
                              t && 3 === t.type;

                            )
                              (n = t.value),
                                (r = t.next),
                                (0 !== n.length && !S.test(n)) ||
                                  (t.remove(), (t = r)),
                                (t = r);
                        if ((t = l.lastChild) && 3 === t.type)
                          if (0 < (n = t.value.replace(w, "")).length)
                            (t.value = n), (t = t.prev);
                          else
                            for (
                              r = t.prev, t.remove(), t = r;
                              t && 3 === t.type;

                            )
                              (n = t.value),
                                (r = t.prev),
                                (0 !== n.length && !S.test(n)) ||
                                  (t.remove(), (t = r)),
                                (t = r);
                      }
                      if (
                        (c && b[e] && (c = !1), a.removeEmpty && Iv(R, p, b, l))
                      )
                        return (
                          (o = l.parent),
                          m[l.name] ? l.empty().remove() : l.unwrap(),
                          void (l = o)
                        );
                      a.paddEmpty &&
                        ((Lv((i = l), "#text") && i.firstChild.value === Dr) ||
                          Iv(R, p, b, l)) &&
                        Pv(T, u, m, l),
                        (l = l.parent);
                    }
                  },
                },
                R
              ),
              _ = (l = new Tf(u.context || T.root_name, 11));
            if (
              (k.parse(e, u.format),
              h &&
                f.length &&
                (u.context
                  ? (u.invalid = !0)
                  : (function (e) {
                      var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        u,
                        s,
                        c,
                        l,
                        f,
                        d = Uv("tr,td,th,tbody,thead,tfoot,table"),
                        m = R.getNonEmptyElements(),
                        p = R.getWhiteSpaceElements(),
                        g = R.getTextBlockElements(),
                        h = R.getSpecialElements();
                      for (t = 0; t < e.length; t++)
                        if ((n = e[t]).parent && !n.fixed)
                          if (g[n.name] && "li" === n.parent.name) {
                            for (l = n.next; l && g[l.name]; )
                              (l.name = "li"),
                                (l.fixed = !0),
                                n.parent.insert(l, n.parent),
                                (l = l.next);
                            n.unwrap(n);
                          } else {
                            for (
                              o = [n], r = n.parent;
                              r &&
                              !R.isValidChild(r.name, n.name) &&
                              !d[r.name];
                              r = r.parent
                            )
                              o.push(r);
                            if (r && 1 < o.length) {
                              for (
                                o.reverse(), i = a = P(o[0].clone()), c = 0;
                                c < o.length - 1;
                                c++
                              ) {
                                for (
                                  R.isValidChild(a.name, o[c].name)
                                    ? ((u = P(o[c].clone())), a.append(u))
                                    : (u = a),
                                    s = o[c].firstChild;
                                  s && s !== o[c + 1];

                                )
                                  (f = s.next), u.append(s), (s = f);
                                a = u;
                              }
                              Iv(R, m, p, i)
                                ? r.insert(n, o[0], !0)
                                : (r.insert(i, o[0], !0), r.insert(n, i)),
                                (r = o[0]),
                                (Iv(R, m, p, r) || Lv(r, "br")) &&
                                  r.empty().remove();
                            } else if (n.parent) {
                              if ("li" === n.name) {
                                if (
                                  (l = n.prev) &&
                                  ("ul" === l.name || "ul" === l.name)
                                ) {
                                  l.append(n);
                                  continue;
                                }
                                if (
                                  (l = n.next) &&
                                  ("ul" === l.name || "ul" === l.name)
                                ) {
                                  l.insert(n, l.firstChild, !0);
                                  continue;
                                }
                                n.wrap(P(new Tf("ul", 1)));
                                continue;
                              }
                              R.isValidChild(n.parent.name, "div") &&
                              R.isValidChild("div", n.name)
                                ? n.wrap(P(new Tf("div", 1)))
                                : h[n.name]
                                ? n.empty().remove()
                                : n.unwrap();
                            }
                          }
                    })(f)),
              y &&
                ("body" === _.name || u.isRootContent) &&
                (function () {
                  var e,
                    t,
                    n = _.firstChild,
                    r = function (e) {
                      e &&
                        ((n = e.firstChild) &&
                          3 === n.type &&
                          (n.value = n.value.replace(C, "")),
                        (n = e.lastChild) &&
                          3 === n.type &&
                          (n.value = n.value.replace(w, "")));
                    };
                  if (R.isValidChild(_.name, y.toLowerCase())) {
                    for (; n; )
                      (e = n.next),
                        3 === n.type ||
                        (1 === n.type &&
                          "p" !== n.name &&
                          !m[n.name] &&
                          !n.attr("data-mce-type"))
                          ? (t ||
                              ((t = N(y, 1)).attr(T.forced_root_block_attrs),
                              _.insert(t, n)),
                            t.append(n))
                          : (r(t), (t = null)),
                        (n = e);
                    r(t);
                  }
                })(),
              !u.invalid)
            ) {
              for (a in O)
                if (O.hasOwnProperty(a)) {
                  for (s = A[a], o = (t = O[a]).length; o--; )
                    t[o].parent || t.splice(o, 1);
                  for (n = 0, r = s.length; n < r; n++) s[n](t, a, u);
                }
              for (n = 0, r = D.length; n < r; n++)
                if ((s = D[n]).name in B) {
                  for (o = (t = B[s.name]).length; o--; )
                    t[o].parent || t.splice(o, 1);
                  for (o = 0, i = s.callbacks.length; o < i; o++)
                    s.callbacks[o](t, s.name, u);
                }
            }
            return _;
          },
        };
      return Fv(n, T), (e = n), (t = T).inline_styles && kv(e, t), n;
    },
    qv = function (e, t, n) {
      return (
        (o = n),
        (r = e) && r.hasEventListeners("PreProcess") && !o.no_events
          ? (function (e, t, n) {
              var r,
                o,
                i = e.dom;
              t = t.cloneNode(!0);
              var a,
                u,
                s = V.document.implementation;
              return (
                s.createHTMLDocument &&
                  ((r = s.createHTMLDocument("")),
                  yt.each("BODY" === t.nodeName ? t.childNodes : [t], function (
                    e
                  ) {
                    r.body.appendChild(r.importNode(e, !0));
                  }),
                  (t = "BODY" !== t.nodeName ? r.body.firstChild : r.body),
                  (o = i.doc),
                  (i.doc = r)),
                (a = e),
                (u = xe(xe({}, n), { node: t })),
                a.fire("PreProcess", u),
                o && (i.doc = o),
                t
              );
            })(e, t, n)
          : t
      );
      var r, o;
    },
    $v = function (e, t, n) {
      -1 === yt.inArray(t, n) &&
        (e.addAttributeFilter(n, function (e, t) {
          for (var n = e.length; n--; ) e[n].attr(t, null);
        }),
        t.push(n));
    },
    Wv = function (e, t, n, r, o) {
      var i,
        a,
        u,
        s,
        c,
        l,
        f = ((i = r), Of(t, n).serialize(i));
      return (
        (a = e),
        (s = f),
        (u = o).no_events || !a
          ? s
          : ((c = a),
            (l = xe(xe({}, u), { content: s })),
            c.fire("PostProcess", l).content)
      );
    },
    Kv = function (g, h) {
      var e = ["data-mce-selected"],
        v = h && h.dom ? h.dom : Ea.DOM,
        y = h && h.schema ? h.schema : Rr(g);
      (g.entity_encoding = g.entity_encoding || "named"),
        (g.remove_trailing_brs =
          !("remove_trailing_brs" in g) || g.remove_trailing_brs);
      var t,
        s,
        c,
        b = Vv(g, y);
      (s = g),
        (c = v),
        (t = b).addAttributeFilter("data-mce-tabindex", function (e, t) {
          for (var n, r = e.length; r--; )
            (n = e[r]).attr("tabindex", n.attr("data-mce-tabindex")),
              n.attr(t, null);
        }),
        t.addAttributeFilter("src,href,style", function (e, t) {
          for (
            var n,
              r,
              o = e.length,
              i = "data-mce-" + t,
              a = s.url_converter,
              u = s.url_converter_scope;
            o--;

          )
            (r = (n = e[o]).attr(i)) !== undefined
              ? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null))
              : ((r = n.attr(t)),
                "style" === t
                  ? (r = c.serializeStyle(c.parseStyle(r), n.name))
                  : a && (r = a.call(u, r, t, n.name)),
                n.attr(t, 0 < r.length ? r : null));
        }),
        t.addAttributeFilter("class", function (e) {
          for (var t, n, r = e.length; r--; )
            (n = (t = e[r]).attr("class")) &&
              ((n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, "")),
              t.attr("class", 0 < n.length ? n : null));
        }),
        t.addAttributeFilter("data-mce-type", function (e, t, n) {
          for (var r, o = e.length; o--; ) {
            if ("bookmark" === (r = e[o]).attr("data-mce-type") && !n.cleanup)
              B.from(r.firstChild).exists(function (e) {
                return !bu(e.value);
              })
                ? r.unwrap()
                : r.remove();
          }
        }),
        t.addNodeFilter("noscript", function (e) {
          for (var t, n = e.length; n--; )
            (t = e[n].firstChild) && (t.value = yr.decode(t.value));
        }),
        t.addNodeFilter("script,style", function (e, t) {
          for (
            var n,
              r,
              o,
              i = e.length,
              a = function (e) {
                return e
                  .replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n")
                  .replace(/^[\r\n]*|[\r\n]*$/g, "")
                  .replace(
                    /^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,
                    ""
                  )
                  .replace(
                    /\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,
                    ""
                  );
              };
            i--;

          )
            (r = (n = e[i]).firstChild ? n.firstChild.value : ""),
              "script" === t
                ? ((o = n.attr("type")) &&
                    n.attr(
                      "type",
                      "mce-no/type" === o ? null : o.replace(/^mce\-/, "")
                    ),
                  "xhtml" === s.element_format &&
                    0 < r.length &&
                    (n.firstChild.value = "// <![CDATA[\n" + a(r) + "\n// ]]>"))
                : "xhtml" === s.element_format &&
                  0 < r.length &&
                  (n.firstChild.value = "\x3c!--\n" + a(r) + "\n--\x3e");
        }),
        t.addNodeFilter("#comment", function (e) {
          for (var t, n = e.length; n--; )
            (t = e[n]),
              s.preserve_cdata && 0 === t.value.indexOf("[CDATA[")
                ? ((t.name = "#cdata"),
                  (t.type = 4),
                  (t.value = c.decode(
                    t.value.replace(/^\[CDATA\[|\]\]$/g, "")
                  )))
                : 0 === t.value.indexOf("mce:protected ") &&
                  ((t.name = "#text"),
                  (t.type = 3),
                  (t.raw = !0),
                  (t.value = unescape(t.value).substr(14)));
        }),
        t.addNodeFilter("xml:namespace,input", function (e, t) {
          for (var n, r = e.length; r--; )
            7 === (n = e[r]).type
              ? n.remove()
              : 1 === n.type &&
                ("input" !== t || n.attr("type") || n.attr("type", "text"));
        }),
        t.addAttributeFilter("data-mce-type", function (e) {
          z(e, function (e) {
            "format-caret" === e.attr("data-mce-type") &&
              (e.isEmpty(t.schema.getNonEmptyElements())
                ? e.remove()
                : e.unwrap());
          });
        }),
        t.addAttributeFilter(
          "data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",
          function (e, t) {
            for (var n = e.length; n--; ) e[n].attr(t, null);
          }
        );
      return {
        schema: y,
        addNodeFilter: b.addNodeFilter,
        addAttributeFilter: b.addAttributeFilter,
        serialize: function (e, t) {
          void 0 === t && (t = {});
          var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f = xe({ format: "html" }, t),
            d = qv(h, e, f),
            m =
              ((n = v),
              (r = d),
              (i = Cu((o = f).getInner ? r.innerHTML : n.getOuterHTML(r))),
              o.selection || nr(Ct.fromDom(r)) ? i : yt.trim(i)),
            p =
              ((a = b),
              (u = m),
              (c = (s = f).selection ? xe({ forced_root_block: !1 }, s) : s),
              (function (e) {
                var t = function (e) {
                    return e && "br" === e.name;
                  },
                  n = e.lastChild;
                if (t(n)) {
                  var r = n.prev;
                  t(r) && (n.remove(), r.remove());
                }
              })((l = a.parse(u, c))),
              l);
          return "tree" === f.format ? p : Wv(h, g, y, p, f);
        },
        addRules: function (e) {
          y.addValidElements(e);
        },
        setRules: function (e) {
          y.setValidElements(e);
        },
        addTempAttr: N($v, b, e),
        getTempAttrs: function () {
          return e;
        },
        getNodeFilters: b.getNodeFilters,
        getAttributeFilters: b.getAttributeFilters,
      };
    },
    Xv = function (e, t) {
      var n = Kv(e, t);
      return {
        schema: n.schema,
        addNodeFilter: n.addNodeFilter,
        addAttributeFilter: n.addAttributeFilter,
        serialize: n.serialize,
        addRules: n.addRules,
        setRules: n.setRules,
        addTempAttr: n.addTempAttr,
        getTempAttrs: n.getTempAttrs,
        getNodeFilters: n.getNodeFilters,
        getAttributeFilters: n.getAttributeFilters,
      };
    };
  function Yv(u, s) {
    var r = {},
      n = function (e, r, o, t) {
        var i = new V.XMLHttpRequest();
        i.open("POST", s.url),
          (i.withCredentials = s.credentials),
          (i.upload.onprogress = function (e) {
            t((e.loaded / e.total) * 100);
          }),
          (i.onerror = function () {
            o(
              "Image upload failed due to a XHR Transport error. Code: " +
                i.status
            );
          }),
          (i.onload = function () {
            if (i.status < 200 || 300 <= i.status) o("HTTP Error: " + i.status);
            else {
              var e,
                t,
                n = JSON.parse(i.responseText);
              if (n && "string" == typeof n.location)
                r(
                  ((e = s.basePath),
                  (t = n.location),
                  e ? e.replace(/\/$/, "") + "/" + t.replace(/^\//, "") : t)
                );
              else o("Invalid JSON: " + i.responseText);
            }
          });
        var n = new V.FormData();
        n.append("file", e.blob(), e.filename()), i.send(n);
      },
      c = function (e, t) {
        return { url: t, blobInfo: e, status: !0 };
      },
      l = function (e, t) {
        return { url: "", blobInfo: e, status: !1, error: t };
      },
      f = function (e, t) {
        yt.each(r[e], function (e) {
          e(t);
        }),
          delete r[e];
      },
      o = function (e, n) {
        return (
          (e = yt.grep(e, function (e) {
            return !u.isUploaded(e.blobUri());
          })),
          ea.all(
            yt.map(e, function (e) {
              return u.isPending(e.blobUri())
                ? ((t = e.blobUri()),
                  new ea(function (e) {
                    (r[t] = r[t] || []), r[t].push(e);
                  }))
                : ((o = e),
                  (i = s.handler),
                  (a = n),
                  u.markPending(o.blobUri()),
                  new ea(function (t) {
                    var n;
                    try {
                      var r = function () {
                        n && n.close();
                      };
                      i(
                        o,
                        function (e) {
                          r(),
                            u.markUploaded(o.blobUri(), e),
                            f(o.blobUri(), c(o, e)),
                            t(c(o, e));
                        },
                        function (e) {
                          r(),
                            u.removeFailed(o.blobUri()),
                            f(o.blobUri(), l(o, e)),
                            t(l(o, e));
                        },
                        function (e) {
                          e < 0 ||
                            100 < e ||
                            (n = n || a()).progressBar.value(e);
                        }
                      );
                    } catch (e) {
                      t(l(o, e.message));
                    }
                  }));
              var o, i, a, t;
            })
          )
        );
      };
    return (
      !1 === A(s.handler) && (s.handler = n),
      {
        upload: function (e, t) {
          return s.url || s.handler !== n
            ? o(e, t)
            : new ea(function (e) {
                e([]);
              });
        },
      }
    );
  }
  var Gv = 0,
    Jv = function (e) {
      return (
        e +
        Gv++ +
        ((t = function () {
          return Math.round(4294967295 * Math.random()).toString(36);
        }),
        "s" + new Date().getTime().toString(36) + t() + t() + t())
      );
      var t;
    },
    Qv = function (u) {
      var n,
        o,
        e,
        t,
        r,
        i,
        s =
          ((n = []),
          (o = function (e) {
            if (!e.blob || !e.base64)
              throw new Error(
                "blob and base64 representations of the image are required for BlobInfo to be created"
              );
            var t = e.id || Jv("blobid"),
              n = e.name || t;
            return {
              id: x(t),
              name: x(n),
              filename: x(
                n +
                  "." +
                  ({
                    "image/jpeg": "jpg",
                    "image/jpg": "jpg",
                    "image/gif": "gif",
                    "image/png": "png",
                  }[e.blob.type.toLowerCase()] || "dat")
              ),
              blob: x(e.blob),
              base64: x(e.base64),
              blobUri: x(e.blobUri || V.URL.createObjectURL(e.blob)),
              uri: x(e.uri),
            };
          }),
          {
            create: function (e, t, n, r) {
              if (q(e)) return o({ id: e, name: r, blob: t, base64: n });
              if (E(e)) return o(e);
              throw new Error("Unknown input type");
            },
            add: function (e) {
              t(e.id()) || n.push(e);
            },
            get: (t = function (t) {
              return e(function (e) {
                return e.id() === t;
              });
            }),
            getByUri: function (t) {
              return e(function (e) {
                return e.blobUri() === t;
              });
            },
            getByData: function (t, n) {
              return e(function (e) {
                return e.base64() === t && e.blob().type === n;
              });
            },
            findFirst: (e = function (e) {
              return K(n, e).getOrUndefined();
            }),
            removeByUri: function (t) {
              n = H(n, function (e) {
                return (
                  e.blobUri() !== t || (V.URL.revokeObjectURL(e.blobUri()), !1)
                );
              });
            },
            destroy: function () {
              z(n, function (e) {
                V.URL.revokeObjectURL(e.blobUri());
              }),
                (n = []);
            },
          }),
        a = (function w() {
          var n = {},
            r = function (e, t) {
              return { status: e, resultUri: t };
            },
            t = function (e) {
              return e in n;
            };
          return {
            hasBlobUri: t,
            getResultUri: function (e) {
              var t = n[e];
              return t ? t.resultUri : null;
            },
            isPending: function (e) {
              return !!t(e) && 1 === n[e].status;
            },
            isUploaded: function (e) {
              return !!t(e) && 2 === n[e].status;
            },
            markPending: function (e) {
              n[e] = r(1, null);
            },
            markUploaded: function (e, t) {
              n[e] = r(2, t);
            },
            removeFailed: function (e) {
              delete n[e];
            },
            destroy: function () {
              n = {};
            },
          };
        })(),
        c = [],
        l = function (t) {
          return function (e) {
            return u.selection ? t(e) : [];
          };
        },
        f = function (e, t, n) {
          for (
            var r = 0;
            -1 !== (r = e.indexOf(t, r)) &&
              ((e = e.substring(0, r) + n + e.substr(r + t.length)),
              (r += n.length - t.length + 1)),
              -1 !== r;

          );
          return e;
        },
        d = function (e, t, n) {
          return (
            (e = f(e, 'src="' + t + '"', 'src="' + n + '"')),
            (e = f(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"'))
          );
        },
        m = function (t, n) {
          z(u.undoManager.data, function (e) {
            "fragmented" === e.type
              ? (e.fragments = U(e.fragments, function (e) {
                  return d(e, t, n);
                }))
              : (e.content = d(e.content, t, n));
          });
        },
        p = function () {
          return u.notificationManager.open({
            text: u.translate("Image uploading..."),
            type: "info",
            timeout: -1,
            progressBar: !0,
          });
        },
        g = function (e, t) {
          var n,
            r = u.convertURL(t, "src");
          m(e.src, t),
            u
              .$(e)
              .attr({
                src: u.getParam("images_reuse_filename", !1, "boolean")
                  ? (n = t) +
                    (-1 === n.indexOf("?") ? "?" : "&") +
                    new Date().getTime()
                  : t,
                "data-mce-src": r,
              });
        },
        h = function (n) {
          return (
            (r =
              r ||
              Yv(a, {
                url: u.getParam("images_upload_url", "", "string"),
                basePath: u.getParam("images_upload_base_path", "", "string"),
                credentials: u.getParam(
                  "images_upload_credentials",
                  !1,
                  "boolean"
                ),
                handler: u.getParam("images_upload_handler", null, "function"),
              })),
            b().then(
              l(function (a) {
                var e = U(a, function (e) {
                  return e.blobInfo;
                });
                return r.upload(e, p).then(
                  l(function (e) {
                    var t = U(e, function (e, t) {
                      var n,
                        r,
                        o = a[t].blobInfo,
                        i = a[t].image;
                      return (
                        e.status &&
                        u.getParam("images_replace_blob_uris", !0, "boolean")
                          ? (s.removeByUri(i.src), g(i, e.url))
                          : e.error &&
                            ((n = u),
                            (r = e.error),
                            Sh(
                              n,
                              Ia.translate(["Failed to upload image: {0}", r])
                            )),
                        {
                          element: i,
                          status: e.status,
                          uploadUri: e.url,
                          blobInfo: o,
                        }
                      );
                    });
                    return n && n(t), t;
                  })
                );
              })
            )
          );
        },
        v = function (e) {
          if (Js(u)) return h(e);
        },
        y = function (t) {
          return (
            !1 !==
              G(c, function (e) {
                return e(t);
              }) &&
            (0 !== t.getAttribute("src").indexOf("data:") ||
              u.getParam("images_dataimg_filter", x(!0), "function")(t))
          );
        },
        b = function () {
          return (i = i || Bv(a, s)).findAll(u.getBody(), y).then(
            l(function (e) {
              return (
                (e = H(e, function (e) {
                  return "string" != typeof e || (Sh(u, e), !1);
                })),
                z(e, function (e) {
                  m(e.image.src, e.blobInfo.blobUri()),
                    (e.image.src = e.blobInfo.blobUri()),
                    e.image.removeAttribute("data-mce-src");
                }),
                e
              );
            })
          );
        },
        C = function (e) {
          return e.replace(/src="(blob:[^"]+)"/g, function (e, n) {
            var t = a.getResultUri(n);
            if (t) return 'src="' + t + '"';
            var r = s.getByUri(n);
            return (r =
              r ||
              W(
                u.editorManager.get(),
                function (e, t) {
                  return (
                    e ||
                    (t.editorUpload && t.editorUpload.blobCache.getByUri(n))
                  );
                },
                null
              ))
              ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"'
              : e;
          });
        };
      return (
        u.on("SetContent", function () {
          (Js(u) ? v : b)();
        }),
        u.on("RawSaveContent", function (e) {
          e.content = C(e.content);
        }),
        u.on("GetContent", function (e) {
          e.source_view || "raw" === e.format || (e.content = C(e.content));
        }),
        u.on("PostRender", function () {
          u.parser.addNodeFilter("img", function (e) {
            z(e, function (e) {
              var t = e.attr("src");
              if (!s.getByUri(t)) {
                var n = a.getResultUri(t);
                n && e.attr("src", n);
              }
            });
          });
        }),
        {
          blobCache: s,
          addFilter: function (e) {
            c.push(e);
          },
          uploadImages: h,
          uploadImagesAuto: v,
          scanForImages: b,
          destroy: function () {
            s.destroy(), a.destroy(), (i = r = null);
          },
        }
      );
    },
    Zv = function (r, e, t, n) {
      var o = ne(t.get()),
        i = {},
        a = {},
        u = H(jl(r.dom, e), function (e) {
          return 1 === e.nodeType && !e.getAttribute("data-mce-bogus");
        });
      oe(n, function (e, n) {
        yt.each(u, function (t) {
          return r.formatter.matchNode(t, n, {}, e.similar)
            ? (-1 === o.indexOf(n) &&
                (z(e.callbacks, function (e) {
                  e(!0, { node: t, format: n, parents: u });
                }),
                (i[n] = e.callbacks)),
              (a[n] = e.callbacks),
              !1)
            : !ap(r, t, n) && void 0;
        });
      });
      var s = ey(t.get(), a, e, u);
      t.set(xe(xe({}, i), s));
    },
    ey = function (e, n, r, o) {
      return ce(e, function (e, t) {
        return (
          !!me(n, t) ||
          (z(e, function (e) {
            e(!1, { node: r, format: t, parents: o });
          }),
          !1)
        );
      }).t;
    },
    ty = function (e, o, i, a, t) {
      var n, r, u, s, c, l, f, d;
      return (
        null === o.get() &&
          ((r = e),
          (u = Oa({})),
          (n = o).set({}),
          r.on("NodeChange", function (e) {
            Zv(r, e.element, u, n.get());
          })),
        (c = i),
        (l = a),
        (f = t),
        (d = (s = o).get()),
        z(c.split(","), function (e) {
          d[e] || (d[e] = { similar: f, callbacks: [] }),
            d[e].callbacks.push(l);
        }),
        s.set(d),
        {
          unbind: function () {
            return (
              (t = i),
              (n = a),
              (r = (e = o).get()),
              z(t.split(","), function (e) {
                (r[e].callbacks = H(r[e].callbacks, function (e) {
                  return e !== n;
                })),
                  0 === r[e].callbacks.length && delete r[e];
              }),
              void e.set(r)
            );
            var e, t, n, r;
          },
        }
      );
    };
  function ny(e) {
    var r,
      t,
      n = {},
      o = function (e, t) {
        e &&
          ("string" != typeof e
            ? yt.each(e, function (e, t) {
                o(t, e);
              })
            : (k(t) || (t = [t]),
              yt.each(t, function (e) {
                "undefined" == typeof e.deep && (e.deep = !e.selector),
                  "undefined" == typeof e.split &&
                    (e.split = !e.selector || e.inline),
                  "undefined" == typeof e.remove &&
                    e.selector &&
                    !e.inline &&
                    (e.remove = "none"),
                  e.selector &&
                    e.inline &&
                    ((e.mixed = !0), (e.block_expand = !0)),
                  "string" == typeof e.classes &&
                    (e.classes = e.classes.split(/\s+/));
              }),
              (n[e] = t)));
      };
    return (
      o(
        ((r = e.dom),
        (t = {
          valigntop: [{ selector: "td,th", styles: { verticalAlign: "top" } }],
          valignmiddle: [
            { selector: "td,th", styles: { verticalAlign: "middle" } },
          ],
          valignbottom: [
            { selector: "td,th", styles: { verticalAlign: "bottom" } },
          ],
          alignleft: [
            {
              selector: "figure.image",
              collapsed: !1,
              classes: "align-left",
              ceFalseOverride: !0,
              preview: "font-family font-size",
            },
            {
              selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
              styles: { textAlign: "left" },
              inherit: !1,
              preview: !1,
              defaultBlock: "div",
            },
            {
              selector: "img,table",
              collapsed: !1,
              styles: { float: "left" },
              preview: "font-family font-size",
            },
          ],
          aligncenter: [
            {
              selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
              styles: { textAlign: "center" },
              inherit: !1,
              preview: "font-family font-size",
              defaultBlock: "div",
            },
            {
              selector: "figure.image",
              collapsed: !1,
              classes: "align-center",
              ceFalseOverride: !0,
              preview: "font-family font-size",
            },
            {
              selector: "img",
              collapsed: !1,
              styles: {
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              },
              preview: !1,
            },
            {
              selector: "table",
              collapsed: !1,
              styles: { marginLeft: "auto", marginRight: "auto" },
              preview: "font-family font-size",
            },
          ],
          alignright: [
            {
              selector: "figure.image",
              collapsed: !1,
              classes: "align-right",
              ceFalseOverride: !0,
              preview: "font-family font-size",
            },
            {
              selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
              styles: { textAlign: "right" },
              inherit: !1,
              preview: "font-family font-size",
              defaultBlock: "div",
            },
            {
              selector: "img,table",
              collapsed: !1,
              styles: { float: "right" },
              preview: "font-family font-size",
            },
          ],
          alignjustify: [
            {
              selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
              styles: { textAlign: "justify" },
              inherit: !1,
              defaultBlock: "div",
              preview: "font-family font-size",
            },
          ],
          bold: [
            {
              inline: "strong",
              remove: "all",
              preserve_attributes: ["class", "style"],
            },
            { inline: "span", styles: { fontWeight: "bold" } },
            {
              inline: "b",
              remove: "all",
              preserve_attributes: ["class", "style"],
            },
          ],
          italic: [
            {
              inline: "em",
              remove: "all",
              preserve_attributes: ["class", "style"],
            },
            { inline: "span", styles: { fontStyle: "italic" } },
            {
              inline: "i",
              remove: "all",
              preserve_attributes: ["class", "style"],
            },
          ],
          underline: [
            {
              inline: "span",
              styles: { textDecoration: "underline" },
              exact: !0,
            },
            {
              inline: "u",
              remove: "all",
              preserve_attributes: ["class", "style"],
            },
          ],
          strikethrough: [
            {
              inline: "span",
              styles: { textDecoration: "line-through" },
              exact: !0,
            },
            {
              inline: "strike",
              remove: "all",
              preserve_attributes: ["class", "style"],
            },
          ],
          forecolor: {
            inline: "span",
            styles: { color: "%value" },
            links: !0,
            remove_similar: !0,
            clear_child_styles: !0,
          },
          hilitecolor: {
            inline: "span",
            styles: { backgroundColor: "%value" },
            links: !0,
            remove_similar: !0,
            clear_child_styles: !0,
          },
          fontname: {
            inline: "span",
            toggle: !1,
            styles: { fontFamily: "%value" },
            clear_child_styles: !0,
          },
          fontsize: {
            inline: "span",
            toggle: !1,
            styles: { fontSize: "%value" },
            clear_child_styles: !0,
          },
          fontsize_class: { inline: "span", attributes: { class: "%value" } },
          blockquote: { block: "blockquote", wrapper: !0, remove: "all" },
          subscript: { inline: "sub" },
          superscript: { inline: "sup" },
          code: { inline: "code" },
          link: {
            inline: "a",
            selector: "a",
            remove: "all",
            split: !0,
            deep: !0,
            onmatch: function () {
              return !0;
            },
            onformat: function (n, e, t) {
              yt.each(t, function (e, t) {
                r.setAttrib(n, t, e);
              });
            },
          },
          removeformat: [
            {
              selector:
                "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
              remove: "all",
              split: !0,
              expand: !1,
              block_expand: !0,
              deep: !0,
            },
            {
              selector: "span",
              attributes: ["style", "class"],
              remove: "empty",
              split: !0,
              expand: !1,
              deep: !0,
            },
            {
              selector: "*",
              attributes: ["style", "class"],
              split: !1,
              expand: !1,
              deep: !0,
            },
          ],
        }),
        yt.each(
          "p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),
          function (e) {
            t[e] = { block: e, remove: "all" };
          }
        ),
        t)
      ),
      o(e.getParam("formats")),
      {
        get: function (e) {
          return e ? n[e] : n;
        },
        has: function (e) {
          return me(n, e);
        },
        register: o,
        unregister: function (e) {
          return e && n[e] && delete n[e], n;
        },
      }
    );
  }
  var ry,
    oy,
    iy = yt.each,
    ay = Ea.DOM,
    uy = function (e, t) {
      var n,
        o,
        r,
        m = (t && t.schema) || Rr({}),
        p = function (e) {
          o = "string" == typeof e ? { name: e, classes: [], attrs: {} } : e;
          var t,
            n,
            r = ay.create(o.name);
          return (
            (t = r),
            (n = o).classes.length && ay.addClass(t, n.classes.join(" ")),
            ay.setAttribs(t, n.attrs),
            r
          );
        },
        g = function (n, e, t) {
          var r,
            o,
            i,
            a,
            u,
            s,
            c,
            l = 0 < e.length && e[0],
            f = l && l.name,
            d =
              ((a = f),
              (u = "string" != typeof (i = n) ? i.nodeName.toLowerCase() : i),
              (s = m.getElementRule(u)),
              !(!(c = s && s.parentsRequired) || !c.length) &&
                (a && -1 !== yt.inArray(c, a) ? a : c[0]));
          if (d) f === d ? ((o = e[0]), (e = e.slice(1))) : (o = d);
          else if (l) (o = e[0]), (e = e.slice(1));
          else if (!t) return n;
          return (
            o && (r = p(o)).appendChild(n),
            t &&
              (r || (r = ay.create("div")).appendChild(n),
              yt.each(t, function (e) {
                var t = p(e);
                r.insertBefore(t, n);
              })),
            g(r, e, o && o.siblings)
          );
        };
      return e && e.length
        ? ((o = e[0]),
          (n = p(o)),
          (r = ay.create("div")).appendChild(g(n, e.slice(1), o.siblings)),
          r)
        : "";
    },
    sy = function (e) {
      var t,
        a = { classes: [], attrs: {} };
      return (
        "*" !== (e = a.selector = yt.trim(e)) &&
          (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function (
            e,
            t,
            n,
            r,
            o
          ) {
            switch (t) {
              case "#":
                a.attrs.id = n;
                break;
              case ".":
                a.classes.push(n);
                break;
              case ":":
                -1 !==
                  yt.inArray(
                    "checked disabled enabled read-only required".split(" "),
                    n
                  ) && (a.attrs[n] = n);
            }
            if ("[" === r) {
              var i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
              i && (a.attrs[i[1]] = i[2]);
            }
            return "";
          })),
        (a.name = t || "div"),
        a
      );
    },
    cy = function (n, e) {
      var t,
        r,
        o,
        i,
        a = "",
        u =
          ((i = n.getParam(
            "preview_styles",
            "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"
          )),
          q(i) ? i : "");
      if ("" === u) return "";
      var s = function (e) {
        return e.replace(/%(\w+)/g, "");
      };
      if ("string" == typeof e) {
        if (!(e = n.formatter.get(e))) return;
        e = e[0];
      }
      if ("preview" in e) {
        var c = de(e, "preview");
        if (c.is(!1)) return "";
        u = c.getOr(u);
      }
      t = e.block || e.inline || "span";
      var l,
        f =
          (l = e.selector) && "string" == typeof l
            ? ((l = (l = l.split(/\s*,\s*/)[0]).replace(
                /\s*(~\+|~|\+|>)\s*/g,
                "$1"
              )),
              yt
                .map(l.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
                  var t = yt.map(e.split(/(?:~\+|~|\+)/), sy),
                    n = t.pop();
                  return t.length && (n.siblings = t), n;
                })
                .reverse())
            : [];
      r = f.length
        ? (f[0].name || (f[0].name = t), (t = e.selector), uy(f, n))
        : uy([t], n);
      var d = ay.select(t, r)[0] || r.firstChild;
      return (
        iy(e.styles, function (e, t) {
          (e = s(e)) && ay.setStyle(d, t, e);
        }),
        iy(e.attributes, function (e, t) {
          (e = s(e)) && ay.setAttrib(d, t, e);
        }),
        iy(e.classes, function (e) {
          (e = s(e)), ay.hasClass(d, e) || ay.addClass(d, e);
        }),
        n.fire("PreviewFormats"),
        ay.setStyles(r, { position: "absolute", left: -65535 }),
        n.getBody().appendChild(r),
        (o = ay.getStyle(n.getBody(), "fontSize", !0)),
        (o = /px$/.test(o) ? parseInt(o, 10) : 0),
        iy(u.split(" "), function (e) {
          var t = ay.getStyle(d, e, !0);
          if (
            !(
              ("background-color" === e &&
                /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) &&
                ((t = ay.getStyle(n.getBody(), e, !0)),
                "#ffffff" === ay.toHex(t).toLowerCase())) ||
              ("color" === e && "#000000" === ay.toHex(t).toLowerCase())
            )
          ) {
            if ("font-size" === e && /em|%$/.test(t)) {
              if (0 === o) return;
              t = (parseFloat(t) / (/%$/.test(t) ? 100 : 1)) * o + "px";
            }
            "border" === e && t && (a += "padding:0 2px;"),
              (a += e + ":" + t + ";");
          }
        }),
        n.fire("AfterPreviewFormats"),
        ay.remove(r),
        a
      );
    },
    ly = function (s) {
      var e = ny(s),
        t = Oa(null);
      return (
        (function (e) {
          e.addShortcut("meta+b", "", "Bold"),
            e.addShortcut("meta+i", "", "Italic"),
            e.addShortcut("meta+u", "", "Underline");
          for (var t = 1; t <= 6; t++)
            e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
          e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]),
            e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]),
            e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
        })(s),
        Ep(s),
        {
          get: e.get,
          has: e.has,
          register: e.register,
          unregister: e.unregister,
          apply: function (e, t, n) {
            var r, o, i;
            (r = e), (o = t), (i = n), Ug(s).formatter.apply(r, o, i);
          },
          remove: function (e, t, n, r) {
            var o, i, a, u;
            (o = e),
              (i = t),
              (a = n),
              (u = r),
              Ug(s).formatter.remove(o, i, a, u);
          },
          toggle: function (e, t, n) {
            var r, o, i;
            (r = e), (o = t), (i = n), Ug(s).formatter.toggle(r, o, i);
          },
          match: N(fp, s),
          matchAll: N(dp, s),
          matchNode: N(lp, s),
          canApply: N(mp, s),
          formatChanged: N(ty, s, t),
          getCssText: N(cy, s),
        }
      );
    },
    fy = function (n, r, o) {
      var i = Oa(!1),
        a = function (e) {
          Ag(r, !1, o), r.add({}, e);
        };
      n.on("init", function () {
        r.add();
      }),
        n.on("BeforeExecCommand", function (e) {
          var t = e.command.toLowerCase();
          "undo" !== t &&
            "redo" !== t &&
            "mcerepaint" !== t &&
            (Dg(r, o), r.beforeChange());
        }),
        n.on("ExecCommand", function (e) {
          var t = e.command.toLowerCase();
          "undo" !== t && "redo" !== t && "mcerepaint" !== t && a(e);
        }),
        n.on("ObjectResizeStart cut", function () {
          r.beforeChange();
        }),
        n.on("SaveContent ObjectResized blur", a),
        n.on("dragend", a),
        n.on("keyup", function (e) {
          var t = e.keyCode;
          e.isDefaultPrevented() ||
            (((33 <= t && t <= 36) ||
              (37 <= t && t <= 40) ||
              45 === t ||
              e.ctrlKey) &&
              (a(), n.nodeChanged()),
            (46 !== t && 8 !== t) || n.nodeChanged(),
            i.get() &&
              r.typing &&
              !1 === Tg(Ng(n), r.data[0]) &&
              (!1 === n.isDirty() &&
                (n.setDirty(!0),
                n.fire("change", { level: r.data[0], lastLevel: null })),
              n.fire("TypingUndo"),
              i.set(!1),
              n.nodeChanged()));
        }),
        n.on("keydown", function (e) {
          var t = e.keyCode;
          if (!e.isDefaultPrevented())
            if ((33 <= t && t <= 36) || (37 <= t && t <= 40) || 45 === t)
              r.typing && a(e);
            else {
              var n = (e.ctrlKey && !e.altKey) || e.metaKey;
              !(t < 16 || 20 < t) ||
                224 === t ||
                91 === t ||
                r.typing ||
                n ||
                (r.beforeChange(), Ag(r, !0, o), r.add({}, e), i.set(!0));
            }
        }),
        n.on("mousedown", function (e) {
          r.typing && a(e);
        });
      n.on("input", function (e) {
        var t, n;
        e.inputType &&
          ("insertReplacementText" === e.inputType ||
            ("insertText" === (n = e).inputType && null === n.data) ||
            "insertFromPaste" === (t = e).inputType ||
            "insertFromDrop" === t.inputType) &&
          a(e);
      }),
        n.on("AddUndo Undo Redo ClearUndos", function (e) {
          e.isDefaultPrevented() || n.nodeChanged();
        });
    },
    dy = function (s) {
      var e,
        c = Oa(B.none()),
        l = Oa(0),
        f = Oa(0),
        d = {
          data: [],
          typing: !1,
          beforeChange: function () {
            var e, t;
            (e = l), (t = c), Ug(s).undoManager.beforeChange(e, t);
          },
          add: function (e, t) {
            return (
              (n = d),
              (r = f),
              (o = l),
              (i = c),
              (a = e),
              (u = t),
              Ug(s).undoManager.addUndoLevel(n, r, o, i, a, u)
            );
            var n, r, o, i, a, u;
          },
          undo: function () {
            return (e = d), (t = l), (n = f), Ug(s).undoManager.undo(e, t, n);
            var e, t, n;
          },
          redo: function () {
            return (e = s), (t = f), (n = d.data), Ug(e).undoManager.redo(t, n);
            var e, t, n;
          },
          clear: function () {
            var e, t;
            (e = d), (t = f), Ug(s).undoManager.clear(e, t);
          },
          reset: function () {
            var e;
            (e = d), Ug(s).undoManager.reset(e);
          },
          hasUndo: function () {
            return (e = d), (t = f), Ug(s).undoManager.hasUndo(e, t);
            var e, t;
          },
          hasRedo: function () {
            return (e = d), (t = f), Ug(s).undoManager.hasRedo(e, t);
            var e, t;
          },
          transact: function (e) {
            return (
              (t = d), (n = l), (r = e), Ug(s).undoManager.transact(t, n, r)
            );
            var t, n, r;
          },
          ignore: function (e) {
            var t, n;
            (t = l), (n = e), Ug(s).undoManager.ignore(t, n);
          },
          extra: function (e, t) {
            var n, r, o, i;
            (n = d),
              (r = f),
              (o = e),
              (i = t),
              Ug(s).undoManager.extra(n, r, o, i);
          },
        };
      return (
        Ig(s) || fy(s, d, l),
        (e = s).addShortcut("meta+z", "", "Undo"),
        e.addShortcut("meta+y,meta+shift+z", "", "Redo"),
        d
      );
    },
    my = [
      9,
      27,
      vv.HOME,
      vv.END,
      19,
      20,
      44,
      144,
      145,
      33,
      34,
      45,
      16,
      17,
      18,
      91,
      92,
      93,
      vv.DOWN,
      vv.UP,
      vv.LEFT,
      vv.RIGHT,
    ].concat(mt.browser.isFirefox() ? [224] : []),
    py = "data-mce-placeholder",
    gy = function (e) {
      return "keydown" === e.type || "keyup" === e.type;
    },
    hy = function (e) {
      var t = e.keyCode;
      return t === vv.BACKSPACE || t === vv.DELETE;
    },
    vy = function (a) {
      var e,
        u = a.dom,
        s = Ys(a),
        c = (e = a).getParam(
          "placeholder",
          Ws.getAttrib(e.getElement(), "placeholder"),
          "string"
        ),
        l = function (e, t) {
          if (
            !(function (e) {
              if (gy(e)) {
                var t = e.keyCode;
                return (
                  !hy(e) &&
                  (vv.metaKeyPressed(e) ||
                    e.altKey ||
                    (112 <= t && t <= 123) ||
                    M(my, t))
                );
              }
              return !1;
            })(e)
          ) {
            var n,
              r,
              o = a.getBody(),
              i =
                !(
                  gy((n = e)) &&
                  !(hy(n) || ("keyup" === n.type && 229 === n.keyCode))
                ) &&
                (function (e, t, n) {
                  if (dd(Ct.fromDom(t), !1)) {
                    var r = "" === n,
                      o = t.firstElementChild;
                    return (
                      !o ||
                      (!e.getStyle(t.firstElementChild, "padding-left") &&
                        !e.getStyle(t.firstElementChild, "padding-right") &&
                        (r ? !e.isBlock(o) : n === o.nodeName.toLowerCase()))
                    );
                  }
                  return !1;
                })(u, o, s);
            (("" !== u.getAttrib(o, py)) === i && !t) ||
              (u.setAttrib(o, py, i ? c : null),
              u.setAttrib(o, "aria-placeholder", i ? c : null),
              (r = i),
              a.fire("PlaceholderToggle", { state: r }),
              a.on(i ? "keydown" : "keyup", l),
              a.off(i ? "keyup" : "keydown", l));
          }
        };
      c &&
        a.on("init", function (e) {
          l(e, !0),
            a.on("change SetContent ExecCommand", l),
            a.on("paste", function (e) {
              return fa.setEditorTimeout(a, function () {
                return l(e);
              });
            });
        });
    },
    yy = function (e) {
      return e.touches === undefined || 1 !== e.touches.length
        ? B.none()
        : B.some(e.touches[0]);
    },
    by = function (a) {
      var u = Oa(B.none()),
        s = Oa(!1),
        r = za(function (e) {
          a.fire("longpress", xe(xe({}, e), { type: "longpress" })), s.set(!0);
        }, 400);
      a.on(
        "touchstart",
        function (n) {
          yy(n).each(function (e) {
            r.cancel();
            var t = { x: x(e.clientX), y: x(e.clientY), target: x(n.target) };
            r.throttle(n), s.set(!1), u.set(B.some(t));
          });
        },
        !0
      ),
        a.on(
          "touchmove",
          function (e) {
            r.cancel(),
              yy(e).each(function (i) {
                u.get().each(function (e) {
                  var t, n, r, o;
                  (t = i),
                    (n = e),
                    (r = Math.abs(t.clientX - n.x())),
                    (o = Math.abs(t.clientY - n.y())),
                    (5 < r || 5 < o) &&
                      (u.set(B.none()), s.set(!1), a.fire("longpresscancel"));
                });
              });
          },
          !0
        ),
        a.on(
          "touchend touchcancel",
          function (t) {
            r.cancel(),
              "touchcancel" !== t.type &&
                u
                  .get()
                  .filter(function (e) {
                    return e.target().isEqualNode(t.target);
                  })
                  .each(function () {
                    s.get()
                      ? t.preventDefault()
                      : a.fire("tap", xe(xe({}, t), { type: "tap" }));
                  });
          },
          !0
        );
    },
    Cy = function (e, t) {
      return e.hasOwnProperty(t.nodeName);
    },
    wy = function (e, t) {
      if (En(t)) {
        if (0 === t.nodeValue.length) return !0;
        if (
          /^\s+$/.test(t.nodeValue) &&
          (!t.nextSibling || Cy(e, t.nextSibling))
        )
          return !0;
      }
      return !1;
    },
    xy = function (e) {
      var t,
        n,
        r,
        o = e.dom,
        i = e.selection,
        a = e.schema,
        u = a.getBlockElements(),
        s = i.getStart(),
        c = e.getBody(),
        l = Ys(e);
      if (s && vn(s) && l) {
        var f = c.nodeName.toLowerCase();
        if (
          a.isValidChild(f, l.toLowerCase()) &&
          ((d = u),
          (m = c),
          (p = s),
          !F(vd(Ct.fromDom(p), Ct.fromDom(m)), function (e) {
            return Cy(d, e.dom());
          }))
        ) {
          var d,
            m,
            p,
            g,
            h,
            v = i.getRng(),
            y = v.startContainer,
            b = v.startOffset,
            C = v.endContainer,
            w = v.endOffset,
            x = Ym(e);
          for (s = c.firstChild; s; )
            if (((g = u), En((h = s)) || (vn(h) && !Cy(g, h) && !kl(h)))) {
              if (wy(u, s)) {
                (s = (n = s).nextSibling), o.remove(n);
                continue;
              }
              t ||
                ((t = o.create(l, Gs(e))),
                s.parentNode.insertBefore(t, s),
                (r = !0)),
                (s = (n = s).nextSibling),
                t.appendChild(n);
            } else (t = null), (s = s.nextSibling);
          r &&
            x &&
            (v.setStart(y, b), v.setEnd(C, w), i.setRng(v), e.nodeChanged());
        }
      }
    },
    Sy = function (e, t, n) {
      var r = e ? 1 : -1;
      return (
        t.setRng(Ss(n.container(), n.offset() + r).toRange()),
        t.getSel().modify("move", e ? "forward" : "backward", "word"),
        !0
      );
    },
    Ny = function (e, t) {
      var n = t.selection.getRng(),
        r = e ? Ss.fromRangeEnd(n) : Ss.fromRangeStart(n);
      return (
        !!A(t.selection.getSel().modify) &&
        (e && _u(r)
          ? Sy(!0, t.selection, r)
          : !(e || !Tu(r)) && Sy(!1, t.selection, r))
      );
    },
    Ey = En,
    ky = function (e) {
      return Ey(e) && e.data[0] === yu;
    },
    _y = function (e) {
      return Ey(e) && e.data[e.data.length - 1] === yu;
    },
    Ty = function (e) {
      return e.ownerDocument.createTextNode(yu);
    },
    Ry = function (e, t) {
      return (e
        ? function (e) {
            if (Ey(e.previousSibling))
              return (
                _y(e.previousSibling) || e.previousSibling.appendData(yu),
                e.previousSibling
              );
            if (Ey(e)) return ky(e) || e.insertData(0, yu), e;
            var t = Ty(e);
            return e.parentNode.insertBefore(t, e), t;
          }
        : function (e) {
            if (Ey(e.nextSibling))
              return (
                ky(e.nextSibling) || e.nextSibling.insertData(0, yu),
                e.nextSibling
              );
            if (Ey(e)) return _y(e) || e.appendData(yu), e;
            var t = Ty(e);
            return (
              e.nextSibling
                ? e.parentNode.insertBefore(t, e.nextSibling)
                : e.parentNode.appendChild(t),
              t
            );
          })(t);
    },
    Ay = N(Ry, !0),
    Dy = N(Ry, !1),
    Oy = function (e, t) {
      return En(e.container()) ? Ry(t, e.container()) : Ry(t, e.getNode());
    },
    By = function (e, t) {
      var n = t.get();
      return n && e.container() === n && Nu(n);
    },
    Py = function (n, e) {
      return e.fold(
        function (e) {
          hc(n.get());
          var t = Ay(e);
          return n.set(t), B.some(Ss(t, t.length - 1));
        },
        function (e) {
          return dl(e).map(function (e) {
            if (By(e, n)) return Ss(n.get(), 1);
            hc(n.get());
            var t = Oy(e, !0);
            return n.set(t), Ss(t, 1);
          });
        },
        function (e) {
          return ml(e).map(function (e) {
            if (By(e, n)) return Ss(n.get(), n.get().length - 1);
            hc(n.get());
            var t = Oy(e, !1);
            return n.set(t), Ss(t, t.length - 1);
          });
        },
        function (e) {
          hc(n.get());
          var t = Dy(e);
          return n.set(t), B.some(Ss(t, 1));
        }
      );
    },
    Ly = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
    Iy = function (e, t) {
      return Rt(
        Ct.fromDom(t),
        e.getParam(
          "inline_boundaries_selector",
          "a[href],code,.mce-annotation",
          "string"
        )
      );
    },
    My = function (e) {
      return (
        "rtl" === Ea.DOM.getStyle(e, "direction", !0) ||
        ((t = e.textContent), Ly.test(t))
      );
      var t;
    },
    Fy = function (e, t, n) {
      var r,
        o,
        i,
        a =
          ((r = e),
          (o = t),
          (i = n),
          H(Ea.DOM.getParents(i.container(), "*", o), r));
      return B.from(a[a.length - 1]);
    },
    Uy = function (e, t) {
      if (!t) return t;
      var n = t.container(),
        r = t.offset();
      return e
        ? Nu(n)
          ? En(n.nextSibling)
            ? Ss(n.nextSibling, 0)
            : Ss.after(n)
          : _u(t)
          ? Ss(n, r + 1)
          : t
        : Nu(n)
        ? En(n.previousSibling)
          ? Ss(n.previousSibling, n.previousSibling.data.length)
          : Ss.before(n)
        : Tu(t)
        ? Ss(n, r - 1)
        : t;
    },
    zy = N(Uy, !0),
    jy = N(Uy, !1),
    Hy = function (e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n].apply(null, t);
        if (r.isSome()) return r;
      }
      return B.none();
    },
    Vy = Qi([
      { before: ["element"] },
      { start: ["element"] },
      { end: ["element"] },
      { after: ["element"] },
    ]),
    qy = function (e, t) {
      var n = Dc(t, e);
      return n || e;
    },
    $y = function (e, t, n) {
      var r = zy(n),
        o = qy(t, r.container());
      return Fy(e, o, r).fold(function () {
        return ll(o, r)
          .bind(N(Fy, e, o))
          .map(function (e) {
            return Vy.before(e);
          });
      }, B.none);
    },
    Wy = function (e, t) {
      return null === hl(e, t);
    },
    Ky = function (e, t, n) {
      return Fy(e, t, n).filter(N(Wy, t));
    },
    Xy = function (e, t, n) {
      var r = jy(n);
      return Ky(e, t, r).bind(function (e) {
        return fl(e, r).isNone() ? B.some(Vy.start(e)) : B.none();
      });
    },
    Yy = function (e, t, n) {
      var r = zy(n);
      return Ky(e, t, r).bind(function (e) {
        return ll(e, r).isNone() ? B.some(Vy.end(e)) : B.none();
      });
    },
    Gy = function (e, t, n) {
      var r = jy(n),
        o = qy(t, r.container());
      return Fy(e, o, r).fold(function () {
        return fl(o, r)
          .bind(N(Fy, e, o))
          .map(function (e) {
            return Vy.after(e);
          });
      }, B.none);
    },
    Jy = function (e) {
      return !1 === My(Zy(e));
    },
    Qy = function (e, t, n) {
      return Hy([$y, Xy, Yy, Gy], [e, t, n]).filter(Jy);
    },
    Zy = function (e) {
      return e.fold(o, o, o, o);
    },
    eb = function (e) {
      return e.fold(x("before"), x("start"), x("end"), x("after"));
    },
    tb = function (e) {
      return e.fold(Vy.before, Vy.before, Vy.after, Vy.after);
    },
    nb = function (e) {
      return e.fold(Vy.start, Vy.start, Vy.end, Vy.end);
    },
    rb = function (a, e, u, t, n, s) {
      return Bu(Fy(e, u, t), Fy(e, u, n), function (e, t) {
        return e !== t &&
          ((r = t), (o = Dc(e, (n = u))), (i = Dc(r, n)), o && o === i)
          ? Vy.after(a ? e : t)
          : s;
        var n, r, o, i;
      }).getOr(s);
    },
    ob = function (e, r) {
      return e.fold(x(!0), function (e) {
        return (n = r), !(eb((t = e)) === eb(n) && Zy(t) === Zy(n));
        var t, n;
      });
    },
    ib = function (e, t) {
      return e
        ? t.fold(a(B.some, Vy.start), B.none, a(B.some, Vy.after), B.none)
        : t.fold(B.none, a(B.some, Vy.before), B.none, a(B.some, Vy.end));
    },
    ab = function (e, a, u, s) {
      var t = Uy(e, s),
        c = Qy(a, u, t);
      return Qy(a, u, t)
        .bind(N(ib, e))
        .orThunk(function () {
          return (
            (n = a),
            (r = u),
            (o = c),
            (i = Uy((t = e), s)),
            al(t, r, i)
              .map(N(Uy, t))
              .fold(
                function () {
                  return o.map(tb);
                },
                function (e) {
                  return Qy(n, r, e).map(N(rb, t, n, r, i, e)).filter(N(ob, o));
                }
              )
              .filter(Jy)
          );
          var t, n, r, o, i;
        });
    },
    ub =
      (N(ab, !1),
      N(ab, !0),
      function (e, t) {
        var n = e.dom.createRng();
        n.setStart(t.container(), t.offset()),
          n.setEnd(t.container(), t.offset()),
          e.selection.setRng(n);
      }),
    sb = function (e, t) {
      e
        ? t.setAttribute("data-mce-selected", "inline-boundary")
        : t.removeAttribute("data-mce-selected");
    },
    cb = function (t, e, n) {
      return Py(e, n).map(function (e) {
        return ub(t, e), n;
      });
    },
    lb = function (e, t) {
      if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) {
        var n = Ss.fromRangeStart(e.selection.getRng());
        Ss.isTextPosition(n) &&
          !1 === (_u((r = n)) || Tu(r)) &&
          (ub(e, gc(t.get(), n)), t.set(null));
      }
      var r;
    },
    fb = function (a, u, s) {
      return function () {
        return (
          !!ic(a) &&
          ((n = u),
          (e = s),
          (r = (t = a).getBody()),
          (o = Ss.fromRangeStart(t.selection.getRng())),
          (i = N(Iy, t)),
          ab(e, i, r, o)
            .bind(function (e) {
              return cb(t, n, e);
            })
            .isSome())
        );
        var t, n, e, r, o, i;
      };
    },
    db = function (e, t, n) {
      return function () {
        return !!ic(t) && Ny(e, t);
      };
    },
    mb = function (u) {
      var s = Oa(null),
        c = N(Iy, u);
      return (
        u.on("NodeChange", function (e) {
          var t, n, r, o, i, a;
          !ic(u) ||
            (mt.browser.isIE() && e.initial) ||
            ((t = c),
            (n = u.dom),
            (r = e.parents),
            (o = U(
              Ya(
                Ct.fromDom(n.getRoot()),
                '*[data-mce-selected="inline-boundary"]'
              ),
              function (e) {
                return e.dom();
              }
            )),
            (i = H(o, t)),
            (a = H(r, t)),
            z(Q(i, a), N(sb, !1)),
            z(Q(a, i), N(sb, !0)),
            lb(u, s),
            (function (n, r, o, e) {
              if (r.selection.isCollapsed()) {
                var t = H(e, n);
                z(t, function (e) {
                  var t = Ss.fromRangeStart(r.selection.getRng());
                  Qy(n, r.getBody(), t).bind(function (e) {
                    return cb(r, o, e);
                  });
                });
              }
            })(c, u, s, e.parents));
        }),
        s
      );
    },
    pb = N(db, !0),
    gb = N(db, !1);
  ((oy = ry = ry || {})[(oy.Br = 0)] = "Br"),
    (oy[(oy.Block = 1)] = "Block"),
    (oy[(oy.Wrap = 2)] = "Wrap"),
    (oy[(oy.Eol = 3)] = "Eol");
  var hb,
    vb,
    yb = function (e, t) {
      return e === ws.Backwards ? J(t) : t;
    },
    bb = function (e, t, n, r) {
      for (
        var o, i, a, u, s, c, l = tl(n), f = r, d = [];
        f &&
        ((s = l), (c = f), (o = t === ws.Forwards ? s.next(c) : s.prev(c)));

      ) {
        if (Rn(o.getNode(!1)))
          return t === ws.Forwards
            ? {
                positions: yb(t, d).concat([o]),
                breakType: ry.Br,
                breakAt: B.some(o),
              }
            : { positions: yb(t, d), breakType: ry.Br, breakAt: B.some(o) };
        if (o.isVisible()) {
          if (e(f, o)) {
            var m =
              ((i = t),
              (a = f),
              Rn((u = o).getNode(i === ws.Forwards))
                ? ry.Br
                : !1 === Oc(a, u)
                ? ry.Block
                : ry.Wrap);
            return { positions: yb(t, d), breakType: m, breakAt: B.some(o) };
          }
          d.push(o), (f = o);
        } else f = o;
      }
      return { positions: yb(t, d), breakType: ry.Eol, breakAt: B.none() };
    },
    Cb = function (n, r, o, e) {
      return r(o, e)
        .breakAt.map(function (e) {
          var t = r(o, e).positions;
          return n === ws.Backwards ? t.concat(e) : [e].concat(t);
        })
        .getOr([]);
    },
    wb = function (e, i) {
      return W(
        e,
        function (e, o) {
          return e.fold(
            function () {
              return B.some(o);
            },
            function (r) {
              return Bu(Z(r.getClientRects()), Z(o.getClientRects()), function (
                e,
                t
              ) {
                var n = Math.abs(i - e.left);
                return Math.abs(i - t.left) <= n ? o : r;
              }).or(e);
            }
          );
        },
        B.none()
      );
    },
    xb = function (t, e) {
      return Z(e.getClientRects()).bind(function (e) {
        return wb(t, e.left);
      });
    },
    Sb = N(bb, Cs.isAbove, -1),
    Nb = N(bb, Cs.isBelow, 1),
    Eb = N(Cb, -1, Sb),
    kb = N(Cb, 1, Nb),
    _b = function (t) {
      var e = function (e) {
        return U(e, function (e) {
          return ((e = Lu(e)).node = t), e;
        });
      };
      if (vn(t)) return e(t.getClientRects());
      if (En(t)) {
        var n = t.ownerDocument.createRange();
        return (
          n.setStart(t, 0), n.setEnd(t, t.data.length), e(n.getClientRects())
        );
      }
    },
    Tb = function (e) {
      return Y(e, _b);
    };
  ((vb = hb = hb || {})[(vb.Up = -1)] = "Up"), (vb[(vb.Down = 1)] = "Down");
  var Rb = function (o, i, a, e, u, t) {
      var s = 0,
        c = [],
        n = function (e) {
          var t, n, r;
          for (
            r = Tb([e]), -1 === o && (r = r.reverse()), t = 0;
            t < r.length;
            t++
          )
            if (((n = r[t]), !a(n, l))) {
              if ((0 < c.length && i(n, we(c)) && s++, (n.line = s), u(n)))
                return !0;
              c.push(n);
            }
        },
        l = we(t.getClientRects());
      if (!l) return c;
      var r = t.getNode();
      return (
        n(r),
        (function (e, t, n, r) {
          for (; (r = Ac(r, e, ts, t)); ) if (n(r)) return;
        })(o, e, n, r),
        c
      );
    },
    Ab = N(Rb, hb.Up, Fu, Uu),
    Db = N(Rb, hb.Down, Uu, Fu),
    Ob = function (n) {
      return function (e) {
        return (t = n), e.line > t;
        var t;
      };
    },
    Bb = function (n) {
      return function (e) {
        return (t = n), e.line === t;
        var t;
      };
    },
    Pb = Dn,
    Lb = Ac,
    Ib = function (e, t) {
      return Math.abs(e.left - t);
    },
    Mb = function (e, t) {
      return Math.abs(e.right - t);
    },
    Fb = function (e, t) {
      return e >= t.left && e <= t.right;
    },
    Ub = function (e, t) {
      return e >= t.top && e <= t.bottom;
    },
    zb = function (e, o) {
      return be(e, function (e, t) {
        var n = Math.min(Ib(e, o), Mb(e, o)),
          r = Math.min(Ib(t, o), Mb(t, o));
        return Fb(o, t) || (!Fb(o, e) && ((r === n && Pb(t.node)) || r < n))
          ? t
          : e;
      });
    },
    jb = function (e, t, n, r, o) {
      var i = Lb(r, e, ts, t, !o);
      do {
        if (!i || n(i)) return;
      } while ((i = Lb(i, e, ts, t)));
    },
    Hb = function (e, t, n) {
      var r,
        o,
        i = Tb(H(te(e.getElementsByTagName("*")), xc)),
        a = H(i, N(Ub, n)),
        u = zb(a, t);
      if (u) {
        var s = !xn(u.node);
        if (
          (u = zb(
            (function (e, r, t) {
              void 0 === t && (t = !0);
              var o = [],
                n = function (t, e) {
                  var n = H(Tb([e]), function (e) {
                    return !t(e, r);
                  });
                  return (o = o.concat(n)), 0 === n.length;
                };
              return (
                o.push(r),
                jb(hb.Up, e, N(n, Fu), r.node, t),
                jb(hb.Down, e, N(n, Uu), r.node, t),
                o
              );
            })(e, u, s),
            t
          )) &&
          xc(u.node)
        )
          return (o = t), { node: (r = u).node, before: Ib(r, o) < Mb(r, o) };
      }
      return null;
    },
    Vb = An,
    qb = Dn,
    $b = function (e, t, n, r, o) {
      return t._selectionOverrides.showCaret(e, n, r, o);
    },
    Wb = function (e, t) {
      var n, r;
      return e.fire("BeforeObjectSelected", { target: t }).isDefaultPrevented()
        ? null
        : ((r = (n = t).ownerDocument.createRange()).selectNode(n), r);
    },
    Kb = function (e, t, n) {
      var r = Fc(1, e.getBody(), t),
        o = Ss.fromRangeStart(r),
        i = o.getNode();
      if (qb(i)) return $b(1, e, i, !o.isAtEnd(), !1);
      var a = o.getNode(!0);
      if (qb(a)) return $b(1, e, a, !1, !1);
      var u = e.dom.getParent(o.getNode(), function (e) {
        return qb(e) || Vb(e);
      });
      return qb(u) ? $b(1, e, u, !1, n) : null;
    },
    Xb = function (e, t, n) {
      if (!t || !t.collapsed) return t;
      var r = Kb(e, t, n);
      return r || t;
    },
    Yb = Dn,
    Gb = ju,
    Jb = function (e, t, n, r) {
      var o = e === ws.Forwards,
        i = o ? id : ad;
      if (!r.collapsed) {
        var a = Gb(r);
        if (Yb(a)) return $b(e, t, a, e === ws.Backwards, !0);
      }
      var u = Su(r.startContainer),
        s = zc(e, t.getBody(), r);
      if (i(s)) return Wb(t, s.getNode(!o));
      var c = Uy(o, n(s));
      if (!c) return u ? r : null;
      if (i(c)) return $b(e, t, c.getNode(!o), o, !0);
      var l = n(c);
      return l && i(l) && Vc(c, l)
        ? $b(e, t, l.getNode(!o), o, !0)
        : u
        ? Xb(t, c.toRange(), !0)
        : null;
    },
    Qb = function (e, t, n, r) {
      var o, i, a, u;
      u = Gb(r);
      var s = zc(e, t.getBody(), r),
        c = n(t.getBody(), Ob(1), s),
        l = H(c, Bb(1)),
        f = we(s.getClientRects());
      if (
        ((id(s) || rd(s)) && (u = s.getNode()),
        (ad(s) || od(s)) && (u = s.getNode(!0)),
        !f)
      )
        return null;
      var d = f.left;
      if ((o = zb(l, d)) && Yb(o.node))
        return (
          (i = Math.abs(d - o.left)),
          (a = Math.abs(d - o.right)),
          $b(e, t, o.node, i < a, !0)
        );
      if (u) {
        var m = (function (e, t, n, r) {
          var o,
            i,
            a,
            u,
            s,
            c = tl(t),
            l = [],
            f = 0,
            d = function (e) {
              return we(e.getClientRects());
            },
            m = d(
              (u =
                1 === e
                  ? ((o = c.next), (i = Uu), (a = Fu), Ss.after(r))
                  : ((o = c.prev), (i = Fu), (a = Uu), Ss.before(r)))
            );
          do {
            if (u.isVisible() && !a((s = d(u)), m)) {
              if (
                (0 < l.length && i(s, we(l)) && f++,
                ((s = Lu(s)).position = u),
                (s.line = f),
                n(s))
              )
                return l;
              l.push(s);
            }
          } while ((u = o(u)));
          return l;
        })(e, t.getBody(), Ob(1), u);
        if ((o = zb(H(m, Bb(1)), d))) return Xb(t, o.position.toRange(), !0);
        if ((o = we(H(m, Bb(0))))) return Xb(t, o.position.toRange(), !0);
      }
    },
    Zb = function (e, t, n) {
      var r,
        o,
        i,
        a,
        u = tl(e.getBody()),
        s = N(Hc, u.next),
        c = N(Hc, u.prev);
      if (n.collapsed && "" !== Ys(e)) {
        if (!(r = e.dom.getParent(n.startContainer, "PRE"))) return;
        (1 === t ? s : c)(Ss.fromRangeStart(n)) ||
          ((a = (i = e).dom.create(Ys(i))),
          (!mt.ie || 11 <= mt.ie) && (a.innerHTML = '<br data-mce-bogus="1">'),
          (o = a),
          1 === t ? e.$(r).after(o) : e.$(r).before(o),
          e.selection.select(o, !0),
          e.selection.collapse());
      }
    },
    eC = function (l, f) {
      return function () {
        var e,
          t,
          n,
          r,
          o,
          i,
          a,
          u,
          s,
          c =
            ((t = f),
            (r = tl((e = l).getBody())),
            (o = N(Hc, r.next)),
            (i = N(Hc, r.prev)),
            (a = t ? ws.Forwards : ws.Backwards),
            (u = t ? o : i),
            (s = e.selection.getRng()),
            (n = Jb(a, e, u, s)) ? n : (n = Zb(e, a, s)) || null);
        return !!c && (l.selection.setRng(c), !0);
      };
    },
    tC = function (u, s) {
      return function () {
        var e,
          t,
          n,
          r,
          o,
          i,
          a =
            ((r = (t = s) ? 1 : -1),
            (o = t ? Db : Ab),
            (i = (e = u).selection.getRng()),
            (n = Qb(r, e, o, i)) ? n : (n = Zb(e, r, i)) || null);
        return !!a && (u.selection.setRng(a), !0);
      };
    },
    nC = function (r, o) {
      return function () {
        var t,
          e = o
            ? Ss.fromRangeEnd(r.selection.getRng())
            : Ss.fromRangeStart(r.selection.getRng()),
          n = (o ? Nb : Sb)(r.getBody(), e);
        return (o ? ee : Z)(n.positions)
          .filter(
            ((t = o),
            function (e) {
              return (t ? ad : id)(e);
            })
          )
          .fold(x(!1), function (e) {
            return r.selection.setRng(e.toRange()), !0;
          });
      };
    },
    rC = function (o, e) {
      return Y(e, function (e) {
        var t,
          n,
          r =
            ((t = Lu(e.getBoundingClientRect())),
            (n = -1),
            {
              left: t.left - n,
              top: t.top - n,
              right: t.right + 2 * n,
              bottom: t.bottom + 2 * n,
              width: t.width + n,
              height: t.height + n,
            });
        return [
          { x: r.left, y: o(r), cell: e },
          { x: r.right, y: o(r), cell: e },
        ];
      });
    },
    oC = function (e, t, n, r, o) {
      var i,
        a,
        u = Ya(Ct.fromDom(n), "td,th,caption").map(function (e) {
          return e.dom();
        }),
        s = H(rC(e, u), function (e) {
          return t(e, o);
        });
      return (
        (i = r),
        (a = o),
        W(
          s,
          function (e, r) {
            return e.fold(
              function () {
                return B.some(r);
              },
              function (e) {
                var t = Math.sqrt(Math.abs(e.x - i) + Math.abs(e.y - a)),
                  n = Math.sqrt(Math.abs(r.x - i) + Math.abs(r.y - a));
                return B.some(n < t ? r : e);
              }
            );
          },
          B.none()
        ).map(function (e) {
          return e.cell;
        })
      );
    },
    iC = N(
      oC,
      function (e) {
        return e.bottom;
      },
      function (e, t) {
        return e.y < t;
      }
    ),
    aC = N(
      oC,
      function (e) {
        return e.top;
      },
      function (e, t) {
        return e.y > t;
      }
    ),
    uC = function (t, n) {
      return Z(n.getClientRects())
        .bind(function (e) {
          return iC(t, e.left, e.top);
        })
        .bind(function (e) {
          return xb(
            ml((t = e))
              .map(function (e) {
                return Sb(t, e).positions.concat(e);
              })
              .getOr([]),
            n
          );
          var t;
        });
    },
    sC = function (t, n) {
      return ee(n.getClientRects())
        .bind(function (e) {
          return aC(t, e.left, e.top);
        })
        .bind(function (e) {
          return xb(
            dl((t = e))
              .map(function (e) {
                return [e].concat(Nb(t, e).positions);
              })
              .getOr([]),
            n
          );
          var t;
        });
    },
    cC = function (e, t) {
      e.selection.setRng(t), Yh(e, t);
    },
    lC = function (e, t, n) {
      var r,
        o,
        i,
        a,
        u = e(t, n);
      return ((a = u).breakType === ry.Wrap && 0 === a.positions.length) ||
        (!Rn(n.getNode()) &&
          (i = u).breakType === ry.Br &&
          1 === i.positions.length)
        ? ((r = e),
          (o = t),
          !u.breakAt
            .map(function (e) {
              return r(o, e).breakAt.isSome();
            })
            .getOr(!1))
        : u.breakAt.isNone();
    },
    fC = N(lC, Sb),
    dC = N(lC, Nb),
    mC = function (e, t, n, r) {
      var o,
        i,
        a,
        u,
        s = e.selection.getRng(),
        c = t ? 1 : -1;
      if (
        wc() &&
        ((o = t),
        (i = s),
        (a = n),
        (u = Ss.fromRangeStart(i)),
        cl(!o, a)
          .map(function (e) {
            return e.isEqual(u);
          })
          .getOr(!1))
      ) {
        var l = $b(c, e, n, !t, !0);
        return cC(e, l), !0;
      }
      return !1;
    },
    pC = function (e, t) {
      var n = t.getNode(e);
      return vn(n) && "TABLE" === n.nodeName ? B.some(n) : B.none();
    },
    gC = function (u, s, c) {
      var e = pC(!!s, c),
        t = !1 === s;
      e.fold(
        function () {
          return cC(u, c.toRange());
        },
        function (a) {
          return cl(t, u.getBody())
            .filter(function (e) {
              return e.isEqual(c);
            })
            .fold(
              function () {
                return cC(u, c.toRange());
              },
              function (e) {
                return (
                  (n = s),
                  (o = a),
                  (t = c),
                  void ((i = Ys((r = u)))
                    ? r.undoManager.transact(function () {
                        var e = Ct.fromTag(i);
                        Ln(e, Gs(r)),
                          Zt(e, Ct.fromTag("br")),
                          (n ? Jt : Gt)(Ct.fromDom(o), e);
                        var t = r.dom.createRng();
                        t.setStart(e.dom(), 0), t.setEnd(e.dom(), 0), cC(r, t);
                      })
                    : cC(r, t.toRange()))
                );
                var n, r, o, t, i;
              }
            );
        }
      );
    },
    hC = function (e, t, n, r) {
      var o,
        i,
        a,
        u,
        s,
        c,
        l = e.selection.getRng(),
        f = Ss.fromRangeStart(l),
        d = e.getBody();
      if (!t && fC(r, f)) {
        var m =
          ((u = d),
          uC((s = n), (c = f))
            .orThunk(function () {
              return Z(c.getClientRects()).bind(function (e) {
                return wb(Eb(u, Ss.before(s)), e.left);
              });
            })
            .getOr(Ss.before(s)));
        return gC(e, t, m), !0;
      }
      if (t && dC(r, f)) {
        m =
          ((o = d),
          sC((i = n), (a = f))
            .orThunk(function () {
              return Z(a.getClientRects()).bind(function (e) {
                return wb(kb(o, Ss.after(i)), e.left);
              });
            })
            .getOr(Ss.after(i)));
        return gC(e, t, m), !0;
      }
      return !1;
    },
    vC = function (t, n) {
      return function () {
        return B.from(t.dom.getParent(t.selection.getNode(), "td,th"))
          .bind(function (e) {
            return B.from(t.dom.getParent(e, "table")).map(function (e) {
              return mC(t, n, e);
            });
          })
          .getOr(!1);
      };
    },
    yC = function (n, r) {
      return function () {
        return B.from(n.dom.getParent(n.selection.getNode(), "td,th"))
          .bind(function (t) {
            return B.from(n.dom.getParent(t, "table")).map(function (e) {
              return hC(n, r, e, t);
            });
          })
          .getOr(!1);
      };
    },
    bC = function (e) {
      return M(["figcaption"], wt(e));
    },
    CC = function (e) {
      var t = V.document.createRange();
      return t.setStartBefore(e.dom()), t.setEndBefore(e.dom()), t;
    },
    wC = function (e, t, n) {
      (n ? Zt : Qt)(e, t);
    },
    xC = function (e, t, n, r) {
      return "" === t
        ? ((l = e), (f = r), (d = Ct.fromTag("br")), wC(l, d, f), CC(d))
        : ((o = e),
          (i = r),
          (a = t),
          (u = n),
          (s = Ct.fromTag(a)),
          (c = Ct.fromTag("br")),
          Ln(s, u),
          Zt(s, c),
          wC(o, s, i),
          CC(c));
      var o, i, a, u, s, c, l, f, d;
    },
    SC = function (e, t, n) {
      return t
        ? ((o = e.dom()), Nb(o, n).breakAt.isNone())
        : ((r = e.dom()), Sb(r, n).breakAt.isNone());
      var r, o;
    },
    NC = function (t, n) {
      var e,
        r,
        o = Ct.fromDom(t.getBody()),
        i = Ss.fromRangeStart(t.selection.getRng()),
        a = Ys(t),
        u = Gs(t);
      return (
        (e = i),
        (r = N(Dt, o)),
        Za(Ct.fromDom(e.container()), Kn, r)
          .filter(bC)
          .exists(function () {
            if (SC(o, n, i)) {
              var e = xC(o, a, u, n);
              return t.selection.setRng(e), !0;
            }
            return !1;
          })
      );
    },
    EC = function (e, t) {
      return function () {
        return !!e.selection.isCollapsed() && NC(e, t);
      };
    },
    kC = function (e, r) {
      return Y(
        U(e, function (e) {
          return xe(
            {
              shiftKey: !1,
              altKey: !1,
              ctrlKey: !1,
              metaKey: !1,
              keyCode: 0,
              action: f,
            },
            e
          );
        }),
        function (e) {
          return (
            (t = e),
            (n = r).keyCode === t.keyCode &&
            n.shiftKey === t.shiftKey &&
            n.altKey === t.altKey &&
            n.ctrlKey === t.ctrlKey &&
            n.metaKey === t.metaKey
              ? [e]
              : []
          );
          var t, n;
        }
      );
    },
    _C = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      return function () {
        return e.apply(null, t);
      };
    },
    TC = function (e, t) {
      return K(kC(e, t), function (e) {
        return e.action();
      });
    },
    RC = function (i, a) {
      i.on("keydown", function (e) {
        var t, n, r, o;
        !1 === e.isDefaultPrevented() &&
          ((t = i),
          (n = a),
          (r = e),
          (o = ot().os),
          TC(
            [
              { keyCode: vv.RIGHT, action: eC(t, !0) },
              { keyCode: vv.LEFT, action: eC(t, !1) },
              { keyCode: vv.UP, action: tC(t, !1) },
              { keyCode: vv.DOWN, action: tC(t, !0) },
              { keyCode: vv.RIGHT, action: vC(t, !0) },
              { keyCode: vv.LEFT, action: vC(t, !1) },
              { keyCode: vv.UP, action: yC(t, !1) },
              { keyCode: vv.DOWN, action: yC(t, !0) },
              { keyCode: vv.RIGHT, action: fb(t, n, !0) },
              { keyCode: vv.LEFT, action: fb(t, n, !1) },
              {
                keyCode: vv.RIGHT,
                ctrlKey: !o.isOSX(),
                altKey: o.isOSX(),
                action: pb(t, n),
              },
              {
                keyCode: vv.LEFT,
                ctrlKey: !o.isOSX(),
                altKey: o.isOSX(),
                action: gb(t, n),
              },
              { keyCode: vv.UP, action: EC(t, !1) },
              { keyCode: vv.DOWN, action: EC(t, !0) },
            ],
            r
          ).each(function (e) {
            r.preventDefault();
          }));
      });
    },
    AC = function (e, t) {
      return Bt(e, t)
        ? Za(
            t,
            function (e) {
              return Gn(e) || Qn(e);
            },
            ((n = e),
            function (e) {
              return Dt(n, Ct.fromDom(e.dom().parentNode));
            })
          )
        : B.none();
      var n;
    },
    DC = function (e) {
      var t, n, r;
      e.dom.isEmpty(e.getBody()) &&
        (e.setContent(""),
        (n = (t = e).getBody()),
        (r = n.firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n),
        t.selection.setCursorLocation(r, 0));
    },
    OC = function (e, t) {
      return { from: e, to: t };
    },
    BC = function (e, t) {
      var n = Ct.fromDom(e),
        r = Ct.fromDom(t.container());
      return AC(n, r).map(function (e) {
        return { block: e, position: t };
      });
    },
    PC = function (o, i, e) {
      var t = BC(o, Ss.fromRangeStart(e)),
        n = t.bind(function (e) {
          return al(i, o, e.position).bind(function (e) {
            return BC(o, e).map(function (e) {
              return (
                (t = o),
                (n = i),
                Rn((r = e).position.getNode()) && !1 === dd(r.block)
                  ? cl(!1, r.block.dom())
                      .bind(function (e) {
                        return e.isEqual(r.position)
                          ? al(n, t, e).bind(function (e) {
                              return BC(t, e);
                            })
                          : B.some(r);
                      })
                      .getOr(r)
                  : r
              );
              var t, n, r;
            });
          });
        });
      return Bu(t, n, OC).filter(function (e) {
        return (
          !1 === Dt((r = e).from.block, r.to.block) &&
          Mt((n = e).from.block)
            .bind(function (t) {
              return Mt(n.to.block).filter(function (e) {
                return Dt(t, e);
              });
            })
            .isSome() &&
          !1 === Dn((t = e).from.block.dom()) &&
          !1 === Dn(t.to.block.dom())
        );
        var t, n, r;
      });
    },
    LC = function (e) {
      var t,
        n =
          ((t = Ht(e)),
          X(t, Kn).fold(
            function () {
              return t;
            },
            function (e) {
              return t.slice(0, e);
            }
          ));
      return z(n, nn), n;
    },
    IC = function (e, t) {
      var n = yd(t, e);
      return K(n.reverse(), function (e) {
        return dd(e);
      }).each(nn);
    },
    MC = function (e, t, n, r) {
      if (dd(n)) return pd(n), dl(n.dom());
      0 ===
        H(zt(r), function (e) {
          return !dd(e);
        }).length &&
        dd(t) &&
        Gt(r, Ct.fromTag("br"));
      var o = fl(n.dom(), Ss.before(r.dom()));
      return (
        z(LC(t), function (e) {
          Gt(r, e);
        }),
        IC(e, t),
        o
      );
    },
    FC = function (e, t, n) {
      if (dd(n)) return nn(n), dd(t) && pd(t), dl(t.dom());
      var r = ml(n.dom());
      return (
        z(LC(t), function (e) {
          Zt(n, e);
        }),
        IC(e, t),
        r
      );
    },
    UC = function (e, t) {
      return Bt(t, e) ? ((n = yd(e, t)), B.from(n[n.length - 1])) : B.none();
      var n;
    },
    zC = function (e, t) {
      cl(e, t.dom())
        .map(function (e) {
          return e.getNode();
        })
        .map(Ct.fromDom)
        .filter(Yn)
        .each(nn);
    },
    jC = function (e, t, n) {
      return (
        zC(!0, t), zC(!1, n), UC(t, n).fold(N(FC, e, t, n), N(MC, e, t, n))
      );
    },
    HC = function (e, t, n, r) {
      return t ? jC(e, r, n) : jC(e, n, r);
    },
    VC = function (t, n) {
      var e,
        r,
        o,
        i = Ct.fromDom(t.getBody()),
        a =
          ((e = i.dom()),
          (r = n),
          ((o = t.selection.getRng()).collapsed ? PC(e, r, o) : B.none()).bind(
            function (e) {
              return HC(i, n, e.from.block, e.to.block);
            }
          ));
      return (
        a.each(function (e) {
          t.selection.setRng(e.toRange());
        }),
        a.isSome()
      );
    },
    qC = function (e, t) {
      var n = Ct.fromDom(t),
        r = N(Dt, e);
      return Qa(n, tr, r).isSome();
    },
    $C = function (e, t) {
      var n,
        r,
        o = fl(e.dom(), Ss.fromRangeStart(t)).isNone(),
        i = ll(e.dom(), Ss.fromRangeEnd(t)).isNone();
      return (
        !(qC((n = e), (r = t).startContainer) || qC(n, r.endContainer)) &&
        o &&
        i
      );
    },
    WC = function (e) {
      var n,
        r,
        o,
        t,
        i = Ct.fromDom(e.getBody()),
        a = e.selection.getRng();
      return $C(i, a)
        ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0)
        : ((n = i),
          (r = e.selection),
          (o = r.getRng()),
          Bu(
            AC(n, Ct.fromDom(o.startContainer)),
            AC(n, Ct.fromDom(o.endContainer)),
            function (e, t) {
              return (
                !1 === Dt(e, t) &&
                (o.deleteContents(),
                HC(n, !0, e, t).each(function (e) {
                  r.setRng(e.toRange());
                }),
                !0)
              );
            }
          ).getOr(!1));
    },
    KC = function (e, t) {
      return !e.selection.isCollapsed() && WC(e);
    },
    XC = function (e) {
      return jc(e).exists(Yn);
    },
    YC = function (e, t, n) {
      var r = H(yd(Ct.fromDom(n.container()), t), Kn),
        o = Z(r).getOr(t);
      return al(e, o.dom(), n).filter(XC);
    },
    GC = function (e, t) {
      return jc(t).exists(Yn) || YC(!0, e, t).isSome();
    },
    JC = function (e, t) {
      return (
        (n = t),
        B.from(n.getNode(!0)).map(Ct.fromDom).exists(Yn) ||
          YC(!1, e, t).isSome()
      );
      var n;
    },
    QC = N(YC, !1),
    ZC = N(YC, !0),
    ew = Qi([
      { remove: ["element"] },
      { moveToElement: ["element"] },
      { moveToPosition: ["position"] },
    ]),
    tw = function (e, t, n, r) {
      var o = r.getNode(!1 === t);
      return AC(Ct.fromDom(e), Ct.fromDom(n.getNode()))
        .map(function (e) {
          return dd(e) ? ew.remove(e.dom()) : ew.moveToElement(o);
        })
        .orThunk(function () {
          return B.some(ew.moveToElement(o));
        });
    },
    nw = function (u, s, c) {
      return al(s, u, c).bind(function (e) {
        return (
          (a = e.getNode()),
          tr(Ct.fromDom(a)) || Qn(Ct.fromDom(a))
            ? B.none()
            : ((t = u),
              (o = e),
              (i = function (e) {
                return Xn(Ct.fromDom(e)) && !Oc(r, o, t);
              }),
              Uc(!(n = s), (r = c)).fold(function () {
                return Uc(n, o).fold(x(!1), i);
              }, i)
                ? B.none()
                : (s && Dn(e.getNode())) || (!1 === s && Dn(e.getNode(!0)))
                ? tw(u, s, c, e)
                : (s && ad(c)) || (!1 === s && id(c))
                ? B.some(ew.moveToPosition(e))
                : B.none())
        );
        var t, n, r, o, i, a;
      });
    },
    rw = function (r, e, o) {
      return (
        (i = e),
        (a = o.getNode(!1 === i)),
        (u = i ? "after" : "before"),
        vn(a) && a.getAttribute("data-mce-caret") === u
          ? ((t = e),
            (n = o.getNode(!1 === e)),
            (t && Dn(n.nextSibling)
              ? B.some(ew.moveToElement(n.nextSibling))
              : !1 === t && Dn(n.previousSibling)
              ? B.some(ew.moveToElement(n.previousSibling))
              : B.none()
            ).fold(function () {
              return nw(r, e, o);
            }, B.some))
          : nw(r, e, o).bind(function (e) {
              return (
                (t = r),
                (n = o),
                e.fold(
                  function (e) {
                    return B.some(ew.remove(e));
                  },
                  function (e) {
                    return B.some(ew.moveToElement(e));
                  },
                  function (e) {
                    return Oc(n, e, t)
                      ? B.none()
                      : B.some(ew.moveToPosition(e));
                  }
                )
              );
              var t, n;
            })
      );
      var t, n, i, a, u;
    },
    ow = function (e, t) {
      return B.from(uw(e.getBody(), t));
    },
    iw = function (a, u) {
      var e = a.selection.getNode();
      return ow(a, e)
        .filter(Dn)
        .fold(
          function () {
            var e, t, n, r, o, i;
            return ((e = a.getBody()),
            (t = u),
            (n = a.selection.getRng()),
            (r = Fc(t ? 1 : -1, e, n)),
            (o = Ss.fromRangeStart(r)),
            (i = Ct.fromDom(e)),
            (!1 === t && ad(o)
              ? B.some(ew.remove(o.getNode(!0)))
              : t && id(o)
              ? B.some(ew.remove(o.getNode()))
              : !1 === t && id(o) && JC(i, o)
              ? QC(i, o).map(function (e) {
                  return ew.remove(e.getNode());
                })
              : t && ad(o) && GC(i, o)
              ? ZC(i, o).map(function (e) {
                  return ew.remove(e.getNode());
                })
              : rw(e, t, o)
            ).map(function (e) {
              return e.fold(
                function (e) {
                  return (
                    o._selectionOverrides.hideFakeCaret(),
                    Dd(o, i, Ct.fromDom(e)),
                    !0
                  );
                },
                ((r = i = u),
                function (e) {
                  var t = r ? Ss.before(e) : Ss.after(e);
                  return n.selection.setRng(t.toRange()), !0;
                }),
                ((t = n = o = a),
                function (e) {
                  return t.selection.setRng(e.toRange()), !0;
                })
              );
              var t, n, r, o, i;
            })).getOr(!1);
          },
          function () {
            return !0;
          }
        );
    },
    aw = function (t, n) {
      var e = t.selection.getNode();
      return (
        !!Dn(e) &&
        ow(t, e.parentNode)
          .filter(Dn)
          .fold(
            function () {
              var e;
              return (
                (e = Ct.fromDom(t.getBody())),
                z(Ya(e, ".mce-offscreen-selection"), nn),
                Dd(t, n, Ct.fromDom(t.selection.getNode())),
                DC(t),
                !0
              );
            },
            function () {
              return !0;
            }
          )
      );
    },
    uw = function (e, t) {
      for (; t && t !== e; ) {
        if (An(t) || Dn(t)) return t;
        t = t.parentNode;
      }
      return null;
    },
    sw = function (e) {
      var t,
        n = uw(e.getBody(), e.selection.getNode());
      return (
        An(n) &&
          e.dom.isBlock(n) &&
          e.dom.isEmpty(n) &&
          ((t = e.dom.create("br", { "data-mce-bogus": "1" })),
          e.dom.setHTML(n, ""),
          n.appendChild(t),
          e.selection.setRng(Ss.before(t).toRange())),
        !0
      );
    },
    cw = function (e, t) {
      return (e.selection.isCollapsed() ? iw : aw)(e, t);
    },
    lw = function (e, t, n, r, o, i) {
      var a,
        u,
        s = $b(r, e, i.getNode(!o), o, !0);
      if (t.collapsed) {
        var c = t.cloneRange();
        o
          ? c.setEnd(s.startContainer, s.startOffset)
          : c.setStart(s.endContainer, s.endOffset),
          c.deleteContents();
      } else t.deleteContents();
      return (
        e.selection.setRng(s),
        (a = e.dom),
        En((u = n)) && 0 === u.data.length && a.remove(u),
        !0
      );
    },
    fw = function (e, t) {
      return (function (e, t) {
        var n = e.selection.getRng();
        if (!En(n.commonAncestorContainer)) return !1;
        var r = t ? ws.Forwards : ws.Backwards,
          o = tl(e.getBody()),
          i = N(Hc, o.next),
          a = N(Hc, o.prev),
          u = t ? i : a,
          s = t ? id : ad,
          c = zc(r, e.getBody(), n),
          l = Uy(t, u(c));
        if (!l || !Vc(c, l)) return !1;
        if (s(l)) return lw(e, n, c.getNode(), r, t, l);
        var f = u(l);
        return !!(f && s(f) && Vc(l, f)) && lw(e, n, c.getNode(), r, t, f);
      })(e, t);
    },
    dw = function (t, n) {
      return function (e) {
        return Py(n, e)
          .map(function (e) {
            return ub(t, e), !0;
          })
          .getOr(!1);
      };
    },
    mw = function (r, o, i, a) {
      var u = r.getBody(),
        s = N(Iy, r);
      r.undoManager.ignore(function () {
        var e, t, n;
        r.selection.setRng(
          ((e = i),
          (t = a),
          (n = V.document.createRange()).setStart(e.container(), e.offset()),
          n.setEnd(t.container(), t.offset()),
          n)
        ),
          r.execCommand("Delete"),
          Qy(s, u, Ss.fromRangeStart(r.selection.getRng()))
            .map(nb)
            .map(dw(r, o));
      }),
        r.nodeChanged();
    },
    pw = function (n, r, i, o) {
      var e,
        t,
        a = ((e = n.getBody()), (t = o.container()), Dc(t, e) || e),
        u = N(Iy, n),
        s = Qy(u, a, o);
      return s
        .bind(function (e) {
          return i
            ? e.fold(x(B.some(nb(e))), B.none, x(B.some(tb(e))), B.none)
            : e.fold(B.none, x(B.some(tb(e))), B.none, x(B.some(nb(e))));
        })
        .map(dw(n, r))
        .getOrThunk(function () {
          var t = ul(i, a, o),
            e = t.bind(function (e) {
              return Qy(u, a, e);
            });
          return s.isSome() && e.isSome()
            ? Fy(u, a, o)
                .map(function (e) {
                  return (
                    !!Bu(dl((o = e)), ml(o), function (e, t) {
                      var n = Uy(!0, e),
                        r = Uy(!1, t);
                      return ll(o, n)
                        .map(function (e) {
                          return e.isEqual(r);
                        })
                        .getOr(!0);
                    }).getOr(!0) && (Dd(n, i, Ct.fromDom(e)), !0)
                  );
                  var o;
                })
                .getOr(!1)
            : e
                .bind(function (e) {
                  return t.map(function (e) {
                    return i ? mw(n, r, o, e) : mw(n, r, e, o), !0;
                  });
                })
                .getOr(!1);
        });
    },
    gw = function (e, t, n) {
      if (e.selection.isCollapsed() && ic(e)) {
        var r = Ss.fromRangeStart(e.selection.getRng());
        return pw(e, t, n, r);
      }
      return !1;
    },
    hw = function (e) {
      return 1 === Ht(e).length;
    },
    vw = function (e, t, n, r) {
      var o,
        i,
        a,
        u,
        s = N(kp, t),
        c = U(H(r, s), function (e) {
          return e.dom();
        });
      if (0 === c.length) Dd(t, e, n);
      else {
        var l =
          ((o = n.dom()),
          (i = c),
          (a = bp(!1)),
          (u = Sp(i, a.dom())),
          Gt(Ct.fromDom(o), a),
          nn(Ct.fromDom(o)),
          Ss(u, 0));
        t.selection.setRng(l.toRange());
      }
    },
    yw = function (r, o) {
      var t,
        e = Ct.fromDom(r.getBody()),
        n = Ct.fromDom(r.selection.getStart()),
        s = H(
          ((t = yd(n, e)),
          X(t, Kn).fold(x(t), function (e) {
            return t.slice(0, e);
          })),
          hw
        );
      return ee(s)
        .map(function (e) {
          var t,
            i,
            a,
            u,
            n = Ss.fromRangeStart(r.selection.getRng());
          return (
            (i = o),
            (a = n),
            (u = e.dom()),
            !(
              !Bu(dl(u), ml(u), function (e, t) {
                var n = Uy(!0, e),
                  r = Uy(!1, t),
                  o = Uy(!1, a);
                return i
                  ? ll(u, o)
                      .map(function (e) {
                        return e.isEqual(r) && a.isEqual(n);
                      })
                      .getOr(!1)
                  : fl(u, o)
                      .map(function (e) {
                        return e.isEqual(n) && a.isEqual(r);
                      })
                      .getOr(!1);
              }).getOr(!0) ||
              (gl((t = e).dom()) && vp(t.dom()))
            ) && (vw(o, r, e, s), !0)
          );
        })
        .getOr(!1);
    },
    bw = function (e, t) {
      return !!e.selection.isCollapsed() && yw(e, t);
    },
    Cw = function (e, t) {
      return (
        !!e.selection.isCollapsed() &&
        ((n = e),
        (r = t),
        (o = Ss.fromRangeStart(n.selection.getRng())),
        al(r, n.getBody(), o)
          .filter(function (e) {
            return (r ? td : nd)(e);
          })
          .bind(function (e) {
            return B.from(Bc(r ? 0 : -1, e));
          })
          .map(function (e) {
            return n.selection.select(e), !0;
          })
          .getOr(!1))
      );
      var n, r, o;
    },
    ww = function (e) {
      var t = parseInt(e, 10);
      return isNaN(t) ? 0 : t;
    },
    xw = function (e, t) {
      return (
        (e || "table" === wt(t) ? "margin" : "padding") +
        ("rtl" === Fn(t, "direction") ? "-right" : "-left")
      );
    },
    Sw = function (e) {
      var r,
        t = Ew(e);
      return (
        !e.mode.isReadOnly() &&
        (1 < t.length ||
          ((r = e),
          G(t, function (e) {
            var t = xw(tc(r), e),
              n = zn(e, t).map(ww).getOr(0);
            return "false" !== r.dom.getContentEditable(e.dom()) && 0 < n;
          })))
      );
    },
    Nw = function (e) {
      return Jn(e) || Qn(e);
    },
    Ew = function (e) {
      return H(U(e.selection.getSelectedBlocks(), Ct.fromDom), function (e) {
        return (
          !Nw(e) &&
          !Mt(e).map(Nw).getOr(!1) &&
          Za(e, function (e) {
            return An(e.dom()) || Dn(e.dom());
          }).exists(function (e) {
            return An(e.dom());
          })
        );
      });
    },
    kw = function (e, t) {
      var n = e.dom,
        r = e.selection,
        o = e.formatter,
        i = e.getParam("indentation", "40px", "string"),
        a = /[a-z%]+$/i.exec(i)[0],
        u = parseInt(i, 10),
        s = tc(e),
        c = Ys(e);
      e.queryCommandState("InsertUnorderedList") ||
        e.queryCommandState("InsertOrderedList") ||
        "" !== c ||
        n.getParent(r.getNode(), n.isBlock) ||
        o.apply("div"),
        z(Ew(e), function (e) {
          !(function (e, t, n, r, o, i) {
            var a = xw(n, Ct.fromDom(i));
            if ("outdent" === t) {
              var u = Math.max(0, ww(i.style[a]) - r);
              e.setStyle(i, a, u ? u + o : "");
            } else {
              u = ww(i.style[a]) + r + o;
              e.setStyle(i, a, u);
            }
          })(n, t, s, u, a, e.dom());
        });
    },
    _w = function (e, t, n) {
      return sl(e, t, n, Jf);
    },
    Tw = function (e, t) {
      return K(yd(Ct.fromDom(t.container()), e), Kn);
    },
    Rw = function (e, n, r) {
      return _w(e, n.dom(), r).forall(function (t) {
        return Tw(n, r).fold(
          function () {
            return !1 === Oc(t, r, n.dom());
          },
          function (e) {
            return !1 === Oc(t, r, n.dom()) && Bt(e, Ct.fromDom(t.container()));
          }
        );
      });
    },
    Aw = function (t, n, r) {
      return Tw(n, r).fold(
        function () {
          return _w(t, n.dom(), r).forall(function (e) {
            return !1 === Oc(e, r, n.dom());
          });
        },
        function (e) {
          return _w(t, e.dom(), r).isNone();
        }
      );
    },
    Dw = N(Aw, !1),
    Ow = N(Aw, !0),
    Bw = N(Rw, !1),
    Pw = N(Rw, !0),
    Lw = function (e, t, n) {
      if (e.selection.isCollapsed() && Sw(e)) {
        var r = e.dom,
          o = e.selection.getRng(),
          i = Ss.fromRangeStart(o),
          a = r.getParent(o.startContainer, r.isBlock);
        if (null !== a && Dw(Ct.fromDom(a), i)) return kw(e, "outdent"), !0;
      }
      return !1;
    },
    Iw = function (o, i) {
      o.on("keydown", function (e) {
        var t, n, r;
        !1 === e.isDefaultPrevented() &&
          ((t = o),
          (n = i),
          (r = e),
          TC(
            [
              { keyCode: vv.BACKSPACE, action: _C(Lw, t, !1) },
              { keyCode: vv.BACKSPACE, action: _C(cw, t, !1) },
              { keyCode: vv.DELETE, action: _C(cw, t, !0) },
              { keyCode: vv.BACKSPACE, action: _C(fw, t, !1) },
              { keyCode: vv.DELETE, action: _C(fw, t, !0) },
              { keyCode: vv.BACKSPACE, action: _C(gw, t, n, !1) },
              { keyCode: vv.DELETE, action: _C(gw, t, n, !0) },
              { keyCode: vv.BACKSPACE, action: _C(om, t, !1) },
              { keyCode: vv.DELETE, action: _C(om, t, !0) },
              { keyCode: vv.BACKSPACE, action: _C(Cw, t, !1) },
              { keyCode: vv.DELETE, action: _C(Cw, t, !0) },
              { keyCode: vv.BACKSPACE, action: _C(KC, t, !1) },
              { keyCode: vv.DELETE, action: _C(KC, t, !0) },
              { keyCode: vv.BACKSPACE, action: _C(VC, t, !1) },
              { keyCode: vv.DELETE, action: _C(VC, t, !0) },
              { keyCode: vv.BACKSPACE, action: _C(bw, t, !1) },
              { keyCode: vv.DELETE, action: _C(bw, t, !0) },
            ],
            r
          ).each(function (e) {
            r.preventDefault();
          }));
      }),
        o.on("keyup", function (e) {
          var t, n;
          !1 === e.isDefaultPrevented() &&
            ((t = o),
            (n = e),
            TC(
              [
                { keyCode: vv.BACKSPACE, action: _C(sw, t) },
                { keyCode: vv.DELETE, action: _C(sw, t) },
              ],
              n
            ));
        });
    },
    Mw = function (e, t) {
      var n,
        r = t,
        o = e.dom,
        i = e.schema.getMoveCaretBeforeOnEnterElements();
      if (t) {
        if (/^(LI|DT|DD)$/.test(t.nodeName)) {
          var a = (function (e) {
            for (; e; ) {
              if (
                1 === e.nodeType ||
                (3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data))
              )
                return e;
              e = e.nextSibling;
            }
          })(t.firstChild);
          a &&
            /^(UL|OL|DL)$/.test(a.nodeName) &&
            t.insertBefore(o.doc.createTextNode(Dr), t.firstChild);
        }
        var u = o.createRng();
        if ((t.normalize(), t.hasChildNodes())) {
          for (var s = new Ai(t, t); (n = s.current()); ) {
            if (En(n)) {
              u.setStart(n, 0), u.setEnd(n, 0);
              break;
            }
            if (i[n.nodeName.toLowerCase()]) {
              u.setStartBefore(n), u.setEndBefore(n);
              break;
            }
            (r = n), (n = s.next());
          }
          n || (u.setStart(r, 0), u.setEnd(r, 0));
        } else
          Rn(t)
            ? t.nextSibling && o.isBlock(t.nextSibling)
              ? (u.setStartBefore(t), u.setEndBefore(t))
              : (u.setStartAfter(t), u.setEndAfter(t))
            : (u.setStart(t, 0), u.setEnd(t, 0));
        e.selection.setRng(u), Yh(e, u);
      }
    },
    Fw = function (e) {
      return B.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock));
    },
    Uw = function (e, t) {
      return e && e.parentNode && e.parentNode.nodeName === t;
    },
    zw = function (e) {
      return e && /^(OL|UL|LI)$/.test(e.nodeName);
    },
    jw = function (e) {
      var t = e.parentNode;
      return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
    },
    Hw = function (e, t, n) {
      for (var r = e[n ? "firstChild" : "lastChild"]; r && !vn(r); )
        r = r[n ? "nextSibling" : "previousSibling"];
      return r === t;
    },
    Vw = function (e, t, n, r, o) {
      var i = e.dom,
        a = e.selection.getRng();
      if (n !== e.getBody()) {
        var u;
        zw((u = n)) && zw(u.parentNode) && (o = "LI");
        var s,
          c,
          l = o ? t(o) : i.create("BR");
        if (Hw(n, r, !0) && Hw(n, r, !1))
          Uw(n, "LI") ? i.insertAfter(l, jw(n)) : i.replace(l, n);
        else if (Hw(n, r, !0))
          Uw(n, "LI")
            ? (i.insertAfter(l, jw(n)),
              l.appendChild(i.doc.createTextNode(" ")),
              l.appendChild(n))
            : n.parentNode.insertBefore(l, n);
        else if (Hw(n, r, !1)) i.insertAfter(l, jw(n));
        else {
          n = jw(n);
          var f = a.cloneRange();
          f.setStartAfter(r), f.setEndAfter(n);
          var d = f.extractContents();
          "LI" === o &&
          ((c = "LI"), (s = d).firstChild && s.firstChild.nodeName === c)
            ? ((l = d.firstChild), i.insertAfter(d, n))
            : (i.insertAfter(d, n), i.insertAfter(l, n));
        }
        i.remove(r), Mw(e, l);
      }
    },
    qw = function (e) {
      e.innerHTML = '<br data-mce-bogus="1">';
    },
    $w = function (e, t) {
      return (
        e.nodeName === t ||
        (e.previousSibling && e.previousSibling.nodeName === t)
      );
    },
    Ww = function (e, t) {
      return (
        t &&
        e.isBlock(t) &&
        !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) &&
        !/^(fixed|absolute)/i.test(t.style.position) &&
        "true" !== e.getContentEditable(t)
      );
    },
    Kw = function (e, t, n) {
      return !1 === En(t)
        ? n
        : e
        ? 1 === n && t.data.charAt(n - 1) === yu
          ? 0
          : n
        : n === t.data.length - 1 && t.data.charAt(n) === yu
        ? t.data.length
        : n;
    },
    Xw = function (e, t) {
      var n,
        r,
        o = e.getRoot();
      for (n = t; n !== o && "false" !== e.getContentEditable(n); )
        "true" === e.getContentEditable(n) && (r = n), (n = n.parentNode);
      return n !== o ? r : o;
    },
    Yw = function (o, i, e) {
      B.from(e.style)
        .map(o.dom.parseStyle)
        .each(function (e) {
          var t = (function (e) {
              var t = {},
                n = e.dom();
              if (On(n))
                for (var r = 0; r < n.style.length; r++) {
                  var o = n.style.item(r);
                  t[o] = n.style[o];
                }
              return t;
            })(Ct.fromDom(i)),
            n = xe(xe({}, t), e);
          o.dom.setStyles(i, n);
        });
      var t = B.from(e["class"]).map(function (e) {
          return e.split(/\s+/);
        }),
        n = B.from(i.className).map(function (e) {
          return H(e.split(/\s+/), function (e) {
            return "" !== e;
          });
        });
      Bu(t, n, function (t, e) {
        var n = H(e, function (e) {
            return !M(t, e);
          }),
          r = Se(t, n);
        o.dom.setAttrib(i, "class", r.join(" "));
      });
      var r = ["style", "class"],
        a = le(e, function (e, t) {
          return !M(r, t);
        });
      o.dom.setAttribs(i, a);
    },
    Gw = function (e, t) {
      var n = Ys(e);
      if (n && n.toLowerCase() === t.tagName.toLowerCase()) {
        var r = Gs(e);
        Yw(e, t, r);
      }
    },
    Jw = function (a, e) {
      var t,
        u,
        i,
        s,
        n,
        r,
        o,
        c,
        l,
        f,
        d = a.dom,
        m = a.schema,
        p = m.getNonEmptyElements(),
        g = a.selection.getRng(),
        h = function (e) {
          var t,
            n,
            r,
            o = u,
            i = m.getTextInlineElements();
          if (
            ((r = t =
              e || "TABLE" === c || "HR" === c
                ? d.create(e || l)
                : s.cloneNode(!1)),
            !1 === a.getParam("keep_styles", !0))
          )
            d.setAttrib(t, "style", null), d.setAttrib(t, "class", null);
          else
            do {
              if (i[o.nodeName]) {
                if (gl(o) || kl(o)) continue;
                (n = o.cloneNode(!1)),
                  d.setAttrib(n, "id", ""),
                  t.hasChildNodes() ? n.appendChild(t.firstChild) : (r = n),
                  t.appendChild(n);
              }
            } while ((o = o.parentNode) && o !== w);
          return Gw(a, t), qw(r), t;
        },
        v = function (e) {
          var t,
            n,
            r = Kw(e, u, i);
          if (En(u) && (e ? 0 < r : r < u.nodeValue.length)) return !1;
          if (u.parentNode === s && f && !e) return !0;
          if (e && vn(u) && u === s.firstChild) return !0;
          if ($w(u, "TABLE") || $w(u, "HR")) return (f && !e) || (!f && e);
          var o = new Ai(u, s);
          for (
            En(u) &&
            (e && 0 === r
              ? o.prev()
              : e || r !== u.nodeValue.length || o.next());
            (t = o.current());

          ) {
            if (vn(t)) {
              if (
                !t.getAttribute("data-mce-bogus") &&
                ((n = t.nodeName.toLowerCase()), p[n] && "br" !== n)
              )
                return !1;
            } else if (En(t) && !/^[ \t\r\n]*$/.test(t.nodeValue)) return !1;
            e ? o.prev() : o.next();
          }
          return !0;
        },
        y = function () {
          (n = /^(H[1-6]|PRE|FIGURE)$/.test(c) && "HGROUP" !== E ? h(l) : h()),
            a.getParam("end_container_on_empty_block", !1) &&
            Ww(d, o) &&
            d.isEmpty(s)
              ? (n = d.split(o, s))
              : d.insertAfter(n, s),
            Mw(a, n);
        };
      lv(d, g).each(function (e) {
        g.setStart(e.startContainer, e.startOffset),
          g.setEnd(e.endContainer, e.endOffset);
      }),
        (u = g.startContainer),
        (i = g.startOffset),
        (l = Ys(a));
      var b = !(!e || !e.shiftKey),
        C = !(!e || !e.ctrlKey);
      vn(u) &&
        u.hasChildNodes() &&
        ((f = i > u.childNodes.length - 1),
        (u = u.childNodes[Math.min(i, u.childNodes.length - 1)] || u),
        (i = f && En(u) ? u.nodeValue.length : 0));
      var w = Xw(d, u);
      if (w) {
        ((l && !b) || (!l && b)) &&
          (u = (function (e, t, n, r, o) {
            var i,
              a,
              u,
              s,
              c,
              l,
              f,
              d = t || "P",
              m = e.dom,
              p = Xw(m, r);
            if (!(a = m.getParent(r, m.isBlock)) || !Ww(m, a)) {
              if (
                ((l =
                  (a = a || p) === e.getBody() ||
                  ((f = a) && /^(TD|TH|CAPTION)$/.test(f.nodeName))
                    ? a.nodeName.toLowerCase()
                    : a.parentNode.nodeName.toLowerCase()),
                !a.hasChildNodes())
              )
                return (
                  (i = m.create(d)),
                  Gw(e, i),
                  a.appendChild(i),
                  n.setStart(i, 0),
                  n.setEnd(i, 0),
                  i
                );
              for (s = r; s.parentNode !== a; ) s = s.parentNode;
              for (; s && !m.isBlock(s); ) s = (u = s).previousSibling;
              if (u && e.schema.isValidChild(l, d.toLowerCase())) {
                for (
                  i = m.create(d),
                    Gw(e, i),
                    u.parentNode.insertBefore(i, u),
                    s = u;
                  s && !m.isBlock(s);

                )
                  (c = s.nextSibling), i.appendChild(s), (s = c);
                n.setStart(r, o), n.setEnd(r, o);
              }
            }
            return r;
          })(a, l, g, u, i)),
          (s = d.getParent(u, d.isBlock)),
          (o = s ? d.getParent(s.parentNode, d.isBlock) : null),
          (c = s ? s.nodeName.toUpperCase() : "");
        var x,
          S,
          N,
          E = o ? o.nodeName.toUpperCase() : "";
        if (
          ("LI" !== E || C || ((o = (s = o).parentNode), (c = E)),
          /^(LI|DT|DD)$/.test(c) && d.isEmpty(s))
        )
          Vw(a, h, o, s, l);
        else if (!l || s !== a.getBody())
          (l = l || "P"),
            Su(s)
              ? ((n = Ou(s)), d.isEmpty(s) && qw(s), Gw(a, n), Mw(a, n))
              : v()
              ? y()
              : v(!0)
              ? ((n = s.parentNode.insertBefore(h(), s)),
                Mw(a, $w(s, "HR") ? n : s))
              : ((N = (S = g).cloneRange()).setStart(
                  S.startContainer,
                  Kw(!0, S.startContainer, S.startOffset)
                ),
                N.setEnd(S.endContainer, Kw(!1, S.endContainer, S.endOffset)),
                (t = N.cloneRange()).setEndAfter(s),
                (r = t.extractContents()),
                (x = r),
                z(Xa(Ct.fromDom(x), Et), function (e) {
                  var t = e.dom();
                  t.nodeValue = Cu(t.nodeValue);
                }),
                (function (e) {
                  for (
                    ;
                    En(e) &&
                      (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")),
                      (e = e.firstChild);

                  );
                })(r),
                (n = r.firstChild),
                d.insertAfter(r, s),
                (function (e, t, n) {
                  var r,
                    o = n,
                    i = [];
                  if (o) {
                    for (; (o = o.firstChild); ) {
                      if (e.isBlock(o)) return;
                      vn(o) && !t[o.nodeName.toLowerCase()] && i.push(o);
                    }
                    for (r = i.length; r--; )
                      !(o = i[r]).hasChildNodes() ||
                      (o.firstChild === o.lastChild &&
                        "" === o.firstChild.nodeValue)
                        ? e.remove(o)
                        : ((a = e),
                          (u = o) &&
                            "A" === u.nodeName &&
                            a.isEmpty(u) &&
                            e.remove(o));
                    var a, u;
                  }
                })(d, p, n),
                (function (e, t) {
                  t.normalize();
                  var n = t.lastChild;
                  (n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0))) ||
                    e.add(t, "br");
                })(d, s),
                d.isEmpty(s) && qw(s),
                n.normalize(),
                d.isEmpty(n) ? (d.remove(n), y()) : (Gw(a, n), Mw(a, n))),
            d.setAttrib(n, "id", ""),
            a.fire("NewBlock", { newBlock: n });
      }
    },
    Qw = function (e, t, n) {
      var r = e.create("span", {}, "&nbsp;");
      n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r);
    },
    Zw = function (e, t, n, r) {
      var o = e.createRng();
      r
        ? (o.setStartBefore(n), o.setEndBefore(n))
        : (o.setStartAfter(n), o.setEndAfter(n)),
        t.setRng(o);
    },
    ex = function (e, t) {
      var n,
        r,
        o = e.selection,
        i = e.dom,
        a = o.getRng();
      lv(i, a).each(function (e) {
        a.setStart(e.startContainer, e.startOffset),
          a.setEnd(e.endContainer, e.endOffset);
      });
      var u = a.startOffset,
        s = a.startContainer;
      if (1 === s.nodeType && s.hasChildNodes()) {
        var c = u > s.childNodes.length - 1;
        (s = s.childNodes[Math.min(u, s.childNodes.length - 1)] || s),
          (u = c && 3 === s.nodeType ? s.nodeValue.length : 0);
      }
      var l = i.getParent(s, i.isBlock),
        f = l ? i.getParent(l.parentNode, i.isBlock) : null,
        d = f ? f.nodeName.toUpperCase() : "",
        m = !(!t || !t.ctrlKey);
      "LI" !== d || m || (l = f),
        s &&
          3 === s.nodeType &&
          u >= s.nodeValue.length &&
          !(function (e, t, n) {
            for (
              var r, o = new Ai(t, n), i = e.getNonEmptyElements();
              (r = o.next());

            )
              if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0;
          })(e.schema, s, l) &&
          ((n = i.create("br")),
          a.insertNode(n),
          a.setStartAfter(n),
          a.setEndAfter(n),
          (r = !0)),
        (n = i.create("br")),
        Es(i, a, n),
        Qw(i, o, n),
        Zw(i, o, n, r),
        e.undoManager.add();
    },
    tx = function (e, t) {
      var n = Ct.fromTag("br");
      Gt(Ct.fromDom(t), n), e.undoManager.add();
    },
    nx = function (e, t) {
      rx(e.getBody(), t) || Jt(Ct.fromDom(t), Ct.fromTag("br"));
      var n = Ct.fromTag("br");
      Jt(Ct.fromDom(t), n),
        Qw(e.dom, e.selection, n.dom()),
        Zw(e.dom, e.selection, n.dom(), !1),
        e.undoManager.add();
    },
    rx = function (e, t) {
      return (
        (n = Ss.after(t)),
        !!Rn(n.getNode()) ||
          ll(e, Ss.after(t))
            .map(function (e) {
              return Rn(e.getNode());
            })
            .getOr(!1)
      );
      var n;
    },
    ox = function (e) {
      return e && "A" === e.nodeName && "href" in e;
    },
    ix = function (e) {
      return e.fold(x(!1), ox, ox, x(!1));
    },
    ax = function (e, t) {
      t.fold(f, N(tx, e), N(nx, e), f);
    },
    ux = function (e, t) {
      var n,
        r,
        o,
        i =
          ((r = N(Iy, (n = e))),
          (o = Ss.fromRangeStart(n.selection.getRng())),
          Qy(r, n.getBody(), o).filter(ix));
      i.isSome() ? i.each(N(ax, e)) : ex(e, t);
    },
    sx = function (e, t) {
      return Fw(e)
        .filter(function (e) {
          return 0 < t.length && Rt(Ct.fromDom(e), t);
        })
        .isSome();
    },
    cx = Qi([{ br: [] }, { block: [] }, { none: [] }]),
    lx = function (e, t) {
      return sx((n = e), n.getParam("no_newline_selector", ""));
      var n;
    },
    fx = function (n) {
      return function (e, t) {
        return ("" === Ys(e)) === n;
      };
    },
    dx = function (n) {
      return function (e, t) {
        return (
          Fw(e)
            .filter(function (e) {
              return Qn(Ct.fromDom(e));
            })
            .isSome() === n
        );
      };
    },
    mx = function (n, r) {
      return function (e, t) {
        return (
          (Fw(e).fold(x(""), function (e) {
            return e.nodeName.toUpperCase();
          }) ===
            n.toUpperCase()) ===
          r
        );
      };
    },
    px = function (e) {
      return mx("pre", e);
    },
    gx = function (n) {
      return function (e, t) {
        return e.getParam("br_in_pre", !0) === n;
      };
    },
    hx = function (e, t) {
      return sx(
        (n = e),
        n.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption")
      );
      var n;
    },
    vx = function (e, t) {
      return t;
    },
    yx = function (e) {
      var t = Ys(e),
        n = (function (e, t) {
          var n,
            r,
            o = e.getRoot();
          for (n = t; n !== o && "false" !== e.getContentEditable(n); )
            "true" === e.getContentEditable(n) && (r = n), (n = n.parentNode);
          return n !== o ? r : o;
        })(e.dom, e.selection.getStart());
      return n && e.schema.isValidChild(n.nodeName, t || "P");
    },
    bx = function (e, t) {
      return function (n, r) {
        return W(
          e,
          function (e, t) {
            return e && t(n, r);
          },
          !0
        )
          ? B.some(t)
          : B.none();
      };
    },
    Cx = function (e, t) {
      return Hy(
        [
          bx([lx], cx.none()),
          bx([mx("summary", !0)], cx.br()),
          bx([px(!0), gx(!1), vx], cx.br()),
          bx([px(!0), gx(!1)], cx.block()),
          bx([px(!0), gx(!0), vx], cx.block()),
          bx([px(!0), gx(!0)], cx.br()),
          bx([dx(!0), vx], cx.br()),
          bx([dx(!0)], cx.block()),
          bx([fx(!0), vx, yx], cx.block()),
          bx([fx(!0)], cx.br()),
          bx([hx], cx.br()),
          bx([fx(!1), vx], cx.br()),
          bx([yx], cx.block()),
        ],
        [e, !(!t || !t.shiftKey)]
      ).getOr(cx.none());
    },
    wx = function (e, t) {
      Cx(e, t).fold(
        function () {
          ux(e, t);
        },
        function () {
          Jw(e, t);
        },
        f
      );
    },
    xx = function (o) {
      o.on("keydown", function (e) {
        var t, n, r;
        e.keyCode === vv.ENTER &&
          ((t = o),
          (n = e).isDefaultPrevented() ||
            (n.preventDefault(),
            (r = t.undoManager).typing && ((r.typing = !1), r.add()),
            t.undoManager.transact(function () {
              !1 === t.selection.isCollapsed() && t.execCommand("Delete"),
                wx(t, n);
            })));
      });
    },
    Sx = function (n, r) {
      var e = r.container(),
        t = r.offset();
      return En(e)
        ? (e.insertData(t, n), B.some(Cs(e, t + n.length)))
        : jc(r).map(function (e) {
            var t = Ct.fromText(n);
            return (r.isAtEnd() ? Jt : Gt)(e, t), Cs(t.dom(), n.length);
          });
    },
    Nx = N(Sx, Dr),
    Ex = N(Sx, " "),
    kx = function (e) {
      return Cs.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
    },
    _x = function (e, t) {
      var n = H(yd(Ct.fromDom(t.container()), e), Kn);
      return Z(n).getOr(e);
    },
    Tx = function (e, t) {
      return kx(t) ? Gf(t) : Gf(t) || fl(_x(e, t).dom(), t).exists(Gf);
    },
    Rx = function (e, t) {
      return kx(t) ? Yf(t) : Yf(t) || ll(_x(e, t).dom(), t).exists(Yf);
    },
    Ax = function (e) {
      return jc(e)
        .bind(function (e) {
          return Za(e, Nt);
        })
        .exists(function (e) {
          return (t = Fn(e, "white-space")), M(["pre", "pre-wrap"], t);
          var t;
        });
    },
    Dx = function (e, t) {
      return (
        (r = t),
        fl(e.dom(), r).isNone() ||
          ((n = t), ll(e.dom(), n).isNone()) ||
          Dw(e, t) ||
          Ow(e, t) ||
          JC(e, t) ||
          GC(e, t)
      );
      var n, r;
    },
    Ox = function (e, t) {
      var n,
        r,
        o,
        i =
          ((r = (n = t).container()),
          (o = n.offset()),
          En(r) && o < r.data.length ? Cs(r, o + 1) : n);
      return !Ax(i) && (Ow(e, i) || Pw(e, i) || GC(e, i) || Rx(e, i));
    },
    Bx = function (e, t) {
      return (
        (n = e),
        (!Ax((r = t)) && (Dw(n, r) || Bw(n, r) || JC(n, r) || Tx(n, r))) ||
          Ox(e, t)
      );
      var n, r;
    },
    Px = function (e, t) {
      return _l(e.charAt(t));
    },
    Lx = function (e) {
      var t = e.container();
      return En(t) && qe(t.data, Dr);
    },
    Ix = function (e) {
      var n,
        t = e.data,
        r =
          ((n = t.split("")),
          U(n, function (e, t) {
            return _l(e) &&
              0 < t &&
              t < n.length - 1 &&
              Rl(n[t - 1]) &&
              Rl(n[t + 1])
              ? " "
              : e;
          }).join(""));
      return r !== t && ((e.data = r), !0);
    },
    Mx = function (l, e) {
      return B.some(e)
        .filter(Lx)
        .bind(function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            u,
            s,
            c = e.container();
          return ((i = l),
          (u = (a = c).data),
          (s = Cs(a, 0)),
          !(!Px(u, 0) || Bx(i, s) || ((a.data = " " + u.slice(1)), 0)) ||
            Ix(c) ||
            ((t = l),
            (r = (n = c).data),
            (o = Cs(n, r.length - 1)),
            !(
              !Px(r, r.length - 1) ||
              Bx(t, o) ||
              ((n.data = r.slice(0, -1) + " "), 0)
            )))
            ? B.some(e)
            : B.none();
        });
    },
    Fx = function (t) {
      var e = Ct.fromDom(t.getBody());
      t.selection.isCollapsed() &&
        Mx(e, Cs.fromRangeStart(t.selection.getRng())).each(function (e) {
          t.selection.setRng(e.toRange());
        });
    },
    Ux = function (r, o) {
      return function (e) {
        return (
          (t = r),
          (!Ax((n = e)) && (Dx(t, n) || Tx(t, n) || Rx(t, n)) ? Nx : Ex)(o)
        );
        var t, n;
      };
    },
    zx = function (e) {
      var t,
        n,
        r = Ss.fromRangeStart(e.selection.getRng()),
        o = Ct.fromDom(e.getBody());
      if (e.selection.isCollapsed()) {
        var i = N(Iy, e),
          a = Ss.fromRangeStart(e.selection.getRng());
        return Qy(i, e.getBody(), a)
          .bind(
            ((n = o),
            function (e) {
              return e.fold(
                function (e) {
                  return fl(n.dom(), Ss.before(e));
                },
                function (e) {
                  return dl(e);
                },
                function (e) {
                  return ml(e);
                },
                function (e) {
                  return ll(n.dom(), Ss.after(e));
                }
              );
            })
          )
          .bind(Ux(o, r))
          .exists(
            ((t = e),
            function (e) {
              return t.selection.setRng(e.toRange()), t.nodeChanged(), !0;
            })
          );
      }
      return !1;
    },
    jx = function (r) {
      r.on("keydown", function (e) {
        var t, n;
        !1 === e.isDefaultPrevented() &&
          ((t = r),
          (n = e),
          TC([{ keyCode: vv.SPACEBAR, action: _C(zx, t) }], n).each(function (
            e
          ) {
            n.preventDefault();
          }));
      });
    },
    Hx = function (e, t) {
      var n;
      t.hasAttribute("data-mce-caret") &&
        (Ou(t),
        (n = e).selection.setRng(n.selection.getRng()),
        e.selection.scrollIntoView(t));
    },
    Vx = function (e, t) {
      var n,
        r =
          ((n = e),
          tu(Ct.fromDom(n.getBody()), "*[data-mce-caret]").fold(
            x(null),
            function (e) {
              return e.dom();
            }
          ));
      if (r)
        return "compositionstart" === t.type
          ? (t.preventDefault(), t.stopPropagation(), void Hx(e, r))
          : void (ku(r) && (Hx(e, r), e.undoManager.add()));
    },
    qx = ot().browser,
    $x = function (t) {
      var e, n;
      (e = t),
        (n = Ua(function () {
          e.composing || Fx(e);
        }, 0)),
        qx.isIE() &&
          (e.on("keypress", function (e) {
            n.throttle();
          }),
          e.on("remove", function (e) {
            n.cancel();
          })),
        t.on("input", function (e) {
          !1 === e.isComposing && Fx(t);
        });
    },
    Wx = function (r) {
      r.on("keydown", function (e) {
        var t, n;
        !1 === e.isDefaultPrevented() &&
          ((t = r),
          (n = e),
          TC(
            [
              { keyCode: vv.END, action: nC(t, !0) },
              { keyCode: vv.HOME, action: nC(t, !1) },
            ],
            n
          ).each(function (e) {
            n.preventDefault();
          }));
      });
    },
    Kx = function (e) {
      var t,
        n = mb(e);
      (t = e).on("keyup compositionstart", N(Vx, t)),
        RC(e, n),
        Iw(e, n),
        xx(e),
        jx(e),
        $x(e),
        Wx(e);
    },
    Xx =
      ((Yx.prototype.nodeChanged = function (e) {
        var t,
          n,
          r,
          o = this.editor.selection;
        this.editor.initialized &&
          o &&
          !this.editor.getParam("disable_nodechange") &&
          !this.editor.mode.isReadOnly() &&
          ((r = this.editor.getBody()),
          ((t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() &&
            this.editor.dom.isChildOf(t, r)) ||
            (t = r),
          (n = []),
          this.editor.dom.getParent(t, function (e) {
            if (e === r) return !0;
            n.push(e);
          }),
          ((e = e || {}).element = t),
          (e.parents = n),
          this.editor.fire("NodeChange", e));
      }),
      (Yx.prototype.isSameElementPath = function (e) {
        var t,
          n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e);
        if (n.length === this.lastPath.length) {
          for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--);
          if (-1 === t) return (this.lastPath = n), !0;
        }
        return (this.lastPath = n), !1;
      }),
      Yx);
  function Yx(r) {
    var o;
    (this.lastPath = []), (this.editor = r);
    var t = this;
    "onselectionchange" in r.getDoc() ||
      r.on("NodeChange click mouseup keyup focus", function (e) {
        var t = r.selection.getRng(),
          n = {
            startContainer: t.startContainer,
            startOffset: t.startOffset,
            endContainer: t.endContainer,
            endOffset: t.endOffset,
          };
        ("nodechange" !== e.type && rv(n, o)) || r.fire("SelectionChange"),
          (o = n);
      }),
      r.on("contextmenu", function () {
        r.fire("SelectionChange");
      }),
      r.on("SelectionChange", function () {
        var e = r.selection.getStart(!0);
        !e ||
          (!mt.range && r.selection.isCollapsed()) ||
          (mf(r) &&
            !t.isSameElementPath(e) &&
            r.dom.isChildOf(e, r.getBody()) &&
            r.nodeChanged({ selectionChange: !0 }));
      }),
      r.on("mouseup", function (e) {
        !e.isDefaultPrevented() &&
          mf(r) &&
          ("IMG" === r.selection.getNode().nodeName
            ? fa.setEditorTimeout(r, function () {
                r.nodeChanged();
              })
            : r.nodeChanged());
      });
  }
  var Gx = function (e) {
      var t, n;
      (t = e).on("click", function (e) {
        t.dom.getParent(e.target, "details") && e.preventDefault();
      }),
        (n = e).parser.addNodeFilter("details", function (e) {
          z(e, function (e) {
            e.attr("data-mce-open", e.attr("open")), e.attr("open", "open");
          });
        }),
        n.serializer.addNodeFilter("details", function (e) {
          z(e, function (e) {
            var t = e.attr("data-mce-open");
            e.attr("open", q(t) ? t : null), e.attr("data-mce-open", null);
          });
        });
    },
    Jx = function (e) {
      return vn(e) && Gn(Ct.fromDom(e));
    },
    Qx = function (t) {
      t.on("click", function (e) {
        3 <= e.detail &&
          (function (e) {
            var t = e.selection.getRng(),
              n = Cs.fromRangeStart(t),
              r = Cs.fromRangeEnd(t);
            if (Cs.isElementPosition(n)) {
              var o = n.container();
              Jx(o) &&
                dl(o).each(function (e) {
                  return t.setStart(e.container(), e.offset());
                });
            }
            if (Cs.isElementPosition(r)) {
              o = n.container();
              Jx(o) &&
                ml(o).each(function (e) {
                  return t.setEnd(e.container(), e.offset());
                });
            }
            e.selection.setRng(am(t));
          })(t);
      });
    },
    Zx = function (e) {
      var t = e.getBoundingClientRect(),
        n = e.ownerDocument,
        r = n.documentElement,
        o = n.defaultView;
      return {
        top: t.top + o.pageYOffset - r.clientTop,
        left: t.left + o.pageXOffset - r.clientLeft,
      };
    },
    eS = function (e, t) {
      return (
        (n = (u = e).inline ? Zx(u.getBody()) : { left: 0, top: 0 }),
        (a = (i = e).getBody()),
        (r = i.inline
          ? { left: a.scrollLeft, top: a.scrollTop }
          : { left: 0, top: 0 }),
        {
          pageX:
            (o = (function (e, t) {
              if (t.target.ownerDocument === e.getDoc())
                return { left: t.pageX, top: t.pageY };
              var n,
                r,
                o,
                i,
                a,
                u = Zx(e.getContentAreaContainer()),
                s =
                  ((r = (n = e).getBody()),
                  (o = n.getDoc().documentElement),
                  (i = { left: r.scrollLeft, top: r.scrollTop }),
                  (a = {
                    left: r.scrollLeft || o.scrollLeft,
                    top: r.scrollTop || o.scrollTop,
                  }),
                  n.inline ? i : a);
              return {
                left: t.pageX - u.left + s.left,
                top: t.pageY - u.top + s.top,
              };
            })(e, t)).left -
            n.left +
            r.left,
          pageY: o.top - n.top + r.top,
        }
      );
      var n, r, o, i, a, u;
    },
    tS = Dn,
    nS = An,
    rS = function (e) {
      e && e.parentNode && e.parentNode.removeChild(e);
    },
    oS = function (u, s) {
      return function (e) {
        if (0 === e.button) {
          var t = K(
            s.dom.getParents(e.target),
            (function () {
              for (var n = [], e = 0; e < arguments.length; e++)
                n[e] = arguments[e];
              return function (e) {
                for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
                return !1;
              };
            })(tS, nS)
          ).getOr(null);
          if (((i = s.getBody()), tS((a = t)) && a !== i)) {
            var n = s.dom.getPos(t),
              r = s.getBody(),
              o = s.getDoc().documentElement;
            (u.element = t),
              (u.screenX = e.screenX),
              (u.screenY = e.screenY),
              (u.maxX = (s.inline ? r.scrollWidth : o.offsetWidth) - 2),
              (u.maxY = (s.inline ? r.scrollHeight : o.offsetHeight) - 2),
              (u.relX = e.pageX - n.x),
              (u.relY = e.pageY - n.y),
              (u.width = t.offsetWidth),
              (u.height = t.offsetHeight),
              (u.ghost = (function (e, t, n, r) {
                var o = t.cloneNode(!0);
                e.dom.setStyles(o, { width: n, height: r }),
                  e.dom.setAttrib(o, "data-mce-selected", null);
                var i = e.dom.create("div", {
                  class: "mce-drag-container",
                  "data-mce-bogus": "all",
                  unselectable: "on",
                  contenteditable: "false",
                });
                return (
                  e.dom.setStyles(i, {
                    position: "absolute",
                    opacity: 0.5,
                    overflow: "hidden",
                    border: 0,
                    padding: 0,
                    margin: 0,
                    width: n,
                    height: r,
                  }),
                  e.dom.setStyles(o, { margin: 0, boxSizing: "border-box" }),
                  i.appendChild(o),
                  i
                );
              })(s, t, u.width, u.height));
          }
        }
        var i, a;
      };
    },
    iS = function (g, h) {
      var v = fa.throttle(function (e, t) {
        h._selectionOverrides.hideFakeCaret(), h.selection.placeCaretAt(e, t);
      }, 0);
      return function (e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          u,
          s,
          c,
          l,
          f,
          d,
          m = Math.max(
            Math.abs(e.screenX - g.screenX),
            Math.abs(e.screenY - g.screenY)
          );
        if (g.element && !g.dragging && 10 < m) {
          if (h.fire("dragstart", { target: g.element }).isDefaultPrevented())
            return;
          (g.dragging = !0), h.focus();
        }
        if (g.dragging) {
          var p =
            ((f = g),
            { pageX: (d = eS(h, e)).pageX - f.relX, pageY: d.pageY + 5 });
          (c = g.ghost),
            (l = h.getBody()),
            c.parentNode !== l && l.appendChild(c),
            (t = g.ghost),
            (n = p),
            (r = g.width),
            (o = g.height),
            (i = g.maxX),
            (a = g.maxY),
            (s = u = 0),
            (t.style.left = n.pageX + "px"),
            (t.style.top = n.pageY + "px"),
            n.pageX + r > i && (u = n.pageX + r - i),
            n.pageY + o > a && (s = n.pageY + o - a),
            (t.style.width = r - u + "px"),
            (t.style.height = o - s + "px"),
            v(e.clientX, e.clientY);
        }
      };
    },
    aS = function (l, f) {
      return function (e) {
        if (
          l.dragging &&
          ((s = (i = f).selection),
          (c = s.getSel().getRangeAt(0).startContainer),
          (a = 3 === c.nodeType ? c.parentNode : c),
          (u = l.element),
          a !== u && !i.dom.isChildOf(a, u) && !tS(a))
        ) {
          var t =
              ((r = l.element),
              (o = r.cloneNode(!0)).removeAttribute("data-mce-selected"),
              o),
            n = f.fire("drop", {
              targetClone: t,
              clientX: e.clientX,
              clientY: e.clientY,
            });
          n.isDefaultPrevented() ||
            ((t = n.targetClone),
            f.undoManager.transact(function () {
              rS(l.element),
                f.insertContent(f.dom.getOuterHTML(t)),
                f._selectionOverrides.hideFakeCaret();
            }));
        }
        var r, o, i, a, u, s, c;
        uS(l);
      };
    },
    uS = function (e) {
      (e.dragging = !1), (e.element = null), rS(e.ghost);
    },
    sS = function (e) {
      var t,
        n,
        r = {},
        o = Ea.DOM,
        i = V.document,
        a = oS(r, e),
        u = iS(r, e),
        s = aS(r, e),
        c =
          ((t = r),
          function () {
            t.dragging && n.fire("dragend"), uS(t);
          });
      (n = e).on("mousedown", a),
        e.on("mousemove", u),
        e.on("mouseup", s),
        o.bind(i, "mousemove", u),
        o.bind(i, "mouseup", c),
        e.on("remove", function () {
          o.unbind(i, "mousemove", u), o.unbind(i, "mouseup", c);
        });
    },
    cS = function (e) {
      var n, i, a, u, t;
      sS(e),
        (n = e).on("drop", function (e) {
          var t =
            "undefined" != typeof e.clientX
              ? n.getDoc().elementFromPoint(e.clientX, e.clientY)
              : null;
          (tS(t) || tS(n.dom.getContentEditableParent(t))) &&
            e.preventDefault();
        }),
        e.getParam("block_unsupported_drop", !0, "boolean") &&
          ((a = function (e) {
            if (!e.defaultPrevented) {
              var t = e.dataTransfer;
              t &&
                (M(t.types, "Files") || 0 < t.files.length) &&
                e.preventDefault();
            }
          }),
          (u = function (e) {
            jm(i, e.target) && a(e);
          }),
          (t = function () {
            var t = Ea.DOM,
              n = i.dom,
              r = V.document,
              o = i.inline ? i.getBody() : i.getDoc(),
              e = ["drop", "dragover"];
            z(e, function (e) {
              t.bind(r, e, u), n.bind(o, e, a);
            }),
              i.on("remove", function () {
                z(e, function (e) {
                  t.unbind(r, e, u), n.unbind(o, e, a);
                });
              });
          }),
          (i = e).on("init", function () {
            fa.setEditorTimeout(i, t, 0);
          }));
    },
    lS = An,
    fS = Dn,
    dS = function (e, t) {
      for (var n = e.getBody(); t && t !== n; ) {
        if (lS(t) || fS(t)) return t;
        t = t.parentNode;
      }
      return null;
    },
    mS = function (g) {
      var h,
        v = g.getBody(),
        o = Cc(
          g,
          v,
          function (e) {
            return g.dom.isBlock(e);
          },
          function () {
            return Ym(g);
          }
        ),
        y = "sel-" + g.dom.uniqueId(),
        a = function (e) {
          e && g.selection.setRng(e);
        },
        r = function () {
          return g.selection.getRng();
        },
        b = function (e, t, n, r) {
          return (
            void 0 === r && (r = !0),
            g
              .fire("ShowCaret", { target: t, direction: e, before: n })
              .isDefaultPrevented()
              ? null
              : (r && g.selection.scrollIntoView(t, -1 === e), o.show(n, t))
          );
        },
        t = function (e) {
          return Eu(e) || Au(e) || Du(e);
        },
        C = function (e) {
          return t(e.startContainer) || t(e.endContainer);
        },
        u = function (e) {
          var t = g.schema.getShortEndedElements(),
            n = g.dom.createRng(),
            r = e.startContainer,
            o = e.startOffset,
            i = e.endContainer,
            a = e.endOffset;
          return (
            me(t, r.nodeName.toLowerCase())
              ? 0 === o
                ? n.setStartBefore(r)
                : n.setStartAfter(r)
              : n.setStart(r, o),
            me(t, i.nodeName.toLowerCase())
              ? 0 === a
                ? n.setEndBefore(i)
                : n.setEndAfter(i)
              : n.setEnd(i, a),
            n
          );
        },
        s = function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c = g.$,
            l = g.dom;
          if (!e) return null;
          if (e.collapsed) {
            if (!C(e))
              if (!1 === t) {
                if (((a = zc(-1, v, e)), xc(a.getNode(!0))))
                  return b(-1, a.getNode(!0), !1, !1);
                if (xc(a.getNode()))
                  return b(-1, a.getNode(), !a.isAtEnd(), !1);
              } else {
                if (((a = zc(1, v, e)), xc(a.getNode())))
                  return b(1, a.getNode(), !a.isAtEnd(), !1);
                if (xc(a.getNode(!0))) return b(1, a.getNode(!0), !1, !1);
              }
            return null;
          }
          (o = e.startContainer), (i = e.startOffset);
          var f = e.endOffset;
          if (
            (3 === o.nodeType &&
              0 === i &&
              fS(o.parentNode) &&
              ((o = o.parentNode), (i = l.nodeIndex(o)), (o = o.parentNode)),
            1 !== o.nodeType)
          )
            return null;
          if (
            (f === i + 1 && o === e.endContainer && (n = o.childNodes[i]),
            !fS(n))
          )
            return null;
          u = s = n.cloneNode(!0);
          var d = g.fire("ObjectSelected", { target: n, targetClone: u });
          if (d.isDefaultPrevented()) return null;
          (r = tu(Ct.fromDom(g.getBody()), "#" + y).fold(
            function () {
              return c([]);
            },
            function (e) {
              return c([e.dom()]);
            }
          )),
            (u = d.targetClone),
            0 === r.length &&
              (r = c(
                '<div data-mce-bogus="all" class="mce-offscreen-selection"></div>'
              ).attr("id", y)).appendTo(g.getBody()),
            (e = g.dom.createRng()),
            u === s && mt.ie
              ? (r
                  .empty()
                  .append(
                    '<p style="font-size: 0" data-mce-bogus="all">\xa0</p>'
                  )
                  .append(u),
                e.setStartAfter(r[0].firstChild.firstChild),
                e.setEndAfter(u))
              : (r.empty().append(Dr).append(u).append(Dr),
                e.setStart(r[0].firstChild, 1),
                e.setEnd(r[0].lastChild, 0)),
            r.css({ top: l.getPos(n, g.getBody()).y }),
            r[0].focus();
          var m = g.selection.getSel();
          m.removeAllRanges(), m.addRange(e);
          var p = Ct.fromDom(n);
          return (
            z(Ya(Ct.fromDom(g.getBody()), "*[data-mce-selected]"), function (
              e
            ) {
              Dt(p, e) || Mn(e, "data-mce-selected");
            }),
            g.dom.getAttrib(n, "data-mce-selected") ||
              n.setAttribute("data-mce-selected", "1"),
            (h = n),
            w(),
            e
          );
        },
        c = function () {
          h &&
            (h.removeAttribute("data-mce-selected"),
            tu(Ct.fromDom(g.getBody()), "#" + y).each(nn),
            (h = null)),
            tu(Ct.fromDom(g.getBody()), "#" + y).each(nn),
            (h = null);
        },
        w = function () {
          o.hide();
        };
      return (
        mt.ceFalse &&
          (function () {
            g.on("mouseup", function (e) {
              var t = r();
              t.collapsed && hh(g, e.clientX, e.clientY) && a(Kb(g, t, !1));
            }),
              g.on("click", function (e) {
                var t = dS(g, e.target);
                t &&
                  (fS(t) && (e.preventDefault(), g.focus()),
                  lS(t) && g.dom.isChildOf(t, g.selection.getNode()) && c());
              }),
              g.on("blur NewBlock", function () {
                c();
              }),
              g.on("ResizeWindow FullscreenStateChanged", function () {
                return o.reposition();
              });
            var n,
              i = function (e, t) {
                var n,
                  r,
                  o = g.dom.getParent(e, g.dom.isBlock),
                  i = g.dom.getParent(t, g.dom.isBlock);
                return (
                  !(!o || !g.dom.isChildOf(o, i) || !1 !== fS(dS(g, o))) ||
                  (o &&
                    ((n = o),
                    (r = i),
                    !(
                      g.dom.getParent(n, g.dom.isBlock) ===
                      g.dom.getParent(r, g.dom.isBlock)
                    )) &&
                    (function (e) {
                      var t = tl(e);
                      if (!e.firstChild) return !1;
                      var n = Ss.before(e.firstChild),
                        r = t.next(n);
                      return r && !id(r) && !ad(r);
                    })(o))
                );
              };
            (n = g).on(
              "tap",
              function (e) {
                var t = dS(n, e.target);
                fS(t) && (e.preventDefault(), s(Wb(n, t)));
              },
              !0
            ),
              g.on("mousedown", function (e) {
                var t = e.target;
                if (
                  (t === v || "HTML" === t.nodeName || g.dom.isChildOf(t, v)) &&
                  !1 !== hh(g, e.clientX, e.clientY)
                ) {
                  var n = dS(g, t);
                  if (n)
                    fS(n)
                      ? (e.preventDefault(), s(Wb(g, n)))
                      : (c(),
                        (lS(n) && e.shiftKey) ||
                          hv(e.clientX, e.clientY, g.selection.getRng()) ||
                          (w(),
                          g.selection.placeCaretAt(e.clientX, e.clientY)));
                  else if (!1 === xc(t)) {
                    c(), w();
                    var r = Hb(v, e.clientX, e.clientY);
                    if (r && !i(e.target, r.node)) {
                      e.preventDefault();
                      var o = b(1, r.node, r.before, !1);
                      g.getBody().focus(), a(o);
                    }
                  }
                }
              }),
              g.on("keypress", function (e) {
                vv.modifierPressed(e) ||
                  (e.keyCode, fS(g.selection.getNode()) && e.preventDefault());
              }),
              g.on("GetSelectionRange", function (e) {
                var t = e.range;
                if (h) {
                  if (!h.parentNode) return void (h = null);
                  (t = t.cloneRange()).selectNode(h), (e.range = t);
                }
              }),
              g.on("SetSelectionRange", function (e) {
                e.range = u(e.range);
                var t = s(e.range, e.forward);
                t && (e.range = t);
              });
            var t, e;
            g.on("AfterSetSelectionRange", function (e) {
              var t,
                n = e.range;
              C(n) || "mcepastebin" === n.startContainer.parentNode.id || w(),
                (t = n.startContainer.parentNode),
                g.dom.hasClass(t, "mce-offscreen-selection") || c();
            }),
              g.on("copy", function (e) {
                var t,
                  n = e.clipboardData;
                if (!e.isDefaultPrevented() && e.clipboardData && !mt.ie) {
                  var r = (t = g.dom.get(y))
                    ? t.getElementsByTagName("*")[0]
                    : t;
                  r &&
                    (e.preventDefault(),
                    n.clearData(),
                    n.setData("text/html", r.outerHTML),
                    n.setData("text/plain", r.outerText));
                }
              }),
              cS(g),
              (e = Ua(function () {
                if (
                  !t.removed &&
                  t.getBody().contains(V.document.activeElement) &&
                  t.selection.getRng().collapsed
                ) {
                  var e = Xb(t, t.selection.getRng(), !1);
                  t.selection.setRng(e);
                }
              }, 0)),
              (t = g).on("focus", function () {
                e.throttle();
              }),
              t.on("blur", function () {
                e.cancel();
              });
          })(),
        {
          showCaret: b,
          showBlockCaretContainer: function (e) {
            e.hasAttribute("data-mce-caret") &&
              (Ou(e), a(r()), g.selection.scrollIntoView(e));
          },
          hideFakeCaret: w,
          destroy: function () {
            o.destroy(), (h = null);
          },
        }
      );
    },
    pS = function (u) {
      var s,
        n,
        r,
        o = yt.each,
        c = vv.BACKSPACE,
        l = vv.DELETE,
        f = u.dom,
        d = u.selection,
        e = u.parser,
        t = mt.gecko,
        i = mt.ie,
        a = mt.webkit,
        m = "data:text/mce-internal,",
        p = i ? "Text" : "URL",
        g = function (e, t) {
          try {
            u.getDoc().execCommand(e, !1, t);
          } catch (n) {}
        },
        h = function (e) {
          return e.isDefaultPrevented();
        },
        v = function () {
          u.shortcuts.add("meta+a", null, "SelectAll");
        },
        y = function () {
          u.on("keydown", function (e) {
            if (
              !h(e) &&
              e.keyCode === c &&
              d.isCollapsed() &&
              0 === d.getRng().startOffset
            ) {
              var t = d.getNode().previousSibling;
              if (t && t.nodeName && "table" === t.nodeName.toLowerCase())
                return e.preventDefault(), !1;
            }
          });
        },
        b = function () {
          u.inline ||
            (u.contentStyles.push("body {min-height: 150px}"),
            u.on("click", function (e) {
              var t;
              if ("HTML" === e.target.nodeName) {
                if (11 < mt.ie) return void u.getBody().focus();
                (t = u.selection.getRng()),
                  u.getBody().focus(),
                  u.selection.setRng(t),
                  u.selection.normalize(),
                  u.nodeChanged();
              }
            }));
        };
      return (
        u.on("keydown", function (e) {
          var t, n;
          if (!h(e) && e.keyCode === vv.BACKSPACE) {
            var r = (t = d.getRng()).startContainer,
              o = t.startOffset,
              i = f.getRoot();
            if (((n = r), t.collapsed && 0 === o)) {
              for (
                ;
                n &&
                n.parentNode &&
                n.parentNode.firstChild === n &&
                n.parentNode !== i;

              )
                n = n.parentNode;
              "BLOCKQUOTE" === n.tagName &&
                (u.formatter.toggle("blockquote", null, n),
                (t = f.createRng()).setStart(r, 0),
                t.setEnd(r, 0),
                d.setRng(t));
            }
          }
        }),
        (s = function (e) {
          var t = f.create("body"),
            n = e.cloneContents();
          return (
            t.appendChild(n), d.serializer.serialize(t, { format: "html" })
          );
        }),
        u.on("keydown", function (e) {
          var t,
            n,
            r,
            o,
            i,
            a = e.keyCode;
          if (!h(e) && (a === l || a === c)) {
            if (
              ((t = u.selection.isCollapsed()),
              (n = u.getBody()),
              t && !f.isEmpty(n))
            )
              return;
            if (
              !t &&
              ((r = u.selection.getRng()),
              (o = s(r)),
              (i = f.createRng()).selectNode(u.getBody()),
              o !== s(i))
            )
              return;
            e.preventDefault(),
              u.setContent(""),
              n.firstChild && f.isBlock(n.firstChild)
                ? u.selection.setCursorLocation(n.firstChild, 0)
                : u.selection.setCursorLocation(n, 0),
              u.nodeChanged();
          }
        }),
        mt.windowsPhone ||
          u.on(
            "keyup focusin mouseup",
            function (e) {
              vv.modifierPressed(e) || d.normalize();
            },
            !0
          ),
        a &&
          (u.inline ||
            f.bind(u.getDoc(), "mousedown mouseup", function (e) {
              var t;
              if (e.target === u.getDoc().documentElement)
                if (
                  ((t = d.getRng()),
                  u.getBody().focus(),
                  "mousedown" === e.type)
                ) {
                  if (Eu(t.startContainer)) return;
                  d.placeCaretAt(e.clientX, e.clientY);
                } else d.setRng(t);
            }),
          u.on("click", function (e) {
            var t = e.target;
            /^(IMG|HR)$/.test(t.nodeName) &&
              "false" !== f.getContentEditableParent(t) &&
              (e.preventDefault(), u.selection.select(t), u.nodeChanged()),
              "A" === t.nodeName &&
                f.hasClass(t, "mce-item-anchor") &&
                (e.preventDefault(), d.select(t));
          }),
          Ys(u) &&
            u.on("init", function () {
              g("DefaultParagraphSeparator", Ys(u));
            }),
          u.on("init", function () {
            u.dom.bind(u.getBody(), "submit", function (e) {
              e.preventDefault();
            });
          }),
          y(),
          e.addNodeFilter("br", function (e) {
            for (var t = e.length; t--; )
              "Apple-interchange-newline" === e[t].attr("class") &&
                e[t].remove();
          }),
          mt.iOS
            ? (u.inline ||
                u.on("keydown", function () {
                  V.document.activeElement === V.document.body &&
                    u.getWin().focus();
                }),
              b(),
              u.on("click", function (e) {
                var t = e.target;
                do {
                  if ("A" === t.tagName) return void e.preventDefault();
                } while ((t = t.parentNode));
              }),
              u.contentStyles.push(
                ".mce-content-body {-webkit-touch-callout: none}"
              ))
            : v()),
        11 <= mt.ie && (b(), y()),
        mt.ie &&
          (v(),
          g("AutoUrlDetect", !1),
          u.on("dragstart", function (e) {
            var t, n, r;
            (t = e).dataTransfer &&
              (u.selection.isCollapsed() &&
                "IMG" === t.target.tagName &&
                d.select(t.target),
              0 < (n = u.selection.getContent()).length &&
                ((r = m + escape(u.id) + "," + escape(n)),
                t.dataTransfer.setData(p, r)));
          }),
          u.on("drop", function (e) {
            if (!h(e)) {
              var t =
                (i = e).dataTransfer &&
                (a = i.dataTransfer.getData(p)) &&
                0 <= a.indexOf(m)
                  ? ((a = a.substr(m.length).split(",")),
                    { id: unescape(a[0]), html: unescape(a[1]) })
                  : null;
              if (t && t.id !== u.id) {
                e.preventDefault();
                var n = Jh(e.x, e.y, u.getDoc());
                d.setRng(n),
                  (r = t.html),
                  (o = !0),
                  u.queryCommandSupported("mceInsertClipboardContent")
                    ? u.execCommand("mceInsertClipboardContent", !1, {
                        content: r,
                        internal: o,
                      })
                    : u.execCommand("mceInsertContent", !1, r);
              }
            }
            var r, o, i, a;
          })),
        t &&
          (u.on("keydown", function (e) {
            if (!h(e) && e.keyCode === c) {
              if (!u.getBody().getElementsByTagName("hr").length) return;
              if (d.isCollapsed() && 0 === d.getRng().startOffset) {
                var t = d.getNode(),
                  n = t.previousSibling;
                if ("HR" === t.nodeName)
                  return f.remove(t), void e.preventDefault();
                n &&
                  n.nodeName &&
                  "hr" === n.nodeName.toLowerCase() &&
                  (f.remove(n), e.preventDefault());
              }
            }
          }),
          V.Range.prototype.getClientRects ||
            u.on("mousedown", function (e) {
              if (!h(e) && "HTML" === e.target.nodeName) {
                var t = u.getBody();
                t.blur(),
                  fa.setEditorTimeout(u, function () {
                    t.focus();
                  });
              }
            }),
          (n = function () {
            var e = f.getAttribs(d.getStart().cloneNode(!1));
            return function () {
              var t = d.getStart();
              t !== u.getBody() &&
                (f.setAttrib(t, "style", null),
                o(e, function (e) {
                  t.setAttributeNode(e.cloneNode(!0));
                }));
            };
          }),
          (r = function () {
            return (
              !d.isCollapsed() &&
              f.getParent(d.getStart(), f.isBlock) !==
                f.getParent(d.getEnd(), f.isBlock)
            );
          }),
          u.on("keypress", function (e) {
            var t;
            if (!h(e) && (8 === e.keyCode || 46 === e.keyCode) && r())
              return (
                (t = n()),
                u.getDoc().execCommand("delete", !1, null),
                t(),
                e.preventDefault(),
                !1
              );
          }),
          f.bind(u.getDoc(), "cut", function (e) {
            var t;
            !h(e) &&
              r() &&
              ((t = n()),
              fa.setEditorTimeout(u, function () {
                t();
              }));
          }),
          u.getParam("readonly") ||
            u.on("BeforeExecCommand mousedown", function () {
              g("StyleWithCSS", !1),
                g("enableInlineTableEditing", !1),
                nc(u) || g("enableObjectResizing", !1);
            }),
          u.on("SetContent ExecCommand", function (e) {
            ("setcontent" !== e.type && "mceInsertLink" !== e.command) ||
              o(f.select("a"), function (e) {
                var t = e.parentNode,
                  n = f.getRoot();
                if (t.lastChild === e) {
                  for (; t && !f.isBlock(t); ) {
                    if (t.parentNode.lastChild !== t || t === n) return;
                    t = t.parentNode;
                  }
                  f.add(t, "br", { "data-mce-bogus": 1 });
                }
              });
          }),
          u.contentStyles.push(
            "img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"
          ),
          mt.mac &&
            u.on("keydown", function (e) {
              !vv.metaKeyPressed(e) ||
                e.shiftKey ||
                (37 !== e.keyCode && 39 !== e.keyCode) ||
                (e.preventDefault(),
                u.selection
                  .getSel()
                  .modify(
                    "move",
                    37 === e.keyCode ? "backward" : "forward",
                    "lineboundary"
                  ));
            }),
          y()),
        {
          refreshContentEditable: function () {},
          isHidden: function () {
            if (!t || u.removed) return !1;
            var e = u.selection.getSel();
            return !e || !e.rangeCount || 0 === e.rangeCount;
          },
        }
      );
    },
    gS = Ea.DOM,
    hS = function (e) {
      return le(e, function (e) {
        return !1 === R(e);
      });
    },
    vS = function (e) {
      var t,
        n = e.settings,
        r = e.editorUpload.blobCache;
      return hS({
        allow_conditional_comments: n.allow_conditional_comments,
        allow_html_data_urls: n.allow_html_data_urls,
        allow_html_in_named_anchor: n.allow_html_in_named_anchor,
        allow_script_urls: n.allow_script_urls,
        allow_unsafe_link_target: n.allow_unsafe_link_target,
        convert_fonts_to_spans: n.convert_fonts_to_spans,
        fix_list_elements: n.fix_list_elements,
        font_size_legacy_values: n.font_size_legacy_values,
        forced_root_block: n.forced_root_block,
        forced_root_block_attrs: n.forced_root_block_attrs,
        padd_empty_with_br: n.padd_empty_with_br,
        preserve_cdata: n.preserve_cdata,
        remove_trailing_brs: n.remove_trailing_brs,
        inline_styles: n.inline_styles,
        root_name: (t = e).inline
          ? t.getElement().nodeName.toLowerCase()
          : undefined,
        validate: !0,
        blob_cache: r,
        images_dataimg_filter: n.images_dataimg_filter,
      });
    },
    yS = function (u) {
      var e = u.dom.getRoot();
      u.inline ||
        (mf(u) && u.selection.getStart(!0) !== e) ||
        dl(e).each(function (e) {
          var t,
            n,
            r,
            o,
            i = e.getNode(),
            a = xn(i) ? dl(i).getOr(e) : e;
          mt.browser.isIE()
            ? ((t = u),
              (n = a.toRange()),
              (r = Ct.fromDom(t.getBody())),
              (o = (Dm(t) ? B.from(n) : B.none()).map(Om).filter(Am(r))),
              (t.bookmark = o.isSome() ? o : t.bookmark))
            : u.selection.setRng(a.toRange());
        });
    },
    bS = function (e) {
      var t;
      e.bindPendingEventDelegates(),
        (e.initialized = !0),
        e.fire("Init"),
        e.focus(!0),
        yS(e),
        e.nodeChanged({ initial: !0 }),
        e.execCallback("init_instance_callback", e),
        (t = e).settings.auto_focus &&
          fa.setEditorTimeout(
            t,
            function () {
              var e;
              (e =
                !0 === t.settings.auto_focus
                  ? t
                  : t.editorManager.get(t.settings.auto_focus)).destroyed ||
                e.focus();
            },
            100
          );
    },
    CS = function (t, e) {
      var n = t.settings,
        r = t.getDoc(),
        o = t.getBody();
      n.browser_spellcheck ||
        n.gecko_spellcheck ||
        ((r.body.spellcheck = !1), gS.setAttrib(o, "spellcheck", "false")),
        (t.quirks = pS(t)),
        t.fire("PostRender");
      var i,
        a,
        u,
        s,
        c,
        l = t.getParam("directionality", Ia.isRtl() ? "rtl" : undefined);
      if (
        (l !== undefined && (o.dir = l),
        n.protect &&
          t.on("BeforeSetContent", function (t) {
            yt.each(n.protect, function (e) {
              t.content = t.content.replace(e, function (e) {
                return "\x3c!--mce:protected " + escape(e) + "--\x3e";
              });
            });
          }),
        t.on("SetContent", function () {
          t.addVisual(t.getBody());
        }),
        !1 === e && t.load({ initial: !0, format: "html" }),
        (t.startContent = t.getContent({ format: "raw" })),
        t.on("compositionstart compositionend", function (e) {
          t.composing = "compositionstart" === e.type;
        }),
        0 < t.contentStyles.length)
      ) {
        var f = "";
        yt.each(t.contentStyles, function (e) {
          f += e + "\r\n";
        }),
          t.dom.addStyle(f);
      }
      ((i = t).inline ? gS.styleSheetLoader : i.dom.styleSheetLoader).loadAll(
        t.contentCSS,
        function (e) {
          bS(t);
        },
        function (e) {
          bS(t);
        }
      ),
        n.content_style &&
          ((a = t),
          (u = n.content_style),
          (s = Ct.fromDom(a.getDoc().head)),
          (c = Ct.fromTag("style")),
          Pn(c, "type", "text/css"),
          Zt(c, Ct.fromText(u)),
          Zt(s, c));
    },
    wS = function (t, e) {
      var n = t.settings,
        r = t.getElement(),
        o = t.getDoc();
      n.inline || (t.getElement().style.visibility = t.orgVisibility),
        e || t.inline || (o.open(), o.write(t.iframeHTML), o.close()),
        t.inline &&
          (gS.addClass(r, "mce-content-body"),
          (t.contentDocument = o = V.document),
          (t.contentWindow = V.window),
          (t.bodyElement = r),
          (t.contentAreaContainer = r));
      var u,
        i,
        a,
        s,
        c,
        l,
        f = t.getBody();
      (f.disabled = !0),
        (t.readonly = !!n.readonly),
        t.readonly ||
          (t.inline &&
            "static" === gS.getStyle(f, "position", !0) &&
            (f.style.position = "relative"),
          (f.contentEditable = t.getParam("content_editable_state", !0))),
        (f.disabled = !1),
        (t.editorUpload = Qv(t)),
        (t.schema = Rr(n)),
        (t.dom = Ea(o, {
          keep_values: !0,
          url_converter: t.convertURL,
          url_converter_scope: t,
          hex_colors: n.force_hex_style_colors,
          update_styles: !0,
          root_element: t.inline ? t.getBody() : null,
          collect: function () {
            return t.inline;
          },
          schema: t.schema,
          contentCssCors: t.getParam("content_css_cors", !1, "boolean"),
          referrerPolicy: Zs(t),
          onSetAttrib: function (e) {
            t.fire("SetAttrib", e);
          },
        })),
        (t.parser =
          ((i = Vv(vS((u = t)), u.schema)).addAttributeFilter(
            "src,href,style,tabindex",
            function (e, t) {
              for (
                var n, r, o = e.length, i = u.dom, a = "data-mce-" + t;
                o--;

              )
                if ((r = (n = e[o]).attr(t)) && !n.attr(a)) {
                  if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:"))
                    continue;
                  "style" === t
                    ? ((r = i.serializeStyle(i.parseStyle(r), n.name)).length ||
                        (r = null),
                      n.attr(a, r),
                      n.attr(t, r))
                    : "tabindex" === t
                    ? (n.attr(a, r), n.attr(t, null))
                    : n.attr(a, u.convertURL(r, t, n.name));
                }
            }
          ),
          i.addNodeFilter("script", function (e) {
            for (var t = e.length; t--; ) {
              var n = e[t],
                r = n.attr("type") || "no/type";
              0 !== r.indexOf("mce-") && n.attr("type", "mce-" + r);
            }
          }),
          u.settings.preserve_cdata &&
            i.addNodeFilter("#cdata", function (e) {
              for (var t = e.length; t--; ) {
                var n = e[t];
                (n.type = 8),
                  (n.name = "#comment"),
                  (n.value = "[CDATA[" + u.dom.encode(n.value) + "]]");
              }
            }),
          i.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (e) {
            for (var t = e.length, n = u.schema.getNonEmptyElements(); t--; ) {
              var r = e[t];
              r.isEmpty(n) &&
                0 === r.getAll("br").length &&
                (r.append(new Tf("br", 1)).shortEnded = !0);
            }
          }),
          i)),
        (t.serializer = Xv(
          ((s = (a = t).settings),
          xe(
            xe({}, vS(a)),
            hS({
              url_converter: s.url_converter,
              url_converter_scope: s.url_converter_scope,
              element_format: s.element_format,
              entities: s.entities,
              entity_encoding: s.entity_encoding,
              indent: s.indent,
              indent_after: s.indent_after,
              indent_before: s.indent_before,
              block_elements: s.block_elements,
              boolean_attributes: s.boolean_attributes,
              custom_elements: s.custom_elements,
              extended_valid_elements: s.extended_valid_elements,
              invalid_elements: s.invalid_elements,
              invalid_styles: s.invalid_styles,
              move_caret_before_on_enter_elements:
                s.move_caret_before_on_enter_elements,
              non_empty_elements: s.non_empty_elements,
              schema: s.schema,
              self_closing_elements: s.self_closing_elements,
              short_ended_elements: s.short_ended_elements,
              special: s.special,
              text_block_elements: s.text_block_elements,
              text_inline_elements: s.text_inline_elements,
              valid_children: s.valid_children,
              valid_classes: s.valid_classes,
              valid_elements: s.valid_elements,
              valid_styles: s.valid_styles,
              verify_html: s.verify_html,
              whitespace_elements: s.whitespace_elements,
            })
          )),
          t
        )),
        (t.selection = Nv(t.dom, t.getWin(), t.serializer, t)),
        (t.annotator = xf(t)),
        (t.formatter = ly(t)),
        (t.undoManager = dy(t)),
        (t._nodeChangeDispatcher = new Xx(t)),
        (t._selectionOverrides = mS(t)),
        by(t),
        Gx(t),
        Ig(t) || Qx(t),
        Ig((c = t)) || Kx(c),
        Ys((l = t)) && l.on("NodeChange", N(xy, l)),
        vy(t),
        t.fire("PreInit"),
        Mg(t).fold(
          function () {
            CS(t, !1);
          },
          function (e) {
            t.setProgressState(!0),
              e.then(function (e) {
                t.setProgressState(!1), CS(t, e);
              });
          }
        );
    },
    xS = Ea.DOM,
    SS = function (e) {
      var t = e.getParam("doctype", "<!DOCTYPE html>") + "<html><head>";
      e.getParam("document_base_url", "") !== e.documentBaseUrl &&
        (t += '<base href="' + e.documentBaseURI.getURI() + '" />'),
        (t +=
          '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
      var n = Ks(e, "body_id", "tinymce"),
        r = Ks(e, "body_class", "");
      return (
        Xs(e) &&
          (t +=
            '<meta http-equiv="Content-Security-Policy" content="' +
            Xs(e) +
            '" />'),
        (t +=
          '</head><body id="' +
          n +
          '" class="mce-content-body ' +
          r +
          '" data-id="' +
          e.id +
          '"><br></body></html>')
      );
    },
    NS = function (e, t) {
      var n,
        r,
        o,
        i,
        a = e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),
        u =
          ((n = e.id),
          (r = a),
          t.height,
          (o = e.getParam("iframe_attrs", {})),
          (i = Ct.fromTag("iframe")),
          Ln(i, o),
          Ln(i, {
            id: n + "_ifr",
            frameBorder: "0",
            allowTransparency: "true",
            title: r,
          }),
          $a(i, "tox-edit-area__iframe"),
          i.dom());
      u.onload = function () {
        (u.onload = null), e.fire("load");
      };
      var s = (function (e, t) {
        if (
          V.document.domain !== V.window.location.hostname &&
          mt.browser.isIE()
        ) {
          var n = Jv("mce");
          e[n] = function () {
            wS(e);
          };
          var r =
            'javascript:(function(){document.open();document.domain="' +
            V.document.domain +
            '";var ed = window.parent.tinymce.get("' +
            e.id +
            '");document.write(ed.iframeHTML);document.close();ed.' +
            n +
            "(true);})()";
          return xS.setAttrib(t, "src", r), !0;
        }
        return !1;
      })(e, u);
      return (
        (e.contentAreaContainer = t.iframeContainer),
        (e.iframeElement = u),
        (e.iframeHTML = SS(e)),
        xS.add(t.iframeContainer, u),
        s
      );
    },
    ES = Ea.DOM,
    kS = function (t, n, e) {
      var r = bh.get(e),
        o = bh.urls[e] || t.documentBaseUrl.replace(/\/$/, "");
      if (((e = yt.trim(e)), r && -1 === yt.inArray(n, e))) {
        if (
          (yt.each(bh.dependencies(e), function (e) {
            kS(t, n, e);
          }),
          t.plugins[e])
        )
          return;
        try {
          var i = new r(t, o, t.$);
          (t.plugins[e] = i).init && (i.init(t, o), n.push(e));
        } catch (LE) {
          !(function (e, t, n) {
            var r = Ia.translate(["Failed to initialize plugin: {0}", t]);
            _h(r, n), Sh(e, r);
          })(t, e, LE);
        }
      }
    },
    _S = function (e) {
      return e.replace(/^\-/, "");
    },
    TS = function (e) {
      return { editorContainer: e, iframeContainer: e };
    },
    RS = function (e) {
      var t,
        n,
        r = e.getElement();
      return e.inline
        ? TS(null)
        : ((t = r), (n = ES.create("div")), ES.insertAfter(n, t), TS(n));
    },
    AS = function (e) {
      var t,
        n,
        r,
        o = e.getElement();
      return (
        (e.orgDisplay = o.style.display),
        q(oc(e))
          ? e.theme.renderUI()
          : A(oc(e))
          ? ((n = (t = e).getElement()),
            (r = oc(t)(t, n)).editorContainer.nodeType &&
              (r.editorContainer.id = r.editorContainer.id || t.id + "_parent"),
            r.iframeContainer &&
              r.iframeContainer.nodeType &&
              (r.iframeContainer.id =
                r.iframeContainer.id || t.id + "_iframecontainer"),
            (r.height = r.iframeHeight ? r.iframeHeight : n.offsetHeight),
            r)
          : RS(e)
      );
    },
    DS = function (e) {
      var n, t, r, o, i, a;
      e.fire("ScriptsLoaded"),
        (n = e),
        (t = yt.trim(Qs(n))),
        (r = n.ui.registry.getAll().icons),
        (o = xe(xe({}, ch.get("default").icons), ch.get(t).icons)),
        oe(o, function (e, t) {
          me(r, t) || n.ui.registry.addIcon(t, e);
        }),
        (function (e) {
          var t = oc(e);
          if (q(t)) {
            e.settings.theme = _S(t);
            var n = Ch.get(t);
            (e.theme = new n(e, Ch.urls[t])),
              e.theme.init &&
                e.theme.init(
                  e,
                  Ch.urls[t] || e.documentBaseUrl.replace(/\/$/, ""),
                  e.$
                );
          } else e.theme = {};
        })(e),
        (i = e),
        (a = []),
        yt.each(ac(i).split(/[ ,]/), function (e) {
          kS(i, a, _S(e));
        });
      var u,
        s,
        c,
        l,
        f = AS(e);
      return (
        (e.editorContainer = f.editorContainer ? f.editorContainer : null),
        ((u = e).contentCSS = u.contentCSS.concat(Th(u))),
        e.inline
          ? wS(e)
          : ((l = NS((s = e), (c = f))),
            c.editorContainer &&
              ((xS.get(c.editorContainer).style.display = s.orgDisplay),
              (s.hidden = xS.isHidden(c.editorContainer))),
            (s.getElement().style.display = "none"),
            xS.setAttrib(s.id, "aria-hidden", "true"),
            void (l || wS(s)))
      );
    },
    OS = Ea.DOM,
    BS = function (e) {
      return "-" === e.charAt(0);
    },
    PS = function (e, t) {
      var n = ec(t),
        r = t.getParam("language_url", "", "string");
      if (!1 === Ia.hasCode(n) && "en" !== n) {
        var o = "" !== r ? r : t.editorManager.baseURL + "/langs/" + n + ".js";
        e.add(o, f, undefined, function () {
          Nh(t, "LanguageLoadError", Eh("language", o, n));
        });
      }
    },
    LS = function (t, e, n) {
      return B.from(e)
        .filter(function (e) {
          return 0 < e.length && !ch.has(e);
        })
        .map(function (e) {
          return {
            url: t.editorManager.baseURL + "/icons/" + e + "/icons" + n + ".js",
            name: B.some(e),
          };
        });
    },
    IS = function (e, o, t) {
      var n,
        r = LS(o, "default", t),
        i =
          ((n = o),
          B.from(n.getParam("icons_url", "", "string"))
            .filter(function (e) {
              return 0 < e.length;
            })
            .map(function (e) {
              return { url: e, name: B.none() };
            })
            .orThunk(function () {
              return LS(o, Qs(o), "");
            }));
      z(
        (function (e) {
          for (
            var t = [],
              n = function (e) {
                t.push(e);
              },
              r = 0;
            r < e.length;
            r++
          )
            e[r].each(n);
          return t;
        })([r, i]),
        function (r) {
          e.add(r.url, f, undefined, function () {
            var e, t, n;
            (e = o),
              (t = r.url),
              (n = r.name.getOrUndefined()),
              Nh(e, "IconsLoadError", Eh("icons", t, n));
          });
        }
      );
    },
    MS = function (e, t) {
      var n = Ra.ScriptLoader;
      !(function (e, t, n, r) {
        var o = oc(t);
        if (q(o)) {
          if (!BS(o) && !Ch.urls.hasOwnProperty(o)) {
            var i = t.getParam("theme_url");
            i
              ? Ch.load(o, t.documentBaseURI.toAbsolute(i))
              : Ch.load(o, "themes/" + o + "/theme" + n + ".js");
          }
          e.loadQueue(function () {
            Ch.waitFor(o, r);
          });
        } else r();
      })(n, e, t, function () {
        var r, o;
        PS(n, e),
          IS(n, e, t),
          (r = e),
          (o = t),
          yt.each(r.getParam("external_plugins"), function (e, t) {
            bh.load(t, e, f, undefined, function () {
              kh(r, e, t);
            }),
              (r.settings.plugins += " " + t);
          }),
          yt.each(ac(r).split(/[ ,]/), function (e) {
            if ((e = yt.trim(e)) && !bh.urls[e])
              if (BS(e)) {
                e = e.substr(1, e.length);
                var t = bh.dependencies(e);
                yt.each(t, function (e) {
                  var t = {
                      prefix: "plugins/",
                      resource: e,
                      suffix: "/plugin" + o + ".js",
                    },
                    n = bh.createUrl(t, e);
                  bh.load(n.resource, n, f, undefined, function () {
                    kh(r, n.prefix + n.resource + n.suffix, n.resource);
                  });
                });
              } else {
                var n = {
                  prefix: "plugins/",
                  resource: e,
                  suffix: "/plugin" + o + ".js",
                };
                bh.load(e, n, f, undefined, function () {
                  kh(r, n.prefix + n.resource + n.suffix, e);
                });
              }
          }),
          n.loadQueue(
            function () {
              e.removed || DS(e);
            },
            e,
            function () {
              e.removed || DS(e);
            }
          );
      });
    },
    FS = function (t) {
      var e = t.id;
      Ia.setCode(ec(t));
      var n = function () {
        OS.unbind(V.window, "ready", n), t.render();
      };
      if (Hr.Event.domLoaded) {
        if (t.getElement() && mt.contentEditable) {
          var r,
            o,
            i = Ct.fromDom(t.getElement()),
            a = W(
              i.dom().attributes,
              function (e, t) {
                return (e[t.name] = t.value), e;
              },
              {}
            );
          t.on("remove", function () {
            j(i.dom().attributes, function (e) {
              return Mn(i, e.name);
            }),
              Ln(i, a);
          }),
            (t.ui.styleSheetLoader =
              ((r = i),
              (o = t),
              ga.forElement(r, {
                contentCssCors: o.getParam("content_css_cors"),
                referrerPolicy: Zs(o),
              }))),
            t.getParam("inline")
              ? (t.inline = !0)
              : ((t.orgVisibility = t.getElement().style.visibility),
                (t.getElement().style.visibility = "hidden"));
          var u = t.getElement().form || OS.getParent(e, "form");
          u &&
            ((t.formElement = u),
            t.getParam("hidden_input") &&
              !Nn(t.getElement()) &&
              (OS.insertAfter(
                OS.create("input", { type: "hidden", name: e }),
                e
              ),
              (t.hasHiddenInput = !0)),
            (t.formEventDelegate = function (e) {
              t.fire(e.type, e);
            }),
            OS.bind(u, "submit reset", t.formEventDelegate),
            t.on("reset", function () {
              t.resetContent();
            }),
            !t.getParam("submit_patch") ||
              u.submit.nodeType ||
              u.submit.length ||
              u._mceOldSubmit ||
              ((u._mceOldSubmit = u.submit),
              (u.submit = function () {
                return (
                  t.editorManager.triggerSave(),
                  t.setDirty(!1),
                  u._mceOldSubmit(u)
                );
              }))),
            (t.windowManager = wh(t)),
            (t.notificationManager = yh(t)),
            "xml" === t.getParam("encoding") &&
              t.on("GetContent", function (e) {
                e.save && (e.content = OS.encode(e.content));
              }),
            t.getParam("add_form_submit_trigger") &&
              t.on("submit", function () {
                t.initialized && t.save();
              }),
            t.getParam("add_unload_trigger") &&
              ((t._beforeUnload = function () {
                !t.initialized ||
                  t.destroyed ||
                  t.isHidden() ||
                  t.save({ format: "raw", no_events: !0, set_dirty: !1 });
              }),
              t.editorManager.on("BeforeUnload", t._beforeUnload)),
            t.editorManager.add(t),
            MS(t, t.suffix);
        }
      } else OS.bind(V.window, "ready", n);
    },
    US = function (e) {
      return A(e) ? e : x(!1);
    },
    zS = function (e, t, n) {
      var r = t(e),
        o = US(n);
      return r.orThunk(function () {
        return o(e)
          ? B.none()
          : (function (e, t, n) {
              for (var r = e.dom(), o = US(n); r.parentNode; ) {
                r = r.parentNode;
                var i = Ct.fromDom(r),
                  a = t(i);
                if (a.isSome()) return a;
                if (o(i)) break;
              }
              return B.none();
            })(e, t, o);
      });
    },
    jS = { "font-size": "size", "font-family": "face" },
    HS = function (e, t, n) {
      var r = function (r) {
        return zn(r, e).orThunk(function () {
          return "font" === wt(r)
            ? de(jS, e).bind(function (e) {
                return (t = r), (n = e), B.from(In(t, n));
                var t, n;
              })
            : B.none();
        });
      };
      return zS(
        Ct.fromDom(n),
        function (e) {
          return r(e);
        },
        function (e) {
          return Dt(Ct.fromDom(t), e);
        }
      );
    },
    VS = function (o) {
      return function (r, e) {
        return B.from(e)
          .map(Ct.fromDom)
          .filter(Nt)
          .bind(function (e) {
            return HS(o, r, e.dom()).or(
              ((t = o), (n = e.dom()), B.from(Ea.DOM.getStyle(n, t, !0)))
            );
            var t, n;
          })
          .getOr("");
      };
    },
    qS = VS("font-size"),
    $S = a(function (e) {
      return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
    }, VS("font-family")),
    WS = function (e) {
      return dl(e.getBody()).map(function (e) {
        var t = e.container();
        return En(t) ? t.parentNode : t;
      });
    },
    KS = function (o) {
      return B.from(o.selection.getRng()).bind(function (e) {
        var t,
          n,
          r = o.getBody();
        return (
          (n = r),
          (t = e).startContainer === n && 0 === t.startOffset
            ? B.none()
            : B.from(o.selection.getStart(!0))
        );
      });
    },
    XS = function (e, t) {
      if (/^[0-9\.]+$/.test(t)) {
        var n = parseInt(t, 10);
        if (1 <= n && n <= 7) {
          var r =
              ((a = e),
              yt.explode(
                a.getParam(
                  "font_size_style_values",
                  "xx-small,x-small,small,medium,large,x-large,xx-large"
                )
              )),
            o = ((i = e), yt.explode(i.getParam("font_size_classes", "")));
          return o ? o[n - 1] || t : r[n - 1] || t;
        }
        return t;
      }
      return t;
      var i, a;
    },
    YS = function (e, t) {
      var n,
        r = XS(e, t);
      e.formatter.toggle("fontname", {
        value:
          ((n = r.split(/\s*,\s*/)),
          U(n, function (e) {
            return -1 === e.indexOf(" ") || $e(e, '"') || $e(e, "'")
              ? e
              : "'" + e + "'";
          }).join(",")),
      }),
        e.nodeChanged();
    },
    GS = function (e, t) {
      var n,
        r,
        o,
        i,
        a =
          "string" != typeof (n = t)
            ? ((r = yt.extend({ paste: n.paste, data: { paste: n.paste } }, n)),
              { content: n.content, details: r })
            : { content: n, details: {} };
      (o = a.content), (i = a.details), Fg(e).editor.insertContent(o, i);
    },
    JS = function (e, t) {
      e.getDoc().execCommand(t, !1, null);
    },
    QS = yt.each,
    ZS = yt.map,
    eN = yt.inArray,
    tN =
      ((nN.prototype.execCommand = function (t, n, r, e) {
        var o,
          i = !1,
          a = this;
        if (!a.editor.removed) {
          var u;
          if (
            (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(
              t
            ) ||
            (e && e.skip_focus)
              ? ((u = a.editor),
                Im(u).each(function (e) {
                  u.selection.setRng(e);
                }))
              : a.editor.focus(),
            (e = a.editor.fire("BeforeExecCommand", {
              command: t,
              ui: n,
              value: r,
            })).isDefaultPrevented())
          )
            return !1;
          var s = t.toLowerCase();
          if ((o = a.commands.exec[s]))
            return (
              o(s, n, r),
              a.editor.fire("ExecCommand", { command: t, ui: n, value: r }),
              !0
            );
          if (
            (QS(this.editor.plugins, function (e) {
              if (e.execCommand && e.execCommand(t, n, r))
                return (
                  a.editor.fire("ExecCommand", { command: t, ui: n, value: r }),
                  !(i = !0)
                );
            }),
            i)
          )
            return i;
          if (
            a.editor.theme &&
            a.editor.theme.execCommand &&
            a.editor.theme.execCommand(t, n, r)
          )
            return (
              a.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0
            );
          try {
            i = a.editor.getDoc().execCommand(t, n, r);
          } catch (c) {}
          return (
            !!i &&
            (a.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0)
          );
        }
      }),
      (nN.prototype.queryCommandState = function (e) {
        var t;
        if (!this.editor.quirks.isHidden() && !this.editor.removed) {
          if (((e = e.toLowerCase()), (t = this.commands.state[e])))
            return t(e);
          try {
            return this.editor.getDoc().queryCommandState(e);
          } catch (n) {}
          return !1;
        }
      }),
      (nN.prototype.queryCommandValue = function (e) {
        var t;
        if (!this.editor.quirks.isHidden() && !this.editor.removed) {
          if (((e = e.toLowerCase()), (t = this.commands.value[e])))
            return t(e);
          try {
            return this.editor.getDoc().queryCommandValue(e);
          } catch (n) {}
        }
      }),
      (nN.prototype.addCommands = function (e, n) {
        var r = this;
        (n = n || "exec"),
          QS(e, function (t, e) {
            QS(e.toLowerCase().split(","), function (e) {
              r.commands[n][e] = t;
            });
          });
      }),
      (nN.prototype.addCommand = function (e, o, i) {
        var a = this;
        (e = e.toLowerCase()),
          (this.commands.exec[e] = function (e, t, n, r) {
            return o.call(i || a.editor, t, n, r);
          });
      }),
      (nN.prototype.queryCommandSupported = function (e) {
        if (((e = e.toLowerCase()), this.commands.exec[e])) return !0;
        try {
          return this.editor.getDoc().queryCommandSupported(e);
        } catch (t) {}
        return !1;
      }),
      (nN.prototype.addQueryStateHandler = function (e, t, n) {
        var r = this;
        (e = e.toLowerCase()),
          (this.commands.state[e] = function () {
            return t.call(n || r.editor);
          });
      }),
      (nN.prototype.addQueryValueHandler = function (e, t, n) {
        var r = this;
        (e = e.toLowerCase()),
          (this.commands.value[e] = function () {
            return t.call(n || r.editor);
          });
      }),
      (nN.prototype.hasCustomCommand = function (e) {
        return (e = e.toLowerCase()), !!this.commands.exec[e];
      }),
      (nN.prototype.execNativeCommand = function (e, t, n) {
        return (
          t === undefined && (t = !1),
          n === undefined && (n = null),
          this.editor.getDoc().execCommand(e, t, n)
        );
      }),
      (nN.prototype.isFormatMatch = function (e) {
        return this.editor.formatter.match(e);
      }),
      (nN.prototype.toggleFormat = function (e, t) {
        this.editor.formatter.toggle(e, t ? { value: t } : undefined),
          this.editor.nodeChanged();
      }),
      (nN.prototype.storeSelection = function (e) {
        this.selectionBookmark = this.editor.selection.getBookmark(e);
      }),
      (nN.prototype.restoreSelection = function () {
        this.editor.selection.moveToBookmark(this.selectionBookmark);
      }),
      (nN.prototype.setupCommands = function (i) {
        var a = this;
        this.addCommands({
          "mceResetDesignMode,mceBeginUndoLevel": function () {},
          "mceEndUndoLevel,mceAddUndoLevel": function () {
            i.undoManager.add();
          },
          "Cut,Copy,Paste": function (e) {
            var t,
              n = i.getDoc();
            try {
              a.execNativeCommand(e);
            } catch (o) {
              t = !0;
            }
            if (
              ("paste" !== e || n.queryCommandEnabled(e) || (t = !0),
              t || !n.queryCommandSupported(e))
            ) {
              var r = i.translate(
                "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."
              );
              mt.mac && (r = r.replace(/Ctrl\+/g, "\u2318+")),
                i.notificationManager.open({ text: r, type: "error" });
            }
          },
          unlink: function () {
            if (i.selection.isCollapsed()) {
              var e = i.dom.getParent(i.selection.getStart(), "a");
              e && i.dom.remove(e, !0);
            } else i.formatter.remove("link");
          },
          "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function (
            e
          ) {
            var t = e.substring(7);
            "full" === t && (t = "justify"),
              QS("left,center,right,justify".split(","), function (e) {
                t !== e && i.formatter.remove("align" + e);
              }),
              "none" !== t && a.toggleFormat("align" + t);
          },
          "InsertUnorderedList,InsertOrderedList": function (e) {
            var t;
            a.execNativeCommand(e);
            var n = i.dom.getParent(i.selection.getNode(), "ol,ul");
            n &&
              ((t = n.parentNode),
              /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName) &&
                (a.storeSelection(), i.dom.split(t, n), a.restoreSelection()));
          },
          "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (
            e
          ) {
            a.toggleFormat(e);
          },
          "ForeColor,HiliteColor": function (e, t, n) {
            a.toggleFormat(e, n);
          },
          FontName: function (e, t, n) {
            YS(i, n);
          },
          FontSize: function (e, t, n) {
            var r, o;
            (o = n),
              (r = i).formatter.toggle("fontsize", { value: XS(r, o) }),
              r.nodeChanged();
          },
          RemoveFormat: function (e) {
            i.formatter.remove(e);
          },
          mceBlockQuote: function () {
            a.toggleFormat("blockquote");
          },
          FormatBlock: function (e, t, n) {
            return a.toggleFormat(n || "p");
          },
          mceCleanup: function () {
            var e = i.selection.getBookmark();
            i.setContent(i.getContent()), i.selection.moveToBookmark(e);
          },
          mceRemoveNode: function (e, t, n) {
            var r = n || i.selection.getNode();
            r !== i.getBody() &&
              (a.storeSelection(), i.dom.remove(r, !0), a.restoreSelection());
          },
          mceSelectNodeDepth: function (e, t, n) {
            var r = 0;
            i.dom.getParent(
              i.selection.getNode(),
              function (e) {
                if (1 === e.nodeType && r++ === n)
                  return i.selection.select(e), !1;
              },
              i.getBody()
            );
          },
          mceSelectNode: function (e, t, n) {
            i.selection.select(n);
          },
          mceInsertContent: function (e, t, n) {
            GS(i, n);
          },
          mceInsertRawHTML: function (e, t, n) {
            i.selection.setContent("tiny_mce_marker");
            var r = i.getContent();
            i.setContent(
              r.replace(/tiny_mce_marker/g, function () {
                return n;
              })
            );
          },
          mceInsertNewLine: function (e, t, n) {
            wx(i, n);
          },
          mceToggleFormat: function (e, t, n) {
            a.toggleFormat(n);
          },
          mceSetContent: function (e, t, n) {
            i.setContent(n);
          },
          "Indent,Outdent": function (e) {
            kw(i, e);
          },
          mceRepaint: function () {},
          InsertHorizontalRule: function () {
            i.execCommand("mceInsertContent", !1, "<hr />");
          },
          mceToggleVisualAid: function () {
            (i.hasVisual = !i.hasVisual), i.addVisual();
          },
          mceReplaceContent: function (e, t, n) {
            i.execCommand(
              "mceInsertContent",
              !1,
              n.replace(
                /\{\$selection\}/g,
                i.selection.getContent({ format: "text" })
              )
            );
          },
          mceInsertLink: function (e, t, n) {
            "string" == typeof n && (n = { href: n });
            var r = i.dom.getParent(i.selection.getNode(), "a");
            (n.href = n.href.replace(/ /g, "%20")),
              (r && n.href) || i.formatter.remove("link"),
              n.href && i.formatter.apply("link", n, r);
          },
          selectAll: function () {
            var e = i.dom.getParent(i.selection.getStart(), An);
            if (e) {
              var t = i.dom.createRng();
              t.selectNodeContents(e), i.selection.setRng(t);
            }
          },
          delete: function () {
            var e;
            Lw((e = i)) ||
              cw(e, !1) ||
              fw(e, !1) ||
              gw(e, !1) ||
              VC(e, !1) ||
              om(e) ||
              KC(e) ||
              bw(e, !1) ||
              (JS(e, "Delete"), DC(e));
          },
          forwardDelete: function () {
            var e;
            cw((e = i), !0) ||
              fw(e, !0) ||
              gw(e, !0) ||
              VC(e, !0) ||
              om(e) ||
              KC(e) ||
              bw(e, !0) ||
              JS(e, "ForwardDelete");
          },
          mceNewDocument: function () {
            i.setContent("");
          },
          InsertLineBreak: function (e, t, n) {
            return ux(i, n), !0;
          },
        });
        var e = function (n) {
          return function () {
            var e = i.selection.isCollapsed()
                ? [i.dom.getParent(i.selection.getNode(), i.dom.isBlock)]
                : i.selection.getSelectedBlocks(),
              t = ZS(e, function (e) {
                return !!i.formatter.matchNode(e, n);
              });
            return -1 !== eN(t, !0);
          };
        };
        a.addCommands(
          {
            JustifyLeft: e("alignleft"),
            JustifyCenter: e("aligncenter"),
            JustifyRight: e("alignright"),
            JustifyFull: e("alignjustify"),
            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (
              e
            ) {
              return a.isFormatMatch(e);
            },
            mceBlockQuote: function () {
              return a.isFormatMatch("blockquote");
            },
            Outdent: function () {
              return Sw(i);
            },
            "InsertUnorderedList,InsertOrderedList": function (e) {
              var t = i.dom.getParent(i.selection.getNode(), "ul,ol");
              return (
                t &&
                (("insertunorderedlist" === e && "UL" === t.tagName) ||
                  ("insertorderedlist" === e && "OL" === t.tagName))
              );
            },
          },
          "state"
        ),
          a.addCommands({
            Undo: function () {
              i.undoManager.undo();
            },
            Redo: function () {
              i.undoManager.redo();
            },
          }),
          a.addQueryValueHandler(
            "FontName",
            function () {
              return KS((t = i)).fold(
                function () {
                  return WS(t)
                    .map(function (e) {
                      return $S(t.getBody(), e);
                    })
                    .getOr("");
                },
                function (e) {
                  return $S(t.getBody(), e);
                }
              );
              var t;
            },
            this
          ),
          a.addQueryValueHandler(
            "FontSize",
            function () {
              return KS((t = i)).fold(
                function () {
                  return WS(t)
                    .map(function (e) {
                      return qS(t.getBody(), e);
                    })
                    .getOr("");
                },
                function (e) {
                  return qS(t.getBody(), e);
                }
              );
              var t;
            },
            this
          );
      }),
      nN);
  function nN(e) {
    (this.commands = { state: {}, exec: {}, value: {} }),
      (this.editor = e),
      this.setupCommands(e);
  }
  var rN = "data-mce-contenteditable",
    oN = function (e, t, n) {
      Ka(e, t) && !1 === n
        ? (function (e, t) {
            Ha(e) ? e.dom().classList.remove(t) : qa(e, t);
            Wa(e);
          })(e, t)
        : n && $a(e, t);
    },
    iN = function (e, t, n) {
      try {
        e.getDoc().execCommand(t, !1, n);
      } catch (r) {}
    },
    aN = function (e, t) {
      e.dom().contentEditable = t ? "true" : "false";
    },
    uN = function (e, t) {
      var n,
        r,
        o,
        i = Ct.fromDom(e.getBody());
      oN(i, "mce-content-readonly", t),
        t
          ? (e.selection.controlSelection.hideResizeRect(),
            e._selectionOverrides.hideFakeCaret(),
            (o = e),
            B.from(o.selection.getNode()).each(function (e) {
              e.removeAttribute("data-mce-selected");
            }),
            (e.readonly = !0),
            aN(i, !1),
            z(Ya(i, '*[contenteditable="true"]'), function (e) {
              Pn(e, rN, "true"), aN(e, !1);
            }))
          : ((e.readonly = !1),
            aN(i, !0),
            z(Ya(i, "*[" + rN + '="true"]'), function (e) {
              Mn(e, rN), aN(e, !0);
            }),
            iN(e, "StyleWithCSS", !1),
            iN(e, "enableInlineTableEditing", !1),
            iN(e, "enableObjectResizing", !1),
            (Ym((r = e)) || Xm(r)) && e.focus(),
            (n = e).selection.setRng(n.selection.getRng()),
            e.nodeChanged());
    },
    sN = function (e) {
      return e.readonly;
    },
    cN = function (t) {
      t.parser.addAttributeFilter("contenteditable", function (e) {
        sN(t) &&
          z(e, function (e) {
            e.attr(rN, e.attr("contenteditable")),
              e.attr("contenteditable", "false");
          });
      }),
        t.serializer.addAttributeFilter(rN, function (e) {
          sN(t) &&
            z(e, function (e) {
              e.attr("contenteditable", e.attr(rN));
            });
        }),
        t.serializer.addTempAttr(rN);
    },
    lN = yt.makeMap(
      "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel",
      " "
    ),
    fN =
      ((dN.isNative = function (e) {
        return !!lN[e.toLowerCase()];
      }),
      (dN.prototype.fire = function (e, t) {
        (e = e.toLowerCase()),
          ((t = t || {}).type = e),
          t.target || (t.target = this.scope),
          t.preventDefault ||
            ((t.preventDefault = function () {
              t.isDefaultPrevented = h;
            }),
            (t.stopPropagation = function () {
              t.isPropagationStopped = h;
            }),
            (t.stopImmediatePropagation = function () {
              t.isImmediatePropagationStopped = h;
            }),
            (t.isDefaultPrevented = g),
            (t.isPropagationStopped = g),
            (t.isImmediatePropagationStopped = g)),
          this.settings.beforeFire && this.settings.beforeFire(t);
        var n = this.bindings[e];
        if (n)
          for (var r = 0, o = n.length; r < o; r++) {
            var i = n[r];
            if (
              (i.once && this.off(e, i.func), t.isImmediatePropagationStopped())
            )
              return t.stopPropagation(), t;
            if (!1 === i.func.call(this.scope, t)) return t.preventDefault(), t;
          }
        return t;
      }),
      (dN.prototype.on = function (e, t, n, r) {
        var o, i, a;
        if ((!1 === t && (t = g), t)) {
          var u = { func: t };
          for (
            r && yt.extend(u, r), a = (i = e.toLowerCase().split(" ")).length;
            a--;

          )
            (e = i[a]),
              (o = this.bindings[e]) ||
                ((o = this.bindings[e] = []), this.toggleEvent(e, !0)),
              n ? o.unshift(u) : o.push(u);
        }
        return this;
      }),
      (dN.prototype.off = function (e, t) {
        var n,
          r,
          o,
          i,
          a = this;
        if (e)
          for (n = (o = e.toLowerCase().split(" ")).length; n--; ) {
            if (((e = o[n]), (r = this.bindings[e]), !e))
              return (
                oe(this.bindings, function (e, t) {
                  a.toggleEvent(t, !1), delete a.bindings[t];
                }),
                this
              );
            if (r) {
              if (t)
                for (i = r.length; i--; )
                  r[i].func === t &&
                    ((r = r.slice(0, i).concat(r.slice(i + 1))),
                    (this.bindings[e] = r));
              else r.length = 0;
              r.length || (this.toggleEvent(e, !1), delete this.bindings[e]);
            }
          }
        else
          oe(this.bindings, function (e, t) {
            a.toggleEvent(t, !1);
          }),
            (this.bindings = {});
        return this;
      }),
      (dN.prototype.once = function (e, t, n) {
        return this.on(e, t, n, { once: !0 });
      }),
      (dN.prototype.has = function (e) {
        return (
          (e = e.toLowerCase()),
          !(!this.bindings[e] || 0 === this.bindings[e].length)
        );
      }),
      dN);
  function dN(e) {
    (this.bindings = {}),
      (this.settings = e || {}),
      (this.scope = this.settings.scope || this),
      (this.toggleEvent = this.settings.toggleEvent || g);
  }
  var mN,
    pN = function (n) {
      return (
        n._eventDispatcher ||
          (n._eventDispatcher = new fN({
            scope: n,
            toggleEvent: function (e, t) {
              fN.isNative(e) &&
                n.toggleNativeEvent &&
                n.toggleNativeEvent(e, t);
            },
          })),
        n._eventDispatcher
      );
    },
    gN = {
      fire: function (e, t, n) {
        if (this.removed && "remove" !== e && "detach" !== e) return t;
        var r = pN(this).fire(e, t);
        if (!1 !== n && this.parent)
          for (var o = this.parent(); o && !r.isPropagationStopped(); )
            o.fire(e, r, !1), (o = o.parent());
        return r;
      },
      on: function (e, t, n) {
        return pN(this).on(e, t, n);
      },
      off: function (e, t) {
        return pN(this).off(e, t);
      },
      once: function (e, t) {
        return pN(this).once(e, t);
      },
      hasEventListeners: function (e) {
        return pN(this).has(e);
      },
    },
    hN = Ea.DOM,
    vN = function (e, t) {
      if ("selectionchange" === t) return e.getDoc();
      if (
        !e.inline &&
        /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)
      )
        return e.getDoc().documentElement;
      var n = rc(e);
      return n
        ? (e.eventRoot || (e.eventRoot = hN.select(n)[0]), e.eventRoot)
        : e.getBody();
    },
    yN = function (e, t, n) {
      var r, o, i, a, u;
      (u = e).hidden || sN(u)
        ? sN(e) &&
          ((r = e),
          (a = (o = n).target),
          "click" !== o.type ||
            vv.metaKeyPressed(o) ||
            ((i = a), null === r.dom.getParent(i, "a")) ||
            o.preventDefault())
        : e.fire(t, n);
    },
    bN = function (i, a) {
      var e;
      if ((i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed)) {
        var t = vN(i, a);
        if (rc(i)) {
          if (
            (mN ||
              ((mN = {}),
              i.editorManager.on("removeEditor", function () {
                i.editorManager.activeEditor ||
                  (mN &&
                    (oe(mN, function (e, t) {
                      i.dom.unbind(vN(i, t));
                    }),
                    (mN = null)));
              })),
            mN[a])
          )
            return;
          (e = function (e) {
            for (
              var t = e.target, n = i.editorManager.get(), r = n.length;
              r--;

            ) {
              var o = n[r].getBody();
              (o !== t && !hN.isChildOf(t, o)) || yN(n[r], a, e);
            }
          }),
            (mN[a] = e),
            hN.bind(t, a, e);
        } else
          (e = function (e) {
            yN(i, a, e);
          }),
            hN.bind(t, a, e),
            (i.delegates[a] = e);
      }
    },
    CN = xe(xe({}, gN), {
      bindPendingEventDelegates: function () {
        var t = this;
        yt.each(t._pendingNativeEvents, function (e) {
          bN(t, e);
        });
      },
      toggleNativeEvent: function (e, t) {
        var n = this;
        "focus" !== e &&
          "blur" !== e &&
          (t
            ? n.initialized
              ? bN(n, e)
              : n._pendingNativeEvents
              ? n._pendingNativeEvents.push(e)
              : (n._pendingNativeEvents = [e])
            : n.initialized &&
              (n.dom.unbind(vN(n, e), e, n.delegates[e]),
              delete n.delegates[e]));
      },
      unbindAllNativeEvents: function () {
        var n = this,
          e = n.getBody(),
          t = n.dom;
        n.delegates &&
          (oe(n.delegates, function (e, t) {
            n.dom.unbind(vN(n, t), t, e);
          }),
          delete n.delegates),
          !n.inline &&
            e &&
            t &&
            ((e.onload = null), t.unbind(n.getWin()), t.unbind(n.getDoc())),
          t && (t.unbind(e), t.unbind(n.getContainer()));
      },
    }),
    wN = ["design", "readonly"],
    xN = function (e, t, n, r) {
      var o,
        i = n[t.get()],
        a = n[r];
      try {
        a.activate();
      } catch (LE) {
        return void V.console.error(
          "problem while activating editor mode " + r + ":",
          LE
        );
      }
      i.deactivate(),
        i.editorReadOnly !== a.editorReadOnly && uN(e, a.editorReadOnly),
        t.set(r),
        (o = r),
        e.fire("SwitchMode", { mode: o });
    },
    SN = function (t) {
      var e,
        n,
        r = Oa("design"),
        o = Oa({
          design: { activate: f, deactivate: f, editorReadOnly: !1 },
          readonly: { activate: f, deactivate: f, editorReadOnly: !0 },
        });
      return (
        (e = t).serializer
          ? cN(e)
          : e.on("PreInit", function () {
              cN(e);
            }),
        (n = t).on("ShowCaret", function (e) {
          sN(n) && e.preventDefault();
        }),
        n.on("ObjectSelected", function (e) {
          sN(n) && e.preventDefault();
        }),
        {
          isReadOnly: function () {
            return sN(t);
          },
          set: function (e) {
            return (function (e, t, n, r) {
              if (r !== n.get()) {
                if (!me(t, r))
                  throw new Error("Editor mode '" + r + "' is invalid");
                e.initialized
                  ? xN(e, n, t, r)
                  : e.on("init", function () {
                      return xN(e, n, t, r);
                    });
              }
            })(t, o.get(), r, e);
          },
          get: function () {
            return r.get();
          },
          register: function (e, t) {
            o.set(
              (function (e, t, n) {
                var r;
                if (M(wN, t))
                  throw new Error("Cannot override default mode " + t);
                return xe(
                  xe({}, e),
                  (((r = {})[t] = xe(xe({}, n), {
                    deactivate: function () {
                      try {
                        n.deactivate();
                      } catch (LE) {
                        V.console.error(
                          "problem while deactivating editor mode " + t + ":",
                          LE
                        );
                      }
                    },
                  })),
                  r)
                );
              })(o.get(), e, t)
            );
          },
        }
      );
    },
    NN = yt.each,
    EN = yt.explode,
    kN = {
      f1: 112,
      f2: 113,
      f3: 114,
      f4: 115,
      f5: 116,
      f6: 117,
      f7: 118,
      f8: 119,
      f9: 120,
      f10: 121,
      f11: 122,
      f12: 123,
    },
    _N = yt.makeMap("alt,ctrl,shift,meta,access"),
    TN =
      ((RN.prototype.add = function (e, n, r, o) {
        var i = this,
          t = r;
        return (
          "string" == typeof t
            ? (r = function () {
                i.editor.execCommand(t, !1, null);
              })
            : yt.isArray(t) &&
              (r = function () {
                i.editor.execCommand(t[0], t[1], t[2]);
              }),
          NN(EN(yt.trim(e)), function (e) {
            var t = i.createShortcut(e, n, r, o);
            i.shortcuts[t.id] = t;
          }),
          !0
        );
      }),
      (RN.prototype.remove = function (e) {
        var t = this.createShortcut(e);
        return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
      }),
      (RN.prototype.parseShortcut = function (e) {
        var t,
          n = {};
        NN(EN(e.toLowerCase(), "+"), function (e) {
          e in _N
            ? (n[e] = !0)
            : /^[0-9]{2,}$/.test(e)
            ? (n.keyCode = parseInt(e, 10))
            : ((n.charCode = e.charCodeAt(0)),
              (n.keyCode = kN[e] || e.toUpperCase().charCodeAt(0)));
        });
        var r = [n.keyCode];
        for (t in _N) n[t] ? r.push(t) : (n[t] = !1);
        return (
          (n.id = r.join(",")),
          n.access && ((n.alt = !0), mt.mac ? (n.ctrl = !0) : (n.shift = !0)),
          n.meta && (mt.mac ? (n.meta = !0) : ((n.ctrl = !0), (n.meta = !1))),
          n
        );
      }),
      (RN.prototype.createShortcut = function (e, t, n, r) {
        var o = yt.map(EN(e, ">"), this.parseShortcut);
        return (
          (o[o.length - 1] = yt.extend(o[o.length - 1], {
            func: n,
            scope: r || this.editor,
          })),
          yt.extend(o[0], {
            desc: this.editor.translate(t),
            subpatterns: o.slice(1),
          })
        );
      }),
      (RN.prototype.hasModifier = function (e) {
        return e.altKey || e.ctrlKey || e.metaKey;
      }),
      (RN.prototype.isFunctionKey = function (e) {
        return "keydown" === e.type && 112 <= e.keyCode && e.keyCode <= 123;
      }),
      (RN.prototype.matchShortcut = function (e, t) {
        return (
          !!t &&
          t.ctrl === e.ctrlKey &&
          t.meta === e.metaKey &&
          t.alt === e.altKey &&
          t.shift === e.shiftKey &&
          !!(
            e.keyCode === t.keyCode ||
            (e.charCode && e.charCode === t.charCode)
          ) &&
          (e.preventDefault(), !0)
        );
      }),
      (RN.prototype.executeShortcutAction = function (e) {
        return e.func ? e.func.call(e.scope) : null;
      }),
      RN);
  function RN(e) {
    (this.shortcuts = {}), (this.pendingPatterns = []), (this.editor = e);
    var n = this;
    e.on("keyup keypress keydown", function (t) {
      (!n.hasModifier(t) && !n.isFunctionKey(t)) ||
        t.isDefaultPrevented() ||
        (NN(n.shortcuts, function (e) {
          if (n.matchShortcut(t, e))
            return (
              (n.pendingPatterns = e.subpatterns.slice(0)),
              "keydown" === t.type && n.executeShortcutAction(e),
              !0
            );
        }),
        n.matchShortcut(t, n.pendingPatterns[0]) &&
          (1 === n.pendingPatterns.length &&
            "keydown" === t.type &&
            n.executeShortcutAction(n.pendingPatterns[0]),
          n.pendingPatterns.shift()));
    });
  }
  var AN = function () {
      var e,
        t,
        n,
        r,
        o,
        i,
        a,
        u,
        s =
          ((t = {}),
          (n = {}),
          (r = {}),
          (o = {}),
          (i = {}),
          (a = {}),
          {
            addButton: (u = function (n, r) {
              return function (e, t) {
                return (n[e.toLowerCase()] = xe(xe({}, t), { type: r }));
              };
            })((e = {}), "button"),
            addGroupToolbarButton: u(e, "grouptoolbarbutton"),
            addToggleButton: u(e, "togglebutton"),
            addMenuButton: u(e, "menubutton"),
            addSplitButton: u(e, "splitbutton"),
            addMenuItem: u(t, "menuitem"),
            addNestedMenuItem: u(t, "nestedmenuitem"),
            addToggleMenuItem: u(t, "togglemenuitem"),
            addAutocompleter: u(n, "autocompleter"),
            addContextMenu: u(o, "contextmenu"),
            addContextToolbar: u(i, "contexttoolbar"),
            addContextForm: u(i, "contextform"),
            addSidebar: u(a, "sidebar"),
            addIcon: function (e, t) {
              return (r[e.toLowerCase()] = t);
            },
            getAll: function () {
              return {
                buttons: e,
                menuItems: t,
                icons: r,
                popups: n,
                contextMenus: o,
                contextToolbars: i,
                sidebars: a,
              };
            },
          });
      return {
        addAutocompleter: s.addAutocompleter,
        addButton: s.addButton,
        addContextForm: s.addContextForm,
        addContextMenu: s.addContextMenu,
        addContextToolbar: s.addContextToolbar,
        addIcon: s.addIcon,
        addMenuButton: s.addMenuButton,
        addMenuItem: s.addMenuItem,
        addNestedMenuItem: s.addNestedMenuItem,
        addSidebar: s.addSidebar,
        addSplitButton: s.addSplitButton,
        addToggleButton: s.addToggleButton,
        addGroupToolbarButton: s.addGroupToolbarButton,
        addToggleMenuItem: s.addToggleMenuItem,
        getAll: s.getAll,
      };
    },
    DN = yt.each,
    ON = yt.trim,
    BN = "source protocol authority userInfo user password host port relative path directory file query anchor".split(
      " "
    ),
    PN = { ftp: 21, http: 80, https: 443, mailto: 25 },
    LN =
      ((IN.parseDataUri = function (e) {
        var t,
          n = decodeURIComponent(e).split(","),
          r = /data:([^;]+)/.exec(n[0]);
        return r && (t = r[1]), { type: t, data: n[1] };
      }),
      (IN.getDocumentBaseUrl = function (e) {
        var t;
        return (
          (t =
            0 !== e.protocol.indexOf("http") && "file:" !== e.protocol
              ? e.href
              : e.protocol + "//" + e.host + e.pathname),
          /^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
            ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
            /[\/\\]$/.test(t) || (t += "/")),
          t
        );
      }),
      (IN.prototype.setPath = function (e) {
        var t = /^(.*?)\/?(\w+)?$/.exec(e);
        (this.path = t[0]),
          (this.directory = t[1]),
          (this.file = t[2]),
          (this.source = ""),
          this.getURI();
      }),
      (IN.prototype.toRelative = function (e) {
        var t;
        if ("./" === e) return e;
        var n = new IN(e, { base_uri: this });
        if (
          ("mce_host" !== n.host && this.host !== n.host && n.host) ||
          this.port !== n.port ||
          (this.protocol !== n.protocol && "" !== n.protocol)
        )
          return n.getURI();
        var r = this.getURI(),
          o = n.getURI();
        return r === o ||
          ("/" === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o)
          ? r
          : ((t = this.toRelPath(this.path, n.path)),
            n.query && (t += "?" + n.query),
            n.anchor && (t += "#" + n.anchor),
            t);
      }),
      (IN.prototype.toAbsolute = function (e, t) {
        var n = new IN(e, { base_uri: this });
        return n.getURI(t && this.isSameOrigin(n));
      }),
      (IN.prototype.isSameOrigin = function (e) {
        if (this.host == e.host && this.protocol == e.protocol) {
          if (this.port == e.port) return !0;
          var t = PN[this.protocol];
          if (t && (this.port || t) == (e.port || t)) return !0;
        }
        return !1;
      }),
      (IN.prototype.toRelPath = function (e, t) {
        var n,
          r,
          o = 0,
          i = "",
          a = e.substring(0, e.lastIndexOf("/")).split("/"),
          u = t.split("/");
        if (a.length >= u.length)
          for (n = 0, r = a.length; n < r; n++)
            if (n >= u.length || a[n] !== u[n]) {
              o = n + 1;
              break;
            }
        if (a.length < u.length)
          for (n = 0, r = u.length; n < r; n++)
            if (n >= a.length || a[n] !== u[n]) {
              o = n + 1;
              break;
            }
        if (1 === o) return t;
        for (n = 0, r = a.length - (o - 1); n < r; n++) i += "../";
        for (n = o - 1, r = u.length; n < r; n++)
          i += n !== o - 1 ? "/" + u[n] : u[n];
        return i;
      }),
      (IN.prototype.toAbsPath = function (e, t) {
        var n,
          r,
          o = 0,
          i = [],
          a = /\/$/.test(t) ? "/" : "",
          u = e.split("/"),
          s = t.split("/");
        for (
          DN(u, function (e) {
            e && i.push(e);
          }),
            u = i,
            n = s.length - 1,
            i = [];
          0 <= n;
          n--
        )
          0 !== s[n].length &&
            "." !== s[n] &&
            (".." !== s[n] ? (0 < o ? o-- : i.push(s[n])) : o++);
        return (
          0 !==
            (r =
              (n = u.length - o) <= 0
                ? J(i).join("/")
                : u.slice(0, n).join("/") + "/" + J(i).join("/")).indexOf(
              "/"
            ) && (r = "/" + r),
          a && r.lastIndexOf("/") !== r.length - 1 && (r += a),
          r
        );
      }),
      (IN.prototype.getURI = function (e) {
        var t;
        return (
          void 0 === e && (e = !1),
          (this.source && !e) ||
            ((t = ""),
            e ||
              (this.protocol ? (t += this.protocol + "://") : (t += "//"),
              this.userInfo && (t += this.userInfo + "@"),
              this.host && (t += this.host),
              this.port && (t += ":" + this.port)),
            this.path && (t += this.path),
            this.query && (t += "?" + this.query),
            this.anchor && (t += "#" + this.anchor),
            (this.source = t)),
          this.source
        );
      }),
      IN);
  function IN(e, t) {
    (e = ON(e)), (this.settings = t || {});
    var n = this.settings.base_uri,
      r = this;
    if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) r.source = e;
    else {
      var o = 0 === e.indexOf("//");
      if (
        (0 !== e.indexOf("/") ||
          o ||
          (e = ((n && n.protocol) || "http") + "://mce_host" + e),
        !/^[\w\-]*:?\/\//.test(e))
      ) {
        var i = this.settings.base_uri
          ? this.settings.base_uri.path
          : new IN(V.document.location.href).directory;
        if (this.settings.base_uri && "" == this.settings.base_uri.protocol)
          e = "//mce_host" + r.toAbsPath(i, e);
        else {
          var a = /([^#?]*)([#?]?.*)/.exec(e);
          e =
            ((n && n.protocol) || "http") +
            "://mce_host" +
            r.toAbsPath(i, a[1]) +
            a[2];
        }
      }
      e = e.replace(/@@/g, "(mce_at)");
      var u = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
        e
      );
      DN(BN, function (e, t) {
        var n = u[t];
        (n = n && n.replace(/\(mce_at\)/g, "@@")), (r[e] = n);
      }),
        n &&
          (r.protocol || (r.protocol = n.protocol),
          r.userInfo || (r.userInfo = n.userInfo),
          r.port || "mce_host" !== r.host || (r.port = n.port),
          (r.host && "mce_host" !== r.host) || (r.host = n.host),
          (r.source = "")),
        o && (r.protocol = "");
    }
  }
  var MN = Ea.DOM,
    FN = yt.extend,
    UN = yt.each,
    zN = yt.resolve,
    jN = mt.ie,
    HN =
      ((VN.prototype.render = function () {
        FS(this);
      }),
      (VN.prototype.focus = function (e) {
        var t, n;
        (n = e), (t = this).removed || (n ? Jm : Gm)(t);
      }),
      (VN.prototype.hasFocus = function () {
        return Ym(this);
      }),
      (VN.prototype.execCallback = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r,
          o = this.settings[e];
        if (o)
          return (
            this.callbackLookup &&
              (r = this.callbackLookup[e]) &&
              ((o = r.func), (r = r.scope)),
            "string" == typeof o &&
              ((r = (r = o.replace(/\.\w+$/, "")) ? zN(r) : 0),
              (o = zN(o)),
              (this.callbackLookup = this.callbackLookup || {}),
              (this.callbackLookup[e] = { func: o, scope: r })),
            o.apply(r || this, t)
          );
      }),
      (VN.prototype.translate = function (e) {
        return Ia.translate(e);
      }),
      (VN.prototype.getParam = function (e, t, n) {
        return sh(this, e, t, n);
      }),
      (VN.prototype.nodeChanged = function (e) {
        this._nodeChangeDispatcher.nodeChanged(e);
      }),
      (VN.prototype.addCommand = function (e, t, n) {
        this.editorCommands.addCommand(e, t, n);
      }),
      (VN.prototype.addQueryStateHandler = function (e, t, n) {
        this.editorCommands.addQueryStateHandler(e, t, n);
      }),
      (VN.prototype.addQueryValueHandler = function (e, t, n) {
        this.editorCommands.addQueryValueHandler(e, t, n);
      }),
      (VN.prototype.addShortcut = function (e, t, n, r) {
        this.shortcuts.add(e, t, n, r);
      }),
      (VN.prototype.execCommand = function (e, t, n, r) {
        return this.editorCommands.execCommand(e, t, n, r);
      }),
      (VN.prototype.queryCommandState = function (e) {
        return this.editorCommands.queryCommandState(e);
      }),
      (VN.prototype.queryCommandValue = function (e) {
        return this.editorCommands.queryCommandValue(e);
      }),
      (VN.prototype.queryCommandSupported = function (e) {
        return this.editorCommands.queryCommandSupported(e);
      }),
      (VN.prototype.show = function () {
        this.hidden &&
          ((this.hidden = !1),
          this.inline
            ? (this.getBody().contentEditable = "true")
            : (MN.show(this.getContainer()), MN.hide(this.id)),
          this.load(),
          this.fire("show"));
      }),
      (VN.prototype.hide = function () {
        var e = this,
          t = e.getDoc();
        e.hidden ||
          (jN && t && !e.inline && t.execCommand("SelectAll"),
          e.save(),
          e.inline
            ? ((e.getBody().contentEditable = "false"),
              e === e.editorManager.focusedEditor &&
                (e.editorManager.focusedEditor = null))
            : (MN.hide(e.getContainer()),
              MN.setStyle(e.id, "display", e.orgDisplay)),
          (e.hidden = !0),
          e.fire("hide"));
      }),
      (VN.prototype.isHidden = function () {
        return !!this.hidden;
      }),
      (VN.prototype.setProgressState = function (e, t) {
        this.fire("ProgressState", { state: e, time: t });
      }),
      (VN.prototype.load = function (e) {
        var t,
          n = this.getElement();
        if (this.removed) return "";
        if (n) {
          (e = e || {}).load = !0;
          var r = Nn(n) ? n.value : n.innerHTML;
          return (
            (t = this.setContent(r, e)),
            (e.element = n),
            e.no_events || this.fire("LoadContent", e),
            (e.element = n = null),
            t
          );
        }
      }),
      (VN.prototype.save = function (e) {
        var t,
          n,
          r = this,
          o = r.getElement();
        if (o && r.initialized && !r.removed)
          return (
            ((e = e || {}).save = !0),
            (e.element = o),
            (e.content = r.getContent(e)),
            e.no_events || r.fire("SaveContent", e),
            "raw" === e.format && r.fire("RawSaveContent", e),
            (t = e.content),
            Nn(o)
              ? (o.value = t)
              : ((!e.is_removing && r.inline) || (o.innerHTML = t),
                (n = MN.getParent(r.id, "form")) &&
                  UN(n.elements, function (e) {
                    if (e.name === r.id) return (e.value = t), !1;
                  })),
            (e.element = o = null),
            !1 !== e.set_dirty && r.setDirty(!1),
            t
          );
      }),
      (VN.prototype.setContent = function (e, t) {
        return jg(this, e, t);
      }),
      (VN.prototype.getContent = function (e) {
        return zg(this, e);
      }),
      (VN.prototype.insertContent = function (e, t) {
        t && (e = FN({ content: e }, t)),
          this.execCommand("mceInsertContent", !1, e);
      }),
      (VN.prototype.resetContent = function (e) {
        e === undefined
          ? jg(this, this.startContent, { format: "raw" })
          : jg(this, e),
          this.undoManager.reset(),
          this.setDirty(!1),
          this.nodeChanged();
      }),
      (VN.prototype.isDirty = function () {
        return !this.isNotDirty;
      }),
      (VN.prototype.setDirty = function (e) {
        var t = !this.isNotDirty;
        (this.isNotDirty = !e), e && e !== t && this.fire("dirty");
      }),
      (VN.prototype.getContainer = function () {
        return (
          this.container ||
            (this.container = MN.get(
              this.editorContainer || this.id + "_parent"
            )),
          this.container
        );
      }),
      (VN.prototype.getContentAreaContainer = function () {
        return this.contentAreaContainer;
      }),
      (VN.prototype.getElement = function () {
        return (
          this.targetElm || (this.targetElm = MN.get(this.id)), this.targetElm
        );
      }),
      (VN.prototype.getWin = function () {
        var e;
        return (
          this.contentWindow ||
            ((e = this.iframeElement) &&
              (this.contentWindow = e.contentWindow)),
          this.contentWindow
        );
      }),
      (VN.prototype.getDoc = function () {
        var e;
        return (
          this.contentDocument ||
            ((e = this.getWin()) && (this.contentDocument = e.document)),
          this.contentDocument
        );
      }),
      (VN.prototype.getBody = function () {
        var e = this.getDoc();
        return this.bodyElement || (e ? e.body : null);
      }),
      (VN.prototype.convertURL = function (e, t, n) {
        var r = this.settings;
        return r.urlconverter_callback
          ? this.execCallback("urlconverter_callback", e, n, !0, t)
          : !r.convert_urls ||
            (n && "LINK" === n.nodeName) ||
            0 === e.indexOf("file:") ||
            0 === e.length
          ? e
          : r.relative_urls
          ? this.documentBaseURI.toRelative(e)
          : (e = this.documentBaseURI.toAbsolute(e, r.remove_script_host));
      }),
      (VN.prototype.addVisual = function (e) {
        var n,
          r = this,
          o = r.settings,
          i = r.dom;
        (e = e || r.getBody()),
          r.hasVisual === undefined && (r.hasVisual = o.visual),
          UN(i.select("table,a", e), function (e) {
            var t;
            switch (e.nodeName) {
              case "TABLE":
                return (
                  (n = o.visual_table_class || "mce-item-table"),
                  void (((t = i.getAttrib(e, "border")) && "0" !== t) ||
                  !r.hasVisual
                    ? i.removeClass(e, n)
                    : i.addClass(e, n))
                );
              case "A":
                return void (
                  i.getAttrib(e, "href") ||
                  ((t = i.getAttrib(e, "name") || e.id),
                  (n = o.visual_anchor_class || "mce-item-anchor"),
                  t && r.hasVisual ? i.addClass(e, n) : i.removeClass(e, n))
                );
            }
          }),
          r.fire("VisualAid", { element: e, hasVisual: r.hasVisual });
      }),
      (VN.prototype.remove = function () {
        qg(this);
      }),
      (VN.prototype.destroy = function (e) {
        $g(this, e);
      }),
      (VN.prototype.uploadImages = function (e) {
        return this.editorUpload.uploadImages(e);
      }),
      (VN.prototype._scanForImages = function () {
        return this.editorUpload.scanForImages();
      }),
      (VN.prototype.addButton = function () {
        throw new Error(
          "editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead"
        );
      }),
      (VN.prototype.addSidebar = function () {
        throw new Error(
          "editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead"
        );
      }),
      (VN.prototype.addMenuItem = function () {
        throw new Error(
          "editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead"
        );
      }),
      (VN.prototype.addContextToolbar = function () {
        throw new Error(
          "editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead"
        );
      }),
      VN);
  function VN(e, t, n) {
    var r = this;
    (this.plugins = {}),
      (this.contentCSS = []),
      (this.contentStyles = []),
      (this.loadedCSS = {}),
      (this.isNotDirty = !1),
      (this.editorManager = n),
      (this.documentBaseUrl = n.documentBaseURL),
      FN(this, CN),
      (this.settings = ah(this, e, this.documentBaseUrl, n.defaultSettings, t)),
      this.settings.suffix && (n.suffix = this.settings.suffix),
      (this.suffix = n.suffix),
      this.settings.base_url && n._setBaseUrl(this.settings.base_url),
      (this.baseUri = n.baseURI),
      this.settings.referrer_policy &&
        (Ra.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy),
        Ea.DOM.styleSheetLoader._setReferrerPolicy(
          this.settings.referrer_policy
        )),
      (Fa.languageLoad = this.settings.language_load),
      (Fa.baseURL = n.baseURL),
      (this.id = e),
      this.setDirty(!1),
      (this.documentBaseURI = new LN(this.settings.document_base_url, {
        base_uri: this.baseUri,
      })),
      (this.baseURI = this.baseUri),
      (this.inline = !!this.settings.inline),
      (this.shortcuts = new TN(this)),
      (this.editorCommands = new tN(this)),
      this.settings.cache_suffix &&
        (mt.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, "")),
      (this.ui = { registry: AN(), styleSheetLoader: undefined });
    var o = SN(this);
    (this.mode = o),
      (this.setMode = o.set),
      n.fire("SetupEditor", { editor: this }),
      this.execCallback("setup", this),
      (this.$ = Ri.overrideDefaults(function () {
        return {
          context: r.inline ? r.getBody() : r.getDoc(),
          element: r.getBody(),
        };
      }));
  }
  var qN,
    $N,
    WN = Ea.DOM,
    KN = yt.explode,
    XN = yt.each,
    YN = yt.extend,
    GN = 0,
    JN = !1,
    QN = [],
    ZN = [],
    eE = function (t) {
      var n = t.type;
      XN(oE.get(), function (e) {
        switch (n) {
          case "scroll":
            e.fire("ScrollWindow", t);
            break;
          case "resize":
            e.fire("ResizeWindow", t);
        }
      });
    },
    tE = function (e) {
      e !== JN &&
        (e
          ? Ri(window).on("resize scroll", eE)
          : Ri(window).off("resize scroll", eE),
        (JN = e));
    },
    nE = function (t) {
      var e = ZN;
      delete QN[t.id];
      for (var n = 0; n < QN.length; n++)
        if (QN[n] === t) {
          QN.splice(n, 1);
          break;
        }
      return (
        (ZN = H(ZN, function (e) {
          return t !== e;
        })),
        oE.activeEditor === t &&
          (oE.activeEditor = 0 < ZN.length ? ZN[0] : null),
        oE.focusedEditor === t && (oE.focusedEditor = null),
        e.length !== ZN.length
      );
    },
    rE = "CSS1Compat" !== V.document.compatMode,
    oE = xe(xe({}, gN), {
      baseURI: null,
      baseURL: null,
      defaultSettings: {},
      documentBaseURL: null,
      suffix: null,
      $: Ri,
      majorVersion: "5",
      minorVersion: "4.1",
      releaseDate: "2020-07-08",
      editors: QN,
      i18n: Ia,
      activeEditor: null,
      focusedEditor: null,
      settings: {},
      setup: function () {
        var e,
          t,
          n = "";
        (t = LN.getDocumentBaseUrl(V.document.location)),
          /^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
            ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
            /[\/\\]$/.test(t) || (t += "/"));
        var r,
          o = window.tinymce || window.tinyMCEPreInit;
        if (o) (e = o.base || o.baseURL), (n = o.suffix);
        else {
          for (
            var i = V.document.getElementsByTagName("script"), a = 0;
            a < i.length;
            a++
          ) {
            var u;
            if ("" !== (u = i[a].src || "")) {
              var s = u.substring(u.lastIndexOf("/"));
              if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(u)) {
                -1 !== s.indexOf(".min") && (n = ".min"),
                  (e = u.substring(0, u.lastIndexOf("/")));
                break;
              }
            }
          }
          if (!e && V.document.currentScript)
            -1 !== (u = V.document.currentScript.src).indexOf(".min") &&
              (n = ".min"),
              (e = u.substring(0, u.lastIndexOf("/")));
        }
        (this.baseURL = new LN(t).toAbsolute(e)),
          (this.documentBaseURL = t),
          (this.baseURI = new LN(this.baseURL)),
          (this.suffix = n),
          (r = this).on("AddEditor", N(Hm, r)),
          r.on("RemoveEditor", N(Vm, r));
      },
      overrideDefaults: function (e) {
        var t = e.base_url;
        t && this._setBaseUrl(t);
        var n = e.suffix;
        e.suffix && (this.suffix = n);
        var r = (this.defaultSettings = e).plugin_base_urls;
        r !== undefined &&
          oe(r, function (e, t) {
            Fa.PluginManager.urls[t] = e;
          });
      },
      init: function (r) {
        var n,
          u = this,
          s = yt.makeMap(
            "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
            " "
          ),
          c = function (e) {
            var t = e.id;
            return (
              t ||
                ((t = de(e, "name")
                  .filter(function (e) {
                    return !WN.get(e);
                  })
                  .getOrThunk(WN.uniqueId)),
                e.setAttribute("id", t)),
              t
            );
          },
          l = function (e, t) {
            return t.constructor === RegExp
              ? t.test(e.className)
              : WN.hasClass(e, t);
          },
          f = function (e) {
            n = e;
          },
          e = function () {
            var o,
              i = 0,
              a = [],
              n = function (e, t, n) {
                var r = new HN(e, t, u);
                a.push(r),
                  r.on("init", function () {
                    ++i === o.length && f(a);
                  }),
                  (r.targetElm = r.targetElm || n),
                  r.render();
              };
            WN.unbind(window, "ready", e),
              (function (e) {
                var t = r[e];
                if (t) t.apply(u, Array.prototype.slice.call(arguments, 2));
              })("onpageload"),
              (o = Ri.unique(
                (function (t) {
                  var n = [];
                  if (mt.browser.isIE() && mt.browser.version.major < 11)
                    return (
                      _h(
                        "TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"
                      ),
                      []
                    );
                  if (rE)
                    return (
                      _h(
                        "Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."
                      ),
                      []
                    );
                  if (t.types)
                    return (
                      XN(t.types, function (e) {
                        n = n.concat(WN.select(e.selector));
                      }),
                      n
                    );
                  if (t.selector) return WN.select(t.selector);
                  if (t.target) return [t.target];
                  switch (t.mode) {
                    case "exact":
                      var e = t.elements || "";
                      0 < e.length &&
                        XN(KN(e), function (t) {
                          var e = WN.get(t);
                          e
                            ? n.push(e)
                            : XN(V.document.forms, function (e) {
                                XN(e.elements, function (e) {
                                  e.name === t &&
                                    ((t = "mce_editor_" + GN++),
                                    WN.setAttrib(e, "id", t),
                                    n.push(e));
                                });
                              });
                        });
                      break;
                    case "textareas":
                    case "specific_textareas":
                      XN(WN.select("textarea"), function (e) {
                        (t.editor_deselector && l(e, t.editor_deselector)) ||
                          (t.editor_selector && !l(e, t.editor_selector)) ||
                          n.push(e);
                      });
                  }
                  return n;
                })(r)
              )),
              r.types
                ? XN(r.types, function (t) {
                    yt.each(o, function (e) {
                      return (
                        !WN.is(e, t.selector) || (n(c(e), YN({}, r, t), e), !1)
                      );
                    });
                  })
                : (yt.each(o, function (e) {
                    var t;
                    (t = u.get(e.id)) &&
                      t.initialized &&
                      !(t.getContainer() || t.getBody()).parentNode &&
                      (nE(t),
                      t.unbindAllNativeEvents(),
                      t.destroy(!0),
                      (t.removed = !0),
                      (t = null));
                  }),
                  0 ===
                  (o = yt.grep(o, function (e) {
                    return !u.get(e.id);
                  })).length
                    ? f([])
                    : XN(o, function (e) {
                        var t;
                        (t = e),
                          r.inline && t.tagName.toLowerCase() in s
                            ? _h(
                                "Could not initialize inline editor on invalid inline target element",
                                e
                              )
                            : n(c(e), r, e);
                      }));
          };
        return (
          (u.settings = r),
          WN.bind(window, "ready", e),
          new ea(function (t) {
            n
              ? t(n)
              : (f = function (e) {
                  t(e);
                });
          })
        );
      },
      get: function (t) {
        return 0 === arguments.length
          ? ZN.slice(0)
          : q(t)
          ? K(ZN, function (e) {
              return e.id === t;
            }).getOr(null)
          : D(t) && ZN[t]
          ? ZN[t]
          : null;
      },
      add: function (e) {
        var n = this;
        return (
          QN[e.id] === e ||
            (null === n.get(e.id) &&
              ("length" !== e.id && (QN[e.id] = e), QN.push(e), ZN.push(e)),
            tE(!0),
            (n.activeEditor = e),
            n.fire("AddEditor", { editor: e }),
            qN ||
              ((qN = function (e) {
                var t = n.fire("BeforeUnload");
                if (t.returnValue)
                  return (
                    e.preventDefault(),
                    (e.returnValue = t.returnValue),
                    t.returnValue
                  );
              }),
              window.addEventListener("beforeunload", qN))),
          e
        );
      },
      createEditor: function (e, t) {
        return this.add(new HN(e, t, this));
      },
      remove: function (e) {
        var t,
          n,
          r = this;
        if (e) {
          if (!q(e))
            return (
              (n = e),
              _(r.get(n.id))
                ? null
                : (nE(n) && r.fire("RemoveEditor", { editor: n }),
                  0 === ZN.length &&
                    window.removeEventListener("beforeunload", qN),
                  n.remove(),
                  tE(0 < ZN.length),
                  n)
            );
          XN(WN.select(e), function (e) {
            (n = r.get(e.id)) && r.remove(n);
          });
        } else for (t = ZN.length - 1; 0 <= t; t--) r.remove(ZN[t]);
      },
      execCommand: function (e, t, n) {
        var r = this.get(n);
        switch (e) {
          case "mceAddEditor":
            return this.get(n) || new HN(n, this.settings, this).render(), !0;
          case "mceRemoveEditor":
            return r && r.remove(), !0;
          case "mceToggleEditor":
            return r
              ? (r.isHidden() ? r.show() : r.hide(), !0)
              : (this.execCommand("mceAddEditor", 0, n), !0);
        }
        return !!this.activeEditor && this.activeEditor.execCommand(e, t, n);
      },
      triggerSave: function () {
        XN(ZN, function (e) {
          e.save();
        });
      },
      addI18n: function (e, t) {
        Ia.add(e, t);
      },
      translate: function (e) {
        return Ia.translate(e);
      },
      setActive: function (e) {
        var t = this.activeEditor;
        this.activeEditor !== e &&
          (t && t.fire("deactivate", { relatedTarget: e }),
          e.fire("activate", { relatedTarget: t })),
          (this.activeEditor = e);
      },
      _setBaseUrl: function (e) {
        (this.baseURL = new LN(this.documentBaseURL).toAbsolute(
          e.replace(/\/+$/, "")
        )),
          (this.baseURI = new LN(this.baseURL));
      },
    });
  function iE(n) {
    return {
      walk: function (e, t) {
        return rf(n, e, t);
      },
      split: op,
      normalize: function (t) {
        return lv(n, t).fold(x(!1), function (e) {
          return (
            t.setStart(e.startContainer, e.startOffset),
            t.setEnd(e.endContainer, e.endOffset),
            !0
          );
        });
      },
    };
  }
  oE.setup(),
    (($N = iE = iE || {}).compareRanges = rv),
    ($N.getCaretRangeFromPoint = Jh),
    ($N.getSelectedNode = ju),
    ($N.getNode = Hu);
  var aE,
    uE,
    sE,
    cE,
    lE = iE,
    fE =
      ((aE = {}),
      (uE = {}),
      {
        load: function (r, o) {
          var i = 'Script at URL "' + o + '" failed to load',
            a =
              'Script at URL "' +
              o +
              "\" did not call `tinymce.Resource.add('" +
              r +
              "', data)` within 1 second";
          if (aE[r] !== undefined) return aE[r];
          var e = new ea(function (e, t) {
            var n = (function (e, t, n) {
              void 0 === n && (n = 1e3);
              var r = !1,
                o = null,
                i = function (n) {
                  return function () {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t];
                    r ||
                      ((r = !0),
                      null !== o && (V.clearTimeout(o), (o = null)),
                      n.apply(null, e));
                  };
                },
                a = i(e),
                u = i(t);
              return {
                start: function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  r ||
                    null !== o ||
                    (o = V.setTimeout(function () {
                      return u.apply(null, e);
                    }, n));
                },
                resolve: a,
                reject: u,
              };
            })(e, t);
            (uE[r] = n.resolve),
              Ra.ScriptLoader.loadScript(
                o,
                function () {
                  return n.start(a);
                },
                function () {
                  return n.reject(i);
                }
              );
          });
          return (aE[r] = e);
        },
        add: function (e, t) {
          uE[e] !== undefined && (uE[e](t), delete uE[e]),
            (aE[e] = ea.resolve(t));
        },
      }),
    dE = Math.min,
    mE = Math.max,
    pE = Math.round,
    gE = function (e, t, n) {
      var r = t.x,
        o = t.y,
        i = e.w,
        a = e.h,
        u = t.w,
        s = t.h;
      return (
        "b" === (n = (n || "").split(""))[0] && (o += s),
        "r" === n[1] && (r += u),
        "c" === n[0] && (o += pE(s / 2)),
        "c" === n[1] && (r += pE(u / 2)),
        "b" === n[3] && (o -= a),
        "r" === n[4] && (r -= i),
        "c" === n[3] && (o -= pE(a / 2)),
        "c" === n[4] && (r -= pE(i / 2)),
        hE(r, o, i, a)
      );
    },
    hE = function (e, t, n, r) {
      return { x: e, y: t, w: n, h: r };
    },
    vE = {
      inflate: function (e, t, n) {
        return hE(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
      },
      relativePosition: gE,
      findBestRelativePosition: function (e, t, n, r) {
        var o, i;
        for (i = 0; i < r.length; i++)
          if (
            (o = gE(e, t, r[i])).x >= n.x &&
            o.x + o.w <= n.w + n.x &&
            o.y >= n.y &&
            o.y + o.h <= n.h + n.y
          )
            return r[i];
        return null;
      },
      intersect: function (e, t) {
        var n = mE(e.x, t.x),
          r = mE(e.y, t.y),
          o = dE(e.x + e.w, t.x + t.w),
          i = dE(e.y + e.h, t.y + t.h);
        return o - n < 0 || i - r < 0 ? null : hE(n, r, o - n, i - r);
      },
      clamp: function (e, t, n) {
        var r = e.x,
          o = e.y,
          i = e.x + e.w,
          a = e.y + e.h,
          u = t.x + t.w,
          s = t.y + t.h,
          c = mE(0, t.x - r),
          l = mE(0, t.y - o),
          f = mE(0, i - u),
          d = mE(0, a - s);
        return (
          (r += c),
          (o += l),
          n && ((i += c), (a += l), (r -= f), (o -= d)),
          hE(r, o, (i -= f) - r, (a -= d) - o)
        );
      },
      create: hE,
      fromClientRect: function (e) {
        return hE(e.left, e.top, e.width, e.height);
      },
    },
    yE = yt.each,
    bE = yt.extend,
    CE = function () {};
  CE.extend = sE = function (n) {
    var o = this.prototype,
      r = function () {
        var e, t, n;
        if (
          !cE &&
          (this.init && this.init.apply(this, arguments), (t = this.Mixins))
        )
          for (e = t.length; e--; )
            (n = t[e]).init && n.init.apply(this, arguments);
      },
      t = function () {
        return this;
      };
    cE = !0;
    var i = new this();
    return (
      (cE = !1),
      n.Mixins &&
        (yE(n.Mixins, function (e) {
          for (var t in e) "init" !== t && (n[t] = e[t]);
        }),
        o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))),
      n.Methods &&
        yE(n.Methods.split(","), function (e) {
          n[e] = t;
        }),
      n.Properties &&
        yE(n.Properties.split(","), function (e) {
          var t = "_" + e;
          n[e] = function (e) {
            return e !== undefined ? ((this[t] = e), this) : this[t];
          };
        }),
      n.Statics &&
        yE(n.Statics, function (e, t) {
          r[t] = e;
        }),
      n.Defaults && o.Defaults && (n.Defaults = bE({}, o.Defaults, n.Defaults)),
      oe(n, function (e, t) {
        var n, r;
        "function" == typeof e && o[t]
          ? (i[t] =
              ((n = t),
              (r = e),
              function () {
                var e = this._super;
                this._super = o[n];
                var t = r.apply(this, arguments);
                return (this._super = e), t;
              }))
          : (i[t] = e);
      }),
      (r.prototype = i),
      ((r.constructor = r).extend = sE),
      r
    );
  };
  var wE = Math.min,
    xE = Math.max,
    SE = Math.round,
    NE = {
      serialize: function (e) {
        var t = JSON.stringify(e);
        return q(t)
          ? t.replace(/[\u0080-\uFFFF]/g, function (e) {
              var t = e.charCodeAt(0).toString(16);
              return "\\u" + "0000".substring(t.length) + t;
            })
          : t;
      },
      parse: function (e) {
        try {
          return JSON.parse(e);
        } catch (t) {}
      },
    },
    EE = {
      callbacks: {},
      count: 0,
      send: function (t) {
        var n = this,
          r = Ea.DOM,
          o = t.count !== undefined ? t.count : n.count,
          i = "tinymce_jsonp_" + o;
        (n.callbacks[o] = function (e) {
          r.remove(i), delete n.callbacks[o], t.callback(e);
        }),
          r.add(r.doc.body, "script", {
            id: i,
            src: t.url,
            type: "text/javascript",
          }),
          n.count++;
      },
    },
    kE = xe(xe({}, gN), {
      send: function (e) {
        var t,
          n = 0,
          r = function () {
            !e.async || 4 === t.readyState || 1e4 < n++
              ? (e.success && n < 1e4 && 200 === t.status
                  ? e.success.call(e.success_scope, "" + t.responseText, t, e)
                  : e.error &&
                    e.error.call(
                      e.error_scope,
                      1e4 < n ? "TIMED_OUT" : "GENERAL",
                      t,
                      e
                    ),
                (t = null))
              : fa.setTimeout(r, 10);
          };
        if (
          ((e.scope = e.scope || this),
          (e.success_scope = e.success_scope || e.scope),
          (e.error_scope = e.error_scope || e.scope),
          (e.async = !1 !== e.async),
          (e.data = e.data || ""),
          kE.fire("beforeInitialize", { settings: e }),
          (t = new V.XMLHttpRequest()))
        ) {
          if (
            (t.overrideMimeType && t.overrideMimeType(e.content_type),
            t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
            e.crossDomain && (t.withCredentials = !0),
            e.content_type &&
              t.setRequestHeader("Content-Type", e.content_type),
            e.requestheaders &&
              yt.each(e.requestheaders, function (e) {
                t.setRequestHeader(e.key, e.value);
              }),
            t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            (t = kE.fire("beforeSend", { xhr: t, settings: e }).xhr).send(
              e.data
            ),
            !e.async)
          )
            return r();
          fa.setTimeout(r, 10);
        }
      },
    }),
    _E = yt.extend,
    TE =
      ((RE.sendRPC = function (e) {
        return new RE().send(e);
      }),
      (RE.prototype.send = function (e) {
        var n = e.error,
          r = e.success,
          o = _E(this.settings, e);
        (o.success = function (e, t) {
          void 0 === (e = NE.parse(e)) && (e = { error: "JSON Parse error." }),
            e.error
              ? n.call(o.error_scope || o.scope, e.error, t)
              : r.call(o.success_scope || o.scope, e.result);
        }),
          (o.error = function (e, t) {
            n && n.call(o.error_scope || o.scope, e, t);
          }),
          (o.data = NE.serialize({
            id: e.id || "c" + this.count++,
            method: e.method,
            params: e.params,
          })),
          (o.content_type = "application/json"),
          kE.send(o);
      }),
      RE);
  function RE(e) {
    (this.settings = _E({}, e)), (this.count = 0);
  }
  var AE;
  try {
    var DE = "__storage_test__";
    (AE = V.window.localStorage).setItem(DE, DE), AE.removeItem(DE);
  } catch (LE) {
    AE = (function () {
      return (
        (n = {}),
        (r = []),
        (e = {
          getItem: function (e) {
            var t = n[e];
            return t || null;
          },
          setItem: function (e, t) {
            r.push(e), (n[e] = String(t));
          },
          key: function (e) {
            return r[e];
          },
          removeItem: function (t) {
            (r = r.filter(function (e) {
              return e === t;
            })),
              delete n[t];
          },
          clear: function () {
            (r = []), (n = {});
          },
          length: 0,
        }),
        Object.defineProperty(e, "length", {
          get: function () {
            return r.length;
          },
          configurable: !1,
          enumerable: !1,
        }),
        e
      );
      var n, r, e;
    })();
  }
  var OE,
    BE = {
      geom: { Rect: vE },
      util: {
        Promise: ea,
        Delay: fa,
        Tools: yt,
        VK: vv,
        URI: LN,
        Class: CE,
        EventDispatcher: fN,
        Observable: gN,
        I18n: Ia,
        XHR: kE,
        JSON: NE,
        JSONRequest: TE,
        JSONP: EE,
        LocalStorage: AE,
        Color: function (e) {
          var n = {},
            u = 0,
            s = 0,
            c = 0,
            t = function (e) {
              var t;
              return (
                "object" == typeof e
                  ? "r" in e
                    ? ((u = e.r), (s = e.g), (c = e.b))
                    : "v" in e &&
                      (function (e, t, n) {
                        if (
                          ((e = (parseInt(e, 10) || 0) % 360),
                          (t = parseInt(t, 10) / 100),
                          (n = parseInt(n, 10) / 100),
                          (t = xE(0, wE(t, 1))),
                          (n = xE(0, wE(n, 1))),
                          0 !== t)
                        ) {
                          var r = e / 60,
                            o = n * t,
                            i = o * (1 - Math.abs((r % 2) - 1)),
                            a = n - o;
                          switch (Math.floor(r)) {
                            case 0:
                              (u = o), (s = i), (c = 0);
                              break;
                            case 1:
                              (u = i), (s = o), (c = 0);
                              break;
                            case 2:
                              (u = 0), (s = o), (c = i);
                              break;
                            case 3:
                              (u = 0), (s = i), (c = o);
                              break;
                            case 4:
                              (u = i), (s = 0), (c = o);
                              break;
                            case 5:
                              (u = o), (s = 0), (c = i);
                              break;
                            default:
                              u = s = c = 0;
                          }
                          (u = SE(255 * (u + a))),
                            (s = SE(255 * (s + a))),
                            (c = SE(255 * (c + a)));
                        } else u = s = c = SE(255 * n);
                      })(e.h, e.s, e.v)
                  : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(
                      e
                    ))
                  ? ((u = parseInt(t[1], 10)),
                    (s = parseInt(t[2], 10)),
                    (c = parseInt(t[3], 10)))
                  : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))
                  ? ((u = parseInt(t[1], 16)),
                    (s = parseInt(t[2], 16)),
                    (c = parseInt(t[3], 16)))
                  : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) &&
                    ((u = parseInt(t[1] + t[1], 16)),
                    (s = parseInt(t[2] + t[2], 16)),
                    (c = parseInt(t[3] + t[3], 16))),
                (u = u < 0 ? 0 : 255 < u ? 255 : u),
                (s = s < 0 ? 0 : 255 < s ? 255 : s),
                (c = c < 0 ? 0 : 255 < c ? 255 : c),
                n
              );
            };
          return (
            e && t(e),
            (n.toRgb = function () {
              return { r: u, g: s, b: c };
            }),
            (n.toHsv = function () {
              return (function (e, t, n) {
                var r, o;
                o = 0;
                var i = wE((e /= 255), wE((t /= 255), (n /= 255))),
                  a = xE(e, xE(t, n));
                return i === a
                  ? { h: 0, s: 0, v: 100 * (o = i) }
                  : ((r = (a - i) / a),
                    {
                      h: SE(
                        60 *
                          ((e === i ? 3 : n === i ? 1 : 5) -
                            (e === i ? t - n : n === i ? e - t : n - e) /
                              ((o = a) - i))
                      ),
                      s: SE(100 * r),
                      v: SE(100 * o),
                    });
              })(u, s, c);
            }),
            (n.toHex = function () {
              var e = function (e) {
                return 1 < (e = parseInt(e, 10).toString(16)).length
                  ? e
                  : "0" + e;
              };
              return "#" + e(u) + e(s) + e(c);
            }),
            (n.parse = t),
            n
          );
        },
      },
      dom: {
        EventUtils: Hr,
        Sizzle: Vo,
        DomQuery: Ri,
        TreeWalker: Ai,
        TextSeeker: vu,
        DOMUtils: Ea,
        ScriptLoader: Ra,
        RangeUtils: lE,
        Serializer: Xv,
        StyleSheetLoader: da,
        ControlSelection: Cv,
        BookmarkManager: gv,
        Selection: Nv,
        Event: Hr.Event,
      },
      html: {
        Styles: Br,
        Entities: yr,
        Node: Tf,
        Schema: Rr,
        SaxParser: Hf,
        DomParser: Vv,
        Writer: Df,
        Serializer: Of,
      },
      Env: mt,
      AddOnManager: Fa,
      Annotator: xf,
      Formatter: ly,
      UndoManager: dy,
      EditorCommands: tN,
      WindowManager: wh,
      NotificationManager: yh,
      EditorObservable: CN,
      Shortcuts: TN,
      Editor: HN,
      FocusManager: Mm,
      EditorManager: oE,
      DOM: Ea.DOM,
      ScriptLoader: Ra.ScriptLoader,
      PluginManager: Fa.PluginManager,
      ThemeManager: Fa.ThemeManager,
      IconManager: ch,
      Resource: fE,
      trim: yt.trim,
      isArray: yt.isArray,
      is: yt.is,
      toArray: yt.toArray,
      makeMap: yt.makeMap,
      each: yt.each,
      map: yt.map,
      grep: yt.grep,
      inArray: yt.inArray,
      extend: yt.extend,
      create: yt.create,
      walk: yt.walk,
      createNS: yt.createNS,
      resolve: yt.resolve,
      explode: yt.explode,
      _addCacheSuffix: yt._addCacheSuffix,
      isOpera: mt.opera,
      isWebKit: mt.webkit,
      isIE: mt.ie,
      isGecko: mt.gecko,
      isMac: mt.mac,
    },
    PE = yt.extend(oE, BE);
  (OE = PE),
    (window.tinymce = OE),
    (window.tinyMCE = OE),
    (function (e) {
      if ("object" == typeof module)
        try {
          module.exports = e;
        } catch (t) {}
    })(PE);
})(window);

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.4.0-12
 */

!(function (a) {
  "use strict";
  var n,
    t,
    r,
    e,
    u = void 0 !== a.window ? a.window : Function("return this;")(),
    i = function (n, t) {
      return { isRequired: n, applyPatch: t };
    },
    c = function (i, o) {
      return function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
        var r = o.apply(this, n),
          e = void 0 === r ? n : r;
        return i.apply(this, e);
      };
    },
    o = function (n, t) {
      if (n)
        for (var r = 0; r < t.length; r++)
          t[r].isRequired(n) && t[r].applyPatch(n);
      return n;
    },
    f = function () {},
    l = function (n) {
      return function () {
        return n;
      };
    },
    s = l(!1),
    g = l(!0),
    p = function () {
      return d;
    },
    d =
      ((n = function (n) {
        return n.isNone();
      }),
      (e = {
        fold: function (n, t) {
          return n();
        },
        is: s,
        isSome: s,
        isNone: g,
        getOr: (r = function (n) {
          return n;
        }),
        getOrThunk: (t = function (n) {
          return n();
        }),
        getOrDie: function (n) {
          throw new Error(n || "error: getOrDie called on none.");
        },
        getOrNull: l(null),
        getOrUndefined: l(void 0),
        or: r,
        orThunk: t,
        map: p,
        each: f,
        bind: p,
        exists: s,
        forall: g,
        filter: p,
        equals: n,
        equals_: n,
        toArray: function () {
          return [];
        },
        toString: l("none()"),
      }),
      Object.freeze && Object.freeze(e),
      e),
    h = function (r) {
      var n = l(r),
        t = function () {
          return i;
        },
        e = function (n) {
          return n(r);
        },
        i = {
          fold: function (n, t) {
            return t(r);
          },
          is: function (n) {
            return r === n;
          },
          isSome: g,
          isNone: s,
          getOr: n,
          getOrThunk: n,
          getOrDie: n,
          getOrNull: n,
          getOrUndefined: n,
          or: t,
          orThunk: t,
          map: function (n) {
            return h(n(r));
          },
          each: function (n) {
            n(r);
          },
          bind: e,
          exists: e,
          forall: e,
          filter: function (n) {
            return n(r) ? i : d;
          },
          toArray: function () {
            return [r];
          },
          toString: function () {
            return "some(" + r + ")";
          },
          equals: function (n) {
            return n.is(r);
          },
          equals_: function (n, t) {
            return n.fold(s, function (n) {
              return t(r, n);
            });
          },
        };
      return i;
    },
    v = p,
    y = function (n) {
      return null == n ? d : h(n);
    },
    m = function (t) {
      return function (n) {
        return (
          (function (n) {
            if (null === n) return "null";
            var t = typeof n;
            return "object" === t &&
              (Array.prototype.isPrototypeOf(n) ||
                (n.constructor && "Array" === n.constructor.name))
              ? "array"
              : "object" === t &&
                (String.prototype.isPrototypeOf(n) ||
                  (n.constructor && "String" === n.constructor.name))
              ? "string"
              : t;
          })(n) === t
        );
      };
    },
    w = m("object"),
    O = m("array"),
    b = m("undefined"),
    j = m("function"),
    A = (Array.prototype.slice, Array.prototype.indexOf),
    x = Array.prototype.push,
    E = function (n, t) {
      return (r = n), (e = t), -1 < A.call(r, e);
      var r, e;
    },
    S = function (n, t) {
      return (function (n) {
        for (var t = [], r = 0, e = n.length; r < e; ++r) {
          if (!O(n[r]))
            throw new Error(
              "Arr.flatten item " + r + " was not an array, input: " + n
            );
          x.apply(t, n[r]);
        }
        return t;
      })(
        (function (n, t) {
          for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
            var o = n[i];
            e[i] = t(o, i);
          }
          return e;
        })(n, t)
      );
    },
    M = (j(Array.from) && Array.from, Object.prototype.hasOwnProperty),
    _ = function (u) {
      return function () {
        for (var n = new Array(arguments.length), t = 0; t < n.length; t++)
          n[t] = arguments[t];
        if (0 === n.length) throw new Error("Can't merge zero objects");
        for (var r = {}, e = 0; e < n.length; e++) {
          var i = n[e];
          for (var o in i) M.call(i, o) && (r[o] = u(r[o], i[o]));
        }
        return r;
      };
    },
    D = _(function (n, t) {
      return w(n) && w(t) ? D(n, t) : t;
    }),
    P = _(function (n, t) {
      return t;
    }),
    U = Object.keys,
    N = Object.hasOwnProperty,
    R = function (n, t) {
      for (var r = U(n), e = 0, i = r.length; e < i; e++) {
        var o = r[e];
        t(n[o], o);
      }
    },
    T = function (n, t) {
      return q(n, t) ? y(n[t]) : v();
    },
    q = function (n, t) {
      return N.call(n, t);
    },
    C = function (n) {
      if (b(n) || "" === n) return [];
      var t = O(n)
        ? S(n, function (n) {
            return n.split(/[\s+,]/);
          })
        : n.split(/[\s+,]/);
      return S(t, function (n) {
        return 0 < n.length ? [n.trim()] : [];
      });
    },
    I = function (n, t) {
      var r,
        e,
        i,
        o = D(n, t),
        u = C(t.plugins),
        a = T(o, "custom_plugin_urls").getOr({}),
        c =
          ((r = function (n, t) {
            return E(u, t);
          }),
          (e = {}),
          (i = {}),
          R(a, function (n, t) {
            (r(n, t) ? e : i)[t] = n;
          }),
          { t: e, f: i }),
        f = T(o, "external_plugins").getOr({}),
        l = {};
      R(c.t, function (n, t) {
        l[t] = n;
      });
      var s = P(l, f);
      return P(t, 0 === U(s).length ? {} : { external_plugins: s });
    },
    k = {
      getCustomPluginUrls: I,
      patch: i(
        function () {
          return !0;
        },
        function (t) {
          t.EditorManager.init = c(t.EditorManager.init, function (n) {
            return [I(t.defaultSettings, n)];
          });
        }
      ),
    },
    L = function (n, t) {
      return (function (n, t) {
        for (var r = null != t ? t : u, e = 0; e < n.length && null != r; ++e)
          r = r[n[e]];
        return r;
      })(n.split("."), t);
    },
    z = function (n) {
      return parseInt(n, 10);
    },
    V = function (n, t) {
      var r = n - t;
      return 0 === r ? 0 : 0 < r ? 1 : -1;
    },
    B = function (n, t, r) {
      return { major: n, minor: t, patch: r };
    },
    F = function (n) {
      var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
      return t ? B(z(t[1]), z(t[2]), z(t[3])) : B(0, 0, 0);
    },
    $ = function (n, t) {
      return (
        !!n &&
        -1 ===
          (function (n, t) {
            var r = V(n.major, t.major);
            if (0 !== r) return r;
            var e = V(n.minor, t.minor);
            if (0 !== e) return e;
            var i = V(n.patch, t.patch);
            return 0 !== i ? i : 0;
          })(
            F(
              [(r = n).majorVersion, r.minorVersion]
                .join(".")
                .split(".")
                .slice(0, 3)
                .join(".")
            ),
            F(t)
          )
      );
      var r;
    },
    G = {
      patch: i(
        function (n) {
          return $(n, "4.7.0");
        },
        function (n) {
          var o;
          n.EditorManager.init = c(
            n.EditorManager.init,
            ((o = n.EditorManager),
            function (n) {
              var t = L("tinymce.util.Tools", u),
                r = C(n.plugins),
                e = o.defaultSettings.forced_plugins || [],
                i = 0 < e.length ? r.concat(e) : r;
              return [t.extend({}, n, { plugins: i })];
            })
          );
        }
      ),
    },
    H = function () {
      return new Date().getTime();
    },
    J = function (n, t, r, e, i) {
      var o,
        u = H();
      o = a.setInterval(function () {
        n() && (a.clearInterval(o), t()),
          H() - u > i && (a.clearInterval(o), r());
      }, e);
    },
    K = function (i) {
      return function () {
        var n,
          t,
          r,
          e = ((n = i),
          (t = "position"),
          (r = n.currentStyle
            ? n.currentStyle[t]
            : a.window.getComputedStyle(n, null)[t]),
          r || "").toLowerCase();
        return "absolute" === e || "fixed" === e;
      };
    },
    Q = function (n) {
      n.parentNode.removeChild(n);
    },
    W = function (n, t) {
      var r,
        e =
          (((r = a.document.createElement("div")).style.display = "none"),
          (r.className = "mce-floatpanel"),
          r);
      a.document.body.appendChild(e),
        J(
          K(e),
          function () {
            Q(e), n();
          },
          function () {
            Q(e), t();
          },
          10,
          5e3
        );
    },
    X = function (n, t) {
      n.notificationManager
        ? n.notificationManager.open({
            text: t,
            type: "warning",
            timeout: 0,
            icon: "",
          })
        : n.windowManager.alert(t);
    },
    Y = function (n) {
      n.EditorManager.on("AddEditor", function (n) {
        var t = n.editor,
          r = t.settings.service_message;
        r &&
          W(
            function () {
              X(t, t.settings.service_message);
            },
            function () {
              a.alert(r);
            }
          );
      });
    },
    Z = function (n) {
      var t,
        r,
        e = L("tinymce.util.URI", u);
      (t = n.base_url) &&
        ((this.baseURL = new e(this.documentBaseURL).toAbsolute(
          t.replace(/\/+$/, "")
        )),
        (this.baseURI = new e(this.baseURL))),
        (r = n.suffix),
        n.suffix && (this.suffix = r),
        (this.defaultSettings = n);
    },
    nn = function (n) {
      return [L("tinymce.util.Tools", u).extend({}, this.defaultSettings, n)];
    },
    tn = {
      patch: i(
        function (n) {
          return "function" != typeof n.overrideDefaults;
        },
        function (n) {
          Y(n),
            (n.overrideDefaults = Z),
            (n.EditorManager.init = c(n.EditorManager.init, nn));
        }
      ),
    },
    rn = {
      patch: i(
        function (n) {
          return $(n, "4.5.0");
        },
        function (n) {
          var e;
          n.overrideDefaults = c(
            n.overrideDefaults,
            ((e = n),
            function (n) {
              var t = n.plugin_base_urls;
              for (var r in t) e.PluginManager.urls[r] = t[r];
            })
          );
        }
      ),
    },
    en = function (n) {
      o(n, [tn.patch, rn.patch, G.patch, k.patch]);
    };
  en(u.tinymce);
})(window);

(function (cloudSettings) {
  tinymce.overrideDefaults(cloudSettings);
})({
  imagetools_proxy: "https://imageproxy.tiny.cloud/2/image",
  suffix: ".min",
  linkchecker_service_url: "https://hyperlinking.tiny.cloud",
  spellchecker_rpc_url: "https://spelling.tiny.cloud",
  spellchecker_api_key: "invalid-origin",
  tinydrive_service_url: "https://catalog.tiny.cloud",
  api_key: "invalid-origin",
  imagetools_api_key: "invalid-origin",
  tinydrive_api_key: "invalid-origin",
  forced_plugins: ["chiffer"],
  referrer_policy: "origin",
  content_css_cors: true,
  custom_plugin_urls: {},
  chiffer_snowplow_service_url: "https://sp.tinymce.com/i",
  mediaembed_api_key: "invalid-origin",
  linkchecker_api_key: "invalid-origin",
  mediaembed_service_url: "https://hyperlinking.tiny.cloud",
  service_message:
    'This domain is not registered with Tiny Cloud.  Please review \u003ca target="_blank" href="https://www.tiny.cloud/my-account"\u003eyour approved domains\u003c/a\u003e.',
});
tinymce.baseURL = "https://cdn.tiny.cloud/1/invalid-origin/tinymce/5.4.1-89";

/* Ephox chiffer plugin
 *
 * Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
 *
 * Version: 1.5.0-11
 */

!(function (u) {
  "use strict";
  var t,
    a = function () {
      return new Date().getTime();
    },
    c =
      ((t = "string"),
      function (n) {
        return (
          (function (n) {
            if (null === n) return "null";
            var t = typeof n;
            return "object" === t &&
              (Array.prototype.isPrototypeOf(n) ||
                (n.constructor && "Array" === n.constructor.name))
              ? "array"
              : "object" === t &&
                (String.prototype.isPrototypeOf(n) ||
                  (n.constructor && "String" === n.constructor.name))
              ? "string"
              : t;
          })(n) === t
        );
      }),
    s = function () {},
    f = function (n, t) {
      var i,
        c,
        e,
        o =
          ((i = n),
          (c = t),
          {
            send: function (n, t, e) {
              var o =
                  "?aid=" +
                  c +
                  "&tna=tinymce_cloud&p=web&dtm=" +
                  t +
                  "&stm=" +
                  a() +
                  "&tz=" +
                  ("undefined" != typeof Intl
                    ? encodeURIComponent(
                        Intl.DateTimeFormat().resolvedOptions().timeZone
                      )
                    : "N%2FA") +
                  "&e=se&se_ca=" +
                  n,
                r = u.document.createElement("img");
              (r.src = i.chiffer_snowplow_service_url + o),
                (r.onload = function () {
                  e(!0);
                }),
                (r.onerror = function () {
                  e(!1);
                });
            },
          });
      return (
        (e = o),
        {
          sendStat: function (n) {
            return function () {
              e.send(n, a(), s);
            };
          },
        }
      );
    };
  return function () {
    var n,
      t,
      e = tinymce.defaultSettings,
      o = {
        load: function (n) {
          return s;
        },
      },
      r = ((n = e.api_key), c(n) ? n : void 0),
      i =
        void 0 === r
          ? o
          : ((t = f(e, r)).sendStat("script_load")(),
            {
              load: function (n) {
                n.once("init", t.sendStat("init")),
                  n.once("focus", t.sendStat("focus"));
              },
            });
    tinymce.PluginManager.add("chiffer", i.load);
  };
})(window)();
