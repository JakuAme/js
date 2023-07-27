"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[7185, 2253, 4789], {
    74017: (b,u,c)=>{
        c.d(u, {
            J: ()=>V
        });
        var n = c(94650)
          , O = c(39300)
          , P = c(18505)
          , o = c(95698)
          , p = c(99703)
          , m = c(12113)
          , _ = c(52413)
          , f = c(27314)
          , h = c(33269)
          , g = c(89383)
          , M = c(92498)
          , l = c(92216)
          , d = c(36895)
          , C = c(53763);
        const v = function(e) {
            return {
                color: e
            }
        }
          , y = function(e) {
            return {
                background: e
            }
        };
        function H(e, s) {
            if (1 & e && (n.ynx(0),
            n.TgZ(1, "div", 2)(2, "a", 3),
            n._UZ(3, "img", 4),
            n.qZA(),
            n._uU(4),
            n.qZA(),
            n.TgZ(5, "div", 5)(6, "a", 6),
            n._UZ(7, "fa-icon", 7),
            n._uU(8),
            n.qZA()(),
            n.BQk()),
            2 & e) {
                const t = n.oxw();
                n.xp6(2),
                n.Q6J("href", t.presaleUrl, n.LSH),
                n.uIk("data-presale-click", t.name),
                n.xp6(1),
                n.Q6J("src", t.icon, n.LSH)("alt", t.name)("ngStyle", n.VKq(12, v, t.background)),
                n.xp6(1),
                n.hij("", t.name, " "),
                n.xp6(1),
                n.Q6J("ngStyle", n.VKq(14, y, t.getBackground())),
                n.xp6(1),
                n.ekj("custom-button", t.background),
                n.Q6J("href", t.presaleUrl, n.LSH),
                n.uIk("data-presale-click", t.name),
                n.xp6(2),
                n.hij(" ", t.buttonText ? t.buttonText : "Live Presale", " ")
            }
        }
        function T(e, s) {
            if (1 & e) {
                const t = n.EpF();
                n.ynx(0),
                n.TgZ(1, "div", 2)(2, "a", 8),
                n.NdJ("click", function(i) {
                    n.CHM(t);
                    const a = n.oxw();
                    return n.KtG(a.viewPresale(i))
                }),
                n._UZ(3, "img", 9),
                n.qZA(),
                n._uU(4),
                n.qZA(),
                n.TgZ(5, "div", 10)(6, "a", 11),
                n.NdJ("click", function(i) {
                    n.CHM(t);
                    const a = n.oxw();
                    return n.KtG(a.viewPresale(i))
                }),
                n._UZ(7, "fa-icon", 7),
                n._uU(8),
                n.qZA()(),
                n.BQk()
            }
            if (2 & e) {
                const t = n.oxw();
                n.xp6(2),
                n.hYB("href", "", t.context, "", t.presaleUrl, "", n.LSH),
                n.uIk("data-end-presale-click", t.name),
                n.xp6(1),
                n.Q6J("src", t.icon, n.LSH)("alt", t.name),
                n.xp6(1),
                n.hij("", t.name, " "),
                n.xp6(2),
                n.ekj("custom-button", t.background),
                n.hYB("href", "", t.context, "", t.presaleUrl, "", n.LSH),
                n.uIk("data-end-presale-click", t.name),
                n.xp6(2),
                n.hij(" ", t.buttonText ? t.buttonText : "Live Trading", " ")
            }
        }
        let w = (()=>{
            class e {
                constructor(t, r) {
                    this._environment = t,
                    this._routingService = r,
                    this.icon = "",
                    this.link = "",
                    this.background = "",
                    this.name = "",
                    this.buttonText = "",
                    this.isPresale = !0,
                    this.context = this._environment.app_scope
                }
                ngOnInit() {
                    this.presaleUrl = this.link ? this.link : "",
                    this.link?.includes(`swap/${h.$.PairExplorer}/0x`) ? this.isPresale = !1 : this.link?.trim().toLowerCase().startsWith("0x") && (this.isPresale = !1,
                    this.presaleUrl = `/${this.chain}/${h.$.PairExplorer}/` + this.link.trim().toLowerCase())
                }
                viewPresale(t) {
                    t.stopImmediatePropagation(),
                    t.ctrlKey || t.metaKey ? this._routingService.windowNavigate(`${this.presaleUrl}`, "_blank", "noopener") : this._routingService.navigate(this.presaleUrl)
                }
                getBackground() {
                    return `linear-gradient(to right, rgba(0, 0, 0, 0) 0%,${this.background} 1%,${this.background} 100%)`
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(n.Y36(C.qA),n.Y36(C.Zn))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-live-event"]],
                inputs: {
                    icon: "icon",
                    link: "link",
                    background: "background",
                    name: "name",
                    buttonText: "buttonText",
                    chain: "chain"
                },
                standalone: !0,
                features: [n.jDz],
                decls: 3,
                vars: 2,
                consts: [[1, "gold-project"], [4, "ngIf"], [1, "presale"], ["target", "_blank", "rel", "noopener", 1, "presale-button", 3, "href"], [1, "me-2", 3, "src", "alt", "ngStyle"], [1, "live", 3, "ngStyle"], ["target", "_blank", "rel", "noopener", 1, "ms-2", 3, "href"], ["icon", "circle", 1, "me-2", "point"], [1, "presale-button", 3, "href", "click"], [1, "me-2", "buy-color", 3, "src", "alt"], [1, "live"], [1, "ms-2", 3, "href", "click"]],
                template: function(t, r) {
                    1 & t && (n.TgZ(0, "h4", 0),
                    n.YNc(1, H, 9, 16, "ng-container", 1),
                    n.YNc(2, T, 9, 12, "ng-container", 1),
                    n.qZA()),
                    2 & t && (n.xp6(1),
                    n.Q6J("ngIf", r.isPresale),
                    n.xp6(1),
                    n.Q6J("ngIf", !r.isPresale))
                },
                dependencies: [d.O5, d.PC, l.uH, l.BN],
                styles: ['h4[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:14px;line-height:20px;margin:0}h4.gold-project[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center}h4.gold-project[_ngcontent-%COMP%] > .custom-button[_ngcontent-%COMP%]:hover{filter:brightness(85%)}h4.gold-project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.4375rem;height:1.4375rem;border-radius:1.25rem}@media (max-width: 768px){h4.gold-project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{animation:pulse 2s infinite}}h4.gold-project[_ngcontent-%COMP%]   .presale[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:9.1875rem;background-color:#e2e7ec;font-size:13px;font-weight:400;padding:.5rem 0 .5rem .5rem}body.dark-theme   [_nghost-%COMP%]   h4.gold-project[_ngcontent-%COMP%]   .presale[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   h4.gold-project[_ngcontent-%COMP%]   .presale[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   h4.gold-project[_ngcontent-%COMP%]   .presale[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   h4.gold-project[_ngcontent-%COMP%]   .presale[_ngcontent-%COMP%]{background-color:#e2e7ec}h4.gold-project[_ngcontent-%COMP%]   .presale[_ngcontent-%COMP%]:after{border-radius:3.125rem 0 0 3.125rem;z-index:1}@media (max-width: 768px){h4.gold-project[_ngcontent-%COMP%]   .presale[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:5.875rem;border-radius:0 3.125rem 3.125rem 0;padding:.5rem}}h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]{height:100%;position:relative;overflow:hidden;padding:.5rem .5rem .5rem 1.5rem;border-radius:0 3.125rem 3.125rem 0;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;white-space:nowrap;background:linear-gradient(to right,rgba(0,0,0,0) 0%,#17c671 1%,#17c671 100%);line-height:1.25rem;display:flex;align-items:center}h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]:before{content:" ";background-color:#e2e7ec;position:absolute;height:100%;width:100%;border-radius:0 3.125rem 3.125rem 0;left:0;transform:translate(-91%) scale(1.25)}body.dark-theme   [_nghost-%COMP%]   h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]:before{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]:before{background-color:#23323c}body.light   [_nghost-%COMP%]   h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]:before{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]:before{background-color:#e2e7ec}@media (min-width: 1023px){h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]:before{transform:translate(-92%) scale(1.25)}}@media (max-width: 768px){h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]{display:none}}h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]:hover{filter:brightness(.95)}h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f3f3f3;display:flex}h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}h4.gold-project[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]{font-size:.5rem}@keyframes _ngcontent-%COMP%_pulse{0%{box-shadow:0 0,0 0}70%{box-shadow:0 0 .125rem .125rem,0 0 .25rem .25rem}to{box-shadow:0 0,0 0}}'],
                changeDetection: 0
            }),
            e
        }
        )();
        var L = c(49319)
          , Z = c(30501)
          , S = c(62289);
        function A(e, s) {
            1 & e && (n.TgZ(0, "span"),
            n._uU(1),
            n.ALo(2, "translate"),
            n.qZA()),
            2 & e && (n.xp6(1),
            n.Oqu(n.lcZ(2, 1, "hot_pairs_header.hot_pairs")))
        }
        function U(e, s) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "a", 10),
                n.NdJ("click", function() {
                    return n.CHM(t),
                    n.oxw().openHotPairsModal(),
                    n.KtG(!1)
                }),
                n._UZ(1, "fa-icon", 11),
                n.qZA()
            }
        }
        function D(e, s) {
            1 & e && n.GkF(0)
        }
        function E(e, s) {
            if (1 & e && (n.TgZ(0, "app-marquee", 15),
            n.YNc(1, D, 1, 0, "ng-container", 16),
            n.qZA()),
            2 & e) {
                n.oxw();
                const t = n.MAs(3)
                  , r = n.oxw();
                n.Q6J("speed", r.isDextboard ? "dextboard" : "slow")("stopOnHover", "mobileTablet" !== r.mediaDevice),
                n.xp6(1),
                n.Q6J("ngTemplateOutlet", t)
            }
        }
        function I(e, s) {
            if (1 & e && (n.ynx(0),
            n._UZ(1, "img", 20),
            n.ALo(2, "chainLogoUrl"),
            n.BQk()),
            2 & e) {
                const t = n.oxw().$implicit
                  , r = n.oxw(3);
                n.xp6(1),
                n.Q6J("src", n.lcZ(2, 2, t.chain), n.LSH)("alt", r.chain + "-logo")
            }
        }
        function B(e, s) {
            if (1 & e && n._UZ(0, "fa-icon", 26),
            2 & e) {
                const t = n.oxw(2).$implicit;
                n.Gre("", t.move.color, " ms-1"),
                n.Q6J("icon", t.move.arrow)
            }
        }
        function j(e, s) {
            1 & e && (n.TgZ(0, "span", 27),
            n._uU(1),
            n.ALo(2, "translate"),
            n.qZA()),
            2 & e && (n.xp6(1),
            n.hij(" ", n.lcZ(2, 1, "hot_pairs_header.new"), " "))
        }
        const J = function(e, s) {
            return {
                standard: e,
                premium: s
            }
        };
        function $(e, s) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "a", 21),
                n.NdJ("click", function() {
                    return n.CHM(t),
                    n.oxw(4).openHotPairsModal(),
                    n.KtG(!1)
                }),
                n.TgZ(1, "span", 22),
                n._uU(2),
                n.qZA(),
                n.YNc(3, B, 1, 4, "fa-icon", 23),
                n.TgZ(4, "span"),
                n._uU(5),
                n.ALo(6, "appSafe"),
                n.qZA(),
                n.TgZ(7, "img", 24),
                n.ALo(8, "exchangeLogoStyles"),
                n.ALo(9, "exchangeLogoUrl"),
                n.ALo(10, "exchangeName"),
                n.qZA(),
                n.YNc(11, j, 3, 3, "span", 25),
                n.qZA()
            }
            if (2 & e) {
                const t = n.oxw()
                  , r = t.index
                  , i = t.$implicit
                  , a = n.oxw(3);
                n.Q6J("ngClass", n.WLB(20, J, r > 10 && r < 12, r > 11)),
                n.xp6(2),
                n.hij("#", r + 1, ""),
                n.xp6(1),
                n.Q6J("ngIf", i.move),
                n.xp6(2),
                n.Oqu(n.lcZ(6, 9, i.symbol)),
                n.xp6(2),
                n.Akn(n.xi3(8, 11, i.exchange, a.isDextboard ? i.chain : a.chain)),
                n.MGl("alt", "", n.xi3(10, 17, i.exchange, a.isDextboard ? i.chain : a.chain), "-logo"),
                n.Q6J("src", n.xi3(9, 14, i.exchange, a.isDextboard ? i.chain : a.chain), n.LSH),
                n.xp6(4),
                n.Q6J("ngIf", i.new)
            }
        }
        function Q(e, s) {
            if (1 & e && n._UZ(0, "fa-icon", 26),
            2 & e) {
                const t = n.oxw(2).$implicit;
                n.Gre("", t.move.color, " ms-1"),
                n.Q6J("icon", t.move.arrow)
            }
        }
        function N(e, s) {
            1 & e && (n.TgZ(0, "span", 27),
            n._uU(1),
            n.ALo(2, "translate"),
            n.qZA()),
            2 & e && (n.xp6(1),
            n.hij(" ", n.lcZ(2, 1, "hot_pairs_header.new"), " "))
        }
        const q = function(e) {
            return {
                first: e
            }
        };
        function Y(e, s) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "a", 28),
                n.NdJ("click", function(i) {
                    n.CHM(t);
                    const a = n.oxw().$implicit;
                    return n.oxw(3).viewPair(a, i, a.chain),
                    n.KtG(!1)
                }),
                n.TgZ(1, "span"),
                n._uU(2),
                n.qZA(),
                n.YNc(3, Q, 1, 4, "fa-icon", 23),
                n._uU(4),
                n.ALo(5, "appSafe"),
                n.TgZ(6, "img", 24),
                n.ALo(7, "exchangeLogoStyles"),
                n.ALo(8, "exchangeLogoUrl"),
                n.ALo(9, "exchangeName"),
                n.qZA(),
                n.YNc(10, N, 3, 3, "span", 25),
                n.qZA()
            }
            if (2 & e) {
                const t = n.oxw()
                  , r = t.index
                  , i = t.$implicit
                  , a = n.oxw(3);
                n.MT6("", a.isDextboard && r % 3 == 0 ? "ms-1" : "ms-3", " py-2 hot-pair ", a.isDextboard && r % 3 == 0 ? i.chain + "-color" : "", ""),
                n.Q6J("ngClass", n.VKq(30, q, 0 === r && !a.isDextboard))("href", a.getHrefUrl(i), n.LSH),
                n.uIk("data-hot-pair", a.exchange + "- HOT - " + i.symbol)("data-hot-pair-number", r),
                n.xp6(1),
                n.Tol(a.isDextboard && r % 3 == 0 ? i.chain + "-color" : ""),
                n.xp6(1),
                n.hij("#", a.isDextboard ? a.getHotNumber(r) : r + 1, ""),
                n.xp6(1),
                n.Q6J("ngIf", i.move),
                n.xp6(1),
                n.hij(" ", n.lcZ(5, 19, i.symbol), " "),
                n.xp6(2),
                n.Akn(n.xi3(7, 21, i.exchange, a.isDextboard ? i.chain : a.chain)),
                n.MGl("alt", "", n.xi3(9, 27, i.exchange, a.isDextboard ? i.chain : a.chain), "-logo"),
                n.Q6J("src", n.xi3(8, 24, i.exchange, a.isDextboard ? i.chain : a.chain), n.LSH),
                n.xp6(4),
                n.Q6J("ngIf", i.new)
            }
        }
        function W(e, s) {
            if (1 & e && (n.TgZ(0, "li"),
            n.YNc(1, I, 3, 4, "ng-container", 4),
            n.YNc(2, $, 12, 23, "a", 18),
            n.YNc(3, Y, 11, 32, "a", 19),
            n.qZA()),
            2 & e) {
                const t = s.$implicit
                  , r = s.index
                  , i = n.oxw(3);
                n.Tol(i.isDextboard && (r + 1) % 3 == 0 ? "last-item-chain" : ""),
                n.xp6(1),
                n.Q6J("ngIf", i.isDextboard && r % 3 == 0),
                n.xp6(1),
                n.Q6J("ngIf", "???" === t.symbol),
                n.xp6(1),
                n.Q6J("ngIf", "???" !== t.symbol)
            }
        }
        function R(e, s) {
            if (1 & e && n.YNc(0, W, 4, 6, "li", 17),
            2 & e) {
                const t = n.oxw(2);
                n.Q6J("ngForOf", t.filteredHots)("ngForTrackBy", t.trackByHotPair)
            }
        }
        function K(e, s) {
            if (1 & e && (n.TgZ(0, "ul", 12),
            n.YNc(1, E, 2, 3, "app-marquee", 13),
            n.YNc(2, R, 1, 2, "ng-template", null, 14, n.W1O),
            n.qZA()),
            2 & e) {
                const t = n.MAs(3)
                  , r = n.oxw();
                n.xp6(1),
                n.Q6J("ngIf", !r.stopHotMovement || r.screenWidth <= 768)("ngIfElse", t)
            }
        }
        function z(e, s) {
            if (1 & e && n._UZ(0, "app-live-event", 29),
            2 & e) {
                const t = n.oxw();
                n.Q6J("icon", t.buttonSponsor.logo)("link", t.buttonSponsor.pair ? t.buttonSponsor.pair : t.buttonSponsor.targetLink)("name", t.buttonSponsor.symbol)("background", t.buttonSponsor.color)("buttonText", t.buttonText)("chain", t.chain)
            }
        }
        function F(e, s) {
            if (1 & e && (n.TgZ(0, "div", 30)(1, "span"),
            n._uU(2),
            n.ALo(3, "translate"),
            n.qZA(),
            n.TgZ(4, "span", 31),
            n._uU(5),
            n.ALo(6, "translate"),
            n.qZA(),
            n.TgZ(7, "span"),
            n._uU(8),
            n.ALo(9, "translate"),
            n.qZA()()),
            2 & e) {
                const t = n.oxw();
                n.xp6(2),
                n.AsE(" Low: ", t.safeGasPriceHead, " ", n.lcZ(3, 6, "hot_pairs_header.gas"), ""),
                n.xp6(3),
                n.AsE(" Medium: ", t.gasPriceHead, " ", n.lcZ(6, 8, "hot_pairs_header.gas"), ""),
                n.xp6(3),
                n.AsE(" Fast: ", t.fastGasPriceHead, " ", n.lcZ(9, 10, "hot_pairs_header.gas"), "")
            }
        }
        const G = function(e, s) {
            return {
                "no-sponsor": e,
                "stop-movement": s
            }
        };
        let V = (()=>{
            class e extends _.K9 {
                set initCharge(t) {
                    this._initCharge = t,
                    this._initCharge && (this._oldHots = {})
                }
                get initCharge() {
                    return this._initCharge
                }
                onScroll() {
                    this.showMenuButton = !0,
                    this.timeoutButton && clearTimeout(this.timeoutButton),
                    this.timeoutButton = setTimeout(()=>this.showMenuButton = !1, 2e3)
                }
                onResize() {
                    this.screenWidth = window.innerWidth
                }
                constructor(t, r, i, a, k, X, nn, tn, on) {
                    super(),
                    this._exchangeService = t,
                    this._hotPairsService = r,
                    this._modalService = i,
                    this._sponsorService = a,
                    this._cdRef = k,
                    this._breakpointObserver = X,
                    this._settingsService = nn,
                    this._environment = tn,
                    this._routingService = on,
                    this.isDextboard = !1,
                    this._maxHotPairs = 10,
                    this._initCharge = !0,
                    this.pairSelected = new n.vpe,
                    this.screenWidth = window.innerWidth,
                    this.ChainPage = h.$,
                    this.safeGasPriceHead = "",
                    this.gasPriceHead = "",
                    this.fastGasPriceHead = "",
                    this.hots = [],
                    this.filteredHots = [],
                    this.buttonSponsor = null,
                    this.showMenuButton = !0,
                    this.isPresale = !0,
                    this.buttonText = "",
                    this.context = this._environment.app_scope,
                    this._oldHots = {},
                    this.showMarquee = !1,
                    this.mediaDevice = ""
                }
                onDestroy() {}
                ngOnInit() {
                    this._breakpointObserver.observe([m.K5, m.mT]).pipe((0,
                    _.sL)(this)).subscribe(t=>{
                        this.mediaDevice = t.breakpoints[m.K5] ? "mobileTablet" : "desktop",
                        this._cdRef.detectChanges()
                    }
                    ),
                    this.exchange = this._exchangeService.exchange,
                    this.chain = this._exchangeService.chain ?? p.qop.Ethereum,
                    this._exchangeService.exchange$.pipe((0,
                    _.sL)(this), (0,
                    O.h)(t=>this.exchange !== t), (0,
                    P.b)(t=>{
                        this.exchange = t,
                        this._cdRef.detectChanges()
                    }
                    )).subscribe(),
                    this.timeoutButton = setTimeout(()=>this.showMenuButton = !1, 2e3),
                    this._settingsService.getConfigChanged$("hot_movement").pipe((0,
                    _.sL)(this)).subscribe(t=>{
                        this.stopHotMovement = t,
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._sponsorService.getBanners(!1, !1, "button").pipe((0,
                    _.sL)(this), (0,
                    o.q)(1), (0,
                    P.b)(t=>{
                        this.buttonSponsor = this._sponsorService.fillSocialLinks([...t], this.chain)[0],
                        this.buttonSponsor && (this.buttonSponsor = this._sponsorService.replaceSponsorSuffix(this.buttonSponsor)),
                        this.buttonSponsor?.pair ? (this.buttonPairUrl = this.buttonSponsor.pair.includes(`${h.$.PairExplorer}/`) ? this.buttonSponsor.pair : `/ether/${h.$.PairExplorer}/` + this.buttonSponsor.pair,
                        this.isPresale = !1) : this.buttonSponsor?.targetLink && this.buttonSponsor?.targetLink.includes(`swap/${h.$.PairExplorer}/0x`) && (this.buttonPairUrl = `${this.buttonSponsor.targetLink}`,
                        this.isPresale = !1),
                        this.buttonSponsor?.links?.discord.includes("discord") || (this.buttonText = this.buttonSponsor?.links?.discord ?? ""),
                        this._cdRef.detectChanges()
                    }
                    )).subscribe(),
                    this._getHotPairs()
                }
                openHotPairsModal() {
                    this._modalService.open(f.Q, {
                        centered: !0,
                        scrollable: !0
                    })
                }
                get refTokenSymbol() {
                    return p.CXF.getRefTokenSymbol(this.chain)
                }
                viewPair(t, r, i) {
                    r.ctrlKey || r.metaKey ? this._routingService.windowNavigate(`/${this.isDextboard ? i : this.chain}/${h.$.PairExplorer}/${t.id}`, "_blank", "noopener") : this.pairSelected.emit({
                        pair: t
                    })
                }
                _getHotPairs() {
                    this._maxHotPairs = this._hotPairsService.maxHotPairs,
                    this.isDextboard ? this._hotPairsService.hotPairsAllChains$.pipe((0,
                    _.sL)(this)).subscribe(t=>{
                        this._manageHots(t)
                    }
                    ) : this._hotPairsService.hotPairsByChain$.pipe((0,
                    _.sL)(this)).subscribe(t=>{
                        this._manageHots(t)
                    }
                    )
                }
                trackByHotPair(t, r) {
                    return r._id
                }
                getHotNumber(t) {
                    return Math.round(t % 3 + 1)
                }
                getHrefUrl(t) {
                    return this._routingService.setLanguageToURL(`/${this.isDextboard ? t.chain : this.chain}/${h.$.PairExplorer}/${t.id}`)
                }
                _manageHots(t) {
                    if (0 === t.length)
                        return this.showMarquee = !0,
                        void this._cdRef.detectChanges();
                    this.hots = this._hotPairsService.formatHotPairs(t, this.chain, this.initCharge, this._oldHots, this.isDextboard);
                    const r = this.isDextboard ? this.hots : this.hots.filter(i=>this.chain === i.chain).slice(0, 15);
                    this.filteredHots = this.isDextboard ? r : this._hotPairsService.filterHotPairs(r, this._maxHotPairs, !1),
                    this.showMarquee = !0,
                    this._cdRef.detectChanges()
                }
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(n.Y36(p.OqV),n.Y36(p.S88),n.Y36(L.FF),n.Y36(Z.D),n.Y36(n.sBO),n.Y36(S.Yg),n.Y36(C.gb),n.Y36(C.qA),n.Y36(C.Zn))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-hot-pairs-header"]],
                hostBindings: function(t, r) {
                    1 & t && n.NdJ("scroll", function(a) {
                        return r.onScroll(a)
                    }, !1, n.Jf7)("resize", function() {
                        return r.onResize()
                    }, !1, n.Jf7)
                },
                inputs: {
                    initCharge: "initCharge",
                    isDextboard: "isDextboard"
                },
                outputs: {
                    pairSelected: "pairSelected"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 11,
                vars: 8,
                consts: [[1, "header-hot-pairs"], [1, "left-container"], [1, "hot-pair"], ["icon", "fire-flame-curved", 1, "me-1"], [4, "ngIf"], ["href", "#", "class", "hots-info ms-1", 3, "click", 4, "ngIf"], [1, "hot-pairs-container", 3, "ngClass"], ["class", "hot-pairs p0 m0", 4, "ngIf"], [3, "icon", "link", "name", "background", "buttonText", "chain", 4, "ngIf"], ["gasTemplate", ""], ["href", "#", 1, "hots-info", "ms-1", 3, "click"], ["icon", "question-circle"], [1, "hot-pairs", "p0", "m0"], [3, "speed", "stopOnHover", 4, "ngIf", "ngIfElse"], ["hotPairs", ""], [3, "speed", "stopOnHover"], [4, "ngTemplateOutlet"], [3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ms-3 py-2 hot-pair", "href", "javascript:", 3, "ngClass", "click", 4, "ngIf"], ["rel", "nofollow", 3, "class", "ngClass", "href", "click", 4, "ngIf"], ["loading", "lazy", 1, "chain-logo", 3, "src", "alt"], ["href", "javascript:", 1, "ms-3", "py-2", "hot-pair", 3, "ngClass", "click"], [1, "me-1"], [3, "class", "icon", 4, "ngIf"], ["loading", "lazy", 1, "hot-exchange", 3, "src", "alt"], ["class", "badge bg-success me-1 align-middle", 4, "ngIf"], [3, "icon"], [1, "badge", "bg-success", "me-1", "align-middle"], ["rel", "nofollow", 3, "ngClass", "href", "click"], [3, "icon", "link", "name", "background", "buttonText", "chain"], [1, "gas-tooltip"], [1, "my-2"]],
                template: function(t, r) {
                    1 & t && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "h4", 2),
                    n._UZ(3, "fa-icon", 3),
                    n.YNc(4, A, 3, 3, "span", 4),
                    n.YNc(5, U, 2, 0, "a", 5),
                    n.qZA()(),
                    n.TgZ(6, "div", 6),
                    n.YNc(7, K, 4, 2, "ul", 7),
                    n.qZA(),
                    n.YNc(8, z, 1, 6, "app-live-event", 8),
                    n.qZA(),
                    n.YNc(9, F, 10, 12, "ng-template", null, 9, n.W1O)),
                    2 & t && (n.xp6(4),
                    n.Q6J("ngIf", "desktop" === r.mediaDevice),
                    n.xp6(1),
                    n.Q6J("ngIf", "desktop" === r.mediaDevice),
                    n.xp6(1),
                    n.Q6J("ngClass", n.WLB(5, G, !r.buttonSponsor || !r.buttonSponsor.disabled, !!r.stopHotMovement && r.screenWidth > 756 && (r.screenWidth < 1650 || r.filteredHots.length > 15))),
                    n.xp6(1),
                    n.Q6J("ngIf", r.showMarquee),
                    n.xp6(1),
                    n.Q6J("ngIf", !(!r.buttonSponsor || null != r.buttonSponsor && r.buttonSponsor.disabled)))
                },
                dependencies: [l.uH, l.BN, d.O5, d.mk, m.jT, d.tP, d.ax, w, M.yl, g.aw, g.X$, p.eV1, p.Wu7, p.P5T, p.$a1],
                styles: ['.header-hot-pairs[_ngcontent-%COMP%]{display:flex;background-color:#e2e7ec;border-radius:3.125rem;margin:.625rem;min-height:2.4375rem}body.dark-theme   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]{background-color:#e2e7ec}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs[_ngcontent-%COMP%]{background-color:#f4f5f6;border-radius:0 3.125rem 3.125rem 0}body.dark-theme   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs[_ngcontent-%COMP%]{background-color:#f4f5f6}.header-hot-pairs[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 .5rem 0 0;border-radius:3.125rem 0 0 3.125rem;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]{background-color:#f4f5f6}.header-hot-pairs[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;color:#818ea3;margin:0 0 0 .8125rem}.header-hot-pairs[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .hots-info[_ngcontent-%COMP%]{color:inherit}.header-hot-pairs[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .hot-pair[_ngcontent-%COMP%]{font-size:13px;color:#818ea3}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]{background-color:#f4f5f6;border-radius:0 3.125rem 3.125rem 0;flex:2;width:calc(100% - 570px);display:inline-block;vertical-align:middle;list-style:none;white-space:nowrap;overflow:hidden;position:relative}body.dark-theme   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]{background-color:#f4f5f6}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container.no-sponsor[_ngcontent-%COMP%]{width:calc(100% - 370px)}@media (max-width: 767.98px){.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]{width:calc(100% - 130px)!important}}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:100%;font-size:13px}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul.stop-movement[_ngcontent-%COMP%]:after{display:flex;content:"...";position:absolute;right:0;top:0;bottom:0;height:100%;vertical-align:middle;background-image:linear-gradient(90deg,rgba(255,255,255,0) 0%,#f4f5f6 40%);padding-left:1.25rem;align-content:center;align-items:center;padding-right:.9375rem}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none;display:inline-block;color:#142028;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#142028}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%]{color:#142028}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.first[_ngcontent-%COMP%]{font-weight:500;font-size:14px;color:#f8b60f}body.dark-theme   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.first[_ngcontent-%COMP%]{color:#f8b60f!important}body.dark-theme[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.first[_ngcontent-%COMP%]{color:#f8b60f!important}body.light   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.first[_ngcontent-%COMP%]{color:#f8b60f!important}body.light[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.first[_ngcontent-%COMP%]{color:#f8b60f!important}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.first[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f8b60f}body.dark-theme   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.first[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f8b60f}body.dark-theme[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.first[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f8b60f}body.light   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.first[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f8b60f}body.light[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.first[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f8b60f}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.standard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){color:#818ea3;filter:brightness(.85)}body.dark-theme   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.standard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.standard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){color:#818ea3}body.light   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.standard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){color:#818ea3}body.light[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.standard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){color:#818ea3}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.standard[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{filter:brightness(.85)}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.premium[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){color:#f8b60f;filter:brightness(.85)}body.dark-theme   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.premium[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){color:#f8b60f}body.dark-theme[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.premium[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){color:#f8b60f}body.light   [_nghost-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.premium[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){color:#f8b60f}body.light[_ngcontent-%COMP%]   .header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.premium[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){color:#f8b60f}.header-hot-pairs[_ngcontent-%COMP%]   .hot-pairs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.premium[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{filter:brightness(.85)}.header-hot-pairs[_ngcontent-%COMP%]   .token-news[_ngcontent-%COMP%]{width:5.625rem}.gas-tooltip[_ngcontent-%COMP%]{align-items:flex-start;display:flex;flex-direction:column}.link-icon[_ngcontent-%COMP%]{display:none}.hot-exchange[_ngcontent-%COMP%]{background:#fff;border-radius:50%;height:.8125rem;margin-bottom:.125rem;width:.8125rem;padding:.0625rem}.chain-logo[_ngcontent-%COMP%]{border-radius:50%;height:1.125rem;width:1.125rem}.last-item-chain[_ngcontent-%COMP%]{margin-right:1.5rem}.ether-color[_ngcontent-%COMP%]{color:#6c89ff!important}.bnb-color[_ngcontent-%COMP%]{color:#efb90a!important}.polygon-color[_ngcontent-%COMP%]{color:#8247e5!important}.fantom-color[_ngcontent-%COMP%]{color:#1969ff!important}.cronos-color[_ngcontent-%COMP%]{color:#1199fa!important}.avalanche-color[_ngcontent-%COMP%]{color:#e74042!important}.oasis-color[_ngcontent-%COMP%]{color:#0092f6!important}.velas-color[_ngcontent-%COMP%]{color:#0037c1!important}.metis-color[_ngcontent-%COMP%]{color:#2adacc!important}.kucoin-color[_ngcontent-%COMP%]{color:#31d7a0!important}.optimism-color[_ngcontent-%COMP%]{color:#ff0420!important}.arbitrum-color[_ngcontent-%COMP%]{color:#28a0f0!important}.celo-color[_ngcontent-%COMP%]{color:#35d07f!important}.telos-color[_ngcontent-%COMP%]{color:#cbcaf9!important}.aurora-color[_ngcontent-%COMP%]{color:#6ee4e5!important}.moonbeam-color[_ngcontent-%COMP%]{color:#ea5aa2!important}.moonriver-color[_ngcontent-%COMP%]{color:#f2a007!important}.harmony-color[_ngcontent-%COMP%]{color:#3ad8d1!important}.astar-color[_ngcontent-%COMP%]{color:#1b6dc1!important}.fuse-color[_ngcontent-%COMP%]{color:#b3ffbb!important}.iotex-color[_ngcontent-%COMP%]{color:#44ffb2!important}.okc-color[_ngcontent-%COMP%]{color:#205fec!important}@media (max-width: 768px){.link-icon[_ngcontent-%COMP%]{align-items:center;animation:_ngcontent-%COMP%_pulse 2s infinite;border-radius:50%;box-shadow:0 0;cursor:pointer;display:none;justify-content:center;left:.625rem;position:fixed;top:.625rem;transform:scale(1);z-index:999}.link-icon.visible[_ngcontent-%COMP%], .link-icon[_ngcontent-%COMP%]:hover{display:flex;transition:display .275s ease-in-out}.link-icon[_ngcontent-%COMP%]   .small-icon[_ngcontent-%COMP%]{border-radius:1.5625rem;height:3.125rem;width:3.125rem}}@keyframes _ngcontent-%COMP%_pulse{0%{box-shadow:0 0,0 0}70%{box-shadow:0 0 .125rem .125rem,0 0 .25rem .25rem}to{box-shadow:0 0,0 0}}body.dark-theme   [_nghost-%COMP%]     .header-hot-pairs .left-container h4{color:#cacedb!important}body.dark-theme   [_nghost-%COMP%]     .header-hot-pairs .left-container .hot-pair{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .header-hot-pairs hot-pairs-container.stop-movement:after{background-image:linear-gradient(90deg,rgba(255,255,255,0) 0%,#142028 40%)}'],
                changeDetection: 0
            }),
            e
        }
        )()
    }
    ,
    92253: (b,u,c)=>{
        c.d(u, {
            T: ()=>h
        });
        var n = c(99703)
          , O = c(92498)
          , P = c(36895)
          , o = c(94650);
        const p = function(g) {
            return {
                "token-logo__letter--with-border": g
            }
        };
        function m(g, M) {
            if (1 & g && (o.TgZ(0, "span", 3),
            o._uU(1),
            o.ALo(2, "appSafe"),
            o.qZA()),
            2 & g) {
                const l = o.oxw();
                o.Q6J("ngClass", o.VKq(4, p, l.hasBorder)),
                o.xp6(1),
                o.hij(" ", o.lcZ(2, 2, l.tokenSymbol()), " ")
            }
        }
        const _ = function(g) {
            return {
                "token-logo__image--white-bg": g
            }
        };
        function f(g, M) {
            if (1 & g) {
                const l = o.EpF();
                o.TgZ(0, "img", 4),
                o.NdJ("error", function() {
                    o.CHM(l);
                    const C = o.oxw();
                    return o.KtG(C.onImageError())
                }),
                o.qZA()
            }
            if (2 & g) {
                const l = o.oxw();
                o.Q6J("ngClass", o.VKq(3, _, l.hasWhiteBackground))("src", l.tokenLogo, o.LSH)("alt", l.symbol)
            }
        }
        let h = (()=>{
            class g {
                constructor(l, d) {
                    this._tokenLogosService = l,
                    this._cdRef = d,
                    this.hasWhiteBackground = !1,
                    this.hasBorder = !1,
                    this.fetchLogoFromRemote = !1
                }
                ngOnChanges() {
                    !this.logoUrl && this.fetchLogoFromRemote && this.chain !== n.qop.Aptos ? this._getSavedLogo() : this.tokenLogo = this.logoUrl ?? null
                }
                onImageError() {
                    this.logoUrl = void 0,
                    this._getSavedLogo()
                }
                tokenSymbol() {
                    return n.i6H.getFirstValidCharacter(this.symbol, this.name)
                }
                _getSavedLogo() {
                    this.chain && this.address && n.CXF.isValidChain(this.chain) ? this._tokenLogosService.fetchLogo(this.chain, this.address).subscribe(l=>{
                        this.tokenLogo = l,
                        this._cdRef.detectChanges()
                    }
                    ) : console.warn("TokenLogo: invalid chain and/or address", `${this.chain}-${this.address}`)
                }
            }
            return g.\u0275fac = function(l) {
                return new (l || g)(o.Y36(n.wUe),o.Y36(o.sBO))
            }
            ,
            g.\u0275cmp = o.Xpm({
                type: g,
                selectors: [["app-token-logo"]],
                inputs: {
                    symbol: "symbol",
                    name: "name",
                    chain: "chain",
                    address: "address",
                    logoUrl: "logoUrl",
                    hasWhiteBackground: "hasWhiteBackground",
                    hasBorder: "hasBorder",
                    fetchLogoFromRemote: "fetchLogoFromRemote"
                },
                standalone: !0,
                features: [o.TTD, o.jDz],
                decls: 4,
                vars: 2,
                consts: [[1, "token-logo"], ["class", "token-logo__letter", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["logoImage", ""], [1, "token-logo__letter", 3, "ngClass"], ["loading", "lazy", 1, "token-logo__image", 3, "ngClass", "src", "alt", "error"]],
                template: function(l, d) {
                    if (1 & l && (o.TgZ(0, "div", 0),
                    o.YNc(1, m, 3, 6, "span", 1),
                    o.YNc(2, f, 1, 5, "ng-template", null, 2, o.W1O),
                    o.qZA()),
                    2 & l) {
                        const C = o.MAs(3);
                        o.xp6(1),
                        o.Q6J("ngIf", !d.logoUrl && !d.tokenLogo)("ngIfElse", C)
                    }
                },
                dependencies: [P.O5, P.mk, O.yl],
                styles: [".token-logo[_ngcontent-%COMP%]{flex-wrap:nowrap;gap:.125rem;line-height:1;width:100%;height:100%;display:flex;justify-content:center;align-items:center;color:#142028;text-decoration-color:#00b8d8;position:relative;border-radius:50%;overflow:hidden}body.dark-theme   [_nghost-%COMP%]   .token-logo[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .token-logo[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .token-logo[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .token-logo[_ngcontent-%COMP%]{color:#142028}.token-logo__letter[_ngcontent-%COMP%]{color:#fff;background-color:#23323c;text-align:center;font-size:12px;display:flex;justify-content:center;align-items:center;text-decoration:none;text-transform:uppercase;position:absolute;bottom:0;top:0;width:calc(100% + .0625rem)}.token-logo__letter--with-border[_ngcontent-%COMP%]{border:solid 1px #818ea3;border-radius:50%}.token-logo__image[_ngcontent-%COMP%]{width:100%;height:100%}.token-logo__image--white-bg[_ngcontent-%COMP%]{background-color:#fff}"],
                changeDetection: 0
            }),
            g
        }
        )()
    }
    ,
    27314: (b,u,c)=>{
        c.d(u, {
            Q: ()=>m
        });
        var n = c(49319)
          , O = c(89383)
          , P = c(92216)
          , o = c(94650);
        const p = function() {
            return ["fal", "times"]
        };
        let m = (()=>{
            class _ {
                constructor(h) {
                    this.modal = h
                }
            }
            return _.\u0275fac = function(h) {
                return new (h || _)(o.Y36(n.Kz))
            }
            ,
            _.\u0275cmp = o.Xpm({
                type: _,
                selectors: [["app-hot-pairs-warning-modal"]],
                standalone: !0,
                features: [o.jDz],
                decls: 20,
                vars: 17,
                consts: [[1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], [1, "modal-body", "text-center"], ["src", "assets/img/logo/dextools_logo_header_35.png", "alt", "dextools logo", "width", "35", 1, "mb-3"], [1, "m-0", "text-start"], [1, "mt-2", "text-start"], [1, "modal-footer"]],
                template: function(h, g) {
                    1 & h && (o.TgZ(0, "div", 0)(1, "button", 1),
                    o.NdJ("click", function() {
                        return g.modal.close("Close click")
                    }),
                    o._UZ(2, "fa-icon", 2),
                    o.ALo(3, "translate"),
                    o.qZA()(),
                    o.TgZ(4, "div", 3),
                    o._UZ(5, "img", 4),
                    o.TgZ(6, "p", 5),
                    o._uU(7),
                    o.ALo(8, "translate"),
                    o.qZA(),
                    o.TgZ(9, "ul", 6)(10, "li"),
                    o._uU(11),
                    o.ALo(12, "translate"),
                    o.qZA(),
                    o.TgZ(13, "li"),
                    o._uU(14),
                    o.ALo(15, "translate"),
                    o.qZA(),
                    o.TgZ(16, "li"),
                    o._uU(17),
                    o.ALo(18, "translate"),
                    o.qZA()()(),
                    o._UZ(19, "div", 7)),
                    2 & h && (o.xp6(2),
                    o.Q6J("icon", o.DdM(16, p))("ngbTooltip", o.lcZ(3, 6, "home.close")),
                    o.xp6(5),
                    o.Oqu(o.lcZ(8, 8, "hot_pairs_header.hots_warning")),
                    o.xp6(4),
                    o.Oqu(o.lcZ(12, 10, "hot_pairs_header.host_plans_free")),
                    o.xp6(3),
                    o.Oqu(o.lcZ(15, 12, "hot_pairs_header.host_plans_standard")),
                    o.xp6(3),
                    o.Oqu(o.lcZ(18, 14, "hot_pairs_header.host_plans_premium")))
                },
                dependencies: [P.uH, P.BN, n._L, O.aw, O.X$],
                encapsulation: 2,
                changeDetection: 0
            }),
            _
        }
        )()
    }
}]);
