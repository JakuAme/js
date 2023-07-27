"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[27], {
    10027: (V,M,r)=>{
        r.d(M, {
            n: ()=>$
        });
        var n = r(94650)
          , s = r(52413)
          , p = r(12113)
          , P = r(61135)
          , m = r(18505)
          , h = r(99703)
          , O = r(89383)
          , _ = r(24006)
          , f = r(49319)
          , u = r(92216)
          , g = r(36895)
          , w = r(92498)
          , b = r(62289);
        const v = ["dropdown"];
        function x(o, i) {
            if (1 & o && (n.TgZ(0, "span"),
            n._uU(1),
            n.qZA()),
            2 & o) {
                const t = n.oxw();
                n.xp6(1),
                n.Oqu(t.isFavs ? "All" : "All chains")
            }
        }
        const l = function(o) {
            return {
                chain: o
            }
        };
        function k(o, i) {
            if (1 & o && n.GkF(0, 13),
            2 & o) {
                const t = n.oxw(3)
                  , e = n.MAs(9);
                n.Q6J("ngTemplateOutlet", e)("ngTemplateOutletContext", n.VKq(2, l, t.dropdownSelected))
            }
        }
        function y(o, i) {
            if (1 & o && n.GkF(0, 13),
            2 & o) {
                const t = n.oxw(3)
                  , e = n.MAs(11);
                n.Q6J("ngTemplateOutlet", e)("ngTemplateOutletContext", n.VKq(2, l, t.dropdownSelected))
            }
        }
        function D(o, i) {
            if (1 & o && (n.TgZ(0, "span", 11),
            n.YNc(1, k, 1, 4, "ng-container", 12),
            n.YNc(2, y, 1, 4, "ng-container", 12),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.Q6J("ngIf", !t.showOnlyIcons),
                n.xp6(1),
                n.Q6J("ngIf", t.showOnlyIcons)
            }
        }
        function T(o, i) {
            if (1 & o && (n.TgZ(0, "span", 14),
            n._uU(1),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij(" ", t.getSelectedNamesForButton(), " ")
            }
        }
        function S(o, i) {
            if (1 & o && (n.YNc(0, D, 3, 2, "span", 9),
            n.YNc(1, T, 2, 1, "ng-template", null, 10, n.W1O)),
            2 & o) {
                const t = n.MAs(2)
                  , e = n.oxw();
                n.Q6J("ngIf", !e.isMultiselect)("ngIfElse", t)
            }
        }
        const L = function() {
            return ["fal", "times"]
        };
        function Z(o, i) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "div", 22)(1, "button", 23),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const c = n.oxw(3);
                    return n.KtG(c.showDropdownContent = !1)
                }),
                n._UZ(2, "fa-icon", 24),
                n.ALo(3, "translate"),
                n.qZA()()
            }
            2 & o && (n.xp6(2),
            n.Q6J("icon", n.DdM(4, L))("ngbTooltip", n.lcZ(3, 2, "home.close")))
        }
        const A = function() {
            return ["far", "arrow-left"]
        };
        function E(o, i) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "div", 25)(1, "button", 26),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const c = n.oxw(3);
                    return n.KtG(c.cancelSelectedChains())
                }),
                n._UZ(2, "fa-icon", 27),
                n.ALo(3, "translate"),
                n.qZA()()
            }
            2 & o && (n.xp6(2),
            n.Q6J("icon", n.DdM(4, A))("ngbTooltip", n.lcZ(3, 2, "pairs_search.back")))
        }
        function I(o, i) {
            if (1 & o && (n.ynx(0),
            n.YNc(1, Z, 4, 5, "div", 20),
            n.YNc(2, E, 4, 5, "div", 21),
            n.TgZ(3, "h3"),
            n._uU(4),
            n.qZA(),
            n.BQk()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.Q6J("ngIf", !t.isMultiselect),
                n.xp6(1),
                n.Q6J("ngIf", t.isMultiselect),
                n.xp6(2),
                n.Oqu(t.isMultiselect ? "Chains" : "Chain")
            }
        }
        const C = function(o) {
            return {
                active: o
            }
        };
        function F(o, i) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "a", 32),
                n.NdJ("click", function() {
                    return n.CHM(t),
                    n.oxw(3).changeChainSelected(null),
                    n.KtG(!1)
                }),
                n._uU(1, "All chains"),
                n.qZA()
            }
            if (2 & o) {
                const t = n.oxw(3);
                n.Q6J("ngClass", n.VKq(1, C, null === t.dropdownSelected))
            }
        }
        function J(o, i) {
            if (1 & o) {
                const t = n.EpF();
                n.ynx(0),
                n.TgZ(1, "a", 32),
                n.NdJ("click", function() {
                    const d = n.CHM(t).$implicit;
                    return n.oxw(4).changeChainSelected(d),
                    n.KtG(!1)
                }),
                n.GkF(2, 13),
                n.qZA(),
                n.BQk()
            }
            if (2 & o) {
                const t = i.$implicit
                  , e = n.oxw(4)
                  , c = n.MAs(9);
                n.xp6(1),
                n.Q6J("ngClass", n.VKq(3, C, e.dropdownSelected && e.dropdownSelected.chain === t.chain)),
                n.xp6(1),
                n.Q6J("ngTemplateOutlet", c)("ngTemplateOutletContext", n.VKq(5, l, t))
            }
        }
        function N(o, i) {
            if (1 & o && (n.ynx(0),
            n.TgZ(1, "span", 33),
            n._uU(2),
            n.ALo(3, "translate"),
            n.qZA(),
            n.YNc(4, J, 3, 7, "ng-container", 31),
            n.BQk()),
            2 & o) {
                const t = n.oxw(3);
                n.xp6(2),
                n.hij("- ", n.lcZ(3, 2, "home.favorites"), ""),
                n.xp6(2),
                n.Q6J("ngForOf", t.chainListFavs)
            }
        }
        function Q(o, i) {
            1 & o && (n.TgZ(0, "span", 33),
            n._uU(1),
            n.ALo(2, "translate"),
            n.qZA()),
            2 & o && (n.xp6(1),
            n.hij("- ", n.lcZ(2, 1, "big-swap-explorer.col.others"), ""))
        }
        function B(o, i) {
            if (1 & o) {
                const t = n.EpF();
                n.ynx(0),
                n.TgZ(1, "a", 32),
                n.NdJ("click", function() {
                    const d = n.CHM(t).$implicit;
                    return n.oxw(3).changeChainSelected(d),
                    n.KtG(!1)
                }),
                n.GkF(2, 13),
                n.qZA(),
                n.BQk()
            }
            if (2 & o) {
                const t = i.$implicit
                  , e = n.oxw(3)
                  , c = n.MAs(9);
                n.xp6(1),
                n.Q6J("ngClass", n.VKq(3, C, e.dropdownSelected && e.dropdownSelected.chain === t.chain)),
                n.xp6(1),
                n.Q6J("ngTemplateOutlet", c)("ngTemplateOutletContext", n.VKq(5, l, t))
            }
        }
        function K(o, i) {
            if (1 & o && (n.TgZ(0, "div", 28),
            n.YNc(1, F, 2, 3, "a", 29),
            n.YNc(2, N, 5, 4, "ng-container", 16),
            n.YNc(3, Q, 3, 3, "span", 30),
            n.YNc(4, B, 3, 7, "ng-container", 31),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.Q6J("ngIf", !t.chainSearch.length && t.showAllChainsOption),
                n.xp6(1),
                n.Q6J("ngIf", t.chainListFavs.length > 0),
                n.xp6(1),
                n.Q6J("ngIf", t.chainListFavs.length > 0),
                n.xp6(1),
                n.Q6J("ngForOf", t.chainListSelectable)
            }
        }
        function U(o, i) {
            if (1 & o) {
                const t = n.EpF();
                n.ynx(0),
                n.TgZ(1, "a", 32),
                n.NdJ("click", function() {
                    const d = n.CHM(t).$implicit;
                    return n.oxw(3).addSelectedChain(d),
                    n.KtG(!1)
                }),
                n._UZ(2, "input", 34),
                n.GkF(3, 13),
                n.qZA(),
                n.BQk()
            }
            if (2 & o) {
                const t = i.$implicit
                  , e = n.oxw(3)
                  , c = n.MAs(9);
                n.xp6(1),
                n.Q6J("ngClass", n.VKq(4, C, e.selectedChains.indexOf(t.chain) > -1)),
                n.xp6(1),
                n.Q6J("checked", e.selectedChains.indexOf(t.chain) > -1),
                n.xp6(1),
                n.Q6J("ngTemplateOutlet", c)("ngTemplateOutletContext", n.VKq(6, l, t))
            }
        }
        function W(o, i) {
            if (1 & o && (n.TgZ(0, "div", 28),
            n.YNc(1, U, 4, 8, "ng-container", 31),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.Q6J("ngForOf", t.chainListSelectable)
            }
        }
        function R(o, i) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "div", 35)(1, "button", 36),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const c = n.oxw(2);
                    return n.KtG(c.sendSelectedChains())
                }),
                n._uU(2),
                n.ALo(3, "translate"),
                n.qZA(),
                n.TgZ(4, "button", 36),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const c = n.oxw(2);
                    return n.KtG(c.cancelSelectedChains())
                }),
                n._uU(5),
                n.ALo(6, "translate"),
                n.qZA()()
            }
            2 & o && (n.xp6(2),
            n.Oqu(n.lcZ(3, 2, "pairs_search.apply")),
            n.xp6(3),
            n.Oqu(n.lcZ(6, 4, "pairs_search.cancel")))
        }
        function Y(o, i) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "div", 15),
                n.YNc(1, I, 5, 3, "ng-container", 16),
                n.TgZ(2, "input", 17),
                n.NdJ("ngModelChange", function(c) {
                    n.CHM(t);
                    const d = n.oxw();
                    return n.KtG(d.chainSearch = c)
                })("keyup", function() {
                    n.CHM(t);
                    const c = n.oxw();
                    return n.KtG(c.chainSearchChange$.next(c.chainSearch))
                }),
                n.ALo(3, "translate"),
                n.qZA(),
                n.YNc(4, K, 5, 4, "div", 18),
                n.YNc(5, W, 2, 1, "div", 18),
                n.YNc(6, R, 7, 6, "div", 19),
                n.qZA()
            }
            if (2 & o) {
                const t = n.oxw();
                n.xp6(1),
                n.Q6J("ngIf", "mobileTablet" === t.mediaDevice),
                n.xp6(1),
                n.Q6J("placeholder", n.lcZ(3, 6, "favorites.search"))("ngModel", t.chainSearch),
                n.xp6(2),
                n.Q6J("ngIf", !t.isMultiselect),
                n.xp6(1),
                n.Q6J("ngIf", t.isMultiselect),
                n.xp6(1),
                n.Q6J("ngIf", t.isMultiselect && "mobileTablet" === t.mediaDevice)
            }
        }
        function q(o, i) {
            if (1 & o && (n.TgZ(0, "span"),
            n._uU(1),
            n.qZA()),
            2 & o) {
                const t = n.oxw().chain;
                n.xp6(1),
                n.hij("(", t.count, ")")
            }
        }
        function j(o, i) {
            if (1 & o && (n.TgZ(0, "span"),
            n._uU(1),
            n.qZA()),
            2 & o) {
                const t = n.oxw().chain;
                n.xp6(1),
                n.hij("(", t.count, ")")
            }
        }
        function G(o, i) {
            if (1 & o && (n._UZ(0, "img", 37),
            n._uU(1),
            n.YNc(2, q, 2, 1, "span", 16),
            n.YNc(3, j, 2, 1, "span", 16)),
            2 & o) {
                const t = i.chain
                  , e = n.oxw();
                n.Q6J("src", t.logoUrl, n.LSH)("alt", t.chain),
                n.xp6(1),
                n.hij(" ", t.chainName, " "),
                n.xp6(1),
                n.Q6J("ngIf", e.isMultiselect && t.count),
                n.xp6(1),
                n.Q6J("ngIf", e.chainListFavs.length > 0 && t.count)
            }
        }
        function H(o, i) {
            if (1 & o && n._UZ(0, "img", 37),
            2 & o) {
                const t = i.chain;
                n.Q6J("src", t.logoUrl, n.LSH)("alt", t.chain)
            }
        }
        const z = function(o, i) {
            return {
                open: o,
                multiselect: i
            }
        };
        let $ = (()=>{
            class o extends s.K9 {
                clickout(t) {
                    !this._eRef.nativeElement.contains(t.target) && this.showDropdownContent && (this.showDropdownContent = !1)
                }
                constructor(t, e, c, d) {
                    super(),
                    this._cdRef = t,
                    this._eRef = e,
                    this._breakpointObserver = c,
                    this._favoritePairsService = d,
                    this._chainListWithCount = h.CXF.allChains.map(a=>({
                        ...a,
                        count: 0
                    })),
                    this.isMultiselect = !1,
                    this.showOnlyIcons = !0,
                    this.isFavs = !1,
                    this.showAllChainsOption = !0,
                    this.chainsSelected = new n.vpe,
                    this.sortByFavorites = !0,
                    this.chainSearch = "",
                    this.chainSearchChange$ = new P.X(null),
                    this.chainListSelectable = [],
                    this.chainListFavs = [],
                    this.mediaDevice = "",
                    this.prevSelectedChains = [],
                    this.selectedChains = [],
                    this.favorites = [],
                    this._showDropdownContent = !1
                }
                set defaultChainSelected(t) {
                    this.dropdownSelected = t ? this._chainListWithCount.find(e=>e.chain === t) ?? null : null,
                    this._cdRef.detectChanges()
                }
                set allChains(t) {
                    this.showAllChainsOption = null === t || t,
                    this._cdRef.detectChanges()
                }
                get showDropdownContent() {
                    return this._showDropdownContent
                }
                set showDropdownContent(t) {
                    this._showDropdownContent = t;
                    const c = this.dropdown.nativeElement.closest(".panel-container");
                    this._showDropdownContent && "mobileTablet" === this.mediaDevice ? ("hidden" !== document.body.style.overflow && (document.body.style.overflow = "hidden"),
                    c && c.classList.add("button-below")) : !this._showDropdownContent && "mobileTablet" === this.mediaDevice && (document.body.style.overflow = "auto",
                    c && c.classList.remove("button-below")),
                    this._cdRef.detectChanges()
                }
                ngOnInit() {
                    this._breakpointObserver.observe([p.K5, p.mT]).pipe((0,
                    s.sL)(this)).subscribe(t=>{
                        this.mediaDevice = t.breakpoints[p.K5] ? "mobileTablet" : "desktop",
                        this._cdRef.detectChanges()
                    }
                    ),
                    this.chainSearchChange$.pipe((0,
                    s.sL)(this)).subscribe(()=>{
                        this._recreateChainList()
                    }
                    ),
                    this.isFavs ? this._favoritePairsService.favorites$.pipe((0,
                    s.sL)(this), (0,
                    m.b)(t=>{
                        this.favorites = [...t],
                        this._favsListSort(),
                        this._recreateChainList()
                    }
                    )).subscribe() : this.sortByFavorites && this._orderChainsByFavorites()
                }
                ngOnChanges(t) {
                    t.chainsResults?.currentValue.length > 0 ? (this._chainListWithCount = t.chainsResults.currentValue,
                    this._recreateChainList()) : this.isFavs && this._favsListSort()
                }
                changeChainSelected(t) {
                    this.chainsSelected.emit(t ? [t.chain] : []),
                    this.dropdownSelected = t,
                    this.showDropdownContent = !1,
                    this.chainSearch = "",
                    this._updateChainListSelectable(),
                    this.isFavs && this._favsListSort()
                }
                addSelectedChain(t) {
                    const e = this.selectedChains.indexOf(t.chain);
                    e > -1 ? this.selectedChains.splice(e, 1) : this.selectedChains.push(t.chain)
                }
                sendSelectedChains() {
                    this.prevSelectedChains = [...this.selectedChains],
                    this.chainsSelected.emit(this.selectedChains),
                    this.chainSearch = "",
                    this.showDropdownContent = !1,
                    this._updateChainListSelectable()
                }
                cancelSelectedChains() {
                    this.selectedChains = [...this.prevSelectedChains],
                    this.chainSearch = "",
                    this._updateChainListSelectable(),
                    this.showDropdownContent = !1
                }
                _updateChainListSelectable() {
                    this.chainListSelectable = [...this._chainListWithCount],
                    this._cdRef.detectChanges()
                }
                _recreateChainList() {
                    this.favorites.length > 0 ? this._favsListSort() : this.chainSearch && 0 !== this.chainSearch.length ? this.chainListSelectable = this._chainListWithCount.filter(t=>this._sanitizeSearch(`${t.chainName}`).includes(this._sanitizeSearch(this.chainSearch))) : this._updateChainListSelectable()
                }
                _sanitizeSearch(t) {
                    return t.length > 0 ? t.toLowerCase().replace(/\s/g, "") : ""
                }
                _getChainName(t) {
                    return h.CXF.getChainName(t)
                }
                getSelectedNamesForButton() {
                    return this.selectedChains.map(e=>this._getChainName(e)).join(", ")
                }
                _favsListSort() {
                    this._chainListWithCount = h.CXF.allChains.map(t=>({
                        ...t,
                        count: 0
                    })),
                    this.chainListFavs = [],
                    this.chainListSelectable = [];
                    for (const t of this._chainListWithCount) {
                        for (const e of this.favorites)
                            e.chain === t.chain && (t.count += 1);
                        t.count > 0 ? this.chainListFavs.push(t) : this.chainListSelectable.push(t),
                        this.chainListFavs.sort((e,c)=>c.count - e.count)
                    }
                }
                _orderChainsByFavorites() {
                    this._favoritePairsService.allFavs$.pipe((0,
                    s.sL)(this)).subscribe(t=>{
                        const e = [...this._chainListWithCount];
                        t && t.length > 0 && (this._chainListWithCount = [],
                        this._addNullChain(e),
                        this._orderChains(e, this._favoritePairsService.favoritesCountPerChain)),
                        this._recreateChainList(),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _addNullChain(t) {
                    const e = t.find(c=>null === c.chain);
                    e && this._chainListWithCount.push(e)
                }
                _orderChains(t, e) {
                    for (const c of e) {
                        const d = t.find(a=>a.chain === c[0]);
                        d && this._chainListWithCount.push(d)
                    }
                    for (const c of t)
                        this._chainListWithCount.some(d=>d.chain === c.chain) || this._chainListWithCount.push(c)
                }
                onDestroy() {}
            }
            return o.\u0275fac = function(t) {
                return new (t || o)(n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(b.Yg),n.Y36(h.SBY))
            }
            ,
            o.\u0275cmp = n.Xpm({
                type: o,
                selectors: [["app-dropdown-chains"]],
                viewQuery: function(t, e) {
                    if (1 & t && n.Gf(v, 5),
                    2 & t) {
                        let c;
                        n.iGM(c = n.CRH()) && (e.dropdown = c.first)
                    }
                },
                hostBindings: function(t, e) {
                    1 & t && n.NdJ("click", function(d) {
                        return e.clickout(d)
                    }, !1, n.evT)
                },
                inputs: {
                    defaultChainSelected: "defaultChainSelected",
                    allChains: "allChains",
                    isMultiselect: "isMultiselect",
                    chainsResults: "chainsResults",
                    showOnlyIcons: "showOnlyIcons",
                    isFavs: "isFavs",
                    sortByFavorites: "sortByFavorites"
                },
                outputs: {
                    chainsSelected: "chainsSelected"
                },
                standalone: !0,
                features: [n.qOj, n.TTD, n.jDz],
                decls: 12,
                vars: 11,
                consts: [[1, "dropdown", 3, "ngClass"], ["dropdown", ""], [3, "click"], [4, "ngIf", "ngIfElse"], ["dropDownSelectedTemplate", ""], [3, "icon"], ["class", "dropdown-content", 4, "ngIf"], ["imgChain", ""], ["imgOnlyChain", ""], ["class", "chain selected active", 4, "ngIf", "ngIfElse"], ["multiselectSelectedTemplate", ""], [1, "chain", "selected", "active"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "selected"], [1, "dropdown-content"], [4, "ngIf"], ["appRestrictInput", "^[A-Za-z\\-\\s]*$", "maxlength", "15", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["class", "chain-list", 4, "ngIf"], ["class", "dropdown-content__buttons", 4, "ngIf"], ["class", "close-container", 4, "ngIf"], ["class", "back-container", 4, "ngIf"], [1, "close-container"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], [1, "back-container"], ["type", "button", "aria-label", "Back", 1, "back", 3, "click"], ["placement", "auto", 3, "icon", "ngbTooltip"], [1, "chain-list"], ["href", "javascript:", "class", "chain", 3, "ngClass", "click", 4, "ngIf"], ["class", "favs-list-title", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["href", "javascript:", 1, "chain", 3, "ngClass", "click"], [1, "favs-list-title"], ["type", "checkbox", 1, "form-check-input", 3, "checked"], [1, "dropdown-content__buttons"], ["type", "button", 1, "btn", 3, "click"], ["loading", "lazy", 1, "chain-img", 3, "src", "alt"]],
                template: function(t, e) {
                    if (1 & t && (n.TgZ(0, "div", 0, 1)(2, "button", 2),
                    n.NdJ("click", function() {
                        return e.showDropdownContent = !e.showDropdownContent
                    }),
                    n.YNc(3, x, 2, 1, "span", 3),
                    n.YNc(4, S, 3, 2, "ng-template", null, 4, n.W1O),
                    n._UZ(6, "fa-icon", 5),
                    n.qZA(),
                    n.YNc(7, Y, 7, 8, "div", 6),
                    n.qZA(),
                    n.YNc(8, G, 4, 5, "ng-template", null, 7, n.W1O),
                    n.YNc(10, H, 1, 2, "ng-template", null, 8, n.W1O)),
                    2 & t) {
                        const c = n.MAs(5);
                        n.Q6J("ngClass", n.WLB(8, z, !!e.showDropdownContent, e.isMultiselect)),
                        n.xp6(2),
                        n.Gre("button-selected ", e.showOnlyIcons ? "no-min-width" : null, ""),
                        n.xp6(1),
                        n.Q6J("ngIf", !e.dropdownSelected && 0 === e.selectedChains.length)("ngIfElse", c),
                        n.xp6(3),
                        n.Q6J("icon", e.showDropdownContent ? "chevron-up" : "chevron-down"),
                        n.xp6(1),
                        n.Q6J("ngIf", !!e.showDropdownContent)
                    }
                },
                dependencies: [g.mk, g.O5, g.tP, u.uH, u.BN, f._L, _.u5, _.Fj, _.JJ, _.nD, _.On, g.ax, O.aw, O.X$, w.O7],
                styles: ['[_nghost-%COMP%]{width:100%}.dropdown[_ngcontent-%COMP%]{position:relative;width:100%}.dropdown.open[_ngcontent-%COMP%]{z-index:999997}.dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{background:none;border:none;background-color:#e2e7ec;color:#142028;font-size:13px;padding:.5rem;border-radius:.625rem;display:flex;justify-content:space-between;align-items:center;min-width:10rem;gap:.25rem;width:100%;height:2.25rem}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]{color:#142028}.dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{pointer-events:none}.dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]:hover{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]:hover{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]:hover{color:#cacedb}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]:hover{color:#3d5170}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%]:hover{color:#3d5170}.dropdown[_ngcontent-%COMP%]   .button-selected[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   .chain-img[_ngcontent-%COMP%]{width:1.75rem;height:1.75rem;border-radius:3.125rem}.dropdown[_ngcontent-%COMP%]   .no-min-width[_ngcontent-%COMP%]{min-width:auto;width:auto}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{position:absolute;background-color:#e2e7ec;box-shadow:.25rem .25rem .25rem .0625rem #00000040;border-radius:.625rem;width:max-content;min-width:100%;margin-top:.125rem;z-index:999996;left:0;padding:.625rem;max-height:25rem;overflow-y:auto}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#e2e7ec}@media (max-width: 1023px){.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{height:100%;width:100%;position:fixed;inset:0;z-index:999995;max-height:none;background-color:#f4f5f6;padding:.625rem}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{background-color:#f4f5f6}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:2.5rem;margin-bottom:1.25rem}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{justify-content:flex-end}}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .chain-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 .625rem .625rem}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#f4f5f6;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#142028}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#f4f5f6}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:2.5rem;font-size:13px;width:13.75rem;margin-bottom:.625rem;padding:.5rem .625rem;border-radius:.625rem;color:#142028;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6}@media (max-width: 1023px){.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:calc(100% - 10px);background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#e2e7ec}}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.light   [_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}body.light[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#818ea3}.dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.dropdown.multiselect[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:calc(100% - 1.25rem)}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .back-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;padding:.8125rem 0 0 .5rem}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .back-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;outline:none;border:none;color:#818ea3;font-size:1.125rem;height:2.125rem;width:2.125rem;display:flex;align-items:center;justify-content:center}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .chain-list[_ngcontent-%COMP%]{padding-bottom:4.375rem}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;width:100%;padding:.9375rem .9375rem 0;display:flex;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]{background-color:#f4f5f6}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:1.5rem;margin-bottom:1.5625rem;margin-right:1.5625rem;flex:1;color:#142028}body.dark-theme   [_nghost-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#142028}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{background-color:#00b8d8}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child:disabled:hover{background-color:#00b8d8}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child:hover{background-color:#00a2bf}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{background-color:#e2e7ec;margin-right:0}body.dark-theme   [_nghost-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{background-color:#23323c}body.light   [_nghost-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{background-color:#e2e7ec}.chain[_ngcontent-%COMP%]{display:flex;gap:.375rem;align-items:center;position:relative;color:#818ea3;text-decoration:none;font-size:13px;margin:0 -1.25rem;padding:.5165rem 1.25rem}@media (max-width: 1023px){.chain[_ngcontent-%COMP%]{height:3.25rem;gap:.8rem}}body.dark-theme   [_nghost-%COMP%]   .chain[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .chain[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .chain[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .chain[_ngcontent-%COMP%]{color:#818ea3}.chain.selected[_ngcontent-%COMP%]{padding:0;margin:0}.chain.selected[_ngcontent-%COMP%]   .chain-img[_ngcontent-%COMP%]{top:0;left:.375rem}.chain.selected[_ngcontent-%COMP%]:hover{color:#142028;background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .chain.selected[_ngcontent-%COMP%]:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .chain.selected[_ngcontent-%COMP%]:hover{color:#fff}body.light   [_nghost-%COMP%]   .chain.selected[_ngcontent-%COMP%]:hover{color:#142028}body.light[_ngcontent-%COMP%]   .chain.selected[_ngcontent-%COMP%]:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   .chain.selected[_ngcontent-%COMP%]:hover{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .chain.selected[_ngcontent-%COMP%]:hover{background-color:#23323c}body.light   [_nghost-%COMP%]   .chain.selected[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .chain.selected[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}.chain.active[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .chain.active[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .chain.active[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .chain.active[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .chain.active[_ngcontent-%COMP%]{color:#142028}.chain[_ngcontent-%COMP%]   .chain-img[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;border-radius:3.125rem;padding:.125rem}.chain[_ngcontent-%COMP%]:hover{color:#142028;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .chain[_ngcontent-%COMP%]:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .chain[_ngcontent-%COMP%]:hover{color:#fff}body.light   [_nghost-%COMP%]   .chain[_ngcontent-%COMP%]:hover{color:#142028}body.light[_ngcontent-%COMP%]   .chain[_ngcontent-%COMP%]:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   .chain[_ngcontent-%COMP%]:hover{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .chain[_ngcontent-%COMP%]:hover{background-color:#142028}body.light   [_nghost-%COMP%]   .chain[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .chain[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}.close-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.close-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex}.favs-list-title[_ngcontent-%COMP%]{color:#818ea3;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px}body.dark-theme   [_nghost-%COMP%]   .favs-list-title[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .favs-list-title[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .favs-list-title[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .favs-list-title[_ngcontent-%COMP%]{color:#818ea3}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .chain[_ngcontent-%COMP%]{gap:.375rem;height:3.25rem}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .chain[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{appearance:none;-webkit-appearance:none;position:initial;margin:0;margin-right:.4375rem;padding:0;height:1.375rem;width:1.375rem;border-radius:.375rem;background-color:#fff!important}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .chain[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked{background-color:#65d2e4!important}.dropdown.multiselect[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .chain[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:before{content:"";display:block;border:solid #000;width:.5rem;height:.9375rem;margin-left:.125rem;border-width:0 .0625rem .0625rem 0;transform-origin:bottom;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg)}'],
                changeDetection: 0
            }),
            o
        }
        )()
    }
}]);
