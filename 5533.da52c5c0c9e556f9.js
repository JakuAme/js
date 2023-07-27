"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[5533], {
    85533: (J,M,i)=>{
        i.r(M),
        i.d(M, {
            ChainSelectorComponent: ()=>Z
        });
        var n = i(94650)
          , a = i(37340)
          , s = i(52413)
          , _ = i(62289)
          , C = i(12113)
          , m = i(92498)
          , u = i(61135)
          , P = i(89383)
          , g = i(24006)
          , f = i(49319)
          , h = i(92216)
          , O = i(36895)
          , p = i(99703);
        const b = ["searchChains"];
        function y(e, l) {
            if (1 & e && n._UZ(0, "img", 6),
            2 & e) {
                const t = n.oxw();
                n.s9C("src", t.selectedItem.logoUrl, n.LSH)
            }
        }
        const k = function(e) {
            return {
                chainAllSelected: e
            }
        };
        function x(e, l) {
            if (1 & e && (n.TgZ(0, "span", 7),
            n._uU(1),
            n.qZA()),
            2 & e) {
                const t = n.oxw();
                n.Q6J("ngClass", n.VKq(2, k, !t.selectedItem.value)),
                n.xp6(1),
                n.hij(" ", t.xsActive ? t.selectedItem.shortLabel : t.selectedItem.label, " ")
            }
        }
        function v(e, l) {
            1 & e && n._UZ(0, "fa-icon", 8)
        }
        const S = function() {
            return ["fal", "times"]
        };
        function w(e, l) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "div", 14)(1, "button", 15),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const c = n.oxw(2);
                    return n.KtG(c.changeToggleList())
                }),
                n._UZ(2, "fa-icon", 16),
                n.ALo(3, "translate"),
                n.qZA()()
            }
            2 & e && (n.xp6(2),
            n.Q6J("icon", n.DdM(4, S))("ngbTooltip", n.lcZ(3, 2, "home.close")))
        }
        function L(e, l) {
            if (1 & e) {
                const t = n.EpF();
                n.TgZ(0, "input", 17, 18),
                n.NdJ("ngModelChange", function(c) {
                    n.CHM(t);
                    const r = n.oxw(2);
                    return n.KtG(r.chainSearch = c)
                })("keyup", function() {
                    n.CHM(t);
                    const c = n.oxw(2);
                    return n.KtG(c.chainSearchChange$.next(c.chainSearch))
                }),
                n.ALo(2, "translate"),
                n.qZA()
            }
            if (2 & e) {
                const t = n.oxw(2);
                n.Q6J("placeholder", n.lcZ(2, 2, "favorites.search"))("ngModel", t.chainSearch)
            }
        }
        function T(e, l) {
            if (1 & e && n._UZ(0, "img", 6),
            2 & e) {
                const t = n.oxw().$implicit;
                n.s9C("src", t.logoUrl, n.LSH)
            }
        }
        const E = function(e) {
            return {
                "one-element": e
            }
        }
          , D = function(e) {
            return {
                selected: e
            }
        }
          , I = function(e) {
            return {
                chainAll: e
            }
        };
        function A(e, l) {
            if (1 & e) {
                const t = n.EpF();
                n.ynx(0),
                n.TgZ(1, "li", 7)(2, "a", 19),
                n.NdJ("click", function() {
                    const r = n.CHM(t).$implicit;
                    return n.oxw(2).selectItem(r),
                    n.KtG(!1)
                }),
                n.YNc(3, T, 1, 1, "img", 2),
                n.TgZ(4, "span", 7),
                n._uU(5),
                n.qZA()()(),
                n.BQk()
            }
            if (2 & e) {
                const t = l.$implicit
                  , o = n.oxw(2);
                n.xp6(1),
                n.Q6J("ngClass", n.VKq(5, E, o.itemSelectables.length < 2)),
                n.xp6(1),
                n.Q6J("ngClass", n.VKq(7, D, t.value === o.selectedItem.value)),
                n.xp6(1),
                n.Q6J("ngIf", !(null == t || !t.logoUrl)),
                n.xp6(1),
                n.Q6J("ngClass", n.VKq(9, I, !t.value)),
                n.xp6(1),
                n.Oqu(t.label)
            }
        }
        const B = function(e) {
            return {
                open: e
            }
        };
        function K(e, l) {
            if (1 & e && (n.TgZ(0, "div", 9),
            n.YNc(1, w, 4, 5, "div", 10),
            n.TgZ(2, "div", 11),
            n.YNc(3, L, 3, 4, "input", 12),
            n.qZA(),
            n.TgZ(4, "ul"),
            n.YNc(5, A, 6, 11, "ng-container", 13),
            n.qZA()()),
            2 & e) {
                const t = n.oxw();
                n.Q6J("@outAnimation", void 0)("ngClass", n.VKq(6, B, t.open)),
                n.xp6(1),
                n.Q6J("ngIf", "mobileTablet" === t.mediaDevice),
                n.xp6(2),
                n.Q6J("ngIf", t.items.length > 5),
                n.xp6(2),
                n.Q6J("ngForOf", t.itemSelectables)("ngForTrackBy", t.trackByValue)
            }
        }
        const R = function(e) {
            return {
                "only-logo": e
            }
        };
        let Z = (()=>{
            class e extends s.K9 {
                onDocumentClicked(t) {
                    this.toggleList && !this._elementRef.nativeElement.contains(t.target) && (this.toggleList = !1,
                    this.changeScroll())
                }
                set items(t) {
                    this._items = [...t],
                    this._orderChainsByFavorites()
                }
                get items() {
                    return this._items
                }
                constructor(t, o, c, r) {
                    super(),
                    this._elementRef = t,
                    this._cdRef = o,
                    this._breakpointObserver = c,
                    this._favoritePairsService = r,
                    this.animationsDisabled = !1,
                    this.itemSelectables = [],
                    this._items = [],
                    this.showOnlyLogoSelected = !1,
                    this.itemSelected = new n.vpe,
                    this.toggleList = !1,
                    this.open = !1,
                    this.mediaDevice = "",
                    this.xsActive = !1,
                    this.chainSearch = "",
                    this.chainSearchChange$ = new u.X(null)
                }
                ngOnInit() {
                    this._breakpointObserver.observe([_.u3.XSmall, C.K5, C.mT]).pipe((0,
                    s.sL)(this)).subscribe(t=>{
                        t.breakpoints[_.u3.XSmall] ? (this.mediaDevice = "mobileTablet",
                        this.animationsDisabled = !0,
                        this.xsActive = !0) : t.breakpoints[C.K5] ? (this.mediaDevice = "mobileTablet",
                        this.animationsDisabled = !0,
                        this.xsActive = !1) : (this.mediaDevice = "desktop",
                        this.animationsDisabled = !1,
                        this.xsActive = !1),
                        this._cdRef.detectChanges()
                    }
                    ),
                    this.chainSearchChange$.pipe((0,
                    s.sL)(this)).subscribe(()=>{
                        this._recreateChainList()
                    }
                    )
                }
                ngAfterViewInit() {
                    this.searchChains.changes.pipe((0,
                    s.sL)(this)).subscribe(t=>{
                        t?.first?.nativeElement && t.first.nativeElement.focus()
                    }
                    )
                }
                _recreateChainList() {
                    this.chainSearch && 0 !== this.chainSearch.length ? this.itemSelectables = this.items.filter(t=>this._sanitizeSearch(`${t.label}`).includes(this._sanitizeSearch(this.chainSearch))) : this._updateChainListSelectable()
                }
                _sanitizeSearch(t) {
                    return t.length > 0 ? t.toLowerCase().replace(/\s/g, "") : ""
                }
                _updateChainListSelectable() {
                    this.itemSelectables = [...this.items],
                    this._cdRef.detectChanges()
                }
                trackByValue(t, o) {
                    return o.value
                }
                selectItem(t) {
                    if (t === this.selectedItem)
                        return this.toggleList = !1,
                        void this.changeScroll();
                    this.animationsDisabled = !0,
                    this.selectedItem = t,
                    this.toggleList = !1,
                    this.changeScroll(),
                    this.itemSelected.next(this.selectedItem),
                    this._cdRef.detectChanges()
                }
                changeToggleList() {
                    this.items.length > 1 && (this.toggleList ? (this.open = !1,
                    setTimeout(()=>{
                        this.toggleList = !this.toggleList,
                        this.changeScroll(),
                        this._cdRef.detectChanges()
                    }
                    , 100)) : (this.toggleList = !this.toggleList,
                    setTimeout(()=>{
                        this.open = !0,
                        this._cdRef.detectChanges(),
                        this.changeScroll()
                    }
                    , 100)))
                }
                changeScroll() {
                    "mobileTablet" === this.mediaDevice && (document.body.style.overflow = this.toggleList ? "hidden" : "auto")
                }
                _orderChainsByFavorites() {
                    this._favoritePairsService.allFavs$.pipe((0,
                    s.sL)(this)).subscribe(t=>{
                        const o = [...this._items];
                        t && t.length > 0 && (this._items = [],
                        this._addNullChain(o),
                        this._orderChains(o, this._favoritePairsService.favoritesCountPerChain)),
                        this._recreateChainList(),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _addNullChain(t) {
                    const o = t.find(c=>null === c.value);
                    o && this._items.push(o)
                }
                _orderChains(t, o) {
                    for (const c of o) {
                        const r = t.find(d=>d.value === c[0]);
                        r && this._items.push(r)
                    }
                    for (const c of t)
                        this._items.some(r=>r.value === c.value) || this._items.push(c)
                }
                onDestroy() {}
            }
            return e.\u0275fac = function(t) {
                return new (t || e)(n.Y36(n.SBq),n.Y36(n.sBO),n.Y36(_.Yg),n.Y36(p.SBY))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-chain-selector"]],
                viewQuery: function(t, o) {
                    if (1 & t && n.Gf(b, 5),
                    2 & t) {
                        let c;
                        n.iGM(c = n.CRH()) && (o.searchChains = c)
                    }
                },
                hostVars: 1,
                hostBindings: function(t, o) {
                    1 & t && n.NdJ("click", function(r) {
                        return o.onDocumentClicked(r, r.target)
                    }, !1, n.evT),
                    2 & t && n.d8E("@.disabled", o.animationsDisabled)
                },
                inputs: {
                    items: "items",
                    selectedItem: "selectedItem",
                    showOnlyLogoSelected: "showOnlyLogoSelected"
                },
                outputs: {
                    itemSelected: "itemSelected"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 6,
                vars: 7,
                consts: [[1, "selector-container"], [1, "item-selected", 3, "ngClass", "click"], ["alt", "item-logo", "loading", "lazy", 3, "src", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "down", "icon", "chevron-down", 4, "ngIf"], ["class", "item-list", 3, "ngClass", 4, "ngIf"], ["alt", "item-logo", "loading", "lazy", 3, "src"], [3, "ngClass"], ["icon", "chevron-down", 1, "down"], [1, "item-list", 3, "ngClass"], ["class", "mobile-header", 4, "ngIf"], [1, "search-container"], ["appRestrictInput", "^[A-Za-z\\-\\s]*$", "maxlength", "15", 3, "placeholder", "ngModel", "ngModelChange", "keyup", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mobile-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], ["appRestrictInput", "^[A-Za-z\\-\\s]*$", "maxlength", "15", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["searchChains", ""], ["tabindex", "0", "href", "javascript:", 3, "ngClass", "click"]],
                template: function(t, o) {
                    1 & t && (n.TgZ(0, "div", 0)(1, "button", 1),
                    n.NdJ("click", function() {
                        return o.changeToggleList()
                    }),
                    n.YNc(2, y, 1, 1, "img", 2),
                    n.YNc(3, x, 2, 4, "span", 3),
                    n.YNc(4, v, 1, 0, "fa-icon", 4),
                    n.qZA(),
                    n.YNc(5, K, 6, 8, "div", 5),
                    n.qZA()),
                    2 & t && (n.xp6(1),
                    n.Q6J("ngClass", n.VKq(5, R, o.showOnlyLogoSelected)),
                    n.xp6(1),
                    n.Q6J("ngIf", !(null == o.selectedItem || !o.selectedItem.logoUrl)),
                    n.xp6(1),
                    n.Q6J("ngIf", !o.showOnlyLogoSelected && o.selectedItem),
                    n.xp6(1),
                    n.Q6J("ngIf", o.items.length > 1),
                    n.xp6(1),
                    n.Q6J("ngIf", !!o.toggleList))
                },
                dependencies: [O.mk, O.O5, h.uH, h.BN, f._L, g.u5, g.Fj, g.JJ, g.nD, g.On, O.ax, P.aw, P.X$, m.O7],
                styles: [".selector-container[_ngcontent-%COMP%]{position:relative}.selector-container[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%]{border-radius:3.125rem;padding:0 .75rem 0 .3125rem;height:2.25rem;display:flex;align-items:center;font-size:13px;gap:.40625rem;background-color:#e2e7ec;color:#142028;border:none;text-transform:uppercase;min-width:6.25rem}body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%]{color:#142028}.selector-container[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:1.4375rem;width:auto}.selector-container[_ngcontent-%COMP%]   .item-selected[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:.625rem;margin-right:.3rem}@media (max-width: 1023px){.selector-container[_ngcontent-%COMP%]   .item-selected.only-logo[_ngcontent-%COMP%]{min-width:auto;padding-right:0}}.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{color:#142028;position:absolute;top:0;left:0;overflow:auto;z-index:999994}body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{color:#142028}@media (min-width: 1024px){.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{box-shadow:.25rem .25rem .25rem .0625rem #00000040;animation:_ngcontent-%COMP%_openList .2s;background-color:#e2e7ec;width:max-content;border-radius:1rem}body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{background-color:#e2e7ec}}@media (max-width: 1023px){.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{background-color:#f4f5f6;position:fixed;inset:0;width:100%;max-height:100%;height:100%;overflow:hidden;z-index:999993;padding:.625rem 0;transform:translate(100%);transition:transform .4s ease-in-out}body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]{background-color:#f4f5f6}.selector-container[_ngcontent-%COMP%]   .item-list.open[_ngcontent-%COMP%]{transform:translate(0);transition:transform .4s ease-in-out}}.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-wrap:wrap;list-style-type:none;height:max-content;max-height:calc(100vh - 100px);width:21.875rem;overflow:auto;padding:.625rem .625rem .375rem;margin-bottom:0}.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#f4f5f6;border-radius:0}body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#142028}body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#f4f5f6}@media (max-width: 1023px){.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background-color:#f4f5f6;height:auto;overflow:auto;max-width:100%;max-height:calc(100% - 100px)}body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background-color:#f4f5f6}}.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:33%}@media screen and (min-device-width: 768px) and (max-device-width: 1023px){.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:25%}}.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.one-element[_ngcontent-%COMP%]{width:100%}@media (max-width: 1023px){.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.one-element[_ngcontent-%COMP%]{width:33%}}.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.one-element[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{padding:.625rem}.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#142028;flex-direction:column;justify-content:center;align-items:center;display:flex;text-transform:uppercase;font-size:13px;gap:.25rem;cursor:pointer;padding:.625rem 0;height:100%}body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#142028}.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:3.125rem;height:1.4375rem;width:1.4375rem}.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.selected[_ngcontent-%COMP%]{outline:none;text-decoration:none;border-radius:.625rem;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.selected[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.selected[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.selected[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.selected[_ngcontent-%COMP%]{background-color:#f4f5f6}@media (max-width: 1023px){.selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.selected[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, body.dark-theme   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.selected[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, body.dark-theme[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.selected[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, body.light   [_nghost-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.selected[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, body.light[_ngcontent-%COMP%]   .selector-container[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.selected[_ngcontent-%COMP%]{background-color:#e2e7ec}}@keyframes _ngcontent-%COMP%_openList{0%{width:100px;height:36px}to{width:21.875rem;height:max-content}}.mobile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:.625rem .625rem 0}.chainAll[_ngcontent-%COMP%]{display:flex;max-width:1.25rem;text-align:center;justify-content:center;white-space:break-spaces}.chainAllSelected[_ngcontent-%COMP%]{padding-left:.625rem}.search-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:.625rem .625rem 0}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:2.5rem;font-size:13px;width:20.625rem;margin-bottom:.625rem;padding:.5rem .625rem;border-radius:.625rem;color:#142028;background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6!important}@media (max-width: 1023px){.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:calc(100% - 10px);background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#e2e7ec!important}}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}"],
                data: {
                    animation: [(0,
                    a.X$)("outAnimation", [(0,
                    a.eR)(":leave", [(0,
                    a.jt)("50ms", (0,
                    a.oB)({
                        height: 36,
                        width: 120
                    }))])])]
                },
                changeDetection: 0
            }),
            e
        }
        )()
    }
}]);
