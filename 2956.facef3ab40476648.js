"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[2956], {
    73923: (Fn,$,d)=>{
        d.d($, {
            J: ()=>c
        });
        var t = d(99703)
          , f = d(89383)
          , k = d(90628)
          , w = d(12113)
          , O = d(92216)
          , C = d(77575)
          , P = d(36895)
          , n = d(94650);
        function u(e, i) {
            if (1 & e && (n.TgZ(0, "a", 15),
            n._UZ(1, "img", 16),
            n._uU(2, " CoinMarketCap "),
            n.qZA()),
            2 & e) {
                const a = n.oxw();
                n.Q6J("href", a.cmcTokenLink, n.LSH),
                n.uIk("data-cmc-icon", a.tokenData.symbol)
            }
        }
        function v(e, i) {
            if (1 & e && (n.TgZ(0, "a", 15),
            n.ALo(1, "scannerTokenUrl"),
            n._UZ(2, "img", 17),
            n.ALo(3, "scannerLogoUrl"),
            n._uU(4),
            n.ALo(5, "translate"),
            n.qZA()),
            2 & e) {
                const a = n.oxw();
                n.Q6J("href", n.xi3(1, 3, a.chain, a.tokenData.id), n.LSH),
                n.xp6(2),
                n.Q6J("src", n.lcZ(3, 6, a.chain), n.LSH),
                n.xp6(2),
                n.hij(" ", n.lcZ(5, 8, "pair_explorer.view_contract"), " ")
            }
        }
        function y(e, i) {
            1 & e && n._UZ(0, "img", 19)
        }
        function X(e, i) {
            if (1 & e && (n.TgZ(0, "a", 15),
            n.YNc(1, y, 1, 0, "img", 18),
            n._uU(2, " Coingecko "),
            n.qZA()),
            2 & e) {
                const a = n.oxw();
                n.Q6J("href", a.coingeckoLink, n.LSH),
                n.xp6(1),
                n.Q6J("ngIf", a.coingeckoLink)
            }
        }
        function h(e, i) {
            1 & e && (n.TgZ(0, "div", 20),
            n._UZ(1, "img", 21),
            n._uU(2, " Coingecko "),
            n.qZA())
        }
        function M(e, i) {
            1 & e && n._UZ(0, "img", 23)
        }
        function L(e, i) {
            if (1 & e && (n.TgZ(0, "a", 15),
            n.YNc(1, M, 1, 0, "img", 22),
            n._uU(2, " Bubblemaps "),
            n.qZA()),
            2 & e) {
                const a = n.oxw();
                n.Q6J("href", a.bubbleMapsLink, n.LSH),
                n.xp6(1),
                n.Q6J("ngIf", a.bubbleMapsLink)
            }
        }
        function nn(e, i) {
            if (1 & e) {
                const a = n.EpF();
                n.TgZ(0, "a", 24),
                n.NdJ("click", function() {
                    n.CHM(a);
                    const T = n.oxw();
                    return n.KtG(T.addTokenMetamask(T.tokenData))
                }),
                n._UZ(1, "img", 25),
                n._uU(2, " Metamask "),
                n.qZA()
            }
        }
        function tn(e, i) {
            1 & e && (n.TgZ(0, "div", 20),
            n._UZ(1, "img", 26),
            n._uU(2, " Metamask "),
            n.qZA())
        }
        function en(e, i) {
            if (1 & e && (n.ynx(0),
            n.TgZ(1, "a", 27),
            n._UZ(2, "app-icon", 28),
            n._uU(3),
            n.ALo(4, "translate"),
            n.qZA(),
            n.BQk()),
            2 & e) {
                const a = n.oxw();
                n.xp6(1),
                n.Q6J("href", a.tokenInfo.nftCollection, n.LSH),
                n.xp6(1),
                n.Q6J("width", 17),
                n.xp6(1),
                n.hij(" ", n.lcZ(4, 3, "pair_explorer.nftCollection"), " ")
            }
        }
        function A(e, i) {
            1 & e && (n.ynx(0),
            n.TgZ(1, "div", 29),
            n._UZ(2, "app-icon", 28),
            n._uU(3),
            n.ALo(4, "translate"),
            n.qZA(),
            n.BQk()),
            2 & e && (n.xp6(2),
            n.Q6J("width", 17),
            n.xp6(1),
            n.hij(" ", n.lcZ(4, 2, "pair_explorer.nftCollection"), " "))
        }
        const I = function() {
            return ["fab", "github"]
        }
          , on = function(e, i) {
            return {
                text: "GitHub",
                link: e,
                icon: i
            }
        };
        function an(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.WLB(3, on, a.tokenInfo.github, n.DdM(2, I)))
            }
        }
        const cn = function(e) {
            return {
                text: "GitHub",
                icon: e
            }
        };
        function Z(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(3, cn, n.DdM(2, I)))
            }
        }
        const J = function() {
            return ["fab", "bitbucket"]
        }
          , Q = function(e, i) {
            return {
                text: "Bitbucket",
                link: e,
                icon: i
            }
        };
        function ln(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.WLB(3, Q, a.tokenInfo.bitbucket, n.DdM(2, J)))
            }
        }
        const rn = function(e) {
            return {
                text: "Bitbucket",
                icon: e
            }
        };
        function _n(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(3, rn, n.DdM(2, J)))
            }
        }
        const sn = function(e) {
            return {
                text: "Website",
                link: e,
                icon: "desktop"
            }
        };
        function gn(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.VKq(2, sn, a.tokenInfo.website))
            }
        }
        const dn = function() {
            return {
                text: "Website",
                icon: "desktop"
            }
        };
        function pn(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.DdM(2, dn))
            }
        }
        const mn = function(e) {
            return {
                text: "Email",
                link: e,
                icon: "envelope"
            }
        };
        function D(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.VKq(2, mn, "mailto: " + a.tokenInfo.email))
            }
        }
        const S = function() {
            return {
                text: "Email",
                icon: "envelope"
            }
        };
        function E(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.DdM(2, S))
            }
        }
        const N = function() {
            return ["fab", "telegram"]
        }
          , hn = function(e, i) {
            return {
                text: "Telegram",
                link: e,
                icon: i
            }
        };
        function fn(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.WLB(3, hn, a.tokenInfo.telegram, n.DdM(2, N)))
            }
        }
        const bn = function(e) {
            return {
                text: "Telegram",
                icon: e
            }
        };
        function q(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(3, bn, n.DdM(2, N)))
            }
        }
        const U = function() {
            return ["fab", "twitter"]
        }
          , Cn = function(e, i) {
            return {
                text: "Twitter",
                link: e,
                icon: i
            }
        };
        function un(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.WLB(3, Cn, a.tokenInfo.twitter, n.DdM(2, U)))
            }
        }
        const Mn = function(e) {
            return {
                text: "Twitter",
                icon: e
            }
        };
        function Y(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(3, Mn, n.DdM(2, U)))
            }
        }
        const W = function() {
            return ["fab", "discord"]
        }
          , kn = function(e, i) {
            return {
                text: "Discord",
                link: e,
                icon: i
            }
        };
        function On(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.WLB(3, kn, a.tokenInfo.discord, n.DdM(2, W)))
            }
        }
        const Pn = function(e) {
            return {
                text: "Discord",
                icon: e
            }
        };
        function B(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(3, Pn, n.DdM(2, W)))
            }
        }
        const F = function() {
            return ["fab", "youtube"]
        }
          , xn = function(e, i) {
            return {
                text: "Youtube",
                link: e,
                icon: i
            }
        };
        function Tn(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.WLB(3, xn, a.tokenInfo.youtube, n.DdM(2, F)))
            }
        }
        const wn = function(e) {
            return {
                text: "Youtube",
                icon: e
            }
        };
        function K(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(3, wn, n.DdM(2, F)))
            }
        }
        const G = function() {
            return ["fab", "instagram"]
        }
          , H = function(e, i) {
            return {
                text: "Instagram",
                link: e,
                icon: i
            }
        };
        function vn(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.WLB(3, H, a.tokenInfo.instagram, n.DdM(2, G)))
            }
        }
        const yn = function(e) {
            return {
                text: "Instagram",
                icon: e
            }
        };
        function R(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(3, yn, n.DdM(2, G)))
            }
        }
        const x = function() {
            return ["fab", "tiktok"]
        }
          , z = function(e, i) {
            return {
                text: "Tiktok",
                link: e,
                icon: i
            }
        };
        function Ln(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.WLB(3, z, a.tokenInfo.tiktok, n.DdM(2, x)))
            }
        }
        const An = function(e) {
            return {
                text: "Tiktok",
                icon: e
            }
        };
        function V(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(3, An, n.DdM(2, x)))
            }
        }
        const j = function() {
            return ["fab", "facebook"]
        }
          , In = function(e, i) {
            return {
                text: "Facebook",
                link: e,
                icon: i
            }
        };
        function Zn(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.WLB(3, In, a.tokenInfo.facebook, n.DdM(2, j)))
            }
        }
        const l = function(e) {
            return {
                text: "Facebook",
                icon: e
            }
        };
        function s(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(3, l, n.DdM(2, j)))
            }
        }
        const o = function() {
            return ["fab", "medium"]
        }
          , r = function(e, i) {
            return {
                text: "Medium",
                link: e,
                icon: i
            }
        };
        function g(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.WLB(3, r, a.tokenInfo.medium, n.DdM(2, o)))
            }
        }
        const p = function(e) {
            return {
                text: "Medium",
                icon: e
            }
        };
        function m(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(3, p, n.DdM(2, o)))
            }
        }
        const b = function() {
            return ["fab", "reddit"]
        }
          , Jn = function(e, i) {
            return {
                text: "Reddit",
                link: e,
                icon: i
            }
        };
        function Qn(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.WLB(3, Jn, a.tokenInfo.reddit, n.DdM(2, b)))
            }
        }
        const Dn = function(e) {
            return {
                text: "Reddit",
                icon: e
            }
        };
        function Sn(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(3, Dn, n.DdM(2, b)))
            }
        }
        const En = function(e) {
            return {
                text: "Extra info",
                link: e,
                icon: "link"
            }
        };
        function Nn(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                const a = n.oxw()
                  , _ = n.MAs(63);
                n.Q6J("ngTemplateOutlet", _)("ngTemplateOutletContext", n.VKq(2, En, a.tokenInfo.extraInfo))
            }
        }
        const qn = function() {
            return {
                text: "Extra info",
                icon: "link"
            }
        };
        function Un(e, i) {
            if (1 & e && n.GkF(0, 30),
            2 & e) {
                n.oxw();
                const a = n.MAs(65);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.DdM(2, qn))
            }
        }
        function Yn(e, i) {
            if (1 & e && (n.TgZ(0, "a", 31),
            n._UZ(1, "fa-icon", 32),
            n._uU(2),
            n.qZA()),
            2 & e) {
                const _ = i.icon
                  , T = i.text;
                n.Q6J("href", i.link, n.LSH),
                n.xp6(1),
                n.Q6J("icon", _)("fixedWidth", !0),
                n.xp6(1),
                n.hij(" ", T, " ")
            }
        }
        function Wn(e, i) {
            if (1 & e && (n.TgZ(0, "div", 33),
            n._UZ(1, "fa-icon", 34),
            n._uU(2),
            n.qZA()),
            2 & e) {
                const a = i.icon
                  , _ = i.text;
                n.xp6(1),
                n.Q6J("icon", a)("fixedWidth", !0),
                n.xp6(1),
                n.hij(" ", _, " ")
            }
        }
        function Bn(e, i) {
            if (1 & e) {
                const a = n.EpF();
                n.TgZ(0, "app-panel-component", 35),
                n.NdJ("panelClosed", function() {
                    n.CHM(a);
                    const T = n.oxw();
                    return n.KtG(T.toggleSocialIconPanel(!1))
                }),
                n._UZ(1, "app-social-icons-panel"),
                n.qZA()
            }
            2 & e && n.Q6J("closeButton", !1)("closeHidden", !1)("showHeader", !1)("enableScrollOnClose", !1)
        }
        let c = (()=>{
            class e {
                set tokenCustomInfo(a) {
                    this.tokenInfo = a,
                    this._tokenData = {
                        id: a.id,
                        symbol: a.symbol,
                        logo: a.logo,
                        decimals: 0
                    }
                }
                set tokenData(a) {
                    this._tokenData = a,
                    this.tokenInfo = {
                        ...a.tokenInfo
                    }
                }
                get tokenData() {
                    return this._tokenData
                }
                constructor(a) {
                    this._cdRef = a,
                    this.isDarkTheme = !1,
                    this.Chain = t.qop,
                    this.showSocialPanel = !1,
                    this.isLiquidityLockSupported = !1
                }
                ngOnInit() {
                    this.unicrypt = this.linksSocialData.unicrypt,
                    this.teamLockUrl = this.linksSocialData.teamLockUrl,
                    this.showMetamaskIcon = this.linksSocialData.showMetamaskIcon,
                    this.coingeckoLink = this.linksSocialData.coingeckoLink,
                    this.bubbleMapsLink = this.linksSocialData.bubbleMapsLink,
                    this.chain = this.linksSocialData.chain,
                    this.cmcTokenLink = this.linksSocialData.cmcTokenLink,
                    this.dxSaleLink = this.linksSocialData.dxSaleLink,
                    this.mudraLink = this.linksSocialData.mudraLink,
                    this.isLiquidityLockSupported = t.CXF.getChainData(this.chain).liquidityProviderSupported,
                    this.pairSelected = this.linksSocialData.pairSelected
                }
                addTokenMetamask(a) {
                    t.i6H.addToMetamask(a.id, a.symbol, a.decimals, a.logo)
                }
                toggleSocialIconPanel(a) {
                    this.showSocialPanel = a,
                    this._cdRef.detectChanges()
                }
            }
            return e.\u0275fac = function(a) {
                return new (a || e)(n.Y36(n.sBO))
            }
            ,
            e.\u0275cmp = n.Xpm({
                type: e,
                selectors: [["app-links-social-panel"]],
                inputs: {
                    linksSocialData: "linksSocialData",
                    title: "title",
                    isDarkTheme: "isDarkTheme",
                    tokenCustomInfo: "tokenCustomInfo",
                    tokenData: "tokenData"
                },
                standalone: !0,
                features: [n.jDz],
                decls: 67,
                vars: 51,
                consts: [[1, "panel-content", "links-social-panel"], [1, "links-social-container"], [1, "social-block"], [1, "social-block__title"], [1, "social-links"], ["target", "_blank", "rel", "noopener", "class", "token d-flex", 3, "href", 4, "ngIf"], ["class", "token disabled d-flex", 4, "ngIf"], ["href", "javascript:", "class", "token d-flex", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [1, "links-social-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["socialLinkEnabled", ""], ["socialLinkDisabled", ""], [3, "closeButton", "closeHidden", "showHeader", "enableScrollOnClose", "panelClosed", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 1, "token", "d-flex", 3, "href"], ["src", "assets/img/cmc-icon-blue.jpeg", "alt", "CMC logo", 1, "cmc-icon"], ["alt", "scanner logo", 3, "src"], ["src", "assets/img/coingecko.png", "alt", "Coingecko logo", 4, "ngIf"], ["src", "assets/img/coingecko.png", "alt", "Coingecko logo"], [1, "token", "disabled", "d-flex"], ["src", "assets/img/coingecko.png", "alt", "Coingecko logo", 1, "disabled", "opacity"], ["src", "assets/img/bubblemaps.png", "alt", "Bubblemaps logo", 4, "ngIf"], ["src", "assets/img/bubblemaps.png", "alt", "Bubblemaps logo"], ["href", "javascript:", 1, "token", "d-flex", 3, "click"], ["src", "assets/img/metamask.svg", "alt", "Metamask logo", 1, "no-background"], ["src", "assets/img/metamask.svg", "alt", "Metamask logo", 1, "no-background", "disabled", "opacity"], ["target", "_blank", "rel", "noopener", 1, "d-flex", "custom-icon", 3, "href"], ["name", "nft", 3, "width"], [1, "d-flex", "custom-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener", 1, "d-flex", 3, "href"], ["size", "sm", 3, "icon", "fixedWidth"], [1, "d-flex"], ["size", "sm", 1, "disabled", 3, "icon", "fixedWidth"], [3, "closeButton", "closeHidden", "showHeader", "enableScrollOnClose", "panelClosed"]],
                template: function(a, _) {
                    1 & a && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "h3"),
                    n._uU(3),
                    n.qZA(),
                    n.TgZ(4, "div", 2)(5, "div", 3),
                    n._uU(6),
                    n.ALo(7, "translate"),
                    n.qZA(),
                    n.TgZ(8, "div", 4),
                    n.YNc(9, u, 3, 2, "a", 5),
                    n.YNc(10, v, 6, 10, "a", 5),
                    n.YNc(11, X, 3, 2, "a", 5),
                    n.YNc(12, h, 3, 0, "div", 6),
                    n.YNc(13, L, 3, 2, "a", 5),
                    n.YNc(14, nn, 3, 0, "a", 7),
                    n.YNc(15, tn, 3, 0, "div", 6),
                    n.qZA(),
                    n.TgZ(16, "div", 3),
                    n._uU(17),
                    n.ALo(18, "translate"),
                    n.qZA(),
                    n.TgZ(19, "div", 4),
                    n.YNc(20, en, 5, 5, "ng-container", 8),
                    n.YNc(21, A, 5, 4, "ng-container", 8),
                    n.qZA(),
                    n.TgZ(22, "div", 3),
                    n._uU(23),
                    n.ALo(24, "translate"),
                    n.qZA(),
                    n.TgZ(25, "div", 4),
                    n.YNc(26, an, 1, 6, "ng-container", 9),
                    n.YNc(27, Z, 1, 5, "ng-container", 9),
                    n.YNc(28, ln, 1, 6, "ng-container", 9),
                    n.YNc(29, _n, 1, 5, "ng-container", 9),
                    n.qZA()(),
                    n.TgZ(30, "div", 2)(31, "div", 3),
                    n._uU(32),
                    n.ALo(33, "translate"),
                    n.qZA(),
                    n.TgZ(34, "div", 4),
                    n.YNc(35, gn, 1, 4, "ng-container", 9),
                    n.YNc(36, pn, 1, 3, "ng-container", 9),
                    n.YNc(37, D, 1, 4, "ng-container", 9),
                    n.YNc(38, E, 1, 3, "ng-container", 9),
                    n.YNc(39, fn, 1, 6, "ng-container", 9),
                    n.YNc(40, q, 1, 5, "ng-container", 9),
                    n.YNc(41, un, 1, 6, "ng-container", 9),
                    n.YNc(42, Y, 1, 5, "ng-container", 9),
                    n.YNc(43, On, 1, 6, "ng-container", 9),
                    n.YNc(44, B, 1, 5, "ng-container", 9),
                    n.YNc(45, Tn, 1, 6, "ng-container", 9),
                    n.YNc(46, K, 1, 5, "ng-container", 9),
                    n.YNc(47, vn, 1, 6, "ng-container", 9),
                    n.YNc(48, R, 1, 5, "ng-container", 9),
                    n.YNc(49, Ln, 1, 6, "ng-container", 9),
                    n.YNc(50, V, 1, 5, "ng-container", 9),
                    n.YNc(51, Zn, 1, 6, "ng-container", 9),
                    n.YNc(52, s, 1, 5, "ng-container", 9),
                    n.YNc(53, g, 1, 6, "ng-container", 9),
                    n.YNc(54, m, 1, 5, "ng-container", 9),
                    n.YNc(55, Qn, 1, 6, "ng-container", 9),
                    n.YNc(56, Sn, 1, 5, "ng-container", 9),
                    n.YNc(57, Nn, 1, 4, "ng-container", 9),
                    n.YNc(58, Un, 1, 3, "ng-container", 9),
                    n.qZA()()(),
                    n.TgZ(59, "div", 10)(60, "button", 11),
                    n.NdJ("click", function() {
                        return _.toggleSocialIconPanel(!0)
                    }),
                    n._uU(61, "Add or update social info"),
                    n.qZA()()(),
                    n.YNc(62, Yn, 3, 4, "ng-template", null, 12, n.W1O),
                    n.YNc(64, Wn, 3, 3, "ng-template", null, 13, n.W1O),
                    n.YNc(66, Bn, 2, 4, "app-panel-component", 14)),
                    2 & a && (n.xp6(3),
                    n.Oqu(_.title),
                    n.xp6(3),
                    n.Oqu(n.lcZ(7, 43, "pair_explorer.section_title_2")),
                    n.xp6(3),
                    n.Q6J("ngIf", _.cmcTokenLink),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenData.id),
                    n.xp6(1),
                    n.Q6J("ngIf", _.coingeckoLink),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.coingeckoLink),
                    n.xp6(1),
                    n.Q6J("ngIf", _.bubbleMapsLink),
                    n.xp6(1),
                    n.Q6J("ngIf", _.showMetamaskIcon),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.showMetamaskIcon),
                    n.xp6(2),
                    n.Oqu(n.lcZ(18, 45, "pair_explorer.section_title_3")),
                    n.xp6(3),
                    n.Q6J("ngIf", _.tokenInfo.nftCollection),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.nftCollection),
                    n.xp6(2),
                    n.Oqu(n.lcZ(24, 47, "pair_explorer.section_title_4")),
                    n.xp6(3),
                    n.Q6J("ngIf", _.tokenInfo.github),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.github),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.bitbucket),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.bitbucket),
                    n.xp6(3),
                    n.Oqu(n.lcZ(33, 49, "pair_explorer.section_title_5")),
                    n.xp6(3),
                    n.Q6J("ngIf", _.tokenInfo.website),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.website),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.email),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.email),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.telegram),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.telegram),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.twitter),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.twitter),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.discord),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.discord),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.youtube),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.youtube),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.instagram),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.instagram),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.tiktok),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.tiktok),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.facebook),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.facebook),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.medium),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.medium),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.reddit),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.reddit),
                    n.xp6(1),
                    n.Q6J("ngIf", _.tokenInfo.extraInfo),
                    n.xp6(1),
                    n.Q6J("ngIf", !_.tokenInfo.extraInfo),
                    n.xp6(8),
                    n.Q6J("ngIf", _.showSocialPanel))
                },
                dependencies: [P.O5, C.lQ, P.tP, O.uH, O.BN, w.yX, k.r, f.aw, f.X$, t.tAw, t.x_$],
                styles: [".links-social-panel[_ngcontent-%COMP%]{padding:0 0 0 1.25rem!important;width:100%!important;height:100%!important}.links-social-footer[_ngcontent-%COMP%]{height:5.5rem;display:flex;align-items:center;justify-content:center;padding:1.25rem 1.25rem 1.25rem 0}.links-social-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:3rem;line-height:3rem;width:100%;padding:0 1.25rem;font-size:13px;border-radius:3.125rem;box-shadow:none!important}.links-social-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{background-color:#00a2bf;border-color:#00a2bf}.links-social-container[_ngcontent-%COMP%]{height:calc(100% - 88px);overflow-y:auto}.social-block[_ngcontent-%COMP%]:first-child{margin-bottom:1.875rem}.social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]{color:#818ea3;margin-bottom:.9375rem;font-size:12px;margin-top:1.875rem}body.dark-theme   [_nghost-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]{color:#818ea3}.social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]:first-child{margin-bottom:.9375rem;margin-top:0}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028;font-size:13px;margin-bottom:.9375rem;line-height:1.125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.125rem;margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#00b8d8!important}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:1.125rem;max-width:1.125rem;margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a.token[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:.0625rem solid white;border-radius:.625rem;background-color:#fff;max-height:1.125rem;max-width:1.125rem;margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a.token[_ngcontent-%COMP%]   img.opacity.disabled[_ngcontent-%COMP%]{opacity:.2;max-height:1.125rem;max-width:1.125rem;margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#818ea3;font-size:13px;margin-bottom:.9375rem;line-height:1.125rem;opacity:.5;cursor:default}body.dark-theme   [_nghost-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#818ea3}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.125rem;margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div.token[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:.0625rem solid white;border-radius:.625rem;background-color:#fff;max-height:1.125rem;max-width:1.125rem;margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div.token[_ngcontent-%COMP%]   img.opacity.disabled[_ngcontent-%COMP%]{opacity:.2;max-height:1.125rem;max-width:1.125rem;margin-right:.3125rem}[_nghost-%COMP%]     .social-block .social-links a.custom-icon svg path{fill:#142028}[_nghost-%COMP%]     .social-block .social-links a:hover.custom-icon svg path, [_nghost-%COMP%]     .social-block .social-links a:focus.custom-icon svg path{fill:#00b8d8}body.dark-theme   [_nghost-%COMP%]     .social-block .social-links a{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .social-block .social-links a.custom-icon svg path{fill:#fff!important}body.dark-theme   [_nghost-%COMP%]     .social-block .social-links a:hover.custom-icon svg path, body.dark-theme   [_nghost-%COMP%]     .social-block .social-links a:focus.custom-icon svg path{fill:#00b8d8!important}"],
                changeDetection: 0
            }),
            e
        }
        )()
    }
    ,
    640: (Fn,$,d)=>{
        d.d($, {
            B: ()=>Zn
        });
        var t = d(94650)
          , f = d(36895)
          , k = d(49319)
          , w = d(92216)
          , O = d(89383)
          , C = d(69585)
          , P = d(54004)
          , n = d(28746)
          , u = d(52413)
          , v = d(53763)
          , y = d(92498)
          , X = d(77575)
          , h = d(99703)
          , M = d(12113)
          , L = d(33269)
          , nn = d(98085)
          , tn = d(51303)
          , en = d(62289);
        const A = ["sortTable"]
          , I = ["fullTable"];
        function on(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "div", 5),
                t.NdJ("click", function() {
                    t.CHM(o);
                    const g = t.oxw();
                    return t.KtG(g.pairSearchToken("close"))
                }),
                t.qZA()
            }
        }
        function an(l, s) {
            if (1 & l && (t.TgZ(0, "div", 12)(1, "h4"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.ALo(4, "slice"),
            t.ALo(5, "slice"),
            t.qZA()()),
            2 & l) {
                const o = t.oxw(2);
                t.Q6J("appLoading", o.isLoading),
                t.xp6(2),
                t.lnq("", t.lcZ(3, 4, "pairs_search_from_token.searching"), " ", t.Dn7(4, 6, o.tokenId, 0, 8), "...", t.Dn7(5, 10, o.tokenId, 38, 42), "")
            }
        }
        function cn(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "img", 39, 40),
                t.NdJ("load", function() {
                    t.CHM(o);
                    const g = t.MAs(1);
                    t.oxw();
                    const p = t.MAs(4);
                    return g.style.display = "inline-block",
                    t.KtG(p.style.display = "none")
                })("error", function() {
                    t.CHM(o);
                    const g = t.MAs(1)
                      , p = t.oxw().row
                      , m = t.oxw(4);
                    return t.KtG(m.loadAlternativeLogo(g, p))
                }),
                t.qZA()
            }
            if (2 & l) {
                const o = t.oxw().row
                  , r = t.oxw(4);
                t.s9C("src", r.getPairImage(o), t.LSH),
                t.Q6J("width", 20)
            }
        }
        function Z(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "div", 31),
                t.NdJ("click", function() {
                    const p = t.CHM(o).row
                      , m = t.oxw(4);
                    return t.KtG(m.activateRow(p))
                }),
                t.TgZ(1, "div", 32)(2, "span", 33)(3, "span", 34, 35),
                t._uU(5),
                t.qZA(),
                t.YNc(6, cn, 2, 2, "img", 36),
                t.qZA(),
                t._UZ(7, "app-token-name", 37),
                t.ALo(8, "appSafe"),
                t.ALo(9, "slice"),
                t.ALo(10, "appSafe"),
                t.qZA(),
                t.TgZ(11, "div", 38)(12, "span"),
                t._uU(13),
                t.ALo(14, "slice"),
                t.ALo(15, "slice"),
                t.qZA()()()
            }
            if (2 & l) {
                const o = s.row
                  , r = t.oxw(4);
                t.xp6(5),
                t.hij(" ", r.reviewTokenSymbol(o.symbol, o.realName), " "),
                t.xp6(1),
                t.Q6J("ngIf", "GRUMPY" !== o.symbol),
                t.xp6(1),
                t.Q6J("tokenRight", t.lcZ(8, 7, o.symbol_vs))("tokenLeft", t.Dn7(9, 9, t.lcZ(10, 13, o.symbol), 0, 9))("isLink", o.id === r.rowHover),
                t.xp6(6),
                t.AsE(" ", t.Dn7(14, 15, o.id, 0, 5), "...", t.Dn7(15, 19, o.id, 38, 42), " ")
            }
        }
        function J(l, s) {
            if (1 & l && (t.TgZ(0, "span", 43),
            t.ALo(1, "translate"),
            t.ALo(2, "translate"),
            t._uU(3),
            t.qZA()),
            2 & l) {
                const o = t.oxw().row;
                t.hYB("ngbTooltip", "", t.lcZ(1, 3, "pair_explorer.pool"), " ", t.lcZ(2, 5, "pair_explorer.col_7"), ""),
                t.xp6(3),
                t.hij(" ", o.fee, "%")
            }
        }
        const Q = function(l, s) {
            return {
                "background-color": l,
                color: s
            }
        };
        function ln(l, s) {
            if (1 & l && (t.TgZ(0, "div", 41),
            t.ALo(1, "exchangeBackgroundColor"),
            t.ALo(2, "exchangeTextColor"),
            t._uU(3),
            t.qZA(),
            t.YNc(4, J, 4, 7, "span", 42)),
            2 & l) {
                const o = s.row
                  , r = t.oxw(4);
                t.Q6J("ngStyle", t.WLB(10, Q, t.xi3(1, 4, o.exchange || r.defaultApiExchange, r.chain), t.xi3(2, 7, o.exchange || r.defaultApiExchange, r.chain))),
                t.xp6(3),
                t.AsE(" ", r.getExchangeName(o.exchange, o.chain), " ", o.exchangeVersion, " "),
                t.xp6(1),
                t.Q6J("ngIf", r.hasExchangeFeePercentagePools(o.exchange, o.exchangeVersion) && o.fee)
            }
        }
        function rn(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "span", 46, 47),
                t.NdJ("click", function(g) {
                    t.CHM(o);
                    const p = t.MAs(1)
                      , m = t.oxw().row
                      , b = t.oxw(4);
                    return t.KtG(b.copyNumberText(g, m.price, p))
                }),
                t._uU(2),
                t.ALo(3, "appNumber"),
                t.qZA()
            }
            if (2 & l) {
                const o = t.oxw().row
                  , r = t.MAs(2);
                t.Q6J("ngbTooltip", r),
                t.xp6(2),
                t.hij("$", t.lcZ(3, 2, o.price), "")
            }
        }
        function _n(l, s) {
            if (1 & l && (t.TgZ(0, "div"),
            t._uU(1),
            t.qZA(),
            t.TgZ(2, "div"),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA()),
            2 & l) {
                const o = t.oxw().row
                  , r = t.oxw(4);
                t.xp6(1),
                t.Oqu(r.getFullPriceUSD(null == o ? null : o.price)),
                t.xp6(2),
                t.Oqu(t.lcZ(4, 2, "pair_explorer.copy_price"))
            }
        }
        function sn(l, s) {
            if (1 & l && (t.YNc(0, rn, 4, 4, "span", 44),
            t.YNc(1, _n, 5, 4, "ng-template", null, 45, t.W1O)),
            2 & l) {
                const o = s.row;
                t.oxw(4);
                const r = t.MAs(6);
                t.Q6J("ngIf", null == o ? null : o.price)("ngIfElse", r)
            }
        }
        function gn(l, s) {
            if (1 & l && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & l) {
                const o = t.oxw().row;
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, o.txCount, "1.0-0"))
            }
        }
        function dn(l, s) {
            if (1 & l && t.YNc(0, gn, 3, 4, "span", 48),
            2 & l) {
                const o = s.row;
                t.oxw(4);
                const r = t.MAs(6);
                t.Q6J("ngIf", o.txCount)("ngIfElse", r)
            }
        }
        function pn(l, s) {
            if (1 & l && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & l) {
                const o = t.oxw().row;
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, o.liquidity, "1.2-2"))
            }
        }
        function mn(l, s) {
            if (1 & l && t.YNc(0, pn, 3, 4, "span", 48),
            2 & l) {
                const o = s.row;
                t.oxw(4);
                const r = t.MAs(6);
                t.Q6J("ngIf", o.liquidity)("ngIfElse", r)
            }
        }
        const D = function() {
            return {
                prop: "liquidity",
                dir: "desc"
            }
        }
          , S = function(l) {
            return [l]
        };
        function E(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "ngx-datatable", 24, 25),
                t.NdJ("activate", function(g) {
                    t.CHM(o);
                    const p = t.oxw(3);
                    return t.KtG(p.onRowClicked(g))
                })("mouseleave", function() {
                    t.CHM(o);
                    const g = t.oxw(3);
                    return t.KtG(g.setRowHover(null))
                }),
                t.TgZ(2, "ngx-datatable-column", 26),
                t.ALo(3, "translate"),
                t.YNc(4, Z, 16, 23, "ng-template", 27),
                t.qZA(),
                t.TgZ(5, "ngx-datatable-column", 28),
                t.ALo(6, "translate"),
                t.YNc(7, ln, 5, 13, "ng-template", 27),
                t.qZA(),
                t.TgZ(8, "ngx-datatable-column", 29),
                t.ALo(9, "translate"),
                t.YNc(10, sn, 3, 2, "ng-template", 27),
                t.qZA(),
                t.TgZ(11, "ngx-datatable-column", 29),
                t.ALo(12, "translate"),
                t.YNc(13, dn, 1, 2, "ng-template", 27),
                t.qZA(),
                t.TgZ(14, "ngx-datatable-column", 30),
                t.ALo(15, "translate"),
                t.YNc(16, mn, 1, 2, "ng-template", 27),
                t.qZA()()
            }
            if (2 & l) {
                const o = t.oxw(3);
                t.Q6J("sorts", t.VKq(49, S, t.DdM(48, D)))("scrollbarV", !0)("scrollbarH", !0)("count", o.pairsFound.length)("footerHeight", 80)("rows", o.pairsFound)("rowHeight", 60)("limit", 10)("columnMode", "force"),
                t.xp6(2),
                t.Q6J("resizeable", !1)("width", 140)("minWidth", 140)("name", t.lcZ(3, 38, "pairs_search_from_token.table.col_1"))("sortable", !0)("frozenLeft", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 120)("minWidth", 120)("name", t.lcZ(6, 40, "pairs_search_from_token.table.col_2"))("sortable", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 100)("minWidth", 100)("name", t.lcZ(9, 42, "pairs_search_from_token.table.col_3"))("prop", "price")("sortable", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 80)("minWidth", 80)("name", t.lcZ(12, 44, "pairs_search_from_token.table.col_4"))("prop", "txCount")("sortable", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 80)("minWidth", 80)("name", t.lcZ(15, 46, "pairs_search_from_token.table.col_5"))("sortable", !0)("prop", "liquidity")
            }
        }
        function N(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "img", 39, 40),
                t.NdJ("load", function() {
                    t.CHM(o);
                    const g = t.MAs(1);
                    t.oxw();
                    const p = t.MAs(4);
                    return g.style.display = "inline-block",
                    t.KtG(p.style.display = "none")
                })("error", function() {
                    t.CHM(o);
                    const g = t.MAs(1)
                      , p = t.oxw().row
                      , m = t.oxw(4);
                    return t.KtG(m.loadAlternativeLogo(g, p))
                }),
                t.qZA()
            }
            if (2 & l) {
                const o = t.oxw().row
                  , r = t.oxw(4);
                t.s9C("src", r.getPairImage(o), t.LSH),
                t.Q6J("width", 20)
            }
        }
        function hn(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "div", 31),
                t.NdJ("click", function() {
                    const p = t.CHM(o).row
                      , m = t.oxw(4);
                    return t.KtG(m.activateRow(p))
                }),
                t.TgZ(1, "div", 32)(2, "span", 33)(3, "span", 34, 35),
                t._uU(5),
                t.qZA(),
                t.YNc(6, N, 2, 2, "img", 36),
                t.qZA(),
                t._UZ(7, "app-token-name", 37),
                t.ALo(8, "appSafe"),
                t.ALo(9, "slice"),
                t.ALo(10, "appSafe"),
                t.qZA(),
                t.TgZ(11, "div", 38)(12, "span"),
                t._uU(13),
                t.ALo(14, "slice"),
                t.ALo(15, "slice"),
                t.qZA()()()
            }
            if (2 & l) {
                const o = s.row
                  , r = t.oxw(4);
                t.xp6(5),
                t.hij(" ", r.reviewTokenSymbol(o.symbol, o.realName), " "),
                t.xp6(1),
                t.Q6J("ngIf", "GRUMPY" !== o.symbol),
                t.xp6(1),
                t.Q6J("tokenRight", t.lcZ(8, 7, o.symbol_vs))("tokenLeft", t.Dn7(9, 9, t.lcZ(10, 13, o.symbol), 0, 9))("isLink", o.id === r.rowHover),
                t.xp6(6),
                t.AsE(" ", t.Dn7(14, 15, o.id, 0, 5), "...", t.Dn7(15, 19, o.id, 38, 42), " ")
            }
        }
        function fn(l, s) {
            if (1 & l && (t.TgZ(0, "span", 43),
            t.ALo(1, "translate"),
            t.ALo(2, "translate"),
            t._uU(3),
            t.qZA()),
            2 & l) {
                const o = t.oxw().row;
                t.hYB("ngbTooltip", "", t.lcZ(1, 3, "pair_explorer.pool"), " ", t.lcZ(2, 5, "pair_explorer.col_7"), ""),
                t.xp6(3),
                t.hij(" ", o.fee, "%")
            }
        }
        function bn(l, s) {
            if (1 & l && (t.TgZ(0, "div", 41),
            t.ALo(1, "exchangeBackgroundColor"),
            t.ALo(2, "exchangeTextColor"),
            t._uU(3),
            t.qZA(),
            t.YNc(4, fn, 4, 7, "span", 42)),
            2 & l) {
                const o = s.row
                  , r = t.oxw(4);
                t.Q6J("ngStyle", t.WLB(10, Q, t.xi3(1, 4, o.exchange || r.defaultApiExchange, r.chain), t.xi3(2, 7, o.exchange || r.defaultApiExchange, r.chain))),
                t.xp6(3),
                t.AsE(" ", r.getExchangeName(o.exchange, o.chain), " ", o.exchangeVersion, " "),
                t.xp6(1),
                t.Q6J("ngIf", r.hasExchangeFeePercentagePools(o.exchange, o.exchangeVersion) && o.fee)
            }
        }
        function q(l, s) {
            if (1 & l && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & l) {
                const o = t.oxw().row;
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, o.liquidity, "1.2-2"))
            }
        }
        function U(l, s) {
            if (1 & l && t.YNc(0, q, 3, 4, "span", 48),
            2 & l) {
                const o = s.row;
                t.oxw(4);
                const r = t.MAs(6);
                t.Q6J("ngIf", o.liquidity)("ngIfElse", r)
            }
        }
        function Cn(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "span"),
                t._uU(1),
                t.ALo(2, "slice"),
                t.ALo(3, "slice"),
                t.qZA(),
                t.TgZ(4, "a", 54, 55),
                t.NdJ("click", function(g) {
                    const m = t.CHM(o).row
                      , b = t.MAs(5)
                      , Jn = t.oxw(4);
                    return t.KtG(Jn.copyText(g, m.idToken, b))
                }),
                t.ALo(6, "translate"),
                t._UZ(7, "fa-icon", 56),
                t.qZA()
            }
            if (2 & l) {
                const o = s.row;
                t.xp6(1),
                t.AsE("", t.Dn7(2, 3, o.idToken, 0, 8), "...", t.Dn7(3, 7, o.idToken, 38, 42), ""),
                t.xp6(3),
                t.s9C("ngbTooltip", t.lcZ(6, 11, "user.copy_address"))
            }
        }
        function un(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "span", 46, 47),
                t.NdJ("click", function(g) {
                    t.CHM(o);
                    const p = t.MAs(1)
                      , m = t.oxw().row
                      , b = t.oxw(4);
                    return t.KtG(b.copyNumberText(g, m.price, p))
                }),
                t._uU(2),
                t.ALo(3, "appNumber"),
                t.qZA()
            }
            if (2 & l) {
                const o = t.oxw().row
                  , r = t.MAs(2);
                t.Q6J("ngbTooltip", r),
                t.xp6(2),
                t.hij("$", t.lcZ(3, 2, o.price), "")
            }
        }
        function Mn(l, s) {
            if (1 & l && (t.TgZ(0, "div"),
            t._uU(1),
            t.qZA(),
            t.TgZ(2, "div"),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA()),
            2 & l) {
                const o = t.oxw().row
                  , r = t.oxw(4);
                t.xp6(1),
                t.Oqu(r.getFullPriceUSD(null == o ? null : o.price)),
                t.xp6(2),
                t.Oqu(t.lcZ(4, 2, "pair_explorer.copy_price"))
            }
        }
        function Y(l, s) {
            if (1 & l && (t.YNc(0, un, 4, 4, "span", 44),
            t.YNc(1, Mn, 5, 4, "ng-template", null, 45, t.W1O)),
            2 & l) {
                const o = s.row;
                t.oxw(4);
                const r = t.MAs(6);
                t.Q6J("ngIf", o.price)("ngIfElse", r)
            }
        }
        function W(l, s) {
            if (1 & l && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & l) {
                const o = t.oxw().row
                  , r = t.oxw(4);
                t.Gre("badge bg-", r.getVariationColor(o.priceVariation24h), ""),
                t.xp6(1),
                t.hij(" ", t.xi3(2, 4, o.priceVariation24h, "1.2-2"), "%")
            }
        }
        function kn(l, s) {
            1 & l && (t.TgZ(0, "span", 59),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & l && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pairs_search_from_token.no_data")))
        }
        function On(l, s) {
            if (1 & l && (t.YNc(0, W, 3, 7, "span", 57),
            t.YNc(1, kn, 3, 3, "ng-template", null, 58, t.W1O)),
            2 & l) {
                const o = s.row
                  , r = t.MAs(2);
                t.Q6J("ngIf", o.priceVariation24h)("ngIfElse", r)
            }
        }
        function Pn(l, s) {
            if (1 & l && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & l) {
                const o = t.oxw().row;
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, o.holders, "1.0-0"))
            }
        }
        function B(l, s) {
            if (1 & l && t.YNc(0, Pn, 3, 4, "span", 48),
            2 & l) {
                const o = s.row;
                t.oxw(5);
                const r = t.MAs(6);
                t.Q6J("ngIf", null == o ? null : o.holders)("ngIfElse", r)
            }
        }
        function F(l, s) {
            1 & l && (t.TgZ(0, "ngx-datatable-column", 29),
            t.ALo(1, "translate"),
            t.YNc(2, B, 1, 2, "ng-template", 27),
            t.qZA()),
            2 & l && t.Q6J("resizeable", !1)("width", 120)("minWidth", 120)("name", t.lcZ(1, 6, "pairs_search_from_token.table.col_9"))("prop", "holders")("sortable", !0)
        }
        function xn(l, s) {
            if (1 & l && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & l) {
                const o = t.oxw().row;
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, o.txCount, "1.0-0"))
            }
        }
        function Tn(l, s) {
            if (1 & l && t.YNc(0, xn, 3, 4, "span", 48),
            2 & l) {
                const o = s.row;
                t.oxw(4);
                const r = t.MAs(6);
                t.Q6J("ngIf", null == o ? null : o.txCount)("ngIfElse", r)
            }
        }
        function wn(l, s) {
            if (1 & l && t._UZ(0, "app-line-chart", 60),
            2 & l) {
                const o = s.row;
                t.Q6J("timeMinutes", 10)("color", o.lineChartColor)("height", 26)("candles", o.candles)
            }
        }
        function K(l, s) {
            if (1 & l && (t.TgZ(0, "div", 61)(1, "a", 62),
            t.ALo(2, "translate"),
            t._UZ(3, "app-icon", 63),
            t.qZA()()),
            2 & l) {
                const o = s.row
                  , r = t.oxw(4);
                t.xp6(1),
                t.cQ8("appRouterLink", "/", r.chain, "/", r.ChainPage.PairExplorer, "/", o.id, ""),
                t.s9C("ngbTooltip", t.lcZ(2, 5, "pools_creator.show_live_data")),
                t.xp6(2),
                t.Q6J("width", 20)
            }
        }
        function G(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "ngx-datatable", 49, 50),
                t.NdJ("activate", function(g) {
                    t.CHM(o);
                    const p = t.oxw(3);
                    return t.KtG(p.onRowClicked(g))
                })("mouseleave", function() {
                    t.CHM(o);
                    const g = t.oxw(3);
                    return t.KtG(g.setRowHover(null))
                }),
                t.TgZ(2, "ngx-datatable-column", 26),
                t.ALo(3, "translate"),
                t.YNc(4, hn, 16, 23, "ng-template", 27),
                t.qZA(),
                t.TgZ(5, "ngx-datatable-column", 28),
                t.ALo(6, "translate"),
                t.YNc(7, bn, 5, 13, "ng-template", 27),
                t.qZA(),
                t.TgZ(8, "ngx-datatable-column", 30),
                t.ALo(9, "translate"),
                t.YNc(10, U, 1, 2, "ng-template", 27),
                t.qZA(),
                t.TgZ(11, "ngx-datatable-column", 28),
                t.ALo(12, "translate"),
                t.YNc(13, Cn, 8, 13, "ng-template", 27),
                t.qZA(),
                t.TgZ(14, "ngx-datatable-column", 29),
                t.ALo(15, "translate"),
                t.YNc(16, Y, 3, 2, "ng-template", 27),
                t.qZA(),
                t.TgZ(17, "ngx-datatable-column", 29),
                t.ALo(18, "translate"),
                t.YNc(19, On, 3, 2, "ng-template", 27),
                t.qZA(),
                t.YNc(20, F, 3, 8, "ngx-datatable-column", 51),
                t.TgZ(21, "ngx-datatable-column", 29),
                t.ALo(22, "translate"),
                t.YNc(23, Tn, 1, 2, "ng-template", 27),
                t.qZA(),
                t.TgZ(24, "ngx-datatable-column", 52),
                t.ALo(25, "translate"),
                t.YNc(26, wn, 1, 4, "ng-template", 27),
                t.qZA(),
                t.TgZ(27, "ngx-datatable-column", 53),
                t.ALo(28, "translate"),
                t.YNc(29, K, 4, 7, "ng-template", 27),
                t.qZA()()
            }
            if (2 & l) {
                const o = t.oxw(3);
                t.Q6J("sorts", t.VKq(78, S, t.DdM(77, D)))("scrollbarV", !0)("scrollbarH", !0)("count", o.pairsFound.length)("footerHeight", 50)("rows", o.pairsFound)("rowHeight", 59)("columnMode", "force"),
                t.xp6(2),
                t.Q6J("resizeable", !1)("width", 150)("minWidth", 150)("name", t.lcZ(3, 59, "pairs_search_from_token.table.col_1"))("sortable", !0)("frozenLeft", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 120)("minWidth", 120)("name", t.lcZ(6, 61, "pairs_search_from_token.table.col_2"))("sortable", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 130)("minWidth", 130)("name", t.lcZ(9, 63, "pairs_search_from_token.table.col_5"))("sortable", !0)("prop", "liquidity"),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 150)("minWidth", 150)("name", t.lcZ(12, 65, "pairs_search_from_token.table.col_6"))("sortable", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 140)("minWidth", 140)("name", t.lcZ(15, 67, "pairs_search_from_token.table.col_3"))("prop", "price")("sortable", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 120)("minWidth", 120)("name", t.lcZ(18, 69, "pairs_search_from_token.table.col_8"))("prop", "priceVariation24h")("sortable", !0),
                t.xp6(3),
                t.Q6J("ngIf", o.chain !== o.Chain.Binance),
                t.xp6(1),
                t.Q6J("resizeable", !1)("width", 80)("minWidth", 80)("name", t.lcZ(22, 71, "pairs_search_from_token.table.col_4"))("prop", "txCount")("sortable", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("minWidth", 100)("prop", "priceVariation24h")("name", t.lcZ(25, 73, "pairs_search_from_token.table.col_10"))("sortable", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 120)("minWidth", 120)("name", t.lcZ(28, 75, "pairs_search_from_token.table.col_11"))("sortable", !1)
            }
        }
        const H = function(l) {
            return {
                active: l
            }
        }
          , vn = function() {
            return ["far", "table-cells-large"]
        }
          , yn = function() {
            return ["far", "table-cells"]
        };
        function R(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "div", 13)(1, "div", 14)(2, "h3"),
                t._uU(3),
                t.TgZ(4, "span", 15),
                t._uU(5),
                t.qZA()(),
                t.TgZ(6, "div", 16)(7, "span"),
                t._uU(8),
                t.ALo(9, "translate"),
                t.qZA(),
                t.TgZ(10, "div", 17)(11, "button", 18),
                t.NdJ("click", function() {
                    t.CHM(o);
                    const g = t.oxw(2);
                    return t.KtG(g.changeWidth("sort"))
                }),
                t._UZ(12, "fa-icon", 19),
                t.ALo(13, "translate"),
                t.qZA(),
                t.TgZ(14, "button", 20),
                t.NdJ("click", function() {
                    t.CHM(o);
                    const g = t.oxw(2);
                    return t.KtG(g.changeWidth("full"))
                }),
                t._UZ(15, "fa-icon", 19),
                t.ALo(16, "translate"),
                t.qZA()()()(),
                t.TgZ(17, "div", 21),
                t.YNc(18, E, 17, 51, "ngx-datatable", 22),
                t.YNc(19, G, 30, 80, "ngx-datatable", 23),
                t.qZA()()
            }
            if (2 & l) {
                const o = t.oxw(2);
                t.xp6(3),
                t.hij("", o.tokenName, " "),
                t.xp6(2),
                t.Oqu(o.tokenSymbol),
                t.xp6(3),
                t.Oqu(t.lcZ(9, 11, "pairs_search_from_token.title")),
                t.xp6(3),
                t.Q6J("ngClass", t.VKq(17, H, "sort" === o.step)),
                t.xp6(1),
                t.Q6J("icon", t.DdM(19, vn))("ngbTooltip", t.lcZ(13, 13, "pairs_search_from_token.step_simplified")),
                t.xp6(2),
                t.Q6J("ngClass", t.VKq(20, H, "full" === o.step)),
                t.xp6(1),
                t.Q6J("icon", t.DdM(22, yn))("ngbTooltip", t.lcZ(16, 15, "pairs_search_from_token.step_extended")),
                t.xp6(3),
                t.Q6J("ngIf", !o.isFullTable),
                t.xp6(1),
                t.Q6J("ngIf", o.isFullTable)
            }
        }
        const x = function(l) {
            return {
                "panel-close": l
            }
        }
          , z = function() {
            return ["fal", "times"]
        };
        function Ln(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "div", 6)(1, "div", 7)(2, "button", 8),
                t.NdJ("click", function() {
                    t.CHM(o);
                    const g = t.oxw();
                    return t.KtG(g.pairSearchToken("close"))
                }),
                t._UZ(3, "fa-icon", 9),
                t.ALo(4, "translate"),
                t.qZA()(),
                t.YNc(5, an, 6, 14, "div", 10),
                t.YNc(6, R, 20, 23, "div", 11),
                t.qZA()
            }
            if (2 & l) {
                const o = t.oxw();
                t.Tol(o.step),
                t.Q6J("ngClass", t.VKq(9, x, o.close)),
                t.xp6(3),
                t.Q6J("icon", t.DdM(11, z))("ngbTooltip", t.lcZ(4, 7, "home.close")),
                t.xp6(2),
                t.Q6J("ngIf", o.isLoading),
                t.xp6(1),
                t.Q6J("ngIf", !o.isLoading)
            }
        }
        function An(l, s) {
            if (1 & l && (t.TgZ(0, "div", 64),
            t.GkF(1, 65),
            t.qZA()),
            2 & l) {
                const o = t.oxw()
                  , r = t.MAs(4);
                t.Tol(o.step),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", r)
            }
        }
        const V = function(l) {
            return {
                token: l
            }
        };
        function j(l, s) {
            if (1 & l) {
                const o = t.EpF();
                t.TgZ(0, "div", 66)(1, "button", 8),
                t.NdJ("click", function() {
                    t.CHM(o);
                    const g = t.oxw();
                    return t.KtG(g.pairSearchToken("close"))
                }),
                t._UZ(2, "fa-icon", 9),
                t.ALo(3, "translate"),
                t.qZA(),
                t.TgZ(4, "div", 14)(5, "h4"),
                t._uU(6, "Ooops \u{1f644}"),
                t.qZA(),
                t._UZ(7, "div", 67),
                t.ALo(8, "translate"),
                t.qZA(),
                t.TgZ(9, "div", 68)(10, "button", 69),
                t.NdJ("click", function() {
                    t.CHM(o);
                    const g = t.oxw();
                    return t.KtG(g.closeToRedirect())
                }),
                t._uU(11),
                t.ALo(12, "translate"),
                t.qZA(),
                t.TgZ(13, "button", 69),
                t.NdJ("click", function() {
                    t.CHM(o);
                    const g = t.oxw();
                    return t.KtG(g.pairSearchToken("close"))
                }),
                t._uU(14),
                t.ALo(15, "translate"),
                t.qZA()()()
            }
            if (2 & l) {
                const o = t.oxw();
                t.Tol(o.step),
                t.Q6J("ngClass", t.VKq(17, x, o.close)),
                t.xp6(2),
                t.Q6J("icon", t.DdM(19, z))("ngbTooltip", t.lcZ(3, 8, "home.close")),
                t.xp6(5),
                t.Q6J("innerHTML", t.xi3(8, 10, "pair_explorer.token_pairs_search_result_empty", t.VKq(20, V, o.tokenId)), t.oJD),
                t.xp6(4),
                t.Oqu(t.lcZ(12, 13, "pair_explorer.token_pairs_search_redirect")),
                t.xp6(3),
                t.Oqu(t.lcZ(15, 15, "pair_explorer.token_pairs_search_no_redirect"))
            }
        }
        function In(l, s) {
            1 & l && (t.TgZ(0, "span"),
            t._uU(1, "-"),
            t.qZA())
        }
        let Zn = (()=>{
            class l extends u.K9 {
                onResize() {
                    this._recalculate()
                }
                set tokenId(o) {
                    this._tokenId = o,
                    o && this._getPairs(o)
                }
                get tokenId() {
                    return this._tokenId
                }
                set step(o) {
                    this._step !== o && (this._step = o,
                    "full" === this._step ? this.sortTable = null : this.fullTable = null,
                    this._cdRef.detectChanges(),
                    this._recalculate())
                }
                get step() {
                    return this._step
                }
                constructor(o, r, g, p, m) {
                    super(),
                    this._pairsSearchService = o,
                    this._cdRef = r,
                    this._config = g,
                    this._breakpointObserver = p,
                    this._routingService = m,
                    this.isAutoSelect = !1,
                    this.pairsSearchByTokenClosed = new t.vpe,
                    this.autoSelectedOnlyOneResult = new t.vpe,
                    this.containerWidthChanged = new t.vpe,
                    this._step = "sort",
                    this.activeScroll = !0,
                    this.isLoading = !0,
                    this.tokenName = "",
                    this.tokenSymbol = "",
                    this.pairsFound = [],
                    this.ChainPage = L.$,
                    this.Chain = h.qop,
                    this.close = !1,
                    this.rowHover = null,
                    this._config.container = "body"
                }
                ngOnInit() {
                    this.activeScroll && (document.body.style.overflow = "hidden"),
                    this._breakpointObserver.observe([M.K5, M.mT]).pipe((0,
                    u.sL)(this)).subscribe(()=>{
                        this._recalculate()
                    }
                    )
                }
                _getPairs(o) {
                    this._pairsSearchService.searchPairsByToken(o, this.chain).pipe((0,
                    u.sL)(this), (0,
                    P.U)(r=>{
                        let g = this._pairsSearchService.formatPairsToken(r, this.chain);
                        return g = g.sort((p,m)=>m.liquidity - p.liquidity),
                        g.slice(0, 10)
                    }
                    ), (0,
                    n.x)(()=>{
                        this.isLoading = !1,
                        this._cdRef.detectChanges()
                    }
                    )).subscribe({
                        next: r=>{
                            if (this.isAutoSelect && r.length > 0)
                                return r.length > 1 ? this.pairsSearchByTokenClosed.emit(r[0]) : this.autoSelectedOnlyOneResult.emit(r[0]);
                            this.tokenName = r.length ? (r.find(g=>g.idToken === this.tokenId) ?? r[0]).realName : "",
                            this.tokenSymbol = r.length ? (r.find(g=>g.idToken === this.tokenId) ?? r[0]).symbol : "",
                            this.pairsFound = r,
                            this._cdRef.markForCheck()
                        }
                        ,
                        complete: ()=>{
                            this.isLoading = !1,
                            this._recalculate(),
                            this._cdRef.detectChanges()
                        }
                    })
                }
                getPairImage(o) {
                    if (o.logo)
                        return o.logo;
                    const r = h.i9O.getExchangeNameFromExchangeApi(h.i9O.getGenericExchangeApi(o.exchange), o.chain);
                    return h.CXF.getTokenLogoUrlFromChainTokenRepo(this.chain, r, o.checksum)
                }
                loadAlternativeLogo(o, r) {
                    if (r.altLogo)
                        return;
                    const g = `${h.CXF.getChainData(this.chain).trustWalletAssetsRepoUrl}${r.checksum}/logo.png`;
                    r.altLogo = g,
                    o.src = g
                }
                getExchangeName(o, r) {
                    return h.i9O.getExchangeNameFromExchangeApi(o, r)
                }
                reviewTokenSymbol(o, r) {
                    return h.i6H.getFirstValidCharacter(o, r)
                }
                get isFullTable() {
                    return "full" === this.step
                }
                pairSearchToken(o) {
                    this.pairsSearchByTokenClosed.emit(o)
                }
                activateRow(o) {
                    this.pairsSearchByTokenClosed.emit(o)
                }
                setRowHover(o) {
                    this.rowHover = o,
                    this._cdRef.detectChanges()
                }
                hasExchangeFeePercentagePools(o, r) {
                    return h.i9O.hasExchangeFeePercentagePools(o, r, this.chain)
                }
                get defaultApiExchange() {
                    return h.ibW
                }
                copyNumberText(o, r, g) {
                    o.stopPropagation(),
                    r = u.C6.toFixed(+r),
                    (0,
                    M.vQ)(r, g)
                }
                copyText(o, r, g) {
                    o.stopPropagation(),
                    (0,
                    M.vQ)(r, g)
                }
                _recalculate() {
                    this.sortTable && this.sortTable.recalculate(),
                    this.fullTable && this.fullTable.recalculate()
                }
                getVariationColor(o) {
                    return o < 0 ? "danger" : "success"
                }
                onDestroy() {
                    this.activeScroll && (document.body.style.overflow = "auto")
                }
                getFullPriceUSD(o) {
                    return void 0 !== o ? u.C6.toFixed(o) : ""
                }
                changeWidth(o) {
                    this.containerWidthChanged.emit(o),
                    setTimeout(()=>{
                        this.step = o,
                        this._recalculate()
                    }
                    , 1)
                }
                onRowClicked(o) {
                    "click" === o.type && this.pairsSearchByTokenClosed.emit(o.row),
                    "mouseenter" === o.type && this.setRowHover(o.row.id)
                }
                closeToRedirect() {
                    this._routingService.navigate(`/${this.chain}/${L.$.LiveNewPairs}`)
                }
            }
            return l.\u0275fac = function(o) {
                return new (o || l)(t.Y36(h.OoE),t.Y36(t.sBO),t.Y36(k.xI),t.Y36(en.Yg),t.Y36(v.Zn))
            }
            ,
            l.\u0275cmp = t.Xpm({
                type: l,
                selectors: [["app-token-pairs"]],
                viewQuery: function(o, r) {
                    if (1 & o && (t.Gf(A, 5),
                    t.Gf(I, 5)),
                    2 & o) {
                        let g;
                        t.iGM(g = t.CRH()) && (r.sortTable = g.first),
                        t.iGM(g = t.CRH()) && (r.fullTable = g.first)
                    }
                },
                hostBindings: function(o, r) {
                    1 & o && t.NdJ("resize", function() {
                        return r.onResize()
                    }, !1, t.Jf7)
                },
                inputs: {
                    chain: "chain",
                    tokenId: "tokenId",
                    isAutoSelect: "isAutoSelect",
                    step: "step",
                    backdrop: "backdrop",
                    activeScroll: "activeScroll"
                },
                outputs: {
                    pairsSearchByTokenClosed: "pairsSearchByTokenClosed",
                    autoSelectedOnlyOneResult: "autoSelectedOnlyOneResult",
                    containerWidthChanged: "containerWidthChanged"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 7,
                vars: 3,
                consts: [["class", "backdrop", 3, "click", 4, "ngIf"], ["class", "pairs-search-container", 3, "class", "ngClass", 4, "ngIf"], ["class", "pairs-search-container", 3, "class", 4, "ngIf"], ["noDataButtons", ""], ["noData", ""], [1, "backdrop", 3, "click"], [1, "pairs-search-container", 3, "ngClass"], [1, "actions-container"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], ["class", "loading-search", 3, "appLoading", 4, "ngIf"], ["class", "pair-search", 4, "ngIf"], [1, "loading-search", 3, "appLoading"], [1, "pair-search"], [1, "header"], [1, "badge", "token-symbol"], [1, "header-table"], [1, "steps"], ["type", "button", "aria-label", "Simplified version", 3, "ngClass", "click"], [3, "icon", "ngbTooltip"], ["type", "button", "aria-label", "Extended version", 3, "ngClass", "click"], [1, "body"], ["class", "material table", 3, "sorts", "scrollbarV", "scrollbarH", "count", "footerHeight", "rows", "rowHeight", "limit", "columnMode", "activate", "mouseleave", 4, "ngIf"], ["class", "material table", 3, "sorts", "scrollbarV", "scrollbarH", "count", "footerHeight", "rows", "rowHeight", "columnMode", "activate", "mouseleave", 4, "ngIf"], [1, "material", "table", 3, "sorts", "scrollbarV", "scrollbarH", "count", "footerHeight", "rows", "rowHeight", "limit", "columnMode", "activate", "mouseleave"], ["sortTable", ""], [3, "resizeable", "width", "minWidth", "name", "sortable", "frozenLeft"], ["ngx-datatable-cell-template", ""], [3, "resizeable", "width", "minWidth", "name", "sortable"], [3, "resizeable", "width", "minWidth", "name", "prop", "sortable"], [3, "resizeable", "width", "minWidth", "name", "sortable", "prop"], [1, "pair-info-container", 3, "click"], [1, "pair-info"], [1, "token-symbol-container"], [1, "token-letter"], ["alternativeLogo", ""], ["style", "display: none", "alt", "pair icon", 3, "src", "width", "load", "error", 4, "ngIf"], [3, "tokenRight", "tokenLeft", "isLink"], [1, "token-id"], ["alt", "pair icon", 2, "display", "none", 3, "src", "width", "load", "error"], ["imgPairLogo", ""], [1, "exchange-specific-version", 3, "ngStyle"], ["class", "fee-badge ms-1", "placement", "bottom", 3, "ngbTooltip", 4, "ngIf"], ["placement", "bottom", 1, "fee-badge", "ms-1", 3, "ngbTooltip"], ["class", "price", "placement", "auto", 3, "ngbTooltip", "click", 4, "ngIf", "ngIfElse"], ["priceTooltip", ""], ["placement", "auto", 1, "price", 3, "ngbTooltip", "click"], ["t3", "ngbTooltip"], [4, "ngIf", "ngIfElse"], [1, "material", "table", 3, "sorts", "scrollbarV", "scrollbarH", "count", "footerHeight", "rows", "rowHeight", "columnMode", "activate", "mouseleave"], ["fullTable", ""], [3, "resizeable", "width", "minWidth", "name", "prop", "sortable", 4, "ngIf"], ["headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "minWidth", "prop", "name", "sortable"], ["headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "width", "minWidth", "name", "sortable"], ["href", "javascript:", "placement", "top", 1, "copy", 3, "ngbTooltip", "click"], ["t1", "ngbTooltip"], ["icon", "copy", 1, "text-decoration-none", "d-inline-block", "ms-1"], [3, "class", 4, "ngIf", "ngIfElse"], ["noDataBadge", ""], [1, "badge", "bg-secondary"], [3, "timeMinutes", "color", "height", "candles"], [1, "actions"], [1, "pair-explorer-icon", 3, "appRouterLink", "ngbTooltip"], ["name", "pairExplorer", 1, "icon-pair-explorer", 3, "width"], [1, "pairs-search-container"], [3, "ngTemplateOutlet"], [1, "pairs-search-container", "no-results-block", 3, "ngClass"], [1, "header-table", 3, "innerHTML"], [1, "footer"], ["type", "button", 1, "btn", "btn-info", 3, "click"]],
                template: function(o, r) {
                    1 & o && (t.YNc(0, on, 1, 0, "div", 0),
                    t.YNc(1, Ln, 7, 12, "div", 1),
                    t.YNc(2, An, 2, 3, "div", 2),
                    t.YNc(3, j, 16, 22, "ng-template", null, 3, t.W1O),
                    t.YNc(5, In, 2, 0, "ng-template", null, 4, t.W1O)),
                    2 & o && (t.Q6J("ngIf", !!r.backdrop && !r.isAutoSelect),
                    t.xp6(1),
                    t.Q6J("ngIf", !r.isAutoSelect),
                    t.xp6(1),
                    t.Q6J("ngIf", r.isAutoSelect && 0 === r.pairsFound.length && !r.isLoading))
                },
                dependencies: [f.O5, f.mk, w.uH, w.BN, k._L, M.TH, C.xD, C.nE, C.UC, C.vq, tn.m, f.PC, nn.D, v.jY, X.lQ, f.tP, f.OU, f.JJ, y.yl, y.$p, O.aw, O.X$, h.khD, h.Uw1],
                styles: [".backdrop[_ngcontent-%COMP%]{position:absolute;width:100%;inset:0;height:100%;background-color:#fff;opacity:.7;z-index:999991}body.dark-theme   [_nghost-%COMP%]   .backdrop[_ngcontent-%COMP%]{background-color:#0b1217}body.dark-theme[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%]{background-color:#0b1217}body.light   [_nghost-%COMP%]   .backdrop[_ngcontent-%COMP%]{background-color:#fff}body.light[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%]{background-color:#fff}.pairs-search-container[_ngcontent-%COMP%]{background-color:#f4f5f6;padding:1.25rem .625rem .625rem;box-shadow:0 .25rem .25rem .0625rem #00000040;position:fixed;max-height:100vh;right:0;top:0;bottom:0;height:100%;z-index:999992;overflow-y:hidden}body.dark-theme   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]{background-color:#f4f5f6}@media (max-width: 1024px){.pairs-search-container[_ngcontent-%COMP%]{position:fixed}}.pairs-search-container.sort[_ngcontent-%COMP%]{width:100%}@media (max-width: 1024px){.pairs-search-container.sort[_ngcontent-%COMP%]{width:100%;height:100vh;z-index:999993}}.pairs-search-container.full[_ngcontent-%COMP%]{width:100%}@media (max-width: 1024px){.pairs-search-container.full[_ngcontent-%COMP%]{width:100%;height:100vh;z-index:999993}}.pairs-search-container[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{display:flex;margin-left:auto}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]{padding:.625rem}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding-bottom:1.25rem;border-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-color:#23323c}body.light   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-color:#e2e7ec}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:0}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;align-content:center}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]{border-radius:.625rem;background-color:#e2e7ec;padding:.25rem;display:flex;flex-wrap:nowrap}body.dark-theme   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]{background-color:#e2e7ec}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;height:1.875rem;background:none;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#818ea3}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background-color:#f4f5f6;color:#142028;border-radius:.375rem}body.dark-theme   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background-color:#3a4956}body.light   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{color:#fff}body.light   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{color:#142028}body.light[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{color:#142028}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]{cursor:pointer;max-width:8.4375rem}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .pair-info[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:flex;align-items:center;align-content:center}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .pair-info[_ngcontent-%COMP%]   .token-symbol-container[_ngcontent-%COMP%]{position:relative;min-width:1.25rem;min-height:1.25rem;z-index:0;margin-right:.3125rem}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .pair-info[_ngcontent-%COMP%]   .token-symbol-container[_ngcontent-%COMP%]   .token-letter[_ngcontent-%COMP%]{color:#fff;background-color:#23323c;border-radius:50%;text-align:center;height:1.25rem;width:1.25rem;position:absolute;top:0;left:0;font-size:12px;z-index:-1;display:flex;justify-content:center;align-items:center}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .pair-info[_ngcontent-%COMP%]   .token-symbol-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.25rem;width:1.25rem;border-radius:3.125rem}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .token-id[_ngcontent-%COMP%]{margin-left:1.5625rem;font-size:12px}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .token-symbols[_ngcontent-%COMP%]{font-weight:500;display:flex;gap:.125rem}.pairs-search-container[_ngcontent-%COMP%]   .pair-search[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .pair-info-container[_ngcontent-%COMP%]   .token-symbols[_ngcontent-%COMP%]   .token-name[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-weight:500}.fee-badge[_ngcontent-%COMP%]{line-height:1rem;border-radius:.3125rem;padding:.125rem .25rem;font-size:.625rem;display:inline-block;height:1.125rem;background-color:#00b8d8;color:#fff}.exchange-specific-version[_ngcontent-%COMP%]{line-height:1rem;border-radius:.3125rem;padding:.125rem .25rem;font-size:.625rem;display:inline-block;height:1.125rem}.exchange-specific-version[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:capitalize}[_nghost-%COMP%]     .ngx-datatable.material{height:45.625rem}@media (max-width: 599px){[_nghost-%COMP%]     .ngx-datatable.material{height:45.625rem!important}}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row{cursor:pointer!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row:hover{background-color:#e2e7ec!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#e2e7ec!important;border-color:#e2e7ec!important;align-items:center;border:none;border-radius:.625rem;display:flex;height:2.875rem!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-color:#e2e7ec!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028;background-color:#e2e7ec!important;background-image:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#fff}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#e2e7ec!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-cell{display:flex;align-items:center}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028;border-color:#f4f5f6!important;background-color:#f4f5f6!important;border:none;background-image:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028;border-color:#f4f5f6!important;background-color:#f4f5f6!important;border:none;background-image:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#f4f5f6!important}.pair-explorer-icon[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:20px}app-line-chart[_ngcontent-%COMP%]     .line-chart-container svg  {border-radius:0!important}.loading-search[_ngcontent-%COMP%]{display:flex;align-content:center;justify-content:center;align-items:center;position:relative;height:100%;width:100%;text-align:center}.loading-search[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{position:absolute;top:42%}@media (max-width: 600px){.loading-search[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{top:35%}}.token-symbol[_ngcontent-%COMP%]{background-color:#e2e7ec;font-size:12px}body.dark-theme   [_nghost-%COMP%]   .token-symbol[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .token-symbol[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .token-symbol[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .token-symbol[_ngcontent-%COMP%]{background-color:#e2e7ec}.copy[_ngcontent-%COMP%]{color:#142028;font-size:.6875rem}body.dark-theme   [_nghost-%COMP%]   .copy[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .copy[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%]{color:#142028}.price[_ngcontent-%COMP%]{cursor:pointer}.price[_ngcontent-%COMP%]:hover{background-color:#f4f5f6;padding:.125rem;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   .price[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.light   [_nghost-%COMP%]   .price[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}.no-results-block[_ngcontent-%COMP%]{padding:3.125rem 1.25rem 1.25rem}.no-results-block[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;top:1rem;right:.625rem}.no-results-block[_ngcontent-%COMP%]   .header-table[_ngcontent-%COMP%]{font-size:13px}.no-results-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:1.25rem}.no-results-block[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:13px;height:2.125rem;line-height:2.125rem;border-radius:3.125rem;box-shadow:none!important;margin-top:1.25rem;margin-right:1.25rem}@media (max-width: 400px){.no-results-block[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-right:.5rem}}.no-results-block[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active{background-color:#00a2bf;border-color:#00a2bf}.no-results-block[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child{margin-right:0}@media (max-width: 1023px){.no-results-block[_ngcontent-%COMP%]{padding-top:1.625rem}.no-results-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:24px}}.actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;cursor:pointer}.actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.0625rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#00b8d8!important}.actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#142028}body.dark-theme   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#fff}body.dark-theme[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#fff}body.light   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#142028}body.light[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    {color:#142028}.actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    :hover, .actions[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]    :focus{color:#00b8d8}"],
                changeDetection: 0
            }),
            l
        }
        )()
    }
    ,
    71928: (Fn,$,d)=>{
        d.d($, {
            j: ()=>Bn
        });
        var t = d(49319)
          , f = d(99703)
          , k = d(89383)
          , w = d(92498)
          , O = d(77575)
          , C = d(36895)
          , P = d(92216)
          , n = d(94650);
        function u(c, e) {
            if (1 & c && (n.TgZ(0, "a", 11),
            n._UZ(1, "img", 22),
            n._uU(2, " CoinMarketCap "),
            n.qZA()),
            2 & c) {
                const i = n.oxw();
                n.Q6J("href", i.cmcTokenLink, n.LSH),
                n.uIk("data-cmc-icon", i.tokenData.symbol)
            }
        }
        function v(c, e) {
            1 & c && n._UZ(0, "img", 24)
        }
        function y(c, e) {
            if (1 & c && (n.TgZ(0, "a", 11),
            n.YNc(1, v, 1, 0, "img", 23),
            n._uU(2, " Coingecko "),
            n.qZA()),
            2 & c) {
                const i = n.oxw();
                n.Q6J("href", i.coingeckoLink, n.LSH),
                n.xp6(1),
                n.Q6J("ngIf", i.coingeckoLink)
            }
        }
        function X(c, e) {
            1 & c && (n.TgZ(0, "div", 25),
            n._UZ(1, "img", 26),
            n._uU(2, " Coingecko "),
            n.qZA())
        }
        function h(c, e) {
            1 & c && n._UZ(0, "img", 28)
        }
        function M(c, e) {
            if (1 & c && (n.TgZ(0, "a", 11),
            n.YNc(1, h, 1, 0, "img", 27),
            n._uU(2, " Bubblemaps "),
            n.qZA()),
            2 & c) {
                const i = n.oxw();
                n.Q6J("href", i.bubbleMapsLink, n.LSH),
                n.xp6(1),
                n.Q6J("ngIf", i.bubbleMapsLink)
            }
        }
        function L(c, e) {
            if (1 & c) {
                const i = n.EpF();
                n.TgZ(0, "a", 29),
                n.NdJ("click", function() {
                    n.CHM(i);
                    const _ = n.oxw();
                    return n.KtG(_.addTokenMetamask())
                }),
                n._UZ(1, "img", 30),
                n._uU(2, " Metamask "),
                n.qZA()
            }
        }
        function nn(c, e) {
            1 & c && (n.TgZ(0, "div", 25),
            n._UZ(1, "img", 31),
            n._uU(2, " Metamask "),
            n.qZA())
        }
        function tn(c, e) {
            if (1 & c && (n.ynx(0),
            n.TgZ(1, "a", 32),
            n._UZ(2, "app-icon", 33),
            n._uU(3),
            n.ALo(4, "translate"),
            n.qZA(),
            n.BQk()),
            2 & c) {
                const i = n.oxw();
                n.xp6(1),
                n.Q6J("href", i.tokenInfo.nftCollection, n.LSH),
                n.xp6(1),
                n.Q6J("width", 17),
                n.xp6(1),
                n.hij(" ", n.lcZ(4, 3, "pair_explorer.nftCollection"), " ")
            }
        }
        function en(c, e) {
            1 & c && (n.ynx(0),
            n.TgZ(1, "div", 34),
            n._UZ(2, "app-icon", 33),
            n._uU(3),
            n.ALo(4, "translate"),
            n.qZA(),
            n.BQk()),
            2 & c && (n.xp6(2),
            n.Q6J("width", 17),
            n.xp6(1),
            n.hij(" ", n.lcZ(4, 2, "pair_explorer.nftCollection"), " "))
        }
        const A = function() {
            return ["fab", "github"]
        }
          , I = function(c, e) {
            return {
                text: "GitHub",
                link: c,
                icon: e
            }
        };
        function on(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.WLB(3, I, i.tokenInfo.github, n.DdM(2, A)))
            }
        }
        const an = function(c) {
            return {
                text: "GitHub",
                icon: c
            }
        };
        function cn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.VKq(3, an, n.DdM(2, A)))
            }
        }
        const Z = function() {
            return ["fab", "bitbucket"]
        }
          , J = function(c, e) {
            return {
                text: "Bitbucket",
                link: c,
                icon: e
            }
        };
        function Q(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.WLB(3, J, i.tokenInfo.bitbucket, n.DdM(2, Z)))
            }
        }
        const ln = function(c) {
            return {
                text: "Bitbucket",
                icon: c
            }
        };
        function rn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.VKq(3, ln, n.DdM(2, Z)))
            }
        }
        const _n = function(c) {
            return {
                text: "Website",
                link: c,
                icon: "desktop"
            }
        };
        function sn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(2, _n, i.tokenInfo.website))
            }
        }
        const gn = function() {
            return {
                text: "Website",
                icon: "desktop"
            }
        };
        function dn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.DdM(2, gn))
            }
        }
        const pn = function(c) {
            return {
                text: "Email",
                link: c,
                icon: "envelope"
            }
        };
        function mn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(2, pn, "mailto: " + i.tokenInfo.email))
            }
        }
        const D = function() {
            return {
                text: "Email",
                icon: "envelope"
            }
        };
        function S(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.DdM(2, D))
            }
        }
        const E = function() {
            return ["fab", "telegram"]
        }
          , N = function(c, e) {
            return {
                text: "Telegram",
                link: c,
                icon: e
            }
        };
        function hn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.WLB(3, N, i.tokenInfo.telegram, n.DdM(2, E)))
            }
        }
        const fn = function(c) {
            return {
                text: "Telegram",
                icon: c
            }
        };
        function bn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.VKq(3, fn, n.DdM(2, E)))
            }
        }
        const q = function() {
            return ["fab", "twitter"]
        }
          , U = function(c, e) {
            return {
                text: "Twitter",
                link: c,
                icon: e
            }
        };
        function Cn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.WLB(3, U, i.tokenInfo.twitter, n.DdM(2, q)))
            }
        }
        const un = function(c) {
            return {
                text: "Twitter",
                icon: c
            }
        };
        function Mn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.VKq(3, un, n.DdM(2, q)))
            }
        }
        const Y = function() {
            return ["fab", "discord"]
        }
          , W = function(c, e) {
            return {
                text: "Discord",
                link: c,
                icon: e
            }
        };
        function kn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.WLB(3, W, i.tokenInfo.discord, n.DdM(2, Y)))
            }
        }
        const On = function(c) {
            return {
                text: "Discord",
                icon: c
            }
        };
        function Pn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.VKq(3, On, n.DdM(2, Y)))
            }
        }
        const B = function() {
            return ["fab", "youtube"]
        }
          , F = function(c, e) {
            return {
                text: "Youtube",
                link: c,
                icon: e
            }
        };
        function xn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.WLB(3, F, i.tokenInfo.youtube, n.DdM(2, B)))
            }
        }
        const Tn = function(c) {
            return {
                text: "Youtube",
                icon: c
            }
        };
        function wn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.VKq(3, Tn, n.DdM(2, B)))
            }
        }
        const K = function() {
            return ["fab", "instagram"]
        }
          , G = function(c, e) {
            return {
                text: "Instagram",
                link: c,
                icon: e
            }
        };
        function H(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.WLB(3, G, i.tokenInfo.instagram, n.DdM(2, K)))
            }
        }
        const vn = function(c) {
            return {
                text: "Instagram",
                icon: c
            }
        };
        function yn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.VKq(3, vn, n.DdM(2, K)))
            }
        }
        const R = function() {
            return ["fab", "tiktok"]
        }
          , x = function(c, e) {
            return {
                text: "Tiktok",
                link: c,
                icon: e
            }
        };
        function z(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.WLB(3, x, i.tokenInfo.tiktok, n.DdM(2, R)))
            }
        }
        const Ln = function(c) {
            return {
                text: "Tiktok",
                icon: c
            }
        };
        function An(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.VKq(3, Ln, n.DdM(2, R)))
            }
        }
        const V = function() {
            return ["fab", "facebook"]
        }
          , j = function(c, e) {
            return {
                text: "Facebook",
                link: c,
                icon: e
            }
        };
        function In(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.WLB(3, j, i.tokenInfo.facebook, n.DdM(2, V)))
            }
        }
        const Zn = function(c) {
            return {
                text: "Facebook",
                icon: c
            }
        };
        function l(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.VKq(3, Zn, n.DdM(2, V)))
            }
        }
        const s = function() {
            return ["fab", "medium"]
        }
          , o = function(c, e) {
            return {
                text: "Medium",
                link: c,
                icon: e
            }
        };
        function r(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.WLB(3, o, i.tokenInfo.medium, n.DdM(2, s)))
            }
        }
        const g = function(c) {
            return {
                text: "Medium",
                icon: c
            }
        };
        function p(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.VKq(3, g, n.DdM(2, s)))
            }
        }
        const m = function() {
            return ["fab", "reddit"]
        }
          , b = function(c, e) {
            return {
                text: "Reddit",
                link: c,
                icon: e
            }
        };
        function Jn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.WLB(3, b, i.tokenInfo.reddit, n.DdM(2, m)))
            }
        }
        const Qn = function(c) {
            return {
                text: "Reddit",
                icon: c
            }
        };
        function Dn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.VKq(3, Qn, n.DdM(2, m)))
            }
        }
        const Sn = function(c) {
            return {
                text: "Extra info",
                link: c,
                icon: "link"
            }
        };
        function En(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                const i = n.oxw()
                  , a = n.MAs(88);
                n.Q6J("ngTemplateOutlet", a)("ngTemplateOutletContext", n.VKq(2, Sn, i.tokenInfo.extraInfo))
            }
        }
        const Nn = function() {
            return {
                text: "Extra info",
                icon: "link"
            }
        };
        function qn(c, e) {
            if (1 & c && n.GkF(0, 35),
            2 & c) {
                n.oxw();
                const i = n.MAs(90);
                n.Q6J("ngTemplateOutlet", i)("ngTemplateOutletContext", n.DdM(2, Nn))
            }
        }
        function Un(c, e) {
            if (1 & c && (n.TgZ(0, "a", 36),
            n._UZ(1, "fa-icon", 37),
            n._uU(2),
            n.qZA()),
            2 & c) {
                const a = e.icon
                  , _ = e.text;
                n.Q6J("href", e.link, n.LSH),
                n.xp6(1),
                n.Q6J("icon", a)("fixedWidth", !0),
                n.xp6(1),
                n.hij(" ", _, " ")
            }
        }
        function Yn(c, e) {
            if (1 & c && (n.TgZ(0, "div", 38),
            n._UZ(1, "fa-icon", 39),
            n._uU(2),
            n.qZA()),
            2 & c) {
                const i = e.icon
                  , a = e.text;
                n.xp6(1),
                n.Q6J("icon", i)("fixedWidth", !0),
                n.xp6(1),
                n.hij(" ", a, " ")
            }
        }
        const Wn = function() {
            return ["fal", "times"]
        };
        let Bn = (()=>{
            class c {
                set tokenCustomInfo(i) {
                    this.tokenInfo = i,
                    this._tokenData = {
                        id: i.id,
                        symbol: i.symbol,
                        logo: i.logo,
                        decimals: 0
                    }
                }
                set tokenData(i) {
                    this._tokenData = i,
                    this.tokenInfo = {
                        ...i.tokenInfo
                    }
                }
                get tokenData() {
                    return this._tokenData
                }
                constructor(i) {
                    this.modal = i,
                    this.Chain = f.qop,
                    this.isLiquidityLockSupported = !1
                }
                ngOnInit() {
                    this.isLiquidityLockSupported = f.CXF.getChainData(this.chain).liquidityProviderSupported
                }
                addTokenMetamask() {
                    f.i6H.addToMetamask(this.tokenData.id, this.tokenData.symbol, this.tokenData.decimals, this.tokenData.logo)
                }
            }
            return c.\u0275fac = function(i) {
                return new (i || c)(n.Y36(t.Kz))
            }
            ,
            c.\u0275cmp = n.Xpm({
                type: c,
                selectors: [["app-links-social-modal"]],
                inputs: {
                    tokenCustomInfo: "tokenCustomInfo",
                    tokenData: "tokenData",
                    unicrypt: "unicrypt",
                    teamLockUrl: "teamLockUrl",
                    isDarkTheme: "isDarkTheme",
                    showMetamaskIcon: "showMetamaskIcon",
                    coingeckoLink: "coingeckoLink",
                    bubbleMapsLink: "bubbleMapsLink",
                    chain: "chain",
                    cmcTokenLink: "cmcTokenLink",
                    dxSaleLink: "dxSaleLink",
                    mudraLink: "mudraLink",
                    pairSelected: "pairSelected"
                },
                standalone: !0,
                features: [n.jDz],
                decls: 91,
                vars: 84,
                consts: [[1, "modal-header"], [1, "mt-3"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], [1, "modal-body", "pt-0", "pb-0"], [1, "container", "p-0"], [1, "row"], [1, "col-6", "social-block"], [1, "social-block__title"], [1, "social-links"], ["target", "_blank", "rel", "noopener", "class", "token d-flex", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 1, "token", "d-flex", 3, "href"], ["alt", "scanner logo", 3, "src"], ["class", "token disabled d-flex", 4, "ngIf"], ["href", "javascript:", "class", "token d-flex", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [1, "modal-footer", "d-flex", "mt-2"], [1, "social-links-description"], ["href", "https://docs.google.com/forms/d/e/1FAIpQLSd1BAqjAl9nntlS2mOk76tE0Q-dEf-AT1bUblDXikjZ-PNP1Q/viewform?usp=sharing", "target", "_blank", "rel", "noopener"], ["socialLinkEnabled", ""], ["socialLinkDisabled", ""], ["src", "assets/img/cmc-icon-blue.jpeg", "alt", "CMC logo", 1, "cmc-icon"], ["src", "assets/img/coingecko.png", "alt", "Coingecko logo", 4, "ngIf"], ["src", "assets/img/coingecko.png", "alt", "Coingecko logo"], [1, "token", "disabled", "d-flex"], ["src", "assets/img/coingecko.png", "alt", "Coingecko logo", 1, "disabled", "opacity"], ["src", "assets/img/bubblemaps.png", "alt", "Bubblemaps logo", 4, "ngIf"], ["src", "assets/img/bubblemaps.png", "alt", "Bubblemaps logo"], ["href", "javascript:", 1, "token", "d-flex", 3, "click"], ["src", "assets/img/metamask.svg", "alt", "Metamask logo", 1, "no-background"], ["src", "assets/img/metamask.svg", "alt", "Metamask logo", 1, "no-background", "disabled", "opacity"], ["target", "_blank", "rel", "noopener", 1, "d-flex", "custom-icon", 3, "href"], ["name", "nft", 3, "width"], [1, "d-flex", "custom-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener", 1, "d-flex", 3, "href"], ["size", "sm", 3, "icon", "fixedWidth"], [1, "d-flex"], ["size", "sm", 1, "disabled", 3, "icon", "fixedWidth"]],
                template: function(i, a) {
                    1 & i && (n.TgZ(0, "div", 0)(1, "h4", 1),
                    n._uU(2),
                    n.ALo(3, "appSafe"),
                    n.ALo(4, "translate"),
                    n.qZA(),
                    n.TgZ(5, "button", 2),
                    n.NdJ("click", function() {
                        return a.modal.close("Close click")
                    }),
                    n._UZ(6, "fa-icon", 3),
                    n.ALo(7, "translate"),
                    n.qZA()(),
                    n.TgZ(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8),
                    n._uU(13),
                    n.ALo(14, "translate"),
                    n.qZA(),
                    n.TgZ(15, "div", 9),
                    n.YNc(16, u, 3, 2, "a", 10),
                    n.TgZ(17, "a", 11),
                    n.ALo(18, "scannerTokenUrl"),
                    n._UZ(19, "img", 12),
                    n.ALo(20, "scannerLogoUrl"),
                    n._uU(21),
                    n.ALo(22, "translate"),
                    n.qZA(),
                    n.YNc(23, y, 3, 2, "a", 10),
                    n.YNc(24, X, 3, 0, "div", 13),
                    n.YNc(25, M, 3, 2, "a", 10),
                    n.YNc(26, L, 3, 0, "a", 14),
                    n.YNc(27, nn, 3, 0, "div", 13),
                    n.qZA(),
                    n.TgZ(28, "div", 8),
                    n._uU(29),
                    n.ALo(30, "translate"),
                    n.qZA(),
                    n.TgZ(31, "div", 9),
                    n.YNc(32, tn, 5, 5, "ng-container", 15),
                    n.YNc(33, en, 5, 4, "ng-container", 15),
                    n.qZA(),
                    n.TgZ(34, "div", 8),
                    n._uU(35),
                    n.ALo(36, "translate"),
                    n.qZA(),
                    n.TgZ(37, "div", 9),
                    n.YNc(38, on, 1, 6, "ng-container", 16),
                    n.YNc(39, cn, 1, 5, "ng-container", 16),
                    n.YNc(40, Q, 1, 6, "ng-container", 16),
                    n.YNc(41, rn, 1, 5, "ng-container", 16),
                    n.qZA()(),
                    n.TgZ(42, "div", 7)(43, "div", 8),
                    n._uU(44),
                    n.ALo(45, "translate"),
                    n.qZA(),
                    n.TgZ(46, "div", 9),
                    n.YNc(47, sn, 1, 4, "ng-container", 16),
                    n.YNc(48, dn, 1, 3, "ng-container", 16),
                    n.YNc(49, mn, 1, 4, "ng-container", 16),
                    n.YNc(50, S, 1, 3, "ng-container", 16),
                    n.YNc(51, hn, 1, 6, "ng-container", 16),
                    n.YNc(52, bn, 1, 5, "ng-container", 16),
                    n.YNc(53, Cn, 1, 6, "ng-container", 16),
                    n.YNc(54, Mn, 1, 5, "ng-container", 16),
                    n.YNc(55, kn, 1, 6, "ng-container", 16),
                    n.YNc(56, Pn, 1, 5, "ng-container", 16),
                    n.YNc(57, xn, 1, 6, "ng-container", 16),
                    n.YNc(58, wn, 1, 5, "ng-container", 16),
                    n.YNc(59, H, 1, 6, "ng-container", 16),
                    n.YNc(60, yn, 1, 5, "ng-container", 16),
                    n.YNc(61, z, 1, 6, "ng-container", 16),
                    n.YNc(62, An, 1, 5, "ng-container", 16),
                    n.YNc(63, In, 1, 6, "ng-container", 16),
                    n.YNc(64, l, 1, 5, "ng-container", 16),
                    n.YNc(65, r, 1, 6, "ng-container", 16),
                    n.YNc(66, p, 1, 5, "ng-container", 16),
                    n.YNc(67, Jn, 1, 6, "ng-container", 16),
                    n.YNc(68, Dn, 1, 5, "ng-container", 16),
                    n.YNc(69, En, 1, 4, "ng-container", 16),
                    n.YNc(70, qn, 1, 3, "ng-container", 16),
                    n.qZA()()()()(),
                    n.TgZ(71, "div", 17)(72, "div", 18)(73, "p"),
                    n._uU(74),
                    n.ALo(75, "translate"),
                    n.qZA(),
                    n.TgZ(76, "p"),
                    n._uU(77),
                    n.ALo(78, "translate"),
                    n.qZA(),
                    n.TgZ(79, "p"),
                    n._uU(80),
                    n.ALo(81, "translate"),
                    n.TgZ(82, "a", 19),
                    n._uU(83),
                    n.ALo(84, "translate"),
                    n.qZA(),
                    n._uU(85),
                    n.ALo(86, "translate"),
                    n.qZA()()(),
                    n.YNc(87, Un, 3, 4, "ng-template", null, 20, n.W1O),
                    n.YNc(89, Yn, 3, 3, "ng-template", null, 21, n.W1O)),
                    2 & i && (n.xp6(2),
                    n.AsE(" ", n.lcZ(3, 52, a.tokenData.symbol), " ", n.lcZ(4, 54, "pair_explorer.links_modal_title"), " "),
                    n.xp6(4),
                    n.Q6J("icon", n.DdM(83, Wn))("ngbTooltip", n.lcZ(7, 56, "home.close")),
                    n.xp6(7),
                    n.Oqu(n.lcZ(14, 58, "pair_explorer.section_title_2")),
                    n.xp6(3),
                    n.Q6J("ngIf", a.cmcTokenLink),
                    n.xp6(1),
                    n.Q6J("href", n.xi3(18, 60, a.chain, a.tokenData.id), n.LSH),
                    n.xp6(2),
                    n.Q6J("src", n.lcZ(20, 63, a.chain), n.LSH),
                    n.xp6(2),
                    n.hij(" ", n.lcZ(22, 65, "pair_explorer.view_contract"), " "),
                    n.xp6(2),
                    n.Q6J("ngIf", a.coingeckoLink),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.coingeckoLink),
                    n.xp6(1),
                    n.Q6J("ngIf", a.bubbleMapsLink),
                    n.xp6(1),
                    n.Q6J("ngIf", a.showMetamaskIcon),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.showMetamaskIcon),
                    n.xp6(2),
                    n.Oqu(n.lcZ(30, 67, "pair_explorer.section_title_3")),
                    n.xp6(3),
                    n.Q6J("ngIf", a.tokenInfo.nftCollection),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.nftCollection),
                    n.xp6(2),
                    n.Oqu(n.lcZ(36, 69, "pair_explorer.section_title_4")),
                    n.xp6(3),
                    n.Q6J("ngIf", a.tokenInfo.github),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.github),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.bitbucket),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.bitbucket),
                    n.xp6(3),
                    n.Oqu(n.lcZ(45, 71, "pair_explorer.section_title_5")),
                    n.xp6(3),
                    n.Q6J("ngIf", a.tokenInfo.website),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.website),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.email),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.email),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.telegram),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.telegram),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.twitter),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.twitter),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.discord),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.discord),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.youtube),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.youtube),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.instagram),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.instagram),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.tiktok),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.tiktok),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.facebook),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.facebook),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.medium),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.medium),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.reddit),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.reddit),
                    n.xp6(1),
                    n.Q6J("ngIf", a.tokenInfo.extraInfo),
                    n.xp6(1),
                    n.Q6J("ngIf", !a.tokenInfo.extraInfo),
                    n.xp6(4),
                    n.Oqu(n.lcZ(75, 73, "pair_explorer.social_description_1")),
                    n.xp6(3),
                    n.Oqu(n.lcZ(78, 75, "pair_explorer.social_description_2")),
                    n.xp6(3),
                    n.hij(" ", n.lcZ(81, 77, "pair_explorer.social_description_3_a"), " "),
                    n.xp6(3),
                    n.Oqu(n.lcZ(84, 79, "pair_explorer.social_description_3_b")),
                    n.xp6(2),
                    n.hij(" ", n.lcZ(86, 81, "pair_explorer.social_description_3_c"), " "))
                },
                dependencies: [P.uH, P.BN, t._L, C.O5, O.lQ, C.tP, w.yl, k.aw, k.X$, f.tAw, f.x_$],
                styles: [".social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]{color:#818ea3;margin-bottom:.9375rem;font-size:12px;margin-top:1.875rem}body.dark-theme   [_nghost-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]{color:#818ea3}.social-block[_ngcontent-%COMP%]   .social-block__title[_ngcontent-%COMP%]:first-child{margin-bottom:.9375rem;margin-top:0}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028;font-size:13px;margin-bottom:.9375rem;line-height:1.125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.125rem;margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#00b8d8!important}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:1.125rem;max-width:1.125rem;margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a.token[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:.0625rem solid white;border-radius:.625rem;background-color:#fff}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a.token.disabled[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.2}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#818ea3;font-size:13px;margin-bottom:.9375rem;opacity:.5;line-height:1.125rem;cursor:default}body.dark-theme   [_nghost-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#818ea3}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.125rem;margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:1.125rem;max-width:1.125rem;margin-right:.3125rem}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div.token[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:.0625rem solid white;border-radius:.625rem;background-color:#fff}.social-block[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   div.token.disabled[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.2}.social-links-description[_ngcontent-%COMP%]{color:#818ea3;border-top:1px solid #23323c;padding-top:1.25rem;font-size:12px}body.dark-theme   [_nghost-%COMP%]   .social-links-description[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .social-links-description[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .social-links-description[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .social-links-description[_ngcontent-%COMP%]{color:#818ea3}.social-links-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.625rem;font-size:12px}.social-links-description[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:#00b8d8;cursor:pointer}.social-links-description[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{text-decoration:underline}[_nghost-%COMP%]     .social-block .social-links a.custom-icon svg path{fill:#142028}[_nghost-%COMP%]     .social-block .social-links a:hover.custom-icon svg path, [_nghost-%COMP%]     .social-block .social-links a:focus.custom-icon svg path{fill:#00b8d8}body.dark-theme   [_nghost-%COMP%]     .social-block .social-links a{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .social-block .social-links a.custom-icon svg path{fill:#fff!important}body.dark-theme   [_nghost-%COMP%]     .social-block .social-links a:hover.custom-icon svg path, body.dark-theme   [_nghost-%COMP%]     .social-block .social-links a:focus.custom-icon svg path{fill:#00b8d8!important}"],
                changeDetection: 0
            }),
            c
        }
        )()
    }
}]);
