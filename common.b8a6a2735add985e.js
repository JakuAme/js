"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[8592], {
    79133: (q,j,u)=>{
        u.d(j, {
            f: ()=>X
        });
        var U = u(61135)
          , I = u(39300)
          , M = u(71884)
          , i = u(18505)
          , N = u(52413)
          , x = u(99703)
          , G = u(94650)
          , Z = u(53763);
        let X = (()=>{
            class V {
                get localStorageWalletsKey() {
                    return this._exchangeService.isBsc ? "walletsSavedCake" : "walletsSaved"
                }
                constructor(d, w, W) {
                    this._apiService = d,
                    this._exchangeService = w,
                    this._exchangeApiService = W,
                    this._wallets$ = new U.X(null),
                    w.chain$.subscribe(()=>{
                        this._wallets$.next(null),
                        clearInterval(this._interval)
                    }
                    )
                }
                get wallets$() {
                    return null === this._wallets$.value && (this.manageUserWalletByChain(this._exchangeService.chain),
                    this._interval = setInterval(()=>{
                        this._wallets$.observed ? this.manageUserWalletByChain(this._exchangeService.chain) : (this._wallets$.next(null),
                        clearInterval(this._interval))
                    }
                    , 15e3)),
                    this._wallets$.asObservable().pipe((0,
                    I.h)(d=>null !== d), (0,
                    M.x)((d,w)=>JSON.stringify(w) === JSON.stringify(d)))
                }
                checkWallet(d, w={}, W="user") {
                    return d = x.CXF.getMakerFormatByChain(d, this._exchangeService.chain ?? x.qop.Ethereum),
                    "user" === W ? w[d] ? w[d].name : d : "color" === W ? w[d] ? w[d].color : "" : !!w[d]
                }
                saveWallets(d, w) {
                    N._Z.setString(d, JSON.stringify(w))
                }
                addEditWalletsCall(d, w) {
                    const W = this._exchangeApiService.getAdapter(d);
                    return this._apiService.post(W.apiUrl, x.lpF + "wallets", w)
                }
                deleteWalletsCall(d, w) {
                    const W = this._exchangeApiService.getAdapter(d);
                    return this._apiService.delete(W.apiUrl, x.lpF + `wallets?_id=${w}`)
                }
                getWalletsCall(d) {
                    const w = this._exchangeApiService.getAdapter(d);
                    return this._apiService.get(w.apiUrl, x.lpF + "wallets")
                }
                manageUserWalletByChain(d) {
                    this.getWalletsCall(d).pipe((0,
                    i.b)(w=>{
                        const W = w.data.map(k=>{
                            const t = {};
                            return t[k.wallet] = {
                                ...k
                            },
                            delete t[k.wallet].account,
                            delete t[k.wallet].wallet,
                            t
                        }
                        )
                          , ee = {};
                        W.forEach(k=>{
                            Object.assign(ee, k)
                        }
                        ),
                        this.saveAndEmitWallets(ee)
                    }
                    )).subscribe()
                }
                saveAndEmitWallets(d) {
                    this.saveWallets(this.localStorageWalletsKey, d),
                    this._wallets$.next(d)
                }
            }
            return V.\u0275fac = function(d) {
                return new (d || V)(G.LFG(Z.sM),G.LFG(x.OqV),G.LFG(x.hmC))
            }
            ,
            V.\u0275prov = G.Yz7({
                token: V,
                factory: V.\u0275fac,
                providedIn: "root"
            }),
            V
        }
        )()
    }
    ,
    59069: q=>{
        var U, j = "object" == typeof Reflect ? Reflect : null, u = j && "function" == typeof j.apply ? j.apply : function(e, n, s) {
            return Function.prototype.apply.call(e, n, s)
        }
        ;
        U = j && "function" == typeof j.ownKeys ? j.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ;
        var M = Number.isNaN || function(e) {
            return e != e
        }
        ;
        function i() {
            i.init.call(this)
        }
        q.exports = i,
        q.exports.once = function W(t, e) {
            return new Promise(function(n, s) {
                function o(c) {
                    t.removeListener(e, f),
                    s(c)
                }
                function f() {
                    "function" == typeof t.removeListener && t.removeListener("error", o),
                    n([].slice.call(arguments))
                }
                k(t, e, f, {
                    once: !0
                }),
                "error" !== e && function ee(t, e, n) {
                    "function" == typeof t.on && k(t, "error", e, n)
                }(t, o, {
                    once: !0
                })
            }
            )
        }
        ,
        i.EventEmitter = i,
        i.prototype._events = void 0,
        i.prototype._eventsCount = 0,
        i.prototype._maxListeners = void 0;
        var N = 10;
        function x(t) {
            if ("function" != typeof t)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
        }
        function G(t) {
            return void 0 === t._maxListeners ? i.defaultMaxListeners : t._maxListeners
        }
        function Z(t, e, n, s) {
            var o, f, c;
            if (x(n),
            void 0 === (f = t._events) ? (f = t._events = Object.create(null),
            t._eventsCount = 0) : (void 0 !== f.newListener && (t.emit("newListener", e, n.listener ? n.listener : n),
            f = t._events),
            c = f[e]),
            void 0 === c)
                c = f[e] = n,
                ++t._eventsCount;
            else if ("function" == typeof c ? c = f[e] = s ? [n, c] : [c, n] : s ? c.unshift(n) : c.push(n),
            (o = G(t)) > 0 && c.length > o && !c.warned) {
                c.warned = !0;
                var b = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                b.name = "MaxListenersExceededWarning",
                b.emitter = t,
                b.type = e,
                b.count = c.length,
                function I(t) {
                    console && console.warn && console.warn(t)
                }(b)
            }
            return t
        }
        function z() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function Y(t, e, n) {
            var s = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: n
            }
              , o = z.bind(s);
            return o.listener = n,
            s.wrapFn = o,
            o
        }
        function X(t, e, n) {
            var s = t._events;
            if (void 0 === s)
                return [];
            var o = s[e];
            return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function w(t) {
                for (var e = new Array(t.length), n = 0; n < e.length; ++n)
                    e[n] = t[n].listener || t[n];
                return e
            }(o) : Q(o, o.length)
        }
        function V(t) {
            var e = this._events;
            if (void 0 !== e) {
                var n = e[t];
                if ("function" == typeof n)
                    return 1;
                if (void 0 !== n)
                    return n.length
            }
            return 0
        }
        function Q(t, e) {
            for (var n = new Array(e), s = 0; s < e; ++s)
                n[s] = t[s];
            return n
        }
        function k(t, e, n, s) {
            if ("function" == typeof t.on)
                s.once ? t.once(e, n) : t.on(e, n);
            else {
                if ("function" != typeof t.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                t.addEventListener(e, function o(f) {
                    s.once && t.removeEventListener(e, o),
                    n(f)
                })
            }
        }
        Object.defineProperty(i, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return N
            },
            set: function(t) {
                if ("number" != typeof t || t < 0 || M(t))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                N = t
            }
        }),
        i.init = function() {
            (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        i.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || M(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e,
            this
        }
        ,
        i.prototype.getMaxListeners = function() {
            return G(this)
        }
        ,
        i.prototype.emit = function(e) {
            for (var n = [], s = 1; s < arguments.length; s++)
                n.push(arguments[s]);
            var o = "error" === e
              , f = this._events;
            if (void 0 !== f)
                o = o && void 0 === f.error;
            else if (!o)
                return !1;
            if (o) {
                var c;
                if (n.length > 0 && (c = n[0]),
                c instanceof Error)
                    throw c;
                var b = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
                throw b.context = c,
                b
            }
            var C = f[e];
            if (void 0 === C)
                return !1;
            if ("function" == typeof C)
                u(C, this, n);
            else {
                var J = C.length
                  , F = Q(C, J);
                for (s = 0; s < J; ++s)
                    u(F[s], this, n)
            }
            return !0
        }
        ,
        i.prototype.on = i.prototype.addListener = function(e, n) {
            return Z(this, e, n, !1)
        }
        ,
        i.prototype.prependListener = function(e, n) {
            return Z(this, e, n, !0)
        }
        ,
        i.prototype.once = function(e, n) {
            return x(n),
            this.on(e, Y(this, e, n)),
            this
        }
        ,
        i.prototype.prependOnceListener = function(e, n) {
            return x(n),
            this.prependListener(e, Y(this, e, n)),
            this
        }
        ,
        i.prototype.off = i.prototype.removeListener = function(e, n) {
            var s, o, f, c, b;
            if (x(n),
            void 0 === (o = this._events))
                return this;
            if (void 0 === (s = o[e]))
                return this;
            if (s === n || s.listener === n)
                0 == --this._eventsCount ? this._events = Object.create(null) : (delete o[e],
                o.removeListener && this.emit("removeListener", e, s.listener || n));
            else if ("function" != typeof s) {
                for (f = -1,
                c = s.length - 1; c >= 0; c--)
                    if (s[c] === n || s[c].listener === n) {
                        b = s[c].listener,
                        f = c;
                        break
                    }
                if (f < 0)
                    return this;
                0 === f ? s.shift() : function d(t, e) {
                    for (; e + 1 < t.length; e++)
                        t[e] = t[e + 1];
                    t.pop()
                }(s, f),
                1 === s.length && (o[e] = s[0]),
                void 0 !== o.removeListener && this.emit("removeListener", e, b || n)
            }
            return this
        }
        ,
        i.prototype.removeAllListeners = function(e) {
            var n, s, o;
            if (void 0 === (s = this._events))
                return this;
            if (void 0 === s.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== s[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete s[e]),
                this;
            if (0 === arguments.length) {
                var c, f = Object.keys(s);
                for (o = 0; o < f.length; ++o)
                    "removeListener" !== (c = f[o]) && this.removeAllListeners(c);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ("function" == typeof (n = s[e]))
                this.removeListener(e, n);
            else if (void 0 !== n)
                for (o = n.length - 1; o >= 0; o--)
                    this.removeListener(e, n[o]);
            return this
        }
        ,
        i.prototype.listeners = function(e) {
            return X(this, e, !0)
        }
        ,
        i.prototype.rawListeners = function(e) {
            return X(this, e, !1)
        }
        ,
        i.listenerCount = function(t, e) {
            return "function" == typeof t.listenerCount ? t.listenerCount(e) : V.call(t, e)
        }
        ,
        i.prototype.listenerCount = V,
        i.prototype.eventNames = function() {
            return this._eventsCount > 0 ? U(this._events) : []
        }
    }
    ,
    13930: (q,j,u)=>{
        function U({rpc: I}) {
            return function(M) {
                const i = I(M);
                return i && "" !== i.http ? {
                    chain: {
                        ...M,
                        rpcUrls: {
                            ...M.rpcUrls,
                            default: {
                                http: [i.http]
                            }
                        }
                    },
                    rpcUrls: {
                        http: [i.http],
                        webSocket: i.webSocket ? [i.webSocket] : void 0
                    }
                } : null
            }
        }
        u.r(j),
        u.d(j, {
            jsonRpcProvider: ()=>U
        })
    }
    ,
    59799: (q,j,u)=>{
        u.d(j, {
            sj: ()=>f,
            CO: ()=>C,
            Ld: ()=>b
        }),
        Symbol();
        const I = Symbol()
          , x = Object.getPrototypeOf
          , G = new WeakMap
          , W = (r,h=!0)=>{
            G.set(r, h)
        }
          , t = r=>"object" == typeof r && null !== r
          , e = new WeakMap
          , n = new WeakSet
          , [o] = ((r=Object.is,h=((a,E)=>new Proxy(a,E)),_=(a=>t(a) && !n.has(a) && (Array.isArray(a) || !(Symbol.iterator in a)) && !(a instanceof WeakMap) && !(a instanceof WeakSet) && !(a instanceof Error) && !(a instanceof Number) && !(a instanceof Date) && !(a instanceof String) && !(a instanceof RegExp) && !(a instanceof ArrayBuffer)),L=(a=>{
            switch (a.status) {
            case "fulfilled":
                return a.value;
            case "rejected":
                throw a.reason;
            default:
                throw a
            }
        }
        ),P=new WeakMap,p=((a,E,K=L)=>{
            const O = P.get(a);
            if (O?.[0] === E)
                return O[1];
            const R = Array.isArray(a) ? [] : Object.create(Object.getPrototypeOf(a));
            return W(R, !0),
            P.set(a, [E, R]),
            Reflect.ownKeys(a).forEach(D=>{
                if (Object.getOwnPropertyDescriptor(R, D))
                    return;
                const A = Reflect.get(a, D)
                  , $ = {
                    value: A,
                    enumerable: !0,
                    configurable: !0
                };
                if (n.has(A))
                    W(A, !1);
                else if (A instanceof Promise)
                    delete $.value,
                    $.get = ()=>K(A);
                else if (e.has(A)) {
                    const [T,oe] = e.get(A);
                    $.value = p(T, oe(), K)
                }
                Object.defineProperty(R, D, $)
            }
            ),
            R
        }
        ),v=new WeakMap,g=[1, 1],S=(a=>{
            if (!t(a))
                throw new Error("object required");
            const E = v.get(a);
            if (E)
                return E;
            let K = g[0];
            const O = new Set
              , R = (m,y=++g[0])=>{
                K !== y && (K = y,
                O.forEach(l=>l(m, y)))
            }
            ;
            let D = g[1];
            const $ = m=>(y,l)=>{
                const B = [...y];
                B[1] = [m, ...B[1]],
                R(B, l)
            }
              , T = new Map
              , ae = m=>{
                var y;
                const l = T.get(m);
                l && (T.delete(m),
                null == (y = l[1]) || y.call(l))
            }
              , ie = Array.isArray(a) ? [] : Object.create(Object.getPrototypeOf(a))
              , re = h(ie, {
                deleteProperty(m, y) {
                    const l = Reflect.get(m, y);
                    ae(y);
                    const B = Reflect.deleteProperty(m, y);
                    return B && R(["delete", [y], l]),
                    B
                },
                set(m, y, l, B) {
                    const te = Reflect.has(m, y)
                      , ne = Reflect.get(m, y, B);
                    if (te && (r(ne, l) || v.has(l) && r(ne, v.get(l))))
                        return !0;
                    ae(y),
                    t(l) && (l = (r=>(r=>r && (G.has(r) ? G.get(r) : x(r) === Object.prototype || x(r) === Array.prototype))(r) && r[I] || null)(l) || l);
                    let se = l;
                    if (l instanceof Promise)
                        l.then(H=>{
                            l.status = "fulfilled",
                            l.value = H,
                            R(["resolve", [y], H])
                        }
                        ).catch(H=>{
                            l.status = "rejected",
                            l.reason = H,
                            R(["reject", [y], H])
                        }
                        );
                    else {
                        !e.has(l) && _(l) && (se = S(l));
                        const H = !n.has(se) && e.get(se);
                        H && ((m,y)=>{
                            if (T.has(m))
                                throw new Error("prop listener already exists");
                            if (O.size) {
                                const l = y[3]($(m));
                                T.set(m, [y, l])
                            } else
                                T.set(m, [y])
                        }
                        )(y, H)
                    }
                    return Reflect.set(m, y, se, B),
                    R(["set", [y], l, ne]),
                    !0
                }
            });
            return v.set(a, re),
            e.set(re, [ie, (m=++g[1])=>(D !== m && !O.size && (D = m,
            T.forEach(([y])=>{
                const l = y[1](m);
                l > K && (K = l)
            }
            )),
            K), p, m=>(O.add(m),
            1 === O.size && T.forEach(([l,B],te)=>{
                if (B)
                    throw new Error("remove already exists");
                const ne = l[3]($(te));
                T.set(te, [l, ne])
            }
            ),
            ()=>{
                O.delete(m),
                0 === O.size && T.forEach(([l,B],te)=>{
                    B && (B(),
                    T.set(te, [l]))
                }
                )
            }
            )]),
            Reflect.ownKeys(a).forEach(m=>{
                const y = Object.getOwnPropertyDescriptor(a, m);
                "value"in y && (re[m] = a[m],
                delete y.value,
                delete y.writable),
                Object.defineProperty(ie, m, y)
            }
            ),
            re
        }
        ))=>[S, e, n, r, h, _, L, P, p, v, g])();
        function f(r={}) {
            return o(r)
        }
        function b(r, h, _) {
            const L = e.get(r);
            let P;
            L || console.warn("Please use proxy object");
            const p = [];
            let g = !1;
            const a = (0,
            L[3])(E=>{
                p.push(E),
                _ ? h(p.splice(0)) : P || (P = Promise.resolve().then(()=>{
                    P = void 0,
                    g && h(p.splice(0))
                }
                ))
            }
            );
            return g = !0,
            ()=>{
                g = !1,
                a()
            }
        }
        function C(r, h) {
            const _ = e.get(r);
            _ || console.warn("Please use proxy object");
            const [L,P,p] = _;
            return p(L, P(), h)
        }
    }
    ,
    20232: (q,j,u)=>{
        u.d(j, {
            E: ()=>M
        });
        var U = u(62150)
          , I = u(60253);
        function M(i, N) {
            if (!(0,
            I.U)(i))
                throw new U.b({
                    address: i
                });
            if (!(0,
            I.U)(N))
                throw new U.b({
                    address: N
                });
            return i.toLowerCase() === N.toLowerCase()
        }
    }
    ,
    7501: (q,j,u)=>{
        u.r(j),
        u.d(j, {
            ccipFetch: ()=>t,
            offchainLookup: ()=>ee,
            offchainLookupAbiItem: ()=>W,
            offchainLookupSignature: ()=>w
        });
        var U = u(15861)
          , I = u(56809)
          , M = u(76744)
          , i = u(8180)
          , N = u(13558);
        class x extends i.G {
            constructor({callbackSelector: s, cause: o, data: f, extraData: c, sender: b, urls: C}) {
                super(o.shortMessage || "An error occurred while fetching for an offchain result.", {
                    cause: o,
                    metaMessages: [...o.metaMessages || [], o.metaMessages?.length ? "" : [], "Offchain Gateway Call:", C && ["  Gateway URL(s):", ...C.map(J=>`    ${(0,
                    N.Gr)(J)}`)], `  Sender: ${b}`, `  Data: ${f}`, `  Callback selector: ${s}`, `  Extra data: ${c}`].flat()
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "OffchainLookupError"
                })
            }
        }
        class G extends i.G {
            constructor({result: s, url: o}) {
                super("Offchain gateway response is malformed. Response data must be a hex value.", {
                    metaMessages: [`Gateway URL: ${(0,
                    N.Gr)(o)}`, `Response: ${(0,
                    M.P)(s)}`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "OffchainLookupResponseMalformedError"
                })
            }
        }
        class Z extends i.G {
            constructor({sender: s, to: o}) {
                super("Reverted sender address does not match target contract address (`to`).", {
                    metaMessages: [`Contract address: ${o}`, `OffchainLookup sender address: ${s}`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "OffchainLookupSenderMismatchError"
                })
            }
        }
        var z = u(35096)
          , Y = u(49095)
          , X = u(91677)
          , V = u(20232)
          , Q = u(81364)
          , d = u(9571);
        const w = "0x556f1830"
          , W = {
            name: "OffchainLookup",
            type: "error",
            inputs: [{
                name: "sender",
                type: "address"
            }, {
                name: "urls",
                type: "string[]"
            }, {
                name: "callData",
                type: "bytes"
            }, {
                name: "callbackFunction",
                type: "bytes4"
            }, {
                name: "extraData",
                type: "bytes"
            }]
        };
        function ee(n, s) {
            return k.apply(this, arguments)
        }
        function k() {
            return (k = (0,
            U.Z)(function*(n, {blockNumber: s, blockTag: o, data: f, to: c}) {
                const {args: b} = (0,
                Y.p)({
                    data: f,
                    abi: [W]
                })
                  , [C,J,F,r,h] = b;
                try {
                    if (!(0,
                    V.E)(c, C))
                        throw new Z({
                            sender: C,
                            to: c
                        });
                    const _ = yield t({
                        data: F,
                        sender: C,
                        urls: J
                    })
                      , {data: L} = yield(0,
                    I.R)(n, {
                        blockNumber: s,
                        blockTag: o,
                        data: (0,
                        Q.zo)([r, (0,
                        X.E)([{
                            type: "bytes"
                        }, {
                            type: "bytes"
                        }], [_, h])]),
                        to: c
                    });
                    return L
                } catch (_) {
                    throw new x({
                        callbackSelector: r,
                        cause: _,
                        data: f,
                        extraData: h,
                        sender: C,
                        urls: J
                    })
                }
            })).apply(this, arguments)
        }
        function t(n) {
            return e.apply(this, arguments)
        }
        function e() {
            return (e = (0,
            U.Z)(function*({data: n, sender: s, urls: o}) {
                let f = new Error("An unknown error occurred.");
                for (let c = 0; c < o.length; c++) {
                    const b = o[c]
                      , C = b.includes("{sender}") || b.includes("{data}") ? "GET" : "POST"
                      , J = "POST" === C ? {
                        data: n,
                        sender: s
                    } : void 0;
                    try {
                        const F = yield fetch(b.replace("{sender}", s).replace("{data}", n), {
                            body: JSON.stringify(J),
                            method: C
                        });
                        let r;
                        if (r = F.headers.get("Content-Type")?.startsWith("application/json") ? (yield F.json()).data : yield F.text(),
                        !F.ok) {
                            f = new z.Gg({
                                body: J,
                                details: (0,
                                M.P)(r.error) || F.statusText,
                                headers: F.headers,
                                status: F.status,
                                url: b
                            });
                            continue
                        }
                        if (!(0,
                        d.v)(r)) {
                            f = new G({
                                result: r,
                                url: b
                            });
                            continue
                        }
                        return r
                    } catch (F) {
                        f = new z.Gg({
                            body: J,
                            details: F.message,
                            url: b
                        })
                    }
                }
                throw f
            })).apply(this, arguments)
        }
    }
}]);
