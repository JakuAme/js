"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[7301], {
    7778: (B,w,s)=>{
        s.d(w, {
            Z: ()=>Q
        });
        var e = s(99703)
          , d = s(89383)
          , u = s(92498)
          , S = s(49319)
          , x = s(36895)
          , O = s(51303)
          , y = s(92253)
          , t = s(94650);
        const C = function(i) {
            return {
                "width-adjust": i
            }
        }
          , k = function(i) {
            return {
                "d-none": i
            }
        };
        function b(i, m) {
            if (1 & i && (t.TgZ(0, "span", 16),
            t._uU(1, " Token: "),
            t.TgZ(2, "span", 17),
            t._uU(3),
            t.ALo(4, "slice"),
            t.qZA(),
            t.TgZ(5, "span", 17),
            t._uU(6),
            t.ALo(7, "slice"),
            t.qZA()()),
            2 & i) {
                const a = t.oxw();
                t.Q6J("ngClass", t.VKq(13, C, a.screenWidth <= 798)),
                t.xp6(2),
                t.Q6J("ngClass", t.VKq(15, k, a.screenWidth > 1300)),
                t.xp6(1),
                t.hij("...", t.Dn7(4, 5, a.item.idToken, 34, 42), ""),
                t.xp6(2),
                t.Q6J("ngClass", t.VKq(17, k, a.screenWidth <= 1300)),
                t.xp6(1),
                t.hij("...", t.Dn7(7, 9, a.item.idToken, 30, 42), "")
            }
        }
        function P(i, m) {
            if (1 & i && (t.TgZ(0, "span"),
            t._uU(1, " Token: "),
            t.TgZ(2, "span", 18),
            t._uU(3),
            t.ALo(4, "slice"),
            t.ALo(5, "slice"),
            t.qZA()()),
            2 & i) {
                const a = t.oxw();
                t.xp6(3),
                t.AsE("", t.Dn7(4, 2, a.item.idToken, 0, 8), "...", t.Dn7(5, 6, a.item.idToken, 38, 42), "")
            }
        }
        function T(i, m) {
            if (1 & i && (t.TgZ(0, "span", 16),
            t._uU(1),
            t.ALo(2, "translate"),
            t.TgZ(3, "span", 17),
            t._uU(4),
            t.ALo(5, "slice"),
            t.ALo(6, "publicAddress"),
            t.qZA(),
            t.TgZ(7, "span", 17),
            t._uU(8),
            t.ALo(9, "slice"),
            t.ALo(10, "publicAddress"),
            t.qZA()()),
            2 & i) {
                const a = t.oxw();
                t.Q6J("ngClass", t.VKq(22, C, a.screenWidth <= 1300)),
                t.xp6(1),
                t.hij(" ", t.lcZ(2, 6, "home.pair"), ": "),
                t.xp6(2),
                t.Q6J("ngClass", t.VKq(24, k, a.screenWidth > 1300)),
                t.xp6(1),
                t.hij("...", t.Dn7(5, 8, t.xi3(6, 12, a.item.id, a.item.chain), 34, 42), ""),
                t.xp6(3),
                t.Q6J("ngClass", t.VKq(26, k, a.screenWidth <= 1300)),
                t.xp6(1),
                t.hij("...", t.Dn7(9, 15, t.xi3(10, 19, a.item.id, a.item.chain), 30, 42), "")
            }
        }
        function E(i, m) {
            if (1 & i && (t.TgZ(0, "span", 19),
            t._uU(1),
            t.ALo(2, "translate"),
            t.TgZ(3, "span", 18),
            t._uU(4),
            t.ALo(5, "slice"),
            t.ALo(6, "slice"),
            t.qZA()()),
            2 & i) {
                const a = t.oxw();
                t.xp6(1),
                t.hij(" ", t.lcZ(2, 3, "home.pair"), ": "),
                t.xp6(3),
                t.AsE("", t.Dn7(5, 5, a.item.id, 0, 8), "...", t.Dn7(6, 9, a.item.id, 38, 42), "")
            }
        }
        const g = function(i, m) {
            return {
                "mx-2": i,
                "me-2": m
            }
        };
        function A(i, m) {
            if (1 & i && (t.TgZ(0, "span", 20),
            t._uU(1),
            t.qZA()),
            2 & i) {
                const a = t.oxw();
                t.Q6J("ngClass", t.WLB(2, g, a.item.chain !== a.Chain.Binance, a.item.chain === a.Chain.Binance)),
                t.xp6(1),
                t.Oqu(a.item.chain !== a.Chain.Binance ? "|" : "")
            }
        }
        function L(i, m) {
            if (1 & i && (t.TgZ(0, "span", 21),
            t._uU(1, " Holders: "),
            t.TgZ(2, "span", 18),
            t._uU(3),
            t.ALo(4, "number"),
            t.qZA()()),
            2 & i) {
                const a = t.oxw();
                t.Q6J("ngClass", t.VKq(5, C, a.screenWidth <= 798 && !a.isModal)),
                t.xp6(3),
                t.Oqu(t.xi3(4, 2, a.item.holders, "1.0-0"))
            }
        }
        function v(i, m) {
            1 & i && (t.TgZ(0, "span", 23),
            t._uU(1, "|"),
            t.qZA())
        }
        function f(i, m) {
            if (1 & i && (t.TgZ(0, "span", 21),
            t.YNc(1, v, 2, 0, "span", 22),
            t._uU(2, "Tx: "),
            t.TgZ(3, "span", 18),
            t._uU(4),
            t.ALo(5, "number"),
            t.qZA()()),
            2 & i) {
                const a = t.oxw();
                t.Q6J("ngClass", t.VKq(6, C, a.screenWidth <= 798 && !a.isModal)),
                t.xp6(1),
                t.Q6J("ngIf", a.item.holders),
                t.xp6(3),
                t.Oqu(t.xi3(5, 3, a.item.txCount, "1.0-0"))
            }
        }
        function I(i, m) {
            if (1 & i && (t.TgZ(0, "span", 24),
            t._uU(1),
            t.qZA()),
            2 & i) {
                const a = t.oxw();
                t.xp6(1),
                t.hij("", a.getExchangeName(a.item.exchange, a.item.chain), " ")
            }
        }
        function Z(i, m) {
            if (1 & i && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & i) {
                const a = t.oxw();
                t.xp6(1),
                t.Oqu(a.item.exchangeSpecificVersion)
            }
        }
        function F(i, m) {
            if (1 & i && (t.TgZ(0, "span", 25),
            t.ALo(1, "translate"),
            t.ALo(2, "translate"),
            t._uU(3),
            t.qZA()),
            2 & i) {
                const a = t.oxw();
                t.hYB("ngbTooltip", "", t.lcZ(1, 3, "pair_explorer.pool"), " ", t.lcZ(2, 5, "pair_explorer.col_7"), ""),
                t.xp6(3),
                t.hij(" ", a.item.fee, "%")
            }
        }
        const R = function(i) {
            return ["chain-logo", i]
        };
        function J(i, m) {
            if (1 & i && (t._UZ(0, "img", 26),
            t.ALo(1, "chainLogoUrl")),
            2 & i) {
                const a = t.oxw();
                t.Q6J("ngClass", t.VKq(5, R, a.item.chain.toLowerCase()))("src", t.lcZ(1, 3, a.item.chain), t.LSH)("alt", a.item.chain + " chain")
            }
        }
        const N = function(i, m) {
            return {
                "background-color": i,
                color: m
            }
        };
        let Q = (()=>{
            class i {
                constructor(a) {
                    this._cdRef = a,
                    this.isModal = !1,
                    this.Chain = e.qop,
                    this.screenWidth = window.innerWidth,
                    this.rowHover = !1
                }
                get defaultApiExchange() {
                    return e.ibW
                }
                getExchangeName(a, l) {
                    return e.i9O.getExchangeNameFromExchangeApi(a, l)
                }
                hasExchangeFeePercentagePools(a, l, M) {
                    return e.i9O.hasExchangeFeePercentagePools(a, l, M)
                }
                setRowHover(a) {
                    this.rowHover = a,
                    this._cdRef.detectChanges()
                }
            }
            return i.\u0275fac = function(a) {
                return new (a || i)(t.Y36(t.sBO))
            }
            ,
            i.\u0275cmp = t.Xpm({
                type: i,
                selectors: [["app-pair-result-item"]],
                inputs: {
                    item: "item",
                    isModal: "isModal"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 26,
                vars: 37,
                consts: [[1, "content-row", 3, "mouseenter", "mouseleave"], [1, "token-symbol-container", "me-2"], [3, "symbol", "name", "chain", "address", "logoUrl", "hasWhiteBackground"], [3, "tokenRight", "tokenLeft", "isLink"], [1, "title-search-normal"], [1, "content-row", "row-result", 3, "mouseenter", "mouseleave"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "mx-2"], ["class", "width-adjust width-adjust-modal", 4, "ngIf"], ["class", "separator", 3, "ngClass", 4, "ngIf"], ["class", "me-2 content-row-data", 3, "ngClass", 4, "ngIf"], [1, "exchange-specific-version", 3, "ngStyle"], ["class", "title", 4, "ngIf"], ["class", "badge bg-info d-inline-block ms-2 me-1 align-middle", "placement", "bottom", 3, "ngbTooltip", 4, "ngIf"], [3, "ngClass", "src", "alt", 4, "ngIf"], [3, "ngClass"], [1, "text-light", 3, "ngClass"], [1, "text-light"], [1, "width-adjust", "width-adjust-modal"], [1, "separator", 3, "ngClass"], [1, "me-2", "content-row-data", 3, "ngClass"], ["class", "me-2", 4, "ngIf"], [1, "me-2"], [1, "title"], ["placement", "bottom", 1, "badge", "bg-info", "d-inline-block", "ms-2", "me-1", "align-middle", 3, "ngbTooltip"], [3, "ngClass", "src", "alt"]],
                template: function(a, l) {
                    if (1 & a && (t.TgZ(0, "div", 0),
                    t.NdJ("mouseenter", function() {
                        return l.setRowHover(!0)
                    })("mouseleave", function() {
                        return l.setRowHover(!1)
                    }),
                    t.TgZ(1, "span", 1),
                    t._UZ(2, "app-token-logo", 2),
                    t.qZA(),
                    t._UZ(3, "app-token-name", 3),
                    t.ALo(4, "appSafe"),
                    t.ALo(5, "appSafe"),
                    t.TgZ(6, "span", 4),
                    t._uU(7),
                    t.ALo(8, "appSafe"),
                    t.qZA()(),
                    t.TgZ(9, "div", 5),
                    t.NdJ("mouseenter", function() {
                        return l.setRowHover(!0)
                    })("mouseleave", function() {
                        return l.setRowHover(!1)
                    }),
                    t.YNc(10, b, 8, 19, "span", 6),
                    t.YNc(11, P, 6, 10, "span", 7),
                    t.TgZ(12, "span", 8),
                    t._uU(13, "|"),
                    t.qZA(),
                    t.YNc(14, T, 11, 28, "span", 6),
                    t.YNc(15, E, 7, 13, "span", 9),
                    t.YNc(16, A, 2, 5, "span", 10),
                    t.YNc(17, L, 5, 7, "span", 11),
                    t.YNc(18, f, 6, 8, "span", 11),
                    t.TgZ(19, "span", 12),
                    t.ALo(20, "exchangeBackgroundColor"),
                    t.ALo(21, "exchangeTextColor"),
                    t.YNc(22, I, 2, 1, "span", 13),
                    t.YNc(23, Z, 2, 1, "span", 7),
                    t.qZA(),
                    t.YNc(24, F, 4, 7, "span", 14),
                    t.YNc(25, J, 2, 7, "img", 15),
                    t.qZA()),
                    2 & a) {
                        let M;
                        t.xp6(2),
                        t.Q6J("symbol", l.item.symbol)("name", l.item.name)("chain", l.item.chain)("address", l.item.idToken)("logoUrl", l.item.logo)("hasWhiteBackground", !0),
                        t.xp6(1),
                        t.Q6J("tokenRight", t.lcZ(4, 22, l.item.symbol_vs))("tokenLeft", t.lcZ(5, 24, l.item.symbol))("isLink", l.rowHover),
                        t.xp6(4),
                        t.hij("- ", t.lcZ(8, 26, l.item.realName), ""),
                        t.xp6(3),
                        t.Q6J("ngIf", !l.isModal),
                        t.xp6(1),
                        t.Q6J("ngIf", l.isModal),
                        t.xp6(3),
                        t.Q6J("ngIf", !l.isModal),
                        t.xp6(1),
                        t.Q6J("ngIf", l.isModal),
                        t.xp6(1),
                        t.Q6J("ngIf", !l.isModal),
                        t.xp6(1),
                        t.Q6J("ngIf", l.item.chain !== l.Chain.Binance && l.item.holders),
                        t.xp6(1),
                        t.Q6J("ngIf", l.item.txCount),
                        t.xp6(1),
                        t.Q6J("ngStyle", t.WLB(34, N, t.xi3(20, 28, l.item.exchange || l.defaultApiExchange, l.item.chain), t.xi3(21, 31, l.item.exchange || l.defaultApiExchange, l.item.chain))),
                        t.xp6(3),
                        t.Q6J("ngIf", !!l.item.exchange && !!l.item.chain),
                        t.xp6(1),
                        t.Q6J("ngIf", !!l.item.exchangeSpecificVersion),
                        t.xp6(1),
                        t.Q6J("ngIf", !!l.item.exchange && !!l.item.exchangeVersion && l.hasExchangeFeePercentagePools(l.item.exchange, null !== (M = l.item.exchangeVersion) && void 0 !== M ? M : null, l.item.chain) && l.item.fee),
                        t.xp6(1),
                        t.Q6J("ngIf", !!l.item.chain)
                    }
                },
                dependencies: [y.T, O.m, x.O5, x.mk, x.PC, S._L, x.OU, x.JJ, u.yl, d.aw, d.X$, e.eV1, e.khD, e.Uw1, e.nGv],
                styles: [".token-symbol-container[_ngcontent-%COMP%]{display:block;width:1.25rem;height:1.25rem;z-index:0}img[_ngcontent-%COMP%]{vertical-align:sub!important;border-radius:3.125rem}.title-search[_ngcontent-%COMP%], .title-search-normal[_ngcontent-%COMP%]{font-size:14px;line-height:1.3125rem;margin-left:.25rem}.title-search[_ngcontent-%COMP%]{font-weight:400;color:#142028}body.dark-theme   [_nghost-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#142028}.title-search-normal[_ngcontent-%COMP%]{font-weight:500;color:#142028}body.dark-theme   [_nghost-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{color:#142028}.isModalTitle[_ngcontent-%COMP%]{font-size:1.3rem}.content-row[_ngcontent-%COMP%]{color:#142028;display:flex;align-items:center;align-content:center}body.dark-theme   [_nghost-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#142028}.content-row[_ngcontent-%COMP%] > .content-row-data[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.row-result[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.chain-logo[_ngcontent-%COMP%]{height:1.125rem;margin-left:.25rem}.chain-logo.fantom[_ngcontent-%COMP%]{border-radius:1.25rem}.exchange-specific-version[_ngcontent-%COMP%]{line-height:1rem;border-radius:.3125rem;padding:.125rem .25rem;font-size:.625rem;display:inline-block;height:1.125rem}.exchange-specific-version[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:capitalize}@media (max-width: 1300px){.row-result[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.width-adjust[_ngcontent-%COMP%]{flex-basis:50%}.separator[_ngcontent-%COMP%]{display:none}}@media (max-width: 1100px){.width-adjust[_ngcontent-%COMP%]{flex-basis:auto}.width-adjust.width-adjust-modal[_ngcontent-%COMP%]{flex-basis:50%}}@media (max-width: 1023px){.separator[_ngcontent-%COMP%]{display:inline}}@media (max-width: 550px){.width-adjust[_ngcontent-%COMP%]{flex-basis:auto}}"],
                changeDetection: 0
            }),
            i
        }
        )()
    }
    ,
    31377: (B,w,s)=>{
        s.d(w, {
            I: ()=>Pe
        });
        var e = s(94650)
          , d = s(99703)
          , u = s(52413)
          , S = s(77579)
          , x = s(95698)
          , O = s(18505)
          , y = s(78372)
          , t = s(70262)
          , C = s(60515)
          , k = s(54968)
          , b = s(82722)
          , P = s(28746)
          , T = s(39646)
          , E = s(54004)
          , g = s(24006)
          , A = s(62289)
          , L = s(71884)
          , v = s(89383)
          , f = s(36895);
        const I = function(r) {
            return {
                isActive: r
            }
        };
        function Z(r, _) {
            if (1 & r) {
                const n = e.EpF();
                e.ynx(0),
                e.TgZ(1, "a", 6),
                e.NdJ("click", function() {
                    const h = e.CHM(n).$implicit
                      , p = e.oxw();
                    return e.KtG(p.changeChain(h.chain))
                }),
                e._UZ(2, "img", 7),
                e.ALo(3, "chainLogoUrl"),
                e._uU(4),
                e.qZA(),
                e.BQk()
            }
            if (2 & r) {
                const n = _.$implicit
                  , o = e.oxw();
                e.xp6(1),
                e.Q6J("ngClass", e.VKq(5, I, n.chain === o.selectedChain)),
                e.xp6(1),
                e.Q6J("src", e.lcZ(3, 3, n.chain), e.LSH),
                e.xp6(2),
                e.hij(" ", n.name, "")
            }
        }
        function F(r, _) {
            if (1 & r && (e.TgZ(0, "img", 14),
            e.ALo(1, "exchangeLogoStyles"),
            e.qZA()),
            2 & r) {
                const n = e.oxw().$implicit
                  , o = e.oxw(2);
                e.Akn(e.xi3(1, 3, n.exchange, o.selectedChain)),
                e.Q6J("src", n.logo, e.LSH)
            }
        }
        function R(r, _) {
            if (1 & r && (e.TgZ(0, "div", 18),
            e._UZ(1, "input", 19),
            e.TgZ(2, "label", 20),
            e._uU(3),
            e.qZA()()),
            2 & r) {
                const n = e.oxw(2).$implicit
                  , o = e.oxw().$implicit;
                e.Q6J("formGroupName", o.exchange.toLowerCase()),
                e.xp6(1),
                e.s9C("value", n.selected),
                e.Q6J("formControlName", n.name)("id", o.exchange.toLowerCase() + "-" + n.name),
                e.xp6(1),
                e.Q6J("for", o.exchange.toLowerCase() + "-" + n.name),
                e.xp6(1),
                e.Oqu(n.name)
            }
        }
        function J(r, _) {
            if (1 & r) {
                const n = e.EpF();
                e.TgZ(0, "div", 16),
                e.NdJ("click", function() {
                    e.CHM(n);
                    const c = e.oxw().$implicit
                      , h = e.oxw().$implicit
                      , p = e.oxw(2);
                    return e.KtG(p.selectVersion(h, c))
                }),
                e.YNc(1, R, 4, 6, "div", 17),
                e.qZA()
            }
            if (2 & r) {
                const n = e.oxw(2).$implicit;
                e.xp6(1),
                e.Q6J("ngIf", !!n.exchange)
            }
        }
        function N(r, _) {
            if (1 & r && (e.ynx(0),
            e.YNc(1, J, 2, 1, "div", 15),
            e.BQk()),
            2 & r) {
                const n = e.oxw().$implicit
                  , o = e.oxw(2);
                e.xp6(1),
                e.Q6J("ngIf", !!o.filterSearchFormGroup.controls.exchange.value && !!n.exchange && o.filterSearchFormGroup.controls.exchange.value === n.exchange.toLowerCase())
            }
        }
        function Q(r, _) {
            if (1 & r && (e.ynx(0),
            e.TgZ(1, "div", 10),
            e._UZ(2, "input", 11),
            e.TgZ(3, "label", 12),
            e.YNc(4, F, 2, 6, "img", 13),
            e._uU(5),
            e.ALo(6, "translate"),
            e.qZA()(),
            e.YNc(7, N, 2, 1, "ng-container", 9),
            e.BQk()),
            2 & r) {
                const n = _.$implicit;
                e.xp6(2),
                e.Q6J("id", "exchange-" + (n.name ? n.name.toLowerCase() : n.name))("value", n.exchange ? n.exchange.toLowerCase() : n.exchange),
                e.xp6(1),
                e.Q6J("for", "exchange-" + (n.name ? n.name.toLowerCase() : n.name)),
                e.xp6(1),
                e.Q6J("ngIf", n.logo && n.exchange),
                e.xp6(1),
                e.hij(" ", n.name ? n.name : e.lcZ(6, 6, "pair_explorer.search_filter.all_exchanges"), " "),
                e.xp6(2),
                e.Q6J("ngForOf", n.versions)
            }
        }
        function i(r, _) {
            if (1 & r && (e.TgZ(0, "div", 8),
            e.YNc(1, Q, 8, 8, "ng-container", 9),
            e.qZA()),
            2 & r) {
                const n = e.oxw();
                e.xp6(1),
                e.Q6J("ngForOf", n.exchangeList)
            }
        }
        let m = (()=>{
            class r extends u.K9 {
                set chainStatsList(n) {
                    this._chainStatsList = n,
                    this._setAvailableChains()
                }
                get chainStatsList() {
                    return this._chainStatsList
                }
                set visible(n) {
                    if (this._visible = n,
                    this._visible) {
                        const o = document.querySelector("#chains-container")
                          , c = document.querySelector("#chains-container > a.isActive");
                        c && o && (o.scrollLeft = c.offsetLeft - 50)
                    }
                }
                get visible() {
                    return this._visible
                }
                constructor(n, o, c) {
                    super(),
                    this._fb = n,
                    this._breakpointObserver = o,
                    this._cdRef = c,
                    this.inputTyped = !1,
                    this.isSearch = !1,
                    this.isLoading = !1,
                    this._visible = !1,
                    this.clickOut = new e.vpe,
                    this.filterSearchCriteriaChange = new e.vpe,
                    this.filterSearchFormGroup = this._fb.group({
                        chain: new g.NI(null),
                        exchange: new g.NI(null),
                        version: new g.cw({
                            univ2: new g.cw({
                                v2: new g.NI(!0),
                                v3: new g.NI(!0)
                            }),
                            pancake: new g.cw({
                                v1: new g.NI(!0),
                                v2: new g.NI(!0),
                                v3: new g.NI(!0)
                            })
                        })
                    }),
                    this._availableChains = {}
                }
                ngOnInit() {
                    this.filterSearchFormGroup.setControl("version", new g.cw({
                        univ2: new g.cw({
                            v2: new g.NI(this.version.univ2.v2),
                            v3: new g.NI(this.version.univ2.v3)
                        }),
                        pancake: new g.cw({
                            v1: new g.NI(this.version.pancake.v1),
                            v2: new g.NI(this.version.pancake.v2),
                            v3: new g.NI(this.version.pancake.v3)
                        })
                    })),
                    this._setAvailableChains(),
                    this.filterSearchFormGroup.valueChanges.pipe((0,
                    u.sL)(this), (0,
                    y.b)(300), (0,
                    L.x)((n,o)=>n.chain === o.chain && n.exchange === o.exchange && JSON.stringify(n.version) === JSON.stringify(o.version))).subscribe(()=>{
                        this.filterSearchCriteriaChange.emit(this.filterSearchFormGroup.value)
                    }
                    )
                }
                removeExchangeFilter(n) {
                    this.filterSearchFormGroup.controls.exchange.value !== n.exchange && this._resetVersions(),
                    this.filterSearchFormGroup.controls.exchange.setValue(n.exchange),
                    this.filterSearchFormGroup.controls.chain.setValue(n.chain),
                    this._cdRef.detectChanges()
                }
                _resetVersions() {
                    this.filterSearchFormGroup.controls.version.controls.univ2.controls.v2.setValue(!0),
                    this.filterSearchFormGroup.controls.version.controls.univ2.controls.v3.setValue(!0),
                    this.filterSearchFormGroup.controls.version.controls.pancake.controls.v1.setValue(!0),
                    this.filterSearchFormGroup.controls.version.controls.pancake.controls.v2.setValue(!0),
                    this.filterSearchFormGroup.controls.version.controls.pancake.controls.v3.setValue(!0)
                }
                _setAvailableChains() {
                    for (const n of Object.keys(this.chainStatsList))
                        this._availableChains[n] = {
                            exchanges: [...this.chainStatsList[n].exchanges]
                        };
                    this._availableChains && Object.keys(this._availableChains).length > 0 && (this._setAllOptions(),
                    this.selectedExchange ? this.filterSearchFormGroup.controls.exchange.setValue(null) : (this._setChainOptions(this.selectedChain),
                    this.filterSearchCriteriaChange.emit(this.filterSearchFormGroup.value)),
                    this.filterSearchFormGroup.controls.chain.setValue(this.selectedChain ? this.selectedChain.toLowerCase() : null))
                }
                _setAllOptions() {
                    for (const n of Object.keys(this._availableChains))
                        this._availableChains[n].exchanges.length > 1 && this._availableChains[n].exchanges.unshift({
                            name: null,
                            logo: "",
                            versions: [],
                            exchange: null
                        })
                }
                _setChainOptions(n) {
                    n && this.filterSearchFormGroup.controls.exchange.setValue(this.selectedExchange),
                    this.filterSearchFormGroup.controls.chain.setValue(n)
                }
                selectVersion(n, o) {
                    if (n.exchange) {
                        const {univ2: c, pancake: h} = this.filterSearchFormGroup.controls.version.controls;
                        "univ2" === n.exchange ? "v2" === o.name ? c.controls.v2.setValue(!c.controls.v2.value) : c.controls.v3.setValue(!c.controls.v3.value) : "v1" === o.name ? h.controls.v1.setValue(!h.controls.v1.value) : "v2" === o.name ? h.controls.v2.setValue(!h.controls.v2.value) : h.controls.v3.setValue(!h.controls.v3.value),
                        this._cdRef.detectChanges()
                    }
                }
                get chainList() {
                    const n = [];
                    for (const o of Object.keys(this._availableChains)) {
                        const c = d.CXF.getChainData(o);
                        n.push({
                            chain: o,
                            name: this._breakpointObserver.isMatched(A.u3.XSmall) ? c.chainShortName : c.chainName
                        })
                    }
                    return n
                }
                changeChain(n) {
                    n !== this.selectedChain && (this.selectedExchange = null,
                    this._setChainOptions(n),
                    this.selectedChain = n,
                    this._cdRef.detectChanges())
                }
                allChain() {
                    this.selectedChain && (this.selectedExchange = null,
                    this._setChainOptions(null),
                    this.selectedChain = null,
                    this._cdRef.detectChanges())
                }
                get exchangeList() {
                    return Object.keys(this._availableChains).length > 0 ? this._availableChains[this.selectedChain ?? d.qop.Ethereum].exchanges : []
                }
                trackByChain(n, o) {
                    return o.chain
                }
                onDestroy() {}
            }
            return r.\u0275fac = function(n) {
                return new (n || r)(e.Y36(g.qu),e.Y36(A.Yg),e.Y36(e.sBO))
            }
            ,
            r.\u0275cmp = e.Xpm({
                type: r,
                selectors: [["app-pairs-search-filter"]],
                inputs: {
                    selectedExchange: "selectedExchange",
                    version: "version",
                    selectedChain: "selectedChain",
                    chainStatsList: "chainStatsList",
                    inputTyped: "inputTyped",
                    isSearch: "isSearch",
                    isLoading: "isLoading",
                    visible: "visible"
                },
                outputs: {
                    clickOut: "clickOut",
                    filterSearchCriteriaChange: "filterSearchCriteriaChange"
                },
                standalone: !0,
                features: [e.qOj, e.jDz],
                decls: 13,
                vars: 16,
                consts: [[1, "title"], [3, "formGroup"], ["id", "chains-container", 1, "chains-container"], [1, "all-link", 3, "ngClass", "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "exchanges-container", 4, "ngIf"], [3, "ngClass", "click"], ["alt", "chain logo", "loading", "lazy", 1, "chain-logo", 3, "src"], [1, "exchanges-container"], [4, "ngFor", "ngForOf"], [1, "form-check", "custom-radio", "exchange-selection"], ["formControlName", "exchange", "name", "exchange", "type", "radio", 1, "form-check-input", "me-2", 3, "id", "value"], [1, "form-check-label", "custom-control-label-radio", 3, "for"], ["alt", "exchange-logo", "loading", "lazy", 3, "src", "style", 4, "ngIf"], ["alt", "exchange-logo", "loading", "lazy", 3, "src"], ["formGroupName", "version", "class", "form-check custom-checkbox version-selection", 3, "click", 4, "ngIf"], ["formGroupName", "version", 1, "form-check", "custom-checkbox", "version-selection", 3, "click"], [3, "formGroupName", 4, "ngIf"], [3, "formGroupName"], ["name", "version", "type", "checkbox", 1, "form-check-input", "me-2", 3, "formControlName", "id", "value"], [1, "form-check-label", "custom-control-label-checkbox", 3, "for"]],
                template: function(n, o) {
                    1 & n && (e.TgZ(0, "div")(1, "div")(2, "span", 0),
                    e._uU(3),
                    e.ALo(4, "translate"),
                    e.qZA()(),
                    e.TgZ(5, "div")(6, "form", 1)(7, "div", 2)(8, "a", 3),
                    e.NdJ("click", function() {
                        return o.allChain()
                    }),
                    e._uU(9),
                    e.ALo(10, "translate"),
                    e.qZA(),
                    e.YNc(11, Z, 5, 7, "ng-container", 4),
                    e.qZA(),
                    e.YNc(12, i, 2, 1, "div", 5),
                    e.qZA()()()),
                    2 & n && (e.Gre("app-pairs-search-filter ", o.inputTyped ? "no-border-radius" : null, ""),
                    e.xp6(3),
                    e.hij("", e.lcZ(4, 10, "pair_explorer.search_filter.narrow_search"), ":"),
                    e.xp6(3),
                    e.Q6J("formGroup", o.filterSearchFormGroup),
                    e.xp6(2),
                    e.Q6J("ngClass", e.VKq(14, I, !o.selectedChain)),
                    e.xp6(1),
                    e.hij(" ", e.lcZ(10, 12, "token_finder.all"), " "),
                    e.xp6(2),
                    e.Q6J("ngForOf", o.chainList)("ngForTrackBy", o.trackByChain),
                    e.xp6(1),
                    e.Q6J("ngIf", !!o.selectedChain && !o.isSearch && !o.isLoading))
                },
                dependencies: [g.u5, g._Y, g.Fj, g.Wl, g._, g.JJ, g.JL, g.UX, g.sg, g.u, g.x0, f.mk, f.ax, f.O5, v.aw, v.X$, d.eV1, d.$a1],
                styles: [".app-pairs-search-filter[_ngcontent-%COMP%]{background-color:#e2e7ec;padding:1.5rem 1rem .5rem;position:absolute;z-index:4;width:100%;border-radius:0 0 1.125rem 1.125rem}body.dark-theme   [_nghost-%COMP%]   .app-pairs-search-filter[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .app-pairs-search-filter[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .app-pairs-search-filter[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .app-pairs-search-filter[_ngcontent-%COMP%]{background-color:#e2e7ec}.app-pairs-search-filter[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .app-pairs-search-filter[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .app-pairs-search-filter[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .app-pairs-search-filter[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .app-pairs-search-filter[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{color:#142028}.app-pairs-search-filter[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:13px}.no-border-radius[_ngcontent-%COMP%]{border-radius:0!important}.version-selection[_ngcontent-%COMP%]{font-size:13px;margin:.625rem 0 .625rem 4.3rem}.version-selection[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{margin-right:.625rem}.chains-container[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.625rem 0;overflow-x:auto;gap:.3125rem}.chains-container[_ngcontent-%COMP%]   .all-link[_ngcontent-%COMP%]{padding:.25rem .8rem}.chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none;white-space:nowrap;color:#3d5170;text-transform:uppercase;cursor:pointer;padding:.25rem .5rem;display:flex;align-items:center;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#3d5170}.chains-container[_ngcontent-%COMP%] > a.isActive[_ngcontent-%COMP%], .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{border-radius:3.125rem;color:#142028;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .chains-container[_ngcontent-%COMP%] > a.isActive[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .chains-container[_ngcontent-%COMP%] > a.isActive[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}body.light   [_nghost-%COMP%]   .chains-container[_ngcontent-%COMP%] > a.isActive[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#142028}body.light[_ngcontent-%COMP%]   .chains-container[_ngcontent-%COMP%] > a.isActive[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   .chains-container[_ngcontent-%COMP%] > a.isActive[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .chains-container[_ngcontent-%COMP%] > a.isActive[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.light   [_nghost-%COMP%]   .chains-container[_ngcontent-%COMP%] > a.isActive[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .chains-container[_ngcontent-%COMP%] > a.isActive[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .chains-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}.chains-container[_ngcontent-%COMP%]   .chain-logo[_ngcontent-%COMP%]{border-radius:50%;height:1.375rem;margin-right:.3125rem;width:1.375rem}.exchanges-container[_ngcontent-%COMP%]{max-height:21.875rem;overflow-y:auto}.exchanges-container[_ngcontent-%COMP%]   .exchange-selection[_ngcontent-%COMP%]{margin:.625rem 0;font-size:13px;display:flex}.exchanges-container[_ngcontent-%COMP%]   .exchange-selection[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{text-transform:capitalize}.exchanges-container[_ngcontent-%COMP%]   .exchange-selection[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{background:white;border-radius:50%;margin-right:.3125rem;vertical-align:middle;height:1.25rem;width:1.25rem;cursor:pointer}"],
                changeDetection: 0
            }),
            r
        }
        )();
        var a = s(12113)
          , l = s(92498)
          , M = s(7778);
        const K = ["searchLink"]
          , Y = function(r, _) {
            return {
                "background-color": r,
                color: _
            }
        };
        function q(r, _) {
            if (1 & r) {
                const n = e.EpF();
                e.TgZ(0, "span", 5),
                e.ALo(1, "exchangeBackgroundColor"),
                e.ALo(2, "exchangeTextColor"),
                e.TgZ(3, "span", 6),
                e._uU(4),
                e.qZA(),
                e.TgZ(5, "span", 7),
                e.NdJ("click", function() {
                    e.CHM(n);
                    const c = e.oxw(3);
                    return e.KtG(c.removeExchange())
                }),
                e._uU(6, "X"),
                e.qZA()()
            }
            if (2 & r) {
                const n = e.oxw(3);
                let o;
                e.Q6J("ngStyle", e.WLB(8, Y, e.xi3(1, 2, n.filteredExchange || n.defaultApiExchange, n.chain), e.xi3(2, 5, n.filteredExchange || n.defaultApiExchange, n.chain))),
                e.xp6(4),
                e.hij("", n.getExchangeName(n.filteredExchange, null !== (o = n.chain) && void 0 !== o ? o : n.dataPairs[0].type === n.PairItemType.SPONSORED_PAIR ? n.dataPairs[1].chain : n.dataPairs[0].chain), " ")
            }
        }
        const z = function(r) {
            return {
                exchange: r
            }
        };
        function W(r, _) {
            if (1 & r && (e.TgZ(0, "div", 3)(1, "span"),
            e._uU(2),
            e.ALo(3, "translate"),
            e.ALo(4, "translate"),
            e.qZA(),
            e.YNc(5, q, 7, 11, "span", 4),
            e.qZA()),
            2 & r) {
                const n = e.oxw(2);
                e.xp6(2),
                e.AsE(" ", e.xi3(3, 3, "pair_explorer.find_pair_heading", e.VKq(8, z, n.getChainName())), " ", n.chain ? "" : e.lcZ(4, 6, "home.pairs_search_result"), " "),
                e.xp6(3),
                e.Q6J("ngIf", !!n.filteredExchange)
            }
        }
        function H(r, _) {
            if (1 & r && (e.ynx(0),
            e.TgZ(1, "span", 12),
            e._uU(2, "Sponsored:"),
            e.qZA(),
            e._UZ(3, "img", 13),
            e.TgZ(4, "span", 14),
            e._uU(5),
            e.ALo(6, "appSafe"),
            e.ALo(7, "appSafe"),
            e.qZA(),
            e.BQk()),
            2 & r) {
                const n = e.oxw().$implicit;
                e.xp6(3),
                e.s9C("src", n.icon, e.LSH),
                e.xp6(2),
                e.AsE("", e.lcZ(6, 3, n.symbol), " - ", e.lcZ(7, 5, n.realName), "")
            }
        }
        function $(r, _) {
            if (1 & r && (e.ynx(0),
            e._UZ(1, "app-pair-result-item", 15),
            e.BQk()),
            2 & r) {
                const n = e.oxw().$implicit
                  , o = e.oxw(2);
                e.xp6(1),
                e.Q6J("item", n)("isModal", o.isModal)
            }
        }
        const X = function(r) {
            return {
                "text-sp": r
            }
        };
        function ee(r, _) {
            if (1 & r) {
                const n = e.EpF();
                e.TgZ(0, "li", 8)(1, "a", 9, 10),
                e.NdJ("click", function() {
                    const h = e.CHM(n).$implicit
                      , p = e.oxw(2);
                    return e.KtG(p.emitItemSelected(h))
                }),
                e.YNc(3, H, 8, 7, "ng-container", 11),
                e.YNc(4, $, 2, 2, "ng-container", 11),
                e.qZA()()
            }
            if (2 & r) {
                const n = _.$implicit
                  , o = e.oxw(2);
                e.Gre("item-container ", o.isModal ? "isModal" : null, ""),
                e.Q6J("ngClass", e.VKq(8, X, (null == n ? null : n.type) === o.PairItemType.SPONSORED_PAIR)),
                e.xp6(1),
                e.uIk("data-search", n.symbol)("data-isSponsor", (null == n ? null : n.type) === o.PairItemType.SPONSORED_PAIR),
                e.xp6(2),
                e.Q6J("ngIf", (null == n ? null : n.type) === o.PairItemType.SPONSORED_PAIR),
                e.xp6(1),
                e.Q6J("ngIf", (null == n ? null : n.type) === o.PairItemType.PAIR)
            }
        }
        function te(r, _) {
            if (1 & r && (e.TgZ(0, "div"),
            e.YNc(1, W, 6, 10, "div", 1),
            e.TgZ(2, "ul"),
            e.YNc(3, ee, 5, 10, "li", 2),
            e.qZA()()),
            2 & r) {
                const n = e.oxw();
                e.Gre("search-results ", n.isModal ? "border-radius-complete" : "position-absolute", ""),
                e.xp6(1),
                e.Q6J("ngIf", !n.isModal),
                e.xp6(1),
                e.Tol(n.isModal ? "search-result-list" : "results-container"),
                e.xp6(1),
                e.Q6J("ngForOf", n.dataPairs)("ngForTrackBy", n.trackByPair)
            }
        }
        let ne = (()=>{
            class r extends u.K9 {
                constructor() {
                    super(),
                    this.dataPairs = [],
                    this.isModal = !1,
                    this.filteredExchange = null,
                    this.exchangeVersion = null,
                    this.itemSelectedEmitter = new e.vpe,
                    this.removeExchangeFilter = new e.vpe,
                    this.PairItemType = d.wUs,
                    this.Chain = d.qop,
                    this.middleButton = !1,
                    this.screenWidth = window.innerWidth
                }
                ngAfterViewInit() {
                    this.searchLink.changes.pipe((0,
                    u.sL)(this), (0,
                    O.b)(n=>{
                        const o = n.first && n.first.nativeElement;
                        o && (0,
                        k.R)(o, "mouseup").pipe((0,
                        u.sL)(this)).subscribe(c=>{
                            if (2 === c.which || c.ctrlKey || c.metaKey) {
                                this.middleButton = !0;
                                let h = c.target;
                                "A" !== c.target.tagName && (h = h.parentElement),
                                h.click()
                            } else
                                this.middleButton = !1
                        }
                        )
                    }
                    )).subscribe()
                }
                emitItemSelected(n) {
                    n.type === d.wUs.SPONSORED_PAIR ? window.open(n.url, "_blank", "noopener") : this.itemSelectedEmitter.emit(n)
                }
                getChainName() {
                    return d.CXF.getChainName(this.chain)
                }
                getExchangeName(n, o) {
                    return d.i9O.getExchangeNameFromExchangeApi(n, o)
                }
                onDestroy() {}
                trackByPair(n, o) {
                    return o.id
                }
                get defaultApiExchange() {
                    return d.ibW
                }
                removeExchange() {
                    this.removeExchangeFilter.emit(this.chain)
                }
            }
            return r.\u0275fac = function(n) {
                return new (n || r)
            }
            ,
            r.\u0275cmp = e.Xpm({
                type: r,
                selectors: [["app-pairs-search-results"]],
                viewQuery: function(n, o) {
                    if (1 & n && e.Gf(K, 5),
                    2 & n) {
                        let c;
                        e.iGM(c = e.CRH()) && (o.searchLink = c)
                    }
                },
                inputs: {
                    dataPairs: "dataPairs",
                    chain: "chain",
                    isModal: "isModal",
                    filteredExchange: "filteredExchange",
                    exchangeVersion: "exchangeVersion"
                },
                outputs: {
                    itemSelectedEmitter: "itemSelectedEmitter",
                    removeExchangeFilter: "removeExchangeFilter"
                },
                standalone: !0,
                features: [e.qOj, e.jDz],
                decls: 1,
                vars: 1,
                consts: [[3, "class", 4, "ngIf"], ["class", "search-results-title", 4, "ngIf"], [3, "class", "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "search-results-title"], ["class", "exchange-specific-version", 3, "ngStyle", 4, "ngIf"], [1, "exchange-specific-version", 3, "ngStyle"], [1, "title"], [1, "clear-tag", 3, "click"], [3, "ngClass"], [1, "auto-complete-text", "text-start", "link-search", 3, "click"], ["searchLink", ""], [4, "ngIf"], [1, "text-warning", "me-1"], ["alt", "sponsored pair icon", "width", "20", 1, "me-2", 3, "src"], [1, "title-search-normal"], [3, "item", "isModal"]],
                template: function(n, o) {
                    1 & n && e.YNc(0, te, 4, 8, "div", 0),
                    2 & n && e.Q6J("ngIf", o.dataPairs.length > 0)
                },
                dependencies: [f.O5, f.PC, f.ax, f.mk, M.Z, l.yl, v.aw, v.X$, d.khD, d.Uw1],
                styles: [".search-results[_ngcontent-%COMP%]{background-color:#e2e7ec;border-radius:0 0 1.125rem 1.125rem;top:8.5rem;width:100%;z-index:4}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{background-color:#e2e7ec}.search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#818ea3;border:none!important;display:flex;font-size:13px;justify-content:space-between;margin-right:1rem;padding:.7rem .5rem .5rem;text-align:left}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{color:#818ea3}.search-results[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]   .clear-tag[_ngcontent-%COMP%]{align-items:center;background:transparent;border-radius:50%;box-shadow:0 0 .3125rem inset #ffffff90;cursor:pointer;display:inline-flex;justify-content:center;height:.78125rem;margin-bottom:.10625rem;padding-bottom:.075rem;width:.78125rem}.search-results[_ngcontent-%COMP%]   .search-result-list[_ngcontent-%COMP%]{list-style:none;margin-top:1.25rem;margin-bottom:0;max-height:25rem;overflow-y:auto;padding:0}.search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]{list-style:none;margin-bottom:0;max-height:28.125rem;overflow-y:auto;padding:0;border-bottom-left-radius:1.5rem;border-bottom-right-radius:1.5rem}.search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent!important;margin-bottom:.625rem}.search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#e2e7ec;height:6.25rem}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#23323c}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#e2e7ec}.search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]{padding:.875rem .9375rem}.search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#142028!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#f4f5f6!important}.search-results[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:1.125rem}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]{padding:1rem}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:hover{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:hover{background-color:#3a4956!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:hover{background-color:#3a4956!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:hover{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:hover{background-color:#f4f5f6!important}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:first-child{border-top-left-radius:1.125rem;border-top-right-radius:1.125rem}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:1.125rem;border-bottom-right-radius:1.125rem}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#cacedb!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#cacedb!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#3d5170!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%]{color:#3d5170!important}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{font-weight:500}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#cacedb!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#cacedb!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#3d5170!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{color:#3d5170!important}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]   .token-symbol-container[_ngcontent-%COMP%]{min-width:1.625rem;min-height:1.625rem}.search-results[_ngcontent-%COMP%]   .item-container.isModal[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]   .token-symbol-container[_ngcontent-%COMP%]   .token-letter[_ngcontent-%COMP%]{line-height:1.625rem;height:1.625rem;width:1.625rem}.search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]{background-color:#f4f5f6;padding:0}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]{background-color:#3a4956}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]{background-color:#f4f5f6}.search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem}.search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:bottom!important}.search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]   .title-search[_ngcontent-%COMP%], .search-results[_ngcontent-%COMP%]   .item-container.text-sp[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]   .title-search-normal[_ngcontent-%COMP%]{font-size:16px}.search-results[_ngcontent-%COMP%]   .row-result[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.search-results[_ngcontent-%COMP%]   .width-adjust[_ngcontent-%COMP%]{flex-basis:50%}.border-radius-complete[_ngcontent-%COMP%]{border-radius:.9375rem}.auto-complete-text[_ngcontent-%COMP%]{color:#142028;cursor:pointer;font-size:13px!important;text-decoration:none;word-break:break-all}body.dark-theme   [_nghost-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .auto-complete-text[_ngcontent-%COMP%]{color:#142028}@media (max-width: 1024px){.search-results[_ngcontent-%COMP%]:not(.border-radius-complete), .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete), body.dark-theme   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete), body.dark-theme[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete), body.light   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete), body.light[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}.search-results[_ngcontent-%COMP%]:not(.border-radius-complete)   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp), .search-results-title[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete)   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp), body.dark-theme   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete)   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp), body.dark-theme[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#23323c!important}body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete)   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp), body.light   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]:not(.border-radius-complete)   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp), body.light[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover:not(.text-sp){background-color:#e2e7ec!important}.results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#142028!important}body.light   [_nghost-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6!important}}"],
                changeDetection: 0
            }),
            r
        }
        )();
        var G = s(92216)
          , oe = s(30501)
          , re = s(11481);
        const ce = ["pairSearch"]
          , ae = ["searchInput"]
          , ie = ["filter"]
          , V = function() {
            return ["far", "search"]
        }
          , se = function(r) {
            return {
                "search-active": r
            }
        };
        function le(r, _) {
            if (1 & r) {
                const n = e.EpF();
                e.TgZ(0, "fa-icon", 10),
                e.NdJ("click", function() {
                    e.CHM(n);
                    const c = e.oxw();
                    return e.KtG(c.openSearch())
                }),
                e.qZA()
            }
            if (2 & r) {
                const n = e.oxw();
                e.Q6J("icon", e.DdM(2, V))("ngClass", e.VKq(3, se, n.filterBtnShown || !!n.search.length || n.isSearch))
            }
        }
        const j = function() {
            return ["fal", "times"]
        };
        function he(r, _) {
            if (1 & r) {
                const n = e.EpF();
                e.TgZ(0, "fa-icon", 11),
                e.NdJ("click", function() {
                    e.CHM(n);
                    const c = e.oxw();
                    return e.KtG(c.hideSearchFilter())
                }),
                e.qZA()
            }
            2 & r && e.Q6J("icon", e.DdM(1, j))
        }
        function ge(r, _) {
            if (1 & r) {
                const n = e.EpF();
                e.TgZ(0, "fa-icon", 11),
                e.NdJ("click", function() {
                    e.CHM(n);
                    const c = e.oxw();
                    return e.KtG(c.clearSearchInput())
                }),
                e.qZA()
            }
            2 & r && e.Q6J("icon", e.DdM(1, j))
        }
        function _e(r, _) {
            if (1 & r) {
                const n = e.EpF();
                e.ynx(0),
                e.TgZ(1, "div")(2, "app-pairs-search-filter", 12, 13),
                e.NdJ("filterSearchCriteriaChange", function(c) {
                    e.CHM(n);
                    const h = e.oxw(2);
                    return e.KtG(h.setFilter(c))
                }),
                e.qZA()(),
                e.BQk()
            }
            if (2 & r) {
                const n = e.oxw(2);
                e.xp6(1),
                e.Gre("search-filter-container ", n.filterBtnShown ? null : "d-none", ""),
                e.xp6(1),
                e.Q6J("chainStatsList", n.chainStatsList)("visible", n.filterBtnShown)("selectedExchange", n.filteredExchange)("version", n.version)("selectedChain", null)("inputTyped", !!n.search.length)("isSearch", n.isSearch)("isLoading", n.isLoading)
            }
        }
        function de(r, _) {
            if (1 & r && (e.ynx(0),
            e.YNc(1, _e, 4, 11, "ng-container", 7),
            e.BQk()),
            2 & r) {
                const n = e.oxw();
                e.xp6(1),
                e.Q6J("ngIf", n.filterBtnShown)
            }
        }
        const U = function(r) {
            return {
                "filter-disabled": r
            }
        };
        function pe(r, _) {
            if (1 & r) {
                const n = e.EpF();
                e.TgZ(0, "app-pairs-search-results", 14),
                e.NdJ("itemSelectedEmitter", function(c) {
                    e.CHM(n);
                    const h = e.oxw();
                    return e.KtG(h.onItemSelected(c))
                })("removeExchangeFilter", function(c) {
                    e.CHM(n);
                    const h = e.oxw();
                    return e.KtG(h.removeExchangeFilter(c))
                }),
                e.qZA()
            }
            if (2 & r) {
                const n = e.oxw();
                e.Q6J("ngClass", e.VKq(4, U, !n.filterEnabled))("dataPairs", n.dataPairs)("chain", n.chain)("filteredExchange", n.filteredExchange)
            }
        }
        function me(r, _) {
            if (1 & r && (e.TgZ(0, "div", 15),
            e._UZ(1, "fa-icon", 16),
            e.TgZ(2, "h5"),
            e._uU(3),
            e.ALo(4, "translate"),
            e.qZA(),
            e.TgZ(5, "p"),
            e._uU(6),
            e.ALo(7, "translate"),
            e.qZA(),
            e.TgZ(8, "p"),
            e._uU(9),
            e.ALo(10, "translate"),
            e.qZA()()),
            2 & r) {
                const n = e.oxw();
                e.Q6J("ngClass", e.VKq(12, U, !n.filterEnabled)),
                e.xp6(1),
                e.Q6J("icon", e.DdM(14, V)),
                e.xp6(2),
                e.AsE("", e.lcZ(4, 6, "pair_explorer.search_in_for"), ' "', n.search, '"'),
                e.xp6(3),
                e.Oqu(e.lcZ(7, 8, "pair_explorer.search_not_found")),
                e.xp6(3),
                e.Oqu(e.lcZ(10, 10, "pair_explorer.search_try_again"))
            }
        }
        function ue(r, _) {
            if (1 & r && (e.TgZ(0, "div", 15),
            e._UZ(1, "div", 17),
            e.TgZ(2, "h5", 18),
            e._uU(3),
            e.ALo(4, "translate"),
            e.qZA()()),
            2 & r) {
                const n = e.oxw();
                e.Q6J("ngClass", e.VKq(6, U, !n.filterEnabled)),
                e.xp6(1),
                e.Q6J("appLoading", n.isLoading && n.search.length > 0),
                e.xp6(2),
                e.AsE("", e.lcZ(4, 4, "pair_explorer.searching_results"), ' "', n.search, '"')
            }
        }
        const Ce = function(r) {
            return {
                "search-active box-active": r
            }
        };
        let Pe = (()=>{
            class r extends u.K9 {
                onDocumentClicked(n, o) {
                    o && document.body.contains(o) && !this.pairSearch.nativeElement.contains(o) && (this.hideSearchFilter(),
                    this._resetSearch())
                }
                constructor(n, o, c, h, p) {
                    super(),
                    this._sponsorsService = n,
                    this._pairsSearchService = o,
                    this._cdRef = c,
                    this._exchangeService = h,
                    this._sanitizer = p,
                    this.pairsViewed = [],
                    this.filterEnabled = !0,
                    this.placeholder = "",
                    this.filterIcon = !0,
                    this.searchDisabled = !1,
                    this.itemSelected = new e.vpe,
                    this.onInputChange$ = new S.x,
                    this.dataPairs = [],
                    this.isLoading = !1,
                    this.middleButton = !1,
                    this.filterBtnShown = window.innerWidth < 768,
                    this.isSearch = !1,
                    this.version = {
                        pancake: {
                            v1: !0,
                            v2: !0,
                            v3: null
                        },
                        univ2: {
                            v2: !0,
                            v3: !0
                        }
                    },
                    this._searchSponsor = null,
                    this._allSearchSponsors = [],
                    this._isFocusOutput = !1,
                    this.search = "",
                    this.chainStatsList = {
                        ...d.i9O.chainStats
                    },
                    this._chainFilterChange$ = new S.x,
                    this.chainFilterChange$ = this._chainFilterChange$.asObservable(),
                    this.Chain = d.qop,
                    d.i9O.chainStatsUpdated$.pipe((0,
                    u.sL)(this)).subscribe(()=>{
                        this.chainStatsList = {
                            ...d.i9O.chainStats
                        },
                        this._cdRef.detectChanges()
                    }
                    )
                }
                ngOnInit() {
                    this.filteredExchange = this.exchange === d.D0O ? null : this.exchange,
                    this._sponsorsService.getBanners(!1, !1, "search").pipe((0,
                    u.sL)(this), (0,
                    x.q)(1), (0,
                    O.b)(n=>{
                        n.length > 0 && (this._allSearchSponsors = [...n],
                        this._searchSponsor = this._sponsorsService.fillSocialLinks([...n])[0],
                        this._searchSponsor = this._sponsorsService.replaceSponsorSuffix(this._searchSponsor))
                    }
                    )).subscribe(),
                    this.onInputChange$.pipe((0,
                    u.sL)(this), (0,
                    y.b)(500), (0,
                    O.b)(n=>{
                        this.isLoading = !0,
                        this.dataPairs = [],
                        this._cdRef.detectChanges(),
                        n.length > 0 ? (n = this.search = this._sanitizer.sanitize(e.q3G.HTML, this.search) ?? "",
                        this.search = n,
                        this._searchPairs(n, this.filteredExchange)) : (this.isLoading = !1,
                        this._isFocusOutput || this.clearSearchInput(),
                        this._isFocusOutput = !1)
                    }
                    ), (0,
                    t.K)(()=>(this.isLoading = !1,
                    C.E))).subscribe()
                }
                ngAfterViewInit() {
                    (0,
                    k.R)(this.searchInput.nativeElement, "focusin").pipe((0,
                    u.sL)(this)).subscribe(()=>{
                        this.filterBtnShown = this.filterEnabled,
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _resetSearch() {
                    this.search.length > 0 && (this.dataPairs = [],
                    this.search = "",
                    this._isFocusOutput = !0,
                    this.isSearch = !1,
                    this._cdRef.detectChanges(),
                    this.onInputChange$.next(this.search))
                }
                _searchPairs(n, o=null) {
                    this.dataPairs = [],
                    n = n.trim().toLowerCase().replace(/\s\s/g, " ").split(/[\s()/[\\\]{|}]+/).join(" ").trim();
                    const c = o && d.i9O.getGenericExchangeApi(o)
                      , h = this._parseSelectedVersions(this.version, c);
                    let p = c ? [c] : [];
                    null != h && (p = [...h]),
                    this._searchPairByChain(n, p, this.chain).pipe((0,
                    u.sL)(this), (0,
                    b.R)(this.chainFilterChange$), (0,
                    O.b)(D=>{
                        const fe = this._pairsSearchService.formatPairItemsWithAllData(D, this.chain);
                        this.dataPairs = this._getResultsByChain(fe),
                        this.pairsViewed && this.pairsViewed.length > 0 && (this.dataPairs = this.dataPairs.filter(Me=>!this.pairsViewed.some(Oe=>Oe.id === Me.id))),
                        this.isSearch = !0,
                        this._cdRef.detectChanges()
                    }
                    ), (0,
                    P.x)(()=>{
                        this.search.length > 0 ? (this.searchInput.nativeElement.focus(),
                        this._cdRef.detectChanges()) : this._resetSearch()
                    }
                    )).subscribe({
                        error: D=>{
                            this.isLoading = !1,
                            this._cdRef.detectChanges(),
                            console.error(D)
                        }
                        ,
                        complete: ()=>{
                            this.isLoading = !1,
                            this._cdRef.detectChanges()
                        }
                    })
                }
                _getResultsByChain(n) {
                    return n.slice(0, 25)
                }
                _searchPairByChain(n, o=[], c=null) {
                    return c ? this._pairsSearchService.searchPairs(n, o, c).pipe((0,
                    E.U)(h=>h.results.map(p=>({
                        ...p,
                        chain: c
                    })))) : this._pairsSearchService.searchPairs(n, o).pipe((0,
                    b.R)(this.chainFilterChange$), (0,
                    t.K)(()=>(0,
                    T.of)({})), (0,
                    E.U)(h=>(h?.results ?? []).map(p=>({
                        ...p,
                        chain: p.id.chain
                    }))))
                }
                onSearchPasted(n) {
                    this.search = n.clipboardData?.getData("text") ?? "",
                    this.onInputChange$.next(this.search)
                }
                onItemSelected(n) {
                    if (n && n.id) {
                        let o = n.exchange ?? d.ibW;
                        o = d.i9O.getGenericExchangeApi(o),
                        n.id.includes("http") ? window.open(n.id, "_blank", "noopener") : this.itemSelected.emit({
                            item: n,
                            exchangeApi: o,
                            middleButton: this.middleButton
                        }),
                        this.searchInput.nativeElement.value = "",
                        this.clearSearchInput(),
                        this._cdRef.detectChanges()
                    }
                }
                clearSearchInput() {
                    this.dataPairs = [],
                    this.searchInput.nativeElement.focus(),
                    this.search = "",
                    this.isSearch = !1,
                    this._cdRef.detectChanges()
                }
                setFilter(n) {
                    this.filteredExchange = n.exchange,
                    this.version = n.version,
                    this.chain !== n.chain && this._chainFilterChange$.next(),
                    this.chain = n.chain;
                    const o = this.filteredExchange ?? null;
                    this.searchInput && this.searchInput.nativeElement.value.length > 0 && (this._searchSponsor = this._allSearchSponsors.length > 0 ? this._sponsorsService.fillSocialLinks(this._allSearchSponsors, this.chain ? this.chain : this._exchangeService.chain ?? d.qop.Ethereum)[0] : null,
                    this._searchSponsor && (this._searchSponsor = this._sponsorsService.replaceSponsorSuffix(this._searchSponsor)),
                    this.isLoading = !0,
                    this._searchPairs(this.searchInput.nativeElement.value, o))
                }
                _parseSelectedVersions(n, o) {
                    const c = [];
                    if (o && n[o.toLowerCase()])
                        for (const p of Object.keys(n[o.toLowerCase()]))
                            p && n[o.toLowerCase()][p] && c.push(p);
                    const h = c.map(p=>o === d.ibW ? `uni ${p}` : o === d.bmb ? "v1" === p ? d.bmb : "v2" === p ? d.nIe : d.WpZ : p);
                    return h.length > 0 ? h : null
                }
                hideSearchFilter() {
                    this.filterBtnShown = !1,
                    this._cdRef.detectChanges()
                }
                removeExchangeFilter(n) {
                    this.searchFilter.removeExchangeFilter({
                        chain: n,
                        exchange: null,
                        version: {
                            univ2: {
                                v2: !0,
                                v3: !0
                            },
                            pancake: {
                                v1: !0,
                                v2: !0,
                                v3: !0
                            }
                        }
                    })
                }
                onDestroy() {
                    this._chainFilterChange$.complete()
                }
                openSearch() {
                    this.searchInput.nativeElement.focus()
                }
            }
            return r.\u0275fac = function(n) {
                return new (n || r)(e.Y36(oe.D),e.Y36(d.OoE),e.Y36(e.sBO),e.Y36(d.OqV),e.Y36(re.H7))
            }
            ,
            r.\u0275cmp = e.Xpm({
                type: r,
                selectors: [["app-pairs-search"]],
                viewQuery: function(n, o) {
                    if (1 & n && (e.Gf(ce, 7),
                    e.Gf(ae, 5),
                    e.Gf(ie, 5)),
                    2 & n) {
                        let c;
                        e.iGM(c = e.CRH()) && (o.pairSearch = c.first),
                        e.iGM(c = e.CRH()) && (o.searchInput = c.first),
                        e.iGM(c = e.CRH()) && (o.searchFilter = c.first)
                    }
                },
                hostBindings: function(n, o) {
                    1 & n && e.NdJ("click", function(h) {
                        return o.onDocumentClicked(h, h.target)
                    }, !1, e.evT)
                },
                inputs: {
                    pairsViewed: "pairsViewed",
                    exchange: "exchange",
                    chain: "chain",
                    filterEnabled: "filterEnabled",
                    placeholder: "placeholder",
                    filterIcon: "filterIcon",
                    searchDisabled: "searchDisabled"
                },
                outputs: {
                    itemSelected: "itemSelected"
                },
                standalone: !0,
                features: [e.qOj, e.jDz],
                decls: 13,
                vars: 16,
                consts: [[1, "ng-autocomplete-class", 3, "ngClass"], ["pairSearch", ""], [1, "search-container"], ["appRestrictInput", "^[\\d\\s./:<>A-Za-z\\-_]*$", "type", "text", 1, "search-pairs", 3, "placeholder", "ngModel", "disabled", "maxlength", "ngModelChange", "keyup", "paste"], ["searchInput", ""], ["class", "text-muted search-icon", 3, "icon", "ngClass", "click", 4, "ngIf"], ["class", "close-button", 3, "icon", "click", 4, "ngIf"], [4, "ngIf"], [3, "ngClass", "dataPairs", "chain", "filteredExchange", "itemSelectedEmitter", "removeExchangeFilter", 4, "ngIf"], ["class", "not-found-container", 3, "ngClass", 4, "ngIf"], [1, "text-muted", "search-icon", 3, "icon", "ngClass", "click"], [1, "close-button", 3, "icon", "click"], [3, "chainStatsList", "visible", "selectedExchange", "version", "selectedChain", "inputTyped", "isSearch", "isLoading", "filterSearchCriteriaChange"], ["filter", ""], [3, "ngClass", "dataPairs", "chain", "filteredExchange", "itemSelectedEmitter", "removeExchangeFilter"], [1, "not-found-container", 3, "ngClass"], [3, "icon"], [1, "loading", 3, "appLoading"], [1, "mb-0"]],
                template: function(n, o) {
                    1 & n && (e.TgZ(0, "div", 0, 1)(2, "div", 2)(3, "input", 3, 4),
                    e.NdJ("ngModelChange", function(h) {
                        return o.search = h
                    })("keyup", function() {
                        return o.onInputChange$.next(o.search)
                    })("paste", function(h) {
                        return o.onSearchPasted(h)
                    }),
                    e.ALo(5, "translate"),
                    e.qZA(),
                    e.YNc(6, le, 1, 5, "fa-icon", 5),
                    e.YNc(7, he, 1, 2, "fa-icon", 6),
                    e.YNc(8, ge, 1, 2, "fa-icon", 6),
                    e.qZA(),
                    e.YNc(9, de, 2, 1, "ng-container", 7),
                    e.YNc(10, pe, 1, 6, "app-pairs-search-results", 8),
                    e.YNc(11, me, 11, 15, "div", 9),
                    e.YNc(12, ue, 5, 8, "div", 9),
                    e.qZA()),
                    2 & n && (e.Q6J("ngClass", e.VKq(14, Ce, o.filterEnabled && o.filterBtnShown || !!o.search.length && o.isSearch)),
                    e.xp6(3),
                    e.s9C("placeholder", e.lcZ(5, 12, o.placeholder)),
                    e.Q6J("ngModel", o.search)("disabled", o.searchDisabled)("maxlength", o.chain === o.Chain.Aptos ? 820 : 128),
                    e.xp6(3),
                    e.Q6J("ngIf", o.filterIcon),
                    e.xp6(1),
                    e.Q6J("ngIf", o.filterBtnShown && !o.search.length),
                    e.xp6(1),
                    e.Q6J("ngIf", !!o.search.length),
                    e.xp6(1),
                    e.Q6J("ngIf", o.filterEnabled),
                    e.xp6(1),
                    e.Q6J("ngIf", !o.isLoading && o.isSearch && o.search.length > 0),
                    e.xp6(1),
                    e.Q6J("ngIf", !!o.search.length && o.isSearch && !o.dataPairs.length && !o.isLoading),
                    e.xp6(1),
                    e.Q6J("ngIf", o.isLoading && o.search.length > 0))
                },
                dependencies: [f.mk, g.u5, g.Fj, g.JJ, g.nD, g.On, f.O5, G.uH, G.BN, m, ne, a.TH, v.aw, v.X$, l.O7],
                styles: ["[_nghost-%COMP%]{width:100%}.close-button[_ngcontent-%COMP%]{width:1.25rem;height:1.375rem;display:flex;justify-content:center;align-items:center;font-size:.875rem;background-color:#f4f5f6;color:#818ea3;border-radius:3.125rem;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{background-color:#3a4956}body.light   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{color:#818ea3}.close-button[_ngcontent-%COMP%]:focus, .close-button[_ngcontent-%COMP%]:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:focus, body.dark-theme   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:focus, body.dark-theme[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover{color:#fff}body.light   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:focus, body.light   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:hover{color:#142028}body.light[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:focus, body.light[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover{color:#142028}.close-button[_ngcontent-%COMP%]{position:absolute;right:.4375rem!important;top:50%!important;left:auto!important;transform:translateY(-50%)}.ng-autocomplete-class[_ngcontent-%COMP%]{position:relative;width:100%;transition:width .3s ease-in-out}.ng-autocomplete-class.filter-btn-visible[_ngcontent-%COMP%]{width:calc(100% - 26px);transition:width .2s ease-in-out}.search-container[_ngcontent-%COMP%]{background-color:#e2e7ec;align-items:center;border-radius:.625rem;display:flex;height:2.25rem;padding:.4375rem 2.1875rem .4375rem 1.75rem;position:relative;width:100%;z-index:9999;border:1px solid #c9cedc}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{background-color:#e2e7ec}.search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{color:#142028;background:transparent!important;border:transparent;outline:transparent;width:100%;padding-left:1.25rem}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{color:#142028}.search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]:focus{color:#142028}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]:focus{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]:focus{color:#fff}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]:focus{color:#142028}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]:focus{color:#142028}.loading[_ngcontent-%COMP%]{margin-top:-.625rem;height:3.75rem}.search-filter-container[_ngcontent-%COMP%]{bottom:.9rem;position:relative;width:100%}.search-active[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .search-active[_ngcontent-%COMP%]{color:#fff!important}body.dark-theme[_ngcontent-%COMP%]   .search-active[_ngcontent-%COMP%]{color:#fff!important}body.light   [_nghost-%COMP%]   .search-active[_ngcontent-%COMP%]{color:#142028!important}body.light[_ngcontent-%COMP%]   .search-active[_ngcontent-%COMP%]{color:#142028!important}.search-active[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{background-color:#eff5f6!important}.search-active[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{color:#142028!important}.ng-autocomplete-class[_ngcontent-%COMP%]     .input-container input{padding:.4375rem 2.1875rem .4375rem 1.75rem!important;font-size:13px!important;line-height:1.5!important;color:#495057;border-radius:3.125rem!important;font-weight:400!important;background-color:#23323c!important;background-color:#e2e7ec!important;will-change:border-color,box-shadow!important;box-shadow:none!important;transition:box-shadow .25s cubic-bezier(.27,.01,.38,1.06),border .25s cubic-bezier(.27,.01,.38,1.06);text-overflow:ellipsis;height:2.25rem!important}body.dark-theme   [_nghost-%COMP%]   .ng-autocomplete-class[_ngcontent-%COMP%]     .input-container input{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .ng-autocomplete-class[_ngcontent-%COMP%]     .input-container input{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .ng-autocomplete-class[_ngcontent-%COMP%]     .input-container input{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .ng-autocomplete-class[_ngcontent-%COMP%]     .input-container input{background-color:#e2e7ec!important}.ng-autocomplete-class[_ngcontent-%COMP%]     i.material-icons{font-size:inherit;position:relative;top:.3125rem}.search-icon[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;line-height:20px;position:absolute;z-index:999;left:0;top:0;width:2.3125rem;height:2.125rem;line-height:2.125rem;text-align:center;border-radius:.5625rem 0 0 .5625rem;background-color:#c9cedc!important;color:#818ea0!important;cursor:pointer}body.dark-theme   [_nghost-%COMP%]     .ng-autocomplete-class .input-container input{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ng-autocomplete-class .input-container input:disabled{background:rgba(6,6,6,.4509803922);border-color:#15192a!important}body.dark-theme   [_nghost-%COMP%]     .search-container{background-color:#e2e7ec;border:1px solid #3a4956}body.dark-theme   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-container{background-color:#23323c}body.dark-theme   body.dark-theme   [_nghost-%COMP%]     .search-container{background-color:#23323c}body.light   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-container{background-color:#e2e7ec}body.light   body.dark-theme   [_nghost-%COMP%]     .search-container{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-container .search-pairs{color:#818ea3}body.dark-theme   body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs{color:#818ea3}body.light   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-container .search-pairs{color:#818ea3}body.light   body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs{color:#818ea3}body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs:focus{color:#142028}body.dark-theme   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-container .search-pairs:focus{color:#fff}body.dark-theme   body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs:focus{color:#fff}body.light   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-container .search-pairs:focus{color:#142028}body.light   body.dark-theme   [_nghost-%COMP%]     .search-container .search-pairs:focus{color:#142028}body.dark-theme   [_nghost-%COMP%]     .search-active{color:#142028}body.dark-theme   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-active{color:#fff!important}body.dark-theme   body.dark-theme   [_nghost-%COMP%]     .search-active{color:#fff!important}body.light   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-active{color:#142028!important}body.light   body.dark-theme   [_nghost-%COMP%]     .search-active{color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .search-active .search-container{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .search-active .search-icon{color:#142028}body.dark-theme   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-active .search-icon{color:#fff!important}body.dark-theme   body.dark-theme   [_nghost-%COMP%]     .search-active .search-icon{color:#fff!important}body.light   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .search-active .search-icon{color:#142028!important}body.light   body.dark-theme   [_nghost-%COMP%]     .search-active .search-icon{color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .search-icon{background-color:#3a4956!important;color:#cacedb!important}.not-found-container[_ngcontent-%COMP%]{background-color:#e2e7ec;padding:1rem 1rem .5rem;position:absolute;z-index:4;width:100%;height:10.25rem;border-radius:0 0 1.125rem 1.125rem;display:flex;justify-content:center;flex-direction:column;align-items:center;gap:.25rem;top:8.5rem}body.dark-theme   [_nghost-%COMP%]   .not-found-container[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .not-found-container[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .not-found-container[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .not-found-container[_ngcontent-%COMP%]{background-color:#e2e7ec}.not-found-container.filter-disabled[_ngcontent-%COMP%]{top:1.375rem}.not-found-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:24px;position:relative;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .not-found-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .not-found-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .not-found-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .not-found-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}.not-found-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#818ea3;margin-bottom:0}body.dark-theme   [_nghost-%COMP%]   .not-found-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .not-found-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .not-found-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .not-found-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#818ea3}.not-found-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:center;word-break:break-word}app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-track{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-track{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-track{background-color:#23323c}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-track{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-track{background-color:#e2e7ec}app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{background-color:#f4f5f6;border-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{background-color:#142028}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{border-color:#23323c}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .chains-container::-webkit-scrollbar-thumb{border-color:#e2e7ec}app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-track{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-track{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-track{background-color:#23323c}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-track{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-track{background-color:#e2e7ec}app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{background-color:#f4f5f6;border-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{background-color:#142028}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{border-color:#23323c}body.light   [_nghost-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-pairs-search-filter[_ngcontent-%COMP%]     .exchanges-container::-webkit-scrollbar-thumb{border-color:#e2e7ec}app-pairs-search-results.filter-disabled[_ngcontent-%COMP%]     .search-results{top:1.375rem}@media (max-width: 1024px){.search-container[_ngcontent-%COMP%], .search-results[_ngcontent-%COMP%], .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .search-results[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .search-results-title[_ngcontent-%COMP%]{background-color:#f4f5f6!important}.search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%], .search-results[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%], .search-results-title[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]{background-color:transparent!important;font-size:14px!important}.search-container[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]::placeholder, .search-results[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]::placeholder, .search-results-title[_ngcontent-%COMP%]   .search-pairs[_ngcontent-%COMP%]::placeholder{font-size:14px!important}.results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#142028}body.light   [_nghost-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-color:#f4f5f6}}"],
                changeDetection: 0
            }),
            r
        }
        )()
    }
    ,
    64693: (B,w,s)=>{
        s.d(w, {
            p: ()=>t
        });
        var e = s(15861)
          , d = s(49808)
          , u = s(39646)
          , S = s(4326)
          , x = s(63900)
          , O = s(94650)
          , y = s(53763);
        let t = (()=>{
            class C {
                constructor(b, P) {
                    this._lazyInjector = b,
                    this._environment = P,
                    this._idleMonitorService = null
                }
                takeStaticPageSnapshot(b=0) {
                    var P = this;
                    return (0,
                    e.Z)(function*() {
                        return P._environment.static_generation ? (null == P._idleMonitorService && (P._idleMonitorService = yield P._lazyInjector.get(()=>s.e(786).then(s.bind(s, 30786)).then(T=>T.IdleMonitorService))),
                        (0,
                        d.n)((0,
                        u.of)("static generation").pipe((0,
                        S.g)(b), (0,
                        x.w)(()=>P._idleMonitorService.fireManualMyAppReadyEvent())))) : (0,
                        d.n)((0,
                        u.of)(!1))
                    })()
                }
            }
            return C.\u0275fac = function(b) {
                return new (b || C)(O.LFG(y.m),O.LFG(y.qA))
            }
            ,
            C.\u0275prov = O.Yz7({
                token: C,
                factory: C.\u0275fac,
                providedIn: "root"
            }),
            C
        }
        )()
    }
}]);
