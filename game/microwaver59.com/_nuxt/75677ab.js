(window.webpackJsonp = window.webpackJsonp || []).push([
	[3], {
		150: function(o, e, t) {
			var content = t(197);
			content.__esModule && (content = content.default), "string" == typeof content && (content = [
				[o.i, content, ""]
			]), content.locals && (o.exports = content.locals);
			(0, t(58).default)("53ea91a4", content, !0, {
				sourceMap: !1
			})
		},
		155: function(o, e, t) {
			console.log(t.p)
			o.exports = t.p + "img/microwaver-error.331519d.png"
		},
		157: function(o, e, t) {
			"use strict";
			var r = t(40),
				component = Object(r.a)({}, (function() {
					var o = this.$createElement;
					return (this._self._c || o)("Nuxt")
				}), [], !1, null, null, null);
			e.a = component.exports
		},
		161: function(o, e, t) {
			t(162), o.exports = t(163)
		},
		180: function(o, e, t) {
			"use strict";
			t.r(e), e.default = function(o) {
				var e = o.env;
				window.fathom && "production" === e.ENV && window.fathom.trackPageview()
			}
		},
		196: function(o, e, t) {
			"use strict";
			t(150)
		},
		197: function(o, e, t) {
			var r = t(57)(!1);
			r.push([o.i, ".error[data-v-c050198c]{display:flex;flex-direction:column;justify-content:flex-end;width:100%;height:100vh;background-size:cover;background-position:50%;color:#1a1a1a;text-align:center}@media(max-width:768px){.error[data-v-c050198c]{background-size:20%}}.error[data-v-c050198c]:visited,.error a[data-v-c050198c]{color:#60f;margin:1rem 0 3rem}.error a[data-v-c050198c]:hover{color:#555}", ""]), o.exports = r
		},
		200: function(o, e, t) {
			var content = t(201);
			content.__esModule && (content = content.default), "string" == typeof content && (content = [
				[o.i, content, ""]
			]), content.locals && (o.exports = content.locals);
			(0, t(58).default)("42e610a2", content, !0, {
				sourceMap: !1
			})
		},
		201: function(o, e, t) {
			var r = t(57)(!1);
			r.push([o.i, "html{font-family:Pressura Mono,monospace;font-size:16px;text-size-adjust:none;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,:after,:before{box-sizing:border-box;margin:0;padding:0;-moz-user-select:none;user-select:none;-ms-user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;touch-action:none}", ""]), o.exports = r
		},
		202: function(o, e, t) {
			var content = t(203);
			content.__esModule && (content = content.default), "string" == typeof content && (content = [
				[o.i, content, ""]
			]), content.locals && (o.exports = content.locals);
			(0, t(58).default)("7b02cc54", content, !0, {
				sourceMap: !1
			})
		},
		203: function(o, e, t) {
			var r = t(57),
				n = t(204),
				c = t(205),
				f = t(206),
				l = t(207),
				d = t(208),
				v = r(!1),
				m = n(c),
				w = n(f),
				x = n(l),
				h = n(d);
			v.push([o.i, '@font-face{font-family:Pressura Mono;font-weight:500 900;font-style:normal;font-display:fallback;src:local(""),url(' + m + ') format("woff2"),url(' + w + ') format("woff")}@font-face{font-family:Pressura;font-weight:500 900;font-style:normal;font-display:fallback;src:local(""),url(' + x + ') format("woff2"),url(' + h + ') format("woff")}', ""]), o.exports = v
		},
		205: function(o, e, t) {
			o.exports = t.p + "fonts/GT-Pressura-Mono-Bold.3bcccda.woff2"
		},
		206: function(o, e, t) {
			o.exports = t.p + "fonts/GT-Pressura-Mono-Bold.d19d680.woff"
		},
		207: function(o, e, t) {
			o.exports = t.p + "fonts/GT-Pressura-Bold.6fedeb4.woff2"
		},
		208: function(o, e, t) {
			o.exports = t.p + "fonts/GT-Pressura-Bold.b078fcd.woff"
		},
		209: function(o, e, t) {
			var map = {
				"./icons.svg": 210,
				"./sprite.svg": 211
			};

			function r(o) {
				var e = n(o);
				return t(e)
			}

			function n(o) {
				if (!t.o(map, o)) {
					var e = new Error("Cannot find module '" + o + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				return map[o]
			}
			r.keys = function() {
				return Object.keys(map)
			}, r.resolve = n, o.exports = r, r.id = 209
		},
		210: function(o, e, t) {
			"use strict";
			t.r(e), e.default = t.p + "1246731355ccf51df8007eedd5ebb52d.svg"
		},
		211: function(o, e, t) {
			"use strict";
			t.r(e), e.default = t.p + "4c58465f16cce8ea5dd34459d1f227a6.svg"
		},
		32: function(o, e, t) {
			"use strict";
			var r = t(155),
				n = t.n(r),
				c = {
					layout: "error",
					props: {
						error: {
							type: Object,
							default: function() {}
						}
					},
					data: function() {
						return {
							image: n.a
						}
					}
				},
				f = (t(196), t(40)),
				component = Object(f.a)(c, (function() {
					var o = this,
						e = o.$createElement,
						t = o._self._c || e;
					return t("div", {
						staticClass: "error",
						style: {
							backgroundImage: "url(" + o.image + ")"
						}
					}, [404 === o.error.statusCode ? t("h1", [o._v("Page not found")]) : t("h1", [o._v("An error occurred")]), o._v(" "), t("NuxtLink", {
						attrs: {
							to: "/"
						}
					}, [o._v("Home page")])], 1)
				}), [], !1, null, "c050198c", null);
			e.a = component.exports
		}
	},
	[
		[161, 7, 4, 8]
	]
]);
//# sourceMappingURL=75677ab.js.map