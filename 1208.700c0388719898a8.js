"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[1208], {
    71208: (wt,it,r)=>{
        r.d(it, {
            Px: ()=>bt,
            LO: ()=>Q,
            EC: ()=>J
        });
        var x = r(15861)
          , e = r(94650)
          , o = r(52413)
          , G = r(77575)
          , K = r(77579)
          , V = r(82805)
          , y = r(18505)
          , O = r(39646)
          , H = r(95698)
          , st = r(61260)
          , E = r(17445)
          , at = r(62557)
          , Y = r(39300)
          , I = r(82722)
          , nt = r(54004)
          , Z = r(54968)
          , rt = r(4326)
          , ot = r(7331)
          , f = r(99703)
          , lt = r(2262)
          , z = r(36895);
        let Q = (()=>{
            class a {
                constructor(t) {
                    this.templateRef = t
                }
            }
            return a.\u0275fac = function(t) {
                return new (t || a)(e.Y36(e.Rgc))
            }
            ,
            a.\u0275dir = e.lG2({
                type: a,
                selectors: [["", "appTradingViewDisclaimer", ""]],
                standalone: !0
            }),
            a
        }
        )()
          , J = (()=>{
            class a {
                constructor(t) {
                    this.templateRef = t
                }
            }
            return a.\u0275fac = function(t) {
                return new (t || a)(e.Y36(e.Rgc))
            }
            ,
            a.\u0275dir = e.lG2({
                type: a,
                selectors: [["", "appTradingViewDragIcon", ""]],
                standalone: !0
            }),
            a
        }
        )();
        var W = r(83353)
          , j = r(53763);
        const ht = ["tradingview"]
          , ct = ["resizableBox"]
          , dt = ["dragHandleBottom"];
        function ut(a, u) {
            1 & a && e._UZ(0, "div", 7)
        }
        function gt(a, u) {
            1 & a && e.GkF(0)
        }
        const mt = function(a) {
            return {
                "trading-view__show-button": a
            }
        };
        function _t(a, u) {
            if (1 & a) {
                const t = e.EpF();
                e.TgZ(0, "span", 8, 9),
                e.NdJ("cdkDragMoved", function() {
                    e.CHM(t);
                    const s = e.oxw();
                    return e.KtG(s.dragMove())
                })("cdkDragStarted", function() {
                    e.CHM(t);
                    const s = e.oxw();
                    return e.KtG(s.toggleOverlay(!0))
                })("cdkDragReleased", function() {
                    e.CHM(t);
                    const s = e.oxw();
                    return e.KtG(s.toggleOverlay(!1))
                })("mousedown", function() {
                    e.CHM(t);
                    const s = e.oxw();
                    return e.KtG(s.toggleOverlay(!0))
                })("mouseup", function() {
                    e.CHM(t);
                    const s = e.oxw();
                    return e.KtG(s.toggleOverlay(!1))
                }),
                e.YNc(2, gt, 1, 0, "ng-container", 10),
                e.qZA()
            }
            if (2 & a) {
                const t = e.oxw();
                e.Q6J("ngClass", e.VKq(2, mt, t.showDragButton)),
                e.xp6(2),
                e.Q6J("ngTemplateOutlet", t.dragIconSlot.templateRef)
            }
        }
        function ft(a, u) {
            1 & a && e.GkF(0)
        }
        const vt = function(a) {
            return {
                disclaimer: a
            }
        };
        function Ct(a, u) {
            if (1 & a && (e.ynx(0),
            e.YNc(1, ft, 1, 0, "ng-container", 11),
            e.BQk()),
            2 & a) {
                const t = e.oxw();
                e.xp6(1),
                e.Q6J("ngTemplateOutlet", t.disclaimerSlot.templateRef)("ngTemplateOutletContext", e.VKq(2, vt, t.disclaimer))
            }
        }
        const pt = function(a) {
            return {
                resizable: a
            }
        };
        let bt = (()=>{
            class a extends o.K9 {
                get chartLoader() {
                    return this._chartLoader
                }
                set chartLoader(t) {
                    this._chartLoader = t,
                    this._updateTVClasses()
                }
                get isFullscreenChart() {
                    return this._isFullscreenChart
                }
                set isFullscreenChart(t) {
                    this._isFullscreenChart = t,
                    this._updateTVClasses()
                }
                constructor(t, i, s, c, _, k, X, D, T) {
                    if (super(),
                    this._candlesDataService = t,
                    this._chartService = i,
                    this._environment = s,
                    this._authenticationService = c,
                    this._ngZone = _,
                    this._cdRef = k,
                    this._renderer = X,
                    this._platform = D,
                    this._chartConfig = T,
                    this.normalizeCandles = !1,
                    this.candlesData = null,
                    this.countSwapsLast24h = null,
                    this.selectedTransactions = [],
                    this.disclaimer = null,
                    this.userAccess = !1,
                    this.darkThemeUrl = "css/custom_dext_dark.css",
                    this.lightThemeUrl = "css/custom_dext.css",
                    this.chartResolution = null,
                    this.chartType = null,
                    this.chartSavedPropertiesKey = "chartproperties",
                    this.chartSavedStateKey = "chartSavedState",
                    this.isFullScreen = !1,
                    this.isDarkTheme = !0,
                    this.isMulti = !1,
                    this.isResizable = !1,
                    this.allowMarksOnBars = !1,
                    this.isUserIdEnabled = !0,
                    this.showTokenRefChangeButton = !0,
                    this.showMinMaxButtons = !0,
                    this.showLeftToolbar = !0,
                    this.liveCandlesCleared = new e.vpe,
                    this.tvDestroyed = new e.vpe,
                    this.fullScreenToggled = new e.vpe,
                    this.tvReady = new e.vpe,
                    this.showOverlay = !1,
                    this.showDragButton = !1,
                    this.screenHeight = window.innerHeight,
                    this._isFetchingCandles = !1,
                    this._storeChartHeight$ = new K.x,
                    this._onResetChartData$ = new K.x,
                    this._pairSymbols = new Map,
                    this._tradingview = null,
                    this._liveCandlesSub = null,
                    this._chartBarsSubscriptions = new Map,
                    this._tradingViewEventsSubscriptions = new Map,
                    this._btnChange = null,
                    this._minChart = null,
                    this._maxChart = null,
                    this._btnFull = null,
                    this._activeChart = null,
                    this._loadedApiResolutions = [],
                    this._chartLoader = !0,
                    this._isFullscreenChart = !1,
                    null == this._chartConfig)
                        throw new Error("TradingView: missing config")
                }
                ngOnInit() {
                    this._chartState = this._getStoredChartSetting(this.chartSavedStateKey),
                    this.refTokenSymbol = f.CXF.getRefTokenSymbol(this.chain),
                    this.drawTv()
                }
                ngAfterViewInit() {
                    if (this.isResizable) {
                        const t = this._getStoredChartSetting("resizedHeight");
                        if (null != t) {
                            const i = this.screenHeight - .2 * this.screenHeight
                              , s = this.tradingViewContainer.nativeElement.closest(".trading-view");
                            null != s && (s.style.height = Number.parseInt(t) > i ? `${i}px` : t)
                        }
                    }
                }
                onDestroy() {
                    this._liveCandlesSub && (this._liveCandlesSub.unsubscribe(),
                    this._liveCandlesSub = null);
                    const t = new Map(this._chartBarsSubscriptions);
                    this._chartBarsSubscriptions.clear();
                    for (const [,i] of t)
                        i();
                    t.clear(),
                    this.liveCandlesCleared.complete(),
                    this._onResetChartData$.complete(),
                    this.destroyChartElements()
                }
                ngOnChanges(t) {
                    !t.isFullScreen?.isFirstChange() && !0 === t.isFullScreen?.currentValue && t.isFullScreen?.previousValue !== t.isFullScreen?.currentValue && this.toggleFullChart(),
                    !t.isDarkTheme?.isFirstChange() && t.isDarkTheme?.previousValue !== t.isDarkTheme?.currentValue && (this.chartLoader = !0,
                    this.destroyChartElements(),
                    this.drawTv())
                }
                destroyChartElements() {
                    if (this._btnChange && (this._btnChange.remove(),
                    this._btnChange = null),
                    this._btnFull && (this._btnFull.remove(),
                    this._btnFull = null),
                    this._maxChart && (this._maxChart.remove(),
                    this._maxChart = null),
                    this._minChart && (this._minChart.remove(),
                    this._minChart = null),
                    this._resolveSymbolSub && this._resolveSymbolSub.unsubscribe(),
                    this._tradingview) {
                        if (this._activeChart?.onDataLoaded().unsubscribeAll(this),
                        this._activeChart = null,
                        this._tradingViewEventsSubscriptions.size > 0) {
                            for (const [t,i] of this._tradingViewEventsSubscriptions.entries())
                                try {
                                    this._tradingview.unsubscribe(t, i)
                                } catch (s) {
                                    console.warn(`Chart: could not remove ${t} subscription:`, s.message)
                                }
                            this._tradingViewEventsSubscriptions.clear()
                        }
                        this._saveChartState(),
                        this._tradingview._iFrame.src = "about:blank",
                        this._tradingview.remove(),
                        this._tradingview._options.datafeed = {},
                        this._tradingview._iFrame.remove(),
                        this._tradingview = null,
                        this.tvDestroyed.next(),
                        this._cdRef.detectChanges()
                    }
                }
                drawTv() {
                    var t = this;
                    if (this.tokenData.symbol)
                        if (this._tradingview)
                            this._btnChange && (this._btnChange.innerHTML = this._getBtnChangeName()),
                            this._resetChartData(()=>{
                                this._subscribeMaxMinPrices()
                            }
                            );
                        else {
                            const i = this.isDarkTheme ? "Dark" : "Light"
                              , s = this.isDarkTheme ? this.darkThemeUrl : this.lightThemeUrl
                              , c = this._chartService.getThemeOverridesObject(i)
                              , _ = this._chartState;
                            if (_)
                                _.charts[0].chartProperties = o.lM.deepMerge(_.charts[0].chartProperties, c),
                                _.charts[0].panes[0].sources[0].state.symbol = o.LC.safeText(this._getUniquePairSymbol());
                            else {
                                const D = this._getStoredChartSetting(this.chartSavedPropertiesKey) ?? {};
                                D && this._storeChartSetting(this.chartSavedPropertiesKey, o.lM.deepMerge(D, c))
                            }
                            this._storeChartSetting("current_theme.name", i);
                            const k = [];
                            o.lM.isMobileDevice() && k.push("hide_left_toolbar_by_default"),
                            this._platform.ANDROID && k.push("iframe_loading_compatibility_mode"),
                            setTimeout(()=>{
                                if (!this.candlesData)
                                    return void console.warn("TradingView chart: could not load due to candles data missing.");
                                if (null == this.tradingViewContainer)
                                    return void console.warn("TradingView chart: could not load due to container not found.");
                                const D = this.isUserIdEnabled ? this._chartService.getStorageUrl(this.exchange) : "";
                                let T = this.chartResolution?.toUpperCase();
                                if (null == T) {
                                    const h = this._getChartLatestResolution();
                                    T = h,
                                    h && console.log("TradingView chart: no initial resolution set. Falling back to last used resolution (if any).")
                                } else
                                    console.log("TradingView chart: initial resolution explicitly set.", T);
                                null == T && (console.warn("TradingView chart: suitable initial resolution calculated based on the token's data."),
                                T = this._chartService.calculateInitialResolution(this.userAccess, this.tokenData.created, this.countSwapsLast24h ?? 6, this.candlesData.getOldestCandle())),
                                this._tradingview = new window.TradingView.widget({
                                    theme: i,
                                    overrides: this._chartService.getChartOverrides(c),
                                    debug: !1,
                                    fullscreen: !0,
                                    custom_css_url: `${s}?${this._environment.appVersion}`,
                                    symbol: this._getUniquePairSymbol(),
                                    interval: T,
                                    container: this.tradingViewContainer.nativeElement,
                                    library_path: `${this._environment.app_scope}/assets/vendors/charting_library/`,
                                    locale: "en",
                                    disabled_features: this.showLeftToolbar ? this._chartService.getChartDisabledFeatures() : this._chartService.getChartDisabledFeaturesWidget(),
                                    enabled_features: k,
                                    saved_data: _ ? JSON.parse(JSON.stringify(_)) : void 0,
                                    charts_storage_api_version: "1",
                                    charts_storage_url: D,
                                    client_id: this.pairSelected + "-" + f.CXF.getLegacyChain(this.chain) || void 0,
                                    user_id: this._authenticationService.authToken || void 0,
                                    timezone: this._chartService.getSupportedTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone),
                                    datafeed: {
                                        onReady: h=>{
                                            (0,
                                            V.H)(0).pipe((0,
                                            o.sL)(this), (0,
                                            y.b)(()=>{
                                                h({
                                                    supported_resolutions: ["1", "3", "5", "15", "30", "60", "120", "240", "720", "D", "3D", "W", "M"],
                                                    supports_marks: this.allowMarksOnBars,
                                                    supports_timescale_marks: this.allowMarksOnBars
                                                })
                                            }
                                            )).subscribe()
                                        }
                                        ,
                                        getMarks: (h,v,g,C)=>{
                                            const R = this.selectedTransactions.filter(b=>b.timestamp >= v && b.timestamp < g)
                                              , m = this._chartService.getMarks(R);
                                            m.length > 0 && C(m)
                                        }
                                        ,
                                        getTimescaleMarks: (h,v,g,C)=>{
                                            const R = this.selectedTransactions.filter(b=>b.timestamp >= v && b.timestamp < g)
                                              , m = this._chartService.getTimescaleMarks(R, this._getChartTokenRef(!0), this.refTokenSymbol);
                                            m.length > 0 && setTimeout(()=>{
                                                C(m)
                                            }
                                            , 50)
                                        }
                                        ,
                                        getBars: (h,v,g,C,R)=>{
                                            this._ngZone.runOutsideAngular((0,
                                            x.Z)(function*() {
                                                const {from: m, to: b, countBack: St} = g
                                                  , w = 1e3 * m
                                                  , P = 1e3 * b
                                                  , M = St
                                                  , n = t.candlesData
                                                  , l = n.getImmediateSupportedResolution(t._chartService.transformToNumericResolution(t._tradingview?.chart().resolution()));
                                                n.setResolution(l);
                                                let A = !1;
                                                if (t._loadedApiResolutions.includes(l) || (A = !0,
                                                t._loadedApiResolutions.push(l)),
                                                t._tradingview) {
                                                    const S = t._tradingview.chart();
                                                    S.priceFormatter().format = o.C6.shortenPrice,
                                                    t._storeChartLatestResolution(S.resolution() + "")
                                                }
                                                let q = (0,
                                                O.of)({
                                                    rawCandles: {
                                                        version: void 0,
                                                        symbol: n.chartTokenRef,
                                                        candles: [],
                                                        oldestTs: -1
                                                    },
                                                    requests: []
                                                })
                                                  , tt = (0,
                                                O.of)({
                                                    rawCandles: {
                                                        version: void 0,
                                                        symbol: n.chartTokenRef,
                                                        candles: [],
                                                        oldestTs: -1
                                                    },
                                                    requests: []
                                                })
                                                  , et = P
                                                  , $ = !1;
                                                t._isFetchingCandles = !0;
                                                const F = n.getFirstCandleStartingFrom(w, l);
                                                F ? (tt = (0,
                                                O.of)({
                                                    rawCandles: {
                                                        version: n.historyVersion,
                                                        symbol: n.chartTokenRef,
                                                        candles: yield t._candlesDataService.getCandles(n, F.time, P, l),
                                                        oldestTs: -1
                                                    },
                                                    requests: []
                                                }),
                                                F.time > w && (et = F.time - o.VK,
                                                $ = !0)) : $ = !0,
                                                $ && t.pairSelected && (q = t._chartService.getCandles(t.chain, t.pairSelected, n.chartTokenRef, l, w, et, n.historyVersion, n.oldestTsInApi, n.getOldestTsInChart(l), n.getOldestTsRequestedToApi(l), A).pipe((0,
                                                H.q)(1), (0,
                                                y.b)(function() {
                                                    var S = (0,
                                                    x.Z)(function*({rawCandles: d, requests: p}) {
                                                        n.setHistoryVersion(d.version),
                                                        n.setOldestTsInApi(d.oldestTs),
                                                        p[p.length - 1] && n.setOldestTsRequestedToApi(l, p[p.length - 1]?.startTs),
                                                        d.candles && d.candles.length > 0 && (yield t._candlesDataService.addCandles(n, d, l, t.normalizeCandles))
                                                    });
                                                    return function(d) {
                                                        return S.apply(this, arguments)
                                                    }
                                                }()), (0,
                                                st.j)(({rawCandles: S})=>{
                                                    let d = (0,
                                                    E.F)(250);
                                                    return S.candles.length > 1e5 ? d = (0,
                                                    E.F)(4e3) : S.candles.length > 2e4 && (d = (0,
                                                    E.F)(2500)),
                                                    d.pipe((0,
                                                    H.q)(1))
                                                }
                                                ))),
                                                (0,
                                                at.$)(q, tt).subscribe(function() {
                                                    var S = (0,
                                                    x.Z)(function*([d]) {
                                                        t.chartLoader = !1;
                                                        const p = yield t._candlesDataService.getCandlesWithoutGaps(n, w, P, l, M, n.getOldestTsInChart(l));
                                                        if (p.length > 0)
                                                            n.setOldestTsInChart(l, p[0].time),
                                                            p.length - M > 5 && console.log(`Candles: returned more candles than requested. Requested ${M} vs returned ${p.length}`),
                                                            C(p, {
                                                                noData: !1
                                                            });
                                                        else if (d.rawCandles.oldestTs && -1 !== d.rawCandles.oldestTs && w > d.rawCandles.oldestTs) {
                                                            const U = w - 30 * o.HR;
                                                            t._chartService.getCandles(t.chain, t.pairSelected, n.chartTokenRef, l, U, w, n.historyVersion, n.oldestTsInApi, n.getOldestTsInChart(l), n.getOldestTsRequestedToApi(l), A).pipe((0,
                                                            H.q)(1)).subscribe(function() {
                                                                var Tt = (0,
                                                                x.Z)(function*({rawCandles: B, requests: L}) {
                                                                    L[L.length - 1] && n.setOldestTsRequestedToApi(l, L[L.length - 1]?.startTs),
                                                                    B.candles && B.candles.length > 0 && (yield t._candlesDataService.addCandles(n, B, l, t.normalizeCandles));
                                                                    const N = yield t._candlesDataService.getCandlesWithoutGaps(n, U, w, l, M, n.getOldestTsInChart(l));
                                                                    N.length > 0 ? (n.setOldestTsInChart(l, N[0].time),
                                                                    C(N, {
                                                                        noData: !1
                                                                    })) : C([], {
                                                                        noData: !0,
                                                                        nextTime: Math.round(U / 1e3)
                                                                    })
                                                                });
                                                                return function(B) {
                                                                    return Tt.apply(this, arguments)
                                                                }
                                                            }())
                                                        } else
                                                            C([], {
                                                                noData: !0
                                                            })
                                                    });
                                                    return function(d) {
                                                        return S.apply(this, arguments)
                                                    }
                                                }())
                                            }))
                                        }
                                        ,
                                        resolveSymbol: (h,v)=>{
                                            this._resolveSymbolSub = (0,
                                            V.H)(200).pipe((0,
                                            y.b)(()=>{
                                                if (!this.tokenData.symbol)
                                                    return;
                                                const g = Math.pow(10, Math.max(o.C6.getOptimalDecimals(this.candlesData.maxMinPrices[this.candlesData.chartTokenRef].min), o.C6.getOptimalDecimals(this.candlesData.maxMinPrices[this.candlesData.chartTokenRef].max)));
                                                v(this._chartService.getResolvedChartData(this._getUniquePairSymbol(), g))
                                            }
                                            )).subscribe(()=>this.chartLoader = !1)
                                        }
                                        ,
                                        searchSymbols: ()=>{}
                                        ,
                                        subscribeBars: (h,v,g,C,R)=>{
                                            this._chartBarsSubscriptions.set(C, R),
                                            this._liveCandlesSub && (this._liveCandlesSub.unsubscribe(),
                                            this._liveCandlesSub = null),
                                            this.latestCandles && (this._liveCandlesSub = this.latestCandles.pipe((0,
                                            Y.h)(m=>m && m.length > 0)).subscribe(m=>{
                                                for (const b of m)
                                                    g(b)
                                            }
                                            ))
                                        }
                                        ,
                                        unsubscribeBars: h=>{
                                            this._chartBarsSubscriptions.delete(h),
                                            this._liveCandlesSub && 0 === this._chartBarsSubscriptions.size && (this._liveCandlesSub.unsubscribe(),
                                            this._liveCandlesSub = null),
                                            this.liveCandlesCleared.emit({
                                                candles: []
                                            })
                                        }
                                    }
                                }),
                                this._cdRef.detectChanges(),
                                this._tradingview.onChartReady(()=>{
                                    if (null !== this.chartType && this._tradingview?.applyOverrides({
                                        "mainSeriesProperties.style": this.chartType
                                    }),
                                    this._applyTvOverrides(),
                                    this.isResizable && (this.showDragButton = !0,
                                    this._awaitChartHeightRequests()),
                                    this._tradingview) {
                                        this.tvReady.next(this._tradingview),
                                        this._tradingview.chart().priceFormatter().format = o.C6.shortenPrice,
                                        this._tradingview.chart().onIntervalChanged().subscribe(null, v=>{
                                            setTimeout(()=>{
                                                const g = this.candlesData.resolution;
                                                ["1", "3", "5"].includes(v) && ["15", "1D", "1440"].includes(g) && console.warn(`Chart: interval changed to ${v} but candles resolution remains in ${g}. Perhaps the chart should be reset?`)
                                            }
                                            , 50)
                                        }
                                        ),
                                        this._activeChart = this._tradingview.activeChart(),
                                        this._activeChart.onDataLoaded().subscribe(this, ()=>{
                                            this._isFetchingCandles = !1
                                        }
                                        );
                                        let h = "onAutoSaveNeeded";
                                        this._tradingViewEventsSubscriptions.set(h, ()=>{
                                            this._saveChartState()
                                        }
                                        ),
                                        this._tradingview.subscribe(h, this._tradingViewEventsSubscriptions.get(h)),
                                        h = "study",
                                        this._tradingViewEventsSubscriptions.set(h, ()=>{
                                            this._saveChartState()
                                        }
                                        ),
                                        this._tradingview.subscribe(h, this._tradingViewEventsSubscriptions.get(h))
                                    }
                                    this.isResizable && this.repositionVerticalResizeHandle(),
                                    this._cdRef.detectChanges()
                                }
                                ),
                                this._tradingview.headerReady().then(()=>{
                                    this._initCustomChartHeader(),
                                    this._cdRef.detectChanges()
                                }
                                )
                            }
                            , 50)
                        }
                }
                _applyTvOverrides() {
                    const t = this._chartService.customBackgroundPlatformColor ?? (this.isDarkTheme ? this._chartConfig.backgroundDark : this._chartConfig.backgroundLight);
                    this._tradingview?._iFrame?.contentDocument?.documentElement.style.setProperty("--tv-color-platform-background", t),
                    this._chartService.customBackgroundPlatformColor || this._tradingview?.applyOverrides({
                        "paneProperties.background": t
                    }),
                    this._tradingview?._iFrame?.contentDocument?.documentElement.style.setProperty("--tv-color-pane-background", this._chartService.customBackgroundPaneColor ?? (this.isDarkTheme ? this._chartConfig.backgroundDark : this._chartConfig.backgroundLight))
                }
                _saveChartState() {
                    if (this._tradingview && this._tradingview._iFrame && this._tradingview._iFrame.contentWindow)
                        try {
                            this._storeChartLatestResolution(this._tradingview.chart().resolution()),
                            this._tradingview.save(t=>{
                                this.isMulti && (t.charts[0].chartId = this.pairSelected),
                                this._chartState = JSON.parse(JSON.stringify(t)),
                                this._storeChartSetting(this.chartSavedStateKey, this._chartState)
                            }
                            ),
                            this._tradingview.chart().priceFormatter().format = o.C6.shortenPrice
                        } catch {
                            console.warn("Invalid save chart state")
                        }
                }
                _subscribeMaxMinPrices() {
                    this._onResetChartData$.next(),
                    this._minChart && (this._minChart.innerHTML = "Min: ---"),
                    this._maxChart && (this._maxChart.innerHTML = "Max: ---"),
                    this.candlesData?.maxMinPrices$.pipe((0,
                    I.R)(this._onResetChartData$), (0,
                    o.sL)(this), (0,
                    Y.h)(()=>!!this.candlesData), (0,
                    nt.U)(t=>({
                        symbol: "usd" === this.candlesData.chartTokenRef ? "$" : "",
                        price: t[this.candlesData.chartTokenRef]
                    }))).subscribe(({symbol: t, price: i})=>{
                        if (this._maxChart && null != i.max) {
                            const s = i.max >= 1 ? o.C6.toReadableNumber(i.max, null, 8) : o.C6.formatNumbersWithLargeDecimals(i.max, 4);
                            this._maxChart.innerHTML = `Max: ${t}${s}`
                        }
                        if (this._minChart && null != i.min) {
                            const s = i.min >= 1 ? o.C6.toReadableNumber(i.min, null, 8) : o.C6.formatNumbersWithLargeDecimals(i.min, 4);
                            this._minChart.innerHTML = `Min: ${t}${s}`
                        }
                    }
                    )
                }
                _initCustomChartHeader() {
                    if (!this._tradingview)
                        return;
                    if (this.showTokenRefChangeButton) {
                        const c = this._tradingview.createButton();
                        c.innerHTML = this._getBtnChangeName(),
                        c.classList.add("btn-chg-pair"),
                        (0,
                        Z.R)(c, "click").pipe((0,
                        I.R)(this.tvDestroyed), (0,
                        o.sL)(this), (0,
                        y.b)(()=>{
                            this.chartLoader || this._isFetchingCandles || (this.chartLoader = !0,
                            this._saveChartState(),
                            this.candlesData?.setChartTokenRef("usd" === this.candlesData?.chartTokenRef ? "eth" : "usd"),
                            this._resetChartData(),
                            this._btnChange.innerHTML = this._getBtnChangeName())
                        }
                        )).subscribe(),
                        this._btnChange = c
                    }
                    this.showMinMaxButtons && (this._maxChart = this._tradingview.createButton(),
                    this._maxChart.classList.add("btn-max"),
                    this._minChart = this._tradingview.createButton(),
                    this._minChart?.classList.add("btn-min"),
                    this._subscribeMaxMinPrices());
                    const t = this._tradingview.createButton()
                      , i = G.G_
                      , s = G.f6;
                    this.isMulti ? (t.innerHTML = s,
                    t.parentElement?.parentElement?.classList.add("hide")) : t.innerHTML = i,
                    t.setAttribute("title", "Fullscreen mode"),
                    t.classList.add("btn-fullscreen"),
                    t.classList.add("apply-common-tooltip"),
                    (0,
                    Z.R)(t, "click").pipe((0,
                    I.R)(this.tvDestroyed), (0,
                    o.sL)(this), (0,
                    y.b)(()=>{
                        this.chartLoader = !0
                    }
                    ), (0,
                    rt.g)(300), (0,
                    y.b)(()=>{
                        this.toggleFullChart(),
                        this._btnFull.innerHTML = this.isMulti || this.isFullscreenChart ? s : i,
                        this.chartLoader = !1
                    }
                    )).subscribe(),
                    setTimeout(()=>{
                        this._btnFull = t
                    }
                    , 10)
                }
                _getChartTokenRef(t=!1) {
                    let i;
                    const s = f.CXF.isStableSymbol(this.chain, this.tokenData.symbol);
                    return i = s && !t || !s && t ? f.vzY.test(this.candlesData?.chartTokenRef ?? "") ? f.Ur3 : this.refTokenSymbol : f.vzY.test(this.candlesData?.chartTokenRef ?? "") ? this.refTokenSymbol : f.Ur3,
                    i
                }
                _getUniquePairSymbol() {
                    const t = this._pairSymbols.get(this.tokenData.symbol) || [];
                    let i = t.indexOf(this.pairSelected);
                    return -1 === i && (t.push(this.pairSelected),
                    this._pairSymbols.set(this.tokenData.symbol, t),
                    i = t.length - 1),
                    this.tokenData.symbol + "\u200b".repeat(i) + "/" + this._getChartTokenRef(!0) + " - " + this.exchange.slice(0, 3).toUpperCase()
                }
                _getBtnChangeName() {
                    return this.tokenData.symbol + "/" + this._getChartTokenRef()
                }
                toggleFullChart() {
                    this.isFullscreenChart = !this.isFullscreenChart,
                    this.isMulti && (this.isFullscreenChart ? this._btnFull?.parentElement?.parentElement?.classList.remove("hide") : this._btnFull?.parentElement?.parentElement?.classList.add("hide")),
                    this.fullScreenToggled.emit()
                }
                _updateTVClasses() {
                    if (this._tradingview && this._tradingview._iFrame && this._tradingview._iFrame.parentElement) {
                        const t = this._tradingview._iFrame.parentElement;
                        if (this.chartLoader)
                            this._renderer.addClass(t, "loading-pair");
                        else {
                            const s = this.tradingViewContainer.nativeElement.closest(".trading-view")?.querySelector(".dxt-loading");
                            s && (s.style.display = "none"),
                            this._renderer.removeClass(t, "loading-pair")
                        }
                        this.isFullscreenChart ? this._renderer.addClass(t, "fullscreen") : this._renderer.removeClass(t, "fullscreen")
                    }
                }
                _resetChartData(t) {
                    this.chartLoader = !0,
                    this._tradingview && (this._loadedApiResolutions = [],
                    this._tradingview.chart().clearMarks(),
                    this._tradingview.setSymbol(this._getUniquePairSymbol(), this._getChartLatestResolution(), ()=>{
                        this.liveCandlesCleared.emit({
                            candles: []
                        }),
                        this._tradingview && (this._tradingview.chart().priceFormatter().format = o.C6.shortenPrice,
                        this.chartLoader = !1,
                        this._tradingview.chart().refreshMarks()),
                        t?.()
                    }
                    ))
                }
                _getStoredChartSetting(t) {
                    return this.isMulti ? this._chartService.getStoredChartSettingById(this.pairSelected, t) : this._chartService.getStoredChartSetting(t)
                }
                _storeChartSetting(t, i) {
                    this.isMulti ? this._chartService.storeChartSettingById(this.pairSelected, t, i) : this._chartService.storeChartSetting(t, i)
                }
                _getChartLatestResolution() {
                    return this.isMulti ? this._chartService.getStoredChartSettingById(this.pairSelected, "latestResolution") : this._candlesDataService.latestResolution
                }
                _storeChartLatestResolution(t) {
                    this.isMulti ? this._chartService.storeChartSettingById(this.pairSelected, "latestResolution", t) : this._candlesDataService.updateResolution(t)
                }
                dragMove() {
                    this.isResizable && this._ngZone.runOutsideAngular(()=>{
                        if (this.dragHandleBottom && this.resizableBox) {
                            const t = this.dragHandleBottom.nativeElement.getBoundingClientRect()
                              , i = this.resizableBox.nativeElement.getBoundingClientRect()
                              , s = t.top - i.top + t.height
                              , c = this.screenHeight - .2 * this.screenHeight
                              , _ = s <= 200 ? "200px" : s > c ? `${c}px` : `${s}px`;
                            this.resizableBox.nativeElement.style.height = _,
                            this._storeChartHeight$.next(_),
                            this.repositionVerticalResizeHandle()
                        }
                    }
                    )
                }
                toggleOverlay(t) {
                    this.showOverlay = t
                }
                repositionVerticalResizeHandle() {
                    if (this.resizableBox && this.dragHandleBottom) {
                        const t = this.resizableBox.nativeElement.getBoundingClientRect()
                          , i = this.dragHandleBottom.nativeElement.getBoundingClientRect();
                        this.dragHandleBottom.nativeElement.style.transform = `translate(0, ${t.height - i.height}px)`
                    }
                }
                _awaitChartHeightRequests() {
                    this._storeChartHeight$.pipe((0,
                    o.sL)(this), (0,
                    ot.D)(()=>(0,
                    V.H)(1e3))).subscribe(t=>{
                        this._storeChartSetting("resizedHeight", t)
                    }
                    )
                }
            }
            return a.\u0275fac = function(t) {
                return new (t || a)(e.Y36(f.Amu),e.Y36(f.CqV),e.Y36(j.qA),e.Y36(j.$h),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(e.Qsj),e.Y36(W.t4),e.Y36(f.ylm, 8))
            }
            ,
            a.\u0275cmp = e.Xpm({
                type: a,
                selectors: [["app-trading-view"]],
                contentQueries: function(t, i, s) {
                    if (1 & t && (e.Suo(s, Q, 5),
                    e.Suo(s, J, 5)),
                    2 & t) {
                        let c;
                        e.iGM(c = e.CRH()) && (i.disclaimerSlot = c.first),
                        e.iGM(c = e.CRH()) && (i.dragIconSlot = c.first)
                    }
                },
                viewQuery: function(t, i) {
                    if (1 & t && (e.Gf(ht, 5),
                    e.Gf(ct, 5),
                    e.Gf(dt, 5)),
                    2 & t) {
                        let s;
                        e.iGM(s = e.CRH()) && (i.tradingViewContainer = s.first),
                        e.iGM(s = e.CRH()) && (i.resizableBox = s.first),
                        e.iGM(s = e.CRH()) && (i.dragHandleBottom = s.first)
                    }
                },
                inputs: {
                    chain: "chain",
                    exchange: "exchange",
                    tokenData: "tokenData",
                    normalizeCandles: "normalizeCandles",
                    candlesData: "candlesData",
                    latestCandles: "latestCandles",
                    pairSelected: "pairSelected",
                    countSwapsLast24h: "countSwapsLast24h",
                    selectedTransactions: "selectedTransactions",
                    disclaimer: "disclaimer",
                    userAccess: "userAccess",
                    darkThemeUrl: "darkThemeUrl",
                    lightThemeUrl: "lightThemeUrl",
                    chartResolution: "chartResolution",
                    chartType: "chartType",
                    chartSavedPropertiesKey: "chartSavedPropertiesKey",
                    chartSavedStateKey: "chartSavedStateKey",
                    isFullScreen: "isFullScreen",
                    isDarkTheme: "isDarkTheme",
                    isMulti: "isMulti",
                    isResizable: "isResizable",
                    allowMarksOnBars: "allowMarksOnBars",
                    isUserIdEnabled: "isUserIdEnabled",
                    showTokenRefChangeButton: "showTokenRefChangeButton",
                    showMinMaxButtons: "showMinMaxButtons",
                    showLeftToolbar: "showLeftToolbar"
                },
                outputs: {
                    liveCandlesCleared: "liveCandlesCleared",
                    tvDestroyed: "tvDestroyed",
                    fullScreenToggled: "fullScreenToggled",
                    tvReady: "tvReady"
                },
                standalone: !0,
                features: [e.qOj, e.TTD, e.jDz],
                decls: 7,
                vars: 7,
                consts: [[1, "trading-view", 3, "ngClass"], ["resizableBox", ""], ["class", "trading-view__overlay", 4, "ngIf"], ["class", "trading-view__drag-handle bottom", "cdkDrag", "", "cdkDragLockAxis", "y", 3, "ngClass", "cdkDragMoved", "cdkDragStarted", "cdkDragReleased", "mousedown", "mouseup", 4, "ngIf"], [1, "trading-view__container", 3, "hidden"], ["tradingview", ""], [4, "ngIf"], [1, "trading-view__overlay"], ["cdkDrag", "", "cdkDragLockAxis", "y", 1, "trading-view__drag-handle", "bottom", 3, "ngClass", "cdkDragMoved", "cdkDragStarted", "cdkDragReleased", "mousedown", "mouseup"], ["dragHandleBottom", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
                template: function(t, i) {
                    1 & t && (e.TgZ(0, "div", 0, 1),
                    e.YNc(2, ut, 1, 0, "div", 2),
                    e.YNc(3, _t, 3, 4, "span", 3),
                    e._UZ(4, "div", 4, 5),
                    e.YNc(6, Ct, 2, 4, "ng-container", 6),
                    e.qZA()),
                    2 & t && (e.Q6J("ngClass", e.VKq(5, pt, i.isResizable)),
                    e.xp6(2),
                    e.Q6J("ngIf", i.isResizable && i.showOverlay),
                    e.xp6(1),
                    e.Q6J("ngIf", i.isResizable),
                    e.xp6(1),
                    e.Q6J("hidden", !i.tokenData || !i.tokenData.symbol),
                    e.xp6(2),
                    e.Q6J("ngIf", !!i.disclaimer && i.disclaimer.tv))
                },
                dependencies: [z.mk, z.O5, lt.Zt, z.tP, W.ud],
                changeDetection: 0
            }),
            a
        }
        )()
    }
}]);
