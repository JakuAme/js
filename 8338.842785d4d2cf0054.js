"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[8338], {
    88338: (Q,T,l)=>{
        l.r(T),
        l.d(T, {
            FavoritesListComponent: ()=>be
        });
        var t = l(94650)
          , k = l(77579)
          , m = l(61135)
          , Z = l(35684)
          , I = l(7331)
          , w = l(82805)
          , L = l(60515)
          , h = l(18505)
          , g = l(95698)
          , p = l(63900)
          , _ = l(39646)
          , P = l(54968)
          , b = l(54004)
          , et = l(82722)
          , H = l(39300)
          , nt = l(17414)
          , N = l(70262)
          , ot = l(71884)
          , at = l(4128)
          , it = l(39841)
          , D = l(4326)
          , f = l(52413)
          , y = l(53763)
          , M = l(12113)
          , r = l(99703)
          , Y = l(65535)
          , rt = l(28746)
          , R = l(62289)
          , O = l(33269)
          , S = l(89383)
          , F = l(92498)
          , j = l(98085)
          , E = l(49319)
          , B = l(77575)
          , G = l(51303)
          , q = l(92253)
          , A = l(92216)
          , v = l(36895);
        function ct(a, c) {
            1 & a && t._UZ(0, "fa-icon", 19)
        }
        function st(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "a", 20),
                t.NdJ("click", function(o) {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.viewFavoritePair(o, i.favorite.pair, i.chain, "price-alerts"))
                })("mouseenter", function() {
                    t.CHM(e);
                    const o = t.oxw();
                    return t.KtG(o.setHoverFalse())
                })("mouseleave", function() {
                    t.CHM(e);
                    const o = t.oxw();
                    return t.KtG(o.setHoverTrue())
                }),
                t._UZ(1, "fa-icon", 21),
                t.TgZ(2, "span", 22)(3, "span"),
                t._uU(4),
                t.qZA()()()
            }
            if (2 & a) {
                const e = t.oxw();
                t.xp6(3),
                t.ekj("unchecked", e.uncheckedAlerts(e.favorite.pair)),
                t.xp6(1),
                t.hij(" ", e.uncheckedAlerts(e.favorite.pair) || e.getTotalAlerts(e.favorite.pair), " ")
            }
        }
        function lt(a, c) {
            1 & a && t._UZ(0, "app-icon", 28),
            2 & a && t.Q6J("width", 8)
        }
        function dt(a, c) {
            1 & a && t._UZ(0, "app-icon", 29),
            2 & a && t.Q6J("width", 8)
        }
        function ht(a, c) {
            if (1 & a && (t.ynx(0),
            t._uU(1),
            t.ALo(2, "number"),
            t.BQk()),
            2 & a) {
                const e = t.oxw(2);
                t.xp6(1),
                t.hij(" ", t.xi3(2, 1, e.getAbsoluteValue(e.favorite.diffPrice), "1.1-1"), "% ")
            }
        }
        function gt(a, c) {
            if (1 & a && (t.TgZ(0, "span", 30),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & a) {
                const e = t.oxw(2);
                t.xp6(1),
                t.hij(" ", t.xi3(2, 1, e.favorite.diffPrice, "1.1-1"), "% ")
            }
        }
        function _t(a, c) {
            if (1 & a && (t.TgZ(0, "span", 23),
            t.YNc(1, lt, 1, 1, "app-icon", 24),
            t.YNc(2, dt, 1, 1, "app-icon", 25),
            t.YNc(3, ht, 3, 4, "ng-container", 26),
            t.YNc(4, gt, 3, 4, "ng-template", null, 27, t.W1O),
            t.qZA()),
            2 & a) {
                const e = t.MAs(5)
                  , n = t.oxw();
                t.Tol(n.favorite.price_color),
                t.xp6(1),
                t.Q6J("ngIf", n.favorite.price && n.price24h && n.favorite.price < n.price24h),
                t.xp6(1),
                t.Q6J("ngIf", n.favorite.price && n.price24h && n.favorite.price > n.price24h),
                t.xp6(1),
                t.Q6J("ngIf", 0 != n.favorite.diffPrice)("ngIfElse", e)
            }
        }
        function ft(a, c) {
            if (1 & a && (t.TgZ(0, "span", 23)(1, "span", 30),
            t._uU(2, " 0.0% "),
            t.qZA()()),
            2 & a) {
                const e = t.oxw();
                t.Tol(e.favorite.price_color)
            }
        }
        function pt(a, c) {
            if (1 & a && (t.TgZ(0, "span", 32),
            t._uU(1),
            t.ALo(2, "appRoundPrices"),
            t.qZA()),
            2 & a) {
                const e = t.oxw(2);
                t.xp6(1),
                t.hij("$", t.xi3(2, 1, e.favorite.price, e.custom ? 1 : 2), "")
            }
        }
        function Ct(a, c) {
            1 & a && (t.TgZ(0, "span", 32),
            t._uU(1, " -.- "),
            t.qZA())
        }
        function mt(a, c) {
            if (1 & a && (t.ynx(0),
            t.YNc(1, pt, 3, 4, "span", 31),
            t.YNc(2, Ct, 2, 0, "span", 31),
            t.BQk()),
            2 & a) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !!e.favorite.price),
                t.xp6(1),
                t.Q6J("ngIf", !e.favorite.price)
            }
        }
        function Pt(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "span", 33)(1, "a", 34),
                t.NdJ("click", function(o) {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.deleteFavouriteList(o))
                })("mouseenter", function() {
                    t.CHM(e);
                    const o = t.oxw();
                    return t.KtG(o.setHoverFalse())
                })("mouseleave", function() {
                    t.CHM(e);
                    const o = t.oxw();
                    return t.KtG(o.setHoverTrue())
                }),
                t.ALo(2, "translate"),
                t._UZ(3, "fa-icon", 35),
                t.qZA()()
            }
            2 & a && (t.xp6(1),
            t.Q6J("ngbTooltip", t.lcZ(2, 1, "favorites.delete_from_list")))
        }
        let bt = (()=>{
            class a extends f.K9 {
                set favorite(e) {
                    const n = this._favorite;
                    this._favorite = e,
                    (!n || n.diffPrice !== this._favorite.diffPrice || n.price !== this._favorite.price) && this._favoriteChange$.next()
                }
                get favorite() {
                    return this._favorite
                }
                set chain(e) {
                    this._chain = e
                }
                get chain() {
                    return this._chain
                }
                get isPairSelected() {
                    return this.pairSelected === this.favorite.pair
                }
                constructor(e, n, o, i, s, d, C, x) {
                    super(),
                    this._favoritePairsService = e,
                    this._exchangeService = n,
                    this._priceAlertsService = o,
                    this._exchangeApiService = i,
                    this._environment = s,
                    this._cdRef = d,
                    this._breakpointObserver = C,
                    this._routingService = x,
                    this._favoriteChange$ = new m.X(null),
                    this.isEditing = !1,
                    this.currency = "usd",
                    this.showCharts = !1,
                    this.custom = !1,
                    this.isHover = !1,
                    this.favoritePairSelected = new t.vpe,
                    this.typeOfAction = "reloadRoute",
                    this.appContext = this._environment.app_scope,
                    this.ChainPage = O.$,
                    this.Chain = r.qop,
                    this.showIconDelete = !1,
                    this.loading = !1,
                    this.shouldSwapSymbols = !1,
                    this.isFavManuallyAdded = !1,
                    this.mediaDevice = ""
                }
                ngOnInit() {
                    this._breakpointObserver.observe([R.u3.XSmall, M.K5, M.mT]).pipe((0,
                    f.sL)(this)).subscribe(e=>{
                        e.breakpoints[R.u3.XSmall] ? (this.mediaDevice = "mobileTablet",
                        this._xsActive = !0) : e.breakpoints[M.K5] ? (this.mediaDevice = "mobileTablet",
                        this._xsActive = !1) : (this.mediaDevice = "desktop",
                        this._xsActive = !1),
                        this._cdRef.detectChanges()
                    }
                    ),
                    this.exchange = this._exchangeService.exchange
                }
                onDestroy() {}
                getFavReadableName(e="") {
                    const n = !!this.getTotalAlerts(this.favorite.pair);
                    return e.length > (n && this.custom ? 4 : n || this.custom ? 6 : 10) ? e.substring(0, n && this.custom ? 3 : n || this.custom ? 5 : 9) : e
                }
                _getSummary() {
                    this._chainAdapter = this._exchangeApiService.getAdapter(this.favorite.chain ?? r.qop.Ethereum),
                    this.getPriceHistory(this._chainAdapter)
                }
                deleteFavouriteList(e) {
                    e.preventDefault(),
                    e.stopImmediatePropagation();
                    const n = this._favoritePairsService.transformFavoriteWithPricesToLocalStorageFav(this.favorite);
                    this._favoritePairsService.deleteFav(n, n.listId).subscribe(o=>{
                        o && (this._favoritePairsService.loggedUser ? this._favoritePairsService.sendDeletedFav(n, n.listId) : this._favoritePairsService.getStoredFavs(!0))
                    }
                    )
                }
                viewFavoritePair(e, n, o, i) {
                    if (e.stopImmediatePropagation(),
                    e.ctrlKey || e.metaKey)
                        return void this._routingService.windowNavigate(`/${this.chain}/${O.$.PairExplorer}/${n}`, "_blank", "noopener");
                    let s = this._routingService.getCurrentScrollTopPosition("#favorite-pairs") || {};
                    return i && (s = {
                        ...s,
                        fragment: i
                    }),
                    "emit" === this.typeOfAction ? this.favoritePairSelected.emit(n) : this._routingService.reloadRoute(`/${this.chain}/${O.$.PairExplorer}/${n}`, s)
                }
                getTotalAlerts(e) {
                    return this.alerts?.get(e)?.length ?? 0
                }
                uncheckedAlerts(e) {
                    return this._priceAlertsService.getUncheckedPriceAlerts(e, this.chain ?? r.qop.Ethereum).count
                }
                getPriceHistory(e) {
                    this.loading = !0,
                    e.getPairSummary(this.favorite.pair).pipe((0,
                    f.sL)(this), (0,
                    h.b)(n=>{
                        n.type = n.type ?? "standard-pair",
                        this.favorite.isStableNativePair = r.LJP.isStableNativePair(n.type),
                        this.shouldSwapSymbols = this._shouldSwapSymbols(this.favorite, n),
                        this.isFavManuallyAdded = this.favorite.isStableNativePair,
                        this.favorite.symbolRef = this.isFavManuallyAdded ? n.token.symbol : n.tokenRef.symbol,
                        this.isFavManuallyAdded && (this.favorite.name = n.tokenRef.symbol),
                        this.candles = [...n.candles],
                        this._cdRef.detectChanges()
                    }
                    ), (0,
                    Y.a)(n=>n.pipe((0,
                    D.g)(1e4), (0,
                    f.sL)(this))), (0,
                    N.K)(n=>(this.loading = !1,
                    this._cdRef.detectChanges(),
                    console.log(n),
                    (0,
                    _.of)(null))), (0,
                    rt.x)(()=>{
                        this.loading = !1,
                        this._cdRef.detectChanges()
                    }
                    )).subscribe()
                }
                _shouldSwapSymbols(e, n) {
                    return !e.isStableNativePair && r.LJP.isStableNativePair(n.type) && null == e.isStableNativePair
                }
                get chartHeight() {
                    return "mobileTablet" !== this.mediaDevice || this._xsActive ? this._xsActive ? 72 : 48 : 120
                }
                getAbsoluteValue(e) {
                    return Math.abs(e)
                }
                markDeleteForCheck() {
                    this._cdRef.markForCheck()
                }
                getHrefUrl() {
                    return this._routingService.setLanguageToURL(`/${this.chain}/${O.$.PairExplorer}/${this.favorite.pair}`)
                }
                setHoverTrue() {
                    this.isHover = !0
                }
                setHoverFalse() {
                    this.isHover = !1
                }
                showIconDeleteTrue() {
                    this.showIconDelete = !0
                }
                showIconDeleteFalse() {
                    this.showIconDelete = !1
                }
                ngAfterViewInit() {
                    this._favoriteChange$.pipe((0,
                    f.sL)(this), (0,
                    D.g)(60)).subscribe(()=>{
                        this.color = "buy-color" === this._favorite.price_color ? "#17c671" : "#ea3943",
                        this.price24h = this._favorite?.price24h?.priceVariation ?? 0,
                        this.showCharts && this._getSummary(),
                        this._cdRef.detectChanges()
                    }
                    )
                }
            }
            return a.\u0275fac = function(e) {
                return new (e || a)(t.Y36(r.SBY),t.Y36(r.OqV),t.Y36(r.Pld),t.Y36(r.hmC),t.Y36(y.qA),t.Y36(t.sBO),t.Y36(R.Yg),t.Y36(y.Zn))
            }
            ,
            a.\u0275cmp = t.Xpm({
                type: a,
                selectors: [["app-favorite"]],
                hostVars: 2,
                hostBindings: function(e, n) {
                    2 & e && t.ekj("selected", n.isPairSelected)
                },
                inputs: {
                    favorite: "favorite",
                    isEditing: "isEditing",
                    alerts: "alerts",
                    pairSelected: "pairSelected",
                    currency: "currency",
                    showCharts: "showCharts",
                    custom: "custom",
                    chain: "chain",
                    typeOfAction: "typeOfAction"
                },
                outputs: {
                    favoritePairSelected: "favoritePairSelected"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 23,
                vars: 32,
                consts: [["rel", "nofollow", 3, "href", "click", "mouseenter", "mouseleave"], [1, "fav-info-container", 3, "appLoading"], [1, "fav-title", "align-items-center", "justify-content-between", "no-margin", "d-inline-block", "title-width"], [1, "justify-content-start", "d-inline-block", "w-100"], ["icon", "grip-vertical", "size", "xs", "class", "me-1 custom-icon", 4, "ngIf"], [1, "token-logo-container"], [1, "token-logo-img"], [3, "chain", "symbol", "name", "logoUrl", "hasWhiteBackground", "hasBorder"], [1, "chain-logo", 3, "src", "alt"], [1, "d-inline-block", "token-name-info"], [3, "tokenRight", "tokenLeft", "isLink"], [1, "fav-price-container", "d-inline-block", "price-width"], [1, "fav-price-container-wrapper"], [1, "notification", "d-inline-block"], ["href", "javascript:", "class", "d-flex", 3, "click", "mouseenter", "mouseleave", 4, "ngIf"], ["class", "favorite-percent", 3, "class", 4, "ngIf"], [4, "ngIf"], ["class", "fav-price justify-content-end d-inline-flex delete-width", 4, "ngIf"], [3, "candles", "timeMinutes", "color", "height"], ["icon", "grip-vertical", "size", "xs", 1, "me-1", "custom-icon"], ["href", "javascript:", 1, "d-flex", 3, "click", "mouseenter", "mouseleave"], ["icon", "bell", 1, "bell"], [1, "number"], [1, "favorite-percent"], ["name", "variationDown", "class", "me-1", 3, "width", 4, "ngIf"], ["name", "variationUp", "class", "me-1", 3, "width", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["neutralDiff", ""], ["name", "variationDown", 1, "me-1", 3, "width"], ["name", "variationUp", 1, "me-1", 3, "width"], [1, "netural-color"], ["class", "fav-price", 4, "ngIf"], [1, "fav-price"], [1, "fav-price", "justify-content-end", "d-inline-flex", "delete-width"], ["placement", "top-right", 1, "delete-favorite", "favs-hover", "delete-width", 3, "ngbTooltip", "click", "mouseenter", "mouseleave"], ["icon", "trash-can"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "a", 0),
                    t.NdJ("click", function(i) {
                        return n.viewFavoritePair(i, n.favorite.pair, n.chain),
                        !1
                    })("mouseenter", function() {
                        return n.showIconDeleteTrue(),
                        n.setHoverTrue()
                    })("mouseleave", function() {
                        return n.showIconDeleteFalse(),
                        n.setHoverFalse()
                    }),
                    t.TgZ(1, "div", 1)(2, "div", 2)(3, "div", 3),
                    t.YNc(4, ct, 1, 0, "fa-icon", 4),
                    t.TgZ(5, "div", 5)(6, "span", 6),
                    t._UZ(7, "app-token-logo", 7),
                    t.qZA(),
                    t._UZ(8, "img", 8),
                    t.ALo(9, "chainLogoUrl"),
                    t.qZA(),
                    t.TgZ(10, "div", 9),
                    t._UZ(11, "app-token-name", 10),
                    t.ALo(12, "appSafe"),
                    t.ALo(13, "appSafe"),
                    t.qZA()()(),
                    t.TgZ(14, "div", 11)(15, "div", 12)(16, "div", 13),
                    t.YNc(17, st, 5, 3, "a", 14),
                    t.qZA(),
                    t.YNc(18, _t, 6, 6, "span", 15),
                    t.YNc(19, ft, 3, 2, "span", 15),
                    t.YNc(20, mt, 3, 2, "ng-container", 16),
                    t.YNc(21, Pt, 4, 3, "span", 17),
                    t.qZA()()(),
                    t._UZ(22, "app-line-chart", 18),
                    t.qZA()),
                    2 & e && (t.Q6J("href", n.getHrefUrl(), t.LSH),
                    t.xp6(1),
                    t.Q6J("appLoading", n.loading && n.showCharts),
                    t.xp6(3),
                    t.Q6J("ngIf", n.custom),
                    t.xp6(3),
                    t.Q6J("chain", n.favorite.chain)("symbol", n.favorite.symbol)("name", n.favorite.name)("logoUrl", n.favorite.logo)("hasWhiteBackground", !0)("hasBorder", !0),
                    t.xp6(1),
                    t.MGl("alt", "", n.favorite.chain, "-logo"),
                    t.Q6J("src", t.lcZ(9, 26, n.favorite.chain), t.LSH),
                    t.xp6(3),
                    t.Q6J("tokenRight", t.lcZ(12, 28, n.shouldSwapSymbols && !n.isFavManuallyAdded ? n.favorite.name : n.favorite.symbolRef))("tokenLeft", t.lcZ(13, 30, n.getFavReadableName(n.shouldSwapSymbols && n.isFavManuallyAdded ? n.favorite.symbolRef : n.favorite.name)))("isLink", n.isHover),
                    t.xp6(6),
                    t.Q6J("ngIf", n.getTotalAlerts(n.favorite.pair)),
                    t.xp6(1),
                    t.Q6J("ngIf", !!n.favorite.diffPrice),
                    t.xp6(1),
                    t.Q6J("ngIf", !n.favorite.diffPrice),
                    t.xp6(1),
                    t.Q6J("ngIf", !n.showIconDelete || "mobileTablet" === n.mediaDevice),
                    t.xp6(1),
                    t.Q6J("ngIf", n.showIconDelete || "mobileTablet" === n.mediaDevice),
                    t.xp6(1),
                    t.Tol(n.showCharts ? null : "hide-chart"),
                    t.Q6J("candles", n.candles)("timeMinutes", 10)("color", n.color)("height", n.chartHeight))
                },
                dependencies: [M.TH, v.O5, A.uH, A.BN, q.T, G.m, B.lQ, E._L, j.D, v.JJ, F.yl, F.pt, S.aw, S.X$, r.eV1],
                styles: ["[_nghost-%COMP%]{display:block;background-color:#e2e7ec;border-radius:.625rem;position:relative}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]{background-color:#23323c}body.dark-theme   [_nghost-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]{background-color:#e2e7ec}body.light   [_nghost-%COMP%]{background-color:#e2e7ec}.selected[_nghost-%COMP%]{background-color:#fff}body.dark-theme   [_nghost-%COMP%]   .selected[_nghost-%COMP%]{background-color:#0b1217}body.dark-theme   .selected[_nghost-%COMP%]{background-color:#0b1217}body.light   [_nghost-%COMP%]   .selected[_nghost-%COMP%]{background-color:#fff}body.light   .selected[_nghost-%COMP%]{background-color:#fff}[_nghost-%COMP%] > a[_ngcontent-%COMP%]{position:relative;text-decoration:none}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]{padding:0 .625rem;height:2.5rem;line-height:2.5rem;overflow:hidden}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .custom-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .custom-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .custom-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .custom-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .custom-icon[_ngcontent-%COMP%]{color:#818ea3}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .token-logo-container[_ngcontent-%COMP%]{display:inline-block;position:relative;margin-right:.75rem;vertical-align:middle}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .token-logo-container[_ngcontent-%COMP%]   .token-logo-img[_ngcontent-%COMP%]{overflow:hidden;height:1.5rem;width:1.5rem;display:block}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .token-logo-container[_ngcontent-%COMP%]   .chain-logo[_ngcontent-%COMP%]{border-radius:50%;right:-5px;top:-2px;height:.875rem;position:absolute}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-title[_ngcontent-%COMP%]:not(.title-width){margin-top:.625rem}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-title[_ngcontent-%COMP%]:not(.title-width)   span[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:12px;line-height:12px;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-title[_ngcontent-%COMP%]:not(.title-width)   span[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-title[_ngcontent-%COMP%]:not(.title-width)   span[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-title[_ngcontent-%COMP%]:not(.title-width)   span[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-title[_ngcontent-%COMP%]:not(.title-width)   span[_ngcontent-%COMP%]{color:#818ea3}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-title[_ngcontent-%COMP%]:not(.title-width)   strong[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:16px;line-height:22px;color:#142028;text-overflow:ellipsis}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-title[_ngcontent-%COMP%]:not(.title-width)   strong[_ngcontent-%COMP%]{color:#fff}body.dark-theme   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-title[_ngcontent-%COMP%]:not(.title-width)   strong[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-title[_ngcontent-%COMP%]:not(.title-width)   strong[_ngcontent-%COMP%]{color:#142028}body.light   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-title[_ngcontent-%COMP%]:not(.title-width)   strong[_ngcontent-%COMP%]{color:#142028}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]{width:1.25rem}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .bell[_ngcontent-%COMP%]{color:#3d5170;font-size:.875rem}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .bell[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .bell[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .bell[_ngcontent-%COMP%]{color:#3d5170}body.light   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .bell[_ngcontent-%COMP%]{color:#3d5170}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover   .bell[_ngcontent-%COMP%]{color:#00b8d8!important}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#17c671;line-height:.875rem;margin-left:.25rem;font-size:.8125rem}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:is(.unchecked){color:#ea3943}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .delete-favorite[_ngcontent-%COMP%]{color:#3d5170;justify-content:flex-end;display:flex;z-index:2;margin-right:1.25rem}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .delete-favorite[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .delete-favorite[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .delete-favorite[_ngcontent-%COMP%]{color:#3d5170}body.light   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .delete-favorite[_ngcontent-%COMP%]{color:#3d5170}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .delete-favorite.favs-hover[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .delete-favorite.favs-hover[_ngcontent-%COMP%]:hover{color:#00b8d8!important}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-price-container[_ngcontent-%COMP%]:not(.price-width){display:flex;flex-direction:row;justify-content:space-between}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-price-container[_ngcontent-%COMP%]:not(.price-width)   .fav-price[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;line-height:22px;color:#3d5170}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-price-container[_ngcontent-%COMP%]:not(.price-width)   .fav-price[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-price-container[_ngcontent-%COMP%]:not(.price-width)   .fav-price[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-price-container[_ngcontent-%COMP%]:not(.price-width)   .fav-price[_ngcontent-%COMP%]{color:#3d5170}body.light   [_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-price-container[_ngcontent-%COMP%]:not(.price-width)   .fav-price[_ngcontent-%COMP%]{color:#3d5170}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]   .fav-price-container[_ngcontent-%COMP%]:not(.price-width)   .favorite-percent[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .price-history-container[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .price-history-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]    {width:100%;border-radius:0 0 1rem 1rem;max-height:2.875rem}[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .price-history-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]     polygon{stroke-linejoin:round;opacity:.5}[_nghost-%COMP%]   .dxt-loading[_ngcontent-%COMP%]{top:auto;margin:.625rem 0 0}.no-margin[_ngcontent-%COMP%]{margin-top:0!important}.hide-chart[_ngcontent-%COMP%]{display:none}.title-width[_ngcontent-%COMP%]{margin-right:1%;overflow:hidden;vertical-align:middle;white-space:nowrap;width:50%}.title-width[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.number), .title-width[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;color:#142028;margin-left:.3125rem;text-overflow:ellipsis}body.dark-theme   [_nghost-%COMP%]   .title-width[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.number), body.dark-theme   [_nghost-%COMP%]   .title-width[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .title-width[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.number), body.dark-theme[_ngcontent-%COMP%]   .title-width[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .title-width[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.number), body.light   [_nghost-%COMP%]   .title-width[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .title-width[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.number), body.light[_ngcontent-%COMP%]   .title-width[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}.token-name-info[_ngcontent-%COMP%]{width:calc(100% - 32px)}.price-width[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;overflow:hidden;vertical-align:middle;white-space:nowrap;line-height:1.25rem;width:49%}.price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%] > .favorite-percent[_ngcontent-%COMP%]{width:calc(44% - 13px);max-width:6.25rem;text-align:right}.price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%] > .fav-price[_ngcontent-%COMP%]{flex:1;overflow:hidden;text-overflow:ellipsis;color:#3d5170;width:calc(55% - 13px);text-align:right}body.dark-theme   [_nghost-%COMP%]   .price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%] > .fav-price[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%] > .fav-price[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%] > .fav-price[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%] > .fav-price[_ngcontent-%COMP%]{color:#3d5170}.delete-width[_ngcontent-%COMP%]{display:inline-block;width:7%;height:unset}.delete-width[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{cursor:pointer}.netural-color[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .netural-color[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .netural-color[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .netural-color[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .netural-color[_ngcontent-%COMP%]{color:#142028}.logo-margin[_ngcontent-%COMP%]{margin-left:3.4375rem}@media (max-width: 1023px){[_nghost-%COMP%] > a[_ngcontent-%COMP%]   .fav-info-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.price-width[_ngcontent-%COMP%]{max-width:15.625rem}.price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%] > .favorite-percent[_ngcontent-%COMP%]{max-width:4.25rem}.price-width[_ngcontent-%COMP%]   .delete-width[_ngcontent-%COMP%]{width:3rem!important;flex:unset!important;text-align:center!important}.price-width[_ngcontent-%COMP%]   .delete-width[_ngcontent-%COMP%]   .delete-favorite[_ngcontent-%COMP%]{padding-right:.625rem!important;margin-right:0!important}}@media (max-width: 599px){[_nghost-%COMP%]   .title-width[_ngcontent-%COMP%]{width:44%}[_nghost-%COMP%]   .price-width[_ngcontent-%COMP%]{width:55%}[_nghost-%COMP%]   .price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%] > .favorite-percent[_ngcontent-%COMP%]{max-width:3.125rem;margin-right:.375rem}[_nghost-%COMP%]   .price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%] > .fav-price[_ngcontent-%COMP%]{max-width:6.25rem;flex:unset!important}[_nghost-%COMP%]   .price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%]   .delete-width[_ngcontent-%COMP%]{width:1.25rem;max-width:1.25rem}[_nghost-%COMP%]   .price-width[_ngcontent-%COMP%] > .fav-price-container-wrapper[_ngcontent-%COMP%]   .delete-width[_ngcontent-%COMP%]   .delete-favorite[_ngcontent-%COMP%]{padding-right:0!important;margin-right:0!important}}app-token-name[_ngcontent-%COMP%]     .token1{line-height:2.5rem}@media (max-width: 599px){app-token-name[_ngcontent-%COMP%]     .token2{display:none}}"],
                changeDetection: 0
            }),
            a
        }
        )();
        var K = l(47487)
          , W = l(78372)
          , U = l(69585)
          , u = l(24006);
        const Mt = ["favoriteListTable"];
        function Ot(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "app-dropdown-select", 5),
                t.NdJ("itemSelected", function(o) {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.listSelected(o))
                }),
                t.qZA()
            }
            if (2 & a) {
                const e = t.oxw()
                  , n = t.MAs(6);
                t.Gre("me-1 ", e.containerWidth < 665 ? "mb-2" : null, ""),
                t.Q6J("items", e.favsListItems)("selectedItem", e.currentListItem)("footerTpl", e.isLogged ? n : null)
            }
        }
        function vt(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "app-dropdown-select", 6),
                t.NdJ("itemSelected", function(o) {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.switchSort.emit(o))
                }),
                t.qZA()
            }
            if (2 & a) {
                const e = t.oxw();
                t.Gre("me-1 ", e.containerWidth < 665 ? "mb-2" : null, ""),
                t.Q6J("items", e.favsSorting)("selectedItem", e.currentFilterItem)
            }
        }
        function ut(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "input", 7),
                t.NdJ("ngModelChange", function(o) {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.favoriteSearch = o)
                })("keyup", function() {
                    t.CHM(e);
                    const o = t.oxw();
                    return t.KtG(o.favoriteSearchChange$.next(o.favoriteSearch))
                }),
                t.ALo(1, "translate"),
                t.qZA()
            }
            if (2 & a) {
                const e = t.oxw();
                t.Tol(e.containerWidth < 665 ? "w-100" : null),
                t.Q6J("placeholder", t.lcZ(1, 5, "Find by name or pair address"))("ngModel", e.favoriteSearch)
            }
        }
        function wt(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "div", 17)(1, "div", 18),
                t._UZ(2, "app-token-logo", 19),
                t.qZA(),
                t.TgZ(3, "div", 20)(4, "a", 21),
                t.NdJ("click", function(o) {
                    const s = t.CHM(e).row;
                    return t.oxw(2).viewFavoritePair(o, s),
                    t.KtG(!1)
                }),
                t._UZ(5, "app-token-name", 22),
                t.ALo(6, "appSafe"),
                t.ALo(7, "appSafe"),
                t.qZA(),
                t.TgZ(8, "span"),
                t._uU(9),
                t.ALo(10, "slice"),
                t.ALo(11, "slice"),
                t.TgZ(12, "fa-icon", 23, 24),
                t.NdJ("click", function(o) {
                    const s = t.CHM(e).row
                      , d = t.MAs(13)
                      , C = t.oxw(2);
                    return t.KtG(C.copyAddress(o, s.pair, d))
                }),
                t.ALo(14, "translate"),
                t.qZA()()()()
            }
            if (2 & a) {
                const e = c.row
                  , n = t.oxw(2);
                t.xp6(2),
                t.Q6J("symbol", e.name)("logoUrl", e.logo)("hasWhiteBackground", !0),
                t.xp6(2),
                t.Q6J("href", n.getPairExplorerURLWithLanguage(e), t.LSH),
                t.xp6(1),
                t.Q6J("tokenRight", t.lcZ(6, 10, e.shouldSwapSymbols && !e.isStableNativePair ? e.name : e.symbolRef))("tokenLeft", t.lcZ(7, 12, e.shouldSwapSymbols && e.isStableNativePair ? e.symbolRef : e.name))("isLink", n.rowHover === e.pair),
                t.xp6(4),
                t.AsE("", t.Dn7(10, 14, e.pair, 0, 5), "...", t.Dn7(11, 18, e.pair, 38, 42), " "),
                t.xp6(3),
                t.s9C("ngbTooltip", t.lcZ(14, 22, "pair_explorer.copy_clipboard"))
            }
        }
        function xt(a, c) {
            if (1 & a && (t.TgZ(0, "span", 27),
            t._uU(1),
            t.ALo(2, "appRoundPrices"),
            t.qZA()),
            2 & a) {
                const e = t.oxw().row;
                t.xp6(1),
                t.hij("$", t.xi3(2, 1, e.price, 4), "")
            }
        }
        function yt(a, c) {
            1 & a && (t.TgZ(0, "span", 27),
            t._uU(1, " - "),
            t.qZA())
        }
        function kt(a, c) {
            if (1 & a && (t.TgZ(0, "div", 25),
            t.YNc(1, xt, 3, 4, "span", 26),
            t.YNc(2, yt, 2, 0, "span", 26),
            t.qZA()),
            2 & a) {
                const e = c.row;
                t.xp6(1),
                t.Q6J("ngIf", !!e.price),
                t.xp6(1),
                t.Q6J("ngIf", !e.price)
            }
        }
        function Lt(a, c) {
            1 & a && t._UZ(0, "app-icon", 35),
            2 & a && t.Q6J("width", 8)
        }
        function Ft(a, c) {
            1 & a && t._UZ(0, "app-icon", 36),
            2 & a && t.Q6J("width", 8)
        }
        function Tt(a, c) {
            if (1 & a && (t.ynx(0),
            t.YNc(1, Lt, 1, 1, "app-icon", 33),
            t.YNc(2, Ft, 1, 1, "app-icon", 34),
            t._uU(3),
            t.ALo(4, "slice"),
            t.BQk()),
            2 & a) {
                const e = t.oxw(2).row;
                t.xp6(1),
                t.Q6J("ngIf", e.price < e.price24h),
                t.xp6(1),
                t.Q6J("ngIf", e.price > e.price24h),
                t.xp6(1),
                t.hij(" ", e.price < e.price24h ? t.xi3(4, 3, "" + e.diffPrice, 1) : e.diffPrice, "% ")
            }
        }
        function St(a, c) {
            if (1 & a && (t.TgZ(0, "span", 37),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & a) {
                const e = t.oxw(2).row;
                t.xp6(1),
                t.hij(" ", t.xi3(2, 1, e.diffPrice, "1.2-2"), "% ")
            }
        }
        function At(a, c) {
            if (1 & a && (t.TgZ(0, "span", 30),
            t.YNc(1, Tt, 5, 6, "ng-container", 31),
            t.YNc(2, St, 3, 4, "ng-template", null, 32, t.W1O),
            t.qZA()),
            2 & a) {
                const e = t.MAs(3)
                  , n = t.oxw().row;
                t.Tol(n.price_color),
                t.xp6(1),
                t.Q6J("ngIf", 0 !== n.diffPrice)("ngIfElse", e)
            }
        }
        function Zt(a, c) {
            if (1 & a && (t.TgZ(0, "span", 30)(1, "span", 37),
            t._uU(2, " 0.0% "),
            t.qZA()()),
            2 & a) {
                const e = t.oxw().row;
                t.Tol(e.price_color)
            }
        }
        function It(a, c) {
            if (1 & a && (t.TgZ(0, "div", 28),
            t.YNc(1, At, 4, 4, "span", 29),
            t.YNc(2, Zt, 3, 2, "span", 29),
            t.qZA()),
            2 & a) {
                const e = c.row;
                t.xp6(1),
                t.Q6J("ngIf", !!e.diffPrice),
                t.xp6(1),
                t.Q6J("ngIf", !e.diffPrice)
            }
        }
        function Nt(a, c) {
            if (1 & a && t._UZ(0, "app-line-chart", 38),
            2 & a) {
                const e = c.row;
                t.Q6J("candles", e.candles)("timeMinutes", 10)("color", e.price_color_code)("height", 30)
            }
        }
        function Dt(a, c) {
            if (1 & a && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "date"),
            t.qZA()),
            2 & a) {
                const e = c.row
                  , n = t.oxw(2);
                t.xp6(1),
                t.Oqu(null != e && e.updatedAt && (null == e ? null : e.updatedAt) !== n.backMigrationDateTs ? t.xi3(2, 1, e.updatedAt, "yyyy-MM-dd") : "-")
            }
        }
        function Rt(a, c) {
            if (1 & a && (t.TgZ(0, "div", 39),
            t._UZ(1, "img", 40),
            t.ALo(2, "chainLogoUrl"),
            t.TgZ(3, "span", 41),
            t._uU(4),
            t.qZA()()),
            2 & a) {
                const e = c.row
                  , n = t.oxw(2);
                let o;
                t.xp6(1),
                t.s9C("alt", e.chain + " logo"),
                t.Q6J("src", t.lcZ(2, 3, null !== (o = e.chain) && void 0 !== o ? o : n.Chain.Ethereum), t.LSH),
                t.xp6(3),
                t.Oqu(e.chainName)
            }
        }
        function Ut(a, c) {
            if (1 & a && (t.TgZ(0, "div", 42)(1, "img", 43),
            t.ALo(2, "exchangeLogoStyles"),
            t.ALo(3, "exchangeLogoUrl"),
            t.qZA(),
            t.TgZ(4, "span", 41),
            t._uU(5),
            t.qZA()()),
            2 & a) {
                const e = c.row
                  , n = t.oxw(2);
                let o, i;
                t.xp6(1),
                t.Akn(t.xi3(2, 5, null !== (o = e.exchange) && void 0 !== o ? o : n.defaultApiExchange, null !== (o = e.chain) && void 0 !== o ? o : n.Chain.Ethereum)),
                t.Q6J("src", t.xi3(3, 8, null !== (i = e.exchange) && void 0 !== i ? i : n.defaultApiExchange, null !== (i = e.chain) && void 0 !== i ? i : n.Chain.Ethereum), t.LSH)("alt", e.exchange + "logo"),
                t.xp6(4),
                t.Oqu(e.exchangeName)
            }
        }
        function Et(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "div", 44)(1, "a", 45),
                t.NdJ("click", function(o) {
                    const s = t.CHM(e).row;
                    return t.oxw(2).viewFavoritePair(o, s),
                    t.KtG(!1)
                }),
                t.ALo(2, "translate"),
                t._UZ(3, "app-icon", 46),
                t.qZA(),
                t.TgZ(4, "a", 47),
                t.NdJ("click", function(o) {
                    const s = t.CHM(e).row
                      , d = t.oxw(2);
                    return t.KtG(d.deleteFavouriteList(o, s))
                }),
                t.ALo(5, "translate"),
                t._UZ(6, "fa-icon", 48),
                t.qZA()()
            }
            if (2 & a) {
                const e = c.row
                  , n = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngbTooltip", t.lcZ(2, 4, "pools_creator.show_live_data"))("href", n.getPairExplorerURLWithLanguage(e), t.LSH),
                t.xp6(2),
                t.Q6J("width", 17),
                t.xp6(1),
                t.Q6J("ngbTooltip", t.lcZ(5, 6, "favorites.delete_from_list"))
            }
        }
        const Jt = function() {
            return {
                prop: "updatedAt",
                dir: "desc"
            }
        }
          , $t = function(a) {
            return [a]
        }
          , zt = function(a) {
            return {
                emptyMessage: a
            }
        };
        function Qt(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "ngx-datatable", 8, 9),
                t.NdJ("page", function(o) {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.changePage(o))
                })("activate", function(o) {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onRowClicked(o))
                })("mouseleave", function() {
                    t.CHM(e);
                    const o = t.oxw();
                    return t.KtG(o.disableRowHover())
                }),
                t.ALo(2, "translate"),
                t.TgZ(3, "ngx-datatable-column", 10),
                t.ALo(4, "translate"),
                t.YNc(5, wt, 15, 24, "ng-template", 11),
                t.qZA(),
                t.TgZ(6, "ngx-datatable-column", 12),
                t.ALo(7, "translate"),
                t.YNc(8, kt, 3, 2, "ng-template", 11),
                t.qZA(),
                t.TgZ(9, "ngx-datatable-column", 12),
                t.ALo(10, "translate"),
                t.YNc(11, It, 3, 2, "ng-template", 11),
                t.qZA(),
                t.TgZ(12, "ngx-datatable-column", 13),
                t.ALo(13, "translate"),
                t.YNc(14, Nt, 1, 4, "ng-template", 11),
                t.qZA(),
                t.TgZ(15, "ngx-datatable-column", 14),
                t.ALo(16, "translate"),
                t.YNc(17, Dt, 3, 4, "ng-template", 11),
                t.qZA(),
                t.TgZ(18, "ngx-datatable-column", 15),
                t.ALo(19, "translate"),
                t.YNc(20, Rt, 5, 5, "ng-template", 11),
                t.qZA(),
                t.TgZ(21, "ngx-datatable-column", 15),
                t.ALo(22, "translate"),
                t.YNc(23, Ut, 6, 11, "ng-template", 11),
                t.qZA(),
                t.TgZ(24, "ngx-datatable-column", 16),
                t.ALo(25, "translate"),
                t.YNc(26, Et, 7, 8, "ng-template", 11),
                t.qZA()()
            }
            if (2 & a) {
                const e = t.oxw();
                t.Q6J("sorts", t.VKq(71, $t, t.DdM(70, Jt)))("trackByProp", "pair")("scrollbarV", !0)("count", e.favoriteList.length)("footerHeight", 80)("rowHeight", 60)("rows", e.favoriteList)("limit", 10)("messages", t.VKq(73, zt, t.lcZ(2, 52, "pair_list.not_found"))),
                t.xp6(3),
                t.Q6J("resizeable", !1)("frozenLeft", !0)("width", 150)("minWidth", 150)("prop", "name")("name", t.lcZ(4, 54, "home.favorite_list.pair")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 110)("minWidth", 110)("prop", "price")("name", t.lcZ(7, 56, "home.favorite_list.price")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 150)("minWidth", 150)("prop", "diffPrice")("name", t.lcZ(10, 58, "home.favorite_list.price_variation")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 200)("minWidth", 200)("maxWidth", 200)("sortable", !1)("prop", "diffPrice")("name", t.lcZ(13, 60, "home.favorite_list.evolution")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 120)("minWidth", 120)("prop", "updatedAt")("name", t.lcZ(16, 62, "home.favorite_list.date_update")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 130)("minWidth", 130)("prop", "chainName")("name", t.lcZ(19, 64, "home.favorite_list.chain")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 130)("minWidth", 130)("prop", "exchangeName")("name", t.lcZ(22, 66, "home.favorite_list.exchange")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 100)("minWidth", 100)("sortable", !1)("name", t.lcZ(25, 68, "home.favorite_list.actions"))
            }
        }
        function Ht(a, c) {
            1 & a && t._UZ(0, "app-manage-favs-list")
        }
        const V = {
            value: r.Tpk,
            label: "Main List (...)"
        };
        let Yt = (()=>{
            class a extends f.K9 {
                onResize() {
                    this._tableRecalculate(),
                    this.containerWidth = window.innerWidth
                }
                set pricesTrackChains(e) {
                    this._pricesTrackChains = e,
                    e && e.length > 0 && this._priceListenerChains()
                }
                get pricesTrackChains() {
                    return this._pricesTrackChains
                }
                set favoriteList(e) {
                    this.favoriteListOriginal = [...e],
                    this._recreateFavoriteList(),
                    this._cdRef.detectChanges()
                }
                get favoriteList() {
                    return this._favoriteList
                }
                constructor(e, n, o, i, s) {
                    super(),
                    this._favoritePairsService = e,
                    this._exchangeApiService = n,
                    this._environment = o,
                    this._cdRef = i,
                    this._routingService = s,
                    this.switchSort = new t.vpe,
                    this.favsLoader = !0,
                    this.defaultApiExchange = r.ibW,
                    this.appContext = this._environment.app_scope,
                    this.ChainPage = O.$,
                    this.Chain = r.qop,
                    this.containerWidth = window.innerWidth,
                    this.loading = !1,
                    this.backMigrationDateTs = 9466848e5,
                    this._pricesSubs = [],
                    this._favoriteList = [],
                    this._favsPriceChangedMap = new Map,
                    this._currentListId = "",
                    this.favoriteListOriginal = [],
                    this.favsLists = [],
                    this.isLogged = !1,
                    this.rowHover = null,
                    this.favoriteSearchChange$ = new m.X(null),
                    this.currentList = r.Tpk,
                    this.currentListItem = {
                        ...V
                    },
                    this.currentFilterItem = {
                        value: r.zjc.Update,
                        label: r.zjc.Update
                    },
                    this.favsSorting = [{
                        value: r.zjc.Update,
                        label: r.zjc.Update
                    }],
                    this.favsListItems = [{
                        ...this.currentListItem
                    }]
                }
                ngOnInit() {
                    this.isLogged = this._favoritePairsService.loggedUser,
                    this.favsSorting = this._favoritePairsService.favsSortingOptions.filter((e,n,o)=>n === o.findIndex(i=>i.label === e.label)),
                    this._favoritePairsService.favoritesList$.pipe((0,
                    f.sL)(this), (0,
                    h.b)(e=>{
                        this.favsLists = e,
                        this.favsListItems = e.map(n=>({
                            label: this._favoritePairsService.formatListName(n),
                            value: n.name,
                            id: n.id
                        })),
                        this.currentList = this._favoritePairsService.getStorageListName(),
                        this._currentListId = e.find(n=>n.id === this.currentList)?.id ?? e[0]?.id ?? "",
                        this.currentListItem = this.favsListItems.find(n=>n.id === this.currentList) ?? {
                            ...V
                        },
                        this._changeList(this.currentListItem.id ?? r.Tpk),
                        this._cdRef.detectChanges()
                    }
                    )).subscribe(),
                    this._favoritePairsService.favoritesOrder$.pipe((0,
                    f.sL)(this), (0,
                    h.b)(e=>{
                        this.currentFilterItem = this._favoritePairsService.favsSortingOptions.find(n=>n.value === e)
                    }
                    )).subscribe()
                }
                ngAfterViewInit() {
                    this.favoriteList.length && (this.table.sort.pipe((0,
                    f.sL)(this)).subscribe(()=>{
                        this._cdRef.detectChanges(),
                        this._updateDataFavoriteList()
                    }
                    ),
                    this.favoriteSearchChange$.pipe((0,
                    f.sL)(this), (0,
                    W.b)(500)).subscribe(()=>{
                        this._recreateFavoriteList()
                    }
                    ))
                }
                onDestroy() {
                    this._pricesSubs?.length && (this._pricesSubs.forEach(e=>{
                        e.unsubscribe()
                    }
                    ),
                    this._pricesSubs = null),
                    this._favsPriceChangedMap.clear()
                }
                deleteFavouriteList(e, n) {
                    e.preventDefault(),
                    e.stopImmediatePropagation();
                    const o = this._favoritePairsService.transformFavoriteWithPricesToLocalStorageFav(n);
                    this._favoritePairsService.deleteFav(o, this._currentListId).subscribe(i=>{
                        i && (this._favoritePairsService.loggedUser ? this._favoritePairsService.sendDeletedFav(o, this._currentListId) : this._favoritePairsService.getStoredFavs(!0),
                        this._recreateFavoriteList(),
                        this._updateFavoriteList())
                    }
                    )
                }
                viewFavoritePair(e, n, o) {
                    if (e && e.stopImmediatePropagation(),
                    e && (e.ctrlKey || e.metaKey))
                        return void this._routingService.windowNavigate(`/${n.chain ?? r.qop.Ethereum}/${O.$.PairExplorer}/${n.pair}`, "_blank", "noopener");
                    let i = this._routingService.getCurrentScrollTopPosition("#favorite-pairs") || {};
                    o && (i = {
                        ...i,
                        fragment: o
                    }),
                    this._routingService.reloadRoute(`/${n.chain ?? r.qop.Ethereum}/${O.$.PairExplorer}/${n.pair}`, i)
                }
                getPriceHistory(e, n) {
                    e.getPairSummary(n.pair).pipe((0,
                    f.sL)(this), (0,
                    h.b)(o=>{
                        o.type = o.type ?? "standard-pair",
                        n.isStableNativePair = r.LJP.isStableNativePair(o.type),
                        n.shouldSwapSymbols = this._shouldSwapSymbols(n, o),
                        n.symbolRef = n.isStableNativePair ? o.token.symbol : o.tokenRef.symbol,
                        n.isStableNativePair && (n.name = o.tokenRef.symbol),
                        n.candles = o.candles ? [...o.candles] : [],
                        this._cdRef.detectChanges(),
                        this._tableRecalculate()
                    }
                    ), (0,
                    Y.a)(o=>o.pipe((0,
                    D.g)(1e4), (0,
                    f.sL)(this))), (0,
                    N.K)(o=>(0,
                    _.of)(console.log(o)))).subscribe()
                }
                copyAddress(e, n, o) {
                    e && e.stopPropagation(),
                    (0,
                    M.vQ)(n, o)
                }
                listSelected(e) {
                    e.id !== this.currentList && this._changeList(e.id ?? r.Tpk)
                }
                _changeList(e) {
                    this.currentList = e,
                    this._favoritePairsService.setStorageListName(e),
                    this._favoritePairsService.getFavsList(e).pipe((0,
                    g.q)(1)).subscribe(()=>{
                        this._recreateFavoriteList(),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _shouldSwapSymbols(e, n) {
                    return !e.isStableNativePair && r.LJP.isStableNativePair(n.type) && null == e.isStableNativePair
                }
                _setDiffPrice(e) {
                    e.diffPrice = e?.price && e?.price24h ? +(100 * (e.price / (e.price24h.price ?? 0) - 1)).toFixed(2) : 0,
                    e.price_color = (e?.price ?? 0) >= (e?.price24h ?? 0) ? "buy-color" : "sell-color",
                    e.price_color_code = "buy-color" === e.price_color ? "#17c671" : "#ea3943"
                }
                _priceListenerChains() {
                    this._pricesSubs?.length || this.pricesTrackChains?.forEach(e=>{
                        e.trackedPairs.forEach(o=>{
                            const i = new k.x;
                            this._favsPriceChangedMap.set(o, i),
                            i.pipe((0,
                            W.b)(250), (0,
                            f.sL)(this)).subscribe(([s,d])=>{
                                (s.price !== d.usd || d.price24h && s.price24h?.price !== d.price24h) && (s.price = d.usd || s.price || 0,
                                s.price24h = {
                                    price: 0,
                                    volume: 0,
                                    priceVariation: 0
                                },
                                s.price24h.price = d.price24h || s?.price24h.price || 0,
                                this._setDiffPrice(s),
                                this._cdRef.detectChanges(),
                                this._tableRecalculate()),
                                this.favoriteList.length && this.table.bodyComponent.temp.find(C=>C.pair === d.id) && this._setDataFav(s)
                            }
                            )
                        }
                        );
                        const n = e.pricesUpdates$.pipe((0,
                        f.sL)(this), (0,
                        h.b)(o=>{
                            o.forEach(i=>{
                                this.favoriteList.filter(s=>s.pair === i.id).forEach(s=>{
                                    null == this._favsPriceChangedMap.get(s.pair) ? console.warn(`Price tracker for pair ${s.pair} not found.`) : this._favsPriceChangedMap.get(s.pair).next([s, i])
                                }
                                )
                            }
                            ),
                            this._recreateFavoriteList()
                        }
                        )).subscribe();
                        this._pricesSubs?.push(n)
                    }
                    )
                }
                _setDataFav(e) {
                    e.chainName = r.CXF.getChainName(e.chain ?? r.qop.Ethereum),
                    e.exchangeName = `${r.i9O.getExchangeNameFromExchangeApi(e?.exchange ?? r.ibW, e.chain ?? r.qop.Ethereum)} ${r.i9O.getExchangeVersion(e.exchange ?? r.ibW, e.chain ?? r.qop.Ethereum)}`,
                    this._setDiffPrice(e);
                    const n = this._exchangeApiService.getAdapter(e.chain ?? r.qop.Ethereum);
                    this.getPriceHistory(n, e),
                    this._cdRef.detectChanges(),
                    this._tableRecalculate()
                }
                _updateDataFavoriteList() {
                    this._favoriteList.forEach(e=>{
                        this.table.bodyComponent.temp.forEach(n=>{
                            e.pair === n.pair && !n?.candles && !n?.chainName && (e?.chainName || this._setDataFav(e))
                        }
                        )
                    }
                    )
                }
                onRowClicked(e) {
                    "click" === e.type && this.viewFavoritePair(null, e.row),
                    "mouseenter" === e.type && (this.rowHover = e.row.pair)
                }
                changePage(e) {
                    this._updateDataFavoriteList()
                }
                _tableRecalculate() {
                    this.table && this.table.recalculate()
                }
                _recreateFavoriteList() {
                    if (this.favoriteSearch && 0 !== this.favoriteSearch.length) {
                        const e = this._sanitizeSearch(this.favoriteSearch);
                        this._favoriteList = this.favoriteListOriginal.filter(n=>this._sanitizeSearch(`${n.name}`).includes(e) || this._sanitizeSearch(`${n.pair}`).includes(e) || this._sanitizeSearch(`${n.symbolRef}`).includes(e)),
                        this._updateDataFavoriteList(),
                        this._cdRef.detectChanges()
                    } else
                        this._updateFavoriteList()
                }
                _sanitizeSearch(e) {
                    return e.length > 0 ? e.toLowerCase().replace(/\s/g, "") : ""
                }
                _updateFavoriteList() {
                    this._favoriteList = [...this.favoriteListOriginal],
                    this._cdRef.detectChanges()
                }
                getPairExplorerURLWithLanguage(e) {
                    return this._routingService.setLanguageToURL(`/${e.chain}/${O.$.PairExplorer}/${e.pair}`)
                }
                disableRowHover() {
                    this.rowHover = null
                }
            }
            return a.\u0275fac = function(e) {
                return new (e || a)(t.Y36(r.SBY),t.Y36(r.hmC),t.Y36(y.qA),t.Y36(t.sBO),t.Y36(y.Zn))
            }
            ,
            a.\u0275cmp = t.Xpm({
                type: a,
                selectors: [["app-dashboard-favorite"]],
                viewQuery: function(e, n) {
                    if (1 & e && t.Gf(Mt, 5),
                    2 & e) {
                        let o;
                        t.iGM(o = t.CRH()) && (n.table = o.first)
                    }
                },
                hostBindings: function(e, n) {
                    1 & e && t.NdJ("resize", function() {
                        return n.onResize()
                    }, !1, t.Jf7)
                },
                inputs: {
                    alerts: "alerts",
                    pricesTrackChains: "pricesTrackChains",
                    favsLoader: "favsLoader",
                    favoriteList: "favoriteList"
                },
                outputs: {
                    switchSort: "switchSort"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 7,
                vars: 7,
                consts: [[3, "class", "items", "selectedItem", "footerTpl", "itemSelected", 4, "ngIf"], [3, "class", "items", "selectedItem", "itemSelected", 4, "ngIf"], ["appRestrictInput", "^[A-Za-z0-9:.<>\\-\\s]*$", "maxlength", "128", 3, "class", "placeholder", "ngModel", "ngModelChange", "keyup", 4, "ngIf"], ["class", "material", "columnMode", "force", 3, "sorts", "trackByProp", "scrollbarV", "count", "footerHeight", "rowHeight", "rows", "limit", "messages", "page", "activate", "mouseleave", 4, "ngIf"], ["footerTpl", ""], [3, "items", "selectedItem", "footerTpl", "itemSelected"], [3, "items", "selectedItem", "itemSelected"], ["appRestrictInput", "^[A-Za-z0-9:.<>\\-\\s]*$", "maxlength", "128", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["columnMode", "force", 1, "material", 3, "sorts", "trackByProp", "scrollbarV", "count", "footerHeight", "rowHeight", "rows", "limit", "messages", "page", "activate", "mouseleave"], ["favoriteListTable", ""], [3, "resizeable", "frozenLeft", "width", "minWidth", "prop", "name"], ["ngx-datatable-cell-template", ""], ["headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "width", "minWidth", "prop", "name"], ["headerClass", "center-column-table", "cellClass", "center-column-table", 3, "resizeable", "width", "minWidth", "maxWidth", "sortable", "prop", "name"], ["headerClass", "center-column-table", "cellClass", "center-column-table", 3, "resizeable", "width", "minWidth", "prop", "name"], [3, "resizeable", "width", "minWidth", "prop", "name"], ["headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "width", "minWidth", "sortable", "name"], [1, "fav-logo-name-container", "d-flex", "align-items-center"], [1, "favorite-token-logo"], [3, "symbol", "logoUrl", "hasWhiteBackground"], [1, "fav-name-container"], ["rel", "nofollow", 1, "fav-symbol-container", 3, "href", "click"], [3, "tokenRight", "tokenLeft", "isLink"], ["icon", "copy", 3, "ngbTooltip", "click"], ["t1", "ngbTooltip"], [1, "fav-price-container"], ["class", "fav-price", 4, "ngIf"], [1, "fav-price"], [1, "fav-variation-container"], ["class", "favorite-percent", 3, "class", 4, "ngIf"], [1, "favorite-percent"], [4, "ngIf", "ngIfElse"], ["neutralDiff", ""], ["name", "variationDown", "class", "me-1", 3, "width", 4, "ngIf"], ["name", "variationUp", "class", "me-1", 3, "width", 4, "ngIf"], ["name", "variationDown", 1, "me-1", 3, "width"], ["name", "variationUp", 1, "me-1", 3, "width"], [1, "netural-color"], [1, "favorite-graph", 3, "candles", "timeMinutes", "color", "height"], [1, "chain-image-container"], ["loading", "lazy", 1, "chain-img", 3, "src", "alt"], [1, "ms-2"], [1, "exchange-image-container"], ["loading", "lazy", 1, "exchange-img", 3, "src", "alt"], [1, "actions", "actions-column-table"], ["placement", "auto", "rel", "nofollow", 3, "ngbTooltip", "href", "click"], ["name", "pairExplorer", 3, "width"], ["placement", "auto", 3, "ngbTooltip", "click"], ["icon", "trash-can"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div"),
                    t.YNc(1, Ot, 1, 6, "app-dropdown-select", 0),
                    t.YNc(2, vt, 1, 5, "app-dropdown-select", 1),
                    t.YNc(3, ut, 2, 7, "input", 2),
                    t.qZA(),
                    t.YNc(4, Qt, 27, 75, "ngx-datatable", 3),
                    t.YNc(5, Ht, 1, 0, "ng-template", null, 4, t.W1O)),
                    2 & e && (t.Gre("header-filter ", n.containerWidth < 665 ? "justify-content-between" : null, ""),
                    t.xp6(1),
                    t.Q6J("ngIf", n.isLogged),
                    t.xp6(1),
                    t.Q6J("ngIf", n.favoriteList.length),
                    t.xp6(1),
                    t.Q6J("ngIf", n.favoriteListOriginal.length > 9),
                    t.xp6(1),
                    t.Q6J("ngIf", n.favoriteList.length && !n.favsLoader))
                },
                dependencies: [v.O5, M._e, u.u5, u.Fj, u.JJ, u.nD, u.On, U.xD, U.nE, U.UC, U.vq, q.T, G.m, A.uH, A.BN, E._L, B.lQ, j.D, K.g, v.OU, v.JJ, v.uU, F.yl, F.pt, S.aw, S.X$, r.eV1, r.Wu7, r.$a1, F.O7],
                styles: ["[_nghost-%COMP%]     .ngx-datatable.material{max-height:730px;width:100%}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important;border-color:#fff!important;border-bottom:none;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#0b1217!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#0b1217!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#fff!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#fff!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028;background-color:#f4f5f6!important;border-color:#e1e5eb!important;font-weight:500;border-bottom:.0625rem solid;border-top:.0625rem solid;font-size:14px}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#fff}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-cell{display:flex;align-items:center;line-height:1;font-size:14px}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row{cursor:pointer}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row:hover app-token-name   .token1{color:#00b8d8}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028;font-size:14px;border-color:#e1e5eb!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028;border-color:#f4f5f6;background-color:#fff!important;background-image:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#142028}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#f4f5f6}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#0b1217!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#0b1217!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028;border-color:#f4f5f6;background-color:#fff!important;background-image:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#142028}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#f4f5f6}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#0b1217!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#0b1217!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#fff!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#fff!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer{border-top:none;padding:0}@media (max-width: 1023px){[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer{margin-top:.625rem}}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .page-count{display:none}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager{height:auto;margin:0}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{border-radius:3.125rem;width:1.6875rem;height:1.6875rem;font-weight:400!important;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#142028}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#f4f5f6}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:hover{background-color:#f4f5f6}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#f4f5f6!important;color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.active a{color:#142028!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3;opacity:.2}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:#818ea3!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-footer-inner{white-space:nowrap}@media (max-width: 1023px){[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-footer-inner{display:flex;flex-direction:column;align-items:center;overflow:hidden;text-align:center}}.actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.625rem;cursor:pointer}.actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.0625rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#00b8d8!important}.actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#142028}body.dark-theme   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#fff}body.dark-theme[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#fff}body.light   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#142028}body.light[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#142028}.actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    :hover, .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    :focus{color:#00b8d8}app-line-chart[_ngcontent-%COMP%]     .line-chart-container svg  {border-radius:0!important}.favorite-token-logo[_ngcontent-%COMP%]{position:relative;width:1.375rem;height:1.375rem;margin-right:.4375rem}.fav-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;margin-left:.625rem}.fav-name-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:12px;line-height:12px}.fav-name-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:.6875rem}.fav-name-container[_ngcontent-%COMP%]   .fav-symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#00b8d8;font-weight:400;font-size:12px}.fav-name-container[_ngcontent-%COMP%]   .fav-symbol-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#00b8d8;font-weight:500;font-size:12px}.fav-name-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{cursor:pointer}.chain-image-container[_ngcontent-%COMP%], .exchange-image-container[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;line-height:20px;display:flex}.chain-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .exchange-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background-color:#fff;border-radius:3.125rem;height:1.25rem;width:1.25rem}.chain-image-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .exchange-image-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:20px;text-transform:capitalize}.fav-price-container[_ngcontent-%COMP%], .fav-variation-container[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;line-height:20px;width:10%}.fav-variation-container[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:14px;line-height:20px}.favorite-actions-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;width:10%}.favorite-actions-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .favorite-actions-container[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{height:1rem;width:1rem}@media (max-width: 1078px){.chain-image-container[_ngcontent-%COMP%], .exchange-image-container[_ngcontent-%COMP%]{width:9.375rem;margin-right:1.875rem}.fav-price-container[_ngcontent-%COMP%], .fav-variation-container[_ngcontent-%COMP%]{width:6.25rem;margin-right:1.875rem}.fav-name-container[_ngcontent-%COMP%]{width:10rem;margin-right:1.875rem}.favorite-actions-container[_ngcontent-%COMP%]{width:8.625rem;margin-right:0}}body.dark-theme   [_nghost-%COMP%]       .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#142028!important}body.dark-theme   [_nghost-%COMP%]       .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{border-color:#142028!important}.header-filter[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-end;margin-bottom:1.25rem}.header-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:16.25rem;height:2.25rem;background-color:#f4f5f6!important;color:#818ea3;font-size:13px;border-radius:.625rem;padding-left:.625rem}body.dark-theme   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#818ea3!important}body.dark-theme[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#818ea3!important}body.light   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#818ea3!important}body.light[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#818ea3!important}.header-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]    {text-transform:none}.header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#142028;min-width:10.3125rem;width:100%}body.dark-theme   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#fff}body.light   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#142028}body.light[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#142028}.header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list{width:100%}.header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec;color:#142028;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;height:2.5rem;line-height:2.5rem}body.dark-theme   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#23323c}body.light   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#fff}body.light   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#142028}body.light[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#142028}.header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#f4f5f6;color:#00b8d8!important}body.dark-theme   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#142028}body.light   [_nghost-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#f4f5f6}.header-filter[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     span{text-transform:none}"],
                changeDetection: 0
            }),
            a
        }
        )();
        var jt = l(10027);
        const Bt = ["favContainer"]
          , Gt = ["mainIcon"]
          , qt = ["favElement"]
          , Kt = function() {
            return ["fal", "times"]
        };
        function Wt(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "button", 15),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const o = t.oxw(2);
                    return t.KtG(o.toggleFavorites.emit())
                }),
                t._UZ(1, "fa-icon", 16),
                t.ALo(2, "translate"),
                t.qZA()
            }
            2 & a && (t.xp6(1),
            t.Q6J("icon", t.DdM(4, Kt))("ngbTooltip", t.lcZ(2, 2, "home.close")))
        }
        function Vt(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "app-dropdown-select", 17),
                t.NdJ("itemSelected", function(o) {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.listSelected(o))
                }),
                t.qZA()
            }
            if (2 & a) {
                const e = t.oxw(2)
                  , n = t.MAs(3);
                t.Q6J("items", e.favsListItems)("selectedItem", e.currentListItem)("footerTpl", e.loggedUser ? n : null)
            }
        }
        function Xt(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "span", 19)(2, "input", 20),
                t.NdJ("ngModelChange", function(o) {
                    t.CHM(e);
                    const i = t.oxw(3);
                    return t.KtG(i.inputFilter = o)
                })("keyup", function() {
                    t.CHM(e);
                    const o = t.oxw(3);
                    return t.KtG(o.typed$.next(o.inputFilter))
                }),
                t.ALo(3, "translate"),
                t.qZA()()()
            }
            if (2 & a) {
                const e = t.oxw(3);
                t.MT6("favs-search ", e.dashboardFavs ? "d-inline-flex justify-content-start dashboard-search-width" : null, " ", "mobileTablet" === e.mediaDevice && e.dashboardFavs ? "dashboard-search-mobile" : null, ""),
                t.xp6(2),
                t.Q6J("ngModel", e.inputFilter)("placeholder", t.lcZ(3, 7, "favorites.search_pair"))("maxlength", e.currentChain === e.Chain.Aptos ? 820 : 128)
            }
        }
        function te(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "app-dropdown-chains", 18),
                t.NdJ("chainsSelected", function(o) {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.filterByChain(o))
                }),
                t.qZA(),
                t.YNc(2, Xt, 4, 9, "div", 10),
                t.qZA()
            }
            if (2 & a) {
                const e = t.oxw(2);
                t.MT6("favs-filter ", e.dashboardFavs ? "d-inline-flex justify-content-start" : null, " ", "mobileTablet" === e.mediaDevice && e.dashboardFavs ? "dashboard-filter-mobile" : null, ""),
                t.xp6(1),
                t.Q6J("defaultChainSelected", e.defaultChain)("allChains", !0)("isFavs", !0),
                t.xp6(1),
                t.Q6J("ngIf", e.favoritesListOriginal.length > 4 && "mobileTablet" === e.mediaDevice || e.favoritesListOriginal.length > 10)
            }
        }
        function ee(a, c) {
            1 & a && (t.TgZ(0, "div", 21)(1, "p"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.TgZ(4, "p"),
            t._uU(5),
            t.ALo(6, "translate"),
            t.qZA()()),
            2 & a && (t.xp6(2),
            t.Oqu(t.lcZ(3, 2, "favorites.list_empty")),
            t.xp6(3),
            t.Oqu(t.lcZ(6, 4, "favorites.start_list")))
        }
        function ne(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "div", 21)(1, "p"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.TgZ(4, "a", 22),
                t.NdJ("click", function(o) {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return i.viewFavoritePair(o, i.defaultChain),
                    t.KtG(!1)
                }),
                t._uU(5),
                t.qZA()()()
            }
            if (2 & a) {
                const e = t.oxw(2);
                t.xp6(2),
                t.hij("", t.lcZ(3, 2, "favorites.list_empty_chain"), " "),
                t.xp6(3),
                t.hij(" ", e.getChainFullName(), " ")
            }
        }
        function oe(a, c) {
            1 & a && (t.TgZ(0, "div", 23)(1, "p"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA()()),
            2 & a && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "favorites.list_empty_this_chain")))
        }
        function ae(a, c) {
            if (1 & a && t._UZ(0, "div", 24),
            2 & a) {
                const e = t.oxw(2);
                t.Q6J("appLoading", e.favsLoader)
            }
        }
        const X = function() {
            return ["far", "star"]
        }
          , ie = function(a) {
            return {
                token: a
            }
        };
        function re(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.TgZ(0, "a", 30),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const o = t.oxw(3);
                    return t.KtG(o.addFavorite.emit())
                }),
                t._UZ(1, "fa-icon", 31),
                t.TgZ(2, "span"),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA()()
            }
            if (2 & a) {
                const e = t.oxw(3);
                t.xp6(1),
                t.Q6J("icon", t.DdM(5, X)),
                t.xp6(2),
                t.hij(" ", t.xi3(4, 2, "favorites.add_first", t.VKq(6, ie, e.tokenSymbolName)), " ")
            }
        }
        function ce(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "app-favorite", 32, 33),
                t.NdJ("favoritePairSelected", function(o) {
                    t.CHM(e);
                    const i = t.oxw(3);
                    return t.KtG(i.favoritePairSelected.emit(o))
                }),
                t.qZA(),
                t.BQk()
            }
            if (2 & a) {
                const e = c.$implicit
                  , n = t.oxw(3);
                t.xp6(1),
                t.Q6J("favorite", e)("chain", e.chain)("isEditing", n.isEditing)("alerts", n.alertsList)("pairSelected", n.pairSelected)("currency", n.currency)("showCharts", n.areFavChartsShown)("custom", n.isCustom)("typeOfAction", "emit" === n.typeOfAction && n.currentChain === e.chain ? "emit" : "reloadRoute")
            }
        }
        const se = function() {
            return {
                threshold: .5
            }
        };
        function le(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 25, 26),
                t.YNc(3, re, 5, 8, "a", 27),
                t.YNc(4, ce, 3, 9, "ng-container", 28),
                t.TgZ(5, "div", 29),
                t.NdJ("intersectionChange", function(o) {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.scrolled(o))
                }),
                t._uU(6, " Loading more favorites "),
                t.qZA()(),
                t.BQk()
            }
            if (2 & a) {
                const e = t.oxw(2);
                t.xp6(1),
                t.MT6("favs-container ", e.dashboardFavs ? "dashboard-favs" : null, " ", e.pairSelected ? "pairexplorer-list" : null, ""),
                t.xp6(2),
                t.Q6J("ngIf", e.showStar()),
                t.xp6(1),
                t.Q6J("ngForOf", e.favoritesList)("ngForTrackBy", e.trackByFavorite),
                t.xp6(1),
                t.Q6J("intersectionOptions", t.DdM(9, se))("hidden", e.favoritesList.length < e.getMaxIncrement() || e.favoritesListOriginal.length === e.favoritesList.length || e.defaultChain && e.favoritesList.length === e.favoritesChainLength)
            }
        }
        const de = function(a) {
            return {
                fixed: a
            }
        };
        function he(a, c) {
            if (1 & a && (t.TgZ(0, "footer", 34),
            t.GkF(1, 35),
            t.qZA()),
            2 & a) {
                const e = t.oxw(2)
                  , n = t.MAs(3);
                t.Q6J("ngClass", t.VKq(2, de, e.fixedButton)),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e.loggedUser ? n : null)
            }
        }
        const ge = function(a) {
            return {
                off: a
            }
        };
        function _e(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 3)(2, "strong"),
                t._uU(3),
                t.ALo(4, "translate"),
                t._UZ(5, "fa-icon", 4),
                t.ALo(6, "translate"),
                t.qZA(),
                t.TgZ(7, "div", 5)(8, "fa-icon", 6),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const o = t.oxw();
                    return t.KtG(o.toggleCharts())
                }),
                t.qZA(),
                t.YNc(9, Wt, 3, 5, "button", 7),
                t.qZA()(),
                t.TgZ(10, "div"),
                t.YNc(11, Vt, 1, 3, "app-dropdown-select", 8),
                t.TgZ(12, "app-dropdown-select", 9),
                t.NdJ("itemSelected", function(o) {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.switchSort(o))
                }),
                t.qZA()(),
                t.YNc(13, te, 3, 8, "div", 10),
                t.YNc(14, ee, 7, 6, "div", 11),
                t.YNc(15, ne, 6, 4, "div", 11),
                t.YNc(16, oe, 4, 3, "div", 12),
                t.YNc(17, ae, 1, 1, "div", 13),
                t.YNc(18, le, 7, 10, "ng-container", 0),
                t.YNc(19, he, 2, 4, "footer", 14),
                t.BQk()
            }
            if (2 & a) {
                const e = t.oxw();
                t.xp6(3),
                t.hij("", t.lcZ(4, 17, "pair_explorer.favorite_pairs"), " "),
                t.xp6(2),
                t.s9C("ngbTooltip", t.lcZ(6, 19, "pair_explorer.favorite_info")),
                t.xp6(3),
                t.Q6J("ngClass", t.VKq(21, ge, e.areFavChartsShown)),
                t.xp6(1),
                t.Q6J("ngIf", "desktop" === e.mediaDevice && !!e.pairSelected),
                t.xp6(1),
                t.Gre("list-order-container ", e.favoritesListOriginal.length < 1 ? "mb-3" : null, ""),
                t.xp6(1),
                t.Q6J("ngIf", e.loggedUser),
                t.xp6(1),
                t.Q6J("items", e.favsSorting)("selectedItem", e.currentSortFilterItem),
                t.xp6(1),
                t.Q6J("ngIf", e.favoritesListOriginal.length > -1),
                t.xp6(1),
                t.Q6J("ngIf", !e.defaultChain && !e.favoritesList.length && !e.favsLoader),
                t.xp6(1),
                t.Q6J("ngIf", !!e.defaultChain && !e.favoritesList.length && e.defaultChain !== e.currentChain && !e.favsLoader),
                t.xp6(1),
                t.Q6J("ngIf", !!e.defaultChain && !e.favoritesList.length && e.defaultChain === e.currentChain),
                t.xp6(1),
                t.Q6J("ngIf", !!e.favsLoader),
                t.xp6(1),
                t.Q6J("ngIf", !e.favsLoader),
                t.xp6(1),
                t.Q6J("ngIf", e.loggedUser && "desktop" === e.mediaDevice)
            }
        }
        function fe(a, c) {
            if (1 & a && (t.ynx(0),
            t.TgZ(1, "div", 37),
            t._UZ(2, "fa-icon", 31),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.ALo(6, "translate"),
            t.qZA(),
            t.TgZ(7, "span"),
            t._uU(8),
            t.ALo(9, "translate"),
            t.qZA()(),
            t.BQk()),
            2 & a) {
                const e = t.oxw(2);
                t.xp6(2),
                t.Q6J("icon", t.DdM(9, X)),
                t.xp6(2),
                t.Oqu(e.currentChain ? t.lcZ(5, 3, "favorites.list_empty_chain") + e.currentChainName : t.lcZ(6, 5, "favorites.list_empty")),
                t.xp6(4),
                t.Oqu(t.lcZ(9, 7, "favorites.start_list_dashboard"))
            }
        }
        function pe(a, c) {
            if (1 & a) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "app-dashboard-favorite", 36),
                t.NdJ("switchSort", function(o) {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.switchSort(o))
                }),
                t.qZA(),
                t.YNc(2, fe, 10, 10, "ng-container", 0),
                t.BQk()
            }
            if (2 & a) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("favsLoader", e.favsLoader)("pricesTrackChains", e.pairPriceTrackerChain)("favoriteList", e.favoritesListDashboard),
                t.xp6(1),
                t.Q6J("ngIf", !e.favoritesListDashboard.length || e.favsLoader)
            }
        }
        function Ce(a, c) {
            if (1 & a && t._UZ(0, "app-manage-favs-list", 38),
            2 & a) {
                const e = t.oxw();
                t.Q6J("isFavsOpen", !0)("toggleFavs", e.toggleFavorites)
            }
        }
        function me(a, c) {
            1 & a && t._UZ(0, "fa-icon", 39)
        }
        const J = "favorites"
          , $ = {
            withChart: {
                mobileTablet: 10,
                desktop: 20
            },
            noChart: {
                mobileTablet: 15,
                desktop: 30
            },
            dashboard: {
                mobileTablet: 10,
                desktop: 15
            }
        }
          , Pe = {
            value: r.Tpk,
            label: "Main List (...)",
            id: r.Tpk
        }
          , tt = "showFavGraphs"
          , z = "favsChain";
        let be = (()=>{
            class a extends f.K9 {
                get currentChain() {
                    return this._exchangeService.chain ?? null
                }
                constructor(e, n, o, i, s, d, C, x, Me, Oe, ve) {
                    super(),
                    this._exchangeService = e,
                    this._favoritePairsService = n,
                    this._authenticationService = o,
                    this._priceTrackService = i,
                    this._cdRef = s,
                    this._exchangeApiService = d,
                    this._breakpointObserver = C,
                    this._environment = x,
                    this._priceAlertsService = Me,
                    this._routingService = Oe,
                    this._webSocketService = ve,
                    this.pairSelected = "",
                    this.currency = "usd",
                    this.tokenData = null,
                    this.hiddenFavorites = !1,
                    this.dashboardFavs = !1,
                    this.addFavorite = new t.vpe,
                    this.toggleFavorites = new t.vpe,
                    this.favoritePairSelected = new t.vpe,
                    this.typeOfAction = "reloadRoute",
                    this.fixedButton = !1,
                    this.areFavChartsShown = !1,
                    this.favsLists = [],
                    this.currentListItem = {
                        ...Pe
                    },
                    this.favsListItems = [{
                        ...this.currentListItem
                    }],
                    this.currentList = r.Tpk,
                    this.favsSorting = [{
                        value: r.zjc.Update,
                        label: r.zjc.Update
                    }],
                    this.currentSortFilterItem = {
                        value: r.zjc.Update,
                        label: r.zjc.Update
                    },
                    this.appContext = this._environment.app_scope,
                    this.Chain = r.qop,
                    this.favoritesList = [],
                    this.favoritesListDashboard = [],
                    this.favoritesListOriginal = [],
                    this._pairsSavedNew = [],
                    this.isEditing = !1,
                    this.defaultChain = null,
                    this.inputFilter = "",
                    this.favsLoader = !1,
                    this.loggedUser = !1,
                    this.typed$ = new k.x,
                    this.pairPriceTrackerChain = [],
                    this.alertsList = null,
                    this._maxFavoriteItemsVisible = this.getMaxIncrement(),
                    this.mediaDevice = "",
                    this.favoritesChainLength = 0,
                    this.isCustom = !1,
                    this.wsConnected$ = new k.x,
                    this._favoritesChanges$ = null,
                    this._priceTrackerSubscribeMap$ = new Map,
                    this._forceUpdatePrices$ = new m.X(null)
                }
                ngOnInit() {
                    this._checkFavoritesActiveTrackers(),
                    this._breakpointObserver.observe([M.K5]).pipe((0,
                    f.sL)(this)).subscribe(e=>{
                        this.mediaDevice = e.breakpoints[M.K5] ? "mobileTablet" : "desktop",
                        this._cdRef.detectChanges()
                    }
                    ),
                    this.defaultChain = f._Z.getString(z) ?? null,
                    this.loggedUser = this._favoritePairsService.loggedUser,
                    this.favsLoader = !!this.loggedUser,
                    this._authenticationService.deviceIdDisconnected$.pipe((0,
                    f.sL)(this), (0,
                    Z.T)(1)).subscribe(()=>{
                        if (this.pairPriceTracker && this.pairPriceTracker.unTrackAll(),
                        this.pairPriceTrackerChain.length > 0)
                            for (const e of this.pairPriceTrackerChain)
                                e.unTrackAll()
                    }
                    ),
                    this.exchange = this._exchangeService.exchange,
                    this.typed$.pipe((0,
                    f.sL)(this), (0,
                    I.D)(e=>e ? (0,
                    w.H)(700) : L.E), (0,
                    h.b)(e=>{
                        this.dashboardFavs ? this.favoritesListDashboard = [...this.filterFavs(e)] : this.favoritesList = this._sliceFavs([...this.filterFavs(e)]),
                        this.switchSort(this.currentSortFilterItem),
                        this._cdRef.detectChanges()
                    }
                    )).subscribe(),
                    this._maxFavoriteItemsVisible = this.getMaxIncrement(),
                    this.areFavChartsShown = !!this.dashboardFavs || (f._Z.get(tt) ?? !1),
                    this.favsSorting = this._favoritePairsService.favsSortingOptions.filter((e,n,o)=>n === o.findIndex(i=>i.label === e.label)),
                    this._favoritePairsService.favoritesOrder$.pipe((0,
                    f.sL)(this), (0,
                    h.b)(e=>{
                        this.currentSortFilterItem = this._favoritePairsService.favsSortingOptions.find(n=>n.value === e)
                    }
                    )).subscribe(),
                    this.loggedUser || this._favoritesChanges(),
                    this.dashboardFavs ? this._favoritePairsService.favoritesList$.pipe((0,
                    g.q)(1), (0,
                    h.b)(e=>{
                        this.favsLists = e,
                        this.favsListItems = e.map(n=>({
                            label: this._favoritePairsService.formatListName(n),
                            value: n.name,
                            id: n.id
                        })),
                        this.currentList = f._Z.getString(r.R_O) ?? r.Tpk,
                        this.currentListItem = this.favsListItems.find(n=>n.id === this.currentList),
                        this._fetchFavsFromList(this.currentListItem.id ?? r.Tpk).subscribe()
                    }
                    )).subscribe() : this._favoritePairsService.favoritesList$.pipe((0,
                    f.sL)(this), (0,
                    h.b)(e=>{
                        this.favsLists = [...e],
                        this.favsListItems = e.map(i=>{
                            const s = {
                                label: this._favoritePairsService.formatListName(i),
                                value: i.name,
                                id: i.id
                            };
                            return i.main && (s.templateLabel = this.mainIcon),
                            s
                        }
                        );
                        let n = !1;
                        const o = f._Z.getString(r.R_O);
                        this.currentList !== r.Tpk && this.currentList !== o && (n = !0),
                        this.currentList = o ?? r.Tpk,
                        this.currentListItem = this.favsListItems.find(i=>i?.id === this.currentList) ?? this.favsListItems[0] ?? "",
                        this._changeList(this.currentListItem?.id ?? r.Tpk).pipe((0,
                        p.w)(()=>n ? this._updateFavs().pipe((0,
                        h.b)(()=>{
                            this._subscribeFavoritesPrices(),
                            this.favsLoader = !1,
                            this._cdRef.detectChanges()
                        }
                        )) : (0,
                        _.of)("noop"))).subscribe()
                    }
                    )).subscribe(),
                    this._initAlerts()
                }
                ngAfterViewInit() {
                    this.favContainer && ((0,
                    P.R)(this.favContainer.nativeElement, "mouseenter").pipe((0,
                    f.sL)(this)).subscribe(()=>{
                        for (const e of this.favs)
                            e.isHover = !1,
                            e.showIconDelete = !1,
                            e.markDeleteForCheck()
                    }
                    ),
                    (0,
                    P.R)(this.favContainer.nativeElement, "mouseleave").pipe((0,
                    f.sL)(this)).subscribe(()=>{
                        for (const e of this.favs)
                            e.isHover = !1,
                            e.showIconDelete = !1,
                            e.markDeleteForCheck()
                    }
                    ))
                }
                onDestroy() {
                    this.wsConnected$.next(),
                    this.wsConnected$.complete()
                }
                _checkFavoritesActiveTrackers() {
                    for (const e of r.fUz) {
                        const o = this._priceTrackService.getPairsTracker(e, `${e}${J}`.toLowerCase());
                        o && (this.pairPriceTrackerChain = [...this.pairPriceTrackerChain, o])
                    }
                }
                _favoritesChanges() {
                    this._favoritesChanges$ = this._favoritePairsService.favorites$.pipe((0,
                    f.sL)(this), (0,
                    b.U)((e,n)=>(n > 0 && (e.length > this._pairsSavedNew.length && this._addFavorite(e),
                    e.length < this._pairsSavedNew.length && this._deleteFavorite(e)),
                    this._pairsSavedNew = this.dashboardFavs && this.currentChain ? e.filter(o=>o.chain === this.currentChain) : e ?? [],
                    n))).subscribe(e=>{
                        this._webSocketService.isConnected$().pipe((0,
                        et.R)(this.wsConnected$), (0,
                        H.h)(n=>n), (0,
                        nt.V)(3e3), (0,
                        N.K)(()=>(console.error("FavoritePairs: could not connect to real-time data source"),
                        (0,
                        _.of)(!0))), (0,
                        ot.x)(), (0,
                        p.w)(n=>n && 0 === e ? this._updateFavs().pipe((0,
                        h.b)(()=>{
                            this._subscribeFavoritesPrices(),
                            this.favsLoader = !1,
                            this._cdRef.detectChanges()
                        }
                        )) : (0,
                        _.of)("noop"))).subscribe(()=>{
                            this.wsConnected$.next()
                        }
                        )
                    }
                    )
                }
                scrolled([e]) {
                    e.isIntersecting && this.favoritesListOriginal.length > this.favoritesList.length && (this._maxFavoriteItemsVisible = this._maxFavoriteItemsVisible + this.getMaxIncrement(),
                    this.switchSort(this.currentSortFilterItem))
                }
                filterFavs(e) {
                    let n = [...this.favoritesListOriginal];
                    return n = null == this.defaultChain || this.dashboardFavs ? [...n] : n.filter(o=>o.chain === this.defaultChain),
                    this.defaultChain && (this.favoritesChainLength = n.length),
                    n = n.filter(o=>{
                        const i = new RegExp(e,"ig");
                        return i.test(o.name) || i.test(o.pair)
                    }
                    ),
                    n
                }
                filterByChain(e, n=null) {
                    n && (this.favoritesList = n),
                    this.defaultChain = 1 === e.length ? e[0] : null,
                    this.favoritesList = [...this.filterFavs(this.inputFilter)],
                    1 === e.length ? (this.favoritesChainLength = this.favoritesList.length,
                    f._Z.setString(z, e[0])) : f._Z.delete(z),
                    this.switchSort(this.currentSortFilterItem)
                }
                switchSort(e) {
                    switch (this.currentSortFilterItem !== e && (this._maxFavoriteItemsVisible = this.getMaxIncrement(),
                    f._Z.setString(r.QS8, e.value),
                    this._favoritePairsService.setFavoritesOrder(e.value, this.currentListItem.id)),
                    e.value) {
                    case r.zjc.Update:
                    case r.zjc.Updated:
                        this._sortByUpdate();
                        break;
                    case r.zjc.Name:
                        this._sortByName();
                        break;
                    case r.zjc.Price:
                        this._sortByPrice();
                        break;
                    case r.zjc.Win24:
                    case r.zjc.Change:
                        this._sortByChange();
                        break;
                    case r.zjc.Loss24:
                    case r.zjc.ChangeReverse:
                        this._sortByChangeReverse()
                    }
                }
                getMaxIncrement() {
                    const e = "mobileTablet" === this.mediaDevice ? "mobileTablet" : "desktop";
                    return this.dashboardFavs ? $.dashboard[e] : this.areFavChartsShown ? $.withChart[e] : $.noChart[e]
                }
                trackByFavorite(e, n) {
                    return `${n.pair}${n.diffPrice}${n.price}`
                }
                get tokenSymbolName() {
                    return `${f.LC.safeText(this.tokenData?.symbol_vs ?? "", 20)}/${f.LC.safeText(this.tokenData?.symbol ?? "", 20)}`
                }
                toggleCharts() {
                    this.areFavChartsShown = !this.areFavChartsShown,
                    f._Z.set(tt, this.areFavChartsShown),
                    this.areFavChartsShown && this.favs.forEach((e,n)=>{
                        if (n < this._maxFavoriteItemsVisible) {
                            const o = this._exchangeApiService.getAdapter(e.chain ?? r.qop.Ethereum);
                            e.getPriceHistory(o)
                        }
                    }
                    ),
                    this._cdRef.detectChanges()
                }
                get currentChainName() {
                    return this.currentChain ? r.CXF.getChainName(this.currentChain) : ""
                }
                getChainFullName() {
                    return r.CXF.getChainName(this.defaultChain ?? r.qop.Ethereum)
                }
                viewFavoritePair(e, n) {
                    if (e.stopImmediatePropagation(),
                    e.ctrlKey || e.metaKey)
                        return void this._routingService.windowNavigate(`/${n ?? r.qop.Ethereum}/${O.$.PairExplorer}`, "_blank", "noopener");
                    const o = this._routingService.getCurrentScrollTopPosition("#favorite-pairs") || {};
                    this._routingService.reloadRoute(`${n ?? r.qop.Ethereum}/${O.$.PairExplorer}`, o)
                }
                showStar() {
                    return !1
                }
                listSelected(e) {
                    e.id !== this.currentList && (this.favsLoader = !0,
                    this.inputFilter = "",
                    this.favoritesListOriginal = [],
                    this._changeList(e.id ?? r.Tpk).pipe((0,
                    p.w)(n=>(this._pairsSavedNew = [...this.dashboardFavs && this.currentChain ? n.filter(o=>o.chain === this.currentChain) : n ?? []],
                    this._updateFavs()))).subscribe(()=>{
                        this._subscribeFavoritesPrices(),
                        this.favsLoader = !1,
                        this._cdRef.detectChanges()
                    }
                    ))
                }
                _changeList(e) {
                    return this.currentList = e,
                    this._favoritePairsService.setStorageListName(e),
                    this._fetchFavsFromList(e)
                }
                _fetchFavsFromList(e) {
                    return this._favoritePairsService.getFavsList(e).pipe((0,
                    g.q)(1), (0,
                    h.b)(()=>{
                        this._favoritesChanges$ || this._favoritesChanges()
                    }
                    ))
                }
                _deleteFavorite(e) {
                    for (const [n,o] of this.favoritesListOriginal.entries())
                        if (!e.some(i=>o.pair === i.pair)) {
                            this.favoritesListOriginal.splice(n, 1),
                            this._pairsSavedNew.splice(n, 1);
                            for (const i of this.pairPriceTrackerChain)
                                i.unTrack(o.pair)
                        }
                    this._recreateOriginalList(),
                    this.switchSort(this.currentSortFilterItem)
                }
                _addFavorite(e) {
                    const n = new Map
                      , o = Date.now();
                    for (const i of e)
                        if (!this.favoritesListOriginal.some(s=>s.pair === i.pair)) {
                            const s = {
                                pair: i.pair,
                                price: i.price || "",
                                price_color: "buy-color",
                                name: i.symbol,
                                symbol: i.symbol,
                                exchange: i.exchange || r.ibW,
                                isStableNativePair: i.isStableNativePair,
                                symbolRef: i.symbolRef,
                                updatedAt: o,
                                createdAt: o,
                                chain: i.chain,
                                logo: i.logo,
                                listId: i?.listId ?? ""
                            };
                            this.favoritesListOriginal.unshift(s),
                            this._pairsSavedNew.push(s),
                            n.set(i?.chain ?? r.qop.Ethereum, i.pair)
                        }
                    if (this.switchSort(this.currentSortFilterItem),
                    n.size > 0)
                        for (const [i,s] of n.entries()) {
                            if (!this.pairPriceTrackerChain.some(d=>d.chain === i)) {
                                const d = this._priceTrackService.startTracking(i, J, new Set(...s));
                                this.pairPriceTrackerChain = [...this.pairPriceTrackerChain, d],
                                this._subscribeToChain(d)
                            }
                            for (const d of this.pairPriceTrackerChain)
                                d.chain === i && d.track(new Set([s]))
                        }
                    this._cdRef.detectChanges()
                }
                _sliceFavs(e) {
                    return e.slice(0, this._maxFavoriteItemsVisible)
                }
                _updateFavs() {
                    this.dashboardFavs ? this.favoritesListDashboard = [] : this.favoritesList = [];
                    const e = []
                      , n = this._pairsSavedNew.map(o=>{
                        if (!this.loggedUser && !o.symbolRef) {
                            const i = "";
                            return this._exchangeApiService.getAdapter(o.chain ?? r.qop.Ethereum).getPairSummary(o.pair).pipe((0,
                            g.q)(1), (0,
                            h.b)(d=>{
                                this._favoritePairsService.addSymbolVsAndChain(o, r.LJP.isStableNativePair(d.type), d.token.symbol, d.tokenRef.symbol, o.chain ?? r.qop.Ethereum, i)
                            }
                            ), (0,
                            h.b)(()=>{
                                e.unshift(this._addFavToArray(o)),
                                this.favoritesListOriginal = [...e.sort((d,C)=>(new Date(C?.createdAt ? C.createdAt : C?.updatedAt ?? 0).getTime() ?? 0) - (new Date(d?.createdAt ? d.createdAt : d?.updatedAt ?? 0).getTime() ?? 0))]
                            }
                            ))
                        }
                        return this.loggedUser || o.symbolRef ? (e.unshift(this._addFavToArray(o)),
                        this.favoritesListOriginal = [...e.sort((i,s)=>(new Date(s?.createdAt ? s.createdAt : s?.updatedAt ?? 0).getTime() ?? 0) - (new Date(i?.createdAt ? i.createdAt : i?.updatedAt ?? 0).getTime() ?? 0))],
                        (0,
                        _.of)(`logged user OR fav has symbolRef: ${o.symbolRef}`)) : (0,
                        _.of)("noop")
                    }
                    );
                    return (0,
                    at.D)(n).pipe((0,
                    N.K)(o=>(console.warn("Favorites: could not fetch favorites", o),
                    (0,
                    _.of)([]))), (0,
                    h.b)(()=>{
                        this._recreateOriginalList(),
                        this.switchSort(this.currentSortFilterItem)
                    }
                    ))
                }
                _subscribeFavoritesPrices() {
                    const e = [...this.favoritesListOriginal];
                    let n;
                    switch (this.currentSortFilterItem.value) {
                    case r.zjc.Update:
                        n = [...e].reverse();
                        break;
                    case r.zjc.Price:
                        n = [...e].sort((o,i)=>(i.price ?? 0) - (o.price ?? 0));
                        break;
                    default:
                        n = [...e].sort((o,i)=>{
                            const s = o.name.toLowerCase()
                              , d = i.name.toLowerCase();
                            return d < s ? -1 : d > s ? 1 : 0
                        }
                        )
                    }
                    this._subscribePairChainArray(n)
                }
                _subscribePairChainArray(e) {
                    const n = e.reduce((o,i)=>(o[i.chain] || (o[i.chain] = []),
                    o[i.chain].push(i),
                    o), {});
                    for (const o of Object.keys(n)) {
                        const i = n[o].map(x=>x.pair)
                          , s = this.pairPriceTrackerChain.findIndex(x=>x.chain === o);
                        let d, C;
                        for (-1 === s ? (({arrayIndex: d, priceTracker: C} = this._subscribePairArrayChunk(o ?? r.qop.Ethereum, i)),
                        this.pairPriceTrackerChain = [...this.pairPriceTrackerChain, C]) : ({arrayIndex: d, priceTracker: C} = this._subscribePairArrayChunk(o ?? r.qop.Ethereum, i, 0, this.pairPriceTrackerChain[s], !0)); d < i.length; ) {
                            const {arrayIndex: x} = this._subscribePairArrayChunk(o ?? r.qop.Ethereum, i, d, C);
                            d = x
                        }
                    }
                    this._subscribeToPrices()
                }
                _subscribePairArrayChunk(e, n, o=0, i=null, s=!1) {
                    const d = n.slice(o, o + y.GG);
                    return 0 !== o || s ? null == i ? console.warn(`No price tracker defined for chain ${e}`) : i.track(new Set(d)) : i = this._priceTrackService.startTracking(e, J, new Set(d)),
                    {
                        arrayIndex: o += d.length,
                        priceTracker: i
                    }
                }
                _subscribeToPrices() {
                    for (const e of this.pairPriceTrackerChain)
                        this._priceTrackerSubscribeMap$.get(e.chain) ? this._forceUpdatePrices$.next() : this._subscribeToChain(e)
                }
                _subscribeToChain(e) {
                    if (!this._priceTrackerSubscribeMap$.get(e.chain)) {
                        const o = (0,
                        it.a)([e.pricesUpdates$, this._forceUpdatePrices$]).pipe((0,
                        f.sL)(this), (0,
                        D.g)(50)).subscribe(i=>{
                            const s = i[0];
                            for (const d of s)
                                for (const C of this.favoritesListOriginal)
                                    C.pair === d.id && (C.diffPrice = d && d.price24h ? +(100 * (d.usd / d.price24h - 1)).toFixed(2) : 0,
                                    C.price_color = C.diffPrice >= 0 ? "buy-color" : "sell-color",
                                    C.price = d.usd,
                                    C.price24h = {
                                        priceVariation: d.price24h
                                    });
                            this._pairsSavedNew = [...this.favoritesListOriginal],
                            this._recreateOriginalList(),
                            this.switchSort(this.currentSortFilterItem),
                            this._cdRef.detectChanges()
                        }
                        );
                        this._priceTrackerSubscribeMap$.set(e.chain, o)
                    }
                }
                _sortByUpdate() {
                    const e = [...this.filterFavs(this.inputFilter)];
                    this.dashboardFavs ? this.favoritesListDashboard = e : this.favoritesList = [...this._sliceFavs(e)],
                    this._cdRef.detectChanges()
                }
                _sortByName() {
                    let e = [...this.filterFavs(this.inputFilter)];
                    e.sort((n,o)=>{
                        const i = n.name.toLowerCase()
                          , s = o.name.toLowerCase();
                        return i < s ? -1 : i > s ? 1 : 0
                    }
                    ),
                    this.dashboardFavs || (e = [...this._sliceFavs(e)]),
                    this.dashboardFavs ? this.favoritesListDashboard = e : this.favoritesList = [...e],
                    this._cdRef.detectChanges()
                }
                _sortByPrice() {
                    let e = [...this.filterFavs(this.inputFilter)];
                    e.sort((n,o)=>(o.price ?? 0) - (n.price ?? 0)),
                    this.dashboardFavs || (e = [...this._sliceFavs(e)]),
                    this.dashboardFavs ? this.favoritesListDashboard = e : this.favoritesList = [...e],
                    this._cdRef.detectChanges()
                }
                _sortByChange() {
                    let e = [...this.filterFavs(this.inputFilter)];
                    e.sort((n,o)=>(o.diffPrice ?? 0) - (n.diffPrice ?? 0)),
                    this.dashboardFavs || (e = [...this._sliceFavs(e)]),
                    this.dashboardFavs ? this.favoritesListDashboard = e : this.favoritesList = [...e],
                    this._cdRef.detectChanges()
                }
                _sortByChangeReverse() {
                    let e = [...this.filterFavs(this.inputFilter)];
                    e.sort((n,o)=>(n.diffPrice ?? 0) - (o.diffPrice ?? 0)),
                    this.dashboardFavs || (e = this._sliceFavs(e)),
                    this.dashboardFavs ? this.favoritesListDashboard = e : this.favoritesList = [...e],
                    this._cdRef.detectChanges()
                }
                _recreateOriginalList() {
                    this.favoritesListOriginal = [...this.favoritesListOriginal],
                    this._cdRef.detectChanges()
                }
                _addFavToArray(e) {
                    return {
                        pair: e.pair,
                        price: e.price || "",
                        price_color: "buy-color",
                        diffPrice: e.price && e.price24h?.priceVariation ? +(100 * (e.price / e.price24h.priceVariation - 1)).toFixed(2) : 0,
                        name: e.name,
                        symbol: e.symbol,
                        exchange: e.exchange || r.ibW,
                        updatedAt: e.updatedAt,
                        createdAt: e.createdAt,
                        isStableNativePair: e.isStableNativePair,
                        chain: e.chain,
                        symbolRef: e.symbolRef,
                        logo: e.logo,
                        listId: e?.listId ?? ""
                    }
                }
                _initAlerts() {
                    this._priceAlertsService.alertsMapUpdated$.pipe((0,
                    f.sL)(this), (0,
                    H.h)(e=>null != e), (0,
                    h.b)(e=>{
                        this._priceAlertsService.updateUncheckedAlertsForAllChains(e),
                        this.alertsList = e,
                        this._cdRef.detectChanges()
                    }
                    )).subscribe()
                }
            }
            return a.\u0275fac = function(e) {
                return new (e || a)(t.Y36(r.OqV),t.Y36(r.SBY),t.Y36(y.$h),t.Y36(r.UW7),t.Y36(t.sBO),t.Y36(r.hmC),t.Y36(R.Yg),t.Y36(y.qA),t.Y36(r.Pld),t.Y36(y.Zn),t.Y36(r.p9V))
            }
            ,
            a.\u0275cmp = t.Xpm({
                type: a,
                selectors: [["app-favorites-list"]],
                viewQuery: function(e, n) {
                    if (1 & e && (t.Gf(Bt, 5),
                    t.Gf(Gt, 5),
                    t.Gf(qt, 5)),
                    2 & e) {
                        let o;
                        t.iGM(o = t.CRH()) && (n.favContainer = o.first),
                        t.iGM(o = t.CRH()) && (n.mainIcon = o.first),
                        t.iGM(o = t.CRH()) && (n.favs = o)
                    }
                },
                inputs: {
                    pairSelected: "pairSelected",
                    currency: "currency",
                    tokenData: "tokenData",
                    hiddenFavorites: "hiddenFavorites",
                    dashboardFavs: "dashboardFavs",
                    typeOfAction: "typeOfAction",
                    fixedButton: "fixedButton"
                },
                outputs: {
                    addFavorite: "addFavorite",
                    toggleFavorites: "toggleFavorites",
                    favoritePairSelected: "favoritePairSelected"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 6,
                vars: 2,
                consts: [[4, "ngIf"], ["footerTpl", ""], ["mainIcon", ""], [1, "favs-header"], ["icon", "info-circle", "placement", "bottom", 1, "ms-1", 3, "ngbTooltip"], [1, "d-flex", "align-items-center"], ["icon", "chart-column", 1, "me-2", "chart-hide", 3, "ngClass", "click"], ["type", "button", "class", "close", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "items", "selectedItem", "footerTpl", "itemSelected", 4, "ngIf"], [3, "items", "selectedItem", "itemSelected"], [3, "class", 4, "ngIf"], ["class", "favs-empty", 4, "ngIf"], ["class", "fav-item", 4, "ngIf"], ["class", "favs-loading", 3, "appLoading", 4, "ngIf"], ["class", "footer-favs", 3, "ngClass", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], [3, "items", "selectedItem", "footerTpl", "itemSelected"], [3, "defaultChainSelected", "allChains", "isFavs", "chainsSelected"], [1, "search"], ["appRestrictInput", "^[\\d\\s./:<>A-Za-z\\-_]*$", 3, "ngModel", "placeholder", "maxlength", "ngModelChange", "keyup"], [1, "favs-empty"], ["href", "javascript:", 3, "click"], [1, "fav-item"], [1, "favs-loading", 3, "appLoading"], ["role", "list"], ["favContainer", ""], ["class", "fav-item fav-item-empty", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["appIntersection", "", 1, "message", 3, "intersectionOptions", "hidden", "intersectionChange"], [1, "fav-item", "fav-item-empty", 3, "click"], [3, "icon"], ["role", "listitem", 1, "fav-item", 3, "favorite", "chain", "isEditing", "alerts", "pairSelected", "currency", "showCharts", "custom", "typeOfAction", "favoritePairSelected"], ["favElement", ""], [1, "footer-favs", 3, "ngClass"], [3, "ngTemplateOutlet"], [3, "favsLoader", "pricesTrackChains", "favoriteList", "switchSort"], [1, "default-favorite"], [3, "isFavsOpen", "toggleFavs"], ["icon", "thumbtack", 1, "main-icon-list"]],
                template: function(e, n) {
                    1 & e && (t.YNc(0, _e, 20, 23, "ng-container", 0),
                    t.YNc(1, pe, 3, 4, "ng-container", 0),
                    t.YNc(2, Ce, 1, 2, "ng-template", null, 1, t.W1O),
                    t.YNc(4, me, 1, 0, "ng-template", null, 2, t.W1O)),
                    2 & e && (t.Q6J("ngIf", !n.dashboardFavs),
                    t.xp6(1),
                    t.Q6J("ngIf", n.dashboardFavs))
                },
                dependencies: [v.O5, A.uH, A.BN, E._L, v.mk, M._e, jt.n, u.u5, u.Fj, u.JJ, u.nD, u.On, M.TH, v.ax, bt, F.hq, v.tP, Yt, K.g, S.aw, S.X$, F.O7],
                styles: ["[_nghost-%COMP%]{display:block;background-color:#f4f5f6;border-radius:1rem;padding:1rem 0;min-height:35rem}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]{background-color:#142028}body.dark-theme   [_nghost-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]{background-color:#f4f5f6}body.light   [_nghost-%COMP%]{background-color:#f4f5f6}[_nghost-%COMP%]   .favs-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:.625rem;padding:0 .25rem 0 1rem}[_nghost-%COMP%]   .favs-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:14px;line-height:20px;text-transform:uppercase;color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.dark-theme   [_nghost-%COMP%]   .favs-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}body.light   [_nghost-%COMP%]   .favs-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]{align-items:center;display:flex;gap:.25rem;justify-content:space-between;padding:0 .625rem}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]    {text-transform:none;width:50%;z-index:99999}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{width:100%}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#e2e7ec;color:#142028;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;height:2.5rem;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#23323c}body.dark-theme   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#23323c}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#e2e7ec}body.light   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#fff}body.dark-theme   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#142028}body.light   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#142028}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected fa-icon{display:flex;justify-content:flex-end;flex:1;margin-right:.25rem}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec;color:#142028;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;height:2.5rem;line-height:2.5rem}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#23323c}body.dark-theme   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#23323c}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec}body.light   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#fff}body.dark-theme   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#142028}body.light   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#142028}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#f4f5f6;color:#00b8d8!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#142028}body.dark-theme   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#f4f5f6}body.light   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#f4f5f6}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:last-child{border-bottom-left-radius:.9375rem;border-bottom-right-radius:.9375rem}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#142028;min-width:9.0625rem}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#fff}body.dark-theme   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#142028}body.light   [_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#142028}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list{width:100%;max-height:200px;overflow-y:auto}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .label{text-transform:none}[_nghost-%COMP%]   .list-order-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-no-radius{border-radius:.625rem .625rem 0 0}[_nghost-%COMP%]   .favs-empty[_ngcontent-%COMP%]{padding:0 1rem;font-size:12px;font-weight:400;display:flex;flex-direction:column;gap:.625rem;margin-bottom:1.25rem}[_nghost-%COMP%]   .favs-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]{padding:0 .625rem;display:flex;align-items:center;gap:.3125rem;margin-bottom:1rem;margin-top:1rem;justify-content:space-between}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]    {width:21%}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .dropdown-content>input, [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .dropdown-content>div{width:100%}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .dropdown .button-selected{min-width:3.75rem;height:2.5rem}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .dropdown .button-selected:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .dropdown .button-selected:hover{color:#fff}body.dark-theme   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .dropdown .button-selected:hover{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .dropdown .button-selected:hover{color:#142028}body.light   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .dropdown .button-selected:hover{color:#142028}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain{height:2.5rem;line-height:2.5rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain{color:#fff}body.dark-theme   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain{color:#142028}body.light   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain{color:#142028}@media (max-width: 1023px){[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain{height:3.25rem}}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain:hover{background-color:#f4f5f6;color:#00b8d8!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain:hover{background-color:#142028}body.dark-theme   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain:hover{background-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain:hover{background-color:#f4f5f6}body.light   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain:hover{background-color:#f4f5f6}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.active{color:#00b8d8!important}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected{color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected{color:#fff!important}body.dark-theme   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected{color:#142028!important}body.light   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected{color:#142028!important}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected.active{color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected.active{color:#fff!important}body.dark-theme   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected.active{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected.active{color:#142028!important}body.light   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected.active{color:#142028!important}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected:hover{background-color:#e2e7ec;color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected:hover{background-color:#23323c}body.dark-theme   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected:hover{background-color:#23323c}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected:hover{background-color:#e2e7ec}body.light   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected:hover{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected:hover{color:#fff!important}body.dark-theme   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected:hover{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected:hover{color:#142028!important}body.light   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   app-dropdown-chains[_ngcontent-%COMP%]     .chain.selected:hover{color:#142028!important}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]{display:flex;align-items:center;width:79%}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{width:100%;background-color:#e2e7ec;border-radius:.625rem;padding:0 .5rem;height:2.5rem;line-height:2.5rem;display:flex;align-items:center}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{background-color:#e2e7ec}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:.625rem;margin-right:.25rem}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#3d5170;background-color:#e2e7ec!important;width:100%;padding-top:0;padding-bottom:0;border:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#3d5170}body.light   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#e2e7ec!important}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#3d5170;font-size:12px}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#cacedb}body.dark-theme   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#cacedb}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#3d5170}body.light   [_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#3d5170}[_nghost-%COMP%]   .favs-filter[_ngcontent-%COMP%]   .favs-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.fav-item[_ngcontent-%COMP%]{margin:.625rem .625rem 0}.fav-item[_ngcontent-%COMP%]:first-child, .fav-item[_ngcontent-%COMP%]:last-child{margin:0 .625rem}.cursor-action[_ngcontent-%COMP%]{cursor:pointer}.favs-container[_ngcontent-%COMP%]{overflow-y:auto;padding-bottom:3.125rem}.favs-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#818ea3}.favs-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{text-align:center;margin-top:.5rem;height:1.5rem;width:100%}.pairexplorer-list[_ngcontent-%COMP%]{max-height:67.5rem}.dashboard-search-width[_ngcontent-%COMP%]{margin:0!important;width:16.25rem}.dashboard-search-mobile[_ngcontent-%COMP%]{justify-content:center!important;margin-bottom:.625rem!important;width:100%}.dashboard-filter-mobile[_ngcontent-%COMP%]{justify-content:center!important;width:100%}.dashboard-favs[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:195.625rem;overflow-y:initial;justify-content:space-between;width:100%}.dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-item[_ngcontent-%COMP%]{border-color:#e2e7ec;border-bottom:1px solid;height:3.75rem}body.dark-theme   [_nghost-%COMP%]   .dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-item[_ngcontent-%COMP%]{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-item[_ngcontent-%COMP%]{border-color:#23323c}body.light   [_nghost-%COMP%]   .dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-item[_ngcontent-%COMP%]{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-item[_ngcontent-%COMP%]{border-color:#e2e7ec}.dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-item[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-item[_ngcontent-%COMP%]:hover{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-item[_ngcontent-%COMP%]:hover{background-color:#142028}body.light   [_nghost-%COMP%]   .dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-item[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-item[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}.dashboard-favs[_ngcontent-%COMP%]   .flex-four-columns[_ngcontent-%COMP%]{flex:0 0 24.6%}.dashboard-favs[_ngcontent-%COMP%]   .flex-four-columns[_ngcontent-%COMP%]:nth-child(3n){margin-right:.42%}.dashboard-favs[_ngcontent-%COMP%]   .flex-four-columns[_ngcontent-%COMP%]:nth-child(4n){margin-right:0}.dashboard-favs[_ngcontent-%COMP%]   .flex-two-columns[_ngcontent-%COMP%]{flex:0 0 49.4%!important;margin-right:.42%!important}.dashboard-favs[_ngcontent-%COMP%]   .flex-two-columns[_ngcontent-%COMP%]:nth-child(2n){margin-right:0!important}.dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-mobile[_ngcontent-%COMP%]{flex:0 0 100%;margin-right:0}.fav-item-empty[_ngcontent-%COMP%]{height:6.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#e2e7ec;border-radius:1rem;padding:0 1rem;text-align:center;text-decoration:none;color:#818ea3;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]{color:#818ea3}.fav-item-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{border-radius:3.125rem;background-color:#f4f5f6;width:1.75rem;height:1.75rem;font-size:16px;display:flex;justify-content:center;align-items:center;margin-bottom:.5rem}body.dark-theme   [_nghost-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#f4f5f6}.fav-item-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;overflow:hidden;text-overflow:ellipsis;width:100%}.fav-item-empty[_ngcontent-%COMP%]:hover{background-color:#fff}body.dark-theme   [_nghost-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]:hover{background-color:#0b1217}body.dark-theme[_ngcontent-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]:hover{background-color:#0b1217}body.light   [_nghost-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]:hover{background-color:#fff}body.light[_ngcontent-%COMP%]   .fav-item-empty[_ngcontent-%COMP%]:hover{background-color:#fff}.fav-item-empty[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%]{color:#17c671}.chart-hide[_ngcontent-%COMP%]{cursor:pointer;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .chart-hide[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .chart-hide[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .chart-hide[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .chart-hide[_ngcontent-%COMP%]{color:#818ea3}.chart-hide.off[_ngcontent-%COMP%]{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .chart-hide.off[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .chart-hide.off[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .chart-hide.off[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .chart-hide.off[_ngcontent-%COMP%]{color:#3d5170}@media screen and (min-width: 1024px) and (max-width: 1400px){.favs-container[_ngcontent-%COMP%]{max-height:calc(100% - 195px)}[_nghost-%COMP%]{height:100%}}@media (max-width: 1078px){.dashboard-favs[_ngcontent-%COMP%]{overflow-y:hidden;overflow-x:scroll}.dashboard-favs[_ngcontent-%COMP%]   .dashboard-fav-item[_ngcontent-%COMP%]{width:67.3125rem}}@media (max-width: 599px){app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{min-width:8.75rem!important}app-dropdown-chains[_ngcontent-%COMP%]     .dropdown .button-selected{min-width:unset!important}app-dropdown-chains[_ngcontent-%COMP%]     .dropdown .button-selected .chain.selected{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}}.default-favorite[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.625rem;height:18.75rem}.default-favorite[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}.default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:1.25rem;font-size:12px;font-weight:400;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.625rem;margin-bottom:1.25rem;background:none;border:none;background-color:#f4f5f6;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#f4f5f6}.default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background-color:#23323c}body.light   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background-color:#e2e7ec}.default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%], .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   fa-icon[_ngcontent-%COMP%]{background-color:#f4f5f6;color:#17c671}body.dark-theme   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   fa-icon[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   fa-icon[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   fa-icon[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   fa-icon[_ngcontent-%COMP%]{background-color:#f4f5f6}.default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{border-radius:3.125rem;background-color:#e2e7ec;width:1.75rem;height:1.75rem;font-size:16px;display:flex;justify-content:center;align-items:center;margin-bottom:.5rem}body.dark-theme   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}.default-favorite[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;overflow:hidden;text-overflow:ellipsis;width:100%}.footer-favs[_ngcontent-%COMP%]{align-items:center;display:flex;height:3.875rem;justify-content:center;width:23.125rem;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}.footer-favs.fixed[_ngcontent-%COMP%]{position:absolute;bottom:0}.footer-favs[_ngcontent-%COMP%]   app-manage-favs-list[_ngcontent-%COMP%]{background-color:#f4f5f6;border-top:1px solid #3a4956;padding:.9375rem;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}body.dark-theme   [_nghost-%COMP%]   .footer-favs[_ngcontent-%COMP%]   app-manage-favs-list[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .footer-favs[_ngcontent-%COMP%]   app-manage-favs-list[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .footer-favs[_ngcontent-%COMP%]   app-manage-favs-list[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .footer-favs[_ngcontent-%COMP%]   app-manage-favs-list[_ngcontent-%COMP%]{background-color:#f4f5f6}  .tooltip{z-index:10000000000000000!important}.favs-loading[_ngcontent-%COMP%]{height:12.5rem;position:relative}.favs-loading   [_nghost-%COMP%]     dxt-loading{top:30%}.main-icon-list[_ngcontent-%COMP%]{font-size:13px;color:#00b8d8;margin-right:.25rem}body   .dark-theme   [_nghost-%COMP%]     .favs-container::-webkit-scrollbar-thumb{background-color:#818ea3}"],
                changeDetection: 0
            }),
            a
        }
        )()
    }
    ,
    98085: (Q,T,l)=>{
        l.d(T, {
            D: ()=>I
        });
        var t = l(52413)
          , k = l(61135)
          , m = l(94650);
        const Z = ["svgGraph"];
        let I = (()=>{
            class w extends t.K9 {
                set candles(h) {
                    h && (this._candles = h,
                    this._candlesChanged$.next())
                }
                set color(h) {
                    this._color = h
                }
                get color() {
                    return this._color
                }
                constructor(h) {
                    super(),
                    this._cdRef = h,
                    this.height = 46,
                    this.candlesBox = "0 0 0 0",
                    this._candlesChanged$ = new k.X(null)
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
                    let h = 0
                      , g = [];
                    this._candles && this._candles.length ? (h = this._candles.length,
                    g = this._getPointsProportion()) : (g = this._getPointsNotRecentSwap(),
                    h = g.length,
                    this._color = "#818ea3"),
                    this.candlesBox = `0 0 ${h} ${this.height}`,
                    this._createPolygonSVG(h, this.height, g),
                    this._createPolylineSVG(g),
                    this._cdRef.detectChanges()
                }
                _getPointsNotRecentSwap() {
                    const h = 1440 / this.timeMinutes
                      , g = [];
                    for (let p = 0; p < h; p++)
                        g.push([p, Math.abs(.5 * this.height - this.height)]);
                    return g
                }
                _getPointsProportion() {
                    const h = this._candles.length ? Math.max.apply(Math, this._candles.map(_=>_.open)) : 0
                      , g = this._candles.length ? Math.min.apply(Math, this._candles.map(_=>_.open)) : 0
                      , p = [];
                    return this._candles.forEach((_,P)=>{
                        let b = (_.open - g) / (h - g);
                        isNaN(b) && (b = 0),
                        p.push([P, Math.abs(b * this.height - this.height)])
                    }
                    ),
                    p
                }
                _createPolygonSVG(h, g, p) {
                    const _ = this.svgGraph.nativeElement
                      , P = document.createElementNS(_.namespaceURI, "polygon");
                    P.setAttributeNS(null, "points", `${p.map(b=>" " + b[0] + "," + b[1])} ${h},${g} 0,${g}`),
                    P.setAttributeNS(null, "fill", `${this.color}`),
                    P.setAttributeNS(null, "stroke", `${this.color}`),
                    P.setAttributeNS(null, "stroke-width", p.length > 90 ? "1" : "0.2"),
                    _.appendChild(P)
                }
                _createPolylineSVG(h) {
                    const g = this.svgGraph.nativeElement
                      , p = document.createElementNS(g.namespaceURI, "polyline");
                    p.setAttributeNS(null, "points", `${h.map(_=>" " + _[0] + "," + _[1])}`),
                    p.setAttributeNS(null, "fill", "none"),
                    p.setAttributeNS(null, "stroke", `${this.color}`),
                    p.setAttributeNS(null, "stroke-width", h.length > 90 ? "1" : "0.2"),
                    g.appendChild(p)
                }
                _getCandleResults() {
                    const h = new Date;
                    let g = new Date;
                    const p = [];
                    for (g.setDate(h.getDate() - 1); g <= h; ) {
                        const _ = t.gS.binarySearch(this._candles, g.getTime(), "time");
                        g = new Date(g.getTime() + 60 * this.timeMinutes * 1e3),
                        -1 !== _ ? p.push(this._candles[_]) : p.length && p.push(p[p.length - 1])
                    }
                    return p
                }
                onDestroy() {}
            }
            return w.\u0275fac = function(h) {
                return new (h || w)(m.Y36(m.sBO))
            }
            ,
            w.\u0275cmp = m.Xpm({
                type: w,
                selectors: [["app-line-chart"]],
                viewQuery: function(h, g) {
                    if (1 & h && m.Gf(Z, 5),
                    2 & h) {
                        let p;
                        m.iGM(p = m.CRH()) && (g.svgGraph = p.first)
                    }
                },
                inputs: {
                    candles: "candles",
                    height: "height",
                    timeMinutes: "timeMinutes",
                    color: "color"
                },
                standalone: !0,
                features: [m.qOj, m.jDz],
                decls: 3,
                vars: 3,
                consts: [[1, "line-chart-container"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none", "width", "100%"], ["svgGraph", ""]],
                template: function(h, g) {
                    1 & h && (m.TgZ(0, "div", 0),
                    m.O4$(),
                    m._UZ(1, "svg", 1, 2),
                    m.qZA()),
                    2 & h && (m.xp6(1),
                    m.uIk("viewBox", g.candlesBox)("height", g.heightPx)("style", 30 === g.height ? "border-radius: 0" : null, m.Ckj))
                },
                styles: [".line-chart-container[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%}.line-chart-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]    {width:100%;border-radius:0 0 .625rem .625rem}.line-chart-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]     polygon{stroke-linejoin:round;opacity:.5}"],
                changeDetection: 0
            }),
            w
        }
        )()
    }
    ,
    7331: (Q,T,l)=>{
        l.d(T, {
            D: ()=>I
        });
        var t = l(54482)
          , k = l(25032)
          , m = l(25403)
          , Z = l(38421);
        function I(w) {
            return (0,
            t.e)((L,h)=>{
                let g = !1
                  , p = null
                  , _ = null;
                const P = ()=>{
                    if (_?.unsubscribe(),
                    _ = null,
                    g) {
                        g = !1;
                        const b = p;
                        p = null,
                        h.next(b)
                    }
                }
                ;
                L.subscribe((0,
                m.x)(h, b=>{
                    _?.unsubscribe(),
                    g = !0,
                    p = b,
                    _ = (0,
                    m.x)(h, P, k.Z),
                    (0,
                    Z.Xf)(w(b)).subscribe(_)
                }
                , ()=>{
                    P(),
                    h.complete()
                }
                , void 0, ()=>{
                    p = _ = null
                }
                ))
            }
            )
        }
    }
}]);
