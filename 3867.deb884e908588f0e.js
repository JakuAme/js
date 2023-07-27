"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[3867], {
    37713: (B,w,a)=>{
        a.d(w, {
            U: ()=>I
        });
        var n = a(52413)
          , l = a(12113)
          , _ = a(89383)
          , S = a(49319)
          , f = a(36895)
          , s = a(94650)
          , b = a(62289);
        function T(m, v) {
            if (1 & m && (s.O4$(),
            s.TgZ(0, "linearGradient", 9),
            s._UZ(1, "stop", 10)(2, "stop", 11),
            s.qZA()),
            2 & m) {
                const d = s.oxw(2);
                s.Q6J("id", "gradient_" + d.index),
                s.xp6(1),
                s.uIk("stop-color", d.colorValue),
                s.xp6(1),
                s.uIk("stop-color", d.colorValue)
            }
        }
        const u = function(m, v) {
            return {
                "tablet-layout": m,
                small: v
            }
        }
          , k = function(m) {
            return {
                "stroke-dashoffset": m
            }
        };
        function R(m, v) {
            if (1 & m && (s.TgZ(0, "div", 1),
            s.ALo(1, "translate"),
            s.TgZ(2, "div", 2)(3, "div", 3),
            s.O4$(),
            s.TgZ(4, "svg", 4),
            s.YNc(5, T, 3, 3, "linearGradient", 5),
            s._UZ(6, "path", 6)(7, "path", 7),
            s.qZA(),
            s.kcU(),
            s.TgZ(8, "div", 8),
            s._uU(9),
            s.qZA()()()()),
            2 & m) {
                const d = s.oxw();
                s.Q6J("ngClass", s.WLB(13, u, d.isTablet, "small" === d.size))("ngbTooltip", s.lcZ(1, 11, "pair_explorer.no_dextscore_message"))("disableTooltip", 0 !== d.dextScore.value),
                s.xp6(2),
                s.Q6J("id", "progressDext_" + d.index),
                s.xp6(3),
                s.Q6J("ngIf", 0 !== d.dextScore.value),
                s.xp6(2),
                s.Q6J("id", "dextValue_" + d.index)("ngStyle", s.VKq(16, k, d.loadScore)),
                s.uIk("stroke", "url(#gradient_" + d.index + ")"),
                s.xp6(1),
                s.ekj("dext-value__empty", 0 === d.dextScore.value),
                s.xp6(1),
                s.hij(" ", 0 !== d.dextScore.value ? d.dextScore.value : "--", " ")
            }
        }
        let I = (()=>{
            class m extends n.K9 {
                constructor(d, g) {
                    super(),
                    this._breakpointObserver = d,
                    this._cdRef = g,
                    this.size = "normal",
                    this.isTablet = !1
                }
                ngOnInit() {
                    this._breakpointObserver.observe([l.K5, l.mT]).pipe((0,
                    n.sL)(this)).subscribe(d=>{
                        this.isTablet = !!d.breakpoints[l.K5],
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
            return m.\u0275fac = function(d) {
                return new (d || m)(s.Y36(b.Yg),s.Y36(s.sBO))
            }
            ,
            m.\u0275cmp = s.Xpm({
                type: m,
                selectors: [["app-dext-score-chart"]],
                inputs: {
                    dextScore: "dextScore",
                    index: "index",
                    size: "size"
                },
                standalone: !0,
                features: [s.qOj, s.jDz],
                decls: 1,
                vars: 1,
                consts: [["class", "dext-score-component", 3, "ngClass", "ngbTooltip", "disableTooltip", 4, "ngIf"], [1, "dext-score-component", 3, "ngClass", "ngbTooltip", "disableTooltip"], [1, "progress-container", 3, "id"], [1, "progress-value-container"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 80 50"], ["x1", "0", "y1", "0", "x2", "0", "y2", "100%", 3, "id", 4, "ngIf"], ["d", "M 8.169 40 A 31.831,31.831 0, 0, 1 71.831 40", "fill", "none", 1, "muted"], ["fill", "none", "d", "M 8.169 40 A 31.831,31.831 0, 0, 1 71.831 40", 1, "dext-value", 3, "id", "ngStyle"], [1, "dext-value"], ["x1", "0", "y1", "0", "x2", "0", "y2", "100%", 3, "id"], ["offset", "0%"], ["offset", "100%"]],
                template: function(d, g) {
                    1 & d && s.YNc(0, R, 10, 18, "div", 0),
                    2 & d && s.Q6J("ngIf", !!g.dextScore)
                },
                dependencies: [f.O5, f.mk, S._L, f.PC, _.aw, _.X$],
                styles: [".dext-score-component[_ngcontent-%COMP%]{padding:1.2rem;display:flex;flex-direction:column}.dext-score-component.tablet-layout[_ngcontent-%COMP%]{flex-direction:row;justify-content:flex-start;align-items:flex-end;align-content:flex-end}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{order:2}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .info-dext-container[_ngcontent-%COMP%]{order:1;justify-content:flex-start;align-items:flex-start;align-content:flex-start}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{flex-direction:column;justify-content:space-around;align-items:flex-start;align-content:flex-start}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-summarized[_ngcontent-%COMP%]{display:none}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-detailed[_ngcontent-%COMP%]{display:inline}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;order:1}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{width:50%;justify-content:flex-start}}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]{display:flex;align-content:center;justify-content:center}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:5.625rem}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:8.125rem}}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{stroke-linecap:round;stroke-width:4}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%]{stroke:#cacedb}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]{stroke-dasharray:100;stroke-dashoffset:100}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;top:2.5rem}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]{top:3.75rem}}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028;margin-top:0;font-size:2rem;line-height:3rem;font-weight:500}body.dark-theme   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:1.5rem}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value__empty[_ngcontent-%COMP%]{transform:translateY(.3125rem)}.dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{display:flex;justify-content:center;color:#142028}body.dark-theme   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#142028}.dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-align:center;font-weight:500;font-size:14px;line-height:1.3125rem;margin-bottom:.25rem}.dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:1.125rem;margin:.3125rem 0}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;align-content:center;margin-top:.25rem;color:#142028;font-size:.6875rem}body.dark-theme   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#142028}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .color-red[_ngcontent-%COMP%]{color:#ea3943!important}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{gap:.1875rem}}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:.25rem;font-size:.6875rem;line-height:1rem}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-summarized[_ngcontent-%COMP%]{display:inline}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-detailed[_ngcontent-%COMP%]{display:none;justify-content:flex-start}.dext-score-component.small[_ngcontent-%COMP%]{padding:0}.dext-score-component.small[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:1.875rem}.dext-score-component.small[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]{top:.75rem}.info-dext-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;order:2}@media (min-width: 600px) and (max-width: 1023px){.info-dext-container[_ngcontent-%COMP%]{width:50%}}"],
                changeDetection: 0
            }),
            m
        }
        )()
    }
    ,
    93867: (B,w,a)=>{
        a.r(w),
        a.d(w, {
            NewPairsSearchComponent: ()=>Bt
        });
        var n = a(94650)
          , l = a(99703)
          , _ = a(52413)
          , S = a(77579)
          , f = a(18505)
          , s = a(78372)
          , b = a(71884)
          , T = a(70262)
          , u = a(60515)
          , k = a(95698)
          , R = a(54968)
          , I = a(82722)
          , m = a(28746)
          , v = a(39646)
          , d = a(54004)
          , g = a(37340)
          , C = a(12113)
          , P = a(53763)
          , q = a(95615)
          , x = a(89383)
          , M = a(92498)
          , L = a(49319)
          , A = a(92216)
          , p = a(36895)
          , j = a(88674)
          , Z = a(62289);
        function K(e, c) {
            if (1 & e && n.GkF(0, 14),
            2 & e) {
                n.oxw(2);
                const t = n.MAs(2);
                n.Q6J("ngTemplateOutlet", t)
            }
        }
        function $(e, c) {
            if (1 & e && (n.ynx(0),
            n.TgZ(1, "div", 15),
            n.GkF(2, 14),
            n.qZA(),
            n.BQk()),
            2 & e) {
                n.oxw(2);
                const t = n.MAs(2);
                n.xp6(2),
                n.Q6J("ngTemplateOutlet", t)
            }
        }
        const E = function() {
            return ["&", "'"]
        }
          , V = function() {
            return ["fal", "times"]
        };
        function W(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "div", 2)(1, "a", 3),
                n.NdJ("click", function(i) {
                    return i.stopPropagation()
                }),
                n.TgZ(2, "div", 4)(3, "div", 5)(4, "div"),
                n._UZ(5, "img", 6),
                n.TgZ(6, "span", 7),
                n._uU(7),
                n.ALo(8, "appSafe"),
                n.qZA(),
                n.YNc(9, K, 1, 1, "ng-container", 8),
                n.qZA()(),
                n.YNc(10, $, 3, 1, "ng-container", 9),
                n.qZA()(),
                n.TgZ(11, "div", 10)(12, "span", 11),
                n._uU(13, "Ad"),
                n.qZA(),
                n.TgZ(14, "button", 12),
                n.NdJ("click", function(i) {
                    n.CHM(t);
                    const r = n.oxw();
                    return n.KtG(r.closeCoinzillaBanner(i))
                }),
                n._UZ(15, "fa-icon", 13),
                n.ALo(16, "translate"),
                n.qZA()()()
            }
            if (2 & e) {
                const t = n.oxw();
                n.xp6(1),
                n.Q6J("@toggleAnimation", void 0)("href", t.coinzillaAd.url, n.LSH),
                n.xp6(4),
                n.Q6J("alt", t.coinzillaAd.name)("src", t.coinzillaAd.thumbnail, n.LSH),
                n.xp6(2),
                n.Oqu(n.Dn7(8, 9, t.name, 20, n.DdM(15, E))),
                n.xp6(2),
                n.Q6J("ngIf", "desktop" === t.mediaDevice),
                n.xp6(1),
                n.Q6J("ngIf", "mobileTablet" === t.mediaDevice),
                n.xp6(5),
                n.Q6J("icon", n.DdM(16, V))("ngbTooltip", n.lcZ(16, 13, "home.close"))
            }
        }
        function G(e, c) {
            if (1 & e && (n.TgZ(0, "span", 16),
            n._uU(1),
            n.ALo(2, "appSafe"),
            n.TgZ(3, "span", 17),
            n._uU(4),
            n.ALo(5, "appSafe"),
            n.qZA()()),
            2 & e) {
                const t = n.oxw();
                n.xp6(1),
                n.hij(" ", n.Dn7(2, 2, t.descriptionShort, 60, n.DdM(10, E)), " "),
                n.xp6(3),
                n.Oqu(n.Dn7(5, 6, t.coinzillaAd.cta_button, 20, n.DdM(11, E)))
            }
        }
        let X = (()=>{
            class e extends _.K9 {
                constructor(t, o, i) {
                    super(),
                    this._coinzillaService = t,
                    this._cdRef = o,
                    this._breakpointObserver = i,
                    this.coinzillaBannerClosed = new n.vpe,
                    this.mediaDevice = "desktop"
                }
                ngAfterViewInit() {
                    this._breakpointObserver.observe([C.K5, C.mT, C.YS]).pipe((0,
                    _.sL)(this)).subscribe(t=>{
                        this.mediaDevice = t.breakpoints[C.K5] ? "mobileTablet" : "desktop",
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._coinzillaService.getNativeAd(this.zoneId).pipe((0,
                    _.sL)(this)).subscribe(t=>{
                        t && (this.coinzillaAd = t,
                        this._cdRef.detectChanges(),
                        this._submitImpression())
                    }
                    )
                }
                _submitImpression() {
                    this._coinzillaService.submitImpression(this.coinzillaAd.impressionUrl).pipe((0,
                    k.q)(1)).subscribe()
                }
                closeCoinzillaBanner(t) {
                    t.preventDefault(),
                    t.stopImmediatePropagation(),
                    this.coinzillaBannerClosed.emit()
                }
                onDestroy() {}
                get name() {
                    return _.LC.revertHtmlEntities(this.coinzillaAd.name)
                }
                get descriptionShort() {
                    return _.LC.revertHtmlEntities(this.coinzillaAd.description_short)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(n.Y36(j.z),n.Y36(n.sBO),n.Y36(Z.Yg))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-search-coinzilla-banner"]],
                inputs: {
                    zoneId: "zoneId"
                },
                outputs: {
                    coinzillaBannerClosed: "coinzillaBannerClosed"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 3,
                vars: 1,
                consts: [["class", "coinzilla-banner", 4, "ngIf"], ["description", ""], [1, "coinzilla-banner"], ["rel", "noreferrer noopener", "target", "_blank", 1, "coinzilla-banner-container", 3, "href", "click"], [1, "info-container"], [1, "info"], [3, "alt", "src"], [1, "title"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], [1, "coinzilla-banner__close"], [1, "warning-banner"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], [3, "ngTemplateOutlet"], [1, "description-mobile-container"], [1, "description"], [1, "cta-button"]],
                template: function(t, o) {
                    1 & t && (n.YNc(0, W, 17, 17, "div", 0),
                    n.YNc(1, G, 6, 12, "ng-template", null, 1, n.W1O)),
                    2 & t && n.Q6J("ngIf", o.coinzillaAd)
                },
                dependencies: [p.O5, p.tP, A.uH, A.BN, L._L, M.yl, x.aw, x.X$],
                styles: [".coinzilla-banner[_ngcontent-%COMP%]{position:relative}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]{border-radius:.625rem;margin-top:1.25rem;padding:.3125rem .625rem;width:100%;background-color:#e2e7ec;display:flex;gap:.25rem;align-items:center}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]{background-color:#e2e7ec}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;width:100%}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;gap:.25rem;justify-content:space-between;width:100%}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.875rem;width:1.875rem;border-radius:3.125rem}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#142028;font-weight:500;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#142028}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#3d5170;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#3d5170}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#142028;font-weight:500;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#142028}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .description-mobile-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;width:100%;flex-wrap:wrap}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .description-mobile-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#3d5170;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .description-mobile-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .description-mobile-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .description-mobile-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .description-mobile-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#3d5170}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .description-mobile-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#142028;font-weight:500;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .description-mobile-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .description-mobile-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .description-mobile-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .description-mobile-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#142028}.coinzilla-banner__close[_ngcontent-%COMP%]{position:absolute;top:.625rem;right:.625rem;display:flex;align-items:center;gap:.5rem}.coinzilla-banner__close[_ngcontent-%COMP%]   .warning-banner[_ngcontent-%COMP%]{font-size:13px;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .warning-banner[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .warning-banner[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .warning-banner[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .warning-banner[_ngcontent-%COMP%], .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#818ea3}.coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{width:auto;height:auto;background:none;font-size:13px;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}"],
                data: {
                    animation: [(0,
                    g.X$)("toggleAnimation", [(0,
                    g.SB)("in", (0,
                    g.oB)({
                        opacity: 1
                    })), (0,
                    g.eR)(":enter", [(0,
                    g.oB)({
                        opacity: 0
                    }), (0,
                    g.jt)(500)]), (0,
                    g.eR)(":leave", (0,
                    g.jt)(200, (0,
                    g.oB)({
                        opacity: 0
                    })))])]
                },
                changeDetection: 0
            }),
            e
        }
        )();
        var y = a(33269)
          , J = a(51303);
        function nn(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "li", 5)(1, "a", 6),
                n.NdJ("mouseenter", function() {
                    const r = n.CHM(t).index
                      , h = n.oxw(2);
                    return n.KtG(h.setHotPairHover(r, !0))
                })("mouseleave", function() {
                    const r = n.CHM(t).index
                      , h = n.oxw(2);
                    return n.KtG(h.setHotPairHover(r, !1))
                })("click", function(i) {
                    const h = n.CHM(t).$implicit;
                    return n.oxw(2).onPreviousSearch(i, h),
                    n.KtG(!1)
                }),
                n._UZ(2, "app-token-name", 7),
                n.ALo(3, "appSafe"),
                n.ALo(4, "appSafe"),
                n.qZA()()
            }
            if (2 & e) {
                const t = c.$implicit
                  , o = c.index
                  , i = n.oxw(2);
                n.xp6(1),
                n.XOb("href", "", i.appContext, "/", i.language, "/", t.chain, "/", i.ChainPage.PairExplorer, "/", t.address, "", n.LSH),
                n.xp6(1),
                n.Q6J("tokenRight", n.lcZ(3, 8, t.symbol_vs))("tokenLeft", n.lcZ(4, 10, t.symbol))("isLink", i.isHover[o])
            }
        }
        function tn(e, c) {
            if (1 & e && (n.TgZ(0, "div", 1)(1, "div", 2),
            n._uU(2),
            n.ALo(3, "translate"),
            n.qZA(),
            n.TgZ(4, "ul", 3),
            n.YNc(5, nn, 5, 12, "li", 4),
            n.qZA()()),
            2 & e) {
                const t = n.oxw();
                n.xp6(2),
                n.Oqu(n.lcZ(3, 2, "pair_explorer.previous_searches")),
                n.xp6(3),
                n.Q6J("ngForOf", t.items)
            }
        }
        let en = (()=>{
            class e extends _.K9 {
                set items(t) {
                    this._items = [...t].reverse()
                }
                get items() {
                    return this._items
                }
                constructor(t, o, i, r, h) {
                    super(),
                    this._environment = t,
                    this._settingsService = o,
                    this._routingService = i,
                    this._exchangeService = r,
                    this._cdRef = h,
                    this.typeOfAction = "reloadRoute",
                    this.previousSearchSelected = new n.vpe,
                    this.ChainPage = y.$,
                    this.isHover = [],
                    this.appContext = this._environment.app_scope,
                    this._settingsService.getConfigChanged$("language").pipe((0,
                    _.sL)(this)).subscribe(O=>{
                        this.language = O
                    }
                    )
                }
                ngOnInit() {
                    this.isHover = Array.from({
                        length: this._items.length
                    }).fill(!1)
                }
                onPreviousSearch(t, o) {
                    t.stopPropagation();
                    const i = `/${o.chain}/${y.$.PairExplorer}/${o.address}`;
                    if (t.ctrlKey || t.metaKey)
                        this._routingService.windowNavigate(`${i}`, "_blank", "noopener");
                    else {
                        if (o.chain === this._exchangeService.chain && "emit" === this.typeOfAction)
                            return this.previousSearchSelected.emit(o);
                        this._routingService.reloadRoute(i)
                    }
                    this.previousSearchSelected.emit(o)
                }
                setHotPairHover(t, o) {
                    this.isHover[t] = o,
                    this._cdRef.detectChanges()
                }
                onDestroy() {}
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(n.Y36(P.qA),n.Y36(P.gb),n.Y36(P.Zn),n.Y36(l.OqV),n.Y36(n.sBO))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-previous-searches"]],
                inputs: {
                    items: "items",
                    typeOfAction: "typeOfAction"
                },
                outputs: {
                    previousSearchSelected: "previousSearchSelected"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 1,
                vars: 1,
                consts: [["class", "trending-list", 4, "ngIf"], [1, "trending-list"], [1, "trending-list__title"], [1, "trending-list__hots"], ["class", "trending-list__hot", 4, "ngFor", "ngForOf"], [1, "trending-list__hot"], [3, "href", "mouseenter", "mouseleave", "click"], [3, "tokenRight", "tokenLeft", "isLink"]],
                template: function(t, o) {
                    1 & t && n.YNc(0, tn, 6, 4, "div", 0),
                    2 & t && n.Q6J("ngIf", o.items.length > 0)
                },
                dependencies: [p.O5, p.ax, J.m, M.yl, x.aw, x.X$],
                styles: [".trending-list[_ngcontent-%COMP%]{display:flex;flex-flow:row;margin-top:.9375rem;justify-content:space-between}@media (max-width: 768px){.trending-list[_ngcontent-%COMP%]{flex-flow:column;margin-top:2.25rem}}.trending-list__title[_ngcontent-%COMP%]{font-size:.8125rem;margin-right:1.5625rem;line-height:.9375rem;margin-bottom:1.25rem}.trending-list__title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {margin-right:.1875rem}.trending-list__hots[_ngcontent-%COMP%]{list-style:none;list-style-position:inside;padding:0;margin:0;display:flex;flex-flow:row;flex:1 0 0;justify-content:flex-start;flex-wrap:wrap}@media (max-width: 768px){.trending-list__hots[_ngcontent-%COMP%]{flex-flow:column}}.trending-list__hot[_ngcontent-%COMP%]{margin-right:1.5625rem;max-width:calc(20% - 1.5625rem)}@media (max-width: 768px){.trending-list__hot[_ngcontent-%COMP%]{margin-bottom:1.25rem;max-width:100%}}.trending-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;display:block}.trending-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   app-token-name[_ngcontent-%COMP%]     .token1{color:#00b8d8!important}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var U = a(77575);
        function on(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "li", 6)(1, "a", 7),
                n.NdJ("mouseenter", function() {
                    const r = n.CHM(t).index
                      , h = n.oxw(2);
                    return n.KtG(h.setHotPairHover(r, !0))
                })("mouseleave", function() {
                    const r = n.CHM(t).index
                      , h = n.oxw(2);
                    return n.KtG(h.setHotPairHover(r, !1))
                })("click", function(i) {
                    const h = n.CHM(t).$implicit;
                    return n.oxw(2).onPairSelected(i, h),
                    n.KtG(!1)
                }),
                n._UZ(2, "app-token-name", 8),
                n.ALo(3, "appSafe"),
                n.ALo(4, "appSafe"),
                n.qZA()()
            }
            if (2 & e) {
                const t = c.$implicit
                  , o = c.index
                  , i = n.oxw(2);
                n.xp6(1),
                n.XOb("href", "", i.appContext, "/", i.language, "/", t.chain, "/", i.ChainPage.PairExplorer, "/", t.id, "", n.LSH),
                n.xp6(1),
                n.Q6J("tokenRight", n.lcZ(3, 8, t.symbol_vs))("tokenLeft", n.lcZ(4, 10, t.symbol))("isLink", i.isHover[o])
            }
        }
        function cn(e, c) {
            if (1 & e && (n.TgZ(0, "div", 1)(1, "div", 2),
            n._UZ(2, "app-icon", 3),
            n._uU(3, " Trending: "),
            n.qZA(),
            n.TgZ(4, "ul", 4),
            n.YNc(5, on, 5, 12, "li", 5),
            n.qZA()()),
            2 & e) {
                const t = n.oxw();
                n.xp6(2),
                n.Q6J("width", 16),
                n.xp6(3),
                n.Q6J("ngForOf", t.hots)
            }
        }
        let rn = (()=>{
            class e extends _.K9 {
                constructor(t, o, i, r, h, O) {
                    super(),
                    this._hotPairsService = t,
                    this._exchangeService = o,
                    this._cdRef = i,
                    this._settingsService = r,
                    this._environment = h,
                    this._routingService = O,
                    this.hots = [],
                    this._oldHots = {},
                    this.chain = this._exchangeService.chain ?? l.qop.Ethereum,
                    this.ChainPage = y.$,
                    this.appContext = this._environment.app_scope,
                    this.isHover = [],
                    this.trendingSelected = new n.vpe,
                    this.typeOfAction = "reloadRoute",
                    this._settingsService.getConfigChanged$("language").pipe((0,
                    _.sL)(this)).subscribe(N=>{
                        this.language = N
                    }
                    )
                }
                ngOnInit() {
                    this._getHotPairs()
                }
                _getHotPairs() {
                    this._hotPairsService.hotPairsAllChains$.pipe((0,
                    _.sL)(this)).subscribe(t=>{
                        t = (t = t.sort(()=>Math.random() - .5)).splice(0, 5),
                        this.hots = this._hotPairsService.formatHotPairs(t, this.chain, !0, this._oldHots, !0),
                        this.isHover = Array.from({
                            length: this.hots.length
                        }).fill(!1),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                onPairSelected(t, o) {
                    const i = `/${o.chain}/${y.$.PairExplorer}/${o.id}`;
                    if (t.ctrlKey || t.metaKey)
                        this._routingService.windowNavigate(`${i}`, "_blank", "noopener");
                    else {
                        if (o.chain === this.chain && "emit" === this.typeOfAction)
                            return this.trendingSelected.emit({
                                pair: o
                            });
                        const r = this._routingService.getCurrentScrollTopPosition("#favorite-pairs") || {};
                        this._routingService.reloadRoute(i, r)
                    }
                }
                setHotPairHover(t, o) {
                    this.isHover[t] = o,
                    this._cdRef.detectChanges()
                }
                onDestroy() {}
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(n.Y36(l.S88),n.Y36(l.OqV),n.Y36(n.sBO),n.Y36(P.gb),n.Y36(P.qA),n.Y36(P.Zn))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-trending-list-search"]],
                inputs: {
                    typeOfAction: "typeOfAction"
                },
                outputs: {
                    trendingSelected: "trendingSelected"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 1,
                vars: 1,
                consts: [["class", "trending-list", 4, "ngIf"], [1, "trending-list"], [1, "trending-list__title"], ["name", "arrowUp", 3, "width"], [1, "trending-list__hots"], ["class", "trending-list__hot", 4, "ngFor", "ngForOf"], [1, "trending-list__hot"], [3, "href", "mouseenter", "mouseleave", "click"], [3, "tokenRight", "tokenLeft", "isLink"]],
                template: function(t, o) {
                    1 & t && n.YNc(0, cn, 6, 2, "div", 0),
                    2 & t && n.Q6J("ngIf", o.hots.length > 0)
                },
                dependencies: [p.O5, U.lQ, p.ax, J.m, M.yl],
                styles: [".trending-list[_ngcontent-%COMP%]{display:flex;flex-flow:row;margin-top:1.25rem;justify-content:space-between}@media (max-width: 768px){.trending-list[_ngcontent-%COMP%]{flex-flow:column;min-width:10.9375rem}}.trending-list__title[_ngcontent-%COMP%]{font-size:13px;margin-right:1.5625rem;line-height:.9375rem;margin-bottom:1.25rem}.trending-list__title[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {margin-right:.1875rem}.trending-list__hots[_ngcontent-%COMP%]{list-style:none;list-style-position:inside;padding:0;margin:0;display:flex;flex-flow:row;flex:1 0 0;justify-content:flex-start;flex-wrap:wrap}@media (max-width: 768px){.trending-list__hots[_ngcontent-%COMP%]{flex-flow:column}}.trending-list__hot[_ngcontent-%COMP%]{margin-right:1.5625rem;max-width:calc(20% - 1.5625rem)}@media (max-width: 768px){.trending-list__hot[_ngcontent-%COMP%]{margin-bottom:1.25rem;max-width:100%}}.trending-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var an = a(37885)
          , sn = a(37713)
          , ln = a(92253)
          , gn = a(1321);
        function hn(e, c) {
            if (1 & e && (n.TgZ(0, "div", 31),
            n._uU(1),
            n.ALo(2, "appRoundPrices"),
            n.qZA()),
            2 & e) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij(" $", n.xi3(2, 1, t.item.price, 4), " ")
            }
        }
        function _n(e, c) {
            1 & e && n._UZ(0, "app-icon", 37),
            2 & e && n.Q6J("width", 8)
        }
        function dn(e, c) {
            1 & e && n._UZ(0, "app-icon", 38),
            2 & e && n.Q6J("width", 8)
        }
        function pn(e, c) {
            if (1 & e && (n.ynx(0),
            n._uU(1),
            n.ALo(2, "number"),
            n.BQk()),
            2 & e) {
                const t = n.oxw(3);
                n.xp6(1),
                n.hij(" ", n.xi3(2, 1, t.getAbsoluteValue(t.item.variation24h), "1.1-1"), "% ")
            }
        }
        function mn(e, c) {
            if (1 & e && (n.TgZ(0, "span", 39),
            n._uU(1),
            n.ALo(2, "number"),
            n.qZA()),
            2 & e) {
                const t = n.oxw(3);
                n.xp6(1),
                n.hij(" ", n.xi3(2, 1, t.getAbsoluteValue(t.item.variation24h), "1.1-1"), "% ")
            }
        }
        const Y = function(e, c) {
            return {
                buy: e,
                sell: c
            }
        };
        function Cn(e, c) {
            if (1 & e && (n.TgZ(0, "div", 32),
            n.YNc(1, _n, 1, 1, "app-icon", 33),
            n.YNc(2, dn, 1, 1, "app-icon", 34),
            n.YNc(3, pn, 3, 4, "ng-container", 35),
            n.YNc(4, mn, 3, 4, "ng-template", null, 36, n.W1O),
            n.TgZ(6, "span"),
            n._uU(7, "24h"),
            n.qZA()()),
            2 & e) {
                const t = n.MAs(5)
                  , o = n.oxw(2);
                n.Q6J("ngClass", n.WLB(5, Y, o.item.variation24h > 0, o.item.variation24h < 0)),
                n.xp6(1),
                n.Q6J("ngIf", o.item.variation24h < 0),
                n.xp6(1),
                n.Q6J("ngIf", o.item.variation24h > 0),
                n.xp6(1),
                n.Q6J("ngIf", 0 !== o.item.variation24h)("ngIfElse", t)
            }
        }
        function Pn(e, c) {
            if (1 & e && (n.TgZ(0, "div", 40),
            n._uU(1),
            n.ALo(2, "appRoundNumber"),
            n.qZA()),
            2 & e) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij("Liq. ", n.lcZ(2, 1, t.item.liquidity), "")
            }
        }
        function un(e, c) {
            1 & e && n._UZ(0, "div", 40)
        }
        function On(e, c) {
            if (1 & e && (n.TgZ(0, "div", 41),
            n._uU(1),
            n.ALo(2, "appRoundNumber"),
            n.TgZ(3, "span"),
            n._uU(4, "24h"),
            n.qZA()()),
            2 & e) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij("Vol. ", n.lcZ(2, 1, t.item.volume), " ")
            }
        }
        const F = function(e) {
            return ["logo", e]
        };
        function fn(e, c) {
            if (1 & e && (n._UZ(0, "img", 42),
            n.ALo(1, "chainLogoUrl")),
            2 & e) {
                const t = n.oxw(2);
                n.Q6J("ngClass", n.VKq(5, F, t.item.chain.toLowerCase()))("src", n.lcZ(1, 3, t.item.chain), n.LSH)("alt", t.item.chain + " chain")
            }
        }
        function Mn(e, c) {
            if (1 & e && (n.TgZ(0, "img", 43),
            n.ALo(1, "exchangeLogoStyles"),
            n.ALo(2, "exchangeLogoUrl"),
            n.qZA()),
            2 & e) {
                const t = n.oxw(2);
                n.Akn(n.xi3(1, 4, t.item.exchange, t.item.chain)),
                n.MGl("alt", "", t.getExchangeName(t.item.exchange, t.item.chain), "-logo"),
                n.Q6J("src", n.xi3(2, 7, t.item.exchange, t.item.chain), n.LSH)
            }
        }
        function bn(e, c) {
            if (1 & e && (n.TgZ(0, "span", 44),
            n.ALo(1, "translate"),
            n.ALo(2, "translate"),
            n._uU(3),
            n.qZA()),
            2 & e) {
                const t = n.oxw(2);
                n.hYB("ngbTooltip", "", n.lcZ(1, 3, "pair_explorer.pool"), " ", n.lcZ(2, 5, "pair_explorer.col_7"), ""),
                n.xp6(3),
                n.hij(" % ", t.item.fee, "")
            }
        }
        const xn = function(e) {
            return {
                currentDate: e,
                type: "rounded"
            }
        };
        function vn(e, c) {
            if (1 & e && (n.TgZ(0, "span", 45),
            n._uU(1),
            n.ALo(2, "dateSince"),
            n.qZA()),
            2 & e) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij("", n.xi3(2, 1, t.item.creationTime, n.VKq(4, xn, t.dateNow)), " ago ")
            }
        }
        function yn(e, c) {
            if (1 & e && n._UZ(0, "app-dext-score-chart", 46),
            2 & e) {
                const t = n.oxw(2);
                n.Q6J("dextScore", t.getDextScoreValue(t.item.dextScore))("index", t.index)
            }
        }
        const kn = function(e) {
            return {
                disabled: e
            }
        }
          , wn = function(e) {
            return {
                chain: e
            }
        }
          , Sn = function() {
            return ["far", "right-left"]
        };
        function Tn(e, c) {
            if (1 & e && (n.TgZ(0, "div", 47)(1, "a", 48),
            n.NdJ("click", function(o) {
                return o.stopImmediatePropagation()
            }),
            n.ALo(2, "translate"),
            n._UZ(3, "fa-icon", 49),
            n._uU(4, " Swap "),
            n.qZA()()),
            2 & e) {
                const t = n.oxw(2);
                n.xp6(1),
                n.Q6J("appRouterLink", t.isPageAvailableInChain() ? "/" + t.item.chain + "/" + t.ChainPage.Dextswap + "/" + t.item.idToken : null)("ngClass", n.VKq(8, kn, !t.isPageAvailableInChain()))("ngbTooltip", n.xi3(2, 5, "pair_explorer.no_dextswap_description", n.VKq(10, wn, t.getChainName(t.item.chain))))("disableTooltip", t.isPageAvailableInChain()),
                n.xp6(2),
                n.Q6J("icon", n.DdM(12, Sn))
            }
        }
        const H = function(e) {
            return {
                active: e
            }
        };
        function An(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "div", 2),
                n.NdJ("mouseover", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.toggleHover(!0))
                })("mouseout", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.toggleHover(!1))
                }),
                n.TgZ(1, "div", 3)(2, "span", 4),
                n._UZ(3, "app-token-logo", 5),
                n.qZA(),
                n.TgZ(4, "div", 6)(5, "a", 7),
                n._UZ(6, "app-token-name", 8),
                n.ALo(7, "appSafe"),
                n.ALo(8, "appSafe"),
                n.qZA(),
                n.TgZ(9, "span", 9),
                n._uU(10),
                n.ALo(11, "appSafe"),
                n.qZA(),
                n.TgZ(12, "span", 10),
                n._uU(13),
                n.ALo(14, "addressEllipsis"),
                n.qZA()()(),
                n.TgZ(15, "div", 11),
                n.YNc(16, hn, 3, 4, "div", 12),
                n.YNc(17, Cn, 8, 8, "div", 13),
                n.qZA(),
                n.TgZ(18, "div", 14),
                n.YNc(19, Pn, 3, 3, "div", 15),
                n.YNc(20, un, 1, 0, "div", 15),
                n.YNc(21, On, 5, 3, "div", 16),
                n.qZA(),
                n.TgZ(22, "div", 17)(23, "div", 18)(24, "div", 19),
                n.YNc(25, fn, 2, 7, "img", 20),
                n.YNc(26, Mn, 3, 10, "img", 21),
                n.TgZ(27, "span", 22),
                n._uU(28),
                n.qZA(),
                n.YNc(29, bn, 4, 7, "span", 23),
                n.qZA()(),
                n.YNc(30, vn, 3, 6, "span", 24),
                n.qZA(),
                n.TgZ(31, "div", 25)(32, "div", 26),
                n.YNc(33, yn, 1, 2, "app-dext-score-chart", 27),
                n.qZA(),
                n.YNc(34, Tn, 5, 13, "div", 28),
                n.TgZ(35, "div", 29),
                n._UZ(36, "app-favorite-button", 30),
                n.qZA()()()
            }
            if (2 & e) {
                const t = n.oxw();
                let o;
                n.xp6(3),
                n.Q6J("symbol", t.item.symbol)("name", t.item.realName)("chain", t.item.chain)("address", t.item.idToken)("logoUrl", t.item.logo)("hasWhiteBackground", !0),
                n.xp6(2),
                n.XOb("href", "", t.appContext, "/", t.language, "/", t.item.chain, "/", t.ChainPage.PairExplorer, "/", t.item.id, "", n.LSH),
                n.Q6J("ngClass", n.VKq(38, H, t.isHover)),
                n.xp6(1),
                n.Q6J("tokenRight", n.lcZ(7, 30, t.item.symbol_vs))("tokenLeft", n.lcZ(8, 32, t.item.symbol))("isLink", t.isHover),
                n.xp6(4),
                n.Oqu(n.lcZ(11, 34, t.item.realName)),
                n.xp6(3),
                n.hij(" ", n.lcZ(14, 36, t.item.idToken), " "),
                n.xp6(3),
                n.Q6J("ngIf", t.item.price),
                n.xp6(1),
                n.Q6J("ngIf", t.item.variation24h),
                n.xp6(2),
                n.Q6J("ngIf", t.item.liquidity),
                n.xp6(1),
                n.Q6J("ngIf", !t.item.liquidity),
                n.xp6(1),
                n.Q6J("ngIf", t.item.volume),
                n.xp6(4),
                n.Q6J("ngIf", !!t.item.chain),
                n.xp6(1),
                n.Q6J("ngIf", !!t.item.exchange && !!t.item.chain),
                n.xp6(2),
                n.hij(" ", t.item.exchangeVersion, " "),
                n.xp6(1),
                n.Q6J("ngIf", !!t.item.exchange && !!t.item.exchangeVersion && t.hasExchangeFeePercentagePools(t.item.exchange, null !== (o = t.item.exchangeVersion) && void 0 !== o ? o : null, t.item.chain) && t.item.fee),
                n.xp6(1),
                n.Q6J("ngIf", !!t.item.creationTime),
                n.xp6(3),
                n.Q6J("ngIf", null != t.item.dextScore),
                n.xp6(1),
                n.Q6J("ngIf", "desktop" === t.mediaDevice),
                n.xp6(2),
                n.Q6J("item", t.parseFav(t.item))
            }
        }
        function Zn(e, c) {
            if (1 & e && (n._UZ(0, "img", 42),
            n.ALo(1, "chainLogoUrl")),
            2 & e) {
                const t = n.oxw(2);
                n.Q6J("ngClass", n.VKq(5, F, t.item.chain.toLowerCase()))("src", n.lcZ(1, 3, t.item.chain), n.LSH)("alt", t.item.chain + " chain")
            }
        }
        function In(e, c) {
            if (1 & e && (n.TgZ(0, "img", 43),
            n.ALo(1, "exchangeLogoStyles"),
            n.ALo(2, "exchangeLogoUrl"),
            n.qZA()),
            2 & e) {
                const t = n.oxw(2);
                n.Akn(n.xi3(1, 4, t.item.exchange, t.item.chain)),
                n.MGl("alt", "", t.getExchangeName(t.item.exchange, t.item.chain), "-logo"),
                n.Q6J("src", n.xi3(2, 7, t.item.exchange, t.item.chain), n.LSH)
            }
        }
        function zn(e, c) {
            if (1 & e && (n.TgZ(0, "span", 55),
            n.ALo(1, "translate"),
            n.ALo(2, "translate"),
            n._uU(3),
            n.qZA()),
            2 & e) {
                const t = n.oxw(2);
                n.hYB("ngbTooltip", "", n.lcZ(1, 3, "pair_explorer.pool"), " ", n.lcZ(2, 5, "pair_explorer.col_7"), ""),
                n.xp6(3),
                n.hij(" % ", t.item.fee, "")
            }
        }
        function Nn(e, c) {
            if (1 & e && (n.TgZ(0, "div", 31),
            n._uU(1),
            n.ALo(2, "appRoundPrices"),
            n.qZA()),
            2 & e) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij(" $ ", n.xi3(2, 1, t.item.price, 4), " ")
            }
        }
        function Rn(e, c) {
            1 & e && n._UZ(0, "div", 31)
        }
        function Ln(e, c) {
            1 & e && n._UZ(0, "app-icon", 37),
            2 & e && n.Q6J("width", 8)
        }
        function En(e, c) {
            1 & e && n._UZ(0, "app-icon", 38),
            2 & e && n.Q6J("width", 8)
        }
        function Jn(e, c) {
            if (1 & e && (n.ynx(0),
            n._uU(1),
            n.ALo(2, "number"),
            n.BQk()),
            2 & e) {
                const t = n.oxw(3);
                n.xp6(1),
                n.hij(" ", n.xi3(2, 1, t.getAbsoluteValue(t.item.variation24h), "1.1-1"), "% ")
            }
        }
        function Dn(e, c) {
            if (1 & e && (n.TgZ(0, "span", 39),
            n._uU(1),
            n.ALo(2, "number"),
            n.qZA()),
            2 & e) {
                const t = n.oxw(3);
                n.xp6(1),
                n.hij(" ", n.xi3(2, 1, t.getAbsoluteValue(t.item.variation24h), "1.1-1"), "% ")
            }
        }
        function Qn(e, c) {
            if (1 & e && (n.TgZ(0, "div", 32),
            n.YNc(1, Ln, 1, 1, "app-icon", 33),
            n.YNc(2, En, 1, 1, "app-icon", 34),
            n.YNc(3, Jn, 3, 4, "ng-container", 35),
            n.YNc(4, Dn, 3, 4, "ng-template", null, 36, n.W1O),
            n.TgZ(6, "span"),
            n._uU(7, "24h"),
            n.qZA()()),
            2 & e) {
                const t = n.MAs(5)
                  , o = n.oxw(2);
                n.Q6J("ngClass", n.WLB(5, Y, o.item.variation24h > 0, o.item.variation24h < 0)),
                n.xp6(1),
                n.Q6J("ngIf", o.item.variation24h < 0),
                n.xp6(1),
                n.Q6J("ngIf", o.item.variation24h > 0),
                n.xp6(1),
                n.Q6J("ngIf", 0 !== o.item.variation24h)("ngIfElse", t)
            }
        }
        function Bn(e, c) {
            if (1 & e && (n.TgZ(0, "div", 40),
            n._uU(1),
            n.ALo(2, "appRoundNumber"),
            n.qZA()),
            2 & e) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij("Liq. ", n.lcZ(2, 1, t.item.liquidity), "")
            }
        }
        function Un(e, c) {
            if (1 & e && n._UZ(0, "app-dext-score-chart", 56),
            2 & e) {
                const t = n.oxw(2);
                n.Q6J("dextScore", t.getDextScoreValue(t.item.dextScore))
            }
        }
        function Yn(e, c) {
            if (1 & e && (n.TgZ(0, "div", 50)(1, "div", 3)(2, "div", 51)(3, "span", 4),
            n._UZ(4, "app-token-logo", 5),
            n.qZA(),
            n.TgZ(5, "div", 18)(6, "div", 19),
            n.YNc(7, Zn, 2, 7, "img", 20),
            n.YNc(8, In, 3, 10, "img", 21),
            n.qZA()()(),
            n.TgZ(9, "div", 6)(10, "a", 7),
            n._UZ(11, "app-token-name", 8),
            n.ALo(12, "appSafe"),
            n.ALo(13, "appSafe"),
            n.qZA(),
            n.TgZ(14, "span", 9),
            n._uU(15),
            n.ALo(16, "appSafe"),
            n.qZA(),
            n.TgZ(17, "span", 10),
            n._uU(18),
            n.ALo(19, "addressEllipsis"),
            n.qZA(),
            n.TgZ(20, "div"),
            n.YNc(21, zn, 4, 7, "span", 52),
            n.qZA()()(),
            n.TgZ(22, "div", 11)(23, "div"),
            n.YNc(24, Nn, 3, 4, "div", 12),
            n.YNc(25, Rn, 1, 0, "div", 12),
            n.YNc(26, Qn, 8, 8, "div", 13),
            n.YNc(27, Bn, 3, 3, "div", 15),
            n.qZA(),
            n.TgZ(28, "div", 53)(29, "div", 29),
            n._UZ(30, "app-favorite-button", 30),
            n.qZA(),
            n.TgZ(31, "div", 26),
            n.YNc(32, Un, 1, 1, "app-dext-score-chart", 54),
            n.qZA()()()()),
            2 & e) {
                const t = n.oxw();
                let o;
                n.xp6(4),
                n.Q6J("symbol", t.item.symbol)("name", t.item.realName)("chain", t.item.chain)("address", t.item.idToken)("logoUrl", t.item.logo)("hasWhiteBackground", !0),
                n.xp6(3),
                n.Q6J("ngIf", !!t.item.chain),
                n.xp6(1),
                n.Q6J("ngIf", !!t.item.exchange && !!t.item.chain),
                n.xp6(2),
                n.FAE("href", "", t.appContext, "/", t.item.chain, "/", t.ChainPage.PairExplorer, "/", t.item.id, "", n.LSH),
                n.Q6J("ngClass", n.VKq(33, H, t.isHover)),
                n.xp6(1),
                n.Q6J("tokenRight", n.lcZ(12, 25, t.item.symbol_vs))("tokenLeft", n.lcZ(13, 27, t.item.symbol))("isLink", t.isHover),
                n.xp6(4),
                n.Oqu(n.lcZ(16, 29, t.item.realName)),
                n.xp6(3),
                n.hij(" ", n.lcZ(19, 31, t.item.idToken), " "),
                n.xp6(3),
                n.Q6J("ngIf", !!t.item.exchange && !!t.item.exchangeVersion && t.hasExchangeFeePercentagePools(t.item.exchange, null !== (o = t.item.exchangeVersion) && void 0 !== o ? o : null, t.item.chain) && t.item.fee),
                n.xp6(3),
                n.Q6J("ngIf", t.item.price),
                n.xp6(1),
                n.Q6J("ngIf", !t.item.price),
                n.xp6(1),
                n.Q6J("ngIf", t.item.variation24h),
                n.xp6(1),
                n.Q6J("ngIf", t.item.liquidity),
                n.xp6(3),
                n.Q6J("item", t.parseFav(t.item)),
                n.xp6(2),
                n.Q6J("ngIf", null != t.item.dextScore)
            }
        }
        let Fn = (()=>{
            class e extends _.K9 {
                rightClick(t, o) {
                    const i = o;
                    (i.closest(".token-name") || i.classList.contains("token-name")) && (t.stopImmediatePropagation(),
                    this.saveSearch())
                }
                onClick(t, o) {
                    const i = o;
                    (i.closest(".token-name") || i.classList.contains("token-name")) && (2 === t.which ? (t.stopImmediatePropagation(),
                    this.saveSearch()) : (t.ctrlKey || t.metaKey) && (t.stopImmediatePropagation(),
                    this.saveSearch(),
                    this._routingService.windowNavigate(this.item.id, "_blank", "noopener")))
                }
                constructor(t, o, i, r, h, O, N) {
                    super(),
                    this._web3UtilsService = t,
                    this._breakpointObserver = o,
                    this._environment = i,
                    this._pairsSearchService = r,
                    this._routingService = h,
                    this._settingsService = O,
                    this._cdRef = N,
                    this.isModal = !1,
                    this.linkClicked = new n.vpe,
                    this.dateNow = Date.now(),
                    this.Chain = l.qop,
                    this.screenWidth = window.innerWidth,
                    this.imageNotLoad = !1,
                    this.isHover = !1,
                    this.ChainPage = y.$,
                    this.appContext = this._environment.app_scope,
                    this._settingsService.getConfigChanged$("language").pipe((0,
                    _.sL)(this)).subscribe(Q=>{
                        this.language = Q
                    }
                    )
                }
                ngOnInit() {
                    this.exchange = this.item.exchange ?? this.defaultApiExchange,
                    this._breakpointObserver.observe([C.IB]).pipe((0,
                    _.sL)(this)).subscribe(t=>{
                        this.mediaDevice = t.breakpoints[C.IB] ? "mobileTablet" : "desktop"
                    }
                    )
                }
                onDestroy() {}
                get defaultApiExchange() {
                    return l.ibW
                }
                toChecksumAddress(t) {
                    return l.LJP.checkIsEVMAddress(this.item.id, this.item.chain) ? this._web3UtilsService.toChecksumAddress(t) : t
                }
                loadAlternativeLogo(t) {
                    this.imageNotLoad = !0,
                    t.style.display = "none"
                }
                getChainName(t) {
                    return l.CXF.getChainName(t)
                }
                getExchangeName(t, o) {
                    return l.i9O.getExchangeNameFromExchangeApi(t, o)
                }
                hasExchangeFeePercentagePools(t, o, i) {
                    return l.i9O.hasExchangeFeePercentagePools(t, o, i)
                }
                getDextScoreValue(t) {
                    return l.DvC.parseDextScoreTotal(t.total)
                }
                getAbsoluteValue(t) {
                    return Math.abs(t)
                }
                parseFav(t) {
                    return {
                        pair: t.id,
                        symbol: t.symbol ?? "",
                        name: t.symbol ?? "",
                        isStableNativePair: l.LJP.isStableNativePair(t.typePair),
                        exchange: t.exchange ?? "",
                        updatedAt: Date.now(),
                        createdAt: Date.now(),
                        logo: t.logo,
                        symbolRef: t.symbol_vs ?? "",
                        price: t.price,
                        price24h: t.price24h,
                        chain: t.chain
                    }
                }
                saveSearch() {
                    this._pairsSearchService.setPreviousSearches({
                        chain: this.item.chain,
                        address: this.item.id,
                        symbol: this.item.symbol,
                        symbol_vs: this.item.symbol_vs
                    }),
                    this.linkClicked.emit()
                }
                toggleHover(t) {
                    this.isHover = t,
                    this._cdRef.detectChanges()
                }
                isPageAvailableInChain() {
                    return gn.c.isPageAvailableInChain(y.$.Dextswap, this.item.chain)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(n.Y36(l.j4Y),n.Y36(Z.Yg),n.Y36(P.qA),n.Y36(l.OoE),n.Y36(P.Zn),n.Y36(P.gb),n.Y36(n.sBO))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-new-pair-result-item"]],
                hostBindings: function(t, o) {
                    1 & t && n.NdJ("contextmenu", function(r) {
                        return o.rightClick(r, r.target)
                    }, !1, n.evT)("mouseup", function(r) {
                        return o.onClick(r, r.target)
                    }, !1, n.evT)
                },
                inputs: {
                    item: "item",
                    index: "index",
                    isModal: "isModal"
                },
                outputs: {
                    linkClicked: "linkClicked"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 3,
                vars: 2,
                consts: [["class", "search-result-item", 3, "mouseover", "mouseout", 4, "ngIf", "ngIfElse"], ["itemMobile", ""], [1, "search-result-item", 3, "mouseover", "mouseout"], [1, "result-column", "result-column__1"], [1, "token-symbol-container"], [3, "symbol", "name", "chain", "address", "logoUrl", "hasWhiteBackground"], [1, "token-info"], [1, "token-name", 3, "ngClass", "href"], ["size", "size-m", 3, "tokenRight", "tokenLeft", "isLink"], [1, "token-full-name"], [1, "token-id"], [1, "result-column", "result-column__2"], ["class", "price biggest", 4, "ngIf"], ["class", "volume", 3, "ngClass", 4, "ngIf"], [1, "result-column", "result-column__3", "token-liquidity"], ["class", "liquidity biggest", 4, "ngIf"], ["class", "volume", 4, "ngIf"], [1, "result-column", "result-column__4"], [1, "pair-info"], [1, "pairs-logos"], [3, "ngClass", "src", "alt", 4, "ngIf"], ["class", "logo", 3, "style", "src", "alt", 4, "ngIf"], [1, "info-version"], ["class", "badge bg-info align-middle", "placement", "bottom", 3, "ngbTooltip", 4, "ngIf"], ["class", "creation-data", 4, "ngIf"], [1, "result-column", "result-column__5", "dextscore-favs"], [1, "dextscore"], ["size", "small", 3, "dextScore", "index", 4, "ngIf"], ["class", "aggregator-button", 4, "ngIf"], [1, "favorite"], [3, "item"], [1, "price", "biggest"], [1, "volume", 3, "ngClass"], ["name", "variationDown", "class", "me-1", 3, "width", 4, "ngIf"], ["name", "variationUp", "class", "me-1", 3, "width", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["neutralDiff", ""], ["name", "variationDown", 1, "me-1", 3, "width"], ["name", "variationUp", 1, "me-1", 3, "width"], [1, "neutral-color"], [1, "liquidity", "biggest"], [1, "volume"], [3, "ngClass", "src", "alt"], [1, "logo", 3, "src", "alt"], ["placement", "bottom", 1, "badge", "bg-info", "align-middle", 3, "ngbTooltip"], [1, "creation-data"], ["size", "small", 3, "dextScore", "index"], [1, "aggregator-button"], [1, "link", 3, "appRouterLink", "ngClass", "ngbTooltip", "disableTooltip", "click"], [3, "icon"], [1, "search-result-item"], [1, "logos"], ["class", "badge align-middle", "placement", "bottom", 3, "ngbTooltip", 4, "ngIf"], [1, "dextscore-favs"], ["size", "small", 3, "dextScore", 4, "ngIf"], ["placement", "bottom", 1, "badge", "align-middle", 3, "ngbTooltip"], ["size", "small", 3, "dextScore"]],
                template: function(t, o) {
                    if (1 & t && (n.YNc(0, An, 37, 40, "div", 0),
                    n.YNc(1, Yn, 33, 35, "ng-template", null, 1, n.W1O)),
                    2 & t) {
                        const i = n.MAs(2);
                        n.Q6J("ngIf", "mobileTablet" !== o.mediaDevice)("ngIfElse", i)
                    }
                },
                dependencies: [p.O5, ln.T, p.mk, J.m, U.lQ, L._L, sn.U, an.t, p.JJ, M.Bl, M.$n, M.yl, M.pt, M.WA, x.aw, x.X$, l.eV1, l.Wu7, l.$a1, P.jY, A.uH, A.BN],
                styles: [".search-result-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.8125rem 0 .8125rem .625rem;cursor:pointer}@media (max-width: 766px){.search-result-item[_ngcontent-%COMP%]{padding:.4375rem .625rem}}.search-result-item[_ngcontent-%COMP%]:hover{background-color:#e1e7ed}.token-symbol-container[_ngcontent-%COMP%]{display:block;width:2.5rem;height:2.5rem;z-index:0;margin-right:.875rem}.title-search[_ngcontent-%COMP%], .title-search-normal[_ngcontent-%COMP%]{font-size:14px;line-height:1.3125rem}.title-search[_ngcontent-%COMP%]{font-weight:300;color:#818ea3;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#818ea3}.title-search-normal[_ngcontent-%COMP%]{font-weight:500;color:#142028;font-size:16px}body.dark-theme   [_nghost-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{color:#142028}.token-id[_ngcontent-%COMP%], .token-full-name[_ngcontent-%COMP%]{color:#818ea3;font-size:13px}.token-full-name[_ngcontent-%COMP%]{max-width:9.375rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.token-name[_ngcontent-%COMP%]{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#818ea3;max-width:9.375rem}body.dark-theme   [_nghost-%COMP%]   .token-name[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .token-name[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]{color:#818ea3}.token-name.active[_ngcontent-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{color:#00b8d8}.token-info[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-flow:column}.creation-data[_ngcontent-%COMP%], .info-version[_ngcontent-%COMP%]{color:#cacedb;font-size:13px;margin-top:.3125rem}.info-version[_ngcontent-%COMP%]{margin:0 .375rem}.volume.buy[_ngcontent-%COMP%]{color:#17c671!important}.volume.sell[_ngcontent-%COMP%]{color:#ea3943!important}.volume[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .volume[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3!important}body.dark-theme[_ngcontent-%COMP%]   .volume[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3!important}body.light   [_nghost-%COMP%]   .volume[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3!important}body.light[_ngcontent-%COMP%]   .volume[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3!important}.pair-info[_ngcontent-%COMP%]{display:flex;flex-flow:row;align-items:center}.pair-info[_ngcontent-%COMP%]   .pairs-logos[_ngcontent-%COMP%]{display:flex}.pair-info[_ngcontent-%COMP%]   .pairs-logos[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;border-radius:3.125rem;background-color:#fff}.pair-info[_ngcontent-%COMP%]   .pairs-logos[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:last-child{margin-left:-.1875rem}@media (max-width: 766px){.pair-info[_ngcontent-%COMP%]   .pairs-logos[_ngcontent-%COMP%]{margin-top:.3125rem}}.result-column[_ngcontent-%COMP%]{display:flex;flex-flow:column;flex:0 0 7.5rem;width:7.5rem;justify-content:space-between;align-items:center;color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .result-column[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .result-column[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .result-column[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .result-column[_ngcontent-%COMP%]{color:#3d5170}.result-column__1[_ngcontent-%COMP%]{flex-flow:row;align-items:center;justify-content:flex-start;flex:0 0 11.875rem;max-width:11.875rem}@media (max-width: 766px){.result-column__1[_ngcontent-%COMP%], .result-column__2[_ngcontent-%COMP%]{flex:0 0 49%;width:49%;max-width:49%}.result-column__2[_ngcontent-%COMP%]{flex-flow:row;justify-content:flex-end;text-align:right}.result-column[_ngcontent-%COMP%]   .token-info[_ngcontent-%COMP%]{width:calc(100% - 54px)}.result-column[_ngcontent-%COMP%]   .token-info[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%], .result-column[_ngcontent-%COMP%]   .token-info[_ngcontent-%COMP%]   .token-full-name[_ngcontent-%COMP%]{max-width:100%}}.aggregator-button[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.aggregator-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;padding:.5rem 1.125rem;background-color:#e2e7ec;color:#142028;border-radius:.625rem;gap:.4375rem}body.dark-theme   [_nghost-%COMP%]   .aggregator-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .aggregator-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .aggregator-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .aggregator-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .aggregator-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .aggregator-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .aggregator-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .aggregator-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}.aggregator-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#00b8d8!important}.link.disabled[_ngcontent-%COMP%]{color:#818ea3;border:1px solid;border-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .link.disabled[_ngcontent-%COMP%]{color:#818ea3!important}body.dark-theme[_ngcontent-%COMP%]   .link.disabled[_ngcontent-%COMP%]{color:#818ea3!important}body.light   [_nghost-%COMP%]   .link.disabled[_ngcontent-%COMP%]{color:#818ea3!important}body.light[_ngcontent-%COMP%]   .link.disabled[_ngcontent-%COMP%]{color:#818ea3!important}body.dark-theme   [_nghost-%COMP%]   .link.disabled[_ngcontent-%COMP%]{border-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .link.disabled[_ngcontent-%COMP%]{border-color:#142028}body.light   [_nghost-%COMP%]   .link.disabled[_ngcontent-%COMP%]{border-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .link.disabled[_ngcontent-%COMP%]{border-color:#f4f5f6}.link.disabled[_ngcontent-%COMP%]:hover{background-color:#e2e7ec!important;cursor:default}body.dark-theme   [_nghost-%COMP%]   .link.disabled[_ngcontent-%COMP%]:hover{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .link.disabled[_ngcontent-%COMP%]:hover{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .link.disabled[_ngcontent-%COMP%]:hover{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .link.disabled[_ngcontent-%COMP%]:hover{background-color:#e2e7ec!important}.dextscore-favs[_ngcontent-%COMP%]{width:13rem;flex:0 0 13rem;display:flex;align-items:center;justify-content:space-around;flex-flow:row}.dextscore-favs[_ngcontent-%COMP%]   app-dext-score-chart[_ngcontent-%COMP%]     .dext-score-component{padding:0}.dextscore-favs[_ngcontent-%COMP%]   app-dext-score-chart[_ngcontent-%COMP%]     .dext-score-component .progress-container svg{height:2.8125rem;width:2.8125rem}.dextscore-favs[_ngcontent-%COMP%]   app-dext-score-chart[_ngcontent-%COMP%]     .dext-score-component .progress-container .dext-value{top:1.125rem}@media (max-width: 1023px){.dextscore-favs[_ngcontent-%COMP%]   app-dext-score-chart[_ngcontent-%COMP%]     .dext-score-component .progress-container .dext-value{width:100%!important;justify-content:space-around}}.dextscore-favs[_ngcontent-%COMP%]   .dextscore[_ngcontent-%COMP%]{width:2.8125rem}.dextscore-favs[_ngcontent-%COMP%]   .favs[_ngcontent-%COMP%]{margin-left:1.5625rem;width:2.375rem;text-align:center;border:1px solid white}@media (max-width: 766px){.dextscore-favs[_ngcontent-%COMP%]{flex-flow:column;width:2.8125rem;flex:0 0 2.8125rem;margin-left:1.875rem}}.badge[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#142028}body.dark-theme   [_nghost-%COMP%]   .badge[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .badge[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .badge[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .badge[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{color:#142028}.biggest[_ngcontent-%COMP%]{font-size:16px;font-weight:500}@media (max-width: 400px){.biggest[_ngcontent-%COMP%]{font-size:14px}}app-favorite-button[_ngcontent-%COMP%]     button{background-color:#e2e7ec;width:2.375rem;height:2rem;text-align:center;line-height:2rem;border-radius:.625rem;border:1px solid #c9cedc!important;z-index:1}body.dark-theme   [_nghost-%COMP%]   app-favorite-button[_ngcontent-%COMP%]     button{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-favorite-button[_ngcontent-%COMP%]     button{background-color:#23323c}body.light   [_nghost-%COMP%]   app-favorite-button[_ngcontent-%COMP%]     button{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-favorite-button[_ngcontent-%COMP%]     button{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]     .search-result-item:hover{background-color:#23323c}body.dark-theme   [_nghost-%COMP%]     .token-id, body.dark-theme   [_nghost-%COMP%]     .creation-data, body.dark-theme   [_nghost-%COMP%]     .token-full-name, body.dark-theme   [_nghost-%COMP%]     .info-version{color:#cacedb}body.dark-theme   [_nghost-%COMP%]     app-favorite-button   button{border:1px solid #142028!important}"],
                data: {
                    animation: [(0,
                    g.X$)("toggleAnimation", [(0,
                    g.SB)("in", (0,
                    g.oB)({
                        opacity: 1
                    })), (0,
                    g.eR)(":enter", [(0,
                    g.oB)({
                        opacity: 0
                    }), (0,
                    g.jt)(500)]), (0,
                    g.eR)(":leave", (0,
                    g.jt)(200, (0,
                    g.oB)({
                        opacity: 0
                    })))])]
                },
                changeDetection: 0
            }),
            e
        }
        )();
        var Hn = a(10027);
        const qn = ["searchLink"]
          , jn = function(e, c, t) {
            return {
                results: e,
                totalResults: c,
                searchData: t
            }
        };
        function Kn(e, c) {
            if (1 & e && (n.TgZ(0, "div", 9),
            n._uU(1),
            n.ALo(2, "translate"),
            n.qZA()),
            2 & e) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij(" ", n.xi3(2, 1, "pair_explorer.find_pair_results", n.kEZ(4, jn, t.dataPairs.length, t.totalResults, t.searchData)), " ")
            }
        }
        function $n(e, c) {
            if (1 & e && n.GkF(0, 10),
            2 & e) {
                n.oxw(2);
                const t = n.MAs(2);
                n.Q6J("ngTemplateOutlet", t)
            }
        }
        const Vn = function(e, c) {
            return {
                count: e,
                total: c
            }
        };
        function Wn(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "div", 11)(1, "span"),
                n._uU(2),
                n.ALo(3, "translate"),
                n.qZA(),
                n.TgZ(4, "app-dropdown-chains", 12),
                n.NdJ("chainsSelected", function(i) {
                    n.CHM(t);
                    const r = n.oxw(2);
                    return n.KtG(r.changeChains(i))
                }),
                n.qZA()()
            }
            if (2 & e) {
                const t = n.oxw(2);
                n.xp6(2),
                n.Oqu(n.xi3(3, 4, "pair_list.results_count", n.WLB(7, Vn, t.resultHasSponsor ? t.dataPairs.length - 1 : t.dataPairs.length, t.totalResults))),
                n.xp6(2),
                n.Q6J("allChains", !1)("isMultiselect", !0)("chainsResults", t.usedChains)
            }
        }
        function Gn(e, c) {
            if (1 & e && (n.ynx(0),
            n.TgZ(1, "div", 17),
            n._UZ(2, "img", 18),
            n.qZA(),
            n.TgZ(3, "div", 19)(4, "span", 20),
            n._uU(5, "Sponsored:"),
            n.qZA(),
            n.TgZ(6, "span", 21),
            n._uU(7),
            n.ALo(8, "appSafe"),
            n.ALo(9, "appSafe"),
            n.qZA()(),
            n.BQk()),
            2 & e) {
                const t = n.oxw().$implicit;
                n.xp6(2),
                n.s9C("src", t.icon, n.LSH),
                n.xp6(5),
                n.AsE("", n.lcZ(8, 3, t.symbol), " - ", n.lcZ(9, 5, t.realName), "")
            }
        }
        function Xn(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.ynx(0),
                n.TgZ(1, "app-new-pair-result-item", 22),
                n.NdJ("linkClicked", function() {
                    n.CHM(t);
                    const i = n.oxw(3);
                    return n.KtG(i.emitClickLink())
                }),
                n.qZA(),
                n.BQk()
            }
            if (2 & e) {
                const t = n.oxw()
                  , o = t.$implicit
                  , i = t.index
                  , r = n.oxw(2);
                n.xp6(1),
                n.Q6J("item", o)("isModal", r.isModal)("index", i)
            }
        }
        const nt = function(e, c) {
            return {
                "text-sp": e,
                "sponsor-container": c
            }
        };
        function tt(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "li", 13)(1, "div", 14, 15),
                n.NdJ("click", function(i) {
                    const h = n.CHM(t).$implicit;
                    return n.oxw(2).emitItemSelected(i, h),
                    n.KtG(!1)
                }),
                n.YNc(3, Gn, 10, 7, "ng-container", 16),
                n.YNc(4, Xn, 2, 3, "ng-container", 16),
                n.qZA()()
            }
            if (2 & e) {
                const t = c.$implicit
                  , o = n.oxw(2);
                n.Gre("item-container ", o.isModal ? "isModal" : null, ""),
                n.Q6J("ngClass", n.WLB(8, nt, (null == t ? null : t.type) === o.PairItemType.SPONSORED_PAIR, (null == t ? null : t.type) === o.PairItemType.SPONSORED_PAIR)),
                n.xp6(1),
                n.uIk("data-search", t.symbol)("data-isSponsor", (null == t ? null : t.type) === o.PairItemType.SPONSORED_PAIR),
                n.xp6(2),
                n.Q6J("ngIf", (null == t ? null : t.type) === o.PairItemType.SPONSORED_PAIR),
                n.xp6(1),
                n.Q6J("ngIf", (null == t ? null : t.type) === o.PairItemType.PAIR)
            }
        }
        function et(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "div", 2)(1, "div", 3),
                n.YNc(2, Kn, 3, 8, "div", 4),
                n.YNc(3, $n, 1, 1, "ng-container", 5),
                n.YNc(4, Wn, 5, 10, "div", 6),
                n.qZA(),
                n.TgZ(5, "ul", 7),
                n.NdJ("scroll", function(i) {
                    n.CHM(t);
                    const r = n.oxw();
                    return n.KtG(r.onScroll(i))
                }),
                n.YNc(6, tt, 5, 11, "li", 8),
                n.qZA()()
            }
            if (2 & e) {
                const t = n.oxw();
                n.Q6J("@toggleAnimation", t.dataPairs.length > 0),
                n.xp6(2),
                n.Q6J("ngIf", "desktop" === t.mediaDevice),
                n.xp6(1),
                n.Q6J("ngIf", t.showLoading && "desktop" === t.mediaDevice),
                n.xp6(1),
                n.Q6J("ngIf", "mobileTablet" === t.mediaDevice),
                n.xp6(1),
                n.Tol(t.isModal ? "search-result-list" : "results-container"),
                n.xp6(1),
                n.Q6J("ngForOf", t.dataPairsFiltered)("ngForTrackBy", t.trackByPair)
            }
        }
        function ot(e, c) {
            1 & e && (n.TgZ(0, "span", 23),
            n._uU(1),
            n.ALo(2, "translate"),
            n.TgZ(3, "span", 24),
            n._UZ(4, "span", 25),
            n.qZA()()),
            2 & e && (n.xp6(1),
            n.hij(" ", n.lcZ(2, 2, "pairs_search.loading_more"), " "),
            n.xp6(3),
            n.Q6J("appLoading", !0))
        }
        let ct = (()=>{
            class e extends _.K9 {
                onResize() {
                    this.setFilter()
                }
                constructor(t, o, i) {
                    super(),
                    this._cdRef = t,
                    this._environment = o,
                    this._routingService = i,
                    this.filterChanged = new n.vpe,
                    this.itemSelectedEmitter = new n.vpe,
                    this.dataPairs = [],
                    this.isModal = !1,
                    this.filteredExchange = null,
                    this.exchangeVersion = null,
                    this.linkClicked = new n.vpe,
                    this.chainsResults = [],
                    this.PairItemType = l.wUs,
                    this.Chain = l.qop,
                    this.dataPairsFiltered = [],
                    this.middleButton = !1,
                    this.screenWidth = window.innerWidth,
                    this.showLoading = !1,
                    this.initLoading = !0,
                    this.appContext = this._environment.app_scope,
                    this.ChainPage = y.$,
                    this.usedChains = [],
                    this._chainListWithCount = l.CXF.allChains.map(r=>({
                        ...r,
                        count: 0
                    })),
                    this.resultHasSponsor = !1
                }
                onScroll(t) {
                    t.target.offsetHeight + t.target.scrollTop + 15 >= t.target.scrollHeight && this.dataPairsFiltered.length !== this.dataPairs.length && (this.showLoading = !0,
                    this._addMoreItems())
                }
                ngOnInit() {
                    this.usedChains = this._chainListWithCount.filter(t=>this.chainsResults.some(o=>{
                        if (o._id === t.chain)
                            return t.count = o.count,
                            t
                    }
                    )),
                    this.dataPairs.length > 0 && this.dataPairs[0].type === l.wUs.SPONSORED_PAIR && (this.resultHasSponsor = !0),
                    this._cdRef.detectChanges(),
                    this.setFilter()
                }
                ngAfterViewInit() {
                    this.searchLink.changes.pipe((0,
                    _.sL)(this), (0,
                    f.b)(t=>{
                        const o = t.first && t.first.nativeElement;
                        o && (0,
                        R.R)(o, "mouseup").pipe((0,
                        _.sL)(this)).subscribe(i=>{
                            if (2 === i.which || i.ctrlKey || i.metaKey) {
                                this.middleButton = !0;
                                let r = i.target;
                                "A" !== i.target.tagName && (r = r.parentElement),
                                r.click()
                            } else
                                this.middleButton = !1
                        }
                        )
                    }
                    )).subscribe(),
                    this.setFilter()
                }
                ngOnChanges(t) {
                    t.dataPairs && null !== t.dataPairs.currentValue && t.dataPairs.currentValue?.length > 0 && this.setFilter()
                }
                setFilter() {
                    this.dataPairsFiltered = this.dataPairs.length > 15 ? this.dataPairs.slice(0, 15) : this.dataPairs,
                    this.initLoading && (this.initLoading = !1),
                    this._cdRef.detectChanges()
                }
                emitItemSelected(t, o) {
                    t.stopImmediatePropagation(),
                    t.ctrlKey || t.metaKey ? this._routingService.windowNavigate(`/${o.chain ?? l.qop.Ethereum}/${y.$.PairExplorer}/${o.id}`, "_blank", "noopener") : o.type === l.wUs.SPONSORED_PAIR ? window.open(o.url, "_blank", "noopener") : this.itemSelectedEmitter.emit(o)
                }
                getChainName() {
                    return l.CXF.getChainName(this.chain)
                }
                getExchangeName(t, o) {
                    return l.i9O.getExchangeNameFromExchangeApi(t, o)
                }
                onDestroy() {}
                trackByPair(t, o) {
                    return o.id
                }
                _addMoreItems() {
                    setTimeout(()=>{
                        this.dataPairsFiltered = this.dataPairs.slice(0, this.dataPairsFiltered.length + 5),
                        this.showLoading = !1,
                        this._cdRef.detectChanges()
                    }
                    , 100)
                }
                emitClickLink() {
                    this.linkClicked.emit()
                }
                changeChains(t) {
                    this.filterChanged.emit(t)
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(n.Y36(n.sBO),n.Y36(P.qA),n.Y36(P.Zn))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-new-pairs-search-results"]],
                viewQuery: function(t, o) {
                    if (1 & t && n.Gf(qn, 5),
                    2 & t) {
                        let i;
                        n.iGM(i = n.CRH()) && (o.searchLink = i)
                    }
                },
                hostBindings: function(t, o) {
                    1 & t && n.NdJ("resize", function() {
                        return o.onResize()
                    }, !1, n.Jf7)("scroll", function(r) {
                        return o.onScroll(r)
                    }, !1, n.Jf7)
                },
                inputs: {
                    dataPairs: "dataPairs",
                    chain: "chain",
                    isModal: "isModal",
                    filteredExchange: "filteredExchange",
                    exchangeVersion: "exchangeVersion",
                    selectedChains: "selectedChains",
                    totalResults: "totalResults",
                    searchData: "searchData",
                    mediaDevice: "mediaDevice",
                    chainsResults: "chainsResults"
                },
                outputs: {
                    filterChanged: "filterChanged",
                    itemSelectedEmitter: "itemSelectedEmitter",
                    linkClicked: "linkClicked"
                },
                standalone: !0,
                features: [n.qOj, n.TTD, n.jDz],
                decls: 3,
                vars: 1,
                consts: [["class", "search-results", 4, "ngIf"], ["loadingResults", ""], [1, "search-results"], [1, "header-search"], ["class", "results-length", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "results-filter", 4, "ngIf"], [3, "scroll"], [3, "class", "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "results-length"], [3, "ngTemplateOutlet"], [1, "results-filter"], [1, "dropdown", 3, "allChains", "isMultiselect", "chainsResults", "chainsSelected"], [3, "ngClass"], [1, "auto-complete-text", "text-start", "link-search", 3, "click"], ["searchLink", ""], [4, "ngIf"], [1, "sponsor-img-container"], ["alt", "sponsored pair icon", 1, "me-2", 3, "src"], [1, "sponsor-info"], [1, "sponsor-info__title"], [1, "sponsor-info__info"], [3, "item", "isModal", "index", "linkClicked"], [1, "loader"], [1, "loader-container"], [3, "appLoading"]],
                template: function(t, o) {
                    1 & t && (n.YNc(0, et, 7, 8, "div", 0),
                    n.YNc(1, ot, 5, 4, "ng-template", null, 1, n.W1O)),
                    2 & t && n.Q6J("ngIf", o.dataPairs.length > 0 && !o.initLoading)
                },
                dependencies: [p.O5, p.tP, Hn.n, p.ax, p.mk, Fn, C.TH, M.yl, x.aw, x.X$],
                styles: [".header-search[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.search-results[_ngcontent-%COMP%]{width:100%;height:100%;z-index:4}.search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#818ea3;border:none!important;display:flex;font-size:13px;justify-content:space-between;margin-right:1rem;padding:.7rem .5rem .5rem;text-align:left}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{color:#818ea3}.search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]   .clear-tag[_ngcontent-%COMP%]{align-items:center;background:transparent;border-radius:50%;box-shadow:0 0 .3125rem inset #ffffff90;cursor:pointer;display:inline-flex;justify-content:center;height:.78125rem;margin-bottom:.10625rem;padding-bottom:.075rem;width:.78125rem}.search-results[_ngcontent-%COMP%]   .search-result-list[_ngcontent-%COMP%]{list-style:none;margin-top:1.25rem;margin-bottom:0;max-height:18.75rem;overflow-y:auto;padding:0}.search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]{list-style:none;margin-bottom:0;max-height:calc(100% - 120px);min-height:6.3125rem;overflow-y:auto;padding:0}@media (max-width: 1023px){.search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]{max-height:calc(100% - 70px);margin-left:-.9375rem;margin-right:-.9375rem}}.search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent!important;margin-bottom:.625rem}.search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#23323c}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#e2e7ec}.search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]{border-bottom:1px solid;border-color:#c9cedc}.search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#142028!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#f4f5f6!important}.search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:last-child{border-bottom:none}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]{padding:1rem}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:hover{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:hover{background-color:#3a4956!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:hover{background-color:#3a4956!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:hover{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:hover{background-color:#f4f5f6!important}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:first-child{border-top-left-radius:1.125rem;border-top-right-radius:1.125rem}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:1.125rem;border-bottom-right-radius:1.125rem}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#cacedb!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#cacedb!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#3d5170!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#3d5170!important}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{font-weight:500}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#cacedb!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#cacedb!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#3d5170!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#3d5170!important}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]   .token-symbol-container[_ngcontent-%COMP%]{min-width:1.625rem;min-height:1.625rem}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]   .token-symbol-container[_ngcontent-%COMP%]   .token-letter[_ngcontent-%COMP%]{line-height:1.625rem;height:1.625rem;width:1.625rem}.search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]{background-color:#f4f5f6;padding:0}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]{background-color:#3a4956}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]{background-color:#f4f5f6}.search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem}.search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:bottom!important}.search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%], .search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{font-size:16px}.search-results[_ngcontent-%COMP%]   .row-result[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.search-results[_ngcontent-%COMP%]   .width-adjust[_ngcontent-%COMP%]{flex-basis:50%}.search-results[_ngcontent-%COMP%]   .results-filter[_ngcontent-%COMP%]{margin:.875rem 0;display:flex;align-items:center;width:100%}.search-results[_ngcontent-%COMP%]   .results-filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;white-space:nowrap;min-width:calc(100% - 14.375rem)}.search-results[_ngcontent-%COMP%]   .results-filter[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{width:14.375rem}.link-search[_ngcontent-%COMP%]{display:block}.border-radius-complete[_ngcontent-%COMP%]{border-radius:.9375rem}.auto-complete-text[_ngcontent-%COMP%]{color:#142028;cursor:pointer;font-size:13px!important;text-decoration:none;word-break:break-all}body.dark-theme   [_nghost-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]{color:#142028}@media (max-width: 1024px){.search-results[_ngcontent-%COMP%]:not(.border-radius-complete), .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete), body.dark-theme   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete), body.dark-theme[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete), body.light   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete), body.light[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}.search-results[_ngcontent-%COMP%]:not(.border-radius-complete)   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp), .search-results-title[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete)   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp), body.dark-theme   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete)   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp), body.dark-theme[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#23323c!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete)   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp), body.light   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete)   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp), body.light[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#e2e7ec!important}.results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#142028!important}body.light   [_nghost-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6!important}}.results-length[_ngcontent-%COMP%]{padding:2.1875rem 0;font-size:16px;font-weight:500;color:#818ea3}.results-length[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .results-length[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .results-length[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .results-length[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .results-length[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]{color:#142028}@media (max-width: 1023px){.results-length[_ngcontent-%COMP%]{padding:1.5625rem 0 1.125rem}}.loader[_ngcontent-%COMP%]{display:flex;align-items:center;line-height:1.5rem;font-size:16px;font-weight:500;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .loader[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .loader[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{color:#818ea3}.loader[_ngcontent-%COMP%]   .loader-container[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2.8125rem;margin-left:.625rem}body.dark-theme   [_nghost-%COMP%]     .results-length{color:#cacedb}body.dark-theme   [_nghost-%COMP%]     .item-container{border-color:#3a4956!important}.sponsor-container[_ngcontent-%COMP%]{display:flex;flex-flow:row;align-items:center;background-color:#e2e7ec!important;height:3.75rem!important;min-height:unset!important;border-bottom:none!important}body.dark-theme   [_nghost-%COMP%]   .sponsor-container[_ngcontent-%COMP%]{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .sponsor-container[_ngcontent-%COMP%]{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .sponsor-container[_ngcontent-%COMP%]{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .sponsor-container[_ngcontent-%COMP%]{background-color:#e2e7ec!important}.sponsor-container[_ngcontent-%COMP%]   .link-search[_ngcontent-%COMP%]{padding-left:.625rem!important}.sponsor-container[_ngcontent-%COMP%]   .sponsor-img-container[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;border-radius:2.5rem;overflow:hidden;position:relative;margin-right:.5rem}.sponsor-container[_ngcontent-%COMP%]   .sponsor-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2.5rem;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.sponsor-container[_ngcontent-%COMP%]   .sponsor-info[_ngcontent-%COMP%]{display:flex;flex-flow:column;justify-content:space-between}.sponsor-container[_ngcontent-%COMP%]   .sponsor-info__title[_ngcontent-%COMP%]{color:#818ea3;font-size:12px}body.dark-theme   [_nghost-%COMP%]   .sponsor-container[_ngcontent-%COMP%]   .sponsor-info__title[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .sponsor-container[_ngcontent-%COMP%]   .sponsor-info__title[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .sponsor-container[_ngcontent-%COMP%]   .sponsor-info__title[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .sponsor-container[_ngcontent-%COMP%]   .sponsor-info__title[_ngcontent-%COMP%]{color:#818ea3}.sponsor-container[_ngcontent-%COMP%]   .sponsor-info__info[_ngcontent-%COMP%]{color:#142028;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .sponsor-container[_ngcontent-%COMP%]   .sponsor-info__info[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .sponsor-container[_ngcontent-%COMP%]   .sponsor-info__info[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .sponsor-container[_ngcontent-%COMP%]   .sponsor-info__info[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .sponsor-container[_ngcontent-%COMP%]   .sponsor-info__info[_ngcontent-%COMP%]{color:#142028}"],
                data: {
                    animation: [(0,
                    g.X$)("toggleAnimation", [(0,
                    g.SB)("in", (0,
                    g.oB)({
                        opacity: 1
                    })), (0,
                    g.eR)(":enter", [(0,
                    g.oB)({
                        opacity: 0
                    }), (0,
                    g.jt)(500)]), (0,
                    g.eR)(":leave", (0,
                    g.jt)(200, (0,
                    g.oB)({
                        opacity: 0
                    })))])]
                },
                changeDetection: 0
            }),
            e
        }
        )();
        function rt(e, c) {
            if (1 & e && (n.ynx(0),
            n._UZ(1, "img", 3),
            n.TgZ(2, "div", 4)(3, "div", 5),
            n._uU(4, " Sponsored "),
            n.qZA(),
            n.TgZ(5, "div", 6)(6, "span"),
            n._uU(7),
            n.ALo(8, "appSafe"),
            n.qZA(),
            n.TgZ(9, "span"),
            n._uU(10),
            n.ALo(11, "appSafe"),
            n.qZA()()(),
            n.BQk()),
            2 & e) {
                const t = n.oxw();
                n.xp6(1),
                n.s9C("src", t.item.icon, n.LSH),
                n.xp6(6),
                n.hij("", n.lcZ(8, 3, t.item.symbol), " - "),
                n.xp6(3),
                n.Oqu(n.lcZ(11, 5, t.item.realName))
            }
        }
        let at = (()=>{
            class e {
                constructor(t) {
                    this._environment = t,
                    this.PairItemType = l.wUs,
                    this.appContext = this._environment.app_scope,
                    this.ChainPage = y.$,
                    this.itemSelectedEmitter = new n.vpe,
                    this.chain = this.item?.chain ?? l.qop.Ethereum
                }
                emitItemSelected(t, o) {
                    window.open(o.url, "_blank", "noopener")
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(n.Y36(P.qA))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-sponsored-top"]],
                inputs: {
                    item: "item"
                },
                standalone: !0,
                features: [n.jDz],
                decls: 3,
                vars: 4,
                consts: [[1, "spnsrd-top"], ["target", "_blank", "rel", "noopener", 1, "spnsrd-top__link", "d-flex", "align-items-center", "justify-content-start", 3, "href"], [4, "ngIf"], ["alt", "pair icon", 3, "src"], [1, "d-block"], [1, "spnsrd-top__title"], [1, "title-search-normal"]],
                template: function(t, o) {
                    1 & t && (n.TgZ(0, "div", 0)(1, "a", 1),
                    n.YNc(2, rt, 12, 7, "ng-container", 2),
                    n.qZA()()),
                    2 & t && (n.uIk("data-search", o.item.symbol)("data-isSponsor", o.item.type === o.PairItemType.SPONSORED_PAIR),
                    n.xp6(1),
                    n.Q6J("href", o.item.url, n.LSH),
                    n.xp6(1),
                    n.Q6J("ngIf", (null == o.item ? null : o.item.type) === o.PairItemType.SPONSORED_PAIR))
                },
                dependencies: [p.O5, M.yl],
                styles: [".spnsrd-top[_ngcontent-%COMP%]{background-color:#23323c;border-radius:.625rem;margin-top:1.25rem;padding:.3125rem .625rem;width:100%}.spnsrd-top__title[_ngcontent-%COMP%]{font-size:14px;color:#3d5170}.spnsrd-top__link[_ngcontent-%COMP%]{text-decoration:none;font-size:14px;font-weight:500;color:#818ea3!important;text-transform:capitalize}.spnsrd-top__link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:1.875rem;margin-right:.625rem;width:1.875rem}body.dark-theme   [_nghost-%COMP%]     .sponsored-top__title{color:#3a4956}body.dark-theme   [_nghost-%COMP%]     .sponsored-top__link{color:#fff!important}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var z = a(24006);
        function st(e, c) {
            if (1 & e && n._UZ(0, "img", 8),
            2 & e) {
                const t = n.oxw().$implicit;
                n.s9C("src", t.logoUrl, n.LSH)
            }
        }
        function lt(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "li", 4)(1, "div", 5),
                n.NdJ("click", function(i) {
                    const h = n.CHM(t).$implicit
                      , O = n.oxw();
                    return n.KtG(O.selectItem(h.chain, i))
                }),
                n.TgZ(2, "span", 6),
                n.YNc(3, st, 1, 1, "img", 7),
                n.qZA(),
                n._uU(4),
                n.qZA()()
            }
            if (2 & e) {
                const t = c.$implicit;
                n.xp6(3),
                n.Q6J("ngIf", !(null == t || !t.logoUrl)),
                n.xp6(1),
                n.AsE(" ", t.chainName, " (", t.count, ") ")
            }
        }
        let gt = (()=>{
            class e extends _.K9 {
                constructor(t, o) {
                    super(),
                    this._cdRef = t,
                    this._breakpointObserver = o,
                    this.items = [],
                    this.changeFilter = new n.vpe,
                    this.chainsResults = [],
                    this.mediaDevice = "",
                    this.xsActive = !1,
                    this.selectedChains = []
                }
                ngOnInit() {
                    this.chainsResults = this.items.filter(t=>-1 !== l.fUz.indexOf(t._id)).map(t=>({
                        ...l.CXF.getChainData(t._id),
                        count: t.count
                    })),
                    this._cdRef.detectChanges(),
                    this._breakpointObserver.observe([Z.u3.XSmall, C.K5, C.mT]).pipe((0,
                    _.sL)(this)).subscribe(t=>{
                        t.breakpoints[Z.u3.XSmall] ? (this.mediaDevice = "mobileTablet",
                        this.xsActive = !0) : t.breakpoints[C.K5] ? (this.mediaDevice = "mobileTablet",
                        this.xsActive = !1) : (this.mediaDevice = "desktop",
                        this.xsActive = !1),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                selectItem(t, o) {
                    const r = o.target.parentElement;
                    r.classList.contains("active") ? (r.classList.remove("active"),
                    this.selectedChains = this.selectedChains.filter(h=>h !== t),
                    this.changeFilter.emit(this.selectedChains)) : (r.classList.add("active"),
                    this.selectedChains.push(t),
                    this.changeFilter.emit(this.selectedChains)),
                    this._cdRef.detectChanges()
                }
                onDestroy() {}
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(n.Y36(n.sBO),n.Y36(Z.Yg))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-chain-selector-column"]],
                inputs: {
                    items: "items"
                },
                outputs: {
                    changeFilter: "changeFilter"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 5,
                vars: 1,
                consts: [[1, "selector-container"], [1, "selector__title"], [1, "chains-list"], ["class", "chains-list__item", 4, "ngFor", "ngForOf"], [1, "chains-list__item"], [3, "click"], [1, "image-container"], ["alt", "item-logo", "loading", "lazy", 3, "src", 4, "ngIf"], ["alt", "item-logo", "loading", "lazy", 3, "src"]],
                template: function(t, o) {
                    1 & t && (n.TgZ(0, "div", 0)(1, "div", 1),
                    n._uU(2, "Chains"),
                    n.qZA(),
                    n.TgZ(3, "ul", 2),
                    n.YNc(4, lt, 5, 3, "li", 3),
                    n.qZA()()),
                    2 & t && (n.xp6(4),
                    n.Q6J("ngForOf", o.chainsResults))
                },
                dependencies: [p.ax, p.O5],
                styles: [".selector-container[_ngcontent-%COMP%]{padding-top:8.125rem;height:calc(100% - 40px)!important;max-height:unset}@media (min-width: 1440px){.selector-container[_ngcontent-%COMP%]{min-width:14.375rem}}.selector-container[_ngcontent-%COMP%]   .selector__title[_ngcontent-%COMP%]{color:#142028;font-size:16px}body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .selector__title[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .selector__title[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .selector__title[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .selector__title[_ngcontent-%COMP%]{color:#142028}.chains-list[_ngcontent-%COMP%]{list-style:none;list-style-position:outside;display:flex;flex-flow:column;padding:0;margin-top:1.6875rem;max-height:calc(100% - 50px);overflow-y:auto;width:-moz-fit-content;width:fit-content;padding-right:.625rem}.chains-list__item[_ngcontent-%COMP%]{border-radius:3.125rem;box-sizing:border-box;border:1px solid;width:-moz-fit-content;width:fit-content;cursor:pointer;border-color:#c9cedc;color:#142028;font-size:13px;margin-bottom:1.25rem}body.dark-theme   [_nghost-%COMP%]   .chains-list__item[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .chains-list__item[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .chains-list__item[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .chains-list__item[_ngcontent-%COMP%]{color:#142028}.chains-list__item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding:0 .625rem 0 .25rem;height:2rem;line-height:2rem}.chains-list__item[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;border-radius:1.5rem;overflow:hidden;margin-right:6px}.chains-list__item[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.5rem;vertical-align:unset}.chains-list__item[_ngcontent-%COMP%]:hover, .chains-list__item.active[_ngcontent-%COMP%]{background-color:#e1e7ed}.chains-list__item[_ngcontent-%COMP%]:last-child{margin-bottom:0}body.dark-theme   [_nghost-%COMP%]     .chains-list__item{border-color:#3a4956}body.dark-theme   [_nghost-%COMP%]     .chains-list__item:hover, body.dark-theme   [_nghost-%COMP%]     .chains-list__item.active{background-color:#3a4956}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var ht = a(30501)
          , _t = a(11481);
        const dt = ["pairSearch"]
          , pt = ["searchInput"];
        function mt(e, c) {
            1 & e && n._UZ(0, "div", 21),
            2 & e && n.Q6J("@toggleAnimation", !0)
        }
        const Ct = function() {
            return ["fal", "times"]
        };
        function Pt(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "button", 22),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.closeSearch())
                }),
                n._UZ(1, "fa-icon", 23),
                n.ALo(2, "translate"),
                n.qZA()
            }
            2 & e && (n.xp6(1),
            n.Q6J("icon", n.DdM(4, Ct))("ngbTooltip", n.lcZ(2, 2, "home.close")))
        }
        function ut(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "app-chain-selector-column", 28),
                n.NdJ("changeFilter", function(i) {
                    n.CHM(t);
                    const r = n.oxw(2);
                    return n.KtG(r.filterResults(i))
                }),
                n.qZA()
            }
            if (2 & e) {
                const t = n.oxw(2);
                n.Q6J("items", t.chainsResults)
            }
        }
        function Ot(e, c) {
            if (1 & e && (n.TgZ(0, "div", 24)(1, "div", 25),
            n.YNc(2, ut, 1, 1, "app-chain-selector-column", 26),
            n.qZA(),
            n._UZ(3, "div", 27),
            n.qZA()),
            2 & e) {
                const t = n.oxw();
                n.xp6(2),
                n.Q6J("ngIf", t.dataPairs.length > 0 && t.chainsResults.length > 0)
            }
        }
        function ft(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "app-chain-selector-column", 28),
                n.NdJ("changeFilter", function(i) {
                    n.CHM(t);
                    const r = n.oxw(2);
                    return n.KtG(r.filterResults(i))
                }),
                n.qZA()
            }
            if (2 & e) {
                const t = n.oxw(2);
                n.Q6J("items", t.chainsResults)
            }
        }
        function Mt(e, c) {
            if (1 & e && (n.TgZ(0, "div", 25),
            n.YNc(1, ft, 1, 1, "app-chain-selector-column", 26),
            n.qZA()),
            2 & e) {
                const t = n.oxw();
                n.xp6(1),
                n.Q6J("ngIf", t.dataPairs.length > 0 && t.chainsResults.length > 0)
            }
        }
        const bt = function() {
            return ["far", "search"]
        }
          , xt = function(e) {
            return {
                "search-active": e
            }
        };
        function vt(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "fa-icon", 29),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.openSearch())
                }),
                n.qZA()
            }
            if (2 & e) {
                const t = n.oxw();
                n.Q6J("icon", n.DdM(2, bt))("ngClass", n.VKq(3, xt, t.filterBtnShown || !!t.search.length || t.isSearch))
            }
        }
        function yt(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "span", 30),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.clearSearchInput())
                }),
                n._uU(1),
                n.ALo(2, "translate"),
                n.qZA()
            }
            2 & e && (n.xp6(1),
            n.Oqu(n.lcZ(2, 1, "pairs_search.clear_search")))
        }
        function kt(e, c) {
            if (1 & e && n._UZ(0, "app-sponsored-top", 31),
            2 & e) {
                const t = n.oxw();
                n.Q6J("item", t.sponsor)
            }
        }
        function wt(e, c) {
            if (1 & e && n.GkF(0, 32),
            2 & e) {
                n.oxw();
                const t = n.MAs(27);
                n.Q6J("ngTemplateOutlet", t)
            }
        }
        const D = function(e) {
            return {
                "filter-disabled": e
            }
        };
        function St(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "app-new-pairs-search-results", 33),
                n.NdJ("itemSelectedEmitter", function(i) {
                    n.CHM(t);
                    const r = n.oxw();
                    return n.KtG(r.onItemSelected(i))
                })("linkClicked", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.emitClickLink())
                })("filterChanged", function(i) {
                    n.CHM(t);
                    const r = n.oxw();
                    return n.KtG(r.filterResults(i))
                }),
                n.qZA()
            }
            if (2 & e) {
                const t = n.oxw();
                n.Q6J("ngClass", n.VKq(9, D, !t.filterEnabled))("dataPairs", t.dataPairs)("chain", t.chain)("filteredExchange", t.filteredExchange)("selectedChains", t.selectedChains)("totalResults", t.totalResults)("searchData", t.searchData)("mediaDevice", t.mediaDevice)("chainsResults", t.chainsResults)
            }
        }
        function Tt(e, c) {
            if (1 & e && (n.TgZ(0, "div", 34)(1, "span"),
            n._uU(2),
            n.ALo(3, "translate"),
            n.qZA()()),
            2 & e) {
                const t = n.oxw();
                n.Q6J("ngClass", n.VKq(4, D, !t.filterEnabled)),
                n.xp6(2),
                n.Oqu(n.lcZ(3, 2, "pairs_search.no_results"))
            }
        }
        function At(e, c) {
            if (1 & e && (n.TgZ(0, "div", 34)(1, "span", 35),
            n._uU(2),
            n.ALo(3, "translate"),
            n.qZA(),
            n.TgZ(4, "span", 36),
            n._UZ(5, "span", 37),
            n.qZA()()),
            2 & e) {
                const t = n.oxw();
                n.Q6J("ngClass", n.VKq(5, D, !t.filterEnabled)),
                n.xp6(2),
                n.Oqu(n.lcZ(3, 3, "pairs_search.searching")),
                n.xp6(3),
                n.Q6J("appLoading", !0)
            }
        }
        function Zt(e, c) {
            if (1 & e && n.GkF(0, 32),
            2 & e) {
                n.oxw();
                const t = n.MAs(23);
                n.Q6J("ngTemplateOutlet", t)
            }
        }
        function It(e, c) {
            if (1 & e && n.GkF(0, 32),
            2 & e) {
                n.oxw();
                const t = n.MAs(25);
                n.Q6J("ngTemplateOutlet", t)
            }
        }
        function zt(e, c) {
            1 & e && n._UZ(0, "div", 27)
        }
        function Nt(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "app-previous-searches", 40),
                n.NdJ("previousSearchSelected", function(i) {
                    n.CHM(t);
                    const r = n.oxw(2);
                    return n.KtG(r.onPreviousSelected(i))
                }),
                n.qZA()
            }
            if (2 & e) {
                const t = n.oxw(2);
                n.Q6J("items", t.previousSearches)("typeOfAction", t.typeOfAction)
            }
        }
        function Rt(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "app-trending-list-search", 38),
                n.NdJ("trendingSelected", function(i) {
                    n.CHM(t);
                    const r = n.oxw();
                    return n.KtG(r.onHotPairSelected(i))
                }),
                n.qZA(),
                n.YNc(1, Nt, 1, 2, "app-previous-searches", 39)
            }
            if (2 & e) {
                const t = n.oxw();
                n.Q6J("typeOfAction", t.typeOfAction),
                n.xp6(1),
                n.Q6J("ngIf", t.previousSearches.length > 0)
            }
        }
        function Lt(e, c) {
            if (1 & e && n.GkF(0, 32),
            2 & e) {
                n.oxw(2);
                const t = n.MAs(23);
                n.Q6J("ngTemplateOutlet", t)
            }
        }
        function Et(e, c) {
            if (1 & e && (n.TgZ(0, "div", 41),
            n.YNc(1, Lt, 1, 1, "ng-container", 13),
            n.qZA(),
            n._UZ(2, "div", 42)),
            2 & e) {
                const t = n.oxw();
                n.xp6(1),
                n.Q6J("ngIf", (t.filterBtnShown || !!t.search.length || t.isSearch) && !t.isLoading)
            }
        }
        function Jt(e, c) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "app-search-coinzilla-banner", 43),
                n.NdJ("coinzillaBannerClosed", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.closeCoinzillaBanner())
                }),
                n.qZA()
            }
            if (2 & e) {
                const t = n.oxw();
                n.Q6J("zoneId", t.coinzillaZoneId)
            }
        }
        const Dt = function(e, c) {
            return {
                active: e,
                "full-height": c
            }
        }
          , Qt = function(e) {
            return {
                "search-active box-active": e
            }
        };
        let Bt = (()=>{
            class e extends _.K9 {
                onDocumentClicked(t, o) {
                    o.classList.contains("overlay-search") ? this.closeSearch() : o && document.body.contains(o) && !this.pairSearch.nativeElement.contains(o) && this._resetSearch()
                }
                constructor(t, o, i, r, h, O) {
                    super(),
                    this._pairsSearchService = t,
                    this._cdRef = o,
                    this._breakpointObserver = i,
                    this._sponsorsService = r,
                    this._authenticationService = h,
                    this._sanitizer = O,
                    this.pairsViewed = [],
                    this.filterEnabled = !0,
                    this.placeholder = "",
                    this.filterIcon = !0,
                    this.searchDisabled = !1,
                    this.itemSelected = new n.vpe,
                    this.onInputChange$ = new S.x,
                    this.dataPairs = [],
                    this.isLoading = !1,
                    this.middleButton = !1,
                    this.filterBtnShown = window.innerWidth < 768,
                    this.isSearch = !1,
                    this._isFocusOutput = !1,
                    this.search = "",
                    this.chainStatsList = {
                        ...l.i9O.chainStats
                    },
                    this._chainFilterChange$ = new S.x,
                    this.chainFilterChange$ = this._chainFilterChange$.asObservable(),
                    this.mediaDevice = "desktop",
                    this.fullWidth = !0,
                    this.chainsResults = [],
                    this.searchData = "",
                    this.previousSearches = [],
                    this._searchSponsor = null,
                    this.allSearchSponsors = [],
                    this.userAccess = !1,
                    this.showCoinzillaBanner = !0,
                    this.typeOfAction = "reloadRoute",
                    this.trendingSelected = new n.vpe,
                    this.previousSelected = new n.vpe,
                    this.Chain = l.qop,
                    l.i9O.chainStatsUpdated$.pipe((0,
                    _.sL)(this)).subscribe(()=>{
                        this.chainStatsList = {
                            ...l.i9O.chainStats
                        },
                        this._cdRef.detectChanges()
                    }
                    ),
                    this.coinzillaZoneId = q.yO
                }
                ngOnInit() {
                    this._focusedElementTemp = document.activeElement,
                    this._authenticationService.currentUser$.pipe((0,
                    _.sL)(this)).subscribe(t=>{
                        this.userAccess = !!t && -1 !== [P.uU.P100, P.uU.P20].indexOf(t.plan)
                    }
                    ),
                    this._breakpointObserver.observe([C.K5, C.mT, C.YS]).pipe((0,
                    _.sL)(this)).subscribe(t=>{
                        t.breakpoints[C.K5] ? (this.mediaDevice = "mobileTablet",
                        this.fullWidth = !1) : t.breakpoints[C.YS] ? (this.mediaDevice = "desktop",
                        this.fullWidth = !0) : (this.mediaDevice = "desktop",
                        this.fullWidth = !1),
                        this._cdRef.detectChanges()
                    }
                    ),
                    this.onInputChange$.pipe((0,
                    _.sL)(this), (0,
                    f.b)(t=>{
                        if ("Escape" === t.key) {
                            this.closeSearch(),
                            this._isFocusOutput = !0;
                            const o = this._focusedElementTemp?.tabIndex;
                            this._focusedElementTemp.tabIndex = 1,
                            this._focusedElementTemp?.focus(),
                            this._focusedElementTemp.tabIndex = o ?? -1
                        }
                    }
                    ), (0,
                    s.b)(500), (0,
                    b.x)(), (0,
                    f.b)(()=>{
                        this.searchData = this.search,
                        this.isLoading = !0,
                        this.dataPairs = [],
                        this._cdRef.detectChanges(),
                        this.search.length > 0 ? (this.search = this._sanitizer.sanitize(n.q3G.HTML, this.search) ?? "",
                        this._searchPairs(this.search, this.filteredExchange)) : (this.isLoading = !1,
                        this._isFocusOutput || this.clearSearchInput(),
                        this._isFocusOutput = !1)
                    }
                    ), (0,
                    T.K)(()=>(this.isLoading = !1,
                    u.E))).subscribe(),
                    this._sponsorsService.getBanners(!1, !1, "search").pipe((0,
                    _.sL)(this), (0,
                    k.q)(1), (0,
                    f.b)(t=>{
                        t.length > 0 && (this.allSearchSponsors = [...t],
                        this._searchSponsor = this._sponsorsService.fillSocialLinks([...t])[0],
                        this._searchSponsor = this._sponsorsService.replaceSponsorSuffix(this._searchSponsor),
                        this._setSponsorData())
                    }
                    )).subscribe(),
                    this.previousSearches = this._pairsSearchService.getPreviousSearches("pairs"),
                    "mobileTablet" === this.mediaDevice && (this.searchInput.nativeElement.focus(),
                    this.filterBtnShown = this.filterEnabled),
                    this._cdRef.detectChanges()
                }
                ngAfterViewInit() {
                    (0,
                    R.R)(this.searchInput.nativeElement, "focusin").pipe((0,
                    _.sL)(this)).subscribe(()=>{
                        this.filterBtnShown = this.filterEnabled,
                        "hidden" !== document.body.style.overflow && (document.body.style.overflow = "hidden"),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _resetSearch() {
                    this.search.length && (this.dataPairs = [],
                    this.search = "",
                    this._isFocusOutput = !0,
                    this.isSearch = !1,
                    this._cdRef.detectChanges(),
                    this.onInputChange$.next(new KeyboardEvent("keyup")))
                }
                _searchPairs(t, o=null) {
                    this.dataPairs = [],
                    t = t.trim().toLowerCase().replace(/\s\s/g, " ").split(/[\\\/|\s\[\]{}()]+/).join(" ").trim();
                    const i = o && l.i9O.getGenericExchangeApi(o);
                    this._searchPairByChain(t, i ? [i] : [], null).pipe((0,
                    _.sL)(this), (0,
                    I.R)(this.chainFilterChange$), (0,
                    f.b)(h=>{
                        const O = this._pairsSearchService.formatPairItemsWithAllData(h, this.chain);
                        this.dataPairs = this._getResultsByChain(O),
                        this.pairsViewed && this.pairsViewed.length && (this.dataPairs = this.dataPairs.filter(N=>!this.pairsViewed.find(Q=>Q.id === N.id))),
                        this._setSponsorData(),
                        this.isSearch = !0,
                        this._cdRef.detectChanges()
                    }
                    ), (0,
                    m.x)(()=>{
                        this.search.length ? (this._focusedElementTemp = document.activeElement,
                        this.searchInput.nativeElement.focus(),
                        this._cdRef.detectChanges()) : this._resetSearch()
                    }
                    )).subscribe({
                        error: h=>{
                            this.isLoading = !1,
                            this._cdRef.detectChanges(),
                            console.error(h)
                        }
                        ,
                        complete: ()=>{
                            this.isLoading = !1,
                            this._cdRef.detectChanges()
                        }
                    })
                }
                _setSponsorData() {
                    if (this._searchSponsor && !this._searchSponsor.disabled) {
                        let t;
                        t = this._searchSponsor.pair ? this._searchSponsor.pair : this._searchSponsor.targetLink ? this._searchSponsor.targetLink : this._searchSponsor.links?.web,
                        this.sponsor = {
                            type: l.wUs.SPONSORED_PAIR,
                            id: t,
                            name: this.dataPairs && this.dataPairs.length > 0 ? this.dataPairs[0].name : "",
                            symbol: this._searchSponsor.symbol,
                            realName: this._searchSponsor.name,
                            icon: this._searchSponsor.logo,
                            url: this._searchSponsor.links?.web
                        },
                        this._cdRef.detectChanges()
                    }
                }
                _getResultsByChain(t) {
                    return t.slice(0, 25)
                }
                _searchPairByChain(t, o=[], i=null) {
                    return t ? i ? this._pairsSearchService.searchPairs(t, o, i).pipe((0,
                    d.U)(r=>(this.chainsResults = r?.info.chainsTotal,
                    this.totalResults = r?.info.countTotal,
                    this._cdRef.detectChanges(),
                    r.results.map(h=>({
                        ...h,
                        chain: i
                    }))))) : this._pairsSearchService.searchPairs(t, o).pipe((0,
                    I.R)(this.chainFilterChange$), (0,
                    T.K)(()=>(0,
                    v.of)({})), (0,
                    d.U)(r=>Object.keys(r).length > 0 ? (this.chainsResults = r?.info.chainsTotal,
                    this.totalResults = r?.info.countTotal,
                    this._cdRef.detectChanges(),
                    (r?.results ?? []).map(h=>({
                        ...h,
                        chain: h.id.chain
                    }))) : [])) : (0,
                    v.of)([])
                }
                _searchPairByChains(t=null) {
                    return this._pairsSearchService.searchPairsByChain(this.searchData, void 0, t).pipe((0,
                    d.U)(o=>(this.totalResults = o?.info.countTotal,
                    this._cdRef.detectChanges(),
                    (o?.results ?? []).map(i=>({
                        ...i,
                        chain: i.id.chain
                    })))))
                }
                onSearchPasted(t) {
                    this.search = t.clipboardData?.getData("text") ?? "",
                    this.onInputChange$.next(new KeyboardEvent("keyup"))
                }
                onItemSelected(t) {
                    if (this._pairsSearchService.setPreviousSearches({
                        chain: t.chain,
                        address: t.id,
                        symbol: t.symbol,
                        symbol_vs: t.symbol_vs
                    }),
                    t && t.id) {
                        let i = t.exchange ? t.exchange : l.ibW;
                        i = l.i9O.getGenericExchangeApi(i),
                        t.id.includes("http") ? window.open(t.id, "_blank", "noopener") : this.itemSelected.emit({
                            item: t,
                            exchangeApi: i,
                            middleButton: this.middleButton
                        }),
                        this.searchInput.nativeElement.value = "",
                        this.clearSearchInput(),
                        this._cdRef.detectChanges()
                    }
                    this.previousSearches = this._pairsSearchService.getPreviousSearches("pairs"),
                    this.closeSearch(),
                    this._cdRef.detectChanges()
                }
                filterResults(t) {
                    this._searchPairByChains(t).pipe((0,
                    _.sL)(this), (0,
                    I.R)(this.chainFilterChange$), (0,
                    f.b)(o=>{
                        const i = this._pairsSearchService.formatPairItemsWithAllData(o, this.chain);
                        this.dataPairs = this._getResultsByChain(i),
                        this.pairsViewed && this.pairsViewed.length && (this.dataPairs = this.dataPairs.filter(r=>!this.pairsViewed.find(h=>h.id === r.id))),
                        this.isSearch = !0,
                        this._setSponsorData(),
                        this._cdRef.detectChanges()
                    }
                    ), (0,
                    m.x)(()=>{
                        this.search.length ? (this._focusedElementTemp = document.activeElement,
                        this.searchInput.nativeElement.focus(),
                        this._cdRef.detectChanges()) : this._resetSearch()
                    }
                    )).subscribe({
                        error: o=>{
                            this.isLoading = !1,
                            this._cdRef.detectChanges(),
                            console.error(o)
                        }
                        ,
                        complete: ()=>{
                            this.isLoading = !1,
                            this._cdRef.detectChanges()
                        }
                    })
                }
                clearSearchInput() {
                    this.dataPairs = [],
                    this.searchInput.nativeElement.focus(),
                    this.search = "",
                    this.isSearch = !1,
                    this._cdRef.detectChanges()
                }
                onDestroy() {
                    this._chainFilterChange$.complete(),
                    "auto" !== document.body.style.overflow && (document.body.style.overflow = "auto")
                }
                openSearch() {
                    this._focusedElementTemp = document.activeElement,
                    this.searchInput.nativeElement.focus()
                }
                closeSearch() {
                    "auto" !== document.body.style.overflow && (document.body.style.overflow = "auto"),
                    this.filterBtnShown = !1,
                    this.isSearch = !1,
                    this.showCoinzillaBanner = !0,
                    this._resetSearch(),
                    this._cdRef.detectChanges()
                }
                emitClickLink() {
                    this.previousSearches = this._pairsSearchService.getPreviousSearches("pairs"),
                    this._cdRef.detectChanges()
                }
                onHotPairSelected(t) {
                    this.trendingSelected.emit(t),
                    this.closeSearch()
                }
                onPreviousSelected(t) {
                    this.previousSelected.emit(t),
                    this.closeSearch()
                }
                closeCoinzillaBanner() {
                    this.showCoinzillaBanner = !1,
                    this._cdRef.detectChanges()
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(n.Y36(l.OoE),n.Y36(n.sBO),n.Y36(Z.Yg),n.Y36(ht.D),n.Y36(P.$h),n.Y36(_t.H7))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-new-pairs-search"]],
                viewQuery: function(t, o) {
                    if (1 & t && (n.Gf(dt, 7),
                    n.Gf(pt, 5)),
                    2 & t) {
                        let i;
                        n.iGM(i = n.CRH()) && (o.pairSearch = i.first),
                        n.iGM(i = n.CRH()) && (o.searchInput = i.first)
                    }
                },
                hostBindings: function(t, o) {
                    1 & t && n.NdJ("click", function(r) {
                        return o.onDocumentClicked(r, r.target)
                    }, !1, n.evT)
                },
                inputs: {
                    pairsViewed: "pairsViewed",
                    exchange: "exchange",
                    chain: "chain",
                    filterEnabled: "filterEnabled",
                    placeholder: "placeholder",
                    filterIcon: "filterIcon",
                    searchDisabled: "searchDisabled",
                    typeOfAction: "typeOfAction"
                },
                outputs: {
                    itemSelected: "itemSelected",
                    trendingSelected: "trendingSelected",
                    previousSelected: "previousSelected"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 28,
                vars: 28,
                consts: [["class", "overlay-search", 4, "ngIf"], [1, "search-global-container", 3, "ngClass"], ["pairSearch", ""], ["type", "button", "class", "close-search", "aria-label", "Close", 3, "click", 4, "ngIf"], ["class", "filters-sponsors-container", 4, "ngIf"], ["class", "chains-filter-column", 4, "ngIf"], [1, "ng-autocomplete-class", "search-block", 3, "ngClass"], [1, "search-container"], ["appRestrictInput", "^[\\d\\s./:<>A-Za-z\\-_]*$", "type", "text", 1, "search-pairs", 3, "placeholder", "ngModel", "disabled", "maxlength", "ngModelChange", "keyup", "paste"], ["searchInput", ""], ["class", "text-muted search-icon", 3, "icon", "ngClass", "click", 4, "ngIf"], ["class", "close-text", 3, "click", 4, "ngIf"], [3, "item", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngClass", "dataPairs", "chain", "filteredExchange", "selectedChains", "totalResults", "searchData", "mediaDevice", "chainsResults", "itemSelectedEmitter", "linkClicked", "filterChanged", 4, "ngIf"], ["class", "not-found-container", 3, "ngClass", 4, "ngIf"], [1, "trending-previous-container"], ["class", "sponsors-column", 4, "ngIf"], ["trendingBlock", ""], ["trendingBlockMobile", ""], ["coinzillaBanner", ""], [1, "overlay-search"], ["type", "button", "aria-label", "Close", 1, "close-search", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], [1, "filters-sponsors-container"], [1, "chains-filter-column"], [3, "items", "changeFilter", 4, "ngIf"], [1, "sponsors-column"], [3, "items", "changeFilter"], [1, "text-muted", "search-icon", 3, "icon", "ngClass", "click"], [1, "close-text", 3, "click"], [3, "item"], [3, "ngTemplateOutlet"], [3, "ngClass", "dataPairs", "chain", "filteredExchange", "selectedChains", "totalResults", "searchData", "mediaDevice", "chainsResults", "itemSelectedEmitter", "linkClicked", "filterChanged"], [1, "not-found-container", 3, "ngClass"], [1, "mb-0"], [1, "loading"], [3, "appLoading"], [3, "typeOfAction", "trendingSelected"], [3, "items", "typeOfAction", "previousSearchSelected", 4, "ngIf"], [3, "items", "typeOfAction", "previousSearchSelected"], [1, "trending-previous__mobile"], [1, "sponsors__mobile"], [3, "zoneId", "coinzillaBannerClosed"]],
                template: function(t, o) {
                    1 & t && (n.YNc(0, mt, 1, 1, "div", 0),
                    n.TgZ(1, "div", 1, 2),
                    n.YNc(3, Pt, 3, 5, "button", 3),
                    n.YNc(4, Ot, 4, 1, "div", 4),
                    n.YNc(5, Mt, 2, 1, "div", 5),
                    n.TgZ(6, "div", 6)(7, "div", 7)(8, "input", 8, 9),
                    n.NdJ("ngModelChange", function(r) {
                        return o.search = r
                    })("keyup", function(r) {
                        return o.onInputChange$.next(r)
                    })("paste", function(r) {
                        return o.onSearchPasted(r)
                    }),
                    n.ALo(10, "translate"),
                    n.qZA(),
                    n.YNc(11, vt, 1, 5, "fa-icon", 10),
                    n.YNc(12, yt, 3, 3, "span", 11),
                    n.qZA(),
                    n.YNc(13, kt, 1, 1, "app-sponsored-top", 12),
                    n.YNc(14, wt, 1, 1, "ng-container", 13),
                    n.YNc(15, St, 1, 11, "app-new-pairs-search-results", 14),
                    n.YNc(16, Tt, 4, 6, "div", 15),
                    n.YNc(17, At, 6, 7, "div", 15),
                    n.TgZ(18, "div", 16),
                    n.YNc(19, Zt, 1, 1, "ng-container", 13),
                    n.YNc(20, It, 1, 1, "ng-container", 13),
                    n.qZA()(),
                    n.YNc(21, zt, 1, 0, "div", 17),
                    n.qZA(),
                    n.YNc(22, Rt, 2, 2, "ng-template", null, 18, n.W1O),
                    n.YNc(24, Et, 3, 1, "ng-template", null, 19, n.W1O),
                    n.YNc(26, Jt, 1, 1, "ng-template", null, 20, n.W1O)),
                    2 & t && (n.Q6J("ngIf", o.filterBtnShown || !!o.search.length || o.isSearch || "mobileTablet" === o.mediaDevice || !!o.search.length && o.isSearch && !o.dataPairs.length && !o.isLoading),
                    n.xp6(1),
                    n.Q6J("ngClass", n.WLB(23, Dt, o.filterBtnShown || !!o.search.length || o.isSearch || "mobileTablet" === o.mediaDevice || !!o.search.length && o.isSearch && !o.dataPairs.length && !o.isLoading, o.dataPairs.length > 0 || !!o.search.length))("@toggleAnimation", !0),
                    n.xp6(2),
                    n.Q6J("ngIf", (o.filterBtnShown || !!o.search.length || o.isSearch) && "mobileTablet" !== o.mediaDevice),
                    n.xp6(1),
                    n.Q6J("ngIf", (o.filterEnabled && o.filterBtnShown || !!o.search.length && o.isSearch) && !o.fullWidth && "mobileTablet" !== o.mediaDevice),
                    n.xp6(1),
                    n.Q6J("ngIf", (o.filterEnabled && o.filterBtnShown || !!o.search.length && o.isSearch) && o.fullWidth),
                    n.xp6(1),
                    n.Q6J("ngClass", n.VKq(26, Qt, o.filterEnabled && o.filterBtnShown || !!o.search.length && o.isSearch)),
                    n.xp6(2),
                    n.s9C("placeholder", n.lcZ(10, 21, o.placeholder)),
                    n.Q6J("ngModel", o.search)("disabled", o.searchDisabled)("maxlength", o.chain === o.Chain.Aptos ? 820 : 128),
                    n.xp6(3),
                    n.Q6J("ngIf", o.filterIcon),
                    n.xp6(1),
                    n.Q6J("ngIf", !!o.search.length),
                    n.xp6(1),
                    n.Q6J("ngIf", !!o.sponsor && o.filterBtnShown),
                    n.xp6(1),
                    n.Q6J("ngIf", o.filterBtnShown && !o.sponsor && !o.userAccess && o.showCoinzillaBanner),
                    n.xp6(1),
                    n.Q6J("ngIf", !o.isLoading && o.isSearch && o.search.length > 0),
                    n.xp6(1),
                    n.Q6J("ngIf", !!o.search.length && o.isSearch && !o.dataPairs.length && !o.isLoading),
                    n.xp6(1),
                    n.Q6J("ngIf", o.isLoading && o.search.length > 0),
                    n.xp6(2),
                    n.Q6J("ngIf", (o.filterBtnShown || !!o.search.length || o.isSearch) && !o.isLoading && "mobileTablet" !== o.mediaDevice),
                    n.xp6(1),
                    n.Q6J("ngIf", (o.filterBtnShown || !!o.search.length || o.isSearch) && !o.isLoading && "mobileTablet" === o.mediaDevice),
                    n.xp6(1),
                    n.Q6J("ngIf", (o.filterEnabled && o.filterBtnShown || !!o.search.length && o.isSearch) && o.fullWidth))
                },
                dependencies: [p.O5, p.mk, A.uH, A.BN, L._L, gt, z.u5, z.Fj, z.JJ, z.nD, z.On, at, p.tP, ct, C.TH, rn, en, X, x.aw, x.X$, M.O7],
                styles: ["[_nghost-%COMP%]{width:100%}.close-button[_ngcontent-%COMP%]{width:1.25rem;height:1.375rem;display:flex;justify-content:center;align-items:center;font-size:14px;background-color:#f4f5f6;color:#818ea3;border-radius:3.125rem;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{background-color:#3a4956}body.light   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{color:#818ea3}.close-button[_ngcontent-%COMP%]:focus, .close-button[_ngcontent-%COMP%]:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:focus, body.dark-theme   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:focus, body.dark-theme[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover{color:#fff}body.light   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:focus, body.light   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:hover{color:#142028}body.light[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:focus, body.light[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover{color:#142028}.close-button[_ngcontent-%COMP%]{position:absolute;right:.4375rem!important;top:50%!important;left:auto!important;transform:translateY(-50%)}.ng-autocomplete-class[_ngcontent-%COMP%]{position:relative;width:100%;transition:width .3s ease-in-out}.ng-autocomplete-class.filter-btn-visible[_ngcontent-%COMP%]{width:calc(100% - 26px);transition:width .2s ease-in-out}.close-search[_ngcontent-%COMP%]{height:2.5rem;width:2.5rem;background-color:#e2e7ec!important;color:#142028;border-radius:2.5rem;font-size:20px;align-items:center;justify-content:center;display:flex;z-index:999995;position:absolute;right:.9375rem;top:.75rem;border:none}body.dark-theme   [_nghost-%COMP%]   .close-search[_ngcontent-%COMP%]{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .close-search[_ngcontent-%COMP%]{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .close-search[_ngcontent-%COMP%]{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .close-search[_ngcontent-%COMP%]{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   .close-search[_ngcontent-%COMP%]{color:#fff!important}body.dark-theme[_ngcontent-%COMP%]   .close-search[_ngcontent-%COMP%]{color:#fff!important}body.light   [_nghost-%COMP%]   .close-search[_ngcontent-%COMP%]{color:#142028!important}body.light[_ngcontent-%COMP%]   .close-search[_ngcontent-%COMP%]{color:#142028!important}.close-text[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:12px;color:#818ea3;border-radius:3.125rem;cursor:pointer;position:absolute;right:1.0625rem!important;top:50%!important;left:auto!important;transform:translateY(-50%)}body.dark-theme   [_nghost-%COMP%]   .close-text[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .close-text[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .close-text[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .close-text[_ngcontent-%COMP%]{color:#818ea3}.close-text[_ngcontent-%COMP%]:focus, .close-text[_ngcontent-%COMP%]:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   .close-text[_ngcontent-%COMP%]:focus, body.dark-theme   [_nghost-%COMP%]   .close-text[_ngcontent-%COMP%]:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .close-text[_ngcontent-%COMP%]:focus, body.dark-theme[_ngcontent-%COMP%]   .close-text[_ngcontent-%COMP%]:hover{color:#fff}body.light   [_nghost-%COMP%]   .close-text[_ngcontent-%COMP%]:focus, body.light   [_nghost-%COMP%]   .close-text[_ngcontent-%COMP%]:hover{color:#142028}body.light[_ngcontent-%COMP%]   .close-text[_ngcontent-%COMP%]:focus, body.light[_ngcontent-%COMP%]   .close-text[_ngcontent-%COMP%]:hover{color:#142028}.search-container[_ngcontent-%COMP%]{background-color:#e2e7ec;align-items:center;border-radius:.625rem;display:flex;height:2.25rem;padding:.4375rem 3.125rem .4375rem 1.75rem;position:relative;width:100%;z-index:9999;border:1px solid #c9cedc}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{background-color:#e2e7ec}.search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{color:#142028;background:transparent!important;border:transparent;outline:transparent;width:100%;padding-left:1.25rem}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{color:#142028}.search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]:focus{color:#142028}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]:focus{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]:focus{color:#fff}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]:focus{color:#142028}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]:focus{color:#142028}.loading[_ngcontent-%COMP%]{margin-top:-.625rem;height:3.75rem}.search-active[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .search-active[_ngcontent-%COMP%]{color:#fff!important}body.dark-theme[_ngcontent-%COMP%]   .search-active[_ngcontent-%COMP%]{color:#fff!important}body.light   [_nghost-%COMP%]   .search-active[_ngcontent-%COMP%]{color:#142028!important}body.light[_ngcontent-%COMP%]   .search-active[_ngcontent-%COMP%]{color:#142028!important}.search-active[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{background-color:#f4f5f6!important}.search-active[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{color:#142028!important}.ng-autocomplete-class[_ngcontent-%COMP%]     .input-container input{padding:.4375rem 2.1875rem .4375rem 1.75rem!important;font-size:13px!important;line-height:1.5!important;color:#495057;border-radius:3.125rem!important;font-weight:400!important;background-color:#23323c!important;background-color:#e2e7ec!important;will-change:border-color,box-shadow!important;box-shadow:none!important;transition:box-shadow .25s cubic-bezier(.27,.01,.38,1.06),border .25s cubic-bezier(.27,.01,.38,1.06);text-overflow:ellipsis;height:2.25rem!important}body.dark-theme   [_nghost-%COMP%]   .ng-autocomplete-class[_ngcontent-%COMP%]     .input-container input{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .ng-autocomplete-class[_ngcontent-%COMP%]     .input-container input{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .ng-autocomplete-class[_ngcontent-%COMP%]     .input-container input{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .ng-autocomplete-class[_ngcontent-%COMP%]     .input-container input{background-color:#e2e7ec!important}.ng-autocomplete-class[_ngcontent-%COMP%]     i.material-icons{font-size:inherit;position:relative;top:.3125rem}.search-icon[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;line-height:20px;position:absolute;z-index:999;left:0;top:0;width:2.3125rem;height:2.125rem;line-height:2.125rem;text-align:center;border-radius:.5625rem 0 0 .5625rem;background-color:#c9cedc!important;color:#818ea0!important;cursor:pointer}body.dark-theme   [_nghost-%COMP%]     .ng-autocomplete-class .input-container input{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ng-autocomplete-class .input-container input:disabled{background:rgba(6,6,6,.4509803922);border-color:#15192a!important}body.dark-theme   [_nghost-%COMP%]     .search-container{background-color:#23323c!important;border:1px solid #3a4956}body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-container .search-pairs{color:#818ea3}body.dark-theme   body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs{color:#818ea3}body.light   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-container .search-pairs{color:#818ea3}body.light   body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs{color:#818ea3}body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs:focus{color:#142028}body.dark-theme   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-container .search-pairs:focus{color:#fff}body.dark-theme   body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs:focus{color:#fff}body.light   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-container .search-pairs:focus{color:#142028}body.light   body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs:focus{color:#142028}body.dark-theme   [_nghost-%COMP%]     .search-active{color:#142028}body.dark-theme   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-active{color:#fff!important}body.dark-theme   body.dark-theme   [_nghost-%COMP%]     .search-active{color:#fff!important}body.light   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-active{color:#142028!important}body.light   body.dark-theme   [_nghost-%COMP%]     .search-active{color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .search-active .search-container{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .search-active .search-icon{color:#142028}body.dark-theme   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-active .search-icon{color:#fff!important}body.dark-theme   body.dark-theme   [_nghost-%COMP%]     .search-active .search-icon{color:#fff!important}body.light   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-active .search-icon{color:#142028!important}body.light   body.dark-theme   [_nghost-%COMP%]     .search-active .search-icon{color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .search-icon{background-color:#3a4956!important;color:#cacedb!important}app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-track{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-track{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-track{background-color:#23323c}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-track{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-track{background-color:#e2e7ec}app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{background-color:#f4f5f6;border-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{background-color:#142028}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{border-color:#23323c}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{border-color:#e2e7ec}app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-track{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-track{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-track{background-color:#23323c}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-track{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-track{background-color:#e2e7ec}app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{background-color:#f4f5f6;border-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{background-color:#142028}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{border-color:#23323c}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{border-color:#e2e7ec}app-pairs-search-results.filter-disabled[_ngcontent-%COMP%]     .search-results{top:1.375rem}@media (max-width: 1023px){.search-container[_ngcontent-%COMP%], .search-results[_ngcontent-%COMP%], .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}.search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%], .search-results[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%], .search-results-title[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{background-color:transparent!important;font-size:14px!important}.search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]::placeholder, .search-results[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]::placeholder, .search-results-title[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]::placeholder{font-size:14px!important}.results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#142028}body.light   [_nghost-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6}}.overlay-search[_ngcontent-%COMP%]{width:100%;height:100%;position:fixed;inset:0;background-color:#fff!important;opacity:.8;z-index:999995}body.dark-theme   [_nghost-%COMP%]   .overlay-search[_ngcontent-%COMP%]{background-color:#0b1217!important}body.dark-theme[_ngcontent-%COMP%]   .overlay-search[_ngcontent-%COMP%]{background-color:#0b1217!important}body.light   [_nghost-%COMP%]   .overlay-search[_ngcontent-%COMP%]{background-color:#fff!important}body.light[_ngcontent-%COMP%]   .overlay-search[_ngcontent-%COMP%]{background-color:#fff!important}@media (max-width: 1023px){.overlay-search[_ngcontent-%COMP%]{background-color:#f4f5f6!important;opacity:1}body.dark-theme   [_nghost-%COMP%]   .overlay-search[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .overlay-search[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   .overlay-search[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .overlay-search[_ngcontent-%COMP%]{background-color:#f4f5f6!important}}@media screen and (min-width: 1024px) and (max-width: 1100px){.search-global-container[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{width:18rem;flex:0 0 18rem}}@media screen and (min-width: 1101px) and (max-width: 1170px){.search-global-container[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{width:24rem;flex:0 0 24rem}}@media screen and (min-width: 1171px) and (max-width: 1300px){.search-global-container[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{width:28rem;flex:0 0 28rem}}@media screen and (min-width: 1301px) and (max-width: 1333px){.search-global-container[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{width:36rem;flex:0 0 36rem}}@media screen and (min-width: 1334px) and (max-width: 1439px){.search-global-container[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{width:38rem;flex:0 0 38rem}}@media screen and (min-width: 1440px){.search-global-container[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{width:50rem;flex:0 0 50rem}}.search-global-container.active[_ngcontent-%COMP%]{z-index:999996;width:100%;background-color:#f4f5f6!important;display:flex;justify-content:space-between;position:fixed;padding:0 .9375rem 2.5rem;left:0;right:0;height:100%}body.dark-theme   [_nghost-%COMP%]   .search-global-container.active[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .search-global-container.active[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   .search-global-container.active[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .search-global-container.active[_ngcontent-%COMP%]{background-color:#f4f5f6!important}@media screen and (min-width: 1320px){.search-global-container.active[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{width:50rem;flex:0 0 50rem}}@media screen and (max-width: 1319px){.search-global-container.active[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{width:77%!important;flex:0 0 77%!important;justify-content:flex-start}.search-global-container.active[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{max-width:600px}}@media screen and (max-width: 1023px){.search-global-container.active[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{width:100%!important;flex:0 0 100%!important;padding:0 2.5rem 2.5rem;justify-content:flex-start}.search-global-container.active[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{max-width:calc(100% - 40px)}}@media screen and (max-width: 850px){.search-global-container.active[_ngcontent-%COMP%]   .search-block[_ngcontent-%COMP%]{padding:0 0 2.5rem}}@media (min-width: 1024px){.search-global-container.active[_ngcontent-%COMP%]{top:0;left:0;right:0;height:15.625rem;padding:.75rem 4.0625rem 2.5rem 1.875rem}.search-global-container.active.full-height[_ngcontent-%COMP%]{height:100%}}@media (min-width: 1420px){.search-global-container.active[_ngcontent-%COMP%]{padding:.75rem 5.1875rem 2.5rem}}@media (max-width: 1023px){.search-global-container[_ngcontent-%COMP%]{z-index:999996}}.search-global-container[_ngcontent-%COMP%]   .filters-sponsors-container[_ngcontent-%COMP%]{flex:0 0 22%;display:flex;flex-flow:column;height:100%}@media (max-width: 1319px){.search-global-container[_ngcontent-%COMP%]   .chains-filter-column[_ngcontent-%COMP%]{flex:0 0 1;height:calc(100% - 90px)}}@media (min-width: 1320px){.search-global-container[_ngcontent-%COMP%]   .chains-filter-column[_ngcontent-%COMP%]{flex:1}}@media (min-width: 1440px){.search-global-container[_ngcontent-%COMP%]   .chains-filter-column[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}}.search-global-container[_ngcontent-%COMP%]   .sponsors-column[_ngcontent-%COMP%]{flex:1;margin-left:3.4375rem}@media (max-width: 1319px){.search-global-container[_ngcontent-%COMP%]   .sponsors-column[_ngcontent-%COMP%]{margin-left:0;margin-top:1.25rem}}.search-global-container[_ngcontent-%COMP%]   .not-found-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;font-size:16px;font-weight:500;margin-top:1.875rem;height:2.5rem;line-height:2.5rem;margin-bottom:-.625rem}.search-global-container[_ngcontent-%COMP%]   .not-found-container.filter-disabled[_ngcontent-%COMP%]{top:1.375rem}.search-global-container[_ngcontent-%COMP%]   .not-found-container[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{position:relative;height:2.5rem;width:6.25rem}@media (max-width: 1023px){.search-global-container[_ngcontent-%COMP%]   .trending-previous-container[_ngcontent-%COMP%]{display:flex;flex-flow:column;justify-content:space-between;height:100%}}@media (max-width: 768px){.search-global-container[_ngcontent-%COMP%]   .trending-previous-container[_ngcontent-%COMP%]   .trending-previous__mobile[_ngcontent-%COMP%]{display:flex;flex-flow:row}}"],
                data: {
                    animation: [(0,
                    g.X$)("toggleAnimation", [(0,
                    g.SB)("in", (0,
                    g.oB)({
                        opacity: 1
                    })), (0,
                    g.eR)(":enter", [(0,
                    g.oB)({
                        opacity: 0
                    }), (0,
                    g.jt)(500)]), (0,
                    g.eR)(":leave", (0,
                    g.jt)(200, (0,
                    g.oB)({
                        opacity: 0
                    })))])]
                },
                changeDetection: 0
            }),
            e
        }
        )()
    }
    ,
    88674: (B,w,a)=>{
        a.d(w, {
            z: ()=>s
        });
        var n = a(53763)
          , l = a(70262)
          , _ = a(54004)
          , S = a(39646)
          , f = a(94650);
        let s = (()=>{
            class b {
                constructor(u) {
                    this._apiService = u
                }
                getNativeAd(u) {
                    return this._apiService.getUrl(`https://request-global.czilladx.com/serve/native.php?z=${u}`).pipe((0,
                    l.K)(()=>this._getNativeAdProxy(u)), (0,
                    _.U)(k=>k ? k.ad : null), (0,
                    l.K)(()=>(0,
                    S.of)(null)))
                }
                submitImpression(u) {
                    return this._apiService.getUrl(u)
                }
                _getNativeAdProxy(u) {
                    return this._apiService.get("cf_proxy_url", `/native?z=${u}`)
                }
            }
            return b.\u0275fac = function(u) {
                return new (u || b)(f.LFG(n.sM))
            }
            ,
            b.\u0275prov = f.Yz7({
                token: b,
                factory: b.\u0275fac,
                providedIn: "root"
            }),
            b
        }
        )()
    }
}]);
