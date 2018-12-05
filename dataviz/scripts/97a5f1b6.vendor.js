window.Modernizr = function(a, b, c) {
        function d(a) {
            q.cssText = a
        }

        function e(a, b) {
            return d(u.join(a + ";") + (b || ""))
        }

        function f(a, b) {
            return typeof a === b
        }

        function g(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function h(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!g(e, "-") && q[e] !== c) return "pfx" != b || e
            }
            return !1
        }

        function i(a, b, d) {
            for (var e in a) {
                var g = b[a[e]];
                if (g !== c) return !1 === d ? a[e] : f(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function j(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + w.join(d + " ") + d).split(" ");
            return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + x.join(d + " ") + d).split(" "), i(e, b, c))
        }
        var k, l, m = {},
            n = b.documentElement,
            o = "modernizr",
            p = b.createElement(o),
            q = p.style,
            r = b.createElement("input"),
            s = ":)",
            t = {}.toString,
            u = " -webkit- -moz- -o- -ms- ".split(" "),
            v = "Webkit Moz O ms",
            w = v.split(" "),
            x = v.toLowerCase().split(" "),
            y = {
                svg: "http://www.w3.org/2000/svg"
            },
            z = {},
            A = {},
            B = {},
            C = [],
            D = C.slice,
            E = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : o + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', o, '">', a, "</style>"].join(""), j.id = o, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = n.style.overflow, n.style.overflow = "hidden", n.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), n.style.overflow = i), !!g
            },
            F = function(b) {
                var c = a.matchMedia || a.msMatchMedia;
                if (c) return c(b) && c(b).matches || !1;
                var d;
                return E("@media " + b + " { #" + o + " { position: absolute; } }", function(b) {
                    d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
                }), d
            },
            G = function() {
                function a(a, e) {
                    e = e || b.createElement(d[a] || "div"), a = "on" + a;
                    var g = a in e;
                    return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
                }
                var d = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return a
            }(),
            H = {}.hasOwnProperty;
        l = f(H, "undefined") || f(H.call, "undefined") ? function(a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return H.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = D.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(D.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(D.call(arguments)))
                };
            return d
        }), z.flexbox = function() {
            return j("flexWrap")
        }, z.flexboxlegacy = function() {
            return j("boxDirection")
        }, z.canvas = function() {
            var a = b.createElement("canvas");
            return !(!a.getContext || !a.getContext("2d"))
        }, z.canvastext = function() {
            return !(!m.canvas || !f(b.createElement("canvas").getContext("2d").fillText, "function"))
        }, z.webgl = function() {
            return !!a.WebGLRenderingContext
        }, z.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : E(["@media (", u.join("touch-enabled),("), o, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = 9 === a.offsetTop
            }), c
        }, z.geolocation = function() {
            return "geolocation" in navigator
        }, z.postmessage = function() {
            return !!a.postMessage
        }, z.websqldatabase = function() {
            return !!a.openDatabase
        }, z.indexedDB = function() {
            return !!j("indexedDB", a)
        }, z.hashchange = function() {
            return G("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, z.history = function() {
            return !(!a.history || !history.pushState)
        }, z.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, z.websockets = function() {
            return "WebSocket" in a || "MozWebSocket" in a
        }, z.rgba = function() {
            return d("background-color:rgba(150,255,150,.5)"), g(q.backgroundColor, "rgba")
        }, z.hsla = function() {
            return d("background-color:hsla(120,40%,100%,.5)"), g(q.backgroundColor, "rgba") || g(q.backgroundColor, "hsla")
        }, z.multiplebgs = function() {
            return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(q.background)
        }, z.backgroundsize = function() {
            return j("backgroundSize")
        }, z.borderimage = function() {
            return j("borderImage")
        }, z.borderradius = function() {
            return j("borderRadius")
        }, z.boxshadow = function() {
            return j("boxShadow")
        }, z.textshadow = function() {
            return "" === b.createElement("div").style.textShadow
        }, z.opacity = function() {
            return e("opacity:.55"), /^0.55$/.test(q.opacity)
        }, z.cssanimations = function() {
            return j("animationName")
        }, z.csscolumns = function() {
            return j("columnCount")
        }, z.cssgradients = function() {
            var a = "background-image:";
            return d((a + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + a) + u.join("linear-gradient(left top,#9f9, white);" + a)).slice(0, -a.length)), g(q.backgroundImage, "gradient")
        }, z.cssreflections = function() {
            return j("boxReflect")
        }, z.csstransforms = function() {
            return !!j("transform")
        }, z.csstransforms3d = function() {
            var a = !!j("perspective");
            return a && "webkitPerspective" in n.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
            }), a
        }, z.csstransitions = function() {
            return j("transition")
        }, z.fontface = function() {
            var a;
            return E('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
            }), a
        }, z.generatedcontent = function() {
            var a;
            return E(["#", o, "{font:0/0 a}#", o, ':after{content:"', s, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, z.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (a) {}
            return c
        }, z.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (a) {}
            return c
        }, z.localstorage = function() {
            try {
                return localStorage.setItem(o, o), localStorage.removeItem(o), !0
            } catch (a) {
                return !1
            }
        }, z.sessionstorage = function() {
            try {
                return sessionStorage.setItem(o, o), sessionStorage.removeItem(o), !0
            } catch (a) {
                return !1
            }
        }, z.webworkers = function() {
            return !!a.Worker
        }, z.applicationcache = function() {
            return !!a.applicationCache
        }, z.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(y.svg, "svg").createSVGRect
        }, z.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == y.svg
        }, z.smil = function() {
            return !!b.createElementNS && /SVGAnimate/.test(t.call(b.createElementNS(y.svg, "animate")))
        }, z.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(t.call(b.createElementNS(y.svg, "clipPath")))
        };
        for (var I in z) l(z, I) && (k = I.toLowerCase(), m[k] = z[I](), C.push((m[k] ? "" : "no-") + k));
        return m.input || function() {
                m.input = function(c) {
                    for (var d = 0, e = c.length; d < e; d++) B[c[d]] = !!(c[d] in r);
                    return B.list && (B.list = !(!b.createElement("datalist") || !a.HTMLDataListElement)), B
                }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), m.inputtypes = function(a) {
                    for (var d, e, f, g = 0, h = a.length; g < h; g++) r.setAttribute("type", e = a[g]), d = "text" !== r.type, d && (r.value = s, r.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && r.style.WebkitAppearance !== c ? (n.appendChild(r), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(r, null).WebkitAppearance && 0 !== r.offsetHeight, n.removeChild(r)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? r.checkValidity && !1 === r.checkValidity() : r.value != s)), A[a[g]] = !!d;
                    return A
                }("search tel url email datetime date month week time datetime-local number range color".split(" "))
            }(), m.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) l(a, d) && m.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), m[a] !== c) return m;
                    b = "function" == typeof b ? b() : b, n.className += " " + (b ? "" : "no-") + a, m[a] = b
                }
                return m
            }, d(""), p = r = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = r.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = q[a[o]];
                    return b || (b = {}, p++, a[o] = p, q[p] = b), b
                }

                function f(a, c, d) {
                    if (c || (c = b), k) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : n.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || m.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
                }

                function g(a, c) {
                    if (a || (a = b), k) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; g < i; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? f(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function i(a) {
                    a || (a = b);
                    var d = e(a);
                    return !r.shivCSS || j || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || h(a, d), a
                }
                var j, k, l = a.html5 || {},
                    m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    n = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    o = "_html5shiv",
                    p = 0,
                    q = {};
                ! function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return void 0 === a.cloneNode || void 0 === a.createDocumentFragment || void 0 === a.createElement
                        }()
                    } catch (a) {
                        j = !0, k = !0
                    }
                }();
                var r = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: "3.7.0",
                    shivCSS: !1 !== l.shivCSS,
                    supportsUnknownElements: k,
                    shivMethods: !1 !== l.shivMethods,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                };
                a.html5 = r, i(b)
            }(this, b), m._version = "2.8.3", m._prefixes = u, m._domPrefixes = x, m._cssomPrefixes = w, m.mq = F, m.hasEvent = G, m.testProp = function(a) {
                return h([a])
            }, m.testAllProps = j, m.testStyles = E, m.prefixed = function(a, b, c) {
                return b ? j(a, b, c) : j(a, "pfx")
            }, n.className = n.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + C.join(" "), m
    }(this, this.document),
    function() {
        function a(a) {
            return a && (a.ownerDocument || a.document || a).documentElement
        }

        function b(a) {
            return a && (a.ownerDocument && a.ownerDocument.defaultView || a.document && a || a.defaultView)
        }

        function c(a, b) {
            return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
        }

        function d(a) {
            return null === a ? NaN : +a
        }

        function e(a) {
            return !isNaN(a)
        }

        function f(a) {
            return {
                left: function(b, c, d, e) {
                    for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); d < e;) {
                        var f = d + e >>> 1;
                        a(b[f], c) < 0 ? d = f + 1 : e = f
                    }
                    return d
                },
                right: function(b, c, d, e) {
                    for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); d < e;) {
                        var f = d + e >>> 1;
                        a(b[f], c) > 0 ? e = f : d = f + 1
                    }
                    return d
                }
            }
        }

        function g(a) {
            return a.length
        }

        function h(a) {
            for (var b = 1; a * b % 1;) b *= 10;
            return b
        }

        function i(a, b) {
            for (var c in b) Object.defineProperty(a.prototype, c, {
                value: b[c],
                enumerable: !1
            })
        }

        function j() {
            this._ = Object.create(null)
        }

        function k(a) {
            return (a += "") === sg || a[0] === tg ? tg + a : a
        }

        function l(a) {
            return (a += "")[0] === tg ? a.slice(1) : a
        }

        function m(a) {
            return k(a) in this._
        }

        function n(a) {
            return (a = k(a)) in this._ && delete this._[a]
        }

        function o() {
            var a = [];
            for (var b in this._) a.push(l(b));
            return a
        }

        function p() {
            var a = 0;
            for (var b in this._) ++a;
            return a
        }

        function q() {
            for (var a in this._) return !1;
            return !0
        }

        function r() {
            this._ = Object.create(null)
        }

        function s(a) {
            return a
        }

        function t(a, b, c) {
            return function() {
                var d = c.apply(b, arguments);
                return d === b ? a : d
            }
        }

        function u(a, b) {
            if (b in a) return b;
            b = b.charAt(0).toUpperCase() + b.slice(1);
            for (var c = 0, d = ug.length; c < d; ++c) {
                var e = ug[c] + b;
                if (e in a) return e
            }
        }

        function v() {}

        function w() {}

        function x(a) {
            function b() {
                for (var b, d = c, e = -1, f = d.length; ++e < f;)(b = d[e].on) && b.apply(this, arguments);
                return a
            }
            var c = [],
                d = new j;
            return b.on = function(b, e) {
                var f, g = d.get(b);
                return arguments.length < 2 ? g && g.on : (g && (g.on = null, c = c.slice(0, f = c.indexOf(g)).concat(c.slice(f + 1)), d.remove(b)), e && c.push(d.set(b, {
                    on: e
                })), a)
            }, b
        }

        function y() {
            hg.event.preventDefault()
        }

        function z() {
            for (var a, b = hg.event; a = b.sourceEvent;) b = a;
            return b
        }

        function A(a) {
            for (var b = new w, c = 0, d = arguments.length; ++c < d;) b[arguments[c]] = x(b);
            return b.of = function(c, d) {
                return function(e) {
                    try {
                        var f = e.sourceEvent = hg.event;
                        e.target = a, hg.event = e, b[e.type].apply(c, d)
                    } finally {
                        hg.event = f
                    }
                }
            }, b
        }

        function B(a) {
            return wg(a, Ag), a
        }

        function C(a) {
            return "function" == typeof a ? a : function() {
                return xg(a, this)
            }
        }

        function D(a) {
            return "function" == typeof a ? a : function() {
                return yg(a, this)
            }
        }

        function E(a, b) {
            function c() {
                this.removeAttribute(a)
            }

            function d() {
                this.removeAttributeNS(a.space, a.local)
            }

            function e() {
                this.setAttribute(a, b)
            }

            function f() {
                this.setAttributeNS(a.space, a.local, b)
            }

            function g() {
                var c = b.apply(this, arguments);
                null == c ? this.removeAttribute(a) : this.setAttribute(a, c)
            }

            function h() {
                var c = b.apply(this, arguments);
                null == c ? this.removeAttributeNS(a.space, a.local) : this.setAttributeNS(a.space, a.local, c)
            }
            return a = hg.ns.qualify(a), null == b ? a.local ? d : c : "function" == typeof b ? a.local ? h : g : a.local ? f : e
        }

        function F(a) {
            return a.trim().replace(/\s+/g, " ")
        }

        function G(a) {
            return new RegExp("(?:^|\\s+)" + hg.requote(a) + "(?:\\s+|$)", "g")
        }

        function H(a) {
            return (a + "").trim().split(/^|\s+/)
        }

        function I(a, b) {
            function c() {
                for (var c = -1; ++c < e;) a[c](this, b)
            }

            function d() {
                for (var c = -1, d = b.apply(this, arguments); ++c < e;) a[c](this, d)
            }
            a = H(a).map(J);
            var e = a.length;
            return "function" == typeof b ? d : c
        }

        function J(a) {
            var b = G(a);
            return function(c, d) {
                if (e = c.classList) return d ? e.add(a) : e.remove(a);
                var e = c.getAttribute("class") || "";
                d ? (b.lastIndex = 0, b.test(e) || c.setAttribute("class", F(e + " " + a))) : c.setAttribute("class", F(e.replace(b, " ")))
            }
        }

        function K(a, b, c) {
            function d() {
                this.style.removeProperty(a)
            }

            function e() {
                this.style.setProperty(a, b, c)
            }

            function f() {
                var d = b.apply(this, arguments);
                null == d ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
            }
            return null == b ? d : "function" == typeof b ? f : e
        }

        function L(a, b) {
            function c() {
                delete this[a]
            }

            function d() {
                this[a] = b
            }

            function e() {
                var c = b.apply(this, arguments);
                null == c ? delete this[a] : this[a] = c
            }
            return null == b ? c : "function" == typeof b ? e : d
        }

        function M(a) {
            function b() {
                var b = this.ownerDocument,
                    c = this.namespaceURI;
                return c ? b.createElementNS(c, a) : b.createElement(a)
            }

            function c() {
                return this.ownerDocument.createElementNS(a.space, a.local)
            }
            return "function" == typeof a ? a : (a = hg.ns.qualify(a)).local ? c : b
        }

        function N() {
            var a = this.parentNode;
            a && a.removeChild(this)
        }

        function O(a) {
            return {
                __data__: a
            }
        }

        function P(a) {
            return function() {
                return zg(this, a)
            }
        }

        function Q(a) {
            return arguments.length || (a = c),
                function(b, c) {
                    return b && c ? a(b.__data__, c.__data__) : !b - !c
                }
        }

        function R(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                for (var e, f = a[c], g = 0, h = f.length; g < h; g++)(e = f[g]) && b(e, g, c);
            return a
        }

        function S(a) {
            return wg(a, Cg), a
        }

        function T(a) {
            var b, c;
            return function(d, e, f) {
                var g, h = a[f].update,
                    i = h.length;
                for (f != c && (c = f, b = 0), e >= b && (b = e + 1); !(g = h[b]) && ++b < i;);
                return g
            }
        }

        function U(a, b, c) {
            function d() {
                var b = this[g];
                b && (this.removeEventListener(a, b, b.$), delete this[g])
            }

            function e() {
                var e = i(b, jg(arguments));
                d.call(this), this.addEventListener(a, this[g] = e, e.$ = c), e._ = b
            }

            function f() {
                var b, c = new RegExp("^__on([^.]+)" + hg.requote(a) + "$");
                for (var d in this)
                    if (b = d.match(c)) {
                        var e = this[d];
                        this.removeEventListener(b[1], e, e.$), delete this[d]
                    }
            }
            var g = "__on" + a,
                h = a.indexOf("."),
                i = V;
            h > 0 && (a = a.slice(0, h));
            var j = Dg.get(a);
            return j && (a = j, i = W), h ? b ? e : d : b ? v : f
        }

        function V(a, b) {
            return function(c) {
                var d = hg.event;
                hg.event = c, b[0] = this.__data__;
                try {
                    a.apply(this, b)
                } finally {
                    hg.event = d
                }
            }
        }

        function W(a, b) {
            var c = V(a, b);
            return function(a) {
                var b = this,
                    d = a.relatedTarget;
                d && (d === b || 8 & d.compareDocumentPosition(b)) || c.call(b, a)
            }
        }

        function X(c) {
            var d = ".dragsuppress-" + ++Fg,
                e = "click" + d,
                f = hg.select(b(c)).on("touchmove" + d, y).on("dragstart" + d, y).on("selectstart" + d, y);
            if (null == Eg && (Eg = !("onselectstart" in c) && u(c.style, "userSelect")), Eg) {
                var g = a(c).style,
                    h = g[Eg];
                g[Eg] = "none"
            }
            return function(a) {
                if (f.on(d, null), Eg && (g[Eg] = h), a) {
                    var b = function() {
                        f.on(e, null)
                    };
                    f.on(e, function() {
                        y(), b()
                    }, !0), setTimeout(b, 0)
                }
            }
        }

        function Y(a, c) {
            c.changedTouches && (c = c.changedTouches[0]);
            var d = a.ownerSVGElement || a;
            if (d.createSVGPoint) {
                var e = d.createSVGPoint();
                if (Gg < 0) {
                    var f = b(a);
                    if (f.scrollX || f.scrollY) {
                        d = hg.select("body").append("svg").style({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            margin: 0,
                            padding: 0,
                            border: "none"
                        }, "important");
                        var g = d[0][0].getScreenCTM();
                        Gg = !(g.f || g.e), d.remove()
                    }
                }
                return Gg ? (e.x = c.pageX, e.y = c.pageY) : (e.x = c.clientX, e.y = c.clientY), e = e.matrixTransform(a.getScreenCTM().inverse()), [e.x, e.y]
            }
            var h = a.getBoundingClientRect();
            return [c.clientX - h.left - a.clientLeft, c.clientY - h.top - a.clientTop]
        }

        function Z() {
            return hg.event.changedTouches[0].identifier
        }

        function $(a) {
            return a > 0 ? 1 : a < 0 ? -1 : 0
        }

        function _(a, b, c) {
            return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
        }

        function aa(a) {
            return a > 1 ? 0 : a < -1 ? Jg : Math.acos(a)
        }

        function ba(a) {
            return a > 1 ? Mg : a < -1 ? -Mg : Math.asin(a)
        }

        function ca(a) {
            return ((a = Math.exp(a)) - 1 / a) / 2
        }

        function da(a) {
            return ((a = Math.exp(a)) + 1 / a) / 2
        }

        function ea(a) {
            return ((a = Math.exp(2 * a)) - 1) / (a + 1)
        }

        function fa(a) {
            return (a = Math.sin(a / 2)) * a
        }

        function ga() {}

        function ha(a, b, c) {
            return this instanceof ha ? (this.h = +a, this.s = +b, void(this.l = +c)) : arguments.length < 2 ? a instanceof ha ? new ha(a.h, a.s, a.l) : va("" + a, wa, ha) : new ha(a, b, c)
        }

        function ia(a, b, c) {
            function d(a) {
                return a > 360 ? a -= 360 : a < 0 && (a += 360), a < 60 ? f + (g - f) * a / 60 : a < 180 ? g : a < 240 ? f + (g - f) * (240 - a) / 60 : f
            }

            function e(a) {
                return Math.round(255 * d(a))
            }
            var f, g;
            return a = isNaN(a) ? 0 : (a %= 360) < 0 ? a + 360 : a, b = isNaN(b) ? 0 : b < 0 ? 0 : b > 1 ? 1 : b, c = c < 0 ? 0 : c > 1 ? 1 : c, g = c <= .5 ? c * (1 + b) : c + b - c * b, f = 2 * c - g, new ra(e(a + 120), e(a), e(a - 120))
        }

        function ja(a, b, c) {
            return this instanceof ja ? (this.h = +a, this.c = +b, void(this.l = +c)) : arguments.length < 2 ? a instanceof ja ? new ja(a.h, a.c, a.l) : a instanceof la ? na(a.l, a.a, a.b) : na((a = xa((a = hg.rgb(a)).r, a.g, a.b)).l, a.a, a.b) : new ja(a, b, c)
        }

        function ka(a, b, c) {
            return isNaN(a) && (a = 0), isNaN(b) && (b = 0), new la(c, Math.cos(a *= Ng) * b, Math.sin(a) * b)
        }

        function la(a, b, c) {
            return this instanceof la ? (this.l = +a, this.a = +b, void(this.b = +c)) : arguments.length < 2 ? a instanceof la ? new la(a.l, a.a, a.b) : a instanceof ja ? ka(a.h, a.c, a.l) : xa((a = ra(a)).r, a.g, a.b) : new la(a, b, c)
        }

        function ma(a, b, c) {
            var d = (a + 16) / 116,
                e = d + b / 500,
                f = d - c / 200;
            return e = oa(e) * Wg, d = oa(d) * Xg, f = oa(f) * Yg, new ra(qa(3.2404542 * e - 1.5371385 * d - .4985314 * f), qa(-.969266 * e + 1.8760108 * d + .041556 * f), qa(.0556434 * e - .2040259 * d + 1.0572252 * f))
        }

        function na(a, b, c) {
            return a > 0 ? new ja(Math.atan2(c, b) * Og, Math.sqrt(b * b + c * c), a) : new ja(NaN, NaN, a)
        }

        function oa(a) {
            return a > .206893034 ? a * a * a : (a - 4 / 29) / 7.787037
        }

        function pa(a) {
            return a > .008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29
        }

        function qa(a) {
            return Math.round(255 * (a <= .00304 ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))
        }

        function ra(a, b, c) {
            return this instanceof ra ? (this.r = ~~a, this.g = ~~b, void(this.b = ~~c)) : arguments.length < 2 ? a instanceof ra ? new ra(a.r, a.g, a.b) : va("" + a, ra, ia) : new ra(a, b, c)
        }

        function sa(a) {
            return new ra(a >> 16, a >> 8 & 255, 255 & a)
        }

        function ta(a) {
            return sa(a) + ""
        }

        function ua(a) {
            return a < 16 ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
        }

        function va(a, b, c) {
            var d, e, f, g = 0,
                h = 0,
                i = 0;
            if (d = /([a-z]+)\((.*)\)/.exec(a = a.toLowerCase())) switch (e = d[2].split(","), d[1]) {
                case "hsl":
                    return c(parseFloat(e[0]), parseFloat(e[1]) / 100, parseFloat(e[2]) / 100);
                case "rgb":
                    return b(za(e[0]), za(e[1]), za(e[2]))
            }
            return (f = _g.get(a)) ? b(f.r, f.g, f.b) : (null == a || "#" !== a.charAt(0) || isNaN(f = parseInt(a.slice(1), 16)) || (4 === a.length ? (g = (3840 & f) >> 4, g |= g >> 4, h = 240 & f, h |= h >> 4, i = 15 & f, i |= i << 4) : 7 === a.length && (g = (16711680 & f) >> 16, h = (65280 & f) >> 8, i = 255 & f)), b(g, h, i))
        }

        function wa(a, b, c) {
            var d, e, f = Math.min(a /= 255, b /= 255, c /= 255),
                g = Math.max(a, b, c),
                h = g - f,
                i = (g + f) / 2;
            return h ? (e = i < .5 ? h / (g + f) : h / (2 - g - f), d = a == g ? (b - c) / h + (b < c ? 6 : 0) : b == g ? (c - a) / h + 2 : (a - b) / h + 4, d *= 60) : (d = NaN, e = i > 0 && i < 1 ? 0 : d), new ha(d, e, i)
        }

        function xa(a, b, c) {
            a = ya(a), b = ya(b), c = ya(c);
            var d = pa((.4124564 * a + .3575761 * b + .1804375 * c) / Wg),
                e = pa((.2126729 * a + .7151522 * b + .072175 * c) / Xg);
            return la(116 * e - 16, 500 * (d - e), 200 * (e - pa((.0193339 * a + .119192 * b + .9503041 * c) / Yg)))
        }

        function ya(a) {
            return (a /= 255) <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
        }

        function za(a) {
            var b = parseFloat(a);
            return "%" === a.charAt(a.length - 1) ? Math.round(2.55 * b) : b
        }

        function Aa(a) {
            return "function" == typeof a ? a : function() {
                return a
            }
        }

        function Ba(a) {
            return function(b, c, d) {
                return 2 === arguments.length && "function" == typeof c && (d = c, c = null), Ca(b, c, a, d)
            }
        }

        function Ca(a, b, c, d) {
            function e() {
                var a, b = i.status;
                if (!b && Ea(i) || b >= 200 && b < 300 || 304 === b) {
                    try {
                        a = c.call(f, i)
                    } catch (a) {
                        return void g.error.call(f, a)
                    }
                    g.load.call(f, a)
                } else g.error.call(f, i)
            }
            var f = {},
                g = hg.dispatch("beforesend", "progress", "load", "error"),
                h = {},
                i = new XMLHttpRequest,
                j = null;
            return !this.XDomainRequest || "withCredentials" in i || !/^(http(s)?:)?\/\//.test(a) || (i = new XDomainRequest), "onload" in i ? i.onload = i.onerror = e : i.onreadystatechange = function() {
                i.readyState > 3 && e()
            }, i.onprogress = function(a) {
                var b = hg.event;
                hg.event = a;
                try {
                    g.progress.call(f, i)
                } finally {
                    hg.event = b
                }
            }, f.header = function(a, b) {
                return a = (a + "").toLowerCase(), arguments.length < 2 ? h[a] : (null == b ? delete h[a] : h[a] = b + "", f)
            }, f.mimeType = function(a) {
                return arguments.length ? (b = null == a ? null : a + "", f) : b
            }, f.responseType = function(a) {
                return arguments.length ? (j = a, f) : j
            }, f.response = function(a) {
                return c = a, f
            }, ["get", "post"].forEach(function(a) {
                f[a] = function() {
                    return f.send.apply(f, [a].concat(jg(arguments)))
                }
            }), f.send = function(c, d, e) {
                if (2 === arguments.length && "function" == typeof d && (e = d, d = null), i.open(c, a, !0), null == b || "accept" in h || (h.accept = b + ",*/*"), i.setRequestHeader)
                    for (var k in h) i.setRequestHeader(k, h[k]);
                return null != b && i.overrideMimeType && i.overrideMimeType(b), null != j && (i.responseType = j), null != e && f.on("error", e).on("load", function(a) {
                    e(null, a)
                }), g.beforesend.call(f, i), i.send(null == d ? null : d), f
            }, f.abort = function() {
                return i.abort(), f
            }, hg.rebind(f, g, "on"), null == d ? f : f.get(Da(d))
        }

        function Da(a) {
            return 1 === a.length ? function(b, c) {
                a(null == b ? c : null)
            } : a
        }

        function Ea(a) {
            var b = a.responseType;
            return b && "text" !== b ? a.response : a.responseText
        }

        function Fa(a, b, c) {
            var d = arguments.length;
            d < 2 && (b = 0), d < 3 && (c = Date.now());
            var e = c + b,
                f = {
                    c: a,
                    t: e,
                    n: null
                };
            return bh ? bh.n = f : ah = f, bh = f, ch || (dh = clearTimeout(dh), ch = 1, eh(Ga)), f
        }

        function Ga() {
            var a = Ha(),
                b = Ia() - a;
            b > 24 ? (isFinite(b) && (clearTimeout(dh), dh = setTimeout(Ga, b)), ch = 0) : (ch = 1, eh(Ga))
        }

        function Ha() {
            for (var a = Date.now(), b = ah; b;) a >= b.t && b.c(a - b.t) && (b.c = null), b = b.n;
            return a
        }

        function Ia() {
            for (var a, b = ah, c = 1 / 0; b;) b.c ? (b.t < c && (c = b.t), b = (a = b).n) : b = a ? a.n = b.n : ah = b.n;
            return bh = a, c
        }

        function Ja(a, b) {
            return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
        }

        function Ka(a, b) {
            var c = Math.pow(10, 3 * rg(8 - b));
            return {
                scale: b > 8 ? function(a) {
                    return a / c
                } : function(a) {
                    return a * c
                },
                symbol: a
            }
        }

        function La(a) {
            var b = a.decimal,
                c = a.thousands,
                d = a.grouping,
                e = a.currency,
                f = d && c ? function(a, b) {
                    for (var e = a.length, f = [], g = 0, h = d[0], i = 0; e > 0 && h > 0 && (i + h + 1 > b && (h = Math.max(1, b - i)), f.push(a.substring(e -= h, e + h)), !((i += h + 1) > b));) h = d[g = (g + 1) % d.length];
                    return f.reverse().join(c)
                } : s;
            return function(a) {
                var c = gh.exec(a),
                    d = c[1] || " ",
                    g = c[2] || ">",
                    h = c[3] || "-",
                    i = c[4] || "",
                    j = c[5],
                    k = +c[6],
                    l = c[7],
                    m = c[8],
                    n = c[9],
                    o = 1,
                    p = "",
                    q = "",
                    r = !1,
                    s = !0;
                switch (m && (m = +m.substring(1)), (j || "0" === d && "=" === g) && (j = d = "0", g = "="), n) {
                    case "n":
                        l = !0, n = "g";
                        break;
                    case "%":
                        o = 100, q = "%", n = "f";
                        break;
                    case "p":
                        o = 100, q = "%", n = "r";
                        break;
                    case "b":
                    case "o":
                    case "x":
                    case "X":
                        "#" === i && (p = "0" + n.toLowerCase());
                    case "c":
                        s = !1;
                    case "d":
                        r = !0, m = 0;
                        break;
                    case "s":
                        o = -1, n = "r"
                }
                "$" === i && (p = e[0], q = e[1]), "r" != n || m || (n = "g"), null != m && ("g" == n ? m = Math.max(1, Math.min(21, m)) : "e" != n && "f" != n || (m = Math.max(0, Math.min(20, m)))), n = hh.get(n) || Ma;
                var t = j && l;
                return function(a) {
                    var c = q;
                    if (r && a % 1) return "";
                    var e = a < 0 || 0 === a && 1 / a < 0 ? (a = -a, "-") : "-" === h ? "" : h;
                    if (o < 0) {
                        var i = hg.formatPrefix(a, m);
                        a = i.scale(a), c = i.symbol + q
                    } else a *= o;
                    a = n(a, m);
                    var u, v, w = a.lastIndexOf(".");
                    if (w < 0) {
                        var x = s ? a.lastIndexOf("e") : -1;
                        x < 0 ? (u = a, v = "") : (u = a.substring(0, x), v = a.substring(x))
                    } else u = a.substring(0, w), v = b + a.substring(w + 1);
                    !j && l && (u = f(u, 1 / 0));
                    var y = p.length + u.length + v.length + (t ? 0 : e.length),
                        z = y < k ? new Array(y = k - y + 1).join(d) : "";
                    return t && (u = f(z + u, z.length ? k - v.length : 1 / 0)), e += p, a = u + v, ("<" === g ? e + a + z : ">" === g ? z + e + a : "^" === g ? z.substring(0, y >>= 1) + e + a + z.substring(y) : e + (t ? a : z + a)) + c
                }
            }
        }

        function Ma(a) {
            return a + ""
        }

        function Na() {
            this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
        }

        function Oa(a, b, c) {
            function d(b) {
                var c = a(b),
                    d = f(c, 1);
                return b - c < d - b ? c : d
            }

            function e(c) {
                return b(c = a(new jh(c - 1)), 1), c
            }

            function f(a, c) {
                return b(a = new jh(+a), c), a
            }

            function g(a, d, f) {
                var g = e(a),
                    h = [];
                if (f > 1)
                    for (; g < d;) c(g) % f || h.push(new Date(+g)), b(g, 1);
                else
                    for (; g < d;) h.push(new Date(+g)), b(g, 1);
                return h
            }

            function h(a, b, c) {
                try {
                    jh = Na;
                    var d = new Na;
                    return d._ = a, g(d, b, c)
                } finally {
                    jh = Date
                }
            }
            a.floor = a, a.round = d, a.ceil = e, a.offset = f, a.range = g;
            var i = a.utc = Pa(a);
            return i.floor = i, i.round = Pa(d), i.ceil = Pa(e), i.offset = Pa(f), i.range = h, a
        }

        function Pa(a) {
            return function(b, c) {
                try {
                    jh = Na;
                    var d = new Na;
                    return d._ = b, a(d, c)._
                } finally {
                    jh = Date
                }
            }
        }

        function Qa(a) {
            function b(a) {
                function b(b) {
                    for (var c, e, f, g = [], h = -1, i = 0; ++h < d;) 37 === a.charCodeAt(h) && (g.push(a.slice(i, h)), null != (e = lh[c = a.charAt(++h)]) && (c = a.charAt(++h)), (f = C[c]) && (c = f(b, null == e ? "e" === c ? " " : "0" : e)), g.push(c), i = h + 1);
                    return g.push(a.slice(i, h)), g.join("")
                }
                var d = a.length;
                return b.parse = function(b) {
                    var d = {
                        y: 1900,
                        m: 0,
                        d: 1,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0,
                        Z: null
                    };
                    if (c(d, a, b, 0) != b.length) return null;
                    "p" in d && (d.H = d.H % 12 + 12 * d.p);
                    var e = null != d.Z && jh !== Na,
                        f = new(e ? Na : jh);
                    return "j" in d ? f.setFullYear(d.y, 0, d.j) : "W" in d || "U" in d ? ("w" in d || (d.w = "W" in d ? 1 : 0), f.setFullYear(d.y, 0, 1), f.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + 7 * d.W - (f.getDay() + 5) % 7 : d.w + 7 * d.U - (f.getDay() + 6) % 7)) : f.setFullYear(d.y, d.m, d.d), f.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L), e ? f._ : f
                }, b.toString = function() {
                    return a
                }, b
            }

            function c(a, b, c, d) {
                for (var e, f, g, h = 0, i = b.length, j = c.length; h < i;) {
                    if (d >= j) return -1;
                    if (37 === (e = b.charCodeAt(h++))) {
                        if (g = b.charAt(h++), !(f = D[g in lh ? b.charAt(h++) : g]) || (d = f(a, c, d)) < 0) return -1
                    } else if (e != c.charCodeAt(d++)) return -1
                }
                return d
            }

            function d(a, b, c) {
                w.lastIndex = 0;
                var d = w.exec(b.slice(c));
                return d ? (a.w = x.get(d[0].toLowerCase()), c + d[0].length) : -1
            }

            function e(a, b, c) {
                u.lastIndex = 0;
                var d = u.exec(b.slice(c));
                return d ? (a.w = v.get(d[0].toLowerCase()), c + d[0].length) : -1
            }

            function f(a, b, c) {
                A.lastIndex = 0;
                var d = A.exec(b.slice(c));
                return d ? (a.m = B.get(d[0].toLowerCase()), c + d[0].length) : -1
            }

            function g(a, b, c) {
                y.lastIndex = 0;
                var d = y.exec(b.slice(c));
                return d ? (a.m = z.get(d[0].toLowerCase()), c + d[0].length) : -1
            }

            function h(a, b, d) {
                return c(a, C.c.toString(), b, d)
            }

            function i(a, b, d) {
                return c(a, C.x.toString(), b, d)
            }

            function j(a, b, d) {
                return c(a, C.X.toString(), b, d)
            }

            function k(a, b, c) {
                var d = t.get(b.slice(c, c += 2).toLowerCase());
                return null == d ? -1 : (a.p = d, c)
            }
            var l = a.dateTime,
                m = a.date,
                n = a.time,
                o = a.periods,
                p = a.days,
                q = a.shortDays,
                r = a.months,
                s = a.shortMonths;
            b.utc = function(a) {
                function c(a) {
                    try {
                        jh = Na;
                        var b = new jh;
                        return b._ = a, d(b)
                    } finally {
                        jh = Date
                    }
                }
                var d = b(a);
                return c.parse = function(a) {
                    try {
                        jh = Na;
                        var b = d.parse(a);
                        return b && b._
                    } finally {
                        jh = Date
                    }
                }, c.toString = d.toString, c
            }, b.multi = b.utc.multi = ib;
            var t = hg.map(),
                u = Sa(p),
                v = Ta(p),
                w = Sa(q),
                x = Ta(q),
                y = Sa(r),
                z = Ta(r),
                A = Sa(s),
                B = Ta(s);
            o.forEach(function(a, b) {
                t.set(a.toLowerCase(), b)
            });
            var C = {
                    a: function(a) {
                        return q[a.getDay()]
                    },
                    A: function(a) {
                        return p[a.getDay()]
                    },
                    b: function(a) {
                        return s[a.getMonth()]
                    },
                    B: function(a) {
                        return r[a.getMonth()]
                    },
                    c: b(l),
                    d: function(a, b) {
                        return Ra(a.getDate(), b, 2)
                    },
                    e: function(a, b) {
                        return Ra(a.getDate(), b, 2)
                    },
                    H: function(a, b) {
                        return Ra(a.getHours(), b, 2)
                    },
                    I: function(a, b) {
                        return Ra(a.getHours() % 12 || 12, b, 2)
                    },
                    j: function(a, b) {
                        return Ra(1 + ih.dayOfYear(a), b, 3)
                    },
                    L: function(a, b) {
                        return Ra(a.getMilliseconds(), b, 3)
                    },
                    m: function(a, b) {
                        return Ra(a.getMonth() + 1, b, 2)
                    },
                    M: function(a, b) {
                        return Ra(a.getMinutes(), b, 2)
                    },
                    p: function(a) {
                        return o[+(a.getHours() >= 12)]
                    },
                    S: function(a, b) {
                        return Ra(a.getSeconds(), b, 2)
                    },
                    U: function(a, b) {
                        return Ra(ih.sundayOfYear(a), b, 2)
                    },
                    w: function(a) {
                        return a.getDay()
                    },
                    W: function(a, b) {
                        return Ra(ih.mondayOfYear(a), b, 2)
                    },
                    x: b(m),
                    X: b(n),
                    y: function(a, b) {
                        return Ra(a.getFullYear() % 100, b, 2)
                    },
                    Y: function(a, b) {
                        return Ra(a.getFullYear() % 1e4, b, 4)
                    },
                    Z: gb,
                    "%": function() {
                        return "%"
                    }
                },
                D = {
                    a: d,
                    A: e,
                    b: f,
                    B: g,
                    c: h,
                    d: ab,
                    e: ab,
                    H: cb,
                    I: cb,
                    j: bb,
                    L: fb,
                    m: _a,
                    M: db,
                    p: k,
                    S: eb,
                    U: Va,
                    w: Ua,
                    W: Wa,
                    x: i,
                    X: j,
                    y: Ya,
                    Y: Xa,
                    Z: Za,
                    "%": hb
                };
            return b
        }

        function Ra(a, b, c) {
            var d = a < 0 ? "-" : "",
                e = (d ? -a : a) + "",
                f = e.length;
            return d + (f < c ? new Array(c - f + 1).join(b) + e : e)
        }

        function Sa(a) {
            return new RegExp("^(?:" + a.map(hg.requote).join("|") + ")", "i")
        }

        function Ta(a) {
            for (var b = new j, c = -1, d = a.length; ++c < d;) b.set(a[c].toLowerCase(), c);
            return b
        }

        function Ua(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c, c + 1));
            return d ? (a.w = +d[0], c + d[0].length) : -1
        }

        function Va(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c));
            return d ? (a.U = +d[0], c + d[0].length) : -1
        }

        function Wa(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c));
            return d ? (a.W = +d[0], c + d[0].length) : -1
        }

        function Xa(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c, c + 4));
            return d ? (a.y = +d[0], c + d[0].length) : -1
        }

        function Ya(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c, c + 2));
            return d ? (a.y = $a(+d[0]), c + d[0].length) : -1
        }

        function Za(a, b, c) {
            return /^[+-]\d{4}$/.test(b = b.slice(c, c + 5)) ? (a.Z = -b, c + 5) : -1
        }

        function $a(a) {
            return a + (a > 68 ? 1900 : 2e3)
        }

        function _a(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c, c + 2));
            return d ? (a.m = d[0] - 1, c + d[0].length) : -1
        }

        function ab(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c, c + 2));
            return d ? (a.d = +d[0], c + d[0].length) : -1
        }

        function bb(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c, c + 3));
            return d ? (a.j = +d[0], c + d[0].length) : -1
        }

        function cb(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c, c + 2));
            return d ? (a.H = +d[0], c + d[0].length) : -1
        }

        function db(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c, c + 2));
            return d ? (a.M = +d[0], c + d[0].length) : -1
        }

        function eb(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c, c + 2));
            return d ? (a.S = +d[0], c + d[0].length) : -1
        }

        function fb(a, b, c) {
            mh.lastIndex = 0;
            var d = mh.exec(b.slice(c, c + 3));
            return d ? (a.L = +d[0], c + d[0].length) : -1
        }

        function gb(a) {
            var b = a.getTimezoneOffset(),
                c = b > 0 ? "-" : "+",
                d = rg(b) / 60 | 0,
                e = rg(b) % 60;
            return c + Ra(d, "0", 2) + Ra(e, "0", 2)
        }

        function hb(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c, c + 1));
            return d ? c + d[0].length : -1
        }

        function ib(a) {
            for (var b = a.length, c = -1; ++c < b;) a[c][0] = this(a[c][0]);
            return function(b) {
                for (var c = 0, d = a[c]; !d[1](b);) d = a[++c];
                return d[0](b)
            }
        }

        function jb() {}

        function kb(a, b, c) {
            var d = c.s = a + b,
                e = d - a,
                f = d - e;
            c.t = a - f + (b - e)
        }

        function lb(a, b) {
            a && rh.hasOwnProperty(a.type) && rh[a.type](a, b)
        }

        function mb(a, b, c) {
            var d, e = -1,
                f = a.length - c;
            for (b.lineStart(); ++e < f;) d = a[e], b.point(d[0], d[1], d[2]);
            b.lineEnd()
        }

        function nb(a, b) {
            var c = -1,
                d = a.length;
            for (b.polygonStart(); ++c < d;) mb(a[c], b, 1);
            b.polygonEnd()
        }

        function ob() {
            function a(a, b) {
                a *= Ng, b = b * Ng / 2 + Jg / 4;
                var c = a - d,
                    g = c >= 0 ? 1 : -1,
                    h = g * c,
                    i = Math.cos(b),
                    j = Math.sin(b),
                    k = f * j,
                    l = e * i + k * Math.cos(h),
                    m = k * g * Math.sin(h);
                th.add(Math.atan2(m, l)), d = a, e = i, f = j
            }
            var b, c, d, e, f;
            uh.point = function(g, h) {
                uh.point = a, d = (b = g) * Ng, e = Math.cos(h = (c = h) * Ng / 2 + Jg / 4), f = Math.sin(h)
            }, uh.lineEnd = function() {
                a(b, c)
            }
        }

        function pb(a) {
            var b = a[0],
                c = a[1],
                d = Math.cos(c);
            return [d * Math.cos(b), d * Math.sin(b), Math.sin(c)]
        }

        function qb(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
        }

        function rb(a, b) {
            return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
        }

        function sb(a, b) {
            a[0] += b[0], a[1] += b[1], a[2] += b[2]
        }

        function tb(a, b) {
            return [a[0] * b, a[1] * b, a[2] * b]
        }

        function ub(a) {
            var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
            a[0] /= b, a[1] /= b, a[2] /= b
        }

        function vb(a) {
            return [Math.atan2(a[1], a[0]), ba(a[2])]
        }

        function wb(a, b) {
            return rg(a[0] - b[0]) < Hg && rg(a[1] - b[1]) < Hg
        }

        function xb(a, b) {
            a *= Ng;
            var c = Math.cos(b *= Ng);
            yb(c * Math.cos(a), c * Math.sin(a), Math.sin(b))
        }

        function yb(a, b, c) {
            ++vh, xh += (a - xh) / vh, yh += (b - yh) / vh, zh += (c - zh) / vh
        }

        function zb() {
            function a(a, e) {
                a *= Ng;
                var f = Math.cos(e *= Ng),
                    g = f * Math.cos(a),
                    h = f * Math.sin(a),
                    i = Math.sin(e),
                    j = Math.atan2(Math.sqrt((j = c * i - d * h) * j + (j = d * g - b * i) * j + (j = b * h - c * g) * j), b * g + c * h + d * i);
                wh += j, Ah += j * (b + (b = g)), Bh += j * (c + (c = h)), Ch += j * (d + (d = i)), yb(b, c, d)
            }
            var b, c, d;
            Gh.point = function(e, f) {
                e *= Ng;
                var g = Math.cos(f *= Ng);
                b = g * Math.cos(e), c = g * Math.sin(e), d = Math.sin(f), Gh.point = a, yb(b, c, d)
            }
        }

        function Ab() {
            Gh.point = xb
        }

        function Bb() {
            function a(a, b) {
                a *= Ng;
                var c = Math.cos(b *= Ng),
                    g = c * Math.cos(a),
                    h = c * Math.sin(a),
                    i = Math.sin(b),
                    j = e * i - f * h,
                    k = f * g - d * i,
                    l = d * h - e * g,
                    m = Math.sqrt(j * j + k * k + l * l),
                    n = d * g + e * h + f * i,
                    o = m && -aa(n) / m,
                    p = Math.atan2(m, n);
                Dh += o * j, Eh += o * k, Fh += o * l, wh += p, Ah += p * (d + (d = g)), Bh += p * (e + (e = h)), Ch += p * (f + (f = i)), yb(d, e, f)
            }
            var b, c, d, e, f;
            Gh.point = function(g, h) {
                b = g, c = h, Gh.point = a, g *= Ng;
                var i = Math.cos(h *= Ng);
                d = i * Math.cos(g), e = i * Math.sin(g), f = Math.sin(h), yb(d, e, f)
            }, Gh.lineEnd = function() {
                a(b, c), Gh.lineEnd = Ab, Gh.point = xb
            }
        }

        function Cb(a, b) {
            function c(c, d) {
                return c = a(c, d), b(c[0], c[1])
            }
            return a.invert && b.invert && (c.invert = function(c, d) {
                return (c = b.invert(c, d)) && a.invert(c[0], c[1])
            }), c
        }

        function Db() {
            return !0
        }

        function Eb(a, b, c, d, e) {
            var f = [],
                g = [];
            if (a.forEach(function(a) {
                    if (!((b = a.length - 1) <= 0)) {
                        var b, c = a[0],
                            d = a[b];
                        if (wb(c, d)) {
                            e.lineStart();
                            for (var h = 0; h < b; ++h) e.point((c = a[h])[0], c[1]);
                            return void e.lineEnd()
                        }
                        var i = new Gb(c, a, null, !0),
                            j = new Gb(c, null, i, !1);
                        i.o = j, f.push(i), g.push(j), i = new Gb(d, a, null, !1), j = new Gb(d, null, i, !0), i.o = j, f.push(i), g.push(j)
                    }
                }), g.sort(b), Fb(f), Fb(g), f.length) {
                for (var h = 0, i = c, j = g.length; h < j; ++h) g[h].e = i = !i;
                for (var k, l, m = f[0];;) {
                    for (var n = m, o = !0; n.v;)
                        if ((n = n.n) === m) return;
                    k = n.z, e.lineStart();
                    do {
                        if (n.v = n.o.v = !0, n.e) {
                            if (o)
                                for (var h = 0, j = k.length; h < j; ++h) e.point((l = k[h])[0], l[1]);
                            else d(n.x, n.n.x, 1, e);
                            n = n.n
                        } else {
                            if (o) {
                                k = n.p.z;
                                for (var h = k.length - 1; h >= 0; --h) e.point((l = k[h])[0], l[1])
                            } else d(n.x, n.p.x, -1, e);
                            n = n.p
                        }
                        n = n.o, k = n.z, o = !o
                    } while (!n.v);
                    e.lineEnd()
                }
            }
        }

        function Fb(a) {
            if (b = a.length) {
                for (var b, c, d = 0, e = a[0]; ++d < b;) e.n = c = a[d], c.p = e, e = c;
                e.n = c = a[0], c.p = e
            }
        }

        function Gb(a, b, c, d) {
            this.x = a, this.z = b, this.o = c, this.e = d, this.v = !1, this.n = this.p = null
        }

        function Hb(a, b, c, d) {
            return function(e, f) {
                function g(b, c) {
                    var d = e(b, c);
                    a(b = d[0], c = d[1]) && f.point(b, c)
                }

                function h(a, b) {
                    var c = e(a, b);
                    q.point(c[0], c[1])
                }

                function i() {
                    s.point = h, q.lineStart()
                }

                function j() {
                    s.point = g, q.lineEnd()
                }

                function k(a, b) {
                    p.push([a, b]);
                    var c = e(a, b);
                    u.point(c[0], c[1])
                }

                function l() {
                    u.lineStart(), p = []
                }

                function m() {
                    k(p[0][0], p[0][1]), u.lineEnd();
                    var a, b = u.clean(),
                        c = t.buffer(),
                        d = c.length;
                    if (p.pop(), o.push(p), p = null, d)
                        if (1 & b) {
                            a = c[0];
                            var e, d = a.length - 1,
                                g = -1;
                            if (d > 0) {
                                for (v || (f.polygonStart(), v = !0), f.lineStart(); ++g < d;) f.point((e = a[g])[0], e[1]);
                                f.lineEnd()
                            }
                        } else d > 1 && 2 & b && c.push(c.pop().concat(c.shift())), n.push(c.filter(Ib))
                }
                var n, o, p, q = b(f),
                    r = e.invert(d[0], d[1]),
                    s = {
                        point: g,
                        lineStart: i,
                        lineEnd: j,
                        polygonStart: function() {
                            s.point = k, s.lineStart = l, s.lineEnd = m, n = [], o = []
                        },
                        polygonEnd: function() {
                            s.point = g, s.lineStart = i, s.lineEnd = j, n = hg.merge(n);
                            var a = Ob(r, o);
                            n.length ? (v || (f.polygonStart(), v = !0), Eb(n, Kb, a, c, f)) : a && (v || (f.polygonStart(), v = !0), f.lineStart(), c(null, null, 1, f), f.lineEnd()), v && (f.polygonEnd(), v = !1), n = o = null
                        },
                        sphere: function() {
                            f.polygonStart(), f.lineStart(), c(null, null, 1, f), f.lineEnd(), f.polygonEnd()
                        }
                    },
                    t = Jb(),
                    u = b(t),
                    v = !1;
                return s
            }
        }

        function Ib(a) {
            return a.length > 1
        }

        function Jb() {
            var a, b = [];
            return {
                lineStart: function() {
                    b.push(a = [])
                },
                point: function(b, c) {
                    a.push([b, c])
                },
                lineEnd: v,
                buffer: function() {
                    var c = b;
                    return b = [], a = null, c
                },
                rejoin: function() {
                    b.length > 1 && b.push(b.pop().concat(b.shift()))
                }
            }
        }

        function Kb(a, b) {
            return ((a = a.x)[0] < 0 ? a[1] - Mg - Hg : Mg - a[1]) - ((b = b.x)[0] < 0 ? b[1] - Mg - Hg : Mg - b[1])
        }

        function Lb(a) {
            var b, c = NaN,
                d = NaN,
                e = NaN;
            return {
                lineStart: function() {
                    a.lineStart(), b = 1
                },
                point: function(f, g) {
                    var h = f > 0 ? Jg : -Jg,
                        i = rg(f - c);
                    rg(i - Jg) < Hg ? (a.point(c, d = (d + g) / 2 > 0 ? Mg : -Mg), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), a.point(f, d), b = 0) : e !== h && i >= Jg && (rg(c - e) < Hg && (c -= e * Hg), rg(f - h) < Hg && (f -= h * Hg), d = Mb(c, d, f, g), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), b = 0), a.point(c = f, d = g), e = h
                },
                lineEnd: function() {
                    a.lineEnd(), c = d = NaN
                },
                clean: function() {
                    return 2 - b
                }
            }
        }

        function Mb(a, b, c, d) {
            var e, f, g = Math.sin(a - c);
            return rg(g) > Hg ? Math.atan((Math.sin(b) * (f = Math.cos(d)) * Math.sin(c) - Math.sin(d) * (e = Math.cos(b)) * Math.sin(a)) / (e * f * g)) : (b + d) / 2
        }

        function Nb(a, b, c, d) {
            var e;
            if (null == a) e = c * Mg, d.point(-Jg, e), d.point(0, e), d.point(Jg, e), d.point(Jg, 0), d.point(Jg, -e), d.point(0, -e), d.point(-Jg, -e), d.point(-Jg, 0), d.point(-Jg, e);
            else if (rg(a[0] - b[0]) > Hg) {
                var f = a[0] < b[0] ? Jg : -Jg;
                e = c * f / 2, d.point(-f, e), d.point(0, e), d.point(f, e)
            } else d.point(b[0], b[1])
        }

        function Ob(a, b) {
            var c = a[0],
                d = a[1],
                e = [Math.sin(c), -Math.cos(c), 0],
                f = 0,
                g = 0;
            th.reset();
            for (var h = 0, i = b.length; h < i; ++h) {
                var j = b[h],
                    k = j.length;
                if (k)
                    for (var l = j[0], m = l[0], n = l[1] / 2 + Jg / 4, o = Math.sin(n), p = Math.cos(n), q = 1;;) {
                        q === k && (q = 0), a = j[q];
                        var r = a[0],
                            s = a[1] / 2 + Jg / 4,
                            t = Math.sin(s),
                            u = Math.cos(s),
                            v = r - m,
                            w = v >= 0 ? 1 : -1,
                            x = w * v,
                            y = x > Jg,
                            z = o * t;
                        if (th.add(Math.atan2(z * w * Math.sin(x), p * u + z * Math.cos(x))), f += y ? v + w * Kg : v, y ^ m >= c ^ r >= c) {
                            var A = rb(pb(l), pb(a));
                            ub(A);
                            var B = rb(e, A);
                            ub(B);
                            var C = (y ^ v >= 0 ? -1 : 1) * ba(B[2]);
                            (d > C || d === C && (A[0] || A[1])) && (g += y ^ v >= 0 ? 1 : -1)
                        }
                        if (!q++) break;
                        m = r, o = t, p = u, l = a
                    }
            }
            return (f < -Hg || f < Hg && th < 0) ^ 1 & g
        }

        function Pb(a) {
            function b(a, b) {
                return Math.cos(a) * Math.cos(b) > f
            }

            function c(a) {
                var c, f, i, j, k;
                return {
                    lineStart: function() {
                        j = i = !1, k = 1
                    },
                    point: function(l, m) {
                        var n, o = [l, m],
                            p = b(l, m),
                            q = g ? p ? 0 : e(l, m) : p ? e(l + (l < 0 ? Jg : -Jg), m) : 0;
                        if (!c && (j = i = p) && a.lineStart(), p !== i && (n = d(c, o), (wb(c, n) || wb(o, n)) && (o[0] += Hg, o[1] += Hg, p = b(o[0], o[1]))), p !== i) k = 0, p ? (a.lineStart(), n = d(o, c), a.point(n[0], n[1])) : (n = d(c, o), a.point(n[0], n[1]), a.lineEnd()), c = n;
                        else if (h && c && g ^ p) {
                            var r;
                            q & f || !(r = d(o, c, !0)) || (k = 0, g ? (a.lineStart(), a.point(r[0][0], r[0][1]), a.point(r[1][0], r[1][1]), a.lineEnd()) : (a.point(r[1][0], r[1][1]), a.lineEnd(), a.lineStart(), a.point(r[0][0], r[0][1])))
                        }!p || c && wb(c, o) || a.point(o[0], o[1]), c = o, i = p, f = q
                    },
                    lineEnd: function() {
                        i && a.lineEnd(), c = null
                    },
                    clean: function() {
                        return k | (j && i) << 1
                    }
                }
            }

            function d(a, b, c) {
                var d = pb(a),
                    e = pb(b),
                    g = [1, 0, 0],
                    h = rb(d, e),
                    i = qb(h, h),
                    j = h[0],
                    k = i - j * j;
                if (!k) return !c && a;
                var l = f * i / k,
                    m = -f * j / k,
                    n = rb(g, h),
                    o = tb(g, l);
                sb(o, tb(h, m));
                var p = n,
                    q = qb(o, p),
                    r = qb(p, p),
                    s = q * q - r * (qb(o, o) - 1);
                if (!(s < 0)) {
                    var t = Math.sqrt(s),
                        u = tb(p, (-q - t) / r);
                    if (sb(u, o), u = vb(u), !c) return u;
                    var v, w = a[0],
                        x = b[0],
                        y = a[1],
                        z = b[1];
                    x < w && (v = w, w = x, x = v);
                    var A = x - w,
                        B = rg(A - Jg) < Hg,
                        C = B || A < Hg;
                    if (!B && z < y && (v = y, y = z, z = v), C ? B ? y + z > 0 ^ u[1] < (rg(u[0] - w) < Hg ? y : z) : y <= u[1] && u[1] <= z : A > Jg ^ (w <= u[0] && u[0] <= x)) {
                        var D = tb(p, (-q + t) / r);
                        return sb(D, o), [u, vb(D)]
                    }
                }
            }

            function e(b, c) {
                var d = g ? a : Jg - a,
                    e = 0;
                return b < -d ? e |= 1 : b > d && (e |= 2), c < -d ? e |= 4 : c > d && (e |= 8), e
            }
            var f = Math.cos(a),
                g = f > 0,
                h = rg(f) > Hg;
            return Hb(b, c, oc(a, 6 * Ng), g ? [0, -a] : [-Jg, a - Jg])
        }

        function Qb(a, b, c, d) {
            return function(e) {
                var f, g = e.a,
                    h = e.b,
                    i = g.x,
                    j = g.y,
                    k = h.x,
                    l = h.y,
                    m = 0,
                    n = 1,
                    o = k - i,
                    p = l - j;
                if (f = a - i, o || !(f > 0)) {
                    if (f /= o, o < 0) {
                        if (f < m) return;
                        f < n && (n = f)
                    } else if (o > 0) {
                        if (f > n) return;
                        f > m && (m = f)
                    }
                    if (f = c - i, o || !(f < 0)) {
                        if (f /= o, o < 0) {
                            if (f > n) return;
                            f > m && (m = f)
                        } else if (o > 0) {
                            if (f < m) return;
                            f < n && (n = f)
                        }
                        if (f = b - j, p || !(f > 0)) {
                            if (f /= p, p < 0) {
                                if (f < m) return;
                                f < n && (n = f)
                            } else if (p > 0) {
                                if (f > n) return;
                                f > m && (m = f)
                            }
                            if (f = d - j, p || !(f < 0)) {
                                if (f /= p, p < 0) {
                                    if (f > n) return;
                                    f > m && (m = f)
                                } else if (p > 0) {
                                    if (f < m) return;
                                    f < n && (n = f)
                                }
                                return m > 0 && (e.a = {
                                    x: i + m * o,
                                    y: j + m * p
                                }), n < 1 && (e.b = {
                                    x: i + n * o,
                                    y: j + n * p
                                }), e
                            }
                        }
                    }
                }
            }
        }

        function Rb(a, b, c, d) {
            function e(d, e) {
                return rg(d[0] - a) < Hg ? e > 0 ? 0 : 3 : rg(d[0] - c) < Hg ? e > 0 ? 2 : 1 : rg(d[1] - b) < Hg ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2
            }

            function f(a, b) {
                return g(a.x, b.x)
            }

            function g(a, b) {
                var c = e(a, 1),
                    d = e(b, 1);
                return c !== d ? c - d : 0 === c ? b[1] - a[1] : 1 === c ? a[0] - b[0] : 2 === c ? a[1] - b[1] : b[0] - a[0]
            }
            return function(h) {
                function i(a) {
                    for (var b = 0, c = q.length, d = a[1], e = 0; e < c; ++e)
                        for (var f, g = 1, h = q[e], i = h.length, j = h[0]; g < i; ++g) f = h[g], j[1] <= d ? f[1] > d && _(j, f, a) > 0 && ++b : f[1] <= d && _(j, f, a) < 0 && --b, j = f;
                    return 0 !== b
                }

                function j(f, h, i, j) {
                    var k = 0,
                        l = 0;
                    if (null == f || (k = e(f, i)) !== (l = e(h, i)) || g(f, h) < 0 ^ i > 0)
                        do {
                            j.point(0 === k || 3 === k ? a : c, k > 1 ? d : b)
                        } while ((k = (k + i + 4) % 4) !== l);
                    else j.point(h[0], h[1])
                }

                function k(e, f) {
                    return a <= e && e <= c && b <= f && f <= d
                }

                function l(a, b) {
                    k(a, b) && h.point(a, b)
                }

                function m() {
                    D.point = o, q && q.push(r = []), y = !0, x = !1, v = w = NaN
                }

                function n() {
                    p && (o(s, t), u && x && B.rejoin(), p.push(B.buffer())), D.point = l, x && h.lineEnd()
                }

                function o(a, b) {
                    a = Math.max(-Ih, Math.min(Ih, a)), b = Math.max(-Ih, Math.min(Ih, b));
                    var c = k(a, b);
                    if (q && r.push([a, b]), y) s = a, t = b, u = c, y = !1, c && (h.lineStart(), h.point(a, b));
                    else if (c && x) h.point(a, b);
                    else {
                        var d = {
                            a: {
                                x: v,
                                y: w
                            },
                            b: {
                                x: a,
                                y: b
                            }
                        };
                        C(d) ? (x || (h.lineStart(), h.point(d.a.x, d.a.y)), h.point(d.b.x, d.b.y), c || h.lineEnd(), z = !1) : c && (h.lineStart(), h.point(a, b), z = !1)
                    }
                    v = a, w = b, x = c
                }
                var p, q, r, s, t, u, v, w, x, y, z, A = h,
                    B = Jb(),
                    C = Qb(a, b, c, d),
                    D = {
                        point: l,
                        lineStart: m,
                        lineEnd: n,
                        polygonStart: function() {
                            h = B, p = [], q = [], z = !0
                        },
                        polygonEnd: function() {
                            h = A, p = hg.merge(p);
                            var b = i([a, d]),
                                c = z && b,
                                e = p.length;
                            (c || e) && (h.polygonStart(), c && (h.lineStart(), j(null, null, 1, h), h.lineEnd()), e && Eb(p, f, b, j, h), h.polygonEnd()), p = q = r = null
                        }
                    };
                return D
            }
        }

        function Sb(a) {
            var b = 0,
                c = Jg / 3,
                d = gc(a),
                e = d(b, c);
            return e.parallels = function(a) {
                return arguments.length ? d(b = a[0] * Jg / 180, c = a[1] * Jg / 180) : [b / Jg * 180, c / Jg * 180]
            }, e
        }

        function Tb(a, b) {
            function c(a, b) {
                var c = Math.sqrt(f - 2 * e * Math.sin(b)) / e;
                return [c * Math.sin(a *= e), g - c * Math.cos(a)]
            }
            var d = Math.sin(a),
                e = (d + Math.sin(b)) / 2,
                f = 1 + d * (2 * e - d),
                g = Math.sqrt(f) / e;
            return c.invert = function(a, b) {
                var c = g - b;
                return [Math.atan2(a, c) / e, ba((f - (a * a + c * c) * e * e) / (2 * e))]
            }, c
        }

        function Ub() {
            function a(a, b) {
                Kh += e * a - d * b, d = a, e = b
            }
            var b, c, d, e;
            Ph.point = function(f, g) {
                Ph.point = a, b = d = f, c = e = g
            }, Ph.lineEnd = function() {
                a(b, c)
            }
        }

        function Vb(a, b) {
            a < Lh && (Lh = a), a > Nh && (Nh = a), b < Mh && (Mh = b), b > Oh && (Oh = b)
        }

        function Wb() {
            function a(a, b) {
                g.push("M", a, ",", b, f)
            }

            function b(a, b) {
                g.push("M", a, ",", b), h.point = c
            }

            function c(a, b) {
                g.push("L", a, ",", b)
            }

            function d() {
                h.point = a
            }

            function e() {
                g.push("Z")
            }
            var f = Xb(4.5),
                g = [],
                h = {
                    point: a,
                    lineStart: function() {
                        h.point = b
                    },
                    lineEnd: d,
                    polygonStart: function() {
                        h.lineEnd = e
                    },
                    polygonEnd: function() {
                        h.lineEnd = d, h.point = a
                    },
                    pointRadius: function(a) {
                        return f = Xb(a), h
                    },
                    result: function() {
                        if (g.length) {
                            var a = g.join("");
                            return g = [], a
                        }
                    }
                };
            return h
        }

        function Xb(a) {
            return "m0," + a + "a" + a + "," + a + " 0 1,1 0," + -2 * a + "a" + a + "," + a + " 0 1,1 0," + 2 * a + "z"
        }

        function Yb(a, b) {
            xh += a, yh += b, ++zh
        }

        function Zb() {
            function a(a, d) {
                var e = a - b,
                    f = d - c,
                    g = Math.sqrt(e * e + f * f);
                Ah += g * (b + a) / 2, Bh += g * (c + d) / 2, Ch += g, Yb(b = a, c = d)
            }
            var b, c;
            Rh.point = function(d, e) {
                Rh.point = a, Yb(b = d, c = e)
            }
        }

        function $b() {
            Rh.point = Yb
        }

        function _b() {
            function a(a, b) {
                var c = a - d,
                    f = b - e,
                    g = Math.sqrt(c * c + f * f);
                Ah += g * (d + a) / 2, Bh += g * (e + b) / 2, Ch += g, g = e * a - d * b, Dh += g * (d + a), Eh += g * (e + b), Fh += 3 * g, Yb(d = a, e = b)
            }
            var b, c, d, e;
            Rh.point = function(f, g) {
                Rh.point = a, Yb(b = d = f, c = e = g)
            }, Rh.lineEnd = function() {
                a(b, c)
            }
        }

        function ac(a) {
            function b(b, c) {
                a.moveTo(b + g, c), a.arc(b, c, g, 0, Kg)
            }

            function c(b, c) {
                a.moveTo(b, c), h.point = d
            }

            function d(b, c) {
                a.lineTo(b, c)
            }

            function e() {
                h.point = b
            }

            function f() {
                a.closePath()
            }
            var g = 4.5,
                h = {
                    point: b,
                    lineStart: function() {
                        h.point = c
                    },
                    lineEnd: e,
                    polygonStart: function() {
                        h.lineEnd = f
                    },
                    polygonEnd: function() {
                        h.lineEnd = e, h.point = b
                    },
                    pointRadius: function(a) {
                        return g = a, h
                    },
                    result: v
                };
            return h
        }

        function bc(a) {
            function b(a) {
                return (h ? d : c)(a)
            }

            function c(b) {
                return ec(b, function(c, d) {
                    c = a(c, d), b.point(c[0], c[1])
                })
            }

            function d(b) {
                function c(c, d) {
                    c = a(c, d), b.point(c[0], c[1])
                }

                function d() {
                    t = NaN, y.point = f, b.lineStart()
                }

                function f(c, d) {
                    var f = pb([c, d]),
                        g = a(c, d);
                    e(t, u, s, v, w, x, t = g[0], u = g[1], s = c, v = f[0], w = f[1], x = f[2], h, b), b.point(t, u)
                }

                function g() {
                    y.point = c, b.lineEnd()
                }

                function i() {
                    d(), y.point = j, y.lineEnd = k
                }

                function j(a, b) {
                    f(l = a, m = b), n = t, o = u, p = v, q = w, r = x, y.point = f
                }

                function k() {
                    e(t, u, s, v, w, x, n, o, l, p, q, r, h, b), y.lineEnd = g, g()
                }
                var l, m, n, o, p, q, r, s, t, u, v, w, x, y = {
                    point: c,
                    lineStart: d,
                    lineEnd: g,
                    polygonStart: function() {
                        b.polygonStart(), y.lineStart = i
                    },
                    polygonEnd: function() {
                        b.polygonEnd(), y.lineStart = d
                    }
                };
                return y
            }

            function e(b, c, d, h, i, j, k, l, m, n, o, p, q, r) {
                var s = k - b,
                    t = l - c,
                    u = s * s + t * t;
                if (u > 4 * f && q--) {
                    var v = h + n,
                        w = i + o,
                        x = j + p,
                        y = Math.sqrt(v * v + w * w + x * x),
                        z = Math.asin(x /= y),
                        A = rg(rg(x) - 1) < Hg || rg(d - m) < Hg ? (d + m) / 2 : Math.atan2(w, v),
                        B = a(A, z),
                        C = B[0],
                        D = B[1],
                        E = C - b,
                        F = D - c,
                        G = t * E - s * F;
                    (G * G / u > f || rg((s * E + t * F) / u - .5) > .3 || h * n + i * o + j * p < g) && (e(b, c, d, h, i, j, C, D, A, v /= y, w /= y, x, q, r), r.point(C, D), e(C, D, A, v, w, x, k, l, m, n, o, p, q, r))
                }
            }
            var f = .5,
                g = Math.cos(30 * Ng),
                h = 16;
            return b.precision = function(a) {
                return arguments.length ? (h = (f = a * a) > 0 && 16, b) : Math.sqrt(f)
            }, b
        }

        function cc(a) {
            var b = bc(function(b, c) {
                return a([b * Og, c * Og])
            });
            return function(a) {
                return hc(b(a))
            }
        }

        function dc(a) {
            this.stream = a
        }

        function ec(a, b) {
            return {
                point: b,
                sphere: function() {
                    a.sphere()
                },
                lineStart: function() {
                    a.lineStart()
                },
                lineEnd: function() {
                    a.lineEnd()
                },
                polygonStart: function() {
                    a.polygonStart()
                },
                polygonEnd: function() {
                    a.polygonEnd()
                }
            }
        }

        function fc(a) {
            return gc(function() {
                return a
            })()
        }

        function gc(a) {
            function b(a) {
                return a = h(a[0] * Ng, a[1] * Ng), [a[0] * m + i, j - a[1] * m]
            }

            function c(a) {
                return (a = h.invert((a[0] - i) / m, (j - a[1]) / m)) && [a[0] * Og, a[1] * Og]
            }

            function d() {
                h = Cb(g = kc(r, t, u), f);
                var a = f(p, q);
                return i = n - a[0] * m, j = o + a[1] * m, e()
            }

            function e() {
                return k && (k.valid = !1, k = null), b
            }
            var f, g, h, i, j, k, l = bc(function(a, b) {
                    return a = f(a, b), [a[0] * m + i, j - a[1] * m]
                }),
                m = 150,
                n = 480,
                o = 250,
                p = 0,
                q = 0,
                r = 0,
                t = 0,
                u = 0,
                v = Hh,
                w = s,
                x = null,
                y = null;
            return b.stream = function(a) {
                    return k && (k.valid = !1), k = hc(v(g, l(w(a)))), k.valid = !0, k
                }, b.clipAngle = function(a) {
                    return arguments.length ? (v = null == a ? (x = a, Hh) : Pb((x = +a) * Ng), e()) : x
                }, b.clipExtent = function(a) {
                    return arguments.length ? (y = a, w = a ? Rb(a[0][0], a[0][1], a[1][0], a[1][1]) : s, e()) : y
                }, b.scale = function(a) {
                    return arguments.length ? (m = +a, d()) : m
                }, b.translate = function(a) {
                    return arguments.length ? (n = +a[0], o = +a[1], d()) : [n, o]
                }, b.center = function(a) {
                    return arguments.length ? (p = a[0] % 360 * Ng, q = a[1] % 360 * Ng, d()) : [p * Og, q * Og]
                }, b.rotate = function(a) {
                    return arguments.length ? (r = a[0] % 360 * Ng, t = a[1] % 360 * Ng, u = a.length > 2 ? a[2] % 360 * Ng : 0, d()) : [r * Og, t * Og, u * Og]
                }, hg.rebind(b, l, "precision"),
                function() {
                    return f = a.apply(this, arguments), b.invert = f.invert && c, d()
                }
        }

        function hc(a) {
            return ec(a, function(b, c) {
                a.point(b * Ng, c * Ng)
            })
        }

        function ic(a, b) {
            return [a, b]
        }

        function jc(a, b) {
            return [a > Jg ? a - Kg : a < -Jg ? a + Kg : a, b]
        }

        function kc(a, b, c) {
            return a ? b || c ? Cb(mc(a), nc(b, c)) : mc(a) : b || c ? nc(b, c) : jc
        }

        function lc(a) {
            return function(b, c) {
                return b += a, [b > Jg ? b - Kg : b < -Jg ? b + Kg : b, c]
            }
        }

        function mc(a) {
            var b = lc(a);
            return b.invert = lc(-a), b
        }

        function nc(a, b) {
            function c(a, b) {
                var c = Math.cos(b),
                    h = Math.cos(a) * c,
                    i = Math.sin(a) * c,
                    j = Math.sin(b),
                    k = j * d + h * e;
                return [Math.atan2(i * f - k * g, h * d - j * e), ba(k * f + i * g)]
            }
            var d = Math.cos(a),
                e = Math.sin(a),
                f = Math.cos(b),
                g = Math.sin(b);
            return c.invert = function(a, b) {
                var c = Math.cos(b),
                    h = Math.cos(a) * c,
                    i = Math.sin(a) * c,
                    j = Math.sin(b),
                    k = j * f - i * g;
                return [Math.atan2(i * f + j * g, h * d + k * e), ba(k * d - h * e)]
            }, c
        }

        function oc(a, b) {
            var c = Math.cos(a),
                d = Math.sin(a);
            return function(e, f, g, h) {
                var i = g * b;
                null != e ? (e = pc(c, e), f = pc(c, f), (g > 0 ? e < f : e > f) && (e += g * Kg)) : (e = a + g * Kg, f = a - .5 * i);
                for (var j, k = e; g > 0 ? k > f : k < f; k -= i) h.point((j = vb([c, -d * Math.cos(k), -d * Math.sin(k)]))[0], j[1])
            }
        }

        function pc(a, b) {
            var c = pb(b);
            c[0] -= a, ub(c);
            var d = aa(-c[1]);
            return ((-c[2] < 0 ? -d : d) + 2 * Math.PI - Hg) % (2 * Math.PI)
        }

        function qc(a, b, c) {
            var d = hg.range(a, b - Hg, c).concat(b);
            return function(a) {
                return d.map(function(b) {
                    return [a, b]
                })
            }
        }

        function rc(a, b, c) {
            var d = hg.range(a, b - Hg, c).concat(b);
            return function(a) {
                return d.map(function(b) {
                    return [b, a]
                })
            }
        }

        function sc(a) {
            return a.source
        }

        function tc(a) {
            return a.target
        }

        function uc(a, b, c, d) {
            var e = Math.cos(b),
                f = Math.sin(b),
                g = Math.cos(d),
                h = Math.sin(d),
                i = e * Math.cos(a),
                j = e * Math.sin(a),
                k = g * Math.cos(c),
                l = g * Math.sin(c),
                m = 2 * Math.asin(Math.sqrt(fa(d - b) + e * g * fa(c - a))),
                n = 1 / Math.sin(m),
                o = m ? function(a) {
                    var b = Math.sin(a *= m) * n,
                        c = Math.sin(m - a) * n,
                        d = c * i + b * k,
                        e = c * j + b * l,
                        g = c * f + b * h;
                    return [Math.atan2(e, d) * Og, Math.atan2(g, Math.sqrt(d * d + e * e)) * Og]
                } : function() {
                    return [a * Og, b * Og]
                };
            return o.distance = m, o
        }

        function vc() {
            function a(a, e) {
                var f = Math.sin(e *= Ng),
                    g = Math.cos(e),
                    h = rg((a *= Ng) - b),
                    i = Math.cos(h);
                Sh += Math.atan2(Math.sqrt((h = g * Math.sin(h)) * h + (h = d * f - c * g * i) * h), c * f + d * g * i), b = a, c = f, d = g
            }
            var b, c, d;
            Th.point = function(e, f) {
                b = e * Ng, c = Math.sin(f *= Ng), d = Math.cos(f), Th.point = a
            }, Th.lineEnd = function() {
                Th.point = Th.lineEnd = v
            }
        }

        function wc(a, b) {
            function c(b, c) {
                var d = Math.cos(b),
                    e = Math.cos(c),
                    f = a(d * e);
                return [f * e * Math.sin(b), f * Math.sin(c)]
            }
            return c.invert = function(a, c) {
                var d = Math.sqrt(a * a + c * c),
                    e = b(d),
                    f = Math.sin(e),
                    g = Math.cos(e);
                return [Math.atan2(a * f, d * g), Math.asin(d && c * f / d)]
            }, c
        }

        function xc(a, b) {
            function c(a, b) {
                g > 0 ? b < -Mg + Hg && (b = -Mg + Hg) : b > Mg - Hg && (b = Mg - Hg);
                var c = g / Math.pow(e(b), f);
                return [c * Math.sin(f * a), g - c * Math.cos(f * a)]
            }
            var d = Math.cos(a),
                e = function(a) {
                    return Math.tan(Jg / 4 + a / 2)
                },
                f = a === b ? Math.sin(a) : Math.log(d / Math.cos(b)) / Math.log(e(b) / e(a)),
                g = d * Math.pow(e(a), f) / f;
            return f ? (c.invert = function(a, b) {
                var c = g - b,
                    d = $(f) * Math.sqrt(a * a + c * c);
                return [Math.atan2(a, c) / f, 2 * Math.atan(Math.pow(g / d, 1 / f)) - Mg]
            }, c) : zc
        }

        function yc(a, b) {
            function c(a, b) {
                var c = f - b;
                return [c * Math.sin(e * a), f - c * Math.cos(e * a)]
            }
            var d = Math.cos(a),
                e = a === b ? Math.sin(a) : (d - Math.cos(b)) / (b - a),
                f = d / e + a;
            return rg(e) < Hg ? ic : (c.invert = function(a, b) {
                var c = f - b;
                return [Math.atan2(a, c) / e, f - $(e) * Math.sqrt(a * a + c * c)]
            }, c)
        }

        function zc(a, b) {
            return [a, Math.log(Math.tan(Jg / 4 + b / 2))]
        }

        function Ac(a) {
            var b, c = fc(a),
                d = c.scale,
                e = c.translate,
                f = c.clipExtent;
            return c.scale = function() {
                var a = d.apply(c, arguments);
                return a === c ? b ? c.clipExtent(null) : c : a
            }, c.translate = function() {
                var a = e.apply(c, arguments);
                return a === c ? b ? c.clipExtent(null) : c : a
            }, c.clipExtent = function(a) {
                var g = f.apply(c, arguments);
                if (g === c) {
                    if (b = null == a) {
                        var h = Jg * d(),
                            i = e();
                        f([
                            [i[0] - h, i[1] - h],
                            [i[0] + h, i[1] + h]
                        ])
                    }
                } else b && (g = null);
                return g
            }, c.clipExtent(null)
        }

        function Bc(a, b) {
            return [Math.log(Math.tan(Jg / 4 + b / 2)), -a]
        }

        function Cc(a) {
            return a[0]
        }

        function Dc(a) {
            return a[1]
        }

        function Ec(a) {
            for (var b = a.length, c = [0, 1], d = 2, e = 2; e < b; e++) {
                for (; d > 1 && _(a[c[d - 2]], a[c[d - 1]], a[e]) <= 0;) --d;
                c[d++] = e
            }
            return c.slice(0, d)
        }

        function Fc(a, b) {
            return a[0] - b[0] || a[1] - b[1]
        }

        function Gc(a, b, c) {
            return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
        }

        function Hc(a, b, c, d) {
            var e = a[0],
                f = c[0],
                g = b[0] - e,
                h = d[0] - f,
                i = a[1],
                j = c[1],
                k = b[1] - i,
                l = d[1] - j,
                m = (h * (i - j) - l * (e - f)) / (l * g - h * k);
            return [e + m * g, i + m * k]
        }

        function Ic(a) {
            var b = a[0],
                c = a[a.length - 1];
            return !(b[0] - c[0] || b[1] - c[1])
        }

        function Jc() {
            cd(this), this.edge = this.site = this.circle = null
        }

        function Kc(a) {
            var b = di.pop() || new Jc;
            return b.site = a, b
        }

        function Lc(a) {
            Vc(a), ai.remove(a), di.push(a), cd(a)
        }

        function Mc(a) {
            var b = a.circle,
                c = b.x,
                d = b.cy,
                e = {
                    x: c,
                    y: d
                },
                f = a.P,
                g = a.N,
                h = [a];
            Lc(a);
            for (var i = f; i.circle && rg(c - i.circle.x) < Hg && rg(d - i.circle.cy) < Hg;) f = i.P, h.unshift(i), Lc(i), i = f;
            h.unshift(i), Vc(i);
            for (var j = g; j.circle && rg(c - j.circle.x) < Hg && rg(d - j.circle.cy) < Hg;) g = j.N, h.push(j), Lc(j), j = g;
            h.push(j), Vc(j);
            var k, l = h.length;
            for (k = 1; k < l; ++k) j = h[k], i = h[k - 1], _c(j.edge, i.site, j.site, e);
            i = h[0], j = h[l - 1], j.edge = Zc(i.site, j.site, null, e), Uc(i), Uc(j)
        }

        function Nc(a) {
            for (var b, c, d, e, f = a.x, g = a.y, h = ai._; h;)
                if ((d = Oc(h, g) - f) > Hg) h = h.L;
                else {
                    if (!((e = f - Pc(h, g)) > Hg)) {
                        d > -Hg ? (b = h.P, c = h) : e > -Hg ? (b = h, c = h.N) : b = c = h;
                        break
                    }
                    if (!h.R) {
                        b = h;
                        break
                    }
                    h = h.R
                }
            var i = Kc(a);
            if (ai.insert(b, i), b || c) {
                if (b === c) return Vc(b), c = Kc(b.site), ai.insert(i, c), i.edge = c.edge = Zc(b.site, i.site), Uc(b), void Uc(c);
                if (!c) return void(i.edge = Zc(b.site, i.site));
                Vc(b), Vc(c);
                var j = b.site,
                    k = j.x,
                    l = j.y,
                    m = a.x - k,
                    n = a.y - l,
                    o = c.site,
                    p = o.x - k,
                    q = o.y - l,
                    r = 2 * (m * q - n * p),
                    s = m * m + n * n,
                    t = p * p + q * q,
                    u = {
                        x: (q * s - n * t) / r + k,
                        y: (m * t - p * s) / r + l
                    };
                _c(c.edge, j, o, u), i.edge = Zc(j, a, null, u), c.edge = Zc(a, o, null, u), Uc(b), Uc(c)
            }
        }

        function Oc(a, b) {
            var c = a.site,
                d = c.x,
                e = c.y,
                f = e - b;
            if (!f) return d;
            var g = a.P;
            if (!g) return -1 / 0;
            c = g.site;
            var h = c.x,
                i = c.y,
                j = i - b;
            if (!j) return h;
            var k = h - d,
                l = 1 / f - 1 / j,
                m = k / j;
            return l ? (-m + Math.sqrt(m * m - 2 * l * (k * k / (-2 * j) - i + j / 2 + e - f / 2))) / l + d : (d + h) / 2
        }

        function Pc(a, b) {
            var c = a.N;
            if (c) return Oc(c, b);
            var d = a.site;
            return d.y === b ? d.x : 1 / 0
        }

        function Qc(a) {
            this.site = a, this.edges = []
        }

        function Rc(a) {
            for (var b, c, d, e, f, g, h, i, j, k, l = a[0][0], m = a[1][0], n = a[0][1], o = a[1][1], p = _h, q = p.length; q--;)
                if ((f = p[q]) && f.prepare())
                    for (h = f.edges, i = h.length, g = 0; g < i;) k = h[g].end(), d = k.x, e = k.y, j = h[++g % i].start(), b = j.x, c = j.y, (rg(d - b) > Hg || rg(e - c) > Hg) && (h.splice(g, 0, new ad($c(f.site, k, rg(d - l) < Hg && o - e > Hg ? {
                        x: l,
                        y: rg(b - l) < Hg ? c : o
                    } : rg(e - o) < Hg && m - d > Hg ? {
                        x: rg(c - o) < Hg ? b : m,
                        y: o
                    } : rg(d - m) < Hg && e - n > Hg ? {
                        x: m,
                        y: rg(b - m) < Hg ? c : n
                    } : rg(e - n) < Hg && d - l > Hg ? {
                        x: rg(c - n) < Hg ? b : l,
                        y: n
                    } : null), f.site, null)), ++i)
        }

        function Sc(a, b) {
            return b.angle - a.angle
        }

        function Tc() {
            cd(this), this.x = this.y = this.arc = this.site = this.cy = null
        }

        function Uc(a) {
            var b = a.P,
                c = a.N;
            if (b && c) {
                var d = b.site,
                    e = a.site,
                    f = c.site;
                if (d !== f) {
                    var g = e.x,
                        h = e.y,
                        i = d.x - g,
                        j = d.y - h,
                        k = f.x - g,
                        l = f.y - h,
                        m = 2 * (i * l - j * k);
                    if (!(m >= -Ig)) {
                        var n = i * i + j * j,
                            o = k * k + l * l,
                            p = (l * n - j * o) / m,
                            q = (i * o - k * n) / m,
                            l = q + h,
                            r = ei.pop() || new Tc;
                        r.arc = a, r.site = e, r.x = p + g, r.y = l + Math.sqrt(p * p + q * q), r.cy = l, a.circle = r;
                        for (var s = null, t = ci._; t;)
                            if (r.y < t.y || r.y === t.y && r.x <= t.x) {
                                if (!t.L) {
                                    s = t.P;
                                    break
                                }
                                t = t.L
                            } else {
                                if (!t.R) {
                                    s = t;
                                    break
                                }
                                t = t.R
                            }
                        ci.insert(s, r), s || (bi = r)
                    }
                }
            }
        }

        function Vc(a) {
            var b = a.circle;
            b && (b.P || (bi = b.N), ci.remove(b), ei.push(b), cd(b), a.circle = null)
        }

        function Wc(a) {
            for (var b, c = $h, d = Qb(a[0][0], a[0][1], a[1][0], a[1][1]), e = c.length; e--;) b = c[e], (!Xc(b, a) || !d(b) || rg(b.a.x - b.b.x) < Hg && rg(b.a.y - b.b.y) < Hg) && (b.a = b.b = null, c.splice(e, 1))
        }

        function Xc(a, b) {
            var c = a.b;
            if (c) return !0;
            var d, e, f = a.a,
                g = b[0][0],
                h = b[1][0],
                i = b[0][1],
                j = b[1][1],
                k = a.l,
                l = a.r,
                m = k.x,
                n = k.y,
                o = l.x,
                p = l.y,
                q = (m + o) / 2,
                r = (n + p) / 2;
            if (p === n) {
                if (q < g || q >= h) return;
                if (m > o) {
                    if (f) {
                        if (f.y >= j) return
                    } else f = {
                        x: q,
                        y: i
                    };
                    c = {
                        x: q,
                        y: j
                    }
                } else {
                    if (f) {
                        if (f.y < i) return
                    } else f = {
                        x: q,
                        y: j
                    };
                    c = {
                        x: q,
                        y: i
                    }
                }
            } else if (d = (m - o) / (p - n), e = r - d * q, d < -1 || d > 1)
                if (m > o) {
                    if (f) {
                        if (f.y >= j) return
                    } else f = {
                        x: (i - e) / d,
                        y: i
                    };
                    c = {
                        x: (j - e) / d,
                        y: j
                    }
                } else {
                    if (f) {
                        if (f.y < i) return
                    } else f = {
                        x: (j - e) / d,
                        y: j
                    };
                    c = {
                        x: (i - e) / d,
                        y: i
                    }
                } else if (n < p) {
                if (f) {
                    if (f.x >= h) return
                } else f = {
                    x: g,
                    y: d * g + e
                };
                c = {
                    x: h,
                    y: d * h + e
                }
            } else {
                if (f) {
                    if (f.x < g) return
                } else f = {
                    x: h,
                    y: d * h + e
                };
                c = {
                    x: g,
                    y: d * g + e
                }
            }
            return a.a = f, a.b = c, !0
        }

        function Yc(a, b) {
            this.l = a, this.r = b, this.a = this.b = null
        }

        function Zc(a, b, c, d) {
            var e = new Yc(a, b);
            return $h.push(e), c && _c(e, a, b, c), d && _c(e, b, a, d), _h[a.i].edges.push(new ad(e, a, b)), _h[b.i].edges.push(new ad(e, b, a)), e
        }

        function $c(a, b, c) {
            var d = new Yc(a, null);
            return d.a = b, d.b = c, $h.push(d), d
        }

        function _c(a, b, c, d) {
            a.a || a.b ? a.l === c ? a.b = d : a.a = d : (a.a = d, a.l = b, a.r = c)
        }

        function ad(a, b, c) {
            var d = a.a,
                e = a.b;
            this.edge = a, this.site = b, this.angle = c ? Math.atan2(c.y - b.y, c.x - b.x) : a.l === b ? Math.atan2(e.x - d.x, d.y - e.y) : Math.atan2(d.x - e.x, e.y - d.y)
        }

        function bd() {
            this._ = null
        }

        function cd(a) {
            a.U = a.C = a.L = a.R = a.P = a.N = null
        }

        function dd(a, b) {
            var c = b,
                d = b.R,
                e = c.U;
            e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.R = d.L, c.R && (c.R.U = c), d.L = c
        }

        function ed(a, b) {
            var c = b,
                d = b.L,
                e = c.U;
            e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.L = d.R, c.L && (c.L.U = c), d.R = c
        }

        function fd(a) {
            for (; a.L;) a = a.L;
            return a
        }

        function gd(a, b) {
            var c, d, e, f = a.sort(hd).pop();
            for ($h = [], _h = new Array(a.length), ai = new bd, ci = new bd;;)
                if (e = bi, f && (!e || f.y < e.y || f.y === e.y && f.x < e.x)) f.x === c && f.y === d || (_h[f.i] = new Qc(f), Nc(f), c = f.x, d = f.y), f = a.pop();
                else {
                    if (!e) break;
                    Mc(e.arc)
                }
            b && (Wc(b), Rc(b));
            var g = {
                cells: _h,
                edges: $h
            };
            return ai = ci = $h = _h = null, g
        }

        function hd(a, b) {
            return b.y - a.y || b.x - a.x
        }

        function id(a, b, c) {
            return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y)
        }

        function jd(a) {
            return a.x
        }

        function kd(a) {
            return a.y
        }

        function ld() {
            return {
                leaf: !0,
                nodes: [],
                point: null,
                x: null,
                y: null
            }
        }

        function md(a, b, c, d, e, f) {
            if (!a(b, c, d, e, f)) {
                var g = .5 * (c + e),
                    h = .5 * (d + f),
                    i = b.nodes;
                i[0] && md(a, i[0], c, d, g, h), i[1] && md(a, i[1], g, d, e, h), i[2] && md(a, i[2], c, h, g, f), i[3] && md(a, i[3], g, h, e, f)
            }
        }

        function nd(a, b, c, d, e, f, g) {
            var h, i = 1 / 0;
            return function a(j, k, l, m, n) {
                if (!(k > f || l > g || m < d || n < e)) {
                    if (o = j.point) {
                        var o, p = b - j.x,
                            q = c - j.y,
                            r = p * p + q * q;
                        if (r < i) {
                            var s = Math.sqrt(i = r);
                            d = b - s, e = c - s, f = b + s, g = c + s, h = o
                        }
                    }
                    for (var t = j.nodes, u = .5 * (k + m), v = .5 * (l + n), w = b >= u, x = c >= v, y = x << 1 | w, z = y + 4; y < z; ++y)
                        if (j = t[3 & y]) switch (3 & y) {
                            case 0:
                                a(j, k, l, u, v);
                                break;
                            case 1:
                                a(j, u, l, m, v);
                                break;
                            case 2:
                                a(j, k, v, u, n);
                                break;
                            case 3:
                                a(j, u, v, m, n)
                        }
                }
            }(a, d, e, f, g), h
        }

        function od(a, b) {
            a = hg.rgb(a), b = hg.rgb(b);
            var c = a.r,
                d = a.g,
                e = a.b,
                f = b.r - c,
                g = b.g - d,
                h = b.b - e;
            return function(a) {
                return "#" + ua(Math.round(c + f * a)) + ua(Math.round(d + g * a)) + ua(Math.round(e + h * a))
            }
        }

        function pd(a, b) {
            var c, d = {},
                e = {};
            for (c in a) c in b ? d[c] = sd(a[c], b[c]) : e[c] = a[c];
            for (c in b) c in a || (e[c] = b[c]);
            return function(a) {
                for (c in d) e[c] = d[c](a);
                return e
            }
        }

        function qd(a, b) {
            return a = +a, b = +b,
                function(c) {
                    return a * (1 - c) + b * c
                }
        }

        function rd(a, b) {
            var c, d, e, f = gi.lastIndex = hi.lastIndex = 0,
                g = -1,
                h = [],
                i = [];
            for (a += "", b += "";
                (c = gi.exec(a)) && (d = hi.exec(b));)(e = d.index) > f && (e = b.slice(f, e), h[g] ? h[g] += e : h[++g] = e), (c = c[0]) === (d = d[0]) ? h[g] ? h[g] += d : h[++g] = d : (h[++g] = null, i.push({
                i: g,
                x: qd(c, d)
            })), f = hi.lastIndex;
            return f < b.length && (e = b.slice(f), h[g] ? h[g] += e : h[++g] = e), h.length < 2 ? i[0] ? (b = i[0].x, function(a) {
                return b(a) + ""
            }) : function() {
                return b
            } : (b = i.length, function(a) {
                for (var c, d = 0; d < b; ++d) h[(c = i[d]).i] = c.x(a);
                return h.join("")
            })
        }

        function sd(a, b) {
            for (var c, d = hg.interpolators.length; --d >= 0 && !(c = hg.interpolators[d](a, b)););
            return c
        }

        function td(a, b) {
            var c, d = [],
                e = [],
                f = a.length,
                g = b.length,
                h = Math.min(a.length, b.length);
            for (c = 0; c < h; ++c) d.push(sd(a[c], b[c]));
            for (; c < f; ++c) e[c] = a[c];
            for (; c < g; ++c) e[c] = b[c];
            return function(a) {
                for (c = 0; c < h; ++c) e[c] = d[c](a);
                return e
            }
        }

        function ud(a) {
            return function(b) {
                return b <= 0 ? 0 : b >= 1 ? 1 : a(b)
            }
        }

        function vd(a) {
            return function(b) {
                return 1 - a(1 - b)
            }
        }

        function wd(a) {
            return function(b) {
                return .5 * (b < .5 ? a(2 * b) : 2 - a(2 - 2 * b))
            }
        }

        function xd(a) {
            return a * a
        }

        function yd(a) {
            return a * a * a
        }

        function zd(a) {
            if (a <= 0) return 0;
            if (a >= 1) return 1;
            var b = a * a,
                c = b * a;
            return 4 * (a < .5 ? c : 3 * (a - b) + c - .75)
        }

        function Ad(a) {
            return function(b) {
                return Math.pow(b, a)
            }
        }

        function Bd(a) {
            return 1 - Math.cos(a * Mg)
        }

        function Cd(a) {
            return Math.pow(2, 10 * (a - 1))
        }

        function Dd(a) {
            return 1 - Math.sqrt(1 - a * a)
        }

        function Ed(a, b) {
            var c;
            return arguments.length < 2 && (b = .45), arguments.length ? c = b / Kg * Math.asin(1 / a) : (a = 1, c = b / 4),
                function(d) {
                    return 1 + a * Math.pow(2, -10 * d) * Math.sin((d - c) * Kg / b)
                }
        }

        function Fd(a) {
            return a || (a = 1.70158),
                function(b) {
                    return b * b * ((a + 1) * b - a)
                }
        }

        function Gd(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }

        function Hd(a, b) {
            a = hg.hcl(a), b = hg.hcl(b);
            var c = a.h,
                d = a.c,
                e = a.l,
                f = b.h - c,
                g = b.c - d,
                h = b.l - e;
            return isNaN(g) && (g = 0, d = isNaN(d) ? b.c : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : f < -180 && (f += 360),
                function(a) {
                    return ka(c + f * a, d + g * a, e + h * a) + ""
                }
        }

        function Id(a, b) {
            a = hg.hsl(a), b = hg.hsl(b);
            var c = a.h,
                d = a.s,
                e = a.l,
                f = b.h - c,
                g = b.s - d,
                h = b.l - e;
            return isNaN(g) && (g = 0, d = isNaN(d) ? b.s : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : f < -180 && (f += 360),
                function(a) {
                    return ia(c + f * a, d + g * a, e + h * a) + ""
                }
        }

        function Jd(a, b) {
            a = hg.lab(a), b = hg.lab(b);
            var c = a.l,
                d = a.a,
                e = a.b,
                f = b.l - c,
                g = b.a - d,
                h = b.b - e;
            return function(a) {
                return ma(c + f * a, d + g * a, e + h * a) + ""
            }
        }

        function Kd(a, b) {
            return b -= a,
                function(c) {
                    return Math.round(a + b * c)
                }
        }

        function Ld(a) {
            var b = [a.a, a.b],
                c = [a.c, a.d],
                d = Nd(b),
                e = Md(b, c),
                f = Nd(Od(c, b, -e)) || 0;
            b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1), this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * Og, this.translate = [a.e, a.f], this.scale = [d, f], this.skew = f ? Math.atan2(e, f) * Og : 0
        }

        function Md(a, b) {
            return a[0] * b[0] + a[1] * b[1]
        }

        function Nd(a) {
            var b = Math.sqrt(Md(a, a));
            return b && (a[0] /= b, a[1] /= b), b
        }

        function Od(a, b, c) {
            return a[0] += c * b[0], a[1] += c * b[1], a
        }

        function Pd(a) {
            return a.length ? a.pop() + "," : ""
        }

        function Qd(a, b, c, d) {
            if (a[0] !== b[0] || a[1] !== b[1]) {
                var e = c.push("translate(", null, ",", null, ")");
                d.push({
                    i: e - 4,
                    x: qd(a[0], b[0])
                }, {
                    i: e - 2,
                    x: qd(a[1], b[1])
                })
            } else(b[0] || b[1]) && c.push("translate(" + b + ")")
        }

        function Rd(a, b, c, d) {
            a !== b ? (a - b > 180 ? b += 360 : b - a > 180 && (a += 360), d.push({
                i: c.push(Pd(c) + "rotate(", null, ")") - 2,
                x: qd(a, b)
            })) : b && c.push(Pd(c) + "rotate(" + b + ")")
        }

        function Sd(a, b, c, d) {
            a !== b ? d.push({
                i: c.push(Pd(c) + "skewX(", null, ")") - 2,
                x: qd(a, b)
            }) : b && c.push(Pd(c) + "skewX(" + b + ")")
        }

        function Td(a, b, c, d) {
            if (a[0] !== b[0] || a[1] !== b[1]) {
                var e = c.push(Pd(c) + "scale(", null, ",", null, ")");
                d.push({
                    i: e - 4,
                    x: qd(a[0], b[0])
                }, {
                    i: e - 2,
                    x: qd(a[1], b[1])
                })
            } else 1 === b[0] && 1 === b[1] || c.push(Pd(c) + "scale(" + b + ")")
        }

        function Ud(a, b) {
            var c = [],
                d = [];
            return a = hg.transform(a), b = hg.transform(b), Qd(a.translate, b.translate, c, d), Rd(a.rotate, b.rotate, c, d), Sd(a.skew, b.skew, c, d), Td(a.scale, b.scale, c, d), a = b = null,
                function(a) {
                    for (var b, e = -1, f = d.length; ++e < f;) c[(b = d[e]).i] = b.x(a);
                    return c.join("")
                }
        }

        function Vd(a, b) {
            return b = (b -= a = +a) || 1 / b,
                function(c) {
                    return (c - a) / b
                }
        }

        function Wd(a, b) {
            return b = (b -= a = +a) || 1 / b,
                function(c) {
                    return Math.max(0, Math.min(1, (c - a) / b))
                }
        }

        function Xd(a) {
            for (var b = a.source, c = a.target, d = Zd(b, c), e = [b]; b !== d;) b = b.parent, e.push(b);
            for (var f = e.length; c !== d;) e.splice(f, 0, c), c = c.parent;
            return e
        }

        function Yd(a) {
            for (var b = [], c = a.parent; null != c;) b.push(a), a = c, c = c.parent;
            return b.push(a), b
        }

        function Zd(a, b) {
            if (a === b) return a;
            for (var c = Yd(a), d = Yd(b), e = c.pop(), f = d.pop(), g = null; e === f;) g = e, e = c.pop(), f = d.pop();
            return g
        }

        function $d(a) {
            a.fixed |= 2
        }

        function _d(a) {
            a.fixed &= -7
        }

        function ae(a) {
            a.fixed |= 4, a.px = a.x, a.py = a.y
        }

        function be(a) {
            a.fixed &= -5
        }

        function ce(a, b, c) {
            var d = 0,
                e = 0;
            if (a.charge = 0, !a.leaf)
                for (var f, g = a.nodes, h = g.length, i = -1; ++i < h;) null != (f = g[i]) && (ce(f, b, c), a.charge += f.charge, d += f.charge * f.cx, e += f.charge * f.cy);
            if (a.point) {
                a.leaf || (a.point.x += Math.random() - .5, a.point.y += Math.random() - .5);
                var j = b * c[a.point.index];
                a.charge += a.pointCharge = j, d += j * a.point.x, e += j * a.point.y
            }
            a.cx = d / a.charge, a.cy = e / a.charge
        }

        function de(a, b) {
            return hg.rebind(a, b, "sort", "children", "value"), a.nodes = a, a.links = je, a
        }

        function ee(a, b) {
            for (var c = [a]; null != (a = c.pop());)
                if (b(a), (e = a.children) && (d = e.length))
                    for (var d, e; --d >= 0;) c.push(e[d])
        }

        function fe(a, b) {
            for (var c = [a], d = []; null != (a = c.pop());)
                if (d.push(a), (f = a.children) && (e = f.length))
                    for (var e, f, g = -1; ++g < e;) c.push(f[g]);
            for (; null != (a = d.pop());) b(a)
        }

        function ge(a) {
            return a.children
        }

        function he(a) {
            return a.value
        }

        function ie(a, b) {
            return b.value - a.value
        }

        function je(a) {
            return hg.merge(a.map(function(a) {
                return (a.children || []).map(function(b) {
                    return {
                        source: a,
                        target: b
                    }
                })
            }))
        }

        function ke(a) {
            return a.x
        }

        function le(a) {
            return a.y
        }

        function me(a, b, c) {
            a.y0 = b, a.y = c
        }

        function ne(a) {
            return hg.range(a.length)
        }

        function oe(a) {
            for (var b = -1, c = a[0].length, d = []; ++b < c;) d[b] = 0;
            return d
        }

        function pe(a) {
            for (var b, c = 1, d = 0, e = a[0][1], f = a.length; c < f; ++c)(b = a[c][1]) > e && (d = c, e = b);
            return d
        }

        function qe(a) {
            return a.reduce(re, 0)
        }

        function re(a, b) {
            return a + b[1]
        }

        function se(a, b) {
            return te(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1))
        }

        function te(a, b) {
            for (var c = -1, d = +a[0], e = (a[1] - d) / b, f = []; ++c <= b;) f[c] = e * c + d;
            return f
        }

        function ue(a) {
            return [hg.min(a), hg.max(a)]
        }

        function ve(a, b) {
            return a.value - b.value
        }

        function we(a, b) {
            var c = a._pack_next;
            a._pack_next = b, b._pack_prev = a, b._pack_next = c, c._pack_prev = b
        }

        function xe(a, b) {
            a._pack_next = b, b._pack_prev = a
        }

        function ye(a, b) {
            var c = b.x - a.x,
                d = b.y - a.y,
                e = a.r + b.r;
            return .999 * e * e > c * c + d * d
        }

        function ze(a) {
            function b(a) {
                k = Math.min(a.x - a.r, k), l = Math.max(a.x + a.r, l), m = Math.min(a.y - a.r, m), n = Math.max(a.y + a.r, n)
            }
            if ((c = a.children) && (j = c.length)) {
                var c, d, e, f, g, h, i, j, k = 1 / 0,
                    l = -1 / 0,
                    m = 1 / 0,
                    n = -1 / 0;
                if (c.forEach(Ae), d = c[0], d.x = -d.r, d.y = 0, b(d), j > 1 && (e = c[1], e.x = e.r, e.y = 0, b(e), j > 2))
                    for (f = c[2], De(d, e, f), b(f), we(d, f), d._pack_prev = f, we(f, e), e = d._pack_next, g = 3; g < j; g++) {
                        De(d, e, f = c[g]);
                        var o = 0,
                            p = 1,
                            q = 1;
                        for (h = e._pack_next; h !== e; h = h._pack_next, p++)
                            if (ye(h, f)) {
                                o = 1;
                                break
                            }
                        if (1 == o)
                            for (i = d._pack_prev; i !== h._pack_prev && !ye(i, f); i = i._pack_prev, q++);
                        o ? (p < q || p == q && e.r < d.r ? xe(d, e = h) : xe(d = i, e), g--) : (we(d, f), e = f, b(f))
                    }
                var r = (k + l) / 2,
                    s = (m + n) / 2,
                    t = 0;
                for (g = 0; g < j; g++) f = c[g], f.x -= r, f.y -= s, t = Math.max(t, f.r + Math.sqrt(f.x * f.x + f.y * f.y));
                a.r = t, c.forEach(Be)
            }
        }

        function Ae(a) {
            a._pack_next = a._pack_prev = a
        }

        function Be(a) {
            delete a._pack_next, delete a._pack_prev
        }

        function Ce(a, b, c, d) {
            var e = a.children;
            if (a.x = b += d * a.x, a.y = c += d * a.y, a.r *= d, e)
                for (var f = -1, g = e.length; ++f < g;) Ce(e[f], b, c, d)
        }

        function De(a, b, c) {
            var d = a.r + c.r,
                e = b.x - a.x,
                f = b.y - a.y;
            if (d && (e || f)) {
                var g = b.r + c.r,
                    h = e * e + f * f;
                g *= g, d *= d;
                var i = .5 + (d - g) / (2 * h),
                    j = Math.sqrt(Math.max(0, 2 * g * (d + h) - (d -= h) * d - g * g)) / (2 * h);
                c.x = a.x + i * e + j * f, c.y = a.y + i * f - j * e
            } else c.x = a.x + d, c.y = a.y
        }

        function Ee(a, b) {
            return a.parent == b.parent ? 1 : 2
        }

        function Fe(a) {
            var b = a.children;
            return b.length ? b[0] : a.t
        }

        function Ge(a) {
            var b, c = a.children;
            return (b = c.length) ? c[b - 1] : a.t
        }

        function He(a, b, c) {
            var d = c / (b.i - a.i);
            b.c -= d, b.s += c, a.c += d, b.z += c, b.m += c
        }

        function Ie(a) {
            for (var b, c = 0, d = 0, e = a.children, f = e.length; --f >= 0;) b = e[f], b.z += c, b.m += c, c += b.s + (d += b.c)
        }

        function Je(a, b, c) {
            return a.a.parent === b.parent ? a.a : c
        }

        function Ke(a) {
            return 1 + hg.max(a, function(a) {
                return a.y
            })
        }

        function Le(a) {
            return a.reduce(function(a, b) {
                return a + b.x
            }, 0) / a.length
        }

        function Me(a) {
            var b = a.children;
            return b && b.length ? Me(b[0]) : a
        }

        function Ne(a) {
            var b, c = a.children;
            return c && (b = c.length) ? Ne(c[b - 1]) : a
        }

        function Oe(a) {
            return {
                x: a.x,
                y: a.y,
                dx: a.dx,
                dy: a.dy
            }
        }

        function Pe(a, b) {
            var c = a.x + b[3],
                d = a.y + b[0],
                e = a.dx - b[1] - b[3],
                f = a.dy - b[0] - b[2];
            return e < 0 && (c += e / 2, e = 0), f < 0 && (d += f / 2, f = 0), {
                x: c,
                y: d,
                dx: e,
                dy: f
            }
        }

        function Qe(a) {
            var b = a[0],
                c = a[a.length - 1];
            return b < c ? [b, c] : [c, b]
        }

        function Re(a) {
            return a.rangeExtent ? a.rangeExtent() : Qe(a.range())
        }

        function Se(a, b, c, d) {
            var e = c(a[0], a[1]),
                f = d(b[0], b[1]);
            return function(a) {
                return f(e(a))
            }
        }

        function Te(a, b) {
            var c, d = 0,
                e = a.length - 1,
                f = a[d],
                g = a[e];
            return g < f && (c = d, d = e, e = c, c = f, f = g, g = c), a[d] = b.floor(f), a[e] = b.ceil(g), a
        }

        function Ue(a) {
            return a ? {
                floor: function(b) {
                    return Math.floor(b / a) * a
                },
                ceil: function(b) {
                    return Math.ceil(b / a) * a
                }
            } : si
        }

        function Ve(a, b, c, d) {
            var e = [],
                f = [],
                g = 0,
                h = Math.min(a.length, b.length) - 1;
            for (a[h] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse()); ++g <= h;) e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
            return function(b) {
                var c = hg.bisect(a, b, 1, h) - 1;
                return f[c](e[c](b))
            }
        }

        function We(a, b, c, d) {
            function e() {
                var e = Math.min(a.length, b.length) > 2 ? Ve : Se,
                    i = d ? Wd : Vd;
                return g = e(a, b, i, c), h = e(b, a, i, sd), f
            }

            function f(a) {
                return g(a)
            }
            var g, h;
            return f.invert = function(a) {
                return h(a)
            }, f.domain = function(b) {
                return arguments.length ? (a = b.map(Number), e()) : a
            }, f.range = function(a) {
                return arguments.length ? (b = a, e()) : b
            }, f.rangeRound = function(a) {
                return f.range(a).interpolate(Kd)
            }, f.clamp = function(a) {
                return arguments.length ? (d = a, e()) : d
            }, f.interpolate = function(a) {
                return arguments.length ? (c = a, e()) : c
            }, f.ticks = function(b) {
                return $e(a, b)
            }, f.tickFormat = function(b, c) {
                return _e(a, b, c)
            }, f.nice = function(b) {
                return Ye(a, b), e()
            }, f.copy = function() {
                return We(a, b, c, d)
            }, e()
        }

        function Xe(a, b) {
            return hg.rebind(a, b, "range", "rangeRound", "interpolate", "clamp")
        }

        function Ye(a, b) {
            return Te(a, Ue(Ze(a, b)[2]))
        }

        function Ze(a, b) {
            null == b && (b = 10);
            var c = Qe(a),
                d = c[1] - c[0],
                e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)),
                f = b / d * e;
            return f <= .15 ? e *= 10 : f <= .35 ? e *= 5 : f <= .75 && (e *= 2), c[0] = Math.ceil(c[0] / e) * e, c[1] = Math.floor(c[1] / e) * e + .5 * e, c[2] = e, c
        }

        function $e(a, b) {
            return hg.range.apply(hg, Ze(a, b))
        }

        function _e(a, b, c) {
            var d = Ze(a, b);
            if (c) {
                var e = gh.exec(c);
                if (e.shift(), "s" === e[8]) {
                    var f = hg.formatPrefix(Math.max(rg(d[0]), rg(d[1])));
                    return e[7] || (e[7] = "." + af(f.scale(d[2]))), e[8] = "f", c = hg.format(e.join("")),
                        function(a) {
                            return c(f.scale(a)) + f.symbol
                        }
                }
                e[7] || (e[7] = "." + bf(e[8], d)), c = e.join("")
            } else c = ",." + af(d[2]) + "f";
            return hg.format(c)
        }

        function af(a) {
            return -Math.floor(Math.log(a) / Math.LN10 + .01)
        }

        function bf(a, b) {
            var c = af(b[2]);
            return a in ti ? Math.abs(c - af(Math.max(rg(b[0]), rg(b[1])))) + +("e" !== a) : c - 2 * ("%" === a)
        }

        function cf(a, b, c, d) {
            function e(a) {
                return (c ? Math.log(a < 0 ? 0 : a) : -Math.log(a > 0 ? 0 : -a)) / Math.log(b)
            }

            function f(a) {
                return c ? Math.pow(b, a) : -Math.pow(b, -a)
            }

            function g(b) {
                return a(e(b))
            }
            return g.invert = function(b) {
                return f(a.invert(b))
            }, g.domain = function(b) {
                return arguments.length ? (c = b[0] >= 0, a.domain((d = b.map(Number)).map(e)), g) : d
            }, g.base = function(c) {
                return arguments.length ? (b = +c, a.domain(d.map(e)), g) : b
            }, g.nice = function() {
                var b = Te(d.map(e), c ? Math : vi);
                return a.domain(b), d = b.map(f), g
            }, g.ticks = function() {
                var a = Qe(d),
                    g = [],
                    h = a[0],
                    i = a[1],
                    j = Math.floor(e(h)),
                    k = Math.ceil(e(i)),
                    l = b % 1 ? 2 : b;
                if (isFinite(k - j)) {
                    if (c) {
                        for (; j < k; j++)
                            for (var m = 1; m < l; m++) g.push(f(j) * m);
                        g.push(f(j))
                    } else
                        for (g.push(f(j)); j++ < k;)
                            for (var m = l - 1; m > 0; m--) g.push(f(j) * m);
                    for (j = 0; g[j] < h; j++);
                    for (k = g.length; g[k - 1] > i; k--);
                    g = g.slice(j, k)
                }
                return g
            }, g.tickFormat = function(a, b) {
                if (!arguments.length) return ui;
                arguments.length < 2 ? b = ui : "function" != typeof b && (b = hg.format(b));
                var d, h = Math.max(.1, a / g.ticks().length),
                    i = c ? (d = 1e-12, Math.ceil) : (d = -1e-12, Math.floor);
                return function(a) {
                    return a / f(i(e(a) + d)) <= h ? b(a) : ""
                }
            }, g.copy = function() {
                return cf(a.copy(), b, c, d)
            }, Xe(g, a)
        }

        function df(a, b, c) {
            function d(b) {
                return a(e(b))
            }
            var e = ef(b),
                f = ef(1 / b);
            return d.invert = function(b) {
                return f(a.invert(b))
            }, d.domain = function(b) {
                return arguments.length ? (a.domain((c = b.map(Number)).map(e)), d) : c
            }, d.ticks = function(a) {
                return $e(c, a)
            }, d.tickFormat = function(a, b) {
                return _e(c, a, b)
            }, d.nice = function(a) {
                return d.domain(Ye(c, a))
            }, d.exponent = function(g) {
                return arguments.length ? (e = ef(b = g), f = ef(1 / b), a.domain(c.map(e)), d) : b
            }, d.copy = function() {
                return df(a.copy(), b, c)
            }, Xe(d, a)
        }

        function ef(a) {
            return function(b) {
                return b < 0 ? -Math.pow(-b, a) : Math.pow(b, a)
            }
        }

        function ff(a, b) {
            function c(c) {
                return f[((e.get(c) || ("range" === b.t ? e.set(c, a.push(c)) : NaN)) - 1) % f.length]
            }

            function d(b, c) {
                return hg.range(a.length).map(function(a) {
                    return b + c * a
                })
            }
            var e, f, g;
            return c.domain = function(d) {
                if (!arguments.length) return a;
                a = [], e = new j;
                for (var f, g = -1, h = d.length; ++g < h;) e.has(f = d[g]) || e.set(f, a.push(f));
                return c[b.t].apply(c, b.a)
            }, c.range = function(a) {
                return arguments.length ? (f = a, g = 0, b = {
                    t: "range",
                    a: arguments
                }, c) : f
            }, c.rangePoints = function(e, h) {
                arguments.length < 2 && (h = 0);
                var i = e[0],
                    j = e[1],
                    k = a.length < 2 ? (i = (i + j) / 2, 0) : (j - i) / (a.length - 1 + h);
                return f = d(i + k * h / 2, k), g = 0, b = {
                    t: "rangePoints",
                    a: arguments
                }, c
            }, c.rangeRoundPoints = function(e, h) {
                arguments.length < 2 && (h = 0);
                var i = e[0],
                    j = e[1],
                    k = a.length < 2 ? (i = j = Math.round((i + j) / 2), 0) : (j - i) / (a.length - 1 + h) | 0;
                return f = d(i + Math.round(k * h / 2 + (j - i - (a.length - 1 + h) * k) / 2), k), g = 0, b = {
                    t: "rangeRoundPoints",
                    a: arguments
                }, c
            }, c.rangeBands = function(e, h, i) {
                arguments.length < 2 && (h = 0), arguments.length < 3 && (i = h);
                var j = e[1] < e[0],
                    k = e[j - 0],
                    l = e[1 - j],
                    m = (l - k) / (a.length - h + 2 * i);
                return f = d(k + m * i, m), j && f.reverse(), g = m * (1 - h), b = {
                    t: "rangeBands",
                    a: arguments
                }, c
            }, c.rangeRoundBands = function(e, h, i) {
                arguments.length < 2 && (h = 0), arguments.length < 3 && (i = h);
                var j = e[1] < e[0],
                    k = e[j - 0],
                    l = e[1 - j],
                    m = Math.floor((l - k) / (a.length - h + 2 * i));
                return f = d(k + Math.round((l - k - (a.length - h) * m) / 2), m), j && f.reverse(), g = Math.round(m * (1 - h)), b = {
                    t: "rangeRoundBands",
                    a: arguments
                }, c
            }, c.rangeBand = function() {
                return g
            }, c.rangeExtent = function() {
                return Qe(b.a[0])
            }, c.copy = function() {
                return ff(a, b)
            }, c.domain(a)
        }

        function gf(a, b) {
            function f() {
                var c = 0,
                    d = b.length;
                for (h = []; ++c < d;) h[c - 1] = hg.quantile(a, c / d);
                return g
            }

            function g(a) {
                if (!isNaN(a = +a)) return b[hg.bisect(h, a)]
            }
            var h;
            return g.domain = function(b) {
                return arguments.length ? (a = b.map(d).filter(e).sort(c), f()) : a
            }, g.range = function(a) {
                return arguments.length ? (b = a, f()) : b
            }, g.quantiles = function() {
                return h
            }, g.invertExtent = function(c) {
                return c = b.indexOf(c), c < 0 ? [NaN, NaN] : [c > 0 ? h[c - 1] : a[0], c < h.length ? h[c] : a[a.length - 1]]
            }, g.copy = function() {
                return gf(a, b)
            }, f()
        }

        function hf(a, b, c) {
            function d(b) {
                return c[Math.max(0, Math.min(g, Math.floor(f * (b - a))))]
            }

            function e() {
                return f = c.length / (b - a), g = c.length - 1, d
            }
            var f, g;
            return d.domain = function(c) {
                return arguments.length ? (a = +c[0], b = +c[c.length - 1], e()) : [a, b]
            }, d.range = function(a) {
                return arguments.length ? (c = a, e()) : c
            }, d.invertExtent = function(b) {
                return b = c.indexOf(b), b = b < 0 ? NaN : b / f + a, [b, b + 1 / f]
            }, d.copy = function() {
                return hf(a, b, c)
            }, e()
        }

        function jf(a, b) {
            function c(c) {
                if (c <= c) return b[hg.bisect(a, c)]
            }
            return c.domain = function(b) {
                return arguments.length ? (a = b, c) : a
            }, c.range = function(a) {
                return arguments.length ? (b = a, c) : b
            }, c.invertExtent = function(c) {
                return c = b.indexOf(c), [a[c - 1], a[c]]
            }, c.copy = function() {
                return jf(a, b)
            }, c
        }

        function kf(a) {
            function b(a) {
                return +a
            }
            return b.invert = b, b.domain = b.range = function(c) {
                return arguments.length ? (a = c.map(b), b) : a
            }, b.ticks = function(b) {
                return $e(a, b)
            }, b.tickFormat = function(b, c) {
                return _e(a, b, c)
            }, b.copy = function() {
                return kf(a)
            }, b
        }

        function lf() {
            return 0
        }

        function mf(a) {
            return a.innerRadius
        }

        function nf(a) {
            return a.outerRadius
        }

        function of(a) {
            return a.startAngle
        }

        function pf(a) {
            return a.endAngle
        }

        function qf(a) {
            return a && a.padAngle
        }

        function rf(a, b, c, d) {
            return (a - c) * b - (b - d) * a > 0 ? 0 : 1
        }

        function sf(a, b, c, d, e) {
            var f = a[0] - b[0],
                g = a[1] - b[1],
                h = (e ? d : -d) / Math.sqrt(f * f + g * g),
                i = h * g,
                j = -h * f,
                k = a[0] + i,
                l = a[1] + j,
                m = b[0] + i,
                n = b[1] + j,
                o = (k + m) / 2,
                p = (l + n) / 2,
                q = m - k,
                r = n - l,
                s = q * q + r * r,
                t = c - d,
                u = k * n - m * l,
                v = (r < 0 ? -1 : 1) * Math.sqrt(Math.max(0, t * t * s - u * u)),
                w = (u * r - q * v) / s,
                x = (-u * q - r * v) / s,
                y = (u * r + q * v) / s,
                z = (-u * q + r * v) / s,
                A = w - o,
                B = x - p,
                C = y - o,
                D = z - p;
            return A * A + B * B > C * C + D * D && (w = y, x = z), [
                [w - i, x - j],
                [w * c / t, x * c / t]
            ]
        }

        function tf(a) {
            function b(b) {
                function g() {
                    j.push("M", f(a(k), h))
                }
                for (var i, j = [], k = [], l = -1, m = b.length, n = Aa(c), o = Aa(d); ++l < m;) e.call(this, i = b[l], l) ? k.push([+n.call(this, i, l), +o.call(this, i, l)]) : k.length && (g(), k = []);
                return k.length && g(), j.length ? j.join("") : null
            }
            var c = Cc,
                d = Dc,
                e = Db,
                f = uf,
                g = f.key,
                h = .7;
            return b.x = function(a) {
                return arguments.length ? (c = a, b) : c
            }, b.y = function(a) {
                return arguments.length ? (d = a, b) : d
            }, b.defined = function(a) {
                return arguments.length ? (e = a, b) : e
            }, b.interpolate = function(a) {
                return arguments.length ? (g = "function" == typeof a ? f = a : (f = Bi.get(a) || uf).key, b) : g
            }, b.tension = function(a) {
                return arguments.length ? (h = a, b) : h
            }, b
        }

        function uf(a) {
            return a.length > 1 ? a.join("L") : a + "Z"
        }

        function vf(a) {
            return a.join("L") + "Z"
        }

        function wf(a) {
            for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("H", (d[0] + (d = a[b])[0]) / 2, "V", d[1]);
            return c > 1 && e.push("H", d[0]), e.join("")
        }

        function xf(a) {
            for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("V", (d = a[b])[1], "H", d[0]);
            return e.join("")
        }

        function yf(a) {
            for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("H", (d = a[b])[0], "V", d[1]);
            return e.join("")
        }

        function zf(a, b) {
            return a.length < 4 ? uf(a) : a[1] + Cf(a.slice(1, -1), Df(a, b))
        }

        function Af(a, b) {
            return a.length < 3 ? vf(a) : a[0] + Cf((a.push(a[0]), a), Df([a[a.length - 2]].concat(a, [a[1]]), b))
        }

        function Bf(a, b) {
            return a.length < 3 ? uf(a) : a[0] + Cf(a, Df(a, b))
        }

        function Cf(a, b) {
            if (b.length < 1 || a.length != b.length && a.length != b.length + 2) return uf(a);
            var c = a.length != b.length,
                d = "",
                e = a[0],
                f = a[1],
                g = b[0],
                h = g,
                i = 1;
            if (c && (d += "Q" + (f[0] - 2 * g[0] / 3) + "," + (f[1] - 2 * g[1] / 3) + "," + f[0] + "," + f[1], e = a[1], i = 2), b.length > 1) {
                h = b[1], f = a[i], i++, d += "C" + (e[0] + g[0]) + "," + (e[1] + g[1]) + "," + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1];
                for (var j = 2; j < b.length; j++, i++) f = a[i], h = b[j], d += "S" + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1]
            }
            if (c) {
                var k = a[i];
                d += "Q" + (f[0] + 2 * h[0] / 3) + "," + (f[1] + 2 * h[1] / 3) + "," + k[0] + "," + k[1]
            }
            return d
        }

        function Df(a, b) {
            for (var c, d = [], e = (1 - b) / 2, f = a[0], g = a[1], h = 1, i = a.length; ++h < i;) c = f, f = g, g = a[h], d.push([e * (g[0] - c[0]), e * (g[1] - c[1])]);
            return d
        }

        function Ef(a) {
            if (a.length < 3) return uf(a);
            var b = 1,
                c = a.length,
                d = a[0],
                e = d[0],
                f = d[1],
                g = [e, e, e, (d = a[1])[0]],
                h = [f, f, f, d[1]],
                i = [e, ",", f, "L", If(Ei, g), ",", If(Ei, h)];
            for (a.push(a[c - 1]); ++b <= c;) d = a[b], g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), Jf(i, g, h);
            return a.pop(), i.push("L", d), i.join("")
        }

        function Ff(a) {
            if (a.length < 4) return uf(a);
            for (var b, c = [], d = -1, e = a.length, f = [0], g = [0]; ++d < 3;) b = a[d], f.push(b[0]), g.push(b[1]);
            for (c.push(If(Ei, f) + "," + If(Ei, g)), --d; ++d < e;) b = a[d], f.shift(), f.push(b[0]), g.shift(), g.push(b[1]), Jf(c, f, g);
            return c.join("")
        }

        function Gf(a) {
            for (var b, c, d = -1, e = a.length, f = e + 4, g = [], h = []; ++d < 4;) c = a[d % e], g.push(c[0]), h.push(c[1]);
            for (b = [If(Ei, g), ",", If(Ei, h)], --d; ++d < f;) c = a[d % e], g.shift(), g.push(c[0]), h.shift(), h.push(c[1]), Jf(b, g, h);
            return b.join("")
        }

        function Hf(a, b) {
            var c = a.length - 1;
            if (c)
                for (var d, e, f = a[0][0], g = a[0][1], h = a[c][0] - f, i = a[c][1] - g, j = -1; ++j <= c;) d = a[j], e = j / c, d[0] = b * d[0] + (1 - b) * (f + e * h), d[1] = b * d[1] + (1 - b) * (g + e * i);
            return Ef(a)
        }

        function If(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
        }

        function Jf(a, b, c) {
            a.push("C", If(Ci, b), ",", If(Ci, c), ",", If(Di, b), ",", If(Di, c), ",", If(Ei, b), ",", If(Ei, c))
        }

        function Kf(a, b) {
            return (b[1] - a[1]) / (b[0] - a[0])
        }

        function Lf(a) {
            for (var b = 0, c = a.length - 1, d = [], e = a[0], f = a[1], g = d[0] = Kf(e, f); ++b < c;) d[b] = (g + (g = Kf(e = f, f = a[b + 1]))) / 2;
            return d[b] = g, d
        }

        function Mf(a) {
            for (var b, c, d, e, f = [], g = Lf(a), h = -1, i = a.length - 1; ++h < i;) b = Kf(a[h], a[h + 1]), rg(b) < Hg ? g[h] = g[h + 1] = 0 : (c = g[h] / b, d = g[h + 1] / b, (e = c * c + d * d) > 9 && (e = 3 * b / Math.sqrt(e), g[h] = e * c, g[h + 1] = e * d));
            for (h = -1; ++h <= i;) e = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h])), f.push([e || 0, g[h] * e || 0]);
            return f
        }

        function Nf(a) {
            return a.length < 3 ? uf(a) : a[0] + Cf(a, Mf(a))
        }

        function Of(a) {
            for (var b, c, d, e = -1, f = a.length; ++e < f;) b = a[e], c = b[0], d = b[1] - Mg, b[0] = c * Math.cos(d), b[1] = c * Math.sin(d);
            return a
        }

        function Pf(a) {
            function b(b) {
                function i() {
                    p.push("M", h(a(r), l), k, j(a(q.reverse()), l), "Z")
                }
                for (var m, n, o, p = [], q = [], r = [], s = -1, t = b.length, u = Aa(c), v = Aa(e), w = c === d ? function() {
                        return n
                    } : Aa(d), x = e === f ? function() {
                        return o
                    } : Aa(f); ++s < t;) g.call(this, m = b[s], s) ? (q.push([n = +u.call(this, m, s), o = +v.call(this, m, s)]), r.push([+w.call(this, m, s), +x.call(this, m, s)])) : q.length && (i(), q = [], r = []);
                return q.length && i(), p.length ? p.join("") : null
            }
            var c = Cc,
                d = Cc,
                e = 0,
                f = Dc,
                g = Db,
                h = uf,
                i = h.key,
                j = h,
                k = "L",
                l = .7;
            return b.x = function(a) {
                return arguments.length ? (c = d = a, b) : d
            }, b.x0 = function(a) {
                return arguments.length ? (c = a, b) : c
            }, b.x1 = function(a) {
                return arguments.length ? (d = a, b) : d
            }, b.y = function(a) {
                return arguments.length ? (e = f = a, b) : f
            }, b.y0 = function(a) {
                return arguments.length ? (e = a, b) : e
            }, b.y1 = function(a) {
                return arguments.length ? (f = a, b) : f
            }, b.defined = function(a) {
                return arguments.length ? (g = a, b) : g
            }, b.interpolate = function(a) {
                return arguments.length ? (i = "function" == typeof a ? h = a : (h = Bi.get(a) || uf).key, j = h.reverse || h, k = h.closed ? "M" : "L", b) : i
            }, b.tension = function(a) {
                return arguments.length ? (l = a, b) : l
            }, b
        }

        function Qf(a) {
            return a.radius
        }

        function Rf(a) {
            return [a.x, a.y]
        }

        function Sf(a) {
            return function() {
                var b = a.apply(this, arguments),
                    c = b[0],
                    d = b[1] - Mg;
                return [c * Math.cos(d), c * Math.sin(d)]
            }
        }

        function Tf() {
            return 64
        }

        function Uf() {
            return "circle"
        }

        function Vf(a) {
            var b = Math.sqrt(a / Jg);
            return "M0," + b + "A" + b + "," + b + " 0 1,1 0," + -b + "A" + b + "," + b + " 0 1,1 0," + b + "Z"
        }

        function Wf(a) {
            return function() {
                var b, c, d;
                (b = this[a]) && (d = b[c = b.active]) && (d.timer.c = null, d.timer.t = NaN, --b.count ? delete b[c] : delete this[a], b.active += .5, d.event && d.event.interrupt.call(this, this.__data__, d.index))
            }
        }

        function Xf(a, b, c) {
            return wg(a, Li), a.namespace = b, a.id = c, a
        }

        function Yf(a, b, c, d) {
            var e = a.id,
                f = a.namespace;
            return R(a, "function" == typeof c ? function(a, g, h) {
                a[f][e].tween.set(b, d(c.call(a, a.__data__, g, h)))
            } : (c = d(c), function(a) {
                a[f][e].tween.set(b, c)
            }))
        }

        function Zf(a) {
            return null == a && (a = ""),
                function() {
                    this.textContent = a
                }
        }

        function $f(a) {
            return null == a ? "__transition__" : "__transition_" + a + "__"
        }

        function _f(a, b, c, d, e) {
            function f(a) {
                var b = p.delay;
                if (k.t = b + i, b <= a) return g(a - b);
                k.c = g
            }

            function g(c) {
                var e = o.active,
                    f = o[e];
                f && (f.timer.c = null, f.timer.t = NaN, --o.count, delete o[e], f.event && f.event.interrupt.call(a, a.__data__, f.index));
                for (var g in o)
                    if (+g < d) {
                        var j = o[g];
                        j.timer.c = null, j.timer.t = NaN, --o.count, delete o[g]
                    }
                k.c = h, Fa(function() {
                    return k.c && h(c || 1) && (k.c = null, k.t = NaN), 1
                }, 0, i), o.active = d, p.event && p.event.start.call(a, a.__data__, b), n = [], p.tween.forEach(function(c, d) {
                    (d = d.call(a, a.__data__, b)) && n.push(d)
                }), m = p.ease, l = p.duration
            }

            function h(e) {
                for (var f = e / l, g = m(f), h = n.length; h > 0;) n[--h].call(a, g);
                if (f >= 1) return p.event && p.event.end.call(a, a.__data__, b), --o.count ? delete o[d] : delete a[c], 1
            }
            var i, k, l, m, n, o = a[c] || (a[c] = {
                    active: 0,
                    count: 0
                }),
                p = o[d];
            p || (i = e.time, k = Fa(f, 0, i), p = o[d] = {
                tween: new j,
                time: i,
                timer: k,
                delay: e.delay,
                duration: e.duration,
                ease: e.ease,
                index: b
            }, e = null, ++o.count)
        }

        function ag(a, b, c) {
            a.attr("transform", function(a) {
                var d = b(a);
                return "translate(" + (isFinite(d) ? d : c(a)) + ",0)"
            })
        }

        function bg(a, b, c) {
            a.attr("transform", function(a) {
                var d = b(a);
                return "translate(0," + (isFinite(d) ? d : c(a)) + ")"
            })
        }

        function cg(a) {
            return a.toISOString()
        }

        function dg(a, b, c) {
            function d(b) {
                return a(b)
            }

            function e(a, c) {
                var d = a[1] - a[0],
                    e = d / c,
                    f = hg.bisect(Ui, e);
                return f == Ui.length ? [b.year, Ze(a.map(function(a) {
                    return a / 31536e6
                }), c)[2]] : f ? b[e / Ui[f - 1] < Ui[f] / e ? f - 1 : f] : [Xi, Ze(a, c)[2]]
            }
            return d.invert = function(b) {
                return eg(a.invert(b))
            }, d.domain = function(b) {
                return arguments.length ? (a.domain(b), d) : a.domain().map(eg)
            }, d.nice = function(a, b) {
                function c(c) {
                    return !isNaN(c) && !a.range(c, eg(+c + 1), b).length
                }
                var f = d.domain(),
                    g = Qe(f),
                    h = null == a ? e(g, 10) : "number" == typeof a && e(g, a);
                return h && (a = h[0], b = h[1]), d.domain(Te(f, b > 1 ? {
                    floor: function(b) {
                        for (; c(b = a.floor(b));) b = eg(b - 1);
                        return b
                    },
                    ceil: function(b) {
                        for (; c(b = a.ceil(b));) b = eg(+b + 1);
                        return b
                    }
                } : a))
            }, d.ticks = function(a, b) {
                var c = Qe(d.domain()),
                    f = null == a ? e(c, 10) : "number" == typeof a ? e(c, a) : !a.range && [{
                        range: a
                    }, b];
                return f && (a = f[0], b = f[1]), a.range(c[0], eg(+c[1] + 1), b < 1 ? 1 : b)
            }, d.tickFormat = function() {
                return c
            }, d.copy = function() {
                return dg(a.copy(), b, c)
            }, Xe(d, a)
        }

        function eg(a) {
            return new Date(a)
        }

        function fg(a) {
            return JSON.parse(a.responseText)
        }

        function gg(a) {
            var b = kg.createRange();
            return b.selectNode(kg.body), b.createContextualFragment(a.responseText)
        }
        var hg = {
                version: "3.5.9"
            },
            ig = [].slice,
            jg = function(a) {
                return ig.call(a)
            },
            kg = this.document;
        if (kg) try {
            jg(kg.documentElement.childNodes)[0].nodeType
        } catch (a) {
            jg = function(a) {
                for (var b = a.length, c = new Array(b); b--;) c[b] = a[b];
                return c
            }
        }
        if (Date.now || (Date.now = function() {
                return +new Date
            }), kg) try {
            kg.createElement("DIV").style.setProperty("opacity", 0, "")
        } catch (a) {
            var lg = this.Element.prototype,
                mg = lg.setAttribute,
                ng = lg.setAttributeNS,
                og = this.CSSStyleDeclaration.prototype,
                pg = og.setProperty;
            lg.setAttribute = function(a, b) {
                mg.call(this, a, b + "")
            }, lg.setAttributeNS = function(a, b, c) {
                ng.call(this, a, b, c + "")
            }, og.setProperty = function(a, b, c) {
                pg.call(this, a, b + "", c)
            }
        }
        hg.ascending = c, hg.descending = function(a, b) {
            return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN
        }, hg.min = function(a, b) {
            var c, d, e = -1,
                f = a.length;
            if (1 === arguments.length) {
                for (; ++e < f;)
                    if (null != (d = a[e]) && d >= d) {
                        c = d;
                        break
                    }
                for (; ++e < f;) null != (d = a[e]) && c > d && (c = d)
            } else {
                for (; ++e < f;)
                    if (null != (d = b.call(a, a[e], e)) && d >= d) {
                        c = d;
                        break
                    }
                for (; ++e < f;) null != (d = b.call(a, a[e], e)) && c > d && (c = d)
            }
            return c
        }, hg.max = function(a, b) {
            var c, d, e = -1,
                f = a.length;
            if (1 === arguments.length) {
                for (; ++e < f;)
                    if (null != (d = a[e]) && d >= d) {
                        c = d;
                        break
                    }
                for (; ++e < f;) null != (d = a[e]) && d > c && (c = d)
            } else {
                for (; ++e < f;)
                    if (null != (d = b.call(a, a[e], e)) && d >= d) {
                        c = d;
                        break
                    }
                for (; ++e < f;) null != (d = b.call(a, a[e], e)) && d > c && (c = d)
            }
            return c
        }, hg.extent = function(a, b) {
            var c, d, e, f = -1,
                g = a.length;
            if (1 === arguments.length) {
                for (; ++f < g;)
                    if (null != (d = a[f]) && d >= d) {
                        c = e = d;
                        break
                    }
                for (; ++f < g;) null != (d = a[f]) && (c > d && (c = d), e < d && (e = d))
            } else {
                for (; ++f < g;)
                    if (null != (d = b.call(a, a[f], f)) && d >= d) {
                        c = e = d;
                        break
                    }
                for (; ++f < g;) null != (d = b.call(a, a[f], f)) && (c > d && (c = d), e < d && (e = d))
            }
            return [c, e]
        }, hg.sum = function(a, b) {
            var c, d = 0,
                f = a.length,
                g = -1;
            if (1 === arguments.length)
                for (; ++g < f;) e(c = +a[g]) && (d += c);
            else
                for (; ++g < f;) e(c = +b.call(a, a[g], g)) && (d += c);
            return d
        }, hg.mean = function(a, b) {
            var c, f = 0,
                g = a.length,
                h = -1,
                i = g;
            if (1 === arguments.length)
                for (; ++h < g;) e(c = d(a[h])) ? f += c : --i;
            else
                for (; ++h < g;) e(c = d(b.call(a, a[h], h))) ? f += c : --i;
            if (i) return f / i
        }, hg.quantile = function(a, b) {
            var c = (a.length - 1) * b + 1,
                d = Math.floor(c),
                e = +a[d - 1],
                f = c - d;
            return f ? e + f * (a[d] - e) : e
        }, hg.median = function(a, b) {
            var f, g = [],
                h = a.length,
                i = -1;
            if (1 === arguments.length)
                for (; ++i < h;) e(f = d(a[i])) && g.push(f);
            else
                for (; ++i < h;) e(f = d(b.call(a, a[i], i))) && g.push(f);
            if (g.length) return hg.quantile(g.sort(c), .5)
        }, hg.variance = function(a, b) {
            var c, f, g = a.length,
                h = 0,
                i = 0,
                j = -1,
                k = 0;
            if (1 === arguments.length)
                for (; ++j < g;) e(c = d(a[j])) && (f = c - h, h += f / ++k, i += f * (c - h));
            else
                for (; ++j < g;) e(c = d(b.call(a, a[j], j))) && (f = c - h, h += f / ++k, i += f * (c - h));
            if (k > 1) return i / (k - 1)
        }, hg.deviation = function() {
            var a = hg.variance.apply(this, arguments);
            return a ? Math.sqrt(a) : a
        };
        var qg = f(c);
        hg.bisectLeft = qg.left, hg.bisect = hg.bisectRight = qg.right, hg.bisector = function(a) {
            return f(1 === a.length ? function(b, d) {
                return c(a(b), d)
            } : a)
        }, hg.shuffle = function(a, b, c) {
            (f = arguments.length) < 3 && (c = a.length, f < 2 && (b = 0));
            for (var d, e, f = c - b; f;) e = Math.random() * f-- | 0, d = a[f + b], a[f + b] = a[e + b], a[e + b] = d;
            return a
        }, hg.permute = function(a, b) {
            for (var c = b.length, d = new Array(c); c--;) d[c] = a[b[c]];
            return d
        }, hg.pairs = function(a) {
            for (var b = 0, c = a.length - 1, d = a[0], e = new Array(c < 0 ? 0 : c); b < c;) e[b] = [d, d = a[++b]];
            return e
        }, hg.zip = function() {
            if (!(d = arguments.length)) return [];
            for (var a = -1, b = hg.min(arguments, g), c = new Array(b); ++a < b;)
                for (var d, e = -1, f = c[a] = new Array(d); ++e < d;) f[e] = arguments[e][a];
            return c
        }, hg.transpose = function(a) {
            return hg.zip.apply(hg, a)
        }, hg.keys = function(a) {
            var b = [];
            for (var c in a) b.push(c);
            return b
        }, hg.values = function(a) {
            var b = [];
            for (var c in a) b.push(a[c]);
            return b
        }, hg.entries = function(a) {
            var b = [];
            for (var c in a) b.push({
                key: c,
                value: a[c]
            });
            return b
        }, hg.merge = function(a) {
            for (var b, c, d, e = a.length, f = -1, g = 0; ++f < e;) g += a[f].length;
            for (c = new Array(g); --e >= 0;)
                for (d = a[e], b = d.length; --b >= 0;) c[--g] = d[b];
            return c
        };
        var rg = Math.abs;
        hg.range = function(a, b, c) {
            if (arguments.length < 3 && (c = 1, arguments.length < 2 && (b = a, a = 0)), (b - a) / c == 1 / 0) throw new Error("infinite range");
            var d, e = [],
                f = h(rg(c)),
                g = -1;
            if (a *= f, b *= f, c *= f, c < 0)
                for (;
                    (d = a + c * ++g) > b;) e.push(d / f);
            else
                for (;
                    (d = a + c * ++g) < b;) e.push(d / f);
            return e
        }, hg.map = function(a, b) {
            var c = new j;
            if (a instanceof j) a.forEach(function(a, b) {
                c.set(a, b)
            });
            else if (Array.isArray(a)) {
                var d, e = -1,
                    f = a.length;
                if (1 === arguments.length)
                    for (; ++e < f;) c.set(e, a[e]);
                else
                    for (; ++e < f;) c.set(b.call(a, d = a[e], e), d)
            } else
                for (var g in a) c.set(g, a[g]);
            return c
        };
        var sg = "__proto__",
            tg = "\0";
        i(j, {
            has: m,
            get: function(a) {
                return this._[k(a)]
            },
            set: function(a, b) {
                return this._[k(a)] = b
            },
            remove: n,
            keys: o,
            values: function() {
                var a = [];
                for (var b in this._) a.push(this._[b]);
                return a
            },
            entries: function() {
                var a = [];
                for (var b in this._) a.push({
                    key: l(b),
                    value: this._[b]
                });
                return a
            },
            size: p,
            empty: q,
            forEach: function(a) {
                for (var b in this._) a.call(this, l(b), this._[b])
            }
        }), hg.nest = function() {
            function a(b, g, h) {
                if (h >= f.length) return d ? d.call(e, g) : c ? g.sort(c) : g;
                for (var i, k, l, m, n = -1, o = g.length, p = f[h++], q = new j; ++n < o;)(m = q.get(i = p(k = g[n]))) ? m.push(k) : q.set(i, [k]);
                return b ? (k = b(), l = function(c, d) {
                    k.set(c, a(b, d, h))
                }) : (k = {}, l = function(c, d) {
                    k[c] = a(b, d, h)
                }), q.forEach(l), k
            }

            function b(a, c) {
                if (c >= f.length) return a;
                var d = [],
                    e = g[c++];
                return a.forEach(function(a, e) {
                    d.push({
                        key: a,
                        values: b(e, c)
                    })
                }), e ? d.sort(function(a, b) {
                    return e(a.key, b.key)
                }) : d
            }
            var c, d, e = {},
                f = [],
                g = [];
            return e.map = function(b, c) {
                return a(c, b, 0)
            }, e.entries = function(c) {
                return b(a(hg.map, c, 0), 0)
            }, e.key = function(a) {
                return f.push(a), e
            }, e.sortKeys = function(a) {
                return g[f.length - 1] = a, e
            }, e.sortValues = function(a) {
                return c = a, e
            }, e.rollup = function(a) {
                return d = a, e
            }, e
        }, hg.set = function(a) {
            var b = new r;
            if (a)
                for (var c = 0, d = a.length; c < d; ++c) b.add(a[c]);
            return b
        }, i(r, {
            has: m,
            add: function(a) {
                return this._[k(a += "")] = !0, a
            },
            remove: n,
            values: o,
            size: p,
            empty: q,
            forEach: function(a) {
                for (var b in this._) a.call(this, l(b))
            }
        }), hg.behavior = {}, hg.rebind = function(a, b) {
            for (var c, d = 1, e = arguments.length; ++d < e;) a[c = arguments[d]] = t(a, b, b[c]);
            return a
        };
        var ug = ["webkit", "ms", "moz", "Moz", "o", "O"];
        hg.dispatch = function() {
            for (var a = new w, b = -1, c = arguments.length; ++b < c;) a[arguments[b]] = x(a);
            return a
        }, w.prototype.on = function(a, b) {
            var c = a.indexOf("."),
                d = "";
            if (c >= 0 && (d = a.slice(c + 1), a = a.slice(0, c)), a) return arguments.length < 2 ? this[a].on(d) : this[a].on(d, b);
            if (2 === arguments.length) {
                if (null == b)
                    for (a in this) this.hasOwnProperty(a) && this[a].on(d, null);
                return this
            }
        }, hg.event = null, hg.requote = function(a) {
            return a.replace(vg, "\\$&")
        };
        var vg = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
            wg = {}.__proto__ ? function(a, b) {
                a.__proto__ = b
            } : function(a, b) {
                for (var c in b) a[c] = b[c]
            },
            xg = function(a, b) {
                return b.querySelector(a)
            },
            yg = function(a, b) {
                return b.querySelectorAll(a)
            },
            zg = function(a, b) {
                var c = a.matches || a[u(a, "matchesSelector")];
                return (zg = function(a, b) {
                    return c.call(a, b)
                })(a, b)
            };
        "function" == typeof Sizzle && (xg = function(a, b) {
            return Sizzle(a, b)[0] || null
        }, yg = Sizzle, zg = Sizzle.matchesSelector), hg.selection = function() {
            return hg.select(kg.documentElement)
        };
        var Ag = hg.selection.prototype = [];
        Ag.select = function(a) {
            var b, c, d, e, f = [];
            a = C(a);
            for (var g = -1, h = this.length; ++g < h;) {
                f.push(b = []), b.parentNode = (d = this[g]).parentNode;
                for (var i = -1, j = d.length; ++i < j;)(e = d[i]) ? (b.push(c = a.call(e, e.__data__, i, g)), c && "__data__" in e && (c.__data__ = e.__data__)) : b.push(null)
            }
            return B(f)
        }, Ag.selectAll = function(a) {
            var b, c, d = [];
            a = D(a);
            for (var e = -1, f = this.length; ++e < f;)
                for (var g = this[e], h = -1, i = g.length; ++h < i;)(c = g[h]) && (d.push(b = jg(a.call(c, c.__data__, h, e))), b.parentNode = c);
            return B(d)
        };
        var Bg = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        };
        hg.ns = {
            prefix: Bg,
            qualify: function(a) {
                var b = a.indexOf(":"),
                    c = a;
                return b >= 0 && "xmlns" !== (c = a.slice(0, b)) && (a = a.slice(b + 1)), Bg.hasOwnProperty(c) ? {
                    space: Bg[c],
                    local: a
                } : a
            }
        }, Ag.attr = function(a, b) {
            if (arguments.length < 2) {
                if ("string" == typeof a) {
                    var c = this.node();
                    return a = hg.ns.qualify(a), a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
                }
                for (b in a) this.each(E(b, a[b]));
                return this
            }
            return this.each(E(a, b))
        }, Ag.classed = function(a, b) {
            if (arguments.length < 2) {
                if ("string" == typeof a) {
                    var c = this.node(),
                        d = (a = H(a)).length,
                        e = -1;
                    if (b = c.classList) {
                        for (; ++e < d;)
                            if (!b.contains(a[e])) return !1
                    } else
                        for (b = c.getAttribute("class"); ++e < d;)
                            if (!G(a[e]).test(b)) return !1; return !0
                }
                for (b in a) this.each(I(b, a[b]));
                return this
            }
            return this.each(I(a, b))
        }, Ag.style = function(a, c, d) {
            var e = arguments.length;
            if (e < 3) {
                if ("string" != typeof a) {
                    e < 2 && (c = "");
                    for (d in a) this.each(K(d, a[d], c));
                    return this
                }
                if (e < 2) {
                    var f = this.node();
                    return b(f).getComputedStyle(f, null).getPropertyValue(a)
                }
                d = ""
            }
            return this.each(K(a, c, d))
        }, Ag.property = function(a, b) {
            if (arguments.length < 2) {
                if ("string" == typeof a) return this.node()[a];
                for (b in a) this.each(L(b, a[b]));
                return this
            }
            return this.each(L(a, b))
        }, Ag.text = function(a) {
            return arguments.length ? this.each("function" == typeof a ? function() {
                var b = a.apply(this, arguments);
                this.textContent = null == b ? "" : b
            } : null == a ? function() {
                this.textContent = ""
            } : function() {
                this.textContent = a
            }) : this.node().textContent
        }, Ag.html = function(a) {
            return arguments.length ? this.each("function" == typeof a ? function() {
                var b = a.apply(this, arguments);
                this.innerHTML = null == b ? "" : b
            } : null == a ? function() {
                this.innerHTML = ""
            } : function() {
                this.innerHTML = a
            }) : this.node().innerHTML
        }, Ag.append = function(a) {
            return a = M(a), this.select(function() {
                return this.appendChild(a.apply(this, arguments))
            })
        }, Ag.insert = function(a, b) {
            return a = M(a), b = C(b), this.select(function() {
                return this.insertBefore(a.apply(this, arguments), b.apply(this, arguments) || null)
            })
        }, Ag.remove = function() {
            return this.each(N)
        }, Ag.data = function(a, b) {
            function c(a, c) {
                var d, e, f, g = a.length,
                    l = c.length,
                    m = Math.min(g, l),
                    n = new Array(l),
                    o = new Array(l),
                    p = new Array(g);
                if (b) {
                    var q, r = new j,
                        s = new Array(g);
                    for (d = -1; ++d < g;)(e = a[d]) && (r.has(q = b.call(e, e.__data__, d)) ? p[d] = e : r.set(q, e), s[d] = q);
                    for (d = -1; ++d < l;)(e = r.get(q = b.call(c, f = c[d], d))) ? !0 !== e && (n[d] = e, e.__data__ = f) : o[d] = O(f), r.set(q, !0);
                    for (d = -1; ++d < g;) d in s && !0 !== r.get(s[d]) && (p[d] = a[d])
                } else {
                    for (d = -1; ++d < m;) e = a[d], f = c[d], e ? (e.__data__ = f, n[d] = e) : o[d] = O(f);
                    for (; d < l; ++d) o[d] = O(c[d]);
                    for (; d < g; ++d) p[d] = a[d]
                }
                o.update = n, o.parentNode = n.parentNode = p.parentNode = a.parentNode, h.push(o), i.push(n), k.push(p)
            }
            var d, e, f = -1,
                g = this.length;
            if (!arguments.length) {
                for (a = new Array(g = (d = this[0]).length); ++f < g;)(e = d[f]) && (a[f] = e.__data__);
                return a
            }
            var h = S([]),
                i = B([]),
                k = B([]);
            if ("function" == typeof a)
                for (; ++f < g;) c(d = this[f], a.call(d, d.parentNode.__data__, f));
            else
                for (; ++f < g;) c(d = this[f], a);
            return i.enter = function() {
                return h
            }, i.exit = function() {
                return k
            }, i
        }, Ag.datum = function(a) {
            return arguments.length ? this.property("__data__", a) : this.property("__data__")
        }, Ag.filter = function(a) {
            var b, c, d, e = [];
            "function" != typeof a && (a = P(a));
            for (var f = 0, g = this.length; f < g; f++) {
                e.push(b = []), b.parentNode = (c = this[f]).parentNode;
                for (var h = 0, i = c.length; h < i; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
            }
            return B(e)
        }, Ag.order = function() {
            for (var a = -1, b = this.length; ++a < b;)
                for (var c, d = this[a], e = d.length - 1, f = d[e]; --e >= 0;)(c = d[e]) && (f && f !== c.nextSibling && f.parentNode.insertBefore(c, f), f = c);
            return this
        }, Ag.sort = function(a) {
            a = Q.apply(this, arguments);
            for (var b = -1, c = this.length; ++b < c;) this[b].sort(a);
            return this.order()
        }, Ag.each = function(a) {
            return R(this, function(b, c, d) {
                a.call(b, b.__data__, c, d)
            })
        }, Ag.call = function(a) {
            var b = jg(arguments);
            return a.apply(b[0] = this, b), this
        }, Ag.empty = function() {
            return !this.node()
        }, Ag.node = function() {
            for (var a = 0, b = this.length; a < b; a++)
                for (var c = this[a], d = 0, e = c.length; d < e; d++) {
                    var f = c[d];
                    if (f) return f
                }
            return null
        }, Ag.size = function() {
            var a = 0;
            return R(this, function() {
                ++a
            }), a
        };
        var Cg = [];
        hg.selection.enter = S, hg.selection.enter.prototype = Cg, Cg.append = Ag.append, Cg.empty = Ag.empty, Cg.node = Ag.node, Cg.call = Ag.call, Cg.size = Ag.size, Cg.select = function(a) {
            for (var b, c, d, e, f, g = [], h = -1, i = this.length; ++h < i;) {
                d = (e = this[h]).update, g.push(b = []), b.parentNode = e.parentNode;
                for (var j = -1, k = e.length; ++j < k;)(f = e[j]) ? (b.push(d[j] = c = a.call(e.parentNode, f.__data__, j, h)), c.__data__ = f.__data__) : b.push(null)
            }
            return B(g)
        }, Cg.insert = function(a, b) {
            return arguments.length < 2 && (b = T(this)), Ag.insert.call(this, a, b)
        }, hg.select = function(b) {
            var c;
            return "string" == typeof b ? (c = [xg(b, kg)], c.parentNode = kg.documentElement) : (c = [b], c.parentNode = a(b)), B([c])
        }, hg.selectAll = function(a) {
            var b;
            return "string" == typeof a ? (b = jg(yg(a, kg)), b.parentNode = kg.documentElement) : (b = jg(a), b.parentNode = null), B([b])
        }, Ag.on = function(a, b, c) {
            var d = arguments.length;
            if (d < 3) {
                if ("string" != typeof a) {
                    d < 2 && (b = !1);
                    for (c in a) this.each(U(c, a[c], b));
                    return this
                }
                if (d < 2) return (d = this.node()["__on" + a]) && d._;
                c = !1
            }
            return this.each(U(a, b, c))
        };
        var Dg = hg.map({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        });
        kg && Dg.forEach(function(a) {
            "on" + a in kg && Dg.remove(a)
        });
        var Eg, Fg = 0;
        hg.mouse = function(a) {
            return Y(a, z())
        };
        var Gg = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
        hg.touch = function(a, b, c) {
            if (arguments.length < 3 && (c = b, b = z().changedTouches), b)
                for (var d, e = 0, f = b.length; e < f; ++e)
                    if ((d = b[e]).identifier === c) return Y(a, d)
        }, hg.behavior.drag = function() {
            function a() {
                this.on("mousedown.drag", f).on("touchstart.drag", g)
            }

            function c(a, b, c, f, g) {
                return function() {
                    function h() {
                        var a, c, d = b(m, p);
                        d && (a = d[0] - t[0], c = d[1] - t[1], o |= a | c, t = d, n({
                            type: "drag",
                            x: d[0] + j[0],
                            y: d[1] + j[1],
                            dx: a,
                            dy: c
                        }))
                    }

                    function i() {
                        b(m, p) && (r.on(f + q, null).on(g + q, null), s(o), n({
                            type: "dragend"
                        }))
                    }
                    var j, k = this,
                        l = hg.event.target,
                        m = k.parentNode,
                        n = d.of(k, arguments),
                        o = 0,
                        p = a(),
                        q = ".drag" + (null == p ? "" : "-" + p),
                        r = hg.select(c(l)).on(f + q, h).on(g + q, i),
                        s = X(l),
                        t = b(m, p);
                    e ? (j = e.apply(k, arguments), j = [j.x - t[0], j.y - t[1]]) : j = [0, 0], n({
                        type: "dragstart"
                    })
                }
            }
            var d = A(a, "drag", "dragstart", "dragend"),
                e = null,
                f = c(v, hg.mouse, b, "mousemove", "mouseup"),
                g = c(Z, hg.touch, s, "touchmove", "touchend");
            return a.origin = function(b) {
                return arguments.length ? (e = b, a) : e
            }, hg.rebind(a, d, "on")
        }, hg.touches = function(a, b) {
            return arguments.length < 2 && (b = z().touches), b ? jg(b).map(function(b) {
                var c = Y(a, b);
                return c.identifier = b.identifier, c
            }) : []
        };
        var Hg = 1e-6,
            Ig = Hg * Hg,
            Jg = Math.PI,
            Kg = 2 * Jg,
            Lg = Kg - Hg,
            Mg = Jg / 2,
            Ng = Jg / 180,
            Og = 180 / Jg,
            Pg = Math.SQRT2;
        hg.interpolateZoom = function(a, b) {
            var c, d, e = a[0],
                f = a[1],
                g = a[2],
                h = b[0],
                i = b[1],
                j = b[2],
                k = h - e,
                l = i - f,
                m = k * k + l * l;
            if (m < Ig) d = Math.log(j / g) / Pg, c = function(a) {
                return [e + a * k, f + a * l, g * Math.exp(Pg * a * d)]
            };
            else {
                var n = Math.sqrt(m),
                    o = (j * j - g * g + 4 * m) / (2 * g * 2 * n),
                    p = (j * j - g * g - 4 * m) / (2 * j * 2 * n),
                    q = Math.log(Math.sqrt(o * o + 1) - o),
                    r = Math.log(Math.sqrt(p * p + 1) - p);
                d = (r - q) / Pg, c = function(a) {
                    var b = a * d,
                        c = da(q),
                        h = g / (2 * n) * (c * ea(Pg * b + q) - ca(q));
                    return [e + h * k, f + h * l, g * c / da(Pg * b + q)]
                }
            }
            return c.duration = 1e3 * d, c
        }, hg.behavior.zoom = function() {
            function a(a) {
                a.on(F, l).on(Rg + ".zoom", n).on("dblclick.zoom", o).on(I, m)
            }

            function c(a) {
                return [(a[0] - z.x) / z.k, (a[1] - z.y) / z.k]
            }

            function d(a) {
                return [a[0] * z.k + z.x, a[1] * z.k + z.y]
            }

            function e(a) {
                z.k = Math.max(C[0], Math.min(C[1], a))
            }

            function f(a, b) {
                b = d(b), z.x += a[0] - b[0], z.y += a[1] - b[1]
            }

            function g(b, c, d, g) {
                b.__chart__ = {
                    x: z.x,
                    y: z.y,
                    k: z.k
                }, e(Math.pow(2, g)), f(q = c, d), b = hg.select(b), D > 0 && (b = b.transition().duration(D)), b.call(a.event)
            }

            function h() {
                v && v.domain(u.range().map(function(a) {
                    return (a - z.x) / z.k
                }).map(u.invert)), x && x.domain(w.range().map(function(a) {
                    return (a - z.y) / z.k
                }).map(w.invert))
            }

            function i(a) {
                E++ || a({
                    type: "zoomstart"
                })
            }

            function j(a) {
                h(), a({
                    type: "zoom",
                    scale: z.k,
                    translate: [z.x, z.y]
                })
            }

            function k(a) {
                --E || (a({
                    type: "zoomend"
                }), q = null)
            }

            function l() {
                function a() {
                    h = 1, f(hg.mouse(e), m), j(g)
                }

                function d() {
                    l.on(G, null).on(H, null), n(h), k(g)
                }
                var e = this,
                    g = J.of(e, arguments),
                    h = 0,
                    l = hg.select(b(e)).on(G, a).on(H, d),
                    m = c(hg.mouse(e)),
                    n = X(e);
                Ki.call(e), i(g)
            }

            function m() {
                function a() {
                    var a = hg.touches(o);
                    return n = z.k, a.forEach(function(a) {
                        a.identifier in q && (q[a.identifier] = c(a))
                    }), a
                }

                function b() {
                    var b = hg.event.target;
                    hg.select(b).on(u, d).on(v, h), w.push(b);
                    for (var c = hg.event.changedTouches, e = 0, f = c.length; e < f; ++e) q[c[e].identifier] = null;
                    var i = a(),
                        j = Date.now();
                    if (1 === i.length) {
                        if (j - t < 500) {
                            var k = i[0];
                            g(o, k, q[k.identifier], Math.floor(Math.log(z.k) / Math.LN2) + 1), y()
                        }
                        t = j
                    } else if (i.length > 1) {
                        var k = i[0],
                            l = i[1],
                            m = k[0] - l[0],
                            n = k[1] - l[1];
                        r = m * m + n * n
                    }
                }

                function d() {
                    var a, b, c, d, g = hg.touches(o);
                    Ki.call(o);
                    for (var h = 0, i = g.length; h < i; ++h, d = null)
                        if (c = g[h], d = q[c.identifier]) {
                            if (b) break;
                            a = c, b = d
                        }
                    if (d) {
                        var k = (k = c[0] - a[0]) * k + (k = c[1] - a[1]) * k,
                            l = r && Math.sqrt(k / r);
                        a = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2], b = [(b[0] + d[0]) / 2, (b[1] + d[1]) / 2], e(l * n)
                    }
                    t = null, f(a, b), j(p)
                }

                function h() {
                    if (hg.event.touches.length) {
                        for (var b = hg.event.changedTouches, c = 0, d = b.length; c < d; ++c) delete q[b[c].identifier];
                        for (var e in q) return void a()
                    }
                    hg.selectAll(w).on(s, null), x.on(F, l).on(I, m), A(), k(p)
                }
                var n, o = this,
                    p = J.of(o, arguments),
                    q = {},
                    r = 0,
                    s = ".zoom-" + hg.event.changedTouches[0].identifier,
                    u = "touchmove" + s,
                    v = "touchend" + s,
                    w = [],
                    x = hg.select(o),
                    A = X(o);
                b(), i(p), x.on(F, null).on(I, b)
            }

            function n() {
                var a = J.of(this, arguments);
                s ? clearTimeout(s) : (Ki.call(this), p = c(q = r || hg.mouse(this)), i(a)), s = setTimeout(function() {
                    s = null, k(a)
                }, 50), y(), e(Math.pow(2, .002 * Qg()) * z.k), f(q, p), j(a)
            }

            function o() {
                var a = hg.mouse(this),
                    b = Math.log(z.k) / Math.LN2;
                g(this, a, c(a), hg.event.shiftKey ? Math.ceil(b) - 1 : Math.floor(b) + 1)
            }
            var p, q, r, s, t, u, v, w, x, z = {
                    x: 0,
                    y: 0,
                    k: 1
                },
                B = [960, 500],
                C = Sg,
                D = 250,
                E = 0,
                F = "mousedown.zoom",
                G = "mousemove.zoom",
                H = "mouseup.zoom",
                I = "touchstart.zoom",
                J = A(a, "zoomstart", "zoom", "zoomend");
            return Rg || (Rg = "onwheel" in kg ? (Qg = function() {
                return -hg.event.deltaY * (hg.event.deltaMode ? 120 : 1)
            }, "wheel") : "onmousewheel" in kg ? (Qg = function() {
                return hg.event.wheelDelta
            }, "mousewheel") : (Qg = function() {
                return -hg.event.detail
            }, "MozMousePixelScroll")), a.event = function(a) {
                a.each(function() {
                    var a = J.of(this, arguments),
                        b = z;
                    Ii ? hg.select(this).transition().each("start.zoom", function() {
                        z = this.__chart__ || {
                            x: 0,
                            y: 0,
                            k: 1
                        }, i(a)
                    }).tween("zoom:zoom", function() {
                        var c = B[0],
                            d = B[1],
                            e = q ? q[0] : c / 2,
                            f = q ? q[1] : d / 2,
                            g = hg.interpolateZoom([(e - z.x) / z.k, (f - z.y) / z.k, c / z.k], [(e - b.x) / b.k, (f - b.y) / b.k, c / b.k]);
                        return function(b) {
                            var d = g(b),
                                h = c / d[2];
                            this.__chart__ = z = {
                                x: e - d[0] * h,
                                y: f - d[1] * h,
                                k: h
                            }, j(a)
                        }
                    }).each("interrupt.zoom", function() {
                        k(a)
                    }).each("end.zoom", function() {
                        k(a)
                    }) : (this.__chart__ = z, i(a), j(a), k(a))
                })
            }, a.translate = function(b) {
                return arguments.length ? (z = {
                    x: +b[0],
                    y: +b[1],
                    k: z.k
                }, h(), a) : [z.x, z.y]
            }, a.scale = function(b) {
                return arguments.length ? (z = {
                    x: z.x,
                    y: z.y,
                    k: null
                }, e(+b), h(), a) : z.k
            }, a.scaleExtent = function(b) {
                return arguments.length ? (C = null == b ? Sg : [+b[0], +b[1]], a) : C
            }, a.center = function(b) {
                return arguments.length ? (r = b && [+b[0], +b[1]], a) : r
            }, a.size = function(b) {
                return arguments.length ? (B = b && [+b[0], +b[1]], a) : B
            }, a.duration = function(b) {
                return arguments.length ? (D = +b, a) : D
            }, a.x = function(b) {
                return arguments.length ? (v = b, u = b.copy(), z = {
                    x: 0,
                    y: 0,
                    k: 1
                }, a) : v
            }, a.y = function(b) {
                return arguments.length ? (x = b, w = b.copy(), z = {
                    x: 0,
                    y: 0,
                    k: 1
                }, a) : x
            }, hg.rebind(a, J, "on")
        };
        var Qg, Rg, Sg = [0, 1 / 0];
        hg.color = ga, ga.prototype.toString = function() {
            return this.rgb() + ""
        }, hg.hsl = ha;
        var Tg = ha.prototype = new ga;
        Tg.brighter = function(a) {
            return a = Math.pow(.7, arguments.length ? a : 1), new ha(this.h, this.s, this.l / a)
        }, Tg.darker = function(a) {
            return a = Math.pow(.7, arguments.length ? a : 1), new ha(this.h, this.s, a * this.l)
        }, Tg.rgb = function() {
            return ia(this.h, this.s, this.l)
        }, hg.hcl = ja;
        var Ug = ja.prototype = new ga;
        Ug.brighter = function(a) {
            return new ja(this.h, this.c, Math.min(100, this.l + Vg * (arguments.length ? a : 1)))
        }, Ug.darker = function(a) {
            return new ja(this.h, this.c, Math.max(0, this.l - Vg * (arguments.length ? a : 1)))
        }, Ug.rgb = function() {
            return ka(this.h, this.c, this.l).rgb()
        }, hg.lab = la;
        var Vg = 18,
            Wg = .95047,
            Xg = 1,
            Yg = 1.08883,
            Zg = la.prototype = new ga;
        Zg.brighter = function(a) {
            return new la(Math.min(100, this.l + Vg * (arguments.length ? a : 1)), this.a, this.b)
        }, Zg.darker = function(a) {
            return new la(Math.max(0, this.l - Vg * (arguments.length ? a : 1)), this.a, this.b)
        }, Zg.rgb = function() {
            return ma(this.l, this.a, this.b)
        }, hg.rgb = ra;
        var $g = ra.prototype = new ga;
        $g.brighter = function(a) {
            a = Math.pow(.7, arguments.length ? a : 1);
            var b = this.r,
                c = this.g,
                d = this.b,
                e = 30;
            return b || c || d ? (b && b < e && (b = e), c && c < e && (c = e), d && d < e && (d = e), new ra(Math.min(255, b / a), Math.min(255, c / a), Math.min(255, d / a))) : new ra(e, e, e)
        }, $g.darker = function(a) {
            return a = Math.pow(.7, arguments.length ? a : 1), new ra(a * this.r, a * this.g, a * this.b)
        }, $g.hsl = function() {
            return wa(this.r, this.g, this.b)
        }, $g.toString = function() {
            return "#" + ua(this.r) + ua(this.g) + ua(this.b)
        };
        var _g = hg.map({
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        });
        _g.forEach(function(a, b) {
            _g.set(a, sa(b))
        }), hg.functor = Aa, hg.xhr = Ba(s), hg.dsv = function(a, b) {
            function c(a, c, f) {
                arguments.length < 3 && (f = c, c = null);
                var g = Ca(a, b, null == c ? d : e(c), f);
                return g.row = function(a) {
                    return arguments.length ? g.response(null == (c = a) ? d : e(a)) : c
                }, g
            }

            function d(a) {
                return c.parse(a.responseText)
            }

            function e(a) {
                return function(b) {
                    return c.parse(b.responseText, a)
                }
            }

            function f(b) {
                return b.map(g).join(a)
            }

            function g(a) {
                return h.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a
            }
            var h = new RegExp('["' + a + "\n]"),
                i = a.charCodeAt(0);
            return c.parse = function(a, b) {
                var d;
                return c.parseRows(a, function(a, c) {
                    if (d) return d(a, c - 1);
                    var e = new Function("d", "return {" + a.map(function(a, b) {
                        return JSON.stringify(a) + ": d[" + b + "]"
                    }).join(",") + "}");
                    d = b ? function(a, c) {
                        return b(e(a), c)
                    } : e
                })
            }, c.parseRows = function(a, b) {
                function c() {
                    if (k >= j) return g;
                    if (e) return e = !1, f;
                    var b = k;
                    if (34 === a.charCodeAt(b)) {
                        for (var c = b; c++ < j;)
                            if (34 === a.charCodeAt(c)) {
                                if (34 !== a.charCodeAt(c + 1)) break;
                                ++c
                            }
                        k = c + 2;
                        var d = a.charCodeAt(c + 1);
                        return 13 === d ? (e = !0, 10 === a.charCodeAt(c + 2) && ++k) : 10 === d && (e = !0), a.slice(b + 1, c).replace(/""/g, '"')
                    }
                    for (; k < j;) {
                        var d = a.charCodeAt(k++),
                            h = 1;
                        if (10 === d) e = !0;
                        else if (13 === d) e = !0, 10 === a.charCodeAt(k) && (++k, ++h);
                        else if (d !== i) continue;
                        return a.slice(b, k - h)
                    }
                    return a.slice(b)
                }
                for (var d, e, f = {}, g = {}, h = [], j = a.length, k = 0, l = 0;
                    (d = c()) !== g;) {
                    for (var m = []; d !== f && d !== g;) m.push(d), d = c();
                    b && null == (m = b(m, l++)) || h.push(m)
                }
                return h
            }, c.format = function(b) {
                if (Array.isArray(b[0])) return c.formatRows(b);
                var d = new r,
                    e = [];
                return b.forEach(function(a) {
                    for (var b in a) d.has(b) || e.push(d.add(b))
                }), [e.map(g).join(a)].concat(b.map(function(b) {
                    return e.map(function(a) {
                        return g(b[a])
                    }).join(a)
                })).join("\n")
            }, c.formatRows = function(a) {
                return a.map(f).join("\n")
            }, c
        }, hg.csv = hg.dsv(",", "text/csv"), hg.tsv = hg.dsv("\t", "text/tab-separated-values");
        var ah, bh, ch, dh, eh = this[u(this, "requestAnimationFrame")] || function(a) {
            setTimeout(a, 17)
        };
        hg.timer = function() {
            Fa.apply(this, arguments)
        }, hg.timer.flush = function() {
            Ha(), Ia()
        }, hg.round = function(a, b) {
            return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
        };
        var fh = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Ka);
        hg.formatPrefix = function(a, b) {
            var c = 0;
            return (a = +a) && (a < 0 && (a *= -1), b && (a = hg.round(a, Ja(a, b))), c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), c = Math.max(-24, Math.min(24, 3 * Math.floor((c - 1) / 3)))), fh[8 + c / 3]
        };
        var gh = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
            hh = hg.map({
                b: function(a) {
                    return a.toString(2)
                },
                c: function(a) {
                    return String.fromCharCode(a)
                },
                o: function(a) {
                    return a.toString(8)
                },
                x: function(a) {
                    return a.toString(16)
                },
                X: function(a) {
                    return a.toString(16).toUpperCase()
                },
                g: function(a, b) {
                    return a.toPrecision(b)
                },
                e: function(a, b) {
                    return a.toExponential(b)
                },
                f: function(a, b) {
                    return a.toFixed(b)
                },
                r: function(a, b) {
                    return (a = hg.round(a, Ja(a, b))).toFixed(Math.max(0, Math.min(20, Ja(a * (1 + 1e-15), b))))
                }
            }),
            ih = hg.time = {},
            jh = Date;
        Na.prototype = {
            getDate: function() {
                return this._.getUTCDate()
            },
            getDay: function() {
                return this._.getUTCDay()
            },
            getFullYear: function() {
                return this._.getUTCFullYear()
            },
            getHours: function() {
                return this._.getUTCHours()
            },
            getMilliseconds: function() {
                return this._.getUTCMilliseconds()
            },
            getMinutes: function() {
                return this._.getUTCMinutes()
            },
            getMonth: function() {
                return this._.getUTCMonth()
            },
            getSeconds: function() {
                return this._.getUTCSeconds()
            },
            getTime: function() {
                return this._.getTime()
            },
            getTimezoneOffset: function() {
                return 0
            },
            valueOf: function() {
                return this._.valueOf()
            },
            setDate: function() {
                kh.setUTCDate.apply(this._, arguments)
            },
            setDay: function() {
                kh.setUTCDay.apply(this._, arguments)
            },
            setFullYear: function() {
                kh.setUTCFullYear.apply(this._, arguments)
            },
            setHours: function() {
                kh.setUTCHours.apply(this._, arguments)
            },
            setMilliseconds: function() {
                kh.setUTCMilliseconds.apply(this._, arguments)
            },
            setMinutes: function() {
                kh.setUTCMinutes.apply(this._, arguments)
            },
            setMonth: function() {
                kh.setUTCMonth.apply(this._, arguments)
            },
            setSeconds: function() {
                kh.setUTCSeconds.apply(this._, arguments)
            },
            setTime: function() {
                kh.setTime.apply(this._, arguments)
            }
        };
        var kh = Date.prototype;
        ih.year = Oa(function(a) {
            return a = ih.day(a), a.setMonth(0, 1), a
        }, function(a, b) {
            a.setFullYear(a.getFullYear() + b)
        }, function(a) {
            return a.getFullYear()
        }), ih.years = ih.year.range, ih.years.utc = ih.year.utc.range, ih.day = Oa(function(a) {
            var b = new jh(2e3, 0);
            return b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), b
        }, function(a, b) {
            a.setDate(a.getDate() + b)
        }, function(a) {
            return a.getDate() - 1
        }), ih.days = ih.day.range, ih.days.utc = ih.day.utc.range, ih.dayOfYear = function(a) {
            var b = ih.year(a);
            return Math.floor((a - b - 6e4 * (a.getTimezoneOffset() - b.getTimezoneOffset())) / 864e5)
        }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(a, b) {
            b = 7 - b;
            var c = ih[a] = Oa(function(a) {
                return (a = ih.day(a)).setDate(a.getDate() - (a.getDay() + b) % 7), a
            }, function(a, b) {
                a.setDate(a.getDate() + 7 * Math.floor(b))
            }, function(a) {
                var c = ih.year(a).getDay();
                return Math.floor((ih.dayOfYear(a) + (c + b) % 7) / 7) - (c !== b)
            });
            ih[a + "s"] = c.range, ih[a + "s"].utc = c.utc.range, ih[a + "OfYear"] = function(a) {
                var c = ih.year(a).getDay();
                return Math.floor((ih.dayOfYear(a) + (c + b) % 7) / 7)
            }
        }), ih.week = ih.sunday, ih.weeks = ih.sunday.range, ih.weeks.utc = ih.sunday.utc.range, ih.weekOfYear = ih.sundayOfYear;
        var lh = {
                "-": "",
                _: " ",
                0: "0"
            },
            mh = /^\s*\d+/,
            nh = /^%/;
        hg.locale = function(a) {
            return {
                numberFormat: La(a),
                timeFormat: Qa(a)
            }
        };
        var oh = hg.locale({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            dateTime: "%a %b %e %X %Y",
            date: "%m/%d/%Y",
            time: "%H:%M:%S",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        hg.format = oh.numberFormat, hg.geo = {}, jb.prototype = {
            s: 0,
            t: 0,
            add: function(a) {
                kb(a, this.t, ph), kb(ph.s, this.s, this), this.s ? this.t += ph.t : this.s = ph.t
            },
            reset: function() {
                this.s = this.t = 0
            },
            valueOf: function() {
                return this.s
            }
        };
        var ph = new jb;
        hg.geo.stream = function(a, b) {
            a && qh.hasOwnProperty(a.type) ? qh[a.type](a, b) : lb(a, b)
        };
        var qh = {
                Feature: function(a, b) {
                    lb(a.geometry, b)
                },
                FeatureCollection: function(a, b) {
                    for (var c = a.features, d = -1, e = c.length; ++d < e;) lb(c[d].geometry, b)
                }
            },
            rh = {
                Sphere: function(a, b) {
                    b.sphere()
                },
                Point: function(a, b) {
                    a = a.coordinates, b.point(a[0], a[1], a[2])
                },
                MultiPoint: function(a, b) {
                    for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) a = c[d], b.point(a[0], a[1], a[2])
                },
                LineString: function(a, b) {
                    mb(a.coordinates, b, 0)
                },
                MultiLineString: function(a, b) {
                    for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) mb(c[d], b, 0)
                },
                Polygon: function(a, b) {
                    nb(a.coordinates, b)
                },
                MultiPolygon: function(a, b) {
                    for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) nb(c[d], b)
                },
                GeometryCollection: function(a, b) {
                    for (var c = a.geometries, d = -1, e = c.length; ++d < e;) lb(c[d], b)
                }
            };
        hg.geo.area = function(a) {
            return sh = 0, hg.geo.stream(a, uh), sh
        };
        var sh, th = new jb,
            uh = {
                sphere: function() {
                    sh += 4 * Jg
                },
                point: v,
                lineStart: v,
                lineEnd: v,
                polygonStart: function() {
                    th.reset(), uh.lineStart = ob
                },
                polygonEnd: function() {
                    var a = 2 * th;
                    sh += a < 0 ? 4 * Jg + a : a, uh.lineStart = uh.lineEnd = uh.point = v
                }
            };
        hg.geo.bounds = function() {
            function a(a, b) {
                t.push(u = [k = a, m = a]), b < l && (l = b), b > n && (n = b)
            }

            function b(b, c) {
                var d = pb([b * Ng, c * Ng]);
                if (r) {
                    var e = rb(r, d),
                        f = [e[1], -e[0], 0],
                        g = rb(f, e);
                    ub(g), g = vb(g);
                    var i = b - o,
                        j = i > 0 ? 1 : -1,
                        p = g[0] * Og * j,
                        q = rg(i) > 180;
                    if (q ^ (j * o < p && p < j * b)) {
                        var s = g[1] * Og;
                        s > n && (n = s)
                    } else if (p = (p + 360) % 360 - 180, q ^ (j * o < p && p < j * b)) {
                        var s = -g[1] * Og;
                        s < l && (l = s)
                    } else c < l && (l = c), c > n && (n = c);
                    q ? b < o ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b) : m >= k ? (b < k && (k = b), b > m && (m = b)) : b > o ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b)
                } else a(b, c);
                r = d, o = b
            }

            function c() {
                v.point = b
            }

            function d() {
                u[0] = k, u[1] = m, v.point = a, r = null
            }

            function e(a, c) {
                if (r) {
                    var d = a - o;
                    s += rg(d) > 180 ? d + (d > 0 ? 360 : -360) : d
                } else p = a, q = c;
                uh.point(a, c), b(a, c)
            }

            function f() {
                uh.lineStart()
            }

            function g() {
                e(p, q), uh.lineEnd(), rg(s) > Hg && (k = -(m = 180)), u[0] = k, u[1] = m, r = null
            }

            function h(a, b) {
                return (b -= a) < 0 ? b + 360 : b
            }

            function i(a, b) {
                return a[0] - b[0]
            }

            function j(a, b) {
                return b[0] <= b[1] ? b[0] <= a && a <= b[1] : a < b[0] || b[1] < a
            }
            var k, l, m, n, o, p, q, r, s, t, u, v = {
                point: a,
                lineStart: c,
                lineEnd: d,
                polygonStart: function() {
                    v.point = e, v.lineStart = f, v.lineEnd = g, s = 0, uh.polygonStart()
                },
                polygonEnd: function() {
                    uh.polygonEnd(), v.point = a, v.lineStart = c, v.lineEnd = d, th < 0 ? (k = -(m = 180), l = -(n = 90)) : s > Hg ? n = 90 : s < -Hg && (l = -90), u[0] = k, u[1] = m
                }
            };
            return function(a) {
                n = m = -(k = l = 1 / 0), t = [], hg.geo.stream(a, v);
                var b = t.length;
                if (b) {
                    t.sort(i);
                    for (var c, d = 1, e = t[0], f = [e]; d < b; ++d) c = t[d], j(c[0], e) || j(c[1], e) ? (h(e[0], c[1]) > h(e[0], e[1]) && (e[1] = c[1]), h(c[0], e[1]) > h(e[0], e[1]) && (e[0] = c[0])) : f.push(e = c);
                    for (var g, c, o = -1 / 0, b = f.length - 1, d = 0, e = f[b]; d <= b; e = c, ++d) c = f[d], (g = h(e[1], c[0])) > o && (o = g, k = c[0], m = e[1])
                }
                return t = u = null, k === 1 / 0 || l === 1 / 0 ? [
                    [NaN, NaN],
                    [NaN, NaN]
                ] : [
                    [k, l],
                    [m, n]
                ]
            }
        }(), hg.geo.centroid = function(a) {
            vh = wh = xh = yh = zh = Ah = Bh = Ch = Dh = Eh = Fh = 0, hg.geo.stream(a, Gh);
            var b = Dh,
                c = Eh,
                d = Fh,
                e = b * b + c * c + d * d;
            return e < Ig && (b = Ah, c = Bh, d = Ch, wh < Hg && (b = xh, c = yh, d = zh), (e = b * b + c * c + d * d) < Ig) ? [NaN, NaN] : [Math.atan2(c, b) * Og, ba(d / Math.sqrt(e)) * Og]
        };
        var vh, wh, xh, yh, zh, Ah, Bh, Ch, Dh, Eh, Fh, Gh = {
                sphere: v,
                point: xb,
                lineStart: zb,
                lineEnd: Ab,
                polygonStart: function() {
                    Gh.lineStart = Bb
                },
                polygonEnd: function() {
                    Gh.lineStart = zb
                }
            },
            Hh = Hb(Db, Lb, Nb, [-Jg, -Jg / 2]),
            Ih = 1e9;
        hg.geo.clipExtent = function() {
            var a, b, c, d, e, f, g = {
                stream: function(a) {
                    return e && (e.valid = !1), e = f(a), e.valid = !0, e
                },
                extent: function(h) {
                    return arguments.length ? (f = Rb(a = +h[0][0], b = +h[0][1], c = +h[1][0], d = +h[1][1]), e && (e.valid = !1, e = null), g) : [
                        [a, b],
                        [c, d]
                    ]
                }
            };
            return g.extent([
                [0, 0],
                [960, 500]
            ])
        }, (hg.geo.conicEqualArea = function() {
            return Sb(Tb)
        }).raw = Tb, hg.geo.albers = function() {
            return hg.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
        }, hg.geo.albersUsa = function() {
            function a(a) {
                var f = a[0],
                    g = a[1];
                return b = null, c(f, g), b || (d(f, g), b) || e(f, g), b
            }
            var b, c, d, e, f = hg.geo.albers(),
                g = hg.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                h = hg.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                i = {
                    point: function(a, c) {
                        b = [a, c]
                    }
                };
            return a.invert = function(a) {
                var b = f.scale(),
                    c = f.translate(),
                    d = (a[0] - c[0]) / b,
                    e = (a[1] - c[1]) / b;
                return (e >= .12 && e < .234 && d >= -.425 && d < -.214 ? g : e >= .166 && e < .234 && d >= -.214 && d < -.115 ? h : f).invert(a)
            }, a.stream = function(a) {
                var b = f.stream(a),
                    c = g.stream(a),
                    d = h.stream(a);
                return {
                    point: function(a, e) {
                        b.point(a, e), c.point(a, e), d.point(a, e)
                    },
                    sphere: function() {
                        b.sphere(), c.sphere(), d.sphere()
                    },
                    lineStart: function() {
                        b.lineStart(), c.lineStart(), d.lineStart()
                    },
                    lineEnd: function() {
                        b.lineEnd(), c.lineEnd(), d.lineEnd()
                    },
                    polygonStart: function() {
                        b.polygonStart(), c.polygonStart(), d.polygonStart()
                    },
                    polygonEnd: function() {
                        b.polygonEnd(), c.polygonEnd(), d.polygonEnd()
                    }
                }
            }, a.precision = function(b) {
                return arguments.length ? (f.precision(b), g.precision(b), h.precision(b), a) : f.precision()
            }, a.scale = function(b) {
                return arguments.length ? (f.scale(b), g.scale(.35 * b), h.scale(b), a.translate(f.translate())) : f.scale()
            }, a.translate = function(b) {
                if (!arguments.length) return f.translate();
                var j = f.scale(),
                    k = +b[0],
                    l = +b[1];
                return c = f.translate(b).clipExtent([
                    [k - .455 * j, l - .238 * j],
                    [k + .455 * j, l + .238 * j]
                ]).stream(i).point, d = g.translate([k - .307 * j, l + .201 * j]).clipExtent([
                    [k - .425 * j + Hg, l + .12 * j + Hg],
                    [k - .214 * j - Hg, l + .234 * j - Hg]
                ]).stream(i).point, e = h.translate([k - .205 * j, l + .212 * j]).clipExtent([
                    [k - .214 * j + Hg, l + .166 * j + Hg],
                    [k - .115 * j - Hg, l + .234 * j - Hg]
                ]).stream(i).point, a
            }, a.scale(1070)
        };
        var Jh, Kh, Lh, Mh, Nh, Oh, Ph = {
                point: v,
                lineStart: v,
                lineEnd: v,
                polygonStart: function() {
                    Kh = 0, Ph.lineStart = Ub
                },
                polygonEnd: function() {
                    Ph.lineStart = Ph.lineEnd = Ph.point = v, Jh += rg(Kh / 2)
                }
            },
            Qh = {
                point: Vb,
                lineStart: v,
                lineEnd: v,
                polygonStart: v,
                polygonEnd: v
            },
            Rh = {
                point: Yb,
                lineStart: Zb,
                lineEnd: $b,
                polygonStart: function() {
                    Rh.lineStart = _b
                },
                polygonEnd: function() {
                    Rh.point = Yb, Rh.lineStart = Zb, Rh.lineEnd = $b
                }
            };
        hg.geo.path = function() {
            function a(a) {
                return a && ("function" == typeof h && f.pointRadius(+h.apply(this, arguments)), g && g.valid || (g = e(f)), hg.geo.stream(a, g)), f.result()
            }

            function b() {
                return g = null, a
            }
            var c, d, e, f, g, h = 4.5;
            return a.area = function(a) {
                return Jh = 0, hg.geo.stream(a, e(Ph)), Jh
            }, a.centroid = function(a) {
                return xh = yh = zh = Ah = Bh = Ch = Dh = Eh = Fh = 0, hg.geo.stream(a, e(Rh)), Fh ? [Dh / Fh, Eh / Fh] : Ch ? [Ah / Ch, Bh / Ch] : zh ? [xh / zh, yh / zh] : [NaN, NaN]
            }, a.bounds = function(a) {
                return Nh = Oh = -(Lh = Mh = 1 / 0), hg.geo.stream(a, e(Qh)), [
                    [Lh, Mh],
                    [Nh, Oh]
                ]
            }, a.projection = function(a) {
                return arguments.length ? (e = (c = a) ? a.stream || cc(a) : s, b()) : c
            }, a.context = function(a) {
                return arguments.length ? (f = null == (d = a) ? new Wb : new ac(a), "function" != typeof h && f.pointRadius(h), b()) : d
            }, a.pointRadius = function(b) {
                return arguments.length ? (h = "function" == typeof b ? b : (f.pointRadius(+b), +b), a) : h
            }, a.projection(hg.geo.albersUsa()).context(null)
        }, hg.geo.transform = function(a) {
            return {
                stream: function(b) {
                    var c = new dc(b);
                    for (var d in a) c[d] = a[d];
                    return c
                }
            }
        }, dc.prototype = {
            point: function(a, b) {
                this.stream.point(a, b)
            },
            sphere: function() {
                this.stream.sphere()
            },
            lineStart: function() {
                this.stream.lineStart()
            },
            lineEnd: function() {
                this.stream.lineEnd()
            },
            polygonStart: function() {
                this.stream.polygonStart()
            },
            polygonEnd: function() {
                this.stream.polygonEnd()
            }
        }, hg.geo.projection = fc, hg.geo.projectionMutator = gc, (hg.geo.equirectangular = function() {
            return fc(ic)
        }).raw = ic.invert = ic, hg.geo.rotation = function(a) {
            function b(b) {
                return b = a(b[0] * Ng, b[1] * Ng), b[0] *= Og, b[1] *= Og, b
            }
            return a = kc(a[0] % 360 * Ng, a[1] * Ng, a.length > 2 ? a[2] * Ng : 0), b.invert = function(b) {
                return b = a.invert(b[0] * Ng, b[1] * Ng), b[0] *= Og, b[1] *= Og, b
            }, b
        }, jc.invert = ic, hg.geo.circle = function() {
            function a() {
                var a = "function" == typeof d ? d.apply(this, arguments) : d,
                    b = kc(-a[0] * Ng, -a[1] * Ng, 0).invert,
                    e = [];
                return c(null, null, 1, {
                    point: function(a, c) {
                        e.push(a = b(a, c)), a[0] *= Og, a[1] *= Og
                    }
                }), {
                    type: "Polygon",
                    coordinates: [e]
                }
            }
            var b, c, d = [0, 0],
                e = 6;
            return a.origin = function(b) {
                return arguments.length ? (d = b, a) : d
            }, a.angle = function(d) {
                return arguments.length ? (c = oc((b = +d) * Ng, e * Ng), a) : b
            }, a.precision = function(d) {
                return arguments.length ? (c = oc(b * Ng, (e = +d) * Ng), a) : e
            }, a.angle(90)
        }, hg.geo.distance = function(a, b) {
            var c, d = (b[0] - a[0]) * Ng,
                e = a[1] * Ng,
                f = b[1] * Ng,
                g = Math.sin(d),
                h = Math.cos(d),
                i = Math.sin(e),
                j = Math.cos(e),
                k = Math.sin(f),
                l = Math.cos(f);
            return Math.atan2(Math.sqrt((c = l * g) * c + (c = j * k - i * l * h) * c), i * k + j * l * h)
        }, hg.geo.graticule = function() {
            function a() {
                return {
                    type: "MultiLineString",
                    coordinates: b()
                }
            }

            function b() {
                return hg.range(Math.ceil(f / q) * q, e, q).map(m).concat(hg.range(Math.ceil(j / r) * r, i, r).map(n)).concat(hg.range(Math.ceil(d / o) * o, c, o).filter(function(a) {
                    return rg(a % q) > Hg
                }).map(k)).concat(hg.range(Math.ceil(h / p) * p, g, p).filter(function(a) {
                    return rg(a % r) > Hg
                }).map(l))
            }
            var c, d, e, f, g, h, i, j, k, l, m, n, o = 10,
                p = o,
                q = 90,
                r = 360,
                s = 2.5;
            return a.lines = function() {
                return b().map(function(a) {
                    return {
                        type: "LineString",
                        coordinates: a
                    }
                })
            }, a.outline = function() {
                return {
                    type: "Polygon",
                    coordinates: [m(f).concat(n(i).slice(1), m(e).reverse().slice(1), n(j).reverse().slice(1))]
                }
            }, a.extent = function(b) {
                return arguments.length ? a.majorExtent(b).minorExtent(b) : a.minorExtent()
            }, a.majorExtent = function(b) {
                return arguments.length ? (f = +b[0][0], e = +b[1][0], j = +b[0][1], i = +b[1][1], f > e && (b = f, f = e, e = b), j > i && (b = j, j = i, i = b), a.precision(s)) : [
                    [f, j],
                    [e, i]
                ]
            }, a.minorExtent = function(b) {
                return arguments.length ? (d = +b[0][0], c = +b[1][0], h = +b[0][1], g = +b[1][1], d > c && (b = d, d = c, c = b), h > g && (b = h, h = g, g = b), a.precision(s)) : [
                    [d, h],
                    [c, g]
                ]
            }, a.step = function(b) {
                return arguments.length ? a.majorStep(b).minorStep(b) : a.minorStep()
            }, a.majorStep = function(b) {
                return arguments.length ? (q = +b[0], r = +b[1], a) : [q, r]
            }, a.minorStep = function(b) {
                return arguments.length ? (o = +b[0], p = +b[1], a) : [o, p]
            }, a.precision = function(b) {
                return arguments.length ? (s = +b, k = qc(h, g, 90), l = rc(d, c, s), m = qc(j, i, 90), n = rc(f, e, s), a) : s
            }, a.majorExtent([
                [-180, -90 + Hg],
                [180, 90 - Hg]
            ]).minorExtent([
                [-180, -80 - Hg],
                [180, 80 + Hg]
            ])
        }, hg.geo.greatArc = function() {
            function a() {
                return {
                    type: "LineString",
                    coordinates: [b || d.apply(this, arguments), c || e.apply(this, arguments)]
                }
            }
            var b, c, d = sc,
                e = tc;
            return a.distance = function() {
                return hg.geo.distance(b || d.apply(this, arguments), c || e.apply(this, arguments))
            }, a.source = function(c) {
                return arguments.length ? (d = c, b = "function" == typeof c ? null : c, a) : d
            }, a.target = function(b) {
                return arguments.length ? (e = b, c = "function" == typeof b ? null : b, a) : e
            }, a.precision = function() {
                return arguments.length ? a : 0
            }, a
        }, hg.geo.interpolate = function(a, b) {
            return uc(a[0] * Ng, a[1] * Ng, b[0] * Ng, b[1] * Ng)
        }, hg.geo.length = function(a) {
            return Sh = 0, hg.geo.stream(a, Th), Sh
        };
        var Sh, Th = {
                sphere: v,
                point: v,
                lineStart: vc,
                lineEnd: v,
                polygonStart: v,
                polygonEnd: v
            },
            Uh = wc(function(a) {
                return Math.sqrt(2 / (1 + a))
            }, function(a) {
                return 2 * Math.asin(a / 2)
            });
        (hg.geo.azimuthalEqualArea = function() {
            return fc(Uh)
        }).raw = Uh;
        var Vh = wc(function(a) {
            var b = Math.acos(a);
            return b && b / Math.sin(b)
        }, s);
        (hg.geo.azimuthalEquidistant = function() {
            return fc(Vh)
        }).raw = Vh, (hg.geo.conicConformal = function() {
            return Sb(xc)
        }).raw = xc, (hg.geo.conicEquidistant = function() {
            return Sb(yc)
        }).raw = yc;
        var Wh = wc(function(a) {
            return 1 / a
        }, Math.atan);
        (hg.geo.gnomonic = function() {
            return fc(Wh)
        }).raw = Wh, zc.invert = function(a, b) {
            return [a, 2 * Math.atan(Math.exp(b)) - Mg]
        }, (hg.geo.mercator = function() {
            return Ac(zc)
        }).raw = zc;
        var Xh = wc(function() {
            return 1
        }, Math.asin);
        (hg.geo.orthographic = function() {
            return fc(Xh)
        }).raw = Xh;
        var Yh = wc(function(a) {
            return 1 / (1 + a)
        }, function(a) {
            return 2 * Math.atan(a)
        });
        (hg.geo.stereographic = function() {
            return fc(Yh)
        }).raw = Yh, Bc.invert = function(a, b) {
            return [-b, 2 * Math.atan(Math.exp(a)) - Mg]
        }, (hg.geo.transverseMercator = function() {
            var a = Ac(Bc),
                b = a.center,
                c = a.rotate;
            return a.center = function(a) {
                return a ? b([-a[1], a[0]]) : (a = b(), [a[1], -a[0]])
            }, a.rotate = function(a) {
                return a ? c([a[0], a[1], a.length > 2 ? a[2] + 90 : 90]) : (a = c(), [a[0], a[1], a[2] - 90])
            }, c([0, 0, 90])
        }).raw = Bc, hg.geom = {}, hg.geom.hull = function(a) {
            function b(a) {
                if (a.length < 3) return [];
                var b, e = Aa(c),
                    f = Aa(d),
                    g = a.length,
                    h = [],
                    i = [];
                for (b = 0; b < g; b++) h.push([+e.call(this, a[b], b), +f.call(this, a[b], b), b]);
                for (h.sort(Fc), b = 0; b < g; b++) i.push([h[b][0], -h[b][1]]);
                var j = Ec(h),
                    k = Ec(i),
                    l = k[0] === j[0],
                    m = k[k.length - 1] === j[j.length - 1],
                    n = [];
                for (b = j.length - 1; b >= 0; --b) n.push(a[h[j[b]][2]]);
                for (b = +l; b < k.length - m; ++b) n.push(a[h[k[b]][2]]);
                return n
            }
            var c = Cc,
                d = Dc;
            return arguments.length ? b(a) : (b.x = function(a) {
                return arguments.length ? (c = a, b) : c
            }, b.y = function(a) {
                return arguments.length ? (d = a, b) : d
            }, b)
        }, hg.geom.polygon = function(a) {
            return wg(a, Zh), a
        };
        var Zh = hg.geom.polygon.prototype = [];
        Zh.area = function() {
            for (var a, b = -1, c = this.length, d = this[c - 1], e = 0; ++b < c;) a = d, d = this[b], e += a[1] * d[0] - a[0] * d[1];
            return .5 * e
        }, Zh.centroid = function(a) {
            var b, c, d = -1,
                e = this.length,
                f = 0,
                g = 0,
                h = this[e - 1];
            for (arguments.length || (a = -1 / (6 * this.area())); ++d < e;) b = h, h = this[d], c = b[0] * h[1] - h[0] * b[1], f += (b[0] + h[0]) * c, g += (b[1] + h[1]) * c;
            return [f * a, g * a]
        }, Zh.clip = function(a) {
            for (var b, c, d, e, f, g, h = Ic(a), i = -1, j = this.length - Ic(this), k = this[j - 1]; ++i < j;) {
                for (b = a.slice(), a.length = 0, e = this[i], f = b[(d = b.length - h) - 1], c = -1; ++c < d;) g = b[c], Gc(g, k, e) ? (Gc(f, k, e) || a.push(Hc(f, g, k, e)), a.push(g)) : Gc(f, k, e) && a.push(Hc(f, g, k, e)), f = g;
                h && a.push(a[0]), k = e
            }
            return a
        };
        var $h, _h, ai, bi, ci, di = [],
            ei = [];
        Qc.prototype.prepare = function() {
            for (var a, b = this.edges, c = b.length; c--;) a = b[c].edge, a.b && a.a || b.splice(c, 1);
            return b.sort(Sc), b.length
        }, ad.prototype = {
            start: function() {
                return this.edge.l === this.site ? this.edge.a : this.edge.b
            },
            end: function() {
                return this.edge.l === this.site ? this.edge.b : this.edge.a
            }
        }, bd.prototype = {
            insert: function(a, b) {
                var c, d, e;
                if (a) {
                    if (b.P = a, b.N = a.N, a.N && (a.N.P = b), a.N = b, a.R) {
                        for (a = a.R; a.L;) a = a.L;
                        a.L = b
                    } else a.R = b;
                    c = a
                } else this._ ? (a = fd(this._), b.P = null, b.N = a, a.P = a.L = b, c = a) : (b.P = b.N = null, this._ = b, c = null);
                for (b.L = b.R = null, b.U = c, b.C = !0, a = b; c && c.C;) d = c.U, c === d.L ? (e = d.R, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.R && (dd(this, c), a = c, c = a.U), c.C = !1, d.C = !0, ed(this, d))) : (e = d.L, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.L && (ed(this, c), a = c, c = a.U), c.C = !1, d.C = !0, dd(this, d))), c = a.U;
                this._.C = !1
            },
            remove: function(a) {
                a.N && (a.N.P = a.P), a.P && (a.P.N = a.N), a.N = a.P = null;
                var b, c, d, e = a.U,
                    f = a.L,
                    g = a.R;
                if (c = f ? g ? fd(g) : f : g, e ? e.L === a ? e.L = c : e.R = c : this._ = c, f && g ? (d = c.C, c.C = a.C, c.L = f, f.U = c, c !== g ? (e = c.U, c.U = a.U, a = c.R, e.L = a, c.R = g, g.U = c) : (c.U = e, e = c, a = c.R)) : (d = a.C, a = c), a && (a.U = e), !d) {
                    if (a && a.C) return void(a.C = !1);
                    do {
                        if (a === this._) break;
                        if (a === e.L) {
                            if (b = e.R, b.C && (b.C = !1, e.C = !0, dd(this, e), b = e.R), b.L && b.L.C || b.R && b.R.C) {
                                b.R && b.R.C || (b.L.C = !1, b.C = !0, ed(this, b), b = e.R), b.C = e.C, e.C = b.R.C = !1, dd(this, e), a = this._;
                                break
                            }
                        } else if (b = e.L, b.C && (b.C = !1, e.C = !0, ed(this, e), b = e.L), b.L && b.L.C || b.R && b.R.C) {
                            b.L && b.L.C || (b.R.C = !1, b.C = !0, dd(this, b), b = e.L), b.C = e.C, e.C = b.L.C = !1, ed(this, e), a = this._;
                            break
                        }
                        b.C = !0, a = e, e = e.U
                    } while (!a.C);
                    a && (a.C = !1)
                }
            }
        }, hg.geom.voronoi = function(a) {
            function b(a) {
                var b = new Array(a.length),
                    d = h[0][0],
                    e = h[0][1],
                    f = h[1][0],
                    g = h[1][1];
                return gd(c(a), h).cells.forEach(function(c, h) {
                    var i = c.edges,
                        j = c.site;
                    (b[h] = i.length ? i.map(function(a) {
                        var b = a.start();
                        return [b.x, b.y]
                    }) : j.x >= d && j.x <= f && j.y >= e && j.y <= g ? [
                        [d, g],
                        [f, g],
                        [f, e],
                        [d, e]
                    ] : []).point = a[h]
                }), b
            }

            function c(a) {
                return a.map(function(a, b) {
                    return {
                        x: Math.round(f(a, b) / Hg) * Hg,
                        y: Math.round(g(a, b) / Hg) * Hg,
                        i: b
                    }
                })
            }
            var d = Cc,
                e = Dc,
                f = d,
                g = e,
                h = fi;
            return a ? b(a) : (b.links = function(a) {
                return gd(c(a)).edges.filter(function(a) {
                    return a.l && a.r
                }).map(function(b) {
                    return {
                        source: a[b.l.i],
                        target: a[b.r.i]
                    }
                })
            }, b.triangles = function(a) {
                var b = [];
                return gd(c(a)).cells.forEach(function(c, d) {
                    for (var e, f = c.site, g = c.edges.sort(Sc), h = -1, i = g.length, j = g[i - 1].edge, k = j.l === f ? j.r : j.l; ++h < i;) j, e = k, j = g[h].edge, k = j.l === f ? j.r : j.l, d < e.i && d < k.i && id(f, e, k) < 0 && b.push([a[d], a[e.i], a[k.i]])
                }), b
            }, b.x = function(a) {
                return arguments.length ? (f = Aa(d = a), b) : d
            }, b.y = function(a) {
                return arguments.length ? (g = Aa(e = a), b) : e
            }, b.clipExtent = function(a) {
                return arguments.length ? (h = null == a ? fi : a, b) : h === fi ? null : h
            }, b.size = function(a) {
                return arguments.length ? b.clipExtent(a && [
                    [0, 0], a
                ]) : h === fi ? null : h && h[1]
            }, b)
        };
        var fi = [
            [-1e6, -1e6],
            [1e6, 1e6]
        ];
        hg.geom.delaunay = function(a) {
            return hg.geom.voronoi().triangles(a)
        }, hg.geom.quadtree = function(a, b, c, d, e) {
            function f(a) {
                function f(a, b, c, d, e, f, g, h) {
                    if (!isNaN(c) && !isNaN(d))
                        if (a.leaf) {
                            var i = a.x,
                                k = a.y;
                            if (null != i)
                                if (rg(i - c) + rg(k - d) < .01) j(a, b, c, d, e, f, g, h);
                                else {
                                    var l = a.point;
                                    a.x = a.y = a.point = null, j(a, l, i, k, e, f, g, h), j(a, b, c, d, e, f, g, h)
                                } else a.x = c, a.y = d, a.point = b
                        } else j(a, b, c, d, e, f, g, h)
                }

                function j(a, b, c, d, e, g, h, i) {
                    var j = .5 * (e + h),
                        k = .5 * (g + i),
                        l = c >= j,
                        m = d >= k,
                        n = m << 1 | l;
                    a.leaf = !1, a = a.nodes[n] || (a.nodes[n] = ld()), l ? e = j : h = j, m ? g = k : i = k, f(a, b, c, d, e, g, h, i)
                }
                var k, l, m, n, o, p, q, r, s, t = Aa(h),
                    u = Aa(i);
                if (null != b) p = b, q = c, r = d, s = e;
                else if (r = s = -(p = q = 1 / 0), l = [], m = [], o = a.length, g)
                    for (n = 0; n < o; ++n) k = a[n], k.x < p && (p = k.x), k.y < q && (q = k.y), k.x > r && (r = k.x), k.y > s && (s = k.y), l.push(k.x), m.push(k.y);
                else
                    for (n = 0; n < o; ++n) {
                        var v = +t(k = a[n], n),
                            w = +u(k, n);
                        v < p && (p = v), w < q && (q = w), v > r && (r = v), w > s && (s = w), l.push(v), m.push(w)
                    }
                var x = r - p,
                    y = s - q;
                x > y ? s = q + x : r = p + y;
                var z = ld();
                if (z.add = function(a) {
                        f(z, a, +t(a, ++n), +u(a, n), p, q, r, s)
                    }, z.visit = function(a) {
                        md(a, z, p, q, r, s)
                    }, z.find = function(a) {
                        return nd(z, a[0], a[1], p, q, r, s)
                    }, n = -1, null == b) {
                    for (; ++n < o;) f(z, a[n], l[n], m[n], p, q, r, s);
                    --n
                } else a.forEach(z.add);
                return l = m = a = k = null, z
            }
            var g, h = Cc,
                i = Dc;
            return (g = arguments.length) ? (h = jd, i = kd, 3 === g && (e = c, d = b, c = b = 0), f(a)) : (f.x = function(a) {
                return arguments.length ? (h = a, f) : h
            }, f.y = function(a) {
                return arguments.length ? (i = a, f) : i
            }, f.extent = function(a) {
                return arguments.length ? (null == a ? b = c = d = e = null : (b = +a[0][0], c = +a[0][1], d = +a[1][0], e = +a[1][1]), f) : null == b ? null : [
                    [b, c],
                    [d, e]
                ]
            }, f.size = function(a) {
                return arguments.length ? (null == a ? b = c = d = e = null : (b = c = 0, d = +a[0], e = +a[1]), f) : null == b ? null : [d - b, e - c]
            }, f)
        }, hg.interpolateRgb = od, hg.interpolateObject = pd, hg.interpolateNumber = qd, hg.interpolateString = rd;
        var gi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            hi = new RegExp(gi.source, "g");
        hg.interpolate = sd, hg.interpolators = [function(a, b) {
            var c = typeof b;
            return ("string" === c ? _g.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? od : rd : b instanceof ga ? od : Array.isArray(b) ? td : "object" === c && isNaN(b) ? pd : qd)(a, b)
        }], hg.interpolateArray = td;
        var ii = function() {
                return s
            },
            ji = hg.map({
                linear: ii,
                poly: Ad,
                quad: function() {
                    return xd
                },
                cubic: function() {
                    return yd
                },
                sin: function() {
                    return Bd
                },
                exp: function() {
                    return Cd
                },
                circle: function() {
                    return Dd
                },
                elastic: Ed,
                back: Fd,
                bounce: function() {
                    return Gd
                }
            }),
            ki = hg.map({ in : s, out: vd, "in-out": wd, "out-in": function(a) {
                    return wd(vd(a))
                }
            });
        hg.ease = function(a) {
            var b = a.indexOf("-"),
                c = b >= 0 ? a.slice(0, b) : a,
                d = b >= 0 ? a.slice(b + 1) : "in";
            return c = ji.get(c) || ii, d = ki.get(d) || s, ud(d(c.apply(null, ig.call(arguments, 1))))
        }, hg.interpolateHcl = Hd, hg.interpolateHsl = Id, hg.interpolateLab = Jd, hg.interpolateRound = Kd, hg.transform = function(a) {
            var b = kg.createElementNS(hg.ns.prefix.svg, "g");
            return (hg.transform = function(a) {
                if (null != a) {
                    b.setAttribute("transform", a);
                    var c = b.transform.baseVal.consolidate()
                }
                return new Ld(c ? c.matrix : li)
            })(a)
        }, Ld.prototype.toString = function() {
            return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
        };
        var li = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        };
        hg.interpolateTransform = Ud, hg.layout = {}, hg.layout.bundle = function() {
            return function(a) {
                for (var b = [], c = -1, d = a.length; ++c < d;) b.push(Xd(a[c]));
                return b
            }
        }, hg.layout.chord = function() {
            function a() {
                var a, j, l, m, n, o = {},
                    p = [],
                    q = hg.range(f),
                    r = [];
                for (c = [], d = [], a = 0, m = -1; ++m < f;) {
                    for (j = 0, n = -1; ++n < f;) j += e[m][n];
                    p.push(j), r.push(hg.range(f)), a += j
                }
                for (g && q.sort(function(a, b) {
                        return g(p[a], p[b])
                    }), h && r.forEach(function(a, b) {
                        a.sort(function(a, c) {
                            return h(e[b][a], e[b][c])
                        })
                    }), a = (Kg - k * f) / a, j = 0, m = -1; ++m < f;) {
                    for (l = j, n = -1; ++n < f;) {
                        var s = q[m],
                            t = r[s][n],
                            u = e[s][t],
                            v = j,
                            w = j += u * a;
                        o[s + "-" + t] = {
                            index: s,
                            subindex: t,
                            startAngle: v,
                            endAngle: w,
                            value: u
                        }
                    }
                    d[s] = {
                        index: s,
                        startAngle: l,
                        endAngle: j,
                        value: (j - l) / a
                    }, j += k
                }
                for (m = -1; ++m < f;)
                    for (n = m - 1; ++n < f;) {
                        var x = o[m + "-" + n],
                            y = o[n + "-" + m];
                        (x.value || y.value) && c.push(x.value < y.value ? {
                            source: y,
                            target: x
                        } : {
                            source: x,
                            target: y
                        })
                    }
                i && b()
            }

            function b() {
                c.sort(function(a, b) {
                    return i((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
                })
            }
            var c, d, e, f, g, h, i, j = {},
                k = 0;
            return j.matrix = function(a) {
                return arguments.length ? (f = (e = a) && e.length, c = d = null, j) : e
            }, j.padding = function(a) {
                return arguments.length ? (k = a, c = d = null, j) : k
            }, j.sortGroups = function(a) {
                return arguments.length ? (g = a, c = d = null, j) : g
            }, j.sortSubgroups = function(a) {
                return arguments.length ? (h = a, c = null, j) : h
            }, j.sortChords = function(a) {
                return arguments.length ? (i = a, c && b(), j) : i
            }, j.chords = function() {
                return c || a(), c
            }, j.groups = function() {
                return d || a(), d
            }, j
        }, hg.layout.force = function() {
            function a(a) {
                return function(b, c, d, e) {
                    if (b.point !== a) {
                        var f = b.cx - a.x,
                            g = b.cy - a.y,
                            h = e - c,
                            i = f * f + g * g;
                        if (h * h / r < i) {
                            if (i < p) {
                                var j = b.charge / i;
                                a.px -= f * j, a.py -= g * j
                            }
                            return !0
                        }
                        if (b.point && i && i < p) {
                            var j = b.pointCharge / i;
                            a.px -= f * j, a.py -= g * j
                        }
                    }
                    return !b.charge
                }
            }

            function b(a) {
                a.px = hg.event.x, a.py = hg.event.y, i.resume()
            }
            var c, d, e, f, g, h, i = {},
                j = hg.dispatch("start", "tick", "end"),
                k = [1, 1],
                l = .9,
                m = mi,
                n = ni,
                o = -30,
                p = oi,
                q = .1,
                r = .64,
                t = [],
                u = [];
            return i.tick = function() {
                if ((e *= .99) < .005) return c = null, j.end({
                    type: "end",
                    alpha: e = 0
                }), !0;
                var b, d, i, m, n, p, r, s, v, w = t.length,
                    x = u.length;
                for (d = 0; d < x; ++d) i = u[d], m = i.source, n = i.target, s = n.x - m.x, v = n.y - m.y, (p = s * s + v * v) && (p = e * g[d] * ((p = Math.sqrt(p)) - f[d]) / p, s *= p, v *= p,
                    n.x -= s * (r = m.weight + n.weight ? m.weight / (m.weight + n.weight) : .5), n.y -= v * r, m.x += s * (r = 1 - r), m.y += v * r);
                if ((r = e * q) && (s = k[0] / 2, v = k[1] / 2, d = -1, r))
                    for (; ++d < w;) i = t[d], i.x += (s - i.x) * r, i.y += (v - i.y) * r;
                if (o)
                    for (ce(b = hg.geom.quadtree(t), e, h), d = -1; ++d < w;)(i = t[d]).fixed || b.visit(a(i));
                for (d = -1; ++d < w;) i = t[d], i.fixed ? (i.x = i.px, i.y = i.py) : (i.x -= (i.px - (i.px = i.x)) * l, i.y -= (i.py - (i.py = i.y)) * l);
                j.tick({
                    type: "tick",
                    alpha: e
                })
            }, i.nodes = function(a) {
                return arguments.length ? (t = a, i) : t
            }, i.links = function(a) {
                return arguments.length ? (u = a, i) : u
            }, i.size = function(a) {
                return arguments.length ? (k = a, i) : k
            }, i.linkDistance = function(a) {
                return arguments.length ? (m = "function" == typeof a ? a : +a, i) : m
            }, i.distance = i.linkDistance, i.linkStrength = function(a) {
                return arguments.length ? (n = "function" == typeof a ? a : +a, i) : n
            }, i.friction = function(a) {
                return arguments.length ? (l = +a, i) : l
            }, i.charge = function(a) {
                return arguments.length ? (o = "function" == typeof a ? a : +a, i) : o
            }, i.chargeDistance = function(a) {
                return arguments.length ? (p = a * a, i) : Math.sqrt(p)
            }, i.gravity = function(a) {
                return arguments.length ? (q = +a, i) : q
            }, i.theta = function(a) {
                return arguments.length ? (r = a * a, i) : Math.sqrt(r)
            }, i.alpha = function(a) {
                return arguments.length ? (a = +a, e ? a > 0 ? e = a : (c.c = null, c.t = NaN, c = null, j.start({
                    type: "end",
                    alpha: e = 0
                })) : a > 0 && (j.start({
                    type: "start",
                    alpha: e = a
                }), c = Fa(i.tick)), i) : e
            }, i.start = function() {
                function a(a, d) {
                    if (!c) {
                        for (c = new Array(e), i = 0; i < e; ++i) c[i] = [];
                        for (i = 0; i < j; ++i) {
                            var f = u[i];
                            c[f.source.index].push(f.target), c[f.target.index].push(f.source)
                        }
                    }
                    for (var g, h = c[b], i = -1, k = h.length; ++i < k;)
                        if (!isNaN(g = h[i][a])) return g;
                    return Math.random() * d
                }
                var b, c, d, e = t.length,
                    j = u.length,
                    l = k[0],
                    p = k[1];
                for (b = 0; b < e; ++b)(d = t[b]).index = b, d.weight = 0;
                for (b = 0; b < j; ++b) d = u[b], "number" == typeof d.source && (d.source = t[d.source]), "number" == typeof d.target && (d.target = t[d.target]), ++d.source.weight, ++d.target.weight;
                for (b = 0; b < e; ++b) d = t[b], isNaN(d.x) && (d.x = a("x", l)), isNaN(d.y) && (d.y = a("y", p)), isNaN(d.px) && (d.px = d.x), isNaN(d.py) && (d.py = d.y);
                if (f = [], "function" == typeof m)
                    for (b = 0; b < j; ++b) f[b] = +m.call(this, u[b], b);
                else
                    for (b = 0; b < j; ++b) f[b] = m;
                if (g = [], "function" == typeof n)
                    for (b = 0; b < j; ++b) g[b] = +n.call(this, u[b], b);
                else
                    for (b = 0; b < j; ++b) g[b] = n;
                if (h = [], "function" == typeof o)
                    for (b = 0; b < e; ++b) h[b] = +o.call(this, t[b], b);
                else
                    for (b = 0; b < e; ++b) h[b] = o;
                return i.resume()
            }, i.resume = function() {
                return i.alpha(.1)
            }, i.stop = function() {
                return i.alpha(0)
            }, i.drag = function() {
                if (d || (d = hg.behavior.drag().origin(s).on("dragstart.force", $d).on("drag.force", b).on("dragend.force", _d)), !arguments.length) return d;
                this.on("mouseover.force", ae).on("mouseout.force", be).call(d)
            }, hg.rebind(i, j, "on")
        };
        var mi = 20,
            ni = 1,
            oi = 1 / 0;
        hg.layout.hierarchy = function() {
            function a(e) {
                var f, g = [e],
                    h = [];
                for (e.depth = 0; null != (f = g.pop());)
                    if (h.push(f), (j = c.call(a, f, f.depth)) && (i = j.length)) {
                        for (var i, j, k; --i >= 0;) g.push(k = j[i]), k.parent = f, k.depth = f.depth + 1;
                        d && (f.value = 0), f.children = j
                    } else d && (f.value = +d.call(a, f, f.depth) || 0), delete f.children;
                return fe(e, function(a) {
                    var c, e;
                    b && (c = a.children) && c.sort(b), d && (e = a.parent) && (e.value += a.value)
                }), h
            }
            var b = ie,
                c = ge,
                d = he;
            return a.sort = function(c) {
                return arguments.length ? (b = c, a) : b
            }, a.children = function(b) {
                return arguments.length ? (c = b, a) : c
            }, a.value = function(b) {
                return arguments.length ? (d = b, a) : d
            }, a.revalue = function(b) {
                return d && (ee(b, function(a) {
                    a.children && (a.value = 0)
                }), fe(b, function(b) {
                    var c;
                    b.children || (b.value = +d.call(a, b, b.depth) || 0), (c = b.parent) && (c.value += b.value)
                })), b
            }, a
        }, hg.layout.partition = function() {
            function a(b, c, d, e) {
                var f = b.children;
                if (b.x = c, b.y = b.depth * e, b.dx = d, b.dy = e, f && (g = f.length)) {
                    var g, h, i, j = -1;
                    for (d = b.value ? d / b.value : 0; ++j < g;) a(h = f[j], c, i = h.value * d, e), c += i
                }
            }

            function b(a) {
                var c = a.children,
                    d = 0;
                if (c && (e = c.length))
                    for (var e, f = -1; ++f < e;) d = Math.max(d, b(c[f]));
                return 1 + d
            }

            function c(c, f) {
                var g = d.call(this, c, f);
                return a(g[0], 0, e[0], e[1] / b(g[0])), g
            }
            var d = hg.layout.hierarchy(),
                e = [1, 1];
            return c.size = function(a) {
                return arguments.length ? (e = a, c) : e
            }, de(c, d)
        }, hg.layout.pie = function() {
            function a(g) {
                var h, i = g.length,
                    j = g.map(function(c, d) {
                        return +b.call(a, c, d)
                    }),
                    k = +("function" == typeof d ? d.apply(this, arguments) : d),
                    l = ("function" == typeof e ? e.apply(this, arguments) : e) - k,
                    m = Math.min(Math.abs(l) / i, +("function" == typeof f ? f.apply(this, arguments) : f)),
                    n = m * (l < 0 ? -1 : 1),
                    o = hg.sum(j),
                    p = o ? (l - i * n) / o : 0,
                    q = hg.range(i),
                    r = [];
                return null != c && q.sort(c === pi ? function(a, b) {
                    return j[b] - j[a]
                } : function(a, b) {
                    return c(g[a], g[b])
                }), q.forEach(function(a) {
                    r[a] = {
                        data: g[a],
                        value: h = j[a],
                        startAngle: k,
                        endAngle: k += h * p + n,
                        padAngle: m
                    }
                }), r
            }
            var b = Number,
                c = pi,
                d = 0,
                e = Kg,
                f = 0;
            return a.value = function(c) {
                return arguments.length ? (b = c, a) : b
            }, a.sort = function(b) {
                return arguments.length ? (c = b, a) : c
            }, a.startAngle = function(b) {
                return arguments.length ? (d = b, a) : d
            }, a.endAngle = function(b) {
                return arguments.length ? (e = b, a) : e
            }, a.padAngle = function(b) {
                return arguments.length ? (f = b, a) : f
            }, a
        };
        var pi = {};
        hg.layout.stack = function() {
            function a(h, i) {
                if (!(m = h.length)) return h;
                var j = h.map(function(c, d) {
                        return b.call(a, c, d)
                    }),
                    k = j.map(function(b) {
                        return b.map(function(b, c) {
                            return [f.call(a, b, c), g.call(a, b, c)]
                        })
                    }),
                    l = c.call(a, k, i);
                j = hg.permute(j, l), k = hg.permute(k, l);
                var m, n, o, p, q = d.call(a, k, i),
                    r = j[0].length;
                for (o = 0; o < r; ++o)
                    for (e.call(a, j[0][o], p = q[o], k[0][o][1]), n = 1; n < m; ++n) e.call(a, j[n][o], p += k[n - 1][o][1], k[n][o][1]);
                return h
            }
            var b = s,
                c = ne,
                d = oe,
                e = me,
                f = ke,
                g = le;
            return a.values = function(c) {
                return arguments.length ? (b = c, a) : b
            }, a.order = function(b) {
                return arguments.length ? (c = "function" == typeof b ? b : qi.get(b) || ne, a) : c
            }, a.offset = function(b) {
                return arguments.length ? (d = "function" == typeof b ? b : ri.get(b) || oe, a) : d
            }, a.x = function(b) {
                return arguments.length ? (f = b, a) : f
            }, a.y = function(b) {
                return arguments.length ? (g = b, a) : g
            }, a.out = function(b) {
                return arguments.length ? (e = b, a) : e
            }, a
        };
        var qi = hg.map({
                "inside-out": function(a) {
                    var b, c, d = a.length,
                        e = a.map(pe),
                        f = a.map(qe),
                        g = hg.range(d).sort(function(a, b) {
                            return e[a] - e[b]
                        }),
                        h = 0,
                        i = 0,
                        j = [],
                        k = [];
                    for (b = 0; b < d; ++b) c = g[b], h < i ? (h += f[c], j.push(c)) : (i += f[c], k.push(c));
                    return k.reverse().concat(j)
                },
                reverse: function(a) {
                    return hg.range(a.length).reverse()
                },
                default: ne
            }),
            ri = hg.map({
                silhouette: function(a) {
                    var b, c, d, e = a.length,
                        f = a[0].length,
                        g = [],
                        h = 0,
                        i = [];
                    for (c = 0; c < f; ++c) {
                        for (b = 0, d = 0; b < e; b++) d += a[b][c][1];
                        d > h && (h = d), g.push(d)
                    }
                    for (c = 0; c < f; ++c) i[c] = (h - g[c]) / 2;
                    return i
                },
                wiggle: function(a) {
                    var b, c, d, e, f, g, h, i, j, k = a.length,
                        l = a[0],
                        m = l.length,
                        n = [];
                    for (n[0] = i = j = 0, c = 1; c < m; ++c) {
                        for (b = 0, e = 0; b < k; ++b) e += a[b][c][1];
                        for (b = 0, f = 0, h = l[c][0] - l[c - 1][0]; b < k; ++b) {
                            for (d = 0, g = (a[b][c][1] - a[b][c - 1][1]) / (2 * h); d < b; ++d) g += (a[d][c][1] - a[d][c - 1][1]) / h;
                            f += g * a[b][c][1]
                        }
                        n[c] = i -= e ? f / e * h : 0, i < j && (j = i)
                    }
                    for (c = 0; c < m; ++c) n[c] -= j;
                    return n
                },
                expand: function(a) {
                    var b, c, d, e = a.length,
                        f = a[0].length,
                        g = 1 / e,
                        h = [];
                    for (c = 0; c < f; ++c) {
                        for (b = 0, d = 0; b < e; b++) d += a[b][c][1];
                        if (d)
                            for (b = 0; b < e; b++) a[b][c][1] /= d;
                        else
                            for (b = 0; b < e; b++) a[b][c][1] = g
                    }
                    for (c = 0; c < f; ++c) h[c] = 0;
                    return h
                },
                zero: oe
            });
        hg.layout.histogram = function() {
            function a(a, f) {
                for (var g, h, i = [], j = a.map(c, this), k = d.call(this, j, f), l = e.call(this, k, j, f), f = -1, m = j.length, n = l.length - 1, o = b ? 1 : 1 / m; ++f < n;) g = i[f] = [], g.dx = l[f + 1] - (g.x = l[f]), g.y = 0;
                if (n > 0)
                    for (f = -1; ++f < m;)(h = j[f]) >= k[0] && h <= k[1] && (g = i[hg.bisect(l, h, 1, n) - 1], g.y += o, g.push(a[f]));
                return i
            }
            var b = !0,
                c = Number,
                d = ue,
                e = se;
            return a.value = function(b) {
                return arguments.length ? (c = b, a) : c
            }, a.range = function(b) {
                return arguments.length ? (d = Aa(b), a) : d
            }, a.bins = function(b) {
                return arguments.length ? (e = "number" == typeof b ? function(a) {
                    return te(a, b)
                } : Aa(b), a) : e
            }, a.frequency = function(c) {
                return arguments.length ? (b = !!c, a) : b
            }, a
        }, hg.layout.pack = function() {
            function a(a, f) {
                var g = c.call(this, a, f),
                    h = g[0],
                    i = e[0],
                    j = e[1],
                    k = null == b ? Math.sqrt : "function" == typeof b ? b : function() {
                        return b
                    };
                if (h.x = h.y = 0, fe(h, function(a) {
                        a.r = +k(a.value)
                    }), fe(h, ze), d) {
                    var l = d * (b ? 1 : Math.max(2 * h.r / i, 2 * h.r / j)) / 2;
                    fe(h, function(a) {
                        a.r += l
                    }), fe(h, ze), fe(h, function(a) {
                        a.r -= l
                    })
                }
                return Ce(h, i / 2, j / 2, b ? 1 : 1 / Math.max(2 * h.r / i, 2 * h.r / j)), g
            }
            var b, c = hg.layout.hierarchy().sort(ve),
                d = 0,
                e = [1, 1];
            return a.size = function(b) {
                return arguments.length ? (e = b, a) : e
            }, a.radius = function(c) {
                return arguments.length ? (b = null == c || "function" == typeof c ? c : +c, a) : b
            }, a.padding = function(b) {
                return arguments.length ? (d = +b, a) : d
            }, de(a, c)
        }, hg.layout.tree = function() {
            function a(a, e) {
                var k = g.call(this, a, e),
                    l = k[0],
                    m = b(l);
                if (fe(m, c), m.parent.m = -m.z, ee(m, d), j) ee(l, f);
                else {
                    var n = l,
                        o = l,
                        p = l;
                    ee(l, function(a) {
                        a.x < n.x && (n = a), a.x > o.x && (o = a), a.depth > p.depth && (p = a)
                    });
                    var q = h(n, o) / 2 - n.x,
                        r = i[0] / (o.x + h(o, n) / 2 + q),
                        s = i[1] / (p.depth || 1);
                    ee(l, function(a) {
                        a.x = (a.x + q) * r, a.y = a.depth * s
                    })
                }
                return k
            }

            function b(a) {
                for (var b, c = {
                        A: null,
                        children: [a]
                    }, d = [c]; null != (b = d.pop());)
                    for (var e, f = b.children, g = 0, h = f.length; g < h; ++g) d.push((f[g] = e = {
                        _: f[g],
                        parent: b,
                        children: (e = f[g].children) && e.slice() || [],
                        A: null,
                        a: null,
                        z: 0,
                        m: 0,
                        c: 0,
                        s: 0,
                        t: null,
                        i: g
                    }).a = e);
                return c.children[0]
            }

            function c(a) {
                var b = a.children,
                    c = a.parent.children,
                    d = a.i ? c[a.i - 1] : null;
                if (b.length) {
                    Ie(a);
                    var f = (b[0].z + b[b.length - 1].z) / 2;
                    d ? (a.z = d.z + h(a._, d._), a.m = a.z - f) : a.z = f
                } else d && (a.z = d.z + h(a._, d._));
                a.parent.A = e(a, d, a.parent.A || c[0])
            }

            function d(a) {
                a._.x = a.z + a.parent.m, a.m += a.parent.m
            }

            function e(a, b, c) {
                if (b) {
                    for (var d, e = a, f = a, g = b, i = e.parent.children[0], j = e.m, k = f.m, l = g.m, m = i.m; g = Ge(g), e = Fe(e), g && e;) i = Fe(i), f = Ge(f), f.a = a, d = g.z + l - e.z - j + h(g._, e._), d > 0 && (He(Je(g, a, c), a, d), j += d, k += d), l += g.m, j += e.m, m += i.m, k += f.m;
                    g && !Ge(f) && (f.t = g, f.m += l - k), e && !Fe(i) && (i.t = e, i.m += j - m, c = a)
                }
                return c
            }

            function f(a) {
                a.x *= i[0], a.y = a.depth * i[1]
            }
            var g = hg.layout.hierarchy().sort(null).value(null),
                h = Ee,
                i = [1, 1],
                j = null;
            return a.separation = function(b) {
                return arguments.length ? (h = b, a) : h
            }, a.size = function(b) {
                return arguments.length ? (j = null == (i = b) ? f : null, a) : j ? null : i
            }, a.nodeSize = function(b) {
                return arguments.length ? (j = null == (i = b) ? null : f, a) : j ? i : null
            }, de(a, g)
        }, hg.layout.cluster = function() {
            function a(a, f) {
                var g, h = b.call(this, a, f),
                    i = h[0],
                    j = 0;
                fe(i, function(a) {
                    var b = a.children;
                    b && b.length ? (a.x = Le(b), a.y = Ke(b)) : (a.x = g ? j += c(a, g) : 0, a.y = 0, g = a)
                });
                var k = Me(i),
                    l = Ne(i),
                    m = k.x - c(k, l) / 2,
                    n = l.x + c(l, k) / 2;
                return fe(i, e ? function(a) {
                    a.x = (a.x - i.x) * d[0], a.y = (i.y - a.y) * d[1]
                } : function(a) {
                    a.x = (a.x - m) / (n - m) * d[0], a.y = (1 - (i.y ? a.y / i.y : 1)) * d[1]
                }), h
            }
            var b = hg.layout.hierarchy().sort(null).value(null),
                c = Ee,
                d = [1, 1],
                e = !1;
            return a.separation = function(b) {
                return arguments.length ? (c = b, a) : c
            }, a.size = function(b) {
                return arguments.length ? (e = null == (d = b), a) : e ? null : d
            }, a.nodeSize = function(b) {
                return arguments.length ? (e = null != (d = b), a) : e ? d : null
            }, de(a, b)
        }, hg.layout.treemap = function() {
            function a(a, b) {
                for (var c, d, e = -1, f = a.length; ++e < f;) d = (c = a[e]).value * (b < 0 ? 0 : b), c.area = isNaN(d) || d <= 0 ? 0 : d
            }

            function b(c) {
                var f = c.children;
                if (f && f.length) {
                    var g, h, i, j = l(c),
                        k = [],
                        m = f.slice(),
                        o = 1 / 0,
                        p = "slice" === n ? j.dx : "dice" === n ? j.dy : "slice-dice" === n ? 1 & c.depth ? j.dy : j.dx : Math.min(j.dx, j.dy);
                    for (a(m, j.dx * j.dy / c.value), k.area = 0;
                        (i = m.length) > 0;) k.push(g = m[i - 1]), k.area += g.area, "squarify" !== n || (h = d(k, p)) <= o ? (m.pop(), o = h) : (k.area -= k.pop().area, e(k, p, j, !1), p = Math.min(j.dx, j.dy), k.length = k.area = 0, o = 1 / 0);
                    k.length && (e(k, p, j, !0), k.length = k.area = 0), f.forEach(b)
                }
            }

            function c(b) {
                var d = b.children;
                if (d && d.length) {
                    var f, g = l(b),
                        h = d.slice(),
                        i = [];
                    for (a(h, g.dx * g.dy / b.value), i.area = 0; f = h.pop();) i.push(f), i.area += f.area, null != f.z && (e(i, f.z ? g.dx : g.dy, g, !h.length), i.length = i.area = 0);
                    d.forEach(c)
                }
            }

            function d(a, b) {
                for (var c, d = a.area, e = 0, f = 1 / 0, g = -1, h = a.length; ++g < h;)(c = a[g].area) && (c < f && (f = c), c > e && (e = c));
                return d *= d, b *= b, d ? Math.max(b * e * o / d, d / (b * f * o)) : 1 / 0
            }

            function e(a, b, c, d) {
                var e, f = -1,
                    g = a.length,
                    h = c.x,
                    j = c.y,
                    k = b ? i(a.area / b) : 0;
                if (b == c.dx) {
                    for ((d || k > c.dy) && (k = c.dy); ++f < g;) e = a[f], e.x = h, e.y = j, e.dy = k, h += e.dx = Math.min(c.x + c.dx - h, k ? i(e.area / k) : 0);
                    e.z = !0, e.dx += c.x + c.dx - h, c.y += k, c.dy -= k
                } else {
                    for ((d || k > c.dx) && (k = c.dx); ++f < g;) e = a[f], e.x = h, e.y = j, e.dx = k, j += e.dy = Math.min(c.y + c.dy - j, k ? i(e.area / k) : 0);
                    e.z = !1, e.dy += c.y + c.dy - j, c.x += k, c.dx -= k
                }
            }

            function f(d) {
                var e = g || h(d),
                    f = e[0];
                return f.x = f.y = 0, f.value ? (f.dx = j[0], f.dy = j[1]) : f.dx = f.dy = 0, g && h.revalue(f), a([f], f.dx * f.dy / f.value), (g ? c : b)(f), m && (g = e), e
            }
            var g, h = hg.layout.hierarchy(),
                i = Math.round,
                j = [1, 1],
                k = null,
                l = Oe,
                m = !1,
                n = "squarify",
                o = .5 * (1 + Math.sqrt(5));
            return f.size = function(a) {
                return arguments.length ? (j = a, f) : j
            }, f.padding = function(a) {
                function b(b) {
                    var c = a.call(f, b, b.depth);
                    return null == c ? Oe(b) : Pe(b, "number" == typeof c ? [c, c, c, c] : c)
                }

                function c(b) {
                    return Pe(b, a)
                }
                if (!arguments.length) return k;
                var d;
                return l = null == (k = a) ? Oe : "function" == (d = typeof a) ? b : "number" === d ? (a = [a, a, a, a], c) : c, f
            }, f.round = function(a) {
                return arguments.length ? (i = a ? Math.round : Number, f) : i != Number
            }, f.sticky = function(a) {
                return arguments.length ? (m = a, g = null, f) : m
            }, f.ratio = function(a) {
                return arguments.length ? (o = a, f) : o
            }, f.mode = function(a) {
                return arguments.length ? (n = a + "", f) : n
            }, de(f, h)
        }, hg.random = {
            normal: function(a, b) {
                var c = arguments.length;
                return c < 2 && (b = 1), c < 1 && (a = 0),
                    function() {
                        var c, d, e;
                        do {
                            c = 2 * Math.random() - 1, d = 2 * Math.random() - 1, e = c * c + d * d
                        } while (!e || e > 1);
                        return a + b * c * Math.sqrt(-2 * Math.log(e) / e)
                    }
            },
            logNormal: function() {
                var a = hg.random.normal.apply(hg, arguments);
                return function() {
                    return Math.exp(a())
                }
            },
            bates: function(a) {
                var b = hg.random.irwinHall(a);
                return function() {
                    return b() / a
                }
            },
            irwinHall: function(a) {
                return function() {
                    for (var b = 0, c = 0; c < a; c++) b += Math.random();
                    return b
                }
            }
        }, hg.scale = {};
        var si = {
            floor: s,
            ceil: s
        };
        hg.scale.linear = function() {
            return We([0, 1], [0, 1], sd, !1)
        };
        var ti = {
            s: 1,
            g: 1,
            p: 1,
            r: 1,
            e: 1
        };
        hg.scale.log = function() {
            return cf(hg.scale.linear().domain([0, 1]), 10, !0, [1, 10])
        };
        var ui = hg.format(".0e"),
            vi = {
                floor: function(a) {
                    return -Math.ceil(-a)
                },
                ceil: function(a) {
                    return -Math.floor(-a)
                }
            };
        hg.scale.pow = function() {
            return df(hg.scale.linear(), 1, [0, 1])
        }, hg.scale.sqrt = function() {
            return hg.scale.pow().exponent(.5)
        }, hg.scale.ordinal = function() {
            return ff([], {
                t: "range",
                a: [
                    []
                ]
            })
        }, hg.scale.category10 = function() {
            return hg.scale.ordinal().range(wi)
        }, hg.scale.category20 = function() {
            return hg.scale.ordinal().range(xi)
        }, hg.scale.category20b = function() {
            return hg.scale.ordinal().range(yi)
        }, hg.scale.category20c = function() {
            return hg.scale.ordinal().range(zi)
        };
        var wi = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ta),
            xi = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ta),
            yi = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ta),
            zi = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ta);
        hg.scale.quantile = function() {
            return gf([], [])
        }, hg.scale.quantize = function() {
            return hf(0, 1, [0, 1])
        }, hg.scale.threshold = function() {
            return jf([.5], [0, 1])
        }, hg.scale.identity = function() {
            return kf([0, 1])
        }, hg.svg = {}, hg.svg.arc = function() {
            function a() {
                var a = Math.max(0, +c.apply(this, arguments)),
                    j = Math.max(0, +d.apply(this, arguments)),
                    k = g.apply(this, arguments) - Mg,
                    l = h.apply(this, arguments) - Mg,
                    m = Math.abs(l - k),
                    n = k > l ? 0 : 1;
                if (j < a && (o = j, j = a, a = o), m >= Lg) return b(j, n) + (a ? b(a, 1 - n) : "") + "Z";
                var o, p, q, r, s, t, u, v, w, x, y, z, A = 0,
                    B = 0,
                    C = [];
                if ((r = (+i.apply(this, arguments) || 0) / 2) && (q = f === Ai ? Math.sqrt(a * a + j * j) : +f.apply(this, arguments), n || (B *= -1), j && (B = ba(q / j * Math.sin(r))), a && (A = ba(q / a * Math.sin(r)))), j) {
                    s = j * Math.cos(k + B), t = j * Math.sin(k + B), u = j * Math.cos(l - B), v = j * Math.sin(l - B);
                    var D = Math.abs(l - k - 2 * B) <= Jg ? 0 : 1;
                    if (B && rf(s, t, u, v) === n ^ D) {
                        var E = (k + l) / 2;
                        s = j * Math.cos(E), t = j * Math.sin(E), u = v = null
                    }
                } else s = t = 0;
                if (a) {
                    w = a * Math.cos(l - A), x = a * Math.sin(l - A), y = a * Math.cos(k + A), z = a * Math.sin(k + A);
                    var F = Math.abs(k - l + 2 * A) <= Jg ? 0 : 1;
                    if (A && rf(w, x, y, z) === 1 - n ^ F) {
                        var G = (k + l) / 2;
                        w = a * Math.cos(G), x = a * Math.sin(G), y = z = null
                    }
                } else w = x = 0;
                if (m > Hg && (o = Math.min(Math.abs(j - a) / 2, +e.apply(this, arguments))) > .001) {
                    p = a < j ^ n ? 0 : 1;
                    var H = o,
                        I = o;
                    if (m < Jg) {
                        var J = null == y ? [w, x] : null == u ? [s, t] : Hc([s, t], [y, z], [u, v], [w, x]),
                            K = s - J[0],
                            L = t - J[1],
                            M = u - J[0],
                            N = v - J[1],
                            O = 1 / Math.sin(Math.acos((K * M + L * N) / (Math.sqrt(K * K + L * L) * Math.sqrt(M * M + N * N))) / 2),
                            P = Math.sqrt(J[0] * J[0] + J[1] * J[1]);
                        I = Math.min(o, (a - P) / (O - 1)), H = Math.min(o, (j - P) / (O + 1))
                    }
                    if (null != u) {
                        var Q = sf(null == y ? [w, x] : [y, z], [s, t], j, H, n),
                            R = sf([u, v], [w, x], j, H, n);
                        o === H ? C.push("M", Q[0], "A", H, ",", H, " 0 0,", p, " ", Q[1], "A", j, ",", j, " 0 ", 1 - n ^ rf(Q[1][0], Q[1][1], R[1][0], R[1][1]), ",", n, " ", R[1], "A", H, ",", H, " 0 0,", p, " ", R[0]) : C.push("M", Q[0], "A", H, ",", H, " 0 1,", p, " ", R[0])
                    } else C.push("M", s, ",", t);
                    if (null != y) {
                        var S = sf([s, t], [y, z], a, -I, n),
                            T = sf([w, x], null == u ? [s, t] : [u, v], a, -I, n);
                        o === I ? C.push("L", T[0], "A", I, ",", I, " 0 0,", p, " ", T[1], "A", a, ",", a, " 0 ", n ^ rf(T[1][0], T[1][1], S[1][0], S[1][1]), ",", 1 - n, " ", S[1], "A", I, ",", I, " 0 0,", p, " ", S[0]) : C.push("L", T[0], "A", I, ",", I, " 0 0,", p, " ", S[0])
                    } else C.push("L", w, ",", x)
                } else C.push("M", s, ",", t), null != u && C.push("A", j, ",", j, " 0 ", D, ",", n, " ", u, ",", v), C.push("L", w, ",", x), null != y && C.push("A", a, ",", a, " 0 ", F, ",", 1 - n, " ", y, ",", z);
                return C.push("Z"), C.join("")
            }

            function b(a, b) {
                return "M0," + a + "A" + a + "," + a + " 0 1," + b + " 0," + -a + "A" + a + "," + a + " 0 1," + b + " 0," + a
            }
            var c = mf,
                d = nf,
                e = lf,
                f = Ai,
                g = of,
                h = pf,
                i = qf;
            return a.innerRadius = function(b) {
                return arguments.length ? (c = Aa(b), a) : c
            }, a.outerRadius = function(b) {
                return arguments.length ? (d = Aa(b), a) : d
            }, a.cornerRadius = function(b) {
                return arguments.length ? (e = Aa(b), a) : e
            }, a.padRadius = function(b) {
                return arguments.length ? (f = b == Ai ? Ai : Aa(b), a) : f
            }, a.startAngle = function(b) {
                return arguments.length ? (g = Aa(b), a) : g
            }, a.endAngle = function(b) {
                return arguments.length ? (h = Aa(b), a) : h
            }, a.padAngle = function(b) {
                return arguments.length ? (i = Aa(b), a) : i
            }, a.centroid = function() {
                var a = (+c.apply(this, arguments) + +d.apply(this, arguments)) / 2,
                    b = (+g.apply(this, arguments) + +h.apply(this, arguments)) / 2 - Mg;
                return [Math.cos(b) * a, Math.sin(b) * a]
            }, a
        };
        var Ai = "auto";
        hg.svg.line = function() {
            return tf(s)
        };
        var Bi = hg.map({
            linear: uf,
            "linear-closed": vf,
            step: wf,
            "step-before": xf,
            "step-after": yf,
            basis: Ef,
            "basis-open": Ff,
            "basis-closed": Gf,
            bundle: Hf,
            cardinal: Bf,
            "cardinal-open": zf,
            "cardinal-closed": Af,
            monotone: Nf
        });
        Bi.forEach(function(a, b) {
            b.key = a, b.closed = /-closed$/.test(a)
        });
        var Ci = [0, 2 / 3, 1 / 3, 0],
            Di = [0, 1 / 3, 2 / 3, 0],
            Ei = [0, 1 / 6, 2 / 3, 1 / 6];
        hg.svg.line.radial = function() {
            var a = tf(Of);
            return a.radius = a.x, delete a.x, a.angle = a.y, delete a.y, a
        }, xf.reverse = yf, yf.reverse = xf, hg.svg.area = function() {
            return Pf(s)
        }, hg.svg.area.radial = function() {
            var a = Pf(Of);
            return a.radius = a.x, delete a.x, a.innerRadius = a.x0, delete a.x0, a.outerRadius = a.x1, delete a.x1, a.angle = a.y, delete a.y, a.startAngle = a.y0, delete a.y0, a.endAngle = a.y1, delete a.y1, a
        }, hg.svg.chord = function() {
            function a(a, h) {
                var i = b(this, f, a, h),
                    j = b(this, g, a, h);
                return "M" + i.p0 + d(i.r, i.p1, i.a1 - i.a0) + (c(i, j) ? e(i.r, i.p1, i.r, i.p0) : e(i.r, i.p1, j.r, j.p0) + d(j.r, j.p1, j.a1 - j.a0) + e(j.r, j.p1, i.r, i.p0)) + "Z"
            }

            function b(a, b, c, d) {
                var e = b.call(a, c, d),
                    f = h.call(a, e, d),
                    g = i.call(a, e, d) - Mg,
                    k = j.call(a, e, d) - Mg;
                return {
                    r: f,
                    a0: g,
                    a1: k,
                    p0: [f * Math.cos(g), f * Math.sin(g)],
                    p1: [f * Math.cos(k), f * Math.sin(k)]
                }
            }

            function c(a, b) {
                return a.a0 == b.a0 && a.a1 == b.a1
            }

            function d(a, b, c) {
                return "A" + a + "," + a + " 0 " + +(c > Jg) + ",1 " + b
            }

            function e(a, b, c, d) {
                return "Q 0,0 " + d
            }
            var f = sc,
                g = tc,
                h = Qf,
                i = of,
                j = pf;
            return a.radius = function(b) {
                return arguments.length ? (h = Aa(b), a) : h
            }, a.source = function(b) {
                return arguments.length ? (f = Aa(b), a) : f
            }, a.target = function(b) {
                return arguments.length ? (g = Aa(b), a) : g
            }, a.startAngle = function(b) {
                return arguments.length ? (i = Aa(b), a) : i
            }, a.endAngle = function(b) {
                return arguments.length ? (j = Aa(b), a) : j
            }, a
        }, hg.svg.diagonal = function() {
            function a(a, e) {
                var f = b.call(this, a, e),
                    g = c.call(this, a, e),
                    h = (f.y + g.y) / 2,
                    i = [f, {
                        x: f.x,
                        y: h
                    }, {
                        x: g.x,
                        y: h
                    }, g];
                return i = i.map(d), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
            }
            var b = sc,
                c = tc,
                d = Rf;
            return a.source = function(c) {
                return arguments.length ? (b = Aa(c), a) : b
            }, a.target = function(b) {
                return arguments.length ? (c = Aa(b), a) : c
            }, a.projection = function(b) {
                return arguments.length ? (d = b, a) : d
            }, a
        }, hg.svg.diagonal.radial = function() {
            var a = hg.svg.diagonal(),
                b = Rf,
                c = a.projection;
            return a.projection = function(a) {
                return arguments.length ? c(Sf(b = a)) : b
            }, a
        }, hg.svg.symbol = function() {
            function a(a, d) {
                return (Fi.get(b.call(this, a, d)) || Vf)(c.call(this, a, d))
            }
            var b = Uf,
                c = Tf;
            return a.type = function(c) {
                return arguments.length ? (b = Aa(c), a) : b
            }, a.size = function(b) {
                return arguments.length ? (c = Aa(b), a) : c
            }, a
        };
        var Fi = hg.map({
            circle: Vf,
            cross: function(a) {
                var b = Math.sqrt(a / 5) / 2;
                return "M" + -3 * b + "," + -b + "H" + -b + "V" + -3 * b + "H" + b + "V" + -b + "H" + 3 * b + "V" + b + "H" + b + "V" + 3 * b + "H" + -b + "V" + b + "H" + -3 * b + "Z"
            },
            diamond: function(a) {
                var b = Math.sqrt(a / (2 * Hi)),
                    c = b * Hi;
                return "M0," + -b + "L" + c + ",0 0," + b + " " + -c + ",0Z"
            },
            square: function(a) {
                var b = Math.sqrt(a) / 2;
                return "M" + -b + "," + -b + "L" + b + "," + -b + " " + b + "," + b + " " + -b + "," + b + "Z"
            },
            "triangle-down": function(a) {
                var b = Math.sqrt(a / Gi),
                    c = b * Gi / 2;
                return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z"
            },
            "triangle-up": function(a) {
                var b = Math.sqrt(a / Gi),
                    c = b * Gi / 2;
                return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z"
            }
        });
        hg.svg.symbolTypes = Fi.keys();
        var Gi = Math.sqrt(3),
            Hi = Math.tan(30 * Ng);
        Ag.transition = function(a) {
            for (var b, c, d = Ii || ++Mi, e = $f(a), f = [], g = Ji || {
                    time: Date.now(),
                    ease: zd,
                    delay: 0,
                    duration: 250
                }, h = -1, i = this.length; ++h < i;) {
                f.push(b = []);
                for (var j = this[h], k = -1, l = j.length; ++k < l;)(c = j[k]) && _f(c, k, e, d, g), b.push(c)
            }
            return Xf(f, e, d)
        }, Ag.interrupt = function(a) {
            return this.each(null == a ? Ki : Wf($f(a)))
        };
        var Ii, Ji, Ki = Wf($f()),
            Li = [],
            Mi = 0;
        Li.call = Ag.call, Li.empty = Ag.empty, Li.node = Ag.node, Li.size = Ag.size, hg.transition = function(a, b) {
            return a && a.transition ? Ii ? a.transition(b) : a : hg.selection().transition(a)
        }, hg.transition.prototype = Li, Li.select = function(a) {
            var b, c, d, e = this.id,
                f = this.namespace,
                g = [];
            a = C(a);
            for (var h = -1, i = this.length; ++h < i;) {
                g.push(b = []);
                for (var j = this[h], k = -1, l = j.length; ++k < l;)(d = j[k]) && (c = a.call(d, d.__data__, k, h)) ? ("__data__" in d && (c.__data__ = d.__data__), _f(c, k, f, e, d[f][e]), b.push(c)) : b.push(null)
            }
            return Xf(g, f, e)
        }, Li.selectAll = function(a) {
            var b, c, d, e, f, g = this.id,
                h = this.namespace,
                i = [];
            a = D(a);
            for (var j = -1, k = this.length; ++j < k;)
                for (var l = this[j], m = -1, n = l.length; ++m < n;)
                    if (d = l[m]) {
                        f = d[h][g], c = a.call(d, d.__data__, m, j), i.push(b = []);
                        for (var o = -1, p = c.length; ++o < p;)(e = c[o]) && _f(e, o, h, g, f), b.push(e)
                    }
            return Xf(i, h, g)
        }, Li.filter = function(a) {
            var b, c, d, e = [];
            "function" != typeof a && (a = P(a));
            for (var f = 0, g = this.length; f < g; f++) {
                e.push(b = []);
                for (var c = this[f], h = 0, i = c.length; h < i; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
            }
            return Xf(e, this.namespace, this.id)
        }, Li.tween = function(a, b) {
            var c = this.id,
                d = this.namespace;
            return arguments.length < 2 ? this.node()[d][c].tween.get(a) : R(this, null == b ? function(b) {
                b[d][c].tween.remove(a)
            } : function(e) {
                e[d][c].tween.set(a, b)
            })
        }, Li.attr = function(a, b) {
            function c() {
                this.removeAttribute(h)
            }

            function d() {
                this.removeAttributeNS(h.space, h.local)
            }

            function e(a) {
                return null == a ? c : (a += "", function() {
                    var b, c = this.getAttribute(h);
                    return c !== a && (b = g(c, a), function(a) {
                        this.setAttribute(h, b(a))
                    })
                })
            }

            function f(a) {
                return null == a ? d : (a += "", function() {
                    var b, c = this.getAttributeNS(h.space, h.local);
                    return c !== a && (b = g(c, a), function(a) {
                        this.setAttributeNS(h.space, h.local, b(a))
                    })
                })
            }
            if (arguments.length < 2) {
                for (b in a) this.attr(b, a[b]);
                return this
            }
            var g = "transform" == a ? Ud : sd,
                h = hg.ns.qualify(a);
            return Yf(this, "attr." + a, b, h.local ? f : e)
        }, Li.attrTween = function(a, b) {
            function c(a, c) {
                var d = b.call(this, a, c, this.getAttribute(e));
                return d && function(a) {
                    this.setAttribute(e, d(a))
                }
            }

            function d(a, c) {
                var d = b.call(this, a, c, this.getAttributeNS(e.space, e.local));
                return d && function(a) {
                    this.setAttributeNS(e.space, e.local, d(a))
                }
            }
            var e = hg.ns.qualify(a);
            return this.tween("attr." + a, e.local ? d : c)
        }, Li.style = function(a, c, d) {
            function e() {
                this.style.removeProperty(a)
            }

            function f(c) {
                return null == c ? e : (c += "", function() {
                    var e, f = b(this).getComputedStyle(this, null).getPropertyValue(a);
                    return f !== c && (e = sd(f, c), function(b) {
                        this.style.setProperty(a, e(b), d)
                    })
                })
            }
            var g = arguments.length;
            if (g < 3) {
                if ("string" != typeof a) {
                    g < 2 && (c = "");
                    for (d in a) this.style(d, a[d], c);
                    return this
                }
                d = ""
            }
            return Yf(this, "style." + a, c, f)
        }, Li.styleTween = function(a, c, d) {
            function e(e, f) {
                var g = c.call(this, e, f, b(this).getComputedStyle(this, null).getPropertyValue(a));
                return g && function(b) {
                    this.style.setProperty(a, g(b), d)
                }
            }
            return arguments.length < 3 && (d = ""), this.tween("style." + a, e)
        }, Li.text = function(a) {
            return Yf(this, "text", a, Zf)
        }, Li.remove = function() {
            var a = this.namespace;
            return this.each("end.transition", function() {
                var b;
                this[a].count < 2 && (b = this.parentNode) && b.removeChild(this)
            })
        }, Li.ease = function(a) {
            var b = this.id,
                c = this.namespace;
            return arguments.length < 1 ? this.node()[c][b].ease : ("function" != typeof a && (a = hg.ease.apply(hg, arguments)), R(this, function(d) {
                d[c][b].ease = a
            }))
        }, Li.delay = function(a) {
            var b = this.id,
                c = this.namespace;
            return arguments.length < 1 ? this.node()[c][b].delay : R(this, "function" == typeof a ? function(d, e, f) {
                d[c][b].delay = +a.call(d, d.__data__, e, f)
            } : (a = +a, function(d) {
                d[c][b].delay = a
            }))
        }, Li.duration = function(a) {
            var b = this.id,
                c = this.namespace;
            return arguments.length < 1 ? this.node()[c][b].duration : R(this, "function" == typeof a ? function(d, e, f) {
                d[c][b].duration = Math.max(1, a.call(d, d.__data__, e, f))
            } : (a = Math.max(1, a), function(d) {
                d[c][b].duration = a
            }))
        }, Li.each = function(a, b) {
            var c = this.id,
                d = this.namespace;
            if (arguments.length < 2) {
                var e = Ji,
                    f = Ii;
                try {
                    Ii = c, R(this, function(b, e, f) {
                        Ji = b[d][c], a.call(b, b.__data__, e, f)
                    })
                } finally {
                    Ji = e, Ii = f
                }
            } else R(this, function(e) {
                var f = e[d][c];
                (f.event || (f.event = hg.dispatch("start", "end", "interrupt"))).on(a, b)
            });
            return this
        }, Li.transition = function() {
            for (var a, b, c, d, e = this.id, f = ++Mi, g = this.namespace, h = [], i = 0, j = this.length; i < j; i++) {
                h.push(a = []);
                for (var b = this[i], k = 0, l = b.length; k < l; k++)(c = b[k]) && (d = c[g][e], _f(c, k, g, f, {
                    time: d.time,
                    ease: d.ease,
                    delay: d.delay + d.duration,
                    duration: d.duration
                })), a.push(c)
            }
            return Xf(h, g, f)
        }, hg.svg.axis = function() {
            function a(a) {
                a.each(function() {
                    var a, j = hg.select(this),
                        k = this.__chart__ || c,
                        l = this.__chart__ = c.copy(),
                        m = null == i ? l.ticks ? l.ticks.apply(l, h) : l.domain() : i,
                        n = null == b ? l.tickFormat ? l.tickFormat.apply(l, h) : s : b,
                        o = j.selectAll(".tick").data(m, l),
                        p = o.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Hg),
                        q = hg.transition(o.exit()).style("opacity", Hg).remove(),
                        r = hg.transition(o.order()).style("opacity", 1),
                        t = Math.max(e, 0) + g,
                        u = Re(l),
                        v = j.selectAll(".domain").data([0]),
                        w = (v.enter().append("path").attr("class", "domain"), hg.transition(v));
                    p.append("line"), p.append("text");
                    var x, y, z, A, B = p.select("line"),
                        C = r.select("line"),
                        D = o.select("text").text(n),
                        E = p.select("text"),
                        F = r.select("text"),
                        G = "top" === d || "left" === d ? -1 : 1;
                    if ("bottom" === d || "top" === d ? (a = ag, x = "x", z = "y", y = "x2", A = "y2", D.attr("dy", G < 0 ? "0em" : ".71em").style("text-anchor", "middle"), w.attr("d", "M" + u[0] + "," + G * f + "V0H" + u[1] + "V" + G * f)) : (a = bg, x = "y", z = "x", y = "y2", A = "x2", D.attr("dy", ".32em").style("text-anchor", G < 0 ? "end" : "start"), w.attr("d", "M" + G * f + "," + u[0] + "H0V" + u[1] + "H" + G * f)), B.attr(A, G * e), E.attr(z, G * t), C.attr(y, 0).attr(A, G * e), F.attr(x, 0).attr(z, G * t), l.rangeBand) {
                        var H = l,
                            I = H.rangeBand() / 2;
                        k = l = function(a) {
                            return H(a) + I
                        }
                    } else k.rangeBand ? k = l : q.call(a, l, k);
                    p.call(a, k, l), r.call(a, l, l)
                })
            }
            var b, c = hg.scale.linear(),
                d = Ni,
                e = 6,
                f = 6,
                g = 3,
                h = [10],
                i = null;
            return a.scale = function(b) {
                return arguments.length ? (c = b, a) : c
            }, a.orient = function(b) {
                return arguments.length ? (d = b in Oi ? b + "" : Ni, a) : d
            }, a.ticks = function() {
                return arguments.length ? (h = jg(arguments), a) : h
            }, a.tickValues = function(b) {
                return arguments.length ? (i = b, a) : i
            }, a.tickFormat = function(c) {
                return arguments.length ? (b = c, a) : b
            }, a.tickSize = function(b) {
                var c = arguments.length;
                return c ? (e = +b, f = +arguments[c - 1], a) : e
            }, a.innerTickSize = function(b) {
                return arguments.length ? (e = +b, a) : e
            }, a.outerTickSize = function(b) {
                return arguments.length ? (f = +b, a) : f
            }, a.tickPadding = function(b) {
                return arguments.length ? (g = +b, a) : g
            }, a.tickSubdivide = function() {
                return arguments.length && a
            }, a
        };
        var Ni = "bottom",
            Oi = {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            };
        hg.svg.brush = function() {
            function a(b) {
                b.each(function() {
                    var b = hg.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", f).on("touchstart.brush", f),
                        g = b.selectAll(".background").data([0]);
                    g.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), b.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                    var h = b.selectAll(".resize").data(p, s);
                    h.exit().remove(), h.enter().append("g").attr("class", function(a) {
                        return "resize " + a
                    }).style("cursor", function(a) {
                        return Pi[a]
                    }).append("rect").attr("x", function(a) {
                        return /[ew]$/.test(a) ? -3 : null
                    }).attr("y", function(a) {
                        return /^[ns]/.test(a) ? -3 : null
                    }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", a.empty() ? "none" : null);
                    var i, l = hg.transition(b),
                        m = hg.transition(g);
                    j && (i = Re(j), m.attr("x", i[0]).attr("width", i[1] - i[0]), d(l)), k && (i = Re(k), m.attr("y", i[0]).attr("height", i[1] - i[0]), e(l)), c(l)
                })
            }

            function c(a) {
                a.selectAll(".resize").attr("transform", function(a) {
                    return "translate(" + l[+/e$/.test(a)] + "," + m[+/^s/.test(a)] + ")"
                })
            }

            function d(a) {
                a.select(".extent").attr("x", l[0]), a.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0])
            }

            function e(a) {
                a.select(".extent").attr("y", m[0]), a.selectAll(".extent,.e>rect,.w>rect").attr("height", m[1] - m[0])
            }

            function f() {
                function f() {
                    32 == hg.event.keyCode && (D || (t = null, F[0] -= l[1], F[1] -= m[1], D = 2), y())
                }

                function p() {
                    32 == hg.event.keyCode && 2 == D && (F[0] += l[1], F[1] += m[1], D = 0, y())
                }

                function q() {
                    var a = hg.mouse(v),
                        b = !1;
                    u && (a[0] += u[0], a[1] += u[1]), D || (hg.event.altKey ? (t || (t = [(l[0] + l[1]) / 2, (m[0] + m[1]) / 2]), F[0] = l[+(a[0] < t[0])], F[1] = m[+(a[1] < t[1])]) : t = null), B && r(a, j, 0) && (d(z), b = !0), C && r(a, k, 1) && (e(z), b = !0), b && (c(z), x({
                        type: "brush",
                        mode: D ? "move" : "resize"
                    }))
                }

                function r(a, b, c) {
                    var d, e, f = Re(b),
                        i = f[0],
                        j = f[1],
                        k = F[c],
                        p = c ? m : l,
                        q = p[1] - p[0];
                    if (D && (i -= k, j -= q + k), d = (c ? o : n) ? Math.max(i, Math.min(j, a[c])) : a[c], D ? e = (d += k) + q : (t && (k = Math.max(i, Math.min(j, 2 * t[c] - d))), k < d ? (e = d, d = k) : e = k), p[0] != d || p[1] != e) return c ? h = null : g = null, p[0] = d, p[1] = e, !0
                }

                function s() {
                    q(), z.style("pointer-events", "all").selectAll(".resize").style("display", a.empty() ? "none" : null), hg.select("body").style("cursor", null), G.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), E(), x({
                        type: "brushend"
                    })
                }
                var t, u, v = this,
                    w = hg.select(hg.event.target),
                    x = i.of(v, arguments),
                    z = hg.select(v),
                    A = w.datum(),
                    B = !/^(n|s)$/.test(A) && j,
                    C = !/^(e|w)$/.test(A) && k,
                    D = w.classed("extent"),
                    E = X(v),
                    F = hg.mouse(v),
                    G = hg.select(b(v)).on("keydown.brush", f).on("keyup.brush", p);
                if (hg.event.changedTouches ? G.on("touchmove.brush", q).on("touchend.brush", s) : G.on("mousemove.brush", q).on("mouseup.brush", s), z.interrupt().selectAll("*").interrupt(), D) F[0] = l[0] - F[0], F[1] = m[0] - F[1];
                else if (A) {
                    var H = +/w$/.test(A),
                        I = +/^n/.test(A);
                    u = [l[1 - H] - F[0], m[1 - I] - F[1]], F[0] = l[H], F[1] = m[I]
                } else hg.event.altKey && (t = F.slice());
                z.style("pointer-events", "none").selectAll(".resize").style("display", null), hg.select("body").style("cursor", w.style("cursor")), x({
                    type: "brushstart"
                }), q()
            }
            var g, h, i = A(a, "brushstart", "brush", "brushend"),
                j = null,
                k = null,
                l = [0, 0],
                m = [0, 0],
                n = !0,
                o = !0,
                p = Qi[0];
            return a.event = function(a) {
                a.each(function() {
                    var a = i.of(this, arguments),
                        b = {
                            x: l,
                            y: m,
                            i: g,
                            j: h
                        },
                        c = this.__chart__ || b;
                    this.__chart__ = b, Ii ? hg.select(this).transition().each("start.brush", function() {
                        g = c.i, h = c.j, l = c.x, m = c.y, a({
                            type: "brushstart"
                        })
                    }).tween("brush:brush", function() {
                        var c = td(l, b.x),
                            d = td(m, b.y);
                        return g = h = null,
                            function(e) {
                                l = b.x = c(e), m = b.y = d(e), a({
                                    type: "brush",
                                    mode: "resize"
                                })
                            }
                    }).each("end.brush", function() {
                        g = b.i, h = b.j, a({
                            type: "brush",
                            mode: "resize"
                        }), a({
                            type: "brushend"
                        })
                    }) : (a({
                        type: "brushstart"
                    }), a({
                        type: "brush",
                        mode: "resize"
                    }), a({
                        type: "brushend"
                    }))
                })
            }, a.x = function(b) {
                return arguments.length ? (j = b, p = Qi[!j << 1 | !k], a) : j
            }, a.y = function(b) {
                return arguments.length ? (k = b, p = Qi[!j << 1 | !k], a) : k
            }, a.clamp = function(b) {
                return arguments.length ? (j && k ? (n = !!b[0], o = !!b[1]) : j ? n = !!b : k && (o = !!b), a) : j && k ? [n, o] : j ? n : k ? o : null
            }, a.extent = function(b) {
                var c, d, e, f, i;
                return arguments.length ? (j && (c = b[0], d = b[1], k && (c = c[0], d = d[0]), g = [c, d], j.invert && (c = j(c), d = j(d)), d < c && (i = c, c = d, d = i), c == l[0] && d == l[1] || (l = [c, d])), k && (e = b[0], f = b[1], j && (e = e[1], f = f[1]), h = [e, f], k.invert && (e = k(e), f = k(f)), f < e && (i = e, e = f, f = i), e == m[0] && f == m[1] || (m = [e, f])), a) : (j && (g ? (c = g[0], d = g[1]) : (c = l[0], d = l[1], j.invert && (c = j.invert(c), d = j.invert(d)), d < c && (i = c, c = d, d = i))), k && (h ? (e = h[0], f = h[1]) : (e = m[0], f = m[1], k.invert && (e = k.invert(e), f = k.invert(f)), f < e && (i = e, e = f, f = i))), j && k ? [
                    [c, e],
                    [d, f]
                ] : j ? [c, d] : k && [e, f])
            }, a.clear = function() {
                return a.empty() || (l = [0, 0], m = [0, 0], g = h = null), a
            }, a.empty = function() {
                return !!j && l[0] == l[1] || !!k && m[0] == m[1]
            }, hg.rebind(a, i, "on")
        };
        var Pi = {
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            },
            Qi = [
                ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
                ["e", "w"],
                ["n", "s"],
                []
            ],
            Ri = ih.format = oh.timeFormat,
            Si = Ri.utc,
            Ti = Si("%Y-%m-%dT%H:%M:%S.%LZ");
        Ri.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? cg : Ti, cg.parse = function(a) {
            var b = new Date(a);
            return isNaN(b) ? null : b
        }, cg.toString = Ti.toString, ih.second = Oa(function(a) {
            return new jh(1e3 * Math.floor(a / 1e3))
        }, function(a, b) {
            a.setTime(a.getTime() + 1e3 * Math.floor(b))
        }, function(a) {
            return a.getSeconds()
        }), ih.seconds = ih.second.range, ih.seconds.utc = ih.second.utc.range, ih.minute = Oa(function(a) {
            return new jh(6e4 * Math.floor(a / 6e4))
        }, function(a, b) {
            a.setTime(a.getTime() + 6e4 * Math.floor(b))
        }, function(a) {
            return a.getMinutes()
        }), ih.minutes = ih.minute.range, ih.minutes.utc = ih.minute.utc.range, ih.hour = Oa(function(a) {
            var b = a.getTimezoneOffset() / 60;
            return new jh(36e5 * (Math.floor(a / 36e5 - b) + b))
        }, function(a, b) {
            a.setTime(a.getTime() + 36e5 * Math.floor(b))
        }, function(a) {
            return a.getHours()
        }), ih.hours = ih.hour.range, ih.hours.utc = ih.hour.utc.range, ih.month = Oa(function(a) {
            return a = ih.day(a), a.setDate(1), a
        }, function(a, b) {
            a.setMonth(a.getMonth() + b)
        }, function(a) {
            return a.getMonth()
        }), ih.months = ih.month.range, ih.months.utc = ih.month.utc.range;
        var Ui = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
            Vi = [
                [ih.second, 1],
                [ih.second, 5],
                [ih.second, 15],
                [ih.second, 30],
                [ih.minute, 1],
                [ih.minute, 5],
                [ih.minute, 15],
                [ih.minute, 30],
                [ih.hour, 1],
                [ih.hour, 3],
                [ih.hour, 6],
                [ih.hour, 12],
                [ih.day, 1],
                [ih.day, 2],
                [ih.week, 1],
                [ih.month, 1],
                [ih.month, 3],
                [ih.year, 1]
            ],
            Wi = Ri.multi([
                [".%L", function(a) {
                    return a.getMilliseconds()
                }],
                [":%S", function(a) {
                    return a.getSeconds()
                }],
                ["%I:%M", function(a) {
                    return a.getMinutes()
                }],
                ["%I %p", function(a) {
                    return a.getHours()
                }],
                ["%a %d", function(a) {
                    return a.getDay() && 1 != a.getDate()
                }],
                ["%b %d", function(a) {
                    return 1 != a.getDate()
                }],
                ["%B", function(a) {
                    return a.getMonth()
                }],
                ["%Y", Db]
            ]),
            Xi = {
                range: function(a, b, c) {
                    return hg.range(Math.ceil(a / c) * c, +b, c).map(eg)
                },
                floor: s,
                ceil: s
            };
        Vi.year = ih.year, ih.scale = function() {
            return dg(hg.scale.linear(), Vi, Wi)
        };
        var Yi = Vi.map(function(a) {
                return [a[0].utc, a[1]]
            }),
            Zi = Si.multi([
                [".%L", function(a) {
                    return a.getUTCMilliseconds()
                }],
                [":%S", function(a) {
                    return a.getUTCSeconds()
                }],
                ["%I:%M", function(a) {
                    return a.getUTCMinutes()
                }],
                ["%I %p", function(a) {
                    return a.getUTCHours()
                }],
                ["%a %d", function(a) {
                    return a.getUTCDay() && 1 != a.getUTCDate()
                }],
                ["%b %d", function(a) {
                    return 1 != a.getUTCDate()
                }],
                ["%B", function(a) {
                    return a.getUTCMonth()
                }],
                ["%Y", Db]
            ]);
        Yi.year = ih.year.utc, ih.scale.utc = function() {
            return dg(hg.scale.linear(), Yi, Zi)
        }, hg.text = Ba(function(a) {
            return a.responseText
        }), hg.json = function(a, b) {
            return Ca(a, "application/json", fg, b)
        }, hg.html = function(a, b) {
            return Ca(a, "text/html", gg, b)
        }, hg.xml = Ba(function(a) {
            return a.responseXML
        }), "function" == typeof define && define.amd ? (this.d3 = hg, define(hg)) : "object" == typeof module && module.exports ? module.exports = hg : this.d3 = hg
    }(), d3.geo.tile = function() {
        function a() {
            var a = Math.max(Math.log(c) / Math.LN2 - 8, 0),
                f = Math.round(a + e),
                g = Math.pow(2, a - f + 8),
                h = [(d[0] - c / 2) / g, (d[1] - c / 2) / g],
                i = [],
                j = d3.range(Math.max(0, Math.floor(-h[0])), Math.max(0, Math.ceil(b[0] / g - h[0])));
            return d3.range(Math.max(0, Math.floor(-h[1])), Math.max(0, Math.ceil(b[1] / g - h[1]))).forEach(function(a) {
                j.forEach(function(b) {
                    i.push([b, a, f])
                })
            }), i.translate = h, i.scale = g, i
        }
        var b = [960, 500],
            c = 256,
            d = [b[0] / 2, b[1] / 2],
            e = 0;
        return a.size = function(c) {
            return arguments.length ? (b = c, a) : b
        }, a.scale = function(b) {
            return arguments.length ? (c = b, a) : c
        }, a.translate = function(b) {
            return arguments.length ? (d = b, a) : d
        }, a.zoomDelta = function(b) {
            return arguments.length ? (e = +b, a) : e
        }, a
    },
    function() {
        function a(a, b) {
            function c(b) {
                var c, d = a.arcs[b < 0 ? ~b : b],
                    e = d[0];
                return a.transform ? (c = [0, 0], d.forEach(function(a) {
                    c[0] += a[0], c[1] += a[1]
                })) : c = d[d.length - 1], b < 0 ? [c, e] : [e, c]
            }

            function d(a, b) {
                for (var c in a) {
                    var d = a[c];
                    delete b[d.start], delete d.start, delete d.end, d.forEach(function(a) {
                        e[a < 0 ? ~a : a] = 1
                    }), h.push(d)
                }
            }
            var e = {},
                f = {},
                g = {},
                h = [],
                i = -1;
            return b.forEach(function(c, d) {
                var e, f = a.arcs[c < 0 ? ~c : c];
                f.length < 3 && !f[1][0] && !f[1][1] && (e = b[++i], b[i] = c, b[d] = e)
            }), b.forEach(function(a) {
                var b, d, e = c(a),
                    h = e[0],
                    i = e[1];
                if (b = g[h])
                    if (delete g[b.end], b.push(a), b.end = i, d = f[i]) {
                        delete f[d.start];
                        var j = d === b ? b : b.concat(d);
                        f[j.start = b.start] = g[j.end = d.end] = j
                    } else f[b.start] = g[b.end] = b;
                else if (b = f[i])
                    if (delete f[b.start], b.unshift(a), b.start = h, d = g[h]) {
                        delete g[d.end];
                        var k = d === b ? b : d.concat(b);
                        f[k.start = d.start] = g[k.end = b.end] = k
                    } else f[b.start] = g[b.end] = b;
                else b = [a], f[b.start = h] = g[b.end = i] = b
            }), d(g, f), d(f, g), b.forEach(function(a) {
                e[a < 0 ? ~a : a] || h.push([a])
            }), h
        }

        function b(b, c, d) {
            function e(a) {
                var b = a < 0 ? ~a : a;
                (k[b] || (k[b] = [])).push({
                    i: a,
                    g: j
                })
            }

            function f(a) {
                a.forEach(e)
            }

            function g(a) {
                a.forEach(f)
            }

            function h(a) {
                "GeometryCollection" === a.type ? a.geometries.forEach(h) : a.type in l && (j = a, l[a.type](a.arcs))
            }
            var i = [];
            if (arguments.length > 1) {
                var j, k = [],
                    l = {
                        LineString: f,
                        MultiLineString: g,
                        Polygon: g,
                        MultiPolygon: function(a) {
                            a.forEach(g)
                        }
                    };
                h(c), k.forEach(arguments.length < 3 ? function(a) {
                    i.push(a[0].i)
                } : function(a) {
                    d(a[0].g, a[a.length - 1].g) && i.push(a[0].i)
                })
            } else
                for (var m = 0, n = b.arcs.length; m < n; ++m) i.push(m);
            return {
                type: "MultiLineString",
                arcs: a(b, i)
            }
        }

        function c(b, c) {
            function d(a) {
                a.forEach(function(b) {
                    b.forEach(function(b) {
                        (g[b = b < 0 ? ~b : b] || (g[b] = [])).push(a)
                    })
                }), h.push(a)
            }

            function e(a) {
                return k(f(b, {
                    type: "Polygon",
                    arcs: [a]
                }).coordinates[0]) > 0
            }
            var g = {},
                h = [],
                i = [];
            return c.forEach(function(a) {
                "Polygon" === a.type ? d(a.arcs) : "MultiPolygon" === a.type && a.arcs.forEach(d)
            }), h.forEach(function(a) {
                if (!a._) {
                    var b = [],
                        c = [a];
                    for (a._ = 1, i.push(b); a = c.pop();) b.push(a), a.forEach(function(a) {
                        a.forEach(function(a) {
                            g[a < 0 ? ~a : a].forEach(function(a) {
                                a._ || (a._ = 1, c.push(a))
                            })
                        })
                    })
                }
            }), h.forEach(function(a) {
                delete a._
            }), {
                type: "MultiPolygon",
                arcs: i.map(function(c) {
                    var d = [];
                    if (c.forEach(function(a) {
                            a.forEach(function(a) {
                                a.forEach(function(a) {
                                    g[a < 0 ? ~a : a].length < 2 && d.push(a)
                                })
                            })
                        }), d = a(b, d), (n = d.length) > 1)
                        for (var f, h = e(c[0][0]), i = 0; i < n; ++i)
                            if (h === e(d[i])) {
                                f = d[0], d[0] = d[i], d[i] = f;
                                break
                            }
                    return d
                })
            }
        }

        function d(a, b) {
            return "GeometryCollection" === b.type ? {
                type: "FeatureCollection",
                features: b.geometries.map(function(b) {
                    return e(a, b)
                })
            } : e(a, b)
        }

        function e(a, b) {
            var c = {
                type: "Feature",
                id: b.id,
                properties: b.properties || {},
                geometry: f(a, b)
            };
            return null == b.id && delete c.id, c
        }

        function f(a, b) {
            function c(a, b) {
                b.length && b.pop();
                for (var c, d = k[a < 0 ? ~a : a], e = 0, f = d.length; e < f; ++e) b.push(c = d[e].slice()), j(c, e);
                a < 0 && g(b, f)
            }

            function d(a) {
                return a = a.slice(), j(a, 0), a
            }

            function e(a) {
                for (var b = [], d = 0, e = a.length; d < e; ++d) c(a[d], b);
                return b.length < 2 && b.push(b[0].slice()), b
            }

            function f(a) {
                for (var b = e(a); b.length < 4;) b.push(b[0].slice());
                return b
            }

            function h(a) {
                return a.map(f)
            }

            function i(a) {
                var b = a.type;
                return "GeometryCollection" === b ? {
                    type: b,
                    geometries: a.geometries.map(i)
                } : b in l ? {
                    type: b,
                    coordinates: l[b](a)
                } : null
            }
            var j = p(a.transform),
                k = a.arcs,
                l = {
                    Point: function(a) {
                        return d(a.coordinates)
                    },
                    MultiPoint: function(a) {
                        return a.coordinates.map(d)
                    },
                    LineString: function(a) {
                        return e(a.arcs)
                    },
                    MultiLineString: function(a) {
                        return a.arcs.map(e)
                    },
                    Polygon: function(a) {
                        return h(a.arcs)
                    },
                    MultiPolygon: function(a) {
                        return a.arcs.map(h)
                    }
                };
            return i(b)
        }

        function g(a, b) {
            for (var c, d = a.length, e = d - b; e < --d;) c = a[e], a[e++] = a[d], a[d] = c
        }

        function h(a, b) {
            for (var c = 0, d = a.length; c < d;) {
                var e = c + d >>> 1;
                a[e] < b ? c = e + 1 : d = e
            }
            return c
        }

        function i(a) {
            function b(a, b) {
                a.forEach(function(a) {
                    a < 0 && (a = ~a);
                    var c = e[a];
                    c ? c.push(b) : e[a] = [b]
                })
            }

            function c(a, c) {
                a.forEach(function(a) {
                    b(a, c)
                })
            }

            function d(a, b) {
                "GeometryCollection" === a.type ? a.geometries.forEach(function(a) {
                    d(a, b)
                }) : a.type in g && g[a.type](a.arcs, b)
            }
            var e = {},
                f = a.map(function() {
                    return []
                }),
                g = {
                    LineString: b,
                    MultiLineString: c,
                    Polygon: c,
                    MultiPolygon: function(a, b) {
                        a.forEach(function(a) {
                            c(a, b)
                        })
                    }
                };
            a.forEach(d);
            for (var i in e)
                for (var j = e[i], k = j.length, l = 0; l < k; ++l)
                    for (var m = l + 1; m < k; ++m) {
                        var n, o = j[l],
                            p = j[m];
                        (n = f[o])[i = h(n, p)] !== p && n.splice(i, 0, p), (n = f[p])[i = h(n, o)] !== o && n.splice(i, 0, o)
                    }
            return f
        }

        function j(a, b) {
            function c(a) {
                f.remove(a), a[1][2] = b(a), f.push(a)
            }
            var d = p(a.transform),
                e = q(a.transform),
                f = o();
            return b || (b = l), a.arcs.forEach(function(a) {
                for (var g, h, i = [], j = 0, k = 0, l = a.length; k < l; ++k) h = a[k], d(a[k] = [h[0], h[1], 1 / 0], k);
                for (var k = 1, l = a.length - 1; k < l; ++k) g = a.slice(k - 1, k + 2), g[1][2] = b(g), i.push(g), f.push(g);
                for (var k = 0, l = i.length; k < l; ++k) g = i[k], g.previous = i[k - 1], g.next = i[k + 1];
                for (; g = f.pop();) {
                    var m = g.previous,
                        n = g.next;
                    g[1][2] < j ? g[1][2] = j : j = g[1][2], m && (m.next = n, m[2] = g[2], c(m)), n && (n.previous = m, n[0] = g[0], c(n))
                }
                a.forEach(e)
            }), a
        }

        function k(a) {
            for (var b, c = -1, d = a.length, e = a[d - 1], f = 0; ++c < d;) b = e, e = a[c], f += b[0] * e[1] - b[1] * e[0];
            return .5 * f
        }

        function l(a) {
            var b = a[0],
                c = a[1],
                d = a[2];
            return Math.abs((b[0] - d[0]) * (c[1] - b[1]) - (b[0] - c[0]) * (d[1] - b[1]))
        }

        function m(a, b) {
            return a[1][2] - b[1][2]
        }

        function o() {
            function a(a, b) {
                for (; b > 0;) {
                    var c = (b + 1 >> 1) - 1,
                        e = d[c];
                    if (m(a, e) >= 0) break;
                    d[e._ = b] = e, d[a._ = b = c] = a
                }
            }

            function b(a, b) {
                for (;;) {
                    var c = b + 1 << 1,
                        f = c - 1,
                        g = b,
                        h = d[g];
                    if (f < e && m(d[f], h) < 0 && (h = d[g = f]), c < e && m(d[c], h) < 0 && (h = d[g = c]), g === b) break;
                    d[h._ = b] = h, d[a._ = b = g] = a
                }
            }
            var c = {},
                d = [],
                e = 0;
            return c.push = function(b) {
                return a(d[b._ = e] = b, e++), e
            }, c.pop = function() {
                if (!(e <= 0)) {
                    var a, c = d[0];
                    return --e > 0 && (a = d[e], b(d[a._ = 0] = a, 0)), c
                }
            }, c.remove = function(c) {
                var f, g = c._;
                if (d[g] === c) return g !== --e && (f = d[e], (m(f, c) < 0 ? a : b)(d[f._ = g] = f, g)), g
            }, c
        }

        function p(a) {
            if (!a) return r;
            var b, c, d = a.scale[0],
                e = a.scale[1],
                f = a.translate[0],
                g = a.translate[1];
            return function(a, h) {
                h || (b = c = 0), a[0] = (b += a[0]) * d + f, a[1] = (c += a[1]) * e + g
            }
        }

        function q(a) {
            if (!a) return r;
            var b, c, d = a.scale[0],
                e = a.scale[1],
                f = a.translate[0],
                g = a.translate[1];
            return function(a, h) {
                h || (b = c = 0);
                var i = (a[0] - f) / d | 0,
                    j = (a[1] - g) / e | 0;
                a[0] = i - b, a[1] = j - c, b = i, c = j
            }
        }

        function r() {}
        var s = {
            version: "1.6.19",
            mesh: function(a) {
                return f(a, b.apply(this, arguments))
            },
            meshArcs: b,
            merge: function(a) {
                return f(a, c.apply(this, arguments))
            },
            mergeArcs: c,
            feature: d,
            neighbors: i,
            presimplify: j
        };
        "function" == typeof define && define.amd ? define(s) : "object" == typeof module && module.exports ? module.exports = s : this.topojson = s
    }(),
    function() {
        function a(a) {
            function d() {
                for (; h = k < j.length && a > l;) {
                    var b = k++,
                        d = j[b],
                        f = c.call(d, 1);
                    f.push(e(b)), ++l, d[0].apply(null, f)
                }
            }

            function e(a) {
                return function(b, c) {
                    --l, null == n && (null != b ? (n = b, k = m = NaN, f()) : (j[a] = c, --m ? h || d() : f()))
                }
            }

            function f() {
                null != n ? o(n) : i ? o(n, j) : o.apply(null, [n].concat(j))
            }
            var g, h, i, j = [],
                k = 0,
                l = 0,
                m = 0,
                n = null,
                o = b;
            return a || (a = 1 / 0), g = {
                defer: function() {
                    return n || (j.push(arguments), ++m, d()), g
                },
                await: function(a) {
                    return o = a, i = !1, m || f(), g
                },
                awaitAll: function(a) {
                    return o = a, i = !0, m || f(), g
                }
            }
        }

        function b() {}
        var c = [].slice;
        a.version = "1.0.7", "function" == typeof define && define.amd ? define(function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.queue = a
    }();
var colorbrewer = {
    YlGn: {
        3: ["#f7fcb9", "#addd8e", "#31a354"],
        4: ["#ffffcc", "#c2e699", "#78c679", "#238443"],
        5: ["#ffffcc", "#c2e699", "#78c679", "#31a354", "#006837"],
        6: ["#ffffcc", "#d9f0a3", "#addd8e", "#78c679", "#31a354", "#006837"],
        7: ["#ffffcc", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#005a32"],
        8: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#005a32"],
        9: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"]
    },
    YlGnBu: {
        3: ["#edf8b1", "#7fcdbb", "#2c7fb8"],
        4: ["#ffffcc", "#a1dab4", "#41b6c4", "#225ea8"],
        5: ["#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494"],
        6: ["#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#2c7fb8", "#253494"],
        7: ["#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#0c2c84"],
        8: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#0c2c84"],
        9: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"]
    },
    GnBu: {
        3: ["#e0f3db", "#a8ddb5", "#43a2ca"],
        4: ["#f0f9e8", "#bae4bc", "#7bccc4", "#2b8cbe"],
        5: ["#f0f9e8", "#bae4bc", "#7bccc4", "#43a2ca", "#0868ac"],
        6: ["#f0f9e8", "#ccebc5", "#a8ddb5", "#7bccc4", "#43a2ca", "#0868ac"],
        7: ["#f0f9e8", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#08589e"],
        8: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#08589e"],
        9: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"]
    },
    BuGn: {
        3: ["#e5f5f9", "#99d8c9", "#2ca25f"],
        4: ["#edf8fb", "#b2e2e2", "#66c2a4", "#238b45"],
        5: ["#edf8fb", "#b2e2e2", "#66c2a4", "#2ca25f", "#006d2c"],
        6: ["#edf8fb", "#ccece6", "#99d8c9", "#66c2a4", "#2ca25f", "#006d2c"],
        7: ["#edf8fb", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#005824"],
        8: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#005824"],
        9: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"]
    },
    PuBuGn: {
        3: ["#ece2f0", "#a6bddb", "#1c9099"],
        4: ["#f6eff7", "#bdc9e1", "#67a9cf", "#02818a"],
        5: ["#f6eff7", "#bdc9e1", "#67a9cf", "#1c9099", "#016c59"],
        6: ["#f6eff7", "#d0d1e6", "#a6bddb", "#67a9cf", "#1c9099", "#016c59"],
        7: ["#f6eff7", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016450"],
        8: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016450"],
        9: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"]
    },
    PuBu: {
        3: ["#ece7f2", "#a6bddb", "#2b8cbe"],
        4: ["#f1eef6", "#bdc9e1", "#74a9cf", "#0570b0"],
        5: ["#f1eef6", "#bdc9e1", "#74a9cf", "#2b8cbe", "#045a8d"],
        6: ["#f1eef6", "#d0d1e6", "#a6bddb", "#74a9cf", "#2b8cbe", "#045a8d"],
        7: ["#f1eef6", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#034e7b"],
        8: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#034e7b"],
        9: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"]
    },
    BuPu: {
        3: ["#e0ecf4", "#9ebcda", "#8856a7"],
        4: ["#edf8fb", "#b3cde3", "#8c96c6", "#88419d"],
        5: ["#edf8fb", "#b3cde3", "#8c96c6", "#8856a7", "#810f7c"],
        6: ["#edf8fb", "#bfd3e6", "#9ebcda", "#8c96c6", "#8856a7", "#810f7c"],
        7: ["#edf8fb", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#6e016b"],
        8: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#6e016b"],
        9: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"]
    },
    RdPu: {
        3: ["#fde0dd", "#fa9fb5", "#c51b8a"],
        4: ["#feebe2", "#fbb4b9", "#f768a1", "#ae017e"],
        5: ["#feebe2", "#fbb4b9", "#f768a1", "#c51b8a", "#7a0177"],
        6: ["#feebe2", "#fcc5c0", "#fa9fb5", "#f768a1", "#c51b8a", "#7a0177"],
        7: ["#feebe2", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"],
        8: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177"],
        9: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"]
    },
    PuRd: {
        3: ["#e7e1ef", "#c994c7", "#dd1c77"],
        4: ["#f1eef6", "#d7b5d8", "#df65b0", "#ce1256"],
        5: ["#f1eef6", "#d7b5d8", "#df65b0", "#dd1c77", "#980043"],
        6: ["#f1eef6", "#d4b9da", "#c994c7", "#df65b0", "#dd1c77", "#980043"],
        7: ["#f1eef6", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#91003f"],
        8: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#91003f"],
        9: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"]
    },
    OrRd: {
        3: ["#fee8c8", "#fdbb84", "#e34a33"],
        4: ["#fef0d9", "#fdcc8a", "#fc8d59", "#d7301f"],
        5: ["#fef0d9", "#fdcc8a", "#fc8d59", "#e34a33", "#b30000"],
        6: ["#fef0d9", "#fdd49e", "#fdbb84", "#fc8d59", "#e34a33", "#b30000"],
        7: ["#fef0d9", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#990000"],
        8: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#990000"],
        9: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"]
    },
    YlOrRd: {
        3: ["#ffeda0", "#feb24c", "#f03b20"],
        4: ["#ffffb2", "#fecc5c", "#fd8d3c", "#e31a1c"],
        5: ["#ffffb2", "#fecc5c", "#fd8d3c", "#f03b20", "#bd0026"],
        6: ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#f03b20", "#bd0026"],
        7: ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#b10026"],
        8: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#b10026"],
        9: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"]
    },
    YlOrBr: {
        3: ["#fff7bc", "#fec44f", "#d95f0e"],
        4: ["#ffffd4", "#fed98e", "#fe9929", "#cc4c02"],
        5: ["#ffffd4", "#fed98e", "#fe9929", "#d95f0e", "#993404"],
        6: ["#ffffd4", "#fee391", "#fec44f", "#fe9929", "#d95f0e", "#993404"],
        7: ["#ffffd4", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#8c2d04"],
        8: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#8c2d04"],
        9: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"]
    },
    Purples: {
        3: ["#efedf5", "#bcbddc", "#756bb1"],
        4: ["#f2f0f7", "#cbc9e2", "#9e9ac8", "#6a51a3"],
        5: ["#f2f0f7", "#cbc9e2", "#9e9ac8", "#756bb1", "#54278f"],
        6: ["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"],
        7: ["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#4a1486"],
        8: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#4a1486"],
        9: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"]
    },
    Blues: {
        3: ["#deebf7", "#9ecae1", "#3182bd"],
        4: ["#eff3ff", "#bdd7e7", "#6baed6", "#2171b5"],
        5: ["#eff3ff", "#bdd7e7", "#6baed6", "#3182bd", "#08519c"],
        6: ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#3182bd", "#08519c"],
        7: ["#eff3ff", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#084594"],
        8: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#084594"],
        9: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"]
    },
    Greens: {
        3: ["#e5f5e0", "#a1d99b", "#31a354"],
        4: ["#edf8e9", "#bae4b3", "#74c476", "#238b45"],
        5: ["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"],
        6: ["#edf8e9", "#c7e9c0", "#a1d99b", "#74c476", "#31a354", "#006d2c"],
        7: ["#edf8e9", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#005a32"],
        8: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#005a32"],
        9: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"]
    },
    Oranges: {
        3: ["#fee6ce", "#fdae6b", "#e6550d"],
        4: ["#feedde", "#fdbe85", "#fd8d3c", "#d94701"],
        5: ["#feedde", "#fdbe85", "#fd8d3c", "#e6550d", "#a63603"],
        6: ["#feedde", "#fdd0a2", "#fdae6b", "#fd8d3c", "#e6550d", "#a63603"],
        7: ["#feedde", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#8c2d04"],
        8: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#8c2d04"],
        9: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"]
    },
    Reds: {
        3: ["#fee0d2", "#fc9272", "#de2d26"],
        4: ["#fee5d9", "#fcae91", "#fb6a4a", "#cb181d"],
        5: ["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"],
        6: ["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#de2d26", "#a50f15"],
        7: ["#fee5d9", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#99000d"],
        8: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#99000d"],
        9: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"]
    },
    Greys: {
        3: ["#f0f0f0", "#bdbdbd", "#636363"],
        4: ["#f7f7f7", "#cccccc", "#969696", "#525252"],
        5: ["#f7f7f7", "#cccccc", "#969696", "#636363", "#252525"],
        6: ["#f7f7f7", "#d9d9d9", "#bdbdbd", "#969696", "#636363", "#252525"],
        7: ["#f7f7f7", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525"],
        8: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525"],
        9: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"]
    },
    PuOr: {
        3: ["#f1a340", "#f7f7f7", "#998ec3"],
        4: ["#e66101", "#fdb863", "#b2abd2", "#5e3c99"],
        5: ["#e66101", "#fdb863", "#f7f7f7", "#b2abd2", "#5e3c99"],
        6: ["#b35806", "#f1a340", "#fee0b6", "#d8daeb", "#998ec3", "#542788"],
        7: ["#b35806", "#f1a340", "#fee0b6", "#f7f7f7", "#d8daeb", "#998ec3", "#542788"],
        8: ["#b35806", "#e08214", "#fdb863", "#fee0b6", "#d8daeb", "#b2abd2", "#8073ac", "#542788"],
        9: ["#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788"],
        10: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
        11: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"]
    },
    BrBG: {
        3: ["#d8b365", "#f5f5f5", "#5ab4ac"],
        4: ["#a6611a", "#dfc27d", "#80cdc1", "#018571"],
        5: ["#a6611a", "#dfc27d", "#f5f5f5", "#80cdc1", "#018571"],
        6: ["#8c510a", "#d8b365", "#f6e8c3", "#c7eae5", "#5ab4ac", "#01665e"],
        7: ["#8c510a", "#d8b365", "#f6e8c3", "#f5f5f5", "#c7eae5", "#5ab4ac", "#01665e"],
        8: ["#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#c7eae5", "#80cdc1", "#35978f", "#01665e"],
        9: ["#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e"],
        10: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
        11: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"]
    },
    PRGn: {
        3: ["#af8dc3", "#f7f7f7", "#7fbf7b"],
        4: ["#7b3294", "#c2a5cf", "#a6dba0", "#008837"],
        5: ["#7b3294", "#c2a5cf", "#f7f7f7", "#a6dba0", "#008837"],
        6: ["#762a83", "#af8dc3", "#e7d4e8", "#d9f0d3", "#7fbf7b", "#1b7837"],
        7: ["#762a83", "#af8dc3", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#7fbf7b", "#1b7837"],
        8: ["#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837"],
        9: ["#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837"],
        10: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
        11: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"]
    },
    PiYG: {
        3: ["#e9a3c9", "#f7f7f7", "#a1d76a"],
        4: ["#d01c8b", "#f1b6da", "#b8e186", "#4dac26"],
        5: ["#d01c8b", "#f1b6da", "#f7f7f7", "#b8e186", "#4dac26"],
        6: ["#c51b7d", "#e9a3c9", "#fde0ef", "#e6f5d0", "#a1d76a", "#4d9221"],
        7: ["#c51b7d", "#e9a3c9", "#fde0ef", "#f7f7f7", "#e6f5d0", "#a1d76a", "#4d9221"],
        8: ["#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221"],
        9: ["#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221"],
        10: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
        11: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"]
    },
    RdBu: {
        3: ["#ef8a62", "#f7f7f7", "#67a9cf"],
        4: ["#ca0020", "#f4a582", "#92c5de", "#0571b0"],
        5: ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"],
        6: ["#b2182b", "#ef8a62", "#fddbc7", "#d1e5f0", "#67a9cf", "#2166ac"],
        7: ["#b2182b", "#ef8a62", "#fddbc7", "#f7f7f7", "#d1e5f0", "#67a9cf", "#2166ac"],
        8: ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac"],
        9: ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac"],
        10: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
        11: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"]
    },
    RdGy: {
        3: ["#ef8a62", "#ffffff", "#999999"],
        4: ["#ca0020", "#f4a582", "#bababa", "#404040"],
        5: ["#ca0020", "#f4a582", "#ffffff", "#bababa", "#404040"],
        6: ["#b2182b", "#ef8a62", "#fddbc7", "#e0e0e0", "#999999", "#4d4d4d"],
        7: ["#b2182b", "#ef8a62", "#fddbc7", "#ffffff", "#e0e0e0", "#999999", "#4d4d4d"],
        8: ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#e0e0e0", "#bababa", "#878787", "#4d4d4d"],
        9: ["#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d"],
        10: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
        11: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"]
    },
    RdYlBu: {
        3: ["#fc8d59", "#ffffbf", "#91bfdb"],
        4: ["#d7191c", "#fdae61", "#abd9e9", "#2c7bb6"],
        5: ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"],
        6: ["#d73027", "#fc8d59", "#fee090", "#e0f3f8", "#91bfdb", "#4575b4"],
        7: ["#d73027", "#fc8d59", "#fee090", "#ffffbf", "#e0f3f8", "#91bfdb", "#4575b4"],
        8: ["#d73027", "#f46d43", "#fdae61", "#fee090", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4"],
        9: ["#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4"],
        10: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
        11: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"]
    },
    Spectral: {
        3: ["#fc8d59", "#ffffbf", "#99d594"],
        4: ["#d7191c", "#fdae61", "#abdda4", "#2b83ba"],
        5: ["#d7191c", "#fdae61", "#ffffbf", "#abdda4", "#2b83ba"],
        6: ["#d53e4f", "#fc8d59", "#fee08b", "#e6f598", "#99d594", "#3288bd"],
        7: ["#d53e4f", "#fc8d59", "#fee08b", "#ffffbf", "#e6f598", "#99d594", "#3288bd"],
        8: ["#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#e6f598", "#abdda4", "#66c2a5", "#3288bd"],
        9: ["#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd"],
        10: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
        11: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"]
    },
    RdYlGn: {
        3: ["#fc8d59", "#ffffbf", "#91cf60"],
        4: ["#d7191c", "#fdae61", "#a6d96a", "#1a9641"],
        5: ["#d7191c", "#fdae61", "#ffffbf", "#a6d96a", "#1a9641"],
        6: ["#d73027", "#fc8d59", "#fee08b", "#d9ef8b", "#91cf60", "#1a9850"],
        7: ["#d73027", "#fc8d59", "#fee08b", "#ffffbf", "#d9ef8b", "#91cf60", "#1a9850"],
        8: ["#d73027", "#f46d43", "#fdae61", "#fee08b", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850"],
        9: ["#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850"],
        10: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
        11: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"]
    },
    Accent: {
        3: ["#7fc97f", "#beaed4", "#fdc086"],
        4: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99"],
        5: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0"],
        6: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f"],
        7: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17"],
        8: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"]
    },
    Dark2: {
        3: ["#1b9e77", "#d95f02", "#7570b3"],
        4: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a"],
        5: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e"],
        6: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"],
        7: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d"],
        8: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"]
    },
    Paired: {
        3: ["#a6cee3", "#1f78b4", "#b2df8a"],
        4: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c"],
        5: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99"],
        6: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c"],
        7: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f"],
        8: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00"],
        9: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6"],
        10: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a"],
        11: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99"],
        12: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"]
    },
    Pastel1: {
        3: ["#fbb4ae", "#b3cde3", "#ccebc5"],
        4: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4"],
        5: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6"],
        6: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc"],
        7: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd"],
        8: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec"],
        9: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    },
    Pastel2: {
        3: ["#b3e2cd", "#fdcdac", "#cbd5e8"],
        4: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4"],
        5: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9"],
        6: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae"],
        7: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc"],
        8: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"]
    },
    Set1: {
        3: ["#e41a1c", "#377eb8", "#4daf4a"],
        4: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3"],
        5: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00"],
        6: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33"],
        7: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628"],
        8: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf"],
        9: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"]
    },
    Set2: {
        3: ["#66c2a5", "#fc8d62", "#8da0cb"],
        4: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3"],
        5: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854"],
        6: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f"],
        7: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494"],
        8: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"]
    },
    Set3: {
        3: ["#8dd3c7", "#ffffb3", "#bebada"],
        4: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072"],
        5: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3"],
        6: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462"],
        7: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69"],
        8: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5"],
        9: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9"],
        10: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd"],
        11: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5"],
        12: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"]
    }
};
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length" in a && a.length,
            c = $.type(a);
        return "function" !== c && !$.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }

    function d(a, b, c) {
        if ($.isFunction(b)) return $.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return $.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ga.test(b)) return $.filter(b, a, c);
            b = $.filter(b, a)
        }
        return $.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = ma[a] = {};
        return $.each(a.match(la) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), $.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = $.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(sa, "-$1").toLowerCase(), "string" == typeof(c = a.getAttribute(d))) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : ra.test(c) ? $.parseJSON(c) : c)
                } catch (a) {}
                qa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }

    function m(a, b) {
        return $.nodeName(a, "table") && $.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Ha.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; c < d; c++) pa.set(a[c], "globalEval", !b || pa.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (pa.hasData(a) && (f = pa.access(a), g = pa.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) $.event.add(b, e, j[e][c])
            }
            qa.hasData(a) && (h = qa.access(a), i = $.extend({}, h), qa.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && $.nodeName(a, b) ? $.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && wa.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = $(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : $.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z,
            c = La[a];
        return c || (c = t(a, b), "none" !== c && c || (Ka = (Ka || $("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ka[0].contentDocument, b.write(), b.close(), c = t(a, b), Ka.detach()), La[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Oa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || $.contains(a.ownerDocument, a) || (g = $.style(a, b)), Na.test(g) && Ma.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ua.length; e--;)
            if ((b = Ua[e] + c) in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Qa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += $.css(a, c + ua[f], !0, e)), d ? ("content" === c && (g -= $.css(a, "padding" + ua[f], !0, e)), "margin" !== c && (g -= $.css(a, "border" + ua[f] + "Width", !0, e))) : (g += $.css(a, "padding" + ua[f], !0, e), "padding" !== c && (g += $.css(a, "border" + ua[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Oa(a),
            g = "border-box" === $.css(a, "boxSizing", !1, f);
        if (e <= 0 || null == e) {
            if (e = v(a, b, f), (e < 0 || null == e) && (e = a.style[b]), Na.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) d = a[g], d.style && (f[g] = pa.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && va(d) && (f[g] = pa.access(d, "olddisplay", u(d.nodeName)))) : (e = va(d), "none" === c && e || pa.set(d, "olddisplay", e ? c : $.css(d, "display"))));
        for (g = 0; g < h; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function() {
            Va = void 0
        }), Va = $.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ua[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (_a[b] || []).concat(_a["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k = this,
            l = {},
            m = a.style,
            n = a.nodeType && va(a),
            o = pa.get(a, "fxshow");
        c.queue || (h = $._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, k.always(function() {
            k.always(function() {
                h.unqueued--, $.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = $.css(a, "display"), "inline" === ("none" === j ? pa.get(a, "olddisplay") || u(a.nodeName) : j) && "none" === $.css(a, "float") && (m.display = "inline-block")), c.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Xa.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) {
                    if ("show" !== e || !o || void 0 === o[d]) continue;
                    n = !0
                }
                l[d] = o && o[d] || $.style(a, d)
            } else j = void 0;
        if ($.isEmptyObject(l)) "inline" === ("none" === j ? u(a.nodeName) : j) && (m.display = j);
        else {
            o ? "hidden" in o && (n = o.hidden) : o = pa.access(a, "fxshow", {}), f && (o.hidden = !n), n ? $(a).show() : k.done(function() {
                $(a).hide()
            }), k.done(function() {
                var b;
                pa.remove(a, "fxshow");
                for (b in l) $.style(a, b, l[b])
            });
            for (d in l) g = F(n ? o[d] : 0, d, k), d in o || (o[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = $.camelCase(c), e = b[d], f = a[c], $.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = $.cssHooks[d]) && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = $a.length,
            h = $.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Va || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: $.extend({}, b),
                opts: $.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Va || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = $.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); f < g; f++)
            if (d = $a[f].call(j, a, k, j.opts)) return d;
        return $.map(k, F, j), $.isFunction(j.opts.start) && j.opts.start.call(a, j), $.fx.timer($.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(la) || [];
            if ($.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, $.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === pb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = $.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && $.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (!(g = j[i + " " + f] || j["* " + f]))
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (!0 !== g)
                if (g && a.throws) b = g(b);
                else try {
                    b = g(b)
                } catch (a) {
                    return {
                        state: "parsererror",
                        error: g ? a : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function O(a, b, c, d) {
        var e;
        if ($.isArray(b)) $.each(b, function(b, e) {
            c || ub.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== $.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return $.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {},
        W = V.toString,
        X = V.hasOwnProperty,
        Y = {},
        Z = a.document,
        $ = function(a, b) {
            return new $.fn.init(a, b)
        },
        _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        aa = /^-ms-/,
        ba = /-([\da-z])/gi,
        ca = function(a, b) {
            return b.toUpperCase()
        };
    $.fn = $.prototype = {
        jquery: "2.1.4",
        constructor: $,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? a < 0 ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = $.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return $.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack($.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, $.extend = $.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || $.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && ($.isPlainObject(d) || (e = $.isArray(d))) ? (e ? (e = !1, f = c && $.isArray(c) ? c : []) : f = c && $.isPlainObject(c) ? c : {}, g[b] = $.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, $.extend({
        expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === $.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !$.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" === $.type(a) && !a.nodeType && !$.isWindow(a) && !(a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            (a = $.trim(a)) && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(aa, "ms-").replace(ba, ca)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e = 0,
                f = a.length,
                g = c(a);
            if (d) {
                if (g)
                    for (; e < f && !1 !== b.apply(a[e], d); e++);
                else
                    for (e in a)
                        if (!1 === b.apply(a[e], d)) break
            } else if (g)
                for (; e < f && !1 !== b.call(a[e], e, a[e]); e++);
            else
                for (e in a)
                    if (!1 === b.call(a[e], e, a[e])) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(_, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? $.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, f = a.length, g = !c; e < f; e++) !b(a[e], e) !== g && d.push(a[e]);
            return d
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; f < g; f++) null != (e = b(a[f], f, d)) && i.push(e);
            else
                for (f in a) null != (e = b(a[f], f, d)) && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), $.isFunction(a)) return d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || $.guid++, e
        },
        now: Date.now,
        support: Y
    }), $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var da = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, j, l, m, n, o, p;
            if ((b ? b.ownerDocument || b : M) !== E && D(b), b = b || E, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && G) {
                if (11 !== h && (e = qa.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (!(f = b.getElementById(g)) || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && K(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return Y.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && t.getElementsByClassName) return Y.apply(c, b.getElementsByClassName(g)), c
                    }
                if (t.qsa && (!H || !H.test(a))) {
                    if (n = m = L, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (l = x(a), (m = b.getAttribute("id")) ? n = m.replace(sa, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", j = l.length; j--;) l[j] = n + k(l[j]);
                        o = ra.test(a) && i(b.parentNode) || b, p = l.join(",")
                    }
                    if (p) try {
                        return Y.apply(c, o.querySelectorAll(p)), c
                    } catch (a) {} finally {
                        m || b.removeAttribute("id")
                    }
                }
            }
            return z(a.replace(ga, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > u.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[L] = !0, a
        }

        function e(a) {
            var b = E.createElement("div");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) u.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || T) - (~a.sourceIndex || T);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function i(a) {
            return a && void 0 !== a.getElementsByTagName && a
        }

        function j() {}

        function k(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function l(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = O++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [N, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[L] || (b[L] = {}), (h = i[d]) && h[0] === N && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function m(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function n(a, c, d) {
            for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
            return d
        }

        function o(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function p(a, b, c, e, f, g) {
            return e && !e[L] && (e = p(e)), f && !f[L] && (f = p(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    p = [],
                    q = g.length,
                    r = d || n(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : o(r, m, a, h, i),
                    t = c ? f || (d ? a : q || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = o(t, p), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[p[k]] = !(s[p[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? $(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = o(t === g ? t.splice(q, t.length) : t), f ? f(null, g, t, i) : Y.apply(g, t)
            })
        }

        function q(a) {
            for (var b, c, d, e = a.length, f = u.relative[a[0].type], g = f || u.relative[" "], h = f ? 1 : 0, i = l(function(a) {
                    return a === b
                }, g, !0), j = l(function(a) {
                    return $(b, a) > -1
                }, g, !0), n = [function(a, c, d) {
                    var e = !f && (d || c !== A) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; h < e; h++)
                if (c = u.relative[a[h].type]) n = [l(m(n), c)];
                else {
                    if (c = u.filter[a[h].type].apply(null, a[h].matches), c[L]) {
                        for (d = ++h; d < e && !u.relative[a[d].type]; d++);
                        return p(h > 1 && m(n), h > 1 && k(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ga, "$1"), c, h < d && q(a.slice(h, d)), d < e && q(a = a.slice(d)), d < e && k(a))
                    }
                    n.push(c)
                }
            return m(n)
        }

        function r(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        p = "0",
                        q = d && [],
                        r = [],
                        s = A,
                        t = d || f && u.find.TAG("*", j),
                        v = N += null == s ? 1 : Math.random() || .1,
                        w = t.length;
                    for (j && (A = g !== E && g); p !== w && null != (k = t[p]); p++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (N = v)
                        }
                        e && ((k = !m && k) && n--, d && q.push(k))
                    }
                    if (n += p, e && p !== n) {
                        for (l = 0; m = c[l++];) m(q, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; p--;) q[p] || r[p] || (r[p] = W.call(i));
                            r = o(r)
                        }
                        Y.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (N = v, A = s), q
                };
            return e ? d(g) : g
        }
        var s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L = "sizzle" + 1 * new Date,
            M = a.document,
            N = 0,
            O = 0,
            P = c(),
            Q = c(),
            R = c(),
            S = function(a, b) {
                return a === b && (C = !0), 0
            },
            T = 1 << 31,
            U = {}.hasOwnProperty,
            V = [],
            W = V.pop,
            X = V.push,
            Y = V.push,
            Z = V.slice,
            $ = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            aa = "[\\x20\\t\\r\\n\\f]",
            ba = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ca = ba.replace("w", "w#"),
            da = "\\[" + aa + "*(" + ba + ")(?:" + aa + "*([*^$|!~]?=)" + aa + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ca + "))|)" + aa + "*\\]",
            ea = ":(" + ba + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + da + ")*)|.*)\\)|)",
            fa = new RegExp(aa + "+", "g"),
            ga = new RegExp("^" + aa + "+|((?:^|[^\\\\])(?:\\\\.)*)" + aa + "+$", "g"),
            ha = new RegExp("^" + aa + "*," + aa + "*"),
            ia = new RegExp("^" + aa + "*([>+~]|" + aa + ")" + aa + "*"),
            ja = new RegExp("=" + aa + "*([^\\]'\"]*?)" + aa + "*\\]", "g"),
            ka = new RegExp(ea),
            la = new RegExp("^" + ca + "$"),
            ma = {
                ID: new RegExp("^#(" + ba + ")"),
                CLASS: new RegExp("^\\.(" + ba + ")"),
                TAG: new RegExp("^(" + ba.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + da),
                PSEUDO: new RegExp("^" + ea),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + aa + "*(even|odd|(([+-]|)(\\d*)n|)" + aa + "*(?:([+-]|)" + aa + "*(\\d+)|))" + aa + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + _ + ")$", "i"),
                needsContext: new RegExp("^" + aa + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + aa + "*((?:-\\d)?\\d*)" + aa + "*\\)|)(?=[^-]|$)", "i")
            },
            na = /^(?:input|select|textarea|button)$/i,
            oa = /^h\d$/i,
            pa = /^[^{]+\{\s*\[native \w/,
            qa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ra = /[+~]/,
            sa = /'|\\/g,
            ta = new RegExp("\\\\([\\da-f]{1,6}" + aa + "?|(" + aa + ")|.)", "ig"),
            ua = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            va = function() {
                D()
            };
        try {
            Y.apply(V = Z.call(M.childNodes), M.childNodes), V[M.childNodes.length].nodeType
        } catch (a) {
            Y = {
                apply: V.length ? function(a, b) {
                    X.apply(a, Z.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        t = b.support = {}, w = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, D = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : M;
            return d !== E && 9 === d.nodeType && d.documentElement ? (E = d, F = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", va, !1) : c.attachEvent && c.attachEvent("onunload", va)), G = !w(d), t.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), t.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), t.getElementsByClassName = pa.test(d.getElementsByClassName), t.getById = e(function(a) {
                return F.appendChild(a).id = L, !d.getElementsByName || !d.getElementsByName(L).length
            }), t.getById ? (u.find.ID = function(a, b) {
                if (void 0 !== b.getElementById && G) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, u.filter.ID = function(a) {
                var b = a.replace(ta, ua);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete u.find.ID, u.filter.ID = function(a) {
                var b = a.replace(ta, ua);
                return function(a) {
                    var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), u.find.TAG = t.getElementsByTagName ? function(a, b) {
                return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : t.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, u.find.CLASS = t.getElementsByClassName && function(a, b) {
                if (G) return b.getElementsByClassName(a)
            }, I = [], H = [], (t.qsa = pa.test(d.querySelectorAll)) && (e(function(a) {
                F.appendChild(a).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + aa + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || H.push("\\[" + aa + "*(?:value|" + _ + ")"), a.querySelectorAll("[id~=" + L + "-]").length || H.push("~="), a.querySelectorAll(":checked").length || H.push(":checked"), a.querySelectorAll("a#" + L + "+*").length || H.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && H.push("name" + aa + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), H.push(",.*:")
            })), (t.matchesSelector = pa.test(J = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && e(function(a) {
                t.disconnectedMatch = J.call(a, "div"), J.call(a, "[s!='']:x"), I.push("!=", ea)
            }), H = H.length && new RegExp(H.join("|")), I = I.length && new RegExp(I.join("|")), b = pa.test(F.compareDocumentPosition), K = b || pa.test(F.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, S = b ? function(a, b) {
                if (a === b) return C = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c || (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !t.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === M && K(M, a) ? -1 : b === d || b.ownerDocument === M && K(M, b) ? 1 : B ? $(B, a) - $(B, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return C = !0, 0;
                var c, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : B ? $(B, a) - $(B, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === M ? -1 : j[e] === M ? 1 : 0
            }, d) : E
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== E && D(a), c = c.replace(ja, "='$1']"), t.matchesSelector && G && (!I || !I.test(c)) && (!H || !H.test(c))) try {
                var d = J.call(a, c);
                if (d || t.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (a) {}
            return b(c, E, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== E && D(a), K(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== E && D(a);
            var c = u.attrHandle[b.toLowerCase()],
                d = c && U.call(u.attrHandle, b.toLowerCase()) ? c(a, b, !G) : void 0;
            return void 0 !== d ? d : t.attributes || !G ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (C = !t.detectDuplicates, B = !t.sortStable && a.slice(0), a.sort(S), C) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return B = null, a
        }, v = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += v(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += v(b);
            return c
        }, u = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ma,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ma.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ka.test(c) && (b = x(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ta, ua).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = P[a + " "];
                    return b || (b = new RegExp("(^|" + aa + ")" + a + "(" + aa + "|$)")) && P(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(fa, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[L] || (q[L] = {}), j = k[a] || [], n = j[0] === N && j[1], m = j[0] === N && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [N, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[L] || (b[L] = {}))[a]) && j[0] === N) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[L] || (l[L] = {}))[a] = [N, m]), l !== b)););
                            return (m -= e) === d || m % d == 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = u.pseudos[a] || u.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[L] ? f(c) : f.length > 1 ? (e = [a, a, "", c], u.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = $(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = y(a.replace(ga, "$1"));
                    return e[L] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(ta, ua),
                        function(b) {
                            return (b.textContent || b.innerText || v(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return la.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = G ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === F
                },
                focus: function(a) {
                    return a === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !u.pseudos.empty(a)
                },
                header: function(a) {
                    return oa.test(a.nodeName)
                },
                input: function(a) {
                    return na.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(a, b) {
                    return [b - 1]
                }),
                eq: h(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: h(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: h(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: h(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: h(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, u.pseudos.nth = u.pseudos.eq;
        for (s in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) u.pseudos[s] = function(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }(s);
        for (s in {
                submit: !0,
                reset: !0
            }) u.pseudos[s] = function(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }(s);
        return j.prototype = u.filters = u.pseudos, u.setFilters = new j, x = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = Q[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = u.preFilter; h;) {
                d && !(e = ha.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ia.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ga, " ")
                }), h = h.slice(d.length));
                for (g in u.filter) !(e = ma[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : Q(a, i).slice(0)
        }, y = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = R[a + " "];
            if (!f) {
                for (b || (b = x(a)), c = b.length; c--;) f = q(b[c]), f[L] ? d.push(f) : e.push(f);
                f = R(a, r(e, d)), f.selector = a
            }
            return f
        }, z = b.select = function(a, b, c, d) {
            var e, f, g, h, j, l = "function" == typeof a && a,
                m = !d && x(a = l.selector || a);
            if (c = c || [], 1 === m.length) {
                if (f = m[0] = m[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && t.getById && 9 === b.nodeType && G && u.relative[f[1].type]) {
                    if (!(b = (u.find.ID(g.matches[0].replace(ta, ua), b) || [])[0])) return c;
                    l && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = ma.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !u.relative[h = g.type]);)
                    if ((j = u.find[h]) && (d = j(g.matches[0].replace(ta, ua), ra.test(f[0].type) && i(b.parentNode) || b))) {
                        if (f.splice(e, 1), !(a = d.length && k(f))) return Y.apply(c, d), c;
                        break
                    }
            }
            return (l || y(a, m))(d, b, !G, c, ra.test(a) && i(b.parentNode) || b), c
        }, t.sortStable = L.split("").sort(S).join("") === L, t.detectDuplicates = !!C, D(), t.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(E.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), t.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(_, function(a, b, c) {
            var d;
            if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    $.find = da, $.expr = da.selectors, $.expr[":"] = $.expr.pseudos, $.unique = da.uniqueSort, $.text = da.getText, $.isXMLDoc = da.isXML, $.contains = da.contains;
    var ea = $.expr.match.needsContext,
        fa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ga = /^.[^:#\[\.,]*$/;
    $.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? $.find.matchesSelector(d, a) ? [d] : [] : $.find.matches(a, $.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, $.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack($(a).filter(function() {
                for (b = 0; b < c; b++)
                    if ($.contains(e[b], this)) return !0
            }));
            for (b = 0; b < c; b++) $.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? $.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && ea.test(a) ? $(a) : a || [], !1).length
        }
    });
    var ha, ia = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ($.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (!(c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ia.exec(a)) || !c[1] && b) return !b || b.jquery ? (b || ha).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof $ ? b[0] : b, $.merge(this, $.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), fa.test(c[1]) && $.isPlainObject(b))
                    for (c in b) $.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : $.isFunction(a) ? void 0 !== ha.ready ? ha.ready(a) : a($) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), $.makeArray(a, this))
    }).prototype = $.fn, ha = $(Z);
    var ja = /^(?:parents|prev(?:Until|All))/,
        ka = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    $.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && $(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), $.fn.extend({
        has: function(a) {
            var b = $(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if ($.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = ea.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; d < e; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && $.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? $.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call($(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack($.unique($.merge(this.get(), $(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), $.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return $.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return $.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return $.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return $.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return $.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return $.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return $.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return $.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || $.merge([], a.childNodes)
        }
    }, function(a, b) {
        $.fn[a] = function(c, d) {
            var e = $.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = $.filter(d, e)), this.length > 1 && (ka[a] || $.unique(e), ja.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var la = /\S+/g,
        ma = {};
    $.Callbacks = function(a) {
        a = "string" == typeof a ? ma[a] || f(a) : $.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length,
                    d = !0; i && h < g; h++)
                    if (!1 === i[h].apply(f[0], f[1]) && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var c = i.length;
                        ! function b(c) {
                            $.each(c, function(c, d) {
                                var e = $.type(d);
                                "function" === e ? a.unique && l.has(d) || i.push(d) : d && d.length && "string" !== e && b(d)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function() {
                    return i && $.each(arguments, function(a, b) {
                        for (var c;
                            (c = $.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (c <= g && g--, c <= h && h--)
                    }), this
                },
                has: function(a) {
                    return a ? $.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], g = 0, this
                },
                disable: function() {
                    return i = j = b = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, b || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, $.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", $.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", $.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", $.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return $.Deferred(function(c) {
                            $.each(b, function(b, f) {
                                var g = $.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? $.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, $.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && $.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : $.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); e < g; e++) f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var na;
    $.fn.ready = function(a) {
        return $.ready.promise().done(a), this
    }, $.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? $.readyWait++ : $.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --$.readyWait : $.isReady) || ($.isReady = !0, !0 !== a && --$.readyWait > 0 || (na.resolveWith(Z, [$]), $.fn.triggerHandler && ($(Z).triggerHandler("ready"), $(Z).off("ready"))))
        }
    }), $.ready.promise = function(b) {
        return na || (na = $.Deferred(), "complete" === Z.readyState ? setTimeout($.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), na.promise(b)
    }, $.ready.promise();
    var oa = $.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === $.type(c)) {
            e = !0;
            for (h in c) $.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, $.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call($(a), c)
            })), b))
            for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    $.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = $.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, $.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if ($.isEmptyObject(f)) $.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, $.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                $.isArray(b) ? d = b.concat(b.map($.camelCase)) : (e = $.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(la) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !$.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var pa = new h,
        qa = new h,
        ra = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        sa = /([A-Z])/g;
    $.extend({
        hasData: function(a) {
            return qa.hasData(a) || pa.hasData(a)
        },
        data: function(a, b, c) {
            return qa.access(a, b, c)
        },
        removeData: function(a, b) {
            qa.remove(a, b)
        },
        _data: function(a, b, c) {
            return pa.access(a, b, c)
        },
        _removeData: function(a, b) {
            pa.remove(a, b)
        }
    }), $.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = qa.get(f), 1 === f.nodeType && !pa.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = $.camelCase(d.slice(5)), i(f, d, e[d])));
                    pa.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                qa.set(this, a)
            }) : oa(this, function(b) {
                var c, d = $.camelCase(a);
                if (f && void 0 === b) {
                    if (void 0 !== (c = qa.get(f, a))) return c;
                    if (void 0 !== (c = qa.get(f, d))) return c;
                    if (void 0 !== (c = i(f, d, void 0))) return c
                } else this.each(function() {
                    var c = qa.get(this, d);
                    qa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && qa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                qa.remove(this, a)
            })
        }
    }), $.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = pa.get(a, b), c && (!d || $.isArray(c) ? d = pa.access(a, b, $.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = $.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = $._queueHooks(a, b),
                g = function() {
                    $.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return pa.get(a, c) || pa.access(a, c, {
                empty: $.Callbacks("once memory").add(function() {
                    pa.remove(a, [b + "queue", c])
                })
            })
        }
    }), $.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? $.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = $.queue(this, a, b);
                $._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && $.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                $.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = $.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = pa.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var ta = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ua = ["Top", "Right", "Bottom", "Left"],
        va = function(a, b) {
            return a = b || a, "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a)
        },
        wa = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = Z.createDocumentFragment(),
            b = a.appendChild(Z.createElement("div")),
            c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    Y.focusinBubbles = "onfocusin" in a;
    var xa = /^key/,
        ya = /^(?:mouse|pointer|contextmenu)|click/,
        za = /^(?:focusinfocus|focusoutblur)$/,
        Aa = /^([^.]*)(?:\.(.+)|)$/;
    $.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = pa.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = $.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return void 0 !== $ && $.event.triggered !== b.type ? $.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(la) || [""], j = b.length; j--;) h = Aa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = $.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = $.event.special[n] || {}, k = $.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && $.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), $.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = pa.hasData(a) && pa.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(la) || [""], j = b.length; j--;)
                    if (h = Aa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = $.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || $.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) $.event.remove(a, n + b[j], c, d, !0);
                $.isEmptyObject(i) && (delete q.handle, pa.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !za.test(n + $.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[$.expando] ? b : new $.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : $.makeArray(c, [b]), l = $.event.special[n] || {}, e || !l.trigger || !1 !== l.trigger.apply(d, c))) {
                if (!e && !l.noBubble && !$.isWindow(d)) {
                    for (i = l.delegateType || n, za.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (pa.get(g, "events") || {})[b.type] && pa.get(g, "handle"), k && k.apply(g, c), (k = j && g[j]) && k.apply && $.acceptData(g) && (b.result = k.apply(g, c), !1 === b.result && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && !1 !== l._default.apply(m.pop(), c) || !$.acceptData(d) || j && $.isFunction(d[n]) && !$.isWindow(d) && (h = d[j], h && (d[j] = null), $.event.triggered = n, d[n](), $.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = $.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (pa.get(this, "events") || {})[a.type] || [],
                j = $.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || !1 !== j.preDispatch.call(this, a)) {
                for (g = $.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) a.namespace_re && !a.namespace_re.test(f.namespace) || (a.handleObj = f, a.data = f.data, void 0 !== (d = (($.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h)) && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (!0 !== i.disabled || "click" !== a.type) {
                        for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? $(e, this).index(i) >= 0 : $.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[$.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = ya.test(e) ? this.mouseHooks : xa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new $.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== l() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === l() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && $.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return $.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = $.extend(new $.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, $.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, $.Event = function(a, b) {
        if (!(this instanceof $.Event)) return new $.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? j : k) : this.type = a, b && $.extend(this, b), this.timeStamp = a && a.timeStamp || $.now(), this[$.expando] = !0
    }, $.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, $.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        $.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || $.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || $.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            $.event.simulate(b, a.target, $.event.fix(a), !0)
        };
        $.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = pa.access(d, b);
                e || d.addEventListener(a, c, !0), pa.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = pa.access(d, b) - 1;
                e ? pa.access(d, b, e) : (d.removeEventListener(a, c, !0), pa.remove(d, b))
            }
        }
    }), $.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), !1 === d) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return $().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = $.guid++)), this.each(function() {
                $.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, $(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = k), this.each(function() {
                $.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                $.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return $.event.trigger(a, b, c, !0)
        }
    });
    var Ba = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ca = /<([\w:]+)/,
        Da = /<|&#?\w+;/,
        Ea = /<(?:script|style|link)/i,
        Fa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ga = /^$|\/(?:java|ecma)script/i,
        Ha = /^true\/(.*)/,
        Ia = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ja = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ja.optgroup = Ja.option, Ja.tbody = Ja.tfoot = Ja.colgroup = Ja.caption = Ja.thead, Ja.th = Ja.td, $.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = $.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || $.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; d < e; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; d < e; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; m < n; m++)
                if ((e = a[m]) || 0 === e)
                    if ("object" === $.type(e)) $.merge(l, e.nodeType ? [e] : e);
                    else if (Da.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Ca.exec(e) || ["", ""])[1].toLowerCase(), h = Ja[g] || Ja._default, f.innerHTML = h[1] + e.replace(Ba, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                $.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === $.inArray(e, d)) && (i = $.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Ga.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = $.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if ($.acceptData(c) && (e = c[pa.expando]) && (b = pa.cache[e])) {
                    if (b.events)
                        for (d in b.events) f[d] ? $.event.remove(c, d) : $.removeEvent(c, d, b.handle);
                    pa.cache[e] && delete pa.cache[e]
                }
                delete qa.cache[c[qa.expando]]
            }
        }
    }), $.fn.extend({
        text: function(a) {
            return oa(this, function(a) {
                return void 0 === a ? $.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    m(this, a).appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? $.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || $.cleanData(r(c)), c.parentNode && (b && $.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && ($.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return $.clone(this, a, b)
            })
        },
        html: function(a) {
            return oa(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ea.test(a) && !Ja[(Ca.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ba, "<$1></$2>");
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && ($.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, $.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = $.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Fa.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = $.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = $.map(r(c, "script"), n), f = e.length; i < j; i++) g = c, i !== l && (g = $.clone(g, !0, !0), f && $.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, $.map(e, o), i = 0; i < f; i++) g = e[i], Ga.test(g.type || "") && !pa.access(g, "globalEval") && $.contains(h, g) && (g.src ? $._evalUrl && $._evalUrl(g.src) : $.globalEval(g.textContent.replace(Ia, "")))
            }
            return this
        }
    }), $.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        $.fn[a] = function(a) {
            for (var c, d = [], e = $(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), $(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ka, La = {},
        Ma = /^margin/,
        Na = new RegExp("^(" + ta + ")(?!px)[a-z%]+$", "i"),
        Oa = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
            f = Z.createElement("div"),
            g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && $.extend(Y, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), $.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Pa = /^(none|table(?!-c[ea]).+)/,
        Qa = new RegExp("^(" + ta + ")(.*)$", "i"),
        Ra = new RegExp("^([+-])=(" + ta + ")", "i"),
        Sa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ta = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ua = ["Webkit", "O", "Moz", "ms"];
    $.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = $.camelCase(b),
                    i = a.style;
                if (b = $.cssProps[h] || ($.cssProps[h] = x(i, h)), g = $.cssHooks[b] || $.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                f = typeof c, "string" === f && (e = Ra.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat($.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || $.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = $.camelCase(b);
            return b = $.cssProps[h] || ($.cssProps[h] = x(a.style, h)), g = $.cssHooks[b] || $.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), !0 === c || $.isNumeric(f) ? f || 0 : e) : e
        }
    }), $.each(["height", "width"], function(a, b) {
        $.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return Pa.test($.css(a, "display")) && 0 === a.offsetWidth ? $.swap(a, Sa, function() {
                    return A(a, b, d)
                }) : A(a, b, d)
            },
            set: function(a, c, d) {
                var e = d && Oa(a);
                return y(a, c, d ? z(a, b, d, "border-box" === $.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), $.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        if (b) return $.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"])
    }), $.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        $.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ua[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ma.test(a) || ($.cssHooks[a + b].set = y)
    }), $.fn.extend({
        css: function(a, b) {
            return oa(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if ($.isArray(b)) {
                    for (d = Oa(a), e = b.length; g < e; g++) f[b[g]] = $.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? $.style(a, b, c) : $.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                va(this) ? $(this).show() : $(this).hide()
            })
        }
    }), $.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || ($.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = $.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                $.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, $.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, $.fx = C.prototype.init, $.fx.step = {};
    var Va, Wa, Xa = /^(?:toggle|show|hide)$/,
        Ya = new RegExp("^(?:([+-])=|)(" + ta + ")([a-z%]*)$", "i"),
        Za = /queueHooks$/,
        $a = [G],
        _a = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Ya.exec(b),
                    f = e && e[3] || ($.cssNumber[a] ? "" : "px"),
                    g = ($.cssNumber[a] || "px" !== f && +d) && Ya.exec($.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do {
                        h = h || ".5", g /= h, $.style(c.elem, a, g + f)
                    } while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    $.Animation = $.extend(I, {
            tweener: function(a, b) {
                $.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], _a[c] = _a[c] || [], _a[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? $a.unshift(a) : $a.push(a)
            }
        }), $.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? $.extend({}, a) : {
                complete: c || !c && b || $.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !$.isFunction(b) && b
            };
            return d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default, null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                $.isFunction(d.old) && d.old.call(this), d.queue && $.dequeue(this, d.queue)
            }, d
        }, $.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(va).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = $.isEmptyObject(a),
                    f = $.speed(b, c, d),
                    g = function() {
                        var b = I(this, $.extend({}, a), f);
                        (e || pa.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = $.timers,
                        g = pa.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Za.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || $.dequeue(this, a)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var b, c = pa.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = $.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, $.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), $.each(["toggle", "show", "hide"], function(a, b) {
            var c = $.fn[b];
            $.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
            }
        }), $.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            $.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), $.timers = [], $.fx.tick = function() {
            var a, b = 0,
                c = $.timers;
            for (Va = $.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1);
            c.length || $.fx.stop(), Va = void 0
        }, $.fx.timer = function(a) {
            $.timers.push(a), a() ? $.fx.start() : $.timers.pop()
        }, $.fx.interval = 13, $.fx.start = function() {
            Wa || (Wa = setInterval($.fx.tick, $.fx.interval))
        }, $.fx.stop = function() {
            clearInterval(Wa), Wa = null
        }, $.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, $.fn.delay = function(a, b) {
            return a = $.fx ? $.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = Z.createElement("input"),
                b = Z.createElement("select"),
                c = b.appendChild(Z.createElement("option"));
            a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
        }();
    var ab, bb = $.expr.attrHandle;
    $.fn.extend({
        attr: function(a, b) {
            return oa(this, $.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                $.removeAttr(this, a)
            })
        }
    }), $.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? $.prop(a, b, c) : (1 === f && $.isXMLDoc(a) || (b = b.toLowerCase(), d = $.attrHooks[b] || ($.expr.match.bool.test(b) ? ab : void 0)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = $.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void $.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(la);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = $.propFix[c] || c, $.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && $.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), ab = {
        set: function(a, b, c) {
            return !1 === b ? $.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, $.each($.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || $.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i;
    $.fn.extend({
        prop: function(a, b) {
            return oa(this, $.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[$.propFix[a] || a]
            })
        }
    }), $.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !$.isXMLDoc(a), f && (b = $.propFix[b] || b, e = $.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || cb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || ($.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), $.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        $.propFix[this.toLowerCase()] = this
    });
    var db = /[\t\r\n\f]/g;
    $.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if ($.isFunction(a)) return this.each(function(b) {
                $(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(la) || []; i < j; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(db, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = $.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if ($.isFunction(a)) return this.each(function(b) {
                $(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(la) || []; i < j; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(db, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? $.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : $.isFunction(a) ? this.each(function(c) {
                $(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var b, d = 0, e = $(this), f = a.match(la) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else "undefined" !== c && "boolean" !== c || (this.className && pa.set(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : pa.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(db, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var eb = /\r/g;
    $.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = $.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, $(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : $.isArray(e) && (e = $.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), (b = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return (b = $.valHooks[e.type] || $.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(eb, "") : null == c ? "" : c)
            }
        }
    }), $.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = $.find.attr(a, "value");
                    return null != b ? b : $.trim($.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                        if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !$.nodeName(c.parentNode, "optgroup"))) {
                            if (b = $(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = $.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = $.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), $.each(["radio", "checkbox"], function() {
        $.valHooks[this] = {
            set: function(a, b) {
                if ($.isArray(b)) return a.checked = $.inArray($(a).val(), b) >= 0
            }
        }, Y.checkOn || ($.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        $.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), $.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var fb = $.now(),
        gb = /\?/;
    $.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, $.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (a) {
            b = void 0
        }
        return b && !b.getElementsByTagName("parsererror").length || $.error("Invalid XML: " + a), b
    };
    var hb = /#.*$/,
        ib = /([?&])_=[^&]*/,
        jb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        lb = /^(?:GET|HEAD)$/,
        mb = /^\/\//,
        nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ob = {},
        pb = {},
        qb = "*/".concat("*"),
        rb = a.location.href,
        sb = nb.exec(rb.toLowerCase()) || [];
    $.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: rb,
            type: "GET",
            isLocal: kb.test(sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": $.parseJSON,
                "text xml": $.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, $.ajaxSettings), b) : L($.ajaxSettings, a)
        },
        ajaxPrefilter: J(ob),
        ajaxTransport: J(pb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && a < 300 || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && ($.lastModified[e] = u), (u = v.getResponseHeader("etag")) && ($.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, !a && w || (w = "error", a < 0 && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --$.active || $.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = $.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? $(m) : $.event,
                o = $.Deferred(),
                p = $.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = jb.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (t < 2)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || rb) + "").replace(hb, "").replace(mb, sb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = $.trim(l.dataType || "*").toLowerCase().match(la) || [""], null == l.crossDomain && (i = nb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === sb[1] && i[2] === sb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (sb[3] || ("http:" === sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = $.param(l.data, l.traditional)), K(ob, l, b, v), 2 === t) return v;
            j = $.event && l.global, j && 0 == $.active++ && $.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !lb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (gb.test(e) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = ib.test(e) ? e.replace(ib, "$1_=" + fb++) : e + (gb.test(e) ? "&" : "?") + "_=" + fb++)), l.ifModified && ($.lastModified[e] && v.setRequestHeader("If-Modified-Since", $.lastModified[e]), $.etag[e] && v.setRequestHeader("If-None-Match", $.etag[e])), (l.data && l.hasContent && !1 !== l.contentType || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + qb + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (!1 === l.beforeSend.call(m, v, l) || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[k](l[k]);
            if (d = K(pb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (a) {
                    if (!(t < 2)) throw a;
                    c(-1, a)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return $.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return $.get(a, void 0, b, "script")
        }
    }), $.each(["get", "post"], function(a, b) {
        $[b] = function(a, c, d, e) {
            return $.isFunction(c) && (e = e || d, d = c, c = void 0), $.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), $._evalUrl = function(a) {
        return $.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, $.fn.extend({
        wrapAll: function(a) {
            var b;
            return $.isFunction(a) ? this.each(function(b) {
                $(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = $(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return $.isFunction(a) ? this.each(function(b) {
                $(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = $(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = $.isFunction(a);
            return this.each(function(c) {
                $(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
            }).end()
        }
    }), $.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, $.expr.filters.visible = function(a) {
        return !$.expr.filters.hidden(a)
    };
    var tb = /%20/g,
        ub = /\[\]$/,
        vb = /\r?\n/g,
        wb = /^(?:submit|button|image|reset|file)$/i,
        xb = /^(?:input|select|textarea|keygen)/i;
    $.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = $.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(a) || a.jquery && !$.isPlainObject(a)) $.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(tb, "+")
    }, $.fn.extend({
        serialize: function() {
            return $.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = $.prop(this, "elements");
                return a ? $.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !$(this).is(":disabled") && xb.test(this.nodeName) && !wb.test(a) && (this.checked || !wa.test(a))
            }).map(function(a, b) {
                var c = $(this).val();
                return null == c ? null : $.isArray(c) ? $.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(vb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(vb, "\r\n")
                }
            }).get()
        }
    }), $.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var yb = 0,
        zb = {},
        Ab = {
            0: 200,
            1223: 204
        },
        Bb = $.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in zb) zb[a]()
    }), Y.cors = !!Bb && "withCredentials" in Bb, Y.ajax = Bb = !!Bb, $.ajaxTransport(function(a) {
        var b;
        if (Y.cors || Bb && !a.crossDomain) return {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++yb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete zb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ab[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = zb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (a) {
                    if (b) throw a
                }
            },
            abort: function() {
                b && b()
            }
        }
    }), $.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return $.globalEval(a), a
            }
        }
    }), $.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), $.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = $("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Cb = [],
        Db = /(=)\?(?=&|$)|\?\?/;
    $.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Cb.pop() || $.expando + "_" + fb++;
            return this[a] = !0, a
        }
    }), $.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (Db.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Db.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = $.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Db, "$1" + e) : !1 !== b.jsonp && (b.url += (gb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || $.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Cb.push(e)), g && $.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), $.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = fa.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, e), e && e.length && $(e).remove(), $.merge([], d.childNodes))
    };
    var Eb = $.fn.load;
    $.fn.load = function(a, b, c) {
        if ("string" != typeof a && Eb) return Eb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = $.trim(a.slice(h)), a = a.slice(0, h)), $.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && $.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? $("<div>").append($.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, $.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        $.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), $.expr.filters.animated = function(a) {
        return $.grep($.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Fb = a.document.documentElement;
    $.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = $.css(a, "position"),
                l = $(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = $.css(a, "top"), i = $.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), $.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, $.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                $.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, $.contains(b, d) ? (void 0 !== d.getBoundingClientRect && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === $.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), $.nodeName(a[0], "html") || (d = a.offset()), d.top += $.css(a[0], "borderTopWidth", !0), d.left += $.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - $.css(c, "marginTop", !0),
                    left: b.left - d.left - $.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Fb; a && !$.nodeName(a, "html") && "static" === $.css(a, "position");) a = a.offsetParent;
                return a || Fb
            })
        }
    }), $.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        $.fn[b] = function(e) {
            return oa(this, function(b, e, f) {
                var g = P(b);
                if (void 0 === f) return g ? g[c] : b[e];
                g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f
            }, b, e, arguments.length, null)
        }
    }), $.each(["top", "left"], function(a, b) {
        $.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            if (c) return c = v(a, b), Na.test(c) ? $(a).position()[b] + "px" : c
        })
    }), $.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        $.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            $.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (!0 === d || !0 === e ? "margin" : "border");
                return oa(this, function(b, c, d) {
                    var e;
                    return $.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? $.css(b, c, g) : $.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), $.fn.size = function() {
        return this.length
    }, $.fn.andSelf = $.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return $
    });
    var Gb = a.jQuery,
        Hb = a.$;
    return $.noConflict = function(b) {
        return a.$ === $ && (a.$ = Hb), b && a.jQuery === $ && (a.jQuery = Gb), $
    }, void 0 === b && (a.jQuery = a.$ = $), $
});