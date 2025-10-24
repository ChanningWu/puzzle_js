(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  27805,
  (t, e, r) => {
    let n;
    var o = t.i(47167);
    ("undefined" != typeof self ? self : t.e,
      (n = t.r(71645)),
      (e.exports = (() => {
        var t = {
            2: (t, e, r) => {
              var n = r(2199),
                o = r(4664),
                a = r(5950);
              t.exports = function (t) {
                return n(t, a, o);
              };
            },
            79: (t, e, r) => {
              var n = r(3702),
                o = r(80),
                a = r(4739),
                i = r(8655),
                s = r(1175);
              function c(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r; ) {
                  var n = t[e];
                  this.set(n[0], n[1]);
                }
              }
              ((c.prototype.clear = n),
                (c.prototype.delete = o),
                (c.prototype.get = a),
                (c.prototype.has = i),
                (c.prototype.set = s),
                (t.exports = c));
            },
            80: (t, e, r) => {
              var n = r(6025),
                o = Array.prototype.splice;
              t.exports = function (t) {
                var e = this.__data__,
                  r = n(e, t);
                return !(
                  r < 0 ||
                  (r == e.length - 1 ? e.pop() : o.call(e, r, 1),
                  --this.size,
                  0)
                );
              };
            },
            270: (t, e, r) => {
              var n = r(7068),
                o = r(346);
              t.exports = function t(e, r, a, i, s) {
                return (
                  e === r ||
                  (null != e && null != r && (o(e) || o(r))
                    ? n(e, r, a, i, t, s)
                    : e != e && r != r)
                );
              };
            },
            289: (t, e, r) => {
              var n = r(2651);
              t.exports = function (t) {
                return n(this, t).get(t);
              };
            },
            294: (t) => {
              t.exports = function (t) {
                return (
                  "number" == typeof t &&
                  t > -1 &&
                  t % 1 == 0 &&
                  t <= 0x1fffffffffffff
                );
              };
            },
            317: (t) => {
              t.exports = function (t) {
                var e = -1,
                  r = Array(t.size);
                return (
                  t.forEach(function (t, n) {
                    r[++e] = [n, t];
                  }),
                  r
                );
              };
            },
            346: (t) => {
              t.exports = function (t) {
                return null != t && "object" == typeof t;
              };
            },
            361: (t) => {
              var e = /^(?:0|[1-9]\d*)$/;
              t.exports = function (t, r) {
                var n = typeof t;
                return (
                  !!(r = null == r ? 0x1fffffffffffff : r) &&
                  ("number" == n || ("symbol" != n && e.test(t))) &&
                  t > -1 &&
                  t % 1 == 0 &&
                  t < r
                );
              };
            },
            392: (t) => {
              t.exports = function (t, e) {
                return null == t ? void 0 : t[e];
              };
            },
            659: (t, e, r) => {
              var n = r(1873),
                o = Object.prototype,
                a = o.hasOwnProperty,
                i = o.toString,
                s = n ? n.toStringTag : void 0;
              t.exports = function (t) {
                var e = a.call(t, s),
                  r = t[s];
                try {
                  t[s] = void 0;
                  var n = !0;
                } catch (t) {}
                var o = i.call(t);
                return (n && (e ? (t[s] = r) : delete t[s]), o);
              };
            },
            689: (t, e, r) => {
              var n = r(2),
                o = Object.prototype.hasOwnProperty;
              t.exports = function (t, e, r, a, i, s) {
                var c = 1 & r,
                  u = n(t),
                  l = u.length;
                if (l != n(e).length && !c) return !1;
                for (var p = l; p--; ) {
                  var f = u[p];
                  if (!(c ? f in e : o.call(e, f))) return !1;
                }
                var h = s.get(t),
                  d = s.get(e);
                if (h && d) return h == e && d == t;
                var v = !0;
                (s.set(t, e), s.set(e, t));
                for (var y = c; ++p < l; ) {
                  var b = t[(f = u[p])],
                    m = e[f];
                  if (a) var g = c ? a(m, b, f, e, t, s) : a(b, m, f, t, e, s);
                  if (!(void 0 === g ? b === m || i(b, m, r, a, s) : g)) {
                    v = !1;
                    break;
                  }
                  y || (y = "constructor" == f);
                }
                if (v && !y) {
                  var w = t.constructor,
                    x = e.constructor;
                  w == x ||
                    !("constructor" in t) ||
                    !("constructor" in e) ||
                    ("function" == typeof w &&
                      w instanceof w &&
                      "function" == typeof x &&
                      x instanceof x) ||
                    (v = !1);
                }
                return (s.delete(t), s.delete(e), v);
              };
            },
            695: (t, e, r) => {
              var n = r(8096),
                o = r(2428),
                a = r(6449),
                i = r(3656),
                s = r(361),
                c = r(7167),
                u = Object.prototype.hasOwnProperty;
              t.exports = function (t, e) {
                var r = a(t),
                  l = !r && o(t),
                  p = !r && !l && i(t),
                  f = !r && !l && !p && c(t),
                  h = r || l || p || f,
                  d = h ? n(t.length, String) : [],
                  v = d.length;
                for (var y in t)
                  (!e && !u.call(t, y)) ||
                    (h &&
                      ("length" == y ||
                        (p && ("offset" == y || "parent" == y)) ||
                        (f &&
                          ("buffer" == y ||
                            "byteLength" == y ||
                            "byteOffset" == y)) ||
                        s(y, v))) ||
                    d.push(y);
                return d;
              };
            },
            938: (t) => {
              t.exports = function (t) {
                var e = this.__data__,
                  r = e.delete(t);
                return ((this.size = e.size), r);
              };
            },
            945: (t, e, r) => {
              var n = r(79),
                o = r(8223),
                a = r(3661);
              t.exports = function (t, e) {
                var r = this.__data__;
                if (r instanceof n) {
                  var i = r.__data__;
                  if (!o || i.length < 199)
                    return (i.push([t, e]), (this.size = ++r.size), this);
                  r = this.__data__ = new a(i);
                }
                return (r.set(t, e), (this.size = r.size), this);
              };
            },
            1042: (t, e, r) => {
              t.exports = r(6110)(Object, "create");
            },
            1175: (t, e, r) => {
              var n = r(6025);
              t.exports = function (t, e) {
                var r = this.__data__,
                  o = n(r, t);
                return (
                  o < 0 ? (++this.size, r.push([t, e])) : (r[o][1] = e),
                  this
                );
              };
            },
            1380: (t) => {
              t.exports = function (t) {
                return (
                  this.__data__.set(t, "__lodash_hash_undefined__"),
                  this
                );
              };
            },
            1420: (t, e, r) => {
              var n = r(79);
              t.exports = function () {
                ((this.__data__ = new n()), (this.size = 0));
              };
            },
            1459: (t) => {
              t.exports = function (t) {
                return this.__data__.has(t);
              };
            },
            1549: (t, e, r) => {
              var n = r(2032),
                o = r(3862),
                a = r(6721),
                i = r(2749),
                s = r(5749);
              function c(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r; ) {
                  var n = t[e];
                  this.set(n[0], n[1]);
                }
              }
              ((c.prototype.clear = n),
                (c.prototype.delete = o),
                (c.prototype.get = a),
                (c.prototype.has = i),
                (c.prototype.set = s),
                (t.exports = c));
            },
            1873: (t, e, r) => {
              t.exports = r(9325).Symbol;
            },
            1882: (t, e, r) => {
              var n = r(2552),
                o = r(3805);
              t.exports = function (t) {
                if (!o(t)) return !1;
                var e = n(t);
                return (
                  "[object Function]" == e ||
                  "[object GeneratorFunction]" == e ||
                  "[object AsyncFunction]" == e ||
                  "[object Proxy]" == e
                );
              };
            },
            1986: (t, e, r) => {
              var n = r(1873),
                o = r(7828),
                a = r(5288),
                i = r(5911),
                s = r(317),
                c = r(4247),
                u = n ? n.prototype : void 0,
                l = u ? u.valueOf : void 0;
              t.exports = function (t, e, r, n, u, p, f) {
                switch (r) {
                  case "[object DataView]":
                    if (
                      t.byteLength != e.byteLength ||
                      t.byteOffset != e.byteOffset
                    )
                      break;
                    ((t = t.buffer), (e = e.buffer));
                  case "[object ArrayBuffer]":
                    return !(
                      t.byteLength != e.byteLength || !p(new o(t), new o(e))
                    );
                  case "[object Boolean]":
                  case "[object Date]":
                  case "[object Number]":
                    return a(+t, +e);
                  case "[object Error]":
                    return t.name == e.name && t.message == e.message;
                  case "[object RegExp]":
                  case "[object String]":
                    return t == e + "";
                  case "[object Map]":
                    var h = s;
                  case "[object Set]":
                    var d = 1 & n;
                    if ((h || (h = c), t.size != e.size && !d)) break;
                    var v = f.get(t);
                    if (v) return v == e;
                    ((n |= 2), f.set(t, e));
                    var y = i(h(t), h(e), n, u, p, f);
                    return (f.delete(t), y);
                  case "[object Symbol]":
                    if (l) return l.call(t) == l.call(e);
                }
                return !1;
              };
            },
            2032: (t, e, r) => {
              var n = r(1042);
              t.exports = function () {
                ((this.__data__ = n ? n(null) : {}), (this.size = 0));
              };
            },
            2199: (t, e, r) => {
              var n = r(4528),
                o = r(6449);
              t.exports = function (t, e, r) {
                var a = e(t);
                return o(t) ? a : n(a, r(t));
              };
            },
            2404: (t, e, r) => {
              var n = r(270);
              t.exports = function (t, e) {
                return n(t, e);
              };
            },
            2428: (t, e, r) => {
              var n = r(7534),
                o = r(346),
                a = Object.prototype,
                i = a.hasOwnProperty,
                s = a.propertyIsEnumerable;
              t.exports = n(
                (function () {
                  return arguments;
                })(),
              )
                ? n
                : function (t) {
                    return o(t) && i.call(t, "callee") && !s.call(t, "callee");
                  };
            },
            2552: (t, e, r) => {
              var n = r(1873),
                o = r(659),
                a = r(9350),
                i = n ? n.toStringTag : void 0;
              t.exports = function (t) {
                return null == t
                  ? void 0 === t
                    ? "[object Undefined]"
                    : "[object Null]"
                  : i && i in Object(t)
                    ? o(t)
                    : a(t);
              };
            },
            2651: (t, e, r) => {
              var n = r(4218);
              t.exports = function (t, e) {
                var r = t.__data__;
                return n(e)
                  ? r["string" == typeof e ? "string" : "hash"]
                  : r.map;
              };
            },
            2749: (t, e, r) => {
              var n = r(1042),
                o = Object.prototype.hasOwnProperty;
              t.exports = function (t) {
                var e = this.__data__;
                return n ? void 0 !== e[t] : o.call(e, t);
              };
            },
            2804: (t, e, r) => {
              t.exports = r(6110)(r(9325), "Promise");
            },
            2949: (t, e, r) => {
              var n = r(2651);
              t.exports = function (t, e) {
                var r = n(this, t),
                  o = r.size;
                return (r.set(t, e), (this.size += +(r.size != o)), this);
              };
            },
            3040: (t, e, r) => {
              var n = r(1549),
                o = r(79),
                a = r(8223);
              t.exports = function () {
                ((this.size = 0),
                  (this.__data__ = {
                    hash: new n(),
                    map: new (a || o)(),
                    string: new n(),
                  }));
              };
            },
            3146: (t, e, r) => {
              for (
                var n = r(3491),
                  o = "undefined" == typeof window ? r.g : window,
                  a = ["moz", "webkit"],
                  i = "AnimationFrame",
                  s = o["request" + i],
                  c = o["cancel" + i] || o["cancelRequest" + i],
                  u = 0;
                !s && u < a.length;
                u++
              )
                ((s = o[a[u] + "Request" + i]),
                  (c =
                    o[a[u] + "Cancel" + i] || o[a[u] + "CancelRequest" + i]));
              if (!s || !c) {
                var l = 0,
                  p = 0,
                  f = [],
                  h = 1e3 / 60;
                ((s = function (t) {
                  if (0 === f.length) {
                    var e = n(),
                      r = Math.max(0, h - (e - l));
                    ((l = r + e),
                      setTimeout(function () {
                        var t = f.slice(0);
                        f.length = 0;
                        for (var e = 0; e < t.length; e++)
                          if (!t[e].cancelled)
                            try {
                              t[e].callback(l);
                            } catch (t) {
                              setTimeout(function () {
                                throw t;
                              }, 0);
                            }
                      }, Math.round(r)));
                  }
                  return (
                    f.push({ handle: ++p, callback: t, cancelled: !1 }),
                    p
                  );
                }),
                  (c = function (t) {
                    for (var e = 0; e < f.length; e++)
                      f[e].handle === t && (f[e].cancelled = !0);
                  }));
              }
              ((t.exports = function (t) {
                return s.call(o, t);
              }),
                (t.exports.cancel = function () {
                  c.apply(o, arguments);
                }),
                (t.exports.polyfill = function (t) {
                  (t || (t = o),
                    (t.requestAnimationFrame = s),
                    (t.cancelAnimationFrame = c));
                }));
            },
            3345: (t) => {
              t.exports = function () {
                return [];
              };
            },
            3491: function (t) {
              (function () {
                var e, r, n, a;
                "undefined" != typeof performance &&
                null !== performance &&
                performance.now
                  ? (t.exports = function () {
                      return performance.now();
                    })
                  : void 0 !== o.default &&
                      null !== o.default &&
                      o.default.hrtime
                    ? ((t.exports = function () {
                        return (e() - a) / 1e6;
                      }),
                      (r = o.default.hrtime),
                      (a =
                        (e = function () {
                          var t;
                          return 1e9 * (t = r())[0] + t[1];
                        })() -
                        1e9 * o.default.uptime()))
                    : Date.now
                      ? ((t.exports = function () {
                          return Date.now() - n;
                        }),
                        (n = Date.now()))
                      : ((t.exports = function () {
                          return new Date().getTime() - n;
                        }),
                        (n = new Date().getTime()));
              }).call(this);
            },
            3605: (t) => {
              t.exports = function (t) {
                return this.__data__.get(t);
              };
            },
            3650: (t, e, r) => {
              t.exports = r(4335)(Object.keys, Object);
            },
            3656: (t, e, r) => {
              t = r.nmd(t);
              var n = r(9325),
                o = r(9935),
                a = e && !e.nodeType && e,
                i = a && t && !t.nodeType && t,
                s = i && i.exports === a ? n.Buffer : void 0,
                c = (s ? s.isBuffer : void 0) || o;
              t.exports = c;
            },
            3661: (t, e, r) => {
              var n = r(3040),
                o = r(7670),
                a = r(289),
                i = r(4509),
                s = r(2949);
              function c(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r; ) {
                  var n = t[e];
                  this.set(n[0], n[1]);
                }
              }
              ((c.prototype.clear = n),
                (c.prototype.delete = o),
                (c.prototype.get = a),
                (c.prototype.has = i),
                (c.prototype.set = s),
                (t.exports = c));
            },
            3702: (t) => {
              t.exports = function () {
                ((this.__data__ = []), (this.size = 0));
              };
            },
            3805: (t) => {
              t.exports = function (t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e);
              };
            },
            3862: (t) => {
              t.exports = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return ((this.size -= !!e), e);
              };
            },
            4218: (t) => {
              t.exports = function (t) {
                var e = typeof t;
                return "string" == e ||
                  "number" == e ||
                  "symbol" == e ||
                  "boolean" == e
                  ? "__proto__" !== t
                  : null === t;
              };
            },
            4247: (t) => {
              t.exports = function (t) {
                var e = -1,
                  r = Array(t.size);
                return (
                  t.forEach(function (t) {
                    r[++e] = t;
                  }),
                  r
                );
              };
            },
            4248: (t) => {
              t.exports = function (t, e) {
                for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
                  if (e(t[r], r, t)) return !0;
                return !1;
              };
            },
            4335: (t) => {
              t.exports = function (t, e) {
                return function (r) {
                  return t(e(r));
                };
              };
            },
            4509: (t, e, r) => {
              var n = r(2651);
              t.exports = function (t) {
                return n(this, t).has(t);
              };
            },
            4528: (t) => {
              t.exports = function (t, e) {
                for (var r = -1, n = e.length, o = t.length; ++r < n; )
                  t[o + r] = e[r];
                return t;
              };
            },
            4664: (t, e, r) => {
              var n = r(9770),
                o = r(3345),
                a = Object.prototype.propertyIsEnumerable,
                i = Object.getOwnPropertySymbols;
              t.exports = i
                ? function (t) {
                    return null == t
                      ? []
                      : n(i((t = Object(t))), function (e) {
                          return a.call(t, e);
                        });
                  }
                : o;
            },
            4739: (t, e, r) => {
              var n = r(6025);
              t.exports = function (t) {
                var e = this.__data__,
                  r = n(e, t);
                return r < 0 ? void 0 : e[r][1];
              };
            },
            4840: (t, e, r) => {
              t.exports =
                "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
            },
            4894: (t, e, r) => {
              var n = r(1882),
                o = r(294);
              t.exports = function (t) {
                return null != t && o(t.length) && !n(t);
              };
            },
            4901: (t, e, r) => {
              var n = r(2552),
                o = r(294),
                a = r(346),
                i = {};
              ((i["[object Float32Array]"] =
                i["[object Float64Array]"] =
                i["[object Int8Array]"] =
                i["[object Int16Array]"] =
                i["[object Int32Array]"] =
                i["[object Uint8Array]"] =
                i["[object Uint8ClampedArray]"] =
                i["[object Uint16Array]"] =
                i["[object Uint32Array]"] =
                  !0),
                (i["[object Arguments]"] =
                  i["[object Array]"] =
                  i["[object ArrayBuffer]"] =
                  i["[object Boolean]"] =
                  i["[object DataView]"] =
                  i["[object Date]"] =
                  i["[object Error]"] =
                  i["[object Function]"] =
                  i["[object Map]"] =
                  i["[object Number]"] =
                  i["[object Object]"] =
                  i["[object RegExp]"] =
                  i["[object Set]"] =
                  i["[object String]"] =
                  i["[object WeakMap]"] =
                    !1),
                (t.exports = function (t) {
                  return a(t) && o(t.length) && !!i[n(t)];
                }));
            },
            5083: (t, e, r) => {
              var n = r(1882),
                o = r(7296),
                a = r(3805),
                i = r(7473),
                s = /^\[object .+?Constructor\]$/,
                c = Object.prototype,
                u = Function.prototype.toString,
                l = c.hasOwnProperty,
                p = RegExp(
                  "^" +
                    u
                      .call(l)
                      .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?",
                      ) +
                    "$",
                );
              t.exports = function (t) {
                return !(!a(t) || o(t)) && (n(t) ? p : s).test(i(t));
              };
            },
            5288: (t) => {
              t.exports = function (t, e) {
                return t === e || (t != t && e != e);
              };
            },
            5481: (t, e, r) => {
              t.exports = r(9325)["__core-js_shared__"];
            },
            5527: (t) => {
              var e = Object.prototype;
              t.exports = function (t) {
                var r = t && t.constructor;
                return t === (("function" == typeof r && r.prototype) || e);
              };
            },
            5580: (t, e, r) => {
              t.exports = r(6110)(r(9325), "DataView");
            },
            5749: (t, e, r) => {
              var n = r(1042);
              t.exports = function (t, e) {
                var r = this.__data__;
                return (
                  (this.size += +!this.has(t)),
                  (r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e),
                  this
                );
              };
            },
            5861: (t, e, r) => {
              var n = r(5580),
                o = r(8223),
                a = r(2804),
                i = r(6545),
                s = r(8303),
                c = r(2552),
                u = r(7473),
                l = "[object Map]",
                p = "[object Promise]",
                f = "[object Set]",
                h = "[object WeakMap]",
                d = "[object DataView]",
                v = u(n),
                y = u(o),
                b = u(a),
                m = u(i),
                g = u(s),
                w = c;
              (((n && w(new n(new ArrayBuffer(1))) != d) ||
                (o && w(new o()) != l) ||
                (a && w(a.resolve()) != p) ||
                (i && w(new i()) != f) ||
                (s && w(new s()) != h)) &&
                (w = function (t) {
                  var e = c(t),
                    r = "[object Object]" == e ? t.constructor : void 0,
                    n = r ? u(r) : "";
                  if (n)
                    switch (n) {
                      case v:
                        return d;
                      case y:
                        return l;
                      case b:
                        return p;
                      case m:
                        return f;
                      case g:
                        return h;
                    }
                  return e;
                }),
                (t.exports = w));
            },
            5911: (t, e, r) => {
              var n = r(8859),
                o = r(4248),
                a = r(9219);
              t.exports = function (t, e, r, i, s, c) {
                var u = 1 & r,
                  l = t.length,
                  p = e.length;
                if (l != p && !(u && p > l)) return !1;
                var f = c.get(t),
                  h = c.get(e);
                if (f && h) return f == e && h == t;
                var d = -1,
                  v = !0,
                  y = 2 & r ? new n() : void 0;
                for (c.set(t, e), c.set(e, t); ++d < l; ) {
                  var b = t[d],
                    m = e[d];
                  if (i) var g = u ? i(m, b, d, e, t, c) : i(b, m, d, t, e, c);
                  if (void 0 !== g) {
                    if (g) continue;
                    v = !1;
                    break;
                  }
                  if (y) {
                    if (
                      !o(e, function (t, e) {
                        if (!a(y, e) && (b === t || s(b, t, r, i, c)))
                          return y.push(e);
                      })
                    ) {
                      v = !1;
                      break;
                    }
                  } else if (b !== m && !s(b, m, r, i, c)) {
                    v = !1;
                    break;
                  }
                }
                return (c.delete(t), c.delete(e), v);
              };
            },
            5950: (t, e, r) => {
              var n = r(695),
                o = r(8984),
                a = r(4894);
              t.exports = function (t) {
                return a(t) ? n(t) : o(t);
              };
            },
            6009: (t, e, r) => {
              t = r.nmd(t);
              var n = r(4840),
                o = e && !e.nodeType && e,
                a = o && t && !t.nodeType && t,
                i = a && a.exports === o && n.process,
                s = (function () {
                  try {
                    return (
                      (a && a.require && a.require("util").types) ||
                      (i && i.binding && i.binding("util"))
                    );
                  } catch (t) {}
                })();
              t.exports = s;
            },
            6025: (t, e, r) => {
              var n = r(5288);
              t.exports = function (t, e) {
                for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
                return -1;
              };
            },
            6110: (t, e, r) => {
              var n = r(5083),
                o = r(392);
              t.exports = function (t, e) {
                var r = o(t, e);
                return n(r) ? r : void 0;
              };
            },
            6449: (t) => {
              t.exports = Array.isArray;
            },
            6545: (t, e, r) => {
              t.exports = r(6110)(r(9325), "Set");
            },
            6721: (t, e, r) => {
              var n = r(1042),
                o = Object.prototype.hasOwnProperty;
              t.exports = function (t) {
                var e = this.__data__;
                if (n) {
                  var r = e[t];
                  return "__lodash_hash_undefined__" === r ? void 0 : r;
                }
                return o.call(e, t) ? e[t] : void 0;
              };
            },
            7068: (t, e, r) => {
              var n = r(7217),
                o = r(5911),
                a = r(1986),
                i = r(689),
                s = r(5861),
                c = r(6449),
                u = r(3656),
                l = r(7167),
                p = "[object Arguments]",
                f = "[object Array]",
                h = "[object Object]",
                d = Object.prototype.hasOwnProperty;
              t.exports = function (t, e, r, v, y, b) {
                var m = c(t),
                  g = c(e),
                  w = m ? f : s(t),
                  x = g ? f : s(e),
                  _ = (w = w == p ? h : w) == h,
                  j = (x = x == p ? h : x) == h,
                  E = w == x;
                if (E && u(t)) {
                  if (!u(e)) return !1;
                  ((m = !0), (_ = !1));
                }
                if (E && !_)
                  return (
                    b || (b = new n()),
                    m || l(t) ? o(t, e, r, v, y, b) : a(t, e, w, r, v, y, b)
                  );
                if (!(1 & r)) {
                  var M = _ && d.call(t, "__wrapped__"),
                    O = j && d.call(e, "__wrapped__");
                  if (M || O) {
                    var T = M ? t.value() : t,
                      S = O ? e.value() : e;
                    return (b || (b = new n()), y(T, S, r, v, b));
                  }
                }
                return !!E && (b || (b = new n()), i(t, e, r, v, y, b));
              };
            },
            7167: (t, e, r) => {
              var n = r(4901),
                o = r(7301),
                a = r(6009),
                i = a && a.isTypedArray;
              t.exports = i ? o(i) : n;
            },
            7217: (t, e, r) => {
              var n = r(79),
                o = r(1420),
                a = r(938),
                i = r(3605),
                s = r(9817),
                c = r(945);
              function u(t) {
                var e = (this.__data__ = new n(t));
                this.size = e.size;
              }
              ((u.prototype.clear = o),
                (u.prototype.delete = a),
                (u.prototype.get = i),
                (u.prototype.has = s),
                (u.prototype.set = c),
                (t.exports = u));
            },
            7296: (t, e, r) => {
              var n,
                o = r(5481),
                a = (n = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
                  ? "Symbol(src)_1." + n
                  : "";
              t.exports = function (t) {
                return !!a && a in t;
              };
            },
            7301: (t) => {
              t.exports = function (t) {
                return function (e) {
                  return t(e);
                };
              };
            },
            7473: (t) => {
              var e = Function.prototype.toString;
              t.exports = function (t) {
                if (null != t) {
                  try {
                    return e.call(t);
                  } catch (t) {}
                  try {
                    return t + "";
                  } catch (t) {}
                }
                return "";
              };
            },
            7534: (t, e, r) => {
              var n = r(2552),
                o = r(346);
              t.exports = function (t) {
                return o(t) && "[object Arguments]" == n(t);
              };
            },
            7670: (t, e, r) => {
              var n = r(2651);
              t.exports = function (t) {
                var e = n(this, t).delete(t);
                return ((this.size -= !!e), e);
              };
            },
            7828: (t, e, r) => {
              t.exports = r(9325).Uint8Array;
            },
            8096: (t) => {
              t.exports = function (t, e) {
                for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
                return n;
              };
            },
            8223: (t, e, r) => {
              t.exports = r(6110)(r(9325), "Map");
            },
            8303: (t, e, r) => {
              t.exports = r(6110)(r(9325), "WeakMap");
            },
            8655: (t, e, r) => {
              var n = r(6025);
              t.exports = function (t) {
                return n(this.__data__, t) > -1;
              };
            },
            8859: (t, e, r) => {
              var n = r(3661),
                o = r(1380),
                a = r(1459);
              function i(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.__data__ = new n(); ++e < r; ) this.add(t[e]);
              }
              ((i.prototype.add = i.prototype.push = o),
                (i.prototype.has = a),
                (t.exports = i));
            },
            8984: (t, e, r) => {
              var n = r(5527),
                o = r(3650),
                a = Object.prototype.hasOwnProperty;
              t.exports = function (t) {
                if (!n(t)) return o(t);
                var e = [];
                for (var r in Object(t))
                  a.call(t, r) && "constructor" != r && e.push(r);
                return e;
              };
            },
            9155: (t) => {
              "use strict";
              t.exports = n;
            },
            9219: (t) => {
              t.exports = function (t, e) {
                return t.has(e);
              };
            },
            9325: (t, e, r) => {
              var n = r(4840),
                o =
                  "object" == typeof self &&
                  self &&
                  self.Object === Object &&
                  self;
              t.exports = n || o || Function("return this")();
            },
            9350: (t) => {
              var e = Object.prototype.toString;
              t.exports = function (t) {
                return e.call(t);
              };
            },
            9770: (t) => {
              t.exports = function (t, e) {
                for (
                  var r = -1, n = null == t ? 0 : t.length, o = 0, a = [];
                  ++r < n;

                ) {
                  var i = t[r];
                  e(i, r, t) && (a[o++] = i);
                }
                return a;
              };
            },
            9817: (t) => {
              t.exports = function (t) {
                return this.__data__.has(t);
              };
            },
            9905: (t, e, r) => {
              "use strict";
              r.d(e, { default: () => O });
              var n = r(3146),
                o = r.n(n);
              let a = function (t) {
                  return new RegExp(/<[a-z][\s\S]*>/i).test(t);
                },
                i = function (t, e) {
                  return Math.floor(Math.random() * (e - t + 1)) + t;
                };
              var s = "TYPE_CHARACTER",
                c = "REMOVE_CHARACTER",
                u = "REMOVE_ALL",
                l = "REMOVE_LAST_VISIBLE_NODE",
                p = "PAUSE_FOR",
                f = "CALL_FUNCTION",
                h = "ADD_HTML_TAG_ELEMENT",
                d = "CHANGE_DELETE_SPEED",
                v = "CHANGE_DELAY",
                y = "CHANGE_CURSOR",
                b = "PASTE_STRING",
                m = "HTML_TAG";
              function g(t) {
                return (g =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      })(t);
              }
              function w(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  (e &&
                    (n = n.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    r.push.apply(r, n));
                }
                return r;
              }
              function x(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? w(Object(r), !0).forEach(function (e) {
                        E(t, e, r[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(r),
                        )
                      : w(Object(r)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(r, e),
                          );
                        });
                }
                return t;
              }
              function _(t) {
                return (
                  (function (t) {
                    if (Array.isArray(t)) return j(t);
                  })(t) ||
                  (function (t) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t["@@iterator"]
                    )
                      return Array.from(t);
                  })(t) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return j(t, void 0);
                      var r = {}.toString.call(t).slice(8, -1);
                      return (
                        "Object" === r &&
                          t.constructor &&
                          (r = t.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(t)
                          : "Arguments" === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? j(t, void 0)
                            : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })()
                );
              }
              function j(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n;
              }
              function E(t, e, r) {
                return (
                  (e = M(e)) in t
                    ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = r),
                  t
                );
              }
              function M(t) {
                var e = (function (t) {
                  if ("object" != g(t) || !t) return t;
                  var e = t[Symbol.toPrimitive];
                  if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != g(r)) return r;
                    throw TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return String(t);
                })(t);
                return "symbol" == g(e) ? e : e + "";
              }
              let O = (function () {
                var t;
                function e(t, r) {
                  var g = this;
                  if (
                    ((function (t, e) {
                      if (!(t instanceof e))
                        throw TypeError("Cannot call a class as a function");
                    })(this, e),
                    E(this, "state", {
                      cursorAnimation: null,
                      lastFrameTime: null,
                      pauseUntil: null,
                      eventQueue: [],
                      eventLoop: null,
                      eventLoopPaused: !1,
                      reverseCalledEvents: [],
                      calledEvents: [],
                      visibleNodes: [],
                      initialOptions: null,
                      elements: {
                        container: null,
                        wrapper: document.createElement("span"),
                        cursor: document.createElement("span"),
                      },
                    }),
                    E(this, "options", {
                      strings: null,
                      cursor: "|",
                      delay: "natural",
                      pauseFor: 1500,
                      deleteSpeed: "natural",
                      loop: !1,
                      autoStart: !1,
                      devMode: !1,
                      skipAddStyles: !1,
                      wrapperClassName: "Typewriter__wrapper",
                      cursorClassName: "Typewriter__cursor",
                      stringSplitter: null,
                      onCreateTextNode: null,
                      onRemoveNode: null,
                    }),
                    E(this, "setupWrapperElement", function () {
                      g.state.elements.container &&
                        ((g.state.elements.wrapper.className =
                          g.options.wrapperClassName),
                        (g.state.elements.cursor.className =
                          g.options.cursorClassName),
                        (g.state.elements.cursor.innerHTML = g.options.cursor),
                        (g.state.elements.container.innerHTML = ""),
                        g.state.elements.container.appendChild(
                          g.state.elements.wrapper,
                        ),
                        g.state.elements.container.appendChild(
                          g.state.elements.cursor,
                        ));
                    }),
                    E(this, "start", function () {
                      return (
                        (g.state.eventLoopPaused = !1),
                        g.runEventLoop(),
                        g
                      );
                    }),
                    E(this, "pause", function () {
                      return ((g.state.eventLoopPaused = !0), g);
                    }),
                    E(this, "stop", function () {
                      return (
                        g.state.eventLoop &&
                          ((0, n.cancel)(g.state.eventLoop),
                          (g.state.eventLoop = null)),
                        g
                      );
                    }),
                    E(this, "pauseFor", function (t) {
                      return (g.addEventToQueue(p, { ms: t }), g);
                    }),
                    E(this, "typeOutAllStrings", function () {
                      return (
                        "string" == typeof g.options.strings
                          ? g
                              .typeString(g.options.strings)
                              .pauseFor(g.options.pauseFor)
                          : g.options.strings.forEach(function (t) {
                              g.typeString(t)
                                .pauseFor(g.options.pauseFor)
                                .deleteAll(g.options.deleteSpeed);
                            }),
                        g
                      );
                    }),
                    E(this, "typeString", function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      if (a(t)) return g.typeOutHTMLString(t, e);
                      if (t) {
                        var r = (g.options || {}).stringSplitter,
                          n = "function" == typeof r ? r(t) : t.split("");
                        g.typeCharacters(n, e);
                      }
                      return g;
                    }),
                    E(this, "pasteString", function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      return a(t)
                        ? g.typeOutHTMLString(t, e, !0)
                        : (t && g.addEventToQueue(b, { character: t, node: e }),
                          g);
                    }),
                    E(this, "typeOutHTMLString", function (t) {
                      var e,
                        r =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        o =
                          (((e = document.createElement("div")).innerHTML = t),
                          e.childNodes);
                      if (o.length > 0)
                        for (var a = 0; a < o.length; a++) {
                          var i = o[a],
                            s = i.innerHTML;
                          i && 3 !== i.nodeType
                            ? ((i.innerHTML = ""),
                              g.addEventToQueue(h, { node: i, parentNode: r }),
                              n ? g.pasteString(s, i) : g.typeString(s, i))
                            : i.textContent &&
                              (n
                                ? g.pasteString(i.textContent, r)
                                : g.typeString(i.textContent, r));
                        }
                      return g;
                    }),
                    E(this, "deleteAll", function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "natural";
                      return (g.addEventToQueue(u, { speed: t }), g);
                    }),
                    E(this, "changeDeleteSpeed", function (t) {
                      if (!t) throw Error("Must provide new delete speed");
                      return (g.addEventToQueue(d, { speed: t }), g);
                    }),
                    E(this, "changeDelay", function (t) {
                      if (!t) throw Error("Must provide new delay");
                      return (g.addEventToQueue(v, { delay: t }), g);
                    }),
                    E(this, "changeCursor", function (t) {
                      if (!t) throw Error("Must provide new cursor");
                      return (g.addEventToQueue(y, { cursor: t }), g);
                    }),
                    E(this, "deleteChars", function (t) {
                      if (!t)
                        throw Error(
                          "Must provide amount of characters to delete",
                        );
                      for (var e = 0; e < t; e++) g.addEventToQueue(c);
                      return g;
                    }),
                    E(this, "callFunction", function (t, e) {
                      if (!t || "function" != typeof t)
                        throw Error("Callback must be a function");
                      return (g.addEventToQueue(f, { cb: t, thisArg: e }), g);
                    }),
                    E(this, "typeCharacters", function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      if (!t || !Array.isArray(t))
                        throw Error("Characters must be an array");
                      return (
                        t.forEach(function (t) {
                          g.addEventToQueue(s, { character: t, node: e });
                        }),
                        g
                      );
                    }),
                    E(this, "removeCharacters", function (t) {
                      if (!t || !Array.isArray(t))
                        throw Error("Characters must be an array");
                      return (
                        t.forEach(function () {
                          g.addEventToQueue(c);
                        }),
                        g
                      );
                    }),
                    E(this, "addEventToQueue", function (t, e) {
                      var r =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      return g.addEventToStateProperty(t, e, r, "eventQueue");
                    }),
                    E(this, "addReverseCalledEvent", function (t, e) {
                      var r =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      return g.options.loop
                        ? g.addEventToStateProperty(
                            t,
                            e,
                            r,
                            "reverseCalledEvents",
                          )
                        : g;
                    }),
                    E(this, "addEventToStateProperty", function (t, e) {
                      var r =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        o = { eventName: t, eventArgs: e || {} };
                      return (
                        (g.state[n] = r
                          ? [o].concat(_(g.state[n]))
                          : [].concat(_(g.state[n]), [o])),
                        g
                      );
                    }),
                    E(this, "runEventLoop", function () {
                      g.state.lastFrameTime ||
                        (g.state.lastFrameTime = Date.now());
                      var t = Date.now(),
                        e = t - g.state.lastFrameTime;
                      if (!g.state.eventQueue.length) {
                        if (!g.options.loop) return;
                        ((g.state.eventQueue = _(g.state.calledEvents)),
                          (g.state.calledEvents = []),
                          (g.options = x({}, g.state.initialOptions)));
                      }
                      if (
                        ((g.state.eventLoop = o()(g.runEventLoop)),
                        !g.state.eventLoopPaused)
                      ) {
                        if (g.state.pauseUntil) {
                          if (t < g.state.pauseUntil) return;
                          g.state.pauseUntil = null;
                        }
                        var r,
                          n = _(g.state.eventQueue),
                          a = n.shift();
                        if (
                          !(
                            e <=
                            (r =
                              a.eventName === l || a.eventName === c
                                ? "natural" === g.options.deleteSpeed
                                  ? i(40, 80)
                                  : g.options.deleteSpeed
                                : "natural" === g.options.delay
                                  ? i(120, 160)
                                  : g.options.delay)
                          )
                        ) {
                          var w = a.eventName,
                            j = a.eventArgs;
                          switch (
                            (g.logInDevMode({
                              currentEvent: a,
                              state: g.state,
                              delay: r,
                            }),
                            w)
                          ) {
                            case b:
                            case s:
                              var E = j.character,
                                M = j.node,
                                O = document.createTextNode(E),
                                T = O;
                              (g.options.onCreateTextNode &&
                                "function" ==
                                  typeof g.options.onCreateTextNode &&
                                (T = g.options.onCreateTextNode(E, O)),
                                T &&
                                  (M
                                    ? M.appendChild(T)
                                    : g.state.elements.wrapper.appendChild(T)),
                                (g.state.visibleNodes = [].concat(
                                  _(g.state.visibleNodes),
                                  [
                                    {
                                      type: "TEXT_NODE",
                                      character: E,
                                      node: T,
                                    },
                                  ],
                                )));
                              break;
                            case c:
                              n.unshift({
                                eventName: l,
                                eventArgs: { removingCharacterNode: !0 },
                              });
                              break;
                            case p:
                              var S = a.eventArgs.ms;
                              g.state.pauseUntil = Date.now() + parseInt(S);
                              break;
                            case f:
                              var A = a.eventArgs,
                                C = A.cb,
                                P = A.thisArg;
                              C.call(P, { elements: g.state.elements });
                              break;
                            case h:
                              var N = a.eventArgs,
                                k = N.node,
                                D = N.parentNode;
                              (D
                                ? D.appendChild(k)
                                : g.state.elements.wrapper.appendChild(k),
                                (g.state.visibleNodes = [].concat(
                                  _(g.state.visibleNodes),
                                  [
                                    {
                                      type: m,
                                      node: k,
                                      parentNode: D || g.state.elements.wrapper,
                                    },
                                  ],
                                )));
                              break;
                            case u:
                              var I = g.state.visibleNodes,
                                L = j.speed,
                                R = [];
                              L &&
                                R.push({
                                  eventName: d,
                                  eventArgs: { speed: L, temp: !0 },
                                });
                              for (var F = 0, z = I.length; F < z; F++)
                                R.push({
                                  eventName: l,
                                  eventArgs: { removingCharacterNode: !1 },
                                });
                              (L &&
                                R.push({
                                  eventName: d,
                                  eventArgs: {
                                    speed: g.options.deleteSpeed,
                                    temp: !0,
                                  },
                                }),
                                n.unshift.apply(n, R));
                              break;
                            case l:
                              var B = a.eventArgs.removingCharacterNode;
                              if (g.state.visibleNodes.length) {
                                var U = g.state.visibleNodes.pop(),
                                  Q = U.type,
                                  H = U.node,
                                  V = U.character;
                                (g.options.onRemoveNode &&
                                  "function" == typeof g.options.onRemoveNode &&
                                  g.options.onRemoveNode({
                                    node: H,
                                    character: V,
                                  }),
                                  H && H.parentNode.removeChild(H),
                                  Q === m &&
                                    B &&
                                    n.unshift({ eventName: l, eventArgs: {} }));
                              }
                              break;
                            case d:
                              g.options.deleteSpeed = a.eventArgs.speed;
                              break;
                            case v:
                              g.options.delay = a.eventArgs.delay;
                              break;
                            case y:
                              ((g.options.cursor = a.eventArgs.cursor),
                                (g.state.elements.cursor.innerHTML =
                                  a.eventArgs.cursor));
                          }
                          (g.options.loop &&
                            (a.eventName === l ||
                              (a.eventArgs && a.eventArgs.temp) ||
                              (g.state.calledEvents = [].concat(
                                _(g.state.calledEvents),
                                [a],
                              ))),
                            (g.state.eventQueue = n),
                            (g.state.lastFrameTime = t));
                        }
                      }
                    }),
                    t)
                  )
                    if ("string" == typeof t) {
                      var w = document.querySelector(t);
                      if (!w) throw Error("Could not find container element");
                      this.state.elements.container = w;
                    } else this.state.elements.container = t;
                  (r && (this.options = x(x({}, this.options), r)),
                    (this.state.initialOptions = x({}, this.options)),
                    this.init());
                }
                return (
                  (t = [
                    {
                      key: "init",
                      value: function () {
                        var t;
                        (this.setupWrapperElement(),
                          this.addEventToQueue(
                            y,
                            { cursor: this.options.cursor },
                            !0,
                          ),
                          this.addEventToQueue(u, null, !0),
                          !window ||
                            window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                            this.options.skipAddStyles ||
                            ((t = document.createElement("style")).appendChild(
                              document.createTextNode(
                                ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",
                              ),
                            ),
                            document.head.appendChild(t),
                            (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                          !0 === this.options.autoStart &&
                            this.options.strings &&
                            this.typeOutAllStrings().start());
                      },
                    },
                    {
                      key: "logInDevMode",
                      value: function (t) {
                        this.options.devMode && console.log(t);
                      },
                    },
                  ]),
                  (function (t, e) {
                    for (var r = 0; r < e.length; r++) {
                      var n = e[r];
                      ((n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(t, M(n.key), n));
                    }
                  })(e.prototype, t),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  e
                );
              })();
            },
            9935: (t) => {
              t.exports = function () {
                return !1;
              };
            },
          },
          e = {};
        function r(n) {
          var o = e[n];
          if (void 0 !== o) return o.exports;
          var a = (e[n] = { id: n, loaded: !1, exports: {} });
          return (
            t[n].call(a.exports, a, a.exports, r),
            (a.loaded = !0),
            a.exports
          );
        }
        ((r.n = (t) => {
          var e = t && t.__esModule ? () => t.default : () => t;
          return (r.d(e, { a: e }), e);
        }),
          (r.d = (t, e) => {
            for (var n in e)
              r.o(e, n) &&
                !r.o(t, n) &&
                Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
          }),
          (r.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
              return this || Function("return this")();
            } catch (t) {
              if ("object" == typeof window) return window;
            }
          })()),
          (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
          (r.nmd = (t) => (
            (t.paths = []),
            t.children || (t.children = []),
            t
          )));
        var a = {};
        return (
          (() => {
            "use strict";
            r.d(a, { default: () => d });
            var t = r(9155),
              e = r.n(t),
              n = r(9905),
              o = r(2404),
              i = r.n(o);
            function s(t) {
              return (s =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    })(t);
            }
            function c(t, e) {
              return (c = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return ((t.__proto__ = e), t);
                  })(t, e);
            }
            function u(t) {
              if (void 0 === t)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            }
            function l() {
              try {
                var t = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                );
              } catch (t) {}
              return (l = function () {
                return !!t;
              })();
            }
            function p(t) {
              return (p = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
            }
            function f(t) {
              var e = (function (t) {
                if ("object" != s(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                  var r = e.call(t, "string");
                  if ("object" != s(r)) return r;
                  throw TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(t);
              })(t);
              return "symbol" == s(e) ? e : e + "";
            }
            var h = (function (t) {
              if ("function" != typeof t && null !== t)
                throw TypeError(
                  "Super expression must either be null or a function",
                );
              ((h.prototype = Object.create(t && t.prototype, {
                constructor: { value: h, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(h, "prototype", { writable: !1 }),
                t && c(h, t));
              var r,
                o,
                a =
                  ((r = l()),
                  function () {
                    var t,
                      e = p(h);
                    if (
                      ((t = r
                        ? Reflect.construct(e, arguments, p(this).constructor)
                        : e.apply(this, arguments)),
                      t && ("object" == s(t) || "function" == typeof t))
                    )
                      return t;
                    if (void 0 !== t)
                      throw TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return u(this);
                  });
              function h() {
                var t, e, r, n;
                if (!(this instanceof h))
                  throw TypeError("Cannot call a class as a function");
                for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
                  i[s] = arguments[s];
                return (
                  (e = u((t = a.call.apply(a, [this].concat(i))))),
                  (n = { instance: null }),
                  (r = f((r = "state"))) in e
                    ? Object.defineProperty(e, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[r] = n),
                  t
                );
              }
              return (
                (o = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var t = this,
                        e = new n.default(this.typewriter, this.props.options);
                      this.setState({ instance: e }, function () {
                        var r = t.props.onInit;
                        r && r(e);
                      });
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (t) {
                      i()(this.props.options, t.options) ||
                        this.setState({
                          instance: new n.default(
                            this.typewriter,
                            this.props.options,
                          ),
                        });
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.state.instance && this.state.instance.stop();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = this,
                        r = this.props.component;
                      return e().createElement(r, {
                        ref: function (e) {
                          return (t.typewriter = e);
                        },
                        className: "Typewriter",
                        "data-testid": "typewriter-wrapper",
                      });
                    },
                  },
                ]),
                (function (t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    ((n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(t, f(n.key), n));
                  }
                })(h.prototype, o),
                Object.defineProperty(h, "prototype", { writable: !1 }),
                h
              );
            })(t.Component);
            h.defaultProps = { component: "div" };
            let d = h;
          })(),
          a.default
        );
      })()));
  },
  61260,
  (t) => {
    "use strict";
    var e = t.i(43476),
      r = t.i(27805);
    function n(t) {
      return (0, e.jsx)(r.default, { ...t });
    }
    t.s(["default", () => n]);
  },
  36431,
  (t) => {
    "use strict";
    var e = t.i(43476),
      r = {};
    !(function t(e, r, n, o) {
      var a,
        i,
        s,
        c,
        u,
        l,
        p,
        f,
        h,
        d,
        v,
        y = !!(
          e.Worker &&
          e.Blob &&
          e.Promise &&
          e.OffscreenCanvas &&
          e.OffscreenCanvasRenderingContext2D &&
          e.HTMLCanvasElement &&
          e.HTMLCanvasElement.prototype.transferControlToOffscreen &&
          e.URL &&
          e.URL.createObjectURL
        ),
        b = "function" == typeof Path2D && "function" == typeof DOMMatrix;
      function m() {}
      function g(t) {
        var n = r.exports.Promise,
          o = void 0 !== n ? n : e.Promise;
        return "function" == typeof o ? new o(t) : (t(m, m), null);
      }
      var w =
          ((a = (function () {
            if (!e.OffscreenCanvas) return !1;
            var t = new OffscreenCanvas(1, 1),
              r = t.getContext("2d");
            r.fillRect(0, 0, 1, 1);
            var n = t.transferToImageBitmap();
            try {
              r.createPattern(n, "no-repeat");
            } catch (t) {
              return !1;
            }
            return !0;
          })()),
          (i = new Map()),
          {
            transform: function (t) {
              if (a) return t;
              if (i.has(t)) return i.get(t);
              var e = new OffscreenCanvas(t.width, t.height);
              return (e.getContext("2d").drawImage(t, 0, 0), i.set(t, e), e);
            },
            clear: function () {
              i.clear();
            },
          }),
        x =
          ((u = Math.floor(1e3 / 60)),
          (l = {}),
          (p = 0),
          "function" == typeof requestAnimationFrame &&
          "function" == typeof cancelAnimationFrame
            ? ((s = function (t) {
                var e = Math.random();
                return (
                  (l[e] = requestAnimationFrame(function r(n) {
                    p === n || p + u - 1 < n
                      ? ((p = n), delete l[e], t())
                      : (l[e] = requestAnimationFrame(r));
                  })),
                  e
                );
              }),
              (c = function (t) {
                l[t] && cancelAnimationFrame(l[t]);
              }))
            : ((s = function (t) {
                return setTimeout(t, u);
              }),
              (c = function (t) {
                return clearTimeout(t);
              })),
          { frame: s, cancel: c }),
        _ =
          ((d = {}),
          function () {
            if (f) return f;
            if (!n && y) {
              var e = [
                "var CONFETTI, SIZE = {}, module = {};",
                "(" + t.toString() + ")(this, module, true, SIZE);",
                "onmessage = function(msg) {\n  if (msg.data.options) {\n    CONFETTI(msg.data.options).then(function () {\n      if (msg.data.callback) {\n        postMessage({ callback: msg.data.callback });\n      }\n    });\n  } else if (msg.data.reset) {\n    CONFETTI && CONFETTI.reset();\n  } else if (msg.data.resize) {\n    SIZE.width = msg.data.resize.width;\n    SIZE.height = msg.data.resize.height;\n  } else if (msg.data.canvas) {\n    SIZE.width = msg.data.canvas.width;\n    SIZE.height = msg.data.canvas.height;\n    CONFETTI = module.exports.create(msg.data.canvas);\n  }\n}",
              ].join("\n");
              try {
                f = new Worker(URL.createObjectURL(new Blob([e])));
              } catch (t) {
                return (
                  "function" == typeof console.warn &&
                    console.warn("🎊 Could not load worker", t),
                  null
                );
              }
              var r = f;
              function o(t, e) {
                r.postMessage({ options: t || {}, callback: e });
              }
              ((r.init = function (t) {
                var e = t.transferControlToOffscreen();
                r.postMessage({ canvas: e }, [e]);
              }),
                (r.fire = function (t, e, n) {
                  if (h) return (o(t, null), h);
                  var a = Math.random().toString(36).slice(2);
                  return (h = g(function (e) {
                    function i(t) {
                      t.data.callback === a &&
                        (delete d[a],
                        r.removeEventListener("message", i),
                        (h = null),
                        w.clear(),
                        n(),
                        e());
                    }
                    (r.addEventListener("message", i),
                      o(t, a),
                      (d[a] = i.bind(null, { data: { callback: a } })));
                  }));
                }),
                (r.reset = function () {
                  for (var t in (r.postMessage({ reset: !0 }), d))
                    (d[t](), delete d[t]);
                }));
            }
            return f;
          }),
        j = {
          particleCount: 50,
          angle: 90,
          spread: 45,
          startVelocity: 45,
          decay: 0.9,
          gravity: 1,
          drift: 0,
          ticks: 200,
          x: 0.5,
          y: 0.5,
          shapes: ["square", "circle"],
          zIndex: 100,
          colors: [
            "#26ccff",
            "#a25afd",
            "#ff5e7e",
            "#88ff5a",
            "#fcff42",
            "#ffa62d",
            "#ff36ff",
          ],
          disableForReducedMotion: !1,
          scalar: 1,
        };
      function E(t, e, r) {
        var n;
        return ((n = t && null != t[e] ? t[e] : j[e]), r ? r(n) : n);
      }
      function M(t) {
        return t < 0 ? 0 : Math.floor(t);
      }
      function O(t) {
        return parseInt(t, 16);
      }
      function T(t) {
        return t.map(S);
      }
      function S(t) {
        var e = String(t).replace(/[^0-9a-f]/gi, "");
        return (
          e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
          {
            r: O(e.substring(0, 2)),
            g: O(e.substring(2, 4)),
            b: O(e.substring(4, 6)),
          }
        );
      }
      function A(t) {
        ((t.width = document.documentElement.clientWidth),
          (t.height = document.documentElement.clientHeight));
      }
      function C(t) {
        var e = t.getBoundingClientRect();
        ((t.width = e.width), (t.height = e.height));
      }
      function P(t, r) {
        var a,
          i = !t,
          s = !!E(r || {}, "resize"),
          c = !1,
          u = E(r, "disableForReducedMotion", Boolean),
          l = y && E(r || {}, "useWorker") ? _() : null,
          p = i ? A : C,
          f = !!t && !!l && !!t.__confetti_initialized,
          h =
            "function" == typeof matchMedia &&
            matchMedia("(prefers-reduced-motion)").matches;
        function d(r) {
          var d,
            v = u || E(r, "disableForReducedMotion", Boolean),
            y = E(r, "zIndex", Number);
          if (v && h)
            return g(function (t) {
              t();
            });
          (i && a
            ? (t = a.canvas)
            : i &&
              !t &&
              (((d = document.createElement("canvas")).style.position =
                "fixed"),
              (d.style.top = "0px"),
              (d.style.left = "0px"),
              (d.style.pointerEvents = "none"),
              (d.style.zIndex = y),
              (t = d),
              document.body.appendChild(t)),
            s && !f && p(t));
          var m = { width: t.width, height: t.height };
          function _() {
            if (l) {
              var e = {
                getBoundingClientRect: function () {
                  if (!i) return t.getBoundingClientRect();
                },
              };
              (p(e),
                l.postMessage({
                  resize: { width: e.width, height: e.height },
                }));
              return;
            }
            m.width = m.height = null;
          }
          function j() {
            ((a = null),
              s && ((c = !1), e.removeEventListener("resize", _)),
              i &&
                t &&
                (document.body.contains(t) && document.body.removeChild(t),
                (t = null),
                (f = !1)));
          }
          return (l && !f && l.init(t),
          (f = !0),
          l && (t.__confetti_initialized = !0),
          s && !c && ((c = !0), e.addEventListener("resize", _, !1)),
          l)
            ? l.fire(r, m, j)
            : (function (e, r, i) {
                for (
                  var s,
                    c,
                    u,
                    l,
                    f,
                    h,
                    d,
                    v = E(e, "particleCount", M),
                    y = E(e, "angle", Number),
                    m = E(e, "spread", Number),
                    _ = E(e, "startVelocity", Number),
                    j = E(e, "decay", Number),
                    O = E(e, "gravity", Number),
                    S = E(e, "drift", Number),
                    A = E(e, "colors", T),
                    C = E(e, "ticks", Number),
                    P = E(e, "shapes"),
                    N = E(e, "scalar"),
                    k = !!E(e, "flat"),
                    D =
                      (((s = E(e, "origin", Object)).x = E(s, "x", Number)),
                      (s.y = E(s, "y", Number)),
                      s),
                    I = v,
                    L = [],
                    R = t.width * D.x,
                    F = t.height * D.y;
                  I--;

                )
                  L.push(
                    (function (t) {
                      var e = t.angle * (Math.PI / 180),
                        r = t.spread * (Math.PI / 180);
                      return {
                        x: t.x,
                        y: t.y,
                        wobble: 10 * Math.random(),
                        wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05),
                        velocity:
                          0.5 * t.startVelocity +
                          Math.random() * t.startVelocity,
                        angle2D: -e + (0.5 * r - Math.random() * r),
                        tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI,
                        color: t.color,
                        shape: t.shape,
                        tick: 0,
                        totalTicks: t.ticks,
                        decay: t.decay,
                        drift: t.drift,
                        random: Math.random() + 2,
                        tiltSin: 0,
                        tiltCos: 0,
                        wobbleX: 0,
                        wobbleY: 0,
                        gravity: 3 * t.gravity,
                        ovalScalar: 0.6,
                        scalar: t.scalar,
                        flat: t.flat,
                      };
                    })({
                      x: R,
                      y: F,
                      angle: y,
                      spread: m,
                      startVelocity: _,
                      color: A[I % A.length],
                      shape: P[Math.floor(Math.random() * (P.length - 0)) + 0],
                      ticks: C,
                      decay: j,
                      gravity: O,
                      drift: S,
                      scalar: N,
                      flat: k,
                    }),
                  );
                return a
                  ? a.addFettis(L)
                  : ((c = t),
                    (f = L.slice()),
                    (h = c.getContext("2d")),
                    (d = g(function (t) {
                      function e() {
                        ((u = l = null),
                          h.clearRect(0, 0, r.width, r.height),
                          w.clear(),
                          i(),
                          t());
                      }
                      ((u = x.frame(function t() {
                        (n &&
                          (r.width !== o.width || r.height !== o.height) &&
                          ((r.width = c.width = o.width),
                          (r.height = c.height = o.height)),
                          r.width ||
                            r.height ||
                            (p(c), (r.width = c.width), (r.height = c.height)),
                          h.clearRect(0, 0, r.width, r.height),
                          (f = f.filter(function (t) {
                            return (function (t, e) {
                              ((e.x +=
                                Math.cos(e.angle2D) * e.velocity + e.drift),
                                (e.y +=
                                  Math.sin(e.angle2D) * e.velocity + e.gravity),
                                (e.velocity *= e.decay),
                                e.flat
                                  ? ((e.wobble = 0),
                                    (e.wobbleX = e.x + 10 * e.scalar),
                                    (e.wobbleY = e.y + 10 * e.scalar),
                                    (e.tiltSin = 0),
                                    (e.tiltCos = 0),
                                    (e.random = 1))
                                  : ((e.wobble += e.wobbleSpeed),
                                    (e.wobbleX =
                                      e.x + 10 * e.scalar * Math.cos(e.wobble)),
                                    (e.wobbleY =
                                      e.y + 10 * e.scalar * Math.sin(e.wobble)),
                                    (e.tiltAngle += 0.1),
                                    (e.tiltSin = Math.sin(e.tiltAngle)),
                                    (e.tiltCos = Math.cos(e.tiltAngle)),
                                    (e.random = Math.random() + 2)));
                              var r,
                                n,
                                o,
                                a,
                                i,
                                s,
                                c,
                                u,
                                l,
                                p,
                                f,
                                h,
                                d,
                                v,
                                y,
                                m,
                                g = e.tick++ / e.totalTicks,
                                x = e.x + e.random * e.tiltCos,
                                _ = e.y + e.random * e.tiltSin,
                                j = e.wobbleX + e.random * e.tiltCos,
                                E = e.wobbleY + e.random * e.tiltSin;
                              if (
                                ((t.fillStyle =
                                  "rgba(" +
                                  e.color.r +
                                  ", " +
                                  e.color.g +
                                  ", " +
                                  e.color.b +
                                  ", " +
                                  (1 - g) +
                                  ")"),
                                t.beginPath(),
                                b &&
                                  "path" === e.shape.type &&
                                  "string" == typeof e.shape.path &&
                                  Array.isArray(e.shape.matrix))
                              ) {
                                t.fill(
                                  ((r = e.shape.path),
                                  (n = e.shape.matrix),
                                  (o = e.x),
                                  (a = e.y),
                                  (i = 0.1 * Math.abs(j - x)),
                                  (s = 0.1 * Math.abs(E - _)),
                                  (c = (Math.PI / 10) * e.wobble),
                                  (u = new Path2D(r)),
                                  (l = new Path2D()).addPath(
                                    u,
                                    new DOMMatrix(n),
                                  ),
                                  (p = new Path2D()).addPath(
                                    l,
                                    new DOMMatrix([
                                      Math.cos(c) * i,
                                      Math.sin(c) * i,
                                      -Math.sin(c) * s,
                                      Math.cos(c) * s,
                                      o,
                                      a,
                                    ]),
                                  ),
                                  p),
                                );
                              } else if ("bitmap" === e.shape.type) {
                                var M = (Math.PI / 10) * e.wobble,
                                  O = 0.1 * Math.abs(j - x),
                                  T = 0.1 * Math.abs(E - _),
                                  S = e.shape.bitmap.width * e.scalar,
                                  A = e.shape.bitmap.height * e.scalar,
                                  C = new DOMMatrix([
                                    Math.cos(M) * O,
                                    Math.sin(M) * O,
                                    -Math.sin(M) * T,
                                    Math.cos(M) * T,
                                    e.x,
                                    e.y,
                                  ]);
                                C.multiplySelf(new DOMMatrix(e.shape.matrix));
                                var P = t.createPattern(
                                  w.transform(e.shape.bitmap),
                                  "no-repeat",
                                );
                                (P.setTransform(C),
                                  (t.globalAlpha = 1 - g),
                                  (t.fillStyle = P),
                                  t.fillRect(e.x - S / 2, e.y - A / 2, S, A),
                                  (t.globalAlpha = 1));
                              } else if ("circle" === e.shape)
                                t.ellipse
                                  ? t.ellipse(
                                      e.x,
                                      e.y,
                                      Math.abs(j - x) * e.ovalScalar,
                                      Math.abs(E - _) * e.ovalScalar,
                                      (Math.PI / 10) * e.wobble,
                                      0,
                                      2 * Math.PI,
                                    )
                                  : ((f = e.x),
                                    (h = e.y),
                                    (d = Math.abs(j - x) * e.ovalScalar),
                                    (v = Math.abs(E - _) * e.ovalScalar),
                                    (y = (Math.PI / 10) * e.wobble),
                                    (m = 2 * Math.PI),
                                    t.save(),
                                    t.translate(f, h),
                                    t.rotate(y),
                                    t.scale(d, v),
                                    t.arc(0, 0, 1, 0, m, void 0),
                                    t.restore());
                              else if ("star" === e.shape)
                                for (
                                  var N = (Math.PI / 2) * 3,
                                    k = 4 * e.scalar,
                                    D = 8 * e.scalar,
                                    I = e.x,
                                    L = e.y,
                                    R = 5,
                                    F = Math.PI / 5;
                                  R--;

                                )
                                  ((I = e.x + Math.cos(N) * D),
                                    (L = e.y + Math.sin(N) * D),
                                    t.lineTo(I, L),
                                    (N += F),
                                    (I = e.x + Math.cos(N) * k),
                                    (L = e.y + Math.sin(N) * k),
                                    t.lineTo(I, L),
                                    (N += F));
                              else
                                (t.moveTo(Math.floor(e.x), Math.floor(e.y)),
                                  t.lineTo(
                                    Math.floor(e.wobbleX),
                                    Math.floor(_),
                                  ),
                                  t.lineTo(Math.floor(j), Math.floor(E)),
                                  t.lineTo(
                                    Math.floor(x),
                                    Math.floor(e.wobbleY),
                                  ));
                              return (
                                t.closePath(),
                                t.fill(),
                                e.tick < e.totalTicks
                              );
                            })(h, t);
                          })).length
                            ? (u = x.frame(t))
                            : e());
                      })),
                        (l = e));
                    })),
                    (a = {
                      addFettis: function (t) {
                        return ((f = f.concat(t)), d);
                      },
                      canvas: c,
                      promise: d,
                      reset: function () {
                        (u && x.cancel(u), l && l());
                      },
                    }).promise);
              })(r, m, j);
        }
        return (
          (d.reset = function () {
            (l && l.reset(), a && a.reset());
          }),
          d
        );
      }
      function N() {
        return (v || (v = P(null, { useWorker: !0, resize: !0 })), v);
      }
      ((r.exports = function () {
        return N().apply(this, arguments);
      }),
        (r.exports.reset = function () {
          N().reset();
        }),
        (r.exports.create = P),
        (r.exports.shapeFromPath = function (t) {
          if (!b)
            throw Error("path confetti are not supported in this browser");
          "string" == typeof t ? (n = t) : ((n = t.path), (o = t.matrix));
          var e = new Path2D(n),
            r = document.createElement("canvas").getContext("2d");
          if (!o) {
            for (
              var n, o, a, i, s = 1e3, c = 1e3, u = 0, l = 0, p = 0;
              p < 1e3;
              p += 2
            )
              for (var f = 0; f < 1e3; f += 2)
                r.isPointInPath(e, p, f, "nonzero") &&
                  ((s = Math.min(s, p)),
                  (c = Math.min(c, f)),
                  (u = Math.max(u, p)),
                  (l = Math.max(l, f)));
            a = u - s;
            var h = Math.min(10 / a, 10 / (i = l - c));
            o = [
              h,
              0,
              0,
              h,
              -Math.round(a / 2 + s) * h,
              -Math.round(i / 2 + c) * h,
            ];
          }
          return { type: "path", path: n, matrix: o };
        }),
        (r.exports.shapeFromText = function (t) {
          var e,
            r = 1,
            n = "#000000",
            o =
              '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
          "string" == typeof t
            ? (e = t)
            : ((e = t.text),
              (r = "scalar" in t ? t.scalar : r),
              (o = "fontFamily" in t ? t.fontFamily : o),
              (n = "color" in t ? t.color : n));
          var a = 10 * r,
            i = "" + a + "px " + o,
            s = new OffscreenCanvas(a, a),
            c = s.getContext("2d");
          c.font = i;
          var u = c.measureText(e),
            l = Math.ceil(u.actualBoundingBoxRight + u.actualBoundingBoxLeft),
            p = Math.ceil(
              u.actualBoundingBoxAscent + u.actualBoundingBoxDescent,
            ),
            f = u.actualBoundingBoxLeft + 2,
            h = u.actualBoundingBoxAscent + 2;
          ((l += 4),
            (p += 4),
            ((c = (s = new OffscreenCanvas(l, p)).getContext("2d")).font = i),
            (c.fillStyle = n),
            c.fillText(e, f, h));
          var d = 1 / r;
          return {
            type: "bitmap",
            bitmap: s.transferToImageBitmap(),
            matrix: [d, 0, 0, d, (-l * d) / 2, (-p * d) / 2],
          };
        }));
    })(
      (function () {
        return "undefined" != typeof window
          ? window
          : "undefined" != typeof self
            ? self
            : this || {};
      })(),
      r,
      !1,
    );
    let n = r.exports;
    r.exports.create;
    var o = t.i(71645);
    t.s(
      [
        "default",
        0,
        () => (
          (0, o.useEffect)(() => {
            let t = setInterval(() => {
              n();
            }, 3e3);
            return () => {
              clearInterval(t);
            };
          }),
          (0, e.jsx)("div", {})
        ),
      ],
      36431,
    );
  },
]);
