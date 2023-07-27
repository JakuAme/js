"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[8122], {
    37713: (Qt,Ct,m)=>{
        m.d(Ct, {
            U: ()=>it
        });
        var t = m(52413)
          , d = m(12113)
          , w = m(89383)
          , s = m(49319)
          , b = m(36895)
          , l = m(94650)
          , N = m(62289);
        function y(z, pt) {
            if (1 & z && (l.O4$(),
            l.TgZ(0, "linearGradient", 9),
            l._UZ(1, "stop", 10)(2, "stop", 11),
            l.qZA()),
            2 & z) {
                const Y = l.oxw(2);
                l.Q6J("id", "gradient_" + Y.index),
                l.xp6(1),
                l.uIk("stop-color", Y.colorValue),
                l.xp6(1),
                l.uIk("stop-color", Y.colorValue)
            }
        }
        const f = function(z, pt) {
            return {
                "tablet-layout": z,
                small: pt
            }
        }
          , _ = function(z) {
            return {
                "stroke-dashoffset": z
            }
        };
        function V(z, pt) {
            if (1 & z && (l.TgZ(0, "div", 1),
            l.ALo(1, "translate"),
            l.TgZ(2, "div", 2)(3, "div", 3),
            l.O4$(),
            l.TgZ(4, "svg", 4),
            l.YNc(5, y, 3, 3, "linearGradient", 5),
            l._UZ(6, "path", 6)(7, "path", 7),
            l.qZA(),
            l.kcU(),
            l.TgZ(8, "div", 8),
            l._uU(9),
            l.qZA()()()()),
            2 & z) {
                const Y = l.oxw();
                l.Q6J("ngClass", l.WLB(13, f, Y.isTablet, "small" === Y.size))("ngbTooltip", l.lcZ(1, 11, "pair_explorer.no_dextscore_message"))("disableTooltip", 0 !== Y.dextScore.value),
                l.xp6(2),
                l.Q6J("id", "progressDext_" + Y.index),
                l.xp6(3),
                l.Q6J("ngIf", 0 !== Y.dextScore.value),
                l.xp6(2),
                l.Q6J("id", "dextValue_" + Y.index)("ngStyle", l.VKq(16, _, Y.loadScore)),
                l.uIk("stroke", "url(#gradient_" + Y.index + ")"),
                l.xp6(1),
                l.ekj("dext-value__empty", 0 === Y.dextScore.value),
                l.xp6(1),
                l.hij(" ", 0 !== Y.dextScore.value ? Y.dextScore.value : "--", " ")
            }
        }
        let it = (()=>{
            class z extends t.K9 {
                constructor(Y, mt) {
                    super(),
                    this._breakpointObserver = Y,
                    this._cdRef = mt,
                    this.size = "normal",
                    this.isTablet = !1
                }
                ngOnInit() {
                    this._breakpointObserver.observe([d.K5, d.mT]).pipe((0,
                    t.sL)(this)).subscribe(Y=>{
                        this.isTablet = !!Y.breakpoints[d.K5],
                        this._cdRef.detectChanges()
                    }
                    )
                }
                get loadScore() {
                    return 100 - (this.dextScore.value + 1)
                }
                get colorValue() {
                    return this.dextScore.color
                }
                onDestroy() {}
            }
            return z.\u0275fac = function(Y) {
                return new (Y || z)(l.Y36(N.Yg),l.Y36(l.sBO))
            }
            ,
            z.\u0275cmp = l.Xpm({
                type: z,
                selectors: [["app-dext-score-chart"]],
                inputs: {
                    dextScore: "dextScore",
                    index: "index",
                    size: "size"
                },
                standalone: !0,
                features: [l.qOj, l.jDz],
                decls: 1,
                vars: 1,
                consts: [["class", "dext-score-component", 3, "ngClass", "ngbTooltip", "disableTooltip", 4, "ngIf"], [1, "dext-score-component", 3, "ngClass", "ngbTooltip", "disableTooltip"], [1, "progress-container", 3, "id"], [1, "progress-value-container"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 80 50"], ["x1", "0", "y1", "0", "x2", "0", "y2", "100%", 3, "id", 4, "ngIf"], ["d", "M 8.169 40 A 31.831,31.831 0, 0, 1 71.831 40", "fill", "none", 1, "muted"], ["fill", "none", "d", "M 8.169 40 A 31.831,31.831 0, 0, 1 71.831 40", 1, "dext-value", 3, "id", "ngStyle"], [1, "dext-value"], ["x1", "0", "y1", "0", "x2", "0", "y2", "100%", 3, "id"], ["offset", "0%"], ["offset", "100%"]],
                template: function(Y, mt) {
                    1 & Y && l.YNc(0, V, 10, 18, "div", 0),
                    2 & Y && l.Q6J("ngIf", !!mt.dextScore)
                },
                dependencies: [b.O5, b.mk, s._L, b.PC, w.aw, w.X$],
                styles: [".dext-score-component[_ngcontent-%COMP%]{padding:1.2rem;display:flex;flex-direction:column}.dext-score-component.tablet-layout[_ngcontent-%COMP%]{flex-direction:row;justify-content:flex-start;align-items:flex-end;align-content:flex-end}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{order:2}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .info-dext-container[_ngcontent-%COMP%]{order:1;justify-content:flex-start;align-items:flex-start;align-content:flex-start}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{flex-direction:column;justify-content:space-around;align-items:flex-start;align-content:flex-start}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-summarized[_ngcontent-%COMP%]{display:none}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-detailed[_ngcontent-%COMP%]{display:inline}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;order:1}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{width:50%;justify-content:flex-start}}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]{display:flex;align-content:center;justify-content:center}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:5.625rem}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:8.125rem}}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{stroke-linecap:round;stroke-width:4}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%]{stroke:#cacedb}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]{stroke-dasharray:100;stroke-dashoffset:100}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;top:2.5rem}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]{top:3.75rem}}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028;margin-top:0;font-size:2rem;line-height:3rem;font-weight:500}body.dark-theme   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:1.5rem}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value__empty[_ngcontent-%COMP%]{transform:translateY(.3125rem)}.dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{display:flex;justify-content:center;color:#142028}body.dark-theme   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#142028}.dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-align:center;font-weight:500;font-size:14px;line-height:1.3125rem;margin-bottom:.25rem}.dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:1.125rem;margin:.3125rem 0}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;align-content:center;margin-top:.25rem;color:#142028;font-size:.6875rem}body.dark-theme   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#142028}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .color-red[_ngcontent-%COMP%]{color:#ea3943!important}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{gap:.1875rem}}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:.25rem;font-size:.6875rem;line-height:1rem}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-summarized[_ngcontent-%COMP%]{display:inline}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-detailed[_ngcontent-%COMP%]{display:none;justify-content:flex-start}.dext-score-component.small[_ngcontent-%COMP%]{padding:0}.dext-score-component.small[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:1.875rem}.dext-score-component.small[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]{top:.75rem}.info-dext-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;order:2}@media (min-width: 600px) and (max-width: 1023px){.info-dext-container[_ngcontent-%COMP%]{width:50%}}"],
                changeDetection: 0
            }),
            z
        }
        )()
    }
    ,
    98085: (Qt,Ct,m)=>{
        m.d(Ct, {
            D: ()=>b
        });
        var t = m(52413)
          , d = m(61135)
          , w = m(94650);
        const s = ["svgGraph"];
        let b = (()=>{
            class l extends t.K9 {
                set candles(y) {
                    y && (this._candles = y,
                    this._candlesChanged$.next())
                }
                set color(y) {
                    this._color = y
                }
                get color() {
                    return this._color
                }
                constructor(y) {
                    super(),
                    this._cdRef = y,
                    this.height = 46,
                    this.candlesBox = "0 0 0 0",
                    this._candlesChanged$ = new d.X(null)
                }
                get heightPx() {
                    return `${this.height}px`
                }
                ngAfterViewInit() {
                    this._candlesChanged$.pipe((0,
                    t.sL)(this)).subscribe(()=>{
                        this.svgGraph && this._candles && (this.svgGraph.nativeElement.innerHTML = "",
                        this._createGraph())
                    }
                    )
                }
                _createGraph() {
                    this._candles = this._getCandleResults();
                    let y = 0
                      , f = [];
                    this._candles && this._candles.length ? (y = this._candles.length,
                    f = this._getPointsProportion()) : (f = this._getPointsNotRecentSwap(),
                    y = f.length,
                    this._color = "#818ea3"),
                    this.candlesBox = `0 0 ${y} ${this.height}`,
                    this._createPolygonSVG(y, this.height, f),
                    this._createPolylineSVG(f),
                    this._cdRef.detectChanges()
                }
                _getPointsNotRecentSwap() {
                    const y = 1440 / this.timeMinutes
                      , f = [];
                    for (let _ = 0; _ < y; _++)
                        f.push([_, Math.abs(.5 * this.height - this.height)]);
                    return f
                }
                _getPointsProportion() {
                    const y = this._candles.length ? Math.max.apply(Math, this._candles.map(V=>V.open)) : 0
                      , f = this._candles.length ? Math.min.apply(Math, this._candles.map(V=>V.open)) : 0
                      , _ = [];
                    return this._candles.forEach((V,it)=>{
                        let z = (V.open - f) / (y - f);
                        isNaN(z) && (z = 0),
                        _.push([it, Math.abs(z * this.height - this.height)])
                    }
                    ),
                    _
                }
                _createPolygonSVG(y, f, _) {
                    const V = this.svgGraph.nativeElement
                      , it = document.createElementNS(V.namespaceURI, "polygon");
                    it.setAttributeNS(null, "points", `${_.map(z=>" " + z[0] + "," + z[1])} ${y},${f} 0,${f}`),
                    it.setAttributeNS(null, "fill", `${this.color}`),
                    it.setAttributeNS(null, "stroke", `${this.color}`),
                    it.setAttributeNS(null, "stroke-width", _.length > 90 ? "1" : "0.2"),
                    V.appendChild(it)
                }
                _createPolylineSVG(y) {
                    const f = this.svgGraph.nativeElement
                      , _ = document.createElementNS(f.namespaceURI, "polyline");
                    _.setAttributeNS(null, "points", `${y.map(V=>" " + V[0] + "," + V[1])}`),
                    _.setAttributeNS(null, "fill", "none"),
                    _.setAttributeNS(null, "stroke", `${this.color}`),
                    _.setAttributeNS(null, "stroke-width", y.length > 90 ? "1" : "0.2"),
                    f.appendChild(_)
                }
                _getCandleResults() {
                    const y = new Date;
                    let f = new Date;
                    const _ = [];
                    for (f.setDate(y.getDate() - 1); f <= y; ) {
                        const V = t.gS.binarySearch(this._candles, f.getTime(), "time");
                        f = new Date(f.getTime() + 60 * this.timeMinutes * 1e3),
                        -1 !== V ? _.push(this._candles[V]) : _.length && _.push(_[_.length - 1])
                    }
                    return _
                }
                onDestroy() {}
            }
            return l.\u0275fac = function(y) {
                return new (y || l)(w.Y36(w.sBO))
            }
            ,
            l.\u0275cmp = w.Xpm({
                type: l,
                selectors: [["app-line-chart"]],
                viewQuery: function(y, f) {
                    if (1 & y && w.Gf(s, 5),
                    2 & y) {
                        let _;
                        w.iGM(_ = w.CRH()) && (f.svgGraph = _.first)
                    }
                },
                inputs: {
                    candles: "candles",
                    height: "height",
                    timeMinutes: "timeMinutes",
                    color: "color"
                },
                standalone: !0,
                features: [w.qOj, w.jDz],
                decls: 3,
                vars: 3,
                consts: [[1, "line-chart-container"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none", "width", "100%"], ["svgGraph", ""]],
                template: function(y, f) {
                    1 & y && (w.TgZ(0, "div", 0),
                    w.O4$(),
                    w._UZ(1, "svg", 1, 2),
                    w.qZA()),
                    2 & y && (w.xp6(1),
                    w.uIk("viewBox", f.candlesBox)("height", f.heightPx)("style", 30 === f.height ? "border-radius: 0" : null, w.Ckj))
                },
                styles: [".line-chart-container[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%}.line-chart-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]    {width:100%;border-radius:0 0 .625rem .625rem}.line-chart-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]     polygon{stroke-linejoin:round;opacity:.5}"],
                changeDetection: 0
            }),
            l
        }
        )()
    }
    ,
    73658: (Qt,Ct,m)=>{
        m.r(Ct),
        m.d(Ct, {
            HOME_ROUTES: ()=>Pc
        });
        var t = m(94650)
          , d = m(52413)
          , w = m(53763)
          , s = m(99703)
          , b = m(36895)
          , l = m(24006)
          , N = m(37340)
          , y = m(62289)
          , f = m(89383)
          , _ = m(12113)
          , V = function() {
            return V = Object.assign || function(e) {
                for (var a, n = 1, o = arguments.length; n < o; n++)
                    for (var i in a = arguments[n])
                        Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
                return e
            }
            ,
            V.apply(this, arguments)
        };
        function it(e, a, n) {
            if (n || 2 === arguments.length)
                for (var o, i = 0, r = a.length; i < r; i++)
                    !o && i in a || (o || (o = Array.prototype.slice.call(a, 0, i)),
                    o[i] = a[i]);
            return e.concat(o || Array.prototype.slice.call(a))
        }
        function z(e) {
            return Array.prototype.slice.call(e)
        }
        function pt(e, a) {
            var n = Math.floor(e);
            return n === a || n + 1 === a ? e : a
        }
        function Y() {
            return Date.now()
        }
        function mt(e, a, n) {
            if (a = "data-keen-slider-" + a,
            null === n)
                return e.removeAttribute(a);
            e.setAttribute(a, n || "")
        }
        function vt(e, a) {
            return a = a || document,
            "function" == typeof e && (e = e(a)),
            Array.isArray(e) ? e : "string" == typeof e ? z(a.querySelectorAll(e)) : e instanceof HTMLElement ? [e] : e instanceof NodeList ? z(e) : []
        }
        function bt(e) {
            e.raw && (e = e.raw),
            e.cancelable && !e.defaultPrevented && e.preventDefault()
        }
        function Mt(e) {
            e.raw && (e = e.raw),
            e.stopPropagation && e.stopPropagation()
        }
        function Et() {
            var e = [];
            return {
                add: function(a, n, o, i) {
                    a.addListener ? a.addListener(o) : a.addEventListener(n, o, i),
                    e.push([a, n, o, i])
                },
                input: function(a, n, o, i) {
                    var r;
                    this.add(a, n, (r = o,
                    function(c) {
                        c.nativeEvent && (c = c.nativeEvent);
                        var p = c.changedTouches || []
                          , O = c.targetTouches || []
                          , h = c.detail && c.detail.x ? c.detail : null;
                        return r({
                            id: h ? h.identifier ? h.identifier : "i" : O[0] ? O[0] ? O[0].identifier : "e" : "d",
                            idChanged: h ? h.identifier ? h.identifier : "i" : p[0] ? p[0] ? p[0].identifier : "e" : "d",
                            raw: c,
                            x: h && h.x ? h.x : O[0] ? O[0].screenX : h ? h.x : c.pageX,
                            y: h && h.y ? h.y : O[0] ? O[0].screenY : h ? h.y : c.pageY
                        })
                    }
                    ), i)
                },
                purge: function() {
                    e.forEach(function(a) {
                        a[0].removeListener ? a[0].removeListener(a[2]) : a[0].removeEventListener(a[1], a[2], a[3])
                    }),
                    e = []
                }
            }
        }
        function St(e, a, n) {
            return Math.min(Math.max(e, a), n)
        }
        function st(e) {
            return (e > 0 ? 1 : 0) - (e < 0 ? 1 : 0) || +e
        }
        function Ut(e) {
            var a = e.getBoundingClientRect();
            return {
                height: pt(a.height, e.offsetHeight),
                width: pt(a.width, e.offsetWidth)
            }
        }
        function nt(e, a, n, o) {
            var i = e && e[a];
            return null == i ? n : o && "function" == typeof i ? i() : i
        }
        function lt(e) {
            return Math.round(1e6 * e) / 1e6
        }
        function an(e) {
            var a, n, o, i, r, c, p, O;
            function h(k) {
                return 2 * k
            }
            function I(k) {
                return St(k, p, O)
            }
            function j(k) {
                return 1 - Math.pow(1 - k, 3)
            }
            function S() {
                return o ? e.track.velocity() : 0
            }
            function P(k, L) {
                void 0 === L && (L = 1e3);
                var T = 147e-9 + (k = Math.abs(k)) / L;
                return {
                    dist: Math.pow(k, 2) / T,
                    dur: k / T
                }
            }
            function F() {
                var k = e.track.details;
                k && (r = k.min,
                c = k.max,
                p = k.minIdx,
                O = k.maxIdx)
            }
            function Q() {
                e.animator.stop()
            }
            e.on("updated", F),
            e.on("optionsChanged", F),
            e.on("created", F),
            e.on("dragStarted", function() {
                o = !1,
                Q(),
                a = n = e.track.details.abs
            }),
            e.on("dragChecked", function() {
                o = !0
            }),
            e.on("dragEnded", function() {
                var k = e.options.mode;
                "snap" === k && function() {
                    var L = e.track
                      , T = e.track.details
                      , R = T.position
                      , E = st(S());
                    (R > c || R < r) && (E = 0);
                    var U = a + E;
                    0 === T.slides[L.absToRel(U)].portion && (U -= E),
                    a !== n && (U = n),
                    st(L.idxToDist(U, !0)) !== E && (U += E),
                    U = I(U);
                    var W = L.idxToDist(U, !0);
                    e.animator.start([{
                        distance: W,
                        duration: 500,
                        easing: function(C) {
                            return 1 + --C * C * C * C * C
                        }
                    }])
                }(),
                "free" !== k && "free-snap" !== k || function J() {
                    Q();
                    var k = "free-snap" === e.options.mode
                      , L = e.track
                      , T = S();
                    i = st(T);
                    var R = e.track.details
                      , E = [];
                    if (T || !k) {
                        var U = P(T)
                          , W = U.dist
                          , C = U.dur;
                        if (C = h(C),
                        W *= i,
                        k) {
                            var D = L.idxToDist(L.distToIdx(W), !0);
                            D && (W = D)
                        }
                        E.push({
                            distance: W,
                            duration: C,
                            easing: j
                        });
                        var $ = R.position
                          , at = $ + W;
                        if (at < r || at > c) {
                            var rt = at < r ? r - $ : c - $
                              , Z = 0
                              , u = T;
                            if (st(rt) === i) {
                                var x = Math.min(Math.abs(rt) / Math.abs(W), 1)
                                  , g = (1 - Math.pow(1 - x, 1 / 3)) * C;
                                E[0].earlyExit = g,
                                u = T * (1 - x)
                            } else
                                E[0].earlyExit = 0,
                                Z += rt;
                            var v = P(u, 100)
                              , M = v.dist * i;
                            e.options.rubberband && (E.push({
                                distance: M,
                                duration: h(v.dur),
                                easing: j
                            }),
                            E.push({
                                distance: -M + Z,
                                duration: 500,
                                easing: j
                            }))
                        }
                        e.animator.start(E)
                    } else
                        e.moveToIdx(I(R.abs), !0, {
                            duration: 500,
                            easing: function(A) {
                                return 1 + --A * A * A * A * A
                            }
                        })
                }()
            }),
            e.on("dragged", function() {
                n = e.track.details.abs
            })
        }
        function rn(e) {
            var a, n, o, i, r, c, p, O, h, I, j, S, J, P, F, Q, k, L, T = Et();
            function R(Z) {
                if (c && O === Z.id) {
                    var u = C(Z);
                    if (h) {
                        if (!W(Z))
                            return U(Z);
                        I = u,
                        h = !1,
                        e.emit("dragChecked")
                    }
                    if (Q)
                        return I = u;
                    bt(Z);
                    var x = function(v) {
                        if (k === -1 / 0 && L === 1 / 0)
                            return v;
                        var M = e.track.details
                          , A = M.length
                          , q = M.position
                          , H = St(v, k - q, L - q);
                        if (0 === A)
                            return 0;
                        if (!e.options.rubberband)
                            return H;
                        if (q <= L && q >= k || q < k && n > 0 || q > L && n < 0)
                            return v;
                        var Zt = Math.abs((q < k ? q - k : q - L) / A * (i * A))
                          , At = Math.max(0, 1 - Zt / r * 2);
                        return At * At * v
                    }(p(I - u) / i * o);
                    n = st(x);
                    var g = e.track.details.position;
                    (g > k && g < L || g === k && n > 0 || g === L && n < 0) && Mt(Z),
                    j += x,
                    !S && Math.abs(j * i) > 5 && (S = !0),
                    e.track.add(x),
                    I = u,
                    e.emit("dragged")
                }
            }
            function E(Z) {
                !c && e.track.details && e.track.details.length && (j = 0,
                c = !0,
                S = !1,
                h = !0,
                O = Z.id,
                W(Z),
                I = C(Z),
                e.emit("dragStarted"))
            }
            function U(Z) {
                c && O === Z.idChanged && (c = !1,
                e.emit("dragEnded"))
            }
            function W(Z) {
                var u = D()
                  , x = u ? Z.y : Z.x
                  , g = u ? Z.x : Z.y
                  , v = void 0 !== J && void 0 !== P && Math.abs(P - g) <= Math.abs(J - x);
                return J = x,
                P = g,
                v
            }
            function C(Z) {
                return D() ? Z.y : Z.x
            }
            function D() {
                return e.options.vertical
            }
            function $() {
                i = e.size,
                r = D() ? window.innerHeight : window.innerWidth;
                var Z = e.track.details;
                Z && (k = Z.min,
                L = Z.max)
            }
            function at(Z) {
                S && (Mt(Z),
                bt(Z))
            }
            function rt() {
                if (T.purge(),
                e.options.drag && !e.options.disabled) {
                    var Z;
                    p = "function" == typeof (Z = e.options.dragSpeed || 1) ? Z : function(x) {
                        return x * Z
                    }
                    ,
                    o = e.options.rtl ? -1 : 1,
                    $(),
                    a = e.container,
                    vt("[".concat("data-keen-slider-clickable", "]:not([").concat("data-keen-slider-clickable", "=false])"), a).map(function(g) {
                        T.add(g, "dragstart", Mt),
                        T.add(g, "mousedown", Mt),
                        T.add(g, "touchstart", Mt)
                    }),
                    T.add(a, "dragstart", function(x) {
                        bt(x)
                    }),
                    T.add(a, "click", at, {
                        capture: !0
                    }),
                    T.input(a, "ksDragStart", E),
                    T.input(a, "ksDrag", R),
                    T.input(a, "ksDragEnd", U),
                    T.input(a, "mousedown", E),
                    T.input(a, "mousemove", R),
                    T.input(a, "mouseleave", U),
                    T.input(a, "mouseup", U),
                    T.input(a, "touchstart", E, {
                        passive: !0
                    }),
                    T.input(a, "touchmove", R, {
                        passive: !1
                    }),
                    T.input(a, "touchend", U),
                    T.input(a, "touchcancel", U),
                    T.add(window, "wheel", function(x) {
                        c && bt(x)
                    });
                    var u = "data-keen-slider-scrollable";
                    vt("[".concat(u, "]:not([").concat(u, "=false])"), e.container).map(function(x) {
                        return T.input(g = x, "touchstart", function(M) {
                            v = C(M),
                            Q = !0,
                            F = !0
                        }, {
                            passive: !0
                        }),
                        T.input(g, "touchmove", function(M) {
                            var A = D()
                              , q = A ? g.scrollHeight - g.clientHeight : g.scrollWidth - g.clientWidth
                              , H = v - C(M)
                              , K = A ? g.scrollTop : g.scrollLeft
                              , ct = A && "scroll" === g.style.overflowY || !A && "scroll" === g.style.overflowX;
                            if (v = C(M),
                            (H < 0 && K > 0 || H > 0 && K < q) && F && ct)
                                return Q = !0;
                            F = !1,
                            bt(M),
                            Q = !1
                        }),
                        void T.input(g, "touchend", function() {
                            Q = !1
                        });
                        var g, v
                    })
                }
            }
            e.on("updated", $),
            e.on("optionsChanged", rt),
            e.on("created", rt),
            e.on("destroyed", T.purge)
        }
        function cn(e) {
            var a, n, o = null;
            function i(J, P, F) {
                e.animator.active ? c(J, P, F) : requestAnimationFrame(function() {
                    return c(J, P, F)
                })
            }
            function r() {
                i(!1, !1, n)
            }
            function c(J, P, F) {
                var Q = 0
                  , k = e.size
                  , L = e.track.details;
                if (L && a) {
                    var T = L.slides;
                    a.forEach(function(R, E) {
                        if (J)
                            !o && P && O(R, null, F),
                            h(R, null, F);
                        else {
                            if (!T[E])
                                return;
                            var U = T[E].size * k;
                            !o && P && O(R, U, F),
                            h(R, T[E].distance * k - Q, F),
                            Q += U
                        }
                    })
                }
            }
            function p(J) {
                return "performance" === e.options.renderMode ? Math.round(J) : J
            }
            function O(J, P, F) {
                var Q = F ? "height" : "width";
                null !== P && (P = p(P) + "px"),
                J.style["min-" + Q] = P,
                J.style["max-" + Q] = P
            }
            function h(J, P, F) {
                if (null !== P) {
                    P = p(P);
                    var Q = F ? P : 0;
                    P = "translate3d(".concat(F ? 0 : P, "px, ").concat(Q, "px, 0)")
                }
                J.style.transform = P,
                J.style["-webkit-transform"] = P
            }
            function I() {
                a && (c(!0, !0, n),
                a = null),
                e.on("detailsChanged", r, !0)
            }
            function j() {
                i(!1, !0, n)
            }
            function S() {
                I(),
                n = e.options.vertical,
                e.options.disabled || "custom" === e.options.renderMode || (o = "auto" === nt(e.options.slides, "perView", null),
                e.on("detailsChanged", r),
                (a = e.slides).length && j())
            }
            e.on("created", S),
            e.on("optionsChanged", S),
            e.on("beforeOptionsChanged", function() {
                I()
            }),
            e.on("updated", j),
            e.on("destroyed", I)
        }
        function ln(e, a) {
            return function(n) {
                var o, i, r, c, O, h = Et();
                function I(C) {
                    mt(n.container, "reverse", "rtl" !== window.getComputedStyle(n.container, null).getPropertyValue("direction") || C ? null : ""),
                    mt(n.container, "v", n.options.vertical && !C ? "" : null),
                    mt(n.container, "disabled", n.options.disabled && !C ? "" : null)
                }
                function j() {
                    S() && k()
                }
                function S() {
                    var C = null;
                    if (c.forEach(function($) {
                        $.matches && (C = $.__media)
                    }),
                    C === o)
                        return !1;
                    o || n.emit("beforeOptionsChanged"),
                    o = C;
                    var D = C ? r.breakpoints[C] : r;
                    return n.options = V(V({}, r), D),
                    I(),
                    U(),
                    W(),
                    T(),
                    !0
                }
                function J(C) {
                    var D = Ut(C);
                    return (n.options.vertical ? D.height : D.width) / n.size || 1
                }
                function P() {
                    return n.options.trackConfig.length
                }
                function F(C) {
                    for (var D in o = !1,
                    r = V(V({}, a), C),
                    h.purge(),
                    i = n.size,
                    c = [],
                    r.breakpoints || []) {
                        var $ = window.matchMedia(D);
                        $.__media = D,
                        c.push($),
                        h.add($, "change", j)
                    }
                    h.add(window, "orientationchange", E),
                    h.add(window, "resize", R),
                    S()
                }
                function Q(C) {
                    n.animator.stop();
                    var D = n.track.details;
                    n.track.init(C ?? (D ? D.abs : 0))
                }
                function k(C) {
                    Q(C),
                    n.emit("optionsChanged")
                }
                function L(C, D) {
                    if (C)
                        return F(C),
                        void k(D);
                    U(),
                    W();
                    var $ = P();
                    T(),
                    P() !== $ ? k(D) : Q(D),
                    n.emit("updated")
                }
                function T() {
                    var C = n.options.slides;
                    if ("function" == typeof C)
                        return n.options.trackConfig = C(n.size, n.slides);
                    for (var D = n.slides, at = "number" == typeof C ? C : nt(C, "number", D.length, !0), rt = [], Z = nt(C, "perView", 1, !0), u = nt(C, "spacing", 0, !0) / n.size || 0, x = "auto" === Z ? u : u / Z, g = nt(C, "origin", "auto"), v = 0, M = 0; M < at; M++) {
                        var A = "auto" === Z ? J(D[M]) : 1 / Z - u + x;
                        rt.push({
                            origin: "center" === g ? .5 - A / 2 : "auto" === g ? 0 : g,
                            size: A,
                            spacing: u
                        }),
                        v += A
                    }
                    if (v += u * (at - 1),
                    "auto" === g && !n.options.loop && 1 !== Z) {
                        var H = 0;
                        rt.map(function(K) {
                            var ct = v - H;
                            return H += K.size + u,
                            ct >= 1 || (K.origin = 1 - ct - (v > 1 ? 0 : 1 - v)),
                            K
                        })
                    }
                    n.options.trackConfig = rt
                }
                function R() {
                    U();
                    var C = n.size;
                    n.options.disabled || C === i || (i = C,
                    L())
                }
                function E() {
                    R(),
                    setTimeout(R, 500),
                    setTimeout(R, 2e3)
                }
                function U() {
                    var C = Ut(n.container);
                    n.size = (n.options.vertical ? C.height : C.width) || 1
                }
                function W() {
                    n.slides = vt(n.options.selector, n.container)
                }
                n.container = (O = vt(e, document)).length ? O[0] : null,
                n.destroy = function() {
                    h.purge(),
                    n.emit("destroyed"),
                    I(!0)
                }
                ,
                n.prev = function() {
                    n.moveToIdx(n.track.details.abs - 1, !0)
                }
                ,
                n.next = function() {
                    n.moveToIdx(n.track.details.abs + 1, !0)
                }
                ,
                n.update = L,
                F(n.options)
            }
        }
        var sn = function(e, a, n) {
            try {
                return o = a,
                i = it([ln(e, {
                    drag: !0,
                    mode: "snap",
                    renderMode: "precision",
                    rubberband: !0,
                    selector: ".keen-slider__slide"
                }), cn, rn, an], n || [], !0),
                c = {},
                r = {
                    emit: function(p) {
                        c[p] && c[p].forEach(function(h) {
                            h(r)
                        });
                        var O = r.options && r.options[p];
                        O && O(r)
                    },
                    moveToIdx: function(p, O, h) {
                        var I = r.track.idxToDist(p, O);
                        if (I) {
                            var j = r.options.defaultAnimation;
                            r.animator.start([{
                                distance: I,
                                duration: nt(h || j, "duration", 500),
                                easing: nt(h || j, "easing", function(S) {
                                    return 1 + --S * S * S * S * S
                                })
                            }])
                        }
                    },
                    on: function(p, O, h) {
                        void 0 === h && (h = !1),
                        c[p] || (c[p] = []);
                        var I = c[p].indexOf(O);
                        I > -1 ? h && delete c[p][I] : h || c[p].push(O)
                    },
                    options: o
                },
                function() {
                    if (r.track = function on(e) {
                        var a, n, o, i, r, c, p, O, h, I, j, S, J, P, F = 1 / 0, Q = [], k = null, L = 0;
                        function T(u) {
                            rt(L + u)
                        }
                        function R(u) {
                            var x = E(L + u).abs;
                            return C(x) ? x : null
                        }
                        function E(u) {
                            var x = Math.floor(Math.abs(lt(u / n)))
                              , g = lt((u % n + n) % n);
                            g === n && (g = 0);
                            var v = st(u)
                              , M = p.indexOf(it([], p, !0).reduce(function(q, H) {
                                return Math.abs(H - g) < Math.abs(q - g) ? H : q
                            }))
                              , A = M;
                            return v < 0 && x++,
                            M === c && (A = 0,
                            x += v > 0 ? 1 : -1),
                            {
                                abs: A + x * c * v,
                                origin: M,
                                rel: A
                            }
                        }
                        function U(u, x, g) {
                            var v;
                            if (x || !$())
                                return W(u, g);
                            if (!C(u))
                                return null;
                            var M = E(g ?? L)
                              , q = u - M.rel
                              , H = M.abs + q;
                            v = W(H);
                            var K = W(H - c * st(q));
                            return (null !== K && Math.abs(K) < Math.abs(v) || null === v) && (v = K),
                            lt(v)
                        }
                        function W(u, x) {
                            if (null == x && (x = lt(L)),
                            !C(u) || null === u)
                                return null;
                            u = Math.round(u);
                            var g = E(x)
                              , v = g.abs
                              , M = g.rel
                              , A = g.origin
                              , q = at(u)
                              , H = (x % n + n) % n
                              , K = p[A]
                              , ct = Math.floor((u - (v - M)) / c) * n;
                            return lt(K - H - K + p[q] + ct + (A === c ? n : 0))
                        }
                        function C(u) {
                            return D(u) === u
                        }
                        function D(u) {
                            return St(u, h, I)
                        }
                        function $() {
                            return i.loop
                        }
                        function at(u) {
                            return (u % c + c) % c
                        }
                        function rt(u) {
                            Q.push({
                                distance: u - L,
                                timestamp: Y()
                            }),
                            Q.length > 6 && (Q = Q.slice(-6)),
                            L = lt(u);
                            var g = Z().abs;
                            if (g !== k) {
                                var v = null !== k;
                                k = g,
                                v && e.emit("slideChanged")
                            }
                        }
                        function Z(u) {
                            var x = u ? null : function() {
                                if (c) {
                                    var g = $()
                                      , v = g ? (L % n + n) % n : L
                                      , M = (g ? L % n : L) - r[0][2]
                                      , A = 0 - (M < 0 && g ? n - Math.abs(M) : M)
                                      , q = 0
                                      , H = E(L)
                                      , K = H.abs
                                      , ct = H.rel
                                      , Zt = r[ct][2]
                                      , At = r.map(function(_t, xc) {
                                        var X = A + q;
                                        (X < 0 - _t[0] || X > 1) && (X += (Math.abs(X) > n - 1 && g ? n : 0) * st(-X));
                                        var Xt = xc - ct
                                          , tn = st(Xt)
                                          , kt = Xt + K;
                                        g && (-1 === tn && X > Zt && (kt += c),
                                        1 === tn && X < Zt && (kt -= c),
                                        null !== j && kt < j && (X += n),
                                        null !== S && kt > S && (X -= n));
                                        var nn = X + _t[0] + _t[1]
                                          , wc = Math.max(X >= 0 && nn <= 1 ? 1 : nn < 0 || X > 1 ? 0 : X < 0 ? Math.min(1, (_t[0] + X) / _t[0]) : (1 - X) / _t[0], 0);
                                        return q += _t[0] + _t[1],
                                        {
                                            abs: kt,
                                            distance: i.rtl ? -1 * X + 1 - _t[0] : X,
                                            portion: wc,
                                            size: _t[0]
                                        }
                                    });
                                    return K = D(K),
                                    ct = at(K),
                                    {
                                        abs: D(K),
                                        length: o,
                                        max: P,
                                        maxIdx: I,
                                        min: J,
                                        minIdx: h,
                                        position: L,
                                        progress: g ? v / n : L / o,
                                        rel: ct,
                                        slides: At,
                                        slidesLength: n
                                    }
                                }
                            }();
                            return a.details = x,
                            e.emit("detailsChanged"),
                            x
                        }
                        return a = {
                            absToRel: at,
                            add: T,
                            details: null,
                            distToIdx: R,
                            idxToDist: U,
                            init: function(u) {
                                if (function() {
                                    if (r = ((i = e.options).trackConfig || []).map(function(M) {
                                        return [nt(M, "size", 1), nt(M, "spacing", 0), nt(M, "origin", 0)]
                                    }),
                                    c = r.length) {
                                        n = lt(r.reduce(function(M, A) {
                                            return M + A[0] + A[1]
                                        }, 0));
                                        var g, v = c - 1;
                                        o = lt(n + r[0][2] - r[v][0] - r[v][2] - r[v][1]),
                                        p = r.reduce(function(M, A) {
                                            if (!M)
                                                return [0];
                                            var q = r[M.length - 1]
                                              , H = M[M.length - 1] + (q[0] + q[2]) + q[1];
                                            return M[M.length - 1] > (H -= A[2]) && (H = M[M.length - 1]),
                                            H = lt(H),
                                            M.push(H),
                                            (!g || g < H) && (O = M.length - 1),
                                            g = H,
                                            M
                                        }, null),
                                        0 === o && (O = 0),
                                        p.push(lt(n))
                                    }
                                }(),
                                !c)
                                    return Z(!0);
                                var x;
                                (function() {
                                    var g = e.options.range
                                      , v = e.options.loop;
                                    j = h = v ? nt(v, "min", -1 / 0) : 0,
                                    S = I = v ? nt(v, "max", F) : O;
                                    var M = nt(g, "min", null)
                                      , A = nt(g, "max", null);
                                    M && (h = M),
                                    A && (I = A),
                                    J = h === -1 / 0 ? h : e.track.idxToDist(h || 0, !0, 0),
                                    P = I === F ? I : U(I, !0, 0),
                                    null === A && (S = I),
                                    nt(g, "align", !1) && I !== F && 0 === r[at(I)][2] && (P -= 1 - r[at(I)][0],
                                    I = R(P - L)),
                                    J = lt(J),
                                    P = lt(P)
                                }
                                )(),
                                x = u,
                                Number(x) === x ? T(W(D(u))) : Z()
                            },
                            to: rt,
                            velocity: function() {
                                var u = Y()
                                  , x = Q.reduce(function(g, v) {
                                    var M = v.distance
                                      , A = v.timestamp;
                                    return u - A > 200 || (st(M) !== st(g.distance) && g.distance && (g = {
                                        distance: 0,
                                        lastTimestamp: 0,
                                        time: 0
                                    }),
                                    g.time && (g.distance += M),
                                    g.lastTimestamp && (g.time += A - g.lastTimestamp),
                                    g.lastTimestamp = A),
                                    g
                                }, {
                                    distance: 0,
                                    lastTimestamp: 0,
                                    time: 0
                                });
                                return x.distance / x.time || 0
                            }
                        }
                    }(r),
                    r.animator = function en(e) {
                        var a, n, o, i, r, c;
                        function p(S) {
                            c || (c = S),
                            O(!0);
                            var J = S - c;
                            J > o && (J = o);
                            var P = i[n];
                            if (P[3] < J)
                                return n++,
                                p(S);
                            var Q = P[4]
                              , k = P[0]
                              , L = P[1] * (0,
                            P[5])(0 === Q ? 1 : (J - P[2]) / Q);
                            if (L && e.track.to(k + L),
                            J < o)
                                return I();
                            c = null,
                            O(!1),
                            h(null),
                            e.emit("animationEnded")
                        }
                        function O(S) {
                            a.active = S
                        }
                        function h(S) {
                            a.targetIdx = S
                        }
                        function I() {
                            r = window.requestAnimationFrame(p)
                        }
                        function j() {
                            window.cancelAnimationFrame(r),
                            O(!1),
                            h(null),
                            c && e.emit("animationStopped"),
                            c = null
                        }
                        return a = {
                            active: !1,
                            start: function(S) {
                                if (j(),
                                e.track.details) {
                                    var J = 0
                                      , P = e.track.details.position;
                                    n = 0,
                                    o = 0,
                                    i = S.map(function(F) {
                                        var Q, k = Number(P), L = null !== (Q = F.earlyExit) && void 0 !== Q ? Q : F.duration, T = F.easing, R = F.distance * T(L / F.duration) || 0;
                                        return P += R,
                                        J += R,
                                        [k, F.distance, o, o += L, F.duration, T]
                                    }),
                                    h(e.track.distToIdx(J)),
                                    I(),
                                    e.emit("animationStarted")
                                }
                            },
                            stop: j,
                            targetIdx: null
                        }
                    }(r),
                    i)
                        for (var p = 0, O = i; p < O.length; p++)
                            (0,
                            O[p])(r);
                    r.track.init(r.options.initial || 0),
                    r.emit("created")
                }(),
                r
            } catch (o) {
                console.error(o)
            }
            var o, i, r, c
        }
          , Ot = m(95698)
          , Pt = m(70262)
          , Ft = m(39646)
          , ut = m(18505)
          , It = m(63900)
          , dn = m(4128)
          , ht = m(4326)
          , gn = m(86716)
          , et = m(49319);
        function _n(e, a) {
            1 & e && (t.TgZ(0, "span"),
            t._uU(1, "Sponsor"),
            t.qZA())
        }
        function pn(e, a) {
            1 & e && (t.TgZ(0, "span"),
            t._uU(1, "DexTools Academy"),
            t.qZA())
        }
        function hn(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Oqu(n.featured.name)
            }
        }
        function mn(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Oqu(n.featured.description)
            }
        }
        function fn(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Oqu(n.featured.name)
            }
        }
        function Cn(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Oqu(n.featured.description)
            }
        }
        function un(e, a) {
            if (1 & e && (t.TgZ(0, "a", 6),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", null == n.featured.links ? null : n.featured.links.telegram, t.LSH),
                t.xp6(1),
                t.Oqu(null == n.featured.links ? null : n.featured.links.discord)
            }
        }
        function bn(e, a) {
            1 & e && (t.TgZ(0, "span"),
            t._uU(1, "Sponsor"),
            t.qZA())
        }
        function Mn(e, a) {
            1 & e && (t.TgZ(0, "span"),
            t._uU(1, "DexTools Academy"),
            t.qZA())
        }
        function On(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Oqu(n.featured.name)
            }
        }
        function Pn(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Oqu(n.featured.description)
            }
        }
        function xn(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Oqu(n.featured.name)
            }
        }
        function wn(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Oqu(n.featured.description)
            }
        }
        function kn(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Oqu(null == n.featured.links ? null : n.featured.links.discord)
            }
        }
        function vn(e, a) {
            if (1 & e && (t.TgZ(0, "div", 7),
            t.YNc(1, bn, 2, 0, "span", 2),
            t.YNc(2, Mn, 2, 0, "span", 2),
            t.YNc(3, On, 2, 1, "span", 2),
            t.YNc(4, Pn, 2, 1, "span", 2),
            t.qZA(),
            t.TgZ(5, "div", 8),
            t.YNc(6, xn, 2, 1, "span", 2),
            t.YNc(7, wn, 2, 1, "span", 2),
            t.YNc(8, kn, 2, 1, "span", 2),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", "home" === n.featured.product),
                t.xp6(1),
                t.Q6J("ngIf", "youtube" === n.featured.product),
                t.xp6(1),
                t.Q6J("ngIf", "news" === n.featured.product || "changelog" === n.featured.product),
                t.xp6(1),
                t.Q6J("ngIf", "token" === n.featured.product),
                t.xp6(2),
                t.Q6J("ngIf", "home" === n.featured.product),
                t.xp6(1),
                t.Q6J("ngIf", "news" === n.featured.product || "youtube" === n.featured.product || "changelog" === n.featured.product),
                t.xp6(1),
                t.Q6J("ngIf", "token" === n.featured.product)
            }
        }
        let yn = (()=>{
            class e {
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-carousel-name-description"]],
                inputs: {
                    featured: "featured"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 12,
                vars: 9,
                consts: [["placement", "bottom", "triggers", "click", 3, "ngbTooltip", "autoClose"], [1, "sponsor-title", "ellipsis", "mt-2"], [4, "ngIf"], [1, "sponsor-subtitle", "ellipsis"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], ["nameDescription", ""], ["target", "_blank", "rel", "noopener", 3, "href"], [1, "sponsor-title"], [1, "sponsor-subtitle"]],
                template: function(n, o) {
                    if (1 & n && (t.TgZ(0, "div", 0)(1, "div", 1),
                    t.YNc(2, _n, 2, 0, "span", 2),
                    t.YNc(3, pn, 2, 0, "span", 2),
                    t.YNc(4, hn, 2, 1, "span", 2),
                    t.YNc(5, mn, 2, 1, "span", 2),
                    t.qZA(),
                    t.TgZ(6, "div", 3),
                    t.YNc(7, fn, 2, 1, "span", 2),
                    t.YNc(8, Cn, 2, 1, "span", 2),
                    t.YNc(9, un, 2, 2, "a", 4),
                    t.qZA()(),
                    t.YNc(10, vn, 9, 7, "ng-template", null, 5, t.W1O)),
                    2 & n) {
                        const i = t.MAs(11);
                        t.Q6J("ngbTooltip", i)("autoClose", "outside"),
                        t.xp6(2),
                        t.Q6J("ngIf", "home" === o.featured.product),
                        t.xp6(1),
                        t.Q6J("ngIf", "youtube" === o.featured.product),
                        t.xp6(1),
                        t.Q6J("ngIf", "news" === o.featured.product || "changelog" === o.featured.product),
                        t.xp6(1),
                        t.Q6J("ngIf", "token" === o.featured.product),
                        t.xp6(2),
                        t.Q6J("ngIf", "home" === o.featured.product),
                        t.xp6(1),
                        t.Q6J("ngIf", "news" === o.featured.product || "youtube" === o.featured.product || "changelog" === o.featured.product),
                        t.xp6(1),
                        t.Q6J("ngIf", "token" === o.featured.product)
                    }
                },
                dependencies: [et._L, b.O5],
                styles: ["[_nghost-%COMP%]{margin-left:.3125rem;white-space:pre-wrap}.sponsor-title[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;color:#818ea3;text-transform:capitalize}body.dark-theme   [_nghost-%COMP%]   .sponsor-title[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .sponsor-title[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .sponsor-title[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .sponsor-title[_ngcontent-%COMP%]{color:#818ea3}.sponsor-subtitle[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:14px;line-height:20px;text-transform:capitalize}.sponsor-subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#00b8d8;text-decoration:none}.ellipsis[_ngcontent-%COMP%]{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;line-clamp:1;-webkit-line-clamp:1;-webkit-box-orient:vertical}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var Tn = m(5645);
        function Ln(e, a) {
            if (1 & e && (t.TgZ(0, "a", 7),
            t._UZ(1, "img", 8),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2);
                t.Q6J("href", null == n.featured.links ? null : n.featured.links.telegram, t.LSH),
                t.xp6(1),
                t.Q6J("src", n.featured.logo, t.LSH)
            }
        }
        function Zn(e, a) {
            if (1 & e && (t.TgZ(0, "div", 5),
            t.YNc(1, Ln, 2, 2, "a", 6),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !!n.featured.logo)
            }
        }
        function An(e, a) {
            if (1 & e && t._UZ(0, "img", 9),
            2 & e) {
                const n = t.oxw();
                t.Q6J("src", n.featured.logo, t.LSH)
            }
        }
        function Sn(e, a) {
            if (1 & e && t._UZ(0, "img", 10),
            2 & e) {
                const n = t.oxw();
                t.Q6J("src", n.featured.bannerImage, t.LSH)
            }
        }
        let Fn = (()=>{
            class e {
                constructor(n, o) {
                    this._modalService = n,
                    this._appUpdateService = o
                }
                openChangelogModal(n) {
                    n.preventDefault(),
                    this._modalService.open(Tn.n, {
                        centered: !0,
                        scrollable: !0
                    }).componentInstance.appVersion = this._appUpdateService.latestAppVersion
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(et.FF),t.Y36(w.Qe))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-home-news"]],
                inputs: {
                    featured: "featured"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 5,
                vars: 4,
                consts: [[1, "update-banner__container"], ["class", "token-container", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 3, "href", "click"], ["alt", "Changelog", "class", "banner-image", 3, "src", 4, "ngIf"], ["alt", "Banner background image", "class", "banner-image", 3, "src", 4, "ngIf"], [1, "token-container"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 3, "href"], ["alt", "reviewer image", 1, "group-image", 3, "src"], ["alt", "Changelog", 1, "banner-image", 3, "src"], ["alt", "Banner background image", 1, "banner-image", 3, "src"]],
                template: function(n, o) {
                    if (1 & n && (t.TgZ(0, "div", 0),
                    t.YNc(1, Zn, 2, 1, "div", 1),
                    t.TgZ(2, "a", 2),
                    t.NdJ("click", function(r) {
                        return o.featured.targetLink ? null : o.openChangelogModal(r)
                    }),
                    t.YNc(3, An, 1, 1, "img", 3),
                    t.YNc(4, Sn, 1, 1, "img", 4),
                    t.qZA()()),
                    2 & n) {
                        let i;
                        t.xp6(1),
                        t.Q6J("ngIf", "token" === o.featured.product),
                        t.xp6(1),
                        t.Q6J("href", null !== (i = o.featured.targetLink) && void 0 !== i ? i : "javascript:", t.LSH),
                        t.xp6(1),
                        t.Q6J("ngIf", "changelog" === o.featured.product),
                        t.xp6(1),
                        t.Q6J("ngIf", "changelog" !== o.featured.product)
                    }
                },
                dependencies: [b.O5],
                styles: [".update-banner__container[_ngcontent-%COMP%]{background-color:#f4f5f6;border-radius:.9375rem;cursor:pointer;height:9.6875rem;width:18.0625rem;position:relative}body.dark-theme   [_nghost-%COMP%]   .update-banner__container[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .update-banner__container[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .update-banner__container[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .update-banner__container[_ngcontent-%COMP%]{background-color:#f4f5f6}.update-banner__container[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%]{border-radius:.9375rem;height:100%;width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.update-banner__container[_ngcontent-%COMP%]   .token-container[_ngcontent-%COMP%]{position:relative;width:100%;z-index:2}.update-banner__container[_ngcontent-%COMP%]   .token-container[_ngcontent-%COMP%]   .group-image[_ngcontent-%COMP%]{border-radius:.9375rem;height:30px;margin-right:.375rem;margin-top:.375rem;position:absolute;right:0;width:30px}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var B = m(92498)
          , G = m(92216);
        function In(e, a) {
            if (1 & e && (t._UZ(0, "img", 21),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw(2);
                t.Gre("logo ", n.sponsorClass || "", ""),
                t.hYB("alt", "", n.token, " ", t.lcZ(1, 6, "sponsor.sponsor_logo_alt"), ""),
                t.Q6J("src", n.logo, t.LSH)
            }
        }
        function Jn(e, a) {
            if (1 & e && (t.TgZ(0, "div", 19),
            t.YNc(1, In, 2, 8, "img", 20),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !!n.logo)
            }
        }
        const yt = function(e) {
            return {
                alive: e
            }
        };
        function Nn(e, a) {
            if (1 & e && (t.TgZ(0, "span", 22)(1, "span", 23),
            t._uU(2),
            t.qZA()()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("ngClass", t.VKq(2, yt, n.buttonText)),
                t.xp6(2),
                t.Oqu(n.buttonText ? n.buttonText : "Live Presale")
            }
        }
        function Dn(e, a) {
            if (1 & e && (t.TgZ(0, "a", 24)(1, "span", 23),
            t._uU(2),
            t.qZA()()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", n.completePairExplorerLink, t.LSH)("ngClass", t.VKq(3, yt, n.buttonText)),
                t.xp6(2),
                t.Oqu(n.buttonText ? n.buttonText : "Live Presale")
            }
        }
        function Qn(e, a) {
            if (1 & e && (t.TgZ(0, "a", 24)(1, "span", 23),
            t._uU(2),
            t.qZA()()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", n.targetLink, t.LSH)("ngClass", t.VKq(3, yt, n.buttonText)),
                t.xp6(2),
                t.Oqu(n.buttonText ? n.buttonText : "Live Presale")
            }
        }
        function En(e, a) {
            if (1 & e && (t.TgZ(0, "a", 24)(1, "span", 23),
            t._uU(2),
            t.qZA()()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", n.targetLink, t.LSH)("ngClass", t.VKq(3, yt, n.buttonText)),
                t.xp6(2),
                t.Oqu(n.buttonText ? n.buttonText : "Live Presale")
            }
        }
        function Un(e, a) {
            if (1 & e && (t.TgZ(0, "a", 25),
            t._UZ(1, "fa-icon", 26),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", n.web, t.LSH),
                t.uIk("data-sponsor-web", n.token)
            }
        }
        const qn = function() {
            return ["fab", "twitter"]
        };
        function Yn(e, a) {
            if (1 & e && (t.TgZ(0, "a", 27),
            t._UZ(1, "fa-icon", 28),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", n.twitter, t.LSH),
                t.uIk("data-sponsor-twitter", n.token),
                t.xp6(1),
                t.Q6J("icon", t.DdM(3, qn))
            }
        }
        const Hn = function() {
            return ["fab", "telegram"]
        };
        function zn(e, a) {
            if (1 & e && (t.TgZ(0, "a", 29),
            t._UZ(1, "fa-icon", 28),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", n.telegram, t.LSH),
                t.uIk("data-sponsor-telegram", n.token),
                t.xp6(1),
                t.Q6J("icon", t.DdM(3, Hn))
            }
        }
        const Rn = function() {
            return ["fab", "discord"]
        };
        function Vn(e, a) {
            if (1 & e && (t.TgZ(0, "a", 30),
            t._UZ(1, "fa-icon", 31),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", n.discord, t.LSH),
                t.uIk("data-sponsor-discord", n.token),
                t.xp6(1),
                t.Q6J("icon", t.DdM(3, Rn))
            }
        }
        const Gn = function(e) {
            return {
                token: e
            }
        };
        function jn(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, "sponsor.chart", t.VKq(4, Gn, n.token)))
            }
        }
        function Kn(e, a) {
            if (1 & e && (t.TgZ(0, "a", 32),
            t.YNc(1, jn, 3, 6, "span", 33),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", n.completePairExplorerLink, t.LSH),
                t.uIk("data-sponsor-pair-explorer", n.token),
                t.xp6(1),
                t.Q6J("ngIf", n.buttonText)
            }
        }
        const $n = function() {
            return ["far", "external-link"]
        };
        function Bn(e, a) {
            if (1 & e && (t.TgZ(0, "a", 34),
            t._uU(1),
            t.ALo(2, "translate"),
            t._UZ(3, "fa-icon", 35),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", n.web, t.LSH),
                t.uIk("data-sponsor-info", n.token),
                t.xp6(1),
                t.hij(" ", t.lcZ(2, 4, "sponsor.more_details"), " "),
                t.xp6(2),
                t.Q6J("icon", t.DdM(6, $n))
            }
        }
        const Wn = function(e) {
            return {
                "w-100": e
            }
        }
          , Xn = function(e) {
            return {
                color: e
            }
        }
          , te = function(e) {
            return {
                "name-inactive": e
            }
        };
        let ne = (()=>{
            class e {
                constructor(n) {
                    this._environment = n,
                    this.logo = "",
                    this.color = "",
                    this.token = "",
                    this.name = "",
                    this.pairExplorerAddress = "",
                    this.targetLink = "",
                    this.web = "",
                    this.twitter = "",
                    this.telegram = "",
                    this.discord = "",
                    this.description = "",
                    this.sponsorClass = "",
                    this.active = !0,
                    this.chain = s.qop.Ethereum,
                    this.Chain = s.qop,
                    this.completePairExplorerLink = "",
                    this.buttonText = "",
                    this.context = this._environment.app_scope
                }
                ngOnInit() {
                    this.pairExplorerAddress && (this.completePairExplorerLink = d.V8.normalizeUrl(this.pairExplorerAddress)),
                    this.targetLink && (this.targetLink = d.V8.normalizeUrl(this.targetLink)),
                    this.web && (this.web = d.V8.normalizeUrl(this.web)),
                    this.twitter && (this.twitter = d.V8.normalizeUrl(this.twitter)),
                    this.telegram && (this.telegram = d.V8.normalizeUrl(this.telegram)),
                    this.discord && (this.discord.includes("discord") ? this.discord = d.V8.normalizeUrl(this.discord) : this.buttonText = this.discord)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(w.qA))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-sponsor-new"]],
                inputs: {
                    logo: "logo",
                    color: "color",
                    token: "token",
                    name: "name",
                    pairExplorerAddress: "pairExplorerAddress",
                    targetLink: "targetLink",
                    web: "web",
                    twitter: "twitter",
                    telegram: "telegram",
                    discord: "discord",
                    description: "description",
                    sponsorClass: "sponsorClass",
                    active: "active",
                    chain: "chain"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 25,
                vars: 25,
                consts: [[1, "sponsor-carrousel"], [1, "sponsor-name-social"], ["class", "image-container", 4, "ngIf"], [1, "container-info", 3, "ngClass"], [1, "sponsor-info", "mb-2", 3, "ngStyle"], [1, "align-middle", "token-name", "me-2", 3, "ngClass"], ["class", "badge bg-danger ms-1 align-middle link-presale", 3, "ngClass", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "class", "badge bg-danger ms-1 align-middle link-presale", 3, "href", "ngClass", 4, "ngIf"], [1, "extra-info"], [1, "me-2"], [1, "d-inline-block", "links"], ["target", "_blank", "rel", "noopener", "class", "link-sponsor-web", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "class", "link-sponsor-twitter", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "class", "link-sponsor-telegram", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "class", "link-sponsor-discord", 3, "href", 4, "ngIf"], [1, "sponsor-description"], [1, "sp-link"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], ["placement", "auto", "ngbTooltip", "Web", "target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], [1, "image-container"], ["loading", "lazy", 3, "src", "alt", "class", 4, "ngIf"], ["loading", "lazy", 3, "src", "alt"], [1, "badge", "bg-danger", "ms-1", "align-middle", "link-presale", 3, "ngClass"], [1, "ms-2", "text-presale"], ["target", "_blank", "rel", "noopener", 1, "badge", "bg-danger", "ms-1", "align-middle", "link-presale", 3, "href", "ngClass"], ["target", "_blank", "rel", "noopener", 1, "link-sponsor-web", 3, "href"], ["icon", "home", 1, "me-2"], ["target", "_blank", "rel", "noopener", 1, "link-sponsor-twitter", 3, "href"], [1, "me-2", 3, "icon"], ["target", "_blank", "rel", "noopener", 1, "link-sponsor-telegram", 3, "href"], ["target", "_blank", "rel", "noopener", 1, "link-sponsor-discord", 3, "href"], [3, "icon"], ["target", "_blank", "rel", "noopener", 3, "href"], [4, "ngIf"], ["placement", "auto", "ngbTooltip", "Web", "target", "_blank", "rel", "noopener", 3, "href"], [1, "external-icon", 3, "icon"]],
                template: function(n, o) {
                    1 & n && (t.TgZ(0, "div", 0)(1, "div", 1),
                    t.YNc(2, Jn, 2, 1, "div", 2),
                    t.TgZ(3, "div", 3)(4, "h4", 4)(5, "span", 5),
                    t._uU(6),
                    t.qZA(),
                    t.YNc(7, Nn, 3, 4, "span", 6),
                    t.YNc(8, Dn, 3, 5, "a", 7),
                    t.YNc(9, Qn, 3, 5, "a", 7),
                    t.YNc(10, En, 3, 5, "a", 7),
                    t.qZA(),
                    t.TgZ(11, "h5", 8)(12, "span", 9),
                    t._uU(13),
                    t.ALo(14, "appSafe"),
                    t.qZA(),
                    t.TgZ(15, "span", 10),
                    t.YNc(16, Un, 2, 2, "a", 11),
                    t.YNc(17, Yn, 2, 4, "a", 12),
                    t.YNc(18, zn, 2, 4, "a", 13),
                    t.YNc(19, Vn, 2, 4, "a", 14),
                    t.qZA()()()(),
                    t.TgZ(20, "div", 15),
                    t._uU(21),
                    t.qZA(),
                    t.TgZ(22, "div", 16),
                    t.YNc(23, Kn, 2, 3, "a", 17),
                    t.YNc(24, Bn, 4, 7, "a", 18),
                    t.qZA()()),
                    2 & n && (t.xp6(2),
                    t.Q6J("ngIf", !!o.logo),
                    t.xp6(1),
                    t.Q6J("ngClass", t.VKq(19, Wn, !o.logo)),
                    t.xp6(1),
                    t.Q6J("ngStyle", t.VKq(21, Xn, o.color)),
                    t.xp6(1),
                    t.Q6J("ngClass", t.VKq(23, te, !o.active)),
                    t.xp6(1),
                    t.Oqu(o.token),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.completePairExplorerLink && !o.targetLink),
                    t.xp6(1),
                    t.Q6J("ngIf", o.completePairExplorerLink && !o.targetLink),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.completePairExplorerLink && o.targetLink),
                    t.xp6(1),
                    t.Q6J("ngIf", o.completePairExplorerLink && o.targetLink),
                    t.xp6(3),
                    t.Oqu(t.lcZ(14, 17, o.name)),
                    t.xp6(3),
                    t.Q6J("ngIf", o.web),
                    t.xp6(1),
                    t.Q6J("ngIf", o.twitter),
                    t.xp6(1),
                    t.Q6J("ngIf", o.telegram),
                    t.xp6(1),
                    t.Q6J("ngIf", o.discord && o.discord.includes("discord")),
                    t.xp6(2),
                    t.hij(" ", o.description, " "),
                    t.xp6(2),
                    t.Q6J("ngIf", o.completePairExplorerLink),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.completePairExplorerLink))
                },
                dependencies: [b.O5, b.mk, b.PC, G.uH, G.BN, et._L, B.yl, f.aw, f.X$],
                styles: ['[_nghost-%COMP%]{width:100%;padding:0;position:relative}.week-token-container[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;z-index:1}.week-token-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.sponsor-carrousel[_ngcontent-%COMP%]{padding:1.25rem;height:9.6875rem;width:18.0625rem;position:relative;z-index:0}.sponsor-carrousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:2.3125rem;width:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.sponsor-carrousel[_ngcontent-%COMP%] > .logo[_ngcontent-%COMP%]{margin-right:20px}.sponsor-carrousel[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{position:relative;width:2.3125rem;height:2.3125rem;border-radius:3.125rem;margin-right:.625rem;margin-top:.3125rem;overflow:hidden}.sponsor-carrousel[_ngcontent-%COMP%]   .sponsor-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer!important}.sponsor-carrousel[_ngcontent-%COMP%]   .sponsor-info[_ngcontent-%COMP%]   .link-presale[_ngcontent-%COMP%]{position:absolute;top:.625rem;right:.625rem;font-size:.625rem;padding:.125rem .5rem;height:auto;background-color:#818ea3;cursor:default}.sponsor-carrousel[_ngcontent-%COMP%]   .sponsor-info[_ngcontent-%COMP%]   .link-presale.alive[_ngcontent-%COMP%]{background-color:#17c671!important}.sponsor-carrousel[_ngcontent-%COMP%]   .sponsor-info[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]{font-size:16px;line-height:auto!important}.sponsor-carrousel[_ngcontent-%COMP%]   .sponsor-name-social[_ngcontent-%COMP%]{display:flex;align-items:center}.sponsor-carrousel[_ngcontent-%COMP%]   .extra-info[_ngcontent-%COMP%]{line-height:1.125rem}.sponsor-carrousel[_ngcontent-%COMP%]   .sponsor-description[_ngcontent-%COMP%]{color:#818ea3;font-weight:400;margin-top:.625rem;font-size:12px;line-height:1.125rem;height:2.5rem;display:flex;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;position:relative}.sponsor-carrousel[_ngcontent-%COMP%]   .sponsor-description[_ngcontent-%COMP%]:after{content:" ";position:absolute;inset:0;background:linear-gradient(0,#f4f5f6 0,rgba(244,245,246,.3) 78%)}.sponsor-carrousel[_ngcontent-%COMP%]   .sp-link[_ngcontent-%COMP%]{margin-top:.625rem;font-size:13px}.sponsor-carrousel[_ngcontent-%COMP%]   .sp-link[_ngcontent-%COMP%]   .external-icon[_ngcontent-%COMP%]{font-size:.6875rem}.sponsor-carrousel[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .sp-link[_ngcontent-%COMP%]{margin-top:0;display:block}@media (min-width: 1024px){.sponsor-carrousel[_ngcontent-%COMP%]   .container-info[_ngcontent-%COMP%]   .sp-link[_ngcontent-%COMP%]{display:none}}.extra-padding[_ngcontent-%COMP%]{padding-top:1.875rem}.token-container[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;line-height:20px;width:100%;z-index:2}.token-container[_ngcontent-%COMP%]   .token-title-container[_ngcontent-%COMP%]{text-decoration:none;width:85%}.token-container[_ngcontent-%COMP%]   .token-title-container[_ngcontent-%COMP%]   .token-title[_ngcontent-%COMP%]{color:#00b8d8;margin:.3125rem 0 0 .5rem}.token-container[_ngcontent-%COMP%]   .token-title-container[_ngcontent-%COMP%]   .token-subtitle[_ngcontent-%COMP%]{color:#818ea3;float:right;margin-right:.5rem}.token-container[_ngcontent-%COMP%]   .extra-info[_ngcontent-%COMP%]{align-items:flex-end;width:15%}.token-container[_ngcontent-%COMP%]   .extra-info[_ngcontent-%COMP%]   .reviewer-image[_ngcontent-%COMP%]{height:1.875rem;width:1.875rem}body.dark-theme   [_nghost-%COMP%]     .sponsor-carrousel .sponsor-description{color:#fff}body.dark-theme   [_nghost-%COMP%]     .sponsor-carrousel .sponsor-description:after{background:linear-gradient(0,#142028 0,rgba(20,32,40,.3) 78%)}body.dark-theme   [_nghost-%COMP%]     .sponsor-carrousel .sponsor-info .link-presale{background-color:#23323c!important}'],
                changeDetection: 0
            }),
            e
        }
        )();
        var ee = m(30501)
          , oe = m(11481);
        const ae = ["sliderRef"]
          , qt = function() {
            return ["far", "angle-right"]
        };
        function ie(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 9),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(2);
                    return i.slider.next(),
                    t.KtG(i.setFirstLaunch(!1))
                }),
                t._UZ(1, "fa-icon", 10),
                t.qZA()
            }
            2 & e && (t.xp6(1),
            t.Q6J("icon", t.DdM(1, qt)))
        }
        function re(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 11),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(2);
                    return t.KtG(i.slider.prev())
                }),
                t._UZ(1, "fa-icon", 10),
                t.qZA()
            }
            2 & e && (t.xp6(1),
            t.Q6J("icon", t.DdM(1, qt)))
        }
        const ce = function() {
            return ["fal", "sparkles"]
        };
        function le(e, a) {
            1 & e && (t.TgZ(0, "div", 18)(1, "span", 19),
            t._UZ(2, "fa-icon", 20),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA()()),
            2 & e && (t.xp6(2),
            t.Q6J("icon", t.DdM(4, ce)),
            t.xp6(1),
            t.hij(" ", t.lcZ(4, 2, "pools_creator.new"), ""))
        }
        function se(e, a) {
            if (1 & e && t._UZ(0, "app-sponsor-new", 21),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("logo", n.logo)("color", n.color)("token", n.symbol)("name", null == n.name ? null : n.name.toUpperCase())("pairExplorerAddress", n.pair)("targetLink", n.targetLink)("web", null == n.links ? null : n.links.web)("twitter", null == n.links ? null : n.links.twitter)("telegram", null == n.links ? null : n.links.telegram)("discord", null == n.links ? null : n.links.discord)("description", n.description)("active", !n.disabled)
            }
        }
        function de(e, a) {
            if (1 & e && t._UZ(0, "app-youtube-embedded", 22),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("link", n.targetLink)("image", n.bannerImage)("height", "155")
            }
        }
        function ge(e, a) {
            if (1 & e && t._UZ(0, "app-home-news", 17),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("featured", n)
            }
        }
        function _e(e, a) {
            if (1 & e && (t.ynx(0),
            t.TgZ(1, "div", 12),
            t.YNc(2, le, 5, 5, "div", 13),
            t.YNc(3, se, 1, 12, "app-sponsor-new", 14),
            t.YNc(4, de, 1, 3, "app-youtube-embedded", 15),
            t.YNc(5, ge, 1, 1, "app-home-news", 16),
            t._UZ(6, "app-carousel-name-description", 17),
            t.qZA(),
            t.BQk()),
            2 & e) {
                const n = a.$implicit
                  , o = t.oxw(2);
                t.xp6(2),
                t.Q6J("ngIf", o.checkDate(n.startDate)),
                t.xp6(1),
                t.Q6J("ngIf", "home" === n.product),
                t.xp6(1),
                t.Q6J("ngIf", "youtube" === n.product),
                t.xp6(1),
                t.Q6J("ngIf", "news" === n.product || "changelog" === n.product || "token" === n.product),
                t.xp6(1),
                t.Q6J("featured", n)
            }
        }
        const pe = function(e, a) {
            return {
                left: e,
                right: a
            }
        }
          , he = function(e) {
            return {
                "disable-slider": e
            }
        };
        function me(e, a) {
            if (1 & e && (t.TgZ(0, "div", 1)(1, "div", 2),
            t.YNc(2, ie, 2, 2, "div", 3),
            t.YNc(3, re, 2, 2, "div", 4),
            t.TgZ(4, "div", 5)(5, "div", 6, 7),
            t.YNc(7, _e, 7, 5, "ng-container", 8),
            t.qZA()()()()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("ngClass", t.WLB(6, pe, !n.firstLaunch && n.slider, n.slider)),
                t.xp6(1),
                t.Q6J("ngIf", n.slider),
                t.xp6(1),
                t.Q6J("ngIf", n.slider && !n.firstLaunch),
                t.xp6(2),
                t.Q6J("ngClass", t.VKq(9, he, !n.slider)),
                t.xp6(2),
                t.Q6J("ngForOf", n.featuredSponsors)("ngForTrackBy", n.trackByFeaturedSponsor)
            }
        }
        let ue = (()=>{
            class e extends d.K9 {
                onResize() {
                    this._recalculateSlider(),
                    this.screenWidth = window.innerWidth
                }
                constructor(n, o, i, r) {
                    super(),
                    this._cdRef = n,
                    this._sponsorsService = o,
                    this._appUpdateService = i,
                    this._sanitizer = r,
                    this.featuredSponsors = [],
                    this.firstLaunch = !0,
                    this.currentSlide = 0,
                    this.slider = null,
                    this.newsActive = !1,
                    this.screenWidth = window.innerWidth
                }
                onDestroy() {
                    this.slider && this.slider.destroy(),
                    this._mutationObs && this._mutationObs.disconnect()
                }
                ngOnInit() {
                    this._getVideoAndSponsors().pipe((0,
                    d.sL)(this)).subscribe(()=>{
                        this._recalculateSlider()
                    }
                    ),
                    this._appUpdateService.updateAvailable$.pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        const o = this.featuredSponsors.findIndex(i=>"changelog" === i.product);
                        -1 !== o && (this.featuredSponsors[o] = {
                            ...this.featuredSponsors[o],
                            description: `Latest changes in version ${this._appUpdateService.latestAppVersion}`,
                            startDate: new Date(Date.now() - 5 * d.VK),
                            endDate: new Date(Date.now() + d.HR)
                        },
                        this._cdRef.detectChanges())
                    }
                    )
                }
                trackByFeaturedSponsor(n, o) {
                    return o._id
                }
                checkDate(n, o=!1) {
                    return ((new Date).getTime() - new Date(n).getTime()) / d.HR < (o ? 3 : 2)
                }
                setFirstLaunch(n) {
                    this.firstLaunch = n,
                    this._cdRef.detectChanges()
                }
                _loadSlider() {
                    this.slider = new sn(this.sliderRef.nativeElement,{
                        loop: !0,
                        slides: {
                            perView: "auto",
                            spacing: 10
                        },
                        mode: "free",
                        initial: this.currentSlide,
                        slideChanged: n=>{
                            this.currentSlide = n.track.details.rel
                        }
                    }),
                    this.slider.on("destroyed", ()=>{
                        this.slider = null,
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._cdRef.detectChanges()
                }
                _recalculateSlider() {
                    const n = document.querySelectorAll(".keen-slider__slide") ?? [];
                    let o = 0;
                    n.forEach(r=>{
                        o += r.offsetWidth
                    }
                    );
                    const i = document.querySelector(".navigation-wrapper")?.offsetWidth ?? null;
                    null != o && null != i && o > i ? this.slider || this._loadSlider() : this.slider && this.slider.destroy(),
                    this._cdRef.detectChanges()
                }
                _getVideoAndSponsors() {
                    return this._sponsorsService.getBanners(!1, !1, "youtube,home,news,token").pipe((0,
                    d.sL)(this), (0,
                    Ot.q)(1), (0,
                    Pt.K)(()=>(0,
                    Ft.of)([])), (0,
                    ut.b)(n=>{
                        this.newsActive = !0,
                        this.featuredSponsors = this._sponsorsService.fillSocialLinks([...n]).sort((o,i)=>o.order && i.order ? o.order - i.order : 0),
                        this.featuredSponsors.length && (this.featuredSponsors = this.featuredSponsors.map(o=>this._sponsorsService.replaceSponsorSuffix(o))),
                        this._appUpdateService.loadChangelog(this._appUpdateService.latestAppVersion).subscribe(o=>{
                            this.checkDate(o[0].date, !0) ? this.featuredSponsors.unshift(this._fillChangelogObject(o)) : this.featuredSponsors.push(this._fillChangelogObject(o))
                        }
                        )
                    }
                    ), (0,
                    It.w)(()=>{
                        const n = this.featuredSponsors.filter(o=>!!o.fileExt && "youtube" !== o.product || "youtube" === o.product).map(o=>this._sponsorsService.fetchCarouselBannerImage(o).pipe((0,
                        ut.b)(i=>{
                            "string" == typeof i && (o.bannerImage = this._sanitizer.bypassSecurityTrustUrl(i))
                        }
                        )));
                        return (0,
                        dn.D)(n).pipe((0,
                        ut.b)(()=>this._cdRef.detectChanges()))
                    }
                    ), (0,
                    ht.g)(750))
                }
                _fillChangelogObject(n) {
                    return {
                        product: "changelog",
                        name: "DEXTools latest release",
                        description: `Latest changes in version ${this._appUpdateService.latestAppVersion}`,
                        chain: [this.chain],
                        socialLinks: [{
                            name: "",
                            link: ""
                        }],
                        startDate: new Date(n[0].date),
                        endDate: new Date,
                        fileExt: gn.T.PNG,
                        disabled: !1,
                        logo: "./assets/img/latest-release-v2.png"
                    }
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(t.sBO),t.Y36(ee.D),t.Y36(w.Qe),t.Y36(oe.H7))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-dashboard-carousel"]],
                viewQuery: function(n, o) {
                    if (1 & n && t.Gf(ae, 5),
                    2 & n) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.sliderRef = i.first)
                    }
                },
                hostBindings: function(n, o) {
                    1 & n && t.NdJ("resize", function() {
                        return o.onResize()
                    }, !1, t.Jf7)
                },
                inputs: {
                    chain: "chain"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 1,
                vars: 1,
                consts: [["class", "row row-carousel", 4, "ngIf"], [1, "row", "row-carousel"], [1, "col-12", "col-home", "carousel-container", "right", 3, "ngClass"], ["class", "arrow-icon right", 3, "click", 4, "ngIf"], ["class", "arrow-icon left", 3, "click", 4, "ngIf"], [1, "navigation-wrapper"], [1, "keen-slider", 3, "ngClass"], ["sliderRef", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "arrow-icon", "right", 3, "click"], ["size", "2x", 3, "icon"], [1, "arrow-icon", "left", 3, "click"], [1, "keen-slider__slide"], ["class", "position-relative bg-container", 4, "ngIf"], [3, "logo", "color", "token", "name", "pairExplorerAddress", "targetLink", "web", "twitter", "telegram", "discord", "description", "active", 4, "ngIf"], [3, "link", "image", "height", 4, "ngIf"], [3, "featured", 4, "ngIf"], [3, "featured"], [1, "position-relative", "bg-container"], [1, "badge", "bg-info", "new-tag"], [1, "me-1", 3, "icon"], [3, "logo", "color", "token", "name", "pairExplorerAddress", "targetLink", "web", "twitter", "telegram", "discord", "description", "active"], [3, "link", "image", "height"]],
                template: function(n, o) {
                    1 & n && t.YNc(0, me, 8, 11, "div", 0),
                    2 & n && t.Q6J("ngIf", o.featuredSponsors.length > 0 || o.newsActive)
                },
                dependencies: [b.O5, b.mk, G.uH, G.BN, b.ax, ne, _.yk, Fn, yn, f.aw, f.X$],
                styles: ['.keen-slider[_ngcontent-%COMP%]:not([data-keen-slider-disabled]){-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;align-content:flex-start;display:flex;overflow:hidden;position:relative;touch-action:pan-y;-webkit-user-select:none;user-select:none;-khtml-user-select:none;width:100%}.keen-slider[_ngcontent-%COMP%]:not([data-keen-slider-disabled])   .keen-slider__slide[_ngcontent-%COMP%]{min-height:100%;overflow:hidden;position:relative;width:100%}.keen-slider[_ngcontent-%COMP%]:not([data-keen-slider-disabled])[data-keen-slider-reverse]{flex-direction:row-reverse}.keen-slider[_ngcontent-%COMP%]:not([data-keen-slider-disabled])[data-keen-slider-v]{flex-wrap:wrap}body   [_nghost-%COMP%]     app-sponsor-new .logo{border-radius:3.125rem!important}body   [_nghost-%COMP%]     app-sponsor-new .sponsor-info{letter-spacing:unset!important;line-height:auto;margin-bottom:0!important}body   [_nghost-%COMP%]     app-sponsor-new .sponsor-info .fa.fa-circle{font-size:.5rem}body   [_nghost-%COMP%]     app-sponsor-new .sponsor-info .token-name{font-size:1.375rem;font-weight:500}body   [_nghost-%COMP%]     app-sponsor-new .sponsor-info .badge{padding:.3125rem}body   [_nghost-%COMP%]     app-sponsor-new .sponsor-info .text-presale{margin-left:.25rem!important}body   [_nghost-%COMP%]     app-sponsor-new .custom-button{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px}body   [_nghost-%COMP%]     app-sponsor-new .extra-info{font-size:12px!important;margin:0!important;font-weight:400}body   [_nghost-%COMP%]     app-sponsor-new .extra-info .links a{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   body[_ngcontent-%COMP%]   [_nghost-%COMP%]     app-sponsor-new .extra-info .links a{color:#818ea3}body.dark-theme   body   [_nghost-%COMP%]     app-sponsor-new .extra-info .links a{color:#818ea3}body.light   [_nghost-%COMP%]   body[_ngcontent-%COMP%]   [_nghost-%COMP%]     app-sponsor-new .extra-info .links a{color:#818ea3}body.light   body   [_nghost-%COMP%]     app-sponsor-new .extra-info .links a{color:#818ea3}body   [_nghost-%COMP%]     app-sponsor-new .extra-info .links a:hover{color:#3d5170!important}body   [_nghost-%COMP%]     app-sponsor-new p{font-size:13px!important;color:#818ea3}body   [_nghost-%COMP%]     app-youtube-embedded img{border-radius:15px}body.dark-theme   [_nghost-%COMP%]     app-sponsor-new .extra-info .links a{color:#fff}body.dark-theme   [_nghost-%COMP%]     app-sponsor-new .extra-info .links a:hover{color:#fff!important}.box-home[_ngcontent-%COMP%]{background-color:#f4f5f6;border-radius:1rem;margin-bottom:.625rem}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:none;background:none}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:24px;line-height:32px;letter-spacing:0;display:flex;align-items:center}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .fa.fa-circle[_ngcontent-%COMP%], .box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .fa.fa-circle-thin[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:20px;line-height:26px}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span.bold-text[_ngcontent-%COMP%]{font-weight:500!important}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   img.chain-logo[_ngcontent-%COMP%]{width:2.125rem;height:2.125rem;position:relative;left:0;top:0;border-radius:unset;background-color:transparent!important;padding:0;box-shadow:none!important;border:none!important}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   img.chain-logo.fantom[_ngcontent-%COMP%]{border-radius:1.25rem}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   .button-help[_ngcontent-%COMP%]{border:none!important;padding:0!important;background-color:#e2e7ec;border-radius:3.125rem;height:1.875rem;width:1.875rem;display:flex;align-items:center;justify-content:center;color:#3d5170;font-size:16px}.box-home[_ngcontent-%COMP%]   .box-home-body[_ngcontent-%COMP%]{background-color:transparent}.row-carousel[_ngcontent-%COMP%]{margin-right:-1.25rem;padding-left:.625rem}@media (max-width: 1023px){.row-carousel[_ngcontent-%COMP%]{margin-right:-1.125rem}.row-carousel[_ngcontent-%COMP%]   .col-home[_ngcontent-%COMP%]{padding-left:.3125rem;padding-right:0}}@media (max-width: 599px){.row-carousel[_ngcontent-%COMP%]{padding-left:0;margin-right:-.625rem!important}}.carousel-container[_ngcontent-%COMP%]{margin-top:1.25rem;position:relative}.carousel-container[_ngcontent-%COMP%]   .keen-slider__slide[_ngcontent-%COMP%]{margin-right:.625rem}.carousel-container[_ngcontent-%COMP%]   .keen-slider[_ngcontent-%COMP%]{height:12.5rem}.carousel-container[_ngcontent-%COMP%]   .keen-slider.disable-slider[_ngcontent-%COMP%]{justify-content:center;align-content:center}.carousel-container.right[_ngcontent-%COMP%]   .keen-slider__slide[_ngcontent-%COMP%]{margin-right:auto}.carousel-container.right[_ngcontent-%COMP%]:after{content:" ";z-index:1;background:linear-gradient(270deg,#f4f5f6 12.86%,rgba(244,245,246,0) 87.14%);position:absolute;right:0;top:0;width:9.6875rem;height:9.6875rem}@media (max-width: 1023px){.carousel-container.right[_ngcontent-%COMP%]:after{width:6.25rem}}.carousel-container.left[_ngcontent-%COMP%]:before{content:" ";z-index:1;background:linear-gradient(90deg,#f4f5f6 12.86%,rgba(244,245,246,0) 87.14%);position:absolute;left:0;top:0;width:9.6875rem;height:9.6875rem}@media (max-width: 1023px){.carousel-container.left[_ngcontent-%COMP%]:before{width:6.25rem}}.carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{background-color:#f4f5f6;color:#818ea3;display:flex;align-items:center;justify-content:center;font-size:.625rem;width:2.125rem;height:2.125rem;border-radius:3.125rem;z-index:2;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{color:#818ea3}.carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]:hover{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]:hover{background-color:#23323c}body.light   [_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}.carousel-container[_ngcontent-%COMP%]   .arrow-icon.right[_ngcontent-%COMP%]{position:absolute;top:50%;right:.625rem;transform:translateY(-50%)}.carousel-container[_ngcontent-%COMP%]   .arrow-icon.left[_ngcontent-%COMP%]{position:absolute;top:50%;left:.125rem;transform:translateY(-50%) rotate(180deg)}.keen-slider[_ngcontent-%COMP%]{height:12.5rem}.keen-slider[_ngcontent-%COMP%]   .keen-slider__slide[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:hidden;align-items:flex-start;height:12.5rem;width:18.0625rem;max-width:18.0625rem;min-width:18.0625rem}@media (max-width: 1023px){.keen-slider[_ngcontent-%COMP%]   .keen-slider__slide[_ngcontent-%COMP%]{width:17.625rem;max-width:17.625rem;min-width:17.625rem}}.keen-slider[_ngcontent-%COMP%]   app-sponsor-new[_ngcontent-%COMP%]{background-color:#f4f5f6;border-radius:.9375rem}body.dark-theme   [_nghost-%COMP%]   .keen-slider[_ngcontent-%COMP%]   app-sponsor-new[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .keen-slider[_ngcontent-%COMP%]   app-sponsor-new[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .keen-slider[_ngcontent-%COMP%]   app-sponsor-new[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .keen-slider[_ngcontent-%COMP%]   app-sponsor-new[_ngcontent-%COMP%]{background-color:#f4f5f6}.keen-slider[_ngcontent-%COMP%]   app-youtube-embedded[_ngcontent-%COMP%]{background-color:#f4f5f6;border-radius:.9375rem}body.dark-theme   [_nghost-%COMP%]   .keen-slider[_ngcontent-%COMP%]   app-youtube-embedded[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .keen-slider[_ngcontent-%COMP%]   app-youtube-embedded[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .keen-slider[_ngcontent-%COMP%]   app-youtube-embedded[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .keen-slider[_ngcontent-%COMP%]   app-youtube-embedded[_ngcontent-%COMP%]{background-color:#f4f5f6}.keen-slider[_ngcontent-%COMP%]   app-carousel-name-description[_ngcontent-%COMP%]{width:18.0625rem;max-width:18.0625rem}@media (max-width: 1023px){.keen-slider[_ngcontent-%COMP%]   app-carousel-name-description[_ngcontent-%COMP%]{width:17.625rem;max-width:17.625rem;min-width:17.625rem}}@media (min-width: 768px){.box-home[_ngcontent-%COMP%]{min-height:7.5rem}.box-home.box-column[_ngcontent-%COMP%]{min-height:50rem}.box-home.read-more[_ngcontent-%COMP%]{min-height:56.5rem}}@media (max-width: 767px){.box-home.box-column[_ngcontent-%COMP%]{min-height:7.5rem}}.col-home[_ngcontent-%COMP%]{padding-right:.3125rem;padding-left:.3125rem}@media (max-width: 768px){.col-home[_ngcontent-%COMP%]{padding:0 .625rem}}.bg-container[_ngcontent-%COMP%]{left:50%;transform:translate(-1.675rem);top:.3125rem;z-index:3}'],
                changeDetection: 0
            }),
            e
        }
        )();
        var Jt = m(65535)
          , Tt = m(54009)
          , tt = m(33269)
          , xt = m(77575)
          , Yt = m(51303)
          , Nt = m(92253);
        function be(e, a) {
            if (1 & e && t._UZ(0, "fa-icon", 22),
            2 & e) {
                const n = t.oxw(2).$implicit;
                t.Tol(n.move.color),
                t.Q6J("icon", n.move.arrow)
            }
        }
        function Me(e, a) {
            if (1 & e && (t.TgZ(0, "span", 20),
            t.YNc(1, be, 1, 4, "fa-icon", 21),
            t.qZA()),
            2 & e) {
                const n = t.oxw().$implicit;
                t.xp6(1),
                t.Q6J("ngIf", null == n ? null : n.move)
            }
        }
        function Oe(e, a) {
            if (1 & e && t.GkF(0, 24),
            2 & e) {
                t.oxw(4);
                const n = t.MAs(5);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function Pe(e, a) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, Oe, 1, 1, "ng-container", 23),
            t.BQk()),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(3);
                t.xp6(1),
                t.Q6J("ngIf", n.priceDiff < 0)("ngIfElse", o)
            }
        }
        const xe = function(e) {
            return {
                "badge bg-success align-middle": e
            }
        }
          , Ht = function(e, a, n) {
            return {
                first: e,
                "sell-strong-color": a,
                "buy-strong-color": n
            }
        };
        function we(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "li", 5),
                t.NdJ("mouseenter", function() {
                    const r = t.CHM(n).$implicit
                      , c = t.oxw(2);
                    return t.KtG(c.setRowHover(r.pair))
                })("mouseleave", function() {
                    t.CHM(n);
                    const i = t.oxw(2);
                    return t.KtG(i.setRowHover(null))
                }),
                t.TgZ(2, "a", 6),
                t.NdJ("click", function(i) {
                    const c = t.CHM(n).$implicit;
                    return t.oxw(2).navigateToPairExplorer(i, c),
                    t.KtG(!1)
                }),
                t.TgZ(3, "div", 7)(4, "span", 8)(5, "span", 9),
                t._uU(6),
                t.qZA()(),
                t.YNc(7, Me, 2, 1, "span", 10),
                t.TgZ(8, "span", 11)(9, "span", 12),
                t._UZ(10, "app-token-logo", 13),
                t.qZA(),
                t._UZ(11, "app-token-name", 14),
                t.ALo(12, "appSafe"),
                t.ALo(13, "slice"),
                t.ALo(14, "appSafe"),
                t.ALo(15, "slice"),
                t.ALo(16, "appSafe"),
                t.qZA()(),
                t.TgZ(17, "div", 15)(18, "div", 16)(19, "span", 17),
                t._uU(20),
                t.ALo(21, "appRoundBigNumber"),
                t.ALo(22, "appRoundPrices"),
                t.qZA()(),
                t.TgZ(23, "div", 18),
                t.YNc(24, Pe, 2, 2, "ng-container", 1),
                t.TgZ(25, "span", 19),
                t._uU(26),
                t.ALo(27, "number"),
                t.qZA()()()()(),
                t.BQk()
            }
            if (2 & e) {
                const n = a.$implicit
                  , o = a.index
                  , i = t.oxw(2);
                let r;
                t.xp6(2),
                t.Q6J("href", i.getPairExplorerURLWithLanguage(n), t.LSH),
                t.xp6(3),
                t.Q6J("ngClass", t.VKq(39, xe, 0 === o)),
                t.xp6(1),
                t.hij("#", o + 1, ""),
                t.xp6(1),
                t.Q6J("ngIf", !!i.existMove),
                t.xp6(3),
                t.Q6J("symbol", n.symbol)("name", n.name)("chain", n.chain)("address", n.pair)("logoUrl", n.logo),
                t.xp6(1),
                t.Q6J("tokenRight", i.screenWidth > 1250 ? t.lcZ(12, 17, n.symbolRef) : null)("tokenLeft", i.screenWidth > 1250 ? t.Dn7(13, 19, t.lcZ(14, 23, n.symbol), 0, 9) : t.Dn7(15, 25, t.lcZ(16, 29, n.symbol), 0, 7))("isLink", n.pair === i.rowHover),
                t.xp6(8),
                t.Q6J("ngClass", t.kEZ(41, Ht, 0 === o, n.priceDiff < 0, n.priceDiff >= 0)),
                t.xp6(1),
                t.hij("$", i.checkPrice(n.price) ? t.lcZ(21, 31, n.price) : t.xi3(22, 33, n.price, 4), ""),
                t.xp6(4),
                t.Q6J("ngIf", "0.00" !== i.decimalPipe(null !== (r = n.priceDiff) && void 0 !== r ? r : 0)),
                t.xp6(1),
                t.Q6J("ngClass", t.kEZ(45, Ht, 0 === o, n.priceDiff < 0, n.priceDiff >= 0)),
                t.xp6(1),
                t.hij(" ", t.xi3(27, 36, i.getPriceDiffAbs(n.priceDiff), "1.2-2"), "% ")
            }
        }
        function ke(e, a) {
            if (1 & e && (t.TgZ(0, "ul"),
            t.YNc(1, we, 28, 49, "ng-container", 4),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("ngForOf", n.trendingList)
            }
        }
        function ve(e, a) {
            1 & e && t._UZ(0, "app-icon", 25),
            2 & e && t.Q6J("width", 6)
        }
        function ye(e, a) {
            1 & e && t._UZ(0, "app-icon", 26),
            2 & e && t.Q6J("width", 6)
        }
        let Te = (()=>{
            class e extends d.K9 {
                onResize() {
                    this.screenWidth = window.innerWidth
                }
                constructor(n, o, i, r, c, p) {
                    super(),
                    this._decimalPipe = n,
                    this._tredingsService = o,
                    this._cdRef = i,
                    this._breakpointObserver = r,
                    this._routingService = c,
                    this._environment = p,
                    this.trendingList = [],
                    this.maxShow = 3,
                    this.chain = null,
                    this.ChainPage = tt.$,
                    this._isInitCharge = !0,
                    this.oldList = {},
                    this.isLoading = !1,
                    this.existMove = !1,
                    this.appContext = this._environment.app_scope,
                    this.rowHover = null,
                    this.screenWidth = window.innerWidth
                }
                ngOnInit() {
                    this.isLoading = !0,
                    this._tredingsService.getTrendingList(this.trendingType, this.chain).pipe((0,
                    d.sL)(this), (0,
                    Jt.a)(n=>n.pipe((0,
                    ht.g)(2e4), (0,
                    d.sL)(this))), (0,
                    Tt.a)(n=>n.pipe((0,
                    ht.g)(15 * d.VK))), (0,
                    Pt.K)(()=>[])).subscribe(n=>{
                        if (n && n.length) {
                            const o = n.slice(0, this.maxShow);
                            this.trendingList = [...this._tredingsService.formatTrendingList(o, this._isInitCharge, this.oldList)],
                            this.existMove = !!this.trendingList.find(i=>!!i.move),
                            this._isInitCharge = !1
                        }
                        this.isLoading = !1,
                        this._cdRef.detectChanges()
                    }
                    )
                }
                decimalPipe(n) {
                    return this._decimalPipe.transform(n, "1.2-2")
                }
                getPriceDiffAbs(n) {
                    return Math.abs(n)
                }
                checkPrice(n) {
                    return n.toString().split(".")[0].length > 7 && this._breakpointObserver.isMatched(_.K5)
                }
                getPairExplorerURLWithLanguage(n) {
                    return this._routingService.setLanguageToURL(`/${n.chain}/${tt.$.PairExplorer}/${n.pair}`)
                }
                navigateToPairExplorer(n, o) {
                    n.stopPropagation();
                    const i = `/${o.chain}/${tt.$.PairExplorer}/${o.pair}`;
                    return n.ctrlKey || n.metaKey ? this._routingService.windowNavigate(i, "_blank", "noopener") : this._routingService.navigate(i)
                }
                setRowHover(n) {
                    this.rowHover = n,
                    this._cdRef.detectChanges()
                }
                onDestroy() {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(b.JJ),t.Y36(s.o85),t.Y36(t.sBO),t.Y36(y.Yg),t.Y36(w.Zn),t.Y36(w.qA))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-trending-list"]],
                hostBindings: function(n, o) {
                    1 & n && t.NdJ("resize", function() {
                        return o.onResize()
                    }, !1, t.Jf7)
                },
                inputs: {
                    trendingType: "trendingType",
                    maxShow: "maxShow",
                    chain: "chain"
                },
                standalone: !0,
                features: [t._Bn([b.JJ]), t.qOj, t.jDz],
                decls: 6,
                vars: 2,
                consts: [[1, "trending-container", 3, "appLoading"], [4, "ngIf"], ["variationUp", ""], ["variationDown", ""], [4, "ngFor", "ngForOf"], [3, "mouseenter", "mouseleave"], ["rel", "nofollow", 3, "href", "click"], [1, "left-container"], [1, "number-container"], [1, "number", 3, "ngClass"], ["class", "move", 4, "ngIf"], [1, "symbol-container"], [1, "logo-container"], [3, "symbol", "name", "chain", "address", "logoUrl"], [3, "tokenRight", "tokenLeft", "isLink"], [1, "right-container"], [1, "price-container"], [1, "price", 3, "ngClass"], [1, "variation-container"], [1, "variation", 3, "ngClass"], [1, "move"], [3, "icon", "class", 4, "ngIf"], [3, "icon"], [3, "ngTemplateOutlet", 4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], ["name", "variationUp", 1, "buy-strong-color", 3, "width"], ["name", "variationDown", 1, "sell-strong-color", 3, "width"]],
                template: function(n, o) {
                    1 & n && (t.TgZ(0, "div", 0),
                    t.YNc(1, ke, 2, 1, "ul", 1),
                    t.qZA(),
                    t.YNc(2, ve, 1, 1, "ng-template", null, 2, t.W1O),
                    t.YNc(4, ye, 1, 1, "ng-template", null, 3, t.W1O)),
                    2 & n && (t.Q6J("appLoading", o.isLoading),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.isLoading))
                },
                dependencies: [_.TH, b.O5, b.ax, b.mk, G.uH, G.BN, Nt.T, Yt.m, b.tP, xt.lQ, b.OU, b.JJ, B.yl, B.pt, B.Gy],
                styles: ['.trending-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.625rem;position:relative}.trending-container[_ngcontent-%COMP%]   .dxt-loading[_ngcontent-%COMP%]{transform:translate(-50%)}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-padding-start:0;padding-inline-start:0}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:calc(100% + 10px);height:2.3125rem;line-height:2.3125rem;padding:0 .3125rem;margin-left:-.3125rem;margin-right:-.3125rem}@media (min-width: 1024px){.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{background-color:#e2e7ec;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{background-color:#23323c}body.light   [_nghost-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{background-color:#e2e7ec}}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .symbol-container[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%], .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus   .symbol-container[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#00b8d8}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:.25rem;font-size:13px;margin-right:0;width:100%;cursor:pointer}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus{text-decoration:none}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:flex-start;width:65%}@media (max-width: 1023px){.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]{width:50%}}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .number-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.125rem;justify-content:center;margin-right:.875rem;width:1.4375rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .number-container[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .number-container[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .number-container[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .number-container[_ngcontent-%COMP%]{color:#142028}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .number-container[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{padding:0;font-size:.6875rem!important;text-align:center}@media (max-width: 1250px){.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .number-container[_ngcontent-%COMP%]{margin-right:.25rem}}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:.8125rem;margin-right:.625rem;content:""}@media (max-width: 1250px){.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{margin-right:.25rem}}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:nowrap;gap:.125rem;line-height:1;color:#142028;text-decoration-color:#00b8d8}body.dark-theme   [_nghost-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]{color:#142028}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{height:1.25rem;width:1.25rem;margin-right:.25rem}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{text-transform:uppercase;font-size:14px;max-width:3.75rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@media (min-width: 1400px){.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{max-width:6.25rem}}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .symbol-ref[_ngcontent-%COMP%]{font-size:12px;text-overflow:ellipsis;overflow:hidden;max-width:3.125rem;white-space:nowrap;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .symbol-ref[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .symbol-ref[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .symbol-ref[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .symbol-ref[_ngcontent-%COMP%]{color:#818ea3}@media (min-width: 1400px){.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .symbol-ref[_ngcontent-%COMP%]{max-width:5rem}}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .symbol-ref[_ngcontent-%COMP%]   .symbol-separator[_ngcontent-%COMP%]{margin:0 .0625rem}@media (max-width: 1250px){.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .symbol-ref[_ngcontent-%COMP%]{display:none}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   .symbol-ref[_ngcontent-%COMP%]   .symbol-separator[_ngcontent-%COMP%]{display:none}}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:nowrap;gap:.9375rem;justify-content:flex-end;width:35%}@media screen and (min-width: 1251px) and (max-width: 1440px){.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]{width:80%}}@media screen and (min-width: 1440px) and (max-width: 1600px){.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]{width:60%}}@media screen and (min-width: 1600px) and (max-width: 1920px){.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]{width:45%}}@media (max-width: 1250px){.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]{width:100%}}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-end}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .variation-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;flex:1;gap:.25rem;width:100%}.trending-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .variation-container[_ngcontent-%COMP%]   .variation[_ngcontent-%COMP%]{font-size:13px}.badge[_ngcontent-%COMP%]{font-weight:400;height:1.3125rem;line-height:1.3125rem;align-self:center;width:1.4375rem;text-align:center;font-size:.6875rem!important;padding:0}'],
                changeDetection: 0
            }),
            e
        }
        )();
        var zt = m(71928)
          , Rt = m(73923);
        const Le = function(e, a) {
            return {
                link: e,
                icon: "desktop",
                tooltip: a
            }
        };
        function Ze(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.WLB(4, Le, n.website, t.lcZ(1, 2, "pair_explorer.web")))
            }
        }
        const Ae = function(e, a) {
            return {
                link: e,
                icon: "envelope",
                tooltip: a
            }
        };
        function Se(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.WLB(4, Ae, "mailto: " + n.email, t.lcZ(1, 2, "pair_explorer.email") + ": " + n.email))
            }
        }
        const Fe = function() {
            return ["fab", "telegram"]
        }
          , dt = function(e, a, n) {
            return {
                link: e,
                icon: a,
                tooltip: n
            }
        };
        function Ie(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, dt, n.telegram, t.DdM(4, Fe), t.lcZ(1, 2, "pair_explorer.telegram")))
            }
        }
        const Je = function() {
            return ["fab", "twitter"]
        };
        function Ne(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, dt, n.twitter, t.DdM(4, Je), t.lcZ(1, 2, "pair_explorer.twitter")))
            }
        }
        const De = function() {
            return ["fab", "discord"]
        };
        function Qe(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, dt, n.discord, t.DdM(4, De), t.lcZ(1, 2, "pair_explorer.discord")))
            }
        }
        function Ee(e, a) {
            if (1 & e && (t.TgZ(0, "a", 17),
            t._UZ(1, "img", 18),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("href", n.coingecko, t.LSH),
                t.xp6(1),
                t.s9C("ngbTooltip", t.lcZ(2, 2, "pair_explorer.coingecko_link"))
            }
        }
        function Ue(e, a) {
            if (1 & e && (t.TgZ(0, "a", 17),
            t._UZ(1, "img", 19),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("href", n.coinmarketcap, t.LSH),
                t.uIk("data-cmc-icon", n.symbol),
                t.xp6(1),
                t.s9C("ngbTooltip", t.lcZ(2, 3, "pair_explorer.cmc_link"))
            }
        }
        const qe = function() {
            return ["fab", "youtube"]
        };
        function Ye(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, dt, n.youtube, t.DdM(4, qe), t.lcZ(1, 2, "pair_explorer.youtube")))
            }
        }
        const He = function() {
            return ["fab", "instagram"]
        };
        function ze(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, dt, n.instagram, t.DdM(4, He), t.lcZ(1, 2, "pair_explorer.instagram")))
            }
        }
        const Re = function() {
            return ["fab", "tiktok"]
        };
        function Ve(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, dt, n.tiktok, t.DdM(4, Re), t.lcZ(1, 2, "pair_explorer.tiktok")))
            }
        }
        const Ge = function() {
            return ["fab", "facebook"]
        };
        function je(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, dt, n.facebook, t.DdM(4, Ge), t.lcZ(1, 2, "pair_explorer.facebook")))
            }
        }
        const Ke = function() {
            return ["fab", "medium"]
        };
        function $e(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, dt, n.medium, t.DdM(4, Ke), t.lcZ(1, 2, "pair_explorer.medium")))
            }
        }
        const Be = function() {
            return ["fab", "reddit"]
        };
        function We(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, dt, n.reddit, t.DdM(4, Be), t.lcZ(1, 2, "pair_explorer.reddit")))
            }
        }
        const Xe = function() {
            return ["fab", "github"]
        };
        function to(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, dt, n.github, t.DdM(4, Xe), t.lcZ(1, 2, "pair_explorer.github")))
            }
        }
        const no = function() {
            return ["fab", "bitbucket"]
        };
        function eo(e, a) {
            if (1 & e && (t.GkF(0, 16),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit;
                t.oxw(2);
                const o = t.MAs(4);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, dt, n.bitbucket, t.DdM(4, no), t.lcZ(1, 2, "pair_explorer.bitbucket")))
            }
        }
        function oo(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "a", 20),
                t.NdJ("click", function(i) {
                    t.CHM(n);
                    const r = t.oxw().$implicit
                      , c = t.oxw(2);
                    return "desktop" === c.mediaDevice ? c.openModalSocialLink(r, i) : c.openSocialLinkMobile(r, i),
                    t.KtG(!1)
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "app-icon", 21),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw(3);
                t.Q6J("ngbTooltip", t.lcZ(1, 3, "pair_explorer.more_links"))("disableTooltip", "mobileTablet" === n.mediaDevice),
                t.xp6(2),
                t.Q6J("width", 15)
            }
        }
        const ao = function(e) {
            return {
                currentDate: e,
                type: "rounded"
            }
        };
        function io(e, a) {
            if (1 & e && (t.TgZ(0, "span", 22),
            t._uU(1),
            t.ALo(2, "dateSince"),
            t.qZA()),
            2 & e) {
                const n = t.oxw().$implicit
                  , o = t.oxw(2);
                t.xp6(1),
                t.hij("", t.xi3(2, 1, n.updatedAt, t.VKq(4, ao, o.dateNow)), " ago")
            }
        }
        const ro = function(e) {
            return {
                first: e
            }
        };
        function co(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "li", 6),
                t.NdJ("click", function(i) {
                    const c = t.CHM(n).$implicit
                      , p = t.oxw(2);
                    return t.KtG(p.navigateToPairExplorer(i, c))
                }),
                t.TgZ(2, "div")(3, "span", 7),
                t._UZ(4, "app-token-logo", 8),
                t.qZA(),
                t.TgZ(5, "a", 9),
                t.NdJ("click", function(i) {
                    const c = t.CHM(n).$implicit;
                    return t.oxw(2).navigateToPairExplorer(i, c),
                    t.KtG(!1)
                }),
                t._uU(6),
                t.ALo(7, "slice"),
                t.ALo(8, "appSafe"),
                t.qZA()(),
                t.TgZ(9, "div"),
                t.YNc(10, Ze, 2, 7, "ng-container", 10),
                t.YNc(11, Se, 2, 7, "ng-container", 10),
                t.YNc(12, Ie, 2, 9, "ng-container", 10),
                t.YNc(13, Ne, 2, 9, "ng-container", 10),
                t.YNc(14, Qe, 2, 9, "ng-container", 10),
                t.YNc(15, Ee, 3, 4, "a", 11),
                t.YNc(16, Ue, 3, 5, "a", 11),
                t.YNc(17, Ye, 2, 9, "ng-container", 10),
                t.YNc(18, ze, 2, 9, "ng-container", 10),
                t.YNc(19, Ve, 2, 9, "ng-container", 10),
                t.YNc(20, je, 2, 9, "ng-container", 10),
                t.YNc(21, $e, 2, 9, "ng-container", 10),
                t.YNc(22, We, 2, 9, "ng-container", 10),
                t.YNc(23, to, 2, 9, "ng-container", 10),
                t.YNc(24, eo, 2, 9, "ng-container", 10),
                t.YNc(25, oo, 3, 5, "a", 12),
                t.TgZ(26, "a", 13),
                t.NdJ("click", function(i) {
                    const c = t.CHM(n).$implicit;
                    return t.oxw(2).navigateToPairExplorer(i, c),
                    t.KtG(!1)
                }),
                t.ALo(27, "translate"),
                t._UZ(28, "app-icon", 14),
                t.qZA()()(),
                t.YNc(29, io, 3, 6, "span", 15),
                t.BQk()
            }
            if (2 & e) {
                const n = a.$implicit
                  , o = a.index
                  , i = t.oxw(2);
                t.xp6(4),
                t.Q6J("symbol", n.symbol)("name", n.name)("chain", n.chain)("address", n.id)("logoUrl", n.logo),
                t.xp6(1),
                t.Q6J("href", i.getPairExplorerURLWithLanguage(n), t.LSH)("ngClass", t.VKq(37, ro, 0 === o)),
                t.xp6(1),
                t.Oqu(t.Dn7(7, 29, t.lcZ(8, 33, n.symbol), 0, 9)),
                t.xp6(4),
                t.Q6J("ngIf", n.website),
                t.xp6(1),
                t.Q6J("ngIf", n.email),
                t.xp6(1),
                t.Q6J("ngIf", n.telegram),
                t.xp6(1),
                t.Q6J("ngIf", n.twitter),
                t.xp6(1),
                t.Q6J("ngIf", n.discord),
                t.xp6(1),
                t.Q6J("ngIf", i.isVisibleSocial(n.id, "coingecko")),
                t.xp6(1),
                t.Q6J("ngIf", i.isVisibleSocial(n.id, "coinmarketcap")),
                t.xp6(1),
                t.Q6J("ngIf", i.isVisibleSocial(n.id, "youtube")),
                t.xp6(1),
                t.Q6J("ngIf", i.isVisibleSocial(n.id, "instagram")),
                t.xp6(1),
                t.Q6J("ngIf", i.isVisibleSocial(n.id, "tiktok")),
                t.xp6(1),
                t.Q6J("ngIf", i.isVisibleSocial(n.id, "facebook")),
                t.xp6(1),
                t.Q6J("ngIf", i.isVisibleSocial(n.id, "medium")),
                t.xp6(1),
                t.Q6J("ngIf", i.isVisibleSocial(n.id, "reddit")),
                t.xp6(1),
                t.Q6J("ngIf", i.isVisibleSocial(n.id, "github")),
                t.xp6(1),
                t.Q6J("ngIf", i.isVisibleSocial(n.id, "bitbucket")),
                t.xp6(1),
                t.Q6J("ngIf", i.moreSocialList.get(n.id) && i.moreSocialList.get(n.id).length && i.moreSocialList.get(n.id).length > 5),
                t.xp6(1),
                t.s9C("ngbTooltip", t.lcZ(27, 35, "pools_creator.show_live_data")),
                t.Q6J("href", i.getPairExplorerURLWithLanguage(n), t.LSH)("disableTooltip", "mobileTablet" === i.mediaDevice),
                t.xp6(2),
                t.Q6J("width", 15),
                t.xp6(1),
                t.Q6J("ngIf", n.updatedAt)
            }
        }
        function lo(e, a) {
            if (1 & e && (t.TgZ(0, "ul"),
            t.YNc(1, co, 30, 39, "ng-container", 5),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("ngForOf", n.socialList)
            }
        }
        const so = function(e) {
            return {
                chain: e
            }
        };
        function go(e, a) {
            if (1 & e && (t.TgZ(0, "div", 23)(1, "h4"),
            t._uU(2, "Ooops \u{1f644}"),
            t.qZA(),
            t.TgZ(3, "div"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw();
                t.xp6(4),
                t.Oqu(t.xi3(5, 1, "home.no_results", t.VKq(4, so, n.chain ? n.getChainName(n.chain) : "all")))
            }
        }
        function _o(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "a", 24),
                t.NdJ("click", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.stopPropagation(i))
                }),
                t._UZ(1, "fa-icon", 25),
                t.qZA()
            }
            if (2 & e) {
                const n = a.link
                  , o = a.icon
                  , i = a.tooltip
                  , r = t.oxw();
                t.Q6J("href", n, t.LSH),
                t.xp6(1),
                t.Q6J("icon", o)("fixedWidth", !0)("ngbTooltip", i)("disableTooltip", "mobileTablet" === r.mediaDevice)
            }
        }
        function po(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "app-panel-component", 26),
                t.NdJ("panelClosed", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return t.KtG(i.toggleSocialLinksPanel(!1))
                }),
                t._UZ(1, "app-links-social-panel", 27),
                t.ALo(2, "appSafe"),
                t.ALo(3, "translate"),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw();
                t.Q6J("showHeader", !1),
                t.xp6(1),
                t.hYB("title", "", t.lcZ(2, 6, n.symbolSocialLink), " ", t.lcZ(3, 8, "pair_explorer.links_modal_title"), ""),
                t.Q6J("linksSocialData", n.linksSocialData)("tokenCustomInfo", n.tokenCustomInfo)("isDarkTheme", n.isDarkTheme)
            }
        }
        let ho = (()=>{
            class e extends d.K9 {
                constructor(n, o, i, r, c, p, O, h) {
                    super(),
                    this._cdRef = n,
                    this._trendingsService = o,
                    this._web3UtilsService = i,
                    this._modalService = r,
                    this._breakpointObserver = c,
                    this._settingsService = p,
                    this._routingService = O,
                    this._environment = h,
                    this.maxShow = 3,
                    this.chain = null,
                    this.dateNow = Date.now(),
                    this.socialList = [],
                    this.moreSocialList = new Map,
                    this.ChainPage = tt.$,
                    this.isLoading = !1,
                    this.showSocialList = !1,
                    this.isDarkTheme = !0,
                    this._keysMoreSocialList = ["coinmarketcap", "coingecko", "extraInfo", "github", "bitbucket", "facebook", "medium", "reddit", "tiktok", "youtube", "instagram"],
                    this._keysMainSocialList = ["website", "email", "twitter", "telegram", "discord"],
                    this.mediaDevice = "",
                    this.appContext = this._environment.app_scope
                }
                ngOnInit() {
                    this._breakpointObserver.observe([_.K5, _.mT]).pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this.mediaDevice = n.breakpoints[_.K5] ? "mobileTablet" : "desktop",
                        this._cdRef.detectChanges()
                    }
                    ),
                    this.isLoading = !0,
                    this._web3UtilsService.isLibLoaded$.pipe((0,
                    It.w)(()=>this._trendingsService.getSocialUpdatedTrendingList(this.chain)), (0,
                    d.sL)(this), (0,
                    Tt.a)(n=>n.pipe((0,
                    ht.g)(15 * d.VK))), (0,
                    Jt.a)(n=>n.pipe((0,
                    ht.g)(15e3), (0,
                    d.sL)(this))), (0,
                    Pt.K)(()=>[])).subscribe(n=>{
                        n && n.length && (this.socialList = [...n.slice(0, this.maxShow)],
                        this.socialList.forEach(o=>{
                            o.id = this._toChecksumAddress(o.id, o.chain),
                            o.logo = o?.logo && s.LJP.normalizeLogoUrl(o?.logo),
                            this._getMoreSocialList(o)
                        }
                        ),
                        this._startTimer()),
                        this.isLoading = !1,
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._settingsService.onThemeChange$.pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this.isDarkTheme = n === w.Q2.Dark
                    }
                    )
                }
                _toChecksumAddress(n, o) {
                    return s.LJP.checkIsEVMAddress(n, o) ? this._web3UtilsService.toChecksumAddress(n).toLowerCase() : n
                }
                _getMoreSocialList(n) {
                    const o = [];
                    this._keysMainSocialList.forEach(i=>{
                        n[i] && o.push(i)
                    }
                    ),
                    this._keysMoreSocialList.forEach(i=>{
                        n[i] && o.push(i)
                    }
                    ),
                    this.moreSocialList.set(n.id, o)
                }
                _startTimer() {
                    this._nowInterval = setInterval(()=>{
                        this.dateNow = Date.now(),
                        this._cdRef.detectChanges()
                    }
                    , 1e3)
                }
                onDestroy() {
                    this._stopTimer()
                }
                _stopTimer() {
                    clearInterval(this._nowInterval)
                }
                getChainName(n) {
                    if (n)
                        return s.CXF.getChainName(n)
                }
                openModalSocialLink(n, o) {
                    o.stopPropagation();
                    const r = this._modalService.open(zt.j, {
                        centered: !0,
                        scrollable: !0
                    }).componentInstance;
                    r.tokenCustomInfo = n,
                    r.chain = n.chain,
                    n.coingecko && (r.coingeckoLink = n.coingecko),
                    n.coinmarketcap && (r.cmcTokenLink = n.coinmarketcap),
                    this._isBubblemapsSupportedInChain(n.chain) && (r.bubbleMapsLink = "https://app.bubblemaps.io/" + s.LR_[n.chain] + "/token/" + n.id)
                }
                openSocialLinkMobile(n, o) {
                    o.stopPropagation(),
                    this.symbolSocialLink = n.symbol,
                    this.linksSocialData = this.getDataLinksMobile(n),
                    this.tokenCustomInfo = n,
                    this._cdRef.detectChanges(),
                    this.toggleSocialLinksPanel(!0)
                }
                toggleSocialLinksPanel(n) {
                    this.showSocialList = n,
                    this._cdRef.detectChanges()
                }
                getDataLinksMobile(n) {
                    const o = {
                        chain: n.chain,
                        unicrypt: !1,
                        teamLockUrl: null,
                        showMetamaskIcon: !1,
                        coingeckoLink: null,
                        bubbleMapsLink: null,
                        cmcTokenLink: null,
                        dxSaleLink: null,
                        mudraLink: null,
                        pairSelected: null
                    };
                    return n.coingecko && (o.coingeckoLink = n.coingecko),
                    n.coinmarketcap && (o.cmcTokenLink = n.coinmarketcap),
                    this._isBubblemapsSupportedInChain(n.chain) && (o.bubbleMapsLink = "https://app.bubblemaps.io/" + s.LR_[n.chain] + "/token/" + n.id),
                    o
                }
                isVisibleSocial(n, o) {
                    const i = this.moreSocialList.get(n);
                    return !!i && -1 !== i.slice(0, 5).indexOf(o)
                }
                _isBubblemapsSupportedInChain(n) {
                    return null != s.LR_[n]
                }
                getPairExplorerURLWithLanguage(n) {
                    return this._routingService.setLanguageToURL(`/${n.chain}/${tt.$.PairExplorer}/${n.id}`)
                }
                navigateToPairExplorer(n, o) {
                    n.stopPropagation();
                    const i = `/${o.chain}/${tt.$.PairExplorer}/${o.id}`;
                    return n.ctrlKey || n.metaKey ? this._routingService.windowNavigate(i, "_blank", "noopener") : this._routingService.navigate(i)
                }
                stopPropagation(n) {
                    n.stopPropagation()
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(t.sBO),t.Y36(s.o85),t.Y36(s.j4Y),t.Y36(et.FF),t.Y36(y.Yg),t.Y36(w.gb),t.Y36(w.Zn),t.Y36(w.qA))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-socials-updated"]],
                inputs: {
                    maxShow: "maxShow",
                    chain: "chain"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 6,
                vars: 4,
                consts: [[1, "socials-container", 3, "appLoading"], [4, "ngIf"], ["class", "no-data", 4, "ngIf"], ["socialLinkEnabled", ""], [3, "showHeader", "panelClosed", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "pair-symbol-container"], [3, "symbol", "name", "chain", "address", "logoUrl"], [1, "symbol", 3, "href", "ngClass", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], ["class", "more-icons", "href", "javascript:", "placement", "auto", 3, "ngbTooltip", "disableTooltip", "click", 4, "ngIf"], ["placement", "top-right", 1, "pair-explorer-icon", 3, "href", "ngbTooltip", "disableTooltip", "click"], ["name", "pairExplorer", 3, "width"], ["class", "time", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener", 3, "href"], ["src", "assets/img/coingecko.png", "alt", "Coingecko logo", "placement", "bottom", 1, "social-img", 3, "ngbTooltip"], ["src", "assets/img/cmc-icon-blue.jpeg", "alt", "CMC logo", "placement", "top", 1, "cmc-icon", "social-img", 3, "ngbTooltip"], ["href", "javascript:", "placement", "auto", 1, "more-icons", 3, "ngbTooltip", "disableTooltip", "click"], ["name", "more", 3, "width"], [1, "time"], [1, "no-data"], ["target", "_blank", "rel", "noopener", 1, "social-icon", 3, "href", "click"], ["placement", "auto", 3, "icon", "fixedWidth", "ngbTooltip", "disableTooltip"], [3, "showHeader", "panelClosed"], [3, "title", "linksSocialData", "tokenCustomInfo", "isDarkTheme"]],
                template: function(n, o) {
                    1 & n && (t.TgZ(0, "div", 0),
                    t.YNc(1, lo, 2, 1, "ul", 1),
                    t.YNc(2, go, 6, 6, "div", 2),
                    t.qZA(),
                    t.YNc(3, _o, 2, 5, "ng-template", null, 3, t.W1O),
                    t.YNc(5, po, 4, 10, "app-panel-component", 4)),
                    2 & n && (t.Q6J("appLoading", o.isLoading),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.isLoading && o.socialList && o.socialList.length),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.isLoading && !o.socialList.length),
                    t.xp6(3),
                    t.Q6J("ngIf", o.showSocialList))
                },
                dependencies: [_.TH, b.O5, b.ax, Nt.T, b.mk, b.tP, et._L, xt.lQ, G.uH, G.BN, _.yX, Rt.J, b.OU, B.$n, B.yl, f.aw, f.X$],
                styles: [".socials-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.625rem;position:relative}.socials-container[_ngcontent-%COMP%]   .dxt-loading[_ngcontent-%COMP%]{transform:translate(-50%)}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-padding-start:0;padding-inline-start:0}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:.625rem;font-size:13px;margin-bottom:1.125rem;margin-right:0;padding:0 .3125rem;height:1.375rem;line-height:1.375rem;cursor:pointer}@media (min-width: 1024px){.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{background-color:#e2e7ec;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{background-color:#23323c}body.light   [_nghost-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{background-color:#e2e7ec}}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > div[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%], .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus > div[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#00b8d8!important}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-bottom:0}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{gap:.375rem;display:flex;align-items:center;line-height:1;position:relative}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{text-transform:uppercase;color:#142028;text-decoration:none;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#142028}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]:hover, .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]:focus{color:#00b8d8!important}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]{z-index:0;margin-right:.3125rem;height:1.25rem;width:1.25rem}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.25rem;width:1.25rem;border-radius:3.125rem}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .social-img[_ngcontent-%COMP%]{width:.9375rem;height:.9375rem;border:.0625rem solid white;border-radius:.625rem;background-color:#fff}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .social-img.cmc-icon[_ngcontent-%COMP%]{border:none!important}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .pair-explorer-icon[_ngcontent-%COMP%]{color:#00b8d8;cursor:pointer}.socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;font-size:.625rem;color:#818ea3;margin-top:-1.125rem}body.dark-theme   [_nghost-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .socials-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%], .social-icon[_ngcontent-%COMP%]{color:#818ea3}.social-icon[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:.9375rem}body.dark-theme   [_nghost-%COMP%]     .social-icon{color:#fff}.no-data[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.more-icons[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#142028;border-radius:3.125rem;display:flex;justify-content:center;align-items:center}body.dark-theme   [_nghost-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#142028}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var mo = m(16509)
          , Dt = m(10027);
        function fo(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 10)(1, "app-dropdown-chains", 11),
                t.NdJ("chainsSelected", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.changeChain(i))
                }),
                t.qZA()()
            }
            if (2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("defaultChainSelected", n.defaultChain)("allChains", !1)("showOnlyIcons", !1)
            }
        }
        function Co(e, a) {
            if (1 & e && t.GkF(0, 12),
            2 & e) {
                t.oxw();
                const n = t.MAs(14);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function uo(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "app-carousel", 13),
                t.NdJ("lastSlide", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.changeWidthCarousel(i))
                }),
                t.TgZ(1, "app-carousel-item", 14)(2, "div"),
                t.GkF(3, 12),
                t.qZA()()()
            }
            if (2 & e) {
                const n = t.oxw()
                  , o = t.MAs(14);
                t.xp6(1),
                t.Q6J("width", n.xsActive ? "1100" : "1160"),
                t.xp6(2),
                t.Q6J("ngTemplateOutlet", o)
            }
        }
        function bo(e, a) {
            if (1 & e && t._UZ(0, "app-hot-pairs-list", 15),
            2 & e) {
                const n = t.oxw();
                t.Q6J("chain", n.selectedChain)("isDashboard", !0)
            }
        }
        const Mo = function(e) {
            return {
                widthChanged: e
            }
        };
        let Oo = (()=>{
            class e {
                onResize() {
                    this.screenWidth = window.innerWidth
                }
                constructor(n, o) {
                    this._breakpointObserver = n,
                    this._cdRef = o,
                    this.defaultChain = s.qop.Ethereum,
                    this.mediaDevice = "",
                    this.widthChanged = !1,
                    this.screenWidth = window.innerWidth,
                    this.lastSlide = new t.vpe
                }
                ngOnInit() {
                    this.selectedChain = this.chain ? this.chain : s.qop.Ethereum,
                    this._breakpointObserver.observe([y.u3.XSmall, _.K5, _.mT]).subscribe(n=>{
                        n.breakpoints[y.u3.XSmall] ? (this.mediaDevice = "mobileTablet",
                        this.xsActive = !0) : n.breakpoints[_.K5] ? (this.mediaDevice = "mobileTablet",
                        this.xsActive = !1) : (this.mediaDevice = "desktop",
                        this.xsActive = !1),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                changeChain(n) {
                    1 === n.length && (this.selectedChain = n[0])
                }
                changeWidthCarousel(n) {
                    this.widthChanged = !0 === n,
                    this._cdRef.detectChanges(),
                    this.lastSlide.emit(n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(y.Yg),t.Y36(t.sBO))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-hotpairs-list-dashboard"]],
                hostBindings: function(n, o) {
                    1 & n && t.NdJ("resize", function() {
                        return o.onResize()
                    }, !1, t.Jf7)
                },
                inputs: {
                    chain: "chain"
                },
                outputs: {
                    lastSlide: "lastSlide"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 15,
                vars: 12,
                consts: [[1, "hotpairs-container", 3, "ngClass"], [1, "header"], [1, "title"], ["icon", "fire-flame-curved"], ["icon", "info-circle", "placement", "bottom", 1, "info", 3, "ngbTooltip"], ["class", "chains-carousel", 4, "ngIf"], [1, "hotpairs-container__list"], [3, "ngTemplateOutlet", 4, "ngIf"], ["maxHeight", "212", 3, "lastSlide", 4, "ngIf"], ["hotpairsList", ""], [1, "chains-carousel"], [3, "defaultChainSelected", "allChains", "showOnlyIcons", "chainsSelected"], [3, "ngTemplateOutlet"], ["maxHeight", "212", 3, "lastSlide"], ["height", "212", 3, "width"], [3, "chain", "isDashboard"]],
                template: function(n, o) {
                    1 & n && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
                    t._UZ(3, "fa-icon", 3),
                    t.TgZ(4, "h4"),
                    t._uU(5),
                    t.ALo(6, "translate"),
                    t.qZA(),
                    t._UZ(7, "fa-icon", 4),
                    t.ALo(8, "translate"),
                    t.qZA(),
                    t.YNc(9, fo, 2, 3, "div", 5),
                    t.qZA(),
                    t.TgZ(10, "div", 6),
                    t.YNc(11, Co, 1, 1, "ng-container", 7),
                    t.YNc(12, uo, 4, 2, "app-carousel", 8),
                    t.qZA()(),
                    t.YNc(13, bo, 1, 2, "ng-template", null, 9, t.W1O)),
                    2 & n && (t.Q6J("ngClass", t.VKq(10, Mo, o.widthChanged)),
                    t.xp6(5),
                    t.Oqu(t.lcZ(6, 6, "home.hotpairs")),
                    t.xp6(2),
                    t.Q6J("ngbTooltip", t.lcZ(8, 8, "home.hotpairs_tooltip")),
                    t.xp6(2),
                    t.Q6J("ngIf", !o.chain),
                    t.xp6(2),
                    t.Q6J("ngIf", o.screenWidth >= 1281),
                    t.xp6(1),
                    t.Q6J("ngIf", o.screenWidth < 1281))
                },
                dependencies: [b.mk, G.uH, G.BN, et._L, b.O5, Dt.n, b.tP, _.Fy, _.LB, mo.G, f.aw, f.X$],
                styles: [".hotpairs-container[_ngcontent-%COMP%]{width:100%;height:17.5rem;border-radius:.9375rem;margin-bottom:1.25rem;padding:1.25rem;position:relative;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]{background-color:#f4f5f6}@media (max-width: 1023px){.hotpairs-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.hotpairs-container.widthChanged[_ngcontent-%COMP%]{border-radius:.9375rem}}.hotpairs-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{justify-content:flex-start;display:flex;align-items:center;gap:.5rem}.hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:0}.hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#818ea3;font-size:12px;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#818ea3}.hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028;font-size:13px;margin-left:-.25rem}body.dark-theme   [_nghost-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}.hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:20px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .hotpairs-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{color:#142028}.hotpairs-container[_ngcontent-%COMP%]   .chains-carousel[_ngcontent-%COMP%]{width:15.75rem}@media (max-width: 1023px){.hotpairs-container[_ngcontent-%COMP%]   .chains-carousel[_ngcontent-%COMP%]{width:55%}}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var Vt = m(61135)
          , Po = m(54004)
          , xo = m(39300)
          , ot = m(69585)
          , wo = m(640)
          , ko = m(37885)
          , vo = m(1307)
          , yo = m(37713);
        const To = ["pairListTable"];
        function Lo(e, a) {
            if (1 & e && t._UZ(0, "div", 7),
            2 & e) {
                const n = t.oxw();
                t.Q6J("appLoading", !!n.loading)
            }
        }
        function Zo(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 23)(1, "div", 24)(2, "span", 25),
                t._UZ(3, "app-token-logo", 26),
                t.qZA(),
                t.TgZ(4, "a", 27),
                t.NdJ("click", function(i) {
                    const c = t.CHM(n).row;
                    return t.oxw(2).navigateToPairExplorer(i, c),
                    t.KtG(!1)
                }),
                t._UZ(5, "app-token-name", 28),
                t.ALo(6, "appSafe"),
                t.ALo(7, "appSafe"),
                t.qZA()(),
                t.TgZ(8, "div", 29)(9, "span"),
                t._uU(10),
                t.ALo(11, "addressEllipsis"),
                t.ALo(12, "publicAddress"),
                t.qZA(),
                t.TgZ(13, "a", 30, 31),
                t.NdJ("click", function(i) {
                    const c = t.CHM(n).row
                      , p = t.MAs(14)
                      , O = t.oxw(2);
                    return t.KtG(O.copyText(i, c.id, c.chain, p))
                }),
                t.ALo(15, "translate"),
                t._UZ(16, "fa-icon", 32),
                t.qZA()()()
            }
            if (2 & e) {
                const n = a.row
                  , o = t.oxw(2);
                t.xp6(3),
                t.Q6J("symbol", n.symbol)("name", n.realName)("chain", n.chain)("address", n.idToken)("logoUrl", n.logo),
                t.xp6(1),
                t.Q6J("href", o.getPairExplorerURLWithLanguage(n), t.LSH),
                t.uIk("rel", o.getFollowRel(n)),
                t.xp6(1),
                t.Q6J("tokenRight", t.lcZ(6, 12, n.symbol_vs))("tokenLeft", t.lcZ(7, 14, n.symbol))("isLink", n.id === o.rowHover),
                t.xp6(5),
                t.hij(" ", t.lcZ(11, 16, t.xi3(12, 18, n.id, n.chain)), " "),
                t.xp6(3),
                t.s9C("ngbTooltip", t.lcZ(15, 21, "user.copy_address"))
            }
        }
        const ft = function(e) {
            return {
                interval: e
            }
        };
        function Ao(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 33),
                t.NdJ("click", function() {
                    const r = t.CHM(n).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "fa-icon", 34),
                t.ALo(5, "translate"),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.xp6(2),
                t.hij("", t.xi3(3, 2, "pair_list.price_24", t.VKq(8, ft, n.intervalSelected)), " "),
                t.xp6(2),
                t.Q6J("ngbTooltip", t.xi3(5, 5, "pair_list.price", t.VKq(10, ft, n.intervalSelected)))
            }
        }
        function So(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "appRoundPrices"),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2).row;
                t.xp6(1),
                t.hij("$", t.xi3(2, 1, n.price, 4), "")
            }
        }
        function Fo(e, a) {
            if (1 & e && (t.TgZ(0, "div", 36),
            t.YNc(1, So, 3, 4, "span", 37),
            t.qZA()),
            2 & e) {
                const n = t.oxw().row;
                t.oxw(2);
                const o = t.MAs(3);
                t.xp6(1),
                t.Q6J("ngIf", !!n.price)("ngIfElse", o)
            }
        }
        function Io(e, a) {
            if (1 & e && t.YNc(0, Fo, 2, 2, "div", 35),
            2 & e) {
                const n = a.row;
                t.oxw(2);
                const o = t.MAs(3);
                t.Q6J("ngIf", !!n.price)("ngIfElse", o)
            }
        }
        function Jo(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 33),
                t.NdJ("click", function() {
                    const r = t.CHM(n).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "fa-icon", 34),
                t.ALo(5, "translate"),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.xp6(2),
                t.hij("", t.xi3(3, 2, "pair_list.change", t.VKq(8, ft, n.intervalSelected)), " "),
                t.xp6(2),
                t.Q6J("ngbTooltip", t.xi3(5, 5, "pair_list.price_variation", t.VKq(10, ft, n.intervalSelected)))
            }
        }
        function No(e, a) {
            if (1 & e && t.GkF(0, 41),
            2 & e) {
                t.oxw(5);
                const n = t.MAs(9);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function Do(e, a) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, No, 1, 1, "ng-container", 40),
            t.BQk()),
            2 & e) {
                const n = t.oxw(2).row;
                t.oxw(2);
                const o = t.MAs(7);
                t.xp6(1),
                t.Q6J("ngIf", n.priceVariation < 0)("ngIfElse", o)
            }
        }
        function Qo(e, a) {
            if (1 & e && (t.ynx(0),
            t._uU(1),
            t.ALo(2, "ellipsis"),
            t.BQk()),
            2 & e) {
                const n = t.oxw(2).row;
                t.xp6(1),
                t.hij(" ", t.xi3(2, 1, n.priceVariationFormatted, 10), "%")
            }
        }
        function Eo(e, a) {
            if (1 & e && t._uU(0),
            2 & e) {
                const n = t.oxw(2).row;
                t.hij(" ", n.priceVariationFormatted, "% ")
            }
        }
        const Uo = function(e, a, n) {
            return {
                success: e,
                danger: a,
                info: n
            }
        };
        function qo(e, a) {
            if (1 & e && (t.TgZ(0, "div", 36)(1, "span", 38),
            t.YNc(2, Do, 2, 2, "ng-container", 22),
            t.YNc(3, Qo, 3, 4, "ng-container", 37),
            t.YNc(4, Eo, 1, 1, "ng-template", null, 39, t.W1O),
            t.qZA()()),
            2 & e) {
                const n = t.MAs(5)
                  , o = t.oxw().row;
                t.xp6(1),
                t.Q6J("ngClass", t.kEZ(4, Uo, o.priceVariation > 0, o.priceVariation < 0, 0 === o.priceVariation)),
                t.xp6(1),
                t.Q6J("ngIf", "0.00" !== o.priceVariationFormatted),
                t.xp6(1),
                t.Q6J("ngIf", o.priceVariationFormatted.length > 10)("ngIfElse", n)
            }
        }
        function Yo(e, a) {
            if (1 & e && t.YNc(0, qo, 6, 8, "div", 35),
            2 & e) {
                const n = a.row;
                t.oxw(2);
                const o = t.MAs(3);
                t.Q6J("ngIf", null == n ? null : n.priceVariation)("ngIfElse", o)
            }
        }
        function Ho(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 33),
                t.NdJ("click", function() {
                    const r = t.CHM(n).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "fa-icon", 34),
                t.ALo(5, "translate"),
                t.qZA()
            }
            2 & e && (t.xp6(2),
            t.hij("", t.lcZ(3, 2, "pair_list.dext_score"), " "),
            t.xp6(2),
            t.Q6J("ngbTooltip", t.lcZ(5, 4, "pair_list.dext_score_tooltip")))
        }
        function zo(e, a) {
            if (1 & e && t._UZ(0, "app-dext-score-chart", 43),
            2 & e) {
                const n = t.oxw().row
                  , o = t.oxw(2);
                t.Q6J("dextScore", o.getDextScoreValue(n.dextScore))("index", n.id)
            }
        }
        function Ro(e, a) {
            1 & e && (t.TgZ(0, "span"),
            t._uU(1, "-"),
            t.qZA())
        }
        function Vo(e, a) {
            if (1 & e && (t.YNc(0, zo, 1, 2, "app-dext-score-chart", 42),
            t.YNc(1, Ro, 2, 0, "span", 22)),
            2 & e) {
                const n = a.row;
                t.Q6J("ngIf", null != n.dextScore),
                t.xp6(1),
                t.Q6J("ngIf", !n.dextScore)
            }
        }
        function Go(e, a) {
            1 & e && (t.TgZ(0, "span")(1, "span"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t._UZ(4, "fa-icon", 34),
            t.ALo(5, "translate"),
            t.qZA()),
            2 & e && (t.xp6(2),
            t.hij("", t.lcZ(3, 2, "pair_list.contract"), " "),
            t.xp6(2),
            t.Q6J("ngbTooltip", t.lcZ(5, 4, "pair_list.contract_tooltip")))
        }
        function jo(e, a) {
            if (1 & e && t._UZ(0, "app-contract-details", 44),
            2 & e) {
                const n = a.row;
                t.Q6J("activeTitle", !1)("isAdmin", !1)("activeLabel", !1)("tokenAudit", n.audit)("tokenName", n.symbol)
            }
        }
        function Ko(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 33),
                t.NdJ("click", function() {
                    const r = t.CHM(n).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "fa-icon", 34),
                t.ALo(5, "translate"),
                t.qZA()
            }
            2 & e && (t.xp6(2),
            t.hij("", t.lcZ(3, 2, "pair_list.created"), " "),
            t.xp6(2),
            t.Q6J("ngbTooltip", t.lcZ(5, 4, "pair_list.created_tooltip")))
        }
        const $o = function(e) {
            return {
                currentDate: e,
                type: "rounded"
            }
        };
        function Bo(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "dateSince"),
            t.qZA()),
            2 & e) {
                const n = t.oxw().row
                  , o = t.oxw(2);
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, n.creationTime, t.VKq(4, $o, o.dateNow)))
            }
        }
        function Wo(e, a) {
            if (1 & e && t.YNc(0, Bo, 3, 6, "span", 37),
            2 & e) {
                const n = a.row;
                t.oxw(2);
                const o = t.MAs(3);
                t.Q6J("ngIf", !!n.creationTime)("ngIfElse", o)
            }
        }
        function Xo(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 33),
                t.NdJ("click", function() {
                    const r = t.CHM(n).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "fa-icon", 34),
                t.ALo(5, "translate"),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.xp6(2),
                t.hij("", t.lcZ(3, 2, "pair_list.volume_24"), " "),
                t.xp6(2),
                t.Q6J("ngbTooltip", t.xi3(5, 4, "pair_list.volume", t.VKq(7, ft, n.intervalSelected)))
            }
        }
        function ta(e, a) {
            if (1 & e && (t.TgZ(0, "div", 36)(1, "span"),
            t._uU(2),
            t.ALo(3, "appRoundNumber"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw().row;
                t.xp6(2),
                t.hij(" $", t.lcZ(3, 1, n.volume), "")
            }
        }
        function na(e, a) {
            if (1 & e && t.YNc(0, ta, 4, 3, "div", 35),
            2 & e) {
                const n = a.row;
                t.oxw(2);
                const o = t.MAs(3);
                t.Q6J("ngIf", !!n.volume)("ngIfElse", o)
            }
        }
        function ea(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 33),
                t.NdJ("click", function() {
                    const r = t.CHM(n).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "fa-icon", 34),
                t.ALo(5, "translate"),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.xp6(2),
                t.hij("", t.lcZ(3, 2, "pair_list.swaps_24"), " "),
                t.xp6(2),
                t.Q6J("ngbTooltip", t.xi3(5, 4, "pair_list.swaps", t.VKq(7, ft, n.intervalSelected)))
            }
        }
        function oa(e, a) {
            if (1 & e && (t.TgZ(0, "div", 36)(1, "span"),
            t._uU(2),
            t.ALo(3, "appRoundNumber"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw().row;
                t.xp6(2),
                t.Oqu(t.Dn7(3, 1, n.swaps, void 0, 0))
            }
        }
        function aa(e, a) {
            if (1 & e && t.YNc(0, oa, 4, 5, "div", 35),
            2 & e) {
                const n = a.row;
                t.oxw(2);
                const o = t.MAs(3);
                t.Q6J("ngIf", n.swaps)("ngIfElse", o)
            }
        }
        function ia(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 33),
                t.NdJ("click", function() {
                    const r = t.CHM(n).sortFn;
                    return t.KtG(r())
                }),
                t._uU(1),
                t.ALo(2, "translate"),
                t._UZ(3, "fa-icon", 34),
                t.ALo(4, "translate"),
                t.qZA()
            }
            2 & e && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 2, "pair_list.total_liquidity"), " "),
            t.xp6(2),
            t.Q6J("ngbTooltip", t.lcZ(4, 4, "pair_list.liquidity")))
        }
        function ra(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "appRoundNumber"),
            t.qZA()),
            2 & e) {
                const n = t.oxw().row;
                t.xp6(1),
                t.Oqu(t.lcZ(2, 1, n.liquidity))
            }
        }
        function ca(e, a) {
            if (1 & e && t.YNc(0, ra, 3, 3, "span", 37),
            2 & e) {
                const n = a.row;
                t.oxw(2);
                const o = t.MAs(3);
                t.Q6J("ngIf", !!n.liquidity)("ngIfElse", o)
            }
        }
        function la(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 33),
                t.NdJ("click", function() {
                    const r = t.CHM(n).sortFn;
                    return t.KtG(r())
                }),
                t._uU(1),
                t.ALo(2, "translate"),
                t._UZ(3, "fa-icon", 34),
                t.ALo(4, "translate"),
                t.qZA()
            }
            2 & e && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 2, "pair_list.total_market_cap"), " "),
            t.xp6(2),
            t.Q6J("ngbTooltip", t.lcZ(4, 4, "pair_list.total_market_cap_desc")))
        }
        function sa(e, a) {
            if (1 & e && (t.TgZ(0, "div", 36)(1, "span"),
            t._uU(2),
            t.ALo(3, "appRoundNumber"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw().row;
                t.xp6(2),
                t.hij(" $", t.lcZ(3, 1, n.totalMarketCap), "")
            }
        }
        function da(e, a) {
            if (1 & e && t.YNc(0, sa, 4, 3, "div", 35),
            2 & e) {
                const n = a.row;
                t.oxw(2);
                const o = t.MAs(3);
                t.Q6J("ngIf", !!n.totalMarketCap)("ngIfElse", o)
            }
        }
        function ga(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 45),
                t.NdJ("click", function(i) {
                    const c = t.CHM(n).row
                      , p = t.oxw(2);
                    return p.stopClickPropagation(i),
                    t.KtG(p.selectExchange(c.exchange))
                }),
                t.ALo(1, "exchangeName"),
                t.ALo(2, "exchangeVersion"),
                t.ALo(3, "chainName"),
                t.TgZ(4, "img", 46),
                t.ALo(5, "exchangeLogoStyles"),
                t.ALo(6, "exchangeLogoUrl"),
                t.qZA(),
                t._UZ(7, "img", 47),
                t.qZA()
            }
            if (2 & e) {
                const n = a.row
                  , o = t.oxw(2);
                t.cQ8("ngbTooltip", "", t.xi3(1, 10, n.exchange, n.chain), " ", t.xi3(2, 13, n.exchange, n.chain), " (", t.lcZ(3, 16, n.chain), ")"),
                t.Q6J("disableTooltip", "mobileTablet" === o.mediaDevice),
                t.xp6(4),
                t.Akn(t.xi3(5, 18, n.exchange, n.chain)),
                t.Q6J("src", t.xi3(6, 21, n.exchange, n.chain), t.LSH)("alt", n.exchange),
                t.xp6(3),
                t.s9C("alt", n.chain + " logo"),
                t.Q6J("src", n.chainLogo, t.LSH)
            }
        }
        function _a(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 48)(1, "a", 49),
                t.NdJ("click", function(i) {
                    const c = t.CHM(n).row
                      , p = t.oxw(2);
                    return p.stopClickPropagation(i),
                    p.changeToggleTokenPairs(c),
                    t.KtG(!1)
                }),
                t.ALo(2, "translate"),
                t._UZ(3, "fa-icon", 50),
                t.qZA(),
                t.TgZ(4, "a", 51),
                t.NdJ("click", function(i) {
                    const c = t.CHM(n).row;
                    return t.oxw(2).navigateToPairExplorer(i, c),
                    t.KtG(!1)
                }),
                t.ALo(5, "translate"),
                t._UZ(6, "app-icon", 52),
                t.qZA(),
                t._UZ(7, "app-favorite-button", 53),
                t.qZA()
            }
            if (2 & e) {
                const n = a.row
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngbTooltip", t.lcZ(2, 6, "pair_explorer.search_token_pairs")),
                t.xp6(3),
                t.s9C("ngbTooltip", t.lcZ(5, 8, "pools_creator.show_live_data")),
                t.Q6J("href", o.getPairExplorerURLWithLanguage(n), t.LSH),
                t.uIk("rel", o.getFollowRel(n)),
                t.xp6(2),
                t.Q6J("width", 17),
                t.xp6(1),
                t.Q6J("item", o.parseFav(n))
            }
        }
        function pa(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 58),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(4);
                    return t.KtG(i.changePage("previous"))
                }),
                t._UZ(1, "fa-icon", 59),
                t.TgZ(2, "span"),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA()()
            }
            2 & e && (t.xp6(3),
            t.Oqu(t.lcZ(4, 1, "exchange_list.previous")))
        }
        function ha(e, a) {
            if (1 & e && (t.TgZ(0, "span", 60),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw(4);
                t.xp6(1),
                t.Oqu(n.paramsFilter.page)
            }
        }
        function ma(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 58),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(4);
                    return t.KtG(i.changePage("next"))
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "fa-icon", 61),
                t.qZA()
            }
            2 & e && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "exchange_list.next")))
        }
        function fa(e, a) {
            if (1 & e && (t.TgZ(0, "div", 55),
            t.YNc(1, pa, 5, 3, "button", 56),
            t.YNc(2, ha, 2, 1, "span", 57),
            t.YNc(3, ma, 5, 3, "button", 56),
            t.qZA()),
            2 & e) {
                const n = t.oxw(3);
                t.xp6(1),
                t.Q6J("ngIf", 1 !== n.paramsFilter.page),
                t.xp6(1),
                t.Q6J("ngIf", !(1 === n.paramsFilter.page && n.totalCount !== n.paramsFilter.limit)),
                t.xp6(1),
                t.Q6J("ngIf", n.totalCount === n.paramsFilter.limit)
            }
        }
        function Ca(e, a) {
            1 & e && (t.TgZ(0, "ngx-datatable-footer"),
            t.YNc(1, fa, 4, 3, "ng-template", 54),
            t.qZA())
        }
        const ua = function(e) {
            return {
                emptyMessage: e
            }
        };
        function ba(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "ngx-datatable", 8, 9),
                t.NdJ("sort", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return t.KtG(i.sortList())
                })("activate", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.onRowClicked(i))
                })("mouseleave", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return t.KtG(i.setRowHover(null))
                }),
                t.ALo(2, "translate"),
                t.TgZ(3, "ngx-datatable-column", 10),
                t.ALo(4, "translate"),
                t.YNc(5, Zo, 17, 23, "ng-template", 11),
                t.qZA(),
                t.TgZ(6, "ngx-datatable-column", 12),
                t.ALo(7, "translate"),
                t.YNc(8, Ao, 6, 12, "ng-template", 13),
                t.YNc(9, Io, 1, 2, "ng-template", 11),
                t.qZA(),
                t.TgZ(10, "ngx-datatable-column", 14),
                t.ALo(11, "translate"),
                t.YNc(12, Jo, 6, 12, "ng-template", 13),
                t.YNc(13, Yo, 1, 2, "ng-template", 11),
                t.qZA(),
                t.TgZ(14, "ngx-datatable-column", 15),
                t.ALo(15, "translate"),
                t.YNc(16, Ho, 6, 6, "ng-template", 13),
                t.YNc(17, Vo, 2, 2, "ng-template", 11),
                t.qZA(),
                t.TgZ(18, "ngx-datatable-column", 16),
                t.ALo(19, "translate"),
                t.YNc(20, Go, 6, 6, "ng-template", 13),
                t.YNc(21, jo, 1, 5, "ng-template", 11),
                t.qZA(),
                t.TgZ(22, "ngx-datatable-column", 17),
                t.ALo(23, "translate"),
                t.YNc(24, Ko, 6, 6, "ng-template", 13),
                t.YNc(25, Wo, 1, 2, "ng-template", 11),
                t.qZA(),
                t.TgZ(26, "ngx-datatable-column", 12),
                t.ALo(27, "translate"),
                t.YNc(28, Xo, 6, 9, "ng-template", 13),
                t.YNc(29, na, 1, 2, "ng-template", 11),
                t.qZA(),
                t.TgZ(30, "ngx-datatable-column", 18),
                t.ALo(31, "translate"),
                t.YNc(32, ea, 6, 9, "ng-template", 13),
                t.YNc(33, aa, 1, 2, "ng-template", 11),
                t.qZA(),
                t.TgZ(34, "ngx-datatable-column", 12),
                t.ALo(35, "translate"),
                t.YNc(36, ia, 5, 6, "ng-template", 13),
                t.YNc(37, ca, 1, 2, "ng-template", 11),
                t.qZA(),
                t.TgZ(38, "ngx-datatable-column", 19),
                t.YNc(39, la, 5, 6, "ng-template", 13),
                t.YNc(40, da, 1, 2, "ng-template", 11),
                t.qZA(),
                t.TgZ(41, "ngx-datatable-column", 20),
                t.YNc(42, ga, 8, 24, "ng-template", 11),
                t.qZA(),
                t.TgZ(43, "ngx-datatable-column", 21),
                t.ALo(44, "translate"),
                t.YNc(45, _a, 8, 10, "ng-template", 11),
                t.qZA(),
                t.YNc(46, Ca, 2, 0, "ngx-datatable-footer", 22),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw();
                t.Q6J("@toggleAnimation", n.loading)("sorts", n.defaultSort)("trackByProp", "id")("scrollbarV", !1)("scrollbarH", !0)("count", n.pairList.length)("footerHeight", n.footerHeight)("headerHeight", n.headerHeight)("rows", n.pairList)("limit", n.maxRowsTable)("externalSorting", !0)("rowHeight", n.rowHeight)("messages", t.VKq(104, ua, t.lcZ(2, 81, "pair_list.not_found"))),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 150)("minWidth", 150)("name", t.lcZ(4, 83, "pair_list.pair_info"))("prop", "symbol")("frozenLeft", !0)("sortable", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 110)("minWidth", 110)("name", t.lcZ(7, 85, "pair_list.price_24"))("prop", "price")("sortable", !0),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", 95)("minWidth", 95)("name", t.xi3(11, 87, "pair_list.change", t.VKq(106, ft, n.intervalSelected)))("sortable", !0),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", 90)("minWidth", 90)("name", t.lcZ(15, 90, "pair_list.dext_score"))("sortable", !0),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", 110)("minWidth", 110)("name", t.lcZ(19, 92, "pair_list.contract"))("sortable", !1),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", 90)("minWidth", 90)("name", t.lcZ(23, 94, "pair_list.created"))("sortable", !0)("prop", "creationTime"),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", 95)("minWidth", 95)("name", t.lcZ(27, 96, "pair_list.volume_24"))("prop", "volume")("sortable", !0),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", 100)("minWidth", 100)("name", t.lcZ(31, 98, "pair_list.swaps_24"))("sortable", !0)("prop", "swaps"),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", 95)("minWidth", 95)("name", t.lcZ(35, 100, "pair_list.total_liquidity"))("prop", "liquidity")("sortable", !0),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", 95)("minWidth", 95)("sortable", !0)("prop", "totalMarketCap"),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 60)("minWidth", 60)("prop", "exchange")("sortable", !0),
                t.xp6(2),
                t.Q6J("resizeable", !1)("sortable", !1)("minWidth", 100)("width", 100)("name", t.lcZ(44, 102, "pair_list.actions")),
                t.xp6(3),
                t.Q6J("ngIf", n.pairList.length > 0)
            }
        }
        function Ma(e, a) {
            1 & e && (t.TgZ(0, "span"),
            t._uU(1, "-"),
            t.qZA())
        }
        function Oa(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "app-panel-component", 62),
                t.NdJ("panelClosed", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return t.KtG(i.closeBinocularsPanel())
                }),
                t.TgZ(1, "app-token-pairs", 63),
                t.NdJ("pairsSearchByTokenClosed", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.pairSearchToken(i))
                })("containerWidthChanged", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.changeBinocularsType(i))
                }),
                t.qZA()()
            }
            if (2 & e) {
                const n = t.oxw();
                t.Q6J("backdrop", !0)("closeHidden", !0)("showHeader", !1)("isResizable", !0)("fullScreenEnabled", n.fullScreenPanel)("closeEnabled", n.closePanelEnabled),
                t.xp6(1),
                t.Q6J("chain", n.tokenSearchChain)("tokenId", n.tokenSearchId)
            }
        }
        function Pa(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "app-panel-component", 64),
                t.NdJ("panelClosed", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return t.KtG(i.closeBinocularsPanel())
                }),
                t.TgZ(1, "app-token-pairs", 65),
                t.NdJ("pairsSearchByTokenClosed", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.pairSearchToken(i))
                }),
                t.qZA()()
            }
            if (2 & e) {
                const n = t.oxw();
                t.Q6J("backdrop", !0)("closeHidden", !0)("showHeader", !1)("closeEnabled", n.closePanelEnabled)("enableScrollOnClose", !1),
                t.xp6(1),
                t.Q6J("chain", n.tokenSearchChain)("tokenId", n.tokenSearchId)("activeScroll", !1)
            }
        }
        function xa(e, a) {
            1 & e && t._UZ(0, "app-icon", 66),
            2 & e && t.Q6J("width", 6)
        }
        function wa(e, a) {
            1 & e && t._UZ(0, "app-icon", 67),
            2 & e && t.Q6J("width", 6)
        }
        let ka = (()=>{
            class e extends d.K9 {
                onResize() {
                    this._recalculate()
                }
                set pairList(n) {
                    this._pairList = n,
                    this._tableSort(),
                    this._recalculate(),
                    this._stopTimer(),
                    this._pairList.length > 0 && this._startTimer()
                }
                get pairList() {
                    return this._pairList
                }
                constructor(n, o, i, r, c) {
                    super(),
                    this._cdRef = n,
                    this.config = o,
                    this._breakpointObserver = i,
                    this._routingService = r,
                    this._environment = c,
                    this._pairList = [],
                    this.totalCount = 0,
                    this.ChainPage = tt.$,
                    this.loading = !0,
                    this.toggleTokenPairs = !1,
                    this.defaultSort = [{
                        prop: "swaps",
                        dir: "desc"
                    }],
                    this.pageChanged = new t.vpe,
                    this.exchangeChanged = new t.vpe,
                    this.fullScreenPanel = !1,
                    this.closePanelEnabled = !1,
                    this.headerHeight = 50,
                    this.footerHeight = 80,
                    this.rowHeight = 60,
                    this.maxRowsTable = 50,
                    this.mediaDevice = "",
                    this.dateNow = Date.now(),
                    this._nowInterval = null,
                    this.appContext = this._environment.app_scope,
                    this.rowHover = null,
                    this.config.container = "body"
                }
                ngOnInit() {
                    this._breakpointObserver.observe([_.K5, _.mT]).pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this.mediaDevice = n.breakpoints[_.K5] ? "mobileTablet" : "desktop",
                        this._cdRef.detectChanges(),
                        this._recalculate()
                    }
                    )
                }
                selectExchange(n) {
                    this.exchangeChanged.emit(n)
                }
                copyText(n, o, i, r) {
                    n.stopPropagation();
                    const c = s.LJP.getPublicAddress(o, i);
                    (0,
                    _.vQ)(c, r)
                }
                _recalculate() {
                    if (this.table) {
                        const n = this.headerHeight + this.footerHeight + this.rowHeight * this._pairList.length
                          , o = document.querySelector(".material");
                        o && (o.style.maxHeight = `${n}px`),
                        this.table.recalculate(),
                        this._cdRef.detectChanges()
                    }
                }
                pairSearchToken(n) {
                    this.closePanelEnabled = !0,
                    "no results" !== n && "close" !== n && this._routingService.navigate(`/${n.chain}/${tt.$.PairExplorer}/${n.id}`)
                }
                changeToggleTokenPairs(n) {
                    this.tokenSearchId = n.idToken,
                    this.tokenSearchChain = n.chain,
                    this.toggleTokenPairs = !this.toggleTokenPairs,
                    this._cdRef.detectChanges()
                }
                onDestroy() {
                    this._stopTimer()
                }
                sortList() {
                    this._tableSort(),
                    this._recalculate()
                }
                _tableSort() {
                    if (this.table && this.table.sorts && this.table.sorts.length > 0) {
                        const n = this.table.sorts[0].prop;
                        this._pairList = [...this._pairList].sort((o,i)=>{
                            if ("number" == typeof o[n]) {
                                const r = o[n]
                                  , c = i[n];
                                return "asc" === this.table.sorts[0].dir ? r - c : c - r
                            }
                            {
                                const r = (o[this.table.sorts[0].prop] ?? "").toLowerCase()
                                  , c = (i[this.table.sorts[0].prop] ?? "").toLowerCase();
                                return "asc" === this.table.sorts[0].dir ? r < c ? -1 : r > c ? 1 : 0 : r > c ? -1 : r < c ? 1 : 0
                            }
                        }
                        )
                    }
                }
                closeBinocularsPanel() {
                    this.toggleTokenPairs = !1,
                    this.closePanelEnabled = !1,
                    this.fullScreenPanel = !1,
                    this._cdRef.detectChanges()
                }
                changeBinocularsType(n) {
                    this.fullScreenPanel = "full" === n
                }
                getDextScoreValue(n) {
                    return s.DvC.parseDextScoreTotal(n)
                }
                _startTimer() {
                    this._nowInterval = setInterval(()=>{
                        this.dateNow = Date.now(),
                        this._cdRef.detectChanges()
                    }
                    , 1e3)
                }
                _stopTimer() {
                    this._nowInterval && clearInterval(this._nowInterval)
                }
                onRowClicked(n) {
                    if (n.event.stopPropagation(),
                    "click" === n.type)
                        return this._routingService.navigate(`/${n.row.chain}/${tt.$.PairExplorer}/${n.row.id}`);
                    "mouseenter" === n.type && this.setRowHover(n.row.id)
                }
                navigateToPairExplorer(n, o) {
                    n.stopPropagation();
                    const i = `/${o.chain}/${tt.$.PairExplorer}/${o.id}`;
                    return n.ctrlKey || n.metaKey ? this._routingService.windowNavigate(i, "_blank", "noopener") : this._routingService.navigate(i)
                }
                getPairExplorerURLWithLanguage(n) {
                    return this._routingService.setLanguageToURL(`/${n.chain}/${tt.$.PairExplorer}/${n.id}`)
                }
                stopClickPropagation(n) {
                    n.stopPropagation()
                }
                parseFav(n) {
                    return {
                        pair: n.id,
                        symbol: n.symbol ?? "",
                        name: n.symbol ?? "",
                        isStableNativePair: n.isStableNativePair ?? !1,
                        exchange: n.exchange ?? "",
                        updatedAt: Date.now(),
                        createdAt: Date.now(),
                        logo: n.logo,
                        symbolRef: n.symbol_vs ?? "",
                        price: n.price,
                        price24h: n.price24h,
                        chain: n.chain
                    }
                }
                getFollowRel(n) {
                    return (n?.dextScore ?? 1) < s.V41 ? "nofollow" : null
                }
                setRowHover(n) {
                    this.rowHover = n,
                    this._cdRef.detectChanges()
                }
                changePage(n) {
                    "next" === n && this.pageChanged.emit(this.paramsFilter.page + 1),
                    "previous" === n && this.pageChanged.emit(this.paramsFilter.page - 1)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(t.sBO),t.Y36(et.xI),t.Y36(y.Yg),t.Y36(w.Zn),t.Y36(w.qA))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-pair-list"]],
                viewQuery: function(n, o) {
                    if (1 & n && t.Gf(To, 5),
                    2 & n) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.table = i.first)
                    }
                },
                hostBindings: function(n, o) {
                    1 & n && t.NdJ("resize", function() {
                        return o.onResize()
                    }, !1, t.Jf7)
                },
                inputs: {
                    pairList: "pairList",
                    intervalSelected: "intervalSelected",
                    paramsFilter: "paramsFilter",
                    totalCount: "totalCount",
                    loading: "loading",
                    defaultSort: "defaultSort"
                },
                outputs: {
                    pageChanged: "pageChanged",
                    exchangeChanged: "exchangeChanged"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 10,
                vars: 4,
                consts: [["class", "table-loading", 3, "appLoading", 4, "ngIf"], ["class", "material", "columnMode", "force", 3, "sorts", "trackByProp", "scrollbarV", "scrollbarH", "count", "footerHeight", "headerHeight", "rows", "limit", "externalSorting", "rowHeight", "messages", "sort", "activate", "mouseleave", 4, "ngIf"], ["noData", ""], [3, "backdrop", "closeHidden", "showHeader", "isResizable", "fullScreenEnabled", "closeEnabled", "panelClosed", 4, "ngIf"], [3, "backdrop", "closeHidden", "showHeader", "closeEnabled", "enableScrollOnClose", "panelClosed", 4, "ngIf"], ["variationUp", ""], ["variationDown", ""], [1, "table-loading", 3, "appLoading"], ["columnMode", "force", 1, "material", 3, "sorts", "trackByProp", "scrollbarV", "scrollbarH", "count", "footerHeight", "headerHeight", "rows", "limit", "externalSorting", "rowHeight", "messages", "sort", "activate", "mouseleave"], ["pairListTable", ""], [3, "resizeable", "width", "minWidth", "name", "prop", "frozenLeft", "sortable"], ["ngx-datatable-cell-template", ""], ["headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "width", "minWidth", "name", "prop", "sortable"], ["ngx-datatable-header-template", ""], ["prop", "priceVariation", "headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "width", "minWidth", "name", "sortable"], ["prop", "dextScore", "headerClass", "center-column-table", "cellClass", "center-column-table", 3, "resizeable", "width", "minWidth", "name", "sortable"], [3, "resizeable", "width", "minWidth", "name", "sortable"], [3, "resizeable", "width", "minWidth", "name", "sortable", "prop"], ["headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "width", "minWidth", "name", "sortable", "prop"], ["name", "totalMarketCap", "headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "width", "minWidth", "sortable", "prop"], ["name", "DEX", "headerClass", "center-column-table", "cellClass", "center-column-table", 3, "resizeable", "width", "minWidth", "prop", "sortable"], ["headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "sortable", "minWidth", "width", "name"], [4, "ngIf"], [1, "pair-info-container"], [1, "pair-info"], [1, "pair-symbol-container"], [3, "symbol", "name", "chain", "address", "logoUrl"], [3, "href", "click"], [3, "tokenRight", "tokenLeft", "isLink"], [1, "token-id"], ["href", "javascript:", "placement", "auto", 1, "copy", 3, "ngbTooltip", "click"], ["t1", "ngbTooltip"], ["icon", "copy"], [1, "sort", 3, "click"], ["icon", "info-circle", 1, "info-icon", 3, "ngbTooltip"], ["class", "data-badge", 4, "ngIf", "ngIfElse"], [1, "data-badge"], [4, "ngIf", "ngIfElse"], [3, "ngClass"], ["variationTm", ""], [3, "ngTemplateOutlet", 4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [3, "dextScore", "index", 4, "ngIf"], [3, "dextScore", "index"], [3, "activeTitle", "isAdmin", "activeLabel", "tokenAudit", "tokenName"], ["placement", "auto", 1, "exchange", 3, "ngbTooltip", "disableTooltip", "click"], ["loading", "lazy", 1, "exchange-img", 3, "src", "alt"], ["loading", "lazy", 1, "chain-img", 3, "src", "alt"], [1, "actions"], ["placement", "auto", "href", "javascript:", 3, "ngbTooltip", "click"], ["icon", "binoculars"], ["placement", "auto", 3, "href", "ngbTooltip", "click"], ["name", "pairExplorer", 3, "width"], [3, "item"], ["ngx-datatable-footer-template", ""], [1, "pagination-buttons"], [3, "click", 4, "ngIf"], ["class", "page", 4, "ngIf"], [3, "click"], ["icon", "chevron-left"], [1, "page"], ["icon", "chevron-right"], [3, "backdrop", "closeHidden", "showHeader", "isResizable", "fullScreenEnabled", "closeEnabled", "panelClosed"], [3, "chain", "tokenId", "pairsSearchByTokenClosed", "containerWidthChanged"], [3, "backdrop", "closeHidden", "showHeader", "closeEnabled", "enableScrollOnClose", "panelClosed"], [3, "chain", "tokenId", "activeScroll", "pairsSearchByTokenClosed"], ["name", "variationUp", 3, "width"], ["name", "variationDown", 3, "width"]],
                template: function(n, o) {
                    1 & n && (t.YNc(0, Lo, 1, 1, "div", 0),
                    t.YNc(1, ba, 47, 108, "ngx-datatable", 1),
                    t.YNc(2, Ma, 2, 0, "ng-template", null, 2, t.W1O),
                    t.YNc(4, Oa, 2, 8, "app-panel-component", 3),
                    t.YNc(5, Pa, 2, 8, "app-panel-component", 4),
                    t.YNc(6, xa, 1, 1, "ng-template", null, 5, t.W1O),
                    t.YNc(8, wa, 1, 1, "ng-template", null, 6, t.W1O)),
                    2 & n && (t.Q6J("ngIf", !!o.loading),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.loading),
                    t.xp6(3),
                    t.Q6J("ngIf", o.toggleTokenPairs && "desktop" === o.mediaDevice),
                    t.xp6(1),
                    t.Q6J("ngIf", o.toggleTokenPairs && "mobileTablet" === o.mediaDevice))
                },
                dependencies: [b.O5, _.TH, ot.xD, ot.nE, ot.UC, ot.tk, ot.vq, ot.ii, ot.dX, Nt.T, Yt.m, et._L, G.uH, G.BN, b.mk, b.tP, yo.U, vo.G, xt.lQ, ko.t, _.yX, wo.B, B.Bl, B.$n, B.yl, B.pt, B.WA, f.aw, f.X$, s.xic, s.Wu7, s.P5T, s.$a1, s.jUi, s.nGv, B.pT],
                styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .ngx-datatable.material{max-height:3130px;width:100%}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important;border-color:#f4f5f6!important;border-bottom:none;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028;background-color:#f4f5f6!important;border-color:#e1e5eb!important;font-weight:500;border-bottom:.0625rem solid;border-top:.0625rem solid}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#fff}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:none;width:0}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell .datatable-icon-sort-unset:before, [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell sort-btn:before{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell .datatable-icon-down:before{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell .datatable-icon-up:before{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-cell{display:flex;align-items:center;line-height:1}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row:hover .pair-info-container .token-name, [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row:focus .pair-info-container .token-name{color:#00b8d8!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028;font-size:14px;border-color:#e1e5eb!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028;border-color:#f4f5f6;background-color:#fff!important;background-image:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#142028}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#f4f5f6}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#0b1217!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#0b1217!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028;border-color:#f4f5f6;background-color:#fff!important;background-image:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#142028}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#f4f5f6}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#0b1217!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#0b1217!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#fff!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#fff!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer{border-top:none;padding:0}@media (max-width: 1023px){[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer{margin-top:.625rem}}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .page-count{display:none}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager{height:auto;margin:0}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{border-radius:3.125rem;width:1.6875rem;height:1.6875rem;font-weight:400!important;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#142028}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#f4f5f6}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#f4f5f6}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#f4f5f6!important;color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#142028!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3;opacity:.2}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-footer-inner{white-space:nowrap}@media (max-width: 1023px){[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-footer-inner{display:flex;flex-direction:column;align-items:center;overflow:hidden;text-align:center}}.pair-info-container[_ngcontent-%COMP%]{cursor:pointer;max-width:10.3125rem}.pair-info-container[_ngcontent-%COMP%]   .pair-info[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:flex;align-items:center;align-content:center}.pair-info-container[_ngcontent-%COMP%]   .pair-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{overflow:hidden;display:flex;text-overflow:ellipsis;align-items:center;color:#142028;text-decoration:none}body.dark-theme   [_nghost-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .pair-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .pair-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .pair-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .pair-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}.pair-info-container[_ngcontent-%COMP%]   .pair-info[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]{position:relative;width:1.375rem;height:1.375rem;margin-right:.4375rem}.pair-info-container[_ngcontent-%COMP%]   .token-id[_ngcontent-%COMP%]{margin-left:1.75rem;font-size:14px}.pair-info-container[_ngcontent-%COMP%]   .token-id[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:.6875rem;margin-left:.125rem;text-decoration:none}.pair-info-container[_ngcontent-%COMP%]   .symbol-vs[_ngcontent-%COMP%]{font-size:13px;font-weight:400;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .symbol-vs[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .symbol-vs[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .symbol-vs[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .symbol-vs[_ngcontent-%COMP%]{color:#818ea3}.pair-info-container[_ngcontent-%COMP%]   .symbol-separate[_ngcontent-%COMP%]{margin:0 .125rem;font-size:12px;font-weight:400;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .symbol-separate[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .symbol-separate[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .symbol-separate[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .symbol-separate[_ngcontent-%COMP%]{color:#818ea3}.pair-info-container[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-weight:500;font-size:14px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]{color:#142028}.pair-info-container[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]:hover, .pair-info-container[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]:focus{color:#00b8d8!important}.exchange[_ngcontent-%COMP%]{display:flex;gap:.375rem;align-items:center;position:relative;cursor:pointer}.exchange[_ngcontent-%COMP%]   .exchange-img[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;border-radius:3.125rem;background-color:#fff}.exchange[_ngcontent-%COMP%]   .chain-img[_ngcontent-%COMP%]{width:.875rem;height:.875rem;border-radius:3.125rem;background-color:#fff;position:absolute;top:-.25rem;left:.9375rem}.data-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.3125rem;text-align:right}.data-badge[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%]{color:#ea3943;font-size:14px}.data-badge[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]{color:#17c671;font-size:14px}.data-badge[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#142028;font-size:14px}body.dark-theme   [_nghost-%COMP%]   .data-badge[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .data-badge[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .data-badge[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .data-badge[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#142028}.actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1.25rem;cursor:pointer}.actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.0625rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#00b8d8!important}.actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#142028}body.dark-theme   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#fff}body.dark-theme[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#fff}body.light   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#142028}body.light[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#142028}.actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    :hover, .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    :focus{color:#00b8d8}.copy[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .copy[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .copy[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%]{color:#142028}app-line-chart[_ngcontent-%COMP%]     .line-chart-container svg  {border-radius:0!important}.footer-count[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .footer-count[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .footer-count[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .footer-count[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .footer-count[_ngcontent-%COMP%]{color:#818ea3}.table-loading[_ngcontent-%COMP%]{height:31.25rem;position:relative}.table-loading   [_nghost-%COMP%]     dxt-loading{top:30%}.info-icon[_ngcontent-%COMP%]{font-size:12px;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]       .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#142028!important;padding:.75rem .25rem .75rem .5rem}body.dark-theme   [_nghost-%COMP%]       .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{border-color:#142028!important}app-dext-score-chart[_ngcontent-%COMP%]     .dext-score-component{padding:0!important}app-dext-score-chart[_ngcontent-%COMP%]     .dext-score-component svg{height:3.75rem!important;width:3.125rem!important}app-dext-score-chart[_ngcontent-%COMP%]     .dext-score-component .progress-container .dext-value{font-size:14px!important;top:1.75rem!important}app-contract-details[_ngcontent-%COMP%]     .dext-audcontract .dext-audcontract-icons{gap:.5rem!important}.sort[_ngcontent-%COMP%]{background:none;border:none;color:#142028;padding:0;font-size:13px;font-weight:500}body.dark-theme   [_nghost-%COMP%]   .sort[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .sort[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]{color:#142028}.pagination-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;width:100%;gap:.25rem}@media (max-width: 599px){.pagination-buttons[_ngcontent-%COMP%]{justify-content:center}}.pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;color:#142028;font-size:14px;display:flex;align-items:center;gap:.25rem}body.dark-theme   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#142028}.pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{color:#142028;font-size:14px;background-color:#f4f5f6;border-radius:3.125rem;display:flex;align-items:center;justify-content:center;padding:.25rem .75rem}body.dark-theme   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{background-color:#f4f5f6}"],
                data: {
                    animation: [(0,
                    N.X$)("toggleAnimation", [(0,
                    N.SB)("in", (0,
                    N.oB)({
                        opacity: 1
                    })), (0,
                    N.eR)(":enter", [(0,
                    N.oB)({
                        opacity: 0
                    }), (0,
                    N.jt)(600)]), (0,
                    N.eR)(":leave", (0,
                    N.jt)(200, (0,
                    N.oB)({
                        opacity: 0
                    })))])]
                },
                changeDetection: 0
            }),
            e
        }
        )();
        const va = ["exchangeListTable"];
        function ya(e, a) {
            if (1 & e && t._UZ(0, "div", 3),
            2 & e) {
                const n = t.oxw();
                t.Q6J("appLoading", !!n.loading)
            }
        }
        function Ta(e, a) {
            if (1 & e && (t.TgZ(0, "div", 12)(1, "img", 13),
            t.ALo(2, "exchangeLogoStyles"),
            t.qZA(),
            t._UZ(3, "img", 14),
            t.TgZ(4, "span"),
            t._uU(5),
            t.ALo(6, "appSafe"),
            t.qZA()()),
            2 & e) {
                const n = a.row;
                t.xp6(1),
                t.Akn(t.xi3(2, 8, n.exchange, n.chain)),
                t.Q6J("src", n.exchangeLogo, t.LSH)("alt", n.exchange),
                t.xp6(2),
                t.s9C("alt", n.chain + " logo"),
                t.Q6J("src", n.chainLogo, t.LSH),
                t.xp6(2),
                t.AsE("", t.lcZ(6, 11, n.exchangeName), " ", n.exchangeVersion, "")
            }
        }
        function La(e, a) {
            if (1 & e && (t.TgZ(0, "div")(1, "span"),
            t._uU(2),
            t.ALo(3, "appRoundNumber"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw().row;
                t.xp6(2),
                t.hij(" ", t.Dn7(3, 1, n.pairs, void 0, 0), "")
            }
        }
        function Za(e, a) {
            if (1 & e && t.YNc(0, La, 4, 5, "div", 15),
            2 & e) {
                const n = a.row;
                t.oxw(2);
                const o = t.MAs(3);
                t.Q6J("ngIf", !!n.pairs)("ngIfElse", o)
            }
        }
        function Aa(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "span", 16),
                t.NdJ("click", function() {
                    const r = t.CHM(n).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "fa-icon", 17),
                t.ALo(5, "translate"),
                t.qZA()
            }
            2 & e && (t.xp6(2),
            t.hij("", t.lcZ(3, 2, "pair_list.volume_24"), " 24h"),
            t.xp6(2),
            t.Q6J("ngbTooltip", t.lcZ(5, 4, "exchange_list.volume")))
        }
        function Sa(e, a) {
            if (1 & e && (t.TgZ(0, "div")(1, "span"),
            t._uU(2),
            t.ALo(3, "appRoundNumber"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw().row;
                t.xp6(2),
                t.hij(" $", t.lcZ(3, 1, n.volume), "")
            }
        }
        function Fa(e, a) {
            if (1 & e && t.YNc(0, Sa, 4, 3, "div", 15),
            2 & e) {
                const n = a.row;
                t.oxw(2);
                const o = t.MAs(3);
                t.Q6J("ngIf", !!n.volume)("ngIfElse", o)
            }
        }
        function Ia(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "span", 16),
                t.NdJ("click", function() {
                    const r = t.CHM(n).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "fa-icon", 17),
                t.ALo(5, "translate"),
                t.qZA()
            }
            2 & e && (t.xp6(2),
            t.hij("", t.lcZ(3, 2, "pair_list.swaps_24"), " 24h"),
            t.xp6(2),
            t.Q6J("ngbTooltip", t.lcZ(5, 4, "exchange_list.swaps")))
        }
        function Ja(e, a) {
            if (1 & e && (t.TgZ(0, "div")(1, "span"),
            t._uU(2),
            t.ALo(3, "appRoundNumber"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw().row;
                t.xp6(2),
                t.Oqu(t.Dn7(3, 1, n.swaps, void 0, 0))
            }
        }
        function Na(e, a) {
            if (1 & e && t.YNc(0, Ja, 4, 5, "div", 15),
            2 & e) {
                const n = a.row;
                t.oxw(2);
                const o = t.MAs(3);
                t.Q6J("ngIf", n.swaps)("ngIfElse", o)
            }
        }
        function Da(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 22),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(4);
                    return t.KtG(i.changePage("previous"))
                }),
                t._UZ(1, "fa-icon", 23),
                t.TgZ(2, "span"),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA()()
            }
            2 & e && (t.xp6(3),
            t.Oqu(t.lcZ(4, 1, "exchange_list.previous")))
        }
        function Qa(e, a) {
            if (1 & e && (t.TgZ(0, "span", 24),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw(4);
                t.xp6(1),
                t.Oqu(n.paramsFilter.page)
            }
        }
        function Ea(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 22),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(4);
                    return t.KtG(i.changePage("next"))
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "fa-icon", 25),
                t.qZA()
            }
            2 & e && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "exchange_list.next")))
        }
        function Ua(e, a) {
            if (1 & e && (t.TgZ(0, "div", 19),
            t.YNc(1, Da, 5, 3, "button", 20),
            t.YNc(2, Qa, 2, 1, "span", 21),
            t.YNc(3, Ea, 5, 3, "button", 20),
            t.qZA()),
            2 & e) {
                const n = t.oxw(3);
                t.xp6(1),
                t.Q6J("ngIf", 1 !== n.paramsFilter.page),
                t.xp6(1),
                t.Q6J("ngIf", !(1 === n.paramsFilter.page && n.totalCount !== n.paramsFilter.limit)),
                t.xp6(1),
                t.Q6J("ngIf", n.totalCount === n.paramsFilter.limit)
            }
        }
        function qa(e, a) {
            1 & e && (t.TgZ(0, "ngx-datatable-footer"),
            t.YNc(1, Ua, 4, 3, "ng-template", 18),
            t.qZA())
        }
        const Ya = function(e) {
            return {
                emptyMessage: e
            }
        };
        function Ha(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "ngx-datatable", 4, 5),
                t.NdJ("sort", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return t.KtG(i.sortList())
                })("activate", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.onExchangeClick(i))
                }),
                t.ALo(2, "translate"),
                t.TgZ(3, "ngx-datatable-column", 6),
                t.ALo(4, "translate"),
                t.YNc(5, Ta, 7, 13, "ng-template", 7),
                t.qZA(),
                t.TgZ(6, "ngx-datatable-column", 8),
                t.YNc(7, Za, 1, 2, "ng-template", 7),
                t.qZA(),
                t.TgZ(8, "ngx-datatable-column", 8),
                t.ALo(9, "translate"),
                t.YNc(10, Aa, 6, 6, "ng-template", 9),
                t.YNc(11, Fa, 1, 2, "ng-template", 7),
                t.qZA(),
                t.TgZ(12, "ngx-datatable-column", 10),
                t.ALo(13, "translate"),
                t.YNc(14, Ia, 6, 6, "ng-template", 9),
                t.YNc(15, Na, 1, 2, "ng-template", 7),
                t.qZA(),
                t.YNc(16, qa, 2, 0, "ngx-datatable-footer", 11),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw();
                t.Q6J("@toggleAnimation", n.loading)("sorts", n.defaultSorts)("trackByProp", "exchange")("scrollbarV", !1)("scrollbarH", !0)("count", n.exchangeList.length)("footerHeight", n.footerHeight)("headerHeight", n.headerHeight)("rows", n.exchangeList)("limit", n.maxRowsTable)("externalSorting", !0)("rowHeight", n.rowHeight)("messages", t.VKq(47, Ya, t.lcZ(2, 39, "pair_list.not_found"))),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 140)("minWidth", 140)("name", t.lcZ(4, 41, "pair_list.exchange"))("prop", "exchangeName")("sortable", !0)("frozenLeft", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 140)("minWidth", 140)("name", "Pools")("prop", "pairs")("sortable", !0),
                t.xp6(2),
                t.Q6J("resizeable", !1)("width", 140)("minWidth", 140)("name", t.lcZ(9, 43, "pair_list.volume_24"))("prop", "volume")("sortable", !0),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", 140)("minWidth", 140)("name", t.lcZ(13, 45, "pair_list.swaps_24"))("sortable", !0)("prop", "swaps"),
                t.xp6(4),
                t.Q6J("ngIf", n.exchangeList.length > 0)
            }
        }
        function za(e, a) {
            1 & e && (t.TgZ(0, "span"),
            t._uU(1, "-"),
            t.qZA())
        }
        let Ra = (()=>{
            class e extends d.K9 {
                onResize() {
                    this._recalculate()
                }
                set exchangeList(n) {
                    this._exchangeList = n,
                    this._tableSort(),
                    this._recalculate()
                }
                get exchangeList() {
                    return this._exchangeList
                }
                constructor(n, o, i) {
                    super(),
                    this._cdRef = n,
                    this._breakpointObserver = o,
                    this.config = i,
                    this.exchangeSelected = new t.vpe,
                    this.pageChanged = new t.vpe,
                    this.sortChanged = new t.vpe,
                    this.loading = !1,
                    this._exchangeList = [],
                    this.defaultSorts = [],
                    this.headerHeight = 50,
                    this.footerHeight = 90,
                    this.rowHeight = 60,
                    this.maxRowsTable = 50,
                    this.ChainPage = tt.$,
                    this.totalCount = 0,
                    this.config.container = "body"
                }
                ngOnInit() {
                    this._breakpointObserver.observe([_.K5, _.mT]).pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this._recalculate()
                    }
                    )
                }
                _recalculate() {
                    if (this.table) {
                        const n = this.headerHeight + this.footerHeight + this.rowHeight * this._exchangeList.length
                          , o = document.querySelector(".material");
                        o && (o.style.maxHeight = `${n}px`),
                        this.table.recalculate(),
                        this._cdRef.detectChanges()
                    }
                }
                sortList() {
                    this.table && this.table.sorts[0].prop && ["pairs", "volume", "swaps", "tvl"].includes(this.table.sorts[0].prop) ? this.sortChanged.emit({
                        prop: this.table.sorts[0].prop ?? "swaps",
                        dir: this.table.sorts[0].dir ?? "desc"
                    }) : (this._tableSort(),
                    this._recalculate())
                }
                _tableSort() {
                    if (this.table && this.table.sorts && this.table.sorts.length > 0) {
                        const n = this.table.sorts[0].prop;
                        this._exchangeList = [...this._exchangeList].sort((o,i)=>{
                            if ("number" == typeof o[n]) {
                                const r = o[n]
                                  , c = i[n];
                                return "asc" === this.table.sorts[0].dir ? r - c : c - r
                            }
                            {
                                const r = (o[this.table.sorts[0].prop] ?? "").toLowerCase()
                                  , c = (i[this.table.sorts[0].prop] ?? "").toLowerCase();
                                return "asc" === this.table.sorts[0].dir ? r < c ? -1 : r > c ? 1 : 0 : r > c ? -1 : r < c ? 1 : 0
                            }
                        }
                        )
                    }
                }
                onDestroy() {}
                changePage(n) {
                    "next" === n && this.pageChanged.emit(this.paramsFilter.page + 1),
                    "previous" === n && this.pageChanged.emit(this.paramsFilter.page - 1)
                }
                onExchangeClick(n) {
                    "click" === n.type && this.exchangeSelected.emit({
                        exchange: n.row.exchangeSlug,
                        chain: n.row.chain
                    })
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(t.sBO),t.Y36(y.Yg),t.Y36(et.xI))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-exchanges-list"]],
                viewQuery: function(n, o) {
                    if (1 & n && t.Gf(va, 5),
                    2 & n) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.table = i.first)
                    }
                },
                hostBindings: function(n, o) {
                    1 & n && t.NdJ("resize", function() {
                        return o.onResize()
                    }, !1, t.Jf7)
                },
                inputs: {
                    paramsFilter: "paramsFilter",
                    loading: "loading",
                    exchangeList: "exchangeList",
                    defaultSorts: "defaultSorts",
                    totalCount: "totalCount"
                },
                outputs: {
                    exchangeSelected: "exchangeSelected",
                    pageChanged: "pageChanged",
                    sortChanged: "sortChanged"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 4,
                vars: 2,
                consts: [["class", "table-loading", 3, "appLoading", 4, "ngIf"], ["class", "material", "columnMode", "force", 3, "sorts", "trackByProp", "scrollbarV", "scrollbarH", "count", "footerHeight", "headerHeight", "rows", "limit", "externalSorting", "rowHeight", "messages", "sort", "activate", 4, "ngIf"], ["noData", ""], [1, "table-loading", 3, "appLoading"], ["columnMode", "force", 1, "material", 3, "sorts", "trackByProp", "scrollbarV", "scrollbarH", "count", "footerHeight", "headerHeight", "rows", "limit", "externalSorting", "rowHeight", "messages", "sort", "activate"], ["exchangeListTable", ""], [3, "resizeable", "width", "minWidth", "name", "prop", "sortable", "frozenLeft"], ["ngx-datatable-cell-template", ""], ["headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "width", "minWidth", "name", "prop", "sortable"], ["ngx-datatable-header-template", ""], ["headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "width", "minWidth", "name", "sortable", "prop"], [4, "ngIf"], [1, "exchange"], ["loading", "lazy", 1, "exchange-img", 3, "src", "alt"], ["loading", "lazy", 1, "chain-img", 3, "src", "alt"], [4, "ngIf", "ngIfElse"], [1, "sort-pointer", 3, "click"], ["icon", "info-circle", 1, "info-icon", 3, "ngbTooltip"], ["ngx-datatable-footer-template", ""], [1, "pagination-buttons"], [3, "click", 4, "ngIf"], ["class", "page", 4, "ngIf"], [3, "click"], ["icon", "chevron-left"], [1, "page"], ["icon", "chevron-right"]],
                template: function(n, o) {
                    1 & n && (t.YNc(0, ya, 1, 1, "div", 0),
                    t.YNc(1, Ha, 17, 49, "ngx-datatable", 1),
                    t.YNc(2, za, 2, 0, "ng-template", null, 2, t.W1O)),
                    2 & n && (t.Q6J("ngIf", !!o.loading),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.loading))
                },
                dependencies: [b.O5, _.TH, ot.xD, ot.nE, ot.UC, ot.tk, ot.vq, ot.ii, ot.dX, G.uH, G.BN, et._L, B.yl, B.WA, f.aw, f.X$, s.$a1],
                styles: [".table-loading[_ngcontent-%COMP%]{height:31.25rem;position:relative}.table-loading   [_nghost-%COMP%]     dxt-loading{top:30%}[_nghost-%COMP%]     .ngx-datatable.material{max-height:3130px;width:100%}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important;border-color:#f4f5f6!important;border-bottom:none;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028;background-color:#f4f5f6!important;border-color:#e1e5eb!important;font-weight:500;border-bottom:.0625rem solid;border-top:.0625rem solid}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#fff}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:none;width:0}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell .datatable-icon-sort-unset:before, [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell sort-btn:before{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell .datatable-icon-down:before{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell .datatable-icon-up:before{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-cell{display:flex;align-items:center;line-height:1}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028;font-size:14px;border-color:#e1e5eb!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028;border-color:#f4f5f6;background-color:#fff!important;background-image:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#142028}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#f4f5f6}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#0b1217!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#0b1217!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028;border-color:#f4f5f6;background-color:#fff!important;background-image:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#142028}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#f4f5f6}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#0b1217!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#0b1217!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#fff!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#fff!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer{border-top:none;padding:0}@media (max-width: 1023px){[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer{margin-top:.625rem}}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .page-count{display:none}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager{height:auto;margin:0}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{border-radius:3.125rem;width:1.6875rem;height:1.6875rem;font-weight:400!important;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#142028}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#f4f5f6}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#f4f5f6}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#f4f5f6!important;color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#142028!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3;opacity:.2}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-footer-inner{white-space:nowrap}@media (max-width: 1023px){[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-footer-inner{display:flex;flex-direction:column;align-items:center;overflow:hidden;text-align:center}}body.dark-theme   [_nghost-%COMP%]       .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#142028!important;padding:.75rem .25rem .75rem .5rem}body.dark-theme   [_nghost-%COMP%]       .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{border-color:#142028!important}.exchange[_ngcontent-%COMP%]{display:flex;gap:.625rem;align-items:center;position:relative}.exchange[_ngcontent-%COMP%]   .exchange-img[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;border-radius:3.125rem;background-color:#fff}.exchange[_ngcontent-%COMP%]   .chain-img[_ngcontent-%COMP%]{width:.875rem;height:.875rem;border-radius:3.125rem;background-color:#fff;position:absolute;top:0;left:.625rem}.pagination-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;width:100%;gap:.25rem}@media (max-width: 599px){.pagination-buttons[_ngcontent-%COMP%]{justify-content:center}}.pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;color:#142028;font-size:14px;display:flex;align-items:center;gap:.25rem}body.dark-theme   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#142028}.pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{color:#142028;font-size:14px;background-color:#f4f5f6;border-radius:3.125rem;display:flex;align-items:center;justify-content:center;padding:.25rem .75rem}body.dark-theme   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{background-color:#f4f5f6}.info-icon[_ngcontent-%COMP%]{font-size:12px;color:#818ea3;margin:0 .25rem}body.dark-theme   [_nghost-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#818ea3}.sort-pointer[_ngcontent-%COMP%]{cursor:pointer}"],
                data: {
                    animation: [(0,
                    N.X$)("toggleAnimation", [(0,
                    N.SB)("in", (0,
                    N.oB)({
                        opacity: 1
                    })), (0,
                    N.eR)(":enter", [(0,
                    N.oB)({
                        opacity: 0
                    }), (0,
                    N.jt)(600)]), (0,
                    N.eR)(":leave", (0,
                    N.jt)(200, (0,
                    N.oB)({
                        opacity: 0
                    })))])]
                },
                changeDetection: 0
            }),
            e
        }
        )();
        var Va = m(71884);
        function Ga(e, a) {
            1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_explorer.search_filter.all_exchanges")))
        }
        const Gt = function(e) {
            return {
                exchange: e
            }
        };
        function ja(e, a) {
            if (1 & e && (t.TgZ(0, "span", 7),
            t.GkF(1, 8),
            t.qZA()),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(8);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, Gt, n.dropdownSelected))
            }
        }
        const Ka = function() {
            return ["fal", "times"]
        };
        function $a(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 15)(2, "button", 16),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(2);
                    return t.KtG(i.showDropdownContent = !1)
                }),
                t._UZ(3, "fa-icon", 17),
                t.ALo(4, "translate"),
                t.qZA()(),
                t.TgZ(5, "h3"),
                t._uU(6, "Exchange"),
                t.qZA(),
                t.BQk()
            }
            2 & e && (t.xp6(3),
            t.Q6J("icon", t.DdM(4, Ka))("ngbTooltip", t.lcZ(4, 2, "home.close")))
        }
        const jt = function(e) {
            return {
                active: e
            }
        };
        function Ba(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "a", 18),
                t.NdJ("click", function() {
                    return t.CHM(n),
                    t.oxw(2).changeExchangeSelected(null),
                    t.KtG(!1)
                }),
                t._uU(1),
                t.ALo(2, "translate"),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.Q6J("ngClass", t.VKq(4, jt, null === n.dropdownSelected)),
                t.xp6(1),
                t.Oqu(t.lcZ(2, 2, "pair_explorer.search_filter.all_exchanges"))
            }
        }
        function Wa(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "a", 18),
                t.NdJ("click", function() {
                    const r = t.CHM(n).$implicit;
                    return t.oxw(2).changeExchangeSelected(r),
                    t.KtG(!1)
                }),
                t.GkF(2, 8),
                t.qZA(),
                t.BQk()
            }
            if (2 & e) {
                const n = a.$implicit
                  , o = t.oxw(2)
                  , i = t.MAs(8);
                t.xp6(1),
                t.Q6J("ngClass", t.VKq(3, jt, o.dropdownSelected && o.dropdownSelected.slug === n.slug)),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", t.VKq(5, Gt, n))
            }
        }
        function Xa(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 9),
                t.YNc(1, $a, 7, 5, "ng-container", 10),
                t.TgZ(2, "input", 11),
                t.NdJ("ngModelChange", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.exchangeSearch = i)
                })("keyup", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return t.KtG(i.exchangeSearchChange$.next(i.exchangeSearch))
                }),
                t.ALo(3, "translate"),
                t.qZA(),
                t.TgZ(4, "div", 12),
                t.YNc(5, Ba, 3, 6, "a", 13),
                t.YNc(6, Wa, 3, 7, "ng-container", 14),
                t.qZA()()
            }
            if (2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", "mobileTablet" === n.mediaDevice),
                t.xp6(1),
                t.Q6J("placeholder", t.lcZ(3, 5, "favorites.search"))("ngModel", n.exchangeSearch),
                t.xp6(3),
                t.Q6J("ngIf", !n.exchangeSearch.length),
                t.xp6(1),
                t.Q6J("ngForOf", n.exchangeListSelectable)
            }
        }
        function ti(e, a) {
            if (1 & e && (t.TgZ(0, "img", 19),
            t.ALo(1, "exchangeLogoStyles"),
            t.ALo(2, "exchangeLogoUrl"),
            t.qZA(),
            t._UZ(3, "img", 20),
            t.ALo(4, "chainLogoUrl"),
            t._uU(5)),
            2 & e) {
                const n = a.exchange;
                let o;
                t.Akn(t.xi3(1, 8, n.slug, n.chain)),
                t.Q6J("src", t.xi3(2, 11, n.slug, n.chainId), t.LSH)("alt", n.slug),
                t.xp6(3),
                t.Q6J("src", t.lcZ(4, 14, n.chainId), t.LSH)("alt", n.chainId + "logo"),
                t.xp6(2),
                t.AsE(" ", n.name, " ", null !== (o = n.version) && void 0 !== o ? o : "", "\n")
            }
        }
        const ni = function(e) {
            return {
                open: e
            }
        };
        let ei = (()=>{
            class e extends d.K9 {
                clickout(n) {
                    !this._eRef.nativeElement.contains(n.target) && this.showDropdownContent && (this.showDropdownContent = !1)
                }
                set exchangeList(n) {
                    this._exchangeList = [...n],
                    this._recreateExchangeList()
                }
                get exchangeList() {
                    return this._exchangeList
                }
                set defaultExchangeSelected(n) {
                    this.dropdownSelected = n ? this.exchangeList.find(o=>o.slug === n) ?? null : null,
                    this._cdRef.detectChanges()
                }
                set showDropdownContent(n) {
                    this._showDropdownContent = n,
                    this._showDropdownContent && "mobileTablet" === this.mediaDevice ? "hidden" !== document.body.style.overflow && (document.body.style.overflow = "hidden") : !this._showDropdownContent && "mobileTablet" === this.mediaDevice && (document.body.style.overflow = "auto"),
                    this._cdRef.detectChanges()
                }
                get showDropdownContent() {
                    return this._showDropdownContent
                }
                constructor(n, o, i) {
                    super(),
                    this._cdRef = n,
                    this._eRef = o,
                    this._breakpointObserver = i,
                    this.chain = null,
                    this._exchangeList = [],
                    this.exchangeSelected = new t.vpe,
                    this.exchangeListSelectable = [],
                    this.exchangeSearch = "",
                    this.mediaDevice = "",
                    this.exchangeSearchChange$ = new Vt.X(null),
                    this._showDropdownContent = !1
                }
                ngOnInit() {
                    this._breakpointObserver.observe([_.K5, _.mT]).pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this.mediaDevice = n.breakpoints[_.K5] ? "mobileTablet" : "desktop"
                    }
                    ),
                    this.exchangeSearchChange$.pipe((0,
                    d.sL)(this)).subscribe(()=>{
                        this._recreateExchangeList()
                    }
                    )
                }
                _recreateExchangeList() {
                    this.exchangeSearch && 0 !== this.exchangeSearch.length ? this.exchangeListSelectable = [...this.exchangeList.filter(n=>this._sanitizeSearch(`${n.name}${n.version ?? ""}`).includes(this._sanitizeSearch(this.exchangeSearch)))] : this._updateExchangeListSelectable()
                }
                _sanitizeSearch(n) {
                    return n.length > 0 ? n.toLowerCase().replace(/\s/g, "") : ""
                }
                _updateExchangeListSelectable() {
                    this.exchangeListSelectable = [...this.exchangeList],
                    this._cdRef.detectChanges()
                }
                changeExchangeSelected(n) {
                    this.exchangeSelected.emit(n ? n.slug : null),
                    this.dropdownSelected = n,
                    this.showDropdownContent = !1,
                    this.exchangeSearch = "",
                    this._updateExchangeListSelectable()
                }
                onDestroy() {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(y.Yg))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-dropdown-exchanges"]],
                hostBindings: function(n, o) {
                    1 & n && t.NdJ("click", function(r) {
                        return o.clickout(r)
                    }, !1, t.evT)
                },
                inputs: {
                    chain: "chain",
                    exchangeList: "exchangeList",
                    defaultExchangeSelected: "defaultExchangeSelected"
                },
                outputs: {
                    exchangeSelected: "exchangeSelected"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 9,
                vars: 7,
                consts: [[1, "dropdown", 3, "ngClass"], [1, "button-selected", 3, "click"], [4, "ngIf", "ngIfElse"], ["dropDownSelectedTemplate", ""], [3, "icon"], ["class", "dropdown-content", 4, "ngIf"], ["imgExchange", ""], [1, "exchange", "selected", "active"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "dropdown-content"], [4, "ngIf"], ["appRestrictInput", "^[A-Za-z0-9\\s]*$", "maxlength", "15", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], [1, "exchange-list"], ["href", "javascript:", "class", "exchange", 3, "ngClass", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "close-container"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], ["href", "javascript:", 1, "exchange", 3, "ngClass", "click"], ["loading", "lazy", 1, "exchange-img", 3, "src", "alt"], ["loading", "lazy", 1, "chain-img", 3, "src", "alt"]],
                template: function(n, o) {
                    if (1 & n && (t.TgZ(0, "div", 0)(1, "button", 1),
                    t.NdJ("click", function() {
                        return o.showDropdownContent = !o.showDropdownContent
                    }),
                    t.YNc(2, Ga, 3, 3, "span", 2),
                    t.YNc(3, ja, 2, 4, "ng-template", null, 3, t.W1O),
                    t._UZ(5, "fa-icon", 4),
                    t.qZA(),
                    t.YNc(6, Xa, 7, 7, "div", 5),
                    t.qZA(),
                    t.YNc(7, ti, 6, 16, "ng-template", null, 6, t.W1O)),
                    2 & n) {
                        const i = t.MAs(4);
                        t.Q6J("ngClass", t.VKq(5, ni, !!o.showDropdownContent)),
                        t.xp6(2),
                        t.Q6J("ngIf", !o.dropdownSelected)("ngIfElse", i),
                        t.xp6(3),
                        t.Q6J("icon", o.showDropdownContent ? "chevron-up" : "chevron-down"),
                        t.xp6(1),
                        t.Q6J("ngIf", !!o.showDropdownContent)
                    }
                },
                dependencies: [b.mk, b.O5, b.tP, G.uH, G.BN, et._L, l.u5, l.Fj, l.JJ, l.nD, l.On, b.ax, f.aw, f.X$, s.eV1, s.Wu7, s.$a1, B.O7],
                styles: [".dropdown[_ngcontent-%COMP%]{position:relative;width:max-content}.dropdown.open[_ngcontent-%COMP%]{z-index:999997}.dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{background:none;border:none;background-color:#f4f5f6;color:#142028;font-size:13px;padding:.5rem .5625rem;border-radius:.625rem;display:flex;justify-content:space-between;align-items:center;min-width:10rem;width:max-content;gap:.625rem;height:2.25rem}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{color:#142028}.dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{pointer-events:none}.dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]:hover{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]:hover{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]:hover{color:#cacedb}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]:hover{color:#3d5170}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]:hover{color:#3d5170}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{position:absolute;background-color:#f4f5f6;box-shadow:.25rem .25rem .25rem .0625rem #00000040;border-radius:.625rem;width:max-content;margin-top:.125rem;z-index:99999;right:0;padding:.625rem;max-height:25rem;overflow-y:auto}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#f4f5f6}@media (max-width: 1023px){.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{height:100%;width:100%;position:fixed;inset:0;z-index:999995;max-height:none;background-color:#fff;padding:.625rem}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#0b1217}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#0b1217}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#fff}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#fff}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:2.5rem;margin-bottom:1.25rem}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{justify-content:flex-end}}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .exchange-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 .625rem .625rem}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#e2e7ec;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#23323c}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#e2e7ec}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:2.5rem;font-size:13px;width:13.75rem;margin-bottom:.625rem;padding:.5rem .625rem;border-radius:.625rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#142028}@media (max-width: 1023px){.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6;width:calc(100% - 10px)}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6}}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.exchange[_ngcontent-%COMP%]{display:flex;gap:.625rem;align-items:center;position:relative;color:#818ea3;text-decoration:none;font-size:13px;margin:0 -1.25rem;padding:.5165rem 1.25rem}@media (max-width: 1023px){.exchange[_ngcontent-%COMP%]{gap:.8rem}}body.dark-theme   [_nghost-%COMP%]   .exchange[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .exchange[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .exchange[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .exchange[_ngcontent-%COMP%]{color:#818ea3}.exchange.selected[_ngcontent-%COMP%]{padding:0;margin:0}.exchange.selected[_ngcontent-%COMP%]   .chain-img[_ngcontent-%COMP%]{top:0;left:.625rem}.exchange.selected[_ngcontent-%COMP%]:hover{color:#142028;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .exchange.selected[_ngcontent-%COMP%]:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .exchange.selected[_ngcontent-%COMP%]:hover{color:#fff}body.light   [_nghost-%COMP%]   .exchange.selected[_ngcontent-%COMP%]:hover{color:#142028}body.light[_ngcontent-%COMP%]   .exchange.selected[_ngcontent-%COMP%]:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   .exchange.selected[_ngcontent-%COMP%]:hover{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .exchange.selected[_ngcontent-%COMP%]:hover{background-color:#142028}body.light   [_nghost-%COMP%]   .exchange.selected[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .exchange.selected[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}.exchange.active[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .exchange.active[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .exchange.active[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .exchange.active[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .exchange.active[_ngcontent-%COMP%]{color:#142028}.exchange[_ngcontent-%COMP%]   .exchange-img[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;border-radius:3.125rem;padding:.125rem;background-color:#fff}.exchange[_ngcontent-%COMP%]   .chain-img[_ngcontent-%COMP%]{width:.875rem;height:.875rem;border-radius:3.125rem;background-color:#fff;position:absolute;top:.125rem;left:2rem}.exchange[_ngcontent-%COMP%]:hover{color:#142028;background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .exchange[_ngcontent-%COMP%]:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .exchange[_ngcontent-%COMP%]:hover{color:#fff}body.light   [_nghost-%COMP%]   .exchange[_ngcontent-%COMP%]:hover{color:#142028}body.light[_ngcontent-%COMP%]   .exchange[_ngcontent-%COMP%]:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   .exchange[_ngcontent-%COMP%]:hover{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .exchange[_ngcontent-%COMP%]:hover{background-color:#23323c}body.light   [_nghost-%COMP%]   .exchange[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .exchange[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}.close-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.close-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var Kt = m(97185);
        function oi(e, a) {
            if (1 & e && (t.ynx(0),
            t._UZ(1, "div", 3),
            t.BQk()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("appLoading", n.isLoading)
            }
        }
        function ai(e, a) {
            1 & e && (t.ynx(0),
            t.TgZ(1, "h4"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.BQk()),
            2 & e && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "pair_list.advanced_filters.filters")))
        }
        function ii(e, a) {
            1 & e && (t.TgZ(0, "h4"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_list.advanced_filters.edit_filter")))
        }
        function ri(e, a) {
            1 & e && (t.TgZ(0, "div", 55)(1, "span"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA()()),
            2 & e && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "pair_list.advanced_filters.connect_wallet")))
        }
        function ci(e, a) {
            1 & e && (t.TgZ(0, "span", 59),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_list.advanced_filters.name_required")))
        }
        const li = function(e) {
            return {
                disabled: e
            }
        }
          , si = function() {
            return {
                standalone: !0
            }
        };
        function di(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div")(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t.TgZ(4, "div", 56)(5, "input", 57),
                t.NdJ("ngModelChange", function(i) {
                    t.CHM(n);
                    const r = t.oxw(2);
                    return t.KtG(r.filterName = i)
                }),
                t.ALo(6, "translate"),
                t.qZA(),
                t.YNc(7, ci, 3, 3, "span", 58),
                t.qZA()()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.xp6(2),
                t.Oqu(t.lcZ(3, 7, "pair_list.advanced_filters.filter_name")),
                t.xp6(3),
                t.Q6J("disabled", !!n.isEdit)("ngClass", t.VKq(11, li, !!n.isEdit || !n.isLoggedUser))("ngModelOptions", t.DdM(13, si))("ngModel", n.filterName)("placeholder", t.lcZ(6, 9, "pair_list.advanced_filters.filter_name_placeholder")),
                t.xp6(2),
                t.Q6J("ngIf", !!n.showRequiredName)
            }
        }
        function gi(e, a) {
            if (1 & e && t.GkF(0, 60),
            2 & e) {
                t.oxw(2);
                const n = t.MAs(3);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function _i(e, a) {
            if (1 & e && t.GkF(0, 60),
            2 & e) {
                t.oxw(2);
                const n = t.MAs(5);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function pi(e, a) {
            if (1 & e && t.GkF(0, 60),
            2 & e) {
                t.oxw(2);
                const n = t.MAs(3);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function hi(e, a) {
            if (1 & e && t.GkF(0, 60),
            2 & e) {
                t.oxw(2);
                const n = t.MAs(5);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function mi(e, a) {
            if (1 & e && t.GkF(0, 60),
            2 & e) {
                t.oxw(2);
                const n = t.MAs(3);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function fi(e, a) {
            if (1 & e && t.GkF(0, 60),
            2 & e) {
                t.oxw(2);
                const n = t.MAs(5);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function Ci(e, a) {
            if (1 & e && t.GkF(0, 60),
            2 & e) {
                t.oxw(2);
                const n = t.MAs(3);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function ui(e, a) {
            if (1 & e && t.GkF(0, 60),
            2 & e) {
                t.oxw(2);
                const n = t.MAs(5);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function bi(e, a) {
            1 & e && (t.TgZ(0, "div", 61)(1, "span"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA()()),
            2 & e && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "pair_list.advanced_filters.gems_not_connected")))
        }
        function Mi(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 62),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(2);
                    return t.KtG(i.applyChanges())
                }),
                t._uU(1),
                t.ALo(2, "translate"),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.Q6J("disabled", n.advancedFilterForm.invalid || !!n.formNotChange),
                t.xp6(1),
                t.Oqu(t.lcZ(2, 2, "pair_list.advanced_filters.save_filter"))
            }
        }
        function Oi(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 62),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(2);
                    return t.KtG(i.applyChanges())
                }),
                t._uU(1),
                t.ALo(2, "translate"),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.Q6J("disabled", n.advancedFilterForm.invalid || !!n.formNotChange),
                t.xp6(1),
                t.Oqu(t.lcZ(2, 2, "pair_list.advanced_filters.filter"))
            }
        }
        const $t = function() {
            return ["far", "redo-alt"]
        };
        function Pi(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 62),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(2);
                    return t.KtG(i.resetFilters())
                }),
                t._UZ(1, "fa-icon", 63),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.Q6J("disabled", !n.viewReset),
                t.xp6(1),
                t.Q6J("icon", t.DdM(5, $t)),
                t.xp6(1),
                t.hij(" ", t.lcZ(3, 3, "crud_dropdown.clear"), "")
            }
        }
        function xi(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 64)(1, "button", 65),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(2);
                    return t.KtG(i.resetFilters())
                }),
                t._UZ(2, "fa-icon", 63),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA()()
            }
            2 & e && (t.xp6(2),
            t.Q6J("icon", t.DdM(4, $t)),
            t.xp6(1),
            t.hij(" ", t.lcZ(4, 2, "pair_list.advanced_filters.restart_filters"), ""))
        }
        function wi(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div"),
                t.YNc(6, ai, 4, 3, "ng-container", 8),
                t.YNc(7, ii, 3, 3, "ng-template", null, 9, t.W1O),
                t.qZA(),
                t.TgZ(9, "div"),
                t.YNc(10, ri, 4, 3, "div", 10),
                t.qZA()(),
                t.YNc(11, di, 8, 14, "div", 0),
                t.TgZ(12, "div", 11)(13, "span"),
                t._uU(14),
                t.ALo(15, "translate"),
                t.qZA(),
                t.TgZ(16, "div")(17, "div", 12)(18, "div", 13),
                t._UZ(19, "input", 14)(20, "label", 15),
                t.TgZ(21, "span", 16),
                t._uU(22),
                t.ALo(23, "translate"),
                t._UZ(24, "fa-icon", 17),
                t.qZA()()(),
                t.TgZ(25, "div", 12)(26, "div", 13),
                t._UZ(27, "input", 18)(28, "label", 19),
                t.TgZ(29, "span", 16),
                t._uU(30),
                t.ALo(31, "translate"),
                t.qZA()()()()(),
                t.TgZ(32, "div")(33, "span"),
                t._uU(34, "Chain"),
                t.qZA(),
                t.TgZ(35, "div", 20)(36, "app-dropdown-chains", 21),
                t.NdJ("chainsSelected", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.advancedFilterForm.controls.chain.setValue(i.length > 0 ? i[0] : null))
                }),
                t.qZA()()(),
                t.TgZ(37, "div")(38, "span"),
                t._uU(39),
                t.ALo(40, "translate"),
                t.qZA(),
                t.TgZ(41, "div", 22)(42, "app-dropdown-exchanges", 23),
                t.NdJ("exchangeSelected", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.advancedFilterForm.controls.exchange.setValue(i))
                }),
                t.qZA()()(),
                t.TgZ(43, "div")(44, "span"),
                t._uU(45),
                t.ALo(46, "translate"),
                t.qZA(),
                t.TgZ(47, "div", 24),
                t._UZ(48, "input", 25),
                t.ALo(49, "translate"),
                t._UZ(50, "input", 26),
                t.ALo(51, "translate"),
                t.YNc(52, gi, 1, 1, "ng-container", 27),
                t.YNc(53, _i, 1, 1, "ng-container", 27),
                t.qZA()(),
                t.TgZ(54, "div")(55, "span"),
                t._uU(56),
                t.ALo(57, "translate"),
                t.qZA(),
                t.TgZ(58, "div", 24),
                t._UZ(59, "input", 28),
                t.ALo(60, "translate"),
                t._UZ(61, "input", 29),
                t.ALo(62, "translate"),
                t.YNc(63, pi, 1, 1, "ng-container", 27),
                t.YNc(64, hi, 1, 1, "ng-container", 27),
                t.qZA()(),
                t.TgZ(65, "div")(66, "span"),
                t._uU(67),
                t.ALo(68, "translate"),
                t.qZA(),
                t.TgZ(69, "div", 24),
                t._UZ(70, "input", 30),
                t.ALo(71, "translate"),
                t._UZ(72, "input", 31),
                t.ALo(73, "translate"),
                t.YNc(74, mi, 1, 1, "ng-container", 27),
                t.YNc(75, fi, 1, 1, "ng-container", 27),
                t.qZA()(),
                t.TgZ(76, "div")(77, "span"),
                t._uU(78),
                t.ALo(79, "translate"),
                t._UZ(80, "fa-icon", 32),
                t.ALo(81, "translate"),
                t.qZA(),
                t.TgZ(82, "div", 24),
                t._UZ(83, "input", 33),
                t.ALo(84, "translate"),
                t._UZ(85, "input", 34),
                t.ALo(86, "translate"),
                t.YNc(87, Ci, 1, 1, "ng-container", 27),
                t.YNc(88, ui, 1, 1, "ng-container", 27),
                t.qZA()(),
                t.TgZ(89, "div")(90, "span"),
                t._uU(91, "DEXTScore"),
                t.qZA(),
                t.TgZ(92, "div", 35)(93, "app-dropdown-select", 36),
                t.NdJ("itemSelected", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.advancedFilterForm.controls.dextScore.setValue(i.value))
                }),
                t.qZA()()(),
                t.TgZ(94, "div")(95, "span"),
                t._uU(96),
                t.ALo(97, "translate"),
                t.qZA(),
                t.TgZ(98, "div", 37)(99, "app-dropdown-select", 36),
                t.NdJ("itemSelected", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.advancedFilterForm.controls.audit.setValue(i.value))
                }),
                t.qZA()()(),
                t.TgZ(100, "div")(101, "span"),
                t._uU(102),
                t.ALo(103, "translate"),
                t.qZA(),
                t.TgZ(104, "div", 38)(105, "app-dropdown-select", 36),
                t.NdJ("itemSelected", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.advancedFilterForm.controls.poolCreatedRangeDirection.setValue(i.value))
                }),
                t.qZA(),
                t._UZ(106, "input", 39),
                t.TgZ(107, "app-dropdown-select", 36),
                t.NdJ("itemSelected", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.advancedFilterForm.controls.poolCreatedInterval.setValue(i.value))
                }),
                t.qZA()()(),
                t.TgZ(108, "div"),
                t.YNc(109, bi, 4, 3, "div", 40),
                t.TgZ(110, "div")(111, "span", 41),
                t._uU(112, "Gems Discovery"),
                t.qZA()(),
                t.TgZ(113, "div")(114, "div", 42),
                t._UZ(115, "input", 43)(116, "label", 44),
                t.TgZ(117, "span", 45),
                t._uU(118),
                t.ALo(119, "translate"),
                t.qZA()()()(),
                t.TgZ(120, "div", 46)(121, "div", 47),
                t._UZ(122, "img", 48),
                t.qZA(),
                t.TgZ(123, "span", 49)(124, "span", 50),
                t._uU(125),
                t.ALo(126, "translate"),
                t.qZA(),
                t._uU(127),
                t.ALo(128, "translate"),
                t.qZA()()()(),
                t.TgZ(129, "div", 51),
                t.YNc(130, Mi, 3, 4, "button", 52),
                t.YNc(131, Oi, 3, 4, "button", 52),
                t.YNc(132, Pi, 4, 6, "button", 52),
                t.TgZ(133, "button", 53),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return t.KtG(i.closed.emit())
                }),
                t._uU(134),
                t.ALo(135, "translate"),
                t.qZA(),
                t.YNc(136, xi, 5, 5, "div", 54),
                t.qZA()(),
                t.BQk()
            }
            if (2 & e) {
                const n = t.MAs(8)
                  , o = t.oxw();
                let i, r;
                t.xp6(2),
                t.Q6J("formGroup", o.advancedFilterForm),
                t.xp6(4),
                t.Q6J("ngIf", !o.isEdit)("ngIfElse", n),
                t.xp6(4),
                t.Q6J("ngIf", !o.isLoggedUser),
                t.xp6(1),
                t.Q6J("ngIf", !!o.isLoggedUser),
                t.xp6(3),
                t.Oqu(t.lcZ(15, 67, "pair_list.advanced_filters.pair_types")),
                t.xp6(8),
                t.hij("", t.lcZ(23, 69, "pair_list.advanced_filters.exclude_native_sort"), " "),
                t.xp6(8),
                t.Oqu(t.lcZ(31, 71, "pair_list.advanced_filters.only_social_networks")),
                t.xp6(6),
                t.Q6J("defaultChainSelected", o.chainSelected),
                t.xp6(3),
                t.Oqu(t.lcZ(40, 73, "pair_list.exchange")),
                t.xp6(3),
                t.Q6J("chain", null !== (i = o.advancedFilters.chain) && void 0 !== i ? i : o.chain)("exchangeList", o.exchangeList)("defaultExchangeSelected", null !== (r = o.advancedFilterForm.controls.exchange.value) && void 0 !== r ? r : null),
                t.xp6(3),
                t.Oqu(t.lcZ(46, 75, "pair_list.advanced_filters.total_liquidity")),
                t.xp6(3),
                t.Q6J("ngClass", o.advancedFilterForm.controls.minLiquidity.invalid ? "is-invalid" : "is-valid")("placeholder", t.lcZ(49, 77, "pair_list.advanced_filters.min")),
                t.xp6(2),
                t.Q6J("ngClass", o.advancedFilterForm.controls.maxLiquidity.invalid ? "is-invalid" : "is-valid")("placeholder", t.lcZ(51, 79, "pair_list.advanced_filters.max")),
                t.xp6(2),
                t.Q6J("ngIf", !(null != o.advancedFilterForm.controls.minLiquidity.errors && o.advancedFilterForm.controls.minLiquidity.errors.pattern) && !(null != o.advancedFilterForm.controls.maxLiquidity.errors && o.advancedFilterForm.controls.maxLiquidity.errors.pattern) && (o.advancedFilterForm.controls.minLiquidity.invalid || o.advancedFilterForm.controls.maxLiquidity.invalid)),
                t.xp6(1),
                t.Q6J("ngIf", (null == o.advancedFilterForm.controls.minLiquidity.errors ? null : o.advancedFilterForm.controls.minLiquidity.errors.pattern) || (null == o.advancedFilterForm.controls.maxLiquidity.errors ? null : o.advancedFilterForm.controls.maxLiquidity.errors.pattern)),
                t.xp6(3),
                t.AsE("", t.lcZ(57, 81, "pair_list.advanced_filters.volume"), " (", o.interval, ")"),
                t.xp6(3),
                t.Q6J("ngClass", o.advancedFilterForm.controls.minVolume.invalid ? "is-invalid" : "is-valid")("placeholder", t.lcZ(60, 83, "pair_list.advanced_filters.min")),
                t.xp6(2),
                t.Q6J("ngClass", o.advancedFilterForm.controls.maxVolume.invalid ? "is-invalid" : "is-valid")("placeholder", t.lcZ(62, 85, "pair_list.advanced_filters.max")),
                t.xp6(2),
                t.Q6J("ngIf", !(null != o.advancedFilterForm.controls.minVolume.errors && o.advancedFilterForm.controls.minVolume.errors.pattern) && !(null != o.advancedFilterForm.controls.maxVolume.errors && o.advancedFilterForm.controls.maxVolume.errors.pattern) && (o.advancedFilterForm.controls.minVolume.invalid || o.advancedFilterForm.controls.maxVolume.invalid)),
                t.xp6(1),
                t.Q6J("ngIf", (null == o.advancedFilterForm.controls.minVolume.errors ? null : o.advancedFilterForm.controls.minVolume.errors.pattern) || (null == o.advancedFilterForm.controls.maxVolume.errors ? null : o.advancedFilterForm.controls.maxVolume.errors.pattern)),
                t.xp6(3),
                t.AsE("", t.lcZ(68, 87, "pair_list.advanced_filters.swaps"), " (", o.interval, ")"),
                t.xp6(3),
                t.Q6J("ngClass", o.advancedFilterForm.controls.minSwaps.invalid ? "is-invalid" : "is-valid")("placeholder", t.lcZ(71, 89, "pair_list.advanced_filters.min")),
                t.xp6(2),
                t.Q6J("ngClass", o.advancedFilterForm.controls.maxSwaps.invalid ? "is-invalid" : "is-valid")("placeholder", t.lcZ(73, 91, "pair_list.advanced_filters.max")),
                t.xp6(2),
                t.Q6J("ngIf", !(null != o.advancedFilterForm.controls.minSwaps.errors && o.advancedFilterForm.controls.minSwaps.errors.pattern) && !(null != o.advancedFilterForm.controls.maxSwaps.errors && o.advancedFilterForm.controls.maxSwaps.errors.pattern) && (o.advancedFilterForm.controls.minSwaps.invalid || o.advancedFilterForm.controls.maxSwaps.invalid)),
                t.xp6(1),
                t.Q6J("ngIf", (null == o.advancedFilterForm.controls.minSwaps.errors ? null : o.advancedFilterForm.controls.minSwaps.errors.pattern) || (null == o.advancedFilterForm.controls.maxSwaps.errors ? null : o.advancedFilterForm.controls.maxSwaps.errors.pattern)),
                t.xp6(3),
                t.hij("", t.lcZ(79, 93, "pair_list.advanced_filters.total_market_cap"), " "),
                t.xp6(2),
                t.Q6J("ngbTooltip", t.lcZ(81, 95, "pair_list.advanced_filters.total_market_cap_desc")),
                t.xp6(3),
                t.Q6J("ngClass", o.advancedFilterForm.controls.minFdv.invalid ? "is-invalid" : "is-valid")("placeholder", t.lcZ(84, 97, "pair_list.advanced_filters.min")),
                t.xp6(2),
                t.Q6J("ngClass", o.advancedFilterForm.controls.maxFdv.invalid ? "is-invalid" : "is-valid")("placeholder", t.lcZ(86, 99, "pair_list.advanced_filters.max")),
                t.xp6(2),
                t.Q6J("ngIf", !(null != o.advancedFilterForm.controls.minFdv.errors && o.advancedFilterForm.controls.minFdv.errors.pattern) && !(null != o.advancedFilterForm.controls.maxFdv.errors && o.advancedFilterForm.controls.maxFdv.errors.pattern) && (o.advancedFilterForm.controls.minFdv.invalid || o.advancedFilterForm.controls.maxFdv.invalid)),
                t.xp6(1),
                t.Q6J("ngIf", (null == o.advancedFilterForm.controls.minFdv.errors ? null : o.advancedFilterForm.controls.minFdv.errors.pattern) || (null == o.advancedFilterForm.controls.maxFdv.errors ? null : o.advancedFilterForm.controls.maxFdv.errors.pattern)),
                t.xp6(5),
                t.Q6J("items", o.dextScoreAvailableOptions)("selectedItem", o.dextScoreSelected)("notCapitalized", !0),
                t.xp6(3),
                t.Oqu(t.lcZ(97, 101, "pair_list.advanced_filters.contract")),
                t.xp6(3),
                t.Q6J("items", o.contractAvailableOptions)("selectedItem", o.contractSelected)("notCapitalized", !0),
                t.xp6(3),
                t.Oqu(t.lcZ(103, 103, "pair_list.advanced_filters.pool_created")),
                t.xp6(3),
                t.Q6J("items", o.timeRangeDirectionOption)("selectedItem", o.timeRangeDirectionSelected)("notCapitalized", !0),
                t.xp6(2),
                t.Q6J("items", o.timeAvailableOption)("selectedItem", o.timeSelected)("notCapitalized", !0),
                t.xp6(2),
                t.Q6J("ngIf", !o.isLoggedUser),
                t.xp6(9),
                t.Oqu(t.lcZ(119, 105, "pair_list.advanced_filters.gems_check")),
                t.xp6(7),
                t.hij("", t.lcZ(126, 107, "pair_list.advanced_filters.new_feature"), ":"),
                t.xp6(2),
                t.hij(" ", t.lcZ(128, 109, "pair_list.advanced_filters.gems_description"), ""),
                t.xp6(3),
                t.Q6J("ngIf", !!o.isLoggedUser),
                t.xp6(1),
                t.Q6J("ngIf", !o.isLoggedUser),
                t.xp6(1),
                t.Q6J("ngIf", !o.isLoggedUser),
                t.xp6(2),
                t.Oqu(t.lcZ(135, 111, "pair_list.advanced_filters.cancel")),
                t.xp6(2),
                t.Q6J("ngIf", !!o.viewReset && !!o.isLoggedUser)
            }
        }
        function ki(e, a) {
            1 & e && (t.TgZ(0, "span", 59),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_list.advanced_filters.alert_min_max_value")))
        }
        function vi(e, a) {
            1 & e && (t.TgZ(0, "span", 59),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_list.advanced_filters.only_numbers")))
        }
        let yi = (()=>{
            class e extends d.K9 {
                set advancedFilters(n) {
                    this._advancedFilters = {
                        ...n
                    },
                    this._createForm(n),
                    this._changesForm()
                }
                get advancedFilters() {
                    return this._advancedFilters
                }
                set customFilterEdit(n) {
                    n && (this._customFilterEdit = n,
                    this.filterName = n.label ?? "",
                    this._advancedFilters = this._pairsListService.customAdvancedFilters.find(o=>o._id === n.value)?.filter,
                    this.isEdit = !0,
                    this._cdRef.detectChanges(),
                    this._createForm(this._advancedFilters),
                    this._changesForm())
                }
                get customFilterEdit() {
                    return this._customFilterEdit
                }
                constructor(n, o, i, r, c) {
                    super(),
                    this._cdRef = n,
                    this._breakpointObserver = o,
                    this._pairsListService = i,
                    this._toastr = r,
                    this._translate = c,
                    this.dextScoreAvailableOptions = [{
                        value: null,
                        label: "pair_list.advanced_filters.no_minimun_selected"
                    }, {
                        value: 30,
                        label: "pair_list.advanced_filters.score_30",
                        dotColor: "#EAAC30"
                    }, {
                        value: 50,
                        label: "pair_list.advanced_filters.score_50",
                        dotColor: "#008A00"
                    }, {
                        value: 80,
                        label: "pair_list.advanced_filters.score_80",
                        dotColor: "#00B8D8"
                    }],
                    this.contractAvailableOptions = [{
                        value: null,
                        label: "pair_list.advanced_filters.no_contract"
                    }, {
                        value: "verified",
                        label: "pair_list.advanced_filters.audited_contract"
                    }, {
                        value: "clean",
                        label: "pair_list.advanced_filters.no_warnings"
                    }],
                    this.timeAvailableOption = [{
                        value: "minutes",
                        label: "pair_list.advanced_filters.minutes"
                    }, {
                        value: "hours",
                        label: "pair_list.advanced_filters.hours"
                    }, {
                        value: "days",
                        label: "pair_list.advanced_filters.days"
                    }, {
                        value: "months",
                        label: "pair_list.advanced_filters.months"
                    }, {
                        value: "years",
                        label: "pair_list.advanced_filters.years"
                    }],
                    this.timeRangeDirectionOption = [{
                        value: "lessThan",
                        label: "pair_list.advanced_filters.less_than"
                    }, {
                        value: "moreThan",
                        label: "pair_list.advanced_filters.more_than"
                    }],
                    this.sortAvailableOptions = [{
                        value: "exchange",
                        label: "pair_list.exchange"
                    }, {
                        value: "creationTime",
                        label: "pair_list.pool_created"
                    }, {
                        value: "liquidity",
                        label: "pair_list.total_liquidity"
                    }, {
                        value: "volume",
                        label: "pair_list.volume_24"
                    }, {
                        value: "swaps",
                        label: "pair_list.swaps_24"
                    }, {
                        value: "totalMarketCap",
                        label: "pair_list.advanced_filters.total_market_cap"
                    }, {
                        value: "dextScore",
                        label: "pair_explorer.dext_score"
                    }],
                    this.orderAvailableOptions = [{
                        value: "desc",
                        label: "pair_list.advanced_filters.descending"
                    }, {
                        value: "asc",
                        label: "pair_list.advanced_filters.ascending"
                    }],
                    this.exchangeList = [],
                    this.chain = null,
                    this.isModal = !1,
                    this._advancedFilters = {},
                    this.filtersApplied = new t.vpe,
                    this.closed = new t.vpe,
                    this.interval = "24h",
                    this.isLoggedUser = !1,
                    this.advancedFilterForm = new l.cw({
                        chain: new l.NI(null),
                        exchange: new l.NI(null),
                        minLiquidity: new l.NI("",l.kI.compose(this._commonValidators())),
                        maxLiquidity: new l.NI("",l.kI.compose(this._commonValidators())),
                        minVolume: new l.NI("",l.kI.compose(this._commonValidators())),
                        maxVolume: new l.NI("",l.kI.compose(this._commonValidators())),
                        minSwaps: new l.NI("",l.kI.compose(this._commonValidators())),
                        maxSwaps: new l.NI("",l.kI.compose(this._commonValidators())),
                        minFdv: new l.NI("",l.kI.compose(this._commonValidators())),
                        maxFdv: new l.NI("",l.kI.compose(this._commonValidators())),
                        excludeNative: new l.NI(!1),
                        dextScore: new l.NI(null),
                        audit: new l.NI(null),
                        poolCreatedRangeDirection: new l.NI("lessThan",{
                            nonNullable: !0
                        }),
                        poolCreatedUnit: new l.NI(null,l.kI.compose(this._commonValidators())),
                        poolCreatedInterval: new l.NI("days",{
                            nonNullable: !0
                        }),
                        default: new l.NI(!1),
                        socialInfo: new l.NI(!1),
                        creationTimeSince: new l.NI(void 0),
                        creationGreaterTimeRange: new l.NI(void 0),
                        creationLowerTimeRange: new l.NI(void 0),
                        limit: new l.NI(void 0),
                        interval: new l.NI(void 0),
                        sort: new l.NI(void 0),
                        order: new l.NI(void 0)
                    }),
                    this.formNotChange = !0,
                    this.viewReset = !1,
                    this.mediaDevice = "",
                    this.chainSelected = null,
                    this._customFilterEdit = null,
                    this.showRequiredName = !1,
                    this.isLoading = !1,
                    this.isEdit = !1,
                    this._setDropdownDefaultValues()
                }
                ngOnInit() {
                    this._breakpointObserver.observe([_.K5, _.mT]).pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this.mediaDevice = n.breakpoints[_.K5] ? "mobileTablet" : "desktop",
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _formChanged() {
                    this.formNotChange = !1,
                    this.viewReset = !0
                }
                _changesForm() {
                    this._advancedFilterFormSubscribe = this.advancedFilterForm.valueChanges.pipe((0,
                    d.sL)(this), (0,
                    Va.x)((n,o)=>JSON.stringify(n) === JSON.stringify(o)), (0,
                    ut.b)(n=>{
                        this._formChanged();
                        for (const o of Object.keys(n))
                            this._validateMinMax(n, o) ? this.advancedFilterForm.controls[o].updateValueAndValidity({
                                onlySelf: !0
                            }) : this.advancedFilterForm.controls[o].setErrors({
                                incorrect: !0
                            });
                        null != n.chain && n.chain !== this.chainSelected && (this.chainSelected = n.chain,
                        this.advancedFilterForm.controls.exchange.setValue(null),
                        this.exchangeList = [...s.i9O.getExchangesFromChain(n.chain)]),
                        null === n.chain && n.chain !== this.chainSelected && (this.chainSelected = n.chain,
                        this.advancedFilterForm.controls.exchange.setValue(null),
                        this.exchangeList = [...s.i9O.fullExchangeList])
                    }
                    )).subscribe(()=>{
                        this.advancedFilterForm.updateValueAndValidity(),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _validateMinMax(n, o) {
                    return o.includes("min") && n[o].length > 0 && n[o.replace("min", "max")].length > 0 ? +n[o] < +n[o.replace("min", "max")] : !(o.includes("max") && n[o].length > 0 && n[o.replace("max", "min")].length > 0) || +n[o] > +n[o.replace("max", "min")]
                }
                _commonValidators() {
                    return [l.kI.pattern(/^[\d&.-]*$/i)]
                }
                _createForm(n) {
                    const o = {};
                    n?.creationGreaterTimeRange ? (o.after = n.creationGreaterTimeRange,
                    this.timeRangeDirectionSelected = this.timeRangeDirectionOption.find(r=>"moreThan" === r.value)) : n?.creationLowerTimeRange && (o.before = n.creationLowerTimeRange,
                    this.timeRangeDirectionSelected = this.timeRangeDirectionOption.find(r=>"lessThan" === r.value));
                    const i = this.parsePoolCreationTimestamp(o);
                    i && (this.timeSelected = this.timeAvailableOption.find(r=>r.value === i?.interval)),
                    this.advancedFilterForm.controls.chain.setValue(null == n?.chain ? null : n.chain),
                    this.advancedFilterForm.controls.exchange.setValue(n?.exchange ?? null),
                    this.advancedFilterForm.controls.minLiquidity.setValue(n?.minLiquidity ?? ""),
                    this.advancedFilterForm.controls.maxLiquidity.setValue(n?.maxLiquidity ?? ""),
                    this.advancedFilterForm.controls.minVolume.setValue(n?.minVolume ?? ""),
                    this.advancedFilterForm.controls.maxVolume.setValue(n?.maxVolume ?? ""),
                    this.advancedFilterForm.controls.minSwaps.setValue(n?.minSwaps ?? ""),
                    this.advancedFilterForm.controls.maxSwaps.setValue(n?.maxSwaps ?? ""),
                    this.advancedFilterForm.controls.minFdv.setValue(n?.minFdv ?? ""),
                    this.advancedFilterForm.controls.maxFdv.setValue(n?.maxFdv ?? ""),
                    this.advancedFilterForm.controls.excludeNative.setValue(n?.excludeNative ?? !1),
                    this.advancedFilterForm.controls.dextScore.setValue(n?.dextScore ?? null),
                    this.advancedFilterForm.controls.audit.setValue(n?.audit ?? null),
                    this.advancedFilterForm.controls.poolCreatedRangeDirection.setValue(i?.rangeDirection ?? this.timeRangeDirectionSelected.value),
                    this.advancedFilterForm.controls.poolCreatedUnit.setValue(i?.timeUnit ?? null),
                    this.advancedFilterForm.controls.poolCreatedInterval.setValue(i?.interval ?? this.timeSelected.value),
                    this.advancedFilterForm.controls.default.setValue(n?.default ?? !1),
                    this.advancedFilterForm.controls.socialInfo.setValue(n?.socialInfo ?? !1),
                    n && Object.keys(n).length > 0 && (this.viewReset = !0),
                    this.chainSelected = this.advancedFilterForm.controls.chain.value ?? null,
                    n && n?.dextScore && (this.dextScoreSelected = this.dextScoreAvailableOptions.find(r=>r.value === n.dextScore)),
                    n && n?.audit && (this.contractSelected = this.contractAvailableOptions.find(r=>r.value === n.audit)),
                    this.exchangeList = this.chainSelected ? [...s.i9O.getExchangesFromChain(this.chainSelected)] : [...s.i9O.fullExchangeList],
                    this.isLoggedUser || this.advancedFilterForm.controls.default.disable()
                }
                resetFilters() {
                    this._customFilterEdit = null,
                    this._advancedFilters = {},
                    this.chainSelected = null,
                    this._setDropdownDefaultValues(),
                    this._createForm(),
                    this._advancedFilterFormSubscribe.unsubscribe(),
                    this._changesForm(),
                    this.viewReset = !1,
                    this.formNotChange = !!this.isLoggedUser,
                    this.showRequiredName = !1,
                    this.isLoggedUser || this.filtersApplied.emit(this._advancedFilters),
                    this._cdRef.detectChanges()
                }
                _setDropdownDefaultValues() {
                    this.dextScoreSelected = this.dextScoreAvailableOptions.find(n=>null === n.value),
                    this.contractSelected = this.contractAvailableOptions.find(n=>null === n.value),
                    this.timeSelected = this.timeAvailableOption.find(n=>"days" === n.value),
                    this.timeRangeDirectionSelected = this.timeRangeDirectionOption.find(n=>"lessThan" === n.value)
                }
                applyChanges() {
                    if (this.advancedFilterForm.valid) {
                        const n = this.advancedFilterForm.value
                          , o = {}
                          , i = ["excludeNative", "poolCreatedRangeDirection", "poolCreatedUnit", "poolCreatedInterval", "socialInfo"];
                        for (const r of Object.keys(n))
                            null != n[r] && "" !== n[r] && !i.includes(r) && (o[r] = n[r]);
                        if (!0 === n.excludeNative && (o.excludeNative = n.excludeNative),
                        !0 === n.socialInfo && (o.socialInfo = n.socialInfo),
                        null != n.poolCreatedUnit && (o["lessThan" === n.poolCreatedRangeDirection ? "creationLowerTimeRange" : "creationGreaterTimeRange"] = this.constructPoolCreationTimestamp(n.poolCreatedUnit, n.poolCreatedInterval)),
                        this.isLoggedUser)
                            if (this.filterName)
                                this.isEdit ? this.updateCustomFilters(o) : this.saveCustomFilters(o);
                            else {
                                this.showRequiredName = !0;
                                const r = document.querySelector("#filterName");
                                r && r.scrollIntoView()
                            }
                        else
                            this.filtersApplied.emit(o)
                    }
                }
                onDestroy() {}
                saveCustomFilters(n) {
                    this.isLoading = !0;
                    const o = {
                        name: this.filterName,
                        chain: n?.chain ? s.CXF.getLegacyChain(n.chain) : "all",
                        default: n?.default ?? !1,
                        filter: {
                            ...n
                        }
                    };
                    this._pairsListService.saveAdvancedFilters(o).pipe((0,
                    d.sL)(this)).subscribe(()=>{
                        this._pairsListService.getCustomAdvancedFilters().pipe((0,
                        d.sL)(this)).subscribe(i=>{
                            this._pairsListService.selectedAdvancedFilter = i[i.length - 1]._id ?? null,
                            this._pairsListService.customAdvancedFilters = [...i],
                            this.isLoading = !1;
                            const r = this._translate.instant("pair_list.advanced_filters.filter_add", {
                                name: o.name
                            });
                            this._toastr.success(r, void 0, {
                                closeButton: !0,
                                positionClass: "toast-bottom-right",
                                timeOut: 3e3
                            })
                        }
                        )
                    }
                    )
                }
                updateCustomFilters(n) {
                    this.isLoading = !0;
                    const o = {
                        name: this.filterName,
                        chain: n.chain ? s.CXF.getLegacyChain(n.chain) : "all",
                        filter: {
                            ...n
                        },
                        _id: this.customFilterEdit?.value,
                        default: n?.default ?? !1
                    };
                    this._pairsListService.updateAdvancedFilter(o).pipe((0,
                    d.sL)(this)).subscribe(()=>{
                        this._pairsListService.getCustomAdvancedFilters().pipe((0,
                        d.sL)(this)).subscribe(i=>{
                            const r = this._translate.instant("pair_list.advanced_filters.filter_update", {
                                name: o.name
                            });
                            this._toastr.success(r, void 0, {
                                closeButton: !0,
                                positionClass: "toast-bottom-right",
                                timeOut: 3e3
                            }),
                            this._pairsListService.selectedAdvancedFilter = i.find(c=>c._id === o._id)?._id ?? null,
                            this._pairsListService.customAdvancedFilters = [...i],
                            this.isLoading = !1
                        }
                        )
                    }
                    )
                }
                constructPoolCreationTimestamp(n, o) {
                    switch (o) {
                    case "minutes":
                        return n * d.VK;
                    case "hours":
                        return n * d.rP;
                    case "days":
                        return n * d.HR;
                    case "months":
                        return 30 * n * d.HR;
                    case "years":
                        return 12 * n * 30 * d.HR
                    }
                }
                parsePoolCreationTimestamp(n) {
                    if (0 === Object.keys(n).length)
                        return null;
                    const o = d.k3.timeUnitAndInterval(Math.round((n.after || n.before) / 1e3));
                    return {
                        rangeDirection: n.before ? "lessThan" : "moreThan",
                        timeUnit: o?.timeUnit ?? 0,
                        interval: o?.interval ?? "days"
                    }
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(t.sBO),t.Y36(y.Yg),t.Y36(s.kAQ),t.Y36(Kt._W),t.Y36(f.sK))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-advanced-filters-modal"]],
                inputs: {
                    exchangeList: "exchangeList",
                    chain: "chain",
                    isModal: "isModal",
                    interval: "interval",
                    isLoggedUser: "isLoggedUser",
                    advancedFilters: "advancedFilters",
                    customFilterEdit: "customFilterEdit"
                },
                outputs: {
                    filtersApplied: "filtersApplied",
                    closed: "closed"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 6,
                vars: 2,
                consts: [[4, "ngIf"], ["minMaxError", ""], ["patternError", ""], [3, "appLoading"], [1, "panel-body"], [1, "filters-form", 3, "formGroup"], [1, "filters"], [1, "title-filters"], [4, "ngIf", "ngIfElse"], ["titleEdit", ""], ["class", "wallet-not-connected", 4, "ngIf"], [1, "token-type"], [1, "toggle-featured"], [1, "form-check", "form-switch"], ["type", "checkbox", "formControlName", "excludeNative", "id", "excludeNative", 1, "form-check-input"], ["for", "excludeNative", 1, "form-check-label"], [1, "description"], ["icon", "info-circle", "ngbTooltip", "i.e.: WETH/USDC", "placement", "top-right", 1, "info-icon"], ["type", "checkbox", "formControlName", "socialInfo", "id", "socialInfo", 1, "form-check-input"], ["for", "socialInfo", 1, "form-check-label"], [1, "chain-selector"], [3, "defaultChainSelected", "chainsSelected"], [1, "filter-exchange-pair"], [3, "chain", "exchangeList", "defaultExchangeSelected", "exchangeSelected"], [1, "multi-filter"], ["appRestrictInput", "^[0-9.]*$", "type", "text", "formControlName", "minLiquidity", "maxlength", "10", 1, "form-control", 3, "ngClass", "placeholder"], ["appRestrictInput", "^[0-9.]*$", "type", "text", "formControlName", "maxLiquidity", "maxlength", "10", 1, "form-control", 3, "ngClass", "placeholder"], [3, "ngTemplateOutlet", 4, "ngIf"], ["appRestrictInput", "^[0-9.]*$", "type", "text", "formControlName", "minVolume", "maxlength", "10", 1, "form-control", 3, "ngClass", "placeholder"], ["appRestrictInput", "^[0-9.]*$", "type", "text", "formControlName", "maxVolume", "maxlength", "10", 1, "form-control", 3, "ngClass", "placeholder"], ["appRestrictInput", "^[0-9]*$", "type", "text", "formControlName", "minSwaps", "maxlength", "10", 1, "form-control", 3, "ngClass", "placeholder"], ["appRestrictInput", "^[0-9]*$", "type", "text", "formControlName", "maxSwaps", "maxlength", "10", 1, "form-control", 3, "ngClass", "placeholder"], ["icon", "info-circle", 1, "info-icon", 3, "ngbTooltip"], ["appRestrictInput", "^[0-9.]*$", "type", "text", "formControlName", "minFdv", "maxlength", "10", 1, "form-control", 3, "ngClass", "placeholder"], ["appRestrictInput", "^[0-9.]*$", "type", "text", "formControlName", "maxFdv", "maxlength", "10", 1, "form-control", 3, "ngClass", "placeholder"], [1, "dext-score"], [3, "items", "selectedItem", "notCapitalized", "itemSelected"], [1, "contract"], [1, "pool-created"], ["placeholder", "Num", "maxlength", "4", "formControlName", "poolCreatedUnit", "appRestrictInput", "^[0-9]*$"], ["class", "gems-not-wallet", 4, "ngIf"], [1, "label-form"], [1, "form-check", "form-switch", "social-info"], ["type", "checkbox", "formControlName", "default", "id", "default", 1, "form-check-input"], ["for", "default", 1, "form-check-label"], [1, "social_description", "ms-2"], [1, "gems-container"], [1, "gems-img"], ["src", "assets/img/illustration-gemsdiscovery.svg", "alt", "gems-discovery"], [1, "gems-description"], [1, "buy-color", "new-feature"], [1, "panel-footer"], ["class", "btn btn-primary apply", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "apply", "disabled-logged", 3, "click"], ["class", "restart-filters", 4, "ngIf"], [1, "wallet-not-connected"], ["id", "filterName"], ["appRestrictInput", "^[A-Za-z0-9\\s\\-]*$", "type", "text", "maxlength", "25", 1, "form-control", 3, "disabled", "ngClass", "ngModelOptions", "ngModel", "placeholder", "ngModelChange"], ["class", "alert-form", 4, "ngIf"], [1, "alert-form"], [3, "ngTemplateOutlet"], [1, "gems-not-wallet"], [1, "btn", "btn-primary", "apply", 3, "disabled", "click"], [3, "icon"], [1, "restart-filters"], [3, "click"]],
                template: function(n, o) {
                    1 & n && (t.YNc(0, oi, 2, 1, "ng-container", 0),
                    t.YNc(1, wi, 137, 113, "ng-container", 0),
                    t.YNc(2, ki, 3, 3, "ng-template", null, 1, t.W1O),
                    t.YNc(4, vi, 3, 3, "ng-template", null, 2, t.W1O)),
                    2 & n && (t.Q6J("ngIf", o.isLoading),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.isLoading))
                },
                dependencies: [b.O5, _.TH, l.u5, l.Fj, l.Wl, l.JJ, l.JL, l.nD, l.On, l.UX, l.sg, l.u, b.mk, G.uH, G.BN, et._L, Dt.n, ei, b.tP, _._e, f.aw, f.X$, B.O7],
                styles: [".panel-body[_ngcontent-%COMP%]{padding:1rem 1.25rem}.filters-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem}.filters-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:0}.filters-form[_ngcontent-%COMP%]   .alert-form[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font-size:.6875rem;color:#ea3943;margin-top:.25rem;width:100%}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .title-filters[_ngcontent-%COMP%]{margin-bottom:.625rem}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .title-filters[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1rem}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative}@media (min-width: 1024px){.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:grid;grid-template-columns:.5fr 1fr;align-items:center}}@media (max-width: 1023px){.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.625rem}}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .label-form[_ngcontent-%COMP%]{flex:1;color:#142028;font-size:13px;font-weight:500}body.dark-theme   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .label-form[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .label-form[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .label-form[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .label-form[_ngcontent-%COMP%]{color:#142028}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .multi-filter[_ngcontent-%COMP%]{display:flex;gap:.625rem;align-items:center;flex-wrap:wrap}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .multi-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;width:100%;background-image:none}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .multi-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]{flex:1;width:100%;z-index:2}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .gems-container[_ngcontent-%COMP%]   .gems-description[_ngcontent-%COMP%]{font-size:12px;color:#142028;font-weight:400}body.dark-theme   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .gems-container[_ngcontent-%COMP%]   .gems-description[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .gems-container[_ngcontent-%COMP%]   .gems-description[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .gems-container[_ngcontent-%COMP%]   .gems-description[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .gems-container[_ngcontent-%COMP%]   .gems-description[_ngcontent-%COMP%]{color:#142028}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .gems-container[_ngcontent-%COMP%]   .new-feature[_ngcontent-%COMP%]{font-weight:500}@media (min-width: 1024px){.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .gems-container[_ngcontent-%COMP%]   .gems-img[_ngcontent-%COMP%]{display:flex;justify-content:center}}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.625rem;z-index:3}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#142028;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#142028}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{text-align:center;height:2.25rem;width:3.75rem!important}@media (max-width: 1023px){.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]    {width:100%;z-index:3}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{width:100%}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-list{width:100%}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option{width:100%}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected{width:100%}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected fa-icon{padding-right:.375rem}.apply[_ngcontent-%COMP%]{border:none;height:2.125rem;padding:.5625rem .9375rem .625rem;border-radius:1.5rem;background-color:#00b8d8;box-shadow:none;color:#142028;white-space:nowrap}body.dark-theme   [_nghost-%COMP%]   .apply[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .apply[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .apply[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .apply[_ngcontent-%COMP%]{color:#142028}.apply.disabled-logged[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .apply.disabled-logged[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .apply.disabled-logged[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .apply.disabled-logged[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .apply.disabled-logged[_ngcontent-%COMP%]{background-color:#e2e7ec}.panel-footer[_ngcontent-%COMP%]{display:flex;gap:1.625rem;padding:1.875rem 0}.panel-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{min-width:7.8125rem}.panel-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:2.125rem}input[_ngcontent-%COMP%]{border-radius:.625rem}.restart-filters[_ngcontent-%COMP%]{color:#142028;display:flex;flex-direction:row;justify-content:flex-end;margin-bottom:.625rem;font-size:13px;padding:0 1.25rem}body.dark-theme   [_nghost-%COMP%]   .restart-filters[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .restart-filters[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .restart-filters[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .restart-filters[_ngcontent-%COMP%]{color:#142028}.restart-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#142028;background:none;border:none;font-size:13px;display:flex;white-space:nowrap;gap:.5rem}body.dark-theme   [_nghost-%COMP%]   .restart-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .restart-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .restart-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .restart-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#142028}.restart-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:13px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .restart-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .restart-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .restart-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .restart-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.info-icon[_ngcontent-%COMP%]{font-size:12px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{color:#142028}.chain-selector[_ngcontent-%COMP%]     app-dropdown-chains{width:100%}.chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown  {width:100%}.chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   button{background-color:#e2e7ec;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   button{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   button{background-color:#23323c}body.light   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   button{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   button{background-color:#e2e7ec}.chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  {z-index:999997;background-color:#e2e7ec;left:0}body.dark-theme   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  {background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  {background-color:#23323c}body.light   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  {background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  {background-color:#e2e7ec}.chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content   input{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content   input{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content   input{background-color:#142028!important}body.light   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content   input{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content   input{background-color:#f4f5f6!important}.chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#f4f5f6;border-radius:0 .625rem .625rem 0}body.dark-theme   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#142028}body.light   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#f4f5f6}.filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges{width:100%}.filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .exchange:hover{color:#142028;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .exchange:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .exchange:hover{color:#fff}body.light   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .exchange:hover{color:#142028}body.light[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .exchange:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .exchange:hover{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .exchange:hover{background-color:#142028}body.light   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .exchange:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .exchange:hover{background-color:#f4f5f6}.filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown  {width:100%}.filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   button{width:100%!important;background-color:#e2e7ec!important;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   button{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   button{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   button{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   button{background-color:#e2e7ec!important}.filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  {z-index:999997;width:100%;background-color:#e2e7ec!important;left:0}body.dark-theme   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  {background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  {background-color:#23323c!important}body.light   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  {background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  {background-color:#e2e7ec!important}.filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  >input{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  >input{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  >input{background-color:#142028!important}body.light   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  >input{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  >input{background-color:#f4f5f6!important}.filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#f4f5f6!important;border-radius:0 .625rem .625rem 0}body.dark-theme   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#142028!important}body.light   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#f4f5f6!important}.disabled[_ngcontent-%COMP%]{opacity:.5}.wallet-not-connected[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex:1;align-items:center;background-color:#ffb300;color:#ffdf91;padding:.625rem;border-radius:.625rem;font-size:13px}.dext-score[_ngcontent-%COMP%]{z-index:32}.contract[_ngcontent-%COMP%]{z-index:31}app-dropdown-select[_ngcontent-%COMP%]    {width:100%;z-index:1}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{width:100%;border-radius:.625rem;z-index:1}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-list{width:100%;z-index:99999}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option{width:100%;z-index:99999;background-color:#e2e7ec;align-items:center}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option{background-color:#23323c}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option{background-color:#e2e7ec}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:hover, app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:focus{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:hover, body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:focus{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:hover, body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:focus{background-color:#142028}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:hover, body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:focus{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:hover, body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:focus{background-color:#f4f5f6}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected{width:100%;background-color:#e2e7ec;z-index:1}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected{background-color:#23323c}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected{background-color:#e2e7ec}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:hover, app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:focus{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:hover, body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:focus{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:hover, body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:focus{background-color:#23323c}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:hover, body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:focus{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:hover, body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:focus{background-color:#e2e7ec}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected fa-icon{justify-content:flex-end;flex:1;display:flex;padding-right:.375rem}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected .dot{margin-right:.25rem}.toggle-featured[_ngcontent-%COMP%]{display:flex;flex:2.7;align-items:center;font-size:12px;gap:.625rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .toggle-featured[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .toggle-featured[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .toggle-featured[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .toggle-featured[_ngcontent-%COMP%]{color:#142028}.toggle-featured[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]{padding-left:2.1875rem}.toggle-featured[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-left:.25rem}.gems-not-wallet[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;height:100%;width:100%;text-align:center;padding:1.25rem;background-color:#0b1217e6;border-radius:.625rem;z-index:2}.gems-not-wallet[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:13px;color:#fff;opacity:1}.title-gems[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.625rem}.social-info[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:2.1875rem}.social-info[_ngcontent-%COMP%]   .social_description[_ngcontent-%COMP%]{font-size:12px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .social-info[_ngcontent-%COMP%]   .social_description[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .social-info[_ngcontent-%COMP%]   .social_description[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .social-info[_ngcontent-%COMP%]   .social_description[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .social-info[_ngcontent-%COMP%]   .social_description[_ngcontent-%COMP%]{color:#142028}@media (max-width: 1023px){.panel-body[_ngcontent-%COMP%]{padding:1rem 1.25rem}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.625rem}.filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .pool-created[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}.panel-footer[_ngcontent-%COMP%]{gap:.625rem;padding:.625rem 0 1.25rem;margin-top:1.25rem}.panel-footer[_ngcontent-%COMP%]   .restart-filters[_ngcontent-%COMP%]{padding:0}.chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   button{width:100%!important;background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   button{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   button{background-color:#142028!important}body.light   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   button{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   button{background-color:#f4f5f6!important}.chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  {border-radius:.625rem;height:100%;max-height:100%;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  {background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  {background-color:#142028}body.light   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  {background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  {background-color:#f4f5f6}.chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content   input{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content   input{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content   input{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content   input{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content   input{background-color:#e2e7ec!important}.chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#23323c}body.light   [_nghost-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .chain-selector[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#e2e7ec}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{width:100%}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option{background-color:#142028}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option{background-color:#f4f5f6}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:hover, app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:focus{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:hover, body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:focus{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:hover, body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:focus{background-color:#23323c}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:hover, body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:focus{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:hover, body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .dropdown-option:focus{background-color:#e2e7ec}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected{background-color:#142028}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected{background-color:#f4f5f6}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:hover, app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:focus{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:hover, body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:focus{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:hover, body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:focus{background-color:#142028}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:hover, body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:focus{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:hover, body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper .item-selected:focus{background-color:#f4f5f6}.filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   button{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   button{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   button{background-color:#142028!important}body.light   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   button{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   button{background-color:#f4f5f6!important}.filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  {border-radius:.625rem;height:100%;max-height:100%;background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  {background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  {background-color:#142028!important}body.light   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  {background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  {background-color:#f4f5f6!important}.filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  >input{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  >input{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  >input{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  >input{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  >input{background-color:#e2e7ec!important}.filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .filter-exchange-pair[_ngcontent-%COMP%]       app-dropdown-exchanges .dropdown   .dropdown-content  ::-webkit-scrollbar-track{background-color:#e2e7ec!important}.wallet-not-connected[_ngcontent-%COMP%]{margin:1.25rem 0}.toggle-featured[_ngcontent-%COMP%]{width:100%}.name-filter[_ngcontent-%COMP%]{flex:auto!important}input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   input[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}}body.dark-theme   [_nghost-%COMP%]     .wallet-not-connected{background-color:#ffb30066}.token-type[_ngcontent-%COMP%]{align-items:flex-start!important}.token-type[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem}.info-circle[_ngcontent-%COMP%]{margin-left:.25rem}"],
                changeDetection: 0
            }),
            e
        }
        )();
        function Ti(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "img", 17, 18),
                t.NdJ("load", function() {
                    t.CHM(n);
                    const i = t.MAs(1);
                    t.oxw();
                    const r = t.MAs(6);
                    return i.style.display = "inline-block",
                    t.KtG(r.style.display = "none")
                }),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw();
                t.s9C("src", n.tokenInfo.logo, t.LSH),
                t.Q6J("width", 20)
            }
        }
        const Li = function(e, a) {
            return {
                link: e,
                icon: "desktop",
                tooltip: a
            }
        };
        function Zi(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.WLB(4, Li, n.tokenInfo.website, t.lcZ(1, 2, "pair_explorer.web")))
            }
        }
        const Ai = function(e, a) {
            return {
                link: e,
                icon: "envelope",
                tooltip: a
            }
        };
        function Si(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.WLB(4, Ai, "mailto: " + n.tokenInfo.email, t.lcZ(1, 2, "pair_explorer.email") + ": " + n.tokenInfo.email))
            }
        }
        const Fi = function() {
            return ["fab", "telegram"]
        }
          , gt = function(e, a, n) {
            return {
                link: e,
                icon: a,
                tooltip: n
            }
        };
        function Ii(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, gt, n.tokenInfo.telegram, t.DdM(4, Fi), t.lcZ(1, 2, "pair_explorer.telegram")))
            }
        }
        const Ji = function() {
            return ["fab", "twitter"]
        };
        function Ni(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, gt, n.tokenInfo.twitter, t.DdM(4, Ji), t.lcZ(1, 2, "pair_explorer.twitter")))
            }
        }
        const Di = function() {
            return ["fab", "discord"]
        };
        function Qi(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, gt, n.tokenInfo.discord, t.DdM(4, Di), t.lcZ(1, 2, "pair_explorer.discord")))
            }
        }
        function Ei(e, a) {
            if (1 & e && (t.TgZ(0, "a", 20),
            t._UZ(1, "img", 21),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", n.tokenInfo.coingecko, t.LSH),
                t.xp6(1),
                t.s9C("ngbTooltip", t.lcZ(2, 2, "pair_explorer.coingecko_link"))
            }
        }
        function Ui(e, a) {
            if (1 & e && (t.TgZ(0, "a", 20),
            t._UZ(1, "img", 22),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("href", n.tokenInfo.coinmarketcap, t.LSH),
                t.uIk("data-cmc-icon", n.tokenInfo.symbol),
                t.xp6(1),
                t.s9C("ngbTooltip", t.lcZ(2, 3, "pair_explorer.cmc_link"))
            }
        }
        const qi = function() {
            return ["fab", "youtube"]
        };
        function Yi(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, gt, n.tokenInfo.youtube, t.DdM(4, qi), t.lcZ(1, 2, "pair_explorer.youtube")))
            }
        }
        const Hi = function() {
            return ["fab", "instagram"]
        };
        function zi(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, gt, n.tokenInfo.instagram, t.DdM(4, Hi), t.lcZ(1, 2, "pair_explorer.instagram")))
            }
        }
        const Ri = function() {
            return ["fab", "tiktok"]
        };
        function Vi(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, gt, n.tokenInfo.tiktok, t.DdM(4, Ri), t.lcZ(1, 2, "pair_explorer.tiktok")))
            }
        }
        const Gi = function() {
            return ["fab", "facebook"]
        };
        function ji(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, gt, n.tokenInfo.facebook, t.DdM(4, Gi), t.lcZ(1, 2, "pair_explorer.facebook")))
            }
        }
        const Ki = function() {
            return ["fab", "medium"]
        };
        function $i(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, gt, n.tokenInfo.medium, t.DdM(4, Ki), t.lcZ(1, 2, "pair_explorer.medium")))
            }
        }
        const Bi = function() {
            return ["fab", "reddit"]
        };
        function Wi(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, gt, n.tokenInfo.reddit, t.DdM(4, Bi), t.lcZ(1, 2, "pair_explorer.reddit")))
            }
        }
        const Xi = function() {
            return ["fab", "github"]
        };
        function tr(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, gt, n.tokenInfo.github, t.DdM(4, Xi), t.lcZ(1, 2, "pair_explorer.github")))
            }
        }
        const nr = function() {
            return ["fab", "bitbucket"]
        };
        function er(e, a) {
            if (1 & e && (t.GkF(0, 19),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(37);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, gt, n.tokenInfo.bitbucket, t.DdM(4, nr), t.lcZ(1, 2, "pair_explorer.bitbucket")))
            }
        }
        function or(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "a", 23),
                t.NdJ("click", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return "desktop" === r.mediaDevice ? r.openModalSocialLink(i) : r.openSocialLinkMobile(i),
                    t.KtG(!1)
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "app-icon", 24),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw();
                t.Q6J("ngbTooltip", t.lcZ(1, 3, "pair_explorer.more_links"))("disableTooltip", "mobileTablet" === n.mediaDevice),
                t.xp6(2),
                t.Q6J("width", 18)
            }
        }
        const ar = function(e) {
            return {
                currentDate: e,
                type: "rounded"
            }
        };
        function ir(e, a) {
            if (1 & e && (t.TgZ(0, "span", 25),
            t._uU(1),
            t.ALo(2, "dateSince"),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.hij("", t.xi3(2, 1, n.tokenInfo.updatedAt, t.VKq(4, ar, n.dateNow)), " ago")
            }
        }
        function rr(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "a", 26),
                t.NdJ("click", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.goToSocialLink(i))
                }),
                t._UZ(1, "fa-icon", 27),
                t.qZA()
            }
            if (2 & e) {
                const n = a.link
                  , o = a.icon
                  , i = a.tooltip
                  , r = t.oxw();
                t.Q6J("href", n, t.LSH),
                t.xp6(1),
                t.Q6J("icon", o)("fixedWidth", !0)("ngbTooltip", i)("disableTooltip", "mobileTablet" === r.mediaDevice)
            }
        }
        function cr(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "app-panel-component", 28),
                t.NdJ("panelClosed", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return t.KtG(i.toggleSocialLinksPanel(!1))
                }),
                t._UZ(1, "app-links-social-panel", 29),
                t.ALo(2, "appSafe"),
                t.ALo(3, "translate"),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw();
                t.Q6J("showHeader", !1),
                t.xp6(1),
                t.hYB("title", "", t.lcZ(2, 6, n.tokenInfo.symbol), " ", t.lcZ(3, 8, "pair_explorer.links_modal_title"), ""),
                t.Q6J("linksSocialData", n.getDataLinksMobile())("tokenCustomInfo", n.tokenInfo)("isDarkTheme", n.isDarkTheme)
            }
        }
        let lr = (()=>{
            class e extends d.K9 {
                constructor(n, o, i, r, c, p) {
                    super(),
                    this._modalService = n,
                    this._breakpointObserver = o,
                    this._settingsService = i,
                    this._routingService = r,
                    this._environment = c,
                    this._cdRef = p,
                    this.dateNow = Date.now(),
                    this.moreSocialList = [],
                    this.showSocialList = !1,
                    this.isDarkTheme = !1,
                    this._keysMoreSocialList = ["coinmarketcap", "coingecko", "extraInfo", "github", "bitbucket", "facebook", "medium", "reddit", "tiktok", "youtube", "instagram"],
                    this._keysMainSocialList = ["website", "email", "twitter", "telegram", "discord"],
                    this.mediaDevice = "",
                    this.appContext = this._environment.app_scope
                }
                ngOnInit() {
                    this._breakpointObserver.observe([_.K5, _.mT]).pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this.mediaDevice = n.breakpoints[_.K5] ? "mobileTablet" : "desktop"
                    }
                    ),
                    this._getMoreSocialList(this.tokenInfo),
                    this._settingsService.onThemeChange$.pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this.isDarkTheme = n === w.Q2.Dark
                    }
                    )
                }
                reviewTokenSymbol(n, o) {
                    return s.i6H.getFirstValidCharacter(n, o)
                }
                goToPairExplorer(n) {
                    n.stopPropagation();
                    const o = `/${this.tokenInfo.chain}/${tt.$.PairExplorer}/${this.tokenInfo.id}`;
                    return n.ctrlKey || n.metaKey ? this._routingService.windowNavigate(o, "_blank", "noopener") : this._routingService.navigate(o)
                }
                goToSocialLink(n) {
                    n.stopImmediatePropagation()
                }
                openModalSocialLink(n) {
                    n.stopPropagation();
                    const i = this._modalService.open(zt.j, {
                        centered: !0,
                        scrollable: !0
                    }).componentInstance
                      , r = this._isBubblemapsSupportedInChain(this.tokenInfo.chain);
                    i.tokenCustomInfo = this.tokenInfo,
                    i.chain = this.tokenInfo.chain,
                    this.tokenInfo.coingecko && (i.coingeckoLink = this.tokenInfo.coingecko),
                    this.tokenInfo.coinmarketcap && (i.cmcTokenLink = this.tokenInfo.coinmarketcap),
                    i.bubbleMapsLink = r ? "https://app.bubblemaps.io/" + s.LR_[this.tokenInfo.chain] + "/token/" + this.tokenInfo.id : null
                }
                getDataLinksMobile() {
                    const o = this._isBubblemapsSupportedInChain(this.tokenInfo.chain) ? "https://app.bubblemaps.io/" + s.LR_[this.tokenInfo.chain] + "/token/" + this.tokenInfo.id : null;
                    return {
                        chain: this.tokenInfo.chain,
                        unicrypt: !1,
                        teamLockUrl: null,
                        showMetamaskIcon: !1,
                        coingeckoLink: this.tokenInfo.coingecko ?? null,
                        bubbleMapsLink: o,
                        cmcTokenLink: this.tokenInfo.coinmarketcap ?? null,
                        dxSaleLink: null,
                        mudraLink: null,
                        pairSelected: null
                    }
                }
                openSocialLinkMobile(n) {
                    n.stopPropagation(),
                    this.toggleSocialLinksPanel(!0)
                }
                toggleSocialLinksPanel(n) {
                    this.showSocialList = n,
                    this._cdRef.detectChanges()
                }
                isVisibleSocial(n, o) {
                    return -1 !== this.moreSocialList.slice(0, 5).indexOf(o)
                }
                onDestroy() {}
                _getMoreSocialList(n) {
                    const o = [];
                    this._keysMainSocialList.forEach(i=>{
                        n[i] && o.push(i)
                    }
                    ),
                    this._keysMoreSocialList.forEach(i=>{
                        n[i] && o.push(i)
                    }
                    ),
                    this.moreSocialList = [...o]
                }
                _isBubblemapsSupportedInChain(n) {
                    return null != s.LR_[n]
                }
                getPairExplorerURLWithLanguage(n) {
                    return this._routingService.setLanguageToURL(`/${n.chain}/${tt.$.PairExplorer}/${n.id}`)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(et.FF),t.Y36(y.Yg),t.Y36(w.gb),t.Y36(w.Zn),t.Y36(w.qA),t.Y36(t.sBO))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-social-card"]],
                inputs: {
                    tokenInfo: "tokenInfo",
                    dateNow: "dateNow"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 39,
                vars: 31,
                consts: [["tabindex", "0", 1, "card-container", 3, "href", "click"], [1, "title-container"], [1, "pair-symbol-container"], ["style", "display: none", "alt", "pair icon", 3, "src", "width", "load", 4, "ngIf"], [1, "pair-letter"], ["alternativeLogo", ""], [1, "symbol-name-container"], [1, "symbol"], [1, "name"], [1, "social-container"], [1, "social-list"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], ["class", "more-icons", "href", "javascript:", 3, "ngbTooltip", "disableTooltip", "click", 4, "ngIf"], ["class", "time", 4, "ngIf"], ["socialLinkEnabled", ""], [3, "showHeader", "panelClosed", 4, "ngIf"], ["alt", "pair icon", 2, "display", "none", 3, "src", "width", "load"], ["imgPairLogo", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener", 3, "href"], ["src", "assets/img/coingecko.png", "alt", "Coingecko logo", "placement", "bottom", "loading", "lazy", 1, "social-img", 3, "ngbTooltip"], ["src", "assets/img/cmc-icon-blue.jpeg", "alt", "CMC logo", "placement", "top", "loading", "lazy", 1, "cmc-icon", "social-img", 3, "ngbTooltip"], ["href", "javascript:", 1, "more-icons", 3, "ngbTooltip", "disableTooltip", "click"], ["name", "more", 3, "width"], [1, "time"], ["target", "_blank", "rel", "noopener", 3, "href", "click"], ["placement", "auto", 3, "icon", "fixedWidth", "ngbTooltip", "disableTooltip"], [3, "showHeader", "panelClosed"], [3, "title", "linksSocialData", "tokenCustomInfo", "isDarkTheme"]],
                template: function(n, o) {
                    1 & n && (t.TgZ(0, "a", 0),
                    t.NdJ("click", function(r) {
                        return o.goToPairExplorer(r),
                        !1
                    }),
                    t.TgZ(1, "div", 1)(2, "div", 2)(3, "div"),
                    t.YNc(4, Ti, 2, 2, "img", 3),
                    t.TgZ(5, "span", 4, 5),
                    t._uU(7),
                    t.qZA()(),
                    t.TgZ(8, "div", 6)(9, "span", 7),
                    t._uU(10),
                    t.ALo(11, "slice"),
                    t.ALo(12, "appSafe"),
                    t.qZA(),
                    t.TgZ(13, "span", 8),
                    t._uU(14),
                    t.ALo(15, "appSafe"),
                    t.qZA()()()(),
                    t.TgZ(16, "div", 9)(17, "div", 10),
                    t.YNc(18, Zi, 2, 7, "ng-container", 11),
                    t.YNc(19, Si, 2, 7, "ng-container", 11),
                    t.YNc(20, Ii, 2, 9, "ng-container", 11),
                    t.YNc(21, Ni, 2, 9, "ng-container", 11),
                    t.YNc(22, Qi, 2, 9, "ng-container", 11),
                    t.YNc(23, Ei, 3, 4, "a", 12),
                    t.YNc(24, Ui, 3, 5, "a", 12),
                    t.YNc(25, Yi, 2, 9, "ng-container", 11),
                    t.YNc(26, zi, 2, 9, "ng-container", 11),
                    t.YNc(27, Vi, 2, 9, "ng-container", 11),
                    t.YNc(28, ji, 2, 9, "ng-container", 11),
                    t.YNc(29, $i, 2, 9, "ng-container", 11),
                    t.YNc(30, Wi, 2, 9, "ng-container", 11),
                    t.YNc(31, tr, 2, 9, "ng-container", 11),
                    t.YNc(32, er, 2, 9, "ng-container", 11),
                    t.YNc(33, or, 3, 5, "a", 13),
                    t.qZA(),
                    t.TgZ(34, "div"),
                    t.YNc(35, ir, 3, 6, "span", 14),
                    t.qZA()()(),
                    t.YNc(36, rr, 2, 5, "ng-template", null, 15, t.W1O),
                    t.YNc(38, cr, 4, 10, "app-panel-component", 16)),
                    2 & n && (t.Q6J("href", o.getPairExplorerURLWithLanguage(o.tokenInfo), t.LSH),
                    t.xp6(4),
                    t.Q6J("ngIf", "GRUMPY" !== o.tokenInfo.symbol),
                    t.xp6(3),
                    t.hij(" ", o.reviewTokenSymbol(o.tokenInfo.symbol, o.tokenInfo.name), " "),
                    t.xp6(3),
                    t.Oqu(t.Dn7(11, 23, t.lcZ(12, 27, o.tokenInfo.symbol), 0, 9)),
                    t.xp6(4),
                    t.Oqu(t.lcZ(15, 29, o.tokenInfo.name)),
                    t.xp6(4),
                    t.Q6J("ngIf", o.tokenInfo.website),
                    t.xp6(1),
                    t.Q6J("ngIf", o.tokenInfo.email),
                    t.xp6(1),
                    t.Q6J("ngIf", o.tokenInfo.telegram),
                    t.xp6(1),
                    t.Q6J("ngIf", o.tokenInfo.twitter),
                    t.xp6(1),
                    t.Q6J("ngIf", o.tokenInfo.discord),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isVisibleSocial(o.tokenInfo.id, "coingecko")),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isVisibleSocial(o.tokenInfo.id, "coinmarketcap")),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isVisibleSocial(o.tokenInfo.id, "youtube")),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isVisibleSocial(o.tokenInfo.id, "instagram")),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isVisibleSocial(o.tokenInfo.id, "tiktok")),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isVisibleSocial(o.tokenInfo.id, "facebook")),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isVisibleSocial(o.tokenInfo.id, "medium")),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isVisibleSocial(o.tokenInfo.id, "reddit")),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isVisibleSocial(o.tokenInfo.id, "github")),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isVisibleSocial(o.tokenInfo.id, "bitbucket")),
                    t.xp6(1),
                    t.Q6J("ngIf", o.moreSocialList && o.moreSocialList.length > 5),
                    t.xp6(2),
                    t.Q6J("ngIf", o.tokenInfo.updatedAt),
                    t.xp6(3),
                    t.Q6J("ngIf", o.showSocialList))
                },
                dependencies: [b.O5, b.tP, et._L, xt.lQ, G.uH, G.BN, _.yX, Rt.J, b.OU, B.$n, B.yl, f.aw, f.X$],
                styles: [".card-container[_ngcontent-%COMP%]{background-color:#f4f5f6;padding:1.875rem 1.25rem;display:flex;justify-content:space-between;align-items:center;border-radius:.9375rem;cursor:pointer;gap:.25rem;height:6.8125rem;text-decoration:none}body.dark-theme   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{background-color:#f4f5f6}.card-container[_ngcontent-%COMP%]:hover, .card-container[_ngcontent-%COMP%]:focus{background-color:#e2e7ec;outline:none}body.dark-theme   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]:focus{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]:focus{background-color:#23323c}body.light   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]:focus{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]:focus{background-color:#e2e7ec}.card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.625rem;position:relative}.card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]   .pair-letter[_ngcontent-%COMP%]{color:#fff;background-color:#23323c;border-radius:50%;text-align:center;height:2.5rem;width:2.5rem;font-size:16px;z-index:-1;display:flex;justify-content:center;align-items:center}.card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:2.5rem;width:2.5rem;border-radius:3.125rem}.card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]   .symbol-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.0625rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]   .symbol-name-container[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]   .symbol-name-container[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]   .symbol-name-container[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]   .symbol-name-container[_ngcontent-%COMP%]{color:#142028}.card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]   .symbol-name-container[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{font-size:16px;font-weight:500;max-width:4.375rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1920px){.card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]   .symbol-name-container[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{max-width:6.25rem}}.card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]   .symbol-name-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:13px;font-weight:400;max-width:6.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1920px){.card-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .pair-symbol-container[_ngcontent-%COMP%]   .symbol-name-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{max-width:7.5rem}}.card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;flex-direction:column;align-items:flex-end;gap:.0625rem}.card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:nowrap;gap:.4375rem}.card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}.card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:.9375rem}.card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#142028;border-radius:3.125rem;display:flex;justify-content:center;align-items:center;line-height:1}body.dark-theme   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social-list[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#142028}.card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:#818ea3;font-size:12px;white-space:nowrap}body.dark-theme   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:#818ea3}.card-container[_ngcontent-%COMP%]   .social-img[_ngcontent-%COMP%]{width:.9375rem;height:.9375rem;border:.0625rem solid white;border-radius:.625rem;background-color:#fff}.card-container[_ngcontent-%COMP%]   .social-img.cmc-icon[_ngcontent-%COMP%]{border:none!important}"],
                changeDetection: 0
            }),
            e
        }
        )();
        function sr(e, a) {
            if (1 & e && t._UZ(0, "div", 3),
            2 & e) {
                const n = t.oxw();
                t.Q6J("appLoading", n.isLoading)
            }
        }
        function dr(e, a) {
            if (1 & e && (t.ynx(0),
            t._UZ(1, "app-social-card", 9),
            t.BQk()),
            2 & e) {
                const n = a.$implicit
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("tokenInfo", n)("dateNow", o.dateNow)
            }
        }
        function gr(e, a) {
            if (1 & e && (t.TgZ(0, "div"),
            t._UZ(1, "app-social-card", 9),
            t.qZA()),
            2 & e) {
                const n = a.$implicit
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("tokenInfo", n)("dateNow", o.dateNow)
            }
        }
        function _r(e, a) {
            if (1 & e && (t.TgZ(0, "div")(1, "div", 4)(2, "h3"),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA(),
            t.TgZ(5, "div", 5),
            t.YNc(6, dr, 2, 2, "ng-container", 6),
            t.qZA()(),
            t.TgZ(7, "div", 7)(8, "span"),
            t._uU(9),
            t.ALo(10, "translate"),
            t.qZA(),
            t.TgZ(11, "div", 8),
            t.YNc(12, gr, 2, 2, "div", 6),
            t.qZA()()()),
            2 & e) {
                const n = t.oxw();
                t.xp6(3),
                t.Oqu(t.lcZ(4, 4, "home.last_updated_tokens")),
                t.xp6(3),
                t.Q6J("ngForOf", n.tokenList.slice(0, 3)),
                t.xp6(3),
                t.Oqu(t.lcZ(10, 6, "home.social_description")),
                t.xp6(3),
                t.Q6J("ngForOf", n.tokenList.slice(3))
            }
        }
        const pr = function(e) {
            return {
                chain: e
            }
        };
        function hr(e, a) {
            if (1 & e && (t.TgZ(0, "div", 10)(1, "h4"),
            t._uU(2, "Ooops \u{1f644}"),
            t.qZA(),
            t.TgZ(3, "div"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw();
                t.xp6(4),
                t.Oqu(t.xi3(5, 1, "home.no_results", t.VKq(4, pr, n.chain ? n.getChainName(n.chain) : "all")))
            }
        }
        let mr = (()=>{
            class e extends d.K9 {
                constructor(n, o, i) {
                    super(),
                    this._trendingsService = n,
                    this._cdRef = o,
                    this._web3UtilsService = i,
                    this.tokenList = [],
                    this.isLoading = !1,
                    this.dateNow = Date.now()
                }
                ngOnInit() {
                    this.isLoading = !0,
                    this._web3UtilsService.isLibLoaded$.pipe((0,
                    d.sL)(this)).subscribe(()=>{
                        this._getSocialUpdated()
                    }
                    )
                }
                _getSocialUpdated() {
                    this._trendingsService.getSocialUpdatedTrendingList(this.chain).pipe((0,
                    d.sL)(this), (0,
                    Tt.a)(n=>n.pipe((0,
                    ht.g)(15 * d.VK))), (0,
                    Jt.a)(n=>n.pipe((0,
                    ht.g)(15e3), (0,
                    d.sL)(this))), (0,
                    Pt.K)(()=>[])).subscribe(n=>{
                        n && n.length && (this.tokenList = [...n],
                        this.tokenList.forEach(o=>{
                            o.id = this.toChecksumAddress(o.id, o.chain),
                            o.logo = o?.logo && s.LJP.normalizeLogoUrl(o.logo)
                        }
                        ),
                        this._startTimer()),
                        this.isLoading = !1,
                        this._cdRef.detectChanges()
                    }
                    )
                }
                toChecksumAddress(n, o) {
                    return s.LJP.checkIsEVMAddress(n, o) ? this._web3UtilsService.toChecksumAddress(n) : n
                }
                _startTimer() {
                    this._nowInterval = setInterval(()=>{
                        this.dateNow = Date.now(),
                        this._cdRef.detectChanges()
                    }
                    , 1e3)
                }
                onDestroy() {
                    this._stopTimer()
                }
                _stopTimer() {
                    clearInterval(this._nowInterval)
                }
                getChainName(n) {
                    if (n)
                        return s.CXF.getChainName(n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(s.o85),t.Y36(t.sBO),t.Y36(s.j4Y))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-social-card-list"]],
                inputs: {
                    chain: "chain"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 3,
                vars: 3,
                consts: [["class", "loading", 3, "appLoading", 4, "ngIf"], [4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "loading", 3, "appLoading"], ["role", "list", 1, "top-container"], ["role", "listitem", 1, "top-list"], [4, "ngFor", "ngForOf"], ["role", "list", 1, "card-list-container"], ["role", "listitem", 1, "card-list"], [3, "tokenInfo", "dateNow"], [1, "no-data"]],
                template: function(n, o) {
                    1 & n && (t.YNc(0, sr, 1, 1, "div", 0),
                    t.YNc(1, _r, 13, 8, "div", 1),
                    t.YNc(2, hr, 6, 6, "div", 2)),
                    2 & n && (t.Q6J("ngIf", !!o.isLoading),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.isLoading && o.tokenList.length),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.isLoading && !o.tokenList.length))
                },
                dependencies: [b.O5, _.TH, b.ax, lr, f.aw, f.X$],
                styles: [".top-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;gap:.625rem;margin-bottom:1.5rem}.top-container[_ngcontent-%COMP%]   .top-list[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;gap:.625rem;width:100%}.top-container[_ngcontent-%COMP%]   .top-list[_ngcontent-%COMP%]   app-social-card[_ngcontent-%COMP%]    {flex:1}.card-list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;gap:1.25rem}.card-list-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .card-list-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .card-list-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .card-list-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .card-list-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;width:100%}.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:25%;margin-bottom:.625rem}.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   app-social-card[_ngcontent-%COMP%]     .card-container  {margin-right:.625rem}.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   app-social-card[_ngcontent-%COMP%]     .card-container   .title-container .pair-symbol-container img, .card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   app-social-card[_ngcontent-%COMP%]     .card-container   .pair-letter{height:2.375rem;width:2.375rem}.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   app-social-card[_ngcontent-%COMP%]     .card-container   .social-img{width:.8125rem;height:.8125rem;border:.0625rem solid white;border-radius:.625rem;background-color:#fff}.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   app-social-card[_ngcontent-%COMP%]     .card-container   .social-img.cmc-icon{border:none!important}.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   app-social-card[_ngcontent-%COMP%]     .social-container .social-list a fa-icon{font-size:13px}@media (min-width: 1440px){.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4n) app-social-card     .card-container  {margin-right:0}}@media (min-width: 1024px) and (max-width: 1439px){.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:33.33%}.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3n) app-social-card     .card-container  {margin-right:0}}@media (min-width: 600px) and (max-width: 1023px){.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50%}.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n) app-social-card     .card-container  {margin-right:0}}@media (max-width: 599px){.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}.card-list-container[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   app-social-card[_ngcontent-%COMP%]     .card-container  {margin-right:0}}.loading[_ngcontent-%COMP%]{height:25rem}.no-data[_ngcontent-%COMP%]{height:18.75rem;display:flex;flex-direction:column;justify-content:center;align-items:center}"],
                changeDetection: 0
            }),
            e
        }
        )();
        const fr = ["pairListTable"]
          , Cr = function(e) {
            return {
                active: e
            }
        };
        function ur(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "button", 14),
                t.NdJ("click", function() {
                    const r = t.CHM(n).$implicit
                      , c = t.oxw(2);
                    return t.KtG(c.changeInterval(r))
                }),
                t._uU(2),
                t.qZA(),
                t.BQk()
            }
            if (2 & e) {
                const n = a.$implicit
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngClass", t.VKq(2, Cr, n === o.intervalSelected)),
                t.xp6(1),
                t.Oqu(n)
            }
        }
        function br(e, a) {
            if (1 & e && (t.TgZ(0, "div", 11)(1, "div", 12),
            t.YNc(2, ur, 3, 4, "ng-container", 13),
            t.qZA()()),
            2 & e) {
                const n = t.oxw();
                t.xp6(2),
                t.Q6J("ngForOf", n.availableIntervals)("ngForTrackBy", n.trackByInterval)
            }
        }
        function Mr(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "app-dropdown-select-crud", 18),
                t.NdJ("createOpened", function() {
                    t.CHM(n);
                    const i = t.oxw(2);
                    return t.KtG(i.createAdvancedFilter())
                })("crudCleaned", function() {
                    t.CHM(n);
                    const i = t.oxw(2);
                    return t.KtG(i.clearAdvancedFilters())
                })("itemCrudSelected", function(i) {
                    t.CHM(n);
                    const r = t.oxw(2);
                    return t.KtG(r.changeAdvancedFilter(i))
                })("itemCrudRemoved", function(i) {
                    t.CHM(n);
                    const r = t.oxw(2);
                    return t.KtG(r.removeCustomAdvancedFilter(i))
                })("itemCrudEdited", function(i) {
                    t.CHM(n);
                    const r = t.oxw(2);
                    return t.KtG(r.changeEditCustomAdvancedFilter(i))
                }),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.Q6J("dropDownCrudItems", n.customAdvancedFiltersDropDown)("selectedItem", n.selectedCustomAdvancedFilter)
            }
        }
        function Or(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 19),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw(2);
                    return t.KtG(i.toggleAdvancedFiltersPanel(!0))
                }),
                t.TgZ(1, "span"),
                t._UZ(2, "fa-icon", 20),
                t._uU(3, " Custom filters "),
                t.qZA()()
            }
        }
        function Pr(e, a) {
            if (1 & e && (t.TgZ(0, "div", 15),
            t.YNc(1, Mr, 1, 2, "app-dropdown-select-crud", 16),
            t.YNc(2, Or, 4, 0, "button", 17),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !!n.isLoggedUser),
                t.xp6(1),
                t.Q6J("ngIf", !n.isLoggedUser)
            }
        }
        function xr(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div")(1, "app-dropdown-chains", 21),
                t.NdJ("chainsSelected", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.changeChain(i))
                }),
                t.qZA()()
            }
            if (2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("showOnlyIcons", !1)("defaultChainSelected", n.defaultChain)
            }
        }
        function wr(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "app-pair-list", 22, 23),
                t.NdJ("pageChanged", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.onPageChanged(i, r.typeList))
                })("exchangeChanged", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.setExchangeSelected(i))
                }),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw();
                t.Q6J("pairList", n.pairList)("defaultSort", n.defaultSort)("intervalSelected", n.intervalSelected)("paramsFilter", n.paramsFilter)("totalCount", n.pairsTotalCount)("loading", n.loadingPairList),
                t.uIk("id", n.typeList)
            }
        }
        function kr(e, a) {
            if (1 & e && (t.TgZ(0, "div", 24),
            t._UZ(1, "app-social-card-list", 25),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.Q6J("id", n.TypeList.socials),
                t.xp6(1),
                t.Q6J("chain", n.chain)
            }
        }
        function vr(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "app-exchanges-list", 26),
                t.NdJ("pageChanged", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.onPageChanged(i, r.typeList))
                })("sortChanged", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.onSortingChange(i))
                })("exchangeSelected", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.onExchangeSelection(i))
                }),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw();
                t.Q6J("exchangeList", n.exchangeInfoList)("defaultSorts", n.exchangesDefaultSort)("paramsFilter", n.exchangesParamsFilter)("totalCount", n.exchangeListCount)("loading", n.loadingExchangeList),
                t.uIk("id", n.TypeList.exchanges)
            }
        }
        const yr = function() {
            return {}
        };
        function Tr(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "app-panel-component", 27),
                t.NdJ("panelClosed", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return t.KtG(i.panelClosed())
                }),
                t.TgZ(1, "app-advanced-filters-modal", 28),
                t.NdJ("filtersApplied", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.setFilters(i))
                })("closed", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return t.KtG(i.panelClosed())
                }),
                t.qZA()()
            }
            if (2 & e) {
                const n = t.oxw();
                t.Q6J("showHeader", !1)("backdrop", !0),
                t.xp6(1),
                t.Q6J("isLoggedUser", n.isLoggedUser)("isModal", !1)("exchangeList", n.exchangeList)("chain", n.chain)("advancedFilters", n.addAvancedFilters ? t.DdM(9, yr) : n.advancedFilters)("interval", n.intervalSelected)("customFilterEdit", n.editCustomAdvancedFilter)
            }
        }
        const Bt = function(e, a) {
            return [e, a]
        }
          , Lr = function(e, a, n) {
            return [e, a, n]
        }
          , Wt = "DashboardTab";
        let Zr = (()=>{
            class e extends d.K9 {
                onResize() {
                    this.pairListTable && this.pairListTable.table && this.pairListTable.table.recalculate(),
                    this.screenWidth = window.innerWidth
                }
                set typeList(n) {
                    this._typeListChanges$.next(n)
                }
                get typeList() {
                    return this._typeList
                }
                constructor(n, o, i, r, c, p, O, h) {
                    super(),
                    this._pairsListService = n,
                    this._authenticationService = o,
                    this._exchangeService = i,
                    this._exchangeListService = r,
                    this._web3UtilsService = c,
                    this._translate = p,
                    this._toastr = O,
                    this._cdRef = h,
                    this.availableIntervals = ["24h", "6h", "1h", "5m"],
                    this.TypeList = s.d8E,
                    this.addAvancedFilters = !1,
                    this.showAdvancedFilters = !1,
                    this.advancedFilters = {},
                    this.editCustomAdvancedFilter = null,
                    this.customAdvancedFiltersDropDown = [],
                    this.selectedCustomAdvancedFilter = null,
                    this._changeChainApp = !1,
                    this.exchangeSelected = null,
                    this.pairList = [],
                    this.intervalSelected = s.PS7,
                    this.defaultSort = [{
                        prop: "swaps",
                        dir: "desc"
                    }],
                    this.exchangesDefaultSort = [{
                        prop: "swaps",
                        dir: "desc"
                    }],
                    this.loadingPairList = !1,
                    this.loadingExchangeList = !1,
                    this.pairsTotalCount = 0,
                    this.exchangeListCount = 0,
                    this.isLoggedUser = !1,
                    this.exchangeList = [],
                    this.screenWidth = window.innerWidth,
                    this.selectedChain = null,
                    this.defaultChain = null,
                    this.exchangeInfoList = [],
                    this.chain = null,
                    this._typeList = null,
                    this.tabSelected = this._typeList,
                    this.listTypeChanged = new t.vpe,
                    this.LIMIT_LIST_INCREASE = 51,
                    this.paramsFilter = {
                        limit: s.jxT,
                        interval: s.PS7,
                        page: 1
                    },
                    this.exchangesParamsFilter = {
                        limit: this.LIMIT_LIST_INCREASE,
                        interval: "24h",
                        page: 1,
                        sort: "swaps",
                        order: "desc"
                    },
                    this.availableTabs = [{
                        id: s.d8E.pairList,
                        name: "home.pairs"
                    }, {
                        id: s.d8E.gainers,
                        name: "home.gainers"
                    }, {
                        id: s.d8E.losers,
                        name: "home.losers"
                    }, {
                        id: s.d8E.socials,
                        name: "home.updated"
                    }, {
                        id: s.d8E.exchanges,
                        name: "Exchanges"
                    }],
                    this._typeListChanges$ = new Vt.X(null)
                }
                ngOnInit() {
                    this.loadingPairList = !0,
                    this.loadingExchangeList = !0,
                    this.chain && (this.exchangesParamsFilter = {
                        ...this.exchangesParamsFilter,
                        chain: this.chain
                    },
                    this.defaultChain = this.chain,
                    this.selectedChain = this.chain)
                }
                ngAfterViewInit() {
                    if (this._authenticationService.currentUser$.pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this.isLoggedUser = !!n || !!this._authenticationService.deviceId,
                        this.isLoggedUser && this._pairsListService.getCustomAdvancedFilters().pipe((0,
                        d.sL)(this)).subscribe(o=>{
                            this._pairsListService.customAdvancedFilters = [...o]
                        }
                        )
                    }
                    ),
                    this._pairsListService.selectedAdvancedFilter && this.tabSelected && this.goToFullTable(this.tabSelected),
                    this._advancedFiltersChanges(),
                    !this.isLoggedUser) {
                        const n = this._pairsListService.storedAdvancedFilter;
                        n && (n.chain === this.chain ? this.advancedFilters = {
                            ...n
                        } : this._pairsListService.removeStoredAdvancedFilter())
                    }
                    this._typeListChanges$.pipe((0,
                    d.sL)(this), (0,
                    Po.U)(n=>n || d._Z.getString(Wt) || s.d8E.pairList), (0,
                    xo.h)(n=>null != n && n !== this._typeList)).subscribe(n=>{
                        this._typeList = n,
                        this.switchTab(this._typeList)
                    }
                    )
                }
                onDestroy() {
                    this._changeChainApp || (this._pairsListService.selectedAdvancedFilter = null)
                }
                changeEditCustomAdvancedFilter(n) {
                    this.editCustomAdvancedFilter = n,
                    this.toggleAdvancedFiltersPanel(!0)
                }
                createAdvancedFilter() {
                    this.addAvancedFilters = !0
                }
                changeAdvancedFilter(n) {
                    this.selectedCustomAdvancedFilter = n;
                    const o = this.customAdvancedFilters.find(i=>i._id === n.value);
                    if (this._pairsListService.selectedAdvancedFilter = o?._id ?? null,
                    this.advancedFilters = {
                        ...o?.filter
                    },
                    this.advancedFilters.chain != this._exchangeService.chain)
                        return this._changeChainApp = !0,
                        this._exchangeService.chain = this.advancedFilters?.chain ?? null;
                    this.advancedFilters?.exchange && (this.exchangeSelected = this.advancedFilters.exchange ?? null),
                    this.exchangeList = this.advancedFilters?.chain ? [...s.i9O.getExchangesFromChain(this.advancedFilters?.chain)] : [...s.i9O.fullExchangeList],
                    this._getDataPairs()
                }
                removeCustomAdvancedFilter(n) {
                    this._pairsListService.deleteAdvancedFilters(n.value).pipe((0,
                    Ot.q)(1)).subscribe(()=>{
                        this._pairsListService.selectedAdvancedFilter === n.value && this.clearAdvancedFilters();
                        const o = this._translate.instant("pair_list.advanced_filters.filter_delete", {
                            name: n.label
                        });
                        this._toastr.success(o, void 0, {
                            closeButton: !0,
                            positionClass: "toast-bottom-right",
                            timeOut: 3e3
                        }),
                        this._pairsListService.getCustomAdvancedFilters().pipe((0,
                        Ot.q)(1)).subscribe(i=>{
                            this._pairsListService.customAdvancedFilters = [...i]
                        }
                        )
                    }
                    )
                }
                clearAdvancedFilters() {
                    Object.keys(this.advancedFilters).length > 0 && (this._pairsListService.selectedAdvancedFilter = null,
                    this.advancedFilters = {},
                    this.exchangeSelected = null,
                    this.exchangeList = [...s.i9O.getExchangesFromChain(this.chain)],
                    this.selectedCustomAdvancedFilter = null,
                    this._setDefaultSort(),
                    this._getDataPairs())
                }
                toggleAdvancedFiltersPanel(n) {
                    this.showAdvancedFilters = n,
                    this._cdRef.detectChanges()
                }
                panelClosed() {
                    this.toggleAdvancedFiltersPanel(!1),
                    this.addAvancedFilters = !1,
                    this.editCustomAdvancedFilter = null,
                    this._cdRef.detectChanges()
                }
                _advancedFiltersChanges() {
                    this.isLoggedUser && this._pairsListService.customAdvancedFiltersChange$.pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this._buildAdvancedFiltersDropdown(n),
                        this._selectAdvancedFilter(),
                        this._cdRef.detectChanges(),
                        this._typeList && [s.d8E.pairList, s.d8E.gainers, s.d8E.losers].includes(this._typeList) && 0 === this.pairList.length && this._loadPairList()
                    }
                    )
                }
                _buildAdvancedFiltersDropdown(n) {
                    this.customAdvancedFiltersDropDown = [],
                    this.customAdvancedFilters = [...n];
                    for (const o of this.customAdvancedFilters)
                        this.customAdvancedFiltersDropDown.push(o.filter?.default ? {
                            value: o._id,
                            label: o.name,
                            customIcon: "gemIcon"
                        } : {
                            value: o._id,
                            label: o.name
                        })
                }
                _selectAdvancedFilter() {
                    this.selectedCustomAdvancedFilter = this._pairsListService.selectedAdvancedFilter ? this.customAdvancedFiltersDropDown.find(n=>n.value === this._pairsListService.selectedAdvancedFilter) ?? null : null === this.chain ? this.customAdvancedFiltersDropDown.find(n=>!!n.customIcon) ?? null : null,
                    this.selectedCustomAdvancedFilter && this.setFilters(this.customAdvancedFilters.find(n=>n._id === this.selectedCustomAdvancedFilter?.value).filter, this.pairList.length > 0)
                }
                _loadPairList() {
                    this._web3UtilsService.isLibLoaded$.pipe((0,
                    Ot.q)(1)).subscribe(()=>{
                        this._getDataPairs()
                    }
                    ),
                    s.i9O.exchangesChanged$.pipe((0,
                    d.sL)(this)).subscribe(()=>{
                        this.pairList = [...this.pairList],
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _getDataPairs(n=!0) {
                    this.pairListSubscribe && this.pairListSubscribe.unsubscribe(),
                    !this._pairsListService.selectedAdvancedFilter && void 0 === this.advancedFilters?.chain && this.chain && (this.paramsFilter = {
                        ...this.paramsFilter,
                        chain: this.chain
                    }),
                    n && (this.loadingPairList = !0,
                    this.paramsFilter = {
                        ...this.paramsFilter,
                        page: 1
                    }),
                    this.advancedFilters?.sort && (this.defaultSort = [{
                        prop: this.advancedFilters.sort,
                        dir: this.advancedFilters.order
                    }]),
                    this._cdRef.detectChanges(),
                    this.pairListSubscribe = this.apiServiceCall(this.advancedFilters).pipe((0,
                    d.sL)(this), (0,
                    Tt.a)(o=>o.pipe((0,
                    ht.g)(6e4))), (0,
                    Pt.K)(()=>(0,
                    Ft.of)(null))).subscribe(o=>{
                        o && o.pairDataList.length > 0 ? (this.pairsTotalCount = o ? o.count : 0,
                        this.pairList = [...this._pairsListService.formatData(o.pairDataList, this.intervalSelected)]) : this.pairList = [],
                        this.loadingPairList = !1,
                        this._cdRef.detectChanges()
                    }
                    )
                }
                setFilters(n, o=!0) {
                    if (!this.isLoggedUser) {
                        const i = n && Object.keys(n).length > 0;
                        !i && this._pairsListService.storedAdvancedFilter && this._pairsListService.removeStoredAdvancedFilter(),
                        i && this._pairsListService.saveOrUpdateStoredAdvancedFilter(n)
                    }
                    if (this.panelClosed(),
                    void 0 !== n?.chain && this.paramsFilter?.chain !== n.chain && (this.exchangeList = [...s.i9O.getExchangesFromChain(n.chain)],
                    this._cdRef.markForCheck()),
                    this.advancedFilters = {
                        ...n
                    },
                    this.pairList.length > 0 && n.chain != this._exchangeService.chain && !n.default)
                        return this._changeChainApp = !0,
                        this._exchangeService.chain = n?.chain ?? null;
                    this.exchangeSelected = this.advancedFilters.exchange ?? null,
                    o && this._getDataPairs()
                }
                apiServiceCall(n) {
                    const o = {};
                    for (const [i,r] of Object.entries(n))
                        if (("chain" !== i || null != r) && "default" !== i && "interval" !== i && "limit" !== i) {
                            if ("creationTimeSince" === i && (o.creationLowerTimeRange || o.creationGreaterTimeRange)) {
                                o[i] = Date.now();
                                continue
                            }
                            "sort" === i || "order" === i || (o[i] = r)
                        }
                    return this._pairsListService.getPairList({
                        ...this.paramsFilter,
                        ...o
                    }, this.typeList ?? void 0)
                }
                setExchangeSelected(n) {
                    if (this.exchangeSelected = n,
                    this.exchangeSelected)
                        this.advancedFilters = this.advancedFilters ? {
                            ...this.advancedFilters,
                            exchange: this.exchangeSelected
                        } : {
                            exchange: this.exchangeSelected
                        };
                    else {
                        const {exchange: o, ...i} = this.advancedFilters;
                        this.advancedFilters = {
                            ...i
                        }
                    }
                    this._getDataPairs()
                }
                changeInterval(n) {
                    this.intervalSelected !== n && (this.intervalSelected = n,
                    this.paramsFilter = {
                        ...this.paramsFilter,
                        interval: n
                    },
                    this.advancedFilters = {
                        ...this.advancedFilters,
                        interval: n
                    },
                    this._getDataPairs())
                }
                _setDefaultSort() {
                    switch (this._typeList) {
                    case s.d8E.losers:
                        this.defaultSort = [{
                            prop: "priceVariation",
                            dir: "asc"
                        }];
                        break;
                    case s.d8E.gainers:
                        this.defaultSort = [{
                            prop: "priceVariation",
                            dir: "desc"
                        }];
                        break;
                    default:
                        this.defaultSort = [{
                            prop: "swaps",
                            dir: "desc"
                        }]
                    }
                    this._cdRef.detectChanges()
                }
                onPageChanged(n, o) {
                    null != o && (o === s.d8E.exchanges ? (this.exchangesParamsFilter = {
                        ...this.exchangesParamsFilter,
                        page: n
                    },
                    this._cdRef.detectChanges(),
                    this._getExchangeData(!1)) : (this.paramsFilter = {
                        ...this.paramsFilter,
                        page: n
                    },
                    this._cdRef.detectChanges(),
                    this._getDataPairs(!1)))
                }
                switchTab(n) {
                    this.tabSelected === n && this._typeList === n || (this.tabSelected = n,
                    d._Z.setString(Wt, n),
                    this._typeList = this.tabSelected,
                    this.pairList = [],
                    this.exchangeInfoList = [],
                    this._cdRef.detectChanges(),
                    this._typeList === s.d8E.exchanges && this._getExchangeData(),
                    [s.d8E.pairList, s.d8E.gainers, s.d8E.losers].includes(this._typeList) && (this._setDefaultSort(),
                    this._loadPairList()),
                    this.listTypeChanged.emit(this._typeList))
                }
                goToFullTable(n) {
                    const o = document.querySelector(`#${n}`);
                    o && o.scrollIntoView({
                        block: "start",
                        inline: "nearest",
                        behavior: "smooth"
                    })
                }
                _getExchangeData(n=!0) {
                    n && (this.loadingExchangeList = !0,
                    this.exchangesParamsFilter = {
                        ...this.exchangesParamsFilter,
                        page: 1,
                        ...this.selectedChain && {
                            chain: this.selectedChain
                        }
                    },
                    this._cdRef.detectChanges()),
                    this._exchangeListService.getExchangeList(this.exchangesParamsFilter).pipe((0,
                    Ot.q)(1)).subscribe(o=>{
                        this.exchangeInfoList = [...this._exchangeListService.formatExchangeList(o.exchangeList)],
                        this.exchangeListCount = o.count,
                        this.loadingExchangeList = !1,
                        this._cdRef.detectChanges()
                    }
                    )
                }
                changeChain(n) {
                    if (this.selectedChain = n && n.length > 0 ? n[0] : null,
                    n && n.length > 0)
                        this.exchangesParamsFilter = {
                            ...this.exchangesParamsFilter,
                            ...this.selectedChain && {
                                chain: this.selectedChain
                            }
                        },
                        this._getExchangeData();
                    else {
                        const {chain: o, ...i} = this.exchangesParamsFilter;
                        this.exchangesParamsFilter = {
                            ...i
                        },
                        this._getExchangeData()
                    }
                }
                onSortingChange(n) {
                    this.exchangesDefaultSort = [{
                        prop: n.prop,
                        dir: n.dir
                    }],
                    this.exchangesParamsFilter = {
                        ...this.exchangesParamsFilter,
                        sort: n.prop,
                        order: n.dir
                    },
                    this._cdRef.detectChanges(),
                    this._getExchangeData()
                }
                onExchangeSelection(n) {
                    this.advancedFilters = {
                        ...this.advancedFilters,
                        exchange: n.exchange,
                        chain: n.chain
                    };
                    let o = (0,
                    Ft.of)("Free users cannot save filters");
                    if (this.isLoggedUser) {
                        const c = {
                            name: `${s.i9O.getExchangeNameFromExchangeApi(n.exchange, n.chain)} ${n.chain}`,
                            chain: n.chain,
                            default: !1,
                            filter: {
                                ...this.advancedFilters
                            }
                        };
                        o = this._pairsListService.saveAdvancedFilters(c).pipe((0,
                        It.w)(()=>this._pairsListService.getCustomAdvancedFilters()), (0,
                        ut.b)(p=>{
                            const O = p.find(h=>h.name === c.name && h.chain === c.chain && h.filter.chain === c.filter.chain && h.filter.exchange === c.filter.exchange);
                            this._pairsListService.selectedAdvancedFilter = O?._id ?? null,
                            this._pairsListService.customAdvancedFilters = [...p]
                        }
                        ))
                    }
                    o.pipe((0,
                    ut.b)(()=>this.switchTab(s.d8E.pairList)), (0,
                    ht.g)(250)).subscribe({
                        next: ()=>this.goToFullTable(s.d8E.pairList)
                    })
                }
                trackByInterval(n, o) {
                    return o
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(s.kAQ),t.Y36(w.$h),t.Y36(s.OqV),t.Y36(s.xlK),t.Y36(s.j4Y),t.Y36(f.sK),t.Y36(Kt._W),t.Y36(t.sBO))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-pairs-dashboard"]],
                viewQuery: function(n, o) {
                    if (1 & n && t.Gf(fr, 5),
                    2 & n) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.pairListTable = i.first)
                    }
                },
                hostBindings: function(n, o) {
                    1 & n && t.NdJ("resize", function() {
                        return o.onResize()
                    }, !1, t.Jf7)
                },
                inputs: {
                    chain: "chain",
                    typeList: "typeList"
                },
                outputs: {
                    listTypeChanged: "listTypeChanged"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 11,
                vars: 19,
                consts: [[1, "tabs-container"], [3, "tabsOptions", "defaultSelectedTab", "tabIdSelected"], [1, "table-filters"], [1, "filters"], ["class", "interval-container", 4, "ngIf"], ["class", "custom-filters", 4, "ngIf"], [4, "ngIf"], [3, "pairList", "defaultSort", "intervalSelected", "paramsFilter", "totalCount", "loading", "pageChanged", "exchangeChanged", 4, "ngIf"], ["class", "social-card-list", 3, "id", 4, "ngIf"], [3, "exchangeList", "defaultSorts", "paramsFilter", "totalCount", "loading", "pageChanged", "sortChanged", "exchangeSelected", 4, "ngIf"], ["class", "panel-filters", 3, "showHeader", "backdrop", "panelClosed", 4, "ngIf"], [1, "interval-container"], ["role", "group", "aria-label", "Interval options", 1, "options"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngClass", "click"], [1, "custom-filters"], [3, "dropDownCrudItems", "selectedItem", "createOpened", "crudCleaned", "itemCrudSelected", "itemCrudRemoved", "itemCrudEdited", 4, "ngIf"], ["class", "dropdown-button", 3, "click", 4, "ngIf"], [3, "dropDownCrudItems", "selectedItem", "createOpened", "crudCleaned", "itemCrudSelected", "itemCrudRemoved", "itemCrudEdited"], [1, "dropdown-button", 3, "click"], ["icon", "filter"], [3, "showOnlyIcons", "defaultChainSelected", "chainsSelected"], [3, "pairList", "defaultSort", "intervalSelected", "paramsFilter", "totalCount", "loading", "pageChanged", "exchangeChanged"], ["pairListTable", ""], [1, "social-card-list", 3, "id"], [3, "chain"], [3, "exchangeList", "defaultSorts", "paramsFilter", "totalCount", "loading", "pageChanged", "sortChanged", "exchangeSelected"], [1, "panel-filters", 3, "showHeader", "backdrop", "panelClosed"], [3, "isLoggedUser", "isModal", "exchangeList", "chain", "advancedFilters", "interval", "customFilterEdit", "filtersApplied", "closed"]],
                template: function(n, o) {
                    1 & n && (t.TgZ(0, "div", 0)(1, "app-tabs", 1),
                    t.NdJ("tabIdSelected", function(r) {
                        return o.switchTab(r)
                    }),
                    t.qZA(),
                    t.TgZ(2, "div", 2)(3, "div", 3),
                    t.YNc(4, br, 3, 2, "div", 4),
                    t.YNc(5, Pr, 3, 2, "div", 5),
                    t.YNc(6, xr, 2, 2, "div", 6),
                    t.qZA()()(),
                    t.YNc(7, wr, 2, 7, "app-pair-list", 7),
                    t.YNc(8, kr, 2, 2, "div", 8),
                    t.YNc(9, vr, 1, 6, "app-exchanges-list", 9),
                    t.YNc(10, Tr, 2, 10, "app-panel-component", 10)),
                    2 & n && (t.xp6(1),
                    t.Q6J("tabsOptions", o.availableTabs)("defaultSelectedTab", o.tabSelected),
                    t.xp6(3),
                    t.Q6J("ngIf", o.typeList && -1 === t.WLB(9, Bt, o.TypeList.exchanges, o.TypeList.socials).indexOf(o.typeList)),
                    t.xp6(1),
                    t.Q6J("ngIf", o.typeList && -1 === t.WLB(12, Bt, o.TypeList.exchanges, o.TypeList.socials).indexOf(o.typeList)),
                    t.xp6(1),
                    t.Q6J("ngIf", o.typeList === o.TypeList.exchanges),
                    t.xp6(1),
                    t.Q6J("ngIf", o.tabSelected && -1 !== t.kEZ(15, Lr, o.TypeList.pairList, o.TypeList.gainers, o.TypeList.losers).indexOf(o.tabSelected)),
                    t.xp6(1),
                    t.Q6J("ngIf", o.tabSelected === o.TypeList.socials),
                    t.xp6(1),
                    t.Q6J("ngIf", o.tabSelected === o.TypeList.exchanges),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showAdvancedFilters || o.addAvancedFilters))
                },
                dependencies: [_.n4, b.O5, b.ax, b.mk, _.Jk, G.uH, G.BN, Dt.n, ka, mr, Ra, _.yX, yi, f.aw],
                styles: [".tabs-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.625rem;margin-bottom:1.25rem}@media (max-width: 599px){.tabs-container[_ngcontent-%COMP%]{margin-bottom:.625rem}}.tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]    {width:max-content;height:2.75rem;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]    {background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]    {background-color:#142028}body.light   [_nghost-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]    {background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]    {background-color:#f4f5f6}.tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul>li>button{line-height:1!important;min-width:5.625rem;height:2rem}.tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul>li>button.active, .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul>li>button:hover{background-color:#fff}body.dark-theme   [_nghost-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul>li>button.active, body.dark-theme   [_nghost-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul>li>button:hover{background-color:#0b1217}body.dark-theme[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul>li>button.active, body.dark-theme[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul>li>button:hover{background-color:#0b1217}body.light   [_nghost-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul>li>button.active, body.light   [_nghost-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul>li>button:hover{background-color:#fff}body.light[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul>li>button.active, body.light[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul>li>button:hover{background-color:#fff}.table-filters[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center;justify-content:space-between;gap:1.25rem;flex-wrap:wrap;width:100%}.table-filters[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;flex-wrap:wrap;justify-content:flex-end;width:100%}.table-filters[_ngcontent-%COMP%]     app-dropdown-exchanges .dropdown   .button-selected{height:2.75rem}.table-filters[_ngcontent-%COMP%]     app-dropdown-exchanges .dropdown-content{left:0}.table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown  {position:relative;width:100%}.table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .button-selected{background-color:#f4f5f6;height:2.75rem}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .button-selected{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .button-selected{background-color:#142028}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .button-selected{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .button-selected{background-color:#f4f5f6}.table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content{right:0;left:auto;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content{background-color:#142028}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content{background-color:#f4f5f6}.table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content>input{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content>input{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content>input{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content>input{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]     app-dropdown-chains .dropdown   .dropdown-content>input{background-color:#e2e7ec!important}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{z-index:9999;min-width:10.9375rem}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{height:2.25rem;background-color:#f4f5f6;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#142028}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#818ea3}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#818ea3}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#818ea3}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected fa-icon{font-size:.625rem;margin-right:.3rem}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected:hover{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected:hover{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected:hover{color:#cacedb}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected:hover{color:#3d5170}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected:hover{color:#3d5170}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#f4f5f6;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#142028}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#818ea3}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#818ea3}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#818ea3}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:last-child{margin-top:0;border-bottom-left-radius:.9375rem;border-bottom-right-radius:.9375rem}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#e2e7ec;color:#142028}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#23323c}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{color:#fff}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{color:#142028}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{color:#142028}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list{width:100%}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list:hover{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list:hover{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list:hover{color:#cacedb}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list:hover{color:#3d5170}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list:hover{color:#3d5170}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected, .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{font-size:13px}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected img, .table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option img{height:1.4375rem;width:auto}.table-filters[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-no-radius{border-radius:.9375rem .9375rem 0 0}.table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{background:none;border:none;background-color:#f4f5f6;color:#818ea3;font-size:13px;padding:.5rem .5625rem;border-radius:.625rem;display:flex;align-items:center;min-width:10rem;width:max-content;gap:.625rem;position:relative;height:2.75rem}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{color:#818ea3}@media (max-width: 1023px){.table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{min-width:0;flex-direction:row-reverse}}.table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:12px}.table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   fa-icon.active[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   fa-icon.active[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   fa-icon.active[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   fa-icon.active[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   fa-icon.active[_ngcontent-%COMP%]{color:#142028}.table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-active[_ngcontent-%COMP%]{position:absolute;width:.375rem;height:.375rem;background-color:#00b8d8;right:.5625rem;top:.5625rem;border-radius:3.125rem}@media (min-width: 600px) and (max-width: 1023px){.table-filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-active[_ngcontent-%COMP%]{left:.5rem;top:.625rem;min-width:0;flex-direction:row-reverse}}@media (min-width: 1023px){.panel-filters[_ngcontent-%COMP%]     .panel-container{width:28.625rem}.panel-filters[_ngcontent-%COMP%]     .panel-container__content.fullHeight{overflow-x:hidden}}.dropdown-button[_ngcontent-%COMP%]{background:none;border:none;display:flex;align-items:center;justify-content:space-between;background-color:#f4f5f6;height:2.75rem;border-radius:.625rem;width:16.875rem;font-size:13px;padding:.8125rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .dropdown-button[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .dropdown-button[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .dropdown-button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dropdown-button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]{color:#142028}.interval-container[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:center}.interval-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}.interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{border-radius:.5rem;flex-wrap:wrap;display:flex;height:2.75rem;align-items:center;background-color:#f4f5f6;padding:.1875rem}body.dark-theme   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{background-color:#f4f5f6}.interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:none;color:#818ea3;font-size:13px;padding:.3125rem .625rem;height:1.875rem}body.dark-theme   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#818ea3}.interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#fff;color:#142028;border-radius:.5rem}body.dark-theme   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, body.dark-theme   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#0b1217}body.dark-theme[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, body.dark-theme[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#0b1217}body.light   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, body.light   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#fff}body.light[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, body.light[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#fff}body.dark-theme   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, body.dark-theme   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, body.dark-theme[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, body.light   [_nghost-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, body.light[_ngcontent-%COMP%]   .interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:#142028}@media (max-width: 599px){.interval-container[_ngcontent-%COMP%]{flex:1}.interval-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{width:100%;justify-content:space-between}.table-filters[_ngcontent-%COMP%]{margin-bottom:.625rem}.table-filters[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{flex-wrap:nowrap;gap:.625rem}.table-filters[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .custom-filters[_ngcontent-%COMP%]{flex:1}.table-filters[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .custom-filters[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{z-index:2}.table-filters[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .custom-filters[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]{flex:1;width:100%}.table-filters[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .custom-filters[_ngcontent-%COMP%]   app-dropdown-select-crud[_ngcontent-%COMP%]    {flex:1}.table-filters[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .custom-filters[_ngcontent-%COMP%]   app-dropdown-select-crud[_ngcontent-%COMP%]     .dropdown-button{width:100%}.table-filters[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .custom-filters[_ngcontent-%COMP%]   app-dropdown-select-crud[_ngcontent-%COMP%]     .dropdown-container{width:100%}.table-filters[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .custom-filters[_ngcontent-%COMP%]   app-dropdown-select-crud[_ngcontent-%COMP%]     .dropdown-container .options-container>li{padding:.625rem 0 .625rem 2.5rem}.table-filters[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .custom-filters[_ngcontent-%COMP%]   app-dropdown-select-crud[_ngcontent-%COMP%]     .dropdown-container .options-container>li>span{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.table-filters[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .custom-filters[_ngcontent-%COMP%]   app-dropdown-select-crud[_ngcontent-%COMP%]     .dropdown-container .crud-container>li{padding:.625rem}}.social-card-list[_ngcontent-%COMP%]{margin-top:1.25rem}app-pair-list[_ngcontent-%COMP%]    {margin-top:.625rem}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var Ar = m(27719)
          , Sr = m(62510)
          , Fr = m(64693);
        function Ir(e, a) {
            if (1 & e && (t.TgZ(0, "div", 33)(1, "h1", 34),
            t._uU(2, "DEXTboard"),
            t.qZA(),
            t.GkF(3, 18),
            t.qZA()),
            2 & e) {
                t.oxw();
                const n = t.MAs(50);
                t.xp6(3),
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function Jr(e, a) {
            if (1 & e && (t.TgZ(0, "div", 35),
            t.GkF(1, 18),
            t.qZA()),
            2 & e) {
                const n = t.oxw()
                  , o = t.MAs(30);
                t.Q6J("@toggleAnimation", n.showTrending),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)
            }
        }
        function Nr(e, a) {
            if (1 & e && (t.TgZ(0, "div", 36),
            t._UZ(1, "app-hotpairs-list-dashboard", 1),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("chain", n.currentChain)
            }
        }
        const Dr = function(e) {
            return {
                widthChanged: e
            }
        };
        function Qr(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 37)(2, "app-carousel", 38)(3, "app-carousel-item", 39),
                t.GkF(4, 18),
                t.qZA(),
                t.TgZ(5, "app-carousel-item", 39),
                t.GkF(6, 18),
                t.qZA(),
                t.TgZ(7, "app-carousel-item", 39),
                t.GkF(8, 18),
                t.qZA()()(),
                t.TgZ(9, "div", 40)(10, "app-hotpairs-list-dashboard", 41),
                t.NdJ("lastSlide", function(i) {
                    t.CHM(n);
                    const r = t.oxw();
                    return t.KtG(r.changeWidthCarousel(i))
                }),
                t.qZA()(),
                t.BQk()
            }
            if (2 & e) {
                const n = t.oxw()
                  , o = t.MAs(32)
                  , i = t.MAs(34)
                  , r = t.MAs(36);
                t.xp6(4),
                t.Q6J("ngTemplateOutlet", o),
                t.xp6(2),
                t.Q6J("ngTemplateOutlet", i),
                t.xp6(2),
                t.Q6J("ngTemplateOutlet", r),
                t.xp6(1),
                t.Q6J("ngClass", t.VKq(5, Dr, n.widthChanged)),
                t.xp6(1),
                t.Q6J("chain", n.currentChain)
            }
        }
        function Er(e, a) {
            if (1 & e && t.GkF(0, 18),
            2 & e) {
                t.oxw();
                const n = t.MAs(50);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function Ur(e, a) {
            if (1 & e && (t.TgZ(0, "div", 42),
            t.GkF(1, 18),
            t.qZA()),
            2 & e) {
                t.oxw();
                const n = t.MAs(48);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function qr(e, a) {
            if (1 & e && (t.TgZ(0, "div", 43)(1, "div", 0)(2, "div", 16)(3, "div", 17),
            t.GkF(4, 18),
            t.qZA()()()()),
            2 & e) {
                t.oxw();
                const n = t.MAs(28);
                t.xp6(4),
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function Yr(e, a) {
            if (1 & e && t.GkF(0, 18),
            2 & e) {
                t.oxw(2);
                const n = t.MAs(38);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        function Hr(e, a) {
            if (1 & e && t.GkF(0, 18),
            2 & e) {
                t.oxw(2);
                const n = t.MAs(40);
                t.Q6J("ngTemplateOutlet", n)
            }
        }
        const zr = function() {
            return ["fab", "twitter"]
        }
          , Rr = function() {
            return ["fab", "telegram"]
        }
          , Vr = function() {
            return ["fab", "discord"]
        }
          , Gr = function() {
            return ["fab", "instagram"]
        }
          , jr = function() {
            return ["fab", "tiktok"]
        }
          , Kr = function() {
            return ["fab", "medium"]
        }
          , $r = function() {
            return ["fab", "youtube"]
        };
        function Br(e, a) {
            1 & e && (t.TgZ(0, "div", 47)(1, "div", 48),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.TgZ(4, "div", 49),
            t._uU(5),
            t.ALo(6, "translate"),
            t.qZA(),
            t.TgZ(7, "div", 51)(8, "div")(9, "a", 52),
            t._UZ(10, "fa-icon", 53),
            t._uU(11, " Twitter "),
            t.qZA(),
            t.TgZ(12, "a", 54),
            t._UZ(13, "fa-icon", 53),
            t._uU(14, " Telegram "),
            t.qZA(),
            t.TgZ(15, "a", 55),
            t._UZ(16, "fa-icon", 53),
            t._uU(17, " Discord "),
            t.qZA()(),
            t.TgZ(18, "div")(19, "a", 56),
            t._UZ(20, "fa-icon", 57),
            t._uU(21, " Instagram "),
            t.qZA(),
            t.TgZ(22, "a", 58),
            t._UZ(23, "fa-icon", 57),
            t._uU(24, " TikTok "),
            t.qZA(),
            t.TgZ(25, "a", 59),
            t._UZ(26, "fa-icon", 53),
            t._uU(27, " Medium "),
            t.qZA()(),
            t.TgZ(28, "div")(29, "a", 60),
            t._UZ(30, "fa-icon", 57),
            t._uU(31, " Youtube "),
            t.qZA()()()()),
            2 & e && (t.xp6(2),
            t.hij(" ", t.lcZ(3, 9, "home.news_subtitle2"), " "),
            t.xp6(3),
            t.hij(" ", t.lcZ(6, 11, "home.news_description2"), " "),
            t.xp6(5),
            t.Q6J("icon", t.DdM(13, zr)),
            t.xp6(3),
            t.Q6J("icon", t.DdM(14, Rr)),
            t.xp6(3),
            t.Q6J("icon", t.DdM(15, Vr)),
            t.xp6(4),
            t.Q6J("icon", t.DdM(16, Gr)),
            t.xp6(3),
            t.Q6J("icon", t.DdM(17, jr)),
            t.xp6(3),
            t.Q6J("icon", t.DdM(18, Kr)),
            t.xp6(4),
            t.Q6J("icon", t.DdM(19, $r)))
        }
        function Wr(e, a) {
            if (1 & e && (t.TgZ(0, "div", 44)(1, "div", 45),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.TgZ(4, "div", 46)(5, "div", 47)(6, "div", 48),
            t._uU(7),
            t.ALo(8, "translate"),
            t.qZA(),
            t.TgZ(9, "div", 49),
            t._uU(10),
            t.ALo(11, "translate"),
            t.qZA(),
            t.YNc(12, Yr, 1, 1, "ng-container", 12),
            t.YNc(13, Hr, 1, 1, "ng-container", 12),
            t.qZA(),
            t.YNc(14, Br, 32, 20, "div", 50),
            t.qZA()()),
            2 & e) {
                const n = t.oxw();
                t.xp6(2),
                t.hij(" ", t.lcZ(3, 6, "home.news_title"), " "),
                t.xp6(5),
                t.hij(" ", t.lcZ(8, 8, "home.news_subtitle1"), " "),
                t.xp6(3),
                t.hij(" ", t.lcZ(11, 10, "home.news_description1"), " "),
                t.xp6(2),
                t.Q6J("ngIf", n.screenWidth > 910),
                t.xp6(1),
                t.Q6J("ngIf", n.screenWidth <= 910),
                t.xp6(1),
                t.Q6J("ngIf", "desktop" === n.mediaDevice)
            }
        }
        function Xr(e, a) {
            1 & e && (t.TgZ(0, "p", 61),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "home.disclaimer")))
        }
        function tc(e, a) {
            if (1 & e && t.GkF(0, 18)(1, 18)(2, 18),
            2 & e) {
                t.oxw();
                const n = t.MAs(32)
                  , o = t.MAs(34)
                  , i = t.MAs(36);
                t.Q6J("ngTemplateOutlet", n),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", i)
            }
        }
        function nc(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 62)(1, "div", 63)(2, "div", 64),
                t._UZ(3, "app-icon", 65),
                t.TgZ(4, "h4"),
                t._uU(5),
                t.ALo(6, "translate"),
                t.qZA(),
                t._UZ(7, "fa-icon", 66),
                t.ALo(8, "translate"),
                t.qZA(),
                t.TgZ(9, "div", 67)(10, "a", 68),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return i.goToFullTable(i.TypeList.gainers),
                    t.KtG(!1)
                }),
                t._uU(11),
                t.ALo(12, "translate"),
                t._UZ(13, "fa-icon", 69),
                t.qZA()()(),
                t._UZ(14, "app-trending-list", 70),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw();
                t.xp6(3),
                t.Q6J("width", 20),
                t.xp6(2),
                t.hij("", t.lcZ(6, 5, "home.bg_gainers"), " "),
                t.xp6(2),
                t.Q6J("ngbTooltip", t.lcZ(8, 7, "home.bg_gainers_tooltip")),
                t.xp6(4),
                t.hij(" ", t.lcZ(12, 9, "header.more"), " "),
                t.xp6(3),
                t.Q6J("chain", n.currentChain)
            }
        }
        function ec(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 62)(1, "div", 63)(2, "div", 64),
                t._UZ(3, "app-icon", 71),
                t.TgZ(4, "h4"),
                t._uU(5),
                t.ALo(6, "translate"),
                t.qZA(),
                t._UZ(7, "fa-icon", 66),
                t.ALo(8, "translate"),
                t.qZA(),
                t.TgZ(9, "div", 67)(10, "a", 68),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return i.goToFullTable(i.TypeList.losers),
                    t.KtG(!1)
                }),
                t._uU(11),
                t.ALo(12, "translate"),
                t._UZ(13, "fa-icon", 69),
                t.qZA()()(),
                t._UZ(14, "app-trending-list", 72),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw();
                t.xp6(3),
                t.Q6J("width", 20),
                t.xp6(2),
                t.Oqu(t.lcZ(6, 5, "home.bg_losers")),
                t.xp6(2),
                t.Q6J("ngbTooltip", t.lcZ(8, 7, "home.bg_losers_tooltip")),
                t.xp6(4),
                t.hij(" ", t.lcZ(12, 9, "header.more"), " "),
                t.xp6(3),
                t.Q6J("chain", n.currentChain)
            }
        }
        function oc(e, a) {
            1 & e && (t.TgZ(0, "h4"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "home.recently_updated")))
        }
        function ac(e, a) {
            1 & e && (t.TgZ(0, "h4"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "home.recently_updated_mobile")))
        }
        function ic(e, a) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 62)(1, "div", 63)(2, "div", 64),
                t._UZ(3, "app-icon", 73),
                t.YNc(4, oc, 3, 3, "h4", 11),
                t.YNc(5, ac, 3, 3, "h4", 11),
                t.qZA(),
                t.TgZ(6, "div", 67)(7, "a", 68),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const i = t.oxw();
                    return i.goToFullTable(i.TypeList.socials),
                    t.KtG(!1)
                }),
                t._uU(8),
                t.ALo(9, "translate"),
                t._UZ(10, "fa-icon", 69),
                t.qZA()()(),
                t._UZ(11, "app-socials-updated", 1),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw();
                t.xp6(3),
                t.Q6J("width", 20),
                t.xp6(1),
                t.Q6J("ngIf", n.screenWidth > 1260),
                t.xp6(1),
                t.Q6J("ngIf", n.screenWidth <= 1259),
                t.xp6(3),
                t.hij(" ", t.lcZ(9, 5, "header.more"), " "),
                t.xp6(3),
                t.Q6J("chain", n.currentChain)
            }
        }
        function rc(e, a) {
            if (1 & e && (t.TgZ(0, "div", 74)(1, "div", 75)(2, "div", 76),
            t.GkF(3, 18)(4, 18)(5, 18),
            t.qZA()()()),
            2 & e) {
                t.oxw();
                const n = t.MAs(42)
                  , o = t.MAs(44)
                  , i = t.MAs(46);
                t.xp6(3),
                t.Q6J("ngTemplateOutlet", n),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", i)
            }
        }
        function cc(e, a) {
            if (1 & e && (t.TgZ(0, "div", 74)(1, "div", 75)(2, "app-carousel", 77)(3, "app-carousel-item", 78),
            t.GkF(4, 18),
            t.qZA(),
            t.TgZ(5, "app-carousel-item", 78),
            t.GkF(6, 18),
            t.qZA(),
            t.TgZ(7, "app-carousel-item", 78),
            t.GkF(8, 18),
            t.qZA()()()()),
            2 & e) {
                t.oxw();
                const n = t.MAs(42)
                  , o = t.MAs(44)
                  , i = t.MAs(46);
                t.xp6(4),
                t.Q6J("ngTemplateOutlet", n),
                t.xp6(2),
                t.Q6J("ngTemplateOutlet", o),
                t.xp6(2),
                t.Q6J("ngTemplateOutlet", i)
            }
        }
        function lc(e, a) {
            1 & e && (t.TgZ(0, "div", 79)(1, "span", 80),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.TgZ(4, "span", 81),
            t._uU(5),
            t.ALo(6, "translate"),
            t.qZA()()),
            2 & e && (t.xp6(2),
            t.hij("\u{1f420}\xa0\xa0 ", t.lcZ(3, 2, "home.news_linkTitle1"), ""),
            t.xp6(3),
            t.Oqu(t.lcZ(6, 4, "home.news_linkDesc1")))
        }
        function sc(e, a) {
            1 & e && (t.TgZ(0, "div", 79)(1, "span", 80),
            t._uU(2, "\u{1f42c}\xa0\xa0DEXT Force"),
            t.qZA(),
            t.TgZ(3, "span", 81),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & e && (t.xp6(4),
            t.Oqu(t.lcZ(5, 1, "home.news_linkDesc2")))
        }
        function dc(e, a) {
            1 & e && (t.TgZ(0, "div", 79)(1, "span", 80),
            t._uU(2, "\u{1f433}\xa0\xa0DEXT Force Ventures"),
            t.qZA(),
            t.TgZ(3, "span", 81),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & e && (t.xp6(4),
            t.Oqu(t.lcZ(5, 1, "home.news_linkDesc3")))
        }
        function gc(e, a) {
            if (1 & e && (t.TgZ(0, "div", 82),
            t._uU(1),
            t.ALo(2, "translate"),
            t.TgZ(3, "a", 83)(4, "span", 84),
            t._uU(5),
            t.ALo(6, "number"),
            t.ALo(7, "translate"),
            t.qZA()()()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.hij(" ", t.lcZ(2, 3, "home.next_token_burn"), ": "),
                t.xp6(4),
                t.AsE(" ", t.xi3(6, 5, n.burnAmount, "1.0-0"), "\xa0", t.lcZ(7, 8, "home.dext_token"), "\xa0\u{1f525}")
            }
        }
        function _c(e, a) {
            if (1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.TgZ(3, "span", 88),
            t._uU(4),
            t.ALo(5, "number"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw(3);
                t.xp6(1),
                t.hij(" ", t.lcZ(2, 2, "home.networks"), ": "),
                t.xp6(3),
                t.Oqu(t.xi3(5, 4, n.globalStats.chains, "1.0-0"))
            }
        }
        function pc(e, a) {
            if (1 & e && (t.TgZ(0, "span", 88),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & e) {
                const n = t.oxw(3);
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, n.globalStats.pools, "1.0-0"))
            }
        }
        function hc(e, a) {
            if (1 & e && (t.TgZ(0, "span", 88),
            t._uU(1),
            t.ALo(2, "appRoundNumber"),
            t.qZA()),
            2 & e) {
                const n = t.oxw(3);
                t.xp6(1),
                t.Oqu(t.lcZ(2, 1, n.globalStats.pools))
            }
        }
        function mc(e, a) {
            if (1 & e && (t.TgZ(0, "span", 88),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & e) {
                const n = t.oxw(3);
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, n.globalStats.tokens, "1.0-0"))
            }
        }
        function fc(e, a) {
            if (1 & e && (t.TgZ(0, "span", 88),
            t._uU(1),
            t.ALo(2, "appRoundNumber"),
            t.qZA()),
            2 & e) {
                const n = t.oxw(3);
                t.xp6(1),
                t.Oqu(t.lcZ(2, 1, n.globalStats.tokens))
            }
        }
        const Cc = function(e) {
            return {
                "ms-2": e
            }
        };
        function uc(e, a) {
            if (1 & e && (t.TgZ(0, "div", 86),
            t.YNc(1, _c, 6, 7, "span", 11),
            t.TgZ(2, "span", 87),
            t._uU(3),
            t.ALo(4, "translate"),
            t.TgZ(5, "span", 88),
            t._uU(6),
            t.ALo(7, "number"),
            t.qZA()(),
            t.TgZ(8, "span", 89),
            t._uU(9),
            t.ALo(10, "translate"),
            t.YNc(11, pc, 3, 4, "span", 90),
            t.YNc(12, hc, 3, 3, "ng-template", null, 91, t.W1O),
            t.qZA(),
            t.TgZ(14, "span", 89),
            t._uU(15),
            t.ALo(16, "translate"),
            t.YNc(17, mc, 3, 4, "span", 90),
            t.YNc(18, fc, 3, 3, "ng-template", null, 92, t.W1O),
            t.qZA(),
            t.TgZ(20, "span", 93),
            t._uU(21),
            t.ALo(22, "translate"),
            t.TgZ(23, "a", 83)(24, "span", 94),
            t._uU(25),
            t.ALo(26, "number"),
            t.ALo(27, "translate"),
            t.qZA()()()()),
            2 & e) {
                const n = t.MAs(13)
                  , o = t.MAs(19)
                  , i = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", i.showNetworks),
                t.xp6(1),
                t.Q6J("ngClass", t.VKq(29, Cc, i.showNetworks)),
                t.xp6(1),
                t.hij(" ", t.lcZ(4, 13, "home.dexes"), ": "),
                t.xp6(3),
                t.Oqu(t.xi3(7, 15, i.globalStats.exchanges, "1.0-0")),
                t.xp6(3),
                t.hij(" ", t.lcZ(10, 18, "home.pools"), ": "),
                t.xp6(2),
                t.Q6J("ngIf", "mobileTablet" !== i.mediaDevice)("ngIfElse", n),
                t.xp6(4),
                t.hij(" ", t.lcZ(16, 20, "home.tokens"), ": "),
                t.xp6(2),
                t.Q6J("ngIf", "mobileTablet" !== i.mediaDevice)("ngIfElse", o),
                t.xp6(4),
                t.hij(" ", t.lcZ(22, 22, "home.next_token_burn"), ": "),
                t.xp6(4),
                t.AsE("", t.xi3(26, 24, i.burnAmount, "1.0-0"), "\xa0", t.lcZ(27, 27, "home.dext_token"), "\xa0\u{1f525}")
            }
        }
        function bc(e, a) {
            if (1 & e && t.YNc(0, uc, 28, 31, "div", 85),
            2 & e) {
                const n = t.oxw();
                t.Q6J("ngIf", n.globalStats)
            }
        }
        const wt = "ShowTrendings";
        let Lt = (()=>{
            class e extends d.K9 {
                constructor(n, o, i, r, c, p, O, h, I, j, S, J) {
                    super(),
                    this._tokenService = n,
                    this._actRoute = o,
                    this._settingsService = i,
                    this._cdRef = r,
                    this._seoService = c,
                    this._staticGenerationService = p,
                    this._breakpointObserver = O,
                    this._exchangeService = h,
                    this._routingService = I,
                    this._authenticationService = j,
                    this._globalStatsService = S,
                    this._location = J,
                    this.subtitle = "DEXTools.io",
                    this.TypeList = s.d8E,
                    this.currentTypeList = null,
                    this.isDarkTheme = !0,
                    this.exchangeList = [],
                    this.showNetworks = !1,
                    this.mediaDevice = "",
                    this.showTrending = !0,
                    this.screenWidth = window.innerWidth,
                    this.isLoggedUser = !1,
                    this.widthChanged = !1,
                    this._seoService.setTitle("Home"),
                    this._setShowTrending(),
                    this.currentChain = this._actRoute.snapshot.data.currentChain;
                    const P = d.lM.convertEnumToArray(s.T4m).join("|")
                      , F = this._actRoute.snapshot.routeConfig?.path?.match(new RegExp(P));
                    F && (this.currentTypeList = F[0] === s.T4m.socials ? s.d8E.socials : F[0])
                }
                ngOnInit() {
                    this._appConfig = JSON.parse(d._Z.getString("configApp")) || {},
                    this.isDarkTheme = !0 === this._appConfig.dark_theme,
                    this._settingsService.onThemeChange$.pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this.isDarkTheme = n === w.Q2.Dark
                    }
                    ),
                    this._authenticationService.currentUser$.pipe((0,
                    d.sL)(this)).subscribe(()=>{
                        this.isLoggedUser = !!this._authenticationService.getCurrentUserValue() || !!this._authenticationService.deviceId
                    }
                    ),
                    this._chainData = s.CXF.getChainData(this.currentChain),
                    this._recreateExchangeList(),
                    s.i9O.exchangesChanged$.pipe((0,
                    d.sL)(this)).subscribe(()=>{
                        this._recreateExchangeList()
                    }
                    ),
                    this._getNextBurn(),
                    this._breakpointObserver.observe([y.u3.XSmall, _.K5, _.mT]).pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        n.breakpoints[y.u3.XSmall] ? (this.mediaDevice = "mobileTablet",
                        this.xsActive = !0) : n.breakpoints[_.K5] ? (this.mediaDevice = "mobileTablet",
                        this.xsActive = !1) : (this.mediaDevice = "desktop",
                        this.xsActive = !1),
                        this._setShowTrending(),
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._staticGenerationService.takeStaticPageSnapshot(5e3),
                    this._globalStatsService.globalStats$.subscribe(n=>{
                        this.globalStats = n,
                        this.showNetworks = "number" == typeof n.chains,
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _recreateExchangeList() {
                    this.exchangeList = null !== this._exchangeService.chain ? [...s.i9O.getExchangesFromChain(this.currentChain)] : [...s.i9O.fullExchangeList]
                }
                _setShowTrending() {
                    this.showTrending = this.xsActive ? null != d._Z.get(wt) && d._Z.get(wt) : null == d._Z.get(wt) || d._Z.get(wt)
                }
                onDestroy() {}
                onPairSelected(n) {
                    const o = `/${n.item.chain}/${tt.$.PairExplorer}/${n.item.id}`;
                    n.middleButton ? this._routingService.windowNavigate(o, "_blank", "noopener") : this._routingService.navigate(o)
                }
                _getNextBurn() {
                    this._tokenService.getDextTotalBurn().pipe((0,
                    d.sL)(this)).subscribe(n=>{
                        this.burnAmount = n,
                        this._cdRef.detectChanges()
                    }
                    )
                }
                getChainName() {
                    return this._chainData.chainName
                }
                onHotPairSelected(n) {
                    this._routingService.navigate(`/${n.pair.chain}/${tt.$.PairExplorer}/${n.pair.id}`)
                }
                toggleShowTrending(n) {
                    d._Z.set(wt, n),
                    this._cdRef.detectChanges()
                }
                onListTypeChanged(n) {
                    if (n !== this.currentTypeList) {
                        const o = this.currentTypeList;
                        this.currentTypeList = n,
                        this._updateUrl(n, o),
                        this._cdRef.detectChanges()
                    }
                }
                goToFullTable(n) {
                    const o = document.querySelector("app-pairs-dashboard");
                    o && o.scrollIntoView({
                        block: "start",
                        inline: "nearest",
                        behavior: "smooth"
                    }),
                    setTimeout(()=>{
                        this.currentTypeList = n,
                        this._cdRef.detectChanges()
                    }
                    , 250)
                }
                _updateUrl(n, o=null) {
                    const i = this._location.path(!0)
                      , r = n === s.d8E.socials ? s.T4m.socials : n;
                    this._location.go(o ? i.replace(new RegExp(`${o === s.d8E.socials ? s.T4m.socials : o}`), `${r}`) : `${i}/${r}`)
                }
                changeWidthCarousel(n) {
                    this.widthChanged = !0 === n,
                    this._cdRef.detectChanges()
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(s.Brn),t.Y36(Sr.gz),t.Y36(w.gb),t.Y36(t.sBO),t.Y36(w.v2),t.Y36(Fr.p),t.Y36(y.Yg),t.Y36(s.OqV),t.Y36(w.Zn),t.Y36(w.$h),t.Y36(s.NmI),t.Y36(b.Ye))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-new-home"]],
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 51,
                vars: 15,
                consts: [[1, "home-container"], [3, "chain"], [1, "page-header"], ["class", "home-title", 4, "ngIf"], [1, "trending-burn-featured", "featured"], [1, "toggle-featured"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "showTrends", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "showTrends", 1, "form-check-label"], ["class", "featured-lists", 4, "ngIf"], ["class", "hotpairs-list-dashboard", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [3, "chain", "typeList", "listTypeChanged"], [1, "container-fluid", "section-news-container", "section-container"], [1, "row"], [1, "col-12", "col-home"], [3, "ngTemplateOutlet"], ["class", "container-fluid section-news-container dark", 4, "ngIf"], ["newsInfo", ""], ["disclaimer", ""], ["trending", ""], ["trendingGainers", ""], ["trendingLosers", ""], ["trendingUpdate", ""], ["linksContainerPc", ""], ["linksContainerMobile", ""], ["dfLink1", ""], ["dfLink2", ""], ["dfLink3", ""], ["burn", ""], ["infoGlobalStats", ""], [1, "home-title"], [1, "page-title"], [1, "featured-lists"], [1, "hotpairs-list-dashboard"], [1, "featured-lists-mobile"], ["maxHeight", "170"], ["height", "170", "width", "320"], [1, "hotpairs-list-dashboard", 3, "ngClass"], [3, "chain", "lastSlide"], [1, "mt-2"], [1, "container-fluid", "section-news-container", "dark"], [1, "news-container"], [1, "news-container__title"], [1, "news-container__info"], [1, "news-column"], [1, "news-container__subtitle"], [1, "news-container__description"], ["class", "news-column", 4, "ngIf"], [1, "news-container__links"], ["target", "_blank", "rel", "noopener", "href", "https://twitter.com/DEXToolsApp"], [1, "icon-table", "me-1", 3, "icon"], ["target", "_blank", "rel", "noopener", "href", "https://t.me/DEXToolsCommunity"], ["target", "_blank", "rel", "noopener", "href", "https://discord.com/invite/wVanCNraEh"], ["target", "_blank", "rel", "noopener", "href", "https://www.instagram.com/dextools.official/"], [1, "icon-table", 3, "icon"], ["target", "_blank", "rel", "noopener", "href", "https://www.tiktok.com/@dextools"], ["target", "_blank", "rel", "noopener", "href", "https://dextools.medium.com"], ["target", "_blank", "rel", "noopener", "href", "https://www.youtube.com/c/DEXToolsAcademy?sub_confirmation=1"], [1, "disclaimer"], [1, "featured-container"], [1, "header"], [1, "title"], ["name", "arrowUp", 3, "width"], ["icon", "info-circle", 1, "info", 3, "ngbTooltip"], [1, "more-info"], ["href", "javascript:", 3, "click"], ["icon", "chevron-down"], ["trendingType", "gainers", 3, "chain"], ["name", "arrowDown", 3, "width"], ["trendingType", "losers", 3, "chain"], ["name", "update", 3, "width"], [1, "container-carousel-df"], [1, "news-container__dfLinks"], [1, "dfLinks__container"], ["maxHeight", "130"], ["width", "279", "height", "130"], [1, "dfLinks__link"], [1, "dfLinks__title"], [1, "dfLinks__description"], [1, "burn-container"], ["target", "_blank", "rel", "noopener", "href", "https://burn.dextools.io/"], [1, "value--highlighted"], ["class", "home-title__info", 4, "ngIf"], [1, "home-title__info"], [3, "ngClass"], [1, "value"], [1, "ms-2"], ["class", "value", 4, "ngIf", "ngIfElse"], ["poolsMobile", ""], ["tokensMobile", ""], [1, "next-token-burn", "ms-2"], [1, "value--highlighted", "ms-1"]],
                template: function(n, o) {
                    if (1 & n && (t.TgZ(0, "app-layout")(1, "div", 0),
                    t._UZ(2, "app-dashboard-carousel", 1),
                    t.TgZ(3, "div", 2),
                    t.YNc(4, Ir, 4, 1, "div", 3),
                    t.TgZ(5, "div", 4)(6, "div", 5)(7, "span"),
                    t._uU(8),
                    t.ALo(9, "translate"),
                    t.qZA(),
                    t.TgZ(10, "div", 6)(11, "input", 7),
                    t.NdJ("ngModelChange", function(r) {
                        return o.showTrending = r
                    })("ngModelChange", function(r) {
                        return o.toggleShowTrending(r)
                    }),
                    t.qZA(),
                    t._UZ(12, "label", 8),
                    t.qZA()()()(),
                    t.YNc(13, Jr, 2, 2, "div", 9),
                    t.YNc(14, Nr, 2, 1, "div", 10),
                    t.YNc(15, Qr, 11, 7, "ng-container", 11),
                    t.YNc(16, Er, 1, 1, "ng-container", 12),
                    t.YNc(17, Ur, 2, 1, "div", 13),
                    t.TgZ(18, "app-pairs-dashboard", 14),
                    t.NdJ("listTypeChanged", function(r) {
                        return o.onListTypeChanged(r)
                    }),
                    t.qZA()(),
                    t.TgZ(19, "div", 15)(20, "div", 0)(21, "div", 16)(22, "div", 17),
                    t.GkF(23, 18),
                    t.qZA()()()(),
                    t.YNc(24, qr, 5, 1, "div", 19),
                    t.qZA(),
                    t.YNc(25, Wr, 15, 12, "ng-template", null, 20, t.W1O),
                    t.YNc(27, Xr, 3, 3, "ng-template", null, 21, t.W1O),
                    t.YNc(29, tc, 3, 3, "ng-template", null, 22, t.W1O),
                    t.YNc(31, nc, 15, 11, "ng-template", null, 23, t.W1O),
                    t.YNc(33, ec, 15, 11, "ng-template", null, 24, t.W1O),
                    t.YNc(35, ic, 12, 7, "ng-template", null, 25, t.W1O),
                    t.YNc(37, rc, 6, 3, "ng-template", null, 26, t.W1O),
                    t.YNc(39, cc, 9, 3, "ng-template", null, 27, t.W1O),
                    t.YNc(41, lc, 7, 6, "ng-template", null, 28, t.W1O),
                    t.YNc(43, sc, 6, 3, "ng-template", null, 29, t.W1O),
                    t.YNc(45, dc, 6, 3, "ng-template", null, 30, t.W1O),
                    t.YNc(47, gc, 8, 10, "ng-template", null, 31, t.W1O),
                    t.YNc(49, bc, 1, 1, "ng-template", null, 32, t.W1O)),
                    2 & n) {
                        const i = t.MAs(26);
                        t.xp6(2),
                        t.Q6J("chain", o.currentChain),
                        t.xp6(2),
                        t.Q6J("ngIf", !o.xsActive),
                        t.xp6(4),
                        t.Oqu(t.lcZ(9, 13, "pair_list.trending_today")),
                        t.xp6(3),
                        t.Q6J("ngModel", o.showTrending),
                        t.xp6(2),
                        t.Q6J("ngIf", !!o.showTrending && "desktop" === o.mediaDevice),
                        t.xp6(1),
                        t.Q6J("ngIf", !!o.showTrending && "desktop" === o.mediaDevice),
                        t.xp6(1),
                        t.Q6J("ngIf", "mobileTablet" === o.mediaDevice && !!o.showTrending),
                        t.xp6(1),
                        t.Q6J("ngIf", o.xsActive),
                        t.xp6(1),
                        t.Q6J("ngIf", o.burnAmount),
                        t.xp6(1),
                        t.Q6J("chain", o.currentChain)("typeList", o.currentTypeList),
                        t.xp6(5),
                        t.Q6J("ngTemplateOutlet", i),
                        t.xp6(1),
                        t.Q6J("ngIf", "desktop" === o.mediaDevice)
                    }
                },
                dependencies: [Ar.$, ue, b.O5, b.tP, l.u5, l.Wl, l.JJ, l.On, Oo, _.Fy, _.LB, b.mk, Zr, G.uH, G.BN, xt.lQ, et._L, Te, ho, b.JJ, B.WA, f.aw, f.X$],
                styles: [".main-content-container[_ngcontent-%COMP%]{background-color:#fff;padding:0 1.5rem!important}.home-container[_ngcontent-%COMP%]{padding:0 1.25rem}@media (max-width: 599px){.home-container[_ngcontent-%COMP%]{padding:0 .625rem}.home-container[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.home-container[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]   .col-home[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.home-container[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]   .adjust-mobile[_ngcontent-%COMP%]{padding-left:0!important}.home-container[_ngcontent-%COMP%]   .box-home-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.home-container[_ngcontent-%COMP%]   .box-home-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{padding-left:0;padding-right:0}}.text-chain[_ngcontent-%COMP%]{color:#868e96}.home-title[_ngcontent-%COMP%]{color:#142028;width:auto;display:flex;align-items:baseline}body.dark-theme   [_nghost-%COMP%]   .home-title[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .home-title[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]{color:#142028}.home-title__info[_ngcontent-%COMP%]{margin:0 .8125rem;font-size:12px;color:#818ea3}.home-title__info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .home-title__info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .home-title__info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .home-title__info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .home-title__info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#142028}.home-title__info[_ngcontent-%COMP%]   .value--highlighted[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#00b8d8!important;border-radius:3.125rem;padding:.25rem .4375rem;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .home-title__info[_ngcontent-%COMP%]   .value--highlighted[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .home-title__info[_ngcontent-%COMP%]   .value--highlighted[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .home-title__info[_ngcontent-%COMP%]   .value--highlighted[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .home-title__info[_ngcontent-%COMP%]   .value--highlighted[_ngcontent-%COMP%]{background-color:#e2e7ec}@media (max-width: 800px){.home-title__info[_ngcontent-%COMP%]   .next-token-burn[_ngcontent-%COMP%]{display:none}}@media (max-width: 599px){.home-title__info[_ngcontent-%COMP%]{margin:0 0 1.25rem}}.home-title[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{font-size:2rem;font-weight:500;letter-spacing:unset;text-transform:none;margin:0}.box-home[_ngcontent-%COMP%]{background-color:#f4f5f6;border-radius:1rem;margin-bottom:.625rem}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:none;background:none}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:24px;font-weight:500;letter-spacing:0;display:flex;align-items:center}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .fa.fa-circle[_ngcontent-%COMP%], .box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .fa.fa-circle-thin[_ngcontent-%COMP%]{font-size:20px}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span.bold-text[_ngcontent-%COMP%]{font-weight:500!important}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   img.chain-logo[_ngcontent-%COMP%]{width:2.125rem;height:2.125rem;position:relative;left:0;top:0;border-radius:unset;background-color:transparent!important;padding:0;box-shadow:none!important;border:none!important}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   img.chain-logo.fantom[_ngcontent-%COMP%]{border-radius:1.25rem}.box-home[_ngcontent-%COMP%]   .box-home-header[_ngcontent-%COMP%]   .button-help[_ngcontent-%COMP%]{border:none!important;padding:0!important;background-color:#e2e7ec;border-radius:3.125rem;height:1.875rem;width:1.875rem;display:flex;align-items:center;justify-content:center;color:#3d5170;font-size:16px}.box-home[_ngcontent-%COMP%]   .box-home-body[_ngcontent-%COMP%]{background-color:transparent}@media (min-width: 768px){.box-home[_ngcontent-%COMP%]{min-height:7.5rem}.box-home.box-column[_ngcontent-%COMP%]{min-height:50rem}.box-home.read-more[_ngcontent-%COMP%]{min-height:56.5rem}}@media (max-width: 767px){.box-home.box-column[_ngcontent-%COMP%]{min-height:7.5rem}}.col-home[_ngcontent-%COMP%]{padding-right:.3125rem;padding-left:.3125rem}@media (max-width: 768px){.col-home[_ngcontent-%COMP%]{padding:0 .625rem}}app-hot-pairs-list[_ngcontent-%COMP%]{display:none}app-hot-pairs-list.active[_ngcontent-%COMP%]{display:block}.btn-dark[_ngcontent-%COMP%]{background:#e2e7ec}.sponsor-types[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{align-items:center;border:.0625rem solid #212529;border-radius:.375rem;color:#058dc3;display:inline-flex;justify-content:center;height:1.4375rem;padding:0 .3125rem;margin-left:.25rem;max-width:6.25rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.sponsor-icons[_ngcontent-%COMP%]{z-index:1;margin-top:-.25rem;margin-left:-.25rem}.featured-alert[_ngcontent-%COMP%]{height:3.125rem;line-height:3.125rem;position:fixed;text-align:center;top:0;width:100%;z-index:9999}.new-tag[_ngcontent-%COMP%]{left:50%}.page-subtitle[_ngcontent-%COMP%]{font-size:12px;margin-bottom:.375rem}.ether-title[_ngcontent-%COMP%]{color:#6c89ff}.bnb-title[_ngcontent-%COMP%]{color:#efb90a}.polygon-title[_ngcontent-%COMP%]{color:#8247e5}.fantom-title[_ngcontent-%COMP%]{color:#1969ff}.cronos-title[_ngcontent-%COMP%]{color:#1199fa}.avalanche-title[_ngcontent-%COMP%]{color:#e74042}.oasis-title[_ngcontent-%COMP%]{color:#0092f6}.velas-title[_ngcontent-%COMP%]{color:#0037c1}.metis-title[_ngcontent-%COMP%]{color:#2adacc}.kucoin-title[_ngcontent-%COMP%]{color:#31d7a0}.optimism-title[_ngcontent-%COMP%]{color:#ff0420}.arbitrum-title[_ngcontent-%COMP%]{color:#28a0f0}.celo-title[_ngcontent-%COMP%]{color:#35d07f}.telos-title[_ngcontent-%COMP%]{color:#cbcaf9}.aurora-title[_ngcontent-%COMP%]{color:#6ee4e5}.moonbeam-title[_ngcontent-%COMP%]{color:#ea5aa2}.moonriver-title[_ngcontent-%COMP%]{color:#f2a007}.harmony-title[_ngcontent-%COMP%]{color:#3ad8d1}.astar-title[_ngcontent-%COMP%]{color:#1b6dc1}.fuse-title[_ngcontent-%COMP%]{color:#b3ffbb}.iotex-title[_ngcontent-%COMP%]{color:#44ffb2}.okc-title[_ngcontent-%COMP%]{color:#205fec}.box-container[_ngcontent-%COMP%]{padding:1.25rem 1.25rem 0;font-size:13px}.info-container[_ngcontent-%COMP%]{padding:.3125rem 1.25rem 1.25rem;line-height:1.21875rem;color:#142028;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#142028}.info-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#00b8d8}.info-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:.5rem}.big-volume-container[_ngcontent-%COMP%]{min-height:41.875rem}.big-volume-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .big-volume-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .big-volume-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .big-volume-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .big-volume-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#142028}@media (max-width: 767px){.big-volume-container[_ngcontent-%COMP%]{min-height:7.5rem}}.big-volume-container.read-more[_ngcontent-%COMP%]{min-height:48.375rem}.dextforce-link[_ngcontent-%COMP%]{height:50rem;min-height:auto;padding-right:1.875rem;background:linear-gradient(270deg,#f4f5f6 0%,#cacedb 100%)}.dextforce-link__container[_ngcontent-%COMP%]{display:flex}@media (min-width: 1024px){  .dextforce .modal-dialog{max-width:50rem}}.section-container[_ngcontent-%COMP%]{margin-top:1rem}.section-news-container[_ngcontent-%COMP%]{padding:0 .625rem;background-color:#f4f5f6}@media (max-width: 599px){.section-news-container[_ngcontent-%COMP%]{padding:0}}.section-news-container.dark[_ngcontent-%COMP%]{background-color:#f4f5f6;border-top:1px solid #e1e5eb;color:#142028;font-size:.6875rem;text-align:center;padding-top:1.875rem;padding-bottom:1.875rem}body.dark-theme   [_nghost-%COMP%]   .section-news-container.dark[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .section-news-container.dark[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .section-news-container.dark[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .section-news-container.dark[_ngcontent-%COMP%]{background-color:#f4f5f6}.news-container[_ngcontent-%COMP%]{padding:3.125rem 0;color:#142028}body.dark-theme   [_nghost-%COMP%]   .news-container[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .news-container[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]{color:#142028}.news-container__info[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.news-container__info[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]{flex-grow:1;flex-basis:0;min-width:0}@media (min-width: 1024px){.news-container__info[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]:first-child{padding-right:3.125rem}.news-container__info[_ngcontent-%COMP%]   .news-column[_ngcontent-%COMP%]:last-child{min-width:16.625rem;max-width:22.875rem}}.news-container__title[_ngcontent-%COMP%]{font-weight:500;font-size:24px;line-height:2.25rem;margin-bottom:1.25rem}.news-container__subtitle[_ngcontent-%COMP%]{font-weight:500;font-size:16px;line-height:1.5rem}.news-container__description[_ngcontent-%COMP%]{margin-top:.625rem;font-size:13px;line-height:1.25rem}.news-container__links[_ngcontent-%COMP%]{display:flex}.news-container__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-right:1.5625rem}.news-container__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028;font-size:13px;margin-top:.75rem;display:block}body.dark-theme   [_nghost-%COMP%]   .news-container__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .news-container__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .news-container__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .news-container__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}.news-container__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:16px}.news-container__dfLinks[_ngcontent-%COMP%]{width:100%}@media (min-width: 1024px){.news-container__dfLinks[_ngcontent-%COMP%]{margin-top:1.875rem}}.news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__container[_ngcontent-%COMP%]{display:flex;width:auto}.news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]{background-color:#e2e7ec;flex:1;margin-right:1.25rem;border-radius:.9375rem;padding:1.25rem}body.dark-theme   [_nghost-%COMP%]   .news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]{background-color:#e2e7ec}.news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]:last-child{margin-right:0}.news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]   .dfLinks__title[_ngcontent-%COMP%]{display:block;font-size:.875rem}.news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]   .dfLinks__description[_ngcontent-%COMP%]{display:block;font-size:12px;margin-top:.9375rem}@media (max-width: 1023px){.news-container[_ngcontent-%COMP%]   .container-carousel-df[_ngcontent-%COMP%]{width:100%;overflow:hidden;height:8.125rem;margin-top:1.875rem}.news-container__dfLinks[_ngcontent-%COMP%]{width:100%}.news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__container[_ngcontent-%COMP%]{display:block}.news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]{display:inline-flex;flex-flow:column;margin-right:1.25rem;min-width:17.4375rem;height:8.125rem;width:calc((100% - 40px) / 3);border-radius:.9375rem;padding:1.25rem}.news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]:last-child{margin-right:0}.news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]   .dfLinks__title[_ngcontent-%COMP%]{display:block;font-size:.875rem}.news-container__dfLinks[_ngcontent-%COMP%]   .dfLinks__link[_ngcontent-%COMP%]   .dfLinks__description[_ngcontent-%COMP%]{display:block;font-size:12px;margin-top:.9375rem}}@media (max-width: 1023px){.hotpairs-list-dashboard[_ngcontent-%COMP%]{width:calc(100% + 20px)}.hotpairs-list-dashboard.widthChanged[_ngcontent-%COMP%]{width:100%}}@media (max-width: 599px){.hotpairs-list-dashboard[_ngcontent-%COMP%]{width:calc(100% + 10px)}.hotpairs-list-dashboard.widthChanged[_ngcontent-%COMP%]{width:100%}}.featured-lists[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;gap:.625rem;width:100%;margin-bottom:1.25rem}.featured-lists-mobile[_ngcontent-%COMP%]{width:100%;margin-bottom:1.25rem}.featured-container[_ngcontent-%COMP%]{flex:1;border-radius:.625rem;background-color:#f4f5f6;padding:1.25rem;width:100%;display:block;min-width:17.625rem;min-height:8.5625rem}body.dark-theme   [_nghost-%COMP%]   .featured-container[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .featured-container[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%]{background-color:#f4f5f6}.featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center;margin-bottom:1.25rem;justify-content:space-between}.featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{justify-content:flex-start;display:flex;align-items:center;gap:.5rem}.featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:0}.featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#818ea3;font-size:12px;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#818ea3}.featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028;font-size:13px;margin-left:-.25rem}body.dark-theme   [_nghost-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}.featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:20px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{color:#142028}.featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:13px;cursor:pointer}.featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]    {font-size:.5rem}.featured-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]     svg{transform:rotate(-90deg)}.page-header[_ngcontent-%COMP%]{margin:1.875rem 0 1.25rem;color:#142028;display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap}body.dark-theme   [_nghost-%COMP%]   .page-header[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .page-header[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]{color:#142028}@media (max-width: 1023px){.page-header[_ngcontent-%COMP%]{margin:1.25rem 0}}.trending-burn-featured[_ngcontent-%COMP%]{display:flex;flex-flow:column wrap}@media (max-width: 599px){.trending-burn-featured[_ngcontent-%COMP%]{margin-top:.625rem;gap:.625rem}.trending-burn-featured.featured[_ngcontent-%COMP%]{margin-top:0}}.trending-burn-featured[_ngcontent-%COMP%]   .toggle-featured[_ngcontent-%COMP%]{display:flex;font-size:13px;gap:.625rem;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .trending-burn-featured[_ngcontent-%COMP%]   .toggle-featured[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .trending-burn-featured[_ngcontent-%COMP%]   .toggle-featured[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .trending-burn-featured[_ngcontent-%COMP%]   .toggle-featured[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .trending-burn-featured[_ngcontent-%COMP%]   .toggle-featured[_ngcontent-%COMP%]{color:#818ea3}.burn-container[_ngcontent-%COMP%]{display:none}@media (max-width: 800px){.burn-container[_ngcontent-%COMP%]{font-size:12px;display:flex;align-items:center;gap:.625rem;margin-bottom:1.25rem;color:#818ea3;width:100%}body.dark-theme   [_nghost-%COMP%]   .burn-container[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .burn-container[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .burn-container[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .burn-container[_ngcontent-%COMP%]{color:#818ea3}}.custom-toggle[_ngcontent-%COMP%]{transform:scale(.75)}.disclaimer[_ngcontent-%COMP%]{font-size:.6875rem}app-hot-pairs-header[_ngcontent-%COMP%]     .header-hot-pairs{margin-bottom:0;margin-left:0;margin-right:0}body.dark-theme   [_nghost-%COMP%]     .carousel-container.right:after{background:linear-gradient(270deg,#142028 12.86%,rgba(20,32,40,0) 87.14%)}body.dark-theme   [_nghost-%COMP%]     .carousel-container.left:before{background:linear-gradient(90deg,#142028 12.86%,rgba(20,32,40,0) 87.14%)}body.dark-theme   [_nghost-%COMP%]     .section-news-container{background-color:#101a21}body.dark-theme   [_nghost-%COMP%]     .section-news-container.dark{border-top:none;color:#818ea3}body.dark-theme   [_nghost-%COMP%]     .news-container__dfLinks .dfLinks__link{background:linear-gradient(270deg,#142028 0%,#0b2e42 100%)}"],
                data: {
                    animation: [(0,
                    N.X$)("toggleAnimation", [(0,
                    N.SB)("in", (0,
                    N.oB)({
                        opacity: 1
                    })), (0,
                    N.eR)(":enter", [(0,
                    N.oB)({
                        opacity: 0
                    }), (0,
                    N.jt)(500)]), (0,
                    N.eR)(":leave", (0,
                    N.jt)(200, (0,
                    N.oB)({
                        opacity: 0
                    })))])]
                },
                changeDetection: 0
            }),
            e
        }
        )();
        const Mc = d.lM.convertEnumToArray(s.T4m).map(e=>({
            path: `${e}`,
            component: Lt,
            canActivate: [w.kG],
            resolve: {
                currentChain: s.VU5,
                exchangeList: (a,n)=>(0,
                t.f3M)(s.YfE).resolve(a, n),
                currentLanguage: w.q3
            }
        }))
          , Oc = d.lM.convertEnumToArray(s.T4m).map(e=>({
            path: `:chain/${e}`,
            component: Lt,
            canActivate: [s.bbF, w.kG],
            resolve: {
                currentChain: s.VU5,
                exchangeList: (a,n)=>(0,
                t.f3M)(s.YfE).resolve(a, n),
                currentLanguage: w.q3
            }
        }))
          , Pc = [{
            path: "",
            component: Lt,
            canActivate: [w.kG],
            resolve: {
                currentChain: s.VU5,
                exchangeList: (e,a)=>(0,
                t.f3M)(s.YfE).resolve(e, a),
                currentLanguage: w.q3
            }
        }, ...Mc, {
            path: ":chain",
            component: Lt,
            canActivate: [s.bbF, w.kG],
            resolve: {
                currentChain: s.VU5,
                exchangeList: (e,a)=>(0,
                t.f3M)(s.YfE).resolve(e, a),
                currentLanguage: w.q3
            }
        }, ...Oc]
    }
}]);
