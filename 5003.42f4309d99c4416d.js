"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[5003, 2253, 4789], {
    16509: (w,M,s)=>{
        s.d(M, {
            G: ()=>Gn
        });
        var f = s(77579)
          , P = s(18505)
          , u = s(82722)
          , i = s(95698)
          , b = s(82805)
          , l = s(52413)
          , g = s(99703)
          , x = s(89383)
          , p = s(27314)
          , _ = s(49319)
          , d = s(12113)
          , h = s(33269)
          , C = s(92498)
          , T = s(51303)
          , A = s(92253)
          , N = s(77575)
          , y = s(92216)
          , O = s(36895)
          , n = s(94650)
          , L = s(62289)
          , H = s(53763);
        function Q(o, a) {
            if (1 & o && n._UZ(0, "fa-icon", 19),
            2 & o) {
                const t = n.oxw(3);
                n.Gre("me-2 no-margin ", t.hotNumberOne.move.color, ""),
                n.Q6J("icon", t.hotNumberOne.move.arrow)
            }
        }
        function U(o, a) {
            if (1 & o && (n.TgZ(0, "img", 20),
            n.ALo(1, "exchangeLogoStyles"),
            n.ALo(2, "exchangeLogoUrl"),
            n.qZA()),
            2 & o) {
                const t = n.oxw(3);
                n.Akn(n.xi3(1, 4, t.hotNumberOne.exchange, t.chain)),
                n.MGl("alt", "", t.getExchangeNameFromExchangeApi(t.hotNumberOne.exchange), "-logo"),
                n.Q6J("src", n.xi3(2, 7, t.hotNumberOne.exchange, t.chain), n.LSH)
            }
        }
        function J(o, a) {
            1 & o && (n.TgZ(0, "span", 21),
            n._uU(1),
            n.ALo(2, "translate"),
            n.qZA()),
            2 & o && (n.xp6(1),
            n.Oqu(n.lcZ(2, 1, "hot_pairs_header.new")))
        }
        function E(o, a) {
            if (1 & o && (n.TgZ(0, "span", 22),
            n._uU(1),
            n.ALo(2, "appRoundPrices"),
            n.qZA()),
            2 & o) {
                const t = n.oxw(3);
                n.Tol(t.hotNumberOne.isPriceUp ? "text-success" : "text-danger"),
                n.xp6(1),
                n.hij(" $", n.xi3(2, 3, t.hotNumberOne.priceUsd, 4), " ")
            }
        }
        const I = function(o) {
            return {
                "background-color": o
            }
        };
        function S(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "h6", 7),
                n.ALo(1, "exchangeBackgroundColor"),
                n.TgZ(2, "div", 8)(3, "div", 9)(4, "span", 10),
                n._uU(5),
                n.qZA(),
                n.YNc(6, Q, 1, 4, "fa-icon", 11),
                n._uU(7),
                n.ALo(8, "appSafe"),
                n.YNc(9, U, 3, 10, "img", 12),
                n.YNc(10, J, 3, 3, "span", 13),
                n.qZA(),
                n.TgZ(11, "div", 14),
                n.YNc(12, E, 3, 6, "span", 15),
                n.TgZ(13, "span", 16)(14, "a", 17),
                n.NdJ("click", function(r) {
                    n.CHM(t);
                    const c = n.oxw(2);
                    return c.navigateToPairExplorer(r, c.hotNumberOne),
                    n.KtG(!1)
                }),
                n.TgZ(15, "div"),
                n._UZ(16, "app-icon", 18),
                n.qZA()()()()()()
            }
            if (2 & o) {
                const t = n.oxw(2);
                n.Tol(t.isTokenFinder ? "token-finder-hot-one" : t.chain),
                n.Q6J("ngStyle", n.VKq(17, I, t.exchange ? n.Dn7(1, 11, t.exchange, t.chain, .4) : "")),
                n.xp6(5),
                n.hij("#", t.hotNumberOne.position, ""),
                n.xp6(1),
                n.Q6J("ngIf", t.hotNumberOne.move),
                n.xp6(1),
                n.hij(" ", n.lcZ(8, 15, t.hotNumberOne.symbol), " "),
                n.xp6(2),
                n.Q6J("ngIf", !t.exchange),
                n.xp6(1),
                n.Q6J("ngIf", t.hotNumberOne.new),
                n.xp6(2),
                n.Q6J("ngIf", t.hotNumberOne.priceUsd),
                n.xp6(2),
                n.Q6J("href", t.getHrefUrl(t.hotNumberOne), n.LSH),
                n.xp6(2),
                n.Q6J("width", 20)
            }
        }
        const Y = function(o) {
            return {
                hotNumberOne: o
            }
        };
        function F(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "li")(1, "a", 25),
                n.NdJ("click", function(r) {
                    n.CHM(t);
                    const c = n.oxw(3);
                    return c.navigateToPairExplorer(r, c.hotNumberOne),
                    n.KtG(!1)
                }),
                n.GkF(2, 26),
                n.qZA()()
            }
            if (2 & o) {
                const t = n.oxw(3)
                  , e = n.MAs(4);
                n.xp6(1),
                n.Q6J("href", t.getHrefUrl(t.hotNumberOne), n.LSH),
                n.xp6(1),
                n.Q6J("ngTemplateOutlet", e)("ngTemplateOutletContext", n.VKq(3, Y, t.hotNumberOne))
            }
        }
        const k = function(o, a) {
            return {
                hot: o,
                i: a
            }
        };
        function B(o, a) {
            if (1 & o && n.GkF(0, 26),
            2 & o) {
                const t = n.oxw(2)
                  , e = t.$implicit
                  , r = t.index;
                n.oxw(3);
                const c = n.MAs(2);
                n.Q6J("ngTemplateOutlet", c)("ngTemplateOutletContext", n.WLB(2, k, e, r))
            }
        }
        function D(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "a", 25),
                n.NdJ("click", function(r) {
                    n.CHM(t);
                    const c = n.oxw(2).$implicit;
                    return n.oxw(3).navigateToPairExplorer(r, c),
                    n.KtG(!1)
                }),
                n.GkF(1, 26),
                n.qZA()
            }
            if (2 & o) {
                const t = n.oxw(2)
                  , e = t.$implicit
                  , r = t.index
                  , c = n.oxw(3)
                  , m = n.MAs(2);
                n.Q6J("href", c.getHrefUrl(e), n.LSH),
                n.xp6(1),
                n.Q6J("ngTemplateOutlet", m)("ngTemplateOutletContext", n.WLB(3, k, e, r))
            }
        }
        function R(o, a) {
            if (1 & o && (n.ynx(0),
            n.YNc(1, B, 1, 5, "ng-container", 27),
            n.YNc(2, D, 2, 6, "a", 28),
            n.BQk()),
            2 & o) {
                const t = n.oxw(4);
                n.xp6(1),
                n.Q6J("ngIf", t.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", !t.hightlightTopThree)
            }
        }
        function W(o, a) {
            if (1 & o && n.GkF(0, 26),
            2 & o) {
                const t = n.oxw(2)
                  , e = t.$implicit
                  , r = t.index;
                n.oxw(3);
                const c = n.MAs(6);
                n.Q6J("ngTemplateOutlet", c)("ngTemplateOutletContext", n.WLB(2, k, e, r))
            }
        }
        function K(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "a", 30),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const r = n.oxw(5);
                    return n.KtG(r.openHotPairsModal())
                }),
                n.GkF(1, 26),
                n.qZA()
            }
            if (2 & o) {
                const t = n.oxw(2)
                  , e = t.$implicit
                  , r = t.index;
                n.oxw(3);
                const c = n.MAs(6);
                n.xp6(1),
                n.Q6J("ngTemplateOutlet", c)("ngTemplateOutletContext", n.WLB(2, k, e, r))
            }
        }
        function q(o, a) {
            if (1 & o && (n.ynx(0),
            n.YNc(1, W, 1, 5, "ng-container", 27),
            n.YNc(2, K, 2, 5, "a", 29),
            n.BQk()),
            2 & o) {
                const t = n.oxw(4);
                n.xp6(1),
                n.Q6J("ngIf", t.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", !t.hightlightTopThree)
            }
        }
        const z = function(o, a, t) {
            return {
                "top-two": o,
                "top-three": a,
                "only-top-two": t
            }
        };
        function G(o, a) {
            if (1 & o && (n.TgZ(0, "li", 23),
            n.YNc(1, R, 3, 2, "ng-container", 0),
            n.YNc(2, q, 3, 2, "ng-container", 0),
            n.qZA()),
            2 & o) {
                const t = a.$implicit
                  , e = a.index
                  , r = n.oxw(3);
                n.Q6J("ngClass", n.kEZ(3, z, 0 === e && !r.isTokenFinder && r.hightlightTopThree, 1 === e && !r.isTokenFinder && r.hightlightTopThree, 1 === r.hots.length && !r.isTokenFinder && r.hightlightTopThree)),
                n.xp6(1),
                n.Q6J("ngIf", "???" !== t.symbol),
                n.xp6(1),
                n.Q6J("ngIf", "???" === t.symbol)
            }
        }
        const j = function(o) {
            return {
                i: o
            }
        };
        function $(o, a) {
            if (1 & o && (n.TgZ(0, "li"),
            n.GkF(1, 26),
            n.qZA()),
            2 & o) {
                const t = a.index;
                n.oxw(4);
                const e = n.MAs(8);
                n.xp6(1),
                n.Q6J("ngTemplateOutlet", e)("ngTemplateOutletContext", n.VKq(2, j, t))
            }
        }
        function V(o, a) {
            if (1 & o && (n.ynx(0),
            n.YNc(1, $, 2, 4, "li", 31),
            n.BQk()),
            2 & o) {
                const t = n.oxw(3);
                n.xp6(1),
                n.Q6J("ngFor", t.item)("ngForOf", t.numSequence(14 - t.hots.length))
            }
        }
        const X = function(o) {
            return {
                "hotspairs-list-dashboard": o
            }
        };
        function nn(o, a) {
            if (1 & o && (n.TgZ(0, "ul", 23),
            n.YNc(1, F, 3, 5, "li", 0),
            n.YNc(2, G, 3, 7, "li", 24),
            n.YNc(3, V, 2, 2, "ng-container", 0),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.Q6J("ngClass", n.VKq(5, X, !t.hightlightTopThree)),
                n.xp6(1),
                n.Q6J("ngIf", !t.hightlightTopThree && null != t.hotNumberOne),
                n.xp6(1),
                n.Q6J("ngForOf", t.hots)("ngForTrackBy", t.trackByHotPair),
                n.xp6(1),
                n.Q6J("ngIf", t.hots.length < 14 && !t.hightlightTopThree)
            }
        }
        function tn(o, a) {
            if (1 & o && (n.ynx(0),
            n.YNc(1, S, 17, 19, "h6", 5),
            n.YNc(2, nn, 4, 7, "ul", 6),
            n.BQk()),
            2 & o) {
                const t = n.oxw();
                n.xp6(1),
                n.Q6J("ngIf", t.hotNumberOne && t.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", t.hots.length > 0 || null != t.hotNumberOne && !t.hightlightTopThree)
            }
        }
        function on(o, a) {
            if (1 & o && n._UZ(0, "fa-icon", 19),
            2 & o) {
                const t = n.oxw().hot;
                n.Gre("me-2 no-margin ", t.move.color, ""),
                n.Q6J("icon", t.move.arrow)
            }
        }
        function en(o, a) {
            if (1 & o && (n.TgZ(0, "img", 41),
            n.ALo(1, "exchangeLogoStyles"),
            n.ALo(2, "exchangeLogoUrl"),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2).hot
                  , e = n.oxw();
                n.Akn(n.xi3(1, 4, t.exchange, e.chain)),
                n.MGl("alt", "", e.getExchangeNameFromExchangeApi(t.exchange), "-logo"),
                n.Q6J("src", n.xi3(2, 7, t.exchange, e.chain), n.LSH)
            }
        }
        function an(o, a) {
            if (1 & o && (n.ynx(0),
            n.TgZ(1, "span", 38),
            n.YNc(2, en, 3, 10, "img", 35),
            n.TgZ(3, "span", 39),
            n._UZ(4, "app-token-logo", 40),
            n.qZA()(),
            n.BQk()),
            2 & o) {
                const t = n.oxw().hot
                  , e = n.oxw();
                n.xp6(2),
                n.Q6J("ngIf", !e.exchange && !e.hightlightTopThree),
                n.xp6(2),
                n.Q6J("symbol", t.symbol)("name", t.realName)("chain", t.chain)("address", t.contract)("logoUrl", t.logo)("hasWhiteBackground", !0)
            }
        }
        function rn(o, a) {
            if (1 & o && (n.ynx(0),
            n._UZ(1, "app-token-name", 42),
            n.ALo(2, "appSafe"),
            n.ALo(3, "slice"),
            n.ALo(4, "appSafe"),
            n.BQk()),
            2 & o) {
                const t = n.oxw().hot
                  , e = n.oxw();
                n.xp6(1),
                n.Q6J("tokenRight", e.screenWidth > 1350 ? n.lcZ(2, 3, t.symbol_vs) : null)("tokenLeft", n.Dn7(3, 5, n.lcZ(4, 9, t.symbol), 0, 9))("isLink", "???" !== t.symbol && t.id === e.rowHover)
            }
        }
        function cn(o, a) {
            if (1 & o && (n.ynx(0),
            n._uU(1),
            n.ALo(2, "slice"),
            n.ALo(3, "appSafe"),
            n.BQk()),
            2 & o) {
                const t = n.oxw().hot;
                n.xp6(1),
                n.Oqu(n.Dn7(2, 1, n.lcZ(3, 5, t.symbol), 0, 9))
            }
        }
        function sn(o, a) {
            if (1 & o && (n.TgZ(0, "img", 41),
            n.ALo(1, "exchangeLogoStyles"),
            n.ALo(2, "exchangeLogoUrl"),
            n.qZA()),
            2 & o) {
                const t = n.oxw().hot
                  , e = n.oxw();
                n.Akn(n.xi3(1, 4, t.exchange, e.chain)),
                n.MGl("alt", "", e.getExchangeNameFromExchangeApi(t.exchange), "-logo"),
                n.Q6J("src", n.xi3(2, 7, t.exchange, e.chain), n.LSH)
            }
        }
        function hn(o, a) {
            if (1 & o && (n.TgZ(0, "span", 22),
            n._uU(1),
            n.ALo(2, "appRoundPrices"),
            n.qZA()),
            2 & o) {
                const t = n.oxw().hot;
                n.Tol(t.isPriceUp ? "buy-color" : "sell-color"),
                n.xp6(1),
                n.hij(" $", n.xi3(2, 3, t.priceUsd, 4), " ")
            }
        }
        function _n(o, a) {
            1 & o && n._UZ(0, "app-icon", 46),
            2 & o && n.Q6J("width", 6)
        }
        function gn(o, a) {
            1 & o && n._UZ(0, "app-icon", 47),
            2 & o && n.Q6J("width", 6)
        }
        function ln(o, a) {
            if (1 & o && (n.ynx(0),
            n.YNc(1, _n, 1, 1, "app-icon", 44),
            n.YNc(2, gn, 1, 1, "app-icon", 45),
            n._uU(3),
            n.BQk()),
            2 & o) {
                const t = n.oxw(2).hot
                  , e = n.oxw();
                n.xp6(1),
                n.Q6J("ngIf", t.variation24h < 0),
                n.xp6(1),
                n.Q6J("ngIf", t.variation24h >= 0),
                n.xp6(1),
                n.hij(" ", e.getPriceVariation(t.variation24h), "% ")
            }
        }
        function pn(o, a) {
            1 & o && (n.ynx(0),
            n._uU(1, " 0.0% "),
            n.BQk())
        }
        function dn(o, a) {
            if (1 & o && (n.TgZ(0, "span", 43),
            n.YNc(1, ln, 4, 3, "ng-container", 0),
            n.YNc(2, pn, 2, 0, "ng-container", 0),
            n.qZA()),
            2 & o) {
                const t = n.oxw().hot;
                n.Tol(t.variation24h >= 0 ? "buy-color" : "sell-color"),
                n.xp6(1),
                n.Q6J("ngIf", t.variation24h),
                n.xp6(1),
                n.Q6J("ngIf", !t.variation24h)
            }
        }
        function mn(o, a) {
            1 & o && (n.TgZ(0, "span", 51),
            n.ALo(1, "translate"),
            n._uU(2),
            n.ALo(3, "translate"),
            n.qZA()),
            2 & o && (n.s9C("ngbTooltip", n.lcZ(1, 2, "hot_pairs_header.new")),
            n.xp6(2),
            n.hij(" ", n.lcZ(3, 4, "hot_pairs_header.new"), " "))
        }
        function un(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "div", 48)(1, "a", 25),
                n.NdJ("click", function(r) {
                    n.CHM(t);
                    const c = n.oxw().hot;
                    return n.oxw().navigateToPairExplorer(r, c),
                    n.KtG(!1)
                }),
                n.YNc(2, mn, 4, 6, "span", 49),
                n._UZ(3, "app-icon", 50),
                n.ALo(4, "translate"),
                n.qZA()()
            }
            if (2 & o) {
                const t = n.oxw().hot
                  , e = n.oxw();
                n.xp6(1),
                n.Q6J("href", e.getHrefUrl(t), n.LSH),
                n.xp6(1),
                n.Q6J("ngIf", t.new),
                n.xp6(1),
                n.s9C("ngbTooltip", n.lcZ(4, 4, "pools_creator.show_live_data")),
                n.Q6J("width", 20)
            }
        }
        const v = function(o) {
            return {
                badge: o
            }
        };
        function fn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "div", 32),
                n.NdJ("mouseenter", function() {
                    const c = n.CHM(t).hot
                      , m = n.oxw();
                    return n.KtG(m.setRowHover(c.id))
                })("mouseleave", function() {
                    n.CHM(t);
                    const r = n.oxw();
                    return n.KtG(r.setRowHover(null))
                }),
                n.TgZ(1, "span", 33)(2, "span", 23),
                n._uU(3),
                n.qZA(),
                n.TgZ(4, "span", 34),
                n.YNc(5, on, 1, 4, "fa-icon", 11),
                n.qZA(),
                n.YNc(6, an, 5, 7, "ng-container", 0),
                n.YNc(7, rn, 5, 11, "ng-container", 0),
                n.YNc(8, cn, 4, 7, "ng-container", 0),
                n.YNc(9, sn, 3, 10, "img", 35),
                n.qZA(),
                n.YNc(10, hn, 3, 6, "span", 15),
                n.YNc(11, dn, 3, 4, "span", 36),
                n.qZA(),
                n.YNc(12, un, 5, 6, "div", 37)
            }
            if (2 & o) {
                const t = a.hot
                  , e = a.i
                  , r = n.oxw();
                n.xp6(2),
                n.Gre("me-2  no-margin ", r.isTokenFinder ? "token-finder-padding" : null, ""),
                n.Q6J("ngClass", n.VKq(13, v, !r.hightlightTopThree)),
                n.xp6(1),
                n.hij("#", e + 2, ""),
                n.xp6(2),
                n.Q6J("ngIf", t.move),
                n.xp6(1),
                n.Q6J("ngIf", t.id && t.symbol && !r.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", !r.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", r.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", !r.exchange && r.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", t.priceUsd),
                n.xp6(1),
                n.Q6J("ngIf", !r.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", r.hightlightTopThree)
            }
        }
        function xn(o, a) {
            if (1 & o && n._UZ(0, "fa-icon", 19),
            2 & o) {
                const t = n.oxw().hotNumberOne;
                n.Gre("me-2 no-margin ", t.move.color, ""),
                n.Q6J("icon", t.move.arrow)
            }
        }
        function Cn(o, a) {
            if (1 & o && (n.TgZ(0, "img", 41),
            n.ALo(1, "exchangeLogoStyles"),
            n.ALo(2, "exchangeLogoUrl"),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2).hotNumberOne
                  , e = n.oxw();
                n.Akn(n.xi3(1, 4, t.exchange, e.chain)),
                n.MGl("alt", "", e.getExchangeNameFromExchangeApi(t.exchange), "-logo"),
                n.Q6J("src", n.xi3(2, 7, t.exchange, e.chain), n.LSH)
            }
        }
        function Pn(o, a) {
            if (1 & o && (n.ynx(0),
            n.TgZ(1, "span", 38),
            n.YNc(2, Cn, 3, 10, "img", 35),
            n.TgZ(3, "span", 39),
            n._UZ(4, "app-token-logo", 40),
            n.qZA()(),
            n.BQk()),
            2 & o) {
                const t = n.oxw().hotNumberOne
                  , e = n.oxw();
                n.xp6(2),
                n.Q6J("ngIf", !e.exchange),
                n.xp6(2),
                n.Q6J("symbol", t.symbol)("name", t.realName)("chain", t.chain)("address", t.contract)("logoUrl", t.logo)("hasWhiteBackground", !0)
            }
        }
        function bn(o, a) {
            if (1 & o && (n.TgZ(0, "span", 22),
            n._uU(1),
            n.ALo(2, "appRoundPrices"),
            n.qZA()),
            2 & o) {
                const t = n.oxw().hotNumberOne;
                n.Tol(t.isPriceUp ? "buy-color" : "sell-color"),
                n.xp6(1),
                n.hij(" $", n.xi3(2, 3, t.priceUsd, 4), " ")
            }
        }
        function On(o, a) {
            1 & o && n._UZ(0, "app-icon", 46),
            2 & o && n.Q6J("width", 6)
        }
        function Mn(o, a) {
            1 & o && n._UZ(0, "app-icon", 47),
            2 & o && n.Q6J("width", 6)
        }
        function Tn(o, a) {
            if (1 & o && (n.ynx(0),
            n.YNc(1, On, 1, 1, "app-icon", 44),
            n.YNc(2, Mn, 1, 1, "app-icon", 45),
            n._uU(3),
            n.BQk()),
            2 & o) {
                const t = n.oxw(2).hotNumberOne
                  , e = n.oxw();
                n.xp6(1),
                n.Q6J("ngIf", t.variation24h < 0),
                n.xp6(1),
                n.Q6J("ngIf", t.variation24h >= 0),
                n.xp6(1),
                n.hij(" ", e.getPriceVariation(t.variation24h), "% ")
            }
        }
        function kn(o, a) {
            1 & o && (n.ynx(0),
            n._uU(1, " 0.0% "),
            n.BQk())
        }
        function wn(o, a) {
            if (1 & o && (n.TgZ(0, "span", 43),
            n.YNc(1, Tn, 4, 3, "ng-container", 0),
            n.YNc(2, kn, 2, 0, "ng-container", 0),
            n.qZA()),
            2 & o) {
                const t = n.oxw().hotNumberOne;
                n.Tol(t.variation24h >= 0 ? "buy-color" : "sell-color"),
                n.xp6(1),
                n.Q6J("ngIf", t.variation24h),
                n.xp6(1),
                n.Q6J("ngIf", !t.variation24h)
            }
        }
        function vn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "div", 32),
                n.NdJ("mouseenter", function() {
                    const c = n.CHM(t).hotNumberOne
                      , m = n.oxw();
                    return n.KtG(m.setRowHover(c.id))
                })("mouseleave", function() {
                    n.CHM(t);
                    const r = n.oxw();
                    return n.KtG(r.setRowHover(null))
                }),
                n.TgZ(1, "span", 33)(2, "span", 52),
                n._uU(3, "#1"),
                n.qZA(),
                n.TgZ(4, "span", 34),
                n.YNc(5, xn, 1, 4, "fa-icon", 11),
                n.qZA(),
                n.YNc(6, Pn, 5, 7, "ng-container", 0),
                n.ynx(7),
                n._UZ(8, "app-token-name", 42),
                n.ALo(9, "appSafe"),
                n.ALo(10, "slice"),
                n.ALo(11, "appSafe"),
                n.BQk(),
                n.qZA(),
                n.YNc(12, bn, 3, 6, "span", 15),
                n.YNc(13, wn, 3, 4, "span", 36),
                n.qZA()
            }
            if (2 & o) {
                const t = a.hotNumberOne
                  , e = n.oxw();
                n.xp6(5),
                n.Q6J("ngIf", t.move),
                n.xp6(1),
                n.Q6J("ngIf", t.id && t.symbol),
                n.xp6(2),
                n.Q6J("tokenRight", e.screenWidth > 1350 ? n.lcZ(9, 7, t.symbol_vs) : null)("tokenLeft", n.Dn7(10, 9, n.lcZ(11, 13, t.symbol), 0, 9))("isLink", t.id === e.rowHover),
                n.xp6(4),
                n.Q6J("ngIf", t.priceUsd),
                n.xp6(1),
                n.Q6J("ngIf", !e.hightlightTopThree)
            }
        }
        function yn(o, a) {
            if (1 & o && n._UZ(0, "fa-icon", 19),
            2 & o) {
                const t = n.oxw().hot;
                n.Gre("me-2 no-margin ", t.move.color, ""),
                n.Q6J("icon", t.move.arrow)
            }
        }
        function Hn(o, a) {
            if (1 & o && (n.TgZ(0, "img", 41),
            n.ALo(1, "exchangeLogoStyles"),
            n.ALo(2, "exchangeLogoUrl"),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2).hot
                  , e = n.oxw();
                n.Akn(n.xi3(1, 4, t.exchange, e.chain)),
                n.MGl("alt", "", e.getExchangeNameFromExchangeApi(t.exchange), "-logo"),
                n.Q6J("src", n.xi3(2, 7, t.exchange, e.chain), n.LSH)
            }
        }
        function Zn(o, a) {
            if (1 & o && (n.TgZ(0, "span", 38),
            n.YNc(1, Hn, 3, 10, "img", 35),
            n.TgZ(2, "span", 55),
            n._uU(3, "?"),
            n.qZA()()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.Q6J("ngIf", !t.exchange)
            }
        }
        function An(o, a) {
            if (1 & o && (n.ynx(0),
            n._UZ(1, "app-token-name", 42),
            n.ALo(2, "appSafe"),
            n.ALo(3, "slice"),
            n.ALo(4, "appSafe"),
            n.BQk()),
            2 & o) {
                const t = n.oxw().hot
                  , e = n.oxw();
                n.xp6(1),
                n.Q6J("tokenRight", e.screenWidth > 1350 ? n.lcZ(2, 3, t.symbol_vs) : null)("tokenLeft", n.Dn7(3, 5, n.lcZ(4, 9, t.symbol), 0, 9))("isLink", "???" !== t.symbol && t.id === e.rowHover)
            }
        }
        function Nn(o, a) {
            if (1 & o && (n.ynx(0),
            n._uU(1),
            n.ALo(2, "slice"),
            n.ALo(3, "appSafe"),
            n.BQk()),
            2 & o) {
                const t = n.oxw().hot;
                n.xp6(1),
                n.Oqu(n.Dn7(2, 1, n.lcZ(3, 5, t.symbol), 0, 9))
            }
        }
        function Ln(o, a) {
            if (1 & o && (n.TgZ(0, "img", 41),
            n.ALo(1, "exchangeLogoStyles"),
            n.ALo(2, "exchangeLogoUrl"),
            n.qZA()),
            2 & o) {
                const t = n.oxw().hot
                  , e = n.oxw();
                n.Akn(n.xi3(1, 4, t.exchange, e.chain)),
                n.MGl("alt", "", e.getExchangeNameFromExchangeApi(t.exchange), "-logo"),
                n.Q6J("src", n.xi3(2, 7, t.exchange, e.chain), n.LSH)
            }
        }
        function Qn(o, a) {
            1 & o && n._UZ(0, "app-icon", 46),
            2 & o && n.Q6J("width", 6)
        }
        function Un(o, a) {
            1 & o && n._UZ(0, "app-icon", 47),
            2 & o && n.Q6J("width", 6)
        }
        function Jn(o, a) {
            if (1 & o && (n.ynx(0),
            n.YNc(1, Qn, 1, 1, "app-icon", 44),
            n.YNc(2, Un, 1, 1, "app-icon", 45),
            n._uU(3, " ???% "),
            n.BQk()),
            2 & o) {
                const t = n.oxw(2).hot;
                n.xp6(1),
                n.Q6J("ngIf", t.variation24h < 0),
                n.xp6(1),
                n.Q6J("ngIf", t.variation24h >= 0)
            }
        }
        function En(o, a) {
            1 & o && (n.ynx(0),
            n._uU(1, " 0.0% "),
            n.BQk())
        }
        function In(o, a) {
            if (1 & o && (n.TgZ(0, "span", 43),
            n.YNc(1, Jn, 4, 2, "ng-container", 0),
            n.YNc(2, En, 2, 0, "ng-container", 0),
            n.qZA()),
            2 & o) {
                const t = n.oxw().hot;
                n.Tol(t.variation24h >= 0 ? "buy-color" : "sell-color"),
                n.xp6(1),
                n.Q6J("ngIf", t.variation24h),
                n.xp6(1),
                n.Q6J("ngIf", !t.variation24h)
            }
        }
        function Sn(o, a) {
            1 & o && (n.TgZ(0, "span", 51),
            n.ALo(1, "translate"),
            n._uU(2),
            n.ALo(3, "translate"),
            n.qZA()),
            2 & o && (n.s9C("ngbTooltip", n.lcZ(1, 2, "hot_pairs_header.new")),
            n.xp6(2),
            n.hij(" ", n.lcZ(3, 4, "hot_pairs_header.new"), " "))
        }
        function Yn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "div", 48)(1, "a", 30),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const r = n.oxw(2);
                    return n.KtG(r.openHotPairsModal())
                }),
                n.YNc(2, Sn, 4, 6, "span", 49),
                n._UZ(3, "app-icon", 50),
                n.ALo(4, "translate"),
                n.qZA()()
            }
            if (2 & o) {
                const t = n.oxw().hot;
                n.xp6(2),
                n.Q6J("ngIf", t.new),
                n.xp6(1),
                n.s9C("ngbTooltip", n.lcZ(4, 3, "pools_creator.show_live_data")),
                n.Q6J("width", 20)
            }
        }
        const Fn = function(o, a) {
            return {
                standard: o,
                premium: a
            }
        };
        function Bn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "div", 32),
                n.NdJ("mouseenter", function() {
                    const c = n.CHM(t).hot
                      , m = n.oxw();
                    return n.KtG(m.setRowHover(c.id))
                })("mouseleave", function() {
                    n.CHM(t);
                    const r = n.oxw();
                    return n.KtG(r.setRowHover(null))
                }),
                n.TgZ(1, "span", 33)(2, "span", 23),
                n._uU(3),
                n.qZA(),
                n.TgZ(4, "span", 34),
                n.YNc(5, yn, 1, 4, "fa-icon", 11),
                n.qZA(),
                n.YNc(6, Zn, 4, 1, "span", 53),
                n.YNc(7, An, 5, 11, "ng-container", 0),
                n.YNc(8, Nn, 4, 7, "ng-container", 0),
                n.YNc(9, Ln, 3, 10, "img", 35),
                n.qZA(),
                n.TgZ(10, "span", 54),
                n._uU(11, " $??????????? "),
                n.qZA(),
                n.YNc(12, In, 3, 4, "span", 36),
                n.qZA(),
                n.YNc(13, Yn, 5, 5, "div", 37)
            }
            if (2 & o) {
                const t = a.hot
                  , e = a.i
                  , r = n.oxw();
                n.xp6(2),
                n.Gre("me-2 no-margin ", r.isTokenFinder ? "token-finder-padding" : null, ""),
                n.Q6J("ngClass", n.VKq(13, v, !r.hightlightTopThree)),
                n.xp6(1),
                n.hij("#", e + 2, ""),
                n.xp6(2),
                n.Q6J("ngIf", t.move),
                n.xp6(1),
                n.Q6J("ngIf", !r.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", !r.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", r.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", !r.exchange && r.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngClass", n.WLB(15, Fn, e > 8 && e < 11, e > 10)),
                n.xp6(2),
                n.Q6J("ngIf", !r.hightlightTopThree),
                n.xp6(1),
                n.Q6J("ngIf", r.hightlightTopThree)
            }
        }
        function Dn(o, a) {
            if (1 & o && (n.TgZ(0, "div", 56)(1, "span", 33)(2, "span", 23),
            n._uU(3),
            n.qZA(),
            n._UZ(4, "span", 34),
            n.TgZ(5, "span", 38),
            n._UZ(6, "img", 57),
            n.TgZ(7, "span", 55),
            n._uU(8, "?"),
            n.qZA()(),
            n.ynx(9),
            n._UZ(10, "app-token-name", 58),
            n.BQk(),
            n.qZA(),
            n.TgZ(11, "span", 22),
            n._uU(12, " $??????????? "),
            n.qZA(),
            n.TgZ(13, "span", 43),
            n.ynx(14),
            n._uU(15, " ???% "),
            n.BQk(),
            n.qZA()()),
            2 & o) {
                const t = a.i
                  , e = n.oxw();
                n.xp6(2),
                n.Gre("me-2 no-margin ", e.isTokenFinder ? "token-finder-padding" : null, ""),
                n.Q6J("ngClass", n.VKq(7, v, !e.hightlightTopThree)),
                n.xp6(1),
                n.hij("#", e.hots.length + t + 2, ""),
                n.xp6(7),
                n.Q6J("tokenRight", e.screenWidth > 1350 ? "???" : null)("tokenLeft", "???")
            }
        }
        let Rn = (()=>{
            class o extends l.K9 {
                onResize() {
                    this.screenWidth = window.innerWidth
                }
                constructor(t, e, r, c, m) {
                    super(),
                    this._modalService = t,
                    this._cdRef = e,
                    this._breakpointObserver = r,
                    this._routingService = c,
                    this._environment = m,
                    this.hots = [],
                    this.hotNumberOne = null,
                    this.exchange = null,
                    this.isTokenFinder = !1,
                    this.hightlightTopThree = !0,
                    this.ChainPage = h.$,
                    this.mediaDevice = "",
                    this.screenWidth = window.innerWidth,
                    this.context = this._environment.app_scope,
                    this.rowHover = null
                }
                ngOnInit() {
                    this._breakpointObserver.observe([d.K5, d.mT]).pipe((0,
                    l.sL)(this)).subscribe(t=>{
                        this.mediaDevice = t.breakpoints[d.K5] ? "mobileTablet" : "desktop",
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._cdRef.detectChanges()
                }
                onDestroy() {}
                openHotPairsModal() {
                    this._modalService.open(p.Q, {
                        centered: !0,
                        scrollable: !0
                    })
                }
                getExchangeNameFromExchangeApi(t) {
                    return g.i9O.getExchangeNameFromExchangeApi(t, this.chain)
                }
                trackByHotPair(t, e) {
                    return e._id
                }
                getPriceVariation(t) {
                    return Math.abs(t)
                }
                numSequence(t) {
                    return Array(t)
                }
                getHrefUrl(t) {
                    return this._routingService.setLanguageToURL(`/${this.chain}/${h.$.PairExplorer}/${t.id}`)
                }
                setRowHover(t) {
                    this.rowHover = t,
                    this._cdRef.detectChanges()
                }
                navigateToPairExplorer(t, e) {
                    t.stopPropagation();
                    const r = `/${e.chain}/${h.$.PairExplorer}/${e.id}`;
                    return t.ctrlKey || t.metaKey ? this._routingService.windowNavigate(r, "_blank", "noopener") : this._routingService.navigate(r)
                }
            }
            return o.\u0275fac = function(t) {
                return new (t || o)(n.Y36(_.FF),n.Y36(n.sBO),n.Y36(L.Yg),n.Y36(H.Zn),n.Y36(H.qA))
            }
            ,
            o.\u0275cmp = n.Xpm({
                type: o,
                selectors: [["app-hot-pairs"]],
                hostBindings: function(t, e) {
                    1 & t && n.NdJ("resize", function() {
                        return e.onResize()
                    }, !1, n.Jf7)
                },
                inputs: {
                    hots: "hots",
                    chain: "chain",
                    hotNumberOne: "hotNumberOne",
                    exchange: "exchange",
                    isTokenFinder: "isTokenFinder",
                    hightlightTopThree: "hightlightTopThree"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 9,
                vars: 1,
                consts: [[4, "ngIf"], ["hotData", ""], ["hotNumber1", ""], ["hotSymbol", ""], ["noPair", ""], [3, "class", "ngStyle", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngStyle"], [1, "wrapper"], [1, "d-flex", "align-items-center", "symbol"], [1, "badge", "bg-success", "top-one", "bg-top-one", "me-2", "no-margin", "align-middle"], [3, "icon", "class", 4, "ngIf"], ["class", "ms-2 hot-exchange-one", "loading", "lazy", 3, "style", "src", "alt", 4, "ngIf"], ["class", "badge top-one bg-success me-1 mt-1 align-middle", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["class", "price text-end", 3, "class", 4, "ngIf"], [1, "name", "link"], ["rel", "nofollow", 1, "ms-1", "d-flex", "align-items-center", 3, "href", "click"], ["name", "pairExplorer", 3, "width"], [3, "icon"], ["loading", "lazy", 1, "ms-2", "hot-exchange-one", 3, "src", "alt"], [1, "badge", "top-one", "bg-success", "me-1", "mt-1", "align-middle"], [1, "price", "text-end"], [3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["rel", "nofollow", 3, "href", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["rel", "nofollow", 3, "href", "click", 4, "ngIf"], ["href", "javascript:", 3, "click", 4, "ngIf"], ["href", "javascript:", 3, "click"], [4, "ngFor", "ngForOf"], [1, "wrapper", "info", 3, "mouseenter", "mouseleave"], [1, "name", "d-flex"], [1, "arrow_move"], ["class", "ms-2 hot-exchange", "loading", "lazy", 3, "style", "src", "alt", 4, "ngIf"], ["class", "price percentage text-end", 3, "class", 4, "ngIf"], ["class", "link", 4, "ngIf"], [1, "image-container"], [1, "container-logo"], [3, "symbol", "name", "chain", "address", "logoUrl", "hasWhiteBackground"], ["loading", "lazy", 1, "ms-2", "hot-exchange", 3, "src", "alt"], [3, "tokenRight", "tokenLeft", "isLink"], [1, "price", "percentage", "text-end"], ["name", "variationDown", 3, "width", 4, "ngIf"], ["name", "variationUp", 3, "width", 4, "ngIf"], ["name", "variationDown", 3, "width"], ["name", "variationUp", 3, "width"], [1, "link"], ["class", "badge bg-success me-1 align-middle", 3, "ngbTooltip", 4, "ngIf"], ["name", "pairExplorer", 1, "align-middle", 3, "width", "ngbTooltip"], [1, "badge", "bg-success", "me-1", "align-middle", 3, "ngbTooltip"], [1, "me-2", "no-margin", "top-one", "badge", "bg-success"], ["class", "image-container", 4, "ngIf"], [1, "price", "text-end", 3, "ngClass"], [1, "name-icon"], [1, "wrapper", "info"], ["alt", "Unknown DEX-logo", "src", "assets/img/exchanges/unknown.png", "loading", "lazy", 1, "ms-2", "hot-exchange"], [3, "tokenRight", "tokenLeft"]],
                template: function(t, e) {
                    1 & t && (n.YNc(0, tn, 3, 2, "ng-container", 0),
                    n.YNc(1, fn, 13, 15, "ng-template", null, 1, n.W1O),
                    n.YNc(3, vn, 14, 15, "ng-template", null, 2, n.W1O),
                    n.YNc(5, Bn, 14, 18, "ng-template", null, 3, n.W1O),
                    n.YNc(7, Dn, 16, 9, "ng-template", null, 4, n.W1O)),
                    2 & t && n.Q6J("ngIf", null != e.hotNumberOne && e.hotNumberOne.symbol)
                },
                dependencies: [O.O5, O.PC, y.uH, y.BN, N.lQ, O.mk, O.tP, O.ax, A.T, T.m, _._L, O.OU, C.yl, C.pt, x.aw, x.X$, g.Wu7, g.khD, g.$a1],
                styles: [".wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.wrapper[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#142028;font-weight:500;font-size:14px}body.dark-theme   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#142028}.wrapper[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{flex:1 0 6.2rem;text-overflow:ellipsis;white-space:nowrap;max-width:6.2rem}.wrapper[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{flex-basis:auto;max-width:100%;min-width:4.5rem}h6[_ngcontent-%COMP%]{padding:1.25rem .625rem!important;height:auto;border-bottom:none!important;font-weight:500!important;font-size:1.375rem!important;background-color:#16c6714f;border-radius:1rem}h6.ether[_ngcontent-%COMP%]{background-color:#6c89ff4d}h6.bnb[_ngcontent-%COMP%]{background-color:#efb90a4d}h6.polygon[_ngcontent-%COMP%]{background-color:#8247e54d}h6.fantom[_ngcontent-%COMP%]{background-color:#1969ff4d}h6.cronos[_ngcontent-%COMP%]{background-color:#1199fa4d}h6.avalanche[_ngcontent-%COMP%]{background-color:#e740424d}h6.oasis[_ngcontent-%COMP%]{background-color:#0092f64d}h6.velas[_ngcontent-%COMP%]{background-color:#0037c14d}h6.metis[_ngcontent-%COMP%]{background-color:#2adacc4d}h6.kucoin[_ngcontent-%COMP%]{background-color:#31d7a04d}h6.optimism[_ngcontent-%COMP%]{background-color:#ff04204d}h6.arbitrum[_ngcontent-%COMP%]{background-color:#28a0f04d}h6.celo[_ngcontent-%COMP%]{background-color:#35d07f4d}h6.telos[_ngcontent-%COMP%]{background-color:#cbcaf94d}h6.aurora[_ngcontent-%COMP%]{background-color:#6ee4e54d}h6.moonbeam[_ngcontent-%COMP%]{background-color:#ea5aa24d}h6.moonriver[_ngcontent-%COMP%]{background-color:#f2a0074d}h6.harmony[_ngcontent-%COMP%]{background-color:#3ad8d14d}h6.astar[_ngcontent-%COMP%]{background-color:#1b6dc14d}h6.fuse[_ngcontent-%COMP%]{background-color:#b3ffbb4d}h6.iotex[_ngcontent-%COMP%]{background-color:#44ffb24d}h6.okc[_ngcontent-%COMP%]{background-color:#205fec4d}h6.heco[_ngcontent-%COMP%]{background-color:#aefb194d}h6.milkomeda[_ngcontent-%COMP%]{background-color:#f07d004d}h6.dfk[_ngcontent-%COMP%]{background-color:#e740424d}h6.solana[_ngcontent-%COMP%]{background-color:#14f1954d}h6.evmos[_ngcontent-%COMP%]{background-color:#fff3cd4d}h6.dogechain[_ngcontent-%COMP%]{background-color:#ba9f334d}h6.canto[_ngcontent-%COMP%]{background-color:#66ff9a4d}h6.etc[_ngcontent-%COMP%]{background-color:#14b9814d}h6.gnosis[_ngcontent-%COMP%]{background-color:#0ae33a4d}h6.bitgert[_ngcontent-%COMP%]{background-color:#b3fa084d}h6.arbitrumnova[_ngcontent-%COMP%]{background-color:#ef82204d}h6.songbird[_ngcontent-%COMP%]{background-color:#e2665c4d}h6.redlight[_ngcontent-%COMP%]{background-color:#ff3c3b4d}h6.kardia[_ngcontent-%COMP%]{background-color:#d77ac74d}h6.smartbch[_ngcontent-%COMP%]{background-color:#3fdb884d}h6.conflux[_ngcontent-%COMP%]{background-color:#4fc0d04d}h6.tomb[_ngcontent-%COMP%]{background-color:#9585fe4d}h6.boba[_ngcontent-%COMP%]{background-color:#cbff004d}h6.elastos[_ngcontent-%COMP%]{background-color:#a97ae74d}h6.shiden[_ngcontent-%COMP%]{background-color:#9b2abc4d}h6.fusion[_ngcontent-%COMP%]{background-color:#017bfe4d}h6.wan[_ngcontent-%COMP%]{background-color:#2daef14d}h6.rsk[_ngcontent-%COMP%]{background-color:#03826d4d}h6.nova[_ngcontent-%COMP%]{background-color:#b241414d}h6.hoo[_ngcontent-%COMP%]{background-color:#00d1ae4d}h6.cube[_ngcontent-%COMP%]{background-color:#43ffff4d}h6.syscoin[_ngcontent-%COMP%]{background-color:#0680fe4d}h6.ronin[_ngcontent-%COMP%]{background-color:#c4e3fb4d}h6.tomo[_ngcontent-%COMP%]{background-color:#3fe8b44d}h6.kava[_ngcontent-%COMP%]{background-color:#f9443e4d}h6.thundercore[_ngcontent-%COMP%]{background-color:#35d1d14d}h6.meter[_ngcontent-%COMP%]{background-color:#1787d04d}h6.echelon[_ngcontent-%COMP%]{background-color:#ed30d14d}h6.shib[_ngcontent-%COMP%]{background-color:#e20dcd4d}h6.ethw[_ngcontent-%COMP%]{background-color:#6c85dd4d}h6.kek[_ngcontent-%COMP%]{background-color:#3e80654d}h6.ethf[_ngcontent-%COMP%]{background-color:#6481f84d}h6.sx[_ngcontent-%COMP%]{background-color:#3ec6e94d}h6.muu[_ngcontent-%COMP%]{background-color:#007bff4d}h6.alvey[_ngcontent-%COMP%]{background-color:#487cb64d}h6.aptos[_ngcontent-%COMP%]{background-color:#2ed8a74d}h6.elrond[_ngcontent-%COMP%]{background-color:#23f7dd4d}h6.flare[_ngcontent-%COMP%]{background-color:#cf2e2e4d}h6.pom[_ngcontent-%COMP%]{background-color:#1e1b574d}h6.ultron[_ngcontent-%COMP%]{background-color:#150b424d}h6.energi[_ngcontent-%COMP%]{background-color:#00e6764d}h6.exosama[_ngcontent-%COMP%]{background-color:#1719234d}h6.coredao[_ngcontent-%COMP%]{background-color:#ff96354d}h6.ethergoerli[_ngcontent-%COMP%]{background-color:#afeeee4d}h6.filecoin[_ngcontent-%COMP%]{background-color:#0090ff4d}h6.zksync[_ngcontent-%COMP%]{background-color:#712f934d}h6.polygonzkevm[_ngcontent-%COMP%]{background-color:#8141f24d}h6.pulse[_ngcontent-%COMP%]{background-color:#9a01f84d}h6.klaytn[_ngcontent-%COMP%]{background-color:#ff2f004d}h6[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}h6[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%] > .badge[_ngcontent-%COMP%]{font-size:12px;max-width:1.5625rem}h6[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .badge.bg-top-one[_ngcontent-%COMP%]{font-size:16px;padding:.25rem .5rem}h6[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%] > .name[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%] > .price[_ngcontent-%COMP%]{flex:1 0;text-overflow:ellipsis;white-space:nowrap;min-width:6.5rem;margin-right:.2rem}h6[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%] > .name[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{line-height:0;right:.3125rem;top:2.0625rem;color:#818ea3}h6[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%] > .price[_ngcontent-%COMP%]{flex-basis:auto;max-width:100%;min-width:4.5rem}h6[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:1.125rem!important}.token-finder-hot-one[_ngcontent-%COMP%]{background:transparent!important;font-size:inherit!important;padding:.625rem!important;margin-bottom:0!important}.token-finder-padding[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.37rem}li[_ngcontent-%COMP%]{padding:.625rem!important;cursor:pointer}li.top-two[_ngcontent-%COMP%]{background-color:#e2e7ec;border-top-left-radius:1rem;border-top-right-radius:1rem}li.top-two[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#3d5170}li.top-three[_ngcontent-%COMP%]{background-color:#e2e7ec;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;margin-bottom:.625rem}li.only-top-two[_ngcontent-%COMP%]{border-radius:1rem}.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;line-height:1}.standard[_ngcontent-%COMP%]{color:#787e94;filter:brightness(.85)}.premium[_ngcontent-%COMP%]{color:#b8860b;filter:brightness(.85)}.hot-logo-one[_ngcontent-%COMP%], .hot-exchange-one[_ngcontent-%COMP%]{background:#fff;border-radius:50%;height:1.375rem;width:1.375rem;min-height:1.375rem;min-width:1.375rem;padding:.1875rem;vertical-align:top}.hot-exchange[_ngcontent-%COMP%]{background:#fff;border-radius:50%;height:1rem;width:1rem;min-height:1rem;min-width:1rem;padding:.0625rem;vertical-align:middle}.hotspairs-list-dashboard[_ngcontent-%COMP%]{-moz-column-count:3;column-count:3;-moz-column-gap:2.5rem;column-gap:2.5rem;-moz-column-rule:.125rem solid #c9cedc;column-rule:.125rem solid #c9cedc;list-style:none;padding:0!important;font-size:13px}.hotspairs-list-dashboard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{-moz-column-break-inside:avoid;break-inside:avoid}@media (max-width: 1280px){.hotspairs-list-dashboard[_ngcontent-%COMP%]{width:72.5rem}}@media (max-width: 599px){.hotspairs-list-dashboard[_ngcontent-%COMP%]{width:68.75rem}}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{flex-flow:row;height:1.625rem;width:100%}@media (max-width: 1350px){.hotspairs-list-dashboard[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{gap:.625rem}}.hotspairs-list-dashboard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex!important;min-height:2.3125rem;color:#142028;line-height:2.3125rem;border-radius:0!important;overflow:unset!important;align-items:center;justify-content:unset!important;width:calc(100% + 10px);margin:0 0 0 -.3125rem;padding:0 .3125rem!important}body.dark-theme   [_nghost-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#142028}@media (min-width: 1024px){.hotspairs-list-dashboard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#e2e7ec;border-radius:.625rem!important}body.dark-theme   [_nghost-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#23323c}body.light   [_nghost-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}}.hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;color:#142028}body.dark-theme   [_nghost-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}.hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#142028}body.dark-theme   [_nghost-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}body.light   [_nghost-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#142028}body.light[_ngcontent-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#142028}.hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .symbol[_ngcontent-%COMP%], .hotspairs-list-dashboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .token-name[_ngcontent-%COMP%]{color:#00b8d8!important;text-decoration:none}.hotspairs-list-dashboard[_ngcontent-%COMP%]   app-token-name[_ngcontent-%COMP%]{width:calc(100% - 108px)}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{height:1.625rem;width:100%}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{width:5.625rem!important;min-width:5.625rem;max-width:5.625rem}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .price.percentage[_ngcontent-%COMP%]{width:3.75rem!important;min-width:3.75rem;max-width:3.75rem}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{font-weight:400;height:-moz-fit-content;height:fit-content;align-self:center;width:1.4375rem;text-align:center;padding-left:0;padding-right:0;color:#142028}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .badge.top-one[_ngcontent-%COMP%]{color:#fff}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .symbol_vs[_ngcontent-%COMP%]{color:#818ea3;font-weight:400;font-size:12px}body.dark-theme   [_nghost-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   .symbol_vs[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   .symbol_vs[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   .symbol_vs[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .hotspairs-list-dashboard[_ngcontent-%COMP%]   .symbol_vs[_ngcontent-%COMP%]{color:#818ea3}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{max-width:calc(100% - 200px);width:calc(100% - 200px);height:1.625rem!important;display:flex;flex:unset;justify-content:flex-start;align-items:center;gap:.5rem}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .no-margin[_ngcontent-%COMP%]{margin:0!important}@media (max-width: 1350px){.hotspairs-list-dashboard[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{max-width:calc(100% - 120px);width:calc(100% - 120px)}}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]{width:calc(100% - 100px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;align-self:center}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:1.5rem!important;height:1.625rem!important;display:inline-block;position:relative;margin-right:.75rem}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .hot-exchange[_ngcontent-%COMP%]{z-index:1;width:.875rem;height:.875rem;min-width:.875rem;min-height:.875rem;border-radius:50%;position:absolute;background-color:#fff;top:0;right:-.5rem}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .container-logo[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:1.5rem;height:1.5rem}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .name-icon[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:1.5rem;height:1.5rem;line-height:1.5rem;text-align:center;background-color:#23323c;color:#fff;border-radius:50%;overflow:hidden}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .arrow_move[_ngcontent-%COMP%]{font-size:12px;width:.75rem;line-height:1.625rem}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .arrow_move[_ngcontent-%COMP%]   .buy-color[_ngcontent-%COMP%]{color:#17c671!important}.hotspairs-list-dashboard[_ngcontent-%COMP%]   .arrow_move[_ngcontent-%COMP%]   .sell-color[_ngcontent-%COMP%]{color:#ea3943!important}@media (min-width: 768px) and (max-width: 1000px){.hot-logo-one[_ngcontent-%COMP%]{display:none}}@media (max-width: 500px){.hot-logo-one[_ngcontent-%COMP%]{display:none}}@media (min-width: 1000px) and (max-width: 1340px){.hot-logo-one[_ngcontent-%COMP%]{display:none}}body.dark-theme   [_nghost-%COMP%]     li.top-two, body.dark-theme   [_nghost-%COMP%]     li.top-three{background-color:#23323c}body.dark-theme   [_nghost-%COMP%]     li.top-two .name, body.dark-theme   [_nghost-%COMP%]     li.top-three .name{color:#fff}body.dark-theme   [_nghost-%COMP%]     .hotspairs-list-dashboard{-moz-column-rule:.125rem solid #23323c;column-rule:.125rem solid #23323c}body.dark-theme   [_nghost-%COMP%]     .hotspairs-list-dashboard .badge{color:#fff}"],
                changeDetection: 0
            }),
            o
        }
        )();
        function Wn(o, a) {
            1 & o && (n.ynx(0),
            n.TgZ(1, "div", 3),
            n._uU(2),
            n.ALo(3, "translate"),
            n.qZA(),
            n.BQk()),
            2 & o && (n.xp6(2),
            n.Oqu(n.lcZ(3, 1, "stats.no_hotpairs_exchange")))
        }
        const Kn = function(o) {
            return {
                "hotpairs-dashboard": o
            }
        }
          , qn = function(o) {
            return {
                "d-none": o
            }
        };
        let Gn = (()=>{
            class o extends l.K9 {
                set chain(t) {
                    this._chain = t,
                    this._chainChanged$.next(),
                    this._initialize()
                }
                get chain() {
                    return this._chain
                }
                constructor(t, e, r) {
                    super(),
                    this._hotPairsService = t,
                    this._priceTrackService = e,
                    this._cdRef = r,
                    this.Chain = g.qop,
                    this.hots = [],
                    this.hotNumberOne = null,
                    this.isLoading = !0,
                    this.timeoutExchangeHotPairs = !1,
                    this._chainChanged$ = new f.x,
                    this.isDashboard = !1,
                    this.exchangeApi = null,
                    this.isTokenFinder = !1,
                    this.highlightTopThree = !0,
                    this._initialCharge = !0,
                    this._oldHots = {},
                    this._timeoutHot = null,
                    this._maxHotPairs = 10,
                    this._hots = [],
                    this._hotPairsDateStart = Date.now()
                }
                onDestroy() {
                    this._chainChanged$.next(),
                    this._chainChanged$.complete(),
                    this._timeoutHot && this._timeoutHot.unsubscribe(),
                    this._priceTracker && this._priceTracker.unTrackAll()
                }
                ngOnInit() {
                    this.highlightTopThree = !this.isDashboard,
                    this._maxHotPairs = this.isTokenFinder ? 3 : this._hotPairsService.maxHotPairs,
                    this._refreshTime = this._hotPairsService.getRefreshTime(),
                    this._callPlan = this._hotPairsService.callPlan
                }
                _initialize() {
                    this.isLoading = !0,
                    this._hots = [],
                    this._hotNumberOne = null,
                    this.isDashboard && (this._initialCharge = !0,
                    this.timeoutExchangeHotPairs = !1),
                    this._cdRef.detectChanges(),
                    setTimeout(()=>{
                        null != this._callPlan && this._refreshTime && (this._timeoutHot && this._timeoutHot.unsubscribe(),
                        this._priceTracker ? this._getHotPairs(this._callPlan, this._refreshTime, !0) : (this._trackHotsPrices(),
                        this._getHotPairs(this._callPlan, this._refreshTime)))
                    }
                    , this.isDashboard ? 100 : 500)
                }
                _trackHotsPrices(t=!1) {
                    (!this._priceTracker || t) && (this._trackerSubscription && this._trackerSubscription.unsubscribe(),
                    this._priceTracker = this._priceTrackService.startTracking(this.chain, "hotPairs"),
                    this._trackerSubscription = this._priceTracker.pricesUpdates$.pipe((0,
                    l.sL)(this), (0,
                    P.b)(e=>{
                        for (const r of e) {
                            const c = this._hotNumberOne && [this._hotNumberOne, ...this._hots].find(Z=>!!Z.id && Z.id.toLowerCase() === r.id.toLowerCase())
                              , m = r.price24h ? this._setDiffPrice(r.usd, r.price24h) : void 0;
                            null != c && c.priceUsd !== r.usd && (c.previousPriceUsd = c.priceUsd,
                            c.priceUsd = r.usd,
                            c.isPriceUp = c.priceUsd > (c.previousPriceUsd || 0),
                            c.variation24h = m)
                        }
                        this.hots = [...this._hots],
                        this.hotNumberOne = this._hotNumberOne,
                        this._cdRef.detectChanges()
                    }
                    )).subscribe())
                }
                _setDiffPrice(t, e) {
                    if (null != e)
                        return t && e ? +(100 * (t / e - 1)).toFixed(2) : 0
                }
                _getHotPairs(t, e, r=!1) {
                    null !== this.exchangeApi || this.chain !== this._hotPairsService.currentChain ? this._hotPairsService.fetchHotPairsWithExchange(this.chain, this.exchangeApi).pipe((0,
                    i.q)(1)).subscribe({
                        next: c=>{
                            this._trackHotsPrices(r),
                            !(this._hots.length > 0) || c && 0 !== c.length ? (c && 0 !== c.length ? this._manageHotPairs(c) : (this._hots = [],
                            this._hotNumberOne = null,
                            this.hots = [...this._hots],
                            this.hotNumberOne = this._hotNumberOne,
                            this._initialCharge = !0),
                            this._cdRef.detectChanges(),
                            this._timeoutHot = (0,
                            b.H)(e).pipe((0,
                            l.sL)(this), (0,
                            u.R)(this._chainChanged$)).subscribe(()=>this._getHotPairs(t, e))) : this._timeoutHot = (0,
                            b.H)(5e3).pipe((0,
                            l.sL)(this), (0,
                            u.R)(this._chainChanged$)).subscribe(()=>this._getHotPairs(t, e))
                        }
                        ,
                        error: ()=>{
                            this._timeoutHot = (0,
                            b.H)(5e3).pipe((0,
                            l.sL)(this), (0,
                            u.R)(this._chainChanged$)).subscribe({
                                next: ()=>this._getHotPairs(t, e),
                                error: ()=>{
                                    this.isLoading = !1,
                                    this._cdRef.detectChanges()
                                }
                            })
                        }
                        ,
                        complete: ()=>{
                            this.isLoading = !1,
                            this._cdRef.detectChanges(),
                            this.exchangeApi && (this._timeoutExchange && this.hots.length > 0 && clearTimeout(this._timeoutExchange),
                            this._timeoutExchange = setTimeout(()=>{
                                this.timeoutExchangeHotPairs = !0,
                                this._cdRef.detectChanges()
                            }
                            , 5e3))
                        }
                    }) : this._hotPairsService.hotPairsByChain$.pipe((0,
                    l.sL)(this), (0,
                    u.R)(this._chainChanged$)).subscribe(c=>{
                        this._manageHotPairs(c),
                        this.isLoading = !1,
                        this._cdRef.detectChanges()
                    }
                    )
                }
                getExchangeByExchangeApi(t) {
                    return t && g.i9O.getExchangeNameFromExchangeApi(t, this.chain)
                }
                _manageHotPairs(t) {
                    const r = this._hotPairsService.formatHotPairs(t, this.chain, this._initialCharge, this._oldHots).filter(c=>this.chain === c.chain).slice(0, 15);
                    if (this._initialCharge = !1,
                    this._hots.length > 0 && Date.now() - this._hotPairsDateStart > 30 * l.VK)
                        for (const c of this._hots)
                            r.some(m=>m.id === c.id) || this._priceTracker.unTrack(c.id);
                    this._priceTracker.track(new Set(r.filter(c=>!!c.id).map(c=>c.id))),
                    this._hots = r.slice(1, this.isTokenFinder ? 3 : 15),
                    this._hotNumberOne = r[0],
                    this._hots = this._hotPairsService.filterHotPairs(this._hots, this._maxHotPairs, !0),
                    this.hots = [...this._hots],
                    this.hotNumberOne = this._hotNumberOne
                }
            }
            return o.\u0275fac = function(t) {
                return new (t || o)(n.Y36(g.S88),n.Y36(g.UW7),n.Y36(n.sBO))
            }
            ,
            o.\u0275cmp = n.Xpm({
                type: o,
                selectors: [["app-hot-pairs-list"]],
                inputs: {
                    chain: "chain",
                    isDashboard: "isDashboard",
                    exchangeApi: "exchangeApi",
                    isTokenFinder: "isTokenFinder"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 3,
                vars: 14,
                consts: [[1, "box-home-body", "px-3", "py-2", "m-0", "box-home-body-fit-height", "d-flex", "hot-list-container", 3, "appLoading", "ngClass"], [1, "w-100", 3, "ngClass", "hots", "hotNumberOne", "chain", "exchange", "isTokenFinder", "hightlightTopThree"], [4, "ngIf"], [1, "no-hot-pairs-exchange"]],
                template: function(t, e) {
                    1 & t && (n.TgZ(0, "div", 0),
                    n._UZ(1, "app-hot-pairs", 1),
                    n.YNc(2, Wn, 4, 3, "ng-container", 2),
                    n.qZA()),
                    2 & t && (n.Q6J("appLoading", (!e.hots || !(null != e.hotNumberOne && e.hotNumberOne.symbol) || e.isLoading) && !e.timeoutExchangeHotPairs)("ngClass", n.VKq(10, Kn, e.isDashboard)),
                    n.xp6(1),
                    n.Q6J("ngClass", n.VKq(12, qn, e.timeoutExchangeHotPairs && !e.isLoading && !(null != e.hotNumberOne && e.hotNumberOne.symbol)))("hots", e.hots)("hotNumberOne", e.hotNumberOne)("chain", e.chain)("exchange", e.getExchangeByExchangeApi(e.exchangeApi))("isTokenFinder", e.isTokenFinder)("hightlightTopThree", e.highlightTopThree),
                    n.xp6(1),
                    n.Q6J("ngIf", e.timeoutExchangeHotPairs && !e.isLoading && !(null != e.hotNumberOne && e.hotNumberOne.symbol)))
                },
                dependencies: [d.TH, O.mk, Rn, O.O5, x.aw, x.X$],
                styles: [".box-home-body-fit-height[_ngcontent-%COMP%]{min-height:unset!important}.hot-list-container[_ngcontent-%COMP%]{background-color:transparent!important}.hot-border[_ngcontent-%COMP%]{border-right:.0625rem solid rgba(255,255,255,.267)}.number-list[_ngcontent-%COMP%]{color:#00a2bf;font-size:16px;line-height:.9375rem;margin-top:9.6875rem}.hot-number[_ngcontent-%COMP%]{margin:.5625rem .3125rem}.hot-number[_ngcontent-%COMP%]:first-child{margin-top:0}.no-hot-pairs-exchange[_ngcontent-%COMP%]{align-items:center;display:flex;font-size:13px;justify-content:center}.hotpairs-dashboard[_ngcontent-%COMP%]{margin-top:1.125rem!important;padding:0!important}"],
                changeDetection: 0
            }),
            o
        }
        )()
    }
    ,
    92253: (w,M,s)=>{
        s.d(M, {
            T: ()=>p
        });
        var f = s(99703)
          , P = s(92498)
          , u = s(36895)
          , i = s(94650);
        const b = function(_) {
            return {
                "token-logo__letter--with-border": _
            }
        };
        function l(_, d) {
            if (1 & _ && (i.TgZ(0, "span", 3),
            i._uU(1),
            i.ALo(2, "appSafe"),
            i.qZA()),
            2 & _) {
                const h = i.oxw();
                i.Q6J("ngClass", i.VKq(4, b, h.hasBorder)),
                i.xp6(1),
                i.hij(" ", i.lcZ(2, 2, h.tokenSymbol()), " ")
            }
        }
        const g = function(_) {
            return {
                "token-logo__image--white-bg": _
            }
        };
        function x(_, d) {
            if (1 & _) {
                const h = i.EpF();
                i.TgZ(0, "img", 4),
                i.NdJ("error", function() {
                    i.CHM(h);
                    const T = i.oxw();
                    return i.KtG(T.onImageError())
                }),
                i.qZA()
            }
            if (2 & _) {
                const h = i.oxw();
                i.Q6J("ngClass", i.VKq(3, g, h.hasWhiteBackground))("src", h.tokenLogo, i.LSH)("alt", h.symbol)
            }
        }
        let p = (()=>{
            class _ {
                constructor(h, C) {
                    this._tokenLogosService = h,
                    this._cdRef = C,
                    this.hasWhiteBackground = !1,
                    this.hasBorder = !1,
                    this.fetchLogoFromRemote = !1
                }
                ngOnChanges() {
                    !this.logoUrl && this.fetchLogoFromRemote && this.chain !== f.qop.Aptos ? this._getSavedLogo() : this.tokenLogo = this.logoUrl ?? null
                }
                onImageError() {
                    this.logoUrl = void 0,
                    this._getSavedLogo()
                }
                tokenSymbol() {
                    return f.i6H.getFirstValidCharacter(this.symbol, this.name)
                }
                _getSavedLogo() {
                    this.chain && this.address && f.CXF.isValidChain(this.chain) ? this._tokenLogosService.fetchLogo(this.chain, this.address).subscribe(h=>{
                        this.tokenLogo = h,
                        this._cdRef.detectChanges()
                    }
                    ) : console.warn("TokenLogo: invalid chain and/or address", `${this.chain}-${this.address}`)
                }
            }
            return _.\u0275fac = function(h) {
                return new (h || _)(i.Y36(f.wUe),i.Y36(i.sBO))
            }
            ,
            _.\u0275cmp = i.Xpm({
                type: _,
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
                features: [i.TTD, i.jDz],
                decls: 4,
                vars: 2,
                consts: [[1, "token-logo"], ["class", "token-logo__letter", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["logoImage", ""], [1, "token-logo__letter", 3, "ngClass"], ["loading", "lazy", 1, "token-logo__image", 3, "ngClass", "src", "alt", "error"]],
                template: function(h, C) {
                    if (1 & h && (i.TgZ(0, "div", 0),
                    i.YNc(1, l, 3, 6, "span", 1),
                    i.YNc(2, x, 1, 5, "ng-template", null, 2, i.W1O),
                    i.qZA()),
                    2 & h) {
                        const T = i.MAs(3);
                        i.xp6(1),
                        i.Q6J("ngIf", !C.logoUrl && !C.tokenLogo)("ngIfElse", T)
                    }
                },
                dependencies: [u.O5, u.mk, P.yl],
                styles: [".token-logo[_ngcontent-%COMP%]{flex-wrap:nowrap;gap:.125rem;line-height:1;width:100%;height:100%;display:flex;justify-content:center;align-items:center;color:#142028;text-decoration-color:#00b8d8;position:relative;border-radius:50%;overflow:hidden}body.dark-theme   [_nghost-%COMP%]   .token-logo[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .token-logo[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .token-logo[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .token-logo[_ngcontent-%COMP%]{color:#142028}.token-logo__letter[_ngcontent-%COMP%]{color:#fff;background-color:#23323c;text-align:center;font-size:12px;display:flex;justify-content:center;align-items:center;text-decoration:none;text-transform:uppercase;position:absolute;bottom:0;top:0;width:calc(100% + .0625rem)}.token-logo__letter--with-border[_ngcontent-%COMP%]{border:solid 1px #818ea3;border-radius:50%}.token-logo__image[_ngcontent-%COMP%]{width:100%;height:100%}.token-logo__image--white-bg[_ngcontent-%COMP%]{background-color:#fff}"],
                changeDetection: 0
            }),
            _
        }
        )()
    }
    ,
    27314: (w,M,s)=>{
        s.d(M, {
            Q: ()=>l
        });
        var f = s(49319)
          , P = s(89383)
          , u = s(92216)
          , i = s(94650);
        const b = function() {
            return ["fal", "times"]
        };
        let l = (()=>{
            class g {
                constructor(p) {
                    this.modal = p
                }
            }
            return g.\u0275fac = function(p) {
                return new (p || g)(i.Y36(f.Kz))
            }
            ,
            g.\u0275cmp = i.Xpm({
                type: g,
                selectors: [["app-hot-pairs-warning-modal"]],
                standalone: !0,
                features: [i.jDz],
                decls: 20,
                vars: 17,
                consts: [[1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], [1, "modal-body", "text-center"], ["src", "assets/img/logo/dextools_logo_header_35.png", "alt", "dextools logo", "width", "35", 1, "mb-3"], [1, "m-0", "text-start"], [1, "mt-2", "text-start"], [1, "modal-footer"]],
                template: function(p, _) {
                    1 & p && (i.TgZ(0, "div", 0)(1, "button", 1),
                    i.NdJ("click", function() {
                        return _.modal.close("Close click")
                    }),
                    i._UZ(2, "fa-icon", 2),
                    i.ALo(3, "translate"),
                    i.qZA()(),
                    i.TgZ(4, "div", 3),
                    i._UZ(5, "img", 4),
                    i.TgZ(6, "p", 5),
                    i._uU(7),
                    i.ALo(8, "translate"),
                    i.qZA(),
                    i.TgZ(9, "ul", 6)(10, "li"),
                    i._uU(11),
                    i.ALo(12, "translate"),
                    i.qZA(),
                    i.TgZ(13, "li"),
                    i._uU(14),
                    i.ALo(15, "translate"),
                    i.qZA(),
                    i.TgZ(16, "li"),
                    i._uU(17),
                    i.ALo(18, "translate"),
                    i.qZA()()(),
                    i._UZ(19, "div", 7)),
                    2 & p && (i.xp6(2),
                    i.Q6J("icon", i.DdM(16, b))("ngbTooltip", i.lcZ(3, 6, "home.close")),
                    i.xp6(5),
                    i.Oqu(i.lcZ(8, 8, "hot_pairs_header.hots_warning")),
                    i.xp6(4),
                    i.Oqu(i.lcZ(12, 10, "hot_pairs_header.host_plans_free")),
                    i.xp6(3),
                    i.Oqu(i.lcZ(15, 12, "hot_pairs_header.host_plans_standard")),
                    i.xp6(3),
                    i.Oqu(i.lcZ(18, 14, "hot_pairs_header.host_plans_premium")))
                },
                dependencies: [u.uH, u.BN, f._L, P.aw, P.X$],
                encapsulation: 2,
                changeDetection: 0
            }),
            g
        }
        )()
    }
    ,
    64693: (w,M,s)=>{
        s.d(M, {
            p: ()=>x
        });
        var f = s(15861)
          , P = s(49808)
          , u = s(39646)
          , i = s(4326)
          , b = s(63900)
          , l = s(94650)
          , g = s(53763);
        let x = (()=>{
            class p {
                constructor(d, h) {
                    this._lazyInjector = d,
                    this._environment = h,
                    this._idleMonitorService = null
                }
                takeStaticPageSnapshot(d=0) {
                    var h = this;
                    return (0,
                    f.Z)(function*() {
                        return h._environment.static_generation ? (null == h._idleMonitorService && (h._idleMonitorService = yield h._lazyInjector.get(()=>s.e(786).then(s.bind(s, 30786)).then(C=>C.IdleMonitorService))),
                        (0,
                        P.n)((0,
                        u.of)("static generation").pipe((0,
                        i.g)(d), (0,
                        b.w)(()=>h._idleMonitorService.fireManualMyAppReadyEvent())))) : (0,
                        P.n)((0,
                        u.of)(!1))
                    })()
                }
            }
            return p.\u0275fac = function(d) {
                return new (d || p)(l.LFG(g.m),l.LFG(g.qA))
            }
            ,
            p.\u0275prov = l.Yz7({
                token: p,
                factory: p.\u0275fac,
                providedIn: "root"
            }),
            p
        }
        )()
    }
}]);
