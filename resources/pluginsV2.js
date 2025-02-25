/*! VelocityJS Version 1.1.0 */ ! function(e) {
    function t(e) {
        var t = e.length,
            r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var $ = function(e, t) {
            return new $.fn.init(e, t)
        };
        $.isWindow = function(e) {
            return null != e && e == e.window
        }, $.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
        }, $.isArray = Array.isArray || function(e) {
            return "array" === $.type(e)
        }, $.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            for (t in e);
            return void 0 === t || n.call(e, t)
        }, $.each = function(e, r, a) {
            var n, o = 0,
                i = e.length,
                s = t(e);
            if (a) {
                if (s)
                    for (; i > o && (n = r.apply(e[o], a), n !== !1); o++);
                else
                    for (o in e)
                        if (n = r.apply(e[o], a), n === !1) break
            } else if (s)
                for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++);
            else
                for (o in e)
                    if (n = r.call(e[o], o, e[o]), n === !1) break;
            return e
        }, $.data = function(e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando],
                    o = n && r[n];
                if (void 0 === t) return o;
                if (o && t in o) return o[t]
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {}, r[n][t] = a, a
            }
        }, $.removeData = function(e, t) {
            var a = e[$.expando],
                n = a && r[a];
            n && $.each(t, function(e, t) {
                delete n[t]
            })
        }, $.extend = function() {
            var e, t, r, a, n, o, i = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), s === l && (i = this, s--); l > s; s++)
                if (null != (n = arguments[s]))
                    for (a in n) e = i[a], r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i
        }, $.queue = function(e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? ! function(e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a;) e[n++] = t[a++];
                    if (r !== r)
                        for (; void 0 !== t[a];) e[n++] = t[a++];
                    return e.length = n, e
                }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
            }
            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || []
            }
        }, $.dequeue = function(e, t) {
            $.each(e.nodeType ? [e] : e, function(e, r) {
                t = t || "fx";
                var a = $.queue(r, t),
                    n = a.shift();
                "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), n.call(r, function() {
                    $.dequeue(r, t)
                }))
            })
        }, $.fn = $.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    r = this.offset(),
                    a = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: r.top - a.top,
                    left: r.left - a.left
                }
            }
        };
        var r = {};
        $.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn, e.Velocity = {
            Utilities: $
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                var n = e[t];
                n && a.push(n)
            }
            return a
        }

        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
        }

        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t
        }

        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function i(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e
            }

            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
            }

            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o) return r;
                    var i = l(r, e, a) - t;
                    r -= i / o
                }
                return r
            }

            function p() {
                for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a)
            }

            function f(t, r, n) {
                var o, i, s = 0;
                do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
                return i
            }

            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]),
                    s = r + i * x,
                    l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
            }

            function g() {
                V = !0, (e != r || a != n) && p()
            }
            var m = 4,
                y = .001,
                h = 1e-7,
                v = 10,
                b = 11,
                x = 1 / (b - 1),
                S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var P = 0; 4 > P; ++P)
                if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b),
                V = !1,
                C = function(t) {
                    return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
                };
            C.getControlPoints = function() {
                return [{
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                }]
            };
            var T = "generateBezier(" + [e, r, a, n] + ")";
            return C.toString = function() {
                return T
            }, C
        }

        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r
        }

        function c(e) {
            if (e)
                for (var t = (new Date).getTime(), r = 0, n = v.State.calls.length; n > r; r++)
                    if (v.State.calls[r]) {
                        var o = v.State.calls[r],
                            s = o[0],
                            l = o[2],
                            u = o[3],
                            f = !!u;
                        u || (u = v.State.calls[r][3] = t - 16);
                        for (var d = Math.min((t - u) / l.duration, 1), m = 0, y = s.length; y > m; m++) {
                            var h = s[m],
                                b = h.element;
                            if (i(b)) {
                                var S = !1;
                                if (l.display !== a && null !== l.display && "none" !== l.display) {
                                    if ("flex" === l.display) {
                                        var w = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        $.each(w, function(e, t) {
                                            x.setPropertyValue(b, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(b, "display", l.display)
                                }
                                l.visibility !== a && "hidden" !== l.visibility && x.setPropertyValue(b, "visibility", l.visibility);
                                for (var V in h)
                                    if ("element" !== V) {
                                        var C = h[V],
                                            T, k = g.isString(C.easing) ? v.Easings[C.easing] : C.easing;
                                        if (1 === d) T = C.endValue;
                                        else if (T = C.startValue + (C.endValue - C.startValue) * k(d), !f && T === C.currentValue) continue;
                                        if (C.currentValue = T, x.Hooks.registered[V]) {
                                            var A = x.Hooks.getRoot(V),
                                                F = i(b).rootPropertyValueCache[A];
                                            F && (C.rootPropertyValue = F)
                                        }
                                        var E = x.setPropertyValue(b, V, C.currentValue + (0 === parseFloat(T) ? "" : C.unitType), C.rootPropertyValue, C.scrollData);
                                        x.Hooks.registered[V] && (i(b).rootPropertyValueCache[A] = x.Normalizations.registered[A] ? x.Normalizations.registered[A]("extract", null, E[1]) : E[1]), "transform" === E[0] && (S = !0)
                                    }
                                l.mobileHA && i(b).transformCache.translate3d === a && (i(b).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && x.flushTransformCache(b)
                            }
                        }
                        l.display !== a && "none" !== l.display && (v.State.calls[r][2].display = !1), l.visibility !== a && "hidden" !== l.visibility && (v.State.calls[r][2].visibility = !1), l.progress && l.progress.call(o[1], o[1], d, Math.max(0, u + l.duration - t), u), 1 === d && p(r)
                    }
            v.State.isTicking && P(c)
        }

        function p(e, t) {
            if (!v.State.calls[e]) return !1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0,
                            n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, delete i(p).transformCache[t])
                    }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(n, n)
                } catch (d) {
                    setTimeout(function() {
                        throw d
                    }, 1)
                }
                s && o.loop !== !0 && s(n), o.loop !== !0 || t || ($.each(i(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360)
                }), v(p, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && $.dequeue(p, o.queue)
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++)
                if (v.State.calls[g] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
        }
        var f = function() {
                if (r.documentMode) return r.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = r.createElement("div");
                    if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                }
                return a
            }(),
            d = function() {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                    var r = (new Date).getTime(),
                        a;
                    return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function() {
                        t(r + a)
                    }, a)
                }
            }(),
            g = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isNodeList: function(e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                },
                isWrapped: function(e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                },
                isSVG: function(e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                }
            },
            $, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400,
            h = "swing",
            v = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: r.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: $,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: y,
                    easing: h,
                    begin: a,
                    complete: a,
                    progress: a,
                    display: a,
                    visibility: a,
                    loop: !1,
                    delay: false,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(e) {
                    $.data(e, "velocity", {
                        isSVG: g.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 1,
                    patch: 0
                },
                debug: !1
            };
        t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, r, a) {
                var n = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                }
            }

            function r(r, a) {
                var n = {
                        dx: r.v,
                        dv: e(r)
                    },
                    o = t(r, .5 * a, n),
                    i = t(r, .5 * a, o),
                    s = t(r, a, i),
                    l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
                    u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r
            }
            return function a(e, t, n) {
                var o = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    i = [0],
                    s = 0,
                    l = 1e-4,
                    u = .016,
                    c, p, f;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u;;)
                    if (f = r(f || o, p), i.push(1 + f.x), s += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l)) break;
                return c ? function(e) {
                    return i[e * (i.length - 1) | 0]
                } : s
            }
        }();
        v.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, $.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(e, t) {
            v.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = v.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var r, a, n;
                    if (f)
                        for (r in x.Hooks.templates) {
                            a = x.Hooks.templates[r], n = a[0].split(" ");
                            var o = a[1].match(x.RegEx.valueSplit);
                            "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[r] = [n.join(" "), o.join(" ")])
                        }
                    for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e],
                                s = e;
                            x.Hooks.registered[i] = [r, s]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                },
                extractValue: function(e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0],
                            n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n]
                    }
                    return t
                },
                injectValue: function(e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var n = a[0],
                            o = a[1],
                            i, s;
                        return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), i[o] = t, s = i.join(" ")
                    }
                    return r
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var a;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
                            case "inject":
                                return "rect(" + r + ")"
                        }
                    },
                    blur: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return "-webkit-filter";
                            case "extract":
                                var a = parseFloat(r);
                                if (!a && 0 !== a) {
                                    var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    a = n ? n[1] : 0
                                }
                                return a;
                            case "inject":
                                return parseFloat(r) ? "blur(" + r + ")" : "none"
                        }
                    },
                    opacity: function(e, t, r) {
                        if (8 >= f) switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                return r = a ? a[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                        } else switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return r;
                            case "inject":
                                return r
                        }
                    }
                },
                register: function() {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
                        var t = x.Lists.transformsBase[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var o = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                            break;
                                        case "scal":
                                        case "scale":
                                            v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                            break;
                                        case "skew":
                                            o = !/(deg|\d)$/i.test(n);
                                            break;
                                        case "rotate":
                                            o = !/(deg|\d)$/i.test(n)
                                    }
                                    return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t]
                            }
                        }
                    }();
                    for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
                        var t = x.Lists.colors[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var o;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
                                    else {
                                        var i, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                                case "inject":
                                    return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                },
                prefixCheck: function(e) {
                    if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }), g.isString(v.State.prefixElement.style[n])) return v.State.prefixMatches[e] = n, [n, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                        a;
                    return e = e.replace(t, function(e, t, r, a) {
                        return t + t + r + r + a + a
                    }), a = r.exec(e), a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= f) l = $.css(e, r);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), (f || v.State.isFirefox) && "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], ("" === l || null === l) && (l = e.style[r]), n()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px")
                    }
                    return l
                }
                var l;
                if (x.Hooks.registered[r]) {
                    var u = r,
                        c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), l = x.Hooks.extractValue(u, n)
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), l = x.Normalizations.registered[r]("extract", e, d)
                }
                return /^[\d-]/.test(l) || (l = i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? /^(height|width)$/i.test(r) ? e.getBBox()[r] : e.getAttribute(r) : s(e, x.Names.prefixCheck(r)[0])), x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), l
            },
            setPropertyValue: function(e, r, a, n, o) {
                var s = r;
                if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
                else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];
                else {
                    if (x.Hooks.registered[r]) {
                        var l = r,
                            u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f) try {
                        e.style[s] = a
                    } catch (c) {
                        v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                    } else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                }
                return [s, a]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }
                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    $.each(i(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e])
                    })
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function(t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "))
                    }), o && (r = "perspective" + o + " " + r)
                }
                x.setPropertyValue(e, "transform", r)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, r) {
            var n = a;
            return e = o(e), $.each(e, function(e, o) {
                if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t));
                else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o), n = s
                }
            }), n
        };
        var S = function() {
            function e() {
                return f ? k.promise || null : d
            }

            function s() {
                function e(e) {
                    function f(e, t) {
                        var r = a,
                            n = a,
                            i = a;
                        return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? i = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), g.isFunction(r) && (r = r.call(o, V, w)), g.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i]
                    }

                    function d(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return r = e, ""
                        }), r || (r = x.Values.getUnitType(e)), [a, r]
                    }

                    function m() {
                        var e = {
                                myParent: o.parentNode || r.body,
                                position: x.getPropertyValue(o, "position"),
                                fontSize: x.getPropertyValue(o, "fontSize")
                            },
                            a = e.position === L.lastPosition && e.myParent === L.lastParent,
                            n = e.fontSize === L.lastFontSize;
                        L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                        var s = 100,
                            l = {};
                        if (n && a) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                        else {
                            var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u), e.myParent.appendChild(u), $.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden")
                            }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%")
                            }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                        }
                        return null === L.remToPx && (L.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                    }
                    if (s.begin && 0 === V) try {
                        s.begin.call(h, h)
                    } catch (y) {
                        setTimeout(function() {
                            throw y
                        }, 1)
                    }
                    if ("scroll" === A) {
                        var S = /^x$/i.test(s.axis) ? "Left" : "Top",
                            C = parseFloat(s.offset) || 0,
                            T, F, E;
                        s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, T = s.container["scroll" + S], E = T + $(o).position()[S.toLowerCase()] + C) : s.container = null : (T = v.State.scrollAnchor[v.State["scrollProperty" + S]], F = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], E = $(o).offset()[S.toLowerCase()] + C), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: T,
                                currentValue: T,
                                endValue: E,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {
                                    container: s.container,
                                    direction: S,
                                    alternateValue: F
                                }
                            },
                            element: o
                        }, v.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                    } else if ("reverse" === A) {
                        if (!i(o).tweensContainer) return void $.dequeue(o, s.queue);
                        "none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, P.easing || delete s.easing, P.duration || delete s.duration, s = $.extend({}, i(o).opts, s);
                        var j = $.extend(!0, {}, i(o).tweensContainer);
                        for (var H in j)
                            if ("element" !== H) {
                                var N = j[H].startValue;
                                j[H].startValue = j[H].currentValue = j[H].endValue, j[H].endValue = N, g.isEmptyObject(P) || (j[H].easing = s.easing), v.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(j[H]), o)
                            }
                        l = j
                    } else if ("start" === A) {
                        var j;
                        i(o).tweensContainer && i(o).isAnimating === !0 && (j = i(o).tweensContainer), $.each(b, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = f(t, !0),
                                    n = r[0],
                                    o = r[1],
                                    i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var p = [l[c]];
                                        o && p.push(o), u !== a && p.push(u[c]), b[e + s[c]] = p
                                    }
                                    delete b[e]
                                }
                            }
                        });
                        for (var O in b) {
                            var z = f(b[O]),
                                q = z[0],
                                M = z[1],
                                I = z[2];
                            O = x.Names.camelCase(O);
                            var B = x.Hooks.getRoot(O),
                                W = !1;
                            if (i(o).isSVG || x.Names.prefixCheck(B)[1] !== !1 || x.Normalizations.registered[B] !== a) {
                                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility !== a && "hidden" !== s.visibility) && /opacity|filter/.test(O) && !I && 0 !== q && (I = 0), s._cacheValues && j && j[O] ? (I === a && (I = j[O].endValue + j[O].unitType), W = i(o).rootPropertyValueCache[B]) : x.Hooks.registered[O] ? I === a ? (W = x.getPropertyValue(o, B), I = x.getPropertyValue(o, O, W)) : W = x.Hooks.templates[B][1] : I === a && (I = x.getPropertyValue(o, O));
                                var G, D, X, Y = !1;
                                if (G = d(O, I), I = G[0], X = G[1], G = d(O, q), q = G[0].replace(/^([+-\/*])=/, function(e, t) {
                                        return Y = t, ""
                                    }), D = G[1], I = parseFloat(I) || 0, q = parseFloat(q) || 0, "%" === D && (/^(fontSize|lineHeight)$/.test(O) ? (q /= 100, D = "em") : /^scale/.test(O) ? (q /= 100, D = "") : /(Red|Green|Blue)$/i.test(O) && (q = q / 100 * 255, D = "")), /[\/*]/.test(Y)) D = X;
                                else if (X !== D && 0 !== I)
                                    if (0 === q) D = X;
                                    else {
                                        p = p || m();
                                        var Q = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";
                                        switch (X) {
                                            case "%":
                                                I *= "x" === Q ? p.percentToPxWidth : p.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                I *= p[X + "ToPx"]
                                        }
                                        switch (D) {
                                            case "%":
                                                I *= 1 / ("x" === Q ? p.percentToPxWidth : p.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                I *= 1 / p[D + "ToPx"]
                                        }
                                    }
                                switch (Y) {
                                    case "+":
                                        q = I + q;
                                        break;
                                    case "-":
                                        q = I - q;
                                        break;
                                    case "*":
                                        q = I * q;
                                        break;
                                    case "/":
                                        q = I / q
                                }
                                l[O] = {
                                    rootPropertyValue: W,
                                    startValue: I,
                                    currentValue: I,
                                    endValue: q,
                                    unitType: D,
                                    easing: M
                                }, v.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(l[O]), o)
                            } else v.debug && console.log("Skipping [" + B + "] due to a lack of browser support.")
                        }
                        l.element = o
                    }
                    l.element && (x.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (v.State.calls.length > 1e4 && (v.State.calls = n(v.State.calls)), v.State.calls.push([R, h, s, null, k.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : V++)
                }
                var o = this,
                    s = $.extend({}, v.defaults, P),
                    l = {},
                    p;
                switch (i(o) === a && v.init(o), parseFloat(s.delay) && s.queue !== !1 && $.queue(o, s.queue, function(e) {
                    v.velocityQueueEntryFlag = !0, i(o).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(s.delay)),
                        next: e
                    }
                }), s.duration.toString().toLowerCase()) {
                    case "fast":
                        s.duration = 200;
                        break;
                    case "normal":
                        s.duration = y;
                        break;
                    case "slow":
                        s.duration = 600;
                        break;
                    default:
                        s.duration = parseFloat(s.duration) || 1
                }
                v.mock !== !1 && (v.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(v.mock) || 1, s.delay *= parseFloat(v.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = v.CSS.Values.getDisplayType(o))), s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && v.State.isMobile && !v.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : $.queue(o, s.queue, function(t, r) {
                    return r === !0 ? (k.promise && k.resolver(h), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
                }), "" !== s.queue && "fx" !== s.queue || "inprogress" === $.queue(o)[0] || $.dequeue(o)
            }
            var l = arguments[0] && ($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)),
                f, d, m, h, b, P;
            if (g.isWrapped(this) ? (f = !1, m = 0, h = this, d = this) : (f = !0, m = 1, h = l ? arguments[0].elements : arguments[0]), h = o(h)) {
                l ? (b = arguments[0].properties, P = arguments[0].options) : (b = arguments[m], P = arguments[m + 1]);
                var w = h.length,
                    V = 0;
                if ("stop" !== b && !$.isPlainObject(P)) {
                    var C = m + 1;
                    P = {};
                    for (var T = C; T < arguments.length; T++) g.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? g.isString(arguments[T]) || g.isArray(arguments[T]) ? P.easing = arguments[T] : g.isFunction(arguments[T]) && (P.complete = arguments[T]) : P.duration = arguments[T]
                }
                var k = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                f && v.Promise && (k.promise = new v.Promise(function(e, t) {
                    k.resolver = e, k.rejecter = t
                }));
                var A;
                switch (b) {
                    case "scroll":
                        A = "scroll";
                        break;
                    case "reverse":
                        A = "reverse";
                        break;
                    case "stop":
                        $.each(h, function(e, t) {
                            i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer)
                        });
                        var F = [];
                        return $.each(v.State.calls, function(e, t) {
                            t && $.each(t[1], function(r, n) {
                                var o = g.isString(P) ? P : "";
                                return P !== a && t[2].queue !== o ? !0 : void $.each(h, function(t, r) {
                                    r === n && (P !== a && ($.each($.queue(r, o), function(e, t) {
                                        g.isFunction(t) && t(null, !0)
                                    }), $.queue(r, o, [])), i(r) && "" === o && $.each(i(r).tweensContainer, function(e, t) {
                                        t.endValue = t.currentValue
                                    }), F.push(e))
                                })
                            })
                        }), $.each(F, function(e, t) {
                            p(t, !0)
                        }), k.promise && k.resolver(h), e();
                    default:
                        if (!$.isPlainObject(b) || g.isEmptyObject(b)) {
                            if (g.isString(b) && v.Redirects[b]) {
                                var E = $.extend({}, P),
                                    j = E.duration,
                                    H = E.delay || 0;
                                return E.backwards === !0 && (h = $.extend(!0, [], h).reverse()), $.each(h, function(e, t) {
                                    parseFloat(E.stagger) ? E.delay = H + parseFloat(E.stagger) * e : g.isFunction(E.stagger) && (E.delay = H + E.stagger.call(t, e, w)), E.drag && (E.duration = parseFloat(j) || (/^(callout|transition)/.test(b) ? 1e3 : y), E.duration = Math.max(E.duration * (E.backwards ? 1 - e / w : (e + 1) / w), .75 * E.duration, 200)), v.Redirects[b].call(t, t, E || {}, e, w, h, k.promise ? k : a)
                                }), e()
                            }
                            var N = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return k.promise ? k.rejecter(new Error(N)) : console.log(N), e()
                        }
                        A = "start"
                }
                var L = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    R = [];
                $.each(h, function(e, t) {
                    g.isNode(t) && s.call(t)
                });
                var E = $.extend({}, v.defaults, P),
                    O;
                if (E.loop = parseInt(E.loop), O = 2 * E.loop - 1, E.loop)
                    for (var z = 0; O > z; z++) {
                        var q = {
                            delay: E.delay,
                            progress: E.progress
                        };
                        z === O - 1 && (q.display = E.display, q.visibility = E.visibility, q.complete = E.complete), S(h, "reverse", q)
                    }
                return e()
            }
        };
        v = $.extend(S, v), v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (P = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }, c()) : P = t.requestAnimationFrame || d
        }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), $.each(["Down", "Up"], function(e, t) {
            v.Redirects["slide" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = l.begin,
                    c = l.complete,
                    p = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                    u && u.call(i, i);
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [a, 0] : [0, a]
                    }
                    f.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var t in f) e.style[t] = f[t];
                    c && c.call(i, i), s && s.resolver(i)
                }, v(e, p, l)
            }
        }), $.each(["In", "Out"], function(e, t) {
            v.Redirects["fade" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = {
                        opacity: "In" === t ? 1 : 0
                    },
                    c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function() {
                    c && c.call(i, i), s && s.resolver(i)
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
            }
        }), v
    }(window.jQuery || window.Zepto || window, window, document)
});

/* Smooth Scroll */
$(function() {
    $('#preload-logo').velocity({
        translateY: '35vh',
        opacity: 0
    }, 0);
    $('#preloader').velocity({
        opacity: 0
    }, 0);
    $('#wrapper').addClass('preload').velocity({
        translateY: '32.45vh'
    }, 0);
    $('#menu').css({
        display: 'none'
    });
    $('#preload-logo').velocity({
        translateY: 0,
        opacity: 1
    }, 1000, [0.7, 0, 0.3, 1]);
    $('#preloader').delay(300).velocity({
        opacity: 1
    }, 800, [0.7, 0, 0.3, 1]);
    $('body').css({
        height: $(window).height()
    });
    $('.gift-card-home .hidden').css({
        height: 0,
        opacity: 0
    });
    $('.gift-card-home').click(function(e) {
        var thisvar = $(this);
        if (thisvar.hasClass('show')) {
            thisvar.removeClass('show');
            $('html').velocity('stop');
            thisvar.find('.hidden').velocity('stop').velocity({
                height: 0,
                opacity: 0
            }, 500, 'ease')
        } else {
            var htmlOffset = thisvar.offset().top - ($(window).height() - (thisvar.outerHeight() + thisvar.find('.hidden-wrapper').outerHeight())) / 2 + $(window).height() * 0.05;
            thisvar.addClass('show');
            $('html').velocity('stop').velocity('scroll', {
                duration: 500,
                offset: htmlOffset
            });
            thisvar.find('.hidden').velocity('stop').velocity({
                height: thisvar.find('.hidden-wrapper').outerHeight(),
                opacity: 1
            }, 500, 'ease', function() {
                thisvar.find('.hidden').css({
                    height: 'auto'
                })
            })
        }
    }).find('.gift-card-link').click(function(e) {
        e.stopPropagation()
    });
    $('.page-about .hidden').css({
        height: 0,
        opacity: 0
    });
    $('.read-more-link').click(function(e) {
        e.preventDefault();
        var readmore = $(this);
        readmore.velocity({
            height: 0,
            opacity: 0,
            marginTop: '-7vw'
        }, 500, 'ease');
        readmore.parent('.page-about').find('.hidden').velocity({
            height: readmore.parent('.page-about').find('.hidden-wrapper').outerHeight(),
            opacity: 1
        }, 500, 'ease', function() {
            readmore.parent('.page-about').find('.hidden').css({
                height: 'auto'
            })
        })
    });
    $('#menu-trigger').click(function() {
        if ($(this).hasClass('close')) {
            enableSlideshow();
            $(this).removeClass('close');
            $('#wrapper').removeClass('menu');
            $('#menu').removeClass('menu')
        } else {
            disableSlideshow();
            $(this).addClass('close');
            $('#wrapper').addClass('menu');
            $('#menu').addClass('menu')
        }
    });
    $(window).resize(function() {
        vh = $(window).height();
        vw = $(window).width();
        tt = $('#title').offset().top
    });
    $(window).trigger('resize');
    enabledSlideshow = true;
    $(window).scroll(function() {
        var scroll = $('body').scrollTop();
        if (scroll > tt && enabledSlideshow) {
            enabledSlideshow = false;
            disableSlideshow();
            console.log('disabled')
        } else if (scroll <= tt && !enabledSlideshow) {
            enabledSlideshow = true;
            enableSlideshow();
            console.log('enabled')
        }
    });
    slides = $('.start-gift-card');
    sCur = 1;
    sLen = slides.length;
    $('#switch').click(function() {
        sCur += 1;
        if (sCur >= sLen) sCur = 0;
        var next = sCur + 1;
        if (next >= sLen) next = 0;
        var prev = sCur - 1;
        if (prev < 0) prev = sLen - 1;
        slides.each(function(i) {
            if (i == sCur) $(this).removeClass('pos-0 pos-1 pos-2 pos-3').addClass('pos-0');
            if (i == next) $(this).removeClass('pos-0 pos-1 pos-2 pos-3').addClass('pos-2');
            if (i == prev) $(this).removeClass('pos-0 pos-1 pos-2 pos-3').addClass('pos-1');
            if (i != sCur && i != next && i != prev) $(this).removeClass('pos-0 pos-1 pos-2 pos-3').addClass('pos-3')
        })
    });
    enableSlideshow = function() {
        if (typeof slideshow != 'undefined') clearInterval(slideshow);
        slideshow = setInterval(function() {
            $('#switch').trigger('click')
        }, 1500)
    };
    disableSlideshow = function() {
        if (typeof slideshow != 'undefined') clearInterval(slideshow)
    };
    giftcard = $('.choose-gift-card');
    gboverlay = $('#gboverlay');
    statustext = $('#statustext');
    generatorbox = $('#generatorbox');
    gbmouse = $('#gbmouse');
    progress = $('#sbcomplete');
    wholder = $('#widgetholder');
    gblogo = $('#genlogo');
    ts = 600;
    as = 400;
    ae = 'ease';
    psMin = as;
    psMax = 2000;
    psLongMin = 8000;
    psLongMax = 12000;
    canClose = false;
    code = $('#genreturn');
    giftcard.click(function(e) {
        e.preventDefault();

        gboverlay.css({
            display: 'block'
        });
        var cclone = $(this).clone();
        $(gboverlay).append(cclone);
        $(this).css({
            opacity: 0
        });
        var fixLeft = 0;
        if (parseInt(cclone.css('marginLeft')) < 0) fixLeft = parseInt(cclone.css('marginLeft'));
        var cat = $(this).offset().top - $('body').scrollTop();
        var cal = $(this).offset().left;
        var gbw = generatorbox.width();
        var gbh = generatorbox.height();
        cclone.attr('id', 'animateCard').css({
            position: 'fixed',
            top: cat,
            left: cal,
            margin: 0,
            opacity: 1,
            zIndex: 1
        });
        setTimeout(function() {
            gbmouse.addClass('show');
            var ccw = cclone.width();
            var cch = cclone.height();
            scx = (((generatorbox.width() / cclone.width()) * 1.4) - 1) / 2 + 1;
            scy = (((generatorbox.height() / cclone.height())) - 1) / 2 + 1;
            cclone.velocity({
                top: cat + (vh / 2 - cch / 2 - cat) / 2,
                left: cal + (vw / 2 - ccw / 2 - cal) / 2,
                scaleX: scx,
                scaleY: scy,
                opacity: 0.5,
                rotateX: '-90deg'
            }, 200, 'ease-in', function() {
                cclone.css({
                    display: 'none'
                });
                gsx = cclone.width() / generatorbox.width();
                gsy = cclone.height() / generatorbox.height() * scy;
                generatorbox.velocity({
                    top: (cat + cch / 2) + (vh / 2 - cat - cch / 2) / 2,
                    left: (cal + ccw / 2) + (vw / 2 - cal - ccw / 2) / 2,
                    scaleX: gsx,
                    scaleY: gsy,
                    opacity: 0.5,
                    rotateX: '90deg'
                }, 0);
                generatorbox.velocity({
                    top: '50%',
                    left: '50%',
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotateX: 0
                }, 200, 'ease-out', function() {
                    startGenerate()
                })
            });
            cantClose()
        }, 50)
    });

    function cantClose() {
        gbmouse.click(function(e) {
            gboverlay.addClass('noclick');
            setTimeout(function() {
                gboverlay.removeClass('noclick')
            }, 150)
        })
    }

    function startGenerate() {
        level1 = $('#hacklines .level1');
        level2 = $('#hacklines .level2');
        level3 = $('#hacklines .level3');
        sbLength = $('#statusbar').width();
        statustext.html(level1.eq(0).html());
        progress.css({
            width: 0
        });
        level = 0;
        setTimeout(function() {
            generateLevel1()
        }, 500)
    }

    function generateLevel1() {
        var duration = Math.random() * (psMax - psMin) + psMin;
        var pWidth = ((sbLength / 2) / level1.length) * (level + 1);
        pWidth = (pWidth / sbLength) * 100;
        progress.velocity({
            width: pWidth + '%'
        }, duration, 'linear', function() {
            if (level >= level1.length - 1) {
                $('#sbcirca2, #step2').addClass('active');
                changeText(level2.eq(0).html());
                generateLevel2()
            } else {
                level += 1;
                changeText(level1.eq(level).html());
                generateLevel1()
            }
        })
    }

    function generateLevel2() {
        generatorbox.addClass('big');
        code.addClass('active');
        gcParts = code.attr('format').split('-');
        sTimer = setInterval(function() {
            code.html(shuffleText(gcParts, false))
        }, 50);
        var pWidth = sbLength;
        var duration = Math.random() * (psLongMax - psLongMin) + psLongMin;
        progress.velocity({
            width: '100%'
        }, duration, 'linear', function() {
            $('#sbcirca3, #step3').addClass('active');
            changeText(level3.eq(0).html());
            gblogo.addClass('hide');
            setTimeout(function() {
                wholder.addClass('show')
            }, 600);
            clearInterval(sTimer);
            code.html(shuffleText(gcParts, true));
            setTimeout(function() {
                code.find('span.final').addClass('active')
            }, 10)
        })
    }

    function shuffleText(tParts, tFinal) {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var tCode = '';
        for (var j = 0; j < tParts.length; j++) {
            var stringRandom = '';
            for (var i = 0; i < tParts[j].length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                stringRandom += chars.substring(rnum, rnum + 1)
            }
            if (tFinal) {
                if (j === 0) {
                    tCode += '<span>' + stringRandom + '</span>'
                } else if (j > 0 && j < (tParts.length - 1)) {
                    tCode += '-<span>' + stringRandom + '</span>'
                } else if (j == (tParts.length - 1)) {
                    tCode += '-<span class="final">' + tParts[tParts.length - 1] + '</span>'
                }
            } else {
                if (j === 0) {
                    tCode += '<span>' + stringRandom + '</span>'
                }
                if (j !== 0) {
                    tCode += '-<span>' + stringRandom + '</span>'
                }
            }
        }
        return tCode
    }
    unlockCode = function() {
        $('#genreturn span').each(function() {
            if (!$(this).hasClass('final')) {
                var string = code.attr('format').split('-');
                string = string[string.length - 1];
                var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
                var tCode = '';
                var stringRandom = '';
                for (var i = 0; i < string.length; i++) {
                    var rnum = Math.floor(Math.random() * chars.length);
                    stringRandom += chars.substring(rnum, rnum + 1)
                }
                $(this).html(stringRandom).addClass('active')
            }
        })
    };

    function changeText(text) {
        statustext.velocity({
            opacity: 0
        }, as / 2, ae, function() {
            statustext.html(text);
            statustext.velocity({
                opacity: 1
            }, as / 2, ae)
        })
    }
});
$(window).load(function() {
    setTimeout(function() {
        $('body, html').scrollTop(0);
        $('#start').velocity({
            translateY: '50vh'
        }, 0).velocity({
            translateY: 0
        }, 1000, [0.7, 0, 0.3, 1]);
        $('#title').velocity({
            translateY: '75vh'
        }, 0).velocity({
            translateY: 0
        }, 1000, [0.7, 0, 0.3, 1]);
        $('#gift-cards').velocity({
            translateY: '75vh'
        }, 0).velocity({
            translateY: 0
        }, 1000, [0.7, 0, 0.3, 1]);
        $('#page').velocity({
            translateY: '75vh'
        }, 0).velocity({
            translateY: 0
        }, 1000, [0.7, 0, 0.3, 1]);
        $('#preload-logo').velocity({
            translateY: '-32.45vh',
            opacity: 0
        }, 1000, [0.7, 0, 0.3, 1]);
        $('#preloader').velocity({
            opacity: 0
        }, 500, [0.7, 0, 0.3, 1]);
        $('#wrapper').velocity({
            translateY: 0
        }, 1000, [0.7, 0, 0.3, 1]);
        $('#preload').velocity({
            opacity: 0
        }, 1000, [0.7, 0, 0.3, 1], function() {
            enableSlideshow();
            $('#preload').css({
                display: 'none'
            });
            $('body').css({
                height: 'auto'
            });
            $('#wrapper').removeClass('preload').css({
                'transform': ''
            }, 0);
            $('#menu').css({
                display: 'block'
            })
        })
    }, 1500)
});