//  Merci-Michel [R]
//  https://www.merci-michel.com/
//  Build 20220722-103245

var Mu = Object.defineProperty,
	$u = Object.defineProperties;
var Iu = Object.getOwnPropertyDescriptors;
var ys = Object.getOwnPropertySymbols;
var Ou = Object.prototype.hasOwnProperty,
	Uu = Object.prototype.propertyIsEnumerable;
var xs = (e, t, n) => t in e ? Mu(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n,
	Rt = (e, t) => {
		for (var n in t || (t = {})) Ou.call(t, n) && xs(e, n, t[n]);
		if (ys)
			for (var n of ys(t)) Uu.call(t, n) && xs(e, n, t[n]);
		return e
	},
	pa = (e, t) => $u(e, Iu(t));

function vo(e, t) {
	const n = Object.create(null),
		r = e.split(",");
	for (let i = 0; i < r.length; i++) n[r[i]] = !0;
	return t ? i => !!n[i.toLowerCase()] : i => !!n[i]
}
const Ru = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
	Hu = vo(Ru);

function Vc(e) {
	return !!e || e === ""
}

function Hi(e) {
	if (he(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) {
			const r = e[n],
				i = Me(r) ? Fu(r) : Hi(r);
			if (i)
				for (const a in i) t[a] = i[a]
		}
		return t
	} else {
		if (Me(e)) return e;
		if (Se(e)) return e
	}
}
const Gu = /;(?![^(]*\))/g,
	Bu = /:(.+)/;

function Fu(e) {
	const t = {};
	return e.split(Gu).forEach(n => {
		if (n) {
			const r = n.split(Bu);
			r.length > 1 && (t[r[0].trim()] = r[1].trim())
		}
	}), t
}

function Ye(e) {
	let t = "";
	if (Me(e)) t = e;
	else if (he(e))
		for (let n = 0; n < e.length; n++) {
			const r = Ye(e[n]);
			r && (t += r + " ")
		} else if (Se(e))
			for (const n in e) e[n] && (t += n + " ");
	return t.trim()
}
const st = e => Me(e) ? e : e == null ? "" : he(e) || Se(e) && (e.toString === Yc || !me(e.toString)) ? JSON.stringify(e, Wc, 2) : String(e),
	Wc = (e, t) => t && t.__v_isRef ? Wc(e, t.value) : Fn(t) ? {
		[`Map(${t.size})`]: [...t.entries()].reduce((n, [r, i]) => (n[`${r} =>`] = i, n), {})
	} : qc(t) ? {
		[`Set(${t.size})`]: [...t.values()]
	} : Se(t) && !he(t) && !Zc(t) ? String(t) : t,
	Ce = {},
	Bn = [],
	dt = () => {},
	Nu = () => !1,
	ju = /^on[^a-z]/,
	Gi = e => ju.test(e),
	go = e => e.startsWith("onUpdate:"),
	Ue = Object.assign,
	mo = (e, t) => {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1)
	},
	Du = Object.prototype.hasOwnProperty,
	_e = (e, t) => Du.call(e, t),
	he = Array.isArray,
	Fn = e => Bi(e) === "[object Map]",
	qc = e => Bi(e) === "[object Set]",
	me = e => typeof e == "function",
	Me = e => typeof e == "string",
	bo = e => typeof e == "symbol",
	Se = e => e !== null && typeof e == "object",
	Kc = e => Se(e) && me(e.then) && me(e.catch),
	Yc = Object.prototype.toString,
	Bi = e => Yc.call(e),
	Vu = e => Bi(e).slice(8, -1),
	Zc = e => Bi(e) === "[object Object]",
	_o = e => Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
	oi = vo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
	Fi = e => {
		const t = Object.create(null);
		return n => t[n] || (t[n] = e(n))
	},
	Wu = /-(\w)/g,
	xt = Fi(e => e.replace(Wu, (t, n) => n ? n.toUpperCase() : "")),
	qu = /\B([A-Z])/g,
	nr = Fi(e => e.replace(qu, "-$1").toLowerCase()),
	Ni = Fi(e => e.charAt(0).toUpperCase() + e.slice(1)),
	ha = Fi(e => e ? `on${Ni(e)}` : ""),
	Sr = (e, t) => !Object.is(e, t),
	va = (e, t) => {
		for (let n = 0; n < e.length; n++) e[n](t)
	},
	bi = (e, t, n) => {
		Object.defineProperty(e, t, {
			configurable: !0,
			enumerable: !1,
			value: n
		})
	},
	Xc = e => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t
	};
let ws;
const Ku = () => ws || (ws = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
let _t;
class Yu {
	constructor(t = !1) {
		this.active = !0, this.effects = [], this.cleanups = [], !t && _t && (this.parent = _t, this.index = (_t.scopes || (_t.scopes = [])).push(this) - 1)
	}
	run(t) {
		if (this.active) {
			const n = _t;
			try {
				return _t = this, t()
			} finally {
				_t = n
			}
		}
	}
	on() {
		_t = this
	}
	off() {
		_t = this.parent
	}
	stop(t) {
		if (this.active) {
			let n, r;
			for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
			for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
			if (this.scopes)
				for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
			if (this.parent && !t) {
				const i = this.parent.scopes.pop();
				i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
			}
			this.active = !1
		}
	}
}

function Zu(e, t = _t) {
	t && t.active && t.effects.push(e)
}
const yo = e => {
		const t = new Set(e);
		return t.w = 0, t.n = 0, t
	},
	Qc = e => (e.w & rn) > 0,
	Jc = e => (e.n & rn) > 0,
	Xu = ({
		deps: e
	}) => {
		if (e.length)
			for (let t = 0; t < e.length; t++) e[t].w |= rn
	},
	Qu = e => {
		const {
			deps: t
		} = e;
		if (t.length) {
			let n = 0;
			for (let r = 0; r < t.length; r++) {
				const i = t[r];
				Qc(i) && !Jc(i) ? i.delete(e) : t[n++] = i, i.w &= ~rn, i.n &= ~rn
			}
			t.length = n
		}
	},
	Ra = new WeakMap;
let gr = 0,
	rn = 1;
const Ha = 30;
let ct;
const bn = Symbol(""),
	Ga = Symbol("");
class xo {
	constructor(t, n = null, r) {
		this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Zu(this, r)
	}
	run() {
		if (!this.active) return this.fn();
		let t = ct,
			n = Xt;
		for (; t;) {
			if (t === this) return;
			t = t.parent
		}
		try {
			return this.parent = ct, ct = this, Xt = !0, rn = 1 << ++gr, gr <= Ha ? Xu(this) : As(this), this.fn()
		} finally {
			gr <= Ha && Qu(this), rn = 1 << --gr, ct = this.parent, Xt = n, this.parent = void 0, this.deferStop && this.stop()
		}
	}
	stop() {
		ct === this ? this.deferStop = !0 : this.active && (As(this), this.onStop && this.onStop(), this.active = !1)
	}
}

function As(e) {
	const {
		deps: t
	} = e;
	if (t.length) {
		for (let n = 0; n < t.length; n++) t[n].delete(e);
		t.length = 0
	}
}
let Xt = !0;
const el = [];

function rr() {
	el.push(Xt), Xt = !1
}

function ir() {
	const e = el.pop();
	Xt = e === void 0 ? !0 : e
}

function Xe(e, t, n) {
	if (Xt && ct) {
		let r = Ra.get(e);
		r || Ra.set(e, r = new Map);
		let i = r.get(n);
		i || r.set(n, i = yo()), tl(i)
	}
}

function tl(e, t) {
	let n = !1;
	gr <= Ha ? Jc(e) || (e.n |= rn, n = !Qc(e)) : n = !e.has(ct), n && (e.add(ct), ct.deps.push(e))
}

function Tt(e, t, n, r, i, a) {
	const o = Ra.get(e);
	if (!o) return;
	let s = [];
	if (t === "clear") s = [...o.values()];
	else if (n === "length" && he(e)) o.forEach((c, l) => {
		(l === "length" || l >= r) && s.push(c)
	});
	else switch (n !== void 0 && s.push(o.get(n)), t) {
		case "add":
			he(e) ? _o(n) && s.push(o.get("length")) : (s.push(o.get(bn)), Fn(e) && s.push(o.get(Ga)));
			break;
		case "delete":
			he(e) || (s.push(o.get(bn)), Fn(e) && s.push(o.get(Ga)));
			break;
		case "set":
			Fn(e) && s.push(o.get(bn));
			break
	}
	if (s.length === 1) s[0] && Ba(s[0]);
	else {
		const c = [];
		for (const l of s) l && c.push(...l);
		Ba(yo(c))
	}
}

function Ba(e, t) {
	const n = he(e) ? e : [...e];
	for (const r of n) r.computed && Cs(r);
	for (const r of n) r.computed || Cs(r)
}

function Cs(e, t) {
	(e !== ct || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const Ju = vo("__proto__,__v_isRef,__isVue"),
	nl = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(bo)),
	ef = wo(),
	tf = wo(!1, !0),
	nf = wo(!0),
	zs = rf();

function rf() {
	const e = {};
	return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
		e[t] = function(...n) {
			const r = xe(this);
			for (let a = 0, o = this.length; a < o; a++) Xe(r, "get", a + "");
			const i = r[t](...n);
			return i === -1 || i === !1 ? r[t](...n.map(xe)) : i
		}
	}), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
		e[t] = function(...n) {
			rr();
			const r = xe(this)[t].apply(this, n);
			return ir(), r
		}
	}), e
}

function wo(e = !1, t = !1) {
	return function(r, i, a) {
		if (i === "__v_isReactive") return !e;
		if (i === "__v_isReadonly") return e;
		if (i === "__v_isShallow") return t;
		if (i === "__v_raw" && a === (e ? t ? yf : sl : t ? ol : al).get(r)) return r;
		const o = he(r);
		if (!e && o && _e(zs, i)) return Reflect.get(zs, i, a);
		const s = Reflect.get(r, i, a);
		return (bo(i) ? nl.has(i) : Ju(i)) || (e || Xe(r, "get", i), t) ? s : He(s) ? o && _o(i) ? s : s.value : Se(s) ? e ? cl(s) : sn(s) : s
	}
}
const af = rl(),
	of = rl(!0);

function rl(e = !1) {
	return function(n, r, i, a) {
		let o = n[r];
		if (Tr(o) && He(o) && !He(i)) return !1;
		if (!e && !Tr(i) && (Fa(i) || (i = xe(i), o = xe(o)), !he(n) && He(o) && !He(i))) return o.value = i, !0;
		const s = he(n) && _o(r) ? Number(r) < n.length : _e(n, r),
			c = Reflect.set(n, r, i, a);
		return n === xe(a) && (s ? Sr(i, o) && Tt(n, "set", r, i) : Tt(n, "add", r, i)), c
	}
}

function sf(e, t) {
	const n = _e(e, t);
	e[t];
	const r = Reflect.deleteProperty(e, t);
	return r && n && Tt(e, "delete", t, void 0), r
}

function cf(e, t) {
	const n = Reflect.has(e, t);
	return (!bo(t) || !nl.has(t)) && Xe(e, "has", t), n
}

function lf(e) {
	return Xe(e, "iterate", he(e) ? "length" : bn), Reflect.ownKeys(e)
}
const il = {
		get: ef,
		set: af,
		deleteProperty: sf,
		has: cf,
		ownKeys: lf
	},
	uf = {
		get: nf,
		set(e, t) {
			return !0
		},
		deleteProperty(e, t) {
			return !0
		}
	},
	ff = Ue({}, il, {
		get: tf,
		set: of
	}),
	Ao = e => e,
	ji = e => Reflect.getPrototypeOf(e);

function Xr(e, t, n = !1, r = !1) {
	e = e.__v_raw;
	const i = xe(e),
		a = xe(t);
	n || (t !== a && Xe(i, "get", t), Xe(i, "get", a));
	const {
		has: o
	} = ji(i), s = r ? Ao : n ? Eo : Mr;
	if (o.call(i, t)) return s(e.get(t));
	if (o.call(i, a)) return s(e.get(a));
	e !== i && e.get(t)
}

function Qr(e, t = !1) {
	const n = this.__v_raw,
		r = xe(n),
		i = xe(e);
	return t || (e !== i && Xe(r, "has", e), Xe(r, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i)
}

function Jr(e, t = !1) {
	return e = e.__v_raw, !t && Xe(xe(e), "iterate", bn), Reflect.get(e, "size", e)
}

function Es(e) {
	e = xe(e);
	const t = xe(this);
	return ji(t).has.call(t, e) || (t.add(e), Tt(t, "add", e, e)), this
}

function Ps(e, t) {
	t = xe(t);
	const n = xe(this),
		{
			has: r,
			get: i
		} = ji(n);
	let a = r.call(n, e);
	a || (e = xe(e), a = r.call(n, e));
	const o = i.call(n, e);
	return n.set(e, t), a ? Sr(t, o) && Tt(n, "set", e, t) : Tt(n, "add", e, t), this
}

function Ls(e) {
	const t = xe(this),
		{
			has: n,
			get: r
		} = ji(t);
	let i = n.call(t, e);
	i || (e = xe(e), i = n.call(t, e)), r && r.call(t, e);
	const a = t.delete(e);
	return i && Tt(t, "delete", e, void 0), a
}

function ks() {
	const e = xe(this),
		t = e.size !== 0,
		n = e.clear();
	return t && Tt(e, "clear", void 0, void 0), n
}

function ei(e, t) {
	return function(r, i) {
		const a = this,
			o = a.__v_raw,
			s = xe(o),
			c = t ? Ao : e ? Eo : Mr;
		return !e && Xe(s, "iterate", bn), o.forEach((l, u) => r.call(i, c(l), c(u), a))
	}
}

function ti(e, t, n) {
	return function(...r) {
		const i = this.__v_raw,
			a = xe(i),
			o = Fn(a),
			s = e === "entries" || e === Symbol.iterator && o,
			c = e === "keys" && o,
			l = i[e](...r),
			u = n ? Ao : t ? Eo : Mr;
		return !t && Xe(a, "iterate", c ? Ga : bn), {
			next() {
				const {
					value: d,
					done: f
				} = l.next();
				return f ? {
					value: d,
					done: f
				} : {
					value: s ? [u(d[0]), u(d[1])] : u(d),
					done: f
				}
			},
			[Symbol.iterator]() {
				return this
			}
		}
	}
}

function Ht(e) {
	return function(...t) {
		return e === "delete" ? !1 : this
	}
}

function df() {
	const e = {
			get(a) {
				return Xr(this, a)
			},
			get size() {
				return Jr(this)
			},
			has: Qr,
			add: Es,
			set: Ps,
			delete: Ls,
			clear: ks,
			forEach: ei(!1, !1)
		},
		t = {
			get(a) {
				return Xr(this, a, !1, !0)
			},
			get size() {
				return Jr(this)
			},
			has: Qr,
			add: Es,
			set: Ps,
			delete: Ls,
			clear: ks,
			forEach: ei(!1, !0)
		},
		n = {
			get(a) {
				return Xr(this, a, !0)
			},
			get size() {
				return Jr(this, !0)
			},
			has(a) {
				return Qr.call(this, a, !0)
			},
			add: Ht("add"),
			set: Ht("set"),
			delete: Ht("delete"),
			clear: Ht("clear"),
			forEach: ei(!0, !1)
		},
		r = {
			get(a) {
				return Xr(this, a, !0, !0)
			},
			get size() {
				return Jr(this, !0)
			},
			has(a) {
				return Qr.call(this, a, !0)
			},
			add: Ht("add"),
			set: Ht("set"),
			delete: Ht("delete"),
			clear: Ht("clear"),
			forEach: ei(!0, !0)
		};
	return ["keys", "values", "entries", Symbol.iterator].forEach(a => {
		e[a] = ti(a, !1, !1), n[a] = ti(a, !0, !1), t[a] = ti(a, !1, !0), r[a] = ti(a, !0, !0)
	}), [e, n, t, r]
}
const [pf, hf, vf, gf] = df();

function Co(e, t) {
	const n = t ? e ? gf : vf : e ? hf : pf;
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(_e(n, i) && i in r ? n : r, i, a)
}
const mf = {
		get: Co(!1, !1)
	},
	bf = {
		get: Co(!1, !0)
	},
	_f = {
		get: Co(!0, !1)
	},
	al = new WeakMap,
	ol = new WeakMap,
	sl = new WeakMap,
	yf = new WeakMap;

function xf(e) {
	switch (e) {
		case "Object":
		case "Array":
			return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet":
			return 2;
		default:
			return 0
	}
}

function wf(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : xf(Vu(e))
}

function sn(e) {
	return Tr(e) ? e : zo(e, !1, il, mf, al)
}

function Af(e) {
	return zo(e, !1, ff, bf, ol)
}

function cl(e) {
	return zo(e, !0, uf, _f, sl)
}

function zo(e, t, n, r, i) {
	if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	const a = i.get(e);
	if (a) return a;
	const o = wf(e);
	if (o === 0) return e;
	const s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s
}

function Nn(e) {
	return Tr(e) ? Nn(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Tr(e) {
	return !!(e && e.__v_isReadonly)
}

function Fa(e) {
	return !!(e && e.__v_isShallow)
}

function ll(e) {
	return Nn(e) || Tr(e)
}

function xe(e) {
	const t = e && e.__v_raw;
	return t ? xe(t) : e
}

function Wn(e) {
	return bi(e, "__v_skip", !0), e
}
const Mr = e => Se(e) ? sn(e) : e,
	Eo = e => Se(e) ? cl(e) : e;

function ul(e) {
	Xt && ct && (e = xe(e), tl(e.dep || (e.dep = yo())))
}

function fl(e, t) {
	e = xe(e), e.dep && Ba(e.dep)
}

function He(e) {
	return !!(e && e.__v_isRef === !0)
}

function ie(e) {
	return dl(e, !1)
}

function Cf(e) {
	return dl(e, !0)
}

function dl(e, t) {
	return He(e) ? e : new zf(e, t)
}
class zf {
	constructor(t, n) {
		this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : xe(t), this._value = n ? t : Mr(t)
	}
	get value() {
		return ul(this), this._value
	}
	set value(t) {
		t = this.__v_isShallow ? t : xe(t), Sr(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : Mr(t), fl(this))
	}
}

function de(e) {
	return He(e) ? e.value : e
}
const Ef = {
	get: (e, t, n) => de(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		const i = e[t];
		return He(i) && !He(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r)
	}
};

function pl(e) {
	return Nn(e) ? e : new Proxy(e, Ef)
}
class Pf {
	constructor(t, n, r, i) {
		this._setter = n, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new xo(t, () => {
			this._dirty || (this._dirty = !0, fl(this))
		}), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r
	}
	get value() {
		const t = xe(this);
		return ul(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
	}
	set value(t) {
		this._setter(t)
	}
}

function Lf(e, t, n = !1) {
	let r, i;
	const a = me(e);
	return a ? (r = e, i = dt) : (r = e.get, i = e.set), new Pf(r, i, a || !i, n)
}

function Qt(e, t, n, r) {
	let i;
	try {
		i = r ? e(...r) : e()
	} catch (a) {
		Di(a, t, n)
	}
	return i
}

function it(e, t, n, r) {
	if (me(e)) {
		const a = Qt(e, t, n, r);
		return a && Kc(a) && a.catch(o => {
			Di(o, t, n)
		}), a
	}
	const i = [];
	for (let a = 0; a < e.length; a++) i.push(it(e[a], t, n, r));
	return i
}

function Di(e, t, n, r = !0) {
	const i = t ? t.vnode : null;
	if (t) {
		let a = t.parent;
		const o = t.proxy,
			s = n;
		for (; a;) {
			const l = a.ec;
			if (l) {
				for (let u = 0; u < l.length; u++)
					if (l[u](e, o, s) === !1) return
			}
			a = a.parent
		}
		const c = t.appContext.config.errorHandler;
		if (c) {
			Qt(c, null, 10, [e, o, s]);
			return
		}
	}
	kf(e, n, i, r)
}

function kf(e, t, n, r = !0) {
	console.error(e)
}
let _i = !1,
	Na = !1;
const Ze = [];
let Pt = 0;
const yr = [];
let mr = null,
	In = 0;
const xr = [];
let jt = null,
	On = 0;
const hl = Promise.resolve();
let Po = null,
	ja = null;

function vl(e) {
	const t = Po || hl;
	return e ? t.then(this ? e.bind(this) : e) : t
}

function Sf(e) {
	let t = Pt + 1,
		n = Ze.length;
	for (; t < n;) {
		const r = t + n >>> 1;
		$r(Ze[r]) < e ? t = r + 1 : n = r
	}
	return t
}

function gl(e) {
	(!Ze.length || !Ze.includes(e, _i && e.allowRecurse ? Pt + 1 : Pt)) && e !== ja && (e.id == null ? Ze.push(e) : Ze.splice(Sf(e.id), 0, e), ml())
}

function ml() {
	!_i && !Na && (Na = !0, Po = hl.then(yl))
}

function Tf(e) {
	const t = Ze.indexOf(e);
	t > Pt && Ze.splice(t, 1)
}

function bl(e, t, n, r) {
	he(e) ? n.push(...e) : (!t || !t.includes(e, e.allowRecurse ? r + 1 : r)) && n.push(e), ml()
}

function Mf(e) {
	bl(e, mr, yr, In)
}

function $f(e) {
	bl(e, jt, xr, On)
}

function Vi(e, t = null) {
	if (yr.length) {
		for (ja = t, mr = [...new Set(yr)], yr.length = 0, In = 0; In < mr.length; In++) mr[In]();
		mr = null, In = 0, ja = null, Vi(e, t)
	}
}

function _l(e) {
	if (Vi(), xr.length) {
		const t = [...new Set(xr)];
		if (xr.length = 0, jt) {
			jt.push(...t);
			return
		}
		for (jt = t, jt.sort((n, r) => $r(n) - $r(r)), On = 0; On < jt.length; On++) jt[On]();
		jt = null, On = 0
	}
}
const $r = e => e.id == null ? 1 / 0 : e.id;

function yl(e) {
	Na = !1, _i = !0, Vi(e), Ze.sort((n, r) => $r(n) - $r(r));
	const t = dt;
	try {
		for (Pt = 0; Pt < Ze.length; Pt++) {
			const n = Ze[Pt];
			n && n.active !== !1 && Qt(n, null, 14)
		}
	} finally {
		Pt = 0, Ze.length = 0, _l(), _i = !1, Po = null, (Ze.length || yr.length || xr.length) && yl(e)
	}
}

function If(e, t, ...n) {
	if (e.isUnmounted) return;
	const r = e.vnode.props || Ce;
	let i = n;
	const a = t.startsWith("update:"),
		o = a && t.slice(7);
	if (o && o in r) {
		const u = `${o==="modelValue"?"model":o}Modifiers`,
			{
				number: d,
				trim: f
			} = r[u] || Ce;
		f && (i = n.map(b => b.trim())), d && (i = n.map(Xc))
	}
	let s, c = r[s = ha(t)] || r[s = ha(xt(t))];
	!c && a && (c = r[s = ha(nr(t))]), c && it(c, e, 6, i);
	const l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, it(l, e, 6, i)
	}
}

function xl(e, t, n = !1) {
	const r = t.emitsCache,
		i = r.get(e);
	if (i !== void 0) return i;
	const a = e.emits;
	let o = {},
		s = !1;
	if (!me(e)) {
		const c = l => {
			const u = xl(l, t, !0);
			u && (s = !0, Ue(o, u))
		};
		!n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
	}
	return !a && !s ? (r.set(e, null), null) : (he(a) ? a.forEach(c => o[c] = null) : Ue(o, a), r.set(e, o), o)
}

function Wi(e, t) {
	return !e || !Gi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, nr(t)) || _e(e, t))
}
let Be = null,
	qi = null;

function yi(e) {
	const t = Be;
	return Be = e, qi = e && e.type.__scopeId || null, t
}

function Ct(e) {
	qi = e
}

function zt() {
	qi = null
}

function Qe(e, t = Be, n) {
	if (!t || e._n) return e;
	const r = (...i) => {
		r._d && Ci(-1);
		const a = yi(t),
			o = e(...i);
		return yi(a), r._d && Ci(1), o
	};
	return r._n = !0, r._c = !0, r._d = !0, r
}

function ga(e) {
	const {
		type: t,
		vnode: n,
		proxy: r,
		withProxy: i,
		props: a,
		propsOptions: [o],
		slots: s,
		attrs: c,
		emit: l,
		render: u,
		renderCache: d,
		data: f,
		setupState: b,
		ctx: p,
		inheritAttrs: h
	} = e;
	let m, _;
	const v = yi(e);
	try {
		if (n.shapeFlag & 4) {
			const w = i || r;
			m = yt(u.call(w, w, d, a, b, f, p)), _ = c
		} else {
			const w = t;
			m = yt(w.length > 1 ? w(a, {
				attrs: c,
				slots: s,
				emit: l
			}) : w(a, null)), _ = t.props ? c : Of(c)
		}
	} catch (w) {
		Ar.length = 0, Di(w, e, 1), m = fe(at)
	}
	let g = m;
	if (_ && h !== !1) {
		const w = Object.keys(_),
			{
				shapeFlag: k
			} = g;
		w.length && k & 7 && (o && w.some(go) && (_ = Uf(_, o)), g = an(g, _))
	}
	return n.dirs && (g = an(g), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (g.transition = n.transition), m = g, yi(v), m
}
const Of = e => {
		let t;
		for (const n in e)(n === "class" || n === "style" || Gi(n)) && ((t || (t = {}))[n] = e[n]);
		return t
	},
	Uf = (e, t) => {
		const n = {};
		for (const r in e)(!go(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
		return n
	};

function Rf(e, t, n) {
	const {
		props: r,
		children: i,
		component: a
	} = e, {
		props: o,
		children: s,
		patchFlag: c
	} = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Ss(r, o, l) : !!o;
		if (c & 8) {
			const u = t.dynamicProps;
			for (let d = 0; d < u.length; d++) {
				const f = u[d];
				if (o[f] !== r[f] && !Wi(l, f)) return !0
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Ss(r, o, l) : !0 : !!o;
	return !1
}

function Ss(e, t, n) {
	const r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		const a = r[i];
		if (t[a] !== e[a] && !Wi(n, a)) return !0
	}
	return !1
}

function Hf({
	vnode: e,
	parent: t
}, n) {
	for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
}
const Gf = e => e.__isSuspense;

function Bf(e, t) {
	t && t.pendingBranch ? he(e) ? t.effects.push(...e) : t.effects.push(e) : $f(e)
}

function Jt(e, t) {
	if ($e) {
		let n = $e.provides;
		const r = $e.parent && $e.parent.provides;
		r === n && (n = $e.provides = Object.create(r)), n[e] = t
	}
}

function Fe(e, t, n = !1) {
	const r = $e || Be;
	if (r) {
		const i = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && me(t) ? t.call(r.proxy) : t
	}
}

function E9(e, t) {
	return Wr(e, null, t)
}

function Ff(e, t) {
	return Wr(e, null, {
		flush: "post"
	})
}

function P9(e, t) {
	return Wr(e, null, {
		flush: "sync"
	})
}
const Ts = {};

function _n(e, t, n) {
	return Wr(e, t, n)
}

function Wr(e, t, {
	immediate: n,
	deep: r,
	flush: i,
	onTrack: a,
	onTrigger: o
} = Ce) {
	const s = $e;
	let c, l = !1,
		u = !1;
	if (He(e) ? (c = () => e.value, l = Fa(e)) : Nn(e) ? (c = () => e, r = !0) : he(e) ? (u = !0, l = e.some(_ => Nn(_) || Fa(_)), c = () => e.map(_ => {
			if (He(_)) return _.value;
			if (Nn(_)) return Hn(_);
			if (me(_)) return Qt(_, s, 2)
		})) : me(e) ? t ? c = () => Qt(e, s, 2) : c = () => {
			if (!(s && s.isUnmounted)) return d && d(), it(e, s, 3, [f])
		} : c = dt, t && r) {
		const _ = c;
		c = () => Hn(_())
	}
	let d, f = _ => {
		d = m.onStop = () => {
			Qt(_, s, 4)
		}
	};
	if (Or) return f = dt, t ? n && it(t, s, 3, [c(), u ? [] : void 0, f]) : c(), dt;
	let b = u ? [] : Ts;
	const p = () => {
		if (!!m.active)
			if (t) {
				const _ = m.run();
				(r || l || (u ? _.some((v, g) => Sr(v, b[g])) : Sr(_, b))) && (d && d(), it(t, s, 3, [_, b === Ts ? void 0 : b, f]), b = _)
			} else m.run()
	};
	p.allowRecurse = !!t;
	let h;
	i === "sync" ? h = p : i === "post" ? h = () => je(p, s && s.suspense) : h = () => Mf(p);
	const m = new xo(c, h);
	return t ? n ? p() : b = m.run() : i === "post" ? je(m.run.bind(m), s && s.suspense) : m.run(), () => {
		m.stop(), s && s.scope && mo(s.scope.effects, m)
	}
}

function Nf(e, t, n) {
	const r = this.proxy,
		i = Me(e) ? e.includes(".") ? wl(r, e) : () => r[e] : e.bind(r, r);
	let a;
	me(t) ? a = t : (a = t.handler, n = t);
	const o = $e;
	qn(this);
	const s = Wr(i, a.bind(r), n);
	return o ? qn(o) : yn(), s
}

function wl(e, t) {
	const n = t.split(".");
	return () => {
		let r = e;
		for (let i = 0; i < n.length && r; i++) r = r[n[i]];
		return r
	}
}

function Hn(e, t) {
	if (!Se(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
	if (t.add(e), He(e)) Hn(e.value, t);
	else if (he(e))
		for (let n = 0; n < e.length; n++) Hn(e[n], t);
	else if (qc(e) || Fn(e)) e.forEach(n => {
		Hn(n, t)
	});
	else if (Zc(e))
		for (const n in e) Hn(e[n], t);
	return e
}

function jf() {
	const e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: new Map
	};
	return ht(() => {
		e.isMounted = !0
	}), or(() => {
		e.isUnmounting = !0
	}), e
}
const Je = [Function, Array],
	Df = {
		name: "BaseTransition",
		props: {
			mode: String,
			appear: Boolean,
			persisted: Boolean,
			onBeforeEnter: Je,
			onEnter: Je,
			onAfterEnter: Je,
			onEnterCancelled: Je,
			onBeforeLeave: Je,
			onLeave: Je,
			onAfterLeave: Je,
			onLeaveCancelled: Je,
			onBeforeAppear: Je,
			onAppear: Je,
			onAfterAppear: Je,
			onAppearCancelled: Je
		},
		setup(e, {
			slots: t
		}) {
			const n = Qi(),
				r = jf();
			let i;
			return () => {
				const a = t.default && zl(t.default(), !0);
				if (!a || !a.length) return;
				let o = a[0];
				if (a.length > 1) {
					for (const h of a)
						if (h.type !== at) {
							o = h;
							break
						}
				}
				const s = xe(e),
					{
						mode: c
					} = s;
				if (r.isLeaving) return ma(o);
				const l = Ms(o);
				if (!l) return ma(o);
				const u = Da(l, s, r, n);
				Va(l, u);
				const d = n.subTree,
					f = d && Ms(d);
				let b = !1;
				const {
					getTransitionKey: p
				} = l.type;
				if (p) {
					const h = p();
					i === void 0 ? i = h : h !== i && (i = h, b = !0)
				}
				if (f && f.type !== at && (!hn(l, f) || b)) {
					const h = Da(f, s, r, n);
					if (Va(f, h), c === "out-in") return r.isLeaving = !0, h.afterLeave = () => {
						r.isLeaving = !1, n.update()
					}, ma(o);
					c === "in-out" && l.type !== at && (h.delayLeave = (m, _, v) => {
						const g = Cl(r, f);
						g[String(f.key)] = f, m._leaveCb = () => {
							_(), m._leaveCb = void 0, delete u.delayedLeave
						}, u.delayedLeave = v
					})
				}
				return o
			}
		}
	},
	Al = Df;

function Cl(e, t) {
	const {
		leavingVNodes: n
	} = e;
	let r = n.get(t.type);
	return r || (r = Object.create(null), n.set(t.type, r)), r
}

function Da(e, t, n, r) {
	const {
		appear: i,
		mode: a,
		persisted: o = !1,
		onBeforeEnter: s,
		onEnter: c,
		onAfterEnter: l,
		onEnterCancelled: u,
		onBeforeLeave: d,
		onLeave: f,
		onAfterLeave: b,
		onLeaveCancelled: p,
		onBeforeAppear: h,
		onAppear: m,
		onAfterAppear: _,
		onAppearCancelled: v
	} = t, g = String(e.key), w = Cl(n, e), k = (M, A) => {
		M && it(M, r, 9, A)
	}, S = (M, A) => {
		const x = A[1];
		k(M, A), he(M) ? M.every(z => z.length <= 1) && x() : M.length <= 1 && x()
	}, U = {
		mode: a,
		persisted: o,
		beforeEnter(M) {
			let A = s;
			if (!n.isMounted)
				if (i) A = h || s;
				else return;
			M._leaveCb && M._leaveCb(!0);
			const x = w[g];
			x && hn(e, x) && x.el._leaveCb && x.el._leaveCb(), k(A, [M])
		},
		enter(M) {
			let A = c,
				x = l,
				z = u;
			if (!n.isMounted)
				if (i) A = m || c, x = _ || l, z = v || u;
				else return;
			let C = !1;
			const L = M._enterCb = I => {
				C || (C = !0, I ? k(z, [M]) : k(x, [M]), U.delayedLeave && U.delayedLeave(), M._enterCb = void 0)
			};
			A ? S(A, [M, L]) : L()
		},
		leave(M, A) {
			const x = String(e.key);
			if (M._enterCb && M._enterCb(!0), n.isUnmounting) return A();
			k(d, [M]);
			let z = !1;
			const C = M._leaveCb = L => {
				z || (z = !0, A(), L ? k(p, [M]) : k(b, [M]), M._leaveCb = void 0, w[x] === e && delete w[x])
			};
			w[x] = e, f ? S(f, [M, C]) : C()
		},
		clone(M) {
			return Da(M, t, n, r)
		}
	};
	return U
}

function ma(e) {
	if (Ki(e)) return e = an(e), e.children = null, e
}

function Ms(e) {
	return Ki(e) ? e.children ? e.children[0] : void 0 : e
}

function Va(e, t) {
	e.shapeFlag & 6 && e.component ? Va(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function zl(e, t = !1, n) {
	let r = [],
		i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a];
		const s = n == null ? o.key : String(n) + String(o.key != null ? o.key : a);
		o.type === Te ? (o.patchFlag & 128 && i++, r = r.concat(zl(o.children, t, s))) : (t || o.type !== at) && r.push(s != null ? an(o, {
			key: s
		}) : o)
	}
	if (i > 1)
		for (let a = 0; a < r.length; a++) r[a].patchFlag = -2;
	return r
}

function ar(e) {
	return me(e) ? {
		setup: e,
		name: e.name
	} : e
}
const wr = e => !!e.type.__asyncLoader,
	Ki = e => e.type.__isKeepAlive;

function El(e, t) {
	Ll(e, "a", t)
}

function Pl(e, t) {
	Ll(e, "da", t)
}

function Ll(e, t, n = $e) {
	const r = e.__wdc || (e.__wdc = () => {
		let i = n;
		for (; i;) {
			if (i.isDeactivated) return;
			i = i.parent
		}
		return e()
	});
	if (Yi(t, r, n), n) {
		let i = n.parent;
		for (; i && i.parent;) Ki(i.parent.vnode) && Vf(r, t, n, i), i = i.parent
	}
}

function Vf(e, t, n, r) {
	const i = Yi(t, e, r, !0);
	Ln(() => {
		mo(r[t], i)
	}, n)
}

function Yi(e, t, n = $e, r = !1) {
	if (n) {
		const i = n[e] || (n[e] = []),
			a = t.__weh || (t.__weh = (...o) => {
				if (n.isUnmounted) return;
				rr(), qn(n);
				const s = it(t, n, e, o);
				return yn(), ir(), s
			});
		return r ? i.unshift(a) : i.push(a), a
	}
}
const It = e => (t, n = $e) => (!Or || e === "sp") && Yi(e, t, n),
	kl = It("bm"),
	ht = It("m"),
	Wf = It("bu"),
	Sl = It("u"),
	or = It("bum"),
	Ln = It("um"),
	qf = It("sp"),
	Kf = It("rtg"),
	Yf = It("rtc");

function Zf(e, t = $e) {
	Yi("ec", e, t)
}

function ln(e, t, n, r) {
	const i = e.dirs,
		a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		const s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (rr(), it(c, n, 8, [e.el, s, e, t]), ir())
	}
}
const Lo = "components";

function Zi(e, t) {
	return Ml(Lo, e, !0, t) || e
}
const Tl = Symbol();

function ko(e) {
	return Me(e) ? Ml(Lo, e, !1) || e : e || Tl
}

function Ml(e, t, n = !0, r = !1) {
	const i = Be || $e;
	if (i) {
		const a = i.type;
		if (e === Lo) {
			const s = Cd(a, !1);
			if (s && (s === t || s === xt(t) || s === Ni(xt(t)))) return a
		}
		const o = $s(i[e] || a[e], t) || $s(i.appContext[e], t);
		return !o && r ? a : o
	}
}

function $s(e, t) {
	return e && (e[t] || e[xt(t)] || e[Ni(xt(t))])
}

function An(e, t, n, r) {
	let i;
	const a = n && n[r];
	if (he(e) || Me(e)) {
		i = new Array(e.length);
		for (let o = 0, s = e.length; o < s; o++) i[o] = t(e[o], o, void 0, a && a[o])
	} else if (typeof e == "number") {
		i = new Array(e);
		for (let o = 0; o < e; o++) i[o] = t(o + 1, o, void 0, a && a[o])
	} else if (Se(e))
		if (e[Symbol.iterator]) i = Array.from(e, (o, s) => t(o, s, void 0, a && a[s]));
		else {
			const o = Object.keys(e);
			i = new Array(o.length);
			for (let s = 0, c = o.length; s < c; s++) {
				const l = o[s];
				i[s] = t(e[l], l, s, a && a[s])
			}
		}
	else i = [];
	return n && (n[r] = i), i
}

function xi(e, t, n = {}, r, i) {
	if (Be.isCE || Be.parent && wr(Be.parent) && Be.parent.isCE) return fe("slot", t === "default" ? null : {
		name: t
	}, r && r());
	let a = e[t];
	a && a._c && (a._d = !1), ue();
	const o = a && $l(a(n)),
		s = Ie(Te, {
			key: n.key || `_${t}`
		}, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), a && a._c && (a._d = !0), s
}

function $l(e) {
	return e.some(t => zi(t) ? !(t.type === at || t.type === Te && !$l(t.children)) : !0) ? e : null
}
const Wa = e => e ? ql(e) ? Io(e) || e.proxy : Wa(e.parent) : null,
	wi = Ue(Object.create(null), {
		$: e => e,
		$el: e => e.vnode.el,
		$data: e => e.data,
		$props: e => e.props,
		$attrs: e => e.attrs,
		$slots: e => e.slots,
		$refs: e => e.refs,
		$parent: e => Wa(e.parent),
		$root: e => Wa(e.root),
		$emit: e => e.emit,
		$options: e => Ol(e),
		$forceUpdate: e => e.f || (e.f = () => gl(e.update)),
		$nextTick: e => e.n || (e.n = vl.bind(e.proxy)),
		$watch: e => Nf.bind(e)
	}),
	Xf = {
		get({
			_: e
		}, t) {
			const {
				ctx: n,
				setupState: r,
				data: i,
				props: a,
				accessCache: o,
				type: s,
				appContext: c
			} = e;
			let l;
			if (t[0] !== "$") {
				const b = o[t];
				if (b !== void 0) switch (b) {
					case 1:
						return r[t];
					case 2:
						return i[t];
					case 4:
						return n[t];
					case 3:
						return a[t]
				} else {
					if (r !== Ce && _e(r, t)) return o[t] = 1, r[t];
					if (i !== Ce && _e(i, t)) return o[t] = 2, i[t];
					if ((l = e.propsOptions[0]) && _e(l, t)) return o[t] = 3, a[t];
					if (n !== Ce && _e(n, t)) return o[t] = 4, n[t];
					qa && (o[t] = 0)
				}
			}
			const u = wi[t];
			let d, f;
			if (u) return t === "$attrs" && Xe(e, "get", t), u(e);
			if ((d = s.__cssModules) && (d = d[t])) return d;
			if (n !== Ce && _e(n, t)) return o[t] = 4, n[t];
			if (f = c.config.globalProperties, _e(f, t)) return f[t]
		},
		set({
			_: e
		}, t, n) {
			const {
				data: r,
				setupState: i,
				ctx: a
			} = e;
			return i !== Ce && _e(i, t) ? (i[t] = n, !0) : r !== Ce && _e(r, t) ? (r[t] = n, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0)
		},
		has({
			_: {
				data: e,
				setupState: t,
				accessCache: n,
				ctx: r,
				appContext: i,
				propsOptions: a
			}
		}, o) {
			let s;
			return !!n[o] || e !== Ce && _e(e, o) || t !== Ce && _e(t, o) || (s = a[0]) && _e(s, o) || _e(r, o) || _e(wi, o) || _e(i.config.globalProperties, o)
		},
		defineProperty(e, t, n) {
			return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
		}
	};
let qa = !0;

function Qf(e) {
	const t = Ol(e),
		n = e.proxy,
		r = e.ctx;
	qa = !1, t.beforeCreate && Is(t.beforeCreate, e, "bc");
	const {
		data: i,
		computed: a,
		methods: o,
		watch: s,
		provide: c,
		inject: l,
		created: u,
		beforeMount: d,
		mounted: f,
		beforeUpdate: b,
		updated: p,
		activated: h,
		deactivated: m,
		beforeDestroy: _,
		beforeUnmount: v,
		destroyed: g,
		unmounted: w,
		render: k,
		renderTracked: S,
		renderTriggered: U,
		errorCaptured: M,
		serverPrefetch: A,
		expose: x,
		inheritAttrs: z,
		components: C,
		directives: L,
		filters: I
	} = t;
	if (l && Jf(l, r, null, e.appContext.config.unwrapInjectedRef), o)
		for (const j in o) {
			const q = o[j];
			me(q) && (r[j] = q.bind(n))
		}
	if (i) {
		const j = i.call(n, n);
		Se(j) && (e.data = sn(j))
	}
	if (qa = !0, a)
		for (const j in a) {
			const q = a[j],
				ne = me(q) ? q.bind(n, n) : me(q.get) ? q.get.bind(n, n) : dt,
				F = !me(q) && me(q.set) ? q.set.bind(n) : dt,
				T = Re({
					get: ne,
					set: F
				});
			Object.defineProperty(r, j, {
				enumerable: !0,
				configurable: !0,
				get: () => T.value,
				set: E => T.value = E
			})
		}
	if (s)
		for (const j in s) Il(s[j], r, n, j);
	if (c) {
		const j = me(c) ? c.call(n) : c;
		Reflect.ownKeys(j).forEach(q => {
			Jt(q, j[q])
		})
	}
	u && Is(u, e, "c");

	function $(j, q) {
		he(q) ? q.forEach(ne => j(ne.bind(n))) : q && j(q.bind(n))
	}
	if ($(kl, d), $(ht, f), $(Wf, b), $(Sl, p), $(El, h), $(Pl, m), $(Zf, M), $(Yf, S), $(Kf, U), $(or, v), $(Ln, w), $(qf, A), he(x))
		if (x.length) {
			const j = e.exposed || (e.exposed = {});
			x.forEach(q => {
				Object.defineProperty(j, q, {
					get: () => n[q],
					set: ne => n[q] = ne
				})
			})
		} else e.exposed || (e.exposed = {});
	k && e.render === dt && (e.render = k), z != null && (e.inheritAttrs = z), C && (e.components = C), L && (e.directives = L)
}

function Jf(e, t, n = dt, r = !1) {
	he(e) && (e = Ka(e));
	for (const i in e) {
		const a = e[i];
		let o;
		Se(a) ? "default" in a ? o = Fe(a.from || i, a.default, !0) : o = Fe(a.from || i) : o = Fe(a), He(o) && r ? Object.defineProperty(t, i, {
			enumerable: !0,
			configurable: !0,
			get: () => o.value,
			set: s => o.value = s
		}) : t[i] = o
	}
}

function Is(e, t, n) {
	it(he(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Il(e, t, n, r) {
	const i = r.includes(".") ? wl(n, r) : () => n[r];
	if (Me(e)) {
		const a = t[e];
		me(a) && _n(i, a)
	} else if (me(e)) _n(i, e.bind(n));
	else if (Se(e))
		if (he(e)) e.forEach(a => Il(a, t, n, r));
		else {
			const a = me(e.handler) ? e.handler.bind(n) : t[e.handler];
			me(a) && _n(i, a, e)
		}
}

function Ol(e) {
	const t = e.type,
		{
			mixins: n,
			extends: r
		} = t,
		{
			mixins: i,
			optionsCache: a,
			config: {
				optionMergeStrategies: o
			}
		} = e.appContext,
		s = a.get(t);
	let c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach(l => Ai(c, l, o, !0)), Ai(c, t, o)), a.set(t, c), c
}

function Ai(e, t, n, r = !1) {
	const {
		mixins: i,
		extends: a
	} = t;
	a && Ai(e, a, n, !0), i && i.forEach(o => Ai(e, o, n, !0));
	for (const o in t)
		if (!(r && o === "expose")) {
			const s = ed[o] || n && n[o];
			e[o] = s ? s(e[o], t[o]) : t[o]
		} return e
}
const ed = {
	data: Os,
	props: pn,
	emits: pn,
	methods: pn,
	computed: pn,
	beforeCreate: Ge,
	created: Ge,
	beforeMount: Ge,
	mounted: Ge,
	beforeUpdate: Ge,
	updated: Ge,
	beforeDestroy: Ge,
	beforeUnmount: Ge,
	destroyed: Ge,
	unmounted: Ge,
	activated: Ge,
	deactivated: Ge,
	errorCaptured: Ge,
	serverPrefetch: Ge,
	components: pn,
	directives: pn,
	watch: nd,
	provide: Os,
	inject: td
};

function Os(e, t) {
	return t ? e ? function() {
		return Ue(me(e) ? e.call(this, this) : e, me(t) ? t.call(this, this) : t)
	} : t : e
}

function td(e, t) {
	return pn(Ka(e), Ka(t))
}

function Ka(e) {
	if (he(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t
	}
	return e
}

function Ge(e, t) {
	return e ? [...new Set([].concat(e, t))] : t
}

function pn(e, t) {
	return e ? Ue(Ue(Object.create(null), e), t) : t
}

function nd(e, t) {
	if (!e) return t;
	if (!t) return e;
	const n = Ue(Object.create(null), e);
	for (const r in t) n[r] = Ge(e[r], t[r]);
	return n
}

function rd(e, t, n, r = !1) {
	const i = {},
		a = {};
	bi(a, Xi, 1), e.propsDefaults = Object.create(null), Ul(e, t, i, a);
	for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
	n ? e.props = r ? i : Af(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a
}

function id(e, t, n, r) {
	const {
		props: i,
		attrs: a,
		vnode: {
			patchFlag: o
		}
	} = e, s = xe(i), [c] = e.propsOptions;
	let l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			const u = e.vnode.dynamicProps;
			for (let d = 0; d < u.length; d++) {
				let f = u[d];
				if (Wi(e.emitsOptions, f)) continue;
				const b = t[f];
				if (c)
					if (_e(a, f)) b !== a[f] && (a[f] = b, l = !0);
					else {
						const p = xt(f);
						i[p] = Ya(c, s, p, b, e, !1)
					}
				else b !== a[f] && (a[f] = b, l = !0)
			}
		}
	} else {
		Ul(e, t, i, a) && (l = !0);
		let u;
		for (const d in s)(!t || !_e(t, d) && ((u = nr(d)) === d || !_e(t, u))) && (c ? n && (n[d] !== void 0 || n[u] !== void 0) && (i[d] = Ya(c, s, d, void 0, e, !0)) : delete i[d]);
		if (a !== s)
			for (const d in a)(!t || !_e(t, d) && !0) && (delete a[d], l = !0)
	}
	l && Tt(e, "set", "$attrs")
}

function Ul(e, t, n, r) {
	const [i, a] = e.propsOptions;
	let o = !1,
		s;
	if (t)
		for (let c in t) {
			if (oi(c)) continue;
			const l = t[c];
			let u;
			i && _e(i, u = xt(c)) ? !a || !a.includes(u) ? n[u] = l : (s || (s = {}))[u] = l : Wi(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l, o = !0)
		}
	if (a) {
		const c = xe(n),
			l = s || Ce;
		for (let u = 0; u < a.length; u++) {
			const d = a[u];
			n[d] = Ya(i, c, d, l[d], e, !_e(l, d))
		}
	}
	return o
}

function Ya(e, t, n, r, i, a) {
	const o = e[n];
	if (o != null) {
		const s = _e(o, "default");
		if (s && r === void 0) {
			const c = o.default;
			if (o.type !== Function && me(c)) {
				const {
					propsDefaults: l
				} = i;
				n in l ? r = l[n] : (qn(i), r = l[n] = c.call(null, t), yn())
			} else r = c
		}
		o[0] && (a && !s ? r = !1 : o[1] && (r === "" || r === nr(n)) && (r = !0))
	}
	return r
}

function Rl(e, t, n = !1) {
	const r = t.propsCache,
		i = r.get(e);
	if (i) return i;
	const a = e.props,
		o = {},
		s = [];
	let c = !1;
	if (!me(e)) {
		const u = d => {
			c = !0;
			const [f, b] = Rl(d, t, !0);
			Ue(o, f), b && s.push(...b)
		};
		!n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
	}
	if (!a && !c) return r.set(e, Bn), Bn;
	if (he(a))
		for (let u = 0; u < a.length; u++) {
			const d = xt(a[u]);
			Us(d) && (o[d] = Ce)
		} else if (a)
			for (const u in a) {
				const d = xt(u);
				if (Us(d)) {
					const f = a[u],
						b = o[d] = he(f) || me(f) ? {
							type: f
						} : f;
					if (b) {
						const p = Gs(Boolean, b.type),
							h = Gs(String, b.type);
						b[0] = p > -1, b[1] = h < 0 || p < h, (p > -1 || _e(b, "default")) && s.push(d)
					}
				}
			}
	const l = [o, s];
	return r.set(e, l), l
}

function Us(e) {
	return e[0] !== "$"
}

function Rs(e) {
	const t = e && e.toString().match(/^\s*function (\w+)/);
	return t ? t[1] : e === null ? "null" : ""
}

function Hs(e, t) {
	return Rs(e) === Rs(t)
}

function Gs(e, t) {
	return he(t) ? t.findIndex(n => Hs(n, e)) : me(t) && Hs(t, e) ? 0 : -1
}
const Hl = e => e[0] === "_" || e === "$stable",
	So = e => he(e) ? e.map(yt) : [yt(e)],
	ad = (e, t, n) => {
		if (t._n) return t;
		const r = Qe((...i) => So(t(...i)), n);
		return r._c = !1, r
	},
	Gl = (e, t, n) => {
		const r = e._ctx;
		for (const i in e) {
			if (Hl(i)) continue;
			const a = e[i];
			if (me(a)) t[i] = ad(i, a, r);
			else if (a != null) {
				const o = So(a);
				t[i] = () => o
			}
		}
	},
	Bl = (e, t) => {
		const n = So(t);
		e.slots.default = () => n
	},
	od = (e, t) => {
		if (e.vnode.shapeFlag & 32) {
			const n = t._;
			n ? (e.slots = xe(t), bi(t, "_", n)) : Gl(t, e.slots = {})
		} else e.slots = {}, t && Bl(e, t);
		bi(e.slots, Xi, 1)
	},
	sd = (e, t, n) => {
		const {
			vnode: r,
			slots: i
		} = e;
		let a = !0,
			o = Ce;
		if (r.shapeFlag & 32) {
			const s = t._;
			s ? n && s === 1 ? a = !1 : (Ue(i, t), !n && s === 1 && delete i._) : (a = !t.$stable, Gl(t, i)), o = t
		} else t && (Bl(e, t), o = {
			default: 1
		});
		if (a)
			for (const s in i) !Hl(s) && !(s in o) && delete i[s]
	};

function Fl() {
	return {
		app: null,
		config: {
			isNativeTag: Nu,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap,
		propsCache: new WeakMap,
		emitsCache: new WeakMap
	}
}
let cd = 0;

function ld(e, t) {
	return function(r, i = null) {
		me(r) || (r = Object.assign({}, r)), i != null && !Se(i) && (i = null);
		const a = Fl(),
			o = new Set;
		let s = !1;
		const c = a.app = {
			_uid: cd++,
			_component: r,
			_props: i,
			_container: null,
			_context: a,
			_instance: null,
			version: Ed,
			get config() {
				return a.config
			},
			set config(l) {},
			use(l, ...u) {
				return o.has(l) || (l && me(l.install) ? (o.add(l), l.install(c, ...u)) : me(l) && (o.add(l), l(c, ...u))), c
			},
			mixin(l) {
				return a.mixins.includes(l) || a.mixins.push(l), c
			},
			component(l, u) {
				return u ? (a.components[l] = u, c) : a.components[l]
			},
			directive(l, u) {
				return u ? (a.directives[l] = u, c) : a.directives[l]
			},
			mount(l, u, d) {
				if (!s) {
					const f = fe(r, i);
					return f.appContext = a, u && t ? t(f, l) : e(f, l, d), s = !0, c._container = l, l.__vue_app__ = c, Io(f.component) || f.component.proxy
				}
			},
			unmount() {
				s && (e(null, c._container), delete c._container.__vue_app__)
			},
			provide(l, u) {
				return a.provides[l] = u, c
			}
		};
		return c
	}
}

function Za(e, t, n, r, i = !1) {
	if (he(e)) {
		e.forEach((f, b) => Za(f, t && (he(t) ? t[b] : t), n, r, i));
		return
	}
	if (wr(r) && !i) return;
	const a = r.shapeFlag & 4 ? Io(r.component) || r.component.proxy : r.el,
		o = i ? null : a,
		{
			i: s,
			r: c
		} = e,
		l = t && t.r,
		u = s.refs === Ce ? s.refs = {} : s.refs,
		d = s.setupState;
	if (l != null && l !== c && (Me(l) ? (u[l] = null, _e(d, l) && (d[l] = null)) : He(l) && (l.value = null)), me(c)) Qt(c, s, 12, [o, u]);
	else {
		const f = Me(c),
			b = He(c);
		if (f || b) {
			const p = () => {
				if (e.f) {
					const h = f ? u[c] : c.value;
					i ? he(h) && mo(h, a) : he(h) ? h.includes(a) || h.push(a) : f ? (u[c] = [a], _e(d, c) && (d[c] = u[c])) : (c.value = [a], e.k && (u[e.k] = c.value))
				} else f ? (u[c] = o, _e(d, c) && (d[c] = o)) : b && (c.value = o, e.k && (u[e.k] = o))
			};
			o ? (p.id = -1, je(p, n)) : p()
		}
	}
}
const je = Bf;

function ud(e) {
	return fd(e)
}

function fd(e, t) {
	const n = Ku();
	n.__VUE__ = !0;
	const {
		insert: r,
		remove: i,
		patchProp: a,
		createElement: o,
		createText: s,
		createComment: c,
		setText: l,
		setElementText: u,
		parentNode: d,
		nextSibling: f,
		setScopeId: b = dt,
		cloneNode: p,
		insertStaticContent: h
	} = e, m = (y, P, G, V = null, W = null, J = null, te = !1, X = null, ee = !!P.dynamicChildren) => {
		if (y === P) return;
		y && !hn(y, P) && (V = Q(y), R(y, W, J, !0), y = null), P.patchFlag === -2 && (ee = !1, P.dynamicChildren = null);
		const {
			type: K,
			ref: ce,
			shapeFlag: ae
		} = P;
		switch (K) {
			case To:
				_(y, P, G, V);
				break;
			case at:
				v(y, P, G, V);
				break;
			case si:
				y == null && g(P, G, V, te);
				break;
			case Te:
				L(y, P, G, V, W, J, te, X, ee);
				break;
			default:
				ae & 1 ? S(y, P, G, V, W, J, te, X, ee) : ae & 6 ? I(y, P, G, V, W, J, te, X, ee) : (ae & 64 || ae & 128) && K.process(y, P, G, V, W, J, te, X, ee, oe)
		}
		ce != null && W && Za(ce, y && y.ref, J, P || y, !P)
	}, _ = (y, P, G, V) => {
		if (y == null) r(P.el = s(P.children), G, V);
		else {
			const W = P.el = y.el;
			P.children !== y.children && l(W, P.children)
		}
	}, v = (y, P, G, V) => {
		y == null ? r(P.el = c(P.children || ""), G, V) : P.el = y.el
	}, g = (y, P, G, V) => {
		[y.el, y.anchor] = h(y.children, P, G, V, y.el, y.anchor)
	}, w = ({
		el: y,
		anchor: P
	}, G, V) => {
		let W;
		for (; y && y !== P;) W = f(y), r(y, G, V), y = W;
		r(P, G, V)
	}, k = ({
		el: y,
		anchor: P
	}) => {
		let G;
		for (; y && y !== P;) G = f(y), i(y), y = G;
		i(P)
	}, S = (y, P, G, V, W, J, te, X, ee) => {
		te = te || P.type === "svg", y == null ? U(P, G, V, W, J, te, X, ee) : x(y, P, W, J, te, X, ee)
	}, U = (y, P, G, V, W, J, te, X) => {
		let ee, K;
		const {
			type: ce,
			props: ae,
			shapeFlag: le,
			transition: ve,
			patchFlag: ye,
			dirs: we
		} = y;
		if (y.el && p !== void 0 && ye === -1) ee = y.el = p(y.el);
		else {
			if (ee = y.el = o(y.type, J, ae && ae.is, ae), le & 8 ? u(ee, y.children) : le & 16 && A(y.children, ee, null, V, W, J && ce !== "foreignObject", te, X), we && ln(y, null, V, "created"), ae) {
				for (const ze in ae) ze !== "value" && !oi(ze) && a(ee, ze, null, ae[ze], J, y.children, V, W, Y);
				"value" in ae && a(ee, "value", null, ae.value), (K = ae.onVnodeBeforeMount) && bt(K, V, y)
			}
			M(ee, y, y.scopeId, te, V)
		}
		we && ln(y, null, V, "beforeMount");
		const Ae = (!W || W && !W.pendingBranch) && ve && !ve.persisted;
		Ae && ve.beforeEnter(ee), r(ee, P, G), ((K = ae && ae.onVnodeMounted) || Ae || we) && je(() => {
			K && bt(K, V, y), Ae && ve.enter(ee), we && ln(y, null, V, "mounted")
		}, W)
	}, M = (y, P, G, V, W) => {
		if (G && b(y, G), V)
			for (let J = 0; J < V.length; J++) b(y, V[J]);
		if (W) {
			let J = W.subTree;
			if (P === J) {
				const te = W.vnode;
				M(y, te, te.scopeId, te.slotScopeIds, W.parent)
			}
		}
	}, A = (y, P, G, V, W, J, te, X, ee = 0) => {
		for (let K = ee; K < y.length; K++) {
			const ce = y[K] = X ? Vt(y[K]) : yt(y[K]);
			m(null, ce, P, G, V, W, J, te, X)
		}
	}, x = (y, P, G, V, W, J, te) => {
		const X = P.el = y.el;
		let {
			patchFlag: ee,
			dynamicChildren: K,
			dirs: ce
		} = P;
		ee |= y.patchFlag & 16;
		const ae = y.props || Ce,
			le = P.props || Ce;
		let ve;
		G && un(G, !1), (ve = le.onVnodeBeforeUpdate) && bt(ve, G, P, y), ce && ln(P, y, G, "beforeUpdate"), G && un(G, !0);
		const ye = W && P.type !== "foreignObject";
		if (K ? z(y.dynamicChildren, K, X, G, V, ye, J) : te || ne(y, P, X, null, G, V, ye, J, !1), ee > 0) {
			if (ee & 16) C(X, P, ae, le, G, V, W);
			else if (ee & 2 && ae.class !== le.class && a(X, "class", null, le.class, W), ee & 4 && a(X, "style", ae.style, le.style, W), ee & 8) {
				const we = P.dynamicProps;
				for (let Ae = 0; Ae < we.length; Ae++) {
					const ze = we[Ae],
						ot = ae[ze],
						Tn = le[ze];
					(Tn !== ot || ze === "value") && a(X, ze, ot, Tn, W, y.children, G, V, Y)
				}
			}
			ee & 1 && y.children !== P.children && u(X, P.children)
		} else !te && K == null && C(X, P, ae, le, G, V, W);
		((ve = le.onVnodeUpdated) || ce) && je(() => {
			ve && bt(ve, G, P, y), ce && ln(P, y, G, "updated")
		}, V)
	}, z = (y, P, G, V, W, J, te) => {
		for (let X = 0; X < P.length; X++) {
			const ee = y[X],
				K = P[X],
				ce = ee.el && (ee.type === Te || !hn(ee, K) || ee.shapeFlag & 70) ? d(ee.el) : G;
			m(ee, K, ce, null, V, W, J, te, !0)
		}
	}, C = (y, P, G, V, W, J, te) => {
		if (G !== V) {
			for (const X in V) {
				if (oi(X)) continue;
				const ee = V[X],
					K = G[X];
				ee !== K && X !== "value" && a(y, X, K, ee, te, P.children, W, J, Y)
			}
			if (G !== Ce)
				for (const X in G) !oi(X) && !(X in V) && a(y, X, G[X], null, te, P.children, W, J, Y);
			"value" in V && a(y, "value", G.value, V.value)
		}
	}, L = (y, P, G, V, W, J, te, X, ee) => {
		const K = P.el = y ? y.el : s(""),
			ce = P.anchor = y ? y.anchor : s("");
		let {
			patchFlag: ae,
			dynamicChildren: le,
			slotScopeIds: ve
		} = P;
		ve && (X = X ? X.concat(ve) : ve), y == null ? (r(K, G, V), r(ce, G, V), A(P.children, G, ce, W, J, te, X, ee)) : ae > 0 && ae & 64 && le && y.dynamicChildren ? (z(y.dynamicChildren, le, G, W, J, te, X), (P.key != null || W && P === W.subTree) && Nl(y, P, !0)) : ne(y, P, G, ce, W, J, te, X, ee)
	}, I = (y, P, G, V, W, J, te, X, ee) => {
		P.slotScopeIds = X, y == null ? P.shapeFlag & 512 ? W.ctx.activate(P, G, V, te, ee) : N(P, G, V, W, J, te, ee) : $(y, P, ee)
	}, N = (y, P, G, V, W, J, te) => {
		const X = y.component = _d(y, V, W);
		if (Ki(y) && (X.ctx.renderer = oe), yd(X), X.asyncDep) {
			if (W && W.registerDep(X, j), !y.el) {
				const ee = X.subTree = fe(at);
				v(null, ee, P, G)
			}
			return
		}
		j(X, y, P, G, W, J, te)
	}, $ = (y, P, G) => {
		const V = P.component = y.component;
		if (Rf(y, P, G))
			if (V.asyncDep && !V.asyncResolved) {
				q(V, P, G);
				return
			} else V.next = P, Tf(V.update), V.update();
		else P.el = y.el, V.vnode = P
	}, j = (y, P, G, V, W, J, te) => {
		const X = () => {
				if (y.isMounted) {
					let {
						next: ce,
						bu: ae,
						u: le,
						parent: ve,
						vnode: ye
					} = y, we = ce, Ae;
					un(y, !1), ce ? (ce.el = ye.el, q(y, ce, te)) : ce = ye, ae && va(ae), (Ae = ce.props && ce.props.onVnodeBeforeUpdate) && bt(Ae, ve, ce, ye), un(y, !0);
					const ze = ga(y),
						ot = y.subTree;
					y.subTree = ze, m(ot, ze, d(ot.el), Q(ot), y, W, J), ce.el = ze.el, we === null && Hf(y, ze.el), le && je(le, W), (Ae = ce.props && ce.props.onVnodeUpdated) && je(() => bt(Ae, ve, ce, ye), W)
				} else {
					let ce;
					const {
						el: ae,
						props: le
					} = P, {
						bm: ve,
						m: ye,
						parent: we
					} = y, Ae = wr(P);
					if (un(y, !1), ve && va(ve), !Ae && (ce = le && le.onVnodeBeforeMount) && bt(ce, we, P), un(y, !0), ae && pe) {
						const ze = () => {
							y.subTree = ga(y), pe(ae, y.subTree, y, W, null)
						};
						Ae ? P.type.__asyncLoader().then(() => !y.isUnmounted && ze()) : ze()
					} else {
						const ze = y.subTree = ga(y);
						m(null, ze, G, V, y, W, J), P.el = ze.el
					}
					if (ye && je(ye, W), !Ae && (ce = le && le.onVnodeMounted)) {
						const ze = P;
						je(() => bt(ce, we, ze), W)
					}(P.shapeFlag & 256 || we && wr(we.vnode) && we.vnode.shapeFlag & 256) && y.a && je(y.a, W), y.isMounted = !0, P = G = V = null
				}
			},
			ee = y.effect = new xo(X, () => gl(K), y.scope),
			K = y.update = () => ee.run();
		K.id = y.uid, un(y, !0), K()
	}, q = (y, P, G) => {
		P.component = y;
		const V = y.vnode.props;
		y.vnode = P, y.next = null, id(y, P.props, V, G), sd(y, P.children, G), rr(), Vi(void 0, y.update), ir()
	}, ne = (y, P, G, V, W, J, te, X, ee = !1) => {
		const K = y && y.children,
			ce = y ? y.shapeFlag : 0,
			ae = P.children,
			{
				patchFlag: le,
				shapeFlag: ve
			} = P;
		if (le > 0) {
			if (le & 128) {
				T(K, ae, G, V, W, J, te, X, ee);
				return
			} else if (le & 256) {
				F(K, ae, G, V, W, J, te, X, ee);
				return
			}
		}
		ve & 8 ? (ce & 16 && Y(K, W, J), ae !== K && u(G, ae)) : ce & 16 ? ve & 16 ? T(K, ae, G, V, W, J, te, X, ee) : Y(K, W, J, !0) : (ce & 8 && u(G, ""), ve & 16 && A(ae, G, V, W, J, te, X, ee))
	}, F = (y, P, G, V, W, J, te, X, ee) => {
		y = y || Bn, P = P || Bn;
		const K = y.length,
			ce = P.length,
			ae = Math.min(K, ce);
		let le;
		for (le = 0; le < ae; le++) {
			const ve = P[le] = ee ? Vt(P[le]) : yt(P[le]);
			m(y[le], ve, G, null, W, J, te, X, ee)
		}
		K > ce ? Y(y, W, J, !0, !1, ae) : A(P, G, V, W, J, te, X, ee, ae)
	}, T = (y, P, G, V, W, J, te, X, ee) => {
		let K = 0;
		const ce = P.length;
		let ae = y.length - 1,
			le = ce - 1;
		for (; K <= ae && K <= le;) {
			const ve = y[K],
				ye = P[K] = ee ? Vt(P[K]) : yt(P[K]);
			if (hn(ve, ye)) m(ve, ye, G, null, W, J, te, X, ee);
			else break;
			K++
		}
		for (; K <= ae && K <= le;) {
			const ve = y[ae],
				ye = P[le] = ee ? Vt(P[le]) : yt(P[le]);
			if (hn(ve, ye)) m(ve, ye, G, null, W, J, te, X, ee);
			else break;
			ae--, le--
		}
		if (K > ae) {
			if (K <= le) {
				const ve = le + 1,
					ye = ve < ce ? P[ve].el : V;
				for (; K <= le;) m(null, P[K] = ee ? Vt(P[K]) : yt(P[K]), G, ye, W, J, te, X, ee), K++
			}
		} else if (K > le)
			for (; K <= ae;) R(y[K], W, J, !0), K++;
		else {
			const ve = K,
				ye = K,
				we = new Map;
			for (K = ye; K <= le; K++) {
				const We = P[K] = ee ? Vt(P[K]) : yt(P[K]);
				We.key != null && we.set(We.key, K)
			}
			let Ae, ze = 0;
			const ot = le - ye + 1;
			let Tn = !1,
				ms = 0;
			const dr = new Array(ot);
			for (K = 0; K < ot; K++) dr[K] = 0;
			for (K = ve; K <= ae; K++) {
				const We = y[K];
				if (ze >= ot) {
					R(We, W, J, !0);
					continue
				}
				let mt;
				if (We.key != null) mt = we.get(We.key);
				else
					for (Ae = ye; Ae <= le; Ae++)
						if (dr[Ae - ye] === 0 && hn(We, P[Ae])) {
							mt = Ae;
							break
						} mt === void 0 ? R(We, W, J, !0) : (dr[mt - ye] = K + 1, mt >= ms ? ms = mt : Tn = !0, m(We, P[mt], G, null, W, J, te, X, ee), ze++)
			}
			const bs = Tn ? dd(dr) : Bn;
			for (Ae = bs.length - 1, K = ot - 1; K >= 0; K--) {
				const We = ye + K,
					mt = P[We],
					_s = We + 1 < ce ? P[We + 1].el : V;
				dr[K] === 0 ? m(null, mt, G, _s, W, J, te, X, ee) : Tn && (Ae < 0 || K !== bs[Ae] ? E(mt, G, _s, 2) : Ae--)
			}
		}
	}, E = (y, P, G, V, W = null) => {
		const {
			el: J,
			type: te,
			transition: X,
			children: ee,
			shapeFlag: K
		} = y;
		if (K & 6) {
			E(y.component.subTree, P, G, V);
			return
		}
		if (K & 128) {
			y.suspense.move(P, G, V);
			return
		}
		if (K & 64) {
			te.move(y, P, G, oe);
			return
		}
		if (te === Te) {
			r(J, P, G);
			for (let ae = 0; ae < ee.length; ae++) E(ee[ae], P, G, V);
			r(y.anchor, P, G);
			return
		}
		if (te === si) {
			w(y, P, G);
			return
		}
		if (V !== 2 && K & 1 && X)
			if (V === 0) X.beforeEnter(J), r(J, P, G), je(() => X.enter(J), W);
			else {
				const {
					leave: ae,
					delayLeave: le,
					afterLeave: ve
				} = X, ye = () => r(J, P, G), we = () => {
					ae(J, () => {
						ye(), ve && ve()
					})
				};
				le ? le(J, ye, we) : we()
			}
		else r(J, P, G)
	}, R = (y, P, G, V = !1, W = !1) => {
		const {
			type: J,
			props: te,
			ref: X,
			children: ee,
			dynamicChildren: K,
			shapeFlag: ce,
			patchFlag: ae,
			dirs: le
		} = y;
		if (X != null && Za(X, null, G, y, !0), ce & 256) {
			P.ctx.deactivate(y);
			return
		}
		const ve = ce & 1 && le,
			ye = !wr(y);
		let we;
		if (ye && (we = te && te.onVnodeBeforeUnmount) && bt(we, P, y), ce & 6) Z(y.component, G, V);
		else {
			if (ce & 128) {
				y.suspense.unmount(G, V);
				return
			}
			ve && ln(y, null, P, "beforeUnmount"), ce & 64 ? y.type.remove(y, P, G, W, oe, V) : K && (J !== Te || ae > 0 && ae & 64) ? Y(K, P, G, !1, !0) : (J === Te && ae & 384 || !W && ce & 16) && Y(ee, P, G), V && B(y)
		}(ye && (we = te && te.onVnodeUnmounted) || ve) && je(() => {
			we && bt(we, P, y), ve && ln(y, null, P, "unmounted")
		}, G)
	}, B = y => {
		const {
			type: P,
			el: G,
			anchor: V,
			transition: W
		} = y;
		if (P === Te) {
			H(G, V);
			return
		}
		if (P === si) {
			k(y);
			return
		}
		const J = () => {
			i(G), W && !W.persisted && W.afterLeave && W.afterLeave()
		};
		if (y.shapeFlag & 1 && W && !W.persisted) {
			const {
				leave: te,
				delayLeave: X
			} = W, ee = () => te(G, J);
			X ? X(y.el, J, ee) : ee()
		} else J()
	}, H = (y, P) => {
		let G;
		for (; y !== P;) G = f(y), i(y), y = G;
		i(P)
	}, Z = (y, P, G) => {
		const {
			bum: V,
			scope: W,
			update: J,
			subTree: te,
			um: X
		} = y;
		V && va(V), W.stop(), J && (J.active = !1, R(te, y, P, G)), X && je(X, P), je(() => {
			y.isUnmounted = !0
		}, P), P && P.pendingBranch && !P.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === P.pendingId && (P.deps--, P.deps === 0 && P.resolve())
	}, Y = (y, P, G, V = !1, W = !1, J = 0) => {
		for (let te = J; te < y.length; te++) R(y[te], P, G, V, W)
	}, Q = y => y.shapeFlag & 6 ? Q(y.component.subTree) : y.shapeFlag & 128 ? y.suspense.next() : f(y.anchor || y.el), se = (y, P, G) => {
		y == null ? P._vnode && R(P._vnode, null, null, !0) : m(P._vnode || null, y, P, null, null, null, G), _l(), P._vnode = y
	}, oe = {
		p: m,
		um: R,
		m: E,
		r: B,
		mt: N,
		mc: A,
		pc: ne,
		pbc: z,
		n: Q,
		o: e
	};
	let re, pe;
	return t && ([re, pe] = t(oe)), {
		render: se,
		hydrate: re,
		createApp: ld(se, re)
	}
}

function un({
	effect: e,
	update: t
}, n) {
	e.allowRecurse = t.allowRecurse = n
}

function Nl(e, t, n = !1) {
	const r = e.children,
		i = t.children;
	if (he(r) && he(i))
		for (let a = 0; a < r.length; a++) {
			const o = r[a];
			let s = i[a];
			s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[a] = Vt(i[a]), s.el = o.el), n || Nl(o, s))
		}
}

function dd(e) {
	const t = e.slice(),
		n = [0];
	let r, i, a, o, s;
	const c = e.length;
	for (r = 0; r < c; r++) {
		const l = e[r];
		if (l !== 0) {
			if (i = n[n.length - 1], e[i] < l) {
				t[r] = i, n.push(r);
				continue
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < l ? a = s + 1 : o = s;
			l < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r)
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n
}
const pd = e => e.__isTeleport,
	Te = Symbol(void 0),
	To = Symbol(void 0),
	at = Symbol(void 0),
	si = Symbol(void 0),
	Ar = [];
let ut = null;

function ue(e = !1) {
	Ar.push(ut = e ? null : [])
}

function hd() {
	Ar.pop(), ut = Ar[Ar.length - 1] || null
}
let Ir = 1;

function Ci(e) {
	Ir += e
}

function jl(e) {
	return e.dynamicChildren = Ir > 0 ? ut || Bn : null, hd(), Ir > 0 && ut && ut.push(e), e
}

function be(e, t, n, r, i, a) {
	return jl(O(e, t, n, r, i, a, !0))
}

function Ie(e, t, n, r, i) {
	return jl(fe(e, t, n, r, i, !0))
}

function zi(e) {
	return e ? e.__v_isVNode === !0 : !1
}

function hn(e, t) {
	return e.type === t.type && e.key === t.key
}
const Xi = "__vInternal",
	Dl = ({
		key: e
	}) => e != null ? e : null,
	ci = ({
		ref: e,
		ref_key: t,
		ref_for: n
	}) => e != null ? Me(e) || He(e) || me(e) ? {
		i: Be,
		r: e,
		k: t,
		f: !!n
	} : e : null;

function O(e, t = null, n = null, r = 0, i = null, a = e === Te ? 0 : 1, o = !1, s = !1) {
	const c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Dl(t),
		ref: t && ci(t),
		scopeId: qi,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null
	};
	return s ? ($o(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= Me(n) ? 8 : 16), Ir > 0 && !o && ut && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ut.push(c), c
}
const fe = vd;

function vd(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Tl) && (e = at), zi(e)) {
		const s = an(e, t, !0);
		return n && $o(s, n), Ir > 0 && !a && ut && (s.shapeFlag & 6 ? ut[ut.indexOf(e)] = s : ut.push(s)), s.patchFlag |= -2, s
	}
	if (zd(e) && (e = e.__vccOpts), t) {
		t = gd(t);
		let {
			class: s,
			style: c
		} = t;
		s && !Me(s) && (t.class = Ye(s)), Se(c) && (ll(c) && !he(c) && (c = Ue({}, c)), t.style = Hi(c))
	}
	const o = Me(e) ? 1 : Gf(e) ? 128 : pd(e) ? 64 : Se(e) ? 4 : me(e) ? 2 : 0;
	return O(e, t, n, r, i, o, a, !0)
}

function gd(e) {
	return e ? ll(e) || Xi in e ? Ue({}, e) : e : null
}

function an(e, t, n = !1) {
	const {
		props: r,
		ref: i,
		patchFlag: a,
		children: o
	} = e, s = t ? Wl(r || {}, t) : r;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: s,
		key: s && Dl(s),
		ref: t && t.ref ? n && i ? he(i) ? i.concat(ci(t)) : [i, ci(t)] : ci(t) : i,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: o,
		target: e.target,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Te ? a === -1 ? 16 : a | 16 : a,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: e.transition,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && an(e.ssContent),
		ssFallback: e.ssFallback && an(e.ssFallback),
		el: e.el,
		anchor: e.anchor
	}
}

function Vl(e = " ", t = 0) {
	return fe(To, null, e, t)
}

function Mo(e, t) {
	const n = fe(si, null, e);
	return n.staticCount = t, n
}

function en(e = "", t = !1) {
	return t ? (ue(), Ie(at, null, e)) : fe(at, null, e)
}

function yt(e) {
	return e == null || typeof e == "boolean" ? fe(at) : he(e) ? fe(Te, null, e.slice()) : typeof e == "object" ? Vt(e) : fe(To, null, String(e))
}

function Vt(e) {
	return e.el === null || e.memo ? e : an(e)
}

function $o(e, t) {
	let n = 0;
	const {
		shapeFlag: r
	} = e;
	if (t == null) t = null;
	else if (he(t)) n = 16;
	else if (typeof t == "object")
		if (r & 65) {
			const i = t.default;
			i && (i._c && (i._d = !1), $o(e, i()), i._c && (i._d = !0));
			return
		} else {
			n = 32;
			const i = t._;
			!i && !(Xi in t) ? t._ctx = Be : i === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
		}
	else me(t) ? (t = {
		default: t,
		_ctx: Be
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Vl(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n
}

function Wl(...e) {
	const t = {};
	for (let n = 0; n < e.length; n++) {
		const r = e[n];
		for (const i in r)
			if (i === "class") t.class !== r.class && (t.class = Ye([t.class, r.class]));
			else if (i === "style") t.style = Hi([t.style, r.style]);
		else if (Gi(i)) {
			const a = t[i],
				o = r[i];
			o && a !== o && !(he(a) && a.includes(o)) && (t[i] = a ? [].concat(a, o) : o)
		} else i !== "" && (t[i] = r[i])
	}
	return t
}

function bt(e, t, n, r = null) {
	it(e, t, 7, [n, r])
}
const md = Fl();
let bd = 0;

function _d(e, t, n) {
	const r = e.type,
		i = (t ? t.appContext : e.appContext) || md,
		a = {
			uid: bd++,
			vnode: e,
			type: r,
			parent: t,
			appContext: i,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new Yu(!0),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: t ? t.provides : Object.create(i.provides),
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: Rl(r, i),
			emitsOptions: xl(r, i),
			emit: null,
			emitted: null,
			propsDefaults: Ce,
			inheritAttrs: r.inheritAttrs,
			ctx: Ce,
			data: Ce,
			props: Ce,
			attrs: Ce,
			slots: Ce,
			refs: Ce,
			setupState: Ce,
			setupContext: null,
			suspense: n,
			suspenseId: n ? n.pendingId : 0,
			asyncDep: null,
			asyncResolved: !1,
			isMounted: !1,
			isUnmounted: !1,
			isDeactivated: !1,
			bc: null,
			c: null,
			bm: null,
			m: null,
			bu: null,
			u: null,
			um: null,
			bum: null,
			da: null,
			a: null,
			rtg: null,
			rtc: null,
			ec: null,
			sp: null
		};
	return a.ctx = {
		_: a
	}, a.root = t ? t.root : a, a.emit = If.bind(null, a), e.ce && e.ce(a), a
}
let $e = null;
const Qi = () => $e || Be,
	qn = e => {
		$e = e, e.scope.on()
	},
	yn = () => {
		$e && $e.scope.off(), $e = null
	};

function ql(e) {
	return e.vnode.shapeFlag & 4
}
let Or = !1;

function yd(e, t = !1) {
	Or = t;
	const {
		props: n,
		children: r
	} = e.vnode, i = ql(e);
	rd(e, n, i, t), od(e, r);
	const a = i ? xd(e, t) : void 0;
	return Or = !1, a
}

function xd(e, t) {
	const n = e.type;
	e.accessCache = Object.create(null), e.proxy = Wn(new Proxy(e.ctx, Xf));
	const {
		setup: r
	} = n;
	if (r) {
		const i = e.setupContext = r.length > 1 ? Ad(e) : null;
		qn(e), rr();
		const a = Qt(r, e, 0, [e.props, i]);
		if (ir(), yn(), Kc(a)) {
			if (a.then(yn, yn), t) return a.then(o => {
				Bs(e, o, t)
			}).catch(o => {
				Di(o, e, 0)
			});
			e.asyncDep = a
		} else Bs(e, a, t)
	} else Kl(e, t)
}

function Bs(e, t, n) {
	me(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = pl(t)), Kl(e, n)
}
let Fs;

function Kl(e, t, n) {
	const r = e.type;
	if (!e.render) {
		if (!t && Fs && !r.render) {
			const i = r.template;
			if (i) {
				const {
					isCustomElement: a,
					compilerOptions: o
				} = e.appContext.config, {
					delimiters: s,
					compilerOptions: c
				} = r, l = Ue(Ue({
					isCustomElement: a,
					delimiters: s
				}, o), c);
				r.render = Fs(i, l)
			}
		}
		e.render = r.render || dt
	}
	qn(e), rr(), Qf(e), ir(), yn()
}

function wd(e) {
	return new Proxy(e.attrs, {
		get(t, n) {
			return Xe(e, "get", "$attrs"), t[n]
		}
	})
}

function Ad(e) {
	const t = r => {
		e.exposed = r || {}
	};
	let n;
	return {
		get attrs() {
			return n || (n = wd(e))
		},
		slots: e.slots,
		emit: e.emit,
		expose: t
	}
}

function Io(e) {
	if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(pl(Wn(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in wi) return wi[n](e)
		}
	}))
}

function Cd(e, t = !0) {
	return me(e) ? e.displayName || e.name : e.name || t && e.__name
}

function zd(e) {
	return me(e) && "__vccOpts" in e
}
const Re = (e, t) => Lf(e, t, Or);

function Cn(e, t, n) {
	const r = arguments.length;
	return r === 2 ? Se(t) && !he(t) ? zi(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && zi(n) && (n = [n]), fe(e, t, n))
}
const Ed = "3.2.37",
	Pd = "http://www.w3.org/2000/svg",
	vn = typeof document != "undefined" ? document : null,
	Ns = vn && vn.createElement("template"),
	Ld = {
		insert: (e, t, n) => {
			t.insertBefore(e, n || null)
		},
		remove: e => {
			const t = e.parentNode;
			t && t.removeChild(e)
		},
		createElement: (e, t, n, r) => {
			const i = t ? vn.createElementNS(Pd, e) : vn.createElement(e, n ? {
				is: n
			} : void 0);
			return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i
		},
		createText: e => vn.createTextNode(e),
		createComment: e => vn.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t
		},
		setElementText: (e, t) => {
			e.textContent = t
		},
		parentNode: e => e.parentNode,
		nextSibling: e => e.nextSibling,
		querySelector: e => vn.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, "")
		},
		cloneNode(e) {
			const t = e.cloneNode(!0);
			return "_value" in e && (t._value = e._value), t
		},
		insertStaticContent(e, t, n, r, i, a) {
			const o = n ? n.previousSibling : t.lastChild;
			if (i && (i === a || i.nextSibling))
				for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
			else {
				Ns.innerHTML = r ? `<svg>${e}</svg>` : e;
				const s = Ns.content;
				if (r) {
					const c = s.firstChild;
					for (; c.firstChild;) s.appendChild(c.firstChild);
					s.removeChild(c)
				}
				t.insertBefore(s, n)
			}
			return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
		}
	};

function kd(e, t, n) {
	const r = e._vtc;
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

function Sd(e, t, n) {
	const r = e.style,
		i = Me(n);
	if (n && !i) {
		for (const a in n) Xa(r, a, n[a]);
		if (t && !Me(t))
			for (const a in t) n[a] == null && Xa(r, a, "")
	} else {
		const a = r.display;
		i ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = a)
	}
}
const js = /\s*!important$/;

function Xa(e, t, n) {
	if (he(n)) n.forEach(r => Xa(e, t, r));
	else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
	else {
		const r = Td(e, t);
		js.test(n) ? e.setProperty(nr(r), n.replace(js, ""), "important") : e[r] = n
	}
}
const Ds = ["Webkit", "Moz", "ms"],
	ba = {};

function Td(e, t) {
	const n = ba[t];
	if (n) return n;
	let r = xt(t);
	if (r !== "filter" && r in e) return ba[t] = r;
	r = Ni(r);
	for (let i = 0; i < Ds.length; i++) {
		const a = Ds[i] + r;
		if (a in e) return ba[t] = a
	}
	return t
}
const Vs = "http://www.w3.org/1999/xlink";

function Md(e, t, n, r, i) {
	if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(Vs, t.slice(6, t.length)) : e.setAttributeNS(Vs, t, n);
	else {
		const a = Hu(t);
		n == null || a && !Vc(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n)
	}
}

function $d(e, t, n, r, i, a, o) {
	if (t === "innerHTML" || t === "textContent") {
		r && o(r, i, a), e[t] = n == null ? "" : n;
		return
	}
	if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
		e._value = n;
		const c = n == null ? "" : n;
		(e.value !== c || e.tagName === "OPTION") && (e.value = c), n == null && e.removeAttribute(t);
		return
	}
	let s = !1;
	if (n === "" || n == null) {
		const c = typeof e[t];
		c === "boolean" ? n = Vc(n) : n == null && c === "string" ? (n = "", s = !0) : c === "number" && (n = 0, s = !0)
	}
	try {
		e[t] = n
	} catch {}
	s && e.removeAttribute(t)
}
const [Yl, Id] = (() => {
	let e = Date.now,
		t = !1;
	if (typeof window != "undefined") {
		Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
		const n = navigator.userAgent.match(/firefox\/(\d+)/i);
		t = !!(n && Number(n[1]) <= 53)
	}
	return [e, t]
})();
let Qa = 0;
const Od = Promise.resolve(),
	Ud = () => {
		Qa = 0
	},
	Rd = () => Qa || (Od.then(Ud), Qa = Yl());

function Hd(e, t, n, r) {
	e.addEventListener(t, n, r)
}

function Gd(e, t, n, r) {
	e.removeEventListener(t, n, r)
}

function Bd(e, t, n, r, i = null) {
	const a = e._vei || (e._vei = {}),
		o = a[t];
	if (r && o) o.value = r;
	else {
		const [s, c] = Fd(t);
		if (r) {
			const l = a[t] = Nd(r, i);
			Hd(e, s, l, c)
		} else o && (Gd(e, s, o, c), a[t] = void 0)
	}
}
const Ws = /(?:Once|Passive|Capture)$/;

function Fd(e) {
	let t;
	if (Ws.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Ws);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
	}
	return [nr(e.slice(2)), t]
}

function Nd(e, t) {
	const n = r => {
		const i = r.timeStamp || Yl();
		(Id || i >= n.attached - 1) && it(jd(r, n.value), t, 5, [r])
	};
	return n.value = e, n.attached = Rd(), n
}

function jd(e, t) {
	if (he(t)) {
		const n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0
		}, t.map(r => i => !i._stopped && r && r(i))
	} else return t
}
const qs = /^on[a-z]/,
	Dd = (e, t, n, r, i = !1, a, o, s, c) => {
		t === "class" ? kd(e, r, i) : t === "style" ? Sd(e, n, r) : Gi(t) ? go(t) || Bd(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Vd(e, t, r, i)) ? $d(e, t, r, a, o, s, c) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Md(e, t, r, i))
	};

function Vd(e, t, n, r) {
	return r ? !!(t === "innerHTML" || t === "textContent" || t in e && qs.test(t) && me(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || qs.test(t) && Me(n) ? !1 : t in e
}
const Gt = "transition",
	pr = "animation",
	kn = (e, {
		slots: t
	}) => Cn(Al, Wd(e), t);
kn.displayName = "Transition";
const Zl = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [String, Number, Object],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
};
kn.props = Ue({}, Al.props, Zl);
const fn = (e, t = []) => {
		he(e) ? e.forEach(n => n(...t)) : e && e(...t)
	},
	Ks = e => e ? he(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Wd(e) {
	const t = {};
	for (const C in e) C in Zl || (t[C] = e[C]);
	if (e.css === !1) return t;
	const {
		name: n = "v",
		type: r,
		duration: i,
		enterFromClass: a = `${n}-enter-from`,
		enterActiveClass: o = `${n}-enter-active`,
		enterToClass: s = `${n}-enter-to`,
		appearFromClass: c = a,
		appearActiveClass: l = o,
		appearToClass: u = s,
		leaveFromClass: d = `${n}-leave-from`,
		leaveActiveClass: f = `${n}-leave-active`,
		leaveToClass: b = `${n}-leave-to`
	} = e, p = qd(i), h = p && p[0], m = p && p[1], {
		onBeforeEnter: _,
		onEnter: v,
		onEnterCancelled: g,
		onLeave: w,
		onLeaveCancelled: k,
		onBeforeAppear: S = _,
		onAppear: U = v,
		onAppearCancelled: M = g
	} = t, A = (C, L, I) => {
		dn(C, L ? u : s), dn(C, L ? l : o), I && I()
	}, x = (C, L) => {
		C._isLeaving = !1, dn(C, d), dn(C, b), dn(C, f), L && L()
	}, z = C => (L, I) => {
		const N = C ? U : v,
			$ = () => A(L, C, I);
		fn(N, [L, $]), Ys(() => {
			dn(L, C ? c : a), Bt(L, C ? u : s), Ks(N) || Zs(L, r, h, $)
		})
	};
	return Ue(t, {
		onBeforeEnter(C) {
			fn(_, [C]), Bt(C, a), Bt(C, o)
		},
		onBeforeAppear(C) {
			fn(S, [C]), Bt(C, c), Bt(C, l)
		},
		onEnter: z(!1),
		onAppear: z(!0),
		onLeave(C, L) {
			C._isLeaving = !0;
			const I = () => x(C, L);
			Bt(C, d), Zd(), Bt(C, f), Ys(() => {
				!C._isLeaving || (dn(C, d), Bt(C, b), Ks(w) || Zs(C, r, m, I))
			}), fn(w, [C, I])
		},
		onEnterCancelled(C) {
			A(C, !1), fn(g, [C])
		},
		onAppearCancelled(C) {
			A(C, !0), fn(M, [C])
		},
		onLeaveCancelled(C) {
			x(C), fn(k, [C])
		}
	})
}

function qd(e) {
	if (e == null) return null;
	if (Se(e)) return [_a(e.enter), _a(e.leave)]; {
		const t = _a(e);
		return [t, t]
	}
}

function _a(e) {
	return Xc(e)
}

function Bt(e, t) {
	t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t)
}

function dn(e, t) {
	t.split(/\s+/).forEach(r => r && e.classList.remove(r));
	const {
		_vtc: n
	} = e;
	n && (n.delete(t), n.size || (e._vtc = void 0))
}

function Ys(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e)
	})
}
let Kd = 0;

function Zs(e, t, n, r) {
	const i = e._endId = ++Kd,
		a = () => {
			i === e._endId && r()
		};
	if (n) return setTimeout(a, n);
	const {
		type: o,
		timeout: s,
		propCount: c
	} = Yd(e, t);
	if (!o) return r();
	const l = o + "end";
	let u = 0;
	const d = () => {
			e.removeEventListener(l, f), a()
		},
		f = b => {
			b.target === e && ++u >= c && d()
		};
	setTimeout(() => {
		u < c && d()
	}, s + 1), e.addEventListener(l, f)
}

function Yd(e, t) {
	const n = window.getComputedStyle(e),
		r = p => (n[p] || "").split(", "),
		i = r(Gt + "Delay"),
		a = r(Gt + "Duration"),
		o = Xs(i, a),
		s = r(pr + "Delay"),
		c = r(pr + "Duration"),
		l = Xs(s, c);
	let u = null,
		d = 0,
		f = 0;
	t === Gt ? o > 0 && (u = Gt, d = o, f = a.length) : t === pr ? l > 0 && (u = pr, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? Gt : pr : null, f = u ? u === Gt ? a.length : c.length : 0);
	const b = u === Gt && /\b(transform|all)(,|$)/.test(n[Gt + "Property"]);
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: b
	}
}

function Xs(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((n, r) => Qs(n) + Qs(e[r])))
}

function Qs(e) {
	return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function Zd() {
	return document.body.offsetHeight
}
const Xd = ["ctrl", "shift", "alt", "meta"],
	Qd = {
		stop: e => e.stopPropagation(),
		prevent: e => e.preventDefault(),
		self: e => e.target !== e.currentTarget,
		ctrl: e => !e.ctrlKey,
		shift: e => !e.shiftKey,
		alt: e => !e.altKey,
		meta: e => !e.metaKey,
		left: e => "button" in e && e.button !== 0,
		middle: e => "button" in e && e.button !== 1,
		right: e => "button" in e && e.button !== 2,
		exact: (e, t) => Xd.some(n => e[`${n}Key`] && !t.includes(n))
	},
	Xl = (e, t) => (n, ...r) => {
		for (let i = 0; i < t.length; i++) {
			const a = Qd[t[i]];
			if (a && a(n, t)) return
		}
		return e(n, ...r)
	},
	Jd = Ue({
		patchProp: Dd
	}, Ld);
let Js;

function e0() {
	return Js || (Js = ud(Jd))
}
const t0 = (...e) => {
	const t = e0().createApp(...e),
		{
			mount: n
		} = t;
	return t.mount = r => {
		const i = n0(r);
		if (!i) return;
		const a = t._component;
		!me(a) && !a.render && !a.template && (a.template = i.innerHTML), i.innerHTML = "";
		const o = n(i, !1, i instanceof SVGElement);
		return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o
	}, t
};

function n0(e) {
	return Me(e) ? document.querySelector(e) : e
}
/*!
	* vue-router v4.0.16
	* (c) 2022 Eduardo San Martin Morote
	* @license MIT
	*/
const Ql = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
	sr = e => Ql ? Symbol(e) : "_vr_" + e,
	Oo = sr("rvlm"),
	Ei = sr("rvd"),
	Uo = sr("r"),
	Jl = sr("rl"),
	Ur = sr("rvl"),
	Un = typeof window != "undefined";

function r0(e) {
	return e.__esModule || Ql && e[Symbol.toStringTag] === "Module"
}
const ke = Object.assign;

function ya(e, t) {
	const n = {};
	for (const r in t) {
		const i = t[r];
		n[r] = Array.isArray(i) ? i.map(e) : e(i)
	}
	return n
}
const Cr = () => {},
	i0 = /\/$/,
	a0 = e => e.replace(i0, "");

function xa(e, t, n = "/") {
	let r, i = {},
		a = "",
		o = "";
	const s = t.indexOf("?"),
		c = t.indexOf("#", s > -1 ? s : 0);
	return s > -1 && (r = t.slice(0, s), a = t.slice(s + 1, c > -1 ? c : t.length), i = e(a)), c > -1 && (r = r || t.slice(0, c), o = t.slice(c, t.length)), r = l0(r != null ? r : t, n), {
		fullPath: r + (a && "?") + a + o,
		path: r,
		query: i,
		hash: o
	}
}

function o0(e, t) {
	const n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "")
}

function s0(e, t, n) {
	const r = t.matched.length - 1,
		i = n.matched.length - 1;
	return r > -1 && r === i && Kn(t.matched[r], n.matched[i]) && e1(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function Kn(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t)
}

function e1(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (const n in e)
		if (!c0(e[n], t[n])) return !1;
	return !0
}

function c0(e, t) {
	return Array.isArray(e) ? ec(e, t) : Array.isArray(t) ? ec(t, e) : e === t
}

function ec(e, t) {
	return Array.isArray(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function l0(e, t) {
	if (e.startsWith("/")) return e;
	if (!e) return t;
	const n = t.split("/"),
		r = e.split("/");
	let i = n.length - 1,
		a, o;
	for (a = 0; a < r.length; a++)
		if (o = r[a], !(i === 1 || o === "."))
			if (o === "..") i--;
			else break;
	return n.slice(0, i).join("/") + "/" + r.slice(a - (a === r.length ? 1 : 0)).join("/")
}
var Rr;
(function(e) {
	e.pop = "pop", e.push = "push"
})(Rr || (Rr = {}));
var Pi;
(function(e) {
	e.back = "back", e.forward = "forward", e.unknown = ""
})(Pi || (Pi = {}));
const wa = "";

function u0(e) {
	if (!e)
		if (Un) {
			const t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
		} else e = "/";
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), a0(e)
}
const f0 = /^[^#]+#/;

function d0(e, t) {
	return e.replace(f0, "#") + t
}

function p0(e, t) {
	const n = document.documentElement.getBoundingClientRect(),
		r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	}
}
const h0 = () => ({
	left: window.pageXOffset,
	top: window.pageYOffset
});

function v0(e) {
	let t;
	if ("el" in e) {
		const n = e.el,
			r = typeof n == "string" && n.startsWith("#"),
			i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = p0(i, e)
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function tc(e, t) {
	return (history.state ? history.state.position - t : -1) + e
}
const Ja = new Map;

function g0(e, t) {
	Ja.set(e, t)
}

function m0(e) {
	const t = Ja.get(e);
	return Ja.delete(e), t
}

function L9(e = "") {
	let t = [],
		n = [wa],
		r = 0;
	e = u0(e);

	function i(s) {
		r++, r === n.length || n.splice(r), n.push(s)
	}

	function a(s, c, {
		direction: l,
		delta: u
	}) {
		const d = {
			direction: l,
			delta: u,
			type: Rr.pop
		};
		for (const f of t) f(s, c, d)
	}
	const o = {
		location: wa,
		state: {},
		base: e,
		createHref: d0.bind(null, e),
		replace(s) {
			n.splice(r--, 1), i(s)
		},
		push(s, c) {
			i(s)
		},
		listen(s) {
			return t.push(s), () => {
				const c = t.indexOf(s);
				c > -1 && t.splice(c, 1)
			}
		},
		destroy() {
			t = [], n = [wa], r = 0
		},
		go(s, c = !0) {
			const l = this.location,
				u = s < 0 ? Pi.back : Pi.forward;
			r = Math.max(0, Math.min(r + s, n.length - 1)), c && a(this.location, l, {
				direction: u,
				delta: s
			})
		}
	};
	return Object.defineProperty(o, "location", {
		enumerable: !0,
		get: () => n[r]
	}), o
}

function b0(e) {
	return typeof e == "string" || e && typeof e == "object"
}

function t1(e) {
	return typeof e == "string" || typeof e == "symbol"
}
const Ft = {
		path: "/",
		name: void 0,
		params: {},
		query: {},
		hash: "",
		fullPath: "/",
		matched: [],
		meta: {},
		redirectedFrom: void 0
	},
	n1 = sr("nf");
var nc;
(function(e) {
	e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(nc || (nc = {}));

function Yn(e, t) {
	return ke(new Error, {
		type: e,
		[n1]: !0
	}, t)
}

function Nt(e, t) {
	return e instanceof Error && n1 in e && (t == null || !!(e.type & t))
}
const rc = "[^/]+?",
	_0 = {
		sensitive: !1,
		strict: !1,
		start: !0,
		end: !0
	},
	y0 = /[.+*?^${}()[\]/\\]/g;

function x0(e, t) {
	const n = ke({}, _0, t),
		r = [];
	let i = n.start ? "^" : "";
	const a = [];
	for (const l of e) {
		const u = l.length ? [] : [90];
		n.strict && !l.length && (i += "/");
		for (let d = 0; d < l.length; d++) {
			const f = l[d];
			let b = 40 + (n.sensitive ? .25 : 0);
			if (f.type === 0) d || (i += "/"), i += f.value.replace(y0, "\\$&"), b += 40;
			else if (f.type === 1) {
				const {
					value: p,
					repeatable: h,
					optional: m,
					regexp: _
				} = f;
				a.push({
					name: p,
					repeatable: h,
					optional: m
				});
				const v = _ || rc;
				if (v !== rc) {
					b += 10;
					try {
						new RegExp(`(${v})`)
					} catch (w) {
						throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + w.message)
					}
				}
				let g = h ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
				d || (g = m && l.length < 2 ? `(?:/${g})` : "/" + g), m && (g += "?"), i += g, b += 20, m && (b += -8), h && (b += -20), v === ".*" && (b += -50)
			}
			u.push(b)
		}
		r.push(u)
	}
	if (n.strict && n.end) {
		const l = r.length - 1;
		r[l][r[l].length - 1] += .7000000000000001
	}
	n.strict || (i += "/?"), n.end ? i += "$" : n.strict && (i += "(?:/|$)");
	const o = new RegExp(i, n.sensitive ? "" : "i");

	function s(l) {
		const u = l.match(o),
			d = {};
		if (!u) return null;
		for (let f = 1; f < u.length; f++) {
			const b = u[f] || "",
				p = a[f - 1];
			d[p.name] = b && p.repeatable ? b.split("/") : b
		}
		return d
	}

	function c(l) {
		let u = "",
			d = !1;
		for (const f of e) {
			(!d || !u.endsWith("/")) && (u += "/"), d = !1;
			for (const b of f)
				if (b.type === 0) u += b.value;
				else if (b.type === 1) {
				const {
					value: p,
					repeatable: h,
					optional: m
				} = b, _ = p in l ? l[p] : "";
				if (Array.isArray(_) && !h) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
				const v = Array.isArray(_) ? _.join("/") : _;
				if (!v)
					if (m) f.length < 2 && e.length > 1 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
					else throw new Error(`Missing required param "${p}"`);
				u += v
			}
		}
		return u
	}
	return {
		re: o,
		score: r,
		keys: a,
		parse: s,
		stringify: c
	}
}

function w0(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		const r = t[n] - e[n];
		if (r) return r;
		n++
	}
	return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}

function A0(e, t) {
	let n = 0;
	const r = e.score,
		i = t.score;
	for (; n < r.length && n < i.length;) {
		const a = w0(r[n], i[n]);
		if (a) return a;
		n++
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (ic(r)) return 1;
		if (ic(i)) return -1
	}
	return i.length - r.length
}

function ic(e) {
	const t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0
}
const C0 = {
		type: 0,
		value: ""
	},
	z0 = /[a-zA-Z0-9_]/;

function E0(e) {
	if (!e) return [
		[]
	];
	if (e === "/") return [
		[C0]
	];
	if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

	function t(b) {
		throw new Error(`ERR (${n})/"${l}": ${b}`)
	}
	let n = 0,
		r = n;
	const i = [];
	let a;

	function o() {
		a && i.push(a), a = []
	}
	let s = 0,
		c, l = "",
		u = "";

	function d() {
		!l || (n === 0 ? a.push({
			type: 0,
			value: l
		}) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: 1,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), l = "")
	}

	function f() {
		l += c
	}
	for (; s < e.length;) {
		if (c = e[s++], c === "\\" && n !== 2) {
			r = n, n = 4;
			continue
		}
		switch (n) {
			case 0:
				c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = 1) : f();
				break;
			case 4:
				f(), n = r;
				break;
			case 1:
				c === "(" ? n = 2 : z0.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
				break;
			case 2:
				c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
				break;
			case 3:
				d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
				break;
			default:
				t("Unknown state");
				break
		}
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i
}

function P0(e, t, n) {
	const r = x0(E0(e.path), n),
		i = ke(r, {
			record: e,
			parent: t,
			children: [],
			alias: []
		});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}

function L0(e, t) {
	const n = [],
		r = new Map;
	t = oc({
		strict: !1,
		end: !0,
		sensitive: !1
	}, t);

	function i(u) {
		return r.get(u)
	}

	function a(u, d, f) {
		const b = !f,
			p = S0(u);
		p.aliasOf = f && f.record;
		const h = oc(t, u),
			m = [p];
		if ("alias" in u) {
			const g = typeof u.alias == "string" ? [u.alias] : u.alias;
			for (const w of g) m.push(ke({}, p, {
				components: f ? f.record.components : p.components,
				path: w,
				aliasOf: f ? f.record : p
			}))
		}
		let _, v;
		for (const g of m) {
			const {
				path: w
			} = g;
			if (d && w[0] !== "/") {
				const k = d.record.path,
					S = k[k.length - 1] === "/" ? "" : "/";
				g.path = d.record.path + (w && S + w)
			}
			if (_ = P0(g, d, h), f ? f.alias.push(_) : (v = v || _, v !== _ && v.alias.push(_), b && u.name && !ac(_) && o(u.name)), "children" in p) {
				const k = p.children;
				for (let S = 0; S < k.length; S++) a(k[S], _, f && f.children[S])
			}
			f = f || _, c(_)
		}
		return v ? () => {
			o(v)
		} : Cr
	}

	function o(u) {
		if (t1(u)) {
			const d = r.get(u);
			d && (r.delete(u), n.splice(n.indexOf(d), 1), d.children.forEach(o), d.alias.forEach(o))
		} else {
			const d = n.indexOf(u);
			d > -1 && (n.splice(d, 1), u.record.name && r.delete(u.record.name), u.children.forEach(o), u.alias.forEach(o))
		}
	}

	function s() {
		return n
	}

	function c(u) {
		let d = 0;
		for (; d < n.length && A0(u, n[d]) >= 0 && (u.record.path !== n[d].record.path || !r1(u, n[d]));) d++;
		n.splice(d, 0, u), u.record.name && !ac(u) && r.set(u.record.name, u)
	}

	function l(u, d) {
		let f, b = {},
			p, h;
		if ("name" in u && u.name) {
			if (f = r.get(u.name), !f) throw Yn(1, {
				location: u
			});
			h = f.record.name, b = ke(k0(d.params, f.keys.filter(v => !v.optional).map(v => v.name)), u.params), p = f.stringify(b)
		} else if ("path" in u) p = u.path, f = n.find(v => v.re.test(p)), f && (b = f.parse(p), h = f.record.name);
		else {
			if (f = d.name ? r.get(d.name) : n.find(v => v.re.test(d.path)), !f) throw Yn(1, {
				location: u,
				currentLocation: d
			});
			h = f.record.name, b = ke({}, d.params, u.params), p = f.stringify(b)
		}
		const m = [];
		let _ = f;
		for (; _;) m.unshift(_.record), _ = _.parent;
		return {
			name: h,
			path: p,
			params: b,
			matched: m,
			meta: M0(m)
		}
	}
	return e.forEach(u => a(u)), {
		addRoute: a,
		resolve: l,
		removeRoute: o,
		getRoutes: s,
		getRecordMatcher: i
	}
}

function k0(e, t) {
	const n = {};
	for (const r of t) r in e && (n[r] = e[r]);
	return n
}

function S0(e) {
	return {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: void 0,
		beforeEnter: e.beforeEnter,
		props: T0(e),
		children: e.children || [],
		instances: {},
		leaveGuards: new Set,
		updateGuards: new Set,
		enterCallbacks: {},
		components: "components" in e ? e.components || {} : {
			default: e.component
		}
	}
}

function T0(e) {
	const t = {},
		n = e.props || !1;
	if ("component" in e) t.default = n;
	else
		for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
	return t
}

function ac(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent
	}
	return !1
}

function M0(e) {
	return e.reduce((t, n) => ke(t, n.meta), {})
}

function oc(e, t) {
	const n = {};
	for (const r in e) n[r] = r in t ? t[r] : e[r];
	return n
}

function r1(e, t) {
	return t.children.some(n => n === e || r1(e, n))
}
const i1 = /#/g,
	$0 = /&/g,
	I0 = /\//g,
	O0 = /=/g,
	U0 = /\?/g,
	a1 = /\+/g,
	R0 = /%5B/g,
	H0 = /%5D/g,
	o1 = /%5E/g,
	G0 = /%60/g,
	s1 = /%7B/g,
	B0 = /%7C/g,
	c1 = /%7D/g,
	F0 = /%20/g;

function Ro(e) {
	return encodeURI("" + e).replace(B0, "|").replace(R0, "[").replace(H0, "]")
}

function N0(e) {
	return Ro(e).replace(s1, "{").replace(c1, "}").replace(o1, "^")
}

function eo(e) {
	return Ro(e).replace(a1, "%2B").replace(F0, "+").replace(i1, "%23").replace($0, "%26").replace(G0, "`").replace(s1, "{").replace(c1, "}").replace(o1, "^")
}

function j0(e) {
	return eo(e).replace(O0, "%3D")
}

function D0(e) {
	return Ro(e).replace(i1, "%23").replace(U0, "%3F")
}

function V0(e) {
	return e == null ? "" : D0(e).replace(I0, "%2F")
}

function Li(e) {
	try {
		return decodeURIComponent("" + e)
	} catch {}
	return "" + e
}

function W0(e) {
	const t = {};
	if (e === "" || e === "?") return t;
	const r = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let i = 0; i < r.length; ++i) {
		const a = r[i].replace(a1, " "),
			o = a.indexOf("="),
			s = Li(o < 0 ? a : a.slice(0, o)),
			c = o < 0 ? null : Li(a.slice(o + 1));
		if (s in t) {
			let l = t[s];
			Array.isArray(l) || (l = t[s] = [l]), l.push(c)
		} else t[s] = c
	}
	return t
}

function sc(e) {
	let t = "";
	for (let n in e) {
		const r = e[n];
		if (n = j0(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue
		}(Array.isArray(r) ? r.map(a => a && eo(a)) : [r && eo(r)]).forEach(a => {
			a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a))
		})
	}
	return t
}

function q0(e) {
	const t = {};
	for (const n in e) {
		const r = e[n];
		r !== void 0 && (t[n] = Array.isArray(r) ? r.map(i => i == null ? null : "" + i) : r == null ? r : "" + r)
	}
	return t
}

function hr() {
	let e = [];

	function t(r) {
		return e.push(r), () => {
			const i = e.indexOf(r);
			i > -1 && e.splice(i, 1)
		}
	}

	function n() {
		e = []
	}
	return {
		add: t,
		list: () => e,
		reset: n
	}
}

function K0(e, t, n) {
	const r = () => {
		e[t].delete(n)
	};
	Ln(r), Pl(r), El(() => {
		e[t].add(n)
	}), e[t].add(n)
}

function Y0(e) {
	const t = Fe(Oo, {}).value;
	!t || K0(t, "leaveGuards", e)
}

function Wt(e, t, n, r, i) {
	const a = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((o, s) => {
		const c = d => {
				d === !1 ? s(Yn(4, {
					from: n,
					to: t
				})) : d instanceof Error ? s(d) : b0(d) ? s(Yn(2, {
					from: t,
					to: d
				})) : (a && r.enterCallbacks[i] === a && typeof d == "function" && a.push(d), o())
			},
			l = e.call(r && r.instances[i], t, n, c);
		let u = Promise.resolve(l);
		e.length < 3 && (u = u.then(c)), u.catch(d => s(d))
	})
}

function Aa(e, t, n, r) {
	const i = [];
	for (const a of e)
		for (const o in a.components) {
			let s = a.components[o];
			if (!(t !== "beforeRouteEnter" && !a.instances[o]))
				if (Z0(s)) {
					const l = (s.__vccOpts || s)[t];
					l && i.push(Wt(l, n, r, a, o))
				} else {
					let c = s();
					i.push(() => c.then(l => {
						if (!l) return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));
						const u = r0(l) ? l.default : l;
						a.components[o] = u;
						const f = (u.__vccOpts || u)[t];
						return f && Wt(f, n, r, a, o)()
					}))
				}
		}
	return i
}

function Z0(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function cc(e) {
	const t = Fe(Uo),
		n = Fe(Jl),
		r = Re(() => t.resolve(de(e.to))),
		i = Re(() => {
			const {
				matched: c
			} = r.value, {
				length: l
			} = c, u = c[l - 1], d = n.matched;
			if (!u || !d.length) return -1;
			const f = d.findIndex(Kn.bind(null, u));
			if (f > -1) return f;
			const b = lc(c[l - 2]);
			return l > 1 && lc(u) === b && d[d.length - 1].path !== b ? d.findIndex(Kn.bind(null, c[l - 2])) : f
		}),
		a = Re(() => i.value > -1 && ep(n.params, r.value.params)),
		o = Re(() => i.value > -1 && i.value === n.matched.length - 1 && e1(n.params, r.value.params));

	function s(c = {}) {
		return J0(c) ? t[de(e.replace) ? "replace" : "push"](de(e.to)).catch(Cr) : Promise.resolve()
	}
	return {
		route: r,
		href: Re(() => r.value.href),
		isActive: a,
		isExactActive: o,
		navigate: s
	}
}
const X0 = ar({
		name: "RouterLink",
		compatConfig: {
			MODE: 3
		},
		props: {
			to: {
				type: [String, Object],
				required: !0
			},
			replace: Boolean,
			activeClass: String,
			exactActiveClass: String,
			custom: Boolean,
			ariaCurrentValue: {
				type: String,
				default: "page"
			}
		},
		useLink: cc,
		setup(e, {
			slots: t
		}) {
			const n = sn(cc(e)),
				{
					options: r
				} = Fe(Uo),
				i = Re(() => ({
					[uc(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
					[uc(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
				}));
			return () => {
				const a = t.default && t.default(n);
				return e.custom ? a : Cn("a", {
					"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
					href: n.href,
					onClick: n.navigate,
					class: i.value
				}, a)
			}
		}
	}),
	Q0 = X0;

function J0(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			const t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return
		}
		return e.preventDefault && e.preventDefault(), !0
	}
}

function ep(e, t) {
	for (const n in t) {
		const r = t[n],
			i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1
		} else if (!Array.isArray(i) || i.length !== r.length || r.some((a, o) => a !== i[o])) return !1
	}
	return !0
}

function lc(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const uc = (e, t, n) => e != null ? e : t != null ? t : n,
	tp = ar({
		name: "RouterView",
		inheritAttrs: !1,
		props: {
			name: {
				type: String,
				default: "default"
			},
			route: Object
		},
		compatConfig: {
			MODE: 3
		},
		setup(e, {
			attrs: t,
			slots: n
		}) {
			const r = Fe(Ur),
				i = Re(() => e.route || r.value),
				a = Fe(Ei, 0),
				o = Re(() => i.value.matched[a]);
			Jt(Ei, a + 1), Jt(Oo, o), Jt(Ur, i);
			const s = ie();
			return _n(() => [s.value, o.value, e.name], ([c, l, u], [d, f, b]) => {
				l && (l.instances[u] = c, f && f !== l && c && c === d && (l.leaveGuards.size || (l.leaveGuards = f.leaveGuards), l.updateGuards.size || (l.updateGuards = f.updateGuards))), c && l && (!f || !Kn(l, f) || !d) && (l.enterCallbacks[u] || []).forEach(p => p(c))
			}, {
				flush: "post"
			}), () => {
				const c = i.value,
					l = o.value,
					u = l && l.components[e.name],
					d = e.name;
				if (!u) return fc(n.default, {
					Component: u,
					route: c
				});
				const f = l.props[e.name],
					b = f ? f === !0 ? c.params : typeof f == "function" ? f(c) : f : null,
					h = Cn(u, ke({}, b, t, {
						onVnodeUnmounted: m => {
							m.component.isUnmounted && (l.instances[d] = null)
						},
						ref: s
					}));
				return fc(n.default, {
					Component: h,
					route: c
				}) || h
			}
		}
	});

function fc(e, t) {
	if (!e) return null;
	const n = e(t);
	return n.length === 1 ? n[0] : n
}
const np = tp;

function rp(e) {
	const t = L0(e.routes, e),
		n = e.parseQuery || W0,
		r = e.stringifyQuery || sc,
		i = e.history,
		a = hr(),
		o = hr(),
		s = hr(),
		c = Cf(Ft);
	let l = Ft;
	Un && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	const u = ya.bind(null, H => "" + H),
		d = ya.bind(null, V0),
		f = ya.bind(null, Li);

	function b(H, Z) {
		let Y, Q;
		return t1(H) ? (Y = t.getRecordMatcher(H), Q = Z) : Q = H, t.addRoute(Q, Y)
	}

	function p(H) {
		const Z = t.getRecordMatcher(H);
		Z && t.removeRoute(Z)
	}

	function h() {
		return t.getRoutes().map(H => H.record)
	}

	function m(H) {
		return !!t.getRecordMatcher(H)
	}

	function _(H, Z) {
		if (Z = ke({}, Z || c.value), typeof H == "string") {
			const pe = xa(n, H, Z.path),
				y = t.resolve({
					path: pe.path
				}, Z),
				P = i.createHref(pe.fullPath);
			return ke(pe, y, {
				params: f(y.params),
				hash: Li(pe.hash),
				redirectedFrom: void 0,
				href: P
			})
		}
		let Y;
		if ("path" in H) Y = ke({}, H, {
			path: xa(n, H.path, Z.path).path
		});
		else {
			const pe = ke({}, H.params);
			for (const y in pe) pe[y] == null && delete pe[y];
			Y = ke({}, H, {
				params: d(H.params)
			}), Z.params = d(Z.params)
		}
		const Q = t.resolve(Y, Z),
			se = H.hash || "";
		Q.params = u(f(Q.params));
		const oe = o0(r, ke({}, H, {
				hash: N0(se),
				path: Q.path
			})),
			re = i.createHref(oe);
		return ke({
			fullPath: oe,
			hash: se,
			query: r === sc ? q0(H.query) : H.query || {}
		}, Q, {
			redirectedFrom: void 0,
			href: re
		})
	}

	function v(H) {
		return typeof H == "string" ? xa(n, H, c.value.path) : ke({}, H)
	}

	function g(H, Z) {
		if (l !== H) return Yn(8, {
			from: Z,
			to: H
		})
	}

	function w(H) {
		return U(H)
	}

	function k(H) {
		return w(ke(v(H), {
			replace: !0
		}))
	}

	function S(H) {
		const Z = H.matched[H.matched.length - 1];
		if (Z && Z.redirect) {
			const {
				redirect: Y
			} = Z;
			let Q = typeof Y == "function" ? Y(H) : Y;
			return typeof Q == "string" && (Q = Q.includes("?") || Q.includes("#") ? Q = v(Q) : {
				path: Q
			}, Q.params = {}), ke({
				query: H.query,
				hash: H.hash,
				params: H.params
			}, Q)
		}
	}

	function U(H, Z) {
		const Y = l = _(H),
			Q = c.value,
			se = H.state,
			oe = H.force,
			re = H.replace === !0,
			pe = S(Y);
		if (pe) return U(ke(v(pe), {
			state: se,
			force: oe,
			replace: re
		}), Z || Y);
		const y = Y;
		y.redirectedFrom = Z;
		let P;
		return !oe && s0(r, Q, Y) && (P = Yn(16, {
			to: y,
			from: Q
		}), F(Q, Q, !0, !1)), (P ? Promise.resolve(P) : A(y, Q)).catch(G => Nt(G) ? Nt(G, 2) ? G : ne(G) : j(G, y, Q)).then(G => {
			if (G) {
				if (Nt(G, 2)) return U(ke(v(G.to), {
					state: se,
					force: oe,
					replace: re
				}), Z || y)
			} else G = z(y, Q, !0, re, se);
			return x(y, Q, G), G
		})
	}

	function M(H, Z) {
		const Y = g(H, Z);
		return Y ? Promise.reject(Y) : Promise.resolve()
	}

	function A(H, Z) {
		let Y;
		const [Q, se, oe] = ip(H, Z);
		Y = Aa(Q.reverse(), "beforeRouteLeave", H, Z);
		for (const pe of Q) pe.leaveGuards.forEach(y => {
			Y.push(Wt(y, H, Z))
		});
		const re = M.bind(null, H, Z);
		return Y.push(re), Mn(Y).then(() => {
			Y = [];
			for (const pe of a.list()) Y.push(Wt(pe, H, Z));
			return Y.push(re), Mn(Y)
		}).then(() => {
			Y = Aa(se, "beforeRouteUpdate", H, Z);
			for (const pe of se) pe.updateGuards.forEach(y => {
				Y.push(Wt(y, H, Z))
			});
			return Y.push(re), Mn(Y)
		}).then(() => {
			Y = [];
			for (const pe of H.matched)
				if (pe.beforeEnter && !Z.matched.includes(pe))
					if (Array.isArray(pe.beforeEnter))
						for (const y of pe.beforeEnter) Y.push(Wt(y, H, Z));
					else Y.push(Wt(pe.beforeEnter, H, Z));
			return Y.push(re), Mn(Y)
		}).then(() => (H.matched.forEach(pe => pe.enterCallbacks = {}), Y = Aa(oe, "beforeRouteEnter", H, Z), Y.push(re), Mn(Y))).then(() => {
			Y = [];
			for (const pe of o.list()) Y.push(Wt(pe, H, Z));
			return Y.push(re), Mn(Y)
		}).catch(pe => Nt(pe, 8) ? pe : Promise.reject(pe))
	}

	function x(H, Z, Y) {
		for (const Q of s.list()) Q(H, Z, Y)
	}

	function z(H, Z, Y, Q, se) {
		const oe = g(H, Z);
		if (oe) return oe;
		const re = Z === Ft,
			pe = Un ? history.state : {};
		Y && (Q || re ? i.replace(H.fullPath, ke({
			scroll: re && pe && pe.scroll
		}, se)) : i.push(H.fullPath, se)), c.value = H, F(H, Z, Y, re), ne()
	}
	let C;

	function L() {
		C || (C = i.listen((H, Z, Y) => {
			const Q = _(H),
				se = S(Q);
			if (se) {
				U(ke(se, {
					replace: !0
				}), Q).catch(Cr);
				return
			}
			l = Q;
			const oe = c.value;
			Un && g0(tc(oe.fullPath, Y.delta), h0()), A(Q, oe).catch(re => Nt(re, 12) ? re : Nt(re, 2) ? (U(re.to, Q).then(pe => {
				Nt(pe, 20) && !Y.delta && Y.type === Rr.pop && i.go(-1, !1)
			}).catch(Cr), Promise.reject()) : (Y.delta && i.go(-Y.delta, !1), j(re, Q, oe))).then(re => {
				re = re || z(Q, oe, !1), re && (Y.delta ? i.go(-Y.delta, !1) : Y.type === Rr.pop && Nt(re, 20) && i.go(-1, !1)), x(Q, oe, re)
			}).catch(Cr)
		}))
	}
	let I = hr(),
		N = hr(),
		$;

	function j(H, Z, Y) {
		ne(H);
		const Q = N.list();
		return Q.length ? Q.forEach(se => se(H, Z, Y)) : console.error(H), Promise.reject(H)
	}

	function q() {
		return $ && c.value !== Ft ? Promise.resolve() : new Promise((H, Z) => {
			I.add([H, Z])
		})
	}

	function ne(H) {
		return $ || ($ = !H, L(), I.list().forEach(([Z, Y]) => H ? Y(H) : Z()), I.reset()), H
	}

	function F(H, Z, Y, Q) {
		const {
			scrollBehavior: se
		} = e;
		if (!Un || !se) return Promise.resolve();
		const oe = !Y && m0(tc(H.fullPath, 0)) || (Q || !Y) && history.state && history.state.scroll || null;
		return vl().then(() => se(H, Z, oe)).then(re => re && v0(re)).catch(re => j(re, H, Z))
	}
	const T = H => i.go(H);
	let E;
	const R = new Set;
	return {
		currentRoute: c,
		addRoute: b,
		removeRoute: p,
		hasRoute: m,
		getRoutes: h,
		resolve: _,
		options: e,
		push: w,
		replace: k,
		go: T,
		back: () => T(-1),
		forward: () => T(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: N.add,
		isReady: q,
		install(H) {
			const Z = this;
			H.component("RouterLink", Q0), H.component("RouterView", np), H.config.globalProperties.$router = Z, Object.defineProperty(H.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => de(c)
			}), Un && !E && c.value === Ft && (E = !0, w(i.location).catch(se => {}));
			const Y = {};
			for (const se in Ft) Y[se] = Re(() => c.value[se]);
			H.provide(Uo, Z), H.provide(Jl, sn(Y)), H.provide(Ur, c);
			const Q = H.unmount;
			R.add(H), H.unmount = function() {
				R.delete(H), R.size < 1 && (l = Ft, C && C(), C = null, c.value = Ft, E = !1, $ = !1), Q()
			}
		}
	}
}

function Mn(e) {
	return e.reduce((t, n) => t.then(() => n()), Promise.resolve())
}

function ip(e, t) {
	const n = [],
		r = [],
		i = [],
		a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		const s = t.matched[o];
		s && (e.matched.find(l => Kn(l, s)) ? r.push(s) : n.push(s));
		const c = e.matched[o];
		c && (t.matched.find(l => Kn(l, c)) || i.push(c))
	}
	return [n, r, i]
}

function ap(e) {
	const t = [],
		n = [],
		r = e.mount.bind(e);
	e.mount = o.bind(e), e.onBeforeMount = i, e.onAfterMount = a;

	function i(s, c) {
		c ? t.unshift(s) : t.push(s)
	}

	function a(s, c) {
		c ? n.unshift(s) : n.push(s)
	}
	async function o(s, c) {
		for (const l of t) await l(e);
		r(s, c);
		for (const l of n) await l(e);
		n.length = t.length = 0
	}
}
const op = typeof window != "undefined";
let $n = null,
	zr = {};

function k9(e) {
	return $n = t0(e), ap($n), zr = $n.config.globalProperties, $n.provide("appProps", zr), $n.provide("plugins", zr), $n
}

function S9() {
	return zr
}

function T9(e) {
	if (!op) e();
	else if (!window.isOldBrowser) {
		const t = document;
		t.readyState[0] === "l" ? t.addEventListener("DOMContentLoaded", e) : e()
	}
}
const D = new Proxy({}, {
		get: (e, t) => zr[t]
	}),
	Hr = {
		linear: [.25, .25, .75, .75],
		inSine: [.47, 0, .745, .715],
		outSine: [.39, .575, .565, 1],
		inOutSine: [.445, .05, .55, .95],
		inQuad: [.55, .085, .68, .53],
		outQuad: [.25, .46, .45, .94],
		inOutQuad: [.455, .03, .515, .955],
		inCubic: [.55, .055, .675, .19],
		outCubic: [.215, .61, .355, 1],
		inOutCubic: [.645, .045, .355, 1],
		inQuart: [.895, .03, .685, .22],
		outQuart: [.165, .84, .44, 1],
		inOutQuart: [.77, 0, .175, 1],
		inQuint: [.755, .05, .855, .06],
		outQuint: [.23, 1, .32, 1],
		inOutQuint: [.86, 0, .07, 1],
		inExpo: [.95, .05, .795, .035],
		outExpo: [.19, 1, .22, 1],
		inOutExpo: [1, 0, 0, 1],
		inCirc: [.6, .04, .98, .335],
		outCirc: [.075, .82, .165, 1],
		inOutCirc: [.785, .135, .15, .86],
		outSwift: [.55, 0, .1, 1],
		snap2: [0, .975, 0, 1],
		bounce: [.18, .89, .34, 1.76],
		bounce2: [.865, -.005, 0, 1.47],
		bounce3: [.865, -.005, 0, 1.64],
		bounce4: [0, 1.49, .105, .94],
		hardBounce: [.07, 1.525, .36, .935],
		longKeyframe: [.49, .05, .32, 1.04],
		elastic: [0, .49, .205, 1]
	};
var nt = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function sp(e) {
	throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var cp = 4,
	lp = .001,
	up = 1e-7,
	fp = 10,
	br = 11,
	ni = 1 / (br - 1),
	dp = typeof Float32Array == "function";

function l1(e, t) {
	return 1 - 3 * t + 3 * e
}

function u1(e, t) {
	return 3 * t - 6 * e
}

function f1(e) {
	return 3 * e
}

function ki(e, t, n) {
	return ((l1(t, n) * e + u1(t, n)) * e + f1(t)) * e
}

function d1(e, t, n) {
	return 3 * l1(t, n) * e * e + 2 * u1(t, n) * e + f1(t)
}

function pp(e, t, n, r, i) {
	var a, o, s = 0;
	do o = t + (n - t) / 2, a = ki(o, r, i) - e, a > 0 ? n = o : t = o; while (Math.abs(a) > up && ++s < fp);
	return o
}

function hp(e, t, n, r) {
	for (var i = 0; i < cp; ++i) {
		var a = d1(t, n, r);
		if (a === 0) return t;
		var o = ki(t, n, r) - e;
		t -= o / a
	}
	return t
}

function vp(e) {
	return e
}
var gp = function(t, n, r, i) {
	if (!(0 <= t && t <= 1 && 0 <= r && r <= 1)) throw new Error("bezier x values must be in [0, 1] range");
	if (t === n && r === i) return vp;
	for (var a = dp ? new Float32Array(br) : new Array(br), o = 0; o < br; ++o) a[o] = ki(o * ni, t, r);

	function s(c) {
		for (var l = 0, u = 1, d = br - 1; u !== d && a[u] <= c; ++u) l += ni;
		--u;
		var f = (c - a[u]) / (a[u + 1] - a[u]),
			b = l + f * ni,
			p = d1(b, t, r);
		return p >= lp ? hp(c, b, t, r) : p === 0 ? b : pp(c, l, l + ni, t, r)
	}
	return function(l) {
		return l === 0 ? 0 : l === 1 ? 1 : ki(s(l), n, i)
	}
};
const mp = e => new gp(e[0], e[1], e[2], e[3]);
let bp = 0;
const p1 = () => ++bp,
	Ca = (e, t) => e !== void 0 ? e : t,
	_p = new Set(["opacity", "transform"]),
	yp = new Set(["target", "ease", "duration", "delay", "willChange"]),
	Kt = new Map,
	li = [],
	ui = [],
	fi = [];
let to = !1;

function dc() {
	let e, t;
	for (e = 0, t = li.length; e < t; e++) li[e]();
	for (e = 0, t = ui.length; e < t; e++) ui[e]();
	for (e = 0, t = fi.length; e < t; e++) fi[e]();
	li.length = 0, ui.length = 0, fi.length = 0, to = !1
}
const xp = typeof window.queueMicrotask == "function" ? () => queueMicrotask(dc) : () => Promise.resolve().then(dc);

function wp() {
	to || (to = !0, xp())
}
const h1 = function(e, t, n) {
	e && li.push(e), t && ui.push(t), n && fi.push(n), wp()
};

function Ap(e, t = 1e3, n = "linear", r = 0) {
	Hr[n] && (n = Hr[n]);
	const i = Array.isArray(n) ? `cubic-bezier(${n.join(",")})` : n;
	return `${e} ${t}ms ${i} ${r}ms`
}

function lt(e = {}) {
	let t = e.complete;
	const n = !!e.instant,
		r = !!e.willChange;
	let i = e.target;
	e.selector && (i = i.querySelector(e.selector));
	const a = {
		easing: e.ease || e.easing || "linear",
		duration: e.duration || 1e3,
		delay: e.delay || 0
	};
	i.dataset.csstween || (i.dataset.csstween = p1());
	const o = i.dataset.csstween;
	let s = null,
		c = new Promise(M => s = M);
	e.queue && e.queue.push(c);
	const l = {
			destroy: U,
			stop: U,
			finished: c
		},
		u = new Set;
	let d = null,
		f = !1;
	const b = [],
		p = [],
		h = {},
		m = {};
	let _ = 0;
	for (const M in e) {
		if (yp.has(M)) continue;
		if (i.style[M] === void 0) continue;
		const A = e[M];
		if (A == null) continue;
		const x = typeof A == "object" && !Array.isArray(A) ? A : {
				value: A
			},
			z = Ca(x.duration, a.duration),
			C = Ca(x.delay, a.delay),
			L = Ca(x.easing, a.easing);
		p.push(Ap(M, z, L, C)), _ = Math.max(_, z + C);
		const I = Array.isArray(x.value) ? x.value : [null, x.value];
		(n || C <= 0 && (!z || z <= 0)) && (I[0] = I[1], I[1] = null), I[0] !== null && (h[M] = I[0]), I[1] !== null && (m[M] = I[1]), _p.has(M) && b.push(M)
	}
	return h1(v, g, w), l;

	function v() {
		if (!f && (Kt.has(o) && Kt.get(o).destroy(), Kt.set(o, l), i.style.animation = "", r && b.length > 0 && (i.style.willChange = b.join(", ")), Object.keys(h).length > 0))
			for (const M in h) i.style[M] = h[M]
	}

	function g() {
		f || i.getBoundingClientRect()
	}

	function w() {
		if (!f)
			if (Object.keys(m).length > 0) {
				i.style.transition = p.join(", ");
				for (const M in m) i.style[M] = m[M], u.add(M);
				i.addEventListener("transitionend", S), i.addEventListener("webkitTransitionEnd", S), d = window.setTimeout(k, _ * 1.1 + 200)
			} else k()
	}

	function k() {
		f || (window.clearTimeout(d), t && t(), s(), U())
	}

	function S(M) {
		i.style.willChange = "", u.delete(M.propertyName), u.size < 1 && k()
	}

	function U() {
		f || (window.clearTimeout(d), d = null, i.style.transition = "", i.style.animation = "", i.removeEventListener("transitionend", S), i.removeEventListener("webkitTransitionEnd", S), Kt.delete(o), u.clear(), i = null, c = null, t = null, s = null, f = !0)
	}
}

function Cp(e) {
	return e || (e = "linear"), Hr[e] && (e = Hr[e]), Array.isArray(e) ? `cubic-bezier(${e.join(",")})` : e
}

function Si(e = {}) {
	let t = e.complete,
		n = e.start,
		r = e.target;
	e.selector && (r = r.querySelector(e.selector));
	const i = Cp(e.ease || e.easing),
		a = !!e.instant,
		o = !!e.willChange,
		s = e.delay || 0,
		c = a ? "0ms" : e.duration || 1e3,
		l = e.fillMode || "forwards",
		u = e.direction || "normal",
		d = e.animation || e.name || "pop",
		f = c + s,
		b = [d, c + "ms", i, s > 0 ? s + "ms" : null, 1, u, l].filter(z => z !== null).join(" ");
	r.dataset.csstween || (r.dataset.csstween = p1());
	const p = r.dataset.csstween;
	let h = null,
		m = new Promise(z => h = z);
	e.queue && e.queue.push(m);
	const _ = {
		destroy: x,
		stop: x,
		finished: m
	};
	let v = null,
		g = !1;
	return h1(w, k, S), _;

	function w() {
		g || (Kt.has(p) && Kt.get(p).destroy(), Kt.set(p, _), r.style.animation = "")
	}

	function k() {
		g || !r || r.getBoundingClientRect()
	}

	function S() {
		g || !r || (r.addEventListener("animationstart", M), r.addEventListener("webkitAnimationStart", M), r.addEventListener("animationend", A), r.addEventListener("webkitAnimationEnd", A), o && (r.style.willChange = "transform, opacity"), r.style.animation = b, v = window.setTimeout(U, f * 1.1 + 200))
	}

	function U() {
		g || (window.clearTimeout(v), h && h(), t && t(r), x())
	}

	function M(z) {
		n && n(r, z), n = null, r.removeEventListener("animationstart", M), r.removeEventListener("webkitAnimationStart", M)
	}

	function A() {
		r.style.willChange = "", U()
	}

	function x() {
		g || (window.clearTimeout(v), v = null, r.removeEventListener("animationend", A), r.removeEventListener("webkitAnimationEnd", A), r.removeEventListener("animationstart", M), r.removeEventListener("webkitAnimationStart", M), Kt.delete(p), r = null, m = null, t = null, n = null, h = null, g = !0)
	}
}

function vt(e) {
	e === void 0 && (e = {}), this.initial = e.initial || 0, this.value = this.initial, this.previous = this.initial, this.velocity = 0, this.onStart = e.onStart, this.onStop = e.onStop, this.precisionStop = e.precisionStop || 1e-4, this.perfectStop = !!e.perfectStop, this.setValue(this.initial), this.setTarget(this.initial), this.setMass(e.mass || 1), this.setTension(e.tension || .1), this.setFriction(e.friction || .2), this.setStep(e.step || 10)
}
vt.prototype.setValue = function(t) {
	this.value = t, Math.abs(this.target - this.value) > this.precisionStop ? this.start() : this.stop()
};
vt.prototype.setTarget = function(t) {
	this.target = t, Math.abs(this.target - this.value) > this.precisionStop ? this.start() : this.stop()
};
vt.prototype.setTension = function(t) {
	this._K = t
};
vt.prototype.setFriction = function(t) {
	this._D = t, this._dampingAdjuster = Math.pow(1 - this._D, this._stepAdjuster)
};
vt.prototype.setMass = function(t) {
	this.mass = t, this._inverseMass = 1 / this.mass
};
vt.prototype.setStep = function(t) {
	this._step = t, this._stepAdjuster = this._step / 16.67, this.setFriction(this._D)
};
vt.prototype.start = function() {
	this.stopped = !1, this.onStart && this.onStart()
};
vt.prototype.stop = function() {
	this.stopped || (this.perfectStop && Math.abs(this.target - this.value) <= this.precisionStop && (this.value = this.target), this.acceleration = 0, this.velocity = 0, this._accumulator = 0, this._prevStepVel = 0, this._prevStepValue = this.value, this._adjusted = !1, this.stopped = !0, this.onStop && this.onStop())
};
vt.prototype.update = function(t) {
	if (!this.stopped) {
		for (this._accumulator += t, this.previous = this.value, this._adjusted && (this._adjusted = !1, this.velocity = this._prevStepVel, this.value = this._prevStepValue), t < this._step && (this._adjusted = !0, this._accumulator += this._step); this._accumulator >= this._step;) this.acceleration = -this._K * (this.value - this.target) * this._inverseMass, this._prevStepVel = this.velocity, this.velocity = (this.velocity + this.acceleration * this._stepAdjuster) * this._dampingAdjuster, this._prevStepValue = this.value, this.value = this.value + this.velocity * this._stepAdjuster, this._accumulator -= this._step;
		if (this._adjusted) {
			const n = this._accumulator / this._step;
			this.value = this.value * n + this._prevStepValue * (1 - n)
		}
		Math.abs(this.target - this.value) <= this.precisionStop && this.stop()
	}
};
vt.prototype.dispose = function() {
	this.stop(), this.onStart = null, this.onStop = null
};

function M9(e) {
	return new vt(e)
}

function v1() {
	let e, t;
	const n = new Promise((r, i) => {
		e = r, t = i
	});
	return n.resolve = e, n.reject = t, n
}

function tt(e) {
	return new Promise(t => setTimeout(t, e))
}

function zp(e, t = 1, n = {}, r) {
	const i = n.bind || null,
		a = n.trail != null ? !!n.trail : !0,
		o = n.tail != null ? !!n.tail : !0;
	let s, c, l, u = null,
		d = a,
		f = !1;

	function b() {
		u = null, a && !f && (d = !0), e.call(i, s, c, l), r && f && o && (f = !1, u = setTimeout(b, t))
	}
	return function(p, h, m) {
		r || (clearTimeout(u), u = null), s = p, c = h, l = m, a && d && (d = !1, e.call(i, s, c, l)), u === null ? u = setTimeout(b, t) : r && (f = !0)
	}
}
var Oe = (e, t) => {
	const n = e.__vccOpts || e;
	for (const [r, i] of t) n[r] = i;
	return n
};
const Ep = {
		class: "title-wrapper"
	},
	Pp = {
		class: "text out"
	},
	Lp = Mo('<span class="front" data-v-7190abc7>I\xA0WANT</span><svg class="back back-iwant" width="499" height="111" viewBox="0 0 499 111" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7190abc7><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5743 0.808838V110.044H0.709717V0.808838H16.5743ZM205.075 0.808838L183.073 105.164L183.064 105.195C182.694 106.552 181.952 107.717 180.87 108.679L180.843 108.703L180.814 108.725C179.648 109.632 178.203 110.044 176.567 110.044H161.057C159.501 110.044 158.087 109.621 156.854 108.758L156.801 108.722L156.753 108.679C155.637 107.687 154.946 106.432 154.694 104.954L137.946 24.4685C137.533 22.404 137.12 20.3913 136.707 18.4306L136.705 18.4196C136.354 16.6626 136.002 14.9431 135.651 13.2613H134.193C133.844 14.9347 133.494 16.6454 133.144 18.3932C132.832 20.4715 132.468 22.4994 132.052 24.4768L132.051 24.4795L115.452 104.995L115.446 105.017C115.075 106.502 114.263 107.743 113.047 108.716L113.041 108.721L113.035 108.725C111.883 109.621 110.497 110.044 108.943 110.044H93.2776C91.7217 110.044 90.3075 109.621 89.0749 108.758L89.0223 108.722L88.9742 108.679C87.8779 107.704 87.1741 106.511 86.917 105.118L64.9242 0.808838H81.6219L98.5494 85.1329L98.5506 85.1384C98.9697 87.1298 99.3353 89.273 99.6482 91.5671C99.9165 93.4447 100.224 95.4013 100.57 97.4369H102.273C102.634 95.3842 102.995 93.4095 103.357 91.513C103.771 89.3384 104.185 87.2153 104.599 85.1438L104.601 85.1332L121.191 6.21531C121.438 4.65487 122.117 3.33763 123.252 2.32949L123.273 2.31038L123.296 2.29242C124.529 1.30549 125.963 0.808838 127.555 0.808838H142.445C144.037 0.808838 145.443 1.30703 146.593 2.32949C147.714 3.32576 148.442 4.62269 148.798 6.16553L148.8 6.17611L165.394 85.1156C165.395 85.1187 165.396 85.1218 165.396 85.1248C165.917 87.4151 166.334 89.6562 166.648 91.8482C167.002 93.7106 167.281 95.5735 167.485 97.4369H169.402L170.196 91.8808L170.196 91.8774C170.509 89.5831 170.875 87.3902 171.293 85.299L171.293 85.2966L188.379 0.808838H205.075ZM171.293 92.0305L170.363 98.5447H166.485C166.279 96.3733 165.968 94.2019 165.555 92.0305C165.244 89.8591 164.831 87.6359 164.314 85.3611L147.718 6.41464C147.408 5.07043 146.787 3.98472 145.857 3.15751C144.926 2.33031 143.789 1.9167 142.445 1.9167H127.555C126.211 1.9167 125.022 2.33031 123.988 3.15751C123.057 3.98472 122.488 5.07043 122.281 6.41464L105.686 85.3611C105.272 87.4291 104.858 89.5489 104.445 91.7203C104.031 93.8917 103.618 96.1665 103.204 98.5447H99.6367C99.2231 96.1665 98.8612 93.8917 98.551 91.7203C98.2408 89.4454 97.8789 87.3257 97.4653 85.3611L80.7144 1.9167H66.29L88.0041 104.904C88.2109 106.041 88.7796 107.024 89.7102 107.851C90.7442 108.575 91.9334 108.936 93.2776 108.936H108.943C110.287 108.936 111.424 108.575 112.355 107.851C113.389 107.024 114.061 105.99 114.371 104.749L130.967 24.2513C131.381 22.2867 131.743 20.2703 132.053 18.2023C132.466 16.1343 132.88 14.118 133.294 12.1534H136.551C136.964 14.118 137.378 16.1343 137.792 18.2023C138.205 20.1669 138.619 22.1833 139.032 24.2513L155.783 104.749C155.99 105.99 156.559 107.024 157.489 107.851C158.523 108.575 159.713 108.936 161.057 108.936H176.567C178.014 108.936 179.204 108.575 180.134 107.851C181.065 107.024 181.685 106.041 181.995 104.904L203.71 1.9167H189.285L172.379 85.5162C171.966 87.5842 171.604 89.7557 171.293 92.0305ZM241.055 5.63914C241.365 4.50173 241.986 3.62282 242.916 3.00241C243.847 2.27861 244.933 1.9167 246.173 1.9167H260.443C261.683 1.9167 262.769 2.27861 263.7 3.00241C264.63 3.62282 265.251 4.50173 265.561 5.63914L299.993 108.936H285.879L275.284 75.4346H231.332L220.737 108.936H206.623L241.055 5.63914ZM258.116 21.1492C257.703 19.7016 257.237 18.254 256.72 16.8064C256.307 15.2554 255.893 13.8078 255.479 12.4636H251.137C250.723 13.8078 250.309 15.2554 249.896 16.8064C249.482 18.254 249.017 19.7016 248.5 21.1492L235.06 63.647H271.556L258.116 21.1492ZM270.044 62.5391L257.055 21.4685L257.051 21.4536C256.644 20.0294 256.186 18.6046 255.677 17.179L255.662 17.136L255.65 17.0919C255.319 15.8499 254.988 14.6765 254.658 13.5714H251.958C251.628 14.6765 251.297 15.8499 250.966 17.0919L250.964 17.1013L250.961 17.1108C250.543 18.5755 250.072 20.0395 249.55 21.5028L236.572 62.5391H270.044ZM232.143 76.5425L221.548 110.044H205.085L239.995 5.31652C240.371 3.964 241.13 2.87349 242.268 2.10326C243.397 1.23644 244.714 0.808838 246.173 0.808838H260.443C261.902 0.808838 263.219 1.23648 264.348 2.10336C265.487 2.87363 266.246 3.9642 266.621 5.31678L301.531 110.044H285.068L274.473 76.5425H232.143ZM398.516 0.808838V103.508C398.516 105.48 398.037 107.165 396.884 108.351C395.726 109.544 394.071 110.044 392.134 110.044H378.796C377.076 110.044 375.572 109.642 374.393 108.725C373.278 107.858 372.407 106.605 371.737 105.051L335.608 29.2258L335.603 29.2148L335.598 29.2038C334.672 27.146 333.59 24.8279 332.352 22.2491C331.24 19.9322 330.366 17.7628 329.734 15.7429H329.286C329.443 17.6493 329.564 19.5905 329.65 21.5664C329.754 23.9607 329.806 26.3549 329.806 28.7492V110.044H313.941V7.34525C313.941 5.36496 314.437 3.67626 315.623 2.49046C316.809 1.30466 318.497 0.808838 320.478 0.808838H333.351C335.071 0.808838 336.575 1.21112 337.754 2.12792C338.869 2.99542 339.741 4.24856 340.41 5.8038L375.445 79.7486C376.589 81.9345 377.782 84.4238 379.022 87.2144C380.26 89.6905 381.411 92.1674 382.475 94.645H383.23C383.14 92.2499 383.051 89.8933 382.962 87.5751C382.858 84.8725 382.806 82.1699 382.806 79.4673V0.808838H398.516ZM384.338 94.645C384.352 95.0134 384.366 95.3827 384.379 95.7529H381.743C380.605 93.0645 379.364 90.3761 378.02 87.6876C376.779 84.8958 375.59 82.4142 374.453 80.2428L339.4 6.25953C338.78 4.81192 338.004 3.72622 337.074 3.00241C336.143 2.27861 334.902 1.9167 333.351 1.9167H320.478C316.859 1.9167 315.049 3.72622 315.049 7.34525V108.936H328.698V28.7492C328.698 26.371 328.646 23.9928 328.543 21.6146C328.456 19.621 328.333 17.6638 328.174 15.7429C328.143 15.3722 328.111 15.0029 328.078 14.635H330.559C331.18 16.8064 332.11 19.1846 333.351 21.7697C334.592 24.3547 335.678 26.6812 336.608 28.7492L372.747 104.594C373.367 106.041 374.143 107.127 375.073 107.851C376.004 108.575 377.245 108.936 378.796 108.936H392.134C395.65 108.936 397.408 107.127 397.408 103.508V1.9167H383.914V79.4673C383.914 82.1557 383.966 84.8441 384.069 87.5325C384.159 89.8645 384.249 92.2353 384.338 94.645ZM414.636 1.9167V14.0146H449.069V108.936H462.718V14.0146H497.305V1.9167H414.636ZM463.825 15.1225V110.044H447.961V15.1225H413.528V0.808838H498.413V15.1225H463.825ZM15.4665 1.9167H1.81758V108.936H15.4665V1.9167Z" fill="url(#gradient-want)" data-v-7190abc7></path><defs data-v-7190abc7><linearGradient id="gradient-want" x1="-117.715" y1="-207.157" x2="565.865" y2="205.138" gradientUnits="userSpaceOnUse" data-v-7190abc7><stop stop-color="#FA00FF" data-v-7190abc7></stop><stop offset="1" stop-color="#51AFFF" data-v-7190abc7></stop></linearGradient></defs></svg>', 2),
	kp = [Lp],
	Sp = Mo('<span class="front" data-v-7190abc7>ALL</span><svg class="back back-all" width="254" height="111" viewBox="0 0 254 111" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7190abc7><path fill-rule="evenodd" clip-rule="evenodd" d="M36.3067 5.82371C36.6169 4.6863 37.2373 3.80739 38.1679 3.18699C39.0985 2.46318 40.1842 2.10127 41.425 2.10127H55.6943C56.9351 2.10127 58.0209 2.46318 58.9515 3.18699C59.8821 3.80739 60.5025 4.6863 60.8127 5.82371L95.2451 109.121H81.1309L70.5358 75.6192H26.5835L15.9884 109.121H1.87424L36.3067 5.82371ZM53.3678 21.3338C52.9542 19.8862 52.4889 18.4386 51.9719 16.991C51.5583 15.44 51.1447 13.9924 50.7311 12.6482H46.3883C45.9747 13.9924 45.5611 15.44 45.1475 16.991C44.7339 18.4386 44.2686 19.8862 43.7515 21.3338L30.3115 63.8315H66.8079L53.3678 21.3338ZM65.2956 62.7237L52.3068 21.6531L52.3026 21.6382C51.8957 20.214 51.4377 18.7892 50.9286 17.3636L50.9132 17.3206L50.9014 17.2764C50.5703 16.0345 50.2395 14.8611 49.9093 13.756H47.21C46.8798 14.8611 46.5491 16.0345 46.2179 17.2764L46.2154 17.2859L46.2127 17.2953C45.7942 18.76 45.3239 20.224 44.8017 21.6872L31.8238 62.7237H65.2956ZM27.3951 76.7271L16.8 110.229H0.337158L35.2464 5.50129C35.6222 4.1487 36.3812 3.05812 37.5196 2.28785C38.6483 1.42102 39.9655 0.993408 41.425 0.993408H55.6943C57.1539 0.993408 58.4711 1.42104 59.5998 2.28789C60.7382 3.05813 61.4972 4.14867 61.873 5.50121L96.7822 110.229H80.3193L69.7242 76.7271H27.3951ZM124.592 0.993408V87.4069C124.592 90.7648 125.383 93.0033 126.738 94.3667C128.213 95.748 130.524 96.5357 133.876 96.5357H173.541L174.287 109.212L173.202 109.295C166.457 109.814 159.558 110.125 152.505 110.229C145.572 110.332 138.638 110.384 131.705 110.384C123.702 110.384 117.729 108.439 114.116 104.262C110.608 100.206 108.883 95.1287 108.883 89.113V0.993408H124.592ZM152.488 109.121C159.52 109.018 166.396 108.707 173.117 108.19L172.496 97.6436H133.876C130.361 97.6436 127.724 96.8164 125.966 95.162C124.312 93.5075 123.484 90.9225 123.484 87.4069V2.10127H109.991V89.113C109.991 94.9035 111.645 99.7116 114.954 103.537C118.263 107.363 123.846 109.276 131.705 109.276C138.633 109.276 145.561 109.224 152.488 109.121ZM204.263 0.993408V87.4069C204.263 90.7649 205.054 93.0034 206.409 94.3668C207.885 95.748 210.196 96.5357 213.547 96.5357H253.212L253.958 109.212L252.873 109.295C246.128 109.814 239.229 110.125 232.176 110.229C225.243 110.332 218.309 110.384 211.376 110.384C203.373 110.384 197.4 108.439 193.787 104.262C190.279 100.206 188.554 95.1287 188.554 89.113V0.993408H204.263ZM232.159 109.121C239.191 109.018 246.067 108.707 252.788 108.19L252.167 97.6436H213.547C210.032 97.6436 207.395 96.8164 205.637 95.162C203.983 93.5075 203.156 90.9225 203.156 87.4069V2.10127H189.662V89.113C189.662 94.9035 191.316 99.7116 194.625 103.537C197.934 107.363 203.517 109.276 211.376 109.276C218.304 109.276 225.232 109.224 232.159 109.121Z" fill="url(#gradient-all)" data-v-7190abc7></path><defs data-v-7190abc7><linearGradient id="gradient-all" x1="-52.5929" y1="-206.972" x2="373.981" y2="-78.581" gradientUnits="userSpaceOnUse" data-v-7190abc7><stop stop-color="#FA00FF" data-v-7190abc7></stop><stop offset="1" stop-color="#51AFFF" data-v-7190abc7></stop></linearGradient></defs></svg>', 2),
	Tp = [Sp],
	Mp = Mo('<svg class="back back-it" width="73" height="49" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7190abc7><g data-v-7190abc7><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1548 8.34595V41.216H7.90796V8.34595H20.1548ZM9.06332 9.50131V40.0606H18.9994V9.50131H9.06332ZM41.6982 18.1665V40.0606H51.6921V18.1665H63.9389V9.50131H29.4514V18.1665H41.6982ZM28.296 8.34595H65.0942V19.3219H52.8474V41.216H40.5428V19.3219H28.296V8.34595Z" fill="url(#gradient-it)" data-v-7190abc7></path></g><defs data-v-7190abc7><linearGradient id="gradient-it" x1="4.50606" y1="41.2812" x2="68.4386" y2="39.0257" gradientUnits="userSpaceOnUse" data-v-7190abc7><stop stop-color="color(magenta-gradient-5)" data-v-7190abc7></stop><stop offset="0.317708" stop-color="#B762FF" data-v-7190abc7></stop><stop offset="0.557292" stop-color="#5143FF" data-v-7190abc7></stop><stop offset="0.770833" stop-color="#005CFF" data-v-7190abc7></stop><stop offset="1" stop-color="#8FD7FF" data-v-7190abc7></stop></linearGradient></defs></svg>', 1),
	$p = {
		__name: "Title",
		setup(e, {
			expose: t
		}) {
			const n = ie(),
				r = ie(),
				i = ie(),
				a = ie(),
				o = ie(),
				s = [n, r, i, a, o];
			async function c(u) {
				s.map(d => d.value.style.opacity = 0), await tt(u), s.map(d => d.value.style.opacity = 1), lt({
					target: n.value,
					opacity: [0, 1],
					duration: 600,
					ease: "outExpo"
				}), lt({
					target: r.value,
					transform: ["translate(-50%, -50%)", ""],
					duration: 1e3,
					ease: "outExpo"
				}), lt({
					target: i.value,
					transform: ["translateX(35%)", ""],
					duration: 1e3,
					ease: "outExpo"
				}), lt({
					target: a.value,
					transform: ["translateX(35%)", ""],
					duration: 1e3,
					ease: "outExpo"
				}), lt({
					target: o.value,
					transform: ["translateX(-35%)", ""],
					duration: 1e3,
					ease: "outExpo"
				})
			}

			function l() {}
			return t({
				enter: c,
				leave: l
			}), (u, d) => {
				const f = Zi("SvgIcon");
				return ue(), be("div", Ep, [O("div", {
					ref_key: "texts",
					ref: r,
					class: "texts"
				}, [O("div", Pp, [O("div", {
					ref_key: "textWant",
					ref: i
				}, kp, 512), O("div", {
					ref_key: "textAll",
					ref: a
				}, Tp, 512)]), O("div", {
					ref_key: "textIn",
					ref: o,
					class: "text in"
				}, [O("div", null, [fe(f, {
					id: "IT_Text",
					class: "front"
				}), Mp]), fe(f, {
					id: "title-rect",
					class: "rect"
				})], 512)], 512), fe(f, {
					id: "title-circle",
					ref_key: "backCircle",
					ref: n,
					class: "circle"
				}, null, 512)])
			}
		}
	};
var Ip = Oe($p, [
		["__scopeId", "data-v-7190abc7"]
	]),
	Op = "./assets/prizes.72cc86d078f3df62.avif",
	Up = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Op
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	g1 = "./assets/prizes.25fe6f8978f3df62.png",
	Rp = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: g1
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Hp = "./assets/prizes.bdc6b6ee78f3df62.webp",
	Gp = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Hp
	}, Symbol.toStringTag, {
		value: "Module"
	}));
const m1 = ["jpeg", "png", "jpg", "gif"],
	Bp = [...m1, "avif", "webp"];

function jn(e, t) {
	let n = {};
	for (let r in e) {
		const a = e[r].default,
			o = r.split("/").pop().split(".");
		let s = o.pop();
		if (!Bp.includes(s)) continue;
		m1.includes(s) && (s = "url");
		const c = o.join("."),
			l = n[c] = n[c] || {};
		l[s] = a
	}
	return Object.values(n).length === 1 && !t && (n = Object.values(n)[0]), n
}
const Ti = {
	default: !0,
	webp: !1,
	avif: !1
};
async function pc(e) {
	const t = "image/" + e,
		n = document.createElement("picture"),
		r = document.createElement("img"),
		i = document.createElement("source");
	i.srcset = "data:,x", i.type = t, n.appendChild(i), n.appendChild(r), await 0;
	const a = !!r.currentSrc;
	return Ti[e] = a, a
}
async function Fp() {
	await Promise.all([pc("webp"), pc("avif")])
}

function Np(e, t, n) {
	return typeof e == "object" && (n = e.avif, t = e.webp, e = e.url || e.default), Ti.avif && n ? n : Ti.webp && t ? t : e
}
var tn = {
	test: Fp,
	select: Np,
	supports: Ti
};

function Ho(e = []) {
	const t = {};
	for (let n = 0; n < e.length; n++) {
		const r = e[n];
		if (typeof r == "string") {
			t[r] = {};
			continue
		}
		const i = r[0];
		if (i == null) continue;
		const a = t[i] = {};
		r[1] != null && (a.default = r[1]), r[2] != null && (a.type = r[2]), r[3] && (a.required = !0), r[4] && (a.validator = r[4])
	}
	return t
}
const za = {};
let jp = 5,
	Ea = 0;
const Dp = {
	__name: "LazyImage",
	props: Ho(["contain", "url", "heightRatio", "backgroundColor", "height", "cacheId", ["alt", "Image", String]]),
	setup(e, {
		expose: t
	}) {
		const n = e;
		t({
			loaded: o
		});
		const r = ie(),
			i = ie();
		let a;
		ht(() => {
			_n(n, l, {
				immediate: !0
			})
		});

		function o() {
			return a
		}
		let s;

		function c(u) {
			if (clearTimeout(s), !u && Ea > jp) {
				s = setTimeout(c, 100);
				return
			}
			let d = u || i.value;
			!d || (Ea++, r.value.classList.remove("loaded"), d.decoding = "async", d.onload = () => {
				Ea--, r.value && r.value.classList.add("loaded"), a.resolve()
			}, d.src = tn.select(n.url), d.alt = n.alt)
		}

		function l() {
			a = v1();
			let u = i.value;
			if (n.cacheId) {
				const p = n.url ? tn.select(n.url) : "",
					h = n.cacheId + "_" + p;
				if (!za[h]) {
					const _ = za[h] = document.createElement("img");
					_.draggable = "false", _.decoding = "async", _.setAttribute("draggable", !1), _.ondragstart = v => v.preventDefault()
				}
				const m = r.value.firstChild;
				u = za[h], u !== m && r.value.replaceChild(u, m)
			}
			const d = n.url ? tn.select(n.url) : "",
				f = u.src;
			!!(f && f.length && d && d.length && u.src.split("/").pop() === d.split("/").pop()) ? r.value.classList.add("loaded"): c(n.cacheId && u), n.height ? (r.value.style.height = n.height, r.value.style.setProperty("--padding-top", "0px")) : (r.value.style.height = "", r.value.style.setProperty("--padding-top", n.heightRatio || "56.25%")), n.backgroundColor ? r.value.style.backgroundColor = n.backgroundColor : r.value.style.backgroundColor = ""
		}
		return (u, d) => (ue(), be("figure", {
			ref_key: "figureEl",
			ref: r,
			class: Ye(["lazy-img", {
				"obj-fit-contain": n.contain,
				"obj-fit-cover": !n.contain
			}])
		}, [n.cacheId ? en("", !0) : (ue(), be("img", {
			key: 0,
			ref_key: "imageEl",
			ref: i,
			draggable: "false",
			ondragstart: "return false;",
			decoding: "async"
		}, null, 512))], 2))
	}
};
var Gr = Dp;
const Go = e => (Ct("data-v-22fc0d63"), e = e(), zt(), e),
	Vp = {
		class: "prizes"
	},
	Wp = {
		class: "picture el-1"
	},
	qp = {
		class: "picture-prizes"
	},
	Kp = ["innerHTML"],
	Yp = Go(() => O("div", {
		class: "cta el-3"
	}, [O("div", {
		class: "arrow"
	}, [O("span"), O("span")]), O("div", {
		class: "arrow"
	}, [O("span"), O("span")])], -1)),
	Zp = Go(() => O("div", {
		class: "circle circle-1"
	}, null, -1)),
	Xp = Go(() => O("div", {
		class: "circle circle-2"
	}, null, -1)),
	Qp = [Zp, Xp],
	Jp = {
		__name: "PrizesBadge",
		setup(e, {
			expose: t
		}) {
			const n = ie(),
				r = ie(),
				i = ie(),
				a = [n, r],
				o = jn({
					"/src/assets/images/prizes.avif": Up,
					"/src/assets/images/prizes.png": Rp,
					"/src/assets/images/prizes.webp": Gp
				});
			async function s() {
				D.$audio.playSound("sfx_UI_beep_various", {
					variation: 5
				}), await tt(250), D.$analytics.event("prizes"), D.$router.push("prizes")
			}

			function c() {
				D.$audio.playSound("sfx_UI_beep_various", {
					variation: 6
				})
			}
			async function l(d) {
				a.map(f => f.value.style.opacity = 0), i.value.style.pointerEvents = "none";
				for (let f = 0; f < 2; f++) lt({
					target: n.value,
					selector: `.circle-${f+1}`,
					transform: ["scale(0)", ""],
					duration: 950,
					delay: d + f * 5,
					ease: "outSwift"
				}), n.value.style.opacity = 1;
				for (let f = 0; f < 3; f++) lt({
					target: r.value,
					selector: `.el-${f+1}`,
					transform: ["translateY(-25px) scale(0)", ""],
					duration: 900,
					delay: d + 50 + f * 10,
					ease: "outSwift"
				}), r.value.style.opacity = 1;
				await tt(d + 500), i.value && (i.value.style.pointerEvents = "all")
			}

			function u() {}
			return t({
				enter: l,
				leave: u
			}), (d, f) => (ue(), be("button", {
				ref_key: "ctaWrapper",
				ref: i,
				class: "prizes-badge",
				onClick: s,
				onMouseenter: c
			}, [O("div", Vp, [O("div", {
				ref_key: "wrapper",
				ref: r,
				class: "wrapper"
			}, [O("div", Wp, [O("div", qp, [fe(Gr, {
				url: de(o),
				"cache-id": "prizes-img",
				contain: !0
			}, null, 8, ["url"])])]), O("p", {
				class: "el-2",
				innerHTML: d.$l("home.prizes.cta")
			}, null, 8, Kp), Yp], 512), O("div", {
				ref_key: "bg",
				ref: n,
				class: "backgrounds"
			}, Qp, 512)])], 544))
		}
	};
var e2 = Oe(Jp, [
	["__scopeId", "data-v-22fc0d63"]
]);
const Bo = e => (Ct("data-v-5204f5e6"), e = e(), zt(), e),
	t2 = ["aria-label"],
	n2 = {
		class: "prizes"
	},
	r2 = {
		class: "wrapper"
	},
	i2 = {
		class: "left"
	},
	a2 = ["innerHTML"],
	o2 = Bo(() => O("div", {
		class: "cta"
	}, [O("div", {
		class: "arrow"
	}, [O("span"), O("span")]), O("div", {
		class: "arrow"
	}, [O("span"), O("span")])], -1)),
	s2 = Bo(() => O("img", {
		src: g1,
		alt: ""
	}, null, -1)),
	c2 = Bo(() => O("div", {
		class: "background"
	}, null, -1)),
	l2 = {
		__name: "PrizesFooter",
		setup(e, {
			expose: t
		}) {
			const n = ie();
			async function r() {
				D.$audio.playSound("sfx_UI_beep_various", {
					variation: 5
				}), D.$analytics.event("prizes"), D.$router.push("prizes")
			}

			function i() {
				D.$audio.playSound("sfx_UI_beep_various", {
					variation: 6
				})
			}
			async function a(s) {
				lt({
					target: n.value,
					transform: ["translateY(200%)", ""],
					duration: 1e3,
					delay: s,
					ease: "outSwift"
				})
			}

			function o() {}
			return t({
				enter: a,
				leave: o
			}), (s, c) => (ue(), be("button", {
				ref_key: "wrapper",
				ref: n,
				class: "prizes-footer",
				"aria-label": s.$l("aria.label.prizes.go"),
				onMouseenter: i,
				onClick: r
			}, [O("div", n2, [O("div", r2, [O("div", i2, [O("p", {
				innerHTML: s.$l("home.prizes.cta")
			}, null, 8, a2), o2]), s2]), c2])], 40, t2))
		}
	};
var b1 = Oe(l2, [
	["__scopeId", "data-v-5204f5e6"]
]);
let hc = !1;

function _1() {
	hc ? D.$router.push({
		name: "Game"
	}) : (hc = !1, D.$router.push({
		name: "Intro"
	}))
}

function y1(e, t = 0, n = 1) {
	return Math.min(Math.max(e, t), n)
}

function vc(e, t = 0, n = 1) {
	return Math.max(0, Math.min(1, (e - t) / (n - t)))
}

function $9(e, t, n, r, i) {
	return r + (i - r) * ((e - t) / (n - t))
}

function I9(e, t, n, r, i) {
	const a = r + (i - r) * ((e - t) / (n - t));
	return Math.max(r, Math.min(i, a))
}

function O9(e = []) {
	const t = e.slice(0).sort((i, a) => i - a),
		n = Math.floor(t.length / 2);
	return t.length % 2 === 0 ? (t[n] + t[n - 1]) / 2 : t[n]
}

function U9(e, t, n) {
	const r = y1((n - e) / (t - e), 0, 1);
	return r * r * (3 - 2 * r)
}

function gc(e) {
	function t(i) {
		(e = (i | 0) % 2147483647) <= 0 && (e += 2147483646)
	}

	function n() {
		return e = e * 48271 % 2147483647
	}

	function r() {
		return (n() - 1) / 2147483646
	}
	return t(e), {
		seed: t,
		nextInt: n,
		nextFloat: r
	}
}

function x1(e = 0) {
	let t = gc(e);
	return t.nextFloat(), t.nextFloat(), {
		setSeed: n,
		random: r,
		randomFloat: i,
		randomInt: a,
		hash2d: c,
		hash2dInt: l
	};

	function n(u) {
		e = u, t = gc(e)
	}

	function r() {
		return t.nextFloat()
	}

	function i(u = 0, d = 1) {
		return t.nextFloat() * (d - u) + u
	}

	function a(u, d) {
		return Math.floor(t.nextFloat() * (d - u + 1)) + u
	}

	function o(u) {
		return u - Math.floor(u)
	}

	function s(u, d, f, b) {
		return u * b - f * d
	}

	function c(u, d) {
		return o(Math.sin(s(u, d, 12.9898, 78.233)) * 43758.5453)
	}

	function l(u, d, f, b) {
		return Math.floor(c(u, d) * (b - f + 1)) + f
	}
}
const u2 = x1(Date.now());
u2.create = x1;
const vr = (3 - Math.sqrt(3)) / 6,
	Pa = [
		[1, 1],
		[-1, 1],
		[1, -1],
		[-1, -1],
		[1, 0],
		[-1, 0],
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
		[0, 1],
		[0, -1]
	];

function R9(e = Math.random) {
	const t = new Uint8Array(256);
	for (let o = 0; o < 256; o++) t[o] = o;
	let n, r;
	for (let o = 255; o > 0; o--) n = Math.floor((o + 1) * e()), r = t[o], t[o] = t[n], t[n] = r;
	const i = new Uint8Array(512),
		a = new Uint8Array(512);
	for (let o = 0; o < 512; o++) i[o] = t[o & 255], a[o] = i[o] % 12;
	return (o, s) => {
		const c = (o + s) * .5 * (Math.sqrt(3) - 1),
			l = Math.floor(o + c),
			u = Math.floor(s + c),
			d = (l + u) * vr,
			f = l - d,
			b = u - d,
			p = o - f,
			h = s - b,
			m = p > h ? 1 : 0,
			_ = p > h ? 0 : 1,
			v = p - m + vr,
			g = h - _ + vr,
			w = p - 1 + 2 * vr,
			k = h - 1 + 2 * vr,
			S = l & 255,
			U = u & 255,
			M = Pa[a[S + i[U]]],
			A = Pa[a[S + m + i[U + _]]],
			x = Pa[a[S + 1 + i[U + 1]]],
			z = .5 - p * p - h * h,
			C = z < 0 ? 0 : Math.pow(z, 4) * (M[0] * p + M[1] * h),
			L = .5 - v * v - g * g,
			I = L < 0 ? 0 : Math.pow(L, 4) * (A[0] * v + A[1] * g),
			N = .5 - w * w - k * k,
			$ = N < 0 ? 0 : Math.pow(N, 4) * (x[0] * w + x[1] * k);
		return 70.14805770653952 * (C + I + $)
	}
}

function f2(e, t, n) {
	return e * (1 - n) + t * n
}

function d2(e, t, n, r = .001) {
	const i = e * (1 - n) + t * n;
	return Math.abs(t - i) < r ? t : i
}

function di(e, t, n, r) {
	return f2(e, t, 1 - Math.exp(-n * .05 * r))
}

function H9(e, t, n, r, i) {
	return d2(e, t, 1 - Math.exp(-n * .05 * r), i)
}
const Ji = typeof window == "undefined" ? globalThis : window,
	gn = [],
	Zn = [],
	Xn = [];
let nn = null,
	mn = null,
	Er = !1,
	Fo = !1,
	No, qt;

function Mi() {
	const e = performance.now();
	mn === null && (mn = e), qt = e - mn, No += qt, mn = e, nn = Er ? null : Ji.requestAnimationFrame(Mi), Er && (Er = !1);
	let t;
	if (Fo) {
		for (t = 0; t < Xn.length; t++) Xn[t](qt);
		for (t = 0; t < gn.length; t++) gn[t](qt);
		for (t = 0; t < Zn.length; t++) Zn[t](qt)
	} else
		for (t = 0; t < gn.length; t++) gn[t](qt)
}

function ea() {
	Fo = Zn.length > 0 || Xn.length > 0
}

function jo(e, t, n) {
	return !t || !e || ~e.indexOf(t) ? !1 : (n = !!n, n ? e.unshift(t) : e.push(t), !0)
}

function Do(e, t) {
	if (!t) return !1;
	const n = e.indexOf(t);
	return ~n ? (e.splice(n, 1), e.length === 0) : !1
}

function p2(e, t) {
	jo(Xn, e, t) && ea()
}

function h2(e, t) {
	jo(Zn, e, t) && ea()
}

function v2(e, t) {
	jo(gn, e, t) && w1()
}

function g2(e) {
	Do(Xn, e) && ea()
}

function m2(e) {
	Do(Zn, e) && ea()
}

function b2(e) {
	Do(gn, e) && Vo()
}

function w1(e) {
	Er = !1, !nn && (e = !!e, mn = null, e ? Mi() : nn = Ji.requestAnimationFrame(Mi))
}

function _2() {
	nn || (Er = !0, mn = null, nn = Ji.requestAnimationFrame(Mi))
}

function Vo() {
	!nn || (Ji.cancelAnimationFrame(nn), nn = null)
}

function y2() {
	Vo(), gn.length = 0, Zn.length = 0, Xn.length = 0, Fo = !1, mn = null, No = 0, qt = 0
}
var xn = {
	add: v2,
	addAfter: h2,
	addBefore: p2,
	remove: b2,
	removeAfter: m2,
	removeBefore: g2,
	start: w1,
	stop: Vo,
	time: No,
	dt: qt,
	requestOnce: _2,
	dispose: y2
};
class x2 {
	constructor(t, n, r = {}) {
		const i = r.autostart !== void 0 ? r.autostart : !0;
		this._standalone = r.standalone !== void 0 ? r.standalone : !0, this._selfdestruct = r.selfdestruct !== void 0 ? r.selfdestruct : !0, this._stopped = !0, this._remainder = 0, this._delay = t | 0, this._remainingTime = t, this._callback = n === void 0 ? function() {} : n;
		const a = this,
			o = this.update,
			s = this.restart;
		this.update = function(c) {
			o.call(a, c)
		}, this.restart = function(c, l) {
			s.call(a, c, l)
		}, i && this.start(), this._delay === 0 && this.stop()
	}
	setCallback(t, n) {
		this._callback = t === void 0 ? function() {} : t, n && this.restart(n)
	}
	stop() {
		this._stopped = !0, this._standalone && xn.remove(this.update)
	}
	start() {
		!this._stopped || this.restart()
	}
	restart(t, n) {
		n === void 0 && (n = !0), t !== void 0 && (this._delay = t), this._standalone && this._stopped && xn.add(this.update), this._stopped = !1, this._remainingTime = this._delay - this._remainder * +n
	}
	update(t) {
		this._stopped || (this._remainingTime -= t, this._remainingTime <= 0 ? (this._stopped = !0, this._remainder = -this._remainingTime % this._delay, this._callback(this.restart), this._stopped && this._selfdestruct && this.dispose()) : this._remainder = 0)
	}
	dispose() {
		this._standalone && xn.add(this.update), this._callback = this.restart = null, this.stop(), this._remainder = 0, this._remainingTime = this._delay
	}
}

function G9(e, t, n) {
	return new x2(e, t, n)
}
const w2 = e => (e == null && (e = ""), e.replace(/(^|[ >])([^ ><]+)?/gi, (n, r, i) => {
	let a = r;
	if (i !== void 0) {
		let o = "";
		for (let s = 0, c = i.length; s < c; s++) {
			const l = i[s];
			l === " " || l === "\xA0" || l === "&nbsp;" ? o += l : o += `<span class="char char-${s}">` + i[s] + "</span>"
		}
		a += '<span class="word">' + o + "</span>"
	}
	return a
}));
const A2 = {
		class: "blink-text"
	},
	C2 = {
		__name: "BlinkText",
		props: {
			component: {
				type: String,
				default: "h1"
			},
			text: {
				type: String,
				default: "Text"
			},
			autoplay: {
				type: Boolean,
				default: !0
			}
		},
		setup(e, {
			expose: t
		}) {
			const n = e,
				r = w2(n.text),
				i = ie([]);
			let a = null;
			const o = ie();
			let s = 0;

			function c(f) {
				for (let b = f.length - 1; b > 0; b--) {
					const p = Math.floor(Math.random() * (b + 1)),
						h = f[b];
					f[b] = f[p], f[p] = h
				}
			}
			ht(async () => {
				i.value = Array.from(o.value.querySelectorAll(".char")), c(i.value), !!o.value && n.autoplay && (a = setTimeout(l, 20))
			});

			function l() {
				if (!o.value || !i.value) return;
				const f = i.value[s];
				if (!f) return a = setTimeout(u, 100);
				f.classList.add("visible"), a = setTimeout(l, 20), s++
			}

			function u() {}
			Ln(() => {
				clearTimeout(a), i.value = []
			});

			function d() {
				if (clearTimeout(a), !!o.value) {
					s = 0;
					for (let f = 0; f < i.value.length; f++) i.value[f].classList.remove("visible");
					a = setTimeout(l, 20)
				}
			}
			return t({
				animate: d
			}), (f, b) => (ue(), be("div", A2, [(ue(), Ie(ko(n.component), {
				ref_key: "base",
				ref: o,
				class: "content",
				innerHTML: de(r)
			}, null, 8, ["innerHTML"]))]))
		}
	};
var A1 = C2;
const z2 = {
	__name: "InteractiveCta",
	props: Ho([
		["text", "Play", String],
		["click", () => {}, Function],
		["clickSfx", "sfx_UI_beep_various,4", String],
		["hoverSfx", "sfx_UI_beep_various,3", String]
	]),
	setup(e) {
		const t = e,
			n = mp(Hr.outQuart),
			r = t.clickSfx.split(","),
			i = r[0],
			a = {};
		r.length > 1 && (a.variation = +r[1]);
		const o = t.hoverSfx.split(","),
			s = o[0],
			c = {};
		o.length > 1 && (c.variation = +o[1]);
		const l = ie(),
			u = ie(),
			d = ie(),
			f = ie(),
			b = ie(),
			p = ie();
		let h = null;
		ht(() => {
			xn.add(S)
		}), Ln(() => {
			xn.remove(S)
		});

		function m() {
			D.$audio.playSound(s, c), h = b.value.getBoundingClientRect(), p.value.animate()
		}

		function _() {
			!l.value || (h = null, l.value.style.transform = `translate(${0}px, ${0}px)`, p.value.animate())
		}

		function v() {
			D.$audio.playSound(i, a), t.click && t.click(), Si({
				target: b.value,
				name: "blinkOpacityIn",
				ease: "ease-in-out",
				duration: 1e3,
				delay: 0
			})
		}
		let g = 0,
			w = 0,
			k = 0;

		function S() {
			let U = 0,
				M = 0,
				A = .9,
				x = 0;
			if (h) {
				const C = {
						x: h.width * .2,
						y: h.height * .2
					},
					L = {
						x: [h.x - C.x, h.x + h.width + C.x],
						center: {
							x: h.x + h.width / 2,
							y: h.y + h.height / 2
						},
						y: [h.y - C.x, h.y + h.height + C.y]
					},
					I = D.$webgl.controls.touch.pos,
					N = I.x - L.center.x,
					$ = I.y - L.center.y;
				U = n(vc(Math.abs(N), 0, h.width)) * 30 * Math.sign(N), M = n(vc(Math.abs($), 0, h.height)) * 20 * Math.sign($), A = 1, x = 1
			}
			const z = D.$webgl.time.stableDt;
			g = di(g, U, .1, z), w = di(w, M, .1, z), k = di(k, A, .3, z), l.value.style.transform = `translate(${g}px, ${w}px)`, u.value.style.transform = `translate(${g}px, ${w}px) scale(.97)`, d.value.style.transform = `translate(${g*.8}px, ${w*.8}px) scale(${k})`, f.value.style.transform = `translate(${g*.5}px, ${w*.5}px) scale(${k})`, d.value.style.opacity = x, f.value.style.opacity = x * .5, u.value.style.opacity = x + .3
		}
		return (U, M) => (ue(), be("div", {
			ref_key: "base",
			ref: b,
			class: "interactive-cta interactive-cta--base"
		}, [O("button", {
			ref_key: "content",
			ref: l,
			class: "interactive-cta__content",
			onMouseenter: m,
			onMouseleave: _,
			onClick: v
		}, [fe(A1, {
			ref_key: "text",
			ref: p,
			text: t.text,
			component: "p"
		}, null, 8, ["text"])], 544), O("div", {
			ref_key: "glow",
			ref: u,
			class: "glow"
		}, null, 512), O("div", {
			ref_key: "border1",
			ref: d,
			class: "border border-1"
		}, null, 512), O("div", {
			ref_key: "border2",
			ref: f,
			class: "border border-2"
		}, null, 512)], 512))
	}
};
var C1 = Oe(z2, [
	["__scopeId", "data-v-4598a68e"]
]);
const E2 = e => (Ct("data-v-3aee41ea"), e = e(), zt(), e),
	P2 = {
		class: "wrapper"
	},
	L2 = {
		class: "left"
	},
	k2 = {
		class: "title"
	},
	S2 = ["innerHTML"],
	T2 = E2(() => O("div", {
		class: "glow"
	}, null, -1)),
	M2 = {
		class: "right"
	},
	$2 = {
		__name: "Home",
		setup(e) {
			const t = ie(),
				n = ie(),
				r = ie(),
				i = ie(),
				a = ie(),
				o = ie(),
				s = ie();
			let c = Re(() => D.$viewport.width >= 768);

			function l() {
				_1(), D.$analytics.event("play_game")
			}
			async function u(d = !0, f) {
				t.value.style.visibility = "visible", d ? lt({
					target: n.value,
					opacity: [1, 0],
					duration: 600,
					ease: "inCubic"
				}) : n.value.style.opacity = 0, lt({
					target: i.value,
					opacity: [0, 1],
					duration: 300,
					delay: f,
					ease: "inCubic"
				}), lt({
					target: a.value,
					selector: ".glow",
					opacity: [.5, 0],
					delay: f + 250,
					duration: 750,
					ease: "outCubic"
				}), a.value.style.opacity = 0, Si({
					target: a.value,
					name: "blinkOpacityIn",
					ease: "ease-in-out",
					duration: 1e3,
					delay: f + 250
				})
			}
			return D.$router.onViewEnter(async ({
				from: d
			}) => {
				D.$webgl.stores.isAutoplay.set(!0), D.$analytics.pageview("/homepage", "Homepage"), D.$webgl.game.setState("AUTOPLAY"), await D.$transition.ensureAlmostHidden();
				const f = d && d.name === "Prizes" ? 10 : 800;
				u(!d, f), r.value.enter(f), c.value ? o.value.enter(f + 250) : s.value.enter(f + 150)
			}), D.$router.onViewLeave(async ({
				to: d
			}) => {
				t.value.classList.add("hiding"), D.$webgl.stores.isAutoplay.set(!1), d.name === "Prizes" ? await D.$transition.ensureVisible() : await tt(600)
			}), (d, f) => (ue(), be("section", {
				ref_key: "base",
				ref: t,
				class: "page page-home"
			}, [O("div", P2, [O("div", L2, [O("div", k2, [fe(Ip, {
				ref_key: "title",
				ref: r
			}, null, 512)]), O("p", {
				ref_key: "caption",
				ref: i,
				innerHTML: d.$l("home.text")
			}, null, 8, S2), O("div", {
				ref_key: "ctaWrapper",
				ref: a,
				class: "cta-wrapper"
			}, [T2, fe(C1, {
				text: d.$l("home.cta"),
				click: l
			}, null, 8, ["text"])], 512)]), O("div", M2, [de(c) ? (ue(), Ie(e2, {
				key: 0,
				ref_key: "prizesBadge",
				ref: o
			}, null, 512)) : (ue(), Ie(b1, {
				key: 1,
				ref_key: "prizesFooter",
				ref: s
			}, null, 512))])]), O("div", {
				ref_key: "bg",
				ref: n,
				class: "bg"
			}, null, 512)], 512))
		}
	};
var I2 = Oe($2, [
		["__scopeId", "data-v-3aee41ea"]
	]),
	O2 = "./assets/aegis.f9f69f0f78f3df62.avif",
	U2 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: O2
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	R2 = "./assets/aegis.9ecfbc7778f3df62.png",
	H2 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: R2
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	G2 = "./assets/aegis.9a7d394978f3df62.webp",
	B2 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: G2
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	F2 = "./assets/codex.594e041278f3df62.avif",
	N2 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: F2
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	j2 = "./assets/codex.272000b978f3df62.png",
	D2 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: j2
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	V2 = "./assets/codex.997996ea78f3df62.webp",
	W2 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: V2
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	q2 = "./assets/infinite.d1e7ddc778f3df62.avif",
	K2 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: q2
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Y2 = "./assets/infinite.5e181d3778f3df62.png",
	Z2 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Y2
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	X2 = "./assets/infinite.b8f3779878f3df62.webp",
	Q2 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: X2
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	J2 = "./assets/meta.5d10e97978f3df62.avif",
	e3 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: J2
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	t3 = "./assets/meta.4c30031278f3df62.png",
	n3 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: t3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	r3 = "./assets/meta.99ab382278f3df62.webp",
	i3 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: r3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	a3 = "./assets/trident.156b870278f3df62.avif",
	o3 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: a3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	s3 = "./assets/trident.ca9dc42b78f3df62.png",
	c3 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: s3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	l3 = "./assets/trident.8d78915078f3df62.webp",
	u3 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: l3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	f3 = "./assets/tier1.6e8b45b978f3df62.avif",
	z1 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: f3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	d3 = "./assets/tier1.f2de6b7b78f3df62.png",
	E1 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: d3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	p3 = "./assets/tier1.9652700f78f3df62.webp",
	P1 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: p3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	h3 = "./assets/tier2.b3f31cd478f3df62.avif",
	L1 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: h3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	v3 = "./assets/tier2.31a1329d78f3df62.png",
	k1 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: v3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	g3 = "./assets/tier2.c90180ea78f3df62.webp",
	S1 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: g3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	m3 = "./assets/tier3.33f8db0a78f3df62.avif",
	T1 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: m3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	b3 = "./assets/tier3.313cd9d878f3df62.png",
	M1 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: b3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	_3 = "./assets/tier3.3536a1a278f3df62.webp",
	$1 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: _3
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	y3 = "./assets/prizes_slider_bg.1959ccdd78f3df62.jpg",
	x3 = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: y3
	}, Symbol.toStringTag, {
		value: "Module"
	}));
const Wo = e => (Ct("data-v-4e3c19ba"), e = e(), zt(), e),
	w3 = {
		key: 0,
		class: "specs",
		width: "14",
		height: "14",
		viewBox: "0 0 14 14",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	},
	A3 = Wo(() => O("path", {
		d: "M9.05595 5.6447C8.91396 5.6447 8.77779 5.7011 8.67739 5.8015C8.57699 5.9019 8.52059 6.03807 8.52059 6.18006V10.0239C8.52059 10.1659 8.46419 10.3021 8.36379 10.4025C8.26339 10.5029 8.12722 10.5593 7.98523 10.5593H2.09631C1.95432 10.5593 1.81815 10.5029 1.71775 10.4025C1.61735 10.3021 1.56095 10.1659 1.56095 10.0239V4.13499C1.56095 3.99301 1.61735 3.85684 1.71775 3.75644C1.81815 3.65604 1.95432 3.59964 2.09631 3.59964H5.94017C6.08215 3.59964 6.21832 3.54323 6.31872 3.44283C6.41912 3.34243 6.47553 3.20626 6.47553 3.06428C6.47553 2.92229 6.41912 2.78612 6.31872 2.68572C6.21832 2.58533 6.08215 2.52892 5.94017 2.52892H2.09631C1.67035 2.52892 1.26184 2.69813 0.960642 2.99933C0.659445 3.30053 0.490234 3.70904 0.490234 4.13499V10.0239C0.490234 10.4499 0.659445 10.8584 0.960642 11.1596C1.26184 11.4608 1.67035 11.63 2.09631 11.63H7.98523C8.41119 11.63 8.8197 11.4608 9.1209 11.1596C9.42209 10.8584 9.5913 10.4499 9.5913 10.0239V6.18006C9.5913 6.03807 9.5349 5.9019 9.4345 5.8015C9.3341 5.7011 9.19793 5.6447 9.05595 5.6447ZM11.1545 1.25477C11.1002 1.12396 10.9963 1.02001 10.8655 0.96568C10.8011 0.938248 10.732 0.923697 10.662 0.922852H7.44987C7.30789 0.922852 7.17172 0.979255 7.07132 1.07965C6.97092 1.18005 6.91452 1.31622 6.91452 1.45821C6.91452 1.60019 6.97092 1.73636 7.07132 1.83676C7.17172 1.93716 7.30789 1.99357 7.44987 1.99357H9.37181L3.85763 7.50239C3.80745 7.55216 3.76762 7.61137 3.74044 7.67661C3.71327 7.74184 3.69927 7.81182 3.69927 7.88249C3.69927 7.95317 3.71327 8.02314 3.74044 8.08838C3.76762 8.15362 3.80745 8.21283 3.85763 8.2626C3.9074 8.31277 3.96661 8.3526 4.03185 8.37978C4.09709 8.40696 4.16706 8.42095 4.23773 8.42095C4.30841 8.42095 4.37838 8.40696 4.44362 8.37978C4.50886 8.3526 4.56807 8.31277 4.61784 8.2626L10.1267 2.74842V4.67035C10.1267 4.81234 10.1831 4.94851 10.2835 5.0489C10.3839 5.1493 10.52 5.20571 10.662 5.20571C10.804 5.20571 10.9402 5.1493 11.0406 5.0489C11.141 4.94851 11.1974 4.81234 11.1974 4.67035V1.45821C11.1965 1.38825 11.182 1.31913 11.1545 1.25477V1.25477Z",
		fill: "url(#gradient-spec)"
	}, null, -1)),
	C3 = Wo(() => O("defs", null, [O("linearGradient", {
		id: "gradient-spec",
		x1: "-3.7034",
		y1: "-2.70993",
		x2: "20.0281",
		y2: "-0.736369",
		gradientUnits: "userSpaceOnUse"
	}, [O("stop", {
		"stop-color": "#FE0291"
	}), O("stop", {
		offset: "0.317708",
		"stop-color": "#B762FF"
	}), O("stop", {
		offset: "0.557292",
		"stop-color": "#5143FF"
	}), O("stop", {
		offset: "0.770833",
		"stop-color": "#005CFF"
	}), O("stop", {
		offset: "1",
		"stop-color": "#8FD7FF"
	})])], -1)),
	z3 = [A3, C3],
	E3 = Wo(() => O("div", {
		class: "loading"
	}, null, -1)),
	P3 = ["innerHTML"],
	L3 = {
		__name: "CTAButton",
		props: Ho([
			["text", "button", String],
			["href", null, String],
			["to", "", String],
			["click", () => {}, Function],
			["type", "default", String],
			["specs", !1, Boolean],
			["retry", !1, Boolean],
			["size", "default", String],
			["clickSfx", "sfx_UI_beep_various,4", String],
			["hoverSfx", "sfx_UI_beep_various,3", String]
		]),
		setup(e) {
			const t = e,
				n = ie(),
				r = t.to ? "router-link" : t.href ? "a" : "button",
				i = {};
			t.href && (i.href = t.href, i.target = "_blank");
			const a = t.clickSfx.split(","),
				o = a[0],
				s = {};
			a.length > 1 && (s.variation = +a[1]);
			const c = t.hoverSfx.split(","),
				l = c[0],
				u = {};
			c.length > 1 && (u.variation = +c[1]);

			function d(b) {
				D.$audio.playSound(o, s), t.click && t.click(b)
			}

			function f() {
				D.$audio.playSound(l, u)
			}
			return (b, p) => {
				const h = Zi("SvgIcon");
				return ue(), Ie(ko(de(r)), Wl({
					ref_key: "button",
					ref: n
				}, i, {
					class: ["cta-register button", ["size_" + t.size, "type_" + t.type, "button--gradient", t.specs ? "button--specs" : "", t.retry ? "button--retry" : ""]],
					onMouseenter: f,
					onClick: d
				}), {
					default: Qe(() => [t.specs ? (ue(), be("svg", w3, z3)) : en("", !0), t.retry ? (ue(), Ie(h, {
						key: 1,
						id: "retry",
						class: "retry"
					})) : en("", !0), E3, O("span", {
						class: "text",
						innerHTML: t.specs ? b.$l("page.series.cta") : t.text
					}, null, 8, P3)]),
					_: 1
				}, 16, ["class"])
			}
		}
	};
var kt = Oe(L3, [
	["__scopeId", "data-v-4e3c19ba"]
]);

function mc(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
	}
}

function k3(e, t, n) {
	return t && mc(e.prototype, t), n && mc(e, n), Object.defineProperty(e, "prototype", {
		writable: !1
	}), e
}
/*!
	* Splide.js
	* Version  : 4.0.7
	* License  : MIT
	* Copyright: 2022 Naotoshi Fujita
	*/
var bc = "(prefers-reduced-motion: reduce)",
	Gn = 1,
	S3 = 2,
	Qn = 3,
	cr = 4,
	qr = 5,
	pi = 6,
	$i = 7,
	T3 = {
		CREATED: Gn,
		MOUNTED: S3,
		IDLE: Qn,
		MOVING: cr,
		SCROLLING: qr,
		DRAGGING: pi,
		DESTROYED: $i
	};

function Mt(e) {
	e.length = 0
}

function cn(e, t, n) {
	return Array.prototype.slice.call(e, t, n)
}

function Ee(e) {
	return e.bind.apply(e, [null].concat(cn(arguments, 1)))
}
var no = setTimeout,
	ro = function() {};

function _c(e) {
	return requestAnimationFrame(e)
}

function ta(e, t) {
	return typeof t === e
}

function Br(e) {
	return !Ko(e) && ta("object", e)
}
var qo = Array.isArray,
	I1 = Ee(ta, "function"),
	on = Ee(ta, "string"),
	na = Ee(ta, "undefined");

function Ko(e) {
	return e === null
}

function O1(e) {
	return e instanceof HTMLElement
}

function lr(e) {
	return qo(e) ? e : [e]
}

function pt(e, t) {
	lr(e).forEach(t)
}

function Yo(e, t) {
	return e.indexOf(t) > -1
}

function hi(e, t) {
	return e.push.apply(e, lr(t)), e
}

function Yt(e, t, n) {
	e && pt(t, function(r) {
		r && e.classList[n ? "add" : "remove"](r)
	})
}

function wt(e, t) {
	Yt(e, on(t) ? t.split(" ") : t, !0)
}

function Kr(e, t) {
	pt(t, e.appendChild.bind(e))
}

function Zo(e, t) {
	pt(e, function(n) {
		var r = (t || n).parentNode;
		r && r.insertBefore(n, t)
	})
}

function Fr(e, t) {
	return O1(e) && (e.msMatchesSelector || e.matches).call(e, t)
}

function U1(e, t) {
	var n = e ? cn(e.children) : [];
	return t ? n.filter(function(r) {
		return Fr(r, t)
	}) : n
}

function Yr(e, t) {
	return t ? U1(e, t)[0] : e.firstElementChild
}
var Ii = Object.keys;

function wn(e, t, n) {
	if (e) {
		var r = Ii(e);
		r = n ? r.reverse() : r;
		for (var i = 0; i < r.length; i++) {
			var a = r[i];
			if (a !== "__proto__" && t(e[a], a) === !1) break
		}
	}
	return e
}

function Nr(e) {
	return cn(arguments, 1).forEach(function(t) {
		wn(t, function(n, r) {
			e[r] = t[r]
		})
	}), e
}

function Zt(e) {
	return cn(arguments, 1).forEach(function(t) {
		wn(t, function(n, r) {
			qo(n) ? e[r] = n.slice() : Br(n) ? e[r] = Zt({}, Br(e[r]) ? e[r] : {}, n) : e[r] = n
		})
	}), e
}

function yc(e, t) {
	lr(t || Ii(e)).forEach(function(n) {
		delete e[n]
	})
}

function At(e, t) {
	pt(e, function(n) {
		pt(t, function(r) {
			n && n.removeAttribute(r)
		})
	})
}

function ge(e, t, n) {
	Br(t) ? wn(t, function(r, i) {
		ge(e, i, r)
	}) : pt(e, function(r) {
		Ko(n) || n === "" ? At(r, t) : r.setAttribute(t, String(n))
	})
}

function Dn(e, t, n) {
	var r = document.createElement(e);
	return t && (on(t) ? wt(r, t) : ge(r, t)), n && Kr(n, r), r
}

function qe(e, t, n) {
	if (na(n)) return getComputedStyle(e)[t];
	Ko(n) || (e.style[t] = "" + n)
}

function Oi(e, t) {
	qe(e, "display", t)
}

function R1(e) {
	e.setActive && e.setActive() || e.focus({
		preventScroll: !0
	})
}

function ft(e, t) {
	return e.getAttribute(t)
}

function xc(e, t) {
	return e && e.classList.contains(t)
}

function Ke(e) {
	return e.getBoundingClientRect()
}

function zn(e) {
	pt(e, function(t) {
		t && t.parentNode && t.parentNode.removeChild(t)
	})
}

function H1(e) {
	return Yr(new DOMParser().parseFromString(e, "text/html").body)
}

function Et(e, t) {
	e.preventDefault(), t && (e.stopPropagation(), e.stopImmediatePropagation())
}

function G1(e, t) {
	return e && e.querySelector(t)
}

function Xo(e, t) {
	return t ? cn(e.querySelectorAll(t)) : []
}

function Lt(e, t) {
	Yt(e, t, !1)
}

function io(e) {
	return e.timeStamp
}

function Dt(e) {
	return on(e) ? e : e ? e + "px" : ""
}
var Ve = "splide",
	Qo = "data-" + Ve;

function Pr(e, t) {
	if (!e) throw new Error("[" + Ve + "] " + (t || ""))
}
var Jn = Math.min,
	jr = Math.max,
	Ui = Math.floor,
	Dr = Math.ceil,
	De = Math.abs;

function B1(e, t, n) {
	return De(e - t) < n
}

function vi(e, t, n, r) {
	var i = Jn(t, n),
		a = jr(t, n);
	return r ? i < e && e < a : i <= e && e <= a
}

function _r(e, t, n) {
	var r = Jn(t, n),
		i = jr(t, n);
	return Jn(jr(r, e), i)
}

function ao(e) {
	return +(e > 0) - +(e < 0)
}

function oo(e, t) {
	return pt(t, function(n) {
		e = e.replace("%s", "" + n)
	}), e
}

function Jo(e) {
	return e < 10 ? "0" + e : "" + e
}
var wc = {};

function M3(e) {
	return "" + e + Jo(wc[e] = (wc[e] || 0) + 1)
}

function F1() {
	var e = [];

	function t(o, s, c, l) {
		i(o, s, function(u, d, f) {
			var b = "addEventListener" in u,
				p = b ? u.removeEventListener.bind(u, d, c, l) : u.removeListener.bind(u, c);
			b ? u.addEventListener(d, c, l) : u.addListener(c), e.push([u, d, f, c, p])
		})
	}

	function n(o, s, c) {
		i(o, s, function(l, u, d) {
			e = e.filter(function(f) {
				return f[0] === l && f[1] === u && f[2] === d && (!c || f[3] === c) ? (f[4](), !1) : !0
			})
		})
	}

	function r(o, s, c) {
		var l, u = !0;
		return typeof CustomEvent == "function" ? l = new CustomEvent(s, {
			bubbles: u,
			detail: c
		}) : (l = document.createEvent("CustomEvent"), l.initCustomEvent(s, u, !1, c)), o.dispatchEvent(l), l
	}

	function i(o, s, c) {
		pt(o, function(l) {
			l && pt(s, function(u) {
				u.split(" ").forEach(function(d) {
					var f = d.split(".");
					c(l, f[0], f[1])
				})
			})
		})
	}

	function a() {
		e.forEach(function(o) {
			o[4]()
		}), Mt(e)
	}
	return {
		bind: t,
		unbind: n,
		dispatch: r,
		destroy: a
	}
}
var Ot = "mounted",
	Ac = "ready",
	$t = "move",
	ur = "moved",
	N1 = "shifted",
	es = "click",
	j1 = "active",
	D1 = "inactive",
	V1 = "visible",
	W1 = "hidden",
	q1 = "slide:keydown",
	Pe = "refresh",
	Ne = "updated",
	En = "resize",
	ts = "resized",
	K1 = "drag",
	Y1 = "dragging",
	Z1 = "dragged",
	ra = "scroll",
	Sn = "scrolled",
	ns = "destroy",
	X1 = "arrows:mounted",
	Q1 = "arrows:updated",
	J1 = "pagination:mounted",
	eu = "pagination:updated",
	rs = "navigation:mounted",
	is = "autoplay:play",
	tu = "autoplay:playing",
	as = "autoplay:pause",
	os = "lazyload:loaded";

function Le(e) {
	var t = e ? e.event.bus : document.createDocumentFragment(),
		n = F1();

	function r(a, o) {
		n.bind(t, lr(a).join(" "), function(s) {
			o.apply(o, qo(s.detail) ? s.detail : [])
		})
	}

	function i(a) {
		n.dispatch(t, a, cn(arguments, 1))
	}
	return e && e.event.on(ns, n.destroy), Nr(n, {
		bus: t,
		on: r,
		off: Ee(n.unbind, t),
		emit: i
	})
}

function ia(e, t, n, r) {
	var i = Date.now,
		a, o = 0,
		s, c = !0,
		l = 0;

	function u() {
		if (!c) {
			if (o = e ? Jn((i() - a) / e, 1) : 1, n && n(o), o >= 1 && (t(), a = i(), r && ++l >= r)) return f();
			_c(u)
		}
	}

	function d(_) {
		!_ && p(), a = i() - (_ ? o * e : 0), c = !1, _c(u)
	}

	function f() {
		c = !0
	}

	function b() {
		a = i(), o = 0, n && n(o)
	}

	function p() {
		s && cancelAnimationFrame(s), o = 0, s = 0, c = !0
	}

	function h(_) {
		e = _
	}

	function m() {
		return c
	}
	return {
		start: d,
		rewind: b,
		pause: f,
		cancel: p,
		set: h,
		isPaused: m
	}
}

function $3(e) {
	var t = e;

	function n(i) {
		t = i
	}

	function r(i) {
		return Yo(lr(i), t)
	}
	return {
		set: n,
		is: r
	}
}

function I3(e, t) {
	var n;

	function r() {
		n || (n = ia(t || 0, function() {
			e(), n = null
		}, null, 1), n.start())
	}
	return r
}

function O3(e, t, n) {
	var r = e.state,
		i = n.breakpoints || {},
		a = n.reducedMotion || {},
		o = F1(),
		s = [];

	function c() {
		var p = n.mediaQuery === "min";
		Ii(i).sort(function(h, m) {
			return p ? +h - +m : +m - +h
		}).forEach(function(h) {
			u(i[h], "(" + (p ? "min" : "max") + "-width:" + h + "px)")
		}), u(a, bc), d()
	}

	function l(p) {
		p && o.destroy()
	}

	function u(p, h) {
		var m = matchMedia(h);
		o.bind(m, "change", d), s.push([p, m])
	}

	function d() {
		var p = r.is($i),
			h = n.direction,
			m = s.reduce(function(_, v) {
				return Zt(_, v[1].matches ? v[0] : {})
			}, {});
		yc(n), b(m), n.destroy ? e.destroy(n.destroy === "completely") : p ? (l(!0), e.mount()) : h !== n.direction && e.refresh()
	}

	function f(p) {
		matchMedia(bc).matches && (p ? Zt(n, a) : yc(n, Ii(a)))
	}

	function b(p, h) {
		Zt(n, p), h && Zt(Object.getPrototypeOf(n), p), r.is(Gn) || e.emit(Ne, n)
	}
	return {
		setup: c,
		destroy: l,
		reduce: f,
		set: b
	}
}
var aa = "Arrow",
	oa = aa + "Left",
	sa = aa + "Right",
	nu = aa + "Up",
	ru = aa + "Down",
	Cc = "rtl",
	ca = "ttb",
	La = {
		width: ["height"],
		left: ["top", "right"],
		right: ["bottom", "left"],
		x: ["y"],
		X: ["Y"],
		Y: ["X"],
		ArrowLeft: [nu, sa],
		ArrowRight: [ru, oa]
	};

function U3(e, t, n) {
	function r(a, o, s) {
		s = s || n.direction;
		var c = s === Cc && !o ? 1 : s === ca ? 0 : -1;
		return La[a] && La[a][c] || a.replace(/width|left|right/i, function(l, u) {
			var d = La[l.toLowerCase()][c] || l;
			return u > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d
		})
	}

	function i(a) {
		return a * (n.direction === Cc ? 1 : -1)
	}
	return {
		resolve: r,
		orient: i
	}
}
var St = "role",
	Vn = "tabindex",
	R3 = "disabled",
	gt = "aria-",
	Zr = gt + "controls",
	iu = gt + "current",
	zc = gt + "selected",
	rt = gt + "label",
	ss = gt + "labelledby",
	au = gt + "hidden",
	cs = gt + "orientation",
	Vr = gt + "roledescription",
	Ec = gt + "live",
	Pc = gt + "busy",
	Lc = gt + "atomic",
	ls = [St, Vn, R3, Zr, iu, rt, ss, au, cs, Vr],
	ka = Ve,
	kc = Ve + "__track",
	H3 = Ve + "__list",
	la = Ve + "__slide",
	ou = la + "--clone",
	G3 = la + "__container",
	us = Ve + "__arrows",
	ua = Ve + "__arrow",
	su = ua + "--prev",
	cu = ua + "--next",
	fa = Ve + "__pagination",
	lu = fa + "__page",
	B3 = Ve + "__progress",
	F3 = B3 + "__bar",
	N3 = Ve + "__toggle",
	j3 = Ve + "__spinner",
	D3 = Ve + "__sr",
	V3 = "is-initialized",
	Pn = "is-active",
	uu = "is-prev",
	fu = "is-next",
	so = "is-visible",
	co = "is-loading",
	du = "is-focus-in",
	W3 = [Pn, so, uu, fu, co, du],
	q3 = {
		slide: la,
		clone: ou,
		arrows: us,
		arrow: ua,
		prev: su,
		next: cu,
		pagination: fa,
		page: lu,
		spinner: j3
	};

function K3(e, t) {
	if (I1(e.closest)) return e.closest(t);
	for (var n = e; n && n.nodeType === 1 && !Fr(n, t);) n = n.parentElement;
	return n
}
var Y3 = 5,
	Sc = 200,
	pu = "touchstart mousedown",
	Sa = "touchmove mousemove",
	Ta = "touchend touchcancel mouseup click";

function Z3(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.bind,
		o = e.root,
		s = n.i18n,
		c = {},
		l = [],
		u = [],
		d = [],
		f, b, p;

	function h() {
		g(), w(), v()
	}

	function m() {
		i(Pe, _), i(Pe, h), i(Ne, v), a(document, pu + " keydown", function(U) {
			p = U.type === "keydown"
		}, {
			capture: !0
		}), a(o, "focusin", function() {
			Yt(o, du, !!p)
		})
	}

	function _(U) {
		var M = ls.concat("style");
		Mt(l), Lt(o, u), Lt(f, d), At([f, b], M), At(o, U ? M : ["style", Vr])
	}

	function v() {
		Lt(o, u), Lt(f, d), u = S(ka), d = S(kc), wt(o, u), wt(f, d), ge(o, rt, n.label), ge(o, ss, n.labelledby)
	}

	function g() {
		f = k("." + kc), b = Yr(f, "." + H3), Pr(f && b, "A track/list element is missing."), hi(l, U1(b, "." + la + ":not(." + ou + ")")), wn({
			arrows: us,
			pagination: fa,
			prev: su,
			next: cu,
			bar: F3,
			toggle: N3
		}, function(U, M) {
			c[M] = k("." + U)
		}), Nr(c, {
			root: o,
			track: f,
			list: b,
			slides: l
		})
	}

	function w() {
		var U = o.id || M3(Ve),
			M = n.role;
		o.id = U, f.id = f.id || U + "-track", b.id = b.id || U + "-list", !ft(o, St) && o.tagName !== "SECTION" && M && ge(o, St, M), ge(o, Vr, s.carousel), ge(b, St, "presentation")
	}

	function k(U) {
		var M = G1(o, U);
		return M && K3(M, "." + ka) === o ? M : void 0
	}

	function S(U) {
		return [U + "--" + n.type, U + "--" + n.direction, n.drag && U + "--draggable", n.isNavigation && U + "--nav", U === ka && Pn]
	}
	return Nr(c, {
		setup: h,
		mount: m,
		destroy: _
	})
}
var er = "slide",
	fr = "loop",
	da = "fade";

function X3(e, t, n, r) {
	var i = Le(e),
		a = i.on,
		o = i.emit,
		s = i.bind,
		c = e.Components,
		l = e.root,
		u = e.options,
		d = u.isNavigation,
		f = u.updateOnMove,
		b = u.i18n,
		p = u.pagination,
		h = u.slideFocus,
		m = c.Direction.resolve,
		_ = ft(r, "style"),
		v = ft(r, rt),
		g = n > -1,
		w = Yr(r, "." + G3),
		k = Xo(r, u.focusableNodes || ""),
		S;

	function U() {
		g || (r.id = l.id + "-slide" + Jo(t + 1), ge(r, St, p ? "tabpanel" : "group"), ge(r, Vr, b.slide), ge(r, rt, v || oo(b.slideLabel, [t + 1, e.length]))), M()
	}

	function M() {
		s(r, "click", Ee(o, es, ne)), s(r, "keydown", Ee(o, q1, ne)), a([ur, N1, Sn], C), a(rs, x), f && a($t, z)
	}

	function A() {
		S = !0, i.destroy(), Lt(r, W3), At(r, ls), ge(r, "style", _), ge(r, rt, v || "")
	}

	function x() {
		var F = e.splides.map(function(T) {
			var E = T.splide.Components.Slides.getAt(t);
			return E ? E.slide.id : ""
		}).join(" ");
		ge(r, rt, oo(b.slideX, (g ? n : t) + 1)), ge(r, Zr, F), ge(r, St, h ? "button" : ""), h && At(r, Vr)
	}

	function z() {
		S || C()
	}

	function C() {
		if (!S) {
			var F = e.index;
			L(), I(), Yt(r, uu, t === F - 1), Yt(r, fu, t === F + 1)
		}
	}

	function L() {
		var F = $();
		F !== xc(r, Pn) && (Yt(r, Pn, F), ge(r, iu, d && F || ""), o(F ? j1 : D1, ne))
	}

	function I() {
		var F = j(),
			T = !F && (!$() || g);
		if (e.state.is([cr, qr]) || ge(r, au, T || ""), ge(k, Vn, T ? -1 : ""), h && ge(r, Vn, T ? -1 : 0), F !== xc(r, so) && (Yt(r, so, F), o(F ? V1 : W1, ne)), !F && document.activeElement === r) {
			var E = c.Slides.getAt(e.index);
			E && R1(E.slide)
		}
	}

	function N(F, T, E) {
		qe(E && w || r, F, T)
	}

	function $() {
		var F = e.index;
		return F === t || u.cloneStatus && F === n
	}

	function j() {
		if (e.is(da)) return $();
		var F = Ke(c.Elements.track),
			T = Ke(r),
			E = m("left", !0),
			R = m("right", !0);
		return Ui(F[E]) <= Dr(T[E]) && Ui(T[R]) <= Dr(F[R])
	}

	function q(F, T) {
		var E = De(F - t);
		return !g && (u.rewind || e.is(fr)) && (E = Jn(E, e.length - E)), E <= T
	}
	var ne = {
		index: t,
		slideIndex: n,
		slide: r,
		container: w,
		isClone: g,
		mount: U,
		destroy: A,
		update: C,
		style: N,
		isWithin: q
	};
	return ne
}

function Q3(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.emit,
		o = r.bind,
		s = t.Elements,
		c = s.slides,
		l = s.list,
		u = [];

	function d() {
		f(), i(Pe, b), i(Pe, f), i([Ot, Pe], function() {
			u.sort(function(z, C) {
				return z.index - C.index
			})
		})
	}

	function f() {
		c.forEach(function(z, C) {
			h(z, C, -1)
		})
	}

	function b() {
		k(function(z) {
			z.destroy()
		}), Mt(u)
	}

	function p() {
		k(function(z) {
			z.update()
		})
	}

	function h(z, C, L) {
		var I = X3(e, C, L, z);
		I.mount(), u.push(I)
	}

	function m(z) {
		return z ? S(function(C) {
			return !C.isClone
		}) : u
	}

	function _(z) {
		var C = t.Controller,
			L = C.toIndex(z),
			I = C.hasFocus() ? 1 : n.perPage;
		return S(function(N) {
			return vi(N.index, L, L + I - 1)
		})
	}

	function v(z) {
		return S(z)[0]
	}

	function g(z, C) {
		pt(z, function(L) {
			if (on(L) && (L = H1(L)), O1(L)) {
				var I = c[C];
				I ? Zo(L, I) : Kr(l, L), wt(L, n.classes.slide), M(L, Ee(a, En))
			}
		}), a(Pe)
	}

	function w(z) {
		zn(S(z).map(function(C) {
			return C.slide
		})), a(Pe)
	}

	function k(z, C) {
		m(C).forEach(z)
	}

	function S(z) {
		return u.filter(I1(z) ? z : function(C) {
			return on(z) ? Fr(C.slide, z) : Yo(lr(z), C.index)
		})
	}

	function U(z, C, L) {
		k(function(I) {
			I.style(z, C, L)
		})
	}

	function M(z, C) {
		var L = Xo(z, "img"),
			I = L.length;
		I ? L.forEach(function(N) {
			o(N, "load error", function() {
				--I || C()
			})
		}) : C()
	}

	function A(z) {
		return z ? c.length : u.length
	}

	function x() {
		return u.length > n.perPage
	}
	return {
		mount: d,
		destroy: b,
		update: p,
		register: h,
		get: m,
		getIn: _,
		getAt: v,
		add: g,
		remove: w,
		forEach: k,
		filter: S,
		style: U,
		getLength: A,
		isEnough: x
	}
}

function J3(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.bind,
		o = r.emit,
		s = t.Slides,
		c = t.Direction.resolve,
		l = t.Elements,
		u = l.root,
		d = l.track,
		f = l.list,
		b = s.getAt,
		p = s.style,
		h, m;

	function _() {
		v(), a(window, "resize load", I3(Ee(o, En))), i([Ne, Pe], v), i(En, g)
	}

	function v() {
		m = null, h = n.direction === ca, qe(u, "maxWidth", Dt(n.width)), qe(d, c("paddingLeft"), w(!1)), qe(d, c("paddingRight"), w(!0)), g()
	}

	function g() {
		var $ = Ke(u);
		(!m || m.width !== $.width || m.height !== $.height) && (qe(d, "height", k()), p(c("marginRight"), Dt(n.gap)), p("width", U()), p("height", M(), !0), m = $, o(ts))
	}

	function w($) {
		var j = n.padding,
			q = c($ ? "right" : "left");
		return j && Dt(j[q] || (Br(j) ? 0 : j)) || "0px"
	}

	function k() {
		var $ = "";
		return h && ($ = S(), Pr($, "height or heightRatio is missing."), $ = "calc(" + $ + " - " + w(!1) + " - " + w(!0) + ")"), $
	}

	function S() {
		return Dt(n.height || Ke(f).width * n.heightRatio)
	}

	function U() {
		return n.autoWidth ? null : Dt(n.fixedWidth) || (h ? "" : A())
	}

	function M() {
		return Dt(n.fixedHeight) || (h ? n.autoHeight ? null : A() : S())
	}

	function A() {
		var $ = Dt(n.gap);
		return "calc((100%" + ($ && " + " + $) + ")/" + (n.perPage || 1) + ($ && " - " + $) + ")"
	}

	function x() {
		return Ke(f)[c("width")]
	}

	function z($, j) {
		var q = b($ || 0);
		return q ? Ke(q.slide)[c("width")] + (j ? 0 : I()) : 0
	}

	function C($, j) {
		var q = b($);
		if (q) {
			var ne = Ke(q.slide)[c("right")],
				F = Ke(f)[c("left")];
			return De(ne - F) + (j ? 0 : I())
		}
		return 0
	}

	function L() {
		return C(e.length - 1, !0) - C(-1, !0)
	}

	function I() {
		var $ = b(0);
		return $ && parseFloat(qe($.slide, c("marginRight"))) || 0
	}

	function N($) {
		return parseFloat(qe(d, c("padding" + ($ ? "Right" : "Left")))) || 0
	}
	return {
		mount: _,
		listSize: x,
		slideSize: z,
		sliderSize: L,
		totalSize: C,
		getPadding: N
	}
}
var e5 = 2;

function t5(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.emit,
		o = t.Elements,
		s = t.Slides,
		c = t.Direction.resolve,
		l = [],
		u;

	function d() {
		f(), i(Pe, b), i(Pe, f), i([Ne, En], p)
	}

	function f() {
		(u = _()) && (h(u), a(En))
	}

	function b() {
		zn(l), Mt(l)
	}

	function p() {
		u < _() && a(Pe)
	}

	function h(v) {
		var g = s.get().slice(),
			w = g.length;
		if (w) {
			for (; g.length < v;) hi(g, g);
			hi(g.slice(-v), g.slice(0, v)).forEach(function(k, S) {
				var U = S < v,
					M = m(k.slide, S);
				U ? Zo(M, g[0].slide) : Kr(o.list, M), hi(l, M), s.register(M, S - v + (U ? 0 : w), k.index)
			})
		}
	}

	function m(v, g) {
		var w = v.cloneNode(!0);
		return wt(w, n.classes.clone), w.id = e.root.id + "-clone" + Jo(g + 1), w
	}

	function _() {
		var v = n.clones;
		if (!e.is(fr)) v = 0;
		else if (!v) {
			var g = n[c("fixedWidth")] && t.Layout.slideSize(0),
				w = g && Dr(Ke(o.track)[c("width")] / g);
			v = w || n[c("autoWidth")] && e.length || n.perPage * e5
		}
		return v
	}
	return {
		mount: d,
		destroy: b
	}
}

function n5(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.emit,
		o = e.state.set,
		s = t.Layout,
		c = s.slideSize,
		l = s.getPadding,
		u = s.totalSize,
		d = s.listSize,
		f = s.sliderSize,
		b = t.Direction,
		p = b.resolve,
		h = b.orient,
		m = t.Elements,
		_ = m.list,
		v = m.track,
		g;

	function w() {
		g = t.Transition, i([Ot, ts, Ne, Pe], k)
	}

	function k() {
		t.Controller.isBusy() || (t.Scroll.cancel(), U(e.index), t.Slides.update())
	}

	function S(F, T, E, R) {
		F !== T && q(F > E) && (z(), M(x(I(), F > E), !0)), o(cr), a($t, T, E, F), g.start(T, function() {
			o(Qn), a(ur, T, E, F), R && R()
		})
	}

	function U(F) {
		M(L(F, !0))
	}

	function M(F, T) {
		if (!e.is(da)) {
			var E = T ? F : A(F);
			qe(_, "transform", "translate" + p("X") + "(" + E + "px)"), F !== E && a(N1)
		}
	}

	function A(F) {
		if (e.is(fr)) {
			var T = C(F),
				E = T > t.Controller.getEnd(),
				R = T < 0;
			(R || E) && (F = x(F, E))
		}
		return F
	}

	function x(F, T) {
		var E = F - j(T),
			R = f();
		return F -= h(R * (Dr(De(E) / R) || 1)) * (T ? 1 : -1), F
	}

	function z() {
		M(I()), g.cancel()
	}

	function C(F) {
		for (var T = t.Slides.get(), E = 0, R = 1 / 0, B = 0; B < T.length; B++) {
			var H = T[B].index,
				Z = De(L(H, !0) - F);
			if (Z <= R) R = Z, E = H;
			else break
		}
		return E
	}

	function L(F, T) {
		var E = h(u(F - 1) - $(F));
		return T ? N(E) : E
	}

	function I() {
		var F = p("left");
		return Ke(_)[F] - Ke(v)[F] + h(l(!1))
	}

	function N(F) {
		return n.trimSpace && e.is(er) && (F = _r(F, 0, h(f() - d()))), F
	}

	function $(F) {
		var T = n.focus;
		return T === "center" ? (d() - c(F, !0)) / 2 : +T * c(F) || 0
	}

	function j(F) {
		return L(F ? t.Controller.getEnd() : 0, !!n.trimSpace)
	}

	function q(F) {
		var T = h(x(I(), F));
		return F ? T >= 0 : T <= _[p("scrollWidth")] - Ke(v)[p("width")]
	}

	function ne(F, T) {
		T = na(T) ? I() : T;
		var E = F !== !0 && h(T) < h(j(!1)),
			R = F !== !1 && h(T) > h(j(!0));
		return E || R
	}
	return {
		mount: w,
		move: S,
		jump: U,
		translate: M,
		shift: x,
		cancel: z,
		toIndex: C,
		toPosition: L,
		getPosition: I,
		getLimit: j,
		exceededLimit: ne,
		reposition: k
	}
}

function r5(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = t.Move,
		o = a.getPosition,
		s = a.getLimit,
		c = a.toPosition,
		l = t.Slides,
		u = l.isEnough,
		d = l.getLength,
		f = e.is(fr),
		b = e.is(er),
		p = Ee(x, !1),
		h = Ee(x, !0),
		m = n.start || 0,
		_ = m,
		v, g, w;

	function k() {
		S(), i([Ne, Pe], S)
	}

	function S() {
		v = d(!0), g = n.perMove, w = n.perPage;
		var E = _r(m, 0, v - 1);
		E !== m && (m = E, a.reposition())
	}

	function U(E, R, B) {
		if (!T()) {
			var H = A(E),
				Z = L(H);
			Z > -1 && (R || Z !== m) && (q(Z), a.move(H, Z, _, B))
		}
	}

	function M(E, R, B, H) {
		t.Scroll.scroll(E, R, B, function() {
			q(L(a.toIndex(o()))), H && H()
		})
	}

	function A(E) {
		var R = m;
		if (on(E)) {
			var B = E.match(/([+\-<>])(\d+)?/) || [],
				H = B[1],
				Z = B[2];
			H === "+" || H === "-" ? R = z(m + +("" + H + (+Z || 1)), m) : H === ">" ? R = Z ? N(+Z) : p(!0) : H === "<" && (R = h(!0))
		} else R = f ? E : _r(E, 0, I());
		return R
	}

	function x(E, R) {
		var B = g || (F() ? 1 : w),
			H = z(m + B * (E ? -1 : 1), m, !(g || F()));
		return H === -1 && b && !B1(o(), s(!E), 1) ? E ? 0 : I() : R ? H : L(H)
	}

	function z(E, R, B) {
		if (u()) {
			var H = I(),
				Z = C(E);
			Z !== E && (R = E, E = Z, B = !1), E < 0 || E > H ? !g && (vi(0, E, R, !0) || vi(H, R, E, !0)) ? E = N($(E)) : f ? E = B ? E < 0 ? -(v % w || w) : v : E : n.rewind ? E = E < 0 ? H : 0 : E = -1 : B && E !== R && (E = N($(R) + (E < R ? -1 : 1)))
		} else E = -1;
		return E
	}

	function C(E) {
		if (b && n.trimSpace === "move" && E !== m)
			for (var R = o(); R === c(E, !0) && vi(E, 0, e.length - 1, !n.rewind);) E < m ? --E : ++E;
		return E
	}

	function L(E) {
		return f ? (E + v) % v || 0 : E
	}

	function I() {
		return jr(v - (F() || f && g ? 1 : w), 0)
	}

	function N(E) {
		return _r(F() ? E : w * E, 0, I())
	}

	function $(E) {
		return F() ? E : Ui((E >= I() ? v - 1 : E) / w)
	}

	function j(E) {
		var R = a.toIndex(E);
		return b ? _r(R, 0, I()) : R
	}

	function q(E) {
		E !== m && (_ = m, m = E)
	}

	function ne(E) {
		return E ? _ : m
	}

	function F() {
		return !na(n.focus) || n.isNavigation
	}

	function T() {
		return e.state.is([cr, qr]) && !!n.waitForTransition
	}
	return {
		mount: k,
		go: U,
		scroll: M,
		getNext: p,
		getPrev: h,
		getAdjacent: x,
		getEnd: I,
		setIndex: q,
		getIndex: ne,
		toIndex: N,
		toPage: $,
		toDest: j,
		hasFocus: F,
		isBusy: T
	}
}
var i5 = "http://www.w3.org/2000/svg",
	a5 = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
	ri = 40;

function o5(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.bind,
		o = r.emit,
		s = n.classes,
		c = n.i18n,
		l = t.Elements,
		u = t.Controller,
		d = l.arrows,
		f = l.track,
		b = d,
		p = l.prev,
		h = l.next,
		m, _, v = {};

	function g() {
		k(), i(Ne, w)
	}

	function w() {
		S(), g()
	}

	function k() {
		var C = n.arrows;
		C && !(p && h) && A(), p && h && (Nr(v, {
			prev: p,
			next: h
		}), Oi(b, C ? "" : "none"), wt(b, _ = us + "--" + n.direction), C && (U(), z(), ge([p, h], Zr, f.id), o(X1, p, h)))
	}

	function S() {
		r.destroy(), Lt(b, _), m ? (zn(d ? [p, h] : b), p = h = null) : At([p, h], ls)
	}

	function U() {
		i([ur, Pe, Sn], z), a(h, "click", Ee(M, ">")), a(p, "click", Ee(M, "<"))
	}

	function M(C) {
		u.go(C, !0)
	}

	function A() {
		b = d || Dn("div", s.arrows), p = x(!0), h = x(!1), m = !0, Kr(b, [p, h]), !d && Zo(b, f)
	}

	function x(C) {
		var L = '<button class="' + s.arrow + " " + (C ? s.prev : s.next) + '" type="button"><svg xmlns="' + i5 + '" viewBox="0 0 ' + ri + " " + ri + '" width="' + ri + '" height="' + ri + '" focusable="false"><path d="' + (n.arrowPath || a5) + '" />';
		return H1(L)
	}

	function z() {
		var C = e.index,
			L = u.getPrev(),
			I = u.getNext(),
			N = L > -1 && C < L ? c.last : c.prev,
			$ = I > -1 && C > I ? c.first : c.next;
		p.disabled = L < 0, h.disabled = I < 0, ge(p, rt, N), ge(h, rt, $), o(Q1, p, h, L, I)
	}
	return {
		arrows: v,
		mount: g,
		destroy: S
	}
}
var s5 = Qo + "-interval";

function c5(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.bind,
		o = r.emit,
		s = ia(n.interval, e.go.bind(e, ">"), U),
		c = s.isPaused,
		l = t.Elements,
		u = t.Elements,
		d = u.root,
		f = u.toggle,
		b = n.autoplay,
		p, h, m = b === "pause";

	function _() {
		b && (v(), f && ge(f, Zr, l.track.id), m || g(), S())
	}

	function v() {
		n.pauseOnHover && a(d, "mouseenter mouseleave", function(A) {
			p = A.type === "mouseenter", k()
		}), n.pauseOnFocus && a(d, "focusin focusout", function(A) {
			h = A.type === "focusin", k()
		}), f && a(f, "click", function() {
			m ? g() : w(!0)
		}), i([$t, ra, Pe], s.rewind), i($t, M)
	}

	function g() {
		c() && t.Slides.isEnough() && (s.start(!n.resetProgress), h = p = m = !1, S(), o(is))
	}

	function w(A) {
		A === void 0 && (A = !0), m = !!A, S(), c() || (s.pause(), o(as))
	}

	function k() {
		m || (p || h ? w(!1) : g())
	}

	function S() {
		f && (Yt(f, Pn, !m), ge(f, rt, n.i18n[m ? "play" : "pause"]))
	}

	function U(A) {
		var x = l.bar;
		x && qe(x, "width", A * 100 + "%"), o(tu, A)
	}

	function M(A) {
		var x = t.Slides.getAt(A);
		s.set(x && +ft(x.slide, s5) || n.interval)
	}
	return {
		mount: _,
		destroy: s.cancel,
		play: g,
		pause: w,
		isPaused: c
	}
}

function l5(e, t, n) {
	var r = Le(e),
		i = r.on;

	function a() {
		n.cover && (i(os, Ee(s, !0)), i([Ot, Ne, Pe], Ee(o, !0)))
	}

	function o(c) {
		t.Slides.forEach(function(l) {
			var u = Yr(l.container || l.slide, "img");
			u && u.src && s(c, u, l)
		})
	}

	function s(c, l, u) {
		u.style("background", c ? 'center/cover no-repeat url("' + l.src + '")' : "", !0), Oi(l, c ? "none" : "")
	}
	return {
		mount: a,
		destroy: Ee(o, !1)
	}
}
var u5 = 10,
	f5 = 600,
	d5 = .6,
	p5 = 1.5,
	h5 = 800;

function v5(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.emit,
		o = e.state.set,
		s = t.Move,
		c = s.getPosition,
		l = s.getLimit,
		u = s.exceededLimit,
		d = s.translate,
		f, b, p = 1;

	function h() {
		i($t, g), i([Ne, Pe], w)
	}

	function m(S, U, M, A, x) {
		var z = c();
		if (g(), M) {
			var C = t.Layout.sliderSize(),
				L = ao(S) * C * Ui(De(S) / C) || 0;
			S = s.toPosition(t.Controller.toDest(S % C)) + L
		}
		var I = B1(z, S, 1);
		p = 1, U = I ? 0 : U || jr(De(S - z) / p5, h5), b = A, f = ia(U, _, Ee(v, z, S, x), 1), o(qr), a(ra), f.start()
	}

	function _() {
		o(Qn), b && b(), a(Sn)
	}

	function v(S, U, M, A) {
		var x = c(),
			z = S + (U - S) * k(A),
			C = (z - x) * p;
		d(x + C), e.is(er) && !M && u() && (p *= d5, De(C) < u5 && m(l(u(!0)), f5, !1, b, !0))
	}

	function g() {
		f && f.cancel()
	}

	function w() {
		f && !f.isPaused() && (g(), _())
	}

	function k(S) {
		var U = n.easingFunc;
		return U ? U(S) : 1 - Math.pow(1 - S, 4)
	}
	return {
		mount: h,
		destroy: g,
		scroll: m,
		cancel: w
	}
}
var Rn = {
	passive: !1,
	capture: !0
};

function g5(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.emit,
		o = r.bind,
		s = r.unbind,
		c = e.state,
		l = t.Move,
		u = t.Scroll,
		d = t.Controller,
		f = t.Elements.track,
		b = t.Media.reduce,
		p = t.Direction,
		h = p.resolve,
		m = p.orient,
		_ = l.getPosition,
		v = l.exceededLimit,
		g, w, k, S, U, M = !1,
		A, x, z;

	function C() {
		o(f, Sa, ro, Rn), o(f, Ta, ro, Rn), o(f, pu, I, Rn), o(f, "click", j, {
			capture: !0
		}), o(f, "dragstart", Et), i([Ot, Ne], L)
	}

	function L() {
		var y = n.drag;
		pe(!y), S = y === "free"
	}

	function I(y) {
		if (A = !1, !x) {
			var P = oe(y);
			se(y.target) && (P || !y.button) && (d.isBusy() ? Et(y, !0) : (z = P ? f : window, U = c.is([cr, qr]), k = null, o(z, Sa, N, Rn), o(z, Ta, $, Rn), l.cancel(), u.cancel(), q(y)))
		}
	}

	function N(y) {
		if (c.is(pi) || (c.set(pi), a(K1)), y.cancelable)
			if (U) {
				l.translate(g + Q(B(y)));
				var P = H(y) > Sc,
					G = M !== (M = v());
				(P || G) && q(y), A = !0, a(Y1), Et(y)
			} else T(y) && (U = F(y), Et(y))
	}

	function $(y) {
		c.is(pi) && (c.set(Qn), a(Z1)), U && (ne(y), Et(y)), s(z, Sa, N), s(z, Ta, $), U = !1
	}

	function j(y) {
		!x && A && Et(y, !0)
	}

	function q(y) {
		k = w, w = y, g = _()
	}

	function ne(y) {
		var P = E(y),
			G = R(P),
			V = n.rewind && n.rewindByDrag;
		b(!1), S ? d.scroll(G, 0, n.snap) : e.is(da) ? d.go(m(ao(P)) < 0 ? V ? "<" : "-" : V ? ">" : "+") : e.is(er) && M && V ? d.go(v(!0) ? ">" : "<") : d.go(d.toDest(G), !0), b(!0)
	}

	function F(y) {
		var P = n.dragMinThreshold,
			G = Br(P),
			V = G && P.mouse || 0,
			W = (G ? P.touch : +P) || 10;
		return De(B(y)) > (oe(y) ? W : V)
	}

	function T(y) {
		return De(B(y)) > De(B(y, !0))
	}

	function E(y) {
		if (e.is(fr) || !M) {
			var P = H(y);
			if (P && P < Sc) return B(y) / P
		}
		return 0
	}

	function R(y) {
		return _() + ao(y) * Jn(De(y) * (n.flickPower || 600), S ? 1 / 0 : t.Layout.listSize() * (n.flickMaxPages || 1))
	}

	function B(y, P) {
		return Y(y, P) - Y(Z(y), P)
	}

	function H(y) {
		return io(y) - io(Z(y))
	}

	function Z(y) {
		return w === y && k || w
	}

	function Y(y, P) {
		return (oe(y) ? y.changedTouches[0] : y)["page" + h(P ? "Y" : "X")]
	}

	function Q(y) {
		return y / (M && e.is(er) ? Y3 : 1)
	}

	function se(y) {
		var P = n.noDrag;
		return !Fr(y, "." + lu + ", ." + ua) && (!P || !Fr(y, P))
	}

	function oe(y) {
		return typeof TouchEvent != "undefined" && y instanceof TouchEvent
	}

	function re() {
		return U
	}

	function pe(y) {
		x = y
	}
	return {
		mount: C,
		disable: pe,
		isDragging: re
	}
}
var m5 = {
	Spacebar: " ",
	Right: sa,
	Left: oa,
	Up: nu,
	Down: ru
};

function fs(e) {
	return e = on(e) ? e : e.key, m5[e] || e
}
var Tc = "keydown";

function b5(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.bind,
		o = r.unbind,
		s = e.root,
		c = t.Direction.resolve,
		l, u;

	function d() {
		f(), i(Ne, b), i(Ne, f), i($t, h)
	}

	function f() {
		var _ = n.keyboard;
		_ && (l = _ === "global" ? window : s, a(l, Tc, m))
	}

	function b() {
		o(l, Tc)
	}

	function p(_) {
		u = _
	}

	function h() {
		var _ = u;
		u = !0, no(function() {
			u = _
		})
	}

	function m(_) {
		if (!u) {
			var v = fs(_);
			v === c(oa) ? e.go("<") : v === c(sa) && e.go(">")
		}
	}
	return {
		mount: d,
		destroy: b,
		disable: p
	}
}
var Lr = Qo + "-lazy",
	gi = Lr + "-srcset",
	_5 = "[" + Lr + "], [" + gi + "]";

function y5(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.off,
		o = r.bind,
		s = r.emit,
		c = n.lazyLoad === "sequential",
		l = [Ot, Pe, ur, Sn],
		u = [];

	function d() {
		n.lazyLoad && (f(), i(Pe, f), c || i(l, b))
	}

	function f() {
		Mt(u), t.Slides.forEach(function(_) {
			Xo(_.slide, _5).forEach(function(v) {
				var g = ft(v, Lr),
					w = ft(v, gi);
				if (g !== v.src || w !== v.srcset) {
					var k = n.classes.spinner,
						S = v.parentElement,
						U = Yr(S, "." + k) || Dn("span", k, S);
					u.push([v, _, U]), v.src || Oi(v, "none")
				}
			})
		}), c && m()
	}

	function b() {
		u = u.filter(function(_) {
			var v = n.perPage * ((n.preloadPages || 1) + 1) - 1;
			return _[1].isWithin(e.index, v) ? p(_) : !0
		}), u.length || a(l)
	}

	function p(_) {
		var v = _[0];
		wt(_[1].slide, co), o(v, "load error", Ee(h, _)), ge(v, "src", ft(v, Lr)), ge(v, "srcset", ft(v, gi)), At(v, Lr), At(v, gi)
	}

	function h(_, v) {
		var g = _[0],
			w = _[1];
		Lt(w.slide, co), v.type !== "error" && (zn(_[2]), Oi(g, ""), s(os, g, w), s(En)), c && m()
	}

	function m() {
		u.length && p(u.shift())
	}
	return {
		mount: d,
		destroy: Ee(Mt, u)
	}
}

function x5(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = r.emit,
		o = r.bind,
		s = t.Slides,
		c = t.Elements,
		l = t.Controller,
		u = l.hasFocus,
		d = l.getIndex,
		f = l.go,
		b = t.Direction.resolve,
		p = [],
		h, m;

	function _() {
		v(), i([Ne, Pe], _), n.pagination && s.isEnough() && (i([$t, ra, Sn], M), g(), M(), a(J1, {
			list: h,
			items: p
		}, U(e.index)))
	}

	function v() {
		h && (zn(c.pagination ? cn(h.children) : h), Lt(h, m), Mt(p), h = null), r.destroy()
	}

	function g() {
		var A = e.length,
			x = n.classes,
			z = n.i18n,
			C = n.perPage,
			L = u() ? A : Dr(A / C);
		h = c.pagination || Dn("ul", x.pagination, c.track.parentElement), wt(h, m = fa + "--" + S()), ge(h, St, "tablist"), ge(h, rt, z.select), ge(h, cs, S() === ca ? "vertical" : "");
		for (var I = 0; I < L; I++) {
			var N = Dn("li", null, h),
				$ = Dn("button", {
					class: x.page,
					type: "button"
				}, N),
				j = s.getIn(I).map(function(ne) {
					return ne.slide.id
				}),
				q = !u() && C > 1 ? z.pageX : z.slideX;
			o($, "click", Ee(w, I)), n.paginationKeyboard && o($, "keydown", Ee(k, I)), ge(N, St, "presentation"), ge($, St, "tab"), ge($, Zr, j.join(" ")), ge($, rt, oo(q, I + 1)), ge($, Vn, -1), p.push({
				li: N,
				button: $,
				page: I
			})
		}
	}

	function w(A) {
		f(">" + A, !0)
	}

	function k(A, x) {
		var z = p.length,
			C = fs(x),
			L = S(),
			I = -1;
		C === b(sa, !1, L) ? I = ++A % z : C === b(oa, !1, L) ? I = (--A + z) % z : C === "Home" ? I = 0 : C === "End" && (I = z - 1);
		var N = p[I];
		N && (R1(N.button), f(">" + I), Et(x, !0))
	}

	function S() {
		return n.paginationDirection || n.direction
	}

	function U(A) {
		return p[l.toPage(A)]
	}

	function M() {
		var A = U(d(!0)),
			x = U(d());
		if (A) {
			var z = A.button;
			Lt(z, Pn), At(z, zc), ge(z, Vn, -1)
		}
		if (x) {
			var C = x.button;
			wt(C, Pn), ge(C, zc, !0), ge(C, Vn, "")
		}
		a(eu, {
			list: h,
			items: p
		}, A, x)
	}
	return {
		items: p,
		mount: _,
		destroy: v,
		getAt: U,
		update: M
	}
}
var w5 = [" ", "Enter"];

function A5(e, t, n) {
	var r = n.isNavigation,
		i = n.slideFocus,
		a = [];

	function o() {
		e.options = {
			slideFocus: na(i) ? r : i
		}
	}

	function s() {
		e.splides.forEach(function(h) {
			h.isParent || (u(e, h.splide), u(h.splide, e))
		}), r && d()
	}

	function c() {
		a.forEach(function(h) {
			h.destroy()
		}), Mt(a)
	}

	function l() {
		c(), s()
	}

	function u(h, m) {
		var _ = Le(h);
		_.on($t, function(v, g, w) {
			m.go(m.is(fr) ? w : v)
		}), a.push(_)
	}

	function d() {
		var h = Le(e),
			m = h.on;
		m(es, b), m(q1, p), m([Ot, Ne], f), a.push(h), h.emit(rs, e.splides)
	}

	function f() {
		ge(t.Elements.list, cs, n.direction === ca ? "vertical" : "")
	}

	function b(h) {
		e.go(h.index)
	}

	function p(h, m) {
		Yo(w5, fs(m)) && (b(h), Et(m))
	}
	return {
		setup: o,
		mount: s,
		destroy: c,
		remount: l
	}
}

function C5(e, t, n) {
	var r = Le(e),
		i = r.bind,
		a = 0;

	function o() {
		n.wheel && i(t.Elements.track, "wheel", s, Rn)
	}

	function s(l) {
		if (l.cancelable) {
			var u = l.deltaY,
				d = u < 0,
				f = io(l),
				b = n.wheelMinThreshold || 0,
				p = n.wheelSleep || 0;
			De(u) > b && f - a > p && (e.go(d ? "<" : ">"), a = f), c(d) && Et(l)
		}
	}

	function c(l) {
		return !n.releaseWheel || e.state.is(cr) || t.Controller.getAdjacent(l) !== -1
	}
	return {
		mount: o
	}
}
var z5 = 90;

function E5(e, t, n) {
	var r = Le(e),
		i = r.on,
		a = t.Elements.track,
		o = n.live && !n.isNavigation,
		s = Dn("span", D3),
		c = ia(z5, Ee(u, !1));

	function l() {
		o && (f(!t.Autoplay.isPaused()), ge(a, Lc, !0), s.textContent = "\u2026", i(is, Ee(f, !0)), i(as, Ee(f, !1)), i([ur, Sn], Ee(u, !0)))
	}

	function u(b) {
		ge(a, Pc, b), b ? (Kr(a, s), c.start()) : zn(s)
	}

	function d() {
		At(a, [Ec, Lc, Pc]), zn(s)
	}

	function f(b) {
		o && ge(a, Ec, b ? "off" : "polite")
	}
	return {
		mount: l,
		disable: f,
		destroy: d
	}
}
var P5 = Object.freeze({
		__proto__: null,
		Media: O3,
		Direction: U3,
		Elements: Z3,
		Slides: Q3,
		Layout: J3,
		Clones: t5,
		Move: n5,
		Controller: r5,
		Arrows: o5,
		Autoplay: c5,
		Cover: l5,
		Scroll: v5,
		Drag: g5,
		Keyboard: b5,
		LazyLoad: y5,
		Pagination: x5,
		Sync: A5,
		Wheel: C5,
		Live: E5
	}),
	L5 = {
		prev: "Previous slide",
		next: "Next slide",
		first: "Go to first slide",
		last: "Go to last slide",
		slideX: "Go to slide %s",
		pageX: "Go to page %s",
		play: "Start autoplay",
		pause: "Pause autoplay",
		carousel: "carousel",
		slide: "slide",
		select: "Select a slide to show",
		slideLabel: "%s of %s"
	},
	k5 = {
		type: "slide",
		role: "region",
		speed: 400,
		perPage: 1,
		cloneStatus: !0,
		arrows: !0,
		pagination: !0,
		paginationKeyboard: !0,
		interval: 5e3,
		pauseOnHover: !0,
		pauseOnFocus: !0,
		resetProgress: !0,
		easing: "cubic-bezier(0.25, 1, 0.5, 1)",
		drag: !0,
		direction: "ltr",
		trimSpace: !0,
		focusableNodes: "a, button, textarea, input, select, iframe",
		live: !0,
		classes: q3,
		i18n: L5,
		reducedMotion: {
			speed: 0,
			rewindSpeed: 0,
			autoplay: "pause"
		}
	};

function S5(e, t, n) {
	var r = Le(e),
		i = r.on;

	function a() {
		i([Ot, Pe], function() {
			no(function() {
				t.Slides.style("transition", "opacity " + n.speed + "ms " + n.easing)
			})
		})
	}

	function o(s, c) {
		var l = t.Elements.track;
		qe(l, "height", Dt(Ke(l).height)), no(function() {
			c(), qe(l, "height", "")
		})
	}
	return {
		mount: a,
		start: o,
		cancel: ro
	}
}

function T5(e, t, n) {
	var r = Le(e),
		i = r.bind,
		a = t.Move,
		o = t.Controller,
		s = t.Scroll,
		c = t.Elements.list,
		l = Ee(qe, c, "transition"),
		u;

	function d() {
		i(c, "transitionend", function(h) {
			h.target === c && u && (b(), u())
		})
	}

	function f(h, m) {
		var _ = a.toPosition(h, !0),
			v = a.getPosition(),
			g = p(h);
		De(_ - v) >= 1 && g >= 1 ? n.useScroll ? s.scroll(_, g, !1, m) : (l("transform " + g + "ms " + n.easing), a.translate(_, !0), u = m) : (a.jump(h), m())
	}

	function b() {
		l(""), s.cancel()
	}

	function p(h) {
		var m = n.rewindSpeed;
		if (e.is(er) && m) {
			var _ = o.getIndex(!0),
				v = o.getEnd();
			if (_ === 0 && h >= v || _ >= v && h === 0) return m
		}
		return n.speed
	}
	return {
		mount: d,
		start: f,
		cancel: b
	}
}
var M5 = function() {
		function e(n, r) {
			this.event = Le(), this.Components = {}, this.state = $3(Gn), this.splides = [], this._o = {}, this._E = {};
			var i = on(n) ? G1(document, n) : n;
			Pr(i, i + " is invalid."), this.root = i, r = Zt({
				label: ft(i, rt) || "",
				labelledby: ft(i, ss) || ""
			}, k5, e.defaults, r || {});
			try {
				Zt(r, JSON.parse(ft(i, Qo)))
			} catch {
				Pr(!1, "Invalid JSON")
			}
			this._o = Object.create(Zt({}, r))
		}
		var t = e.prototype;
		return t.mount = function(r, i) {
			var a = this,
				o = this.state,
				s = this.Components;
			Pr(o.is([Gn, $i]), "Already mounted!"), o.set(Gn), this._C = s, this._T = i || this._T || (this.is(da) ? S5 : T5), this._E = r || this._E;
			var c = Nr({}, P5, this._E, {
				Transition: this._T
			});
			return wn(c, function(l, u) {
				var d = l(a, s, a._o);
				s[u] = d, d.setup && d.setup()
			}), wn(s, function(l) {
				l.mount && l.mount()
			}), this.emit(Ot), wt(this.root, V3), o.set(Qn), this.emit(Ac), this
		}, t.sync = function(r) {
			return this.splides.push({
				splide: r
			}), r.splides.push({
				splide: this,
				isParent: !0
			}), this.state.is(Qn) && (this._C.Sync.remount(), r.Components.Sync.remount()), this
		}, t.go = function(r) {
			return this._C.Controller.go(r), this
		}, t.on = function(r, i) {
			return this.event.on(r, i), this
		}, t.off = function(r) {
			return this.event.off(r), this
		}, t.emit = function(r) {
			var i;
			return (i = this.event).emit.apply(i, [r].concat(cn(arguments, 1))), this
		}, t.add = function(r, i) {
			return this._C.Slides.add(r, i), this
		}, t.remove = function(r) {
			return this._C.Slides.remove(r), this
		}, t.is = function(r) {
			return this._o.type === r
		}, t.refresh = function() {
			return this.emit(Pe), this
		}, t.destroy = function(r) {
			r === void 0 && (r = !0);
			var i = this.event,
				a = this.state;
			return a.is(Gn) ? Le(this).on(Ac, this.destroy.bind(this, r)) : (wn(this._C, function(o) {
				o.destroy && o.destroy(r)
			}, !0), i.emit(ns), i.destroy(), r && Mt(this.splides), a.set($i)), this
		}, k3(e, [{
			key: "options",
			get: function() {
				return this._o
			},
			set: function(r) {
				this._C.Media.set(r, !0)
			}
		}, {
			key: "length",
			get: function() {
				return this._C.Slides.getLength(!0)
			}
		}, {
			key: "index",
			get: function() {
				return this._C.Controller.getIndex()
			}
		}]), e
	}(),
	ds = M5;
ds.defaults = {};
ds.STATES = T3;
const Mc = [j1, X1, Q1, as, is, tu, es, ns, K1, Z1, Y1, W1, D1, os, Ot, $t, ur, rs, J1, eu, Pe, En, ts, ra, Sn, Ne, V1],
	hu = "splide";

function $c(e) {
	return e !== null && typeof e == "object"
}

function $5(e, t) {
	if (e) {
		const n = Object.keys(e);
		for (let r = 0; r < n.length; r++) {
			const i = n[r];
			if (i !== "__proto__" && t(e[i], i) === !1) break
		}
	}
	return e
}

function vu(e, t) {
	const n = e;
	return $5(t, (r, i) => {
		Array.isArray(r) ? n[i] = r.slice() : $c(r) ? n[i] = vu($c(n[i]) ? n[i] : {}, r) : n[i] = r
	}), n
}
var ps = (e, t) => {
	const n = e.__vccOpts || e;
	for (const [r, i] of t) n[r] = i;
	return n
};
const I5 = ar({
		name: "SplideTrack",
		setup() {
			Sl(() => {
				var e;
				const t = Fe(hu);
				(e = t == null ? void 0 : t.value) == null || e.refresh()
			})
		}
	}),
	O5 = {
		class: "splide__track"
	},
	U5 = {
		class: "splide__list"
	};

function R5(e, t, n, r, i, a) {
	return ue(), be("div", O5, [O("ul", U5, [xi(e.$slots, "default")])])
}
var H5 = ps(I5, [
	["render", R5]
]);
const G5 = ar({
	name: "Splide",
	emits: Mc.map(e => `splide:${e}`),
	components: {
		SplideTrack: H5
	},
	props: {
		tag: {
			default: "div",
			type: String
		},
		options: {
			default: {},
			type: Object
		},
		extensions: Object,
		transition: Function,
		hasTrack: {
			default: !0,
			type: Boolean
		}
	},
	setup(e, t) {
		const n = ie(),
			r = ie();
		ht(() => {
			r.value && (n.value = new ds(r.value, e.options), c(n.value), n.value.mount(e.extensions, e.transition))
		}), or(() => {
			var l;
			(l = n.value) == null || l.destroy()
		}), _n(() => vu({}, e.options), l => {
			n.value && (n.value.options = l)
		}, {
			deep: !0
		}), Jt(hu, n);
		const i = Re(() => {
				var l;
				return ((l = n.value) == null ? void 0 : l.index) || 0
			}),
			a = Re(() => {
				var l;
				return ((l = n.value) == null ? void 0 : l.length) || 0
			});

		function o(l) {
			var u;
			(u = n.value) == null || u.go(l)
		}

		function s(l) {
			var u;
			(u = n.value) == null || u.sync(l)
		}

		function c(l) {
			Mc.forEach(u => {
				l.on(u, (...d) => {
					t.emit(`splide:${u}`, l, ...d)
				})
			})
		}
		return {
			splide: n,
			root: r,
			index: i,
			length: a,
			go: o,
			sync: s
		}
	}
});

function B5(e, t, n, r, i, a) {
	const o = Zi("SplideTrack");
	return ue(), Ie(ko(e.tag), {
		class: "splide",
		ref: "root"
	}, {
		default: Qe(() => [e.hasTrack ? (ue(), Ie(o, {
			key: 0
		}, {
			default: Qe(() => [xi(e.$slots, "default")]),
			_: 3
		})) : xi(e.$slots, "default", {
			key: 1
		})]),
		_: 3
	}, 512)
}
var gu = ps(G5, [
	["render", B5]
]);
const F5 = ar({
		name: "SplideSlide"
	}),
	N5 = {
		class: "splide__slide"
	};

function j5(e, t, n, r, i, a) {
	return ue(), be("li", N5, [xi(e.$slots, "default")])
}
var mu = ps(F5, [
	["render", j5]
]);
const D5 = e => (Ct("data-v-7cb8c0d9"), e = e(), zt(), e),
	V5 = {
		class: "content"
	},
	W5 = {
		class: "caption"
	},
	q5 = ["innerHTML"],
	K5 = {
		class: "prizesList"
	},
	Y5 = {
		class: "prize-img"
	},
	Z5 = {
		class: "prize-content"
	},
	X5 = {
		class: "tier"
	},
	Q5 = {
		class: "points"
	},
	J5 = D5(() => O("div", {
		class: "separator"
	}, null, -1)),
	eh = {
		class: "name"
	},
	th = {
		class: "slider"
	},
	nh = ["innerHTML"],
	rh = {
		class: "background"
	},
	ih = ["src"],
	ah = {
		class: "slide__content"
	},
	oh = {
		class: "slide__left"
	},
	sh = {
		class: "slide__right"
	},
	ch = {
		class: "product__title__container"
	},
	lh = ["innerHTML"],
	uh = {
		class: "product__features"
	},
	fh = ["innerHTML"],
	dh = {
		__name: "Prizes",
		setup(e) {
			const t = ie(),
				n = D.$l("prizes.prize").filter(Boolean),
				r = Object.keys(D.$l("products")).map(c => Rt({
					id: c
				}, D.$l("products")[c])),
				i = tn.select(jn({
					"/src/assets/images/prizes_slider_bg.jpg": x3
				})),
				a = jn({
					"/src/assets/images/tiers/tier1.avif": z1,
					"/src/assets/images/tiers/tier1.png": E1,
					"/src/assets/images/tiers/tier1.webp": P1,
					"/src/assets/images/tiers/tier2.avif": L1,
					"/src/assets/images/tiers/tier2.png": k1,
					"/src/assets/images/tiers/tier2.webp": S1,
					"/src/assets/images/tiers/tier3.avif": T1,
					"/src/assets/images/tiers/tier3.png": M1,
					"/src/assets/images/tiers/tier3.webp": $1
				});
			for (let c in a) a[c] = tn.select(a[c]);
			const o = jn({
				"/src/assets/images/products/aegis.avif": U2,
				"/src/assets/images/products/aegis.png": H2,
				"/src/assets/images/products/aegis.webp": B2,
				"/src/assets/images/products/codex.avif": N2,
				"/src/assets/images/products/codex.png": D2,
				"/src/assets/images/products/codex.webp": W2,
				"/src/assets/images/products/infinite.avif": K2,
				"/src/assets/images/products/infinite.png": Z2,
				"/src/assets/images/products/infinite.webp": Q2,
				"/src/assets/images/products/meta.avif": e3,
				"/src/assets/images/products/meta.png": n3,
				"/src/assets/images/products/meta.webp": i3,
				"/src/assets/images/products/trident.avif": o3,
				"/src/assets/images/products/trident.png": c3,
				"/src/assets/images/products/trident.webp": u3
			});
			for (let c in o) o[c] = tn.select(o[c]);
			Y0(() => {
				const c = t.value;
				if (!c) return;
				const l = c.getBoundingClientRect();
				c.style.position = "absolute", c.style.height = l.height + "px", c.style.width = l.width + "px", c.style.top = l.top + "px"
			});
			async function s() {
				_1(), D.$analytics.event("play_game")
			}
			return D.$router.onViewEnter(async () => {
				D.$analytics.pageview("/prizes", "Prizes & Series"), await D.$transition.ensureVisible(), t.value.classList.add("active"), D.$webgl.game.setState("DEFAULT")
			}), D.$router.onViewLeave(async () => {
				await D.$transition.ensureVisible(), t.value.classList.remove("active")
			}), (c, l) => (ue(), be("section", {
				ref_key: "pagePrize",
				ref: t,
				class: "page page-prizes"
			}, [O("div", V5, [O("div", W5, [O("h2", null, st(c.$l("page.title")), 1), O("p", {
				innerHTML: c.$l("page.description")
			}, null, 8, q5)]), fe(kt, {
				text: c.$l("page.game.cta"),
				size: "medium",
				type: "invert",
				onClick: s
			}, null, 8, ["text"])]), O("div", K5, [(ue(!0), be(Te, null, An(de(n), (u, d) => (ue(), be("div", {
				key: u.tier,
				class: "prize"
			}, [O("div", Y5, [fe(Gr, {
				url: de(a)["tier" + (d + 1)],
				"height-ratio": "100%",
				"cache-id": "prize-img" + d,
				contain: !0
			}, null, 8, ["url", "cache-id"])]), O("div", Z5, [O("div", X5, [O("span", null, st(u.tier), 1)]), O("div", Q5, [O("span", null, "\u203A " + st(u.points) + " " + st(c.$l("prizes.unit")), 1)]), J5, O("div", eh, [O("span", null, st(u.name), 1)])])]))), 128))]), O("div", th, [O("p", {
				innerHTML: c.$l("page.series.title")
			}, null, 8, nh), O("div", rh, [O("img", {
				src: de(i),
				alt: "prizes slider background"
			}, null, 8, ih)]), fe(de(gu), {
				options: {
					type: "loop",
					speed: 600,
					easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
					keyboard: !0,
					autoplay: !0,
					interval: 4e3
				}
			}, {
				default: Qe(() => [(ue(!0), be(Te, null, An(de(r), u => (ue(), Ie(de(mu), {
					key: u.name,
					class: Ye("slide--" + u.id)
				}, {
					default: Qe(() => [O("div", ah, [O("div", oh, [fe(Gr, {
						url: de(o)[u.id],
						"cache-id": "product-img" + u.id,
						contain: !0
					}, null, 8, ["url", "cache-id"])]), O("div", sh, [O("div", ch, [O("h3", {
						class: "product__title",
						innerHTML: u.name
					}, null, 8, lh)]), O("div", uh, [O("p", {
						innerHTML: u.features
					}, null, 8, fh)]), fe(kt, {
						type: "stroke",
						size: "tiny",
						specs: !0,
						href: u.link,
						onClick: d => c.$analytics.event("%s_spec", u.id)
					}, null, 8, ["href", "onClick"])])])]),
					_: 2
				}, 1032, ["class"]))), 128))]),
				_: 1
			}, 8, ["options"])]), fe(kt, {
				class: "cta-button_bottom",
				text: c.$l("page.game.cta"),
				size: "medium",
				type: "invert",
				onClick: s
			}, null, 8, ["text"])], 512))
		}
	};
var ph = Oe(dh, [
		["__scopeId", "data-v-7cb8c0d9"]
	]),
	hh = "./assets/battle-ready.ee04db2678f3df62.avif",
	vh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: hh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	gh = "./assets/battle-ready.f20d793878f3df62.png",
	mh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: gh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	bh = "./assets/battle-ready.33283dc878f3df62.webp",
	_h = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: bh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	yh = "./assets/future-shield.5550111978f3df62.avif",
	xh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: yh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	wh = "./assets/future-shield.a15c303f78f3df62.png",
	Ah = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: wh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Ch = "./assets/future-shield.b1fba50f78f3df62.webp",
	zh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Ch
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Eh = "./assets/personalization.870f6d9678f3df62.avif",
	Ph = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Eh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Lh = "./assets/personalization.ae84ff1078f3df62.png",
	kh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Lh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Sh = "./assets/personalization.8d05dd3f78f3df62.webp",
	Th = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Sh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Mh = "./assets/personalization.870f6d9678f3df62.avif",
	$h = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Mh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Ih = "./assets/personalization.ae84ff1078f3df62.png",
	Oh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Ih
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Uh = "./assets/personalization.8d05dd3f78f3df62.webp",
	Rh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Uh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Hh = "./assets/scale.3eddf29d78f3df62.avif",
	Gh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Hh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Bh = "./assets/scale.8388ea0278f3df62.png",
	Fh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Bh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Nh = "./assets/scale.0a7feb6378f3df62.webp",
	jh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Nh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Dh = "./assets/simultaneity.65bd432278f3df62.avif",
	Vh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Dh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Wh = "./assets/simultaneity.c5c3d3da78f3df62.png",
	qh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Wh
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Kh = "./assets/simultaneity.cdf07e1a78f3df62.webp",
	Yh = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: Kh
	}, Symbol.toStringTag, {
		value: "Module"
	}));
const Zh = {
		class: "intro-content"
	},
	Xh = {
		class: "page-intro__product"
	},
	Qh = {
		class: "bonus-icon"
	},
	Jh = ["innerHTML"],
	e4 = ["innerHTML"],
	t4 = {
		__name: "Intro",
		setup(e) {
			const t = ie(),
				n = ie(),
				r = Object.keys(D.$l("bonus")).map(c => Rt({
					id: c
				}, D.$l("bonus")[c])),
				i = jn({
					"/src/assets/images/prizes-bonus/battle-ready.avif": vh,
					"/src/assets/images/prizes-bonus/battle-ready.png": mh,
					"/src/assets/images/prizes-bonus/battle-ready.webp": _h,
					"/src/assets/images/prizes-bonus/future-shield.avif": xh,
					"/src/assets/images/prizes-bonus/future-shield.png": Ah,
					"/src/assets/images/prizes-bonus/future-shield.webp": zh,
					"/src/assets/images/prizes-bonus/personalization.avif": Ph,
					"/src/assets/images/prizes-bonus/personalization.png": kh,
					"/src/assets/images/prizes-bonus/personalization.webp": Th,
					"/src/assets/images/prizes-bonus/power.avif": $h,
					"/src/assets/images/prizes-bonus/power.png": Oh,
					"/src/assets/images/prizes-bonus/power.webp": Rh,
					"/src/assets/images/prizes-bonus/scale.avif": Gh,
					"/src/assets/images/prizes-bonus/scale.png": Fh,
					"/src/assets/images/prizes-bonus/scale.webp": jh,
					"/src/assets/images/prizes-bonus/simultaneity.avif": Vh,
					"/src/assets/images/prizes-bonus/simultaneity.png": qh,
					"/src/assets/images/prizes-bonus/simultaneity.webp": Yh
				});
			for (let c in i) i[c] = tn.select(i[c]);
			D.$router.onViewEnter(async ({
				from: c,
				isCancelled: l
			}) => {
				D.$analytics.pageview("/introduction", "Game Introduction"), D.$webgl.game.setState("INTRO"), c && c.name === "Prizes" ? await D.$transition.ensureAlmostHidden() : await tt(400), !l() && (n.value.animate(), t.value.classList.remove("intro-from"), t.value.classList.add("intro-visible"))
			}), D.$router.onViewLeave(async () => {
				t.value.classList.add("intro-leaving"), await tt(600)
			}), ht(() => {
				const c = t.value.querySelectorAll(".splide__pagination > li");
				D.$webgl.stores.currentIntroIndex.set(0), r.forEach((l, u) => {
					const d = "var(--bonus-" + l.id + ")";
					c[u].style.setProperty("--bonus-color", d)
				})
			});
			let a = 0;

			function o(c, l) {
				a !== l && (a = l, D.$webgl.stores.currentIntroIndex.set(l), D.$audio.playSound("sfx_UI_beep_various", {
					variation: 1
				}))
			}

			function s() {
				D.$analytics.event("start_game"), D.$router.push({
					name: "Game"
				})
			}
			return (c, l) => {
				const u = Zi("SvgIcon");
				return ue(), be("section", {
					ref_key: "base",
					ref: t,
					class: "page page-intro intro-from"
				}, [O("div", Zh, [fe(A1, {
					ref_key: "title",
					ref: n,
					text: c.$l("introduction.title"),
					component: "div",
					class: "title",
					autoplay: !1
				}, null, 8, ["text"]), fe(de(gu), {
					options: {
						type: "loop",
						speed: 600,
						easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
						keyboard: !0,
						autoplay: !0,
						interval: 4e3
					},
					"onSplide:move": o
				}, {
					default: Qe(() => [(ue(!0), be(Te, null, An(de(r), d => (ue(), Ie(de(mu), {
						key: d.id,
						class: Ye("slide--" + d.id),
						style: Hi({
							"--bonus-color": `var(--bonus-${d.id})`
						})
					}, {
						default: Qe(() => [O("div", Xh, [fe(Gr, {
							url: de(i)[d.id],
							"cache-id": "product-img" + d.id,
							contain: !0
						}, null, 8, ["url", "cache-id"]), O("div", Qh, [fe(u, {
							id: "bonus-outline",
							class: "bonus-border"
						}), fe(u, {
							id: "bonus-" + d.id,
							class: "bonus-inner"
						}, null, 8, ["id"])])]), O("h3", {
							innerHTML: d.name
						}, null, 8, Jh), O("p", {
							innerHTML: d.desc
						}, null, 8, e4)]),
						_: 2
					}, 1032, ["class", "style"]))), 128))]),
					_: 1
				}, 8, ["options"]), fe(C1, {
					text: c.$l("introduction.cta"),
					click: s
				}, null, 8, ["text"])])], 512)
			}
		}
	};
var n4 = Oe(t4, [
	["__scopeId", "data-v-49b35f33"]
]);

function Ma(e) {
	const t = ie(null);
	e.watchImmediate(n), or(() => e.unwatch(n));

	function n(r) {
		t.value = r
	}
	return t
}
const r4 = {
		class: "page page-game"
	},
	i4 = {
		class: "lifes"
	},
	a4 = ["innerHTML"],
	o4 = {
		class: "counter"
	},
	s4 = ["innerHTML"],
	c4 = {
		class: "bonus"
	},
	l4 = {
		__name: "Game",
		setup(e) {
			const t = Math.min(3, D.$webgl.game.MAX_LIFE),
				n = Ma(D.$webgl.game.countdown),
				r = Ma(D.$webgl.game.score),
				i = Ma(D.$webgl.game.life),
				a = ie(),
				o = ie(""),
				s = ie(!1),
				c = ie(),
				l = ie(!1);
			ie(!1);
			let u = null,
				d = setTimeout(() => {}, 0);
			const f = {
				scalability: D.$l("bonus.scale.name"),
				simultaneity: D.$l("bonus.simultaneity.name"),
				power: D.$l("bonus.power.name"),
				futureproof: D.$l("bonus.future-shield.name"),
				prebuilt: D.$l("bonus.battle-ready.name"),
				mods: D.$l("bonus.personalization.name")
			};
			let b = null;

			function p(m = !0) {
				clearTimeout(b), l.value = !!m, b = setTimeout(() => l.value = !1, 1500)
			}
			ht(() => D.$webgl.game.bonuses.onPick.watch(h)), or(() => D.$webgl.game.bonuses.onPick.unwatch(h));
			async function h(m) {
				u && (s.value = !1, clearTimeout(d), await tt(250)), u = a.value = m.id, o.value = f[m.id], s.value = !0, d = setTimeout(() => {
					s.value = !1, u = null
				}, 1500)
			}
			return D.$webgl.game.life.watch(() => {
				p(!0)
			}), D.$webgl.game.score.watch(() => {
				!c.value || (c.value.classList.add("glow"), c.value.getBoundingClientRect(), c.value.classList.remove("glow"))
			}), D.$router.onViewEnter(async ({
				from: m
			}) => {
				D.$analytics.pageview("/game", "Game"), D.$webgl.game.setState("START_GAME")
			}), D.$router.onViewLeave(async () => {}), (m, _) => (ue(), be("section", r4, [O("header", {
				class: Ye({
					show: de(n) < 1 && de(i) > 0 && !de(D).$stores.isMenuOpen
				})
			}, [O("div", {
				class: Ye(["progress", {
					"has-lost": l.value
				}])
			}, [O("div", i4, [O("span", {
				innerHTML: m.$l("game.lifes")
			}, null, 8, a4), (ue(!0), be(Te, null, An(de(t), v => (ue(), be("div", {
				key: v,
				class: Ye(["heart", {
					lost: v > de(i)
				}])
			}, null, 2))), 128)), Vl(" " + st(), 1)]), O("div", {
				ref_key: "scoreEl",
				ref: c,
				class: "score"
			}, st(de(r)), 513)], 2)], 2), O("aside", {
				class: Ye(["countdown", {
					visible: de(n) < 4,
					hidden: de(n) < 1
				}])
			}, [O("span", o4, st(de(n) <= 0 ? 1 : de(n)), 1), O("span", {
				class: "tuto",
				innerHTML: m.$l("game.tutorial")
			}, null, 8, s4)], 2), O("aside", c4, [O("span", {
				class: Ye([a.value, {
					visible: s.value
				}])
			}, st(o.value), 3)])]))
		}
	};
var u4 = Oe(l4, [
	["__scopeId", "data-v-61d38c69"]
]);
const f4 = {
		class: "page page-results"
	},
	d4 = {
		key: 0,
		class: "popin"
	},
	p4 = {
		class: "popin__header"
	},
	h4 = {
		class: "popin__results-text"
	},
	v4 = ["innerHTML"],
	g4 = ["innerHTML"],
	m4 = {
		class: "popin__content"
	},
	b4 = {
		class: "results-tiers__rotation"
	},
	_4 = {
		class: "results-tiers__rotation-inverse"
	},
	y4 = ["data-active", "data-disabled"],
	x4 = ["innerHTML"],
	w4 = ["innerHTML"],
	A4 = ["innerHTML"],
	C4 = {
		class: "popin__buttons"
	},
	z4 = {
		__name: "Results",
		setup(e) {
			const t = ie(!1),
				n = {
					popinScore: ie(),
					prizes: ie()
				},
				r = +D.$webgl.game.score.value,
				i = jn({
					"/src/assets/images/tiers/tier1.avif": z1,
					"/src/assets/images/tiers/tier1.png": E1,
					"/src/assets/images/tiers/tier1.webp": P1,
					"/src/assets/images/tiers/tier2.avif": L1,
					"/src/assets/images/tiers/tier2.png": k1,
					"/src/assets/images/tiers/tier2.webp": S1,
					"/src/assets/images/tiers/tier3.avif": T1,
					"/src/assets/images/tiers/tier3.png": M1,
					"/src/assets/images/tiers/tier3.webp": $1
				}),
				a = D.$l("prizes.prize").map((u, d) => pa(Rt({}, u), {
					tierIndex: d + 1,
					image: tn.select(i["tier" + (d + 1)]),
					isDisabled: ie(!0),
					isActive: +r >= +u.points || d === 0
				})),
				o = Math.max(1, a.filter(u => !!u.isActive).length),
				s = a[o - 1];

			function c() {
				D.$analytics.event("retry_game"), D.$webgl.game.setState("START_GAME"), D.$router.push({
					name: "Intro"
				})
			}

			function l() {
				D.$analytics.event("register"), D.$router.push({
					name: "Register",
					params: {
						step: "email"
					}
				})
			}
			return D.$router.onViewEnter(async ({
				from: u,
				isCancelled: d
			}) => {
				if (D.$analytics.pageview("/results", "Results"), D.$webgl.game.setState("GAME_OVER"), u && u.name === "Prizes" ? await D.$transition.ensureAlmostHidden() : u && u.name === "Game" && await tt(600), !d() && (t.value = !0, await tt(50), !d() && (Si({
						target: n.popinScore.value,
						name: "blinkOpacityIn",
						ease: "ease-in-out",
						duration: 1e3,
						delay: 150
					}), await tt(200), !d())))
					for (let f = 0; f < a.length; f++) {
						const b = a[f],
							p = n.prizes.value[f];
						if (await tt(200), d()) return;
						b.isDisabled.value = !b.isActive, b.isActive && Si({
							target: p,
							name: "blinkOpacityIn",
							ease: "ease-in-out",
							duration: 1e3,
							delay: 0
						})
					}
			}), D.$router.onViewLeave(async () => {
				t.value = !1, await tt(400)
			}), (u, d) => (ue(), be("section", f4, [fe(kn, {
				name: "popin",
				appear: ""
			}, {
				default: Qe(() => [t.value ? (ue(), be("div", d4, [O("header", p4, [O("div", h4, [O("h1", {
					class: "results-title",
					innerHTML: u.$l("end.score.title") + " / " + de(s).tier
				}, null, 8, v4), O("div", {
					ref: n.popinScore,
					class: "popin__score"
				}, [O("span", {
					class: "score-value",
					innerHTML: r + " " + u.$l("prizes.unit")
				}, null, 8, g4)], 512)])]), O("div", m4, [O("div", b4, [O("ul", _4, [(ue(!0), be(Te, null, An(de(a), f => (ue(), be("li", {
					key: f.tierIndex,
					ref_for: !0,
					ref: n.prizes,
					class: "tier",
					"data-active": f.isActive,
					"data-disabled": f.isDisabled.value
				}, [O("p", {
					class: "tier-name",
					innerHTML: f.tier
				}, null, 8, x4), O("p", {
					class: "tier-points",
					innerHTML: `\u203A ${+f.points} ${u.$l("prizes.unit")}`
				}, null, 8, w4), fe(Gr, {
					url: f.image,
					"cache-id": "prizes-img" + f.tierIndex,
					contain: !0
				}, null, 8, ["url", "cache-id"]), O("p", {
					class: "tier-desc",
					innerHTML: f.name
				}, null, 8, A4)], 8, y4))), 128))])]), O("div", C4, [fe(kt, {
					text: u.$l("end.cta.retry"),
					type: "basic",
					class: "cta-retry",
					retry: !0,
					onClick: c
				}, null, 8, ["text"]), fe(kt, {
					text: u.$l("end.cta.register"),
					type: "invert",
					click: l,
					class: "cta-register form-launch"
				}, null, 8, ["text"])]), fe(b1, {
					class: "prizes-footer"
				})])])) : en("", !0)]),
				_: 1
			})]))
		}
	};
var E4 = Oe(z4, [
	["__scopeId", "data-v-934c04de"]
]);
const P4 = {
		class: "form-input"
	},
	L4 = ["placeholder", "type", "required"],
	k4 = {
		__name: "FormInput",
		props: {
			required: {
				type: Boolean,
				default: !0
			},
			type: {
				type: String,
				default: "text"
			},
			placeholder: {
				type: String,
				default: "Placeholder"
			},
			name: {
				type: String,
				default: "Name"
			}
		},
		setup(e, {
			expose: t
		}) {
			const n = ie();
			return t({
				input: n
			}), (r, i) => (ue(), be("div", P4, [O("input", {
				ref_key: "input",
				ref: n,
				autocorrect: "off",
				autocapitalize: "off",
				autocomplete: "off",
				"data-bypass-keyboard": "",
				placeholder: e.placeholder,
				type: e.type,
				required: e.required
			}, null, 8, L4)]))
		}
	};
var lo = Oe(k4, [
	["__scopeId", "data-v-298b2a1a"]
]);
const S4 = e => (Ct("data-v-0a4f5b62"), e = e(), zt(), e),
	T4 = ["aria-label"],
	M4 = S4(() => O("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, [O("rect", {
		x: "16",
		y: "1.6001",
		width: "20.3647",
		height: "2.26274",
		rx: "1.13137",
		transform: "rotate(135 16 1.6001)",
		fill: "white"
	}), O("rect", {
		x: "14.4004",
		y: "16.0005",
		width: "20.3647",
		height: "2.26274",
		rx: "1.13137",
		transform: "rotate(-135 14.4004 16.0005)",
		fill: "white"
	})], -1)),
	$4 = [M4],
	I4 = {
		__name: "Close",
		setup(e) {
			function t() {
				D.$router.push({
					name: "Results"
				})
			}
			return (n, r) => (ue(), be("button", {
				class: "popin__close",
				"aria-label": n.$l("aria.label.close"),
				onClick: t
			}, $4, 8, T4))
		}
	};
var hs = Oe(I4, [
	["__scopeId", "data-v-0a4f5b62"]
]);

function bu({
	onFormSubmitCb: e
}) {
	let t = Qi();
	ht(() => i()), or(() => a());
	let n = !1,
		r = null;

	function i() {
		r = t.vnode.el
	}

	function a() {
		n = !0
	}

	function o(u) {
		r.classList.toggle("loading", !!u)
	}
	async function s() {
		try {
			o(!0);
			const u = await c();
			if (n || !u || (await l(), n)) return
		} catch (u) {
			if (console.error(u), n) return
		} finally {
			o(!1)
		}
	}

	function c() {
		return !0
	}
	async function l() {
		e && await e()
	}
	return {
		submitForm: s,
		destroyed: () => n
	}
}
const O4 = e => (Ct("data-v-48642800"), e = e(), zt(), e),
	U4 = {
		class: "register-step register-step--email popin"
	},
	R4 = {
		class: "popin__header"
	},
	H4 = ["innerHTML"],
	G4 = O4(() => O("div", {
		class: "popin__shape"
	}, null, -1)),
	B4 = ["innerHTML"],
	F4 = ["innerHTML"],
	N4 = {
		__name: "Email",
		setup(e) {
			const {
				submitForm: t,
				destroyed: n
			} = bu({
				onFormSubmitCb: o
			}), r = ie(), i = ie(!1), a = D.$l("end.register.email.placeholder");
			ht(() => {
				D.$stores.userData.email && (r.value.input.value = D.$stores.userData.email)
			});
			async function o() {
				D.$analytics.event("register_email"), i.value = !0;
				const s = {
					email: r.value.input.value,
					score: D.$webgl.game.score.value
				};
				D.$stores.userData.email = s.email;
				const c = await D.$api.register(s);
				if (n()) return;
				const l = c.state;
				let u = "saved";
				l === "no-account" ? u = "details" : l === "new-account" ? u = "saved" : l === "higher-score" ? u = "updated" : l === "lower-score" && (u = "retry"), D.$router.push({
					name: "Register",
					params: {
						step: u
					}
				})
			}
			return (s, c) => (ue(), Ie(kn, {
				name: "popin",
				appear: ""
			}, {
				default: Qe(() => [O("section", U4, [fe(hs), O("header", R4, [O("h1", {
					innerHTML: s.$l("end.register.email.title")
				}, null, 8, H4), G4]), O("form", {
					action: "",
					class: "popin__content",
					method: "post",
					autocomplete: "off",
					onSubmit: c[0] || (c[0] = Xl((...l) => de(t) && de(t)(...l), ["prevent"]))
				}, [O("p", {
					innerHTML: s.$l("end.register.email.text")
				}, null, 8, B4), fe(lo, {
					ref_key: "email",
					ref: r,
					type: "email",
					required: !0,
					placeholder: de(a)
				}, null, 8, ["placeholder"]), fe(kt, {
					ref: "ctaButton",
					text: s.$l("end.register.email.cta"),
					type: "invert",
					class: Ye(["cta-register", [{
						spinner: i.value
					}]])
				}, null, 8, ["text", "class"]), O("span", {
					class: "grecaptcha-legals",
					innerHTML: s.$l("end.recaptcha")
				}, null, 8, F4)], 32)])]),
				_: 1
			}))
		}
	};
var j4 = Oe(N4, [
		["__scopeId", "data-v-48642800"]
	]),
	Ic = JSON.parse('{"af":"Afghanistan","al":"Albania","dz":"Algeria","as":"American Samoa","ad":"Andorra","ao":"Angola","ai":"Anguilla","aq":"Antarctica","ag":"Antigua and Barbuda","ar":"Argentina","am":"Armenia","aw":"Aruba","au":"Australia","at":"Austria","az":"Azerbaijan","bs":"Bahamas","bh":"Bahrain","bd":"Bangladesh","bb":"Barbados","be":"Belgium","bz":"Belize","bj":"Benin","bm":"Bermuda","bt":"Bhutan","bo":"Bolivia","ba":"Bosnia and Herzegovina","bw":"Botswana","br":"Brazil","io":"British Indian Ocean Territory","vg":"British Virgin Islands","bn":"Brunei","bg":"Bulgaria","bf":"Burkina Faso","bi":"Burundi","kh":"Cambodia","cm":"Cameroon","ca":"Canada","cv":"Cape Verde","ky":"Cayman Islands","cf":"Central African Republic","td":"Chad","cl":"Chile","cn":"China","cx":"Christmas Island","cc":"Cocos Islands","co":"Colombia","km":"Comoros","ck":"Cook Islands","cr":"Costa Rica","hr":"Croatia","cw":"Curacao","cy":"Cyprus","cz":"Czech Republic","cd":"Democratic Republic of the Congo","dk":"Denmark","dj":"Djibouti","dm":"Dominica","do":"Dominican Republic","tl":"East Timor","ec":"Ecuador","eg":"Egypt","sv":"El Salvador","gq":"Equatorial Guinea","er":"Eritrea","ee":"Estonia","et":"Ethiopia","fk":"Falkland Islands","fo":"Faroe Islands","fj":"Fiji","fi":"Finland","fr":"France","pf":"French Polynesia","ga":"Gabon","gm":"Gambia","ge":"Georgia","de":"Germany","gh":"Ghana","gi":"Gibraltar","gr":"Greece","gl":"Greenland","gd":"Grenada","gu":"Guam","gt":"Guatemala","gg":"Guernsey","gn":"Guinea","gw":"Guinea-Bissau","gy":"Guyana","ht":"Haiti","hn":"Honduras","hk":"Hong Kong","hu":"Hungary","is":"Iceland","in":"India","id":"Indonesia","iq":"Iraq","ie":"Ireland","im":"Isle of Man","il":"Israel","ci":"Ivory Coast","jm":"Jamaica","jp":"Japan","je":"Jersey","jo":"Jordan","kz":"Kazakhstan","ke":"Kenya","ki":"Kiribati","xk":"Kosovo","kw":"Kuwait","kg":"Kyrgyzstan","la":"Laos","lv":"Latvia","lb":"Lebanon","ls":"Lesotho","lr":"Liberia","ly":"Libya","li":"Liechtenstein","lt":"Lithuania","lu":"Luxembourg","mo":"Macao","mk":"Macedonia","mg":"Madagascar","mw":"Malawi","my":"Malaysia","mv":"Maldives","ml":"Mali","mt":"Malta","mh":"Marshall Islands","mr":"Mauritania","mu":"Mauritius","yt":"Mayotte","mx":"Mexico","fm":"Micronesia","md":"Moldova","mc":"Monaco","mn":"Mongolia","me":"Montenegro","ms":"Montserrat","ma":"Morocco","mz":"Mozambique","mm":"Myanmar","na":"Namibia","nr":"Nauru","np":"Nepal","nl":"Netherlands","an":"Netherlands Antilles","nc":"New Caledonia","nz":"New Zealand","ni":"Nicaragua","ne":"Niger","ng":"Nigeria","nu":"Niue","kp":"North Korea","mp":"Northern Mariana Islands","no":"Norway","om":"Oman","pk":"Pakistan","pw":"Palau","ps":"Palestine","pa":"Panama","pg":"Papua New Guinea","py":"Paraguay","pe":"Peru","ph":"Philippines","pn":"Pitcairn","pl":"Poland","pt":"Portugal","pr":"Puerto Rico","qa":"Qatar","cg":"Republic of the Congo","re":"Reunion","ro":"Romania","rw":"Rwanda","bl":"Saint Barthelemy","sh":"Saint Helena","kn":"Saint Kitts and Nevis","lc":"Saint Lucia","mf":"Saint Martin","pm":"Saint Pierre and Miquelon","vc":"Saint Vincent and the Grenadines","ws":"Samoa","sm":"San Marino","st":"Sao Tome and Principe","sa":"Saudi Arabia","sn":"Senegal","rs":"Serbia","sc":"Seychelles","sl":"Sierra Leone","sg":"Singapore","sx":"Sint Maarten","sk":"Slovakia","si":"Slovenia","sb":"Solomon Islands","so":"Somalia","za":"South Africa","kr":"Korea","ss":"South Sudan","es":"Spain","lk":"Sri Lanka","sd":"Sudan","sr":"Suriname","sj":"Svalbard and Jan Mayen","sz":"Swaziland","se":"Sweden","ch":"Switzerland","tw":"Taiwan","tj":"Tajikistan","tz":"Tanzania","tg":"Togo","tk":"Tokelau","to":"Tonga","tt":"Trinidad and Tobago","tn":"Tunisia","tm":"Turkmenistan","tc":"Turks and Caicos Islands","tv":"Tuvalu","vi":"U.S. Virgin Islands","ug":"Uganda","ua":"Ukraine","ae":"United Arab Emirates","gb":"United Kingdom","us":"United States","uy":"Uruguay","uz":"Uzbekistan","vu":"Vanuatu","va":"Vatican","vn":"Vietnam","wf":"Wallis and Futuna","eh":"Western Sahara","ye":"Yemen","zm":"Zambia","zw":"Zimbabwe"}');
const D4 = {
		class: "select"
	},
	V4 = ["required"],
	W4 = ["innerHTML"],
	q4 = ["value", "disabled", "selected", "innerHTML"],
	K4 = {
		__name: "CountryInput",
		props: {
			value: {
				type: String,
				default: ""
			},
			required: {
				type: Boolean,
				default: !0
			}
		},
		setup(e, {
			expose: t
		}) {
			const n = e;
			let r, i = !1;
			const a = ie(),
				o = ie();
			return t({
				input: o
			}), kl(() => {
				a.value = Object.keys(Ic).map(s => (r = n.value === s ? !0 : void 0, {
					id: s,
					text: Ic[s],
					selected: r
				}))
			}), (s, c) => (ue(), be("div", D4, [O("select", {
				ref_key: "input",
				ref: o,
				class: "select-input",
				required: n.required
			}, [O("option", {
				value: "",
				disabled: "",
				selected: "",
				innerHTML: s.$l("end.register.form.country.placeholder")
			}, null, 8, W4), (ue(!0), be(Te, null, An(a.value, l => (ue(), be("option", {
				key: l.id,
				value: l.id,
				disabled: de(i),
				selected: l.selected,
				innerHTML: l.text
			}, null, 8, q4))), 128))], 8, V4)]))
		}
	};
var Y4 = Oe(K4, [
	["__scopeId", "data-v-73357dfb"]
]);
const Z4 = e => (Ct("data-v-3630770b"), e = e(), zt(), e),
	X4 = {
		class: "form-checkbox"
	},
	Q4 = ["id", "name", "required"],
	J4 = ["for"],
	ev = Z4(() => O("div", {
		class: "checkbox-box"
	}, null, -1)),
	tv = ["innerHTML"],
	nv = {
		__name: "FormCheckbox",
		props: {
			required: {
				type: Boolean,
				default: !1
			},
			name: {
				type: String,
				default: "rules"
			},
			content: {
				type: String,
				default: "Optin checkbox"
			}
		},
		setup(e, {
			expose: t
		}) {
			const n = e,
				r = ie();
			return t({
				input: r
			}), (i, a) => (ue(), be("div", X4, [O("input", {
				id: n.name,
				ref_key: "input",
				ref: r,
				type: "checkbox",
				name: n.name,
				required: n.required
			}, null, 8, Q4), O("label", {
				for: n.name
			}, [ev, O("span", {
				class: "checkbox-label",
				innerHTML: n.content
			}, null, 8, tv)], 8, J4)]))
		}
	};
var Oc = Oe(nv, [
	["__scopeId", "data-v-3630770b"]
]);
const rv = e => (Ct("data-v-0e1cdeb6"), e = e(), zt(), e),
	iv = {
		class: "register-step register-step--details popin"
	},
	av = {
		class: "popin__header"
	},
	ov = ["innerHTML"],
	sv = rv(() => O("div", {
		class: "popin__shape"
	}, null, -1)),
	cv = {
		class: "names"
	},
	lv = ["innerHTML"],
	uv = {
		__name: "Details",
		setup(e) {
			const {
				submitForm: t,
				destroyed: n
			} = bu({
				onFormSubmitCb: l
			}), r = ie(), i = ie(), a = ie(), o = ie(), s = ie(), c = ie(!1);
			async function l() {
				D.$analytics.event("register_form"), c.value = !0;
				const u = {
						first_name: r.value.input.value,
						last_name: i.value.input.value,
						country: a.value.input.value,
						rules: !!o.value.input.checked,
						newsletter: !!s.value.input.checked,
						email: D.$stores.userData.email,
						score: D.$webgl.game.score.value
					},
					d = await D.$api.register(u);
				if (n()) return;
				D.$analytics.event("event_registration_confirmed");
				const f = d.state;
				let b = null;
				f === "better-score" ? b = "updated" : f === "lower-score" ? b = "retry" : b = "saved", D.$router.push({
					name: "Register",
					params: {
						step: b
					}
				})
			}
			return (u, d) => (ue(), Ie(kn, {
				name: "popin",
				appear: ""
			}, {
				default: Qe(() => [O("section", iv, [fe(hs), O("header", av, [O("h1", {
					innerHTML: u.$l("end.register.form.title")
				}, null, 8, ov), sv]), O("form", {
					action: "",
					class: "popin__content",
					method: "post",
					autocomplete: "off",
					onSubmit: d[0] || (d[0] = Xl((...f) => de(t) && de(t)(...f), ["prevent"]))
				}, [O("div", cv, [fe(lo, {
					ref_key: "firstname",
					ref: r,
					placeholder: u.$l("end.register.form.firstname.placeholder"),
					required: !0
				}, null, 8, ["placeholder"]), fe(lo, {
					ref_key: "lastname",
					ref: i,
					placeholder: u.$l("end.register.form.lastname.placeholder"),
					required: !1
				}, null, 8, ["placeholder"])]), fe(Y4, {
					ref_key: "country",
					ref: a,
					required: !0
				}, null, 512), fe(Oc, {
					ref_key: "rules",
					ref: o,
					name: "rules",
					required: !0,
					content: u.$l("end.register.form.terms")
				}, null, 8, ["content"]), fe(Oc, {
					ref_key: "newsletter",
					ref: s,
					content: u.$l("end.register.form.newsletter"),
					name: "newsletter"
				}, null, 8, ["content"]), fe(kt, {
					text: u.$l("end.register.form.cta"),
					type: "invert",
					class: Ye(["cta-register", {
						spinner: c.value
					}])
				}, null, 8, ["text", "class"]), O("span", {
					class: "grecaptcha-legals",
					innerHTML: u.$l("end.recaptcha")
				}, null, 8, lv)], 32)])]),
				_: 1
			}))
		}
	};
var fv = Oe(uv, [
	["__scopeId", "data-v-0e1cdeb6"]
]);
const dv = e => (Ct("data-v-6c1ce502"), e = e(), zt(), e),
	pv = {
		class: "register-step register-step--confirmation popin"
	},
	hv = {
		class: "popin__header"
	},
	vv = {
		class: "popin__results-text"
	},
	gv = ["innerHTML"],
	mv = {
		class: "popin__score"
	},
	bv = ["innerHTML"],
	_v = dv(() => O("div", {
		class: "popin__shape"
	}, null, -1)),
	yv = {
		class: "popin__content"
	},
	xv = ["innerHTML"],
	wv = {
		__name: "Confirmation",
		props: {
			step: {
				type: String,
				default: "saved"
			}
		},
		setup(e) {
			const t = e,
				n = D.$l(`end.register.confirmation.${t.step}.title`),
				r = D.$l(`end.register.confirmation.${t.step}.description`);

			function i() {
				D.$analytics.event("retry_game"), D.$webgl.game.setState("START_GAME"), D.$router.push({
					name: "Intro"
				})
			}

			function a() {
				D.$analytics.event("click_desktop_campaign")
			}
			return (o, s) => (ue(), Ie(kn, {
				name: "popin",
				appear: ""
			}, {
				default: Qe(() => [O("section", pv, [fe(hs), O("header", hv, [O("div", vv, [O("h1", {
					class: "results-title",
					innerHTML: de(n)
				}, null, 8, gv), O("div", mv, [O("span", {
					class: "score-value",
					innerHTML: de(D).$webgl.game.score.value + " " + o.$l("prizes.unit")
				}, null, 8, bv)])]), _v]), O("fieldset", yv, [O("p", {
					innerHTML: de(r)
				}, null, 8, xv), fe(kt, {
					text: o.$l("end.register.confirmation.cta"),
					type: "basic",
					class: "cta-register",
					onClick: i
				}, null, 8, ["text"]), fe(kt, {
					text: o.$l("end.confirmation.cta"),
					type: "invert",
					class: "cta-register",
					href: o.$l("end.confirmation.ctalink"),
					onClick: a
				}, null, 8, ["text", "href"])])])]),
				_: 1
			}))
		}
	};
var Av = Oe(wv, [
	["__scopeId", "data-v-6c1ce502"]
]);
const Cv = {
		class: "page page-register"
	},
	zv = {
		__name: "Register",
		setup(e) {
			const t = {
				email: ["/register-email", "Register - Email"],
				details: ["/register-form", "Register - Form"],
				saved: ["/register-confirmation-saved", "Register - Confirmation - Saved"],
				retry: ["/register-confirmation-retry", "Register - Confirmation - Retry"],
				updated: ["/register-confirmation-updated", "Register - Confirmation - Updated"]
			};
			return D.$router.onViewEnter(async () => {
				const n = D.$route.params.step;
				t[n] && D.$analytics.pageview.apply(null, t[n]), D.$webgl.game.setState("GAME_OVER")
			}), D.$router.onViewLeave(async () => {}), (n, r) => (ue(), be("section", Cv, [de(D).$route.params.step === "email" ? (ue(), Ie(j4, {
				key: 0
			})) : en("", !0), de(D).$route.params.step === "details" ? (ue(), Ie(fv, {
				key: 1
			})) : en("", !0), de(D).$route.params.step === "saved" || de(D).$route.params.step === "retry" || de(D).$route.params.step === "updated" ? (ue(), Ie(Av, {
				key: 2,
				step: de(D).$route.params.step
			}, null, 8, ["step"])) : en("", !0)]))
		}
	};
var Ev = Oe(zv, [
	["__scopeId", "data-v-b5e8e652"]
]);
const $a = [{
	path: "/",
	name: "Home",
	component: I2
}, {
	path: "/prizes",
	name: "Prizes",
	component: ph
}, {
	path: "/intro",
	name: "Intro",
	component: n4
}, {
	path: "/game",
	name: "Game",
	component: u4
}, {
	path: "/results",
	name: "Results",
	component: E4
}, {
	path: "/register/:step(email|details|saved|updated|retry)",
	name: "Register",
	component: Ev
}];

function Pv() {
	const e = window.__DATA,
		t = e.project.locales[e.page.locale];
	let n = e.project.basepath;
	return (!t.default || e.project.prefixDefaultLocale) && (n += e.page.locale), n.endsWith("/") && (n = n.slice(0, -1)), n
}
const Lv = (e, t) => (e.aliasOf || e) === (t.aliasOf || t);
let kv = 0;
const Sv = ar({
	name: "NextRouterView",
	inheritAttrs: !1,
	props: {
		name: {
			type: String,
			default: "default"
		},
		useKey: {
			type: [String, Function],
			default: () => e => e.fullPath + "." + ++kv
		},
		route: {
			type: Object,
			default: null
		}
	},
	setup(e, {
		attrs: t,
		slots: n
	}) {
		const r = Fe(Ur),
			i = Re(() => e.route || r.value),
			a = Fe(Ei, 0),
			o = Re(() => i.value.matched[a]);
		Jt(Ei, a + 1), Jt(Oo, o), Jt(Ur, i);
		const s = ie(),
			c = ie(0);
		let l = null;
		const u = [];
		let d = null,
			f = null;
		_n(() => [s.value, o.value, e.name], ([v, g, w], [k, S, U]) => {
			g && (g.instances[w] = v, S && S !== g && v && v === k && (g.leaveGuards.size || (g.leaveGuards = S.leaveGuards), g.updateGuards.size || (g.updateGuards = S.updateGuards))), v && g && (!S || !Lv(g, S) || !k) && (g.enterCallbacks[w] || []).forEach(M => M(v))
		}, {
			flush: "post"
		});
		async function b(v, g, w) {
			v._transitionState || (v._transitionState = {
				uid: 0,
				enterTries: 0,
				entering: !1,
				leaving: !1,
				leavePromise: null,
				route: g,
				name: w
			})
		}
		async function p(v, g) {
			const w = v._transitionState,
				k = d,
				S = f,
				U = ++w.uid;
			for (w.entering = !0, w.leaving = !1, w.enterTries = 0; w.enterTries < 8;) {
				if (U !== w.uid || !w.entering) return;
				if (w.enterTries++, v.component) break;
				await 0
			}
			const M = v.component._viewEnters;
			if (!M) return;
			const A = () => U !== w.uid || !w.entering || !v.component || v.component.isUnmounted,
				x = Promise.all(g),
				z = () => x,
				C = {
					el: v.el,
					from: k,
					to: S,
					isCancelled: A,
					previousViewHidden: z
				};
			for (let L = 0; L < M.length && await M[L](C) !== !1; L++)
				if (A()) return
		}
		async function h(v) {
			const g = v._transitionState;
			if (!!v.component) return g.leaving ? g.leavingPromise : (g.entering = !1, g.leaving = !0, g.enterTries = 0, g.leavePromise = m(v, g), g.leavePromise)
		}
		async function m(v, g) {
			const w = d,
				k = f,
				S = ++g.uid,
				U = () => S !== g.uid || !g.leaving || !v.component || v.component.isUnmounted,
				M = v.component._viewLeaves;
			if (!M) return _(v);
			const A = {
				el: v.el,
				from: w,
				to: k,
				isCancelled: U
			};
			for (let x = 0; x < M.length && await M[x](A) !== !1; x++)
				if (U()) return;
			_(v)
		}

		function _(v) {
			const g = v._transitionState,
				w = u.indexOf(v);
			w > -1 && u.splice(w, 1), g.route = null, c.value++
		}
		return () => {
			const v = i.value,
				g = o.value,
				w = g && g.components[e.name],
				k = e.name;
			if (!w) return null;
			if (c.value < 0) return;
			const S = g.props[e.name],
				U = S ? S === !0 ? v.params : typeof S == "function" ? S(v) : S : null,
				M = C => {
					C.component.isUnmounted && (g.instances[k] = null)
				};
			if (!(f !== v)) return u;
			d = f, f = v;
			const x = typeof e.useKey == "function" ? e.useKey(v) : v[e.useKey],
				z = u.map(C => h(C));
			return l = Cn(w, Object.assign({}, U, t, {
				onVnodeUnmounted: M,
				ref: s,
				key: x
			})), u.push(l), b(l, g, k), p(l, z), u
		}
	}
});

function B9(e = {}) {
	e.notFoundComponent ? $a.push({
		path: "/:pathMatch(.*)*",
		name: "404",
		component: e.notFoundComponent
	}) : $a.push({
		path: "/:pathMatch(.*)*",
		redirect: "/"
	});
	const t = e.historyMode(Pv()),
		n = rp(Object.assign({
			routes: $a,
			history: t
		}, e)),
		r = n.install.bind(n);
	return n.install = function(a) {
		const o = a.config.globalProperties;
		a.component("NextRouterView", Sv), r.call(this, a), o.$router.previousRoute = ie(), o.$previousRoute = null, n.firstRoute = ie(), n.beforeEach((s, c) => {
			n.firstRoute.value = {
				to: s,
				from: c
			}
		}), n.afterEach((s, c, l) => {
			l || (n.firstRoute.value = null, o.$previousRoute = c, o.$router.previousRoute.value = c)
		})
	}, n.onViewEnter = Tv, n.onViewLeave = Mv, n
}

function _u(e) {
	e._viewEnters || (e._viewEnters = Wn([]), e._viewLeaves = Wn([]), Ln(() => {
		e._viewEnters.length = 0, e._viewLeaves.length = 0
	}))
}

function Tv(e) {
	const t = Qi();
	!t || !e || (_u(t), t._viewEnters.push(e))
}

function Mv(e) {
	const t = Qi();
	!t || !e || (_u(t), t._viewLeaves.push(e))
}

function yu(e) {
	return {
		counter: 0,
		isHeaderVisible: !0,
		isRotateVisible: !1,
		isMenuOpen: !1,
		isAudioMuted: !1,
		isAudioHovered: !1,
		isTransitionShowing: !1,
		userData: {
			email: null
		}
	}
}
var $v = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: yu
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Iv = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: yu
	}, Symbol.toStringTag, {
		value: "Module"
	}));
const Uc = {
		"/src/stores/appStores.js": $v,
		"/src/stores/index.js": Iv
	},
	Rc = e => typeof e == "object" && !Array.isArray(e) && e !== null;

function F9() {
	let e;
	return {
		install: t
	};

	function t(n) {
		const r = {};
		for (const i in Uc) {
			const a = i.split("/").pop().slice(0, -3);
			r[a] = Uc[i].default, typeof r[a] == "function" && (r[a] = r[a](n))
		}
		e = Rc(r.index) ? r.index : {};
		for (const i in r) i === "index" || !Rc(r[i]) || (e[i] = r[i]);
		e = sn(e), n.config.globalProperties.$stores = e, n.provide("stores", e)
	}
}
const Ia = e => new Promise(t => setTimeout(t, e));

function Ov(e, t) {
	const n = t.querySelector(".preloader-counter"),
		r = t.querySelector(".ball"),
		i = t.querySelector(".paddle"),
		a = t.querySelector(".logo"),
		o = t.querySelector(".preloader-background"),
		s = v1();
	let c = 0,
		l = 0;

	function u() {
		xn.add(f)
	}

	function d(h) {
		c = h
	}

	function f(h) {
		h = y1(h, 5, 300);
		let m = di(l, c, .17, h);
		if (m > .99 && (m = 1), m === l) return;
		l = m;
		const _ = Math.floor(l * 100).toString().padStart(2, "0");
		n.textContent = _, l >= 1 && s.resolve()
	}
	async function b(h) {
		await s, r.style.transition = "opacity 650ms", r.style.opacity = 0, i.style.transition = "opacity 650ms", i.style.opacity = 0, a.style.transition = "opacity 650ms", a.style.opacity = 0, o.style.transition = "transform 1000ms cubic-bezier(0.910, 0.000, 0.195, 0.990)", o.style.transform = "scaleY(0)", await Ia(100), n.style.transition = "opacity 200ms", n.style.opacity = 0, await Ia(100), h(), await Ia(1e3)
	}

	function p() {
		xn.remove(f)
	}
	return {
		enter: u,
		onProgress: d,
		exit: b,
		beforeDestroy: p
	}
}

function N9() {
	let e = !1,
		t = 2,
		n = 0,
		r, i, a, o = !1,
		s, c, l, u, d = Promise.resolve();
	const f = [],
		b = new Promise($ => l = $);
	let p = null;
	const h = Wn(new Promise($ => p = $));
	let m = null;
	const _ = Wn(new Promise($ => m = $)),
		v = sn({
			progress: 0,
			taskCount: 0,
			taskFinished: 0,
			finished: !1,
			hidden: !1,
			hiddenPromise: h,
			destroyed: !1,
			destroyedPromise: _,
			task: I,
			createTask: L,
			setMinimumTaskCount: N,
			beforeExit: g
		});
	return w;

	function g($) {
		o ? $() : f.push($)
	}

	function w($) {
		if (s = L(), a = $, a.config.globalProperties.$router.beforeEach(A), a.config.globalProperties.$preloader = v, a.provide("preloader", v), i = document.getElementById("preloader"), r = Ov(a, i), r.init && r.init(), r.enter && (u = r.enter()), c = Ff(() => S(v.progress)), a && a.onAfterMount) {
			let j;
			d = new Promise(q => j = q), a.onAfterMount(j)
		}
	}

	function k() {
		o || (o = !0, Promise.resolve().then(() => u).then(() => f.reduce(($, j) => $.then(j), Promise.resolve())).then(() => f.length = 0).then(() => v.finished = !0).then(() => r.exit && r.exit(U)).then(M).catch($ => {
			console.error($), M()
		}))
	}

	function S() {
		const $ = v.progress;
		r.onProgress && r.onProgress($), $ >= 1 && k()
	}

	function U() {
		v.hidden || v.destroyed || (v.hidden = !0, p(), c && c(), c = null, l())
	}

	function M() {
		v.destroyed || (U(), i.parentNode && i.parentNode.removeChild(i), r.beforeDestroy && r.beforeDestroy(), m(), i = null, r = null, v.destroyed = !0)
	}

	function A($, j, q) {
		e || (a.config.globalProperties.$router.beforeResolve(x), e = !0), q()
	}
	async function x($, j, q) {
		s.finish(), await b, q()
	}

	function z($) {
		v.taskFinished += $;
		const j = v.taskFinished / v.taskCount;
		v.progress = Math.max(0, Math.min(1, Math.max(v.progress, j)))
	}

	function C($) {
		n += $, v.taskCount = Math.max(t, n)
	}

	function L({
		weight: $ = 1
	} = {}) {
		let j = !1;
		return C($), {
			get finished() {
				return j
			},
			finish() {
				j || (j = !0, z($))
			}
		}
	}

	function I($, {
		weight: j = 1,
		graceful: q = !0
	} = {}) {
		return C(j), d.then(() => typeof $ == "function" ? $() : $).then(ne => (z(j), ne)).catch(ne => {
			console.error(ne), q && z(j)
		})
	}

	function N($) {
		t = $, v.taskCount = Math.max(t, n)
	}
}

function ii(e, t, n, r, i) {
	for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
	return e === i ? n : e
}
const Uv = {};

function mi(e, t = !1) {
	const n = window.__DATA || Uv;
	return ii(n, e, ii(n.page, e, ii(n.site, e, ii(n.project, e, t ? e : ""))))
}

function Hc(e) {
	const t = e.tag || e.tagName || "span";
	let n = e.debug;
	typeof n == "string" && !n.length && (n = !0);
	const r = mi(e.id || "", !!n);
	return Cn(t, {
		innerHTML: r
	})
}

function j9() {
	return {
		install: e
	};

	function e(t) {
		t.config.globalProperties.$l = mi, t.config.globalProperties.$translation = mi, t.provide("translation", mi), t.component("Translation", Hc), t.component("L", Hc)
	}
}
/*!*********************************************************************
	* This Source Code Form is copyright of 51 Degrees Mobile Experts Limited.
	* Copyright 2019 51 Degrees Mobile Experts Limited, 9 Greyfriars Rd,
	* Reading, Berkshire, RG1 1NU.
	*
	* This Source Code Form is the subject of the following patents and patent
	* applications, owned by 51 Degrees Mobile Experts Limited of 9 Greyfriars
	* Rd, Reading, Berkshire, RG1 1NU:
	* GB1905888.2 and EP19192975.1.
	*
	* This Source Code Form is subject to the terms of the Mozilla Public
	* License, v. 2.0.
	*
	* If a copy of the MPL was not distributed with this file, You can obtain
	* one at http://mozilla.org/MPL/2.0/.
	*
	* This Source Code Form is "Incompatible With Secondary Licenses", as
	* defined by the Mozilla Public License, v. 2.0.
	********************************************************************** */
function Rv(e) {
	/*! VERSION = 1.620628 */
	let t = [{
		x: "Unknown",
		m: function(p) {
			return d()
		},
		n: [4, 2, 1, 3]
	}, {
		x: "Apple A7 GPU|Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A12 GPU|Apple A13 GPU|Apple A14 GPU|Apple A15 GPU",
		m: function(p) {
			return s()
		},
		n: [10, 11, 12, 15, 14, 6, 7, 8, 5, 9, 13],
		v: ["iPhone"]
	}, {
		x: "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8X GPU|Apple M1 GPU|Apple A14 GPU|Apple A12Z GPU|Apple A15 GPU|Apple A13 GPU",
		m: function(p) {
			return s()
		},
		n: [22, 18, 21, 20, 19, 17, 16],
		v: ["iPad"]
	}, {
		x: "Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A12X GPU|Apple A12 GPU|Apple A8 GPU|Apple A8X GPU|Apple A13 GPU|Apple A14 GPU|Apple M1 GPU|Apple A12Z GPU|Apple A15 GPU",
		m: function(p) {
			return s()
		},
		n: [22, 18, 21, 10, 11, 12, 15, 20, 19, 24, 27, 14, 17, 25, 26, 9, 13, 23],
		v: ["Macintosh"]
	}, {
		x: "Apple A10 GPU",
		v: ["iPod Touch"]
	}, {
		x: "Apple A7 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A8 GPU|Apple A13 GPU|Apple A15 GPU",
		m: function(p) {
			return u()
		},
		n: [28, 29],
		v: [1136]
	}, {
		x: "Apple A8 GPU|Apple A10 GPU|Apple A11 GPU|Apple A9 GPU",
		m: function(p) {
			return u()
		},
		n: [30, 31],
		v: [2001]
	}, {
		x: "Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",
		m: function(p) {
			return u()
		},
		n: [32, 33],
		v: [2208]
	}, {
		x: "Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
		m: function(p) {
			return u()
		},
		n: [34, 35],
		v: [1334]
	}, {
		x: "Apple A11 GPU|Apple A12 GPU|Apple A13 GPU|Apple A14 GPU|Apple A15 GPU",
		m: function(p) {
			return n()
		},
		n: [37, 38, 39, 40, 36, 41],
		v: [2436]
	}, {
		x: "Apple A12 GPU|Apple A13 GPU",
		m: function(p) {
			return n()
		},
		n: [42, 36],
		v: [2688]
	}, {
		x: "Apple A12 GPU|Apple A13 GPU",
		m: function(p) {
			return n()
		},
		n: [44, 43],
		v: [1624]
	}, {
		x: "Apple A12 GPU|Apple A13 GPU",
		m: function(p) {
			return n()
		},
		n: [44, 43],
		v: [1792]
	}, {
		x: "Apple A11 GPU|Apple A12 GPU|Apple A14 GPU|Apple A13 GPU|Apple A15 GPU",
		m: function(p) {
			return n()
		},
		n: [47, 45, 36, 46, 41],
		v: [2079]
	}, {
		x: "Apple A14 GPU|Apple A15 GPU",
		m: function(p) {
			return n()
		},
		n: [48, 39, 40],
		v: [2532]
	}, {
		x: "Apple A14 GPU|Apple A15 GPU",
		m: function(p) {
			return n()
		},
		n: [39, 49],
		v: [2778]
	}, {
		x: "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8X GPU|Apple M1 GPU|Apple A12Z GPU",
		m: function(p) {
			return u()
		},
		n: [51, 50],
		v: [2048]
	}, {
		x: "Apple A9X GPU|Apple A10X GPU|Apple A12X GPU|Apple M1 GPU|Apple A12Z GPU",
		m: function(p) {
			return u()
		},
		n: [52, 53],
		v: [2732]
	}, {
		x: "Apple A10X GPU|Apple A12 GPU",
		m: function(p) {
			return o()
		},
		n: [55, 54],
		v: [2224]
	}, {
		x: "Apple A12X GPU|Apple M1 GPU|Apple A12Z GPU",
		m: function(p) {
			return n()
		},
		n: [57, 56],
		v: [2388]
	}, {
		x: "Apple A10 GPU|Apple A12 GPU|Apple A13 GPU",
		m: function(p) {
			return o()
		},
		n: [58, 59, 60],
		v: [2160]
	}, {
		x: "Apple A14 GPU|Apple M1 GPU",
		m: function(p) {
			return n()
		},
		n: [39, 62, 61],
		v: [2360]
	}, {
		x: "Apple A15 GPU",
		v: [2266]
	}, {
		x: "Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8 GPU|Apple A8X GPU|Apple M1 GPU|Apple A12Z GPU",
		m: function(p) {
			return u()
		},
		n: [63, 51],
		v: [2048]
	}, {
		x: "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",
		m: function(p) {
			return u()
		},
		n: [64, 33],
		v: [2208]
	}, {
		x: "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
		m: function(p) {
			return u()
		},
		n: [64, 35],
		v: [1334]
	}, {
		x: "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
		m: function(p) {
			return u()
		},
		n: [65, 29],
		v: [1136]
	}, {
		x: "Apple A10 GPU|Apple A11 GPU|Apple A9 GPU",
		m: function(p) {
			return u()
		},
		n: [64, 31],
		v: [2001]
	}, {
		x: "Apple A7 GPU|Apple A9 GPU|Apple A8 GPU",
		m: function(p) {
			return o()
		},
		n: [66, 68, 67, 69, 70],
		v: ["srgb"]
	}, {
		x: "Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
		m: function(p) {
			return n()
		},
		n: [71, 37, 44, 73, 72],
		v: ["p3"]
	}, {
		x: "Apple A8 GPU|Apple A9 GPU",
		m: function(p) {
			return o()
		},
		n: [74, 75],
		v: ["srgb"]
	}, {
		x: "Apple A10 GPU|Apple A11 GPU",
		m: function(p) {
			return o()
		},
		n: [76, 77],
		v: ["p3"]
	}, {
		x: "Apple A8 GPU|Apple A9 GPU",
		m: function(p) {
			return o()
		},
		n: [78, 79],
		v: ["srgb"]
	}, {
		x: "Apple A10 GPU|Apple A11 GPU",
		m: function(p) {
			return o()
		},
		n: [76, 80],
		v: ["p3"]
	}, {
		x: "Apple A8 GPU|Apple A9 GPU",
		m: function(p) {
			return o()
		},
		n: [81, 82],
		v: ["srgb"]
	}, {
		x: "Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
		m: function(p) {
			return n()
		},
		n: [71, 37, 44, 73, 72],
		v: ["p3"]
	}, {
		x: "Apple A12 GPU",
		v: [958581112, 2301174800, 4085158452]
	}, {
		x: "Apple A11 GPU",
		v: [367695777, 411650080, 1220644697]
	}, {
		x: "Apple A13 GPU",
		v: [4193218782]
	}, {
		x: "Apple A14 GPU",
		v: [105985484]
	}, {
		x: "Apple A14 GPU",
		v: [3403189785]
	}, {
		x: "Apple A14 GPU|Apple A15 GPU",
		v: [2364051618]
	}, {
		x: "Apple A13 GPU",
		v: [352823931, 4193218782]
	}, {
		x: "Apple A12 GPU",
		v: [958581112, 2301174800, 3403189785, 4085158452]
	}, {
		x: "Apple A13 GPU",
		v: [352823931, 3335845976, 4193218782]
	}, {
		x: "Apple A11 GPU",
		v: [367695777, 411650080]
	}, {
		x: "Apple A14 GPU",
		v: [105985484, 679860869, 3403189785]
	}, {
		x: "Apple A13 GPU",
		v: [352823931]
	}, {
		x: "Apple A15 GPU",
		v: [679860869]
	}, {
		x: "Apple A15 GPU",
		v: [1407135659]
	}, {
		x: "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A9 GPU|Apple A10 GPU|Apple A8X GPU",
		m: function(p) {
			return o()
		},
		n: [86, 83, 87, 88, 89, 91, 84, 85, 90, 66],
		v: ["srgb"]
	}, {
		x: "Apple A10X GPU|Apple A9X GPU|Apple A12X GPU|Apple A12 GPU|Apple M1 GPU|Apple A12Z GPU",
		m: function(p) {
			return n()
		},
		n: [96, 57, 93, 92, 94, 95],
		v: ["p3"]
	}, {
		x: "Apple A9X GPU",
		v: ["srgb"]
	}, {
		x: "Apple A10X GPU|Apple A12X GPU|Apple M1 GPU|Apple A12Z GPU",
		m: function(p) {
			return n()
		},
		n: [98, 97, 96, 99, 100],
		v: ["p3"]
	}, {
		x: "Apple A10X GPU",
		v: [63583436, 2114570256, 3129316290]
	}, {
		x: "Apple A12 GPU",
		v: [1349146759, 2917249763]
	}, {
		x: "Apple A12X GPU|Apple A12Z GPU",
		v: [4085158452]
	}, {
		x: "Apple M1 GPU",
		v: [105985484, 3403189785]
	}, {
		x: "Apple A10 GPU",
		v: [2114570256]
	}, {
		x: "Apple A12 GPU",
		v: [1349146759]
	}, {
		x: "Apple A12 GPU|Apple A13 GPU",
		m: function(p) {
			return n()
		},
		n: [102, 101],
		v: [2206992415]
	}, {
		x: "Apple A14 GPU|Apple M1 GPU",
		m: function(p) {
			return o()
		},
		n: [103, 104],
		v: [3403189785]
	}, {
		x: "Apple M1 GPU",
		v: [2364051618]
	}, {
		x: "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU|Apple A8 GPU|Apple A8X GPU",
		m: function(p) {
			return n()
		},
		n: [111, 106, 108, 107, 105, 109, 110],
		v: ["srgb"]
	}, {
		x: "Apple A9 GPU",
		v: ["srgb"]
	}, {
		x: "Apple A9 GPU|Apple A10 GPU",
		m: function(p) {
			return o()
		},
		n: [112, 69, 70],
		v: ["srgb"]
	}, {
		x: "Apple A7 GPU",
		v: [857422828, 1915583345]
	}, {
		x: "Apple A9 GPU",
		v: [46663968, 3129316290]
	}, {
		x: "Apple A8 GPU",
		v: [839732043, 3816812018, 4125234388]
	}, {
		x: "Apple A9 GPU",
		v: [2114570256]
	}, {
		x: "Apple A9 GPU",
		v: [63583436]
	}, {
		x: "Apple A10 GPU",
		v: [583354101, 3458129248, 3928876783]
	}, {
		x: "Apple A13 GPU|Apple A15 GPU",
		m: function(p) {
			return o()
		},
		n: [113, 114],
		v: [3403189785]
	}, {
		x: "Apple A15 GPU",
		v: [2364051618]
	}, {
		x: "Apple A8 GPU",
		v: [1411440593, 1924197914, 4125234388]
	}, {
		x: "Apple A9 GPU",
		v: [2114570256, 3129316290]
	}, {
		x: "Apple A10 GPU",
		v: [63583436, 2114570256, 3129316290]
	}, {
		x: "Apple A11 GPU",
		v: [1349146759, 2917249763]
	}, {
		x: "Apple A8 GPU",
		v: [1411440593, 1913250432, 3074367344, 4125234388]
	}, {
		x: "Apple A9 GPU",
		v: [46663968, 2114570256, 3129316290]
	}, {
		x: "Apple A11 GPU",
		v: [2917249763, 3237505312]
	}, {
		x: "Apple A8 GPU",
		v: [3128296539, 3816812018, 4125234388]
	}, {
		x: "Apple A9 GPU",
		v: [46663968, 63583436, 2114570256, 3129316290]
	}, {
		x: "Apple A8 GPU",
		v: [2656686317, 3710391565]
	}, {
		x: "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU",
		v: [3129316290]
	}, {
		x: "Apple A9 GPU|Apple A9X GPU|Apple A10 GPU",
		m: function(p) {
			return n()
		},
		n: [115, 105, 109],
		v: [2114570256]
	}, {
		x: "Apple A10 GPU",
		v: [46663968]
	}, {
		x: "Apple A8 GPU|Apple A8X GPU",
		m: function(p) {
			return r(p)
		},
		n: [117, 116],
		v: [4125234388]
	}, {
		x: "Apple A8 GPU|Apple A8X GPU",
		m: function(p) {
			return n()
		},
		n: [118, 119, 120],
		v: [4005673483]
	}, {
		x: "Apple A8 GPU|Apple A8X GPU",
		v: [1350183384, 1361285941, 3816812018]
	}, {
		x: "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU",
		m: function(p) {
			return n()
		},
		n: [111, 110],
		v: [63583436]
	}, {
		x: "Apple A8 GPU|Apple A8X GPU",
		m: function(p) {
			return n()
		},
		n: [122, 121],
		v: [2870741841]
	}, {
		x: "Apple A10X GPU|Apple A9X GPU",
		v: [3458129248]
	}, {
		x: "Apple A12X GPU|Apple A12 GPU",
		v: [4085158452]
	}, {
		x: "Apple A10X GPU|Apple A9X GPU",
		m: function(p) {
			return r(p)
		},
		n: [123, 124],
		v: [583354101]
	}, {
		x: "Apple A10X GPU|Apple A9X GPU",
		m: function(p) {
			return r(p)
		},
		n: [125, 126],
		v: [3928876783]
	}, {
		x: "Apple A12Z GPU",
		v: [958581112]
	}, {
		x: "Apple A12X GPU",
		v: [4085158452]
	}, {
		x: "Apple A10X GPU",
		v: [583354101, 3458129248, 3928876783]
	}, {
		x: "Apple M1 GPU",
		v: [105985484]
	}, {
		x: "Apple M1 GPU|Apple A10X GPU|Apple A12Z GPU",
		m: function(p) {
			return o()
		},
		n: [128, 127],
		v: [3403189785]
	}, {
		x: "Apple A12 GPU",
		v: [2301174800]
	}, {
		x: "Apple A13 GPU",
		v: [3335845976]
	}, {
		x: "Apple A14 GPU",
		v: [1349146759]
	}, {
		x: "Apple M1 GPU",
		v: [1444462398]
	}, {
		x: "Apple A9X GPU|Apple A10 GPU",
		v: [3458129248]
	}, {
		x: "Apple A8X GPU",
		v: [1480368425, 1783160115]
	}, {
		x: "Apple A8X GPU|Apple A10 GPU",
		m: function(p) {
			return o()
		},
		n: [58, 129],
		v: [3403189785]
	}, {
		x: "Apple A8 GPU",
		v: [3312905059, 3928382683]
	}, {
		x: "Apple A9 GPU|Apple A9X GPU|Apple A10 GPU",
		m: function(p) {
			return r(p)
		},
		n: [130, 131],
		v: [583354101]
	}, {
		x: "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU",
		m: function(p) {
			return r(p)
		},
		n: [132, 135, 133, 134],
		v: [3928876783]
	}, {
		x: "Apple A10 GPU",
		v: [1058363647, 2015944978]
	}, {
		x: "Apple A9 GPU",
		v: [46663968]
	}, {
		x: "Apple A13 GPU",
		v: [1349146759]
	}, {
		x: "Apple A15 GPU",
		v: [1444462398]
	}, {
		x: "Apple A10 GPU",
		v: [3403189785]
	}, {
		x: "Apple A8 GPU|Apple A8X GPU",
		m: function(p) {
			return i(p)
		},
		n: [136, 137],
		r: [{
			a: 29.78,
			b: 30.87
		}]
	}, {
		x: "Apple A8 GPU",
		r: [{
			a: 31.19,
			b: 31.59
		}]
	}, {
		x: "Apple A8X GPU",
		v: [1783160115]
	}, {
		x: "Apple A8 GPU",
		v: [3928382683]
	}, {
		x: "Apple A8 GPU|Apple A8X GPU",
		m: function(p) {
			return i(p)
		},
		n: [138, 139],
		v: [3403189785]
	}, {
		x: "Apple A8 GPU",
		v: [3312905059]
	}, {
		x: "Apple A8X GPU",
		v: [1480368425]
	}, {
		x: "Apple A10X GPU",
		r: [{
			a: 14.16,
			b: 17.21
		}]
	}, {
		x: "Apple A9X GPU",
		r: [{
			a: 18.44,
			b: 35.94
		}]
	}, {
		x: "Apple A10X GPU",
		r: [{
			a: 12.16,
			b: 16.01
		}]
	}, {
		x: "Apple A9X GPU",
		r: [{
			a: 16.68,
			b: 121.37
		}]
	}, {
		x: "Apple M1 GPU|Apple A12Z GPU",
		v: [1349146759]
	}, {
		x: "Apple A10X GPU",
		v: [2114570256]
	}, {
		x: "Apple A8X GPU",
		v: [4005673483]
	}, {
		x: "Apple A9X GPU|Apple A9 GPU",
		r: [{
			a: 24.38,
			b: 31.67
		}]
	}, {
		x: "Apple A10 GPU|Apple A9X GPU",
		r: [{
			a: 16.82,
			b: 22.52
		}]
	}, {
		x: "Apple A10 GPU",
		r: [{
			a: 13.38,
			b: 16.4
		}]
	}, {
		x: "Apple A9X GPU|Apple A9 GPU",
		r: [{
			a: 19.75,
			b: 21.8
		}]
	}, {
		x: "Apple A10 GPU|Apple A9X GPU",
		r: [{
			a: 16.41,
			b: 19.14
		}]
	}, {
		x: "Apple A9X GPU",
		r: [{
			a: 89.03,
			b: 200.59
		}]
	}, {
		x: "Apple A8X GPU",
		r: [{
			a: .26,
			b: 5.62
		}]
	}, {
		x: "Apple A8 GPU",
		r: [{
			a: 7.18,
			b: 161.36
		}]
	}, {
		x: "Apple A8X GPU",
		r: [{
			a: .53,
			b: 13.31
		}]
	}, {
		x: "Apple A8 GPU",
		r: [{
			a: 83.08,
			b: 2952.42
		}]
	}];

	function n() {
		let p, h, m, _ = "attribute vec3 c,d; uniform vec4 e; uniform vec3 f,g;uniform mat4 h,i;varying vec3 j;void main(){vec3 a=normalize(d);vec4 b=h*vec4(c,1.);vec3 k=normalize(vec3(e-b));j=g*f*max(dot(k,a),0.),gl_Position=i*vec4(c,1.);}",
			v = `#ifdef GL_ES
precision mediump float;
#endif
varying vec3 j;void main(){gl_FragColor = vec4(j, 1.0);}`;
		var g = {
			create: function() {
				let A = new Array(16);
				for (let x = 0; x < 16; x++) A[x] = x % 5 == 0 ? 1 : 0;
				return A
			},
			perspective: function(A, x, z, C, L) {
				let I = 1 / Math.tan(x / 2),
					N;
				return A[0] = I / z, A[1] = 0, A[2] = 0, A[3] = 0, A[4] = 0, A[5] = I, A[6] = 0, A[7] = 0, A[8] = 0, A[9] = 0, A[11] = -1, A[12] = 0, A[13] = 0, A[15] = 0, L != null && L !== 1 / 0 ? (N = 1 / (C - L), A[10] = (L + C) * N, A[14] = 2 * L * C * N) : (A[10] = -1, A[14] = -2 * C), A
			},
			lookAt: function(A, x, z, C) {
				let L, I, N, $, j, q, ne, F, T, E, R = x[0],
					B = x[1],
					H = x[2],
					Z = C[0],
					Y = C[1],
					Q = C[2],
					se = z[0],
					oe = z[1],
					re = z[2];
				return Math.abs(R - se) < 1e-6 && Math.abs(B - oe) < 1e-6 && Math.abs(H - re) < 1e-6 ? g.identity(A) : (ne = R - se, F = B - oe, T = H - re, E = 1 / Math.hypot(ne, F, T), ne *= E, F *= E, T *= E, L = Y * T - Q * F, I = Q * ne - Z * T, N = Z * F - Y * ne, E = Math.hypot(L, I, N), E ? (E = 1 / E, L *= E, I *= E, N *= E) : (L = 0, I = 0, N = 0), $ = F * N - T * I, j = T * L - ne * N, q = ne * I - F * L, E = Math.hypot($, j, q), E ? (E = 1 / E, $ *= E, j *= E, q *= E) : ($ = 0, j = 0, q = 0), A[0] = L, A[1] = $, A[2] = ne, A[3] = 0, A[4] = I, A[5] = j, A[6] = F, A[7] = 0, A[8] = N, A[9] = q, A[10] = T, A[11] = 0, A[12] = -(L * R + I * B + N * H), A[13] = -($ * R + j * B + q * H), A[14] = -(ne * R + F * B + T * H), A[15] = 1, A)
			},
			multiply: function(A, x, z) {
				let C = x[0],
					L = x[1],
					I = x[2],
					N = x[3],
					$ = x[4],
					j = x[5],
					q = x[6],
					ne = x[7],
					F = x[8],
					T = x[9],
					E = x[10],
					R = x[11],
					B = x[12],
					H = x[13],
					Z = x[14],
					Y = x[15],
					Q = z[0],
					se = z[1],
					oe = z[2],
					re = z[3];
				return A[0] = Q * C + se * $ + oe * F + re * B, A[1] = Q * L + se * j + oe * T + re * H, A[2] = Q * I + se * q + oe * E + re * Z, A[3] = Q * N + se * ne + oe * R + re * Y, Q = z[4], se = z[5], oe = z[6], re = z[7], A[4] = Q * C + se * $ + oe * F + re * B, A[5] = Q * L + se * j + oe * T + re * H, A[6] = Q * I + se * q + oe * E + re * Z, A[7] = Q * N + se * ne + oe * R + re * Y, Q = z[8], se = z[9], oe = z[10], re = z[11], A[8] = Q * C + se * $ + oe * F + re * B, A[9] = Q * L + se * j + oe * T + re * H, A[10] = Q * I + se * q + oe * E + re * Z, A[11] = Q * N + se * ne + oe * R + re * Y, Q = z[12], se = z[13], oe = z[14], re = z[15], A[12] = Q * C + se * $ + oe * F + re * B, A[13] = Q * L + se * j + oe * T + re * H, A[14] = Q * I + se * q + oe * E + re * Z, A[15] = Q * N + se * ne + oe * R + re * Y, A
			},
			identity: function(A) {
				return A[0] = 1, A[1] = 0, A[2] = 0, A[3] = 0, A[4] = 0, A[5] = 1, A[6] = 0, A[7] = 0, A[8] = 0, A[9] = 0, A[10] = 1, A[11] = 0, A[12] = 0, A[13] = 0, A[14] = 0, A[15] = 1, A
			}
		};

		function w(A) {
			let x = 50,
				z = 50,
				C = 2,
				L = [],
				I = [],
				N = [],
				$ = [],
				j, q;
			for (j = 0; j <= x; ++j) {
				let B = j * Math.PI / x,
					H = Math.sin(B),
					Z = Math.cos(B);
				for (q = 0; q <= z; ++q) {
					let Y = q * 2 * Math.PI / z,
						Q = Math.sin(Y),
						oe = Math.cos(Y) * H,
						re = Z,
						pe = Q * H,
						y = 1 - q / z,
						P = 1 - j / x;
					L.push(C * oe), L.push(C * re), L.push(C * pe), I.push(oe), I.push(re), I.push(pe), N.push(y), N.push(P)
				}
			}
			for (j = 0; j < x; ++j)
				for (q = 0; q < z; ++q) {
					let B = j * (z + 1) + q,
						H = B + z + 1;
					$.push(B), $.push(H), $.push(B + 1), $.push(H), $.push(H + 1), $.push(B + 1)
				}
			L = new Float32Array(L), I = new Float32Array(I), N = new Float32Array(N), $ = new Uint16Array($);
			let ne = A.createBuffer(),
				F = A.createBuffer(),
				T = A.createBuffer();
			A.bindBuffer(A.ARRAY_BUFFER, ne), A.bufferData(A.ARRAY_BUFFER, L, A.STATIC_DRAW);
			let E = A.getAttribLocation(h, "c");
			A.vertexAttribPointer(E, 3, A.FLOAT, !1, 0, 0), A.enableVertexAttribArray(E), A.bindBuffer(A.ARRAY_BUFFER, F), A.bufferData(A.ARRAY_BUFFER, I, A.STATIC_DRAW);
			let R = A.getAttribLocation(h, "d");
			return A.vertexAttribPointer(R, 3, A.FLOAT, !1, 0, 0), A.enableVertexAttribArray(R), A.bindBuffer(A.ELEMENT_ARRAY_BUFFER, T), A.bufferData(A.ELEMENT_ARRAY_BUFFER, $, A.STATIC_DRAW), $.length
		}

		function k() {
			if (!(p = U())) return;
			let A = p.createShader(p.VERTEX_SHADER);
			p.shaderSource(A, _), p.compileShader(A);
			let x = p.createShader(p.FRAGMENT_SHADER);
			p.shaderSource(x, v), p.compileShader(x), h = p.createProgram(), p.attachShader(h, A), p.attachShader(h, x), p.linkProgram(h), p.detachShader(h, A), p.detachShader(h, x), p.deleteShader(A), p.deleteShader(x), p.useProgram(h);
			let z = w(p);
			p.clearColor(0, 0, 0, 1), p.enable(p.DEPTH_TEST);
			let C = g.create();
			g.perspective(C, Math.PI / 6, 1, .1, 100);
			let L = g.create();
			g.lookAt(L, [0, 0, 10], [0, 0, 0], [0, 1, 0]);
			let I = g.create();
			g.multiply(I, C, L);
			let N = p.getUniformLocation(h, "h");
			p.uniformMatrix4fv(N, !1, L);
			let $ = p.getUniformLocation(h, "i");
			p.uniformMatrix4fv($, !1, I);
			let j = p.getUniformLocation(h, "e");
			p.uniform4fv(j, [10, 10, 10, 1]);
			let q = p.getUniformLocation(h, "f");
			p.uniform3fv(q, [.9, .5, .3]);
			let ne = p.getUniformLocation(h, "g");
			return p.uniform3fv(ne, [1, 1, 1]), p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), p.drawElements(p.TRIANGLES, z, p.UNSIGNED_SHORT, 0), S(), m.toDataURL()
		}

		function S() {
			p.useProgram(null), h && p.deleteProgram(h)
		}

		function U() {
			m.width = 67, m.height = 67;
			let A = m.getContext("webgl") || m.getContext("experimental-webgl");
			return A && (A.viewport(0, 0, 67, 67), A.clearColor(0, 0, 0, 1), A.clear(A.COLOR_BUFFER_BIT)), A
		}
		let M = 0;
		if (m = document.createElement("canvas"), m != null) {
			let A = k();
			A && (M = a(A))
		}
		return M
	}

	function r(p) {
		e(p.x)
	}

	function i(p) {
		e(p.x)
	}

	function a(p) {
		let h = 2166136261;
		for (let m = 0; m < p.length; ++m) h ^= p.charCodeAt(m), h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
		return h >>> 0
	}

	function o() {
		function p(_) {
			_.width = 67, _.height = 67;
			let v = _.getContext("2d", {
				alpha: !0
			});
			if (v != null) return v.imageSmoothingQuality = "low", v.imageSmoothingEnabled = !0, v.globalCompositeOperation = "source-over", v.globalAlpha = 1, v.miterLimit = 1 / 0, v.filter = "none", v.lineCap = "butt", v.lineDashOffset = 0, v.lineJoin = "miter", v.font = "10pt Arial", v.lineWidth = 2, v.setLineDash !== void 0 && v.setLineDash([10, 20]), v.shadowColor = "black", v.shadowOffsetX = -3, v.shadowOffsetY = -5, v.translate(_.width / 2, _.height / 2), v.rotate(.8901179), v.fillStyle = "green", v.textAlign = "center", v.textBaseline = "middle", v.fillText("*51Degrees*", 0, 0), v.beginPath(), v.shadowColor = "yellow", v.shadowBlur = 1, v.shadowOffsetX = 1, v.shadowOffsetY = 1, v.strokeStyle = "red", v.fillStyle = "rgba(0, 0, 255, 0.6)", v.ellipse === void 0 ? v.arc(0, 0, 25, 0, 2 * Math.PI) : v.ellipse(0, 0, 25, 15, Math.PI / 4, 0, 2 * Math.PI), v.fill(), v.stroke(), _.toDataURL()
		}
		let h = 0,
			m = document.createElement("canvas");
		if (m != null) {
			let _ = p(m);
			_ && (h = a(_))
		}
		return h
	}

	function s() {
		return window.screen.height * window.devicePixelRatio
	}

	function c(p) {
		return window.matchMedia(p).matches
	}

	function l(p, h) {
		for (let m = 0; m < h.length; m++)
			if (c("(" + p + ": " + h[m] + ")")) return h[m];
		return "n/a"
	}

	function u() {
		return l("color-gamut", ["p3", "srgb"])
	}

	function d() {
		let p = /iPhone|iPad|Macintosh/.exec(navigator.userAgent);
		return p && p.length > 0 ? p[0] : ""
	}

	function f(p, h, m) {
		for (let _ = 0; _ < p.n.length; _++) {
			let v = t[p.n[_]];
			if (v.r)
				for (let g = 0; g < v.r.length; g++) {
					let w = v.r[g];
					if ((w.a === null || h >= w.a) && (w.b === null || h <= w.b)) {
						b(v, 0);
						return
					}
				} else if (v.v && v.v.indexOf(h) != -1) {
					b(v, 0);
					return
				}
		}
		p.n.length > 0 && m < 10 && setTimeout(function() {
			b(p, m + 1)
		}, 10), e(p.x)
	}

	function b(p, h) {
		if (p.m) {
			let m = p.m(p);
			m || m === "" ? m.then || f(p, m, h) : p.x && e(p.x)
		} else e(p.x)
	}
	b(t[0], 0)
}
var Gc = {
	ultra: [
		["not-mobile", "ge", "geforce gtx", 1050],
		["is", "radeon vii"],
		["ge", "radeon rx vega", 64],
		["is", "geforce titan"],
		["ge", "radeon rx", 5e3],
		["is", "apple m"],
		["ge", "apple a", 12, 100],
		["ge", "apple a", 13]
	],
	veryhigh: [
		["is", "geforce rtx"],
		["is", "quadro gtx"],
		["ge", "apple a", 12],
		["mobile", "ge", "geforce gtx", 780],
		["not-mobile", "ge", "geforce gtx", 680],
		["ge", "quadro p", 400],
		["is", "radeon r10"],
		["is", "radeon r9"],
		["ge", "radeon r7", 370],
		["ge", "radeon rx", 570],
		["ge", "radeon rx vega", 56]
	],
	high: [
		["is", "geforce gtx"],
		["ge", "geforce mx", 250],
		["ge", "radeon pro", 450],
		["not-mobile", "ge", "radeon hd", 5570],
		["ge", "adreno", 418],
		["ge", "apple a", 11],
		["ge", "mali g", 71],
		["ge", "mali t", 760, 8],
		["ge", "mali t", 880]
	],
	medium: [
		["brand", "nvidia"],
		["brand", "amd"],
		["brand", "apple"],
		["is", "intel iris plus"],
		["is", "intel iris pro"],
		["ge", "intel hd", 630],
		["le", "intel hd", 2e3],
		["ge", "adreno", 430],
		["is", "mali g"],
		["ge", "mali t", 800, 2],
		["ge", "mali t", 860]
	]
};
const Ri = "unknown",
	tr = (e, t) => t.reduce((n, r) => n || !!e.match(r), !1),
	vs = (e, t) => {
		for (const n in t)
			if (tr(e, t[n])) return n
	},
	xu = {
		edge: ["edge"],
		chrome: ["chrome", "crios"],
		firefox: ["firefox", "fxios"],
		ie: ["msie", "trident", "rv:"],
		ucbrowser: ["ucbrowser"],
		safari: ["safari", "ios"],
		opera: ["opera", "opios"]
	},
	Hv = {
		0: "verylow",
		1: "low",
		2: "medium",
		3: "high",
		4: "veryhigh",
		5: "ultra"
	};

function Gv(e, t = !1) {
	const n = {};
	if (t) return Object.assign(n, {
		type: {
			desktop: !0
		},
		os: "windows",
		browser: "chrome",
		browserVersion: "77",
		gpu: kr("low")
	});
	n.userAgent = typeof e == "string" ? e : navigator.userAgent.toLowerCase(), n.hasTouch = Bv(), n.type = Fv(n), n.os = Nv(n), n.browser = jv(n), n.browserVersion = Dv(n);
	let r = Bc(n, !0);
	const i = !r;
	return Fc(), r = Bc(n, !1), n.majorPerformanceCaveat = r && i, n.webgl = r ? Wv(n, r) : null, Fc(), r = null, n.gpu = kr("low"), n.gpuDetectionFinished = n.webgl ? Vv(n).then(a => Object.assign(n.gpu, a)) : Promise.resolve(n.gpu), n
}

function Bv() {
	return "ontouchstart" in window || navigator.maxTouchPoints > 1
}

function wu(e, t) {
	const n = tr(e, ["ipad", "mac", "macos"]),
		r = tr(e, ["iphone"]),
		i = navigator.platform === "MacIntel";
	return !!(!r && n && i && t)
}

function Fv({
	hasTouch: e,
	userAgent: t
}) {
	const n = ["ios", "iphone", "ipad", "phone", "android", "blackberry"],
		r = Math.max(screen.width, screen.height) > 900,
		i = wu(t, e),
		a = !!(i || e && tr(t, n)),
		o = !!(a && (i || r)),
		s = !a;
	return {
		desktop: s,
		mobile: a,
		tablet: o,
		phone: !s && !o
	}
}

function Nv({
	hasTouch: e,
	type: t,
	userAgent: n
}) {
	if (wu(n, e)) return "ios";
	const r = {
			desktop: {
				windows: ["windows", "iemobile"],
				linux: ["linux"],
				macos: ["mac os"]
			},
			mobile: {
				android: ["android"],
				ios: ["ipad", "iphone"],
				blackberry: ["blackberry"]
			}
		},
		i = t.desktop ? r.desktop : r.mobile;
	return vs(n, i) || Ri
}

function jv({
	userAgent: e,
	os: t
}) {
	const n = vs(e, xu);
	return n || (t === "ios" ? "safari" : Ri)
}

function Dv({
	userAgent: e,
	browser: t
}) {
	const n = r => {
		const i = e.split(r)[1];
		if (!i || i.length <= 0) return;
		const a = parseFloat(i.split(" ")[0].split(".")[0].replace(/[^.0-9]/g, ""));
		if (!isNaN(a)) return a
	};
	switch (t) {
		case "chrome":
		case "firefox":
			xu[t].forEach(i => {
				const a = n(i);
				if (a !== null || a !== void 0) return a
			});
			return;
		case "safari":
			let r = e.match(/version\/([.\d]+)/i);
			return r && r[1] ? parseFloat(r[1]) : (r = e.match(/os ([0-9_]+)/i), r && r[1] ? parseFloat(r[1].split("_")[0]) : void 0);
		case "ie":
		case "edge":
			return tr(e, ["msie"]) ? n("msie") : tr(e, ["rv:"]) ? n("rv:") : n("edge/");
		default:
			return
	}
}
async function Vv({
	os: e,
	webgl: t
}) {
	const n = {
			string: null,
			quality: {
				low: !0
			},
			qualityIndex: 1,
			type: null,
			series: null,
			version: null,
			numbers: [],
			isMobile: null
		},
		r = {
			intel: ["intel"],
			nvidia: ["nvidia", "geforce"],
			amd: ["amd", "radeon"],
			adreno: ["adreno"],
			apple: ["apple"],
			mali: ["mali"],
			swiftshader: ["swiftshader"]
		},
		i = t && t.rendererInfos,
		a = t && t.rendererUnmasked || "";
	return !i || !a.length || (n.string = Nc(a), n.type = vs(n.string, r) || Ri, n.type === Ri) || (e === "ios" && n.string === "apple gpu" && (n.string = await Yv(), n.string = Nc(n.string)), n.isMobile = n.string[n.string.length - 1] === "m", Object.assign(n, qv(n.string)), n.series = Kv(n.string), Object.assign(n, Zv(i, n))), n
}

function Wv(e, t) {
	const n = ["WEBKIT_", "MOZ_"];
	let r = t.getSupportedExtensions() || [];
	r = r.reduce((c, l) => {
		for (let u = 0; u < n.length; u++)
			if (!l.indexOf(n[u])) return c[l.substring(n[u].length)] = l, c;
		return c[l] = l, c
	}, {});
	const i = "WEBGL_compressed_texture_",
		a = ["s3tc", "astc", "etc", "pvrtc"].reduce((c, l) => (c[l] = !!r[i + l], c), {}),
		o = t.getExtension(r.WEBGL_debug_renderer_info),
		s = o ? t.getParameter(o.UNMASKED_RENDERER_WEBGL) : "";
	return {
		renderer: (t.getParameter(t.RENDERER) || "").toLowerCase(),
		rendererInfos: o,
		rendererUnmasked: s,
		version: (t.getParameter(t.VERSION) || "").toLowerCase(),
		glsl: (t.getParameter(t.SHADING_LANGUAGE_VERSION) || "").toLowerCase(),
		extensions: r,
		compressedTextures: a
	}
}

function Bc(e, t) {
	const n = document.createElement("canvas");
	let r;
	try {
		const i = {
			alpha: !1,
			antialias: !1,
			depth: !1,
			failIfMajorPerformanceCaveat: t,
			powerPreference: "high-performance",
			stencil: !1
		};
		e.browser === "safari" && e.browserVersion === 12 && e.type.desktop && delete i.powerPreference, r = n.getContext("webgl", i) || n.getContext("webgl-experimental", i) || n.getContext("experimental-webgl", i)
	} catch {}
	return r
}

function Fc(e) {
	!e || !e.getExtension("WEBGL_lose_context") || e.getExtension("WEBGL_lose_context").loseContext()
}

function qv(e) {
	const t = e.split(" "),
		n = t.map(i => i.replace(/[\D]/g, "")).filter(i => i.length > 0).map(i => parseFloat(i)),
		r = n[0] || null;
	if (e.startsWith("apple a")) {
		const i = t[1] && t[1][t[1].length - 1];
		i === "z" ? n[1] = 100 : i === "x" ? n[1] = 10 : n[1] = 1
	}
	return {
		numbers: n,
		version: r
	}
}

function Kv(e) {
	const t = {
			swiftshader: "swiftshader",
			"apple a": "apple a",
			"apple m2": "apple m2",
			"apple m1": "apple m1",
			"apple m": "apple m",
			"apple gpu": "apple gpu",
			"geforce gtx": "geforce gtx",
			"geforce rtx": "geforce rtx",
			"geforce mx": "geforce mx",
			titan: "geforce titan",
			"quadro fx": "quadro fx",
			"quadro p": "quadro p",
			"quadro rtx": "quadro rtx",
			"quadro ": "quadro",
			"geforce ": "geforce",
			"tegra ": "tegra",
			"radeon vii": "radeon vii",
			"radeon r7": "radeon r7",
			"radeon r9": "radeon r9",
			"radeon r10": "radeon r10",
			"radeon rx": "radeon rx",
			"radeon pro vega": "radeon pro vega",
			"radeon rx vega": "radeon rx vega",
			"radeon hd": "radeon hd",
			"radeon pro ": "radeon pro",
			"radeon ": "radeon",
			"intel iris ": "intel iris",
			"intel iris plus ": "intel iris plus",
			"intel iris pro ": "intel iris pro",
			"intel hd ": "intel hd",
			"intel uhd ": "intel uhd",
			adreno: "adreno",
			"mali-t": "mali t",
			"mali-g": "mali g",
			mali: "mali"
		},
		n = {};
	for (const r in t) e.indexOf(r) > -1 && (n[t[r]] = !0);
	return n
}

function Nc(e) {
	let t = e.toLowerCase();
	return t = t.replace(/(\(tm\)|\(r\))/g, ""), t = t.trim(), t.includes("angle (") && t.includes("direct3d") && (t = t.replace("angle (", "").split(" direct3d")[0]), t.includes("nvidia") && t.includes("gb") && (t = t.split(/\dgb/)[0]), t
}

function Yv() {
	return new Promise(e => {
		Rv(t => {
			const n = t.toLowerCase();
			if (n === "unknown") return e("apple gpu");
			const r = n.split("|");
			if (r.length > 5) return e("apple gpu");
			e(r.pop())
		})
	})
}

function Zv({
	type: e,
	browser: t
}, n) {
	if (!n || !n.type || n.type === "swiftshader") return t === "firefox" && e.desktop ? kr("medium") : kr("low");
	const r = n.isMobile,
		i = n.type,
		a = n.series,
		o = n.version || 0;
	let s = n.numbers[1] || 1;
	const c = n.string.match(/(?:^| )mp(\d)+(?: |$)/i);
	c && (s = parseFloat(c[1]));
	const l = h => a[h],
		b = {
			is: l,
			le: (h, m, _) => l(h) && m <= o && (_ === void 0 || s <= _),
			ge: (h, m, _) => l(h) && o >= m && (_ === void 0 || s >= _),
			brand: h => h === i
		};
	let p = "low";
	for (let h in Gc) {
		const m = Gc[h];
		for (let _ = 0, v = m.length; _ < v; _++) {
			const g = m[_];
			let w = g.shift();
			if (w === "mobile" && !r) continue;
			if (w === "not-mobile" && r) continue;
			b[w] || (w = g.shift());
			const k = b[w];
			if (!!k && !!k(...g)) {
				p = h;
				break
			}
		}
		if (p !== "low") break
	}
	return kr(p)
}

function kr(e) {
	const t = Hv,
		n = Math.max(0, Object.values(t).indexOf(e));
	return {
		qualities: t,
		qualityIndex: n,
		detectedQualityIndex: n
	}
}

function D9(e = {}) {
	const t = {
		install: a,
		updateQuality: r
	};
	return t;

	function n() {
		const o = Gv(e.userAgent);
		Object.assign(t, o), i(t)
	}

	function r(o) {
		const s = document.documentElement;
		if (!t.gpu) return;
		t.gpu.qualityIndex = o;
		const c = t.gpu.qualities;
		for (const l in c) t.gpu && t.gpu.quality && (t.gpu.quality[c[l]] = l <= o), s.classList.toggle(c[l], o == l)
	}

	function i(o) {
		const s = document.documentElement;
		o.hasTouch && s.classList.add("touch");
		for (const c in o.type) o.type[c] && s.classList.add(c.toLowerCase());
		o.browser && o.browser.length > 0 && s.classList.add(o.browser.toLowerCase()), o.os && o.os.length > 0 && o.os !== "Unknown" && s.classList.add(o.os.toLowerCase())
	}

	function a(o) {
		o.config.globalProperties.$device = t, o.provide("device", t), n(), o.onBeforeMount(async () => {
			await t.gpuDetectionFinished, r(t.gpu.qualityIndex)
		}), delete t.install
	}
}
const ai = document.documentElement;
let et;

function Xv() {
	et = document.createElement("div"), Object.assign(et.style, {
		position: "fixed",
		top: 0,
		left: 0,
		width: "200px",
		height: "10px",
		overflowY: "scroll",
		pointerEvents: "none",
		userSelect: "none",
		zIndex: -1,
		opacity: 0
	});

	function e() {
		const n = document.createElement("div"),
			r = {
				width: "1px",
				height: "100%",
				overflowY: "hidden"
			};
		Object.assign(et.style, {
			width: "200px",
			height: "10px",
			overflowY: "scroll"
		}), Object.assign(n.style, {
			width: "100%",
			height: "150%"
		}), et.appendChild(n), document.body.appendChild(et);
		const i = parseFloat(getComputedStyle(ai).zoom),
			a = isNaN(i) ? 1 : i,
			o = Math.round((200 - et.clientWidth) * a);
		return ai.style.setProperty("--scrollbar-width", o + "px"), document.body.removeChild(et), et.removeChild(n), Object.assign(et.style, r), o
	}

	function t() {
		document.body.appendChild(et);
		const r = et.getBoundingClientRect().height;
		return document.body.removeChild(et), ai.style.setProperty("--inner-height", window.innerHeight + "px"), ai.style.setProperty("--vp-height", r + "px"), r
	}
	return {
		measureScrollbarWidth: e,
		measureViewportHeight: t
	}
}

function V9() {
	const e = zp(i, 500, {
		trail: !1
	});
	let t = null;
	const n = sn({
		width: 10,
		height: 10,
		viewportRatio: 1,
		pixelRatio: 1,
		visible: !0
	});

	function r() {
		t = Xv(), t.measureScrollbarWidth(), document.addEventListener("visibilitychange", o, !1), setInterval(a, 5e3), window.addEventListener("resize", () => {
			i(), e()
		}, !1), i(), a(), o()
	}

	function i() {
		n.width = window.innerWidth, n.height = t.measureViewportHeight(), n.viewportRatio = n.width / n.height
	}

	function a() {
		n.pixelRatio = window.devicePixelRatio || 1
	}

	function o() {
		n.visible = !document.hidden, i()
	}
	return function(c) {
		c.config.globalProperties.$viewport = n, c.provide("viewport", n), r()
	}
}
var Au = {
		exports: {}
	},
	Ut = {
		exports: {}
	};
(function(e, t) {
	(function(n, r) {
		e.exports = r()
	})(nt, function() {
		var n = n || function(r, i) {
			var a;
			if (typeof window != "undefined" && window.crypto && (a = window.crypto), typeof self != "undefined" && self.crypto && (a = self.crypto), typeof globalThis != "undefined" && globalThis.crypto && (a = globalThis.crypto), !a && typeof window != "undefined" && window.msCrypto && (a = window.msCrypto), !a && typeof nt != "undefined" && nt.crypto && (a = nt.crypto), !a && typeof sp == "function") try {
				a = require("crypto")
			} catch {}
			var o = function() {
					if (a) {
						if (typeof a.getRandomValues == "function") try {
							return a.getRandomValues(new Uint32Array(1))[0]
						} catch {}
						if (typeof a.randomBytes == "function") try {
							return a.randomBytes(4).readInt32LE()
						} catch {}
					}
					throw new Error("Native crypto module could not be used to get secure random number.")
				},
				s = Object.create || function() {
					function v() {}
					return function(g) {
						var w;
						return v.prototype = g, w = new v, v.prototype = null, w
					}
				}(),
				c = {},
				l = c.lib = {},
				u = l.Base = function() {
					return {
						extend: function(v) {
							var g = s(this);
							return v && g.mixIn(v), (!g.hasOwnProperty("init") || this.init === g.init) && (g.init = function() {
								g.$super.init.apply(this, arguments)
							}), g.init.prototype = g, g.$super = this, g
						},
						create: function() {
							var v = this.extend();
							return v.init.apply(v, arguments), v
						},
						init: function() {},
						mixIn: function(v) {
							for (var g in v) v.hasOwnProperty(g) && (this[g] = v[g]);
							v.hasOwnProperty("toString") && (this.toString = v.toString)
						},
						clone: function() {
							return this.init.prototype.extend(this)
						}
					}
				}(),
				d = l.WordArray = u.extend({
					init: function(v, g) {
						v = this.words = v || [], g != i ? this.sigBytes = g : this.sigBytes = v.length * 4
					},
					toString: function(v) {
						return (v || b).stringify(this)
					},
					concat: function(v) {
						var g = this.words,
							w = v.words,
							k = this.sigBytes,
							S = v.sigBytes;
						if (this.clamp(), k % 4)
							for (var U = 0; U < S; U++) {
								var M = w[U >>> 2] >>> 24 - U % 4 * 8 & 255;
								g[k + U >>> 2] |= M << 24 - (k + U) % 4 * 8
							} else
								for (var A = 0; A < S; A += 4) g[k + A >>> 2] = w[A >>> 2];
						return this.sigBytes += S, this
					},
					clamp: function() {
						var v = this.words,
							g = this.sigBytes;
						v[g >>> 2] &= 4294967295 << 32 - g % 4 * 8, v.length = r.ceil(g / 4)
					},
					clone: function() {
						var v = u.clone.call(this);
						return v.words = this.words.slice(0), v
					},
					random: function(v) {
						for (var g = [], w = 0; w < v; w += 4) g.push(o());
						return new d.init(g, v)
					}
				}),
				f = c.enc = {},
				b = f.Hex = {
					stringify: function(v) {
						for (var g = v.words, w = v.sigBytes, k = [], S = 0; S < w; S++) {
							var U = g[S >>> 2] >>> 24 - S % 4 * 8 & 255;
							k.push((U >>> 4).toString(16)), k.push((U & 15).toString(16))
						}
						return k.join("")
					},
					parse: function(v) {
						for (var g = v.length, w = [], k = 0; k < g; k += 2) w[k >>> 3] |= parseInt(v.substr(k, 2), 16) << 24 - k % 8 * 4;
						return new d.init(w, g / 2)
					}
				},
				p = f.Latin1 = {
					stringify: function(v) {
						for (var g = v.words, w = v.sigBytes, k = [], S = 0; S < w; S++) {
							var U = g[S >>> 2] >>> 24 - S % 4 * 8 & 255;
							k.push(String.fromCharCode(U))
						}
						return k.join("")
					},
					parse: function(v) {
						for (var g = v.length, w = [], k = 0; k < g; k++) w[k >>> 2] |= (v.charCodeAt(k) & 255) << 24 - k % 4 * 8;
						return new d.init(w, g)
					}
				},
				h = f.Utf8 = {
					stringify: function(v) {
						try {
							return decodeURIComponent(escape(p.stringify(v)))
						} catch {
							throw new Error("Malformed UTF-8 data")
						}
					},
					parse: function(v) {
						return p.parse(unescape(encodeURIComponent(v)))
					}
				},
				m = l.BufferedBlockAlgorithm = u.extend({
					reset: function() {
						this._data = new d.init, this._nDataBytes = 0
					},
					_append: function(v) {
						typeof v == "string" && (v = h.parse(v)), this._data.concat(v), this._nDataBytes += v.sigBytes
					},
					_process: function(v) {
						var g, w = this._data,
							k = w.words,
							S = w.sigBytes,
							U = this.blockSize,
							M = U * 4,
							A = S / M;
						v ? A = r.ceil(A) : A = r.max((A | 0) - this._minBufferSize, 0);
						var x = A * U,
							z = r.min(x * 4, S);
						if (x) {
							for (var C = 0; C < x; C += U) this._doProcessBlock(k, C);
							g = k.splice(0, x), w.sigBytes -= z
						}
						return new d.init(g, z)
					},
					clone: function() {
						var v = u.clone.call(this);
						return v._data = this._data.clone(), v
					},
					_minBufferSize: 0
				});
			l.Hasher = m.extend({
				cfg: u.extend(),
				init: function(v) {
					this.cfg = this.cfg.extend(v), this.reset()
				},
				reset: function() {
					m.reset.call(this), this._doReset()
				},
				update: function(v) {
					return this._append(v), this._process(), this
				},
				finalize: function(v) {
					v && this._append(v);
					var g = this._doFinalize();
					return g
				},
				blockSize: 16,
				_createHelper: function(v) {
					return function(g, w) {
						return new v.init(w).finalize(g)
					}
				},
				_createHmacHelper: function(v) {
					return function(g, w) {
						return new _.HMAC.init(v, w).finalize(g)
					}
				}
			});
			var _ = c.algo = {};
			return c
		}(Math);
		return n
	})
})(Ut);
var Cu = {
	exports: {}
};
(function(e, t) {
	(function(n, r) {
		e.exports = r(Ut.exports)
	})(nt, function(n) {
		return function() {
			var r = n,
				i = r.lib,
				a = i.WordArray,
				o = r.enc;
			o.Base64 = {
				stringify: function(c) {
					var l = c.words,
						u = c.sigBytes,
						d = this._map;
					c.clamp();
					for (var f = [], b = 0; b < u; b += 3)
						for (var p = l[b >>> 2] >>> 24 - b % 4 * 8 & 255, h = l[b + 1 >>> 2] >>> 24 - (b + 1) % 4 * 8 & 255, m = l[b + 2 >>> 2] >>> 24 - (b + 2) % 4 * 8 & 255, _ = p << 16 | h << 8 | m, v = 0; v < 4 && b + v * .75 < u; v++) f.push(d.charAt(_ >>> 6 * (3 - v) & 63));
					var g = d.charAt(64);
					if (g)
						for (; f.length % 4;) f.push(g);
					return f.join("")
				},
				parse: function(c) {
					var l = c.length,
						u = this._map,
						d = this._reverseMap;
					if (!d) {
						d = this._reverseMap = [];
						for (var f = 0; f < u.length; f++) d[u.charCodeAt(f)] = f
					}
					var b = u.charAt(64);
					if (b) {
						var p = c.indexOf(b);
						p !== -1 && (l = p)
					}
					return s(c, l, d)
				},
				_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
			};

			function s(c, l, u) {
				for (var d = [], f = 0, b = 0; b < l; b++)
					if (b % 4) {
						var p = u[c.charCodeAt(b - 1)] << b % 4 * 2,
							h = u[c.charCodeAt(b)] >>> 6 - b % 4 * 2,
							m = p | h;
						d[f >>> 2] |= m << 24 - f % 4 * 8, f++
					} return a.create(d, f)
			}
		}(), n.enc.Base64
	})
})(Cu);
var zu = {
	exports: {}
};
(function(e, t) {
	(function(n, r) {
		e.exports = r(Ut.exports)
	})(nt, function(n) {
		return function(r) {
			var i = n,
				a = i.lib,
				o = a.WordArray,
				s = a.Hasher,
				c = i.algo,
				l = [];
			(function() {
				for (var h = 0; h < 64; h++) l[h] = r.abs(r.sin(h + 1)) * 4294967296 | 0
			})();
			var u = c.MD5 = s.extend({
				_doReset: function() {
					this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878])
				},
				_doProcessBlock: function(h, m) {
					for (var _ = 0; _ < 16; _++) {
						var v = m + _,
							g = h[v];
						h[v] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360
					}
					var w = this._hash.words,
						k = h[m + 0],
						S = h[m + 1],
						U = h[m + 2],
						M = h[m + 3],
						A = h[m + 4],
						x = h[m + 5],
						z = h[m + 6],
						C = h[m + 7],
						L = h[m + 8],
						I = h[m + 9],
						N = h[m + 10],
						$ = h[m + 11],
						j = h[m + 12],
						q = h[m + 13],
						ne = h[m + 14],
						F = h[m + 15],
						T = w[0],
						E = w[1],
						R = w[2],
						B = w[3];
					T = d(T, E, R, B, k, 7, l[0]), B = d(B, T, E, R, S, 12, l[1]), R = d(R, B, T, E, U, 17, l[2]), E = d(E, R, B, T, M, 22, l[3]), T = d(T, E, R, B, A, 7, l[4]), B = d(B, T, E, R, x, 12, l[5]), R = d(R, B, T, E, z, 17, l[6]), E = d(E, R, B, T, C, 22, l[7]), T = d(T, E, R, B, L, 7, l[8]), B = d(B, T, E, R, I, 12, l[9]), R = d(R, B, T, E, N, 17, l[10]), E = d(E, R, B, T, $, 22, l[11]), T = d(T, E, R, B, j, 7, l[12]), B = d(B, T, E, R, q, 12, l[13]), R = d(R, B, T, E, ne, 17, l[14]), E = d(E, R, B, T, F, 22, l[15]), T = f(T, E, R, B, S, 5, l[16]), B = f(B, T, E, R, z, 9, l[17]), R = f(R, B, T, E, $, 14, l[18]), E = f(E, R, B, T, k, 20, l[19]), T = f(T, E, R, B, x, 5, l[20]), B = f(B, T, E, R, N, 9, l[21]), R = f(R, B, T, E, F, 14, l[22]), E = f(E, R, B, T, A, 20, l[23]), T = f(T, E, R, B, I, 5, l[24]), B = f(B, T, E, R, ne, 9, l[25]), R = f(R, B, T, E, M, 14, l[26]), E = f(E, R, B, T, L, 20, l[27]), T = f(T, E, R, B, q, 5, l[28]), B = f(B, T, E, R, U, 9, l[29]), R = f(R, B, T, E, C, 14, l[30]), E = f(E, R, B, T, j, 20, l[31]), T = b(T, E, R, B, x, 4, l[32]), B = b(B, T, E, R, L, 11, l[33]), R = b(R, B, T, E, $, 16, l[34]), E = b(E, R, B, T, ne, 23, l[35]), T = b(T, E, R, B, S, 4, l[36]), B = b(B, T, E, R, A, 11, l[37]), R = b(R, B, T, E, C, 16, l[38]), E = b(E, R, B, T, N, 23, l[39]), T = b(T, E, R, B, q, 4, l[40]), B = b(B, T, E, R, k, 11, l[41]), R = b(R, B, T, E, M, 16, l[42]), E = b(E, R, B, T, z, 23, l[43]), T = b(T, E, R, B, I, 4, l[44]), B = b(B, T, E, R, j, 11, l[45]), R = b(R, B, T, E, F, 16, l[46]), E = b(E, R, B, T, U, 23, l[47]), T = p(T, E, R, B, k, 6, l[48]), B = p(B, T, E, R, C, 10, l[49]), R = p(R, B, T, E, ne, 15, l[50]), E = p(E, R, B, T, x, 21, l[51]), T = p(T, E, R, B, j, 6, l[52]), B = p(B, T, E, R, M, 10, l[53]), R = p(R, B, T, E, N, 15, l[54]), E = p(E, R, B, T, S, 21, l[55]), T = p(T, E, R, B, L, 6, l[56]), B = p(B, T, E, R, F, 10, l[57]), R = p(R, B, T, E, z, 15, l[58]), E = p(E, R, B, T, q, 21, l[59]), T = p(T, E, R, B, A, 6, l[60]), B = p(B, T, E, R, $, 10, l[61]), R = p(R, B, T, E, U, 15, l[62]), E = p(E, R, B, T, I, 21, l[63]), w[0] = w[0] + T | 0, w[1] = w[1] + E | 0, w[2] = w[2] + R | 0, w[3] = w[3] + B | 0
				},
				_doFinalize: function() {
					var h = this._data,
						m = h.words,
						_ = this._nDataBytes * 8,
						v = h.sigBytes * 8;
					m[v >>> 5] |= 128 << 24 - v % 32;
					var g = r.floor(_ / 4294967296),
						w = _;
					m[(v + 64 >>> 9 << 4) + 15] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, m[(v + 64 >>> 9 << 4) + 14] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, h.sigBytes = (m.length + 1) * 4, this._process();
					for (var k = this._hash, S = k.words, U = 0; U < 4; U++) {
						var M = S[U];
						S[U] = (M << 8 | M >>> 24) & 16711935 | (M << 24 | M >>> 8) & 4278255360
					}
					return k
				},
				clone: function() {
					var h = s.clone.call(this);
					return h._hash = this._hash.clone(), h
				}
			});

			function d(h, m, _, v, g, w, k) {
				var S = h + (m & _ | ~m & v) + g + k;
				return (S << w | S >>> 32 - w) + m
			}

			function f(h, m, _, v, g, w, k) {
				var S = h + (m & v | _ & ~v) + g + k;
				return (S << w | S >>> 32 - w) + m
			}

			function b(h, m, _, v, g, w, k) {
				var S = h + (m ^ _ ^ v) + g + k;
				return (S << w | S >>> 32 - w) + m
			}

			function p(h, m, _, v, g, w, k) {
				var S = h + (_ ^ (m | ~v)) + g + k;
				return (S << w | S >>> 32 - w) + m
			}
			i.MD5 = s._createHelper(u), i.HmacMD5 = s._createHmacHelper(u)
		}(Math), n.MD5
	})
})(zu);
var gs = {
		exports: {}
	},
	Eu = {
		exports: {}
	};
(function(e, t) {
	(function(n, r) {
		e.exports = r(Ut.exports)
	})(nt, function(n) {
		return function() {
			var r = n,
				i = r.lib,
				a = i.WordArray,
				o = i.Hasher,
				s = r.algo,
				c = [],
				l = s.SHA1 = o.extend({
					_doReset: function() {
						this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
					},
					_doProcessBlock: function(u, d) {
						for (var f = this._hash.words, b = f[0], p = f[1], h = f[2], m = f[3], _ = f[4], v = 0; v < 80; v++) {
							if (v < 16) c[v] = u[d + v] | 0;
							else {
								var g = c[v - 3] ^ c[v - 8] ^ c[v - 14] ^ c[v - 16];
								c[v] = g << 1 | g >>> 31
							}
							var w = (b << 5 | b >>> 27) + _ + c[v];
							v < 20 ? w += (p & h | ~p & m) + 1518500249 : v < 40 ? w += (p ^ h ^ m) + 1859775393 : v < 60 ? w += (p & h | p & m | h & m) - 1894007588 : w += (p ^ h ^ m) - 899497514, _ = m, m = h, h = p << 30 | p >>> 2, p = b, b = w
						}
						f[0] = f[0] + b | 0, f[1] = f[1] + p | 0, f[2] = f[2] + h | 0, f[3] = f[3] + m | 0, f[4] = f[4] + _ | 0
					},
					_doFinalize: function() {
						var u = this._data,
							d = u.words,
							f = this._nDataBytes * 8,
							b = u.sigBytes * 8;
						return d[b >>> 5] |= 128 << 24 - b % 32, d[(b + 64 >>> 9 << 4) + 14] = Math.floor(f / 4294967296), d[(b + 64 >>> 9 << 4) + 15] = f, u.sigBytes = d.length * 4, this._process(), this._hash
					},
					clone: function() {
						var u = o.clone.call(this);
						return u._hash = this._hash.clone(), u
					}
				});
			r.SHA1 = o._createHelper(l), r.HmacSHA1 = o._createHmacHelper(l)
		}(), n.SHA1
	})
})(Eu);
var Pu = {
	exports: {}
};
(function(e, t) {
	(function(n, r) {
		e.exports = r(Ut.exports)
	})(nt, function(n) {
		(function() {
			var r = n,
				i = r.lib,
				a = i.Base,
				o = r.enc,
				s = o.Utf8,
				c = r.algo;
			c.HMAC = a.extend({
				init: function(l, u) {
					l = this._hasher = new l.init, typeof u == "string" && (u = s.parse(u));
					var d = l.blockSize,
						f = d * 4;
					u.sigBytes > f && (u = l.finalize(u)), u.clamp();
					for (var b = this._oKey = u.clone(), p = this._iKey = u.clone(), h = b.words, m = p.words, _ = 0; _ < d; _++) h[_] ^= 1549556828, m[_] ^= 909522486;
					b.sigBytes = p.sigBytes = f, this.reset()
				},
				reset: function() {
					var l = this._hasher;
					l.reset(), l.update(this._iKey)
				},
				update: function(l) {
					return this._hasher.update(l), this
				},
				finalize: function(l) {
					var u = this._hasher,
						d = u.finalize(l);
					u.reset();
					var f = u.finalize(this._oKey.clone().concat(d));
					return f
				}
			})
		})()
	})
})(Pu);
(function(e, t) {
	(function(n, r, i) {
		e.exports = r(Ut.exports, Eu.exports, Pu.exports)
	})(nt, function(n) {
		return function() {
			var r = n,
				i = r.lib,
				a = i.Base,
				o = i.WordArray,
				s = r.algo,
				c = s.MD5,
				l = s.EvpKDF = a.extend({
					cfg: a.extend({
						keySize: 128 / 32,
						hasher: c,
						iterations: 1
					}),
					init: function(u) {
						this.cfg = this.cfg.extend(u)
					},
					compute: function(u, d) {
						for (var f, b = this.cfg, p = b.hasher.create(), h = o.create(), m = h.words, _ = b.keySize, v = b.iterations; m.length < _;) {
							f && p.update(f), f = p.update(u).finalize(d), p.reset();
							for (var g = 1; g < v; g++) f = p.finalize(f), p.reset();
							h.concat(f)
						}
						return h.sigBytes = _ * 4, h
					}
				});
			r.EvpKDF = function(u, d, f) {
				return l.create(f).compute(u, d)
			}
		}(), n.EvpKDF
	})
})(gs);
var Lu = {
	exports: {}
};
(function(e, t) {
	(function(n, r, i) {
		e.exports = r(Ut.exports, gs.exports)
	})(nt, function(n) {
		n.lib.Cipher || function(r) {
			var i = n,
				a = i.lib,
				o = a.Base,
				s = a.WordArray,
				c = a.BufferedBlockAlgorithm,
				l = i.enc;
			l.Utf8;
			var u = l.Base64,
				d = i.algo,
				f = d.EvpKDF,
				b = a.Cipher = c.extend({
					cfg: o.extend(),
					createEncryptor: function(x, z) {
						return this.create(this._ENC_XFORM_MODE, x, z)
					},
					createDecryptor: function(x, z) {
						return this.create(this._DEC_XFORM_MODE, x, z)
					},
					init: function(x, z, C) {
						this.cfg = this.cfg.extend(C), this._xformMode = x, this._key = z, this.reset()
					},
					reset: function() {
						c.reset.call(this), this._doReset()
					},
					process: function(x) {
						return this._append(x), this._process()
					},
					finalize: function(x) {
						x && this._append(x);
						var z = this._doFinalize();
						return z
					},
					keySize: 128 / 32,
					ivSize: 128 / 32,
					_ENC_XFORM_MODE: 1,
					_DEC_XFORM_MODE: 2,
					_createHelper: function() {
						function x(z) {
							return typeof z == "string" ? A : S
						}
						return function(z) {
							return {
								encrypt: function(C, L, I) {
									return x(L).encrypt(z, C, L, I)
								},
								decrypt: function(C, L, I) {
									return x(L).decrypt(z, C, L, I)
								}
							}
						}
					}()
				});
			a.StreamCipher = b.extend({
				_doFinalize: function() {
					var x = this._process(!0);
					return x
				},
				blockSize: 1
			});
			var p = i.mode = {},
				h = a.BlockCipherMode = o.extend({
					createEncryptor: function(x, z) {
						return this.Encryptor.create(x, z)
					},
					createDecryptor: function(x, z) {
						return this.Decryptor.create(x, z)
					},
					init: function(x, z) {
						this._cipher = x, this._iv = z
					}
				}),
				m = p.CBC = function() {
					var x = h.extend();
					x.Encryptor = x.extend({
						processBlock: function(C, L) {
							var I = this._cipher,
								N = I.blockSize;
							z.call(this, C, L, N), I.encryptBlock(C, L), this._prevBlock = C.slice(L, L + N)
						}
					}), x.Decryptor = x.extend({
						processBlock: function(C, L) {
							var I = this._cipher,
								N = I.blockSize,
								$ = C.slice(L, L + N);
							I.decryptBlock(C, L), z.call(this, C, L, N), this._prevBlock = $
						}
					});

					function z(C, L, I) {
						var N, $ = this._iv;
						$ ? (N = $, this._iv = r) : N = this._prevBlock;
						for (var j = 0; j < I; j++) C[L + j] ^= N[j]
					}
					return x
				}(),
				_ = i.pad = {},
				v = _.Pkcs7 = {
					pad: function(x, z) {
						for (var C = z * 4, L = C - x.sigBytes % C, I = L << 24 | L << 16 | L << 8 | L, N = [], $ = 0; $ < L; $ += 4) N.push(I);
						var j = s.create(N, L);
						x.concat(j)
					},
					unpad: function(x) {
						var z = x.words[x.sigBytes - 1 >>> 2] & 255;
						x.sigBytes -= z
					}
				};
			a.BlockCipher = b.extend({
				cfg: b.cfg.extend({
					mode: m,
					padding: v
				}),
				reset: function() {
					var x;
					b.reset.call(this);
					var z = this.cfg,
						C = z.iv,
						L = z.mode;
					this._xformMode == this._ENC_XFORM_MODE ? x = L.createEncryptor : (x = L.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == x ? this._mode.init(this, C && C.words) : (this._mode = x.call(L, this, C && C.words), this._mode.__creator = x)
				},
				_doProcessBlock: function(x, z) {
					this._mode.processBlock(x, z)
				},
				_doFinalize: function() {
					var x, z = this.cfg.padding;
					return this._xformMode == this._ENC_XFORM_MODE ? (z.pad(this._data, this.blockSize), x = this._process(!0)) : (x = this._process(!0), z.unpad(x)), x
				},
				blockSize: 128 / 32
			});
			var g = a.CipherParams = o.extend({
					init: function(x) {
						this.mixIn(x)
					},
					toString: function(x) {
						return (x || this.formatter).stringify(this)
					}
				}),
				w = i.format = {},
				k = w.OpenSSL = {
					stringify: function(x) {
						var z, C = x.ciphertext,
							L = x.salt;
						return L ? z = s.create([1398893684, 1701076831]).concat(L).concat(C) : z = C, z.toString(u)
					},
					parse: function(x) {
						var z, C = u.parse(x),
							L = C.words;
						return L[0] == 1398893684 && L[1] == 1701076831 && (z = s.create(L.slice(2, 4)), L.splice(0, 4), C.sigBytes -= 16), g.create({
							ciphertext: C,
							salt: z
						})
					}
				},
				S = a.SerializableCipher = o.extend({
					cfg: o.extend({
						format: k
					}),
					encrypt: function(x, z, C, L) {
						L = this.cfg.extend(L);
						var I = x.createEncryptor(C, L),
							N = I.finalize(z),
							$ = I.cfg;
						return g.create({
							ciphertext: N,
							key: C,
							iv: $.iv,
							algorithm: x,
							mode: $.mode,
							padding: $.padding,
							blockSize: x.blockSize,
							formatter: L.format
						})
					},
					decrypt: function(x, z, C, L) {
						L = this.cfg.extend(L), z = this._parse(z, L.format);
						var I = x.createDecryptor(C, L).finalize(z.ciphertext);
						return I
					},
					_parse: function(x, z) {
						return typeof x == "string" ? z.parse(x, this) : x
					}
				}),
				U = i.kdf = {},
				M = U.OpenSSL = {
					execute: function(x, z, C, L) {
						L || (L = s.random(64 / 8));
						var I = f.create({
								keySize: z + C
							}).compute(x, L),
							N = s.create(I.words.slice(z), C * 4);
						return I.sigBytes = z * 4, g.create({
							key: I,
							iv: N,
							salt: L
						})
					}
				},
				A = a.PasswordBasedCipher = S.extend({
					cfg: S.cfg.extend({
						kdf: M
					}),
					encrypt: function(x, z, C, L) {
						L = this.cfg.extend(L);
						var I = L.kdf.execute(C, x.keySize, x.ivSize);
						L.iv = I.iv;
						var N = S.encrypt.call(this, x, z, I.key, L);
						return N.mixIn(I), N
					},
					decrypt: function(x, z, C, L) {
						L = this.cfg.extend(L), z = this._parse(z, L.format);
						var I = L.kdf.execute(C, x.keySize, x.ivSize, z.salt);
						L.iv = I.iv;
						var N = S.decrypt.call(this, x, z, I.key, L);
						return N
					}
				})
		}()
	})
})(Lu);
(function(e, t) {
	(function(n, r, i) {
		e.exports = r(Ut.exports, Cu.exports, zu.exports, gs.exports, Lu.exports)
	})(nt, function(n) {
		return function() {
			var r = n,
				i = r.lib,
				a = i.BlockCipher,
				o = r.algo,
				s = [],
				c = [],
				l = [],
				u = [],
				d = [],
				f = [],
				b = [],
				p = [],
				h = [],
				m = [];
			(function() {
				for (var g = [], w = 0; w < 256; w++) w < 128 ? g[w] = w << 1 : g[w] = w << 1 ^ 283;
				for (var k = 0, S = 0, w = 0; w < 256; w++) {
					var U = S ^ S << 1 ^ S << 2 ^ S << 3 ^ S << 4;
					U = U >>> 8 ^ U & 255 ^ 99, s[k] = U, c[U] = k;
					var M = g[k],
						A = g[M],
						x = g[A],
						z = g[U] * 257 ^ U * 16843008;
					l[k] = z << 24 | z >>> 8, u[k] = z << 16 | z >>> 16, d[k] = z << 8 | z >>> 24, f[k] = z;
					var z = x * 16843009 ^ A * 65537 ^ M * 257 ^ k * 16843008;
					b[U] = z << 24 | z >>> 8, p[U] = z << 16 | z >>> 16, h[U] = z << 8 | z >>> 24, m[U] = z, k ? (k = M ^ g[g[g[x ^ M]]], S ^= g[g[S]]) : k = S = 1
				}
			})();
			var _ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
				v = o.AES = a.extend({
					_doReset: function() {
						var g;
						if (!(this._nRounds && this._keyPriorReset === this._key)) {
							for (var w = this._keyPriorReset = this._key, k = w.words, S = w.sigBytes / 4, U = this._nRounds = S + 6, M = (U + 1) * 4, A = this._keySchedule = [], x = 0; x < M; x++) x < S ? A[x] = k[x] : (g = A[x - 1], x % S ? S > 6 && x % S == 4 && (g = s[g >>> 24] << 24 | s[g >>> 16 & 255] << 16 | s[g >>> 8 & 255] << 8 | s[g & 255]) : (g = g << 8 | g >>> 24, g = s[g >>> 24] << 24 | s[g >>> 16 & 255] << 16 | s[g >>> 8 & 255] << 8 | s[g & 255], g ^= _[x / S | 0] << 24), A[x] = A[x - S] ^ g);
							for (var z = this._invKeySchedule = [], C = 0; C < M; C++) {
								var x = M - C;
								if (C % 4) var g = A[x];
								else var g = A[x - 4];
								C < 4 || x <= 4 ? z[C] = g : z[C] = b[s[g >>> 24]] ^ p[s[g >>> 16 & 255]] ^ h[s[g >>> 8 & 255]] ^ m[s[g & 255]]
							}
						}
					},
					encryptBlock: function(g, w) {
						this._doCryptBlock(g, w, this._keySchedule, l, u, d, f, s)
					},
					decryptBlock: function(g, w) {
						var k = g[w + 1];
						g[w + 1] = g[w + 3], g[w + 3] = k, this._doCryptBlock(g, w, this._invKeySchedule, b, p, h, m, c);
						var k = g[w + 1];
						g[w + 1] = g[w + 3], g[w + 3] = k
					},
					_doCryptBlock: function(g, w, k, S, U, M, A, x) {
						for (var z = this._nRounds, C = g[w] ^ k[0], L = g[w + 1] ^ k[1], I = g[w + 2] ^ k[2], N = g[w + 3] ^ k[3], $ = 4, j = 1; j < z; j++) {
							var q = S[C >>> 24] ^ U[L >>> 16 & 255] ^ M[I >>> 8 & 255] ^ A[N & 255] ^ k[$++],
								ne = S[L >>> 24] ^ U[I >>> 16 & 255] ^ M[N >>> 8 & 255] ^ A[C & 255] ^ k[$++],
								F = S[I >>> 24] ^ U[N >>> 16 & 255] ^ M[C >>> 8 & 255] ^ A[L & 255] ^ k[$++],
								T = S[N >>> 24] ^ U[C >>> 16 & 255] ^ M[L >>> 8 & 255] ^ A[I & 255] ^ k[$++];
							C = q, L = ne, I = F, N = T
						}
						var q = (x[C >>> 24] << 24 | x[L >>> 16 & 255] << 16 | x[I >>> 8 & 255] << 8 | x[N & 255]) ^ k[$++],
							ne = (x[L >>> 24] << 24 | x[I >>> 16 & 255] << 16 | x[N >>> 8 & 255] << 8 | x[C & 255]) ^ k[$++],
							F = (x[I >>> 24] << 24 | x[N >>> 16 & 255] << 16 | x[C >>> 8 & 255] << 8 | x[L & 255]) ^ k[$++],
							T = (x[N >>> 24] << 24 | x[C >>> 16 & 255] << 16 | x[L >>> 8 & 255] << 8 | x[I & 255]) ^ k[$++];
						g[w] = q, g[w + 1] = ne, g[w + 2] = F, g[w + 3] = T
					},
					keySize: 256 / 32
				});
			r.AES = a._createHelper(v)
		}(), n.AES
	})
})(Au);
var W9 = Au.exports,
	ku = {
		exports: {}
	};
(function(e, t) {
	(function(n, r) {
		e.exports = r(Ut.exports)
	})(nt, function(n) {
		return n.enc.Utf8
	})
})(ku);
var q9 = ku.exports;
let Qv;
const Jv = "Vitevue-Env-Token",
	e9 = ["get", "head"],
	Su = {
		error: {
			status: "DEADLINE_EXCEEDED",
			message: "Request timed out"
		}
	};

function t9(e = {}) {
	const t = "msi-want-it-all";
	let n = "production",
		r = "1e90b4022090b8f15326c3e455829c2687b3ddb4e0b101e9bee72071f32a4317",
		i = "europe-west1";

	function a(l, u) {
		return l = l || i, u = u || t, `https://${l}-${u}.cloudfunctions.net/`
	}
	const o = Qv = {
		get url() {
			return a()
		},
		set region(l) {
			i = l
		},
		get region() {
			return i
		},
		get projectID() {
			return t
		},
		get environment() {
			return n
		},
		get token() {
			return r
		},
		request: s,
		post: c("post"),
		get: c("get"),
		patch: c("patch"),
		delete: c("delete"),
		objectToFormData: uo
	};
	async function s({
		endpoint: l = "api",
		data: u = null,
		dataType: d = null,
		searchParams: f = null,
		region: b = null,
		fetchOptions: p = {}
	} = {}) {
		const h = a(b);
		l = n + "_" + l;
		let m = h + l;
		const _ = Object.assign({}, p, {
			method: (p.method || "get").toLowerCase()
		});
		_.headers instanceof Headers || (_.headers = new Headers(_.headers || {})), _.headers.append(Jv, r), u && !_.body && (e9.includes(_.method) ? f || (f = u) : _.body || (_.body = u));
		const v = _.headers.has("Content-Type") || _.headers.has("content-type");
		let g = _.body instanceof FormData;
		if (!g && (d === "formdata" || d === "urlencoded") && (g = !0, _.body = uo(_.body)), g && d === "json" && (g = !1, _.body = Object.fromEntries(_.body)), typeof _.body == "object" && !g) _.body = JSON.stringify(_.body), v || _.headers.append("Content-Type", "application/json");
		else if (g) {
			let k = !1;
			for (let U of _.body.entries()) k != U[1] instanceof File;
			d === "urlencoded" && !k && (_.body = n9(_.body), v || _.headers.append("Content-Type", "application/x-www-form-urlencoded"))
		}
		if (f && typeof f == "object") {
			m = i9(m);
			for (const k in f) m.searchParams.append(k, u[k])
		}
		try {
			const k = await a9(m, _);
			if (!k.ok) throw {
				result: k,
				data: null
			};
			if (k === Su) throw {
				result: null,
				data: k
			};
			const S = await k.json();
			if (S.error) throw {
				result: k,
				data: S
			};
			return S
		} catch (k) {
			return await r9(k)
		}
	}

	function c(l) {
		return function(u = {}, d = {}) {
			return typeof u == "string" && (d.endpoint = u, u = d), u.fetchOptions || (u.fetchOptions = {}), u.fetchOptions.method = l, s(u)
		}
	}
	return function(u) {
		u.config.globalProperties.$cf = o, u.config.globalProperties.$cloudFunctions = o, u.provide("cf", o), u.provide("cloudFunctions", o)
	}
}

function n9(e) {
	let t = "";

	function n(r) {
		return encodeURIComponent(r).replace(/%20/g, "+")
	}
	for (let r of e.entries()) typeof r[1] == "string" && (t += (t ? "&" : "") + n(r[0]) + "=" + n(r[1]));
	return t
}
async function r9(e) {
	if (e.result || e.data || console.error(e), e.result && !e.data) try {
		e.data = await e.result.json()
	} catch {
		e.data = null
	}
	let n = "UNKNOWN",
		r = 400,
		i = "Unknown Error",
		a = {};
	if (e && e.data && e.data.error) {
		const o = e.data.error;
		o.status && (n = o.status), o.details && (a = o.details), i = o.message || ""
	}
	return e && e.result && e.status && (r = e.result.status, (!i || !i.length) && (i = e.result.statusText || "")), pa(Rt({}, e.data || {}), {
		error: {
			status: n,
			message: i,
			statusCode: r,
			details: a
		}
	})
}

function uo(e, t, n, r) {
	const i = t || new FormData;
	let a;
	for (const o in e) {
		let s = e[o];
		if (!Object.prototype.hasOwnProperty.call(e, o) || s === null || s === void 0) continue;
		r ? a = n + "[]" : n ? a = n + "[" + o + "]" : a = o;
		const c = Array.isArray(s),
			l = s instanceof Date,
			u = s instanceof File,
			d = typeof s == "object";
		l && (s = s.toISOString()), d && !u ? uo(s, i, a, c) : i.append(a, s)
	}
	return i
}

function i9(e) {
	try {
		return new URL(e)
	} catch {
		return new URL(document.location.origin + e)
	}
}

function a9(e, t = {}) {
	return new Promise(function(n, r) {
		const i = t.timeout || 2e4;
		let a = !1;
		delete t.timeout;
		const o = setTimeout(() => {
			a = !0, r(Su)
		}, i);
		fetch(e, t).then(s => {
			a || (clearTimeout(o), n(s))
		}).catch(s => {
			a || (clearTimeout(o), r(s))
		})
	})
}

function K9(e = {}) {
	return function(n) {
		n.use(t9(), e)
	}
}
const Oa = typeof {
		debug: !1,
		gtm: "GTM-TQ7TTZ"
	} != "undefined" ? {
		debug: !1,
		gtm: "GTM-TQ7TTZ"
	} : {},
	fo = window;
fo.gtmDataLayer = fo.gtmDataLayer || [];

function Ua(e) {
	fo.gtmDataLayer.push(e)
}

function jc(e = {}) {
	let t = {};
	for (const n in e) e[n] != null && (t[n] = e[n]);
	return t
}

function Y9(e = {}) {
	const t = [];
	let n = null,
		r = null,
		i = !1,
		a = !1,
		o = e.gtm || Oa.gtm || null;
	e.ga4 || Oa.ga4, e.ga || Oa.ga;
	const s = {
		init: c,
		enable: u,
		disable: l,
		pageview: d,
		event: f,
		rawEvent: b,
		onEventSent: null
	};
	s.setGTM = p => o = p;

	function c() {
		// a || i || (i = !0, function(p, h, m, _, v) {
		// 	p[_] = p[_] || [], p[_].push({
		// 		"gtm.start": new Date().getTime(),
		// 		event: "gtm.js"
		// 	});
		// 	var g = h.getElementsByTagName(m)[0],
		// 		w = h.createElement(m),
		// 		k = _ != "dataLayer" ? "&l=" + _ : "";
		// 	w.async = !0, w.src = "https://www.googletagmanager.com/gtm.js?id=" + v + k, g.parentNode.insertBefore(w, g)
		// }(window, document, "script", "gtmDataLayer", o), t.forEach(p => p()), t.length = 0)
	}

	function l() {
		a = !0
	}

	function u() {
		a = !1
	}

	function d({
		title: p,
		url: h,
		path: m
	} = {}) {
		if (a) return;
		const _ = n.$router || !1,
			v = _ && _.currentRoute && _.currentRoute.value;
		if (p || (p = v ? v.name : document.title), h && h.startsWith("/") && (m = h, h = !1), m || (m = v ? v.fullPath : document.location.pathname), h || (h = document.location.origin + m), !i) {
			t.push(() => d({
				title: p,
				path: m,
				url: h
			}));
			return
		}
		if (h = (h + "").split("?")[0], h === r) return;
		r = h, h = h + document.location.search;
		const g = jc({
			page_location: h,
			page_path: m,
			page_title: p
		});
		o && Ua(Rt({
			event: "page_view"
		}, g)), s.onEventSent && s.onEventSent("page_view", g)
	}

	function f(p = {}) {
		if (a) return;
		if (p.name = p.name || "ga_event", !i) {
			t.push(() => f(p));
			return
		}
		const h = jc({
			event_category: p.category,
			event_action: p.action,
			event_label: p.label,
			event_value: p.value
		});
		o && Ua(Rt({
			event: p.name
		}, h)), s.onEventSent && s.onEventSent(p.name, h)
	}

	function b(p = {}) {
		if (!a) {
			if (!i) {
				t.push(() => b(p));
				return
			}
			o && Ua(p), s.onEventSent && s.onEventSent(p.name, p)
		}
	}
	return function(h) {
		n = h.config.globalProperties, h.config.globalProperties.$analytics = s, h.provide("analytics", s), e.autoInit && c()
	}
}
const o9 = "modulepreload",
	Dc = {},
	s9 = "./",
	c9 = function(t, n) {
		return !n || n.length === 0 ? t() : Promise.all(n.map(r => {
			if (r = `${s9}${r}`, r in Dc) return;
			Dc[r] = !0;
			const i = r.endsWith(".css"),
				a = i ? '[rel="stylesheet"]' : "";
			if (document.querySelector(`link[href="${r}"]${a}`)) return;
			const o = document.createElement("link");
			if (o.rel = i ? "stylesheet" : o9, i || (o.as = "script", o.crossOrigin = ""), o.href = r, document.head.appendChild(o), i) return new Promise((s, c) => {
				o.addEventListener("load", s), o.addEventListener("error", () => c(new Error(`Unable to preload CSS for ${r}`)))
			})
		})).then(() => t())
	};
const l9 = {
	__name: "WebGL",
	setup(e, {
		expose: t
	}) {
		const n = ie(),
			r = Fe("webgl", null);
		let i = ie();
		return ht(() => {
			r.canvas && (i.value = r.getElement(), i.value.classList.add("webgl-canvas"), n.value.appendChild(i.value))
		}), Ln(() => {
			i.value && i.value.parentNode === n.value && n.value.removeChild(i.value), i.value = null
		}), t({
			wrapper: n,
			canvas: i
		}), (a, o) => o[0] || (Ci(-1), o[0] = O("aside", {
			ref_key: "wrapper",
			ref: n,
			class: "webgl-wrapper"
		}, null, 512), Ci(1), o[0])
	}
};
var u9 = l9;
const f9 = c9(() => import("./webgl.8cc4aa0278f3df62.js").then(function(e) {
	return e.w
}), ["assets/webgl.8cc4aa0278f3df62.js", "assets/main.e49c1a6878f3df62.js", "assets/main.ab7e451178f3df62.css"]);

function Z9(e = {}) {
	let t, n, r = !1,
		i = [];
	const a = new Proxy({}, {
			get: l
		}),
		o = {
			onReady: c,
			get isReady() {
				return r
			},
			get canvas() {
				return t
			}
		};
	o.getElement = function() {
		return t
	};

	function s() {
		r = !0;
		for (let u = 0; u < i.length; u++) i[u](a);
		i.length = 0
	}

	function c(u) {
		r ? u(a) : i.push(u)
	}

	function l(u, d) {
		if (o[d]) return o[d];
		if (n) return n[d]
	}
	return function(d) {
		d.provide("webgl", a), d.component("WebGL", u9);
		const f = d.config.globalProperties;
		f.$webGL = a, f.$webgl = a, t = document.createElement("canvas");
		const b = f.$preloader;
		!b || (b.task(async () => {
			const {
				loadWebGL: p
			} = await f9;
			n = p({
				app: f,
				canvas: t
			}), s(), await n.init(), await n.preload()
		}, {
			weight: 3
		}), b.beforeExit(async () => {
			await n.start(), await n.prerender()
		}))
	}
}
var po = JSON.parse('{"ALL_Stroke":{"viewBox":"0 0 254 111","width":254,"height":111,"symbol":"<symbol id=\\"ALL_Stroke\\" width=\\"254\\" height=\\"111\\" viewBox=\\"0 0 254 111\\" ><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M36.3067 5.82371C36.6169 4.6863 37.2373 3.80739 38.1679 3.18699C39.0985 2.46318 40.1842 2.10127 41.425 2.10127H55.6943C56.9351 2.10127 58.0209 2.46318 58.9515 3.18699C59.8821 3.80739 60.5025 4.6863 60.8127 5.82371L95.2451 109.121H81.1309L70.5358 75.6192H26.5835L15.9884 109.121H1.87424L36.3067 5.82371ZM53.3678 21.3338C52.9542 19.8862 52.4889 18.4386 51.9719 16.991C51.5583 15.44 51.1447 13.9924 50.7311 12.6482H46.3883C45.9747 13.9924 45.5611 15.44 45.1475 16.991C44.7339 18.4386 44.2686 19.8862 43.7515 21.3338L30.3115 63.8315H66.8079L53.3678 21.3338ZM65.2956 62.7237L52.3068 21.6531L52.3026 21.6382C51.8957 20.214 51.4377 18.7892 50.9286 17.3636L50.9132 17.3206L50.9014 17.2764C50.5703 16.0345 50.2395 14.8611 49.9093 13.756H47.21C46.8798 14.8611 46.5491 16.0345 46.2179 17.2764L46.2154 17.2859L46.2127 17.2953C45.7942 18.76 45.3239 20.224 44.8017 21.6872L31.8238 62.7237H65.2956ZM27.3951 76.7271L16.8 110.229H0.337158L35.2464 5.50129C35.6222 4.1487 36.3812 3.05812 37.5196 2.28785C38.6483 1.42102 39.9655 0.993408 41.425 0.993408H55.6943C57.1539 0.993408 58.4711 1.42104 59.5998 2.28789C60.7382 3.05813 61.4972 4.14867 61.873 5.50121L96.7822 110.229H80.3193L69.7242 76.7271H27.3951ZM124.592 0.993408V87.4069C124.592 90.7648 125.383 93.0033 126.738 94.3667C128.213 95.748 130.524 96.5357 133.876 96.5357H173.541L174.287 109.212L173.202 109.295C166.457 109.814 159.558 110.125 152.505 110.229C145.572 110.332 138.638 110.384 131.705 110.384C123.702 110.384 117.729 108.439 114.116 104.262C110.608 100.206 108.883 95.1287 108.883 89.113V0.993408H124.592ZM152.488 109.121C159.52 109.018 166.396 108.707 173.117 108.19L172.496 97.6436H133.876C130.361 97.6436 127.724 96.8164 125.966 95.162C124.312 93.5075 123.484 90.9225 123.484 87.4069V2.10127H109.991V89.113C109.991 94.9035 111.645 99.7116 114.954 103.537C118.263 107.363 123.846 109.276 131.705 109.276C138.633 109.276 145.561 109.224 152.488 109.121ZM204.263 0.993408V87.4069C204.263 90.7649 205.054 93.0034 206.409 94.3668C207.885 95.748 210.196 96.5357 213.547 96.5357H253.212L253.958 109.212L252.873 109.295C246.128 109.814 239.229 110.125 232.176 110.229C225.243 110.332 218.309 110.384 211.376 110.384C203.373 110.384 197.4 108.439 193.787 104.262C190.279 100.206 188.554 95.1287 188.554 89.113V0.993408H204.263ZM232.159 109.121C239.191 109.018 246.067 108.707 252.788 108.19L252.167 97.6436H213.547C210.032 97.6436 207.395 96.8164 205.637 95.162C203.983 93.5075 203.156 90.9225 203.156 87.4069V2.10127H189.662V89.113C189.662 94.9035 191.316 99.7116 194.625 103.537C197.934 107.363 203.517 109.276 211.376 109.276C218.304 109.276 225.232 109.224 232.159 109.121Z\\" fill=\\"url(#gradient)\\"/><defs><linearGradient id=\\"gradient\\" x1=\\"-52.5929\\" y1=\\"-206.972\\" x2=\\"373.981\\" y2=\\"-78.581\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FA00FF\\"/><stop offset=\\"1\\" stop-color=\\"#51AFFF\\"/></linearGradient></defs></symbol>"},"IT_Stroke":{"viewBox":"0 0 73 49","width":73,"height":49,"symbol":"<symbol id=\\"IT_Stroke\\" width=\\"73\\" height=\\"49\\" viewBox=\\"0 0 73 49\\" ><g opacity=\\"0.5\\" filter=\\"url(#filter0_d_2747_5751)\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M20.1548 8.34595V41.216H7.90796V8.34595H20.1548ZM9.06332 9.50131V40.0606H18.9994V9.50131H9.06332ZM41.6982 18.1665V40.0606H51.6921V18.1665H63.9389V9.50131H29.4514V18.1665H41.6982ZM28.296 8.34595H65.0942V19.3219H52.8474V41.216H40.5428V19.3219H28.296V8.34595Z\\" fill=\\"url(#it_gradient)\\"/></g><defs><filter id=\\"filter0_d_2747_5751\\" x=\\"0.228058\\" y=\\"0.666046\\" width=\\"72.5461\\" height=\\"48.2299\\" filterUnits=\\"userSpaceOnUse\\" color-interpolation-filters=\\"sRGB\\"><feFlood flood-opacity=\\"0\\" result=\\"BackgroundImageFix\\"/><feColorMatrix in=\\"SourceAlpha\\" type=\\"matrix\\" values=\\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\\" result=\\"hardAlpha\\"/><feOffset/><feGaussianBlur stdDeviation=\\"3.83995\\"/><feComposite in2=\\"hardAlpha\\" operator=\\"out\\"/><feColorMatrix type=\\"matrix\\" values=\\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0\\"/><feBlend mode=\\"normal\\" in2=\\"BackgroundImageFix\\" result=\\"effect1_dropShadow_2747_5751\\"/><feBlend mode=\\"normal\\" in=\\"SourceGraphic\\" in2=\\"effect1_dropShadow_2747_5751\\" result=\\"shape\\"/></filter><linearGradient id=\\"it_gradient\\" x1=\\"4.50606\\" y1=\\"41.2812\\" x2=\\"68.4386\\" y2=\\"39.0257\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FE0291\\"/><stop offset=\\"0.317708\\" stop-color=\\"#B762FF\\"/><stop offset=\\"0.557292\\" stop-color=\\"#5143FF\\"/><stop offset=\\"0.770833\\" stop-color=\\"#005CFF\\"/><stop offset=\\"1\\" stop-color=\\"#8FD7FF\\"/></linearGradient></defs></symbol>"},"IT_Text":{"viewBox":"0 0 64 43","width":64,"height":43,"symbol":"<symbol id=\\"IT_Text\\" x=\\"0px\\" y=\\"0px\\" viewBox=\\"0 0 64 43\\"><g><path class=\\"st0\\" d=\\"M18.1,36V7.5H7.5V36H18.1z M35.8,17v19h10.7V17H57V7.5H25.2V17H35.8z\\"/></g></symbol>"},"I_WANT_Stroke":{"viewBox":"0 0 499 111","width":499,"height":111,"symbol":"<symbol id=\\"I_WANT_Stroke\\" width=\\"499\\" height=\\"111\\" viewBox=\\"0 0 499 111\\" ><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M16.5743 0.808838V110.044H0.709717V0.808838H16.5743ZM205.075 0.808838L183.073 105.164L183.064 105.195C182.694 106.552 181.952 107.717 180.87 108.679L180.843 108.703L180.814 108.725C179.648 109.632 178.203 110.044 176.567 110.044H161.057C159.501 110.044 158.087 109.621 156.854 108.758L156.801 108.722L156.753 108.679C155.637 107.687 154.946 106.432 154.694 104.954L137.946 24.4685C137.533 22.404 137.12 20.3913 136.707 18.4306L136.705 18.4196C136.354 16.6626 136.002 14.9431 135.651 13.2613H134.193C133.844 14.9347 133.494 16.6454 133.144 18.3932C132.832 20.4715 132.468 22.4994 132.052 24.4768L132.051 24.4795L115.452 104.995L115.446 105.017C115.075 106.502 114.263 107.743 113.047 108.716L113.041 108.721L113.035 108.725C111.883 109.621 110.497 110.044 108.943 110.044H93.2776C91.7217 110.044 90.3075 109.621 89.0749 108.758L89.0223 108.722L88.9742 108.679C87.8779 107.704 87.1741 106.511 86.917 105.118L64.9242 0.808838H81.6219L98.5494 85.1329L98.5506 85.1384C98.9697 87.1298 99.3353 89.273 99.6482 91.5671C99.9165 93.4447 100.224 95.4013 100.57 97.4369H102.273C102.634 95.3842 102.995 93.4095 103.357 91.513C103.771 89.3384 104.185 87.2153 104.599 85.1438L104.601 85.1332L121.191 6.21531C121.438 4.65487 122.117 3.33763 123.252 2.32949L123.273 2.31038L123.296 2.29242C124.529 1.30549 125.963 0.808838 127.555 0.808838H142.445C144.037 0.808838 145.443 1.30703 146.593 2.32949C147.714 3.32576 148.442 4.62269 148.798 6.16553L148.8 6.17611L165.394 85.1156C165.395 85.1187 165.396 85.1218 165.396 85.1248C165.917 87.4151 166.334 89.6562 166.648 91.8482C167.002 93.7106 167.281 95.5735 167.485 97.4369H169.402L170.196 91.8808L170.196 91.8774C170.509 89.5831 170.875 87.3902 171.293 85.299L171.293 85.2966L188.379 0.808838H205.075ZM171.293 92.0305L170.363 98.5447H166.485C166.279 96.3733 165.968 94.2019 165.555 92.0305C165.244 89.8591 164.831 87.6359 164.314 85.3611L147.718 6.41464C147.408 5.07043 146.787 3.98472 145.857 3.15751C144.926 2.33031 143.789 1.9167 142.445 1.9167H127.555C126.211 1.9167 125.022 2.33031 123.988 3.15751C123.057 3.98472 122.488 5.07043 122.281 6.41464L105.686 85.3611C105.272 87.4291 104.858 89.5489 104.445 91.7203C104.031 93.8917 103.618 96.1665 103.204 98.5447H99.6367C99.2231 96.1665 98.8612 93.8917 98.551 91.7203C98.2408 89.4454 97.8789 87.3257 97.4653 85.3611L80.7144 1.9167H66.29L88.0041 104.904C88.2109 106.041 88.7796 107.024 89.7102 107.851C90.7442 108.575 91.9334 108.936 93.2776 108.936H108.943C110.287 108.936 111.424 108.575 112.355 107.851C113.389 107.024 114.061 105.99 114.371 104.749L130.967 24.2513C131.381 22.2867 131.743 20.2703 132.053 18.2023C132.466 16.1343 132.88 14.118 133.294 12.1534H136.551C136.964 14.118 137.378 16.1343 137.792 18.2023C138.205 20.1669 138.619 22.1833 139.032 24.2513L155.783 104.749C155.99 105.99 156.559 107.024 157.489 107.851C158.523 108.575 159.713 108.936 161.057 108.936H176.567C178.014 108.936 179.204 108.575 180.134 107.851C181.065 107.024 181.685 106.041 181.995 104.904L203.71 1.9167H189.285L172.379 85.5162C171.966 87.5842 171.604 89.7557 171.293 92.0305ZM241.055 5.63914C241.365 4.50173 241.986 3.62282 242.916 3.00241C243.847 2.27861 244.933 1.9167 246.173 1.9167H260.443C261.683 1.9167 262.769 2.27861 263.7 3.00241C264.63 3.62282 265.251 4.50173 265.561 5.63914L299.993 108.936H285.879L275.284 75.4346H231.332L220.737 108.936H206.623L241.055 5.63914ZM258.116 21.1492C257.703 19.7016 257.237 18.254 256.72 16.8064C256.307 15.2554 255.893 13.8078 255.479 12.4636H251.137C250.723 13.8078 250.309 15.2554 249.896 16.8064C249.482 18.254 249.017 19.7016 248.5 21.1492L235.06 63.647H271.556L258.116 21.1492ZM270.044 62.5391L257.055 21.4685L257.051 21.4536C256.644 20.0294 256.186 18.6046 255.677 17.179L255.662 17.136L255.65 17.0919C255.319 15.8499 254.988 14.6765 254.658 13.5714H251.958C251.628 14.6765 251.297 15.8499 250.966 17.0919L250.964 17.1013L250.961 17.1108C250.543 18.5755 250.072 20.0395 249.55 21.5028L236.572 62.5391H270.044ZM232.143 76.5425L221.548 110.044H205.085L239.995 5.31652C240.371 3.964 241.13 2.87349 242.268 2.10326C243.397 1.23644 244.714 0.808838 246.173 0.808838H260.443C261.902 0.808838 263.219 1.23648 264.348 2.10336C265.487 2.87363 266.246 3.9642 266.621 5.31678L301.531 110.044H285.068L274.473 76.5425H232.143ZM398.516 0.808838V103.508C398.516 105.48 398.037 107.165 396.884 108.351C395.726 109.544 394.071 110.044 392.134 110.044H378.796C377.076 110.044 375.572 109.642 374.393 108.725C373.278 107.858 372.407 106.605 371.737 105.051L335.608 29.2258L335.603 29.2148L335.598 29.2038C334.672 27.146 333.59 24.8279 332.352 22.2491C331.24 19.9322 330.366 17.7628 329.734 15.7429H329.286C329.443 17.6493 329.564 19.5905 329.65 21.5664C329.754 23.9607 329.806 26.3549 329.806 28.7492V110.044H313.941V7.34525C313.941 5.36496 314.437 3.67626 315.623 2.49046C316.809 1.30466 318.497 0.808838 320.478 0.808838H333.351C335.071 0.808838 336.575 1.21112 337.754 2.12792C338.869 2.99542 339.741 4.24856 340.41 5.8038L375.445 79.7486C376.589 81.9345 377.782 84.4238 379.022 87.2144C380.26 89.6905 381.411 92.1674 382.475 94.645H383.23C383.14 92.2499 383.051 89.8933 382.962 87.5751C382.858 84.8725 382.806 82.1699 382.806 79.4673V0.808838H398.516ZM384.338 94.645C384.352 95.0134 384.366 95.3827 384.379 95.7529H381.743C380.605 93.0645 379.364 90.3761 378.02 87.6876C376.779 84.8958 375.59 82.4142 374.453 80.2428L339.4 6.25953C338.78 4.81192 338.004 3.72622 337.074 3.00241C336.143 2.27861 334.902 1.9167 333.351 1.9167H320.478C316.859 1.9167 315.049 3.72622 315.049 7.34525V108.936H328.698V28.7492C328.698 26.371 328.646 23.9928 328.543 21.6146C328.456 19.621 328.333 17.6638 328.174 15.7429C328.143 15.3722 328.111 15.0029 328.078 14.635H330.559C331.18 16.8064 332.11 19.1846 333.351 21.7697C334.592 24.3547 335.678 26.6812 336.608 28.7492L372.747 104.594C373.367 106.041 374.143 107.127 375.073 107.851C376.004 108.575 377.245 108.936 378.796 108.936H392.134C395.65 108.936 397.408 107.127 397.408 103.508V1.9167H383.914V79.4673C383.914 82.1557 383.966 84.8441 384.069 87.5325C384.159 89.8645 384.249 92.2353 384.338 94.645ZM414.636 1.9167V14.0146H449.069V108.936H462.718V14.0146H497.305V1.9167H414.636ZM463.825 15.1225V110.044H447.961V15.1225H413.528V0.808838H498.413V15.1225H463.825ZM15.4665 1.9167H1.81758V108.936H15.4665V1.9167Z\\" fill=\\"url(#paint0_linear_24_287)\\"/><defs><linearGradient id=\\"paint0_linear_24_287\\" x1=\\"-117.715\\" y1=\\"-207.157\\" x2=\\"565.865\\" y2=\\"205.138\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FA00FF\\"/><stop offset=\\"1\\" stop-color=\\"#51AFFF\\"/></linearGradient></defs></symbol>"},"arrow-rotate":{"viewBox":"0 0 53 16","width":53,"height":16,"symbol":"<symbol id=\\"arrow-rotate\\" class=\\"raw\\" width=\\"53\\" height=\\"16\\" viewBox=\\"0 0 53 16\\" fill=\\"none\\"><path d=\\"M2.14 13.922c.421 0 .842-.126 1.214-.388C10.193 8.691 18.26 6.132 26.68 6.132c8.228 0 16.144 2.455 22.895 7.101a2.096 2.096 0 0 0 2.919-.54 2.099 2.099 0 0 0-.541-2.92c-7.451-5.128-16.192-7.84-25.274-7.84C17.386 1.934 8.48 4.76.92 10.113a2.095 2.095 0 0 0-.497 2.925c.41.579 1.055.885 1.717.885Z\\" fill=\\"#F2676F\\"/><path d=\\"M11.725 15.78c.984 0 1.864-.694 2.061-1.7a2.101 2.101 0 0 0-1.662-2.46L2.541 9.76a2.097 2.097 0 0 0-2.46 1.662 2.101 2.101 0 0 0 1.662 2.46l9.583 1.859c.131.027.268.038.4.038h-.001Z\\" fill=\\"#F2676F\\"/><path d=\\"M2.142 13.923a2.1 2.1 0 0 0 2.044-1.624l2.165-9.304A2.096 2.096 0 0 0 4.782.475a2.092 2.092 0 0 0-2.52 1.569L.097 11.348a2.096 2.096 0 0 0 2.045 2.575Z\\" fill=\\"#F2676F\\"/></symbol>"},"bonus-battle-ready":{"viewBox":"0 0 140 131","width":140,"height":131,"symbol":"<symbol id=\\"bonus-battle-ready\\" viewBox=\\"0 0 140 131\\"><path d=\\"M63 28.2a36.1 36.1 0 0 1 14.6 0c1.8.4 2.9 2.1 2.6 4-.4 1.8-2.1 3-3.9 2.7a30.8 30.8 0 0 0-12.1 0c-1.8.4-3.5-.8-3.9-2.7-.2-1.9.9-3.7 2.7-4zm-9 6.6c1 1.5.6 3.6-.9 4.7a32.4 32.4 0 0 0-8.6 8.7c-1 1.5-3.1 2-4.6.9a3.5 3.5 0 0 1-.9-4.7c2.7-4.2 6.3-7.8 10.4-10.6 1.6-.9 3.6-.5 4.6 1zm32.7 0c1-1.5 3.1-2 4.6-.9 4.1 2.8 7.6 6.4 10.4 10.6 1 1.5.6 3.6-.9 4.7-1.5 1-3.6.6-4.6-.9a32.4 32.4 0 0 0-8.6-8.7 3.4 3.4 0 0 1-.9-4.8zm16.6 20.9c1.8-.4 3.5.8 3.9 2.7a38 38 0 0 1 0 15c-.4 1.8-2.1 3-3.9 2.7a3.4 3.4 0 0 1-2.6-4 31.8 31.8 0 0 0 0-12.4c-.3-1.9.8-3.7 2.6-4zm-65.9 0c1.8.4 2.9 2.1 2.6 4a31.8 31.8 0 0 0 0 12.4c.4 1.8-.8 3.6-2.6 4-1.8.4-3.5-.8-3.9-2.7a38 38 0 0 1 0-15c.4-1.9 2.1-3.1 3.9-2.7zM40 82.5c1.5-1 3.6-.6 4.6.9 2.3 3.4 5.2 6.4 8.6 8.7 1.5 1 1.9 3.1.9 4.7-1 1.5-3.1 2-4.6.9a38.9 38.9 0 0 1-10.4-10.6c-1-1.5-.6-3.6.9-4.6zm60.7 0c1.5 1 1.9 3.1.9 4.7a36.2 36.2 0 0 1-10.4 10.6c-1.5 1-3.5.6-4.5-.8l-.1-.1c-1-1.5-.6-3.6.9-4.7 3.4-2.3 6.3-5.3 8.6-8.7 1-1.6 3.1-2.1 4.6-1zm-40.3 17c.4-1.8 2.1-3 3.9-2.7a30.5 30.5 0 0 0 12 0c1.8-.4 3.5.8 3.9 2.7.4 1.8-.8 3.6-2.6 4a35.4 35.4 0 0 1-14.6 0 3.5 3.5 0 0 1-2.6-4zm25.8-33.7A16 16 0 0 1 70.4 82a16 16 0 0 1-15.8-16.2 16 16 0 0 1 15.8-16.2 16 16 0 0 1 15.8 16.2z\\"/><path d=\\"M70.3 51.7c-7.6 0-13.8 6.3-13.8 14.1s6.2 14.1 13.8 14.1a14 14 0 0 0 13.8-14.1c.1-7.8-6.1-14.1-13.8-14.1zM52.6 65.8c0-10 8-18.2 17.8-18.2s17.8 8.1 17.8 18.2c0 10-8 18.2-17.8 18.2a18 18 0 0 1-17.8-18.2z\\"/></symbol>"},"bonus-future-shield":{"viewBox":"0 0 140 131","width":140,"height":131,"symbol":"<symbol id=\\"bonus-future-shield\\" viewBox=\\"0 0 140 131\\"><path d=\\"M35.5 40c0 .5-4 52.7 34.6 69a.9.9 0 0 0 .7 0c39-17 34.6-68.6 34.5-69a1 1 0 0 0-.8-1 100.8 100.8 0 0 1-33.6-11 .9.9 0 0 0-.9 0c-.2.1-17 9.4-33.6 11a1 1 0 0 0-.9 1Z\\"/></symbol>"},"bonus-outline":{"viewBox":"0 0 140 131","width":140,"height":131,"symbol":"<symbol id=\\"bonus-outline\\" viewBox=\\"0 0 140 131\\"><path d=\\"m136.4 52.5-22.1-39.1A25.5 25.5 0 0 0 92.1.3H48c-9.1 0-17.6 5-22.2 13.1l-22 39.1c-4.6 8.1-4.6 18 0 26.2l22.1 39.1c4.6 8.1 13 13.1 22.2 13.1h44.2c9.1 0 17.6-5 22.2-13.1l22.1-39.1a27.1 27.1 0 0 0-.2-26.2zm-5.3 23L109 114.6a19.3 19.3 0 0 1-16.8 9.9H48c-7 0-13.4-3.8-16.8-9.9L9.1 75.5a20.2 20.2 0 0 1 0-19.9l22.1-39.1c3.5-6.2 9.9-9.9 16.8-9.9h44.2c7 0 13.4 3.8 16.8 9.9l22.1 39.1a20.2 20.2 0 0 1 0 19.9z\\" fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\"/></symbol>"},"bonus-personalization":{"viewBox":"0 0 140 131","width":140,"height":131,"symbol":"<symbol id=\\"bonus-personalization\\" viewBox=\\"0 0 140 131\\"><path d=\\"M49.2 98c-3 0-5.7-1.2-7.9-3.3a11.8 11.8 0 0 1 0-16L59.5 60a21.3 21.3 0 0 1 29-24.6c.7.4 1.3 1 1.4 1.9.1.8-.1 1.6-.7 2.2L80 49l1.3 4.8 4.6 1.2 9.2-9.4a3 3 0 0 1 2.2-.7c.8.2 1.5.7 1.8 1.4a22 22 0 0 1-4.3 24A20.6 20.6 0 0 1 75 76L57 94.6c-2 2.2-4.8 3.3-7.7 3.3Z\\"/></symbol>"},"bonus-power":{"viewBox":"0 0 140 131","width":140,"height":131,"symbol":"<symbol id=\\"bonus-power\\" viewBox=\\"0 0 140 131\\"><path d=\\"m91 58.6-14.8-4.2L84 25.9c.4-1.7-.4-3.5-2-4.3a3.6 3.6 0 0 0-4.4 1.1L47.9 64c-.7 1-1 2.3-.5 3.4.3 1.2 1.3 2 2.4 2.4L64.6 74l-8.7 31.7c-.5 1.7.3 3.6 2 4.3.4.3 1 .4 1.5.4a4 4 0 0 0 3-1.6l30.5-44.5c.7-1 .9-2.2.5-3.4-.4-1.1-1.3-2-2.5-2.3Z\\"/></symbol>"},"bonus-scale":{"viewBox":"0 0 140 131","width":140,"height":131,"symbol":"<symbol id=\\"bonus-scale\\" viewBox=\\"0 0 140 131\\"><path d=\\"M41.3 40.1v6c0 1.7-1.3 3.1-3 3.1s-3-1.4-3-3.1V32.6a3 3 0 0 1 3-3.2h13.2a3 3 0 0 1 3 3.2 3 3 0 0 1-3 3h-5.8l22.1 22.8a3.2 3.2 0 0 1 0 4.4 3 3 0 0 1-4.3 0L41.3 40ZM74 69a3 3 0 0 1 4.3 0l22.2 22.7v-6a3 3 0 0 1 3-3.1 3 3 0 0 1 3 3.1v13.5a3 3 0 0 1-3 3.2H90.2a3 3 0 0 1-3-3.2 3 3 0 0 1 3-3.1h5.9L73.9 73.4a3.2 3.2 0 0 1 0-4.4Z\\"/></symbol>"},"bonus-simultaneity":{"viewBox":"0 0 140 131","width":140,"height":131,"symbol":"<symbol id=\\"bonus-simultaneity\\" viewBox=\\"0 0 140 131\\"><path d=\\"M79.6 35.4a9.6 9.6 0 0 0 2.7-6.7c0-5.3-4.2-9.5-9.3-9.5-2.5 0-4.9 1-6.5 2.8a9.6 9.6 0 0 0-2.7 6.7c0 5.2 4.1 9.5 9.2 9.5 2.6 0 4.9-1.1 6.6-2.8ZM94.4 106c4-4 6.4-9.6 6.4-15.8A22 22 0 0 0 79 68a22 22 0 0 0-21.9 22.3A22 22 0 0 0 79 112.7c6 0 11.5-2.5 15.4-6.6ZM58.2 65a15 15 0 0 0 4.2-10.5c0-8.2-6.5-14.9-14.5-14.9-4 0-7.7 1.7-10.3 4.4a15 15 0 0 0-4.3 10.5c0 8.2 6.5 15 14.6 15 4 0 7.6-1.8 10.3-4.5Z\\"/></symbol>"},"language-planet":{"viewBox":"0 0 19 19","width":19,"height":19,"symbol":"<symbol id=\\"language-planet\\" viewBox=\\"0 0 19 19\\" ><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M4.4894 2.63314C5.89439 1.60619 7.6264 1 9.5 1C12.7258 1 15.532 2.79698 16.972 5.44452C16.7285 5.75481 16.5614 6.11956 16.4861 6.50921L16.3303 7.31503C16.2613 7.6723 16.0647 7.9923 15.7772 8.2154L15.5025 8.4286C14.8922 8.9021 14.5351 9.6312 14.5351 10.4036V10.7081C14.5351 10.8926 14.4864 11.0739 14.3938 11.2335L13.6005 12.6015C13.3603 13.0156 12.7322 12.8921 12.6668 12.418C12.6548 12.3313 12.6353 12.2459 12.6085 12.1626L12.0883 10.5479C11.8699 9.8702 11.373 9.3178 10.7221 9.0292L9.221 8.3635C9.0636 8.2938 8.9622 8.1378 8.9622 7.9656V7.9507C8.9622 7.7739 9.0743 7.6166 9.2414 7.559C9.8118 7.36229 10.1946 6.82536 10.1946 6.22198V6.09324C10.1946 5.08245 9.2663 4.32661 8.2765 4.53143L8.2001 4.54724C7.6154 4.66824 7.14079 5.0943 6.95767 5.66269L6.53022 6.98949C6.52895 6.99342 6.52768 6.99492 6.52688 6.99578C6.52566 6.99706 6.52358 6.99868 6.52059 6.99991C6.5176 7.00114 6.51499 7.00146 6.51322 7.0014C6.51205 7.00137 6.51008 7.00119 6.50642 6.9993C6.50082 6.9964 6.4973 6.99062 6.4973 6.98432V6.69191C6.4973 5.66878 5.29579 5.11828 4.52091 5.78639C4.38724 5.90164 4.18133 5.79492 4.19845 5.61926L4.4894 2.63314ZM3.3915 3.5893C1.91105 5.11898 1 7.2031 1 9.5C1 10.514 1.17757 11.4866 1.50332 12.3883L1.73397 11.9671C1.79743 11.8512 1.84529 11.7274 1.87632 11.599L2.14222 10.4985C2.22871 10.1406 2.46627 9.8378 2.79334 9.6686C3.29183 9.4107 3.90046 9.5105 4.2905 9.914L4.80826 10.4497C4.9444 10.5906 5.11981 10.6871 5.31164 10.7268L5.91508 10.8517C6.74306 11.023 7.23935 11.8749 6.98007 12.6797C6.88399 12.9779 6.69208 13.236 6.43417 13.4139L6.14234 13.6152C5.81692 13.8397 5.59607 14.1862 5.52998 14.5759L5.15197 16.8053C6.4241 17.5641 7.9111 18 9.5 18C14.1944 18 18 14.1944 18 9.5C18 8.4805 17.8205 7.5028 17.4914 6.59701C17.4824 6.63065 17.4746 6.66466 17.4679 6.699L17.3121 7.5048C17.197 8.1003 16.8694 8.6336 16.3902 9.0054L16.1155 9.2186C15.7494 9.5027 15.5351 9.9402 15.5351 10.4036V10.7081C15.5351 11.0688 15.4398 11.4231 15.2589 11.7351L14.4655 13.1032C13.7482 14.3402 11.8717 13.9713 11.6762 12.5547C11.6722 12.5257 11.6656 12.4971 11.6566 12.4693L11.1365 10.8546C11.0055 10.448 10.7073 10.1165 10.3168 9.9433L8.8156 9.2777C8.2967 9.0476 7.9622 8.5333 7.9622 7.9656V7.9507C7.9622 7.34732 8.345 6.81038 8.9154 6.61366C9.0825 6.55603 9.1946 6.39874 9.1946 6.22198V6.09324C9.1946 5.71622 8.8484 5.43428 8.4791 5.51068L8.4028 5.52649C8.1706 5.57453 7.9822 5.74368 7.9095 5.96934L7.48204 7.29613C7.28928 7.8945 6.60525 8.1763 6.04693 7.8875C5.70931 7.7128 5.4973 7.36444 5.4973 6.98432V6.69191C5.4973 6.5245 5.3007 6.43443 5.17391 6.54375C4.35698 7.24812 3.09856 6.59586 3.20316 5.52228L3.3915 3.5893ZM4.32013 17.4649C5.80998 18.4358 7.5891 19 9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0C4.25329 0 0 4.25329 0 9.5C0 12.7216 1.60359 15.5686 4.05609 17.2865L4.03406 17.4164L4.32013 17.4649ZM4.24366 16.1803L4.54405 14.4087C4.65527 13.7528 5.02692 13.1698 5.57454 12.792L5.86637 12.5907C5.94285 12.538 5.99976 12.4614 6.02825 12.373C6.10513 12.1344 5.95797 11.8818 5.71244 11.831L5.109 11.7061C4.72038 11.6257 4.36501 11.43 4.08921 11.1447L3.57145 10.609C3.48844 10.5231 3.35891 10.5019 3.25282 10.5567C3.18322 10.5928 3.13266 10.6572 3.11425 10.7334L2.84835 11.8338C2.79663 12.0479 2.71686 12.2542 2.6111 12.4473L2.01624 13.5338C2.57147 14.5617 3.33231 15.4623 4.24366 16.1803Z\\" /></symbol>"},"logo-msi":{"viewBox":"0 0 336 85","width":336,"height":85,"symbol":"<symbol id=\\"logo-msi\\" viewBox=\\"0 0 336 85\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M305.001 84.3786L327.907 21.2437C316.414 21.3941 304.956 22.5426 293.663 24.6768L272.009 84.3786H305.001ZM301.09 4.19291L296.693 16.3163C307.987 14.1856 319.444 13.0364 330.937 12.8817L335.336 0.757131C323.842 0.907759 312.384 2.05733 301.09 4.19291ZM181.659 69.3936C192.137 71.3013 202.765 72.259 213.416 72.2547H213.42C224.55 72.2547 232.627 69.7761 233.5 62.2191C233.925 58.6246 230.526 56.0366 224.295 52.6052C217.169 48.6718 211.176 46.7104 204.986 42.5696C202.044 40.8311 199.776 38.152 198.547 34.9652C197.317 31.7783 197.2 28.2702 198.213 25.0083C199.596 21.1118 201.808 17.5612 204.696 14.6014C207.584 11.6415 211.08 9.34288 214.942 7.86332C225.065 2.70076 233.079 0.757131 252.601 0.757131C264.666 0.755336 276.704 1.90581 288.55 4.19291L284.358 15.7363C273.879 13.8321 263.251 12.8768 252.601 12.8817C241.466 12.8817 233.385 15.3641 232.512 22.9155C232.097 26.5182 235.487 29.1105 241.725 32.5374C248.847 36.4645 254.844 38.4256 261.034 42.5696C263.977 44.3074 266.247 46.9871 267.477 50.1748C268.707 53.3624 268.825 56.8715 267.811 60.1344C266.422 64.0287 264.207 67.5766 261.318 70.5351C258.429 73.4937 254.934 75.7927 251.072 77.2747C240.953 82.4398 232.935 84.3786 213.42 84.3786H213.416C201.352 84.3816 189.316 83.2298 177.473 80.9389L181.659 69.3936ZM131.923 84.3786L151.032 31.6988C157.407 14.1354 134.019 20.5555 128.795 24.5907C122.592 29.2922 117.663 35.47 114.458 42.5615L99.2902 84.3786H66.2968L85.403 31.6988C91.7714 14.1354 68.3936 20.5555 63.1658 24.5907C56.9575 29.2924 52.0263 35.4735 48.8222 42.5696L33.6613 84.3786H0.663574L30.9994 0.757131C34.7996 0.377452 38.6372 0.815752 42.2537 2.04261C45.8703 3.26946 49.1817 5.25626 51.9656 7.8695C53.6658 9.61711 54.8517 11.7992 55.3931 14.1761C60.2902 11.1182 65.4202 8.44942 70.7355 6.19464C78.9359 2.73107 87.7291 0.884754 96.6307 0.757131C100.429 0.377097 104.266 0.815313 107.881 2.04222C111.496 3.26913 114.806 5.25608 117.588 7.8695C119.294 9.61365 120.484 11.7968 121.024 14.1761C125.922 11.1175 131.052 8.44869 136.369 6.19464C144.567 2.73088 153.358 0.884544 162.257 0.757131C166.057 0.376949 169.895 0.814948 173.511 2.04183C177.127 3.26872 180.439 5.25586 183.222 7.8695C185.229 10.353 186.554 13.3159 187.068 16.4665C187.582 19.617 187.267 22.8471 186.154 25.8391L164.919 84.3786H131.923Z\\" /></symbol>"},"mobile":{"viewBox":"0 0 93 55","width":93,"height":55,"symbol":"<symbol id=\\"mobile\\" class=\\"raw\\" width=\\"93\\" height=\\"55\\" viewBox=\\"0 0 93 55\\" fill=\\"none\\"><path d=\\"M83.821 54.363h-73.8c-5.057 0-9.173-4.111-9.173-9.174V9.224C.848 4.167 4.964.051 10.02.051h73.806C88.884.05 93 4.167 93 9.224v35.965c-.005 5.063-4.122 9.174-9.178 9.174Zm-73.8-50.109a4.979 4.979 0 0 0-4.975 4.975v35.965a4.979 4.979 0 0 0 4.975 4.975h73.806a4.979 4.979 0 0 0 4.975-4.975V9.23a4.979 4.979 0 0 0-4.975-4.975H10.021Z\\" fill=\\"#fff\\"/><path d=\\"M14.672 34.064c-3.778 0-6.856-3.077-6.856-6.855 0-3.777 3.073-6.85 6.856-6.85 3.777 0 6.855 3.073 6.855 6.85 0 3.778-3.078 6.855-6.855 6.855Zm0-9.512a2.658 2.658 0 0 0-2.657 2.652 2.66 2.66 0 0 0 2.657 2.656 2.66 2.66 0 0 0 2.656-2.656 2.658 2.658 0 0 0-2.656-2.652ZM82.005 31.724a2.1 2.1 0 0 1-2.099-2.1v-11.2a2.1 2.1 0 0 1 4.199 0v11.2a2.1 2.1 0 0 1-2.1 2.1ZM82.005 38.105a2.1 2.1 0 0 1-2.099-2.099v-.672a2.1 2.1 0 0 1 4.199 0v.672a2.1 2.1 0 0 1-2.1 2.1Z\\" fill=\\"#fff\\"/></symbol>"},"prizes-button":{"viewBox":"0 0 40 38","width":40,"height":38,"symbol":"<symbol id=\\"prizes-button\\" width=\\"40\\" height=\\"38\\" viewBox=\\"0 0 40 38\\" ><path d=\\"M15.6612 13.0464C15.3758 12.753 14.9855 12.5849 14.5762 12.5793C14.1669 12.5736 13.7721 12.7307 13.4786 13.0161C13.1852 13.3015 13.0172 13.6918 13.0115 14.1011C13.0058 14.5104 13.1629 14.9053 13.4483 15.1987L16.995 18.6696L13.4483 22.1405C13.3063 22.2814 13.1935 22.4491 13.1166 22.6338C13.0396 22.8185 13 23.0166 13 23.2167C13 23.4167 13.0396 23.6149 13.1166 23.7996C13.1935 23.9843 13.3063 24.1519 13.4483 24.2928C13.5892 24.4349 13.7569 24.5476 13.9416 24.6246C14.1263 24.7015 14.3244 24.7411 14.5245 24.7411C14.7246 24.7411 14.9227 24.7015 15.1074 24.6246C15.2921 24.5476 15.4597 24.4349 15.6006 24.2928L20.1477 19.7457C20.2897 19.6048 20.4025 19.4372 20.4794 19.2525C20.5564 19.0678 20.596 18.8697 20.596 18.6696C20.596 18.4695 20.5564 18.2714 20.4794 18.0867C20.4025 17.902 20.2897 17.7344 20.1477 17.5935L15.6612 13.0464ZM28.5445 17.5935L23.9975 13.0464C23.7121 12.761 23.325 12.6007 22.9213 12.6007C22.5177 12.6007 22.1306 12.761 21.8452 13.0464C21.5598 13.3318 21.3995 13.7189 21.3995 14.1226C21.3995 14.5262 21.5598 14.9133 21.8452 15.1987L25.3313 18.6696L21.8452 22.1405C21.7032 22.2814 21.5904 22.4491 21.5134 22.6338C21.4365 22.8185 21.3969 23.0166 21.3969 23.2167C21.3969 23.4167 21.4365 23.6149 21.5134 23.7996C21.5904 23.9843 21.7032 24.1519 21.8452 24.2928C21.9861 24.4349 22.1538 24.5476 22.3385 24.6246C22.5232 24.7015 22.7213 24.7411 22.9213 24.7411C23.1214 24.7411 23.3195 24.7015 23.5042 24.6246C23.6889 24.5476 23.8566 24.4349 23.9975 24.2928L28.5445 19.7457C28.6906 19.6089 28.8082 19.4444 28.8904 19.2619C28.9726 19.0794 29.0178 18.8824 29.0234 18.6823C29.0291 18.4821 28.995 18.2829 28.9232 18.096C28.8514 17.9091 28.7433 17.7383 28.6052 17.5935H28.5445Z\\" fill=\\"url(#paint0_linear_2729_618)\\"/><rect x=\\"0.5\\" y=\\"37\\" width=\\"35\\" height=\\"39\\" rx=\\"4.5\\" transform=\\"rotate(-90 0.5 37)\\" /><rect x=\\"0.5\\" y=\\"36\\" width=\\"35\\" height=\\"39\\" rx=\\"4.5\\" transform=\\"rotate(-90 0.5 36)\\" stroke=\\"url(#paint1_linear_2729_618)\\"/><defs><linearGradient id=\\"paint0_linear_2729_618\\" x1=\\"6.72392\\" y1=\\"8.4527\\" x2=\\"42.0613\\" y2=\\"12.3246\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FE0291\\"/><stop offset=\\"0.317708\\" stop-color=\\"#B762FF\\"/><stop offset=\\"0.557292\\" stop-color=\\"#5143FF\\"/><stop offset=\\"0.770833\\" stop-color=\\"#005CFF\\"/><stop offset=\\"1\\" stop-color=\\"#8FD7FF\\"/></linearGradient><linearGradient id=\\"paint1_linear_2729_618\\" x1=\\"-0.500003\\" y1=\\"76.5\\" x2=\\"41\\" y2=\\"64\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#ECECEC\\"/><stop offset=\\"1\\" stop-color=\\"#A0A0A0\\"/></linearGradient></defs></symbol>"},"retry":{"viewBox":"0 0 32 28","width":32,"height":28,"symbol":"<symbol id=\\"retry\\" width=\\"32\\" height=\\"28\\" viewBox=\\"0 0 32 28\\" ><path d=\\"M10.8427 2.26676C10.0632 2.75426 9.80293 3.76228 10.2574 4.57478C10.7449 5.38728 11.7847 5.61452 12.5972 5.12702C14.4494 3.98952 16.6597 3.43728 19.0325 3.66452C24.0381 4.15202 28.0031 8.2792 28.361 13.2852C28.7837 19.3624 23.9088 24.433 17.9278 24.3683C12.3697 24.3036 7.75498 19.7537 7.65715 14.1955V14.1308H10.1277C10.8424 14.1308 11.2982 13.3513 10.9072 12.733L6.7153 6.07049C6.35728 5.48523 5.51306 5.48523 5.15504 6.07049L0.994718 12.6998C0.604978 13.3168 1.05946 14.0976 1.7742 14.0976H4.27771C4.34245 21.9954 11.038 28.2998 19.0652 27.7145C25.7924 27.227 31.2196 21.7998 31.7071 15.0726C32.2923 7.01228 25.923 0.251953 17.9924 0.251953C15.3924 0.251953 12.923 0.999713 10.8424 2.26669L10.8427 2.26676Z\\" /></symbol>"},"specs":{"viewBox":"0 0 14 14","width":14,"height":14,"symbol":"<symbol id=\\"specs\\" width=\\"14\\" height=\\"14\\" viewBox=\\"0 0 14 14\\" ><path d=\\"M9.05595 5.6447C8.91396 5.6447 8.77779 5.7011 8.67739 5.8015C8.57699 5.9019 8.52059 6.03807 8.52059 6.18006V10.0239C8.52059 10.1659 8.46419 10.3021 8.36379 10.4025C8.26339 10.5029 8.12722 10.5593 7.98523 10.5593H2.09631C1.95432 10.5593 1.81815 10.5029 1.71775 10.4025C1.61735 10.3021 1.56095 10.1659 1.56095 10.0239V4.13499C1.56095 3.99301 1.61735 3.85684 1.71775 3.75644C1.81815 3.65604 1.95432 3.59964 2.09631 3.59964H5.94017C6.08215 3.59964 6.21832 3.54323 6.31872 3.44283C6.41912 3.34243 6.47553 3.20626 6.47553 3.06428C6.47553 2.92229 6.41912 2.78612 6.31872 2.68572C6.21832 2.58533 6.08215 2.52892 5.94017 2.52892H2.09631C1.67035 2.52892 1.26184 2.69813 0.960642 2.99933C0.659445 3.30053 0.490234 3.70904 0.490234 4.13499V10.0239C0.490234 10.4499 0.659445 10.8584 0.960642 11.1596C1.26184 11.4608 1.67035 11.63 2.09631 11.63H7.98523C8.41119 11.63 8.8197 11.4608 9.1209 11.1596C9.42209 10.8584 9.5913 10.4499 9.5913 10.0239V6.18006C9.5913 6.03807 9.5349 5.9019 9.4345 5.8015C9.3341 5.7011 9.19793 5.6447 9.05595 5.6447ZM11.1545 1.25477C11.1002 1.12396 10.9963 1.02001 10.8655 0.96568C10.8011 0.938248 10.732 0.923697 10.662 0.922852H7.44987C7.30789 0.922852 7.17172 0.979255 7.07132 1.07965C6.97092 1.18005 6.91452 1.31622 6.91452 1.45821C6.91452 1.60019 6.97092 1.73636 7.07132 1.83676C7.17172 1.93716 7.30789 1.99357 7.44987 1.99357H9.37181L3.85763 7.50239C3.80745 7.55216 3.76762 7.61137 3.74044 7.67661C3.71327 7.74184 3.69927 7.81182 3.69927 7.88249C3.69927 7.95317 3.71327 8.02314 3.74044 8.08838C3.76762 8.15362 3.80745 8.21283 3.85763 8.2626C3.9074 8.31277 3.96661 8.3526 4.03185 8.37978C4.09709 8.40696 4.16706 8.42095 4.23773 8.42095C4.30841 8.42095 4.37838 8.40696 4.44362 8.37978C4.50886 8.3526 4.56807 8.31277 4.61784 8.2626L10.1267 2.74842V4.67035C10.1267 4.81234 10.1831 4.94851 10.2835 5.0489C10.3839 5.1493 10.52 5.20571 10.662 5.20571C10.804 5.20571 10.9402 5.1493 11.0406 5.0489C11.141 4.94851 11.1974 4.81234 11.1974 4.67035V1.45821C11.1965 1.38825 11.182 1.31913 11.1545 1.25477V1.25477Z\\" fill=\\"url(#paint0_linear_3061_2353)\\"/><defs><linearGradient id=\\"paint0_linear_3061_2353\\" x1=\\"-3.7034\\" y1=\\"-2.70993\\" x2=\\"20.0281\\" y2=\\"-0.736369\\" gradientUnits=\\"userSpaceOnUse\\"><stop stop-color=\\"#FE0291\\"/><stop offset=\\"0.317708\\" stop-color=\\"#B762FF\\"/><stop offset=\\"0.557292\\" stop-color=\\"#5143FF\\"/><stop offset=\\"0.770833\\" stop-color=\\"#005CFF\\"/><stop offset=\\"1\\" stop-color=\\"#8FD7FF\\"/></linearGradient></defs></symbol>"},"title-circle":{"viewBox":"0 0 292 335","width":292,"height":335,"symbol":"<symbol id=\\"title-circle\\" viewBox=\\"0 0 292 335\\" ><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M30.0844 28.8815C45.5402 18.9556 62.8562 11.3059 81.5689 6.54181C82.0539 6.41832 82.5391 6.29712 83.0242 6.1782C170.595 -15.2872 259.247 37.6905 281.199 123.917C281.447 124.888 281.684 125.86 281.913 126.831C287.381 150.096 287.447 173.433 282.901 195.532C270.688 254.901 225.194 305.343 161.754 321.495C122.198 331.565 81.6097 325.959 46.8987 308.866C32.1814 301.619 18.5208 292.307 6.44358 281.249C5.13142 280.048 3.83796 278.826 2.56386 277.584C2.50503 277.526 2.44625 277.469 2.3875 277.412L0.470215 279.493C13.1135 293.355 27.9691 304.939 44.3189 313.818C79.9814 333.183 122.753 339.679 165.181 328.877C230.601 312.222 277.073 259.058 288.364 196.704C292.5 173.867 291.916 149.797 285.816 125.837C285.569 124.866 285.313 123.899 285.05 122.937C261.085 35.2925 171.185 -17.3057 82.7758 5.20264C82.2908 5.32613 81.8068 5.45162 81.3238 5.57911C62.5257 10.5415 45.3162 18.5284 30.0844 28.8815Z\\" /></symbol>"},"title-rect":{"viewBox":"0 0 399 103.7","width":399,"height":103.7,"symbol":"<symbol id=\\"title-rect\\"  x=\\"0px\\" y=\\"0px\\" viewBox=\\"0 0 399 103.7\\"><path class=\\"st0\\" d=\\"M-0.1,19.7C-0.2,9.4,8.9,1,20,0.9l358.4-1.8c11.2-0.1,20.3,8.3,20.3,18.6l0,9.4c0.2,41.4-35.9,75.1-80.6,75.3 l-236.9,1.2C36.6,103.8,0.1,70.5-0.1,29.1L-0.1,19.7z\\"/></symbol>"}}');
let ho;

function d9() {
	if (ho) return;
	ho = !0;
	let e = '<svg style="display: none;" aria-hidden="true" class="icons-spritesheet">';
	for (const i in po) e += po[i].symbol;
	e += "</svg>";
	const t = document.createElement("div");
	t.innerHTML = e, document.body.insertBefore(t.getElementsByTagName("svg")[0], document.body.firstChild);
	const n = document.createElement("style");
	n.innerHTML = ["svg.icons-spritesheet symbol:not(.raw) * {", "fill: inherit;", "stroke: inherit;", "}"].join(`
`);
	const r = document.getElementsByTagName("style")[0];
	r ? r.parentNode.insertBefore(n, r) : document.head.appendChild(n)
}

function p9(e = {}) {
	ho || d9();
	const t = Rt({}, e),
		n = t.id,
		r = po[n];
	if (!r) return;
	const i = t.className ? "className" : "class";
	return t[i] = ["icon", "icon-" + n, t[i] || ""].join(" ").trim(), t.viewBox == null && (t.viewBox = r.viewBox), t.width === !0 && (t.width = r.width), t.height === !0 && (t.height = r.height), delete t.id, Cn("svg", t, Cn("use", {
		href: "#" + n
	}))
}

function X9() {
	const e = {
		install: t
	};
	return e;

	function t(n) {
		n.config.globalProperties.$svgIcons = e, n.provide("svgIcons", e), delete e.install, n.component("SvgIcon", p9)
	}
}
var Tu = {
	exports: {}
};
(function(e) {
	(function() {
		function t(h, m) {
			document.addEventListener ? h.addEventListener("scroll", m, !1) : h.attachEvent("scroll", m)
		}

		function n(h) {
			document.body ? h() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function m() {
				document.removeEventListener("DOMContentLoaded", m), h()
			}) : document.attachEvent("onreadystatechange", function m() {
				(document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", m), h())
			})
		}

		function r(h) {
			this.g = document.createElement("div"), this.g.setAttribute("aria-hidden", "true"), this.g.appendChild(document.createTextNode(h)), this.h = document.createElement("span"), this.i = document.createElement("span"), this.m = document.createElement("span"), this.j = document.createElement("span"), this.l = -1, this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i)
		}

		function i(h, m) {
			h.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + m + ";"
		}

		function a(h) {
			var m = h.g.offsetWidth,
				_ = m + 100;
			return h.j.style.width = _ + "px", h.i.scrollLeft = _, h.h.scrollLeft = h.h.scrollWidth + 100, h.l !== m ? (h.l = m, !0) : !1
		}

		function o(h, m) {
			function _() {
				var g = v;
				a(g) && g.g.parentNode !== null && m(g.l)
			}
			var v = h;
			t(h.h, _), t(h.i, _), a(h)
		}

		function s(h, m, _) {
			m = m || {}, _ = _ || window, this.family = h, this.style = m.style || "normal", this.weight = m.weight || "normal", this.stretch = m.stretch || "normal", this.context = _
		}
		var c = null,
			l = null,
			u = null,
			d = null;

		function f(h) {
			return l === null && (b(h) && /Apple/.test(window.navigator.vendor) ? (h = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), l = !!h && 603 > parseInt(h[1], 10)) : l = !1), l
		}

		function b(h) {
			return d === null && (d = !!h.document.fonts), d
		}

		function p(h, m) {
			var _ = h.style,
				v = h.weight;
			if (u === null) {
				var g = document.createElement("div");
				try {
					g.style.font = "condensed 100px sans-serif"
				} catch {}
				u = g.style.font !== ""
			}
			return [_, v, u ? h.stretch : "", "100px", m].join(" ")
		}
		s.prototype.load = function(h, m) {
			var _ = this,
				v = h || "BESbswy",
				g = 0,
				w = m || 3e3,
				k = new Date().getTime();
			return new Promise(function(S, U) {
				if (b(_.context) && !f(_.context)) {
					var M = new Promise(function(x, z) {
							function C() {
								new Date().getTime() - k >= w ? z(Error("" + w + "ms timeout exceeded")) : _.context.document.fonts.load(p(_, '"' + _.family + '"'), v).then(function(L) {
									1 <= L.length ? x() : setTimeout(C, 25)
								}, z)
							}
							C()
						}),
						A = new Promise(function(x, z) {
							g = setTimeout(function() {
								z(Error("" + w + "ms timeout exceeded"))
							}, w)
						});
					Promise.race([A, M]).then(function() {
						clearTimeout(g), S(_)
					}, U)
				} else n(function() {
					function x() {
						var E;
						(E = N != -1 && $ != -1 || N != -1 && j != -1 || $ != -1 && j != -1) && ((E = N != $ && N != j && $ != j) || (c === null && (E = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), c = !!E && (536 > parseInt(E[1], 10) || parseInt(E[1], 10) === 536 && 11 >= parseInt(E[2], 10))), E = c && (N == q && $ == q && j == q || N == ne && $ == ne && j == ne || N == F && $ == F && j == F)), E = !E), E && (T.parentNode !== null && T.parentNode.removeChild(T), clearTimeout(g), S(_))
					}

					function z() {
						if (new Date().getTime() - k >= w) T.parentNode !== null && T.parentNode.removeChild(T), U(Error("" + w + "ms timeout exceeded"));
						else {
							var E = _.context.document.hidden;
							(E === !0 || E === void 0) && (N = C.g.offsetWidth, $ = L.g.offsetWidth, j = I.g.offsetWidth, x()), g = setTimeout(z, 50)
						}
					}
					var C = new r(v),
						L = new r(v),
						I = new r(v),
						N = -1,
						$ = -1,
						j = -1,
						q = -1,
						ne = -1,
						F = -1,
						T = document.createElement("div");
					T.dir = "ltr", i(C, p(_, "sans-serif")), i(L, p(_, "serif")), i(I, p(_, "monospace")), T.appendChild(C.g), T.appendChild(L.g), T.appendChild(I.g), _.context.document.body.appendChild(T), q = C.g.offsetWidth, ne = L.g.offsetWidth, F = I.g.offsetWidth, z(), o(C, function(E) {
						N = E, x()
					}), i(C, p(_, '"' + _.family + '",sans-serif')), o(L, function(E) {
						$ = E, x()
					}), i(L, p(_, '"' + _.family + '",serif')), o(I, function(E) {
						j = E, x()
					}), i(I, p(_, '"' + _.family + '",monospace'))
				})
			})
		}, e.exports = s
	})()
})(Tu);
var Q9 = Tu.exports;
const h9 = {
		key: 0,
		class: "cookie-consent"
	},
	v9 = {
		class: "cookie-consent__inner"
	},
	g9 = ["innerHTML"],
	m9 = {
		class: "cookie-consent__buttons"
	},
	b9 = ["innerHTML"],
	_9 = ["innerHTML"],
	J9 = {
		__name: "CookieConsent",
		props: {
			textHtml: {
				type: String,
				default: "Accept cookies?"
			},
			acceptHtml: {
				type: String,
				default: "Accept"
			},
			declineHtml: {
				type: String,
				default: "Decline"
			},
			visible: {
				type: Boolean,
				default: !0
			}
		},
		emits: ["accept", "decline"],
		setup(e, {
			expose: t,
			emit: n
		}) {
			const r = e;
			t({
				accept: b,
				decline: p
			});
			const i = Fe("preloader", !1),
				a = Fe("analytics", !1),
				o = typeof window !== void 0,
				s = "cookie_accepted",
				c = h(),
				l = ie(c !== null),
				u = ie(c),
				d = Re(() => (!i || typeof i.hidden !== void 0 && i.hidden) && !l.value && !!r.visible);
			l.value && f();

			function f() {
				const _ = u.value;
				n(_ ? "accept" : "decline"), _ && a && a.init ? a.init() : !_ && a && a.disable && a.disable(), o && document.documentElement.classList.add("cookie-consent-hidden")
			}

			function b() {
				m(!0)
			}

			function p() {
				m(!1)
			}

			function h() {
				const _ = document.cookie.match("(^|;)\\s*" + s + "\\s*=\\s*([^;]+)");
				return _ ? !!+_.pop() : null
			}

			function m(_) {
				if (l.value) return;
				l.value = !0, u.value = !!_, f();
				const v = 60 * 60 * 24 * 1e3;
				let g = new Date(Date.now() + v * 30 * 2);
				g = g.toUTCString();
				const w = document.location.protocol === "https";
				document.cookie = [s + "=" + (_ ? 1 : 0), "Path=/", w ? "SameSite=None" : "SameSite=Lax", w && "Secure", "Expires=" + g].filter(Boolean).join("; ")
			}
			return (_, v) => (ue(), Ie(kn, {
				name: "cookie-consent",
				appear: ""
			}, {
				default: Qe(() => [de(d) ? (ue(), be("div", h9, [O("div", v9, [O("p", {
					class: "cookie-consent__description",
					innerHTML: r.textHtml
				}, null, 8, g9), O("div", m9, [O("button", {
					class: "cookie-consent__cta cookie-consent__cta--decline",
					onClick: p
				}, [O("p", {
					class: "cta__text",
					innerHTML: r.declineHtml
				}, null, 8, b9)]), O("button", {
					class: "cookie-consent__cta cookie-consent__cta--accept",
					onClick: b
				}, [O("p", {
					class: "cta__text",
					innerHTML: r.acceptHtml
				}, null, 8, _9)])])])])) : en("", !0)]),
				_: 1
			}))
		}
	};
const y9 = {
		class: "language-picker"
	},
	x9 = {
		class: "language-picker-current"
	},
	w9 = ["textContent"],
	A9 = O("div", {
		class: "language-picker-arrow"
	}, null, -1),
	C9 = ["value", "selected", "textContent"],
	e8 = {
		__name: "LanguagePicker",
		props: {
			labelType: {
				type: String,
				default: "name"
			}
		},
		setup(e) {
			const t = e,
				n = ["name", "language", "code", "id"].includes(t.labelType) ? t.labelType : "name",
				r = ie(!1),
				{
					project: i,
					site: a
				} = window.__DATA,
				o = !!i.prefixDefaultLocale,
				s = "/",
				c = i.locales[a.locale],
				l = Object.values(i.locales).map(d => ({
					id: d.id,
					text: d[n],
					selected: d.id === c.id ? !0 : null
				}));

			function u() {
				const d = r.value,
					f = d.options[d.selectedIndex].value,
					b = i.locales[f];
				if (b.id === c.id) return;
				let p = new Date;
				p.setTime(Date.now() + 36e5 * 24 * 14), document.cookie = "preferred_locale=" + b.id + ";path=/;expires=" + p + ";samesite=lax";
				const h = !b.default || o ? b.id + s : "";
				window.location.href = window.location.origin + i.basepath + h
			}
			return (d, f) => (ue(), be("div", y9, [O("div", x9, [O("span", {
				textContent: st(de(c)[de(n)])
			}, null, 8, w9), A9]), O("select", {
				ref_key: "selector",
				ref: r,
				class: "language-picker-select",
				onInput: u,
				onBlur: u
			}, [(ue(!0), be(Te, null, An(de(l), b => (ue(), be("option", {
				key: b.id,
				value: b.id,
				selected: b.selected,
				textContent: st(b.text)
			}, null, 8, C9))), 128))], 544)]))
		}
	};
export {
	T9 as $, W9 as A, de as B, ie as C, O as D, Ct as E, zt as F, H9 as G, di as H, ht as I, Ln as J, tt as K, e8 as L, tn as M, jn as N, _n as O, en as P, lt as Q, vl as R, kl as S, Ie as T, q9 as U, J9 as V, Vl as W, st as X, Te as Y, k9 as Z, Oe as _, $9 as a, L9 as a0, Q9 as a1, I9 as a2, f2 as a3, R9 as a4, vc as a5, G9 as a6, u2 as a7, mp as a8, M9 as a9, U9 as aa, zp as ab, P9 as ac, O9 as ad, Hr as ae, c9 as af, D as b, y1 as c, v1 as d, xn as e, B9 as f, S9 as g, F9 as h, N9 as i, j9 as j, D9 as k, d2 as l, Wn as m, V9 as n, K9 as o, Y9 as p, Z9 as q, sn as r, X9 as s, Re as t, Zi as u, ue as v, E9 as w, be as x, fe as y, Ye as z
};